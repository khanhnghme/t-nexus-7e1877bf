"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [29409, 40600], {
        5556: (e, t, a) => {
            a.d(t, {
                u: () => r
            });

            function r(e) {
                let {
                    blocks: t,
                    transaction: r
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && a(966980).wm(e) && (0, a(210191).T)({
                        store: e,
                        transaction: r
                    })
                }
            }
        },
        32989: (e, t, a) => {
            a.r(t), a.d(t, {
                duplicateToImpl: () => f
            }), a(16280), a(944114), a(898992), a(354520), a(672577), a(803949);
            var r = () => a(412951),
                o = () => a(300441),
                l = () => a(519995),
                i = () => a(964058),
                n = () => a(450228),
                c = () => a(31069),
                s = () => a(941701);
            let d = (0, a(477465).Dv)("duplicateTemplateTo");
            var u = () => a(566166);
            async function p(e) {
                let {
                    navigateToTarget: t,
                    skipUserFacingMessages: r,
                    ...o
                } = e, {
                    environment: l,
                    from: i
                } = o, n = g;
                return n = (0, a(94228).yE)(n, m), n = (0, a(94228).yE)(n, a(94228).Nf), r || (n = (0, a(94228).yE)(n, a(94228).vd), n = (0, a(94228).$2)(n)), t && (n = (0, a(94228).em)(n)), n = (0, a(94228).NU)({
                    environment: l,
                    runner: n,
                    userAction: `duplicateTo.${i}`,
                    method: "server_duplicate_to",
                    from: i
                }), await (0, a(94228).Fe)({
                    runner: n,
                    args: o
                })
            }
            async function m(e) {
                if ("error" === e.event.type && (0, a(908467).l)(e.event.error)) return await e.runner({ ...e.args,
                    runOnMainCell: !0
                }), {
                    stopPropagation: !0
                }
            }
            async function g(e) {
                let t, l, {
                        environment: i,
                        sourceBlocks: n,
                        destination: p,
                        options: m,
                        appendWithoutAfter: g,
                        unlockPage: f,
                        installationImprint: v,
                        templateInstallationMetadata: y,
                        runOnMainCell: h,
                        listener: k,
                        shouldUseSynchronousDuplicationAPI: T
                    } = e,
                    _ = n[0];
                if (await k({
                        type: "started"
                    }), m.resolveTemplateVariables && (t = {
                        currentUserId: i.currentUser.id,
                        currentTimeZone: (0, a(714350).P)()
                    }), "collection" === p.type || "automation_action" === p.type || "workflow" === p.type) return void await k({
                    type: "error",
                    error: Error("Duplication type is not supported")
                });
                let S = _.getSpaceId() !== p.parent.spaceId,
                    I = {
                        addCopyName: m.addCopyName,
                        deepCopyTransclusionContainers: m.deepCopyTransclusionContainers,
                        convertExternalObjectInstancesToPlaceholders: S,
                        duplicateOnlyCollectionSchema: m.duplicateOnlyCollectionSchema,
                        appendContentOnly: m.appendContentOnly,
                        allowRedundancy: m.allowRedundancy,
                        returnRecordIdMap: m.returnRecordIdMap,
                        appendWithoutAfter: g,
                        installationImprint: v,
                        templateInstallationMetadata: y,
                        resolveTemplateVariables: t,
                        unlockPage: f
                    },
                    b = {
                        sourceBlock: {
                            table: a(832375).evP,
                            id: _.id,
                            spaceId: _.getSpaceId()
                        },
                        destination: p.parent,
                        options: I
                    },
                    w = (null == y ? void 0 : y.source) !== void 0;
                if (T) {
                    let e;
                    if ("failed" === (e = w ? await i.api.callMainCellApi({
                            environment: i,
                            eventName: "duplicateTemplateToSynchronously",
                            data: { ...b,
                                templateOptions: {
                                    shouldTranslate: m.shouldTranslate,
                                    sourceLanguage: m.sourceLanguage,
                                    targetLanguage: m.targetLanguage
                                }
                            }
                        }) : await i.api.callMainCellApi({
                            environment: i,
                            eventName: "duplicateToSynchronously",
                            data: b
                        })).type) return void await k({
                        type: "error",
                        error: e.error
                    });
                    l = e.data
                } else {
                    let e, t;
                    if (w) e = (0, a(259242).UT)({
                        environment: i,
                        eventName: d,
                        request: { ...b,
                            templateOptions: {
                                shouldTranslate: m.shouldTranslate,
                                sourceLanguage: m.sourceLanguage,
                                targetLanguage: m.targetLanguage
                            }
                        },
                        multiCellRouting: {
                            spaceIds: []
                        }
                    });
                    else {
                        let t = h ? [] : (0, a(763230).sb)([_.getSpaceId(), p.parent.spaceId].filter(a(722371).O9));
                        e = (0, a(259242).UT)({
                            environment: i,
                            eventName: a(297906).G,
                            request: b,
                            multiCellRouting: {
                                spaceIds: t
                            }
                        })
                    }
                    for await (let a of e) t = a, o().Q.isSuccess(a) && (0, c()._)({
                        currentUserId: i.currentUser.id,
                        defaultRecordCache: i.defaultRecordCache,
                        userId: i.currentUser.id,
                        inMemoryRecordCache: i.defaultRecordCache.inMemoryRecordCache,
                        recordMap: r().RecordMapWithRole.create(a.value.recordMap),
                        debugSource: "duplicateTo",
                        isPendingTransactionForRecord: s().transactionQueue.isPendingTransactionForRecord.bind(s().transactionQueue)
                    }), (0, u().d8)({
                        state: a,
                        copyIndicatorIds: o().Q.isSuccess(a) ? [a.value.createdBlock.id] : []
                    });
                    if (!t || o().Q.isFail(t)) {
                        var C;
                        await k({
                            type: "error",
                            error: (null == (C = t) ? void 0 : C.error) || Error("Unknown error")
                        });
                        return
                    }
                    l = t.value
                }
                let B = new(a(970831)).B(i, {
                    table: a(832375).evP,
                    id: l.createdBlock.id
                });
                await k({
                    type: "page_navigable",
                    navigableBlockStore: B
                }), await k({
                    type: "completed",
                    createdBlocks: [B],
                    recordIdMap: l.recordIdMapJson ? r().RecordMapPolymorphic.create(l.recordIdMapJson) : void 0,
                    numRecordsDuplicated: l.totalBlocks
                })
            }
            async function f(e) {
                let {
                    environment: t,
                    sourceBlocks: r,
                    destination: i,
                    options: n = {},
                    shouldUseSynchronousDuplicationAPI: c,
                    from: s,
                    templateInstallationMetadata: d,
                    unlockPage: u,
                    installationImprint: m,
                    navigateToTarget: g,
                    skipUserFacingMessages: f,
                    appendWithoutAfter: y,
                    duplicateSubtreeGateName: h,
                    undoCheckpoint: k,
                    listener: T = () => Promise.resolve()
                } = e, _ = [];
                for (let e of r) {
                    let a = await l().rW({
                        environment: t,
                        block: e,
                        action: "duplicate"
                    });
                    if ("user_canceled" === a) return o().Q.fail(Error("user_canceled"));
                    _.push(...a)
                }
                let S = e.forceExecutionTarget ? ? a(730125).A.getState().executionTarget;
                if (!(d && (0, a(252822).Fe)(d.source) && d.isListedTemplate) && "server" !== S) {
                    let e = await (0, a(44226).tryLocalOrServerBackedDuplicateTo)({
                        environment: t,
                        sourceStores: _,
                        destination: i,
                        options: n,
                        appendWithoutAfter: y,
                        from: s,
                        templateInstallationMetadata: d,
                        installationImprint: m,
                        navigateToTarget: g,
                        unlockPages: u,
                        useServerFallback: !0,
                        undoCheckpoint: k,
                        listener: T
                    });
                    if (o().Q.isFail(e)) return e;
                    if (e.value) return o().Q.success({
                        createdBlocks: e.value
                    })
                }
                let I = (0, a(170013).B)({
                    options: n,
                    gateName: h,
                    appendWithoutAfter: y,
                    templateInstallationMetadata: d,
                    from: s,
                    sourceBlocks: r,
                    destination: i
                });
                return "local" !== S && I ? (0, a(170013).V)({
                    environment: t,
                    listener: T,
                    sourceBlocks: _,
                    destination: i,
                    unlockPages: u,
                    options: { ...n,
                        isTemplateInstantiation: n.isTemplateInstantiation || !!d
                    },
                    from: s,
                    appendWithoutAfter: y,
                    navigateToTarget: g,
                    skipUserFacingMessages: f
                }) : function(e) {
                    let {
                        blocksToDuplicate: t,
                        destination: r,
                        options: o,
                        templateInstallationMetadata: l
                    } = e, i = l && (0, a(252822).Fe)(l.source) && l.isListedTemplate, n = a(218744).default.checkGate({
                        gateName: "use_duplicate_to_api"
                    }), c = ["block", "team", "space"].includes(r.type);
                    return n && !i && !o.shouldTranslate && c && 1 === t.length
                }({
                    blocksToDuplicate: _,
                    destination: i,
                    options: n,
                    templateInstallationMetadata: d
                }) && "local" !== S ? p({
                    environment: t,
                    listener: T,
                    sourceBlocks: _,
                    destination: i,
                    options: n,
                    from: s,
                    appendWithoutAfter: y,
                    unlockPage: u,
                    installationImprint: m,
                    templateInstallationMetadata: d,
                    navigateToTarget: g,
                    skipUserFacingMessages: f,
                    shouldUseSynchronousDuplicationAPI: c
                }) : v({
                    environment: t,
                    blocksToDuplicate: _,
                    destination: i,
                    installationImprint: m,
                    templateInstallationMetadata: d,
                    options: n,
                    appendWithoutAfter: y,
                    from: s,
                    navigateToTarget: g,
                    skipUserFacingMessages: f,
                    shouldUseSynchronousDuplicationAPI: c,
                    unlockPage: u,
                    undoCheckpoint: k,
                    listener: T
                })
            }
            async function v(e) {
                let {
                    navigateToTarget: t,
                    listener: r,
                    ...l
                } = e;
                await r({
                    type: "started"
                });
                let i = await y(l);
                if (o().Q.isSuccess(i)) {
                    let e = i.value.createdBlocks;
                    if (e.length > 0 && e[0].isNavigableBlock()) {
                        let o = e[0];
                        t && (0, a(210370).F)({
                            environment: l.environment,
                            blockStore: o,
                            sourceBlockId: l.blocksToDuplicate[0].id
                        }), await r({
                            type: "page_navigable",
                            navigableBlockStore: o
                        })
                    }
                    await r({
                        type: "completed",
                        createdBlocks: e,
                        recordIdMap: i.value.recordIdMap
                    })
                } else await r({
                    type: "error",
                    error: i.error
                });
                return i
            }
            async function y(e) {
                let {
                    environment: t,
                    blocksToDuplicate: l,
                    destination: c,
                    installationImprint: s,
                    templateInstallationMetadata: d,
                    options: u,
                    appendWithoutAfter: p,
                    from: m,
                    skipUserFacingMessages: g,
                    shouldUseSynchronousDuplicationAPI: f,
                    unlockPage: v,
                    undoCheckpoint: y
                } = e, h = "forkPageActions.duplicateTo";
                null != d && d.isListedTemplate ? h = "forkPageActions.duplicateTo.marketplaceTemplateInstallation" : (null == d ? void 0 : d.source) === "public_page" ? h = "forkPageActions.duplicateTo.publicPageInstallation" : (null == d ? void 0 : d.source) === "onboarding" ? h = "forkPageActions.duplicateTo.onboardingInstallation" : (null == d ? void 0 : d.source) === "team_home" && (h = "forkPageActions.duplicateTo.teamHomeInstallation");
                let k = c.parent.spaceId,
                    T = a(728372).AppStoreCurrentUserRootStore.state;
                if (!k || !T) {
                    let e = k ? "no_current_user_root_store" : "no_target_space_id";
                    return a(773352).log({
                        level: "info",
                        from: "duplicateTo",
                        type: e,
                        data: {
                            miscDataToConvertToString: {
                                targetSpaceId: k,
                                userId: null == T ? void 0 : T.id,
                                duplicateBlockUserAction: h
                            }
                        }
                    }), o().Q.fail(Error(e))
                }
                let _ = new(a(695906)).SpaceStore(t, {
                        table: a(832375).NXh,
                        id: k
                    }),
                    S = a(852864).H({
                        spaceStore: _,
                        userId: T.id,
                        environment: t
                    });
                if (!S) return a(773352).log({
                    level: "info",
                    from: "duplicateTo",
                    type: "no_target_space_view_store",
                    data: {
                        miscDataToConvertToString: {
                            targetSpaceId: k,
                            userId: null == T ? void 0 : T.id,
                            duplicateBlockUserAction: h
                        }
                    }
                }), o().Q.fail(Error("no_target_space_view_store"));
                let I = (e, a) => {
                        let r = [],
                            o = [];
                        if (u.useSharedContext) {
                            let {
                                blockStores: v,
                                onComplete: y
                            } = (0, n().duplicateBlock)({
                                environment: t,
                                stores: l,
                                transaction: a,
                                targetSpaceId: _.id,
                                executionTarget: e,
                                installationImprint: s,
                                templateInstallationMetadata: d,
                                shouldUseSynchronousDuplicationAPI: f,
                                from: m,
                                options: u,
                                skipUserFacingMessages: g
                            });
                            (0, i().J)({
                                environment: t,
                                sourceStores: l,
                                transaction: a,
                                destination: c,
                                targetStores: v,
                                targetSpaceViewStore: S,
                                appendWithoutAfter: p
                            }), r.push(...v), o.push(y)
                        } else
                            for (let v of l) {
                                let {
                                    blockStores: l,
                                    onComplete: y
                                } = (0, n().duplicateBlock)({
                                    environment: t,
                                    stores: [v],
                                    transaction: a,
                                    targetSpaceId: _.id,
                                    executionTarget: e,
                                    installationImprint: s,
                                    templateInstallationMetadata: d,
                                    shouldUseSynchronousDuplicationAPI: f,
                                    from: m,
                                    options: u,
                                    skipUserFacingMessages: g
                                });
                                (0, i().J)({
                                    environment: t,
                                    sourceStores: [v],
                                    transaction: a,
                                    destination: c,
                                    targetStores: l,
                                    targetSpaceViewStore: S,
                                    appendWithoutAfter: p
                                }), r.push(...l), o.push(y)
                            }
                        return {
                            createdBlocks: r,
                            onCompletes: o
                        }
                    },
                    {
                        createdBlocks: b,
                        onCompletes: w
                    } = (0, a(377796).createAndCommit)({
                        userAction: h,
                        isTemplateInstantiationTransaction: !!d,
                        environment: t,
                        canUndo: !0,
                        undoCheckpoint: y,
                        cellTarget: {
                            spaceWithId: k
                        },
                        perform: e => I("local", e),
                        transactionTooBigFallback: e => I("server", e)
                    }).performResult,
                    C = await Promise.all(w),
                    B = C.filter(e => "error" === e.status);
                if (B.length > 0) return o().Q.fail(B[0].error);
                v && b.find(e => e.isLocked()) && (0, a(377796).createAndCommit)({
                    userAction: "forkPageActions.duplicateTo",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: k
                    },
                    perform: e => {
                        b.forEach(r => {
                            r.isLocked() && (0, a(578825)._)({
                                environment: t,
                                store: r,
                                isLocked: !1,
                                transaction: e
                            })
                        })
                    }
                });
                let M = r().RecordMapPolymorphic.create();
                for (let e of C)
                    if (void 0 === e.error && void 0 !== e.recordIdMap)
                        for (let t of e.recordIdMap) M.set(t.pointer, t.value);
                return o().Q.success({
                    createdBlocks: b,
                    recordIdMap: M,
                    numRecordsDuplicated: b.length
                })
            }
        },
        85071: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                o = (0, a(104509).wt)("integration", r, "default")
        },
        95783: (e, t, a) => {
            a.d(t, {
                w: () => r
            }), a(16280), a(18107), a(967357), a(898992), a(737550);

            function r(e) {
                var t, r, o, l, i, n;
                let {
                    environment: c,
                    createBlockItem: s,
                    from: d,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: m
                } = e;
                if (!s.templateRootBlockId || !s.createTemplate) throw Error("Invalid createBlock item.");
                let g = (m.length > 0 ? m[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    f = g ? c.idCreator.getSpaceIdCreatorSync(g) : void 0,
                    v = m.some(e => (0, a(398346).l)(e)),
                    y = s.createTemplate(c),
                    {
                        targetBlockStore: h
                    } = (0, a(963771).initializeTemplate)({
                        environment: c,
                        sourceBlockId: s.templateRootBlockId,
                        targetBlockPointer: (0, a(295447).zP)({
                            environment: c,
                            table: a(832375).evP,
                            spaceId: g
                        }),
                        sourceBlockSubtree: (0, a(412951).partialRecordMapToRecordMap)(y),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !v,
                        spaceIdCreator: f
                    });
                null == (r = s.postCreateCallback) || r.call(s, h, c, p);
                let [k] = m;
                if (a(205103).eY({
                        environment: c,
                        store: h,
                        transaction: p,
                        previousStore: k
                    }), d && s.blockType) {
                    let e, t, r, u, p = s.collectionViewType,
                        g = 0 !== m.length ? null == (o = m[0]) ? void 0 : o.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let a = null == (l = h.getCollectionViewStores()) ? void 0 : l.at(0);
                        e = null == a || null == (i = a.getChartConfig()) ? void 0 : i.type, t = null == a ? void 0 : a.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (n = h.getCollectionViewStores()) ? void 0 : n.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        r = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: f,
                        ownedCollectionCount: v,
                        linkedCollectionCount: y
                    } = (0, a(633171).P)(h, {
                        skipPages: !1
                    }), k = {
                        from: d,
                        collection_id: f,
                        owned_collection_count: v,
                        linked_collection_count: y,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: s.isToggleable,
                        automation_id: h.getAutomationId(),
                        new_page_id: "page" === s.blockType ? h.id : void 0,
                        creating_block_id: h.id,
                        parent_collection_id: g,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: r,
                        view_id: u
                    }, T = s.blockType;
                    a(549960).tP(T) ? a(549960).vH(c, { ...k,
                        type: T,
                        collection_id: f || ""
                    }) : a(549960).vH(c, { ...k,
                        type: T
                    })
                }
                return h
            }
        },
        150945: (e, t, a) => {
            function r(e) {
                let t, {
                        environment: r,
                        createBlockItem: o,
                        selection: l,
                        transaction: i,
                        analyticsFrom: n,
                        preventSetSelection: c
                    } = e,
                    s = a(584265).default.getCurrentRecordCache(),
                    d = new(a(303541)).UF({
                        environment: r,
                        userFlow: (null == o ? void 0 : o.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: n,
                        succeedOnEnqueue: !0
                    });
                if ((0, a(194020).E)(r, (0, a(974410).f)(l[0])) && o && s) {
                    let e = a(95783).w({
                        environment: r,
                        createBlockItem: o,
                        transaction: i,
                        inMemoryRecordCache: s,
                        from: n,
                        selection: l
                    });
                    d.track(e.pointer, i), t = (0, a(210318).L)({
                        environment: r,
                        blocksToInsert: [e],
                        target: l,
                        transaction: i,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: c
                    })[0]
                } else d.fail("invalid_state");
                return t
            }

            function o(e) {
                let t, {
                        environment: r,
                        createBlockItem: o,
                        selection: l,
                        transaction: i,
                        analyticsFrom: n,
                        preventSetSelection: c
                    } = e,
                    s = a(584265).default.getCurrentRecordCache();
                if ((0, a(194020).E)(r, (0, a(974410).f)(l[0])) && o && s) {
                    let e = a(95783).w({
                        environment: r,
                        createBlockItem: o,
                        transaction: i,
                        inMemoryRecordCache: s,
                        from: n,
                        selection: l
                    });
                    t = (0, a(199894).t)({
                        environment: r,
                        blocks: [e],
                        selection: l,
                        transaction: i,
                        preventSetSelection: c
                    })[0]
                }
                return t
            }

            function l(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: l
                } = e, i = r({ ...e,
                    preventSetSelection: !0
                });
                if (i) {
                    var n;
                    (0, a(270819).x)({
                        environment: t,
                        insertedStores: [i],
                        isCreated: !0
                    });
                    let e = a(708929).Uv.getMode(i);
                    if ("suggest" === e) {
                        let e = (0, a(714577).R)(t, l, i);
                        (0, a(132993).t)(l, i, {
                            id: a(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, a(941538).c)({
                            environment: t,
                            transaction: l,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [i.id]
                        })
                    }
                    "suggest" === e && null != (n = i.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && n.isCommentOnly() || (0, a(5556).u)({
                        transaction: l,
                        blocks: o
                    })
                }
                return i
            }

            function i(e) {
                let {
                    blocks: t,
                    transaction: o,
                    environment: l,
                    skipAnalytics: i
                } = e, n = r({
                    environment: l,
                    selection: t,
                    createBlockItem: a(992140).ry.text,
                    analyticsFrom: i ? void 0 : "text_insert_below",
                    transaction: o
                });
                return n && a(374176).default.afterNextFlush(() => {
                    (0, a(464515).z)({
                        environment: l,
                        blockStore: n,
                        insertedTextBlockLocation: "below",
                        editSelection: a(182553).h,
                        getRectFromStore: a(240414).T.getRectFromStore.bind(a(240414).T)
                    })
                }), n
            }

            function n(e) {
                let {
                    blocks: t,
                    transaction: r,
                    environment: l,
                    skipAnalytics: i
                } = e, n = o({
                    environment: l,
                    selection: t,
                    createBlockItem: a(992140).ry.text,
                    analyticsFrom: i ? void 0 : "text_insert_below",
                    transaction: r
                });
                return n && a(374176).default.afterNextFlush(() => {
                    (0, a(464515).z)({
                        environment: l,
                        blockStore: n,
                        insertedTextBlockLocation: "above",
                        editSelection: a(182553).h,
                        getRectFromStore: a(240414).T.getRectFromStore.bind(a(240414).T)
                    })
                }), n
            }
            a.r(t), a.d(t, {
                insertBlockAbove: () => o,
                insertBlockAndEdit: () => l,
                insertBlockBelow: () => r,
                insertTextAbove: () => n,
                insertTextBelow: () => i
            })
        },
        170013: (e, t, a) => {
            async function r(e) {
                let {
                    navigateToTarget: t,
                    skipUserFacingMessages: r,
                    ...l
                } = e, {
                    environment: i,
                    from: n
                } = l, c = o;
                c = (0, a(94228).yE)(c, a(94228).Nf), c = (0, a(94228).ME)(c), r || (c = (0, a(94228).yE)(c, a(94228).vd), c = (0, a(94228).$2)(c)), t && (c = (0, a(94228).em)(c));
                let s = `duplicateSubtree.${n}`;
                return c = (0, a(94228).NU)({
                    environment: i,
                    runner: c,
                    userAction: s,
                    method: "server_duplicate_subtree",
                    from: n
                }), c = (0, a(94228).E0)({
                    runner: c,
                    userAction: s
                }), await (0, a(94228).Fe)({
                    runner: c,
                    args: l
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    destination: r,
                    options: o,
                    from: l,
                    sourceBlocks: i,
                    listener: n,
                    appendWithoutAfter: c,
                    unlockPages: s
                } = e, d = i[0].getSpaceId(), u = r.parent.spaceId, p = {
                    allowDuplicateSourceIds: o.allowDuplicateSourceIds,
                    allowMixedExistingBlockParents: o.allowMixedExistingBlockParents,
                    allowRedundancy: o.allowRedundancy,
                    appendNumericTitleSuffix: o.addCopyName,
                    resolveTemplateVariables: o.resolveTemplateVariables ? {
                        currentUserId: t.currentUser.id,
                        currentTimeZone: (0, a(714350).P)()
                    } : void 0,
                    excludeCollectionChildren: o.duplicateOnlyCollectionSchema,
                    excludeTransclusionContainerChildren: !o.deepCopyTransclusionContainers,
                    isTemplateInstantiation: o.isTemplateInstantiation,
                    unlockPages: s,
                    sourceBlockUpdateStrategy: o.sourceBlockUpdateStrategy,
                    shouldNavToFirstTarget: o.shouldNavToFirstTarget
                };
                a(773352).log({
                    level: "info",
                    from: "duplicateTo",
                    type: "duplicateSubtree",
                    data: {
                        miscDataToConvertToString: {
                            from: l,
                            duplicateSubtreeOptions: p,
                            sourceSpaceId: d,
                            targetSpaceId: u
                        }
                    }
                }), (0, a(494010).Wy)(r) && !c && void 0 === r.siblingId && i[i.length - 1].getParentId() === r.parent.id && (r.siblingId = i[i.length - 1].id);
                let m = {
                        source: {
                            ids: i.map(e => e.id),
                            spaceId: d
                        },
                        destination: r,
                        options: p,
                        userAction: `duplicateSubtree.${l}`
                    },
                    g = (0, a(259242).UT)({
                        environment: t,
                        eventName: a(916501).$,
                        request: m,
                        multiCellRouting: {
                            spaceIds: (0, a(763230).sb)([d, u])
                        }
                    });
                await (0, a(94228).nN)({
                    environment: t,
                    iterator: g,
                    listener: n,
                    targetSpaceId: u,
                    retryOnMainCell: () => (0, a(259242).UT)({
                        environment: t,
                        eventName: a(916501).$,
                        request: m,
                        multiCellRouting: {
                            spaceIds: []
                        }
                    })
                })
            }

            function l(e) {
                let {
                    options: t,
                    gateName: r,
                    appendWithoutAfter: o,
                    templateInstallationMetadata: l,
                    from: i,
                    sourceBlocks: n,
                    destination: c
                } = e;
                if (!r || !a(218744).default.checkGate({
                        gateName: r
                    })) return !1;
                let s = !t.shouldTranslate && !t.targetLanguage && !t.sourceLanguage && !t.returnRecordIdMap && !o && (!l || !(0, a(252822).Fe)(l.source));
                return s || a(773352).log({
                    level: "warning",
                    from: "duplicateTo",
                    type: "duplicateSubtree_not_supported",
                    data: {
                        miscDataToConvertToString: {
                            options: t,
                            from: i,
                            sourceBlocksIds: n.map(e => e.id),
                            destination: c
                        }
                    }
                }), s
            }
            a.d(t, {
                B: () => l,
                V: () => r
            }), a(581454)
        },
        199894: (e, t, a) => {
            a.d(t, {
                t: () => r
            }), a(16280), a(898992), a(672577), a(581454);

            function r(e) {
                let {
                    environment: t,
                    selection: r,
                    transaction: o,
                    preventSetSelection: l
                } = e, {
                    blocks: i
                } = e, n = (0, a(385941).Z)();
                if (!n) throw Error("No root store.");
                if (r.length > 0) {
                    let e = r[0],
                        n = a(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!n || !n.props.onInsertAbove) throw Error("No Selectable found.");
                    let c = n.props.onInsertAbove({
                        insertStores: i,
                        transaction: o
                    });
                    return l || (0, a(854924).t)({
                        environment: t,
                        stores: c
                    }), c
                } {
                    let e = n.getContentStore(),
                        r = i.map(t => (0, a(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: o
                        }).childStore);
                    return l || (0, a(854924).t)({
                        environment: t,
                        stores: r
                    }), r
                }
            }
        },
        275366: (e, t, a) => {
            async function r(e) {
                let {
                    environment: t,
                    sourceTemplateBlockStore: r,
                    templateId: l,
                    destination: i,
                    options: n,
                    templateInstallationMetadata: c,
                    installationImprint: s,
                    navigateToTarget: d,
                    from: u,
                    listener: p = () => Promise.resolve()
                } = e, {
                    source: m,
                    isListedTemplate: g,
                    isEmailShared: f = !1
                } = c, {
                    executionTarget: v
                } = a(730125).A.getState();
                if (!((0, a(252822).Fe)(m) && g) && "server" !== v) {
                    let e = await (0, a(44226).tryLocalOrServerBackedDuplicateTo)({
                        environment: t,
                        sourceStores: [r],
                        destination: i,
                        options: n,
                        appendWithoutAfter: !0,
                        from: u,
                        templateInstallationMetadata: c,
                        installationImprint: s,
                        navigateToTarget: d,
                        listener: p
                    });
                    if (a(300441).Q.isFail(e)) return e;
                    if (e.value) return a(300441).Q.success({
                        createdBlocks: e.value
                    })
                }
                let y = a(218744).default.checkGate({
                    gateName: "duplicate_subtree_template_flows"
                });
                return "local" !== v && y ? o({
                    environment: t,
                    destination: i,
                    from: u,
                    sourceTemplateBlockStore: r,
                    templateId: l,
                    listener: p,
                    options: {
                        templateSource: m,
                        isEmailShared: f,
                        allowRedundancy: n.allowRedundancy
                    }
                }) : (0, a(918103).hh)({
                    environment: t,
                    sourceBlocks: [r],
                    destination: i,
                    installationImprint: s,
                    templateInstallationMetadata: c,
                    options: n,
                    appendWithoutAfter: !0,
                    from: u,
                    navigateToTarget: d,
                    skipUserFacingMessages: !0,
                    unlockPage: !0,
                    listener: p
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    sourceTemplateBlockStore: r,
                    from: o
                } = e, i = l;
                return i = (0, a(94228).yE)(i, a(94228).Nf), i = (0, a(94228).ME)(i), i = (0, a(94228).NU)({
                    environment: t,
                    runner: i,
                    userAction: `installTemplate.${o}`,
                    method: "server_install_template",
                    from: o
                }), await (0, a(94228).Fe)({
                    runner: i,
                    args: { ...e,
                        sourceBlocks: [r]
                    }
                })
            }
            async function l(e) {
                let {
                    environment: t,
                    sourceBlocks: r,
                    destination: o,
                    from: l,
                    options: i,
                    listener: n,
                    templateId: c
                } = e, {
                    templateSource: s,
                    isEmailShared: d,
                    allowRedundancy: u
                } = i;
                if (1 !== r.length) return n({
                    type: "error",
                    error: Error("Can only install one template block at a time")
                });
                if ("space" !== o.type && "team" !== o.type) return n({
                    type: "error",
                    error: Error(`Invalid destination type for template installation: ${o.type}`)
                });
                let p = r[0],
                    m = p.getSpaceShardedPointer(),
                    g = o.parent.spaceId;
                a(773352).log({
                    level: "info",
                    from: "installTemplate",
                    type: "installTemplateQueueTask",
                    data: {
                        miscDataToConvertToString: {
                            from: l,
                            sourceSpaceId: p.getSpaceId(),
                            targetSpaceId: g
                        }
                    }
                });
                let f = {
                        source: m,
                        templateId: c,
                        destination: o,
                        options: {
                            allowRedundancy: u,
                            timezone: (0, a(714350).P)(),
                            source: s,
                            isEmailShared: d
                        }
                    },
                    v = (0, a(259242).UT)({
                        environment: t,
                        eventName: a(101171).$,
                        request: f,
                        multiCellRouting: {
                            spaceIds: (0, a(763230).sb)([m.spaceId, g])
                        }
                    });
                await (0, a(94228).nN)({
                    environment: t,
                    iterator: v,
                    listener: n,
                    targetSpaceId: g,
                    retryOnMainCell: () => (0, a(259242).UT)({
                        environment: t,
                        eventName: a(101171).$,
                        request: f,
                        multiCellRouting: {
                            spaceIds: []
                        }
                    })
                })
            }
            a.r(t), a.d(t, {
                installTemplateImpl: () => r
            }), a(16280)
        },
        285482: (e, t, a) => {
            a.d(t, {
                A: () => r
            });

            function r(e, t) {
                if ((0, a(101787).pA8)(t)) {
                    let r = (0, a(115964).$)(t.clientData);
                    if (r) return "messageValues" in t.clientData ? e.formatMessage(r, t.clientData.messageValues) : e.formatMessage(r)
                }
                return e.formatMessage(a(683646).k.generic_error)
            }
        },
        425749: (e, t, a) => {
            a.d(t, {
                I$: () => i,
                R2: () => s,
                WF: () => c,
                bZ: () => n,
                cE: () => o,
                jX: () => l,
                rz: () => d
            });
            var r = () => a(381453);

            function o(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let l = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function i(e) {
                return !!(void 0 !== e && (0, a(722371).Xk)(l, e))
            }

            function n() {
                let e = (0, a(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: a(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, a(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function c(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of s)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        450228: (e, t, a) => {
            a.r(t), a.d(t, {
                duplicateBlock: () => m
            }), a(16280), a(898992), a(823215), a(581454), a(737550);
            var r = () => a(728372);
            class o {
                metricName;
                startMetric;
                prevLapMetric;
                extraData;
                constructor(e) {
                    this.metricName = e.metricName, this.startMetric = a(680007).default.mark(e.metricName), this.prevLapMetric = a(680007).default.mark(e.metricName), this.extraData = e.extraData ? ? {}
                }
                mark(e) {
                    a(680007).default.measure(this.prevLapMetric, {
                        data: {
                            type: e,
                            ...this.extraData
                        },
                        sampleDecision: "default"
                    }), this.prevLapMetric = a(680007).default.mark(this.metricName)
                }
                end() {
                    a(680007).default.measure(this.startMetric, {
                        data: {
                            type: "total",
                            ...this.extraData
                        },
                        sampleDecision: "default"
                    })
                }
            }
            var l = () => a(746473),
                i = () => a(681735),
                n = () => a(955630),
                c = () => a(832375),
                s = () => a(549960),
                d = () => a(205103),
                u = () => a(633171);
            let p = (0, a(109939).YK)({
                blocksDuplicated: {
                    id: "duplication.a11y.blocksDuplicated",
                    defaultMessage: "{count, plural, one {# block duplicated} other {# blocks duplicated}}"
                }
            });

            function m(e) {
                if (e.skipUserFacingMessages) return g(e);
                let t = a(617154).CU({
                    sourceBlocks: e.stores
                });
                try {
                    let r = g({ ...e,
                        onRedundantDuplicationError: () => {
                            (0, a(977283).Yv)()
                        }
                    });
                    return { ...r,
                        onComplete: r.onComplete.then(r => ("success" === r.status ? (a(617154).MK(t), (0, a(663123).l)(a(962299).A.formatMessage(p.blocksDuplicated, {
                            count: e.stores.length
                        }))) : a(617154).UO(t), r)).catch(e => {
                            throw a(617154).UO(t), e
                        })
                    }
                } catch (e) {
                    throw a(617154).UO(t), e
                }
            }

            function g(e) {
                let {
                    environment: t,
                    stores: p,
                    transaction: m,
                    targetSpaceId: g,
                    executionTarget: f,
                    from: v,
                    options: y,
                    installationImprint: h,
                    templateInstallationMetadata: k,
                    shouldUseSynchronousDuplicationAPI: T,
                    skipUserFacingMessages: _,
                    onRedundantDuplicationError: S
                } = e, I = "local" === (a(730125).A.getState().executionTarget ? ? f) ? "local_duplication" : T ? "server_synchronous_duplication" : "server_duplication", b = new o({
                    metricName: "duplicate_block_stopwatch",
                    extraData: {
                        duplication_type: I,
                        from: v
                    }
                });
                if (0 === p.length) throw Error("Must duplicate at least one block");
                let w = p[0].getSpaceId();
                if (!p.every(e => e.getSpaceId() === w)) throw Error("All stores must be in the same space");
                if (p.length > 1 && !y.useSharedContext && !p.every(e => e.isTypedCollectionViewBlock())) throw Error("Multiple source blocks only supported for grouped typed DB duplication unless useSharedContext option is true");
                (function(e) {
                    let {
                        environment: t,
                        stores: a
                    } = e;
                    for (let e of a) {
                        let a, o = (0, l().zH)(e).getValue();
                        if (!o) continue;
                        let d = r().AppStoreSidebarSpaceStore.state;
                        d && o.parent_table === c().yKj && (a = i().h.createChildStore(d, {
                            table: c().yKj,
                            id: o.parent_id
                        }));
                        let {
                            collectionId: p,
                            ownedCollectionCount: m,
                            linkedCollectionCount: g
                        } = (0, u().P)(e, {
                            skipPages: !1
                        }), f = {
                            from: "copy",
                            type: o.type,
                            teamStore: a,
                            is_toggleable: (0, n().Yt)(o.type, o.format),
                            collection_id: p,
                            owned_collection_count: m,
                            linked_collection_count: g,
                            new_page_id: "page" === o.type ? e.id : void 0,
                            creating_block_id: e.id,
                            parent_collection_id: e.getParentCollectionIdUpToTwoLevels(),
                            form_id: e.getFirstFormIdInCollectionViewBlock()
                        };
                        s().tP(o.type) ? s().vH(t, { ...f,
                            type: o.type,
                            collection_id: p || ""
                        }) : s().vH(t, { ...f,
                            type: o.type
                        })
                    }
                })({
                    environment: t,
                    stores: p
                }), b.mark("track_create_blocks"), y.convertExternalObjectInstancesToPlaceholders = w !== g;
                let C = k && (0, a(252822).Fe)(k.source) && k.isListedTemplate;
                if (1 === p.length && "local_duplication" === I && !C) {
                    let e = p[0],
                        r = (0, a(44226).tryLocalDuplicateWithTransaction)({
                            environment: t,
                            store: e,
                            options: y,
                            sourceSpaceId: w,
                            targetSpaceId: g,
                            transaction: m,
                            installationImprint: h,
                            templateInstallationMetadata: k,
                            stopwatch: b,
                            from: v,
                            destinationTable: e.getParentTable()
                        });
                    if (r) {
                        let {
                            targetBlockStore: e
                        } = r;
                        return b.mark("try_local_duplication_success"), b.end(), {
                            blockStores: [e],
                            onComplete: Promise.resolve({
                                status: "success"
                            })
                        }
                    }
                    b.mark("try_local_duplication_failure")
                }
                let B = t.defaultRecordCache.inMemoryRecordCache;
                if (p.some(e => e.inMemoryRecordCache !== B)) throw Error("Can only server duplicate from the environment.defaultRecordCache.inMemoryRecordCache.");
                a(205885).A.state.online || a(647095).f1(a(962299).A.formatMessage(a(450976).V.offlineError));
                let M = (0, a(994731).serverDuplicate)({
                    environment: t,
                    sourceBlocks: p.map(e => ({
                        id: e.id,
                        spaceId: e.getSpaceId()
                    })),
                    targetInMemoryRecordCache: B,
                    transaction: m,
                    targetSpaceId: g,
                    installationImprint: h,
                    templateInstallationMetadata: k,
                    stopwatch: b,
                    shouldUseSynchronousDuplicationAPI: T,
                    options: y,
                    from: v,
                    onRedundantDuplicationError: S,
                    destinationTable: p[0].getParentTable(),
                    blockType: p[0].getType()
                });
                if (b.mark("duplicate_block_immediate_return"), a(300441).Q.isFail(M)) throw _ || (0, a(648048).x)({
                    environment: t,
                    duplicateError: M.error
                }), M.error;
                let {
                    blockStores: x,
                    onComplete: R
                } = M.value, A = a(975162).yX();
                return R.then(e => {
                    if (b.end(), a(300441).Q.isSuccess(e)) {
                        for (let e of x)
                            if ("ai_block" === e.getType()) {
                                d().EF.setState(e.pointer.id);
                                break
                            }
                        A.resolve({
                            status: "success",
                            recordIdMap: e.value.recordIdMap
                        })
                    } else {
                        var r;
                        _ || (0, a(648048).x)({
                            environment: t,
                            duplicateError: e.error,
                            blockStores: x
                        }), A.resolve({
                            status: "error",
                            error: e.error,
                            errorMessage: null == (r = (0, a(648048).V2)(e.error)) ? void 0 : r.description
                        })
                    }
                }), {
                    blockStores: x,
                    onComplete: A.promise
                }
            }
        },
        464515: (e, t, a) => {
            a.d(t, {
                z: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    blockStore: r,
                    insertedTextBlockLocation: o,
                    editSelection: l,
                    getRectFromStore: i
                } = e, n = a(764615).Ay.state;
                if (l({
                        environment: t,
                        store: r
                    }), (0, a(940763).e)({
                        store: r.getBlockTitleStore()
                    }), !n.open && !t.device.isPhone) {
                    let e = r.getBlockTitleStore(),
                        l = i(r),
                        n = a(92513).JW();
                    l && (a(764615).Ay.setState({
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
                        selectionRect: l,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: a(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: o
                    }), (0, a(525779).clear)({
                        environment: t
                    }), (0, a(940763).e)({
                        store: e
                    }), (0, a(104310).u)({
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
        730125: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            let r = a(546605).Store.createValue({
                executionTarget: null
            }, {
                name: "DuplicationDebuggingStore"
            })
        },
        852864: (e, t, a) => {
            a.d(t, {
                H: () => r
            }), a(898992), a(672577);

            function r({
                spaceStore: e,
                userId: t,
                environment: o
            }) {
                let l = new(a(736309)).d(o, {
                    table: a(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return l ? a(994797).SpaceViewStore.createChildStore(e, {
                    id: l.id,
                    table: a(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        937776: (e, t, a) => {
            a.d(t, {
                B: () => l
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                l = (0, a(104509).wt)("archiveBox", o, "default")
        },
        938141: (e, t, a) => {
            async function r(e) {
                let {
                    environment: t
                } = e, r = "moveToSpace", l = "move_to_space", i = o;
                return i = (0, a(94228).yE)(i, a(94228).Nf), i = (0, a(94228).yE)(i, a(94228).vd), i = (0, a(94228).ME)(i), i = (0, a(94228).$2)(i), i = (0, a(94228).NU)({
                    environment: t,
                    runner: i,
                    userAction: r,
                    method: "server_move_to_space",
                    from: l
                }), i = (0, a(94228).E0)({
                    runner: i,
                    userAction: r
                }), (0, a(94228).Fe)({
                    runner: i,
                    args: { ...e,
                        from: l
                    }
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    listener: r,
                    sourceBlocks: o,
                    destination: l,
                    options: i
                } = e, n = (0, a(259242).UT)({
                    environment: t,
                    eventName: a(540304).q,
                    request: {
                        source: {
                            ids: o.map(e => e.id),
                            spaceId: o[0].getSpaceId()
                        },
                        destination: l,
                        options: i
                    },
                    multiCellRouting: {
                        spaceIds: []
                    }
                });
                await (0, a(94228).nN)({
                    environment: t,
                    iterator: n,
                    listener: r,
                    targetSpaceId: l.parent.spaceId
                })
            }
            a.r(t), a.d(t, {
                moveToSpaceImpl: () => r
            }), a(581454)
        },
        966559: (e, t, a) => {
            a.r(t), a.d(t, {
                exclamationMarkCircleSmallIcon: () => l,
                iconDefinition: () => o
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, r.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                l = (0, a(104509).wt)("exclamationMarkCircleSmall", o, "small")
        },
        984211: (e, t, a) => {
            a.d(t, {
                f: () => o
            }), a(296540);
            var r = a(474848);

            function o(e) {
                let {
                    item: t,
                    onDismiss: o
                } = e;
                a(436555).D6({ ...t,
                    right: (0, r.jsx)(a(531119).Ag, {
                        onClick: o ? ? a(436555).N2,
                        children: (0, r.jsx)(a(109939).sA, {
                            id: "snackbar.dismiss.title",
                            defaultMessage: "Dismiss"
                        })
                    })
                })
            }
        }
    }
]);