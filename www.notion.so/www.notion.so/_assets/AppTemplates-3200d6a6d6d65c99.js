"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [1392, 21475, 23644, 31517, 32626, 89563], {
        1249: (e, t, i) => {
            i.d(t, {
                g: () => o
            });

            function o(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        33529: (e, t, i) => {
            i.d(t, {
                y: () => o
            }), i(898992), i(672577);

            function o(e) {
                var t;
                let {
                    actionModels: o,
                    id: a
                } = e, r = (0, i(297493).y5)(a), n = "action" === r.source ? o.find(e => e.id === r.action_id) : void 0;
                return {
                    automationValueInfo: r,
                    collectionPointer: (0, i(722371).O9)(n) && n.isType("create_page") ? null == (t = n.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: n
                }
            }
        },
        33918: (e, t, i) => {
            i.d(t, {
                G: () => o
            });

            function o(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        54647: (e, t, i) => {
            async function o(e) {
                let t, {
                    type: o,
                    spaceStore: n,
                    initializeStore: l,
                    teamStore: s
                } = e;
                if ("inExistingStore" === o) {
                    let o = l.isEmptyPage(),
                        r = l.getParentStore();
                    if (await l.waitUntil(() => l.isDefined()), o && r && r.canEdit() && ("block" === r.table || "space" === r.table || "team" === r.table)) return a({ ...e,
                        destination: (0, i(208322).LT)(r)
                    });
                    t = (0, i(208322).LT)(l)
                } else "inTeam" === o ? t = (0, i(208322).LT)(s) : "inSpace" === o ? t = (0, i(208322).LT)(n) : (0, i(722371).HB)(o);
                return r({ ...e,
                    destination: t
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    item: o,
                    spaceStore: a,
                    initializeStore: n
                } = e, l = await r(e);
                try {
                    return await (0, i(377796).createAndCommit)({
                        userAction: "createTemplateInstance.deleteCurrentPageStore",
                        environment: t,
                        cellTarget: {
                            spaceWithId: a.id
                        },
                        canUndo: !0,
                        perform: e => {
                            i(51932).oD({
                                environment: t,
                                blocks: [n],
                                transaction: e,
                                permanentlyDelete: !0
                            })
                        }
                    }).serverCommitResult, l
                } catch (e) {
                    e instanceof Error && i(773352).log({
                        level: "error",
                        from: "createTemplateInstance",
                        type: "deleteCurrentPageStoreError",
                        error: e,
                        data: {
                            miscDataToConvertToString: {
                                template_id: o.id,
                                template_block_id: o.rootId,
                                target_space_id: a.id,
                                public_template_name: o.name
                            }
                        }
                    })
                }
            }
            async function r(e) {
                var t;
                let o, {
                        environment: a,
                        item: r,
                        useRecordCache: l,
                        useMinimalTemplates: s,
                        spaceStore: c,
                        from: d,
                        isEmailShared: p,
                        destination: u
                    } = e,
                    m = l && !s ? r.previewRootId : r.rootId,
                    g = {
                        id: m,
                        spaceId: r.spaceId
                    },
                    f = new(i(970831)).B(a, {
                        table: i(832375).evP,
                        id: g.id,
                        spaceId: g.spaceId
                    });
                "onboarding" === d ? o = "onboarding" : "page_template_modal" === d ? o = "mobile_app" : "homepage_team" === d ? o = "team_home" : (0, i(722371).HB)(d);
                let y = await n({
                        environment: a,
                        templateSource: o,
                        sourceBlockId: m,
                        isEmailShared: p
                    }),
                    v = "onboarding" === o,
                    _ = "mobile_app" === y.source ? await (0, i(918103)._3)({
                        environment: a,
                        sourceTemplateBlockStore: f,
                        templateId: null == (t = r.marketplaceTemplateMetadata) ? void 0 : t.templateId,
                        destination: u,
                        options: {
                            duplicateOnlyCollectionSchema: !1,
                            deepCopyTransclusionContainers: !0,
                            resolveTemplateVariables: !0
                        },
                        templateInstallationMetadata: { ...y,
                            source: "mobile_app"
                        },
                        from: d
                    }) : await (0, i(918103).hh)({
                        environment: a,
                        sourceBlocks: [f],
                        destination: u,
                        options: {
                            duplicateOnlyCollectionSchema: !1,
                            deepCopyTransclusionContainers: !0,
                            resolveTemplateVariables: !0
                        },
                        duplicateSubtreeGateName: "duplicate_subtree_template_flows",
                        unlockPage: !0,
                        templateInstallationMetadata: y,
                        shouldUseSynchronousDuplicationAPI: v,
                        from: d,
                        skipUserFacingMessages: !0
                    });
                return !_ || i(300441).Q.isFail(_) || 0 === _.value.createdBlocks.length ? void i(773352).log({
                    level: "error",
                    from: "createTemplateInstance",
                    type: "duplicateTemplateError",
                    error: null != _ && _.error ? _.error : Error("No response"),
                    data: {
                        miscDataToConvertToString: {
                            template_id: r.id,
                            template_block_id: r.rootId,
                            target_space_id: c.id,
                            public_template_name: r.name,
                            from: d
                        }
                    }
                }) : _.value.createdBlocks[0]
            }
            async function n(e) {
                let {
                    environment: t,
                    templateSource: o,
                    sourceBlockId: a,
                    isEmailShared: r
                } = e, n = await (0, i(887527).oC)(t, a);
                return {
                    context: "",
                    source: o,
                    isListedTemplate: !!n,
                    isFirstPartyPaidTemplate: void 0 !== n && (0, i(873144).Z1)(n),
                    isEmailShared: r
                }
            }
            i.d(t, {
                o: () => o
            }), i(16280)
        },
        72762: (e, t, i) => {
            i.d(t, {
                o: () => o
            });

            function o(e) {
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
                }), i(639675).Ay.setState({ ...i(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        83429: (e, t, i) => {
            i.d(t, {
                _: () => r
            });
            let o = (0, i(109939).YK)({
                table: {
                    defaultMessage: "Table",
                    id: "templatePickerHelpers.databaseTemplateNames.table"
                },
                board: {
                    defaultMessage: "Board",
                    id: "templatePickerHelpers.databaseTemplateNames.board"
                },
                list: {
                    defaultMessage: "List",
                    id: "templatePickerHelpers.databaseTemplateNames.list"
                },
                calendar: {
                    defaultMessage: "Calendar",
                    id: "templatePickerHelpers.databaseTemplateNames.calendar"
                },
                gallery: {
                    defaultMessage: "Gallery",
                    id: "templatePickerHelpers.databaseTemplateNames.gallery"
                },
                timeline: {
                    defaultMessage: "Timeline",
                    id: "templatePickerHelpers.databaseTemplateNames.timeline"
                }
            });

            function a(e) {
                let {
                    environment: t,
                    store: o,
                    viewType: a
                } = e, r = o.getSpaceId();
                (0, i(377796).createAndCommit)({
                    userAction: "templatePickerHelpers.handleClickForViewType",
                    environment: t,
                    canUndo: !0,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    perform: r => {
                        "chart" === a ? (0, i(493526).c)({
                            environment: t,
                            store: o,
                            viewType: a,
                            chartType: e.chartType,
                            transaction: r
                        }) : (0, i(493526).c)({
                            environment: t,
                            store: o,
                            viewType: a,
                            transaction: r
                        }), (0, i(545586).navigateToBlock)({
                            environment: t,
                            store: o,
                            pageVisitSource: i(254656).y8.LinkInPage
                        });
                        let n = o.getCollectionViewStores()[0];
                        n && (0, i(132229).F)(n.id, {
                            viewType: a
                        })
                    }
                })
            }
            let r = [{
                name: i(962299).A.formatMessage(o.table),
                type: "table",
                iconFn: i(518630).T,
                isLargeDatabaseIcon: !0,
                shouldShow: () => !0,
                onClick: (e, t) => a({
                    environment: e,
                    store: t,
                    viewType: "table"
                })
            }, {
                name: i(962299).A.formatMessage(o.board),
                type: "board",
                iconFn: i(602834).q,
                isLargeDatabaseIcon: !0,
                shouldShow: () => !0,
                onClick: (e, t) => a({
                    environment: e,
                    store: t,
                    viewType: "board"
                })
            }, {
                name: i(962299).A.formatMessage(o.list),
                type: "list",
                iconFn: i(774458).n,
                isLargeDatabaseIcon: !0,
                shouldShow: () => !0,
                onClick: (e, t) => a({
                    environment: e,
                    store: t,
                    viewType: "list"
                })
            }, {
                name: i(962299).A.formatMessage(o.timeline),
                type: "timeline",
                iconFn: i(840745).u,
                isLargeDatabaseIcon: !0,
                shouldShow: () => !0,
                onClick: (e, t) => a({
                    environment: e,
                    store: t,
                    viewType: "timeline"
                })
            }, {
                name: i(962299).A.formatMessage(o.calendar),
                type: "calendar",
                iconFn: i(998172).D,
                isLargeDatabaseIcon: !0,
                shouldShow: () => !0,
                onClick: (e, t) => a({
                    environment: e,
                    store: t,
                    viewType: "calendar"
                })
            }, {
                name: i(962299).A.formatMessage(o.gallery),
                type: "gallery",
                iconFn: i(7776).squareGrid2X2Icon,
                isLargeDatabaseIcon: !0,
                shouldShow: () => !0,
                onClick: (e, t) => a({
                    environment: e,
                    store: t,
                    viewType: "gallery"
                })
            }]
        },
        85071: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                integrationIcon: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, i(104509).wt)("integration", o, "default")
        },
        151965: (e, t, i) => {
            i.r(t), i.d(t, {
                accept: () => s,
                close: () => l,
                loadAndDuplicatePageTemplate: () => c,
                openWithItem: () => r,
                previewItem: () => n,
                setTemplateVisited: () => d
            }), i(16280), i(581454);
            let o = "LastViewedTemplateId",
                a = (0, i(109939).YK)({
                    clientCopyError: {
                        defaultMessage: "Client copy could not be created.",
                        id: "spaceActions.createGettingStartedPage.copyNotCreated.error"
                    }
                });

            function r(e) {
                var t;
                let {
                    environment: a,
                    item: r,
                    createNewPage: n,
                    isPrivate: l,
                    disablePointerEvents: s,
                    isCheckout: c = !1
                } = e;
                (0, i(471e3).I)({
                    environment: a
                }), i(752085).A.setState({
                    open: !0,
                    item: r,
                    createNewPage: n,
                    isPrivate: l,
                    isLoading: !1,
                    disablePointerEvents: s,
                    isCheckout: c
                }), i(255482).K.set({
                    userId: a.currentUser.id,
                    key: o,
                    value: r.rootId
                }), t = {
                    template_id: (0, i(498348).dY)(r),
                    from: n ? "sidebar" : "newPage"
                }, (0, i(104310).u)({
                    event: {
                        eventName: "template_modal_open",
                        eventProperties: { ...t,
                            ...(0, i(403884).h)({
                                environment: a
                            })
                        }
                    }
                })
            }

            function n({
                templateItem: e,
                currentUserId: t
            }) {
                let a = i(752085).A.state.item;
                i(752085).A.setState({ ...i(752085).A.state,
                    item: e
                }), a !== e && i(255482).K.set({
                    userId: t,
                    key: o,
                    value: e.rootId
                })
            }

            function l(e) {
                i(752085).A.setState({
                    item: i(752085).A.state.item,
                    open: !1
                }), (0, i(471e3).I)({
                    environment: e
                })
            }
            async function s(e) {
                var t, o;
                let a, {
                    acceptFrom: r,
                    item: n,
                    environment: s,
                    spaceStore: c,
                    initializeStore: d,
                    ...p
                } = e;
                i(752085).A.state.open && i(752085).A.setState({ ...i(752085).A.state,
                    isLoading: !0
                }), i(218744).default.checkGate({
                    gateName: "mobile_keep_template_gallery_open"
                }) && i(717376).A.state.open && i(717376).A.setState({
                    open: !1
                });
                let u = d ? { ...p,
                        item: n,
                        environment: s,
                        spaceStore: c,
                        initializeStore: d,
                        type: "inExistingStore",
                        useMinimalTemplates: !1,
                        from: "page_template_modal"
                    } : { ...p,
                        item: n,
                        environment: s,
                        spaceStore: c,
                        type: "inSpace",
                        useMinimalTemplates: !1,
                        from: "page_template_modal"
                    },
                    m = !1,
                    g = Date.now();
                try {
                    a = await (0, i(54647).o)(u), m = !0;
                    let e = null == (t = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id;
                    a && (!e || e !== a.id) && (0, i(545586).navigateToBlock)({
                        environment: s,
                        store: a,
                        pageVisitSource: i(254656).y8.Create,
                        showMoveTo: !0
                    }), l(s), i(986939).A.isMobile && ((0, i(713167).V)(), i(717376).A.setState({
                        open: !1
                    }))
                } finally {
                    let t = Date.now() - g,
                        l = e.initializeStore ? (0, i(297311).U)(e.initializeStore) : void 0,
                        s = e.initializeStore ? !l : e.isPrivate;
                    (0, i(522974).B)({
                        destination: s ? "private" : "team",
                        template_block_id: n.rootId,
                        template_duplication_duration_ms: t,
                        team_id: null == l ? void 0 : l.id,
                        created_page_id: null == (o = a) ? void 0 : o.id
                    }), (0, i(81149).h)({
                        from: "mobileApp",
                        success: m,
                        context: r,
                        template_block_id: n.rootId,
                        target_space_id: c.id,
                        template_duplication_duration_ms: t,
                        public_template_name: n.name,
                        template_id: n.id
                    })
                }
            }
            async function c(e) {
                let t, {
                        environment: o,
                        initializeStore: r,
                        item: n,
                        isPrivate: l,
                        useMinimalTemplates: s,
                        spaceStore: c,
                        spaceViewStore: d
                    } = e,
                    p = s ? n.rootId : n.previewRootId,
                    u = await o.api.callCellCompatibleApi({
                        eventName: "loadBlockSubtree",
                        environment: o,
                        data: {
                            block: {
                                id: p,
                                spaceId: n.spaceId
                            },
                            shallow: !1
                        },
                        cellNavigation: {
                            spaceId: n.spaceId
                        }
                    });
                "success" === u.type && (t = i(412951).RecordMapWithRole.create(u.data.subtreeRecordMap));
                let m = "pageTemplateModalActions.loadAndDuplicatePageTemplate",
                    {
                        performResult: g
                    } = (0, i(377796).createAndCommit)({
                        userAction: m,
                        environment: o,
                        cellTarget: {
                            spaceWithId: c.id
                        },
                        canUndo: !0,
                        perform: e => {
                            let n = r || i(964232).IT({
                                environment: o,
                                spaceStore: c,
                                spaceViewStore: d,
                                parent: l ? "private" : "none",
                                loading: !0,
                                transaction: e
                            });
                            (0, i(31069)._)({
                                currentUserId: o.currentUser.id,
                                defaultRecordCache: o.defaultRecordCache,
                                inMemoryRecordCache: n.inMemoryRecordCache,
                                recordMap: t,
                                debugSource: m,
                                isPendingTransactionForRecord: i(941701).transactionQueue.isPendingTransactionForRecord.bind(i(941701).transactionQueue)
                            });
                            let s = (0, i(559096).loadLocalSubtree)({
                                environment: o,
                                blockId: p,
                                inMemoryRecordCache: n.inMemoryRecordCache,
                                options: {
                                    allowCopyCollections: !0,
                                    requireFullSubtree: !1,
                                    skipTransclusionContainerChildren: !1,
                                    allowCopyExternalObjectInstances: !0
                                }
                            }).recordMap;
                            if (!s) throw Error(i(962299).A.getIntl().formatMessage(a.clientCopyError));
                            return (0, i(44226).localDuplicate)({
                                environment: o,
                                sourceBlockId: p,
                                targetBlockPointer: n.pointer,
                                sourceBlockSubtree: s,
                                targetInMemoryRecordCache: n.inMemoryRecordCache,
                                transaction: e,
                                from: "load_and_duplicate_page_template",
                                destinationTable: n.getParentTable(),
                                options: {
                                    allowRedundancy: !0,
                                    deepCopyTransclusionContainers: !0,
                                    resolveTemplateVariables: !0
                                }
                            }), n
                        }
                    }),
                    f = ((null == g ? void 0 : g.getCollectionPointers()) ? ? []).map(e => e.id);
                return (0, i(104310).u)({
                    event: {
                        eventName: "create_app_templates",
                        eventProperties: {
                            target_page_ids: [g.id],
                            template_label: n.name,
                            collection_ids: f
                        }
                    }
                }), g
            }

            function d(e) {
                let {
                    item: t,
                    transaction: o,
                    spaceViewStore: a
                } = e;
                if (a) {
                    let e = a.getVisitedTemplateIds();
                    if (0 > e.indexOf(t.rootId)) {
                        let r = e.concat([t.rootId]);
                        (0, i(173157).z)({
                            store: a,
                            data: {
                                visited_templates: r
                            },
                            transaction: o
                        })
                    }
                }
            }
        },
        199894: (e, t, i) => {
            i.d(t, {
                t: () => o
            }), i(16280), i(898992), i(672577), i(581454);

            function o(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: a,
                    preventSetSelection: r
                } = e, {
                    blocks: n
                } = e, l = (0, i(385941).Z)();
                if (!l) throw Error("No root store.");
                if (o.length > 0) {
                    let e = o[0],
                        l = i(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = l.props.onInsertAbove({
                        insertStores: n,
                        transaction: a
                    });
                    return r || (0, i(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = l.getContentStore(),
                        o = n.map(t => (0, i(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return r || (0, i(854924).t)({
                        environment: t,
                        stores: o
                    }), o
                }
            }
        },
        222869: (e, t, i) => {
            i.d(t, {
                _: () => o
            });

            function o(e, t) {
                if (e.size !== t.size) return !1;
                for (let i of e)
                    if (!t.has(i)) return !1;
                return !0
            }
        },
        245102: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowLineDownIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                a = (0, i(104509).wt)("arrowLineDown", o, "default")
        },
        285482: (e, t, i) => {
            i.d(t, {
                A: () => o
            });

            function o(e, t) {
                if ((0, i(101787).pA8)(t)) {
                    let o = (0, i(115964).$)(t.clientData);
                    if (o) return "messageValues" in t.clientData ? e.formatMessage(o, t.clientData.messageValues) : e.formatMessage(o)
                }
                return e.formatMessage(i(683646).k.generic_error)
            }
        },
        291876: (e, t, i) => {
            i.d(t, {
                v: () => o
            });

            function o(e) {
                let {
                    store: t,
                    transaction: o
                } = e, a = t.getIconStore();
                if (a) {
                    let e = (0, i(859941).a)();
                    (0, i(368198).K)({
                        store: a,
                        value: e,
                        transaction: o
                    })
                }
            }
        },
        301755: (e, t, i) => {
            function o({
                persona: e,
                defaultToLife: t
            }) {
                if (!e) return;
                if (e in i(310213).bJ) return e;
                let a = {
                    customer_support: "support",
                    designer: "design",
                    educator: "student",
                    entrepreneur: "hr",
                    freelancer: "design",
                    hr_recruiting: "hr",
                    it: "eng",
                    marketing_sales: "marketing",
                    media: "marketing",
                    operations: "hr",
                    operations_hr: "hr",
                    personal: "life",
                    product_manager: "product",
                    programmer: "eng",
                    other: t ? "life" : void 0,
                    unfilled: t ? "life" : void 0,
                    undefined: t ? "life" : void 0,
                    creative: "design",
                    founderCeo: "hr",
                    internalCommunication: "hr",
                    productDesign: "design",
                    projectProgramMgmt: "product",
                    finance: void 0,
                    itAdmin: "eng",
                    knowledgeManagement: "hr"
                };
                return (null == a ? void 0 : a[e]) ? ? void 0
            }

            function a(e, t) {
                let a = o({
                    persona: t,
                    defaultToLife: !0
                });
                return (a ? null == r ? void 0 : r[a] : []).filter(t => (0, i(589297).vc)(t, e))
            }
            i.d(t, {
                D: () => a,
                N: () => o
            }), i(898992), i(354520);
            let r = { ...i(310213).PY,
                design: [i(382538).kx.designSprint, i(382538).kx.designPortfolio],
                product: [i(382538).kx.productSpec, i(382538).kx.productWiki, i(382538).kx.visionAndStrategy],
                marketing: [i(382538).kx.blogEditorialCalendar, i(382538).kx.socialMediaCalendar, i(382538).kx.presentation],
                hr: [i(382538).kx.companyHome, i(382538).kx.employeeBenefits, i(382538).kx.peopleDirectory],
                sales: [i(382538).kx.salesWiki, i(382538).kx.presentation, i(382538).kx.oneOnOneNotes],
                support: [],
                life: []
            }
        },
        308292: (e, t, i) => {
            i.d(t, {
                AL: () => o,
                Q6: () => r,
                vt: () => a
            }), i(898992), i(672577);
            let o = {
                autoCompleteSprints: !1,
                actionConfig: {
                    complete_sprint_action: "complete_sprint_and_move_incomplete_tasks_to_next_sprint"
                },
                recurrenceConfig: {
                    interval: 2,
                    weekdays: ["MO"]
                }
            };

            function a(e) {
                let {
                    eventTracker: t,
                    properties: i
                } = e;
                t.DO_NOT_USE_commonTrackEvent({
                    eventName: "complete_sprint_action",
                    properties: i
                })
            }

            function r(e, t) {
                var o;
                return null == (o = t.groups) || null == (o = o.find(t => t.id === i(11448).nl || (null == t ? void 0 : t.name) === i(998833).P0 || (null == t ? void 0 : t.name) === e.formatMessage(i(998833).oz.statusGroupNameComplete))) ? void 0 : o.name
            }
        },
        310213: (e, t, i) => {
            i.d(t, {
                PY: () => a,
                bJ: () => o,
                ht: () => n,
                sw: () => r
            });
            let o = {
                    suggested: i(647414).DZ.suggestedCategory,
                    design: i(647414).DZ.designer,
                    eng: i(647414).DZ.engineering,
                    product: i(647414).DZ.productManagement,
                    marketing: i(647414).DZ.marketing,
                    sales: i(647414).DZ.sales,
                    support: i(647414).DZ.support,
                    hr: i(647414).DZ.hr,
                    life: i(647414).DZ.life,
                    student: i(647414).DZ.student
                },
                a = {
                    suggested: [i(382538).kx.defaultWiki],
                    product: [i(382538).kx.oneOnOneNotes, i(382538).kx.productWiki, i(382538).kx.productSpec, i(382538).kx.visionAndStrategy, i(382538).kx.presentation, i(382538).kx.investorUpdate, i(382538).kx.userResearch, i(382538).kx.experimentResults, i(382538).kx.brainstorm, i(382538).kx.productLaunchBrief],
                    design: [i(382538).kx.designSprint, i(382538).kx.designSystem, i(382538).kx.designPortfolio, i(382538).kx.userResearch, i(382538).kx.brainstorm],
                    eng: [i(382538).kx.engineeringWiki, i(382538).kx.engineeringTechSpec, i(382538).kx.experimentResults, i(382538).kx.brainstorm],
                    marketing: [i(382538).kx.presentation, i(382538).kx.brandAssets, i(382538).kx.brainstorm, i(382538).kx.contentCalendar, i(382538).kx.blogEditorialCalendar, i(382538).kx.socialMediaCalendar, i(382538).kx.campaignBrief, i(382538).kx.moodBoard, i(382538).kx.mediaList],
                    hr: [i(382538).kx.companyHome, i(382538).kx.newHireOnboarding, i(382538).kx.employeeBenefits, i(382538).kx.interviewGuide, i(382538).kx.recruitingTracker, i(382538).kx.jobBoard, i(382538).kx.applicantTracker, i(382538).kx.peopleDirectory],
                    sales: [i(382538).kx.salesWiki, i(382538).kx.salesCRM, i(382538).kx.salesAssets, i(382538).kx.competitiveAnalysis],
                    support: [i(382538).kx.productFAQs, i(382538).kx.helpCenter],
                    life: [i(382538).kx.readingListV2, i(382538).kx.habitTrackerV2, i(382538).kx.simpleBudgetV2, i(382538).kx.weeklyTodoV2, i(382538).kx.travelPlannerV2, i(382538).kx.journalV2, i(382538).kx.resumeV2, i(382538).kx.personalHomeV3, i(382538).kx.quickNoteV2, i(382538).kx.jobApplicationsV2, i(382538).kx.lifeWikiV2, i(382538).kx.moodBoardV2, i(382538).kx.blogPostV2, i(382538).kx.personalCRMV2],
                    student: [i(382538).kx.studentPlanner, i(382538).kx.classNotesV2, i(382538).kx.courseScheduleV2, i(382538).kx.gradeCalculatorV2, i(382538).kx.cornellNotesSystemV2, i(382538).kx.syllabusV2, i(382538).kx.lessonPlansV2, i(382538).kx.classDirectoryV2, i(382538).kx.classroomHomeV2, i(382538).kx.clubHomepageV2]
                },
                r = [i(382538).kx.todoListMobile, i(382538).kx.quickNoteMobile, i(382538).kx.habitTrackerMobile, i(382538).kx.journalMobile, i(382538).kx.weeklyPlanMobile, i(382538).kx.classNotesMobile],
                n = [i(382538).kx.todoListMobile, i(382538).kx.quickNoteMobile, i(382538).kx.oneOnOneNotesMobile, i(382538).kx.meetingNotesMobile, i(382538).kx.weeklyPlanMobile]
        },
        310324: (e, t, i) => {
            i.d(t, {
                Ay: () => m,
                KF: () => u,
                LG: () => l,
                Zf: () => c,
                yD: () => s
            });
            var o = i(296540),
                a = i(474848);
            let r = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                n = o.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: n,
                    preventCaptureSpacebarWhenEmpty: l,
                    ...s
                }, c) {
                    let {
                        left: d,
                        right: p,
                        inputLeft: u,
                        inputRight: m,
                        inputRightStyle: g,
                        disableInput: f,
                        inputOuterStyle: v,
                        rightMobileEditLabel: b,
                        mobileKeyboardOnDismiss: h,
                        style: k,
                        value: S,
                        onChange: w,
                        autosize: T,
                        autosizeMinHeight: A,
                        autosizeMaxHeight: P,
                        customElementAttributes: M,
                        disabled: I,
                        format: x,
                        id: C,
                        placeholder: j,
                        type: E,
                        autoFocus: D,
                        focus: B,
                        focusInitial: O,
                        focusAfterAnimation: V,
                        forceShowClearButton: N,
                        ignoreKeyboardMode: R,
                        inputElementAttributes: F,
                        inputStyle: H,
                        isRightLastElementOfInput: L,
                        maxlength: z,
                        min: U,
                        max: K,
                        selectAll: W,
                        showClearButton: q,
                        suppressFocusRing: G,
                        textarea: $,
                        textareaSubmitOnEnter: Y,
                        onBlur: Q,
                        onCancel: J,
                        onClearButtonClick: Z,
                        onClick: X,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: ei,
                        ...eo
                    } = s, [ea, er] = (0, o.useState)(() => !!(B || O));
                    (0, o.useEffect)(() => {
                        void 0 !== B && er(B)
                    }, [B]);
                    let en = e ? void 0 : i(763230).D_,
                        el = !t || S.length > 0 ? i(763230).D_ : void 0,
                        es = n ? void 0 : i(763230).D_,
                        ec = !l || S.length > 0 ? i(763230).D_ : void 0,
                        ed = (0, i(649476).Tf)(),
                        ep = (0, o.useContext)(i(649476).xu),
                        eu = (0, o.useRef)(null),
                        em = {
                            value: S,
                            onChange: w,
                            autosize: T,
                            autosizeMinHeight: A,
                            autosizeMaxHeight: P,
                            customElementAttributes: M,
                            disabled: I,
                            format: x,
                            id: C,
                            placeholder: j,
                            type: E,
                            autoFocus: D,
                            focus: B,
                            focusInitial: O,
                            focusAfterAnimation: V,
                            forceShowClearButton: N,
                            ignoreKeyboardMode: R,
                            inputElementAttributes: F,
                            inputStyle: H,
                            isRightLastElementOfInput: L,
                            maxlength: z,
                            min: U,
                            max: K,
                            selectAll: W,
                            showClearButton: q,
                            suppressFocusRing: G,
                            textarea: $,
                            textareaSubmitOnEnter: Y,
                            onBlur: Q,
                            onCancel: J,
                            onClearButtonClick: Z,
                            onClick: X,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: ei
                        };
                    return (0, a.jsx)(i(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: i(763230).D_,
                        onTab: i(763230).D_,
                        onSelectAll: i(763230).D_,
                        onRedo: i(763230).D_,
                        onUndo: i(763230).D_,
                        onToggleBold: i(763230).D_,
                        onToggleItalics: i(763230).D_,
                        onToggleCode: i(763230).D_,
                        onCut: es,
                        onCopy: es,
                        onPaste: es,
                        onKeypress: i(763230).D_,
                        onLeft: en,
                        onRight: en,
                        onDelete: el,
                        onBackspace: el,
                        onSpace: ec,
                        children: i(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i(636518).Ay, {
                                ref: c,
                                ...eo,
                                itemMarginLeft: ed ? 8 : void 0,
                                style: k,
                                title: (0, a.jsx)(_, {
                                    ref: eu,
                                    left: d,
                                    right: p,
                                    inputLeft: u,
                                    inputRight: m,
                                    inputRightStyle: g,
                                    disableInput: f,
                                    inputOuterStyle: v,
                                    rightMobileEditLabel: b,
                                    isFocused: ea,
                                    setIsFocused: er,
                                    ...em
                                })
                            }), (0, a.jsx)(i(368678).P, {
                                show: ea && ep.menuType !== i(649476).gu.ActionSheet,
                                onDismiss: h,
                                inputRef: eu
                            })]
                        }) : (0, a.jsx)(i(636518).Ay, {
                            ref: c,
                            ...eo,
                            left: d,
                            right: p,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(y, {
                                ref: eu,
                                disableInput: f,
                                inputOuterStyle: v,
                                inputRight: m,
                                inputRightStyle: g,
                                inputLeft: u,
                                ...em
                            }),
                            style: { ...r,
                                ...k
                            }
                        })
                    })
                }),
                l = 30,
                s = 28;

            function c(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: i(632079).Tj.icon.secondary,
                    width: i(104509).Ev.sm,
                    height: i(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let d = {
                    outlineButtonHovered: {
                        background: i(632079).Tj.background.secondary
                    }
                },
                p = (0, i(64960)._S)({
                    color: i(632079).Tj.background.primary
                });

            function u(e) {
                let t = (0, i(533992).WS)(),
                    o = (0, i(960253).I)(() => ({
                        outlineButton: { ...(0, i(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: i(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${i(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? i(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: p.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(i(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...o.outlineButton,
                        ...e.style,
                        height: t ? l : s,
                        width: t ? l : s
                    },
                    hoveredStyle: d.outlineButtonHovered,
                    pressedStyle: o.outlineButtonPressed
                })
            }
            let m = n,
                g = {
                    style0: {
                        color: i(632079).Tj.text.secondary
                    }
                };

            function f({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let r = (0, i(533992).v3)(),
                    n = (0, o.useCallback)(e => {
                        e.preventDefault();
                        let o = t.current;
                        o && (0, i(862215).G)(r, o)
                    }, [r, t]);
                return (0, a.jsx)(i(64960).Ay, {
                    onClick: n,
                    style: g.style0,
                    children: e
                })
            }
            let y = o.forwardRef(function(e, t) {
                    let {
                        disabled: o,
                        disableInput: r,
                        inputOuterStyle: n,
                        inputRight: l,
                        inputRightStyle: s,
                        inputLeft: c,
                        min: d,
                        textarea: p,
                        ...u
                    } = e;
                    return (0, a.jsx)(i(36481).p, { ...u,
                        ref: t,
                        disabled: o || r,
                        style: {
                            height: p ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...n
                        },
                        left: c,
                        right: l,
                        rightStyle: s,
                        min: d,
                        textarea: p
                    })
                }),
                v = {
                    fontSize: 16
                },
                _ = o.forwardRef(function(e, t) {
                    let {
                        left: r,
                        right: n,
                        inputLeft: l,
                        inputRight: s,
                        inputRightStyle: c,
                        disableInput: d,
                        inputOuterStyle: p,
                        rightMobileEditLabel: u,
                        isFocused: m,
                        setIsFocused: g,
                        disabled: y,
                        showClearButton: _,
                        onBlur: b,
                        onFocus: h,
                        ...k
                    } = e, S = (0, o.useCallback)(e => {
                        g(!1), b && b(e)
                    }, [b, g]), w = (0, o.useCallback)(e => {
                        g(!0), h && h(e)
                    }, [h, g]), T = (0, o.useRef)(null), A = (0, i(421573).A)(T, t), P = u && !m ? (0, a.jsx)(f, {
                        rightMobileEditLabel: u,
                        inputRef: T
                    }) : null;
                    return (0, a.jsx)(i(36481).p, { ...k,
                        ref: A,
                        format: "transparent",
                        style: { ...v,
                            ...p
                        },
                        onFocus: w,
                        onBlur: S,
                        showClearButton: !1 !== _,
                        disabled: y || d,
                        left: l || r,
                        right: P || s || n,
                        rightStyle: c
                    })
                })
        },
        312712: (e, t, i) => {
            i.d(t, {
                q: () => s
            }), i(18107), i(967357);
            let o = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "List view",
                        id: "blockTemplates.list.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.list.namePropertyTitle"
                    },
                    tagsPropertyTitle: {
                        defaultMessage: "Tags",
                        id: "blockTemplates.list.tagsPropertyTitle"
                    },
                    createdPropertyTitle: {
                        defaultMessage: "Created",
                        id: "blockTemplates.list.createdPropertyTitle"
                    }
                }),
                a = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Gallery view",
                        id: "blockTemplates.gallery.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.gallery.namePropertyTitle"
                    },
                    tagsPropertyTitle: {
                        defaultMessage: "Tags",
                        id: "blockTemplates.gallery.tagsPropertyTitle"
                    },
                    createdPropertyTitle: {
                        defaultMessage: "Created",
                        id: "blockTemplates.gallery.createdPropertyTitle"
                    }
                }),
                r = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Timeline view",
                        id: "blockTemplates.timeline.viewTitle"
                    },
                    datePropertyTitle: {
                        defaultMessage: "Date",
                        id: "blockTemplates.timeline.datePropertyTitle"
                    }
                }),
                n = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Feed view",
                        id: "blockTemplates.feed.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.feed.namePropertyTitle"
                    }
                }),
                l = (0, i(109939).YK)({
                    viewTitle: {
                        defaultMessage: "Map view",
                        id: "blockTemplates.map.viewTitle"
                    },
                    namePropertyTitle: {
                        defaultMessage: "Name",
                        id: "blockTemplates.map.namePropertyTitle"
                    },
                    placePropertyTitle: {
                        defaultMessage: "Place",
                        id: "blockTemplates.map.placePropertyTitle"
                    }
                });

            function s(e) {
                let {
                    isInline: t,
                    viewType: s,
                    name: c
                } = e;
                return "table" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, a = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "table",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    table_properties: [{
                                        property: "title",
                                        visible: !0,
                                        width: i(986939).A.isMobile ? i(565546).PI : i(565546).Xv
                                    }, {
                                        property: a,
                                        visible: !0
                                    }],
                                    table_wrap: !0
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).n4.namePropertyTitle),
                                        type: "title"
                                    }
                                },
                                format: {},
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "board" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, a = (0, i(698596).Ay)(), r = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "board",
                                name: i(962299).A.formatMessage(i(632468).jm.viewTitle),
                                query2: {
                                    aggregations: [{
                                        aggregator: "count"
                                    }]
                                },
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    board_columns_by: {
                                        property: a,
                                        type: "status",
                                        groupBy: "option",
                                        sort: {
                                            type: "ascending"
                                        }
                                    },
                                    board_columns: [{
                                        property: a,
                                        value: {
                                            type: "status",
                                            value: {
                                                type: "by_option",
                                                option: i(962299).A.formatMessage(i(998833).M_.statusOptionNotStarted)
                                            }
                                        }
                                    }, {
                                        property: a,
                                        value: {
                                            type: "status",
                                            value: {
                                                type: "by_option",
                                                option: i(962299).A.formatMessage(i(998833).M_.statusOptionInProgress)
                                            }
                                        }
                                    }, {
                                        property: a,
                                        value: {
                                            type: "status",
                                            value: {
                                                type: "by_option",
                                                option: i(962299).A.formatMessage(i(998833).M_.statusOptionDone)
                                            }
                                        }
                                    }],
                                    board_properties: [{
                                        property: a,
                                        visible: !1
                                    }, {
                                        property: r,
                                        visible: !0
                                    }]
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).jm.namePropertyTitle),
                                        type: "title"
                                    },
                                    [r]: {
                                        name: i(962299).A.formatMessage(i(632468).jm.assignPropertyTitle),
                                        type: "person"
                                    },
                                    [a]: (0, i(366710).D)(i(962299).A.formatMessage(i(632468).jm.statusPropertyTitle), i(962299).A.getIntl())
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: a,
                                        visible: !0
                                    }, {
                                        property: r,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "calendar" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, a = (0, i(698596).Ay)(), r = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "calendar",
                                name: i(962299).A.formatMessage(i(632468).PU.viewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                query2: {
                                    calendar_by: a
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).PU.namePropertyTitle),
                                        type: "title"
                                    },
                                    [a]: {
                                        name: i(962299).A.formatMessage(i(632468).PU.datePropertyTitle),
                                        type: "date"
                                    },
                                    [r]: {
                                        name: i(962299).A.formatMessage(i(632468).PU.tagsPropertyTitle),
                                        type: "multi_select"
                                    }
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "list" === s ? function(e) {
                    let {
                        isInline: t,
                        name: a
                    } = e, r = (0, i(698596).Ay)(), n = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "list",
                                name: i(962299).A.formatMessage(o.viewTitle),
                                query2: {
                                    aggregations: [{
                                        aggregator: "count"
                                    }]
                                },
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    list_properties: [{
                                        property: r,
                                        visible: !0
                                    }]
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(o.namePropertyTitle),
                                        type: "title"
                                    },
                                    [r]: {
                                        name: i(962299).A.formatMessage(o.tagsPropertyTitle),
                                        type: "multi_select",
                                        options: []
                                    },
                                    [n]: {
                                        name: i(962299).A.formatMessage(o.createdPropertyTitle),
                                        type: "created_time"
                                    }
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: n,
                                        visible: !0
                                    }, {
                                        property: r,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "gallery" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, r = (0, i(698596).Ay)(), n = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "gallery",
                                name: i(962299).A.formatMessage(a.viewTitle),
                                query2: {
                                    aggregations: [{
                                        aggregator: "count"
                                    }]
                                },
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    gallery_cover: {
                                        type: "page_content_first"
                                    }
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(a.namePropertyTitle),
                                        type: "title"
                                    },
                                    [r]: {
                                        name: i(962299).A.formatMessage(a.tagsPropertyTitle),
                                        type: "multi_select",
                                        options: []
                                    },
                                    [n]: {
                                        name: i(962299).A.formatMessage(a.createdPropertyTitle),
                                        type: "created_time"
                                    }
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: n,
                                        visible: !0
                                    }, {
                                        property: r,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "timeline" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, a = (0, i(698596).Ay)(), n = (0, i(698596).Ay)(), l = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            },
                            item_1: {
                                id: "item_1",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: {
                                    title: [
                                        [i(962299).A.formatMessage(i(632468).jm.card1Title)]
                                    ],
                                    [a]: (0, i(561872).m5)((0, i(25825).Mk)(i(906745).DateTime.now().minus({
                                        days: 5
                                    }).startOf("day").valueOf(), i(906745).DateTime.now().minus({
                                        days: 1
                                    }).startOf("day").valueOf(), (0, i(714350).P)()))
                                },
                                alive: !0
                            },
                            item_2: {
                                id: "item_2",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: {
                                    title: [
                                        [i(962299).A.formatMessage(i(632468).jm.card2Title)]
                                    ],
                                    [a]: (0, i(561872).m5)((0, i(25825).Mk)(i(906745).DateTime.now().minus({
                                        days: 3
                                    }).startOf("day").valueOf(), i(906745).DateTime.now().plus({
                                        days: 1
                                    }).startOf("day").valueOf(), (0, i(714350).P)()))
                                },
                                alive: !0
                            },
                            item_3: {
                                id: "item_3",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: {
                                    title: [
                                        [i(962299).A.formatMessage(i(632468).jm.card3Title)]
                                    ],
                                    [a]: (0, i(561872).m5)((0, i(25825).Mk)(i(906745).DateTime.now().minus({
                                        days: 1
                                    }).startOf("day").valueOf(), i(906745).DateTime.now().plus({
                                        days: 3
                                    }).startOf("day").valueOf(), (0, i(714350).P)()))
                                },
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "timeline",
                                name: i(962299).A.formatMessage(r.viewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    timeline_show_table: !t,
                                    timeline_properties: [{
                                        property: "title",
                                        visible: !0
                                    }],
                                    timeline_table_properties: [{
                                        property: "title",
                                        visible: !0,
                                        width: 280
                                    }, {
                                        property: a,
                                        visible: !1,
                                        width: 180
                                    }, {
                                        property: n,
                                        visible: !1,
                                        width: 180
                                    }, {
                                        property: l,
                                        visible: !1,
                                        width: 180
                                    }]
                                },
                                page_sort: ["item_1", "item_2", "item_3"],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(i(632468).jm.namePropertyTitle),
                                        type: "title"
                                    },
                                    [a]: {
                                        name: i(962299).A.formatMessage(r.datePropertyTitle),
                                        type: "date"
                                    },
                                    [n]: {
                                        name: i(962299).A.formatMessage(i(632468).jm.assignPropertyTitle),
                                        type: "person"
                                    },
                                    [l]: (0, i(366710).D)(i(962299).A.formatMessage(i(632468).jm.statusPropertyTitle), i(962299).A.getIntl())
                                },
                                format: {
                                    collection_page_properties: [{
                                        property: a,
                                        visible: !0
                                    }, {
                                        property: n,
                                        visible: !0
                                    }, {
                                        property: l,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "page" === s ? i(412951).RecordMapPolymorphic.create({}) : "chart" === s ? function(e) {
                    let t, {
                            isInline: o,
                            name: a,
                            chartType: r
                        } = e,
                        n = (0, i(698596).Ay)(),
                        l = (0, i(698596).Ay)(),
                        s = (0, i(698596).Ay)(),
                        c = (0, i(366710).D)(i(962299).A.formatMessage(i(632468).jm.statusPropertyTitle), i(962299).A.getIntl()),
                        d = {
                            name: i(962299).A.formatMessage(i(632468).n4.namePropertyTitle),
                            type: "title"
                        },
                        p = "line" === r ? {
                            title: d,
                            [l]: {
                                name: i(962299).A.formatMessage(i(632468).PU.datePropertyTitle),
                                type: "date"
                            }
                        } : "number" === r ? {
                            title: d,
                            [s]: {
                                name: i(962299).A.formatMessage(i(632468).tT.pricePropertyTitle),
                                type: "number",
                                number_format: "dollar"
                            }
                        } : {
                            title: d,
                            [n]: c
                        };
                    switch (r) {
                        case "donut":
                            t = (0, i(105639).ZS)({
                                collectionSchema: p
                            });
                            break;
                        case "number":
                            t = (0, i(105639).y_)({
                                property: s
                            });
                            break;
                        case "column":
                        case "bar":
                        case "line":
                            t = (0, i(105639).EZ)({
                                collectionSchema: p,
                                axisChartType: r
                            });
                            break;
                        default:
                            (0, i(722371).HB)(r)
                    }
                    let u = (0, i(714350).P)(),
                        m = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(u).minus({
                                days: 4
                            }))
                        },
                        g = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(u).minus({
                                days: 3
                            }))
                        },
                        f = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(u).minus({
                                days: 2
                            }))
                        },
                        y = {
                            type: "date",
                            start_date: (0, i(25825).kB)((0, i(25825).ah)(u).minus({
                                days: 1
                            }))
                        },
                        v = "line" === r ? [{
                            [l]: (0, i(561872).m5)(m)
                        }, {
                            [l]: (0, i(561872).m5)(g)
                        }, {
                            [l]: (0, i(561872).m5)(f)
                        }, {
                            [l]: (0, i(561872).m5)(f)
                        }, {
                            [l]: (0, i(561872).m5)(f)
                        }, {
                            [l]: (0, i(561872).m5)(y)
                        }] : "number" === r ? [{
                            [s]: [
                                ["100"]
                            ]
                        }, {
                            [s]: [
                                ["200"]
                            ]
                        }, {
                            [s]: [
                                ["300"]
                            ]
                        }, {
                            [s]: [
                                ["400"]
                            ]
                        }] : [{
                            [n]: [
                                [c.options.at(0).value]
                            ]
                        }, {
                            [n]: [
                                [c.options.at(1).value]
                            ]
                        }, {
                            [n]: [
                                [c.options.at(1).value]
                            ]
                        }, {
                            [n]: [
                                [c.options.at(2).value]
                            ]
                        }];
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: o ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["chart_view", "data_view"],
                                alive: !0
                            },
                            item_1: {
                                id: "item_1",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: v[0],
                                alive: !0
                            },
                            item_2: {
                                id: "item_2",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: v[1],
                                alive: !0
                            },
                            item_3: {
                                id: "item_3",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: v[2],
                                alive: !0
                            },
                            item_4: {
                                id: "item_4",
                                type: "page",
                                parent_id: "collection",
                                parent_table: "collection",
                                properties: v[3],
                                alive: !0
                            },
                            ..."line" === r && {
                                item_5: {
                                    id: "item_5",
                                    type: "page",
                                    parent_id: "collection",
                                    parent_table: "collection",
                                    properties: v[4],
                                    alive: !0
                                },
                                item_6: {
                                    id: "item_6",
                                    type: "page",
                                    parent_id: "collection",
                                    parent_table: "collection",
                                    properties: v[5],
                                    alive: !0
                                }
                            }
                        },
                        collection_view: {
                            chart_view: {
                                id: "chart_view",
                                version: 0,
                                type: "chart",
                                name: i(962299).A.formatMessage(i(632468).tT.chartViewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    chart_config: t,
                                    subitem_display_mode: "flattened",
                                    hide_linked_collection_name: !0
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            },
                            data_view: {
                                id: "data_view",
                                version: 0,
                                type: "table",
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0,
                                name: i(962299).A.formatMessage(i(632468).tT.dataViewTitle),
                                format: {
                                    table_properties: [{
                                        property: "title",
                                        visible: !0
                                    }],
                                    table_wrap: !0,
                                    hide_linked_collection_name: !0
                                }
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: a,
                                schema: p,
                                format: {
                                    collection_page_properties: [{
                                        property: "line" === r ? l : "number" === r ? s : n,
                                        visible: !0
                                    }]
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c,
                    chartType: e.chartType
                }) : "form_editor" === s ? i(412951).RecordMapPolymorphic.create({}) : "feed" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e;
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "feed",
                                name: i(962299).A.formatMessage(n.viewTitle),
                                query2: {},
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    list_properties: []
                                },
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(n.namePropertyTitle),
                                        type: "title"
                                    }
                                },
                                format: {
                                    collection_page_properties: []
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "map" === s ? function(e) {
                    let {
                        isInline: t,
                        name: o
                    } = e, a = (0, i(698596).Ay)();
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                collection_id: "collection",
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    },
                                    collection_pointers: [{
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }]
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "map",
                                name: i(962299).A.formatMessage(l.viewTitle),
                                format: {
                                    collection_pointer: {
                                        table: i(832375).VlP,
                                        id: "collection"
                                    }
                                },
                                query2: {
                                    map_by: a
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        },
                        collection: {
                            collection: {
                                id: "collection",
                                name: o,
                                schema: {
                                    title: {
                                        name: i(962299).A.formatMessage(l.namePropertyTitle),
                                        type: "title"
                                    },
                                    [a]: {
                                        name: i(962299).A.formatMessage(l.placePropertyTitle),
                                        type: "place"
                                    }
                                },
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t,
                    name: c
                }) : "chat" === s || "custom" === s ? i(412951).RecordMapPolymorphic.create({}) : "dashboard" === s ? function(e) {
                    let {
                        isInline: t
                    } = e;
                    return i(412951).RecordMapPolymorphic.create({
                        block: {
                            root: {
                                id: "root",
                                type: t ? "collection_view" : "collection_view_page",
                                format: {
                                    hide_inline_collection_name: !0
                                },
                                view_ids: ["view"],
                                alive: !0
                            }
                        },
                        collection_view: {
                            view: {
                                id: "view",
                                version: 0,
                                type: "dashboard",
                                format: {},
                                name: i(799514).to.dashboard,
                                page_sort: [],
                                parent_id: "root",
                                parent_table: "block",
                                alive: !0
                            }
                        }
                    })
                }({
                    isInline: t
                }) : "teamspace_directory" === s || "library_external_pages" === s || "agents" === s ? i(412951).RecordMapPolymorphic.create({}) : void(0, i(722371).HB)(s)
            }
        },
        317397: (e, t, i) => {
            i.d(t, {
                F1: () => d,
                KQ: () => o,
                Wt: () => n,
                dB: () => c,
                vP: () => r,
                wL: () => a,
                zD: () => l
            }), i(944114), i(898992), i(581454), i(908872);
            let o = (0, i(109939).YK)({
                    emptyWithIcon: {
                        defaultMessage: "Empty page with icon",
                        id: "templatePickerHelpers.basicTemplateItems.emptyWithIcon"
                    },
                    empty: {
                        defaultMessage: "Empty page",
                        id: "templatePickerHelpers.basicTemplateItems.empty"
                    },
                    templates: {
                        defaultMessage: "Templates",
                        id: "templatePickerHelpers.basicTemplateItems.templates"
                    },
                    import: {
                        defaultMessage: "Import",
                        id: "templatePickerHelpers.basicTemplateItems.import"
                    }
                }),
                a = {
                    name: i(962299).A.formatMessage(o.empty),
                    iconFn: i(865213).Y,
                    type: "empty_page",
                    shouldShow: () => !0,
                    onClick: (e, t) => {
                        let o = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "templatePickerHelpers.emptyTemplateItems",
                            environment: e,
                            canUndo: !0,
                            cellTarget: o ? {
                                spaceWithId: o
                            } : void 0,
                            perform: o => {
                                i(532559).n({
                                    environment: e,
                                    store: t,
                                    transaction: o
                                })
                            }
                        })
                    }
                },
                r = {
                    name: i(962299).A.formatMessage(o.templates),
                    type: "templates",
                    iconFn: e => (0, i(598974).notionTemplateIcon)(e),
                    shouldShow: () => !0,
                    onClick: e => {
                        (0, i(666236).P)({
                            environment: e
                        })
                    }
                },
                n = {
                    name: i(962299).A.formatMessage(o.templates),
                    type: "templates",
                    iconFn: e => (0, i(646220).notionTemplateTintableIcon)(e),
                    shouldShow: () => !0,
                    onClick: e => {
                        (0, i(666236).P)({
                            environment: e
                        })
                    }
                },
                l = {
                    name: i(962299).A.formatMessage(o.import),
                    type: "import",
                    iconFn: i(245102).arrowLineDownIcon,
                    shouldShow: () => !0,
                    onClick: (e, t) => {
                        let o = i(92513).JW();
                        i(47797).A.setState({
                            flowId: o
                        }), i(691968).kY({
                            from: "new_page",
                            flowId: o
                        }), (0, i(599754).Ow)({
                            currentPage: "imports"
                        })
                    }
                },
                s = (0, i(109939).YK)({
                    pageWithIcon: {
                        defaultMessage: "Page with icon",
                        id: "templatePickerHelpers.mobileBasicTemplateItems.pageWithIcon"
                    },
                    emptyPage: {
                        defaultMessage: "Empty page",
                        id: "templatePickerHelpers.mobileBasicTemplateItems.emptyPage"
                    }
                }),
                c = [{
                    name: i(962299).A.formatMessage(s.pageWithIcon),
                    type: "page_with_icon",
                    shouldShow: () => !0,
                    onClick: (e, t) => {
                        let o = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "templatePickerHelpers.mobileBasicTemplateItems",
                            environment: e,
                            canUndo: !0,
                            cellTarget: o ? {
                                spaceWithId: o
                            } : void 0,
                            perform: o => {
                                i(532559).T({
                                    environment: e,
                                    store: t,
                                    transaction: o
                                })
                            }
                        })
                    }
                }, {
                    name: i(962299).A.formatMessage(s.emptyPage),
                    type: "empty_page",
                    shouldShow: () => !0,
                    onClick: (e, t) => {
                        let o = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "templatePickerHelpers.mobileBasicTemplateItems",
                            environment: e,
                            canUndo: !0,
                            cellTarget: o ? {
                                spaceWithId: o
                            } : void 0,
                            perform: o => {
                                i(532559).n({
                                    environment: e,
                                    store: t,
                                    transaction: o
                                })
                            }
                        })
                    }
                }];

            function d(e, t) {
                let i = new Map(e.map(e => [e.type, e]));
                return t.reduce((e, t) => (i.has(t) && e.push(i.get(t)), e), [])
            }
        },
        322095: (e, t, i) => {
            function o(e, t) {
                return e.map(e => a(e, t))
            }

            function a(e, t) {
                var o, a;
                let r, {
                        nameMessage: n,
                        descriptionMessage: l,
                        ...s
                    } = e,
                    {
                        rootId: c,
                        previewRootId: d,
                        spaceId: p
                    } = (o = e, a = t, r = (0, i(599412).H)(a), o.sources[r] || o.sources[i(599412).q]);
                return { ...s,
                    id: n.id,
                    rootId: c,
                    spaceId: p,
                    previewRootId: d,
                    name: t.formatMessage(n),
                    description: l ? t.formatMessage(l) : void 0
                }
            }
            i.d(t, {
                B: () => a,
                o: () => o
            }), i(581454)
        },
        340661: (e, t, i) => {
            function o(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    duplicate: o,
                    droppedStores: a,
                    transaction: r,
                    duplicateActions: n,
                    existingBlocks: l,
                    handleDropModule: s
                } = e, {
                    movedStores: c,
                    reparentedStores: d
                } = a.reduce((e, t) => (o || t.getAssociatedCollectionId() !== (null == i ? void 0 : i.id) ? e.reparentedStores.push(t) : e.movedStores.push(t), e), {
                    movedStores: [],
                    reparentedStores: []
                });
                return [...c, ...s ? s.handleDrop({
                    environment: t,
                    droppedStores: d,
                    duplicate: o,
                    transaction: r,
                    resolveTemplateVariables: !1,
                    duplicateActions: n,
                    targetStore: i,
                    existingBlocks: l
                }) : []]
            }
            i.d(t, {
                T: () => o
            }), i(944114), i(898992), i(908872)
        },
        346349: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                sparklesFillSmallIcon: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.25 1.61 13.5 12.78",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M5.201 2.236a.625.625 0 1 0-1.25 0c0 .389-.249.914-.705 1.37s-.981.705-1.37.705a.625.625 0 0 0 0 1.25c.389 0 .914.25 1.37.706s.705.98.705 1.37a.625.625 0 0 0 1.25 0c0-.39.25-.915.706-1.37s.981-.706 1.37-.706a.625.625 0 1 0 0-1.25c-.389 0-.914-.249-1.37-.705S5.2 2.625 5.2 2.236m5.495 3.42a.625.625 0 0 0-1.25 0c0 .854-.403 1.715-1.058 2.37-.656.656-1.517 1.059-2.37 1.059a.625.625 0 1 0 0 1.25c.853 0 1.714.402 2.37 1.058.655.656 1.058 1.517 1.058 2.37a.625.625 0 0 0 1.25 0c0-.853.402-1.714 1.058-2.37s1.517-1.058 2.37-1.058a.625.625 0 0 0 0-1.25c-.853 0-1.714-.403-2.37-1.058-.656-.656-1.058-1.517-1.058-2.37"
                    })
                },
                a = (0, i(104509).wt)("sparklesFillSmall", o, "fillSmall")
        },
        361261: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => l,
                getIconStyle: () => c
            }), i(944114), i(898992), i(354520), i(581454);
            var o = i(296540),
                a = i(474848);
            let r = (0, i(109939).YK)({
                genericHelpMeWriteNewPage: {
                    defaultMessage: "Write “{filter}” with AI…",
                    id: "id.completions.genericHelpMeWriteNewPage"
                },
                genericHelpMeWriteNewPageEmpty: {
                    defaultMessage: "Start writing with AI…",
                    id: "id.completions.genericHelpMeWriteNewPageEmpty"
                }
            });

            function n({
                menuListStore: e,
                sectionTitleStyle: t,
                handleTemplatePickerEmptyEnter: o,
                sectionsBeforeMobilePreviewSections: r,
                renderMobileTemplatePreviewItem: l,
                store: s
            }) {
                let c = (0, i(682985).K8)(() => {
                        let e = (0, i(974410).f)(s);
                        return null == e ? void 0 : e.getSubscriptionTier()
                    }, [s]),
                    d = (0, i(682985).K8)(() => (0, i(745452).p)().function, []),
                    p = (0, i(533992).v3)(),
                    u = (0, i(815048).fJ)(i(929925).Aw),
                    m = (0, i(682985).K8)(() => u.value ? u.value.templatePickerItems.getMobilePreviewTemplates({
                        userPersona: d,
                        subscriptionTier: c,
                        environment: p
                    }).map(({
                        category: e,
                        sectionHeaderMessage: o,
                        templates: r
                    }) => ({
                        key: e,
                        render: e => (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                style: t,
                                children: (0, a.jsx)(i(109939).sA, { ...o
                                })
                            }), e.children]
                        }, e.key),
                        items: r.map(l)
                    })) : [], [u.value, d, c, p, l, t]),
                    g = "pending" === u.status ? (0, a.jsx)("div", {
                        style: {
                            marginTop: t.marginTop,
                            marginBottom: t.marginBottom,
                            paddingInlineStart: 10
                        },
                        children: (0, a.jsx)(i(517334).k, {})
                    }) : void 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        store: e,
                        initialFocus: void 0,
                        disableInitialScroll: !0,
                        disableCommandEnter: !0,
                        onEmptyEnter: o,
                        sections: [...r, ...m]
                    }), g]
                })
            }
            let l = function({
                store: e,
                menuListStore: t
            }) {
                let o = (0, i(533992).v3)(),
                    r = (0, i(533992).Y0)();
                (0, i(383953).l)(() => {
                    t.reset()
                });
                let n = (0, i(682985).K8)(() => i(827482).A.getMode(o, e, e.getSpaceStore()), [o, e]),
                    l = (0, i(682985).O$)(i(205885).e),
                    s = (0, i(682985).K8)(() => !!e.getAssociatedCollectionStore(), [e]),
                    c = (0, i(682985).K8)(() => e.getAssociatedCollectionStore(), [e]),
                    p = (0, i(682985).K8)(() => c ? c.getParentBlockStore() : void 0, [c]),
                    u = (0, i(682985).K8)(() => c ? c.getTemplatePageStores() : void 0, [c]),
                    m = (0, i(682985).K8)(() => e.isTemplate(), [e]),
                    g = (0, i(682985).K8)(() => (0, i(261105).v)({
                        collectionStore: c,
                        collectionViewBlockStore: p,
                        checkNavigableAncestorLocked: !0
                    }), [c, p]),
                    f = (0, i(682985).K8)(() => (0, i(444285).S)(p), [p]),
                    _ = (0, i(682985).K8)(() => {
                        var e;
                        let t = null == c ? void 0 : c.getLayoutStore();
                        return (null == t || null == (e = t.getFormat()) ? void 0 : e.database_templates_visibility) === "hide"
                    }, [c]);
                return l ? (0, a.jsxs)("div", {
                    children: [s || i(986939).A.isMobile ? void 0 : (0, a.jsx)(v, {
                        store: e,
                        menuListStore: t,
                        publicEditMode: n
                    }), !s && r.isTablet ? (0, a.jsx)(y, {
                        store: e,
                        menuListStore: t,
                        publicEditMode: n
                    }) : void 0, s && !m && c && p && u && u.length > 0 && !_ ? (0, a.jsx)(i(434637).D, {
                        isOverlay: !1,
                        collectionStore: c,
                        canConfigureCollection: g,
                        onTemplateClick: t => {
                            var a, r, n;
                            let l;
                            return a = t, r = e, n = o, l = r.getSpaceId(), void(0, i(377796).createAndCommit)({
                                userAction: "TemplatePicker.handleCollectionTemplateClick",
                                environment: n,
                                cellTarget: l ? {
                                    spaceWithId: l
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    let t = r.getTitleValue();
                                    i(845422).TB({
                                        title: "" !== i(247438).q4_(t) ? {
                                            text: t
                                        } : "template",
                                        environment: n,
                                        store: r,
                                        templateStore: a.templateStore,
                                        isKeyboard: a.isKeyboard,
                                        isCreateIn: !1,
                                        transaction: e,
                                        from: "template_picker"
                                    })
                                }
                            })
                        },
                        onEmptyEnter: () => d(o, e),
                        onEmptyPageClick: () => {
                            var t, a;
                            let r;
                            return t = e, a = o, r = t.getSpaceId(), void(0, i(377796).createAndCommit)({
                                userAction: "TemplatePicker.handleTemplateEmptyPageClick",
                                environment: a,
                                cellTarget: r ? {
                                    spaceWithId: r
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    i(532559).n({
                                        environment: a,
                                        store: t,
                                        transaction: e
                                    })
                                }
                            })
                        },
                        locked: f
                    }) : void 0]
                }) : null
            };

            function s() {
                return { ...i(57461).CC,
                    marginTop: 16,
                    marginBottom: 4,
                    letterSpacing: 0,
                    fontSize: i(986939).A.isMobile ? 12 : 13,
                    color: i(632079).Tj.text.tertiary,
                    display: "flex",
                    alignItems: "center",
                    fontWeight: i(699422).Wy.medium
                }
            }

            function c(e) {
                return e.isLargeDatabaseIcon ? {
                    width: 16,
                    fill: i(632079).Tj.icon.tertiary,
                    marginInlineStart: 2,
                    marginInlineEnd: 12
                } : {
                    width: 20,
                    fill: i(632079).Tj.icon.tertiary,
                    marginInlineEnd: 10
                }
            }

            function d(e, t) {
                let o = i(358377).default.state;
                if ((0, i(194020).E)(e, (0, i(974410).f)(t)) && "editing" === o.mode) {
                    let a = t.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        userAction: "TemplatePicker.handleTemplatePickerEmptyEnter",
                        environment: e,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        canUndo: !0,
                        perform: a => {
                            i(794479).Ve({
                                environment: e,
                                editorMode: "default",
                                transaction: a,
                                multiSelection: o.multiSelection,
                                spaceStore: (0, i(974410).f)(t)
                            })
                        }
                    }), (0, i(523713).k)(e, {
                        is_keyboard: !0,
                        from: "template_picker",
                        template_type: "empty_page"
                    })
                }
            }
            let p = {
                marginInlineEnd: 6
            };

            function u(e, t, o) {
                return !!i(986939).A.isMobile && (0, i(576348).ZE)(t, o) && e.focused && (0, a.jsx)("span", {
                    style: p,
                    children: (0, a.jsx)(i(16275).I, {
                        icon: i(750748).arrowTurnDownLeftSmallIcon,
                        size: "xs",
                        colorVariant: "tertiary"
                    })
                })
            }
            let m = {
                marginInlineEnd: 10
            };

            function g(e, t, a, r) {
                return {
                    key: e.name,
                    render: ({
                        ref: t,
                        ...n
                    }) => {
                        var l;
                        return (0, o.createElement)(i(33418).J, { ...n,
                            key: e.name,
                            format: "page-menu-item",
                            title: e.name,
                            type: e.type,
                            icon: null == (l = e.iconFn) ? void 0 : l.call(e, c(e)),
                            locked: !1,
                            right: u(n, r, a)
                        })
                    },
                    action: o => {
                        (0, i(194020).E)(t, (0, i(974410).f)(a)) && ((0, i(523713).k)(t, {
                            is_keyboard: "keydown" === o.event.type,
                            from: "template_picker",
                            template_type: e.type
                        }), e.onClick(t, a))
                    }
                }
            }
            let f = {
                height: 24,
                width: 24,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginInlineEnd: 4
            };

            function y({
                store: e,
                menuListStore: t,
                publicEditMode: r
            }) {
                let l = (0, i(533992).v3)(),
                    c = (0, o.useCallback)(t => g(t, l, e, r), [l, e, r]),
                    p = [{
                        key: "Basic",
                        render: e => (0, a.jsx)("div", {
                            children: e.children
                        }, e.key),
                        items: i(317397).dB.map(c)
                    }, {
                        key: "Database",
                        render: e => (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                style: s(),
                                children: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Database",
                                    id: "templatePicker.mobileTemplatePicker.databaseTemplateSection.label"
                                })
                            }), e.children]
                        }, e.key),
                        items: i(83429)._.filter(e => e.shouldShow(l)).map(c)
                    }];
                return (0, a.jsx)(n, {
                    menuListStore: t,
                    sectionTitleStyle: s(),
                    handleTemplatePickerEmptyEnter: () => d(l, e),
                    sectionsBeforeMobilePreviewSections: p,
                    renderMobileTemplatePreviewItem: e => ({
                        key: e.name,
                        render: ({
                            ref: t,
                            ...a
                        }) => (0, o.createElement)(i(33418).J, { ...a,
                            key: e.name,
                            title: e.name,
                            type: "page_template",
                            format: "page-menu-item",
                            locked: !1
                        }),
                        action: () => {
                            i(151965).openWithItem({
                                environment: l,
                                item: e,
                                createNewPage: !1,
                                isPrivate: !1,
                                disablePointerEvents: !1
                            })
                        }
                    }),
                    store: e
                })
            }

            function v({
                store: e,
                menuListStore: t,
                publicEditMode: n
            }) {
                var l, c;
                let p, y, _, b, h = (0, i(109939).tz)(),
                    k = (0, i(533992).v3)(),
                    [S, w] = (0, o.useState)(!1),
                    T = (0, i(682985).K8)(() => (0, i(576348).ZE)(n, e), [n, e]),
                    A = (0, i(682985).K8)(() => 0 === e.getContentLength(), [e]) ? [g(i(317397).wL, k, e, n)] : [],
                    P = (p = (0, i(317397).F1)(i(83429)._, ["table"]), y = i(381453).FF(i(83429)._, ...p), _ = !S && y.length > 0 ? {
                        key: l = "moreNew",
                        render: ({
                            ref: t,
                            ...r
                        }) => (0, o.createElement)(i(33418).J, { ...r,
                            key: l,
                            format: "page-menu-item",
                            title: (0, a.jsx)(i(109939).sA, {
                                defaultMessage: "More",
                                id: "templatePicker.more.label"
                            }),
                            type: "more",
                            icon: (0, a.jsx)("span", {
                                style: m,
                                children: (0, a.jsx)(i(16275).I, {
                                    icon: i(397900).ellipsisIcon,
                                    colorVariant: "tertiary"
                                })
                            }),
                            locked: !1,
                            right: u(r, n, e)
                        }),
                        action: () => w(!0)
                    } : null, b = [i(317397).zD, T ? i(317397).Wt : i(317397).vP, ...p, ..._ ? [] : y].filter(e => e.shouldShow(k)).map(t => g(t, k, e, n)), _ ? b.concat(_) : b),
                    M = (0, i(682985).K8)(() => e.getTitleValue(), [e]),
                    I = [];
                if (T) {
                    let t = (c = (0, i(536614).r4)(M, e).trim(), {
                        key: "ask ai",
                        render: ({
                            ref: t,
                            ...l
                        }) => {
                            let s = c.replace(/(\r\n|\n|\r)/gm, " "),
                                d = s.length > 30 ? `${s.slice(0,30)}…` : s;
                            return (0, o.createElement)(i(33418).J, { ...l,
                                key: "genericHelpMeWriteNewPageWithAI",
                                format: "page-menu-item",
                                title: s ? h.formatMessage(r.genericHelpMeWriteNewPage, {
                                    filter: d
                                }) : h.formatMessage(r.genericHelpMeWriteNewPageEmpty),
                                type: "ai",
                                icon: (0, a.jsx)("div", {
                                    style: f,
                                    children: (0, a.jsx)(i(16275).I, {
                                        icon: i(346349).sparklesFillSmallIcon,
                                        size: "sm",
                                        colorPalette: "purple",
                                        colorVariant: "accentPrimary"
                                    })
                                }),
                                locked: !1,
                                right: u(l, n, e)
                            })
                        },
                        action: () => {
                            let t = e.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "TemplatePicker.genericHelpMeWriteNewPageWithAI",
                                environment: k,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    i(532559).n({
                                        environment: k,
                                        store: e,
                                        transaction: t,
                                        preventTextSelection: !1,
                                        onTextSelection() {
                                            (0, i(661044).openHelpMeWriteGenericPopup)({
                                                environment: k
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    });
                    I.push(t)
                }
                return (0, a.jsx)(i(558045).A, {
                    type: i(558045).O.Horizontal,
                    store: t,
                    disableInitialScroll: !0,
                    disableCommandEnter: !0,
                    isEnterOnHoverEmpty: !0,
                    initialFocus: void 0,
                    disableKeyboard: !0,
                    onEmptyEnter: () => d(k, e),
                    sections: [{
                        key: "Basic",
                        render: e => (0, a.jsx)("div", {
                            children: e.children
                        }, e.key),
                        items: [...A, ...I]
                    }, {
                        key: "Add new",
                        render: e => (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                style: s(),
                                children: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Add new",
                                    id: "templatePicker.add new.label"
                                })
                            }), e.children]
                        }, e.key),
                        items: P
                    }]
                })
            }
        },
        368678: (e, t, i) => {
            i.d(t, {
                P: () => n
            });
            var o = i(296540),
                a = i(474848);
            let r = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: i(632079).Tj.blue.text.accentPrimary,
                    fontWeight: i(699422).Wy.semibold
                }
            };

            function n(e) {
                let {
                    onDismiss: t,
                    inputRef: n
                } = e, l = (0, i(533992).Y0)(), s = (0, o.useRef)(null), c = l.isMobileNative && l.isIOS, d = c && e.show;
                (0, i(336494).b)(i(651748).A, () => ({
                    getNode: () => s.current,
                    isShown: () => d
                }), [d]);
                let p = (0, i(571354).n)(),
                    u = (0, o.useCallback)(() => {
                        var e;
                        null == n || null == (e = n.current) || e.focus(), t && t();
                        let i = document.activeElement;
                        i instanceof HTMLElement && i.blur()
                    }, [n, t]);
                if (!c) return null;
                let m = d ? -(i(247800).j + p) : 0;
                return (0, a.jsx)(i(114596).O, {
                    open: !0,
                    children: (0, a.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: i(247800).j,
                            display: d ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: i(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${m}px)`,
                            transition: d ? "ease-out" : "ease-in",
                            boxShadow: d ? `
								0 -1px 0 ${i(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: s,
                        children: (0, a.jsx)(i(64960).Ay, {
                            style: r.style0,
                            onTouchEnd: () => {
                                u()
                            },
                            children: (0, a.jsx)(i(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        391374: (e, t, i) => {
            i.d(t, {
                o: () => r
            });
            var o = i(296540),
                a = i(474848);
            let r = o.forwardRef(function({
                color: e = "primary",
                ...t
            }, o) {
                let r = (0, i(960253).I)(() => {
                        let o = "blue" === e ? i(632079).Tj.blue.text.accentPrimary : "secondary" === e ? i(632079).Tj.text.secondary : i(632079).Tj.text.primary;
                        return {
                            title: {
                                color: o,
                                fill: o
                            },
                            icon: {
                                fill: "blue" === e ? i(632079).Tj.blue.text.accentPrimary : void 0
                            },
                            buttonMenuItem: { ...t.style,
                                ...t.disabled ? {
                                    cursor: "not-allowed"
                                } : {}
                            }
                        }
                    }, [t.disabled, e, t.style]),
                    n = "blue" !== e ? e : void 0;
                return (0, a.jsx)(i(95582).A, {
                    ref: o,
                    ...t,
                    title: (0, a.jsx)("div", {
                        style: r.title,
                        children: t.title
                    }),
                    icon: (0, a.jsx)(i(16275).I, {
                        icon: i(581923).plusIcon,
                        style: r.icon,
                        colorVariant: n
                    }),
                    style: r.buttonMenuItem
                })
            })
        },
        397900: (e, t, i) => {
            i.r(t), i.d(t, {
                ellipsisIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                a = (0, i(104509).wt)("ellipsis", o, "default")
        },
        420459: (e, t, i) => {
            i.d(t, {
                G4: () => n,
                gu: () => a,
                rs: () => r
            }), i(18107), i(967357);
            var o = () => i(970831);

            function a(e) {
                let t = e ? ? ("editing" === i(358377).default.state.mode ? i(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let a = t.start.store,
                    r = a.getRecordStoreUIRoot(),
                    n = i(521595).n.findNodeFromStore(a),
                    l = (0, i(534012).T)(a),
                    s = null == l ? void 0 : l.getRecordStoreUIParent(),
                    c = (0, i(730994).K3)(r),
                    d = l && l instanceof o().B && l !== r ? l : void 0,
                    p = d ? ? n;
                if (r && r instanceof o().B && p) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: r,
                    currentBlock: d,
                    origin: p,
                    currentParent: s,
                    scrollerStore: c,
                    isPageTitle: r.id === a.id
                }
            }

            function r() {
                let {
                    stores: e
                } = i(584265).default.state, t = i(358377).default.state, a = "empty" !== t.mode ? t.multiSelection : void 0, r = "empty" !== t.mode ? t.multiSelection.start.store : void 0, n = r ? r.getRecordStoreUIRoot() : void 0;
                if (!(n instanceof o().B)) {
                    let e, t = null == r ? void 0 : r.getRecordStoreUIParent();
                    for (; null != t;) t instanceof o().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (n = e)
                }
                if (a && n && n instanceof o().B) {
                    let t = (0, i(534012).T)(a.end.store),
                        o = null == t ? void 0 : t.getRecordStoreUIParent(),
                        r = (0, i(730994).K3)(n);
                    if (t && o) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: a,
                        currentPage: n,
                        origin: t,
                        endBlock: t,
                        endBlockParent: o,
                        scrollerStore: r
                    }
                }
            }

            function n() {
                if (i(584265).default.state.stores.length > 0) {
                    let e = i(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== i(584265).default.state.stores.length) return;
                            let e = i(584265).default.state.stores[0];
                            if (!(e instanceof o().B)) return;
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
                        return e ? a(e) : function() {
                            let {
                                stores: e
                            } = i(584265).default.state, t = e[0], a = e.at(-1), r = t ? t.getRecordStoreUIRoot() : void 0;
                            if (r && r instanceof o().B && a) {
                                let t = (0, i(730994).K3)(r);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: r,
                                    origin: a,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, i(971541).k)(e.multiSelection) ? a() : r()
                }
            }
        },
        425749: (e, t, i) => {
            i.d(t, {
                I$: () => n,
                R2: () => c,
                WF: () => s,
                bZ: () => l,
                cE: () => a,
                jX: () => r,
                rz: () => d
            });
            var o = () => i(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function n(e) {
                return !!(void 0 !== e && (0, i(722371).Xk)(r, e))
            }

            function l() {
                let e = (0, i(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: i(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, i(4962).Ay)(),
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
            let c = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of c)
                    if (o().n4(e, t)) return !0;
                return !1
            }
        },
        428022: (e, t, i) => {
            i.r(t), i.d(t, {
                applyUntypedFeature: () => s
            });
            var o = () => i(722371),
                a = () => i(715144);
            let r = (0, i(109939).YK)({
                    aiSummaryName: {
                        id: "feature.ai_summary.name",
                        defaultMessage: "AI summary"
                    },
                    aiSummaryDescription: {
                        id: "feature.ai_summary.description",
                        defaultMessage: "Summarize pages with AI"
                    },
                    aiAutofillName: {
                        id: "feature.ai_autofill.name",
                        defaultMessage: "Custom AI autofill"
                    },
                    aiAutofillDescription: {
                        id: "feature.ai_autofill.description",
                        defaultMessage: "Autofill properties with AI"
                    },
                    aiTranslationName: {
                        id: "feature.ai_translation.name",
                        defaultMessage: "AI translation"
                    },
                    aiTranslationDescription: {
                        id: "feature.ai_translation.description",
                        defaultMessage: "Translate pages with AI"
                    },
                    aiKeywordsName: {
                        id: "feature.ai_keywords.name",
                        defaultMessage: "AI keywords"
                    },
                    aiKeywordsDescription: {
                        id: "feature.ai_keywords.description",
                        defaultMessage: "Extract keywords with AI"
                    }
                }),
                n = [{
                    uri: i(830386).Bn.priorityHmlFeature,
                    name: "Priority",
                    dependencies: [{
                        uri: i(830386).Kg.priorityHmlProperty,
                        type: "property",
                        collectionUri: i(103249).iH,
                        name: "Priority",
                        description: "High, medium, or low",
                        icon: i(896221).A.images.appPackages.featurePrioritySvg,
                        propertySchema: {
                            type: "select",
                            name: "Priority",
                            options: [{
                                id: "priority_low",
                                value: "Low",
                                color: "green"
                            }, {
                                id: "priority_medium",
                                value: "Medium",
                                color: "yellow"
                            }, {
                                id: "priority_high",
                                value: "High",
                                color: "red"
                            }]
                        }
                    }],
                    collectionUri: i(103249).iH
                }, {
                    uri: i(830386).Bn.progressBarFeature,
                    collectionUri: i(103249).iH,
                    name: "Progress Bar",
                    description: "Visual representation of progress",
                    icon: i(896221).A.images.appPackages.featureStatusSvg,
                    dependencies: [{
                        uri: i(830386).Kg.progressBarCurrentProperty,
                        type: "property",
                        collectionUri: i(103249).iH,
                        name: "Progress Bar Current",
                        propertySchema: {
                            type: "number",
                            name: "Current"
                        }
                    }, {
                        uri: i(830386).Kg.progressBarTargetProperty,
                        type: "property",
                        collectionUri: i(103249).iH,
                        name: "Progress Bar Target",
                        propertySchema: {
                            type: "number",
                            name: "Target"
                        }
                    }, {
                        uri: i(830386).Kg.progressBarFormulaProperty,
                        type: "property",
                        collectionUri: i(103249).iH,
                        name: "Progress Bar Progress Formula",
                        propertySchema: {
                            type: "formula",
                            name: "Progress bar",
                            formula2: {
                                code: [
                                    ["‣", [
                                        ["fpp", {
                                            property: i(830386).Kg.progressBarCurrentProperty,
                                            collection: {
                                                id: i(103249).iH,
                                                table: "collection"
                                            }
                                        }]
                                    ]],
                                    ["/"],
                                    ["‣", [
                                        ["fpp", {
                                            property: i(830386).Kg.progressBarTargetProperty,
                                            collection: {
                                                id: i(103249).iH,
                                                table: "collection"
                                            }
                                        }]
                                    ]]
                                ],
                                result_type: {
                                    type: "number"
                                }
                            },
                            show_as: {
                                type: "bar",
                                color: "green",
                                maxValue: 1,
                                showValue: !1
                            },
                            version: "v2"
                        }
                    }]
                }, {
                    uri: i(830386).Bn.ganttChartFeature,
                    collectionUri: i(103249).iH,
                    name: "Gantt Chat",
                    description: "Chart to show progress of a project's tasks over time.",
                    icon: i(896221).A.images.appPackages.featureGanttSvg,
                    dependencies: [{
                        uri: i(830386).Kg.ganttInitiativeProperty,
                        type: "property",
                        collectionUri: i(103249).iH,
                        name: "Initiative",
                        description: "Initiatives associated with a specific project",
                        icon: i(896221).A.images.appPackages.featurePrioritySvg,
                        propertySchema: {
                            type: "select",
                            name: "Initiative",
                            options: [{
                                id: "initiative_a",
                                value: "Initiative A",
                                color: "purple"
                            }, {
                                id: "initiative_b",
                                value: "Initiative B",
                                color: "green"
                            }, {
                                id: "initiative_c",
                                value: "Initiative C",
                                color: "blue"
                            }]
                        }
                    }, {
                        uri: i(830386).Kg.ganttDueDateProperty,
                        type: "property",
                        collectionUri: i(103249).iH,
                        name: "Due Date",
                        description: "When a project is due.",
                        icon: i(896221).A.images.appPackages.featurePrioritySvg,
                        propertySchema: {
                            type: "date",
                            name: "Due Date"
                        }
                    }, {
                        uri: i(830386).Kg.ganttTimelineView,
                        type: "collection_view",
                        collectionUri: i(103249).iH,
                        description: "GANTT chart timeline view of projects",
                        value: {
                            type: "timeline",
                            name: "Timeline",
                            format: {
                                collection_view_icon: "/icons/timeline_gray.svg",
                                timeline_show_table: !0,
                                timeline_table_properties: [{
                                    width: 171,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 200,
                                    visible: !0,
                                    property: i(830386).Kg.ganttInitiativeProperty
                                }],
                                timeline_preference: {
                                    zoomLevel: "month",
                                    centerTimestamp: (0, i(25825).ln)((0, i(25825).Ec)((0, i(714350).P)()), (0, i(714350).P)())
                                },
                                collection_group_by: {
                                    sort: {
                                        type: "manual"
                                    },
                                    type: "multi_select",
                                    property: i(830386).Kg.ganttInitiativeProperty,
                                    hideEmptyGroups: !0
                                }
                            },
                            query2: {
                                timeline_by: i(830386).Kg.ganttDueDateProperty
                            }
                        },
                        collectionViewBlockUri: i(103249).eh
                    }]
                }];
            i(830386).Bn.aiSummaryFeature, i(103249).iH, i(962299).A.formatMessage(r.aiSummaryName), i(962299).A.formatMessage(r.aiSummaryDescription), i(896221).A.images.appPackages.featureAiSummarizeSvg, i(896221).A.images.tooltips.properties.aiAutofillSummaryPng, i(830386).Kg.aiSummaryProperty, i(103249).iH, i(962299).A.formatMessage(r.aiSummaryName), i(962299).A.formatMessage(r.aiSummaryName), i(830386).Bn.aiCustomAutofillFeature, i(103249).iH, i(962299).A.formatMessage(r.aiAutofillName), i(962299).A.formatMessage(r.aiAutofillDescription), i(896221).A.images.tooltips.properties.aiCustomAutofillPng, i(830386).Kg.aiCustomAutofillProperty, i(103249).iH, i(962299).A.formatMessage(r.aiAutofillName), i(962299).A.formatMessage(r.aiAutofillName), i(830386).Bn.aiTranslationFeature, i(103249).iH, i(962299).A.formatMessage(r.aiTranslationName), i(962299).A.formatMessage(r.aiTranslationDescription), i(896221).A.images.tooltips.properties.aiTranslationPng, i(830386).Kg.aiTranslationProperty, i(103249).iH, i(962299).A.formatMessage(r.aiTranslationName), i(962299).A.formatMessage(r.aiTranslationName), i(830386).Bn.aiKeywordsFeature, i(103249).iH, i(962299).A.formatMessage(r.aiKeywordsName), i(962299).A.formatMessage(r.aiKeywordsDescription), i(896221).A.images.tooltips.properties.aiKeywordsPng, i(830386).Kg.aiKeywordsProperty, i(103249).iH, i(962299).A.formatMessage(r.aiKeywordsName), i(962299).A.formatMessage(r.aiKeywordsName);
            var l = () => i(545934);

            function s(e) {
                var t;
                let {
                    environment: i,
                    collectionStore: r,
                    collectionViewBlockStore: s,
                    feature: c,
                    transaction: d
                } = e, p = c.dependencies, u = (null == (t = s.getFormat()) ? void 0 : t.app_uri_map) ? ? {};
                for (let e of p)
                    if ("property" === e.type)(0, l().Io)({
                        environment: i,
                        collectionStore: r,
                        dependency: e,
                        blockUriMap: u,
                        allFeatures: n,
                        transaction: d
                    });
                    else if ("collection_view" === e.type) {
                    let t = (0, l().ww)({
                        environment: i,
                        collectionStore: r,
                        collectionViewBlockStore: s,
                        dependency: e,
                        blockUriMap: u,
                        transaction: d
                    });
                    (0, a().z)({
                        stores: [s],
                        update: {
                            app_uri_map: t
                        },
                        transaction: d
                    })
                } else(0, o().HB)(e)
            }
        },
        431666: (e, t, i) => {
            i.d(t, {
                i: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    collectionViewStore: a,
                    property_type: r,
                    from: n,
                    property: l
                } = e;
                (0, i(33918).G)(t, {
                    property: l,
                    property_type: r,
                    from: n,
                    collection_id: null == o ? void 0 : o.id,
                    collection_view_id: null == a ? void 0 : a.id
                })
            }
        },
        432705: (e, t, i) => {
            function o(e) {
                return "event" === e || "recurrence" === e
            }

            function a(e) {
                let t = e.getTrigger();
                return (0, i(722371).O9)(t) && o(t.type)
            }

            function r(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, i(722371).HB)(e)
            }
            i.d(t, {
                $X: () => a,
                H8: () => r,
                x2: () => o
            })
        },
        433837: (e, t, i) => {
            i.d(t, {
                Me: () => l,
                Vv: () => a,
                Z3: () => r,
                wI: () => n
            });
            var o = () => i(906745);

            function a(e) {
                if ("week" === e.frequency && e.weekdays && 1 === e.weekdays.length) return {
                    weekday: e.weekdays[0],
                    duration: e.interval
                }
            }

            function r(e) {
                let {
                    currentSprintEndDate: t,
                    sprintSchedule: i
                } = e;
                return s({
                    startDate: d({
                        dateToAdjust: o().DateTime.fromISO(t),
                        weekday: i.weekday,
                        wrapForEqualDays: !0
                    }),
                    duration: i.duration
                })
            }

            function n(e) {
                let {
                    userTimeZone: t,
                    sprintSchedule: i
                } = e;
                return s({
                    startDate: o().DateTime.local({
                        zone: t
                    }),
                    duration: i.duration
                })
            }

            function l(e) {
                let {
                    currentSprintStartDate: t,
                    sprintSchedule: i
                } = e, {
                    end_date: a
                } = s({
                    startDate: d({
                        dateToAdjust: o().DateTime.fromISO(t),
                        weekday: i.weekday,
                        wrapForEqualDays: !1
                    }),
                    duration: i.duration
                }), r = o().DateTime.fromISO(a), n = o().DateTime.now().startOf("day");
                for (; r.diff(n, "days").days < 0;) r = r.plus({
                    weeks: 1
                });
                return {
                    type: "daterange",
                    start_date: r.plus({
                        days: 1
                    }).minus({
                        weeks: i.duration
                    }).toISODate(),
                    end_date: r.toISODate()
                }
            }

            function s(e) {
                let {
                    startDate: t,
                    duration: i
                } = e, o = t.plus({
                    weeks: i
                }).minus({
                    days: 1
                });
                return {
                    type: "daterange",
                    start_date: t.toISODate(),
                    end_date: o.toISODate()
                }
            }
            let c = {
                SU: 0,
                MO: 1,
                TU: 2,
                WE: 3,
                TH: 4,
                FR: 5,
                SA: 6
            };

            function d(e) {
                let {
                    dateToAdjust: t,
                    weekday: i,
                    wrapForEqualDays: o
                } = e, a = function(e) {
                    let {
                        currentWeekday: t,
                        nextWeekday: i,
                        wrapForEqualDays: o
                    } = e, a = "number" == typeof t ? t : c[t], r = "number" == typeof i ? i : c[i];
                    if (a === r) return 7 * !!o;
                    let n = a,
                        l = 0;
                    for (; n !== r;) n === c.SA ? n = 0 : n += 1, l += 1;
                    return l
                }({
                    currentWeekday: t.weekday % 7,
                    nextWeekday: c[i],
                    wrapForEqualDays: o
                });
                return t.plus({
                    days: a
                })
            }
        },
        434637: (e, t, i) => {
            i.d(t, {
                D: () => p
            }), i(898992), i(823215), i(354520), i(581454);
            var o = i(296540),
                a = i(474848);
            let r = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.secondary,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8
                    },
                    databaseTitle: { ...i(699422).RC
                    }
                },
                n = o.memo(function(e) {
                    let {
                        prefix: t,
                        collectionName: i
                    } = e;
                    return (0, a.jsxs)("div", {
                        style: r.container,
                        children: [t, (0, a.jsxs)("span", {
                            style: r.databaseTitle,
                            children: [" ", i]
                        })]
                    })
                }),
                l = {
                    link: {
                        borderRadius: 6,
                        height: 24,
                        width: 24,
                        display: "flex"
                    },
                    button: {
                        height: 24,
                        width: 24,
                        fill: i(632079).Tj.icon.tertiary
                    },
                    icon: {
                        width: 20,
                        height: 20
                    }
                },
                s = o.memo(function(e) {
                    let t = (0, i(533992).v3)(),
                        r = (0, i(109939).tz)(),
                        n = (0, o.useCallback)(() => {
                            (0, i(150782).F)(t, {
                                from: e.helpButtonContext
                            })
                        }, [t, e.helpButtonContext]);
                    return (0, a.jsx)(i(68774).N, {
                        href: e.href,
                        external: !0,
                        style: l.link,
                        onClick: n,
                        children: (0, a.jsx)(i(374533).A, {
                            icon: i(80094).questionMarkCircleIcon,
                            style: l.button,
                            iconStyle: l.icon,
                            ariaLabel: r.formatMessage({
                                id: "helpButton.ariaLabel",
                                defaultMessage: "Help"
                            })
                        })
                    })
                }),
                c = (0, i(109939).YK)({
                    filterPlaceholder: {
                        id: "collectionPicker.searchBarFilter.text",
                        defaultMessage: "Filter…"
                    }
                }),
                d = {
                    container: {
                        fontSize: 14,
                        padding: i(986939).A.isMobile ? "12px 16px" : "0 12px 4px 12px",
                        color: i(632079).Tj.text.tertiary,
                        wordBreak: "keep-all",
                        ...i(986939).A.isMobile && {
                            background: i(632079).Tj.background.primary,
                            boxShadow: `0 1px 0 ${i(632079).Tj.border.secondaryTranslucent}`,
                            marginBottom: 1
                        }
                    }
                },
                p = o.memo(function(e) {
                    let {
                        collectionStore: t,
                        isOverlay: r,
                        onEmptyEnter: n,
                        onEmptyPageClick: l,
                        onCancelClick: s,
                        canConfigureCollection: c,
                        locked: p,
                        onTemplateClick: u
                    } = e, [g, v] = (0, o.useState)(""), _ = (0, i(682985).uB)(void 0, i(419110).$), b = (0, i(682985).K8)(() => t.getTemplatePageStores().filter(e => e.getAlive()), [t]), h = (0, i(682985).K8)(() => b.every(e => e.isReady()), [b]), k = (0, i(682985).K8)(() => r && null != g && g.length ? (0, i(821048).Ay)(g, b, e => String(e.getProperties().title || "")) : b, [b, g, r]);
                    if (!h) return null;
                    if (r) {
                        let e = b.length > 6,
                            o = i(986939).A.isMobile ? {
                                menuType: i(649476).gu.Modal,
                                title: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Database templates",
                                    id: "database.mobileTemplatesMenu.title"
                                })
                            } : {
                                menuType: i(649476).gu.Popup,
                                width: 360
                            };
                        return (0, a.jsxs)(i(747369).A, { ...o,
                            header: (0, a.jsx)(m, {
                                collectionStore: t
                            }),
                            children: [0 === b.length ? (0, a.jsx)(i(844565).A, {
                                children: (0, a.jsx)("div", {
                                    style: d.container,
                                    children: (0, a.jsx)(i(109939).sA, {
                                        defaultMessage: "Create a reusable page template for this database.",
                                        id: "database.emptyTemplatesList.info"
                                    })
                                })
                            }) : void 0, e ? (0, a.jsx)(f, {
                                templateInputValue: g,
                                setTemplateInputValue: v
                            }) : null, (0, a.jsx)(y, {
                                collectionStore: t,
                                onEmptyEnter: n,
                                onEmptyPageClick: l,
                                onCancelClick: s,
                                canConfigureCollection: c,
                                isOverlay: r,
                                locked: p,
                                onTemplateClick: u,
                                menuListStore: _,
                                templateInputValue: g,
                                filteredTemplatePageStores: k,
                                draggable: !(e && g)
                            })]
                        })
                    }
                    return (0, a.jsx)(y, {
                        collectionStore: t,
                        onEmptyEnter: n,
                        onEmptyPageClick: l,
                        onCancelClick: s,
                        canConfigureCollection: c,
                        isOverlay: r,
                        locked: p,
                        onTemplateClick: u,
                        menuListStore: _,
                        templateInputValue: g,
                        filteredTemplatePageStores: k,
                        draggable: !0
                    })
                }),
                u = {
                    marginTop: 6
                },
                m = o.memo(function(e) {
                    let {
                        collectionStore: t
                    } = e, o = (0, i(109939).tz)(), r = (0, i(682985).K8)(() => (0, i(536601).getCollectionNameOrDefault)({
                        collectionStore: t,
                        intl: o
                    }), [t, o]);
                    return i(986939).A.isMobile ? null : (0, a.jsx)(i(636518).Ay, {
                        style: u,
                        title: (0, a.jsx)(n, {
                            prefix: (0, a.jsx)(i(109939).sA, {
                                id: "database.templatesList.templatesFor",
                                defaultMessage: "Templates for"
                            }),
                            collectionName: r
                        }),
                        right: (0, a.jsx)(s, {
                            helpButtonContext: "collection_templates_menu",
                            href: (0, i(442564).x)("guides.databaseTemplates")
                        })
                    })
                }),
                g = {
                    container: {
                        margin: i(986939).A.isMobile ? 0 : "10px 0"
                    }
                },
                f = o.memo(function(e) {
                    let {
                        templateInputValue: t,
                        setTemplateInputValue: r
                    } = e, {
                        isAndroid: n
                    } = (0, i(533992).Y0)(), l = (0, i(109939).tz)(), s = (0, o.useCallback)(e => r(e.currentTarget.value), [r]), d = (0, i(960253).I)(() => ({
                        input: { ...n && {
                                borderBottom: "none"
                            }
                        }
                    }), [n]);
                    return (0, a.jsx)("div", {
                        style: g.container,
                        children: (0, a.jsx)(i(310324).Ay, {
                            value: t,
                            focusInitial: !i(986939).A.isMobile || void 0,
                            placeholder: l.formatMessage(c.filterPlaceholder),
                            showClearButton: !0,
                            inputLeft: (0, a.jsx)(i(310324).Zf, {
                                icon: i(921048).magnifyingGlassSmallIcon
                            }),
                            onChange: s,
                            style: d.input
                        })
                    })
                }),
                y = o.memo(function(e) {
                    let {
                        filteredTemplatePageStores: t,
                        draggable: r,
                        collectionStore: n,
                        onEmptyEnter: l,
                        onEmptyPageClick: s,
                        onCancelClick: c,
                        canConfigureCollection: d,
                        isOverlay: p,
                        locked: u,
                        onTemplateClick: m,
                        menuListStore: g,
                        templateInputValue: f
                    } = e, y = (0, i(533992).v3)(), _ = (0, o.useContext)(i(713311).p2), b = (0, o.useContext)(i(440411).n), h = (0, i(682985).K8)(() => (0, i(194020).E)(y, (0, i(974410).f)(n)), [y, n]), k = (0, o.useCallback)(e => {
                        g.unsetFocus();
                        let t = n.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "CollectionTemplatePicker.handleCollectionTemplatesReorder",
                            environment: y,
                            canUndo: !0,
                            cellTarget: t ? {
                                spaceWithId: t
                            } : void 0,
                            perform: t => i(845422).lU({
                                collectionStore: n,
                                newTemplateIds: e,
                                transaction: t
                            })
                        })
                    }, [y, n, g]), S = (0, o.useCallback)(() => {
                        var e;
                        h && (l(), (0, i(523713).k)(y, {
                            template_type: "empty_page",
                            from: "collections_template_picker",
                            is_keyboard: !0,
                            collection_id: n.id,
                            collection_view_id: null == _ || null == (e = _.collectionViewStore()) ? void 0 : e.id
                        }))
                    }, [y, n, l, _, h]), w = (0, o.useCallback)(e => {
                        h && (s(e.event), (0, i(523713).k)(y, {
                            template_type: "empty_page",
                            from: "collections_template_picker",
                            is_keyboard: "keydown" === e.event.type,
                            ..._ && (0, i(752242).sl)(_)
                        }))
                    }, [h, _, y, s]), T = (0, o.useCallback)(() => {
                        var e;
                        if (!h) return;
                        let t = n.getSpaceId(),
                            {
                                performResult: o
                            } = (0, i(377796).createAndCommit)({
                                userAction: "CollectionTemplatePicker.newPage",
                                environment: y,
                                canUndo: !0,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                perform: e => i(845422).bI({
                                    environment: y,
                                    collectionStore: n,
                                    transaction: e,
                                    title: f
                                })
                            });
                        if (o) {
                            let e = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                                t = e ? (0, i(483227).Ay)({
                                    store: e,
                                    peekViewBlockId: o.id,
                                    fullyQualified: !1,
                                    pageVisitSource: i(254656).y8.Create
                                }) : (0, i(483227).Ay)({
                                    store: o,
                                    fullyQualified: !1,
                                    pageVisitSource: i(254656).y8.Create
                                });
                            b ? b(t) : (0, i(79266).navigate)({
                                environment: y,
                                url: t
                            })
                        }(0, i(941754).e)(y, {
                            collection_id: n.id,
                            collection_view_id: null == _ || null == (e = _.collectionViewStore()) ? void 0 : e.id
                        }), null == c || c()
                    }, [h, y, n, _, f, c, b]), A = (0, o.useMemo)(() => ({
                        key: "create-template",
                        render: e => (0, a.jsx)(v, {
                            isOverlay: p,
                            locked: u,
                            menuListItemProps: e
                        }),
                        action: T
                    }), [T, p, u]), P = (0, i(682985).K8)(() => {
                        var e;
                        return null == _ || null == (e = _.defaultPageTemplateStore.state) ? void 0 : e.id
                    }, [_]), M = (0, o.useMemo)(() => ({
                        key: "empty",
                        render: e => 0 === t.length || "" !== f ? null : (0, a.jsx)(i(717202).K, {
                            collectionStore: n,
                            canConfigureCollection: d,
                            isOverlay: p,
                            templateStore: void 0,
                            isMobile: i(986939).A.isMobile,
                            locked: u || !d,
                            draggable: !0,
                            isDefault: void 0 === P,
                            onCancelClick: c,
                            ...e
                        }),
                        action: w
                    }), [d, n, P, w, p, u, c, f, t.length]), I = (0, o.useCallback)(e => {
                        let t = e.getAutomationStore(),
                            a = null != t && t.isActive() ? t.getRecurrence() : void 0,
                            l = t && !t.canEdit(),
                            s = (null == t ? void 0 : t.getStatus()) === "disabled_duplication" || (null == t ? void 0 : t.getStatus()) === "disabled_inactive_space";
                        return {
                            key: e.id,
                            render: t => (0, o.createElement)(i(717202).K, { ...t,
                                key: e.id,
                                isOverlay: p,
                                collectionStore: n,
                                canConfigureCollection: d,
                                templateStore: e,
                                isMobile: i(986939).A.isMobile,
                                locked: u,
                                onCancelClick: c,
                                draggable: r,
                                isDefault: P === e.id,
                                recurrence: a,
                                recurrenceDisabled: s,
                                recurrenceButtonDisabled: l
                            }),
                            action: t => {
                                h && m({
                                    templateStore: e,
                                    isKeyboard: "keydown" === t.event.type
                                })
                            }
                        }
                    }, [d, h, n, P, r, p, u, c, m]), x = (0, i(682985).K8)(() => {
                        let e = t.map(e => e.id);
                        return [0 !== t.length ? {
                            key: "templates",
                            render: t => {
                                if (0 === t.children.length) return null;
                                let o = t.children.slice(0, t.children.length - 1),
                                    n = t.children[t.children.length - 1];
                                return (0, a.jsx)(i(844565).A, { ...t,
                                    disableDesktopPadding: !p,
                                    disableMobileBorders: !0,
                                    children: (0, a.jsxs)(a.Fragment, {
                                        children: [i(986939).A.isMobile || u || !d ? o.map((e, t) => o[t]) : (0, a.jsx)(i(66467).Ay, {
                                            direction: "vertical",
                                            keys: e,
                                            disabled: !r,
                                            renderKey: t => o[e.indexOf(t)],
                                            onDrop: k
                                        }), n]
                                    })
                                })
                            },
                            items: [...t.map(I), M]
                        } : null, d ? {
                            key: "create-template",
                            render: e => (0, a.jsx)(i(844565).A, {
                                topBorder: p,
                                disableDesktopPadding: !p,
                                disableMobileBorders: !0,
                                ...e
                            }),
                            items: [A]
                        } : null].filter(e => null !== e)
                    }, [t, I, M, d, A, p, u, r, k]);
                    return (0, a.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        store: g,
                        sections: x,
                        onEmptyEnter: S,
                        initialFocus: void 0,
                        disableInitialScroll: !0,
                        disableCommandEnter: !0,
                        resetFocusOnMouseOut: !0
                    })
                }),
                v = o.forwardRef(function(e, t) {
                    let {
                        menuListItemProps: o,
                        isOverlay: r,
                        locked: n
                    } = e, l = (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "New template",
                        id: "database.templateView.newTemplateButton"
                    });
                    return r ? (0, a.jsx)(i(391374).o, {
                        title: l,
                        color: "secondary",
                        ...o
                    }) : (0, a.jsx)(i(33418).J, {
                        title: l,
                        icon: (0, a.jsx)(i(16275).I, {
                            icon: i(581923).plusIcon
                        }),
                        type: "new_template",
                        format: r ? "collection-overlay" : "page-menu-item",
                        locked: n,
                        ...o
                    })
                })
        },
        437188: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var o = i(474848);
            let a = function({
                collectionViewName: e,
                collectionViewType: t
            }) {
                return e ? (0, o.jsx)(i(93594).A, {
                    children: e
                }) : "page" === t ? (0, o.jsx)(i(109939).sA, {
                    id: "database.collectionView.untitledName.untitled",
                    defaultMessage: "Untitled"
                }) : (0, o.jsx)(i(109939).sA, { ...i(4587).X[t]
                })
            }
        },
        440605: (e, t, i) => {
            function o(e, t) {
                return e.find(e => e.presets.some(e => e.uri === t))
            }
            i.d(t, {
                B: () => o
            }), i(898992), i(672577), i(737550)
        },
        452794: (e, t, i) => {
            i.r(t), i.d(t, {
                createSprintPage: () => a
            }), i(898992), i(672577), i(803949);
            let o = (0, i(109939).YK)({
                sprintBoard_0: {
                    id: "appTemplatesSprintBoardActions.sprintBoard_0",
                    defaultMessage: "Sprint board"
                }
            });

            function a(e) {
                let {
                    environment: t,
                    spaceViewStore: a,
                    appParentStore: r,
                    transaction: n,
                    blockStores: l,
                    creationEntryPoint: s
                } = e;
                if ("preset" === s.type && s.presetUri !== i(11448).I0 || !l) return;
                let c = l.find(e => e.getFormat().app_config_uri === i(11448).d0),
                    d = l.find(e => e.getFormat().app_config_uri === i(11448).IE);
                if (c && d) return i(883298)._R({
                        environment: t,
                        transaction: n,
                        sprintsBlockStore: d,
                        tasksBlockStore: c
                    }),
                    function(e) {
                        let {
                            environment: t,
                            spaceViewStore: a,
                            appParentStore: r,
                            transaction: n,
                            tasksBlockStore: l,
                            location: s
                        } = e, c = r.table === i(832375).NXh ? r.id : r.getSpaceId(), d = r.table === i(832375).NXh ? r : r.getSpaceStore();
                        if (!c || !d) return;
                        let p = function(e) {
                            let {
                                environment: t,
                                appParentStore: a,
                                tasksBlockStore: r,
                                transaction: n,
                                spaceId: l
                            } = e, s = function(e) {
                                let {
                                    environment: t,
                                    appParentStore: a,
                                    transaction: r,
                                    spaceId: n
                                } = e;
                                if (!(a.table === i(832375).NXh ? a : a.getSpaceStore())) throw new(i(101787)).yI4("No space store found");
                                let l = i(124937).Wv({
                                    environment: t,
                                    type: i(955630).xd.collectionViewPage,
                                    spaceId: n,
                                    format: {
                                        page_icon: "/icons/run_lightgray.svg",
                                        special_page_for_pm_launch: "sprint_board"
                                    },
                                    properties: {
                                        title: [
                                            [i(962299).A.formatMessage(o.sprintBoard_0)]
                                        ]
                                    },
                                    inMemoryRecordCache: a.inMemoryRecordCache,
                                    transaction: r
                                });
                                return (0, i(173157).z)({
                                    store: l,
                                    data: {
                                        parent_id: a.id,
                                        parent_table: a.table,
                                        alive: !0
                                    },
                                    transaction: r
                                }), i(970831).B.createChildStore(a, l.pointer)
                            }({
                                environment: t,
                                appParentStore: a,
                                transaction: n,
                                spaceId: l
                            });
                            return [i(11448).Lu, i(11448).JS, i(11448).vQ].forEach(e => {
                                ! function(e) {
                                    var t, o;
                                    let {
                                        collectionViewBlockStore: a,
                                        tasksBlockStore: r,
                                        viewUri: n,
                                        spaceId: l,
                                        transaction: s
                                    } = e, c = null == (t = r.getCollectionStores()) || null == (t = t.find(e => {
                                        var t;
                                        return (null == (t = e.getModel()) ? void 0 : t.getDatabaseType()) === i(11448).dC
                                    })) ? void 0 : t.pointer, d = null == (o = r.getFormat()) || null == (o = o.app_uri_map) ? void 0 : o[n];
                                    if (!d) return;
                                    let p = i(547131).p.createChildStore(a, {
                                        table: i(832375).Gy1,
                                        id: d,
                                        spaceId: l
                                    });
                                    c && p && function(e) {
                                        let {
                                            viewStore: t,
                                            transaction: o,
                                            tasksCollectionPointer: a,
                                            viewBlockStore: r
                                        } = e, n = t.getName(), l = t.getPageSort(), s = t.getFormat(), c = t.getKeyStore("query2").getValue(), d = t.clone(), p = t.getType();
                                        (0, i(173157).z)({
                                            store: d,
                                            data: {
                                                name: n,
                                                type: p,
                                                page_sort: l,
                                                format: { ...s,
                                                    collection_pointer: a
                                                },
                                                query2: c,
                                                alive: !0,
                                                parent_id: r.id,
                                                parent_table: r.table
                                            },
                                            transaction: o
                                        }), (0, i(135674).B)({
                                            parentStore: r.getCollectionViewsStore(),
                                            appendStore: d,
                                            transaction: o
                                        })
                                    }({
                                        viewStore: p,
                                        transaction: s,
                                        tasksCollectionPointer: c,
                                        viewBlockStore: a
                                    }), (0, i(505131).T)({
                                        collectionViewBlockStore: r,
                                        collectionViewStore: p,
                                        transaction: s
                                    })
                                }({
                                    collectionViewBlockStore: s,
                                    tasksBlockStore: r,
                                    viewUri: e,
                                    spaceId: l,
                                    transaction: n
                                })
                            }), s
                        }({
                            environment: t,
                            appParentStore: r,
                            tasksBlockStore: l,
                            transaction: n,
                            spaceId: c
                        });
                        return function(e) {
                            let {
                                environment: t,
                                spaceViewStore: o,
                                parentStore: a,
                                pageStore: r,
                                transaction: n,
                                location: l
                            } = e;
                            if (a.table === i(832375).evP) "prepend" === l.type && (0, i(181472).H)({
                                parentStore: a.getContentStore(),
                                prependStore: r,
                                before: l.before,
                                transaction: n
                            });
                            else if (a.table === i(832375).NXh) {
                                if (o.getSpaceId() !== a.id) return;
                                i(964232).yM({
                                    environment: t,
                                    spaceStore: a,
                                    spaceViewStore: o,
                                    pageStore: r,
                                    isPrivate: !0,
                                    transaction: n,
                                    location: l
                                })
                            } else a.table === i(832375).yKj ? i(89739).sP({
                                teamStore: a,
                                store: r,
                                transaction: n,
                                location: l
                            }) : (0, i(722371).HB)(a)
                        }({
                            environment: t,
                            spaceViewStore: a,
                            parentStore: r,
                            pageStore: p,
                            transaction: n,
                            location: s
                        }), p
                    }({
                        environment: t,
                        spaceViewStore: a,
                        appParentStore: r,
                        transaction: n,
                        tasksBlockStore: c,
                        location: {
                            type: "prepend",
                            before: d.id
                        }
                    })
            }
        },
        487016: (e, t, i) => {
            i.d(t, {
                Bi: () => l,
                My: () => n,
                ZM: () => c,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => d
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454);
            var o = () => i(388507),
                a = () => i(715144),
                r = () => i(717673);

            function n({
                transaction: e,
                collectionStore: t,
                propertyTemplates: i
            }) {
                var l, s;
                let c = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === c.length) return;
                let d = [];
                for (let e of i) {
                    let i = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    i && d.push({
                        property: i.id,
                        visible: !(0, o().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== d.length)
                    for (let t of c) {
                        let i = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            o = new Set(i.map(e => e.property)),
                            r = d.filter(e => !o.has(e.property));
                        0 !== r.length && (0, a().z)({
                            stores: [t],
                            update: {
                                table_properties: [...i, ...r]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: i
            }) {
                let o = [];
                for (let e of i) {
                    let i = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    i && o.push({
                        property: i.id,
                        visible: !0
                    })
                }
                let n = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(n.map(e => e.property)),
                    c = o.filter(e => !s.has(e.property));
                c.length && (0, a().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...n, ...c]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: o
            }) {
                if ("accepted_template" === o.type || "accepted_empty_collection" === o.type) {
                    let a = t.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        perform: a => {
                            let r = t.getTitleValue();
                            if ((0, i(173157).z)({
                                    store: t,
                                    transaction: a,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === o.type && !(0, i(247438).w9s)(r)) {
                                let n = i(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: o.blockId
                                }).getTitleStore();
                                n && i(41403).yr({
                                    environment: e,
                                    transaction: a,
                                    tokens: r,
                                    index: 0,
                                    store: n
                                })
                            }
                            let n = t.getParentStore();
                            if ((null == n ? void 0 : n.table) === i(682956).ev) {
                                let e = n.getContentIds();
                                (0, i(173157).z)({
                                    store: n,
                                    transaction: a,
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

            function c({
                environment: e,
                userAction: t,
                result: o,
                existingCollectionViewBlockStore: a,
                existingCollectionStore: r
            }) {
                if ("canceled" !== o.type) {
                    if ("accepted_empty_collection" === o.type && r) {
                        let a = r.getKeyStore("name"),
                            n = (0, i(247438).x9d)(o.newCollectionTitle);
                        if (a) {
                            let o = r.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: o ? {
                                    spaceWithId: o
                                } : void 0,
                                perform: t => i(41403).R9({
                                    environment: e,
                                    store: a,
                                    transaction: t,
                                    value: n
                                })
                            })
                        }
                    }
                    if (a) {
                        var n;
                        let e = null == (n = (0, i(444610).U)(a)) ? void 0 : n.settingsStore;
                        e && (0, i(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === o.type && null != a && a.isCollectionView() && !(null != a && a.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, i(444610).U)(a),
                            r = a.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === o.collectionId
                            });
                        if (!t || !r) return;
                        (0, i(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: r.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function d({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let o = t.id;
                if (!t.isDefined()) {
                    let a = await (0, i(389323).$)({
                        environment: e,
                        blockId: o
                    });
                    if (!a) return;
                    e = await i(274662).T({
                        environment: e,
                        newCurrentUserId: a
                    }), t = new(i(970831)).B(e, {
                        table: i(682956).ev,
                        id: o
                    }), await t.load()
                }
                let a = t.getSpaceId();
                if (!a) throw Error("Space ID not found for collection block");
                let r = (0, i(593303).k)(a);
                if (!r) throw Error(`Space view not found for space ID: ${a}`);
                let n = i(728372).AppStoreSidebarSpaceStore.state;
                (null == n ? void 0 : n.id) !== a && await (0, i(269948).y)({
                    environment: e,
                    spaceViewStore: r
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: o
                    } = await i(708370).t.load(), a = o(l.placeholder_workflow_template_id);
                    if (!a) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: r
                    } = await i(903673).O.load();
                    r({
                        environment: e,
                        collectionTemplate: a,
                        collectionViewBlockStore: t
                    })
                } else(0, i(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: i(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, i) => {
            i.d(t, {
                CA: () => n
            }), i(16280), i(898992), i(354520), i(581454);
            let o = Symbol("JSON Schema"),
                a = Symbol("JSON Schema Components"),
                r = Symbol("No JSON Schema"),
                n = (0, i(722371).MU)((0, i(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [a]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [a]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [a]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [a]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [a]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [a]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [a]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [a]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [a]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [a]: {}
                            },
                            i = e[0];
                        return "boolean" == typeof i ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof i ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [a]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[o],
                        [a]: e[o][a]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[o]).filter(e => e !== r),
                        [a]: Object.assign({}, ...e.map(e => e[o][a]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[o],
                        [a]: t[o][a]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: n
                    }) => ({
                        type: "object",
                        properties: (0, i(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[o] !== r).map(([e, t]) => [e, t[o]])),
                        ...n && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [a]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[o][a]))
                    }),
                    union: e => {
                        let t = (0, i(381453).hS)(e.map(e => e[o]).filter(e => e !== r), e => JSON.stringify(e)),
                            n = (0, i(381453).hS)(e.map(e => e[o][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...n)
                        } : {
                            anyOf: t,
                            [a]: Object.assign({}, ...n)
                        }
                    },
                    intersection: e => {
                        let t = (0, i(381453).hS)(e.map(e => e[o]).filter(e => e !== r), e => JSON.stringify(e)),
                            n = (0, i(381453).hS)(e.map(e => e[o][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...n)
                        } : {
                            allOf: t,
                            [a]: Object.assign({}, ...n)
                        }
                    },
                    gte: (e, t) => {
                        let i = e[o];
                        return i !== r ? { ...i,
                            minimum: t
                        } : i
                    },
                    gt: (e, t) => {
                        let i = e[o];
                        return i !== r ? { ...i,
                            exclusiveMinimum: t
                        } : i
                    },
                    lte: (e, t) => {
                        let i = e[o];
                        return i !== r ? { ...i,
                            maximum: t
                        } : i
                    },
                    lt: (e, t) => {
                        let i = e[o];
                        return i !== r ? { ...i,
                            exclusiveMaximum: t
                        } : i
                    },
                    maxLength: (e, t) => {
                        let i = e[o];
                        if (i === r) return i;
                        if ("type" in i) {
                            if ("string" === i.type) return { ...i,
                                maxLength: t
                            };
                            else if ("array" === i.type) return { ...i,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let i = e[o];
                        if (i === r) return i;
                        if ("type" in i) {
                            if ("string" === i.type) return { ...i,
                                minLength: t
                            };
                            else if ("array" === i.type) return { ...i,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[o];
                        if (t === r) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[o];
                        if (t === r) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, i(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, i(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var n;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [a]: {}
                                }, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [a]: {}
                                }],
                                [a]: t[a]
                            };
                            if (n = t, (0, i(722371).Gv)(n) && 0 === Object.keys(n).length) return t;
                            (0, i(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...r) => 1 === r.length && (0, i(722371).Gv)(r[0]) && ("id" in r[0] || "title" in r[0] || "description" in r[0] || "examples" in r[0]) ? (...n) => {
                    let {
                        description: l,
                        examples: s,
                        id: c,
                        title: d
                    } = r[0], p = { ...d && {
                            title: d
                        },
                        description: l,
                        ...s && {
                            examples: s
                        },
                        ...t(...n)
                    };
                    return c && (p = {
                        $ref: `#/components/schemas/${c}`,
                        [a]: { ...p[a],
                            [c]: p
                        }
                    }), {
                        [o]: p,
                        ...i(969475)[e](...n)
                    }
                } : {
                    [o]: t(...r),
                    ...i(969475)[e](...r),
                    describe: t => n[e]({
                        description: t
                    })(...r)
                }]));
            Symbol("Exact empty object ({})"), n.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        493526: (e, t, i) => {
            i.d(t, {
                c: () => a,
                t: () => r
            }), i(16280);
            let o = (0, i(109939).YK)({
                formDatabaseTitle: {
                    id: "newBlock.databaseInline.formDatabaseTitle",
                    defaultMessage: "New form"
                }
            });

            function a(e) {
                var t, o;
                let {
                    environment: a,
                    store: r,
                    viewType: n,
                    transaction: l
                } = e, s = null == (t = r.getBlockTitleStore()) ? void 0 : t.getValue();
                i(218744).default.checkGate({
                    gateName: "mobile_keep_template_gallery_open"
                }) && i(717376).A.state.open && i(717376).A.setState({
                    open: !1
                });
                let c = r.getSpaceId() ? ? (null == (o = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : o.getSpaceId()),
                    d = c ? a.idCreator.getSpaceIdCreatorSync(c) : void 0;
                (0, i(963771).initializeTemplate)({
                    environment: a,
                    sourceBlockId: "root",
                    targetBlockPointer: r.pointer,
                    sourceBlockSubtree: (0, i(412951).partialRecordMapToRecordMap)("chart" === n ? (0, i(312712).q)({
                        isInline: !1,
                        viewType: n,
                        chartType: e.chartType,
                        name: (0, i(247438).w9s)(s) ? void 0 : s
                    }) : (0, i(312712).q)({
                        isInline: !1,
                        viewType: n,
                        name: (0, i(247438).w9s)(s) ? void 0 : s
                    })),
                    targetRecordCache: r.inMemoryRecordCache,
                    transaction: l,
                    deepCopyTransclusionContainers: !0,
                    resolveTemplateVariables: !0,
                    spaceIdCreator: d
                }), i(831983).pd({
                    environment: a,
                    block: r,
                    blockType: "collection_view_page",
                    transaction: l
                }), s && i(41403).R9({
                    environment: a,
                    store: r.getBlockTitleStore(),
                    value: s,
                    transaction: l
                }), i(374176).default.afterNextFlush(() => {
                    let e = i(496704).K.findCollectionViewBlockFromStore(r);
                    if (e && "handleCreated" in e) {
                        var t;
                        null == (t = e.handleCreated) || t.call(e)
                    }
                });
                let p = r.getCollectionStoreIfSingleSource();
                p ? i(549960).vH(a, {
                    from: "template_picker",
                    type: "collection_view_page",
                    creating_block_id: r.id,
                    is_full_screen: !0,
                    view_type: n,
                    collection_id: p.id
                }) : (i(773352).log({
                    level: "info",
                    from: "initializeViewActions",
                    type: "track_create_block_missing_collection_id",
                    data: {
                        miscDataToConvertToString: {
                            creating_block_id: r.id,
                            is_full_screen: !0,
                            view_type: n
                        }
                    }
                }), i(549960).vH(a, {
                    from: "template_picker",
                    type: "collection_view_page",
                    creating_block_id: r.id,
                    is_full_screen: !0,
                    view_type: n,
                    collection_id: ""
                }))
            }
            async function r(e) {
                var t, a, r;
                let {
                    environment: n,
                    store: l
                } = e, s = null == (t = l.getBlockTitleStore()) ? void 0 : t.getValue(), {
                    formsEditorDependency: c
                } = await Promise.resolve().then(i.bind(i, 215136)), {
                    formEditorActions: d
                } = await c.load(), p = l.getSpaceId() ? ? (null == (a = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : a.getSpaceId()) ? ? (null == (r = (0, i(328765).S)()) ? void 0 : r.id), u = p ? n.idCreator.getSpaceIdCreatorSync(p) : void 0;
                (0, i(377796).createAndCommit)({
                    userAction: "HorizontalTemplatePicker.createForm",
                    environment: n,
                    canUndo: !0,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    perform: e => {
                        (0, i(963771).initializeTemplate)({
                            environment: n,
                            sourceBlockId: "root",
                            targetBlockPointer: l.pointer,
                            sourceBlockSubtree: (0, i(412951).partialRecordMapToRecordMap)((0, i(737270).m)({
                                isInline: !1,
                                name: (0, i(247438).w9s)(s) ? (0, i(247438).x9d)(i(962299).A.formatMessage(o.formDatabaseTitle)) : s
                            })),
                            targetRecordCache: l.inMemoryRecordCache,
                            transaction: e,
                            deepCopyTransclusionContainers: !0,
                            resolveTemplateVariables: !0,
                            spaceIdCreator: u
                        }), i(831983).pd({
                            environment: n,
                            block: l,
                            blockType: "collection_view_page",
                            transaction: e
                        });
                        let t = l.getCollectionStoreIfSingleSource();
                        if (!t) throw Error("Collection store not found");
                        let a = t.getSchema();
                        if (!a) throw Error("Schema not found");
                        let r = d.createCollectionFormEditorView({
                            environment: n,
                            transaction: e,
                            collectionViewBlockStore: l,
                            collectionId: t.id,
                            schema: a,
                            initializeWithAllDefaultQuestions: !0
                        });
                        d.createResponsesCollectionView({
                            environment: n,
                            transaction: e,
                            collectionViewBlockStore: l,
                            collectionStore: t,
                            schema: a
                        }), i(549960).vH(n, {
                            from: "template_picker",
                            type: "form",
                            creating_block_id: l.pointer.id,
                            form_id: null == r ? void 0 : r.formId,
                            view_id: l.id
                        })
                    }
                })
            }
        },
        497736: (e, t, i) => {
            i.d(t, {
                vF: () => g,
                Su: () => y,
                cG: () => s,
                UY: () => _,
                T5: () => d
            });
            var o = i(296540);
            let a = i.p + "edfba4a6d1ff7acd.png",
                r = i.p + "c9223887dcb57b7d.gif",
                n = i.p + "7e9cbd56b1eca7b9.gif";
            var l = i(474848);

            function s(e) {
                let {
                    variant: t,
                    style: o = {}
                } = e;
                return (0, l.jsx)("div", {
                    style: o,
                    children: (0, l.jsx)(i(4458).fI, {
                        alignItems: "center",
                        children: (0, l.jsx)(i(971375).x, {
                            variant: t,
                            shadowVariant: "light"
                        })
                    })
                })
            }
            let c = {
                marginInlineEnd: 8
            };

            function d(e) {
                let {
                    variant: t
                } = e;
                return (0, l.jsx)("div", {
                    style: c,
                    children: (0, l.jsx)(u, {
                        variant: t
                    })
                })
            }
            let p = {
                marginInlineStart: 8
            };

            function u(e) {
                let {
                    variant: t
                } = e, a = "dark" === (0, i(960253).e)(), [s, c] = (0, o.useState)(!0);
                (0, o.useEffect)(() => {
                    setTimeout(() => {
                        c(!1)
                    }, 6e3)
                }, []);
                let d = (0, o.useMemo)(() => {
                    if (s) return a ? r : n
                }, [a, s]);
                return (0, l.jsx)("div", {
                    style: p,
                    children: (0, l.jsx)(i(971375).x, {
                        variant: t,
                        shadowVariant: "light",
                        imgSource: d
                    })
                })
            }
            let m = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: i(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${i(632079).Tj.border.primary}`
                }
            };

            function g() {
                return (0, l.jsx)("img", {
                    style: m.faceImgStyles,
                    src: a,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
            let f = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: i(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${i(632079).Tj.border.primary}`
                }
            };

            function y() {
                return (0, l.jsx)("img", {
                    style: f.faceImgStyles,
                    src: a,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
            let v = {
                faceImgStyles: {
                    width: 20,
                    height: 20,
                    background: i(632079).Tj.assistantCornerButtonBackground,
                    borderRadius: "50%",
                    border: `1px solid ${i(632079).Tj.border.primary}`,
                    marginInlineStart: -2,
                    marginInlineEnd: 2
                }
            };

            function _() {
                return (0, l.jsx)("img", {
                    style: v.faceImgStyles,
                    src: a,
                    role: "presentation",
                    alt: "Notion AI Face"
                })
            }
        },
        498348: (e, t, i) => {
            function o(e) {
                let t = window.location.href;
                return i(758654).O$(t, {
                    tg: e.templateGalleryItem
                })
            }

            function a(e) {
                let t;
                return e instanceof i(258710).s ? t = e.getBlockId() : "type" in e ? (e.type, t = e.template.rootId) : t = e.rootId, t
            }

            function r(e) {
                let t = i(849917).locale && "en-us" !== i(849917).locale.toLocaleLowerCase() ? `/${i(849917).locale.toLowerCase()}` : "",
                    o = void 0 !== e ? `${t}${i(168962).JZ.templates}/${encodeURIComponent(e)}` : `${t}${i(168962).JZ.templates}`;
                return `${i(986939).A.domainBaseUrl}${o}`
            }

            function n(e) {
                if (!e) return "";
                try {
                    let i = JSON.parse(e);
                    if ("text" === i.content[0].content[0].nodeType) {
                        var t;
                        return ((null == i || null == (t = i.content) || null == (t = t[0]) || null == (t = t.content) || null == (t = t[0]) ? void 0 : t.value) || "").replace(/^(#{2,6})\s+/gm, "# ")
                    }
                } catch (e) {
                    return ""
                }
            }
            i.d(t, {
                $Y: () => n,
                Px: () => r,
                Up: () => o,
                dY: () => a
            })
        },
        523713: (e, t, i) => {
            i.d(t, {
                k: () => o
            });

            function o(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "select_template",
                        eventProperties: {
                            is_keyboard: t.is_keyboard,
                            from: t.from,
                            template_type: t.template_type,
                            event_id: t.event_id
                        }
                    }
                })
            }
        },
        524242: (e, t, i) => {
            i.d(t, {
                Is: () => a,
                LS: () => l,
                NH: () => s,
                QA: () => n,
                _b: () => r
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(296540);
            var o = i(474848);

            function a(e) {
                let t = (0, i(457915).g)(e) ? ? [],
                    o = [];
                for (let i of t) {
                    if (!("block" === i.table && !0 === i.isTemplate() && i.getFormat().automation_id && i.id !== e.id)) continue;
                    let t = i.getAutomationStore();
                    if (t) {
                        if (!t.isReady()) return {
                            automationStoresReady: !1
                        };
                        void 0 !== t.getRecurrence() && t.isDefined() && o.push(t.getModel())
                    }
                }
                return {
                    automationStoresReady: !0,
                    ...(0, i(832248).jX)(o)
                }
            }

            function r(e) {
                switch (e) {
                    case "hour":
                        return (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Duplicate hourly",
                            id: "database.templatePickerItem.recurrenceFrequency.hourly"
                        });
                    case "day":
                        return (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Duplicate daily",
                            id: "database.templatePickerItem.recurrenceFrequency.daily"
                        });
                    case "week":
                        return (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Duplicate weekly",
                            id: "database.templatePickerItem.recurrenceFrequency.weekly"
                        });
                    case "month":
                        return (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Duplicate monthly",
                            id: "database.templatePickerItem.recurrenceFrequency.monthly"
                        });
                    case "year":
                        return (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Duplicate yearly",
                            id: "database.templatePickerItem.recurrenceFrequency.yearly"
                        });
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function n() {
                return {
                    start_date: i(906745).DateTime.local().plus({
                        days: 1
                    }).set({
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0
                    }).toMillis(),
                    timezone: (0, i(25825).dB)(),
                    hour: 0,
                    minute: 0,
                    frequency: "day",
                    interval: 1
                }
            }

            function l(e) {
                let {
                    recurrence: t,
                    intl: o,
                    leadingPhrase: a
                } = e;
                return (0, i(832248).X3)({ ..."month" === t.frequency ? { ...t,
                        monthly_restriction: void 0
                    } : t,
                    weekdays: void 0,
                    hour: 0,
                    minute: 0,
                    end_condition: void 0
                }).toText(e => {
                    switch (e) {
                        case "every":
                            if (void 0 === a) return "";
                            if ("every" === a) return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.every",
                                defaultMessage: "every"
                            });
                            if ("duplicate every" === a) return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.duplicateEvery",
                                defaultMessage: "duplicate every"
                            });
                            (0, i(722371).HB)(a);
                            break;
                        case "day":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.day",
                                defaultMessage: "day"
                            });
                        case "hour":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.hour",
                                defaultMessage: "hour"
                            });
                        case "hours":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.hours",
                                defaultMessage: "hours"
                            });
                        case "days":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.days",
                                defaultMessage: "days"
                            });
                        case "week":
                            {
                                let e = (null == t ? void 0 : t.weekdays) || [];
                                if (5 === e.length && (0, i(222869)._)(new Set(e), new Set(["MO", "TU", "WE", "TH", "FR"]))) return o.formatMessage({
                                    id: "database.templatePickerItem.duplicateMenuLabel.weekday",
                                    defaultMessage: "weekday"
                                });
                                return o.formatMessage({
                                    id: "database.templatePickerItem.duplicateMenuLabel.week",
                                    defaultMessage: "week"
                                })
                            }
                        case "weeks":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.weeks",
                                defaultMessage: "weeks"
                            });
                        case "month":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.month",
                                defaultMessage: "month"
                            });
                        case "months":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.months",
                                defaultMessage: "months"
                            });
                        case "year":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.year",
                                defaultMessage: "year"
                            });
                        case "years":
                            return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.years",
                                defaultMessage: "years"
                            });
                        default:
                            return e.toString()
                    }
                }).trim()
            }

            function s(e) {
                let t = e.getRecurrence();
                return !!(e.isTriggerType("recurrence") && t && "disabled_recurrence_ended" === e.getStatus())
            }
        },
        532559: (e, t, i) => {
            function o(e) {
                let {
                    environment: t,
                    store: o,
                    transaction: a,
                    preventTextSelection: r,
                    onTextSelection: n
                } = e;
                i(218744).default.checkGate({
                    gateName: "mobile_keep_template_gallery_open"
                }) && i(717376).A.state.open && i(717376).A.setState({
                    open: !1
                });
                let l = (() => {
                    let e = o.getContentStores();
                    if (1 === e.length && e[0].isEmptyTextBlock()) return e[0];
                    let r = i(124937).Wv({
                            environment: t,
                            type: "text",
                            inMemoryRecordCache: o.inMemoryRecordCache,
                            transaction: a,
                            spaceId: o.pointer.spaceId
                        }),
                        n = (0, i(135674).B)({
                            parentStore: o.getContentStore(),
                            appendStore: r,
                            transaction: a
                        }).childStore;
                    return i(549960).vH(t, {
                        from: "template_picker",
                        type: "text",
                        creating_block_id: r.id,
                        parent_collection_id: r.getParentCollectionIdUpToTwoLevels()
                    }), n
                })();
                return r || i(374176).default.afterNextFlush(() => {
                    (0, i(182553).h)({
                        environment: t,
                        store: l
                    }), (0, i(940763).e)({
                        store: l.getBlockTitleStore()
                    }), null == n || n()
                }), l
            }

            function a(e) {
                let {
                    environment: t,
                    store: a,
                    transaction: r
                } = e;
                (0, i(291876).v)({
                    store: a,
                    transaction: r
                }), o({
                    environment: t,
                    store: a,
                    transaction: r
                })
            }
            i.d(t, {
                T: () => a,
                n: () => o
            })
        },
        589563: (e, t, i) => {
            i.d(t, {
                Ah: () => c,
                Dk: () => n,
                Iv: () => s,
                SF: () => l,
                YO: () => u,
                _f: () => g,
                c_: () => a,
                dW: () => p,
                gW: () => r,
                sp: () => f,
                vN: () => d
            }), i(16280), i(944114), i(898992), i(354520), i(803949), i(581454), i(737550);
            var o = () => i(722371);

            function a(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function r(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "delete_automation_step",
                    properties: t
                })
            }

            function n(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_create",
                    properties: t
                })
            }

            function l(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_update",
                    properties: t
                })
            }

            function s(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_delete",
                    properties: t
                })
            }

            function c(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_enable",
                    properties: t
                })
            }

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_disable",
                    properties: t
                })
            }

            function p(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_create",
                    properties: t
                })
            }

            function u(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_delete",
                    properties: t
                })
            }

            function m(e) {
                let {
                    formulaAnalyticsModule: t,
                    formulasModule: a,
                    formulaTypecheckContextValues: r,
                    getRecordModel: n,
                    spaceId: l,
                    value: s,
                    featureGates: c
                } = e;
                if ("formula" === s.type) {
                    if (!(0, o().O9)(s.value)) return;
                    let e = i(300441).Q.unwrapOr(a.parseFormulaInputToAst(s.value), void 0);
                    if (e) {
                        let o = a.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, i(297493).zg)(n),
                            spaceId: l,
                            valueTypes: r,
                            featureGates: c
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: n,
                                typecheckContextValues: r
                            }),
                            formula_return_type: o.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: n,
                                typecheckContextValues: r
                            })
                        }
                    }
                } else if ("simple" === s.type) {
                    if (!(0, o().O9)(s.value)) return;
                    return t.getSimpleFormulaAnalytics(s.value, {
                        getRecordModel: n,
                        typecheckContextValues: r
                    })
                } else(0, o().HB)(s.type)
            }

            function g(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c,
                    simpleFormulasModule: d
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: i,
                            formulaAnalyticsModule: a,
                            formulasModule: r,
                            formulaTypecheckContextValues: n,
                            getRecordModel: l,
                            featureGates: s
                        } = e,
                        c = i.getConfig(),
                        d = [],
                        p = null == c ? void 0 : c.collection,
                        u = null == c ? void 0 : c.properties;
                    if ((0, o().O9)(p) && (0, o().O9)(u) && u.length > 0) {
                        let e = l(p),
                            f = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, o().O9)(f) && (d = u.map(e => {
                            var t;
                            return (null == (t = f[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let y = null == c ? void 0 : c.values;
                        if (r && (0, o().O9)(y))
                            for (let e of (t = [], u)) {
                                var g;
                                let o = null == (g = y[e]) ? void 0 : g.value;
                                if (!o) continue;
                                let c = m({
                                    formulaAnalyticsModule: a,
                                    formulasModule: r,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: n,
                                    spaceId: i.spaceId,
                                    value: o,
                                    featureGates: s
                                });
                                c && t.push(c)
                            }
                    }
                    return {
                        automation_action_id: i.pointer.id,
                        property_formula_stats: t,
                        property_types: d,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: i,
                        formulasModule: a,
                        formulaTypecheckContextValues: r,
                        getRecordModel: n,
                        featureGates: l
                    } = e, s = t.getConfig(), c = [];
                    if (a && (0, o().O9)(s) && s.text) {
                        let e = m({
                            formulasModule: a,
                            formulaAnalyticsModule: i,
                            getRecordModel: n,
                            formulaTypecheckContextValues: r,
                            spaceId: t.spaceId,
                            value: s.text,
                            featureGates: l
                        });
                        e && c.push(e)
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: c,
                        type: "modal_confirmation"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, a;
                    let {
                        automationActionModel: r,
                        formulaAnalyticsModule: n,
                        formulasModule: l,
                        formulaTypecheckContextValues: s,
                        getRecordModel: c,
                        featureGates: d,
                        simpleFormulasModule: p
                    } = e, u = {
                        automation_action_id: r.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, g = r.getConfig();
                    if (!(0, o().O9)(g)) return u;
                    if ((0, o().O9)(g.target)) {
                        if ("formula" === g.target.type && (0, o().O9)(g.target.value)) {
                            if (u.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, i(247438).Fbh)(g.target.value.value).length,
                                    numFormulaContextTargets: p.getReferencedContextValueIds(g.target.value).length
                                }, l) {
                                let e = m({
                                    formulasModule: l,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: c,
                                    formulaTypecheckContextValues: s,
                                    spaceId: r.spaceId,
                                    value: g.target.value,
                                    featureGates: d
                                });
                                e && (u.formula_stats ? ? = [], u.formula_stats.push(e))
                            }
                        } else if ("property" === g.target.type && (0, o().O9)(g.target.propertyId) && (0, o().O9)(g.target.collectionPointer)) {
                            let e = c(g.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, o().O9)(t) && (u.targetData = {
                                type: "property",
                                propertyType: null == (a = t[g.target.propertyId]) ? void 0 : a.type
                            })
                        }
                    }
                    if ((0, o().O9)(null == (t = g.notification_message) ? void 0 : t.value) && (u.messageCharacterCount = (0, i(247438).FAw)(g.notification_message.value), l)) {
                        let e = m({
                            formulasModule: l,
                            formulaAnalyticsModule: n,
                            getRecordModel: c,
                            formulaTypecheckContextValues: s,
                            spaceId: r.spaceId,
                            value: g.notification_message,
                            featureGates: d
                        });
                        e && (u.formula_stats ? ? = [], u.formula_stats.push(e))
                    }
                    return u
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c,
                    simpleFormulasModule: d
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, a, r, n, l, s, c;
                    let {
                        automationActionModel: d,
                        formulaAnalyticsModule: p,
                        formulasModule: u,
                        formulaTypecheckContextValues: g,
                        getRecordModel: f,
                        featureGates: y
                    } = e, v = d.getConfig();
                    if (!(0, o().O9)(v)) return {
                        automation_action_id: d.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let _ = Object.fromEntries(Object.entries(v || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var i;
                                return [e, !!(null == t || null == (i = t.value) ? void 0 : i.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: b,
                            cc: h,
                            bcc: k
                        } = v,
                        S = [...(null == b || null == (t = b.value) ? void 0 : t.value) || [], ...(null == h || null == (a = h.value) ? void 0 : a.value) || [], ...(null == k || null == (r = k.value) ? void 0 : r.value) || []],
                        w = [...(0, i(247438).Fbh)(S).map(e => f({
                            table: i(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(o().O9), ...(0, i(801109).C3)((0, i(247438).k4p)(S))],
                        T = (0, i(763230).Tr)(w.map(e => e.split("@")[1])),
                        A = [null == (n = v.to) ? void 0 : n.value, null == (l = v.cc) ? void 0 : l.value, null == (s = v.bcc) ? void 0 : s.value, null == (c = v.reply_to) ? void 0 : c.value, v.from_name, v.email_subject, v.email_body].map(e => {
                            if (u && (0, o().O9)(e)) return m({
                                formulaAnalyticsModule: p,
                                formulasModule: u,
                                getRecordModel: f,
                                formulaTypecheckContextValues: g,
                                spaceId: d.spaceId,
                                value: e,
                                featureGates: y
                            })
                        }).filter(o().O9);
                    return {
                        automation_action_id: d.pointer.id,
                        fields: _,
                        formula_stats: A,
                        recipient_domains: T,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: a,
                        formulaAnalyticsModule: r,
                        formulasModule: n,
                        formulaTypecheckContextValues: l,
                        getRecordModel: s,
                        featureGates: c
                    } = e, d = t.getConfig(), p = [], u = [], g = [];
                    if ((0, o().O9)(d) && (0, o().O9)(d.target) && (0, o().O9)(d.properties) && d.properties.length > 0) {
                        let e;
                        if ("variable" === d.target.type) {
                            let t = (0, i(297493).y5)(d.target.id);
                            if ("action" === t.source) {
                                let t = (0, i(33529).y)({
                                    actionModels: a,
                                    id: d.target.id
                                }).collectionPointer;
                                if ((0, o().O9)(t)) {
                                    let i = s(t);
                                    e = null == i ? void 0 : i.getNormalizedSchema(s)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, i(297493).IV)(l, d.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, o().O9)(t.type.collection)) {
                                    let i = s(t.type.collection);
                                    e = null == i ? void 0 : i.getNormalizedSchema(s)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === d.target.type) {
                            let t = s(d.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(s)
                        }(0, o().O9)(e) && d.properties.forEach(i => {
                            let a = e[i];
                            if ((0, o().O9)(a) && (p.push(a.type), n && (0, o().O9)(d.values))) {
                                let e = d.values[i];
                                if ((0, o().O9)(e) && (u.push({
                                        type: a.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let i = m({
                                        formulasModule: n,
                                        formulaAnalyticsModule: r,
                                        getRecordModel: s,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: c
                                    });
                                    i && g.push(i)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: u,
                        property_formula_stats: g,
                        property_types: p,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: i,
                        formulasModule: a,
                        formulaTypecheckContextValues: r,
                        getRecordModel: n,
                        featureGates: l
                    } = e, s = t.getConfig(), c = [];
                    if (a && (0, o().O9)(s) && s.values) {
                        for (let e of Object.values(s.values))
                            if (e.value) {
                                let o = m({
                                    formulasModule: a,
                                    formulaAnalyticsModule: i,
                                    getRecordModel: n,
                                    formulaTypecheckContextValues: r,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                o && c.push(o)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: c,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: r,
                    formulasModule: n,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: c
                }) : t.isType("http_request") ? {
                    automation_action_id: t.pointer.id,
                    type: "http_request"
                } : t.isType("publish_site") ? {
                    automation_action_id: t.pointer.id,
                    type: "publish_site"
                } : t.isType("worker") ? {
                    automation_action_id: t.pointer.id,
                    type: "worker"
                } : t.isType("archive_pages") ? {
                    automation_action_id: t.pointer.id,
                    type: "archive_pages"
                } : void(0, o().HB)(t)
            }

            function f(e) {
                var t, a;
                let r, n, l, {
                        automationModel: s,
                        builderType: c = "sidebar",
                        formulaAnalyticsModule: d,
                        formulasModule: p,
                        formulaTypecheckContextValues: u,
                        getRecordModel: m,
                        featureGates: f,
                        simpleFormulasModule: y,
                        source: v
                    } = e,
                    _ = [],
                    b = s.getActionPointers().map(e => m(e)).filter(o().O9);
                for (let e of s.getActionPointers()) {
                    let t = m(e);
                    (0, o().O9)(t) && _.push(g({
                        automationActionModel: t,
                        automationActionModels: b,
                        formulaAnalyticsModule: d,
                        formulasModule: p,
                        formulaTypecheckContextValues: u,
                        getRecordModel: m,
                        featureGates: f,
                        simpleFormulasModule: y
                    }))
                }
                let h = [];
                if (s.isEventType()) {
                    let e = s.getEventConfiguration(),
                        a = m(s.getParentPointer());
                    r = s.getParentId();
                    let c = s.getEventConfiguration();
                    if ((null == (t = c.source) ? void 0 : t.type) === "collection_view") {
                        let e = m(c.source.pointer);
                        (null == e ? void 0 : e.parent_table) === i(682956).ev && (l = null == e ? void 0 : e.parent_id), n = null == c ? void 0 : c.source.pointer.id
                    }
                    let d = null == a ? void 0 : a.getNormalizedSchema(m);
                    if ((0, o().O9)(d)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: i
                        } = e;
                        if (t && h.push({
                                type: "page"
                            }), "any" === i.type) h.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === i.type) h.push({
                            condition: "none",
                            type: "property"
                        });
                        else {
                            let e = [];
                            "some" === i.type ? e = i.some ? ? [] : "all" === i.type && (e = i.all ? ? []);
                            let t = [],
                                a = [];
                            e.forEach(e => {
                                var i;
                                let r = null == (i = d[e.property]) ? void 0 : i.type;
                                (0, o().O9)(r) && (t.push({
                                    type: r,
                                    operator: e.filter.operator
                                }), a.push(r))
                            }), h.push({
                                condition: i.type,
                                property_configs: t,
                                property_types: a,
                                type: "property"
                            })
                        }
                    }
                } else s.isButtonType() ? h.push({
                    type: "button"
                }) : s.isRecurrenceType() ? h.push({
                    type: "recurrence",
                    frequency: null == (a = s.getTrigger().recurrence) ? void 0 : a.frequency
                }) : (0, o().HB)(s);
                return {
                    automation_actions: _,
                    automation_id: s.id,
                    automation_triggers: h,
                    collection_id: r,
                    collection_view_id: n,
                    collection_view_block_id: l,
                    builder_type: c,
                    source: v
                }
            }
        },
        592570: (e, t, i) => {
            function o(e) {
                let {
                    persona: t,
                    environment: o
                } = e, a = i(962299).A.getIntl();
                return (0, i(301755).D)(i(218744).default, t).map(e => {
                    let t = (0, i(322095).B)(e, a);
                    return {
                        name: t.name,
                        icon: e.emoji || e.icon || void 0,
                        onClick: () => {
                            let e;
                            e = (0, i(498348).Up)({
                                templateGalleryItem: t.rootId
                            }), (0, i(79266).navigate)({
                                environment: o,
                                url: e
                            })
                        }
                    }
                })
            }

            function a(e) {
                let t = (0, i(879318).un)(e);
                return (0, i(879318).Iw)(e).map(e => {
                    let o = t[e],
                        a = i(310213).bJ[e];
                    return {
                        category: e,
                        sectionHeaderMessage: a,
                        templates: o
                    }
                })
            }
            i.r(t), i.d(t, {
                getMobilePreviewTemplates: () => a,
                getSuggestedTemplatesForSearch: () => o
            }), i(581454)
        },
        598974: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                notionTemplateIcon: () => r
            }), i(296540);
            var o = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            fill: "#FFB110",
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            fill: "#097FE8",
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, o.jsx)("path", {
                            fill: "#F64932",
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                r = (0, i(104509).wt)("notionTemplate", a, "default")
        },
        605263: (e, t, i) => {
            i.d(t, {
                K4: () => s,
                To: () => u,
                fi: () => c,
                q8: () => l,
                u: () => n
            }), i(16280), i(18107), i(967357);
            var o = i(296540),
                a = i(474848);
            let r = (0, o.createContext)({
                ancestors: []
            });

            function n(e) {
                let {
                    automationStore: t,
                    children: n,
                    contextType: l,
                    collectionStore: s,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: u,
                    collectionViewStore: m,
                    enableExistenceGuarantees: g
                } = e, f = (0, i(533992).v3)(), y = (0, i(109939).tz)(), {
                    value: v
                } = (0, i(815048).fJ)(i(864850).T.formulas), {
                    value: _
                } = (0, i(815048).fJ)(i(879267).QV.automationTypecheck), b = (0, i(470569).o)(t), h = (0, i(67499).S)(), k = (0, i(682985).K8)(() => v ? _ ? function(e) {
                    let {
                        environment: t,
                        automationStore: o,
                        automationTypecheckModule: a,
                        contextType: r,
                        formulasModule: n,
                        intl: l,
                        subscriptionInfo: s,
                        pageStore: c,
                        enableExistenceGuarantees: u
                    } = e, m = u ? d.get(o) : d.get(o) ? ? p.get(o);
                    if (m) return m;
                    let g = new(i(345426)).ComputedStore(() => {
                        let e = o.getTriggerType(),
                            d = r;
                        return (0, i(722371).O9)(e) && (0, i(432705).x2)(e) && (d = (0, i(432705).H8)(e)), (0, i(100197).Z)({
                            environment: t,
                            automationStore: o,
                            automationTypecheckModule: a,
                            contextType: d,
                            formulasModule: n,
                            intl: l,
                            subscriptionInfo: s,
                            pageStore: c,
                            enableExistenceGuarantees: u
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return u && d.set(o, g), p.set(o, g), g
                }({
                    automationStore: t,
                    automationTypecheckModule: _,
                    contextType: l,
                    environment: f,
                    formulasModule: v,
                    intl: y,
                    subscriptionInfo: b,
                    pageStore: "button_block" === l ? null == h ? void 0 : h.pageStore : void 0,
                    enableExistenceGuarantees: g
                }).state : {
                    error: new(i(600005)).N9("Missing automation dependency")
                } : {
                    error: new(i(600005)).N9("Missing formulas dependency")
                }, [f, t, _, l, v, y, b, null == h ? void 0 : h.pageStore, g]), S = (0, o.useContext)(r), w = (0, o.useMemo)(() => 0 === S.ancestors.length ? [{
                    automationStore: t,
                    contextType: l,
                    typecheckResult: k,
                    collectionStore: s,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: u,
                    collectionViewStore: m
                }] : [...S.ancestors, {
                    automationStore: t,
                    contextType: l,
                    typecheckResult: k,
                    collectionStore: s,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: u,
                    collectionViewStore: m
                }], [S, t, l, k, s, c, u, m]), T = (0, o.useMemo)(() => ({
                    ancestors: w,
                    enableExistenceGuarantees: g
                }), [w, g]);
                return (0, a.jsx)(r.Provider, {
                    value: T,
                    children: n
                })
            }

            function l() {
                let e = (0, o.useContext)(r).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function s() {
                return (0, o.useContext)(r).ancestors.at(-1)
            }

            function c() {
                return (0, o.useContext)(r).enableExistenceGuarantees
            }
            r.displayName = "AutomationContext", r.Consumer;
            let d = new WeakMap,
                p = new WeakMap;

            function u(e) {
                var t;
                return null == (t = d.get(e)) ? void 0 : t.state
            }
        },
        609328: (e, t, i) => {
            i.d(t, {
                P: () => r
            }), i(944114), i(296540);
            var o = i(474848);
            let a = (0, i(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function r({
                environment: e,
                title: t,
                ...n
            }) {
                var l, s, c;
                let d = [],
                    p = null == (l = n.error) ? void 0 : l.stack;
                if (p) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (c = s.terminate) || c.call(s)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, i(969899).Nu)())({
                                environment: e,
                                stringValue: p,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${p}
		</code></pre>`,
                                copiedMessage: a.errorStacktraceCopied
                            })
                        }
                    })
                }
                d.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, o.jsx)(i(109939).sA, { ...i(647095)._0.dismissButtonLabel
                    }),
                    onAccept: i(763230).D_
                }), i(647095).ui({
                    message: t,
                    description: (0, o.jsx)(i(149795).dD, { ...n
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        623644: (e, t, i) => {
            i.d(t, {
                NX: () => a,
                gp: () => n,
                h9: () => r,
                i6: () => s,
                rj: () => l,
                tw: () => o
            }), i(581454);
            let o = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                a = ["2022-06-28", "2025-09-03", "2026-03-11"],
                r = "2026-03-11",
                n = "2022-06-28",
                l = "2026-03-11";
            i(489561).CA.literals(...o);
            let s = "2025-09-03"
        },
        641993: (e, t, i) => {
            i.d(t, {
                Q: () => r,
                a: () => n
            });
            var o, a = () => i(546605);
            let r = ((o = {})[o.Left = 0] = "Left", o[o.Right = 1] = "Right", o);
            class n extends a().Store {
                getInitialState() {
                    return {
                        dayStoreMap: new Map,
                        isDragging: !1,
                        startingMonth: 0
                    }
                }
            }
        },
        642138: (e, t, i) => {
            i.d(t, {
                E: () => o
            });

            function o(e, t) {
                var o;
                if (!t || !(0, i(484712).U)(t)) return !1;
                let a = null == (o = e.getTopLevelAncestorBlockStore()) ? void 0 : o.id;
                return !!a && !!t.getPrivatePageIds().includes(a)
            }
        },
        646220: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                notionTemplateTintableIcon: () => r
            }), i(296540);
            var o = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                r = (0, i(104509).wt)("notionTemplateTintable", a, "tintable")
        },
        661044: (e, t, i) => {
            function o(e, t = !0) {
                t && function(e, t) {
                    if ((0, i(730994).Ku)(e), ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && ("results" === t.stage || "initialPrompt" === t.stage) && ("textSelection" === t.context.type || "cursor" === t.context.type)) {
                        let o = t.context.textSelection;
                        i(374176).default.afterNextFlush(() => {
                            (0, i(726923).setMultiSelection)({
                                multiSelection: o
                            }),
                            function(e) {
                                let {
                                    multiSelection: t,
                                    environment: o
                                } = e;
                                if (void 0 === t.start || void 0 === t.end || !Number.isFinite(t.start.index) || !Number.isFinite(t.end.index)) return;
                                let a = i(521595).n.findNodeFromStore(t.start.store),
                                    r = i(521595).n.findNodeFromStore(t.end.store);
                                if (!a || !r) return;
                                let n = (0, i(536614).vA)(a, t.start.index),
                                    l = (0, i(536614).vA)(r, t.end.index),
                                    s = document.createRange();
                                s.setStart(n.container, n.offset), s.setEnd(l.container, l.offset), i(239134).set(s, o.device)
                            }({
                                multiSelection: o,
                                environment: e
                            })
                        })
                    }
                }(e, i(304636).default.state), i(304636).default.setState({
                    type: "closed"
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    from: o,
                    forceAgentWriter: a
                } = e, {
                    context: r,
                    prefilledValue: n,
                    sessionId: l
                } = e, {
                    assistantDependency: s
                } = await Promise.resolve().then(i.bind(i, 310639)), c = await s.load();
                if (!await c.assistantMenuActions.closeAssistantRightHandSideMenu({
                        environment: t
                    })) return;
                let d = {
                    type: "closed"
                };
                if ("closed" === i(304636).default.state.type && (r || (r = (0, i(420459).G4)()), r))
                    if (a || (0, i(828294).a)("agent_writer")) d = {
                        type: "agentCompletionPopup",
                        stage: "initialPrompt",
                        context: r,
                        from: o,
                        prefilledValue: e.prefilledTextValue ? ? (0, i(247438).x9d)(n ? ? ""),
                        pendingSkill: e.agentPrebuiltPromptType,
                        autoSubmit: e.autoSubmit,
                        onAccept: e.onAccept,
                        acceptButtonTooltipOverride: e.acceptButtonTooltipOverride
                    };
                    else {
                        var p;
                        n || (n = ""), l || (l = (0, i(818963).gC)()), d = {
                            type: "assistantCompletionPopup",
                            stage: "initialPrompt",
                            context: r,
                            from: o,
                            prefilledValue: n,
                            sessionId: l,
                            loading: !1,
                            hasErrored: !1
                        };
                        let e = (0, i(974410).f)(null == (p = r) ? void 0 : p.currentPage);
                        e && t.api.callApi({
                            eventName: "publishAiSession",
                            environment: t,
                            data: {
                                inference_type: "writer",
                                spaceId: e.id,
                                id: l,
                                metadata: {
                                    from: o
                                }
                            }
                        })
                    }
                i(304636).default.setState(d),
                    function(e) {
                        let {
                            environment: t,
                            promptForAnalytics: o
                        } = e, {
                            state: a
                        } = i(304636).default;
                        if ("assistantCompletionPopup" === a.type && "results" !== a.stage) {
                            i(218744).default.checkGate({
                                gateName: "mobile_assistant_prevent_clear_selection"
                            }) || (0, i(525779).clear)({
                                environment: t
                            });
                            let e = a.sessionId,
                                r = i(838448).default.getSessionContext(e);
                            i(942806).trackAICompletionPopupOpen(t, {
                                session_id: a.sessionId,
                                prompt_key: (null == o ? void 0 : o.key) ? ? "unknown",
                                from: a.from,
                                sessionContext: r
                            }), (0, i(259413).V)({
                                dismissed: !1,
                                environment: t,
                                trackCreateBlock: i(549960).vH
                            })
                        }
                    }(e)
            }

            function r(e) {
                let {
                    environment: t,
                    prefilledValue: o,
                    from: r
                } = e, n = (0, i(420459).gu)();
                n && a({
                    environment: t,
                    from: r ? ? "page_menu",
                    sessionId: i(92513).JW(),
                    context: n,
                    prefilledValue: o,
                    promptForAnalytics: void 0
                })
            }
            i.r(t), i.d(t, {
                closeInitialPromptAndEndSession: () => o,
                openHelpMeWriteGenericPopup: () => r,
                toggleInitialPrompt: () => a
            })
        },
        666236: (e, t, i) => {
            i.d(t, {
                P: () => o
            });

            function o(e) {
                let {
                    environment: t
                } = e;
                (0, i(79266).navigate)({
                    environment: t,
                    url: i(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        674788: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var o = i(474848);

            function a(e) {
                return (0, o.jsx)(i(746434).E, {
                    style: e.style,
                    content: (0, o.jsx)(i(109939).sA, {
                        id: "AlphaBadgeComponent.label",
                        defaultMessage: "Alpha"
                    })
                })
            }
        },
        699978: (e, t, i) => {
            i.d(t, {
                C4: () => a,
                Nf: () => n,
                qM: () => r
            }), i(16280), i(944114), i(898992), i(430670), i(581454);
            let o = (0, i(109939).YK)({
                authError: {
                    defaultMessage: "Auth failed. Please try again or contact Notion support.",
                    id: "database.viewSettings.propertyTypeSection.connected.authFail"
                },
                mobileAdminError: {
                    defaultMessage: "Ask your workspace admin to configure the GitHub (Workspace) app in settings to use this feature.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileAdminError"
                },
                mobileError: {
                    defaultMessage: "Please authorize this integration on the desktop app or a browser.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileError"
                }
            });
            async function a({
                environment: e,
                collectionStore: t,
                integration: r,
                canOnlyAdminAuth: n
            }) {
                let l = null == t ? void 0 : t.getSpaceStore();
                if (!l) return;
                let s = (0, i(88937).jw)(r.id).length;
                if (i(986939).A.isMobile && n && !s) {
                    let e = i(962299).A.formatMessage(o.mobileAdminError);
                    throw i(647095).f1(e), Error(e)
                }
                if (i(986939).A.isMobile && !n && !s) {
                    let e = i(962299).A.formatMessage(o.mobileError);
                    throw i(647095).f1(e), Error(e)
                }
                if (!s && n && l.canAdmin() || !s && !n) try {
                    await i(211791).Jq({
                        environment: e,
                        integration: r,
                        spaceId: l.id,
                        from: "collection_settings_property_type"
                    })
                } catch (t) {
                    let e = i(962299).A.formatMessage(o.authError);
                    throw i(647095).f1(e), Error(e)
                }
                if (!(0, i(88937).jw)(r.id).length) {
                    let e = i(962299).A.formatMessage(o.authError);
                    throw i(647095).f1(e), Error(e)
                }
            }

            function r(e) {
                let {
                    environment: t,
                    pattern: o,
                    integration: a,
                    parentCollectionStore: r,
                    transaction: n
                } = e;
                if (!o.connected_relation_properties) throw Error("Cannot create a connected relation collection without properties");
                let l = new(i(356912)).m(t, (0, i(295447).zP)({
                        environment: t,
                        table: i(832375).VlP,
                        spaceId: r.pointer.spaceId
                    })),
                    s = {};
                o.connected_relation_sub_schemas && (0, i(722371).WP)(o.connected_relation_sub_schemas).map(([e, o]) => {
                    let a = new(i(356912)).m(t, (0, i(295447).zP)({
                            environment: t,
                            table: i(832375).VlP,
                            spaceId: r.pointer.spaceId
                        })),
                        c = {
                            id: a.id,
                            version: 0,
                            space_id: (0, i(226221).e)(r.pointer.spaceId),
                            parent_table: i(832375).VlP,
                            parent_id: l.id,
                            alive: !0,
                            format: {
                                bot_id: void 0,
                                external_object_id: void 0,
                                uri: e,
                                integration_id: void 0,
                                is_placeholder: void 0,
                                original_url: void 0,
                                domain: void 0,
                                external_schema: o,
                                sync_state: void 0,
                                pattern_name: void 0
                            },
                            schema: {}
                        };
                    s[e] = a.id, (0, i(173157).z)({
                        store: a,
                        data: c,
                        transaction: n
                    })
                });
                let c = {
                    id: l.id,
                    version: 0,
                    space_id: (0, i(226221).e)(r.pointer.spaceId),
                    parent_table: i(832375).VlP,
                    parent_id: r.id,
                    alive: !0,
                    format: {
                        attributes: [{
                            id: "title",
                            name: "title",
                            type: "inline",
                            format: {
                                type: "title",
                                section: "title"
                            },
                            values: [(0, i(607689).Fe)({
                                pattern: o,
                                integration: a
                            })]
                        }],
                        bot_id: void 0,
                        external_object_id: void 0,
                        uri: `notion://user-defined-collection/${a.id}/${o.name}`,
                        integration_id: a.id,
                        is_placeholder: void 0,
                        original_url: void 0,
                        domain: void 0,
                        external_schema: o.connected_relation_properties,
                        sync_state: void 0,
                        pattern_name: o.name,
                        related_external_object_uris_to_instance_ids: s
                    },
                    schema: {}
                };
                return (0, i(173157).z)({
                    store: l,
                    data: c,
                    transaction: n
                }), l
            }
            async function n(e) {
                let {
                    bot: t,
                    connected_relation_properties: o
                } = e;
                if (t.integration_id === i(49361).Iy || t.integration_id === i(49361).mn) return await l(e);
                let a = [];
                for (let e in o) {
                    let t = o[e];
                    null != t && t.name && null != t && t.type && a.push({
                        id: e,
                        name: t.name,
                        isSelected: !1,
                        type: t.type,
                        metadata: {
                            name: t.name,
                            label: t.name,
                            type: t.type,
                            custom: !1
                        },
                        isAlreadySynced: !1
                    })
                }
                return {
                    value: a
                }
            }
            async function l(e) {
                var t, o, a, r, n;
                let {
                    environment: l,
                    objectName: s,
                    spaceId: c,
                    bot: d
                } = e, p = await l.api.callApi({
                    eventName: "describeSalesforceObject",
                    environment: l,
                    data: {
                        spaceId: c,
                        objectName: s,
                        botId: d.id
                    }
                });
                if ((null == p ? void 0 : p.type) !== "success") return {
                    error: i(212527).qh.FAILED_TO_FETCH_SALESFORCE_PROPERTIES
                };
                if ((null == (t = p.data) ? void 0 : t.responseStatus) === i(212527).qh.REAUTHENTICATION_REQUIRED || (null == (o = p.data) ? void 0 : o.responseStatus) === i(212527).qh.NO_USER_API_ACCESS) return {
                    error: `${null==(r=p.data)?void 0:r.responseStatus}:${null==(n=p.data)?void 0:n.userType}`
                };
                let u = null == p || null == (a = p.data) ? void 0 : a.properties;
                return u ? {
                    value: u.flatMap(e => {
                        let t = e.custom ? e.label : e.relationshipName || e.label;
                        return "User" === e.referenceTo || "Group" === e.referenceTo ? [{
                            id: e.name,
                            name: t,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }, {
                            id: `mapped_${e.name}`,
                            name: `${t} (Notion User)`,
                            isSelected: !1,
                            type: "person",
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }] : [{
                            id: "Name" === e.name ? "title" : e.name,
                            name: "relation" === e.type ? t : e.label,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }]
                    })
                } : {
                    error: i(212527).qh.NO_PROPERTIES_FOUND
                }
            }
        },
        717376: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var o = () => i(546605);
            class a extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new a
        },
        726342: (e, t, i) => {
            i.d(t, {
                u: () => o
            });

            function o(e) {
                return e instanceof i(681735).h || e instanceof i(695906).SpaceStore || e instanceof i(970831).B
            }
        },
        737270: (e, t, i) => {
            i.d(t, {
                m: () => a
            });
            let o = (0, i(109939).YK)({
                responderPropertyTitle: {
                    defaultMessage: "Respondent",
                    id: "blockTemplates.form.responderPropertyTitle"
                },
                createdTimePropertyName: {
                    defaultMessage: "Submission time",
                    id: "blockTemplates.form.createdTimePropertyName"
                },
                formInitialQuestionPropertyTitle: {
                    defaultMessage: "Question 1",
                    id: "blockTemplates.form.formInitialQuestionPropertyTitle"
                },
                formInitialQuestionPropertySelect: {
                    defaultMessage: "Question 2",
                    id: "blockTemplates.form.formInitialQuestionPropertySelect"
                },
                formInitialQuestionPropertySelectOption1: {
                    defaultMessage: "Option 1",
                    id: "blockTemplates.form.formInitialQuestionPropertySelectOption1"
                },
                formInitialQuestionPropertySelectOption2: {
                    defaultMessage: "Option 2",
                    id: "blockTemplates.form.formInitialQuestionPropertySelectOption2"
                },
                formInitialQuestionPropertySelectOption3: {
                    defaultMessage: "Option 3",
                    id: "blockTemplates.form.formInitialQuestionPropertySelectOption3"
                }
            });

            function a(e) {
                let {
                    isInline: t,
                    name: a
                } = e, r = (0, i(698596).Ay)(), n = (0, i(698596).Ay)(), l = (0, i(698596).Ay)(), s = (0, i(698596).Ay)(), c = (0, i(698596).Ay)(), d = (0, i(698596).Ay)();
                return i(412951).RecordMapPolymorphic.create({
                    block: {
                        root: {
                            id: "root",
                            type: t ? "collection_view" : "collection_view_page",
                            collection_id: "collection",
                            format: {
                                collection_pointer: {
                                    table: i(832375).VlP,
                                    id: "collection"
                                }
                            },
                            view_ids: [],
                            alive: !0
                        }
                    },
                    collection: {
                        collection: {
                            id: "collection",
                            name: a,
                            schema: {
                                title: {
                                    name: i(962299).A.formatMessage(o.formInitialQuestionPropertyTitle),
                                    type: "title"
                                },
                                [r]: {
                                    name: i(962299).A.formatMessage(o.responderPropertyTitle),
                                    type: "created_by"
                                },
                                [n]: {
                                    name: i(962299).A.formatMessage(o.createdTimePropertyName),
                                    type: "created_time"
                                },
                                [l]: {
                                    name: i(962299).A.formatMessage(o.formInitialQuestionPropertySelect),
                                    type: "multi_select",
                                    options: [{
                                        id: s,
                                        value: i(962299).A.formatMessage(o.formInitialQuestionPropertySelectOption1),
                                        color: "blue"
                                    }, {
                                        id: c,
                                        value: i(962299).A.formatMessage(o.formInitialQuestionPropertySelectOption2),
                                        color: "yellow"
                                    }, {
                                        id: d,
                                        value: i(962299).A.formatMessage(o.formInitialQuestionPropertySelectOption3),
                                        color: "red"
                                    }]
                                }
                            },
                            format: {},
                            parent_id: "root",
                            parent_table: "block",
                            alive: !0
                        }
                    }
                })
            }
        },
        745452: (e, t, i) => {
            i.d(t, {
                p: () => o
            });

            function o() {
                var e, t, o, a, r, n, l, s, c, d, p, u, m, g;
                let f = i(728372).AppStoreSidebarSpaceStore.state,
                    y = i(728372).AppStoreSidebarSpaceViewStore.state,
                    v = null == f ? void 0 : f.getSpaceSurveyData(),
                    _ = null == y ? void 0 : y.getUserSurveyData();
                return {
                    function: null != _ && null != (e = _.function) && e.value ? (0, i(88917).Tj)(null == _ || null == (t = _.function) ? void 0 : t.value) : void 0,
                    role: null != _ && null != (o = _.role) && o.value ? (0, i(88917).t_)(null == _ || null == (a = _.role) ? void 0 : a.value) : void 0,
                    educationRole: null == _ || null == (r = _.education_role) ? void 0 : r.value,
                    educationLevel: null == _ || null == (n = _.education_level) ? void 0 : n.value,
                    useCases: null != v && null != (l = v.use_cases) && l.value ? (0, i(88917).h0)(null == v || null == (s = v.use_cases) ? void 0 : s.value) : void 0,
                    companySize: null != v && null != (c = v.company_size) && c.value ? (0, i(88917).JE)(null == v || null == (d = v.company_size) ? void 0 : d.value) : void 0,
                    intent: null != v && null != (p = v.intent) && p.value ? (0, i(88917).j9)(null == v || null == (u = v.intent) ? void 0 : u.value) : void 0,
                    categories: null == _ || null == (m = _.categories) ? void 0 : m.value,
                    collaborativeIntent: null == v || null == (g = v.collaborative_intent) ? void 0 : g.value
                }
            }
        },
        772648: (e, t, i) => {
            i.r(t), i.d(t, {
                HorizontalTemplatePicker: () => n
            }), i(898992), i(823215), i(354520), i(581454);
            var o = i(296540),
                a = i(474848);
            let r = {
                pillContainer: {
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "flex-start"
                },
                style0: {
                    fontWeight: i(699422).Wy.medium,
                    paddingInlineStart: 10
                }
            };

            function n(e) {
                let {
                    store: t,
                    context: n,
                    menuListStore: u,
                    editorWidth: g
                } = e, [f] = (0, o.useState)(() => (0, i(92513).JW)()), y = d(), v = (0, i(335818).L5)(n), _ = (0, i(960253).I)(() => ({
                    root: {
                        background: v ? i(632079).Tj.background.elevated : i(632079).Tj.background.primary,
                        paddingBottom: "min(48px, 5vh)",
                        pointerEvents: "all"
                    },
                    menu: {
                        maxWidth: g
                    }
                }), [v, g]), [b, h] = function(e) {
                    var t;
                    let o, r, n, l, {
                            store: s
                        } = e,
                        d = (0, i(533992).v3)(),
                        u = (0, i(682985).K8)(() => "editor" === s.getRole(), [s]),
                        m = (0, i(682985).K8)(() => {
                            if (!d.currentUser.id) return !1;
                            let e = s.getSpaceStore();
                            if (!e) return !1;
                            let t = i(852864).H({
                                spaceStore: e,
                                userId: d.currentUser.id,
                                environment: d
                            });
                            return (0, i(642138).E)(s, t)
                        }, [s, d]),
                        g = (0, i(682985).K8)(() => s.getParentTable() === i(832375).C0E, [s]),
                        f = {
                            name: (0, i(109939).tz)().formatMessage(c.tableTemplateTitle),
                            type: "database",
                            iconFn: i(518630).T,
                            isLargeDatabaseIcon: !0,
                            shouldShow: () => !0,
                            onClick: (e, t) => {
                                let o = t.getParentStore();
                                o && (0, i(726342).u)(o) && (0, i(220210).openTemplateOnboardingModal)({
                                    parentStore: o,
                                    template: void 0,
                                    version: (0, i(220210).getTemplateOnboardingVersion)({
                                        template: void 0
                                    }),
                                    origin: "new_page_pills",
                                    navigateToOnFinish: "created_collection",
                                    onClose: o => {
                                        (0, i(487016)._M)({
                                            environment: e,
                                            newPageStore: t,
                                            result: o
                                        })
                                    }
                                })
                            }
                        },
                        y = function(e) {
                            let {
                                environment: t,
                                store: o
                            } = e, r = (0, i(109939).tz)(), n = (0, i(67499).S)(), l = (0, i(682985).K8)(() => null == n ? void 0 : n.publicEditModeStore.state, [null == n ? void 0 : n.publicEditModeStore]), s = (0, i(682985).K8)(() => (0, i(576348).ZE)(l, o), [l, o]);
                            return {
                                name: (0, i(682985).K8)(() => "on" === i(218744).default.getEligibleGroup({
                                    experimentId: "research_mode_empty_page_entrypoint",
                                    defaultGroup: "control"
                                }), []) ? r.formatMessage(c.writeWithAi) : r.formatMessage(c.askAi),
                                type: "ai",
                                iconFn: e => (0, a.jsx)(i(497736).UY, {}),
                                shouldShow: () => s,
                                onClick: () => {
                                    let e = o.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "HorizontalTemplatePicker.genericHelpMeWriteNewPageWithAI",
                                        environment: t,
                                        cellTarget: {
                                            spaceWithId: e
                                        },
                                        canUndo: !0,
                                        perform: e => {
                                            i(532559).n({
                                                environment: t,
                                                store: o,
                                                transaction: e,
                                                preventTextSelection: !1,
                                                onTextSelection() {
                                                    (0, i(661044).openHelpMeWriteGenericPopup)({
                                                        environment: t
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        }({
                            environment: d,
                            store: s
                        }),
                        v = (o = (0, i(109939).tz)(), r = (0, i(839362).W)(), n = (0, i(682985).K8)(() => {
                            let e = i(992308).W.state;
                            return (0, i(869708).vz)(e)
                        }, []), {
                            name: o.formatMessage(n),
                            type: "transcription",
                            iconFn: e => (0, a.jsx)(i(16275).I, {
                                icon: i(681875).a,
                                colorVariant: "primary",
                                style: { ...e
                                }
                            }),
                            shouldShow: () => r,
                            onClick: async e => {
                                (await i(68067).$.load()).appendTranscriptionBlockToPage({
                                    environment: e
                                })
                            }
                        }),
                        _ = (t = s, l = (0, i(533992).v3)(), {
                            name: (0, i(109939).tz)().formatMessage(c.formTemplateTitle),
                            type: "quick-form",
                            iconFn: i(550270).D,
                            shouldShow: () => !0,
                            onClick: async () => {
                                await (0, i(493526).t)({
                                    environment: l,
                                    store: t
                                })
                            }
                        }),
                        b = function() {
                            let {
                                isTablet: e
                            } = (0, i(533992).Y0)();
                            return {
                                name: i(962299).A.formatMessage(i(317397).KQ.templates),
                                type: "templates",
                                iconFn: e => (0, i(598974).notionTemplateIcon)(e),
                                shouldShow: () => !e,
                                onClick: e => {
                                    (0, i(666236).P)({
                                        environment: e
                                    })
                                }
                            }
                        }();
                    return [
                        [...!g ? [y] : [], v, f, ...u && !m ? [_] : [], ...!m ? [b] : []].filter(e => e.shouldShow(d)), [...i(83429)._, p, i(317397).zD]
                    ]
                }({
                    store: t
                }), [k, S] = function(e) {
                    let {
                        store: t,
                        editorWidth: r,
                        initialVisible: n,
                        initialOverflow: l,
                        eventId: p
                    } = e, u = (0, i(533992).v3)(), g = (0, i(109939).tz)(), f = d(), [y, v] = o.useState(void 0), [_, b] = o.useState([]), [h, k] = o.useState(void 0), [S, w] = o.useState(n.length);
                    (0, o.useEffect)(() => {
                        if (!(r && _.every(i(722371).O9) && h)) return;
                        let e = 0,
                            t = 0;
                        for (; t < n.length && !((e += _[t] + 8) + h > r + 24);) t++;
                        w(t)
                    }, [_, r, n.length, h]);
                    let T = n.slice(0, S).map((e, o) => ({
                            key: "ai-skill" === e.type ? `${e.type}-${o}` : e.type,
                            render: ({
                                ref: r,
                                ...n
                            }) => {
                                var l;
                                return (0, a.jsx)(i(977785).E, {
                                    onSizeChange: e => {
                                        if (_[o] === e.width) return;
                                        let t = [..._];
                                        t[o] = e.width, b(t)
                                    },
                                    children: (0, a.jsx)("div", {
                                        children: (0, a.jsx)(i(33418).J, { ...n,
                                            focused: y === o,
                                            format: "horizontal-new-page",
                                            title: (0, a.jsx)(i(324489).V, {
                                                children: e.name
                                            }),
                                            type: e.type,
                                            icon: null == (l = e.iconFn) ? void 0 : l.call(e, s.icon),
                                            onMouseEnter: i => {
                                                var a;
                                                n.onMouseEnter(i), null == (a = e.onMouseEnter) || a.call(e, u, t), v(o)
                                            },
                                            onMouseLeave: i => {
                                                var o;
                                                null == (o = e.onMouseLeave) || o.call(e, u, t), v(void 0)
                                            },
                                            locked: !1
                                        })
                                    })
                                })
                            },
                            action: o => {
                                (0, i(194020).E)(u, (0, i(974410).f)(t)) && ((0, i(523713).k)(u, {
                                    is_keyboard: "keydown" === o.event.type,
                                    from: "horizontal_template_picker",
                                    template_type: e.type,
                                    event_id: p
                                }), e.onClick(u, t))
                            }
                        })),
                        [A, P] = o.useState(!1);
                    return [T, {
                        key: "more",
                        render: ({
                            ref: e,
                            ...o
                        }) => (0, a.jsx)(i(182718).zD, {
                            alignmentToOrigin: "start",
                            placementToOrigin: "top",
                            originGap: 4,
                            open: A,
                            popupType: i(423291).n.Popup,
                            onDismiss: () => P(!1),
                            content: () => (0, a.jsx)(m, {
                                store: t,
                                items: [...n.slice(S), ...l],
                                eventId: p
                            }),
                            children: (0, a.jsx)(i(977785).E, {
                                onSizeChange: e => k(e.width),
                                children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(i(33418).J, { ...o,
                                        focused: y === S,
                                        onMouseEnter: e => {
                                            v(S)
                                        },
                                        onMouseLeave: e => {
                                            v(void 0)
                                        },
                                        format: "horizontal-new-page",
                                        title: f ? null : (0, a.jsx)(i(324489).V, {
                                            children: g.formatMessage(c.more)
                                        }),
                                        type: "more",
                                        icon: (0, a.jsx)(i(16275).I, {
                                            icon: i(397900).ellipsisIcon,
                                            colorVariant: "secondary"
                                        }),
                                        locked: !1
                                    })
                                })
                            })
                        }),
                        action: e => {
                            (0, i(523713).k)(u, {
                                is_keyboard: "keydown" === e.event.type,
                                from: "horizontal_template_picker",
                                template_type: "more",
                                event_id: p
                            }), P(!0)
                        }
                    }]
                }({
                    store: t,
                    editorWidth: g,
                    initialVisible: b,
                    initialOverflow: h,
                    eventId: f
                });
                return (0, i(682985).O$)(i(205885).e) ? (0, a.jsx)(i(385827).s, {
                    allowSelectionWithin: !1,
                    children: (0, a.jsx)(i(558045).A, {
                        type: i(558045).O.Horizontal,
                        store: u,
                        initialFocus: void 0,
                        style: _.menu,
                        disableInitialScroll: !0,
                        disableCommandEnter: !0,
                        isEnterOnHoverEmpty: !0,
                        disableKeyboard: !0,
                        sections: [{
                            key: "Get started",
                            render: e => (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(l, {
                                    isInPeekView: v
                                }), (0, a.jsx)("div", {
                                    style: _.root,
                                    children: (0, a.jsxs)(i(4458).VP, {
                                        gap: 12,
                                        children: [(0, a.jsx)(i(324489).V, {
                                            isSmall: !0,
                                            isSecondaryColor: !0,
                                            style: r.style0,
                                            children: y ? (0, a.jsx)(i(109939).sA, {
                                                defaultMessage: "Get started with",
                                                id: "PageEditor.horizontalTemplatePicker.getStarted.label.new"
                                            }) : (0, a.jsx)(i(109939).sA, {
                                                defaultMessage: "Get started",
                                                id: "PageEditor.horizontalTemplatePicker.getStarted.label"
                                            })
                                        }), (0, a.jsx)("div", {
                                            style: r.pillContainer,
                                            children: (0, a.jsx)(i(4458).fI, {
                                                gap: 8,
                                                children: e.children
                                            })
                                        })]
                                    }, e.key)
                                })]
                            }),
                            items: [...k, S]
                        }]
                    })
                }) : null
            }

            function l(e) {
                let t = (0, i(960253).I)(() => ({
                    fade: {
                        background: `linear-gradient(0deg, ${e.isInPeekView?i(632079).Tj.background.elevated:i(632079).Tj.background.primary} 0%, ${i(632079).Tj.contentBackgroundTransparent} 100%)`,
                        height: 140,
                        width: "100%"
                    }
                }), [e.isInPeekView]);
                return (0, a.jsx)("div", {
                    style: t.fade
                })
            }
            let s = {
                    icon: {
                        width: i(104509).Ev.default,
                        height: i(104509).Ev.default,
                        fill: i(632079).Tj.icon.primary
                    }
                },
                c = (0, i(109939).YK)({
                    askAi: {
                        defaultMessage: "Ask AI",
                        id: "newpage.templates.writeWithAiCondensed"
                    },
                    writeWithAi: {
                        defaultMessage: "Write",
                        id: "newpage.templates.writeWithAi"
                    },
                    more: {
                        defaultMessage: "More",
                        id: "newpage.templates.more"
                    },
                    tableTemplateTitle: {
                        defaultMessage: "Database",
                        id: "newpage.templates.table"
                    },
                    formTemplateTitle: {
                        defaultMessage: "Form",
                        id: "newpage.templates.form"
                    }
                });

            function d() {
                let {
                    isTablet: e
                } = (0, i(533992).Y0)(), t = (0, i(83208).X)("tablet_refresh_template_pills_gate");
                return !!e && !!t || !i(986939).A.isMobile
            }
            let p = {
                    name: "",
                    type: "divider",
                    iconFn: e => null,
                    shouldShow: () => !0,
                    onClick: () => {}
                },
                u = {
                    menu: {
                        width: 200,
                        cursor: "pointer",
                        padding: "6px 4px"
                    },
                    icon: {
                        width: i(104509).Ev.default,
                        fill: i(632079).Tj.icon.primary
                    },
                    divider: {
                        height: 1,
                        background: i(632079).Tj.border.primary,
                        margin: "6px -6px"
                    }
                };

            function m(e) {
                let {
                    store: t,
                    items: r,
                    eventId: n
                } = e, l = (0, i(533992).v3)(), s = (0, o.useMemo)(() => new(i(419110)).$, []), c = r.filter(e => e.shouldShow(l)).map(e => ({
                    key: e.name,
                    render: ({
                        ref: t,
                        ...o
                    }) => {
                        var r;
                        return "divider" === e.type ? (0, a.jsx)("div", {
                            style: u.divider
                        }) : (0, a.jsx)(i(33418).J, { ...o,
                            format: "horizontal-new-page-submenu",
                            title: (0, a.jsx)(i(324489).V, {
                                children: e.name
                            }),
                            type: e.type,
                            icon: null == (r = e.iconFn) ? void 0 : r.call(e, u.icon),
                            locked: !1
                        })
                    },
                    action: o => {
                        (0, i(194020).E)(l, (0, i(974410).f)(t)) && ((0, i(523713).k)(l, {
                            is_keyboard: "keydown" === o.event.type,
                            from: "horizontal_template_picker",
                            template_type: e.type,
                            event_id: n
                        }), e.onClick(l, t))
                    }
                }));
                return (0, a.jsx)(i(558045).A, {
                    type: i(558045).O.Vertical,
                    store: s,
                    initialFocus: void 0,
                    disableInitialScroll: !0,
                    disableCommandEnter: !0,
                    isEnterOnHoverEmpty: !0,
                    disableKeyboard: !0,
                    sections: [{
                        key: "Items",
                        render: e => (0, a.jsx)("div", {
                            style: u.menu,
                            children: (0, a.jsx)(i(4458).VP, {
                                gap: "inherit",
                                children: e.children
                            }, e.key)
                        }),
                        items: c
                    }]
                })
            }
        },
        793358: (e, t, i) => {
            i.d(t, {
                $N: () => y,
                D5: () => _,
                GB: () => m,
                M9: () => p,
                Pt: () => f,
                eW: () => g,
                jo: () => h,
                v7: () => u
            }), i(944114), i(898992), i(803949), i(581454);
            var o = () => i(561872),
                a = () => i(832375),
                r = () => i(85868),
                n = () => i(188993),
                l = () => i(28630),
                s = () => i(124937),
                c = () => i(579695),
                d = () => i(41403);

            function p(e) {
                var t, d, p, u, m, g, f;
                let {
                    environment: y,
                    droppedStores: b,
                    duplicate: h,
                    calendarBy: k,
                    transaction: S,
                    collectionContextStore: w,
                    duplicateActions: T
                } = e, A = i(906745).DateTime.fromMillis(e.startOfDay), P = !0;
                if (null != (t = w.collectionStore()) && t.isExternalSyncedCollection()) return;
                for (let t of b) {
                    let i = e.collectionStore ? e.collectionStore : (0, l().Dj)({
                        store: t,
                        collectionContextStore: w
                    });
                    if (t.getParentTable() === a().VlP || !i) {
                        P = !1;
                        break
                    }
                    c().X$({
                        childStore: t,
                        parentStore: i,
                        transaction: S
                    }) || (P = !1)
                }
                let M = [],
                    I = i(218744).default.checkGate({
                        gateName: "duplicate_subtree_advanced_flows"
                    }),
                    x = h && I;
                if (x)
                    for (let t of b) {
                        let i = e.collectionStore ? e.collectionStore : (0, l().Dj)({
                            store: t,
                            collectionContextStore: w
                        });
                        if (!i) continue;
                        let a = i.getMappedProperty(k),
                            m = v({
                                store: t,
                                mappedCalendarBy: a,
                                startOfDay: A
                            });
                        if (!m) continue;
                        let g = s().Wv({
                            environment: y,
                            type: "page",
                            inMemoryRecordCache: t.inMemoryRecordCache,
                            transaction: S,
                            spaceId: i.getSpaceId(),
                            properties: {
                                [a]: o().m5(m)
                            }
                        });
                        c().X$({
                            childStore: g,
                            parentStore: i,
                            transaction: S
                        }), (0, n().j)({
                            environment: y,
                            store: g,
                            collectionStore: i,
                            collectionContextStore: w,
                            shouldCoerce: !0,
                            groupsPointer: [],
                            transaction: S,
                            alreadyMovedToCollection: P
                        }), (0, r().E)({
                            environment: y,
                            collection_id: null == (d = w.collectionStore()) ? void 0 : d.id,
                            collection_view_id: null == (p = w.collectionViewStore()) ? void 0 : p.id,
                            collection_view_block_id: null == (u = w.collectionViewBlockStore()) ? void 0 : u.id,
                            block_id: g.id,
                            property: a,
                            property_type: "date",
                            from: "calendar"
                        }), M.push(g)
                    }
                let C = (0, i(340661).T)({
                    environment: y,
                    droppedStores: b,
                    duplicate: h,
                    transaction: S,
                    collectionStore: e.collectionStore,
                    duplicateActions: T,
                    existingBlocks: M
                });
                if (!x)
                    for (let t of C) {
                        let i = e.collectionStore ? e.collectionStore : (0, l().Dj)({
                            store: t,
                            collectionContextStore: w
                        });
                        if (!i) continue;
                        let o = i.getMappedProperty(k),
                            a = v({
                                store: t,
                                mappedCalendarBy: o,
                                startOfDay: A
                            });
                        a && ((0, n().j)({
                            environment: y,
                            store: t,
                            collectionStore: i,
                            collectionContextStore: w,
                            shouldCoerce: !0,
                            groupsPointer: [],
                            transaction: S,
                            alreadyMovedToCollection: P
                        }), _({
                            environment: y,
                            type: "dateValue",
                            propertyId: o,
                            store: t,
                            transaction: S,
                            dateValue: a
                        }), (0, r().E)({
                            environment: y,
                            collection_id: null == (m = w.collectionStore()) ? void 0 : m.id,
                            collection_view_id: null == (g = w.collectionViewStore()) ? void 0 : g.id,
                            collection_view_block_id: null == (f = w.collectionViewBlockStore()) ? void 0 : f.id,
                            block_id: t.id,
                            property: o,
                            property_type: "date",
                            from: "calendar"
                        }))
                    }
            }

            function u(e) {
                let {
                    calendarStore: t,
                    direction: i,
                    targetStore: o
                } = e;
                t.setState({ ...t.state,
                    isDragging: !0,
                    targetStore: o,
                    direction: i,
                    temporaryValue: void 0
                })
            }

            function m(e) {
                let {
                    calendarStore: t,
                    x: o,
                    y: a,
                    calendarBy: r
                } = e, n = t.state;
                if (n.isDragging) {
                    let e, l = (0, i(179358).b)(n.targetStore.getPropertyStore(r).getValue());
                    if (!l) return;
                    let s = i(25825).kW(l, (0, i(714350).P)()),
                        c = n.temporaryValue || l,
                        d = i(25825).kW(c, (0, i(714350).P)()),
                        p = [];
                    n.dayStoreMap.forEach((e, t) => {
                        p.push({
                            store: e,
                            timestamp: t
                        })
                    });
                    let u = p.find(({
                        store: e
                    }) => {
                        let t = i(240414).T.getRectFromStore(e);
                        return !!(t && i(195304).ux(t, o, a))
                    });
                    if (u) {
                        let t = i(906745).DateTime.fromMillis(u.timestamp),
                            o = t.endOf("day"),
                            a = t.toFormat(i(25825).tr);
                        if (s) {
                            let r = i(25825).AA(s, (0, i(714350).P)());
                            if (n.direction === i(641993).Q.Left)
                                if (i(906745).IX.fromDateTimes(t, o).contains(r.start)) e = s;
                                else {
                                    let t;
                                    t = "datetimerange" === s.type || "daterange" === s.type ? { ...s,
                                        start_date: a,
                                        end_date: s.end_date
                                    } : "datetime" === s.type ? {
                                        type: "datetimerange",
                                        start_date: a,
                                        start_time: s.start_time,
                                        end_date: s.start_date,
                                        end_time: s.start_time,
                                        time_zone: s.time_zone,
                                        reminder: s.reminder
                                    } : {
                                        type: "daterange",
                                        start_date: a,
                                        end_date: s.start_date,
                                        reminder: s.reminder
                                    };
                                    let o = i(25825).AA(t, (0, i(714350).P)());
                                    e = !r.end && o.start > r.start || r.end && o.start > r.end ? d : t
                                }
                            else if (r.end ? i(906745).IX.fromDateTimes(t, o).contains(r.end) : i(906745).IX.fromDateTimes(t, o).contains(r.start)) e = s;
                            else {
                                let t;
                                t = "date" === s.type ? { ...s,
                                    type: "daterange",
                                    end_date: a
                                } : "datetime" === s.type ? { ...s,
                                    type: "datetimerange",
                                    end_date: a,
                                    end_time: "00:00"
                                } : { ...s,
                                    end_date: a
                                };
                                let o = i(25825).AA(t, (0, i(714350).P)());
                                e = o.end && o.end < o.start ? d : t
                            }
                        }
                    }
                    if (e && !i(381453).n4(d, e)) {
                        let o = i(25825).kW(e, i(943003).$K(c) || (0, i(714350).P)());
                        t.setState({ ...n,
                            temporaryValue: o
                        })
                    }
                }
            }

            function g(e) {
                let {
                    environment: t,
                    calendarStore: i,
                    calendarBy: o,
                    transaction: a
                } = e, r = i.state;
                r.isDragging && r.temporaryValue && (_({
                    type: "dateValue",
                    environment: t,
                    dateValue: r.temporaryValue,
                    propertyId: o,
                    store: r.targetStore,
                    transaction: a
                }), i.setState({ ...i.state,
                    isDragging: !1
                }))
            }

            function f(e) {
                let {
                    calendarStore: t
                } = e, i = t.state;
                i.isDragging && t.setState({ ...i,
                    isDragging: !1
                })
            }

            function y(e) {
                let t, {
                        environment: a,
                        store: r,
                        collectionStore: l,
                        collectionContextStore: s,
                        startDayOfWeek: c,
                        transaction: d
                    } = e,
                    p = s.dateRangeStartStore.state,
                    u = (0, i(714350).P)(),
                    m = s.normalizedQueryStore.state;
                if (!m || !m.calendar_by) return;
                let g = (null == l ? void 0 : l.getMappedProperty(m.calendar_by)) ? ? m.calendar_by,
                    f = i(25825).hp(p, c, u),
                    y = f.startOf("month"),
                    v = f.endOf("month"),
                    _ = i(906745).DateTime.now().startOf("day");
                return t = i(906745).IX.fromDateTimes(y, v).contains(_) ? i(25825).p6(_.valueOf(), u) : i(25825).p6(i(25825).iB(p, c, u).valueOf(), u), (0, i(173157).z)({
                    store: r.getPropertiesStore(),
                    data: {
                        [g]: o().m5(t)
                    },
                    transaction: d
                }), (0, n().j)({
                    environment: a,
                    store: r,
                    collectionStore: l,
                    collectionContextStore: s,
                    shouldCoerce: !0,
                    groupsPointer: [],
                    transaction: d
                }), r
            }

            function v(e) {
                let t, {
                        store: o,
                        mappedCalendarBy: a,
                        startOfDay: r
                    } = e,
                    n = o.getPropertyStore(a),
                    l = (0, i(179358).b)(n.getValue()) || i(25825).Ec((0, i(714350).P)()),
                    s = i(25825).kW(l, (0, i(714350).P)()),
                    c = r.toFormat(i(25825).tr);
                if ("date" === s.type || "datetime" === s.type) t = { ...s,
                    start_date: c
                };
                else {
                    let e = i(25825).AA(s, (0, i(714350).P)());
                    if (!e.end) return;
                    let o = { ...s,
                            start_date: c
                        },
                        a = i(25825).AA(o, (0, i(714350).P)()).start.diff(e.start, "days"),
                        r = e.end.plus(a).toFormat(i(25825).tr);
                    t = { ...s,
                        start_date: c,
                        end_date: r
                    }
                }
                return i(25825).kW(t, i(943003).$K(l) || (0, i(714350).P)())
            }

            function _(e) {
                let t, {
                    environment: a,
                    store: r,
                    propertyId: n,
                    transaction: l
                } = e;
                "timestamp" === e.type ? t = i(25825).p6(e.timestampMs.valueOf(), (0, i(714350).P)()) : "dateValue" === e.type ? t = e.dateValue : (0, i(722371).HB)(e);
                let s = r.getPropertyValue(n);
                if (t && function(e) {
                        let {
                            propertyId: t,
                            oldDateValue: i,
                            newPersistedDate: o,
                            store: a
                        } = e;
                        return !i && !!o && void 0 === o.reminder && void 0 !== b(t, a)
                    }({
                        propertyId: n,
                        oldDateValue: s,
                        newPersistedDate: t,
                        store: r
                    })) {
                    let e = b(n, r);
                    void 0 !== e && (t = { ...t,
                        reminder: e
                    })
                }
                let c = o().m5(t);
                (0, i(173157).z)({
                    store: r.getPropertiesStore(),
                    data: {
                        [n]: c
                    },
                    transaction: l
                }), i(977906).O4({
                    environment: a,
                    store: r,
                    dateProperty: {
                        id: n,
                        oldValue: s,
                        newValue: c
                    }
                })
            }

            function b(e, t) {
                let i = t.getAssociatedCollectionStore();
                if (!i) return;
                let o = i.getSchema();
                if (!o) return;
                let a = o[e];
                if (a && "date" === a.type) return a.default_reminder
            }

            function h(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    calendarBy: a,
                    store: r,
                    insertStores: l,
                    collectionContextStore: s,
                    transaction: c
                } = e, p = r.getPropertyStore(a).getValue();
                for (let e of l)(0, n().j)({
                    environment: t,
                    store: e,
                    collectionStore: o,
                    collectionContextStore: s,
                    shouldCoerce: !0,
                    groupsPointer: [],
                    transaction: c
                }), d().R9({
                    environment: t,
                    store: e.getPropertyStore(a),
                    value: p,
                    transaction: c
                });
                return l.map(e => i(970831).B.createChildStore(o, e.pointer))
            }
        },
        823230: (e, t, i) => {
            i.d(t, {
                c: () => o
            });
            async function o(e) {
                let {
                    environment: t,
                    collectionStore: o
                } = e, a = {
                    id: o.id,
                    table: i(832375).VlP,
                    spaceId: o.getSpaceId()
                }, r = await t.api.callApi({
                    eventName: "suggestRecordKey",
                    environment: t,
                    data: { ...a,
                        shouldSetSuccessfullySuggestedRecord: !0
                    }
                });
                if ("success" === r.type) return r.data.key;
                i(773352).log({
                    level: "error",
                    from: "collectionAutoIncrementIdActions.suggestRecordKeyResponse",
                    type: "JSONParseError",
                    error: {
                        miscDataString: r.error.message
                    }
                })
            }
        },
        828294: (e, t, i) => {
            function o(e) {
                let t = (0, i(83208).X)(e);
                return "on" === (0, i(604306).r)("agent_writer_custom_skills") || t
            }

            function a(e) {
                return "on" === i(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || i(218744).default.checkGate({
                    gateName: e
                })
            }
            i.d(t, {
                N: () => o,
                a: () => a
            })
        },
        832248: (e, t, i) => {
            i.d(t, {
                S7: () => l,
                fF: () => b,
                es: () => _,
                LE: () => y,
                zs: () => f,
                HE: () => g,
                yg: () => v,
                QH: () => m,
                kn: () => u,
                mB: () => s,
                L$: () => c,
                X3: () => d,
                jX: () => p
            }), i(898992), i(354520), i(581454), i(944114);
            var o = () => i(896346);
            class a extends o().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let r = (0, i(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                n = {
                    hour: a.HOURLY,
                    day: a.DAILY,
                    week: a.WEEKLY,
                    month: a.MONTHLY,
                    year: a.YEARLY
                },
                l = {
                    MO: a.MO,
                    TU: a.TU,
                    WE: a.WE,
                    TH: a.TH,
                    FR: a.FR,
                    SA: a.SA,
                    SU: a.SU
                };

            function s(e) {
                return (0, i(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function c(e) {
                return (0, i(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function d(e) {
                let {
                    start_date: t,
                    frequency: o,
                    interval: r,
                    weekdays: s,
                    timezone: c,
                    hour: d,
                    minute: p
                } = e, u = (0, i(943003).eU)(t);
                "hour" === o && u.setUTCHours(d ? ? 0, p ? ? 0, 0, 0);
                let m = "week" === o && s ? s.map(e => l[e]) : void 0,
                    g = {};
                return (0, i(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? g.until = (0, i(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? g.count = e.end_condition.number_of_occurrences : (0, i(722371).HB)(e.end_condition)), "month" === e.frequency && (0, i(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? g.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? g.byweekday = (function e(t, ...i) {
                    if (0 === i.length) return t.map(e => [e]);
                    let o = [];
                    for (let a of t) o.push(...e(i[0], ...i.slice(1)).map(e => [a, ...e]));
                    return o
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, i(722371).HB)(e.monthly_restriction)), new a({
                    freq: n[o],
                    dtstart: u,
                    interval: r,
                    byweekday: m,
                    tzid: "hour" === o ? void 0 : c,
                    ..."hour" === o ? {} : {
                        byhour: d ? ? 0,
                        byminute: p ? ? 0,
                        bysecond: 0
                    },
                    ...g
                })
            }

            function p(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let i = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    o = e.length,
                    a = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    r = o > 1,
                    n = i.length >= 1;
                return {
                    violatesConstraint: r || n,
                    templateNestingExceedsMaxDepth: r,
                    ancestorHasDailyTemplate: n,
                    nestedDepthOfAutomationAncestors: o,
                    immediateAncestorRecurrenceType: a
                }
            }

            function u(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function m(e) {
                return d(e).after((0, i(943003).eU)((0, i(943003).Rz)())) || void 0
            }

            function g(e) {
                let {
                    recurrence: t,
                    intl: o
                } = e, a = "hour" === t.frequency ? function(e) {
                    let t = i(906745).DateTime.now();
                    if (i(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let o = t.startOf("hour");
                    return { ...e,
                        start_date: o.toMillis(),
                        hour: o.hour,
                        minute: o.minute
                    }
                }(t) : t, n = m(_(a));
                if (!n) return;
                let l = i(906745).DateTime.fromJSDate(n).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, i(599412).H)(o));
                "hour" !== a.frequency && (l = l.setZone(a.timezone));
                let s = "hour" !== t.frequency && u(t),
                    c = (0, i(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: o,
                        shortenDate: !0
                    });
                if (s) return o.formatMessage(r.dateBetweenMidnightAnd3AM, {
                    date: c
                }); {
                    let e = l.toLocaleString(i(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, i(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), o.formatMessage(r.dateAtTime, {
                        date: c,
                        time: e
                    })
                }
            }

            function f(e, t) {
                return (0, i(722371).O9)(e) ? "number" === e.type ? t.formatMessage(r.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, i(850640).Yq)({
                    date: i(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, i(722371).HB)(e) : t.formatMessage(r.noEndCondition)
            }

            function y(e) {
                return { ...e,
                    start_date: (0, i(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, i(943003).l1)(e.end_condition.end_at)
                    } : (0, i(722371).HB)(e.end_condition) : void 0
                }
            }

            function v(e, t, i) {
                return e.plus(i - t)
            }

            function _(e) {
                var t;
                let o;
                return { ...e,
                    start_date: (0, i(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, o = i(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, i(943003).Rz)(o.toJSDate())
                    }) : (0, i(722371).HB)(e.end_condition) : void 0
                }
            }

            function b(e, t) {
                let o = i(381453).fN(e, e => void 0 !== e),
                    a = i(381453).fN(t, e => void 0 !== e);
                return i(381453).n4(o, a)
            }
        },
        852864: (e, t, i) => {
            i.d(t, {
                H: () => o
            }), i(898992), i(672577);

            function o({
                spaceStore: e,
                userId: t,
                environment: a
            }) {
                let r = new(i(736309)).d(a, {
                    table: i(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return r ? i(994797).SpaceViewStore.createChildStore(e, {
                    id: r.id,
                    table: i(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        859941: (e, t, i) => {
            i.d(t, {
                a: () => o
            });

            function o() {
                let e = i(381453).XM(["Activities", "Objects", "Travel & Places"]),
                    t = i(753281).A.state.emojiByCategory[e];
                return i(381453).XM(t)
            }
        },
        862215: (e, t, i) => {
            i.d(t, {
                G: () => o
            });

            function o(e, t) {
                let {
                    device: i
                } = e;
                i.isAndroid && t.focus(), t.select()
            }
        },
        879318: (e, t, i) => {
            i.d(t, {
                un: () => n,
                kc: () => l,
                Iw: () => r,
                Hk: () => o
            }), i(898992), i(354520), i(581454);
            let o = (0, i(109939).YK)({
                    addToTeamspace: {
                        id: "templateGalleryHelpers.addToTeamspace",
                        defaultMessage: "Add to a teamspace"
                    },
                    addToPrivate: {
                        id: "teamPickerButton.addToPrivate",
                        defaultMessage: "Add to Private"
                    }
                }),
                a = (0, i(722371).objectKeys)(i(310213).PY);

            function r({
                userPersona: e,
                subscriptionTier: t
            }) {
                return [...a].sort((o, a) => {
                    var r, n, l, s;
                    let c, d;
                    return r = o, n = a, l = e, s = t, c = (0, i(262166).Pg)(s), d = (0, i(301755).N)({
                        persona: l,
                        defaultToLife: c
                    }), "suggested" === r || "suggested" === n ? "suggested" === r ? -1 : 1 : d === r || d === n ? d === r ? -1 : 1 : ("life" === r || "life" === n) && c ? "life" === r ? -1 : 1 : ("student" === r || "student" === n) && function({
                        persona: e,
                        isPersonalishPlan: t
                    }) {
                        return (t ? ["other", "unfilled", "personal", "undefined"] : ["personal"]).includes(e ? ? "undefined")
                    }({
                        persona: l,
                        isPersonalishPlan: c
                    }) ? "student" === r ? -1 : 1 : 0
                })
            }

            function n({
                subscriptionTier: e,
                environment: t
            }) {
                var o;
                let a = i(962299).A.getIntl(),
                    r = function(e) {
                        let {
                            environment: t
                        } = e;
                        return !!t.device.isMobileNative && !t.device.isTablet && i(218744).default.checkGate({
                            gateName: "mobile_user_activation_template_gallery_refresh_gate"
                        })
                    }({
                        environment: t
                    }),
                    l = r ? (o = e, (0, i(262166).Pg)(o) ? i(310213).sw : i(310213).ht) : i(310213).PY.suggested;
                return (0, i(722371).s8)(i(310213).PY, (e, t) => "suggested" === t ? l.map(e => (0, i(322095).B)(e, a)) : e.filter(e => (0, i(589297).vc)(e, i(218744).default)).map(e => r ? (0, i(589297).G2)(e) : e).filter(e => !l.includes(e)).map(e => (0, i(322095).B)(e, a)))
            }

            function l(e) {
                return `${i(986939).A.domainBaseUrl}/@${e}`
            }
        },
        883298: (e, t, i) => {
            i.d(t, {
                Dl: () => g,
                U2: () => s,
                Zk: () => f,
                _R: () => a,
                bE: () => y,
                c: () => p,
                cJ: () => m,
                eN: () => u,
                e_: () => n,
                g4: () => l,
                qy: () => d
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(803949), i(581454), i(737550);
            var o = () => i(875964);

            function a(e) {
                let {
                    environment: t,
                    transaction: o,
                    tasksBlockStore: a,
                    sprintsBlockStore: n
                } = e, l = n.getCollectionPointerIfSingleSource(), s = a.getCollectionPointerIfSingleSource();
                if (!l || !s) return;
                let c = i(356912).m.createChildStore(n, l),
                    d = c.getRole() ? ? "none";
                !(0, i(138798).q_)(d, "editor") || c.getAutomationStores().some(e => e.isCompleteSprintAutomation()) || r({
                    environment: t,
                    transaction: o,
                    sprintCollectionStore: c,
                    taskCollectionStore: i(356912).m.createChildStore(a, s),
                    sprintSettingsConfig: i(308292).AL
                })
            }

            function r(e) {
                var t;
                let {
                    environment: o,
                    sprintSettingsConfig: a,
                    transaction: r,
                    sprintCollectionStore: n,
                    taskCollectionStore: l
                } = e, s = n.getSpaceId(), c = (0, i(295447).Z1)({
                    environment: o,
                    table: i(832375).yBS,
                    spaceId: s
                }), d = (0, i(295447).Z1)({
                    environment: o,
                    table: i(832375).SC1,
                    spaceId: s
                });
                i(124937).eC({
                    environment: o,
                    table: i(832375).yBS,
                    inMemoryRecordCache: n.inMemoryRecordCache,
                    value: {
                        id: c,
                        parent_id: n.id,
                        parent_table: n.table,
                        alive: !0,
                        space_id: s,
                        status: a.autoCompleteSprints ? "active" : "disabled",
                        trigger: {
                            id: i(92513).JW(),
                            type: "recurrence",
                            recurrence: {
                                frequency: "week",
                                interval: (t = a).recurrenceConfig.interval,
                                weekdays: t.recurrenceConfig.weekdays,
                                start_date: (0, i(943003).Rz)(i(906745).DateTime.local().set({
                                    hour: 0,
                                    minute: 0,
                                    second: 0,
                                    millisecond: 0
                                }).toJSDate()),
                                timezone: (0, i(25825).dB)(),
                                hour: 0,
                                minute: 0
                            }
                        },
                        action_ids: [d]
                    },
                    transaction: r
                }), (0, i(715144).z)({
                    stores: [n],
                    update: {
                        automation_ids: [...n.getFormat().automation_ids ? ? [], c]
                    },
                    transaction: r
                }), i(124937).vt({
                    environment: o,
                    table: i(832375).SC1,
                    inMemoryRecordCache: n.inMemoryRecordCache,
                    transaction: r,
                    args: {
                        id: d,
                        version: 1,
                        parent_id: c,
                        parent_table: i(832375).yBS,
                        type: "complete_sprint",
                        alive: !0,
                        space_id: s,
                        config: {
                            sprint_collection: n.getSpaceShardedPointer(),
                            task_collection: l.getSpaceShardedPointer(),
                            complete_sprint_action: a.actionConfig.complete_sprint_action
                        }
                    }
                })
            }

            function n(e) {
                let {
                    environment: t,
                    automationStore: o,
                    transaction: a,
                    newDuration: r,
                    currentSprintBlockStore: n
                } = e;
                (0, i(173157).z)({
                    store: o.getTriggerStore().getKeyStore("recurrence"),
                    data: {
                        interval: r
                    },
                    transaction: a
                }), c({
                    environment: t,
                    transaction: a,
                    automationStore: o,
                    currentSprintBlockStore: n
                })
            }

            function l(e) {
                let {
                    environment: t,
                    automationStore: o,
                    transaction: a,
                    newWeekday: r,
                    currentSprintBlockStore: n
                } = e;
                (0, i(173157).z)({
                    store: o.getTriggerStore().getKeyStore("recurrence"),
                    data: {
                        weekdays: [r]
                    },
                    transaction: a
                }), c({
                    environment: t,
                    transaction: a,
                    automationStore: o,
                    currentSprintBlockStore: n
                })
            }

            function s(e) {
                let {
                    environment: t,
                    actionStore: o,
                    automationStore: a,
                    transaction: r,
                    newAutocompleteStatus: n,
                    currentSprintBlockStore: l
                } = e;
                (0, i(173157).z)({
                    store: a,
                    data: {
                        status: n ? "active" : "disabled"
                    },
                    transaction: r
                }), c({
                    environment: t,
                    transaction: r,
                    automationStore: a,
                    currentSprintBlockStore: l
                });
                let s = a.getParentPointer();
                if (!s || s.table !== i(832375).VlP) return;
                let d = (0, i(637286).Q)(t),
                    p = {
                        automation_id: a.id,
                        automation_actions: [{
                            automation_action_id: o.id,
                            type: "complete_sprint"
                        }],
                        automation_triggers: [{
                            type: "recurrence"
                        }],
                        collection_id: s.id
                    };
                n ? (0, i(589563).Ah)(d, p) : (0, i(589563).vN)(d, p)
            }

            function c(e) {
                let {
                    automationStore: t,
                    currentSprintBlockStore: o,
                    transaction: a,
                    environment: r
                } = e;
                if (!t.isActive()) return;
                let n = t.getRecurrence();
                if (!n) return;
                let l = (0, i(433837).Vv)(n);
                if (!l) return;
                let s = o.getPropertyValue(i(11448).Hx.Dates);
                if (!s) return;
                let c = (0, i(247438).Cok)(s)[0];
                if (!c || "daterange" !== c.type) return;
                let d = c.start_date,
                    {
                        start_date: p,
                        end_date: u
                    } = (0, i(433837).Me)({
                        currentSprintStartDate: d,
                        sprintSchedule: l
                    });
                (0, i(173157).z)({
                    store: t.getTriggerStore().getKeyStore("recurrence"),
                    data: {
                        start_date: (0, i(943003).Rz)(i(906745).DateTime.fromISO(p).plus({
                            minutes: 1
                        }).toJSDate())
                    },
                    transaction: a
                }), i(793358).D5({
                    store: o,
                    propertyId: i(11448).Hx.Dates,
                    transaction: a,
                    environment: r,
                    type: "dateValue",
                    dateValue: {
                        type: "daterange",
                        start_date: d,
                        end_date: u
                    }
                })
            }

            function d(e) {
                let {
                    transaction: t,
                    newRemainingTasksBehavior: o,
                    actionStore: a
                } = e;
                (0, i(173157).z)({
                    store: a.getConfigStore(),
                    data: {
                        complete_sprint_action: o
                    },
                    transaction: t
                })
            }
            async function p(e) {
                var t;
                let {
                    appTemplatesSetupActions: o,
                    appTemplatesSprintBoardActions: a,
                    appConfigs: r
                } = await i(929925).Aw.load(), {
                    environment: n,
                    collectionContextStore: l,
                    from: s
                } = e, c = l.collectionStore(), d = null == c ? void 0 : c.getParentCollectionViewBlockStore(), p = null == d ? void 0 : d.getParentStore(), u = null == c || null == (t = c.getFormat()) ? void 0 : t.app_config_uri, m = u && (0, i(765629).l)(r(), u), g = c ? (0, i(593303).k)(c.getSpaceId()) : void 0;
                if (!c || !d || !p || !g || p.table !== i(832375).NXh && p.table !== i(832375).evP && p.table !== i(832375).yKj || !m) return;
                let f = d.getFormat().app_id,
                    y = f ? await n.api.callApi({
                        eventName: "getCollectionViewBlocksByAppId",
                        environment: n,
                        data: {
                            spaceId: d.getSpaceId(),
                            appId: f
                        }
                    }) : void 0,
                    _ = (null == y ? void 0 : y.type) === "success" && y.data.result.length ? y.data.result.map(e => i(970831).B.createChildStore(p, {
                        table: i(832375).evP,
                        id: e.blockId,
                        spaceId: d.getSpaceId()
                    })) : [d];
                await v({
                    environment: n,
                    taskCollectionStore: c,
                    executeFn: () => {
                        let e = d.getSpaceId(),
                            t = (0, i(377796).createAndCommit)({
                                userAction: "sprintSettingsActions.handleTurnOnSprints",
                                environment: n,
                                canUndo: !0,
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                perform: e => {
                                    let t = (0, i(355940).We)(),
                                        r = o.applyTypedFeatures({
                                            environment: n,
                                            spaceViewStore: g,
                                            appParentStore: p,
                                            appUri: m.uri,
                                            features: [{
                                                type: "simple",
                                                featureUri: t.uri
                                            }],
                                            transaction: e,
                                            createOrModify: "modify",
                                            appCollectionViewBlockStores: _
                                        }),
                                        c = a.createSprintPage({
                                            environment: n,
                                            spaceViewStore: g,
                                            appParentStore: p,
                                            transaction: e,
                                            blockStores: r,
                                            creationEntryPoint: {
                                                type: "sprint_settings"
                                            }
                                        });
                                    (0, i(72762).o)({
                                        collectionSettingsStore: l.settingsStore
                                    });
                                    let d = s ? {
                                        feature: {
                                            id: i(11448).yx.TaskToSprintRelation,
                                            from: s,
                                            type: "notion://projects/tasks_with_sprints_feature"
                                        }
                                    } : {};
                                    return (0, i(461749).Z)({
                                        environment: n,
                                        collectionStore: l.collectionStore(),
                                        collectionViewStore: l.collectionViewStore(),
                                        from: "view_settings",
                                        property: i(11448).yx.TaskToSprintRelation,
                                        property_type: "relation",
                                        is_suggested_property: !0,
                                        property_id: i(11448).yx.TaskToSprintRelation,
                                        ...d
                                    }), c
                                }
                            });
                        t.serverCommitResult.then(() => {
                            let e = t.performResult;
                            e && (0, i(836924).Y)({
                                environment: n,
                                store: e,
                                pageVisitSource: i(254656).y8.Create
                            })
                        })
                    }
                })
            }
            async function u(e) {
                let {
                    environment: t,
                    collectionContextStore: a,
                    sprintSettingsContext: r,
                    sprintBoardViewBlockIds: n
                } = e, {
                    sprintCollectionStore: l,
                    automationContext: s,
                    currentCollectionViewBlockStore: c,
                    sprintCollectionViewBlockStore: d,
                    taskCollectionStore: p,
                    taskCollectionViewBlockStore: u
                } = r;
                if (!l || !d || !s) return;
                let m = u.getSpaceId(),
                    g = [...d.getCollectionPointerIfSingleSource() ? [d] : [], ...n.map(e => new(i(970831)).B(t, {
                        id: e,
                        table: i(832375).evP,
                        spaceId: m
                    }))];
                c.id === u.id ? (0, i(72762).o)({
                    collectionSettingsStore: a.settingsStore
                }) : (0, i(836924).Y)({
                    environment: t,
                    store: u,
                    pageVisitSource: i(254656).y8.LeaveOrRemove
                });
                let {
                    automationActions: f
                } = await i(879267).QV.automations.load(), {
                    automationStore: y
                } = s;
                await v({
                    environment: t,
                    taskCollectionStore: p,
                    executeFn: () => {
                        (0, i(377796).createAndCommit)({
                            userAction: "sprintSettingsActions.handleTurnOffSprints",
                            environment: t,
                            canUndo: !0,
                            cellTarget: m ? {
                                spaceWithId: m
                            } : void 0,
                            perform: e => {
                                u.id === d.id && (0, i(279187).removeCollectionFromCollectionViewBlock)({
                                        collectionViewBlockStore: u,
                                        collectionStore: l,
                                        transaction: e
                                    }),
                                    function(e) {
                                        let {
                                            transaction: t,
                                            blocksToDelete: a,
                                            environment: r,
                                            taskCollectionStore: n,
                                            sprintCollectionStore: l
                                        } = e;
                                        (0, i(173157).z)({
                                            store: l,
                                            transaction: t,
                                            data: {
                                                alive: !1
                                            }
                                        }), (0, o().B)({
                                            environment: r,
                                            collectionStore: n,
                                            schema: n.getSchema(),
                                            property: i(11448).yx.TaskToSprintRelation,
                                            transaction: t,
                                            permanentlyDelete: !0
                                        }), i(51932).oD({
                                            environment: r,
                                            blocks: a,
                                            transaction: t,
                                            permanentlyDelete: !0
                                        })
                                    }({
                                        environment: t,
                                        transaction: e,
                                        blocksToDelete: g,
                                        sprintCollectionStore: l,
                                        taskCollectionStore: p
                                    }), f.disableAutomation({
                                        automationStore: y,
                                        environment: t,
                                        transaction: e
                                    }), f.deleteAutomation({
                                        automationStore: y,
                                        environment: t,
                                        transaction: e
                                    })
                            }
                        }), (0, i(431666).i)({
                            environment: t,
                            collectionStore: a.collectionStore(),
                            collectionViewStore: a.collectionViewStore(),
                            property_type: "relation",
                            from: "view_settings",
                            property: i(11448).yx.TaskToSprintRelation
                        })
                    }
                })
            }

            function m(e) {
                let {
                    environment: t,
                    userSettingsStore: o
                } = e;
                (0, i(377796).createAndCommit)({
                    userAction: "sprintSettingsActions.handleSeenSprintsEngagementBanner",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: o,
                            data: {
                                seen_sprint_settings_engagement_banner: !0
                            },
                            transaction: e
                        })
                    }
                })
            }

            function g(e) {
                e.settingsStore.setState({
                    open: !0,
                    stack: [{
                        type: "main"
                    }, {
                        type: "sprintSettings"
                    }]
                })
            }

            function f(e) {
                let {
                    environment: t,
                    collectionContextStore: o,
                    currentViewBlockStore: a,
                    taskCollectionViewBlockStore: r
                } = e, n = o.collectionViewStore();
                if (!n) return;
                let l = n.getFormat(),
                    s = n.getRawQuery(),
                    c = r.getSpaceId();
                (0, i(377796).createAndCommit)({
                    userAction: "sprintSettingsActions.handleManageSprintFromThisView",
                    environment: t,
                    canUndo: !0,
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    perform: e => {
                        if ((0, i(548709).F)({
                                collectionViewStore: n,
                                transaction: e,
                                update: {
                                    name: i(962299).A.formatMessage(i(355940).DZ.tasksCurrentSprintV2ViewName),
                                    query2: { ...s,
                                        filter: void 0
                                    },
                                    format: { ...l,
                                        collection_view_icon: "/icons/playback-play-button_gray.svg",
                                        property_filters: i(355940).Wo,
                                        app_config_uri: i(11448).Lu,
                                        hide_linked_collection_name: !0
                                    }
                                }
                            }), a.id === r.id) {
                            var t;
                            let o = (null == (t = a.getFormat()) ? void 0 : t.app_uri_map) ? ? {},
                                s = l.app_config_uri;
                            s && delete o[s], (0, i(715144).z)({
                                stores: [r],
                                update: {
                                    app_uri_map: { ...o,
                                        [i(11448).Lu]: n.id
                                    }
                                },
                                transaction: e
                            })
                        }
                    }
                })
            }

            function y(e) {
                let {
                    environment: t,
                    sprintSettingsContext: o
                } = e;
                if (!o) return;
                let a = o.sprintCollectionStore,
                    n = (null == a ? void 0 : a.getRole()) ? ? "none";
                if (a && (0, i(138798).q_)(n, "editor") && o.automationContextLoaded && !o.automationContext) {
                    let e = a.getSpaceId();
                    (0, i(377796).createAndCommit)({
                        userAction: "sprintSettingsActions.ensureCompleteSprintAutomation",
                        environment: t,
                        canUndo: !0,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        perform: e => {
                            r({
                                environment: t,
                                transaction: e,
                                sprintCollectionStore: a,
                                taskCollectionStore: o.taskCollectionStore,
                                sprintSettingsConfig: i(308292).AL
                            })
                        }
                    })
                }
            }
            async function v(e) {
                let {
                    executeFn: t,
                    environment: i,
                    taskCollectionStore: o
                } = e;
                await _({
                    environment: i,
                    taskCollectionStore: o
                }), t()
            }
            async function _(e) {
                var t;
                let {
                    environment: a,
                    taskCollectionStore: r
                } = e, n = r.getFormat().app_uri_map, l = i(11448).yx.TaskToSprintRelation, s = r.getSchema(), c = (null == n ? void 0 : n[l]) ? ? l, d = s[c];
                if (!d || !(0, i(795e3).n)(d)) return;
                let p = null == (t = (0, i(390768).N)(d)) ? void 0 : t.id;
                if (!p) return;
                let u = new Set([c]);
                Object.entries(s).forEach(([e, t]) => {
                    var o;
                    t && (0, i(795e3).n)(t) && (null == (o = (0, i(390768).N)(t)) ? void 0 : o.id) === p && u.add(e)
                });
                let m = r.getSpaceId(),
                    {
                        serverCommitResult: g
                    } = (0, i(377796).createAndCommit)({
                        userAction: "sprintSettingsActions.clearSprintRelationDataFromTaskCollection",
                        environment: a,
                        canUndo: !0,
                        cellTarget: m ? {
                            spaceWithId: m
                        } : void 0,
                        perform: e => {
                            for (let t of u)(0, o().B)({
                                environment: a,
                                transaction: e,
                                permanentlyDelete: !0,
                                collectionStore: r,
                                schema: s,
                                property: t
                            });
                            null == n || delete n[l], n && (0, i(715144).z)({
                                stores: [r],
                                transaction: e,
                                update: {
                                    app_uri_map: n
                                }
                            })
                        }
                    });
                await g
            }
        },
        921048: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                magnifyingGlassSmallIcon: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                a = (0, i(104509).wt)("magnifyingGlassSmall", o, "small")
        },
        937776: (e, t, i) => {
            i.d(t, {
                B: () => r
            }), i(296540);
            var o = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                r = (0, i(104509).wt)("archiveBox", a, "default")
        },
        941754: (e, t, i) => {
            i.d(t, {
                e: () => o
            });

            function o(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "create_collection_template",
                        eventProperties: t
                    }
                })
            }
        },
        942806: (e, t, i) => {
            function o(e, t) {
                let {
                    user_comment: o,
                    ...a
                } = t;
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_action",
                        eventProperties: a
                    }
                })
            }

            function a(e, t, o) {
                let a = {
                    site: "client",
                    ...o
                };
                (0, i(195857).DO_NOT_USE_trackLegacy)(t, a)
            }

            function r(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_favorite_action",
                        eventProperties: t
                    }
                })
            }

            function n(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_autofill_action",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_autofill_settings_action",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                if (i(886556).z.isXMLAssistantEnabled()) {
                    var o;
                    let a = (null == (o = t.sessionContext) ? void 0 : o.evaluatorFromStoreState.getTranscript()) ? ? [];
                    i(310639).assistantDependency.load().then(({
                        assistantAnalyticsActions: i
                    }) => {
                        i.trackAssistantOpened(e, {
                            from: t.from,
                            sessionId: t.session_id,
                            isReminder: !1,
                            reminderType: void 0,
                            startTimestamp: Date.now(),
                            transcript: a,
                            hasQuery: !1,
                            searchSessionId: void 0
                        })
                    })
                } else(0, i(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_open",
                        eventProperties: {
                            session_id: t.session_id,
                            prompt_key: t.prompt_key,
                            from: t.from
                        }
                    }
                })
            }

            function c(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_close",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_assistant_error",
                        eventProperties: t
                    }
                })
            }
            i.r(t), i.d(t, {
                trackAIAction: () => o,
                trackAIAssistantEngineError: () => d,
                trackAICompletionPopupClose: () => c,
                trackAICompletionPopupOpen: () => s,
                trackAIFavoriteAction: () => r,
                trackAiAutofillAction: () => n,
                trackAiAutofillSettingsAction: () => l,
                trackUserFlow: () => a
            })
        },
        966559: (e, t, i) => {
            i.r(t), i.d(t, {
                exclamationMarkCircleSmallIcon: () => r,
                iconDefinition: () => a
            }), i(296540);
            var o = i(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, o.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                r = (0, i(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        977785: (e, t, i) => {
            i.d(t, {
                E: () => a
            }), i(16280);
            var o = i(296540);

            function a(e) {
                let {
                    children: t,
                    onSizeChange: a
                } = e, r = (0, o.useRef)(null), n = (0, i(729787).wY)(r);
                (0, o.useEffect)(() => {
                    a && n && a(n)
                }, [n, a]);
                let l = o.Children.only(t);
                return o.cloneElement(l, {
                    ref: r
                })
            }
        },
        999129: (e, t, i) => {
            i.d(t, {
                M: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.68 12.51 14.37",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.282 3.66a5.39 5.39 0 0 0-5.217-.54l-.711.305a.63.63 0 0 0-.38.575v12.425a.625.625 0 1 0 1.25 0v-3.913l.333-.142a4.14 4.14 0 0 1 4.008.414 5.39 5.39 0 0 0 5.504.405l1.06-.53a.63.63 0 0 0 .346-.56V4a.625.625 0 0 0-.905-.558l-1.06.53c-1.36.68-2.983.56-4.228-.312m-5.057 7.495V4.412l.332-.142a4.14 4.14 0 0 1 4.008.413 5.39 5.39 0 0 0 5.504.406l.156-.078v6.703l-.715.357c-1.36.68-2.983.56-4.228-.312a5.4 5.4 0 0 0-5.057-.604"
                    })
                },
                a = (0, i(104509).wt)("flag", o, "default")
        }
    }
]);