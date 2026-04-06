"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [7502, 40600], {
        5556: (e, t, r) => {
            r.d(t, {
                u: () => o
            });

            function o(e) {
                let {
                    blocks: t,
                    transaction: o
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && r(966980).wm(e) && (0, r(210191).T)({
                        store: e,
                        transaction: o
                    })
                }
            }
        },
        85071: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => o,
                integrationIcon: () => l
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                l = (0, r(104509).wt)("integration", o, "default")
        },
        95783: (e, t, r) => {
            r.d(t, {
                w: () => o
            }), r(16280), r(18107), r(967357), r(898992), r(737550);

            function o(e) {
                var t, o, l, i, a, n;
                let {
                    environment: c,
                    createBlockItem: s,
                    from: d,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: f
                } = e;
                if (!s.templateRootBlockId || !s.createTemplate) throw Error("Invalid createBlock item.");
                let g = (f.length > 0 ? f[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    m = g ? c.idCreator.getSpaceIdCreatorSync(g) : void 0,
                    h = f.some(e => (0, r(398346).l)(e)),
                    v = s.createTemplate(c),
                    {
                        targetBlockStore: S
                    } = (0, r(963771).initializeTemplate)({
                        environment: c,
                        sourceBlockId: s.templateRootBlockId,
                        targetBlockPointer: (0, r(295447).zP)({
                            environment: c,
                            table: r(832375).evP,
                            spaceId: g
                        }),
                        sourceBlockSubtree: (0, r(412951).partialRecordMapToRecordMap)(v),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !h,
                        spaceIdCreator: m
                    });
                null == (o = s.postCreateCallback) || o.call(s, S, c, p);
                let [b] = f;
                if (r(205103).eY({
                        environment: c,
                        store: S,
                        transaction: p,
                        previousStore: b
                    }), d && s.blockType) {
                    let e, t, o, u, p = s.collectionViewType,
                        g = 0 !== f.length ? null == (l = f[0]) ? void 0 : l.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let r = null == (i = S.getCollectionViewStores()) ? void 0 : i.at(0);
                        e = null == r || null == (a = r.getChartConfig()) ? void 0 : a.type, t = null == r ? void 0 : r.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (n = S.getCollectionViewStores()) ? void 0 : n.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        o = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: m,
                        ownedCollectionCount: h,
                        linkedCollectionCount: v
                    } = (0, r(633171).P)(S, {
                        skipPages: !1
                    }), b = {
                        from: d,
                        collection_id: m,
                        owned_collection_count: h,
                        linked_collection_count: v,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: s.isToggleable,
                        automation_id: S.getAutomationId(),
                        new_page_id: "page" === s.blockType ? S.id : void 0,
                        creating_block_id: S.id,
                        parent_collection_id: g,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: o,
                        view_id: u
                    }, k = s.blockType;
                    r(549960).tP(k) ? r(549960).vH(c, { ...b,
                        type: k,
                        collection_id: m || ""
                    }) : r(549960).vH(c, { ...b,
                        type: k
                    })
                }
                return S
            }
        },
        150945: (e, t, r) => {
            function o(e) {
                let t, {
                        environment: o,
                        createBlockItem: l,
                        selection: i,
                        transaction: a,
                        analyticsFrom: n,
                        preventSetSelection: c
                    } = e,
                    s = r(584265).default.getCurrentRecordCache(),
                    d = new(r(303541)).UF({
                        environment: o,
                        userFlow: (null == l ? void 0 : l.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: n,
                        succeedOnEnqueue: !0
                    });
                if ((0, r(194020).E)(o, (0, r(974410).f)(i[0])) && l && s) {
                    let e = r(95783).w({
                        environment: o,
                        createBlockItem: l,
                        transaction: a,
                        inMemoryRecordCache: s,
                        from: n,
                        selection: i
                    });
                    d.track(e.pointer, a), t = (0, r(210318).L)({
                        environment: o,
                        blocksToInsert: [e],
                        target: i,
                        transaction: a,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: c
                    })[0]
                } else d.fail("invalid_state");
                return t
            }

            function l(e) {
                let t, {
                        environment: o,
                        createBlockItem: l,
                        selection: i,
                        transaction: a,
                        analyticsFrom: n,
                        preventSetSelection: c
                    } = e,
                    s = r(584265).default.getCurrentRecordCache();
                if ((0, r(194020).E)(o, (0, r(974410).f)(i[0])) && l && s) {
                    let e = r(95783).w({
                        environment: o,
                        createBlockItem: l,
                        transaction: a,
                        inMemoryRecordCache: s,
                        from: n,
                        selection: i
                    });
                    t = (0, r(199894).t)({
                        environment: o,
                        blocks: [e],
                        selection: i,
                        transaction: a,
                        preventSetSelection: c
                    })[0]
                }
                return t
            }

            function i(e) {
                let {
                    environment: t,
                    selection: l,
                    transaction: i
                } = e, a = o({ ...e,
                    preventSetSelection: !0
                });
                if (a) {
                    var n;
                    (0, r(270819).x)({
                        environment: t,
                        insertedStores: [a],
                        isCreated: !0
                    });
                    let e = r(708929).Uv.getMode(a);
                    if ("suggest" === e) {
                        let e = (0, r(714577).R)(t, i, a);
                        (0, r(132993).t)(i, a, {
                            id: r(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, r(941538).c)({
                            environment: t,
                            transaction: i,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [a.id]
                        })
                    }
                    "suggest" === e && null != (n = a.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && n.isCommentOnly() || (0, r(5556).u)({
                        transaction: i,
                        blocks: l
                    })
                }
                return a
            }

            function a(e) {
                let {
                    blocks: t,
                    transaction: l,
                    environment: i,
                    skipAnalytics: a
                } = e, n = o({
                    environment: i,
                    selection: t,
                    createBlockItem: r(992140).ry.text,
                    analyticsFrom: a ? void 0 : "text_insert_below",
                    transaction: l
                });
                return n && r(374176).default.afterNextFlush(() => {
                    (0, r(464515).z)({
                        environment: i,
                        blockStore: n,
                        insertedTextBlockLocation: "below",
                        editSelection: r(182553).h,
                        getRectFromStore: r(240414).T.getRectFromStore.bind(r(240414).T)
                    })
                }), n
            }

            function n(e) {
                let {
                    blocks: t,
                    transaction: o,
                    environment: i,
                    skipAnalytics: a
                } = e, n = l({
                    environment: i,
                    selection: t,
                    createBlockItem: r(992140).ry.text,
                    analyticsFrom: a ? void 0 : "text_insert_below",
                    transaction: o
                });
                return n && r(374176).default.afterNextFlush(() => {
                    (0, r(464515).z)({
                        environment: i,
                        blockStore: n,
                        insertedTextBlockLocation: "above",
                        editSelection: r(182553).h,
                        getRectFromStore: r(240414).T.getRectFromStore.bind(r(240414).T)
                    })
                }), n
            }
            r.r(t), r.d(t, {
                insertBlockAbove: () => l,
                insertBlockAndEdit: () => i,
                insertBlockBelow: () => o,
                insertTextAbove: () => n,
                insertTextBelow: () => a
            })
        },
        170013: (e, t, r) => {
            async function o(e) {
                let {
                    navigateToTarget: t,
                    skipUserFacingMessages: o,
                    ...i
                } = e, {
                    environment: a,
                    from: n
                } = i, c = l;
                c = (0, r(94228).yE)(c, r(94228).Nf), c = (0, r(94228).ME)(c), o || (c = (0, r(94228).yE)(c, r(94228).vd), c = (0, r(94228).$2)(c)), t && (c = (0, r(94228).em)(c));
                let s = `duplicateSubtree.${n}`;
                return c = (0, r(94228).NU)({
                    environment: a,
                    runner: c,
                    userAction: s,
                    method: "server_duplicate_subtree",
                    from: n
                }), c = (0, r(94228).E0)({
                    runner: c,
                    userAction: s
                }), await (0, r(94228).Fe)({
                    runner: c,
                    args: i
                })
            }
            async function l(e) {
                let {
                    environment: t,
                    destination: o,
                    options: l,
                    from: i,
                    sourceBlocks: a,
                    listener: n,
                    appendWithoutAfter: c,
                    unlockPages: s
                } = e, d = a[0].getSpaceId(), u = o.parent.spaceId, p = {
                    allowDuplicateSourceIds: l.allowDuplicateSourceIds,
                    allowMixedExistingBlockParents: l.allowMixedExistingBlockParents,
                    allowRedundancy: l.allowRedundancy,
                    appendNumericTitleSuffix: l.addCopyName,
                    resolveTemplateVariables: l.resolveTemplateVariables ? {
                        currentUserId: t.currentUser.id,
                        currentTimeZone: (0, r(714350).P)()
                    } : void 0,
                    excludeCollectionChildren: l.duplicateOnlyCollectionSchema,
                    excludeTransclusionContainerChildren: !l.deepCopyTransclusionContainers,
                    isTemplateInstantiation: l.isTemplateInstantiation,
                    unlockPages: s,
                    sourceBlockUpdateStrategy: l.sourceBlockUpdateStrategy,
                    shouldNavToFirstTarget: l.shouldNavToFirstTarget
                };
                r(773352).log({
                    level: "info",
                    from: "duplicateTo",
                    type: "duplicateSubtree",
                    data: {
                        miscDataToConvertToString: {
                            from: i,
                            duplicateSubtreeOptions: p,
                            sourceSpaceId: d,
                            targetSpaceId: u
                        }
                    }
                }), (0, r(494010).Wy)(o) && !c && void 0 === o.siblingId && a[a.length - 1].getParentId() === o.parent.id && (o.siblingId = a[a.length - 1].id);
                let f = {
                        source: {
                            ids: a.map(e => e.id),
                            spaceId: d
                        },
                        destination: o,
                        options: p,
                        userAction: `duplicateSubtree.${i}`
                    },
                    g = (0, r(259242).UT)({
                        environment: t,
                        eventName: r(916501).$,
                        request: f,
                        multiCellRouting: {
                            spaceIds: (0, r(763230).sb)([d, u])
                        }
                    });
                await (0, r(94228).nN)({
                    environment: t,
                    iterator: g,
                    listener: n,
                    targetSpaceId: u,
                    retryOnMainCell: () => (0, r(259242).UT)({
                        environment: t,
                        eventName: r(916501).$,
                        request: f,
                        multiCellRouting: {
                            spaceIds: []
                        }
                    })
                })
            }

            function i(e) {
                let {
                    options: t,
                    gateName: o,
                    appendWithoutAfter: l,
                    templateInstallationMetadata: i,
                    from: a,
                    sourceBlocks: n,
                    destination: c
                } = e;
                if (!o || !r(218744).default.checkGate({
                        gateName: o
                    })) return !1;
                let s = !t.shouldTranslate && !t.targetLanguage && !t.sourceLanguage && !t.returnRecordIdMap && !l && (!i || !(0, r(252822).Fe)(i.source));
                return s || r(773352).log({
                    level: "warning",
                    from: "duplicateTo",
                    type: "duplicateSubtree_not_supported",
                    data: {
                        miscDataToConvertToString: {
                            options: t,
                            from: a,
                            sourceBlocksIds: n.map(e => e.id),
                            destination: c
                        }
                    }
                }), s
            }
            r.d(t, {
                B: () => i,
                V: () => o
            }), r(581454)
        },
        199894: (e, t, r) => {
            r.d(t, {
                t: () => o
            }), r(16280), r(898992), r(672577), r(581454);

            function o(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: l,
                    preventSetSelection: i
                } = e, {
                    blocks: a
                } = e, n = (0, r(385941).Z)();
                if (!n) throw Error("No root store.");
                if (o.length > 0) {
                    let e = o[0],
                        n = r(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!n || !n.props.onInsertAbove) throw Error("No Selectable found.");
                    let c = n.props.onInsertAbove({
                        insertStores: a,
                        transaction: l
                    });
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: c
                    }), c
                } {
                    let e = n.getContentStore(),
                        o = a.map(t => (0, r(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: l
                        }).childStore);
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: o
                    }), o
                }
            }
        },
        285482: (e, t, r) => {
            r.d(t, {
                A: () => o
            });

            function o(e, t) {
                if ((0, r(101787).pA8)(t)) {
                    let o = (0, r(115964).$)(t.clientData);
                    if (o) return "messageValues" in t.clientData ? e.formatMessage(o, t.clientData.messageValues) : e.formatMessage(o)
                }
                return e.formatMessage(r(683646).k.generic_error)
            }
        },
        370636: (e, t, r) => {
            r.r(t), r.d(t, {
                handleDrop: () => i,
                handleDropV2: () => l
            }), r(944114), r(581454);
            var o = () => r(124937);

            function l(e) {
                let {
                    environment: t,
                    droppedStores: l,
                    resolveTemplateVariables: i,
                    transaction: a,
                    targetStore: n,
                    targetParentStore: c,
                    droppedDirection: s,
                    existingBlocks: d
                } = e, u = function(e) {
                    let t, {
                        environment: l,
                        transaction: i,
                        targetStore: a,
                        targetParentStore: n,
                        droppedStores: c,
                        droppedDirection: s,
                        existingBlocks: d
                    } = e;
                    if (!a && !n) return;
                    let u = c[0].getSpaceId();

                    function p(e) {
                        var t;
                        if ("block" !== (t = e.table) && "space" !== t && "team" !== t && "collection" !== t && "automation_action" !== t && "workflow" !== t) return;
                        let o = {
                            table: e.table,
                            id: e.id,
                            spaceId: u
                        };
                        if ((0, r(494010).Hu)(o)) return (0, r(494010).vC)(o)
                    }

                    function f(e) {
                        return o().Wv({
                            environment: l,
                            type: r(955630).xd.copyIndicator,
                            inMemoryRecordCache: e.inMemoryRecordCache,
                            transaction: i,
                            spaceId: u
                        })
                    }
                    if (!a) {
                        if (!n) return;
                        let e = p(n);
                        return e ? s === r(966225).bH.Above && (0, r(494010).Wy)(e) ? { ...e,
                            siblingId: e.siblingId
                        } : e : void 0
                    }
                    let g = a.table === r(832375).VlP,
                        m = g ? a : a.getParentStore();
                    if (!m) return;
                    if (s === r(966225).bH.Onto) {
                        let e, t = p(a);
                        if (!t) return;
                        let o = c.map(t => {
                            let o = f(t);
                            return (0, r(579695).NI)({
                                childStore: o,
                                parentStore: a,
                                transaction: i,
                                after: e
                            }), e = o.id, o
                        });
                        return { ...t,
                            existingBlockIds: o.map(e => e.id)
                        }
                    }
                    let h = p(m);
                    if (!h) return;
                    if (d && d.length > 0) return { ...h,
                        existingBlockIds: d.map(e => e.id)
                    };
                    if (s === r(966225).bH.Left || s === r(966225).bH.Right) {
                        if (!(a instanceof r(970831).B) || !n) return;
                        let e = c.map(f);
                        s === r(966225).bH.Left ? r(491320).dC({
                            environment: l,
                            parentStore: n,
                            insertStores: e,
                            leftStore: a,
                            transaction: i
                        }) : r(491320)._p({
                            environment: l,
                            parentStore: n,
                            insertStores: e,
                            rightStore: a,
                            transaction: i
                        });
                        let t = e[0].getParentStore();
                        return { ...void 0 !== t ? p(t) ? ? h : h,
                            existingBlockIds : e.map(e => e.id)
                        }
                    }
                    let v = s === r(966225).bH.Above,
                        S = c.map((e, o) => {
                            let l = f(e);
                            return v && 0 === o ? (0, r(579695).Ti)({
                                childStore: l,
                                parentStore: m,
                                transaction: i,
                                before: a.id
                            }) : g || (0, r(579695).NI)({
                                childStore: l,
                                parentStore: m,
                                transaction: i,
                                after: t ? ? a.id
                            }), t = l.id, l
                        });
                    return { ...h,
                        existingBlockIds: S.map(e => e.id)
                    }
                }({
                    environment: t,
                    transaction: a,
                    targetStore: n,
                    targetParentStore: c,
                    droppedStores: l,
                    droppedDirection: s,
                    existingBlocks: d
                });
                if (!u) return [];
                let p = l[0],
                    f = (0, r(558254).y)({
                        environment: t,
                        sourceBlocks: l,
                        destination: u,
                        transaction: a,
                        options: {
                            addCopyName: !0,
                            allowRedundancy: !0,
                            deepCopyTransclusionContainers: !p.isTransclusionType(),
                            resolveTemplateVariables: p.getType() !== r(955630).xd.factory && i,
                            sourceBlockUpdateStrategy: "merge"
                        },
                        from: "drag_and_drop",
                        listener: e => {
                            if ("completed" === e.type) {
                                u.parent.table === r(832375).VlP && r(374176).default.afterNextFlush(() => {
                                    (0, r(773777).d)(t, e.createdBlocks.map(e => e.id))
                                });
                                return
                            }
                            if ("local_completed" === e.type) {
                                let i = e.createdBlocks;
                                if (r(374176).default.afterNextFlush(() => {
                                        (0, r(773777).d)(t, i.map(e => e.id))
                                    }), (0, r(508331).c)(p.inMemoryRecordCache)) {
                                    let t = [];
                                    for (let r = 0; r < e.createdBlocks.length; r++) {
                                        let o = e.createdBlocks[r],
                                            i = l[r],
                                            a = o.getFileIds();
                                        a.length > 0 && t.push({
                                            newStore: o,
                                            originalStore: i,
                                            fileIds: a
                                        })
                                    }
                                    for (let {
                                            newStore: e,
                                            originalStore: r,
                                            fileIds: l
                                        } of t) {
                                        let t = r.inMemoryRecordCache,
                                            i = null == t ? void 0 : t.relatedThreadPointer;
                                        i && i.spaceId && o().Bn({
                                            store: e,
                                            source: i,
                                            fileIds: l,
                                            transaction: a
                                        })
                                    }
                                }
                            }
                        }
                    });
                if (r(300441).Q.isFail(f)) throw f.error;
                return f.value.createdBlocks
            }

            function i(e) {
                let {
                    droppedStores: t,
                    transaction: i,
                    environment: a,
                    duplicate: n,
                    duplicateActions: c,
                    targetStore: s,
                    targetParentStore: d,
                    droppedDirection: u,
                    existingBlocks: p
                } = e, f = e.resolveTemplateVariables, g = [], m = r(218744).default.checkGate({
                    gateName: "duplicate_subtree_advanced_flows"
                });
                if (n && m) return 0 === t.length || l({
                    environment: a,
                    droppedStores: t,
                    transaction: i,
                    resolveTemplateVariables: f,
                    targetStore: s,
                    targetParentStore: d,
                    droppedDirection: u,
                    existingBlocks: p
                }), [];
                let h = t.map(e => {
                    let t;
                    if (!r(240414).T.findSelectableFromStore(e)) return e;
                    let o = (0, r(508331).c)(e.inMemoryRecordCache);
                    if (n && c) {
                        let o = !e.isTransclusionType(),
                            {
                                blockStores: l
                            } = c.duplicateBlock({
                                environment: a,
                                stores: [e],
                                transaction: i,
                                targetSpaceId: e.getSpaceId(),
                                executionTarget: "local",
                                from: "drag_and_drop",
                                options: {
                                    addCopyName: !0,
                                    allowRedundancy: !0,
                                    resolveTemplateVariables: e.getType() !== r(955630).xd.factory && f,
                                    deepCopyTransclusionContainers: o
                                },
                                skipUserFacingMessages: !1
                            });
                        t = l[0]
                    } else f && r(31904).hz({
                        environment: a,
                        store: e,
                        context: {
                            currentUserId: a.currentUser.id,
                            currentTimeZone: (0, r(714350).P)()
                        },
                        transaction: i
                    }), (0, r(210191).T)({
                        store: e,
                        transaction: i
                    }), t = e;
                    if (o) {
                        let r = t.getFileIds();
                        r.length > 0 && g.push({
                            newStore: t,
                            originalStore: e,
                            fileIds: r
                        })
                    }
                    return t
                });
                for (let {
                        newStore: e,
                        originalStore: t,
                        fileIds: r
                    } of g) {
                    let l = t.inMemoryRecordCache,
                        a = null == l ? void 0 : l.relatedThreadPointer;
                    a && a.spaceId && o().Bn({
                        store: e,
                        source: a,
                        fileIds: r,
                        transaction: i
                    })
                }
                return h
            }
        },
        425749: (e, t, r) => {
            r.d(t, {
                I$: () => a,
                R2: () => s,
                WF: () => c,
                bZ: () => n,
                cE: () => l,
                jX: () => i,
                rz: () => d
            });
            var o = () => r(381453);

            function l(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function a(e) {
                return !!(void 0 !== e && (0, r(722371).Xk)(i, e))
            }

            function n() {
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

            function c(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of s)
                    if (o().n4(e, t)) return !0;
                return !1
            }
        },
        464515: (e, t, r) => {
            r.d(t, {
                z: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    blockStore: o,
                    insertedTextBlockLocation: l,
                    editSelection: i,
                    getRectFromStore: a
                } = e, n = r(764615).Ay.state;
                if (i({
                        environment: t,
                        store: o
                    }), (0, r(940763).e)({
                        store: o.getBlockTitleStore()
                    }), !n.open && !t.device.isPhone) {
                    let e = o.getBlockTitleStore(),
                        i = a(o),
                        n = r(92513).JW();
                    i && (r(764615).Ay.setState({
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
                        selectionRect: i,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: r(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: l
                    }), (0, r(525779).clear)({
                        environment: t
                    }), (0, r(940763).e)({
                        store: e
                    }), (0, r(104310).u)({
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
        558254: (e, t, r) => {
            r.d(t, {
                y: () => i
            }), r(16280), r(944114);
            var o = () => r(678703),
                l = () => r(832375);

            function i(e) {
                let {
                    environment: t,
                    sourceBlocks: i,
                    destination: a,
                    transaction: n,
                    options: c,
                    from: s,
                    installationImprint: d,
                    templateInstallationMetadata: u,
                    appendWithoutAfter: p,
                    unlockPage: f,
                    listener: g
                } = e, m = a.existingBlockIds;
                if (!m || m.length !== i.length) throw Error("Synchronous mixed local server duplication requires existing block IDs for each source block");
                let h = e.userId ? ? t.currentUser.id;
                if (!h) return r(300441).Q.fail(Error("Failed to get user ID"));
                let v = a.parent.spaceId,
                    S = e.targetSpaceViewStore ? ? (0, r(852864).H)({
                        spaceStore: new(o()).SL(t, {
                            table: l().NXh,
                            id: v
                        }),
                        userId: h,
                        environment: t
                    });
                if (!S) return r(300441).Q.fail(Error("Failed to get target space view store"));
                let b = r(730125).A.getState().executionTarget;
                g({
                    type: "started"
                });
                let k = [],
                    y = [],
                    I = [],
                    T = [];
                if ("server" !== b) {
                    let e = (0, r(44226).loadInMemorySubtree)({
                        environment: t,
                        sourceStores: i,
                        options: c,
                        targetSpaceId: v,
                        bailOnMiss: !1
                    });
                    for (let g of (e && (k = (0, r(44226).performLocalDuplication)({
                            environment: t,
                            sourceStores: i,
                            destination: a,
                            options: c,
                            transaction: n,
                            from: s,
                            onMissingLocalSubtree: ({
                                index: e,
                                blockStore: t
                            }) => {
                                y.push(t), I.push(m[e])
                            },
                            targetSpaceId: v,
                            targetSpaceViewStore: S,
                            existingBlockIds: m,
                            installationImprint: d,
                            templateInstallationMetadata: u,
                            unlockPages: f,
                            appendWithoutAfter: p,
                            localSubtrees: e
                        })), I)) {
                        let e = new(o()).Bv(t, {
                            table: l().evP,
                            id: g,
                            spaceId: v
                        });
                        T.push(e)
                    }
                    g({
                        type: "local_completed",
                        createdBlocks: [...k, ...T],
                        recordIdMap: void 0
                    })
                }
                return n.postSubmitCallbacks.push(async e => {
                    if (e) return void await g({
                        type: "error",
                        error: e
                    });
                    if ("server" === b) return void(0, r(170013).V)({
                        environment: t,
                        listener: g,
                        sourceBlocks: i,
                        destination: a,
                        options: { ...c,
                            isTemplateInstantiation: c.isTemplateInstantiation || !!u
                        },
                        from: s,
                        appendWithoutAfter: p
                    });
                    if (y.length > 0) {
                        let e = await (0, r(44226).loadSubtreesForLocalDuplication)({
                                environment: t,
                                sourceStores: y,
                                existingBlockIds: I,
                                targetSpaceId: v,
                                options: c,
                                shouldUseServerBackedDuplication: !0,
                                bailOnMiss: !1
                            }),
                            o = [],
                            l = [],
                            i = [];
                        if (e) {
                            let n = (0, r(377796).createAndCommit)({
                                environment: t,
                                canUndo: !1,
                                userAction: `duplicateToSynchronous.${s}`,
                                cellTarget: {
                                    spaceWithId: v
                                },
                                perform: o => (0, r(44226).performLocalDuplication)({
                                    environment: t,
                                    sourceStores: y,
                                    destination: a,
                                    options: c,
                                    unlockPages: f,
                                    targetSpaceId: v,
                                    transaction: o,
                                    existingBlockIds: I,
                                    localSubtrees: e,
                                    from: s,
                                    installationImprint: d,
                                    templateInstallationMetadata: u,
                                    appendWithoutAfter: p,
                                    targetSpaceViewStore: S,
                                    onMissingLocalSubtree: ({
                                        index: e,
                                        blockStore: t
                                    }) => {
                                        i.push(t), l.push(I[e])
                                    }
                                })
                            });
                            o = n.performResult;
                            try {
                                if (await n.serverCommitResult, 0 === i.length) return void await g({
                                    type: "completed",
                                    createdBlocks: o,
                                    recordIdMap: void 0
                                })
                            } catch (e) {
                                await g({
                                    type: "error",
                                    error: (0, r(161179).A)(e)
                                });
                                return
                            }
                        }
                        if ("local" !== b) {
                            let e = { ...a,
                                existingBlockIds: l
                            };
                            (0, r(170013).V)({
                                environment: t,
                                listener: g,
                                sourceBlocks: i,
                                destination: e,
                                options: { ...c,
                                    isTemplateInstantiation: c.isTemplateInstantiation || !!u
                                },
                                from: s,
                                appendWithoutAfter: p
                            })
                        }
                    } else await g({
                        type: "completed",
                        createdBlocks: k,
                        recordIdMap: void 0
                    })
                }), r(300441).Q.success({
                    createdBlocks: [...k, ...T]
                })
            }
        },
        730125: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            let o = r(546605).Store.createValue({
                executionTarget: null
            }, {
                name: "DuplicationDebuggingStore"
            })
        },
        852864: (e, t, r) => {
            r.d(t, {
                H: () => o
            }), r(898992), r(672577);

            function o({
                spaceStore: e,
                userId: t,
                environment: l
            }) {
                let i = new(r(736309)).d(l, {
                    table: r(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return i ? r(994797).SpaceViewStore.createChildStore(e, {
                    id: i.id,
                    table: r(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        937776: (e, t, r) => {
            r.d(t, {
                B: () => i
            }), r(296540);
            var o = r(474848);
            let l = {
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
                i = (0, r(104509).wt)("archiveBox", l, "default")
        },
        966559: (e, t, r) => {
            r.r(t), r.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => l
            }), r(296540);
            var o = r(474848);
            let l = {
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
                i = (0, r(104509).wt)("exclamationMarkCircleSmall", l, "small")
        },
        984211: (e, t, r) => {
            r.d(t, {
                f: () => l
            }), r(296540);
            var o = r(474848);

            function l(e) {
                let {
                    item: t,
                    onDismiss: l
                } = e;
                r(436555).D6({ ...t,
                    right: (0, o.jsx)(r(531119).Ag, {
                        onClick: l ? ? r(436555).N2,
                        children: (0, o.jsx)(r(109939).sA, {
                            id: "snackbar.dismiss.title",
                            defaultMessage: "Dismiss"
                        })
                    })
                })
            }
        }
    }
]);