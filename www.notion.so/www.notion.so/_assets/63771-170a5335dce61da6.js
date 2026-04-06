"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [63771], {
        191731: (e, t, i) => {
            i.d(t, {
                i: () => o
            }), i(581454);
            var a = i.n(i(794148));

            function o(e) {
                var t, o;
                let {
                    originalRecord: r,
                    duplicateRecord: l,
                    mapper: d,
                    options: n,
                    actor: p
                } = e, c = i(496282).L3.fromSpaceShardRecordId({
                    id: r.id,
                    spaceId: r.space_id
                }, i(199850).yB);
                l.copied_from_pointer = c;
                let s = (null == (t = d({
                    requested: i(496282).L3.fromPointerLike({
                        table: l.parent_table,
                        id: l.parent_id,
                        spaceId: l.space_id
                    }),
                    requester: c
                })) ? void 0 : t.id) ? ? l.parent_id;
                l.parent_id = s;
                let u = (l.action_ids ? ? []).map(e => {
                    var t;
                    return (null == (t = d({
                        requested: i(496282).L3.fromPointerLike({
                            table: i(901144).SC,
                            id: e,
                            spaceId: l.space_id
                        }),
                        requester: c
                    })) ? void 0 : t.id) ? ? e
                });
                l.action_ids = u;
                let _ = Date.now();
                l.created_time = _, l.last_edited_time = _, l.last_executed_time = void 0, l.last_failed_time = void 0, l.last_failed_reason = void 0, (0, i(722371).O9)(null == (o = l.properties) ? void 0 : o.schedule_id) && (l.properties.schedule_id = void 0), (0, i(722371).O9)(p) && (l.created_by_id = p.id, l.created_by_table = p.table, l.last_edited_by_id = p.id, l.last_edited_by_table = p.table), "recurrence" === l.trigger.type && n.shouldDisableRecurrenceAutomation && (l.status = "disabled_duplication"), "event" === l.trigger.type && function(e) {
                    var t;
                    let {
                        duplicateRecord: o,
                        mapper: r,
                        originalRecord: l
                    } = e, d = i(993189).Bj6.fromAutomation(o);
                    a()(d.isEventType());
                    let n = {
                            id: l.id,
                            spaceId: l.space_id,
                            table: i(199850).yB
                        },
                        {
                            value: p
                        } = (0, i(623519).n)({
                            automationModel: d,
                            visitors: {
                                visitCollectionProperty: void 0,
                                visitRecordPointer: e => {
                                    let t = r({
                                        requested: e,
                                        requester: n
                                    });
                                    if (!t) return {
                                        type: "replace",
                                        value: void 0
                                    }; {
                                        let e = t.spaceId ? ? o.space_id;
                                        return e !== o.space_id ? {
                                            type: "replace",
                                            value: void 0
                                        } : {
                                            type: "replace",
                                            value: { ...t,
                                                spaceId: e
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    a()(p.isEventType()), o.trigger = p.getTrigger();
                    let c = {
                        sourceAutomationParentId: l.parent_id,
                        sourceAutomationId: l.id,
                        sourceAutomationName: (null == (t = l.properties) ? void 0 : t.name) ? ? ""
                    };
                    o.trigger.event.source || (i(773352).log({
                        data: {
                            miscDataToConvertToString: c
                        },
                        from: "duplicateHelpers.duplicateAutomationEventValueHelper",
                        level: "info",
                        type: "duplicateAutomationMissingTriggerSource"
                    }), o.status = "disabled")
                }({
                    duplicateRecord: l,
                    mapper: d,
                    originalRecord: r
                })
            }
        },
        333132: (e, t, i) => {
            i.d(t, {
                I: () => a
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454), i(737550);

            function a(e) {
                var t, a, o;
                let {
                    originalRecord: r,
                    duplicateRecord: l,
                    mapper: d,
                    getRecordRole: n,
                    options: p,
                    originOptions: c,
                    duplicateBlocks: s = !0,
                    getCanCreatePagesInCollection: u,
                    getExternalRecordValue: _,
                    experimentService: f
                } = e, m = r.space_id !== l.space_id, v = {
                    table: i(832375).SC1,
                    id: r.id,
                    spaceId: r.space_id
                }, b = d({
                    requested: i(496282).L3.fromPointerLike({
                        table: l.parent_table,
                        id: l.parent_id,
                        spaceId: l.space_id
                    }),
                    requester: v
                }), g = function(e) {
                    let {
                        duplicatedAction: t,
                        mapper: a,
                        options: o,
                        originOptions: r,
                        sourceSpaceId: l
                    } = e, d = i(993189).Bj6.fromAutomationAction(t), n = d.pointer, p = e => {
                        let {
                            visitPath: r,
                            requested: l,
                            requester: d
                        } = e;
                        return "create_page" === t.type && (null == o ? void 0 : o.isTemplateInstantiation) && "config.template_page_id" === r && l.table === i(682956).ev && o.sourceBlockIds.has(l.id) ? l : a({
                            requested: l,
                            requester: d
                        })
                    };

                    function c(e, t) {
                        let a = (0, i(297493).y5)(e);
                        if ("action" === a.source) {
                            var o;
                            let e = (null == (o = p({
                                visitPath: t,
                                requested: i(496282).L3.fromSpaceShardRecordId({
                                    id: a.action_id,
                                    spaceId: d.space_id
                                }, i(901144).SC),
                                requester: n
                            })) ? void 0 : o.id) ? ? a.action_id;
                            return (0, i(297493).$y)({ ...a,
                                action_id: e
                            })
                        }
                        if ("global" === a.source) return e;
                        (0, i(722371).HB)(a)
                    }
                    let s = d.pointer,
                        {
                            remappedRecordPointers: u,
                            value: _
                        } = (0, i(623519).G)({
                            automationActionModel: d,
                            baseUrl: r.baseUrl,
                            preventClearingConfig: !1,
                            publicDomainName: r.publicDomainName,
                            sourceSpaceId: l,
                            visitors: {
                                visitCollectionProperty: void 0,
                                visitCollectionPropertyPointer: (e, a) => {
                                    let o = p({
                                        visitPath: a,
                                        requested: e,
                                        requester: s
                                    });
                                    if (o) {
                                        let a = o.spaceId ? ? t.space_id;
                                        return a !== t.space_id || o.table !== i(46241).V ? {
                                            type: "replace",
                                            value: void 0
                                        } : {
                                            type: "replace",
                                            value: { ...o,
                                                propertyId: e.propertyId,
                                                spaceId: a
                                            }
                                        }
                                    }
                                    return (e.spaceId ? ? t.space_id) !== t.space_id ? {
                                        type: "replace",
                                        value: void 0
                                    } : {
                                        type: "keep"
                                    }
                                },
                                visitFormulaContextValue: (e, t) => ({
                                    type: "replace",
                                    value: c(e, t)
                                }),
                                visitFormulaPageProperty: (e, a) => {
                                    if ("collection" in e && e.collection) {
                                        let o = p({
                                            visitPath: a,
                                            requested: e.collection,
                                            requester: n
                                        });
                                        if (o && o.table === i(46241).V) {
                                            let i = o.spaceId ? ? t.space_id;
                                            return i !== t.space_id ? {
                                                type: "replace",
                                                value: void 0
                                            } : {
                                                type: "replace",
                                                value: { ...e,
                                                    collection: { ...o,
                                                        spaceId: i
                                                    }
                                                }
                                            }
                                        }
                                    } else if ("contextValueId" in e && e.contextValueId) return {
                                        type: "replace",
                                        value: { ...e,
                                            contextValueId: c(e.contextValueId)
                                        }
                                    };
                                    return {
                                        type: "keep"
                                    }
                                },
                                visitRecordPointer: (e, i) => {
                                    let a = p({
                                        visitPath: i,
                                        requested: e,
                                        requester: s
                                    });
                                    if (a) {
                                        let e = a.spaceId ? ? t.space_id;
                                        return e !== t.space_id ? {
                                            type: "replace",
                                            value: void 0
                                        } : {
                                            type: "replace",
                                            value: { ...a,
                                                spaceId: e
                                            }
                                        }
                                    }
                                    return (e.spaceId ? ? t.space_id) !== t.space_id ? {
                                        type: "replace",
                                        value: void 0
                                    } : {
                                        type: "keep"
                                    }
                                }
                            }
                        }),
                        f = _.getConfig();
                    if (t.config = f, !(0, i(381453).Im)(f)) return u
                }({
                    duplicatedAction: l,
                    mapper: d,
                    options: p.resolveAutomationConfig,
                    originOptions: c,
                    sourceSpaceId: r.space_id
                }), y = n, I = u;
                if (g && (y = i(95476).Oj.tryUntilFound(...Array.from(g).map(e => i(95476).Oj.constantForPointer(e, "editor")), y), u)) {
                    let e = new Set(Array.from(g).filter(e => e.table === i(832375).VlP).map(e => e.id));
                    I = t => e.has(t.id) || u(t)
                }
                let k = (null == b ? void 0 : b.id) ? ? l.parent_id;
                if (l.parent_id = k, m && "http_request" === l.type && l.config)
                    for (let e of (l.config.url = void 0, l.config.customHeaders ? ? [])) e.value = "";
                if ((null == f ? void 0 : f.checkGate({
                        gateName: "automation_duplication_clear_invalid_templates",
                        actor: i(810016).S,
                        customIDs: {
                            spaceId: r.space_id
                        }
                    })) && _ && "create_page" === l.type && null != (t = l.config) && t.template_page_id && "create_page" === r.type && null != (a = r.config) && a.template_page_id) {
                    let e = _({
                            pointer: i(496282).L3.fromPointerLike({
                                table: i(832375).evP,
                                id: r.config.template_page_id,
                                spaceId: r.space_id
                            })
                        }),
                        t = (null == (o = r.config.target) ? void 0 : o.type) === "collection" ? r.config.target.collection : r.config.collection,
                        a = i(993189).Bj6.isModel(i(832375).evP, e),
                        d = a && (!t || i(496282).L3.isEqual(e.getParentPointer(), t));
                    a && e.is_template && d || (l.config.template_page_id = void 0)
                }
                let h = (0, i(746094).Mn)(l, {
                    isDuplication: !0
                });
                h && h.some(e => {
                    let t = y(e.pointer);
                    return !t || !(0, i(138798).q_)(t, e.minimumRequiredRole) || ! function(e, t) {
                        if (!e.additionalPermissionChecks) return !0;
                        for (let i of e.additionalPermissionChecks)
                            if ("canCreatePagesInCollection" === i && t && !t(e.pointer)) return !1;
                        return !0
                    }(e, I)
                }) && (l.config = {});
                let C = (l.blocks ? ? []).map(e => {
                    var t;
                    return null == (t = d({
                        requested: i(496282).L3.fromPointerLike({
                            table: i(832375).evP,
                            id: e,
                            spaceId: l.space_id
                        }),
                        requester: v
                    })) ? void 0 : t.id
                }).filter(i(722371).O9);
                l.blocks = C.length > 0 ? C : void 0, s || (l.blocks = void 0)
            }
        },
        963771: (e, t, i) => {
            i.d(t, {
                initializeTemplate: () => M
            }), i(944114), i(898992), i(908872), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(803949), i(581454), i(737550);
            var a = () => i(92513),
                o = () => i(993189),
                r = () => i(682956),
                l = () => i(247438);
            i(354520);
            class d {
                childToParentMap = new Map;
                unmappedContentIds = new Set;
                extraTranscludedChildren = new(i(277637)).G(() => new Set);
                constructor(e, t, i) {
                    for (const {
                            model: a
                        } of (this.logWarning = t, this.createCopyIndicator = i, e))
                        if (a instanceof o().zgg)
                            for (const t of a.getContentPointers()) e.getModel(t) ? this.childToParentMap.has(t.id) ? this.extraTranscludedChildren.get(t.id).add(a.id) : this.childToParentMap.set(t.id, a.pointer.id) : this.unmappedContentIds.add(t.id);
                    !this.createCopyIndicator && this.logWarning && this.logWarning({
                        type: "multiReferencedContentIds",
                        contentIds: Array.from(this.extraTranscludedChildren.keys())
                    })
                }
                remapDuplicateBlockParent(e) {
                    let {
                        originalBlockPointer: t,
                        duplicateMapper: i
                    } = e, a = this.childToParentMap.get(t.id);
                    if (!a) return;
                    let o = i({
                        requested: {
                            table: r().ev,
                            id: a
                        },
                        requester: t
                    });
                    if (o && o.table === r().ev) return o
                }
                createCopyIndicatorBlockValue(e) {
                    let {
                        type: t,
                        targetSpaceId: l,
                        sourceBlockId: d,
                        duplicateParentId: n,
                        createdBy: p,
                        createOptions: c,
                        additionalRecordsToMutate: s
                    } = e, {
                        model: u
                    } = o().zgg.create({
                        id: (0, a().JW)(),
                        type: i(955630).xd.copyIndicator,
                        space_id: l,
                        parentPointer: {
                            id: n,
                            table: r().ev,
                            spaceId: l
                        },
                        createdBy: p
                    }), _ = u.__IM_SORRY__getValue();
                    return c.onCreate({
                        type: t,
                        duplicateBlockId: _.id,
                        sourceBlockId: d,
                        duplicateParentId: n
                    }), s.push({
                        table: r().ev,
                        value: _
                    }), _.id
                }
                remapDuplicateBlockContent(e) {
                    let {
                        originalBlockPointer: t,
                        duplicateMapper: a,
                        originalBlockContent: o,
                        originalCreatedBy: l,
                        duplicateBlockId: d,
                        targetSpaceId: n
                    } = e, p = [];
                    return {
                        content: o.map(e => {
                            if (this.createCopyIndicator && this.extraTranscludedChildren.has(e) && this.extraTranscludedChildren.get(e).has(t.id)) return this.createCopyIndicatorBlockValue({
                                type: "multi-transcluded-content",
                                targetSpaceId: n,
                                sourceBlockId: e,
                                duplicateParentId: d,
                                createdBy: l,
                                createOptions: this.createCopyIndicator,
                                additionalRecordsToMutate: p
                            });
                            let i = a({
                                requested: {
                                    table: r().ev,
                                    id: e
                                },
                                requester: t
                            });
                            if (i) return i.id;
                            if (this.isUnmappedContentId(e)) {
                                var o;
                                return this.createCopyIndicator ? this.createCopyIndicatorBlockValue({
                                    type: "unmapped-content",
                                    targetSpaceId: n,
                                    sourceBlockId: e,
                                    duplicateParentId: d,
                                    createdBy: l,
                                    createOptions: this.createCopyIndicator,
                                    additionalRecordsToMutate: p
                                }) : void(null == (o = this.logWarning) || o.call(this, {
                                    type: "unmappedContentId",
                                    block: t,
                                    contentId: e
                                }))
                            }
                            return e
                        }).filter(i(722371).O9),
                        additionalRecords: p
                    }
                }
                isUnmappedContentId(e) {
                    return this.unmappedContentIds.has(e)
                }
            }
            var n = () => i(95476),
                p = () => i(496282),
                c = () => i(46241),
                s = () => i(322683),
                u = () => i(226221);

            function _(e) {
                let {
                    mapper: t,
                    requested: i,
                    requester: a,
                    table: o
                } = e, r = f({
                    mapper: t,
                    requested: i,
                    requester: a
                });
                if (!(0, p().Yt)(r, o)) throw Error(`Expected mapped duplicate for ${i.table} ${i.id} to be a ${o}, but it is a ${r.table} (while duplicating ${a.table} ${a.id})`);
                return r
            }

            function f(e) {
                let {
                    mapper: t,
                    requested: i,
                    requester: a
                } = e, o = t({
                    requested: i,
                    requester: a
                });
                if (!o) throw Error(`Unable to find mapped duplicate for ${i.table} ${i.id} while duplicating ${a.table} ${a.id}`);
                return o
            }
            i(16280), i(430670);
            var m = () => i(862060);

            function v(e) {
                return e.type !== i(955630).xd.collectionViewPage && (!e.content || 0 === e.content.length)
            }
            var b = () => i(45288);

            function g({
                originalSpaceId: e,
                duplicateSpaceId: t,
                requester: i,
                collectionPointer: a,
                mapper: o
            }) {
                let r = o({
                    requested: a,
                    requester: i
                }) ? ? (e === t ? a : void 0);
                if (r) {
                    if (r.table !== c().V) throw Error(`Collection pointer for duplicate collection is invalid: ${JSON.stringify(r)}`);
                    return r
                }
            }
            var y = () => i(537664),
                I = () => i(390768),
                k = () => i(9247),
                h = () => i(561872),
                C = () => i(138303),
                w = () => i(639328),
                P = () => i(832375),
                q = () => i(423123);
            i(672577);
            var B = () => i(593186);
            let S = {
                block: !0,
                collection: !0,
                collection_view: !0,
                automation: !0,
                automation_action: !0,
                layout: !0,
                form_question: !0,
                workflow: !0
            };
            var V = () => i(305050),
                T = () => i(259242),
                x = () => i(593016),
                R = () => i(421439);

            function M(e) {
                let {
                    environment: t,
                    sourceBlockId: T,
                    sourceBlockSubtree: M,
                    targetBlockPointer: L,
                    targetRecordCache: j,
                    transaction: A,
                    deepCopyTransclusionContainers: W,
                    resolveTemplateVariables: F,
                    recordPointerMap: N,
                    preventLegacyTransclusions: E,
                    createLegacyTransclusionCopyIndicator: U,
                    spaceIdCreator: G,
                    sourceSpaceIdCreator: $,
                    installationImprint: z,
                    templateInstallationMetadata: J,
                    isTemplateInstantiation: Q,
                    appendContentOnly: Y,
                    sourceBlockUpdateStrategy: H
                } = e, K = t.currentUser.id, Z = !1;
                ((null == J ? void 0 : J.source) === "onboarding" || (null == J ? void 0 : J.source) === "team_home" || null != J && J.isFirstPartyPaidTemplate) && (Z = !0);
                let {
                    duplicateRecordMap: X,
                    originalToDuplicate: ee,
                    aiBlocksToAutoGenerate: et
                } = function(e) {
                    let t, V, T, x, {
                            sourceBlockId: R,
                            targetBlockPointer: M,
                            recordMap: O,
                            options: D,
                            baseUrl: L,
                            publicDomainName: j,
                            actor: A,
                            getRecordRole: W,
                            mapper: F,
                            preventLegacyTransclusions: N,
                            createLegacyTransclusionCopyIndicator: E,
                            logWarning: U,
                            spaceIdCreator: G,
                            installationImprint: $,
                            isTemplateInstantiation: z,
                            getCanCreatePagesInCollection: J,
                            sourceSpaceIdCreator: Q
                        } = e,
                        Y = [],
                        H = e.recordPointerMap || i(412951).RecordMapPolymorphic.create(),
                        K = {
                            table: r().ev,
                            id: R
                        };
                    for (let {
                            pointer: e
                        } of O) {
                        if (e.id === R) {
                            H.set(e, M);
                            continue
                        }
                        let t = H.get(e);
                        !t && F && (t = F({
                            requested: e,
                            requester: K
                        })), t || (t = {
                            spaceId: M.spaceId,
                            table: e.table,
                            id: (null == G ? void 0 : G.idInSavedSpace(e.table)) ? ? a().Dt()
                        }), H.set(e, t)
                    }
                    N && (t = new d(O, U, E ? ? !1));
                    let Z = i(412951).RecordMap.create(),
                        X = ({
                            requested: e
                        }) => H.get(e),
                        ee = {},
                        et = [],
                        ei = new Set,
                        ea = O.getModel({
                            id: R,
                            table: r().ev
                        }),
                        eo = ea ? (T = "duplication", x = new Map, "factory" === ea.type ? (V = {
                            type: T,
                            isRootBlockFactoryBlock: !0,
                            isCurrentBlockRootBlock: !1,
                            factoryBlockIdToNewTextContainerIdMap: x,
                            rootTextContainerId: a().JW()
                        }).factoryBlockIdToNewTextContainerIdMap.set(ea.id, {
                            id: V.rootTextContainerId,
                            table: r().ev
                        }) : V = {
                            type: T,
                            isRootBlockFactoryBlock: !1,
                            factoryBlockIdToNewTextContainerIdMap: x
                        }, V) : void 0;
                    for (let {
                            pointer: e,
                            model: d
                        } of O) {
                        if (void 0 === d || !(d.table in S)) continue;
                        let V = (null == D ? void 0 : D.resolveTemplateVariables) && function(e) {
                            let {
                                rootSourceBlockIds: t,
                                childSourcePointer: a,
                                getSourceRecordValue: l
                            } = e;
                            for (let e of (0, i(688502)._N)(a, l))
                                if (function(e) {
                                        let {
                                            recordWithTable: t,
                                            rootSourceBlockIds: a
                                        } = e;
                                        if (t.table === r().ev) {
                                            if (a.includes(t.value.id)) return !1;
                                            if (o().Bj6.fromBlock(t.value).isTemplateVariableContainerBlock()) return !0
                                        } else if (t.table === i(901144).SC) return !0;
                                        else return !1
                                    }({
                                        rootSourceBlockIds: t,
                                        recordWithTable: e
                                    })) return !0;
                            return !1
                        }({
                            rootSourceBlockIds: [R],
                            childSourcePointer: e,
                            getSourceRecordValue: n().xb.fromRecordMap(O)
                        }) ? { ...D,
                            resolveTemplateVariables: !1
                        } : D;
                        if (d.table === s().zx)
                            for (let e of function(e, t, a) {
                                    if ((0, i(294730).A8)(e) || (0, i(294730).Jc)(e)) return [];
                                    let o = [];
                                    return a && o.push(...a), null != t && t.previousViewsMainCollectionViewBlockPointer && o.push(t.previousViewsMainCollectionViewBlockPointer.id), o
                                }(d.getRawModules(), d.getFormat(), d.getBlocks())) ei.add(e);
                        null != eo && eo.isRootBlockFactoryBlock && (eo.isCurrentBlockRootBlock = d.id === R);
                        let {
                            duplicateRecord: T,
                            additionalRecords: x
                        } = function(e) {
                            let {
                                table: t,
                                record: d,
                                mapper: n,
                                options: S,
                                originOptions: V,
                                actor: T,
                                helperRecordMap: x,
                                getExternalRecordValue: R,
                                getRecordRole: M,
                                rewiredUriMap: O,
                                typedCollectionViewBlocks: D,
                                factoryButtonDeprecationContext: L,
                                legacyTransclusionFixer: j,
                                installationImprint: A,
                                isTemplateInstantiation: W,
                                shouldExcludeBlocksFromLimit: F,
                                targetBlockIds: N,
                                layoutCollectionViewBlocksToRemove: E,
                                logWarning: U,
                                getCanCreatePagesInCollection: G,
                                sourceSpaceIdCreator: $,
                                experimentService: z
                            } = e, J = i(381453).mg(d), Q = f({
                                mapper: n,
                                requested: p().L3.fromPointerLike({
                                    table: t,
                                    id: d.id,
                                    spaceId: d.space_id
                                }),
                                requester: p().L3.fromPointerLike({
                                    table: t,
                                    id: d.id
                                })
                            });
                            J.id = Q.id, J.space_id = (0, u().e)(Q.spaceId);
                            let Y = [];
                            if (t === r().ev) {
                                let {
                                    additionalRecords: e
                                } = function(e) {
                                    var t, d, n, p, s, _, f, y, I, k, h, C, w, P, q, B, S, V, T, x, R, M, O, D, L, j, A, W, F, N, E, U, G, $;
                                    let z, J, Q, {
                                            originalBlock: Y,
                                            duplicateBlock: H,
                                            mapper: K,
                                            options: Z,
                                            originOptions: X,
                                            rewiredUriMap: ee,
                                            typedCollectionViewBlocks: et,
                                            actor: ei,
                                            helperRecordMap: ea,
                                            getExternalRecordValue: eo,
                                            factoryButtonDeprecationContext: er,
                                            legacyTransclusionFixer: el,
                                            installationImprint: ed,
                                            shouldExcludeBlocksFromLimit: en = !1
                                        } = e,
                                        ep = {
                                            table: r().ev,
                                            id: Y.id,
                                            spaceId: Y.space_id
                                        };
                                    if (null != (t = Y.format) && t.app_config_uri && null != (d = H.format) && d.app_config_uri)
                                        if ((0, i(565546).Sn)(Y.format.app_config_uri)) H.format.app_config_uri = void 0;
                                        else {
                                            if ((0, i(955630).Ef)(H.type) && (et.push({
                                                    table: r().ev,
                                                    id: H.id,
                                                    spaceId: H.space_id
                                                }), H.format.app_id)) {
                                                let e = K({
                                                    requested: {
                                                        table: r().ev,
                                                        id: H.format.app_id,
                                                        spaceId: H.space_id
                                                    },
                                                    requester: ep,
                                                    generateDeterministicId: !0
                                                });
                                                e && (H.format.app_id = e.id)
                                            }
                                            ee[Y.id] = H.id
                                        }
                                    if (null != (n = Y.format) && n.app_uri_map && null != (p = H.format) && p.app_uri_map)
                                        for (let [e, t] of Object.entries(Y.format.app_uri_map)) {
                                            let i = K({
                                                requested: {
                                                    id: t,
                                                    table: r().ev,
                                                    spaceId: H.space_id
                                                },
                                                requester: ep
                                            });
                                            i && (H.format.app_uri_map[e] = i.id ? ? t, i.id && (ee[i.id] = H.id))
                                        }
                                    let ec = [];
                                    if (H.crdt_data && delete H.crdt_data, H.crdt_format_version && delete H.crdt_format_version, null != (s = H.format) && s.site_id && delete H.format.site_id, null != (_ = H.format) && _.marketplace_listing_id && delete H.format.marketplace_listing_id, null != (f = H.format) && f.slug && delete H.format.slug, null != (y = H.format) && y.trigger_id_to_schedule_id && delete H.format.trigger_id_to_schedule_id, null != (I = H.format) && I.duplication_job_ids && delete H.format.duplication_job_ids, (H.type === i(955630).xd.collectionView || H.type === i(955630).xd.collectionViewPage) && "number" == typeof(null == (k = H.format) ? void 0 : k.source_collection_page_count) && delete H.format.source_collection_page_count, null != (h = H.format) && h.workflow_instruction_artifact_pointer && delete H.format.workflow_instruction_artifact_pointer, H.deleted_from_trash_id && delete H.deleted_from_trash_id, H.deleted_from_trash_table && delete H.deleted_from_trash_table, H.deleted_from_trash_time && delete H.deleted_from_trash_time, "factory" === H.type && er) {
                                        let {
                                            automation: e,
                                            automationAction: t,
                                            textContainerBlock: d
                                        } = function(e) {
                                            var t, d;
                                            let {
                                                blockValue: n,
                                                factoryButtonDeprecationContext: p,
                                                source: c
                                            } = e, s = (d = n, o().Bj6.fromValue(r().ev, d).getCreatedByPointer() ? ? {
                                                id: i(268033).rb.id,
                                                table: i(268033).rb.table
                                            }), u = n.space_id, _ = a().JW(), f = a().JW(), m = p.isRootBlockFactoryBlock && p.isCurrentBlockRootBlock ? p.rootTextContainerId : a().JW(), v = "duplication" === c ? null == (t = n.content) ? void 0 : t.map(t => e.pointerMapper({
                                                id: t,
                                                table: r().ev
                                            }).id) : n.content, b = function(e) {
                                                let {
                                                    automationActionId: t,
                                                    textContainerBlockId: a,
                                                    creatorPointer: o,
                                                    originalBlockValue: l,
                                                    spaceId: d,
                                                    blockContent: n
                                                } = e;
                                                return {
                                                    table: r().ev,
                                                    value: {
                                                        id: a,
                                                        space_id: d,
                                                        alive: !0,
                                                        parent_table: i(901144).SC,
                                                        parent_id: t,
                                                        type: "text",
                                                        version: 0,
                                                        content: n,
                                                        created_time: l.created_time,
                                                        created_by_table: o.table,
                                                        created_by_id: o.id
                                                    }
                                                }
                                            }({
                                                automationActionId: f,
                                                textContainerBlockId: m,
                                                creatorPointer: s,
                                                originalBlockValue: n,
                                                blockContent: v,
                                                spaceId: u
                                            }), g = function(e) {
                                                let {
                                                    automationId: t,
                                                    automationActionId: a,
                                                    spaceId: o,
                                                    textContainerBlockId: r
                                                } = e;
                                                return {
                                                    table: i(901144).SC,
                                                    value: {
                                                        id: a,
                                                        space_id: o,
                                                        alive: !0,
                                                        parent_table: i(199850).yB,
                                                        parent_id: t,
                                                        type: "duplicate_blocks",
                                                        blocks: [r],
                                                        version: 0,
                                                        config: void 0
                                                    }
                                                }
                                            }({
                                                automationActionId: f,
                                                automationId: _,
                                                creatorPointer: s,
                                                originalBlockValue: n,
                                                spaceId: u,
                                                textContainerBlockId: m
                                            });
                                            return {
                                                textContainerBlock: b,
                                                automation: function(e) {
                                                    var t;
                                                    let {
                                                        creatorPointer: o,
                                                        automationActionId: d,
                                                        originalBlockValue: n,
                                                        spaceId: p,
                                                        automationId: c
                                                    } = e, s = a().JW(), u = Date.now();
                                                    return {
                                                        table: i(199850).yB,
                                                        value: {
                                                            id: c,
                                                            space_id: p,
                                                            alive: !0,
                                                            trigger: {
                                                                id: s,
                                                                type: "button"
                                                            },
                                                            parent_id: n.id,
                                                            parent_table: r().ev,
                                                            action_ids: [d],
                                                            status: "active",
                                                            properties: {
                                                                name: (0, l().q4_)(null == (t = n.properties) ? void 0 : t.title)
                                                            },
                                                            created_by_id: o.id,
                                                            created_by_table: o.table,
                                                            created_time: n.created_time ? ? u,
                                                            last_edited_time: n.last_edited_time ? ? u,
                                                            version: 0,
                                                            last_edited_by_id: n.last_edited_by_id ? ? o.id,
                                                            last_edited_by_table: n.last_edited_by_table ? ? o.table
                                                        }
                                                    }
                                                }({
                                                    automationActionId: f,
                                                    automationId: _,
                                                    creatorPointer: s,
                                                    originalBlockValue: n,
                                                    spaceId: u
                                                }),
                                                automationAction: g
                                            }
                                        }({
                                            blockValue: H,
                                            source: "duplication",
                                            pointerMapper: e => K({
                                                requested: e,
                                                requester: ep
                                            }) ? ? e,
                                            factoryButtonDeprecationContext: er
                                        });
                                        ec.push(e, t, d), er.factoryBlockIdToNewTextContainerIdMap.set(Y.id, {
                                            id: d.value.id,
                                            table: r().ev
                                        }), H.type = "button", H.content = [], H.format = { ...H.format,
                                            automation_id: e.value.id
                                        }
                                    }
                                    if ((0, i(4962).uj)(Y.id) && (H.format || (H.format = {}), H.format.copied_from_pointer = {
                                            table: r().ev,
                                            id: Y.id,
                                            spaceId: Y.space_id
                                        }, H.copied_from = Y.id), Y.parent_table === r().ev && (z = null == er ? void 0 : er.factoryBlockIdToNewTextContainerIdMap.get(Y.parent_id)), (z ? ? = (null == el ? void 0 : el.remapDuplicateBlockParent({
                                            originalBlockPointer: ep,
                                            duplicateMapper: K
                                        })) ? ? K({
                                            requested: {
                                                table: H.parent_table,
                                                id: H.parent_id,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        })) && (H.parent_id = z.id, H.parent_table !== z.table && (0, i(518882).LA)(z) && (H.parent_table = z.table)), null != (C = H.format) && C.ai_instructions_page_pointer && (H.format.ai_instructions_page_pointer = K({
                                            requested: H.format.ai_instructions_page_pointer,
                                            requester: ep
                                        })), null != (w = H.format) && w.ai_block_configuration_menu) {
                                        let e = (0, i(689667).p8)(H.format.ai_block_configuration_menu);
                                        if (i(300441).Q.isSuccess(e)) {
                                            let t = { ...e.value
                                            };
                                            if ("context" in t) {
                                                let e = (t.context ? ? []).map(e => {
                                                    var t, i, a;
                                                    let o = Y.space_id === H.space_id;
                                                    if ("slack" !== e.type || o) {
                                                        if ("page" === e.type || "currentPage" === e.type) {
                                                            let i = null == (t = K({
                                                                requested: {
                                                                    table: r().ev,
                                                                    id: e.pageId,
                                                                    spaceId: H.space_id
                                                                },
                                                                requester: ep
                                                            })) ? void 0 : t.id;
                                                            return i ? {
                                                                type: e.type,
                                                                pageId: i
                                                            } : o ? e : void 0
                                                        }
                                                        if ("collection" === e.type) {
                                                            let t = null == (i = K({
                                                                requested: {
                                                                    table: r().ev,
                                                                    id: e.pageId,
                                                                    spaceId: H.space_id
                                                                },
                                                                requester: ep
                                                            })) ? void 0 : i.id;
                                                            if (!t) return o ? e : void 0;
                                                            let l = null == (a = K({
                                                                requested: {
                                                                    table: c().V,
                                                                    id: e.collectionId,
                                                                    spaceId: H.space_id
                                                                },
                                                                requester: ep
                                                            })) ? void 0 : a.id;
                                                            return l ? {
                                                                type: "collection",
                                                                pageId: t,
                                                                collectionId: l
                                                            } : o ? e : void 0
                                                        }
                                                        return e
                                                    }
                                                }).filter(i(722371).O9);
                                                t.context = e
                                            }
                                            H.format.ai_block_configuration_menu = t
                                        }
                                    }
                                    H.view_ids && (H.view_ids = H.view_ids.map(e => {
                                        var t;
                                        return (null == (t = K({
                                            requested: {
                                                table: i(435544).G,
                                                id: e,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        })) ? void 0 : t.id) || e
                                    }));
                                    let es = o().Bj6.fromBlock(H).getCollectionPointers(),
                                        eu = [];
                                    for (let e of es) {
                                        let t = null == eo ? void 0 : eo({
                                                pointer: e
                                            }),
                                            i = o().Bj6.isModel(c().V, t) ? t.getFormat().bot_id : void 0,
                                            a = null == ea ? void 0 : ea.getValue(e);
                                        if (!((null == a || null == (x = a.format) ? void 0 : x.bot_id) ? ? i)) {
                                            let t = g({
                                                originalSpaceId: Y.space_id,
                                                duplicateSpaceId: H.space_id,
                                                requester: ep,
                                                collectionPointer: e,
                                                mapper: K
                                            });
                                            if (!t) continue;
                                            eu.push(t)
                                        }
                                    }
                                    if (eu.length > 0 ? (H.collection_id = eu[0].id, H.format = { ...H.format,
                                            collection_pointer: eu[0],
                                            collection_pointers: eu
                                        }) : (H.collection_id = void 0, H.format = { ...H.format,
                                            collection_pointer: void 0,
                                            collection_pointers: void 0
                                        }), null != (P = H.format) && P.form_layout_pointer && (H.format.form_layout_pointer = K({
                                            requested: H.format.form_layout_pointer,
                                            requester: ep
                                        })), null != (q = H.format) && q.suggestions && delete H.format.suggestions, H.discussions && delete H.discussions, H.permissions && (Z.duplicatePermissions ? H.permissions = function(e) {
                                            let {
                                                block: t,
                                                targetSpaceSettings: a,
                                                targetTeamSettings: o
                                            } = e;
                                            return (t.permissions || []).filter(e => !((0, i(642157).P3)(e) || (0, i(642157).Ds)(e) || (!o && a.disablePublicAccess || o && o.disable_public_access) && (0, i(642157).FP)(e) || (!o && a.disableGuests || o && o.disable_guests) && (0, i(642157).B2)(e) && !a.memberUserIds.includes(e.user_id)))
                                        }({
                                            block: H,
                                            targetSpaceSettings: Z.duplicatePermissions.targetSpaceSettings,
                                            targetTeamSettings: Z.duplicatePermissions.targetTeamSettings
                                        }) : (delete H.permissions, "form" === H.type && (H.permissions = (0, i(703049).eb)()))), H.content_classification && delete H.content_classification, H.moved && delete H.moved, en && v(H) ? H.ignore_block_count = !0 : H.ignore_block_count && delete H.ignore_block_count, H.properties || (H.properties = {}), H.properties) {
                                        for (let [e, t] of Object.entries(H.properties)) {
                                            let i = l().Uee(t, {
                                                removeSuggestionAnnotationsAndText: !0,
                                                removeSuggestionAnnotations: !0,
                                                removeDiscussions: !0
                                            });
                                            i = (0, b().R)({ ...X,
                                                text: {
                                                    value: i,
                                                    spaceId: (0, u().e)(H.space_id)
                                                },
                                                mapper: K,
                                                requester: ep,
                                                resolveTemplateVariables: Z.resolveTemplateVariables || !1
                                            }), l().RQ(i).flatMap(l().uPN).some(l().dei) && ((0, m().eC)(i, {
                                                shouldValidateLatLong: !0
                                            }) || (i = (0, l().x9d)(void 0))), H.properties[e] = i
                                        }
                                        if (!0 !== Z.preserveVerification)
                                            for (let e of [i(435137)._e.Verification, "verifier"]) e in H.properties && (H.properties[e] = []);
                                        "title" in H.properties && (H.properties.title = l().ooo(H.properties.title))
                                    }
                                    if ("transclusion_reference" === H.type && Z.deepCopyTransclusionContainers && H.format && H.format.transclusion_reference_pointer) {
                                        let e = K({
                                            requested: H.format.transclusion_reference_pointer,
                                            requester: ep
                                        });
                                        e && (H.format.transclusion_reference_pointer = e)
                                    }
                                    if ((0, i(955630).$I)(H.type) && Z.shallowCopyNavigableBlock) {
                                        H.type = "text";
                                        let e = l().ld4(Y.id, Y.space_id);
                                        H.properties = {
                                            title: [l().wmz(e)]
                                        }, H.content = []
                                    }
                                    if ("transclusion_container" === H.type && !Z.deepCopyTransclusionContainers) {
                                        H.type = "transclusion_reference", H.content = void 0;
                                        let e = H.format || {};
                                        e.transclusion_reference_pointer = ep, H.format = e
                                    }
                                    if ("alias" === H.type && H.format && H.format.alias_pointer) {
                                        let e = K({
                                            requested: H.format.alias_pointer,
                                            requester: ep
                                        });
                                        e && (H.format.alias_pointer = e)
                                    }
                                    if ("image" === H.type) {
                                        let e = null == (R = H.format) ? void 0 : R.image_hyperlink;
                                        if (H.format && e) {
                                            let [t] = (0, i(132702).Jq)({
                                                url: e,
                                                isMobile: !1,
                                                baseUrl: "",
                                                publicDomainName: "",
                                                protocol: void 0,
                                                currentUrl: void 0,
                                                requestedOnAlternateDomain: (0, i(386883).L)(X.baseUrl)
                                            });
                                            if (t) {
                                                let e = (0, i(253973).D)({
                                                    route: t,
                                                    targetSpaceId: H.space_id,
                                                    mapper: K,
                                                    requester: ep
                                                });
                                                e && (H.format.image_hyperlink = e)
                                            }
                                        }
                                    }
                                    if ((0, i(955630).p7)(H.type) && H.format) {
                                        if (ed) H.format.installation_imprint = {
                                            pointer: ed
                                        };
                                        else if (H.format.installation_imprint) {
                                            let e = K({
                                                requested: H.format.installation_imprint.pointer,
                                                requester: ep
                                            });
                                            e && (H.format.installation_imprint = {
                                                pointer: {
                                                    id: e.id,
                                                    table: i(252822)._i
                                                }
                                            })
                                        }
                                    }
                                    if (H.type === i(955630).xd.externalObjectInstancePage && (H.type = i(955630).xd.externalObjectInstance), H.type === i(955630).xd.externalObjectInstance && (null != (M = H.format) && M.related_external_object_uris_to_instance_ids && (H.format.related_external_object_uris_to_instance_ids = (0, i(722371).MU)((0, i(722371).WP)(H.format.related_external_object_uris_to_instance_ids).map(([e, t]) => {
                                            var i;
                                            return [e, (null == (i = K({
                                                requested: {
                                                    table: r().ev,
                                                    id: t,
                                                    spaceId: H.space_id
                                                },
                                                requester: ep
                                            })) ? void 0 : i.id) || t]
                                        }))), Z.convertExternalObjectInstancesToPlaceholders && !(null != (O = H.format) && O.is_placeholder) && null != (D = H.format) && D.bot_id)) {
                                        let e = {
                                                table: i(890920).GP,
                                                id: H.format.bot_id
                                            },
                                            t = null == ea ? void 0 : ea.getValue(e),
                                            a = null == eo ? void 0 : eo({
                                                pointer: e
                                            }),
                                            r = o().Bj6.isModel(i(890920).GP, a) ? a.getIntegrationId() : void 0,
                                            l = (null == t ? void 0 : t.integration_id) ? ? r;
                                        l && (H.format = {
                                            is_placeholder: !0,
                                            integration_id: l
                                        })
                                    }
                                    if (H.file_ids && (Q = JSON.stringify(H.properties || {}), H.file_ids = null == ($ = H.file_ids) ? void 0 : $.filter(e => {
                                            var t, i, a, o, r, l;
                                            return null != (t = H.format) && !!t.display_source && (null == (i = H.format) || null == (i = i.display_source) ? void 0 : i.indexOf(e)) !== -1 || null != (a = H.format) && !!a.page_cover && (null == (o = H.format) || null == (o = o.page_cover) ? void 0 : o.indexOf(e)) !== -1 || null != (r = H.format) && !!r.page_icon && (null == (l = H.format) || null == (l = l.page_icon) ? void 0 : l.indexOf(e)) !== -1 || -1 !== Q.indexOf(e)
                                        })), H.format && (null != (B = Y.format) && B.original_source || null != (S = Y.format) && S.image_edit_metadata) && (H.format.original_source = void 0, H.format.image_edit_metadata = void 0), null != (V = H.format) && V.automation_id) {
                                        let e = K({
                                            requested: {
                                                table: i(199850).yB,
                                                id: H.format.automation_id,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        });
                                        e && (H.format.automation_id = e.id)
                                    }
                                    if (null != (T = H.format) && T.workflow_id && (H.format.workflow_id = null == (L = K({
                                            requested: {
                                                table: i(43296).C,
                                                id: H.format.workflow_id,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        })) ? void 0 : L.id), H.format && "database_agent_ids" in H.format && H.format.database_agent_ids && (H.format.database_agent_ids = H.format.database_agent_ids.map(e => {
                                            var t;
                                            return null == (t = K({
                                                requested: {
                                                    table: i(43296).C,
                                                    id: e,
                                                    spaceId: H.space_id
                                                },
                                                requester: ep
                                            })) ? void 0 : t.id
                                        }).filter(i(722371).O9)), H.type === i(955630).xd.transcription && H.format) {
                                        H.format.transcription_notes_id && (H.format.transcription_notes_id = null == (A = K({
                                            requested: {
                                                table: r().ev,
                                                id: H.format.transcription_notes_id,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        })) ? void 0 : A.id), H.format.transcription_transcript_id && (H.format.transcription_transcript_id = null == (W = K({
                                            requested: {
                                                table: r().ev,
                                                id: H.format.transcription_transcript_id,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        })) ? void 0 : W.id), H.format.transcription_summary_id && (H.format.transcription_summary_id = null == (F = K({
                                            requested: {
                                                table: r().ev,
                                                id: H.format.transcription_summary_id,
                                                spaceId: H.space_id
                                            },
                                            requester: ep
                                        })) ? void 0 : F.id);
                                        let e = null == (j = H.format.transcription_state) ? void 0 : j.state;
                                        ("transcribing" === e || "summarizing" === e) && (H.format.transcription_state = {
                                            state: "paused"
                                        })
                                    }
                                    if ("collection" === Y.parent_table && Y.type === i(955630).xd.copyIndicator && H.properties && (0, i(722371).objectKeys)(H.properties).length > 0 && (H.type = i(955630).xd.page), Z.preserveSourceMetadataTimestamps || (H.created_time = J ? ? = Date.now(), H.last_edited_time = J), ei && (H.last_edited_by_id = ei.id, H.last_edited_by_table = ei.table, H.created_by_id = ei.id, H.created_by_table = ei.table), void 0 !== H.archived_time && (Z.clearArchivedState ? (H.archived_time = void 0, H.archived_by_id = void 0, H.archived_by_table = void 0) : (H.archived_time = J ? ? = Date.now(), H.archived_by_id = null == ei ? void 0 : ei.id, H.archived_by_table = null == ei ? void 0 : ei.table)), H.non_content_children && (H.non_content_children = H.non_content_children.map(e => {
                                            var t;
                                            return (null == (t = K({
                                                requested: {
                                                    table: r().ev,
                                                    id: e,
                                                    spaceId: H.space_id
                                                },
                                                requester: ep
                                            })) ? void 0 : t.id) || e
                                        })), H.content) {
                                        if (el) {
                                            let e = el.remapDuplicateBlockContent({
                                                originalBlockPointer: ep,
                                                duplicateMapper: K,
                                                originalBlockContent: H.content,
                                                originalCreatedBy: ei || i(268033).TI.pointer,
                                                duplicateBlockId: H.id,
                                                targetSpaceId: H.space_id
                                            });
                                            H.content = e.content, ec.push(...e.additionalRecords)
                                        } else H.content = H.content.map(e => {
                                            var t;
                                            return null == (t = K({
                                                requested: {
                                                    table: r().ev,
                                                    id: e
                                                },
                                                requester: ep,
                                                fromContentArray: !0
                                            })) ? void 0 : t.id
                                        }).filter(i(722371).O9);
                                        if ("415fc269-e68f-4da0-b3e3-b1273b741a7f" === H.space_id && null != (N = H.properties) && N.title) {
                                            let e = (0, l().RQ)(null == (E = H.properties) ? void 0 : E.title);
                                            e && e.length > 0 && e[0].length > 0 && null != (U = e[0][0]) && null != (U = U.trim()) && U.startsWith("🎲") && null != (G = e[0][0]) && null != (G = G.trim()) && G.endsWith("🎲") && (H.content = (0, i(763230).k4)(H.content))
                                        }
                                    }
                                    return {
                                        duplicateRecord: H,
                                        additionalRecords: ec
                                    }
                                }({
                                    originalBlock: d,
                                    duplicateBlock: J,
                                    mapper: n,
                                    options: S ? ? {},
                                    rewiredUriMap: O,
                                    typedCollectionViewBlocks: D,
                                    originOptions: V,
                                    actor: T,
                                    helperRecordMap: x,
                                    getExternalRecordValue: R,
                                    factoryButtonDeprecationContext: L,
                                    legacyTransclusionFixer: j,
                                    installationImprint: A,
                                    shouldExcludeBlocksFromLimit: F
                                });
                                Y.push(...e)
                            } else t === c().V ? function({
                                originalCollection: e,
                                duplicateCollection: t,
                                mapper: a,
                                originOptions: r,
                                rewiredUriMap: l,
                                isTemplateInstantiation: d,
                                options: n,
                                actor: c,
                                sourceSpaceIdCreator: s
                            }) {
                                var _, f, m, v, g, q, B, S;
                                let V = {
                                    table: P().VlP,
                                    id: e.id,
                                    spaceId: e.space_id
                                };
                                if (function(e, t, a) {
                                        var o;
                                        if (!(null != (o = e.format) && o.compound_workflow_template_instances)) return;
                                        let r = {
                                            table: P().VlP,
                                            id: e.id,
                                            spaceId: e.space_id
                                        };
                                        t.format || (t.format = {}), t.format.compound_workflow_template_instances = e.format.compound_workflow_template_instances.map(e => {
                                            let i = [];
                                            for (let o of e.instance_pointers) {
                                                let e = t.space_id;
                                                if ("property" === o.type) {
                                                    i.push(o);
                                                    continue
                                                }
                                                let l = o.type,
                                                    d = a({
                                                        requested: {
                                                            table: l,
                                                            id: o.id,
                                                            spaceId: e
                                                        },
                                                        requester: r
                                                    });
                                                if (!d) return;
                                                if (!(0, p().Yt)(d, l)) throw Error(`Expected mapped duplicate for ${l} ${o.id} to be a ${l}, but it is a ${d.table} (while duplicating ${r.table} ${r.id})`);
                                                i.push({
                                                    type: d.table,
                                                    id: d.id
                                                })
                                            }
                                            return { ...e,
                                                instance_pointers: i
                                            }
                                        }).filter(i(722371).O9)
                                    }(e, t, a), null != (_ = e.format) && _.app_config_uri && (l[e.id] = t.id), t.template_pages && (t.template_pages = t.template_pages.map(e => {
                                        var t;
                                        return (null == (t = a({
                                            requested: {
                                                table: P().evP,
                                                id: e
                                            },
                                            requester: V
                                        })) ? void 0 : t.id) || e
                                    })), (0, i(4962).uj)(e.id)) {
                                    if (t.format || (t.format = {}), t.format.copied_from_pointer = {
                                            table: P().VlP,
                                            id: e.id,
                                            spaceId: e.space_id
                                        }, void 0 !== t.format.collection_default_template && "empty" !== t.format.collection_default_template) {
                                        let e = a({
                                            requested: {
                                                table: P().evP,
                                                id: t.format.collection_default_template.template_page_id
                                            },
                                            requester: V
                                        });
                                        e && null != (q = t.template_pages) && q.includes(e.id) ? t.format.collection_default_template = {
                                            template_page_id: e.id
                                        } : t.format.collection_default_template = "empty"
                                    }
                                    if (t.format.layout_pointer) {
                                        let e = a({
                                            requested: t.format.layout_pointer,
                                            requester: V
                                        });
                                        e && (0, p().Yt)(e, P().zx0) ? t.format.layout_pointer = e : t.format.layout_pointer = void 0
                                    }
                                    t.copied_from = e.id
                                }
                                let T = a({
                                    requested: {
                                        table: t.parent_table,
                                        id: t.parent_id
                                    },
                                    requester: V
                                });
                                T && (t.parent_id = T.id);
                                let x = o().b4_.constant(void 0),
                                    R = o().Bj6.fromCollection(t).getNormalizedSchema(x);
                                for (let i in R) {
                                    let o = R[i];
                                    if (o && "relation" === o.type && (0, I().N)(o)) {
                                        let e = (0, I().N)(o),
                                            t = a({
                                                requested: e,
                                                requester: V
                                            });
                                        if (t) {
                                            if (o.collection_id = t.id, o.collection_pointer = {
                                                    id: t.id,
                                                    table: P().VlP,
                                                    spaceId: (0, u().e)(t.spaceId)
                                                }, o.property && s) {
                                                let t = (0, w().FS)({
                                                    spaceIdCreator: s
                                                });
                                                e.id === t && (o.property = void 0)
                                            }
                                        } else o.property && (o.property = void 0)
                                    }
                                    if (o && "title" === o.type && t.name && (t.name = (0, b().R)({ ...r,
                                            text: {
                                                value: t.name,
                                                spaceId: t.space_id
                                            },
                                            mapper: a,
                                            requester: V,
                                            resolveTemplateVariables: !1
                                        })), o && "button" === o.type && o.automation_id && (o.automation_id = (null == (B = a({
                                            requested: {
                                                id: o.automation_id,
                                                spaceId: e.space_id,
                                                table: P().yBS
                                            },
                                            requester: V
                                        })) ? void 0 : B.id) ? ? o.automation_id), o && o.default_workflow_id) {
                                        let i = a({
                                            requested: {
                                                id: o.default_workflow_id,
                                                spaceId: e.space_id,
                                                table: P().C0E
                                            },
                                            requester: V
                                        });
                                        i ? o.default_workflow_id = i.id : e.space_id !== t.space_id && (o.default_workflow_id = void 0)
                                    }
                                    o && k().DQ(o) && o.options && (o.options = (0, h().ki)(o.options))
                                }
                                if (t.description && (t.description = (0, b().R)({ ...r,
                                        text: {
                                            value: t.description,
                                            spaceId: t.space_id
                                        },
                                        mapper: a,
                                        requester: V,
                                        resolveTemplateVariables: !1
                                    })), !n.preserveSourceMetadataTimestamps) {
                                    let e = Date.now();
                                    t.created_time = e, t.last_edited_time = e
                                }
                                for (let e in c && (t.last_edited_by_id = c.id, t.last_edited_by_table = c.table, t.created_by_id = c.id, t.created_by_table = c.table), null != (f = t.format) && f.metadata_copied_from && (t.format.metadata_copied_from = void 0), R) {
                                    let i = R[e];
                                    if (!i || "formula" !== i.type || !(0, y().F)(i) || !i.formula2) continue;
                                    let {
                                        value: o
                                    } = (0, C().RI)({
                                        baseUrl: r.baseUrl,
                                        formula: i.formula2.code,
                                        publicDomainName: r.publicDomainName,
                                        spaceId: t.space_id,
                                        visitors: {
                                            visitFormulaContextValue: void 0,
                                            visitFormulaPageProperty: e => {
                                                if ("collection" in e && e.collection) {
                                                    let t = a({
                                                        requested: e.collection,
                                                        requester: V
                                                    });
                                                    if (t && t.table === P().VlP) return {
                                                        type: "replace",
                                                        value: { ...e,
                                                            collection: t
                                                        }
                                                    }
                                                }
                                                return {
                                                    type: "keep"
                                                }
                                            },
                                            visitRecordPointer: void 0
                                        }
                                    });
                                    i.formula2.code = o
                                }
                                if (null != (m = t.format) && m.collection_mode && "page_tree" === t.format.collection_mode.type) {
                                    let e = t.format.collection_mode.root_page_pointer,
                                        i = (null == (S = a({
                                            requested: p().L3.fromPointerLike({
                                                table: "block",
                                                id: e.id,
                                                spaceId: t.space_id
                                            }),
                                            requester: V
                                        })) ? void 0 : S.id) || e.id;
                                    t.format.collection_mode = {
                                        type: "page_tree",
                                        root_page_pointer: {
                                            id: i,
                                            table: "block",
                                            spaceId: t.space_id
                                        }
                                    }
                                }
                                null != (v = t.format) && v.related_external_object_uris_to_instance_ids && (t.format.related_external_object_uris_to_instance_ids = (0, i(722371).MU)((0, i(722371).WP)(t.format.related_external_object_uris_to_instance_ids).map(([e, i]) => {
                                    var o;
                                    return [e, (null == (o = a({
                                        requested: {
                                            table: P().VlP,
                                            id: i,
                                            spaceId: t.space_id
                                        },
                                        requester: V
                                    })) ? void 0 : o.id) || i]
                                }))), delete t.deleted_schema, null != (g = t.format) && g.automation_ids && (t.format.automation_ids = t.format.automation_ids.map(e => {
                                    var i;
                                    return null == (i = a({
                                        requested: {
                                            id: e,
                                            table: P().yBS,
                                            spaceId: t.space_id
                                        },
                                        requester: V
                                    })) ? void 0 : i.id
                                }).filter(i(722371).O9)), e.permissions && (t.permissions = function(e, t, a) {
                                    return e.filter(e => !!(0, i(642157).tb)(e) && (t || a))
                                }(e.permissions, d, n.duplicateOnlyCollectionSchema))
                            }({
                                originalCollection: d,
                                duplicateCollection: J,
                                mapper: n,
                                originOptions: V,
                                rewiredUriMap: O,
                                isTemplateInstantiation: W,
                                options: S ? ? {},
                                actor: T,
                                sourceSpaceIdCreator: $
                            }) : t === i(435544).G ? function(e) {
                                var t, a, l, d, n, s, u, _, f, m, v, b, y, I, k;
                                let {
                                    originalCollectionView: h,
                                    duplicateCollectionView: C,
                                    mapper: w,
                                    rewiredUriMap: P,
                                    helperRecordMap: B,
                                    isTemplateInstantiation: S,
                                    targetBlockIds: V,
                                    getExternalRecordValue: T,
                                    actor: x
                                } = e, R = {
                                    table: i(435544).G,
                                    id: h.id,
                                    spaceId: h.space_id
                                };
                                if (null != (t = h.format) && t.app_config_uri && null != (a = C.format) && a.app_config_uri && ((0, i(565546).Sn)(h.format.app_config_uri) ? C.format.app_config_uri = void 0 : P[h.id] = C.id), null != (l = h.format) && l.app_uri_map && null != (d = C.format) && d.app_uri_map)
                                    for (let [e, t] of Object.entries(h.format.app_uri_map)) {
                                        let i = w({
                                            requested: {
                                                id: t,
                                                table: r().ev,
                                                spaceId: h.space_id
                                            },
                                            requester: R
                                        });
                                        i && (C.format.app_uri_map[e] = i.id ? ? t, i.id && (P[i.id] = C.id))
                                    }
                                let M = null == (n = C.format) ? void 0 : n.collection_pointer;
                                if (M)
                                    if ("dashboard" === C.type) C.format = { ...C.format,
                                        collection_pointer: void 0
                                    };
                                    else {
                                        let e = null == B ? void 0 : B.getModel(M),
                                            t = null == T ? void 0 : T({
                                                pointer: M
                                            }),
                                            i = o().Bj6.isModel(c().V, t) ? t.getFormat().bot_id : void 0;
                                        if (!((null == e ? void 0 : e.isSyncedCollection()) || i)) {
                                            let e = g({
                                                originalSpaceId: h.space_id,
                                                duplicateSpaceId: C.space_id,
                                                requester: R,
                                                collectionPointer: M,
                                                mapper: w
                                            });
                                            C.format = { ...C.format,
                                                collection_pointer: e
                                            }
                                        }
                                    }
                                if (C.format) {
                                    let e = null == (b = C.format.collection_groups) ? void 0 : b.map(e => {
                                        if ("relation" === e.value.type && (0, i(910675).WO)(e.value.value) && e.value.value) {
                                            let t = w({
                                                requested: e.value.value,
                                                requester: R
                                            });
                                            return { ...e,
                                                value: {
                                                    type: "relation",
                                                    value: t && (0, p().Yt)(t, r().ev) ? t : e.value.value
                                                }
                                            }
                                        }
                                        return e
                                    });
                                    C.format.collection_groups = e;
                                    let t = null == (y = C.format.board_columns) ? void 0 : y.map(e => {
                                        if ("relation" === e.value.type && (0, i(910675).WO)(e.value.value) && e.value.value) {
                                            let t = w({
                                                requested: e.value.value,
                                                requester: R
                                            });
                                            return { ...e,
                                                value: {
                                                    type: "relation",
                                                    value: t && (0, p().Yt)(t, r().ev) ? t : e.value.value
                                                }
                                            }
                                        }
                                        return e
                                    });
                                    C.format.board_columns = t;
                                    let a = C.format.collection_view_default_template;
                                    if (void 0 !== a && "empty" !== a) {
                                        let e = w({
                                            requested: {
                                                table: r().ev,
                                                id: a.template_page_id
                                            },
                                            requester: R
                                        });
                                        e && !(S && (V ? null == V ? void 0 : V.includes(e.id) : e)) && (C.format.collection_view_default_template = {
                                            template_page_id: e.id
                                        })
                                    }
                                }
                                let O = w({
                                    requested: {
                                        table: C.parent_table,
                                        id: C.parent_id,
                                        spaceId: C.space_id
                                    },
                                    requester: R
                                });
                                if (O && (C.parent_id = O.id), C.page_sort && (C.page_sort = C.page_sort.map(e => {
                                        var t;
                                        return (null == (t = w({
                                            requested: {
                                                table: r().ev,
                                                id: e,
                                                spaceId: C.space_id
                                            },
                                            requester: R
                                        })) ? void 0 : t.id) || e
                                    })), "page" === C.type && null != (s = C.format) && s.page_pointer) {
                                    let e = C.format.page_pointer,
                                        t = (null == (I = w({
                                            requested: p().L3.fromPointerLike({
                                                table: "block",
                                                id: e.id,
                                                spaceId: C.space_id
                                            }),
                                            requester: R
                                        })) ? void 0 : I.id) || e.id;
                                    C.format.page_pointer = {
                                        table: "block",
                                        id: t,
                                        spaceId: C.space_id
                                    }
                                }
                                if (null != (u = C.format) && u.property_filters)
                                    for (let e of C.format.property_filters) e.filter && (0, q().w)(e.filter, e => {
                                        var t;
                                        return null == (t = w({
                                            requested: e,
                                            requester: R
                                        })) ? void 0 : t.id
                                    });
                                if (null != (_ = C.format) && _.filters2)
                                    for (let e of C.format.filters2) e.filter && (0, q().w)(e.filter, e => {
                                        var t;
                                        return null == (t = w({
                                            requested: e,
                                            requester: R
                                        })) ? void 0 : t.id
                                    });
                                let D = C.query2;
                                if (D && D.filter && (0, q().w)(D.filter, e => {
                                        var t;
                                        return null == (t = w({
                                            requested: e,
                                            requester: R
                                        })) ? void 0 : t.id
                                    }), null != (f = C.format) && f.dashboard_global_filters)
                                    for (let e of C.format.dashboard_global_filters) e.filter && (0, q().w)(e.filter, e => {
                                        var t;
                                        return null == (t = w({
                                            requested: e,
                                            requester: R
                                        })) ? void 0 : t.id
                                    });
                                if (null != (m = C.format) && m.form_block_pointer) {
                                    let e = w({
                                        requested: null == (k = C.format) ? void 0 : k.form_block_pointer,
                                        requester: R
                                    });
                                    e && "block" === e.table && (C.format.form_block_pointer = e)
                                }
                                if (null != (v = C.format) && v.dashboard_layout_pointer) {
                                    let e = w({
                                        requested: C.format.dashboard_layout_pointer,
                                        requester: R
                                    });
                                    e && "layout" === e.table && (C.format.dashboard_layout_pointer = e)
                                }
                                let L = Date.now();
                                C.created_time = L, C.last_edited_time = L, x && (C.created_by_id = x.id, C.created_by_table = x.table, C.last_edited_by_id = x.id, C.last_edited_by_table = x.table)
                            }({
                                originalCollectionView: d,
                                duplicateCollectionView: J,
                                mapper: n,
                                actor: T,
                                rewiredUriMap: O,
                                helperRecordMap: x,
                                isTemplateInstantiation: W,
                                targetBlockIds: N,
                                getExternalRecordValue: R
                            }) : t === i(199850).yB ? (0, i(191731).i)({
                                originalRecord: d,
                                duplicateRecord: J,
                                mapper: n,
                                options: S ? ? {},
                                actor: T
                            }) : t === i(901144).SC ? (0, i(333132).I)({
                                originalRecord: d,
                                duplicateRecord: J,
                                mapper: n,
                                getRecordRole: M,
                                options: S ? ? {},
                                originOptions: V,
                                getCanCreatePagesInCollection: G,
                                getExternalRecordValue: R,
                                experimentService: z
                            }) : t === i(43296).C ? function(e) {
                                var t, a, o;
                                let {
                                    original: l,
                                    duplicate: d,
                                    mapper: n,
                                    actor: p,
                                    logWarning: c
                                } = e, s = {
                                    table: i(43296).C,
                                    id: l.id,
                                    spaceId: l.space_id
                                }, u = n({
                                    requested: {
                                        table: r().ev,
                                        id: l.parent_id,
                                        spaceId: l.space_id
                                    },
                                    requester: s
                                });
                                u && (d.parent_id = u.id), d.space_id = (null == u ? void 0 : u.spaceId) ? ? l.space_id;
                                let _ = Date.now();
                                if (d.created_time = _, d.last_edited_time = _, p && (d.created_by_id = p.id, d.created_by_table = p.table, d.last_edited_by_id = p.id, d.last_edited_by_table = p.table), !d.data) return;
                                for (let e of (d.data.runtime_actor_pointer = void 0, d.data.draft_runtime_actor_pointer = void 0, d.data.published_artifact_pointer = void 0, d.data.usage_limit = void 0, d.data.usage_limit_by_workspace_admin = void 0, d.data.status = "runnable", d.data.runaway_pause_acknowledged_at = void 0, d.data.paused_reason = void 0, (null == (a = d.data) ? void 0 : a.modules) ? ? [])) {
                                    if (e.state) {
                                        let t = (0, B().jK)(e.type);
                                        null != t && t.stateDuplicator && (e.state = t.stateDuplicator({
                                            original: e.state,
                                            mapper: n,
                                            requester: s
                                        }))
                                    }
                                    if ("calendar" === e.type && (e.permissions = void 0, e.state = void 0), "notion" === e.type && e.permissions) {
                                        for (let t of e.permissions)
                                            if ("notion" === t.type && "pageOrCollectionViewBlock" === t.identifier.type) {
                                                let e = n({
                                                    requested: {
                                                        table: r().ev,
                                                        id: t.identifier.blockId,
                                                        spaceId: l.space_id
                                                    },
                                                    requester: s
                                                });
                                                e && (t.identifier.blockId = e.id)
                                            }
                                    }
                                }
                                let f = null == (t = (d.data.modules ? ? []).find(e => "notion" === e.type)) ? void 0 : t.id;
                                if (f)
                                    for (let e of d.data.triggers ? ? []) void 0 === e.moduleId && null != (o = e.state) && o.type.startsWith("notion.") && (e.moduleId = f);
                                let m = [];
                                for (let e of d.data.triggers ? ? []) {
                                    if (!e.state) {
                                        null == c || c({
                                            type: "skippedInvalidWorkflowTrigger",
                                            triggerId: e.id,
                                            reason: "missingTriggerState"
                                        });
                                        continue
                                    }
                                    let t = (d.data.modules ? ? []).find(t => t.id === e.moduleId);
                                    if (!t) {
                                        null == c || c({
                                            type: "skippedInvalidWorkflowTrigger",
                                            triggerId: e.id,
                                            reason: "moduleNotFound"
                                        });
                                        continue
                                    }
                                    if (!(0, B().jK)(t.type)) {
                                        null == c || c({
                                            type: "skippedInvalidWorkflowTrigger",
                                            triggerId: e.id,
                                            reason: "moduleDefinitionNotFound"
                                        });
                                        continue
                                    }
                                    let i = (0, B().C7)(t.type, e.state.type);
                                    if (!i) {
                                        null == c || c({
                                            type: "skippedInvalidWorkflowTrigger",
                                            triggerId: e.id,
                                            reason: "triggerDefinitionNotFound"
                                        });
                                        continue
                                    }
                                    e.state = i.triggerDuplicator({
                                        original: e.state,
                                        mapper: n,
                                        requester: s
                                    }), m.push(e)
                                }
                                d.data.triggers = m
                            }({
                                original: d,
                                duplicate: J,
                                mapper: n,
                                actor: T,
                                logWarning: U
                            }) : t === s().zx ? function({
                                original: e,
                                duplicate: t,
                                mapper: a,
                                actor: o,
                                layoutCollectionViewBlocksToRemove: l
                            }) {
                                var d, n;
                                let c = {
                                    table: s().zx,
                                    id: e.id,
                                    spaceId: e.space_id
                                };
                                t.parent_id = f({
                                    mapper: a,
                                    requested: p().L3.fromPointerLike({
                                        table: t.parent_table,
                                        id: t.parent_id,
                                        spaceId: t.space_id
                                    }),
                                    requester: c
                                }).id, t.format || (t.format = {}), t.format.copied_from_pointer = {
                                    table: s().zx,
                                    id: e.id,
                                    spaceId: e.space_id
                                }, t.modules = (0, i(977862).Pe)(t.modules);
                                let u = e => ({ ...e,
                                        collection_view_id: _({
                                            table: i(435544).G,
                                            mapper: a,
                                            requested: {
                                                table: i(435544).G,
                                                id: e.collection_view_id,
                                                spaceId: t.space_id
                                            },
                                            requester: c
                                        }).id
                                    }),
                                    m = (0, i(322268).E)(t.modules, e => {
                                        if ("views" === e.type || "viewsMain" === e.type) return {
                                            type: e.type,
                                            id: e.id,
                                            collection_view_block_pointer: { ..._({
                                                    table: r().ev,
                                                    mapper: a,
                                                    requested: p().L3.fromPointerLike(e.collection_view_block_pointer),
                                                    requester: c
                                                }),
                                                spaceId: t.space_id
                                            }
                                        };
                                        if ("formQuestion" === e.type) return {
                                            type: "formQuestion",
                                            id: e.id,
                                            formQuestionId: ({ ..._({
                                                    table: i(15883).l,
                                                    mapper: a,
                                                    requested: p().L3.fromPointerLike({
                                                        table: i(15883).l,
                                                        id: e.formQuestionId,
                                                        spaceId: t.space_id
                                                    }),
                                                    requester: c
                                                }),
                                                spaceId: t.space_id
                                            }).id,
                                            parentModuleId: e.parentModuleId,
                                            parentConditionalGroupId: e.parentConditionalGroupId,
                                            conditionalGroups: e.conditionalGroups
                                        };
                                        if ("placeholder" === e.type) return {
                                            type: "placeholder",
                                            id: e.id,
                                            parentModuleId: e.parentModuleId,
                                            parentConditionalGroupId: e.parentConditionalGroupId
                                        };
                                        if ("view" === e.type) return u(e);
                                        if ("row" === e.type) return {
                                            type: "row",
                                            id: e.id,
                                            modules: e.modules.map(u)
                                        };
                                        else return e.type, e
                                    }),
                                    v = Object.fromEntries(Object.entries(m.form_conditional_modules ? ? {}).filter(e => {
                                        let [t, i] = e;
                                        return "formQuestion" === i.type || "placeholder" === i.type
                                    }));
                                t.modules = { ...m,
                                    form_conditional_modules: v
                                }, null != (d = t.format) && d.previousViewsMainCollectionViewBlockPointer && null != l && l.has(t.format.previousViewsMainCollectionViewBlockPointer.id) && delete t.format.previousViewsMainCollectionViewBlockPointer;
                                let b = null == (n = e.blocks) ? void 0 : n.filter(e => !(null != l && l.has(e)));
                                b && (t.blocks = b.map(e => f({
                                    mapper: a,
                                    requested: {
                                        table: r().ev,
                                        id: e,
                                        spaceId: t.space_id
                                    },
                                    requester: c
                                }).id));
                                let g = Date.now();
                                t.created_time = g, t.last_edited_time = g, o && (t.created_by_id = o.id, t.created_by_table = o.table, t.last_edited_by_id = o.id, t.last_edited_by_table = o.table)
                            }({
                                original: d,
                                duplicate: J,
                                mapper: n,
                                actor: T,
                                layoutCollectionViewBlocksToRemove: E
                            }) : t === i(15883).l ? function(e) {
                                let {
                                    original: t,
                                    duplicate: a,
                                    mapper: o
                                } = e, r = {
                                    table: i(15883).l,
                                    id: t.id,
                                    spaceId: t.space_id
                                }, l = o({
                                    requested: p().L3.fromPointerLike({
                                        table: a.parent_table,
                                        id: a.parent_id,
                                        spaceId: a.space_id
                                    }),
                                    requester: r
                                });
                                l && (a.parent_id = l.id)
                            }({
                                original: d,
                                duplicate: J,
                                mapper: n,
                                originOptions: V
                            }) : (0, i(722371).HB)(t);
                            return {
                                duplicateRecord: J,
                                additionalRecords: Y
                            }
                        }({
                            table: d.table,
                            record: d.__IM_SORRY__getValue(),
                            mapper: X,
                            options: V,
                            rewiredUriMap: ee,
                            typedCollectionViewBlocks: et,
                            originOptions: {
                                baseUrl: L,
                                publicDomainName: j
                            },
                            actor: A,
                            getRecordRole: W,
                            factoryButtonDeprecationContext: eo,
                            legacyTransclusionFixer: t,
                            installationImprint: $,
                            layoutCollectionViewBlocksToRemove: ei,
                            logWarning: U,
                            getCanCreatePagesInCollection: J,
                            sourceSpaceIdCreator: Q
                        });
                        void 0 !== T && (d.table === r().ev && T.id === M.id && (delete T.parent_id, delete T.parent_table, delete T.alive), z && d.table === r().ev && d.autoGenerateOnTemplateDuplication() && Y.push({
                            table: r().ev,
                            id: T.id,
                            spaceId: T.space_id
                        }), function(e) {
                            let {
                                duplicateRecordResult: t,
                                duplicateRecordMap: i
                            } = e, {
                                additionalRecords: a,
                                duplicateRecord: o,
                                duplicateRecordTable: r
                            } = t;
                            for (let e of (i.setValue(p().L3.fromPointerLike({
                                    table: r,
                                    id: o.id,
                                    spaceId: o.space_id
                                }), o), a)) i.setValue(p().L3.fromPointerLike({
                                id: e.value.id,
                                table: e.table,
                                spaceId: e.value.space_id
                            }), e.value)
                        }({
                            duplicateRecordMap: Z,
                            duplicateRecordResult: {
                                duplicateRecord: T,
                                additionalRecords: x,
                                duplicateRecordTable: d.table
                            }
                        }))
                    }
                    return function(e) {
                        let {
                            rewiredUriMap: t,
                            typedCollectionViewBlocks: o,
                            duplicateRecordMap: r
                        } = e;
                        if (i(381453).Im(t) || 0 === o.length) return;
                        let l = i(381453).oE(o.map(e => r.getValue(e)));
                        l.forEach(e => {
                            var i;
                            let a = null == e || null == (i = e.format) ? void 0 : i.app_uri_map;
                            a && Object.entries(a).forEach(([e, i]) => {
                                a[e] = t[i]
                            })
                        }), Object.entries(l.reduce((e, t) => {
                            var i;
                            let a = null == t || null == (i = t.format) ? void 0 : i.app_id;
                            return a && (e[a] = e[a] ? [...e[a], t] : [t]), e
                        }, {})).forEach(([e, t]) => {
                            let i = a().JW();
                            t.forEach(e => {
                                var t;
                                null != e && null != (t = e.format) && t.app_id && (e.format.app_id = i)
                            })
                        })
                    }({
                        rewiredUriMap: ee,
                        typedCollectionViewBlocks: et,
                        duplicateRecordMap: Z
                    }), {
                        duplicateRecordMap: function(e, t, a, l) {
                            if (0 === e.size) return t;
                            let d = new Set;
                            for (let t of e) {
                                let e = a({
                                    requested: {
                                        id: t,
                                        table: r().ev
                                    },
                                    requester: l
                                });
                                d.add((null == e ? void 0 : e.id) || t)
                            }
                            let n = t.clone(),
                                p = o().b4_.fromRecordMap(n),
                                c = [];
                            for (let {
                                    pointer: e,
                                    model: t
                                } of n)(!t || (0, i(688502).Yn)(t.pointer, p).some((e, t) => d.has(e.id))) && c.push(e);
                            return c.forEach(e => n.delete(e)), n
                        }(ei, Z, X, K),
                        originalToDuplicate: H,
                        aiBlocksToAutoGenerate: Y
                    }
                }({
                    sourceBlockId: T,
                    targetBlockPointer: L,
                    recordMap: M,
                    recordPointerMap: N,
                    options: {
                        deepCopyTransclusionContainers: W,
                        resolveTemplateVariables: !!F && {
                            currentUserId: K,
                            currentTimeZone: (0, i(714350).P)()
                        }
                    },
                    baseUrl: i(986939).A.domainBaseUrl,
                    publicDomainName: i(986939).A.publicDomainName,
                    actor: K ? {
                        table: P().oo9,
                        id: K
                    } : void 0,
                    getRecordRole: j.makeGetRecordRoleFn(K),
                    preventLegacyTransclusions: E,
                    createLegacyTransclusionCopyIndicator: U,
                    installationImprint: z,
                    logWarning: D,
                    spaceIdCreator: G,
                    sourceSpaceIdCreator: $,
                    isTemplateInstantiation: !!Q,
                    getCanCreatePagesInCollection: e => {
                        let a = e.spaceId ? ? L.spaceId;
                        return !!a && (i(352441).Q.getData(t, {
                            collectionId: e.id,
                            spaceId: a
                        }) ? ? !1)
                    }
                }), ei = new(i(970831)).B(t, L, {
                    inMemoryRecordCache: j
                });
                A.postPerformAssertions.push(function() {
                    if (!A.isLocal && !ei.getParentStore()) throw new(i(101787)).yI4(`Initialized template was not given a parent before being committed in transaction ${A.getUserActionForAnalyticsPurposesOnly()}`)
                });
                let ea = H ? ? (Y ? "append_only" : void 0);
                for (let {
                        model: e
                    } of X) e && function(e) {
                    let {
                        transaction: t,
                        model: a,
                        rootStore: o,
                        targetBlockPointer: r,
                        currentUserId: l,
                        targetRecordCache: d,
                        isTemplateInstantiation: n,
                        shouldExcludeBlocksFromLimit: p,
                        sourceBlockUpdateStrategy: c
                    } = e;
                    if (a.table === P().evP) return function(e) {
                        var t;
                        let {
                            transaction: a,
                            model: o,
                            rootStore: r,
                            targetBlockPointer: l,
                            currentUserId: d,
                            targetRecordCache: n,
                            isTemplateInstantiation: p,
                            shouldExcludeBlocksFromLimit: c,
                            sourceBlockUpdateStrategy: s
                        } = e, u = o.__IM_SORRY__getValue(), _ = i(970831).B.createChildStore(r, o.pointer);
                        o.id === l.id && p && u.is_template && (u.is_template = !1, u.format && delete u.format.automation_id), c && v(u) && (u.ignore_block_count = !0);
                        let f = o.pointer.table === l.table && o.pointer.id === l.id ? null == (t = n.getRecord({
                            pointer: o.pointer,
                            userId: d
                        })) ? void 0 : t.value : void 0;
                        if (f && (delete u.created_by_id, delete u.created_by_table, delete u.created_time), f && "append_only" === s && o.id === r.id) {
                            let e = r.getContentIds() ? ? [],
                                t = o.getContentIds() ? ? [];
                            (0, R().y4)({
                                store: _,
                                operation: i(488307).op.update({
                                    args: {
                                        content: [...e, ...t]
                                    },
                                    pointer: o.pointer,
                                    path: []
                                }),
                                transaction: a
                            });
                            return
                        }
                        f && "merge" === s && o.id === r.id && (u.properties = (0, i(668508).g2)({
                            source: u.properties,
                            target: f.properties
                        }), u.format = (0, i(668508).aG)({
                            source: u.format,
                            target: f.format
                        }), u.file_ids = (0, i(668508).TH)({
                            source: u.file_ids,
                            target: f.file_ids
                        }));
                        let m = (null == f ? void 0 : f.format) ? ? {},
                            b = u.format ? ? {},
                            g = i(488307).op.update({
                                pointer: o.pointer,
                                path: ["format"],
                                args: (0, i(722371).objectKeys)(m).reduce((e, t) => t in b && void 0 !== b[t] ? e : { ...e,
                                    [t]: null
                                }, {})
                            }),
                            y = f ? [g] : [];
                        for (let e of i(877308).rF({
                                block: u,
                                existingBlock: f
                            }).concat(y))(0, V().ph)(e) ? (0, x().k)({
                            store: _,
                            operation: e,
                            invertedOperation: void 0,
                            transaction: a
                        }) : (0, R().y4)({
                            store: _,
                            operation: e,
                            transaction: a
                        })
                    }({
                        transaction: t,
                        model: a,
                        rootStore: o,
                        targetBlockPointer: r,
                        currentUserId: l,
                        targetRecordCache: d,
                        isTemplateInstantiation: n,
                        shouldExcludeBlocksFromLimit: p,
                        sourceBlockUpdateStrategy: c
                    });
                    if (n) {
                        var s;
                        if (a.table === P().yBS && a.parent_id === r.id || a.table === P().SC1 && a.isType("create_page") && (null == (s = a.getConfig()) ? void 0 : s.template_page_id) === r.id) return
                    }
                    let u = (0, i(517013).v3)(o, a.pointer),
                        _ = a.__IM_SORRY__getValue();
                    (0, i(368198).K)({
                        store: u,
                        value: _,
                        transaction: t
                    })
                }({
                    transaction: A,
                    model: e,
                    rootStore: ei,
                    currentUserId: K,
                    targetBlockPointer: L,
                    targetRecordCache: j,
                    isTemplateInstantiation: Q,
                    shouldExcludeBlocksFromLimit: Z,
                    sourceBlockUpdateStrategy: ea
                });
                return et.length > 0 && A.postSubmitCallbacks.push(async () => {
                    await O({
                        environment: t,
                        aiBlockPointers: et,
                        parentPageId: ei.id
                    })
                }), {
                    targetBlockStore: ei,
                    originalToDuplicate: ee,
                    subtreeSize: X.getSize()
                }
            }
            async function O(e) {
                let {
                    environment: t,
                    aiBlockPointers: a,
                    parentPageId: o
                } = e, r = (0, i(477465).Dv)("generateAiBlockTask");
                for (let e of a)
                    for await (let i of (0, T().UT)({
                        environment: t,
                        eventName: r,
                        request: {
                            blockId: e.id,
                            spaceId: e.spaceId,
                            parentPageId: o
                        },
                        multiCellRouting: {
                            spaceIds: []
                        }
                    }));
            }

            function D(e) {
                "unmappedContentId" === e.type || ("multiReferencedContentIds" === e.type ? i(773352).log({
                    level: "warning",
                    from: "createBlockActions",
                    type: "multiReferencedContentIds",
                    data: {
                        ids: e.contentIds
                    }
                }) : "skippedInvalidWorkflowTrigger" === e.type ? i(773352).log({
                    level: "warning",
                    from: "createBlockActions",
                    type: "skippedInvalidWorkflowTrigger",
                    data: {
                        triggerId: e.triggerId,
                        duplicateSkipReason: e.reason
                    }
                }) : (0, i(722371).HB)(e))
            }
        }
    }
]);