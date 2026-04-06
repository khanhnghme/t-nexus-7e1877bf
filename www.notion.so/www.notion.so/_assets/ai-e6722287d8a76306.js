"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5053, 32626, 88980, 92754], {
        1249: (e, t, r) => {
            r.d(t, {
                g: () => n
            });

            function n(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        58931: (e, t, r) => {
            r.d(t, {
                HR: () => o,
                _y: () => i
            });
            let n = (0, r(109939).YK)({
                discardCommentConfirmationPrompt: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.prompt",
                    defaultMessage: "Do you want to discard the comment?"
                },
                discardCommentButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label",
                    defaultMessage: "Discard"
                },
                draftCommentConfirmationPromptTitle: {
                    id: "newDiscussionMenu.draftCommentConfirmationDialogTitle.prompt",
                    defaultMessage: "Finish your draft comment?"
                },
                draftCommentConfirmationStartingNewDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationStartingNewDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you start a new one"
                },
                draftCommentConfirmationNavigateAwayPromptDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationNavigateAwayPromptDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you leave the page"
                },
                returnToPageButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.returnToPage.label",
                    defaultMessage: "Return to draft"
                }
            });

            function o(e) {
                let {
                    discussionInputStore: t,
                    environment: o,
                    discussionHelpers: a,
                    reason: l
                } = e;
                r(332190).A.isComposingNewDiscussion() ? i({
                    environment: o,
                    reason: l ? ? "navigating_away"
                }) : a.hasCommentChanged(t) ? (r(65255).yO(o), r(647095).ui({
                    message: r(962299).A.formatMessage(n.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => r(65255).Ie(o),
                    keepFocus: !0,
                    items: [{
                        label: r(962299).A.formatMessage(n.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            r(65255).QP(o), (0, r(585356).c)()
                        }
                    }]
                })) : (0, r(585356).c)()
            }

            function i(e) {
                let {
                    environment: t
                } = e;
                if (!r(332190).A.isDraftCommentOnValidSelection()) return;
                let o = r(332190).A.getDiscussionInputStore();
                r(65255).yO(t), r(647095).ui({
                    message: r(962299).A.formatMessage(n.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return r(962299).A.formatMessage(n.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return r(962299).A.formatMessage(n.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, r(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: r(962299).A.formatMessage(n.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, r(758275).x)({
                                currentBlockStore: r(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: o,
                                environment: t
                            }), r(65255).Ie(t)
                        }
                    }, {
                        label: r(962299).A.formatMessage(n.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            r(65255).QP(t), (0, r(585356).c)()
                        }
                    }]
                })
            }
        },
        72762: (e, t, r) => {
            r.d(t, {
                o: () => n
            });

            function n(e) {
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
        85071: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => n,
                integrationIcon: () => o
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                o = (0, r(104509).wt)("integration", n, "default")
        },
        187649: (e, t, r) => {
            let n, o;

            function i(e) {
                n = e
            }
            async function a() {
                return o || (n ? o = await n() : void 0)
            }
            r.d(t, {
                Q: () => i,
                z: () => a
            })
        },
        199894: (e, t, r) => {
            r.d(t, {
                t: () => n
            }), r(16280), r(898992), r(672577), r(581454);

            function n(e) {
                let {
                    environment: t,
                    selection: n,
                    transaction: o,
                    preventSetSelection: i
                } = e, {
                    blocks: a
                } = e, l = (0, r(385941).Z)();
                if (!l) throw Error("No root store.");
                if (n.length > 0) {
                    let e = n[0],
                        l = r(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = l.props.onInsertAbove({
                        insertStores: a,
                        transaction: o
                    });
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = l.getContentStore(),
                        n = a.map(t => (0, r(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: o
                        }).childStore);
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: n
                    }), n
                }
            }
        },
        200424: (e, t, r) => {
            e.exports = r.p + "9ade71d75a1c0e93.png"
        },
        245102: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowLineDownIcon: () => o,
                iconDefinition: () => n
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                o = (0, r(104509).wt)("arrowLineDown", n, "default")
        },
        250943: (e, t, r) => {
            r.d(t, {
                E: () => n
            }), r(581454);

            function n(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, r(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let n = (0, r(247438).RQ)(e.getValue()),
                        o = (0, r(247438).xbM)(n, t),
                        {
                            tokensInsideRange: i
                        } = (0, r(247438).AI5)(n, o.startIndex, o.endIndex);
                    return (0, r(536614).r4)(i, e)
                }).join("\n\n")
            }
        },
        322095: (e, t, r) => {
            function n(e, t) {
                return e.map(e => o(e, t))
            }

            function o(e, t) {
                var n, o;
                let i, {
                        nameMessage: a,
                        descriptionMessage: l,
                        ...s
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (n = e, o = t, i = (0, r(599412).H)(o), n.sources[i] || n.sources[r(599412).q]);
                return { ...s,
                    id: a.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(a),
                    description: l ? t.formatMessage(l) : void 0
                }
            }
            r.d(t, {
                B: () => o,
                o: () => n
            }), r(581454)
        },
        425749: (e, t, r) => {
            r.d(t, {
                I$: () => a,
                R2: () => d,
                WF: () => s,
                bZ: () => l,
                cE: () => o,
                jX: () => i,
                rz: () => c
            });
            var n = () => r(381453);

            function o(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function a(e) {
                return !!(void 0 !== e && (0, r(722371).Xk)(i, e))
            }

            function l() {
                let e = (0, r(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: r(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, r(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        445283: (e, t, r) => {
            r.d(t, {
                N: () => n
            });

            function n(e) {
                if ("avatar" === e) return r(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, r(722371).HB)(e)
            }
        },
        478597: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var n = () => r(546605);
            class o extends n().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(r(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(r(517013)).pm({
                            environment: this.environment,
                            pointer: (0, r(295447).zP)({
                                environment: this.environment,
                                table: r(832375).SNf,
                                spaceId: this.spaceId
                            }),
                            path: ["text"],
                            recordStoreOptions: {
                                inMemoryRecordCache: e
                            }
                        }),
                        localRecordCache: e,
                        files: [],
                        showAttachFileIntro: !1,
                        renderFileAttachIntro: !1
                    }
                }
                isEmpty() {
                    let e = this.state.textStore.getValue();
                    return !e || 0 === e.length
                }
                hasNewLineCharacter() {
                    let e = this.state.textStore.getValue();
                    return r(247438).q4_(e).includes("\n")
                }
            }
            let i = o
        },
        487016: (e, t, r) => {
            r.d(t, {
                Bi: () => l,
                My: () => a,
                ZM: () => d,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(581454);
            var n = () => r(388507),
                o = () => r(715144),
                i = () => r(717673);

            function a({
                transaction: e,
                collectionStore: t,
                propertyTemplates: r
            }) {
                var l, s;
                let d = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of r) {
                    let r = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    r && c.push({
                        property: r.id,
                        visible: !(0, n().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let r = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            n = new Set(r.map(e => e.property)),
                            i = c.filter(e => !n.has(e.property));
                        0 !== i.length && (0, o().z)({
                            stores: [t],
                            update: {
                                table_properties: [...r, ...i]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: r
            }) {
                let n = [];
                for (let e of r) {
                    let r = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    r && n.push({
                        property: r.id,
                        visible: !0
                    })
                }
                let a = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(a.map(e => e.property)),
                    d = n.filter(e => !s.has(e.property));
                d.length && (0, o().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...a, ...d]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: n
            }) {
                if ("accepted_template" === n.type || "accepted_empty_collection" === n.type) {
                    let o = t.getSpaceId();
                    (0, r(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: o => {
                            let i = t.getTitleValue();
                            if ((0, r(173157).z)({
                                    store: t,
                                    transaction: o,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === n.type && !(0, r(247438).w9s)(i)) {
                                let a = r(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: n.blockId
                                }).getTitleStore();
                                a && r(41403).yr({
                                    environment: e,
                                    transaction: o,
                                    tokens: i,
                                    index: 0,
                                    store: a
                                })
                            }
                            let a = t.getParentStore();
                            if ((null == a ? void 0 : a.table) === r(682956).ev) {
                                let e = a.getContentIds();
                                (0, r(173157).z)({
                                    store: a,
                                    transaction: o,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: n,
                existingCollectionViewBlockStore: o,
                existingCollectionStore: i
            }) {
                if ("canceled" !== n.type) {
                    if ("accepted_empty_collection" === n.type && i) {
                        let o = i.getKeyStore("name"),
                            a = (0, r(247438).x9d)(n.newCollectionTitle);
                        if (o) {
                            let n = i.getSpaceId();
                            (0, r(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                perform: t => r(41403).R9({
                                    environment: e,
                                    store: o,
                                    transaction: t,
                                    value: a
                                })
                            })
                        }
                    }
                    if (o) {
                        var a;
                        let e = null == (a = (0, r(444610).U)(o)) ? void 0 : a.settingsStore;
                        e && (0, r(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === n.type && null != o && o.isCollectionView() && !(null != o && o.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, r(444610).U)(o),
                            i = o.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === n.collectionId
                            });
                        if (!t || !i) return;
                        (0, r(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: i.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let n = t.id;
                if (!t.isDefined()) {
                    let o = await (0, r(389323).$)({
                        environment: e,
                        blockId: n
                    });
                    if (!o) return;
                    e = await r(274662).T({
                        environment: e,
                        newCurrentUserId: o
                    }), t = new(r(970831)).B(e, {
                        table: r(682956).ev,
                        id: n
                    }), await t.load()
                }
                let o = t.getSpaceId();
                if (!o) throw Error("Space ID not found for collection block");
                let i = (0, r(593303).k)(o);
                if (!i) throw Error(`Space view not found for space ID: ${o}`);
                let a = r(728372).AppStoreSidebarSpaceStore.state;
                (null == a ? void 0 : a.id) !== o && await (0, r(269948).y)({
                    environment: e,
                    spaceViewStore: i
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: n
                    } = await r(708370).t.load(), o = n(l.placeholder_workflow_template_id);
                    if (!o) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: i
                    } = await r(903673).O.load();
                    i({
                        environment: e,
                        collectionTemplate: o,
                        collectionViewBlockStore: t
                    })
                } else(0, r(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: r(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        587832: (e, t, r) => {
            async function n(e) {
                let {
                    index: t
                } = await (0, r(901282).Fr)(), n = e.map(e => {
                    var t;
                    let n = null == (t = e.getPublishedArtifactStore()) ? void 0 : t.getData(),
                        i = e.getDraftData(),
                        a = n ? ? i;
                    return {
                        id: e.id,
                        text: o(e),
                        inits: (0, r(168534).IM)((null == a ? void 0 : a.name) || ""),
                        block: e
                    }
                });
                return await t.addAllAsync(n), t
            }

            function o(e) {
                return e.getName() ? ? ""
            }

            function i(e) {
                let {
                    query: t,
                    workflowStores: n,
                    limit: o = 10
                } = e;
                return t && 0 !== t.trim().length ? (0, r(821048).Ay)(t, n, e => e.getName() ? ? "", {
                    normalizeFuzzyScore: !0
                }).slice(0, o) : n.slice(0, o)
            }

            function a(e) {
                let {
                    query: t,
                    agentIndex: r,
                    limit: n = 100
                } = e;
                return t && 0 !== t.trim().length ? r.search(t, {
                    prefix: !0,
                    fields: ["text", "inits"]
                }).slice(0, n).map(e => e.block) : []
            }
            r.r(t), r.d(t, {
                createCustomAgentSearchIndex: () => n,
                getWorkflowSearchText: () => o,
                searchWorkflowStores: () => i,
                searchWorkflowStoresWithMinisearchIndex: () => a
            }), r(581454)
        },
        685745: (e, t, r) => {
            r.d(t, {
                B: () => a
            });
            var n = () => r(129499),
                o = () => r(955630);

            function i(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && r(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== o().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function a(e) {
                let t, o = i(e);
                if (!o) return;
                let a = i([...e].reverse());
                if (!a) return;
                let l = (0, r(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: o.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!l) return;
                let s = (0, r(787926).mP)(a.blockStore, l);
                if (s) {
                    for (let e of (0, r(827049).Y_)(s)) {
                        let r = e.value.store.getTitleStore();
                        if (r) {
                            let e = (0, n().s)(r);
                            e && (t = {
                                store: r,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: o.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        691636: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = r(546605).Store.createValue({
                open: !1
            }, {
                name: "ConfirmOverwriteModalStore"
            })
        },
        726342: (e, t, r) => {
            r.d(t, {
                u: () => n
            });

            function n(e) {
                return e instanceof r(681735).h || e instanceof r(695906).SpaceStore || e instanceof r(970831).B
            }
        },
        805148: (e, t, r) => {
            r.d(t, {
                p: () => i
            }), r(16280), r(944114);
            var n = () => r(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        indexBySpaceId: new Map,
                        refreshTokensBySpaceId: new Map
                    }
                }
                getIndex(e) {
                    return this.state.indexBySpaceId.get(e)
                }
                refresh(e) {
                    let {
                        spaceId: t,
                        agents: r
                    } = e, n = (this.state.refreshTokensBySpaceId.get(t) ? ? 0) + 1, o = new Map(this.state.refreshTokensBySpaceId);
                    o.set(t, n), this.setState({ ...this.state,
                        refreshTokensBySpaceId: o
                    }), this.buildIndex({
                        spaceId: t,
                        agents: r,
                        token: n
                    })
                }
                async buildIndex(e) {
                    let {
                        spaceId: t,
                        agents: n,
                        token: o
                    } = e;
                    try {
                        let e = [];
                        await (0, r(975162).lX)(n, 5, async o => {
                            try {
                                await o.load({
                                    timeout: 5e3
                                }), e.push(o)
                            } catch (e) {
                                var i;
                                if ((i = e) instanceof Error && "Timeout" === i.message) return void r(773352).log({
                                    level: "warning",
                                    from: "WorkflowSearchIndexStore",
                                    type: "agentStoreReadyTimeout",
                                    spaceId: t,
                                    error: (0, r(416607).convertErrorToLog)(e),
                                    data: {
                                        workflowId: o.id,
                                        timeoutMs: 5e3,
                                        agentCount: n.length
                                    }
                                });
                                r(419750).O8(e, {
                                    from: "WorkflowSearchIndexStore",
                                    type: "agentStoreLoadError",
                                    data: {
                                        miscDataToConvertToString: {
                                            workflowId: o.id,
                                            spaceId: t
                                        }
                                    }
                                })
                            }
                        });
                        let i = (0, r(381453).oE)(e.map(e => {
                                if (e.getData() ? ? e.getDraftData()) return e
                            })),
                            a = await (0, r(587832).createCustomAgentSearchIndex)(i);
                        if (this.state.refreshTokensBySpaceId.get(t) !== o) return;
                        let l = new Map(this.state.indexBySpaceId);
                        l.set(t, a), this.setState({ ...this.state,
                            indexBySpaceId: l
                        })
                    } catch (e) {
                        r(419750).O8(e, {
                            from: "WorkflowSearchIndexStore",
                            type: "indexBuildError"
                        })
                    }
                }
            }
            let i = new o
        },
        808315: (e, t, r) => {
            r.d(t, {
                U: () => o
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var n = r(296540);

            function o(e) {
                let {
                    eventKey: t,
                    spaceId: o,
                    onRefetch: i,
                    deferForHiddenTabs: a = !0
                } = e, l = (0, n.useRef)(i);
                l.current = i;
                let s = (0, n.useRef)(null),
                    d = (0, n.useRef)(null),
                    c = (0, n.useRef)(!1),
                    u = (0, n.useRef)(null),
                    f = (0, n.useCallback)(e => () => {
                        let r = s.current ? ? "all";
                        s.current = null, u.current = null, l.current({
                            idsToRefetch: r,
                            spaceId: e,
                            fromMessageStoreKey: t
                        })
                    }, [t]),
                    p = (0, n.useCallback)(() => {
                        u.current && (clearTimeout(u.current), u.current = null)
                    }, []),
                    m = (0, n.useCallback)(({
                        value: e,
                        passThroughData: t
                    }) => {
                        let n = c.current,
                            i = d.current;
                        if (d.current = e, c.current = !0, !o) return;
                        let l = !n;
                        if (l || e !== i) {
                            if (l || "all" === s.current || !Array.isArray(t)) s.current = "all";
                            else
                                for (let e of (null === s.current && (s.current = new Set), t)) s.current.add(e);
                            p(), (!a || r(825244).A.state.isVisible) && (u.current = setTimeout(f(o), 100))
                        }
                    }, [o, a, f, p]);
                (0, n.useEffect)(() => {
                    if (!t || !o) return;
                    let e = r(48091).Ay.addListener({
                        key: t,
                        authorizationToken: void 0,
                        listener: m,
                        subscriptionId: void 0
                    });
                    return function() {
                        p(), e && r(48091).Ay.removeListener(e)
                    }
                }, [t, o, m, p]);
                let g = (0, r(682985).K8)(() => r(825244).A.state.isVisible, []),
                    h = (0, n.useRef)(g);
                (0, n.useEffect)(() => {
                    if (!o || !t) return;
                    let e = g && !h.current;
                    h.current = g, e && a && null !== s.current && (p(), f(o)())
                }, [o, t, g, a, f, p]), (0, n.useEffect)(() => {
                    p(), s.current = null, d.current = null, c.current = !1
                }, [t, o, p])
            }
        },
        828294: (e, t, r) => {
            function n(e) {
                let t = (0, r(83208).X)(e);
                return "on" === (0, r(604306).r)("agent_writer_custom_skills") || t
            }

            function o(e) {
                return "on" === r(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || r(218744).default.checkGate({
                    gateName: e
                })
            }
            r.d(t, {
                N: () => n,
                a: () => o
            })
        },
        937776: (e, t, r) => {
            r.d(t, {
                B: () => i
            }), r(296540);
            var n = r(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, n.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, r(104509).wt)("archiveBox", o, "default")
        },
        954720: (e, t, r) => {
            r.r(t), r.d(t, {
                AllAgentsStoreListener: () => o
            });
            var n = r(296540);

            function o() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(723240).r)(),
                    o = (0, n.useCallback)(async t => {
                        let {
                            idsToRefetch: n,
                            spaceId: o
                        } = t;
                        if ("all" === n) return;
                        let i = Array.from(n);
                        await (0, r(975162).lX)(i, 5, async t => {
                            try {
                                await (0, r(192883).s)({
                                    environment: e,
                                    inMemoryRecordCache: e.defaultRecordCache.inMemoryRecordCache,
                                    pointer: {
                                        table: r(832375).C0E,
                                        id: t,
                                        spaceId: o
                                    },
                                    userId: e.currentUser.id,
                                    isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                                })
                            } catch (e) {
                                (0, r(222024).t)().error({
                                    type: "error",
                                    from: "AllAgentsStoreListener",
                                    error: e,
                                    data: {
                                        spaceId: o,
                                        workflowId: t
                                    }
                                })
                            }
                        });
                        let a = r(203462).g_.addWorkflowIds({
                            environment: e,
                            spaceId: o,
                            workflowIds: i
                        });
                        a && r(805148).p.refresh({
                            spaceId: o,
                            agents: a
                        })
                    }, [e]);
                return (0, r(808315).U)({
                    eventKey: t ? (0, r(568479).o1)({
                        spaceId: t
                    }) : void 0,
                    spaceId: t,
                    onRefetch: o,
                    deferForHiddenTabs: !0
                }), null
            }
        },
        984583: (e, t, r) => {
            r.d(t, {
                VY: () => l,
                ZJ: () => i,
                u3: () => a
            });
            var n = () => r(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        popupRenderedInPage: !1,
                        popupRenderedInPeekView: !1
                    }
                }
            }
            let i = new o,
                a = new(r(345426)).ComputedStore(() => !1 !== i.state.popupRenderedInPage, {
                    debugName: "AssistantWriterRenderedInPageStore"
                }),
                l = new(r(345426)).ComputedStore(() => !1 !== i.state.popupRenderedInPeekView, {
                    debugName: "AssistantWriterRenderedInPeekViewStore"
                })
        }
    }
]);