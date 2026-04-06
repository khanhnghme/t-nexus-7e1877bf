"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [53157, 76298, 89563], {
        33529: (e, t, n) => {
            n.d(t, {
                y: () => r
            }), n(898992), n(672577);

            function r(e) {
                var t;
                let {
                    actionModels: r,
                    id: o
                } = e, i = (0, n(297493).y5)(o), a = "action" === i.source ? r.find(e => e.id === i.action_id) : void 0;
                return {
                    automationValueInfo: i,
                    collectionPointer: (0, n(722371).O9)(a) && a.isType("create_page") ? null == (t = a.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: a
                }
            }
        },
        33918: (e, t, n) => {
            n.d(t, {
                G: () => r
            });

            function r(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        242912: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightDownSmallIcon: () => o,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                o = (0, n(104509).wt)("arrowStraightDownSmall", r, "small")
        },
        251953: (e, t, n) => {
            n.d(t, {
                M: () => i
            });
            var r = () => n(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        isModalOpen: !1
                    }
                }
            }
            let i = new o
        },
        285482: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let r = (0, n(115964).$)(t.clientData);
                    if (r) return "messageValues" in t.clientData ? e.formatMessage(r, t.clientData.messageValues) : e.formatMessage(r)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    collectionStore: r,
                    collectionViewStore: o,
                    property_type: i,
                    from: a,
                    property: l
                } = e;
                (0, n(33918).G)(t, {
                    property: l,
                    property_type: i,
                    from: a,
                    collection_id: null == r ? void 0 : r.id,
                    collection_view_id: null == o ? void 0 : o.id
                })
            }
        },
        432705: (e, t, n) => {
            function r(e) {
                return "event" === e || "recurrence" === e
            }

            function o(e) {
                let t = e.getTrigger();
                return (0, n(722371).O9)(t) && r(t.type)
            }

            function i(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, n(722371).HB)(e)
            }
            n.d(t, {
                $X: () => o,
                H8: () => i,
                x2: () => r
            })
        },
        589563: (e, t, n) => {
            n.d(t, {
                Ah: () => c,
                Dk: () => a,
                Iv: () => u,
                SF: () => l,
                YO: () => d,
                _f: () => m,
                c_: () => o,
                dW: () => p,
                gW: () => i,
                sp: () => f,
                vN: () => s
            }), n(16280), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            var r = () => n(722371);

            function o(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function i(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "delete_automation_step",
                    properties: t
                })
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function s(e, t) {
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

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_delete",
                    properties: t
                })
            }

            function y(e) {
                let {
                    formulaAnalyticsModule: t,
                    formulasModule: o,
                    formulaTypecheckContextValues: i,
                    getRecordModel: a,
                    spaceId: l,
                    value: u,
                    featureGates: c
                } = e;
                if ("formula" === u.type) {
                    if (!(0, r().O9)(u.value)) return;
                    let e = n(300441).Q.unwrapOr(o.parseFormulaInputToAst(u.value), void 0);
                    if (e) {
                        let r = o.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, n(297493).zg)(a),
                            spaceId: l,
                            valueTypes: i,
                            featureGates: c
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: a,
                                typecheckContextValues: i
                            }),
                            formula_return_type: r.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: a,
                                typecheckContextValues: i
                            })
                        }
                    }
                } else if ("simple" === u.type) {
                    if (!(0, r().O9)(u.value)) return;
                    return t.getSimpleFormulaAnalytics(u.value, {
                        getRecordModel: a,
                        typecheckContextValues: i
                    })
                } else(0, r().HB)(u.type)
            }

            function m(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: o,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
                    featureGates: c,
                    simpleFormulasModule: s
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: n,
                            formulaAnalyticsModule: o,
                            formulasModule: i,
                            formulaTypecheckContextValues: a,
                            getRecordModel: l,
                            featureGates: u
                        } = e,
                        c = n.getConfig(),
                        s = [],
                        p = null == c ? void 0 : c.collection,
                        d = null == c ? void 0 : c.properties;
                    if ((0, r().O9)(p) && (0, r().O9)(d) && d.length > 0) {
                        let e = l(p),
                            f = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, r().O9)(f) && (s = d.map(e => {
                            var t;
                            return (null == (t = f[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let _ = null == c ? void 0 : c.values;
                        if (i && (0, r().O9)(_))
                            for (let e of (t = [], d)) {
                                var m;
                                let r = null == (m = _[e]) ? void 0 : m.value;
                                if (!r) continue;
                                let c = y({
                                    formulaAnalyticsModule: o,
                                    formulasModule: i,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: a,
                                    spaceId: n.spaceId,
                                    value: r,
                                    featureGates: u
                                });
                                c && t.push(c)
                            }
                    }
                    return {
                        automation_action_id: n.pointer.id,
                        property_formula_stats: t,
                        property_types: s,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
                    featureGates: c
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: o,
                        formulaTypecheckContextValues: i,
                        getRecordModel: a,
                        featureGates: l
                    } = e, u = t.getConfig(), c = [];
                    if (o && (0, r().O9)(u) && u.text) {
                        let e = y({
                            formulasModule: o,
                            formulaAnalyticsModule: n,
                            getRecordModel: a,
                            formulaTypecheckContextValues: i,
                            spaceId: t.spaceId,
                            value: u.text,
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
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
                    featureGates: c
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, o;
                    let {
                        automationActionModel: i,
                        formulaAnalyticsModule: a,
                        formulasModule: l,
                        formulaTypecheckContextValues: u,
                        getRecordModel: c,
                        featureGates: s,
                        simpleFormulasModule: p
                    } = e, d = {
                        automation_action_id: i.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, m = i.getConfig();
                    if (!(0, r().O9)(m)) return d;
                    if ((0, r().O9)(m.target)) {
                        if ("formula" === m.target.type && (0, r().O9)(m.target.value)) {
                            if (d.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, n(247438).Fbh)(m.target.value.value).length,
                                    numFormulaContextTargets: p.getReferencedContextValueIds(m.target.value).length
                                }, l) {
                                let e = y({
                                    formulasModule: l,
                                    formulaAnalyticsModule: a,
                                    getRecordModel: c,
                                    formulaTypecheckContextValues: u,
                                    spaceId: i.spaceId,
                                    value: m.target.value,
                                    featureGates: s
                                });
                                e && (d.formula_stats ? ? = [], d.formula_stats.push(e))
                            }
                        } else if ("property" === m.target.type && (0, r().O9)(m.target.propertyId) && (0, r().O9)(m.target.collectionPointer)) {
                            let e = c(m.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, r().O9)(t) && (d.targetData = {
                                type: "property",
                                propertyType: null == (o = t[m.target.propertyId]) ? void 0 : o.type
                            })
                        }
                    }
                    if ((0, r().O9)(null == (t = m.notification_message) ? void 0 : t.value) && (d.messageCharacterCount = (0, n(247438).FAw)(m.notification_message.value), l)) {
                        let e = y({
                            formulasModule: l,
                            formulaAnalyticsModule: a,
                            getRecordModel: c,
                            formulaTypecheckContextValues: u,
                            spaceId: i.spaceId,
                            value: m.notification_message,
                            featureGates: s
                        });
                        e && (d.formula_stats ? ? = [], d.formula_stats.push(e))
                    }
                    return d
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
                    featureGates: c,
                    simpleFormulasModule: s
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, o, i, a, l, u, c;
                    let {
                        automationActionModel: s,
                        formulaAnalyticsModule: p,
                        formulasModule: d,
                        formulaTypecheckContextValues: m,
                        getRecordModel: f,
                        featureGates: _
                    } = e, v = s.getConfig();
                    if (!(0, r().O9)(v)) return {
                        automation_action_id: s.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let g = Object.fromEntries(Object.entries(v || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var n;
                                return [e, !!(null == t || null == (n = t.value) ? void 0 : n.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: h,
                            cc: b,
                            bcc: x
                        } = v,
                        T = [...(null == h || null == (t = h.value) ? void 0 : t.value) || [], ...(null == b || null == (o = b.value) ? void 0 : o.value) || [], ...(null == x || null == (i = x.value) ? void 0 : i.value) || []],
                        k = [...(0, n(247438).Fbh)(T).map(e => f({
                            table: n(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(r().O9), ...(0, n(801109).C3)((0, n(247438).k4p)(T))],
                        w = (0, n(763230).Tr)(k.map(e => e.split("@")[1])),
                        S = [null == (a = v.to) ? void 0 : a.value, null == (l = v.cc) ? void 0 : l.value, null == (u = v.bcc) ? void 0 : u.value, null == (c = v.reply_to) ? void 0 : c.value, v.from_name, v.email_subject, v.email_body].map(e => {
                            if (d && (0, r().O9)(e)) return y({
                                formulaAnalyticsModule: p,
                                formulasModule: d,
                                getRecordModel: f,
                                formulaTypecheckContextValues: m,
                                spaceId: s.spaceId,
                                value: e,
                                featureGates: _
                            })
                        }).filter(r().O9);
                    return {
                        automation_action_id: s.pointer.id,
                        fields: g,
                        formula_stats: S,
                        recipient_domains: w,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
                    featureGates: c
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: o,
                        formulaAnalyticsModule: i,
                        formulasModule: a,
                        formulaTypecheckContextValues: l,
                        getRecordModel: u,
                        featureGates: c
                    } = e, s = t.getConfig(), p = [], d = [], m = [];
                    if ((0, r().O9)(s) && (0, r().O9)(s.target) && (0, r().O9)(s.properties) && s.properties.length > 0) {
                        let e;
                        if ("variable" === s.target.type) {
                            let t = (0, n(297493).y5)(s.target.id);
                            if ("action" === t.source) {
                                let t = (0, n(33529).y)({
                                    actionModels: o,
                                    id: s.target.id
                                }).collectionPointer;
                                if ((0, r().O9)(t)) {
                                    let n = u(t);
                                    e = null == n ? void 0 : n.getNormalizedSchema(u)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, n(297493).IV)(l, s.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, r().O9)(t.type.collection)) {
                                    let n = u(t.type.collection);
                                    e = null == n ? void 0 : n.getNormalizedSchema(u)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === s.target.type) {
                            let t = u(s.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(u)
                        }(0, r().O9)(e) && s.properties.forEach(n => {
                            let o = e[n];
                            if ((0, r().O9)(o) && (p.push(o.type), a && (0, r().O9)(s.values))) {
                                let e = s.values[n];
                                if ((0, r().O9)(e) && (d.push({
                                        type: o.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let n = y({
                                        formulasModule: a,
                                        formulaAnalyticsModule: i,
                                        getRecordModel: u,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: c
                                    });
                                    n && m.push(n)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: d,
                        property_formula_stats: m,
                        property_types: p,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: o,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
                    featureGates: c
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: o,
                        formulaTypecheckContextValues: i,
                        getRecordModel: a,
                        featureGates: l
                    } = e, u = t.getConfig(), c = [];
                    if (o && (0, r().O9)(u) && u.values) {
                        for (let e of Object.values(u.values))
                            if (e.value) {
                                let r = y({
                                    formulasModule: o,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: a,
                                    formulaTypecheckContextValues: i,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                r && c.push(r)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: c,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: a,
                    formulaTypecheckContextValues: l,
                    getRecordModel: u,
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
                } : void(0, r().HB)(t)
            }

            function f(e) {
                var t, o;
                let i, a, l, {
                        automationModel: u,
                        builderType: c = "sidebar",
                        formulaAnalyticsModule: s,
                        formulasModule: p,
                        formulaTypecheckContextValues: d,
                        getRecordModel: y,
                        featureGates: f,
                        simpleFormulasModule: _,
                        source: v
                    } = e,
                    g = [],
                    h = u.getActionPointers().map(e => y(e)).filter(r().O9);
                for (let e of u.getActionPointers()) {
                    let t = y(e);
                    (0, r().O9)(t) && g.push(m({
                        automationActionModel: t,
                        automationActionModels: h,
                        formulaAnalyticsModule: s,
                        formulasModule: p,
                        formulaTypecheckContextValues: d,
                        getRecordModel: y,
                        featureGates: f,
                        simpleFormulasModule: _
                    }))
                }
                let b = [];
                if (u.isEventType()) {
                    let e = u.getEventConfiguration(),
                        o = y(u.getParentPointer());
                    i = u.getParentId();
                    let c = u.getEventConfiguration();
                    if ((null == (t = c.source) ? void 0 : t.type) === "collection_view") {
                        let e = y(c.source.pointer);
                        (null == e ? void 0 : e.parent_table) === n(682956).ev && (l = null == e ? void 0 : e.parent_id), a = null == c ? void 0 : c.source.pointer.id
                    }
                    let s = null == o ? void 0 : o.getNormalizedSchema(y);
                    if ((0, r().O9)(s)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: n
                        } = e;
                        if (t && b.push({
                                type: "page"
                            }), "any" === n.type) b.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === n.type) b.push({
                            condition: "none",
                            type: "property"
                        });
                        else {
                            let e = [];
                            "some" === n.type ? e = n.some ? ? [] : "all" === n.type && (e = n.all ? ? []);
                            let t = [],
                                o = [];
                            e.forEach(e => {
                                var n;
                                let i = null == (n = s[e.property]) ? void 0 : n.type;
                                (0, r().O9)(i) && (t.push({
                                    type: i,
                                    operator: e.filter.operator
                                }), o.push(i))
                            }), b.push({
                                condition: n.type,
                                property_configs: t,
                                property_types: o,
                                type: "property"
                            })
                        }
                    }
                } else u.isButtonType() ? b.push({
                    type: "button"
                }) : u.isRecurrenceType() ? b.push({
                    type: "recurrence",
                    frequency: null == (o = u.getTrigger().recurrence) ? void 0 : o.frequency
                }) : (0, r().HB)(u);
                return {
                    automation_actions: g,
                    automation_id: u.id,
                    automation_triggers: b,
                    collection_id: i,
                    collection_view_id: a,
                    collection_view_block_id: l,
                    builder_type: c,
                    source: v
                }
            }
        },
        605263: (e, t, n) => {
            n.d(t, {
                K4: () => u,
                To: () => d,
                fi: () => c,
                q8: () => l,
                u: () => a
            }), n(16280), n(18107), n(967357);
            var r = n(296540),
                o = n(474848);
            let i = (0, r.createContext)({
                ancestors: []
            });

            function a(e) {
                let {
                    automationStore: t,
                    children: a,
                    contextType: l,
                    collectionStore: u,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: d,
                    collectionViewStore: y,
                    enableExistenceGuarantees: m
                } = e, f = (0, n(533992).v3)(), _ = (0, n(109939).tz)(), {
                    value: v
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: g
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), h = (0, n(470569).o)(t), b = (0, n(67499).S)(), x = (0, n(682985).K8)(() => v ? g ? function(e) {
                    let {
                        environment: t,
                        automationStore: r,
                        automationTypecheckModule: o,
                        contextType: i,
                        formulasModule: a,
                        intl: l,
                        subscriptionInfo: u,
                        pageStore: c,
                        enableExistenceGuarantees: d
                    } = e, y = d ? s.get(r) : s.get(r) ? ? p.get(r);
                    if (y) return y;
                    let m = new(n(345426)).ComputedStore(() => {
                        let e = r.getTriggerType(),
                            s = i;
                        return (0, n(722371).O9)(e) && (0, n(432705).x2)(e) && (s = (0, n(432705).H8)(e)), (0, n(100197).Z)({
                            environment: t,
                            automationStore: r,
                            automationTypecheckModule: o,
                            contextType: s,
                            formulasModule: a,
                            intl: l,
                            subscriptionInfo: u,
                            pageStore: c,
                            enableExistenceGuarantees: d
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return d && s.set(r, m), p.set(r, m), m
                }({
                    automationStore: t,
                    automationTypecheckModule: g,
                    contextType: l,
                    environment: f,
                    formulasModule: v,
                    intl: _,
                    subscriptionInfo: h,
                    pageStore: "button_block" === l ? null == b ? void 0 : b.pageStore : void 0,
                    enableExistenceGuarantees: m
                }).state : {
                    error: new(n(600005)).N9("Missing automation dependency")
                } : {
                    error: new(n(600005)).N9("Missing formulas dependency")
                }, [f, t, g, l, v, _, h, null == b ? void 0 : b.pageStore, m]), T = (0, r.useContext)(i), k = (0, r.useMemo)(() => 0 === T.ancestors.length ? [{
                    automationStore: t,
                    contextType: l,
                    typecheckResult: x,
                    collectionStore: u,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: d,
                    collectionViewStore: y
                }] : [...T.ancestors, {
                    automationStore: t,
                    contextType: l,
                    typecheckResult: x,
                    collectionStore: u,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: d,
                    collectionViewStore: y
                }], [T, t, l, x, u, c, d, y]), w = (0, r.useMemo)(() => ({
                    ancestors: k,
                    enableExistenceGuarantees: m
                }), [k, m]);
                return (0, o.jsx)(i.Provider, {
                    value: w,
                    children: a
                })
            }

            function l() {
                let e = (0, r.useContext)(i).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function u() {
                return (0, r.useContext)(i).ancestors.at(-1)
            }

            function c() {
                return (0, r.useContext)(i).enableExistenceGuarantees
            }
            i.displayName = "AutomationContext", i.Consumer;
            let s = new WeakMap,
                p = new WeakMap;

            function d(e) {
                var t;
                return null == (t = s.get(e)) ? void 0 : t.state
            }
        },
        638501: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                plusSmallIcon: () => o
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                o = (0, n(104509).wt)("plusSmall", r, "small")
        },
        789701: (e, t, n) => {
            n.d(t, {
                y: () => o
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                o = (0, n(104509).wt)("inbox", r, "default")
        },
        799891: (e, t, n) => {
            n.d(t, {
                y: () => o
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                o = (0, n(104509).wt)("chatBubble", r, "default")
        },
        816231: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var r = n(296540),
                o = n(474848);

            function i(e) {
                let t = (0, r.useRef)(null),
                    n = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    let r = e.el.getBoundingClientRect();
                    n.style.height = `${r.height}px`;
                    let o = 0,
                        i = e => {
                            cancelAnimationFrame(o), o = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: n,
                                    mouseY: r
                                }) {
                                    let {
                                        x: o,
                                        y: i,
                                        height: a,
                                        width: l
                                    } = t;
                                    if (n > o) {
                                        let t = Math.max(n - (o + l), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(r-i)/a}%)`
                                    } else {
                                        let t = Math.max(o - n, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(r-i)/a}%, 100% 100%)`
                                    }
                                }({
                                    div: n,
                                    rect: r,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", i), () => {
                        window.removeEventListener("mousemove", i), cancelAnimationFrame(o)
                    }
                }, [e.el]);
                let i = r.useCallback(e => {
                    if (!n.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let r = document.elementFromPoint(e.clientX, e.clientY);
                        if (r === t.current && (t.current.style.visibility = "hidden", r = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), r && r !== t.current) {
                            n.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                r.dispatchEvent(t)
                            } finally {
                                n.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, o.jsx)("div", {
                    ref: t,
                    onClick: i,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let a = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                l = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                u = r.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: u,
                    allowOptionalExtensionMenu: c,
                    ...s
                }, p) {
                    let {
                        disabled: d,
                        disableDefaultClick: y,
                        onFocus: m,
                        focused: f,
                        placementToOrigin: _,
                        alignmentToOrigin: v,
                        disableCloseOnEnter: g,
                        bottomSheetInitialState: h,
                        popupTypeOverride: b
                    } = s, x = (0, n(533992).WS)(), T = (0, n(649476).Tf)(), [k, w] = (0, r.useState)(!1), [S, O] = (0, r.useState)(!1), E = (0, r.useRef)(null), C = (0, r.useRef)(null), M = (0, r.useRef)(null), I = (0, r.useRef)(null), D = (0, r.useCallback)(() => {
                        M.current && window.clearTimeout(M.current), I.current && window.clearTimeout(I.current), M.current = null, I.current = null
                    }, []), A = (0, r.useCallback)(() => {
                        D(), d || (w(!0), O(!0))
                    }, [d, D]), N = (0, r.useCallback)(() => {
                        D(), O(!1), w(!1)
                    }, [D]), F = (0, r.useCallback)(e => {
                        D(), k || (e && e.preventDefault && e.preventDefault(), M.current = window.setTimeout(A, 120))
                    }, [k, D, A]), P = (0, r.useCallback)(() => {
                        O(!1), D(), k && (I.current = window.setTimeout(N, 100))
                    }, [k, N, D]), R = (0, r.useCallback)(t => {
                        m(), A(), c && (null == e || e(t), N())
                    }, [m, A, c, e, N]), H = (0, r.useCallback)(() => {
                        x || F()
                    }, [F, x]), B = (0, r.useCallback)(() => {
                        x || (m(), F())
                    }, [m, F, x]), j = (0, r.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = E.current;
                        k && t && !t.contains(e.target) && N()
                    }, [k, N]), L = (0, r.useCallback)(e => {
                        13 === e.keyCode && k && !g && N()
                    }, [k, N, g]);
                    (0, r.useEffect)(() => {
                        if (!y) return window.addEventListener("click", j), () => {
                            window.removeEventListener("click", j)
                        }
                    }, [y, j]), (0, r.useEffect)(() => (window.addEventListener("keydown", L), () => {
                        window.removeEventListener("keydown", L)
                    }), [L]);
                    let V = (0, r.useRef)(f);
                    (0, r.useEffect)(() => {
                        !f && V.current && P(), V.current = f
                    }, [f, P]);
                    let U = { ...(0, n(63390).A)({
                                onMouseEnter: H,
                                onClick: R
                            }, s),
                            showExtensionArrow: !0
                        },
                        W = n(423291).n.Popup;
                    return b ? W = b : x && (W = T ? n(423291).n.BottomSheet : n(423291).n.SlideUp), (0, o.jsx)(n(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: f,
                        onEnter: k ? void 0 : F,
                        onRight: F,
                        onLeft: k ? P : void 0,
                        onEsc: k ? P : void 0,
                        children: (0, o.jsx)(n(182718).zD, {
                            popupType: W,
                            bottomSheetInitialState: h,
                            open: k,
                            placementToOrigin: _ ? ? "right",
                            alignmentToOrigin: v ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !x,
                            preventCaptureEsc: !0,
                            ref: E,
                            content: () => (0, o.jsxs)(o.Fragment, {
                                children: [!x && S && C.current ? (0, o.jsx)(i, {
                                    el: C.current
                                }) : null, (0, o.jsx)("div", {
                                    ref: C,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: u({
                                        onMouseEnter: B
                                    }, {
                                        close: P
                                    })
                                })]
                            }),
                            style: [l, x && a],
                            trapFocus: !0,
                            onDismiss: N,
                            children: null == t ? void 0 : t(U, p)
                        })
                    })
                })
        },
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => l,
                fF: () => h,
                es: () => g,
                LE: () => _,
                zs: () => f,
                HE: () => m,
                yg: () => v,
                QH: () => y,
                kn: () => d,
                mB: () => u,
                L$: () => c,
                X3: () => s,
                jX: () => p
            }), n(898992), n(354520), n(581454), n(944114);
            var r = () => n(896346);
            class o extends r().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let i = (0, n(109939).YK)({
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
                a = {
                    hour: o.HOURLY,
                    day: o.DAILY,
                    week: o.WEEKLY,
                    month: o.MONTHLY,
                    year: o.YEARLY
                },
                l = {
                    MO: o.MO,
                    TU: o.TU,
                    WE: o.WE,
                    TH: o.TH,
                    FR: o.FR,
                    SA: o.SA,
                    SU: o.SU
                };

            function u(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function c(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function s(e) {
                let {
                    start_date: t,
                    frequency: r,
                    interval: i,
                    weekdays: u,
                    timezone: c,
                    hour: s,
                    minute: p
                } = e, d = (0, n(943003).eU)(t);
                "hour" === r && d.setUTCHours(s ? ? 0, p ? ? 0, 0, 0);
                let y = "week" === r && u ? u.map(e => l[e]) : void 0,
                    m = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? m.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? m.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? m.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? m.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let r = [];
                    for (let o of t) r.push(...e(n[0], ...n.slice(1)).map(e => [o, ...e]));
                    return r
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new o({
                    freq: a[r],
                    dtstart: d,
                    interval: i,
                    byweekday: y,
                    tzid: "hour" === r ? void 0 : c,
                    ..."hour" === r ? {} : {
                        byhour: s ? ? 0,
                        byminute: p ? ? 0,
                        bysecond: 0
                    },
                    ...m
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
                let n = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    r = e.length,
                    o = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    i = r > 1,
                    a = n.length >= 1;
                return {
                    violatesConstraint: i || a,
                    templateNestingExceedsMaxDepth: i,
                    ancestorHasDailyTemplate: a,
                    nestedDepthOfAutomationAncestors: r,
                    immediateAncestorRecurrenceType: o
                }
            }

            function d(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function y(e) {
                return s(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function m(e) {
                let {
                    recurrence: t,
                    intl: r
                } = e, o = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let r = t.startOf("hour");
                    return { ...e,
                        start_date: r.toMillis(),
                        hour: r.hour,
                        minute: r.minute
                    }
                }(t) : t, a = y(g(o));
                if (!a) return;
                let l = n(906745).DateTime.fromJSDate(a).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(r));
                "hour" !== o.frequency && (l = l.setZone(o.timezone));
                let u = "hour" !== t.frequency && d(t),
                    c = (0, n(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: r,
                        shortenDate: !0
                    });
                if (u) return r.formatMessage(i.dateBetweenMidnightAnd3AM, {
                    date: c
                }); {
                    let e = l.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), r.formatMessage(i.dateAtTime, {
                        date: c,
                        time: e
                    })
                }
            }

            function f(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(i.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(i.noEndCondition)
            }

            function _(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function v(e, t, n) {
                return e.plus(n - t)
            }

            function g(e) {
                var t;
                let r;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, r = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(r.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function h(e, t) {
                let r = n(381453).fN(e, e => void 0 !== e),
                    o = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(r, o)
            }
        },
        853160: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            var r = n(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, r.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                i = (0, n(104509).wt)("checkmarkCircle", o, "default")
        },
        976298: (e, t, n) => {
            n.d(t, {
                $0: () => s,
                Fx: () => v,
                Ge: () => l,
                I3: () => i,
                Kj: () => f,
                PP: () => g,
                TK: () => h,
                Yy: () => o,
                aE: () => b,
                cQ: () => _,
                kH: () => u,
                m7: () => a,
                nq: () => y,
                nv: () => p,
                tj: () => c
            }), n(898992), n(354520), n(737550);
            let r = {
                    checkbox: !0,
                    date: !0,
                    email: !0,
                    multi_select: !0,
                    number: !0,
                    person: !0,
                    phone_number: !0,
                    relation: !0,
                    select: !0,
                    status: !0,
                    text: !0,
                    title: !0,
                    url: !0,
                    auto_increment_id: !1,
                    button: !1,
                    created_by: !1,
                    created_time: !1,
                    file: !1,
                    formula: !1,
                    last_edited_by: !1,
                    last_edited_time: !1,
                    last_visited_time: !1,
                    location: !1,
                    rollup: !1,
                    verification: !1,
                    place: !1
                },
                o = {
                    checkbox: [{
                        type: "checkbox"
                    }, {
                        type: "undefined"
                    }],
                    date: [{
                        type: "date"
                    }, {
                        type: "undefined"
                    }],
                    email: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    multi_select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    number: [{
                        type: "number"
                    }, {
                        type: "undefined"
                    }],
                    person: [{
                        type: "person"
                    }, { of: {
                            type: "person"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    phone_number: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    relation: [{
                        type: "block"
                    }, { of: {
                            type: "block"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    status: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    text: void 0,
                    title: void 0,
                    url: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }]
                };

            function i(e) {
                return !!(r[e.type] && !(0, n(425985).U)(e) && (!(0, n(9247).$M)(e) || void 0 === (0, n(9247).om)(e)))
            }

            function a(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: r,
                    filter: o,
                    sort: a,
                    sourcePropertyIds: l
                } = e, u = (l ? ? (0, n(722371).objectKeys)(r)).filter((t, a, l) => {
                    let u = r[t];
                    return !(!u || !i(u) || "relation" === u.type && e.restrictCrossSpace && (0, n(226989).o)(e.spaceId, u)) && (!o || o([t, u], a, r))
                });
                if (0 === u.length) return [];
                if (!t || !1 === a) return u;
                let c = (0, n(944940).L)(t, r, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(u, e => c.findIndex(t => t.property === e))
            }

            function l(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: r,
                    sort: o
                } = e, i = (0, n(722371).objectKeys)(r).filter((e, t, o) => {
                    let i = r[e];
                    return !!i && !!(0, n(568249).J)(i)
                });
                if (0 === i.length) return [];
                if (!t || !1 === o) return i;
                let a = (0, n(944940).L)(t, r, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(i, e => a.findIndex(t => t.property === e))
            }

            function u(e) {
                if (e.type === n(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === n(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.LibraryFunctionExecutionError) return {
                    type: e.type,
                    error: e.error,
                    libraryFunctionName: e.libraryFunction.name,
                    errorSource: e.errorSource
                };
                return "errorSource" in e ? {
                    type: e.type,
                    errorSource: e.errorSource
                } : {
                    type: e.type
                }
            }
            let c = {
                checkbox: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                button: !1,
                file: !1,
                verification: !1,
                auto_increment_id: !1,
                created_by: !1,
                created_time: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                place: !1
            };

            function s(e) {
                return !!c[e.type]
            }

            function p(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: r,
                    filter: o,
                    sort: i
                } = e, a = (0, n(722371).objectKeys)(r).filter((e, t, i) => {
                    var a;
                    let l = r[e];
                    return !(!l || !c[l.type] || (0, n(9247).$M)(l) && null != (a = (0, n(9247).om)(l)) && a.auto_update_on_edit) && (!o || o([e, l], t, r))
                });
                if (0 === a.length) return [];
                if (!t || !1 === i) return a;
                let l = (0, n(944940).L)(t, r, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(a, e => l.findIndex(t => t.property === e))
            }
            let d = {
                checkbox: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                auto_increment_id: !1,
                button: !1,
                created_by: !1,
                created_time: !1,
                date: !1,
                file: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function y(e) {
                return d[e.type]
            }
            let m = {
                checkbox: !0,
                created_by: !0,
                created_time: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                last_edited_by: !0,
                last_edited_time: !0,
                auto_increment_id: !1,
                button: !1,
                file: !1,
                formula: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function f(e) {
                return m[e.type]
            }

            function _(e) {
                return 0 === e
            }

            function v(e) {
                return "button_block" === e || "button_property" === e
            }

            function g(e) {
                let {
                    property: t,
                    collectionSchema: n
                } = e;
                return !!n && !n[t]
            }

            function h(e) {
                let {
                    collectionSchema: t,
                    property: n,
                    type: r
                } = e, o = null == t ? void 0 : t[n];
                return !o || ("action" === r ? !i(o) : !c[o.type])
            }

            function b({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: r,
                        pagePropertiesEdited: o,
                        source: i
                    } = e.event;
                    if (void 0 === i) return !1;
                    let a = "some" === o.type && o.some,
                        l = "all" === o.type && o.all;
                    if ((a || l || []).some(e => g({
                            collectionSchema: t,
                            property: e.property
                        }) || h({
                            collectionSchema: t,
                            property: e.property,
                            type: "trigger"
                        }))) return !1;
                    let u = "some" === o.type && (!(0, n(722371).O9)(o.some) || 0 === o.some.length),
                        c = "all" === o.type && (!(0, n(722371).O9)(o.all) || 0 === o.all.length);
                    if (!r && ("none" === o.type || u || c)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        }
    }
]);