"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [43444], {
        158100: (e, t, o) => {
            o.d(t, {
                bd: () => s,
                UA: () => a,
                C8: () => c,
                XM: () => r,
                ET: () => p,
                aO: () => v,
                gP: () => I,
                OX: () => u,
                gM: () => d,
                hq: () => y,
                Wm: () => f,
                Rh: () => g,
                pp: () => _,
                QT: () => m,
                Ll: () => h
            }), o(16280), o(944114), o(898992), o(354520), o(672577), o(581454);
            var l = () => o(388507);
            let i = {
                select_and_customize_template: ["templateSelection", "features", "viewsSelection"],
                customize_template: ["features", "viewsSelection"],
                select_and_build_with_ai: ["templateSelection", "setupGeneratorInput", "setupGeneratorBuilding", "features", "viewsSelection"],
                build_with_ai: ["setupGeneratorInput", "setupGeneratorBuilding", "features", "viewsSelection"],
                new_user_template_onboarding: ["templateSelection", "setupGeneratorBuilding", "features", "viewsSelection"]
            };
            var n = () => o(932292);

            function r({
                origin: e,
                parentStore: t,
                flowId: l,
                dataSourceAnalytics: i
            }) {
                return {
                    collectionTemplate: void 0,
                    origin: e,
                    flowId: l ? ? (0, o(4962).Ay)(),
                    collectionTemplatesSearchQuery: void 0,
                    parentStore: t,
                    dataSourceAnalytics: i
                }
            }

            function a({
                collectionViewTemplates: e,
                featureTemplateSelections: t
            }) {
                let o = [];
                for (let t of e) o.push(...(0, l().CA)({
                    template: t,
                    dependencyMap: t.dependencyMap || {}
                }).map(e => e.templateId));
                return t.filter(e => "required" !== e.optionality && !o.includes(e.template.templateId) && m(e.template))
            }

            function p({
                template: e,
                existingCollectionInfo: t
            }) {
                let o = [, , , ].fill(""),
                    l = ((null == t ? void 0 : t.collectionViewBlockStore.getCollectionViewIds()) ? ? []).length > 1,
                    i = new Map;
                if (l) {
                    let t = !1;
                    for (let o of e.value.templateItems)
                        if ("optionalDefaultOn" === o.optionality && "collection_view" === n().globalWorkflowTemplates.featureFromId(o.pointer).type) {
                            if (!t) {
                                t = !0;
                                continue
                            }
                            i.set(o.pointer, "optionalDefaultOff")
                        }
                }
                return {
                    recordTitles: o,
                    featureTemplateSelections: e.value.templateItems.map(e => s(e.pointer, i.get(e.pointer) ? ? e.optionality))
                }
            }

            function c(e) {
                let {
                    collectionTemplate: t,
                    origin: l,
                    flowId: i,
                    parentStore: n,
                    dataSourceAnalytics: r,
                    existingCollectionInfo: a
                } = e;
                return {
                    collectionTemplate: t,
                    userCustomizations: p({
                        template: t,
                        existingCollectionInfo: a
                    }),
                    origin: l,
                    flowId: i ? ? (0, o(4962).Ay)(),
                    parentStore: n,
                    collectionTemplatesSearchQuery: void 0,
                    previewCollectionInfo: void 0,
                    dataSourceAnalytics: r
                }
            }

            function s(e, t, i = n().globalWorkflowTemplates) {
                let r = i.fromId(e);
                if (!(0, l().Jb)(r)) throw Error(`Template ${e} in collection template is not a feature template`);
                return "required" === t ? {
                    template: r,
                    optionality: "required",
                    selected: !0
                } : "optionalDefaultOn" === t ? {
                    template: r,
                    optionality: "optionalDefaultOn",
                    selected: !0
                } : "optionalDefaultOff" === t ? {
                    template: r,
                    optionality: "optionalDefaultOff",
                    selected: !1
                } : void(0, o(722371).HB)(t)
            }

            function u(e) {
                if (!e.collectionTemplate) throw Error("Collection template cannot be undefined");
                return {
                    collectionTemplate: e.collectionTemplate,
                    userCustomizations: e.userCustomizations,
                    origin: e.origin,
                    flowId: e.flowId,
                    collectionTemplatesSearchQuery: e.collectionTemplatesSearchQuery,
                    parentStore: e.parentStore,
                    previewCollectionInfo: e.previewCollectionInfo,
                    dataSourceAnalytics: e.dataSourceAnalytics
                }
            }

            function d(e) {
                var t, o, l, i, n, r;
                return {
                    origin: e.origin,
                    has_selection_modal_search_query: ((null == (t = e.collectionTemplatesSearchQuery) ? void 0 : t.length) ? ? 0) > 0,
                    flow_id: e.flowId,
                    collection_template_id: null == (o = e.collectionTemplate) ? void 0 : o.templateId,
                    data_source_from: null == (l = e.dataSourceAnalytics) ? void 0 : l.dataSourceFrom,
                    data_source_session_id: null == (i = e.dataSourceAnalytics) ? void 0 : i.dataSourceSessionId,
                    destination_type: null == (n = e.parentStore) ? void 0 : n.table,
                    destination_id: null == (r = e.parentStore) ? void 0 : r.id
                }
            }

            function m(e) {
                return "property" === e.type && "relation" !== e.value.type || "compound" === e.type
            }

            function f(e) {
                let {
                    version: t
                } = e;
                return i[t]
            }

            function y(e) {
                let {
                    currentStepIndex: t
                } = e;
                return f(e)[t]
            }

            function v(e, t) {
                let {
                    currentStepIndex: o,
                    collectionTemplate: l
                } = e, i = f(e);
                for (let e = o + 1; e < i.length; e++) {
                    let o = i[e];
                    if (!(l && w({
                            step: o,
                            template: l,
                            action: "next",
                            isPhone: t
                        }))) return e
                }
                return -1
            }

            function g(e, t) {
                return v(e, t) >= 0
            }

            function _(e, t) {
                return I(e, t) >= 0
            }

            function I(e, t) {
                let {
                    currentStepIndex: o,
                    collectionTemplate: l
                } = e, i = f(e);
                for (let e = o - 1; e >= 0; e--) {
                    let o = i[e];
                    if (!(l && w({
                            step: o,
                            template: l,
                            action: "previous",
                            isPhone: t
                        }))) return e
                }
                return -1
            }

            function w({
                step: e,
                template: t,
                action: l,
                isPhone: i
            }) {
                switch (e) {
                    case "viewsSelection":
                        return i || n().globalWorkflowTemplates.allOfType({
                            templateIds: t.value.templateItems.map(e => e.pointer),
                            type: "collection_view"
                        }).length <= 1;
                    case "templateSelection":
                    case "features":
                    case "setupGeneratorInput":
                        return !1;
                    case "setupGeneratorBuilding":
                        return "previous" === l;
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function h({
                userCustomizations: e,
                templateId: t
            }) {
                let o = e.featureTemplateSelections,
                    l = o.find(e => e.template.templateId === t);
                if (!l || "required" === l.optionality) return e;
                let i = { ...l,
                    selected: !l.selected
                };
                return { ...e,
                    featureTemplateSelections: o.map(e => e.template.templateId === t ? i : e),
                    prevFeatureTemplateSelections: o
                }
            }
        },
        192458: (e, t, o) => {
            function l(e) {
                var t;
                let l, {
                        collectionViewBlockStore: i,
                        collectionStore: n,
                        instanceMap: r
                    } = e,
                    p = n.id,
                    c = r[(0, o(441155)._)({
                        table: "collection",
                        id: p
                    })] ? ? {};
                if (!i.isReady() || !n.isReady()) return;
                let s = !1,
                    u = i.getCollectionViewIds().map(e => {
                        let t = o(547131).p.createChildStore(i, {
                                table: "collection_view",
                                id: e
                            }),
                            n = t.getModel();
                        if (!n) {
                            s = !0;
                            return
                        }
                        let r = t.getCollectionStore();
                        if (!r) {
                            s = !0;
                            return
                        }
                        let u = !1;
                        if (l || "table" !== n.getType() || (l = e, u = !0), r.id === p) return function(e) {
                            let t, {
                                    collectionViewStore: l,
                                    templateIdToInstancePointersMap: i,
                                    schema: n,
                                    isFirstTableView: r
                                } = e,
                                p = l.id,
                                c = l.getName(),
                                s = l.getType(),
                                u = a(i, "collection_view", p);
                            return r && !c && (t = o(582881).Gs, c = (0, o(932292).getWorkflowTemplateName)(o(932292).globalWorkflowTemplates.fromId(t))), !c && s && (c = o(962299).A.intl.formatMessage(o(4587).X[s])), {
                                type: "collection_view",
                                name: c,
                                id: p,
                                viewType: s,
                                format: l.getNormalizedFormat(n) ? ? {},
                                query: l.getRawQuery(),
                                templateId: u,
                                isFirstTableView: r,
                                defaultBuiltinTemplateIdToMapTo: t
                            }
                        }({
                            collectionViewStore: t,
                            templateIdToInstancePointersMap: c,
                            schema: r.getSchema(),
                            isFirstTableView: u
                        })
                    }).filter(o(722371).O9);
                if (s) return;
                let d = [];
                for (let e of u)
                    if (e.isFirstTableView) {
                        let t = e.format;
                        if (t.table_properties) {
                            for (let e of t.table_properties) e.visible && d.push(e.property);
                            if (d.length > 0) break
                        }
                    }
                let m = n.getSchema(),
                    f = Object.entries(m).map(([e, t]) => {
                        if (t) return function(e) {
                            var t, l;
                            let {
                                propertyId: i,
                                schema: n,
                                instanceMap: r,
                                templateIdToInstancePointersMap: p
                            } = e, c = "relation" === n.type ? (0, o(114588).z)(n) : void 0, s = c ? (t = r, l = c, a(t[(0, o(441155)._)({
                                table: "collection",
                                id: l
                            })] ? ? {}, "collection", l)) : void 0;
                            return {
                                type: "property",
                                id: i,
                                name: n.name,
                                schema: n,
                                relatedCollectionTemplateId: s,
                                templateId: a(p, "property", i),
                                isSupported: o(747202).Pg(n)
                            }
                        }({
                            propertyId: e,
                            schema: t,
                            instanceMap: r,
                            templateIdToInstancePointersMap: c
                        })
                    }).filter(o(722371).O9),
                    y = n.getLayoutStore();
                if (y && !y.isReady()) return;
                let v = null == y ? void 0 : y.getModel(),
                    g = v ? function(e) {
                        let t, {
                                layoutModel: l,
                                templateIdToInstancePointersMap: i
                            } = e,
                            n = a(i, "layout", l.id);
                        if (n) {
                            let e = o(932292).globalWorkflowTemplates.fromId(n);
                            "layout" === e.type && (t = e.name)
                        }
                        return {
                            id: l.id,
                            type: "layout",
                            templateId: n,
                            name: t,
                            layout: l.getRawModules(),
                            spaceId: l.spaceId
                        }
                    }({
                        layoutModel: v,
                        templateIdToInstancePointersMap: c
                    }) : void 0,
                    _ = n.getAutomationStores().map(e => e.pointer),
                    I = null == (t = n.getIcon()) ? void 0 : t.icon,
                    w = I && (0, o(111012).T8)(I) ? I : void 0,
                    h = n.getDescription();
                return {
                    type: "collection",
                    id: p,
                    description: h,
                    descriptionAsString: (0, o(247438).q4_)(h),
                    schema: m,
                    templateId: a(c, "collection", p),
                    name: (0, o(247438).q4_)(n.getName()),
                    pageTemplateIds: n.getTemplatePages(),
                    format: n.getFormat(),
                    icon: w,
                    properties: f,
                    collectionViews: u,
                    firstTableViewId: l,
                    layout: g,
                    templateIdToInstancePointersMap: c,
                    tableOrderPropertyIds: d,
                    automationPointers: _
                }
            }

            function i(e) {
                return "property" === e.type && "title" === e.id
            }

            function n(e) {
                return i(e) && "Name" === e.schema.name
            }

            function r(e) {
                let {
                    collectionInfo: t,
                    pageStore: l,
                    instanceMap: i,
                    recordMap: n
                } = e, r = (0, o(247438).q4_)(l.getTitleValue()) || "Untitled", p = i[(0, o(441155)._)({
                    table: "collection",
                    id: t.id
                })] ? ? {}, c = new Set;
                for (let e of Object.keys(l.getProperties())) "title" !== e && c.add(e);
                return {
                    type: "block",
                    id: l.id,
                    recordMap: n,
                    templateId: a(p, "block", l.id),
                    name: r,
                    propertyIds: c,
                    spaceId: l.getSpaceId()
                }
            }

            function a(e, t, o) {
                var l;
                return null == (l = p(e, t, o)) ? void 0 : l.templateId
            }

            function p(e, t, o) {
                for (let [l, i] of Object.entries(e))
                    for (let e of i)
                        if (e.type === t && e.id === o) return { ...e,
                            templateId: l
                        }
            }
            o.d(t, {
                NU: () => n,
                O: () => i,
                Rf: () => l,
                SU: () => a,
                cV: () => r,
                fn: () => p
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(581454)
        },
        213732: (e, t, o) => {
            function l({
                collectionStore: e,
                modules: t,
                dependencyMap: i
            }) {
                var r, a;
                return n({
                    modules: t,
                    mapper: (r = e, a = i, e => (0, o(717673).CB)({
                        collectionStore: r,
                        sourceTemplateType: "property",
                        sourcePrimitiveId: e,
                        dependencyMap: a
                    }))
                })
            }

            function i(e) {
                let t = new Set;
                return n({
                    modules: e,
                    mapper: e => (t.add((0, o(898582).vO)({
                        type: "property",
                        id: e
                    })), e)
                }), t
            }

            function n({
                modules: e,
                mapper: t
            }) {
                let o = e => e ? e.map(e => (function({
                    module: e,
                    mapper: t
                }) {
                    switch (e.type) {
                        case "bottomControls":
                        case "relationsGroup":
                        case "cover":
                        case "discussions":
                        case "editor":
                        case "expandedBacklinks":
                        case "formQuestion":
                        case "formSubmit":
                        case "formTitle":
                        case "inlinePageSections":
                        case "placeholder":
                        case "properties":
                        case "transcript":
                        case "viewsMain":
                            break;
                        case "property":
                            return { ...e,
                                propertyId: t(e.propertyId)
                            };
                        case "titleWithIcon":
                            return { ...e,
                                propertyIds: e.propertyIds ? e.propertyIds.map(t) : void 0
                            };
                        case "views":
                            return { ...e,
                                relation_pointer: e.relation_pointer ? { ...e.relation_pointer,
                                    property: t(e.relation_pointer.property)
                                } : void 0
                            }
                    }
                    return e
                })({
                    module: e,
                    mapper: t
                })) : void 0;
                return {
                    page_layout_schema: o(e.page_layout_schema),
                    page_info_layout_schema: o(e.page_info_layout_schema),
                    form_layout_schema: o(e.form_layout_schema),
                    person_profile_page_main: o(e.person_profile_page_main),
                    person_profile_page_details: o(e.person_profile_page_details)
                }
            }
            o.d(t, {
                CF: () => i,
                f: () => l
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(581454)
        },
        441155: (e, t, o) => {
            o.d(t, {
                _: () => l
            });

            function l(e) {
                return `${e.table}:${e.id}`
            }
        },
        747202: (e, t, o) => {
            o.d(t, {
                Kg: () => i,
                Pg: () => n,
                nN: () => r,
                vW: () => a
            }), o(944114), o(898992), o(672577);
            var l = () => o(898582);

            function i({
                propertyId: e,
                propertyTemplate: t,
                firstTableViewInfo: o
            }) {
                var l;
                let n = null == o || null == (l = o.format.table_properties) ? void 0 : l.find(t => t.property === e);
                if (n) {
                    let {
                        property: e,
                        ...o
                    } = n;
                    t.tablePropertyFormat = o
                }
            }

            function n(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case "title":
                    case "text":
                    case "checkbox":
                    case "number":
                    case "person":
                    case "file":
                    case "url":
                    case "email":
                    case "phone_number":
                    case "created_time":
                    case "created_by":
                    case "last_edited_time":
                    case "last_edited_by":
                    case "last_visited_time":
                    case "date":
                    case "select":
                    case "multi_select":
                    case "status":
                    case "formula":
                    case "relation":
                    case "auto_increment_id":
                    case "button":
                        return !0;
                    case "rollup":
                    case "location":
                    case "verification":
                    case "place":
                        return !1;
                    default:
                        (0, o(722371).HB)(t)
                }
            }

            function r(e) {
                if ("relation" === e.type) return {
                    type: "relation",
                    name: e.name,
                    autoRelate: e.autoRelate
                };
                let t = (0, o(381453).mg)(e);
                if (delete t.workflow_template_instance, (0, o(9247).DQ)(t) && t.options)
                    for (let e of t.options) delete e.collectionIds;
                return t
            }

            function a({
                propertyTemplateValue: e,
                mapper: t
            }) {
                let i = [];
                if ((0, o(388507).$G)({
                        object: e,
                        callback: e => {
                            let t = e.property;
                            i.push(t)
                        }
                    }), 0 === i.length) return;
                let n = {};
                for (let e of i) t.populateDependencyMap((0, l().vO)({
                    type: "property",
                    id: e
                }), n);
                return n
            }
        },
        829808: (e, t, o) => {
            o.d(t, {
                E_: () => a,
                HQ: () => u,
                I5: () => p,
                ZQ: () => r
            }), o(16280), o(898992), o(823215), o(354520), o(581454), o(296540);
            var l = () => o(431666),
                i = () => o(875964),
                n = o(474848);

            function r({
                transaction: e,
                collectionStore: t,
                templateId: l,
                instance: i,
                logger: n
            }) {
                n.debug(`Creating/updating workflow template instance record for "${l}".`);
                let a = t.getSpaceId(),
                    p = i.id;
                if ("automation" === i.type) {
                    let i = {
                        table: o(199850).yB,
                        id: p,
                        spaceId: a
                    };
                    (0, o(421439).y4)({
                        store: o(698405).d.createChildStore(t, i),
                        operation: o(488307).op.set({
                            pointer: i,
                            path: ["properties", "workflow_template_instance"],
                            args: {
                                template_id: l
                            }
                        }),
                        transaction: e
                    })
                } else if ("block" === i.type) {
                    let i = {
                        table: o(682956).ev,
                        id: p,
                        spaceId: a
                    };
                    (0, o(421439).y4)({
                        store: o(970831).B.createChildStore(t, i),
                        operation: o(488307).op.set({
                            pointer: i,
                            path: ["format", "workflow_template_instance"],
                            args: {
                                template_id: l
                            }
                        }),
                        transaction: e
                    })
                } else if ("collection" === i.type) {
                    let i = {
                        table: o(46241).V,
                        id: p,
                        spaceId: a
                    };
                    (0, o(421439).y4)({
                        store: t,
                        operation: o(488307).op.set({
                            pointer: i,
                            path: ["format", "workflow_template_instance"],
                            args: {
                                template_id: l
                            }
                        }),
                        transaction: e
                    })
                } else if ("collection_view" === i.type) {
                    let i = {
                        table: o(435544).G,
                        id: p,
                        spaceId: a
                    };
                    (0, o(421439).y4)({
                        store: o(547131).p.createChildStore(t, i),
                        operation: o(488307).op.set({
                            pointer: i,
                            path: ["format", "workflow_template_instance"],
                            args: {
                                template_id: l
                            }
                        }),
                        transaction: e
                    })
                } else if ("layout" === i.type) {
                    let i = {
                        table: o(322683).zx,
                        id: p,
                        spaceId: a
                    };
                    (0, o(421439).y4)({
                        store: o(97746).K.createChildStore(t, i),
                        operation: o(488307).op.set({
                            pointer: i,
                            path: ["format", "workflow_template_instance"],
                            args: {
                                template_id: l
                            }
                        }),
                        transaction: e
                    })
                } else if ("compound" === i.type) {
                    if (i.instancePointers.length < 2) throw Error(`Compound template instance ${i.id} must contain 2 or more instances`);
                    let n = i.instancePointers.map(e => {
                        switch (e.type) {
                            case "automation":
                                return {
                                    type: "automation",
                                    id: e.id
                                };
                            case "block":
                                return {
                                    type: "block",
                                    id: e.id
                                };
                            case "collection_view":
                                return {
                                    type: "collection_view",
                                    id: e.id
                                };
                            case "layout":
                                return {
                                    type: "layout",
                                    id: e.id
                                };
                            case "property":
                                return {
                                    type: "property",
                                    id: e.id
                                }
                        }(0, o(722371).HB)(e)
                    });
                    (0, o(421439).y4)({
                        store: t,
                        operation: {
                            command: "keyedObjectListUpdate",
                            pointer: t.pointer,
                            path: ["format", "compound_workflow_template_instances"],
                            args: {
                                value: {
                                    template_id: l,
                                    id: i.id,
                                    instance_pointers: n
                                }
                            }
                        },
                        transaction: e
                    })
                } else "property" === i.type ? (0, o(421439).y4)({
                    store: t,
                    operation: o(488307).op.update({
                        pointer: t.pointer,
                        path: ["schema", i.id],
                        args: {
                            workflow_template_instance: {
                                template_id: l
                            }
                        }
                    }),
                    transaction: e
                }) : (0, o(722371).HB)(i)
            }

            function a({
                environment: e,
                collectionStore: t,
                propertyId: l,
                compoundTemplateInstancesToDelete: i,
                collectionViewStore: n,
                from: r
            }) {
                if (!i.every(e => e.templateId === o(582881).z$ || e.templateId === o(582881).qz)) return !1;
                let p = (0, o(717673).aL)({
                        environment: e,
                        collectionStore: t,
                        compoundTemplateInstancesToDelete: i
                    }),
                    c = o(381453).sb(p.filter(e => "property" === e.type).map(e => e.id)),
                    u = t.getSchema(),
                    d = c.map(e => {
                        var t;
                        if (e === l) return;
                        let i = u[e];
                        if (!i) throw Error(`Property ${e} not found`);
                        if (i.name) return i.name;
                        let n = null == (t = i.workflow_template_instance) ? void 0 : t.template_id;
                        if (!n) throw Error(`Property ${e} has no workflow template id`);
                        let r = o(932292).globalWorkflowTemplates.fromId(n);
                        return (0, o(932292).getWorkflowTemplateName)(r)
                    }).filter(o(722371).O9);
                return s({
                    environment: e,
                    collectionStore: t,
                    propertyIds: c,
                    otherPropertyNames: d,
                    collectionViewStore: n,
                    from: r
                }), !0
            }

            function p({
                environment: e,
                collectionStore: t,
                propertyId: l,
                collectionViewStore: i,
                from: n
            }) {
                let r = t.getSchema(),
                    a = Object.keys(r).filter(e => (0, o(843641).Do)({
                        collectionStore: t,
                        propertyId: e
                    }) || (0, o(843641).k$)(e)),
                    c = a.map(e => {
                        var i;
                        if (e === l) return;
                        let n = null == (i = r[e]) ? void 0 : i.name;
                        if (n) return n;
                        if ((0, o(843641).Do)({
                                collectionStore: t,
                                propertyId: e
                            })) return o(962299).A.formatMessage(o(774086).Gl.verificationPropertyName);
                        if ((0, o(843641).k$)(e)) return o(962299).A.formatMessage(o(774086).Gl.ownerPropertyName);
                        throw Error(`Property ${e} must be a verification or owner property`)
                    }).filter(o(722371).O9);
                return s({
                    environment: e,
                    collectionStore: t,
                    propertyIds: a,
                    otherPropertyNames: c,
                    collectionViewStore: i,
                    from: n
                }), !0
            }
            let c = {
                style0: {
                    fontWeight: o(699422).Wy.bold
                },
                style1: {
                    display: "inline",
                    fontWeight: o(699422).Wy.bold
                }
            };

            function s({
                environment: e,
                collectionStore: t,
                propertyIds: r,
                otherPropertyNames: a,
                collectionViewStore: p,
                from: u
            }) {
                let d = [{
                        label: (0, n.jsx)(o(109939).sA, {
                            id: "workflowTemplateInstanceActions.deleteRequiredProperty.deleteOption",
                            defaultMessage: "{count, plural, one {Delete {count} property} other {Delete {count} properties}}",
                            values: {
                                count: r.length
                            }
                        }),
                        color: "red",
                        onAccept: () => (function({
                            environment: e,
                            collectionStore: t,
                            collectionViewStore: n,
                            propertyIds: r,
                            from: a
                        }) {
                            let p = t.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "workflowTemplateInstanceActions.handleDeleteAccept",
                                environment: e,
                                canUndo: !0,
                                cellTarget: p ? {
                                    spaceWithId: p
                                } : void 0,
                                perform: o => {
                                    let p = t.getSchema();
                                    for (let c of r) {
                                        (0, i().B)({
                                            environment: e,
                                            collectionStore: t,
                                            schema: p,
                                            property: c,
                                            transaction: o
                                        });
                                        let r = p[c];
                                        r && (0, l().i)({
                                            environment: e,
                                            collectionStore: t,
                                            collectionViewStore: n,
                                            property_type: r.type,
                                            from: a,
                                            property: c
                                        })
                                    }
                                }
                            })
                        })({
                            environment: e,
                            collectionStore: t,
                            collectionViewStore: p,
                            propertyIds: r,
                            from: u
                        })
                    }],
                    m = new Intl.ListFormat(o(849917).locale, {
                        style: "long",
                        type: "conjunction"
                    }),
                    f = (0, n.jsx)(o(109939).sA, {
                        id: "workflowTemplateInstanceActions.deleteRequiredProperty.deletePropertyFromDb",
                        defaultMessage: "Delete this property from <bold>{databaseName}</bold>? {otherPropertyNames} will also be deleted",
                        values: {
                            bold: e => (0, n.jsx)("span", {
                                style: c.style0,
                                children: e
                            }),
                            databaseName: (0, n.jsx)(o(627918).A, {
                                style: c.style1,
                                shouldWrap: !0,
                                store: t
                            }),
                            otherPropertyNames: m.format(a)
                        }
                    });
                o(647095).ui({
                    message: (0, n.jsx)("span", {
                        children: f
                    }),
                    showCancel: !0,
                    keepFocus: !0,
                    innerStyle: {
                        width: 400
                    },
                    items: d
                })
            }

            function u(e) {
                let {
                    environment: t,
                    transaction: l,
                    collectionStore: i,
                    instance: n
                } = e;
                (0, o(717673).aI)({
                    environment: t,
                    instancePointer: n,
                    inMemoryRecordCache: i.inMemoryRecordCache
                }) || (0, o(421439).y4)({
                    store: i,
                    operation: {
                        pointer: i.pointer,
                        command: "keyedObjectListRemove",
                        path: ["format", "compound_workflow_template_instances"],
                        args: {
                            remove: {
                                id: n.id
                            }
                        }
                    },
                    transaction: l
                })
            }
        },
        898582: (e, t, o) => {
            o.d(t, {
                D6: () => m,
                Jp: () => l,
                OU: () => c,
                PT: () => d,
                To: () => p,
                rW: () => s,
                rs: () => r,
                vO: () => a
            }), o(898992), o(354520), o(672577), o(581454);
            let l = "/icons/document_gray.svg",
                i = {
                    collection_view: "View",
                    layout: "Layout",
                    collection: "Collection",
                    property: "Property",
                    compound: "Compound",
                    block: "Block",
                    automation: "Automation"
                },
                n = Symbol("BuilderKey"),
                r = a({
                    type: "property",
                    id: o(439368).rn
                });

            function a(e) {
                return (0, o(722371).GV)(`${e.type}:${e.id}`, n)
            }

            function p(e) {
                if ("explicit-undefined" !== e) return e
            }

            function c(e) {
                return void 0 === e ? "explicit-undefined" : e
            }

            function s(e, t) {
                var n;
                let r = a(t),
                    p = null == (n = e.state.builderSettings) ? void 0 : n[r],
                    c = function e(t, l) {
                        var n, r, p;
                        let c = a(l),
                            s = null == (n = t.state.builderSettings) ? void 0 : n[c],
                            m = u(s, l),
                            f = t.state.createCopy && !m ? void 0 : l.templateId;
                        if ((null == s ? void 0 : s.templateId) !== void 0) return null == s ? void 0 : s.templateId;
                        if (void 0 !== f) return f;
                        let y = "collection" === l.type ? "" : `${e(t,t.collectionInfo)}.`;
                        return (0, o(192458).O)(l) ? `${y}title${i.property}` : "collection_view" === l.type && l.defaultBuiltinTemplateIdToMapTo && (null == s ? void 0 : s.shouldMapToTemplate) !== !1 ? l.defaultBuiltinTemplateIdToMapTo : l.name && "uninstantiated_template" !== l.type ? y + (r = l.name, p = l.type, `${d(r)}${i[p]}`) : "layout" === l.type ? `${y}default${i.layout}` : "automation" === l.type ? `${y}${l.referrerName}${i.automation}` : void 0
                    }(e, t),
                    s = c ? function(e, t) {
                        let l = {},
                            i = e.templateRegistryMap.get(t);
                        if (!i) return l;
                        if (l.name = (0, o(932292).getWorkflowTemplateName)(i), "property" !== i.type && "collection_view" !== i.type && "block" !== i.type && (l.description = i.description), "property" === i.type && (l.propertyOptionsType = i.propertyOptionsType, l.relatedCollectionTemplateId = i.relatedCollectionTemplateId), "collection" === i.type) {
                            var n;
                            l.hasMinimalOnboarding = null == (n = i.value.onboarding) ? void 0 : n.isMinimal, l.singularItemName = i.value.targetCollection.itemName.singular, l.pluralItemName = i.value.targetCollection.itemName.plural, l.category = i.category
                        }
                        if ("collection" !== i.type && e.sourceCollectionTemplate) {
                            let o = e.sourceCollectionTemplate.value.templateItems.find(e => e.pointer === t);
                            o ? (l.optionality = o.optionality, l.isInSettings = o.isInSettings) : l.includeInCollectionTemplate = !1
                        }
                        return "compound" === i.type && (l.icon = i.icon, l.templateItems = i.value.templateItems.map(t => {
                            let o = e.templateIdToBuilderKeyMap.get(t.pointer);
                            if (o) return {
                                pointer: o,
                                optionality: t.optionality
                            }
                        }).filter(o(722371).O9)), l
                    }(e, e.state.createCopy && t.templateId ? t.templateId : c) : {};
                return {
                    templateId: c,
                    isDeleted: (null == p ? void 0 : p.isDeleted) ? ? "uninstantiated_template" === t.type,
                    description: ((null == p ? void 0 : p.description) ? ? s.description) || void 0,
                    category: (null == p ? void 0 : p.category) ? ? s.category,
                    optionality: (0, o(192458).O)(t) ? "required" : (null == p ? void 0 : p.optionality) ? ? s.optionality ? ? "optionalDefaultOn",
                    hasMinimalOnboarding: (null == p ? void 0 : p.hasMinimalOnboarding) ? ? s.hasMinimalOnboarding ? ? !1,
                    singularItemName: (null == p ? void 0 : p.singularItemName) ? ? s.singularItemName ? ? "item",
                    pluralItemName: (null == p ? void 0 : p.pluralItemName) ? ? s.pluralItemName ? ? "items",
                    isInSettings: (null == p ? void 0 : p.isInSettings) ? ? s.isInSettings ? ? !1,
                    propertyOptionsType: (null == p ? void 0 : p.propertyOptionsType) ? ? (null == s ? void 0 : s.propertyOptionsType) ? ? "content",
                    includeInCollectionTemplate: (null == p ? void 0 : p.includeInCollectionTemplate) ? ? (null == s ? void 0 : s.includeInCollectionTemplate) ? ? !0,
                    templateItems: (null == p ? void 0 : p.templateItems) ? ? (null == s ? void 0 : s.templateItems) ? ? [],
                    name: (null == p ? void 0 : p.name) ? ? (null == s ? void 0 : s.name) ? ? t.name ? ? ("layout" === t.type ? "Layout" : ""),
                    icon: (null == p ? void 0 : p.icon) ? ? (null == s ? void 0 : s.icon) ? ? l,
                    bypassCreateCopy: u(p, t),
                    relatedCollectionTemplateId: (null == p ? void 0 : p.relatedCollectionTemplateId) ? ? (null == s ? void 0 : s.relatedCollectionTemplateId),
                    ignore: (null == p ? void 0 : p.ignore) ? ? !!(0, o(192458).NU)(t),
                    shouldMapToTemplate: (null == p ? void 0 : p.shouldMapToTemplate) ? ? ("collection_view" === t.type && !!t.defaultBuiltinTemplateIdToMapTo)
                }
            }

            function u(e, t) {
                return (null == e ? void 0 : e.bypassCreateCopy) !== void 0 ? e.bypassCreateCopy : "property" === t.type && "relation" === t.schema.type
            }

            function d(e) {
                return (0, o(763230).xQ)(e)
            }

            function m(e, t, {
                includeType: o = !0
            } = {}) {
                let l, i, n;
                if ("string" == typeof t ? (i = t, n = e.featureInfoMap.get(t)) : i = a(n = t), n) {
                    let t = s(e, n),
                        i = t.name || t.templateId;
                    l = `${i}${o?` (${n.type.replace(/_/g," ")})`:""}`
                }
                return l || i
            }
        }
    }
]);