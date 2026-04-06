"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16922, 21753, 22920], {
        1249: (e, t, r) => {
            r.d(t, {
                g: () => a
            });

            function a(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        63395: (e, t, r) => {
            r.d(t, {
                GD: () => o,
                Km: () => l,
                Sq: () => s
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(581454), r(737550);
            var a = () => r(642157),
                i = () => r(832375);
            let n = 10 * r(627179).TD;
            async function o(e) {
                let {
                    environment: t,
                    userId: a,
                    spaceId: i
                } = e, o = r(771827).x.getPromptsState({
                    userId: a,
                    spaceId: i
                });
                if (null != o && o.loadingDone || !e.force && null != o && o.lastFetchedAt && o.categories && !o.error && Date.now() - o.lastFetchedAt < n) return;
                let s = (0, r(975162).yX)();
                r(771827).x.setPromptsState({
                    spaceId: i,
                    userId: a,
                    state: {
                        categories: null == o ? void 0 : o.categories,
                        usage: null == o ? void 0 : o.usage,
                        createdTimes: null == o ? void 0 : o.createdTimes,
                        hasMore: null == o ? void 0 : o.hasMore,
                        loadingDone: s.promise,
                        error: void 0,
                        lastFetchedAt: null == o ? void 0 : o.lastFetchedAt
                    }
                });
                try {
                    let n = await t.api.callCellCompatibleApi({
                        eventName: "getUserPromptsInSpace",
                        environment: t,
                        data: {
                            spaceId: i,
                            loadAll: e.loadAll
                        },
                        userId: a,
                        cellNavigation: {
                            cellId: void 0,
                            recordId: void 0,
                            spaceId: i
                        }
                    });
                    "success" === n.type && (await (0, r(31069)._)({
                        currentUserId: t.currentUser.id,
                        defaultRecordCache: t.defaultRecordCache,
                        inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                        recordMap: r(412951).RecordMapWithRole.create(n.data.recordMap),
                        debugSource: "fetchUserPromptsInSpace",
                        isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                    }), r(771827).x.setPromptsState({
                        spaceId: i,
                        userId: a,
                        state: {
                            categories: n.data.categories,
                            usage: n.data.usage,
                            createdTimes: n.data.createdTimes,
                            hasMore: n.data.hasMore,
                            loadingDone: s.promise,
                            error: void 0,
                            lastFetchedAt: Date.now()
                        }
                    }))
                } catch (e) {
                    (0, r(222024).t)().error({
                        from: "userPromptsActions",
                        type: "fetchUserPromptsInSpaceFailed",
                        error: e
                    }), r(771827).x.setPromptsState({
                        spaceId: i,
                        userId: a,
                        state: {
                            categories: null == o ? void 0 : o.categories,
                            usage: null == o ? void 0 : o.usage,
                            createdTimes: null == o ? void 0 : o.createdTimes,
                            hasMore: null == o ? void 0 : o.hasMore,
                            loadingDone: s.promise,
                            error: "failed",
                            lastFetchedAt: null == o ? void 0 : o.lastFetchedAt
                        }
                    })
                } finally {
                    let e = r(771827).x.getPromptsState({
                        userId: a,
                        spaceId: i
                    });
                    e && e.loadingDone && r(771827).x.setPromptsState({
                        spaceId: i,
                        userId: a,
                        state: { ...e,
                            loadingDone: void 0
                        }
                    })
                }
            }

            function s(e) {
                let t, {
                        userId: n,
                        spaceId: o,
                        blockId: s,
                        isNowSkill: l,
                        blockStore: d
                    } = e,
                    c = r(771827).x.getPromptsState({
                        userId: n,
                        spaceId: o
                    });
                if (!(null != c && c.categories)) return;
                let u = c.categories;
                if (l)
                    if (d.getCreatedById() === n) t = u.createdByMe.items.some(e => e.blockId === s) ? u : { ...u,
                        createdByMe: {
                            items: [{
                                blockId: s,
                                badge: void 0
                            }, ...u.createdByMe.items],
                            total: u.createdByMe.total + 1
                        }
                    };
                    else {
                        let e = function(e) {
                            let t = !1,
                                r = !1,
                                n = new Set,
                                o = e;
                            for (; o && !n.has(o.id);) {
                                n.add(o.id);
                                let e = o.getPermissionItems();
                                for (let i of e) a().Lg(i) && (t = !0), (a()._S(i) || a().gl(i) || a().ZK(i) || a().nl(i)) && (r = !0);
                                if (e.length > 0) break;
                                let s = o.getParentPointer();
                                if (s && s.table === i().evP && s.id !== o.id) o = o.getParentBlockStore();
                                else {
                                    (null == s ? void 0 : s.table) === i().yKj ? r = !0 : (null == s ? void 0 : s.table) === i().NXh && (t = !0);
                                    break
                                }
                            }
                            return t ? "workspace" : r ? "teamspaces" : "shared"
                        }(d);
                        t = u.shared.items.includes(s) || u.teamspaces.items.includes(s) || u.workspace.items.includes(s) ? u : { ...u,
                            [e]: {
                                items: [s, ...u[e].items],
                                total: u[e].total + 1
                            }
                        }
                    }
                else t = {
                    createdByMe: {
                        items: u.createdByMe.items.filter(e => e.blockId !== s),
                        total: Math.max(0, u.createdByMe.total - !!u.createdByMe.items.some(e => e.blockId === s))
                    },
                    shared: {
                        items: u.shared.items.filter(e => e !== s),
                        total: Math.max(0, u.shared.total - !!u.shared.items.includes(s))
                    },
                    teamspaces: {
                        items: u.teamspaces.items.filter(e => e !== s),
                        total: Math.max(0, u.teamspaces.total - !!u.teamspaces.items.includes(s))
                    },
                    workspace: {
                        items: u.workspace.items.filter(e => e !== s),
                        total: Math.max(0, u.workspace.total - !!u.workspace.items.includes(s))
                    }
                };
                r(771827).x.setPromptsState({
                    userId: n,
                    spaceId: o,
                    state: { ...c,
                        categories: t,
                        lastFetchedAt: void 0
                    }
                })
            }

            function l(e) {
                var t, a;
                let {
                    userId: i,
                    spaceId: n,
                    blockId: o
                } = e, s = r(771827).x.getPromptsState({
                    userId: i,
                    spaceId: n
                });
                if (!s) return;
                let l = Date.now(),
                    d = (null == (t = s.usage) ? void 0 : t.find(e => e.promptBlockId === o)) ? null == (a = s.usage) ? void 0 : a.map(e => e.promptBlockId === o ? { ...e,
                        usageCount: e.usageCount + 1,
                        lastUsedTime: l
                    } : e) : [...s.usage ? ? [], {
                        promptBlockId: o,
                        usageCount: 1,
                        lastUsedTime: l
                    }];
                r(771827).x.setPromptsState({
                    userId: i,
                    spaceId: n,
                    state: { ...s,
                        usage: d
                    }
                })
            }
        },
        67207: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => a,
                personSlashIcon: () => i
            }), r(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                i = (0, r(104509).wt)("personSlash", a, "default")
        },
        72762: (e, t, r) => {
            r.d(t, {
                o: () => a
            });

            function a(e) {
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
                }), r(639675).Ay.setState({ ...r(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        143147: (e, t, r) => {
            r.d(t, {
                K$: () => o,
                XA: () => d
            }), r(16280), r(410838), r(944114), r(898992), r(354520), r(672577), r(737550);
            var a = () => r(970831),
                i = () => r(832375),
                n = () => r(63395);

            function o(e) {
                let {
                    mentions: t,
                    threadStore: a,
                    clientStore: n,
                    environment: o,
                    spaceStore: s
                } = e, {
                    chatThreadStore: l
                } = function(e) {
                    let {
                        threadStore: t,
                        clientStore: a,
                        environment: n,
                        spaceId: o,
                        threadId: s
                    } = e;
                    if (t) return {
                        chatThreadStore: a.getOrCreateClientAIChatThreadStore(t.id),
                        isNewThread: !1
                    };
                    let l = s ? ? (0, r(295447).Z1)({
                        environment: n,
                        table: i().Toz,
                        spaceId: o
                    });
                    return {
                        chatThreadStore: a.getOrCreateClientAIChatThreadStore(l),
                        isNewThread: !0
                    }
                }({
                    threadStore: a,
                    clientStore: n,
                    environment: o,
                    spaceId: s.id
                });
                l.setState({ ...l.state,
                    stagedData: { ...l.state.stagedData,
                        mentionStagedData: t
                    }
                })
            }
            async function s(e) {
                let {
                    environment: t,
                    threadStore: a,
                    spaceId: i,
                    steps: n
                } = e, o = await t.api.callApi({
                    eventName: "queueAgentChatMessage",
                    environment: t,
                    data: {
                        threadId: a.id,
                        spaceId: i,
                        steps: n
                    },
                    headers: (0, r(115118).WS)({
                        spaceId: i
                    })
                });
                if ("success" !== o.type) throw o.error;
                if (o.data.recordMap) {
                    let e = t.currentUser.id;
                    (0, r(31069)._)({
                        currentUserId: t.currentUser.id,
                        defaultRecordCache: t.defaultRecordCache,
                        userId: e,
                        inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                        recordMap: r(412951).RecordMapWithRole.create(o.data.recordMap),
                        debugSource: "queueAgentChatMessage",
                        force: !0,
                        isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                    })
                }
            }
            async function l(e) {
                let {
                    threadStore: t,
                    environment: a,
                    clientStore: i,
                    inferenceSpaceStore: n,
                    userStore: o,
                    preUserSteps: s,
                    userStep: l,
                    chatThreadStore: d,
                    clearLocalMentions: c,
                    sendPatchResponse: u
                } = e;
                if (!(0, r(60123).T)(t)) return !1;
                let p = [...s, l],
                    {
                        serverCommitResult: h
                    } = (0, r(377796).createAndCommit)({
                        userAction: "unifiedChatInputActions.persistMultiplayerThreadMessage",
                        environment: a,
                        cellTarget: {
                            spaceWithId: n.id
                        },
                        canUndo: !1,
                        perform: e => {
                            (0, r(757688).Vn)({
                                environment: a,
                                spaceStore: n,
                                threadStore: t,
                                userStore: o,
                                addSteps: p,
                                transaction: e
                            }), (0, r(757688).Mi)({
                                threadStore: t,
                                transaction: e,
                                updatedById: o.id,
                                updatedByTable: "notion_user"
                            })
                        }
                    });
                return r(247438).jgW(l.value).some(r(697006).ut) && (await h, await (0, r(757688).WE)({
                    environment: a,
                    clientStore: i,
                    threadStore: t,
                    sendPatchResponse: u,
                    stepIdsToInclude: [l.id]
                })), d.setState({ ...d.state,
                    stagedData: { ...d.state.stagedData,
                        mentionStagedData: new(r(227318)).d
                    }
                }), c && c(), !0
            }
            async function d(e) {
                let t, {
                        aiChatFeatureController: o,
                        args: d,
                        clientStore: c,
                        environment: u,
                        mainEditorCurrentBlockStore: p,
                        peekViewBlockStore: h,
                        inferenceContext: g,
                        sourceIdForEventCorrelation: f,
                        threadStore: v,
                        parentPointer: S,
                        invokedFromBlockId: m,
                        temporaryAiThreadManager: y,
                        sendPartialTranscript: x,
                        sendPatchResponse: b,
                        inputSurfaceOverride: I,
                        createdSource: w
                    } = e,
                    {
                        prompt: C,
                        config: k,
                        prebuiltPrompt: T,
                        pendingPlanModeStep: M
                    } = d,
                    {
                        promptWithoutSelectionContextTokens: j,
                        hasSelectionContextTokens: A
                    } = function(e) {
                        if (!e || 0 === e.length) return {
                            promptWithoutSelectionContextTokens: e,
                            hasSelectionContextTokens: !1
                        };
                        let t = !1,
                            a = r(247438).RQ(e).filter(e => !(r(247438).qXl(e) && r(247438).uoE(r(247438).uPN(e))) || (t = !0, !1));
                        return {
                            promptWithoutSelectionContextTokens: a.length > 0 ? r(247438).bBR(a) : void 0,
                            hasSelectionContextTokens: t
                        }
                    }(C),
                    U = (null == T ? void 0 : T.displayText) ? ? j,
                    P = v,
                    B = !1;
                if (!g) throw Error("No inference context");
                let {
                    spaceStore: D,
                    userStore: R,
                    spaceViewStore: E
                } = g;
                if (!D) throw Error("No space store");
                if (P) {
                    let e = (0, r(540328).xX)({
                        threadStore: P,
                        environment: u,
                        spaceStore: D,
                        userStore: R
                    });
                    e && e !== P && (P = e, B = !0)
                }
                let V = (0, r(708929).vE)([p, h].filter(r(722371).O9));
                V && r(307594).DL({
                        pageStore: V,
                        environment: u,
                        triggeredFrom: "agent"
                    }), c.setState({ ...c.state,
                        userSelectedConfig: !0
                    }),
                    function(e) {
                        let {
                            environment: t,
                            threadStore: a
                        } = e;
                        if (!a) return;
                        let i = a.getTranscript().find(e => "search" === e.type);
                        i && void 0 === i.showResults && (0, r(470474).V)({
                            environment: t,
                            threadStore: a,
                            stepId: i.id,
                            traceId: i.traceId,
                            showResults: !1
                        })
                    }({
                        environment: u,
                        threadStore: P
                    });
                let _ = y.getOrCreateThreadId({
                        environment: u,
                        spaceId: D.id,
                        maybeThreadStore: P
                    }),
                    F = c.getOrCreateClientAIChatThreadStore(_);
                e.localMentions && e.localMentions.size() > 0 && !P && F.setState({ ...F.state,
                    stagedData: { ...F.state.stagedData,
                        mentionStagedData: e.localMentions
                    }
                });
                let {
                    preUserSteps: O,
                    stagedMentionStep: N,
                    stagedAttachmentSteps: W
                } = function(e) {
                    let {
                        chatThreadStore: t,
                        environment: a,
                        spaceId: i,
                        selectedBlockStores: n = [],
                        textSelection: o
                    } = e, s = [], l = t.getStagedMentionPointers(), d = (0, r(674880).BX)({
                        environment: a,
                        spaceId: i,
                        pointers: l,
                        selectedBlockStores: n,
                        textSelection: o
                    });
                    d && s.push(d);
                    let c = t.getAndClearStagedAssistantAttachmentSteps();
                    return c && c.length && s.push(...c), {
                        preUserSteps: s,
                        stagedMentionStep: d,
                        stagedAttachmentSteps: c
                    }
                }({
                    chatThreadStore: F,
                    environment: u,
                    spaceId: D.id,
                    selectedBlockStores: A ? void 0 : e.selectedBlockStores,
                    textSelection: A ? void 0 : e.textSelection
                });
                for (let e of (M && O.unshift(M), F.getStagedMentionPointers())) e.table === i().evP && new(a()).B(u, {
                    table: i().evP,
                    id: e.id
                }).isAiSkill() && (0, n().Km)({
                    userId: u.currentUser.id,
                    spaceId: D.id,
                    blockId: e.id
                });
                let K = W && W.length > 0;
                if (!(void 0 !== U && !(0, r(247438).w9s)(U)) && !K) return {
                    didSubmit: !1,
                    threadStore: P,
                    didChangeThread: B
                };
                let L = T ? (0, r(674880).Jv)({
                    environment: u,
                    spaceStore: D,
                    userStore: R,
                    value: T.displayText,
                    locale: T.locale,
                    promptType: T.type,
                    args: T.args
                }) : (0, r(674880).Kf)({
                    environment: u,
                    spaceStore: D,
                    userStore: R,
                    value: C
                });
                if (P && await l({
                        threadStore: P,
                        environment: u,
                        clientStore: c,
                        inferenceSpaceStore: D,
                        userStore: R,
                        preUserSteps: O,
                        userStep: L,
                        chatThreadStore: F,
                        clearLocalMentions: e.clearLocalMentions,
                        sendPatchResponse: e.sendPatchResponse
                    })) return {
                    didSubmit: !0,
                    threadStore: P,
                    didChangeThread: B
                };
                if (!P || (0, r(187353).av)(P) || void 0 === P) {
                    let e, a = (0, r(674880).Xd)({
                        environment: u,
                        inferenceContext: g,
                        config: k,
                        addSteps: [...O, L],
                        surface: I ? ? o.contextStepSurface,
                        invokedFromBlockId: m
                    });
                    e = P ? (0, r(455764).T)({
                            environment: u,
                            clientStore: c,
                            spaceStore: D,
                            userStore: R,
                            threadStore: P,
                            addSteps: a,
                            waitForServerCommit: !0,
                            sendPartialTranscript: x,
                            sendPatchResponse: b,
                            temporaryAiThreadManager: y
                        }) : (0, r(225900).N)({
                            environment: u,
                            spaceStore: D,
                            transcript: a,
                            parentPointer: S,
                            threadId: _,
                            createdSource: w
                        }), B = !0, t = e,
                        function(e) {
                            let {
                                config: t,
                                prompt: a,
                                spaceStore: i,
                                threadStore: n,
                                environment: o,
                                sourceEventId: s,
                                suggestedQuery: l,
                                attachmentCount: d = 0
                            } = e;
                            if ("researcher" !== t.type) return;
                            let c = (0, r(536614).r4)(a, i);
                            r(274498).uH({
                                environment: o,
                                researchModeThreadId: n.id,
                                queryLength: c.length,
                                queryWords: c.split(/\s+/).filter(Boolean).length,
                                source: "welcome_page",
                                searchSessionId: void 0,
                                qnaSessionId: void 0,
                                sourceEventId: s,
                                suggestedQuery: l,
                                attachmentCount: d
                            })
                        }({
                            config: k,
                            prompt: U,
                            spaceStore: D,
                            threadStore: e,
                            environment: u,
                            sourceEventId: f,
                            suggestedQuery: !1,
                            attachmentCount: (null == W ? void 0 : W.length) ? ? 0
                        })
                } else {
                    var q, z;
                    let e, a = (e = P.getTranscript(), (0, r(850563).py)({
                        transcript: e
                    }));
                    (0, r(743624).K)({
                        existingWorkflowConfig: a,
                        nextConfig: k
                    }) || (0, r(757688).kh)({
                        threadStore: P,
                        config: k,
                        environment: u
                    });
                    let i = [],
                        n = P.getTranscript(),
                        l = (0, r(674880).i6)({
                            existingTranscript: n,
                            environment: u,
                            spaceStore: D,
                            config: k
                        });
                    l && i.push(l), M && i.push(M);
                    let d = P.getTranscript().findLast(e => "context" === e.type),
                        p = (null == d ? void 0 : d.value.collectionViewBlockId) ? ? (null == d ? void 0 : d.value.blockId),
                        h = null == d ? void 0 : d.value.peekBlockId;
                    (p !== (null == (q = g.blockStore) ? void 0 : q.id) || h !== (null == (z = g.peekStore) ? void 0 : z.id)) && i.push((0, r(674880).WM)({
                        environment: u,
                        inferenceContext: g,
                        surface: I ? ? o.contextStepSurface,
                        config: k,
                        invokedFromBlockId: m
                    }));
                    let f = E.getSettings(),
                        v = null == f ? void 0 : f.agent_personalization_settings;
                    (null == d ? void 0 : d.value.context_page_id) !== (null == v ? void 0 : v.context_page_id) && i.push((0, r(674880).WM)({
                        environment: u,
                        inferenceContext: g,
                        surface: I ? ? o.contextStepSurface,
                        config: k,
                        invokedFromBlockId: m
                    })), null != W && W.length && i.push(...W), N && i.push(N);
                    let S = (0, r(743624).d)({
                        environment: u,
                        spaceStore: D,
                        existingWorkflowConfig: a,
                        nextConfig: k
                    });
                    S && i.push(S), i.push(L), (0, r(187353).Ft)({
                        clientStore: c,
                        threadStore: P
                    }) ? await s({
                        environment: u,
                        threadStore: P,
                        spaceId: D.id,
                        steps: i
                    }) : ((0, r(455764).T)({
                        environment: u,
                        clientStore: c,
                        spaceStore: D,
                        userStore: R,
                        threadStore: P,
                        addSteps: i,
                        waitForServerCommit: !0,
                        sendPartialTranscript: x,
                        sendPatchResponse: b,
                        temporaryAiThreadManager: y
                    }), (0, r(377796).createAndCommit)({
                        userAction: "unifiedChatInputActions.updateThreadUpdatedTime",
                        environment: u,
                        cellTarget: {
                            spaceWithId: D.id
                        },
                        canUndo: !1,
                        perform: e => {
                            (0, r(757688).Mi)({
                                threadStore: P,
                                transaction: e,
                                updatedById: R.id,
                                updatedByTable: "notion_user"
                            })
                        }
                    })), t = P
                }
                if (F.setState({ ...F.state,
                        stagedData: { ...F.state.stagedData,
                            mentionStagedData: new(r(227318)).d
                        }
                    }), e.clearLocalMentions && e.clearLocalMentions(), !t) throw Error("Expected a thread store after submitting");
                return {
                    didSubmit: !0,
                    threadStore: t,
                    didChangeThread: B
                }
            }
        },
        213458: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowUpRightSquareIcon: () => n,
                iconDefinition: () => i
            }), r(296540);
            var a = r(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                        }), (0, a.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                n = (0, r(104509).wt)("arrowUpRightSquare", i, "default")
        },
        225476: (e, t, r) => {
            function a(e) {
                if (null != e && e.blockId) return e.blockId
            }

            function i(e, t) {
                let r = e.currentUser.id;
                return t.userId === r || t.present
            }

            function n(e) {
                var t;
                return (null == (t = e.state.rootStore) ? void 0 : t.canEdit()) ? ? !1
            }

            function o(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: a
                } = e, {
                    remotePresenceData: i
                } = a.state, n = [];
                i && (0, r(763230).uk)(i, e => {
                    null != e && e.userId && n.push(e)
                });
                let {
                    pageId: o,
                    lastViewTime: s,
                    lastExitTime: l,
                    totalCount: d,
                    hasMore: c,
                    ...u
                } = t.state;
                return (0, r(763230).uk)(u, e => {
                    e.isDefined() && n.push({
                        userId: e.getUserId(),
                        activityTimestampNearestMinuteMs: (0, r(627179).WY)(e.getVisitedAt()),
                        present: !1
                    })
                }), n = (0, r(381453).hS)(n, e => e.userId), (0, r(381453).Ul)(n, ({
                    activityTimestampNearestMinuteMs: e
                }) => e ? -e : 0)
            }

            function s(e) {
                let {
                    userId: t,
                    theme: a
                } = e;
                return (0, r(514214).MF)(t) ? r(632079).Tj.icon.secondary : (0, r(632079).Nq)(t, a)
            }
            r.d(t, {
                $L: () => s,
                EV: () => a,
                PZ: () => o,
                dp: () => i,
                xm: () => n
            }), r(944114)
        },
        245462: (e, t, r) => {
            function a(e) {
                return e.length <= 40 ? e : `${e.slice(0,40).trimEnd()}…`
            }

            function i(e) {
                if (e.start.store.pointer.table !== r(832375).evP || e.end.store.pointer.table !== r(832375).evP || e.start.store.pointer.id === e.end.store.pointer.id && e.start.store.pointer.spaceId === e.end.store.pointer.spaceId && e.start.index === e.end.index) return;
                let t = a((0, r(250943).E)({
                    mode: "editing",
                    multiSelection: e,
                    forceExtendAnnotations: {}
                }).trim());
                if (t) return {
                    type: "text",
                    text: t,
                    start: {
                        id: e.start.store.pointer.id,
                        spaceId: e.start.store.pointer.spaceId,
                        index: e.start.index
                    },
                    end: {
                        id: e.end.store.pointer.id,
                        spaceId: e.end.store.pointer.spaceId,
                        index: e.end.index
                    }
                }
            }

            function n(e) {
                let t = (0, r(685745).B)(e);
                if (!t) return;
                let i = a((0, r(250943).E)({
                    mode: "editing",
                    multiSelection: t,
                    forceExtendAnnotations: {}
                }).trim());
                if (i) return {
                    type: "blocks",
                    text: i,
                    blocks: e.map(e => ({
                        id: e.pointer.id,
                        spaceId: e.pointer.spaceId
                    }))
                }
            }

            function o(e) {
                let {
                    currentTextValue: t,
                    data: a,
                    mode: i
                } = e, n = "replaceSameType" === i ? function(e) {
                    let {
                        textValue: t,
                        kind: a
                    } = e;
                    if (!t || 0 === t.length) return t;
                    let i = t.filter(e => {
                        if (!(0, r(247438).qXl)(e)) return !0;
                        let t = (0, r(247438).uoE)((0, r(247438).uPN)(e));
                        return !t || (0, r(247438).$sA)(t).type !== a
                    });
                    return i.length > 0 ? i : void 0
                }({
                    textValue: t,
                    kind: a.type
                }) : t, o = (0, r(247438).wmz)((0, r(247438).tcA)(a));
                if ("replaceSameType" === i) return [o, (0, r(247438).Ey_)(" "), ...n ? ? []];
                let s = n ? ? [],
                    l = s[s.length - 1],
                    d = void 0 === l ? "" : "string" == typeof l ? l : l[0],
                    c = s.length > 0 && !/[\s\u00a0]$/.test(d);
                return [...s, ...c ? [(0, r(247438).Ey_)(" ")] : [], o, (0, r(247438).Ey_)(" ")]
            }
            r.d(t, {
                $c: () => n,
                hL: () => i,
                iR: () => o
            }), r(898992), r(354520), r(581454)
        },
        262401: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => a,
                personSlashSmallIcon: () => i
            }), r(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                i = (0, r(104509).wt)("personSlashSmall", a, "small")
        },
        314331: (e, t, r) => {
            r.d(t, {
                n: () => a
            });

            function a(e) {
                return (0, r(682985).K8)(() => r(585823).gZ.state && (null == e ? void 0 : e.id) === r(585823).Di.state, [e])
            }
        },
        315144: (e, t, r) => {
            r.d(t, {
                a: () => i
            });
            let a = new(r(815048)).O2("StopDictationButton", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 985993))),
                i = (0, r(815048)._h)(a, e => e.StopDictationButton)
        },
        321753: (e, t, r) => {
            r.d(t, {
                A: () => o,
                n: () => n
            });
            var a = r(296540),
                i = r(474848);

            function n(e) {
                return (0, r(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: r(632079).Tj.text.inverseSecondary
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
                    tooltipHeader: s,
                    style: l,
                    iconStyle: d,
                    isOffline: c,
                    borderStyle: u,
                    avatarShouldShowShadow: p,
                    initialOverrideStyle: h,
                    tooltipOverrideStyle: g,
                    userValue: f,
                    userStore: v,
                    avatar: S,
                    type: m = "avatar",
                    delayThreshold: y,
                    hasPersonHoverCard: x,
                    personHoverCardEntrypoint: b = "avatar",
                    avatarOutlineOffset: I
                } = e, w = (0, r(109939).tz)(), C = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), k = (0, r(67499).S)(), T = (0, r(682985).K8)(() => (0, r(888).$)(k) ? ? C, [k, C]), M = e.size ? ? 18, {
                    initialStyle: j,
                    avatarWrapStyle: A,
                    avatarStyle: U,
                    proxiedImageStyle: P,
                    suspendedUserStyle: B,
                    deletedUserStyle: D
                } = (0, r(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${M}px`,
                        width: M,
                        height: M,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * M, 11),
                        background: r(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: r(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        isolation: "auto",
                        ...d,
                        ...h
                    },
                    avatarWrapStyle: {
                        background: r(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: p ? r(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: u ? ? "solid",
                        outlineColor: r(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: I ? ? -1,
                        ...d
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: M,
                        height: M,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: c ? .3 : 1,
                        ...d
                    },
                    proxiedImageStyle: {
                        width: M,
                        height: M,
                        ...d
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: M - 2,
                        height: M - 2,
                        overflow: "hidden",
                        background: r(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: r(632079).Tj.text.primary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...d
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: M,
                        height: M,
                        overflow: "hidden",
                        background: r(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: r(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${r(632079).Tj.border.secondary}`,
                        ...d
                    }
                }), [h, p, u, c, M, d, I]), {
                    tooltipTextStyle: R,
                    tooltipAvatarContainer: E,
                    tooltipContainer: V,
                    tooltipUserInfoContainer: _
                } = n(g), F = (0, a.useMemo)(() => v ? ? (f ? r(993189).Bj6.fromValue(r(832375).oo9, f) : void 0), [v, f]), O = (0, a.useMemo)(() => F instanceof r(807825).L ? F : T && F ? r(807825).L.createChildStore(T, {
                    id: F.id,
                    table: r(832375).oo9
                }) : void 0, [F, T]), N = (0, r(682985).K8)(() => null == F ? void 0 : F.getFullName(w), [F, w]), W = (0, r(682985).K8)(() => null == F ? void 0 : F.getDisplayName(w), [F, w]), K = (0, r(682985).K8)(() => null == F ? void 0 : F.getEmail(), [F]), L = (0, r(682985).K8)(() => null == F ? void 0 : F.getProfilePhoto(), [F]), q = (0, r(682985).K8)(() => null == F ? void 0 : F.getIsSuspended(), [F]), z = (0, r(682985).K8)(() => null == F ? void 0 : F.getIsDeleted(), [F]), H = (0, r(525272).E)({
                    spaceStore: T,
                    viewedUserId: null == F ? void 0 : F.id
                }) && x, $ = () => e.defaultAvatar ? ? (0, i.jsx)(r(16275).I, {
                    icon: r(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), X = (e, t, a) => {
                    if (!e) return $();
                    let n = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...a
                    };
                    return (0, i.jsx)(r(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: n,
                        placeholderStyle: n
                    })
                }, Q = e => (0, i.jsxs)("div", {
                    style: V,
                    children: [(0, i.jsx)("div", {
                        style: E,
                        children: G()
                    }), (0, i.jsxs)("div", {
                        style: _,
                        children: [F ? W : null == S ? void 0 : S.name, e ? void 0 : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("br", {}), F ? (0, i.jsx)("span", {
                                style: R,
                                children: K
                            }) : null != S && S.email ? (0, i.jsx)("span", {
                                style: R,
                                children: null == S ? void 0 : S.email
                            }) : null]
                        })]
                    })]
                }), Z = e => {
                    let t = r(871871).PE(e)[0].toUpperCase();
                    return (0, i.jsx)("div", {
                        style: A,
                        children: (0, i.jsx)("div", {
                            style: j,
                            children: (0, i.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, G = () => {
                    if (q && F) return (0, i.jsx)("div", {
                        style: A,
                        children: (0, i.jsx)("div", {
                            style: B,
                            children: (0, i.jsx)(r(16275).I, {
                                icon: r(67207).personSlashIcon,
                                size: M - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (z) return (0, i.jsx)("div", {
                        style: A,
                        children: (0, i.jsx)("div", {
                            style: D,
                            children: (0, i.jsx)(r(16275).I, {
                                icon: r(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (F) {
                        if (L) return (0, i.jsx)("div", {
                            style: U,
                            children: (0, i.jsx)(r(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: L,
                                isAuthenticated: !1,
                                width: Math.max(Number(P.width), 120),
                                render: (e, t) => X(t, N, A)
                            })
                        });
                        else if (N) return Z(N);
                        else if (K) return Z(K)
                    } else if (S) {
                        if (!S.type && S.avatarUrl) return (0, i.jsx)("div", {
                            style: A,
                            children: (0, i.jsx)("div", {
                                style: U,
                                children: X(S.avatarUrl, S.name)
                            })
                        });
                        else if (S.name) return Z(S.name);
                        else if (S.email) return Z(S.email)
                    }
                    return $()
                };
                switch (m) {
                    case "avatar":
                        {
                            let e = (0, i.jsx)("div", {
                                style: l,
                                children: G()
                            });
                            if (H && O && T) return (0, i.jsx)(r(532755).D, {
                                userStore: O,
                                spaceStore: T,
                                from: b,
                                children: e
                            });
                            if (t) return (0, i.jsx)(r(51831).m, {
                                content: () => o ? Q() : (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        children: s
                                    }), W, (0, i.jsx)("br", {}), F ? (0, i.jsx)("span", {
                                        style: R,
                                        children: K
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: y,
                                children: t => (0, i.jsx)("div", {
                                    style: l,
                                    "aria-label": W,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return Q("avatar-name" === m);
                    default:
                        (0, r(722371).HB)(m)
                }
            }
        },
        346899: (e, t, r) => {
            r.d(t, {
                h: () => i
            });
            let a = new(r(815048)).O2("DictationAvatar", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 405957))),
                i = (0, r(815048)._h)(a, e => e.DictationAvatar)
        },
        418001: (e, t, r) => {
            r.d(t, {
                j: () => a
            });

            function a(e) {
                let {
                    environment: t,
                    blockStore: a,
                    tabToOpen: i,
                    from: n
                } = e, o = r(475097).default.state.open, {
                    currentTab: s
                } = r(449473).B8.state, l = s !== i || s === i && !(0, r(953099).N)(t), d = i === r(449473).tF.Comments && (s !== i || !(0, r(953099).N)(t));
                (0, r(34953).f)(i), d && r(449473).B8.update(e => ({ ...e,
                    timeOpenedComments: Date.now()
                })), o ? ((0, r(545586).navigateToBlock)({
                    environment: t,
                    store: a,
                    pageVisitSource: r(254656).y8.Expand
                }), (0, r(911046).u)({
                    environment: t,
                    isExpanded: !0,
                    from: n,
                    saveDetailsSidebarPreference: !0
                })) : (0, r(911046).u)({
                    environment: t,
                    isExpanded: l,
                    from: n,
                    saveDetailsSidebarPreference: !0
                })
            }
        },
        469589: (e, t, r) => {
            r.r(t), r.d(t, {
                STORE_MAX_LIMIT: () => o,
                initializePageVisit: () => s,
                updatePageVisits: () => l
            }), r(898992), r(354520), r(581454);
            var a = () => r(726570),
                i = () => r(226221),
                n = () => r(832375);
            let o = 100;
            async function s(e, t) {
                await r(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: a,
                    blockStore: o,
                    pageVisitStore: s,
                    timestamp: l,
                    type: u
                } = t, p = e.currentUser.id;
                if (void 0 === p || a) return;
                t.blockStore.id !== s.state.pageId && s.setState({ ...s.getInitialState(),
                    pageId: t.blockStore.id
                });
                let h = (0, r(517013).v3)(o, {
                        table: n().F9f,
                        id: (0, r(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, i().e)(o.pointer.spaceId)
                    }),
                    g = (0, r(517013).v3)(o, {
                        table: n().ouC,
                        id: (0, r(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, i().e)(o.pointer.spaceId)
                    });
                if (await r(941701).transactionQueue.awaitRecordTransaction({
                        table: n().evP,
                        id: o.id
                    }), await (0, r(966980).hS)(o), !o.canRead() || (0, r(142484).q)(e, o, o.getSpaceStore())) return;
                await h.load(), await g.load();
                let f = h.getKeyStore("visited_at").getValue(),
                    v = g.getKeyStore("exited_at").getValue(),
                    S = await c({
                        environment: e,
                        blockStore: o,
                        spaceId: (0, i().e)(o.pointer.spaceId),
                        timestamp: l,
                        type: u
                    });
                if ("skipped" === S.type || "failed" === S.type) return;
                let m = d({
                    pageVisits: S.data.pageVisits,
                    currentState: s.state,
                    blockStore: o,
                    totalCount: s.state.totalCount,
                    hasMore: void 0
                });
                s.state.pageId === o.id && s.setState({ ...m,
                    lastViewTime: f,
                    lastExitTime: v
                })
            }
            async function l(e, t) {
                let a, n;
                await r(728372).default.waitUntilRendered();
                let s = e.currentUser.id;
                if (void 0 === s) return;
                let {
                    blockStore: l,
                    pageVisitStore: c,
                    incremental: u
                } = t, p = t.limit || 32;
                if (u) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: i,
                        totalCount: n,
                        hasMore: o,
                        ...l
                    } = c.state, d = Object.entries(l).map(([e, t]) => {
                        if (s === e) return;
                        let r = t.getVisitedAt();
                        if (void 0 !== r) return r + 1
                    });
                    a = (0, r(763230).T9)(d.filter(r(722371).O9))
                }
                let h = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: l.id,
                            spaceId: (0, i().e)(l.pointer.spaceId)
                        },
                        sinceTimestamp: a,
                        limit: p,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: l.id,
                        spaceId: (0, i().e)(l.pointer.spaceId)
                    }
                });
                if ("failed" === h.type) return;
                let g = d({
                    pageVisits: h.data.pageVisits,
                    blockStore: l,
                    currentState: c.state,
                    totalCount: h.data.totalCount,
                    hasMore: h.data.hasMore
                });
                if (Object.keys(g).length <= o) n = g;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: a,
                        totalCount: i,
                        hasMore: s,
                        ...l
                    } = g, d = (0, r(722371).WP)(l).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (n = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: i,
                            hasMore: s
                        }, r(381453).Ul(d, ([, e]) => -e).slice(0, o))) n[t] = g[t]
                }
                c.state.pageId === g.pageId && c.setState(n)
            }

            function d(e) {
                let {
                    blockStore: t,
                    pageVisits: r,
                    currentState: o,
                    totalCount: s,
                    hasMore: l
                } = e, d = { ...o,
                    pageId: t.id,
                    totalCount: s,
                    hasMore: l
                };
                for (let e of r) {
                    let {
                        id: r,
                        user_id: o
                    } = e;
                    o in d || (d[o] = a()._.createChildStore(t, {
                        table: n().F9f,
                        id: r,
                        spaceId: (0, i().e)(t.pointer.spaceId)
                    }))
                }
                return d
            }
            async function c(e) {
                let {
                    environment: t,
                    blockStore: a,
                    spaceId: i,
                    timestamp: o,
                    type: s
                } = e, {
                    id: l
                } = t.currentUser, d = a.id, c = a.getSystemBlockTypeStore().getValue();
                if ((0, r(512845).kR)(c) || a.getParentTable() === n().C0E) return {
                    type: "skipped"
                };
                if (l && "passive" !== s) {
                    var u;
                    null == t || null == (u = t.mobileNative) || u.recordPageVisit(l, {
                        blockId: d,
                        spaceId: i,
                        visitedAt: o
                    }), r(715265).A.recordVisit({
                        id: d,
                        systemBlockType: c,
                        type: r(981324).ig.Default,
                        currentUserId: l
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: d,
                            spaceId: i
                        },
                        timestamp: o,
                        type: s
                    },
                    headers: {
                        recordId: d,
                        spaceId: i
                    }
                })
            }
        },
        476719: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => a,
                personFillSmallIcon: () => i
            }), r(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                i = (0, r(104509).wt)("personFillSmall", a, "fillSmall")
        },
        525272: (e, t, r) => {
            r.d(t, {
                E: () => a
            });

            function a(e) {
                let {
                    spaceStore: t,
                    viewedUserId: a
                } = e, i = (0, r(533992).v3)(), n = (0, r(993077).nB)(t), o = (0, r(993077).V_)({
                    spaceStore: t,
                    userId: a
                }), s = (0, r(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, r(455221).e)(i, e) && "control" !== r(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [i, t]);
                return (0, r(682985).K8)(() => (0, r(62694).V)({
                    spaceStore: t,
                    actorRole: n,
                    viewedRole: o,
                    shouldShowForExternalUsers: s
                }), [t, n, o, s])
            }
        },
        532755: (e, t, r) => {
            r.d(t, {
                D: () => n
            });
            var a = r(296540),
                i = r(474848);

            function n({
                userStore: e,
                suppressMouse: t,
                children: o,
                spaceStore: s,
                width: l,
                from: d = "unknown"
            }) {
                let c = (0, a.useRef)(null),
                    u = (0, r(525272).E)({
                        spaceStore: s,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    p = (0, r(83208).X)("prefetch_extended_user_profiles"),
                    h = u && p,
                    g = (0, r(815048).fJ)(r(554666).u.extendedUserProfileActions, {
                        disabled: !h
                    }),
                    f = (0, r(533992).v3)();
                (0, a.useEffect)(() => {
                    h && "resolved" === g.status && null != e && e.id && s && null != s && s.userId && g.value.prefetchExtendedUserProfiles({
                        spaceStore: s,
                        actorUserId: s.userId,
                        viewedUserIds: [e.id]
                    }, f)
                }, [h, null == e ? void 0 : e.id, s, u, f, g]);
                let v = (0, a.useCallback)(() => {
                        c.current && e && s && !t && r(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: c.current.getBoundingClientRect(),
                            spaceStore: s,
                            from: d
                        })
                    }, [e, s, t, d]),
                    S = (0, a.useCallback)(() => {
                        r(84300).A.setState(void 0)
                    }, []);
                return e && u ? (0, i.jsx)("div", {
                    ref: c,
                    onMouseEnter: u ? v : void 0,
                    onMouseLeave: u ? S : void 0,
                    style: l ? {
                        width: l
                    } : void 0,
                    children: o
                }) : o
            }
        },
        551408: (e, t, r) => {
            function a() {
                let e = (0, r(83208).X)("database_agents"),
                    t = (0, r(682985).K8)(() => r(886556).z.isAiEnabled(), []);
                return e && t
            }

            function i() {
                return r(218744).default.checkGate({
                    gateName: "database_agents"
                }) && r(886556).z.isAiEnabled()
            }
            r.d(t, {
                A: () => a,
                R: () => i
            })
        },
        554666: (e, t, r) => {
            r.d(t, {
                i: () => i,
                u: () => a
            });
            let a = {
                    PersonProfileContainer: new(r(815048)).O2("PersonProfileContainer", () => Promise.all([r.e(75134), r.e(21969), r.e(29663), r.e(75136), r.e(98175), r.e(47414), r.e(16922), r.e(65594), r.e(15021), r.e(98821), r.e(77470), r.e(80068), r.e(44632)]).then(r.bind(r, 587386))),
                    extendedUserProfileActions: new(r(815048)).O2("extendedUserProfileActions", () => r.e(63717).then(r.bind(r, 433562)))
                },
                i = (0, r(815048)._h)(a.PersonProfileContainer, e => e.PersonProfileContainer)
        },
        616922: (e, t, r) => {
            r.d(t, {
                eQ: () => h,
                hJ: () => w,
                Ay: () => g,
                Uo: () => S,
                XE: () => b
            }), r(944114), r(898992), r(823215), r(581454);
            var a = r(296540);
            let i = new(r(815048)).O2("AIMNLiveCollabCallout", async () => await r.e(35920).then(r.bind(r, 966085))),
                n = (0, r(815048)._h)(i, e => e.AIMNLiveCollabCallout);
            var o = () => r(225476);
            let s = function(e) {
                    let t = (0, r(533992).v3)(),
                        i = (0, a.useRef)(),
                        n = (0, r(396805).T)(),
                        o = (0, a.useCallback)(async () => {
                            if (await r(941701).transactionQueue.awaitRecordTransaction(e.blockStore.pointer), !n.current) return;
                            let a = (0, r(568479).Ws)(e.blockStore.id);
                            i.current = r(48091).Ay.addListener({
                                key: a,
                                authorizationToken: void 0,
                                listener: r(381453).nF(() => r(469589).updatePageVisits(t, {
                                    blockStore: e.blockStore,
                                    pageVisitStore: e.pageVisitStore,
                                    incremental: !0,
                                    limit: e.limit
                                }), 1e3),
                                subscriptionId: void 0
                            })
                        }, [t, n, e.blockStore, e.limit, e.pageVisitStore]),
                        s = (0, a.useCallback)(() => {
                            i.current && (r(48091).Ay.removeListener(i.current), i.current = void 0)
                        }, []);
                    return (0, a.useEffect)(() => (o(), s), [o, s]), null
                },
                l = new(r(815048)).O2("AvatarHoverCard", async () => await Promise.all([r.e(21969), r.e(47414), r.e(98821), r.e(77470), r.e(6608)]).then(r.bind(r, 691631))),
                d = (0, r(815048)._h)(l, e => e.AvatarHoverCard),
                c = new(r(815048)).O2("MoreViewersHoverCard", async () => await r.e(46118).then(r.bind(r, 479676))),
                u = (0, r(815048)._h)(c, e => e.MoreViewersHoverCard);
            var p = r(474848);
            let h = 22,
                g = function({
                    pageVisitStore: e,
                    presenceStore: t,
                    rootStore: a,
                    maxUsers: i
                }) {
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(r(315144).a, {
                            rootStore: a
                        }), (0, p.jsx)(w, {
                            rootStore: a,
                            pageVisitStore: e,
                            presenceStore: t,
                            maxUsers: i,
                            isShowingInFeed: !1
                        }), (0, p.jsx)(s, {
                            blockStore: a,
                            pageVisitStore: e,
                            limit: 1 + (i ? ? 5) + 25
                        })]
                    })
                };

            function f(e) {
                return r(381453).Ul(e, e => e.activityTimestampNearestMinuteMs)
            }

            function v(e, t) {
                return r(807825).L.createChildStore(t, {
                    table: r(832375).oo9,
                    id: e
                })
            }

            function S(e) {
                let {
                    environment: t,
                    isShowingTabBar: a,
                    isShowingInFeed: i
                } = e;
                return { ...(0, r(1249).g)({
                        noDrag: t.device.isElectron && !a
                    }),
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "row-reverse",
                    marginInlineStart: 8,
                    paddingInlineEnd: 6,
                    transform: "translateZ(0)",
                    ...i && {
                        maxHeight: 54,
                        paddingBottom: 12
                    }
                }
            }

            function m({
                hiddenUsers: e,
                hiddenUsersCount: t,
                hasMore: r,
                rootStore: a,
                environment: i
            }) {
                return (0, p.jsx)(u, {
                    trigger: (0, p.jsx)(x, {
                        hiddenUsersCount: t,
                        environment: i,
                        rootStore: a
                    }),
                    viewers: e,
                    totalCount: t,
                    rootStore: a
                })
            }
            let y = {
                paddingInline: 8,
                marginInlineStart: 4,
                marginInlineEnd: -10
            };

            function x({
                hiddenUsersCount: e,
                environment: t,
                rootStore: i
            }) {
                let n = (0, a.useCallback)(() => {
                    (0, r(418001).j)({
                        environment: t,
                        blockStore: i,
                        tabToOpen: r(449473).tF.Updates,
                        from: "more_menu"
                    }), r(449473).B8.setState({ ...r(449473).B8.state,
                        updatesSubTab: r(449473).VE.Analytics
                    })
                }, [t, i]);
                return (0, p.jsx)(r(988022).p, {
                    style: y,
                    size: "sm",
                    shape: "pill",
                    colorPalette: "gray",
                    onClick: n,
                    children: (0, p.jsx)(r(109939).sA, {
                        defaultMessage: "{hiddenUsersCount, plural, one {+{hiddenUsersCount}} other {+{hiddenUsersCount}}}",
                        id: "topbar.presenceIndicator.hiddenUsers.otherCount.message",
                        values: {
                            hiddenUsersCount: e
                        }
                    })
                })
            }

            function b(e, t) {
                return (0, r(960253).I)(() => {
                    let a = {
                            width: h,
                            height: h,
                            borderRadius: h
                        },
                        i = e(r(632079).Tj);
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
                        uiUserAvatarStyles: { ...a
                        },
                        avatarInnerOutline: { ...a,
                            outlineStyle: "solid",
                            outlineColor: r(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: t ? { ...a,
                            outlineStyle: "solid",
                            outlineColor: i,
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarOuterOutline: { ...a,
                            outlineStyle: "solid",
                            outlineColor: t ? r(632079).Tj.background.primary : r(632079).Tj.UIUserAvatarIdleOutline,
                            outlineWidth: .5,
                            outlineOffset: +!!t,
                            backgroundColor: r(632079).Tj.background.primary,
                            marginInlineEnd: -6,
                            position: "relative"
                        },
                        initialColor: {
                            color: t ? i : r(632079).Tj.icon.secondary
                        }
                    }
                }, [e, t])
            }

            function I(e) {
                let {
                    userData: t,
                    rootStore: i,
                    isShowingInFeed: n = !1
                } = e, s = (0, r(533992).v3)(), {
                    userId: l
                } = t, c = (0, o().dp)(s, t), u = (0, r(514214).MF)(l), {
                    userStore: g,
                    showAvatar: f
                } = (0, r(682985).K8)(() => {
                    let e = v(l, i);
                    return {
                        userStore: e,
                        showAvatar: (e.isDefined() || u) && !e.getIsSuspended()
                    }
                }, [l, i, u]), S = (0, r(682985).K8)(() => i.getSpaceStore(), [i]), m = b((0, a.useCallback)(e => (0, r(514214).MF)(l) ? r(632079).Tj.icon.secondary : l === s.currentUser.id ? r(632079).Tj.border.accentPrimary : (0, r(632079).Nq)(l, e), [s.currentUser.id, l]), c);
                if (!f) return null;
                let y = (0, p.jsx)("div", {
                        style: m.avatarOuterOutline,
                        children: (0, p.jsx)("div", {
                            style: m.avatarBorder,
                            children: (0, p.jsx)(r(321753).A, {
                                iconStyle: m.avatarInnerOutline,
                                userStore: u ? r(268033).px : g,
                                style: m.uiUserAvatarStyles,
                                isOffline: !c,
                                size: h,
                                avatarShouldShowShadow: !n,
                                initialOverrideStyle: m.initialColor
                            })
                        })
                    }),
                    x = c && t.blockId ? (0, p.jsx)(r(64960).Ay, {
                        onClick: () => (0, r(250717).B)([t.blockId ? ? ""], !0, s),
                        style: m.button,
                        hoveredStyle: m.buttonHovered,
                        pressedStyle: m.buttonPressed,
                        children: y
                    }) : y;
                if (n || !s.currentUser.id) return x;
                let I = function({
                    userData: e,
                    isPresent: t,
                    currentUserId: a,
                    userId: i,
                    isShowingInFeed: n
                }) {
                    if (a !== i) {
                        if (t) return e.blockId && !n ? (0, p.jsx)(r(109939).sA, {
                            defaultMessage: "Viewing now. Click to see where they are.",
                            id: "topbar.presenceIndicator.viewingNowWithLocation.tooltip"
                        }) : (0, p.jsx)(r(109939).sA, {
                            defaultMessage: "Viewing now",
                            id: "topbar.presenceIndicator.viewingNow.tooltip"
                        });
                        if (e.activityTimestampNearestMinuteMs) return (0, p.jsx)(r(109939).sA, {
                            defaultMessage: "Last viewed {timeFromNow}",
                            id: "topbar.presenceIndicator.lastViewedTime.tooltip",
                            values: {
                                timeFromNow: (0, r(850640).v9)(Math.min(e.activityTimestampNearestMinuteMs, Date.now()), r(849917).locale)
                            }
                        })
                    }
                }({
                    userData: t,
                    isPresent: c,
                    currentUserId: s.currentUser.id,
                    userId: l,
                    isShowingInFeed: n
                });
                return (0, p.jsx)(d, {
                    trigger: x,
                    userStore: g,
                    header: I,
                    spaceStore: S
                })
            }

            function w(e) {
                let {
                    rootStore: t,
                    pageVisitStore: i,
                    presenceStore: s,
                    maxUsers: l,
                    isShowingInFeed: d
                } = e, c = (0, r(533992).v3)(), u = c.currentUser.id, h = (0, r(682985).K8)(() => {
                    let e = c.currentUser.id;
                    if (!e) return;
                    let t = d || (0, o().xm)(s) ? (0, o().PZ)({
                            pageVisitStore: i,
                            presenceStore: s
                        }) : [],
                        r = (null == i ? void 0 : i.state.totalCount) ? ? t.length,
                        a = [],
                        n = [];
                    for (let i of t)
                        if (i.userId === e) {
                            r--;
                            continue
                        } else(0, o().dp)(c, i) ? a.push(i) : n.push(i);
                    let u = [...f(a).reverse(), ...f(n).reverse()],
                        p = (l ? ? 5) - 1;
                    return {
                        visibleUsers: u.slice(0, p),
                        hiddenUsers: u.slice(p),
                        totalCount: r,
                        hasMore: !!(null == i ? void 0 : i.state.hasMore)
                    }
                }, [i, s, c, d, l], {
                    equalityFn: r(381453).n4
                }), {
                    visibleUsers: g,
                    hiddenUsers: y,
                    hiddenUsersCount: x,
                    hasMoreHiddenUsers: b,
                    isEveryUserStoreReady: w
                } = (0, r(682985).K8)(() => {
                    if (!u) return {};
                    let {
                        visibleUsers: e = [],
                        hiddenUsers: a = []
                    } = h ? ? {}, i = [u, ...e.map(e => e.userId), ...a.map(e => e.userId)].map(e => v(e, t));
                    return {
                        visibleUsers: e,
                        hiddenUsers: a,
                        hiddenUsersCount: Number(null == h ? void 0 : h.totalCount) - e.length,
                        hasMoreHiddenUsers: !!(null == h ? void 0 : h.hasMore),
                        isEveryUserStoreReady: i.every(e => e.isReady() || (0, r(514214).MF)(e.id))
                    }
                }, [u, h, t]), C = (0, a.useRef)(null), k = (0, r(682985).K8)(() => r(218744).default.getEligibleGroup({
                    experimentId: "adoption_aimn_live_collab_discovery_nudge_video",
                    disableExposureLogging: !0
                }), []), T = (0, r(682985).O$)(r(584257).b), M = (0, r(314331).n)(t), j = !(0, r(682985).O$)(r(205885).e);
                if (!u || !h || !w || j || u !== t.userId) return null;
                if (0 === g.length && 0 === y.length) return M ? (0, p.jsx)("div", {
                    style: S({
                        environment: c,
                        isShowingTabBar: T,
                        isShowingInFeed: d
                    }),
                    children: (0, p.jsx)(r(346899).h, {
                        enableClickToScroll: !0,
                        rootStore: t
                    })
                }) : null; {
                    let e = [...g];
                    return e.reverse(), (0, p.jsxs)("div", {
                        ref: C,
                        style: S({
                            environment: c,
                            isShowingTabBar: T,
                            isShowingInFeed: d
                        }),
                        children: [x > 0 ? (0, p.jsx)(m, {
                            rootStore: t,
                            hiddenUsers: y,
                            hiddenUsersCount: x,
                            hasMore: b,
                            environment: c
                        }) : void 0, e.map(e => (0, p.jsx)(I, {
                            userData: e,
                            rootStore: t
                        }, e.userId)), d ? void 0 : (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(I, {
                                rootStore: t,
                                userData: {
                                    userId: u,
                                    present: !0
                                }
                            }), (0, p.jsx)(r(346899).h, {
                                enableClickToScroll: !0,
                                rootStore: t
                            }), void 0 !== k ? (0, p.jsx)(n, {
                                origin: C
                            }) : void 0]
                        })]
                    })
                }
            }
        },
        660402: (e, t, r) => {
            r.d(t, {
                W: () => a
            });

            function a(e) {
                let {
                    omitCurrentPage: t,
                    overrideBlockStore: a
                } = e, i = (0, r(533992).v3)(), n = (0, r(346596).L)(i);
                return (0, r(682985).K8)(() => {
                    let e = r(728372).AppStoreSidebarSpaceStore.state,
                        i = r(728372).AppStoreCurrentUserStore.state,
                        o = r(728372).AppStoreSidebarSpaceViewStore.state,
                        s = r(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (e && i && o) return {
                        spaceStore: e,
                        userStore: i,
                        spaceViewStore: o,
                        blockStore: t ? void 0 : a ? ? s,
                        peekStore: r(475097).default.state.open ? r(475097).default.state.targetStore : void 0,
                        workflowStore: n
                    }
                }, [n, t, a])
            }
        },
        743624: (e, t, r) => {
            r.d(t, {
                d: () => n,
                K: () => i
            });
            var a = () => r(381453);

            function i(e) {
                return void 0 !== e.existingWorkflowConfig && !0 === e.existingWorkflowConfig.enableScriptAgent && "workflow" === e.nextConfig.type && !0 === e.nextConfig.enableScriptAgent
            }

            function n(e) {
                if (!i(e)) return;
                let {
                    environment: t,
                    spaceStore: n,
                    existingWorkflowConfig: o,
                    nextConfig: s
                } = e;
                return function(e) {
                    let {
                        environment: t,
                        spaceStore: i,
                        baseConfig: n,
                        nextConfig: o
                    } = e, s = function(e) {
                        let {
                            base: t,
                            next: i
                        } = e, n = {};
                        for (let [e, o] of (0, r(722371).WP)(i)) {
                            if ("type" === e) continue;
                            let r = t[e];
                            (0, a().n4)(r, o) || void 0 !== o && Object.assign(n, {
                                [e]: o
                            })
                        }
                        if (0 !== Object.keys(n).length) return n
                    }({
                        base: n,
                        next: o
                    });
                    if (s) return {
                        id: (0, r(295447).Z1)({
                            environment: t,
                            table: r(832375).mSw,
                            spaceId: i.id
                        }),
                        type: "updated-config",
                        value: s
                    }
                }({
                    environment: t,
                    spaceStore: n,
                    baseConfig: o,
                    nextConfig: s
                })
            }
        }
    }
]);