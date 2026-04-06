"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [51386], {
        16131: (e, t, o) => {
            o.d(t, {
                q: () => i
            }), o(16280), o(296540);
            var r = o(474848);
            async function i(e) {
                let t, i, {
                        environment: l,
                        collectionContextStore: a,
                        property: s,
                        handleDeleteAccept: u,
                        isPermanentlyDelete: p
                    } = e,
                    c = a.collectionStore();
                if (!c || c.isTypedProperty(s) && await o(519995).nD({
                        environment: l,
                        property: s,
                        collectionStore: c,
                        collectionViewBlockStore: a.collectionViewBlockStore(),
                        theme: e.theme,
                        themeMode: e.themeMode,
                        from: e.from
                    })) return;
                let m = (0, o(717673).R5)({
                    environment: l,
                    collectionStore: c,
                    propertyId: s
                });
                if (m.length > 0) {
                    if ((0, o(829808).E_)({
                            environment: l,
                            collectionStore: c,
                            propertyId: s,
                            compoundTemplateInstancesToDelete: m,
                            collectionViewStore: a.collectionViewStore(),
                            from: e.from
                        })) return
                } else if (((0, o(843641).k$)(s) || (0, o(843641).Do)({
                        collectionStore: c,
                        propertyId: s
                    })) && (0, o(843641).aF)(c) && (0, o(829808).I5)({
                        environment: l,
                        collectionStore: c,
                        propertyId: s,
                        collectionViewStore: a.collectionViewStore(),
                        from: e.from
                    })) return;
                let y = a.normalizedSchemaStore.state,
                    f = y[s],
                    g = o(856235).pg(a, f);
                if (await (null == g ? void 0 : g.load()), await d({
                        handleDeleteAccept: u,
                        environment: l,
                        collectionContextStore: a,
                        collectionStore: c,
                        targetCollectionStore: g,
                        propertyId: s,
                        propertySchema: f
                    })) return;
                let _ = [{
                    label: p ? (0, r.jsx)(o(109939).sA, {
                        id: "database.tableHeaderCell.deleteProperty.modal.confirmPermanentlyDeleteButton",
                        defaultMessage: "Permanently delete"
                    }) : (0, r.jsx)(o(109939).sA, {
                        id: "database.viewSettings.propertyTab.deleteProperty.modal.confirmButton",
                        defaultMessage: "Delete"
                    }),
                    color: "red",
                    onAccept: u
                }];
                if ((null == f ? void 0 : f.type) === "auto_increment_id") t = o(856235).me(y) ? (0, r.jsx)(o(109939).sA, {
                    id: "database.tableHeaderCell.deleteUniqueIdWithGithubProperty.modal.prompt",
                    defaultMessage: "You will no longer be able to link new GitHub PRs and status automations will stop working."
                }) : (0, r.jsx)(o(109939).sA, {
                    id: "database.tableHeaderCell.deleteUniqueIdProperty.modal.prompt",
                    defaultMessage: "The ID property will be permanently deleted."
                });
                else if ((null == f ? void 0 : f.type) === "status") {
                    let e = o(856235).AX(y);
                    if (e) {
                        let i = e.connectedRelation.automation;
                        i && i[s] && (t = (0, r.jsx)(o(109939).sA, {
                            id: "database.tableHeaderCell.deleteStatusProperty.modal.prompt",
                            defaultMessage: "Deleting this status property will stop the GitHub Pull Requests status automation."
                        }))
                    }
                } else if (f && (0, o(425985).U)(f)) {
                    let e = (0, o(204903).mh)(y, s);
                    if (e.length > 0) {
                        let i = e.length;
                        t = (0, r.jsx)(o(109939).sA, {
                            id: "database.tableHeaderCell.deleteProperty.modal.rollupWarning",
                            defaultMessage: (0, o(109939).LS)("rollupCount", {
                                one: "This will also delete {rollupCount} dependent property.",
                                other: "This will also delete {rollupCount} dependent properties."
                            }),
                            values: {
                                rollupCount: i
                            }
                        }), _ = [{ ..._[0],
                            onAccept: () => {
                                let e = c.getSpaceId();
                                (0, o(377796).createAndCommit)({
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    userAction: "collectionPropertyActions.showDeletePropertyDialog",
                                    environment: l,
                                    canUndo: !0,
                                    perform: e => {
                                        o(377573).I9({
                                            environment: l,
                                            collectionStore: c,
                                            targetCollectionStore: g,
                                            property: s,
                                            transaction: e,
                                            permanentlyDelete: p
                                        })
                                    }
                                })
                            }
                        }]
                    }
                } else f && (0, o(944209).dR)({
                    propertyId: s,
                    propertyType: f.type,
                    permissionItems: c.getPermissionItems()
                }) && (i = o(962299).A.formatMessage(o(944209).DZ.deletePropertyTypeWarningMessage), t = o(962299).A.formatMessage(o(944209).DZ.deletePropertyTypeWarningDescription));
                o(647095).ui({
                    message: i || n(c),
                    description: p ? (0, r.jsxs)(r.Fragment, {
                        children: [t, " ", (0, r.jsx)(o(109939).sA, {
                            id: "database.tableHeaderCell.deleteProperty.modal.permanentlyDeleteDescription",
                            defaultMessage: "This property is too large to be moved to <b>Deleted properties</b>. It will be permanently deleted.",
                            values: {
                                b: e => (0, r.jsx)("b", {
                                    children: e
                                })
                            }
                        })]
                    }) : t,
                    showCancel: !0,
                    keepFocus: !0,
                    items: _,
                    mode: "wide",
                    innerStyle: {
                        textAlign: "center"
                    }
                })
            }
            let l = {
                display: "inline"
            };

            function a(e, t) {
                return (0, r.jsx)(o(627918).A, {
                    style: { ...l,
                        fontWeight: t
                    },
                    shouldWrap: !0,
                    store: e
                })
            }

            function n(e) {
                return (0, r.jsx)(o(109939).sA, {
                    id: "database.tableHeaderCell.deleteProperty.modal.prompt",
                    defaultMessage: "Delete this property from {databaseName}? It will be removed from all views.",
                    values: {
                        databaseName: a(e, o(699422).Wy.bold)
                    }
                })
            }
            async function d({
                handleDeleteAccept: e,
                environment: t,
                collectionContextStore: r,
                collectionStore: i,
                targetCollectionStore: l,
                propertyId: a,
                propertySchema: n
            }) {
                let u = l && o(856235).D5(r, a, l),
                    p = l && o(856235).uf(l),
                    c = l && i.id === l.id;
                if (!u || !i || !p || c) return !1;
                let m = o(218744).default.checkGate({
                    gateName: "enable_one_way_relation_placeholder"
                });
                return await s({
                    collectionStore: i,
                    targetCollectionStore: l,
                    handleDeleteAccept: e,
                    handleDeleteButKeepRelatedProperty: () => {
                        let e = i.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            cellTarget: e ? {
                                spaceWithId: e
                            } : void 0,
                            userAction: "collectionPropertyActions.showDeletePropertyDialog",
                            environment: t,
                            canUndo: !0,
                            perform: e => {
                                if ((null == n ? void 0 : n.type) === "relation" && null != n && n.property && l) {
                                    let r = n.property,
                                        d = l.getSchema();
                                    o(377573).C4({
                                        environment: t,
                                        collectionStore: l,
                                        propertySchema: d[r],
                                        property: r,
                                        targetPropertyID: void 0,
                                        oneWayRelationPlaceholderProperty: m ? a : void 0,
                                        autoRelate: i.isSyncedCollection() && !l.isSyncedCollection() ? {
                                            enabled: !1
                                        } : n.autoRelate,
                                        transaction: e
                                    }), o(377573).C4({
                                        environment: t,
                                        collectionStore: i,
                                        propertySchema: n,
                                        property: a,
                                        targetPropertyID: void 0,
                                        oneWayRelationPlaceholderProperty: m ? r : void 0,
                                        autoRelate: {
                                            enabled: !1
                                        },
                                        transaction: e
                                    })
                                }
                                o(377573).t$({
                                    environment: t,
                                    collectionStore: i,
                                    property: a,
                                    transaction: e
                                })
                            }
                        })
                    }
                }), !0
            }
            async function s({
                collectionStore: e,
                targetCollectionStore: t,
                handleDeleteAccept: i,
                handleDeleteButKeepRelatedProperty: l
            }) {
                let d = await o(640133).f({
                    icon: o(822973).trashSmallIcon,
                    radioButtonStyle: "red",
                    confirmTextStyle: "red",
                    title: n(e),
                    confirmText: (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Delete",
                        id: "deletePropertyDialogActions.warning.confirmText"
                    }),
                    radioOptions: [{
                        key: "delete_source_and_target",
                        title: (0, r.jsx)(o(109939).sA, {
                            id: "deletePropertyDialogActions.warning.deleteSourceAndTarget",
                            defaultMessage: "Also delete related property"
                        }),
                        subtitle: (0, r.jsx)(o(109939).sA, {
                            id: "deletePropertyDialogActions.radioModal.deleteSourceAndTarget",
                            defaultMessage: "The related property on {relationTargetName} will also be deleted",
                            values: {
                                relationTargetName: a(t, o(699422).Wy.medium)
                            }
                        })
                    }, {
                        key: "delete_source_only",
                        title: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Delete this property only",
                            id: "deletePropertyDialogActions.warning.deleteSourceOnly"
                        }),
                        subtitle: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "This will end the two-way sync with the related property on {relationTargetName}",
                            id: "deletePropertyDialogActions.warning.subtitleForDeleteSourceOnly",
                            values: {
                                relationTargetName: a(t, o(699422).Wy.medium)
                            }
                        })
                    }]
                });
                switch (d) {
                    case "delete_source_and_target":
                        i();
                        break;
                    case "delete_source_only":
                        l();
                        break;
                    default:
                        throw Error(`Unsupported two-way relation deletion type: ${d}`)
                }
            }
        },
        237915: (e, t, o) => {
            o.d(t, {
                FG: () => m,
                Is: () => c,
                Ix: () => y,
                jD: () => function e(t) {
                    let {
                        questionModulesToVisit: o,
                        draftSubmissionPageStore: l,
                        collectionSchema: s,
                        nestedQuestionModules: u,
                        intl: p,
                        spaceIdCreator: c,
                        sourceCollectionId: m,
                        environment: y
                    } = t, f = [], g = l.getModel();
                    if (!g) return [];
                    for (let t of o) {
                        f.push(t);
                        let o = t.conditionalGroups;
                        if (o)
                            for (let t of o) {
                                var _;
                                let o = t.trigger;
                                if (!(0, i().ts)({
                                        filter: o.filter,
                                        property: o.property,
                                        propertyMapping: void 0,
                                        context: {
                                            schema: s,
                                            userId: void 0,
                                            userTimeZone: "",
                                            userStartOfWeek: 0,
                                            relativeVariableResult: void 0,
                                            currentPageInRelatedCollection: void 0,
                                            intl: p,
                                            collectionFeatureGates: (0, n().i)()
                                        },
                                        depth: 0,
                                        sourceCollectionId: m
                                    })({
                                        block: g,
                                        getRecordModel: l.getRecordModel,
                                        propertyMapping: void 0,
                                        resultCache: new Map,
                                        regExpCache: new Map,
                                        formatDateCache: new Map,
                                        experimentService: r().default,
                                        formulasModule: void 0,
                                        spaceIdCreator: c,
                                        getRelationEdgeList: (0, d().Y)({
                                            environment: y,
                                            spaceId: l.getSpaceId()
                                        })
                                    })) continue;
                                let E = null == (_ = t.children) ? void 0 : _.map(e => {
                                    let t = u[e];
                                    if (t && "formQuestion" === t.type) return t
                                }).filter(a().O9);
                                if (!E || 0 === E.length) continue;
                                let M = e({
                                    questionModulesToVisit: E,
                                    draftSubmissionPageStore: l,
                                    collectionSchema: s,
                                    nestedQuestionModules: u,
                                    intl: p,
                                    spaceIdCreator: c,
                                    sourceCollectionId: m,
                                    environment: y
                                });
                                f.push(...M)
                            }
                    }
                    return f
                },
                lF: () => p
            }), o(944114), o(898992), o(354520), o(672577), o(581454);
            var r = () => o(218744),
                i = () => o(400473),
                l = () => o(993189),
                a = () => o(722371),
                n = () => o(457103),
                d = () => o(323082),
                s = () => o(421439),
                u = () => o(733453);

            function p(e) {
                let {
                    environment: t,
                    layoutStore: r,
                    currentQuestionModule: i,
                    area: l,
                    property: a,
                    filterValue: n,
                    setModuleSelection: d,
                    sessionId: s
                } = e, u = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "FormSelectProperty.handleAddConditionalLogic",
                    environment: t,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        if (!r.getModel()) return;
                        let u = (0, o(698596).Ay)(),
                            p = (0, o(698596).Ay)(),
                            c = function(e) {
                                var t, o;
                                switch (e.type) {
                                    case "select":
                                        return {
                                            operator: "enum_is",
                                            value: {
                                                type: "exact",
                                                value: null == (t = e.value) ? void 0 : t.value
                                            }
                                        };
                                    case "multi_select":
                                        return {
                                            operator: "enum_contains",
                                            value: {
                                                type: "exact",
                                                value: null == (o = e.value) ? void 0 : o.value
                                            }
                                        };
                                    case "checkbox":
                                        return {
                                            operator: "checkbox_is",
                                            value: {
                                                type: "exact",
                                                value: e.value
                                            }
                                        }
                                }
                            }(n);
                        (0, o(660512).UQ)({
                            environment: t,
                            transaction: e,
                            layoutStore: r,
                            position: {
                                area: l,
                                moduleId: i.id
                            },
                            updatedModule: { ...i,
                                conditionalGroups: [...i.conditionalGroups ? ? [], {
                                    id: u,
                                    trigger: {
                                        property: a,
                                        filter: c
                                    },
                                    children: []
                                }]
                            }
                        });
                        let m = {
                            id: p,
                            type: "placeholder",
                            parentModuleId: i.id,
                            parentConditionalGroupId: u
                        };
                        (0, o(18028).UQ)({
                            environment: t,
                            transaction: e,
                            layoutStore: r,
                            position: {
                                type: "absolute",
                                area: "form_conditional_modules",
                                parentConditionalGroupId: u,
                                parentModuleId: i.id
                            },
                            module: m,
                            sessionId: s,
                            isPropertyCreation: !1
                        }), d && d({
                            type: "existing_module",
                            moduleId: p,
                            isDragging: !1
                        })
                    }
                })
            }

            function c(e) {
                var t;
                let {
                    environment: r,
                    layoutStore: i,
                    module: l,
                    conditionalGroupId: a,
                    newValue: n
                } = e, d = (0, o(758159).A)(l.id, i.getModules()), s = { ...l,
                    conditionalGroups: null == (t = l.conditionalGroups) ? void 0 : t.map(e => e.id === a ? { ...e,
                        trigger: { ...e.trigger,
                            filter: n
                        }
                    } : e)
                }, u = i.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "FormConditionalLogicModuleRenderer.updateTriggerFilter",
                    environment: r,
                    cellTarget: u ? {
                        spaceWithId: u
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(660512).UQ)({
                            environment: r,
                            transaction: e,
                            layoutStore: i,
                            position: {
                                area: d.area,
                                moduleId: l.id
                            },
                            updatedModule: s
                        })
                    }
                })
            }

            function m(e) {
                let {
                    environment: t,
                    parentModule: r,
                    groupId: i,
                    layoutStore: a,
                    collectionContextStore: n,
                    isCollectionEmpty: d,
                    sessionId: p
                } = e, c = a.getModules().form_conditional_modules ? ? {}, m = a.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "FormConditionalLogicModuleRenderer.deleteConditionalGroup",
                    environment: t,
                    cellTarget: m ? {
                        spaceWithId: m
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        var m, y;
                        let f = null == a ? void 0 : a.getModel();
                        if (!a || !f) return;
                        let g = null == (m = r.conditionalGroups) ? void 0 : m.filter(e => e.id !== i),
                            _ = null == (y = r.conditionalGroups) ? void 0 : y.find(e => e.id === i);
                        if (void 0 !== _) {
                            for (let o of _.children ? ? []) {
                                let r = c[o];
                                if (r) {
                                    if ("placeholder" === r.type) {
                                        (0, s().y4)({
                                            transaction: e,
                                            store: a,
                                            operation: l().N4X.deleteModuleInArea({
                                                pointer: a.pointer,
                                                area: "form_conditional_modules",
                                                moduleId: o
                                            })
                                        });
                                        continue
                                    }(0, u().B)({
                                        environment: t,
                                        module: r,
                                        sessionId: p,
                                        transaction: e,
                                        layoutStore: a,
                                        collectionContextStore: n,
                                        collectionSettingsStore: n.settingsStore,
                                        isCollectionEmpty: d,
                                        area: "form_conditional_modules",
                                        updateParentModule: !1
                                    })
                                }
                            }(0, o(660512).UQ)({
                                environment: t,
                                transaction: e,
                                layoutStore: a,
                                position: {
                                    area: Object.keys(c).includes(r.id) ? "form_conditional_modules" : "form_layout_schema",
                                    moduleId: r.id
                                },
                                updatedModule: { ...r,
                                    conditionalGroups: g
                                }
                            })
                        }
                    }
                })
            }

            function y(e) {
                let {
                    environment: t,
                    layoutStore: r,
                    formQuestionModule: i,
                    sessionId: l
                } = e, a = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "FormConditionalLogicModuleRenderer.deleteConditionalGroup",
                    environment: t,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(264850).U)({
                            environment: t,
                            transaction: e,
                            layoutStore: r,
                            position: {
                                area: "form_conditional_modules",
                                moduleId: i.id
                            }
                        }), (0, o(18028).UQ)({
                            environment: t,
                            transaction: e,
                            layoutStore: r,
                            position: {
                                area: "form_layout_schema",
                                type: "area_relative",
                                location: "end_moveable"
                            },
                            module: { ...i,
                                parentModuleId: void 0,
                                parentConditionalGroupId: void 0
                            },
                            sessionId: l,
                            isPropertyCreation: !1
                        })
                    }
                })
            }
        },
        278011: (e, t, o) => {
            o.d(t, {
                e: () => r
            });

            function r(e) {
                var t;
                let {
                    environment: r,
                    store: i,
                    collectionSchema: l,
                    isFormPublic: a
                } = e, n = null == (t = i.getModel()) ? void 0 : t.getConfig().propertyId;
                if (!n) return "generic_error";
                let d = l[n];
                if (void 0 === d) return "deleted_property";
                if (!(0, o(703049).Sg)(d)) return "invalid_property_type";
                let s = (0, o(805999).CK)({
                    environment: r,
                    propertyType: d.type,
                    propertySchema: d,
                    isPublicForm: !!a
                });
                if (s) return s
            }
        },
        300531: (e, t, o) => {
            o.d(t, {
                Q1: () => a,
                cJ: () => l,
                zi: () => i
            }), o(16280);
            var r = o(296540);
            let i = (0, r.createContext)(null);

            function l() {
                let e = (0, r.useContext)(i);
                if (!e) throw Error("useFormLayoutEditorContext must be used inside FormLayoutEditorContext.Provider");
                return e
            }

            function a() {
                return (0, r.useContext)(i)
            }
            i.displayName = "FormLayoutEditorContext"
        },
        355482: (e, t, o) => {
            o.d(t, {
                Jz: () => l,
                in: () => i,
                yh: () => r
            }), o(898992), o(354520), o(581454);
            let r = (0, o(109939).YK)({
                unsupportedPublicQuestionType: {
                    defaultMessage: "This question type cannot be used in public forms.",
                    id: "useNewQuestionPropertyMenuItems.invalidPublicQuestionType"
                },
                relatedCollectionNotPublic: {
                    defaultMessage: "Only relations to public databases are supported in public forms.",
                    id: "formEditorQuestion.relatedCollectionNotPublic"
                },
                editorPlaceholder: {
                    defaultMessage: "Respondent’s answer",
                    id: "formEditorQuestion.editorPlaceholder"
                },
                viewerEmptyPlaceholder: {
                    defaultMessage: "Your answer",
                    id: "formEditorQuestion.viewerEmptyPlaceholder"
                },
                editorDropdownPlaceholderSelect: {
                    defaultMessage: "Options below will appear in the dropdown",
                    id: "formEditorQuestion.editorDropdownPlaceholder"
                }
            });

            function i({
                layoutStore: e,
                collectionStore: t
            }) {
                let r = (0, o(682985).K8)(() => t ? e.getNormalizedFormQuestionStoresForFormLayout({
                        collectionSchema: t.getSchema()
                    }) ? ? [] : [], [e, t]),
                    l = (0, o(682985).K8)(() => r.map(e => {
                        var t;
                        return null == (t = e.getConfig()) ? void 0 : t.propertyId
                    }).filter(o(722371).O9), [r]);
                return (0, o(682985).K8)(() => {
                    if (!t) return [];
                    let r = t.getSchema();
                    return e.getModel() ? (0, o(722371).WP)(r).map(([e, t]) => {
                        if (t && (0, o(703049).Sg)(t) && !l.includes(e)) return e
                    }).filter(o(722371).O9) : []
                }, [t, e, l])
            }
            let l = [{
                key: "unlimited",
                title: "Unlimited",
                type: "button"
            }, {
                key: "1",
                title: "1",
                type: "button"
            }, {
                key: "2",
                title: "2",
                type: "button"
            }, {
                key: "3",
                title: "3",
                type: "button"
            }, {
                key: "4",
                title: "4",
                type: "button"
            }, {
                key: "5",
                title: "5",
                type: "button"
            }, {
                key: "10",
                title: "10",
                type: "button"
            }]
        },
        377625: (e, t, o) => {
            o.d(t, {
                x: () => r
            });

            function r({
                textStore: e,
                parentStore: t,
                spaceId: i,
                disabled: l = !1
            }) {
                let a = (0, o(533992).v3)(),
                    n = (0, o(960253).e)(),
                    d = (0, o(591404).Ol)(),
                    s = (0, o(815048).fJ)(o(406921).V);
                return (0, o(682985).K8)(() => {
                    let r = null == e ? void 0 : e.getValue();
                    return r && i && t ? o(536614).S5({
                        environment: a,
                        textValue: {
                            value: r,
                            spaceId: i
                        },
                        parentStore: t,
                        disableHover: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disableCommentAnnotations: !0,
                        disabled: l,
                        theme: o(632079).Tj,
                        themeMode: n,
                        disableLinks: l,
                        emojiType: d,
                        katex: s.value,
                        formulaValueTypes: []
                    }) : null
                }, [l, d, a, s.value, t, i, e, n], {
                    silenceRerenderDefender: !0
                })
            }
        },
        477203: (e, t, o) => {
            o.d(t, {
                j: () => i
            });
            let r = [o(151429).Z.Owner, o(435137)._e.Owner];

            function i(e) {
                let {
                    appConfigs: t,
                    databaseType: i,
                    propertyId: l,
                    collectionStore: a
                } = e, n = o(333042).u9.derivePropertyUri(l, a.getPropertyMapping());
                if (!n) return !1;
                let d = function(e, t) {
                    if (t === o(11448).pW) return r;
                    let i = (0, o(744312).Y)(e, t);
                    if (i) return Object.keys(i)
                }(t, i);
                return !!d && d.includes(n)
            }
        },
        645430: (e, t, o) => {
            o.d(t, {
                P: () => r
            });
            async function r(e) {
                let {
                    environment: t,
                    collectionStore: r,
                    schema: i,
                    property: l,
                    transaction: a,
                    permanentlyDelete: n
                } = e, d = i[l];
                if (d)
                    if ("relation" === d.type && (0, o(114588).z)(d) && d.property && (0, o(114588).z)(d) !== r.id) {
                        let e = new(o(356912)).m(t, (0, o(390768).N)(d));
                        await e.load(), (0, o(875964).B)({
                            environment: t,
                            collectionStore: r,
                            schema: i,
                            property: l,
                            transaction: a,
                            targetCollectionStore: e,
                            permanentlyDelete: n
                        })
                    } else(0, o(875964).B)({
                        environment: t,
                        collectionStore: r,
                        schema: i,
                        property: l,
                        transaction: a,
                        permanentlyDelete: n
                    })
            }
        },
        676544: (e, t, o) => {
            o.d(t, {
                s: () => i
            });
            let r = (0, o(109939).YK)({
                    PROPERTY_MODULE_MESSAGE: {
                        id: "pageLayoutEditor.property",
                        defaultMessage: "Property"
                    },
                    TITLE_WITH_ICON_MESSAGE: {
                        id: "pageLayoutEditor.titleWithIcon",
                        defaultMessage: "Heading"
                    },
                    COLLECTION_VIEW_MESSAGE: {
                        id: "pageLayoutEditor.collectionView",
                        defaultMessage: "Database View"
                    }
                }),
                i = (0, o(109939).YK)({
                    cover: {
                        id: "pageLayoutEditor.cover",
                        defaultMessage: "Cover"
                    },
                    properties: {
                        id: "pageLayoutEditor.properties",
                        defaultMessage: "Property group"
                    },
                    inlinePageSections: {
                        id: "pageLayoutEditor.inlinePageSections",
                        defaultMessage: "Inline Page Sections"
                    },
                    expandedBacklinks: {
                        id: "pageLayoutEditor.expandedBacklinks",
                        defaultMessage: "Backlinks"
                    },
                    discussions: {
                        id: "pageLayoutEditor.discussions",
                        defaultMessage: "Page discussions"
                    },
                    editor: {
                        id: "pageLayoutEditor.editor",
                        defaultMessage: "Content"
                    },
                    tabs: {
                        id: "pageLayoutEditor.tabs",
                        defaultMessage: "Tabs"
                    },
                    transcript: {
                        id: "pageLayoutEditor.transcript",
                        defaultMessage: "Transcript"
                    },
                    bottomControls: {
                        id: "pageLayoutEditor.bottomControls",
                        defaultMessage: "Bottom Controls"
                    },
                    selectAModulePrompt: {
                        id: "pageLayoutEditor.selectAModuleTitle",
                        defaultMessage: "Select a module to configure"
                    },
                    deleteModuleButton: {
                        id: "pageLayoutEditor.deleteModuleButton",
                        defaultMessage: "Delete"
                    },
                    views: {
                        id: "pageLayoutEditor.views",
                        defaultMessage: "Views"
                    },
                    viewsMain: {
                        id: "pageLayoutEditor.views",
                        defaultMessage: "Views"
                    },
                    relationsGroup: {
                        id: "pageLayoutEditor.relationsGroup",
                        defaultMessage: "Relations group"
                    },
                    formTitle: {
                        id: "pageLayoutEditor.formTitle",
                        defaultMessage: "Form Title"
                    },
                    formQuestion: {
                        id: "pageLayoutEditor.formQuestion",
                        defaultMessage: "Form Question"
                    },
                    formSubmit: {
                        id: "pageLayoutEditor.formSubmit",
                        defaultMessage: "Form Submit"
                    },
                    placeholder: {
                        id: "pageLayoutEditor.placeholder",
                        defaultMessage: "New"
                    },
                    recentActivity: {
                        id: "pageLayoutEditor.recentActivity",
                        defaultMessage: "Recent activity"
                    },
                    collaborators: {
                        id: "pageLayoutEditor.collaborators",
                        defaultMessage: "Top collaborators"
                    },
                    teamspaces: {
                        id: "pageLayoutEditor.teamspaces",
                        defaultMessage: "Teamspaces"
                    },
                    theirPages: {
                        id: "pageLayoutEditor.theirPages",
                        defaultMessage: "Their pages"
                    },
                    row: {
                        id: "pageLayoutEditor.row",
                        defaultMessage: "Row"
                    },
                    view: {
                        id: "pageLayoutEditor.view",
                        defaultMessage: "View"
                    },
                    normalizedTitleWithIcon: r.TITLE_WITH_ICON_MESSAGE,
                    titleWithIcon: r.TITLE_WITH_ICON_MESSAGE,
                    deleted_property: r.PROPERTY_MODULE_MESSAGE,
                    property_number: r.PROPERTY_MODULE_MESSAGE,
                    property_title: r.PROPERTY_MODULE_MESSAGE,
                    property_person: r.PROPERTY_MODULE_MESSAGE,
                    property_file: r.PROPERTY_MODULE_MESSAGE,
                    property_text: r.PROPERTY_MODULE_MESSAGE,
                    property_checkbox: r.PROPERTY_MODULE_MESSAGE,
                    property_url: r.PROPERTY_MODULE_MESSAGE,
                    property_email: r.PROPERTY_MODULE_MESSAGE,
                    property_phone_number: r.PROPERTY_MODULE_MESSAGE,
                    property_created_by: r.PROPERTY_MODULE_MESSAGE,
                    property_last_edited_by: r.PROPERTY_MODULE_MESSAGE,
                    property_button: r.PROPERTY_MODULE_MESSAGE,
                    property_select: r.PROPERTY_MODULE_MESSAGE,
                    property_multi_select: r.PROPERTY_MODULE_MESSAGE,
                    property_status: r.PROPERTY_MODULE_MESSAGE,
                    property_date: r.PROPERTY_MODULE_MESSAGE,
                    property_created_time: r.PROPERTY_MODULE_MESSAGE,
                    property_last_edited_time: r.PROPERTY_MODULE_MESSAGE,
                    property_last_visited_time: r.PROPERTY_MODULE_MESSAGE,
                    property_relation: r.PROPERTY_MODULE_MESSAGE,
                    property_rollup: r.PROPERTY_MODULE_MESSAGE,
                    property_formula: r.PROPERTY_MODULE_MESSAGE,
                    property_auto_increment_id: r.PROPERTY_MODULE_MESSAGE,
                    property_location: r.PROPERTY_MODULE_MESSAGE,
                    property_verification: r.PROPERTY_MODULE_MESSAGE,
                    property_place: r.PROPERTY_MODULE_MESSAGE,
                    property: r.PROPERTY_MODULE_MESSAGE,
                    collectionView: r.COLLECTION_VIEW_MESSAGE,
                    collectionViewV2: r.COLLECTION_VIEW_MESSAGE
                })
        },
        686522: (e, t, o) => {
            o.d(t, {
                h: () => i
            });
            var r = o(296540);

            function i() {
                let {
                    layoutStore: e,
                    currentModuleSelection: t,
                    setModuleSelection: i,
                    sessionId: l
                } = (0, o(613789).LH)(), a = (0, o(533992).v3)(), n = (0, o(682985).K8)(() => {
                    var t;
                    return null == (t = e.getModel()) ? void 0 : t.getLayoutType()
                }, [e]), d = "form" === n ? "form_layout_schema" : (null == t ? void 0 : t.type) === "new_module" ? t.area : void 0;
                return (0, r.useCallback)(r => {
                    let s, {
                        layoutModule: u,
                        transaction: p
                    } = r;
                    if (e.getModel() && d && "form_conditional_modules" !== d) {
                        if ("form" === n) s = r.position ? ? {
                            type: "area_relative",
                            area: "form_layout_schema",
                            location: "end_moveable"
                        };
                        else {
                            if ((null == t ? void 0 : t.type) !== "new_module" || "form_conditional_modules" === t.area) return;
                            s = "views_main_tab_modules" === t.area ? {
                                type: "area_relative",
                                area: t.area,
                                viewId: t.viewsMainTabId,
                                location: "end_moveable"
                            } : {
                                type: "area_relative",
                                area: t.area,
                                location: "end_moveable"
                            }
                        }(0, o(18028).UQ)({
                            environment: a,
                            sessionId: l,
                            layoutStore: e,
                            position: s,
                            module: u,
                            transaction: p,
                            isPropertyCreation: !1
                        }), i({
                            type: "existing_module",
                            moduleId: u.id,
                            isDragging: !1
                        })
                    }
                }, [d, t, a, e, n, l, i])
            }
        },
        733453: (e, t, o) => {
            function r({
                environment: e,
                module: t,
                sessionId: l,
                layoutStore: a,
                collectionSettingsStore: n,
                isCollectionEmpty: d,
                collectionContextStore: s,
                area: u,
                transaction: p,
                updateParentModule: c
            }) {
                let m = s.collectionStore();
                if (!m) throw Error("Could not find collection store");
                let y = a.getModules().form_conditional_modules ? ? {},
                    f = (0, o(266967).Yg)({
                        currentModule: t,
                        nestedModules: y,
                        includePlaceholders: !0
                    }).formQuestionDescendants.filter(e => e.id !== t.id),
                    g = s.normalizedSchemaStore.state;
                for (let t of f) i({
                    environment: e,
                    module: t,
                    sessionId: l,
                    layoutStore: a,
                    isCollectionEmpty: d,
                    collectionContextStore: s,
                    collectionStore: m,
                    area: "form_conditional_modules",
                    transaction: p,
                    schema: g,
                    updateParentModule: !1
                });
                i({
                    environment: e,
                    module: t,
                    sessionId: l,
                    layoutStore: a,
                    isCollectionEmpty: d,
                    collectionContextStore: s,
                    collectionStore: m,
                    area: u,
                    transaction: p,
                    schema: g,
                    updateParentModule: c
                }), (0, o(72762).o)({
                    collectionSettingsStore: n
                })
            }

            function i({
                environment: e,
                module: t,
                sessionId: r,
                layoutStore: l,
                isCollectionEmpty: a,
                collectionContextStore: n,
                collectionStore: d,
                area: s,
                transaction: u,
                updateParentModule: p,
                schema: c
            }) {
                let m;
                if ("formQuestion" === t.type) {
                    var y;
                    if (!(m = o(680802).c.createChildStore(l, {
                            table: o(832375).lo9,
                            id: t.formQuestionId,
                            spaceId: l.getSpaceId() ? ? ""
                        }).getPropertyId())) return;
                    let r = null == (y = c[m]) ? void 0 : y.type;
                    a && r && "title" !== r && (0, o(875964).B)({
                        environment: e,
                        collectionStore: d,
                        schema: c,
                        property: m,
                        transaction: u
                    }), (0, o(104310).u)({
                        event: {
                            eventName: "delete_form_question",
                            eventProperties: (0, o(805999).YA)({
                                collectionContextStore: n,
                                propertyId: m,
                                questionId: t.id,
                                parentModuleId: p ? t.parentModuleId : void 0,
                                area: s,
                                layoutStore: l
                            })
                        }
                    })
                }
                p ? (0, o(264850).U)({
                    environment: e,
                    position: {
                        area: s,
                        moduleId: t.id
                    },
                    layoutStore: l,
                    sessionId: r,
                    transaction: u
                }) : (0, o(421439).y4)({
                    transaction: u,
                    store: l,
                    operation: o(993189).N4X.deleteModuleInArea({
                        pointer: l.pointer,
                        area: s,
                        moduleId: t.id
                    })
                })
            }
            o.d(t, {
                B: () => r
            }), o(16280), o(898992), o(354520)
        },
        741612: (e, t, o) => {
            o.d(t, {
                J: () => i
            });
            var r = o(296540);

            function i() {
                return function({
                    userSettingsDismissibleKey: e
                }) {
                    let t = (0, o(533992).v3)(),
                        i = (0, o(682985).O$)(o(728372).AppStoreCurrentUserSettingsStore),
                        l = (0, o(682985).K8)(() => {
                            let t = null == i ? void 0 : i.getSettings();
                            return !t || !!t[e]
                        }, [e, i]),
                        a = (0, o(682985).K8)(() => {
                            let e = (0, o(427846)._)(t),
                                r = null == i ? void 0 : i.getSettings();
                            return !!e && !!r && !o(986939).A.isMobile && !l
                        }, [t, i, l]),
                        n = r.useCallback(() => {
                            i && !l && a && (0, o(377796).createAndCommit)({
                                environment: t,
                                userAction: "LayoutInfoPanelButtonEducationTooltip.dismiss",
                                canUndo: !1,
                                cellTarget: "main",
                                perform: t => {
                                    (0, o(862759).m)({
                                        userSettingsStore: i,
                                        transaction: t,
                                        data: {
                                            [e]: Date.now()
                                        }
                                    })
                                }
                            })
                        }, [t, a, e, i, l]);
                    return {
                        shouldShowTooltip: a,
                        dismissTooltip: n
                    }
                }({
                    userSettingsDismissibleKey: "layout_builder_add_module_button_education_tooltip_dismissed_at"
                })
            }
        },
        744312: (e, t, o) => {
            o.d(t, {
                Y: () => i
            }), o(898992), o(672577);
            var r = () => o(778949);

            function i(e, t) {
                let i = (0, o(765629).l)(e, t);
                if (i) {
                    for (let e of i.allFeatures)
                        if ((0, r().l)(e)) {
                            let o = e.dependencies.find(e => "collection" === e.type && e.uri === t);
                            if (o) return o.value.schema ? ? {}
                        }
                }
            }
        },
        840403: (e, t, o) => {
            o.d(t, {
                J: () => l,
                Q: () => i
            }), o(296540);
            var r = o(474848);

            function i(e, t, i) {
                return {
                    key: e,
                    type: "button",
                    title: function(e, t, i) {
                        if ("1" === e)
                            if ("relation" === t)
                                if (i && !0 === i) return (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "1 item",
                                    id: "database.viewSettings.collectionPropertyLimitHelpers.limitOne.connectedRelation"
                                });
                                else return (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "1 page",
                                    id: "database.viewSettings.collectionPropertyLimitHelpers.limitOne.relation"
                                });
                        else if ("file" === t) return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "1 file",
                            id: "database.viewSettings.collectionPropertyLimitHelpers.limitOne.file"
                        });
                        else return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "1 {type}",
                            id: "database.viewSettings.collectionPropertyLimitHelpers.limitOne",
                            values: {
                                type: o(799514).dC[t]
                            }
                        });
                        if ("no_limit" === e) return (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "No limit",
                            id: "database.viewSettings.collectionPropertyLimitHelpers.noLimit"
                        })
                    }(e, t, i)
                }
            }

            function l(e) {
                let t = o(218744).default.getConfigKey("collection_size_limits", "collection_deleted_schema_max_size");
                return (0, o(561872).Jb)(e, t)
            }
        },
        911859: (e, t, o) => {
            o.d(t, {
                t: () => i
            });
            var r = o(296540);

            function i(e) {
                let {
                    setModuleSelection: t,
                    layoutStore: i
                } = (0, o(613789).LH)(), l = (0, o(686522).h)(), {
                    dismissTooltip: a
                } = (0, o(741612).J)();
                return (0, r.useCallback)(() => {
                    var r;
                    "form" === (null == (r = i.getModel()) ? void 0 : r.getLayoutType()) && "form_conditional_modules" !== e.area ? l({
                        layoutModule: {
                            type: "placeholder",
                            id: (0, o(698596).Ay)()
                        },
                        position: e.afterModuleId ? {
                            type: "module_relative",
                            area: e.area,
                            direction: "below",
                            relativeToModuleId: e.afterModuleId
                        } : void 0
                    }) : (t({
                        type: "new_module",
                        isDragging: !1,
                        ..."views_main_tab_modules" === e.area ? {
                            area: "views_main_tab_modules",
                            viewsMainTabId: e.viewsMainTabId
                        } : {
                            area: e.area
                        }
                    }), "page_main" === e.area && a())
                }, [i, e, l, t, a])
            }
        }
    }
]);