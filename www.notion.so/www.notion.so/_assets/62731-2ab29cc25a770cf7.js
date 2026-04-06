"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [62731], {
        27312: (e, t, n) => {
            n.d(t, {
                v: () => tW
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var i = n(296540),
                o = () => n(832375),
                r = () => n(247438),
                a = () => n(245541);
            class l extends a().R {
                constructor() {
                    super({
                        key: "formula_assistant_visible",
                        namespace: "formula_editor",
                        important: !0,
                        trackingType: "necessary"
                    })
                }
                getIsAssistantVisible() {
                    return this.state ? ? !0
                }
                toggleAssistant() {
                    this.setState(!this.getIsAssistantVisible())
                }
            }
            let s = new l;
            var u = () => n(390768),
                d = () => n(561872);
            let p = n(969475).union([n(969475).object({
                required: {
                    type: n(969475).literal("formula"),
                    formula: n(969475).string()
                },
                optional: {
                    format: n(969475).union([n(969475).literal("number"), n(969475).literal("bar"), n(969475).literal("ring")])
                },
                exact: !0
            }), n(969475).object({
                required: {
                    type: n(969475).literal("chat"),
                    message: n(969475).string()
                },
                optional: {},
                exact: !0
            }), n(969475).object({
                required: {
                    type: n(969475).literal("retry")
                },
                optional: {},
                exact: !0
            })]);

            function c(e) {
                var t;
                let {
                    clipboardActions: i,
                    formulasModule: o,
                    store: r,
                    transaction: a
                } = e, l = i.getFormulaEditorInformation();
                if (!l || !("editing" === n(358377).default.state.mode && (null == (t = (0, n(778758).H)(n(358377).default.state.multiSelection)) ? void 0 : t.selection))) return;
                let s = r.getValue();
                if (!s) return;
                let u = o.textValueToFormulaTokens({
                    formulasModule: o,
                    getRecordModel: r.getRecordModel,
                    textValue: s,
                    featureGates: (0, n(457103).i)(),
                    valueTypes: l.valueTypes,
                    spaceId: l.spaceId
                });
                (0, n(41403).R9)({
                    environment: r.environment,
                    store: r,
                    value: u,
                    transaction: a
                })
            }
            let {
                MAX_RECURSION_DEPTH: m,
                MAX_RECORDS_PER_COLLECTION: y,
                MAX_TOTAL_COLLECTIONS: f
            } = {
                MAX_RECURSION_DEPTH: 3,
                MAX_RECORDS_PER_COLLECTION: 3,
                MAX_TOTAL_COLLECTIONS: 10
            };
            async function g(e) {
                let {
                    collectionModel: t,
                    collectionStore: i,
                    environment: r
                } = e, a = t.getSpaceShardedPointer(), l = await n(955868).mA(r, {
                    source: "assistant",
                    parentRecordStore: i,
                    collectionPointer: a,
                    limit: y
                });
                if (n(300441).Q.isFail(l)) return [];
                let s = l.value.blockIds.slice(0, y),
                    u = [];
                for (let e of s) {
                    let t = i.getRecordModel({
                        table: o().evP,
                        id: e
                    });
                    t && u.push(t)
                }
                return u
            }
            async function h(e) {
                let {
                    environment: t,
                    collectionStore: n,
                    recordMap: i,
                    collectionModel: a,
                    visitedCollections: l,
                    depth: s = 0
                } = e;
                if (s >= m || l.has(a.id) || l.size >= f) return;
                l.add(a.id), i.addModel(a);
                let p = a.getNormalizedSchema(n.getRecordModel),
                    c = [],
                    y = [];
                for (let [e, t] of Object.entries(p))
                    if (t && "relation" === t.type) {
                        let i = (0, u().N)(t);
                        if (!i) continue;
                        let o = n.getRecordModel(i);
                        o && (c.push(e), y.push(o))
                    }
                let x = await g({
                    collectionModel: a,
                    collectionStore: n,
                    environment: t
                });
                for (let e of x) i.addModel(e);
                for (let e of function(e) {
                        let {
                            blockModels: t,
                            collectionSchema: n,
                            collectionStore: i
                        } = e;
                        if (!t || 0 === t.length) return [];
                        let a = [];
                        for (let e of t) {
                            let t = e.getProperties(i.getRecordModel);
                            for (let [e, l] of Object.entries(n))
                                if (l && "person" === l.type && t[e])
                                    for (let n of (0, r().Fbh)(t[e])) {
                                        let e = i.getRecordModel({
                                            table: o().oo9,
                                            id: n
                                        });
                                        e && a.push(e)
                                    }
                        }
                        return a
                    }({
                        blockModels: x,
                        collectionSchema: p,
                        collectionStore: n
                    })) i.addModel(e);
                for (let e of function(e) {
                        let {
                            collectionStore: t,
                            relationPropertyIds: n,
                            blockModels: i
                        } = e, o = [];
                        for (let e of i) {
                            let i = e.getProperties(t.getRecordModel);
                            for (let e of n) {
                                let t = i[e];
                                t && o.push(...(0, d().n)(t))
                            }
                        }
                        return o.map(e => t.getRecordModel(e)).filter(e => void 0 !== e)
                    }({
                        collectionStore: n,
                        relationPropertyIds: c,
                        blockModels: x
                    })) i.addModel(e);
                for (let e of y) {
                    if (l.size >= f) break;
                    await h({
                        environment: t,
                        collectionStore: n,
                        recordMap: i,
                        collectionModel: e,
                        visitedCollections: l,
                        depth: s + 1
                    })
                }
            }
            async function x(e) {
                let t, {
                        environment: i,
                        spaceId: r,
                        userPrompt: a,
                        formulaErrors: l,
                        existingFormula: s,
                        typecheckContext: u,
                        formulaResult: d,
                        returnType: p
                    } = e,
                    c = n(412951).RecordMap.create(),
                    m = {
                        formula_null_check: u.featureGates.formula_null_check ? ? !1,
                        formula_dependency_limits: !1,
                        formula_compiler_diff_rate: 0,
                        formulas_disabled_functions: u.featureGates.formulas_disabled_functions ? ? [],
                        collections_text_sort_locale_collator: u.featureGates.collections_text_sort_locale_collator ? ? !1,
                        edge_relations: u.featureGates.edge_relations ? ? !1,
                        edge_rollups: u.featureGates.edge_rollups ? ? !1,
                        edge_formulas: u.featureGates.edge_formulas ? ? !1,
                        formulas_pass_timezone_when_parsing_date: u.featureGates.formulas_pass_timezone_when_parsing_date ? ? !1,
                        formulas_block_unsafe_regex: u.featureGates.formulas_block_unsafe_regex ? ? !1,
                        rollup_empty_value_filter: u.featureGates.rollup_empty_value_filter ? ? !1,
                        log_collection_dep_permission_stats: !1,
                        formula_total_dependency_limit: 1e6,
                        formula_per_formula_dependency_limit: 1e5,
                        formula_total_dependency_warning_threshold: 5e5,
                        formula_per_formula_dependency_warning_threshold: 5e4
                    };
                for (let e of u.valueTypes) "block" === e.type.type && e.type.collection && (t = e.type.collection.id);
                if (t) {
                    let e = {
                            table: o().VlP,
                            id: t,
                            spaceId: r
                        },
                        a = new(n(210952)).y(i, e),
                        l = a.getModel();
                    l && await h({
                        environment: i,
                        collectionStore: a,
                        recordMap: c,
                        collectionModel: l,
                        visitedCollections: new Set,
                        depth: 0
                    })
                }
                return [{
                    id: (0, n(295447).Z1)({
                        environment: i,
                        table: o().mSw,
                        spaceId: r
                    }),
                    type: "config",
                    value: {
                        type: "formulas",
                        formulaErrors: l,
                        existingFormula: s,
                        valueTypes: u.valueTypes,
                        sourceProperty: u.sourceProperty,
                        collectionFeatureGates: m,
                        formulaResult: d,
                        returnType: p,
                        collectionId: t
                    }
                }, {
                    id: (0, n(295447).Z1)({
                        environment: i,
                        table: o().mSw,
                        spaceId: r
                    }),
                    type: "agent-record-map",
                    threadRecordMap: (0, n(897011).he)(c)
                }, {
                    id: (0, n(295447).Z1)({
                        environment: i,
                        table: o().mSw,
                        spaceId: r
                    }),
                    type: "user",
                    value: [
                        [a]
                    ],
                    userId: i.currentUser.id ? ? ""
                }]
            }
            async function b(e) {
                let {
                    environment: t,
                    spaceId: i,
                    getRecordModel: r,
                    userPrompt: a,
                    formulaErrors: l,
                    typecheckContext: s,
                    handleFormulaStream: u,
                    formulaAssistantStore: d,
                    abortSignal: c,
                    existingFormulaTextValue: m,
                    intl: y,
                    formulaResult: f,
                    returnType: g
                } = e, h = (0, n(295447).Z1)({
                    environment: t,
                    table: o().mSw,
                    spaceId: i
                });
                d.startGeneratingState("thinking");
                let b = (0, n(458230).r4)({
                        textValue: m,
                        intl: y,
                        getRecordModel: r,
                        userTimeZone: (0, n(714350).P)(),
                        valueTypes: s.valueTypes
                    }),
                    v = await x({
                        environment: t,
                        spaceId: i,
                        userPrompt: a,
                        formulaErrors: l,
                        existingFormula: b,
                        typecheckContext: s,
                        formulaResult: f,
                        returnType: g
                    });
                if (!v) return d.setError(), {
                    type: "error",
                    traceId: h
                };
                let k = !1,
                    T = "",
                    I = "",
                    C = 0;
                return (await (0, n(621347).g)({
                    environment: t,
                    data: {
                        generateTitle: !1,
                        traceId: h,
                        transcript: v,
                        spaceId: i,
                        isUserInAnySalesAssistedSpace: (0, n(598132).h0)(t),
                        isSpaceSalesAssisted: (0, n(598132).lM)(t, i)
                    },
                    onResponse: e => {
                        if ("generate-formula" !== e.type) return;
                        let t = (0, n(627179).$l)(e.value);
                        if (!(0, n(358519).Xj)(p, t)) return;
                        if (d.state.latestTraceId !== h && d.setTraceId(h), "retry" === t.type) {
                            b = T, d.updateGeneratingState("reading-errors"), k = !0, C += 1;
                            return
                        }
                        if ("chat" === t.type ? (d.setRefusalMessage(t.message), I = t.message) : "formula" === t.type && (T = t.formula), b.startsWith(T)) return;
                        let i = d.state;
                        "generating" !== i.type || "writing" === i.generatingStep || k || (d.updateGeneratingState("writing"), d.setFormulaBeforeLatestRequest(m)), "generating" === i.type && "fixing" !== i.generatingStep && k && d.updateGeneratingState("fixing"), u(T)
                    },
                    abortSignal: c
                }), null != c && c.aborted) ? {
                    type: "aborted",
                    traceId: h
                } : (T.length > 0 && b.includes(T) && u(T), I ? d.setFinalRefusedState(I) : T.length > 0 ? d.resetToInitial() : d.setError(), {
                    type: "success",
                    formula: T,
                    traceId: h,
                    completionType: T ? "formula" : "refusal",
                    retryCount: C
                })
            }

            function v({
                scrollableRef: e,
                environment: t
            }) {
                let [o, r] = (0, i.useState)(!0), [a, l] = (0, i.useState)(!0), s = (0, i.useCallback)(() => {
                    let t = e.current;
                    if (!t) return;
                    let n = t.scrollHeight - t.scrollTop - t.clientHeight < 5;
                    r(n), !n && a && l(!1), n && !a && l(!0)
                }, [e, a]);
                (0, i.useEffect)(() => {
                    let t = e.current;
                    if (!t) return;
                    t.addEventListener("scroll", s);
                    let n = new MutationObserver(() => {
                        s(), a && (t.scrollTop = t.scrollHeight)
                    });
                    return n.observe(t, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    }), s(), () => {
                        t.removeEventListener("scroll", s), n.disconnect()
                    }
                }, [s, e, a]);
                let u = (0, i.useCallback)((i = "smooth") => {
                        let o = e.current;
                        o && (0, n(661767).V)({
                            element: o,
                            environment: t,
                            options: {
                                top: o.scrollHeight,
                                behavior: i
                            }
                        })
                    }, [e, t]),
                    d = (0, i.useCallback)(() => {
                        u(), l(!0)
                    }, [u]);
                return {
                    isScrolledToBottom: o,
                    shouldAutoScroll: a,
                    scrollToBottom: u,
                    scrollToBottomAndSetAutoscroll: d
                }
            }
            var k = n(474848);
            let T = (0, n(109939).YK)({
                    learnMore: {
                        id: "infoBanner.learnMore",
                        defaultMessage: "Learn more"
                    }
                }),
                I = {
                    marginBottom: -12,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: -1
                },
                C = {
                    textWrap: "pretty"
                },
                M = {
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    height: 32,
                    zIndex: -1
                };

            function j(e) {
                let {
                    navigate: t
                } = (0, i.useContext)(n(44894).E), {
                    upsellMessage: o,
                    isInferenceDown: r,
                    upgradeButtonTextProps: a,
                    isUpgradeSystemEnabled: l
                } = e, s = (0, n(533992).v3)(), u = (0, n(109939).tz)(), d = (0, i.useMemo)(() => {
                    if (r) return () => {
                        t({
                            environment: s,
                            url: "https://www.notion-status.com",
                            openInNew: "tab"
                        })
                    }
                }, [r, s, t]), p = (0, i.useMemo)(() => r ? (0, k.jsx)(n(109939).sA, { ...n(352120).$.cannotSubmitMessageSeeStatusPage
                }) : l ? a ? (0, k.jsx)(n(754951).UpgradeButton, { ...a
                }) : null : o, [r, o, l, a]), c = !!(l ? a : o) || r, m = (0, n(960253).I)(() => ({
                    inlineError: {
                        backgroundColor: r ? n(632079).Tj.red.background.primary : n(632079).Tj.background.secondary,
                        color: r ? n(632079).Tj.red.text.primary : n(632079).Tj.text.secondary,
                        fontWeight: n(699422).Wy.medium,
                        borderStartStartRadius: 10,
                        borderStartEndRadius: 10,
                        borderEndEndRadius: 0,
                        borderEndStartRadius: 0,
                        paddingTop: 8,
                        paddingInlineEnd: 16,
                        paddingBottom: 18,
                        paddingInlineStart: 16,
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        width: "100%",
                        border: "none",
                        justifyContent: "space-between",
                        position: "relative",
                        overflow: "hidden"
                    },
                    warningIcon: {
                        fill: r ? n(632079).Tj.red.text.primary : n(632079).Tj.text.secondary
                    },
                    learnMoreIcon: {
                        fill: r ? n(632079).Tj.red.text.primary : n(632079).Tj.text.secondary
                    }
                }), [r]), y = (0, i.useMemo)(() => ({
                    visible: c,
                    initial: {
                        opacity: 0,
                        translateY: 40
                    },
                    animate: {
                        opacity: +!!c,
                        translateY: 40 * !c
                    },
                    exit: {
                        opacity: 0,
                        translateY: 40
                    },
                    config: {
                        duration: 300
                    }
                }), [c]);
                return (0, k.jsx)(n(654979).A, {
                    visible: y.visible,
                    initial: y.initial,
                    animate: y.animate,
                    exit: y.exit,
                    config: y.config,
                    children: (0, k.jsx)("div", {
                        style: I,
                        children: (0, k.jsxs)("div", {
                            style: m.inlineError,
                            children: [(0, k.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                flex: 1,
                                children: [r ? (0, k.jsx)(n(16275).I, {
                                    icon: n(789777).exclamationMarkTriangleFillIcon,
                                    size: "sm",
                                    style: m.warningIcon
                                }) : null, (0, k.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    flex: 1,
                                    children: [(0, k.jsx)("div", {
                                        style: C,
                                        children: p
                                    }), d ? (0, k.jsx)(n(51831).m, {
                                        content: () => u.formatMessage(T.learnMore),
                                        children: e => (0, k.jsx)(n(374533).A, {
                                            onClick: d,
                                            icon: () => (0, k.jsx)(n(708966).Q, {
                                                iconGroup: n(799472).u,
                                                variantName: "default",
                                                size: "lg",
                                                colorVariant: "secondary",
                                                style: m.learnMoreIcon
                                            }),
                                            ariaLabel: u.formatMessage(T.learnMore),
                                            size: "xs",
                                            ...e
                                        })
                                    }) : void 0]
                                })]
                            }), (0, k.jsx)("div", {
                                style: M
                            })]
                        })
                    })
                })
            }
            async function P(e) {
                return await (0, n(796123).showAsyncModal)(t => (0, k.jsx)(n(833503).s, {
                    isOpen: t.isOpen,
                    onDismiss: t.onDismiss,
                    onClosed: t.onClosed,
                    areaConstraint: {
                        width: {
                            type: "fixed",
                            length: 400
                        }
                    },
                    children: () => (0, k.jsx)(_, {
                        onSubmit: t.resolve,
                        feedbackType: e
                    })
                }))
            }
            let S = (0, n(109939).YK)({
                    feedbackModalTitleThumbsDown: {
                        id: "formulaAssistant.feedbackModal.titleThumbsDown",
                        defaultMessage: "How can we improve this result?"
                    },
                    feedbackModalTitleThumbsUp: {
                        id: "formulaAssistant.feedbackModal.titleThumbsUp",
                        defaultMessage: "What was good about this result?"
                    },
                    feedbackModalDescription: {
                        id: "formulaAssistant.feedbackModal.description",
                        defaultMessage: "Your feedback helps Notion AI improve. Your prompt, formula, relevant database information, and feedback will be shared with Notion."
                    },
                    sendFeedbackButton: {
                        id: "formulaAssistant.sendFeedbackButton",
                        defaultMessage: "Send feedback"
                    },
                    feedbackPlaceholder: {
                        id: "formulaAssistant.feedbackPlaceholder",
                        defaultMessage: "Share your feedback"
                    },
                    submitSuccess: {
                        id: "formulaAssistant.submitSuccess",
                        defaultMessage: "Your feedback has been submitted, thanks!"
                    }
                }),
                w = {
                    padding: "0 24px"
                },
                A = {
                    position: "relative"
                };

            function _(e) {
                let {
                    onSubmit: t,
                    feedbackType: o
                } = e, r = (0, n(109939).tz)(), [a, l] = (0, i.useState)(""), s = (0, i.useCallback)(() => {
                    t({
                        feedback: a,
                        submitted: !0
                    }), n(436555).D6({
                        label: r.formatMessage(S.submitSuccess)
                    })
                }, [a, r, t]);
                return (0, k.jsx)(n(314084).t, {
                    header: (0, k.jsx)(n(582471).Y, {
                        iconAndTitle: (0, k.jsx)("div", {
                            style: w,
                            children: (0, k.jsx)(n(209590).Z, {
                                iconGroup: n(819534).u,
                                title: r.formatMessage("thumbs_up" === o ? S.feedbackModalTitleThumbsUp : S.feedbackModalTitleThumbsDown)
                            })
                        }),
                        description: r.formatMessage(S.feedbackModalDescription)
                    }),
                    footer: (0, k.jsx)(n(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            label: r.formatMessage(S.sendFeedbackButton),
                            onClick: s
                        }]
                    }),
                    children: (0, k.jsx)(n(4458).VP, {
                        padding: 2,
                        className: "autolayout-fill-width",
                        style: A,
                        children: (0, k.jsx)(n(36481).p, {
                            placeholder: r.formatMessage(S.feedbackPlaceholder),
                            textarea: !0,
                            focusAfterAnimation: !0,
                            value: a,
                            onChange: e => l(e.target.value),
                            textareaSubmitOnEnter: !0,
                            onSubmit: e => {
                                e.preventDefault(), e.stopPropagation(), s()
                            }
                        })
                    })
                })
            }
            let E = (0, n(109939).YK)({
                    feedbackSuccess: {
                        id: "formulaInferenceFeedback.success",
                        defaultMessage: "Thank you for your feedback!"
                    }
                }),
                F = {
                    feedbackButtons: {
                        gap: 2,
                        display: "flex",
                        color: n(632079).Tj.icon.secondary
                    },
                    thumbsDownIcon: {
                        transform: "rotate(180deg)"
                    }
                };

            function B(e) {
                let {
                    spaceId: t,
                    traceId: o
                } = e, [r, a] = function(e) {
                    let {
                        traceId: t,
                        spaceId: o
                    } = e ? ? {}, r = (0, n(682985).K8)(() => t ? n(655084).A.state[t] ? ? void 0 : void 0, [t]), a = (0, n(109939).tz)(), l = (0, n(533992).v3)();
                    return [r, (0, i.useCallback)(async e => {
                        if (!t || !o) return;
                        if (void 0 === e) return void n(655084).A.update(e => ({ ...e,
                            [t]: void 0
                        }));
                        let i = "",
                            r = await P(e);
                        r && r.submitted && (i = r.feedback, n(655084).A.update(n => ({ ...n,
                            [t]: e
                        })), n(436555).D6({
                            label: a.formatMessage(E.feedbackSuccess)
                        }), l.api.callApi({
                            eventName: "saveInferenceTranscriptFeedback",
                            environment: l,
                            data: {
                                spaceId: o,
                                type: "formulas",
                                traceId: t,
                                feedbackType: e,
                                userComment: i
                            }
                        }))
                    }, [l, o, t, a])]
                }({
                    spaceId: t,
                    traceId: o
                }), l = (0, n(109939).tz)(), s = (0, i.useCallback)(() => {
                    "thumbs_down" === r ? a(void 0) : a("thumbs_down")
                }, [r, a]), u = (0, i.useCallback)(() => {
                    "thumbs_up" === r ? a(void 0) : a("thumbs_up")
                }, [r, a]);
                return (0, k.jsxs)("div", {
                    style: F.feedbackButtons,
                    children: [(0, k.jsx)(n(374533).A, {
                        icon: "thumbs_up" === r ? n(185655).P : n(770408).s,
                        size: "sm",
                        ariaLabel: l.formatMessage({
                            id: "formula.feedback.thumbsUp",
                            defaultMessage: "This formula is helpful"
                        }),
                        onClick: e => {
                            e.stopPropagation(), u()
                        }
                    }), (0, k.jsx)(n(374533).A, {
                        icon: "thumbs_down" === r ? n(185655).P : n(770408).s,
                        iconStyle: F.thumbsDownIcon,
                        size: "sm",
                        ariaLabel: l.formatMessage({
                            id: "formula.feedback.thumbsDown",
                            defaultMessage: "This formula is not helpful"
                        }),
                        onClick: e => {
                            e.stopPropagation(), s()
                        }
                    })]
                })
            }

            function R(e) {
                let t = (0, n(109939).tz)(),
                    {
                        onSubmit: i,
                        canSend: o
                    } = e,
                    r = (0, n(730994).q2)(),
                    a = (0, n(533992).WS)(),
                    l = t.formatMessage({
                        id: "completions.CompletionMenuActionBar.sendTooltip",
                        defaultMessage: "Send to AI"
                    });
                return (0, k.jsx)(n(51831).m, {
                    content: () => (0, k.jsxs)("div", {
                        children: [l, (0, k.jsx)(n(693592).A, {
                            style: r.keyboardShortcutInverted,
                            name: "enter"
                        })]
                    }),
                    placement: "bottom",
                    children: e => (0, k.jsx)(n(374533).A, {
                        icon: n(682612).arrowInCircleUpFillIcon,
                        onClick: i,
                        colorPalette: o ? "blue" : void 0,
                        colorVariant: o ? "accentPrimary" : "secondary",
                        disabled: !o,
                        iconStyle: {
                            height: a ? n(104509).lD.lg : n(104509).Ev.lg,
                            width: a ? n(104509).lD.lg : n(104509).Ev.lg
                        },
                        ariaLabel: l,
                        style: {
                            pointerEvents: "auto",
                            height: a ? 24 : 20,
                            width: a ? 24 : 20
                        },
                        ...e
                    })
                })
            }

            function D(e) {
                let {
                    assistantState: t,
                    spaceId: i,
                    canSubmit: o,
                    hasModifiedFormula: r,
                    onStop: a,
                    onBack: l,
                    onRevert: s,
                    onSubmit: u
                } = e;
                switch (t.type) {
                    case "input":
                        return (0, k.jsxs)(k.Fragment, {
                            children: [r ? (0, k.jsx)(z, {
                                onUndo: s
                            }) : void 0, t.latestTraceId ? (0, k.jsx)(B, {
                                spaceId: i,
                                traceId: t.latestTraceId
                            }) : void 0, (0, k.jsx)(L, {
                                onSubmit: u,
                                isEnabled: o
                            })]
                        });
                    case "generating":
                        return (0, k.jsx)(V, {
                            onStop: a
                        });
                    case "refused":
                        return t.isGenerating ? (0, k.jsx)(V, {
                            onStop: a
                        }) : (0, k.jsxs)(k.Fragment, {
                            children: [(0, k.jsx)(B, {
                                spaceId: i,
                                traceId: t.latestTraceId
                            }), (0, k.jsx)(K, {
                                onBack: l
                            })]
                        });
                    case "error":
                        return (0, k.jsxs)(k.Fragment, {
                            children: [(0, k.jsx)(B, {
                                spaceId: i,
                                traceId: t.latestTraceId
                            }), (0, k.jsx)(K, {
                                onBack: l
                            })]
                        });
                    default:
                        (0, n(722371).HB)(t)
                }
            }
            let N = {
                lightweightButton: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2px 6px",
                    borderRadius: 6,
                    height: 26
                },
                cancelText: {
                    fontSize: 14,
                    color: n(632079).Tj.text.secondary
                },
                escText: {
                    textTransform: "uppercase",
                    fontWeight: n(699422).Wy.medium,
                    fontSize: 11,
                    marginInlineStart: 6,
                    color: n(632079).Tj.text.tertiary,
                    display: n(986939).A.isMobile ? "none" : "inline",
                    lineHeight: "normal"
                }
            };

            function V(e) {
                let {
                    onStop: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(369064).N, {
                    debugName: "FormulaAssistantInput_CancelButton",
                    capture: !n(986939).A.isMobile,
                    onEsc: t,
                    priority: 1,
                    children: (0, k.jsx)(n(4458).VP, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: (0, k.jsxs)(n(64960).Ay, {
                            style: N.lightweightButton,
                            onClick: t,
                            children: [(0, k.jsx)("span", {
                                style: N.cancelText,
                                children: i.formatMessage(Y.cancelText)
                            }), (0, k.jsx)("span", {
                                style: N.escText,
                                children: i.formatMessage(Y.escText)
                            })]
                        })
                    })
                })
            }

            function L(e) {
                let {
                    isEnabled: t,
                    onSubmit: i
                } = e;
                return (0, k.jsx)(n(4458).VP, {
                    width: 24,
                    height: 24,
                    marginInlineStart: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, k.jsx)(R, {
                        onSubmit: i,
                        canSend: t
                    })
                })
            }
            let H = {
                backButtonStyle: {
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4px 8px",
                    gap: 4,
                    background: n(986939).A.isMobile ? n(632079).Tj.background.primary : "transparent",
                    boxShadow: n(986939).A.isMobile ? `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px` : void 0,
                    border: n(986939).A.isMobile ? `1px solid ${n(632079).Tj.border.primary}` : void 0,
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: n(699422).Wy.medium,
                    lineHeight: "20px",
                    textAlign: "center",
                    color: n(632079).Tj.text.secondary,
                    whiteSpace: "nowrap"
                }
            };

            function K(e) {
                let {
                    onBack: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(369064).N, {
                    debugName: "FormulaAssistantInput_BackButton",
                    capture: !0,
                    onEsc: t,
                    priority: 1,
                    children: (0, k.jsx)(n(51831).m, {
                        content: () => (0, k.jsx)("div", {
                            children: i.formatMessage(Y.backButtonTooltip)
                        }),
                        placement: "bottom",
                        children: e => (0, k.jsx)(n(4458).VP, {
                            height: 24,
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, k.jsx)(n(64960).Ay, {
                                style: H.backButtonStyle,
                                onClick: t,
                                ...e,
                                children: i.formatMessage(Y.backButton)
                            })
                        })
                    })
                })
            }
            let U = {
                width: 24,
                height: 24
            };

            function z(e) {
                let {
                    onUndo: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(374533).A, {
                    colorVariant: "secondary",
                    size: "sm",
                    style: U,
                    onClick: t,
                    ariaLabel: i.formatMessage(Y.undoMessage),
                    icon: n(555326).arrowUTurnUpLeftSmallIcon
                })
            }
            let Y = (0, n(109939).YK)({
                    cancelText: {
                        id: "formulaAssistantInput.cancelText",
                        defaultMessage: "Cancel"
                    },
                    escText: {
                        id: "formulaAssistantInput.escText",
                        defaultMessage: "esc"
                    },
                    backButton: {
                        id: "formulaAssistantInput.backMobile",
                        defaultMessage: "Back"
                    },
                    backButtonTooltip: {
                        id: "formulaAssistantInput.backButtonTooltip",
                        defaultMessage: "Press ESC to go back"
                    },
                    undoMessage: {
                        id: "formulaAssistantInput.undo",
                        defaultMessage: "Undo"
                    }
                }),
                W = 4,
                O = Object.freeze({
                    property: !0
                }),
                $ = {
                    textContainer: {
                        fontSize: 14,
                        lineHeight: "20px",
                        color: n(632079).Tj.text.primary,
                        maxHeight: 180,
                        overflow: "auto",
                        width: "100%"
                    },
                    style0: {
                        cursor: "text"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function G(e) {
                let {
                    assistantState: t,
                    store: o,
                    onSubmit: r,
                    onChange: a,
                    onBlur: l,
                    onFocus: s,
                    onBack: u
                } = e, d = (0, n(109939).tz)(), p = (0, i.useMemo)(() => {
                    let e = {
                            thinking: [J.assistantIsThinking, J.assistantIsPondering, J.assistantIsReasoning],
                            writing: [J.assistantIsWriting, J.assistantIsGenerating],
                            fixing: [J.assistantIsFixing, J.assistantIsRepairing]
                        },
                        t = {
                            thinking: e.thinking[Math.floor(Math.random() * e.thinking.length)],
                            writing: e.writing[Math.floor(Math.random() * e.writing.length)],
                            fixing: e.fixing[Math.floor(Math.random() * e.fixing.length)]
                        };
                    return e => {
                        switch (e) {
                            case "thinking":
                                return t.thinking;
                            case "writing":
                                return t.writing;
                            case "fixing":
                                return t.fixing;
                            case "reading-errors":
                                return J.assistantIsReadingErrors;
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }
                }, []), c = (0, i.useRef)(null), m = (0, n(533992).v3)(), y = (0, n(682985).K8)(() => {
                    var e;
                    let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                    return (null == t || null == (e = t.getSettings()) ? void 0 : e.chat_enter_key_behavior) ? ? "send"
                }, []), f = (0, i.useCallback)(() => {
                    n(374176).default.afterNextFlush(() => {
                        let e = c.current;
                        e && (e.scrollTop = e.scrollHeight)
                    })
                }, []);
                switch (v({
                    scrollableRef: c,
                    environment: m
                }), t.type) {
                    case "input":
                        return (0, k.jsx)("div", {
                            ref: c,
                            style: $.textContainer,
                            children: (0, k.jsx)(n(53373).A, {
                                disabled: !1,
                                pasteBehavior: "plaintext",
                                inPageFind: n(831719).Os.none,
                                store: o,
                                placeholder: d.formatMessage(J.assistantPlaceholder),
                                placeholderStyle: $.style0,
                                enterBehavior: "newline" === y ? "soft-break" : "block-break",
                                disableEnter: !1,
                                onEnter: "send" === y ? r : void 0,
                                onCommandEnter: "newline" === y ? r : void 0,
                                onChange: a,
                                onEsc: l,
                                onBlur: l,
                                onFocus: s,
                                onSoftBreak: f,
                                disableRichTextActions: !0,
                                disableSlashCommands: !0,
                                disableEmbedMenu: !0,
                                disableComment: !0,
                                disableSelectAllBlocks: !0,
                                disableSelectionDrag: !0,
                                disableMobileActionBar: !0,
                                disableInsertedDeletedAnnotations: !0,
                                disableSuggestEdit: !0,
                                disableEmojiCommands: !0,
                                disableStyleAnnotations: !0,
                                disabledMentionTypes: O
                            })
                        });
                    case "generating":
                        return (0, k.jsxs)(k.Fragment, {
                            children: [(0, k.jsx)(n(861510).N, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                animate: !0,
                                text: d.formatMessage(p(t.generatingStep))
                            }), (0, k.jsx)(n(118845).A, {
                                isTriColored: !0
                            })]
                        });
                    case "refused":
                        return (0, k.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            onClick: u,
                            children: t.refusalMessage
                        });
                    case "error":
                        return (0, k.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "secondary",
                            onClick: u,
                            children: d.formatMessage(J.genericErrorMessage)
                        });
                    default:
                        (0, n(722371).HB)(t)
                }
            }

            function q(e) {
                let {
                    isLoading: t
                } = e;
                return t ? (0, k.jsx)(ee, {}) : (0, k.jsx)(Z, { ...e
                })
            }
            let Q = {
                outerContainer: {
                    boxSizing: "border-box",
                    width: "100%",
                    background: n(632079).Tj.background.elevated,
                    boxShadow: n(632079).Tj.shadow.outline.sm,
                    minHeight: 40,
                    borderRadius: 10,
                    position: "relative",
                    paddingInline: 8,
                    display: "flex",
                    gap: 6
                },
                outerContainerFocused: {
                    boxShadow: n(632079).Tj.inputBlueFocusRing
                },
                buttonContainer: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: 32,
                    gap: 2,
                    marginTop: W
                },
                style0: {
                    position: "relative",
                    minWidth: 0
                },
                style1: {
                    position: "relative",
                    marginTop: W
                },
                style2: {
                    position: "relative",
                    paddingTop: 10,
                    paddingBottom: 10
                }
            };

            function Z(e) {
                let {
                    formulaAssistantStore: t,
                    onStop: o,
                    onSubmit: r,
                    setFormulaValue: a,
                    spaceId: l,
                    currentFormulaTextValue: s,
                    sessionId: u
                } = e, d = (0, n(533992).v3)(), [p, c] = (0, i.useState)(!1), m = (0, n(682985).K8)(() => t.state.prompt, [t]), {
                    store: y
                } = (0, n(430937).AI)({
                    initialValue: m,
                    source: "formula"
                }), f = (0, n(682985).O$)(t), g = (0, n(217844)._)({
                    name: "ai_formulas",
                    spaceId: l,
                    userId: d.currentUser.id,
                    amount: 1
                }), {
                    upsellMessage: h
                } = (0, n(427724).x)({
                    featureAvailability: g,
                    upsellFrom: "ai_formulas",
                    showOptimisticUpsell: !1
                }), x = (0, n(340309).o)({
                    featureAvailability: g,
                    source: "ai_formulas",
                    type: "text"
                }), b = (0, n(83208).X)("upgrade_system_ai"), v = null !== f.formulaBeforeLatestRequest && f.formulaBeforeLatestRequest !== s, T = (0, n(682985).K8)(() => {
                    var e;
                    let t = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getModel();
                    return !!(t && n(352120).R.isInferenceTranscriptConfigTypeDown({
                        configType: "formulas",
                        spaceId: l,
                        actor: t
                    }))
                }, [l]), I = (0, n(682985).K8)(() => "input" === f.type && (0, n(536614).r4)(f.prompt, y).trim().length > 0 && !T && !(b ? !!x : h), [f, T, h, b, x, y]), C = (0, i.useCallback)(() => {
                    requestAnimationFrame(() => {
                        let e = n(521595).n.findNodeFromStore(y);
                        e && (e.focus(), (0, n(739204).z)({
                            store: y
                        }))
                    })
                }, [y]), M = (0, i.useCallback)(() => {
                    c(!0), C()
                }, [c, C]), P = (0, i.useCallback)(() => {
                    c(!1), (0, n(525779).clear)({
                        environment: d
                    })
                }, [c, d]), S = (0, i.useCallback)(() => {
                    "input" === f.type && null !== f.formulaBeforeLatestRequest && (a(f.formulaBeforeLatestRequest), (0, n(104310).u)({
                        event: {
                            eventName: "formula_assistant_rejected",
                            eventProperties: {
                                formula_assistant_session_id: u
                            }
                        }
                    }))
                }, [f, a, u]), w = (0, i.useCallback)(() => {
                    t.setPrompt(y.getValue() ? ? [])
                }, [t, y]), A = (0, i.useCallback)(async () => {
                    I && (await r((0, n(536614).r4)(f.prompt, y)), C(), (0, n(745015).Z)(d, l))
                }, [f.prompt, I, r, C, l, d, y]), _ = (0, i.useCallback)(() => {
                    t.resetToInitial(), C()
                }, [t, C]), E = (0, i.useCallback)(() => {
                    o(), t.resetToInitial(), C(), (0, n(104310).u)({
                        event: {
                            eventName: "formula_assistant_stopped",
                            eventProperties: {
                                formula_assistant_session_id: u,
                                assistant_state: "generating" === f.type ? f.generatingStep : void 0
                            }
                        }
                    })
                }, [o, C, u, f, t]), F = (0, i.useMemo)(() => {
                    switch (f.type) {
                        case "generating":
                            switch (f.generatingStep) {
                                case "thinking":
                                    return "thinking";
                                case "writing":
                                case "fixing":
                                case "reading-errors":
                                    return "writing";
                                default:
                                    return (0, n(722371).HB)(f.generatingStep)
                            }
                        case "error":
                            return "error";
                        case "refused":
                        case "input":
                            return "idle";
                        default:
                            (0, n(722371).HB)(f)
                    }
                }, [f]);
                return (0, k.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: Q.style0,
                    children: [(0, k.jsx)(j, {
                        upsellMessage: h,
                        upgradeButtonTextProps: x,
                        isUpgradeSystemEnabled: b,
                        isInferenceDown: T
                    }), (0, k.jsxs)("div", {
                        style: { ...Q.outerContainer,
                            ...p && Q.outerContainerFocused
                        },
                        tabIndex: 0,
                        onFocus: M,
                        children: [(0, k.jsx)(n(4458).VP, {
                            height: 32,
                            style: Q.style1,
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, k.jsx)(n(361137).M, {
                                variant: "xsmall_plus",
                                highLevelState: F,
                                includeBoxShadow: !0
                            })
                        }), (0, k.jsx)(n(4458).fI, {
                            gap: 8,
                            className: "autolayout-fill-width",
                            style: Q.style2,
                            alignItems: "center",
                            children: (0, k.jsx)(G, {
                                assistantState: f,
                                store: y,
                                onBlur: P,
                                onFocus: M,
                                onChange: w,
                                onBack: _,
                                onSubmit: A
                            })
                        }), (0, k.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            style: Q.buttonContainer,
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            children: (0, k.jsx)(D, {
                                assistantState: f,
                                spaceId: l,
                                canSubmit: I,
                                onStop: E,
                                onRevert: S,
                                onBack: _,
                                onSubmit: A,
                                hasModifiedFormula: v
                            })
                        })]
                    })]
                })
            }
            let J = (0, n(109939).YK)({
                    assistantPlaceholder: {
                        id: "formulaAssistantInput.assistantPlaceholder",
                        defaultMessage: "Write, fix, or explain a formula…"
                    },
                    assistantIsReadingErrors: {
                        id: "formulaAssistantInput.assistantIsReadingErrors",
                        defaultMessage: "Reading errors"
                    },
                    assistantIsThinking: {
                        id: "formulaAssistantInput.assistantIsThinking",
                        defaultMessage: "Thinking"
                    },
                    assistantIsPondering: {
                        id: "formulaAssistantInput.assistantIsPondering",
                        defaultMessage: "Pondering"
                    },
                    assistantIsReasoning: {
                        id: "formulaAssistantInput.assistantIsReasoning",
                        defaultMessage: "Reasoning"
                    },
                    assistantIsGenerating: {
                        id: "formulaAssistantInput.assistantIsGenerating",
                        defaultMessage: "Generating"
                    },
                    assistantIsWriting: {
                        id: "formulaAssistantInput.assistantIsWriting",
                        defaultMessage: "Writing"
                    },
                    assistantIsFixing: {
                        id: "formulaAssistantInput.assistantIsFixing",
                        defaultMessage: "Fixing"
                    },
                    assistantIsRepairing: {
                        id: "formulaAssistantInput.assistantIsRepairing",
                        defaultMessage: "Repairing"
                    },
                    genericErrorMessage: {
                        id: "formulaAssistantInput.genericErrorMessage",
                        defaultMessage: "Failed to respond. Please try again!"
                    }
                }),
                X = {
                    skeletonContainer: {
                        boxSizing: "border-box",
                        width: "100%",
                        background: n(632079).Tj.background.elevated,
                        boxShadow: n(632079).Tj.shadow.outline.sm,
                        borderRadius: 10,
                        position: "relative",
                        paddingInline: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                    },
                    style0: {
                        width: 24,
                        height: 24,
                        borderRadius: 12
                    },
                    style1: {
                        height: 14,
                        borderRadius: 3,
                        width: "60%"
                    },
                    style2: {
                        width: 18,
                        height: 18,
                        borderRadius: 9
                    }
                };

            function ee() {
                return (0, k.jsxs)("div", {
                    style: X.skeletonContainer,
                    children: [(0, k.jsx)(n(4458).VP, {
                        height: 32,
                        alignItems: "center",
                        justifyContent: "center",
                        style: $.positionRelative,
                        children: (0, k.jsx)(n(795830).P, {
                            emphasized: !0,
                            style: X.style0
                        })
                    }), (0, k.jsx)(n(4458).VP, {
                        className: "autolayout-fill-width",
                        height: 40,
                        alignItems: "flex-start",
                        justifyContent: "center",
                        style: $.positionRelative,
                        children: (0, k.jsx)(n(795830).P, {
                            emphasized: !0,
                            style: X.style1
                        })
                    }), (0, k.jsx)(n(4458).VP, {
                        width: 24,
                        height: 24,
                        alignItems: "center",
                        justifyContent: "center",
                        style: $.positionRelative,
                        children: (0, k.jsx)(n(795830).P, {
                            emphasized: !0,
                            style: X.style2
                        })
                    })]
                })
            }
            n(18107), n(967357);
            var et = () => n(416901);
            let en = {
                true: {
                    name: "true",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$.true,
                    examples: [{
                        input: "true"
                    }, {
                        input: [(0, n(400558).Py)("Checked"), [" == true"]]
                    }]
                },
                false: {
                    name: "false",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$.false,
                    examples: [{
                        input: "false"
                    }, {
                        input: [(0, n(400558).Py)("Checked"), [" == false"]]
                    }]
                },
                and: {
                    name: "and",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$.and,
                    examples: [{
                        input: "3 > 2 and 2 > 3",
                        output: "false"
                    }, {
                        input: [(0, n(400558).Py)("Naughty"), [" && "], (0, n(400558).Py)("Nice")]
                    }]
                },
                or: {
                    name: "or",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$.or,
                    examples: [{
                        input: "3 > 2 or 2 > 3",
                        output: "true"
                    }, {
                        input: [(0, n(400558).Py)("Naughty"), [" || "], (0, n(400558).Py)("Nice")]
                    }]
                },
                not: {
                    name: "not",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$.not,
                    examples: [{
                        input: "not true",
                        output: "false"
                    }, {
                        input: "not (2 > 3)",
                        output: "true"
                    }, {
                        input: [
                            ["!"], (0, n(400558).Py)("Checked")
                        ]
                    }]
                },
                "+": {
                    name: "+",
                    type: {
                        type: "number"
                    },
                    description: n(649210).Q$["+"],
                    examples: [{
                        input: "3 + 2",
                        output: "5"
                    }, {
                        input: "add(-1, 2)",
                        output: "1"
                    }]
                },
                "-": {
                    name: "-",
                    type: {
                        type: "number"
                    },
                    description: n(649210).Q$["-"],
                    examples: [{
                        input: "3 - 2",
                        output: "1"
                    }, {
                        input: "subtract(-1, 2)",
                        output: "-3"
                    }]
                },
                "*": {
                    name: "*",
                    type: {
                        type: "number"
                    },
                    description: n(649210).Q$["*"],
                    examples: [{
                        input: "3 * 2",
                        output: "6"
                    }, {
                        input: "multiply(-1, 2)",
                        output: "-2"
                    }]
                },
                "/": {
                    name: "/",
                    type: {
                        type: "number"
                    },
                    description: n(649210).Q$["/"],
                    examples: [{
                        input: "3 / 2",
                        output: "1.5"
                    }, {
                        input: "divide(-1, 2)",
                        output: "-0.5"
                    }]
                },
                "%": {
                    name: "%",
                    type: {
                        type: "number"
                    },
                    description: n(649210).Q$["%"],
                    examples: [{
                        input: "3 % 2",
                        output: "1"
                    }, {
                        input: "mod(-1, 2)",
                        output: "-1"
                    }]
                },
                "^": {
                    name: "^",
                    type: {
                        type: "number"
                    },
                    description: n(649210).Q$["^"],
                    examples: [{
                        input: "3 ^ 2",
                        output: "9"
                    }, {
                        input: "pow(-1, 2)",
                        output: "1"
                    }]
                },
                "==": {
                    name: "==",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$["=="],
                    examples: [{
                        input: "3 == 2",
                        output: "false"
                    }, {
                        input: 'equal("A", "A")',
                        output: "true"
                    }]
                },
                "!=": {
                    name: "!=",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$["!="],
                    examples: [{
                        input: "3 != 2",
                        output: "true"
                    }, {
                        input: 'unequal("A", "A")',
                        output: "false"
                    }]
                },
                ">": {
                    name: ">",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$[">"],
                    examples: [{
                        input: "3 > 2",
                        output: "true"
                    }, {
                        input: 'now() > parseDate("2040-01-01")',
                        output: "false"
                    }]
                },
                "<": {
                    name: "<",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$["<"],
                    examples: [{
                        input: "3 < 2",
                        output: "false"
                    }, {
                        input: 'now() < parseDate("2040-01-01")',
                        output: "true"
                    }]
                },
                ">=": {
                    name: ">=",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$[">="],
                    examples: [{
                        input: "3 >= 2",
                        output: "true"
                    }, {
                        input: 'now() >= parseDate("2040-01-01")',
                        output: "false"
                    }]
                },
                "<=": {
                    name: "<=",
                    type: {
                        type: "checkbox"
                    },
                    description: n(649210).Q$["<="],
                    examples: [{
                        input: "3 <= 2",
                        output: "false"
                    }, {
                        input: 'now() <= parseDate("2040-01-01")',
                        output: "true"
                    }]
                }
            };
            var ei = () => n(137938);
            let eo = (0, n(109939).YK)({
                    property: {
                        id: "formula2Input.propertyHelper.descriptionGeneric",
                        defaultMessage: "Database property."
                    },
                    titlePropertyDescription: {
                        id: "formulaLibrary.property.title.description",
                        defaultMessage: "Title property."
                    },
                    textPropertyDescription: {
                        id: "formulaLibrary.property.text.description",
                        defaultMessage: "Text property."
                    },
                    urlPropertyDescription: {
                        id: "formulaLibrary.property.url.description",
                        defaultMessage: "URL property."
                    },
                    emailPropertyDescription: {
                        id: "formulaLibrary.property.email.description",
                        defaultMessage: "Email property."
                    },
                    phoneNumberPropertyDescription: {
                        id: "formulaLibrary.property.phoneNumber.description",
                        defaultMessage: "Phone number property."
                    },
                    selectPropertyDescription: {
                        id: "formulaLibrary.property.select.description",
                        defaultMessage: "Select property."
                    },
                    multiSelectPropertyDescription: {
                        id: "formulaLibrary.property.multiSelect.description",
                        defaultMessage: "Multi-select property, list."
                    },
                    statusPropertyDescription: {
                        id: "formulaLibrary.property.status.description",
                        defaultMessage: "Status property."
                    },
                    checkboxPropertyDescription: {
                        id: "formulaLibrary.property.checkbox.description",
                        defaultMessage: "Checkbox property."
                    },
                    datePropertyDescription: {
                        id: "formulaLibrary.property.date.description",
                        defaultMessage: "Date property."
                    },
                    personPropertyDescription: {
                        id: "formulaLibrary.property.person.description",
                        defaultMessage: "Person property, list."
                    },
                    relationPropertyDescription: {
                        id: "formulaLibrary.property.relation.description",
                        defaultMessage: "Relation property, list."
                    },
                    rollupPropertyDescriptionList: {
                        id: "formulaLibrary.property.rollup.description",
                        defaultMessage: "Rollup property, list."
                    },
                    rollupPropertyDescription: {
                        id: "formulaLibrary.property.rollup.descriptionWithList",
                        defaultMessage: "Rollup property."
                    },
                    numberPropertyDescription: {
                        id: "formulaLibrary.property.number.description",
                        defaultMessage: "Number property."
                    },
                    formulaPropertyDescription: {
                        id: "formulaLibrary.property.formula.description",
                        defaultMessage: "Formula property."
                    },
                    formulaPropertyDescriptionList: {
                        id: "formulaLibrary.property.formula.descriptionWithList",
                        defaultMessage: "Formula property, list."
                    },
                    createdTimePropertyDescription: {
                        id: "formulaLibrary.property.createdTime.description",
                        defaultMessage: "Created time property."
                    },
                    lastEditedTimePropertyDescription: {
                        id: "formulaLibrary.property.lastEditedTime.description",
                        defaultMessage: "Last edited time property."
                    },
                    createdByPropertyDescription: {
                        id: "formulaLibrary.property.createdBy.description",
                        defaultMessage: "Created by property."
                    },
                    lastEditedByPropertyDescription: {
                        id: "formulaLibrary.property.lastEditedBy.description",
                        defaultMessage: "Last edited by property."
                    },
                    filePropertyDescription: {
                        id: "formulaLibrary.property.file.description",
                        defaultMessage: "File property, list."
                    },
                    autoincrementIdDescription: {
                        id: "formulaLibrary.property.autoincrementId.description",
                        defaultMessage: "ID property."
                    }
                }),
                er = {
                    title: {
                        name: "title",
                        type: {
                            type: "text"
                        },
                        description: eo.titlePropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.style("b")']],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Py)("Full Name"), ['.split(" ").at(0)']]
                        }] : [{
                            input: [(0, n(400558).Py)("Title")]
                        }, {
                            input: [(0, n(400558).Py)("Title"), ['.style("b")']]
                        }, {
                            input: [(0, n(400558).Py)("Name"), ['.split(" ").at(0)']]
                        }]
                    },
                    text: {
                        name: "text",
                        type: {
                            type: "text"
                        },
                        description: eo.textPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [
                                ["upper("], (0, n(400558).Y2)(e), [")"]
                            ],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.style("b", "red")']],
                            isCopyable: !0
                        }] : [{
                            input: [
                                ["upper("], (0, n(400558).Py)("Name"), [")"]
                            ]
                        }, {
                            input: [(0, n(400558).Py)("Name"), ['.style("b", "red")']]
                        }]
                    },
                    url: {
                        name: "url",
                        type: {
                            type: "text"
                        },
                        description: eo.urlPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [' ? link("Link", '], (0, n(400558).Y2)(e), [').style("green") : ""']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("URL"), [' ? link("Link", '], (0, n(400558).Py)("URL"), [').style("green") : ""']]
                        }]
                    },
                    email: {
                        name: "email",
                        type: {
                            type: "text"
                        },
                        description: eo.emailPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [' ? link("Email", "mailto:" + '], (0, n(400558).Y2)(e), [').style("blue") : ""']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("Email"), [' ? link("Email", "mailto:" + '], (0, n(400558).Py)("Email"), [').style("blue") : ""']]
                        }]
                    },
                    phone_number: {
                        name: "phone_number",
                        type: {
                            type: "text"
                        },
                        description: eo.phoneNumberPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [' ? link("Call", "tel:" + '], (0, n(400558).Y2)(e), [').style("blue") : ""']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("Email"), [' ? link("Call", "tel:" + '], (0, n(400558).Py)("Email"), [').style("blue") : ""']]
                        }]
                    },
                    number: {
                        name: "number",
                        type: {
                            type: "number"
                        },
                        description: eo.numberPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [" / 2"]],
                            isCopyable: !0
                        }, {
                            input: [
                                ["pi() * "], (0, n(400558).Y2)(e), [" ^ 2"]
                            ],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("Cost"), [" / "], (0, n(400558).Py)("Total Units")]
                        }, {
                            input: [
                                ["pi() * "], (0, n(400558).Py)("Radius"), [" ^ 2"]
                            ]
                        }]
                    },
                    select: {
                        name: "select",
                        type: {
                            type: "text"
                        },
                        description: eo.selectPropertyDescription,
                        examples: e => {
                            let t = [{
                                input: [(0, n(400558).Py)("Priority"), [' == "High"']]
                            }, {
                                input: [
                                    ['["Feature", "Bug"].includes('], (0, n(400558).Py)("Task Type"), [")"]
                                ]
                            }];
                            return e && t.unshift({
                                input: [(0, n(400558).Y2)(e)],
                                isCopyable: !0
                            }), t
                        }
                    },
                    multi_select: {
                        name: "select",
                        type: {
                            type: "array",
                            of: {
                                type: "text"
                            }
                        },
                        description: eo.multiSelectPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".length()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Py)("Tags"), ['.includes("Finance")']]
                        }] : [{
                            input: [(0, n(400558).Py)("Tags"), [".length()"]]
                        }, {
                            input: [(0, n(400558).Py)("Tags"), ['.includes("Finance")']]
                        }]
                    },
                    status: {
                        name: "status",
                        type: {
                            type: "text"
                        },
                        description: eo.statusPropertyDescription,
                        examples: e => (null == e ? void 0 : e.name) === "Status" ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [' == "Done"']],
                            isCopyable: !0
                        }, {
                            input: [
                                ['["Not started", "In progress"].includes('], (0, n(400558).Y2)(e), [")"]
                            ],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("Status"), [' == "Done"']]
                        }, {
                            input: [
                                ['["Not started", "In progress"].includes('], (0, n(400558).Py)("Status"), [")"]
                            ]
                        }]
                    },
                    checkbox: {
                        name: "checkbox",
                        type: {
                            type: "checkbox"
                        },
                        description: eo.checkboxPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [
                                ["not "], (0, n(400558).Y2)(e)
                            ],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Py)("Signed"), [" and "], (0, n(400558).Py)("Sealed"), [" and "], (0, n(400558).Py)("Delivered")]
                        }] : [{
                            input: [
                                ["not"], (0, n(400558).Py)("Done")
                            ]
                        }, {
                            input: [(0, n(400558).Py)("Signed"), [" and "], (0, n(400558).Py)("Sealed"), [" and "], (0, n(400558).Py)("Delivered")]
                        }]
                    },
                    date: {
                        name: "date",
                        type: {
                            type: "date"
                        },
                        description: eo.datePropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [" > now()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.dateAdd(1, "weeks")']],
                            isCopyable: !0
                        }, {
                            input: [
                                ["dateBetween("], (0, n(400558).Y2)(e), [', now(), "days")']
                            ],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("Due Date"), [" > now()"]]
                        }, {
                            input: [
                                ["formatDate("], (0, n(400558).Py)("Date"), [', "YYYY/MM/DD HH:mm")']
                            ]
                        }, {
                            input: [
                                ["dateBetween("], (0, n(400558).Py)("Birthday"), [', now(), "days")']
                            ]
                        }]
                    },
                    person: {
                        name: "person",
                        type: {
                            type: "array",
                            of: {
                                type: "text"
                            }
                        },
                        description: eo.personPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".length()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".at(0)"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".map(current.email())"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.some(current.name() == "Alice")']]
                        }] : [{
                            input: [(0, n(400558).Py)("Participants"), [".at(0)"]]
                        }, {
                            input: [(0, n(400558).Py)("Participants"), [".length()"]]
                        }, {
                            input: [(0, n(400558).Py)("Participants"), ['.some(current.name() == "Alice")']]
                        }]
                    },
                    relation: {
                        name: "relation",
                        type: {
                            type: "array",
                            of: {
                                type: "block"
                            }
                        },
                        description: eo.relationPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".length()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Py)("Tasks"), [".filter(current."], (0, n(400558).Py)("Status"), [' != "Done")']]
                        }] : [{
                            input: [(0, n(400558).Py)("Tasks"), [".length()"]]
                        }, {
                            input: [(0, n(400558).Py)("Tasks"), [".filter(current."], (0, n(400558).Py)("Status"), [' != "Done")']]
                        }]
                    },
                    rollup: {
                        name: "rollup",
                        type: e => (null == e ? void 0 : e.type) === "rollup" && ("show_unique" === e.aggregation || void 0 === e.aggregation) ? {
                            type: "array",
                            of: {
                                type: "unknown"
                            }
                        } : e && "aggregation" in e && void 0 !== e.aggregation ? {
                            type: (0, n(288299).ou)((0, n(288299).ZP)(e.aggregation))
                        } : {
                            type: "unknown"
                        },
                        description: e => (null == e ? void 0 : e.type) === "rollup" && ("show_unique" === e.aggregation || void 0 === e.aggregation) ? eo.rollupPropertyDescriptionList : eo.rollupPropertyDescription,
                        examples: (e, t) => {
                            let i;
                            return i = t && (null == t ? void 0 : t.type) === "rollup" && ("show_unique" === t.aggregation || void 0 === t.aggregation) ? [void 0 !== e ? {
                                input: [(0, n(400558).Y2)(e), [".length()"]],
                                isCopyable: !0
                            } : {
                                input: [(0, n(400558).Py)("Purchases"), [".length()"]]
                            }, {
                                input: [
                                    ["sum("], (0, n(400558).Py)("Purchases"), [".map(current."], (0, n(400558).Py)("Cost"), ["))"]
                                ]
                            }] : [{
                                input: [(0, n(400558).Py)("Average cost"), [" * 12"]]
                            }, {
                                input: [(0, n(400558).Py)("Sum of customers"), [" > 100"]]
                            }], e && i.unshift({
                                input: [(0, n(400558).Y2)(e)],
                                isCopyable: !0
                            }), i
                        }
                    },
                    file: {
                        name: "file",
                        type: {
                            type: "array",
                            of: {
                                type: "text"
                            }
                        },
                        description: eo.filePropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".length()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.filter(current.match(".pdf$"))']],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.map(link("File", current))']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("Attachments"), [".length()"]]
                        }, {
                            input: [(0, n(400558).Py)("Attachments"), ['.filter(current.match(".pdf$"))']]
                        }, {
                            input: [(0, n(400558).Py)("Attachments"), ['.map(link("File", current))']]
                        }]
                    },
                    formula: {
                        name: "formula",
                        type: e => {
                            var t, n, i;
                            return e && "formula2" in e && null != (t = e.formula2) && null != (t = t.result_type) && t.type ? e.formula2.result_type : e && "formula" in e && null != (n = e.formula) && n.result_type ? {
                                type: null == (i = e.formula) ? void 0 : i.result_type
                            } : {
                                type: "unknown"
                            }
                        },
                        description: e => {
                            var t;
                            return e && "formula2" in e && (null == (t = e.formula2) || null == (t = t.result_type) ? void 0 : t.type) === "array" ? eo.formulaPropertyDescriptionList : eo.formulaPropertyDescription
                        },
                        examples: (e, t) => {
                            var i, o, r;
                            let a = {
                                type: "unknown"
                            };
                            if (t && "formula2" in t && null != (i = t.formula2) && null != (i = i.result_type) && i.type ? a = t.formula2.result_type : t && "formula" in t && null != (o = t.formula) && o.result_type && (a = {
                                    type: null == (r = t.formula) ? void 0 : r.result_type
                                }), !e) return [];
                            let l = [{
                                input: [(0, n(400558).Y2)(e)],
                                isCopyable: !0
                            }];
                            switch (a.type) {
                                case "array":
                                    switch (l.push({
                                        input: [(0, n(400558).Y2)(e), [".length()"]],
                                        isCopyable: !0
                                    }), a.of.type) {
                                        case "text":
                                            l.push({
                                                input: [(0, n(400558).Y2)(e), ['.join("\\n")']],
                                                isCopyable: !0
                                            });
                                            break;
                                        case "number":
                                            l.push({
                                                input: [(0, n(400558).Y2)(e), [".sum()"]],
                                                isCopyable: !0
                                            });
                                            break;
                                        case "date":
                                            l.push({
                                                input: [(0, n(400558).Y2)(e), ['.map(dateBetween(now(), current, "days"))']],
                                                isCopyable: !0
                                            });
                                            break;
                                        case "person":
                                            l.push({
                                                input: [(0, n(400558).Y2)(e), [".map(current.name())"]],
                                                isCopyable: !0
                                            }), l.push({
                                                input: [(0, n(400558).Y2)(e), [".some(current.name() == 'Alice')"]],
                                                isCopyable: !0
                                            });
                                            break;
                                        case "checkbox":
                                            l.push({
                                                input: [(0, n(400558).Y2)(e), [".every(current == true)"]],
                                                isCopyable: !0
                                            });
                                            break;
                                        case "block":
                                            l.push({
                                                input: [(0, n(400558).Py)("Primary Tasks"), [".filter(current."], (0, n(400558).Py)("Status"), [' == "Done")']]
                                            })
                                    }
                                    break;
                                case "number":
                                    l.push({
                                        input: [(0, n(400558).Y2)(e), [" * 2 > 100"]],
                                        isCopyable: !0
                                    });
                                    break;
                                case "text":
                                    l.push({
                                        input: [(0, n(400558).Y2)(e), [".upper()"]],
                                        isCopyable: !0
                                    });
                                    break;
                                case "date":
                                    l.push({
                                        input: [(0, n(400558).Y2)(e), [" > now()"]],
                                        isCopyable: !0
                                    });
                                    break;
                                case "person":
                                    l.push({
                                        input: [(0, n(400558).Y2)(e), [".name()"]],
                                        isCopyable: !0
                                    });
                                    break;
                                case "checkbox":
                                    l.push({
                                        input: [
                                            ["not "], (0, n(400558).Y2)(e)
                                        ],
                                        isCopyable: !0
                                    });
                                    break;
                                case "block":
                                    l.push({
                                        input: [(0, n(400558).Y2)(e), [".map(current."], (0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.CreatedBy), [")"]]
                                    })
                            }
                            return l
                        }
                    },
                    created_time: {
                        name: "created_time",
                        type: {
                            type: "date"
                        },
                        description: eo.createdTimePropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.dateAdd(1, "weeks")']],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [' > dateSubtract(now(), 1, "years")']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.CreatedTime), ['.dateAdd(1, "weeks")']]
                        }, {
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.CreatedTime), [' > dateSubtract(now(), 1, "years")']]
                        }]
                    },
                    last_edited_time: {
                        name: "last_edited_time",
                        type: {
                            type: "date"
                        },
                        description: eo.lastEditedTimePropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.dateAdd(1, "weeks")']],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [' > dateSubtract(now(), 1, "month")']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.LastEditedTime), ['.dateAdd(1, "weeks")']]
                        }, {
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.LastEditedTime), [' > dateSubtract(now(), 1, "month")']]
                        }]
                    },
                    created_by: {
                        name: "created_by",
                        type: {
                            type: "person"
                        },
                        description: eo.createdByPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".name()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".email()"]],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.CreatedBy), [".name()"]]
                        }, {
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.CreatedBy), [".email()"]]
                        }]
                    },
                    last_edited_by: {
                        name: "last_edited_by",
                        type: {
                            type: "person"
                        },
                        description: eo.lastEditedByPropertyDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".name()"]],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), [".email()"]],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.LastEditedBy), [".name()"]]
                        }, {
                            input: [(0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.LastEditedBy), [".email()"]]
                        }]
                    },
                    auto_increment_id: {
                        name: "auto_increment_id",
                        type: {
                            type: "number"
                        },
                        description: eo.autoincrementIdDescription,
                        examples: e => e ? [{
                            input: [(0, n(400558).Y2)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.split("-").first() /* Prefix */']],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).Y2)(e), ['.split("-").last().toNumber() /* ID */']],
                            isCopyable: !0
                        }] : [{
                            input: [(0, n(400558).Py)("ID Code")]
                        }, {
                            input: [(0, n(400558).Py)("Task ID"), ['.split("-").first() /* Prefix */']],
                            output: '"TASK"'
                        }, {
                            input: [(0, n(400558).Py)("Task ID"), ['.split("-").last().toNumber() /* ID */']],
                            output: "123"
                        }]
                    },
                    button: null,
                    location: null,
                    last_visited_time: null,
                    verification: null,
                    place: null
                },
                ea = {
                    text: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)({
                                id: e.id
                            })]
                        }, {
                            input: [
                                ["upper("], (0, n(400558).HH)({
                                    id: e.id
                                }), [")"]
                            ]
                        }, {
                            input: [(0, n(400558).HH)({
                                id: e.id
                            }), ['.style("b", "red")']]
                        }] : []
                    },
                    number: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)(e)],
                            isCopyable: !0
                        }, {
                            input: [(0, n(400558).HH)(e), [" / 2"]],
                            isCopyable: !0
                        }, {
                            input: [
                                ["pi() * "], (0, n(400558).HH)(e), [" ^ 2"]
                            ],
                            isCopyable: !0
                        }] : []
                    },
                    checkbox: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)(e)]
                        }, {
                            input: [
                                ["not "], (0, n(400558).HH)(e)
                            ]
                        }] : []
                    },
                    date: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)(e)]
                        }, {
                            input: [(0, n(400558).HH)(e), [" > now()"]]
                        }, {
                            input: [(0, n(400558).HH)(e), ['.dateAdd(1, "weeks")']]
                        }, {
                            input: [
                                ["dateBetween("], (0, n(400558).HH)(e), [', now(), "days")']
                            ]
                        }] : []
                    },
                    block: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)(e)]
                        }, {
                            input: [(0, n(400558).HH)(e), [".format()"]]
                        }, {
                            input: [(0, n(400558).HH)(e), ["."], (0, n(400558).pC)(et().FormulaTokenSupportedBlockSystemProperty.CreatedBy)]
                        }] : []
                    },
                    person: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)(e)]
                        }, {
                            input: [(0, n(400558).HH)(e), [".email()"]]
                        }, {
                            input: [(0, n(400558).HH)(e), ['.name() == "Alice"']]
                        }] : []
                    },
                    array: {
                        examples: e => e ? [{
                            input: [(0, n(400558).HH)(e)]
                        }, {
                            input: [(0, n(400558).HH)(e), [".length()"]]
                        }, {
                            input: [(0, n(400558).HH)(e), [".at(0).format()"]]
                        }] : []
                    },
                    select: null,
                    function: null,
                    unknown: null,
                    undefined: null
                },
                el = {
                    nameContainer: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: 14,
                        fontWeight: n(699422).Wy.semibold
                    },
                    skeletonIcon: {
                        width: 14,
                        height: 14,
                        borderRadius: 7,
                        flexShrink: 0,
                        marginInlineEnd: 6
                    },
                    skeletonName: {
                        height: 15,
                        borderRadius: 3,
                        width: "40%",
                        marginTop: 3,
                        marginBottom: 3
                    },
                    skeletonDescription: {
                        height: 18,
                        borderRadius: 3,
                        width: "30%"
                    },
                    skeletonExample: {
                        height: 30.5,
                        borderRadius: 5,
                        margin: "0 -4px",
                        padding: "0 6px",
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        display: "flex",
                        alignItems: "center"
                    },
                    skeletonExampleTextShort: {
                        height: 16.5,
                        borderRadius: 3,
                        width: "40%"
                    },
                    skeletonExampleTextMedium: {
                        height: 16.5,
                        borderRadius: 3,
                        width: "60%"
                    },
                    skeletonExampleTextLong: {
                        height: 16.5,
                        borderRadius: 3,
                        width: "80%"
                    }
                };

            function es({
                style: e
            }) {
                let t = (0, n(960253).I)(() => ({
                    helper: {
                        display: "flex",
                        flexDirection: "column",
                        fontSize: 12,
                        height: "auto",
                        width: "100%",
                        gap: 8,
                        overflow: "auto",
                        textWrap: "wrap",
                        ...e
                    }
                }), [e]);
                return (0, k.jsxs)("div", {
                    style: t.helper,
                    children: [(0, k.jsxs)("div", {
                        style: el.nameContainer,
                        children: [(0, k.jsx)(n(795830).P, {
                            style: el.skeletonIcon
                        }), (0, k.jsx)(n(795830).P, {
                            style: el.skeletonName
                        })]
                    }), (0, k.jsx)(n(795830).P, {
                        style: el.skeletonDescription
                    }), (0, k.jsxs)(n(4458).VP, {
                        gap: 4,
                        children: [(0, k.jsx)("div", {
                            style: el.skeletonExample,
                            children: (0, k.jsx)(n(795830).P, {
                                style: el.skeletonExampleTextShort
                            })
                        }), (0, k.jsx)("div", {
                            style: el.skeletonExample,
                            children: (0, k.jsx)(n(795830).P, {
                                style: el.skeletonExampleTextMedium
                            })
                        }), (0, k.jsx)("div", {
                            style: el.skeletonExample,
                            children: (0, k.jsx)(n(795830).P, {
                                style: el.skeletonExampleTextLong
                            })
                        })]
                    })]
                })
            }

            function eu({
                infoHelper: e,
                getRecordModel: t,
                typecheckContextValues: i,
                style: o,
                isLoading: r
            }) {
                var a, l, s;
                let u = (0, n(109939).tz)();
                if (r) return (0, k.jsx)(es, {
                    style: o
                });
                if ((null == e ? void 0 : e.kind) === void 0) return null;
                switch (e.kind) {
                    case et().FormulaEditorInfoCompletionKind.Token:
                        return (0, k.jsx)(ey, {
                            completion: e,
                            getRecordModel: t,
                            style: o,
                            typecheckContextValues: i
                        });
                    case et().FormulaEditorInfoCompletionKind.LibraryFunction:
                        {
                            let i = !!(null == e ? void 0 : e.calledFromUnifiedFunctionProperty),
                                r = (a = e.libraryFunction, i && void 0 !== a.syntax[1] ? a.syntax[1] : a.syntax[0]),
                                s = (l = e.libraryFunction, i && void 0 !== l.examples[1] ? l.examples[1] : l.examples[0]),
                                u = e.libraryFunction.returnType;
                            return (0, k.jsx)(em, {
                                icon: eB("function" == typeof u ? u([]).type : u.type),
                                name: r,
                                description: (0, k.jsx)(n(109939).sA, { ...e.libraryFunction.description,
                                    values: {
                                        br: (0, k.jsx)("br", {})
                                    }
                                }),
                                examples: s.length > 0 ? s.map((e, n) => (0, k.jsx)(ep, {
                                    example: e,
                                    getRecordModel: t
                                }, n)) : void 0,
                                style: o
                            })
                        }
                    case et().FormulaEditorInfoCompletionKind.Binding:
                        if (e.text === et().CURRENT_VALUE_NAME) return (0, k.jsx)(em, {
                            icon: eB(e.type.type),
                            name: e.text,
                            description: u.formatMessage(ex.currentValueDescription),
                            style: o
                        });
                        if (e.text === et().CURRENT_INDEX_NAME) return (0, k.jsx)(em, {
                            icon: eB(e.type.type),
                            name: e.text,
                            description: u.formatMessage(ex.currentIndexDescription),
                            style: o
                        });
                        return (0, k.jsx)(em, {
                            icon: eB(e.type.type),
                            name: e.text,
                            description: u.formatMessage((null == e || null == (s = e.type) ? void 0 : s.type) === "array" ? ex.listVariableType : ex.variableType),
                            style: o
                        });
                    case et().FormulaEditorInfoCompletionKind.Builtin:
                        {
                            let n = en[e.builtin];
                            return (0, k.jsx)(em, {
                                icon: eB(n.type.type),
                                name: n.name,
                                description: u.formatMessage(n.description),
                                examples: n.examples.length > 0 ? n.examples.map((e, n) => (0, k.jsx)(ep, {
                                    example: e,
                                    getRecordModel: t
                                }, n)) : void 0,
                                style: o
                            })
                        }
                    default:
                        return (0, n(722371).HB)(e)
                }
            }
            let ed = {
                code: {
                    fontFamily: "monospace",
                    whiteSpaceCollapse: "preserve",
                    fontSize: 11,
                    borderRadius: 5,
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    margin: "0 -4px",
                    padding: "0 6px",
                    pointerEvents: "none",
                    opacity: .95,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    tabSize: 2
                },
                left: {
                    flexGrow: 1,
                    padding: "6px 0"
                },
                right: {
                    alignSelf: "center"
                },
                copyButton: {
                    height: 22,
                    width: 22,
                    pointerEvents: "auto"
                },
                copyButtonIcon: {
                    height: n(104509).Ev.xs,
                    width: n(104509).Ev.xs
                }
            };

            function ep({
                example: e,
                getRecordModel: t,
                typecheckContextValues: o
            }) {
                let a = (0, n(815048).fJ)(n(832737).y),
                    l = (0, n(591404).Ol)(),
                    s = (0, n(533992).v3)(),
                    {
                        device: u
                    } = s,
                    d = (0, n(723240).r)(),
                    p = (0, n(960253).e)(),
                    c = (0, n(109939).tz)(),
                    m = (0, n(753281)._)(),
                    y = (0, n(682985).K8)(() => {
                        var i;
                        let y = document.createElement("div"),
                            f = "string" != typeof e.input ? r().q4_(e.input) : e.input,
                            g = (null == (i = a.value) ? void 0 : i.highlight(`${f}`, a.value.languages[n(804518).PrismLanguages.notion], n(804518).PrismLanguages.notion)) ? ? "";
                        y.innerHTML = n(549972).bi(g);
                        let h = n(381453).oE(Array.from(y.childNodes).map(eg)),
                            x = "string" == typeof e.input ? [
                                [e.input],
                                [" = "]
                            ] : e.input.concat([
                                [" = "]
                            ]),
                            b = n(549972).YH(x, n(381453).oE(h)),
                            v = x.map(r().uPN).map((e, i) => (0, n(605351).sT)({
                                annotations: e,
                                theme: n(632079).Tj,
                                themeMode: p,
                                getRecordModel: t,
                                spaceId: d,
                                isSafariOrIOS: u.isSafari || u.isIOS
                            }));
                        return b.map((e, i) => {
                            let a = v[e.textTokenIndex],
                                y = x[e.textTokenIndex];
                            return r().qXl(y) ? (0, n(605351).Au)({
                                args: {
                                    textValue: {
                                        value: x,
                                        spaceId: d
                                    },
                                    getRecordModel: t,
                                    getRecordRole: () => void 0,
                                    disableHover: !1,
                                    disableStyleAnnotations: !1,
                                    disableInsertedDeletedAnnotations: !1,
                                    disableDateStyleAnnotations: !1,
                                    disableSuggestionAnnotations: !1,
                                    disableLinks: !1,
                                    userTimeZone: (0, n(714350).P)(),
                                    disabled: !1,
                                    isAndroid: u.isAndroid,
                                    isSafariOrIOS: u.isSafari || u.isIOS,
                                    isFirefox: u.isFirefox,
                                    isWindows: u.isWindows,
                                    emojiType: l,
                                    highlightDiscussionId: void 0,
                                    theme: n(632079).Tj,
                                    themeMode: p,
                                    intl: c,
                                    renderedPageBlockId: void 0,
                                    parentBlockId: void 0,
                                    katex: void 0,
                                    isClient: !0,
                                    baseUrl: n(986939).A.domainBaseUrl,
                                    publicDomainName: n(986939).A.publicDomainName,
                                    currentUserId: s.currentUser.id,
                                    getPublicBaseUrlForPageOrCollection: void 0,
                                    externalIntegrations: [],
                                    formulaValueTypes: o ? ? [],
                                    emojiData: m,
                                    isMobileNative: u.isMobileNative,
                                    isMobileNativeExternalLinkFixEnabled: n(218744).default.checkGate({
                                        gateName: "mobile_native_external_link_fix"
                                    }),
                                    displayInUserTimezone: !0
                                },
                                style: a.style,
                                classNames: a.classNames,
                                index: i,
                                token: y,
                                tokenValue: r().N8A(y),
                                tokenAnnotations: r().uPN(y)
                            }) : (0, k.jsx)("span", {
                                className: [e.classNames || "", ...a.classNames].join(" "),
                                style: a.style,
                                "data-token-index": e.textTokenIndex,
                                children: e.value
                            }, i)
                        })
                    }, [e.input, a.value, p, t, d, u.isAndroid, u.isSafari, u.isFirefox, u.isIOS, u.isWindows, u.isMobileNative, l, c, s.currentUser.id, o, m]),
                    f = (0, n(682985).K8)(() => Array.isArray(e.output) ? (0, n(605351).S5)({
                        textValue: {
                            value: e.output,
                            spaceId: d
                        },
                        getRecordModel: t,
                        getRecordRole: () => void 0,
                        disableHover: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disableLinks: !1,
                        userTimeZone: (0, n(714350).P)(),
                        disabled: !1,
                        isAndroid: u.isAndroid,
                        isSafariOrIOS: u.isSafari || u.isIOS,
                        isFirefox: u.isFirefox,
                        isWindows: u.isWindows,
                        emojiType: l,
                        theme: n(632079).Tj,
                        themeMode: p,
                        intl: c,
                        katex: void 0,
                        isClient: !0,
                        baseUrl: n(986939).A.domainBaseUrl,
                        publicDomainName: n(986939).A.publicDomainName,
                        currentUserId: s.currentUser.id,
                        getPublicBaseUrlForPageOrCollection: void 0,
                        externalIntegrations: [],
                        formulaValueTypes: [],
                        emojiData: m,
                        isMobileNative: u.isMobileNative,
                        isMobileNativeExternalLinkFixEnabled: n(218744).default.checkGate({
                            gateName: "mobile_native_external_link_fix"
                        }),
                        displayInUserTimezone: !0
                    }) : e.output, [u.isAndroid, u.isIOS, u.isSafari, u.isFirefox, u.isWindows, u.isMobileNative, m, l, s.currentUser.id, e.output, t, c, d, p]),
                    g = !1 !== e.isCopyable && ("string" == typeof e.input || !0 === e.isCopyable),
                    h = (0, i.useCallback)(async () => {
                        if (g) {
                            let i = (Array.isArray(e.input) ? (0, n(458230).r4)({
                                intl: c,
                                textValue: e.input,
                                getRecordModel: t,
                                userTimeZone: (0, n(714350).P)()
                            }) : e.input).replaceAll(/\/\*.*\*\//g, "").trim();
                            (await (0, n(969899).jd)())({
                                stringValue: i,
                                environment: s,
                                copiedMessage: eh.copiedExampleMessage
                            })
                        }
                    }, [s, e.input, t, c, g]);
                return (0, k.jsxs)("div", {
                    style: ed.code,
                    dir: "ltr",
                    children: [(0, k.jsxs)("div", {
                        style: ed.left,
                        children: [(0, k.jsx)("div", {
                            children: y
                        }), f ? (0, k.jsxs)("div", {
                            children: ["= ", f]
                        }) : null]
                    }), g ? (0, k.jsx)("div", {
                        style: ed.right,
                        children: (0, k.jsx)(n(51831).m, {
                            content: () => c.formatMessage(eh.copyToClipboard),
                            children: e => (0, k.jsx)(n(374533).A, {
                                ariaLabel: c.formatMessage(eh.copyToClipboard),
                                onClick: h,
                                icon: n(682006).a,
                                style: ed.copyButton,
                                iconStyle: ed.copyButtonIcon,
                                disallowTabbing: !0,
                                ...e
                            })
                        })
                    }) : null]
                })
            }
            let ec = {
                name: {
                    fontSize: 14,
                    fontWeight: n(699422).Wy.semibold,
                    display: "flex",
                    alignItems: "center"
                },
                description: {
                    color: n(632079).Tj.text.secondary
                },
                iconStyle: {
                    height: n(104509).Ev.sm,
                    width: n(104509).Ev.sm,
                    fill: n(632079).Tj.icon.secondary,
                    display: "inline",
                    marginInlineEnd: 6
                }
            };

            function em({
                name: e,
                icon: t,
                description: i,
                examples: o,
                style: r
            }) {
                let a = (0, n(960253).I)(() => ({
                    helper: {
                        display: "flex",
                        flexDirection: "column",
                        fontSize: 12,
                        height: "auto",
                        width: "100%",
                        gap: 8,
                        overflow: "auto",
                        textWrap: "wrap",
                        ...r
                    }
                }), [r]);
                return (0, k.jsxs)("div", {
                    style: a.helper,
                    children: [(0, k.jsxs)("span", {
                        style: ec.name,
                        children: [void 0 !== t ? t(ec.iconStyle) : void 0, e]
                    }), void 0 !== i ? (0, k.jsx)("span", {
                        style: ec.description,
                        children: i
                    }) : void 0, void 0 !== o ? (0, k.jsx)(n(4458).VP, {
                        gap: 4,
                        children: o
                    }) : void 0]
                })
            }

            function ey({
                completion: e,
                getRecordModel: t,
                style: i,
                typecheckContextValues: o
            }) {
                let r = (0, n(109939).tz)(),
                    {
                        name: a,
                        description: l,
                        icon: s,
                        examples: u
                    } = (0, n(682985).K8)(() => {
                        var i, a, l, s, u;
                        if (!t) return {};
                        if (e.token.type === et().FormulaTokenType.BlockProperty) {
                            if ((0, n(297493).ix)(e.token)) return {};
                            if (et().FormulaTokenSupportedBlockSystemPropertyList.includes(e.token.property) && !e.token.collection) {
                                let o = null == (i = et().FormulaTokenSupportedBlockSystemPropertyToType[e.token.property]) ? void 0 : i.type,
                                    a = o ? n(221535).LE[o] : void 0,
                                    l = er[e.token.property],
                                    s = "function" == typeof(null == l ? void 0 : l.description) ? l.description() : null == l ? void 0 : l.description,
                                    u = e.name ? ? e.token.property;
                                return {
                                    name: u,
                                    icon: a,
                                    description: s ? r.formatMessage(s) : void 0,
                                    examples: null !== l ? ef(l, t, {
                                        collection: e.token.collection,
                                        property: e.token.property,
                                        name: u
                                    }, {
                                        name: u,
                                        type: e.token.property
                                    }) : void 0
                                }
                            }
                            if (!e.token.collection) return {};
                            let o = (0, n(297493).Yi)(e.token.property),
                                a = t(e.token.collection),
                                l = null == a ? void 0 : a.getNormalizedSchema(t),
                                s = null == l ? void 0 : l[o];
                            if (!s) return {};
                            let u = er[s.type];
                            return u ? {
                                name: e.name,
                                icon: n(221535).LE[s.type],
                                description: r.formatMessage("function" == typeof u.description ? u.description(s) : u.description),
                                examples: ef(u, t, {
                                    collection: e.token.collection,
                                    property: o,
                                    name: e.name
                                }, s)
                            } : {}
                        }
                        if (e.token.type === et().FormulaTokenType.ContextValue) {
                            let i, r, d = (0, n(297493)._H)(o, (0, n(297493).GH)(e.token.valueId));
                            if (!d || d.kind !== et().FormulaContextValueKind.ContextValue) return {};
                            let p = ea[d.type.type];
                            return {
                                name: d.name,
                                description: d.description ? ? d.tooltipName,
                                icon: eB(d.type.type),
                                examples: null != p && p.examples ? (a = p, l = t, s = o, u = d, i = a.examples, r = [], (r = "function" == typeof i ? i(u).map((e, t) => (0, k.jsx)(ep, {
                                    example: e,
                                    getRecordModel: l,
                                    typecheckContextValues: s
                                }, t)) : i.map((e, t) => (0, k.jsx)(ep, {
                                    example: e,
                                    getRecordModel: l,
                                    typecheckContextValues: s
                                }, t))).length > 0 ? r : void 0) : void 0
                            }
                        }
                        if (e.token.type === et().FormulaTokenType.Block || e.token.type === et().FormulaTokenType.Checkbox || e.token.type === et().FormulaTokenType.Date || e.token.type === et().FormulaTokenType.Person) return {};
                        (0, n(722371).HB)(e.token)
                    }, [e.name, e.token, t, o, r]);
                return void 0 === a ? null : (0, k.jsx)(em, {
                    name: a,
                    icon: s,
                    description: l,
                    examples: u,
                    style: i
                })
            }

            function ef(e, t, n, i) {
                let o = e.examples,
                    r = [];
                return (r = "function" == typeof o ? o(n, i).map((e, n) => (0, k.jsx)(ep, {
                    example: e,
                    getRecordModel: t
                }, n)) : o.map((e, n) => (0, k.jsx)(ep, {
                    example: e,
                    getRecordModel: t
                }, n))).length > 0 ? r : void 0
            }

            function eg(e) {
                return n(885711).KH(e) ? [e.data] : n(885711).vq(e) ? [e.textContent || "", e.className] : void 0
            }
            let eh = (0, n(109939).YK)({
                    copiedExampleMessage: {
                        id: "formula2Input.helperText.copiedExampleMessage",
                        defaultMessage: "Copied example to clipboard!"
                    },
                    copyToClipboard: {
                        defaultMessage: "Copy to Clipboard",
                        id: "database.copyButton.copyToClipboard"
                    }
                }),
                ex = (0, n(109939).YK)({
                    currentValueDescription: {
                        id: "formula2Input.helperText.currentValueDescription",
                        defaultMessage: "Returns the value of the current item in the list function."
                    },
                    currentIndexDescription: {
                        id: "formula2Input.helperText.currentIndexDescription",
                        defaultMessage: "Returns the index of the current item in the list function, starting from 0."
                    },
                    variableType: {
                        id: "formula2Input.variableHelper.description",
                        defaultMessage: "User-defined variable."
                    },
                    listVariableType: {
                        id: "formula2Input.variableHelper.descriptionWithList",
                        defaultMessage: "User-defined variable, list."
                    }
                }),
                eb = (0, n(109939).YK)({
                    showDocumentation: {
                        id: "formulas.autocompleteMenu.showDocumentation",
                        defaultMessage: "Show documentation"
                    }
                }),
                ev = ["generic", "conditional", "text", "number", "date", "people", "list", "variable", "special"],
                ek = {
                    menu: {
                        top: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        position: "absolute",
                        marginBottom: 2
                    },
                    menuSection: {
                        paddingTop: 6,
                        paddingBottom: 2
                    },
                    sectionTitle: {
                        height: 12,
                        borderRadius: 3,
                        width: "30%",
                        marginTop: 6,
                        marginBottom: n(986939).A.isMobile ? 12 : 6,
                        marginInlineStart: 8
                    },
                    skeletonIcon: {
                        width: n(104509).Ev.sm,
                        height: n(104509).Ev.sm,
                        margin: 3,
                        borderRadius: 8,
                        flexShrink: 0
                    },
                    skeletonTitle: {
                        height: 16.8,
                        borderRadius: 3,
                        width: "80%"
                    }
                };

            function eT() {
                let e;
                e = n(986939).A.isMobile ? {
                    menuType: n(649476).gu.Modal,
                    forceFullScreenSlideUp: !0,
                    hideMobileTopbar: !0
                } : {
                    menuType: n(649476).gu.Popup,
                    width: 228,
                    minWidth: 228,
                    maxWidth: 228
                };
                let t = [{
                    key: "skeleton-properties",
                    render: e => (0, k.jsxs)(n(844565).A, { ...e,
                        style: ek.menuSection,
                        disableMobileBorders: !0,
                        children: [(0, k.jsx)(n(795830).P, {
                            style: ek.sectionTitle
                        }), Array.from({
                            length: n(986939).A.isMobile ? 6 : 3
                        }, (e, t) => (0, k.jsx)(n(95582).A, {
                            focused: !1,
                            disabled: !0,
                            icon: (0, k.jsx)(n(795830).P, {
                                style: ek.skeletonIcon
                            }),
                            title: (0, k.jsx)(n(795830).P, {
                                style: ek.skeletonTitle
                            })
                        }, `skeleton-property-${t}`))]
                    }),
                    items: []
                }, {
                    key: "skeleton-functions",
                    render: e => (0, k.jsxs)(n(844565).A, { ...e,
                        style: ek.menuSection,
                        disableMobileBorders: !0,
                        children: [(0, k.jsx)(n(795830).P, {
                            style: ek.sectionTitle
                        }), Array.from({
                            length: n(986939).A.isMobile ? 6 : 3
                        }, (e, t) => (0, k.jsx)(n(95582).A, {
                            focused: !1,
                            disabled: !0,
                            icon: (0, k.jsx)(n(795830).P, {
                                style: ek.skeletonIcon
                            }),
                            title: (0, k.jsx)(n(795830).P, {
                                style: ek.skeletonTitle
                            })
                        }, `skeleton-function-${t}`))]
                    }),
                    items: []
                }, {
                    key: "skeleton-functions-2",
                    render: e => (0, k.jsxs)(n(844565).A, { ...e,
                        style: ek.menuSection,
                        disableMobileBorders: !0,
                        children: [(0, k.jsx)(n(795830).P, {
                            style: ek.sectionTitle
                        }), Array.from({
                            length: n(986939).A.isMobile ? 6 : 3
                        }, (e, t) => (0, k.jsx)(n(95582).A, {
                            focused: !1,
                            disabled: !0,
                            icon: (0, k.jsx)(n(795830).P, {
                                style: ek.skeletonIcon
                            }),
                            title: (0, k.jsx)(n(795830).P, {
                                style: ek.skeletonTitle
                            })
                        }, `skeleton-function-${t}`))]
                    }),
                    items: []
                }];
                return (0, k.jsx)(n(747369).A, { ...e,
                    scrollerStyle: ek.menu,
                    children: (0, k.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        priority: 1,
                        store: (0, n(682985).uB)(void 0, n(419110).$),
                        sections: t
                    })
                })
            }

            function eI(e) {
                let {
                    isLoading: t,
                    isAssistantGenerating: n,
                    setInfoHelper: o
                } = e;
                return ((0, i.useEffect)(() => {
                    t && o(void 0)
                }, [t, n, o]), t) ? (0, k.jsx)(eT, {}) : (0, k.jsx)(ej, { ...e
                })
            }
            let eC = {
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    position: "absolute",
                    marginBottom: 2
                },
                eM = {
                    paddingTop: 6,
                    paddingBottom: 2
                };

            function ej(e) {
                let t, {
                        store: o,
                        selection: r,
                        cursorEditorInfo: a,
                        cursorEditorInfoRef: l,
                        context: s,
                        onChange: u,
                        getRecordModel: d,
                        setInfoHelper: p,
                        isAssistantGenerating: c
                    } = e,
                    m = (0, n(109939).tz)(),
                    y = (0, n(682985).uB)(void 0, n(419110).$),
                    {
                        sections: f,
                        orderedCompletions: g
                    } = (0, i.useMemo)(() => {
                        let e = n(381453).$z((null == a ? void 0 : a.completions) ? ? [], "kind"),
                            t = [],
                            i = [],
                            f = 0;
                        return Object.entries(e).forEach(([e, a]) => {
                            if (e === et().FormulaEditorInfoCompletionKind.LibraryFunction.toString()) {
                                let e = {};
                                for (let t of a) {
                                    let n = t.kind === et().FormulaEditorInfoCompletionKind.LibraryFunction && ei().u_[t.libraryFunction.name] || "generic";
                                    e[n] || (e[n] = []), e[n].push(t)
                                }(0, n(722371).objectKeys)(e).filter(e => "internal" !== e).sort((e, t) => {
                                    let n = ev.indexOf(e),
                                        i = ev.indexOf(t);
                                    return -1 !== n && -1 !== i ? n - i : -1 !== n ? -1 : -1 !== i ? 1 : e.localeCompare(t)
                                }).forEach(a => {
                                    let g = f++,
                                        h = e[a],
                                        x = (null == h ? void 0 : h.map((e, t) => {
                                            let n = i.length;
                                            return i.push(e), {
                                                key: `${a}-${t}`,
                                                render: i => (0, k.jsx)(eS, { ...i,
                                                    completion: e,
                                                    context: s,
                                                    getRecordModel: d,
                                                    menuListStore: y,
                                                    indexGlobal: n,
                                                    section: g,
                                                    indexLocal: t,
                                                    cursorEditorInfoRef: l,
                                                    setInfoHelper: p,
                                                    isAssistantGenerating: c
                                                }),
                                                action: () => {
                                                    if (!c && void 0 !== e && l.current) {
                                                        var t;
                                                        p({ ...e,
                                                            calledFromUnifiedFunctionProperty: (null == (t = l.current.completionsInfo) ? void 0 : t.type) === "member dot receiver"
                                                        }), eD({
                                                            completion: e,
                                                            store: o,
                                                            selection: r,
                                                            onChange: u,
                                                            cursorEditorInfo: l.current
                                                        })
                                                    }
                                                }
                                            }
                                        })) || [];
                                    t.push({
                                        key: `function-${a}`,
                                        render: e => (0, k.jsx)(n(844565).A, { ...e,
                                            style: eM,
                                            title: m.formatMessage(eH[a])
                                        }),
                                        items: x
                                    })
                                })
                            } else {
                                let g = f++,
                                    h = a.map((t, n) => {
                                        let a = i.length;
                                        return i.push(t), {
                                            key: `${e}-${n}`,
                                            render: e => (0, k.jsx)(eS, { ...e,
                                                completion: t,
                                                context: s,
                                                getRecordModel: d,
                                                menuListStore: y,
                                                indexGlobal: a,
                                                section: g,
                                                indexLocal: n,
                                                cursorEditorInfoRef: l,
                                                setInfoHelper: p,
                                                isAssistantGenerating: c
                                            }),
                                            action: () => {
                                                if (!c && void 0 !== t && l.current) {
                                                    var e;
                                                    p({ ...t,
                                                        calledFromUnifiedFunctionProperty: (null == (e = l.current.completionsInfo) ? void 0 : e.type) === "member dot receiver"
                                                    }), eD({
                                                        completion: t,
                                                        store: o,
                                                        selection: r,
                                                        onChange: u,
                                                        cursorEditorInfo: l.current
                                                    })
                                                }
                                            }
                                        }
                                    });
                                t.push({
                                    key: e,
                                    render: t => (0, k.jsx)(n(844565).A, { ...t,
                                        style: eM,
                                        title: m.formatMessage(eV[e])
                                    }),
                                    items: h
                                })
                            }
                        }), {
                            sections: t,
                            orderedCompletions: i
                        }
                    }, [s, null == a ? void 0 : a.completions, l, d, m, c, y, u, r, p, o]),
                    h = (0, i.useCallback)(e => {
                        if (!n(986939).A.isMobile) {
                            var t;
                            p({ ...e,
                                calledFromUnifiedFunctionProperty: (null == (t = l.current) || null == (t = t.completionsInfo) ? void 0 : t.type) === "member dot receiver"
                            })
                        }
                    }, [l, p]),
                    x = (0, i.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = void 0 !== e.indexGlobal ? g[e.indexGlobal] : void 0;
                        t && h(t)
                    }, [g, h]),
                    b = (0, n(682985).K8)(() => y.state.focus.indexGlobal, [y]);
                return (0, i.useEffect)(() => {
                    var e, t, i, o;
                    if (n(986939).A.isMobile) return;
                    let r = void 0 !== b ? g[b] : void 0;
                    if (r) return void h(r);
                    let l = (null == a || null == (e = a.callParameter) || null == (e = e.expression) || null == (e = e.type) ? void 0 : e.type) === "function" ? null == (t = a.callParameter.expression) ? void 0 : t.type : void 0;
                    void 0 !== l && (null == a || null == (i = a.callParameter) ? void 0 : i.parameterIndex) !== void 0 && (null == a || null == (o = a.callParameter) ? void 0 : o.parameterIndex) > -1 && p({
                        kind: et().FormulaEditorInfoCompletionKind.LibraryFunction,
                        libraryFunction: l.libraryFunction,
                        calledFromUnifiedFunctionProperty: l.calledFromUnifiedFunctionProperty
                    })
                }, [a, b, g, h, p]), (0, i.useEffect)(() => {
                    f.length > 0 && y.update(e => ({
                        focus: { ...e,
                            section: 0,
                            indexLocal: 0,
                            indexGlobal: 0,
                            footerFocused: !1
                        }
                    }))
                }, [f.length, y, p]), t = n(986939).A.isMobile ? {
                    menuType: n(649476).gu.Modal,
                    forceFullScreenSlideUp: !0,
                    hideMobileTopbar: !0
                } : {
                    menuType: n(649476).gu.Popup,
                    width: 228,
                    minWidth: 228,
                    maxWidth: 228
                }, (0, k.jsx)(n(747369).A, { ...t,
                    scrollerStyle: eC,
                    children: (0, k.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        store: y,
                        onKeyboardArrow: x,
                        disableCommandEnter: !0,
                        disableInitialScroll: !0,
                        sections: n(381453).oE([...f, 0 === f.length && {
                            key: "no-results",
                            render: e => (0, k.jsx)(n(844565).A, { ...e,
                                disableDesktopPadding: !0,
                                style: eM,
                                children: (0, k.jsx)(eR, {})
                            }),
                            items: []
                        }])
                    })
                })
            }
            let eP = {
                    icon: {
                        width: n(104509).Ev.sm,
                        fill: n(632079).Tj.icon.secondary
                    },
                    mobileQuestionMarkIcon: {
                        width: 28,
                        height: 28,
                        fill: n(632079).Tj.icon.tertiary
                    },
                    lightParentheses: {
                        color: n(632079).Tj.text.tertiary
                    },
                    style0: {
                        width: 32,
                        height: 32
                    },
                    style1: {
                        padding: 4
                    },
                    style2: {
                        paddingTop: 16,
                        paddingBottom: 16
                    }
                },
                eS = i.forwardRef(function(e, t) {
                    let {
                        completion: o,
                        context: r,
                        getRecordModel: a,
                        menuListStore: l,
                        indexGlobal: s,
                        section: u,
                        indexLocal: d,
                        cursorEditorInfoRef: p,
                        setInfoHelper: c,
                        isAssistantGenerating: m,
                        onMouseEnter: y,
                        ...f
                    } = e, g = (0, n(960253).I)(() => ({
                        text: {
                            color: m ? n(632079).Tj.text.secondary : n(632079).Tj.text.primary
                        },
                        menuItem: {
                            cursor: m ? "default" : "pointer",
                            direction: "ltr"
                        }
                    }), [m]), h = (0, i.useCallback)(e => {
                        n(986939).A.isMobile || l.update(() => ({
                            focus: {
                                indexGlobal: s,
                                indexLocal: d,
                                section: u,
                                footerFocused: !1
                            }
                        })), null == y || y(e)
                    }, [s, d, u, l, y]), x = (0, n(682985).K8)(() => l.state.focus.indexGlobal === s, [l, s]), b = (0, n(109939).tz)(), v = (0, i.useMemo)(() => n(986939).A.isMobile ? (0, k.jsx)(n(656252).A, {
                        popupType: n(656252).z.BottomSheet,
                        content: e => {
                            var t;
                            let i;
                            return i = n(986939).A.isMobile ? {
                                menuType: n(649476).gu.Modal,
                                title: (0, k.jsx)(n(109939).sA, {
                                    defaultMessage: "Documentation",
                                    id: "database.formulaPropertyEntryMenuItem.title"
                                }),
                                right: (0, k.jsx)(n(109939).sA, { ...n(789722).W.done
                                }),
                                onClickRight: e.close
                            } : {
                                menuType: n(649476).gu.Popup
                            }, (0, k.jsx)(n(747369).A, { ...i,
                                children: (0, k.jsx)(n(844565).A, {
                                    children: (0, k.jsx)(n(636518).Ay, {
                                        title: (0, k.jsx)(eu, {
                                            infoHelper: { ...o,
                                                calledFromUnifiedFunctionProperty: (null == p || null == (t = p.current) || null == (t = t.completionsInfo) ? void 0 : t.type) === "member dot receiver"
                                            },
                                            getRecordModel: a,
                                            style: eP.style1,
                                            typecheckContextValues: r.valueTypes,
                                            isLoading: !1
                                        }),
                                        style: eP.style2
                                    })
                                })
                            })
                        },
                        children: e => (0, k.jsx)(n(374533).A, { ...e,
                            ariaLabel: b.formatMessage(eb.showDocumentation),
                            iconStyle: eP.mobileQuestionMarkIcon,
                            style: eP.style0,
                            icon: n(80094).questionMarkCircleIcon
                        })
                    }) : (0, k.jsx)(ew, {
                        visible: x && !m
                    }), [o, r.valueTypes, p, a, x, m, b]), T = (0, n(682985).K8)(() => {
                        var e;
                        if (o.kind !== et().FormulaEditorInfoCompletionKind.Token || o.token.type !== et().FormulaTokenType.BlockProperty || !a) return;
                        if (et().FormulaTokenSupportedBlockSystemPropertyList.includes(o.token.property)) return o.token.property;
                        if ((0, n(297493).ix)(o.token) || !o.token.collection) return;
                        let t = (0, n(297493).Yi)(o.token.property),
                            i = a(o.token.collection),
                            r = null == i ? void 0 : i.getNormalizedSchema(a);
                        return null == r || null == (e = r[t]) ? void 0 : e.type
                    }, [o, a]);
                    if (o.kind === et().FormulaEditorInfoCompletionKind.Token)
                        if (o.token.type === et().FormulaTokenType.Checkbox) return null;
                        else if (o.token.type === et().FormulaTokenType.BlockProperty) return (0, k.jsx)(n(95582).A, { ...f,
                        icon: T ? n(221535).LE[T](eP.icon) : (0, k.jsx)(e_, {
                            type: "unknown"
                        }),
                        title: (0, k.jsx)("span", {
                            style: g.text,
                            children: o.name ? ? o.token.property
                        }),
                        right: v,
                        onMouseEnter: h,
                        onMouseDown: e => {
                            e.preventDefault()
                        },
                        style: g.menuItem,
                        ref: t
                    });
                    else if (o.token.type === et().FormulaTokenType.ContextValue) {
                        let e = (0, n(297493).IV)(r.valueTypes, (0, n(297493).GH)(o.token.valueId));
                        return e ? (0, k.jsx)(n(95582).A, { ...f,
                            icon: (0, k.jsx)(eF, {
                                contextValue: e
                            }),
                            title: (0, k.jsx)(n(4458).fI, {
                                children: (0, k.jsx)("span", {
                                    style: g.text,
                                    children: e.name
                                })
                            }),
                            right: v,
                            onMouseEnter: h,
                            style: g.menuItem,
                            ref: t
                        }) : null
                    } else {
                        if (o.token.type === et().FormulaTokenType.Date || o.token.type === et().FormulaTokenType.Block || o.token.type === et().FormulaTokenType.Person) return null;
                        (0, n(722371).HB)(o.token)
                    } else if (o.kind === et().FormulaEditorInfoCompletionKind.LibraryFunction) {
                        let e = o.libraryFunction.returnType;
                        return (0, k.jsx)(n(95582).A, { ...f,
                            icon: (0, k.jsx)(e_, {
                                type: "function" == typeof e ? e([]).type : e.type
                            }),
                            title: (0, k.jsxs)(k.Fragment, {
                                children: [(0, k.jsx)("span", {
                                    style: g.text,
                                    children: o.libraryFunction.name
                                }), (0, k.jsx)("span", {
                                    style: eP.lightParentheses,
                                    children: "()"
                                })]
                            }),
                            right: v,
                            onMouseEnter: h,
                            style: g.menuItem,
                            ref: t
                        })
                    } else {
                        if (o.kind === et().FormulaEditorInfoCompletionKind.Builtin) return (0, k.jsx)(n(95582).A, { ...f,
                            title: (0, k.jsx)("span", {
                                style: g.text,
                                children: o.builtin
                            }),
                            icon: (0, k.jsx)(e_, {
                                type: en[o.builtin].type.type
                            }),
                            right: v,
                            onMouseEnter: h,
                            style: g.menuItem,
                            ref: t
                        });
                        if (o.kind === et().FormulaEditorInfoCompletionKind.Binding) return (0, k.jsx)(n(95582).A, { ...f,
                            title: (0, k.jsx)("span", {
                                style: g.text,
                                children: o.text
                            }),
                            icon: (0, k.jsx)(e_, {
                                type: o.type.type
                            }),
                            right: v,
                            onMouseEnter: h,
                            style: g.menuItem,
                            ref: t
                        });
                        (0, n(722371).HB)(o)
                    }
                }),
                ew = i.memo(function({
                    visible: e
                }) {
                    let t = (0, n(960253).I)(() => ({
                        icon: {
                            transition: "opacity 50ms 200ms",
                            visibility: e ? "visible" : "hidden",
                            opacity: +!!e
                        }
                    }), [e]);
                    return (0, k.jsx)(n(16275).I, {
                        icon: n(116789).o,
                        size: "xs",
                        colorVariant: "secondary",
                        style: t.icon
                    })
                }),
                eA = {
                    icon: {
                        width: n(104509).Ev.sm,
                        fill: n(632079).Tj.icon.secondary,
                        transition: "transform .3s ease"
                    }
                },
                e_ = i.memo(function({
                    type: e
                }) {
                    var t;
                    return null == (t = eB(e)) ? void 0 : t(eA.icon)
                }),
                eE = {
                    stepNumber: {
                        color: n(632079).Tj.icon.secondary
                    }
                };

            function eF(e) {
                let {
                    contextValue: t
                } = e;
                return (0, n(722371).O9)(t.stepNumberForDisplay) ? (0, k.jsx)(n(550224).Q, {
                    size: n(24081).H.Small,
                    number: t.stepNumberForDisplay,
                    style: eE.stepNumber
                }) : (0, k.jsx)(e_, {
                    type: t.type.type
                })
            }

            function eB(e) {
                return "text" === e ? n(221535).LE.text : "number" === e ? n(221535).LE.number : "checkbox" === e ? n(221535).LE.checkbox : "date" === e ? n(221535).LE.date : "block" === e ? n(221535).LE.relation : "person" === e ? n(221535).LE.person : "select" === e ? n(221535).LE.select : "array" === e ? n(221535).LE.multi_select : "function" === e || void 0 === e || "unknown" === e || "undefined" === e ? n(221535).LE.formula : void(0, n(722371).HB)(e)
            }

            function eR() {
                return (0, k.jsx)(n(320819).A, {
                    caption: (0, k.jsx)(n(109939).sA, {
                        defaultMessage: "No results",
                        id: "FormulaAutocompleteMenu.noResults.message"
                    })
                })
            }

            function eD(e) {
                var t, i, o, a, l;
                let {
                    completion: s,
                    store: u,
                    selection: d,
                    onChange: p,
                    cursorEditorInfo: c
                } = e, m = (null == d ? void 0 : d.startIndex) || 0, y = (null == d ? void 0 : d.endIndex) || 0, f = m !== y, g = (null == (t = c.completionsInfo) ? void 0 : t.type) === "member dot receiver", h = (c.nodePath ? ? []).at(-1), x = (0, n(208023).canAcceptAutocompletionsWithoutDot)({
                    nodeAtPosition: h,
                    dotMemberExpression: g
                }), b = (null == (i = c.completionsInfo) ? void 0 : i.prefix) || "", v = "overridePrefixLength" in s ? s.overridePrefixLength ? ? 0 : b.length, k = f ? m : y - v, T = u.getValue();
                if (s.kind === et().FormulaEditorInfoCompletionKind.Token)
                    if (s.token.type === et().FormulaTokenType.Checkbox);
                    else if (s.token.type === et().FormulaTokenType.BlockProperty) {
                    if ((0, n(297493).ix)(s.token)) return;
                    let e = (0, r().lzV)(T, k, y),
                        t = s.token.collection ? (0, n(297493).Yi)(s.token.property) : s.token.property,
                        i = (0, r().wmz)((0, r().ESw)({
                            collection: s.token.collection,
                            property: t,
                            name: s.name
                        })),
                        o = (0, r().xym)(e, x ? [
                            ["."], i
                        ] : [i], k),
                        a = k + +!!x + 1;
                    p({
                        newValue: o,
                        newSelection: {
                            startIndex: a,
                            endIndex: a
                        }
                    })
                } else if (s.token.type === et().FormulaTokenType.ContextValue) {
                    let e = (0, r().lzV)(T, k, y),
                        t = (0, n(297493).GH)(s.token.valueId),
                        i = (0, r().wmz)((0, r().CA$)({
                            id: t
                        }));
                    p({
                        newValue: (0, r().xym)(e, x ? [
                            ["."], i
                        ] : [i], k),
                        newSelection: {
                            startIndex: k + 1,
                            endIndex: k + 1
                        }
                    })
                } else s.token.type === et().FormulaTokenType.Date || s.token.type === et().FormulaTokenType.Block || s.token.type === et().FormulaTokenType.Person || (0, n(722371).HB)(s.token);
                else if (s.kind === et().FormulaEditorInfoCompletionKind.LibraryFunction) {
                    let e = (0, r().lzV)(T, k, y),
                        t = (0, r().Ey_)(`${s.libraryFunction.name}()`, []),
                        n = (0, r().xym)(e, x ? [
                            ["."], t
                        ] : [t], k),
                        i = k + s.libraryFunction.name.length + 1;
                    x && (i += 1), (null == (o = s.libraryFunction) || null == (o = o.parameters) ? void 0 : o.varargs) === void 0 && (!(null != (a = s.libraryFunction) && null != (a = a.parameters) && null != (a = a.expected) && a.length) || (null == (l = s.libraryFunction) || null == (l = l.parameters) || null == (l = l.expected) ? void 0 : l.length) === 1 && g) && (i += 1), p({
                        newValue: n,
                        newSelection: {
                            startIndex: i,
                            endIndex: i
                        }
                    })
                } else if (s.kind === et().FormulaEditorInfoCompletionKind.Binding || s.kind === et().FormulaEditorInfoCompletionKind.Builtin) {
                    let e = (0, r().lzV)(T, k, y),
                        t = "";
                    s.kind === et().FormulaEditorInfoCompletionKind.Binding ? t = s.text : s.kind === et().FormulaEditorInfoCompletionKind.Builtin ? (t = s.builtin, ((null == h ? void 0 : h.kind) !== n(944897).NM.Call || g) && (void 0 !== h && h.kind !== n(944897).NM.RecoveryNode && (t = " " + t), t += " ")) : (0, n(722371).HB)(s);
                    let i = (0, r().Ey_)(t, []),
                        o = (0, r().xym)(e, [i], k),
                        a = k + t.length;
                    p({
                        newValue: o,
                        newSelection: {
                            startIndex: a,
                            endIndex: a
                        }
                    })
                } else(0, n(722371).HB)(s)
            }
            let eN = (0, n(109939).YK)({
                    [et().FormulaEditorInfoCompletionKind.Token]: {
                        defaultMessage: "Properties",
                        id: "formulaAutocompleteMenu.token.message"
                    },
                    [et().FormulaEditorInfoCompletionKind.LibraryFunction]: {
                        defaultMessage: "Functions",
                        id: "formulaAutocompleteMenu.function.message"
                    },
                    [et().FormulaEditorInfoCompletionKind.Binding]: {
                        defaultMessage: "Variables",
                        id: "formulaAutocompleteMenu.variables.message"
                    },
                    [et().FormulaEditorInfoCompletionKind.Builtin]: {
                        defaultMessage: "Built-ins",
                        id: "formulaAutocompleteMenu.builtin.message"
                    }
                }),
                eV = {
                    [et().FormulaEditorInfoCompletionKind.Token]: eN[et().FormulaEditorInfoCompletionKind.Token],
                    [et().FormulaEditorInfoCompletionKind.LibraryFunction]: eN[et().FormulaEditorInfoCompletionKind.LibraryFunction],
                    [et().FormulaEditorInfoCompletionKind.Binding]: eN[et().FormulaEditorInfoCompletionKind.Binding],
                    [et().FormulaEditorInfoCompletionKind.Builtin]: eN[et().FormulaEditorInfoCompletionKind.Builtin]
                },
                eL = (0, n(109939).YK)({
                    conditional: {
                        defaultMessage: "Conditional",
                        id: "formulaAutocompleteMenu.category.conditional.message"
                    },
                    text: {
                        defaultMessage: "Text",
                        id: "formulaAutocompleteMenu.category.text.message"
                    },
                    number: {
                        defaultMessage: "Number",
                        id: "formulaAutocompleteMenu.category.number.message"
                    },
                    date: {
                        defaultMessage: "Date",
                        id: "formulaAutocompleteMenu.category.date.message"
                    },
                    people: {
                        defaultMessage: "People",
                        id: "formulaAutocompleteMenu.category.people.message"
                    },
                    list: {
                        defaultMessage: "List",
                        id: "formulaAutocompleteMenu.category.list.message"
                    },
                    generic: {
                        defaultMessage: "General",
                        id: "formulaAutocompleteMenu.category.generic.message"
                    },
                    variable: {
                        defaultMessage: "Variable",
                        id: "formulaAutocompleteMenu.category.variable.message"
                    },
                    special: {
                        defaultMessage: "Special",
                        id: "formulaAutocompleteMenu.category.special.message"
                    },
                    internal: {
                        defaultMessage: "Internal",
                        id: "formulaAutocompleteMenu.category.internal.message"
                    }
                }),
                eH = {
                    conditional: eL.conditional,
                    text: eL.text,
                    number: eL.number,
                    date: eL.date,
                    people: eL.people,
                    list: eL.list,
                    generic: eL.generic,
                    variable: eL.variable,
                    special: eL.special,
                    internal: eL.internal
                };
            n(823215);
            var eK = () => n(546605);
            let eU = new(a()).R({
                    key: "formulas_show_structure",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                ez = {
                    marginInlineEnd: 2
                };

            function eY({
                values: e,
                blockStore: t,
                formulaSchema: i,
                shouldTruncate: o,
                showNestedStructure: r
            }) {
                let a = (0, n(960253).I)(() => ({
                        moreIndicator: {
                            color: n(632079).Tj.text.secondary,
                            opacity: .5,
                            fontSize: r ? 12 : 14
                        }
                    }), [r]),
                    l = e.length > 5,
                    s = l ? e.slice(0, 3) : e,
                    u = l ? e.length - 4 : 0,
                    d = l ? e[e.length - 1] : void 0;
                return (0, k.jsxs)(k.Fragment, {
                    children: [s.map((e, n) => (0, k.jsx)(eQ, {
                        value: e,
                        withComma: l || n < s.length - 1,
                        blockStore: t,
                        formulaSchema: i,
                        renderWrapper: !1,
                        shouldTruncate: o,
                        showNestedStructure: r
                    }, n)), l && d ? (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsxs)("span", {
                            children: [(0, k.jsxs)("span", {
                                style: a.moreIndicator,
                                children: ["... (", (0, k.jsx)(n(109939).sA, {
                                    defaultMessage: "{count} items",
                                    id: "formula.preview.truncatedItems.message",
                                    values: {
                                        count: u
                                    }
                                }), ")"]
                            }), (0, k.jsx)("span", {
                                style: ez,
                                children: ", "
                            })]
                        }), (0, k.jsx)(eQ, {
                            value: d,
                            withComma: !1,
                            blockStore: t,
                            formulaSchema: i,
                            renderWrapper: !1,
                            shouldTruncate: o,
                            showNestedStructure: r
                        }, "last")]
                    }) : void 0]
                })
            }
            let eW = {
                    marginInlineStart: 2
                },
                eO = {
                    marginInlineEnd: 2
                },
                e$ = {
                    marginInlineEnd: 2
                },
                eG = {
                    opacity: .5,
                    marginInlineStart: 4,
                    fontSize: 8
                },
                eq = {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textWrap: "wrap",
                    wordBreak: "break-word"
                };

            function eQ({
                value: e,
                withComma: t,
                blockStore: o,
                formulaSchema: a,
                renderWrapper: l,
                shouldTruncate: s,
                showNestedStructure: u
            }) {
                let d, [p, c] = (0, n(682985).K8)(() => {
                        var t;
                        if (!e) return [
                            [], "text"
                        ];
                        if ("undefined" === e.type && u) return [
                            [n(531070).Or], "empty"
                        ];
                        let i = (0, n(352711).O)(e, o.getRecordModel, (0, n(714350).P)());
                        u && (i = i.map(e => {
                            if ("text" === e.type && e.value) {
                                let t = e.value.map(e => (0, r().bHQ)(e) ? [eJ((0, r().N8A)(e))] : (0, r().BEe)(e) ? [eJ((0, r().N8A)(e)), e[1]] : e);
                                return { ...e,
                                    value: t
                                }
                            }
                            return e
                        }));
                        let a = (null == (t = i[0]) ? void 0 : t.type) ? ? "text";
                        return [i, a]
                    }, [o.getRecordModel, e, u]),
                    m = (0, n(960253).I)(() => ({
                        formulaPreview: {
                            color: n(632079).Tj.text.secondary,
                            fontSize: u ? 12 : 14,
                            fontFamily: u ? n(699422).Tf.githubMono : void 0,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6 * !u,
                            ...s ? n(699422).RC : {}
                        }
                    }), [s, u]);
                if ("array" === e.type) d = (0, k.jsxs)("span", {
                    style: m.formulaPreview,
                    children: [u ? (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)("span", {
                            style: eO,
                            children: "["
                        }), (0, k.jsx)(eY, {
                            values: e.values,
                            blockStore: o,
                            formulaSchema: a,
                            shouldTruncate: s,
                            showNestedStructure: u
                        }), (0, k.jsx)("span", {
                            style: eW,
                            children: "]"
                        }), (0, k.jsx)("span", {
                            style: eG,
                            children: `list(${e.values.length})`
                        })]
                    }) : (0, k.jsx)(eY, {
                        values: e.values,
                        blockStore: o,
                        formulaSchema: a,
                        shouldTruncate: s,
                        showNestedStructure: u
                    }), t ? (0, k.jsx)("span", {
                        style: e$,
                        children: ", "
                    }) : void 0]
                });
                else {
                    let e = t && !u && (0, n(531070).GL)(c, a);
                    d = null == p ? void 0 : p.map((r, l) => (0, k.jsxs)(i.Fragment, {
                        children: [(0, k.jsxs)("span", {
                            style: m.formulaPreview,
                            children: [(0, k.jsx)(n(531070).yZ, {
                                token: r,
                                targetPropertySchema: a,
                                blockStore: o,
                                withComma: e,
                                numberRightAlign: !1,
                                disableLinks: !1,
                                shouldTruncate: s
                            }), u && eZ(r) ? (0, k.jsx)("span", {
                                style: eG,
                                children: eZ(r)
                            }) : null]
                        }), u && t ? (0, k.jsx)("span", {
                            style: e$,
                            children: ", "
                        }) : null]
                    }, `${r.id}-${l}`))
                }
                return l ? (0, k.jsx)(n(531070).Ye, {
                    propertyType: c,
                    rootPropertySchema: a,
                    numberRightAlign: !1,
                    children: d
                }) : (0, k.jsx)("div", {
                    style: eq,
                    children: d
                })
            }

            function eZ(e) {
                switch (e.type) {
                    case "text":
                    case "url":
                    case "email":
                    case "phone_number":
                        return `text(${(0,r().AhH)(e.value)})`;
                    case "select":
                        return `text(${e.value})`;
                    case "number":
                        return "num";
                    case "date":
                        return "date";
                    case "checkbox":
                    case "person":
                    case "empty":
                    case "relation":
                    case "file":
                    case "error":
                        return null;
                    default:
                        return (0, n(722371).HB)(e)
                }
            }

            function eJ(e) {
                return e.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r")
            }

            function eX(e) {
                let t = (0, n(682985).O$)(eU);
                return e || (t ? ? !1)
            }
            let e0 = {
                outputContainerWrapper: {
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 1,
                    width: "100%",
                    textWrap: "nowrap",
                    gap: 8,
                    padding: 16,
                    borderTop: `1px solid ${n(632079).Tj.border.primary}`
                },
                contentContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    zIndex: 1,
                    minHeight: 24,
                    width: "100%",
                    gap: 4
                },
                headerContainer: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                    opacity: .8,
                    minHeight: 24
                }
            };

            function e5({
                isLoading: e,
                hasErrors: t,
                hasWarnings: n,
                debouncedErrorMessagesWithRange: i,
                formulaResult: o,
                returnType: r,
                formulaSchema: a,
                collectionStore: l,
                selectedBlockStore: s,
                setSelectedBlockStore: u,
                showFixWithAiButton: d,
                isAiGenerating: p,
                onFixWithAi: c
            }) {
                let m = eX(void 0 === l);
                return (0, k.jsxs)("div", {
                    style: e0.outputContainerWrapper,
                    children: [(0, k.jsx)("div", {
                        style: e0.headerContainer,
                        children: e ? (0, k.jsx)(tu, {
                            showDropdown: void 0 !== l
                        }) : (0, k.jsx)(e4, {
                            collectionStore: l,
                            selectedBlockStore: s,
                            setSelectedBlockStore: u
                        })
                    }), (0, k.jsx)("div", {
                        style: e0.contentContainer,
                        children: e ? (0, k.jsx)(ti, {}) : (0, k.jsx)(e9, {
                            selectedBlockStore: s,
                            hasErrors: t,
                            hasWarnings: n,
                            debouncedErrorMessagesWithRange: i,
                            formulaResult: o,
                            returnType: r,
                            formulaSchema: a,
                            isDebugMode: m,
                            showFixWithAiButton: d,
                            isAiGenerating: p,
                            onFixWithAi: c
                        })
                    })]
                })
            }
            let e1 = {
                outputContainer: {
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 6,
                    position: "relative",
                    width: "100%",
                    overflow: "hidden"
                },
                badgeStyle: {
                    display: "flex",
                    height: 20,
                    padding: "2px 5px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                    background: n(632079).Tj.gray.background.secondaryTranslucent,
                    marginInlineStart: 0,
                    alignSelf: "flex-start"
                }
            };

            function e9({
                selectedBlockStore: e,
                hasErrors: t,
                hasWarnings: o,
                debouncedErrorMessagesWithRange: r,
                formulaResult: a,
                returnType: l,
                formulaSchema: s,
                isDebugMode: u,
                showFixWithAiButton: d,
                isAiGenerating: p,
                onFixWithAi: c
            }) {
                let m = (0, n(109939).tz)(),
                    y = m.formatMessage({
                        id: "formulas.editor.type",
                        defaultMessage: "Type: "
                    }),
                    f = m.formatMessage({
                        id: "formulas.editor.valid",
                        defaultMessage: "Valid"
                    }),
                    g = (0, i.useMemo)(() => l ? (0, n(345091).getHumanReadableType)(l) : n(649210).qY.unknown, [l]),
                    h = r.filter(e => "error" === e.severity),
                    x = r.filter(e => "warning" === e.severity);
                if (t) return (0, k.jsxs)(n(4458).VP, {
                    gap: 4,
                    width: "100%",
                    children: [h.length > 0 ? (0, k.jsx)(e6, {
                        errorMessagesWithRange: h
                    }) : (0, k.jsx)(ti, {}), o && x.length > 0 && u ? (0, k.jsx)(e6, {
                        errorMessagesWithRange: x
                    }) : void 0, d && c ? (0, k.jsx)(tp, {
                        onClick: c,
                        disabled: p
                    }) : void 0]
                });
                let b = e && s;
                return (0, k.jsxs)(n(4458).VP, {
                    gap: 4,
                    width: "100%",
                    children: [(0, k.jsxs)("div", {
                        style: e1.outputContainer,
                        children: [b ? (0, k.jsx)(e8, {
                            formulaResult: a,
                            formulaSchema: s,
                            selectedBlockStore: e
                        }) : o ? void 0 : (0, k.jsx)("div", {
                            children: (0, k.jsx)(n(111010).D, {
                                as: "span",
                                styleKey: "bodyRegular",
                                colorPalette: "green",
                                colorVariant: "secondary",
                                children: f
                            })
                        }), (0, k.jsx)(n(746434).E, {
                            content: (0, k.jsxs)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                children: [y, (0, k.jsx)(n(109939).sA, { ...g
                                })]
                            }),
                            style: e1.badgeStyle
                        })]
                    }), o && x.length > 0 && u ? (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(e6, {
                            errorMessagesWithRange: x
                        }), d && c ? (0, k.jsx)(tp, {
                            onClick: c,
                            disabled: p
                        }) : void 0]
                    }) : void 0]
                })
            }

            function e4({
                collectionStore: e,
                selectedBlockStore: t,
                setSelectedBlockStore: i
            }) {
                let o = (0, n(109939).tz)(),
                    r = o.formatMessage({
                        id: "formulas.editor.syntaxValidation",
                        defaultMessage: "Syntax validation"
                    }),
                    a = o.formatMessage({
                        id: "formulas.editor.previewWith",
                        defaultMessage: "Preview with"
                    });
                return (0, k.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 8,
                    children: [(0, k.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0, k.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: e ? a : r
                        }), e ? (0, k.jsx)(n(87490).Y, {
                            selectedBlockStore: t,
                            setSelectedBlockStore: i,
                            collectionStore: e
                        }) : void 0]
                    }), e ? (0, k.jsx)(td, {}) : void 0]
                })
            }
            let e2 = {
                maxWidth: "100%",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: 8
            };

            function e8({
                formulaResult: e,
                formulaSchema: t,
                selectedBlockStore: o
            }) {
                let r = (0, n(109939).tz)().formatMessage({
                        id: "formulas.editor.empty",
                        defaultMessage: "No output"
                    }),
                    a = (0, n(682985).K8)(() => (function e(t) {
                        return !t || "undefined" === t.type || ("text" === t.type ? 0 === (0, n(536614).r4)(t.value, o).trim().length : "array" === t.type && (0 === t.values.length || t.values.every(e)))
                    })(e), [e, o]),
                    l = (0, n(682985).K8)(() => eU.state ? ? !1, []),
                    s = (0, i.useMemo)(() => ({
                        baseStyles: {
                            sizing: "small",
                            tokenFormat: n(696654).NY.Medium,
                            tokenWrapStyle: {
                                display: "flex",
                                flexWrap: "wrap",
                                overflow: "hidden",
                                ...n(642065).Cn[n(696654).NY.Medium]
                            },
                            textStyle: {
                                overflow: "hidden"
                            }
                        },
                        store: o,
                        isEmptyStore: eK().Store.createValue(!1),
                        canEdit: !1,
                        disabled: !1,
                        shouldRenderTooltip: !0,
                        shouldWrap: !0,
                        collectionContextStore: void 0,
                        templateVariableContext: void 0,
                        property: void 0,
                        propertyFormat: void 0,
                        propertySchema: t,
                        trackEditBlockProperty: () => {},
                        surface: "table",
                        containerRef: null,
                        collectionSchemaStore: eK().Store.createValue(void 0)
                    }), [o, t]);
                return !e || a ? (0, k.jsx)("div", {
                    children: (0, k.jsx)(n(111010).D, {
                        as: "span",
                        styleKey: "bodyRegular",
                        colorVariant: "tertiary",
                        children: r
                    })
                }) : (0, k.jsx)("div", {
                    style: e2,
                    children: (0, k.jsx)(n(422575).L8.Provider, {
                        value: s,
                        children: (0, k.jsx)(eQ, {
                            showNestedStructure: l,
                            value: e,
                            withComma: !1,
                            blockStore: o,
                            formulaSchema: t,
                            renderWrapper: !0,
                            shouldTruncate: !0
                        })
                    })
                })
            }
            let e3 = n(986939).A.isMobile ? 2 : 3;

            function e6({
                errorMessagesWithRange: e
            }) {
                return (0, k.jsx)(k.Fragment, {
                    children: e.slice(0, e3).map((e, t) => (0, k.jsx)(e7, {
                        errorMessageWithRange: e
                    }, t))
                })
            }

            function e7({
                errorMessageWithRange: e
            }) {
                let {
                    msg: t,
                    range: i,
                    severity: o,
                    helpLink: r
                } = e, a = (0, n(109939).tz)(), l = "warning" === o ? "yellow" : "red", s = i ? ` [${i.startIndex},${i.endIndex}]` : "";
                return (0, k.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    children: [(0, k.jsxs)("div", {
                        children: [(0, k.jsx)(n(111010).D, {
                            as: "span",
                            styleKey: "bodyRegular",
                            colorPalette: l,
                            colorVariant: "accentPrimary",
                            children: t
                        }), (0, k.jsx)(n(111010).D, {
                            as: "span",
                            styleKey: "bodyRegular",
                            colorPalette: l,
                            colorVariant: "secondary",
                            children: s
                        })]
                    }), r ? (0, k.jsx)(n(51831).m, {
                        placement: "top",
                        content: () => a.formatMessage({
                            id: "formulas.editor.learnMore",
                            defaultMessage: "Learn more"
                        }),
                        children: e => (0, k.jsx)(n(374533).A, { ...e,
                            icon: n(80094).questionMarkCircleIcon,
                            onClick: () => window.open(r, "_blank", "noopener,noreferrer"),
                            size: "sm",
                            colorPalette: l,
                            colorVariant: "accentPrimary",
                            ariaLabel: a.formatMessage({
                                id: "formulas.editor.helpLink",
                                defaultMessage: "Help"
                            })
                        })
                    }) : void 0]
                })
            }
            let te = {
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 6,
                    position: "relative",
                    width: "100%",
                    overflow: "hidden"
                },
                tt = {
                    height: 16,
                    borderRadius: 4,
                    flex: 1
                },
                tn = {
                    height: 20,
                    width: 80,
                    borderRadius: 6
                };

            function ti() {
                return (0, k.jsxs)("div", {
                    style: te,
                    children: [(0, k.jsx)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50%",
                        children: (0, k.jsx)(n(795830).P, {
                            style: tt
                        })
                    }), (0, k.jsx)(n(795830).P, {
                        style: tn
                    })]
                })
            }
            let to = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 8,
                    opacity: .8,
                    height: 24
                },
                tr = {
                    height: 14,
                    width: 80,
                    borderRadius: 4
                },
                ta = {
                    height: 16,
                    width: 80,
                    borderRadius: 6
                },
                tl = {
                    height: 16,
                    width: 32,
                    borderRadius: 8
                },
                ts = {
                    height: 16,
                    width: 90,
                    borderRadius: 4
                };

            function tu({
                showDropdown: e
            }) {
                return (0, k.jsxs)("div", {
                    style: to,
                    children: [(0, k.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0, k.jsx)(n(795830).P, {
                            style: tr
                        }), e ? (0, k.jsx)(n(795830).P, {
                            style: ta
                        }) : void 0]
                    }), e ? (0, k.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, k.jsx)(n(795830).P, {
                            style: tl
                        }), (0, k.jsx)(n(795830).P, {
                            style: ts
                        })]
                    }) : void 0]
                })
            }

            function td() {
                let e = (0, n(682985).K8)(() => eU.state ? ? !1, []),
                    t = (0, n(109939).tz)().formatMessage({
                        id: "formulas.editor.debugMode",
                        defaultMessage: "Debug mode"
                    });
                return (0, k.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 6,
                    children: [(0, k.jsx)(n(354491).d, {
                        on: e,
                        onClick: () => {
                            eU.setState(!e)
                        },
                        "aria-label": t
                    }), (0, k.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: t
                    })]
                })
            }

            function tp({
                onClick: e,
                disabled: t
            }) {
                let i = (0, n(109939).tz)().formatMessage({
                        id: "formulas.editor.fixWithAI",
                        defaultMessage: "Fix with AI"
                    }),
                    o = (0, n(960253).I)(() => ({
                        button: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "4px 8px",
                            borderRadius: 6,
                            backgroundColor: "transparent",
                            border: `1px solid ${n(632079).Tj.border.primary}`,
                            cursor: t ? "not-allowed" : "pointer",
                            height: 26,
                            width: "fit-content",
                            opacity: t ? .5 : 1,
                            marginTop: 4
                        }
                    }), [t]);
                return (0, k.jsx)(n(64960).Ay, {
                    style: o.button,
                    onClick: e,
                    disabled: t,
                    children: (0, k.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "primary",
                        children: i
                    })
                })
            }
            let tc = (0, n(109939).YK)({
                    undoMessage: {
                        defaultMessage: "Undo",
                        id: "database.formula.undoFormulaInput.tooltip"
                    },
                    doneHint: {
                        defaultMessage: "Close",
                        id: "database.formula.closeFormulaInput.tooltip"
                    },
                    cancel: {
                        defaultMessage: "Cancel",
                        id: "formulas.formulaInputHeader.cancel"
                    },
                    close: {
                        id: "formula2Input.close",
                        defaultMessage: "Done"
                    },
                    save: {
                        id: "formula2Input.save",
                        defaultMessage: "Save"
                    },
                    formulaHeader: {
                        id: "formula2Input.EditFormula",
                        defaultMessage: "Edit formula"
                    },
                    learnTooltip: {
                        id: "formula2Input.learnAboutFormulas",
                        defaultMessage: "Learn about formulas!"
                    },
                    discardAllChanges: {
                        id: "formula2Input.discardAllChanges",
                        defaultMessage: "Discard all changes"
                    },
                    revertTooltip: {
                        id: "formula2Input.revertTooltip",
                        defaultMessage: "Reverts to the original formula when first opened."
                    },
                    startLoading: {
                        id: "formula2Input.startLoading",
                        defaultMessage: "Start loading"
                    },
                    stopLoading: {
                        id: "formula2Input.stopLoading",
                        defaultMessage: "Stop loading"
                    }
                }),
                tm = {
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 0,
                    paddingInlineEnd: 0,
                    paddingBottom: 0,
                    paddingInlineStart: 6,
                    gap: 3,
                    height: 24,
                    flex: "none",
                    flexGrow: 1
                },
                ty = {
                    position: "relative"
                };

            function tf(e) {
                let {
                    disabled: t,
                    onClickCancel: i,
                    onClickRevert: o,
                    onClickClose: r,
                    onClickUndo: a,
                    setIsLoading: l,
                    autosave: s = !0,
                    isEdited: u = !1
                } = e;
                return (0, k.jsxs)(n(4458).fI, {
                    style: tm,
                    className: "autolayout-fill-width",
                    children: [i && !t && n(986939).A.isMobile ? (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(n(4458).VP, {
                            style: ty,
                            children: (0, k.jsx)(tg, {
                                onClick: i
                            })
                        }), (0, k.jsx)("div", {
                            style: {
                                flex: "1 1 0",
                                ...ty
                            }
                        })]
                    }) : (0, k.jsx)(n(4458).VP, {
                        style: ty,
                        children: (0, k.jsx)(tv, {
                            setIsLoading: l
                        })
                    }), (0, k.jsx)("div", {
                        style: {
                            flex: "1 1 0",
                            ...ty
                        }
                    }), (0, k.jsxs)(n(4458).fI, {
                        gap: 6,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: ty,
                        children: [a && !t ? (0, k.jsx)(tT, {
                            onClick: a
                        }) : void 0, o && !t ? (0, k.jsx)(tC, {
                            onClick: o
                        }) : void 0, (0, k.jsx)(tx, {
                            onClick: r,
                            autosave: s,
                            isEdited: u
                        })]
                    })]
                })
            }

            function tg(e) {
                let {
                    onClick: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(988022).p, {
                    colorPalette: "gray",
                    size: "sm",
                    onClick: t,
                    children: i.formatMessage(tc.cancel)
                })
            }
            let th = {
                closeButton: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                    background: n(632079).Tj.background.tertiaryTranslucent,
                    width: 24,
                    height: 24
                },
                closeButtonHover: {
                    background: n(632079).Tj.buttonPressedBackground
                },
                doneButton: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 8,
                    gap: 6,
                    width: 52,
                    height: 28,
                    borderRadius: 6,
                    flex: "none",
                    flexGrow: 0
                },
                doneButtonCommandHint: {
                    color: n(632079).Tj.text.inverseSecondary
                }
            };

            function tx(e) {
                let {
                    onClick: t,
                    autosave: i = !0,
                    isEdited: o = !1
                } = e, r = (0, n(109939).tz)(), a = (0, n(533992).v3)();
                return i ? (0, k.jsx)(n(51831).m, {
                    content: () => r.formatMessage(tc.doneHint),
                    children: e => (0, k.jsx)(n(64960).Ay, {
                        onClick: t,
                        style: th.closeButton,
                        hoveredStyle: th.closeButtonHover,
                        ...e,
                        children: (0, k.jsx)(n(16275).I, {
                            icon: n(25094).xMarkSmallIcon,
                            size: "xs",
                            colorVariant: "secondary"
                        })
                    })
                }) : (0, k.jsx)(n(51831).m, {
                    content: () => (0, k.jsxs)("span", {
                        children: [r.formatMessage(tc.doneHint), " ", (0, k.jsx)("span", {
                            style: th.doneButtonCommandHint,
                            children: (0, n(406410)._w)({
                                environment: a
                            }).esc
                        })]
                    }),
                    children: e => (0, k.jsx)(n(912946).A, {
                        colorPalette: "blue",
                        onClick: t,
                        style: th.doneButton,
                        ...e,
                        children: r.formatMessage(o ? tc.save : tc.close)
                    })
                })
            }
            let tb = {
                width: 24,
                height: 24,
                flex: "none",
                flexGrow: 0
            };

            function tv(e) {
                let {
                    setIsLoading: t
                } = e, o = (0, n(109939).tz)(), [r, a] = i.useState(!1), [l, s] = i.useState(!1);
                return (0, k.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 4,
                    onMouseEnter: () => {
                        a(!0)
                    },
                    onMouseLeave: () => {
                        a(!1)
                    },
                    children: [(0, k.jsx)(n(111010).D, {
                        styleKey: "bodyLgSemibold",
                        colorVariant: "primary",
                        children: o.formatMessage(tc.formulaHeader)
                    }), (0, k.jsx)(n(51831).m, {
                        placement: "top",
                        content: () => o.formatMessage(tc.learnTooltip),
                        children: e => (0, k.jsx)(n(374533).A, { ...e,
                            ariaLabel: o.formatMessage(tc.learnTooltip),
                            icon: n(80094).questionMarkCircleIcon,
                            href: (0, n(442564).x)("guides.formulas"),
                            external: !0,
                            style: tb
                        })
                    }), void 0]
                })
            }
            let tk = {
                undoButton: {
                    display: "none",
                    height: 28,
                    padding: "0px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    color: n(632079).Tj.text.primary
                }
            };

            function tT(e) {
                let {
                    onClick: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(988022).p, {
                    colorPalette: "gray",
                    size: "sm",
                    style: tk.undoButton,
                    onClick: t,
                    children: i.formatMessage(tc.undoMessage)
                })
            }
            let tI = {
                revertButton: {
                    display: "flex",
                    height: 28,
                    padding: "0px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    color: n(632079).Tj.text.primary
                }
            };

            function tC(e) {
                let {
                    onClick: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(51831).m, {
                    placement: "top",
                    content: () => i.formatMessage(tc.revertTooltip),
                    children: e => (0, k.jsx)(n(988022).p, { ...e,
                        "aria-label": i.formatMessage(tc.revertTooltip),
                        colorPalette: "gray",
                        size: "sm",
                        style: tI.revertButton,
                        onClick: t,
                        children: i.formatMessage(tc.discardAllChanges)
                    })
                })
            }
            n(737550);
            let tM = n(642065).gJ,
                tj = n(986939).A.isMobile ? 6 : 4,
                tP = n(986939).A.isMobile ? 12 : 14,
                tS = 24 + n(642065).Yu * tj,
                tw = 24 + n(642065).Yu * tP,
                tA = (0, n(109939).YK)({
                    aiToggleTooltip: {
                        id: "formulas.aiToggleTooltip",
                        defaultMessage: "Toggle formula assistant"
                    }
                });

            function t_({
                isAssistantVisible: e,
                onToggleAssistant: t
            }) {
                let [o, r] = (0, i.useState)(!1), a = (0, n(109939).tz)(), l = (0, n(960253).I)(() => ({
                    toggleButton: {
                        display: "none",
                        position: "absolute",
                        bottom: 4,
                        insetInlineStart: 4,
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 20,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        opacity: .7,
                        background: o ? n(632079).Tj.buttonHoveredBackground : "transparent"
                    }
                }), [o]);
                return (0, k.jsx)(n(51831).m, {
                    placement: "top",
                    alignment: "center",
                    delayThreshold: 500,
                    content: () => (0, k.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "inversePrimary",
                        children: a.formatMessage(tA.aiToggleTooltip)
                    }),
                    children: i => (0, k.jsx)("div", { ...i,
                        style: l.toggleButton,
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), t()
                        },
                        onMouseDown: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        onFocus: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        onMouseEnter: e => {
                            var t;
                            r(!0), null == (t = i.onMouseEnter) || t.call(i, e)
                        },
                        onMouseLeave: e => {
                            var t;
                            r(!1), null == (t = i.onMouseLeave) || t.call(i, e)
                        },
                        role: "button",
                        "aria-pressed": e,
                        "aria-label": a.formatMessage(tA.aiToggleTooltip),
                        tabIndex: 0,
                        children: (0, k.jsx)(n(16275).I, {
                            icon: n(652134).aiFaceSmallIcon,
                            size: n(986939).A.isMobile ? "xs" : "xxs",
                            colorVariant: "secondary"
                        })
                    })
                })
            }
            let tE = {
                    borderRadius: 4,
                    flexGrow: 1,
                    flexShrink: 1,
                    fontFamily: (0, n(699422).vc)(n(849917).locale).githubMono,
                    fontSize: tM,
                    height: "100%",
                    width: "100%",
                    minHeight: "1em",
                    padding: 12,
                    tabSize: 2,
                    textAlign: "start",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                    unicodeBidi: "inherit"
                },
                tF = (0, n(109939).YK)({
                    formulaPlaceholder: {
                        id: "formulas.formulaPlaceholder",
                        defaultMessage: "Your formula"
                    }
                }),
                tB = {
                    scrollableInner: {
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                        scrollbarWidth: "thin",
                        scrollbarColor: `${n(632079).Tj.icon.secondary} transparent`
                    },
                    focused: {
                        boxShadow: n(632079).Tj.inputBlueFocusRing
                    },
                    scrollToBottomButton: {
                        position: "absolute",
                        insetInlineStart: "50%",
                        bottom: 12,
                        marginInlineStart: -16,
                        zIndex: 20,
                        padding: 6,
                        borderRadius: 20,
                        backgroundColor: n(632079).Tj.primaryBlack,
                        border: "none",
                        transition: "opacity 150ms ease-out",
                        opacity: 0,
                        pointerEvents: "none"
                    },
                    scrollToBottomButtonVisible: {
                        opacity: .7,
                        pointerEvents: "auto"
                    },
                    chevronDownIcon: {
                        fill: n(632079).Tj.white
                    },
                    style0: {
                        flexGrow: 1,
                        display: "table",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        direction: "ltr"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function tR(e) {
                let {
                    analyticsContext: t,
                    clipboardActions: o,
                    disabled: a,
                    errorRanges: l,
                    formulasModule: s,
                    handleClose: u,
                    markdownLinkifyIt: d,
                    parentSpaceId: p,
                    Prism: m,
                    store: y,
                    tinyMceMicrosoftWordPasteFilter: f,
                    valueTypes: g,
                    isAssistantVisible: h,
                    onToggleAssistant: x,
                    setIsLoading: b,
                    parentCollectionStore: T
                } = e;
                (0, i.useEffect)(() => {
                    b(!1)
                }, [b]);
                let I = (0, i.useRef)(null),
                    C = (0, n(960253).e)(),
                    M = (0, n(533992).v3)(),
                    {
                        value: j
                    } = (0, n(815048).fJ)(n(406921).V),
                    P = (0, n(682985).K8)(() => y.getValue() || [], [y], {
                        debugName: "FormulaInputTextImpl.textValueStore"
                    }),
                    S = (0, i.useRef)(null),
                    {
                        isScrolledToBottom: w,
                        scrollToBottomAndSetAutoscroll: A,
                        scrollToBottom: _
                    } = v({
                        scrollableRef: S,
                        environment: M
                    }),
                    E = function({
                        scrollableRef: e,
                        textValue: t
                    }) {
                        let [n, o] = (0, i.useState)(0), [r, a] = (0, i.useState)(tS);
                        return (0, i.useLayoutEffect)(() => {
                            let t = e.current;
                            if (!t) return;
                            let i = t.scrollHeight;
                            if (n !== i && o(i), i === r) {
                                n && n > i && i === tw && a(void 0);
                                return
                            }
                            if (tS > i) {
                                r !== tS && a(tS);
                                return
                            }
                            if (i > tw) {
                                r !== tw && a(tw);
                                return
                            }
                            void 0 !== r && a(void 0)
                        }, [t, r, e, n]), r
                    }({
                        scrollableRef: S,
                        textValue: P
                    }),
                    [F, B] = (0, i.useState)(!0),
                    R = (0, n(960253).I)(() => ({
                        default: {
                            boxSizing: "border-box",
                            width: "100%",
                            height: E,
                            background: n(632079).Tj.background.secondary,
                            boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                            borderRadius: 10,
                            position: "relative"
                        }
                    }), [E]),
                    D = (0, i.useCallback)(() => {
                        var e;
                        return (null == (e = I.current) ? void 0 : e.getNode()) || void 0
                    }, [I]),
                    N = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(358377).default.state;
                        return "editing" === t.mode && (null == (e = (0, n(778758).H)(t.multiSelection)) ? void 0 : e.store) === y
                    }, [y]),
                    V = (0, i.useCallback)(() => {
                        var e;
                        return null == (e = D()) ? void 0 : e.blur()
                    }, [D]),
                    L = (0, i.useCallback)(() => {
                        let e = n(871871).PE(r().q4_(P));
                        return {
                            endIndex: e.length,
                            startIndex: e.length
                        }
                    }, [P]),
                    H = (0, i.useCallback)(() => {
                        if (N) return (0, n(942618).D)(y)
                    }, [N, y]),
                    K = (0, i.useCallback)(e => {
                        n(536614).HP({
                            canEdit: !a,
                            editorNode: D(),
                            environment: M,
                            event: e,
                            store: y,
                            textValue: P,
                            katex: j
                        })
                    }, [M, P, D, y, a, j]),
                    U = (0, i.useCallback)(e => {
                        if (a) return;
                        let t = n(358377).default.state;
                        "editing" === t.mode && t.multiSelection.start.store === y && (0, n(377796).createAndCommit)({
                            userAction: "FormulaInputTextImpl.handleDelete",
                            environment: M,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: p
                            },
                            perform: i => {
                                n(99147).wT({
                                    environment: M,
                                    multiSelection: t.multiSelection,
                                    deleteForwards: !0,
                                    transaction: i,
                                    event: e,
                                    editorMode: "default"
                                }), i.postEnqueueActions.push(() => {
                                    (0, n(377796).createAndCommit)({
                                        userAction: "FormulaInputTextImpl.normalizeTextValue",
                                        environment: M,
                                        canUndo: !0,
                                        cellTarget: {
                                            spaceWithId: p
                                        },
                                        perform: e => {
                                            c({
                                                clipboardActions: o,
                                                formulasModule: s,
                                                store: y,
                                                transaction: e
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    }, [a, M, y, o, s, p]),
                    z = (0, i.useCallback)(e => {
                        if (a) return;
                        let t = n(358377).default.state;
                        if ("editing" === t.mode && t.multiSelection.start.store === y) {
                            if (n(99147).CZ({
                                    device: M.device,
                                    event: e,
                                    multiSelection: t.multiSelection
                                })) return;
                            (0, n(377796).createAndCommit)({
                                userAction: "FormulaInputTextImpl.handleBackspace",
                                environment: M,
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: p
                                },
                                perform: i => {
                                    n(99147).wT({
                                        environment: M,
                                        multiSelection: t.multiSelection,
                                        deleteForwards: !1,
                                        transaction: i,
                                        event: e,
                                        editorMode: "default"
                                    }), i.postEnqueueActions.push(() => {
                                        (0, n(377796).createAndCommit)({
                                            userAction: "FormulaInputTextImpl.normalizeTextValue",
                                            environment: M,
                                            canUndo: !0,
                                            cellTarget: {
                                                spaceWithId: p
                                            },
                                            perform: e => {
                                                c({
                                                    clipboardActions: o,
                                                    formulasModule: s,
                                                    store: y,
                                                    transaction: e
                                                })
                                            }
                                        })
                                    })
                                }
                            })
                        }
                    }, [a, M, y, o, s, p]),
                    Y = (0, i.useCallback)(e => {
                        var t, i, o;
                        if (a || (null == (t = e.preventDefault) || t.call(e), I.current && I.current.isComposing())) return;
                        let l = n(358377).default.state,
                            s = "editing" === l.mode && (0, n(778758).H)(l.multiSelection);
                        if (!s) return;
                        let u = n(871871).PE(r().q4_(P)),
                            d = null == (i = u.slice(0, s.selection.startIndex).join("").split("\n")) ? void 0 : i.at(-1),
                            c = (null == d || null == (o = d.match(/^\t*/)) ? void 0 : o[0].length) || 0,
                            m = (null == d ? void 0 : d.split("").reverse()) || [],
                            f = 0,
                            g = m.some(e => {
                                if (")" === e) f++;
                                else if ("(" === e) {
                                    if (0 === f) return !0;
                                    f--
                                }
                                return !1
                            }) ? c + 1 : c,
                            h = "	".repeat(g),
                            x = ")" === u[s.selection.endIndex],
                            b = !!(null == d ? void 0 : d.endsWith("(")) && x;
                        b && (h += `
${"	".repeat(g-1)}`), (0, n(377796).createAndCommit)({
                            userAction: "FormulaInputTextImpl.handleShiftEnter",
                            environment: M,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: p
                            },
                            perform: e => {
                                n(41403).$D({
                                    environment: M,
                                    editorMode: "default",
                                    store: y,
                                    string: `
${h}`,
                                    selection: s.selection,
                                    disableMentions: !0,
                                    disableSlashCommands: !0,
                                    disableEmojiCommands: !0,
                                    transaction: e
                                }), b && (0, n(627974).t)({
                                    store: y,
                                    selection: {
                                        startIndex: s.selection.startIndex + g + 1,
                                        endIndex: s.selection.startIndex + g + 1
                                    }
                                })
                            }
                        })
                    }, [a, M, y, P, p]),
                    W = (0, i.useCallback)(e => {
                        var t;
                        let n = window.getSelection();
                        null != n && n.anchorNode && null != (t = D()) && t.contains(n.anchorNode) && o.copy({
                            environment: M,
                            event: e,
                            markdownLinkifyIt: d
                        })
                    }, [M, D, d, o]),
                    O = (0, i.useCallback)(e => {
                        a || !N ? e.preventDefault() : o.cutWithMaybeConfirmation({
                            environment: M,
                            event: e,
                            markdownLinkifyIt: d
                        })
                    }, [a, M, d, o, N]),
                    $ = (0, i.useCallback)(e => {
                        a || !N || function(e) {
                            if (!e.clipboardData) return !1;
                            for (let t of Array.from(e.clipboardData.items))
                                if (t.getAsFile()) return !0;
                            return !1
                        }(e) ? e.preventDefault() : (0, n(377796).createAndCommit)({
                            userAction: "FormulaInputTextImpl.handlePaste",
                            environment: M,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: p
                            },
                            perform: t => {
                                (0, n(988454).o)(M, {
                                    action: "paste",
                                    block_type: "equation",
                                    from: "formula_editor",
                                    block_id: null == T ? void 0 : T.id,
                                    space_id: null == T ? void 0 : T.pointer.spaceId
                                }, i => {
                                    o.paste({
                                        environment: M,
                                        event: e,
                                        disableEmbedMenu: !0,
                                        transaction: t,
                                        onPasteFiles: o.pasteFilesForBlocks,
                                        formulasModule: s,
                                        markdownLinkifyIt: d,
                                        tinyMceMicrosoftWordPasteFilter: f,
                                        spaceStore: (0, n(974410).f)(T)
                                    }), i()
                                })
                            }
                        })
                    }, [a, M, d, f, s, o, N, T, p]),
                    G = (0, i.useCallback)(e => {
                        n(536614).sp({
                            environment: M,
                            event: e,
                            textValue: P,
                            editorNode: D(),
                            store: y,
                            canEdit: !a
                        })
                    }, [M, P, D, y, a]),
                    q = (0, i.useCallback)(e => {
                        n(536614).W5({
                            environment: M,
                            event: e,
                            textValue: P,
                            editorNode: D(),
                            store: y,
                            canEdit: !a
                        })
                    }, [M, P, D, y, a]),
                    Q = (0, i.useCallback)(e => {
                        a || e.preventDefault()
                    }, [a]),
                    Z = (0, i.useCallback)(e => {
                        (0, n(377796).createAndCommit)({
                            userAction: "FormulaInputTextImpl.handleMoveUp",
                            environment: M,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: p
                            },
                            perform: e => {
                                n(41403).$P({
                                    environment: M,
                                    transaction: e,
                                    direction: "up"
                                })
                            }
                        })
                    }, [M, p]),
                    J = (0, i.useCallback)(e => {
                        (0, n(377796).createAndCommit)({
                            userAction: "FormulaInputTextImpl.handleMoveDown",
                            environment: M,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: p
                            },
                            perform: e => {
                                n(41403).$P({
                                    environment: M,
                                    transaction: e,
                                    direction: "down"
                                })
                            }
                        })
                    }, [M, p]),
                    X = (0, i.useCallback)(e => {
                        var t;
                        e.preventDefault && e.preventDefault();
                        let i = (0, n(701512).l)();
                        (null == i || null == (t = i.getFirstStore()) ? void 0 : t.id) === y.id && (0, n(462446).t)({
                            environment: M,
                            preventSelectText: !1
                        })
                    }, [M, y.id]),
                    ee = (0, i.useCallback)(e => {
                        var t;
                        e.preventDefault && e.preventDefault();
                        let i = (0, n(364270).B)();
                        (null == i || null == (t = i.getFirstStore()) ? void 0 : t.id) === y.id && (0, n(270600).Z)({
                            environment: M
                        })
                    }, [M, y.id]),
                    et = (0, i.useCallback)(e => {
                        if (a) return;
                        e.preventDefault();
                        let t = n(358377).default.state,
                            i = "editing" === t.mode && (0, n(778758).H)(t.multiSelection);
                        if (i) {
                            let {
                                selection: e
                            } = i, t = e.startIndex === e.endIndex;
                            (0, n(377796).createAndCommit)({
                                userAction: "FormulaInputTextImpl.handleTab",
                                environment: M,
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: p
                                },
                                perform: i => {
                                    t ? n(41403).$D({
                                        environment: M,
                                        editorMode: "default",
                                        store: y,
                                        string: "	",
                                        selection: e,
                                        disableMentions: !0,
                                        disableSlashCommands: !0,
                                        disableEmojiCommands: !0,
                                        disableFilters: !0,
                                        transaction: i
                                    }) : n(41403).RJ({
                                        environment: M,
                                        store: y,
                                        editorMode: "default",
                                        selection: e,
                                        transaction: i,
                                        shouldStripTokens: !1,
                                        disableFilters: !0
                                    })
                                }
                            })
                        }
                    }, [a, M, y, p]),
                    en = (0, i.useCallback)(e => {
                        if (a) return;
                        e.preventDefault();
                        let t = n(358377).default.state,
                            i = "editing" === t.mode && (0, n(778758).H)(t.multiSelection);
                        if (i) {
                            let {
                                selection: e
                            } = i, t = e.startIndex === e.endIndex;
                            (0, n(377796).createAndCommit)({
                                userAction: "FormulaInputTextImpl.handleUntab",
                                environment: M,
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: p
                                },
                                perform: i => {
                                    if (t) {
                                        let t = r().q4_(y.getValue() || []),
                                            o = n(871871).PE(t),
                                            a = o[e.startIndex - 1];
                                        if ("	" === a) n(41403).jQ({
                                            environment: M,
                                            store: y,
                                            selection: {
                                                startIndex: e.startIndex - 1,
                                                endIndex: e.startIndex
                                            },
                                            transaction: i
                                        });
                                        else if (" " === a) {
                                            let t = o[e.startIndex - 2];
                                            n(41403).jQ({
                                                environment: M,
                                                store: y,
                                                selection: {
                                                    startIndex: e.startIndex - (" " === t ? 2 : 1),
                                                    endIndex: e.startIndex
                                                },
                                                transaction: i
                                            })
                                        }
                                    } else n(41403).Ye({
                                        environment: M,
                                        store: y,
                                        editorMode: "default",
                                        selection: e,
                                        transaction: i,
                                        shouldStripTokens: !1,
                                        disableFilters: !0
                                    })
                                }
                            })
                        }
                    }, [a, M, y, p]),
                    ei = (0, i.useCallback)(e => {
                        let {
                            newValue: i
                        } = e;
                        n(680007).default.measureAfterNextFlush({
                            metricName: "formulas_typing_lag",
                            startTime: performance.now()
                        }, {
                            getData: () => t
                        }), (0, n(377796).createAndCommit)({
                            userAction: "FormulaInputTextImpl.handleMutation",
                            environment: M,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: p
                            },
                            perform: e => {
                                n(41403).dw({
                                    environment: M,
                                    editorMode: "default",
                                    store: y,
                                    newValue: i,
                                    disableMentions: !0,
                                    disableSlashCommands: !0,
                                    disableEmojiCommands: !0,
                                    disableFilters: !0,
                                    transaction: e
                                }), e.postEnqueueActions.push(() => {
                                    (0, n(377796).createAndCommit)({
                                        userAction: "FormulaInputTextImpl.normalizeTextValue",
                                        environment: M,
                                        canUndo: !0,
                                        cellTarget: {
                                            spaceWithId: p
                                        },
                                        perform: e => {
                                            c({
                                                clipboardActions: o,
                                                formulasModule: s,
                                                store: y,
                                                transaction: e
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    }, [t, M, s, y, o, p]),
                    eo = (0, i.useCallback)(({
                        leafRef: e,
                        wrapperRef: t,
                        ...i
                    }, o) => {
                        let {
                            device: r
                        } = M, s = P.length > 0;
                        return (0, k.jsxs)("div", {
                            ref: t,
                            ...i,
                            role: "textbox",
                            tabIndex: 0,
                            onKeyDown: e => {
                                if ("Enter" === e.key && e.shiftKey) {
                                    e.preventDefault(), e.stopPropagation(), Y(e.nativeEvent);
                                    return
                                }
                                if ("Tab" === e.key) {
                                    e.preventDefault(), e.stopPropagation(), e.shiftKey ? en(e.nativeEvent) : et(e.nativeEvent);
                                    return
                                }
                                null == i || i.onKeyDown(e)
                            },
                            style: tB.style0,
                            children: [(0, k.jsx)(tH, {
                                hasText: s
                            }), (0, k.jsx)(n(35386).A, {
                                leafRef: (0, n(411048).Px)(I, e),
                                style: tE,
                                isDisabled: a,
                                debugName: "FormulaInputTextImpl",
                                store: y,
                                getHtml: () => (0, n(632460)._)({
                                    currentUserId: M.currentUser.id,
                                    errorRanges: l,
                                    getPublicBaseUrlForPage: n(135007).tN(M),
                                    isAndroid: r.isAndroid,
                                    isMobileNative: r.isMobileNative,
                                    isSafariOrIOS: r.isSafari || r.isIOS,
                                    isFirefox: r.isFirefox,
                                    isWindows: r.isWindows,
                                    parentSpaceId: p,
                                    Prism: m,
                                    store: y,
                                    textValue: P,
                                    theme: n(632079).Tj,
                                    themeMode: C,
                                    valueTypes: g
                                }),
                                getSelection: H,
                                onMutation: ei,
                                spellCheck: !1,
                                autoCorrect: "off",
                                autoCapitalize: "off",
                                onSelect: o,
                                onMouseOver: G,
                                onMouseOut: q,
                                suppressNewlineEvents: !1,
                                expandSelectionOnTripleClick: !0,
                                placeholder: " "
                            })]
                        })
                    }, [M, a, y, H, ei, G, q, l, p, m, P, C, g, et, en, Y]);
                return (0, n(383953).w)(() => {
                    (0, n(739204).z)({
                        store: y
                    }), _("instant")
                }), (0, k.jsxs)("div", {
                    style: { ...R.default,
                        ...F && tB.focused
                    },
                    onFocus: () => {
                        B(!0);
                        let e = D();
                        e && e.focus(), (0, n(739204).z)({
                            store: y
                        })
                    },
                    onBlur: () => {
                        B(!1), V()
                    },
                    children: [(0, k.jsx)("div", {
                        style: tB.scrollableInner,
                        ref: S,
                        children: (0, k.jsxs)(n(519451).A, {
                            debugName: "FormulaInputTextImpl",
                            capture: N,
                            allowEnter: !0,
                            allowTabUntab: !0,
                            allowUndo: !0,
                            allowEsc: !0,
                            allowCopyPaste: !0,
                            children: [" ", (0, k.jsx)(n(801169).F, {
                                store: y,
                                disabled: a,
                                clearBrowserSelection: V,
                                getEndSelection: L,
                                onBlur: V,
                                onClick: K,
                                onDelete: U,
                                onBackspace: z,
                                onShiftEnter: Y,
                                onCommandShiftEnter: n(763230).D_,
                                onTab: et,
                                onUntab: en,
                                onToggleBold: Q,
                                onToggleItalics: Q,
                                onToggleUnderline: Q,
                                onToggleStrike: Q,
                                onToggleCode: n(763230).D_,
                                onCopy: W,
                                onCut: O,
                                onPaste: $,
                                onMoveUp: Z,
                                onMoveDown: J,
                                onUndo: X,
                                onRedo: ee,
                                onEsc: u,
                                render: eo,
                                disableStyleAnnotations: !0,
                                disableMentions: !0,
                                disableSlashCommands: !0,
                                canSelectAllBlocks: !1,
                                canInsertText: !0,
                                canSelectionDrag: !0,
                                disableMobileActionBar: !0,
                                topBottomPadding: 40,
                                pasteBehavior: "inline"
                            })]
                        })
                    }), (0, k.jsx)("button", {
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), A()
                        },
                        style: { ...tB.scrollToBottomButton,
                            ...!w && tB.scrollToBottomButtonVisible
                        },
                        children: (0, k.jsx)(n(16275).I, {
                            icon: n(87963).arrowChevronSingleDownIcon,
                            size: "sm",
                            style: tB.chevronDownIcon
                        })
                    }), x ? (0, k.jsx)(n(930253).y, {
                        experimentId: "formula_assistant",
                        groups: {
                            on: a ? null : (0, k.jsx)(t_, {
                                isAssistantVisible: h,
                                onToggleAssistant: x
                            }),
                            control: null
                        }
                    }) : null]
                })
            }
            tR.displayName = "FormulaInputTextImpl";
            let tD = {
                container: {
                    boxSizing: "border-box",
                    width: "100%",
                    height: tS,
                    background: n(632079).Tj.background.secondary,
                    boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                    borderRadius: 6,
                    position: "relative"
                },
                scrollableInner: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    paddingTop: 11,
                    paddingInlineEnd: 12,
                    paddingBottom: 10,
                    paddingInlineStart: 12
                },
                style0: {
                    height: 14,
                    borderRadius: 3,
                    width: "100%"
                },
                style1: {
                    height: 14,
                    borderRadius: 3,
                    width: "50%"
                }
            };

            function tN() {
                return (0, k.jsx)("div", {
                    style: tD.container,
                    children: (0, k.jsxs)("div", {
                        style: tD.scrollableInner,
                        children: [(0, k.jsx)(n(795830).P, {
                            emphasized: !0,
                            style: tD.style0
                        }), (0, k.jsx)(n(795830).P, {
                            emphasized: !0,
                            style: tD.style1
                        })]
                    })
                })
            }

            function tV(e) {
                let {
                    value: t
                } = (0, n(815048).fJ)(n(832737).y), {
                    value: i
                } = (0, n(815048).fJ)(n(94386).g), {
                    value: o
                } = (0, n(815048).fJ)(n(393771).S), {
                    value: r
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: a
                } = (0, n(815048).fJ)(n(235645).R.clipboardActions);
                return t && r && a ? (0, k.jsx)(tR, { ...e,
                    Prism: t,
                    clipboardActions: a,
                    formulasModule: r,
                    markdownLinkifyIt: i,
                    tinyMceMicrosoftWordPasteFilter: o
                }) : (0, k.jsx)(tN, {})
            }
            let tL = {
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                userSelect: "none"
            };

            function tH(e) {
                let {
                    hasText: t
                } = e, i = (0, n(109939).tz)();
                return (0, k.jsx)(n(4458).fI, {
                    gap: 8,
                    paddingBlock: 10,
                    paddingInline: 12,
                    style: tL,
                    className: "autolayout-fill-width",
                    children: t ? null : (0, k.jsx)(n(4458).VP, {
                        height: 20,
                        alignItems: "flex-start",
                        justifyContent: "center",
                        style: tB.positionRelative,
                        flex: "1 1 0",
                        children: (0, k.jsx)(n(111010).D, {
                            colorVariant: "disabled",
                            styleKey: "bodyRegular",
                            children: i.formatMessage(tF.formulaPlaceholder)
                        })
                    })
                })
            }
            class tK extends eK().Store {
                getInitialState() {
                    return {
                        type: "input",
                        prompt: (0, r().x9d)(""),
                        latestTraceId: "",
                        formulaBeforeLatestRequest: null
                    }
                }
                setPrompt = e => {
                    this.update(t => ({ ...t,
                        prompt: e
                    }))
                };
                startGeneratingState = e => {
                    this.update(t => ({ ...t,
                        type: "generating",
                        generatingStep: e
                    }))
                };
                setTraceId = e => {
                    this.update(t => ({ ...t,
                        latestTraceId: e
                    }))
                };
                setFormulaBeforeLatestRequest = e => {
                    this.update(t => ({ ...t,
                        formulaBeforeLatestRequest: e
                    }))
                };
                updateGeneratingState = e => {
                    this.update(t => ({ ...t,
                        generatingStep: e
                    }))
                };
                resetToInitial = () => {
                    this.update(e => ({ ...e,
                        type: "input"
                    }))
                };
                setRefusalMessage = e => {
                    this.update(t => ({ ...t,
                        type: "refused",
                        refusalMessage: e,
                        isGenerating: !0
                    }))
                };
                setFinalRefusedState = e => {
                    this.update(t => ({ ...t,
                        type: "refused",
                        refusalMessage: e,
                        isGenerating: !1
                    }))
                };
                setError = () => {
                    this.update(e => ({ ...e,
                        type: "error"
                    }))
                }
            }
            let tU = new Map,
                tz = [],
                tY = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        isolation: "isolate",
                        height: "100%",
                        background: n(632079).Tj.popoverBackground,
                        boxShadow: n(632079).Tj.shadow.outline.lg,
                        borderRadius: 12,
                        position: "relative"
                    },
                    headerWrapper: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 0,
                        gap: 8,
                        height: 28,
                        flex: "none",
                        alignSelf: "stretch",
                        flexGrow: 0
                    },
                    inputText: {
                        width: "100%",
                        position: "relative",
                        direction: "ltr"
                    },
                    bottomSection: {
                        display: "flex",
                        flexDirection: "row",
                        height: n(986939).A.isMobile ? "100%" : 240,
                        maxHeight: n(986939).A.isMobile ? void 0 : "calc(90vh - 38px - 31px - 38px - 30px)",
                        borderTop: `1px solid ${n(632079).Tj.border.primary}`,
                        width: "100%"
                    },
                    leftColumn: {
                        position: "relative",
                        borderInlineEnd: `1px solid ${n(632079).Tj.border.primary}`,
                        width: n(986939).A.isMobile ? "100%" : void 0
                    },
                    infoHelper: {
                        padding: "12px 14px"
                    }
                };

            function tW(e) {
                var t;
                let a, l, {
                        initialCode: u,
                        parentSpaceId: d,
                        disabled: p,
                        typecheckContext: m,
                        formulas: y,
                        handleCancel: f,
                        onCodeChange: g,
                        onTypeChange: h,
                        parentCollectionStore: x,
                        handleClose: v,
                        getRecordModel: T,
                        autosave: I = !0,
                        formulaSchema: C,
                        collectionStore: M,
                        blockStore: j
                    } = e,
                    [P, S] = (0, i.useState)(j),
                    [w, A] = (0, i.useState)(!0),
                    _ = (0, n(109939).tz)(),
                    E = (0, n(533992).v3)(),
                    [F] = (0, i.useState)(() => crypto.randomUUID());
                (0, n(383953).w)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "formula_editor_open",
                            eventProperties: {
                                formula_assistant_session_id: F,
                                has_existing_formula: !!(u && u.length > 0),
                                collection_id: null == x ? void 0 : x.id
                            }
                        }
                    })
                });
                let B = (0, i.useRef)(0),
                    R = (0, i.useRef)(0),
                    D = (0, i.useRef)(0),
                    N = (0, i.useRef)({
                        parseErrors: [],
                        typeErrors: [],
                        typeWarnings: [],
                        evaluationErrors: []
                    }),
                    [V, L] = (0, i.useState)(),
                    {
                        value: H
                    } = (0, n(815048).fJ)(n(864850).T.formulaEditor),
                    {
                        value: K
                    } = (0, n(815048).fJ)(n(864850).T.formulas),
                    U = (0, n(482170).l)(m.valueTypes),
                    z = (0, i.useMemo)(() => {
                        let e = {};
                        return x && (e.collection_id = [
                            [x.id]
                        ]), e.value_types = [
                            [JSON.stringify(U)]
                        ], e
                    }, [x, U]),
                    {
                        store: Y,
                        setValue: W
                    } = (0, n(430937).AI)({
                        initialValue: u,
                        onChange: g,
                        source: "formula",
                        properties: z
                    }),
                    O = (0, i.useCallback)(e => {
                        let {
                            newValue: t,
                            newSelection: i
                        } = e;
                        W(t);
                        let {
                            startIndex: o,
                            endIndex: r
                        } = i;
                        (0, n(726923).setMultiSelection)({
                            multiSelection: {
                                start: {
                                    store: Y,
                                    index: o
                                },
                                end: {
                                    store: Y,
                                    index: r
                                }
                            }
                        })
                    }, [W, Y]),
                    $ = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(358377).default.state;
                        if ("editing" === t.mode && (null == (e = (0, n(778758).H)(t.multiSelection)) ? void 0 : e.store) === Y) return {
                            startIndex: t.multiSelection.start.index,
                            endIndex: t.multiSelection.end.index
                        }
                    }, [Y], {
                        equalityFn: n(381453).n4
                    }),
                    G = (0, n(682985).K8)(() => Y.getValue(), [Y]),
                    Q = (0, i.useMemo)(() => !n(381453).n4(G, u), [G, u]),
                    Z = (0, n(668745).lW)(G, 100, Object.is),
                    J = (0, n(941096).C)(),
                    X = (0, n(682985).K8)(() => n(686494).A.state.publicPageData, []),
                    [ee, et] = (0, i.useState)([]),
                    en = (0, n(682985).K8)(() => {
                        et(tz);
                        let e = null == P ? void 0 : P.getModel();
                        if (!e || !Z || n(430937).Pe || !K) return;
                        let t = K.evaluateRawCollectionFormula2({
                            block: e,
                            property: m.sourceProperty ? ? "formula",
                            formulaCode: Z,
                            getRecordModel: T,
                            intl: _,
                            userTimeZone: (0, n(714350).P)(),
                            depth: 0,
                            visitedProperties: new Set,
                            formulaTimeoutTimestampMs: Date.now() + J,
                            resultCache: new Map,
                            regExpCache: new Map,
                            formatDateCache: new Map,
                            publicPageDataCollection: {
                                id: null == X ? void 0 : X.collectionId,
                                schema: null == X ? void 0 : X.collectionSchema
                            },
                            experimentService: n(218744).default,
                            collectionFeatureGates: (0, n(457103).i)(),
                            spaceIdCreator: E.idCreator.getSpaceIdCreatorSync(d)
                        });
                        if (t) {
                            if (n(300441).Q.isFail(t)) {
                                (0, n(349761).eJ)(t.error) && et([t.error]);
                                return
                            }
                            return t.value
                        }
                    }, [P, Z, K, _, J, null == X ? void 0 : X.collectionId, null == X ? void 0 : X.collectionSchema, m.sourceProperty, T, d, E]),
                    [ei, eo] = (0, n(682985).K8)(() => !G || n(430937).Pe ? [void 0, void 0] : y.processFormulaInput(G), [G, y]),
                    er = (0, n(682985).K8)(() => {
                        if (ei) return y.parseFormulaInputToCst(ei, eo)
                    }, [ei, y, eo]),
                    ea = (0, n(682985).K8)(() => {
                        if (er) return y.convertFormulaCSTToAST(er[0])
                    }, [y, er]),
                    [el, es] = (0, i.useState)(void 0),
                    ed = eX(void 0 === M),
                    ep = (0, i.useMemo)(() => {
                        if (m) return { ...m,
                            enableExistenceGuarantees: ed
                        }
                    }, [m, ed]);
                (0, i.useEffect)(() => {
                    !async function() {
                        if (ea && ep && n(300441).Q.isSuccess(ea)) {
                            let e = await y.addTypesToFormulaASTAsync(ea.value, ep, eo);
                            es(e);
                            let t = e.node.type;
                            L(t), null == h || h(t)
                        } else es(void 0), L(void 0)
                    }()
                }, [ea, ep, eo, er, y, h]);
                let ec = (0, i.useMemo)(() => void 0 !== el ? [...(0, n(297493).KH)(el.node, !1), ...el.errors] : [], [el]),
                    em = (0, i.useMemo)(() => void 0 !== el ? el.warnings : [], [el]),
                    ey = (0, i.useMemo)(() => ({
                        parseErrors: (null == er ? void 0 : er[1]) ? ? [],
                        typeErrors: ec,
                        typeWarnings: em,
                        evaluationErrors: ee
                    }), [ee, er, ec, em]);
                (0, i.useEffect)(() => {
                    N.current = ey
                }, [ey]);
                let ef = (0, n(668745).lW)(ey, 400, Object.is),
                    eg = 0 === (0, r().q4_)(G).trim().length,
                    eh = !eg && ey.parseErrors.length + ey.typeErrors.length + ey.evaluationErrors.length > 0,
                    ex = !eg && ey.typeWarnings.length > 0,
                    eb = (0, n(682985).K8)(() => (function(e) {
                        let {
                            errors: t,
                            intl: i,
                            codeLength: o,
                            formulas: r
                        } = e, {
                            parseErrors: a,
                            typeErrors: l,
                            typeWarnings: s,
                            evaluationErrors: u
                        } = t, d = [];
                        return l && l.length > 0 ? l.forEach(e => {
                            let t = (0, n(349761).ew)((0, n(349761).rA)(i, e));
                            d.push({
                                msg: i.formatMessage(...t),
                                range: {
                                    startIndex: e.node.startOffset,
                                    endIndex: e.node.endOffset + 1
                                },
                                severity: (0, n(349761).SA)(e)
                            })
                        }) : u && u.length > 0 && u.forEach(e => {
                            let t = (0, n(349761).ew)((0, n(349761).yI)(i, e));
                            d.push({
                                msg: i.formatMessage(...t),
                                range: r.isUniqueFormulaEvaluatorError(e) ? {
                                    startIndex: e.node.startOffset,
                                    endIndex: e.node.endOffset + 1
                                } : void 0,
                                severity: (0, n(349761).SA)(e)
                            })
                        }), a && a.forEach(e => {
                            let t = (0, n(349761).ew)((0, n(349761).ml)(e));
                            d.push({
                                msg: i.formatMessage(...t),
                                range: "eof" === e.offset ? {
                                    startIndex: o - 1,
                                    endIndex: o
                                } : {
                                    startIndex: e.offset,
                                    endIndex: e.offset + 1
                                },
                                severity: (0, n(349761).SA)(e)
                            })
                        }), s && s.forEach(e => {
                            let t = (0, n(349761).ew)((0, n(349761).rA)(i, e));
                            d.push({
                                msg: i.formatMessage(...t),
                                range: {
                                    startIndex: e.node.startOffset,
                                    endIndex: e.node.endOffset + 1
                                },
                                severity: (0, n(349761).SA)(e),
                                helpLink: function(e) {
                                    switch (e.type) {
                                        case n(944897).IA.CalledFunctionOnEmptyValue:
                                            return "https://www.notion.com/help/common-formula-errors#undefined-value";
                                        case n(944897).IA.DisallowedReturnType:
                                            return "https://www.notion.com/help/common-formula-errors#wrong-return-type";
                                        default:
                                            return
                                    }
                                }(e)
                            })
                        }), d
                    })({
                        errors: ef,
                        codeLength: eo ? (0, n(301040).sE)(eo) : (0, r().q4_)(G).length,
                        formulas: y,
                        intl: _
                    }), [G, ef, y, _, eo]),
                    ev = (0, i.useMemo)(() => eb.filter(e => "error" === e.severity || ed).map(e => e.range ? { ...e.range,
                        severity: e.severity
                    } : void 0).filter(n(722371).O9), [eb, ed]),
                    [ek, eT] = (0, i.useState)(void 0),
                    eC = (0, i.useRef)(void 0),
                    [eM, ej] = (0, i.useState)(void 0),
                    eP = (0, i.useRef)(1);
                (0, i.useEffect)(() => {
                    eP.current++;
                    let e = eP.current;
                    !async function() {
                        if (H) {
                            let t = await H.getFormulaEditorInfoAtPosition({
                                formula: G ? ? [],
                                inputPosition: $ && $.startIndex === $.endIndex ? $.startIndex : 0,
                                context: m,
                                includeDeprecatedCompletions: !1
                            });
                            n(300441).Q.isSuccess(t) && eP.current === e && (eC.current = t.value, eT(t.value))
                        }
                    }()
                }, [$, H, m, G]);
                let eS = (0, i.useCallback)(() => {
                        W(u)
                    }, [u, W]),
                    ew = (a = (t = m.sourceProperty) ? tU.get(t) : void 0, l = (0, n(682985).uB)(a, tK), (0, i.useEffect)(() => {
                        t && tU.set(t, l)
                    }, [t, l]), l),
                    eA = (0, n(682985).O$)(ew),
                    e_ = null !== eA.formulaBeforeLatestRequest && eA.formulaBeforeLatestRequest !== G,
                    eE = (0, i.useCallback)(() => {
                        "input" === eA.type && null !== eA.formulaBeforeLatestRequest && W(eA.formulaBeforeLatestRequest)
                    }, [eA, W]),
                    eF = (0, n(682985).K8)(() => "generating" === eA.type, [eA]),
                    eB = (0, i.useMemo)(() => eb.map(e => {
                        if ("string" == typeof e.msg) return e.range ? `${e.msg} [${e.range.startIndex},${e.range.endIndex}]` : e.msg
                    }).filter(n(722371).O9), [eb]),
                    eR = (0, n(682985).K8)(() => {
                        let e = T({
                            table: o().NXh,
                            id: d
                        });
                        return !!(null == e ? void 0 : e.isAiEnabledOnSpace())
                    }, [T, d]),
                    eD = (0, n(217844)._)({
                        name: "ai_formulas",
                        spaceId: d,
                        userId: E.currentUser.id,
                        amount: 1
                    }),
                    {
                        upsellMessage: eN
                    } = (0, n(427724).x)({
                        featureAvailability: eD,
                        upsellFrom: "ai_formulas",
                        showOptimisticUpsell: !1
                    }),
                    eV = !eN,
                    eL = (0, n(83208).X)("formulas_fix_with_ai_button"),
                    eH = (0, n(682985).K8)(() => s.getIsAssistantVisible(), []),
                    eK = (0, i.useCallback)(() => {
                        s.toggleAssistant()
                    }, []),
                    eU = (0, i.useRef)(null),
                    ez = (0, i.useCallback)(async e => {
                        var t;
                        let i = Y.getValue(),
                            o = await n(235645).R.clipboardActions.load(),
                            r = !1;
                        null == (t = eU.current) || t.abort();
                        let a = new AbortController;
                        eU.current = a;
                        let l = await b({
                            environment: E,
                            spaceId: d,
                            getRecordModel: T,
                            userPrompt: e,
                            formulaErrors: eB,
                            existingFormulaTextValue: i,
                            typecheckContext: m,
                            handleFormulaStream: e => {
                                r || ((0, n(627974).t)({
                                        store: Y
                                    }), r = !0),
                                    function(e) {
                                        let {
                                            clipboardActions: t,
                                            environment: i,
                                            formulasModule: o,
                                            formulaString: r,
                                            store: a
                                        } = e, l = a.pointer.spaceId;
                                        (0, n(377796).createAndCommit)({
                                            userAction: "FormulaInputText.handleMutation",
                                            environment: i,
                                            canUndo: !0,
                                            cellTarget: l ? {
                                                spaceWithId: l
                                            } : void 0,
                                            perform: e => {
                                                n(41403).kE({
                                                    environment: i,
                                                    store: a,
                                                    newValue: r,
                                                    editorMode: "default",
                                                    disableMentions: !0,
                                                    disableSlashCommands: !0,
                                                    disableEmojiCommands: !0,
                                                    disableFilters: !0,
                                                    transaction: e
                                                }), e.postEnqueueActions.push(() => {
                                                    (0, n(377796).createAndCommit)({
                                                        userAction: "FormulaInputText.normalizeTextValue",
                                                        environment: i,
                                                        canUndo: !0,
                                                        cellTarget: l ? {
                                                            spaceWithId: l
                                                        } : void 0,
                                                        perform: e => {
                                                            c({
                                                                clipboardActions: t,
                                                                formulasModule: o,
                                                                store: a,
                                                                transaction: e
                                                            })
                                                        }
                                                    })
                                                })
                                            }
                                        })
                                    }({
                                        environment: E,
                                        clipboardActions: o,
                                        formulasModule: y,
                                        formulaString: e,
                                        store: Y
                                    })
                            },
                            formulaAssistantStore: ew,
                            abortSignal: a.signal,
                            intl: _,
                            formulaResult: en,
                            returnType: V
                        });
                        B.current += 1, "success" === l.type && ("formula" === l.completionType ? (R.current += 1, (0, n(104310).u)({
                            event: {
                                eventName: "formula_assistant_prompt",
                                eventProperties: {
                                    formula_assistant_session_id: F,
                                    trace_id: l.traceId,
                                    response_type: "formula",
                                    retry_count: l.retryCount,
                                    had_existing_formula: !!(u && u.length > 0)
                                }
                            }
                        })) : "refusal" === l.completionType ? (D.current += 1, (0, n(104310).u)({
                            event: {
                                eventName: "formula_assistant_prompt",
                                eventProperties: {
                                    formula_assistant_session_id: F,
                                    trace_id: l.traceId,
                                    response_type: "refusal",
                                    had_existing_formula: !!(u && u.length > 0)
                                }
                            }
                        })) : (0, n(722371).HB)(l.completionType)), (0, n(525779).clear)({
                            environment: E
                        }), eU.current = null
                    }, [ew, d, m, eB, E, y, Y, _, T, F, u, en, V]),
                    eY = (0, i.useCallback)(() => {
                        var e;
                        null == (e = eU.current) || e.abort(), eU.current = null
                    }, []),
                    eW = (0, i.useCallback)(() => {
                        v(p ? u : Y.getValue())
                    }, [v, p, u, Y]);
                (0, n(637030).X)(() => {
                    let e = B.current,
                        t = D.current,
                        i = {
                            eventName: "formula_assistant_session",
                            eventProperties: {
                                formula_assistant_session_id: F,
                                total_prompts: e,
                                generated_formula_count: R.current,
                                refusal_count: t,
                                had_existing_formula: !!(u && u.length > 0)
                            }
                        };
                    e > 0 && (0, n(104310).u)({
                        event: i
                    })
                });
                let eO = (0, n(682985).K8)(() => w || "generating" === eA.type && ("fixing" === eA.generatingStep || "writing" === eA.generatingStep), [w, eA]);
                return (0, i.useEffect)(() => {
                    let e = e => {
                        (0, n(745308).A)(E, e, "command+enter") && (e.preventDefault(), eW())
                    };
                    return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [eW, E]), (0, k.jsx)(n(369064).N, {
                    debugName: "FormulaInput",
                    capture: !n(986939).A.isMobile,
                    onPaste: n(763230).D_,
                    children: (0, k.jsxs)("div", {
                        style: tY.container,
                        children: [(0, k.jsxs)(n(4458).VP, {
                            alignItems: "flex-start",
                            width: "100%",
                            padding: 12,
                            gap: 12,
                            children: [(0, k.jsx)("div", {
                                style: tY.headerWrapper,
                                children: (0, k.jsx)(tf, {
                                    setIsLoading: A,
                                    disabled: p,
                                    onClickCancel: f,
                                    onClickClose: eW,
                                    onClickRevert: Q && !eF ? eS : void 0,
                                    onClickUndo: e_ && !eF ? eE : void 0,
                                    autosave: I,
                                    isEdited: Q
                                })
                            }), (0, k.jsx)(n(930253).y, {
                                experimentId: "formula_assistant",
                                groups: {
                                    on: !p && eR && eH ? (0, k.jsx)(q, {
                                        setFormulaValue: W,
                                        formulaAssistantStore: ew,
                                        onStop: eY,
                                        onSubmit: ez,
                                        spaceId: d,
                                        isLoading: w,
                                        currentFormulaTextValue: G,
                                        sessionId: F
                                    }) : null,
                                    control: null
                                }
                            }), (0, k.jsx)("div", {
                                style: tY.inputText,
                                children: (0, k.jsx)(tV, {
                                    setIsLoading: A,
                                    store: Y,
                                    disabled: p || eF,
                                    parentSpaceId: d,
                                    valueTypes: m.valueTypes,
                                    errorRanges: ev,
                                    handleClose: eW,
                                    analyticsContext: {
                                        restrict_unaccessible_properties: m.restrictUnaccessibleProperties
                                    },
                                    onToggleAssistant: eR ? eK : void 0,
                                    isAssistantVisible: eH,
                                    parentCollectionStore: x
                                }, "input")
                            })]
                        }), (0, k.jsx)(e5, {
                            isLoading: eO,
                            hasErrors: eh,
                            hasWarnings: ex,
                            debouncedErrorMessagesWithRange: eb,
                            formulaResult: en,
                            returnType: V,
                            formulaSchema: C,
                            collectionStore: M,
                            selectedBlockStore: P,
                            setSelectedBlockStore: S,
                            showFixWithAiButton: eR && eV && eL,
                            isAiGenerating: eF,
                            onFixWithAi: eR && eV && eL ? () => ez("Fix this") : void 0
                        }), p ? void 0 : (0, k.jsxs)("div", {
                            style: tY.bottomSection,
                            children: [(0, k.jsx)("div", {
                                style: tY.leftColumn,
                                children: (0, k.jsx)(eI, {
                                    store: Y,
                                    context: m,
                                    selection: $,
                                    cursorEditorInfo: ek,
                                    cursorEditorInfoRef: eC,
                                    onChange: O,
                                    getRecordModel: e.getRecordModel,
                                    setInfoHelper: ej,
                                    isLoading: w,
                                    isAssistantGenerating: eF
                                })
                            }), n(986939).A.isMobile ? void 0 : (0, k.jsx)(n(4458).VP, {
                                flexGrow: 1,
                                children: (0, k.jsx)(eu, {
                                    infoHelper: eM,
                                    getRecordModel: e.getRecordModel,
                                    style: tY.infoHelper,
                                    typecheckContextValues: m.valueTypes,
                                    isLoading: w
                                })
                            })]
                        })]
                    })
                })
            }
        },
        87490: (e, t, n) => {
            n.d(t, {
                Y: () => p
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                o = n(474848);
            let r = (0, n(109939).YK)({
                pickPageToPreview: {
                    id: "formulas.editor.pickPageToPreview",
                    defaultMessage: "Preview a page’s formula result"
                },
                searchPlaceholder: {
                    id: "formulas.editor.searchPlaceholder",
                    defaultMessage: "Search"
                },
                noResults: {
                    id: "formulas.editor.noResults",
                    defaultMessage: "No results"
                },
                newPage: {
                    id: "formulas.editor.newPage",
                    defaultMessage: "New page"
                },
                selectPagePlaceholder: {
                    id: "formulas.editor.selectPagePlaceholder",
                    defaultMessage: "Select a page"
                }
            });

            function a(e, t) {
                let i = e.getModel(),
                    o = !i || i.isEmptyPage(),
                    a = i ? e.getProperties() : void 0;
                return {
                    menuTitle: (a ? (0, n(536614).r4)(a.title, e) : "") || t.formatMessage(r.newPage),
                    iconValue: e.getIcon(),
                    isEmptyPage: o
                }
            }

            function l(e) {
                let {
                    menuListItemProps: t,
                    blockStore: i,
                    selectedBlockStore: r,
                    intl: l
                } = e, {
                    menuTitle: s,
                    iconValue: u,
                    isEmptyPage: d
                } = (0, n(682985).K8)(() => a(i, l), [i, l]), p = (0, o.jsx)(n(569553).B6, {
                    disabled: !0,
                    icon: u,
                    iconRecordCategory: "pageBlock",
                    isEmptyPage: d,
                    size: 16,
                    title: s,
                    defaultIcon: (0, o.jsx)(n(863637).A, {
                        size: 16,
                        isEmptyPage: d,
                        role: "reader"
                    })
                });
                return (0, o.jsx)(n(990345).A, {
                    store: i,
                    delayThreshold: 0,
                    placement: "right",
                    children: e => (0, o.jsx)("div", { ...e,
                        children: (0, o.jsx)(n(95582).A, { ...t,
                            title: (0, o.jsx)(n(90459).O, {
                                name: s,
                                icon: p,
                                isSmall: !0
                            }),
                            shouldWrapCaption: !0,
                            isChecked: (null == r ? void 0 : r.id) === i.id
                        })
                    })
                })
            }
            let s = {
                selectorButton: {
                    padding: 4,
                    opacity: 1,
                    backgroundColor: "transparent",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 2,
                    fontSize: n(699422).J.UISmall.desktop,
                    color: n(632079).Tj.text.secondary,
                    fontWeight: n(699422).Wy.medium,
                    height: 24,
                    maxWidth: 200,
                    ...n(699422).RC
                },
                selectorButtonText: {
                    textOverflow: "ellipsis",
                    color: n(632079).Tj.text.primary
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function u({
                intl: e,
                events: t,
                currentOptionFull: i,
                disabled: a
            }) {
                return (0, o.jsxs)(n(988022).p, { ...t,
                    style: s.selectorButton,
                    disabled: a,
                    children: [(0, o.jsx)(n(324489).V, {
                        style: s.selectorButtonText,
                        children: i ? (0, o.jsx)(n(90459).O, {
                            name: i.menuTitle,
                            icon: i.icon,
                            isSmall: !0
                        }) : (0, o.jsx)(n(90459).O, {
                            name: e.formatMessage(r.selectPagePlaceholder),
                            isSmall: !0
                        })
                    }), (0, o.jsx)(n(16275).I, {
                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                        size: "xs"
                    })]
                })
            }
            let d = {
                style0: {
                    width: "100%",
                    paddingTop: 8,
                    paddingBottom: 2,
                    marginBottom: 8
                },
                style1: {
                    fontSize: n(986939).A.isMobile ? 16 : void 0,
                    marginBottom: n(986939).A.isMobile ? 16 : void 0
                }
            };

            function p(e) {
                let {
                    disabled: t,
                    setSelectedBlockStore: p,
                    selectedBlockStore: c,
                    menuProps: m,
                    inputProps: y,
                    collectionStore: f
                } = e, g = (0, n(533992).v3)(), [h, x] = (0, i.useState)(""), b = f.id, v = (0, n(682985).K8)(() => f.getSpaceId(), [f]), k = (0, n(109939).tz)(), [{
                    value: T
                }] = (0, n(97668).Yb)(async () => {
                    if (!b) return {
                        results: []
                    };
                    let e = await n(308825).T.searchActions.load();
                    return await e.searchPagesInCollection({
                        environment: g,
                        query: h,
                        collectionId: b,
                        spaceId: v,
                        excludeTemplates: !0,
                        source: "formula_editor_page_picker",
                        limit: 20,
                        includePublicPagesWithoutExplicitAccess: !1,
                        boostRecentlyViewedPages: !0
                    })
                }, [g, h, b, v], {
                    debounce: 300,
                    debugName: "FormulaResultDropdownMenu_searchPages"
                }), I = (0, n(682985).K8)(() => T && f ? T.results.map(e => n(970831).B.createChildStore(f, {
                    table: n(832375).evP,
                    id: e
                })).filter(e => null !== e).map(e => e) : [], [T, f]), C = (0, i.useMemo)(() => I.map(e => ({
                    key: e.id,
                    action: () => {
                        p(e)
                    },
                    render: t => (0, o.jsx)(l, {
                        menuListItemProps: t,
                        blockStore: e,
                        selectedBlockStore: c,
                        intl: k
                    })
                })), [I, c, p, k]), M = I.length > 0, j = (0, n(682985).K8)(() => c ? function(e, t) {
                    let {
                        menuTitle: i,
                        iconValue: r,
                        isEmptyPage: l
                    } = a(e, t);
                    return {
                        menuTitle: i,
                        icon: (0, o.jsx)(n(569553).B6, {
                            disabled: !0,
                            icon: r,
                            iconRecordCategory: "pageBlock",
                            isEmptyPage: l,
                            size: 16,
                            title: i,
                            defaultIcon: (0, o.jsx)(n(863637).A, {
                                size: 16,
                                isEmptyPage: l,
                                role: "reader"
                            })
                        })
                    }
                }(c, k) : void 0, [c, k]);
                return (0, o.jsx)(n(656252).A, {
                    popupType: n(986939).A.isMobile ? n(182718).nl.BottomSheet : n(182718).nl.Popup,
                    bottomSheetInitialState: n(986939).A.isMobile ? "half" : void 0,
                    placementToOrigin: "bottom",
                    disabled: t,
                    content: e => {
                        let t, i = (0, o.jsx)(n(310324).Ay, {
                            style: d.style0,
                            placeholder: k.formatMessage(r.searchPlaceholder),
                            onChange: e => x(e.target.value),
                            value: h,
                            ...y
                        });
                        return t = n(986939).A.isMobile ? {
                            menuType: n(649476).gu.Modal,
                            title: k.formatMessage(r.pickPageToPreview),
                            right: (0, o.jsx)(n(109939).sA, { ...n(789722).W.done
                            }),
                            onClickRight: () => e.close(),
                            minWidth: 260,
                            header: (0, o.jsx)(n(844565).A, {
                                children: i
                            }),
                            ...m
                        } : {
                            menuType: n(649476).gu.Popup,
                            width: 260,
                            maxHeight: 240,
                            header: i,
                            ...m
                        }, (0, o.jsx)(n(747369).A, { ...t,
                            children: M ? (0, o.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "dropdown.menuList",
                                    items: C
                                }],
                                initialFocus: 0,
                                onAccept: (t, n) => {
                                    t.action(n), e.close()
                                },
                                style: d.style1
                            }) : (0, o.jsx)(n(4458).VP, {
                                padding: 8,
                                className: "autolayout-fill-width",
                                style: s.positionRelative,
                                children: (0, o.jsx)(n(324489).V, {
                                    isSmall: !0,
                                    children: k.formatMessage(r.noResults)
                                })
                            })
                        })
                    },
                    children: e => (0, o.jsx)(u, {
                        disabled: t,
                        intl: k,
                        events: e,
                        currentOptionFull: j
                    })
                })
            }
        },
        116789: (e, t, n) => {
            n.d(t, {
                o: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 4.12 15.76 12.16",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.625 8A2.625 2.625 0 0 0 14 5.375h-1.42a.625.625 0 1 1 0-1.25H14a3.875 3.875 0 0 1 0 7.75H4.259l3.333 3.333a.625.625 0 0 1-.884.884l-4.4-4.4a.625.625 0 0 1 0-.884l4.4-4.4a.625.625 0 0 1 .884.884l-3.333 3.333H14A2.625 2.625 0 0 0 16.625 8"
                    })
                },
                o = (0, n(104509).wt)("arrowUTurnDownLeft", i, "default")
        },
        122455: (e, t, n) => {
            n.r(t), n.d(t, {
                getAllContextValues: () => f,
                getAllGuaranteedPropertyIds: () => x,
                getContextValueForActionById: () => h,
                getContextValuesForAction: () => g,
                typecheckAutomation: () => m,
                typecheckAutomationAsync: () => y
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(803949), n(581454), n(737550);
            var i = () => n(381453),
                o = () => n(300441),
                r = () => n(358021),
                a = () => n(297493),
                l = () => n(833162),
                s = () => n(967148),
                u = () => n(600005),
                d = () => n(756416),
                p = () => n(773329);

            function* c(e) {
                let t, c, m, {
                        actionModels: y,
                        automationModel: f,
                        contextType: g,
                        formulasModule: h,
                        runtimeStats: x
                    } = e,
                    b = {
                        valueTypes: e.valueTypes,
                        actionInputValueTypes: {},
                        guaranteedPropertyIds: new Set,
                        actionValidationFailures: {},
                        actionValidationWarnings: {}
                    },
                    v = performance.now();
                if ("button_block" === g || "button_property" === g) {
                    if (!f.isButtonType()) return {
                        error: new(u()).N9(`Automation trigger (${f.getTriggerType()}) does not match context type (${g}).`)
                    };
                    let t = f.getTrigger();
                    m = (0, n(584796).Z)(f.getTriggerType()).typecheck(e, t)
                } else if ("event" === g) {
                    if (!f.isEventType()) return {
                        error: new(u()).N9(`Automation trigger (${f.getTriggerType()}) does not match context type (${g}).`)
                    };
                    let t = f.getTrigger();
                    m = (0, n(584796).Z)(f.getTriggerType()).typecheck(e, t)
                } else if ("recurrence" === g) {
                    if (!f.isRecurrenceType()) return {
                        error: new(u()).N9(`Automation trigger (${f.getTriggerType()}) does not match context type (${g}).`)
                    };
                    let t = f.getTrigger();
                    m = (0, n(584796).Z)(f.getTriggerType()).typecheck(e, t)
                } else(0, n(722371).HB)(e);
                if (o().Q.isFail(m)) return m;
                for (let n of (b.valueTypes.push(...i().o8(m.value.valueTypes)), y)) {
                    var k;
                    t = void 0, x && (t = p().hs.getOrCreateAction(x, n.pointer, n.getType()));
                    let m = (0, l().getActionRegistryItem)(n.getType());
                    if (!m) {
                        c = {
                            error: new(u()).oM({
                                actionId: n.id,
                                message: `Unsupported action type: ${n.getType()}`
                            })
                        };
                        break
                    }
                    let y = performance.now(),
                        g = (0, s().Q)({
                            automationModel: f,
                            formulasModule: h,
                            formulaValueTypes: b.valueTypes,
                            checkExperimentGate: e.checkExperimentGate
                        }),
                        v = (0, d().HI)((yield* m.resolveExecutionDependencies(g, n)));
                    yield* r().q.fetchRecords(v.map(e => e.pointer)), t && (t.totalDependencies = v.length, t.getDependenciesDurationMs = Math.trunc(performance.now() - y));
                    let T = m.typecheck(e, n),
                        I = i().o8(b.valueTypes);
                    if (b.actionInputValueTypes[n.id] = I, o().Q.isFail(T)) {
                        c = T;
                        break
                    }
                    for (let e of T.value.valueTypes ? ? []) b.valueTypes.some(t => (0, a().oH)(e, t)) || b.valueTypes.push(e);
                    null == (k = T.value.guaranteedPropertyIds) || k.forEach(e => {
                        b.guaranteedPropertyIds.add(e)
                    }), T.value.validationFailures && T.value.validationFailures.length > 0 && (b.actionValidationFailures[n.id] = T.value.validationFailures), T.value.validationWarnings && T.value.validationWarnings.length > 0 && (b.actionValidationWarnings[n.id] = T.value.validationWarnings)
                }
                let T = Math.trunc(performance.now() - v);
                return x && (x.typecheckStartTime = v, x.typecheckDurationMs = T, x.typecheckSuccess = !(0, n(722371).O9)(c)), c ? ? {
                    value: b
                }
            }

            function m(e) {
                return r().q.runSync(e.getRecordModel, c(e))
            }
            async function y(e) {
                return await r().q.runAsync(e.loadRecordModel, c(e))
            }

            function f(e) {
                return o().Q.isFail(e) ? [] : e.value.valueTypes.slice(0)
            }

            function g(e, t) {
                return o().Q.isFail(e) ? [] : e.value.actionInputValueTypes[t] ? ? []
            }

            function h(e, t, n) {
                let i = g(e, t);
                return (0, a().IV)(i, n)
            }

            function x(e) {
                return o().Q.isFail(e) ? new Set : e.value.guaranteedPropertyIds
            }
        },
        208023: (e, t, n) => {
            n.r(t), n.d(t, {
                canAcceptAutocompletionsWithoutDot: () => f,
                getFormulaEditorInfoAtPosition: () => g
            }), n(18107), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(967357), n(898992), n(354520), n(672577), n(803949), n(581454);
            var i = () => n(722371),
                o = () => n(464930),
                r = () => n(416901),
                a = () => n(484132),
                l = () => n(944897),
                s = () => n(297493),
                u = () => n(137938);
            async function d(e, t, l) {
                let u = [],
                    d = new Set;
                if (void 0 !== e) {
                    let o = t.handleDataRequest({
                            recordPointers: [e]
                        }),
                        c = (0, n(975162).yL)(o) ? await o : o,
                        m = c.getRecordModel(e),
                        y = null == m ? void 0 : m.getNormalizedSchema(c.getRecordModel);
                    if (y) {
                        for (let [n, o] of Object.entries(y))
                            if ((null == o ? void 0 : o.type) !== void 0 && (0, i().Xk)(r().FormulaTokenSupportedBlockSystemPropertyList, null == o ? void 0 : o.type) && d.add(o.type), n !== t.sourceProperty && null != o && o.name && r().FORMULAS_SUPPORTED_COLLECTION_PROPERTY_TYPES.includes(null == o ? void 0 : o.type) && p(l, o.name)) {
                                let i;
                                "cross_space_only" === t.restrictUnaccessibleProperties ? i = a().hasSameSpaceAccess : "read_permissions_only" === t.restrictUnaccessibleProperties ? i = a().hasReadPermissionsAccess : "cross_space_and_read_permissions" === t.restrictUnaccessibleProperties && (i = a().hasAccessDefaultFn), (!t.restrictUnaccessibleProperties || !i || await (0, a().hasAccessToProperty)({
                                    collectionPointer: e,
                                    collectionSchema: y,
                                    context: t,
                                    propertyId: n,
                                    hasAccessFn: i
                                })) && u.push({
                                    kind: r().FormulaEditorInfoCompletionKind.Token,
                                    name: o.name,
                                    token: {
                                        type: r().FormulaTokenType.BlockProperty,
                                        property: (0, s().XH)(n),
                                        collection: e
                                    }
                                })
                            }
                    }
                }
                for (let e of Object.values(r().FormulaTokenSupportedBlockSystemProperty)) {
                    if (d.has(e)) continue;
                    let t = (0, o().i)(e);
                    ("" === l || p(l, t)) && u.push({
                        kind: r().FormulaEditorInfoCompletionKind.Token,
                        token: {
                            type: r().FormulaTokenType.BlockProperty,
                            property: e,
                            collection: void 0
                        },
                        name: t
                    })
                }
                return u
            }

            function p(e, t) {
                return "" === e || (0, n(821048).It)(e, t)
            }
            async function c(e) {
                var t, i, o, a;
                let {
                    prefix: l,
                    context: c,
                    receiverType: m,
                    includeDeprecatedCompletions: y,
                    dotMemberExpression: f
                } = e, g = [], h = [], x = [], b = new Set;
                if (void 0 === m) {
                    c.valueTypes.forEach(e => {
                        if (e.kind === r().FormulaContextValueKind.Binding) {
                            let t = e.id;
                            !b.has(t) && l !== e.id && p(l, e.id) && (g.push({
                                kind: r().FormulaEditorInfoCompletionKind.Binding,
                                text: t,
                                type: e.type
                            }), b.add(t))
                        }
                    });
                    let e = null == (t = c.valueTypes.find(e => e.kind === r().FormulaContextValueKind.ThisRow)) ? void 0 : t.type;
                    (null == e ? void 0 : e.type) === "block" && void 0 !== e.collection && h.push(...await d(e.collection, c, l)), c.valueTypes.forEach(e => {
                        if (e.kind === r().FormulaContextValueKind.ContextValue && p(l, e.name)) {
                            let t = (0, s().Bk)(e.id);
                            h.push({
                                kind: r().FormulaEditorInfoCompletionKind.Token,
                                name: e.name,
                                token: {
                                    type: r().FormulaTokenType.ContextValue,
                                    valueId: t
                                }
                            })
                        }
                    })
                } else "block" === m.type && h.push(...await d(m.collection, c, l));
                let v = new Map;
                for (let e in u().LP)
                    if (!b.has(e) && p(l, e) && !(!y && e.startsWith("_")) && !("toNumber" === e && null != m && m.type && u().Qi.includes(m.type)) && !(f && u().bq.includes(e)) && !(null != (i = c.featureGates.formulas_disabled_functions) && i.includes(e))) {
                        let t = u().LP[e];
                        if (void 0 !== m) {
                            let e = (null == (o = t.parameters) || null == (o = o.expected) || null == (o = o[0]) ? void 0 : o.type) ? ? (null == (a = t.parameters) || null == (a = a.varargs) || null == (a = a[0]) ? void 0 : a.type);
                            if (void 0 === e || !(0, s().s7)(m, e)) continue
                        }
                        let n = {
                                kind: r().FormulaEditorInfoCompletionKind.LibraryFunction,
                                libraryFunction: t
                            },
                            i = u().u_[e] || "generic";
                        if ("internal" === i) continue;
                        v.has(i) || v.set(i, []), v.get(i).push(n), b.add(e)
                    }
                for (let e of Array.from(v.keys()).sort((e, t) => "generic" === e ? -1 : "generic" === t ? 1 : e.localeCompare(t))) {
                    let t = v.get(e);
                    x.push(...t)
                }
                return [...(0, n(821048).Ay)(l, g, e => e.text), ...(0, n(821048).Ay)(l, h, e => e.name ? ? ""), ...(0, n(821048).Ay)(l, [], e => e.builtin), ...(0, n(821048).Ay)(l, x, e => e.libraryFunction.name)]
            }

            function m(e, t) {
                let n = [...e].reverse().find(e => e.kind === l().NM.Call);
                if ((null == n ? void 0 : n.kind) === l().NM.Call) {
                    let e = -1;
                    if (t > n.lParenOffset && (void 0 === n.rParenOffset || t <= n.rParenOffset))
                        for (e = 0; e < n.commaOffsets.length && !(n.commaOffsets[e] > t); e++);
                    return {
                        expression: n.expression,
                        parameterIndex: e
                    }
                }
            }
            let y = {
                [r().FormulaEditorInfoCompletionKind.Binding]: 0,
                [r().FormulaEditorInfoCompletionKind.Token]: 1,
                [r().FormulaEditorInfoCompletionKind.Builtin]: 2,
                [r().FormulaEditorInfoCompletionKind.LibraryFunction]: 3
            };

            function f(e) {
                let {
                    nodeAtPosition: t,
                    dotMemberExpression: n
                } = e;
                return !!n && !!t && (t.kind === l().NM.NotionToken || t.kind === l().NM.MemberBlockProperty || t.kind === l().NM.Call || t.kind === l().NM.Boolean || t.kind === l().NM.Number || t.kind === l().NM.String || t.kind === l().NM.Array)
            }
            async function g(e) {
                var t, i, o, a, d, g, x, b, v, k, T, I, C, M;
                let j, {
                        formula: P,
                        inputPosition: S,
                        context: w,
                        includeDeprecatedCompletions: A
                    } = e,
                    [_, E] = (0, n(301040).kb)(P),
                    F = (0, n(301040).NZ)(E, S),
                    B = _.substring(0, F),
                    R = B[B.length - 1],
                    D = /[\s.]/.test(R);
                D && (B = `${B}_`);
                let N = (0, n(888085).p8)(),
                    V = (0, n(888085).TM)(N).tokenize(B).tokens,
                    L = (0, n(888085)._M)(N);
                L.input = V;
                let H = L.expression(),
                    K = (0, n(892016).f)(H);
                if (n(300441).Q.isFail(K)) return {
                    value: void 0
                };
                let {
                    node: U
                } = await (0, n(929579)._)(K.value, w, E), z = V[V.length - 1], Y = !1, W = V;
                void 0 !== z && (0, n(303151).G)(z, N.IdentifierName) && ((W = [...W]).pop(), Y = !0);
                let O = L.computeContentAssist("expression", W),
                    $ = Y ? z.image.substring(0, z.image.length - !!D) : void 0,
                    G = (0, s().Kp)(U, F),
                    q = G.at(-1),
                    Q = {
                        inputPosition: S,
                        mappedPosition: F,
                        nodePath: G,
                        callParameter: m(G, F)
                    };
                if (V.find(e => e.tokenType === N.UnclosedStringLiteral)) return Q.completions = [], {
                    value: Q
                };
                let Z = [],
                    J = m(G, F),
                    X = {
                        handleDataRequest: w.handleDataRequest,
                        restrictUnaccessibleProperties: w.restrictUnaccessibleProperties,
                        sourceProperty: w.sourceProperty,
                        spaceId: w.spaceId,
                        valueTypes: U.valueTypes,
                        featureGates: w.featureGates
                    };
                for (let e = 1; e <= 5; e++) {
                    let t = (0, s().Kp)(U, F - e);
                    if (void 0 !== (j = t[t.length - 1])) break
                }(null == (t = j) ? void 0 : t.kind) === l().NM.RecoveryNode && (j = void 0);
                let ee = void 0 !== j,
                    et = !j || j.kind === l().NM.Unary || j.kind === l().NM.Equality || j.kind === l().NM.Identifier,
                    en = !j || j.kind === l().NM.Equality || j.kind === l().NM.Identifier;
                for (let e of O)
                    if (e.nextTokenType === N.IdentifierName || e.nextTokenType === N.Dot) {
                        let t = "dotMemberExpression" === e.ruleStack[e.ruleStack.length - 1];
                        if (q && t) {
                            if (q.kind === l().NM.UnifiedFunctionProperty) {
                                let e = q.expression;
                                Q.completionsInfo = {
                                    type: "member dot receiver",
                                    prefix: $,
                                    receiverNode: e
                                };
                                let n = await c({
                                    prefix: $ ? ? "",
                                    context: X,
                                    receiverType: e.type,
                                    includeDeprecatedCompletions: A,
                                    dotMemberExpression: t
                                });
                                Z.push(...n)
                            } else if (f({
                                    nodeAtPosition: q,
                                    dotMemberExpression: t
                                })) {
                                Q.completionsInfo = {
                                    type: "member dot receiver",
                                    prefix: $,
                                    receiverNode: q
                                };
                                let e = await c({
                                    prefix: $ ? ? "",
                                    context: X,
                                    receiverType: q.type,
                                    includeDeprecatedCompletions: A,
                                    dotMemberExpression: t
                                });
                                Z.push(...e)
                            }
                        } else {
                            Q.completionsInfo = {
                                type: "free identifier",
                                prefix: $
                            };
                            let e = await c({
                                prefix: $ ? ? "",
                                context: X,
                                includeDeprecatedCompletions: A,
                                dotMemberExpression: t
                            });
                            if (Z.push(...e), J && (J.expression.kind === l().NM.UnifiedFunctionProperty && 0 === J.parameterIndex || J.expression.kind === l().NM.Identifier && 1 === J.parameterIndex)) {
                                let e = J.expression.kind === l().NM.UnifiedFunctionProperty ? J.expression.name : J.expression.text,
                                    t = u().LP[e];
                                if (((null == t ? void 0 : t.parameters) === u().Ux || (null == t ? void 0 : t.parameters) === u().MB) && p($ ? ? "", r().CURRENT_VALUE_NAME) && $ !== r().CURRENT_VALUE_NAME && $ !== `${r().CURRENT_VALUE_NAME}.`) {
                                    let e = J.expression,
                                        t = "function" === e.type.type && (null == (I = e.type.boundTargetType) ? void 0 : I.type) === "array" && (null == (C = e.type.boundTargetType) ? void 0 : C.of) || {
                                            type: "unknown"
                                        };
                                    Z.push({
                                        kind: r().FormulaEditorInfoCompletionKind.Binding,
                                        text: r().CURRENT_VALUE_NAME,
                                        type: t
                                    }), Z.push({
                                        kind: r().FormulaEditorInfoCompletionKind.Binding,
                                        text: r().CURRENT_INDEX_NAME,
                                        type: {
                                            type: "number"
                                        }
                                    })
                                }
                            }
                        }
                    } else if (e.nextTokenType === N.AdditionOperator && ee && (null == q ? void 0 : q.type.type) !== l().NM.Array && (null == (o = j) ? void 0 : o.type.type) === "text") {
                    let e = h(["+"], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.AdditionOperator && ee && (null == q ? void 0 : q.type.type) !== l().NM.Array && (null == (a = j) ? void 0 : a.type.type) === "number") {
                    let e = h(["+", "-"], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.MultiplicationOperator && ee && (null == q ? void 0 : q.type.type) !== l().NM.Array && (null == (d = j) ? void 0 : d.type.type) === "number") {
                    let e = h(["*", "/"], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.RelationalOperator && ee && (null == q ? void 0 : q.type.type) !== l().NM.Array && ((null == (g = j) ? void 0 : g.type.type) === "number" || (null == (x = j) ? void 0 : x.type.type) === "text" || (null == (b = j) ? void 0 : b.type.type) === "date")) {
                    let e = h([">", ">=", "<", "<="], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.EqualityOperator && ee && null != (v = j) && v.type.type && (null == (k = j) ? void 0 : k.type.type) !== "unknown") {
                    let e = h(["==", "!="], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.BooleanLiteral && et) {
                    let e = h(["true", "false"], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.And && ee && (null == (T = j) ? void 0 : T.type.type) === "checkbox") {
                    let e = h(["and", "or"], $ ? ? "");
                    Z.push(...e)
                } else if (e.nextTokenType === N.UnaryOperator && en) {
                    let e = h(["not"], $ ? ? "");
                    Z.push(...e)
                }
                let ei = null == (i = V[V.length - 1]) ? void 0 : i.tokenType;
                if (0 === Z.length && ei === N.IdentifierName) {
                    let e = V.slice(-4).reverse(),
                        t = [];
                    for (let n = 0; n < e.length && (null == (M = e[n]) ? void 0 : M.tokenType) === N.IdentifierName; n++) {
                        let i = Y ? e[n].image.substring(0, e[n].image.length - !!D) : void 0;
                        void 0 !== i && (0 === n ? t.push(i) : t.push(i + t[n - 1]))
                    }
                    let n = [];
                    for (let e = 1; e < t.length; e++) {
                        let i = t[e],
                            o = await c({
                                prefix: i.trim(),
                                context: X,
                                includeDeprecatedCompletions: A,
                                dotMemberExpression: !1
                            });
                        o.length > 0 && (n = o.map(t => ({ ...t,
                            overridePrefixLength: i.length + e
                        })))
                    }
                    Z.push(...n)
                }
                return Q.completions = Z.sort((e, t) => {
                    let n = e.kind,
                        i = t.kind;
                    return y[n] - y[i]
                }), {
                    value: Q
                }
            }

            function h(e, t) {
                return e.filter(e => p(t, e)).map(e => ({
                    kind: r().FormulaEditorInfoCompletionKind.Builtin,
                    builtin: e
                }))
            }
        },
        230796: (e, t, n) => {
            n.d(t, {
                Eo: () => f,
                Fz: () => d,
                KI: () => o,
                M4: () => a,
                YW: () => x,
                iY: () => b,
                mO: () => p,
                qE: () => l,
                vm: () => m
            });
            let i = (0, n(109939).YK)({
                buttonAutomationCurrentUserDescription: {
                    defaultMessage: "The user who clicked this button",
                    id: "automations.contextValue.buttonAutomationCurrentUserDescription"
                },
                buttonAutomationCurrentUserName: {
                    defaultMessage: "Whoever clicked",
                    id: "automations.contextValue.buttonAutomationCurrentUserName"
                },
                buttonAutomationCurrentUserTooltip: {
                    defaultMessage: "The person who clicked the button",
                    id: "automations.contextValue.buttonAutomationCurrentUserTooltip"
                },
                buttonAutomationThisPageDescription: {
                    defaultMessage: "The page containing this button",
                    id: "automations.contextValue.buttonAutomationThisPageDescription"
                },
                buttonAutomationThisPageName: {
                    defaultMessage: "This page",
                    id: "automations.contextValue.buttonAutomationThisPageName"
                },
                buttonAutomationThisPageTooltip: {
                    defaultMessage: "The page containing this button",
                    id: "automations.contextValue.buttonAutomationThisPageTooltip"
                },
                eventAutomationCurrentUserDescription: {
                    defaultMessage: "The user who made the edit that triggered this automation to run.",
                    id: "automations.contextValue.eventAutomationCurrentUserDescription"
                },
                eventAutomationCurrentUserName: {
                    defaultMessage: "Whoever triggered",
                    id: "automations.contextValue.eventAutomationCurrentUserName"
                },
                eventAutomationCurrentUserTooltip: {
                    defaultMessage: "The person whose action triggered this automation",
                    id: "automations.contextValue.eventAutomationCurrentUserTooltip"
                },
                eventAutomationThisPageDescription: {
                    defaultMessage: "The page that was edited to trigger this automation to run.",
                    id: "automations.contextValue.eventAutomationThisPageDescription"
                },
                eventAutomationThisPageName: {
                    defaultMessage: "Trigger page",
                    id: "automations.contextValue.eventAutomationThisPageName"
                },
                eventAutomationThisPageTooltip: {
                    defaultMessage: "The page that triggered this automation",
                    id: "automations.contextValue.eventAutomationThisPageTooltip"
                },
                now: {
                    id: "automations.triggers.now.label",
                    defaultMessage: "Time triggered"
                },
                nowDescription: {
                    id: "automations.triggers.now.description",
                    defaultMessage: "The time when this automation begins to run."
                },
                nowTooltip: {
                    id: "automations.triggers.now.tooltip",
                    defaultMessage: "The time this automation was triggered"
                },
                pageCreator: {
                    id: "automations.triggers.pageCreator.label",
                    defaultMessage: "Page creator"
                },
                pageCreatorDescription: {
                    id: "automations.triggers.pageCreator.description",
                    defaultMessage: "The user who created the page that was edited to trigger this automation to run."
                },
                pageCreatorTooltip: {
                    id: "automations.triggers.pageCreator.tooltip",
                    defaultMessage: "Person who created page"
                },
                today: {
                    id: "automations.triggers.today.label",
                    defaultMessage: "Date triggered"
                },
                todayDescription: {
                    id: "automations.triggers.today.description",
                    defaultMessage: "The date when this automation begins to run."
                },
                todayTooltip: {
                    id: "automations.triggers.today.tooltip",
                    defaultMessage: "The date this automation was triggered"
                }
            });

            function o() {
                return (0, n(297493).$y)({
                    source: "global",
                    global: "button_page"
                })
            }

            function r(e, t, i) {
                return {
                    description: i,
                    name: e,
                    tooltip: t,
                    compile: (r, a) => ({
                        description: i ? r.formatMessage(i) : void 0,
                        id: o(),
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        name: r.formatMessage(e),
                        tooltipName: r.formatMessage(t),
                        type: {
                            collection: a,
                            type: "block"
                        }
                    }),
                    evaluate: e => ({
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        id: o(),
                        value: {
                            type: "block",
                            value: e
                        }
                    })
                }
            }
            let a = r(i.buttonAutomationThisPageName, i.buttonAutomationThisPageTooltip, i.buttonAutomationThisPageDescription),
                l = r(i.eventAutomationThisPageName, i.eventAutomationThisPageTooltip, i.eventAutomationThisPageDescription);

            function s() {
                return (0, n(297493).$y)({
                    source: "global",
                    global: "current_user"
                })
            }

            function u(e, t, i) {
                return {
                    description: i,
                    name: e,
                    tooltip: t,
                    compile: o => ({
                        description: i ? o.formatMessage(i) : void 0,
                        id: s(),
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        name: o.formatMessage(e),
                        tooltipName: o.formatMessage(t),
                        type: {
                            type: "person"
                        }
                    }),
                    evaluate: e => ({
                        id: s(),
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        value: {
                            type: "person",
                            value: e
                        }
                    })
                }
            }
            let d = u(i.buttonAutomationCurrentUserName, i.buttonAutomationCurrentUserTooltip, i.buttonAutomationCurrentUserDescription),
                p = u(i.eventAutomationCurrentUserName, i.eventAutomationCurrentUserTooltip, i.eventAutomationCurrentUserDescription);

            function c() {
                return (0, n(297493).$y)({
                    source: "global",
                    global: "now"
                })
            }
            let m = {
                description: i.nowDescription,
                name: i.now,
                tooltip: i.nowTooltip,
                compile(e) {
                    return {
                        description: this.description ? e.formatMessage(this.description) : void 0,
                        id: c(),
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        name: e.formatMessage(this.name),
                        tooltipName: this.tooltip ? e.formatMessage(this.tooltip) : void 0,
                        type: {
                            type: "date"
                        }
                    }
                },
                evaluate: e => ({
                    id: c(),
                    kind: n(416901).FormulaContextValueKind.ContextValue,
                    value: {
                        type: "date",
                        value: (0, n(25825).KQ)(Date.now(), e)
                    }
                })
            };

            function y() {
                return (0, n(297493).$y)({
                    source: "global",
                    global: "today"
                })
            }
            let f = {
                description: i.todayDescription,
                name: i.today,
                tooltip: i.todayTooltip,
                compile(e) {
                    return {
                        description: this.description ? e.formatMessage(this.description) : void 0,
                        id: y(),
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        name: e.formatMessage(this.name),
                        tooltipName: this.tooltip ? e.formatMessage(this.tooltip) : void 0,
                        type: {
                            type: "date"
                        }
                    }
                },
                evaluate: e => ({
                    id: y(),
                    kind: n(416901).FormulaContextValueKind.ContextValue,
                    value: {
                        type: "date",
                        value: (0, n(25825).p6)(Date.now(), e)
                    }
                })
            };

            function g() {
                return (0, n(297493).$y)({
                    source: "global",
                    global: "page_creator"
                })
            }

            function h(e, t) {
                return {
                    description: i.pageCreatorDescription,
                    name: e,
                    tooltip: t,
                    compile(i) {
                        return {
                            description: this.description ? i.formatMessage(this.description) : void 0,
                            id: g(),
                            kind: n(416901).FormulaContextValueKind.ContextValue,
                            name: i.formatMessage(e),
                            tooltipName: i.formatMessage(t),
                            type: {
                                type: "person"
                            }
                        }
                    },
                    evaluate: e => ({
                        id: g(),
                        kind: n(416901).FormulaContextValueKind.ContextValue,
                        value: {
                            type: "person",
                            value: e
                        }
                    })
                }
            }
            let x = h(i.pageCreator, i.pageCreatorTooltip),
                b = h(i.pageCreator, i.pageCreatorTooltip)
        },
        268896: (e, t, n) => {
            n.d(t, {
                b: () => o,
                i: () => i
            });
            let i = {
                    wrapper: {
                        width: n(770657).k
                    },
                    coverContainer: {
                        height: 36,
                        zIndex: 1
                    },
                    breadcrumb: {
                        color: n(632079).Tj.text.tertiary,
                        fontSize: 11,
                        marginBottom: -2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "100%"
                    },
                    pageTitle: {
                        display: "inline",
                        fontWeight: n(699422).Wy.semibold,
                        color: n(632079).Tj.text.primary,
                        fontSize: 13,
                        lineHeight: 1.15
                    },
                    pageTitleIcon: {
                        zIndex: 2,
                        position: "relative",
                        marginInlineStart: 16,
                        marginTop: -15,
                        marginBottom: 8
                    },
                    pageTitleContainer: { ...(0, n(418676).pA)(2),
                        verticalAlign: "top",
                        lineHeight: 1.15
                    },
                    empty: {
                        height: 16
                    },
                    highlightedBlockWrapper: {
                        display: "flex",
                        marginBottom: 8
                    }
                },
                o = {
                    icon: {
                        height: 16,
                        width: 16,
                        fill: n(632079).Tj.purple.icon.accentPrimary,
                        marginInlineEnd: 2
                    },
                    title: {
                        fontSize: 12,
                        color: n(632079).Tj.purple.icon.accentPrimary
                    },
                    summary: { ...(0, n(418676).pA)(4),
                        fontSize: 12,
                        lineHeight: 1.35,
                        color: n(632079).Tj.text.secondary,
                        marginBottom: 12
                    },
                    contentCover: {
                        color: n(632079).Tj.text.primary,
                        fontSize: 11,
                        lineHeight: 1.5,
                        marginBottom: 0,
                        width: "110%",
                        transform: "translateX(-13px) translateY(-2px) scale(0.91)"
                    },
                    contentCoverEmpty: {
                        height: 16
                    },
                    imageCoverWrap: {
                        marginBottom: 16
                    },
                    contentCoverFade: {
                        height: 48,
                        background: `linear-gradient(to bottom, transparent, ${n(632079).Tj.background.elevated} 100%)`
                    },
                    loadingShimmer: {
                        marginBottom: 0
                    },
                    rendererBlockStyle: {
                        fontSize: 9
                    }
                }
        },
        272307: (e, t, n) => {
            n.r(t), n.d(t, {
                HoverPagePreview: () => a
            }), n(581454);
            var i = n(296540),
                o = n(474848);
            let r = {
                emptyPage: {
                    height: n(770657).w
                }
            };

            function a(e) {
                let {
                    store: t,
                    contentBlocks: a,
                    events: l,
                    size: s = "regular",
                    isDiscussion: u,
                    hideCover: d = !1,
                    hideIcon: p = !1,
                    hideTitle: c = !1
                } = e, m = (0, n(682985).K8)(() => (null == t ? void 0 : t.isEmptyPage()) ? ? !1, [t]), y = (0, n(682985).K8)(() => null == t ? void 0 : t.getIcon(), [t]), f = (0, i.useMemo)(() => t ? m ? (0, o.jsx)("div", {
                    style: r.emptyPage
                }) : a ? a.map((e, i) => (0, o.jsx)("div", {
                    style: n(268896).i.highlightedBlockWrapper,
                    children: (0, o.jsx)(n(892452).f, {
                        store: t,
                        startBlockId: null == e ? void 0 : e.id,
                        size: s,
                        isDiscussion: u
                    })
                }, `${e.id}_${i}`)) : (0, o.jsx)(n(892452).f, {
                    store: t,
                    size: s
                }) : null, [t, a, s, u, m]), g = (0, n(682985).K8)(() => (0, n(569553).Te)(t), [t]);
                return t ? (0, o.jsxs)("div", {
                    style: n(268896).i.wrapper,
                    ...l,
                    children: [d ? void 0 : (0, o.jsx)("div", {
                        style: n(268896).i.coverContainer,
                        children: (0, o.jsx)(n(15021).d, {
                            store: t,
                            disabled: !0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            height: 36,
                            proxyWidth: 260
                        })
                    }), p ? void 0 : (0, o.jsx)(n(569553).B6, {
                        disabled: !0,
                        icon: y,
                        iconRecordCategory: g,
                        isEmptyPage: m,
                        isLarge: !0,
                        disableShrinking: !0,
                        size: 26,
                        emojiSize: 26,
                        largeIcon: !0,
                        style: n(268896).i.pageTitleIcon
                    }), (0, o.jsxs)(n(4458).VP, {
                        gap: 4,
                        paddingInline: 16,
                        children: [c ? void 0 : (0, o.jsxs)(n(4458).VP, {
                            gap: 2,
                            children: [(0, o.jsx)(n(307983).Ay, {
                                store: t,
                                style: n(268896).i.breadcrumb
                            }), (0, o.jsx)("div", {
                                style: n(268896).i.pageTitleContainer,
                                children: (0, o.jsx)(n(627918).A, {
                                    shouldWrap: !0,
                                    maxLines: 2,
                                    store: t,
                                    style: n(268896).i.pageTitle
                                })
                            })]
                        }), f]
                    })]
                }) : null
            }
        },
        364270: (e, t, n) => {
            n.d(t, {
                B: () => i
            }), n(18107), n(967357);

            function i() {
                let e = n(912846).default.state.redoStack.at(-1);
                return e ? (0, n(856129).Q)(e) : void 0
            }
        },
        489828: (e, t, n) => {
            n.d(t, {
                F: () => o,
                i: () => r
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var i = n(296540);

            function o(e) {
                let {
                    actionId: t
                } = e ? ? {}, o = (0, n(605263).K4)();
                return (0, i.useMemo)(() => o ? (0, n(722371).O9)(t) ? (0, n(122455).getContextValuesForAction)(o.typecheckResult, t) : (0, n(122455).getAllContextValues)(o.typecheckResult) : [], [o, t])
            }

            function r() {
                let e = (0, n(605263).K4)();
                return e ? (0, n(122455).getAllGuaranteedPropertyIds)(e.typecheckResult) : new Set
            }
        },
        549972: (e, t, n) => {
            n.d(t, {
                YH: () => r,
                bi: () => o
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(803949), n(581454), n(908872);
            var i = () => n(381453);

            function o(e) {
                let t = "",
                    o = document.createElement("div");
                for (let r of (o.innerHTML = e, n(885711).zn(o))) {
                    let e = i().ih(r.data);
                    if (null !== r.parentElement && r.parentElement !== o) {
                        let n = (function(e) {
                            let {
                                parent: t,
                                root: n
                            } = e, i = new Set, o = t;
                            for (; o && o !== n;) o.classList.forEach(e => {
                                i.add(e)
                            }), o = o.parentElement ? ? void 0;
                            return Array.from(i)
                        })({
                            parent: r.parentElement,
                            root: o
                        }).join(" ");
                        t += `<span class="${n}">${e}</span>`
                    } else t += e
                }
                return t
            }

            function r(e, t) {
                var i;
                let o, r = {
                        text: a(e),
                        syntax: a(t)
                    },
                    l = (i = function(e, t) {
                        let n = e.slice(),
                            i = t.slice(),
                            o = [],
                            r = 0,
                            a = 0;
                        for (; r < n.length && a < i.length;) {
                            let e = n[r],
                                t = i[a];
                            e === t ? (o.push(e), r += 1, a += 1) : e < t ? (o.push(e), r += 1, i[a] -= e) : (o.push(t), n[r] -= t, a += 1)
                        }
                        return o
                    }(r.text, r.syntax), o = 0, i.reduce((e, t) => (e.push([o, t]), o += t, e), [])),
                    s = {
                        text: 0,
                        syntax: 0
                    },
                    u = {
                        text: 0,
                        syntax: 0
                    },
                    d = [],
                    p = e.map(n(247438).N8A).join("");
                for (let [e, n] of l) {
                    let i = e + n,
                        o = t[s.syntax],
                        a = {
                            value: p.substring(e, i),
                            textTokenIndex: s.text,
                            classNames: o && o[1]
                        };
                    d.push(a);
                    let l = r.text[s.text],
                        c = r.syntax[s.syntax];
                    i >= u.text + l && (s.text += 1, u.text += l), i >= u.syntax + c && (s.syntax += 1, u.syntax += c)
                }
                return d
            }

            function a(e) {
                return e.map(e => e[0].length)
            }
        },
        550224: (e, t, n) => {
            n.d(t, {
                Q: () => o
            }), n(296540);
            var i = n(474848);

            function o(e) {
                return (0, i.jsx)(n(24081).Q, { ...e,
                    theme: n(632079).Tj,
                    isMobile: n(986939).A.isMobile
                })
            }
        },
        584796: (e, t, n) => {
            n.d(t, {
                Z: () => o
            }), n(944114);
            let i = {
                button: {
                    type: "button",
                    getCreatePermissions(e) {
                        let {
                            parentPointer: t
                        } = e;
                        return [{
                            minimumRole: "read_and_write",
                            pointer: t,
                            type: "record_permission"
                        }]
                    },
                    getEditPermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "read_and_write",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    getManagePermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "read_and_write",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    getExecutePermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "reader",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    typecheck(e) {
                        let t, i, {
                                automationModel: o,
                                contextType: r,
                                getRecordModel: a,
                                intl: l
                            } = e,
                            s = n(230796).Fz.compile(l),
                            u = n(230796).vm.compile(l),
                            d = n(230796).Eo.compile(l),
                            p = o.getParentPointer();
                        if ("button_block" === r) {
                            if (e.pageBlockModel) {
                                let o = (0, n(975908).SH)({
                                    block: e.pageBlockModel,
                                    getRecordModel: a
                                });
                                t = n(230796).M4.compile(l, null == o ? void 0 : o.pointer), i = n(230796).YW.compile(l)
                            }
                        } else if ("button_property" === r) {
                            let e = a(p);
                            if ((null == e ? void 0 : e.table) !== n(46241).V) return {
                                error: new(n(600005)).N9(`Unable to load automation parent: ${n(496282).L3.toKey(p)}`)
                            };
                            t = n(230796).M4.compile(l, e.pointer), i = n(230796).YW.compile(l)
                        } else(0, n(722371).HB)(r);
                        return {
                            value: {
                                valueTypes: (0, n(381453).oE)([s, u, d, t, i])
                            }
                        }
                    },
                    execute(e) {
                        let {
                            formulaVariableResolution: t
                        } = e, {
                            executingUserPointer: i,
                            executingUserTimeZone: o,
                            thisPageBlockModel: r
                        } = t ? ? {}, a = r ? n(230796).M4.evaluate(r.pointer) : void 0, l = null == r ? void 0 : r.getCreatedByPointer(), s = l ? n(230796).YW.evaluate(l) : void 0, u = i ? n(230796).Fz.evaluate(i) : void 0, d = (0, n(714350).P)(), p = n(230796).vm.evaluate(o ? ? d), c = n(230796).Eo.evaluate(o ? ? d);
                        return {
                            value: {
                                values: (0, n(381453).oE)([a, s, u, p, c])
                            }
                        }
                    },
                    isAvailableForContext: e => !0
                },
                event: {
                    type: "event",
                    getCreatePermissions(e) {
                        let {
                            parentPointer: t,
                            spacePointer: n
                        } = e;
                        return [{
                            minimumRole: "editor",
                            pointer: t,
                            type: "record_permission"
                        }, {
                            minimumRole: "read_and_write",
                            pointer: n,
                            type: "record_permission"
                        }]
                    },
                    getEditPermissions(e) {
                        let {
                            automationModel: t
                        } = e, i = [{
                            minimumRole: "editor",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }, {
                            minimumRole: "read_and_write",
                            pointer: t.getSpacePointer(),
                            type: "record_permission"
                        }], o = t.getTrigger();
                        if ("event" === o.type) {
                            let e = o.event;
                            (0, n(722371).O9)(e.source) && "filter" !== e.source.type && (e.source.type === n(46241).V || e.source.type === n(435544).G ? i.push({
                                minimumRole: "reader",
                                pointer: e.source.pointer,
                                type: "record_permission"
                            }) : (0, n(722371).HB)(e.source))
                        }
                        return i
                    },
                    getManagePermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "editor",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }, {
                            minimumRole: "read_and_write",
                            pointer: t.getSpacePointer(),
                            type: "record_permission"
                        }]
                    },
                    getExecutePermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "reader",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    typecheck(e) {
                        let t, {
                                automationModel: i,
                                intl: o
                            } = e,
                            r = n(230796).mO.compile(o),
                            a = n(230796).iY.compile(o),
                            l = n(230796).vm.compile(o),
                            s = n(230796).Eo.compile(o),
                            u = i.getParentPointer();
                        return u.table === n(46241).V && (t = n(230796).qE.compile(o, u)), {
                            value: {
                                valueTypes: (0, n(381453).oE)([r, a, l, s, t])
                            }
                        }
                    },
                    execute(e) {
                        let {
                            formulaVariableResolution: t
                        } = e, {
                            executingUserPointer: i,
                            executingUserTimeZone: o,
                            thisPageBlockModel: r
                        } = t ? ? {}, a = r ? n(230796).qE.evaluate(r.pointer) : void 0, l = i ? n(230796).mO.evaluate(i) : void 0, s = (0, n(714350).P)(), u = n(230796).vm.evaluate(o ? ? s), d = null == r ? void 0 : r.getCreatedByPointer(), p = (0, n(722371).O9)(d) ? n(230796).iY.evaluate(d) : void 0, c = n(230796).Eo.evaluate(o ? ? s);
                        return {
                            value: {
                                values: (0, n(381453).oE)([a, l, u, c, p])
                            }
                        }
                    },
                    isAvailableForContext: e => !!e.actorOnlyEditedUnaliveColumns || e.hasPremiumAutomations
                },
                recurrence: {
                    type: "recurrence",
                    getCreatePermissions(e) {
                        let {
                            parentPointer: t
                        } = e;
                        return [{
                            minimumRole: "read_and_write",
                            pointer: t,
                            type: "record_permission"
                        }]
                    },
                    getEditPermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "read_and_write",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    getManagePermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "read_and_write",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    getExecutePermissions(e) {
                        let {
                            automationModel: t
                        } = e;
                        return [{
                            minimumRole: "reader",
                            pointer: t.getParentPointer(),
                            type: "record_permission"
                        }]
                    },
                    typecheck(e) {
                        let {
                            intl: t
                        } = e;
                        return {
                            value: {
                                valueTypes: [n(230796).vm.compile(t), n(230796).Eo.compile(t)]
                            }
                        }
                    },
                    execute(e) {
                        let {
                            formulaVariableResolution: t
                        } = e, {
                            executingUserTimeZone: i
                        } = t ? ? {}, o = (0, n(714350).P)();
                        return {
                            value: {
                                values: [n(230796).vm.evaluate(i ? ? o), n(230796).Eo.evaluate(i ? ? o)]
                            }
                        }
                    },
                    isAvailableForContext(e) {
                        let {
                            automation: t,
                            automationActions: i,
                            hasPremiumAutomations: o
                        } = e;
                        if (t.parent_table === n(682956).ev) return !0;
                        if (t.parent_table === n(46241).V) {
                            let e = n(412951).RecordMap.create();
                            for (let t of i) e.addModel(t);
                            return !!t.isCompleteSprintAutomation({
                                getRecordModel: n(993189).b4_.fromRecordMap(e)
                            }) || o
                        }(0, n(722371).HB)(t.parent_table)
                    }
                }
            };

            function o(e) {
                return i[e]
            }
        },
        632460: (e, t, n) => {
            n.d(t, {
                _: () => a
            }), n(581454);
            var i = n(296540),
                o = () => n(247438),
                r = n(474848);

            function a(e) {
                let {
                    currentUserId: t,
                    errorRanges: a,
                    getPublicBaseUrlForPage: s,
                    isAndroid: u,
                    isMobileNative: d,
                    isSafariOrIOS: p,
                    isFirefox: c,
                    isWindows: m,
                    parentSpaceId: y,
                    Prism: f,
                    store: g,
                    theme: h,
                    themeMode: x,
                    valueTypes: b,
                    textValue: v
                } = e, k = o().q4_(v), T = "notion", I = f.languages[T], C = document.createElement("div"), M = f.highlight(k, I, T);
                C.innerHTML = n(549972).bi(M);
                let j = n(381453).oE(Array.from(C.childNodes).map(l)),
                    P = v;
                for (let e of a) P = o().Mwp({
                    annotation: [o().Ifu.FormulaError],
                    selection: e,
                    textValue: P
                });
                let S = function({
                        syntaxTokens: e,
                        textValue: t,
                        store: i,
                        parentSpaceId: a,
                        valueTypes: l,
                        theme: s,
                        themeMode: u,
                        isAndroid: d,
                        isSafariOrIOS: p,
                        isFirefox: c,
                        isWindows: m,
                        isMobileNative: y,
                        currentUserId: f,
                        getPublicBaseUrlForPage: g,
                        errorRanges: h
                    }) {
                        let x = n(549972).YH(t, e),
                            b = t.map(o().uPN).map((e, t) => (0, n(605351).sT)({
                                annotations: e,
                                theme: s,
                                themeMode: u,
                                getRecordModel: i.getRecordModel,
                                spaceId: a,
                                isSafariOrIOS: p
                            })),
                            v = 0;
                        return x.map((e, g) => {
                            let x, k = t[e.textTokenIndex],
                                T = b[e.textTokenIndex],
                                I = e.value.length,
                                C = v,
                                M = v + I;
                            if (v = M, h)
                                for (let e of h) {
                                    let {
                                        startIndex: t,
                                        endIndex: n,
                                        severity: i
                                    } = e;
                                    if (void 0 !== t && void 0 !== n && C < n && M > t) {
                                        x = "warning" === i ? "formula-warning-underline" : "formula-error-underline";
                                        break
                                    }
                                }
                            if (o().qXl(k)) {
                                let e = [...T.classNames || [], ...x ? [x] : []];
                                return (0, n(605351).Au)({
                                    args: {
                                        textValue: {
                                            value: t,
                                            spaceId: a
                                        },
                                        getRecordModel: i.getRecordModel,
                                        getRecordRole: i.getRecordRole,
                                        disableHover: !1,
                                        disableStyleAnnotations: !1,
                                        disableInsertedDeletedAnnotations: !1,
                                        disableDateStyleAnnotations: !1,
                                        disableSuggestionAnnotations: !1,
                                        disableLinks: !1,
                                        userTimeZone: (0, n(714350).P)(),
                                        disabled: !1,
                                        isAndroid: d,
                                        isSafariOrIOS: p,
                                        isFirefox: c,
                                        isWindows: m,
                                        emojiType: "raw",
                                        highlightDiscussionId: void 0,
                                        theme: s,
                                        themeMode: u,
                                        intl: n(962299).A.getIntl(),
                                        renderedPageBlockId: void 0,
                                        parentBlockId: void 0,
                                        katex: void 0,
                                        isClient: !0,
                                        baseUrl: n(986939).A.domainBaseUrl,
                                        publicDomainName: n(986939).A.publicDomainName,
                                        currentUserId: f,
                                        getPublicBaseUrlForPageOrCollection: n(135007).d6,
                                        externalIntegrations: n(610463).A.integrations.state,
                                        formulaValueTypes: l,
                                        emojiData: n(753281).A.state,
                                        isMobileNative: y,
                                        isMobileNativeExternalLinkFixEnabled: n(218744).default.checkGate({
                                            gateName: "mobile_native_external_link_fix"
                                        }),
                                        displayInUserTimezone: !0
                                    },
                                    style: T.style,
                                    classNames: e,
                                    index: g,
                                    token: k,
                                    tokenValue: o().N8A(k),
                                    tokenAnnotations: o().uPN(k)
                                })
                            } {
                                let t = [e.classNames || "", ...T.classNames || [], ...x ? [x] : []];
                                return (0, r.jsx)("span", {
                                    className: t.join(" ").trim(),
                                    style: T.style,
                                    "data-token-index": e.textTokenIndex,
                                    children: e.value
                                }, g)
                            }
                        })
                    }({
                        store: g,
                        parentSpaceId: y,
                        valueTypes: b,
                        syntaxTokens: n(381453).oE(j),
                        textValue: v,
                        theme: h,
                        themeMode: x,
                        isAndroid: u,
                        isSafariOrIOS: p,
                        isFirefox: c,
                        isWindows: m,
                        isMobileNative: d,
                        getPublicBaseUrlForPage: s,
                        currentUserId: t,
                        errorRanges: a
                    }),
                    w = (0, r.jsxs)(i.Fragment, {
                        children: [S, (0, r.jsx)("span", {
                            children: "\n"
                        })]
                    });
                return n(595290).A.renderToStaticMarkup(w)
            }

            function l(e) {
                return n(885711).KH(e) ? [e.data] : n(885711).vq(e) ? [e.textContent || "", e.className] : void 0
            }
        },
        690105: (e, t, n) => {
            n.d(t, {
                _: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.76 13.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.75 3.125c-.897 0-1.625.728-1.625 1.625v10.5c0 .898.728 1.625 1.625 1.625H7.5c.897 0 1.625-.727 1.625-1.625V4.75c0-.897-.728-1.625-1.625-1.625zM4.375 4.75c0-.207.168-.375.375-.375H7.5c.207 0 .375.168.375.375v10.5a.375.375 0 0 1-.375.375H4.75a.375.375 0 0 1-.375-.375zM12.5 3.125c-.898 0-1.625.728-1.625 1.625v10.5c0 .898.727 1.625 1.625 1.625h2.75c.898 0 1.625-.727 1.625-1.625V4.75c0-.897-.727-1.625-1.625-1.625zm-.375 1.625c0-.207.168-.375.375-.375h2.75c.207 0 .375.168.375.375v10.5a.375.375 0 0 1-.375.375H12.5a.375.375 0 0 1-.375-.375z"
                    })
                },
                o = (0, n(104509).wt)("mediaPause", i, "default")
        },
        701512: (e, t, n) => {
            n.d(t, {
                l: () => i
            }), n(18107), n(967357);

            function i() {
                let e = n(912846).default.state.undoStack.at(-1);
                return e ? (0, n(856129).Q)(e) : void 0
            }
        },
        770657: (e, t, n) => {
            n.d(t, {
                k: () => i,
                w: () => o
            });
            let i = 260,
                o = 24
        },
        856129: (e, t, n) => {
            n.d(t, {
                Q: () => i
            });

            function i(e) {
                return {
                    getUserActions: () => e.userActions.slice(),
                    getFirstStore() {
                        var t;
                        return null == e || null == (t = e.transactions) || null == (t = t[0].stores) ? void 0 : t[0]
                    }
                }
            }
        },
        892452: (e, t, n) => {
            n.d(t, {
                f: () => r
            });
            var i = n(296540),
                o = n(474848);

            function r(e) {
                let t = (0, n(533992).v3)(),
                    {
                        store: r,
                        startBlockId: a,
                        size: l,
                        isDiscussion: s
                    } = e,
                    u = (0, n(682985).K8)(() => n(554181).E(r), [r]),
                    d = u && n(247438).FAw(u) >= 20,
                    p = (0, i.useMemo)(() => n(92513).JW(), []),
                    c = (0, n(682985).K8)(() => {
                        var e;
                        if ("tall" === l) return 200;
                        let t = r.getModel();
                        return t && t.isCollectionView() && !t.hasWikiBlockUri() && !(null != (e = r.getAssociatedCollectionStore()) && e.isPageTreeCollection()) ? 125 : 84
                    }, [l, r]),
                    m = "on" === (0, n(604306).r)("constant_time_page_lookup_in_memory_preview", {
                        enableEventTrailLogging: !0
                    }),
                    y = (0, i.useCallback)(e => {
                        m && e.exhausted && n(155095).Q.markVisited({
                            userId: t.currentUser.id,
                            pageId: r.pointer.id
                        })
                    }, [m, t, r.pointer.id]);
                return ((0, i.useEffect)(() => {
                    let e = n(287641).uk.getCurrentPageVisitId();
                    return n(611844).Z3(t, {
                        hover_session_id: p,
                        mentioned_page_id: r.pointer.id,
                        hover_content_type: d ? "ai_summary" : "content_preview",
                        page_visit_id: e
                    }), () => {
                        n(611844).Q_(t, {
                            hover_session_id: p,
                            hover_content_type: d ? "ai_summary" : "content_preview",
                            mentioned_page_id: r.pointer.id,
                            page_visit_id: e
                        })
                    }
                }, [t, p, d, r.pointer.id]), a || !d) ? (0, o.jsx)(n(742726).z, {
                    variant: "default",
                    store: r,
                    coverFormat: {
                        type: "page_content"
                    },
                    allowVideoPlayback: !1,
                    coverContentFadedOverlay: !0,
                    coverContentFadedOverlayStyle: n(268896).b.contentCoverFade,
                    coverHeight: c,
                    startBlockId: a,
                    contentWrapStyle: n(268896).b.contentCover,
                    imageCoverWrapStyle: n(268896).b.imageCoverWrap,
                    emptyGalleryCoverStyle: n(268896).b.contentCoverEmpty,
                    loadingShimmerStyle: n(268896).b.loadingShimmer,
                    showLoadingShimmer: !0,
                    showEmptyGalleryCover: !0,
                    onLoadProxiedImage: () => {},
                    rendererBlockStyle: n(268896).b.rendererBlockStyle,
                    renderAdditionalBlocks: !0,
                    exactBlockOnlyNoContentCover: s,
                    onContentReady: y
                }) : (0, o.jsx)("div", {
                    children: (0, o.jsx)("div", {
                        style: n(268896).b.summary,
                        children: (0, o.jsx)(n(644970).A, {
                            textValue: u,
                            parentStore: r
                        })
                    })
                })
            }
        },
        930253: (e, t, n) => {
            n.d(t, {
                y: () => i
            });

            function i(e) {
                let {
                    experimentId: t,
                    groups: i,
                    disableExposureLogging: o
                } = e;
                return i[function(e) {
                    let {
                        experimentId: t,
                        disableExposureLogging: i,
                        defaultGroup: o
                    } = e;
                    return (0, n(682985).K8)(() => n(218744).default.getEligibleGroup({
                        experimentId: t,
                        defaultGroup: o ? ? "control",
                        disableExposureLogging: i
                    }), [t, i, o])
                }({
                    experimentId: t,
                    disableExposureLogging: o
                })]
            }
        },
        990345: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = n(296540),
                o = n(474848);
            let r = i.memo(function({
                store: e,
                ...t
            }) {
                let r = (0, i.useCallback)(t => (0, o.jsx)(n(272307).HoverPagePreview, {
                    store: e,
                    events: t
                }), [e]);
                return (0, o.jsx)(n(51831).m, {
                    noStyle: !0,
                    delayThreshold: 400,
                    placement: "bottom",
                    alignment: "start",
                    ...t,
                    content: r
                })
            })
        }
    }
]);