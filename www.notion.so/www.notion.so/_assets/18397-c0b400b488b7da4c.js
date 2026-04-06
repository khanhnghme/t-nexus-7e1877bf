"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18397], {
        95405: (e, t, i) => {
            i.d(t, {
                $S: () => o,
                I4: () => r,
                IQ: () => n
            }), i(898992), i(354520);

            function r(e, t, r) {
                let o = n(t).slice(),
                    a = o.findIndex(t => e.id === t.id); - 1 === a ? o.unshift(e) : o.splice(a, 1, e), (0, i(862759).m)({
                    userSettingsStore: t,
                    transaction: r,
                    data: {
                        favorite_ai_actions: o
                    }
                })
            }

            function n(e) {
                var t;
                return (null == (t = e.getModel()) || null == (t = t.getSettings()) ? void 0 : t.favorite_ai_actions) ? ? []
            }

            function o(e, t, r) {
                let o = n(t).filter(t => t.id !== e.id);
                (0, i(862759).m)({
                    userSettingsStore: t,
                    transaction: r,
                    data: {
                        favorite_ai_actions: o
                    }
                })
            }
        },
        133121: (e, t, i) => {
            i.d(t, {
                u: () => r
            });
            let r = "return-to-writer-button"
        },
        298176: (e, t, i) => {
            i.d(t, {
                m: () => o
            });
            var r = () => i(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        type: "uninitialized"
                    }
                }
                isWriting() {
                    return "filling" === this.state.type && !this.state.haveAllBlocksCompletedAutofill && !this.state.didInterruptStreaming
                }
                setIsWriting(e) {
                    let {
                        propertySchema: t,
                        stores: r,
                        sessionIdForAnalytics: n,
                        collectionId: o
                    } = e, a = n || i(92513).JW();
                    return this.setState({
                        type: "filling",
                        propertySchema: t,
                        collectionId: o,
                        numBlocksToAutofill: r.length,
                        numBlocksAutofilled: 0,
                        sessionId: a,
                        didInterruptStreaming: !1,
                        haveAllBlocksCompletedAutofill: !1
                    }), a
                }
            }
            let o = new n
        },
        334659: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightUpFillIcon: () => n,
                iconDefinition: () => r
            }), i(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 2.12 12.56 15.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.619 2.381a.875.875 0 0 0-1.238 0l-5.4 5.4A.875.875 0 1 0 5.22 9.02l3.906-3.907V17.05c0 .456.392.826.875.826s.875-.37.875-.826V5.112l3.906 3.907A.875.875 0 1 0 16.02 7.78z"
                    })
                },
                n = (0, i(104509).wt)("arrowStraightUpFill", r, "fill")
        },
        420459: (e, t, i) => {
            i.d(t, {
                G4: () => a,
                gu: () => n,
                rs: () => o
            }), i(18107), i(967357);
            var r = () => i(970831);

            function n(e) {
                let t = e ? ? ("editing" === i(358377).default.state.mode ? i(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let n = t.start.store,
                    o = n.getRecordStoreUIRoot(),
                    a = i(521595).n.findNodeFromStore(n),
                    l = (0, i(534012).T)(n),
                    s = null == l ? void 0 : l.getRecordStoreUIParent(),
                    u = (0, i(730994).K3)(o),
                    c = l && l instanceof r().B && l !== o ? l : void 0,
                    d = c ? ? a;
                if (o && o instanceof r().B && d) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: o,
                    currentBlock: c,
                    origin: d,
                    currentParent: s,
                    scrollerStore: u,
                    isPageTitle: o.id === n.id
                }
            }

            function o() {
                let {
                    stores: e
                } = i(584265).default.state, t = i(358377).default.state, n = "empty" !== t.mode ? t.multiSelection : void 0, o = "empty" !== t.mode ? t.multiSelection.start.store : void 0, a = o ? o.getRecordStoreUIRoot() : void 0;
                if (!(a instanceof r().B)) {
                    let e, t = null == o ? void 0 : o.getRecordStoreUIParent();
                    for (; null != t;) t instanceof r().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (a = e)
                }
                if (n && a && a instanceof r().B) {
                    let t = (0, i(534012).T)(n.end.store),
                        r = null == t ? void 0 : t.getRecordStoreUIParent(),
                        o = (0, i(730994).K3)(a);
                    if (t && r) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: n,
                        currentPage: a,
                        origin: t,
                        endBlock: t,
                        endBlockParent: r,
                        scrollerStore: o
                    }
                }
            }

            function a() {
                if (i(584265).default.state.stores.length > 0) {
                    let e = i(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== i(584265).default.state.stores.length) return;
                            let e = i(584265).default.state.stores[0];
                            if (!(e instanceof r().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? n(e) : function() {
                            let {
                                stores: e
                            } = i(584265).default.state, t = e[0], n = e.at(-1), o = t ? t.getRecordStoreUIRoot() : void 0;
                            if (o && o instanceof r().B && n) {
                                let t = (0, i(730994).K3)(o);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: o,
                                    origin: n,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, i(971541).k)(e.multiSelection) ? n() : o()
                }
            }
        },
        448988: (e, t, i) => {
            i.d(t, {
                Wx: () => o,
                fM: () => r,
                sM: () => n
            });
            let r = new(i(815048)).O2("framer-motion", async () => await Promise.all([i.e(49806), i.e(79974), i.e(45414), i.e(37043)]).then(i.bind(i, 301716)));

            function n(e) {
                return e.useAnimation()
            }

            function o(e, ...t) {
                return e.useInView(...t)
            }
        },
        476081: (e, t, i) => {
            i.d(t, {
                l: () => r
            });
            async function r(e) {
                var t;
                let {
                    environment: r,
                    blockStore: n,
                    rect: o,
                    property_id: a,
                    from: l
                } = e;
                if (i(332190).A.hasContent()) return void(0, i(58931)._y)({
                    environment: r,
                    reason: "starting_new"
                });
                let s = i(496704).K.getRect(n);
                if (!s) return;
                let u = new(i(478597)).A(r, (0, i(226221).e)(n.pointer.spaceId)),
                    c = s.width,
                    d = s.height,
                    f = s.right - c;
                i(332190).A.setState({
                    open: !0,
                    rect: o || new DOMRect(f, s.top, c, d),
                    type: "block",
                    content: "comment",
                    blockStore: n,
                    blockId: n.id,
                    discussionInputStore: u,
                    property_id: a,
                    lastKnownBlockStore: n,
                    from: l
                }), (0, i(661767).V)({
                    element: null == (t = i(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: r,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), i(827862).A.setActiveWithSource("text_annotation"), await (0, i(745990).M)({
                    discussionInputStore: u,
                    environment: r
                }), i(65255).j4(r, {
                    from: l
                })
            }
        },
        512342: (e, t, i) => {
            i.d(t, {
                LB: () => o,
                VT: () => r,
                vr: () => n
            });
            let r = (0, i(109939).YK)({
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
                n = {
                    text: {
                        summarize: {
                            name: r.autofillSummary,
                            svg: i(636434).P
                        },
                        translate: {
                            name: r.autofillTranslate,
                            svg: i(740902).textTranslateIcon
                        },
                        extract: {
                            name: r.autofillExtract,
                            svg: i(774458).n
                        },
                        custom: {
                            name: r.autofillCustom,
                            svg: i(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: r.autofillCustom,
                            svg: i(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: r.autofillCustom,
                            svg: i(312528).x
                        }
                    }
                };

            function o(e) {
                let {
                    origin: t
                } = e;
                if (t instanceof i(970831).B) {
                    let e = i(240414).T.findNodeFromStore(t);
                    return e ? ("table" === t.getType() && (e = e.querySelector(`.${i(962817).rb}.notion-table-block`) ? ? e), e.getBoundingClientRect()) : void 0
                }
                return t instanceof HTMLElement ? t.getBoundingClientRect() : t
            }
        },
        661044: (e, t, i) => {
            function r(e, t = !0) {
                t && function(e, t) {
                    if ((0, i(730994).Ku)(e), ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && ("results" === t.stage || "initialPrompt" === t.stage) && ("textSelection" === t.context.type || "cursor" === t.context.type)) {
                        let r = t.context.textSelection;
                        i(374176).default.afterNextFlush(() => {
                            (0, i(726923).setMultiSelection)({
                                multiSelection: r
                            }),
                            function(e) {
                                let {
                                    multiSelection: t,
                                    environment: r
                                } = e;
                                if (void 0 === t.start || void 0 === t.end || !Number.isFinite(t.start.index) || !Number.isFinite(t.end.index)) return;
                                let n = i(521595).n.findNodeFromStore(t.start.store),
                                    o = i(521595).n.findNodeFromStore(t.end.store);
                                if (!n || !o) return;
                                let a = (0, i(536614).vA)(n, t.start.index),
                                    l = (0, i(536614).vA)(o, t.end.index),
                                    s = document.createRange();
                                s.setStart(a.container, a.offset), s.setEnd(l.container, l.offset), i(239134).set(s, r.device)
                            }({
                                multiSelection: r,
                                environment: e
                            })
                        })
                    }
                }(e, i(304636).default.state), i(304636).default.setState({
                    type: "closed"
                })
            }
            async function n(e) {
                let {
                    environment: t,
                    from: r,
                    forceAgentWriter: n
                } = e, {
                    context: o,
                    prefilledValue: a,
                    sessionId: l
                } = e, {
                    assistantDependency: s
                } = await Promise.resolve().then(i.bind(i, 310639)), u = await s.load();
                if (!await u.assistantMenuActions.closeAssistantRightHandSideMenu({
                        environment: t
                    })) return;
                let c = {
                    type: "closed"
                };
                if ("closed" === i(304636).default.state.type && (o || (o = (0, i(420459).G4)()), o))
                    if (n || (0, i(828294).a)("agent_writer")) c = {
                        type: "agentCompletionPopup",
                        stage: "initialPrompt",
                        context: o,
                        from: r,
                        prefilledValue: e.prefilledTextValue ? ? (0, i(247438).x9d)(a ? ? ""),
                        pendingSkill: e.agentPrebuiltPromptType,
                        autoSubmit: e.autoSubmit,
                        onAccept: e.onAccept,
                        acceptButtonTooltipOverride: e.acceptButtonTooltipOverride
                    };
                    else {
                        var d;
                        a || (a = ""), l || (l = (0, i(818963).gC)()), c = {
                            type: "assistantCompletionPopup",
                            stage: "initialPrompt",
                            context: o,
                            from: r,
                            prefilledValue: a,
                            sessionId: l,
                            loading: !1,
                            hasErrored: !1
                        };
                        let e = (0, i(974410).f)(null == (d = o) ? void 0 : d.currentPage);
                        e && t.api.callApi({
                            eventName: "publishAiSession",
                            environment: t,
                            data: {
                                inference_type: "writer",
                                spaceId: e.id,
                                id: l,
                                metadata: {
                                    from: r
                                }
                            }
                        })
                    }
                i(304636).default.setState(c),
                    function(e) {
                        let {
                            environment: t,
                            promptForAnalytics: r
                        } = e, {
                            state: n
                        } = i(304636).default;
                        if ("assistantCompletionPopup" === n.type && "results" !== n.stage) {
                            i(218744).default.checkGate({
                                gateName: "mobile_assistant_prevent_clear_selection"
                            }) || (0, i(525779).clear)({
                                environment: t
                            });
                            let e = n.sessionId,
                                o = i(838448).default.getSessionContext(e);
                            i(942806).trackAICompletionPopupOpen(t, {
                                session_id: n.sessionId,
                                prompt_key: (null == r ? void 0 : r.key) ? ? "unknown",
                                from: n.from,
                                sessionContext: o
                            }), (0, i(259413).V)({
                                dismissed: !1,
                                environment: t,
                                trackCreateBlock: i(549960).vH
                            })
                        }
                    }(e)
            }

            function o(e) {
                let {
                    environment: t,
                    prefilledValue: r,
                    from: o
                } = e, a = (0, i(420459).gu)();
                a && n({
                    environment: t,
                    from: o ? ? "page_menu",
                    sessionId: i(92513).JW(),
                    context: a,
                    prefilledValue: r,
                    promptForAnalytics: void 0
                })
            }
            i.r(t), i.d(t, {
                closeInitialPromptAndEndSession: () => r,
                openHelpMeWriteGenericPopup: () => o,
                toggleInitialPrompt: () => n
            })
        },
        683499: (e, t, i) => {
            i.d(t, {
                BJ: () => c,
                NF: () => f,
                QQ: () => p,
                fY: () => d
            }), i(898992), i(354520), i(737550);
            var r = () => i(500461),
                n = () => i(780899),
                o = () => i(832375),
                a = () => i(360343);
            let l = /<lang[^>]*\/>/g,
                s = "<lang";

            function u(e) {
                let t = e.replace(l, "");
                return ! function(e) {
                    if (!e.startsWith("<")) return !1;
                    if (s.startsWith(e)) return !0;
                    if (e.startsWith(s) && !e.includes("/>")) {
                        let t = e.charAt(s.length);
                        return "" === t || /\s|\/|>/.test(t)
                    }
                    return !1
                }(t.trimStart()) ? t : ""
            }

            function c(e) {
                return !!((0, i(426048).gY)(e, "update-page") || (0, i(426048).gY)(e, "update-page-v2") || function(e) {
                    if ((0, i(426048).gY)(e, "callFunction")) {
                        var t;
                        return (null == (t = e.input) ? void 0 : t.function) === "connections.notion.updatePage"
                    }
                    return !1
                }(e) || function(e) {
                    if ((0, i(426048).gY)(e, "runScript")) {
                        var t, r;
                        return null != (t = e.result) && null != (t = t.threadDiff) && null != (t = t.diffs) && !!t.length || null != (r = e.threadOperations) && !!r.length
                    }
                    return !1
                }(e))
            }

            function d(e) {
                for (let t = e.length - 1; t >= 0; t -= 1) {
                    let i = e[t];
                    if ("agent-tool-result" === i.type && c(i) && function(e) {
                            let t = e.state ? ? (e.done ? "applied" : void 0),
                                i = void 0 !== e.result && null !== e.result && "object" == typeof e.result && "autoFixInProgress" in e.result && !0 === e.result.autoFixInProgress;
                            return "applied" === t && !i
                        }(i)) return {
                        step: i,
                        index: t
                    }
                }
            }

            function f(e) {
                let t, i, l = new Map;
                for (let u of e) {
                    var s;
                    if ("agent-tool-result" !== u.type || !(0, n().nP)(u) || !c(u)) continue;
                    let e = null == (s = u.result) || null == (s = s.threadDiff) ? void 0 : s.diffs,
                        d = (0, r().v)(u) ? ? [];
                    if (e && e.length > 0) {
                        for (let t of e) t.pointer.table === o().evP && t.pointer.id && (l.set(t.pointer.id, (0, a().cx)(t)), i = t.pointer);
                        t = u.id;
                        continue
                    }
                    if (0 !== d.length) {
                        for (let e of d) e.table !== o().evP || !e.id || l.has(e.id) || (l.set(e.id, {
                            pointer: e
                        }), i = e);
                        t = u.id
                    }
                }
                if (0 !== l.size) return {
                    entries: Array.from(l.values()),
                    lastEditedPointer: i,
                    sourceId: t ? ? "agent-writer"
                }
            }

            function p(e) {
                let t;
                if (!e || !e.steps.some(e => "agent-tool-result" === e.type)) return e;
                for (let i = e.steps.length - 1; i >= 0; i -= 1) {
                    let r = e.steps[i];
                    if ("agent-inference" === r.type && function(e) {
                            if ("agent-inference" !== e.type) return !1;
                            let {
                                value: t
                            } = e;
                            return void 0 !== t && ("string" == typeof t ? u(t).trim().length > 0 : !!Array.isArray(t) && t.some(e => "text" === e.type && u(e.content).trim().length > 0))
                        }(r)) {
                        t = r.id;
                        break
                    }
                }
                if (!t) return e;
                let i = e.steps.filter(e => "agent-inference" !== e.type || e.id === t),
                    r = i.length > 0 ? i[i.length - 1].id : e.lastStepId;
                return { ...e,
                    steps: i,
                    hasAgentInferenceStep: !0,
                    lastStepId: r
                }
            }
        },
        835043: (e, t, i) => {
            i.d(t, {
                Uj: () => d,
                X_: () => c,
                ht: () => S,
                jS: () => g,
                lB: () => w,
                x0: () => l
            }), i(16280), i(18107), i(967357);
            var r = i(296540),
                n = i(474848);

            function o(e) {
                return new DOMRect(e.left, e.top, e.width, e.height)
            }
            let a = {
                visibility: "hidden"
            };

            function l(e) {
                let {
                    scrollerStore: t,
                    openState: l,
                    children: s,
                    freezePosition: u = !1,
                    positionAbove: c = !1,
                    anchorBlockId: d
                } = e, w = (0, r.useRef)(null), A = (0, r.useRef)(null), [y, b] = (0, r.useState)(void 0), x = (0, r.useRef)(!1), I = (0, r.useRef)(void 0), {
                    scrollerRef: P,
                    scrollerClientRect: k
                } = (0, i(682985).K8)(() => ({
                    scrollerRef: t.state.elementRef,
                    scrollerClientRect: t.state.clientRect
                }), [t]), M = (0, r.useRef)(void 0), C = (0, r.useRef)(void 0), R = (0, r.useRef)(t), F = (0, r.useRef)(!1);
                R.current !== t && (I.current = void 0, C.current = void 0, M.current = void 0, F.current = !0, R.current = t);
                let B = (0, i(682985).K8)(() => "agentCompletionPopup" === l.type && l.didTransitionFromPeekToFullPage, [l]);
                (0, r.useEffect)(() => {
                    if (B) {
                        let e = setTimeout(() => {
                            i(304636).default.setDidTransitionFromPeekToFullPage(!1), F.current = !0
                        }, 300);
                        return () => clearTimeout(e)
                    }
                }, [B]);
                let T = (0, i(682985).K8)(() => {
                        let e;
                        if (u && !c && I.current && !F.current) return I.current;
                        F.current = !1;
                        let t = "agentCompletionPopup" === l.type;
                        if (B && t && P.current) {
                            let e = l.context.origin;
                            if (e instanceof i(970831).B) {
                                let t = c && d ? d : e.id,
                                    r = P.current.querySelector(`[data-block-id="${t}"]`);
                                if (r) {
                                    let t, n = r.getBoundingClientRect(),
                                        o = P.current.getBoundingClientRect(),
                                        a = P.current.scrollTop;
                                    if (c) {
                                        let e = (null == y ? void 0 : y.height) ? ? 200;
                                        t = Math.max(t = n.top - o.top + a - e - g.bottom, g.top)
                                    } else t = n.bottom - o.top + a + 8;
                                    let l = (0, i(955630).iq)(e.getType() ? ? "text"),
                                        s = o.width > v + g.left + g.right && (l || n.width < h),
                                        u = {
                                            top: t,
                                            left: n.left - o.left,
                                            width: Math.min(Math.max(s ? v : n.width, m), v, o.width - g.left - g.right)
                                        };
                                    return I.current = u, u
                                }
                            }
                            return I.current
                        }
                        let {
                            originRect: r,
                            correspondingOpenState: n
                        } = (() => {
                            let e = (0, i(730994).Q9)(l),
                                t = e ? (0, i(512342).LB)(e) : void 0;
                            if (!t && M.current) {
                                let e = (0, i(730994).Q9)(M.current),
                                    t = e ? (0, i(512342).LB)(e) : void 0;
                                return t || (t = C.current ? o(C.current) : void 0), {
                                    originRect: t,
                                    correspondingOpenState: M.current
                                }
                            }
                            if (!t && C.current && (t = o(C.current)), !t && P.current) {
                                let e = l.context.origin;
                                if (e instanceof i(970831).B) {
                                    let i = P.current.querySelector(`[data-block-id="${e.id}"]`);
                                    i && (t = i.getBoundingClientRect())
                                }
                            }
                            return t && (C.current = o(t)), {
                                originRect: t,
                                correspondingOpenState: l
                            }
                        })();
                        if (!r || !k || !P.current) return I.current;
                        let a = r;
                        if (c && d && P.current) {
                            let e = P.current.querySelector(`[data-block-id="${d}"]`);
                            e && (a = e.getBoundingClientRect())
                        }
                        M.current || (M.current = n), (e => {
                            let {
                                origin: t,
                                type: r
                            } = e.context;
                            switch (r) {
                                case "cursor":
                                    return t instanceof i(970831).B && t.isEmptyEditableBlock();
                                case "blockSelection":
                                case "textSelection":
                                    return !1;
                                default:
                                    (0, i(722371).HB)(r)
                            }
                        })(n) && !c && (a = new DOMRect(a.left, a.top, a.width, 0));
                        let s = P.current.getBoundingClientRect(),
                            f = n.context.origin,
                            p = f instanceof i(970831).B && (0, i(955630).iq)(f.getType() ? ? "text");
                        if (p) {
                            let t = (0, i(512342).LB)({
                                origin: n.context.origin
                            });
                            t && (e = t.left - s.left)
                        }
                        let w = function(e) {
                            let t, {
                                    originRect: r,
                                    scrollerRect: n,
                                    scrollerScrollTop: o,
                                    popupRect: a,
                                    positionAbove: l = !1,
                                    isTableOrigin: s = !1,
                                    tableBlockLeft: u
                                } = e,
                                c = (null == a ? void 0 : a.width) ? ? 0,
                                d = (null == a ? void 0 : a.height) ? ? 0,
                                f = Math.min(Math.max(n.width > v + g.left + g.right && (s || r.width < h) ? v : r.width, m), v, n.width - g.left - g.right);
                            return {
                                top: t = l ? Math.max(t = r.top - n.top + o - (d || 200) - g.bottom, g.top) : r.bottom - n.top + o + g.top,
                                left: c + g.left + g.right > n.width ? g.left : s && void 0 !== u ? u + f > n.width - g.right ? Math.max(g.left, n.width - f - g.right) : u : r.left + c > n.right ? n.width - c - g.right : (0, i(619157).A1)() ? n.right - r.left - c : r.left - n.left,
                                width: f
                            }
                        }({
                            originRect: a,
                            scrollerRect: s,
                            scrollerScrollTop: P.current.scrollTop,
                            popupRect: y,
                            positionAbove: c,
                            isTableOrigin: p,
                            tableBlockLeft: e
                        });
                        return I.current = w, w
                    }, [k, P, y, l, u, c, d, B]),
                    j = S(t),
                    _ = (0, i(722371).O9)(T);
                (0, r.useEffect)(() => {
                    if (j && _ && w.current) switch (j) {
                        case "Page":
                            {
                                let e = new IntersectionObserver(e => {
                                    let [t] = e;
                                    t.isIntersecting ? i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPage: !0
                                    }) : i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPage: {
                                            direction: t.boundingClientRect.top < 0 ? "above" : "below",
                                            writerRef: w
                                        }
                                    })
                                }, {
                                    root: P.current,
                                    threshold: 0
                                });
                                return e.observe(w.current),
                                () => {
                                    e.disconnect(), i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPage: !1
                                    })
                                }
                            }
                        case "PeekView":
                            {
                                let e = new IntersectionObserver(e => {
                                    let [t] = e;
                                    t.isIntersecting ? i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPeekView: !0
                                    }) : i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPeekView: {
                                            direction: t.boundingClientRect.top < 0 ? "above" : "below",
                                            writerRef: w
                                        }
                                    })
                                }, {
                                    root: P.current,
                                    threshold: 0
                                });
                                return e.observe(w.current),
                                () => {
                                    e.disconnect(), i(984583).ZJ.setState({ ...i(984583).ZJ.state,
                                        popupRenderedInPeekView: !1
                                    })
                                }
                            }
                    }
                }, [j, _, P]), (0, r.useEffect)(() => {
                    let e;
                    if (!w.current) throw Error("ref.current is null");
                    let t = new(i(864844)).E;
                    return t.rect.addListener(t => {
                        (0, i(722371).O9)(e) && cancelAnimationFrame(e), e = requestAnimationFrame(() => b(t.state))
                    }), t.observe(w.current), () => {
                        (0, i(722371).O9)(e) && cancelAnimationFrame(e), t.destroy()
                    }
                }, []);
                let N = (0, r.useMemo)(() => "assistantCompletionPopup" === l.type ? "results" === l.stage && l.loading : "agentCompletionPopup" === l.type ? "executing" === l.stage : void(0, i(722371).HB)(l), [l]),
                    {
                        isPhone: W
                    } = (0, i(533992).Y0)(),
                    E = (0, i(533992).v3)(),
                    D = (0, i(682985).K8)(() => !W && i(886556).z.disableWriterAutoFollow(), [W]),
                    O = (0, i(730994).B2)({
                        scrollerRef: P,
                        areWeLoading: N,
                        unpauseAfterMs: 5e3
                    });
                (0, r.useEffect)(() => {
                    null != T && T.top && !N && w.current && !D && f(w.current, E, {
                        behavior: "smooth",
                        block: "nearest"
                    })
                }, [null == T ? void 0 : T.top, N, D, E]), (0, r.useEffect)(() => {
                    if (!A.current || !P.current || !N || O || D) return;
                    let e = new IntersectionObserver(e => {
                        var t;
                        (null == (t = e.at(0)) ? void 0 : t.isIntersecting) || !w.current || (0, i(567957).R)({
                            element: w.current,
                            environment: E,
                            options: {
                                behavior: "smooth",
                                block: "end"
                            }
                        })
                    }, {
                        root: P.current,
                        threshold: 1
                    });
                    return e.observe(A.current), () => {
                        e.disconnect()
                    }
                }, [P, N, O, D, E]);
                let V = (0, r.useMemo)(() => "assistantCompletionPopup" === l.type ? "results" === l.stage && !l.loading : "agentCompletionPopup" === l.type ? "results" === l.stage : void(0, i(722371).HB)(l), [l]);
                (0, r.useEffect)(() => {
                    if (V && !D) {
                        f.cancel();
                        let e = setTimeout(() => {
                            w.current && (0, i(567957).R)({
                                element: w.current,
                                environment: E,
                                options: {
                                    behavior: "smooth",
                                    block: w.current.getBoundingClientRect().height > window.innerHeight ? "end" : "nearest"
                                }
                            })
                        }, 150);
                        return () => clearTimeout(e)
                    }
                }, [V, D, E]), (0, r.useEffect)(() => {
                    O && f.cancel()
                }, [O]), (0, r.useEffect)(() => {
                    c && !x.current && w.current && (x.current = !0, p(w.current, E, {
                        behavior: "smooth",
                        block: "nearest"
                    }))
                }, [c, E]);
                let K = (0, i(960253).I)(() => ({
                        wrap: {
                            position: "absolute",
                            width: null == T ? void 0 : T.width,
                            zIndex: 113,
                            top: 0,
                            insetInlineStart: 0,
                            transform: `translate(${((0,i(619157).A1)()?-1:1)*((null==T?void 0:T.left)??0)}px, ${(null==T?void 0:T.top)??0}px)`,
                            transition: "transform 0.1s",
                            scrollMarginTop: N && !D ? .33 * window.innerHeight : 50,
                            scrollMarginBottom: N ? .33 * window.innerHeight : 50
                        }
                    }), [T, N, D]),
                    J = (0, i(463846).A)(!0);
                return (0, n.jsx)(i(519451).A, {
                    debugName: "PopupPositioner",
                    capture: !0,
                    allowMenuList: !0,
                    allowEsc: !0,
                    children: (0, n.jsxs)("div", {
                        style: K.wrap,
                        ref: w,
                        ...J,
                        children: [T ? s : void 0, (0, n.jsx)("div", {
                            ref: A,
                            style: a
                        })]
                    })
                })
            }
            let s = {
                button: {
                    cursor: "pointer",
                    backgroundColor: "black",
                    background: i(632079).Tj.background.accentPrimary,
                    color: i(632079).Tj.text.inversePrimary,
                    borderRadius: 36,
                    height: 36,
                    padding: 4,
                    paddingInlineEnd: 10,
                    boxShadow: i(632079).Tj.shadow.outline.lg,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                }
            };

            function u(e) {
                let {
                    returnToWriterDetails: t
                } = e, o = (0, i(739726).L)(), a = (0, i(533992).v3)(), l = (0, r.useCallback)(e => {
                    t.writerRef.current && (e.stopPropagation(), e.preventDefault(), p(t.writerRef.current, a, {
                        behavior: "smooth",
                        block: "nearest"
                    }))
                }, [t.writerRef, a]), u = (0, r.useCallback)(e => {
                    e.stopPropagation(), e.preventDefault()
                }, []), c = (0, i(960253).I)(() => ({
                    container: {
                        position: "absolute",
                        display: "grid",
                        placeItems: "center",
                        insetInlineStart: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1e6,
                        bottom: o
                    }
                }), [o]), d = (0, r.useMemo)(() => {
                    switch (t.direction) {
                        case "above":
                            return (0, n.jsx)(i(16275).I, {
                                icon: i(334659).arrowStraightUpFillIcon
                            });
                        case "below":
                            return (0, n.jsx)(i(16275).I, {
                                icon: i(996696).arrowStraightDownFillIcon
                            });
                        default:
                            (0, i(722371).HB)(t.direction)
                    }
                }, [t.direction]), f = (0, r.useMemo)(() => {
                    switch (t.direction) {
                        case "above":
                        case "below":
                            return {
                                transition: {
                                    duration: .2,
                                    ease: "easeOut"
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                initial: {
                                    opacity: 0
                                }
                            };
                        default:
                            (0, i(722371).HB)(t.direction)
                    }
                }, [t.direction]), {
                    value: g
                } = (0, i(815048).fJ)(i(448988).fM);
                if (!g) return null;
                let {
                    motion: m
                } = g;
                return (0, n.jsx)("div", {
                    style: c.container,
                    children: (0, n.jsxs)(m.div, {
                        className: i(133121).u,
                        "aria-live": "polite",
                        style: s.button,
                        onClick: l,
                        onMouseDown: u,
                        ...f,
                        children: [(0, n.jsx)(i(971375).x, {
                            variant: "small"
                        }), d]
                    })
                })
            }

            function c(e) {
                let {
                    scrollerKey: t
                } = e, {
                    isPhone: r
                } = (0, i(533992).Y0)(), o = (0, i(682985).K8)(() => !r && i(886556).z.disableWriterAutoFollow(), [r]), a = (0, i(682985).K8)(() => {
                    if (!o || !t) return !1;
                    let e = i(304636).default.state;
                    if ("agentCompletionPopup" === e.type && e.didTransitionFromPeekToFullPage) return !1;
                    switch (t) {
                        case "Page":
                            return i(984583).ZJ.state.popupRenderedInPage;
                        case "PeekView":
                            return i(984583).ZJ.state.popupRenderedInPeekView;
                        default:
                            (0, i(722371).HB)(t)
                    }
                }, [t, o]), {
                    value: l
                } = (0, i(815048).fJ)(i(448988).fM);
                if (!l) return null;
                let {
                    AnimatePresence: s
                } = l;
                return (0, n.jsx)(s, {
                    children: "object" == typeof a ? (0, n.jsx)(u, {
                        returnToWriterDetails: a
                    }) : null
                })
            }
            let d = i(381453).sg((e, t, r) => {
                    if ((0, i(284247).H)({
                            element: t,
                            environment: r,
                            options: {
                                top: e,
                                left: 0,
                                behavior: "smooth"
                            }
                        }), i(862921).A.MenuScroller) {
                        var n;
                        null == (n = i(862921).A.MenuScroller.getNode()) || n.scrollTo({
                            top: 0
                        })
                    }
                }, 60),
                f = i(381453).nF((e, t, r) => {
                    (0, i(567957).R)({
                        element: e,
                        environment: t,
                        options: r
                    })
                }, 200, {
                    leading: !1
                }),
                p = i(381453).sg((e, t, r) => {
                    (0, i(567957).R)({
                        element: e,
                        environment: t,
                        options: r
                    })
                }, 100),
                g = {
                    top: 4,
                    bottom: 6,
                    left: 6,
                    right: 16
                },
                m = 500,
                v = 730,
                h = 600;

            function w(e) {
                var t, r;
                return e === (null == (t = i(862921).A.PageScroller) ? void 0 : t.getStore()) ? i(862921).A.PageScroller : e === (null == (r = i(862921).A.PeekViewScroller) ? void 0 : r.getStore()) ? i(862921).A.PeekViewScroller : void 0
            }

            function S(e) {
                var t, r;
                return e === (null == (t = i(862921).A.PageScroller) ? void 0 : t.getStore()) ? "Page" : e === (null == (r = i(862921).A.PeekViewScroller) ? void 0 : r.getStore()) ? "PeekView" : void 0
            }
        },
        879964: (e, t, i) => {
            i.r(t), i.d(t, {
                CompletionPopup: () => B,
                GtmFavoriteButtons: () => W,
                PopupPositionerLocater: () => R().X_,
                aiAnalyticsActions: () => d(),
                aiQnaActions: () => x(),
                completionActions: () => a(),
                completionInitialPromptActions: () => l(),
                favoriteImportActions: () => n,
                propertyCompletionsActions: () => o()
            });
            var r, n = {};
            i.r(n), i.d(n, {
                importGtmFavorite: () => y
            });
            var o = () => i(447281),
                a = () => i(9774),
                l = () => i(661044),
                s = i(296540),
                u = () => i(436555),
                c = () => i(109939),
                d = () => i(942806),
                f = i(474848);
            let p = {
                title: {
                    fontWeight: i(699422).Wy.bold,
                    marginBottom: "1em"
                },
                prompt: {
                    color: i(632079).Tj.text.tertiary,
                    maxHeight: "5em",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    whiteSpace: "pre-wrap"
                }
            };

            function g(e) {
                let {
                    favorite: t,
                    isReplacingFavorite: i
                } = e, r = i ? (0, f.jsx)(c().sA, {
                    defaultMessage: "Overwrite “{favoriteName}” AI action?",
                    id: "ai.favoriteActions.importFavorite.overwriteMessage",
                    values: {
                        favoriteName: t.name
                    }
                }) : (0, f.jsx)(c().sA, {
                    defaultMessage: "Add “{favoriteName}” AI action?",
                    id: "ai.favoriteActions.importFavorite.addMessage",
                    values: {
                        favoriteName: t.name
                    }
                }), n = (0, f.jsx)(c().sA, {
                    defaultMessage: "“{favoritePrompt}”",
                    id: "ai.favoriteActions.importFavorite.prompt",
                    values: {
                        favoritePrompt: t.action.prompt
                    }
                });
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)("div", {
                        style: p.title,
                        children: r
                    }), (0, f.jsx)("div", {
                        style: p.prompt,
                        children: n
                    })]
                })
            }
            let m = ((r = {})[r.NoConfig = 100] = "NoConfig", r[r.LoadPageChunkFailed = 101] = "LoadPageChunkFailed", r[r.MissingPageRecord = 103] = "MissingPageRecord", r[r.InvalidPageParent = 104] = "InvalidPageParent", r[r.MissingTitle = 105] = "MissingTitle", r[r.MissingPromptText = 106] = "MissingPromptText", r[r.MissingCollectionSchema = 107] = "MissingCollectionSchema", r[r.MissingPromptType = 108] = "MissingPromptType", r[r.InvalidPromptType = 109] = "InvalidPromptType", r[r.FavoritesDisabled = 110] = "FavoritesDisabled", r);

            function v() {
                {
                    let e = i(218744).default.getConfigKey("gtm_ai_favorites", "space_id"),
                        t = i(218744).default.getConfigKey("gtm_ai_favorites", "collection_id");
                    if (e && t) return {
                        spaceId: e,
                        collectionId: t
                    }
                }
            }

            function h(e, t, r) {
                let n = function(e, t, i) {
                    for (let n in e) {
                        let o = e[n];
                        if (o && o.name === i) {
                            var r;
                            return null == (r = t.properties) ? void 0 : r[n]
                        }
                    }
                }(e, t, r);
                if (n) return (0, i(247438).k4p)(n)
            }

            function w(e) {
                return {
                    type: "error",
                    code: e
                }
            }
            async function S(e) {
                let {
                    environment: t,
                    recordMap: i,
                    blockId: r,
                    spaceId: n,
                    collectionId: o
                } = e, a = i.getValue({
                    table: "collection",
                    id: o,
                    spaceId: n
                });
                if (null != a && a.schema) return a.schema;
                let l = await t.api.callCellCompatibleApi({
                    eventName: "getPublicPageData",
                    environment: t,
                    data: {
                        type: "block-space",
                        blockId: r,
                        spaceId: n
                    },
                    cellNavigation: {
                        spaceId: n,
                        recordId: r,
                        verifyShortSpaceIdVersion: !0
                    }
                });
                if ("failed" !== l.type) return l.data.collectionSchema
            }
            async function A(e) {
                var t;
                let {
                    environment: r,
                    blockId: n
                } = e;
                await i(218744).default.waitUntilStatsigReadyAsync();
                let o = v();
                if (!o) return w(m.NoConfig);
                let {
                    spaceId: a,
                    collectionId: l
                } = o, s = (0, i(115118).WS)({
                    spaceId: a,
                    recordId: n
                }), u = await r.api.callApi({
                    eventName: "loadCachedPageChunkV2",
                    environment: r,
                    data: {
                        page: {
                            spaceId: a,
                            id: n
                        },
                        cursor: {
                            stack: []
                        },
                        verticalColumns: !1
                    },
                    headers: s,
                    throwOnError: !1
                });
                if ("success" !== u.type) return w(m.LoadPageChunkFailed);
                let c = i(412951).RecordMapWithRole.create(u.data.recordMap),
                    d = c.getValue({
                        table: "block",
                        id: n,
                        spaceId: a
                    });
                if (!d) return w(m.MissingPageRecord);
                if (d.parent_id !== l) return w(m.InvalidPageParent);
                let f = (0, i(247438).k4p)(null == (t = d.properties) ? void 0 : t.title);
                if (!f) return w(m.MissingTitle);
                let p = await S({
                    environment: r,
                    recordMap: c,
                    blockId: n,
                    spaceId: a,
                    collectionId: l
                });
                if (!p) return w(m.MissingCollectionSchema);
                let g = h(p, d, "Prompt text");
                if (!g) return w(m.MissingPromptText);
                let A = h(p, d, "Prompt type");
                if (!A) return w(m.MissingPromptType);
                let y = "Help me edit" === A ? "helpMeEdit" : "Help me write" === A ? "helpMeWrite" : void 0;
                if (!y) return w(m.InvalidPromptType);
                let b = "Yes" === h(p, d, "Run immediately");
                return {
                    type: "success",
                    favorite: {
                        id: i(92513).JW(),
                        name: f,
                        executeImmediately: b,
                        gtmFavoriteId: n,
                        action: {
                            type: y,
                            prompt: g,
                            promptTitle: void 0
                        }
                    }
                }
            }
            async function y(e) {
                let {
                    environment: t
                } = e, i = await A({
                    environment: t,
                    blockId: e.importArgs.blockId
                });
                "error" === i.type ? u().D6({
                    label: (0, f.jsx)(c().sA, {
                        defaultMessage: "An error occurred when loading the AI action. ({errorCode})",
                        id: "ai.favoriteActions.importFavorite.favoriteFailedToLoad",
                        values: {
                            errorCode: i.code
                        }
                    })
                }) : await b({
                    environment: t,
                    newFavorite: i.favorite
                })
            }
            async function b(e) {
                let {
                    environment: t,
                    newFavorite: r
                } = e, n = i(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                let o = (0, i(95405).IQ)(n),
                    a = (0, f.jsx)(c().sA, {
                        defaultMessage: "Add AI action",
                        id: "ai.favoriteActions.importFavorite.addAction"
                    }),
                    l = (0, f.jsx)(c().sA, {
                        defaultMessage: "Cancel",
                        id: "ai.favoriteActions.importFavorite.cancelAction"
                    }),
                    s = (0, f.jsx)(c().sA, {
                        defaultMessage: "“{favoriteName}” AI action added to your Favorites.",
                        id: "ai.favoriteActions.importFavorite.favoriteAdded",
                        values: {
                            favoriteName: r.name
                        }
                    }),
                    p = !1;
                for (let e of o)
                    if (e.name === r.name) {
                        if (e.action.type === r.action.type && e.action.prompt === r.action.prompt) return void u().D6({
                            label: (0, f.jsx)(c().sA, {
                                defaultMessage: "“{favoriteName}” AI action is already in your Favorites.",
                                id: "ai.favoriteActions.importFavorite.alreadyInFavorites",
                                values: {
                                    favoriteName: r.name
                                }
                            })
                        });
                        r.id = e.id, p = !0, a = (0, f.jsx)(c().sA, {
                            defaultMessage: "Overwrite existing AI action",
                            id: "ai.favoriteActions.importFavorite.overwriteAction"
                        }), l = (0, f.jsx)(c().sA, {
                            defaultMessage: "Keep existing AI action",
                            id: "ai.favoriteActions.importFavorite.keepExistingAction"
                        }), s = (0, f.jsx)(c().sA, {
                            defaultMessage: "“{favoriteName}” AI action updated in your Favorites.",
                            id: "ai.favoriteActions.importFavorite.favoriteUpdated",
                            values: {
                                favoriteName: r.name
                            }
                        });
                        break
                    }
                let {
                    accept: m
                } = await i(647095).Gh({
                    message: (0, f.jsx)(g, {
                        favorite: r,
                        isReplacingFavorite: p
                    }),
                    acceptLabel: a,
                    cancelLabel: l
                });
                m && ((0, i(377796).createAndCommit)({
                    userAction: "favoriteActions.handleFavoriteImport",
                    environment: t,
                    cellTarget: "main",
                    canUndo: !0,
                    perform(e) {
                        (0, i(95405).I4)(r, n, e)
                    }
                }), u().D6({
                    label: s
                }), d().trackAIFavoriteAction(t, {
                    type: "create_from_url",
                    session_id: void 0,
                    gtm_favorite_id: r.gtmFavoriteId
                }))
            }
            var x = () => i(166672);
            let I = new(i(815048)).O2("agentWriter", () => Promise.all([i.e(75134), i.e(9773), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(11082), i.e(29151), i.e(29002), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(87971), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(56308), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(55067), i.e(83490), i.e(58360), i.e(33162), i.e(63793), i.e(18881), i.e(12690), i.e(62731), i.e(68583), i.e(41049), i.e(72805), i.e(18416), i.e(35602), i.e(90735), i.e(12024), i.e(30532), i.e(69684), i.e(81603), i.e(49297), i.e(3723), i.e(78288), i.e(68719), i.e(40716), i.e(55755), i.e(19812), i.e(18378), i.e(95969), i.e(48328), i.e(56703), i.e(63821), i.e(72933), i.e(5406), i.e(85129), i.e(7912), i.e(48617), i.e(539)]).then(i.bind(i, 217510))),
                P = (0, i(815048)._h)(I, e => e.AgentWriterPopup);
            var k = () => i(683499);
            let M = new(i(815048)).O2("assistantWriter", () => Promise.all([i.e(75134), i.e(9773), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(18965), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(64696), i.e(26997), i.e(73259), i.e(93430), i.e(88268), i.e(42534), i.e(86662), i.e(6212), i.e(28482), i.e(14369), i.e(75136), i.e(98175), i.e(78984)]).then(i.bind(i, 521549))),
                C = (0, i(815048)._h)(M, e => e.AssistantWriterPopup);
            i(16280);
            var R = () => i(835043);

            function F(e) {
                let {
                    children: t,
                    scrollerStore: r,
                    openState: n,
                    flushWithBottom: o
                } = e, [a, l] = (0, s.useState)(Date.now()), u = (0, s.useRef)(null), [c, d] = (0, s.useState)(void 0), p = (0, s.useCallback)(() => l(Date.now()), []);
                (0, s.useEffect)(() => {
                    let e = new(i(864844)).E,
                        t = u.current;
                    if (!t) throw Error("ref.current is null");
                    e.observe(t);
                    let r = t.getBoundingClientRect().top;
                    e.rect.addListener(e => {
                        r = e.state.top, d(e.state)
                    });
                    let n = setInterval(() => {
                        let i = t.getBoundingClientRect().top;
                        i !== r && (r = i, e.recompute())
                    }, 50);
                    return () => {
                        e.destroy(), clearInterval(n)
                    }
                }, []);
                let g = "results" === n.stage && !n.loading,
                    m = ("results" === n.stage || "initialPrompt" === n.stage) && "cursor" === n.context.type,
                    v = (0, i(682985).K8)(() => {
                        let e = (0, i(730994).Q9)(n);
                        if (!e) return;
                        let t = (0, i(512342).LB)(e);
                        if (!t || !c) return;
                        let r = t.bottom - c.top;
                        if (r > 0) return r
                    }, [n, c]),
                    h = (0, i(533992).v3)();
                (0, s.useEffect)(() => {
                    if (Date.now() - a > 500 || !v) return;
                    let e = (0, R().lB)(r);
                    e && (0, R().Uj)(v, e.getNode(), h)
                }, [v, r, a, h]), (0, s.useEffect)(() => {
                    g && m && p()
                }, [g, m, p]);
                let w = "results" === n.stage && n.loading,
                    S = (0, i(668745).ZC)(w),
                    [A, y] = (0, s.useState)();
                (0, s.useEffect)(() => {
                    S && !w && y(Date.now())
                }, [w, S]), (0, s.useEffect)(() => {
                    let e = !!A && Date.now() - A < 1e3;
                    (w || e) && m && v && p()
                }, [m, w, p, v, A]);
                let b = (0, i(905189).o)();
                return (0, f.jsx)("div", {
                    ref: u,
                    style: {
                        position: "absolute",
                        bottom: b + (o ? 0 : R().jS.bottom),
                        insetInlineStart: o ? 0 : R().jS.left,
                        insetInlineEnd: o ? 0 : R().jS.left,
                        zIndex: 99
                    },
                    children: t
                })
            }

            function B(e) {
                let {
                    scrollerStore: t
                } = e, r = (0, i(682985).O$)(i(304636).default), n = (0, s.useMemo)(() => (0, i(730994).SB)(r), [r]), o = (0, i(682985).K8)(() => n && (0, i(730994).Q9)(n), [n]), a = (0, i(682985).K8)(() => !!n && "agentCompletionPopup" === n.type && function(e) {
                    if (!e || "agentCompletionPopup" !== e.type || "executing" !== e.stage) return !1;
                    let t = e.threadStore;
                    if (!t) return !0;
                    let i = t.getTranscript();
                    return !(0, k().fY)(i)
                }(n), [n]), l = (0, i(682985).K8)(() => n && "agentCompletionPopup" === n.type ? function(e) {
                    let t = {
                        shouldPositionAbove: !1,
                        firstAffectedBlockId: void 0
                    };
                    if (!e || "agentCompletionPopup" !== e.type || "initialPrompt" === e.stage) return t;
                    let i = e.threadStore;
                    if (!i) return t;
                    let r = function(e) {
                        for (let i = 0; i < e.length; i += 1) {
                            var t;
                            let r = e[i];
                            if ("agent-tool-result" !== r.type || !(0, k().BJ)(r)) continue;
                            let n = r.state ? ? (r.done ? "applied" : void 0),
                                o = !!(null == (t = r.warnings) ? void 0 : t.length),
                                a = void 0 !== r.result && "autoFixInProgress" in r.result && !0 === r.result.autoFixInProgress;
                            if ("applied" === n && !r.error && !o && !a) return {
                                step: r,
                                index: i
                            }
                        }
                    }(i.getTranscript());
                    return r ? {
                        shouldPositionAbove: !0,
                        firstAffectedBlockId: function(e) {
                            let t, {
                                    step: i
                                } = e,
                                r = T.get(i);
                            if (r) return r;
                            if (!(0, k().BJ)(i)) return;
                            let n = i.result;
                            if (!n) return;
                            let o = n.threadDiff;
                            if (!o || !o.diffs || 0 === o.diffs.length) return;
                            if (1 === o.diffs.length) {
                                let e = o.diffs[0].pointer.id;
                                return T.set(i, e), e
                            }
                            let a = 1 / 0;
                            for (let e of o.diffs) {
                                let i = e.pointer.id,
                                    r = document.querySelector(`[data-block-id="${i}"]`);
                                if (r) {
                                    let e = r.getBoundingClientRect();
                                    e.top < a && (a = e.top, t = i)
                                }
                            }
                            let l = t ? ? o.diffs[0].pointer.id;
                            return T.set(i, l), l
                        }(r)
                    } : t
                }(n) : {
                    shouldPositionAbove: !1,
                    firstAffectedBlockId: void 0
                }, [n]), u = (0, i(533992).WS)();
                if (!n || t !== (null == o ? void 0 : o.scrollerStore)) return null;
                if ("assistantCompletionPopup" === n.type)
                    if (u) return (0, f.jsx)(F, {
                        scrollerStore: t,
                        openState: n,
                        flushWithBottom: !0,
                        children: (0, f.jsx)(C, {
                            completionState: n
                        })
                    });
                    else return (0, f.jsx)(R().x0, {
                        scrollerStore: t,
                        openState: n,
                        children: (0, f.jsx)(C, {
                            completionState: n
                        })
                    });
                if ("agentCompletionPopup" === n.type) return (0, f.jsx)(R().x0, {
                    scrollerStore: t,
                    openState: n,
                    freezePosition: a,
                    positionAbove: l.shouldPositionAbove,
                    anchorBlockId: l.firstAffectedBlockId,
                    children: (0, f.jsx)(P, {
                        completionState: n
                    })
                });
                (0, i(722371).HB)(n)
            }
            let T = new WeakMap,
                j = (0, c().YK)({
                    linkCopied: {
                        defaultMessage: "Link copied. Share it with others who may find this useful.",
                        id: "ai.gtmFavoriteActions.linkCopied"
                    },
                    share: {
                        defaultMessage: "Share as AI favorite",
                        id: "ai.gtmFavoriteActions.share"
                    },
                    add: {
                        defaultMessage: "Add to AI favorites",
                        id: "ai.gtmFavoriteActions.add"
                    }
                }),
                _ = {
                    marginTop: 12,
                    marginBottom: 12
                },
                N = {
                    marginInlineStart: 12
                };

            function W(e) {
                let {
                    blockId: t,
                    collectionStore: r
                } = e, n = (0, i(533992).v3)(), o = (0, c().tz)(), a = (0, i(682985).K8)(() => {
                    let e = v();
                    return !!e && e.spaceId === r.getSpaceId() && e.collectionId === r.id
                }, [r]), l = (0, s.useCallback)(() => {
                    y({
                        environment: n,
                        importArgs: {
                            name: "aiGtmFavoriteImport",
                            blockId: t
                        }
                    })
                }, [t, n]), u = (0, s.useCallback)(async () => {
                    let e = `${i(986939).A.domainBaseUrl}/ai-gtm/${(0,i(4962).Xw)(t)}`;
                    (await (0, i(969899).jd)())({
                        environment: n,
                        stringValue: e,
                        copiedMessage: j.linkCopied
                    })
                }, [t, n]);
                return a ? (0, f.jsxs)("div", {
                    style: _,
                    children: [(0, f.jsx)(i(548436).A, {
                        size: "lg",
                        onClick: u,
                        iconLeading: i(588739).linkIcon,
                        children: o.formatMessage(j.share)
                    }), n.currentUser.isLoggedIn() ? (0, f.jsx)(i(548436).A, {
                        size: "lg",
                        onClick: l,
                        style: N,
                        iconLeading: i(245102).arrowLineDownIcon,
                        children: o.formatMessage(j.add)
                    }) : void 0]
                }) : null
            }
        },
        971375: (e, t, i) => {
            i.d(t, {
                o: () => o,
                x: () => n
            }), i(296540);
            var r = i(474848);

            function n(e) {
                let {
                    variant: t,
                    imgSource: n,
                    tintColor: a,
                    faceStyle: l,
                    shadowVariant: s = "strong",
                    style: u,
                    ...c
                } = e, d = (0, i(960253).I)(() => {
                    let e = (0, i(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: i(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === s && {
                                boxShadow: e >= 90 ? i(632079).Tj.shadowMDThickerOutline : i(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === s && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? i(632079).Tj.shadowSMThickerOutline : i(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...u
                        }
                    }
                }, [t, s, u]);
                return (0, r.jsx)("div", { ...c,
                    children: (0, r.jsx)("div", {
                        style: d.faceImgWrap,
                        children: (0, r.jsx)(o, {
                            imgSource: n,
                            variant: t,
                            tintColor: a,
                            style: l
                        })
                    })
                })
            }

            function o(e) {
                let {
                    imgSource: t,
                    variant: n,
                    tintColor: o,
                    style: a,
                    alt: l,
                    ...s
                } = e, u = (0, i(445283).N)(n), c = t ? ? i(200424), d = l ? ? "Notion AI face", f = (0, i(960253).I)(() => ({
                    faceImg: {
                        height: u,
                        width: u,
                        transform: "scaleX(var(--direction, 1))",
                        ...a
                    },
                    tintedFace: {
                        height: u,
                        width: u,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: o,
                        WebkitMaskImage: `url(${c})`,
                        maskImage: `url(${c})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...a
                    }
                }), [u, a, o, c]);
                return void 0 !== o ? (0, r.jsx)("div", {
                    style: f.tintedFace,
                    role: "img",
                    "aria-label": d
                }) : (0, r.jsx)("img", { ...s,
                    style: f.faceImg,
                    src: c,
                    alt: d
                })
            }
        },
        996696: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightDownFillIcon: () => n,
                iconDefinition: () => r
            }), i(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 2.12 12.56 15.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.875 2.924c0-.441-.392-.799-.875-.799s-.875.358-.875.799v11.964L5.219 10.98a.875.875 0 0 0-1.239 1.24l5.4 5.4a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 1 0-1.238-1.238l-3.906 3.907z"
                    })
                },
                n = (0, i(104509).wt)("arrowStraightDownFill", r, "fill")
        }
    }
]);