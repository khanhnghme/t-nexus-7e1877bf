"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [53847], {
        44226: (e, t, r) => {
            r.r(t), r.d(t, {
                loadInMemorySubtree: () => w,
                loadSubtreesForLocalDuplication: () => B,
                localDuplicate: () => I,
                performLocalDuplication: () => T,
                prepareLocalDuplicateSnapshot: () => v,
                tryLocalDuplicateWithTransaction: () => h,
                tryLocalOrServerBackedDuplicateTo: () => k
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var a = () => r(352441),
                o = () => r(970831),
                l = () => r(356912),
                n = () => r(955630),
                i = () => r(488307),
                c = () => r(642157),
                s = () => r(832375),
                d = () => r(205103),
                p = () => r(578825),
                u = () => r(295447),
                m = () => r(421439),
                g = () => r(746094),
                f = () => r(208322),
                y = () => r(559096),
                _ = () => r(124690),
                S = () => r(994731);

            function v(e) {
                let {
                    environment: t,
                    store: r,
                    sourceSpaceId: a,
                    targetSpaceId: o,
                    options: l
                } = e, n = (0, y().loadLocalSubtree)({
                    environment: t,
                    blockId: r.id,
                    inMemoryRecordCache: r.inMemoryRecordCache,
                    options: {
                        allowCopyCollections: !1,
                        requireFullSubtree: !0,
                        skipTransclusionContainerChildren: !l.deepCopyTransclusionContainers,
                        allowCopyExternalObjectInstances: !l.convertExternalObjectInstancesToPlaceholders,
                        includeLegacyTransclusionBlockValues: !0
                    }
                }).recordMap;
                if (n && C({
                        environment: t,
                        localSubtree: n,
                        sourceSpaceId: a,
                        targetSpaceId: o
                    })) return {
                    sourceBlockId: r.id,
                    sourceBlockSubtree: n,
                    targetBlockPointer: (0, u().zP)({
                        environment: t,
                        table: s().evP,
                        spaceId: o
                    }),
                    options: {
                        deepCopyTransclusionContainers: !!l.deepCopyTransclusionContainers,
                        resolveTemplateVariables: !!l.resolveTemplateVariables
                    }
                }
            }

            function I(e) {
                try {
                    return b({ ...e,
                        method: "local_duplication"
                    })
                } catch (t) {
                    throw r(773352).log({
                        level: "error",
                        from: "localDuplicate",
                        type: "local_duplicate_error",
                        error: (0, r(416607).convertErrorToLog)(t),
                        data: {
                            sourceBlockId: e.sourceBlockId
                        }
                    }), e.skipUserFacingMessages || r(648048).x({
                        environment: e.environment,
                        duplicateError: new(r(101787)).Bk6
                    }), t
                }
            }

            function b(e) {
                var t, a;
                let {
                    environment: l,
                    sourceBlockId: n,
                    targetBlockPointer: i,
                    sourceBlockSubtree: c,
                    targetInMemoryRecordCache: d,
                    options: p,
                    transaction: u,
                    installationImprint: m,
                    templateInstallationMetadata: g,
                    stopwatch: y,
                    method: _,
                    from: v
                } = e, I = performance.now();
                null == y || y.mark("local_duplicate_start");
                let b = i.spaceId,
                    h = c.getModel({
                        id: n,
                        table: s().evP
                    }),
                    k = null == h ? void 0 : h.getSpaceId(),
                    C = [],
                    T = b ? ? (null == (t = (0, r(328765).S)()) ? void 0 : t.id) ? ? (null == (a = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : a.getSpaceId()),
                    M = T ? l.idCreator.getSpaceIdCreatorSync(T) : void 0,
                    B = k ? l.idCreator.getSpaceIdCreatorSync(k) : void 0,
                    {
                        targetBlockStore: w,
                        originalToDuplicate: R,
                        subtreeSize: L
                    } = (0, r(963771).initializeTemplate)({
                        environment: l,
                        sourceBlockId: n,
                        targetBlockPointer: i,
                        sourceBlockSubtree: c,
                        targetRecordCache: d,
                        transaction: u,
                        deepCopyTransclusionContainers: !!p.deepCopyTransclusionContainers,
                        resolveTemplateVariables: !!p.resolveTemplateVariables,
                        preventLegacyTransclusions: p.preventLegacyTransclusions,
                        createLegacyTransclusionCopyIndicator: {
                            onCreate(e) {
                                C.push(e)
                            }
                        },
                        installationImprint: m,
                        templateInstallationMetadata: g,
                        isTemplateInstantiation: p.isTemplateInstantiation,
                        spaceIdCreator: M,
                        sourceSpaceIdCreator: B,
                        sourceBlockUpdateStrategy: p.sourceBlockUpdateStrategy ? ? (p.appendContentOnly ? "append_only" : void 0)
                    });
                null == y || y.mark("local_duplicate_initialize_template_success"), (0, f().JW)({
                    environment: l,
                    type: "local_duplicate_initialize_template_success",
                    data: {
                        message: "Successful initialize template",
                        targetSpaceId: b,
                        sourceSpaceId: k,
                        targetBlockStore: w,
                        subtreeSize: L
                    }
                }), b !== k && r(773352).log({
                    level: "info",
                    from: "localDuplicate",
                    type: "local_duplicate_across_spaces",
                    data: {
                        sourceSpaceId: k,
                        targetSpaceId: b,
                        sourceBlockId: n,
                        subTreeSize: c.getSize()
                    }
                }), p.addCopyName && w && w.isNavigableBlock() && (function(e) {
                    let {
                        environment: t,
                        transaction: a,
                        targetBlockStore: o
                    } = e, l = o.getTitleStore();
                    if (!l) return;
                    let n = l.getValue(),
                        i = (0, r(441998).g)(n);
                    r(41403).R9({
                        environment: t,
                        store: l,
                        value: i,
                        transaction: a
                    }), (0, f().JW)({
                        environment: t,
                        type: "local_duplicate_text_set_value",
                        data: {
                            value: i,
                            titleStoreId: l.id,
                            targetBlockId: o.id
                        }
                    })
                }({
                    environment: l,
                    transaction: u,
                    targetBlockStore: w
                }), null == y || y.mark("local_duplicate_add_copy_name")), C.length && (function(e) {
                    let {
                        environment: t,
                        transaction: a,
                        targetBlockStore: l,
                        targetRecordCache: n,
                        sourceSpaceId: i,
                        legacyTransclusionCopyIndicators: c,
                        options: d,
                        templateInstallationMetadata: p,
                        from: u
                    } = e, m = !r(205885).A.state.online;
                    for (let e of (m && r(647095).f1(r(962299).A.formatMessage(r(450976).V.offlineError)), c)) {
                        (0, f().JW)({
                            environment: t,
                            type: "local_duplicate_legacy_transclusion_copy_indicators",
                            data: {
                                message: "Iterating legacyTransclusionCopyIndicators",
                                info: e
                            }
                        });
                        let r = l.getSpaceId(),
                            c = o().B.createChildStore(l, {
                                table: s().evP,
                                id: e.duplicateBlockId
                            });
                        (0, S().serverDuplicate)({
                            environment: t,
                            targetSpaceId: r,
                            targetInMemoryRecordCache: n,
                            transaction: a,
                            sourceBlocks: [{
                                id: e.sourceBlockId,
                                spaceId: i
                            }],
                            copyIndicators: [c],
                            options: { ...d,
                                addCopyName: !1,
                                convertExternalObjectInstancesToPlaceholders: d.convertExternalObjectInstancesToPlaceholders ? ? !1
                            },
                            templateInstallationMetadata: p,
                            from: u
                        })
                    }
                    r(508297).hi({
                        offline: m,
                        num_blocks_duplicated: c.length,
                        user_action: a.getUserActionForAnalyticsPurposesOnly()
                    })
                }({
                    environment: l,
                    transaction: u,
                    targetBlockStore: w,
                    targetRecordCache: d,
                    sourceSpaceId: k,
                    legacyTransclusionCopyIndicators: C,
                    options: p,
                    templateInstallationMetadata: g,
                    from: v
                }), null == y || y.mark("local_duplicate_legacy_transclusion_fix"));
                let P = performance.now();
                return u.postSubmitCallbacks.push(t => {
                    (0, r(450976).E)({
                        environment: l,
                        success: !t,
                        time: P - I,
                        user_action: u.getUserActionForAnalyticsPurposesOnly(),
                        is_duplication_local: !0,
                        duplication_size: L,
                        method: _,
                        from: v,
                        destination_table: e.destinationTable,
                        block_type: null == h ? void 0 : h.getType(),
                        is_template_instantiation: p.isTemplateInstantiation,
                        source_space_id: k,
                        target_space_id: b
                    })
                }), null == y || y.mark("local_duplicate_success"), {
                    targetBlockStore: w,
                    originalToDuplicate: R
                }
            }

            function h(e) {
                let {
                    environment: t,
                    store: r,
                    sourceSpaceId: a,
                    targetSpaceId: o,
                    transaction: l,
                    options: n,
                    installationImprint: i,
                    templateInstallationMetadata: c,
                    stopwatch: p,
                    from: m
                } = e, g = (0, y().loadLocalSubtree)({
                    environment: t,
                    blockId: r.id,
                    inMemoryRecordCache: r.inMemoryRecordCache,
                    options: {
                        allowCopyCollections: !1,
                        requireFullSubtree: !0,
                        skipTransclusionContainerChildren: !n.deepCopyTransclusionContainers,
                        allowCopyExternalObjectInstances: !n.convertExternalObjectInstancesToPlaceholders,
                        includeLegacyTransclusionBlockValues: !0
                    }
                }).recordMap;
                if (!g || !C({
                        environment: t,
                        localSubtree: g,
                        sourceSpaceId: a,
                        targetSpaceId: o
                    })) return;
                null == p || p.mark("load_local_subtree");
                let f = !0 === r.inMemoryRecordCache.isTemporaryData ? t.defaultRecordCache.inMemoryRecordCache : r.inMemoryRecordCache,
                    _ = b({
                        environment: t,
                        sourceBlockId: r.id,
                        targetBlockPointer: (0, u().zP)({
                            environment: t,
                            table: s().evP,
                            spaceId: o
                        }),
                        sourceBlockSubtree: g,
                        targetInMemoryRecordCache: f,
                        options: { ...n,
                            preventLegacyTransclusions: !0
                        },
                        transaction: l,
                        installationImprint: i,
                        templateInstallationMetadata: c,
                        stopwatch: p,
                        from: m,
                        method: "local_duplication",
                        destinationTable: e.destinationTable
                    }),
                    {
                        targetBlockStore: S
                    } = _;
                return "ai_block" === S.getType() && d().EF.setState(S.pointer.id), _
            }
            async function k(e) {
                let t, {
                        environment: a,
                        sourceStores: o,
                        destination: l,
                        options: n,
                        installationImprint: i,
                        templateInstallationMetadata: c,
                        from: d,
                        appendWithoutAfter: p,
                        navigateToTarget: u,
                        unlockPages: m,
                        useServerFallback: g,
                        undoCheckpoint: f,
                        listener: y
                    } = e,
                    _ = l.parent.spaceId,
                    S = o[0].getSpaceId();
                if (!_ || !S) return r(300441).Q.success(void 0);
                if (1 !== new Set(o.map(e => e.getSpaceId())).size) throw Error("All source stores must be in the same space");
                let v = a.currentUser.id;
                if (!v) return r(300441).Q.success(void 0);
                let I = (0, r(852864).H)({
                    spaceStore: new(r(695906)).SpaceStore(a, {
                        table: s().NXh,
                        id: _
                    }),
                    userId: v,
                    environment: a
                });
                if (!I) return r(300441).Q.success(void 0);
                let b = l.existingBlockIds,
                    h = Array.isArray(b);
                if (h && b.length !== o.length) throw Error("existingBlockIds length must match sourceStores length");
                let k = await B({
                    environment: a,
                    sourceStores: o,
                    existingBlockIds: b,
                    targetSpaceId: _,
                    options: n,
                    shouldUseServerBackedDuplication: (g && h) ? ? !1,
                    bailOnMiss: !0
                });
                if (!k) return r(300441).Q.success(void 0);
                await y({
                    type: "started"
                });
                let C = (0, r(377796).createAndCommit)({
                        environment: a,
                        userAction: `localDuplication.${d}`,
                        cellTarget: {
                            spaceWithId: _
                        },
                        isTemplateInstantiationTransaction: !!c,
                        canUndo: !0,
                        undoCheckpoint: f,
                        suppressErrorDialogForStatuses: [413],
                        perform: e => T({
                            environment: a,
                            sourceStores: o,
                            destination: l,
                            options: n,
                            targetSpaceId: _,
                            transaction: e,
                            existingBlockIds: b,
                            localSubtrees: k,
                            from: d,
                            installationImprint: i,
                            templateInstallationMetadata: c,
                            unlockPages: m,
                            appendWithoutAfter: p,
                            targetSpaceViewStore: I
                        }),
                        transactionTooBigFallback: () => {}
                    }),
                    M = C.performResult;
                if (void 0 === M) return r(300441).Q.success(void 0);
                let w = window.location.href;
                M[0].isNavigableBlock() && (t = M[0], u && (0, r(210370).F)({
                    environment: a,
                    blockStore: t,
                    sourceBlockId: o[0].id
                }), await y({
                    type: "page_navigable",
                    navigableBlockStore: t
                }));
                try {
                    await C.serverCommitResult, await y({
                        type: "completed",
                        createdBlocks: M,
                        recordIdMap: void 0
                    })
                } catch (e) {
                    if (t && (0, r(210370).E)({
                            environment: a,
                            targetBlockId: t.id,
                            originalUrl: w
                        }), (0, r(267318).A)(e)) return r(300441).Q.success(void 0);
                    return await y({
                        type: "error",
                        error: (0, r(161179).A)(e)
                    }), r(300441).Q.fail((0, r(161179).A)(e))
                }
                return r(300441).Q.success(M)
            }

            function C(e) {
                let {
                    environment: t,
                    localSubtree: a,
                    sourceSpaceId: o,
                    targetSpaceId: l
                } = e;
                if (r(887380).Lw({
                        sourceSpaceId: o,
                        targetSpaceId: l,
                        sourceBlockSubtree: a
                    })) return !1;
                let n = Array.from(a.getTables());
                return !(n.includes(s().yBS) && r(218744).default.checkGate({
                    gateName: "bail_local_duplicate_for_automations"
                }) || n.includes(s().SC1) && ! function(e) {
                    let {
                        environment: t,
                        recordMap: r,
                        inMemoryRecordCache: a
                    } = e;
                    for (let e of function(e) {
                            let t = e.getModelsByTable(s().SC1),
                                r = [];
                            for (let e of t) {
                                let t = (0, g().Mn)({
                                    type: e.getType(),
                                    config: e.getConfig(),
                                    space_id: e.getSpaceId()
                                });
                                t && r.push(...t.map(e => e.pointer))
                            }
                            return r
                        }(r))
                        if (!a.hasRecord({
                                pointer: e,
                                userId: t.currentUser.id
                            })) return !1;
                    return !0
                }({
                    environment: t,
                    recordMap: a,
                    inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache
                }))
            }

            function T(e) {
                let {
                    environment: t,
                    sourceStores: a,
                    destination: o,
                    options: l,
                    targetSpaceId: c,
                    transaction: g,
                    existingBlockIds: f,
                    localSubtrees: y,
                    from: S,
                    installationImprint: v,
                    templateInstallationMetadata: I,
                    unlockPages: h,
                    appendWithoutAfter: k,
                    targetSpaceViewStore: C,
                    onMissingLocalSubtree: T
                } = e, M = [], B = (0, r(494010).Wy)(o) ? o.siblingId : void 0, w = "prepend" in o ? o.prepend : void 0, R = Array.isArray(f);
                for (let e = 0; e < a.length; e++) {
                    let L = a[e],
                        P = y.get(L.id);
                    if (!P) {
                        null == T || T({
                            index: e,
                            blockStore: L
                        });
                        continue
                    }
                    let D = R ? {
                            table: s().evP,
                            id: f[e],
                            spaceId: c
                        } : (0, u().zP)({
                            environment: t,
                            table: s().evP,
                            spaceId: c
                        }),
                        {
                            targetBlockStore: E
                        } = b({
                            environment: t,
                            sourceBlockId: L.id,
                            targetBlockPointer: D,
                            sourceBlockSubtree: P.recordMap,
                            targetInMemoryRecordCache: L.inMemoryRecordCache,
                            options: { ...l,
                                preventLegacyTransclusions: !0
                            },
                            transaction: g,
                            installationImprint: v,
                            templateInstallationMetadata: I,
                            from: S,
                            method: (0, _().getDuplicateMethodFromLoadSource)(P.loadSource),
                            destinationTable: o.parent.table
                        });
                    if (h && E.isLocked() && (0, p()._)({
                            environment: t,
                            store: E,
                            isLocked: !1,
                            transaction: g
                        }), R && "collection" === o.type) {
                        let e = E.getType();
                        e && !(0, n().C7)(e) && (0, m().y4)({
                            store: E,
                            operation: i().op.update({
                                pointer: E.pointer,
                                path: [],
                                args: {
                                    type: "page"
                                }
                            }),
                            transaction: g
                        })
                    }
                    if (!R) {
                        let a = function(e) {
                            let {
                                environment: t,
                                sourceStore: a,
                                duplicateStore: o,
                                destination: l,
                                transaction: n,
                                targetSpaceViewStore: i,
                                appendWithoutAfter: c,
                                isFirstBlock: s
                            } = e, {
                                currentSiblingId: d,
                                currentPrepend: p
                            } = e, u = { ...l,
                                siblingId: d,
                                prepend: p
                            };
                            (0, r(964058).J)({
                                environment: t,
                                sourceStores: [a],
                                transaction: n,
                                destination: u,
                                targetStores: [o],
                                targetSpaceViewStore: i,
                                appendWithoutAfter: c
                            }), d && !p && (d = o.id);
                            let m = !!("prepend" in l && l.prepend),
                                g = !!("siblingId" in l && l.siblingId);
                            return m && !g && s && (p = !1, d = o.id), {
                                currentSiblingId: d,
                                currentPrepend: p
                            }
                        }({
                            environment: t,
                            sourceStore: L,
                            duplicateStore: E,
                            destination: o,
                            currentSiblingId: B,
                            currentPrepend: w,
                            transaction: g,
                            targetSpaceViewStore: C,
                            appendWithoutAfter: k,
                            isFirstBlock: 0 === e
                        });
                        B = a.currentSiblingId, w = a.currentPrepend
                    }
                    "ai_block" === E.getType() && d().EF.setState(E.pointer.id), M.push(E)
                }
                return M
            }

            function M(e) {
                let {
                    environment: t,
                    blockId: r,
                    localSubtree: a,
                    sourceSpaceId: o,
                    targetSpaceId: l,
                    localSubtrees: n
                } = e;
                return !!a && !!C({
                    environment: t,
                    localSubtree: a.recordMap,
                    sourceSpaceId: o,
                    targetSpaceId: l
                }) && (n.set(r, a), !0)
            }
            async function B(e) {
                let {
                    environment: t,
                    sourceStores: a,
                    existingBlockIds: l,
                    targetSpaceId: n,
                    options: i,
                    shouldUseServerBackedDuplication: c,
                    bailOnMiss: d
                } = e, p = a[0].getSpaceId(), u = new Map;
                if (c && l) try {
                    await (0, r(975162).lX)(a, 5, async (e, r) => {
                        let a, c = await (0, _().tryLoadLocalSubtreeWithServerFallback)({
                            environment: t,
                            sourceBlockPointer: e.getSpaceShardedPointer(),
                            targetBlockStore: new(o()).B(t, {
                                table: s().evP,
                                id: l[r],
                                spaceId: n
                            }),
                            options: i,
                            enableLegacyTransclusionFixing: !0,
                            recordLimit: 500
                        });
                        null != c && c.loadLocalSubtreeResult.recordMap && (a = {
                            recordMap: c.loadLocalSubtreeResult.recordMap,
                            loadSource: c.loadSource
                        });
                        let m = M({
                            environment: t,
                            blockId: e.id,
                            localSubtree: a,
                            sourceSpaceId: p,
                            targetSpaceId: n,
                            localSubtrees: u
                        });
                        if (d && !m) throw Error(`Failed to load subtree for block ${e.id}`)
                    })
                } catch (e) {
                    return
                } else {
                    let e = w({
                        environment: t,
                        sourceStores: a,
                        options: i,
                        targetSpaceId: n,
                        bailOnMiss: d
                    });
                    if (!e) return;
                    u = e
                }
                try {
                    await R(t, u)
                } catch (e) {
                    r(773352).log({
                        level: "error",
                        from: "localDuplicate",
                        type: "prewarmCanCreatePagesInCollectionForSubtrees",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                localSubtrees: u
                            }
                        }
                    });
                    return
                }
                return u
            }

            function w(e) {
                let {
                    environment: t,
                    options: r,
                    sourceStores: a,
                    targetSpaceId: o,
                    bailOnMiss: l
                } = e, n = a[0].getSpaceId(), i = new Map;
                for (let e of a) {
                    let a = (0, y().loadLocalSubtree)({
                            environment: t,
                            blockId: e.id,
                            inMemoryRecordCache: e.inMemoryRecordCache,
                            options: {
                                allowCopyCollections: !1,
                                requireFullSubtree: !0,
                                skipTransclusionContainerChildren: !r.deepCopyTransclusionContainers,
                                allowCopyExternalObjectInstances: !r.convertExternalObjectInstancesToPlaceholders,
                                includeLegacyTransclusionBlockValues: !0
                            }
                        }).recordMap,
                        c = a ? {
                            recordMap: a,
                            loadSource: "in_memory"
                        } : void 0,
                        s = M({
                            environment: t,
                            blockId: e.id,
                            localSubtree: c,
                            sourceSpaceId: n,
                            targetSpaceId: o,
                            localSubtrees: i
                        });
                    if (l && !s) return
                }
                return i
            }
            async function R(e, t) {
                let o = [];
                for (let [, {
                        recordMap: r
                    }] of t)
                    for (let {
                            value: t
                        } of r.getByTable(s().SC1)) {
                        var n;
                        if ((null == t ? void 0 : t.type) === "create_page" && null != (n = t.config) && null != (n = n.collection) && n.id && t.config.collection.spaceId) {
                            let r = t.config.collection.id,
                                n = t.config.collection.spaceId;
                            if (void 0 !== a().Q.getData(e, {
                                    collectionId: r,
                                    spaceId: n
                                })) continue;
                            let i = new(l()).m(e, {
                                table: s().VlP,
                                id: r,
                                spaceId: n
                            }).getRole();
                            if (i && (0, c().p2)(i)) continue;
                            o.push({
                                collectionId: r,
                                spaceId: n
                            })
                        }
                    }
                0 !== o.length && await (0, r(975162).lX)(o, 5, ({
                    collectionId: t,
                    spaceId: r
                }) => a().Q.awaitData(e, {
                    collectionId: t,
                    spaceId: r
                }))
            }
        },
        124690: (e, t, r) => {
            r.r(t), r.d(t, {
                attemptServerBackedLocalDuplicate: () => i,
                getDuplicateMethodFromLoadSource: () => n,
                tryLoadLocalSubtreeWithServerFallback: () => c
            });
            var a = () => r(773352),
                o = () => r(832375),
                l = () => r(300441);

            function n(e) {
                switch (e) {
                    case "in_memory":
                    case "persisted":
                        return "local_duplication";
                    case "server":
                        return "server_backed_local_duplication";
                    default:
                        (0, r(722371).HB)(e)
                }
            }
            async function i(e) {
                let {
                    environment: t,
                    sourceBlockPointer: n,
                    targetBlockStore: i,
                    options: s,
                    templateInstallationMetadata: d,
                    recordLimit: p = 500,
                    stopwatch: u,
                    from: m
                } = e;
                null == u || u.mark("attempt_server_backed_local_duplicate_start"), (0, r(208322).JW)({
                    environment: t,
                    type: "server_duplicate_attempt_server_backed_local_duplicate",
                    data: {
                        sourceBlockPointer: n,
                        targetBlockStore: i,
                        targetSpaceId: i.getSpaceId(),
                        options: s
                    }
                });
                let g = await c({
                    environment: t,
                    sourceBlockPointer: n,
                    targetBlockStore: i,
                    options: s,
                    enableLegacyTransclusionFixing: !0,
                    recordLimit: p
                });
                if (null == u || u.mark("try_load_local_subtree_finished"), !g || !g.loadLocalSubtreeResult.recordMap) return l().Q.fail({});
                let {
                    recordMap: f
                } = g.loadLocalSubtreeResult;
                if (r(887380).Lw({
                        sourceSpaceId: n.spaceId,
                        targetSpaceId: i.getSpaceId(),
                        sourceBlockSubtree: f
                    })) return a().log({
                    level: "warning",
                    from: "attemptServerBackedLocalDuplicate",
                    type: "accessLockingWarning",
                    data: {
                        message: "Unable to perform local duplication",
                        miscDataToConvertToString: {
                            sourceBlockPointer: n,
                            targetBlockPointer: {
                                id: i.id,
                                spaceId: i.getSpaceId(),
                                type: i.getType()
                            }
                        }
                    }
                }), null == u || u.mark("attempt_server_backed_local_duplicate_failure"), l().Q.fail({});
                for (let e of f.getTables())
                    if (e === o().yBS || e === o().SC1) return a().log({
                        level: "warning",
                        from: "attemptServerBackedLocalDuplicate",
                        type: "invalidRecordType",
                        data: {
                            message: "Local duplication does not support automation tables",
                            miscDataToConvertToString: {
                                sourceBlockPointer: n,
                                targetBlockPointer: {
                                    id: i.id,
                                    spaceId: i.getSpaceId(),
                                    type: i.getType()
                                }
                            }
                        }
                    }), null == u || u.mark("attempt_server_backed_local_duplicate_failure"), l().Q.fail({});
                try {
                    (0, r(208322).JW)({
                        environment: t,
                        type: "server_backed_duplicate_start_transaction",
                        data: {
                            message: "Starting transactionActions.createAndCommit for localDuplicate",
                            sourceBlockPointer: n,
                            targetBlockPointer: {
                                id: i.id,
                                spaceId: i.getSpaceId(),
                                type: i.getType()
                            }
                        }
                    });
                    let e = i.getSpaceId(),
                        {
                            serverCommitResult: a
                        } = (0, r(377796).createAndCommit)({
                            userAction: "server_backed_local_duplicate",
                            environment: t,
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            canUndo: !0,
                            isTemplateInstantiationTransaction: !!d,
                            perform: e => (0, r(44226).localDuplicate)({
                                environment: t,
                                sourceBlockId: n.id,
                                targetBlockPointer: i.pointer,
                                sourceBlockSubtree: f,
                                targetInMemoryRecordCache: i.inMemoryRecordCache,
                                transaction: e,
                                templateInstallationMetadata: d,
                                stopwatch: u,
                                options: { ...s,
                                    preventLegacyTransclusions: !0
                                },
                                from: m,
                                destinationTable: i.getParentTable()
                            })
                        });
                    return await a, null == u || u.mark("server_backed_local_duplicate_finished"), (0, r(208322).JW)({
                        environment: t,
                        type: "server_duplicate_attempt_server_backed_local_duplicate_success",
                        data: {
                            targetSpaceId: i.getSpaceId(),
                            options: s
                        }
                    }), l().Q.success({
                        size: null == f ? void 0 : f.getSize(),
                        pageStore: i,
                        transactionPromise: a
                    })
                } catch (e) {
                    return a().log({
                        level: "error",
                        from: "attemptServerBackedLocalDuplicate",
                        type: "subtreeLoadError",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            message: "Failed to load subtree",
                            miscDataToConvertToString: {
                                sourceBlockPointer: n,
                                targetBlockPointer: {
                                    id: i.id,
                                    spaceId: i.getSpaceId(),
                                    type: i.getType()
                                }
                            }
                        }
                    }), l().Q.fail({})
                }
            }
            async function c(e) {
                let t, {
                        environment: o,
                        sourceBlockPointer: l,
                        targetBlockStore: n,
                        options: i,
                        enableLegacyTransclusionFixing: c,
                        recordLimit: d
                    } = e,
                    p = {
                        environment: o,
                        blockId: l.id,
                        inMemoryRecordCache: o.defaultRecordCache.inMemoryRecordCache,
                        options: {
                            allowCopyCollections: !0,
                            requireFullSubtree: !0,
                            skipTransclusionContainerChildren: !i.deepCopyTransclusionContainers,
                            allowCopyExternalObjectInstances: !i.convertExternalObjectInstancesToPlaceholders,
                            includeLegacyTransclusionBlockValues: c
                        }
                    },
                    u = "in_memory";
                if (!(t = (0, r(559096).loadLocalSubtree)(p)).recordMap) {
                    u = "persisted";
                    try {
                        (0, r(208322).JW)({
                            environment: o,
                            type: "performInexactPagePreload",
                            data: {
                                message: "No local subtree found, performing performInexactPagePreload",
                                loadLocalSubtreeArgs: p
                            }
                        }), await (0, r(104794).performInexactPagePreload)(o, {
                            table: "block",
                            id: l.id,
                            spaceId: l.spaceId
                        }), t = (0, r(559096).loadLocalSubtree)(p)
                    } catch (e) {
                        a().log({
                            level: "warning",
                            from: "attemptServerBackedLocalDuplicate",
                            type: "persistedRecordCachePreloadError",
                            error: (0, r(416607).convertErrorToLog)(e),
                            data: {
                                message: "Failed to preload subtree from persisted record cache"
                            }
                        })
                    }
                }
                if (t.recordMap || (u = "server", (0, r(208322).JW)({
                        environment: o,
                        type: "loadLocalSubtreeApi",
                        data: {
                            message: "No local subtree found from previous attempts, attemping API call to loadBlockSubtree",
                            currentLocalSubtreeResponse: t
                        }
                    }), t = await s({
                        environment: o,
                        sourceBlockPointer: l,
                        recordLimit: d,
                        targetBlockStore: n,
                        loadLocalSubtreeArgs: p
                    })), t && !t.recordMap && a().log({
                        level: "warning",
                        from: "attemptServerBackedLocalDuplicate",
                        type: "subtreeLoadFailure",
                        data: {
                            message: "Failed to load subtree",
                            miscDataToConvertToString: {
                                sourceBlockPointer: l,
                                cacheSize: n.inMemoryRecordCache.size,
                                reason: "error" === t.type ? t.reason : void 0,
                                targetBlockPointer: {
                                    id: n.id,
                                    spaceId: n.getSpaceId(),
                                    type: n.getType()
                                },
                                missingRecord: "error" === t.type ? t.pointer : void 0
                            }
                        }
                    }), t) return {
                    loadLocalSubtreeResult: t,
                    loadSource: u
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    sourceBlockPointer: o,
                    recordLimit: l,
                    targetBlockStore: n,
                    loadLocalSubtreeArgs: i
                } = e;
                try {
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "loadBlockSubtree",
                        environment: t,
                        data: {
                            block: {
                                id: o.id,
                                spaceId: o.spaceId
                            },
                            shallow: !1,
                            recordCountLimit: l
                        },
                        cellNavigation: {
                            spaceId: o.spaceId
                        }
                    });
                    if ((0, r(208322).JW)({
                            environment: t,
                            type: "loadBlockSubtreeApiResult",
                            data: {
                                message: "Result from loadBlockSubtree API call",
                                subtreeResult: e,
                                apiArgs: {
                                    block: {
                                        id: o.id,
                                        spaceId: o.spaceId
                                    },
                                    shallow: !1,
                                    recordCountLimit: l
                                }
                            }
                        }), "success" === e.type) {
                        let a = r(412951).RecordMapWithRole.create(e.data.subtreeRecordMap);
                        return await (0, r(31069)._)({
                            currentUserId: t.currentUser.id,
                            defaultRecordCache: t.defaultRecordCache,
                            inMemoryRecordCache: i.inMemoryRecordCache,
                            recordMap: a,
                            debugSource: "load_local_subtree_from_server",
                            isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                        }), (0, r(559096).loadLocalSubtree)(i)
                    } {
                        let t = (0, r(201790).V4)(e);
                        a().log({
                            level: "warning",
                            from: "attemptServerBackedLocalDuplicate",
                            type: "loadBlockSubtreeFailure",
                            data: {
                                message: "Error fetching subtree",
                                miscDataToConvertToString: {
                                    error: t,
                                    sourceBlockPointer: o,
                                    cacheSize: n.inMemoryRecordCache.size,
                                    targetBlockPointer: {
                                        id: n.id,
                                        spaceId: n.getSpaceId(),
                                        type: n.getType()
                                    }
                                }
                            }
                        })
                    }
                } catch (e) {
                    a().log({
                        level: "error",
                        from: "attemptServerBackedLocalDuplicate",
                        type: "subtreeLoadError",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            message: "Error loading subtree",
                            miscDataToConvertToString: {
                                sourceBlockPointer: o,
                                cacheSize: n.inMemoryRecordCache.size,
                                targetBlockPointer: {
                                    id: n.id,
                                    spaceId: n.getSpaceId(),
                                    type: n.getType()
                                }
                            }
                        }
                    })
                }
            }
        },
        422224: (e, t, r) => {
            r.r(t), r.d(t, {
                maybeTurnCollectionViewIntoCollectionViewPage: () => g,
                transformBlocks: () => m,
                transformIntoColumnList: () => f
            }), r(898992), r(354520), r(581454);
            var a = () => r(374176),
                o = () => r(823608),
                l = () => r(831983),
                n = () => r(135674),
                i = () => r(818646),
                c = () => r(579695),
                s = () => r(773777),
                d = () => r(421439);
            let p = (0, r(109939).YK)({
                blockConvertedTo: {
                    id: "duplicationTransform.a11y.blockConvertedTo",
                    defaultMessage: "Converted to {blockType}"
                },
                blocksConvertedTo: {
                    id: "duplicationTransform.a11y.blocksConvertedTo",
                    defaultMessage: "{count, plural, one {# block converted to {blockType}} other {# blocks converted to {blockType}}}"
                }
            });

            function u(e, t) {
                let a = (0, r(955630).pL)(e) ? (0, r(955630).i_)(e) : e,
                    o = (0, r(495734).Z)(a);
                if (o) {
                    let e = r(962299).A.formatMessage(o);
                    1 === t ? (0, r(663123).l)(r(962299).A.formatMessage(p.blockConvertedTo, {
                        blockType: e
                    })) : (0, r(663123).l)(r(962299).A.formatMessage(p.blocksConvertedTo, {
                        count: t,
                        blockType: e
                    }))
                }
            }

            function m(e) {
                let {
                    environment: t,
                    blockType: o,
                    transaction: n
                } = e, i = e.blocks.filter(e => e.getParentTable() !== r(832375).C0E);
                if (0 !== i.length) {
                    if (o === r(955630).xd.transclusionContainer) {
                        (function(e) {
                            let {
                                environment: t,
                                blocks: a,
                                transaction: o
                            } = e, l = a[0];
                            if (!l) return;
                            let n = l.getRecordStoreUIParent();
                            if (!n || !(0, r(966980).iU)(n)) return;
                            let i = n.getRecordStoreUIParent();
                            if (!i || !(0, r(966980)._p)(i) || !i.isDefined()) return;
                            let c = (0, r(295447).Z1)({
                                    environment: t,
                                    table: r(832375).evP,
                                    spaceId: i.getSpaceId()
                                }),
                                s = r(124937).Wv({
                                    environment: t,
                                    id: c,
                                    type: r(955630).xd.transclusionContainer,
                                    inMemoryRecordCache: n.inMemoryRecordCache,
                                    transaction: o,
                                    spaceId: i.getSpaceId()
                                });
                            (0, r(51929).W)({
                                parentStore: n,
                                insertStore: s,
                                afterStore: l,
                                transaction: o
                            }), y({
                                newParentStore: s.getContentStore(),
                                blocks: a,
                                transaction: o
                            }), (0, r(525779).clear)({
                                environment: t
                            }), (0, r(471e3).I)({
                                environment: t
                            }), (0, r(854924).t)({
                                environment: t,
                                stores: [s]
                            })
                        })({
                            environment: t,
                            blocks: i,
                            transaction: n
                        }), u(o, i.length);
                        return
                    }
                    if (o === r(955630).xd.callout && r(218744).default.checkGate({
                            gateName: "create_v2_callouts"
                        })) {
                        (function(e) {
                            let {
                                environment: t,
                                blocks: a,
                                transaction: o
                            } = e, l = a[0];
                            if (!l) return;
                            let n = l.getRecordStoreUIParent();
                            if (!n || !(0, r(966980).iU)(n)) return;
                            let i = n.getRecordStoreUIParent();
                            if (!i || !(i instanceof r(970831).B)) return;
                            let s = (0, r(295447).Z1)({
                                    environment: t,
                                    table: r(832375).evP,
                                    spaceId: i.getSpaceId()
                                }),
                                d = r(124937).Wv({
                                    environment: t,
                                    id: s,
                                    type: r(955630).xd.callout,
                                    inMemoryRecordCache: n.inMemoryRecordCache,
                                    transaction: o,
                                    spaceId: i.getSpaceId(),
                                    format: {
                                        callout_version: 2
                                    }
                                });
                            c().NI({
                                parentStore: n,
                                childStore: d,
                                after: l.id,
                                transaction: o
                            }), y({
                                newParentStore: d.getContentStore(),
                                blocks: a,
                                transaction: o
                            }), r(205103).s4({
                                store: d,
                                transaction: o
                            }), (0, r(525779).clear)({
                                environment: t
                            }), (0, r(471e3).I)({
                                environment: t
                            }), (0, r(854924).t)({
                                environment: t,
                                stores: [d]
                            })
                        })({
                            environment: t,
                            blocks: i,
                            transaction: n
                        }), u(o, i.length);
                        return
                    }
                    if (o === r(955630).xd.columnList) {
                        f({
                            environment: t,
                            blocks: i,
                            transaction: n
                        }), u(o, i.length);
                        return
                    }
                    if ((0, r(955630).ZK)(o)) {
                        let e = parseInt(o.replace("column", "").replace("block", "")),
                            l = r(381453).oE(r(381453).Hn(e - 1, () => (0, r(150945).insertTextBelow)({
                                environment: t,
                                blocks: i,
                                transaction: n
                            }))),
                            c = f({
                                environment: t,
                                blocks: [...i, ...l],
                                transaction: n
                            });
                        a().default.afterNextFlush(() => {
                            (0, r(940763).e)({
                                store: c[0].getBlockTitleStore()
                            })
                        }), u(r(955630).xd.columnList, i.length);
                        return
                    }
                    for (let e of i)
                        if (e.isCalloutV2()) {
                            let r = e.getParentBlockStore();
                            if (r) {
                                let p = e.getContentStores();
                                for (let a of ((0, d().y4)({
                                        store: r,
                                        operation: {
                                            pointer: r.pointer,
                                            path: ["content"],
                                            command: "insertChildrenAfter",
                                            args: {
                                                ids: p.map(e => e.id),
                                                after: e.id
                                            }
                                        },
                                        transaction: n
                                    }), c().zz({
                                        parentStore: r.getContentStore(),
                                        childStore: e,
                                        transaction: n
                                    }), p)) l().pd({
                                    environment: t,
                                    block: a,
                                    blockType: o,
                                    transaction: n,
                                    isMultiBlockTransformation: i.length > 1
                                });
                                a().default.afterNextFlush(() => {
                                    (0, s().d)(t, p.map(e => e.id))
                                })
                            }
                        } else l().pd({
                            environment: t,
                            block: e,
                            blockType: o,
                            transaction: n,
                            isMultiBlockTransformation: i.length > 1
                        });
                    i.length > 1 && u(o, i.length)
                }
            }

            function g({
                environment: e,
                blocks: t,
                transaction: r
            }) {
                1 === t.length && "collection_view" === t[0].getType() && m({
                    environment: e,
                    blocks: t,
                    blockType: "collection_view_page",
                    transaction: r
                })
            }

            function f(e) {
                let {
                    environment: t,
                    blocks: a,
                    transaction: l
                } = e, n = a[0];
                if (!n) return [];
                let c = n.recordStoreUIParentStore;
                if (!(null != c && c.valueIs(o()._))) return [];
                let s = (0, r(295447).Z1)({
                        environment: t,
                        table: r(832375).evP,
                        spaceId: n.getSpaceId()
                    }),
                    d = r(124937).Wv({
                        environment: t,
                        id: s,
                        type: r(955630).xd.columnList,
                        inMemoryRecordCache: n.inMemoryRecordCache,
                        transaction: l,
                        spaceId: n.getSpaceId()
                    }),
                    {
                        childStore: p
                    } = (0, r(987380).n)({
                        parentStore: c,
                        insertStore: d,
                        beforeStore: n,
                        transaction: l
                    });
                return a.map(e => {
                    let a = (0, r(295447).Z1)({
                            environment: t,
                            table: r(832375).evP,
                            spaceId: n.getSpaceId()
                        }),
                        o = r(124937).Wv({
                            environment: t,
                            id: a,
                            type: r(955630).xd.column,
                            inMemoryRecordCache: n.inMemoryRecordCache,
                            transaction: l,
                            spaceId: n.getSpaceId()
                        }),
                        {
                            childStore: s
                        } = (0, i().T)({
                            parentStore: c,
                            childToRemoveStore: e,
                            transaction: l
                        }),
                        {
                            childStore: d
                        } = (0, r(51929).W)({
                            parentStore: p.getContentStore(),
                            insertStore: o,
                            transaction: l
                        }),
                        {
                            childStore: u
                        } = (0, r(51929).W)({
                            parentStore: d.getContentStore(),
                            insertStore: s,
                            transaction: l
                        });
                    return u
                })
            }

            function y(e) {
                let {
                    newParentStore: t,
                    blocks: r,
                    transaction: a
                } = e;
                for (let e of r) {
                    let r = e.getRecordStoreUIParent();
                    null != r && r.valueIs(o()._) && ((0, i().T)({
                        parentStore: r,
                        childToRemoveStore: e,
                        transaction: a
                    }), (0, n().B)({
                        parentStore: t,
                        appendStore: e,
                        transaction: a
                    }))
                }
            }
        },
        535968: (e, t, r) => {
            r.r(t), r.d(t, {
                moveToTeamImpl: () => n
            }), r(898992), r(672577);
            var a = () => r(722371),
                o = () => r(579695),
                l = () => r(89739);

            function n(e) {
                let {
                    environment: t,
                    transaction: n,
                    teamStore: i,
                    spaceViewStore: c,
                    location: s,
                    blocksToMove: d
                } = e, p = (0, r(679321).r)(c), u = i.getTeamPagesStore();
                for (let e of (r(422224).maybeTurnCollectionViewIntoCollectionViewPage({
                        environment: t,
                        blocks: d,
                        transaction: n
                    }), d)) {
                    let t = p.find(t => {
                        let r = t.getTeamPagesStore().getValue();
                        if (r) return r.includes(e.id)
                    });
                    (null == t ? void 0 : t.id) !== i.id && ("append" === s.type ? o().NI({
                        parentStore: u,
                        childStore: e,
                        after: s.after,
                        transaction: n
                    }) : "prepend" === s.type ? o().Ti({
                        parentStore: u,
                        childStore: e,
                        before: s.before,
                        transaction: n
                    }) : (0, a().HB)(s), t && l().Ex({
                        teamStore: t,
                        store: e,
                        transaction: n
                    }))
                }
                return i
            }
        },
        566166: (e, t, r) => {
            r.d(t, {
                U8: () => o,
                Yj: () => l,
                d8: () => i,
                dH: () => n,
                uC: () => c
            }), r(16280), r(898992), r(354520), r(581454);
            var a = () => r(743248);

            function o(e) {
                let {
                    environment: t,
                    sourceBlocks: a,
                    targetRecordCache: o,
                    transaction: l,
                    spaceId: n
                } = e, i = a.map((e, a) => r(124937).Wv({
                    environment: t,
                    type: r(955630).xd.copyIndicator,
                    inMemoryRecordCache: o,
                    transaction: l,
                    spaceId: n
                }));
                if (i.length !== a.length) throw Error("copyIndicators must be same length as source blocks");
                if (!(0, r(722371).EI)(i)) throw Error("copyIndicators must cannot be empty");
                return i
            }

            function l(e) {
                for (let t of e) a().n_(t.id)
            }

            function n(e) {
                for (let t of e) a().L7(t.id)
            }

            function i(e) {
                let {
                    copyIndicatorIds: t,
                    state: r
                } = e;
                for (let e of t) a().DW({
                    state: r,
                    targetRecordId: e
                })
            }

            function c(e) {
                let {
                    environment: t,
                    copyIndicators: a
                } = e;
                t.api.callApi({
                    eventName: "deleteContentRecords",
                    environment: t,
                    data: {
                        records: a.filter(e => e.isCrdtEnabled()).map(e => e.getSpaceShardedPointer()),
                        permanentlyDelete: !1
                    }
                }), r(480482).LS({
                    environment: t,
                    stores: a.filter(e => !e.isCrdtEnabled()),
                    table: r(832375).evP,
                    from: "server_duplication_copy_indicators"
                })
            }
        },
        648048: (e, t, r) => {
            r.d(t, {
                sB: () => n,
                go: () => i,
                V2: () => s,
                x: () => c
            }), r(16280), r(581454), r(296540);
            var a = r(474848);
            let o = {
                    viewBox: "0 0 16 17",
                    fittedViewBox: "0.92 2.12 11.71 13.96",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M5.125 2.125a1.75 1.75 0 0 0-1.75 1.75v5.22a.075.075 0 0 0 .085.074 4 4 0 0 1 1.08 0 .075.075 0 0 0 .085-.074v-5.22a.5.5 0 0 1 .5-.5h2.604v1.831c0 .98.794 1.775 1.775 1.775h1.871v5.144a.5.5 0 0 1-.5.5H7.932a.075.075 0 0 0-.075.08 4 4 0 0 1-.069 1.08.075.075 0 0 0 .074.09h3.013a1.75 1.75 0 0 0 1.75-1.75V6.591c0-.464-.184-.91-.513-1.237L9.396 2.638a1.75 1.75 0 0 0-1.237-.513zm3.754 3.081V3.888l1.943 1.943H9.504a.625.625 0 0 1-.625-.625"
                        }), (0, a.jsx)("path", {
                            d: "M4 9.925q-.288 0-.564.052A3.076 3.076 0 1 0 4 9.925m-.425 1.409a.425.425 0 0 1 .85 0V13c0 .235-.19.425-.425.425H2.334a.425.425 0 0 1 0-.85H3.5a.075.075 0 0 0 .075-.075z"
                        })]
                    })
                },
                l = (0, r(104509).wt)("docBadgeClockSmall", o, "small");
            class n extends Error {
                constructor(e) {
                    super(e), this.name = "DuplicationCancelledError"
                }
            }
            class i extends Error {
                constructor(e) {
                    super(e), this.name = "DuplicationMultipleSpacesError"
                }
            }

            function c(e) {
                let {
                    duplicateError: t,
                    environment: a,
                    blockStores: o,
                    jobId: l
                } = e;
                if (t instanceof n) return;
                if (!r(887380).Rk(t)) return void
                function(e) {
                    let t, {
                            environment: a,
                            error: o,
                            jobId: l
                        } = e,
                        n = "duplicationError",
                        {
                            title: i,
                            description: c,
                            icon: d,
                            variant: p
                        } = s(o);
                    r(819652).HK({
                        id: n,
                        title: i ? ? r(962299).A.getIntl().formatMessage(r(450976).V.errorTitle),
                        message: c,
                        presentationType: "persistent",
                        icon: d ? ? r(178146).xMarkCircleSmallIcon,
                        actions: {
                            primary: {
                                title: r(962299).A.getIntl().formatMessage(r(450976).V.dismissButtonMessage),
                                onAction: () => r(819652).UW({
                                    id: n
                                })
                            },
                            secondary: t
                        },
                        variant: p ? ? "error"
                    })
                }({
                    environment: a,
                    error: t,
                    jobId: l
                });
                let i = r(887380).OR(t);
                o && o.length > 1 ? r(887380).UK(a, {
                    product: i
                }) : r(887380).yj({
                    product: i
                })
            }

            function s(e) {
                let t = r(962299).A.getIntl();
                if ((0, r(101787).op4)(e)) {
                    let a = (0, r(416207).D)(t, e);
                    if (a) return {
                        description: a
                    }
                } else if ((0, r(101787).pA8)(e)) return {
                    description: (0, r(285482).A)(t, e)
                };
                else if (e instanceof i) return {
                    description: t.formatMessage(r(450976).V.multipleSpacesErrorDescription)
                };
                else if ((0, r(101787).iDI)(e, r(101787).yI4)) return {
                    description: t.formatMessage(r(450976).V.invalidErrorDescription)
                };
                else if ((0, r(101787).iDI)(e, r(101787).m_B, r(101787).qQk)) return {
                    description: t.formatMessage(r(450976).V.permissionErrorDescription)
                };
                else if ((0, r(101787).iDI)(e, r(101787).UlD)) return {
                    title: t.formatMessage(r(450976).V.rateLimitErrorTitle),
                    description: t.formatMessage(r(450976).V.rateLimitErrorDescription),
                    icon: l,
                    variant: "default"
                };
                else if ((0, r(101787).iDI)(e, r(101787).iQE)) return {
                    title: t.formatMessage(r(450976).V.sizeLimitErrorTitle),
                    description: t.formatMessage(r(450976).V.sizeLimitErrorDescription),
                    icon: r(966559).exclamationMarkCircleSmallIcon
                };
                return {
                    description: t.formatMessage(r(450976).V.unknownErrorDescription)
                }
            }
        },
        818958: (e, t, r) => {
            r.d(t, {
                Y: () => n,
                G: () => l
            });
            var a = () => r(101787);
            class o extends a().WXf {
                static type = "RedundantDuplicationRequestError";
                constructor(e = {}) {
                    super({
                        level: "error",
                        status: 409,
                        name: "RedundantDuplicationRequestError",
                        message: "Duplication already in progress",
                        data: e.data,
                        error: e.error,
                        clientData: {
                            type: "redundant_duplication_request"
                        }
                    })
                }
            }

            function l(e) {
                let {
                    onRetry: t,
                    onDismiss: a
                } = e, o = "redundant_duplication_request_error", l = r(962299).A.getIntl();
                r(819652).Iz({
                    id: o,
                    title: l.formatMessage({
                        defaultMessage: "You are already duplicating this item",
                        id: "duplicationActions.redundantDuplicationError"
                    }),
                    message: l.formatMessage({
                        defaultMessage: "Would you like to duplicate it again?",
                        id: "duplicateActions.redundantDuplicationError.duplicateAgain"
                    }),
                    presentationType: "persistent",
                    actions: {
                        primary: {
                            title: l.formatMessage({
                                defaultMessage: "Proceed",
                                id: "duplicateActions.redundantDuplicationError.proceed"
                            }),
                            onAction: () => {
                                (0, r(104310).u)({
                                    event: {
                                        eventName: "redundant_duplication_user_action",
                                        eventProperties: {
                                            action: "retry"
                                        }
                                    }
                                }), t(), r(819652).UW({
                                    id: o
                                })
                            }
                        },
                        secondary: {
                            title: l.formatMessage({
                                defaultMessage: "Dismiss",
                                id: "duplicateActions.redundantDuplicationError.dismiss"
                            }),
                            onAction: () => {
                                (0, r(104310).u)({
                                    event: {
                                        eventName: "redundant_duplication_user_action",
                                        eventProperties: {
                                            action: "dismiss"
                                        }
                                    }
                                }), null == a || a(), r(819652).UW({
                                    id: o
                                })
                            }
                        }
                    },
                    icon: r(966559).exclamationMarkCircleSmallIcon,
                    iconColorVariant: "inversePrimary",
                    onUserDismiss: () => {
                        (0, r(104310).u)({
                            event: {
                                eventName: "redundant_duplication_user_action",
                                eventProperties: {
                                    action: "dismiss"
                                }
                            }
                        }), null == a || a()
                    }
                })
            }

            function n(e) {
                return (0, a().iDI)(e, o) || (0, a().pA8)(e) && "redundant_duplication_request" === e.clientData.type
            }
            a().WXf
        },
        908467: (e, t, r) => {
            r.d(t, {
                l: () => a
            });

            function a(e) {
                return (0, r(101787).pA8)(e) && "cross_space_duplication" === e.clientData.type
            }
        },
        964058: (e, t, r) => {
            r.d(t, {
                J: () => s
            }), r(18107), r(967357), r(898992), r(672577);
            var a = () => r(955630),
                o = () => r(488307),
                l = () => r(964232),
                n = () => r(135674),
                i = () => r(579695),
                c = () => r(421439);

            function s(e) {
                let {
                    environment: t,
                    sourceStores: s,
                    transaction: d,
                    destination: p,
                    targetStores: u,
                    appendWithoutAfter: m,
                    targetSpaceViewStore: g
                } = e, f = {
                    type: "append",
                    after: m ? s.length > 1 ? s[0].id : void 0 : s[s.length - 1].id
                }, y = r(381453).o8(u).reverse();
                if ("team" === p.type) {
                    let e = new(r(681735)).h(t, p.parent);
                    (0, r(535968).moveToTeamImpl)({
                        environment: t,
                        transaction: d,
                        spaceViewStore: g,
                        teamStore: e,
                        blocksToMove: u,
                        location: f
                    })
                } else if ("block" === p.type) {
                    let e = new(r(970831)).B(t, p.parent);
                    if (p.prepend)
                        for (let t of u) i().Ti({
                            parentStore: e,
                            childStore: t,
                            transaction: d,
                            before: p.siblingId
                        });
                    else
                        for (let t of y) i().NI({
                            parentStore: e,
                            childStore: t,
                            transaction: d,
                            after: p.siblingId ? ? f.after
                        })
                } else if ("space" === p.type) {
                    let e = new(r(695906)).SpaceStore(t, p.parent);
                    for (let r of (p.prepend && (f = {
                            type: "prepend"
                        }), y)) l().yM({
                        environment: t,
                        spaceStore: e,
                        spaceViewStore: g,
                        pageStore: r,
                        isPrivate: !0,
                        location: f,
                        transaction: d
                    })
                } else if ("collection" === p.type) {
                    let e = new(r(356912)).m(t, p.parent),
                        l = s.at(-1),
                        m = r(240414).T.find(e => e.props.store === l && e.props.canInsertBelow && e.props.onInsertBelow);
                    if (m && m.props.onInsertBelow) r(381453).oE(m.props.onInsertBelow({
                        insertStores: u,
                        transaction: d
                    }));
                    else
                        for (let t of y) {
                            let r = t.getType();
                            r && !(0, a().C7)(r) && (0, c().y4)({
                                store: t,
                                operation: o().op.update({
                                    pointer: t.pointer,
                                    path: [],
                                    args: {
                                        type: "page"
                                    }
                                }),
                                transaction: d
                            }), i().X$({
                                childStore: t,
                                parentStore: e,
                                transaction: d
                            }), p.addToTemplates && (0, n().B)({
                                parentStore: e.getTemplatePagesStore(),
                                appendStore: t,
                                transaction: d
                            })
                        }
                } else if ("automation_action" === p.type) {
                    let e = new(r(464011)).b(t, p.parent);
                    for (let t of y) i().NI({
                        parentStore: e,
                        childStore: t,
                        transaction: d
                    })
                } else "workflow" === p.type || (0, r(722371).HB)(p)
            }
        },
        994731: (e, t, r) => {
            r.r(t), r.d(t, {
                duplicateBlockWithQueueTask: () => m,
                performServerDuplicate: () => d,
                serverDuplicate: () => c,
                shouldUseDuplicateAndTranslateTemplateBlock: () => g
            }), r(16280), r(944114), r(581454);
            let a = (0, r(477465).Dv)("duplicateAndTranslateTemplateBlock"),
                o = (0, r(477465).Dv)("duplicateTemplateBlock");
            var l = () => r(887380),
                n = () => r(566166),
                i = () => r(208322);

            function c(e) {
                let {
                    environment: t,
                    sourceBlocks: a,
                    targetInMemoryRecordCache: o,
                    transaction: l,
                    options: c,
                    targetSpaceId: d,
                    stopwatch: p
                } = e, u = performance.now();
                null == p || p.mark("server_duplicate_start");
                let m = e.copyIndicators ? ? (0, n().U8)({
                    environment: t,
                    sourceBlocks: a,
                    targetRecordCache: o,
                    transaction: l,
                    spaceId: d
                });
                null == p || p.mark("create_copy_indicators");
                let g = r(975162).yX();
                return l.postSubmitCallbacks.push(async a => {
                    if (null == p || p.mark("transaction_post_submit_callback"), a) {
                        (0, i().P0)({
                            environment: t,
                            type: "server_duplicate_transaction_post_submit_callback_error",
                            data: {
                                copyIndicatorIds: m.map(e => e.id),
                                error: a,
                                targetSpaceId: d,
                                options: c
                            }
                        }), g.resolve(r(300441).Q.fail(a));
                        return
                    }(0, n().Yj)(m), null == p || p.mark("initialize_copy_indicators_progress_state");
                    let o = l.getUserActionForAnalyticsPurposesOnly();
                    await s({
                        serverDuplicateArgs: e,
                        copyIndicators: m,
                        userAction: o,
                        deferred: g,
                        isRetry: !1,
                        startTime: u,
                        onRedundantDuplicationError: e.onRedundantDuplicationError
                    })
                }), r(300441).Q.success({
                    blockStores: m,
                    onComplete: g.promise
                })
            }
            async function s(e) {
                let {
                    serverDuplicateArgs: t,
                    copyIndicators: a,
                    userAction: o,
                    deferred: l,
                    isRetry: c,
                    startTime: p,
                    onRedundantDuplicationError: u
                } = e, {
                    environment: m,
                    sourceBlocks: g,
                    options: f,
                    targetSpaceId: y,
                    installationImprint: _,
                    templateInstallationMetadata: S = {},
                    shouldUseSynchronousDuplicationAPI: v,
                    stopwatch: I,
                    from: b,
                    destinationTable: h,
                    blockType: k
                } = t, C = await d({
                    environment: m,
                    copyIndicators: a,
                    sourceBlocks: g,
                    targetSpaceId: y,
                    options: f,
                    templateInstallationMetadata: S,
                    installationImprint: _,
                    shouldUseSynchronousDuplicationAPI: v,
                    stopwatch: I,
                    userAction: o
                });
                if (null == I || I.mark("perform_server_duplicate_finished"), (0, i().JW)({
                        environment: m,
                        type: "server_duplicate_duplicate_block_iterator_success",
                        data: {
                            result: C,
                            targetSpaceId: y,
                            options: f
                        }
                    }), (0, n().dH)(a), r(300441).Q.isFail(C)) {
                    if ((0, r(818958).Y)(C.error) && !c) {
                        (0, r(818958).G)({
                            onRetry: () => {
                                s({
                                    serverDuplicateArgs: { ...t,
                                        options: { ...t.options,
                                            allowRedundancy: !0
                                        }
                                    },
                                    copyIndicators: a,
                                    userAction: o,
                                    deferred: l,
                                    isRetry: !0,
                                    startTime: p,
                                    onRedundantDuplicationError: u
                                })
                            },
                            onDismiss: () => {
                                (0, i().JW)({
                                    environment: m,
                                    type: "server_duplicate_redundant_duplication_error_dismissed",
                                    data: {
                                        copyIndicatorIds: a.map(e => e.id)
                                    }
                                }), (0, n().uC)({
                                    environment: m,
                                    copyIndicators: a
                                }), l.resolve(r(300441).Q.fail(new(r(648048)).sB))
                            },
                            environment: m
                        }), null == u || u();
                        return
                    }(0, n().uC)({
                        environment: m,
                        copyIndicators: a
                    }), (0, i().P0)({
                        environment: m,
                        type: "server_duplicate_iterator_error",
                        data: {
                            error: C.error
                        }
                    }), l.resolve(C);
                    return
                }
                if (!c) {
                    var T;
                    (0, r(450976).E)({
                        environment: m,
                        success: !0,
                        time: performance.now() - p,
                        user_action: o,
                        is_duplication_local: !1,
                        duplication_size: C.value.size,
                        method: "server_duplication",
                        from: b,
                        destination_table: h,
                        block_type: k,
                        is_template_instantiation: f.isTemplateInstantiation,
                        source_space_id: null == (T = g[0]) ? void 0 : T.spaceId,
                        target_space_id: y
                    })
                }
                null == I || I.mark("server_duplicate_success"), l.resolve(r(300441).Q.success({
                    recordIdMap: C.value.recordIdMapJson ? r(412951).RecordMapPolymorphic.create(C.value.recordIdMapJson) : void 0
                }))
            }
            async function d(e) {
                let t, {
                        environment: l,
                        copyIndicators: n,
                        sourceBlocks: i,
                        targetSpaceId: c,
                        options: s,
                        templateInstallationMetadata: d,
                        installationImprint: f,
                        shouldUseSynchronousDuplicationAPI: y,
                        stopwatch: _,
                        userAction: S
                    } = e,
                    v = i[0].spaceId || c,
                    I = i.map(e => ({ ...e,
                        spaceId: e.spaceId || v
                    })),
                    b = n.map(e => ({
                        id: e.id,
                        spaceId: e.getSpaceId()
                    })),
                    h = !!s.resolveTemplateVariables && {
                        currentUserId: l.currentUser.id,
                        currentTimeZone: (0, r(714350).P)()
                    },
                    k = {
                        sourceBlocks: I,
                        targetBlocks: b,
                        addCopyName: s.addCopyName,
                        deepCopyTransclusionContainers: s.deepCopyTransclusionContainers,
                        convertExternalObjectInstancesToPlaceholders: s.convertExternalObjectInstancesToPlaceholders,
                        duplicateOnlyCollectionSchema: s.duplicateOnlyCollectionSchema,
                        isTemplateInstantiation: !!d.source,
                        resolveTemplateVariables: h,
                        allowRedundancy: s.allowRedundancy,
                        installationImprint: f,
                        returnRecordIdMapJson: s.returnRecordIdMap,
                        useSharedContext: s.useSharedContext
                    },
                    C = void 0 !== d.source,
                    T = g(s.shouldTranslate, s.sourceLanguage, s.targetLanguage);
                if (C) {
                    let e = { ...k,
                        source: d.source,
                        context: d.context,
                        isEmailShared: d.isEmailShared,
                        isFromDuplicateParam: d.isFromDuplicateParam,
                        shouldTranslate: s.shouldTranslate,
                        sourceLanguage: s.sourceLanguage,
                        targetLanguage: s.targetLanguage
                    };
                    y ? (t = await u({
                        environment: l,
                        request: e
                    }), null == _ || _.mark("duplicate_template_synchronously_finished")) : (t = await m({
                        environment: l,
                        eventName: o,
                        request: e,
                        spaceIds: [],
                        copyIndicators: n,
                        targetSpaceId: c,
                        userAction: S
                    }), null == _ || _.mark("duplicate_template_finished"))
                } else T ? (t = await m({
                    environment: l,
                    eventName: a,
                    request: { ...k,
                        sourceLanguage: s.sourceLanguage,
                        targetLanguage: s.targetLanguage
                    },
                    spaceIds: [],
                    copyIndicators: n,
                    targetSpaceId: c,
                    userAction: S
                }), null == _ || _.mark("duplicate_and_translate_template_finished")) : y ? (t = await p({
                    environment: l,
                    request: k
                }), null == _ || _.mark("duplicate_block_synchronously_finished")) : (t = await m({
                    environment: l,
                    eventName: r(286983).w,
                    request: k,
                    spaceIds: (0, r(381453).hS)([...I, ...b], "spaceId").map(e => e.spaceId),
                    copyIndicators: n,
                    targetSpaceId: c,
                    userAction: S
                }), null == _ || _.mark("duplicate_block_finished"));
                return t
            }
            async function p(e) {
                let {
                    environment: t,
                    request: a
                } = e, o = await t.api.callApi({
                    eventName: "duplicateBlockSynchronously",
                    environment: t,
                    data: a
                });
                return "failed" === o.type ? r(300441).Q.fail(o.error) : r(300441).Q.success({
                    recordIdMapJson: o.data.recordIdMapJson,
                    size: o.data.size
                })
            }
            async function u(e) {
                let {
                    environment: t,
                    request: a,
                    stopwatch: o
                } = e, l = await t.api.callApi({
                    eventName: "duplicateTemplateBlockSynchronously",
                    environment: t,
                    data: a
                });
                return (null == o || o.mark("duplicate_template_synchronous_finished"), "failed" === l.type) ? r(300441).Q.fail(l.error) : r(300441).Q.success({
                    recordIdMapJson: l.data.recordIdMapJson,
                    size: l.data.totalBlocks
                })
            }
            async function m(e) {
                var t, a;
                let o, {
                        environment: c,
                        eventName: s,
                        request: d,
                        spaceIds: p,
                        copyIndicators: u,
                        targetSpaceId: g,
                        userAction: f
                    } = e,
                    y = r(259242).UT({
                        environment: c,
                        eventName: s,
                        request: d,
                        multiCellRouting: {
                            spaceIds: p
                        }
                    });
                try {
                    for await (let e of y)(0, i().JW)({
                        environment: c,
                        type: "server_duplicate_duplicate_block_iterator",
                        data: {
                            response: e,
                            targetSpaceId: g
                        }
                    }), (0, n().d8)({
                        state: e,
                        copyIndicatorIds: u.map(e => e.id)
                    }), l().$2(c, e), o = e
                } catch (e) {}
                if (o) {
                    if (o.error) return (0, r(908467).l)(o.error) && (r(773352).log({
                        level: "warning",
                        from: "serverDuplicate",
                        type: "crossSpaceDuplication",
                        data: {
                            errorMessage: o.error.message,
                            spaceIds: p,
                            userAction: f
                        }
                    }), p.length > 0) ? m({
                        environment: c,
                        eventName: s,
                        request: d,
                        spaceIds: [],
                        copyIndicators: u,
                        targetSpaceId: g,
                        userAction: f
                    }) : r(300441).Q.fail(o.error)
                } else {
                    let e = r(962299).A.formatMessage(r(450976).V.errorTitle);
                    return r(300441).Q.fail(Error(e))
                }
                return r(300441).Q.success({
                    recordIdMapJson: null == (t = o) ? void 0 : t.value.recordIdMapJson,
                    size: (null == (a = o) ? void 0 : a.value.totalBlocks) ? ? 0
                })
            }

            function g(e, t, a) {
                return !!(e && t && a) && r(218744).default.checkGate({
                    gateName: "translate_template_top_bar"
                })
            }
        }
    }
]);