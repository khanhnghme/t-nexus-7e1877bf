"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [88533], {
        92049: (e, t, n) => {
            n.d(t, {
                G: () => r
            });

            function r(e) {
                let t = e.RouterStore.state.route.name;
                if ("agent" === t) return (0, n(346596).k)(e);
                if ("meet" === t) {
                    var r;
                    let t = (0, n(328765).S)(),
                        i = null == (r = e.currentUser) ? void 0 : r.id;
                    if (!t || !i || !n(218744).default.checkGate({
                            gateName: "agent_in_meetings_route"
                        })) return;
                    let o = e.idCreator.getSpaceIdCreatorSync(t.id),
                        a = (0, n(413388).sX)(i, o);
                    return new(n(970831)).B(e, {
                        id: a,
                        table: n(832375).evP,
                        spaceId: t.id
                    })
                }
                return (0, n(330870).a)()
            }
        },
        163731: (e, t, n) => {
            n.r(t), n.d(t, {
                UnifiedChatInputProvider: () => m
            }), n(410838), n(898992), n(354520), n(581454), n(737550);
            var r = n(296540),
                i = () => n(832375),
                o = () => n(757688),
                a = () => n(245462);
            n(944114);
            var l = () => n(915045),
                d = () => n(88347),
                u = () => n(426048),
                s = () => n(897011),
                c = () => n(488307),
                p = () => n(173157),
                f = () => n(546605);
            class g extends f().Store {
                getInitialState() {
                    return {
                        stores: {}
                    }
                }
                getStore(e) {
                    return this.state.stores[e] || (this.state.stores[e] = new(n(245541)).R({
                        key: `aiChatDrafts:${e}`,
                        namespace: n(274919).Bq,
                        important: !0,
                        trackingType: "necessary"
                    })), this.state.stores[e]
                }
            }
            let v = new g;
            var S = n(474848);

            function m(e) {
                let t, f, {
                        aiChatFeatureController: g,
                        clientStore: m,
                        nextConfig: C,
                        setNextConfig: x,
                        onEsc: _,
                        onLoaded: b,
                        onThreadChange: y,
                        onWillSubmit: w,
                        sourceIdForEventCorrelation: I,
                        threadStore: T,
                        parentPointer: k,
                        invokedFromBlockId: E,
                        disabled: A,
                        placeholder: M,
                        mockTextStoreWithSetter: P,
                        onSubmitHandlerReady: R,
                        onStartTyping: K,
                        ignoreKeyboardMode: O,
                        pendingPlanModeStep: D,
                        onSetPendingPlanModeStep: $,
                        onSurveyActive: z,
                        forceOmitCurrentPage: B = !1,
                        compact: V = !1
                    } = e,
                    F = (0, n(533992).v3)(),
                    q = (0, n(83208).X)("add_to_chat"),
                    L = (0, n(83208).X)("agent_enable_context_block_selection"),
                    j = (0, n(83208).X)("agent_disable_save_previewed_steps"),
                    {
                        textStore: U,
                        resetTextAndDraft: X,
                        saveDraftDebounced: G,
                        inputSurfaceOverride: W,
                        setTextValue: N
                    } = function({
                        aiChatFeatureController: e,
                        clientStore: t,
                        mockTextStoreFromProps: i
                    }) {
                        let o = e.aiChatType,
                            a = (0, n(682985).K8)(() => {
                                let e = t.state.primeInput;
                                if (null != e && e.chatTypes.includes(o)) return e
                            }, [t, o]),
                            {
                                draftStore: l,
                                initialDraftValue: d
                            } = (0, n(682985).K8)(() => {
                                let t = e.draftStorageKey,
                                    r = t ? v.getStore(t) : void 0;
                                return {
                                    draftStore: r,
                                    initialDraftValue: (null == r ? void 0 : r.state) ? ? (0, n(247438).x9d)("")
                                }
                            }, [e]),
                            u = (0, r.useRef)(void 0),
                            s = (0, n(430937).AI)({
                                initialValue: null != a && a.text ? (0, n(247438).x9d)(a.text) : d
                            }),
                            {
                                store: c,
                                setValue: p
                            } = i ? ? s,
                            f = (0, r.useMemo)(() => {
                                if (l) return (0, n(381453).sg)(e => {
                                    e && (0, n(247438).AhH)(e) > 0 ? l.setState(e) : l.setState(void 0)
                                }, 500)
                            }, [l]),
                            g = (0, r.useCallback)(() => {
                                null == f || f.cancel(), null == l || l.setState(void 0), p(void 0), u.current = void 0
                            }, [l, f, p, u]);
                        return (0, r.useEffect)(() => () => {
                            null == f || f.cancel()
                        }, [f]), (0, r.useEffect)(() => {
                            null != a && a.text && !i && (p((0, n(247438).x9d)(a.text)), u.current = a.surfaceOverride, t.setState({ ...t.state,
                                primeInput: void 0
                            }))
                        }, [o, t, a, i, p]), {
                            textStore: c,
                            resetTextAndDraft: g,
                            saveDraftDebounced: f,
                            inputSurfaceOverride: u.current,
                            primeInput: a,
                            setTextValue: p
                        }
                    }({
                        aiChatFeatureController: g,
                        clientStore: m,
                        mockTextStoreFromProps: P
                    }),
                    H = (0, n(972740).L)(),
                    Z = (0, r.useRef)(void 0),
                    Q = (0, n(558208).AD)(),
                    Y = (0, n(682985).O$)(n(728372).AppStoreMainEditorCurrentBlockStore),
                    J = (0, n(682985).O$)(n(475097).default.peekTargetStore),
                    ee = (0, n(682985).K8)(() => (0, n(92049).G)(F), [F]),
                    et = "workflow" === C.type && !0 !== C.isCustomAgent && !0 === C.enableScriptAgent;
                (0, r.useEffect)(() => {
                    let e = null == H ? void 0 : H.id;
                    e && et && Z.current !== e && (Z.current = e, F.api.callCellCompatibleApi({
                        eventName: "warmScriptAgentDynamicModuleCache",
                        environment: F,
                        data: {
                            spaceId: e
                        },
                        cellNavigation: {
                            spaceId: e
                        }
                    }))
                }, [F, null == H ? void 0 : H.id, et]);
                let en = (0, n(682985).K8)(() => {
                        if (!(null != H && H.id)) return;
                        let e = Q.getOrCreateThreadId({
                            environment: F,
                            spaceId: null == H ? void 0 : H.id,
                            maybeThreadStore: T
                        });
                        return m.getOrCreateClientAIChatThreadStore(e)
                    }, [m, null == H ? void 0 : H.id, F, Q, T]),
                    er = (0, n(682985).K8)(() => (null == en ? void 0 : en.state.stagedData.currentPageExplicitlyOmitted) ? ? !1, [en]),
                    ei = (0, n(682985).K8)(() => {
                        let e = !!ee,
                            t = "custom_agent" === g.aiChatType || "custom_agent_preview" === g.aiChatType,
                            r = (null == ee ? void 0 : ee.table) === i().evP && (null == ee ? void 0 : ee.getSystemBlockTypeStore().getValue()),
                            o = !r || h[r],
                            a = null == T ? void 0 : T.getTranscript().findLast(e => "context" === e.type),
                            l = (null == a ? void 0 : a.value.surface) === "daily_brief_reminder" || "daily_brief_reminder" === n(562733).zI.state.openSource;
                        return !B && !!e && !!o && !t && !l && !er
                    }, [B, g.aiChatType, er, ee, T]),
                    eo = (0, r.useCallback)(e => {
                        en && en.state.stagedData.currentPageExplicitlyOmitted !== e && en.setState({ ...en.state,
                            stagedData: { ...en.state.stagedData,
                                currentPageExplicitlyOmitted: e
                            }
                        })
                    }, [en]),
                    ea = (0, n(682985).K8)(() => (0, n(73233).getOnboardingAgentVariant)(), []),
                    el = (0, n(604306).r)("uxr_debug_onboarding_agent", {
                        disableExposureLogging: !0
                    }),
                    ed = (0, n(682985).K8)(() => {
                        var e, t;
                        let r = null == T ? void 0 : T.id;
                        if (!r || !(0, n(446062).F)(r) || !(0, n(565719).w)(ea) && !(0, n(565719).w)(el)) return;
                        let o = (null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.post_onboarding_agent_config) ? ? {};
                        if ((0, n(811853).hasOnboardingAgentMutatedFirstBlock)({
                                postOnboardingAgentConfig: o
                            })) return;
                        let a = null == (t = n(728372).AppStoreSidebarSpaceViewStore.state) || null == (t = t.getSettings()) || null == (t = t.getting_started_page_ids) ? void 0 : t[0];
                        if (!a) return;
                        let l = new(n(970831)).B(F, {
                            table: i().evP,
                            id: a
                        });
                        if (l.isDefined()) return l
                    }, [F, null == T ? void 0 : T.id, ea, el]),
                    eu = (0, n(660402).W)({
                        omitCurrentPage: B || !ei,
                        overrideBlockStore: ed
                    }),
                    {
                        mentions: es,
                        handleChangeMentions: ec,
                        handleRemoveMentionChip: ep,
                        handleTextChange: ef,
                        localMentions: eg,
                        resetMentionsState: ev,
                        clearLocalMentions: eS
                    } = function({
                        threadStore: e,
                        clientStore: t,
                        environment: o,
                        spaceStore: a,
                        textStore: l,
                        setTextValue: d,
                        saveDraftDebounced: u,
                        inferenceContext: s,
                        currentPageExplicitlyOmitted: c,
                        setCurrentPageExplicitlyOmitted: p,
                        isCurrentPageInContext: f,
                        currentPageOrWorkflowStore: g,
                        chatThreadStore: v
                    }) {
                        let [S, m] = (0, r.useState)(new(n(227318)).d), [h, C] = (0, r.useState)([]), x = (null == g ? void 0 : g.pointer.table) === i().evP || (null == g ? void 0 : g.pointer.table) === i().C0E ? null == g ? void 0 : g.pointer : void 0, _ = (0, n(682985).K8)(() => (null == v ? void 0 : v.state.stagedData.mentionStagedData) ? ? S, [v, S]), b = (0, r.useMemo)(() => {
                            if (!f || !x || _.has(x)) return _;
                            let e = [x, ...Array.from(_)];
                            return new(n(227318)).d(e)
                        }, [_, f, x]), y = (0, r.useCallback)(() => {
                            m(new(n(227318)).d)
                        }, []), w = (0, r.useCallback)(r => {
                            a && null != s && s.userStore && (x && r.has(x) && c && p(!1), e ? (0, n(143147).K$)({
                                mentions: r,
                                threadStore: e,
                                clientStore: t,
                                environment: o,
                                spaceStore: a,
                                userStore: s.userStore
                            }) : m(r))
                        }, [e, t, o, a, s, m, c, p, x]), I = (0, r.useCallback)(e => {
                            x && n(496282).L3.isEqualIdTable(e, x) && p(!0);
                            let t = new(n(227318)).d(b);
                            t.delete(e), w(t);
                            let r = l.getValue();
                            if (!r) return;
                            let i = !1,
                                o = r.filter(t => !(0, n(432155).Bw)({
                                    token: t,
                                    pointer: e,
                                    spaceStore: a ? ? void 0,
                                    userStore: null == s ? void 0 : s.userStore
                                }) || (i = !0, !1));
                            if (i) {
                                d(o), null == u || u(o);
                                let t = h.filter(t => !n(496282).L3.isEqualIdTable(e, t));
                                t.length !== h.length && C(t)
                            }
                        }, [b, w, l, h, C, d, p, x, u, a, null == s ? void 0 : s.userStore]), T = (0, r.useCallback)(e => {
                            null == u || u(e);
                            let t = (0, n(432155).dd)(e, a ? ? void 0, null == s ? void 0 : s.userStore),
                                {
                                    newMentionPointers: r,
                                    newInputMentionPointers: i
                                } = (0, n(432155).kQ)({
                                    currentTextMentionPointers: t,
                                    inputMentionPointers: h,
                                    allMentionPointers: Array.from(b)
                                });
                            r && w(new(n(227318)).d(r)), i && C(i)
                        }, [u, h, b, w, a, null == s ? void 0 : s.userStore]);
                        return (0, r.useEffect)(() => {
                            e && S.size() > 0 && v && (v.setState({ ...v.state,
                                stagedData: { ...v.state.stagedData,
                                    mentionStagedData: S
                                }
                            }), y())
                        }, [e, S, v, y]), {
                            mentions: b,
                            handleChangeMentions: w,
                            handleRemoveMentionChip: I,
                            handleTextChange: T,
                            localMentions: S,
                            resetMentionsState: (0, r.useCallback)(() => {
                                y(), C([]), p(!1)
                            }, [y, p]),
                            clearLocalMentions: y,
                            setCurrentPageExplicitlyOmitted: p
                        }
                    }({
                        threadStore: T,
                        clientStore: m,
                        environment: F,
                        spaceStore: H,
                        textStore: U,
                        setTextValue: N,
                        saveDraftDebounced: G,
                        inferenceContext: eu,
                        currentPageExplicitlyOmitted: er,
                        setCurrentPageExplicitlyOmitted: eo,
                        isCurrentPageInContext: ei,
                        currentPageOrWorkflowStore: ee,
                        chatThreadStore: en
                    }),
                    {
                        attachments: em,
                        handleDeleteStagedAttachment: eh
                    } = function({
                        chatThreadStore: e
                    }) {
                        let t = (0, n(682985).K8)(() => null == e ? void 0 : e.getStagedAttachmentUploadStoreIfExists(), [e]);
                        return {
                            attachments: (0, n(682985).K8)(() => (0, n(315148).ev)(t) ? ? [], [t], {
                                equalityFn: n(381453).n4
                            }),
                            handleDeleteStagedAttachment: (0, r.useCallback)(n => {
                                t && e && (t.onDeleteFileUpload(n), e.unstageAttachmentInferenceTranscriptStep({
                                    fileId: n
                                }))
                            }, [t, e])
                        }
                    }({
                        chatThreadStore: en
                    }),
                    eC = function({
                        clientStore: e,
                        threadStore: t,
                        spaceStore: a
                    }) {
                        let f = (0, n(533992).v3)();
                        return (0, r.useCallback)(r => {
                            if (!a || !t) return;
                            let g = (0, n(354128).getAgentPreviewWrapper)(f).getPreviewedSteps(),
                                v = [];
                            for (let e of g) {
                                let t = [];
                                for (let n of (0, s().XS)(e)) {
                                    let e = r.invertedOperations.length;
                                    o().Hp({
                                        environment: f,
                                        operation: n.operation,
                                        recordCache: f.defaultRecordCache.inMemoryRecordCache,
                                        transaction: r
                                    });
                                    let i = r.invertedOperations.slice(e),
                                        a = [];
                                    for (let e of i) !(0, d().E)(e) && ((0, c().$Y)(e) || (0, c().mP)(e)) && a.push(e);
                                    t.push({ ...n,
                                        invertedOperations: a
                                    })
                                }
                                let n = { ...(0, u().oA)(e, "applied:partial"),
                                    threadOperations: t
                                };
                                v.push(n);
                                let g = l().X.createChildStore(a, {
                                    id: e.id,
                                    table: i().mSw,
                                    spaceId: a.id
                                });
                                (0, p().z)({
                                    store: g.getStepStore(),
                                    data: {
                                        state: (0, u().Gu)(n),
                                        threadOperations: n.threadOperations
                                    },
                                    transaction: r
                                })
                            }
                            let S = e.getOrCreateClientAIChatThreadStore(t.id);
                            S.setState({ ...S.state,
                                temporarySteps: S.state.temporarySteps.map(e => {
                                    let t = v.find(t => t.id === e.id);
                                    return t || e
                                })
                            })
                        }, [f, a, e, t])
                    }({
                        clientStore: m,
                        threadStore: T,
                        spaceStore: H
                    }),
                    ex = (0, o().rW)({
                        clientStore: m,
                        threadStore: T,
                        initialPerform: j ? void 0 : eC
                    }),
                    e_ = (0, n(710726).K)(),
                    {
                        selectedBlockStores: eb,
                        multiTextSelection: ey
                    } = function({
                        enableBlockSelection: e,
                        mentions: t,
                        aiChatFeatureController: o,
                        configType: a
                    }) {
                        let l = o.supportsUserSpecifiedContext(a),
                            d = (0, n(533677).b)(),
                            u = (0, n(682985).K8)(() => {
                                if (!e || !l) return [];
                                let r = n(584265).default.state;
                                return r.phase !== n(476987).o.Selected ? [] : r.stores.filter(e => !Array.from(t).some(t => t.table === i().evP && t.id === e.id)).filter(e => d(e))
                            }, [e, l, t, d]),
                            s = (0, n(682985).K8)(() => {
                                if (!e || !l) return;
                                let t = n(358377).default.state;
                                if ("editing" === t.mode) return t.multiSelection
                            }, [e, l], {
                                equalityFn: n(795676).k
                            }),
                            c = (0, n(682985).K8)(() => {
                                if (!e || !l) return;
                                let t = n(562733).zI.getCompletionTextSelection() ? ? s;
                                if (t && d(t.start.store)) return t
                            }, [e, l, d, s], {
                                equalityFn: n(381453).n4
                            });
                        return (0, r.useEffect)(() => {
                            s && d(s.start.store) && n(562733).zI.update(e => ({ ...e,
                                completionContext: void 0
                            }))
                        }, [s, d]), {
                            selectedBlockStores: u,
                            multiTextSelection: c
                        }
                    }({
                        enableBlockSelection: L,
                        mentions: es,
                        aiChatFeatureController: g,
                        configType: C.type
                    });
                (0, r.useEffect)(() => {
                    q || ey && !(0, n(971541).k)(ey) && n(562733).zI.update(e => ({ ...e,
                        explicitlyAddedTextSelection: (0, n(617225).O)(ey)
                    }))
                }, [q, ey]);
                let ew = null == ee ? void 0 : ee.id,
                    eI = (0, n(668745).ZC)(ew);
                (0, r.useEffect)(() => {
                    void 0 !== eI && ew !== eI && n(562733).zI.update(e => ({ ...e,
                        explicitlyAddedTextSelection: void 0
                    }))
                }, [ew, eI]),
                function(e) {
                    let {
                        enableAutoInsertion: t,
                        multiTextSelection: i,
                        saveDraftDebounced: o,
                        selectedBlockStores: l,
                        setTextValue: d,
                        textStore: u
                    } = e, s = (0, r.useRef)(void 0), c = (0, r.useRef)(void 0), p = (0, r.useRef)(void 0), f = (0, r.useRef)(void 0);
                    (0, r.useEffect)(() => () => {
                        p.current && window.clearTimeout(p.current), f.current && window.clearTimeout(f.current)
                    }, []), (0, r.useEffect)(() => {
                        if (!t || void 0 === i || (0, n(971541).k)(i)) {
                            s.current = void 0, p.current && (window.clearTimeout(p.current), p.current = void 0);
                            return
                        }
                        let e = (0, a().hL)(i);
                        if (!e) return;
                        let r = function(e) {
                            if (!e || "text" !== e.type) return "";
                            let t = e.start,
                                n = e.end,
                                r = t.spaceId ? `:${t.spaceId}` : "",
                                i = n.spaceId ? `:${n.spaceId}` : "";
                            return `text:${t.id}${r}:${t.index}-${n.id}${i}:${n.index}`
                        }(e);
                        r !== s.current && (p.current && window.clearTimeout(p.current), p.current = window.setTimeout(() => {
                            let t = u.getValue(),
                                n = (0, a().iR)({
                                    currentTextValue: t,
                                    data: e,
                                    mode: "replaceSameType"
                                });
                            d(n), null == o || o(n), s.current = r, p.current = void 0
                        }, 250))
                    }, [t, i, o, d, u]), (0, r.useEffect)(() => {
                        var e;
                        if (!t || 0 === l.length) {
                            c.current = void 0, f.current && (window.clearTimeout(f.current), f.current = void 0);
                            return
                        }
                        let n = (0, a().$c)(l);
                        if (!n) return;
                        let r = (e = n) && "blocks" === e.type ? `blocks:${e.blocks.map(e=>e.spaceId?`${e.id}:${e.spaceId}`:e.id).sort().join(",")}` : "";
                        r !== c.current && (f.current && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
                            let e = u.getValue(),
                                t = (0, a().iR)({
                                    currentTextValue: e,
                                    data: n,
                                    mode: "replaceSameType"
                                });
                            d(t), null == o || o(t), c.current = r, f.current = void 0
                        }, 250))
                    }, [t, o, l, d, u])
                }({
                    enableAutoInsertion: "automatic" === g.selectionContextInsertionMode,
                    multiTextSelection: ey,
                    saveDraftDebounced: G,
                    selectedBlockStores: eb,
                    setTextValue: N,
                    textStore: U
                }),
                function(e) {
                    let {
                        enableManualInsertion: t,
                        saveDraftDebounced: i,
                        setTextValue: o,
                        textStore: l
                    } = e, d = (0, n(682985).K8)(() => n(562733).zI.state.selectionContextInsertRequests, [], {
                        equalityFn: n(381453).n4
                    });
                    (0, r.useEffect)(() => {
                        if (!d || 0 === d.length) return;
                        if (!t) return void n(562733).zI.update(e => ({ ...e,
                            selectionContextInsertRequests: void 0
                        }));
                        let e = l.getValue();
                        for (let t of d) e = (0, a().iR)({
                            currentTextValue: e,
                            data: t.data,
                            mode: "append"
                        });
                        o(e), null == i || i(e), n(562733).zI.update(e => {
                            let t = e.selectionContextInsertRequests;
                            if (!t || 0 === t.length) return e;
                            let n = 0;
                            for (; n < d.length && n < t.length && (null == (r = t[n]) ? void 0 : r.id) === (null == (i = d[n]) ? void 0 : i.id);) {
                                var r, i;
                                n += 1
                            }
                            let o = t.slice(n);
                            return { ...e,
                                selectionContextInsertRequests: o.length > 0 ? o : void 0
                            }
                        })
                    }, [t, d, i, o, l])
                }({
                    enableManualInsertion: "manual" === g.selectionContextInsertionMode,
                    saveDraftDebounced: G,
                    setTextValue: N,
                    textStore: U
                });
                let {
                    errorState: eT,
                    handleChatSubmissionError: ek,
                    clearError: eE
                } = (0, n(186320).yG)({}), {
                    inputMode: eA,
                    threadMode: eM,
                    upsellMessage: eP,
                    upgradeButtonTextProps: eR,
                    isUpgradeSystemEnabled: eK,
                    isStoppingRecording: eO,
                    audioRecorder: eD,
                    onStartRecording: e$,
                    onStopRecording: ez
                } = (0, n(800411).W)({
                    errorState: eT,
                    attachments: em,
                    clientStore: m,
                    threadStore: T,
                    nextConfig: C,
                    spaceStore: H,
                    textStore: U,
                    isMicInputEnabled: g.isMicInputEnabled
                }), eB = (0, r.useCallback)(async e => {
                    var t, r;
                    try {
                        if (A) return;
                        if (T) {
                            let e = (0, n(851062).ey)(T.getTranscript()),
                                t = (0, n(187353).Ft)({
                                    clientStore: m,
                                    threadStore: T
                                });
                            if (e.length > 0 && !t) {
                                let t = (null == D ? void 0 : D.value) ? ? (0, n(997486).i)(T.getTranscript()),
                                    r = (0, n(997486).s0)(t) ? e.filter(e => "generate-plan" !== e.toolType) : e;
                                r.length > 0 && await (0, n(752104).j)({
                                    environment: F,
                                    threadStore: T,
                                    confirmToolStepIds: [],
                                    rejectToolStepIds: r.map(e => e.id)
                                })
                            }
                        }(null == (t = n(296738).lz.getSource()) ? void 0 : t.type) === "edit-reference" && (0, n(115960).ML)(), X(), w && await w(e);
                        let r = "automatic" === g.selectionContextInsertionMode,
                            i = "none" === g.selectionContextInsertionMode ? n(562733).zI.state.explicitlyAddedTextSelection : void 0,
                            o = await (0, n(143147).XA)({
                                agentChatIntegrations: e_,
                                aiChatFeatureController: g,
                                args: e,
                                clearLocalMentions: eS,
                                clientStore: m,
                                environment: F,
                                inferenceContext: eu,
                                localMentions: T ? void 0 : eg,
                                mainEditorCurrentBlockStore: Y,
                                peekViewBlockStore: J,
                                selectedBlockStores: r || void 0 !== i || !q ? eb : void 0,
                                textSelection: i ? ? (r || !q ? ey : void 0),
                                sourceIdForEventCorrelation: I,
                                threadStore: T,
                                temporaryAiThreadManager: Q,
                                parentPointer: k,
                                invokedFromBlockId: E,
                                sendPartialTranscript: !0,
                                sendPatchResponse: !0,
                                inputSurfaceOverride: W
                            });
                        o.didChangeThread && y({
                            newThreadStore: o.threadStore,
                            submitFrom: e.submitFrom
                        }), (0, n(962059).D)({
                            stores: []
                        }), n(562733).zI.update(e => ({ ...e,
                            completionContext: void 0,
                            explicitlyAddedTextSelection: void 0
                        })), o.didSubmit && (null == $ || $(void 0))
                    } catch (t) {
                        ek(t, "UnifiedChatInputProvider.handleSubmitCallback", {
                            threadExists: !!T,
                            spaceId: null == H ? void 0 : H.id,
                            configType: null == (r = e.config) ? void 0 : r.type
                        })
                    }
                }, [A, X, w, e_, g, eS, m, F, eu, T, eg, Y, J, y, eb, ey, I, Q, k, E, W, ek, null == H ? void 0 : H.id, q, $, D]);
                (0, r.useEffect)(() => {
                    null == R || R(eB)
                }, [R, eB]), t = (0, n(682985).K8)(() => n(562733).zI.state.completionContext, []), f = (0, n(533677).t)(), (0, r.useEffect)(() => () => {
                    !n(562733).zI.state.explicitlyAddedTextSelection && (null == t ? void 0 : t.type) === "textSelection" && f(t) && n(358377).default.setState({
                        mode: "editing",
                        multiSelection: (0, n(617225).O)(t.textSelection),
                        forceExtendAnnotations: {}
                    })
                }, [t, f]);
                let eV = (0, n(668745).ZC)(T);
                (0, r.useEffect)(() => {
                    let e = void 0 !== eV && void 0 !== T && eV.id !== T.id && (0, n(558208).Ci)(eV) && !(0, n(558208).Ci)(T);
                    eV && eV.id !== (null == T ? void 0 : T.id) && !e && eo(!1)
                }, [eV, T, eo]);
                let eF = (0, n(668745).ZC)(null == H ? void 0 : H.id);
                return ((0, r.useEffect)(() => {
                    null != H && H.id && eF && (null == H ? void 0 : H.id) !== eF && (ev(), x("reset"), X(), Q.reset())
                }, [null == H ? void 0 : H.id, eF, X, Q, x, ev]), (0, r.useEffect)(() => {
                    null == b || b()
                }, [b]), H) ? (0, S.jsx)(n(802384).h, {
                    aiChatFeatureController: g,
                    attachments: em,
                    clientStore: m,
                    mentions: es,
                    nextConfig: C,
                    currentPageInContext: ei,
                    onChangeMentions: ec,
                    onChangeNextConfig: x,
                    onDeleteStagedAttachment: eh,
                    onEsc: _,
                    onRemoveMentionChip: ep,
                    onStopInference: ex,
                    onSubmit: eB,
                    onTextChange: ef,
                    spaceStore: H,
                    textStore: U,
                    threadStore: T,
                    disabled: A,
                    errorState: eT,
                    onClearError: eE,
                    onStartTyping: K,
                    placeholder: M,
                    ignoreKeyboardMode: O,
                    selectedBlockStores: eb,
                    inputMode: eA,
                    threadMode: eM,
                    upsellMessage: eP,
                    upgradeButtonTextProps: eR,
                    isUpgradeSystemEnabled: eK,
                    isStoppingRecording: eO,
                    audioRecorder: eD,
                    onStartRecording: e$,
                    onStopRecording: ez,
                    pendingPlanModeStep: D,
                    onSetPendingPlanModeStep: $,
                    onSurveyActive: z,
                    compact: V
                }) : null
            }
            let h = {
                home_custom_db: !1,
                home_main: !1,
                home_trending: !1,
                home_similar_users: !1,
                home_most_visited: !1,
                home_last_edited: !1,
                home_favorites: !1,
                home_my_tasks: !1,
                home_posts: !1,
                home_shortcuts: !1,
                people_collection_view_page: !1,
                person_profile_main: !1,
                library_collection_view_page: !1,
                internal_system_collection_view_page: !1,
                meetings_collection_view_page: !1,
                team_page: !1
            }
        },
        577280: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(296540);
            var r = n(474848);

            function i(e) {
                let {
                    labelType: t
                } = e, i = "invited" === t ? n(805186).S.invitedLabel : "external" === t ? n(805186).S.externalLabel : n(805186).S.guestLabel;
                return (0, r.jsx)(n(746434).E, {
                    content: (0, r.jsx)(n(109939).sA, { ...i
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        710726: (e, t, n) => {
            n.d(t, {
                K: () => r
            }), n(581454);

            function r() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    r = (0, n(682985).K8)(() => (0, n(427846)._)(e), [e]);
                return (0, n(682985).K8)(() => {
                    var e;
                    if (!r) return [];
                    let i = (null == t || null == (e = t.getSettings()) ? void 0 : e.agent_chat_modules) ? ? [];
                    return 0 === i.length ? [] : i.map(e => ({
                        defaultEnabled: e.defaultEnabled,
                        workflowModuleStore: n(646139).P.createChildStore(r, e.pointer)
                    }))
                }, [t, r])
            }
        },
        827380: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e) {
                return {
                    all: e = e || new Map,
                    on: function(t, n) {
                        var r = e.get(t);
                        r ? r.push(n) : e.set(t, [n])
                    },
                    off: function(t, n) {
                        var r = e.get(t);
                        r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
                    },
                    emit: function(t, n) {
                        var r = e.get(t);
                        r && r.slice().map(function(e) {
                            e(n)
                        }), (r = e.get("*")) && r.slice().map(function(e) {
                            e(t, n)
                        })
                    }
                }
            }
        },
        958863: (e, t, n) => {
            n.d(t, {
                E: () => o
            }), n(296540);
            var r = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.45 2.17 11.09 15.43",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 2.175A2.875 2.875 0 0 0 7.125 5.05v3.6a2.875 2.875 0 1 0 5.75 0v-3.6A2.875 2.875 0 0 0 10 2.175M8.375 5.05a1.625 1.625 0 0 1 3.25 0v3.6a1.625 1.625 0 1 1-3.25 0z"
                        }), (0, r.jsx)("path", {
                            d: "M5.604 10.891a.625.625 0 1 0-1.028.71 6.58 6.58 0 0 0 4.799 2.82v1.929H5.95a.625.625 0 1 0 0 1.25h8.1a.625.625 0 0 0 0-1.25h-3.425v-1.93a6.58 6.58 0 0 0 4.799-2.818.625.625 0 1 0-1.029-.71 5.33 5.33 0 0 1-4.393 2.308h-.004a5.33 5.33 0 0 1-4.394-2.309"
                        })]
                    })
                },
                o = (0, n(104509).wt)("microphone", i, "default")
        }
    }
]);