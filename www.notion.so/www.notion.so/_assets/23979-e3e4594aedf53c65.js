"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [8836, 23979], {
        5556: (e, t, o) => {
            o.d(t, {
                u: () => r
            });

            function r(e) {
                let {
                    blocks: t,
                    transaction: r
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && o(966980).wm(e) && (0, o(210191).T)({
                        store: e,
                        transaction: r
                    })
                }
            }
        },
        78772: (e, t, o) => {
            function r(e, t) {
                var o, r;
                let i = [],
                    a = null == t || null == (o = t.getFormat()) ? void 0 : o.collection_view_default_template;
                a && i.push(a);
                let l = null == (r = e.getFormat()) ? void 0 : r.collection_default_template;
                l && i.push(l);
                let n = e.getTemplatePageStores();
                for (let e of i) {
                    if ("empty" === e) break;
                    let t = n.find(t => t.id === e.template_page_id);
                    if (null != t && t.getAlive()) return t
                }
            }
            o.d(t, {
                H: () => r
            }), o(944114), o(898992), o(672577)
        },
        95783: (e, t, o) => {
            o.d(t, {
                w: () => r
            }), o(16280), o(18107), o(967357), o(898992), o(737550);

            function r(e) {
                var t, r, i, a, l, n;
                let {
                    environment: s,
                    createBlockItem: d,
                    from: c,
                    inMemoryRecordCache: p,
                    transaction: u,
                    selection: m
                } = e;
                if (!d.templateRootBlockId || !d.createTemplate) throw Error("Invalid createBlock item.");
                let f = (m.length > 0 ? m[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    g = f ? s.idCreator.getSpaceIdCreatorSync(f) : void 0,
                    v = m.some(e => (0, o(398346).l)(e)),
                    h = d.createTemplate(s),
                    {
                        targetBlockStore: _
                    } = (0, o(963771).initializeTemplate)({
                        environment: s,
                        sourceBlockId: d.templateRootBlockId,
                        targetBlockPointer: (0, o(295447).zP)({
                            environment: s,
                            table: o(832375).evP,
                            spaceId: f
                        }),
                        sourceBlockSubtree: (0, o(412951).partialRecordMapToRecordMap)(h),
                        targetRecordCache: p,
                        transaction: u,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !v,
                        spaceIdCreator: g
                    });
                null == (r = d.postCreateCallback) || r.call(d, _, s, u);
                let [y] = m;
                if (o(205103).eY({
                        environment: s,
                        store: _,
                        transaction: u,
                        previousStore: y
                    }), c && d.blockType) {
                    let e, t, r, p, u = d.collectionViewType,
                        f = 0 !== m.length ? null == (i = m[0]) ? void 0 : i.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === u) {
                        let o = null == (a = _.getCollectionViewStores()) ? void 0 : a.at(0);
                        e = null == o || null == (l = o.getChartConfig()) ? void 0 : l.type, t = null == o ? void 0 : o.getChartPlaceholderType()
                    }
                    if ("form_editor" === u) {
                        let e = null == (n = _.getCollectionViewStores()) ? void 0 : n.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        r = null == t ? void 0 : t.id, p = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: g,
                        ownedCollectionCount: v,
                        linkedCollectionCount: h
                    } = (0, o(633171).P)(_, {
                        skipPages: !1
                    }), y = {
                        from: c,
                        collection_id: g,
                        owned_collection_count: v,
                        linked_collection_count: h,
                        view_type: "inline" === u || "full_page" === u ? "table" : u,
                        is_toggleable: d.isToggleable,
                        automation_id: _.getAutomationId(),
                        new_page_id: "page" === d.blockType ? _.id : void 0,
                        creating_block_id: _.id,
                        parent_collection_id: f,
                        is_full_screen: "full_page" === u,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: r,
                        view_id: p
                    }, S = d.blockType;
                    o(549960).tP(S) ? o(549960).vH(s, { ...y,
                        type: S,
                        collection_id: g || ""
                    }) : o(549960).vH(s, { ...y,
                        type: S
                    })
                }
                return _
            }
        },
        150945: (e, t, o) => {
            function r(e) {
                let t, {
                        environment: r,
                        createBlockItem: i,
                        selection: a,
                        transaction: l,
                        analyticsFrom: n,
                        preventSetSelection: s
                    } = e,
                    d = o(584265).default.getCurrentRecordCache(),
                    c = new(o(303541)).UF({
                        environment: r,
                        userFlow: (null == i ? void 0 : i.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: n,
                        succeedOnEnqueue: !0
                    });
                if ((0, o(194020).E)(r, (0, o(974410).f)(a[0])) && i && d) {
                    let e = o(95783).w({
                        environment: r,
                        createBlockItem: i,
                        transaction: l,
                        inMemoryRecordCache: d,
                        from: n,
                        selection: a
                    });
                    c.track(e.pointer, l), t = (0, o(210318).L)({
                        environment: r,
                        blocksToInsert: [e],
                        target: a,
                        transaction: l,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: s
                    })[0]
                } else c.fail("invalid_state");
                return t
            }

            function i(e) {
                let t, {
                        environment: r,
                        createBlockItem: i,
                        selection: a,
                        transaction: l,
                        analyticsFrom: n,
                        preventSetSelection: s
                    } = e,
                    d = o(584265).default.getCurrentRecordCache();
                if ((0, o(194020).E)(r, (0, o(974410).f)(a[0])) && i && d) {
                    let e = o(95783).w({
                        environment: r,
                        createBlockItem: i,
                        transaction: l,
                        inMemoryRecordCache: d,
                        from: n,
                        selection: a
                    });
                    t = (0, o(199894).t)({
                        environment: r,
                        blocks: [e],
                        selection: a,
                        transaction: l,
                        preventSetSelection: s
                    })[0]
                }
                return t
            }

            function a(e) {
                let {
                    environment: t,
                    selection: i,
                    transaction: a
                } = e, l = r({ ...e,
                    preventSetSelection: !0
                });
                if (l) {
                    var n;
                    (0, o(270819).x)({
                        environment: t,
                        insertedStores: [l],
                        isCreated: !0
                    });
                    let e = o(708929).Uv.getMode(l);
                    if ("suggest" === e) {
                        let e = (0, o(714577).R)(t, a, l);
                        (0, o(132993).t)(a, l, {
                            id: o(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, o(941538).c)({
                            environment: t,
                            transaction: a,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [l.id]
                        })
                    }
                    "suggest" === e && null != (n = l.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && n.isCommentOnly() || (0, o(5556).u)({
                        transaction: a,
                        blocks: i
                    })
                }
                return l
            }

            function l(e) {
                let {
                    blocks: t,
                    transaction: i,
                    environment: a,
                    skipAnalytics: l
                } = e, n = r({
                    environment: a,
                    selection: t,
                    createBlockItem: o(992140).ry.text,
                    analyticsFrom: l ? void 0 : "text_insert_below",
                    transaction: i
                });
                return n && o(374176).default.afterNextFlush(() => {
                    (0, o(464515).z)({
                        environment: a,
                        blockStore: n,
                        insertedTextBlockLocation: "below",
                        editSelection: o(182553).h,
                        getRectFromStore: o(240414).T.getRectFromStore.bind(o(240414).T)
                    })
                }), n
            }

            function n(e) {
                let {
                    blocks: t,
                    transaction: r,
                    environment: a,
                    skipAnalytics: l
                } = e, n = i({
                    environment: a,
                    selection: t,
                    createBlockItem: o(992140).ry.text,
                    analyticsFrom: l ? void 0 : "text_insert_below",
                    transaction: r
                });
                return n && o(374176).default.afterNextFlush(() => {
                    (0, o(464515).z)({
                        environment: a,
                        blockStore: n,
                        insertedTextBlockLocation: "above",
                        editSelection: o(182553).h,
                        getRectFromStore: o(240414).T.getRectFromStore.bind(o(240414).T)
                    })
                }), n
            }
            o.r(t), o.d(t, {
                insertBlockAbove: () => i,
                insertBlockAndEdit: () => a,
                insertBlockBelow: () => r,
                insertTextAbove: () => n,
                insertTextBelow: () => l
            })
        },
        207744: (e, t, o) => {
            o.d(t, {
                H: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    collectionStore: r,
                    templateStore: i,
                    transaction: a,
                    inMemoryRecordCache: l,
                    title: n
                } = e, s = o(124937).Wv({
                    environment: t,
                    type: o(955630).xd.page,
                    spaceId: r.getSpaceId(),
                    inMemoryRecordCache: l,
                    transaction: a
                });
                return i && o(205885).A.state.online ? o(845422).TB({
                    title: n ? {
                        text: (0, o(247438).x9d)(n)
                    } : "template",
                    environment: t,
                    store: s,
                    templateStore: i,
                    isKeyboard: !1,
                    isCreateIn: !1,
                    transaction: a,
                    from: "collection_template_actions"
                }) : n && (0, o(249487).C)({
                    environment: t,
                    store: s,
                    properties: {
                        title: (0, o(247438).x9d)(n)
                    },
                    transaction: a
                }), o(579695).X$({
                    childStore: s,
                    parentStore: r,
                    transaction: a
                }), s
            }
        },
        220210: (e, t, o) => {
            o.r(t), o.d(t, {
                createCollectionTemplateFromModalState: () => h,
                createMinimalCollectionTemplateWithoutModal: () => v,
                createPlaceholderWorkflowTemplateBlock: () => w,
                getSetupGeneratorForTemplate: () => u,
                getTemplateOnboardingVersion: () => c,
                handleSelectTemplateFromOnboardingModal: () => f,
                maybeAddAppTemplateMetadataForTasks: () => y,
                moveToNextOnboardingStep: () => k,
                moveToPreviousOnboardingStep: () => C,
                onNavigateToPlaceholderWorkflowTemplateBlock: () => I,
                openSelectedTemplateOnboardingModalForInAppFlows: () => m,
                openTemplateOnboardingModal: () => d,
                retryAiSetup: () => b,
                setFollowUpInputFocused: () => T,
                switchModalToTemplate: () => g,
                toggleFeatureSelectionInPreview: () => S
            }), o(16280), o(898992), o(354520), o(672577), o(581454), o(18107), o(410838), o(813451), o(967357), o(737550);
            var r = () => o(546605);
            o(944114);
            class i {
                root = new a;
                append(e) {
                    if (this.root.isEmpty()) this.root.addChild(e);
                    else {
                        let t = this.toNodes().at(-1);
                        if (!t) throw Error("Last node not found");
                        t.addChild(e)
                    }
                }
                toNodes() {
                    return this.root.getSelectedPath()
                }
                toValues() {
                    return this.toNodes().map(e => e.value)
                }
                removeLast() {
                    let e = this.toNodes().at(-1);
                    if (!e) return;
                    let t = e.value;
                    return e.remove(), t
                }
                removeLastMatching(e) {
                    let t = this.toNodes().findLastIndex(t => e(t.value));
                    if (-1 === t) return [];
                    let o = [];
                    for (; this.toNodes().length > t;) {
                        let e = this.removeLast();
                        void 0 !== e && o.push(e)
                    }
                    return o
                }
            }
            class a {
                children = [];
                selectedChild;
                addChild(e) {
                    let t = new l(e, this);
                    return this.children.push(t), this.selectedChild = t, t
                }
                getSelectedPath() {
                    var e;
                    return (null == (e = this.selectedChild) ? void 0 : e.toSelectedPath()) ? ? []
                }
                isEmpty() {
                    return 0 === this.children.length
                }
                getChildren() {
                    return this.children
                }
                setSelectedChild(e) {
                    if (!this.children.includes(e)) throw Error("Cannot select a node that is not a child");
                    this.selectedChild = e
                }
                removeChild(e) {
                    let t = this.children.indexOf(e); - 1 !== t && (this.children.splice(t, 1), this.selectedChild === e && (this.selectedChild = void 0))
                }
            }
            class l {
                value;
                children = [];
                selectedChild;
                parent;
                isRemoved = !1;
                constructor(e, t) {
                    this.value = e, this.parent = t
                }
                addChild(e) {
                    let t = new l(e, this);
                    return this.children.push(t), this.selectedChild = t, t
                }
                toSelectedPath() {
                    let e = [this];
                    return this.selectedChild && e.push(...this.selectedChild.toSelectedPath()), e
                }
                retry(e) {
                    if (this.isRemoved) throw Error("Cannot retry on a removed node");
                    this.parent.addChild(e)
                }
                select(e) {
                    if (this.isRemoved) throw Error("Cannot select on a removed node");
                    let t = this.parent.getChildren(),
                        o = e(t.map(e => e.value), this.value);
                    if (void 0 === o) return !1;
                    let r = t.find(e => e.value === o);
                    return r ? this.parent.setSelectedChild(r) : this.parent.addChild(o), !0
                }
                selectOrRetry(e) {
                    if (!this.select(e)) {
                        let t = e([], void 0);
                        void 0 !== t && this.retry(t)
                    }
                }
                remove() {
                    if (this.children.length > 0) throw Error("Cannot remove a node that has children");
                    if (this.isRemoved) throw Error("Node is already removed");
                    this.parent.removeChild(this), this.isRemoved = !0
                }
                getChildren() {
                    return this.children
                }
                setSelectedChild(e) {
                    if (!this.children.includes(e)) throw Error("Cannot select a node that is not a child");
                    this.selectedChild = e
                }
                removeChild(e) {
                    let t = this.children.indexOf(e); - 1 !== t && (this.children.splice(t, 1), this.selectedChild === e && (this.selectedChild = void 0), e.isRemoved = !0)
                }
            }
            class n extends r().Store {
                getInitialState() {
                    return {
                        isBusy: !1,
                        transcriptTree: new i
                    }
                }
                setPrompt(e) {
                    this.setState({ ...this.state,
                        prompt: e
                    })
                }
                derivedUiStore = new(o(345426)).ComputedStore(() => {
                    var e;
                    let t = (null == (e = this.state.transcriptTree) || null == (e = e.toNodes()) ? void 0 : e.filter(e => "setup" === e.value.type)) ? ? [];
                    return {
                        canFollowUp: t.length < 5,
                        canRetry: t.length >= 2
                    }
                }, {
                    debugName: "derivedUiStore",
                    equalityFn: o(381453).n4
                })
            }
            class s {
                environment;
                generatedSetupCount = 0;
                store;
                error = void 0;
                spaceId;
                eventBase;
                abortController = void 0;
                onSetupReady;
                constructor(e) {
                    const {
                        environment: t,
                        spaceId: r,
                        onSetupReady: i,
                        initialPrompt: a,
                        analyticsArgs: l
                    } = e;
                    if (this.environment = t, this.spaceId = r, this.eventBase = {
                            flow_id: l.workflowTemplatesFlowId ? ? (0, o(4962).Ay)(),
                            origin: l.origin,
                            has_selection_modal_search_query: l.hadSelectionModalSearchEntered,
                            data_source_session_id: l.dataSourceSessionId,
                            data_source_from: l.dataSourceFrom
                        }, this.store = new n, this.store.state.transcriptTree.append({
                            id: (0, o(295447).Z1)({
                                environment: t,
                                table: o(832375).mSw,
                                spaceId: r
                            }),
                            type: "config",
                            value: {
                                type: "setup-generator"
                            }
                        }), a) {
                        this.store.setState({ ...this.store.state,
                            prompt: a
                        });
                        const e = this.environment.currentUser.id;
                        e && this.store.state.transcriptTree.append({
                            id: (0, o(295447).Z1)({
                                environment: t,
                                table: o(832375).mSw,
                                spaceId: r
                            }),
                            type: "user",
                            value: a,
                            userId: e
                        })
                    }
                    this.onSetupReady = i
                }
                computeFeedbackArgs() {
                    let {
                        setup: e
                    } = this.store.state, t = null == e ? void 0 : e.metadata.setupId;
                    if (t && this.store.state.transcriptTree) return {
                        spaceId: this.spaceId,
                        traceId: t,
                        transcript: this.store.state.transcriptTree.toValues()
                    }
                }
                setPrompt = e => {
                    this.store.setState({ ...this.store.state,
                        prompt: e
                    })
                };
                submitPrompt = async e => {
                    var t, r;
                    let {
                        from: i
                    } = e, {
                        isBusy: a,
                        prompt: l
                    } = this.store.state;
                    if (a || !l || !this.spaceId) return !1;
                    this.store.setState({ ...this.store.state,
                        isBusy: !0
                    }), null == (t = this.store.state.transcriptTree.toNodes().find(e => "config" === e.value.type)) || t.selectOrRetry(e => {
                        let t = e.find(e => "config" === e.type && "setup-generator" === e.value.type);
                        return t || {
                            id: (0, o(295447).Z1)({
                                environment: this.environment,
                                table: o(832375).mSw,
                                spaceId: this.spaceId
                            }),
                            type: "config",
                            value: {
                                type: "setup-generator"
                            }
                        }
                    });
                    try {
                        let e = this.store.state.transcriptTree.toNodes().find(e => "user" === e.value.type);
                        if (e && "follow-up" !== i) e.selectOrRetry(e => {
                            let t = e.find(e => "user" === e.type && (0, o(247438).MTk)(l, e.value));
                            if (t) return t; {
                                let e = this.environment.currentUser.id;
                                if (!e) throw Error("Current user not found");
                                return {
                                    id: (0, o(295447).Z1)({
                                        environment: this.environment,
                                        table: o(832375).mSw,
                                        spaceId: this.spaceId
                                    }),
                                    type: "user",
                                    value: l,
                                    userId: e
                                }
                            }
                        });
                        else {
                            let e = this.environment.currentUser.id;
                            if (!e) throw Error("Current user not found");
                            this.store.state.transcriptTree.append({
                                id: (0, o(295447).Z1)({
                                    environment: this.environment,
                                    table: o(832375).mSw,
                                    spaceId: this.spaceId
                                }),
                                type: "user",
                                value: l,
                                userId: e
                            })
                        }
                        let t = this.store.state.transcriptTree.toValues();
                        if (!t.slice(t.findLastIndex(e => "user" === e.type) + 1).some(e => "setup" === e.type)) {
                            let e = (0, o(4962).Ay)(),
                                r = new AbortController;
                            this.abortController = r;
                            let i = !1;
                            try {
                                let a = await (0, o(621347).g)({
                                    environment: this.environment,
                                    abortSignal: r.signal,
                                    data: {
                                        traceId: e,
                                        generateTitle: !1,
                                        transcript: t,
                                        spaceId: this.spaceId,
                                        isUserInAnySalesAssistedSpace: (0, o(598132).h0)(this.environment),
                                        isSpaceSalesAssisted: (0, o(598132).lM)(this.environment, this.spaceId)
                                    },
                                    onResponse: e => {
                                        "setup-operations" === e.type && this.store.setState({ ...this.store.state,
                                            progress: e.progress
                                        }), "retry" !== e.type || i || (i = !0, o(436555).D6({
                                            label: "This is taking a little longer than usual"
                                        }))
                                    }
                                });
                                if (this.abortController = void 0, this.store.setState({ ...this.store.state,
                                        progress: void 0,
                                        feedbackArgs: this.computeFeedbackArgs()
                                    }), !o(300441).Q.isSuccess(a)) return o(419750).O8(a.error, {
                                    from: "fullPageTranslationActions.generateAndApplyTranslationMapToPage",
                                    type: "error"
                                }), this.onSetupReady({
                                    error: a.error
                                }), !1;
                                let l = a.value.filter(o(850563).Vf);
                                for (let e of function(e) {
                                        let t = new Map;
                                        for (let o of e) {
                                            let e = "string" == typeof o.id ? o.id : String(o.id),
                                                r = t.get(e);
                                            r && "setup-operations" === r.type && "setup-operations" === o.type ? t.set(e, { ...r,
                                                operations: [...r.operations, ...o.operations]
                                            }) : t.set(e, o)
                                        }
                                        return Array.from(t.values())
                                    }(l)) this.store.state.transcriptTree.append(e)
                            } finally {
                                this.abortController = void 0
                            }
                        }
                        let a = null == (r = this.store.state.transcriptTree.toValues().findLast(e => "setup" === e.type)) ? void 0 : r.setup;
                        if (!a) throw Error("Missing setup step");
                        return this.generatedSetupCount++, this.store.setState({ ...this.store.state,
                            setup: a,
                            prompt: void 0
                        }), this.trackGeneratedSetup(a), this.onSetupReady({
                            value: a
                        }), !0
                    } catch (e) {
                        if (e instanceof Error && "AbortError" === e.name) return !1;
                        return o(419750).O8(e, {
                            from: "setupGenerator.submitPrompt",
                            type: "error"
                        }), this.onSetupReady({
                            error: {
                                code: 500,
                                message: "Unknown error"
                            }
                        }), !1
                    } finally {
                        this.store.setState({ ...this.store.state,
                            isBusy: !1,
                            feedbackArgs: this.computeFeedbackArgs()
                        })
                    }
                };
                stopGenerating = () => {
                    var e;
                    null == (e = this.abortController) || e.abort()
                };
                discardLatestSetup = () => {
                    var e, t;
                    let r = null == (e = this.store.state.transcriptTree.toValues().findLast(e => "user" === e.type)) ? void 0 : e.value;
                    if (!r) return;
                    this.store.state.transcriptTree.removeLastMatching(e => "user" === e.type);
                    let i = null == (t = this.store.state.transcriptTree.toValues().findLast(e => "setup" === e.type)) ? void 0 : t.setup;
                    this.store.setState({ ...this.store.state,
                        prompt: r,
                        setup: i,
                        feedbackArgs: this.computeFeedbackArgs()
                    }), i && this.onSetupReady({
                        value: i
                    }), (0, o(104310).u)({
                        event: {
                            eventName: "setup_generator_try_again_clicked",
                            eventProperties: this.eventBase
                        }
                    })
                };
                discardAllSetups() {
                    var e;
                    if (!this.store.state.transcriptTree) return;
                    let t = this.store.state.transcriptTree.toNodes().findIndex(e => "user" === e.value.type);
                    if (-1 === t) return;
                    let o = this.store.state.transcriptTree.toValues().at(t);
                    if (!o || "user" !== o.type) return;
                    for (; this.store.state.transcriptTree.toNodes().length > t;) this.store.state.transcriptTree.removeLast();
                    let r = null == (e = this.store.state.transcriptTree.toValues().findLast(e => "setup" === e.type)) ? void 0 : e.setup;
                    this.store.setState({ ...this.store.state,
                        prompt: o.value,
                        setup: r,
                        feedbackArgs: this.computeFeedbackArgs()
                    }), r && this.onSetupReady({
                        value: r
                    })
                }
                trackSessionStarted() {
                    (0, o(674002).Vd)({
                        eventProperties: this.eventBase
                    })
                }
                trackSessionEnded(e) {
                    let {
                        reason: t
                    } = e;
                    (0, o(104310).u)({
                        event: {
                            eventName: "setup_generator_session_ended",
                            eventProperties: { ...this.eventBase,
                                generated_setup_count: this.generatedSetupCount,
                                reason: t
                            }
                        }
                    })
                }
                trackGeneratedSetup(e) {
                    let {
                        metadata: t
                    } = e, {
                        setupId: r,
                        promptInfo: i
                    } = t, a = e.allTemplates.filter(e => (0, o(388507).Xq)(e, "collection")).length, l = e.allTemplates.filter(e => (0, o(388507).Xq)(e, "collection_view")).length, n = e.allTemplates.filter(e => (0, o(388507).Xq)(e, "property")).length;
                    (0, o(674002).If)({
                        eventProperties: { ...this.eventBase,
                            setup_id: r,
                            prompt_type: "custom",
                            collection_count: a,
                            collection_view_count: l,
                            property_count: n,
                            total_duration_ms: e.metadata.timing.total,
                            warning_count: e.metadata.warnings.length,
                            error_count: e.metadata.errors.length,
                            use_case: null == i ? void 0 : i.useCase,
                            prompt_specificity: null == i ? void 0 : i.specificity,
                            prompt_language: null == i ? void 0 : i.language
                        }
                    })
                }
            }

            function d({
                template: e,
                parentStore: t,
                origin: r,
                version: i,
                existingCollectionInfo: a,
                navigateToOnFinish: l = "created_collection",
                setupGenerator: n,
                flowId: s,
                dataSourceAnalytics: c,
                onClose: p
            }) {
                let u = e ? (0, o(158100).C8)({
                    collectionTemplate: e,
                    origin: r,
                    flowId: s,
                    parentStore: t,
                    dataSourceAnalytics: c,
                    existingCollectionInfo: a
                }) : (0, o(158100).XM)({
                    origin: r,
                    flowId: s,
                    parentStore: t,
                    dataSourceAnalytics: c
                });
                o(582719).T_(), o(247722).default.setState({
                    open: !0,
                    isSaving: !1,
                    currentStepIndex: 0,
                    version: i,
                    existingCollectionInfo: a,
                    navigateToOnFinish: l,
                    setupGenerator: n,
                    onClose: p,
                    ...u,
                    parentStore: t
                })
            }

            function c(e) {
                if (!e.template) return "select_and_customize_template";
                let {
                    includeTemplateSelectionStep: t,
                    hasSetupGenerator: o
                } = e;
                return o ? t ? "select_and_build_with_ai" : "build_with_ai" : t ? "select_and_customize_template" : "customize_template"
            }
            let p = (0, o(109939).YK)({
                setupGenerationError: {
                    id: "setupGenerator.error.failedToGenerateSetup",
                    defaultMessage: "Sorry, something went wrong while completing this request. Please try again."
                },
                setupGenerationRateLimitError: {
                    id: "setupGenerator.error.rateLimited",
                    defaultMessage: "Too many requests. Please try again later."
                }
            });

            function u({
                environment: e,
                parentStore: t,
                template: r,
                initialAiPrompt: i,
                analyticsArgs: a
            }) {
                let l = null == t ? void 0 : t.getSpaceId(),
                    n = (0, o(388507).cB)(r.templateId) ? new s({
                        environment: e,
                        analyticsArgs: a,
                        spaceId: l,
                        initialPrompt: i,
                        onSetupReady: e => {
                            let t = o(247722).default.state;
                            if (!t.open) return;
                            if (o(300441).Q.isFail(e)) return void(429 === e.error.code ? o(436555).D6({
                                label: o(962299).A.formatMessage(p.setupGenerationRateLimitError)
                            }) : o(436555).D6({
                                label: o(962299).A.formatMessage(p.setupGenerationError)
                            }));
                            let r = e.value;
                            if (t.setupGenerator !== n) return;
                            o(829653).Z.append(r.allTemplates.filter(e => e.isAiGenerated));
                            let i = r.allTemplates.find(e => (0, o(388507).Xq)(e, "collection"));
                            if (!i) throw Error("No collection template found");
                            g(i)
                        }
                    }) : void 0;
                return n
            }

            function m({
                template: e,
                environment: t,
                aiPrompt: r,
                autoSubmit: i = !1,
                version: a,
                ...l
            }) {
                var n;
                let {
                    parentStore: s,
                    origin: p,
                    flowId: f = (0, o(4962).Ay)(),
                    dataSourceAnalytics: g
                } = l, v = ((null == (n = l.collectionTemplatesSearchQuery) ? void 0 : n.length) ? ? 0) > 0, h = t.device.isPhone, _ = u({
                    environment: t,
                    template: e,
                    parentStore: s,
                    initialAiPrompt: r,
                    analyticsArgs: {
                        origin: p,
                        hadSelectionModalSearchEntered: v,
                        workflowTemplatesFlowId: f,
                        ...g
                    }
                });
                d({ ...l,
                    template: e,
                    flowId: f,
                    version: a ? ? c({
                        template: e,
                        includeTemplateSelectionStep: !1,
                        hasSetupGenerator: !!_
                    }),
                    setupGenerator: _
                }), _ && i && (0, o(643686).z)({
                    setupGenerator: _,
                    isPhone: h
                })
            }

            function f({
                template: e,
                environment: t,
                analyticsArgs: r
            }) {
                var i, a;
                let l = o(247722).default.state;
                if (!l.open || !l.parentStore) return;
                let {
                    parentStore: n,
                    origin: s,
                    flowId: d,
                    dataSourceAnalytics: p
                } = l, m = t.device.isPhone, g = l.collectionTemplatesSearchQuery ? (0, o(247438).x9d)(l.collectionTemplatesSearchQuery) : void 0, v = u({
                    environment: t,
                    template: e,
                    parentStore: n,
                    analyticsArgs: {
                        origin: s,
                        hadSelectionModalSearchEntered: ((null == (i = l.collectionTemplatesSearchQuery) ? void 0 : i.length) ? ? 0) > 0,
                        workflowTemplatesFlowId: d,
                        ...p
                    },
                    initialAiPrompt: g
                }), _ = c({
                    template: e,
                    includeTemplateSelectionStep: !0,
                    hasSetupGenerator: !!v
                }), y = { ...l,
                    open: !0,
                    isSaving: !1,
                    currentStepIndex: (0, o(158100).aO)(l, m),
                    version: _,
                    setupGenerator: l.setupGenerator ? ? u({
                        environment: t,
                        template: o(932292).globalWorkflowTemplates.fromIdOfType({
                            templateId: o(582881).MH,
                            type: "collection"
                        }),
                        parentStore: l.parentStore,
                        initialAiPrompt: [
                            [""]
                        ],
                        analyticsArgs: {
                            origin: l.origin,
                            workflowTemplatesFlowId: l.flowId,
                            hadSelectionModalSearchEntered: !1,
                            ...l.dataSourceAnalytics
                        }
                    }),
                    isFollowUpInputFocused: !1,
                    ...(0, o(158100).C8)({
                        collectionTemplate: e,
                        origin: s,
                        flowId: d,
                        parentStore: n,
                        dataSourceAnalytics: p,
                        existingCollectionInfo: l.existingCollectionInfo
                    }),
                    parentStore: l.parentStore
                };
                null != (a = e.value.onboarding) && a.isMinimal ? h({
                    environment: t,
                    modalState: y
                }) : ("suggested_template" === r.type && (0, o(674002).os)({
                    eventProperties: {
                        from_modal_template_picker: !0,
                        selected_index: r.allOrderedTemplateIds.indexOf(e.templateId),
                        collection_template_ids_shown: r.allOrderedTemplateIds,
                        ...(0, o(158100).gM)({
                            origin: s,
                            parentStore: n,
                            collectionTemplatesSearchQuery: l.collectionTemplatesSearchQuery,
                            flowId: d,
                            collectionTemplate: e,
                            dataSourceAnalytics: l.dataSourceAnalytics
                        })
                    }
                }), o(247722).default.setState(y))
            }

            function g(e) {
                let t = o(247722).default.state;
                if (!t.open || !t.collectionTemplate || !t.parentStore) return;
                let r = { ...t,
                    ...(0, o(158100).C8)({
                        collectionTemplate: e,
                        origin: t.origin,
                        flowId: t.flowId,
                        parentStore: t.parentStore,
                        dataSourceAnalytics: t.dataSourceAnalytics,
                        existingCollectionInfo: t.existingCollectionInfo
                    }),
                    parentStore: t.parentStore,
                    isSaving: !1
                };
                if (t.collectionTemplate.templateId === e.templateId) {
                    var i;
                    let e = r.userCustomizations.featureTemplateSelections,
                        o = t.userCustomizations.featureTemplateSelections,
                        a = e.map(e => {
                            let t = o.find(t => t.template.templateId === e.template.templateId);
                            return "required" !== e.optionality && t ? { ...e,
                                selected: t.selected
                            } : e
                        });
                    r = { ...r,
                        userCustomizations: { ...r.userCustomizations,
                            featureTemplateSelections: a,
                            prevFeatureTemplateSelections: e
                        },
                        previewCollectionInfo: {
                            collectionViewBlockStore: void 0,
                            collectionContextStore: void 0,
                            examplePageStores: void 0,
                            focusViewTemplateId: null == (i = t.previewCollectionInfo) || null == (i = i.collectionContextStore) || null == (i = i.collectionViewStore()) || null == (i = i.getFormat().workflow_template_instance) ? void 0 : i.template_id
                        }
                    }
                }
                o(247722).default.setState(r)
            }

            function v({
                environment: e,
                template: t,
                parentStore: r,
                existingCollectionInfo: i
            }) {
                let a = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "workflowTemplates.createMinimalCollectionTemplate",
                    environment: e,
                    canUndo: !0,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    perform: a => {
                        (0, o(351418).mm)({
                            environment: e,
                            transaction: a,
                            template: t,
                            parentStore: r,
                            existingCollectionInfo: i,
                            inMemoryRecordCache: r.inMemoryRecordCache,
                            logger: new(o(932292)).WorkflowTemplateLogger
                        })
                    }
                })
            }

            function h({
                environment: e,
                modalState: t
            }) {
                if (!t.collectionTemplate || t.isSaving || !t.parentStore) return;
                let {
                    collectionTemplate: r,
                    parentStore: i,
                    existingCollectionInfo: a,
                    userCustomizations: l
                } = t;
                o(247722).default.setState({ ...t,
                    isSaving: !0
                });
                let n = i.getSpaceId(),
                    {
                        performResult: s
                    } = (0, o(377796).createAndCommit)({
                        userAction: "WorkflowTemplatesOnboardingModal.getStarted",
                        environment: e,
                        canUndo: !0,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        perform: t => {
                            let {
                                collectionStore: n,
                                collectionViewStore: s,
                                collectionViewBlockStore: d,
                                examplePageStores: c
                            } = (0, o(351418).mm)({
                                environment: e,
                                transaction: t,
                                template: r,
                                parentStore: i,
                                existingCollectionInfo: a,
                                inMemoryRecordCache: i.inMemoryRecordCache,
                                selectedFeatureTemplateIds: (0, o(932292).getSelectedFeatureTemplateIds)(l),
                                logger: new(o(932292)).WorkflowTemplateLogger
                            });
                            return ! function({
                                environment: e,
                                transaction: t,
                                collectionStore: r,
                                collectionViewStore: i,
                                recordTitles: a
                            }) {
                                let l = a.filter(e => e.length > 0).map(a => (function({
                                    environment: e,
                                    transaction: t,
                                    collectionStore: r,
                                    collectionViewStore: i,
                                    title: a
                                }) {
                                    let l = (0, o(78772).H)(r, i);
                                    return (0, o(207744).H)({
                                        environment: e,
                                        collectionStore: r,
                                        templateStore: l,
                                        transaction: t,
                                        inMemoryRecordCache: e.defaultRecordCache.inMemoryRecordCache,
                                        title: a
                                    })
                                })({
                                    environment: e,
                                    transaction: t,
                                    collectionStore: r,
                                    collectionViewStore: i,
                                    title: a
                                }));
                                if (l.length > 0) {
                                    let e = i.getPageSortStore(),
                                        r = e.getValue() ? ? [];
                                    (0, o(368198).K)({
                                        store: e,
                                        value: [...l.map(e => e.id), ...r],
                                        transaction: t
                                    })
                                }
                            }({
                                environment: e,
                                transaction: t,
                                collectionStore: n,
                                collectionViewStore: s,
                                recordTitles: l.recordTitles
                            }), {
                                collectionViewBlockStore: d,
                                collectionStore: n,
                                examplePageStores: c
                            }
                        }
                    });
                return ! function({
                    environment: e,
                    modalState: t,
                    collectionViewBlockStore: r,
                    collectionStore: i,
                    examplePageStores: a
                }) {
                    var l;
                    if (!i) return;
                    (0, o(526131).xN)({
                        environment: e,
                        collectionStore: i
                    });
                    let {
                        existingCollectionInfo: n,
                        userCustomizations: s,
                        navigateToOnFinish: d
                    } = t, c = (0, o(158100).gM)(t);
                    (function({
                        environment: e,
                        eventProperties: t,
                        collectionViewBlockStore: r,
                        examplePageStores: i,
                        navigateTo: a,
                        result: l
                    }) {
                        if ("created_collection" === a)(0, o(545586).navigateToBlock)({
                            environment: e,
                            store: r,
                            visitType: o(981324).ig.Link,
                            pageVisitSource: o(254656).y8.WorkflowTemplateOnboarding,
                            redirect: !0,
                            callback: () => {
                                o(582719).yQ({
                                    examplePageStores: i,
                                    collectionViewBlockStore: r,
                                    eventProperties: t
                                })
                            }
                        });
                        else if ("skip" === a) {
                            var n;
                            null != (n = r.getModel()) && n.isFullPageCollectionView() && o(582719).yQ({
                                examplePageStores: i,
                                collectionViewBlockStore: r,
                                eventProperties: t
                            })
                        } else(0, o(722371).HB)(a);
                        let s = r.getSpaceId();
                        s && function(e, t, r) {
                            var i;
                            let a = (0, o(904434).R$)(e);
                            if (!a) return;
                            let l = (null == a || null == (i = a.getSettings()) ? void 0 : i.onboarding_workflow_template_blocks) || {},
                                n = null == l ? void 0 : l[t];
                            if (!n) return;
                            let s = n.filter(e => e !== r);
                            if (s.length === n.length) return;
                            let d = { ...l
                            };
                            0 === s.length ? delete d[t] : d[t] = s, (0, o(377796).createAndCommit)({
                                environment: e,
                                userAction: "userSettingsActions.removeOnboardingWorkflowTemplateForSpace",
                                canUndo: !0,
                                cellTarget: "main",
                                perform: e => {
                                    (0, o(862759).m)({
                                        userSettingsStore: a,
                                        transaction: e,
                                        data: {
                                            onboarding_workflow_template_blocks: d
                                        }
                                    })
                                }
                            })
                        }(e, s, r.id);
                        let d = o(247722).default.getState();
                        !d.open && d.isShowingLoadingState && o(262058).V(), o(247722).default.close(l)
                    })({
                        environment: e,
                        eventProperties: c,
                        collectionViewBlockStore: r,
                        examplePageStores: a,
                        navigateTo: d,
                        result: {
                            type: "accepted_template",
                            blockId: r.id,
                            collectionId: i.id
                        }
                    }), (0, o(674002).g2)({
                        modalState: t,
                        eventProperties: {
                            record_titles_is_empty: s.recordTitles.map(e => 0 === e.length),
                            selected_feature_template_ids: s.featureTemplateSelections.filter(e => "required" !== e.optionality && e.selected).map(e => e.template.templateId),
                            step: (0, o(158100).hq)(t),
                            target_page_ids: [r.id],
                            collection_ids: [i.id],
                            example_page_ids: a.map(e => e.id),
                            existing_block_id: null == n || null == (l = n.collectionViewBlockStore) ? void 0 : l.id,
                            ...c
                        }
                    })
                }({
                    environment: e,
                    modalState: t,
                    collectionViewBlockStore: s.collectionViewBlockStore,
                    collectionStore: s.collectionStore,
                    examplePageStores: s.examplePageStores
                }), s
            }
            let _ = {
                assigneeProperty: "notion://tasks/assign_property",
                statusProperty: "notion://tasks/status_property",
                dueDateProperty: "notion://tasks/due_date_property"
            };

            function y({
                environment: e,
                transaction: t,
                collectionStore: r,
                collectionViewBlockStore: i
            }) {
                let a = o(11448).dC,
                    l = o(11448).d0,
                    n = (0, o(717673).Sl)({
                        environment: e,
                        collectionStore: r
                    }),
                    s = {};
                for (let [e, t] of Object.entries(_)) {
                    let o = n.find(t => t.templateId.includes(e));
                    if (!o) return;
                    s[t] = o.instancePointer.id
                }(0, o(715144).z)({
                    stores: [r],
                    update: {
                        app_config_uri: a,
                        app_uri_map: s
                    },
                    transaction: t
                }), (0, o(715144).z)({
                    stores: [i],
                    update: {
                        app_id: o(92513).JW(),
                        app_config_uri: l,
                        app_uri_map: {
                            [a]: r.id,
                            [l]: i.id
                        }
                    },
                    transaction: t
                })
            }

            function S({
                template: e
            }) {
                let t = o(247722).default.state;
                t.open && t.collectionTemplate && o(247722).default.setState({ ...t,
                    userCustomizations: (0, o(158100).Ll)({
                        userCustomizations: t.userCustomizations,
                        templateId: e.templateId
                    })
                })
            }

            function w({
                environment: e,
                transaction: t,
                parentStore: r,
                collectionTemplate: i,
                spaceViewStore: a
            }) {
                let l = o(124937).Wv({
                    environment: e,
                    type: o(955630).xd.collectionViewPage,
                    spaceId: r.getSpaceId(),
                    format: {
                        collection_view_sub_type: "workflow_template_placeholder",
                        placeholder_workflow_template_id: i.templateId,
                        page_icon: i.value.targetCollection.icon
                    },
                    properties: {
                        title: (0, o(247438).x9d)(i.value.targetCollection.name)
                    },
                    inMemoryRecordCache: r.inMemoryRecordCache,
                    transaction: t
                });
                (0, o(173157).z)({
                    store: l,
                    data: {
                        parent_id: r.id,
                        parent_table: r.table,
                        alive: !0,
                        view_ids: []
                    },
                    transaction: t
                });
                let n = o(970831).B.createChildStore(r, l.pointer);
                (0, o(351418).Ls)({
                    environment: e,
                    parentStore: r,
                    collectionViewBlockStore: n,
                    transaction: t,
                    appendOrPrepend: "append",
                    spaceViewStore: a
                });
                let s = r.getSpaceId();
                return s && ((0, o(674002).HD)({
                    eventProperties: {
                        placeholder_workflow_template_id: i.templateId,
                        collection_view_block_id: n.id
                    }
                }), ! function(e, t, r, i) {
                    var a;
                    let l = (0, o(904434).R$)(e);
                    if (!l) return;
                    let n = (null == l || null == (a = l.getSettings()) ? void 0 : a.onboarding_workflow_template_blocks) || {},
                        s = (null == n ? void 0 : n[r]) || [];
                    (0, o(862759).m)({
                        userSettingsStore: l,
                        transaction: t,
                        data: {
                            onboarding_workflow_template_blocks: { ...n,
                                [r]: [...s, i]
                            }
                        }
                    })
                }(e, t, s, n.id)), n
            }

            function I({
                environment: e,
                collectionTemplate: t,
                collectionViewBlockStore: r
            }) {
                let i = r.getParentStore(),
                    a = i && (0, o(726342).u)(i) ? i : r;
                if (o(986939).A.isMobile) return v({
                    environment: e,
                    template: t,
                    parentStore: a,
                    existingCollectionInfo: {
                        collectionViewBlockStore: r,
                        collectionStore: void 0,
                        collectionViewStore: void 0
                    }
                }), (0, o(545586).navigateToBlock)({
                    environment: e,
                    store: r,
                    visitType: o(981324).ig.Link,
                    pageVisitSource: o(254656).y8.WorkflowTemplateOnboarding
                }), {
                    didOpenOnboardingModal: !1
                };
                let l = "placeholder_block",
                    n = {
                        collectionViewBlockStore: r,
                        collectionStore: void 0,
                        collectionViewStore: void 0
                    },
                    s = (0, o(158100).gM)((0, o(158100).C8)({
                        collectionTemplate: t,
                        origin: l,
                        flowId: void 0,
                        parentStore: a,
                        dataSourceAnalytics: void 0,
                        existingCollectionInfo: n
                    }));
                return (0, o(674002).os)({
                    eventProperties: { ...s,
                        from_modal_template_picker: !1,
                        selected_index: 0,
                        collection_template_ids_shown: [t.templateId]
                    }
                }), m({
                    environment: e,
                    template: t,
                    origin: l,
                    parentStore: a,
                    aiPrompt: void 0,
                    flowId: s.flow_id,
                    existingCollectionInfo: n
                }), {
                    didOpenOnboardingModal: !0
                }
            }

            function b(e) {
                let t = o(247722).default.state;
                if (!t.open) return;
                let r = t.setupGenerator;
                r && (r.discardLatestSetup(), void 0 === r.store.state.setup && C(e))
            }

            function T(e) {
                let t = o(247722).default.state;
                t.open && o(247722).default.setState({ ...t,
                    isFollowUpInputFocused: e
                })
            }

            function C(e) {
                let t = o(247722).default.state;
                if (!t.open) return;
                let r = (0, o(158100).Wm)(t),
                    i = (0, o(158100).gP)(t, e),
                    a = r[i];
                if (i >= 0) {
                    if ("setupGeneratorInput" === a || "templateSelection" === a) {
                        var l, n;
                        null == t || null == (l = t.setupGenerator) || l.discardAllSetups(), null == t || null == (n = t.setupGenerator) || n.stopGenerating()
                    }
                    let e = { ...t,
                        isFollowUpInputFocused: !1,
                        currentStepIndex: i
                    };
                    "templateSelection" === a && (e.collectionTemplate = o(582881).XK, "land_on_app_from_new_user_onboarding" === t.origin && (e.version = "new_user_template_onboarding")), o(247722).default.setState(e)
                }
            }

            function k(e) {
                let t = o(247722).default.state;
                if (!t.open) return;
                let r = (0, o(158100).aO)(t, e);
                r >= 0 && o(247722).default.setState({ ...t,
                    isFollowUpInputFocused: !1,
                    currentStepIndex: r
                })
            }
        },
        247722: (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => l
            });
            var r = () => o(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        isShowingLoadingState: !1
                    }
                }
                updateUserCustomizations(e, t) {
                    this.state.open && this.state.collectionTemplate && this.setState({ ...this.state,
                        userCustomizations: { ...this.state.userCustomizations,
                            [e]: t
                        }
                    })
                }
                updateCollectionTemplate(e) {
                    this.state.open && this.state.collectionTemplate && this.setState({ ...this.state,
                        collectionTemplate: e
                    })
                }
                updatePreviewFocusViewTemplateId(e) {
                    this.state.open && this.state.collectionTemplate && this.state.previewCollectionInfo && this.state.previewCollectionInfo.focusViewTemplateId !== e && this.setState({ ...this.state,
                        previewCollectionInfo: { ...this.state.previewCollectionInfo,
                            focusViewTemplateId: e
                        }
                    })
                }
                updatePreviewCollectionContextStore(e) {
                    this.state.open && this.state.collectionTemplate && this.state.previewCollectionInfo && this.state.previewCollectionInfo.collectionContextStore !== e && this.setState({ ...this.state,
                        previewCollectionInfo: { ...this.state.previewCollectionInfo,
                            collectionContextStore: e
                        }
                    })
                }
                getPreviewCollectionContextStore() {
                    if (this.state.open && this.state.collectionTemplate && this.state.previewCollectionInfo) return this.state.previewCollectionInfo.collectionContextStore
                }
                getParentStore() {
                    return this.state.open ? this.state.parentStore : void 0
                }
                getShouldShowExpandedTemplateList() {
                    return this.state.open && this.state.shouldShowExpandedTemplateList
                }
                setShouldShowExpandedTemplateList(e) {
                    this.state.open && this.setState({ ...this.state,
                        shouldShowExpandedTemplateList: e
                    })
                }
                close(e) {
                    var t, o;
                    this.state.open && (null == (t = (o = this.state).onClose) || t.call(o, e), this.setState({
                        open: !1,
                        isShowingLoadingState: !1
                    }))
                }
                reset() {
                    this.setState(this.getInitialState())
                }
            }
            let a = new i;
            (0, o(202146).exposeDebugValue)("InitializeWorkflowTemplateModalStore", a);
            let l = a
        },
        351418: (e, t, o) => {
            o.d(t, {
                Ls: () => v,
                gv: () => f,
                mm: () => u,
                my: () => m
            }), o(16280), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(581454);
            var r = () => o(832375),
                i = () => o(845422),
                a = () => o(207744),
                l = () => o(249487),
                n = () => o(44226),
                s = () => o(578825),
                d = () => o(368198),
                c = () => o(717673),
                p = () => o(526131);

            function u({
                environment: e,
                transaction: t,
                template: m,
                parentStore: v,
                existingCollectionInfo: h,
                inMemoryRecordCache: _,
                selectedFeatureTemplateIds: y,
                collectionViewBlockType: S = "collection_view_page",
                logger: w
            }) {
                var I;
                w.log(`Instantiating collection template "${m.templateId}".`);
                let {
                    collectionStore: b,
                    collectionViewBlockStore: T
                } = function({
                    environment: e,
                    transaction: t,
                    template: r,
                    parentStore: i,
                    existingCollectionInfo: a,
                    collectionViewBlockType: l = "collection_view_page",
                    inMemoryRecordCache: n,
                    logger: s
                }) {
                    var d;
                    let c;
                    if (!(0, o(726342).u)(i)) throw Error(`Parent store is not a valid  collection template parent store ${i}`);
                    if (a) {
                        let {
                            collectionStore: e,
                            collectionViewStore: r
                        } = a;
                        c = a.collectionViewBlockStore, r && (0, o(505131).T)({
                            collectionViewBlockStore: c,
                            collectionViewStore: r,
                            transaction: t
                        }), e && (0, o(279187).removeCollectionFromCollectionViewBlock)({
                            collectionViewBlockStore: c,
                            collectionStore: e,
                            transaction: t
                        })
                    } else c = g({
                        environment: e,
                        transaction: t,
                        parentStore: i,
                        collectionViewBlockType: l,
                        inMemoryRecordCache: n
                    });
                    let {
                        name: p,
                        icon: u,
                        description: m
                    } = r.value.targetCollection, f = (0, o(985856).E)({
                        environment: e,
                        collectionViewBlockStore: c,
                        transaction: t,
                        collectionValue: {
                            name: (0, o(247438).x9d)(p),
                            icon: u,
                            description: m,
                            format: {
                                item_name_config: r.value.targetCollection.itemName,
                                item_name_config_v2: null == (d = r.value.targetCollection.format) ? void 0 : d.item_name_config_v2
                            },
                            schema: {
                                title: {
                                    name: o(962299).A.formatMessage(o(632468).n4.namePropertyTitle),
                                    type: "title"
                                }
                            }
                        }
                    });
                    if (!(0, o(974410).f)(f)) throw Error("No current space store");
                    return {
                        collectionStore: f,
                        collectionViewBlockStore: c
                    }
                }({
                    environment: e,
                    transaction: t,
                    template: m,
                    parentStore: v,
                    existingCollectionInfo: h,
                    collectionViewBlockType: S,
                    inMemoryRecordCache: _,
                    logger: w
                });
                (0, o(829808).ZQ)({
                    transaction: t,
                    collectionStore: b,
                    templateId: m.templateId,
                    instance: {
                        type: "collection",
                        id: b.id
                    },
                    logger: w
                });
                let C = function({
                        template: e,
                        selectedFeatureTemplateIds: t
                    }) {
                        if (t) {
                            let r = new Set((0, o(388507).bQ)(e));
                            for (let o of t)
                                if (!r.has(o)) throw Error(`Feature template ID ${o} is not part of collection template ${e.templateId}`)
                        }
                        let {
                            templateItems: r
                        } = e.value, i = (0, o(388507).b2)(r, "required"), a = (0, o(388507).b2)(r, "optionalDefaultOn");
                        return Array.from(new Set([...i, ...t ? ? a])).map(o(932292).globalWorkflowTemplates.featureFromId).filter(e => !(0, o(388507).Sz)(e))
                    }({
                        template: m,
                        selectedFeatureTemplateIds: y
                    }),
                    k = [];
                for (let o of C) {
                    let r = (0, p().e_)({
                        environment: e,
                        transaction: t,
                        collectionStore: b,
                        template: o,
                        logger: w,
                        origin: "collection_creation"
                    });
                    (null == r ? void 0 : r.type) === "collection_view" && k.push(r), (0, p().Ix)({
                        environment: e,
                        transaction: t,
                        collectionStore: b,
                        template: o,
                        logger: w
                    })
                }
                if (0 === k.length) throw Error("No collection view templates to create");
                let M = o(547131).p.createChildStore(T, {
                        table: o(435544).G,
                        id: k[0].id
                    }),
                    A = (0, o(932292).getPropertyTemplates)(C);
                (0, o(487016).My)({
                    transaction: t,
                    collectionStore: b,
                    propertyTemplates: A
                }), (0, o(487016).Bi)({
                    transaction: t,
                    collectionStore: b,
                    propertyTemplates: A
                }),
                function(e) {
                    let {
                        transaction: t,
                        collectionStore: r,
                        template: i,
                        logger: a
                    } = e, {
                        format: l
                    } = i.value.targetCollection;
                    if ("object" != typeof(null == l ? void 0 : l.collection_default_template)) return;
                    let n = (0, c().fI)({
                        collectionStore: r,
                        sourceTemplateType: "block",
                        dependencyMap: i.dependencyMap ? ? {},
                        sourcePrimitiveId: l.collection_default_template.template_page_id
                    });
                    n ? (0, o(715144).z)({
                        stores: [r],
                        update: {
                            collection_default_template: {
                                template_page_id: n
                            }
                        },
                        transaction: t
                    }) : a.warn("Unable to resolve collection default template, omitting it.")
                }({
                    transaction: t,
                    template: m,
                    collectionStore: b,
                    logger: w
                }), "tasks" === m.category && (0, o(220210).maybeAddAppTemplateMetadataForTasks)({
                        environment: e,
                        collectionStore: b,
                        collectionViewBlockStore: T,
                        transaction: t
                    }),
                    function({
                        transaction: e,
                        collectionViewBlockStore: t
                    }) {
                        let r = t.getFormat();
                        ("workflow_template_placeholder" === r.collection_view_sub_type || r.placeholder_workflow_template_id) && (0, o(715144).z)({
                            stores: [t],
                            update: {
                                placeholder_workflow_template_id: void 0,
                                collection_view_sub_type: void 0
                            },
                            transaction: e
                        }), "app_container" === r.collection_view_sub_type && r.app_config_uri && !r.app_initialized && (0, o(715144).z)({
                            stores: [t],
                            update: {
                                app_config_uri: void 0,
                                app_template_preset: void 0,
                                app_template_features: void 0,
                                app_initialized: void 0,
                                collection_view_sub_type: void 0
                            },
                            transaction: e
                        })
                    }({
                        transaction: t,
                        collectionViewBlockStore: T
                    });
                let P = [];
                return null != (I = m.value.exampleRows) && I.length && (P = function({
                    environment: e,
                    transaction: t,
                    collectionStore: c,
                    collectionViewStore: p,
                    collectionViewBlockStore: u,
                    exampleRows: m,
                    dependencyMap: g,
                    logger: v
                }) {
                    let h = [],
                        _ = (0, o(78772).H)(c, p),
                        y = o(218744).default.checkGate({
                            gateName: "duplicate_subtree_collection_flows"
                        }),
                        S = _ && y ? (0, o(559096).loadLocalSubtree)({
                            environment: e,
                            blockId: _.id,
                            inMemoryRecordCache: _.inMemoryRecordCache,
                            options: {
                                allowCopyCollections: !1,
                                requireFullSubtree: !0,
                                skipTransclusionContainerChildren: !0,
                                allowCopyExternalObjectInstances: !0,
                                includeLegacyTransclusionBlockValues: !0
                            }
                        }).recordMap : void 0;
                    _ && y && !S && v.warn(`Unable to hydrate local duplication subtree for template "${_.id}".`);
                    let {
                        inMemoryRecordCache: w
                    } = u;
                    for (let o of m) {
                        let p = (0, a().H)({
                            environment: e,
                            collectionStore: c,
                            transaction: t,
                            inMemoryRecordCache: w
                        });
                        h.push(p);
                        let u = f({
                            collectionStore: c,
                            dependencyMap: g,
                            exampleRow: o
                        });
                        (0, l().C)({
                            environment: e,
                            store: p,
                            properties: u.properties,
                            transaction: t
                        }), _ && (y && S ? ((0, n().localDuplicate)({
                            environment: e,
                            sourceBlockId: _.id,
                            targetBlockPointer: p.pointer,
                            sourceBlockSubtree: S,
                            targetInMemoryRecordCache: p.inMemoryRecordCache,
                            transaction: t,
                            from: "collection_template_actions",
                            destinationTable: r().VlP,
                            options: {
                                deepCopyTransclusionContainers: !1,
                                resolveTemplateVariables: !0,
                                isTemplateInstantiation: !0,
                                sourceBlockUpdateStrategy: "append_only",
                                convertExternalObjectInstancesToPlaceholders: !1
                            },
                            skipUserFacingMessages: !0
                        }), p.isLocked() && (0, s()._)({
                            environment: e,
                            store: p,
                            isLocked: !1,
                            transaction: t
                        })) : i().n5({
                            title: "template",
                            environment: e,
                            store: p,
                            templateStore: _,
                            isKeyboard: !1,
                            isCreateIn: !1,
                            transaction: t,
                            from: "collection_template_actions"
                        }));
                        let m = p.getIconStore();
                        o.icon && m && (0, d().K)({
                            store: m,
                            value: o.icon,
                            transaction: t
                        })
                    }
                    return (0, d().K)({
                        store: p.getPageSortStore(),
                        value: h.map(e => e.id),
                        transaction: t
                    }), h
                }({
                    environment: e,
                    transaction: t,
                    collectionStore: b,
                    collectionViewStore: M,
                    collectionViewBlockStore: T,
                    exampleRows: m.value.exampleRows,
                    dependencyMap: m.dependencyMap ? ? {},
                    logger: w
                })), t.postSubmitCallbacks.push(t => {
                    t || _.isTemporaryData || o(549960).vH(e, {
                        from: "workflow_template",
                        type: T.getType() ? ? "collection_view_page",
                        creating_block_id: T.id,
                        collection_view_block_id: T.id,
                        collection_view_id: M.id,
                        collection_id: b.id,
                        view_type: M.getType()
                    })
                }), {
                    collectionStore: b,
                    collectionViewStore: M,
                    collectionViewBlockStore: T,
                    examplePageStores: P
                }
            }

            function m(e) {
                let {
                    environment: t,
                    parentStore: r,
                    title: i,
                    onFinish: a,
                    skipCreateViewSourceMenu: l
                } = e, n = r.getSpaceId(), {
                    performResult: {
                        collectionViewBlockStore: s,
                        collectionViewStore: d,
                        collectionStore: c
                    }
                } = (0, o(377796).createAndCommit)({
                    userAction: "workflowTemplatesOnboardingModal.addEmptyDatabase",
                    environment: t,
                    canUndo: !0,
                    cellTarget: n ? {
                        spaceWithId: n
                    } : void 0,
                    perform: a => {
                        let n = e.collectionViewBlockStore;
                        void 0 === n && (n = g({
                            environment: t,
                            transaction: a,
                            parentStore: r,
                            collectionViewBlockType: "collection_view_page",
                            inMemoryRecordCache: r.inMemoryRecordCache
                        }));
                        let s = (0, o(985856).E)({
                            environment: t,
                            collectionViewBlockStore: n,
                            transaction: a,
                            collectionValue: {
                                name: i ? (0, o(247438).x9d)(i) : void 0,
                                schema: {
                                    title: {
                                        name: o(962299).A.formatMessage(o(632468).n4.namePropertyTitle),
                                        type: "title"
                                    }
                                }
                            }
                        });
                        void 0 === e.collectionViewBlockStore && o(549960).vH(t, {
                            from: "workflow_template",
                            type: "collection_view_page",
                            new_page_id: n.id,
                            creating_block_id: n.id,
                            collection_id: s.id
                        });
                        let d = o(124937).eC({
                                environment: t,
                                table: o(435544).G,
                                inMemoryRecordCache: n.inMemoryRecordCache,
                                value: {
                                    type: "table",
                                    parent_id: n.id,
                                    parent_table: n.table,
                                    space_id: n.getSpaceId(),
                                    format: {
                                        collection_pointer: s.pointer,
                                        table_properties: [{
                                            property: "title",
                                            visible: !0,
                                            width: o(986939).A.isMobile ? o(565546).PI : o(565546).Xv
                                        }]
                                    },
                                    alive: !0
                                },
                                transaction: a
                            }),
                            c = o(547131).p.createChildStore(n, d.pointer);
                        return (0, o(132229).F)(c.id, {
                            viewType: "table",
                            isPlaceholderCollection: !0,
                            ...l ? {
                                viewSettingsStack: {
                                    type: "skip"
                                }
                            } : void 0
                        }), (0, o(135674).B)({
                            parentStore: n.getCollectionViewsStore(),
                            appendStore: c,
                            transaction: a
                        }), {
                            collectionViewBlockStore: n,
                            collectionViewStore: c,
                            collectionStore: s
                        }
                    }
                });
                return a && a(s), {
                    collectionViewBlockStore: s,
                    collectionViewStore: d,
                    collectionStore: c
                }
            }

            function f({
                exampleRow: e,
                dependencyMap: t,
                collectionStore: o
            }) {
                let r = {
                    properties: {}
                };
                for (let [i, a] of Object.entries(e.properties)) r.properties[(0, c().CB)({
                    collectionStore: o,
                    sourceTemplateType: "property",
                    dependencyMap: t,
                    sourcePrimitiveId: i
                })] = a;
                return r
            }

            function g({
                environment: e,
                transaction: t,
                parentStore: r,
                collectionViewBlockType: i,
                inMemoryRecordCache: a
            }) {
                var l;
                let n = o(124937).Wv({
                    environment: e,
                    type: i,
                    inMemoryRecordCache: a,
                    transaction: t
                });
                return (0, o(173157).z)({
                    store: n,
                    transaction: t,
                    data: {
                        parent_id: r.id,
                        parent_table: r.table,
                        alive: !0
                    }
                }), v({
                    environment: e,
                    spaceViewStore: null == (l = o(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : l.clone(a),
                    parentStore: r,
                    collectionViewBlockStore: n,
                    transaction: t,
                    appendOrPrepend: "append"
                }), n
            }

            function v({
                environment: e,
                parentStore: t,
                collectionViewBlockStore: r,
                transaction: i,
                appendOrPrepend: a,
                spaceViewStore: l
            }) {
                if (t.table === o(682956).ev) o(579695).NI({
                    parentStore: t,
                    childStore: r,
                    transaction: i
                });
                else if (t.table === o(213003).NX) {
                    if ((null == l ? void 0 : l.getSpaceId()) !== t.id) throw Error(`spaceViewStore doesn't match parent with ID ${t.id}`);
                    o(964232).yM({
                        environment: e,
                        spaceStore: t,
                        spaceViewStore: l,
                        pageStore: r,
                        isPrivate: !0,
                        transaction: i
                    })
                } else t.table === o(708628).yK ? o(89739).sP({
                    teamStore: t,
                    store: r,
                    transaction: i,
                    location: {
                        type: a
                    }
                }) : (0, o(722371).HB)(t)
            }
        },
        464515: (e, t, o) => {
            o.d(t, {
                z: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    blockStore: r,
                    insertedTextBlockLocation: i,
                    editSelection: a,
                    getRectFromStore: l
                } = e, n = o(764615).Ay.state;
                if (a({
                        environment: t,
                        store: r
                    }), (0, o(940763).e)({
                        store: r.getBlockTitleStore()
                    }), !n.open && !t.device.isPhone) {
                    let e = r.getBlockTitleStore(),
                        a = l(r),
                        n = o(92513).JW();
                    a && (o(764615).Ay.setState({
                        id: n,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: a,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: o(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: i
                    }), (0, o(525779).clear)({
                        environment: t
                    }), (0, o(940763).e)({
                        store: e
                    }), (0, o(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: n,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        526131: (e, t, o) => {
            o.d(t, {
                ai: () => _,
                xN: () => w,
                e_: () => y,
                Ix: () => S,
                Z5: () => I
            }), o(898992), o(672577);
            var r = () => o(547131),
                i = () => o(97746),
                a = () => o(388507),
                l = () => o(993189),
                n = () => o(435544),
                s = () => o(322683),
                d = () => o(249487),
                c = () => o(421439);
            o(354520);
            var p = () => o(932292),
                u = () => o(717673);

            function m({
                environment: e,
                collectionStore: t,
                collectionViewValue: o,
                dependencyMap: r,
                logger: i
            }) {
                var l;
                if ((0, p().remapPropertyIds)({
                        collectionStore: t,
                        object: o,
                        dependencyMap: r
                    }), function({
                        environment: e,
                        spaceId: t,
                        collectionViewValue: o,
                        logger: r
                    }) {
                        for (let l of (null == (i = o.format) ? void 0 : i.collection_groups) ? ? []) {
                            var i, a;
                            let {
                                value: o
                            } = l;
                            if (("created_by" === o.type || "last_edited_by" === o.type) && (null == (a = o.value) ? void 0 : a.table) === "notion_user") {
                                let i = e.currentUser.id;
                                if (!i) {
                                    r.warn("No current user ID, unable to remap collection group user to current user!");
                                    continue
                                }
                                r.log(`Remapping user ID ${o.value.id} to ${i} in collection view group.`), o.value.id = i, o.value.spaceId = t
                            }
                        }
                    }({
                        environment: e,
                        spaceId: t.getSpaceId(),
                        collectionViewValue: o,
                        logger: i
                    }), o.query2 && function({
                        collectionStore: e,
                        query2: t,
                        dependencyMap: o
                    }) {
                        for (let r of a().Nf) {
                            let i = t[r];
                            i && (t[r] = (0, u().CB)({
                                collectionStore: e,
                                sourceTemplateType: "property",
                                dependencyMap: o,
                                sourcePrimitiveId: i
                            }))
                        }
                    }({
                        collectionStore: t,
                        query2: o.query2,
                        dependencyMap: r
                    }), "object" == typeof(null == (l = o.format) ? void 0 : l.collection_view_default_template)) {
                    let e = (0, u().fI)({
                        collectionStore: t,
                        sourceTemplateType: "block",
                        dependencyMap: r,
                        sourcePrimitiveId: o.format.collection_view_default_template.template_page_id
                    });
                    e ? o.format.collection_view_default_template = {
                        template_page_id: e
                    } : (i.warn("Unable to resolve collection_view default template, omitting it."), delete o.format.collection_view_default_template)
                }
            }
            var f = () => o(213732);
            o(581454);
            var g = o.n(o(794148));

            function v(e) {
                let {
                    actionPlaceholderIdToActionId: t,
                    collectionStore: r,
                    dependencyMap: i,
                    logger: a
                } = e;

                function l(e) {
                    let r = (0, o(297493).y5)(e);
                    if ("action" === r.source) {
                        let e = t.get(r.action_id) ? ? r.action_id;
                        return (0, o(297493).$y)({ ...r,
                            action_id: e
                        })
                    }
                    if ("global" === r.source) return e;
                    (0, o(722371).HB)(r)
                }

                function s(e) {
                    if (!i) return;
                    if ("title" === e) return e;
                    let t = (0, u().fI)({
                        collectionStore: r,
                        sourceTemplateType: "property",
                        sourcePrimitiveId: e,
                        dependencyMap: i
                    });
                    return t || a.warn(`Failed to remap property ID ${e} in automation template`), t
                }
                return {
                    visitCollectionProperty: e => i ? {
                        type: "replace",
                        value: s(e)
                    } : {
                        type: "keep"
                    },
                    visitCollectionPropertyPointer: e => {
                        if (!i) return {
                            type: "keep"
                        };
                        let t = s(e.propertyId);
                        if (!t) return {
                            type: "replace",
                            value: void 0
                        };
                        let l = (0, u().fI)({
                            collectionStore: r,
                            sourceTemplateType: "collection",
                            sourcePrimitiveId: e.id,
                            dependencyMap: i
                        });
                        return l ? {
                            type: "replace",
                            value: {
                                id: l,
                                propertyId: t,
                                spaceId: r.getSpaceId(),
                                table: o(46241).V
                            }
                        } : (a.warn(`Failed to remap collection ID ${e.id} in automation template`), {
                            type: "replace",
                            value: void 0
                        })
                    },
                    visitFormulaContextValue: e => ({
                        type: "replace",
                        value: l(e)
                    }),
                    visitFormulaPageProperty: e => {
                        if (!i) return {
                            type: "keep"
                        };
                        let t = (0, o(381453).mg)(e),
                            n = s(e.property);
                        if (!n) return {
                            type: "replace",
                            value: void 0
                        };
                        if (t.property = n, "collection" in t && t.collection) {
                            let e = (0, u().fI)({
                                collectionStore: r,
                                sourceTemplateType: o(46241).V,
                                sourcePrimitiveId: t.collection.id,
                                dependencyMap: i
                            });
                            if (!e) return a.warn(`Failed to remap collection ID ${t.collection.id} in automation template`), {
                                type: "replace",
                                value: void 0
                            };
                            t.collection = o(496282).L3.fromSpaceShardRecordId({
                                id: e,
                                spaceId: r.getSpaceId()
                            }, o(46241).V)
                        } else "contextValueId" in t && t.contextValueId && (t.contextValueId = l(t.contextValueId));
                        return {
                            type: "replace",
                            value: t
                        }
                    },
                    visitRecordPointer: e => {
                        if (!i) return {
                            type: "keep"
                        };
                        if (e.table === o(682956).ev || e.table === o(46241).V || e.table === o(199850).yB || e.table === n().G) {
                            let t = (0, u().fI)({
                                collectionStore: r,
                                sourceTemplateType: e.table,
                                sourcePrimitiveId: e.id,
                                dependencyMap: i
                            });
                            return t ? {
                                type: "replace",
                                value: o(496282).L3.fromSpaceShardRecordId({
                                    id: t,
                                    spaceId: r.getSpaceId()
                                }, e.table)
                            } : (a.warn(`Failed to remap record pointer ${o(496282).L3.toKey(e)} in automation template`), {
                                type: "replace",
                                value: void 0
                            })
                        }
                        return {
                            type: "keep"
                        }
                    }
                }
            }
            o(16280);
            var h = () => o(351418);

            function _({
                environment: e,
                transaction: t,
                collectionStore: r,
                template: i,
                logger: a,
                origin: l,
                examplePageStores: n,
                preserveCollectionFeatureOrdering: s
            }) {
                let d = y({
                        transaction: t,
                        environment: e,
                        collectionStore: r,
                        template: i,
                        logger: a,
                        origin: l,
                        preserveCollectionFeatureOrdering: s
                    }),
                    c = (0, p().getPropertyTemplates)([i]);
                return (0, o(487016).My)({
                    transaction: t,
                    collectionStore: r,
                    propertyTemplates: c
                }), (0, o(487016).Bi)({
                    transaction: t,
                    collectionStore: r,
                    propertyTemplates: c
                }), S({
                    environment: e,
                    transaction: t,
                    collectionStore: r,
                    template: i,
                    logger: a,
                    examplePageStores: n
                }), d
            }

            function y(e) {
                let {
                    collectionStore: t,
                    template: i,
                    transaction: s
                } = e;
                ! function(e) {
                    let {
                        template: t,
                        logger: o
                    } = e, r = (0, a().Z6)({
                        template: t,
                        logger: o
                    }), {
                        environment: i,
                        collectionStore: l
                    } = e;
                    for (let a of r)(0, u().Zp)({
                        environment: i,
                        collectionStore: l,
                        templateId: a.templateId
                    }) || (o.log(`Template "${t.templateId}" has implicit dependency "${a.templateId}" (source: ${a.debugSource}), instantiating it.`), y({ ...e,
                        template: p().globalWorkflowTemplates.featureFromId(a.templateId)
                    }))
                }(e);
                let d = function(e) {
                    let {
                        logger: t
                    } = e, i = o(381453).mg(e.template), {
                        type: s
                    } = i;
                    switch (t.log(`Instantiating ${s} template "${i.templateId}".`), s) {
                        case "property":
                            return function(e) {
                                var t;
                                let {
                                    environment: r,
                                    logger: i,
                                    transaction: l,
                                    collectionStore: n,
                                    template: s
                                } = e, d = "title" === (t = s).value.type ? "title" : t.templateId === o(582881).RE || t.templateId === o(582881).K4 ? o(435137)._e.Verification : t.templateId === o(582881).dr ? o(435137)._e.Owner : (0, o(698596).Ay)();
                                if ((0, a().PC)(s, "formula")) ! function({
                                    template: e,
                                    collectionStore: t
                                }) {
                                    let {
                                        value: r,
                                        dependencyMap: i
                                    } = e;
                                    if (!i || !r.formula2) return;
                                    let {
                                        value: a
                                    } = (0, o(138303).RI)({
                                        baseUrl: o(986939).A.domainBaseUrl,
                                        formula: r.formula2.code,
                                        publicDomainName: o(986939).A.publicDomainName,
                                        spaceId: t.getSpaceId(),
                                        visitors: {
                                            visitFormulaContextValue: void 0,
                                            visitFormulaPageProperty: e => {
                                                let o = { ...e
                                                };
                                                return o.property = (0, u().CB)({
                                                    dependencyMap: i,
                                                    collectionStore: t,
                                                    sourcePrimitiveId: e.property,
                                                    sourceTemplateType: "property"
                                                }), "collection" in o && o.collection && (o.collection = t.pointer), {
                                                    type: "replace",
                                                    value: o
                                                }
                                            },
                                            visitRecordPointer: void 0
                                        }
                                    });
                                    r.formula2.code = a
                                }({ ...e,
                                    template: s
                                });
                                else if ((0, a().Ox)(s)) {
                                    let t = p().globalWorkflowTemplates.featureFromId(s.buttonAutomationId);
                                    i.log(`Instantiating dependency "${t.templateId}" of button property template "${s.templateId}".`);
                                    let o = y({ ...e,
                                        template: t
                                    });
                                    if (!o) throw Error(`Failed to create instance of automation template "${t.templateId}"`);
                                    if ("automation" !== o.type) throw Error(`Unexpected instance pointer. Expected "automation" but got "${o.type}"`);
                                    s.value.automation_id = o.id
                                }
                                let c = (0, o(381453).mg)(s.value);
                                return c.workflow_template_instance = {
                                    template_id: s.templateId
                                }, (0, o(957395).F)({
                                    environment: r,
                                    collectionStore: n,
                                    update: {
                                        [d]: c
                                    },
                                    transaction: l
                                }), {
                                    type: "property",
                                    id: d,
                                    collectionId: n.id
                                }
                            }({ ...e,
                                template: i
                            });
                        case "collection_view":
                            return function({
                                environment: e,
                                transaction: t,
                                collectionStore: i,
                                template: a,
                                logger: l,
                                preserveCollectionFeatureOrdering: s
                            }) {
                                let d = i.getParentBlockStore();
                                if (!d) throw Error("Collection view block store not found");
                                let {
                                    value: c,
                                    dependencyMap: p
                                } = a;
                                if (!p) throw Error("Dependency map not defined on view template");
                                m({
                                        environment: e,
                                        collectionStore: i,
                                        collectionViewValue: c,
                                        dependencyMap: p,
                                        logger: l
                                    }),
                                    function({
                                        collectionStore: e,
                                        collectionViewValue: t
                                    }) {
                                        var o;
                                        let r = null == (o = t.format) ? void 0 : o.table_properties;
                                        if (!r) return;
                                        let i = r.map(e => e.property);
                                        for (let t of Object.keys(e.getSchema()).filter(e => !i.includes(e))) r.push({
                                            property: t,
                                            visible: !1
                                        })
                                    }({
                                        collectionStore: i,
                                        collectionViewValue: c
                                    });
                                let u = o(124937).eC({
                                        environment: e,
                                        table: n().G,
                                        inMemoryRecordCache: d.inMemoryRecordCache,
                                        value: { ...c,
                                            parent_id: d.id,
                                            parent_table: d.table,
                                            space_id: d.getSpaceId(),
                                            format: { ...c.format,
                                                collection_pointer: i.pointer
                                            },
                                            alive: !0
                                        },
                                        transaction: t
                                    }),
                                    f = r().p.createChildStore(d, u.pointer),
                                    g = d.getCollectionViewsStore();
                                if (s) {
                                    let e = function({
                                        collectionTemplate: e,
                                        collectionViewStores: t,
                                        collectionViewTemplate: o
                                    }) {
                                        let r, i = -1,
                                            a = e.value.templateItems.findIndex(e => e.pointer === o.templateId);
                                        return t.forEach(t => {
                                            var o;
                                            let l = null == (o = t.getFormat().workflow_template_instance) ? void 0 : o.template_id;
                                            if (!l) return;
                                            let n = e.value.templateItems.findIndex(e => e.pointer === l);
                                            !(n > a) && n > i && (i = n, r = t.id)
                                        }), r
                                    }({
                                        collectionTemplate: s,
                                        collectionViewStores: d.getCollectionViewStores(),
                                        collectionViewTemplate: a
                                    });
                                    e ? (0, o(135674).B)({
                                        parentStore: g,
                                        appendStore: f,
                                        transaction: t,
                                        after: e
                                    }) : (0, o(181472).H)({
                                        parentStore: g,
                                        prependStore: f,
                                        transaction: t
                                    })
                                } else(0, o(135674).B)({
                                    parentStore: g,
                                    appendStore: f,
                                    transaction: t
                                });
                                return {
                                    type: "collection_view",
                                    id: f.id
                                }
                            }({ ...e,
                                template: i
                            });
                        case "layout":
                            return function({
                                environment: e,
                                transaction: t,
                                collectionStore: r,
                                template: i
                            }) {
                                if (!i.dependencyMap) throw Error("Dependency map not defined on layout template");
                                let a = (0, f().f)({
                                        collectionStore: r,
                                        modules: {
                                            page_layout_schema: void 0,
                                            page_info_layout_schema: void 0,
                                            form_layout_schema: void 0,
                                            person_profile_page_main: void 0,
                                            person_profile_page_details: void 0,
                                            ...i.value
                                        },
                                        dependencyMap: i.dependencyMap
                                    }),
                                    {
                                        model: l
                                    } = (0, o(41500).$L)({
                                        environment: e,
                                        transaction: t,
                                        collectionStore: r,
                                        userId: (0, o(148337).o9)(e.currentUser.id),
                                        modules: a
                                    });
                                return {
                                    type: "layout",
                                    id: l.id,
                                    spaceId: r.getSpaceId()
                                }
                            }({ ...e,
                                template: i
                            });
                        case "compound":
                            return function(e) {
                                let {
                                    environment: t,
                                    template: r,
                                    collectionStore: i,
                                    logger: l
                                } = e, n = [], s = e => {
                                    if (!(0, u().DM)(e) || "compound" === e.type) throw Error(`Template in compound template generated a non-feature instance pointer of an illegal type: ${e.type}`);
                                    n.push(e)
                                };
                                for (let o of r.value.templateItems) {
                                    let {
                                        optionality: n,
                                        pointer: d
                                    } = o;
                                    if ("optionalDefaultOff" === n) continue;
                                    let c = (0, u().Zp)({
                                        environment: t,
                                        collectionStore: i,
                                        templateId: o.pointer
                                    });
                                    if (c) {
                                        s(c);
                                        continue
                                    }
                                    let m = p().globalWorkflowTemplates.fromId(d);
                                    if (!(0, a().$K)(m)) throw Error(`${m.templateId} in compound template is of an illegal type: ${m.type}`);
                                    l.log(`Instantiating dependency "${m.templateId}" of compound template "${r.templateId}".`);
                                    let f = _({ ...e,
                                        template: m
                                    });
                                    f && s(f)
                                }
                                return {
                                    type: "compound",
                                    id: (0, o(4962).Ay)(),
                                    instancePointers: n,
                                    collectionId: i.id
                                }
                            }({ ...e,
                                template: i
                            });
                        case "block":
                            return function({
                                environment: e,
                                transaction: t,
                                collectionStore: r,
                                template: i
                            }) {
                                let a = (0, o(295447).zP)({
                                    environment: e,
                                    spaceId: r.getSpaceId(),
                                    table: o(682956).ev
                                });
                                if ("block" !== i.type) throw Error(`Expected block template, got ${i.type} template: ${i.templateId}`);
                                if (!i.dependencyMap) throw Error(`Dependency map not defined on block template: ${i.templateId}`);
                                let {
                                    dependencyMap: n
                                } = i, s = o(412951).RecordMap.create(i.value.recordMap), d = s.getModel(i.value.blockPointer), c = l().b4_.fromRecordMap(s);
                                if (d) {
                                    let e = d.getProperties(c);
                                    for (let [t, o] of Object.entries(e)) {
                                        let i = (0, u().CB)({
                                            collectionStore: r,
                                            sourceTemplateType: "property",
                                            sourcePrimitiveId: t,
                                            dependencyMap: n
                                        });
                                        i && (delete e[t], e[i] = o)
                                    }
                                }
                                let {
                                    targetBlockStore: p
                                } = (0, o(44226).localDuplicate)({
                                    environment: e,
                                    sourceBlockId: i.value.blockPointer.id,
                                    targetBlockPointer: a,
                                    sourceBlockSubtree: s,
                                    transaction: t,
                                    targetInMemoryRecordCache: r.inMemoryRecordCache,
                                    from: "create_block_template",
                                    destinationTable: o(832375).VlP,
                                    options: {
                                        allowRedundancy: !0,
                                        deepCopyTransclusionContainers: !1,
                                        resolveTemplateVariables: !1
                                    }
                                });
                                return o(579695).X$({
                                    childStore: p,
                                    parentStore: r,
                                    transaction: t
                                }), p.isTemplate() && (0, o(135674).B)({
                                    parentStore: r.getTemplatePagesStore(),
                                    appendStore: p,
                                    transaction: t
                                }), {
                                    type: "block",
                                    id: p.id,
                                    spaceId: r.getSpaceId()
                                }
                            }({ ...e,
                                template: i
                            });
                        case "automation":
                            return function({
                                collectionStore: e,
                                environment: t,
                                logger: r,
                                template: i,
                                transaction: a
                            }) {
                                let n = function({
                                        environment: e,
                                        logger: t,
                                        parentStore: r,
                                        template: i,
                                        transaction: a
                                    }) {
                                        let n = (0, o(295447).zP)({
                                                environment: e,
                                                spaceId: r.getSpaceId(),
                                                table: o(199850).yB
                                            }),
                                            s = e.currentUser.id,
                                            d = l().Bj6.fromAutomation({
                                                alive: !0,
                                                created_by_id: s ? ? "",
                                                created_by_table: o(514214).oo,
                                                created_time: Date.now(),
                                                id: n.id,
                                                parent_id: r.pointer.id,
                                                parent_table: r.pointer.table,
                                                space_id: r.getSpaceId(),
                                                trigger: { ...i.value.trigger,
                                                    id: o(92513).JW()
                                                },
                                                version: 0,
                                                last_edited_by_id: s ? ? "",
                                                last_edited_by_table: o(514214).oo,
                                                last_edited_time: Date.now(),
                                                status: "active"
                                            }),
                                            c = v({
                                                actionPlaceholderIdToActionId: new Map,
                                                collectionStore: r,
                                                dependencyMap: i.dependencyMap,
                                                logger: t
                                            }),
                                            {
                                                value: p
                                            } = (0, o(623519).n)({
                                                automationModel: d,
                                                visitors: c
                                            }),
                                            u = p.getTrigger();
                                        return o(871865).createAutomation({
                                            actionIds: [],
                                            environment: e,
                                            automationId: n.id,
                                            automationName: i.value.name,
                                            parentPointer: r.getSpaceShardedPointer(),
                                            transaction: a,
                                            trigger: u
                                        })
                                    }({
                                        environment: t,
                                        logger: r,
                                        parentStore: e,
                                        template: i,
                                        transaction: a
                                    }),
                                    s = new Map;
                                return i.value.actions.map(l => (function({
                                    actionPlaceholderIdToActionId: e,
                                    actionTemplate: t,
                                    collectionStore: r,
                                    environment: i,
                                    logger: a,
                                    parentStore: l,
                                    parentTemplate: n,
                                    transaction: s
                                }) {
                                    let d = (0, o(295447).zP)({
                                            environment: i,
                                            spaceId: l.getSpaceId(),
                                            table: o(901144).SC
                                        }),
                                        {
                                            config: c,
                                            placeholderId: p,
                                            type: u
                                        } = t,
                                        {
                                            model: m
                                        } = o(350907).RU.create({
                                            alive: !0,
                                            config: c,
                                            id: d.id,
                                            parent_id: l.pointer.id,
                                            parent_table: l.pointer.table,
                                            space_id: r.getSpaceId(),
                                            type: u,
                                            version: 0
                                        }),
                                        f = v({
                                            actionPlaceholderIdToActionId: e,
                                            collectionStore: r,
                                            dependencyMap: n.dependencyMap,
                                            logger: a
                                        }),
                                        {
                                            value: h
                                        } = (0, o(623519).G)({
                                            automationActionModel: m,
                                            baseUrl: o(986939).A.domainBaseUrl,
                                            preventClearingConfig: !0,
                                            publicDomainName: o(986939).A.publicDomainName,
                                            sourceSpaceId: r.getSpaceId(),
                                            visitors: f
                                        }),
                                        _ = h.getConfig(),
                                        y = o(871865).addAutomationAction({
                                            actionId: d.id,
                                            actionType: t.type,
                                            automationStore: l,
                                            config: _,
                                            createDuplicateBlocksContainer: !0,
                                            environment: i,
                                            intl: o(962299).A.getIntl(),
                                            transaction: s
                                        });
                                    return g()(y, "Failed to create automation action"), e.set(p, y.id), y
                                })({
                                    actionPlaceholderIdToActionId: s,
                                    actionTemplate: l,
                                    collectionStore: e,
                                    environment: t,
                                    logger: r,
                                    parentStore: n,
                                    parentTemplate: i,
                                    transaction: a
                                })), n.isTriggerType("event") && (0, c().y4)({
                                    store: e,
                                    operation: {
                                        pointer: e.pointer,
                                        path: ["format", "automation_ids"],
                                        command: "listAfter",
                                        args: {
                                            id: n.id
                                        }
                                    },
                                    transaction: a
                                }), {
                                    id: n.id,
                                    spaceId: e.getSpaceId(),
                                    type: "automation"
                                }
                            }({ ...e,
                                template: i
                            });
                        default:
                            (0, o(722371).HB)(s)
                    }
                }(e);
                return d && (0, o(829808).ZQ)({
                    transaction: s,
                    collectionStore: t,
                    templateId: i.templateId,
                    instance: d,
                    logger: e.logger
                }), d
            }

            function S({
                environment: e,
                transaction: t,
                collectionStore: o,
                template: a,
                logger: g,
                examplePageStores: v
            }) {
                for (let {
                        instancePointer: _,
                        templateId: y
                    } of (0, u().Sl)({
                        environment: e,
                        collectionStore: o
                    })) {
                    if ("collection" === _.type) continue;
                    let u = p().globalWorkflowTemplates.fromId(y),
                        S = u.dependencyMap && Object.values(u.dependencyMap).includes(a.templateId);
                    if (!("dependencyMap" in u) || !u.dependencyMap || !S) {
                        ! function({
                            environment: e,
                            transaction: t,
                            collectionStore: o,
                            template: r,
                            instancePointer: i,
                            examplePageStores: a
                        }) {
                            if (a && "property" === i.type)
                                for (let i of a) {
                                    let a = (0, h().gv)({
                                        collectionStore: o,
                                        dependencyMap: r.dependencyMap ? ? {},
                                        exampleRow: {
                                            properties: i.getProperties()
                                        }
                                    });
                                    (0, d().C)({
                                        environment: e,
                                        store: i,
                                        properties: a.properties,
                                        transaction: t
                                    })
                                }
                        }({
                            environment: e,
                            transaction: t,
                            collectionStore: o,
                            template: a,
                            examplePageStores: v,
                            instancePointer: _
                        });
                        continue
                    }
                    g.log(`Remapping dependency "${a.templateId}" in "${y}".`);
                    let w = {};
                    if ("layout" === _.type) {
                        let e = i().K.createChildStore(o, {
                                table: s().zx,
                                id: _.id,
                                spaceId: _.spaceId
                            }),
                            r = e.getRawModules();
                        if (r) {
                            let i = (0, f().f)({
                                collectionStore: o,
                                modules: r,
                                dependencyMap: w
                            });
                            (0, c().y4)({
                                transaction: t,
                                store: e,
                                operation: l().N4X.updateModules(e.pointer, i)
                            })
                        }
                    } else if ("collection_view" === _.type) {
                        let t = r().p.createChildStore(o, {
                                table: n().G,
                                id: _.id
                            }),
                            i = t.getType();
                        if (!i) continue;
                        m({
                            environment: e,
                            collectionStore: o,
                            collectionViewValue: {
                                type: i,
                                name: t.getName(),
                                format: t.getFormat(),
                                query2: t.getRawQuery()
                            },
                            dependencyMap: w,
                            logger: g
                        })
                    } else g.warn(`Don't know how to remap instance type "${_.type}"!`)
                }
            }

            function w({
                environment: e,
                collectionStore: t
            }) {
                for (let {
                        instancePointer: o
                    } of (0, u().Sl)({
                        environment: e,
                        collectionStore: t
                    }))
                    if ("collection_view" === o.type) {
                        let e = r().p.createChildStore(t, {
                            table: n().G,
                            id: o.id
                        });
                        if (!e.getType()) continue;
                        ! function({
                            collectionViewFormat: e
                        }) {
                            let t = null == e ? void 0 : e.table_properties;
                            t && (e.table_properties = t.filter(e => !(0, u().TE)(e.property)))
                        }({
                            collectionViewFormat: e.getFormat()
                        })
                    }
            }

            function I({
                environment: e,
                transaction: t,
                collectionViewBlockStore: r,
                collectionStore: i,
                instancePointer: a
            }) {
                let l = a.type;
                switch (l) {
                    case "property":
                        (0, o(875964).B)({
                            environment: e,
                            collectionStore: i,
                            schema: i.getSchema(),
                            property: a.id,
                            transaction: t,
                            permanentlyDelete: !1
                        });
                        break;
                    case "collection_view":
                        if (!r) return;
                        let n = r.getCollectionViewStores().find(e => e.id === a.id);
                        n && (0, o(505131).T)({
                            collectionViewBlockStore: r,
                            collectionViewStore: n,
                            transaction: t
                        });
                        break;
                    case "layout":
                    case "block":
                    case "automation":
                        break;
                    default:
                        (0, o(722371).HB)(l)
                }
            }
            o(944114), o(803949)
        },
        598132: (e, t, o) => {
            function r(e) {
                let t = o(728372).AppStoreCurrentUserRootStore.state;
                if (!t) return !1;
                let r = t.getSpaceViewStores();
                return (0, o(381453).oE)(null == r ? void 0 : r.map(e => e.getSpaceId())).map(t => o(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                })).some(e => a(e))
            }

            function i(e, t) {
                return a(o(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                }))
            }

            function a(e) {
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
                        (0, o(722371).HB)(e)
                }
            }
            o.d(t, {
                h0: () => r,
                lM: () => i
            }), o(898992), o(581454), o(737550)
        },
        621347: (e, t, o) => {
            o.d(t, {
                g: () => r
            }), o(944114);
            async function r(e) {
                let {
                    environment: t,
                    onResponse: r,
                    data: i,
                    userId: a,
                    tracking: l,
                    abortSignal: n
                } = e, s = await t.api.callStreamApi({
                    eventName: "runInferenceTranscript",
                    environment: t,
                    data: i,
                    userId: a,
                    tracking: l,
                    abortSignal: n,
                    headers: (0, o(115118).WS)({
                        spaceId: i.spaceId
                    })
                });
                if ("success" !== s.type) return null != n && n.aborted ? {
                    error: {
                        message: "Aborted",
                        code: 0
                    }
                } : (o(647095).Qg(s), {
                    error: {
                        message: s.error.message,
                        code: s.status
                    }
                });
                let d = [];
                if (o(331653).hS.is(s.data))
                    for await (let e of s.data) {
                        if ("error" === e.type) return {
                            error: {
                                message: e.message,
                                code: e.errorCode
                            }
                        };
                        null == r || r(e), d.push(e)
                    }
                return {
                    value: d
                }
            }
        },
        643686: (e, t, o) => {
            o.d(t, {
                z: () => r
            });
            async function r({
                setupGenerator: e,
                isPhone: t
            }) {
                (0, o(220210).moveToNextOnboardingStep)(t);
                let i = o(247722).default.state.open ? o(247722).default.state.flowId : void 0,
                    a = await e.submitPrompt({
                        from: "initial-input"
                    }),
                    l = o(247722).default.state.open ? o(247722).default.state.flowId : void 0;
                a && i === l && (0, o(220210).moveToNextOnboardingStep)(t)
            }
        },
        674002: (e, t, o) => {
            function r({
                eventProperties: e
            }) {
                (0, o(104310).u)({
                    event: {
                        eventName: "suggested_collection_template_clicked",
                        eventProperties: e
                    }
                })
            }

            function i({
                eventProperties: e
            }) {
                (0, o(104310).u)({
                    event: {
                        eventName: "workflow_template_onboarding_placeholder_created",
                        eventProperties: e
                    }
                })
            }

            function a({
                eventProperties: e,
                modalState: t
            }) {
                if ((0, o(104310).u)({
                        event: {
                            eventName: "workflow_template_onboarding_done",
                            eventProperties: e
                        }
                    }), o(707964).u4({
                        name: "collection_created_from_workflow_template",
                        args: {
                            template_id: e.collection_template_id ? ? "",
                            origin: e.origin,
                            experiment_group: "personalized"
                        }
                    }), t.collectionTemplate.isAiGenerated) {
                    var r;
                    null == (r = t.setupGenerator) || r.trackSessionEnded({
                        reason: "instantiated"
                    })
                }
            }

            function l({
                eventProperties: e
            }) {
                (0, o(104310).u)({
                    event: {
                        eventName: "setup_generator_session_started",
                        eventProperties: e
                    }
                })
            }

            function n({
                eventProperties: e
            }) {
                (0, o(104310).u)({
                    event: {
                        eventName: "setup_generator_generated_setup",
                        eventProperties: e
                    }
                })
            }

            function s({
                eventProperties: e
            }) {
                (0, o(104310).u)({
                    event: {
                        eventName: "template_picker_opened",
                        eventProperties: e
                    }
                })
            }
            o.d(t, {
                DF: () => s,
                HD: () => i,
                If: () => n,
                Vd: () => l,
                g2: () => a,
                os: () => r
            })
        },
        706968: (e, t, o) => {
            function r(e) {
                return n({
                    transcript: e
                })
            }

            function i(e) {
                let t = r(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent
            }

            function a(e) {
                let t = r(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent ? t.workflowId : void 0
            }

            function l(e) {
                let {
                    transcript: t,
                    fallback: o
                } = e, r = o;
                for (let e of t) {
                    if ("config" === e.type && "workflow" === e.value.type) {
                        r = e.value;
                        continue
                    }
                    if ("updated-config" === e.type && r) {
                        if (null === e.value || "object" != typeof e.value || Array.isArray(e.value)) continue;
                        r = { ...r,
                            ...e.value
                        }
                    }
                }
                return r
            }

            function n(e) {
                var t;
                let {
                    transcript: o
                } = e, r = null == (t = o.findLast(e => "config" === e.type)) ? void 0 : t.value;
                if (r) return "workflow" !== r.type ? r : l({
                    transcript: o
                }) ? ? r
            }
            o.d(t, {
                TU: () => n,
                f_: () => r,
                p0: () => i,
                py: () => l,
                zB: () => a
            }), o(410838)
        },
        800056: (e, t, o) => {
            function r(e, t) {
                let o = e.reduce((e, t) => {
                        if (t.isType("define_variables")) {
                            var o;
                            let r = null == (o = t.getModel()) ? void 0 : o.getVariables();
                            if (r)
                                for (let t of Object.values(r)) e.add(t.name)
                        }
                        return e
                    }, new Set),
                    r = t.replace(/\s*\d+$/, ""),
                    i = 1,
                    a = `${r} ${i}`;
                for (; o.has(a);) a = `${r} ${i}`, i++;
                return a
            }
            o.d(t, {
                v: () => r
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(908872)
        },
        850563: (e, t, o) => {
            o.d(t, {
                G1: () => n,
                Ll: () => l,
                Pn: () => c,
                TU: () => r().TU,
                Vf: () => i,
                kQ: () => d,
                py: () => r().py,
                yD: () => a
            }), o(410838), o(813451), o(944114), o(898992), o(354520), o(672577), o(803949), o(581454), o(737550);
            var r = () => o(706968);

            function i(e) {
                return "inference" !== e.type && "queue-handoff" !== e.type && "reenqueue-with-delay" !== e.type && "record-map" !== e.type && "patch-start" !== e.type && "patch" !== e.type && "agent-search-extracted-results" !== e.type
            }

            function a(e) {
                return "patch" === e.type || "patch-start" === e.type
            }

            function l(e) {
                return "user-injected" === e.type && void 0 === e.displayMessage
            }

            function n(e) {
                let t;
                return (null == (t = e.find(e => "context" === e.type)) ? void 0 : t.value.surface) === "daily_brief_reminder" && 1 >= e.filter(e => "user" === e.type || "user-injected" === e.type && !l(e)).length
            }

            function s(e) {
                return "context" === e.type
            }

            function d(e) {
                let t = e.find(s);
                return null == t ? void 0 : t.value.surface
            }

            function c(e) {
                let t = 0,
                    o = e.findLastIndex(e => "user" === e.type);
                return -1 !== o && (t = o + 1), e.slice(t)
            }
        },
        871865: (e, t, o) => {
            o.r(t), o.d(t, {
                addAutomationAction: () => m,
                clearInvalidVariables: () => y,
                createAutomation: () => u,
                deleteAutomation: () => C,
                disableAutomation: () => T,
                duplicateAutomation: () => g,
                duplicateAutomationAction: () => v,
                enableAutomation: () => b,
                insertEmptyTextInDuplicateBlockAction: () => I,
                messages: () => p,
                removeAutomationAction: () => _,
                reorderAutomationActions: () => h,
                restartAutomation: () => f
            }), o(16280), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(672577), o(803949), o(581454);
            var r = o.n(o(794148)),
                i = () => o(986939),
                a = () => o(623519),
                l = () => o(416901),
                n = () => o(488307),
                s = () => o(832375),
                d = () => o(722371),
                c = () => o(421439);
            let p = (0, o(109939).YK)({
                genericErrorMessage: {
                    id: "automations.buttonTrigger.genericErrorMessage",
                    defaultMessage: "Button failed to execute"
                },
                open: {
                    defaultMessage: "Open",
                    id: "automations.buttonTrigger.open"
                },
                undo: {
                    defaultMessage: "Undo",
                    id: "automations.buttonTrigger.undo"
                },
                defaultConfirmationWorkflowText: {
                    defaultMessage: "Are you sure you want to continue?",
                    id: "automations.buttonTrigger.defaultConfirmationWorkflowText"
                },
                defaultContinueWorkflowMessage: {
                    defaultMessage: "Continue",
                    id: "automations.buttonTrigger.defaultContinueWorkflowMessage"
                },
                defaultStopWorkflowMessage: {
                    defaultMessage: "Cancel",
                    id: "automations.buttonTrigger.defaultStopWorkflowMessage"
                },
                errorQueryCollectionTooManyPages: {
                    defaultMessage: "Button impacts too many pages",
                    id: "automations.buttonTrigger.errorQueryCollectionTooManyPages"
                },
                errorRecordInTrash: {
                    id: "automations.buttonTrigger.errorRecordInTrash",
                    defaultMessage: "Button is editing a page in trash"
                },
                errorWebhookTimeout: {
                    id: "automations.buttonTrigger.errorWebhookTimeout",
                    defaultMessage: "Button failed to execute: webhook request timed out"
                }
            });

            function u(e) {
                let {
                    actionIds: t,
                    automationId: i,
                    automationName: a,
                    environment: l,
                    inMemoryRecordCache: n,
                    parentPointer: d,
                    transaction: c,
                    trigger: p
                } = e, u = i ? ? (0, o(295447).Z1)({
                    environment: l,
                    table: s().yBS,
                    spaceId: d.spaceId
                }), m = o(124937).eC({
                    environment: l,
                    inMemoryRecordCache: n ? ? l.defaultRecordCache.inMemoryRecordCache,
                    table: s().yBS,
                    transaction: c,
                    value: {
                        action_ids: t,
                        alive: !0,
                        id: u,
                        parent_id: d.id,
                        parent_table: d.table,
                        properties: {
                            name: a
                        },
                        space_id: d.spaceId,
                        status: "active",
                        trigger: p
                    }
                });
                return r()(m.isTriggerType(p.type), "Trigger type mismatch"), m
            }

            function m(e) {
                let t, {
                        actionId: i,
                        environment: a,
                        intl: l,
                        automationStore: n,
                        actionType: c,
                        transaction: u,
                        insertionPoint: m,
                        config: f,
                        createDuplicateBlocksContainer: g = !0,
                        builderType: v = "sidebar"
                    } = e,
                    h = n.getSpaceId();
                if (!h) return;
                if ("duplicate_blocks" === c && g) {
                    t = o(124937).Wv({
                        environment: a,
                        inMemoryRecordCache: n.inMemoryRecordCache,
                        transaction: u,
                        type: "text"
                    });
                    let e = I({
                        environment: a,
                        contentStore: t.getContentStore(),
                        transaction: u
                    });
                    o(374176).default.afterNextFlush(() => {
                        let t = o(240414).T.find(t => o(496282).L3.isEqual(t.props.store.pointer, e.pointer));
                        t && (0, o(940763).e)({
                            store: t.props.store.getBlockTitleStore()
                        })
                    })
                }
                let _ = f ? ? function(e) {
                        let {
                            actionType: t,
                            automationStore: r,
                            intl: i
                        } = e;
                        if ("modal_confirmation" === t) return {
                            continue_button: {
                                text: i.formatMessage(p.defaultContinueWorkflowMessage)
                            },
                            cancel_button: {
                                text: i.formatMessage(p.defaultStopWorkflowMessage)
                            },
                            text: {
                                type: "simple",
                                value: (0, o(247438).x9d)(i.formatMessage(p.defaultConfirmationWorkflowText))
                            }
                        };
                        if ("define_variables" === t) {
                            let e = (0, o(698596).Ay)();
                            return {
                                values: {
                                    [e]: {
                                        name: (0, o(800056).v)(r.getActionStores(), i.formatMessage(o(901144).xC)),
                                        value: {
                                            type: "simple",
                                            value: [
                                                [""]
                                            ]
                                        }
                                    }
                                },
                                variableIds: [e]
                            }
                        }
                        if ("http_request" === t) return {
                            apiVersion: o(623644).h9
                        }
                    }({
                        actionType: c,
                        automationStore: n,
                        intl: l
                    }) ? ? {},
                    y = o(124937).eC({
                        environment: a,
                        inMemoryRecordCache: n.inMemoryRecordCache,
                        table: s().SC1,
                        transaction: u,
                        value: {
                            id: i,
                            type: c,
                            parent_id: n.id,
                            parent_table: s().yBS,
                            alive: !0,
                            space_id: h,
                            config: _,
                            blocks: t ? [t.id] : []
                        }
                    });
                return t && (0, o(135674).B)({
                    transaction: u,
                    parentStore: y.getKeyStore("blocks"),
                    appendStore: t
                }), !m || "afterActionId" in m ? (0, o(135674).B)({
                    transaction: u,
                    parentStore: n.getActionIdsStore(),
                    appendStore: y,
                    after: null == m ? void 0 : m.afterActionId
                }) : "beforeActionId" in m ? (0, o(181472).H)({
                    transaction: u,
                    parentStore: n.getActionIdsStore(),
                    prependStore: y,
                    before: m.beforeActionId
                }) : (0, d().HB)(m), S({
                    transaction: u,
                    automationStore: n
                }), (0, o(963328).CM)((e, t, r) => {
                    let i = (0, o(637286).Q)(a),
                        l = (0, o(963328).zc)({
                            automationActionStore: y,
                            formulaAnalyticsModule: t,
                            formulasModule: e,
                            simpleFormulasModule: r
                        });
                    (0, d().O9)(l) && (0, o(589563).dW)(i, {
                        automation_action: l,
                        automation_action_id: y.id,
                        automation_id: y.getParentId(),
                        builder_type: v
                    }), y.isDefined() && (0, o(589563).c_)(i, {
                        automation_action_id: y.id,
                        automation_action_type: y.getType(),
                        automation_id: n.id,
                        builder_type: v
                    })
                }), r()(y.isType(c), "Action type mismatch"), y
            }

            function f(e) {
                var t, r;
                let {
                    automationStore: i,
                    transaction: a
                } = e, l = i.getRecurrence();
                if (!l) return;
                let n = o(906745).DateTime.now().plus({
                        day: 1
                    }).startOf("day"),
                    s = { ...l,
                        start_date: n.toMillis(),
                        end_condition: (null == (t = l.end_condition) ? void 0 : t.type) === "date" ? {
                            type: "date",
                            end_at: (0, o(832248).yg)(n, l.start_date, null == (r = l.end_condition) ? void 0 : r.end_at).toMillis()
                        } : l.end_condition
                    };
                (0, o(173157).z)({
                    store: i,
                    transaction: a,
                    data: {
                        status: "active"
                    }
                }), (0, o(173157).z)({
                    store: i.getKeyStore("trigger"),
                    transaction: a,
                    data: {
                        recurrence: (0, o(832248).es)(s)
                    }
                })
            }

            function g(e) {
                let {
                    actorPointer: t,
                    environment: r,
                    includeParenting: i,
                    sourceAutomationStore: a,
                    targetAutomationId: l,
                    transaction: n
                } = e, c = a.getParentStore();
                if (!c || !c.isReady()) throw Error("Automation parent store not ready");
                let p = a.getValue(),
                    u = a.getSpaceId();
                if (!(0, d().O9)(p) || !(0, d().O9)(u)) throw Error("Undefined automation value or space id");
                let m = {},
                    f = { ...(0, o(381453).mg)(p),
                        id: l ? ? (0, o(295447).Z1)({
                            environment: r,
                            table: s().yBS,
                            spaceId: (0, o(226221).e)(u)
                        })
                    };
                m[a.id] = f.id, (0, d().O9)(f.action_ids) && (0, d().EI)(f.action_ids) && f.action_ids.forEach(e => m[e] = (0, o(295447).Z1)({
                    environment: r,
                    table: s().SC1,
                    spaceId: (0, o(226221).e)(u)
                }));
                let g = ({
                    requested: e
                }) => {
                    let t = m[e.id];
                    return (0, d().O9)(t) ? o(496282).L3.fromPointerLike({ ...e,
                        id: t
                    }) : e
                };
                (0, o(191731).i)({
                    actor: t,
                    duplicateRecord: f,
                    options: {},
                    mapper: g,
                    originalRecord: p
                });
                let h = o(124937).eC({
                    environment: r,
                    inMemoryRecordCache: a.inMemoryRecordCache,
                    table: s().yBS,
                    transaction: n,
                    value: f
                });
                i && o(579695).NI({
                    childStore: h,
                    parentStore: c,
                    transaction: n
                });
                let _ = Promise.all(a.getActionStores().map(e => {
                    let t = m[e.id],
                        {
                            automationActionStore: i,
                            onComplete: a
                        } = v({
                            environment: r,
                            includeParenting: !1,
                            mapper: g,
                            sourceActionStore: e,
                            targetAutomationActionId: t,
                            transaction: n
                        });
                    return o(579695).NI({
                        childStore: i,
                        parentStore: h,
                        transaction: n
                    }), a
                }));
                return {
                    automationStore: h,
                    onComplete: _.then(() => {})
                }
            }

            function v(e) {
                let {
                    environment: t,
                    includeParenting: r,
                    insertionPoint: a,
                    mapper: l,
                    sourceActionStore: n,
                    targetAutomationActionId: c,
                    transaction: p
                } = e, u = n.getParentStore();
                if (!u || !u.isReady()) throw Error("Automation store is not ready");
                let m = n.getValue(),
                    f = n.getSpaceId();
                if (!(0, d().O9)(m) || !(0, d().O9)(f)) throw Error("Undefined action value or space id");
                let g = { ...(0, o(381453).mg)(m),
                        id: c ? ? (0, o(295447).Z1)({
                            environment: t,
                            table: s().SC1,
                            spaceId: (0, o(226221).e)(f)
                        })
                    },
                    v = t.currentUser.id,
                    h = n.inMemoryRecordCache.makeGetRecordRoleFn(v);
                (0, o(333132).I)({
                    duplicateRecord: g,
                    getRecordRole: h,
                    originalRecord: m,
                    mapper: e => (null == l ? void 0 : l(e)) ? ? e.requested,
                    options: {},
                    originOptions: {
                        baseUrl: i().A.domainBaseUrl,
                        publicDomainName: i().A.publicDomainName
                    },
                    duplicateBlocks: !1,
                    experimentService: o(218744).default,
                    getExternalRecordValue: ({
                        pointer: e
                    }) => n.inMemoryRecordCache.getRecordModel({
                        pointer: e,
                        userId: v
                    })
                });
                let _ = o(124937).eC({
                    environment: t,
                    inMemoryRecordCache: n.inMemoryRecordCache,
                    table: s().SC1,
                    transaction: p,
                    value: g
                });
                r && (!a || "afterActionId" in a ? o(579695).NI({
                    after: null == a ? void 0 : a.afterActionId,
                    childStore: _,
                    parentStore: u,
                    transaction: p
                }) : "beforeActionId" in a ? o(579695).Ti({
                    before: null == a ? void 0 : a.beforeActionId,
                    childStore: _,
                    parentStore: u,
                    transaction: p
                }) : (0, d().HB)(a), S({
                    transaction: p,
                    automationStore: u
                }));
                let y = n.getBlockStores(),
                    w = y.length > 0 ? (0, o(918103).hh)({
                        environment: t,
                        sourceBlocks: y,
                        destination: {
                            type: "automation_action",
                            parent: _.pointer
                        },
                        from: "automation_action",
                        skipUserFacingMessages: !0,
                        options: {
                            addCopyName: !1,
                            allowRedundancy: !0,
                            deepCopyTransclusionContainers: !1,
                            resolveTemplateVariables: !1
                        },
                        duplicateSubtreeGateName: "duplicate_subtree_basic_flows"
                    }) : Promise.resolve(),
                    I = _.getModel();
                return (0, d().O9)(I) && (0, o(963328).CM)((e, r, i) => {
                    let a = (0, o(637286).Q)(t),
                        l = (0, o(963328).zc)({
                            automationActionStore: _,
                            formulaAnalyticsModule: r,
                            formulasModule: e,
                            simpleFormulasModule: i
                        });
                    (0, d().O9)(l) && (0, o(589563).dW)(a, {
                        automation_action: l,
                        automation_action_id: I.id,
                        automation_id: I.parent_id,
                        from: "duplicate"
                    }), (0, o(589563).c_)(a, {
                        automation_action_id: I.id,
                        automation_action_type: I.type,
                        automation_id: u.id,
                        from: "duplicate"
                    })
                }), {
                    automationActionStore: _,
                    onComplete: w.then(() => {})
                }
            }

            function h(e) {
                let {
                    automationStore: t,
                    automationTypecheckModule: r,
                    contextType: i,
                    environment: a,
                    formulasModule: l,
                    from: n,
                    intl: s,
                    subscriptionInfo: d,
                    movedActionId: c,
                    newActionIds: p,
                    transaction: u,
                    pageStore: m
                } = e;
                (0, o(173157).z)({
                    store: t,
                    transaction: u,
                    data: {
                        action_ids: p
                    }
                }), S({
                    automationStore: t,
                    transaction: u
                });
                let f = (0, o(100197).Z)({
                    environment: a,
                    automationStore: t,
                    automationTypecheckModule: r,
                    contextType: i,
                    formulasModule: l,
                    intl: s,
                    subscriptionInfo: d,
                    pageStore: m
                });
                w({
                    automationStore: t,
                    transaction: u,
                    typecheckResult: f
                }), (0, o(104310).u)({
                    event: {
                        eventName: "automation_action_move",
                        eventProperties: {
                            automation_id: t.id,
                            automation_action_id: c,
                            from: n
                        }
                    }
                })
            }

            function _(e) {
                let {
                    actionStore: t,
                    automationStore: r,
                    automationTypecheckModule: i,
                    contextType: a,
                    environment: l,
                    formulasModule: n,
                    intl: s,
                    subscriptionInfo: c,
                    transaction: p,
                    pageStore: u
                } = e, m = (0, o(100197).Z)({
                    environment: l,
                    automationStore: r,
                    automationTypecheckModule: i,
                    contextType: a,
                    formulasModule: n,
                    intl: s,
                    subscriptionInfo: c,
                    pageStore: u
                }), f = o(300441).Q.isSuccess(m) && m.value.actionValidationFailures[t.id] || [];
                (function(e) {
                    let {
                        automationActionStore: t,
                        automationStore: r,
                        environment: i,
                        transaction: a,
                        hasError: l = !1
                    } = e, n = t.getParentStore();
                    if ((0, d().O9)(r)) {
                        let e = t.getParentPointer();
                        if (!(0, d().O9)(e)) throw Error("Automation action does not have a parent pointer");
                        if (!o(496282).L3.isEqual(e, r.pointer)) throw Error(`Automation action parent pointer does not match argument: ${o(496282).L3.toKey(e)}, ${o(496282).L3.toKey(r.pointer)}`);
                        n = r
                    } else if (!(0, d().O9)(n)) throw Error("Automation store is undefined");
                    o(579695).zz({
                        childStore: t,
                        parentStore: n,
                        transaction: a
                    });
                    let s = t.getModel();
                    (0, d().O9)(s) && (0, o(963328).CM)((e, r, a) => {
                        let c = (0, o(637286).Q)(i),
                            p = (0, o(963328).zc)({
                                automationActionStore: t,
                                formulaAnalyticsModule: r,
                                formulasModule: e,
                                simpleFormulasModule: a
                            });
                        (0, d().O9)(p) && (0, o(589563).YO)(c, {
                            automation_action: p,
                            automation_action_id: s.id,
                            automation_id: s.parent_id,
                            has_error: l
                        }), (0, o(589563).gW)(c, {
                            automation_action_id: s.id,
                            automation_action_type: s.type,
                            automation_id: n.id,
                            has_error: l
                        })
                    })
                })({
                    automationActionStore: t,
                    environment: l,
                    transaction: p,
                    hasError: f.length > 0
                }), w({
                    automationStore: r,
                    transaction: p,
                    typecheckResult: m
                })
            }

            function y(e) {
                let {
                    environment: t,
                    automationStore: r,
                    automationTypecheckModule: i,
                    contextType: a,
                    formulasModule: l,
                    intl: n,
                    subscriptionInfo: s,
                    transaction: d,
                    pageStore: c
                } = e, p = (0, o(100197).Z)({
                    environment: t,
                    automationStore: r,
                    automationTypecheckModule: i,
                    contextType: a,
                    formulasModule: l,
                    intl: n,
                    subscriptionInfo: s,
                    pageStore: c
                });
                w({
                    automationStore: r,
                    transaction: d,
                    typecheckResult: p
                })
            }

            function S(e) {
                let {
                    automationStore: t,
                    transaction: r
                } = e;
                t.getSpaceId() && t.getActionStores().forEach((e, t) => {
                    var i;
                    if (!e.isDefined()) return;
                    let a = e.getModel();
                    a.isType("open_page") && (null == (i = a.getConfig()) || null == (i = i.target) ? void 0 : i.type) === "url" && !(0, o(976298).cQ)(t) && (0, o(173157).z)({
                        store: e.getConfigStore(),
                        transaction: r,
                        data: {
                            target: null
                        }
                    })
                })
            }

            function w(e) {
                let {
                    automationStore: t,
                    transaction: r,
                    typecheckResult: p
                } = e, u = t.getSpaceId(), m = t.getModel();
                if (u && m && !o(300441).Q.isFail(p))
                    for (let e of m.getActionIds()) {
                        let o = t.getRecordStore(t, {
                            table: s().SC1,
                            id: e,
                            spaceId: u
                        });
                        if (!o.isDefined()) continue;
                        let m = o.getModel(),
                            f = new Set(p.value.actionInputValueTypes[e].map(e => {
                                if (e.kind === l().FormulaContextValueKind.Binding || e.kind === l().FormulaContextValueKind.ContextValue) return e.id;
                                e.kind === l().FormulaContextValueKind.ThisRow || (0, d().HB)(e)
                            }).filter(d().O9)),
                            {
                                value: g
                            } = (0, a().G)({
                                automationActionModel: m,
                                baseUrl: i().A.domainBaseUrl,
                                preventClearingConfig: !0,
                                publicDomainName: i().A.publicDomainName,
                                sourceSpaceId: u,
                                visitors: {
                                    visitCollectionProperty: void 0,
                                    visitCollectionPropertyPointer: void 0,
                                    visitFormulaContextValue: e => f.has(e) ? {
                                        type: "keep"
                                    } : {
                                        type: "replace",
                                        value: void 0
                                    },
                                    visitFormulaPageProperty: void 0,
                                    visitRecordPointer: void 0
                                }
                            }),
                            v = n().op.update({
                                pointer: o.pointer,
                                path: ["config"],
                                args: g.getConfig() ? ? {}
                            });
                        (0, c().y4)({
                            store: o,
                            operation: v,
                            transaction: r
                        })
                    }
            }

            function I(e) {
                let {
                    environment: t,
                    contentStore: r,
                    transaction: i
                } = e, a = o(124937).Wv({
                    environment: t,
                    type: "text",
                    inMemoryRecordCache: r.inMemoryRecordCache,
                    transaction: i,
                    spaceId: r.pointer.spaceId
                });
                return (0, o(135674).B)({
                    parentStore: r,
                    appendStore: a,
                    transaction: i
                }).childStore
            }

            function b(e) {
                let {
                    automationStore: t,
                    environment: r,
                    transaction: i
                } = e;
                (0, o(173157).z)({
                    store: t,
                    data: {
                        status: "active"
                    },
                    transaction: i
                });
                let a = t.getModel();
                (0, d().O9)(a) && (0, o(963328).CM)((e, i, l) => {
                    let n = (0, o(605263).To)(t),
                        s = [];
                    n && o(300441).Q.isSuccess(n) && (s = n.value.valueTypes);
                    let d = (0, o(637286).Q)(r),
                        c = (0, o(589563).sp)({
                            automationModel: a,
                            formulaAnalyticsModule: i,
                            formulasModule: e,
                            formulaTypecheckContextValues: s,
                            getRecordModel: t.getRecordModel,
                            featureGates: (0, o(457103).i)(),
                            simpleFormulasModule: l
                        });
                    (0, o(589563).Ah)(d, c)
                })
            }

            function T(e) {
                let {
                    automationStore: t,
                    environment: r,
                    status: i,
                    transaction: a
                } = e;
                (0, o(173157).z)({
                    store: t,
                    data: {
                        status: i ? ? "disabled"
                    },
                    transaction: a
                }), t.isTriggerType("recurrence") && (0, o(173157).z)({
                    store: t,
                    data: {
                        run_at: void 0
                    },
                    transaction: a
                });
                let l = t.getModel();
                (0, d().O9)(l) && (0, o(963328).CM)((e, i, a) => {
                    let n = (0, o(605263).To)(t),
                        s = [];
                    n && o(300441).Q.isSuccess(n) && (s = n.value.valueTypes);
                    let d = (0, o(637286).Q)(r),
                        c = (0, o(589563).sp)({
                            automationModel: l,
                            formulaAnalyticsModule: i,
                            formulasModule: e,
                            formulaTypecheckContextValues: s,
                            getRecordModel: t.getRecordModel,
                            featureGates: (0, o(457103).i)(),
                            simpleFormulasModule: a
                        });
                    (0, o(589563).vN)(d, c)
                })
            }

            function C(e) {
                let {
                    automationStore: t,
                    environment: r,
                    transaction: i
                } = e;
                (0, o(173157).z)({
                    store: t,
                    data: {
                        alive: !1
                    },
                    transaction: i
                });
                let a = t.getModel();
                (0, d().O9)(a) && (0, o(963328).CM)((e, i, l) => {
                    let n = (0, o(605263).To)(t),
                        s = [];
                    n && o(300441).Q.isSuccess(n) && (s = n.value.valueTypes);
                    let d = (0, o(637286).Q)(r),
                        c = (0, o(589563).sp)({
                            automationModel: a,
                            formulaAnalyticsModule: i,
                            formulasModule: e,
                            formulaTypecheckContextValues: s,
                            getRecordModel: t.getRecordModel,
                            featureGates: (0, o(457103).i)(),
                            simpleFormulasModule: l
                        });
                    (0, o(589563).Iv)(d, c)
                })
            }
        },
        963328: (e, t, o) => {
            o.d(t, {
                zc: () => i,
                CM: () => l,
                UB: () => a
            }), o(898992), o(354520), o(581454);
            let r = {};

            function i(e) {
                let {
                    automationActionStore: t,
                    automationStore: r,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    simpleFormulasModule: l
                } = e, n = t.getModel(), s = r ? ? t.getParentStore();
                if (!n || !s) return;
                let d = s.getActionStores().map(e => e.getModel()).filter(o(722371).O9),
                    c = (0, o(605263).To)(s),
                    p = [];
                return c && o(300441).Q.isSuccess(c) && (p = c.value.valueTypes), (0, o(589563)._f)({
                    automationActionModel: n,
                    automationActionModels: d,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    simpleFormulasModule: l,
                    formulaTypecheckContextValues: p,
                    getRecordModel: t.getRecordModel,
                    featureGates: (0, o(457103).i)()
                })
            }

            function a(e, t) {
                let {
                    automationStore: a,
                    automationActionStore: n
                } = t;
                a.isTriggerType("event") || l((e, t, l) => {
                    let s = i({
                        automationActionStore: n,
                        automationStore: a,
                        formulaAnalyticsModule: t,
                        formulasModule: e,
                        simpleFormulasModule: l
                    });
                    s && function({
                        eventName: e,
                        key: t,
                        debounceSeconds: i,
                        eventProperties: a,
                        opts: l
                    }) {
                        let n = r[t];
                        n && (clearTimeout(n), delete r[t]), r[t] = setTimeout(() => {
                            delete r[t], (0, o(195857).DO_NOT_USE_trackLegacy)(e, a, l)
                        }, 1e3 * i)
                    }({
                        eventName: "automation_action_update",
                        key: n.id,
                        debounceSeconds: 1,
                        eventProperties: {
                            automation_action: s,
                            automation_action_id: n.id,
                            automation_id: a.id
                        }
                    })
                })
            }

            function l(e) {
                return Promise.all([o(864850).T.formulas.load(), o(864850).T.formulaAnalytics.load(), o(864850).T.simpleFormulas.load()]).then(([t, o, r]) => {
                    e(t, o, r)
                }).catch(e => {
                    console.error("Error sending analytics for automations", e)
                })
            }
        }
    }
]);