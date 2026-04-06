"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [33162], {
        179595: (e, t, i) => {
            i.d(t, {
                d: () => m,
                o: () => f
            }), i(944114);
            var a = () => i(300441),
                o = () => i(722371),
                r = () => i(976298),
                n = () => i(226989),
                l = () => i(297493),
                s = () => i(591864),
                u = () => i(600005),
                c = () => i(252092),
                d = () => i(773329),
                p = () => i(167869);

            function f(e) {
                let t, {
                    collectionPointer: i,
                    collectionSchema: a,
                    config: u,
                    context: p,
                    actionType: f
                } = e;
                if (!a) return {
                    validationFailures: [],
                    validationWarnings: []
                };
                let m = [],
                    v = [];
                for (let e of u.properties || []) {
                    var y;
                    let g = {
                            formulasModule: p.formulasModule,
                            handleDataRequest: (0, l().zg)(p.getRecordModel),
                            restrictUnaccessibleProperties: "cross_space_and_read_permissions",
                            spaceId: p.automationModel.spaceId,
                            valueTypes: p.valueTypes.slice(0),
                            featureGates: (0, c().f)({
                                checkExperimentGateFn: p.checkExperimentGate
                            }),
                            guaranteedPropertyIds: p.guaranteedPropertyIds,
                            enableExistenceGuarantees: p.enableExistenceGuarantees
                        },
                        _ = null == (y = u.values) ? void 0 : y[e],
                        h = null == a ? void 0 : a[e];
                    if ((null == h ? void 0 : h.type) === "relation" && (0, n().o)(p.automationModel.spaceId, h) && m.push({
                            actionType: f,
                            key: e,
                            type: "cross_space_relation"
                        }), !h || !(0, r().I3)(h) || !(null != _ && _.value)) continue;
                    let {
                        result: b,
                        hasCrossSpaceError: x,
                        stats: k
                    } = (0, s().typecheckSimpleFormulaOrFormula)({
                        context: { ...g,
                            allowedReturnTypes: r().Yy[h.type]
                        },
                        value: _.value,
                        collectionPointer: i
                    });
                    x && m.push({
                        actionType: f,
                        key: e,
                        type: "invalid_formula_cross_space"
                    }), t = (0, d().AP)(t, k), (0, o().O9)(b.parseErrors) && b.parseErrors.length > 0 && m.push({
                        actionType: f,
                        key: e,
                        type: "invalid_formula_parse_error"
                    }), (0, o().O9)(b.typeErrors) && b.typeErrors.length > 0 && m.push({
                        actionType: f,
                        key: e,
                        type: "invalid_formula_type_error",
                        typeErrors: p.formulasModule.cleanFormulaTypecheckerErrors(b.typeErrors),
                        shouldNotifyOnFailure: !0
                    }), (0, o().O9)(b.typeWarnings) && b.typeWarnings.length > 0 && v.push({
                        actionType: f,
                        key: e,
                        type: "invalid_formula_type_warning",
                        typeErrors: p.formulasModule.cleanFormulaTypecheckerErrors(b.typeWarnings)
                    }), (0, o().O9)(b.type) || m.push({
                        actionType: f,
                        key: e,
                        type: "invalid_formula_missing_return_type"
                    })
                }
                return {
                    validationFailures: m,
                    validationWarnings: v,
                    formulaStats: t
                }
            }
            async function m(e) {
                let t, {
                        config: i,
                        page: o,
                        collectionPointer: n,
                        collectionSchema: c,
                        actionId: f,
                        context: m,
                        getCurrentPropertyValue: v
                    } = e,
                    {
                        simpleFormulasModule: y
                    } = m,
                    g = [];
                for (let e of i.properties || []) {
                    var _;
                    let h = null == (_ = i.values) ? void 0 : _[e],
                        b = null == c ? void 0 : c[e];
                    if (!b || !(0, r().I3)(b)) continue;
                    let x = (0, s().setPropertyValueToFormulaReturnType)(n, e, b);
                    if (!x) return {
                        error: new(u()).Dr({
                            actionId: f,
                            property: e,
                            collectionPointer: n
                        })
                    };
                    let k = r().Yy[b.type],
                        {
                            result: I,
                            stats: T
                        } = await y.executeSimpleFormulaAsyncWithStats({
                            value: (null == h ? void 0 : h.value) || {
                                type: "simple",
                                value: void 0
                            },
                            context: { ...m,
                                allowedValueTypes: k,
                                returnType: x
                            },
                            executeFormula: m.executeContextualFormula
                        });
                    if (t = (0, d().AP)(t, T), a().Q.isFail(I)) return {
                        error: new(u()).F_({
                            actionId: f,
                            cause: (0, r().kH)(I.error),
                            stats: t
                        })
                    };
                    let F = (0, l().rk)({
                        result: I.value,
                        page: o,
                        action: (0, p().tz)(h),
                        currentPropertyValue: null == v ? void 0 : v(e),
                        propertyId: e,
                        propertySchema: b
                    });
                    F && g.push(...F)
                }
                return {
                    value: {
                        values: g,
                        stats: {
                            formulaStats: t
                        }
                    }
                }
            }
        },
        252092: (e, t, i) => {
            i.d(t, {
                f: () => a
            });

            function a(e) {
                let {
                    checkExperimentGateFn: t
                } = e, i = {
                    formula_null_check: t("formula_null_check"),
                    formula_dependency_limits: t("formula_dependency_limits"),
                    collections_text_sort_locale_collator: t("collections_text_sort_locale_collator"),
                    edge_relations: t("edge_relations"),
                    edge_rollups: t("edge_rollups"),
                    edge_formulas: t("edge_formulas"),
                    formulas_pass_timezone_when_parsing_date: t("formulas_pass_timezone_when_parsing_date"),
                    formulas_block_unsafe_regex: t("formulas_block_unsafe_regex"),
                    rollup_empty_value_filter: t("rollup_empty_value_filter"),
                    log_collection_dep_permission_stats: t("log_collection_dep_permission_stats")
                }, a = {
                    formula_null_check: t("formula_null_check")
                };
                return { ...i,
                    ...a
                }
            }
        },
        287095: (e, t, i) => {
            i.d(t, {
                w: () => l
            }), i(18107), i(967357), i(814603), i(147566), i(198721);
            let a = "www.",
                o = /.+\..+\..+/,
                r = /\.{2,}/,
                n = /.+\..+/;

            function l(e) {
                let t, i = e.trim();
                if (0 === i.length || -1 === i.indexOf(".") && -1 === i.indexOf("localhost") || "." === i.at(i.length - 1) || -1 !== i.indexOf(" ")) return !1;
                let l = -1 === i.indexOf("://"),
                    s = `${l?"http://":""}${i}`;
                try {
                    t = new URL(s)
                } catch (r) {
                    let e = -1 === s.indexOf(a),
                        [i, o] = s.split("://");
                    s = `${i}://${e?"www.":""}${o}`;
                    try {
                        t = new URL(s)
                    } catch (e) {
                        return !1
                    }
                }
                let u = t.hostname;
                return !(r.test(u) || i.includes(a) && "localhost" !== u && !o.test(u)) && ("localhost" === u || !!n.test(u))
            }
        },
        478284: (e, t, i) => {
            i.d(t, {
                I: () => l,
                M: () => r
            }), i(16280), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var a = () => i(901144);
            let o = (0, i(109939).YK)({
                    createPage: {
                        id: "automations.actions.createPage",
                        defaultMessage: "Add page to…"
                    },
                    createPageDescription: {
                        id: "automations.actions.createPageDescription",
                        defaultMessage: "Adds a new page to a database."
                    },
                    createPageVariableName: {
                        id: "automations.actions.createPageVariableName",
                        defaultMessage: "Page added"
                    },
                    createPageVariableNameWithStepNumber: {
                        id: "automations.actions.createPageVariableNameWithStepNumber",
                        defaultMessage: "Page added in step {stepNumber}"
                    },
                    createPageVariableDescription: {
                        id: "automations.actions.createPageVariableDescription",
                        defaultMessage: "The page created from an add page action"
                    }
                }),
                r = {
                    relation: !0,
                    person: !0,
                    multi_select: !0,
                    title: !1,
                    text: !1,
                    url: !1,
                    email: !1,
                    phone_number: !1,
                    checkbox: !1,
                    created_by: !1,
                    last_edited_by: !1,
                    file: !1,
                    select: !1,
                    status: !1,
                    number: !1,
                    date: !1,
                    created_time: !1,
                    last_edited_time: !1,
                    last_visited_time: !1,
                    formula: !1,
                    rollup: !1,
                    button: !1,
                    auto_increment_id: !1,
                    location: !1,
                    verification: !1,
                    place: !1
                },
                n = new Set(["button", "event", "recurrence"]),
                l = {
                    type: "create_page",
                    invertible: !0,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !0,
                    display: {
                        icon: i(581923).plusIcon,
                        name: o.createPage,
                        description: o.createPageDescription
                    },
                    isAvailableForContext: e => {
                        let t = e.automation.getTriggerType();
                        return "event" === t ? !!e.actorOnlyEditedUnaliveColumns || !!e.subscriptionInfo.isSubscribed : n.has(t)
                    },
                    * resolveExecutionDependencies(e, t) {
                        let a = [],
                            o = t.getConfig();
                        if (!o) return a;
                        let r = d(o);
                        if (!r) return a;
                        if ("collection" === r.type) {
                            let e = r.collection;
                            a.push({
                                type: "record_permission",
                                pointer: e,
                                minimumRole: "none",
                                additionalPermissionChecks: ["canCreatePagesInCollection"]
                            });
                            let t = yield* i(358021).q.fetchRecord(e), n = null == t ? void 0 : t.getDefaultTemplatePagePointer();
                            n && a.push({
                                type: "record_permission",
                                pointer: {
                                    spaceId: null == t ? void 0 : t.getSpaceId(),
                                    ...n
                                },
                                minimumRole: "none"
                            }), o.template_page_id && a.push({
                                type: "record_permission",
                                pointer: {
                                    id: o.template_page_id,
                                    spaceId: e.spaceId,
                                    table: i(682956).ev
                                },
                                minimumRole: "reader"
                            })
                        }
                        if (o.values)
                            for (let t of Object.values(o.values)) null != t && t.value && a.push(...yield* e.getFormulaContentsDependencies({
                                minimumRole: "reader",
                                value: t.value
                            }));
                        return a
                    },
                    typecheck: (e, t) => {
                        let r = t.getConfig();
                        if (!r) return {
                            value: {
                                validationFailures: [{
                                    type: "empty_config",
                                    key: "config",
                                    actionType: "create_page",
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        let n = d(r);
                        if (!n) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "create_page",
                                    key: "collection",
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        if ("private_space" === n.type) {
                            let r = (0, i(297493).$y)({
                                    source: "action",
                                    action_id: t.id,
                                    action_output_type: "page"
                                }),
                                n = e.automationModel.getActionIds().indexOf(t.id) ? ? -1,
                                l = e.intl.formatMessage(o.createPageVariableName),
                                s = {
                                    description: e.intl.formatMessage(o.createPageVariableDescription),
                                    kind: i(416901).FormulaContextValueKind.ContextValue,
                                    id: r,
                                    name: l,
                                    type: {
                                        type: "block",
                                        collection: void 0
                                    },
                                    stepNumberForDisplay: n + 1
                                };
                            for (let i of e.automationModel.getActionIds()) {
                                if (i === t.id) continue;
                                let o = e.getRecordModel({
                                    id: i,
                                    spaceId: e.automationModel.getSpaceId(),
                                    table: a().SC
                                });
                                if ((null == o ? void 0 : o.type) === "publish_site") return {
                                    value: {
                                        validationFailures: [{
                                            type: "create_private_page_and_publish_site",
                                            actionType: "create_page",
                                            key: "private_space",
                                            shouldNotifyOnFailure: !0
                                        }]
                                    }
                                }
                            }
                            return {
                                value: {
                                    valueTypes: [s],
                                    validationFailures: [],
                                    validationWarnings: [],
                                    stats: {
                                        formulaStats: void 0
                                    }
                                }
                            }
                        }
                        if ("variable" === n.type) return {
                            value: {
                                valueTypes: [],
                                validationFailures: [],
                                validationWarnings: [],
                                stats: {
                                    formulaStats: void 0
                                }
                            }
                        };
                        "collection" !== n.type && (0, i(722371).HB)(n);
                        let l = n.collection,
                            s = e.getRecordModel(l);
                        if (!s) return {
                            value: {
                                validationFailures: [{
                                    type: "collection_not_found",
                                    actionType: "create_page",
                                    key: l.id,
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        if (!i(688502)._n(s.pointer, e.getRecordModel)) return {
                            value: {
                                validationFailures: [{
                                    type: "collection_in_trash",
                                    actionType: "create_page",
                                    key: "collection",
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        if (!l.spaceId) return {
                            error: new(i(600005)).N9("Collection missing space ID")
                        };
                        if (r.template_page_id) {
                            let t = {
                                    id: r.template_page_id,
                                    table: i(682956).ev
                                },
                                a = e.getRecordModel(t);
                            if (!a || !a.isTemplate() || a.getParentId() !== l.id) return {
                                value: {
                                    validationFailures: [{
                                        type: "invalid_optional_config",
                                        actionType: "create_page",
                                        key: "template",
                                        shouldNotifyOnFailure: !0
                                    }]
                                }
                            };
                            if (!i(688502)._n(t, e.getRecordModel)) return {
                                value: {
                                    validationFailures: [{
                                        type: "template_in_trash",
                                        actionType: "create_page",
                                        key: "template",
                                        shouldNotifyOnFailure: !0
                                    }]
                                }
                            }
                        }
                        let u = !1;
                        for (let i of e.automationModel.getActionIds()) {
                            if (i === t.id) continue;
                            let o = e.getRecordModel({
                                id: i,
                                spaceId: e.automationModel.getSpaceId(),
                                table: a().SC
                            });
                            (null == o ? void 0 : o.type) === "create_page" && (u = !0)
                        }
                        let c = (0, i(297493).$y)({
                                source: "action",
                                action_id: t.id,
                                action_output_type: "page"
                            }),
                            p = (e.automationModel.getActionIds().indexOf(t.id) ? ? -1) + 1,
                            f = u ? e.intl.formatMessage(o.createPageVariableNameWithStepNumber, {
                                stepNumber: p
                            }) : e.intl.formatMessage(o.createPageVariableName),
                            m = {
                                description: e.intl.formatMessage(o.createPageVariableDescription),
                                kind: i(416901).FormulaContextValueKind.ContextValue,
                                id: c,
                                name: f,
                                type: {
                                    type: "block",
                                    collection: l
                                },
                                associatedCollectionForDisplay: l,
                                stepNumberForDisplay: p
                            },
                            {
                                validationFailures: v,
                                validationWarnings: y,
                                formulaStats: g
                            } = (0, i(179595).o)({
                                collectionPointer: s.getSpaceShardedPointer(),
                                collectionSchema: s.getNormalizedSchema(e.getRecordModel),
                                config: r,
                                context: e,
                                actionType: "create_page"
                            });
                        return {
                            value: {
                                valueTypes: [m],
                                validationFailures: v,
                                validationWarnings: y,
                                stats: {
                                    formulaStats: g
                                }
                            }
                        }
                    },
                    execute: async (e, t) => {
                        let a, o, r, {
                                author: n,
                                executeEffectMap: l,
                                loadRecordModel: p,
                                useCrdtDefault: f
                            } = e,
                            m = t.getConfig();
                        if (!m) return {
                            error: new(i(600005)).ry({
                                pointer: void 0,
                                actionId: t.id
                            })
                        };
                        let v = d(m);
                        if (!v) return {
                            error: new(i(600005)).ry({
                                pointer: void 0,
                                actionId: t.id
                            })
                        };
                        if ("private_space" === v.type) return await s(e, t, m);
                        if ("variable" === v.type || "collection" !== v.type) return {
                            error: new(i(600005)).ry({
                                pointer: void 0,
                                actionId: t.id
                            })
                        };
                        let y = v.collection;
                        if (!y.spaceId) return {
                            error: new(i(600005)).ry({
                                pointer: y,
                                actionId: t.id
                            })
                        };
                        let g = await p(y);
                        if (!g) return {
                            value: {
                                values: []
                            }
                        };
                        let _ = g.getAdditionalPropertyPointers(),
                            h = await e.loadRecordModel(_),
                            b = g.getSpaceShardedPointer(),
                            x = await e.makeGetRecordModelFn([y]);
                        if (!i(688502)._n(b, x)) return {
                            error: new(i(600005)).tC({
                                skippedRecords: [b],
                                actionId: t.id
                            })
                        };
                        if (m.template_page_id) {
                            let t = {
                                    id: m.template_page_id,
                                    spaceId: y.spaceId,
                                    table: i(682956).ev
                                },
                                o = await e.makeGetRecordModelFn([t]);
                            c(t, o) && (a = m.template_page_id)
                        }
                        if (!(0, i(722371).O9)(a)) {
                            let t = null == g ? void 0 : g.getDefaultTemplatePagePointer();
                            if (t) {
                                let i = await e.makeGetRecordModelFn([t]);
                                c(t, i) && (a = t.id)
                            }
                        }
                        let k = g.isPageTreeCollection(),
                            I = g.getRootPagePointer(),
                            T = await u({
                                isPageTreeCollection: k,
                                rootPagePointer: I,
                                actionId: t.id,
                                loadRecordModel: p,
                                useCrdtDefault: f
                            });
                        if (i(300441).Q.isFail(T)) return T;
                        let {
                            value: F
                        } = T, S = {}, M = [];
                        if (a) {
                            let n = await e.executeEffectMap.initializeTemplateInDatabase({
                                actionId: t.id,
                                templateId: a,
                                collection: y,
                                propertyUpdates: {},
                                useCrdt: F,
                                automationExecutionContext: e
                            });
                            if (i(300441).Q.isFail(n)) return n;
                            o = n.value.pageId, r = n.value.pageModel, n.value.stats && i(773329).hs.aggregateActionStats(S, n.value.stats)
                        } else {
                            var w;
                            o = (null == (w = e.spaceIdCreator) ? void 0 : w.idInSavedSpace(i(682956).ev)) ? ? i(92513).Dt();
                            let {
                                model: t,
                                operations: a
                            } = i(993189).zgg.create({
                                id: o,
                                type: i(955630).xd.page,
                                parentPointer: g.pointer,
                                space_id: y.spaceId,
                                createdBy: n || i(268033).TI,
                                legacyNonCrdt: !F
                            });
                            r = t, M.push(...a), i(773329).hs.aggregateActionStats(S, {
                                blocksCreated: 1,
                                pagesCreated: 1
                            })
                        }
                        let C = g.getNormalizedSchema(i(993189).b4_.fromRecordMap(h));
                        if (C) {
                            let a = await (0, i(179595).d)({
                                config: m,
                                page: r,
                                collectionPointer: y,
                                collectionSchema: C,
                                actionId: t.id,
                                context: e
                            });
                            if (i(300441).Q.isFail(a)) return a;
                            i(773329).hs.aggregateActionStats(S, a.value.stats), M.push(...a.value.values)
                        }
                        if (k && I) {
                            let e = (0, i(733622).YE)(I.table, i(682956).ev);
                            if (e) M.push({
                                pointer: I,
                                path: e,
                                command: "insertChildrenAfter",
                                args: {
                                    ids: [o]
                                }
                            });
                            else throw Error(`Could not find child path for parent table ${I.table} and child table ${i(682956).ev}`)
                        }
                        if (M.length > 0) {
                            let e = await l.saveTransaction({
                                actionId: t.id,
                                info: {
                                    type: "create_page",
                                    collection: y,
                                    pageId: o
                                },
                                operations: M
                            });
                            if (e.error) return e;
                            i(773329).hs.aggregateActionStats(S, e.value.stats)
                        }
                        let P = (0, i(297493).$y)({
                                source: "action",
                                action_id: t.id,
                                action_output_type: "page"
                            }),
                            E = {
                                kind: i(416901).FormulaContextValueKind.ContextValue,
                                id: P,
                                value: {
                                    type: "block",
                                    value: r.pointer
                                }
                            };
                        return e.runtimeRecordPointerSet.add(r.pointer), {
                            value: {
                                stats: S,
                                values: [E]
                            }
                        }
                    }
                };
            async function s(e, t, a) {
                var o;
                let {
                    author: r,
                    executeEffectMap: n,
                    useCrdtDefault: l
                } = e, s = e.spaceIdCreator.idInSavedSpace(i(682956).ev), u = e.spaceIdCreator.getSpaceId();
                if (!r) throw Error("Author is not set");
                let c = i(496282).L3.fromPointerLike({
                    id: u,
                    table: i(213003).NX,
                    spaceId: u
                });
                if ((null == r ? void 0 : r.table) !== i(514214).oo) throw Error("Author is not a user");
                let d = (0, i(247438).x9d)(""),
                    p = null == (o = a.values) ? void 0 : o.title;
                if (null != p && p.value) {
                    let {
                        simpleFormulasModule: a
                    } = e, {
                        result: o,
                        stats: r
                    } = await a.executeSimpleFormulaAsyncWithStats({
                        value: p.value,
                        context: { ...e,
                            returnType: {
                                type: "text"
                            }
                        },
                        executeFormula: e.executeContextualFormula
                    });
                    if (i(300441).Q.isFail(o)) return {
                        error: new(i(600005)).F_({
                            actionId: t.id,
                            cause: (0, i(976298).kH)(o.error),
                            stats: r
                        })
                    };
                    d = (0, i(297493).Ht)(o.value)
                }
                let {
                    model: f,
                    operations: m
                } = i(993189).zgg.create({
                    id: s,
                    type: i(955630).xd.page,
                    parentPointer: c,
                    space_id: u,
                    createdBy: r,
                    properties: {
                        title: d
                    },
                    legacyNonCrdt: !l
                }), v = [];
                v.push(...m), v.push((0, i(425851).mJ)({
                    spaceParentId: u,
                    recordId: s
                })), r && v.push(f.ops.setPermissionItem({
                    user_id: r.id,
                    role: "editor",
                    type: "user_permission"
                }));
                let y = {
                    blocksCreated: 1,
                    pagesCreated: 1
                };
                if (v.length > 0) {
                    let e = await n.saveTransaction({
                        actionId: t.id,
                        info: {
                            type: "create_page",
                            collection: void 0,
                            pageId: s
                        },
                        operations: v
                    });
                    if (e.error) return e;
                    i(773329).hs.aggregateActionStats(y, e.value.stats)
                }
                let g = (0, i(297493).$y)({
                        source: "action",
                        action_id: t.id,
                        action_output_type: "page"
                    }),
                    _ = {
                        kind: i(416901).FormulaContextValueKind.ContextValue,
                        id: g,
                        value: {
                            type: "block",
                            value: f.pointer
                        }
                    };
                return e.runtimeRecordPointerSet.add(f.pointer), {
                    value: {
                        stats: y,
                        values: [_]
                    }
                }
            }
            async function u(e) {
                let {
                    isPageTreeCollection: t,
                    rootPagePointer: a,
                    actionId: o,
                    loadRecordModel: r,
                    useCrdtDefault: n
                } = e;
                if (!t || !a) return {
                    value: n
                }; {
                    let e = await r(a);
                    return e ? {
                        value: e.isCrdtEnabled()
                    } : {
                        error: new(i(600005)).ry({
                            pointer: a,
                            actionId: o
                        })
                    }
                }
            }

            function c(e, t) {
                if (!t(e)) return !1;
                let a = !i(688502)._n(e, t),
                    o = i(688502).Ou(e, t);
                return !(a || o)
            }

            function d(e) {
                let t = e.target;
                return !t && e.collection && (t = {
                    type: "collection",
                    collection: e.collection
                }), t
            }
        },
        484132: (e, t, i) => {
            i.r(t), i.d(t, {
                hasAccessDefaultFn: () => v,
                hasAccessToCode: () => h,
                hasAccessToProperty: () => _,
                hasReadPermissionsAccess: () => y,
                hasSameSpaceAccess: () => g,
                testOnly: () => b
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520);
            var a = () => i(975162),
                o = () => i(722371),
                r = () => i(569378),
                n = () => i(517606),
                l = () => i(795e3),
                s = () => i(204903);

            function* u(e) {
                let {
                    collectionPointer: t,
                    context: a,
                    propertyId: o,
                    propertySchema: r,
                    visitedPointers: n,
                    hasAccessFn: l
                } = e, s = (0, i(138303).G7)({ ...t,
                    propertyId: o
                });
                if (n.has(s)) return !0;
                n.add(s);
                let u = l({
                    propertySchema: r,
                    spaceId: a.spaceId
                });
                return "boolean" == typeof u ? u : yield* u
            }

            function* c(e) {
                var t, a;
                let {
                    collectionPointer: u,
                    depth: c,
                    collectionSchema: d,
                    context: p,
                    propertyId: m,
                    propertySchema: v,
                    visitedPointers: y,
                    hasAccessFn: g
                } = e;
                if (!(0, i(537664).F)(v) || c > i(416901).FORMULA_MAX_DEPTH) return !1;
                let _ = (0, i(138303).G7)({ ...u,
                    propertyId: m
                });
                if (y.has(_) || (y.add(_), !(0, o().O9)(null == (t = v.formula2) ? void 0 : t.code))) return !0;
                let h = (0, i(807381).$t)(null == (a = v.formula2) ? void 0 : a.code);
                if (i(300441).Q.isFail(h)) return !0;
                let {
                    spaceId: b
                } = p, x = (0, i(138303).zm)({
                    formulaTypecheckContextValues: [{
                        kind: i(416901).FormulaContextValueKind.ThisRow,
                        type: {
                            collection: u,
                            type: "block"
                        }
                    }],
                    node: h.value,
                    spaceId: b
                }), k = (0, i(381453).hS)(x, e => (0, i(138303).G7)(e));
                if (0 === k.length) return !0;
                let {
                    getRecordModel: I
                } = yield {
                    collectionBlockProperties: [{
                        blockPointers: [],
                        collectionPointer: u,
                        blockPropertyValuePointers: [],
                        property: m,
                        schema: d
                    }],
                    recordPointers: k.filter(e => (0, i(297493).T3)(e))
                };
                for (let e of k)
                    if ((0, n().p)(e)) {
                        let t = I(e);
                        if (!(0, o().O9)(t)) return !1;
                        let i = e.propertyId,
                            a = t.getSchema(),
                            n = a[i];
                        if (!n) continue;
                        if ((0, s().bT)(n) || (0, r().l)(n)) {
                            if (!(yield* f({
                                    collectionPointer: e,
                                    collectionSchema: a,
                                    context: p,
                                    depth: c + 1,
                                    propertyId: i,
                                    propertySchema: n,
                                    visitedPointers: y,
                                    hasAccessFn: g
                                }))) return !1
                        } else if ((0, l().n)(n) && !(yield* f({
                                collectionPointer: e,
                                collectionSchema: a,
                                context: p,
                                depth: c,
                                propertyId: i,
                                propertySchema: n,
                                visitedPointers: y,
                                hasAccessFn: g
                            }))) return !1
                    } else if (!(0, o().O9)(I(e))) return !1;
                return !0
            }

            function* d(e) {
                let {
                    collectionPointer: t,
                    depth: a,
                    collectionSchema: o,
                    context: n,
                    propertyId: u,
                    propertySchema: c,
                    visitedPointers: d,
                    hasAccessFn: p
                } = e;
                if ((0, i(537664).F)(c) || a > i(416901).FORMULA_MAX_DEPTH) return !1;
                let m = (0, i(138303).G7)({ ...t,
                    propertyId: u
                });
                if (d.has(m)) return !0;
                d.add(m);
                let v = (0, i(162207).kh)(c.formula);
                if (0 === v.length) return !0;
                for (let e of v) {
                    let i = o[e];
                    if (i) {
                        if ((0, s().bT)(i) || (0, r().l)(i)) {
                            if (!(yield* f({
                                    collectionPointer: t,
                                    depth: a + 1,
                                    collectionSchema: o,
                                    context: n,
                                    propertyId: e,
                                    propertySchema: i,
                                    visitedPointers: d,
                                    hasAccessFn: p
                                }))) return !1
                        } else if ((0, l().n)(i) && !(yield* f({
                                collectionPointer: t,
                                collectionSchema: o,
                                context: n,
                                depth: a,
                                propertyId: e,
                                propertySchema: i,
                                visitedPointers: d,
                                hasAccessFn: p
                            }))) return !1
                    }
                }
                return !0
            }

            function* p(e) {
                let {
                    collectionPointer: t,
                    depth: a,
                    collectionSchema: o,
                    context: n,
                    propertyId: s,
                    propertySchema: u,
                    visitedPointers: c,
                    hasAccessFn: d
                } = e;
                if (a > i(416901).FORMULA_MAX_DEPTH) return !1;
                let p = (0, i(138303).G7)({ ...t,
                    propertyId: s
                });
                if (c.has(p) || (c.add(p), !u.relation_property || !u.target_property)) return !0;
                let m = o[u.relation_property];
                if (!m || "relation" !== m.type) return !0;
                let v = d({
                    propertySchema: m,
                    spaceId: n.spaceId
                });
                if (!("boolean" == typeof v ? v : yield* v)) return !1;
                let y = (0, i(390768).N)(m);
                if (!y) return !0;
                let {
                    getRecordModel: g
                } = yield {
                    recordPointers: [y]
                }, _ = g(y), h = yield {
                    recordPointers: (null == _ ? void 0 : _.getAdditionalPropertyPointers()) ? ? []
                }, b = null == _ ? void 0 : _.getNormalizedSchema(h.getRecordModel);
                if (u.target_property_type && b) {
                    let e = b[u.target_property];
                    if (e && u.target_property_type === e.type) {
                        if ((0, r().l)(e)) return yield* f({
                            collectionPointer: y,
                            collectionSchema: b,
                            context: n,
                            depth: a + 1,
                            propertyId: u.target_property,
                            propertySchema: e,
                            visitedPointers: c,
                            hasAccessFn: d
                        });
                        else if ((0, l().n)(e)) return yield* f({
                            collectionPointer: y,
                            collectionSchema: b,
                            context: n,
                            depth: a,
                            propertyId: u.target_property,
                            propertySchema: e,
                            visitedPointers: c,
                            hasAccessFn: d
                        })
                    }
                }
                return !0
            }

            function* f(e) {
                let {
                    collectionPointer: t,
                    depth: a,
                    collectionSchema: o,
                    context: n,
                    propertyId: f,
                    propertySchema: m,
                    visitedPointers: v,
                    hasAccessFn: y
                } = e;
                if ((0, l().n)(m)) return yield* u({
                    collectionPointer: t,
                    context: n,
                    propertyId: f,
                    propertySchema: m,
                    visitedPointers: v,
                    hasAccessFn: y
                });
                if ((0, r().l)(m))
                    if ((0, i(537664).F)(m)) return yield* c({
                        collectionPointer: t,
                        depth: a,
                        collectionSchema: o,
                        context: n,
                        propertyId: f,
                        propertySchema: m,
                        visitedPointers: v,
                        hasAccessFn: y
                    });
                    else return yield* d({
                        collectionPointer: t,
                        depth: a,
                        collectionSchema: o,
                        context: n,
                        propertyId: f,
                        propertySchema: m,
                        visitedPointers: v,
                        hasAccessFn: y
                    });
                return !(0, s().bT)(m) || (yield* p({
                    collectionPointer: t,
                    depth: a,
                    collectionSchema: o,
                    context: n,
                    propertyId: f,
                    propertySchema: m,
                    visitedPointers: v,
                    hasAccessFn: y
                }))
            }
            async function m(e) {
                let {
                    context: t
                } = e;
                try {
                    let i = f(e),
                        o = i.next();
                    for (; !o.done;) {
                        let e = t.handleDataRequest(o.value);
                        o = i.next((0, a().yL)(e) ? await e : e)
                    }
                    return o.value
                } catch (e) {
                    return !0
                }
            }

            function* v(e) {
                let {
                    propertySchema: t,
                    spaceId: a
                } = e, r = (0, i(390768).N)(t);
                if (!(0, o().O9)(r)) return !0;
                let {
                    getRecordModel: n
                } = yield {
                    recordPointers: [r]
                }, l = n(r);
                return (0, o().O9)(l) && g({
                    spaceId: a,
                    propertySchema: t
                })
            }

            function* y(e) {
                let {
                    propertySchema: t
                } = e, a = (0, i(390768).N)(t);
                if (!(0, o().O9)(a)) return !0;
                let {
                    getRecordModel: r
                } = yield {
                    recordPointers: [a]
                }, n = r(a);
                return (0, o().O9)(n)
            }

            function g(e) {
                let {
                    propertySchema: t,
                    spaceId: a
                } = e;
                return !(0, i(226989).o)(a, t)
            }
            async function _(e) {
                let {
                    collectionPointer: t,
                    collectionSchema: i,
                    context: a,
                    propertyId: o,
                    hasAccessFn: r
                } = e, n = i[o];
                return !n || await m({
                    collectionPointer: t,
                    depth: 0,
                    collectionSchema: i,
                    context: a,
                    propertyId: o,
                    propertySchema: n,
                    visitedPointers: new Set,
                    hasAccessFn: r
                })
            }

            function h(e) {
                let {
                    context: t
                } = e;
                try {
                    let a = function*(e) {
                            let {
                                collectionPointer: t,
                                depth: a,
                                context: u,
                                code: c,
                                visitedPointers: d,
                                hasAccessFn: p
                            } = e, m = (0, i(807381).$t)(c);
                            if (i(300441).Q.isFail(m)) return !0;
                            let {
                                spaceId: v
                            } = u, y = u.valueTypes.filter(e => e.kind !== i(416901).FormulaContextValueKind.ThisRow), g = (0, i(138303).zm)({
                                formulaTypecheckContextValues: t ? [...y, {
                                    kind: i(416901).FormulaContextValueKind.ThisRow,
                                    type: {
                                        collection: t,
                                        type: "block"
                                    }
                                }] : [],
                                node: m.value,
                                spaceId: v
                            }), _ = (0, i(381453).hS)(g, e => (0, i(138303).G7)(e));
                            if (0 === _.length) return !0;
                            let {
                                getRecordModel: h
                            } = yield {
                                collectionBlockProperties: [],
                                recordPointers: _.filter(e => (0, i(297493).T3)(e))
                            };
                            for (let e of _)
                                if ((0, n().p)(e)) {
                                    let t = h(e);
                                    if (!(0, o().O9)(t)) return !1;
                                    let i = e.propertyId,
                                        n = t.getSchema(),
                                        c = n[i];
                                    if (!c) continue;
                                    if ((0, s().bT)(c) || (0, r().l)(c)) {
                                        if (!(yield* f({
                                                collectionPointer: e,
                                                collectionSchema: n,
                                                context: u,
                                                depth: a + 1,
                                                propertyId: i,
                                                propertySchema: c,
                                                visitedPointers: d,
                                                hasAccessFn: p
                                            }))) return !1
                                    } else if ((0, l().n)(c) && !(yield* f({
                                            collectionPointer: e,
                                            collectionSchema: n,
                                            context: u,
                                            depth: a,
                                            propertyId: i,
                                            propertySchema: c,
                                            visitedPointers: d,
                                            hasAccessFn: p
                                        }))) return !1
                                } else if (!(0, o().O9)(h(e))) return !1;
                            return !0
                        }(e),
                        u = a.next();
                    for (; !u.done;) {
                        let e = t.handleDataRequest(u.value);
                        u = a.next(e)
                    }
                    return u.value
                } catch (e) {
                    return !0
                }
            }
            let b = {
                hasAccessDefaultFn: v,
                hasAccessToProperty: _,
                hasAccessToFormula1Property: d,
                hasAccessToFormula2Property: c,
                hasAccessToRelationProperty: u,
                hasAccessToRollupProperty: p
            }
        },
        484811: (e, t, i) => {
            i.d(t, {
                LM: () => c,
                Sx: () => o,
                br: () => d,
                gY: () => n,
                i8: () => a,
                qu: () => r
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            let a = 2048,
                o = 1e3,
                r = 10;

            function n(e, t) {
                if (!e || e.length > a) return !1;
                let o = i(188835).parse(e);
                return !!o && !!o.host && ("http:" === o.protocol || "https:" === o.protocol) && (!!t.allowLocalhost || "localhost" !== o.hostname && "127.0.0.1" !== o.hostname && "0.0.0.0" !== o.hostname) && (0, i(287095).w)(e)
            }
            let l = /^[\w-]+$/,
                s = /^[\w\s:;.,\\\/"'?!(){}[\]@<>=+*#$&|~^%-]+$/,
                u = new Set(["user-agent", "content-type", "host", "content-length", "accept-encoding", "connection"]);

            function c(e) {
                return e.length <= o && !u.has(e.toLowerCase()) && l.test(e)
            }

            function d(e) {
                return e.length <= o && s.test(e)
            }
        },
        501148: (e, t, i) => {
            i.d(t, {
                Z: () => o
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.49 2.37 15.01 15.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.154 3.625h1.23a.625.625 0 1 0 0-1.25h-1.23A2.625 2.625 0 0 0 4.529 5v2.069c0 .9-.508 1.722-1.313 2.124l-.317.159a.725.725 0 0 0 0 1.297l.317.158a2.38 2.38 0 0 1 1.313 2.124V15a2.625 2.625 0 0 0 2.625 2.625h1.23a.625.625 0 1 0 0-1.25h-1.23c-.76 0-1.375-.616-1.375-1.375v-2.069c0-1.17-.564-2.256-1.492-2.931a3.63 3.63 0 0 0 1.492-2.931V5c0-.76.615-1.375 1.375-1.375m5.692 12.75h-1.23a.625.625 0 1 0 0 1.25h1.23A2.625 2.625 0 0 0 15.471 15v-2.069c0-.9.508-1.722 1.313-2.124l.317-.159a.725.725 0 0 0 0-1.296l-.317-.159a2.38 2.38 0 0 1-1.313-2.124V5a2.625 2.625 0 0 0-2.625-2.625h-1.23a.625.625 0 1 0 0 1.25h1.23c.76 0 1.375.616 1.375 1.375v2.069c0 1.17.564 2.256 1.492 2.931a3.63 3.63 0 0 0-1.492 2.931V15c0 .76-.615 1.375-1.375 1.375"
                    })
                },
                o = (0, i(104509).wt)("curlyBraces", a, "default")
        },
        591864: (e, t, i) => {
            i.r(t), i.d(t, {
                analyzeSimpleFormulaOrFormulaSync: () => n,
                executeSimpleFormulaAsyncWithStats: () => d,
                filterTextValueToSimpleFormulaValueTokens: () => v().LU,
                fromSimpleFormulaArrayValue: () => v().FW,
                getDependenciesForSimpleFormula: () => v().BT,
                getDependenciesForSimpleFormulaOrFormula: () => v().MP,
                getReferencedContextValueIds: () => v().yP,
                isAnnotationSimpleValueToken: () => v().eU,
                setPropertyValueToFormulaReturnType: () => v().qB,
                setPropertyValueToSimpleFormulaReturnType: () => v().Iv,
                simpleFormulaValueTypeToFormulaReturnType: () => v().BZ,
                simpleFormulaValueWithoutToken: () => v().h0,
                singleSimpleValueTokenToTextToken: () => v().ii,
                toSimpleFormulaArrayValue: () => v().M0,
                toSimpleFormulaSingleValue: () => v().fd,
                typecheckSimpleFormulaOrFormula: () => l
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var a = () => i(247438),
                o = () => i(484132),
                r = () => i(299512);

            function n(e) {
                let {
                    context: t,
                    value: o
                } = e;
                if (!(0, i(722371).O9)(o) || !(0, i(722371).O9)(o.value)) return {
                    type: {
                        type: "unknown"
                    }
                }; {
                    if ("simple" === o.type) return function(e, t) {
                        let i = [],
                            o = [],
                            n = [];
                        for (let l of e) {
                            let e = (0, a().uPN)(l);
                            if (!(0, a().x9g)(e)) continue;
                            let s = (0, r().analyzeFormulaSync)([l], t);
                            i.push(...s.parseErrors ? ? []), o.push(...s.typeErrors ? ? []), n.push(...s.typeWarnings ? ? [])
                        }
                        return {
                            type: {
                                type: "text"
                            },
                            parseErrors: i,
                            typeErrors: o,
                            typeWarnings: n
                        }
                    }(o.value, t);
                    let e = (0, r().analyzeFormulaSync)(o.value, t);
                    return (0, i(722371).O9)(e.type) ? e : {
                        parseErrors: e.parseErrors,
                        type: {
                            type: "unknown"
                        },
                        typeErrors: e.typeErrors,
                        typeWarnings: e.typeWarnings
                    }
                }
            }

            function l(e) {
                let {
                    context: t,
                    value: i,
                    collectionPointer: r
                } = e, l = performance.now(), s = n({
                    context: t,
                    value: i
                }), u = Math.trunc(performance.now() - l), c = (!s.typeErrors || 0 === s.typeErrors.length) && (!s.parseErrors || 0 === s.parseErrors.length);
                return {
                    result: s,
                    hasCrossSpaceError: !!c && function({
                        context: e,
                        value: t,
                        collectionPointer: i
                    }) {
                        if (!t.value) return !1;
                        let r = !1;
                        if ("formula" === t.type)(0, o().hasAccessToCode)({
                            collectionPointer: i,
                            context: e,
                            depth: 0,
                            code: t.value,
                            visitedPointers: new Set,
                            hasAccessFn: o().hasSameSpaceAccess
                        }) || (r = !0);
                        else if ("simple" === t.type)
                            for (let n of t.value) {
                                let t = (0, a().uPN)(n);
                                (0, a().x9g)(t) && ((0, o().hasAccessToCode)({
                                    collectionPointer: i,
                                    context: e,
                                    depth: 0,
                                    code: [n],
                                    visitedPointers: new Set,
                                    hasAccessFn: o().hasSameSpaceAccess
                                }) || (r = !0))
                            }
                        return r
                    }({
                        context: t,
                        value: i,
                        collectionPointer: r
                    }),
                    stats: {
                        formulaTypecheckDurationMs: void 0,
                        formulaTypecheckSuccess: void 0,
                        formulaExecutionDurationMs: void 0,
                        formulaExecutionSuccess: void 0,
                        totalFormulas: void 0,
                        simpleFormulaTypecheckDurationMs: void 0,
                        simpleFormulaTypecheckSuccess: void 0,
                        simpleFormulaExecutionDurationMs: void 0,
                        simpleFormulaExecutionSuccess: void 0,
                        totalSimpleFormulas: void 0,
                        ..."simple" === i.type ? {
                            simpleFormulaTypecheckDurationMs: u,
                            simpleFormulaTypecheckSuccess: c,
                            totalSimpleFormulas: 1
                        } : {
                            formulaTypecheckDurationMs: u,
                            formulaTypecheckSuccess: c,
                            totalFormulas: 1
                        }
                    }
                }
            }
            i(898992), i(354520), i(581454);
            var s = () => i(300441),
                u = () => i(297493);

            function c(e) {
                return "number" !== e.type && "text" !== e.type && "checkbox" !== e.type
            }
            async function d(e) {
                let {
                    context: t,
                    value: a
                } = e, o = performance.now(), r = await p(e), n = Math.trunc(performance.now() - o), l = s().Q.isSuccess(r);
                return "simple" === a.type ? c(t.returnType) ? {
                    result: r,
                    stats: {
                        formulaTypecheckDurationMs: void 0,
                        formulaTypecheckSuccess: void 0,
                        formulaExecutionDurationMs: void 0,
                        formulaExecutionSuccess: void 0,
                        totalFormulas: void 0,
                        simpleFormulaTypecheckDurationMs: void 0,
                        simpleFormulaTypecheckSuccess: void 0,
                        simpleFormulaExecutionDurationMs: n,
                        simpleFormulaExecutionSuccess: l,
                        totalSimpleFormulas: 1
                    }
                } : {
                    result: r
                } : "formula" === a.type ? {
                    result: r,
                    stats: {
                        formulaTypecheckDurationMs: void 0,
                        formulaTypecheckSuccess: void 0,
                        formulaExecutionDurationMs: n,
                        formulaExecutionSuccess: l,
                        totalFormulas: 1,
                        simpleFormulaTypecheckDurationMs: void 0,
                        simpleFormulaTypecheckSuccess: void 0,
                        simpleFormulaExecutionDurationMs: void 0,
                        simpleFormulaExecutionSuccess: void 0,
                        totalSimpleFormulas: void 0
                    }
                } : (0, i(722371).HB)(a.type)
            }
            async function p(e) {
                let {
                    context: t,
                    executeFormula: o,
                    ignoreErrors: r,
                    value: n
                } = e, {
                    returnType: l
                } = t, u = n.value;
                if ("simple" === n.type) {
                    let e = c(l),
                        n = u;
                    if (!e && function(e) {
                            let t;
                            if (!(0, i(722371).O9)(e)) return !1;
                            for (let i of e)
                                if (0 !== (t = a().uPN(i)).length && a().x9g(t)) return !0;
                            return !1
                        }(n)) {
                        let e = await f({
                            context: t,
                            executeFormula: o,
                            value: n
                        });
                        if (s().Q.isFail(e))
                            if (!r) return e;
                            else return {
                                value: {
                                    type: "undefined"
                                }
                            };
                        n = e.value
                    }
                    if ("number" === l.type) {
                        let e = i(588688).M(n);
                        return (0, i(722371).O9)(e) && !isNaN(e) ? {
                            value: {
                                type: "number",
                                value: e
                            }
                        } : {
                            value: {
                                type: "undefined"
                            }
                        }
                    }
                    return "text" === l.type ? {
                        value: {
                            type: "text",
                            value: n ? ? []
                        }
                    } : "checkbox" === l.type ? {
                        value: {
                            type: "checkbox",
                            value: "true" === a().q4_(n)
                        }
                    } : o(t, n)
                }
                return "formula" === n.type ? o(t, u) : (0, i(722371).HB)(n.type)
            }
            async function f(e) {
                let {
                    context: t,
                    executeFormula: o,
                    ignoreErrors: r,
                    value: n
                } = e;
                if (!(0, i(722371).O9)(n)) return {
                    value: void 0
                };
                let l = [],
                    c = [];
                for (let e of n) {
                    if (c = a().uPN(e), a().tVx(c)) {
                        let i = await o(t, [e]);
                        if (s().Q.isFail(i) && !r) return i;
                        s().Q.isSuccess(i) && l.push(...m((0, u().Ht)(i.value), c));
                        continue
                    }
                    if (a().TVE(c)) {
                        let i = await o(t, [e]);
                        if (s().Q.isFail(i) && !r) return i;
                        s().Q.isSuccess(i) && l.push(...m((0, u().Ht)(i.value), c));
                        continue
                    }
                    l.push(e)
                }
                return {
                    value: l
                }
            }

            function m(e, t) {
                if (0 === a().AhH(e)) return e;
                let i = t.filter(e => a().jcO(e));
                return 0 === i.length ? e : a().__s(e.map(e => {
                    let t = a().uPN(e);
                    return 0 === t.length ? a().Ey_(a().N8A(e), i) : a().Ey_(a().N8A(e), a().RFR(t, i))
                }))
            }
            var v = () => i(208210)
        },
        773329: (e, t, i) => {
            i.d(t, {
                AP: () => o,
                WV: () => s,
                hs: () => a,
                oh: () => l
            }), i(944114);
            let a = {
                create: (e, t) => ({
                    pointer: e,
                    platform: t,
                    typecheckStartTime: void 0,
                    typecheckDurationMs: void 0,
                    typecheckSuccess: void 0,
                    totalActionDependencies: void 0,
                    getDependenciesDurationMs: void 0,
                    executionStartTime: void 0,
                    executionDurationMs: void 0,
                    executionSuccess: void 0,
                    totalOperations: void 0,
                    totalBlocksCreated: void 0,
                    totalPagesCreated: void 0,
                    totalPagesUpdated: void 0,
                    totalUsersMentioned: void 0,
                    totalActions: 0,
                    actionStats: {},
                    transactionIds: void 0,
                    formulaStats: void 0
                }),
                createAction: (e, t) => ({
                    pointer: e,
                    actionType: t,
                    typecheckStartTime: void 0,
                    typecheckDurationMs: void 0,
                    typecheckSuccess: void 0,
                    totalDependencies: void 0,
                    getDependenciesDurationMs: void 0,
                    executionStartTime: void 0,
                    executionDurationMs: void 0,
                    executionSuccess: void 0,
                    totalOperations: void 0,
                    blocksCreated: void 0,
                    pagesCreated: void 0,
                    pagesUpdated: void 0,
                    usersMentioned: void 0,
                    groupsMentioned: void 0,
                    transactionIds: void 0,
                    formulaStats: void 0
                }),
                getOrCreateAction: (e, t, i) => (e.actionStats[t.id] || (e.actionStats[t.id] = a.createAction(t, i)), e.actionStats[t.id]),
                aggregate(e) {
                    let t, i, a, r, l, s, u, c, d = Object.values(e.actionStats),
                        p = [];
                    for (let e of d) t = n(t, e.totalDependencies), i = n(i, e.getDependenciesDurationMs), a = n(a, e.totalOperations), r = n(r, e.blocksCreated), l = n(l, e.pagesCreated), s = n(s, e.pagesUpdated), u = n(u, e.usersMentioned), c = o(c, e.formulaStats), Array.isArray(e.transactionIds) && e.transactionIds.length > 0 && p.push(...e.transactionIds);
                    return e.totalActionDependencies = t, e.getDependenciesDurationMs = i, e.totalOperations = a, e.totalBlocksCreated = r, e.totalPagesCreated = l, e.totalPagesUpdated = s, e.totalUsersMentioned = u, e.formulaStats = c, p.length > 0 && (e.transactionIds = p), e.totalActions = d.length, e
                },
                aggregateActionStats(e, t) {
                    (0, i(722371).O9)(t) && (e.typecheckDurationMs = n(e.typecheckDurationMs, t.typecheckDurationMs), e.totalDependencies = n(e.totalDependencies, t.totalDependencies), e.getDependenciesDurationMs = n(e.getDependenciesDurationMs, t.getDependenciesDurationMs), e.executionDurationMs = n(e.executionDurationMs, t.executionDurationMs), e.totalOperations = n(e.totalOperations, t.totalOperations), e.blocksCreated = n(e.blocksCreated, t.blocksCreated), e.pagesCreated = n(e.pagesCreated, t.pagesCreated), e.pagesUpdated = n(e.pagesUpdated, t.pagesUpdated), e.usersMentioned = n(e.usersMentioned, t.usersMentioned), e.formulaStats = o(e.formulaStats, t.formulaStats), Array.isArray(t.transactionIds) && t.transactionIds.length > 0 && (e.transactionIds = e.transactionIds ? ? [], e.transactionIds.push(...t.transactionIds)))
                }
            };

            function o(e, t) {
                return (0, i(722371).O9)(t) ? {
                    formulaTypecheckDurationMs: n(null == e ? void 0 : e.formulaTypecheckDurationMs, t.formulaTypecheckDurationMs),
                    formulaTypecheckSuccess: r(null == e ? void 0 : e.formulaTypecheckSuccess, t.formulaTypecheckSuccess),
                    formulaExecutionDurationMs: n(null == e ? void 0 : e.formulaExecutionDurationMs, t.formulaExecutionDurationMs),
                    formulaExecutionSuccess: r(null == e ? void 0 : e.formulaExecutionSuccess, t.formulaExecutionSuccess),
                    totalFormulas: n(null == e ? void 0 : e.totalFormulas, t.totalFormulas),
                    simpleFormulaTypecheckDurationMs: n(null == e ? void 0 : e.simpleFormulaTypecheckDurationMs, t.simpleFormulaTypecheckDurationMs),
                    simpleFormulaTypecheckSuccess: r(null == e ? void 0 : e.simpleFormulaTypecheckSuccess, t.simpleFormulaTypecheckSuccess),
                    simpleFormulaExecutionDurationMs: n(null == e ? void 0 : e.simpleFormulaExecutionDurationMs, t.simpleFormulaExecutionDurationMs),
                    simpleFormulaExecutionSuccess: r(null == e ? void 0 : e.simpleFormulaExecutionSuccess, t.simpleFormulaExecutionSuccess),
                    totalSimpleFormulas: n(null == e ? void 0 : e.totalSimpleFormulas, t.totalSimpleFormulas)
                } : e
            }

            function r(e, t) {
                return (0, i(722371).O9)(e) && (0, i(722371).O9)(t) ? e && t : (0, i(722371).O9)(e) ? e : (0, i(722371).O9)(t) ? t : void 0
            }

            function n(e, t) {
                return (0, i(722371).O9)(t) ? (e ? ? 0) + t : e
            }

            function l(e) {
                return !!((0, i(722371).O9)(e.executionStartTime) && (0, i(722371).O9)(e.executionDurationMs) && (0, i(722371).O9)(e.executionSuccess))
            }

            function s(e) {
                return !!((0, i(722371).O9)(e.executionStartTime) && (0, i(722371).O9)(e.executionDurationMs) && (0, i(722371).O9)(e.executionSuccess))
            }
        },
        833162: (e, t, i) => {
            i.r(t), i.d(t, {
                getActionRegistryItem: () => eM,
                getActionRegistryItemsWithConcern: () => ew
            }), i(581454), i(944114);
            var a = () => i(300441),
                o = () => i(722371),
                r = () => i(488307),
                n = () => i(600005);
            i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(803949);
            var l = () => i(975162),
                s = () => i(975908),
                u = () => i(993189),
                c = () => i(688502),
                d = () => i(832375),
                p = () => i(773329);

            function f(e) {
                let {
                    target: t,
                    context: r
                } = e;
                if ("collection" === t.type) {
                    var n, l;
                    let e = (n = t, l = r.getRecordModel, (0, c()._n)(n.collection, l) ? {
                        value: {
                            collectionModel: l(n.collection)
                        }
                    } : {
                        error: "collection_in_trash"
                    });
                    if (a().Q.isFail(e)) return e;
                    let o = e.value.collectionModel,
                        s = null == o ? void 0 : o.getNormalizedSchema(r.getRecordModel);
                    return t.filter && o && s && function(e) {
                        let {
                            filter: t,
                            collectionModel: a,
                            collectionSchema: o
                        } = e, r = new Set;
                        (0, i(696914).xc)({
                            propertyIdSet: r,
                            filter: t
                        });
                        let n = !1;
                        return r.forEach(e => {
                            let t = null == o ? void 0 : o[e];
                            if ((null == t ? void 0 : t.type) === "relation") n = n || (0, i(226989).o)(a.pointer.spaceId, t);
                            else if ((null == t ? void 0 : t.type) === "rollup" && t.relation_property) {
                                let e = null == o ? void 0 : o[t.relation_property];
                                (null == e ? void 0 : e.type) === "relation" && (n = n || (0, i(226989).o)(a.pointer.spaceId, e))
                            }
                        }), n
                    }({
                        filter: t.filter,
                        collectionModel: o,
                        collectionSchema: s
                    }) ? {
                        error: "cross_space_property_in_filter"
                    } : {
                        value: {
                            collectionModel: o
                        }
                    }
                }
                if ("page" === t.type) {
                    var u = t,
                        d = r.getRecordModel;
                    if (!(0, c()._n)(u.page, d)) return {
                        error: "block_in_trash"
                    };
                    let e = d(u.page);
                    return {
                        value: {
                            collectionModel: null != e && e.isPageBlock() ? (0, s().SH)({
                                block: e,
                                getRecordModel: d
                            }) : void 0
                        }
                    }
                }
                if ("variable" === t.type) return function(e, t) {
                    let {
                        valueTypes: i,
                        getRecordModel: a,
                        formulasModule: o
                    } = t, r = o.findFormulaTypecheckContextValue(i, e.id);
                    return r ? "block" === r.type.type && r.type.collection ? (0, c()._n)(r.type.collection, a) ? {
                        value: {
                            collectionModel: a(r.type.collection)
                        }
                    } : {
                        error: "collection_in_trash"
                    } : "array" === r.type.type && "block" === r.type.of.type && r.type.of.collection ? (0, c()._n)(r.type.of.collection, a) ? {
                        value: {
                            collectionModel: a(r.type.of.collection)
                        }
                    } : {
                        error: "collection_in_trash"
                    } : {
                        error: "missing_target_variable"
                    } : {
                        error: "missing_target_variable"
                    }
                }(t, r);
                (0, o().HB)(t)
            }
            async function m(e) {
                var t, f, m, y, g, _, h, b, x, k, I;
                let T, F, S, M, w, {
                        context: C,
                        action: P,
                        target: E,
                        extraLogData: R,
                        logFrom: D,
                        metricNames: A,
                        getOperationsForPage: O,
                        getSaveTransactionInfo: N
                    } = e,
                    {
                        FormulaContextValueKind: q,
                        fromSerializedContextValueId: V
                    } = C.formulasModule,
                    Q = performance.now(),
                    W = Q,
                    G = C.loadRecordModel;
                if ("collection" === E.type) {
                    let e, t = new Set;
                    E.filter && (0, i(696914).xc)({
                        filter: E.filter,
                        propertyIdSet: t
                    }), w = {
                        type: "collection",
                        collection: E.collection,
                        limit: E.limit,
                        filterPropertyIds: Array.from(t),
                        sortPropertyIds: E.sort ? E.sort.map(e => e.property) : []
                    };
                    let o = await G(E.collection);
                    if (!o) return {
                        error: new(n()).WY({
                            pointer: E.collection,
                            actionId: P.id
                        })
                    };
                    for (let t of C.values) {
                        if (t.kind !== q.ContextValue) continue;
                        let i = V(t.id);
                        if ("global" !== i.source || "current_user" !== i.global) continue;
                        let a = t.value;
                        "person" === a.type && a.value.table === d().oo9 && (e = a.value)
                    }
                    let r = await C.executeEffectMap.queryCollection({
                        actionId: P.id,
                        collection: E.collection,
                        userTimeZone: C.userTimeZone,
                        currentUserPointer: e,
                        filter: E.filter,
                        limit: E.limit,
                        sort: E.sort
                    });
                    if (a().Q.isFail(r)) return r;
                    S = r.value.blockIds;
                    let l = await G(o.getAdditionalPropertyPointers());
                    T = o.getNormalizedSchema(u().b4_.fromRecordMap(l)), F = E.collection, r.value.recordMap && (M = r.value.recordMap, G = u().h0Y.tryUntilFound(u().h0Y.fromRecordMapWithRole(r.value.recordMap), G))
                } else if ("variable" === E.type) {
                    let e = C.formulasModule.findFormulaEvaluationContextValue(C.values, E.id);
                    if (!e) return {
                        error: new(n()).Q({
                            actionId: P.id,
                            contextValueId: E.id
                        })
                    };
                    if (w = {
                            type: "variable",
                            contextValueId: E.id,
                            contextValueType: e.value.type
                        }, "block" === e.value.type) {
                        C.runtimeRecordPointerSet.add(e.value.value);
                        let t = await v({
                            pointer: e.value.value,
                            context: C,
                            actionId: P.id
                        });
                        if (a().Q.isFail(t)) {
                            let o = function(e) {
                                let {
                                    actionModels: t,
                                    contextValue: a
                                } = e, {
                                    automationValueInfo: o,
                                    collectionPointer: r,
                                    actionModel: l
                                } = (0, i(33529).y)({
                                    actionModels: t,
                                    id: a.id
                                });
                                return "action" !== o.source ? {
                                    error: new(n()).dd({
                                        source: "global",
                                        variable: a.value
                                    })
                                } : l && "create_page" === l.getType() && r ? {
                                    value: r
                                } : {
                                    error: new(n()).dd({
                                        actionId: o.action_id,
                                        source: "action",
                                        variable: a.value
                                    })
                                }
                            }({
                                actionModels: C.actionModels,
                                contextValue: e
                            });
                            if (a().Q.isFail(o)) return t;
                            t = o
                        }
                        S = [e.value.value.id], F = t.value;
                        let o = await C.executeEffectMap.getCollectionSchema({
                            actionId: P.id,
                            pointer: F
                        });
                        if (a().Q.isFail(o)) return o;
                        T = o.value.collectionSchema
                    } else if ("array" === e.value.type) {
                        if (0 === e.value.values.length) return {
                            value: {
                                values: []
                            }
                        };
                        let t = e.value.values[0];
                        if (!t || "block" !== t.type) return {
                            error: new(n()).dd({
                                actionId: P.id,
                                source: "action",
                                variable: t
                            })
                        };
                        C.runtimeRecordPointerSet.add(t.value);
                        let o = await G(t.value),
                            r = o ? await (0, s().wC)({
                                block: o,
                                loadRecordModel: G
                            }) : void 0;
                        if (!r) return {
                            error: new(n()).WY({
                                pointer: t.value,
                                actionId: P.id
                            })
                        };
                        for (let t = 1; t < e.value.values.length; t++) {
                            let i = e.value.values[t];
                            if (!i || "block" !== i.type) return {
                                error: new(n()).dd({
                                    actionId: P.id,
                                    source: "action",
                                    variable: i
                                })
                            };
                            C.runtimeRecordPointerSet.add(i.value);
                            let a = await G(i.value),
                                o = a ? await (0, s().wC)({
                                    block: a,
                                    loadRecordModel: G
                                }) : void 0;
                            if (!o || o.id !== r.id) return {
                                error: new(n()).mU({
                                    actionId: P.id,
                                    actualCollectionPointer: null == o ? void 0 : o.getSpaceShardedPointer(),
                                    expectedCollectionPointer: r.getSpaceShardedPointer(),
                                    pointer: i.value
                                })
                            }
                        }
                        let l = r.getSpaceShardedPointer();
                        S = i(381453).oE(e.value.values.map(e => "block" === e.type ? e.value.id : void 0));
                        let u = await C.executeEffectMap.getCollectionSchema({
                            actionId: P.id,
                            pointer: l
                        });
                        if (a().Q.isFail(u)) return u;
                        T = u.value.collectionSchema, F = l
                    } else if ("undefined" === e.value.type) return {
                        value: {
                            values: []
                        }
                    };
                    else return {
                        error: new(n()).dd({
                            actionId: P.id,
                            source: "action",
                            variable: e.value
                        })
                    }
                } else if ("page" === E.type) {
                    let e = E.page;
                    w = {
                        type: "page",
                        page: e
                    };
                    let t = await v({
                        pointer: e,
                        context: C,
                        actionId: P.id
                    });
                    if (a().Q.isFail(t)) return t;
                    S = [e.id], F = t.value;
                    let i = await C.executeEffectMap.getCollectionSchema({
                        actionId: P.id,
                        pointer: F
                    });
                    if (a().Q.isFail(i)) return i;
                    T = i.value.collectionSchema
                } else(0, o().HB)(E);
                let B = {};
                p().hs.aggregateActionStats(B, {
                    pagesUpdated: S.length
                });
                let H = !1,
                    U = !0,
                    K = [],
                    z = [],
                    L = [],
                    Y = {
                        actionId: P.id,
                        actionType: P.getType(),
                        automationId: C.automationModel.id,
                        miscDataToConvertToString: {
                            automationEventId: C.eventId,
                            automationContextType: C.contextType,
                            appEventId: null == (t = C.event) ? void 0 : t.id,
                            appEventType: null == (f = C.event) ? void 0 : f.type,
                            appEventRecordId: null == (m = C.event) ? void 0 : m.record_id,
                            appEventRecordTable: null == (y = C.event) ? void 0 : y.record_table,
                            target: w,
                            ...R,
                            pageIdsToUpdateCount: S.length,
                            queryCollectionPreloadRecordMapSize: null == (g = M) ? void 0 : g.getSize()
                        }
                    };
                for (let e of S) {
                    let t = {
                            table: d().evP,
                            id: e,
                            spaceId: F.spaceId
                        },
                        s = await G(t);
                    if (!s) {
                        C.executeEffectMap.logMessage({
                            from: D,
                            level: "warning",
                            type: "skippedInvalidRecord",
                            data: { ...Y,
                                pointer: t,
                                miscDataToConvertToString: { ...Y.miscDataToConvertToString,
                                    skippedPointersCount: z.length + L.length + 1,
                                    runtimeRecordPointerSetHasPointer: C.runtimeRecordPointerSet.has(t),
                                    queryCollectionPreloadRecordRole: null == (_ = M) ? void 0 : _.getRole(t),
                                    queryCollectionPreloadRecordHasRole: null == (h = M) ? void 0 : h.has(t),
                                    queryCollectionPreloadRecordHasValue: (null == (b = M) ? void 0 : b.getModel(t)) !== void 0
                                }
                            },
                            spaceId: C.automationModel.getSpaceId(),
                            pageId: e
                        }), C.executeEffectMap.incrementMetric(A.skippedInvalidRecord), z.push(t);
                        continue
                    }
                    let f = await C.makeGetRecordModelFn([s.pointer]);
                    if (!(0, c()._n)(s.pointer, f)) {
                        C.executeEffectMap.logMessage({
                            from: D,
                            level: "warning",
                            type: "skippedRecordInTrash",
                            data: { ...Y,
                                pointer: s.pointer,
                                miscDataToConvertToString: { ...Y.miscDataToConvertToString,
                                    skippedPointersCount: z.length + L.length + 1,
                                    runtimeRecordPointerSetHasPointer: C.runtimeRecordPointerSet.has(s.pointer),
                                    queryCollectionPreloadRecordRole: null == (x = M) ? void 0 : x.getRole(s.pointer),
                                    queryCollectionPreloadRecordHasRole: null == (k = M) ? void 0 : k.has(s.pointer),
                                    queryCollectionPreloadRecordHasValue: (null == (I = M) ? void 0 : I.getModel(s.pointer)) !== void 0,
                                    pageLastEditedTime: s.getLastEditedTime(),
                                    pageLastEditedByPointer: s.getLastEditedByPointer()
                                }
                            },
                            spaceId: C.automationModel.getSpaceId(),
                            pageId: e
                        }), C.executeEffectMap.incrementMetric(A.skippedRecordInTrash), L.push(s.pointer);
                        continue
                    }
                    let m = await G(s.getAdditionalPropertyPointers()),
                        v = u().b4_.fromRecordMap(m),
                        y = await O({
                            pageModel: s,
                            collectionPointer: F,
                            collectionSchema: T,
                            getRecordModelAdditionalProperties: v
                        });
                    if (a().Q.isFail(y)) return y;
                    if (p().hs.aggregateActionStats(B, y.value.stats), (0, o().O9)(C.actionExecutionTimeoutMs) && performance.now() - Q >= C.actionExecutionTimeoutMs) return {
                        error: new(n()).rm({
                            actionId: P.id
                        })
                    };
                    (0, o().O9)(C.actionExecutionMaxEventLoopBlockTimeMs) && performance.now() - W >= C.actionExecutionMaxEventLoopBlockTimeMs && (await (0, l().bT)(), W = performance.now());
                    let g = y.value.operations,
                        S = function(e) {
                            let {
                                pageModel: t,
                                context: a,
                                updateOperations: o,
                                getRecordModelAdditionalProperties: r
                            } = e, n = t.getLastEditedByPointer();
                            if (!(n && a.author && i(496282).L3.isEqualIdTable(n, a.author) && Date.now() - t.getLastEditedTime() < i(695216).Xb)) return !1;
                            let l = i(381453).mg(t.__IM_SORRY__getValue()),
                                s = i(412951).RecordMap.create();
                            s.setValue(t.pointer, l), (0, i(182830).applyOperationsToRecordMap)({
                                recordMap: s,
                                operations: o,
                                updateOnly: !0
                            });
                            let u = s.getModel(t.pointer);
                            if (!u) return !1;
                            let c = t.archived_by_id !== u.archived_by_id || t.archived_time !== u.archived_time || t.archived_by_table !== u.archived_by_table;
                            return i(381453).n4(t.getProperties(r), u.getProperties(r)) && !c
                        }({
                            pageModel: s,
                            context: C,
                            updateOperations: g,
                            getRecordModelAdditionalProperties: v
                        });
                    S && C.executeEffectMap.incrementMetric(A.singleConcurrentUpdate), H || = S, U && = S, g.length > 0 && !S && (K.push(...g), C.author && K.push(r().op.update({
                        pointer: {
                            table: d().evP,
                            id: e,
                            spaceId: F.spaceId
                        },
                        path: [],
                        args: {
                            last_edited_time: Date.now(),
                            last_edited_by_table: C.author.table,
                            last_edited_by_id: C.author.id
                        }
                    })))
                }
                let $ = z.length + L.length;
                if ($ > 0 && $ === S.length) {
                    if (z.length > 0) {
                        let e = [...z, ...L];
                        return {
                            error: new(n()).WY({
                                pointer: e[0],
                                actionId: P.id,
                                skippedPointers: e
                            })
                        }
                    }
                    return {
                        error: new(n()).tC({
                            skippedRecords: L,
                            actionId: P.id
                        })
                    }
                }
                if (K.length > 0) {
                    if (H && C.executeEffectMap.incrementMetric(A.concurrentUpdateSome), U && C.executeEffectMap.incrementMetric(A.concurrentUpdateAll), (0, o().O9)(C.updatePagesJitterAmountMs) && C.updatePagesJitterAmountMs > 0) {
                        let e = Math.floor(Math.random() * C.updatePagesJitterAmountMs);
                        await C.executeEffectMap.sleepForJitter(e)
                    }
                    let e = await C.executeEffectMap.saveTransaction({
                        actionId: P.id,
                        info: N({
                            pageIds: S,
                            collectionPointer: F,
                            collectionSchema: T
                        }),
                        operations: K
                    });
                    if (a().Q.isFail(e)) return e;
                    p().hs.aggregateActionStats(B, {
                        totalOperations: K.length
                    })
                }
                return {
                    value: {
                        stats: B,
                        values: []
                    }
                }
            }
            async function v(e) {
                let {
                    pointer: t,
                    context: i,
                    actionId: a
                } = e, o = await i.loadRecordModel(t);
                if (!o) return {
                    error: new(n()).WY({
                        pointer: t,
                        actionId: a
                    })
                };
                let r = await (0, s().wC)({
                    block: o,
                    loadRecordModel: i.loadRecordModel
                });
                return r ? {
                    value: r.getSpaceShardedPointer()
                } : {
                    error: new(n()).WY({
                        pointer: t,
                        actionId: a
                    })
                }
            }
            let y = (0, i(109939).YK)({
                    archivePages: {
                        id: "automations.actions.archivePages",
                        defaultMessage: "Archive pages…"
                    },
                    archivePagesDescription: {
                        id: "automations.actions.archivePagesDescription",
                        defaultMessage: "Archives the specified pages in a database."
                    }
                }),
                g = {
                    type: "archive_pages",
                    invertible: !0,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: i(937776).B,
                        name: y.archivePages,
                        description: y.archivePagesDescription
                    },
                    isAvailableForContext: e => {
                        if (!e.checkExperimentGate("archive_pages_automation_action")) return !1;
                        let t = e.automation.getTriggerType();
                        return ("event" !== t && "recurrence" !== t || !!e.subscriptionInfo.isSubscribed || !!e.actorOnlyEditedUnaliveColumns) && (!!e.subscriptionInfo.canArchiveContent || !!e.actorOnlyEditedUnaliveColumns)
                    },
                    resolveExecutionDependencies(e, t) {
                        var a, o;
                        let r = [],
                            n = t.getConfig();
                        return (null == n || null == (a = n.target) ? void 0 : a.type) === "collection" ? r.push({
                            type: "record_permission",
                            pointer: null == n ? void 0 : n.target.collection,
                            minimumRole: "content_only_editor"
                        }) : (null == n || null == (o = n.target) ? void 0 : o.type) === "variable" && r.push(...e.getFormulaContextValueDependencies({
                            minimumRole: "content_only_editor",
                            targetId: n.target.id
                        })), i(358021).q.return(r)
                    },
                    typecheck: (e, t) => {
                        if (!e.subscriptionInfo.canArchiveContent) return {
                            value: {
                                validationFailures: [{
                                    type: "requires_subscription_upgrade",
                                    actionType: "archive_pages",
                                    key: "subscription",
                                    premiumFeature: "archive_content"
                                }]
                            }
                        };
                        let i = t.getConfig();
                        if (!(null != i && i.target)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "archive_pages",
                                    key: "target",
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        let r = f({
                            target: i.target,
                            context: e
                        });
                        if (a().Q.isFail(r)) {
                            let e, t = r.error;
                            return "collection_in_trash" === t ? e = {
                                actionType: "archive_pages",
                                key: "collection",
                                type: "collection_in_trash",
                                shouldNotifyOnFailure: !0
                            } : "block_in_trash" === t ? e = {
                                actionType: "archive_pages",
                                key: "block",
                                type: "block_in_trash"
                            } : "missing_target_variable" === t ? e = {
                                actionType: "archive_pages",
                                key: "target",
                                type: "missing_target_variable",
                                shouldNotifyOnFailure: !0
                            } : "cross_space_property_in_filter" === t ? e = {
                                actionType: "archive_pages",
                                key: "filter",
                                type: "cross_space_property_in_filter"
                            } : (0, o().HB)(t), {
                                value: {
                                    validationFailures: [e]
                                }
                            }
                        }
                        return {
                            value: {
                                valueTypes: []
                            }
                        }
                    },
                    execute: async (e, t) => {
                        let i = t.getConfig(),
                            a = Date.now();
                        return null != i && i.target ? await m({
                            context: e,
                            action: t,
                            target: i.target,
                            logFrom: "archivePages",
                            metricNames: {
                                skippedInvalidRecord: "automations.archive_pages_action.skipped_invalid_record",
                                skippedRecordInTrash: "automations.archive_pages_action.skipped_record_in_trash",
                                singleConcurrentUpdate: "automations.archive_pages_action.single_concurrent_update",
                                concurrentUpdateSome: "automations.archive_pages_action.concurrent_update_some",
                                concurrentUpdateAll: "automations.archive_pages_action.concurrent_update_all"
                            },
                            getOperationsForPage(t) {
                                var i, o;
                                let {
                                    pageModel: n
                                } = t;
                                return Promise.resolve({
                                    value: {
                                        operations: [r().op.update({
                                            pointer: n.pointer,
                                            path: [],
                                            args: {
                                                archived_by_id: null == (i = e.author) ? void 0 : i.id,
                                                archived_by_table: null == (o = e.author) ? void 0 : o.table,
                                                archived_time: a
                                            }
                                        })]
                                    }
                                })
                            },
                            getSaveTransactionInfo(e) {
                                let {
                                    collectionPointer: t,
                                    pageIds: i
                                } = e;
                                return {
                                    type: "archive_pages",
                                    pageIds: i,
                                    collection: t
                                }
                            }
                        }) : {
                            error: new(n()).ry({
                                pointer: null == i ? void 0 : i.target,
                                actionId: t.id
                            })
                        }
                    }
                };
            i(672577);
            var _ = () => i(416901);
            i(18107), i(967357), i(737550);
            let h = (0, n().kB)(b, e => e.completeSprintExecutionContext.automationContext.context.automationModel.id);
            async function b(e) {
                let t, r, {
                        completeSprintAction: l,
                        completeSprintExecutionContext: s
                    } = e,
                    u = await x(s);
                if (a().Q.isFail(u)) return u;
                let c = u.value.blockIds.at(0);
                if (!(0, o().O9)(c)) return {
                    error: new(n()).Zm({
                        actionId: s.automationContext.action.id
                    })
                };
                let d = await k(s);
                if (a().Q.isFail(d)) return d;
                let p = d.value.blockIds[0],
                    f = await Promise.all([S({
                        currentSprintPageId: c,
                        completeSprintExecutionContext: s
                    }), M({
                        currentSprintPageId: c,
                        completeSprintExecutionContext: s
                    })]),
                    m = f[0],
                    v = function(e) {
                        let {
                            incompleteTasksResult: t,
                            completeTasksResult: i
                        } = e;
                        if (a().Q.isFail(t) || a().Q.isFail(i)) return;
                        let o = t.value.blockIds.length,
                            r = i.value.blockIds.length,
                            n = o + r;
                        return {
                            completedTaskCount: r,
                            incompleteTaskCount: o,
                            totalTaskCount: n,
                            completedTaskPercent: 0 === n ? 0 : r / n
                        }
                    }({
                        incompleteTasksResult: m,
                        completeTasksResult: f[1]
                    }),
                    y = s.automationContext.context.automationModel.isActive() ? "recurrence_automation" : "button_automation";
                if ((0, i(308292).vt)({
                        eventTracker: s.automationContext.context.eventTracker,
                        properties: {
                            action: "complete_sprint",
                            from: y,
                            completeSprintActionType: l,
                            nextSprintDateRange: s.sprintCollectionContext.nextSprintDateRange,
                            nextSprintInput: p ? {
                                type: "pointer",
                                pointer: {
                                    id: p,
                                    table: i(682956).ev,
                                    spaceId: s.spaceId
                                }
                            } : {
                                type: "actionId"
                            },
                            currentSprintTaskSummary: v
                        }
                    }), p) r = p, t = 1;
                else {
                    let e = await P({
                        completeSprintExecutionContext: s,
                        currentSprintPageId: c
                    });
                    if (a().Q.isFail(e)) return e;
                    r = e.value.blockId, t = 2
                }
                let g = await F(s);
                if (a().Q.isFail(g)) return g;
                let _ = g.value.blockIds[0];
                if (!_) {
                    let e = await E({
                        completeSprintExecutionContext: s,
                        sprintPageWithLargestUniqueId: r,
                        incrementFutureSprintIdAmount: 1
                    });
                    if (t = 1 === t ? 2 : 3, a().Q.isFail(e)) return e;
                    _ = e.value.blockId
                }
                let h = await T(s);
                if (a().Q.isFail(h)) return h;
                let b = h.value.blockIds[0];
                if (function(e) {
                        var t;
                        let {
                            sprintStatusPropertySchema: a
                        } = e.sprintCollectionContext;
                        return (null == (t = a.options) ? void 0 : t.some(e => e.id === i(11448).el)) ? ? !1
                    }(s)) {
                    let e = await I(s);
                    if (a().Q.isFail(e)) return e;
                    let t = e.value.blockIds[0],
                        i = await O({
                            completeSprintExecutionContext: s,
                            currentSprintPageId: c
                        });
                    if (a().Q.isFail(i)) return i;
                    if (t) {
                        let e = await N({
                            completeSprintExecutionContext: s,
                            lastSprintPageId: t
                        });
                        if (a().Q.isFail(e)) return e
                    }
                } else {
                    let e = await A({
                        completeSprintExecutionContext: s,
                        currentSprintPageId: c
                    });
                    if (a().Q.isFail(e)) return e
                }
                let w = await q({
                    completeSprintExecutionContext: s,
                    nextSprintPageId: r
                });
                if (a().Q.isFail(w)) return w;
                let C = await D({
                    completeSprintExecutionContext: s,
                    nextFutureSprintPageId: _
                });
                if (a().Q.isFail(C)) return C;
                let R = await E({
                    completeSprintExecutionContext: s,
                    sprintPageWithLargestUniqueId: b,
                    incrementFutureSprintIdAmount: t
                });
                if (a().Q.isFail(R)) return R;
                let W = new Set([]);
                for (;;) {
                    if (a().Q.isFail(m)) return m;
                    if (0 === m.value.blockIds.length) break;
                    let e = m.value.blockIds.filter(e => !W.has(e));
                    if ("complete_sprint_and_move_incomplete_tasks_to_next_sprint" === l && e.length > 0) {
                        let t = await V({
                            completeSprintExecutionContext: s,
                            taskIds: e,
                            nextSprintPageId: r
                        });
                        if (a().Q.isFail(t)) return t
                    } else if ("complete_sprint_and_move_incomplete_tasks_to_backlog" === l && e.length > 0) {
                        let t = await Q(s, e);
                        if (a().Q.isFail(t)) return t
                    } else break;
                    e.forEach(e => W.add(e)), m = await S({
                        currentSprintPageId: c,
                        completeSprintExecutionContext: s
                    })
                }
                return {
                    value: {
                        success: !0
                    }
                }
            }
            async function x(e) {
                let {
                    sprintCollectionSchema: t,
                    sprintCollectionPointer: a
                } = e.sprintCollectionContext, {
                    context: o,
                    action: r
                } = e.automationContext, n = i(613211).n$[i(11448).av].current.reducer.getCombinatorFilter(t);
                return await C(() => o.executeEffectMap.queryCollection({
                    actionId: r.id,
                    collection: a,
                    userTimeZone: o.userTimeZone,
                    filter: n,
                    limit: 1
                }), e)
            }
            async function k(e) {
                let {
                    sprintCollectionSchema: t,
                    sprintCollectionPointer: a
                } = e.sprintCollectionContext, {
                    context: o,
                    action: r
                } = e.automationContext, n = i(613211).n$[i(11448).av].next.reducer.getCombinatorFilter(t);
                return await C(() => o.executeEffectMap.queryCollection({
                    actionId: r.id,
                    collection: a,
                    userTimeZone: o.userTimeZone,
                    filter: n,
                    limit: 1
                }), e)
            }
            async function I(e) {
                let {
                    sprintCollectionSchema: t,
                    sprintCollectionPointer: a
                } = e.sprintCollectionContext, {
                    context: o,
                    action: r
                } = e.automationContext, n = i(613211).n$[i(11448).av].last.reducer.getCombinatorFilter(t);
                return await C(() => o.executeEffectMap.queryCollection({
                    actionId: r.id,
                    collection: a,
                    userTimeZone: o.userTimeZone,
                    filter: n,
                    limit: 1
                }), e)
            }
            async function T(e) {
                let {
                    sprintUniqueIdPropertyId: t,
                    sprintCollectionPointer: i
                } = e.sprintCollectionContext, {
                    context: a,
                    action: o
                } = e.automationContext;
                return await C(() => a.executeEffectMap.queryCollection({
                    actionId: o.id,
                    collection: i,
                    userTimeZone: a.userTimeZone,
                    sort: [{
                        property: t,
                        direction: "descending"
                    }],
                    limit: 1
                }), e)
            }
            async function F(e) {
                let {
                    sprintUniqueIdPropertyId: t,
                    sprintStatusPropertyId: i,
                    sprintStatusFutureOptionName: a,
                    sprintCollectionPointer: o
                } = e.sprintCollectionContext, {
                    context: r,
                    action: n
                } = e.automationContext, l = {
                    operator: "and",
                    filters: [{
                        property: i,
                        filter: {
                            operator: "status_is",
                            value: {
                                type: "is_option",
                                value: a
                            }
                        }
                    }]
                };
                return await C(() => r.executeEffectMap.queryCollection({
                    actionId: n.id,
                    collection: o,
                    filter: l,
                    userTimeZone: r.userTimeZone,
                    sort: [{
                        property: t,
                        direction: "ascending"
                    }],
                    limit: 1
                }), e)
            }
            async function S(e) {
                let {
                    currentSprintPageId: t,
                    completeSprintExecutionContext: i
                } = e, {
                    taskStatusCompleteGroupName: a
                } = i.taskCollectionContext;
                return await w({
                    currentSprintPageId: t,
                    statusFilter: {
                        operator: "status_is_not",
                        value: {
                            type: "is_group",
                            value: a
                        }
                    },
                    completeSprintExecutionContext: i
                })
            }
            async function M(e) {
                let {
                    currentSprintPageId: t,
                    completeSprintExecutionContext: i
                } = e, {
                    taskStatusCompleteGroupName: a
                } = i.taskCollectionContext;
                return await w({
                    currentSprintPageId: t,
                    statusFilter: {
                        operator: "status_is",
                        value: {
                            type: "is_group",
                            value: a
                        }
                    },
                    completeSprintExecutionContext: i
                })
            }
            async function w(e) {
                let {
                    currentSprintPageId: t,
                    statusFilter: i,
                    completeSprintExecutionContext: a
                } = e, {
                    taskStatusPropertyId: o,
                    taskSprintRelationPropertyId: r,
                    taskCollectionPointer: n
                } = a.taskCollectionContext, {
                    context: l,
                    action: s
                } = a.automationContext, u = {
                    operator: "and",
                    filters: [{
                        property: o,
                        filter: i
                    }, {
                        filter: {
                            operator: "relation_contains",
                            value: {
                                type: "exact",
                                value: t
                            }
                        },
                        property: r
                    }]
                };
                return await C(() => l.executeEffectMap.queryCollection({
                    limit: 999,
                    actionId: s.id,
                    collection: n,
                    userTimeZone: l.userTimeZone,
                    filter: u
                }), a)
            }
            async function C(e, t) {
                let {
                    spaceId: o,
                    recordMap: r
                } = t, {
                    context: n
                } = t.automationContext, l = await e();
                if (a().Q.isFail(l)) return l;
                let s = l.value;
                if (s.recordMap) r.assign(s.recordMap.toRecordMap());
                else {
                    let e = s.blockIds.map(e => ({
                            id: e,
                            table: i(682956).ev,
                            spaceId: o
                        })),
                        t = await n.loadRecordModel(e);
                    r.assign(t)
                }
                return {
                    value: {
                        blockIds: s.blockIds
                    }
                }
            }
            async function P(e) {
                let {
                    completeSprintExecutionContext: t,
                    currentSprintPageId: a
                } = e, {
                    sprintStatusNextOptionName: o,
                    sprintStatusPropertyId: r
                } = t.sprintCollectionContext, {
                    context: l,
                    action: s
                } = t.automationContext, {
                    recordMap: c,
                    spaceId: d
                } = t, p = {
                    id: a,
                    table: i(682956).ev,
                    spaceId: d
                }, f = c.getModel(p);
                if (!f) return {
                    error: new(n()).WY({
                        actionId: s.id,
                        pointer: p
                    })
                };
                let m = G({
                        intl: l.intl,
                        userTimeZone: l.userTimeZone,
                        getRecordModel: u().b4_.fromRecordMap(c),
                        incrementSprintIdAmount: 1,
                        sourceSprintPageModel: f
                    }),
                    v = {
                        title: (0, i(247438).x9d)(m),
                        [r]: [
                            [o]
                        ]
                    };
                return await R({
                    completeSprintExecutionContext: t,
                    pageProperties: v
                })
            }
            async function E(e) {
                let {
                    completeSprintExecutionContext: t,
                    sprintPageWithLargestUniqueId: a,
                    incrementFutureSprintIdAmount: o
                } = e, {
                    sprintStatusFutureOptionName: r,
                    sprintStatusPropertyId: l
                } = t.sprintCollectionContext, {
                    context: s,
                    action: c
                } = t.automationContext, {
                    recordMap: d,
                    spaceId: p
                } = t, f = {
                    id: a,
                    table: i(682956).ev,
                    spaceId: p
                }, m = d.getModel(f);
                if (!m) return {
                    error: new(n()).WY({
                        actionId: c.id,
                        pointer: f
                    })
                };
                let v = G({
                        intl: s.intl,
                        userTimeZone: s.userTimeZone,
                        getRecordModel: u().b4_.fromRecordMap(d),
                        incrementSprintIdAmount: o,
                        sourceSprintPageModel: m
                    }),
                    y = {
                        title: (0, i(247438).x9d)(v),
                        [l]: [
                            [r]
                        ]
                    };
                return await R({
                    completeSprintExecutionContext: t,
                    pageProperties: y
                })
            }
            async function R(e) {
                let t, {
                        completeSprintExecutionContext: o,
                        pageProperties: r
                    } = e,
                    {
                        recordMap: l,
                        sprintCollectionContext: s,
                        automationContext: c,
                        spaceId: d
                    } = o,
                    {
                        context: p,
                        action: f
                    } = c,
                    m = s.sprintCollectionPointer,
                    v = l.getModel(m);
                if (!v) return {
                    error: new(n())._r("invalid_record", `Could not find collection record: ${m.id}`)
                };
                let y = p.useCrdtDefault,
                    g = v.getDefaultTemplatePagePointer();
                if (g) {
                    let e = await p.executeEffectMap.initializeTemplateInDatabase({
                        actionId: f.id,
                        templateId: g.id,
                        collection: v.getSpaceShardedPointer(),
                        propertyUpdates: r,
                        useCrdt: y,
                        automationExecutionContext: p
                    });
                    if (a().Q.isFail(e)) return e;
                    let o = {
                            id: t = e.value.pageId,
                            table: i(682956).ev,
                            spaceId: d
                        },
                        s = await p.loadRecordModel(o);
                    if (!s) return {
                        error: new(n())._r("invalid_record", `Could not find new sprint page: ${o.id}`)
                    };
                    l.addModel(s)
                } else {
                    var _;
                    t = (null == (_ = p.spaceIdCreator) ? void 0 : _.idInSavedSpace(i(682956).ev)) ? ? i(92513).JW();
                    let {
                        model: e,
                        operations: o
                    } = u().zgg.create({
                        id: t,
                        type: i(955630).xd.page,
                        parentPointer: v.pointer,
                        space_id: d,
                        properties: r,
                        createdBy: p.author || i(268033).TI,
                        legacyNonCrdt: !y
                    });
                    p.runtimeRecordPointerSet.add(e.pointer);
                    let n = await p.executeEffectMap.saveTransaction({
                        actionId: f.id,
                        operations: o,
                        info: {
                            type: "create_page",
                            collection: m,
                            pageId: t
                        }
                    });
                    if (a().Q.isFail(n)) return n;
                    l.setModel(e.pointer, e)
                }
                return {
                    value: {
                        blockId: t
                    }
                }
            }
            async function D(e) {
                let {
                    completeSprintExecutionContext: t,
                    nextFutureSprintPageId: a
                } = e, {
                    sprintStatusNextOptionName: o,
                    sprintStatusPropertyId: l,
                    sprintCollectionPointer: s
                } = t.sprintCollectionContext, {
                    context: u,
                    action: c
                } = t.automationContext, {
                    recordMap: d,
                    spaceId: p
                } = t, f = {
                    id: a,
                    table: i(682956).ev,
                    spaceId: p
                }, m = d.getModel(f);
                if (!m) return {
                    error: new(n()).WY({
                        actionId: c.id,
                        pointer: f
                    })
                };
                d.addModel(m);
                let v = [r().op.update({
                    pointer: m.pointer,
                    path: ["properties"],
                    args: {
                        [l]: [
                            [o]
                        ]
                    }
                })];
                return await u.executeEffectMap.saveTransaction({
                    actionId: c.id,
                    operations: v,
                    info: {
                        type: "update_pages",
                        collection: s,
                        editedProperties: [{
                            id: l,
                            type: "status"
                        }],
                        pageIds: [a]
                    }
                })
            }
            async function A(e) {
                let {
                    completeSprintExecutionContext: t,
                    currentSprintPageId: a
                } = e, {
                    sprintStatusPastOptionName: o,
                    sprintStatusPropertyId: n,
                    sprintCollectionPointer: l
                } = t.sprintCollectionContext, {
                    context: s,
                    action: u
                } = t.automationContext, {
                    spaceId: c
                } = t, d = [r().op.update({
                    pointer: {
                        id: a,
                        table: i(682956).ev,
                        spaceId: c
                    },
                    path: ["properties"],
                    args: {
                        [n]: [
                            [o]
                        ]
                    }
                })];
                return await s.executeEffectMap.saveTransaction({
                    actionId: u.id,
                    operations: d,
                    info: {
                        type: "update_pages",
                        collection: l,
                        editedProperties: [{
                            id: n,
                            type: "status"
                        }],
                        pageIds: [a]
                    }
                })
            }
            async function O(e) {
                let {
                    completeSprintExecutionContext: t,
                    currentSprintPageId: a
                } = e, {
                    sprintStatusLastOptionName: o,
                    sprintStatusPropertyId: n,
                    sprintCollectionPointer: l
                } = t.sprintCollectionContext, {
                    context: s,
                    action: u
                } = t.automationContext, {
                    spaceId: c
                } = t, d = [];
                return o && d.push(r().op.update({
                    pointer: {
                        id: a,
                        table: i(682956).ev,
                        spaceId: c
                    },
                    path: ["properties"],
                    args: {
                        [n]: [
                            [o]
                        ]
                    }
                })), await s.executeEffectMap.saveTransaction({
                    actionId: u.id,
                    operations: d,
                    info: {
                        type: "update_pages",
                        collection: l,
                        editedProperties: [{
                            id: n,
                            type: "status"
                        }],
                        pageIds: [a]
                    }
                })
            }
            async function N(e) {
                let {
                    completeSprintExecutionContext: t,
                    lastSprintPageId: a
                } = e, {
                    sprintStatusPastOptionName: o,
                    sprintStatusPropertyId: n,
                    sprintCollectionPointer: l
                } = t.sprintCollectionContext, {
                    context: s,
                    action: u
                } = t.automationContext, {
                    spaceId: c
                } = t, d = [r().op.update({
                    pointer: {
                        id: a,
                        table: i(682956).ev,
                        spaceId: c
                    },
                    path: ["properties"],
                    args: {
                        [n]: [
                            [o]
                        ]
                    }
                })];
                return await s.executeEffectMap.saveTransaction({
                    actionId: u.id,
                    operations: d,
                    info: {
                        type: "update_pages",
                        collection: l,
                        editedProperties: [{
                            id: n,
                            type: "status"
                        }],
                        pageIds: [a]
                    }
                })
            }
            async function q(e) {
                let {
                    completeSprintExecutionContext: t,
                    nextSprintPageId: a
                } = e, {
                    sprintStatusCurrentOptionName: o,
                    sprintStatusPropertyId: n,
                    sprintCollectionPointer: l,
                    nextSprintDateRange: s,
                    sprintDatePropertyId: u
                } = t.sprintCollectionContext, {
                    context: c,
                    action: d
                } = t.automationContext, {
                    spaceId: p
                } = t, f = [r().op.update({
                    pointer: {
                        id: a,
                        table: i(682956).ev,
                        spaceId: p
                    },
                    path: ["properties"],
                    args: {
                        [n]: [
                            [o]
                        ],
                        [u]: [(0, i(247438).wmz)(["d", s])]
                    }
                })];
                return await c.executeEffectMap.saveTransaction({
                    actionId: d.id,
                    operations: f,
                    info: {
                        type: "update_pages",
                        collection: l,
                        editedProperties: [{
                            id: n,
                            type: "status"
                        }],
                        pageIds: [a]
                    }
                })
            }
            async function V(e) {
                let {
                    completeSprintExecutionContext: t,
                    taskIds: a,
                    nextSprintPageId: o
                } = e, {
                    taskSprintRelationPropertyId: n,
                    taskCollectionPointer: l
                } = t.taskCollectionContext, {
                    context: s,
                    action: u
                } = t.automationContext, {
                    spaceId: c
                } = t, d = a.map(e => r().op.update({
                    pointer: {
                        id: e,
                        table: i(682956).ev,
                        spaceId: c
                    },
                    path: ["properties"],
                    args: {
                        [n]: [(0, i(247438).wmz)((0, i(247438).ld4)(o, c))]
                    }
                }));
                return await s.executeEffectMap.saveTransaction({
                    actionId: u.id,
                    operations: d,
                    info: {
                        type: "update_pages",
                        collection: l,
                        editedProperties: [{
                            id: n,
                            type: "relation"
                        }],
                        pageIds: a
                    }
                })
            }
            async function Q(e, t) {
                let {
                    taskSprintRelationPropertyId: a,
                    taskCollectionPointer: o
                } = e.taskCollectionContext, {
                    context: n,
                    action: l
                } = e.automationContext, {
                    spaceId: s
                } = e, u = t.map(e => r().op.update({
                    pointer: {
                        id: e,
                        table: i(682956).ev,
                        spaceId: s
                    },
                    path: ["properties"],
                    args: {
                        [a]: void 0
                    }
                }));
                return await n.executeEffectMap.saveTransaction({
                    actionId: l.id,
                    operations: u,
                    info: {
                        type: "update_pages",
                        collection: o,
                        editedProperties: [{
                            id: a,
                            type: "relation"
                        }],
                        pageIds: t
                    }
                })
            }
            let W = (0, i(109939).YK)({
                defaultSprintName: {
                    id: "completeSprint.newSprint.defaultName",
                    defaultMessage: "Sprint"
                },
                sprintNameWithId: {
                    id: "completeSprint.newSprintWithId.name",
                    defaultMessage: "Sprint {sprintId}"
                }
            });

            function G(e) {
                var t;
                let i, {
                        intl: a,
                        userTimeZone: o,
                        getRecordModel: r,
                        sourceSprintPageModel: n,
                        incrementSprintIdAmount: l
                    } = e,
                    s = n.getRenderTitle({
                        intl: a,
                        userTimeZone: o,
                        getRecordModel: r
                    }),
                    u = null == s || null == (t = s.trim().split(" ")) ? void 0 : t.at(-1);
                if (u) {
                    let e = parseInt(u);
                    isNaN(e) || (i = e + l)
                }
                return void 0 !== i ? a.formatMessage(W.sprintNameWithId, {
                    sprintId: i
                }) : a.formatMessage(W.defaultSprintName)
            }
            i(296540);
            var B = i(474848);
            let H = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, B.jsxs)(B.Fragment, {
                        children: [(0, B.jsx)("path", {
                            d: "M6.375 8.333c0-.345.28-.625.625-.625h6a.625.625 0 1 1 0 1.25H7a.625.625 0 0 1-.625-.625M7 11.042a.625.625 0 1 0 0 1.25h6a.625.625 0 0 0 0-1.25z"
                        }), (0, B.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                U = (0, i(104509).wt)("equalSquare", H, "default");
            var K = () => i(976298),
                z = () => i(345091),
                L = () => i(297493),
                Y = () => i(591864);
            let $ = (0, i(109939).YK)({
                    defineVariablesName: {
                        id: "automations.actions.defineVariablesName",
                        defaultMessage: "Define variables"
                    },
                    defineVariablesDescription: {
                        id: "automations.actions.defineVariablesDescription",
                        defaultMessage: "Create and edit custom variables for your automation."
                    },
                    variableDescription: {
                        id: "automations.actions.variableDescription",
                        defaultMessage: "This is a variable of type: {readableReturnType}"
                    }
                }),
                Z = new Set(["button", "event", "recurrence"]),
                j = {
                    type: "define_variables",
                    invertible: void 0,
                    hasSideEffects: !1,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: U,
                        name: $.defineVariablesName,
                        description: $.defineVariablesDescription
                    },
                    isAvailableForContext: e => {
                        let t = e.automation.getTriggerType();
                        return "event" === t ? !!e.actorOnlyEditedUnaliveColumns || !!e.subscriptionInfo.isSubscribed : Z.has(t)
                    },
                    * resolveExecutionDependencies(e, t) {
                        var i;
                        let a = [],
                            r = null == (i = t.getConfig()) ? void 0 : i.values;
                        if ((0, o().O9)(r))
                            for (let t of Object.values(r))(0, o().O9)(t.value) && a.push(...yield* e.getFormulaContentsDependencies({
                                minimumRole: "reader",
                                value: t.value
                            }));
                        return a
                    },
                    typecheck: (e, t) => {
                        let a, r = [],
                            n = new Set,
                            {
                                values: l,
                                variableIds: s
                            } = t.getConfig() ? ? {},
                            u = [],
                            c = [];
                        if ((0, o().O9)(s) && s.length > 0 && (0, o().O9)(l)) {
                            let {
                                intl: d
                            } = e, f = {
                                formulasModule: e.formulasModule,
                                handleDataRequest: (0, L().zg)(e.getRecordModel),
                                restrictUnaccessibleProperties: "cross_space_and_read_permissions",
                                spaceId: e.automationModel.spaceId,
                                valueTypes: e.valueTypes.slice(0),
                                featureGates: (0, i(252092).f)({
                                    checkExperimentGateFn: e.checkExperimentGate
                                }),
                                guaranteedPropertyIds: e.guaranteedPropertyIds,
                                enableExistenceGuarantees: e.enableExistenceGuarantees
                            };
                            for (let i of s) {
                                let s = l[i];
                                if (!(0, o().O9)(s) || !(0, o().O9)(s.value)) continue;
                                let {
                                    result: m,
                                    hasCrossSpaceError: v,
                                    stats: y
                                } = (0, Y().typecheckSimpleFormulaOrFormula)({
                                    context: f,
                                    value: s.value
                                });
                                v && u.push({
                                    actionType: "define_variables",
                                    key: i,
                                    type: "invalid_formula_cross_space"
                                }), a = (0, p().AP)(a, y), (0, o().O9)(m.parseErrors) && m.parseErrors.length > 0 && u.push({
                                    actionType: "define_variables",
                                    key: i,
                                    type: "invalid_formula_parse_error"
                                }), (0, o().O9)(m.typeErrors) && m.typeErrors.length > 0 && u.push({
                                    actionType: "define_variables",
                                    key: i,
                                    type: "invalid_formula_type_error",
                                    typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(m.typeErrors),
                                    shouldNotifyOnFailure: !0
                                }), (0, o().O9)(m.typeWarnings) && m.typeWarnings.length > 0 && c.push({
                                    actionType: "define_variables",
                                    key: i,
                                    type: "invalid_formula_type_warning",
                                    typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(m.typeWarnings)
                                }), (0, o().O9)(m.type) || u.push({
                                    actionType: "define_variables",
                                    key: i,
                                    type: "invalid_formula_missing_return_type"
                                });
                                let g = m.type ? ? {
                                        type: "unknown"
                                    },
                                    h = (0, L().$y)({
                                        source: "action",
                                        action_id: t.id,
                                        action_output_type: "variable",
                                        variable_id: i
                                    });
                                !0 === m.resultExists && n.add((0, L().Bk)(h)), r.push({
                                    description: d.formatMessage($.variableDescription, {
                                        readableReturnType: d.formatMessage((0, z().getHumanReadableType)(g)).toLocaleLowerCase()
                                    }),
                                    id: h,
                                    kind: _().FormulaContextValueKind.ContextValue,
                                    name: s.name,
                                    type: g
                                })
                            }
                        }
                        return {
                            value: {
                                validationFailures: u,
                                validationWarnings: c,
                                valueTypes: r,
                                stats: {
                                    formulaStats: a
                                },
                                guaranteedPropertyIds: n
                            }
                        }
                    },
                    execute: async (e, t) => {
                        let i, {
                                formulasModule: r,
                                simpleFormulasModule: l
                            } = e,
                            s = [],
                            {
                                values: u,
                                variableIds: c
                            } = t.getConfig() ? ? {};
                        if ((0, o().O9)(c) && c.length > 0 && (0, o().O9)(u))
                            for (let d of c) {
                                let c = u[d];
                                if ((0, o().O9)(c) && (0, o().O9)(c.value))
                                    if ("simple" === c.value.type) {
                                        let {
                                            result: o,
                                            stats: r
                                        } = await l.executeSimpleFormulaAsyncWithStats({
                                            value: c.value,
                                            context: { ...e,
                                                returnType: {
                                                    type: "text"
                                                }
                                            },
                                            executeFormula: e.executeContextualFormula
                                        });
                                        if (i = (0, p().AP)(i, r), a().Q.isFail(o)) return {
                                            error: new(n()).F_({
                                                actionId: t.id,
                                                cause: (0, K().kH)(o.error),
                                                stats: i
                                            })
                                        };
                                        s.push({
                                            id: (0, L().$y)({
                                                source: "action",
                                                action_id: t.id,
                                                action_output_type: "variable",
                                                variable_id: d
                                            }),
                                            kind: _().FormulaContextValueKind.ContextValue,
                                            value: o.value
                                        })
                                    } else {
                                        let o = performance.now(),
                                            l = await r.executeFormulaAsync(c.value.value ? ? [
                                                [""]
                                            ], e),
                                            u = Math.trunc(performance.now() - o),
                                            f = a().Q.isSuccess(l);
                                        if (i = (0, p().AP)(i, {
                                                formulaTypecheckDurationMs: void 0,
                                                formulaTypecheckSuccess: void 0,
                                                formulaExecutionDurationMs: u,
                                                formulaExecutionSuccess: f,
                                                totalFormulas: 1,
                                                simpleFormulaTypecheckDurationMs: void 0,
                                                simpleFormulaTypecheckSuccess: void 0,
                                                simpleFormulaExecutionDurationMs: void 0,
                                                simpleFormulaExecutionSuccess: void 0,
                                                totalSimpleFormulas: void 0
                                            }), a().Q.isFail(l)) return {
                                            error: new(n()).F_({
                                                actionId: t.id,
                                                cause: (0, K().kH)(l.error),
                                                stats: i
                                            })
                                        };
                                        s.push({
                                            id: (0, L().$y)({
                                                source: "action",
                                                action_id: t.id,
                                                action_output_type: "variable",
                                                variable_id: d
                                            }),
                                            kind: _().FormulaContextValueKind.ContextValue,
                                            value: l.value
                                        })
                                    }
                            }
                        return {
                            value: {
                                values: s,
                                stats: {
                                    formulaStats: i
                                }
                            }
                        }
                    }
                },
                J = (0, i(109939).YK)({
                    duplicateBlocks: {
                        id: "automations.actions.duplicateBlocks",
                        defaultMessage: "Insert blocks"
                    },
                    duplicateBlocksDescription: {
                        id: "automations.actions.duplicateBlocksDescription",
                        defaultMessage: "Insert text or blocks on this page."
                    }
                }),
                X = {
                    type: "duplicate_blocks",
                    invertible: !0,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !0,
                    display: {
                        icon: i(703696).V,
                        name: J.duplicateBlocks,
                        description: J.duplicateBlocksDescription
                    },
                    isAvailableForContext: e => "button_block" === e.contextType,
                    resolveExecutionDependencies: (e, t) => {
                        let a = [{
                            type: "record_permission",
                            pointer: e.automationModel.getParentPointer(),
                            minimumRole: "content_only_editor"
                        }];
                        return e.parentPage && a.push({
                            type: "record_permission",
                            pointer: e.parentPage.pointer,
                            minimumRole: "content_only_editor"
                        }), i(358021).q.return(a)
                    },
                    typecheck: () => ({
                        value: {
                            valueTypes: []
                        }
                    }),
                    execute: async (e, t) => {
                        let r = (t.getBlocks() ? ? [])[0],
                            n = t.getInsertionPoint(),
                            l = {};
                        if ((0, o().O9)(r)) {
                            let t = await e.executeEffectMap.duplicateBlockChildren({
                                blockPointer: {
                                    table: i(682956).ev,
                                    id: r,
                                    spaceId: e.automationModel.getSpaceId()
                                },
                                insertionPoint: n
                            });
                            a().Q.isSuccess(t) && p().hs.aggregateActionStats(l, t.value.stats)
                        }
                        return {
                            value: {
                                stats: l,
                                values: []
                            }
                        }
                    }
                },
                ee = (0, i(109939).YK)({
                    modalConfirmation: {
                        id: "automations.actions.modalConfirmation",
                        defaultMessage: "Show confirmation"
                    },
                    modalConfirmationDescription: {
                        id: "automations.actions.modalConfirmationDescription",
                        defaultMessage: "Shows a confirmation window before proceeding."
                    }
                }),
                et = {
                    type: "modal_confirmation",
                    invertible: void 0,
                    hasSideEffects: !1,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: i(80094).questionMarkCircleIcon,
                        name: ee.modalConfirmation,
                        description: ee.modalConfirmationDescription
                    },
                    isAvailableForContext: e => "button" === e.automation.getTriggerType(),
                    * resolveExecutionDependencies(e, t) {
                        let i = [],
                            a = t.getConfig();
                        return null != a && a.text && i.push(...yield* e.getFormulaContentsDependencies({
                            minimumRole: "reader",
                            value: a.text
                        })), i
                    },
                    typecheck: (e, t) => {
                        let a = t.getConfig();
                        if (!(null != a && a.text)) return {
                            value: {
                                valueTypes: []
                            }
                        };
                        let o = [],
                            r = [],
                            {
                                result: n,
                                hasCrossSpaceError: l,
                                stats: s
                            } = (0, Y().typecheckSimpleFormulaOrFormula)({
                                context: {
                                    formulasModule: e.formulasModule,
                                    handleDataRequest: (0, L().zg)(e.getRecordModel),
                                    restrictUnaccessibleProperties: "cross_space_and_read_permissions",
                                    spaceId: e.automationModel.spaceId,
                                    valueTypes: e.valueTypes.slice(0),
                                    featureGates: (0, i(252092).f)({
                                        checkExperimentGateFn: e.checkExperimentGate
                                    }),
                                    guaranteedPropertyIds: e.guaranteedPropertyIds,
                                    enableExistenceGuarantees: e.enableExistenceGuarantees
                                },
                                value: a.text
                            });
                        return l && o.push({
                            actionType: "modal_confirmation",
                            key: "text",
                            type: "invalid_formula_cross_space"
                        }), n.parseErrors && n.parseErrors.length > 0 && o.push({
                            actionType: "modal_confirmation",
                            type: "invalid_formula_parse_error",
                            key: "text"
                        }), n.typeErrors && n.typeErrors.length > 0 && o.push({
                            actionType: "modal_confirmation",
                            type: "invalid_formula_type_error",
                            key: "text",
                            typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(n.typeErrors),
                            shouldNotifyOnFailure: !0
                        }), n.typeWarnings && n.typeWarnings.length > 0 && r.push({
                            actionType: "modal_confirmation",
                            type: "invalid_formula_type_warning",
                            key: "text",
                            typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(n.typeWarnings)
                        }), n.type || o.push({
                            actionType: "modal_confirmation",
                            type: "invalid_formula_missing_return_type",
                            key: "text"
                        }), {
                            value: {
                                validationFailures: o,
                                validationWarnings: r,
                                valueTypes: [],
                                stats: {
                                    formulaStats: s
                                }
                            }
                        }
                    },
                    execute: async (e, t) => {
                        var o, r, l;
                        let s, {
                                simpleFormulasModule: u
                            } = e,
                            c = t.getConfig(),
                            d = [];
                        if (null != c && c.text) {
                            let {
                                result: i,
                                stats: o
                            } = await u.executeSimpleFormulaAsyncWithStats({
                                value: c.text,
                                context: { ...e,
                                    returnType: {
                                        type: "text"
                                    }
                                },
                                executeFormula: e.executeContextualFormula
                            });
                            if (s = o, a().Q.isFail(i)) return {
                                error: new(n()).F_({
                                    actionId: t.id,
                                    cause: (0, K().kH)(i.error),
                                    stats: s
                                })
                            };
                            d = (0, L().Ht)(i.value)
                        }(0, i(247438).AhH)(d) > i(199850).cK && (d = (0, i(247438).JG8)(d, i(199850).cK, [(0, i(247438).Ey_)("…")]));
                        let p = await e.executeEffectMap.displayModal({
                            format: {
                                icon: null == (o = e.automationModel.getProperties()) ? void 0 : o.icon,
                                text: d,
                                continueButtonText: (null == c || null == (r = c.continue_button) ? void 0 : r.text) ? ? "",
                                cancelButtonText: (null == c || null == (l = c.cancel_button) ? void 0 : l.text) ? ? ""
                            }
                        });
                        return a().Q.isFail(p) ? p : "cancel" === p.value.result ? {
                            value: {
                                formulaStats: s,
                                stopExecution: !0,
                                values: []
                            }
                        } : {
                            value: {
                                values: [],
                                formulaStats: s
                            }
                        }
                    }
                },
                ei = (0, i(109939).YK)({
                    openPage: {
                        id: "automations.actions.openPageOrUrl",
                        defaultMessage: "Open page, form, or URL"
                    },
                    openPageDescription: {
                        id: "automations.actions.openPageOrUrlDescription",
                        defaultMessage: "Opens a specified page or URL."
                    }
                }),
                ea = {
                    type: "open_page",
                    invertible: !1,
                    hasSideEffects: !1,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: i(684668).arrowDiagonalUpRightIcon,
                        name: ei.openPage,
                        description: ei.openPageDescription
                    },
                    isAvailableForContext: e => "button" === e.automation.getTriggerType(),
                    resolveExecutionDependencies: (e, t) => {
                        var a, o;
                        let r = t.getConfig();
                        return (null == r || null == (a = r.target) ? void 0 : a.type) === "page" ? i(358021).q.return([{
                            type: "record_permission",
                            pointer: null == r ? void 0 : r.target.page,
                            minimumRole: "reader"
                        }]) : (null == r || null == (o = r.target) ? void 0 : o.type) === "variable" ? i(358021).q.return(e.getFormulaContextValueDependencies({
                            targetId: r.target.id,
                            minimumRole: "reader"
                        })) : i(358021).q.return([])
                    },
                    typecheck: (e, t) => {
                        let i = t.getConfig();
                        return null != i && i.target ? "page" !== i.target.type || e.getRecordModel(i.target.page) ? {
                            value: {
                                valueTypes: []
                            }
                        } : {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "open_page",
                                    key: "target",
                                    shouldNotifyOnFailure: !0
                                }]
                            }
                        } : {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "open_page",
                                    key: "target"
                                }]
                            }
                        }
                    },
                    execute: (e, t) => {
                        let i = t.getConfig();
                        if (!(null != i && i.target)) return Promise.resolve({
                            error: new(n()).ry({
                                pointer: null == i ? void 0 : i.target,
                                actionId: t.id
                            })
                        });
                        if ("page" === i.target.type || "variable" === i.target.type) {
                            let a;
                            if ("page" === i.target.type) a = i.target.page;
                            else if ("variable" === i.target.type) {
                                let o = (0, L().q$)(e.values, i.target.id);
                                if (!o) return Promise.resolve({
                                    error: new(n()).dd({
                                        actionId: t.id,
                                        source: "action",
                                        variable: void 0
                                    })
                                });
                                if ("block" === o.value.type) a = o.value.value;
                                else {
                                    if ("array" !== o.value.type) return Promise.resolve({
                                        error: new(n()).dd({
                                            actionId: t.id,
                                            source: "action",
                                            variable: o.value
                                        })
                                    });
                                    let e = o.value.values[0];
                                    if (!e || "block" !== e.type) return Promise.resolve({
                                        error: new(n()).dd({
                                            actionId: t.id,
                                            source: "action",
                                            variable: o.value
                                        })
                                    });
                                    a = e.value
                                }
                            } else(0, o().HB)(i.target);
                            e.executeEffectMap.navigateToPage({
                                actionId: t.id,
                                page: a,
                                openIn: t.getOpenPageIn()
                            })
                        } else "url" === i.target.type ? e.executeEffectMap.openUrl({
                            actionId: t.id,
                            url: i.target.url
                        }) : (0, o().HB)(i.target);
                        return Promise.resolve({
                            value: {
                                values: []
                            }
                        })
                    }
                };

            function eo(e) {
                return { ...e,
                    typecheck(t, i) {
                        let {
                            runtimeStats: o
                        } = t, r = o ? p().hs.getOrCreateAction(o, i.pointer, i.type) : void 0, n = performance.now(), l = e.typecheck(t, i), s = "modal_confirmation" === i.type ? 1 : Math.trunc(performance.now() - n);
                        return r && (r.typecheckStartTime = n, r.typecheckDurationMs = s, a().Q.isFail(l) ? r.typecheckSuccess = !1 : (p().hs.aggregateActionStats(r, l.value.stats), r.typecheckSuccess = !0)), l
                    },
                    async execute(t, i) {
                        let {
                            runtimeStats: o
                        } = t, r = o ? p().hs.getOrCreateAction(o, i.pointer, i.type) : void 0, l = performance.now(), s = await e.execute(t, i), u = Math.trunc(performance.now() - l);
                        return r && (r.executionStartTime = l, r.executionDurationMs = u, a().Q.isFail(s) ? (r.executionSuccess = !1, s.error instanceof n().F_ && p().hs.aggregateActionStats(r, {
                            formulaStats: s.error.data.stats
                        })) : (p().hs.aggregateActionStats(r, s.value.stats), r.executionSuccess = !0)), s
                    }
                }
            }
            let er = (0, i(109939).YK)({
                    publishSite: {
                        id: "automations.actions.publishSite",
                        defaultMessage: "Publish site"
                    },
                    publishSiteDescription: {
                        id: "automations.actions.publishSiteDescription",
                        defaultMessage: "Publishes a specified page as a site."
                    }
                }),
                en = {
                    type: "publish_site",
                    invertible: !1,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: i(515388).globeIcon,
                        name: er.publishSite,
                        description: er.publishSiteDescription
                    },
                    isAvailableForContext: e => !!e.checkExperimentGate("publish_site_automation_action") && "event" === e.automation.getTriggerType(),
                    resolveExecutionDependencies: (e, t) => {
                        var a, o;
                        let r = [],
                            n = t.getConfig();
                        return n && ((null == (a = n.target) ? void 0 : a.type) === "page" ? r.push({
                            type: "record_permission",
                            pointer: n.target.page,
                            minimumRole: "read_and_write"
                        }) : (null == n || null == (o = n.target) ? void 0 : o.type) === "variable" && r.push(...e.getFormulaContextValueDependencies({
                            targetId: n.target.id,
                            minimumRole: "read_and_write"
                        }))), i(358021).q.return(r)
                    },
                    typecheck: (e, t) => {
                        let i = t.getConfig();
                        if (!(null != i && i.target)) return {
                            value: {
                                valueTypes: [],
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "publish_site",
                                    key: "target"
                                }]
                            }
                        };
                        if ("page" === i.target.type) {
                            if (!e.getRecordModel(i.target.page)) return {
                                value: {
                                    valueTypes: [],
                                    validationFailures: [{
                                        actionType: "publish_site",
                                        type: "missing_required_config",
                                        key: "target"
                                    }]
                                }
                            }
                        } else if ("variable" === i.target.type) {
                            let t = (0, L().IV)(e.valueTypes, i.target.id);
                            if (!t) return {
                                value: {
                                    valueTypes: [],
                                    validationFailures: [{
                                        actionType: "publish_site",
                                        type: "missing_target_variable",
                                        key: "target"
                                    }]
                                }
                            };
                            if ("block" !== t.type.type) return {
                                value: {
                                    valueTypes: [],
                                    validationFailures: [{
                                        actionType: "publish_site",
                                        type: "invalid_context_value_type",
                                        key: "target"
                                    }]
                                }
                            }
                        } else(0, o().HB)(i.target);
                        return {
                            value: {
                                valueTypes: []
                            }
                        }
                    },
                    execute: async (e, t) => {
                        let a;
                        if (!e.author) return Promise.resolve({
                            error: new(n()).Q({
                                actionId: t.id,
                                contextValueId: "author"
                            })
                        });
                        let l = t.getConfig();
                        if (!(null != l && l.target)) return Promise.resolve({
                            error: new(n()).ry({
                                pointer: void 0,
                                actionId: t.id
                            })
                        });
                        if ("page" === l.target.type) a = l.target.page;
                        else if ("variable" === l.target.type) {
                            let i = (0, L().q$)(e.values, l.target.id);
                            if ((null == i ? void 0 : i.value.type) !== "block") return Promise.resolve({
                                error: new(n()).dd({
                                    actionId: t.id,
                                    source: "action",
                                    variable: null == i ? void 0 : i.value
                                })
                            });
                            a = i.value.value
                        } else(0, o().HB)(l.target);
                        let s = await e.loadRecordModel(a);
                        if (!s) return Promise.resolve({
                            error: new(n()).ry({
                                pointer: a,
                                actionId: t.id
                            })
                        });
                        let u = Date.now(),
                            c = [],
                            d = s.getFormat().site_id,
                            p = {
                                id: d ? ? (0, i(4962).Ay)(),
                                table: i(493758).E,
                                spaceId: s.getSpaceId()
                            };
                        return d || (c.push(r().op.update({
                            pointer: p,
                            path: [],
                            args: {
                                space_id: s.getSpaceId(),
                                type: "site",
                                version: 1,
                                last_version: 0,
                                parent_id: s.id,
                                parent_table: s.table,
                                created_time: u,
                                created_by_id: e.author.id,
                                created_by_table: e.author.table,
                                last_edited_time: u,
                                last_edited_by_id: e.author.id,
                                last_edited_by_table: e.author.table,
                                header: {}
                            }
                        })), c.push(r().op.update({
                            pointer: s.pointer,
                            path: ["format"],
                            args: {
                                site_id: p.id
                            }
                        })), c.push({
                            command: "setPermissionItem",
                            pointer: a,
                            path: ["permissions"],
                            args: {
                                type: "public_permission",
                                role: "reader"
                            }
                        }), await e.executeEffectMap.saveTransaction({
                            actionId: t.id,
                            operations: c,
                            info: {
                                type: "publish_site",
                                pageId: a.id,
                                siteId: p.id
                            }
                        })), Promise.resolve({
                            value: {
                                values: []
                            }
                        })
                    }
                },
                el = (0, i(109939).YK)({
                    queryCollection: {
                        id: "automations.actions.queryCollection",
                        defaultMessage: "Get pages"
                    },
                    queryCollectionDescription: {
                        id: "automations.actions.queryCollectionDescription",
                        defaultMessage: "Get a list of pages from a database with optional filters and sorts, to be used in a subsequent automation step."
                    },
                    queryCollectionPages: {
                        id: "automations.actions.queryCollectionPages",
                        defaultMessage: "Pages from step {stepNumber}"
                    }
                }),
                es = {
                    type: "query_collection",
                    invertible: void 0,
                    hasSideEffects: !1,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: i(330274).magnifyingGlassIcon,
                        name: el.queryCollection,
                        description: el.queryCollectionDescription
                    },
                    isAvailableForContext: () => !1,
                    resolveExecutionDependencies: (e, t) => {
                        let a = t.getConfig();
                        return null != a && a.collection ? i(358021).q.return([{
                            type: "record_permission",
                            pointer: null == a ? void 0 : a.collection,
                            minimumRole: "reader"
                        }]) : i(358021).q.return([])
                    },
                    typecheck: (e, t) => {
                        let i = t.getConfig();
                        if (!(null != i && i.collection)) return {
                            value: {
                                valueTypes: []
                            }
                        };
                        let a = (0, L().$y)({
                                source: "action",
                                action_id: t.id,
                                action_output_type: "pages"
                            }),
                            o = e.automationModel.getActionIds().indexOf(t.id) ? ? -1;
                        return {
                            value: {
                                valueTypes: [{
                                    kind: _().FormulaContextValueKind.ContextValue,
                                    id: a,
                                    name: e.intl.formatMessage(el.queryCollectionPages, {
                                        stepNumber: o + 1
                                    }),
                                    type: {
                                        type: "array",
                                        of: {
                                            type: "block",
                                            collection: i.collection
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    execute: async (e, t) => {
                        let a = t.getConfig();
                        if (!(null != a && a.collection)) return {
                            value: {
                                values: []
                            }
                        };
                        if (!(null != a && a.collection.spaceId)) return {
                            error: new(n()).ry({
                                pointer: null == a ? void 0 : a.collection,
                                actionId: t.id
                            })
                        };
                        let o = {
                                table: i(46241).V,
                                id: null == a ? void 0 : a.collection.id,
                                spaceId: null == a ? void 0 : a.collection.spaceId
                            },
                            r = await e.executeEffectMap.queryCollection({
                                actionId: t.id,
                                collection: o,
                                userTimeZone: e.userTimeZone,
                                filter: null == a ? void 0 : a.filter,
                                sort: null == a ? void 0 : a.sort,
                                limit: null == a ? void 0 : a.limit
                            });
                        if (r.error) return r;
                        let l = (0, L().$y)({
                                source: "action",
                                action_id: t.id,
                                action_output_type: "pages"
                            }),
                            s = {
                                kind: _().FormulaContextValueKind.ContextValue,
                                id: l,
                                value: {
                                    type: "array",
                                    values: r.value.blockIds.map(e => ({
                                        type: "block",
                                        value: {
                                            table: i(682956).ev,
                                            id: e,
                                            spaceId: o.spaceId
                                        }
                                    }))
                                }
                            };
                        return {
                            value: {
                                stats: r.value.stats,
                                values: [s]
                            }
                        }
                    }
                };
            i(823215), i(430670);
            let eu = (0, i(109939).YK)({
                    sendGmailNotification: {
                        id: "automations.actions.sendGmailNotification",
                        defaultMessage: "Send mail…"
                    },
                    sendGmailNotificationDescription: {
                        id: "automations.actions.sendGmailNotificationDescription",
                        defaultMessage: "Sends a notification to one or more people in Notion."
                    }
                }),
                ec = new Set(i(4962).w7),
                ed = {
                    type: "send_gmail_notification",
                    invertible: void 0,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    requiresPriorTransactionsCommitted: !0,
                    display: {
                        icon: i(898869).gmailIcon,
                        name: eu.sendGmailNotification,
                        description: eu.sendGmailNotificationDescription
                    },
                    isDisabledForContext: e => {
                        var t;
                        let a = (null == (t = e.spaceModel) ? void 0 : t.getBotSettings()) ? ? {};
                        return !(0, i(573143).nH)({
                            spaceBotSettings: a,
                            integrationId: i(49361).eg
                        })
                    },
                    isAvailableForContext: e => {
                        let t = e.automation.getTriggerType();
                        if (("canAddAction" === e.checkType || "canSaveAction" === e.checkType && "button" !== t) && !e.actorOnlyEditedUnaliveColumns && !e.subscriptionInfo.isSubscribed) return !1;
                        let a = e.automationActions.filter(e => e.isType("send_gmail_notification"));
                        if (!("canAddAction" === e.checkType ? a.length < 1 : a.length <= 1)) return !1;
                        let o = (0, i(167869).g)(e);
                        return "event" === t || "button" === t || o
                    },
                    * resolveExecutionDependencies(e, t) {
                        var a, o, r;
                        let n = [],
                            l = t.getConfig(),
                            s = null == l ? void 0 : l.external_bot_id;
                        s && n.push({
                            type: "record_permission",
                            pointer: {
                                table: i(890920).GP,
                                id: s
                            },
                            minimumRole: "reader"
                        });
                        let u = [...(null == l || null == (a = l.to) || null == (a = a.value) ? void 0 : a.value) || [], ...(null == l || null == (o = l.cc) || null == (o = o.value) ? void 0 : o.value) || [], ...(null == l || null == (r = l.bcc) || null == (r = r.value) ? void 0 : r.value) || []];
                        return (0, i(247438).Fbh)(u).forEach(e => n.push({
                            type: "record_permission",
                            pointer: {
                                table: i(514214).oo,
                                id: e
                            },
                            minimumRole: "reader"
                        })), null != l && l.email_subject && n.push(...yield* e.getFormulaContentsDependencies({
                            minimumRole: "reader",
                            value: l.email_subject
                        })), null != l && l.email_body && n.push(...yield* e.getFormulaContentsDependencies({
                            minimumRole: "reader",
                            value: l.email_body
                        })), n
                    },
                    typecheck: (e, t) => {
                        var a, o, r, n, l, s;
                        let u;
                        if (!e.subscriptionInfo.isSubscribed) return {
                            value: {
                                validationFailures: [{
                                    type: "requires_subscription_upgrade",
                                    actionType: "send_gmail_notification",
                                    key: "subscription"
                                }]
                            }
                        };
                        let c = t.getConfig();
                        if (!c || !c.external_bot_id) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "external_bot_id"
                                }]
                            }
                        };
                        let d = null == c ? void 0 : c.to;
                        if (!d || !d.value || !d.value.value || (null == (a = d.value.value) ? void 0 : a.length) === 0) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "to"
                                }]
                            }
                        };
                        let f = (0, i(247438).Fbh)(d.value.value).map(t => (0, i(197018).xC)({
                                pointer: {
                                    table: i(514214).oo,
                                    id: t
                                },
                                getRecordModel: e.getRecordModel
                            })),
                            m = (0, i(801109).C3)((0, i(247438).k4p)(d.value.value)).map(e => ({
                                type: "email",
                                value: e
                            })),
                            v = (0, i(247438).IQD)(d.value.value);
                        if (f.every(e => {
                                var t;
                                return (null == (t = e.asActor) ? void 0 : t.table) === i(514214).oo && e.asActor.getIsDeleted()
                            }) && 0 === (0, i(247438).kNd)(d.value.value).length && 0 === m.length && 0 === v.length) return {
                            value: {
                                validationFailures: [{
                                    type: "invalid_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "to"
                                }]
                            }
                        };
                        let y = e.getRecordModel({
                            id: c.external_bot_id,
                            table: i(890920).GP
                        });
                        if (!(null != y && y.alive)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "external_bot_id",
                                    shouldNotifyOnFailure: !0
                                }]
                            }
                        };
                        let g = parseInt(y.getLastEditedAt().toString());
                        if (c.external_bot_id === (null == (o = c.auth_failure) ? void 0 : o.bot_id) && null != (r = c.auth_failure) && r.should_reauthenticate && g < ((null == (n = c.auth_failure) ? void 0 : n.last_failure_time) ? ? 0)) return {
                            value: {
                                validationFailures: [{
                                    type: "invalid_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "external_bot_id"
                                }]
                            }
                        };
                        if (!c.email_subject || !(null != (l = c.email_subject) && l.value) || (0, i(247438).w9s)(c.email_subject.value)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "email_subject"
                                }]
                            }
                        };
                        if (!c.email_body || !(null != (s = c.email_body) && s.value) || (0, i(247438).w9s)(c.email_body.value)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_gmail_notification",
                                    key: "email_body"
                                }]
                            }
                        };
                        let _ = [],
                            h = [],
                            b = {
                                formulasModule: e.formulasModule,
                                handleDataRequest: (0, L().zg)(e.getRecordModel),
                                restrictUnaccessibleProperties: "cross_space_and_read_permissions",
                                spaceId: e.automationModel.spaceId,
                                valueTypes: e.valueTypes.slice(0),
                                featureGates: (0, i(252092).f)({
                                    checkExperimentGateFn: e.checkExperimentGate
                                }),
                                guaranteedPropertyIds: e.guaranteedPropertyIds,
                                enableExistenceGuarantees: e.enableExistenceGuarantees
                            };
                        for (let [t, i] of [
                                ["email_subject", c.email_subject],
                                ["email_body", c.email_body]
                            ]) {
                            let {
                                result: a,
                                hasCrossSpaceError: o,
                                stats: r
                            } = (0, Y().typecheckSimpleFormulaOrFormula)({
                                context: b,
                                value: i
                            });
                            o && _.push({
                                actionType: "send_gmail_notification",
                                key: t,
                                type: "invalid_formula_cross_space"
                            }), u = (0, p().AP)(u, r), a.parseErrors && a.parseErrors.length > 0 && _.push({
                                actionType: "send_gmail_notification",
                                type: "invalid_formula_parse_error",
                                key: t
                            }), a.typeErrors && a.typeErrors.length > 0 && _.push({
                                actionType: "send_gmail_notification",
                                type: "invalid_formula_type_error",
                                key: t,
                                typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(a.typeErrors),
                                shouldNotifyOnFailure: !0
                            }), a.typeWarnings && a.typeWarnings.length > 0 && h.push({
                                actionType: "send_gmail_notification",
                                type: "invalid_formula_type_warning",
                                key: t,
                                typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(a.typeWarnings)
                            }), a.type || _.push({
                                actionType: "send_gmail_notification",
                                type: "invalid_formula_missing_return_type",
                                key: t
                            })
                        }
                        return {
                            value: {
                                validationFailures: _,
                                validationWarnings: h,
                                valueTypes: [],
                                stats: {
                                    formulaStats: u
                                }
                            }
                        }
                    },
                    execute: async (e, t) => {
                        var i, a, o, r, l, s, u, c;
                        let d, p, {
                                simpleFormulasModule: f
                            } = e,
                            m = null == (i = t.getConfig()) ? void 0 : i.to,
                            v = null == (a = t.getConfig()) ? void 0 : a.cc,
                            y = null == (o = t.getConfig()) ? void 0 : o.bcc,
                            g = null == (r = t.getConfig()) ? void 0 : r.reply_to,
                            _ = null == (l = t.getConfig()) ? void 0 : l.from_name,
                            h = null == (s = t.getConfig()) ? void 0 : s.email_subject,
                            b = null == (u = t.getConfig()) ? void 0 : u.email_body,
                            x = null == (c = t.getConfig()) ? void 0 : c.external_bot_id;
                        if (!m || !m.value) return {
                            error: new(n()).k2({
                                actionId: t.id,
                                missingConfigKey: "to"
                            })
                        };
                        if (!h) return {
                            error: new(n()).k2({
                                actionId: t.id,
                                missingConfigKey: "email_subject"
                            })
                        };
                        if (!b) return {
                            error: new(n()).k2({
                                actionId: t.id,
                                missingConfigKey: "email_body"
                            })
                        };
                        if (!x) return {
                            error: new(n()).k2({
                                actionId: t.id,
                                missingConfigKey: "external_bot_id"
                            })
                        };
                        let k = e.automationModel.getCreatedByPointer(),
                            I = void 0 !== e.spaceId ? {
                                spaceId: e.spaceId
                            } : void 0,
                            T = e.experimentService.checkGate({
                                gateName: "automations_send_gmail_page_pointer",
                                actor: k,
                                customIDs: I
                            });
                        try {
                            let i = await ep(t, e, m, f, p, {
                                resolveMentionsFromText: T
                            });
                            p = i.formulaStats;
                            let a = await ep(t, e, v, f, p, {
                                resolveMentionsFromText: T
                            });
                            p = a.formulaStats;
                            let o = await ep(t, e, y, f, p, {
                                resolveMentionsFromText: T
                            });
                            p = o.formulaStats;
                            let r = await ep(t, e, g, f, p, {
                                resolveMentionsFromText: T
                            });
                            p = r.formulaStats, d = {
                                to: i.value,
                                cc: a.value,
                                bcc: o.value,
                                replyTo: r.value.at(0)
                            }
                        } catch (e) {
                            if (e instanceof n()._r) return {
                                error: e
                            };
                            throw e
                        }
                        let F = await ef(t, e, b, f, p);
                        if (p = F.formulaStats, 0 !== d.to.length) {
                            let i = _ && await ef(t, e, _, f, p),
                                a = null == i ? void 0 : i.value;
                            p = (null == i ? void 0 : i.formulaStats) ? ? p;
                            let o = await ef(t, e, h, f, p);
                            p = o.formulaStats;
                            let r = await e.executeEffectMap.sendGmailNotification({
                                action: t,
                                ...d,
                                fromName: a,
                                subject: o.value,
                                body: F.value,
                                intl: e.intl,
                                userTimeZone: e.userTimeZone,
                                ...T ? {
                                    contextValues: e.values
                                } : {}
                            });
                            if (null != r && r.error) return r
                        } else e.executeEffectMap.logMessage({
                            data: {
                                miscDataToConvertToString: {
                                    unresolvedOrEmptyTarget: m,
                                    actionId: t.id,
                                    spaceId: t.pointer.spaceId,
                                    automationId: e.automationModel.id
                                }
                            },
                            from: "sendGmailNotification",
                            level: "info",
                            type: "sendGmailNotificationEmptyResolvedTargets"
                        });
                        return {
                            value: {
                                stats: {
                                    formulaStats: p,
                                    usersMentioned: new Set([...d.to.filter(e => "group" !== e.type), ...d.cc.filter(e => "group" !== e.type), ...d.bcc.filter(e => "group" !== e.type)]).size,
                                    groupsMentioned: new Set([...d.to.filter(e => "group" === e.type), ...d.cc.filter(e => "group" === e.type), ...d.bcc.filter(e => "group" === e.type)]).size
                                },
                                values: []
                            }
                        }
                    }
                };
            async function ep(e, t, o, r, l, s) {
                if (!(null != o && o.value)) return {
                    value: [],
                    formulaStats: l
                };
                let {
                    result: u,
                    stats: c
                } = await r.executeSimpleFormulaAsyncWithStats({
                    value: null == o ? void 0 : o.value,
                    context: { ...t,
                        returnType: {
                            type: "unknown"
                        }
                    },
                    executeFormula: t.executeContextualFormula
                }), d = (0, p().AP)(l, c);
                if (a().Q.isFail(u)) throw new(n()).F_({
                    actionId: e.id,
                    cause: (0, K().kH)(u.error),
                    stats: d
                });
                return {
                    value: function e(t, a) {
                        let o = [];
                        switch (t.type) {
                            case "array":
                                o.push(...t.values.flatMap(t => e(t, a)));
                                break;
                            case "person":
                                t.value.table === i(514214).oo ? ec.has(t.value.id) || o.push({
                                    type: "user",
                                    value: {
                                        table: i(514214).oo,
                                        id: t.value.id
                                    }
                                }) : t.value.table === i(659341).n && o.push({
                                    type: "group",
                                    value: {
                                        table: i(659341).n,
                                        id: t.value.id,
                                        spaceId: t.value.spaceId
                                    }
                                });
                                break;
                            case "text":
                                {
                                    let e = t.value;a.resolveMentionsFromText && ((0, i(247438).Fbh)(e).forEach(e => {
                                        ec.has(e) || o.push({
                                            type: "user",
                                            value: {
                                                table: i(514214).oo,
                                                id: e
                                            }
                                        })
                                    }), (0, i(247438).FAS)(e).forEach(({
                                        groupId: e,
                                        spaceId: t
                                    }) => {
                                        o.push({
                                            type: "group",
                                            value: {
                                                table: i(659341).n,
                                                id: e,
                                                spaceId: t
                                            }
                                        })
                                    })),
                                    (0, i(801109).C3)((0, i(247438).q4_)(e)).forEach(e => {
                                        (0, i(801109).DT)(e) && o.push({
                                            type: "email",
                                            value: e
                                        })
                                    })
                                }
                        }
                        return o
                    }(u.value, s),
                    formulaStats: d
                }
            }
            async function ef(e, t, i, o, r) {
                let {
                    result: l,
                    stats: s
                } = await o.executeSimpleFormulaAsyncWithStats({
                    value: i,
                    context: { ...t,
                        returnType: {
                            type: "text"
                        }
                    },
                    executeFormula: t.executeContextualFormula
                }), u = (0, p().AP)(r, s);
                if (a().Q.isFail(l)) throw new(n()).F_({
                    actionId: e.id,
                    cause: (0, K().kH)(l.error),
                    stats: u
                });
                return {
                    value: (0, L().Ht)(l.value),
                    formulaStats: u
                }
            }
            let em = (0, i(109939).YK)({
                    sendInAppNotification: {
                        id: "automations.actions.sendInAppNotification",
                        defaultMessage: "Send notification to…"
                    },
                    sendInAppNotificationDescription: {
                        id: "automations.actions.sendInAppNotificationDescription",
                        defaultMessage: "Sends a notification to one or more people in Notion."
                    }
                }),
                ev = {
                    type: "send_in_app_notification",
                    invertible: void 0,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    requiresPriorTransactionsCommitted: !0,
                    display: {
                        icon: i(931118).r,
                        name: em.sendInAppNotification,
                        description: em.sendInAppNotificationDescription
                    },
                    isAvailableForContext: e => {
                        let t = e.automation.getTriggerType();
                        if (!("event" === t || "button" === t || (0, i(167869).g)(e)) || "button" !== t && !e.actorOnlyEditedUnaliveColumns && !e.subscriptionInfo.isSubscribed) return !1;
                        let a = e.automationActions.filter(e => e.isType("send_in_app_notification"));
                        return "canAddAction" === e.checkType ? a.length < 1 : a.length <= 1
                    },
                    * resolveExecutionDependencies(e, t) {
                        var a, r, n;
                        let l = [],
                            s = t.getConfig(),
                            u = null == s || null == (a = s.target) ? void 0 : a.type;
                        if (!u) return [];
                        if ("property" === u) {
                            let e = null == s || null == (r = s.target) ? void 0 : r.collectionPointer;
                            e && l.push({
                                type: "record_permission",
                                pointer: e,
                                minimumRole: "reader"
                            })
                        } else if ("formula" === u) {
                            let e = null == s || null == (n = s.target) || null == (n = n.value) ? void 0 : n.value;
                            (0, i(247438).Fbh)(e).forEach(e => l.push({
                                type: "record_permission",
                                pointer: {
                                    table: i(514214).oo,
                                    id: e
                                },
                                minimumRole: "reader"
                            })), (0, i(247438).FAS)(e).forEach(e => l.push({
                                type: "record_permission",
                                pointer: (0, i(659341).S4)({
                                    spacePermissionGroupId: e.groupId,
                                    spaceId: e.spaceId
                                }),
                                minimumRole: "reader"
                            }))
                        } else(0, o().HB)(u);
                        return s.notification_message && l.push(...yield* e.getFormulaContentsDependencies({
                            minimumRole: "reader",
                            value: s.notification_message
                        })), l
                    },
                    typecheck: (e, t) => {
                        var a, r, n, l;
                        let s = t.getConfig(),
                            u = null == s ? void 0 : s.target;
                        if (!s || !u) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_in_app_notification",
                                    key: "target",
                                    shouldNotifyOnFailure: !0
                                }]
                            }
                        };
                        if ("property" === u.type) {
                            if (!u.propertyId) return {
                                value: {
                                    validationFailures: [{
                                        type: "missing_required_config",
                                        actionType: "send_in_app_notification",
                                        key: "propertyId",
                                        shouldNotifyOnFailure: !0
                                    }]
                                }
                            };
                            if (!u.collectionPointer) return {
                                value: {
                                    validationFailures: [{
                                        type: "missing_required_config",
                                        actionType: "send_in_app_notification",
                                        key: "collectionPointer",
                                        shouldNotifyOnFailure: !0
                                    }]
                                }
                            };
                            let t = e.getRecordModel({
                                    id: u.collectionPointer.id,
                                    table: i(46241).V
                                }),
                                a = null == t ? void 0 : t.getSchema()[u.propertyId];
                            if (!a) return {
                                value: {
                                    validationFailures: [{
                                        type: "deleted_required_config",
                                        actionType: "send_in_app_notification",
                                        key: "propertyId",
                                        shouldNotifyOnFailure: !0
                                    }]
                                }
                            };
                            if (!(0, i(568249).J)(a)) return {
                                value: {
                                    validationFailures: [{
                                        type: "invalid_required_config",
                                        actionType: "send_in_app_notification",
                                        key: "propertyId",
                                        shouldNotifyOnFailure: !0
                                    }]
                                }
                            }
                        } else if ("formula" === u.type) {
                            let t = (0, i(247438).Fbh)(null == (r = u.value) ? void 0 : r.value).map(t => (0, i(197018).xC)({
                                    pointer: {
                                        table: i(514214).oo,
                                        id: t
                                    },
                                    getRecordModel: e.getRecordModel
                                })),
                                a = (0, i(247438).FAS)(null == (n = u.value) ? void 0 : n.value).map(t => {
                                    let a = (0, i(659341).gK)({
                                        spacePermissionGroupId: t.groupId,
                                        spaceId: t.spaceId
                                    });
                                    return e.getRecordModel({
                                        table: i(659341).n,
                                        id: a,
                                        spaceId: t.spaceId
                                    })
                                }).filter(o().O9);
                            if (!u.value || !u.value.value || (null == (l = u.value.value) ? void 0 : l.length) === 0) return {
                                value: {
                                    validationFailures: [{
                                        type: "missing_required_config",
                                        actionType: "send_in_app_notification",
                                        key: "formulaValue"
                                    }]
                                }
                            };
                            if (t.every(e => {
                                    var t;
                                    return (null == (t = e.asActor) ? void 0 : t.table) === i(514214).oo && e.asActor.getIsDeleted()
                                }) && a.every(e => !e.isAlive()) && 0 === (0, i(247438).kNd)(u.value.value).length) return {
                                value: {
                                    validationFailures: [{
                                        type: "invalid_required_config",
                                        actionType: "send_in_app_notification",
                                        key: "formulaValue"
                                    }]
                                }
                            }
                        }
                        if (!s.notification_message || !(null != (a = s.notification_message) && a.value) || (0, i(247438).w9s)(s.notification_message.value)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "send_in_app_notification",
                                    key: "notification_message",
                                    shouldNotifyOnFailure: !0
                                }]
                            }
                        };
                        let c = [],
                            d = [],
                            p = {
                                formulasModule: e.formulasModule,
                                handleDataRequest: (0, L().zg)(e.getRecordModel),
                                restrictUnaccessibleProperties: "cross_space_and_read_permissions",
                                spaceId: e.automationModel.spaceId,
                                valueTypes: e.valueTypes.slice(0),
                                featureGates: (0, i(252092).f)({
                                    checkExperimentGateFn: e.checkExperimentGate
                                }),
                                guaranteedPropertyIds: e.guaranteedPropertyIds,
                                enableExistenceGuarantees: e.enableExistenceGuarantees
                            },
                            {
                                result: f,
                                hasCrossSpaceError: m,
                                stats: v
                            } = (0, Y().typecheckSimpleFormulaOrFormula)({
                                context: p,
                                value: s.notification_message
                            });
                        return m && c.push({
                            actionType: "send_in_app_notification",
                            key: "notification_message",
                            type: "invalid_formula_cross_space"
                        }), f.parseErrors && f.parseErrors.length > 0 && c.push({
                            actionType: "send_in_app_notification",
                            key: "notification_message",
                            type: "invalid_formula_parse_error"
                        }), f.typeErrors && f.typeErrors.length > 0 && c.push({
                            actionType: "send_in_app_notification",
                            key: "notification_message",
                            type: "invalid_formula_type_error",
                            typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(f.typeErrors),
                            shouldNotifyOnFailure: !0
                        }), f.typeWarnings && f.typeWarnings.length > 0 && d.push({
                            actionType: "send_in_app_notification",
                            key: "notification_message",
                            type: "invalid_formula_type_warning",
                            typeErrors: e.formulasModule.cleanFormulaTypecheckerErrors(f.typeWarnings)
                        }), f.type || c.push({
                            actionType: "send_in_app_notification",
                            key: "notification_message",
                            type: "invalid_formula_missing_return_type"
                        }), {
                            value: {
                                validationFailures: c,
                                validationWarnings: d,
                                valueTypes: [],
                                stats: {
                                    formulaStats: v
                                }
                            }
                        }
                    },
                    execute: async (e, t) => {
                        var r, l, s, c;
                        let d, {
                                simpleFormulasModule: f
                            } = e,
                            m = null == (r = t.getConfig()) ? void 0 : r.target,
                            v = null == (l = t.getConfig()) ? void 0 : l.notification_message;
                        if (!m || !v) return {
                            error: new(n()).k2({
                                actionId: t.id,
                                missingConfigKey: t.getConfig() ? m ? "notification_message" : "target" : "config"
                            })
                        };
                        let y = {
                                userIds: new Set,
                                groupIds: new Set
                            },
                            g = null == (s = e.formulaVariableResolution) || null == (s = s.thisPageBlockModel) ? void 0 : s.pointer,
                            _ = null == g ? void 0 : g.id,
                            h = m.type;
                        switch (h) {
                            case "formula":
                                if (!m.value) return {
                                    error: new(n()).k2({
                                        actionId: t.id,
                                        missingConfigKey: "target"
                                    })
                                };
                                let {
                                    result: b,
                                    stats: x
                                } = await f.executeSimpleFormulaAsyncWithStats({
                                    value: m.value,
                                    context: { ...e,
                                        returnType: {
                                            type: "person"
                                        }
                                    },
                                    executeFormula: e.executeContextualFormula
                                });
                                if (d = (0, p().AP)(d, x), a().Q.isFail(b)) return {
                                    error: new(n()).F_({
                                        actionId: t.id,
                                        cause: (0, K().kH)(b.error),
                                        stats: d
                                    })
                                };
                                let k = (0, L().Ht)(b.value);
                                (0, i(247438).Fbh)(k).forEach(e => y.userIds.add(e)), (0, i(247438).FAS)(k).forEach(e => {
                                    let t = (0, i(659341).gK)({
                                        spacePermissionGroupId: e.groupId,
                                        spaceId: e.spaceId
                                    });
                                    y.groupIds.add(t)
                                });
                                break;
                            case "property":
                                let I = m.propertyId,
                                    T = m.collectionPointer;
                                if (!I || !T) return {
                                    error: new(n()).k2({
                                        actionId: t.id,
                                        missingConfigKey: I ? "collectionPointer" : "propertyId"
                                    })
                                };
                                let F = await e.loadRecordModel(T);
                                if (!F || !_) return {
                                    error: new(n()).Ob({
                                        actionId: t.id,
                                        propertyId: I,
                                        failedToResolve: {
                                            collectionId: T.id
                                        }
                                    })
                                }; {
                                    let a = await e.loadRecordModel({
                                        table: i(682956).ev,
                                        id: _,
                                        spaceId: t.pointer.spaceId
                                    });
                                    if (!a) return {
                                        error: new(n()).Ob({
                                            actionId: t.id,
                                            propertyId: I,
                                            failedToResolve: {
                                                blockId: _
                                            }
                                        })
                                    };
                                    let o = await e.loadRecordModel([...F.getAdditionalPropertyPointers(), ...a.getAdditionalPropertyPointers()]),
                                        r = u().b4_.fromRecordMap(o),
                                        l = F.getNormalizedSchema(r)[I];
                                    if (!l || !(0, i(568249).J)(l)) return {
                                        error: new(n()).Ob({
                                            actionId: t.id,
                                            propertyId: I,
                                            failedToResolve: {
                                                collectionId: T.id
                                            }
                                        })
                                    };
                                    let s = "created_by" === l.type,
                                        c = "last_edited_by" === l.type;
                                    if (s) {
                                        let e = a.getCreatedByPointer();
                                        e && e.table === i(514214).oo && y.userIds.add(e.id)
                                    } else if (c) {
                                        let e = a.getLastEditedByPointer();
                                        e && e.table === i(514214).oo && y.userIds.add(e.id)
                                    } else {
                                        let e = null == a ? void 0 : a.getProperties(r);
                                        if (!e) return {
                                            error: new(n()).Ob({
                                                actionId: t.id,
                                                propertyId: I,
                                                failedToResolve: {
                                                    blockId: a.id
                                                }
                                            })
                                        }; {
                                            let t = e[I],
                                                o = (0, i(465256).e)({
                                                    textValue: t,
                                                    propertySchema: l,
                                                    blockCreatorPointer: a.getCreatedByPointer()
                                                });
                                            o.length > 0 && o.map(e => {
                                                e.table === i(659341).n ? y.groupIds.add(e.id) : y.userIds.add(e.id)
                                            })
                                        }
                                    }
                                }
                                break;
                            default:
                                (0, o().HB)(h)
                        }
                        let {
                            result: S,
                            stats: M
                        } = await f.executeSimpleFormulaAsyncWithStats({
                            context: { ...e,
                                returnType: {
                                    type: "text"
                                }
                            },
                            executeFormula: e.executeContextualFormula,
                            value: v
                        });
                        if (d = (0, p().AP)(d, M), a().Q.isFail(S)) return {
                            error: new(n()).F_({
                                actionId: t.id,
                                cause: S.error,
                                stats: d
                            })
                        };
                        if (0 !== y.userIds.size || 0 !== y.groupIds.size) {
                            let i = await e.executeEffectMap.sendInAppNotification({
                                actionPointer: t.pointer,
                                pagePointer: null == (c = e.formulaVariableResolution) || null == (c = c.thisPageBlockModel) ? void 0 : c.pointer,
                                spaceId: t.pointer.spaceId,
                                targets: {
                                    userIds: Array.from(y.userIds),
                                    groupIds: Array.from(y.groupIds)
                                },
                                message: (0, L().Ht)(S.value)
                            });
                            if (null != i && i.error) return i
                        } else e.executeEffectMap.logMessage({
                            data: {
                                miscDataToConvertToString: {
                                    unresolvedOrEmptyTarget: m,
                                    actionId: t.id,
                                    spaceId: t.pointer.spaceId,
                                    automationId: e.automationModel.id
                                }
                            },
                            from: "sendInAppNotification",
                            level: "info",
                            type: "sendInAppNotificationEmptyResolvedTargets"
                        });
                        return {
                            value: {
                                stats: {
                                    usersMentioned: y.userIds.size,
                                    groupsMentioned: y.groupIds.size,
                                    formulaStats: d
                                },
                                values: []
                            }
                        }
                    }
                };
            var ey = () => i(484811);
            let eg = (0, i(109939).YK)({
                    httpRequest: {
                        id: "automations.actions.httpRequest",
                        defaultMessage: "Send webhook"
                    },
                    httpRequestDescription: {
                        id: "automations.actions.httpRequestDescription",
                        defaultMessage: "Calls a custom URL."
                    }
                }),
                e_ = {
                    type: "http_request",
                    invertible: !1,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    requiresPriorTransactionsCommitted: !0,
                    display: {
                        icon: i(501148).Z,
                        name: eg.httpRequest,
                        description: eg.httpRequestDescription
                    },
                    isAvailableForContext: e => {
                        let t = e.automation.getTriggerType();
                        if (("canAddAction" === e.checkType || "canSaveAction" === e.checkType && "button" !== t) && !e.actorOnlyEditedUnaliveColumns && !e.subscriptionInfo.isSubscribed) return !1;
                        let a = e.automationActions.filter(e => e.isType("http_request"));
                        return !!("canAddAction" === e.checkType ? a.length < 5 : a.length <= 5) && ("event" === t || "button" === t || (0, i(167869).g)(e))
                    },
                    isDisabledForContext: e => {
                        let t = e.spaceModel;
                        if (!t) return !1;
                        let i = t.getSettings();
                        return !!t.isEnterprisePlan() && !!i.disallow_webhook_automation_action
                    },
                    resolveExecutionDependencies: (e, t) => i(358021).q.return([]),
                    typecheck: (e, t) => {
                        var i, a, o;
                        if (!e.subscriptionInfo.isSubscribed) return {
                            value: {
                                validationFailures: [{
                                    type: "requires_subscription_upgrade",
                                    actionType: "http_request",
                                    key: "subscription"
                                }]
                            }
                        };
                        let r = null == (i = t.getConfig()) ? void 0 : i.url,
                            n = [];
                        (0, ey().gY)(r, {
                            allowLocalhost: "local" === e.env
                        }) || n.push({
                            type: "invalid_url",
                            actionType: "http_request",
                            key: "url"
                        }), ((null == (a = t.getConfig()) || null == (a = a.customHeaders) ? void 0 : a.length) || 0) > ey().qu && n.push({
                            type: "too_many_custom_headers",
                            actionType: "http_request",
                            key: "customHeaders"
                        });
                        let l = new Set;
                        for (let e of (null == (o = t.getConfig()) ? void 0 : o.customHeaders) || [])(!e.key || !(0, ey().LM)(e.key) || l.has(e.key.toLowerCase())) && e.id && n.push({
                            type: "empty_custom_header_field",
                            actionType: "http_request",
                            key: ["customHeaders", e.id, "key"]
                        }), e.value && (0, ey().br)(e.value) || !e.id || n.push({
                            type: "empty_custom_header_field",
                            actionType: "http_request",
                            key: ["customHeaders", e.id, "value"]
                        }), l.add(e.key.toLowerCase());
                        return n.length > 0 ? {
                            value: {
                                validationFailures: n
                            }
                        } : {
                            value: {
                                valueTypes: []
                            }
                        }
                    },
                    execute: async (e, t) => {
                        var i;
                        let a = null == (i = e.formulaVariableResolution) ? void 0 : i.thisPageBlockModel,
                            o = await e.executeEffectMap.sendHttpRequest({
                                action: t,
                                pagePointer: null == a ? void 0 : a.pointer,
                                eventId: e.eventId
                            });
                        return o.error ? o : {
                            value: {
                                values: []
                            }
                        }
                    }
                },
                eh = (0, i(109939).YK)({
                    slackNotification: {
                        defaultMessage: "Send Slack notification to…",
                        id: "automations.actions.slackNotification"
                    },
                    slackNotificationDescription: {
                        defaultMessage: "Sends a Slack notification to a user or channel.",
                        id: "automations.actions.slackNotificationDescription"
                    }
                }),
                eb = {
                    type: "slack_notification",
                    invertible: void 0,
                    hasSideEffects: !1,
                    hasNewReversableEffect: !1,
                    requiresPriorTransactionsCommitted: !0,
                    display: {
                        icon: i(378111).slackIcon,
                        name: eh.slackNotification,
                        description: eh.slackNotificationDescription
                    },
                    isAvailableForContext: e => {
                        if ("event" === e.contextType) {
                            let t = e.automationActions.filter(e => e.isType("slack_notification"));
                            return "canAddAction" === e.checkType ? t.length < 1 : t.length <= 1
                        }
                        return !!e.automation.isButtonType() || !!(0, i(167869).g)(e) || !1
                    },
                    resolveExecutionDependencies: (e, t) => {
                        let a = t.getConfig();
                        return null != a && a.external_bot_id ? i(358021).q.return([{
                            minimumRole: "reader",
                            pointer: {
                                id: a.external_bot_id,
                                table: i(890920).GP
                            },
                            type: "record_permission"
                        }]) : i(358021).q.return([])
                    },
                    typecheck: (e, t) => {
                        if (!e.subscriptionInfo.isSubscribed) return {
                            value: {
                                validationFailures: [{
                                    type: "requires_subscription_upgrade",
                                    actionType: "slack_notification",
                                    key: "subscription"
                                }]
                            }
                        };
                        let a = t.getConfig();
                        if (!(null != a && a.external_bot_id)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "slack_notification",
                                    key: "external_bot_id"
                                }]
                            }
                        };
                        let o = e.getRecordModel({
                            id: a.external_bot_id,
                            table: i(890920).GP
                        });
                        return o && o.alive ? a.target ? {
                            value: {
                                valueTypes: []
                            }
                        } : {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "slack_notification",
                                    key: "target"
                                }]
                            }
                        } : {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_value",
                                    actionType: "slack_notification",
                                    key: "external_bot_id",
                                    shouldNotifyOnFailure: !0
                                }]
                            }
                        }
                    },
                    execute: async (e, t) => {
                        var i, r;
                        let l, s, u = null == (i = t.getConfig()) ? void 0 : i.custom_message;
                        if ((0, o().O9)(u)) {
                            let {
                                simpleFormulasModule: i
                            } = e, {
                                result: o,
                                stats: r
                            } = await i.executeSimpleFormulaAsyncWithStats({
                                value: u,
                                context: { ...e,
                                    returnType: {
                                        type: "text"
                                    }
                                },
                                executeFormula: e.executeContextualFormula
                            });
                            if (a().Q.isFail(o)) return {
                                error: new(n()).F_({
                                    actionId: t.id,
                                    cause: (0, K().kH)(o.error),
                                    stats: r
                                })
                            };
                            s = (0, L().Ht)(o.value)
                        }
                        if ((0, o().O9)(e.event)) {
                            let t = null == (r = e.event) || null == (r = r.data.record_diff.before) ? void 0 : r.properties;
                            l = {
                                type: e.event.type,
                                beforeBlockValueProperties: (0, o().O9)(t) ? t : void 0,
                                authors: e.event.authors,
                                record_id: e.event.record_id,
                                space_id: e.event.space_id
                            }
                        }
                        let c = await e.executeEffectMap.sendSlackNotification({
                            action: t,
                            event: l,
                            customMessage: s
                        });
                        return a().Q.isFail(c) ? c : {
                            value: {
                                values: []
                            }
                        }
                    }
                },
                ex = (0, i(109939).YK)({
                    updatePages: {
                        id: "automations.actions.updatePages",
                        defaultMessage: "Edit pages in…"
                    },
                    updatePagesDescription: {
                        id: "automations.actions.updatePagesDescription",
                        defaultMessage: "Edits the properties of specified pages in a database."
                    }
                }),
                ek = new Set(["button", "event"]),
                eI = {
                    type: "update_pages",
                    invertible: !0,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    display: {
                        icon: i(636).pencilLineIcon,
                        name: ex.updatePages,
                        description: ex.updatePagesDescription
                    },
                    isAvailableForContext: e => {
                        let t = e.automation.getTriggerType(),
                            a = (0, i(167869).g)(e);
                        if ("event" === t || a) {
                            if (!e.subscriptionInfo.isSubscribed && !e.actorOnlyEditedUnaliveColumns) return !1;
                            let t = e.automationActions.filter(e => {
                                var t;
                                return e.isType("update_pages") && (null == (t = e.getConfig()) || null == (t = t.target) ? void 0 : t.type) === "collection"
                            });
                            return "canAddAction" === e.checkType ? t.length < 5 : t.length <= 5
                        }
                        return ek.has(t) || a
                    },
                    * resolveExecutionDependencies(e, t) {
                        var i, a;
                        let o = [],
                            r = t.getConfig();
                        if ((null == r || null == (i = r.target) ? void 0 : i.type) === "collection" ? o.push({
                                type: "record_permission",
                                pointer: null == r ? void 0 : r.target.collection,
                                minimumRole: "content_only_editor"
                            }) : (null == r || null == (a = r.target) ? void 0 : a.type) === "variable" && o.push(...e.getFormulaContextValueDependencies({
                                minimumRole: "content_only_editor",
                                targetId: r.target.id
                            })), null != r && r.values)
                            for (let t of Object.values(r.values)) null != t && t.value && o.push(...yield* e.getFormulaContentsDependencies({
                                minimumRole: "reader",
                                value: t.value
                            }));
                        return o
                    },
                    typecheck: (e, t) => {
                        let r = t.getConfig();
                        if (!(null != r && r.target)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "update_pages",
                                    key: "target",
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        let n = f({
                            target: r.target,
                            context: e
                        });
                        if (a().Q.isFail(n)) {
                            let e, t = n.error;
                            return "collection_in_trash" === t ? e = {
                                actionType: "update_pages",
                                key: "collection",
                                type: "collection_in_trash",
                                shouldNotifyOnFailure: !0
                            } : "block_in_trash" === t ? e = {
                                actionType: "update_pages",
                                key: "block",
                                type: "block_in_trash"
                            } : "missing_target_variable" === t ? e = {
                                actionType: "update_pages",
                                key: "target",
                                type: "missing_target_variable",
                                shouldNotifyOnFailure: !0
                            } : "cross_space_property_in_filter" === t ? e = {
                                actionType: "update_pages",
                                key: "filter",
                                type: "cross_space_property_in_filter"
                            } : (0, o().HB)(t), {
                                value: {
                                    validationFailures: [e]
                                }
                            }
                        }
                        let l = n.value.collectionModel;
                        if (!(0, o().O9)(null == r ? void 0 : r.properties)) return {
                            value: {
                                validationFailures: [{
                                    type: "missing_required_config",
                                    actionType: "update_pages",
                                    key: "property",
                                    shouldNotifyOnFailure: !0
                                }],
                                validationWarnings: []
                            }
                        };
                        let {
                            validationFailures: s,
                            validationWarnings: u,
                            formulaStats: c
                        } = (0, i(179595).o)({
                            collectionPointer: null == l ? void 0 : l.getSpaceShardedPointer(),
                            collectionSchema: null == l ? void 0 : l.getNormalizedSchema(e.getRecordModel),
                            config: r,
                            context: e,
                            actionType: "update_pages"
                        });
                        return {
                            value: {
                                valueTypes: [],
                                validationFailures: s,
                                validationWarnings: u,
                                stats: {
                                    formulaStats: c
                                }
                            }
                        }
                    },
                    execute: async (e, t) => {
                        let r = t.getConfig();
                        if (!(null != r && r.target)) return {
                            error: new(n()).ry({
                                pointer: null == r ? void 0 : r.target,
                                actionId: t.id
                            })
                        };
                        let {
                            FormulaContextValueKind: l
                        } = e.formulasModule, s = e.values.filter(e => e.kind !== l.ThisRow);
                        return await m({
                            context: e,
                            action: t,
                            target: r.target,
                            extraLogData: {
                                editedPropertyIds: r.properties
                            },
                            logFrom: "updatePages",
                            metricNames: {
                                skippedInvalidRecord: "automations.update_pages_action.skipped_invalid_record",
                                skippedRecordInTrash: "automations.update_pages_action.skipped_record_in_trash",
                                singleConcurrentUpdate: "automations.update_pages_action.single_concurrent_update",
                                concurrentUpdateSome: "automations.update_pages_action.concurrent_update_some",
                                concurrentUpdateAll: "automations.update_pages_action.concurrent_update_all"
                            },
                            async getOperationsForPage(o) {
                                let {
                                    pageModel: n,
                                    collectionPointer: u,
                                    collectionSchema: c,
                                    getRecordModelAdditionalProperties: d
                                } = o, p = n.getProperties(d), f = await (0, i(179595).d)({
                                    config: r,
                                    page: n,
                                    collectionPointer: u,
                                    collectionSchema: c,
                                    actionId: t.id,
                                    context: { ...e,
                                        values: [...s, {
                                            kind: l.ThisRow,
                                            value: {
                                                type: "block",
                                                value: n.pointer
                                            }
                                        }]
                                    },
                                    getCurrentPropertyValue: e => null == p ? void 0 : p[e]
                                });
                                return a().Q.isFail(f) ? f : {
                                    value: {
                                        operations: f.value.values,
                                        stats: f.value.stats
                                    }
                                }
                            },
                            getSaveTransactionInfo(e) {
                                let {
                                    collectionPointer: t,
                                    pageIds: i,
                                    collectionSchema: a
                                } = e;
                                return {
                                    type: "update_pages",
                                    pageIds: i,
                                    collection: t,
                                    editedProperties: (r.properties ? ? []).map(e => {
                                        let t = null == a ? void 0 : a[e];
                                        if (t) return {
                                            id: e,
                                            type: t.type
                                        }
                                    }).filter(o().O9)
                                }
                            }
                        })
                    }
                },
                eT = (0, i(109939).YK)({
                    actionName: {
                        id: "automations.actions.worker",
                        defaultMessage: "Run worker"
                    },
                    actionDescription: {
                        id: "automations.actions.worker.description",
                        defaultMessage: "Executes a worker capability"
                    }
                }),
                eF = {
                    type: "worker",
                    invertible: !1,
                    hasSideEffects: !0,
                    hasNewReversableEffect: !1,
                    requiresPriorTransactionsCommitted: !0,
                    display: {
                        icon: i(501148).Z,
                        name: eT.actionName,
                        description: eT.actionDescription
                    },
                    isAvailableForContext: e => !!e.checkExperimentGate("workers") && !!e.checkExperimentGate("workers_automations"),
                    isDisabledForContext: e => !1,
                    resolveExecutionDependencies: (e, t) => i(358021).q.return([]),
                    typecheck: (e, t) => {
                        let i = t.getConfig(),
                            a = [];
                        return (null != i && i.workerId || a.push({
                            type: "missing_required_config",
                            actionType: "worker",
                            key: "workerId"
                        }), null != i && i.capabilityKey || a.push({
                            type: "missing_required_config",
                            actionType: "worker",
                            key: "capabilityKey"
                        }), a.length > 0) ? {
                            value: {
                                validationFailures: a
                            }
                        } : {
                            value: {
                                valueTypes: []
                            }
                        }
                    },
                    execute: async (e, t) => {
                        var i;
                        let o = null == (i = e.formulaVariableResolution) ? void 0 : i.thisPageBlockModel,
                            r = await e.executeEffectMap.executeWorker({
                                action: t,
                                pagePointer: null == o ? void 0 : o.pointer,
                                eventId: e.eventId
                            });
                        return a().Q.isFail(r) ? r : {
                            value: {
                                values: []
                            }
                        }
                    }
                },
                eS = {
                    query_collection: eo(es),
                    create_page: eo(i(478284).I),
                    update_pages: eo(eI),
                    open_page: eo(ea),
                    slack_notification: eo(eb),
                    duplicate_blocks: eo(X),
                    modal_confirmation: eo(et),
                    complete_sprint: eo({
                        type: "complete_sprint",
                        invertible: !1,
                        hasSideEffects: !0,
                        hasNewReversableEffect: !1,
                        isAvailableForContext: e => "recurrence" === e.automation.getTriggerType(),
                        resolveExecutionDependencies: (e, t) => {
                            let a = t.getConfig(),
                                o = [];
                            return null != a && a.sprint_collection && o.push({
                                type: "record_permission",
                                pointer: a.sprint_collection,
                                minimumRole: "editor"
                            }), null != a && a.task_collection && o.push({
                                type: "record_permission",
                                pointer: a.task_collection,
                                minimumRole: "editor"
                            }), i(358021).q.return(o)
                        },
                        typecheck: (e, t) => ({
                            value: {
                                valueTypes: []
                            }
                        }),
                        execute: async (e, t) => {
                            var o, r, l, s, c, d, p, f, m, v, y;
                            let g, b, x = t.getConfig();
                            if (!x) return {
                                error: new(n()).k2({
                                    actionId: t.id
                                })
                            };
                            let k = i(412951).RecordMap.create(),
                                I = await e.loadRecordModel(x.sprint_collection);
                            if (!I) return {
                                error: new(n()).WY({
                                    actionId: t.id,
                                    pointer: x.sprint_collection
                                })
                            };
                            let T = I.getAdditionalPropertyPointers(),
                                F = await e.loadRecordModel(T);
                            k.addModel(I), k.assign(F);
                            let S = u().b4_.fromRecordMap(F),
                                M = I.getNormalizedSchema(S);
                            if (!(0, i(613211).wy)({
                                    appUri: null == (o = I.getFormat()) ? void 0 : o.app_config_uri,
                                    collectionSchema: M
                                })) return {
                                error: new(n()).Qo({
                                    actionId: t.id,
                                    sprintCollectionPointer: I.pointer
                                })
                            };
                            let w = null == (r = I.getFormat()) || null == (r = r.app_uri_map) ? void 0 : r[i(11448).Hx.StatusV2];
                            if (!w) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.sprint_collection,
                                    property: i(11448).Hx.StatusV2
                                })
                            };
                            let C = null == (l = I.getFormat()) || null == (l = l.app_uri_map) ? void 0 : l[i(11448).Hx.UniqueId];
                            if (!C) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.sprint_collection,
                                    property: i(11448).Hx.UniqueId
                                })
                            };
                            let P = null == (s = I.getFormat()) || null == (s = s.app_uri_map) ? void 0 : s[i(11448).Hx.Dates];
                            if (!P) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.sprint_collection,
                                    property: i(11448).Hx.Dates
                                })
                            };
                            let E = M[w];
                            if (!E || "status" !== E.type) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.sprint_collection,
                                    property: i(11448).Hx.StatusV2
                                })
                            };
                            let R = null == (c = E.options) || null == (c = c.find(e => e.id === i(11448).aJ)) ? void 0 : c.value,
                                D = null == (d = E.options) || null == (d = d.find(e => e.id === i(11448).el)) ? void 0 : d.value,
                                A = null == (p = E.options) || null == (p = p.find(e => e.id === i(11448).Xk)) ? void 0 : p.value,
                                O = null == (f = E.options) || null == (f = f.find(e => e.id === i(11448).tO)) ? void 0 : f.value,
                                N = null == (m = E.options) || null == (m = m.find(e => e.id === i(11448).Jd)) ? void 0 : m.value;
                            if (!R || !A || !O || !N) return {
                                error: new(n())._r("invalid_property_schema", `Could not find required options for ${i(11448).Hx.StatusV2}.`)
                            };
                            let q = {
                                    id: e.automationModel.id,
                                    table: i(199850).yB,
                                    spaceId: I.id
                                },
                                V = e.automationModel;
                            if (!V.isType("recurrence")) return {
                                error: new(n()).WY({
                                    actionId: t.id,
                                    pointer: q
                                })
                            };
                            let Q = await e.loadRecordModel(x.task_collection);
                            if (!Q) return {
                                error: new(n()).WY({
                                    actionId: t.id,
                                    pointer: x.task_collection
                                })
                            };
                            k.addModel(Q);
                            let W = null == (v = Q.getFormat()) || null == (v = v.app_uri_map) ? void 0 : v[i(11448).yx.Status];
                            if (!W) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.task_collection,
                                    property: i(11448).yx.Status
                                })
                            };
                            let G = null == (y = Q.getFormat()) || null == (y = y.app_uri_map) ? void 0 : y[i(11448).yx.TaskToSprintRelation];
                            if (!G) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.task_collection,
                                    property: i(11448).yx.TaskToSprintRelation
                                })
                            };
                            let B = await e.loadRecordModel(Q.getAdditionalPropertyPointers()),
                                H = Q.getNormalizedSchema(u().b4_.fromRecordMap(B)),
                                U = H[W];
                            if (!U || "status" !== U.type) return {
                                error: new(n()).Dr({
                                    actionId: t.id,
                                    collectionPointer: x.task_collection,
                                    property: i(11448).yx.Status
                                })
                            };
                            let K = (0, i(308292).Q6)(e.intl, U);
                            if (!K) return {
                                error: new(n())._r("invalid_property_schema", `Could not find required group for ${i(11448).yx.Status}.`)
                            };
                            let z = function(e) {
                                let t, a;
                                if (e.forEach(e => {
                                        e.kind === _().FormulaContextValueKind.ContextValue && (e.id === i(167869).GF && "date" === e.value.type && (0, i(943003).oM)(e.value.value) ? t = e.value.value : e.id === i(167869).uM && "text" === e.value.type && (a = (0, i(247438).q4_)(e.value.value)))
                                    }), t && a) return {
                                    nextSprintDateRange: t,
                                    completeSprintActionType: a
                                }
                            }(e.values);
                            if (z) g = z.completeSprintActionType, b = z.nextSprintDateRange;
                            else {
                                let t = V.getTrigger().recurrence;
                                if (!t) throw new(n()).yc;
                                let a = (0, i(433837).Vv)(t);
                                if (!a) return {
                                    error: new(n())._r("misc", `Invalid recurrence for sprint recurrence automation: ${V.id}`)
                                };
                                b = (0, i(433837).wI)({
                                    userTimeZone: e.userTimeZone,
                                    sprintSchedule: a
                                }), g = x.complete_sprint_action
                            }
                            let L = {
                                    spaceId: I.space_id,
                                    automationContext: {
                                        action: t,
                                        context: e
                                    },
                                    sprintCollectionContext: {
                                        sprintCollectionPointer: x.sprint_collection,
                                        sprintCollectionSchema: M,
                                        nextSprintDateRange: b,
                                        sprintDatePropertyId: P,
                                        sprintStatusCurrentOptionName: A,
                                        sprintStatusFutureOptionName: N,
                                        sprintStatusNextOptionName: O,
                                        sprintStatusPastOptionName: R,
                                        sprintStatusLastOptionName: D,
                                        sprintStatusPropertyId: w,
                                        sprintStatusPropertySchema: E,
                                        sprintUniqueIdPropertyId: C
                                    },
                                    taskCollectionContext: {
                                        taskCollectionPointer: x.task_collection,
                                        taskCollectionSchema: H,
                                        taskSprintRelationPropertyId: G,
                                        taskStatusCompleteGroupName: K,
                                        taskStatusPropertyId: W,
                                        taskStatusPropertySchema: U
                                    },
                                    recordMap: k
                                },
                                Y = await h({
                                    completeSprintAction: g,
                                    completeSprintExecutionContext: L
                                });
                            return a().Q.isFail(Y) ? Y : {
                                value: {
                                    values: []
                                }
                            }
                        }
                    }),
                    send_in_app_notification: eo(ev),
                    send_gmail_notification: eo(ed),
                    define_variables: eo(j),
                    http_request: eo(e_),
                    publish_site: eo(en),
                    worker: eo(eF),
                    archive_pages: eo(g)
                };

            function eM(e) {
                return eS[e]
            }

            function ew(e) {
                return (0, i(167869)._N)(e).map(e => eS[e])
            }
        }
    }
]);