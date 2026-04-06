"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [4287, 23644], {
        13475: (e, t, r) => {
            r.d(t, {
                W: () => n
            });

            function n(e) {
                r(460961).dg.setState(e)
            }
        },
        18274: (e, t, r) => {
            r.d(t, {
                A: () => o
            }), r(296540);
            var n = r(474848);

            function o(e) {
                return (0, n.jsx)(r(746434).E, {
                    style: e.style,
                    content: (0, n.jsx)(r(109939).sA, {
                        id: "betaBadgeComponent.label",
                        defaultMessage: "Beta"
                    })
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
                    blocks: l
                } = e, a = (0, r(385941).Z)();
                if (!a) throw Error("No root store.");
                if (n.length > 0) {
                    let e = n[0],
                        a = r(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!a || !a.props.onInsertAbove) throw Error("No Selectable found.");
                    let p = a.props.onInsertAbove({
                        insertStores: l,
                        transaction: o
                    });
                    return i || (0, r(854924).t)({
                        environment: t,
                        stores: p
                    }), p
                } {
                    let e = a.getContentStore(),
                        n = l.map(t => (0, r(135674).B)({
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
                        nameMessage: l,
                        descriptionMessage: a,
                        ...p
                    } = e,
                    {
                        rootId: s,
                        previewRootId: u,
                        spaceId: c
                    } = (n = e, o = t, i = (0, r(599412).H)(o), n.sources[i] || n.sources[r(599412).q]);
                return { ...p,
                    id: l.id,
                    rootId: s,
                    spaceId: c,
                    previewRootId: u,
                    name: t.formatMessage(l),
                    description: a ? t.formatMessage(a) : void 0
                }
            }
            r.d(t, {
                B: () => o,
                o: () => n
            }), r(581454)
        },
        425749: (e, t, r) => {
            r.d(t, {
                I$: () => l,
                R2: () => s,
                WF: () => p,
                bZ: () => a,
                cE: () => o,
                jX: () => i,
                rz: () => u
            });
            var n = () => r(381453);

            function o(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function l(e) {
                return !!(void 0 !== e && (0, r(722371).Xk)(i, e))
            }

            function a() {
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

            function p(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function u(e) {
                for (let t of s)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        460961: (e, t, r) => {
            r.d(t, {
                O_: () => i,
                dg: () => n,
                iQ: () => o
            });
            let n = new(r(245541)).R({
                    key: "slipperySlopeSidebarSelectedTab",
                    namespace: r(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                o = r(546605).Store.createValue(void 0, {
                    name: "slipperySlopeOpenBackgroundChatRequestStore"
                });

            function i() {
                o.setState((0, r(4962).Ay)())
            }
        },
        487016: (e, t, r) => {
            r.d(t, {
                Bi: () => a,
                My: () => l,
                ZM: () => s,
                _M: () => p,
                navigateToWorkflowTemplateOnboardingModal: () => u
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(581454);
            var n = () => r(388507),
                o = () => r(715144),
                i = () => r(717673);

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: r
            }) {
                var a, p;
                let s = (null == (a = t.getParentBlockStore()) ? void 0 : a.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === s.length) return;
                let u = [];
                for (let e of r) {
                    let r = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    r && u.push({
                        property: r.id,
                        visible: !(0, n().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== u.length)
                    for (let t of s) {
                        let r = (null == (p = t.getPropertyFormatsStore("table_properties")) ? void 0 : p.getValue()) ? ? [],
                            n = new Set(r.map(e => e.property)),
                            i = u.filter(e => !n.has(e.property));
                        0 !== i.length && (0, o().z)({
                            stores: [t],
                            update: {
                                table_properties: [...r, ...i]
                            },
                            transaction: e
                        })
                    }
            }

            function a({
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
                let l = t.getFormat().collection_page_properties ? ? [],
                    p = new Set(l.map(e => e.property)),
                    s = n.filter(e => !p.has(e.property));
                s.length && (0, o().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...l, ...s]
                    },
                    transaction: e
                })
            }

            function p({
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
                                let l = r(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: n.blockId
                                }).getTitleStore();
                                l && r(41403).yr({
                                    environment: e,
                                    transaction: o,
                                    tokens: i,
                                    index: 0,
                                    store: l
                                })
                            }
                            let l = t.getParentStore();
                            if ((null == l ? void 0 : l.table) === r(682956).ev) {
                                let e = l.getContentIds();
                                (0, r(173157).z)({
                                    store: l,
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

            function s({
                environment: e,
                userAction: t,
                result: n,
                existingCollectionViewBlockStore: o,
                existingCollectionStore: i
            }) {
                if ("canceled" !== n.type) {
                    if ("accepted_empty_collection" === n.type && i) {
                        let o = i.getKeyStore("name"),
                            l = (0, r(247438).x9d)(n.newCollectionTitle);
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
                                    value: l
                                })
                            })
                        }
                    }
                    if (o) {
                        var l;
                        let e = null == (l = (0, r(444610).U)(o)) ? void 0 : l.settingsStore;
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
            async function u({
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
                let l = r(728372).AppStoreSidebarSpaceStore.state;
                (null == l ? void 0 : l.id) !== o && await (0, r(269948).y)({
                    environment: e,
                    spaceViewStore: i
                });
                let a = t.getFormat();
                if ((null == a ? void 0 : a.collection_view_sub_type) === "workflow_template_placeholder" && null != a && a.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: n
                    } = await r(708370).t.load(), o = n(a.placeholder_workflow_template_id);
                    if (!o) throw Error(`Collection template "${a.placeholder_workflow_template_id}" not found`);
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
        489561: (e, t, r) => {
            r.d(t, {
                CA: () => l
            }), r(16280), r(898992), r(354520), r(581454);
            let n = Symbol("JSON Schema"),
                o = Symbol("JSON Schema Components"),
                i = Symbol("No JSON Schema"),
                l = (0, r(722371).MU)((0, r(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [o]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [o]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [o]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [o]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [o]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [o]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [o]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [o]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [o]: {}
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
                                [o]: {}
                            },
                            r = e[0];
                        return "boolean" == typeof r ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof r ? {
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
                        [o]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [o]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [o]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[n],
                        [o]: e[n][o]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[n]).filter(e => e !== i),
                        [o]: Object.assign({}, ...e.map(e => e[n][o]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[n],
                        [o]: t[n][o]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: l
                    }) => ({
                        type: "object",
                        properties: (0, r(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[n] !== i).map(([e, t]) => [e, t[n]])),
                        ...l && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [o]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[n][o]))
                    }),
                    union: e => {
                        let t = (0, r(381453).hS)(e.map(e => e[n]).filter(e => e !== i), e => JSON.stringify(e)),
                            l = (0, r(381453).hS)(e.map(e => e[n][o]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [o]: Object.assign({}, ...l)
                        } : {
                            anyOf: t,
                            [o]: Object.assign({}, ...l)
                        }
                    },
                    intersection: e => {
                        let t = (0, r(381453).hS)(e.map(e => e[n]).filter(e => e !== i), e => JSON.stringify(e)),
                            l = (0, r(381453).hS)(e.map(e => e[n][o]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [o]: Object.assign({}, ...l)
                        } : {
                            allOf: t,
                            [o]: Object.assign({}, ...l)
                        }
                    },
                    gte: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            minimum: t
                        } : r
                    },
                    gt: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            exclusiveMinimum: t
                        } : r
                    },
                    lte: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            maximum: t
                        } : r
                    },
                    lt: (e, t) => {
                        let r = e[n];
                        return r !== i ? { ...r,
                            exclusiveMaximum: t
                        } : r
                    },
                    maxLength: (e, t) => {
                        let r = e[n];
                        if (r === i) return r;
                        if ("type" in r) {
                            if ("string" === r.type) return { ...r,
                                maxLength: t
                            };
                            else if ("array" === r.type) return { ...r,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let r = e[n];
                        if (r === i) return r;
                        if ("type" in r) {
                            if ("string" === r.type) return { ...r,
                                minLength: t
                            };
                            else if ("array" === r.type) return { ...r,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[n];
                        if (t === i) return t;
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
                        let t = e[n];
                        if (t === i) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, r(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, r(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var l;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [o]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [o]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [o]: {}
                                }, {
                                    type: "null",
                                    [o]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [o]: {}
                                }],
                                [o]: t[o]
                            };
                            if (l = t, (0, r(722371).Gv)(l) && 0 === Object.keys(l).length) return t;
                            (0, r(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...i) => 1 === i.length && (0, r(722371).Gv)(i[0]) && ("id" in i[0] || "title" in i[0] || "description" in i[0] || "examples" in i[0]) ? (...l) => {
                    let {
                        description: a,
                        examples: p,
                        id: s,
                        title: u
                    } = i[0], c = { ...u && {
                            title: u
                        },
                        description: a,
                        ...p && {
                            examples: p
                        },
                        ...t(...l)
                    };
                    return s && (c = {
                        $ref: `#/components/schemas/${s}`,
                        [o]: { ...c[o],
                            [s]: c
                        }
                    }), {
                        [n]: c,
                        ...r(969475)[e](...l)
                    }
                } : {
                    [n]: t(...i),
                    ...r(969475)[e](...i),
                    describe: t => l[e]({
                        description: t
                    })(...i)
                }]));
            Symbol("Exact empty object ({})"), l.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        623644: (e, t, r) => {
            r.d(t, {
                NX: () => o,
                gp: () => l,
                h9: () => i,
                i6: () => p,
                rj: () => a,
                tw: () => n
            }), r(581454);
            let n = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                o = ["2022-06-28", "2025-09-03", "2026-03-11"],
                i = "2026-03-11",
                l = "2022-06-28",
                a = "2026-03-11";
            r(489561).CA.literals(...n);
            let p = "2025-09-03"
        },
        685745: (e, t, r) => {
            r.d(t, {
                B: () => l
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

            function l(e) {
                let t, o = i(e);
                if (!o) return;
                let l = i([...e].reverse());
                if (!l) return;
                let a = (0, r(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: o.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!a) return;
                let p = (0, r(787926).mP)(l.blockStore, a);
                if (p) {
                    for (let e of (0, r(827049).Y_)(p)) {
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
        726342: (e, t, r) => {
            r.d(t, {
                u: () => n
            });

            function n(e) {
                return e instanceof r(681735).h || e instanceof r(695906).SpaceStore || e instanceof r(970831).B
            }
        },
        909718: (e, t, r) => {
            r.d(t, {
                y: () => n
            });

            function n() {
                var e;
                null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.closeQuickSearch) || e.call(r(775657).electronApi)
            }
        }
    }
]);