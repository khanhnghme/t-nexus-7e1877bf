"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [49297], {
        4040: (e, t, r) => {
            r.d(t, {
                Iq: () => u,
                UW: () => i,
                WE: () => p,
                eg: () => c,
                oE: () => l,
                xL: () => a
            }), r(898992), r(354520), r(581454), r(737550), r(296540);
            var o = r(474848);
            let n = {
                content: {
                    alignItems: "center",
                    display: "flex",
                    flex: "1 1 auto",
                    flexWrap: "wrap",
                    minWidth: 0,
                    whiteSpace: "pre",
                    lineHeight: 1.6
                },
                operatorContent: {
                    alignItems: "center",
                    flexWrap: "wrap",
                    gridGap: "1px"
                },
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.semibold,
                    minWidth: 20
                },
                propertyValue: { ...r(699422).RC,
                    minWidth: 40
                },
                propertyValueList: {
                    display: "flex",
                    flexBasis: "100%",
                    flexDirection: "column",
                    listStyle: "none",
                    margin: 0,
                    marginBlockStart: 10,
                    padding: 0,
                    rowGap: 10,
                    width: "100%"
                },
                propertyValueListItem: {
                    display: "flex"
                },
                and: {
                    marginInlineEnd: "4px",
                    marginInlineStart: "4px"
                }
            };

            function a(e) {
                let {
                    automationContextValues: t,
                    messageType: a,
                    propertySchema: d,
                    value: p
                } = e, m = (0, r(109939).tz)(), g = (0, r(533992).v3)(), y = (0, r(682985).K8)(() => p ? u({
                    automationContextValues: t,
                    limit: d.limit,
                    value: p
                }) : [], [t, d.limit, p]), h = (0, r(682985).K8)(() => {
                    if ("action" === a) return function(e) {
                        let {
                            intl: t,
                            collectionStore: n,
                            operator: a,
                            propertySchema: i,
                            relationPages: l,
                            styles: u,
                            value: d
                        } = e, c = (0, o.jsx)("span", {
                            style: u.propertyName,
                            children: i.name
                        });
                        return (null == d ? void 0 : d.type) === "formula" ? (0, o.jsx)("div", {
                            style: u.content,
                            children: (0, o.jsx)(r(109939).sA, { ...r(760459).uW({
                                    propertyName: c,
                                    propertyValue: (0, o.jsx)("span", {
                                        style: u.propertyValue,
                                        children: (0, o.jsx)(r(45453).g, {
                                            returnType: {
                                                type: "block"
                                            }
                                        })
                                    })
                                })
                            })
                        }) : "replace" === a || "append" === a || "remove" === a || "toggle" === a ? (0, o.jsx)("div", {
                            style: { ...u.content,
                                ...u.operatorContent
                            },
                            children: (0, o.jsx)(r(109939).sA, { ...r(760459).f4({ ...r(760459).f_({
                                        elements: l.map((e, t) => (0, o.jsx)(s, {
                                            propertySchema: i,
                                            collectionStore: n,
                                            value: e
                                        }, t)),
                                        intl: t
                                    }),
                                    operator: a,
                                    propertyName: c
                                })
                            })
                        }) : 0 === l.length ? (0, o.jsx)("div", {
                            style: u.content,
                            children: (0, o.jsx)(r(109939).sA, { ...r(760459).NW({
                                    propertyName: c
                                })
                            })
                        }) : (0, o.jsx)("div", {
                            style: u.content,
                            children: (0, o.jsx)(r(109939).sA, { ...r(760459).uW({
                                    propertyName: c,
                                    propertyValue: (0, o.jsx)("span", {
                                        style: u.propertyValue,
                                        children: (0, o.jsx)(s, {
                                            collectionStore: n,
                                            value: l[0],
                                            propertySchema: i
                                        })
                                    })
                                })
                            })
                        })
                    }({
                        collectionStore: e.collectionStore,
                        intl: m,
                        operator: e.operator,
                        propertySchema: e.propertySchema,
                        relationPages: y,
                        styles: n,
                        value: e.value
                    });
                    if ("trigger" === a) {
                        let {
                            collectionStore: t,
                            filter: a,
                            propertySchema: i
                        } = e;
                        return function(e) {
                            let t, {
                                    availableTokens: n,
                                    collectionStore: a,
                                    operator: i,
                                    propertySchema: l,
                                    relationPages: u,
                                    styles: d
                                } = e,
                                c = (0, o.jsx)("span", {
                                    style: d.propertyName,
                                    children: l.name
                                });
                            if (1 === u.length) {
                                let e = "relation_contains" === i ? r(760459).TF : r(760459)._f;
                                t = (0, o.jsx)("div", {
                                    style: d.content,
                                    children: (0, o.jsx)(r(109939).sA, { ...e({
                                            propertyName: c,
                                            propertyValue: (0, o.jsx)("span", {
                                                style: d.propertyValue,
                                                children: (0, o.jsx)(s, {
                                                    availableTokens: n,
                                                    collectionStore: a,
                                                    propertySchema: l,
                                                    value: u[0]
                                                })
                                            })
                                        })
                                    })
                                })
                            } else {
                                let e = "relation_contains" === i ? r(760459).JQ : r(760459).SV;
                                t = (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)("div", {
                                        style: d.content,
                                        children: (0, o.jsx)(r(109939).sA, { ...e({
                                                propertyName: c,
                                                propertyValue: []
                                            })
                                        })
                                    }), (0, o.jsx)("ul", {
                                        style: d.propertyValueList,
                                        children: u.map((e, t) => (0, o.jsx)("li", {
                                            style: d.propertyValueListItem,
                                            children: (0, o.jsx)(s, {
                                                availableTokens: n,
                                                collectionStore: a,
                                                propertySchema: l,
                                                value: e
                                            })
                                        }, t))
                                    })]
                                })
                            }
                            return t
                        }({
                            availableTokens: a ? c({
                                collectionStore: t,
                                filter: a,
                                propertySchema: i
                            }) : void 0,
                            collectionStore: e.collectionStore,
                            operator: e.operator,
                            propertySchema: e.propertySchema,
                            relationPages: y,
                            styles: n
                        })
                    }(0, r(722371).HB)(a)
                }, [e, m, a, y]);
                return {
                    tooltipTitle: (0, r(682985).K8)(() => {
                        if ("action" === a) return i({
                            collectionStore: e.collectionStore,
                            environment: g,
                            intl: m,
                            operator: e.operator,
                            propertySchema: d,
                            relationPages: y,
                            value: e.value
                        });
                        if ("trigger" === a) {
                            let {
                                collectionStore: t,
                                filter: r,
                                propertySchema: o
                            } = e;
                            return l({
                                availableTokens: r ? c({
                                    collectionStore: t,
                                    filter: r,
                                    propertySchema: o
                                }) : void 0,
                                collectionStore: e.collectionStore,
                                environment: g,
                                intl: m,
                                operator: e.operator,
                                propertySchema: e.propertySchema,
                                relationPages: y
                            })
                        }(0, r(722371).HB)(a)
                    }, [e, g, m, a, d, y]),
                    title: h,
                    styles: n
                }
            }

            function i(e) {
                let t, {
                        collectionStore: n,
                        environment: a,
                        intl: i,
                        operator: l,
                        propertySchema: s,
                        relationPages: u,
                        value: d
                    } = e,
                    c = s.name;
                if ((null == d ? void 0 : d.type) === "formula") return (0, o.jsx)(r(109939).sA, { ...r(760459).uW({
                        propertyName: c,
                        propertyValue: (0, o.jsx)(r(45453).L, {})
                    })
                });
                let p = u.map(e => {
                        if ("string" != typeof e) return (0, r(297493).sM)(e); {
                            let t = r(970831).B.createChildStore(n, {
                                id: e,
                                table: r(832375).evP
                            });
                            return (0, r(112293).tS)({
                                environment: a,
                                intl: i,
                                store: t
                            })
                        }
                    }).filter(r(722371).O9),
                    m = 1 === p.length ? p[0] : i.formatList(p, {
                        style: "long",
                        type: "conjunction"
                    });
                return t = "replace" === l || "append" === l || "remove" === l || "toggle" === l ? r(760459).f4({
                    propertyName: c,
                    propertyValue: m,
                    operator: l
                }) : 0 === p.length ? r(760459).NW({
                    propertyName: c
                }) : r(760459).uW({
                    propertyName: c,
                    propertyValue: m
                }), (0, o.jsx)(r(109939).sA, { ...t
                })
            }

            function l(e) {
                let t, {
                        availableTokens: n,
                        collectionStore: a,
                        environment: i,
                        intl: l,
                        operator: s,
                        propertySchema: u,
                        relationPages: d
                    } = e,
                    c = d.map(e => {
                        if ("string" != typeof e) return (0, r(297493).sM)(e);
                        if (!(!n || n.some(t => t.id === e))) return r(760459).iy(l); {
                            let t = r(970831).B.createChildStore(a, {
                                id: e,
                                table: r(832375).evP
                            });
                            return (0, r(112293).tS)({
                                environment: i,
                                intl: l,
                                store: t
                            })
                        }
                    }).filter(r(722371).O9),
                    p = u.name,
                    m = 1 === c.length ? c[0] : l.formatList(c, {
                        style: "long",
                        type: "conjunction"
                    });
                return t = 1 === c.length ? ("relation_contains" === s ? r(760459).TF : r(760459)._f)({
                    propertyName: p,
                    propertyValue: m
                }) : ("relation_contains" === s ? r(760459).JQ : r(760459).SV)({
                    propertyName: p,
                    propertyValue: m
                }), (0, o.jsx)(r(109939).sA, { ...t
                })
            }

            function s(e) {
                let {
                    availableTokens: t,
                    collectionStore: n,
                    value: a
                } = e;
                return !t || t.some(e => e.id === a) ? "string" == typeof a ? (0, o.jsx)(r(448860).A, {
                    blockId: a,
                    format: r(696654).NY.Medium,
                    isSingle: !0,
                    noUnderline: !0,
                    parentStore: n,
                    shouldShrink: !0
                }) : (0, o.jsx)(r(360625).F, {
                    format: r(696654).NY.Medium,
                    isSingle: !0,
                    shouldShrink: !0,
                    value: a
                }) : (0, o.jsx)(r(300813).A, {
                    tokenFormat: r(696654).NY.Medium
                }, `missing_option_value_${a}`)
            }

            function u(e) {
                let {
                    automationContextValues: t,
                    limit: o,
                    value: n
                } = e;
                return n ? (0, r(591864).fromSimpleFormulaArrayValue)(n.value).slice(0, o).map(e => {
                    if ("string" != typeof e && "boolean" != typeof e)
                        if ((0, r(247438).s1Y)(e)) {
                            let o = (0, r(247438).iVq)(e).id,
                                n = (0, r(297493).IV)(t, o);
                            if (!n) return;
                            return n
                        } else {
                            var o;
                            if (!(0, r(247438).jIt)(e)) return;
                            let t = null == (o = (0, r(247438).i$F)(e)) ? void 0 : o.id;
                            if (!t) return;
                            return t
                        }
                }).filter(r(722371).O9) : []
            }

            function d(e) {
                let {
                    collectionStore: t,
                    filter: o
                } = e, n = (0, r(400473).Rh)(o), a = t.getSpaceId();
                return n.map(e => {
                    if (e.value && "string" == typeof e.value) return {
                        table: "block",
                        id: e.value,
                        spaceId: a
                    }
                }).filter(r(722371).O9)
            }

            function c(e) {
                let {
                    collectionStore: t,
                    filter: o,
                    propertySchema: n
                } = e, a = d({
                    collectionStore: t,
                    filter: o
                });
                return (0, r(561872).bG)({
                    getRecordModel: t.getRecordModel,
                    propertySchema: n,
                    relationValue: a,
                    includeNoAccess: !0
                })
            }

            function p(e) {
                let {
                    collectionStore: t,
                    filter: o
                } = e, n = d({
                    collectionStore: t,
                    filter: o
                });
                return {
                    action: "replace",
                    value: {
                        type: "simple",
                        value: (0, r(561872).Ap)(n)
                    }
                }
            }
        },
        14197: (e, t, r) => {
            r.d(t, {
                HJ: () => m,
                US: () => y,
                WA: () => c,
                be: () => p,
                bx: () => h,
                kU: () => u,
                lg: () => d,
                nO: () => s,
                vH: () => g
            }), r(16280), r(944114), r(296540);
            var o = () => r(464011),
                n = () => r(871865),
                a = () => r(368198),
                i = r(474848);
            let l = (0, r(109939).YK)({
                automationDeleteConfirmationMessage: {
                    id: "slackAutomations.remove.confirmation.message",
                    defaultMessage: "Delete {automationName}?"
                },
                automationDeleteAcceptLabel: {
                    id: "slackAutomations.remove.confirmation.acceptLabel",
                    defaultMessage: "Delete"
                },
                confirmDiscardChangesMessage: {
                    id: "automations.confirmDiscardChanges.message",
                    defaultMessage: "Discard unsaved changes to this automation?"
                },
                confirmDiscardChangesAccept: {
                    defaultMessage: "Discard",
                    id: "automations.confirmDiscardChanges.acceptLabel"
                },
                confirmDiscardOptionalFieldChangesMessage: {
                    id: "automations.confirmDiscardToggleFieldChangesMessage.message",
                    defaultMessage: "{hasName, select, true {Discard {fieldName} field?} other {Discard field?}}"
                }
            });

            function s(e) {
                let {
                    automationStore: t,
                    collectionStore: o,
                    environment: a,
                    intl: i,
                    from: l,
                    builderType: s
                } = e, u = o.getSpaceId();
                (0, r(377796).createAndCommit)({
                    environment: a,
                    userAction: "collectionSettingsAutomationsActions.createDatabaseAutomation",
                    canUndo: !0,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    perform: e => {
                        let l;
                        (0, r(421439).y4)({
                            store: o,
                            operation: {
                                pointer: o.pointer,
                                path: ["format", "automation_ids"],
                                command: "listAfter",
                                args: {
                                    id: t.id
                                }
                            },
                            transaction: e
                        });
                        let s = r(698405).d.createChildStore(o, t.pointer);
                        for (let r of t.getActionStores()) {
                            let t = r.getType();
                            t && n().addAutomationAction({
                                actionId: r.id,
                                actionType: t,
                                automationStore: s,
                                config: r.getConfig(),
                                environment: a,
                                intl: i,
                                transaction: e
                            })
                        }
                        let u = t.getTrigger();
                        (0, r(722371).O9)(u) && "event" !== u.type ? "recurrence" === u.type ? l = {
                            id: r(92513).JW(),
                            type: "recurrence",
                            recurrence: u.recurrence
                        } : (0, r(722371).HB)(u) : l = {
                            id: r(92513).JW(),
                            type: "event",
                            event: (null == u ? void 0 : u.event) ? ? {
                                pagesAdded: !1,
                                pagePropertiesEdited: {
                                    type: "none"
                                },
                                source: {
                                    pointer: o.getSpaceShardedPointer(),
                                    type: "collection"
                                }
                            }
                        }, r(124937).eC({
                            environment: a,
                            inMemoryRecordCache: o.inMemoryRecordCache,
                            table: r(832375).yBS,
                            transaction: e,
                            value: {
                                action_ids: t.getActionIds(),
                                alive: !0,
                                id: t.id,
                                parent_id: o.id,
                                parent_table: o.table,
                                properties: {
                                    name: t.getName()
                                },
                                space_id: o.getSpaceId(),
                                status: "active",
                                trigger: l
                            }
                        })
                    }
                });
                let d = t.getModel();
                if ((0, r(722371).O9)(d)) {
                    let e = (0, r(605263).To)(t),
                        o = [];
                    e && r(300441).Q.isSuccess(e) && (o = e.value.valueTypes), (0, r(963328).CM)((e, n, i) => {
                        let u = (0, r(637286).Q)(a),
                            c = r(589563).sp({
                                automationModel: d,
                                builderType: s,
                                formulaAnalyticsModule: n,
                                formulasModule: e,
                                formulaTypecheckContextValues: o,
                                getRecordModel: t.getRecordModel,
                                featureGates: (0, r(457103).i)(),
                                simpleFormulasModule: i
                            }),
                            p = l ? {
                                feature: {
                                    id: c.automation_id,
                                    from: l,
                                    type: "automation"
                                }
                            } : {};
                        r(589563).Dk(u, { ...c,
                            ...p
                        })
                    })
                }
            }

            function u(e) {
                let {
                    automationStore: t,
                    collectionStore: n,
                    environment: i,
                    builderType: l,
                    source: s
                } = e, u = n.getSpaceId();
                (0, r(377796).createAndCommit)({
                    environment: i,
                    userAction: "collectionSettingsAutomationsActions.saveDatabaseAutomation",
                    canUndo: !0,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    perform: e => {
                        let i = r(698405).d.createChildStore(n, t.pointer),
                            l = t.getName(),
                            s = i.getKeyStore("properties");
                        (0, r(173157).z)({
                            store: s,
                            data: {
                                name: l
                            },
                            transaction: e
                        }), t.getStatus() !== i.getStatus() && (0, r(173157).z)({
                            store: i,
                            data: {
                                status: t.getStatus()
                            },
                            transaction: e
                        });
                        let u = t.getActionStores();
                        if ((0, r(432705).$X)(i) && (0, r(432705).$X)(t))
                            if (t.isTriggerType("event")) i.isTriggerType("event") || (0, r(173157).z)({
                                store: i.getTriggerStore(),
                                data: {
                                    type: "event"
                                },
                                transaction: e
                            }), i.verifyTriggerType("event"), (0, r(173157).z)({
                                store: i.getTriggerStore().getKeyStore("event"),
                                data: t.getTriggerStore().getKeyStore("event").getValue(),
                                transaction: e
                            });
                            else if (t.isTriggerType("recurrence")) i.isTriggerType("recurrence") || (0, r(173157).z)({
                            store: i.getTriggerStore(),
                            data: {
                                type: "recurrence"
                            },
                            transaction: e
                        }), i.verifyTriggerType("recurrence"), (0, r(173157).z)({
                            store: i.getTriggerStore().getKeyStore("recurrence"),
                            data: t.getTriggerStore().getKeyStore("recurrence").getValue(),
                            transaction: e
                        });
                        else throw Error("Unexpected trigger type for automationStore");
                        let d = [];
                        for (let t of u) {
                            let r = t.getModel();
                            if (!r) continue;
                            let n = o().b.createChildStore(i, t.pointer);
                            (0, a().K)({
                                store: n,
                                value: {
                                    alive: !0,
                                    config: r.getConfig(),
                                    id: r.id,
                                    parent_id: i.id,
                                    parent_table: i.table,
                                    space_id: i.getSpaceId(),
                                    type: r.type
                                },
                                transaction: e
                            }), d.push(t.id)
                        }(0, r(173157).z)({
                            store: i,
                            data: {
                                action_ids: d
                            },
                            transaction: e
                        })
                    }
                });
                let d = t.getModel();
                (0, r(722371).O9)(d) && (0, r(963328).CM)((e, o, n) => {
                    let a = (0, r(605263).To)(t),
                        u = [];
                    a && r(300441).Q.isSuccess(a) && (u = a.value.valueTypes);
                    let c = (0, r(637286).Q)(i),
                        p = r(589563).sp({
                            automationModel: d,
                            builderType: l,
                            formulaAnalyticsModule: o,
                            formulasModule: e,
                            formulaTypecheckContextValues: u,
                            getRecordModel: t.getRecordModel,
                            featureGates: (0, r(457103).i)(),
                            simpleFormulasModule: n,
                            source: s
                        });
                    r(589563).SF(c, p)
                })
            }
            async function d(e) {
                let {
                    intl: t,
                    environment: o,
                    collectionStore: a,
                    existingAutomationStore: i,
                    onDelete: s
                } = e, u = i.getNameWithDefault(t);
                (await r(647095).Gh({
                    message: t.formatMessage(l.automationDeleteConfirmationMessage, {
                        automationName: u
                    }),
                    acceptLabel: t.formatMessage(l.automationDeleteAcceptLabel)
                })).accept && (function(e) {
                    let {
                        environment: t,
                        collectionStore: o,
                        existingAutomationStore: a
                    } = e, i = o.getSpaceId();
                    (0, r(377796).createAndCommit)({
                        environment: t,
                        userAction: "collectionSettingsAutomationsActions.deleteAutomation",
                        canUndo: !0,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: e => {
                            let i = o.getFormatStore().getKeyStore("automation_ids"),
                                l = r(698405).d.createChildStore(o, a.pointer);
                            (0, r(421439).y4)({
                                store: i,
                                operation: {
                                    pointer: i.pointer,
                                    path: i.path,
                                    command: "listRemove",
                                    args: {
                                        id: l.id
                                    }
                                },
                                transaction: e
                            }), n().deleteAutomation({
                                automationStore: l,
                                environment: t,
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: o,
                    collectionStore: a,
                    existingAutomationStore: i
                }), null == s || s())
            }

            function c(e) {
                let {
                    automationStore: t,
                    environment: o
                } = e, a = t.getSpaceId();
                (0, r(377796).createAndCommit)({
                    environment: o,
                    userAction: "collectionSettingsAutomationsActions.disableAutomation",
                    canUndo: !0,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    perform: e => {
                        n().disableAutomation({
                            automationStore: t,
                            environment: o,
                            transaction: e
                        })
                    }
                })
            }

            function p(e) {
                let {
                    automationStore: t,
                    collectionStore: o,
                    environment: a
                } = e, i = o.getSpaceId();
                (0, r(377796).createAndCommit)({
                    canUndo: !0,
                    environment: a,
                    userAction: "collectionSettingsAutomationsActions.restartAutomation",
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    perform: e => {
                        let a = r(698405).d.createChildStore(o, t.pointer);
                        n().restartAutomation({
                            automationStore: a,
                            transaction: e
                        })
                    }
                })
            }

            function m(e) {
                let {
                    automationStore: t,
                    environment: o
                } = e, a = t.getSpaceId();
                (0, r(377796).createAndCommit)({
                    environment: o,
                    userAction: "collectionSettingsAutomationsActions.enableAutomation",
                    canUndo: !0,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    perform: e => {
                        n().enableAutomation({
                            automationStore: t,
                            environment: o,
                            transaction: e
                        })
                    }
                })
            }

            function g(e) {
                let {
                    automationStore: t,
                    collectionStore: o,
                    environment: a
                } = e, i = o.getFormatStore().getKeyStore("automation_ids"), l = (0, r(295447).Z1)({
                    environment: a,
                    table: r(832375).yBS,
                    spaceId: t.getSpaceId()
                }), s = a.currentUser.id ? {
                    id: a.currentUser.id,
                    table: r(832375).oo9
                } : void 0, u = t.getSpaceId();
                (0, r(377796).createAndCommit)({
                    environment: a,
                    userAction: "",
                    canUndo: !0,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    perform: e => {
                        n().duplicateAutomation({
                            environment: a,
                            sourceAutomationStore: t,
                            targetAutomationId: l,
                            transaction: e,
                            actorPointer: s
                        }), (0, r(421439).y4)({
                            store: i,
                            operation: {
                                pointer: i.pointer,
                                path: i.path,
                                command: "listAfter",
                                args: {
                                    id: l
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }
            async function y(e) {
                let {
                    hasPendingChanges: t
                } = e;
                return !t || (await r(647095).Gh({
                    acceptLabel: r(962299).A.formatMessage(l.confirmDiscardChangesAccept),
                    message: r(962299).A.formatMessage(l.confirmDiscardChangesMessage),
                    icon: (0, i.jsx)(r(16275).I, {
                        icon: r(968411).trashIcon,
                        size: "xl"
                    })
                })).accept
            }
            async function h(e) {
                let {
                    fieldName: t
                } = e;
                return (await r(647095).Gh({
                    acceptLabel: r(962299).A.formatMessage(l.confirmDiscardChangesAccept),
                    message: r(962299).A.formatMessage(l.confirmDiscardOptionalFieldChangesMessage, {
                        fieldName: t,
                        hasName: !!t
                    }),
                    icon: (0, i.jsx)(r(16275).I, {
                        icon: r(968411).trashIcon,
                        size: "xl"
                    })
                })).accept
            }
        },
        16400: (e, t, r) => {
            r.d(t, {
                A: () => u
            }), r(944114), r(581454);
            var o = r(296540);
            r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(908872);
            var n = r(474848);
            let a = {
                    padding: "0 8px 4px 8px"
                },
                i = {
                    width: "100%"
                };

            function l({
                annotation: e,
                disabled: t,
                getRecordModel: a,
                isSelected: s,
                menuArgs: u,
                showPersonCheckbox: d
            }) {
                let c = (0, r(109939).tz)(),
                    p = (0, r(428143).U)(),
                    m = (0, r(682985).K8)(() => {
                        if ((0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).rie)(e)) {
                            let t = (0, r(247438).NcG)(e);
                            if (t) return (0, r(197018).xC)({
                                pointer: {
                                    table: r(832375).oo9,
                                    id: t
                                },
                                getRecordValue: a
                            })
                        }
                    }, [e, a]),
                    g = (0, r(682985).K8)(() => {
                        if ((0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).RaC)(e)) {
                            let t = (0, r(247438).cFJ)(e);
                            if (t) return a(t)
                        }
                    }, [e, a]),
                    y = (0, r(682985).K8)(() => {
                        if (g) return (0, r(405461).Pf)({
                            intl: c,
                            groupName: g.name
                        })
                    }, [g, c]),
                    h = r(986939).A.isMobile ? r(72461).t_.Format.Large : r(72461).t_.Format.Medium,
                    f = (0, o.useMemo)(() => null != m && m.asActor && m.table === r(832375).oo9 ? (0, n.jsx)(r(72461).t_, {
                        isSingle: !0,
                        shouldShrink: !0,
                        format: h,
                        userValue: m.asActor,
                        hasPersonHoverCard: !1
                    }) : g && y ? (0, n.jsx)(r(11444).UISpacePermissionGroupToken, {
                        groupModel: g,
                        groupPointer: g.pointer,
                        isSingle: !0,
                        shouldShrink: !0,
                        format: h
                    }) : null, [m, g, y, h]);
                return (0, n.jsx)(r(95582).A, { ...u,
                    ...d ? {
                        icon: (0, n.jsx)(r(349050).S, {
                            checked: s,
                            size: 14,
                            onClick: u.onClick
                        })
                    } : {},
                    title: t ? (0, n.jsx)(r(51831).m, {
                        content: () => (0, n.jsx)(r(109939).sA, { ...r(304333).O.maximumPeopleSelectedTooltip
                        }),
                        placement: "right",
                        children: e => (0, n.jsx)("div", {
                            style: i,
                            ...e,
                            children: f
                        })
                    }) : f,
                    disabled: t,
                    style: t ? p.disabledMenuItem : void 0,
                    isTokenTitle: !0
                })
            }
            let s = {
                genericHeader: {
                    paddingBottom: 0
                },
                headerDiv: {
                    paddingBlockEnd: 6 * !r(986939).A.isMobile,
                    borderBlockEnd: r(986939).A.isMobile ? "none" : `1px solid ${r(632079).oZ.dividerColor}`
                },
                replaceAddRemoveToggleButton: {
                    marginInlineStart: "8px",
                    marginInlineEnd: "8px",
                    marginTop: "8px"
                }
            };

            function u(e) {
                let t, {
                        action: i,
                        currentSimpleFormulaValueTokens: u,
                        formulaTypecheckContextValues: d,
                        formulaValueContext: c,
                        getRecordModel: p,
                        isDisabled: m,
                        limit: g,
                        menuProps: y,
                        onChange: h,
                        onClose: f,
                        showClearButton: x = !1,
                        showFormulaValueItems: v = !1,
                        showGenericHeader: b = !1,
                        showInputMenuItem: S = !1,
                        showPersonCheckbox: j = !1,
                        showReplaceAddRemoveToggle: k = !1,
                        value: A,
                        parentRecordStore: C
                    } = e,
                    {
                        errorMessage: M,
                        footer: T,
                        header: _,
                        isLoading: I,
                        menuListStore: P,
                        noResultsMessage: w,
                        replaceAddRemoveToggleButton: V,
                        searchInput: F,
                        userItems: R,
                        valueItems: E
                    } = function(e) {
                        var t, i, l;
                        let {
                            action: s,
                            formulaTypecheckContextValues: u,
                            formulaValueContext: d,
                            isDisabled: c = !1,
                            limit: p,
                            onChange: m,
                            onClose: g,
                            showClearButton: y,
                            showReplaceAddRemoveToggle: h,
                            showSelectedPeople: f,
                            unlimitedCurrentSimpleFormulaValueTokens: x,
                            value: v,
                            parentRecordStore: b
                        } = e, S = (0, r(533992).v3)(), j = (0, r(533992).Y0)(), k = (0, r(109939).tz)(), A = (null == d ? void 0 : d.type) === "collection" ? d.collectionStore.getRecordModel : r(993189).b4_.constant(void 0), C = (0, r(95746).pg)(d), M = C(x, "first"), T = (0, o.useMemo)(() => u.filter(e => (0, r(297493).o5)(e.type, {
                            type: "person"
                        })), [u]), [_, I] = (0, o.useState)(""), P = (0, r(682985).uB)(void 0, r(419110).$), w = (0, r(682985).K8)(() => {
                            if ("collection" !== d.type) return !1;
                            let e = d.collectionStore.getSchema()[d.property];
                            if (e && (0, r(9247).sO)(e)) return 1 === e.limit
                        }, [d]), V = (0, r(682985).K8)(() => "collection" === d.type ? d.collectionStore.getSpaceId() : "", [d]), [F] = (0, r(97668).Yb)(async () => {
                            let e = _ ? (0, r(821048).Ay)(_, T, e => e.kind === r(416901).FormulaContextValueKind.ContextValue ? e.name : "") : T,
                                t = (0, r(591864).fromSimpleFormulaArrayValue)(null == v ? void 0 : v.value).reduce((e, t) => (t && (0, r(591864).isAnnotationSimpleValueToken)(t) && (0, r(247438).rie)(t) && e.push(t[1]), e), []),
                                o = await r(308825).T.searchActions.load(),
                                n = await o.searchSpaceUsers({
                                    environment: S,
                                    query: _,
                                    membersOnly: !1,
                                    limit: 20 + t.length
                                }),
                                a = o.searchSpaceGroups({
                                    query: _,
                                    intl: k
                                }),
                                i = 0,
                                l = n[0],
                                s = [];
                            for (; l && s.length < 20;)(!t.includes(l.id) || f) && s.push(l.id), i += 1, l = n[i];
                            return {
                                valueResults: e,
                                groupResults: a.map(e => e.getGroupId()),
                                userResults: s
                            }
                        }, [S, _, f, T, null == v ? void 0 : v.value, k], {
                            debounce: r(767776).tu
                        }), R = (0, o.useCallback)(() => {
                            I(""), P.setState({ ...P.state,
                                focus: {
                                    section: 0,
                                    indexLocal: 0,
                                    indexGlobal: 0,
                                    footerFocused: !1
                                }
                            })
                        }, [P]), E = (0, o.useCallback)((e, t) => {
                            m(e || v, t || s)
                        }, [s, m, v]), B = (0, o.useCallback)(e => {
                            let t = C(e, "last");
                            E({
                                type: "simple",
                                value: (0, r(591864).toSimpleFormulaArrayValue)(t)
                            }), R()
                        }, [C, E, R]), N = (0, o.useCallback)(() => {
                            B(M.slice(0, M.length - 1))
                        }, [M, B]), O = (0, o.useCallback)(e => {
                            null == B || B((0, r(591864).simpleFormulaValueWithoutToken)(M, e))
                        }, [M, B]), D = !!(p && M.length >= p), W = r(381453).oE(M.map((e, t) => "string" == typeof e || "boolean" == typeof e ? null : (0, r(247438).rie)(e) || (0, r(247438).RaC)(e) ? (0, n.jsx)(r(366387).A, {
                            parentRecordStore: b,
                            handleRemoveToken: O,
                            token: e
                        }, t) : (0, r(247438).s1Y)(e) ? (0, n.jsx)(r(599762).A, {
                            formulaTypecheckContextValues: u,
                            handleRemoveToken: O,
                            isDisabled: c || D,
                            token: e
                        }, t) : null)), L = new Set(r(381453).oE(M.map(e => (0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).s1Y)(e) && (0, r(247438).iVq)(e).id))), z = new Set(r(381453).oE(M.map(e => (0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).rie)(e) && (0, r(247438).NcG)(e)))), K = new Set(r(381453).oE(M.map(e => {
                            if ((0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).RaC)(e)) {
                                let t = (0, r(247438).FHi)(e);
                                return null == t ? void 0 : t.groupId
                            }
                        }))), H = r(381453).oE(((null == (t = F.value) ? void 0 : t.valueResults) || []).map(e => {
                            let t = e.kind === r(416901).FormulaContextValueKind.ContextValue && e.id || "";
                            if (!(t && L.has(t)) || f) return {
                                action: "append",
                                currentSimpleFormulaValueTokens: M,
                                isDisabled: c || D,
                                id: t,
                                getRecordModel: A,
                                setCurrentTokens: B,
                                value: e
                            }
                        })), q = (e, t, o) => {
                            if (!t || f) return {
                                action: () => {
                                    t ? O(o) : B([...M, o]), w && r(374176).default.afterNextFlush(() => {
                                        g()
                                    })
                                },
                                annotation: o,
                                getRecordModel: A,
                                id: e,
                                isDisabled: c || D,
                                userIdOrGroupId: e,
                                isSelected: t
                            }
                        }, U = r(381453).oE(((null == (i = F.value) ? void 0 : i.userResults) || []).map(e => {
                            let t = (0, r(247438).P4h)(e);
                            return q(e, z.has(e), t)
                        })), Y = r(381453).oE(((null == (l = F.value) ? void 0 : l.groupResults) || []).map(e => {
                            let t = (0, r(247438).dWL)(e, V);
                            return q(e, K.has(e), t)
                        })), $ = [...H, ...U, ...Y], G = (0, n.jsx)("div", {
                            style: { ...!r(986939).A.isMobile && a
                            },
                            children: (0, n.jsx)(r(160319).Ay, {
                                style: {
                                    maxHeight: 6 * parseInt(r(160319).sA, 10)
                                },
                                disabled: c || D,
                                dontShowBorderBottom: j.isAndroid,
                                focus: !r(986939).A.isMobile || void 0,
                                focusAfterAnimation: !0,
                                format: r(160319).le.FilterValue,
                                onChange: e => I(e.target.value),
                                onClearButtonClick: () => B([]),
                                onRemoveLastToken: N,
                                placeholder: k.formatMessage(r(705743).D.personSearchPlaceholder),
                                showClearButton: y,
                                tokens: W,
                                value: _
                            })
                        }), Q = (0, n.jsx)(r(444232).A, {
                            value: v,
                            onChange: E
                        }), J = (0, n.jsx)(r(270037).A, {
                            action: s,
                            handleOnChange: E
                        });
                        return {
                            errorMessage: F.error && k.formatMessage(r(705743).D.somethingWentWrong),
                            footer: Q,
                            header: k.formatMessage(r(705743).D.genericMenuHeader),
                            isLoading: !F.value && !F.error,
                            menuListStore: P,
                            noResultsMessage: 0 === $.length && F.value && k.formatMessage(r(705743).D.noResults),
                            replaceAddRemoveToggleButton: !!h && J,
                            searchInput: G,
                            userItems: [...U, ...Y],
                            valueItems: H
                        }
                    }({
                        action: i,
                        formulaTypecheckContextValues: d,
                        formulaValueContext: c,
                        isDisabled: m,
                        limit: g,
                        onChange: h,
                        onClose: f,
                        showClearButton: x,
                        showReplaceAddRemoveToggle: k,
                        showSelectedPeople: j,
                        unlimitedCurrentSimpleFormulaValueTokens: u,
                        value: A,
                        parentRecordStore: C
                    }) || {},
                    B = [...(0, o.useMemo)(() => E && v ? E.map(e => {
                        let {
                            annotation: t,
                            itemAction: o
                        } = (0, r(966253).E)({
                            action: e.action,
                            currentSimpleFormulaValueTokens: e.currentSimpleFormulaValueTokens,
                            setCurrentTokens: e.setCurrentTokens,
                            value: e.value
                        });
                        return {
                            key: e.id,
                            render: o => (0, n.jsx)(r(358591).A, {
                                annotation: t,
                                disabled: e.isDisabled,
                                formulaTypecheckContextValues: d,
                                menuArgs: o,
                                parentRecordStore: C
                            }),
                            action: o
                        }
                    }) : [], [d, v, E, C]), ...(0, o.useMemo)(() => R ? R.map(e => ({
                        key: e.userIdOrGroupId,
                        render: t => (0, n.jsx)(l, {
                            annotation: e.annotation,
                            disabled: e.isDisabled,
                            getRecordModel: p || e.getRecordModel,
                            isSelected: e.isSelected,
                            menuArgs: t,
                            showPersonCheckbox: j
                        }),
                        action: e.action
                    })) : [], [p, j, R])],
                    N = [];
                B.length > 0 && N.push({
                    key: "users",
                    items: B
                }), t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    minWidth: 260,
                    right: (0, n.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: f,
                    footer: T && (0, n.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: T
                    })
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    width: 260,
                    footer: T && (0, n.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: T
                    }),
                    disableHeaderBorder: !0
                };
                let O = b && (0, n.jsx)(r(844565).A, {
                        style: s.genericHeader,
                        title: _
                    }),
                    D = (0, n.jsxs)("div", {
                        style: s.headerDiv,
                        children: [r(986939).A.isMobile ? void 0 : (null == y ? void 0 : y.header) || O, S ? F : void 0]
                    }),
                    W = (0, n.jsxs)(n.Fragment, {
                        children: [M ? (0, n.jsx)(r(844565).A, {
                            children: (0, n.jsx)(r(498341).u, {
                                title: M
                            })
                        }) : void 0, I || M || !V ? void 0 : (0, n.jsx)("div", {
                            style: s.replaceAddRemoveToggleButton,
                            children: V
                        }), w ? (0, n.jsx)(r(844565).A, {
                            children: (0, n.jsx)(r(498341).u, {
                                title: w
                            })
                        }) : void 0, I ? (0, n.jsx)(r(844565).A, {
                            children: (0, n.jsx)(r(200261).A, {})
                        }) : void 0, B.length > 0 ? (0, n.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            sections: N,
                            store: P
                        }) : void 0]
                    }),
                    L = (0, n.jsx)(r(747369).A, { ...t,
                        ...y,
                        header: D,
                        children: W
                    });
                return {
                    headerDiv: D,
                    innerComponents: W,
                    personArrayMenu: L
                }
            }
        },
        24458: (e, t, r) => {
            r.d(t, {
                N6: () => n,
                _c: () => i
            });
            let o = ["enum_contains", "enum_does_not_contain", "enum_is", "enum_is_not", "is_empty", "changes_to_any"];

            function n(e) {
                return o.includes(e) ? e : "enum_contains"
            }
            let a = (0, r(109939).YK)({
                    changesToAny: {
                        id: "propertyTrigger.selectOperator.changesToAnyOption",
                        defaultMessage: "Is edited"
                    },
                    isEmpty: {
                        id: "propertyTrigger.selectOperator.isEmpty",
                        defaultMessage: "Is cleared"
                    },
                    enumContains: {
                        id: "propertyTrigger.selectOperator.enumContainsOption",
                        defaultMessage: "Contains"
                    },
                    enumDoesNotContain: {
                        id: "propertyTrigger.selectOperator.enumDoesNotContain",
                        defaultMessage: "Does not contain"
                    },
                    enumIs: {
                        id: "propertyTrigger.selectOperator.enumIs",
                        defaultMessage: "Is"
                    },
                    enumIsNot: {
                        id: "propertyTrigger.selectOperator.enumIsNot",
                        defaultMessage: "Is not"
                    }
                }),
                i = {
                    enum_contains: {
                        hasInput: !0,
                        isMulti: !0,
                        isSingle: !1,
                        labelText: a.enumContains,
                        text: a.enumContains,
                        value: "enum_contains"
                    },
                    enum_does_not_contain: {
                        hasInput: !0,
                        isMulti: !0,
                        isSingle: !1,
                        labelText: a.enumDoesNotContain,
                        text: a.enumDoesNotContain,
                        value: "enum_does_not_contain"
                    },
                    enum_is: {
                        hasInput: !0,
                        isMulti: !1,
                        isSingle: !0,
                        labelText: a.enumIs,
                        text: a.enumIs,
                        value: "enum_is"
                    },
                    enum_is_not: {
                        hasInput: !0,
                        isMulti: !1,
                        isSingle: !0,
                        labelText: a.enumIsNot,
                        text: a.enumIsNot,
                        value: "enum_is_not"
                    },
                    changes_to_any: {
                        hasInput: !1,
                        isMulti: !0,
                        isSingle: !0,
                        labelText: a.changesToAny,
                        text: a.changesToAny,
                        value: "changes_to_any"
                    },
                    is_empty: {
                        hasInput: !1,
                        isMulti: !0,
                        isSingle: !0,
                        labelText: a.isEmpty,
                        text: a.isEmpty,
                        value: "is_empty"
                    }
                }
        },
        42196: (e, t, r) => {
            r.d(t, {
                a: () => a,
                c: () => i
            }), r(898992), r(672577);
            var o = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    actionId: t,
                    closeMenu: a,
                    propertyId: i
                } = e, {
                    maybePersistedTransactionActions: l
                } = (0, r(305042).b)(), {
                    automationStore: s,
                    contextType: u,
                    collectionStore: d,
                    collectionSettingsStore: c
                } = (0, r(605263).q8)(), p = (0, r(533992).v3)(), m = (0, r(109939).tz)(), {
                    value: g
                } = (0, r(815048).fJ)(r(864850).T.formulas), {
                    value: y
                } = (0, r(815048).fJ)(r(879267).QV.automationTypecheck), h = (0, r(470569).o)(s), f = (0, r(716206).j)(), x = (0, r(682985).K8)(() => {
                    let e = s.getActionStores().find(e => e.id === t);
                    if (null != e && e.isDefined()) return e
                }, [s, t]), v = (0, o.useCallback)(() => {
                    x && g && y && (l.createAndCommit({
                        perform: e => {
                            r(871865).removeAutomationAction({
                                actionStore: x,
                                automationStore: s,
                                automationTypecheckModule: y,
                                subscriptionInfo: h,
                                contextType: u,
                                environment: p,
                                formulasModule: g,
                                intl: m,
                                transaction: e,
                                pageStore: f
                            })
                        },
                        userAction: "UnsupportedPropertyMenu.removeAction"
                    }), null == a || a())
                }, [x, s, y, h, a, u, p, g, m, l, f]), b = (0, r(441365).A)({
                    collectionStore: d,
                    collectionSettingsStore: c
                }), S = (0, o.useMemo)(() => () => {
                    b && b(i), null == a || a()
                }, [a, b, i]);
                return (0, n.jsx)(r(659698).Ol, {
                    onDelete: v,
                    onRestore: S,
                    stepType: "action"
                })
            }

            function i(e) {
                let {
                    closeMenu: t,
                    collectionSettingsStore: a,
                    collectionStore: i,
                    propertyId: l,
                    removePropertyTrigger: s
                } = e, u = (0, r(682985).K8)(() => !(null != i && i.getSchema()[l]) && !(null != i && i.getDeletedSchema()[l]), [i, l]), d = (0, o.useCallback)(() => {
                    s(l), null == t || t()
                }, [t, l, s]), c = (0, r(441365).A)({
                    collectionStore: i,
                    collectionSettingsStore: a
                }), p = (0, o.useMemo)(() => () => {
                    a && !u && (c && c(l), null == t || t())
                }, [t, a, c, u, l]);
                return (0, n.jsx)(r(659698).Ol, {
                    onDelete: d,
                    onRestore: p,
                    stepType: "trigger"
                })
            }
        },
        44117: (e, t, r) => {
            r.d(t, {
                A: () => A
            });
            var o = r(296540);
            r(898992), r(354520), r(672577), r(581454), r(737550);
            var n = r.n(r(844751)),
                a = r(474848);
            let i = (0, r(109939).YK)({
                    searchInputPlaceholder: {
                        id: "automationEventTriggerMenu.searchInputPlaceholder.label",
                        defaultMessage: "Search triggers…"
                    },
                    pageAddedCopy: {
                        id: "automationEventTriggerMenu.pageAdded.title",
                        defaultMessage: "Page added"
                    },
                    pagePropertiesEditedCopy: {
                        id: "automationEventTriggerMenu.anyPropertyEdited.title",
                        defaultMessage: "Any property edited"
                    },
                    recurrenceCopy: {
                        id: "automationEventTriggerMenu.recurrence.title",
                        defaultMessage: "Every…"
                    }
                }),
                l = {
                    propertyIcon: {
                        width: 16,
                        height: 16,
                        color: r(632079).Tj.icon.secondary
                    }
                };

            function s(e) {
                let {
                    automationTriggerMenuStore: t,
                    onClose: n
                } = e, {
                    automationStore: s,
                    collectionStore: d
                } = (0, r(305042).k)(), c = (0, r(960253).e)(), p = (0, r(109939).tz)(), y = (0, r(287134).p)(), h = (0, o.useMemo)(() => ({ ...y,
                    closeMenu: n
                }), [y, n]), [f, x] = o.useState(""), v = (0, r(682985).K8)(() => d.getSpaceId(), [d]), b = (0, r(682985).K8)(() => d.getSchema(), [d]), S = (0, r(682985).K8)(() => s.getTrigger(), [s]), j = (0, r(682985).K8)(() => (null == S ? void 0 : S.type) === "event" && S.event.pagesAdded, [S]), k = (0, r(682985).K8)(() => e => {
                    let t = e[1];
                    return !(0, r(795e3).n)(t) || !(0, r(226989).o)(v, t)
                }, [v]), A = (0, r(682985).K8)(() => (0, r(976298).nv)({
                    collectionFormat: d.getFormat(),
                    collectionSchema: b,
                    filter: k
                }), [d, b, k]), C = (0, r(241049).iX)({
                    collectionSchema: b,
                    propertyIds: A,
                    searchTerm: f
                }), M = (0, r(682985).K8)(() => (null == S ? void 0 : S.type) === "event" && (j || "none" !== S.event.pagePropertiesEdited.type), [S, j]), T = (0, r(682985).K8)(() => ({
                    isDefined: s.isDefined(),
                    model: s.isDefined() ? s.getModel() : void 0,
                    actionModels: s.isDefined() ? s.getActionStores().map(e => e.getModel()).filter(r(722371).O9) : [],
                    spaceId: s.getSpaceId(),
                    store: s.isDefined() ? s : void 0
                }), [s]), _ = (0, r(457067).e)({
                    maxHeight: "50vh",
                    width: 266
                }), I = (0, r(533992).v3)(), P = (0, a.jsx)(r(844565).A, {
                    isInput: !0,
                    children: (0, a.jsx)(r(310324).Ay, {
                        focus: !r(986939).A.isMobile,
                        value: f,
                        onChange: e => {
                            x(e.target.value)
                        },
                        placeholder: p.formatMessage(i.searchInputPlaceholder)
                    })
                }), [{
                    value: w
                }] = (0, r(97668).Yb)(async () => await u({
                    environment: I,
                    intl: p,
                    searchInput: f,
                    styles: l,
                    hasPageAddedTrigger: j,
                    hasAnyEventConditions: M,
                    automationTriggerValue: S,
                    automationStoreState: T,
                    closeMenu: h.closeMenu,
                    addAnyPropertyEditedTrigger: h.addAnyPropertyEditedTrigger,
                    addPageAddedTrigger: h.addPageAddedTrigger,
                    addEmptyRecurrenceTrigger: h.addEmptyRecurrenceTrigger
                }), [I, p, f, j, M, S, T, h.closeMenu, h.addAnyPropertyEditedTrigger, h.addPageAddedTrigger, h.addEmptyRecurrenceTrigger]), V = (0, r(682985).K8)(() => (function(e) {
                    let {
                        automationTriggerValue: t,
                        automationTriggerMenuStore: o,
                        showTopBorder: n,
                        properties: i,
                        collectionSchema: l,
                        theme: s,
                        themeMode: u,
                        actions: d
                    } = e, {
                        specificPropertyChangedFilters: c
                    } = m(t), p = i.map(e => {
                        if (!c.find(t => t.property === e)) return function(e) {
                            let {
                                automationTriggerMenuStore: t,
                                propertyId: o,
                                collectionSchema: n,
                                theme: i,
                                themeMode: l,
                                actions: s
                            } = e, u = n[o];
                            if (!u) return;
                            let d = (0, r(976298).nq)(u);
                            return {
                                key: o,
                                action: () => {
                                    d ? t.pushSettingsItem({
                                        type: "propertyChangedFilter",
                                        property: o
                                    }) : (s.addPropertyTrigger({
                                        property: o,
                                        filter: {
                                            operator: "changes_to_any"
                                        }
                                    }), s.closeMenu())
                                },
                                render: e => (0, a.jsx)(r(95582).A, { ...e,
                                    icon: (0, a.jsx)(r(221535).zB, {
                                        icon: u.icon,
                                        type: u.type,
                                        size: r(104509).Ev.sm,
                                        theme: i,
                                        themeMode: l,
                                        style: g
                                    }),
                                    title: u.name,
                                    showExtensionArrow: d
                                })
                            }
                        }({
                            propertyId: e,
                            collectionSchema: l,
                            theme: s,
                            themeMode: u,
                            automationTriggerMenuStore: o,
                            actions: d
                        })
                    }).filter(r(722371).O9);
                    if (0 !== p.length) return {
                        key: "property_section",
                        items: p,
                        render: e => (0, a.jsx)(r(844565).A, { ...e,
                            topBorder: n,
                            title: (0, a.jsx)(r(109939).sA, {
                                id: "automationEventTriggerMenu.pagePropertiesEditedSection.title",
                                defaultMessage: "Property"
                            })
                        })
                    }
                })({
                    automationTriggerValue: S,
                    automationTriggerMenuStore: t,
                    showTopBorder: !!w,
                    properties: C,
                    collectionSchema: b,
                    theme: r(632079).Tj,
                    themeMode: c,
                    actions: h
                }), [S, t, w, C, b, c, h]), F = o.useMemo(() => {
                    let e = [w, V].filter(r(722371).O9);
                    return 0 === e.length ? [{
                        key: "none",
                        items: [{
                            key: "none-item",
                            action: () => {},
                            render: e => (0, a.jsx)(r(95582).A, { ...e,
                                disabled: !0,
                                disabledFeedback: !0,
                                title: (0, a.jsx)(r(109939).sA, {
                                    id: "automations.eventTriggerMenu.noResultsItem",
                                    defaultMessage: "No results"
                                })
                            })
                        }]
                    }] : e
                }, [w, V]);
                return (0, a.jsx)(r(747369).A, { ..._,
                    header: P,
                    children: (0, a.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        sections: F,
                        initialFocus: 0
                    })
                })
            }
            async function u(e) {
                let {
                    environment: t,
                    intl: o,
                    searchInput: l,
                    hasPageAddedTrigger: s,
                    hasAnyEventConditions: u,
                    automationTriggerValue: c,
                    automationStoreState: p,
                    closeMenu: g,
                    addAnyPropertyEditedTrigger: h,
                    addPageAddedTrigger: f,
                    addEmptyRecurrenceTrigger: x
                } = e, v = o.formatMessage(i.pageAddedCopy), b = o.formatMessage(i.recurrenceCopy), S = o.formatMessage(i.pagePropertiesEditedCopy), {
                    hasAnyPageEditedTrigger: j,
                    specificPropertyChangedFilters: k
                } = m(c), A = r(381453).oE([j || !n().test(l, S) ? void 0 : {
                    key: "any_property_edited",
                    action: async () => {
                        await y({
                            hasSpecificPropertyChangedFilters: k.length > 0
                        }) && (h(), g())
                    },
                    render: e => (0, a.jsx)(r(95582).A, { ...e,
                        icon: (0, a.jsx)(r(16275).I, {
                            icon: r(636).pencilLineIcon,
                            colorVariant: "secondary"
                        }),
                        title: S
                    })
                }, !s && n().test(l, v) ? {
                    key: "page_added",
                    action() {
                        f(), g()
                    },
                    render: e => (0, a.jsx)(r(95582).A, { ...e,
                        icon: (0, a.jsx)(r(16275).I, {
                            icon: r(581923).plusIcon,
                            colorVariant: "secondary"
                        }),
                        title: v
                    })
                } : void 0, !u && n().test(l, b) ? await d({
                    environment: t,
                    automationStoreState: p,
                    closeMenu: g,
                    addEmptyRecurrenceTrigger: x
                }) : void 0]);
                return A.length > 0 ? {
                    key: "event_section",
                    items: A,
                    render: e => (0, a.jsx)(r(844565).A, { ...e,
                        title: (0, a.jsx)(r(109939).sA, {
                            id: "automationEventTriggerMenu.eventSection.title",
                            defaultMessage: "Event"
                        })
                    })
                } : void 0
            }
            async function d(e) {
                let {
                    environment: t,
                    automationStoreState: o,
                    closeMenu: n,
                    addEmptyRecurrenceTrigger: i
                } = e, l = await (0, r(708261).V)({
                    environment: t,
                    automationStore: o.store,
                    triggerType: "recurrence",
                    spaceId: o.spaceId
                });
                return {
                    key: "recurrence",
                    action() {
                        l ? i() : r(907063).K(t, {
                            upsell: {
                                type: "product",
                                product: "plus",
                                limit: {
                                    type: "none"
                                },
                                trialability: "none"
                            },
                            from: "recurrence_automation",
                            spaceStore: (0, r(974410).f)(o.store)
                        }), n()
                    },
                    render: e => (0, a.jsx)(p, { ...e,
                        automationStoreState: o
                    })
                }
            }
            let c = {
                    marginInlineStart: 6
                },
                p = o.forwardRef(function(e, t) {
                    var o;
                    let {
                        automationStoreState: n,
                        ...l
                    } = e, s = (0, r(533992).v3)(), u = (0, r(97668).Yb)(async () => await (0, r(708261).V)({
                        environment: s,
                        automationStore: n.store,
                        triggerType: "recurrence",
                        spaceId: n.spaceId
                    }), [n.store, s, n.spaceId]), {
                        spaceId: d,
                        userId: p
                    } = (0, r(682985).K8)(() => {
                        var e;
                        return {
                            spaceId: n.spaceId,
                            userId: null == (e = r(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id
                        }
                    }, [n]), m = null == (o = (0, r(217844)._)({
                        name: "premium_automations",
                        spaceId: d,
                        userId: p
                    })) ? void 0 : o.upsell;
                    return (0, a.jsx)(r(95582).A, { ...l,
                        ref: t,
                        icon: (0, a.jsx)(r(16275).I, {
                            icon: r(934080).J,
                            colorVariant: "secondary"
                        }),
                        title: (0, a.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, a.jsx)(r(109939).sA, { ...i.recurrenceCopy
                            }), u ? (0, a.jsx)(r(322662).Ee, {
                                newBadgeKey: "generalized_recurrence_automations",
                                didUserEngage: !1,
                                keyType: "date"
                            }) : m ? (0, a.jsx)("div", {
                                style: c,
                                children: (0, a.jsx)(r(889316).B, {
                                    upsell: m,
                                    analyticsName: "recurrence_automation"
                                })
                            }) : null]
                        })
                    })
                });

            function m(e) {
                let t = !1,
                    r = [];
                return (null == e ? void 0 : e.type) === "event" && ((t = "any" === e.event.pagePropertiesEdited.type) || ("some" === e.event.pagePropertiesEdited.type ? r = e.event.pagePropertiesEdited.some || [] : "all" === e.event.pagePropertiesEdited.type && (r = e.event.pagePropertiesEdited.all || []))), {
                    hasAnyPageEditedTrigger: t,
                    specificPropertyChangedFilters: r
                }
            }
            let g = {
                overflow: "visible"
            };
            async function y(e) {
                let {
                    hasSpecificPropertyChangedFilters: t
                } = e;
                return !t || await r(647095).Gh({
                    message: (0, a.jsx)(r(109939).sA, {
                        id: "automations.eventTriggerMenu.replaceTriggerConfirmation.message",
                        defaultMessage: "Replace other triggers?"
                    }),
                    description: (0, a.jsx)(r(109939).sA, {
                        id: "automations.eventTriggerMenu.replaceTriggerConfirmation.description",
                        defaultMessage: "Adding the ‘Any property edited’ trigger will replace all other property triggers."
                    }),
                    acceptLabel: (0, a.jsx)(r(109939).sA, {
                        id: "automations.eventTriggerMenu.replaceTriggerConfirmation.acceptLabel",
                        defaultMessage: "Replace"
                    })
                }).then(e => e.accept)
            }

            function h(e) {
                let {
                    propertyId: t,
                    automationTriggerMenuStore: n,
                    propertySchema: i,
                    propertyChangedFilter: l,
                    onClose: s
                } = e, {
                    updatePropertyTrigger: u
                } = (0, r(287134).p)(), d = (0, o.useCallback)(e => {
                    u({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter
                    })
                }, [u]);
                return (0, a.jsx)(r(452258).Y, {
                    propertyId: t,
                    menuStore: n,
                    propertySchema: i,
                    propertyChangedFilter: l,
                    onCommit: d,
                    onClose: s
                })
            }

            function f(e) {
                let {
                    automationTriggerMenuStore: t,
                    onClose: n,
                    propertyChangedFilter: i,
                    propertySchema: l,
                    propertyId: s,
                    shouldUseDefaultPropertyOperator: u
                } = e, {
                    updatePropertyTrigger: d
                } = (0, r(287134).p)(), {
                    typecheckResult: c,
                    automationStore: p
                } = (0, r(605263).q8)(), m = (0, o.useMemo)(() => (0, r(122455).getAllContextValues)(c), [c]), g = (0, o.useCallback)(e => {
                    d({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter,
                        propertySchema: e.propertySchema
                    })
                }, [d]);
                return (0, a.jsx)(r(842476).Q, {
                    menuStore: t,
                    onClose: n,
                    onCommit: g,
                    parentRecordStore: p,
                    propertyChangedFilter: i,
                    propertyId: s,
                    propertySchema: l,
                    shouldUseDefaultPropertyOperator: u,
                    formulaTypecheckContextValues: m
                })
            }

            function x(e) {
                let {
                    automationTriggerMenuStore: t,
                    collectionStore: n,
                    onClose: i,
                    propertyChangedFilter: l,
                    propertySchema: s,
                    propertyId: u,
                    shouldUseDefaultPropertyOperator: d
                } = e, {
                    updatePropertyTrigger: c
                } = (0, r(287134).p)(), {
                    automationStore: p,
                    typecheckResult: m
                } = (0, r(605263).q8)(), g = (0, o.useMemo)(() => (0, r(122455).getAllContextValues)(m), [m]), y = (0, o.useCallback)(e => {
                    c({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter,
                        propertySchema: s
                    })
                }, [s, c]);
                return (0, a.jsx)(r(994056).y, {
                    collectionStore: n,
                    formulaTypecheckContextValues: g,
                    menuStore: t,
                    onClose: i,
                    onCommit: y,
                    parentRecordStore: p,
                    propertyChangedFilter: l,
                    propertyId: u,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: d
                })
            }

            function v(e) {
                let {
                    automationTriggerMenuStore: t,
                    collectionStore: n,
                    onClose: i,
                    propertyChangedFilter: l,
                    propertySchema: s,
                    propertyId: u,
                    shouldUseDefaultPropertyOperator: d
                } = e, {
                    updatePropertyTrigger: c
                } = (0, r(287134).p)(), {
                    automationStore: p,
                    typecheckResult: m
                } = (0, r(605263).q8)(), g = (0, o.useMemo)(() => (0, r(122455).getAllContextValues)(m), [m]), y = (0, o.useCallback)(e => {
                    c({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter,
                        propertySchema: s
                    })
                }, [s, c]);
                return (0, a.jsx)(r(794481).R, {
                    collectionStore: n,
                    formulaTypecheckContextValues: g,
                    menuStore: t,
                    onClose: i,
                    onCommit: y,
                    parentRecordStore: p,
                    propertyChangedFilter: l,
                    propertyId: u,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: d
                })
            }

            function b(e) {
                let {
                    automationTriggerMenuStore: t,
                    onClose: n,
                    propertyChangedFilter: i,
                    propertyId: l,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: u
                } = e, {
                    updatePropertyTrigger: d
                } = (0, r(287134).p)(), c = (0, o.useCallback)(e => {
                    d({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter,
                        propertySchema: e.propertySchema
                    })
                }, [d]);
                return (0, a.jsx)(r(911371).$, {
                    menuStore: t,
                    onClose: n,
                    onCommit: c,
                    propertyChangedFilter: i,
                    propertyId: l,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: u
                })
            }

            function S(e) {
                let {
                    propertyId: t,
                    automationTriggerMenuStore: n,
                    propertySchema: i,
                    propertyChangedFilter: l,
                    onClose: s
                } = e, {
                    updatePropertyTrigger: u
                } = (0, r(287134).p)(), d = (0, o.useCallback)(e => {
                    u({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter,
                        propertySchema: e.propertySchema
                    })
                }, [u]);
                return (0, a.jsx)(r(98755).r, {
                    propertyId: t,
                    menuStore: n,
                    propertySchema: i,
                    propertyChangedFilter: l,
                    onCommit: d,
                    onClose: s
                })
            }

            function j(e) {
                let {
                    automationTriggerMenuStore: t,
                    onClose: n,
                    propertyChangedFilter: i,
                    propertySchema: l,
                    propertyId: s,
                    shouldUseDefaultPropertyOperator: u
                } = e, {
                    updatePropertyTrigger: d
                } = (0, r(287134).p)(), {
                    automationStore: c,
                    typecheckResult: p
                } = (0, r(605263).q8)(), m = (0, o.useMemo)(() => (0, r(122455).getAllContextValues)(p), [p]), g = (0, o.useCallback)(e => {
                    d({
                        anyOptionCheckState: e.anyOptionCheckState,
                        propertyId: e.propertyId,
                        currentFilter: e.filter,
                        propertySchema: e.propertySchema
                    })
                }, [d]);
                return (0, a.jsx)(r(913146).E, {
                    menuStore: t,
                    onClose: n,
                    onCommit: g,
                    parentRecordStore: c,
                    propertyChangedFilter: i,
                    propertyId: s,
                    propertySchema: l,
                    shouldUseDefaultPropertyOperator: u,
                    formulaTypecheckContextValues: m
                })
            }

            function k(e) {
                let {
                    propertyId: t,
                    automationTriggerMenuStore: o,
                    onClose: n
                } = e, {
                    automationStore: i,
                    collectionStore: l
                } = (0, r(305042).k)(), s = (0, r(682985).K8)(() => l.getSchema(), [l])[t], u = (0, r(682985).K8)(() => i.getTrigger(), [i]), d = [];
                (null == u ? void 0 : u.type) === "event" && ("some" === u.event.pagePropertiesEdited.type ? d = u.event.pagePropertiesEdited.some || [] : "all" === u.event.pagePropertiesEdited.type && (d = u.event.pagePropertiesEdited.all || []));
                let c = d.find(e => e.property === t),
                    p = c ? ? {
                        property: t,
                        filter: {
                            operator: "changes_to_any"
                        }
                    };
                if (!s || !(0, r(976298).nq)(s)) return null;
                let m = !(0, r(722371).O9)(c);
                if ("multi_select" === s.type || "select" === s.type) return (0, a.jsx)(b, {
                    automationTriggerMenuStore: o,
                    onClose: n,
                    propertyChangedFilter: p.filter,
                    propertyId: t,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: m
                });
                if ("status" === s.type) return (0, a.jsx)(S, {
                    propertyId: t,
                    automationTriggerMenuStore: o,
                    propertySchema: s,
                    propertyChangedFilter: p.filter,
                    onClose: n
                });
                if ("checkbox" === s.type) return (0, a.jsx)(h, {
                    automationTriggerMenuStore: o,
                    onClose: n,
                    propertyChangedFilter: p.filter,
                    propertyId: t,
                    propertySchema: s
                });
                if ("person" === s.type) return (0, a.jsx)(x, {
                    automationTriggerMenuStore: o,
                    collectionStore: l,
                    onClose: n,
                    propertyChangedFilter: p.filter,
                    propertyId: t,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: m
                });
                if ("number" === s.type) return (0, a.jsx)(f, {
                    automationTriggerMenuStore: o,
                    onClose: n,
                    propertyChangedFilter: p.filter,
                    propertyId: t,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: m
                });
                else if ("email" === s.type || "phone_number" === s.type || "text" === s.type || "title" === s.type || "url" === s.type) return (0, a.jsx)(j, {
                    automationTriggerMenuStore: o,
                    onClose: n,
                    propertyChangedFilter: p.filter,
                    propertyId: t,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: m
                });
                else if ("relation" === s.type) return (0, a.jsx)(v, {
                    automationTriggerMenuStore: o,
                    collectionStore: l,
                    onClose: n,
                    propertyChangedFilter: p.filter,
                    propertyId: t,
                    propertySchema: s,
                    shouldUseDefaultPropertyOperator: m
                });
                return null
            }

            function A(e) {
                let {
                    initialState: t,
                    buttonPopupParent: n
                } = e, i = (0, r(682985).K8)(() => {
                    let e = new(r(216005)).A;
                    return e.setState({
                        stack: [t]
                    }), e
                }, [t]), l = (0, r(682985).K8)(() => i.getCurrentTab(), [i]), u = (0, o.useCallback)(() => n.close(), [n]);
                return l ? "eventTriggers" === l.type ? (0, a.jsx)(s, {
                    automationTriggerMenuStore: i,
                    onClose: u
                }) : "propertyChangedFilter" === l.type ? (0, a.jsx)(k, {
                    propertyId: l.property,
                    automationTriggerMenuStore: i,
                    onClose: u
                }) : (0, r(722371).HB)(l) : null
            }
        },
        44426: (e, t, r) => {
            r.d(t, {
                A: () => i,
                r: () => c
            });
            var o = r(296540),
                n = r(474848);
            let a = (0, r(109939).YK)({
                backButtonAriaLabel: {
                    id: "notificationRuleSettingsMenu.backButton.ariaLabel",
                    defaultMessage: "Back to previous step"
                }
            });

            function i(e) {
                let {
                    triggerActionMenuStore: t,
                    customMenuProps: a,
                    headerTitle: i,
                    onClose: u,
                    onDone: d,
                    subHeaderComponent: p,
                    type: m,
                    width: g
                } = e, y = (0, o.useRef)(!1), h = c({
                    triggerActionMenuStore: t,
                    customMenuProps: a,
                    onClose: u,
                    onDone: (0, o.useCallback)(() => {
                        y.current = !0, null == d || d()
                    }, [d]),
                    subHeaderComponent: p,
                    title: i,
                    width: g
                });
                return (0, r(637030).X)(() => {
                    let e = t.getState().stack,
                        o = e[e.length - 1];
                    !y.current && (0, r(722371).O9)(o) && "propertyChangedFilter" === o.type && (null == d || d())
                }), "custom" === m ? (0, n.jsx)(s, { ...e,
                    menuProps: h
                }) : (0, n.jsx)(l, { ...e,
                    menuProps: h
                })
            }

            function l(e) {
                let {
                    sections: t,
                    menuProps: o
                } = e;
                return (0, n.jsx)(r(747369).A, { ...o,
                    children: (0, n.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: 0,
                        sections: t
                    })
                })
            }

            function s(e) {
                let {
                    children: t,
                    menuProps: o
                } = e;
                return (0, n.jsx)(r(747369).A, { ...o,
                    children: t
                })
            }
            let u = {
                header: {
                    display: "flex",
                    alignItems: "center",
                    color: r(632079).Tj.text.secondary,
                    fontWeight: r(699422).Wy.medium,
                    fontSize: r(699422).J.UISmall.desktop,
                    padding: 8,
                    justifyContent: "space-between"
                },
                leadingItems: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                },
                iconButtonStyle: {
                    height: r(104509).Ev.default,
                    width: r(104509).Ev.default
                }
            };

            function d(e) {
                let {
                    automationActionMenuStore: t,
                    menuHeaderTitle: o,
                    onDone: i,
                    subHeaderComponent: l
                } = e, s = (0, r(109939).tz)(), d = (0, r(682985).K8)(() => t.state.stack.length > 1, [t]);
                return void 0 !== o || d ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        style: u.header,
                        children: [(0, n.jsxs)("div", {
                            style: u.leadingItems,
                            children: [d ? (0, n.jsx)(r(374533).A, {
                                ariaLabel: s.formatMessage(a.backButtonAriaLabel),
                                icon: r(374241).arrowStraightLeftSmallIcon,
                                style: u.iconButtonStyle,
                                onClick: () => {
                                    t.popSettingsItem()
                                }
                            }) : void 0, o]
                        }), i ? (0, n.jsx)(r(988022).p, {
                            onClick: i,
                            colorPalette: "blue",
                            size: "xs",
                            children: (0, n.jsx)(r(109939).sA, {
                                id: "automationTriggerActionMenu.doneButton.title",
                                defaultMessage: "Done"
                            })
                        }) : void 0]
                    }), l]
                }) : null
            }

            function c(e) {
                let {
                    triggerActionMenuStore: t,
                    customMenuProps: i = {},
                    onClose: l,
                    onDone: s,
                    subHeaderComponent: u,
                    title: c,
                    width: p
                } = e, m = (0, r(109939).tz)(), g = (0, o.useCallback)(() => {
                    1 === t.getState().stack.length ? l() : t.popSettingsItem()
                }, [t, l]);
                return (0, o.useMemo)(() => r(986939).A.isMobile ? { ...i,
                    minWidth: 260,
                    menuType: r(649476).gu.Modal,
                    title: c,
                    left: (0, n.jsx)(r(374533).A, {
                        ariaLabel: m.formatMessage(a.backButtonAriaLabel),
                        icon: r(128743).arrowStraightLeftIcon,
                        size: "md",
                        onClick: g
                    }),
                    right: (0, n.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: () => {
                        null == s || s()
                    },
                    header: u
                } : {
                    width: p ? ? 266,
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    header: (0, n.jsx)(d, {
                        automationActionMenuStore: t,
                        menuHeaderTitle: c,
                        subHeaderComponent: u,
                        onDone: s
                    })
                }, [t, i, m, s, g, u, c, p])
            }
        },
        45453: (e, t, r) => {
            r.d(t, {
                L: () => i,
                g: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                iconWrap: {
                    display: "inline-block",
                    fill: r(632079).Tj.icon.secondary,
                    height: "1em",
                    position: "relative",
                    verticalAlign: "-0.15em",
                    width: "1em"
                },
                icon: {
                    width: "100%"
                }
            };

            function a(e) {
                let {
                    returnType: t
                } = e, a = (0, r(297493).Ix)(t);
                return (0, o.jsx)(r(730712).R, {
                    icon: (0, o.jsx)("span", {
                        style: n.iconWrap,
                        children: a(n.icon)
                    }),
                    index: 0,
                    theme: r(632079).Tj,
                    children: (0, o.jsx)(r(109939).sA, { ...r(760459).CV.inlineCustomFormulaDefaultName
                    })
                })
            }

            function i() {
                return (0, o.jsx)(r(109939).sA, { ...r(760459).CV.inlineCustomFormulaDefaultName
                })
            }
        },
        59871: (e, t, r) => {
            r.d(t, {
                d: () => n
            }), r(944114), r(296540);
            var o = r(474848);

            function n(e, t = {}) {
                if (!Array.isArray(e)) return [e];
                let r = [];
                for (let n of e)
                    if ("string" == typeof n && " " !== n[0]) {
                        let e = r.pop();
                        r.push((0, o.jsxs)("div", {
                            style: t,
                            children: [e, n]
                        }))
                    } else r.push(n);
                return r
            }
        },
        79442: (e, t, r) => {
            r.d(t, {
                RY: () => i,
                cn: () => c,
                gI: () => u,
                m9: () => d,
                z$: () => s
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                propertyType: {
                    color: r(632079).Tj.palette.red[700]
                }
            };

            function i(e) {
                let {
                    actionId: t,
                    actionMenu: r,
                    buttonPopupStore: o,
                    disabled: i,
                    onClick: l,
                    propertySchema: u
                } = e, p = d({
                    propertySchema: u
                }), m = c();
                return (0, n.jsx)(s, {
                    actionId: t,
                    actionMenu: r,
                    buttonPopupStore: o,
                    disabled: i,
                    onClick: l,
                    propertyType: u.type,
                    styles: a,
                    tooltip: m,
                    children: p
                })
            }
            let l = {
                content: {
                    color: r(632079).Tj.red.text.accentPrimary,
                    fontWeight: r(699422).Wy.regular,
                    whiteSpace: "normal"
                }
            };

            function s(e) {
                let {
                    actionId: t,
                    actionMenu: a,
                    buttonPopupStore: i,
                    children: s,
                    disabled: u,
                    onClick: d,
                    propertyType: c,
                    styles: p,
                    tooltip: m,
                    tooltipPlacement: g
                } = e, y = (0, o.useCallback)(e => (0, n.jsx)(r(787476).aX, { ...e,
                    actionId: t,
                    actionMenu: a,
                    buttonPopupStore: i,
                    disabled: u,
                    icon: (0, r(722371).O9)(c) ? r(221535).LE[c] : r(789777).exclamationMarkTriangleFillIcon,
                    onClick: d,
                    styles: p,
                    hideDragHandle: !0,
                    children: (0, n.jsx)("div", {
                        style: l.content,
                        children: s
                    })
                }), [t, a, i, s, u, d, p, c]);
                return (0, n.jsx)(r(703676).P, {
                    renderOrigin_DEPRECATED: y,
                    title: m,
                    tooltipPlacement: g
                })
            }

            function u(e) {
                let {
                    actionId: t,
                    propertyId: a,
                    children: i
                } = e, l = (0, r(554988).j)(), s = (0, r(682985).uB)(void 0, r(510969).A), u = (0, o.useCallback)(() => s.reset(), [s]);
                return (0, n.jsx)(r(656252).A, {
                    buttonPopupStore: s,
                    popupType: l,
                    content: () => (0, n.jsx)(r(659698).qM, {
                        actionId: t,
                        closeMenu: u,
                        propertyId: a
                    }),
                    children: i
                })
            }

            function d(e) {
                let {
                    propertySchema: t
                } = e, o = t.type, a = r(799514).dC[o];
                return (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "“{propertyTypeDisplayName}” property type is not supported",
                    id: "updateThisPageUnsupportedPropertyAction.updatedUnsupportedProperty.titleElement",
                    values: {
                        propertyTypeDisplayName: a
                    }
                })
            }

            function c() {
                return (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "Change property type or delete to enable this automation",
                    id: "updateThisPageUnsupportedPropertyAction.updatedUnsupportedProperty.title"
                })
            }
        },
        95746: (e, t, r) => {
            r.d(t, {
                Cp: () => d,
                D2: () => u,
                aS: () => l,
                m9: () => s,
                pg: () => i
            }), r(944114), r(898992), r(354520), r(581454), r(908872);
            var o = r(296540),
                n = () => r(247438),
                a = r(474848);

            function i(e) {
                let t = (0, r(682985).K8)(() => {
                    let t;
                    if ("collection" !== e.type) return;
                    let o = e.collectionStore.getSchema()[e.property];
                    return o && (0, r(9247).sO)(o) && (t = o.limit), t
                }, [e]);
                return (0, o.useCallback)((e, o) => (0, r(722371).O9)(t) ? "first" === o ? e.slice(0, t) : "last" === o ? e.slice(-t) : void(0, r(722371).HB)(o) : e, [t])
            }

            function l(e) {
                var t;
                let o = null == (t = e.collectionStore.getSchema()) ? void 0 : t[e.property];
                return o && "date" === o.type ? {
                    dateFormat: o.date_format || r(943003).vz,
                    timeFormat: o.time_format || r(943003).CE
                } : {
                    dateFormat: r(943003).vz,
                    timeFormat: r(943003).CE
                }
            }

            function s(e, t, o) {
                if ((null == e ? void 0 : e.type) === "simple" && e.value) {
                    let a = e.value.reduce((e, a) => {
                            let i = e.length > 0;
                            if ((0, n().bHQ)(a)) {
                                if (i || !(0, n()._g9)(a)) {
                                    let t = a[0];
                                    if (c(t)) {
                                        let r = p(t);
                                        e.push((0, n().Ey_)(r))
                                    } else e.push((0, n().Ey_)(`"${t}"`))
                                }
                            } else if ((0, n().BEe)(a)) {
                                let t = a[0];
                                if (c(t)) {
                                    let r = p(t);
                                    e.push((0, n().Ey_)(r))
                                } else e.push((0, n().Ey_)(`"${t}"`))
                            } else if ((0, n().qXl)(a)) {
                                let i = function({
                                    mentionToken: e,
                                    contextValues: t,
                                    getRecordModel: o
                                }) {
                                    let a = (0, n().uPN)(e),
                                        i = (0, n().TVE)(a);
                                    if (i && (0, n()._Nw)(i[1])) {
                                        let e, a, s = i[1],
                                            u = s.property,
                                            d = (0, r(297493)._H)(t, s.contextValueId);
                                        if (d && d.kind === r(416901).FormulaContextValueKind.ContextValue && "block" === d.type.type && (a = d.type.collection), a) {
                                            let t = o(a);
                                            if (t) {
                                                var l;
                                                e = null == (l = t.getSchema()[u]) ? void 0 : l.name
                                            }
                                        }
                                        if (!e && d && ((0, r(511791).PJ)(u) ? e = (0, r(464930).i)(u) : s.name && (e = s.name)), e) {
                                            let t = (0, n().CA$)({
                                                    id: s.contextValueId
                                                }),
                                                r = (0, n().ESw)({
                                                    property: u,
                                                    name: e,
                                                    collection: a
                                                });
                                            return [(0, n().wmz)(t), (0, n().Ey_)("."), (0, n().wmz)(r)]
                                        }
                                    }
                                }({
                                    mentionToken: a,
                                    contextValues: t,
                                    getRecordModel: o
                                });
                                if (i) e.push(...i);
                                else {
                                    let t = (0, n().uPN)(a),
                                        r = (0, n().jhx)(t);
                                    if (r) {
                                        let o = t.filter(e => !(0, n().jcO)(e));
                                        e.push((0, n().wmz)(r, o))
                                    }
                                }
                            }
                            return e
                        }, []),
                        i = (0, n().__s)((e => {
                            let t = [];
                            for (let r = 0; r < e.length; r++) {
                                let o = e[r],
                                    a = e[r + 1];
                                (0, n().bHQ)(o) && " + " === o[0] && a && (0, n().bHQ)(a) && a[0].startsWith(".") || t.push(o)
                            }
                            return t
                        })((e => {
                            let t = [];
                            for (let r = 0; r < e.length; r++) {
                                let o = e[r],
                                    a = e[r + 1];
                                t.push(o), !(r < e.length - 1) || (0, n().bHQ)(o) && "." === o[0] || a && (0, n().bHQ)(a) && ("." === a[0] || a[0].startsWith(".")) || t.push((0, n().Ey_)(" + "))
                            }
                            return t
                        })(a)));
                    return i.length > 0 ? i : void 0
                }
                return null == e ? void 0 : e.value
            }

            function u(e) {
                if (!e || 0 === e.length) return;
                let t = [];
                for (let r = 0; r < e.length; r++) {
                    let o = e[r];
                    if ((0, n().bHQ)(o)) {
                        let {
                            result: e,
                            skip: r
                        } = function(e) {
                            let t = e[0];
                            if (" + " === t || "." === t) return {
                                result: null,
                                skip: !0
                            };
                            if (t.includes('"') && t.includes("+")) {
                                if (t.match(/(?:[a-zA-Z_]\w*|\.\w+)\s*\(/)) return {
                                    result: e,
                                    skip: !1
                                };
                                let r = t.match(/"(?:[^"\\]|\\.)*"/g);
                                if (r) {
                                    let e = r.map(e => e.slice(1, -1).replace(/\\"/g, '"')).join("");
                                    return {
                                        result: (0, n().Ey_)(e),
                                        skip: !1
                                    }
                                }
                                return {
                                    result: e,
                                    skip: !1
                                }
                            }
                            let r = t.match(/^\s*\+\s*"(.*)"\s*$/);
                            if (r) return {
                                result: (0, n().Ey_)(r[1]),
                                skip: !1
                            };
                            if (t.startsWith('"') && t.endsWith('"')) {
                                let e = t.slice(1, -1);
                                return {
                                    result: (0, n().Ey_)(e),
                                    skip: !1
                                }
                            }
                            return {
                                result: e,
                                skip: !1
                            }
                        }(o);
                        if (r) continue;
                        e && t.push(e)
                    } else if ((0, n().qXl)(o)) {
                        let {
                            result: a,
                            skipCount: i
                        } = function(e, t, r) {
                            let o = (0, n().uPN)(e),
                                a = (0, n().tVx)(o);
                            if (!a || r + 2 >= t.length) return {
                                result: e,
                                skipCount: 0
                            };
                            let i = t[r + 1],
                                l = t[r + 2];
                            if (!(0, n().bHQ)(i) || "." !== i[0] || !(0, n().qXl)(l)) return {
                                result: e,
                                skipCount: 0
                            };
                            let s = (0, n().uPN)(l),
                                u = (0, n().TVE)(s);
                            if (!u) return {
                                result: e,
                                skipCount: 0
                            };
                            let d = (0, n().iVq)(a),
                                c = (0, n().GCe)(u),
                                p = (0, n().ESw)({
                                    contextValueId: d.id,
                                    property: c.property,
                                    name: c.name,
                                    valueSnapshot: "current"
                                });
                            return {
                                result: (0, n().wmz)(p),
                                skipCount: 2
                            }
                        }(o, e, r);
                        a && t.push(a), r += i
                    } else t.push(o)
                }
                let r = t.filter(e => (0, n().N8A)(e).length > 0);
                if (0 !== r.length) return {
                    type: "simple",
                    value: (0, n().__s)(r)
                }
            }
            async function d() {
                let {
                    accept: e
                } = await r(647095).Gh({
                    acceptButtonType: "outline",
                    acceptColor: void 0,
                    acceptLabel: (0, a.jsx)(r(109939).sA, {
                        id: "formulaInputMenu.handleBack.convert",
                        defaultMessage: "Convert"
                    }),
                    cancelButtonType: "outline",
                    description: (0, a.jsx)(r(109939).sA, {
                        id: "formulaInputMenu.handleBack.description",
                        defaultMessage: "Existing formula content will be lost"
                    }),
                    icon: (0, a.jsx)(r(16275).I, {
                        icon: r(183657).i,
                        size: 36
                    }),
                    message: (0, a.jsx)(r(109939).sA, {
                        id: "formulaInputMenu.handleBack.message",
                        defaultMessage: "Convert this variable from a formula to plain text?"
                    })
                });
                return e
            }

            function c(e) {
                return /(?:[a-zA-Z_]\w*|\.\w+)\s*\(/.test(e)
            }

            function p(e) {
                return e.replace(/\s*\+\s*(\.[\w]+\s*\()/g, "$1")
            }
        },
        98755: (e, t, r) => {
            r.d(t, {
                r: () => a
            }), r(898992), r(823215), r(581454), r(737550);
            var o = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    propertyId: t,
                    menuStore: a,
                    propertySchema: i,
                    propertyChangedFilter: l,
                    onClose: s,
                    onCommit: u
                } = e, d = (0, o.useMemo)(() => "changes_to_any" === l.operator ? (i.groups ? ? []).map(e => ({
                    type: "is_group",
                    value: e.name
                })) : (0, r(400473).H$)(l) && (0, r(400473).gc)(l) ? (0, r(400473).V6)(l) : [], [l, i]), [c, p] = (0, o.useState)(d);
                (0, o.useEffect)(() => {
                    p(d)
                }, [d]);
                let m = (0, o.useMemo)(() => (function(e) {
                        let {
                            propertySchema: t,
                            selectedStatusOptions: o
                        } = e, n = t.groups ? ? [], a = t.options ? ? [], i = n.map(e => (0, r(698087).Ze)({
                            group: e,
                            options: a,
                            filterValues: o
                        })), l = i.every(e => !0 === e.groupCheckState), s = i.some(e => !1 !== e.groupCheckState);
                        return !!l || !!s && "partial"
                    })({
                        propertySchema: i,
                        selectedStatusOptions: c
                    }), [i, c]),
                    g = (0, o.useMemo)(() => (i.groups ? ? []).map(e => ({
                        type: "is_group",
                        value: e.name
                    })), [i]),
                    y = (0, r(670277).T)({
                        propertySchema: i,
                        statusFilterValues: c,
                        updateValue: e => {
                            p(e)
                        },
                        isMobile: r(986939).A.isMobile,
                        styles: {},
                        visibleOptions: i.options ? ? []
                    }),
                    h = (0, o.useRef)(() => {});
                return (0, o.useEffect)(() => {
                    h.current = () => {
                        u({
                            anyOptionCheckState: m,
                            filter: 0 === c.length ? {
                                operator: "is_empty"
                            } : {
                                operator: "status_is",
                                value: c
                            },
                            propertyId: t,
                            propertySchema: i
                        }), s()
                    }
                }, [m, s, u, t, i, c]), (0, n.jsx)(r(44426).A, {
                    type: "default",
                    triggerActionMenuStore: a,
                    onDone: () => {
                        h.current()
                    },
                    onClose: s,
                    sections: [{
                        key: "any",
                        items: [{
                            key: "any-option-item",
                            action: () => {
                                !0 === m ? p([]) : !1 === m || "partial" === m ? p(g) : (0, r(722371).HB)(m)
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                icon: (0, n.jsx)(r(349050).S, {
                                    checked: m,
                                    size: 14,
                                    onClick: e.onClick
                                }),
                                title: (0, n.jsx)(r(109939).sA, {
                                    id: "triggerPropertyChangedFilterMenu.anyOption.title",
                                    defaultMessage: "Any option"
                                })
                            })
                        }]
                    }, {
                        key: "items",
                        items: y,
                        render: e => (0, n.jsx)(r(844565).A, { ...e,
                            topBorder: !0
                        })
                    }],
                    headerTitle: (0, n.jsx)(r(109939).sA, {
                        id: "propertyChangedFilterHeader.status.title",
                        defaultMessage: "{propertyName} set to",
                        values: {
                            propertyName: i.name
                        }
                    }),
                    customMenuProps: {
                        leftOuterStyle: {
                            flex: "unset"
                        },
                        rightOuterStyle: {
                            flex: "unset"
                        },
                        titleOuterStyle: {
                            flex: "unset"
                        },
                        topbarStyle: {
                            justifyContent: "space-between"
                        }
                    }
                })
            }
        },
        99192: (e, t, r) => {
            r.d(t, {
                Y: () => n,
                m: () => a
            });
            var o = r(296540);
            let n = (0, o.createContext)({
                stepNumber: void 0
            });

            function a() {
                return (0, o.useContext)(n).stepNumber
            }
            n.displayName = "AutomationStepNumberContext"
        },
        116894: (e, t, r) => {
            r.d(t, {
                Y: () => l,
                h: () => i
            }), r(944114), r(898992), r(354520), r(296540);
            var o = () => r(197018),
                n = () => r(659341),
                a = r(474848);

            function i(e) {
                let {
                    filter: t,
                    propertySchema: o,
                    onClick: n
                } = e, {
                    automationStore: i
                } = (0, r(605263).q8)(), s = (0, r(682985).K8)(() => l(t, i.getRecordModel), [i.getRecordModel, t]), {
                    title: u,
                    tooltipTitle: d,
                    styles: c
                } = (0, r(849339).oG)({
                    automationStore: i,
                    actorOrGroupModels: s,
                    messageType: "trigger",
                    operator: t.operator,
                    propertySchema: o
                });
                return (0, a.jsx)(r(238082).z, {
                    onClick: n,
                    tooltip: (0, a.jsx)("span", {
                        children: d
                    }),
                    children: (0, a.jsx)("div", {
                        style: c.content,
                        children: u
                    })
                })
            }

            function l(e, t) {
                let a = (0, r(19484).W)(e),
                    i = [];
                for (let e of a)
                    if ("exact" === e.type && e.value)
                        if ("space_permission_group" === e.value.table) {
                            let r = t((0, n().S4)({
                                spacePermissionGroupId: e.value.id,
                                spaceId: e.value.spaceId
                            }));
                            i.push({
                                type: "group",
                                model: r
                            })
                        } else {
                            let r = (0, o().xC)({
                                pointer: e.value,
                                getRecordModel: t
                            });
                            i.push({
                                type: "actor",
                                model: r
                            })
                        }
                return i
            }
        },
        118794: (e, t, r) => {
            r.d(t, {
                Mh: () => s,
                Zr: () => i
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                content: { ...r(699422).RC,
                    color: r(632079).Tj.red.text.accentPrimary,
                    fontWeight: r(699422).Wy.medium,
                    whiteSpace: "normal"
                },
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                propertyName: {
                    color: r(632079).Tj.palette.red[700],
                    fontWeight: r(699422).Wy.semibold,
                    whiteSpace: "nowrap"
                }
            };

            function i(e) {
                let {
                    propertySchema: t
                } = e, {
                    property: i
                } = (0, o.useContext)(r(629177)._B), {
                    removePropertyTrigger: s
                } = (0, r(287134).p)(), u = (0, r(554988).j)(), d = (0, r(682985).uB)(void 0, r(510969).A), c = (0, o.useCallback)(() => d.reset(), [d]), p = (0, o.useCallback)(() => {
                    s(i)
                }, [i, s]), m = function(e) {
                    let {
                        propertySchema: t,
                        styles: o
                    } = e;
                    return (0, n.jsx)(r(109939).sA, {
                        defaultMessage: "{propertyName} property is a cross-workspace relation",
                        id: "crossWorkspaceRelationPropertyTrigger.title",
                        values: {
                            propertyName: (0, n.jsx)("span", {
                                style: o.propertyName,
                                children: t.name
                            })
                        }
                    })
                }({
                    propertySchema: t,
                    styles: a
                }), g = function(e) {
                    let {
                        propertySchema: t
                    } = e;
                    return (0, n.jsx)(r(109939).sA, {
                        defaultMessage: "{propertyName} property is a cross-workspace relation. Cross-workspace features are restricted in automations and will not work.",
                        id: "crossWorkspaceRelationPropertyTrigger.tooltip",
                        values: {
                            propertyName: function(e) {
                                let {
                                    maxLength: t,
                                    text: r,
                                    truncateCharacter: o
                                } = e, n = Array.from(r);
                                return n.length <= t ? r : `${n.slice(0,t-1).join("")}${o??"…"}`
                            }({
                                maxLength: 20,
                                text: t.name
                            })
                        }
                    })
                }({
                    propertySchema: t
                });
                return (0, n.jsx)(r(656252).A, {
                    buttonPopupStore: d,
                    popupType: u,
                    content: () => (0, n.jsx)(l, {
                        closeMenu: c,
                        propertyId: i
                    }),
                    children: e => (0, n.jsx)(r(511289).X, { ...e,
                        icon: r(789777).exclamationMarkTriangleFillIcon,
                        onDelete: p,
                        styles: a,
                        tooltip: g,
                        children: (0, n.jsx)("div", {
                            style: a.content,
                            children: m
                        })
                    })
                })
            }

            function l(e) {
                let {
                    closeMenu: t,
                    propertyId: a
                } = e, {
                    removePropertyTrigger: i
                } = (0, r(287134).p)(), l = (0, o.useCallback)(() => {
                    i(a), null == t || t()
                }, [t, a, i]);
                return (0, n.jsx)(r(659698).Ol, {
                    onDelete: l,
                    stepType: "trigger"
                })
            }

            function s(e) {
                let {
                    propertySchema: t
                } = e;
                return (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "{propertyName} property is a cross-workspace relation",
                    id: "crossWorkspaceRelationPropertyTrigger.title",
                    values: {
                        propertyName: t.name
                    }
                })
            }
        },
        119165: (e, t, r) => {
            r.d(t, {
                Mn: () => a,
                Oj: () => n,
                fJ: () => l
            });
            let o = ["person_contains", "person_does_not_contain", "is_empty", "changes_to_any"];

            function n(e) {
                return o.includes(e) ? e : "person_contains"
            }

            function a(e, t) {
                return "actor" === t.type ? (0, r(197018).lR)(e, t.model) : (0, r(95384).n)({
                    intl: e,
                    permissionGroupModel: t.model
                })
            }
            let i = (0, r(109939).YK)({
                    changesToAny: {
                        id: "propertyTrigger.personField.changesToAnyOption",
                        defaultMessage: "Is edited"
                    },
                    isEmpty: {
                        id: "propertyTrigger.personField.isEmpty",
                        defaultMessage: "Is cleared"
                    },
                    personContains: {
                        id: "propertyTrigger.personField.personContainsOption",
                        defaultMessage: "Contains"
                    },
                    personDoesNotContain: {
                        id: "propertyTrigger.personField.personDoesNotContainOption",
                        defaultMessage: "Does not contain"
                    }
                }),
                l = {
                    person_contains: {
                        hasInput: !0,
                        text: i.personContains,
                        labelText: i.personContains,
                        value: "person_contains"
                    },
                    person_does_not_contain: {
                        hasInput: !0,
                        labelText: i.personDoesNotContain,
                        text: i.personDoesNotContain,
                        value: "person_does_not_contain"
                    },
                    changes_to_any: {
                        hasInput: !1,
                        text: i.changesToAny,
                        labelText: i.changesToAny,
                        value: "changes_to_any"
                    },
                    is_empty: {
                        hasInput: !1,
                        labelText: i.isEmpty,
                        text: i.isEmpty,
                        value: "is_empty"
                    }
                }
        },
        146217: (e, t, r) => {
            r.d(t, {
                K8: () => a,
                y7: () => i
            }), r(18107), r(944114), r(967357);
            var o = () => r(546605);
            class n extends o().Store {
                getCurrentTab() {
                    return this.getState().stack.at(-1)
                }
                push(e) {
                    this.update(t => ({ ...t,
                        stack: [...t.stack, e]
                    }))
                }
                pop() {
                    this.update(e => ({ ...e,
                        stack: e.stack.slice(0, e.stack.length - 1)
                    }))
                }
                replace(e) {
                    this.update(t => ({ ...t,
                        stack: [...t.stack.slice(0, -1), e]
                    }))
                }
                pushSettingsItem(e) {
                    return this.push(e)
                }
                popSettingsItem() {
                    return this.pop()
                }
                replaceSettingsItem(e) {
                    return this.replace(e)
                }
            }
            class a extends n {
                getInitialState() {
                    return {
                        stack: []
                    }
                }
            }
            class i extends n {}
        },
        153169: (e, t, r) => {
            r.d(t, {
                A: () => l
            }), r(944114), r(581454);
            var o = r(296540);
            r(898992), r(354520);
            var n = r(474848);
            let a = Object.freeze({
                    property: !0
                }),
                i = {
                    style0: {
                        paddingBottom: 0
                    },
                    header: { ...r(986939).A.isMobile && {
                            borderBlockEnd: `1px solid ${r(632079).Tj.border.secondaryTranslucent}`
                        }
                    }
                };

            function l(e) {
                let t, {
                        currentSimpleFormulaValueTokens: l,
                        disableEmojiCommands: s,
                        disableFormulas: u,
                        disableFormattingAndMentions: d,
                        disableMobileActionBar: c,
                        formulaTypecheckContextValues: p,
                        menuProps: m,
                        onChange: g,
                        onClose: y,
                        parentRecordStore: h,
                        showGenericHeader: f = !1,
                        value: x
                    } = e,
                    {
                        header: v,
                        textInput: b,
                        valueItems: S
                    } = function(e) {
                        let t, {
                                currentSimpleFormulaValueTokens: i,
                                disableEmojiCommands: l,
                                disableFormattingAndMentions: s,
                                disableFormulas: u,
                                disableMobileActionBar: d,
                                formulaTypecheckContextValues: c,
                                onChange: p,
                                onClose: m,
                                parentRecordStore: g,
                                value: y
                            } = e,
                            h = (0, r(109939).tz)(),
                            f = (0, o.useMemo)(() => c.filter(e => "text" === e.type.type), [c]),
                            x = (0, r(723240).r)(),
                            v = (0, o.useCallback)(e => {
                                p({
                                    type: "simple",
                                    value: e
                                })
                            }, [p]),
                            b = (0, o.useCallback)(e => {
                                v(e), m()
                            }, [v, m]),
                            S = (0, o.useCallback)(e => {
                                b(void 0 !== e[0] ? (0, r(591864).toSimpleFormulaSingleValue)(e[0]) : void 0)
                            }, [b]),
                            {
                                store: j
                            } = (0, r(430937).AI)({
                                initialValue: null == y ? void 0 : y.value,
                                onChange: v
                            }),
                            k = (0, r(960253).e)(),
                            A = (0, r(960253).I)(() => ({
                                textWrap: {
                                    borderRadius: 6,
                                    lineHeight: "24px",
                                    padding: 1,
                                    ...r(986939).A.isMobile ? {
                                        boxShadow: "unset"
                                    } : {
                                        boxShadow: `${r(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                                        margin: "0 12px"
                                    }
                                },
                                simpleFormulaText: {
                                    fontSize: 12,
                                    width: "100%",
                                    ...r(986939).A.isMobile ? {
                                        padding: "10px"
                                    } : {
                                        paddingTop: 0,
                                        paddingInlineEnd: 8,
                                        paddingBottom: 8,
                                        paddingInlineStart: 8
                                    }
                                },
                                text: {
                                    fontSize: 12,
                                    maxHeight: 120,
                                    overflow: "auto",
                                    ...r(986939).A.isMobile ? {
                                        background: "light" === k ? r(632079).Tj.white : r(632079).Tj.selectLightGray[200],
                                        margin: 0,
                                        padding: "10px"
                                    } : {
                                        background: r(632079).Tj.background.secondaryTranslucent,
                                        padding: "4px 10px"
                                    }
                                }
                            }), [k]),
                            C = r(381453).oE(f.map(e => {
                                if (e.kind === r(416901).FormulaContextValueKind.ContextValue) return {
                                    action: "replace",
                                    currentSimpleFormulaValueTokens: i,
                                    id: e.id || "",
                                    setCurrentTokens: S,
                                    value: e
                                }
                            }));
                        return t = x && g ? (0, n.jsx)(r(638925).Y, { ...s ? {
                                disableDateMentions: !0,
                                disableDateReminderMentions: !0,
                                disableMentions: !0,
                                disableStyleAnnotations: !0,
                                disableInsertedDeletedAnnotations: !0
                            } : {},
                            disabled: !1,
                            disableEmojiCommands: l,
                            disableFormulas: u,
                            disableMobileActionBar: d,
                            formulaTypecheckContextValues: c,
                            onChange: p,
                            onTextEnter: m,
                            parentRecordStore: g,
                            spaceId: x,
                            placeholder: h.formatMessage(r(705743).D.propertyValuePlaceholder),
                            style: A.simpleFormulaText,
                            value: y
                        }) : (0, n.jsx)("div", {
                            className: r(828432).CCX,
                            style: A.textWrap,
                            children: (0, n.jsx)(r(53373).A, {
                                disableComment: !0,
                                disabled: !1,
                                disableEmbedMenu: !0,
                                disableEmojiCommands: l,
                                disableMobileActionBar: d,
                                disableSelectAllBlocks: !0,
                                disableSelectionDrag: !0,
                                disableSlashCommands: !0,
                                ...s ? {
                                    disableDateMentions: !0,
                                    disableDateReminderMentions: !0,
                                    disableMentions: !0,
                                    disableStyleAnnotations: !0,
                                    disableInsertedDeletedAnnotations: !0
                                } : {},
                                onEnter: m,
                                pasteBehavior: "inline",
                                store: j,
                                style: A.text,
                                inPageFind: r(831719).Os.none,
                                placeholder: h.formatMessage(r(705743).D.propertyValuePlaceholder),
                                disabledMentionTypes: a
                            })
                        }), {
                            header: h.formatMessage(r(705743).D.genericMenuHeader),
                            textInput: t,
                            valueItems: C
                        }
                    }({
                        currentSimpleFormulaValueTokens: l,
                        disableFormulas: u,
                        disableEmojiCommands: s,
                        disableFormattingAndMentions: d,
                        disableMobileActionBar: c,
                        formulaTypecheckContextValues: p,
                        onChange: g,
                        onClose: y,
                        parentRecordStore: h,
                        value: x
                    }) || {},
                    j = (0, o.useMemo)(() => S.map(e => {
                        let {
                            annotation: t,
                            itemAction: o
                        } = (0, r(966253).E)({
                            action: e.action,
                            currentSimpleFormulaValueTokens: e.currentSimpleFormulaValueTokens,
                            setCurrentTokens: e.setCurrentTokens,
                            value: e.value
                        });
                        return {
                            key: e.id,
                            render: e => (0, n.jsx)(r(358591).A, {
                                annotation: t,
                                disabled: !1,
                                menuArgs: e,
                                parentRecordStore: h
                            }),
                            action: o
                        }
                    }), [S, h]),
                    k = [];
                j.length > 0 && k.push({
                    key: "textbox",
                    items: j
                }), t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    right: (0, n.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: y,
                    minWidth: 260
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    width: 260,
                    disableHeaderBorder: !0
                };
                let A = f && (0, n.jsx)(r(844565).A, {
                        style: i.style0,
                        title: v
                    }),
                    C = (0, n.jsxs)("div", {
                        style: i.header,
                        children: [r(986939).A.isMobile ? void 0 : (null == m ? void 0 : m.header) || A, (0, n.jsx)(r(844565).A, {
                            children: b
                        })]
                    }),
                    M = (0, n.jsx)(r(558045).A, {
                        initialFocus: 0,
                        sections: k,
                        type: r(558045).O.Vertical
                    }),
                    T = (0, n.jsx)(r(747369).A, { ...t,
                        ...m,
                        header: C,
                        children: M
                    });
                return {
                    headerDiv: C,
                    innerComponents: M,
                    textMenu: T
                }
            }
        },
        179469: (e, t, r) => {
            r.d(t, {
                F: () => l
            });
            var o = r(296540),
                n = r(474848);
            let a = (0, r(109939).YK)({
                    simpleFormulaFormulaActionButtonAriaLabel: {
                        id: "formulas.simpleFormulaFormulaActionButton.ariaLabel",
                        defaultMessage: "Formulas"
                    },
                    simpleFormulaFormulaActionButtonFormulaTooltip: {
                        id: "formulas.simpleFormulaFormulaActionButton.formula.tooltip",
                        defaultMessage: "Edit as formula"
                    },
                    simpleFormulaFormulaActionButtonSimpleFormulaTooltip: {
                        id: "formulas.simpleFormulaFormulaActionButton.simpleFormula.tooltip",
                        defaultMessage: "Edit as text"
                    }
                }),
                i = {
                    height: 20,
                    width: 20
                };

            function l(e) {
                let {
                    disabled: t,
                    onClick: l,
                    value: s
                } = e, u = (null == s ? void 0 : s.type) === "formula", d = (0, r(109939).tz)(), c = (0, r(960253).I)(() => ({
                    formulaIcon: {
                        fill: u ? r(632079).Tj.blue.icon.accentPrimary : r(632079).Tj.icon.secondary,
                        height: r(104509).Ev.sm,
                        width: r(104509).Ev.sm
                    }
                }), [u]), p = (0, o.useCallback)(() => u ? d.formatMessage(a.simpleFormulaFormulaActionButtonSimpleFormulaTooltip) : d.formatMessage(a.simpleFormulaFormulaActionButtonFormulaTooltip), [d, u]), m = (0, o.useCallback)(e => (0, n.jsx)(r(374533).A, { ...e,
                    ariaLabel: d.formatMessage(a.simpleFormulaFormulaActionButtonAriaLabel),
                    disabled: t,
                    disabledFeedback: t,
                    icon: r(982520).A,
                    iconStyle: c.formulaIcon,
                    onClick: l,
                    style: i
                }), [t, d, l, c]);
                return (0, n.jsx)(r(51831).m, {
                    content: p,
                    placement: "bottom",
                    children: m
                })
            }
        },
        216005: (e, t, r) => {
            r.d(t, {
                A: () => n,
                e: () => a
            });
            var o = () => r(146217);
            class n extends o().K8 {}
            class a extends o().y7 {
                getInitialState() {
                    return {
                        stack: [],
                        insertionPoint: void 0
                    }
                }
                getInsertionPoint() {
                    return this.getState().insertionPoint
                }
                setInsertionPoint(e) {
                    this.update(t => ({ ...t,
                        insertionPoint: e
                    }))
                }
            }
        },
        219641: (e, t, r) => {
            r.d(t, {
                G: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                flex: "0 0 auto"
            };

            function a(e) {
                let {
                    children: t,
                    icon: a,
                    shouldTruncateChildren: i
                } = e, l = (0, r(960253).I)(() => {
                    let e = (0, r(632079).LD)(r(632079).Tj, void 0);
                    return {
                        textWrap: { ...i ? r(699422).RC : {},
                            flex: "1 1 auto"
                        },
                        wrap: {
                            backgroundColor: e.backgroundColor,
                            borderRadius: 12,
                            color: e.textColor,
                            display: "inline-flex",
                            gap: 4,
                            minWidth: i ? 50 : void 0,
                            padding: "0 8px"
                        }
                    }
                }, [i]);
                return (0, o.jsxs)("span", {
                    style: l.wrap,
                    children: [a ? (0, o.jsx)("span", {
                        "aria-hidden": "true",
                        style: n,
                        children: a
                    }) : void 0, (0, o.jsx)("span", {
                        style: l.textWrap,
                        children: t
                    })]
                })
            }
        },
        222869: (e, t, r) => {
            r.d(t, {
                _: () => o
            });

            function o(e, t) {
                if (e.size !== t.size) return !1;
                for (let r of e)
                    if (!t.has(r)) return !1;
                return !0
            }
        },
        238082: (e, t, r) => {
            r.d(t, {
                z: () => a
            });
            var o = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    property: t
                } = (0, o.useContext)(r(629177)._B), {
                    collectionStore: a
                } = (0, r(305042).k)(), {
                    removePropertyTrigger: i
                } = (0, r(287134).p)(), l = (0, o.useCallback)(() => {
                    i(t)
                }, [t, i]), s = (0, r(682985).K8)(() => a.getSchema(), [a])[t], u = s ? e => (0, n.jsx)(r(721623).P, {
                    propertySchema: s,
                    style: e
                }) : void 0;
                return (0, n.jsx)(r(511289).X, {
                    icon: u,
                    onDelete: l,
                    ...e,
                    children: e.children
                })
            }
        },
        245261: (e, t, r) => {
            r.d(t, {
                $: () => i
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                overflowWrap: {
                    whiteSpace: "inherit"
                },
                textWrap: {
                    alignItems: "center",
                    display: "flex",
                    fontFamily: (0, r(699422).vc)(r(849917).locale).githubMono
                }
            };

            function i(e) {
                let {
                    formulaTypecheckContextValues: t,
                    parentRecordStore: i,
                    spaceId: l,
                    value: s
                } = e, u = function(e) {
                    let {
                        formulaTypecheckContextValues: t,
                        parentRecordStore: a,
                        spaceId: i,
                        value: l
                    } = e, s = (0, r(533992).v3)(), u = (0, r(533992).Y0)(), d = (0, r(815048).fJ)(r(406921).V), c = (0, r(591404).Ol)(), p = (0, r(960253).e)(), {
                        value: m
                    } = (0, r(815048).fJ)(r(832737).y), [g, y] = (0, o.useMemo)(() => [null == l ? void 0 : l.value, (null == l ? void 0 : l.type) ? ? "simple"], [l]);
                    return (0, r(682985).K8)(() => {
                        if (!g) return "";
                        if ("simple" === y) return (0, r(536614).S5)({
                            disabled: !0,
                            disableDateStyleAnnotations: !1,
                            disableHover: !1,
                            disableInsertedDeletedAnnotations: !1,
                            disableStyleAnnotations: !1,
                            disableSuggestionAnnotations: !1,
                            emojiType: c,
                            environment: s,
                            formulaValueTypes: t,
                            katex: d.value,
                            parentBlockId: void 0,
                            parentStore: a,
                            renderedPageBlockId: void 0,
                            textValue: {
                                value: g,
                                spaceId: i
                            },
                            theme: r(632079).Tj,
                            themeMode: p
                        });
                        if ("formula" === y)
                            if (!m) return "";
                            else {
                                let e = (0, r(632460)._)({
                                    currentUserId: s.currentUser.id,
                                    errorRanges: [],
                                    getPublicBaseUrlForPage: r(135007).tN(s),
                                    isAndroid: u.isAndroid,
                                    isMobileNative: u.isMobileNative,
                                    isSafariOrIOS: u.isSafari || u.isIOS,
                                    isFirefox: u.isFirefox,
                                    isWindows: u.isWindows,
                                    parentSpaceId: i,
                                    Prism: m,
                                    store: a,
                                    textValue: g,
                                    theme: r(632079).Tj,
                                    themeMode: p,
                                    valueTypes: t
                                });
                                return (0, n.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: e
                                    }
                                })
                            }(0, r(722371).HB)(y)
                    }, [m, u.isAndroid, u.isIOS, u.isMobileNative, u.isSafari, u.isFirefox, u.isWindows, c, s, t, d.value, a, i, p, y, g])
                }({
                    formulaTypecheckContextValues: t ? ? [],
                    parentRecordStore: i,
                    spaceId: l,
                    value: s
                });
                return (0, n.jsx)("div", {
                    style: a.textWrap,
                    children: (0, n.jsx)("div", {
                        style: a.overflowWrap,
                        children: u
                    })
                })
            }
        },
        270037: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(581454), r(296540);
            var o = r(474848);
            let n = {
                buttonStyle: {
                    fontSize: r(986939).A.isMobile ? 16 : 12,
                    height: 20,
                    lineHeight: "unset",
                    marginInlineEnd: 0,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    color: r(986939).A.isMobile ? r(632079).Tj.palette.gray[900] : r(632079).Tj.palette.gray[500]
                }
            };

            function a({
                action: e,
                handleOnChange: t
            }) {
                let i = l[e || r(167869).yP];
                return (0, o.jsx)(r(127322).A, {
                    alignmentToOrigin: "start",
                    innerButtonStyle: n.buttonStyle,
                    selectedTitle: (0, o.jsx)(r(109939).sA, { ...i.text
                    }),
                    renderMenuSections: e => [{
                        key: "ReplaceAddRemoveToggleOperator",
                        items: Object.values(l).map(n => ({
                            key: n.value,
                            action: () => {
                                e.close(), t(void 0, n.value)
                            },
                            render: e => (0, o.jsx)(r(95582).A, { ...e,
                                title: (0, o.jsx)(r(109939).sA, { ...n.text
                                })
                            })
                        }))
                    }]
                })
            }
            let i = (0, r(109939).YK)({
                    replace: {
                        id: "automations.propertyAction.button.replaceWith",
                        defaultMessage: "Replace with…"
                    },
                    append: {
                        id: "automations.propertyAction.button.add",
                        defaultMessage: "Add…"
                    },
                    remove: {
                        id: "automations.propertyAction.button.remove",
                        defaultMessage: "Remove…"
                    },
                    toggle: {
                        id: "automations.propertyAction.button.toggle",
                        defaultMessage: "Toggle…"
                    }
                }),
                l = {
                    replace: {
                        text: i.replace,
                        value: "replace"
                    },
                    append: {
                        text: i.append,
                        value: "append"
                    },
                    remove: {
                        text: i.remove,
                        value: "remove"
                    },
                    toggle: {
                        text: i.toggle,
                        value: "toggle"
                    }
                }
        },
        287134: (e, t, r) => {
            r.d(t, {
                p: () => a
            }), r(944114), r(898992), r(354520), r(672577), r(581454), r(737550);
            var o = r(296540);
            let n = "all";

            function a() {
                let {
                    automationStore: e,
                    collectionStore: t,
                    maybePersistedTransactionActions: a
                } = (0, r(305042).k)(), {
                    value: l
                } = (0, r(815048).fJ)(r(879267).QV.automationTypecheck), {
                    value: s
                } = (0, r(815048).fJ)(r(864850).T.formulas), u = (0, r(533992).v3)(), d = (0, r(109939).tz)(), c = (0, r(470569).o)(e), p = (0, o.useMemo)(() => ({
                    automation_id: e.id,
                    collection_id: t.id,
                    builder_type: "modal"
                }), [e.id, t.id]), m = (0, o.useCallback)(() => {
                    var t;
                    if (e.isTriggerType("recurrence")) return {
                        currentPropertyTriggers: [],
                        triggerOperator: n
                    };
                    let r = null == (t = e.getTrigger()) ? void 0 : t.event.pagePropertiesEdited,
                        o = (null == r ? void 0 : r.type) === "some" && r.some,
                        a = (null == r ? void 0 : r.type) === "all" && r.all,
                        i = (null == r ? void 0 : r.type) || "some";
                    return o || a ? {
                        currentPropertyTriggers: o || a || [],
                        triggerOperator: i
                    } : {
                        currentPropertyTriggers: [],
                        triggerOperator: i
                    }
                }, [e]), g = (0, o.useCallback)((t, o = n) => {
                    let i = o || n;
                    "none" === o ? i = n : "any" === o && t.length > 0 && (i = n), a.createAndCommit({
                        userAction: "automations.removePropertyTrigger",
                        perform: o => {
                            (0, r(421439).y4)({
                                store: e,
                                operation: {
                                    pointer: e.pointer,
                                    command: "update",
                                    path: ["trigger", "event"],
                                    args: {
                                        pagePropertiesEdited: 0 === t.length ? {
                                            type: "none"
                                        } : {
                                            type: i,
                                            [i]: t
                                        }
                                    }
                                },
                                transaction: o
                            })
                        }
                    })
                }, [e, a]), y = (0, o.useCallback)(t => {
                    let {
                        currentPropertyTriggers: o
                    } = m();
                    a.createAndCommit({
                        userAction: "automations.updatePropertyTriggerOperator",
                        perform: n => {
                            (0, r(421439).y4)({
                                store: e,
                                operation: {
                                    pointer: e.pointer,
                                    command: "update",
                                    path: ["trigger", "event"],
                                    args: {
                                        pagePropertiesEdited: {
                                            type: t,
                                            [t]: o
                                        }
                                    }
                                },
                                transaction: n
                            })
                        }
                    })
                }, [e, m, a]), h = (0, o.useCallback)(e => {
                    let {
                        currentPropertyTriggers: o,
                        triggerOperator: n
                    } = m();
                    g([...o, e], n);
                    let a = t.getSchema()[e.property];
                    (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_create",
                            eventProperties: {
                                automation_trigger: {
                                    type: "property",
                                    condition: n,
                                    property_types: null != a && a.type ? [a.type] : [],
                                    property_configs: (0, r(722371).O9)(e.filter.operator) && (0, r(722371).O9)(null == a ? void 0 : a.type) ? [{
                                        operator: e.filter.operator,
                                        type: null == a ? void 0 : a.type
                                    }] : []
                                },
                                ...p
                            }
                        }
                    })
                }, [p, t, m, g]), f = (0, o.useCallback)(e => {
                    let {
                        anyOptionCheckState: o,
                        propertyId: n,
                        currentFilter: a,
                        propertySchema: l
                    } = e, {
                        currentPropertyTriggers: s,
                        triggerOperator: u
                    } = m();
                    g((() => {
                        switch (o) {
                            case "partial":
                                return i({
                                    array: s,
                                    predicate: e => e.property === n,
                                    iteratee: e => ({ ...e,
                                        filter: a
                                    }),
                                    defaultItem: {
                                        property: n,
                                        filter: a
                                    }
                                });
                            case !0:
                                return i({
                                    array: s,
                                    predicate: e => e.property === n,
                                    iteratee: e => ({ ...e,
                                        filter: {
                                            operator: "changes_to_any"
                                        }
                                    }),
                                    defaultItem: {
                                        property: n,
                                        filter: {
                                            operator: "changes_to_any"
                                        }
                                    }
                                });
                            case !1:
                                if ((0, r(9247).sS)(l)) return i({
                                    array: s,
                                    predicate: e => e.property === n,
                                    iteratee: e => ({ ...e,
                                        filter: a
                                    }),
                                    defaultItem: {
                                        property: n,
                                        filter: a
                                    }
                                });
                                return s.filter(e => e.property !== n)
                        }
                    })(), u);
                    let d = t.getSchema()[n];
                    (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_create",
                            eventProperties: {
                                automation_trigger: {
                                    type: "property",
                                    condition: u,
                                    property_types: null != d && d.type ? [d.type] : [],
                                    property_configs: (0, r(722371).O9)(a.operator) && (0, r(722371).O9)(null == d ? void 0 : d.type) ? [{
                                        operator: a.operator,
                                        type: null == d ? void 0 : d.type
                                    }] : []
                                },
                                ...p
                            }
                        }
                    })
                }, [p, t, m, g]), x = (0, o.useCallback)(e => {
                    let {
                        currentPropertyTriggers: o,
                        triggerOperator: n
                    } = m();
                    g(o.filter(t => t.property !== e), n);
                    let a = t.getSchema()[e],
                        i = o.find(t => t.property === e);
                    (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_delete",
                            eventProperties: {
                                automation_trigger: {
                                    type: "property",
                                    condition: n,
                                    property_types: null != a && a.type ? [a.type] : [],
                                    property_configs: (0, r(722371).O9)(i) && (0, r(722371).O9)(i.filter.operator) && (0, r(722371).O9)(null == a ? void 0 : a.type) ? [{
                                        operator: i.filter.operator,
                                        type: null == a ? void 0 : a.type
                                    }] : []
                                },
                                ...p
                            }
                        }
                    })
                }, [p, t, m, g]), v = (0, o.useCallback)(() => {
                    a.createAndCommit({
                        userAction: "automations.addPageAddedTrigger",
                        perform: t => {
                            (0, r(421439).y4)({
                                store: e,
                                operation: {
                                    pointer: e.pointer,
                                    command: "update",
                                    path: ["trigger", "event"],
                                    args: {
                                        pagesAdded: !0
                                    }
                                },
                                transaction: t
                            })
                        }
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_create",
                            eventProperties: {
                                automation_trigger: {
                                    type: "page"
                                },
                                ...p
                            }
                        }
                    })
                }, [p, e, a]), b = (0, o.useCallback)(() => {
                    a.createAndCommit({
                        userAction: "automations.removePageAddedTrigger",
                        perform: t => {
                            (0, r(421439).y4)({
                                store: e,
                                operation: {
                                    pointer: e.pointer,
                                    command: "update",
                                    path: ["trigger", "event"],
                                    args: {
                                        pagesAdded: !1
                                    }
                                },
                                transaction: t
                            })
                        }
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_delete",
                            eventProperties: {
                                automation_trigger: {
                                    type: "page"
                                },
                                ...p
                            }
                        }
                    })
                }, [p, e, a]), S = (0, o.useCallback)(() => {
                    a.createAndCommit({
                        userAction: "automations.addAnyPagePropertyEditedTrigger",
                        perform: t => {
                            (0, r(421439).y4)({
                                store: e,
                                operation: {
                                    pointer: e.pointer,
                                    command: "update",
                                    path: ["trigger", "event"],
                                    args: {
                                        pagePropertiesEdited: {
                                            type: "any"
                                        }
                                    }
                                },
                                transaction: t
                            })
                        }
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_create",
                            eventProperties: {
                                automation_trigger: {
                                    type: "property",
                                    condition: "any"
                                },
                                ...p
                            }
                        }
                    })
                }, [p, e, a]), j = (0, o.useCallback)(() => {
                    a.createAndCommit({
                        userAction: "automations.removeAnyPropertyEditedTrigger",
                        perform: t => {
                            (0, r(421439).y4)({
                                store: e,
                                operation: {
                                    path: ["trigger", "event"],
                                    args: {
                                        pagePropertiesEdited: {
                                            type: "none"
                                        }
                                    },
                                    pointer: e.pointer,
                                    command: "update"
                                },
                                transaction: t
                            })
                        }
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "automation_trigger_delete",
                            eventProperties: {
                                automation_trigger: {
                                    type: "property",
                                    condition: "any"
                                },
                                ...p
                            }
                        }
                    })
                }, [p, e, a]), k = (0, o.useCallback)(() => {
                    a.createAndCommit({
                        userAction: "automations.addEmptyRecurrenceTrigger",
                        perform: t => {
                            (0, r(368198).K)({
                                transaction: t,
                                store: e.getKeyStore("trigger"),
                                value: {
                                    type: "recurrence",
                                    id: r(92513).JW()
                                }
                            }), l && s && (0, r(871865).clearInvalidVariables)({
                                environment: u,
                                automationStore: e,
                                automationTypecheckModule: l,
                                subscriptionInfo: c,
                                contextType: "recurrence",
                                formulasModule: s,
                                intl: d,
                                transaction: t,
                                pageStore: void 0
                            }), (0, r(104310).u)({
                                event: {
                                    eventName: "automation_trigger_create",
                                    eventProperties: {
                                        automation_trigger: {
                                            type: "recurrence"
                                        },
                                        ...p
                                    }
                                }
                            })
                        }
                    })
                }, [e, l, c, s, d, a, p, u]);
                return {
                    addPropertyTrigger: h,
                    updatePropertyTrigger: f,
                    removePropertyTrigger: x,
                    addPageAddedTrigger: v,
                    removePageAddedTrigger: b,
                    addAnyPropertyEditedTrigger: S,
                    removeAnyPropertyEditedTrigger: j,
                    updateTriggerOperator: y,
                    addEmptyRecurrenceTrigger: k,
                    changeRecurrenceSchedule: (0, o.useCallback)(t => {
                        a.createAndCommit({
                            userAction: "automations.changeRecurrenceSchedule",
                            perform: o => {
                                (0, r(173157).z)({
                                    store: e.getKeyStore("trigger"),
                                    data: {
                                        recurrence: t ? (0, r(832248).es)(t) : void 0
                                    },
                                    transaction: o
                                })
                            }
                        })
                    }, [e, a]),
                    removeRecurrenceTrigger: (0, o.useCallback)(() => {
                        a.createAndCommit({
                            userAction: "automations.removeRecurrenceTrigger",
                            perform: o => {
                                (0, r(368198).K)({
                                    transaction: o,
                                    store: e.getKeyStore("trigger"),
                                    value: {
                                        type: "event",
                                        id: r(92513).JW(),
                                        event: (0, r(241049).B0)(t)
                                    }
                                })
                            }
                        }), (0, r(104310).u)({
                            event: {
                                eventName: "automation_trigger_delete",
                                eventProperties: {
                                    automation_trigger: {
                                        type: "recurrence"
                                    },
                                    ...p
                                }
                            }
                        })
                    }, [p, e, t, a])
                }
            }

            function i({
                array: e,
                predicate: t,
                iteratee: r,
                defaultItem: o
            }) {
                let n = !1,
                    a = e.map(e => t(e) ? (n = !0, r(e)) : e);
                return n || a.push(o), a
            }
        },
        295044: (e, t, r) => {
            r.d(t, {
                E: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.67 2.3 10.65 11.35",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.1 2.344a.625.625 0 0 0-.724.507l-.5 2.844h-1.98a.625.625 0 1 0 0 1.25h1.76l-.373 2.11H3.304a.625.625 0 0 0 0 1.25h1.76L4.6 12.932a.625.625 0 0 0 1.231.216l.501-2.843h2.483l-.463 2.627a.625.625 0 0 0 1.231.216l.501-2.843h2.02a.625.625 0 0 0 0-1.25h-1.8l.372-2.11h2.02a.625.625 0 0 0 0-1.25h-1.8l.463-2.627a.625.625 0 1 0-1.23-.217l-.502 2.844H7.145l.462-2.627a.625.625 0 0 0-.507-.724m-.547 6.71.371-2.109h2.483l-.372 2.11z"
                    })
                },
                n = (0, r(104509).wt)("numberSmall", o, "small")
        },
        300813: (e, t, r) => {
            r.d(t, {
                A: () => i
            }), r(296540);
            var o = r(474848);
            let n = {
                    display: "inline-flex",
                    gap: "4px",
                    alignItems: "baseline"
                },
                a = {
                    alignSelf: "center"
                };

            function i({
                key: e,
                tokenFormat: t = r(696654).NY.Medium,
                isSingle: l,
                showRemoveButton: s,
                onClickRemove: u
            }) {
                let d = (0, r(109939).tz)(),
                    c = (0, r(960253).e)(),
                    p = (0, r(960253).I)(() => {
                        let e = "light" === c ? 50 : 200,
                            t = "light" === c ? 700 : 900;
                        return {
                            token: {
                                backgroundColor: r(632079).Tj.palette.yellow[e]
                            },
                            textWrap: {
                                color: r(632079).Tj.palette.yellow[t]
                            }
                        }
                    }, [c]);
                return (0, o.jsx)(r(628462).A, {
                    format: t,
                    isSingle: l ? ? !0,
                    showRemoveButton: s ? ? !1,
                    onClickRemove: u,
                    style: p.token,
                    value: (0, o.jsxs)("span", {
                        style: n,
                        children: [(0, o.jsx)("span", {
                            style: a,
                            children: (0, o.jsx)(r(16275).I, {
                                icon: r(789777).exclamationMarkTriangleFillIcon,
                                colorPalette: "orange",
                                colorVariant: "accentPrimary"
                            })
                        }), (0, o.jsx)("span", {
                            style: p.textWrap,
                            children: (0, r(760459).iy)(d)
                        })]
                    })
                }, e)
            }
        },
        304333: (e, t, r) => {
            r.d(t, {
                O: () => o
            });
            let o = (0, r(109939).YK)({
                maximumPeopleSelectedTooltip: {
                    defaultMessage: "Maximum people selected",
                    id: "valuePickerItem.maximumSelectedReached"
                }
            })
        },
        315126: (e, t, r) => {
            r.d(t, {
                Mm: () => d,
                Tz: () => s,
                YS: () => l,
                fz: () => i,
                q8: () => a,
                zz: () => c
            }), r(944114), r(898992), r(737550);
            var o = () => r(264420),
                n = () => r(722371);

            function a(e) {
                return !!e.state && "connectionPointer" in e.state && !!e.state.connectionPointer
            }

            function i(e) {
                var t, o;
                return "mcpServer" === e.type && !!(null != (t = e.state) && t.serverUrl) && (!!a(e) || !!(0, r(302465).hy)(null == (o = e.state) ? void 0 : o.serverUrl))
            }

            function l(e) {
                let {
                    connectionScopes: t,
                    module: r
                } = e;
                if ("slack" !== r.type || !a(r)) return !1;
                let o = s();
                return 0 !== o.length && o.some(e => !(t ? ? []).includes(e))
            }

            function s() {
                let e = r(593186).Nh.slack;
                if (!e) return [];
                let t = e.config.scopes;
                return t.production ? ? t.local ? ? []
            }
            let u = (0, r(109939).YK)({
                filesRead: {
                    defaultMessage: "read file attachments from Slack",
                    id: "slack.scopeDescription.filesRead"
                },
                reactionsRead: {
                    defaultMessage: "view reactions on Slack messages",
                    id: "slack.scopeDescription.reactionsRead"
                }
            });

            function d(e) {
                let {
                    connectionScopes: t,
                    requiredScopes: r
                } = e, a = [];
                for (let e of r) {
                    if (t.includes(e) || !(0, n().Xk)(o().NV, e)) continue;
                    let r = function(e) {
                        switch (e) {
                            case "files:read":
                                return u.filesRead;
                            case "reactions:read":
                                return u.reactionsRead;
                            case "app_mentions:read":
                            case "channels:history":
                            case "channels:read":
                            case "emoji:read":
                            case "usergroups:read":
                            case "users:read.email":
                            case "users:read":
                                return;
                            default:
                                (0, n().HB)(e)
                        }
                    }(e);
                    r && a.push(r)
                }
                return a
            }

            function c(e) {
                if (e) return {
                    type: "workflowExternal",
                    externalConnectionId: e.id
                }
            }
        },
        315799: (e, t, r) => {
            r.d(t, {
                c: () => l,
                m: () => a
            });
            var o = () => r(546605);

            function n(e) {
                switch (e.type) {
                    case "external":
                        return `external-${e.botId}`;
                    case "workflowExternal":
                        return `workflowExternal-${e.externalConnectionId}`;
                    case "universal":
                        return `universal-${e.app}-${e.spaceId}`;
                    default:
                        throw (0, r(722371).HB)(e)
                }
            }
            let a = {
                channels: {},
                fetching: !1,
                lastRefreshed: 0,
                failed: !1
            };
            class i extends o().Store {
                getStateForBot(e) {
                    let t = n(e);
                    return this.state[t] ? ? a
                }
                updateStateForBot(e, t) {
                    this.setState({ ...this.state,
                        [n(e)]: { ...this.getStateForBot(e),
                            ...t
                        }
                    })
                }
                addChannelsForBot(e, t) {
                    let r = this.getStateForBot(e);
                    this.setState({ ...this.state,
                        [n(e)]: { ...r,
                            channels: { ...r.channels,
                                ...t
                            }
                        }
                    })
                }
                findChannelById(e) {
                    for (let t of Object.keys(this.state)) {
                        let r = this.state[t],
                            o = null == r ? void 0 : r.channels[e];
                        if (o) return o
                    }
                }
            }
            let l = new i;
            (0, r(202146).exposeDebugValue)("ExternalNotificationChannelsStore", l)
        },
        345783: (e, t, r) => {
            r.d(t, {
                S: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.35",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8.901 8.802a.223.223 0 0 1 .367-.197l4.99 4.208a.224.224 0 0 1-.117.393l-1.83.208 1.842 3.31a.67.67 0 1 1-1.174.65l-1.805-3.241-1.07 1.576a.224.224 0 0 1-.409-.1zM6.376 12.74a.625.625 0 0 1 .884.884l-1.768 1.768a.625.625 0 1 1-.884-.884zM5.5 9.375a.625.625 0 1 1 0 1.25H3a.625.625 0 1 1 0-1.25zm11.5 0a.625.625 0 1 1 0 1.25h-2.5a.625.625 0 1 1 0-1.25zM4.608 4.608a.625.625 0 0 1 .884 0L7.26 6.376a.625.625 0 1 1-.884.884L4.608 5.492a.625.625 0 0 1 0-.884m9.9 0a.625.625 0 1 1 .884.884L13.624 7.26a.625.625 0 0 1-.884-.884zM10 2.375c.345 0 .625.28.625.625v2.5a.625.625 0 1 1-1.25 0V3c0-.345.28-.625.625-.625"
                    })
                },
                n = (0, r(104509).wt)("cursorClick", o, "default")
        },
        350945: (e, t, r) => {
            r.d(t, {
                w5: () => a,
                zl: () => i
            }), r(296540);
            var o = r(474848);
            let n = {
                content: {
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    whiteSpace: "pre",
                    lineHeight: 1.6
                },
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                },
                propertyValue: { ...r(699422).RC,
                    paddingBlockStart: 4
                }
            };

            function a(e) {
                let {
                    textValue: t,
                    operator: a,
                    propertySchema: l,
                    messageType: s
                } = e, u = (0, r(109939).tz)(), d = (0, r(682985).K8)(() => (function(e) {
                    let t, {
                            textValue: n,
                            operator: a,
                            propertySchema: i,
                            styles: l,
                            messageType: s,
                            intl: u
                        } = e,
                        d = (0, o.jsx)("span", {
                            style: l.propertyName,
                            children: i.name
                        }),
                        c = u.formatMessage(r(552535).bK[a].text).toLocaleLowerCase();
                    return "action" === s ? t = r(760459).$B({
                        operator: c,
                        propertyName: d,
                        propertyValues: (0, o.jsx)(r(628462).A, {
                            format: r(696654).NY.Medium,
                            isRound: !0,
                            isSingle: !0,
                            value: n,
                            showRemoveButton: !1
                        })
                    }) : "trigger" === s ? t = r(760459).rh({
                        operator: c,
                        propertyName: d,
                        propertyValues: (0, o.jsx)(r(628462).A, {
                            format: r(696654).NY.Medium,
                            isRound: !0,
                            isSingle: !0,
                            value: n,
                            showRemoveButton: !1
                        })
                    }) : (0, r(722371).HB)(s), (0, o.jsx)(r(109939).sA, { ...t
                    })
                })({
                    messageType: s,
                    operator: a,
                    propertySchema: l,
                    styles: n,
                    textValue: t,
                    intl: u
                }), [s, t, a, l, u]);
                return {
                    tooltipTitle: (0, r(682985).K8)(() => i({
                        messageType: s,
                        operator: a,
                        propertySchema: l,
                        textValue: t,
                        intl: u
                    }), [s, a, l, t, u]),
                    title: d,
                    styles: n
                }
            }

            function i(e) {
                let t, {
                        textValue: n,
                        operator: a,
                        propertySchema: i,
                        messageType: l,
                        intl: s
                    } = e,
                    u = i.name,
                    d = s.formatMessage(r(552535).bK[a].text).toLocaleLowerCase();
                return "action" === l ? t = r(760459).$B({
                    operator: d,
                    propertyName: u,
                    propertyValues: n
                }) : "trigger" === l ? t = r(760459).rh({
                    operator: d,
                    propertyName: u,
                    propertyValues: n
                }) : (0, r(722371).HB)(l), (0, o.jsx)(r(109939).sA, { ...t
                })
            }
        },
        358591: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                display: "inline"
            };

            function a(e) {
                var t;
                let a, {
                        isChecked: i = !1,
                        disabled: l,
                        menuArgs: s,
                        parentRecordStore: u
                    } = e,
                    d = (0, r(428143).U)();
                if ("annotation" in e) {
                    let {
                        annotation: t,
                        formulaTypecheckContextValues: o
                    } = e, n = (0, r(247438).iVq)(t).id;
                    a = (0, r(722371).O9)(o) ? (0, r(297493).IV)(o, n) : void 0
                } else a = e.contextValue;
                let c = (null == (t = a) ? void 0 : t.associatedCollectionForDisplay) && r(356912).m.createChildStore(u, a.associatedCollectionForDisplay),
                    p = a && (0, r(297493).Ix)(a.type),
                    m = r(986939).A.isMobile ? 24 : 20;
                return a ? (0, o.jsx)(r(51831).m, {
                    content: () => l ? (0, o.jsx)(r(109939).sA, { ...r(304333).O.maximumPeopleSelectedTooltip
                    }) : (0, r(297493).E9)(a),
                    placement: "right",
                    children: e => (0, o.jsx)(r(95582).A, {
                        isChecked: i,
                        title: (0, o.jsx)(r(4458).fI, {
                            children: a.name
                        }),
                        disabled: l,
                        style: l ? d.disabledMenuItem : void 0,
                        icon: (0, r(722371).O9)(a.stepNumberForDisplay) ? (0, o.jsx)(r(550224).Q, {
                            number: a.stepNumberForDisplay,
                            size: r(24081).H.Medium
                        }) : p ? p({
                            width: m,
                            height: m
                        }) : void 0,
                        caption: c && (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "to {database}",
                            id: "automations.AutomationTargetPickerMenu.VariableMenuItem.databaseCaption",
                            values: {
                                database: (0, o.jsx)(r(627918).A, {
                                    store: c,
                                    style: n
                                })
                            }
                        }),
                        ...(0, r(63390).A)(s, e)
                    })
                }) : null
            }
        },
        360625: (e, t, r) => {
            r.d(t, {
                F: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                style0: {
                    marginInlineEnd: 4
                },
                style1: {
                    background: r(632079).Tj.blue.background.secondaryTranslucent,
                    color: r(632079).Tj.blue.text.accentPrimary,
                    padding: "2px 4px",
                    margin: 0
                }
            };

            function a(e) {
                let t, {
                        value: a,
                        style: i
                    } = e,
                    l = e.iconStyle ? ? {
                        width: r(104509).Ev.xs,
                        height: r(104509).Ev.xs,
                        marginInlineEnd: 4
                    },
                    s = (0, r(297493).sM)(a);
                if (a.kind === r(416901).FormulaContextValueKind.ContextValue && (0, r(722371).O9)(a.stepNumberForDisplay)) {
                    let e = a.stepNumberForDisplay;
                    t = () => (0, o.jsx)(r(550224).Q, {
                        size: r(24081).H.ExtraSmall,
                        number: e,
                        style: n.style0
                    })
                } else {
                    let e = (0, r(297493).Ix)(a.type);
                    e && (t = () => e(l))
                }
                return (0, o.jsx)(r(376921).Ay, { ...e,
                    title: s,
                    renderAvatar: t,
                    shouldShrink: !0,
                    style: { ...n.style1,
                        ...i
                    }
                })
            }
        },
        366387: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var o = r(296540),
                n = r(474848);

            function a({
                handleRemoveToken: e,
                token: t,
                style: i,
                isDisabled: l,
                preventOnClickPropagation: s,
                parentRecordStore: u
            }) {
                let d = r(986939).A.isMobile ? r(72461).Ay.Format.Medium : r(72461).Ay.Format.Small,
                    c = (0, o.useCallback)(r => {
                        s && (null == r || r.stopPropagation()), e && e(t)
                    }, [e, t, s]);
                return (0, r(682985).K8)(() => {
                    if (!(0, r(591864).isAnnotationSimpleValueToken)(t)) return null;
                    if ((0, r(247438).rie)(t)) {
                        let o = (0, r(247438).NcG)(t);
                        if (o) {
                            let t = (0, r(197018).xC)({
                                pointer: {
                                    table: r(832375).oo9,
                                    id: o
                                },
                                getRecordValue: u.getRecordModel
                            });
                            return null != t && t.asActor && t.table === r(832375).oo9 ? (0, n.jsx)(r(72461).Ay, {
                                actor: t,
                                format: d,
                                showRemoveButton: !!e && !l,
                                onClickRemove: c,
                                shouldShrink: !0,
                                isSingle: !1,
                                style: i,
                                hasPersonHoverCard: !1
                            }, t.id) : null
                        }
                    }
                    if ((0, r(247438).RaC)(t)) {
                        let o = (0, r(247438).cFJ)(t);
                        return o ? (0, n.jsx)(r(11444).UISpacePermissionGroupToken, {
                            parentStore: u,
                            groupPointer: o,
                            format: d,
                            showRemoveButton: !!e && !l,
                            onClickRemove: c,
                            shouldShrink: !0,
                            isSingle: !0,
                            style: i
                        }, o.id) : null
                    }
                    return null
                }, [u, e, l, d, c, i, t])
            }
        },
        418232: (e, t, r) => {
            r.d(t, {
                x: () => l
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                    height: "auto",
                    maxWidth: "auto",
                    paddingInline: 4
                },
                i = {
                    warningIcon: {
                        color: r(632079).Tj.red.icon.accentPrimary,
                        fill: r(632079).Tj.red.icon.accentPrimary,
                        width: r(104509).Ev.sm,
                        height: r(104509).Ev.sm,
                        flex: "0 0 auto",
                        marginInlineEnd: 2
                    }
                },
                l = (0, o.forwardRef)(function(e, t) {
                    let {
                        children: l,
                        disabled: s,
                        hasActionRequired: u,
                        errorIcon: d,
                        icon: c,
                        isCompact: p,
                        isError: m,
                        isSecondary: g,
                        onClick: y,
                        style: h,
                        tooltipMessage: f,
                        dropdownButtonType: x,
                        dropdownIcon: v
                    } = e, b = (0, r(533992).v3)(), S = "dropdown" === x, j = (0, r(960253).I)(() => ({
                        button: { ... function(e) {
                                let {
                                    isError: t,
                                    hasActionRequired: o,
                                    isSecondary: n,
                                    dropdownButtonType: a
                                } = e;
                                return t ? {
                                    color: r(632079).Tj.red.text.accentPrimary,
                                    ..."dropdown" === a && {
                                        boxShadow: "none"
                                    }
                                } : o ? {
                                    fontWeight: r(699422).Wy.regular,
                                    color: r(632079).Tj.text.secondary
                                } : n ? {
                                    color: r(632079).Tj.text.secondary
                                } : {
                                    fontWeight: r(699422).Wy.regular,
                                    color: r(632079).Tj.text.primary
                                }
                            }({
                                isError: m,
                                hasActionRequired: u,
                                isSecondary: g,
                                dropdownButtonType: x
                            }),
                            gap: 2,
                            padding: "0 6px",
                            ...p ? a : void 0,
                            ...S && {
                                alignItems: "center",
                                height: 20,
                                paddingBlock: 0,
                                marginBlock: 0
                            },
                            ...h
                        },
                        children: { ...r(699422).RC,
                            lineHeight: "20px",
                            flex: "1 1 auto",
                            display: "grid",
                            gridTemplateColumns: "auto auto",
                            gap: 2,
                            ...S && {
                                padding: "0 2px"
                            }
                        },
                        icon: {
                            width: r(104509).Ev.sm,
                            height: r(104509).Ev.sm,
                            marginInlineEnd: 2,
                            ...m ? {
                                fill: r(632079).Tj.red.icon.accentPrimary
                            } : void 0
                        },
                        chevronIcon: {
                            fill: r(632079).Tj.icon.secondary,
                            flex: "0 0 auto",
                            height: r(104509).Ev.sm,
                            width: r(104509).Ev.sm,
                            ...S && {
                                fill: "unset"
                            }
                        }
                    }), [m, u, g, x, p, S, h]), k = (0, o.useMemo)(() => c ? () => c(j.icon) : void 0, [c, j.icon]), A = (0, o.useCallback)(() => f ? ? null, [f]), C = (0, o.useCallback)(e => {
                        (0, r(525779).clear)({
                            environment: b
                        }), (0, r(471e3).I)({
                            environment: b
                        }), null == y || y(e), e.stopPropagation()
                    }, [b, y]), M = d || r(143896).exclamationMarkTriangleFillSmallIcon, T = m ? () => M(i.warningIcon) : k;
                    return (0, n.jsx)(r(51831).m, {
                        delayThreshold: 0,
                        disableTooltip: !f,
                        placement: "bottom",
                        content: A,
                        children: e => "dropdown" === x ? (0, n.jsxs)(r(801510).A, { ...e,
                            variant: m ? "secondary" : "lightGray",
                            disabled: s,
                            disabledFeedback: s,
                            onClick: C,
                            ref: t,
                            style: j.button,
                            children: [T ? T() : void 0, (0, n.jsx)("div", {
                                style: j.children,
                                children: l
                            }), v ? v(j.chevronIcon) : (0, n.jsx)(r(16275).I, {
                                icon: r(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                colorVariant: "secondary",
                                style: j.chevronIcon
                            })]
                        }) : (0, n.jsxs)(r(988022).p, { ...e,
                            disabled: s,
                            disabledFeedback: s,
                            onClick: C,
                            ref: t,
                            shouldShrink: !0,
                            style: j.button,
                            colorPalette: m ? "red" : void 0,
                            children: [m ? null == T ? void 0 : T() : null == k ? void 0 : k(), (0, n.jsx)("div", {
                                style: j.children,
                                children: l
                            }), (0, n.jsx)(r(16275).I, {
                                icon: r(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm",
                                colorVariant: "secondary",
                                style: j.chevronIcon
                            })]
                        })
                    })
                })
        },
        428143: (e, t, r) => {
            r.d(t, {
                U: () => n
            });
            let o = {
                disabledMenuItem: {
                    cursor: "not-allowed",
                    opacity: .4
                }
            };

            function n() {
                return o
            }
        },
        441365: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(898992), r(737550), r(296540);
            var o = r(474848);

            function n(e) {
                let {
                    collectionStore: t,
                    collectionSettingsStore: n
                } = e, a = (0, r(533992).v3)();
                return function(e) {
                    if (n && e && t && (0, r(722371).O9)(t)) {
                        let n = r(28630).KA({
                            deletedSchema: t.getDeletedSchema(),
                            property: e
                        });
                        if (n) {
                            var i;
                            if ((null == (i = t.getDeletedSchema()[e]) ? void 0 : i.type) === "verification") {
                                let e = t.getSchema();
                                if (Object.keys(e).some(t => {
                                        var r;
                                        return (null == (r = e[t]) ? void 0 : r.type) === "verification"
                                    })) return void r(647095).ui({
                                    message: (0, o.jsx)(r(109939).sA, {
                                        id: "deletedPropertyMenu.cannotRestoreDuplicateProperty.modal.verification",
                                        defaultMessage: "You can only have one verification property."
                                    }),
                                    showCancel: !1,
                                    keepFocus: !0,
                                    items: [{
                                        label: (0, o.jsx)(r(109939).sA, {
                                            id: "deletedPropertyMenu.cannotRestoreDuplicateProperty.modal.dismissButton",
                                            defaultMessage: "Dismiss"
                                        }),
                                        onAccept: () => {}
                                    }]
                                })
                            }
                            let l = t.getSpaceId();
                            (0, r(377796).createAndCommit)({
                                userAction: "deletedPropertyMenu.handleRestoreDeletedPropertyClick",
                                environment: a,
                                cellTarget: l ? {
                                    spaceWithId: l
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, r(957395).F)({
                                        environment: a,
                                        collectionStore: t,
                                        update: n.updateSchema,
                                        transaction: e
                                    }), (0, r(149568).E)({
                                        collectionStore: t,
                                        update: n.updateDeletedSchema,
                                        transaction: e
                                    })
                                }
                            })
                        }
                    }
                }
            }
        },
        444232: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var o = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    value: t,
                    onChange: a
                } = e, i = (0, o.useCallback)(() => {
                    a({
                        type: "formula",
                        value: null == t ? void 0 : t.value
                    })
                }, [t, a]);
                return (0, n.jsx)(r(95582).A, {
                    icon: (0, n.jsx)(r(16275).I, {
                        icon: r(36418).v,
                        colorVariant: "secondary"
                    }),
                    title: (0, n.jsx)(r(109939).sA, { ...r(705743).D.customFormula
                    }),
                    focused: !1,
                    showExtensionArrow: !0,
                    onClick: i
                })
            }
        },
        452258: (e, t, r) => {
            r.d(t, {
                Y: () => a
            }), r(898992), r(354520), r(672577);
            var o = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    propertyId: t,
                    menuStore: a,
                    propertySchema: i,
                    propertyChangedFilter: l,
                    onCommit: s,
                    onClose: u
                } = e, d = (0, o.useMemo)(() => "changes_to_any" === l.operator ? [{
                    type: "exact",
                    value: !0
                }, {
                    type: "exact",
                    value: !1
                }] : (0, r(400473).Ui)(l) && (0, r(400473).gc)(l) ? Array.isArray(l.value) ? l.value : [l.value] : [], [l]), [c, p] = (0, o.useState)(d), m = (0, o.useRef)(d), g = (0, o.useCallback)(e => {
                    if (c.find(t => t.value === e)) {
                        let t = c.filter(t => t.value !== e);
                        p(t), m.current = t
                    } else {
                        let t = [...c, {
                            type: "exact",
                            value: e
                        }];
                        p(t), m.current = t
                    }
                }, [c]), y = (0, o.useCallback)(() => {
                    let e = m.current || c,
                        r = 1 === e.length ? {
                            operator: "checkbox_is",
                            value: e[0]
                        } : {
                            operator: "changes_to_any"
                        };
                    s({
                        anyOptionCheckState: 2 === e.length || 1 === e.length && "partial",
                        filter: r,
                        propertyId: t
                    }), u()
                }, [u, s, t, c]), h = !!c.find(e => !0 === e.value), f = !!c.find(e => !1 === e.value);
                return (0, n.jsx)(r(44426).A, {
                    type: "default",
                    triggerActionMenuStore: a,
                    onDone: y,
                    onClose: u,
                    sections: [{
                        key: "select",
                        render: e => (0, n.jsx)(r(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [{
                            key: "unchecked",
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                isChecked: f,
                                isTokenTitle: !0,
                                title: (0, n.jsx)(r(109939).sA, {
                                    defaultMessage: "Unchecked",
                                    id: "propertyTrigger.checkbox.unchecked"
                                })
                            }),
                            action: () => g(!1)
                        }, {
                            key: "checked",
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                isChecked: h,
                                isTokenTitle: !0,
                                title: (0, n.jsx)(r(109939).sA, {
                                    defaultMessage: "Checked",
                                    id: "propertyTrigger.checkbox.checked"
                                })
                            }),
                            action: () => g(!0)
                        }]
                    }],
                    headerTitle: (0, n.jsx)(r(109939).sA, {
                        id: "propertyTrigger.checkbox.title",
                        defaultMessage: "{propertyName} set to",
                        values: {
                            propertyName: i.name
                        }
                    })
                })
            }
        },
        461587: (e, t, r) => {
            r.d(t, {
                y: () => n
            });
            var o = () => r(832375);

            function n(e, t) {
                var n;
                let a = null == (n = (0, r(605263).K4)()) ? void 0 : n.collectionStore;
                return (0, r(682985).K8)(() => {
                    let n = e.getParentStore();
                    if ("button_block" === t) {
                        let t = function(e) {
                            for (let t of (0, r(457915).g)(e))
                                if (t.table === o().evP && t.isPageBlock()) return t
                        }(e);
                        return null == t ? void 0 : t.getAssociatedCollectionStore()
                    }
                    if ("button_property" === t) return a;
                    if ("event" === t) {
                        if (n && n instanceof r(356912).m) return n
                    } else if ("recurrence" === t);
                    else if ("assistant" === t) {
                        if (n && n instanceof r(356912).m) return n
                    } else(0, r(722371).HB)(t)
                }, [e, t, a])
            }
        },
        466736: (e, t, r) => {
            r.d(t, {
                A: () => i
            }), r(944114), r(581454);
            var o = r(296540);
            r(898992), r(354520);
            var n = r(474848);
            let a = {
                paddingBottom: 0
            };

            function i(e) {
                let t, {
                        currentSimpleFormulaValueTokens: i,
                        formulaTypecheckContextValues: l,
                        menuProps: s,
                        onChange: u,
                        onClose: d,
                        showGenericHeader: c = !1,
                        value: p,
                        parentRecordStore: m
                    } = e,
                    {
                        footer: g,
                        header: y,
                        numberInput: h,
                        valueItems: f
                    } = function(e) {
                        let {
                            currentSimpleFormulaValueTokens: t,
                            formulaTypecheckContextValues: a,
                            onChange: i,
                            onClose: l,
                            value: s
                        } = e, u = (0, r(109939).tz)(), d = (0, r(960253).e)(), c = (0, r(960253).I)(() => ({
                            inputOuterStyle: {
                                fontSize: "12px",
                                ...r(986939).A.isMobile ? {
                                    boxShadow: "none",
                                    background: "light" === d ? r(632079).Tj.white : r(632079).Tj.selectLightGray[200],
                                    borderRadius: 0,
                                    minHeight: "45px"
                                } : {}
                            }
                        }), [d]), p = a.filter(e => "number" === e.type.type), m = (0, o.useCallback)(e => {
                            i({
                                type: "simple",
                                value: e
                            })
                        }, [i]), g = (0, o.useCallback)(e => {
                            m(e), l()
                        }, [m, l]), y = (0, o.useCallback)(e => {
                            let t = e.target.value;
                            m("" === t ? void 0 : [
                                [t]
                            ])
                        }, [m]), h = (0, o.useCallback)(e => {
                            g(void 0 !== e[0] ? (0, r(591864).toSimpleFormulaSingleValue)(e[0]) : void 0)
                        }, [g]), f = r(381453).oE(p.map(e => {
                            if (e.kind === r(416901).FormulaContextValueKind.ContextValue) return {
                                action: "replace",
                                currentSimpleFormulaValueTokens: t,
                                id: e.id || "",
                                setCurrentTokens: h,
                                value: e
                            }
                        })), x = (0, o.useMemo)(() => {
                            let e = t[0],
                                o = "string" == typeof e ? e : (0, r(247438).q4_)(null == s ? void 0 : s.value);
                            return (0, n.jsx)(r(310324).Ay, {
                                focusInitial: !r(986939).A.isMobile,
                                onChange: y,
                                value: o,
                                type: "number",
                                inputOuterStyle: c.inputOuterStyle,
                                placeholder: u.formatMessage(r(705743).D.propertyValuePlaceholder)
                            })
                        }, [t, y, u, c.inputOuterStyle, null == s ? void 0 : s.value]);
                        return {
                            footer: (0, n.jsx)(r(444232).A, {
                                value: s,
                                onChange: i
                            }),
                            header: u.formatMessage(r(705743).D.genericMenuHeader),
                            numberInput: x,
                            valueItems: f
                        }
                    }({
                        formulaTypecheckContextValues: l,
                        onChange: u,
                        onClose: d,
                        currentSimpleFormulaValueTokens: i,
                        value: p
                    }) || {},
                    x = (0, o.useMemo)(() => f.map(e => {
                        let {
                            annotation: t,
                            itemAction: o
                        } = (0, r(966253).E)({
                            action: e.action,
                            currentSimpleFormulaValueTokens: e.currentSimpleFormulaValueTokens,
                            setCurrentTokens: e.setCurrentTokens,
                            value: e.value
                        });
                        return {
                            key: e.id,
                            render: e => (0, n.jsx)(r(358591).A, {
                                annotation: t,
                                disabled: !1,
                                formulaTypecheckContextValues: l,
                                menuArgs: e,
                                parentRecordStore: m
                            }),
                            action: o
                        }
                    }), [l, f, m]),
                    v = [];
                x.length > 0 && v.push({
                    key: "textbox",
                    items: x
                }), t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    minWidth: 260,
                    onClickRight: d,
                    right: (0, n.jsx)(r(109939).sA, { ...r(789722).W.done
                    })
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    width: 260,
                    footer: g && (0, n.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: g
                    }),
                    disableHeaderBorder: !0
                };
                let b = c && (0, n.jsx)(r(844565).A, {
                        style: a,
                        title: y
                    }),
                    S = (0, n.jsxs)("div", {
                        children: [r(986939).A.isMobile ? void 0 : (null == s ? void 0 : s.header) || b, h]
                    }),
                    j = (0, n.jsx)(r(558045).A, {
                        initialFocus: 0,
                        sections: v,
                        type: r(558045).O.Vertical
                    }),
                    k = (0, n.jsx)(r(747369).A, { ...t,
                        ...s,
                        header: S,
                        children: j
                    });
                return {
                    headerDiv: S,
                    innerComponents: j,
                    numberMenu: k
                }
            }
        },
        484989: (e, t, r) => {
            r.d(t, {
                $R: () => i,
                Qy: () => n
            });
            let o = ["number_does_not_equal", "number_equals", "number_greater_than", "number_greater_than_or_equal_to", "number_less_than", "number_less_than_or_equal_to", "is_empty", "changes_to_any"];

            function n(e) {
                return o.includes(e) ? e : "number_equals"
            }
            let a = (0, r(109939).YK)({
                    changesToAny: {
                        id: "propertyTrigger.numberField.changesToAnyOption",
                        defaultMessage: "Is edited"
                    },
                    numberEquals: {
                        id: "propertyTrigger.numberField.equalsOption",
                        defaultMessage: "="
                    },
                    numberGreaterThanOrEqualTo: {
                        id: "propertyTrigger.numberField.greaterThanOrEqualTo",
                        defaultMessage: "≥"
                    },
                    numberLessThanOrEqualTo: {
                        id: "propertyTrigger.numberField.lessThanOrEqualTo",
                        defaultMessage: "≤"
                    },
                    isEmpty: {
                        id: "propertyTrigger.numberField.isEmpty",
                        defaultMessage: "Is cleared"
                    },
                    numberGreaterThan: {
                        id: "propertyTrigger.numberField.greaterThan",
                        defaultMessage: ">"
                    },
                    numberLessThan: {
                        id: "propertyTrigger.numberField.lessThan",
                        defaultMessage: "<"
                    },
                    numberDoesNotEqual: {
                        id: "propertyTrigger.numberField.doesNotEqualOption",
                        defaultMessage: "≠"
                    }
                }),
                i = {
                    number_equals: {
                        hasInput: !0,
                        text: a.numberEquals,
                        value: "number_equals"
                    },
                    number_does_not_equal: {
                        hasInput: !0,
                        text: a.numberDoesNotEqual,
                        value: "number_does_not_equal"
                    },
                    number_greater_than: {
                        hasInput: !0,
                        text: a.numberGreaterThan,
                        value: "number_greater_than"
                    },
                    number_less_than: {
                        hasInput: !0,
                        text: a.numberLessThan,
                        value: "number_less_than"
                    },
                    number_greater_than_or_equal_to: {
                        hasInput: !0,
                        text: a.numberGreaterThanOrEqualTo,
                        value: "number_greater_than_or_equal_to"
                    },
                    number_less_than_or_equal_to: {
                        hasInput: !0,
                        text: a.numberLessThanOrEqualTo,
                        value: "number_less_than_or_equal_to"
                    },
                    changes_to_any: {
                        hasInput: !1,
                        text: a.changesToAny,
                        value: "changes_to_any"
                    },
                    is_empty: {
                        text: a.isEmpty,
                        value: "is_empty",
                        hasInput: !1
                    }
                }
        },
        511289: (e, t, r) => {
            r.d(t, {
                X: () => i
            }), r(16280), r(898992), r(354520);
            var o = r(296540),
                n = r(474848);
            let a = {
                componentWrap: {
                    borderRadius: 10
                },
                buttonWrap: {
                    borderRadius: 10
                }
            };

            function i(e) {
                let {
                    onDelete: t,
                    styles: i
                } = e, {
                    disabled: s
                } = (0, r(305042).b)(), u = !!s, d = (0, r(682985).uB)(void 0, r(510969).A), c = (0, o.useCallback)(() => {
                    if (!t) throw Error("onDelete is not implemented for trigger");
                    t(), d.setState({
                        open: !1
                    })
                }, [d, t]), p = (0, o.useMemo)(() => t ? (0, n.jsx)(l, {
                    onDelete: c
                }) : null, [t, c]), m = (0, o.useCallback)(t => {
                    let o = e.onClick ? r(787476).aX : r(787476).ot;
                    return (0, n.jsx)(o, { ...t,
                        actionMenu: p,
                        buttonPopupStore: d,
                        disabled: u,
                        icon: e.icon,
                        onClick: e.onClick,
                        styles: { ...i,
                            ...a
                        },
                        hideDragHandle: !0,
                        children: e.children
                    })
                }, [e.onClick, e.icon, e.children, p, d, u, i]);
                return (0, n.jsx)(r(877310).ck, {
                    children: (0, n.jsx)(r(703676).P, {
                        disable: u,
                        renderOrigin_DEPRECATED: m,
                        title: e.tooltip,
                        tooltipPlacement: e.tooltipPlacement || "bottom",
                        disableTooltip: !(0, r(722371).O9)(e.tooltip)
                    })
                })
            }

            function l(e) {
                let {
                    onClose: t,
                    onEdit: o,
                    onDelete: a
                } = e, i = (0, r(457067).e)(), l = [o ? {
                    action: () => {
                        null == t || t(), o()
                    },
                    key: "edit",
                    render: e => (0, n.jsx)(r(95582).A, { ...e,
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(636).pencilLineIcon
                        }),
                        title: (0, n.jsx)(r(109939).sA, {
                            id: "automationBaseStepElement.moreActionsMenu.edit",
                            defaultMessage: "Edit"
                        })
                    })
                } : void 0, a ? {
                    action: () => {
                        null == t || t(), a()
                    },
                    key: "delete",
                    render: e => (0, n.jsx)(r(95582).A, { ...e,
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(968411).trashIcon
                        }),
                        title: (0, n.jsx)(r(109939).sA, {
                            id: "automationBaseStepElement.moreActionsMenu.delete",
                            defaultMessage: "Delete"
                        })
                    })
                } : void 0].filter(r(722371).O9);
                return (0, n.jsx)(r(747369).A, { ...i,
                    children: (0, n.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        sections: [{
                            items: l,
                            key: "items",
                            render: e => (0, n.jsx)(r(844565).A, {
                                enableActionSheetTitle: !0,
                                topBorder: !0,
                                ...e
                            })
                        }],
                        initialFocus: 0
                    })
                })
            }
        },
        524088: (e, t, r) => {
            r.d(t, {
                Hn: () => c,
                XN: () => d,
                pj: () => s,
                qj: () => m
            }), r(944114), r(898992), r(354520), r(672577), r(581454), r(737550);
            var o = r(296540),
                n = () => r(315799),
                a = r(474848);
            let i = (0, r(109939).YK)({
                    channelSearchPlaceholder: {
                        id: "notificationRuleSettings.selectChannelView.searchInput.placeholder",
                        defaultMessage: "Search…"
                    }
                }),
                l = {
                    style0: {
                        width: 8
                    },
                    style1: {
                        marginInlineEnd: 2
                    },
                    style2: {
                        width: 18,
                        height: "auto"
                    },
                    fixedSearchInput: {
                        paddingBlock: 4,
                        borderBottom: `1px solid ${r(632079).Tj.border.secondary}`
                    }
                };

            function s(e) {
                let {
                    currentNotificationChannels: t,
                    onNotificationChannelSelect: n,
                    onNotificationChannelSelectAll: s,
                    onClose: p,
                    onNewSlackAccountAdded: m,
                    renderMenu: g,
                    channelFilter: y,
                    connectionPointer: h,
                    isMultiSelectMode: f,
                    shouldHideSlackAccountSection: x,
                    shouldShowSelectAllChannels: v,
                    isAllChannels: b,
                    shouldShowImChannels: S,
                    onClearSelection: j,
                    shouldHideSelectedChannels: k = !1,
                    searchPlaceholder: A = i.channelSearchPlaceholder,
                    shouldShowTooltipsOnChannelNames: C = !1,
                    shouldShowFixedSearch: M = !1,
                    moduleId: T,
                    workflowId: _
                } = e, I = (0, r(533992).v3)(), P = (0, r(109939).tz)(), w = (0, r(682985).O$)(r(610463).A.completeSlackAuthentications), V = e.currentExternalAuthentication ? ? w[0], F = (0, o.useMemo)(() => h ? (0, r(315126).zz)(h) : V ? {
                    type: "external",
                    botId: V.id
                } : void 0, [h, V]);
                o.useEffect(() => {
                    let e = h ? h.spaceId : null == V ? void 0 : V.space_id;
                    F && e && c({
                        environment: I,
                        spaceId: e,
                        externalAuthConfig: F,
                        moduleId: T,
                        workflowId: _
                    })
                }, [I, F, V, h, T, _]);
                let R = (null == h ? void 0 : h.id) ? ? (null == V ? void 0 : V.id),
                    [E, B] = o.useState(""),
                    {
                        loadedChannelsForAccount: N,
                        isLoading: O
                    } = d(F),
                    D = (0, r(682985).K8)(() => r(610463).A.integrations.state.find(e => e.id === r(49361).zG), []),
                    W = (0, r(723240).r)(),
                    L = o.useCallback(e => {
                        V ? n(e, V.parent_id) : h && n(e, h.id), f || p()
                    }, [n, V, h, p, f]),
                    z = o.useCallback(() => {
                        let e = V ? V.parent_id : null == h ? void 0 : h.id;
                        e && s && s(e), f && v || p()
                    }, [V, h, f, v, s, p]),
                    K = o.useCallback(e => {
                        let {
                            channel: o
                        } = e, n = !b && (null == t ? void 0 : t.some(e => e.id === o.id));
                        if (!n || !k) return {
                            key: o.id,
                            render: e => (0, a.jsx)(r(51831).m, {
                                content: () => o.name,
                                disableTooltip: !C,
                                alignment: "center",
                                placement: "right",
                                children: t => (0, a.jsx)(r(95582).A, { ...e,
                                    ...t,
                                    icon: (0, a.jsx)(r(16275).I, {
                                        icon: u({
                                            channel: o
                                        }),
                                        colorVariant: "tertiary",
                                        size: "sm"
                                    }),
                                    desktopIconStyle: l.style0,
                                    title: o.name,
                                    isChecked: n
                                })
                            }),
                            action: () => {
                                L(o)
                            }
                        }
                    }, [b, t, L, k, C]),
                    {
                        publicChannels: H,
                        privateChannels: q,
                        personalChannels: U,
                        imChannels: Y
                    } = o.useMemo(() => (0, r(654835).l)({
                        channels: N,
                        filter: y
                    }), [y, N]),
                    $ = o.useCallback(() => H.map(e => ({
                        menuListItem: K({
                            channel: e
                        }),
                        channelName: e.name
                    })).filter(r(722371).O9), [H, K]),
                    G = o.useCallback(() => q.map(e => ({
                        menuListItem: K({
                            channel: e
                        }),
                        channelName: e.name
                    })).filter(r(722371).O9), [q, K]),
                    Q = o.useCallback(() => U.map(e => ({
                        menuListItem: K({
                            channel: e
                        }),
                        channelName: e.name
                    })).filter(r(722371).O9), [U, K]),
                    J = o.useCallback(() => Y.map(e => ({
                        menuListItem: K({
                            channel: e
                        }),
                        channelName: e.name
                    })).filter(r(722371).O9), [Y, K]),
                    X = o.useCallback(() => $().map(({
                        menuListItem: e,
                        channelName: t
                    }) => {
                        if ((0, r(654835).b)({
                                channelName: t,
                                query: E
                            })) return e
                    }).filter(r(722371).O9), [$, E]),
                    Z = o.useCallback(() => G().map(({
                        menuListItem: e,
                        channelName: t
                    }) => {
                        if ((0, r(654835).b)({
                                channelName: t,
                                query: E
                            })) return e
                    }).filter(r(722371).O9), [G, E]),
                    ee = o.useCallback(() => Q().map(({
                        menuListItem: e,
                        channelName: t
                    }) => {
                        if ((0, r(654835).b)({
                                channelName: t,
                                query: E
                            })) return e
                    }).filter(r(722371).O9), [Q, E]),
                    et = o.useCallback(() => J().map(({
                        menuListItem: e,
                        channelName: t
                    }) => {
                        if ((0, r(654835).b)({
                                channelName: t,
                                query: E
                            })) return e
                    }).filter(r(722371).O9), [J, E]),
                    er = o.useCallback(() => V ? (0, r(176020).qO)(V).organizationName : "Workflows organization", [V]),
                    eo = o.useCallback(() => {
                        if (!R) return [];
                        let e = [],
                            o = X(),
                            n = Z(),
                            i = ee(),
                            l = et(),
                            s = v && f && !E,
                            u = !!(j && !E && ((null == t ? void 0 : t.length) || b));
                        return u && j && e.push({
                            key: "clear-selection-section",
                            items: [{
                                key: "clear-selection",
                                render: e => (0, a.jsx)(r(95582).A, { ...e,
                                    title: (0, a.jsx)(r(109939).sA, {
                                        id: "workflows.slack.clearSelection",
                                        defaultMessage: "Clear selection"
                                    }),
                                    isChecked: !1
                                }),
                                action: () => j()
                            }]
                        }), s && e.push({
                            key: "select-all-channels",
                            items: [{
                                key: "all-channels",
                                render: e => (0, a.jsx)(r(95582).A, { ...e,
                                    title: (0, a.jsx)(r(109939).sA, {
                                        id: "notificationRuleSettings.selectChannelView.selectAllChannels.label",
                                        defaultMessage: "All channels"
                                    }),
                                    isChecked: b
                                }),
                                action: z
                            }]
                        }), i.length > 0 && e.push({
                            key: "personal-channels",
                            render: e => (0, a.jsx)(r(844565).A, { ...e,
                                title: er(),
                                topBorder: s || u
                            }),
                            items: i
                        }), o.length > 0 && e.push({
                            key: "public-channels",
                            render: e => (0, a.jsx)(r(844565).A, { ...e,
                                topBorder: i.length > 0 || s || u,
                                title: 0 === i.length && er()
                            }),
                            items: o
                        }), n.length > 0 && e.push({
                            key: "private-channels",
                            render: e => (0, a.jsx)(r(844565).A, { ...e,
                                topBorder: o.length > 0 || s || u,
                                title: 0 === i.length && o.length > 0 && er()
                            }),
                            items: n
                        }), S && l.length > 0 && e.push({
                            key: "im-channels",
                            render: e => (0, a.jsx)(r(844565).A, { ...e,
                                title: (0, a.jsx)(r(109939).sA, {
                                    defaultMessage: "Direct Messages with Notion",
                                    id: "imChannels.title"
                                })
                            }),
                            items: l
                        }), e
                    }, [R, X, Z, ee, et, v, f, E, j, null == t ? void 0 : t.length, b, S, z, er]),
                    en = (0, r(934877).A)({
                        visibility: O,
                        delayShow: 500,
                        delayHold: 300
                    });
                if (!R) return null;
                let ea = [];
                return M || ea.push({
                    key: "search-input-section",
                    items: [{
                        key: "search-input-item",
                        action: () => {},
                        render: e => (0, a.jsx)("div", {
                            children: (0, a.jsx)(r(310324).Ay, { ...e,
                                inputLeft: (0, a.jsx)(r(310324).Zf, {
                                    icon: r(921048).magnifyingGlassSmallIcon
                                }),
                                inputRight: en && (0, a.jsx)(r(517334).k, {
                                    style: l.style1
                                }),
                                showClearButton: !0,
                                placeholder: P.formatMessage(A),
                                focusInitial: !r(986939).A.isMobile,
                                value: E,
                                onChange: e => {
                                    B(e.target.value)
                                }
                            })
                        })
                    }]
                }), ea.push(...eo()), t || x || !D || ea.push({
                    key: "add-another-slack-account-section",
                    items: [{
                        key: "add-another-slack-account-item",
                        action: async () => {
                            if (!W) return;
                            let e = await r(211791).Jq({
                                environment: I,
                                integration: D,
                                spaceId: W,
                                from: "collection_view_settings"
                            });
                            r(300441).Q.isFail(e) || m()
                        },
                        render: e => (0, a.jsx)(r(95582).A, { ...e,
                            icon: (0, a.jsx)("img", {
                                src: r(896221).A.images.externalIntegrations.slackIconPng,
                                style: l.style2
                            }),
                            title: (0, a.jsx)(r(109939).sA, {
                                id: "notificationRuleSettings.selectChannelView.setupAnotherSlackAccount.label",
                                defaultMessage: "Add another Slack account"
                            })
                        })
                    }],
                    render: e => (0, a.jsx)(r(844565).A, { ...e,
                        topBorder: !0
                    })
                }), (0, a.jsxs)(a.Fragment, {
                    children: [M ? (0, a.jsx)("div", {
                        style: l.fixedSearchInput,
                        children: (0, a.jsx)(r(310324).Ay, { ...e,
                            inputLeft: (0, a.jsx)(r(310324).Zf, {
                                icon: r(921048).magnifyingGlassSmallIcon
                            }),
                            inputRight: en && (0, a.jsx)(r(517334).k, {
                                style: l.style1
                            }),
                            showClearButton: !0,
                            placeholder: P.formatMessage(A),
                            focusInitial: !r(986939).A.isMobile,
                            value: E,
                            onChange: e => {
                                B(e.target.value)
                            }
                        })
                    }) : void 0, g(ea, E)]
                })
            }

            function u(e) {
                let {
                    channel: t
                } = e;
                return "private" === t.type ? r(697198).lockSmallIcon : "me" === t.type || "im" === t.type ? r(160184).U : r(295044).E
            }

            function d(e) {
                let t = (0, r(682985).K8)(() => {
                    if (e) return n().c.getStateForBot(e)
                }, [e], {
                    equalityFn: r(381453).n4
                });
                return {
                    loadedChannelsForAccount: (0, o.useMemo)(() => null != t && t.channels ? Object.values(t.channels) : [], [null == t ? void 0 : t.channels]),
                    isLoading: (null == t ? void 0 : t.fetching) ? ? !1
                }
            }
            async function c(e) {
                let t, {
                        environment: r,
                        externalAuthConfig: o,
                        spaceId: a
                    } = e,
                    i = n().c.getStateForBot(o);
                if (!(i.fetching || Date.now() - i.lastRefreshed < 15e3)) {
                    for (n().c.updateStateForBot(o, {
                            fetching: !0,
                            lastRefreshed: Date.now(),
                            failed: !1
                        });;) {
                        let e = await r.api.callApi({
                            eventName: "getExternalNotificationChannels",
                            environment: r,
                            data: {
                                spaceId: a,
                                cursor: t,
                                ...o
                            }
                        });
                        if ("success" === e.type) {
                            let r = {};
                            for (let t of e.data.channels) r[t.id] = t;
                            if (n().c.addChannelsForBot(o, r), !(t = e.data.cursor)) break
                        } else {
                            n().c.updateStateForBot(o, {
                                failed: !0
                            }), console.error(e.error);
                            break
                        }
                        await new Promise(e => setTimeout(e, 0))
                    }
                    n().c.updateStateForBot(o, {
                        fetching: !1
                    })
                }
            }
            let p = {
                    width: 8
                },
                m = o.forwardRef((e, t) => {
                    let {
                        channel: o,
                        currentNotificationChannels: n,
                        ...i
                    } = e;
                    return (0, a.jsx)(r(95582).A, {
                        ref: t,
                        ...i,
                        icon: (0, a.jsx)(r(16275).I, {
                            icon: u({
                                channel: o
                            }),
                            colorVariant: "tertiary",
                            size: "sm"
                        }),
                        desktopIconStyle: p,
                        title: o.name,
                        isChecked: null == n ? void 0 : n.some(e => e.id === o.id)
                    })
                });
            m.displayName = "SlackChannelMenuItem"
        },
        524242: (e, t, r) => {
            r.d(t, {
                Is: () => n,
                LS: () => l,
                NH: () => s,
                QA: () => i,
                _b: () => a
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(296540);
            var o = r(474848);

            function n(e) {
                let t = (0, r(457915).g)(e) ? ? [],
                    o = [];
                for (let r of t) {
                    if (!("block" === r.table && !0 === r.isTemplate() && r.getFormat().automation_id && r.id !== e.id)) continue;
                    let t = r.getAutomationStore();
                    if (t) {
                        if (!t.isReady()) return {
                            automationStoresReady: !1
                        };
                        void 0 !== t.getRecurrence() && t.isDefined() && o.push(t.getModel())
                    }
                }
                return {
                    automationStoresReady: !0,
                    ...(0, r(832248).jX)(o)
                }
            }

            function a(e) {
                switch (e) {
                    case "hour":
                        return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Duplicate hourly",
                            id: "database.templatePickerItem.recurrenceFrequency.hourly"
                        });
                    case "day":
                        return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Duplicate daily",
                            id: "database.templatePickerItem.recurrenceFrequency.daily"
                        });
                    case "week":
                        return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Duplicate weekly",
                            id: "database.templatePickerItem.recurrenceFrequency.weekly"
                        });
                    case "month":
                        return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Duplicate monthly",
                            id: "database.templatePickerItem.recurrenceFrequency.monthly"
                        });
                    case "year":
                        return (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Duplicate yearly",
                            id: "database.templatePickerItem.recurrenceFrequency.yearly"
                        });
                    default:
                        (0, r(722371).HB)(e)
                }
            }

            function i() {
                return {
                    start_date: r(906745).DateTime.local().plus({
                        days: 1
                    }).set({
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0
                    }).toMillis(),
                    timezone: (0, r(25825).dB)(),
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
                    leadingPhrase: n
                } = e;
                return (0, r(832248).X3)({ ..."month" === t.frequency ? { ...t,
                        monthly_restriction: void 0
                    } : t,
                    weekdays: void 0,
                    hour: 0,
                    minute: 0,
                    end_condition: void 0
                }).toText(e => {
                    switch (e) {
                        case "every":
                            if (void 0 === n) return "";
                            if ("every" === n) return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.every",
                                defaultMessage: "every"
                            });
                            if ("duplicate every" === n) return o.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.duplicateEvery",
                                defaultMessage: "duplicate every"
                            });
                            (0, r(722371).HB)(n);
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
                                if (5 === e.length && (0, r(222869)._)(new Set(e), new Set(["MO", "TU", "WE", "TH", "FR"]))) return o.formatMessage({
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
        552535: (e, t, r) => {
            r.d(t, {
                bK: () => i,
                mK: () => n
            });
            let o = ["string_is", "string_is_not", "string_contains", "string_does_not_contain", "string_starts_with", "string_ends_with", "is_empty", "changes_to_any"];

            function n(e) {
                return o.includes(e) ? e : "string_is"
            }
            let a = (0, r(109939).YK)({
                    changesToAny: {
                        id: "propertyTrigger.textField.changesToAnyOption",
                        defaultMessage: "Is edited"
                    },
                    isEmpty: {
                        id: "propertyTrigger.textField.isEmpty",
                        defaultMessage: "Is cleared"
                    },
                    stringIs: {
                        id: "propertyTrigger.textField.stringIsOption",
                        defaultMessage: "Is set to"
                    },
                    stringIsNot: {
                        id: "propertyTrigger.textField.stringIsNotOption",
                        defaultMessage: "Is not set to"
                    },
                    stringContains: {
                        id: "propertyTrigger.textField.stringContainsOption",
                        defaultMessage: "Contains"
                    },
                    stringDoesNotContain: {
                        id: "propertyTrigger.textField.stringDoesNotContain",
                        defaultMessage: "Does not contain"
                    },
                    stringStartsWith: {
                        id: "propertyTrigger.textField.stringStartsWithOption",
                        defaultMessage: "Starts with"
                    },
                    stringEndsWith: {
                        id: "propertyTrigger.textField.stringEndsWithOption",
                        defaultMessage: "Ends with"
                    }
                }),
                i = {
                    string_is: {
                        hasInput: !0,
                        text: a.stringIs,
                        value: "string_is"
                    },
                    string_is_not: {
                        hasInput: !0,
                        text: a.stringIsNot,
                        value: "string_is_not"
                    },
                    string_contains: {
                        hasInput: !0,
                        text: a.stringContains,
                        value: "string_contains"
                    },
                    string_does_not_contain: {
                        hasInput: !0,
                        text: a.stringDoesNotContain,
                        value: "string_does_not_contain"
                    },
                    string_starts_with: {
                        hasInput: !0,
                        text: a.stringStartsWith,
                        value: "string_starts_with"
                    },
                    string_ends_with: {
                        hasInput: !0,
                        text: a.stringEndsWith,
                        value: "string_ends_with"
                    },
                    changes_to_any: {
                        hasInput: !1,
                        text: a.changesToAny,
                        value: "changes_to_any"
                    },
                    is_empty: {
                        text: a.isEmpty,
                        value: "is_empty",
                        hasInput: !1
                    }
                }
        },
        562930: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var o = r(296540),
                n = r(474848);
            let a = (0, r(815048).Qz)(r(864850).T.formulas, (e, t) => (0, n.jsx)(i, { ...t,
                formulas: e
            }));

            function i(e) {
                let {
                    allowedReturnTypes: t,
                    disabled: a,
                    formulas: i,
                    formulaTypecheckContextValues: l,
                    onBack: s,
                    onChange: u,
                    onClose: d,
                    parentRecordStore: c,
                    restrictUnaccessibleProperties: p,
                    spaceId: m,
                    value: g
                } = e, y = (0, r(533992).v3)(), h = (0, o.useCallback)(async () => {
                    s ? s() : ((null == g ? void 0 : g.type) === "simple" || await (0, r(95746).Cp)() && u((0, r(95746).D2)(null == g ? void 0 : g.value)), d())
                }, [d, u, s, g]), f = (0, o.useCallback)(e => {
                    void 0 !== e && e[0][0].length ? u({
                        type: "formula",
                        value: e
                    }) : u(void 0), d()
                }, [u, d]), x = (0, r(489828).i)(), v = (0, r(682985).K8)(() => {
                    let e = (0, r(457103).i)();
                    return {
                        guaranteedPropertyIds: x,
                        allowedReturnTypes: t,
                        handleDataRequest: (0, r(696914).MC)({
                            collectionFeatureGates: e,
                            experimentService: r(218744).default,
                            getRecordModel: c.getRecordModel,
                            loadRecordModel: c.loadRecordModel,
                            spaceIdCreator: y.idCreator.getSpaceIdCreatorSync(m)
                        }),
                        restrictUnaccessibleProperties: p,
                        spaceId: m,
                        valueTypes: l,
                        featureGates: e
                    }
                }, [t, l, c.getRecordModel, c.loadRecordModel, m, p, y.idCreator, x]), b = (0, r(682985).K8)(() => (0, r(95746).m9)(g, l, c.getRecordModel), [g, l, c.getRecordModel]);
                return v ? (0, n.jsx)(r(747369).A, {
                    disableBottomPadding: !0,
                    disableHeaderBorder: !0,
                    disableScroller: !0,
                    hideMobileTopbar: !0,
                    maxHeight: "unset",
                    menuType: r(986939).A.isMobile ? r(649476).gu.Modal : r(649476).gu.Popup,
                    width: r(986939).A.isMobile ? void 0 : 740,
                    children: (0, n.jsx)(r(27312).v, {
                        formulas: i,
                        initialCode: b,
                        typecheckContext: v,
                        handleClose: f,
                        handleCancel: h,
                        parentSpaceId: m,
                        disabled: a,
                        getRecordModel: c.getRecordModel,
                        autosave: !1
                    })
                }) : null
            }
        },
        569638: (e, t, r) => {
            r.d(t, {
                F: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                button: {
                    alignItems: "center",
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 10,
                    color: r(632079).Tj.text.secondary,
                    display: "flex",
                    gap: 8,
                    justifyContent: "flex-start",
                    padding: 12
                },
                buttonHoveredStyle: {
                    background: r(632079).Tj.outlineButtonHoveredBackground
                },
                buttonPressedStyle: {
                    background: r(632079).Tj.buttonPressedBackground
                },
                iconContainer: {
                    fill: r(632079).Tj.icon.secondary,
                    width: 20,
                    height: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                title: {
                    fontSize: 14,
                    lineHeight: "20px"
                }
            };

            function a(e) {
                let {
                    ariaLabel: t,
                    disabled: a,
                    icon: i,
                    onClick: l,
                    title: s
                } = e;
                return (0, o.jsxs)(r(64960).Ay, {
                    ariaLabel: t,
                    disabled: a,
                    disabledFeedback: a,
                    onClick: l,
                    style: n.button,
                    hoveredStyle: n.buttonHoveredStyle,
                    pressedStyle: n.buttonPressedStyle,
                    children: [i ? (0, o.jsx)("div", {
                        "aria-hidden": "true",
                        style: n.iconContainer,
                        children: i
                    }) : void 0, (0, o.jsx)("div", {
                        style: n.title,
                        children: s
                    })]
                })
            }
        },
        572315: (e, t, r) => {
            r.d(t, {
                VW: () => l,
                aR: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                content: {
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    whiteSpace: "pre",
                    lineHeight: 1.6
                },
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                },
                propertyValue: { ...r(699422).RC,
                    paddingBlockStart: 4
                }
            };

            function a(e) {
                let {
                    numberValue: t,
                    operator: a,
                    propertySchema: s,
                    messageType: u
                } = e, d = (0, r(109939).tz)(), c = (0, r(682985).K8)(() => (function(e) {
                    let t, {
                            numberValue: n,
                            operator: a,
                            propertySchema: l,
                            styles: s,
                            messageType: u,
                            intl: d
                        } = e,
                        c = (0, o.jsx)("span", {
                            style: s.propertyName,
                            children: l.name
                        }),
                        p = d.formatMessage(r(484989).$R[a].text).toLocaleLowerCase();
                    return "action" === u ? t = r(760459).vC({
                        propertyName: c,
                        propertyValues: (0, o.jsx)(r(628462).A, {
                            format: r(696654).NY.Medium,
                            isRound: !0,
                            isSingle: !0,
                            value: n,
                            showRemoveButton: !1,
                            style: i
                        }),
                        operator: p
                    }) : "trigger" === u ? t = r(760459).Rn({
                        propertyName: c,
                        propertyValues: (0, o.jsx)(r(628462).A, {
                            format: r(696654).NY.Medium,
                            isRound: !0,
                            isSingle: !0,
                            value: n,
                            showRemoveButton: !1,
                            style: i
                        }),
                        operator: p
                    }) : (0, r(722371).HB)(u), (0, o.jsx)(r(109939).sA, { ...t
                    })
                })({
                    intl: d,
                    messageType: u,
                    numberValue: t,
                    operator: a,
                    propertySchema: s,
                    styles: n
                }), [u, t, a, s, d]);
                return {
                    tooltipTitle: (0, r(682985).K8)(() => l({
                        intl: d,
                        messageType: u,
                        numberValue: t,
                        operator: a,
                        propertySchema: s
                    }), [d, u, t, a, s]),
                    title: c,
                    styles: n
                }
            }
            let i = {
                flex: "none"
            };

            function l(e) {
                let t, {
                        numberValue: n,
                        operator: a,
                        propertySchema: i,
                        messageType: l,
                        intl: s
                    } = e,
                    u = i.name,
                    d = s.formatMessage(r(484989).$R[a].text).toLocaleLowerCase();
                return "action" === l ? t = r(760459).vC({
                    propertyName: u,
                    propertyValues: n,
                    operator: d
                }) : "trigger" === l ? t = r(760459).Rn({
                    propertyName: u,
                    propertyValues: n,
                    operator: d
                }) : (0, r(722371).HB)(l), (0, o.jsx)(r(109939).sA, { ...t
                })
            }
        },
        594537: (e, t, r) => {
            r.d(t, {
                a: () => u,
                y: () => n
            }), r(898992), r(354520), r(672577), r(581454), r(296540);
            var o = r(474848);

            function n(e) {
                let t = (0, r(109939).tz)(),
                    {
                        filter: n,
                        limit: a = 5,
                        propertySchema: l,
                        onClick: d
                    } = e,
                    c = l.name,
                    p = (0, r(400473).V6)(n),
                    m = p.map(e => "is_group" === e.type ? e.value : void 0).filter(r(722371).O9),
                    g = p.map(e => "is_option" === e.type ? e.value : void 0).filter(r(722371).O9),
                    y = u({
                        intl: t,
                        groupValues: m,
                        limit: a,
                        optionValues: g,
                        propertySchema: l
                    }),
                    h = u({
                        intl: t,
                        isText: !0,
                        groupValues: m,
                        limit: a,
                        optionValues: g,
                        propertySchema: l
                    });
                return (0, o.jsx)(r(238082).z, {
                    onClick: d,
                    tooltip: (0, o.jsx)(s, {
                        propertyName: c,
                        statusValues: h
                    }),
                    children: (0, o.jsx)(i, {
                        propertyName: c,
                        statusValues: y
                    })
                })
            }
            let a = {
                content: {
                    alignItems: "baseline",
                    display: "flex",
                    flexWrap: "wrap",
                    whiteSpace: "pre",
                    lineHeight: 1.6
                },
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                }
            };

            function i({
                propertyName: e,
                statusValues: t
            }) {
                let n = (0, r(109939).tz)(),
                    l = n.formatList(t, {
                        style: "long",
                        type: "disjunction"
                    });
                return (0, o.jsx)("div", {
                    style: a.content,
                    children: (0, r(760459).Yx)(n, {
                        propertyName: (0, o.jsx)("span", {
                            style: a.propertyName,
                            children: e
                        }),
                        propertyValues: (0, r(59871).d)(l)
                    })
                })
            }
            let l = {
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                }
            };

            function s({
                propertyName: e,
                statusValues: t
            }) {
                let n = (0, r(109939).tz)(),
                    a = n.formatList(t, {
                        style: "long",
                        type: "disjunction"
                    });
                return (0, o.jsx)(o.Fragment, {
                    children: (0, r(760459).Yx)(n, {
                        propertyName: (0, o.jsx)("span", {
                            style: l.propertyName,
                            children: e
                        }),
                        propertyValues: (0, r(59871).d)(a)
                    })
                })
            }

            function u({
                groupValues: e,
                intl: t,
                isText: n,
                limit: a,
                optionValues: i,
                propertySchema: l,
                tokenFormat: s = r(696654).NY.Medium
            }) {
                let d = l.groups || [],
                    c = l.options || [],
                    p = e.map(e => {
                        let t = d.find(t => t.name === e);
                        if (t) return n ? t.name : (0, o.jsx)(r(593100).q, {
                            format: s,
                            isSingle: !0,
                            value: t.name,
                            color: t.color,
                            groupColor: null == t ? void 0 : t.color,
                            showRemoveButton: !1,
                            showEllipsis: !1
                        }, t.id)
                    }).filter(r(722371).O9),
                    m = i.map(e => {
                        let a = (0, r(561872).jy)(c, e);
                        if (void 0 === a) return n ? (0, r(760459).iy)(t) : (0, o.jsx)(r(300813).A, {
                            tokenFormat: s
                        }, `missing_option_value_${e}`);
                        if (n) return a.value;
                        let i = d.find(e => {
                            var t;
                            return null == (t = e.optionIds) ? void 0 : t.includes(a.id)
                        });
                        return (0, o.jsx)(r(593100).q, {
                            format: s,
                            isSingle: !0,
                            value: a.value,
                            color: a.color,
                            groupColor: null == i ? void 0 : i.color,
                            showRemoveButton: !1,
                            showEllipsis: !0
                        }, a.id)
                    }),
                    g = [...p, ...m],
                    y = [];
                if (void 0 !== a && g.length > a) {
                    let e = m.length - a,
                        t = n ? `+${e}` : (0, o.jsx)(r(628462).A, {
                            format: r(696654).NY.Medium,
                            isRound: !0,
                            isSingle: !0,
                            showRemoveButton: !1,
                            value: `+${e}`
                        }, "More tokens");
                    y = [...m.slice(0, a), t]
                } else y = g;
                return y
            }
        },
        599762: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(296540);
            var o = r(474848);

            function n({
                formulaTypecheckContextValues: e,
                handleRemoveToken: t,
                isDisabled: a,
                token: i,
                style: l,
                iconSize: s,
                preventOnClickPropagation: u
            }) {
                let d = (0, r(247438).iVq)(i).id,
                    c = (0, r(722371).O9)(e) ? (0, r(297493).IV)(e, d) : void 0;
                return c ? (0, o.jsx)(r(360625).F, {
                    value: c,
                    format: r(696654).NY.Small,
                    isSingle: !1,
                    shouldShrink: !0,
                    showRemoveButton: !a,
                    style: l,
                    onClickRemove: e => {
                        u && (null == e || e.stopPropagation()), t(i, e)
                    }
                }) : null
            }
        },
        629177: (e, t, r) => {
            r.d(t, {
                Js: () => P,
                _B: () => I,
                CD: () => w
            }), r(898992), r(354520), r(581454), r(737550);
            var o = r(296540),
                n = r(474848);
            let a = {
                title: {
                    fontWeight: r(699422).Wy.medium
                }
            };

            function i() {
                let {
                    removeAnyPropertyEditedTrigger: e
                } = (0, r(287134).p)(), t = (0, r(109939).tz)(), o = r(760459).HG(t);
                return (0, n.jsx)(r(511289).X, {
                    icon: r(753114).pencilLineSmallIcon,
                    onDelete: e,
                    tooltip: o,
                    children: (0, n.jsx)("div", {
                        style: a.title,
                        children: o
                    })
                })
            }

            function l(e) {
                let {
                    children: t,
                    property: o
                } = e, a = (0, r(554988).j)();
                return (0, n.jsx)(r(656252).A, {
                    popupType: a,
                    content: e => (0, n.jsx)(r(44117).A, {
                        initialState: {
                            type: "propertyChangedFilter",
                            property: o
                        },
                        buttonPopupParent: e
                    }),
                    children: t
                })
            }

            function s({
                propertySchema: e,
                onClick: t
            }) {
                return (0, n.jsx)(r(238082).z, {
                    onClick: t,
                    icon: t => (0, n.jsx)(r(721623).P, {
                        propertySchema: e,
                        style: t
                    }),
                    tooltip: (0, n.jsx)(c, {
                        propertyName: e.name
                    }),
                    children: (0, n.jsx)(d, {
                        propertyName: e.name
                    })
                })
            }
            let u = {
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                },
                wrap: {
                    alignItems: "center",
                    display: "flex",
                    whiteSpace: "pre"
                }
            };

            function d({
                propertyName: e
            }) {
                let t = (0, r(109939).tz)(),
                    o = r(760459).yR(t, {
                        propertyName: (0, n.jsx)("span", {
                            style: u.propertyName,
                            children: e
                        })
                    });
                return (0, n.jsx)("span", {
                    style: u.wrap,
                    children: o
                })
            }

            function c({
                propertyName: e
            }) {
                let t = (0, r(109939).tz)();
                return (0, n.jsx)(n.Fragment, {
                    children: r(760459).yR(t, {
                        propertyName: e
                    })
                })
            }

            function p({
                propertySchema: e,
                onClick: t
            }) {
                return (0, n.jsx)(r(238082).z, {
                    onClick: t,
                    icon: t => (0, n.jsx)(r(721623).P, {
                        propertySchema: e,
                        style: t
                    }),
                    tooltip: (0, n.jsx)(y, {
                        propertyName: e.name
                    }),
                    children: (0, n.jsx)(g, {
                        propertyName: e.name
                    })
                })
            }
            let m = {
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                },
                wrap: {
                    alignItems: "center",
                    display: "flex",
                    whiteSpace: "pre"
                }
            };

            function g({
                propertyName: e
            }) {
                let t = (0, r(109939).tz)(),
                    o = r(760459).Od(t, {
                        propertyName: (0, n.jsx)("span", {
                            style: m.propertyName,
                            children: e
                        })
                    });
                return (0, n.jsx)("span", {
                    style: m.wrap,
                    children: o
                })
            }

            function y({
                propertyName: e
            }) {
                let t = (0, r(109939).tz)();
                return (0, n.jsx)(n.Fragment, {
                    children: r(760459).Od(t, {
                        propertyName: e
                    })
                })
            }

            function h(e) {
                let {
                    filter: t,
                    propertySchema: o,
                    onClick: a
                } = e, {
                    title: i,
                    tooltipTitle: l,
                    styles: s
                } = (0, r(572315).aR)({
                    numberValue: t.value.value,
                    operator: t.operator,
                    propertySchema: o,
                    messageType: "trigger"
                });
                return (0, n.jsx)(r(238082).z, {
                    onClick: a,
                    tooltip: (0, n.jsx)("span", {
                        children: l
                    }),
                    children: (0, n.jsx)("div", {
                        style: s.content,
                        children: i
                    })
                })
            }
            let f = {
                content: {
                    color: r(632079).Tj.red.text.accentPrimary,
                    fontWeight: r(699422).Wy.regular,
                    whiteSpace: "normal"
                },
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                iconWrap: {
                    background: r(632079).Tj.red.background.secondaryTranslucent,
                    borderRadius: 4
                },
                propertyType: {
                    color: r(632079).Tj.palette.red[700]
                }
            };

            function x(e) {
                let {
                    deletedPropertySchema: t
                } = e, a = null == t ? void 0 : t.type, {
                    property: i
                } = (0, o.useContext)(I), {
                    collectionStore: l,
                    collectionSettingsStore: s
                } = (0, r(605263).q8)(), {
                    removePropertyTrigger: u
                } = (0, r(287134).p)(), d = (0, r(554988).j)(), c = (0, r(682985).uB)(void 0, r(510969).A), p = (0, o.useCallback)(() => c.reset(), [c]), m = (0, o.useCallback)(() => {
                    u(i)
                }, [i, u]), g = (0, r(722371).O9)(t) ? (0, r(875840).AJ)({
                    propertySchema: t
                }) : (0, r(875840).Xl)(), y = (0, r(722371).O9)(t) ? (0, r(875840).CH)() : (0, r(875840).Xl)();
                return (0, n.jsx)(r(656252).A, {
                    buttonPopupStore: c,
                    popupType: d,
                    content: () => (0, n.jsx)(r(42196).c, {
                        collectionSettingsStore: s,
                        collectionStore: l,
                        closeMenu: p,
                        propertyId: i,
                        removePropertyTrigger: u
                    }),
                    children: e => (0, n.jsx)(r(511289).X, { ...e,
                        icon: (0, r(722371).O9)(a) ? r(221535).LE[a] : r(789777).exclamationMarkTriangleFillIcon,
                        onDelete: m,
                        styles: f,
                        tooltip: y,
                        children: (0, n.jsx)("div", {
                            style: f.content,
                            children: g
                        })
                    })
                })
            }

            function v(e) {
                let {
                    filter: t,
                    propertySchema: o,
                    onClick: a
                } = e, i = (0, r(489828).F)(), {
                    collectionStore: l
                } = (0, r(305042).k)(), s = (0, r(682985).K8)(() => l.getSpaceId(), [l]), u = (0, r(682985).K8)(() => (0, r(226989).o)(s, o), [o, s]), d = (0, r(682985).K8)(() => (0, r(4040).WE)({
                    collectionStore: l,
                    filter: t
                }).value, [l, t]), {
                    title: c,
                    tooltipTitle: p,
                    styles: m
                } = (0, r(4040).xL)({
                    automationContextValues: i,
                    filter: t,
                    collectionStore: l,
                    operator: t.operator,
                    propertySchema: o,
                    messageType: "trigger",
                    value: d
                });
                return u ? (0, n.jsx)(r(118794).Zr, {
                    propertySchema: o
                }) : (0, n.jsx)(r(238082).z, {
                    onClick: a,
                    tooltip: (0, n.jsx)("span", {
                        children: p
                    }),
                    children: (0, n.jsx)("div", {
                        style: m.content,
                        children: c
                    })
                })
            }

            function b(e) {
                let {
                    filter: t,
                    propertySchema: o,
                    onClick: a
                } = e, {
                    title: i,
                    tooltipTitle: l,
                    styles: s
                } = (0, r(350945).w5)({
                    textValue: t.value.value,
                    operator: t.operator,
                    propertySchema: o,
                    messageType: "trigger"
                });
                return (0, n.jsx)(r(238082).z, {
                    onClick: a,
                    tooltip: (0, n.jsx)("span", {
                        children: l
                    }),
                    children: (0, n.jsx)("div", {
                        style: s.content,
                        children: i
                    })
                })
            }

            function S(e) {
                let {
                    closeMenu: t,
                    propertyId: a
                } = e, {
                    removePropertyTrigger: i
                } = (0, r(287134).p)(), l = (0, o.useCallback)(() => {
                    i(a), null == t || t()
                }, [t, a, i]), s = (0, r(457067).e)({
                    width: 266
                }), u = (0, o.useMemo)(() => ({
                    action: l,
                    key: "delete-property-menu-item",
                    render: e => (0, n.jsx)(r(95582).A, { ...e,
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(968411).trashIcon
                        }),
                        title: (0, n.jsx)(r(109939).sA, {
                            id: "automationUnsupportedOperatorMenu.deleteTrigger.title",
                            defaultMessage: "Delete trigger"
                        })
                    })
                }), [l]);
                return (0, n.jsx)(r(747369).A, { ...s,
                    children: (0, n.jsx)(r(558045).A, {
                        initialFocus: 0,
                        sections: [{
                            key: "actions-section",
                            items: [u]
                        }],
                        type: r(558045).O.Vertical
                    })
                })
            }
            let j = {
                content: {
                    color: r(632079).Tj.red.text.accentPrimary,
                    fontWeight: r(699422).Wy.regular,
                    whiteSpace: "normal"
                },
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                iconWrap: {
                    background: r(632079).Tj.red.background.secondaryTranslucent,
                    borderRadius: 4
                },
                propertyType: {
                    color: r(632079).Tj.palette.red[700]
                }
            };

            function k({
                filter: e,
                propertySchema: t
            }) {
                let a = (0, r(109939).tz)(),
                    {
                        property: i
                    } = (0, o.useContext)(I),
                    {
                        removePropertyTrigger: l
                    } = (0, r(287134).p)(),
                    s = (0, r(554988).j)(),
                    u = (0, r(682985).uB)(void 0, r(510969).A),
                    d = (0, o.useCallback)(() => u.reset(), [u]),
                    c = (0, o.useCallback)(() => {
                        l(i)
                    }, [i, l]),
                    p = function(e) {
                        let {
                            propertySchema: t
                        } = e, o = t.type, a = t.name || r(799514).dC[o];
                        return (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "“{propertyTypeDisplayName}” property type is incompatible with this step",
                            id: "updateThisPageUnsupportedOperatorAction.updatedUnsupportedOperator.title",
                            values: {
                                propertyTypeDisplayName: a
                            }
                        })
                    }({
                        propertySchema: t,
                        styles: j
                    }),
                    m = function(e) {
                        let {
                            filter: t,
                            intl: o
                        } = e, a = r(887106).LN[t.operator], i = (r(887106).lD[a] || []).map(e => r(799514).dC[e]), l = o.formatList(i, {
                            style: "long",
                            type: "disjunction"
                        });
                        return (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "Remove step or restore property to a valid type: {propertiesSupportedList}",
                            id: "updateThisPageUnsupportedOperatorAction.unsupportedOperator.titleList",
                            values: {
                                propertiesSupportedList: l
                            }
                        })
                    }({
                        intl: a,
                        filter: e
                    }),
                    g = t.type;
                return (0, n.jsx)(r(656252).A, {
                    buttonPopupStore: u,
                    popupType: s,
                    content: () => (0, n.jsx)(S, {
                        closeMenu: d,
                        propertyId: i
                    }),
                    children: e => (0, n.jsx)(r(511289).X, { ...e,
                        icon: (0, r(722371).O9)(g) ? r(221535).LE[g] : r(789777).exclamationMarkTriangleFillIcon,
                        onDelete: c,
                        styles: j,
                        tooltip: m,
                        children: (0, n.jsx)("div", {
                            style: j.content,
                            children: p
                        })
                    })
                })
            }
            let A = {
                content: {
                    color: r(632079).Tj.red.text.accentPrimary,
                    fontWeight: r(699422).Wy.regular,
                    whiteSpace: "normal"
                },
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                iconWrap: {
                    background: r(632079).Tj.red.background.secondaryTranslucent,
                    borderRadius: 4
                },
                propertyType: {
                    color: r(632079).Tj.palette.red[700]
                }
            };

            function C({
                propertySchema: e
            }) {
                let {
                    property: t
                } = (0, o.useContext)(I), {
                    removePropertyTrigger: a
                } = (0, r(287134).p)(), i = (0, r(554988).j)(), l = (0, r(682985).uB)(void 0, r(510969).A), s = (0, o.useCallback)(() => l.reset(), [l]), u = (0, o.useCallback)(() => {
                    a(t)
                }, [t, a]), d = (0, r(79442).m9)({
                    propertySchema: e
                }), c = (0, r(79442).cn)(), p = e.type;
                return (0, n.jsx)(r(656252).A, {
                    buttonPopupStore: l,
                    popupType: i,
                    content: () => (0, n.jsx)(r(659698).A5, {
                        closeMenu: s,
                        propertyId: t
                    }),
                    children: e => (0, n.jsx)(r(511289).X, { ...e,
                        icon: (0, r(722371).O9)(p) ? r(221535).LE[p] : r(789777).exclamationMarkTriangleFillIcon,
                        onDelete: u,
                        styles: A,
                        tooltip: c,
                        children: (0, n.jsx)("div", {
                            style: A.content,
                            children: d
                        })
                    })
                })
            }

            function M(e) {
                let {
                    collectionStore: t
                } = (0, r(305042).k)(), {
                    property: o,
                    filter: a
                } = e, [i, l] = (0, r(682985).K8)(() => {
                    var e, r;
                    return [null == (e = t.getSchema()) ? void 0 : e[o], null == (r = t.getDeletedSchema()) ? void 0 : r[o]]
                }, [t, o]);
                if (!i) return (0, n.jsx)(x, {
                    deletedPropertySchema: l
                });
                if (!(0, r(976298).$0)(i)) return (0, n.jsx)(C, {
                    propertySchema: i
                });
                let s = r(887106).W[i.type] || i.type;
                return "changes_to_any" !== a.operator && "is_empty" !== a.operator && a.operator && r(887106).LN[a.operator] !== s ? (0, n.jsx)(k, {
                    propertySchema: i,
                    filter: a
                }) : (0, r(976298).nq)(i) ? (0, n.jsx)(_, {
                    property: o,
                    propertySchema: i,
                    filter: a
                }) : (0, n.jsx)(p, {
                    propertySchema: i
                })
            }

            function T(e) {
                let {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                } = e, {
                    collectionStore: i
                } = (0, r(305042).k)(), l = (0, r(682985).K8)(() => (0, r(795e3).n)(a) && (0, r(226989).o)(i.getSpaceId(), a), [i, a]);
                return (0, r(795e3).n)(a) && l ? (0, n.jsx)(r(118794).Zr, {
                    propertySchema: a
                }) : "is_empty" === t.operator ? (0, n.jsx)(s, { ...e,
                    propertySchema: a
                }) : "changes_to_any" !== t.operator && (0, r(400473).gc)(t) ? "checkbox" === a.type && (0, r(400473).Ui)(t) ? (0, n.jsx)(r(832846).ZZ, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : "status" === a.type && (0, r(400473).H$)(t) ? (0, n.jsx)(r(594537).y, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : "select" === a.type && (0, r(400473).v0)(t) || "multi_select" === a.type && (0, r(400473).as)(t) ? (0, n.jsx)(r(730859).Ww, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : "person" === a.type && (0, r(784923).I)(t) ? (0, n.jsx)(r(116894).h, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : "number" === a.type && (0, r(818966).M)(t) ? (0, n.jsx)(h, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : ("email" === a.type || "phone_number" === a.type || "text" === a.type || "title" === a.type || "url" === a.type) && (0, r(995906).Y)(t) ? (0, n.jsx)(b, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : "relation" === a.type && (0, r(400473).Pq)(t) ? (0, n.jsx)(v, {
                    filter: t,
                    onClick: o,
                    propertySchema: a
                }) : (0, n.jsx)(p, {
                    onClick: o,
                    propertySchema: a
                }) : (0, n.jsx)(p, {
                    onClick: o,
                    propertySchema: a
                })
            }

            function _(e) {
                let {
                    filter: t,
                    propertySchema: r,
                    property: a
                } = e, i = (0, o.useCallback)(e => (0, n.jsx)(T, {
                    filter: t,
                    onClick: e.onClick,
                    propertySchema: r
                }), [t, r]);
                return (0, n.jsx)(l, {
                    property: a,
                    children: i
                })
            }
            let I = (0, o.createContext)({
                pagePropertiesEdited: [],
                property: ""
            });

            function P() {
                let {
                    automationStore: e,
                    contextType: t
                } = (0, r(605263).q8)(), o = (0, r(461587).y)(e, t), a = w(e), l = (0, r(682985).K8)(() => {
                    var t;
                    if (!e || !e.isTriggerType("event")) return;
                    let r = null == (t = e.getEventConfiguration()) ? void 0 : t.pagePropertiesEdited;
                    return (null == r ? void 0 : r.type) === "none" ? void 0 : r
                }, [e]), s = (0, r(682985).K8)(() => null == o ? void 0 : o.getSchema(), [o]);
                if (!a || !l) return null;
                if ("any" === l.type) return (0, n.jsx)(i, {});
                if (!s) return null;
                let u = [];
                return ("all" === l.type ? u = l.all ? ? [] : "some" === l.type && (u = l.some ? ? []), u) ? (0, n.jsx)(n.Fragment, {
                    children: u.map(({
                        property: e,
                        filter: t
                    }) => (0, n.jsx)(I.Provider, {
                        value: {
                            property: e,
                            pagePropertiesEdited: u
                        },
                        children: (0, n.jsx)(M, {
                            property: e,
                            filter: t
                        })
                    }, e))
                }) : null
            }

            function w(e) {
                return (0, r(682985).K8)(() => {
                    if (!(null != e && e.isTriggerType("event"))) return !1;
                    let t = e.getEventConfiguration(),
                        r = (null == t ? void 0 : t.pagePropertiesEdited.type) !== "none",
                        o = !!((null == t ? void 0 : t.pagePropertiesEdited.type) === "all" && (null == t ? void 0 : t.pagePropertiesEdited.all)),
                        n = !!((null == t ? void 0 : t.pagePropertiesEdited.type) === "some" && (null == t ? void 0 : t.pagePropertiesEdited.some)),
                        a = (null == t ? void 0 : t.pagePropertiesEdited.type) === "any";
                    return r && (o || n || a)
                }, [e])
            }
            I.displayName = "PropertyEditedTriggerContext"
        },
        638925: (e, t, r) => {
            r.d(t, {
                Y: () => u
            });
            var o = r(296540),
                n = r(474848);
            let a = (0, r(109939).YK)({
                    simpleFormulaMentionActionButtonAriaLabel: {
                        id: "formulas.simpleFormulaMentionActionButton.ariaLabel",
                        defaultMessage: "Mentions"
                    },
                    simpleFormulaMentionActionButtonTooltip: {
                        id: "formulas.simpleFormulaMentionActionButton.tooltip",
                        defaultMessage: "Mention a person, page, or date"
                    }
                }),
                i = {
                    formulaIcon: {
                        fill: r(632079).Tj.icon.secondary,
                        height: r(104509).Ev.sm,
                        width: r(104509).Ev.sm
                    },
                    button: {
                        height: 20,
                        width: 20,
                        borderRadius: 4
                    }
                };

            function l(e) {
                let {
                    disabled: t,
                    onClick: l
                } = e, s = (0, r(109939).tz)(), u = (0, o.useCallback)(() => s.formatMessage(a.simpleFormulaMentionActionButtonTooltip), [s]), d = (0, o.useCallback)(e => (0, n.jsx)(r(374533).A, { ...e,
                    ariaLabel: s.formatMessage(a.simpleFormulaMentionActionButtonAriaLabel),
                    disabled: t,
                    disabledFeedback: t,
                    icon: r(160184).U,
                    iconStyle: i.formulaIcon,
                    onClick: l,
                    style: i.button
                }), [t, s, l]);
                return (0, n.jsx)(r(51831).m, {
                    disableTooltip: t,
                    content: u,
                    placement: "bottom",
                    children: d
                })
            }
            let s = {
                    position: "relative",
                    alignSelf: "end",
                    cursor: "unset",
                    justifyContent: "end",
                    paddingTop: 2,
                    paddingInlineEnd: 2,
                    paddingBottom: 2,
                    paddingInlineStart: 0
                },
                u = o.forwardRef(function(e, t) {
                    let {
                        allowedReturnTypes: a,
                        disabled: i,
                        disabledMentionTypes: u,
                        disableEmojiCommands: d,
                        disableFilters: c,
                        disableFormulas: p,
                        disableInsertedDeletedAnnotations: m,
                        disableMentions: g,
                        disableMobileActionBar: y,
                        disableNewLines: h,
                        disableStyleAnnotations: f,
                        formulaInputButtonPopupStore: x,
                        formulaTypecheckContextValues: v,
                        onChange: b,
                        onTextEnter: S,
                        onTextStoreSelect: j,
                        onTextStoreUnselect: k,
                        onTextEsc: A,
                        parentRecordStore: C,
                        placeholder: M,
                        rows: T,
                        shouldShowErrorStyles: _,
                        spaceId: I,
                        style: P,
                        value: w
                    } = e, V = !!i, F = (0, r(67499).S)(), R = (0, r(533992).v3)(), E = (0, o.useRef)(null), B = (0, r(682985).uB)(x, r(510969).A), [N, O, D] = o.useMemo(() => {
                        var e;
                        let t = (null == w ? void 0 : w.type) ? ? "simple",
                            o = null == w ? void 0 : w.value,
                            n = (0, r(722371).O9)(o) ? (null == (e = r(247438).q4_(o).match(/\n/g)) ? void 0 : e.length) ? ? 0 : 0;
                        return [t, o, n]
                    }, [null == w ? void 0 : w.type, null == w ? void 0 : w.value]), W = "formula" === N, L = D > 0 || void 0 !== T && T > 1, z = o.useRef(!1), K = (0, o.useMemo)(() => {
                        if (b) return function(e) {
                            if (z.current) {
                                z.current = !1;
                                return
                            }
                            b({
                                type: N,
                                value: e
                            })
                        }
                    }, [b, N]), H = (0, r(605263).K4)(), q = null == H ? void 0 : H.automationStore, U = (0, o.useMemo)(() => q ? {
                        automation_id: [
                            [q.id]
                        ]
                    } : void 0, [q]), {
                        setValue: Y,
                        store: $
                    } = (0, r(430937).AI)({
                        initialValue: O,
                        onChange: K,
                        properties: U,
                        shouldUseDefaultRecordCacheFallback: !0
                    }), G = (0, r(682985).K8)(() => $.getValue(), [$]);
                    o.useEffect(() => {
                        (0, r(381453).n4)(O, G) || (z.current = !0, Y(O))
                    }, [G, Y, O]);
                    let Q = o.useRef(v);
                    o.useEffect(() => {
                        (0, r(381453).n4)(v, Q.current) || (Q.current = v, (0, r(381453).n4)(O, G) || (z.current = !0), Y(O))
                    }, [v, G, Y, O]);
                    let J = (0, r(682985).K8)(() => !1 !== (0, r(338670).j)($), [$]);
                    o.useEffect(() => {
                        if (J) return null == j || j(),
                            function() {
                                null == k || k()
                            }
                    }, [J, j, k]);
                    let X = (0, o.useMemo)(() => ({ ...u,
                            reminder: !0,
                            property: !0
                        }), [u]),
                        Z = (0, o.useMemo)(() => h ? S : function() {
                            let e = r(358377).default.state;
                            "editing" === e.mode && (0, r(377796).createAndCommit)({
                                userAction: "SimpleFormulaValueTextInput.handleEnter",
                                environment: R,
                                cellTarget: {
                                    spaceWithId: I
                                },
                                canUndo: !0,
                                perform: t => {
                                    r(41403).$D({
                                        disableEmojiCommands: !0,
                                        disableMentions: !0,
                                        disableSlashCommands: !0,
                                        editorMode: "default",
                                        environment: R,
                                        multiSelection: e.multiSelection,
                                        string: "\n",
                                        transaction: t
                                    })
                                }
                            }), null == S || S()
                        }, [R, h, S, I]),
                        ee = (0, o.useCallback)(() => {
                            let e = r(358377).default.state;
                            "editing" === e.mode && (0, r(689461).K)(e.multiSelection) && e.multiSelection.start.store === $ || ((0, r(739204).z)({
                                store: $
                            }), r(374176).default.afterNextFlush(() => {
                                let e = null == E ? void 0 : E.current,
                                    t = null == e ? void 0 : e.getNode();
                                t && t.scrollTo({
                                    top: t.scrollHeight
                                })
                            }))
                        }, [E, $]),
                        et = o.useRef(!1),
                        er = o.useCallback(() => {
                            et.current || ((0, r(498368).q6)(), (0, r(259413).V)({
                                dismissed: !1,
                                trackCreateBlock: r(549960).vH
                            }), (0, r(385125).V)()), et.current = !1, ee()
                        }, [ee]),
                        eo = (0, o.useCallback)(e => null == b ? void 0 : b(e), [b]),
                        en = (0, o.useCallback)(e => {
                            async function t() {
                                et.current = !0, (0, r(498368).q6)(), null == j || j(), ee(), await r(374176).default.afterNextFlush(), r(977712).Gf({
                                    environment: R,
                                    spaceStore: null == F ? void 0 : F.spaceStore,
                                    mentionSectionOrdering: ["custom-formula", "formula"],
                                    mentionTypes: {
                                        bot: !0,
                                        createPage: !1,
                                        date: !0,
                                        formulaContextVariable: !0,
                                        group: !0,
                                        team: !0,
                                        heading: !0,
                                        inviteUserToPage: !1,
                                        inviteUserToWorkspace: !1,
                                        page: !0,
                                        collection: !1,
                                        reminder: !1,
                                        templateVariable: !1,
                                        user: !0,
                                        slackSpecialMention: !1,
                                        property: !1,
                                        propertyValue: !1
                                    }
                                })
                            }
                            e.stopPropagation(), t()
                        }, [R, j, null == F ? void 0 : F.spaceStore, ee]),
                        ea = (0, o.useCallback)(e => {
                            ee(), e.stopPropagation()
                        }, [ee]),
                        ei = (0, o.useCallback)(e => {
                            if (e.relatedTarget && (e.currentTarget.contains(e.relatedTarget) || (0, r(444306).Rp)(e.relatedTarget))) return;
                            let t = r(358377).default.getState();
                            "editing" !== t.mode || (t.multiSelection.start.store.id === $.id && (0, r(525779).clear)({
                                environment: R
                            }), (0, r(498368).q6)(), (0, r(259413).V)({
                                dismissed: !1,
                                trackCreateBlock: r(549960).vH
                            }), (0, r(385125).V)())
                        }, [R, $.id]),
                        el = o.useCallback(async () => {
                            if ("formula" === N) {
                                if (await (0, r(95746).Cp)()) {
                                    let e = (0, r(95746).D2)(null == w ? void 0 : w.value);
                                    null == b || b(e)
                                }
                            } else "simple" === N ? B.setState({
                                open: !0
                            }) : (0, r(722371).HB)(N)
                        }, [B, b, null == w ? void 0 : w.value, N]),
                        es = (0, o.useCallback)(() => B.setState({
                            open: !1
                        }), [B]),
                        eu = (0, o.useCallback)(() => ee(), [ee]),
                        ed = (0, o.useCallback)(() => {
                            J && (0, r(525779).clear)({
                                environment: R
                            })
                        }, [R, J]);
                    o.useImperativeHandle(t, () => ({
                        blur: ed,
                        focus: eu
                    }), [ed, eu]);
                    let ec = (0, r(960253).I)(() => {
                            let e = {
                                whiteSpace: "pre-wrap",
                                lineHeight: "20px",
                                padding: "2px 4px",
                                fontSize: 14
                            };
                            return {
                                containerWrap: {
                                    width: 200,
                                    ...P
                                },
                                formulaText: { ...e,
                                    cursor: "pointer"
                                },
                                scroller: {
                                    flexGrow: 1,
                                    height: void 0 !== T ? `calc(1em * ${1.5*T})` : void 0,
                                    maxHeight: "calc(1em * 6)",
                                    width: void 0 !== T && T > 1 || L ? "100%" : "auto"
                                },
                                text: { ...e
                                },
                                textWrap: {
                                    cursor: "text",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "end",
                                    opacity: V ? .4 : void 0,
                                    width: "100%"
                                },
                                wrap: {
                                    position: "relative",
                                    background: r(632079).Tj.background.secondaryTranslucent,
                                    borderRadius: 6,
                                    boxShadow: `${r(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                                    boxSizing: "border-box",
                                    cursor: "text",
                                    padding: 2,
                                    ..._ && {
                                        border: `1px solid ${r(632079).Tj.red.text.accentPrimary}`,
                                        boxShadow: "none"
                                    }
                                }
                            }
                        }, [V, L, T, _, P]),
                        ep = !g || !p,
                        em = g || W;
                    return (0, n.jsx)(r(656252).A, {
                        buttonPopupStore: B,
                        popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                        content: () => (0, n.jsx)(r(562930).A, {
                            allowedReturnTypes: a,
                            disabled: V,
                            formulaTypecheckContextValues: v ? ? [],
                            onChange: eo,
                            onClose: es,
                            parentRecordStore: C,
                            restrictUnaccessibleProperties: "cross_space_and_read_permissions",
                            spaceId: I,
                            value: w
                        }),
                        children: e => (0, n.jsx)("div", {
                            onClick: ea,
                            style: ec.containerWrap,
                            onBlur: ei,
                            children: (0, n.jsx)(r(4458).VP, {
                                className: `${r(828432).CCX} autolayout-fill-width`,
                                gap: 4,
                                style: ec.wrap,
                                alignItems: "center",
                                justifyContent: "center",
                                children: (0, n.jsxs)("div", {
                                    style: ec.textWrap,
                                    children: [(0, n.jsx)(r(136508)._, {
                                        ref: E,
                                        style: ec.scroller,
                                        type: r(644154).A.Y,
                                        children: "simple" === N ? (0, n.jsx)(r(53373).A, {
                                            disableComment: !0,
                                            disabled: V,
                                            disabledMentionTypes: X,
                                            disableEmbedMenu: !0,
                                            disableEmojiCommands: d,
                                            disableFilters: c,
                                            disableInsertedDeletedAnnotations: m,
                                            disableMentions: g,
                                            disableMobileActionBar: y,
                                            disableSelectAllBlocks: !0,
                                            disableSelectionDrag: !0,
                                            disableShiftEnter: h,
                                            disableSlashCommands: !0,
                                            disableStyleAnnotations: f,
                                            formulaValueTypes: v ? ? [],
                                            inPageFind: r(831719).Os.none,
                                            mentionSectionOrdering: ["custom-formula", "formula"],
                                            onDown: r(763230).D_,
                                            onEnter: Z,
                                            onFocus: er,
                                            onTab: r(763230).D_,
                                            onUntab: r(763230).D_,
                                            onUp: r(763230).D_,
                                            onEsc: A,
                                            pasteBehavior: "inline",
                                            placeholder: M,
                                            store: $,
                                            style: ec.text
                                        }) : (0, n.jsx)("div", { ...e,
                                            style: ec.formulaText,
                                            children: (0, n.jsx)(r(245261).$, {
                                                formulaTypecheckContextValues: v,
                                                parentRecordStore: C,
                                                spaceId: I,
                                                value: w
                                            })
                                        })
                                    }), ep ? (0, n.jsx)("div", {
                                        children: (0, n.jsxs)(r(4458).fI, {
                                            gap: 2,
                                            style: s,
                                            className: "autolayout-fill-width",
                                            children: [em ? void 0 : (0, n.jsx)(l, {
                                                disabled: V,
                                                onClick: en
                                            }), p ? void 0 : (0, n.jsx)(r(179469).F, {
                                                disabled: V,
                                                onClick: el,
                                                value: w
                                            })]
                                        })
                                    }) : void 0]
                                })
                            })
                        })
                    })
                })
        },
        654835: (e, t, r) => {
            r.d(t, {
                b: () => a,
                l: () => n
            }), r(944114), r(898992), r(354520);
            var o = () => r(722371);

            function n(e) {
                let {
                    channels: t,
                    filter: r
                } = e, n = [], a = [], i = [], l = [];
                for (let e of [...t].sort((e, t) => e.name.localeCompare(t.name)))(!r || r(e)) && ("public" === e.type ? n.push(e) : "private" === e.type ? a.push(e) : "me" === e.type ? i.push(e) : "im" === e.type ? l.push(e) : (0, o().HB)(e.type));
                return {
                    publicChannels: n,
                    privateChannels: a,
                    personalChannels: i,
                    imChannels: l
                }
            }

            function a(e) {
                let {
                    channelName: t,
                    query: r
                } = e, o = r.trim().toLocaleLowerCase();
                return 0 === o.length || t.toLocaleLowerCase().indexOf(o) >= 0
            }
        },
        659698: (e, t, r) => {
            r.d(t, {
                A5: () => i,
                Ol: () => l,
                qM: () => a
            }), r(898992), r(354520), r(672577);
            var o = r(296540),
                n = r(474848);

            function a(e) {
                let {
                    actionId: t,
                    closeMenu: a,
                    propertyId: i
                } = e, {
                    maybePersistedTransactionActions: s
                } = (0, r(305042).b)(), {
                    automationStore: u,
                    contextType: d,
                    collectionSettingsStore: c,
                    collectionStore: p,
                    collectionViewStore: m
                } = (0, r(605263).q8)(), g = (0, r(533992).v3)(), y = (0, r(109939).tz)(), {
                    value: h
                } = (0, r(815048).fJ)(r(864850).T.formulas), {
                    value: f
                } = (0, r(815048).fJ)(r(879267).QV.automationTypecheck), x = (0, r(470569).o)(u), v = (0, r(716206).j)(), b = (0, r(682985).K8)(() => {
                    var e;
                    let t = null == m ? void 0 : m.getType();
                    if (t) return "timeline" === t ? (0, r(874297).F)({
                        timelineViewTab: "timeline",
                        timelineShowTable: !!(p && (null == m || null == (e = m.getNormalizedFormat(p.getSchema())) ? void 0 : e.timeline_show_table))
                    }) : (0, r(565546).u9)(t)
                }, [p, m]), S = (0, r(682985).K8)(() => {
                    let e = u.getActionStores().find(e => e.id === t);
                    if (null != e && e.isDefined()) return e
                }, [u, t]), j = (0, o.useCallback)(() => {
                    S && h && f && (s.createAndCommit({
                        perform: e => {
                            r(871865).removeAutomationAction({
                                actionStore: S,
                                automationStore: u,
                                automationTypecheckModule: f,
                                subscriptionInfo: x,
                                contextType: d,
                                environment: g,
                                formulasModule: h,
                                intl: y,
                                transaction: e,
                                pageStore: v
                            })
                        },
                        userAction: "UnsupportedPropertyMenu.removeAction"
                    }), null == a || a())
                }, [S, u, x, a, d, g, y, s, h, f, v]), k = (0, o.useMemo)(() => {
                    if (c && b && i) return async function() {
                        await (0, r(14197).US)({
                            hasPendingChanges: !0
                        }) && (0, r(76790).a)({
                            collectionSettingsStore: c,
                            item: {
                                type: "property",
                                formatKey: b,
                                property: i
                            }
                        }), null == a || a()
                    }
                }, [a, c, b, i]);
                return (0, n.jsx)(l, {
                    onDelete: j,
                    onEdit: k,
                    stepType: "action"
                })
            }

            function i(e) {
                let {
                    closeMenu: t,
                    propertyId: a
                } = e, {
                    collectionSettingsStore: i,
                    collectionStore: s,
                    collectionViewStore: u
                } = (0, r(605263).q8)(), {
                    removePropertyTrigger: d
                } = (0, r(287134).p)(), c = (0, r(682985).K8)(() => {
                    var e;
                    let t = null == u ? void 0 : u.getType();
                    if (t) return "timeline" === t ? (0, r(874297).F)({
                        timelineViewTab: "timeline",
                        timelineShowTable: !!(s && (null == u || null == (e = u.getNormalizedFormat(s.getSchema())) ? void 0 : e.timeline_show_table))
                    }) : (0, r(565546).u9)(t)
                }, [s, u]), p = (0, o.useCallback)(() => {
                    d(a), null == t || t()
                }, [t, a, d]), m = (0, o.useMemo)(() => {
                    if (i && c && a) return async function() {
                        await (0, r(14197).US)({
                            hasPendingChanges: !0
                        }) && (0, r(76790).a)({
                            collectionSettingsStore: i,
                            item: {
                                type: "property",
                                formatKey: c,
                                property: a
                            }
                        }), null == t || t()
                    }
                }, [t, i, c, a]);
                return (0, n.jsx)(l, {
                    onDelete: p,
                    onEdit: m,
                    stepType: "trigger"
                })
            }

            function l(e) {
                let {
                    onDelete: t,
                    onEdit: a,
                    onRestore: i,
                    stepType: l
                } = e, s = (0, r(457067).e)({
                    width: 266
                }), u = (0, o.useMemo)(() => (0, r(722371).O9)(a) ? {
                    action: a,
                    key: "edit-property-menu-item",
                    render: e => (0, n.jsx)(r(95582).A, { ...e,
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(636).pencilLineIcon
                        }),
                        title: (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "Edit property",
                            id: "unsupportedPropertyMenu.editMenuItem.title"
                        })
                    })
                } : void 0, [a]), d = (0, o.useMemo)(() => (0, r(722371).O9)(i) ? {
                    action: i,
                    key: "restore-property-menu-item",
                    render: e => (0, n.jsx)(r(95582).A, { ...e,
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(325336).arrowUTurnUpLeftIcon
                        }),
                        title: (0, n.jsx)(r(109939).sA, {
                            defaultMessage: "Restore property",
                            id: "unsupportedPropertyMenu.restoreMenuItem.title"
                        })
                    })
                } : void 0, [i]), c = (0, o.useMemo)(() => (0, r(722371).O9)(t) ? {
                    action: t,
                    key: "delete-property-menu-item",
                    render: e => (0, n.jsx)(r(95582).A, { ...e,
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(968411).trashIcon
                        }),
                        title: "action" === l ? (0, n.jsx)(r(109939).sA, {
                            id: "automationUnsupportedPropertyMenu.deleteAction.title",
                            defaultMessage: "Delete action"
                        }) : (0, n.jsx)(r(109939).sA, {
                            id: "automationUnsupportedPropertyMenu.deleteTrigger.title",
                            defaultMessage: "Delete trigger"
                        })
                    })
                } : void 0, [t, l]);
                return (0, n.jsx)(r(747369).A, { ...s,
                    children: (0, n.jsx)(r(558045).A, {
                        initialFocus: 0,
                        sections: [{
                            key: "actions-section",
                            items: [u, d, c].filter(r(722371).O9)
                        }],
                        type: r(558045).O.Vertical
                    })
                })
            }
        },
        703676: (e, t, r) => {
            r.d(t, {
                P: () => i
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                tooltipTitle: {
                    margin: 0
                },
                tooltipCaption: {
                    color: r(632079).Tj.text.inverseSecondary,
                    margin: 0
                }
            };

            function i(e) {
                let {
                    caption: t,
                    disable: i,
                    renderOrigin_DEPRECATED: l,
                    title: s,
                    tooltipAlignment: u,
                    tooltipPlacement: d,
                    disableTooltip: c
                } = e, p = (0, o.useCallback)(() => (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("p", {
                        style: a.tooltipTitle,
                        children: s
                    }), (0, n.jsx)("p", {
                        style: a.tooltipCaption,
                        children: t
                    })]
                }), [t, s]);
                return (0, n.jsx)(r(51831).m, {
                    alignment: u || "center",
                    delayThreshold: 800,
                    disableTooltip: i || c,
                    placement: d || "bottom",
                    content: p,
                    textWrap: !0,
                    children: l
                })
            }
        },
        705743: (e, t, r) => {
            r.d(t, {
                D: () => o
            });
            let o = (0, r(109939).YK)({
                back: {
                    defaultMessage: "Back",
                    id: "formulas.SimpleFormulaValuePicker.back"
                },
                valuesFromThisAutomation: {
                    defaultMessage: "From this automation",
                    id: "formulas.SimpleFormulaValuePicker.valuesFromThisAutomation"
                },
                pickADate: {
                    defaultMessage: "Pick a date",
                    id: "formulas.SimpleFormulaValuePicker.pickADate"
                },
                clear: {
                    defaultMessage: "Clear",
                    id: "formulas.SimpleFormulaValuePicker.clear"
                },
                unchecked: {
                    defaultMessage: "Unchecked",
                    id: "formulas.SimpleFormulaValuePicker.checkbox.unchecked"
                },
                checked: {
                    defaultMessage: "Checked",
                    id: "formulas.SimpleFormulaValuePicker.checkbox.checked"
                },
                checkboxOptions: {
                    defaultMessage: "Checkbox options",
                    id: "formulas.SimpleFormulaValuePicker.checkbox.sectionHeader"
                },
                searchPlaceHolder: {
                    defaultMessage: "Select one or more options…",
                    id: "formulas.SimpleFormulaValuePicker.select.searchPlaceholder"
                },
                selectOptionsSectionHeader: {
                    defaultMessage: "Select an option",
                    id: "formulas.SimpleFormulaValuePicker.select.sectionHeader"
                },
                noResults: {
                    defaultMessage: "No results",
                    id: "formulas.simpleValuePicker.noResults"
                },
                pageSearchPlaceholder: {
                    defaultMessage: "Search for one or more pages…",
                    id: "formulas.SimpleFormulaValuePicker.pages.searchPlaceholder"
                },
                pages: {
                    defaultMessage: "Pages",
                    id: "formulas.SimpleFormulaValuePicker.pages.sectionHeader"
                },
                somethingWentWrong: {
                    defaultMessage: "Something went wrong.",
                    id: "formulas.simpleValuePicker.errorMessage"
                },
                personSelect: {
                    defaultMessage: "Select…",
                    id: "formulas.SimpleFormulaValuePicker.chooseAValue"
                },
                personSearchPlaceholder: {
                    defaultMessage: "Search for one or more people…",
                    id: "formulas.SimpleFormulaValuePicker.people.searchPlaceholder"
                },
                propertyValuePlaceholder: {
                    defaultMessage: "Enter a value",
                    id: "formulas.SimpleFormulaValuePicker.general.propertyValuePlaceholder"
                },
                customFormula: {
                    defaultMessage: "Custom formula",
                    id: "formulas.SimpleFormulaValuePicker.customFormula"
                },
                peopleInWorkspace: {
                    defaultMessage: "People",
                    id: "formulas.SimpleFormulaValuePicker.people.sectionHeader"
                },
                genericMenuHeader: {
                    defaultMessage: "Set property to",
                    id: "formulas.SimpleFormulaValuePicker.genericMenuHeader"
                }
            })
        },
        708261: (e, t, r) => {
            r.d(t, {
                V: () => o
            }), r(898992), r(354520), r(581454);
            async function o(e) {
                var t;
                let {
                    triggerType: o,
                    environment: n,
                    automationStore: a,
                    spaceId: i
                } = e;
                if (!(null != a && a.isDefined())) return !0;
                let l = (0, r(584796).Z)(o),
                    s = r(728372).default.state,
                    u = await (0, r(655293).S)(n, {
                        name: "premium_automations",
                        spaceId: i,
                        userId: null == (t = s.currentUserStore) ? void 0 : t.id
                    });
                return l.isAvailableForContext({
                    automation: a.getModel(),
                    automationActions: a.getActionStores().map(e => e.getModel()).filter(r(722371).O9),
                    hasPremiumAutomations: u
                })
            }
        },
        716206: (e, t, r) => {
            r.d(t, {
                j: () => o
            });

            function o() {
                var e;
                let t = null == (e = (0, r(67499).S)()) ? void 0 : e.pageStore;
                return (0, r(682985).K8)(() => t && (t.isPageBlock() || t.isCollectionViewPageWithContent()) ? t : void 0, [t])
            }
        },
        721623: (e, t, r) => {
            r.d(t, {
                P: () => a
            }), r(296540);
            var o = r(474848);
            let n = {
                overflow: "visible"
            };

            function a({
                style: e = {},
                propertySchema: t
            }) {
                let i = (0, r(960253).e)();
                return (0, o.jsx)(r(221535).zB, {
                    size: r(104509).Ev.sm,
                    theme: r(632079).Tj,
                    themeMode: i,
                    icon: t.icon,
                    style: { ...e,
                        ...n
                    },
                    type: t.type
                })
            }
        },
        730859: (e, t, r) => {
            r.d(t, {
                $5: () => s,
                JI: () => l,
                Ww: () => n,
                l5: () => u
            }), r(898992), r(354520), r(581454), r(296540);
            var o = r(474848);

            function n(e) {
                let t = (0, r(109939).tz)(),
                    {
                        filter: n,
                        propertySchema: a,
                        onClick: d
                    } = e,
                    c = { ...r(699422).RC,
                        fontWeight: r(699422).Wy.medium
                    },
                    p = n.value,
                    m = a.name,
                    g = s({
                        intl: t,
                        isText: !0,
                        limit: 5,
                        optionValues: (Array.isArray(p) ? p : [p]).map(e => e.value).filter(r(722371).O9),
                        propertySchema: a
                    }),
                    y = t.formatList(g, {
                        style: "long",
                        type: "disjunction"
                    }),
                    h = u({
                        filter: n,
                        propertySchema: a
                    });
                if (!h) return null;
                let f = l(h)(t, {
                    propertyName: (0, o.jsx)("span", {
                        style: c,
                        children: m
                    }),
                    propertyValues: (0, r(59871).d)(y)
                });
                return (0, o.jsx)(r(238082).z, {
                    tooltip: f,
                    onClick: d,
                    children: (0, o.jsx)(i, { ...h
                    })
                })
            }
            let a = {
                content: {
                    alignItems: "baseline",
                    display: "flex",
                    flexWrap: "wrap",
                    whiteSpace: "pre",
                    lineHeight: 1.6
                },
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                }
            };

            function i(e) {
                let {
                    filter: t,
                    propertySchema: n
                } = e, i = (0, r(109939).tz)(), d = t.value, c = n.name, p = s({
                    intl: i,
                    limit: 5,
                    optionValues: (Array.isArray(d) ? d : [d]).map(e => e.value).filter(r(722371).O9),
                    propertySchema: n
                }), m = i.formatList(p, {
                    style: "long",
                    type: "disjunction"
                }), g = u({
                    filter: t,
                    propertySchema: n
                });
                if (!g) return null;
                let y = l(g)(i, {
                    propertyName: (0, o.jsx)("span", {
                        style: a.propertyName,
                        children: c
                    }),
                    propertyValues: (0, r(59871).d)(m)
                });
                return (0, o.jsx)("div", {
                    style: a.content,
                    children: y
                })
            }

            function l({
                filter: e,
                propertySchema: t
            }) {
                if ("select" === t.type)
                    if ("enum_is" === e.operator) return r(760459).Ee;
                    else return r(760459).n1;
                return "enum_contains" === e.operator ? r(760459).Q$ : r(760459).Re
            }

            function s({
                intl: e,
                isText: t,
                limit: n,
                optionValues: a,
                propertySchema: i,
                tokenFormat: l = r(696654).NY.Medium
            }) {
                let u, d = i.options ? ? [],
                    c = a.map(n => {
                        let a = (0, r(561872).jy)(d, n);
                        return a ? t ? a.value : (0, o.jsx)(r(593100).O, {
                            value: a.value,
                            color: a.color,
                            format: l,
                            isSingle: !0,
                            showRemoveButton: !1
                        }, a.id) : t ? (0, r(760459).iy)(e) : (0, o.jsx)(r(300813).A, {
                            tokenFormat: l
                        }, `missing_option_value_${n}`)
                    });
                if (void 0 !== n && c.length > n) {
                    let e = c.length - n,
                        a = t ? `+${e}` : (0, o.jsx)(r(628462).A, {
                            format: r(696654).NY.Medium,
                            isRound: !0,
                            isSingle: !0,
                            showRemoveButton: !1,
                            value: `+${e}`
                        }, "More tokens");
                    u = [...c.slice(0, n), a]
                } else u = c;
                return u
            }

            function u(e) {
                let {
                    filter: t,
                    propertySchema: r
                } = e;
                if ("select" === r.type) {
                    if ("enum_is" === t.operator || "enum_is_not" === t.operator) return {
                        filter: t,
                        propertySchema: r
                    }
                } else if ("multi_select" === r.type && ("enum_contains" === t.operator || "enum_does_not_contain" === t.operator)) return {
                    filter: t,
                    propertySchema: r
                };
                return !1
            }
        },
        760459: (e, t, r) => {
            r.d(t, {
                $B: () => u,
                CH: () => j,
                CV: () => o,
                Ee: () => P,
                Fp: () => D,
                HG: () => k,
                JQ: () => y,
                LK: () => b,
                NW: () => a,
                Od: () => C,
                Oo: () => i,
                Pb: () => d,
                Pg: () => A,
                Q$: () => V,
                Re: () => F,
                Rn: () => _,
                SV: () => f,
                T2: () => M,
                TF: () => g,
                Xr: () => n,
                Yx: () => R,
                _M: () => x,
                _d: () => N,
                _f: () => h,
                a9: () => B,
                cC: () => S,
                dd: () => O,
                f4: () => p,
                f_: () => c,
                iy: () => E,
                kN: () => W,
                n1: () => w,
                o7: () => s,
                qx: () => v,
                rh: () => I,
                uW: () => m,
                vC: () => l,
                yR: () => T
            }), r(898992), r(354520), r(581454);
            let o = (0, r(109939).YK)({
                actionCheckboxPropertyChecked: {
                    defaultMessage: "checked",
                    id: "automations.action.checkboxProperty.checked"
                },
                actionCheckboxPropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.checkboxProperty.single"
                },
                actionCheckboxPropertyUnchecked: {
                    defaultMessage: "unchecked",
                    id: "automations.action.checkboxProperty.unchecked"
                },
                actionDatePropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.dateProperty.single"
                },
                actionNumberPropertySet: {
                    defaultMessage: "{propertyName} {operator} {propertyValues}",
                    id: "automations.action.numberPropertySet.title"
                },
                actionTextPropertySet: {
                    defaultMessage: "{propertyName} {operator} {propertyValues}",
                    id: "automations.action.textPropertySet.title"
                },
                actionPersonPropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.personProperty.single"
                },
                actionPropertyReplaceWith: {
                    defaultMessage: "Replace {propertyName} with {propertyValue}",
                    id: "automations.action.property.replaceWith"
                },
                actionPropertyReplaceWithOthers: {
                    defaultMessage: "Replace {propertyName} with {propertyValue} and {numOthers} {numOthers, plural, one {other} other {others}}",
                    id: "automations.action.property.replaceWithOthers"
                },
                actionPropertyAdd: {
                    defaultMessage: "Add {propertyValue} to {propertyName}",
                    id: "automations.action.property.add"
                },
                actionPropertyAddWithOthers: {
                    defaultMessage: "Add {propertyValue} and {numOthers} {numOthers, plural, one {other} other {others}} to {propertyName}",
                    id: "automations.action.property.addWithOthers"
                },
                actionPropertyRemove: {
                    defaultMessage: "Remove {propertyValue} from {propertyName}",
                    id: "automations.action.property.remove"
                },
                actionPropertyRemoveWithOthers: {
                    defaultMessage: "Remove {propertyValue} and {numOthers} {numOthers, plural, one {other} other {others}} from {propertyName}",
                    id: "automations.action.property.removeWithOthers"
                },
                actionPropertyClear: {
                    defaultMessage: "Clear {propertyName}",
                    id: "automations.action.property.clear"
                },
                actionPropertyToggle: {
                    defaultMessage: "Toggle {propertyValue} in {propertyName}",
                    id: "automations.action.property.toggle"
                },
                actionPropertyToggleWithOthers: {
                    defaultMessage: "Toggle {propertyValue} and {numOthers} {numOthers, plural, one {other} other {others}} in {propertyName}",
                    id: "automations.action.property.toggleWithOthers"
                },
                actionRelationPropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.relationProperty.single"
                },
                actionSelectPropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.selectProperty.single"
                },
                actionStatusPropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.statusProperty.single"
                },
                actionTextPropertySetSingle: {
                    defaultMessage: "Set {propertyName} to {propertyValue}",
                    id: "automations.action.textProperty.single"
                },
                actionDeletedProperty: {
                    defaultMessage: "Edit a deleted property",
                    id: "automations.action.deletedProperty"
                },
                triggerAnyPageAdded: {
                    defaultMessage: "Page added",
                    id: "automations.trigger.pageAdded.title"
                },
                triggerAnyPagePropertyEdit: {
                    defaultMessage: "Any property edited",
                    id: "automations.trigger.anyPagePropertyEdited.title"
                },
                triggerAnyPropertyEdit: {
                    defaultMessage: "{propertyName} is edited",
                    id: "automations.trigger.propertyChangesToAny.title"
                },
                triggerAnyPropertyClear: {
                    defaultMessage: "{propertyName} is cleared",
                    id: "automations.trigger.propertyCleared.title"
                },
                triggerButtonClicked: {
                    defaultMessage: "<b>Button</b> is clicked",
                    id: "automations.trigger.button.clicked"
                },
                triggerCheckboxPropertyChecked: {
                    defaultMessage: "checked",
                    id: "automations.trigger.checkboxProperty.checked"
                },
                triggerCheckboxPropertySet: {
                    defaultMessage: "{propertyName} set to {propertyValues}",
                    id: "automations.trigger.checkboxPropertySet.title"
                },
                triggerCheckboxPropertyUnchecked: {
                    defaultMessage: "unchecked",
                    id: "automations.trigger.checkboxProperty.unchecked"
                },
                triggerNumberPropertySet: {
                    defaultMessage: "{propertyName} {operator} {propertyValues}",
                    id: "automations.trigger.numberPropertySet.title"
                },
                triggerTextPropertySet: {
                    defaultMessage: "{propertyName} {operator} {propertyValues}",
                    id: "automations.trigger.textPropertySet.title"
                },
                triggerSelectPropertyIs: {
                    id: "automations.trigger.selectPropertyIs.title",
                    defaultMessage: "{propertyName} is set to {propertyValues}"
                },
                triggerSelectPropertyIsNot: {
                    id: "automations.trigger.selectPropertyIsNot.title",
                    defaultMessage: "{propertyName} is not set to {propertyValues}"
                },
                triggerMultiSelectPropertyContains: {
                    id: "automations.trigger.multiSelectPropertyContains.title",
                    defaultMessage: "{propertyName} contains {propertyValues}"
                },
                triggerMultiSelectPropertyDoesNotContain: {
                    id: "automations.trigger.multiSelectPropertyDoesNotContain.title",
                    defaultMessage: "{propertyName} does not contain {propertyValues}"
                },
                triggerStatusPropertySet: {
                    defaultMessage: "{propertyName} set to {propertyValues}",
                    id: "automations.trigger.statusPropertySet.singleProperty"
                },
                triggerPersonPropertyContainsSingle: {
                    defaultMessage: "{propertyName} contains {propertyValue}",
                    id: "automations.trigger.personPropertySet.singleProperty"
                },
                triggerPersonPropertyContainsMultiple: {
                    defaultMessage: "{propertyName} contains any of {propertyValues}",
                    id: "automations.trigger.personPropertySet.multipleProperties"
                },
                triggerPersonPropertyDoesNotContainSingle: {
                    defaultMessage: "{propertyName} does not contain {propertyValue}",
                    id: "automations.trigger.personPropertyDoesNotContain.singleProperty"
                },
                triggerPersonPropertyDoesNotContainMultiple: {
                    defaultMessage: "{propertyName} does not contain any of {propertyValues}",
                    id: "automations.trigger.personPropertyDoesNotContain.multipleProperties"
                },
                triggerRelationPropertyDoesNotContainSingle: {
                    defaultMessage: "{propertyName} does not contain {propertyValue}",
                    id: "automations.trigger.relationProperty.singleDoesNotContain"
                },
                triggerRelationPropertyDoesNotContainMultiple: {
                    defaultMessage: "{propertyName} does not contain any of {propertyValue}",
                    id: "automations.trigger.relationProperty.multipleDoesNotContain"
                },
                triggerRelationPropertyContainsMultiple: {
                    defaultMessage: "{propertyName} contains any of {propertyValue}",
                    id: "automations.trigger.relationProperty.multiple"
                },
                triggerRelationPropertyContainsSingle: {
                    defaultMessage: "{propertyName} contains {propertyValue}",
                    id: "automations.trigger.relationProperty.single"
                },
                triggerDeletedPropertyEdit: {
                    defaultMessage: "Deleted property is edited",
                    id: "automations.trigger.deletedPropertyEdited"
                },
                deletedPropertyOption: {
                    defaultMessage: "Deleted option",
                    id: "automations.values.deletedPropertyOption"
                },
                unknownValue: {
                    defaultMessage: "Unknown value",
                    id: "automations.values.unknownValue"
                },
                unknownPropertyTitle: {
                    defaultMessage: "a property",
                    id: "database.viewSettings.automationTab.unknownPropertyTitle"
                },
                triggerInvalidConfigurationTitle: {
                    defaultMessage: "Invalid {propertyName} property configuration",
                    id: "automations.trigger.invalidConfiguration"
                },
                inlineCustomFormulaDefaultName: {
                    defaultMessage: "My value",
                    id: "automations.formulas.inlineCustomFormulaDefaultName"
                }
            });

            function n(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionCheckboxPropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function a(e) {
                let {
                    propertyName: t
                } = e;
                return { ...o.actionPropertyClear,
                    values: {
                        propertyName: t
                    }
                }
            }

            function i(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionDatePropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function l(e) {
                let {
                    propertyName: t,
                    propertyValues: r,
                    operator: n
                } = e;
                return { ...o.actionNumberPropertySet,
                    values: {
                        propertyName: t,
                        propertyValues: r,
                        operator: n
                    }
                }
            }

            function s(e) {
                let {
                    propertyName: t
                } = e;
                return { ...o.triggerInvalidConfigurationTitle,
                    values: {
                        propertyName: t
                    }
                }
            }

            function u(e) {
                let {
                    propertyName: t,
                    propertyValues: r,
                    operator: n
                } = e;
                return { ...o.actionTextPropertySet,
                    values: {
                        propertyName: t,
                        propertyValues: r,
                        operator: n
                    }
                }
            }

            function d(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionPersonPropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function c({
                elements: e,
                intl: t
            }) {
                let o = e.length > 3 ? e.length - 2 : 0,
                    n = t.formatList(e.slice(0, o > 0 ? 2 : 3), {
                        style: "long",
                        type: o > 0 ? "unit" : "conjunction"
                    });
                return {
                    numOthers: o,
                    propertyValue: (0, r(59871).d)(n, {
                        display: "flex"
                    })
                }
            }

            function p(e) {
                let {
                    numOthers: t = 0,
                    operator: r,
                    propertyName: n,
                    propertyValue: a
                } = e;
                return { ...!a || Array.isArray(a) && 0 === a.filter(e => !!e).length ? o.actionPropertyClear : "append" === r ? t > 0 ? o.actionPropertyAddWithOthers : o.actionPropertyAdd : "remove" === r ? t > 0 ? o.actionPropertyRemoveWithOthers : o.actionPropertyRemove : "toggle" === r ? t > 0 ? o.actionPropertyToggleWithOthers : o.actionPropertyToggle : t > 0 ? o.actionPropertyReplaceWithOthers : o.actionPropertyReplaceWith,
                    values: {
                        propertyName: n,
                        propertyValue: a,
                        numOthers: t
                    }
                }
            }

            function m(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionRelationPropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function g(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.triggerRelationPropertyContainsSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function y(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.triggerRelationPropertyContainsMultiple,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function h(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.triggerRelationPropertyDoesNotContainSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function f(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.triggerRelationPropertyDoesNotContainMultiple,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function x(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionSelectPropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function v(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionStatusPropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function b(e) {
                let {
                    propertyName: t,
                    propertyValue: r
                } = e;
                return { ...o.actionTextPropertySetSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function S(e) {
                return e.formatMessage(o.actionDeletedProperty)
            }

            function j(e) {
                return e.formatMessage(o.triggerAnyPageAdded)
            }

            function k(e) {
                return e.formatMessage(o.triggerAnyPagePropertyEdit)
            }

            function A(e) {
                return e.formatMessage(o.triggerDeletedPropertyEdit)
            }

            function C(e, t) {
                let {
                    propertyName: r
                } = t;
                return e.formatMessage(o.triggerAnyPropertyEdit, {
                    propertyName: r
                })
            }

            function M(e, t) {
                return e.formatMessage(o.triggerCheckboxPropertySet, t)
            }

            function T(e, t) {
                let {
                    propertyName: r
                } = t;
                return e.formatMessage(o.triggerAnyPropertyClear, {
                    propertyName: r
                })
            }

            function _(e) {
                let {
                    propertyName: t,
                    propertyValues: r,
                    operator: n
                } = e;
                return { ...o.triggerNumberPropertySet,
                    values: {
                        propertyName: t,
                        propertyValues: r,
                        operator: n
                    }
                }
            }

            function I(e) {
                let {
                    propertyName: t,
                    propertyValues: r,
                    operator: n
                } = e;
                return { ...o.triggerTextPropertySet,
                    values: {
                        propertyName: t,
                        propertyValues: r,
                        operator: n
                    }
                }
            }

            function P(e, t) {
                return e.formatMessage(o.triggerSelectPropertyIs, t)
            }

            function w(e, t) {
                return e.formatMessage(o.triggerSelectPropertyIsNot, t)
            }

            function V(e, t) {
                return e.formatMessage(o.triggerMultiSelectPropertyContains, t)
            }

            function F(e, t) {
                return e.formatMessage(o.triggerMultiSelectPropertyDoesNotContain, t)
            }

            function R(e, t) {
                return e.formatMessage(o.triggerStatusPropertySet, t)
            }

            function E(e) {
                return e.formatMessage(o.deletedPropertyOption)
            }

            function B(e) {
                let {
                    propertyName: t,
                    propertyValues: r
                } = e;
                return { ...o.triggerPersonPropertyContainsSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function N(e) {
                let {
                    propertyName: t,
                    propertyValues: r
                } = e;
                return { ...o.triggerPersonPropertyContainsMultiple,
                    values: {
                        propertyName: t,
                        propertyValues: r
                    }
                }
            }

            function O(e) {
                let {
                    propertyName: t,
                    propertyValues: r
                } = e;
                return { ...o.triggerPersonPropertyDoesNotContainSingle,
                    values: {
                        propertyName: t,
                        propertyValue: r
                    }
                }
            }

            function D(e) {
                let {
                    propertyName: t,
                    propertyValues: r
                } = e;
                return { ...o.triggerPersonPropertyDoesNotContainMultiple,
                    values: {
                        propertyName: t,
                        propertyValues: r
                    }
                }
            }

            function W(e) {
                let {
                    limit: t,
                    optionValues: o,
                    propertySchema: n
                } = e, a = n.options ? ? [], i = a.length > 0, l = o.map(e => {
                    let t = i ? (0, r(561872).jy)(a, e) : void 0;
                    return t ? {
                        type: "option",
                        value: t
                    } : {
                        type: "deleted",
                        value: e
                    }
                }), s = l;
                if (void 0 !== t && l.length > t) {
                    let e = l.length - t;
                    s = [...l.slice(0, t), {
                        type: "truncation",
                        value: `+${e}`
                    }]
                }
                return s
            }
        },
        787476: (e, t, r) => {
            r.d(t, {
                aX: () => D,
                OT: () => W,
                qt: () => H,
                h3: () => z,
                ot: () => N
            });
            var o = r.n(r(32485)),
                n = r(296540);

            function a(e) {
                let {
                    automationStore: t
                } = (0, r(605263).q8)();
                return (0, r(682985).K8)(() => {
                    var r;
                    if (!e) return;
                    let o = null == (r = t.getModel()) ? void 0 : r.getLastFailedReason();
                    if (o && o.actionId === e) return o
                }, [t, e])
            }
            var i = r(474848);

            function l({
                actionId: e
            }) {
                let {
                    typecheckResult: t
                } = (0, r(605263).q8)(), {
                    suppressActionErrors: o
                } = (0, r(305042).b)(), n = (0, r(682985).K8)(() => !(!r(300441).Q.isSuccess(t) || o.includes(e)) && (t.value.actionValidationFailures[e] || []).length > 0, [e, o, t]);
                return {
                    hasTypecheckErrors: n,
                    typecheckErrorMessage: n ? (0, i.jsx)(r(109939).sA, { ...r(933743).automationErrorMessages.generalErrorMessage
                    }) : null
                }
            }

            function s({
                disabled: e
            }) {
                let {
                    automationStore: t
                } = (0, r(605263).q8)(), {
                    hideDragHandle: o
                } = (0, r(305042).b)(), n = (0, r(682985).K8)(() => t.getActionStores().map(e => e.isDefined() && e.hasConcern("display") ? e : null).filter(r(722371).Pe), [t]);
                return o || 1 === n.length || e
            }

            function u(e) {
                let {
                    actionId: t
                } = e, {
                    warnings: o,
                    errors: n
                } = function(e) {
                    let {
                        typecheckResult: t
                    } = (0, r(605263).q8)();
                    return (0, r(682985).K8)(() => !e || !t || r(300441).Q.isFail(t) ? {
                        errors: void 0,
                        warnings: void 0
                    } : {
                        errors: t.value.actionValidationFailures[e],
                        warnings: t.value.actionValidationWarnings[e]
                    }, [t, e])
                }(t), a = null == n ? void 0 : n.at(0);
                if (a) {
                    let e = (0, r(933743).getErrorMessagesForActionValidationFailure)({
                        failure: a
                    });
                    return (0, i.jsx)(r(111010).D, {
                        colorPalette: "red",
                        colorVariant: "secondary",
                        styleKey: "captionRegular",
                        children: (0, i.jsx)(r(109939).sA, { ...e.forAction
                        })
                    })
                }
                let l = null == o ? void 0 : o.at(0);
                if (l) {
                    let e = (0, r(933743).getErrorMessagesForActionValidationFailure)({
                        failure: l
                    });
                    return (0, i.jsx)(r(111010).D, {
                        colorPalette: "yellow",
                        colorVariant: "secondary",
                        styleKey: "captionRegular",
                        children: (0, i.jsx)(r(109939).sA, { ...e.forAction
                        })
                    })
                }
                return null
            }
            r(898992), r(354520), r(581454), r(18107), r(967357);
            let d = (0, r(104509).xh)("xMarkCircle", {
                    default: {
                        loader: () => r.e(59028).then(r.bind(r, 927364))
                    },
                    small: {
                        loader: () => r.e(59028).then(r.bind(r, 178146))
                    },
                    fill: {
                        loader: () => r.e(59028).then(r.bind(r, 367198))
                    },
                    fillSmall: {
                        loader: () => r.e(59028).then(r.bind(r, 778765))
                    }
                }, ["close", "cross", "delete", "remove", "cancel"]),
                c = (0, r(109939).YK)({
                    heading: {
                        id: "automations.errorBanner.heading",
                        defaultMessage: "An error occurred while running this action"
                    }
                }),
                p = {
                    container: {
                        backgroundColor: r(632079).Tj.red.background.secondary,
                        padding: "8px 12px"
                    },
                    content: {
                        position: "relative",
                        color: r(632079).Tj.red.text.secondary
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function m(e) {
                let {
                    children: t
                } = e, o = (0, r(109939).tz)();
                return (0, i.jsx)("div", {
                    style: p.container,
                    children: (0, i.jsxs)(r(4458).fI, {
                        gap: 8,
                        className: "autolayout-fill-width",
                        style: p.positionRelative,
                        children: [(0, i.jsx)(r(4458).fI, {
                            height: 20,
                            width: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, i.jsx)(r(708966).Q, {
                                iconGroup: d,
                                variantName: "small",
                                colorPalette: "red",
                                colorVariant: "secondary"
                            })
                        }), (0, i.jsxs)(r(4458).VP, {
                            gap: 4,
                            style: p.content,
                            flex: "1 1 0",
                            children: [(0, i.jsx)(r(111010).D, {
                                styleKey: "bodyBold",
                                children: o.formatMessage(c.heading)
                            }), t ? (0, i.jsx)(r(111010).D, {
                                styleKey: "bodyMedium",
                                children: t
                            }) : void 0]
                        })]
                    })
                })
            }
            let g = (0, r(109939).YK)({
                errorMessage: {
                    id: "automations.externalHttpRequestFailedError.message",
                    defaultMessage: "Received {errorCode} error from {host}"
                }
            });

            function y(e) {
                let {
                    failureReason: t
                } = e, o = (0, r(109939).tz)();
                return (0, i.jsx)(m, {
                    children: o.formatMessage(g.errorMessage, {
                        host: t.host,
                        errorCode: t.errorCode
                    })
                })
            }
            let h = (0, r(109939).YK)({
                errorMessageWithDetails: {
                    id: "automations.formulaExecutionError.messageWithDetails",
                    defaultMessage: "Could not evaluate formula property {propertyName} for the page {pageMention} in {databaseMention}"
                },
                errorMessageFallback: {
                    id: "automations.formulaExecutionError.messageFallback",
                    defaultMessage: "Could not evaluate a formula in this action"
                },
                unknown: {
                    id: "automations.formulaExecutionError.unknown",
                    defaultMessage: "Unknown"
                },
                unknownProperty: {
                    id: "automations.formulaExecutionError.unknownProperty",
                    defaultMessage: "Unknown property"
                }
            });

            function f(e) {
                let {
                    failureReason: t
                } = e, o = t.errorSource;
                return (0, i.jsx)(m, {
                    children: o ? (0, i.jsx)(j, {
                        errorSource: o
                    }) : (0, i.jsx)(r(109939).sA, { ...h.errorMessageFallback
                    })
                })
            }

            function x(e) {
                let {
                    annotation: t,
                    disabled: o = !1
                } = e, n = (0, r(109939).tz)(), a = (0, r(533992).v3)(), l = (0, r(960253).e)(), s = (0, r(972740).L)(), u = (0, r(815048).fJ)(r(406921).V), d = (0, r(682985).K8)(() => {
                    if (!t || !s) return (0, i.jsx)(r(628462).A, {
                        format: r(696654).NY.Inline,
                        value: n.formatMessage(h.unknown),
                        isSingle: !0,
                        backgroundColor: r(632079).Tj.red.background.tertiary,
                        color: r(632079).Tj.red.text.secondary
                    });
                    let e = {
                        value: [(0, r(247438).Ey_)(" ", [t])],
                        spaceId: s.id
                    };
                    return (0, r(536614).S5)({
                        disabled: o,
                        disableDateStyleAnnotations: !1,
                        disableHover: !1,
                        disableLinks: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        emojiType: (0, r(591404).FN)(a),
                        environment: a,
                        formulaValueTypes: [],
                        katex: u.value,
                        parentStore: s,
                        textValue: e,
                        theme: r(632079).Tj,
                        themeMode: l
                    })
                }, [t, o, a, l, n, s, u.value]);
                return (0, i.jsx)("span", {
                    children: d
                })
            }

            function v(e) {
                let {
                    blockId: t
                } = e, o = (0, r(723240).r)(), n = t ? (0, r(247438).ld4)(t, o) : void 0;
                return (0, i.jsx)(x, {
                    annotation: n
                })
            }

            function b(e) {
                let {
                    collectionId: t
                } = e, o = (0, r(723240).r)(), n = t ? (0, r(247438).ETy)({
                    collectionId: t,
                    spaceId: o,
                    parentCvbId: void 0
                }) : void 0;
                return (0, i.jsx)(x, {
                    annotation: n
                })
            }

            function S(e) {
                let {
                    propertyId: t,
                    propertyName: o,
                    collectionId: n
                } = e, a = (0, r(723240).r)(), l = t && n ? (0, r(247438).ESw)({
                    property: t,
                    collection: {
                        table: "collection",
                        id: n,
                        spaceId: a
                    },
                    name: o
                }) : void 0;
                return (0, i.jsx)(x, {
                    annotation: l,
                    disabled: !0
                })
            }

            function j(e) {
                let {
                    errorSource: t
                } = e, o = (0, r(109939).tz)(), n = (0, r(972740).L)(), a = (0, r(682985).K8)(() => n ? r(356912).m.createChildStore(n, {
                    id: t.collectionId,
                    table: "collection"
                }) : null, [t, n]), l = (0, r(682985).K8)(() => {
                    if (a) {
                        let e = a.getSchema()[t.propertyId];
                        return null != e && e.name ? e.name : t.propertyId
                    }
                    return o.formatMessage(h.unknownProperty)
                }, [t, a, o]);
                return t ? (0, i.jsx)(r(109939).sA, { ...h.errorMessageWithDetails,
                    values: {
                        propertyName: (0, i.jsx)(S, {
                            propertyId: t.propertyId,
                            propertyName: l,
                            collectionId: t.collectionId
                        }),
                        pageMention: (0, i.jsx)(v, {
                            blockId: t.blockId
                        }),
                        databaseMention: (0, i.jsx)(b, {
                            collectionId: t.collectionId
                        })
                    }
                }) : null
            }

            function k(e) {
                let {
                    failureReason: t
                } = e;
                switch (t.type) {
                    case "external_http_request_failed":
                        return (0, i.jsx)(y, {
                            failureReason: t
                        });
                    case "formula_execution_error":
                        return (0, i.jsx)(f, {
                            failureReason: t
                        });
                    case "unknown":
                        return (0, i.jsx)(m, {});
                    default:
                        return null
                }
            }
            let A = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 1.09 15.25 17.81",
                    svg: (0, i.jsx)("path", {
                        d: "m10.6 5.241 1.458-1.458a.625.625 0 1 1 .884.884l-2.5 2.5a.625.625 0 0 1-.884 0l-2.5-2.5a.625.625 0 0 1 .884-.884L9.35 5.191V1.72a.625.625 0 1 1 1.25 0zM2.375 10c0 1.036.84 1.875 1.875 1.875h11.5a1.875 1.875 0 0 0 0-3.75H4.25c-1.036 0-1.875.84-1.875 1.875m1.875-.625h11.5a.625.625 0 1 1 0 1.25H4.25a.625.625 0 0 1 0-1.25m5.308 3.458a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.884l-1.408-1.408v3.466a.625.625 0 1 1-1.25 0v-3.516l-1.458 1.458a.625.625 0 1 1-.884-.884z"
                    })
                },
                C = (0, r(104509).wt)("rectangleCompressVertical", A, "default"),
                M = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 1.09 15.25 17.81",
                    svg: (0, i.jsx)("path", {
                        d: "M10.442 1.278a.625.625 0 0 0-.884 0l-2.5 2.5a.625.625 0 1 0 .884.884L9.4 3.204v3.52a.625.625 0 0 0 1.25 0v-3.47l1.408 1.408a.625.625 0 1 0 .884-.884zM9.35 13.275v3.466l-1.408-1.408a.625.625 0 1 0-.884.884l2.5 2.5c.244.244.64.244.884 0l2.5-2.5a.625.625 0 0 0-.884-.884L10.6 16.791v-3.516a.625.625 0 1 0-1.25 0M4.5 6.125H8v1.25H4.5a.875.875 0 0 0-.875.875v3.5c0 .483.392.875.875.875H8v1.25H4.5a2.125 2.125 0 0 1-2.125-2.125v-3.5c0-1.174.951-2.125 2.125-2.125m11 6.5H12v1.25h3.5a2.125 2.125 0 0 0 2.125-2.125v-3.5A2.125 2.125 0 0 0 15.5 6.125H12v1.25h3.5c.483 0 .875.392.875.875v3.5a.875.875 0 0 1-.875.875"
                    })
                },
                T = (0, r(104509).wt)("rectangleExpandVertical", M, "default"),
                _ = (0, r(109939).YK)({
                    moreLabel: {
                        id: "automationBaseStepElement.moreActionsMenu.title",
                        defaultMessage: "More"
                    },
                    collapseLabel: {
                        id: "automationBaseStepElement.moreActionsMenu.collapseLabel",
                        defaultMessage: "Collapse"
                    },
                    expandLabel: {
                        id: "automationBaseStepElement.moreActionsMenu.expandLabel",
                        defaultMessage: "Expand"
                    }
                }),
                I = {
                    iconButton: {
                        height: 24,
                        width: 24,
                        flexShrink: 0,
                        borderRadius: 4
                    },
                    moreIcon: {
                        height: r(104509).Ev.sm,
                        width: r(104509).Ev.sm
                    },
                    collapseToggleIcon: {
                        height: r(104509).Ev.default,
                        width: r(104509).Ev.default
                    }
                };

            function P(e) {
                let {
                    actionMenu: t,
                    disabled: o,
                    buttonPopupStore: n
                } = e, a = (0, r(109939).tz)(), l = (0, r(960253).e)(), s = (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        gap: 1,
                        padding: 2,
                        borderRadius: 6,
                        boxShadow: `0px 0px 0px 1px ${r(632079).Tj.border.secondary}, 0px 2px 4px 0px rgba(0, 0, 0, ${"dark"===l?.08:.04})`,
                        backgroundColor: r(632079).Tj.background.elevated
                    }
                }), [l]);
                return (0, i.jsxs)("div", {
                    style: s.container,
                    children: [e.collapsible ? (0, i.jsx)(r(51831).m, {
                        content: () => (0, i.jsx)(r(109939).sA, { ...w(e.isCollapsed)
                        }),
                        children: t => (0, i.jsx)(r(374533).A, { ...t,
                            ariaLabel: a.formatMessage(w(e.isCollapsed)),
                            disabled: o,
                            disabledFeedback: o,
                            hasBackground: !0,
                            icon: e.isCollapsed ? T : C,
                            iconStyle: I.collapseToggleIcon,
                            style: I.iconButton,
                            onClick: e.onCollapseToggled
                        })
                    }) : void 0, (0, i.jsx)(r(656252).A, {
                        alignmentToOrigin: "center",
                        buttonPopupStore: n,
                        originGap: 0,
                        placementToOrigin: "bottom",
                        popupType: r(986939).A.isMobile ? r(182718).nl.SlideUp : r(182718).nl.Popup,
                        content: () => t,
                        children: e => (0, i.jsx)(r(374533).A, { ...e,
                            ariaLabel: a.formatMessage(_.moreLabel),
                            disabled: o,
                            disabledFeedback: o,
                            hasBackground: !0,
                            icon: r(361226).ellipsisSmallIcon,
                            iconStyle: I.moreIcon,
                            style: I.iconButton
                        })
                    })]
                })
            }

            function w(e) {
                return e ? _.expandLabel : _.collapseLabel
            }
            let V = "automation-list-item-base-step",
                F = "automation-list-item-base-step--drag-disabled",
                R = "automation-list-item-icon",
                E = "automation-list-item-drag-handle",
                B = {
                    iconContainer: {
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        flexShrink: 0
                    },
                    collapsedDivider: {
                        borderTop: `1px solid ${r(632079).Tj.border.secondary}`,
                        insetInlineStart: 0,
                        marginTop: 12,
                        position: "absolute",
                        width: "100%"
                    }
                };

            function N(e) {
                let {
                    actionMenu: t,
                    buttonPopupStore: o,
                    children: a,
                    disabled: l,
                    icon: s,
                    onClick: u,
                    onMouseDown: d,
                    onMouseEnter: c,
                    onMouseLeave: p,
                    subtitle: m,
                    styles: g
                } = e, y = (0, r(682985).uB)(o, r(510969).A), [h, f] = (0, r(641086).A)(), [x, v] = (0, r(848135).B)(), b = (0, r(682985).K8)(() => y.getState().open, [y]), S = !l && (r(986939).A.isMobile || v || f || b), j = Y({
                    disabled: l,
                    hasActionMenu: !!t,
                    isActionMenuVisible: S,
                    overrideStyles: g
                }), k = (0, r(411048).Px)(h, x), A = (0, n.useMemo)(() => ({ ...j.componentWrap,
                    ...j.border
                }), [j.border, j.componentWrap]);
                return (0, i.jsxs)("div", {
                    className: V,
                    onClick: u,
                    onMouseDown: d,
                    onMouseEnter: c,
                    onMouseLeave: p,
                    ref: k,
                    style: A,
                    children: [(0, i.jsxs)("div", {
                        style: j.headerWrap,
                        children: [s ? (0, i.jsx)("div", {
                            "aria-hidden": "true",
                            style: B.iconContainer,
                            children: (0, i.jsx)("div", {
                                style: j.iconWrap,
                                children: s(j.icon)
                            })
                        }) : void 0, (0, i.jsxs)("div", {
                            style: j.titleAndSubtitleWrap,
                            children: [(0, i.jsx)("div", {
                                style: j.titleWrap,
                                children: a
                            }), m]
                        })]
                    }), t ? (0, i.jsx)("div", {
                        style: j.actionMenuWrap,
                        children: (0, i.jsx)(P, {
                            actionMenu: t,
                            buttonPopupStore: y,
                            disabled: l
                        })
                    }) : void 0]
                })
            }
            let O = {
                position: "relative"
            };

            function D(e) {
                let {
                    actionId: t,
                    actionMenu: l,
                    buttonPopupStore: d,
                    children: c,
                    disabled: p,
                    icon: m,
                    onBlur: g,
                    onClick: y,
                    onFocus: h,
                    onMouseDown: f,
                    onMouseEnter: x,
                    onMouseLeave: v,
                    styles: b,
                    subtitle: S,
                    hideDragHandle: j
                } = e, [A, C] = (0, r(768397).s)(), [M, T] = (0, r(641086).A)(), [_, I] = (0, r(848135).B)(), w = (0, r(682985).uB)(d, r(510969).A), N = (0, r(682985).K8)(() => w.getState().open, [w]), D = (0, r(411048).Px)(_, M), W = !p && (r(986939).A.isMobile || I || C || T || N);
                (0, n.useEffect)(() => {
                    function e(e) {
                        e.state.open || (0, r(854091).k)()
                    }
                    return w.addListener(e), () => {
                        w.removeListener(e)
                    }
                }, [w]);
                let L = Y({
                        disabled: p,
                        hasActionMenu: !!l,
                        isActionMenuVisible: W,
                        overrideStyles: b
                    }),
                    z = s({
                        disabled: p
                    }),
                    K = !!(j || z),
                    {
                        tooltipMessage: H,
                        ariaLabel: q
                    } = U(),
                    $ = a(t),
                    {
                        automationStore: G
                    } = (0, r(605263).q8)(),
                    Q = (0, r(682985).K8)(() => null == G ? void 0 : G.getStatus(), [G]),
                    J = $ && "active" !== Q;
                return (0, i.jsxs)("div", {
                    className: o()(V, {
                        [F]: p || r(986939).A.isMobile || K
                    }),
                    ref: D,
                    style: L.buttonWrap,
                    children: [J ? (0, i.jsx)(k, {
                        failureReason: $
                    }) : void 0, (0, i.jsxs)("div", {
                        style: O,
                        children: [(0, i.jsx)(r(64960).Ay, {
                            disabled: p,
                            disabledFeedback: p,
                            ignoreLocalHoverState: !0,
                            ignoreLocalPressedState: !0,
                            onBlur: g,
                            onClick: y,
                            onFocus: h,
                            onMouseDown: f,
                            onMouseEnter: x,
                            onMouseLeave: v,
                            ref: A,
                            style: L.componentWrap,
                            children: (0, i.jsxs)("div", {
                                style: L.headerWrap,
                                children: [m ? (0, i.jsxs)("div", {
                                    "aria-hidden": "true",
                                    style: B.iconContainer,
                                    children: [(0, i.jsx)("div", {
                                        className: R,
                                        style: L.iconWrap,
                                        children: m(L.icon)
                                    }), K ? void 0 : (0, i.jsx)("div", {
                                        className: E,
                                        style: L.iconWrap,
                                        children: (0, i.jsx)(r(633418).j, {
                                            width: 20,
                                            height: 20,
                                            hideClickMessage: !0,
                                            dragTooltipMessage: H,
                                            "aria-label": q
                                        })
                                    })]
                                }) : void 0, (0, i.jsxs)("div", {
                                    style: L.titleAndSubtitleWrap,
                                    children: [(0, i.jsx)("div", {
                                        style: L.titleWrap,
                                        children: c
                                    }), S, t ? (0, i.jsx)(u, {
                                        actionId: t
                                    }) : void 0]
                                })]
                            })
                        }), l ? (0, i.jsx)("div", {
                            style: L.actionMenuWrap,
                            children: (0, i.jsx)(P, {
                                actionMenu: l,
                                buttonPopupStore: w,
                                disabled: p
                            })
                        }) : void 0]
                    })]
                })
            }

            function W(e) {
                return (0, i.jsx)(J, {
                    actionId: e.actionId,
                    canCollapse: e.canCollapse,
                    children: (0, i.jsx)(L, { ...e
                    })
                })
            }

            function L(e) {
                let {
                    actionId: t,
                    actionMenu: u,
                    banner: d,
                    buttonPopupStore: c,
                    children: p,
                    disabled: m,
                    forceShowActionMenu: g,
                    onMouseEnter: y,
                    onMouseLeave: h,
                    styles: f,
                    hideDragHandle: x
                } = e, {
                    hasTypecheckErrors: v
                } = l({
                    actionId: t
                }), b = s({
                    disabled: m
                }), S = !!(x || b), j = a(t), {
                    automationStore: A
                } = (0, r(605263).q8)(), C = (0, r(682985).K8)(() => null == A ? void 0 : A.getStatus(), [A]), M = j && "active" !== C, [T, _] = (0, r(641086).A)(), [I, w] = (0, r(848135).B)(), R = (0, r(682985).uB)(c, r(510969).A), E = (0, r(682985).K8)(() => R.getState().open, [R]), {
                    currentDraggingActionId: B
                } = (0, r(305042).b)(), {
                    isCollapsed: N,
                    canCollapse: O,
                    toggleCollapsed: D
                } = Q(), W = (0, r(411048).Px)(I, T), L = !m && (g || r(986939).A.isMobile || w || _ || E);
                (0, n.useEffect)(() => {
                    function e(e) {
                        e.state.open || (0, r(854091).k)()
                    }
                    return R.addListener(e), () => {
                        R.removeListener(e)
                    }
                }, [R]);
                let z = Y({
                        disabled: m,
                        hasActionMenu: !!u,
                        isActionMenuVisible: L,
                        overrideStyles: f
                    }),
                    K = (0, n.useMemo)(() => ({ ...z.buttonWrap,
                        ...B && !S ? {
                            cursor: "grabbing"
                        } : {}
                    }), [B, z.buttonWrap, S]);
                return (0, i.jsxs)("div", {
                    className: o()(V, {
                        [F]: m || r(986939).A.isMobile || S || v
                    }),
                    onMouseEnter: y,
                    onMouseLeave: h,
                    ref: W,
                    style: K,
                    children: [M ? (0, i.jsx)(k, {
                        failureReason: j
                    }) : void 0, d, (0, i.jsxs)("div", {
                        style: z.componentWrap,
                        children: [u ? (0, i.jsx)("div", {
                            style: z.actionMenuWrap,
                            children: (0, i.jsx)(P, {
                                actionMenu: u,
                                buttonPopupStore: R,
                                disabled: m,
                                ...O ? {
                                    collapsible: !0,
                                    isCollapsed: N,
                                    onCollapseToggled: D
                                } : {
                                    collapsible: !1
                                }
                            })
                        }) : void 0, p]
                    })]
                })
            }

            function z(e) {
                let {
                    actionId: t,
                    actionRegistryItem: o,
                    children: a,
                    disabled: u,
                    errorMessage: d,
                    onMouseEnter: c,
                    onMouseLeave: p,
                    styles: m
                } = e, {
                    typecheckErrorMessage: g
                } = l({
                    actionId: t
                }), y = d || g, h = s({
                    disabled: u
                }), f = !!(y || h), {
                    tooltipMessage: x,
                    ariaLabel: v
                } = U(), {
                    canCollapse: b,
                    toggleCollapsed: S
                } = Q(), j = Y({
                    disabled: u,
                    hasActionMenu: !1,
                    isActionMenuVisible: !1,
                    overrideStyles: { ...m,
                        ...b ? {
                            headerWrap: {
                                cursor: "pointer"
                            }
                        } : {}
                    }
                }), k = (0, n.useCallback)(() => {
                    !u && b && S()
                }, [b, u, S]), A = (0, r(167869).qe)(o) ? o.display : void 0;
                return (0, i.jsx)(r(51831).m, {
                    disableTooltip: !y,
                    content: () => y,
                    placement: "bottom",
                    delayThreshold: 0,
                    children: e => (0, i.jsxs)("header", {
                        onClick: k,
                        onMouseEnter: c,
                        onMouseLeave: p,
                        ...e,
                        onFocus: e => e.stopPropagation(),
                        style: j.headerWrap,
                        role: "button",
                        children: [A ? (0, i.jsxs)("div", {
                            "aria-hidden": "true",
                            style: B.iconContainer,
                            children: [(0, i.jsx)("div", {
                                className: R,
                                style: j.iconWrap,
                                children: (0, i.jsx)($, {
                                    display: A,
                                    isError: !!y,
                                    hasSideEffects: o.hasNewReversableEffect
                                })
                            }), f ? void 0 : (0, i.jsx)("div", {
                                className: E,
                                style: j.iconWrap,
                                children: (0, i.jsx)(r(633418).j, {
                                    width: 20,
                                    height: 20,
                                    hideClickMessage: !0,
                                    dragTooltipMessage: x,
                                    "aria-label": v
                                })
                            })]
                        }) : void 0, (0, i.jsx)("div", {
                            style: j.titleWrap,
                            children: a
                        })]
                    })
                })
            }
            let K = {
                display: "flex",
                flexDirection: "column"
            };

            function H(e) {
                let {
                    children: t,
                    disabled: o,
                    styles: a
                } = e, {
                    isCollapsed: l
                } = Q(), {
                    value: s
                } = (0, r(815048).fJ)(r(448988).fM), u = Y({
                    disabled: o,
                    hasActionMenu: !1,
                    isActionMenuVisible: !1,
                    overrideStyles: a
                }), [d, c] = (0, n.useState)(!1);
                if ((0, n.useEffect)(() => {
                        c(!0)
                    }, [l]), !s) return null;
                let {
                    AnimatePresence: p,
                    motion: m
                } = s;
                return (0, i.jsx)(p, {
                    children: l ? void 0 : (0, i.jsxs)(m.div, {
                        style: K,
                        initial: !!d && {
                            height: 0
                        },
                        animate: {
                            height: "auto"
                        },
                        exit: {
                            height: 0
                        },
                        children: [(0, i.jsx)("div", {
                            style: B.collapsedDivider
                        }), (0, i.jsx)("div", {
                            style: u.bodyWrap,
                            children: t
                        })]
                    })
                })
            }
            let q = {
                style0: {
                    color: r(632079).Tj.text.inverseSecondary
                }
            };

            function U() {
                let e = (0, r(109939).tz)(),
                    t = (0, r(99192).m)();
                return void 0 === t ? {
                    tooltipMessage: void 0,
                    ariaLabel: void 0
                } : {
                    tooltipMessage: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Drag <medium>to move step {stepNumber}</medium>",
                        id: "automations.dragHandle.dragToMoveStep.tooltip",
                        values: {
                            stepNumber: t,
                            medium: e => (0, i.jsx)("span", {
                                style: q.style0,
                                children: e
                            })
                        }
                    }),
                    ariaLabel: e.formatMessage({
                        id: "automations.dragHandle.dragToMoveStep.ariaLabel",
                        defaultMessage: "Drag to move step {stepNumber}"
                    }, {
                        stepNumber: t
                    })
                }
            }

            function Y(e) {
                let {
                    disabled: t,
                    hasActionMenu: o,
                    isActionMenuVisible: n,
                    overrideStyles: a
                } = e, i = (0, r(960253).e)();
                return (0, r(960253).I)(() => ({
                    border: {
                        border: "unset",
                        boxShadow: `0px 0px 0px 1px ${r(632079).Tj.border.secondary}, 0px 2px 4px 0px rgba(0, 0, 0, ${"dark"===i?.08:.04})`
                    },
                    buttonWrap: {
                        background: r(632079).Tj.background.elevated,
                        border: "unset",
                        boxShadow: `0px 0px 0px 1px ${r(632079).Tj.border.secondary}, 0px 2px 4px 0px rgba(0, 0, 0, ${"dark"===i?.08:.04})`,
                        overflow: "hidden",
                        position: "relative",
                        ...null == a ? void 0 : a.buttonWrap
                    },
                    componentWrap: {
                        background: r(632079).Tj.background.elevated,
                        display: "flex",
                        flexDirection: "column",
                        paddingInline: 12,
                        paddingBlock: 12,
                        position: "relative",
                        overflow: "hidden",
                        ...t ? {
                            cursor: "default",
                            pointerEvents: "none"
                        } : {},
                        ...null == a ? void 0 : a.componentWrap
                    },
                    headerWrap: {
                        display: "flex",
                        flexDirection: "row",
                        gap: 8,
                        marginInlineEnd: 64 * !!o,
                        ...t ? {
                            opacity: .4
                        } : {},
                        ...null == a ? void 0 : a.headerWrap
                    },
                    iconWrap: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 20,
                        height: 20,
                        ...null == a ? void 0 : a.iconWrap
                    },
                    icon: {
                        fill: r(632079).Tj.text.secondary,
                        height: "100%",
                        width: 16,
                        ...null == a ? void 0 : a.icon
                    },
                    titleWrap: {
                        display: "flex",
                        alignItems: "start",
                        flex: "1 1 auto",
                        fontSize: 14,
                        lineHeight: "20px",
                        minWidth: 0,
                        whiteSpace: "pre",
                        flexWrap: "wrap",
                        ...null == a ? void 0 : a.titleWrap
                    },
                    titleAndSubtitleWrap: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        ...null == a ? void 0 : a.titleAndSubtitleWrap
                    },
                    bodyWrap: {
                        fontSize: 14,
                        marginBlockStart: 12,
                        marginBlockEnd: 2,
                        marginInline: 2,
                        marginTop: 22,
                        ...null == a ? void 0 : a.bodyWrap
                    },
                    actionMenuWrap: {
                        flex: "0 0 auto",
                        height: 26,
                        position: "absolute",
                        insetInlineEnd: 8,
                        top: 8,
                        zIndex: 2,
                        ...n ? {} : r(69916).Qg
                    }
                }), [12, t, o, n, a, i])
            }

            function $(e) {
                let {
                    display: t,
                    hasSideEffects: o,
                    isError: n
                } = e, a = (0, r(960253).I)(() => ({
                    iconWrap: {
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                        background: n ? r(632079).Tj.red.background.secondaryTranslucent : o ? r(632079).Tj.blue.background.secondaryTranslucent : r(632079).Tj.background.tertiaryTranslucent,
                        flexShrink: 0
                    },
                    icon: {
                        width: 14,
                        height: 14,
                        fill: n ? r(632079).Tj.red.icon.accentPrimary : o ? r(632079).Tj.blue.icon.accentPrimary : r(632079).Tj.icon.secondary,
                        margin: "0 auto"
                    }
                }), [o, n]);
                return (0, i.jsx)("div", {
                    style: a.iconWrap,
                    children: t.icon(a.icon)
                })
            }
            let G = (0, n.createContext)({
                canCollapse: !1,
                isCollapsed: !1,
                toggleCollapsed: () => {}
            });

            function Q() {
                return (0, n.useContext)(G)
            }

            function J(e) {
                let {
                    actionId: t,
                    children: o,
                    canCollapse: a
                } = e, {
                    collapsedActionIds: l,
                    toggleActionIdCollapsed: s
                } = (0, r(305042).b)(), u = (0, n.useMemo)(() => l.includes(t), [t, l]), d = (0, n.useCallback)(() => {
                    s(t)
                }, [t, s]);
                return (0, i.jsx)(G.Provider, {
                    value: {
                        canCollapse: a,
                        isCollapsed: u,
                        toggleCollapsed: d
                    },
                    children: o
                })
            }
            G.displayName = "BaseStepElementCollapseContext"
        },
        794018: (e, t, r) => {
            r.d(t, {
                L9: () => n,
                Yx: () => i
            });
            let o = ["relation_contains", "relation_does_not_contain", "is_empty", "changes_to_any"];

            function n(e) {
                return o.includes(e) ? e : "relation_contains"
            }
            let a = (0, r(109939).YK)({
                    changesToAny: {
                        id: "propertyTrigger.relationOperator.changesToAnyOption",
                        defaultMessage: "Is edited"
                    },
                    isEmpty: {
                        id: "propertyTrigger.relationOperator.isEmpty",
                        defaultMessage: "Is cleared"
                    },
                    relationContains: {
                        id: "propertyTrigger.relationOperator.relationContainsOption",
                        defaultMessage: "Contains"
                    },
                    relationDoesNotContain: {
                        id: "propertyTrigger.relationOperator.relationDoesNotContain",
                        defaultMessage: "Does not contain"
                    }
                }),
                i = {
                    relation_contains: {
                        hasInput: !0,
                        labelText: a.relationContains,
                        text: a.relationContains,
                        value: "relation_contains"
                    },
                    relation_does_not_contain: {
                        hasInput: !0,
                        labelText: a.relationDoesNotContain,
                        text: a.relationDoesNotContain,
                        value: "relation_does_not_contain"
                    },
                    changes_to_any: {
                        hasInput: !1,
                        text: a.changesToAny,
                        labelText: a.changesToAny,
                        value: "changes_to_any"
                    },
                    is_empty: {
                        text: a.isEmpty,
                        labelText: a.isEmpty,
                        value: "is_empty",
                        hasInput: !1
                    }
                }
        },
        794481: (e, t, r) => {
            r.d(t, {
                R: () => s
            }), r(898992), r(354520), r(581454);
            var o = r(296540),
                n = r(474848);
            let a = {
                buttonStyle: {
                    fontSize: r(986939).A.isMobile ? 16 : 12,
                    height: 20,
                    lineHeight: "unset",
                    marginInlineEnd: 0,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    textTransform: "lowercase",
                    color: r(986939).A.isMobile ? r(632079).Tj.palette.gray[900] : r(632079).Tj.palette.gray[500]
                },
                style0: {
                    height: 20
                }
            };

            function i({
                handleSelectOperator: e,
                selectedItem: t
            }) {
                return (0, n.jsx)(r(127322).A, {
                    style: a.style0,
                    innerButtonStyle: a.buttonStyle,
                    selectedTitle: (0, n.jsx)(r(109939).sA, { ...t.text
                    }),
                    renderMenuSections: t => [{
                        key: "selectRelationOperator",
                        items: Object.values(r(794018).Yx).map(o => ({
                            key: o.value,
                            action: () => {
                                e(o), t.close()
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                title: (0, n.jsx)(r(109939).sA, { ...o.text
                                })
                            })
                        }))
                    }]
                })
            }
            let l = {
                header: {
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gridGap: "2px",
                    alignItems: "center"
                },
                propertyName: { ...r(699422).RC
                }
            };

            function s(e) {
                var t;
                let {
                    collectionStore: a,
                    formulaTypecheckContextValues: s,
                    menuStore: u,
                    onClose: d,
                    onCommit: c,
                    parentRecordStore: p,
                    propertyChangedFilter: m,
                    propertyId: g,
                    propertySchema: y,
                    shouldUseDefaultPropertyOperator: h
                } = e, f = (0, o.useMemo)(() => {
                    if (h) return "relation_contains"
                }, [h]), x = (0, o.useMemo)(() => "changes_to_any" !== m.operator && (0, r(400473).Pq)(m) && (0, r(400473).gc)(m) ? (0, r(400473).Rh)(m) : [], [m]), v = (0, r(682985).K8)(() => a.getSpaceId(), [a]), [b, S] = (0, o.useState)(() => {
                    let e = x.map(e => {
                        if ("exact" === e.type && e.value && v) return r(496282).L3.fromSpaceShardRecordId({
                            id: e.value,
                            spaceId: v
                        }, r(832375).evP)
                    }).filter(r(722371).O9);
                    if (0 !== e.length) return {
                        action: "replace",
                        value: {
                            type: "simple",
                            value: (0, r(561872).Ap)(e)
                        }
                    }
                }), [j, k] = (0, o.useState)((0, r(794018).L9)(f || m.operator)), A = (0, o.useRef)(j), C = (0, o.useRef)(), M = r(794018).Yx[j], T = (0, r(682985).K8)(() => (0, r(591864).setPropertyValueToSimpleFormulaReturnType)(a.getSpaceShardedPointer(), g, y), [a, g, y]), _ = (0, o.useMemo)(() => ({
                    collectionStore: a,
                    property: g,
                    type: "collection"
                }), [a, g]), I = (0, o.useCallback)(() => {
                    let e = r(794018).Yx[A.current],
                        t = C.current || (null == b ? void 0 : b.value),
                        o = null != t && t.value ? (0, r(561872).n)(t.value) : void 0,
                        n = o && o.length > 0 ? {
                            operator: e.value,
                            value: o.map(e => ({
                                type: "exact",
                                value: e.id
                            }))
                        } : {
                            operator: "is_empty"
                        };
                    c({
                        anyOptionCheckState: "changes_to_any" === e.value,
                        filter: n,
                        propertyId: g
                    }), d()
                }, [null == b ? void 0 : b.value, d, c, g]), P = (0, o.useCallback)(e => {
                    C.current = e, S(e ? {
                        action: "replace",
                        value: e
                    } : void 0);
                    let t = r(794018).Yx[A.current];
                    (1 === y.limit && (0, r(722371).O9)(null == e ? void 0 : e.value) || !t.hasInput) && I()
                }, [I, y.limit]), w = (0, o.useCallback)(e => {
                    A.current = e.value, k(e.value), r(794018).Yx[e.value].hasInput || P(void 0)
                }, [P]), V = (0, o.useMemo)(() => {
                    var e;
                    return (0, r(591864).fromSimpleFormulaArrayValue)(null == b || null == (e = b.value) ? void 0 : e.value)
                }, [null == b || null == (t = b.value) ? void 0 : t.value]), {
                    headerDiv: F,
                    innerComponents: R
                } = (0, r(818364).A)({
                    currentSimpleFormulaValueTokens: V,
                    formulaTypecheckContextValues: s,
                    formulaValueContext: _,
                    onChange: P,
                    onClose: d,
                    showClearButton: !0,
                    showInputMenuItem: !0,
                    collection: (null == T ? void 0 : T.type) === "block_array" ? T.collection : void 0,
                    value: null == b ? void 0 : b.value,
                    parentRecordStore: p
                });
                return (0, n.jsx)(r(44426).A, {
                    type: "custom",
                    triggerActionMenuStore: u,
                    onDone: I,
                    onClose: d,
                    headerTitle: (0, n.jsxs)("div", {
                        style: l.header,
                        children: [(0, n.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => y.name,
                            children: e => (0, n.jsx)("div", { ...e,
                                style: l.propertyName,
                                children: y.name
                            })
                        }), (0, n.jsx)(i, {
                            handleSelectOperator: w,
                            selectedItem: M
                        })]
                    }),
                    subHeaderComponent: M.hasInput ? (0, n.jsx)(r(844565).A, {
                        children: F
                    }) : void 0,
                    customMenuProps: {
                        leftOuterStyle: {
                            flex: "unset"
                        },
                        rightOuterStyle: {
                            flex: "unset"
                        },
                        titleOuterStyle: {
                            flex: "unset"
                        },
                        topbarStyle: {
                            justifyContent: "space-between"
                        }
                    },
                    children: M.hasInput ? R : void 0
                })
            }
        },
        801510: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                    marginInlineEnd: 4,
                    marginInlineStart: "auto"
                },
                i = {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center"
                },
                l = o.memo(o.forwardRef(function(e, t) {
                    let {
                        id: o,
                        children: l,
                        disabledFeedback: s,
                        isFullWidth: u,
                        isLoading: d,
                        onClick: c,
                        style: p,
                        variant: m,
                        disabled: g,
                        ...y
                    } = e, h = (0, r(960253).e)(), f = {
                        display: "inline-grid",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        height: 36,
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: 1,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        fontWeight: r(699422).Wy.medium,
                        ...d && {
                            gridTemplateColumns: "1fr auto 1fr"
                        },
                        transition: "background-color color 150ms ease"
                    };
                    return (0, n.jsxs)(r(64960).Ay, {
                        ref: t,
                        id: o,
                        onClick: c,
                        style: { ...f,
                            ... function(e) {
                                switch (e) {
                                    case "primary":
                                        return {
                                            background: r(632079).oZ.frontBlueButtonBackground,
                                            boxShadow: r(632079).Tj.buttonBoxShadow,
                                            color: "white"
                                        };
                                    case "secondary":
                                        return {
                                            background: r(632079).oZ.frontSecondaryButtonBackground,
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.1), inset 0 0 0 1px rgba(235, 87, 87, 0.3)",
                                            color: r(632079).oZ.red
                                        };
                                    case "tertiary":
                                    case "aiTertiary":
                                        return {
                                            background: r(632079).oZ.white,
                                            color: r(632079).oZ.frontTextDark,
                                            border: "1px solid rgba(15, 15, 15, 0.15)",
                                            width: "100%",
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.05)"
                                        };
                                    case "quaternary":
                                        return {
                                            background: r(632079).oZ.frontQuaternaryButtonBackground,
                                            border: `1px solid ${r(632079).oZ.frontQuaternaryButtonBorder}`,
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.1)",
                                            color: "white"
                                        };
                                    case "aiPrimary":
                                        return {
                                            background: "#CA59FF",
                                            color: "white"
                                        };
                                    case "lightGray":
                                        return {
                                            background: r(632079).Tj.background.tertiaryTranslucent,
                                            color: r(632079).Tj.text.secondary
                                        };
                                    default:
                                        (0, r(722371).HB)(e)
                                }
                            }(m),
                            ...p,
                            ...u && {
                                width: "100%",
                                justifyContent: "center"
                            }
                        },
                        hoveredStyle: function(e, t) {
                            switch (e) {
                                case "primary":
                                    return {
                                        background: r(632079).oZ.frontBlueButtonHoveredBackground
                                    };
                                case "secondary":
                                    return {
                                        background: r(632079).oZ.frontSecondaryButtonBackgroundHovered
                                    };
                                case "tertiary":
                                    return {
                                        background: "light" === t ? r(632079).Tj.buttonHoveredBackground : "rgba(255, 255, 255, 0.8)"
                                    };
                                case "quaternary":
                                    return {
                                        background: r(632079).oZ.frontQuaternaryButtonBackgroundHovered
                                    };
                                case "aiPrimary":
                                case "aiTertiary":
                                    return {
                                        background: "#C592DD"
                                    };
                                case "lightGray":
                                    return {
                                        background: r(632079).Tj.background.tertiaryTranslucent,
                                        color: r(632079).Tj.text.primary
                                    };
                                default:
                                    (0, r(722371).HB)(e)
                            }
                        }(m, h),
                        pressedStyle: function(e, t) {
                            switch (e) {
                                case "primary":
                                    return {
                                        background: r(632079).oZ.frontBlueButtonPressedBackground
                                    };
                                case "secondary":
                                    return {
                                        background: r(632079).Tj.buttonPressedBackground
                                    };
                                case "tertiary":
                                    return {
                                        background: "light" === t ? r(632079).Tj.buttonPressedBackground : "rgba(255, 255, 255, 0.85)"
                                    };
                                case "quaternary":
                                    return {
                                        background: r(632079).oZ.frontQuaternaryButtonBackgroundPressed
                                    };
                                case "aiPrimary":
                                case "aiTertiary":
                                    return {
                                        background: "#946EA6"
                                    };
                                case "lightGray":
                                    return {
                                        background: r(632079).Tj.state.pressed,
                                        color: r(632079).Tj.text.primary
                                    };
                                default:
                                    (0, r(722371).HB)(e)
                            }
                        }(m, h),
                        disabled: g || d,
                        disabledFeedback: s,
                        ...y,
                        children: [d ? (0, n.jsx)(r(517334).k, {
                            style: a
                        }) : null, (0, n.jsx)("div", {
                            style: i,
                            children: l
                        })]
                    })
                }), r(795676).A)
        },
        818364: (e, t, r) => {
            r.d(t, {
                A: () => d
            }), r(944114), r(581454);
            var o = r(296540);
            r(898992), r(354520), r(672577);
            var n = r(474848);

            function a({
                handleRemoveToken: e,
                isDisabled: t,
                token: i,
                parentRecordStore: l
            }) {
                let s = (0, o.useCallback)(() => {
                        e && e(i)
                    }, [e, i]),
                    u = (0, r(247438).i$F)(i);
                if (!u) return null;
                let d = u.id;
                return (0, n.jsx)(r(448860).A, {
                    blockId: d,
                    format: r(986939).A.isMobile ? r(696654).NY.Medium : r(696654).NY.Small,
                    isSingle: !1,
                    onClickRemove: s,
                    parentStore: l,
                    shouldShrink: !0,
                    shouldWrap: !1,
                    showRemoveButton: !t
                }, d)
            }
            let i = {
                padding: "0 8px 4px 8px"
            };

            function l({
                annotation: e,
                isChecked: t,
                menuArgs: o,
                parentRecordStore: a
            }) {
                let i = (0, r(682985).K8)(() => {
                    if ((0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).jIt)(e)) return (0, r(247438).i$F)(e)
                }, [e]);
                if (!i) return null;
                let s = i.id,
                    u = r(970831).B.createChildStore(a, {
                        id: s,
                        table: r(832375).evP
                    });
                return (0, n.jsx)(r(103558).A, {
                    store: u,
                    isChecked: t,
                    hidePath: !0,
                    ...o
                })
            }
            let s = {
                    paddingBottom: 0
                },
                u = {
                    marginInlineStart: "8px",
                    marginInlineEnd: "8px",
                    marginTop: "8px"
                };

            function d(e) {
                let t, {
                        action: d,
                        collection: c,
                        currentSimpleFormulaValueTokens: p,
                        formulaTypecheckContextValues: m,
                        formulaValueContext: g,
                        menuProps: y,
                        onChange: h,
                        onClose: f,
                        showClearButton: x = !1,
                        showFormulaValueItems: v = !1,
                        showGenericHeader: b = !1,
                        showInputMenuItem: S = !1,
                        showReplaceAddRemoveToggle: j = !1,
                        value: k,
                        parentRecordStore: A
                    } = e,
                    {
                        footer: C,
                        header: M,
                        menuListStore: T,
                        noResultsMessage: _,
                        searchInput: I,
                        pageItems: P,
                        replaceAddRemoveToggleButton: w,
                        valueItems: V
                    } = function(e) {
                        var t, l;
                        let {
                            action: s,
                            collection: u,
                            formulaTypecheckContextValues: d,
                            formulaValueContext: c,
                            onChange: p,
                            onClose: m,
                            showClearButton: g,
                            showReplaceAddRemoveToggle: y,
                            unlimitedCurrentSimpleFormulaValueTokens: h,
                            value: f
                        } = e, x = (0, r(533992).v3)(), v = (0, r(533992).Y0)(), b = (0, r(109939).tz)(), {
                            collectionStore: S,
                            property: j
                        } = c, k = (0, r(95746).pg)(c), A = (0, r(682985).K8)(() => S.getSchema()[j], [S, j]), C = (0, o.useMemo)(() => {
                            let e = (null == A ? void 0 : A.type) === "relation" ? (0, r(390768).N)(A) : void 0;
                            return d.filter(t => (0, r(297493).o5)(t.type, {
                                type: "block",
                                collection: e
                            }, !0))
                        }, [d, A]), [M, T] = (0, o.useState)(""), _ = (0, r(682985).uB)(void 0, r(419110).$), I = (0, r(682985).K8)(() => !!(S && j && A && (0, r(9247).sO)(A)) && 1 === A.limit, [S, j, A]), P = (0, r(815048).fJ)(r(308825).T.searchActions), [w] = (0, r(97668).Yb)(async () => {
                            let e = M ? (0, r(821048).Ay)(M, C, e => e.kind === r(416901).FormulaContextValueKind.ContextValue ? e.name : "") : C;
                            if ("resolved" !== P.status || !u) return;
                            let t = P.value,
                                {
                                    results: o
                                } = await t.searchPagesInCollection({
                                    environment: x,
                                    query: M,
                                    collectionId: u.id,
                                    limit: 20,
                                    spaceId: u.spaceId,
                                    excludeTemplates: !0,
                                    source: "simple_formula_value_page_search",
                                    includePublicPagesWithoutExplicitAccess: !0,
                                    boostRecentlyViewedPages: !1
                                });
                            return {
                                valueResults: e,
                                pageResults: o
                            }
                        }, [M, C, P.status, P.value, u, x], {
                            debounce: r(767776).tu
                        }), V = k(h, "first").filter(e => {
                            if ("string" != typeof e && "boolean" != typeof e && (0, r(247438).jIt)(e)) {
                                var t, o;
                                let n = null == (t = (0, r(247438).i$F)(e)) ? void 0 : t.id;
                                n && null != w && null != (o = w.value) && o.pageResults.includes(n)
                            }
                            return !0
                        }), F = (0, o.useCallback)(() => {
                            T(""), _.setState({ ..._.state,
                                focus: {
                                    section: 0,
                                    indexLocal: 0,
                                    indexGlobal: 0,
                                    footerFocused: !1
                                }
                            })
                        }, [_]), R = (0, o.useCallback)((e, t) => {
                            p(e || f, t || s)
                        }, [s, p, f]), E = (0, o.useCallback)(e => {
                            let t = k(e, "last");
                            R({
                                type: "simple",
                                value: (0, r(591864).toSimpleFormulaArrayValue)(t)
                            }), F(), I && 0 !== t.length && m()
                        }, [k, R, F, I, m]), B = (0, o.useCallback)(() => {
                            E(V.slice(0, V.length - 1))
                        }, [V, E]), N = (0, o.useCallback)(e => {
                            null == E || E((0, r(591864).simpleFormulaValueWithoutToken)(V, e))
                        }, [V, E]), O = r(381453).oE(V.map((e, t) => "string" == typeof e || "boolean" == typeof e ? null : (0, r(247438).s1Y)(e) ? (0, n.jsx)(r(599762).A, {
                            formulaTypecheckContextValues: d,
                            handleRemoveToken: N,
                            isDisabled: !1,
                            token: e
                        }, t) : (0, r(247438).jIt)(e) ? (0, n.jsx)(a, {
                            parentRecordStore: S,
                            handleRemoveToken: N,
                            isDisabled: !1,
                            token: e
                        }, t) : null)), D = (0, n.jsx)("div", {
                            style: { ...!r(986939).A.isMobile && i
                            },
                            children: (0, n.jsx)(r(160319).Ay, {
                                focus: !r(986939).A.isMobile || void 0,
                                focusAfterAnimation: !0,
                                format: r(160319).le.FilterValue,
                                tokens: O,
                                placeholder: b.formatMessage(r(705743).D.pageSearchPlaceholder),
                                onRemoveLastToken: B,
                                onClearButtonClick: () => E([]),
                                value: M,
                                onChange: e => T(e.target.value),
                                dontShowBorderBottom: v.isAndroid,
                                showClearButton: g
                            })
                        }), W = (0, n.jsx)(r(444232).A, {
                            value: f,
                            onChange: R
                        }), L = (0, n.jsx)(r(270037).A, {
                            action: s,
                            handleOnChange: R
                        }), z = r(381453).oE(((null == (t = w.value) ? void 0 : t.valueResults) || []).map(e => {
                            let t = e.kind === r(416901).FormulaContextValueKind.ContextValue && e.id || "";
                            return {
                                action: "append",
                                checkType: I ? "single" : "multi",
                                isChecked: !!V.find(e => (0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).s1Y)(e) && (0, r(247438).iVq)(e).id === t),
                                currentSimpleFormulaValueTokens: V,
                                id: t,
                                setCurrentTokens: E,
                                value: e
                            }
                        })), K = r(381453).oE(((null == (l = w.value) ? void 0 : l.pageResults) || []).map(e => {
                            let t = !!V.find(t => {
                                var o;
                                return (0, r(591864).isAnnotationSimpleValueToken)(t) && (0, r(247438).jIt)(t) && (null == (o = (0, r(247438).i$F)(t)) ? void 0 : o.id) === e
                            });
                            if (u) {
                                let o = (0, r(247438).ld4)(e, u.spaceId);
                                return {
                                    action: () => {
                                        E(t ? (0, r(591864).simpleFormulaValueWithoutToken)(V, o) : [...V, o])
                                    },
                                    isChecked: t,
                                    checkType: I ? "single" : "multi",
                                    annotation: o,
                                    id: e
                                }
                            }
                        })), H = [...z, ...K];
                        return {
                            footer: W,
                            header: b.formatMessage(r(705743).D.genericMenuHeader),
                            menuListStore: _,
                            noResultsMessage: 0 === H.length && w.value && b.formatMessage(r(705743).D.noResults),
                            replaceAddRemoveToggleButton: !!y && L,
                            searchInput: D,
                            pageItems: K,
                            valueItems: z
                        }
                    }({
                        action: d,
                        collection: c,
                        formulaTypecheckContextValues: m,
                        formulaValueContext: g,
                        onChange: h,
                        onClose: f,
                        showClearButton: x,
                        showReplaceAddRemoveToggle: j,
                        unlimitedCurrentSimpleFormulaValueTokens: p,
                        value: k
                    }) || {},
                    F = [...(0, o.useMemo)(() => v ? V.map(e => {
                        let {
                            annotation: t,
                            itemAction: o
                        } = (0, r(966253).E)({
                            action: e.action,
                            currentSimpleFormulaValueTokens: e.currentSimpleFormulaValueTokens,
                            setCurrentTokens: e.setCurrentTokens,
                            value: e.value
                        });
                        return {
                            key: e.id,
                            render: o => (0, n.jsx)(r(358591).A, {
                                annotation: t,
                                isChecked: e.isChecked,
                                disabled: !1,
                                formulaTypecheckContextValues: m,
                                menuArgs: o,
                                parentRecordStore: A
                            }),
                            action: o
                        }
                    }) : [], [m, v, V, A]), ...(0, o.useMemo)(() => P ? P.map(e => ({
                        key: e.id,
                        render: t => (0, n.jsx)(l, {
                            annotation: e.annotation,
                            isChecked: e.isChecked,
                            menuArgs: t,
                            parentRecordStore: A
                        }),
                        action: e.action
                    })) : [], [P, A])],
                    R = [];
                F.length > 0 && R.push({
                    key: "values",
                    items: F
                }), t = r(986939).A.isMobile ? {
                    menuType: r(649476).gu.Modal,
                    right: (0, n.jsx)(r(109939).sA, { ...r(789722).W.done
                    }),
                    onClickRight: f,
                    minWidth: 260,
                    footer: C && (0, n.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: C
                    })
                } : {
                    menuType: r(649476).gu.Popup,
                    maxHeight: "50vh",
                    width: 260,
                    footer: C && (0, n.jsx)(r(844565).A, {
                        topBorder: !0,
                        children: C
                    }),
                    disableHeaderBorder: !0
                };
                let E = b && (0, n.jsx)(r(844565).A, {
                        style: s,
                        title: M
                    }),
                    B = (0, n.jsxs)(n.Fragment, {
                        children: [r(986939).A.isMobile ? void 0 : (null == y ? void 0 : y.header) || E, S ? (0, n.jsx)(r(844565).A, {
                            children: I
                        }) : void 0]
                    }),
                    N = (0, n.jsxs)(n.Fragment, {
                        children: [w ? (0, n.jsx)("div", {
                            style: u,
                            children: w
                        }) : void 0, _ ? (0, n.jsx)(r(844565).A, {
                            children: (0, n.jsx)(r(498341).u, {
                                title: _
                            })
                        }) : void 0, F.length > 0 ? (0, n.jsx)(r(558045).A, {
                            type: r(558045).O.Vertical,
                            initialFocus: 0,
                            sections: R,
                            store: T
                        }) : void 0]
                    }),
                    O = (0, n.jsx)(r(747369).A, { ...t,
                        ...y,
                        header: B,
                        children: N
                    });
                return {
                    headerDiv: B,
                    innerComponents: N,
                    relationMenu: O
                }
            }
        },
        832846: (e, t, r) => {
            r.d(t, {
                Hk: () => s,
                ZZ: () => n,
                jl: () => l
            }), r(898992), r(354520), r(296540);
            var o = r(474848);

            function n(e) {
                let t = (0, r(109939).tz)(),
                    {
                        propertySchema: n,
                        filter: a,
                        onClick: l
                    } = e;
                return (0, o.jsx)(r(238082).z, {
                    onClick: l,
                    tooltip: s({
                        filter: a,
                        intl: t,
                        propertySchema: n
                    }),
                    children: (0, o.jsx)(i, {
                        propertySchema: n,
                        filter: a
                    })
                })
            }
            let a = {
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                },
                wrap: {
                    alignItems: "center",
                    display: "flex",
                    whiteSpace: "pre"
                }
            };

            function i({
                propertySchema: e,
                filter: t
            }) {
                let n = l({
                    filter: t,
                    intl: (0, r(109939).tz)(),
                    propertySchema: e,
                    styles: a
                });
                return (0, o.jsx)("span", {
                    style: a.wrap,
                    children: n
                })
            }

            function l(e) {
                let {
                    filter: t,
                    intl: n,
                    propertySchema: a,
                    styles: i
                } = e, l = a.name, s = t.value, d = {
                    propertyName: (0, o.jsx)("span", {
                        style: i.propertyName,
                        children: l
                    }),
                    propertyValues: (0, o.jsx)(u, {
                        checkboxValue: s.value ? ? !1
                    })
                };
                return (0, r(760459).T2)(n, d)
            }

            function s(e) {
                let {
                    filter: t,
                    intl: n,
                    propertySchema: a
                } = e, i = a.name, l = !0 === t.value.value ? (0, o.jsx)(r(109939).sA, { ...r(760459).CV.actionCheckboxPropertyChecked
                }) : (0, o.jsx)(r(109939).sA, { ...r(760459).CV.actionCheckboxPropertyUnchecked
                });
                return (0, r(760459).T2)(n, {
                    propertyName: i,
                    propertyValues: l
                })
            }

            function u(e) {
                let {
                    checkboxValue: t
                } = e, n = !0 === t ? (0, o.jsx)(r(16275).I, {
                    icon: r(433413).h,
                    size: "xs"
                }) : (0, o.jsx)(r(16275).I, {
                    icon: r(998222).u,
                    size: "xs"
                }), a = !0 === t ? (0, o.jsx)(r(109939).sA, { ...r(760459).CV.actionCheckboxPropertyChecked
                }) : (0, o.jsx)(r(109939).sA, { ...r(760459).CV.actionCheckboxPropertyUnchecked
                });
                return (0, o.jsx)(r(219641).G, {
                    icon: n,
                    children: a
                })
            }
        },
        842476: (e, t, r) => {
            r.d(t, {
                Q: () => s
            });
            var o = r(296540);
            r(581454);
            var n = r(474848);
            let a = {
                buttonStyle: {
                    fontSize: r(986939).A.isMobile ? 16 : 12,
                    height: 20,
                    lineHeight: "unset",
                    marginInlineEnd: 0,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    textTransform: "lowercase",
                    color: r(986939).A.isMobile ? r(632079).Tj.palette.gray[900] : r(632079).Tj.palette.gray[500]
                },
                style0: {
                    height: 20
                }
            };

            function i({
                handleSelectOperator: e,
                selectedItem: t
            }) {
                return (0, n.jsx)(r(127322).A, {
                    style: a.style0,
                    innerButtonStyle: a.buttonStyle,
                    selectedTitle: (0, n.jsx)(r(109939).sA, { ...t.text
                    }),
                    renderMenuSections: t => [{
                        key: "selectNumberOperator",
                        items: Object.values(r(484989).$R).map(o => ({
                            key: o.value,
                            action: () => {
                                e(o), t.close()
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                title: (0, n.jsx)(r(109939).sA, { ...o.text
                                })
                            })
                        }))
                    }]
                })
            }
            let l = {
                header: {
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gridGap: "4px",
                    alignItems: "center"
                },
                propertyName: { ...r(699422).RC,
                    color: r(632079).Tj.text.primary
                }
            };

            function s(e) {
                let {
                    menuStore: t,
                    onClose: a,
                    propertyChangedFilter: s,
                    propertyId: u,
                    propertySchema: d,
                    shouldUseDefaultPropertyOperator: c,
                    parentRecordStore: p,
                    formulaTypecheckContextValues: m,
                    onCommit: g
                } = e, y = (0, o.useMemo)(() => {
                    if (c)
                        if ("number" === d.type) return "number_equals";
                        else return "changes_to_any"
                }, [d.type, c]), h = (0, o.useMemo)(() => {
                    if ("changes_to_any" !== s.operator && (0, r(818966).M)(s) && "is_empty" !== s.operator && (0, r(400473).gc)(s)) return s.value.value
                }, [s]), [f, x] = (0, o.useState)((0, r(484989).Qy)(y || s.operator)), [v, b] = (0, o.useState)(h), S = (0, o.useRef)(v), j = (0, o.useRef)(f), k = (0, o.useMemo)(() => {
                    if ((0, r(722371).O9)(v)) return {
                        type: "simple",
                        value: (0, r(272139).h)(v)
                    }
                }, [v]), A = (0, o.useCallback)(e => {
                    let t = (0, r(588688).M)(null == e ? void 0 : e.value);
                    b(t), S.current = t
                }, []), C = (0, o.useCallback)(e => {
                    x(e.value), j.current = e.value, r(484989).$R[e.value].hasInput || (b(void 0), S.current = void 0)
                }, []), M = (0, o.useCallback)(() => {
                    let e = S.current ? ? v,
                        t = j.current ? ? f,
                        o = (0, r(722371).O9)(e) ? {
                            operator: t,
                            value: {
                                type: "exact",
                                value: e
                            }
                        } : {
                            operator: "is_empty"
                        },
                        n = "partial";
                    "changes_to_any" === t ? n = !0 : "is_empty" === t && (n = !1), g({
                        anyOptionCheckState: n,
                        filter: o,
                        propertyId: u,
                        propertySchema: d
                    }), a()
                }, [f, v, a, g, u, d]), T = r(484989).$R[f], {
                    headerDiv: _
                } = (0, r(466736).A)({
                    currentSimpleFormulaValueTokens: [],
                    formulaTypecheckContextValues: m,
                    onChange: A,
                    onClose: M,
                    value: k,
                    parentRecordStore: p
                });
                return (0, n.jsx)(r(44426).A, {
                    type: "custom",
                    triggerActionMenuStore: t,
                    onDone: M,
                    onClose: a,
                    headerTitle: (0, n.jsxs)("div", {
                        style: l.header,
                        children: [(0, n.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => d.name,
                            children: e => (0, n.jsx)("div", { ...e,
                                style: l.propertyName,
                                children: d.name
                            })
                        }), (0, n.jsx)(i, {
                            selectedItem: T,
                            handleSelectOperator: C
                        })]
                    }),
                    subHeaderComponent: T.hasInput ? (0, n.jsx)(r(844565).A, {
                        children: _
                    }) : void 0,
                    customMenuProps: {
                        leftOuterStyle: {
                            flex: "unset"
                        },
                        rightOuterStyle: {
                            flex: "unset"
                        },
                        titleOuterStyle: {
                            flex: "unset"
                        },
                        topbarStyle: {
                            justifyContent: "space-between"
                        }
                    }
                })
            }
        },
        849339: (e, t, r) => {
            r.d(t, {
                H: () => u,
                hs: () => s,
                oG: () => i
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454), r(296540);
            var o = () => r(197018),
                n = r(474848);
            let a = {
                content: {
                    display: "flex",
                    flexWrap: "wrap",
                    whiteSpace: "pre"
                },
                propertyName: { ...r(699422).RC,
                    fontWeight: r(699422).Wy.medium
                },
                propertyValue: { ...r(699422).RC
                },
                propertyValueList: {
                    display: "flex",
                    flexBasis: "100%",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    columnGap: 4,
                    rowGap: 4
                },
                inlineActorTokenContainer: { ...r(699422).RC,
                    paddingBlockStart: 1
                },
                inlineActorToken: {
                    margin: 0,
                    paddingInlineEnd: 0
                }
            };

            function i(e) {
                let {
                    messageType: t
                } = e, o = (0, r(109939).tz)(), i = (0, r(682985).K8)(() => "action" === t ? function(e) {
                    let t, {
                            getRecordModel: o,
                            automationStore: a,
                            contextValues: i,
                            intl: s,
                            operator: u,
                            propertySchema: p,
                            styles: m,
                            value: g
                        } = e,
                        y = (0, n.jsx)("span", {
                            style: m.propertyName,
                            children: p.name
                        });
                    if ((null == g ? void 0 : g.type) === "formula") t = u ? r(760459).f4({
                        operator: u,
                        propertyName: y,
                        propertyValue: (0, n.jsx)(r(45453).g, {
                            returnType: {
                                type: "person"
                            }
                        })
                    }) : r(760459).Pb({
                        propertyName: y,
                        propertyValue: (0, n.jsx)(r(45453).g, {
                            returnType: {
                                type: "person"
                            }
                        })
                    });
                    else {
                        let e = l({
                                getRecordModel: o,
                                propertySchema: p,
                                value: g
                            }),
                            n = c(g, i),
                            h = d({
                                automationStore: a,
                                actorOrGroupModels: e,
                                values: n,
                                showAsList: !1,
                                styles: m
                            }),
                            f = e.length + n.length;
                        t = u ? r(760459).f4({ ...r(760459).f_({
                                elements: Array.isArray(h) ? h : [h],
                                intl: s
                            }),
                            operator: u,
                            propertyName: y
                        }) : 0 === f ? r(760459).NW({
                            propertyName: y
                        }) : r(760459).Pb({
                            propertyName: y,
                            propertyValue: h
                        })
                    }
                    return (0, n.jsx)(r(109939).sA, { ...t
                    })
                }({
                    getRecordModel: e.getRecordModel,
                    automationStore: e.automationStore,
                    contextValues: e.contextValues,
                    intl: o,
                    propertySchema: e.propertySchema,
                    styles: a,
                    value: e.value,
                    operator: e.operator
                }) : "trigger" === t ? function(e) {
                    let t, {
                        automationStore: o,
                        actorOrGroupModels: a,
                        propertySchema: i,
                        styles: l,
                        operator: s
                    } = e;
                    if (!a) return null;
                    let u = (0, n.jsx)("span", {
                            style: l.propertyName,
                            children: i.name
                        }),
                        c = d({
                            automationStore: o,
                            actorOrGroupModels: a,
                            values: [],
                            styles: l,
                            showAsList: !0
                        });
                    return t = 1 === a.length ? ("person_contains" === s ? r(760459).a9 : r(760459).dd)({
                        propertyName: u,
                        propertyValues: c
                    }) : ("person_contains" === s ? r(760459)._d : r(760459).Fp)({
                        propertyName: u,
                        propertyValues: c
                    }), (0, n.jsx)(r(109939).sA, { ...t
                    })
                }({
                    automationStore: e.automationStore,
                    actorOrGroupModels: e.actorOrGroupModels,
                    propertySchema: e.propertySchema,
                    operator: e.operator,
                    styles: a
                }) : void(0, r(722371).HB)(t), [t, e, o]);
                return {
                    tooltipTitle: (0, r(682985).K8)(() => "action" === t ? s({
                        getRecordModel: e.getRecordModel,
                        contextValues: e.contextValues,
                        intl: o,
                        propertySchema: e.propertySchema,
                        styles: a,
                        value: e.value
                    }) : "trigger" === t ? u({
                        actorOrGroupModels: e.actorOrGroupModels,
                        intl: o,
                        operator: e.operator,
                        propertySchema: e.propertySchema,
                        styles: a
                    }) : void(0, r(722371).HB)(t), [t, e, o]),
                    title: i,
                    styles: a
                }
            }

            function l(e) {
                let {
                    getRecordModel: t,
                    propertySchema: n,
                    value: a
                } = e, i = (0, r(465256).e)({
                    blockCreatorPointer: void 0,
                    propertySchema: n,
                    textValue: null == a ? void 0 : a.value,
                    convertGroupPointersToBeComposite: !0
                }), l = [];
                for (let e of i)
                    if ("space_permission_group" === e.table) {
                        let r = t(e);
                        if (!r) continue;
                        l.push({
                            type: "group",
                            model: r
                        })
                    } else l.push({
                        type: "actor",
                        model: (0, o().xC)({
                            getRecordModel: t,
                            pointer: e
                        })
                    });
                return l
            }

            function s(e) {
                let t, {
                        getRecordModel: o,
                        contextValues: a,
                        intl: i,
                        operator: s,
                        propertySchema: u,
                        styles: d,
                        value: p
                    } = e,
                    m = (0, n.jsx)("span", {
                        style: null == d ? void 0 : d.propertyName,
                        children: u.name
                    });
                if ((null == p ? void 0 : p.type) === "formula") t = s ? r(760459).f4({
                    operator: s,
                    propertyName: m,
                    propertyValue: (0, n.jsx)(r(45453).L, {})
                }) : r(760459).Pb({
                    propertyName: m,
                    propertyValue: (0, n.jsx)(r(45453).L, {})
                });
                else {
                    let e = l({
                            getRecordModel: o,
                            propertySchema: u,
                            value: p
                        }),
                        n = e.map(e => (0, r(119165).Mn)(i, e)),
                        d = c(p, a),
                        g = d.map(e => e.tooltipName ? ? e.name),
                        y = i.formatList([...n, ...g], {
                            style: "long",
                            type: "conjunction"
                        }),
                        h = e.length + d.length;
                    t = s ? r(760459).f4({
                        propertyName: m,
                        propertyValue: y,
                        operator: s
                    }) : 0 === h ? r(760459).NW({
                        propertyName: m
                    }) : r(760459).Pb({
                        propertyName: m,
                        propertyValue: y
                    })
                }
                return (0, n.jsx)(r(109939).sA, { ...t
                })
            }

            function u(e) {
                let t, {
                    actorOrGroupModels: o,
                    intl: a,
                    propertySchema: i,
                    styles: l,
                    operator: s
                } = e;
                if (!o) return null;
                let u = (0, n.jsx)("span", {
                        style: null == l ? void 0 : l.propertyName,
                        children: i.name
                    }),
                    d = o.map(e => (0, r(119165).Mn)(a, e)),
                    c = a.formatList(d, {
                        style: "long",
                        type: "conjunction"
                    });
                return t = 1 === o.length ? ("person_contains" === s ? r(760459).a9 : r(760459).dd)({
                    propertyName: u,
                    propertyValues: c
                }) : ("person_contains" === s ? r(760459)._d : r(760459).Fp)({
                    propertyName: u,
                    propertyValues: c
                }), (0, n.jsx)(r(109939).sA, { ...t
                })
            }

            function d(e) {
                let {
                    automationStore: t,
                    actorOrGroupModels: o,
                    styles: a,
                    showAsList: i = !0,
                    values: l
                } = e, s = o.filter(e => "actor" === e.type), u = o.filter(e => "group" === e.type), d = [...s.map((e, t) => (0, n.jsx)(r(72461).Ay, {
                    style: a.inlineActorToken,
                    actor: e.model,
                    showRemoveButton: !1,
                    format: r(696654).NY.Medium,
                    isSingle: !1,
                    hasPersonHoverCard: !1
                }, t)), ...u.map((e, o) => {
                    if (e.model) return (0, n.jsx)(r(11444).UISpacePermissionGroupToken, {
                        parentStore: t,
                        groupPointer: e.model.pointer,
                        format: r(986939).A.isMobile ? r(72461).Ay.Format.Large : r(72461).Ay.Format.Medium,
                        showRemoveButton: !1,
                        shouldShrink: !0,
                        isSingle: !0
                    }, o)
                }), ...l.map((e, t) => (0, n.jsx)(r(360625).F, {
                    style: a.inlineFormulaValue,
                    format: r(696654).NY.Medium,
                    isSingle: !1,
                    value: e
                }, t))];
                return 1 === d.length ? (0, n.jsx)("div", {
                    style: a.propertyValue,
                    children: d[0]
                }) : i ? (0, n.jsx)("ul", {
                    style: a.propertyValueList,
                    children: d.map((e, t) => (0, n.jsx)("li", {
                        children: (0, n.jsx)("div", {
                            style: a.propertyValue,
                            children: e
                        }, t)
                    }, t))
                }) : d.map((e, t) => (0, n.jsx)("div", {
                    style: a.inlineActorTokenContainer,
                    children: e
                }, t))
            }

            function c(e, t) {
                let o = new Set(r(247438).kNd(null == e ? void 0 : e.value).map(e => e.id)),
                    n = r(416901).FormulaContextValueKind.ContextValue;
                return t.filter(e => e.kind === n).filter(e => o.has(e.id))
            }
        },
        874297: (e, t, r) => {
            r.d(t, {
                F: () => o
            });

            function o(e) {
                let {
                    timelineViewTab: t,
                    timelineShowTable: r
                } = e;
                return "timeline" === t ? "timeline_properties" : r ? "timeline_table_properties" : void 0
            }
        },
        875840: (e, t, r) => {
            r.d(t, {
                AJ: () => d,
                CH: () => c,
                Xl: () => p,
                qR: () => s,
                sF: () => u,
                vu: () => i
            });
            var o = r(296540),
                n = r(474848);
            let a = {
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                iconWrap: {
                    background: r(632079).Tj.red.background.secondaryTranslucent,
                    borderRadius: 4
                },
                propertyType: {
                    color: r(632079).Tj.palette.red[700]
                }
            };

            function i(e) {
                let {
                    actionId: t,
                    actionMenu: o,
                    buttonPopupStore: i,
                    disabled: l,
                    onClick: s,
                    propertySchema: u
                } = e, p = d({
                    propertySchema: u
                }), m = c();
                return (0, n.jsx)(r(79442).z$, {
                    actionId: t,
                    actionMenu: o,
                    buttonPopupStore: i,
                    disabled: l,
                    onClick: s,
                    propertyType: u.type,
                    styles: a,
                    tooltip: m,
                    tooltipPlacement: "bottom",
                    children: p
                })
            }
            let l = {
                icon: {
                    fill: r(632079).Tj.red.text.accentPrimary
                },
                propertyType: {
                    color: r(632079).Tj.palette.red[700]
                }
            };

            function s(e) {
                let {
                    actionId: t,
                    actionMenu: o,
                    buttonPopupStore: a,
                    disabled: i,
                    onClick: s
                } = e, u = p();
                return (0, n.jsx)(r(79442).z$, {
                    actionId: t,
                    actionMenu: o,
                    buttonPopupStore: a,
                    disabled: i,
                    onClick: s,
                    styles: l,
                    tooltip: u,
                    children: u
                })
            }

            function u(e) {
                let {
                    actionId: t,
                    propertyId: a,
                    children: i
                } = e, l = (0, r(554988).j)(), s = (0, r(682985).uB)(void 0, r(510969).A), u = (0, o.useCallback)(() => s.reset(), [s]);
                return (0, n.jsx)(r(656252).A, {
                    buttonPopupStore: s,
                    popupType: l,
                    content: () => (0, n.jsx)(r(42196).a, {
                        actionId: t,
                        closeMenu: u,
                        propertyId: a
                    }),
                    children: i
                })
            }

            function d(e) {
                let {
                    propertySchema: t
                } = e;
                return (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "“{propertyName}” property was deleted",
                    id: "updateThisPageUnsupportedPropertyAction.updatedDeletedProperty.elementTitleText",
                    values: {
                        propertyName: t.name
                    }
                })
            }

            function c() {
                return (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "Restore property or delete to enable this automation",
                    id: "updateThisPageUnsupportedPropertyAction.updatedDeletedProperty.title"
                })
            }

            function p() {
                return (0, n.jsx)(r(109939).sA, {
                    defaultMessage: "The property was permanently deleted",
                    id: "updateThisPageUnsupportedPropertyAction.permanentlyDeleted.title"
                })
            }
        },
        877310: (e, t, r) => {
            r.d(t, {
                xB: () => v,
                Kn: () => C,
                ck: () => j,
                SA: () => S
            }), r(898992), r(737550);
            var o = r(296540);
            r(354520), r(581454);
            var n = r(474848);
            let a = {
                height: "initial"
            };

            function i({
                disabled: e,
                handleSelectOperator: t,
                selectedItem: l
            }) {
                let u = (0, r(960253).I)(() => ({
                        buttonStyle: {
                            fontSize: r(986939).A.isMobile ? 14 : 12,
                            height: 18,
                            lineHeight: "unset",
                            marginInlineEnd: 2,
                            marginInlineStart: 2,
                            paddingInlineStart: 2,
                            paddingInlineEnd: 2,
                            textTransform: "lowercase",
                            fontWeight: r(699422).Wy.semibold,
                            ...e ? {
                                opacity: "unset",
                                color: "unset"
                            } : {
                                color: r(632079).Tj.text.tertiary
                            }
                        }
                    }), [e]),
                    d = Object.values(s).filter(e => e.shown),
                    c = (0, o.useMemo)(() => s[l].shown ? s[l] : s.all, [l]);
                return (0, n.jsx)(r(127322).A, {
                    disabled: e,
                    alignmentToOrigin: "start",
                    style: a,
                    innerButtonStyle: u.buttonStyle,
                    selectedTitle: (0, n.jsx)(r(109939).sA, { ...c.text
                    }),
                    renderMenuSections: e => [{
                        key: "selectTriggerOperator",
                        items: d.map(o => ({
                            key: o.value,
                            action: () => {
                                t(o.value), e.close()
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                title: (0, n.jsx)(r(109939).sA, { ...o.text
                                })
                            })
                        }))
                    }]
                })
            }
            let l = (0, r(109939).YK)({
                    all: {
                        id: "automations.builderModal.propertyTrigger.all",
                        defaultMessage: "All"
                    },
                    any: {
                        id: "automations.builderModal.propertyTrigger.any",
                        defaultMessage: "Any"
                    }
                }),
                s = {
                    all: {
                        text: l.all,
                        value: "all",
                        shown: !0
                    },
                    some: {
                        text: l.any,
                        value: "some",
                        shown: !0
                    },
                    none: {
                        shown: !1,
                        value: "none"
                    },
                    any: {
                        shown: !1,
                        value: "any"
                    }
                };

            function u() {
                let e = (0, r(109939).tz)(),
                    {
                        automationStore: t
                    } = (0, r(605263).q8)();
                if (!p(t)) return null;
                let o = e.formatMessage(r(760459).CV.triggerButtonClicked, {
                    b: c
                });
                return (0, n.jsx)(r(511289).X, {
                    icon: r(345783).S,
                    tooltip: o,
                    children: o
                })
            }
            let d = {
                style0: {
                    fontWeight: r(699422).Wy.medium
                }
            };

            function c(e) {
                return (0, n.jsx)("span", {
                    style: d.style0,
                    children: e
                })
            }

            function p(e) {
                return (0, r(682985).K8)(() => !!(null == e ? void 0 : e.isTriggerType("button")), [e])
            }
            let m = {
                title: {
                    fontWeight: r(699422).Wy.medium
                }
            };

            function g() {
                let {
                    automationStore: e
                } = (0, r(605263).q8)(), {
                    removePageAddedTrigger: t
                } = (0, r(287134).p)(), o = (0, r(109939).tz)();
                if (!y(e)) return null;
                let a = r(760459).CH(o);
                return (0, n.jsx)(r(511289).X, {
                    icon: r(638501).plusSmallIcon,
                    onDelete: t,
                    tooltip: a,
                    children: (0, n.jsx)("div", {
                        style: m.title,
                        children: a
                    })
                })
            }

            function y(e) {
                return (0, r(682985).K8)(() => {
                    if (!(null != e && e.isTriggerType("event"))) return !1;
                    let t = e.getEventConfiguration();
                    return !!(null == t ? void 0 : t.pagesAdded)
                }, [e])
            }
            let h = {
                title: {
                    fontWeight: r(699422).Wy.medium,
                    display: "flex",
                    gap: 6,
                    alignItems: "center"
                },
                badge: {
                    backgroundColor: r(632079).Tj.background.tertiaryTranslucent,
                    color: r(632079).Tj.text.secondary,
                    marginInlineStart: 8
                },
                style0: {
                    flex: 0
                }
            };

            function f() {
                var e;
                let {
                    automationStore: t
                } = (0, r(605263).q8)(), {
                    removeRecurrenceTrigger: o
                } = (0, r(287134).p)(), a = (e = t, (0, r(682985).K8)(() => !!(null == e ? void 0 : e.isTriggerType("recurrence")), [e])), i = (0, r(682985).K8)(() => (0, r(524242).NH)(t), [t]);
                return a ? (0, n.jsx)(r(511289).X, {
                    icon: r(63974).o,
                    onDelete: o,
                    children: (0, n.jsxs)("div", {
                        style: h.title,
                        children: [(0, n.jsx)(r(109939).sA, {
                            id: "RecurrenceTrigger.title",
                            defaultMessage: "<span>Every </span>{frequency}",
                            values: {
                                frequency: (0, n.jsx)(x, {}),
                                span: e => (0, n.jsx)("span", {
                                    style: h.style0,
                                    children: e
                                })
                            }
                        }), i ? (0, n.jsx)(r(746434).E, {
                            style: h.badge,
                            content: (0, n.jsx)(r(4458).fI, {
                                alignItems: "center",
                                children: (0, n.jsx)(r(109939).sA, {
                                    defaultMessage: "Completed",
                                    id: "automationSummaryCard.completedToken"
                                })
                            })
                        }) : void 0]
                    })
                }) : null
            }

            function x() {
                let e = (0, r(109939).tz)(),
                    {
                        automationStore: t
                    } = (0, r(605263).q8)(),
                    {
                        changeRecurrenceSchedule: o
                    } = (0, r(287134).p)(),
                    a = (0, r(682985).K8)(() => t.getRecurrence(), [t]),
                    i = a ? (0, r(524242).LS)({
                        intl: e,
                        recurrence: a
                    }) : (0, n.jsx)(r(109939).sA, {
                        id: "RecurrenceTrigger.frequency",
                        defaultMessage: "frequency"
                    }),
                    l = (0, r(469684).$)({
                        recurrence: a,
                        onChange: o,
                        disabled: !1,
                        autoFocusIfNew: !0
                    });
                return (0, n.jsx)(r(656252).A, { ...l,
                    popupType: r(986939).A.isMobile ? r(656252).z.SlideUp : r(656252).z.Popup,
                    placementToOrigin: "bottom",
                    children: e => (0, n.jsx)(r(418232).x, { ...e,
                        isCompact: !0,
                        dropdownButtonType: "dropdown",
                        hasActionRequired: !(0, r(722371).O9)(a),
                        children: i
                    })
                })
            }
            let v = "automation-list-item automation-list-item-modal",
                b = (0, r(109939).YK)({
                    newTriggerLabel: {
                        defaultMessage: "New trigger",
                        id: "collectionSettings.editAutomationView.triggerSection.newPlaceholder"
                    },
                    addTriggerLabel: {
                        defaultMessage: "Add trigger",
                        id: "collectionSettings.editAutomationView.triggerSection.placeholder"
                    },
                    addTriggerAriaLabel: {
                        id: "collectionSettings.editAutomationView.addTrigger.iconButton",
                        defaultMessage: "Add trigger"
                    },
                    builderModalTriggerTitleWithOperatorButton: {
                        defaultMessage: "When {operatorButton} triggers occur",
                        id: "builderModal.editAutomationView.triggerSection.titleWithOperator"
                    },
                    buttonBuilderTriggerTitleOrNoTriggers: {
                        defaultMessage: "When",
                        id: "builderModal.editAutomationView.buttonBuilderTriggerSection.title"
                    }
                }),
                S = {
                    section: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        width: "100%"
                    },
                    header: {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row"
                    },
                    title: {
                        color: r(632079).Tj.text.tertiary,
                        fontSize: r(986939).A.isMobile ? 14 : 12,
                        lineHeight: 1.3,
                        fontWeight: r(699422).Wy.medium
                    },
                    wrap: {
                        position: "relative",
                        paddingInline: 1
                    },
                    list: {
                        display: "flex",
                        flexDirection: "column"
                    }
                };

            function j(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    className: v,
                    children: t
                })
            }

            function k(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    style: S.wrap,
                    children: (0, n.jsx)(r(4458).VP, {
                        children: t
                    })
                })
            }

            function A(e) {
                let {
                    variant: t,
                    hasAnyTriggers: a,
                    disabled: i
                } = e, l = (0, r(554988).j)(), s = (0, r(109939).tz)(), u = (0, o.useMemo)(() => ({
                    type: "eventTriggers"
                }), []);
                return (0, n.jsx)(r(656252).A, {
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    popupType: l,
                    content: e => (0, n.jsx)(r(44117).A, {
                        initialState: u,
                        buttonPopupParent: e
                    }),
                    children: e => "icon" === t ? (0, n.jsx)(r(374533).A, { ...e,
                        ariaLabel: s.formatMessage(a ? b.addTriggerLabel : b.newTriggerLabel),
                        icon: r(638501).plusSmallIcon,
                        disabled: i
                    }) : (0, n.jsx)(r(569638).F, { ...e,
                        ariaLabel: s.formatMessage(b.addTriggerAriaLabel),
                        icon: (0, n.jsx)(r(16275).I, {
                            icon: r(638501).plusSmallIcon,
                            size: "sm"
                        }),
                        disabled: i,
                        title: (0, n.jsx)(r(109939).sA, { ...!a ? b.newTriggerLabel : b.addTriggerLabel
                        })
                    })
                })
            }

            function C(e) {
                let {
                    isEditable: t
                } = e, {
                    showAnyPropertyTriggers: o,
                    showButtonClickedTrigger: a,
                    showPageAddedTrigger: i,
                    showRecurrenceTrigger: l
                } = function() {
                    let {
                        automationStore: e
                    } = (0, r(605263).q8)(), t = p(e), o = y(e);
                    return {
                        showAnyPropertyTriggers: (0, r(629177).CD)(e),
                        showPageAddedTrigger: o,
                        showButtonClickedTrigger: t,
                        showRecurrenceTrigger: (0, r(682985).K8)(() => !!e.isTriggerType("recurrence"), [e])
                    }
                }(), s = o || a || i || l, d = !l, {
                    contextType: c
                } = (0, r(605263).q8)();
                return (0, n.jsxs)("section", {
                    style: S.section,
                    children: [(0, n.jsx)("header", {
                        style: S.header,
                        children: (0, n.jsx)("div", {
                            style: S.title,
                            children: "button_property" === c || "button_block" === c ? (0, n.jsx)(r(109939).sA, { ...b.buttonBuilderTriggerTitleOrNoTriggers
                            }) : (0, n.jsx)(M, {
                                disabled: !t
                            })
                        })
                    }), (0, n.jsxs)(k, {
                        children: [a ? (0, n.jsx)(u, {}) : void 0, i ? (0, n.jsx)(g, {}) : void 0, o ? (0, n.jsx)(r(629177).Js, {}) : void 0, t && d || !s ? (0, n.jsx)(A, {
                            hasAnyTriggers: s,
                            variant: "button",
                            disabled: !t
                        }) : void 0, l ? (0, n.jsx)(f, {}) : void 0]
                    })]
                })
            }

            function M({
                disabled: e
            }) {
                let {
                    automationStore: t
                } = (0, r(605263).q8)(), {
                    updateTriggerOperator: a
                } = (0, r(287134).p)(), l = (0, r(682985).K8)(() => {
                    if (!(null != t && t.isTriggerType("event"))) return "some";
                    let e = t.getEventConfiguration();
                    return (null == e ? void 0 : e.pagePropertiesEdited.type) || "all"
                }, [t]), s = (0, r(682985).K8)(() => {
                    var e, o;
                    if (!(null != t && t.isTriggerType("event"))) return 0;
                    let n = t.getEventConfiguration(),
                        a = null == n ? void 0 : n.pagePropertiesEdited;
                    return a && "any" !== a.type && "none" !== a.type ? "all" === a.type ? (null == (e = a.all) ? void 0 : e.length) ? ? 0 : "some" === a.type ? (null == (o = a.some) ? void 0 : o.length) ? ? 0 : void(0, r(722371).HB)(a) : 0
                }, [t]), u = (0, o.useCallback)(e => {
                    a(e)
                }, [a]);
                return (0, n.jsx)(r(4458).fI, {
                    alignItems: "center",
                    flexWrap: "wrap",
                    height: 24,
                    children: (0, n.jsx)(r(109939).sA, { ...s > 0 ? b.builderModalTriggerTitleWithOperatorButton : b.buttonBuilderTriggerTitleOrNoTriggers,
                        values: {
                            operatorButton: (0, n.jsx)(i, {
                                disabled: e,
                                handleSelectOperator: u,
                                selectedItem: l
                            })
                        }
                    })
                })
            }
        },
        887106: (e, t, r) => {
            r.d(t, {
                LN: () => n,
                W: () => a,
                lD: () => i,
                zQ: () => l
            }), r(296540);
            var o = r(474848);
            let n = {
                    checkbox_is_not: "checkbox",
                    checkbox_is: "checkbox",
                    enum_contains: "multi_select",
                    enum_does_not_contain: "multi_select",
                    enum_contains_all: "multi_select",
                    enum_is_not: "select",
                    enum_is: "select",
                    number_does_not_equal: "number",
                    number_equals: "number",
                    number_greater_than_or_equal_to: "number",
                    number_greater_than: "number",
                    number_less_than_or_equal_to: "number",
                    number_less_than: "number",
                    person_contains: "person",
                    person_does_not_contain: "person",
                    relation_contains: "relation",
                    relation_does_not_contain: "relation",
                    status_is_not: "status",
                    status_is: "status",
                    string_contains: "text",
                    string_does_not_contain: "text",
                    string_ends_with: "text",
                    string_is_not: "text",
                    string_is: "text",
                    string_starts_with: "text"
                },
                a = {
                    phone_number: "text",
                    title: "text",
                    url: "text",
                    email: "text"
                },
                i = {
                    relation: ["relation"],
                    checkbox: ["checkbox"],
                    number: ["number"],
                    person: ["person"],
                    multi_select: ["multi_select"],
                    select: ["select"],
                    status: ["status"],
                    text: ["email", "phone_number", "text", "url"]
                };

            function l(e) {
                return (0, o.jsx)(r(109939).sA, { ...r(760459).o7({
                        propertyName: e.name
                    })
                })
            }
        },
        911371: (e, t, r) => {
            r.d(t, {
                $: () => s
            }), r(898992), r(354520), r(581454);
            var o = r(296540),
                n = r(474848);
            let a = {
                buttonStyle: {
                    fontSize: r(986939).A.isMobile ? 16 : 12,
                    height: 20,
                    lineHeight: "unset",
                    marginInlineEnd: 0,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    textTransform: "lowercase",
                    color: r(986939).A.isMobile ? r(632079).Tj.palette.gray[900] : r(632079).Tj.palette.gray[500]
                },
                style0: {
                    height: 20
                }
            };

            function i({
                handleSelectOperator: e,
                selectedItem: t,
                type: l
            }) {
                let s = (0, o.useMemo)(() => {
                    let e = "multi_select" === l,
                        t = "select" === l;
                    return Object.values(r(24458)._c).filter(r => e ? r.isMulti : t ? r.isSingle : void 0)
                }, [l]);
                return (0, n.jsx)(r(127322).A, {
                    style: a.style0,
                    innerButtonStyle: a.buttonStyle,
                    selectedTitle: (0, n.jsx)(r(109939).sA, { ...t.text
                    }),
                    renderMenuSections: t => [{
                        key: "selectSelectOperator",
                        items: s.map(o => ({
                            key: o.value,
                            action: () => {
                                e(o), t.close()
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                title: (0, n.jsx)(r(109939).sA, { ...o.text
                                })
                            })
                        }))
                    }]
                })
            }
            let l = {
                header: {
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gap: 2,
                    alignItems: "center"
                },
                propertyName: { ...r(699422).RC
                },
                style0: { ...!r(986939).A.isMobile && {
                        paddingTop: 0,
                        paddingInlineEnd: 8,
                        paddingBottom: 4,
                        paddingInlineStart: 8
                    }
                }
            };

            function s(e) {
                let {
                    menuStore: t,
                    onClose: a,
                    propertyChangedFilter: s,
                    propertyId: u,
                    propertySchema: d,
                    shouldUseDefaultPropertyOperator: c,
                    onCommit: p
                } = e, {
                    isAndroid: m
                } = (0, r(533992).Y0)(), g = (0, r(109939).tz)(), y = (0, o.useMemo)(() => {
                    if (c)
                        if ("select" === d.type) return "enum_is";
                        else if ("multi_select" === d.type) return "enum_contains";
                    else return "changes_to_any"
                }, [d.type, c]), h = (0, o.useMemo)(() => {
                    if ("changes_to_any" === s.operator) return (d.options ? ? []).map(e => ({
                        type: "exact",
                        value: e.value
                    }));
                    if (!(0, r(400473).v0)(s) && !(0, r(400473).as)(s)) return [];
                    if ((0, r(400473).gc)(s)) {
                        let e = (d.options ? ? []).map(e => e.value);
                        return (Array.isArray(s.value) ? s.value : [s.value]).filter(t => (0, r(722371).O9)(t.value) && e.includes(t.value))
                    }
                    return []
                }, [d, s]), [f, x] = (0, o.useState)(h), [v, b] = (0, o.useState)((0, r(24458).N6)(y || s.operator)), [S, j] = (0, o.useState)(""), k = r(24458)._c[v], A = (0, o.useCallback)(e => {
                    b(e.value)
                }, []), C = (0, o.useMemo)(() => {
                    let e = d.options ? ? [];
                    return "changes_to_any" === v || 0 !== e.length && 0 !== f.length && (f.length === e.length || "partial")
                }, [d.options, v, f]), M = (0, o.useMemo)(() => (d.options ? ? []).map(e => ({
                    type: "exact",
                    value: e.value
                })), [d]), T = (0, o.useMemo)(() => !0 === C ? [] : f.map(e => {
                    if (!e.value || !d.options) return;
                    let t = (0, r(561872).jy)(d.options, e.value);
                    if (t) return (0, n.jsx)(r(593100).O, {
                        format: r(986939).A.isMobile ? r(696654).NY.Large : r(696654).NY.Small,
                        isSingle: !1,
                        value: t.value,
                        color: t.color,
                        showRemoveButton: !0,
                        onClickRemove: () => {
                            x(r(381453).FF(f, e))
                        }
                    }, t.id)
                }).filter(r(722371).O9), [C, d.options, f]), _ = (0, o.useMemo)(() => (0, r(69906).r9)({
                    query: S,
                    propertySchema: d,
                    selectedValues: f,
                    updateValue: e => {
                        j(""), x(e)
                    },
                    isMobile: r(986939).A.isMobile,
                    styles: {},
                    isFormEditorView: !1
                }), [d, S, f]), I = (0, o.useRef)(() => {});
                (0, o.useEffect)(() => {
                    I.current = () => {
                        let e, t = "partial";
                        if ("changes_to_any" === v) t = !0, e = {
                            operator: "changes_to_any"
                        };
                        else if ("is_empty" === v) t = !1, e = {
                            operator: "is_empty"
                        };
                        else {
                            let r = Array.isArray(f) ? f : [f];
                            0 === r.length ? (t = !1, e = {
                                operator: "is_empty"
                            }) : e = {
                                operator: v,
                                value: r
                            }
                        }
                        p({
                            anyOptionCheckState: t,
                            propertyId: u,
                            filter: e,
                            propertySchema: d
                        }), a()
                    }
                }, [a, p, u, d, v, f]);
                let P = [{
                    key: "search",
                    items: [{
                        key: "input",
                        action: () => {},
                        render: e => (0, n.jsx)("div", {
                            style: l.style0,
                            children: (0, n.jsx)(r(160319).Ay, { ...e,
                                focusInitial: !0,
                                onClick: void 0,
                                focusAfterAnimation: !0,
                                format: r(160319).le.FilterValue,
                                tokens: T,
                                placeholder: C ? g.formatMessage({
                                    defaultMessage: "Any option",
                                    id: "selectPropertyChangedFilter.inputPlaceholder.anyOption"
                                }) : g.formatMessage({
                                    defaultMessage: "Select one or more options…",
                                    id: "selectPropertyChangedFilter.inputPlaceholder.searchPlaceholder"
                                }),
                                onRemoveLastToken: () => {
                                    x(f.slice(0, f.length - 1))
                                },
                                onClearButtonClick: () => {
                                    x([])
                                },
                                value: S,
                                onChange: e => {
                                    j(e.target.value)
                                },
                                dontShowBorderBottom: m,
                                showClearButton: !0
                            })
                        })
                    }]
                }, {
                    key: "any",
                    items: [{
                        key: "any-option-item",
                        action: () => {
                            !0 === C ? x([]) : !1 === C || "partial" === C ? x(M) : (0, r(722371).HB)(C), j("")
                        },
                        render: e => (0, n.jsx)(r(95582).A, { ...e,
                            icon: (0, n.jsx)(r(349050).S, {
                                checked: C,
                                size: 14,
                                onClick: e.onClick
                            }),
                            title: (0, n.jsx)(r(109939).sA, {
                                id: "selectPropertyChangedFilter.anyOption.title",
                                defaultMessage: "Any option"
                            })
                        })
                    }],
                    render: e => (0, n.jsx)(r(844565).A, { ...e,
                        topBorder: !0
                    })
                }, _.length > 0 ? {
                    key: "options",
                    items: _,
                    render: e => (0, n.jsx)(r(844565).A, { ...e,
                        topBorder: !0
                    })
                } : void 0].filter(e => (0, r(722371).O9)(e));
                return (0, n.jsx)(r(44426).A, {
                    type: "default",
                    triggerActionMenuStore: t,
                    onDone: () => {
                        I.current()
                    },
                    onClose: a,
                    sections: k.hasInput ? P : [],
                    headerTitle: (0, n.jsxs)("div", {
                        style: l.header,
                        children: [(0, n.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => d.name,
                            children: e => (0, n.jsx)("div", { ...e,
                                style: l.propertyName,
                                children: d.name
                            })
                        }), (0, n.jsx)(i, {
                            handleSelectOperator: A,
                            selectedItem: k,
                            type: "multi_select" === d.type ? "multi_select" : "select"
                        })]
                    }),
                    customMenuProps: {
                        leftOuterStyle: {
                            flex: "unset"
                        },
                        rightOuterStyle: {
                            flex: "unset"
                        },
                        titleOuterStyle: {
                            flex: "unset"
                        },
                        topbarStyle: {
                            justifyContent: "space-between"
                        }
                    }
                })
            }
        },
        913146: (e, t, r) => {
            r.d(t, {
                E: () => s
            });
            var o = r(296540);
            r(581454);
            var n = r(474848);
            let a = {
                buttonStyle: {
                    fontSize: r(986939).A.isMobile ? 16 : 12,
                    height: 20,
                    lineHeight: "unset",
                    marginInlineEnd: 0,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    textTransform: "lowercase",
                    color: r(986939).A.isMobile ? r(632079).Tj.palette.gray[900] : r(632079).Tj.palette.gray[500]
                },
                style0: {
                    height: 20
                }
            };

            function i({
                handleSelectOperator: e,
                selectedItem: t
            }) {
                return (0, n.jsx)(r(127322).A, {
                    style: a.style0,
                    innerButtonStyle: a.buttonStyle,
                    selectedTitle: (0, n.jsx)(r(109939).sA, { ...t.text
                    }),
                    renderMenuSections: t => [{
                        key: "selectTextOperator",
                        items: Object.values(r(552535).bK).map(o => ({
                            key: o.value,
                            action: () => {
                                e(o), t.close()
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                title: (0, n.jsx)(r(109939).sA, { ...o.text
                                })
                            })
                        }))
                    }]
                })
            }
            let l = {
                header: {
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gridGap: "2px",
                    alignItems: "center"
                },
                propertyName: { ...r(699422).RC,
                    color: r(632079).Tj.text.secondary
                }
            };

            function s(e) {
                let {
                    menuStore: t,
                    onClose: a,
                    propertyChangedFilter: s,
                    propertyId: u,
                    propertySchema: d,
                    shouldUseDefaultPropertyOperator: c,
                    parentRecordStore: p,
                    formulaTypecheckContextValues: m,
                    onCommit: g
                } = e, y = (0, o.useMemo)(() => {
                    if (c)
                        if ((0, r(561872).DY)(d.type)) return "string_is";
                        else return "changes_to_any"
                }, [d.type, c]), h = (0, o.useMemo)(() => {
                    if ("changes_to_any" !== s.operator && (0, r(995906).Y)(s) && "is_empty" !== s.operator && (0, r(400473).gc)(s)) return s.value.value
                }, [s]), [f, x] = (0, o.useState)(() => (0, r(552535).mK)(y || s.operator)), [v, b] = (0, o.useState)(h), S = (0, o.useRef)(v), j = (0, o.useRef)(f), k = (0, o.useMemo)(() => {
                    if (v) return {
                        type: "simple",
                        value: r(247438).x9d(v)
                    }
                }, [v]), A = (0, o.useCallback)(e => {
                    let t = r(247438).k4p(null == e ? void 0 : e.value).trim() || void 0;
                    b(t), S.current = t
                }, []), C = (0, o.useCallback)(e => {
                    x(e.value), j.current = e.value, r(552535).bK[e.value].hasInput || (b(void 0), S.current = void 0)
                }, []), M = (0, o.useCallback)(() => {
                    let e = S.current || v,
                        t = j.current || f,
                        o = "partial";
                    "changes_to_any" === t ? o = !0 : "is_empty" === t && (o = !1);
                    let n = (0, r(722371).O9)(e) ? {
                        operator: t,
                        value: {
                            type: "exact",
                            value: e
                        }
                    } : {
                        operator: o ? "changes_to_any" : "is_empty"
                    };
                    g({
                        anyOptionCheckState: o,
                        filter: n,
                        propertyId: u,
                        propertySchema: d
                    }), a()
                }, [a, g, u, d, f, v]), T = r(552535).bK[f], {
                    headerDiv: _
                } = (0, r(153169).A)({
                    currentSimpleFormulaValueTokens: [],
                    disableEmojiCommands: !0,
                    disableFormulas: !0,
                    disableFormattingAndMentions: !0,
                    disableMobileActionBar: !0,
                    formulaTypecheckContextValues: m,
                    onChange: A,
                    onClose: M,
                    parentRecordStore: p,
                    value: k
                });
                return (0, n.jsx)(r(44426).A, {
                    type: "custom",
                    triggerActionMenuStore: t,
                    onDone: M,
                    onClose: a,
                    headerTitle: (0, n.jsxs)("div", {
                        style: l.header,
                        children: [(0, n.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => d.name,
                            children: e => (0, n.jsx)("div", { ...e,
                                style: l.propertyName,
                                children: d.name
                            })
                        }), (0, n.jsx)(i, {
                            selectedItem: T,
                            handleSelectOperator: C
                        })]
                    }),
                    subHeaderComponent: T.hasInput ? (0, n.jsx)(r(844565).A, {
                        children: _
                    }) : void 0,
                    customMenuProps: {
                        leftOuterStyle: {
                            flex: "unset"
                        },
                        rightOuterStyle: {
                            flex: "unset"
                        },
                        titleOuterStyle: {
                            flex: "unset"
                        },
                        topbarStyle: {
                            justifyContent: "space-between"
                        }
                    }
                })
            }
        },
        966253: (e, t, r) => {
            r.d(t, {
                E: () => o
            }), r(16280), r(898992), r(672577);

            function o(e) {
                let {
                    action: t,
                    currentSimpleFormulaValueTokens: o,
                    onCheckboxClick: n,
                    setCurrentTokens: a,
                    value: i
                } = e;
                if (i.kind !== r(416901).FormulaContextValueKind.ContextValue) throw Error("Not implemented yet.");
                let l = !!o.find(e => (0, r(591864).isAnnotationSimpleValueToken)(e) && (0, r(247438).s1Y)(e) && (0, r(247438).iVq)(e).id === i.id),
                    s = (0, r(247438).CA$)({
                        id: i.id
                    });
                return {
                    annotation: s,
                    isChecked: l,
                    itemAction: () => {
                        "append" === t ? a(l ? (0, r(591864).simpleFormulaValueWithoutToken)(o, s) : [...o, s]) : a([s]), null == n || n()
                    }
                }
            }
        },
        982520: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.66 2.37 8.68 11.26",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M4.29 2.375a.625.625 0 0 0-.42 1.087L8.846 8l-4.978 4.538a.625.625 0 0 0 .421 1.087h7.42a.625.625 0 0 0 0-1.25H5.903l4.292-3.913a.625.625 0 0 0 0-.924L5.903 3.625h5.807a.625.625 0 0 0 0-1.25z"
                    })
                },
                n = (0, r(104509).wt)("sumSmall", o, "small")
        },
        994056: (e, t, r) => {
            r.d(t, {
                y: () => s
            }), r(898992), r(354520), r(581454);
            var o = r(296540),
                n = r(474848);
            let a = {
                buttonStyle: {
                    fontSize: r(986939).A.isMobile ? 16 : 12,
                    height: 20,
                    lineHeight: "unset",
                    marginInlineEnd: 0,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    textTransform: "lowercase",
                    color: r(986939).A.isMobile ? r(632079).Tj.palette.gray[900] : r(632079).Tj.palette.gray[500]
                },
                style0: {
                    height: 20
                }
            };

            function i({
                handleSelectOperator: e,
                selectedItem: t
            }) {
                return (0, n.jsx)(r(127322).A, {
                    style: a.style0,
                    innerButtonStyle: a.buttonStyle,
                    selectedTitle: (0, n.jsx)(r(109939).sA, { ...t.text
                    }),
                    renderMenuSections: t => [{
                        key: "selectPersonOperator",
                        items: Object.values(r(119165).fJ).map(o => ({
                            key: o.value,
                            action: () => {
                                e(o), t.close()
                            },
                            render: e => (0, n.jsx)(r(95582).A, { ...e,
                                title: (0, n.jsx)(r(109939).sA, { ...o.text
                                })
                            })
                        }))
                    }]
                })
            }
            let l = {
                header: {
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    overflow: "hidden"
                },
                propertyName: { ...r(699422).RC
                }
            };

            function s(e) {
                var t, a;
                let {
                    collectionStore: s,
                    formulaTypecheckContextValues: u,
                    menuStore: d,
                    onClose: c,
                    onCommit: p,
                    parentRecordStore: m,
                    propertyChangedFilter: g,
                    propertyId: y,
                    propertySchema: h,
                    shouldUseDefaultPropertyOperator: f
                } = e, x = (0, o.useMemo)(() => {
                    if (f) return "person_contains"
                }, [f]), v = (0, o.useMemo)(() => {
                    if ("changes_to_any" !== g.operator) return (0, r(784923).I)(g) && "is_empty" !== g.operator && (0, r(400473).gc)(g) ? (0, r(19484).W)(g) : []
                }, [g]), [b, S] = (0, o.useState)(() => {
                    if (!v) return;
                    let e = v.map(e => {
                        if ("exact" === e.type) return e.value
                    }).filter(r(722371).O9);
                    return {
                        action: "replace",
                        value: {
                            type: "simple",
                            value: (0, r(383431).h)(e)
                        }
                    }
                }), [j, k] = (0, o.useState)((0, r(119165).Oj)(x || g.operator)), A = (0, r(533992).v3)(), C = (0, r(723240).r)(), M = ((0, r(855361).S)({
                    environment: A,
                    spaceId: C
                }) ? ? 0) + ((0, r(199572).f)({
                    environment: A,
                    spaceId: C
                }) ? ? 0), T = (0, o.useRef)(), _ = (0, o.useRef)(), [I, P] = (0, o.useState)(!v), w = (0, o.useMemo)(() => {
                    var e;
                    return (0, r(591864).fromSimpleFormulaArrayValue)(null == b || null == (e = b.value) ? void 0 : e.value)
                }, [null == b || null == (t = b.value) ? void 0 : t.value]), V = (0, o.useMemo)(() => {
                    var e;
                    return function(e) {
                        let {
                            allChecked: t,
                            formulaValue: o,
                            numTotalActors: n
                        } = e;
                        return o && o.length > 0 ? (0, r(591864).fromSimpleFormulaArrayValue)(o).length === n || "partial" : !!t
                    }({
                        allChecked: I,
                        formulaValue: null == b || null == (e = b.value) ? void 0 : e.value,
                        numTotalActors: M,
                        propertySchema: h
                    })
                }, [I, null == b || null == (a = b.value) ? void 0 : a.value, h, M]), F = (0, o.useMemo)(() => ({
                    collectionStore: s,
                    property: y,
                    type: "collection"
                }), [s, y]), R = (0, o.useCallback)(() => {
                    let e = T.current || (null == b ? void 0 : b.value),
                        t = _.current || j,
                        o = e ? (0, r(465256).e)({
                            textValue: e.value,
                            propertySchema: h,
                            blockCreatorPointer: void 0
                        }) : void 0,
                        n = o && o.length > 0 ? {
                            operator: t,
                            value: o.map(e => ({
                                type: "exact",
                                value: e
                            }))
                        } : {
                            operator: "person_contains" === t && I ? "changes_to_any" : "is_empty"
                        },
                        a = "partial";
                    "changes_to_any" === t ? a = !0 : "is_empty" === t && (a = !1), p({
                        anyOptionCheckState: a,
                        filter: n,
                        propertyId: y
                    }), c()
                }, [I, null == b ? void 0 : b.value, c, p, j, y, h]), E = (0, o.useCallback)(e => {
                    T.current = e, S(e ? {
                        action: "replace",
                        value: e
                    } : void 0), 1 === h.limit && R()
                }, [R, h.limit]), B = (0, o.useCallback)(() => {
                    V ? (P(!1), w.length > 0 && E(void 0)) : P(!0)
                }, [V, w.length, E]), N = (0, o.useCallback)(e => {
                    _.current = e.value, k(e.value), r(119165).fJ[e.value].hasInput || E(void 0)
                }, [E]), O = r(119165).fJ[j], D = O.hasInput, W = !I || w.length > 0, {
                    headerDiv: L,
                    innerComponents: z
                } = (0, r(16400).A)({
                    currentSimpleFormulaValueTokens: w,
                    formulaTypecheckContextValues: u,
                    formulaValueContext: F,
                    isDisabled: !W,
                    limit: void 0,
                    onChange: E,
                    onClose: c,
                    showClearButton: !0,
                    showGenericHeader: !1,
                    showInputMenuItem: !0,
                    value: null == b ? void 0 : b.value,
                    parentRecordStore: m
                }), K = [O.hasInput ? {
                    key: "any",
                    render: e => (0, n.jsx)(r(844565).A, { ...e,
                        topBorder: !1
                    }),
                    items: [{
                        key: "any-option-item",
                        action: B,
                        render: () => (0, n.jsxs)(n.Fragment, {
                            children: [L, (0, n.jsx)(r(95582).A, {
                                onClick: B,
                                focused: !0,
                                icon: (0, n.jsx)(r(349050).S, {
                                    onClick: B,
                                    checked: !0 === V,
                                    size: 14
                                }),
                                title: (0, n.jsx)(r(109939).sA, {
                                    id: "automationEventTriggerPropertyChangedFilterMenu.anyOption.title",
                                    defaultMessage: "Any option"
                                })
                            })]
                        })
                    }]
                } : void 0, D ? {
                    key: "inner",
                    render: e => r(986939).A.isMobile ? z : (0, n.jsx)(r(844565).A, { ...e,
                        topBorder: !0
                    }),
                    items: [{
                        key: "inner-components-item",
                        action: B,
                        render: () => z
                    }]
                } : void 0].filter(r(722371).O9);
                return (0, n.jsx)(r(44426).A, {
                    type: "default",
                    triggerActionMenuStore: d,
                    onDone: R,
                    onClose: c,
                    headerTitle: (0, n.jsxs)("div", {
                        style: l.header,
                        children: [(0, n.jsx)(r(51831).m, {
                            placement: "bottom",
                            content: () => h.name,
                            children: e => (0, n.jsx)("div", { ...e,
                                style: l.propertyName,
                                children: h.name
                            })
                        }), (0, n.jsx)(i, {
                            handleSelectOperator: N,
                            selectedItem: O
                        })]
                    }),
                    sections: K,
                    customMenuProps: {
                        leftOuterStyle: {
                            flex: "unset"
                        },
                        rightOuterStyle: {
                            flex: "unset"
                        },
                        titleOuterStyle: {
                            flex: "unset"
                        },
                        topbarStyle: {
                            justifyContent: "space-between"
                        }
                    }
                })
            }
        },
        998222: (e, t, r) => {
            r.d(t, {
                u: () => n
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zM3.625 4.25c0-.345.28-.625.625-.625h7.5c.345 0 .625.28.625.625v7.5c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625z"
                    })
                },
                n = (0, r(104509).wt)("squareSmall", o, "small")
        }
    }
]);