"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [36441], {
        18028: (e, t, o) => {
            o.d(t, {
                E: () => i,
                UQ: () => a
            }), o(16280), o(18107), o(944114), o(967357);
            var r = () => o(421439);

            function i(e) {
                let {
                    moduleId: t,
                    layoutStore: r,
                    sessionId: i,
                    environment: a,
                    position: l
                } = e, d = r.getModuleById(t);
                if (!d) throw Error(`Cannot move module with id ${t} because a module with that id is not in the layout`);
                let s = (0, o(547748).TR)({
                    modulesByArea: r.getModules(),
                    moduleId: t,
                    newPosition: l
                });
                n({ ...e,
                    module: d,
                    userAction: "BuilderLayoutModules.moveModuleToPosition",
                    afterUpsertTransaction: () => {
                        var e;
                        let t = (0, o(703049).Cg)({
                            moduleId: d.id,
                            modulesByArea: r.getModules()
                        }).length;
                        (0, o(547748).Ib)({
                            environment: a,
                            sessionId: i,
                            collectionId: null == (e = r.getCollectionModel()) ? void 0 : e.id,
                            layoutId: r.id,
                            context: (0, o(971162).We)(l.area),
                            action: s,
                            moduleType: d.type,
                            area: l.area,
                            depth: t
                        })
                    }
                })
            }

            function a(e) {
                let {
                    position: t,
                    module: r,
                    layoutStore: i,
                    sessionId: a,
                    environment: l
                } = e;
                if (i.getModuleById(r.id)) throw Error(`Cannot add module with id ${r.id} because a module with that id is already in the layout`);
                n({ ...e,
                    userAction: "BuilderLayoutModules.addModuleAtPosition",
                    performBeforeApplyUpsertOperations: e => {
                        let {
                            transaction: a
                        } = e;
                        ("page_main" === t.area || "page_details" === t.area) && (0, o(11287).gx)(r) && (0, o(41500).HD)({
                            environment: l,
                            transaction: a,
                            layoutStore: i,
                            property: r.propertyId
                        })
                    },
                    afterUpsertTransaction: () => {
                        var n;
                        let d = (0, o(703049).Cg)({
                            moduleId: r.id,
                            modulesByArea: i.getModules()
                        }).length;
                        (0, o(547748).zb)({
                            environment: l,
                            module: r,
                            sessionId: a,
                            collectionId: null == (n = i.getCollectionModel()) ? void 0 : n.id,
                            layoutId: i.id,
                            context: (0, o(971162).We)(t.area),
                            isPropertyCreation: e.isPropertyCreation,
                            area: t.area,
                            depth: d
                        })
                    }
                })
            }

            function n(e) {
                let {
                    environment: t,
                    position: i,
                    layoutStore: a,
                    module: n,
                    transaction: s,
                    userAction: u,
                    performBeforeApplyUpsertOperations: c,
                    afterUpsertTransaction: m
                } = e, p = a.pointer, f = a.getModules(), g = a.getRawModules(), y = g && (0, o(886178).c7)(g, e => e.id === n.id) || (0, o(641560).Lv)(n), b = "page_main" === i.area || "page_details" === i.area ? function(e) {
                    let {
                        layoutPointer: t,
                        modulesByArea: r,
                        rawModulesByArea: i
                    } = e, a = (0, o(886178).EX)(r, e => "relationsGroup" === e.type);
                    if ((null == a ? void 0 : a.position.area) === "form_conditional_modules") return;
                    let n = i && (0, o(886178).LC)(i, e => "relationsGroup" === e.type);
                    if (!a || a && n) return;
                    let l = a.module;
                    if (!l || "relationsGroup" !== l.type) throw Error("relations group module location in normalized was incorrect, cannot backfill relations group module");
                    return function(e) {
                        var t;
                        let {
                            module: r,
                            modulesByArea: i,
                            layoutPointer: a
                        } = e, n = (0, o(886178).JO)(i, e => e.id === r.id);
                        if (!n) throw Error("cannot upsert module at current position because module does not have a current position");
                        if ("form_conditional_modules" === n.area) throw Error("[Forms Conditional Logic Not Implemented] form_conditional_modules area is not supported for adding and moving modules");
                        let l = "views_main_tab_modules" === n.area ? null == (t = i.views_main_tab_modules) ? void 0 : t[n.viewId] : i[n.area];
                        if (!l || 0 === l.length) throw Error("cannot upsert module at current position in area because that area is empty");
                        let d = {
                            module: (0, o(641560).Lv)(r),
                            pointer: a,
                            ..."views_main_tab_modules" === n.area ? {
                                area: o(971162).Zm[n.area],
                                viewId: n.viewId
                            } : {
                                area: o(971162).Zm[n.area]
                            }
                        };
                        if (0 === n.index) return o(993189).N4X.putModuleAfter({ ...d,
                            afterId: void 0
                        });
                        let s = l.at(n.index + 1);
                        return s ? o(993189).N4X.putModuleBefore({ ...d,
                            beforeId: s.id
                        }) : o(993189).N4X.putModuleAfter({ ...d,
                            afterId: void 0
                        })
                    }({
                        module: l,
                        layoutPointer: t,
                        modulesByArea: r
                    })
                }({
                    layoutPointer: p,
                    modulesByArea: f,
                    rawModulesByArea: g
                }) : null;
                b && (0, o(377796).createAndCommitOrAppend)({
                    environment: t,
                    cellTarget: a.pointer.spaceId ? {
                        spaceWithId: a.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        (0, r().y4)({
                            transaction: e,
                            store: a,
                            operation: b
                        })
                    },
                    canUndo: !0,
                    transaction: s,
                    userAction: `${u||"BuilderLayoutModules.upsert"}.preOpBackfill`
                });
                let I = [],
                    v = function(e) {
                        let {
                            layoutStore: t,
                            module: r,
                            upsertPosition: i
                        } = e, a = t.getModules(), n = (0, o(886178).JO)(a, e => r.id === e.id);
                        if (n) {
                            if ("form_conditional_modules" === n.area) return o(993189).N4X.deleteModuleInArea({
                                pointer: t.pointer,
                                area: n.area,
                                moduleId: r.id
                            });
                            if ("views_main_tab_modules" === n.area) {
                                let e = "absolute" === i.type && "views_main_tab_modules" === i.area ? i.viewId : void 0,
                                    a = n.viewId;
                                if (e === a) return;
                                return o(993189).N4X.deleteModuleInArea({
                                    pointer: t.pointer,
                                    area: n.area,
                                    moduleId: r.id,
                                    viewId: a
                                })
                            }
                            if ("page_main" === n.area || "page_details" === n.area || "form_layout_schema" === n.area || "person_profile_page_main" === n.area || "person_profile_page_details" === n.area || "dashboard_layout_schema" === n.area) {
                                if (n.area === i.area) return;
                                return o(993189).N4X.deleteModuleInArea({
                                    pointer: t.pointer,
                                    area: o(971162).Zm[n.area],
                                    moduleId: r.id
                                })
                            }(0, o(722371).HB)(n.area)
                        }
                    }({
                        upsertPosition: i,
                        module: n,
                        layoutStore: a
                    });
                v && I.push(v);
                let _ = function(e) {
                    let {
                        upsertPosition: t,
                        layoutPointer: r,
                        modulesByArea: i,
                        rawModuleToUpsert: a
                    } = e;
                    return "absolute" === t.type ? function(e) {
                        let {
                            upsertPosition: t,
                            rawModuleToUpsert: r,
                            layoutPointer: i,
                            modulesByArea: a
                        } = e, n = (0, o(886178).JO)(a, e => r.id === e.id), {
                            area: d
                        } = t;
                        if ("form_conditional_modules" === d) {
                            let {
                                parentConditionalGroupId: e,
                                parentModuleId: n
                            } = t;
                            if (!(0, o(398551).V)(r, "form_conditional_modules")) throw Error("Can only add form question or placeholder modules to form_conditional_modules area.");
                            let l = (0, o(886178).Ib)({
                                    modulesByArea: a,
                                    find: e => e.id === r.parentModuleId
                                }),
                                d = (0, o(758159).A)(n, a);
                            return o(993189).N4X.upsertChildModule({
                                pointer: i,
                                module: r,
                                previousParentModuleAndArea: l,
                                newParentModule: {
                                    area: d.area,
                                    module: d.module,
                                    conditionalGroupId: e,
                                    index: t.index
                                },
                                modulesByArea: a
                            })
                        }
                        let s = t.index;
                        if (s < 0) throw Error(`Cannot upsert module with id ${r.id} to a negative position`);
                        if ("views_main_tab_modules" === d) {
                            let e = t.viewId;
                            if (!a[d] || !a[d][e]) throw Error("Cannot upsert module into views_main_tab_modules area that does not have views");
                            let u = (null == n ? void 0 : n.area) === "views_main_tab_modules" && (null == n ? void 0 : n.viewId) === e ? n.index : void 0,
                                c = l({
                                    modulesInArea: a[d][e],
                                    indexOfModuleToUpsertInArea: u,
                                    indexToUpsertTo: s
                                });
                            if (!c) return;
                            return [o(993189).N4X.putModuleBeforeOrAfter({
                                pointer: i,
                                area: o(971162).Zm[d],
                                viewId: e,
                                module: r,
                                direction: c.insertDirection,
                                beforeOrAfterId: c.beforeOrAfterId
                            })]
                        }
                        let u = l({
                            modulesInArea: a[d] ? ? [],
                            indexOfModuleToUpsertInArea: (null == n ? void 0 : n.area) === d ? n.index : void 0,
                            indexToUpsertTo: s
                        });
                        if (u) return [o(993189).N4X.putModuleBeforeOrAfter({
                            pointer: i,
                            area: o(971162).Zm[d],
                            module: r,
                            direction: u.insertDirection,
                            beforeOrAfterId: u.beforeOrAfterId
                        })]
                    }({
                        upsertPosition: t,
                        rawModuleToUpsert: a,
                        layoutPointer: r,
                        modulesByArea: i
                    }) : "module_relative" === t.type ? [function(e) {
                        let {
                            upsertPosition: t,
                            rawModuleToUpsert: r,
                            layoutPointer: i,
                            modulesByArea: a
                        } = e, {
                            area: n,
                            direction: l,
                            relativeToModuleId: d
                        } = t, s = o(971162).Zm[n], u = (0, o(886178).JO)(a, e => e.id === d);
                        if (!u || u.area !== n) throw Error(`Cannot find module with id: ${d} to add upsert relative to in ${n}`);
                        if ("views_main_tab_modules" === s) {
                            let e = "views_main_tab_modules" === u.area ? u.viewId : void 0;
                            if (!e) throw Error("Cannot upsert module into views_main_tab_modules area that does not have views");
                            return o(993189).N4X.putModuleBeforeOrAfter({
                                pointer: i,
                                area: "views_main_tab_modules",
                                viewId: e,
                                module: r,
                                direction: "above" === l ? "before" : "after",
                                beforeOrAfterId: d
                            })
                        }
                        return o(993189).N4X.putModuleBeforeOrAfter({
                            pointer: i,
                            area: s,
                            module: r,
                            direction: "above" === l ? "before" : "after",
                            beforeOrAfterId: d
                        })
                    }({
                        upsertPosition: t,
                        rawModuleToUpsert: a,
                        layoutPointer: r,
                        modulesByArea: i
                    })] : "area_relative" === t.type ? [function(e) {
                        let {
                            upsertPosition: t,
                            rawModuleToUpsert: r,
                            layoutPointer: i,
                            modulesByArea: a
                        } = e, {
                            location: n
                        } = t;
                        if ("views_main_tab_modules" === t.area) {
                            let e = t.viewId,
                                s = {
                                    pointer: i,
                                    area: o(971162).Zm[t.area],
                                    viewId: e,
                                    module: r
                                };
                            if ("start" === n || "end" === n) return o(993189).N4X.putModuleBeforeOrAfter({ ...s,
                                direction: "start" === n ? "before" : "after",
                                beforeOrAfterId: void 0
                            });
                            if ("end_moveable" === n) {
                                var l;
                                let e = d({
                                    area: t.area,
                                    modulesInArea: (null == (l = a.views_main_tab_modules) ? void 0 : l[t.viewId]) ? ? []
                                });
                                return o(993189).N4X.putModuleBeforeOrAfter({ ...s,
                                    direction: e.insertDirection,
                                    beforeOrAfterId: e.beforeOrAfterId
                                })
                            }(0, o(722371).HB)(n)
                        }
                        let s = {
                            pointer: i,
                            area: o(971162).Zm[t.area],
                            module: r
                        };
                        if ("start" === n || "end" === n) return o(993189).N4X.putModuleBeforeOrAfter({ ...s,
                            direction: "start" === n ? "before" : "after",
                            beforeOrAfterId: void 0
                        });
                        if ("end_moveable" === n) {
                            let e = a[t.area] ? ? [],
                                r = d({
                                    area: t.area,
                                    modulesInArea: e
                                });
                            return o(993189).N4X.putModuleBeforeOrAfter({ ...s,
                                direction: r.insertDirection,
                                beforeOrAfterId: r.beforeOrAfterId
                            })
                        }(0, o(722371).HB)(n)
                    }({
                        upsertPosition: t,
                        rawModuleToUpsert: a,
                        layoutPointer: r,
                        modulesByArea: i
                    })] : void(0, o(722371).HB)(t)
                }({
                    module: n,
                    upsertPosition: i,
                    modulesByArea: f,
                    layoutPointer: p,
                    rawModuleToUpsert: y
                });
                _ && I.push(..._);
                let h = "placeholder" === n.type && "form_layout_schema" === i.area ? `form_layout_new_question_${n.id}` : void 0;
                (0, o(377796).createAndCommitOrAppend)({
                    environment: t,
                    cellTarget: a.pointer.spaceId ? {
                        spaceWithId: a.pointer.spaceId
                    } : void 0,
                    undoCheckpoint: h,
                    canUndo: !0,
                    perform: e => {
                        for (let t of (c && c({
                                transaction: e
                            }), I))(0, r().y4)({
                            transaction: e,
                            store: a,
                            operation: t
                        })
                    },
                    transaction: s,
                    userAction: u || "BuilderLayoutModules.upsert"
                }), m && m()
            }

            function l(e) {
                let {
                    modulesInArea: t,
                    indexOfModuleToUpsertInArea: o,
                    indexToUpsertTo: r
                } = e;
                if (0 === r || 0 === t.length) return {
                    insertDirection: "before",
                    beforeOrAfterId: void 0
                };
                let i = t.at(r);
                return i ? void 0 === o ? {
                    insertDirection: "before",
                    beforeOrAfterId: i.id
                } : o !== r ? o < r ? {
                    insertDirection: "after",
                    beforeOrAfterId: i.id
                } : {
                    insertDirection: "before",
                    beforeOrAfterId: i.id
                } : void 0 : {
                    insertDirection: "after",
                    beforeOrAfterId: void 0
                }
            }

            function d(e) {
                let {
                    area: t,
                    modulesInArea: r
                } = e, i = (0, o(168908).jS)(t, r), a = i.nonMoveableHeaderModules, n = "moveableCenterModules" in i ? i.moveableCenterModules : [], l = "moveableFooterModules" in i ? i.moveableFooterModules : [];
                if (n.length) {
                    let e = n.at(-1);
                    if (!e) throw Error("cannot find last moveable center module to add below for end moveable");
                    return {
                        insertDirection: "after",
                        beforeOrAfterId: e.id
                    }
                }
                if (a.length) {
                    let e = a.at(-1);
                    if (!e) throw Error("cannot find last header module to add below for end moveable");
                    return {
                        insertDirection: "after",
                        beforeOrAfterId: e.id
                    }
                }
                if (l.length) {
                    let e = l.at(0);
                    if (!e) throw Error("cannot find first moveable footer module to add above for end moveable");
                    return {
                        insertDirection: "before",
                        beforeOrAfterId: e.id
                    }
                }
                return {
                    insertDirection: "after",
                    beforeOrAfterId: void 0
                }
            }
        },
        737270: (e, t, o) => {
            o.d(t, {
                m: () => i
            });
            let r = (0, o(109939).YK)({
                responderPropertyTitle: {
                    defaultMessage: "Respondent",
                    id: "blockTemplates.form.responderPropertyTitle"
                },
                createdTimePropertyName: {
                    defaultMessage: "Submission time",
                    id: "blockTemplates.form.createdTimePropertyName"
                },
                formInitialQuestionPropertyTitle: {
                    defaultMessage: "Question 1",
                    id: "blockTemplates.form.formInitialQuestionPropertyTitle"
                },
                formInitialQuestionPropertySelect: {
                    defaultMessage: "Question 2",
                    id: "blockTemplates.form.formInitialQuestionPropertySelect"
                },
                formInitialQuestionPropertySelectOption1: {
                    defaultMessage: "Option 1",
                    id: "blockTemplates.form.formInitialQuestionPropertySelectOption1"
                },
                formInitialQuestionPropertySelectOption2: {
                    defaultMessage: "Option 2",
                    id: "blockTemplates.form.formInitialQuestionPropertySelectOption2"
                },
                formInitialQuestionPropertySelectOption3: {
                    defaultMessage: "Option 3",
                    id: "blockTemplates.form.formInitialQuestionPropertySelectOption3"
                }
            });

            function i(e) {
                let {
                    isInline: t,
                    name: i
                } = e, a = (0, o(698596).Ay)(), n = (0, o(698596).Ay)(), l = (0, o(698596).Ay)(), d = (0, o(698596).Ay)(), s = (0, o(698596).Ay)(), u = (0, o(698596).Ay)();
                return o(412951).RecordMapPolymorphic.create({
                    block: {
                        root: {
                            id: "root",
                            type: t ? "collection_view" : "collection_view_page",
                            collection_id: "collection",
                            format: {
                                collection_pointer: {
                                    table: o(832375).VlP,
                                    id: "collection"
                                }
                            },
                            view_ids: [],
                            alive: !0
                        }
                    },
                    collection: {
                        collection: {
                            id: "collection",
                            name: i,
                            schema: {
                                title: {
                                    name: o(962299).A.formatMessage(r.formInitialQuestionPropertyTitle),
                                    type: "title"
                                },
                                [a]: {
                                    name: o(962299).A.formatMessage(r.responderPropertyTitle),
                                    type: "created_by"
                                },
                                [n]: {
                                    name: o(962299).A.formatMessage(r.createdTimePropertyName),
                                    type: "created_time"
                                },
                                [l]: {
                                    name: o(962299).A.formatMessage(r.formInitialQuestionPropertySelect),
                                    type: "multi_select",
                                    options: [{
                                        id: d,
                                        value: o(962299).A.formatMessage(r.formInitialQuestionPropertySelectOption1),
                                        color: "blue"
                                    }, {
                                        id: s,
                                        value: o(962299).A.formatMessage(r.formInitialQuestionPropertySelectOption2),
                                        color: "yellow"
                                    }, {
                                        id: u,
                                        value: o(962299).A.formatMessage(r.formInitialQuestionPropertySelectOption3),
                                        color: "red"
                                    }]
                                }
                            },
                            format: {},
                            parent_id: "root",
                            parent_table: "block",
                            alive: !0
                        }
                    }
                })
            }
        },
        835962: (e, t, o) => {
            o.d(t, {
                A: () => a
            });
            var r = () => o(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        openTooltip: void 0
                    }
                }
            }
            let a = new i
        },
        936441: (e, t, o) => {
            o.r(t), o.d(t, {
                FORMS_SHARE_CALLOUT_KEY: () => n,
                changeFormClosedState: () => I,
                changeFormSubmissionPermissions: () => v,
                changeFormSubmissionTemplate: () => _,
                createAndFocusCollectionFormEditorView: () => c,
                createCollectionFormEditorView: () => m,
                createDummyFormPage: () => M,
                createFormInPrivate: () => p,
                createFormQuestion: () => g,
                createFormQuestionAndUpdateOrCreateModule: () => b,
                createModuleForNewlyDuplicatedProperty: () => y,
                createResponsesCollectionView: () => f,
                incrementAndTrackUserFormsCreated: () => l,
                maybeAlertAboutUnsupportedPublicQuestions: () => S,
                maybeSyncQuestionNameToPropertyName: () => d,
                remapQuestionToNewProperty: () => w,
                toggleAnonymousFormSubmissionState: () => h,
                toggleNotionBrandingState: () => A
            }), o(16280), o(944114), o(898992), o(354520), o(672577), o(803949), o(581454), o(296540);
            var r = () => o(698596),
                i = o(474848);
            let a = (0, o(109939).YK)({
                    responsesViewName: {
                        id: "formEditorActions.responsesViewName",
                        defaultMessage: "Responses"
                    },
                    newFormViewName: {
                        id: "formEditorActions.newFormViewName",
                        defaultMessage: "Form builder"
                    },
                    formDatabaseTitle: {
                        id: "newBlock.databaseInline.formDatabaseTitle",
                        defaultMessage: "New form"
                    }
                }),
                n = "forms_share_form_tooltip";

            function l(e, t) {
                var r;
                let i = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let a = function() {
                    let e = o(728372).AppStoreCurrentUserSettingsStore.state;
                    if (e) return e.getSettingsStore().getKeyStore("user_forms_created_count").getValue() ? ? 0
                }();
                void 0 !== a && ((0, o(862759).m)({
                    userSettingsStore: i,
                    transaction: t,
                    data: {
                        user_forms_created_count: a + 1
                    }
                }), r = {
                    userFormsCreatedCount: a + 1
                }, (0, o(104310).u)({
                    event: {
                        eventName: "form_created",
                        eventProperties: {
                            user_total_form_count: r.userFormsCreatedCount
                        }
                    }
                }))
            }

            function d(e) {
                var t;
                let {
                    questionStore: r,
                    environment: i,
                    collectionStore: a,
                    collectionContextStore: n
                } = e, l = null == (t = r.getConfig()) ? void 0 : t.propertyId;
                if (!l) throw Error("No property ID found for question");
                let d = a.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formQuestion.changeName",
                    environment: i,
                    cellTarget: d ? {
                        spaceWithId: d
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        if (!r.shouldSyncQuestionNameToPropertyName()) return;
                        let t = r.getNameStore().getValue();
                        if (!t) return;
                        let i = (0, o(458230).r4)({
                                textValue: t,
                                getRecordModel: r.getRecordModel,
                                deterministic: !0,
                                userTimeZone: (0, o(714350).P)(),
                                intl: o(962299).A.getIntl()
                            }),
                            d = (0, o(799514).fE)({
                                property: l,
                                collectionContextStore: n,
                                newValue: i
                            }) ? (0, o(441998).Q)(i) : i;
                        (0, o(259705).Y)({
                            collectionStore: a,
                            property: l,
                            name: d,
                            transaction: e
                        })
                    }
                })
            }
            let s = {
                iconGroup: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    color: o(632079).Tj.icon.secondary,
                    alignItems: "center"
                },
                dialogTitle: {
                    fontSize: 16,
                    fontWeight: o(699422).Wy.semibold,
                    lineHeight: "22px",
                    marginTop: 12,
                    marginBottom: 12
                },
                dialogDescription: {
                    color: o(632079).Tj.text.secondary,
                    fontSize: 14,
                    lineHeight: "20px"
                },
                style0: {
                    marginInlineStart: 12,
                    marginInlineEnd: 12
                }
            };

            function u() {
                return (0, i.jsxs)(o(4458).VP, {
                    children: [(0, i.jsxs)("div", {
                        style: s.iconGroup,
                        children: [(0, i.jsx)(o(16275).I, {
                            icon: o(518630).T,
                            size: 36
                        }), (0, i.jsx)(o(16275).I, {
                            icon: o(351298).arrowStraightRightFillIcon,
                            size: 24,
                            style: s.style0
                        }), (0, i.jsx)(o(16275).I, {
                            icon: o(1389).e,
                            size: 36
                        })]
                    }), (0, i.jsx)("span", {
                        style: s.dialogTitle,
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Auto-create form questions based on existing properties?",
                            id: "NewFormOnExistingCollectionDialogTitle.message"
                        })
                    }), (0, i.jsx)("span", {
                        style: s.dialogDescription,
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Only supported property types will create new questions.",
                            id: "NewFormOnExistingCollectionDialogTitle.description"
                        })
                    })]
                })
            }

            function c(e) {
                let {
                    environment: t,
                    collectionContextStore: a,
                    collectionStore: n,
                    transaction: l
                } = e, d = a.collectionViewBlockStore();
                if (!d) return;
                let s = n.getSchema(),
                    c = m({
                        environment: t,
                        collectionViewBlockStore: d,
                        collectionId: n.id,
                        schema: s,
                        transaction: l,
                        initializeWithAllDefaultQuestions: !1
                    });
                if (!c) return;
                (0, o(532013).t)({
                    environment: t,
                    collectionContextStore: a,
                    collectionViewId: c.newViewId,
                    isFullScreen: a.isFullScreenStore.state,
                    isRootChild: a.isRootChildStore.state,
                    isInPeekRenderer: a.isInPeekRendererStore.state
                });
                let p = c.layoutStore,
                    f = Object.keys(s).filter(e => {
                        let t = s[e];
                        return "title" !== e && t && (0, o(703049).Sg)(t)
                    });
                f.length > 0 && f.length <= o(805999).eb && o(647095).ui({
                    showCancel: !1,
                    keepFocus: !1,
                    message: (0, i.jsx)(u, {}),
                    mode: "wide",
                    items: [{
                        label: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Create {numQuestions, plural, one {1 question} other {{numQuestions} questions}}",
                            id: "formEditorActions.createQuestions.primaryAction",
                            values: {
                                numQuestions: f.length
                            }
                        }),
                        color: "blue",
                        buttonType: "solid",
                        onAccept() {
                            let e = n.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                environment: t,
                                userAction: "formActions.autoCreateFormQuestionsForExistingDatabase",
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    for (let o of f) y({
                                        type: "formQuestion",
                                        environment: t,
                                        module: void 0,
                                        transaction: e,
                                        layoutStore: p,
                                        collectionStore: n,
                                        propertyId: o,
                                        position: {
                                            type: "area_relative",
                                            area: "form_layout_schema",
                                            location: "end_moveable"
                                        },
                                        collectionContextStore: a,
                                        shouldLogEvent: !0,
                                        autoCreatedFromExistingDatabase: !0,
                                        duplicateModuleMapping: new Map,
                                        propertyIdMapping: new Map,
                                        sessionId: (0, r().Ay)()
                                    })
                                }
                            })
                        }
                    }, {
                        label: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Start from scratch",
                            id: "formEditorActions.createQuestions.secondary"
                        }),
                        color: "gray",
                        buttonType: "plain",
                        onAccept() {}
                    }]
                })
            }

            function m(e) {
                let {
                    environment: t,
                    collectionViewBlockStore: r,
                    collectionId: i,
                    transaction: d,
                    schema: s,
                    initializeWithAllDefaultQuestions: u
                } = e;
                if (!r) return;
                let c = r.getSpaceId(),
                    {
                        formBlockStore: m,
                        layoutStore: p
                    } = function(e) {
                        var t, r, i;
                        let {
                            environment: a,
                            spaceId: n,
                            inMemoryRecordCache: l,
                            transaction: d,
                            schema: s,
                            initializeWithAllDefaultQuestions: u
                        } = e, c = Object.keys(s).find(e => {
                            var t;
                            return (null == (t = s[e]) ? void 0 : t.type) === "multi_select"
                        }), m = !!(u && void 0 !== c), p = (0, o(295447).Z1)({
                            environment: a,
                            table: o(832375).evP,
                            spaceId: n
                        }), f = (0, o(295447).Z1)({
                            environment: a,
                            table: o(832375).lo9,
                            spaceId: n
                        }), y = m ? (0, o(295447).Z1)({
                            environment: a,
                            table: o(832375).lo9,
                            spaceId: n
                        }) : void 0, b = o(124937).Wv({
                            id: p,
                            environment: a,
                            type: "form",
                            permissions: (0, o(703049).eb)(),
                            inMemoryRecordCache: l,
                            transaction: d
                        }), I = o(124937).eC({
                            environment: a,
                            table: o(832375).zx0,
                            value: {
                                space_id: n,
                                parent_table: o(832375).evP,
                                parent_id: b.id,
                                modules: (0, o(200394).oP)(f, y)
                            },
                            inMemoryRecordCache: l,
                            transaction: d
                        });
                        return (0, o(715144).z)({
                            stores: [b],
                            update: {
                                form_layout_pointer: {
                                    id: I.id,
                                    spaceId: n,
                                    table: o(832375).zx0
                                }
                            },
                            transaction: d
                        }), g({
                            environment: a,
                            questionId: f,
                            spaceId: n,
                            layoutId: I.id,
                            propertyId: o(439368).rn,
                            initialQuestionTitle: (null == (t = s[o(439368).rn]) ? void 0 : t.name) ? ? "",
                            inMemoryRecordCache: l,
                            transaction: d,
                            shouldSyncQuestionNameToPropertyName: !0,
                            shouldLogEvent: !1,
                            logData: {
                                area: "form_layout_schema",
                                layoutStore: I
                            }
                        }), m && y && c && g({
                            environment: a,
                            questionId: y,
                            spaceId: n,
                            layoutId: I.id,
                            propertyId: c,
                            initialQuestionTitle: (null == (r = s[c]) ? void 0 : r.name) ? ? "",
                            existingFormQuestionConfig: {
                                propertyId: c,
                                name: [
                                    [(null == (i = s[c]) ? void 0 : i.name) ? ? ""]
                                ],
                                propertyTypeSpecificConfig: {
                                    multi_select: {
                                        maxSelectionCount: 1
                                    }
                                }
                            },
                            inMemoryRecordCache: l,
                            transaction: d,
                            shouldSyncQuestionNameToPropertyName: !0,
                            shouldLogEvent: !1,
                            logData: {
                                area: "form_layout_schema",
                                layoutStore: I
                            }
                        }), {
                            formBlockStore: b,
                            layoutStore: I
                        }
                    }({
                        environment: t,
                        spaceId: c,
                        inMemoryRecordCache: r.inMemoryRecordCache,
                        transaction: d,
                        schema: s,
                        initializeWithAllDefaultQuestions: u
                    }),
                    f = (0, o(723732).i)({
                        environment: t,
                        collectionViewBlockStore: r,
                        collectionView: {
                            type: "form_editor",
                            parent_id: r.id,
                            parent_table: o(832375).evP,
                            alive: !0,
                            space_id: c,
                            name: o(962299).A.formatMessage(a.newFormViewName),
                            format: {
                                form_block_pointer: {
                                    id: m.id,
                                    spaceId: c,
                                    table: o(832375).evP
                                },
                                collection_pointer: {
                                    id: i,
                                    spaceId: c,
                                    table: o(832375).VlP
                                }
                            }
                        },
                        transaction: d
                    });
                return (0, o(173157).z)({
                    store: m,
                    data: {
                        parent_id: f.id,
                        parent_table: o(832375).Gy1,
                        alive: !0
                    },
                    transaction: d
                }), o(835962).A.setState({
                    openTooltip: f.id
                }), (0, o(376730).H)(t, n), l(t, d), {
                    newViewId: f.id,
                    layoutStore: p,
                    formId: m.id
                }
            }

            function p(e) {
                let {
                    environment: t,
                    navigateToFormBuilder: r,
                    spaceStore: i,
                    spaceViewStore: n
                } = e;
                if (!(0, o(194020).E)(t, i)) return void(0, o(703183).Q)(t, i);
                if (!(i && i.canEdit() && n)) return;
                let l = i.id,
                    d = t.idCreator.getSpaceIdCreatorSync(l);
                (0, o(377796).createAndCommit)({
                    environment: t,
                    userAction: "formActions.createAndNavigateToFormInPrivate",
                    cellTarget: {
                        spaceWithId: l
                    },
                    canUndo: !0,
                    perform: e => {
                        let {
                            targetBlockStore: s
                        } = (0, o(963771).initializeTemplate)({
                            environment: t,
                            sourceBlockId: "root",
                            targetBlockPointer: (0, o(295447).zP)({
                                environment: t,
                                table: o(832375).evP,
                                spaceId: l
                            }),
                            sourceBlockSubtree: (0, o(412951).partialRecordMapToRecordMap)((0, o(737270).m)({
                                isInline: !0,
                                name: (0, o(247438).x9d)(o(962299).A.formatMessage(a.formDatabaseTitle))
                            })),
                            targetRecordCache: i.inMemoryRecordCache,
                            transaction: e,
                            deepCopyTransclusionContainers: !0,
                            resolveTemplateVariables: !1,
                            spaceIdCreator: d
                        }), u = s.getCollectionStoreIfSingleSource();
                        if (!u) throw Error("Collection store not found");
                        let c = u.getSchema();
                        if (!c) throw Error("Schema not found");
                        m({
                            environment: t,
                            transaction: e,
                            collectionViewBlockStore: s,
                            collectionId: u.id,
                            schema: c,
                            initializeWithAllDefaultQuestions: !0
                        }), f({
                            environment: t,
                            transaction: e,
                            collectionViewBlockStore: s,
                            collectionStore: u,
                            schema: c
                        }), o(964232).yM({
                            environment: t,
                            spaceStore: i,
                            spaceViewStore: n,
                            pageStore: s,
                            isPrivate: !0,
                            transaction: e,
                            location: {
                                type: "prepend"
                            }
                        }), r && (0, o(545586).navigateToBlock)({
                            environment: t,
                            store: s,
                            pageVisitSource: o(254656).y8.CreateFormDeepLink
                        })
                    }
                })
            }

            function f(e) {
                let {
                    environment: t,
                    collectionViewBlockStore: r,
                    collectionStore: i,
                    transaction: n
                } = e, l = r.getSpaceId(), d = Object.keys(e.schema).find(t => {
                    var o;
                    return (null == (o = e.schema[t]) ? void 0 : o.type) === "created_by"
                });
                (0, o(723732).i)({
                    environment: t,
                    collectionViewBlockStore: r,
                    collectionView: {
                        type: "table",
                        parent_id: r.id,
                        parent_table: o(832375).evP,
                        alive: !0,
                        name: o(962299).A.formatMessage(a.responsesViewName),
                        space_id: l,
                        format: {
                            table_properties: [{
                                property: "title",
                                visible: !0
                            }, ...d ? [{
                                property: d,
                                visible: !0
                            }] : []],
                            table_wrap: !0,
                            collection_pointer: i.pointer
                        }
                    },
                    transaction: n
                })
            }

            function g(e) {
                let {
                    environment: t,
                    questionId: r,
                    spaceId: i,
                    layoutId: a,
                    propertyId: n,
                    initialQuestionTitle: l,
                    inMemoryRecordCache: d,
                    transaction: s,
                    shouldSyncQuestionNameToPropertyName: u,
                    collectionContextStore: c,
                    shouldLogEvent: m = !0,
                    autofocusTitle: p,
                    existingFormQuestionConfig: f,
                    autoCreatedFromExistingDatabase: g
                } = e;
                o(124937).vt({
                    environment: t,
                    table: o(832375).lo9,
                    args: {
                        id: r,
                        space_id: i,
                        parentPointer: {
                            id: a,
                            table: o(832375).zx0,
                            spaceId: i
                        },
                        config: { ...f,
                            propertyId: n,
                            name: [
                                [l]
                            ],
                            shouldSyncQuestionNameToPropertyName: u
                        }
                    },
                    inMemoryRecordCache: d,
                    transaction: s
                }), m && (0, o(104310).u)({
                    event: {
                        eventName: "add_form_question",
                        eventProperties: { ...(0, o(805999).YA)({
                                collectionContextStore: c,
                                propertyId: n,
                                questionId: r,
                                area: e.logData.area,
                                parentModuleId: e.logData.parentModuleId,
                                layoutStore: e.logData.layoutStore
                            }),
                            auto_created_from_existing_database: !!g
                        }
                    }
                }), p && p.autofocusedQuestionTextStore.autofocusQuestionTitle({
                    questionId: r
                })
            }

            function y(e) {
                let t, {
                        type: i,
                        module: a,
                        environment: n,
                        transaction: l,
                        layoutStore: d,
                        position: s,
                        duplicateModuleMapping: u,
                        shouldLogEvent: c = !0,
                        collectionContextStore: m,
                        sessionId: p
                    } = e,
                    f = a && u.get(a.id) || (0, r().Ay)();
                if ("formQuestion" === i) {
                    var y;
                    let {
                        collectionStore: r,
                        propertyId: i,
                        autofocusTitle: p,
                        existingFormQuestionConfig: b,
                        autoCreatedFromExistingDatabase: I,
                        propertyIdMapping: v
                    } = e, _ = r.getSchema()[i];
                    if (!_) throw Error(`No schema found for property ${i}`);
                    let h = b ? (0, o(247438).q4_)(null == b ? void 0 : b.name) : _.name,
                        A = d.getSpaceId(),
                        w = (0, o(295447).Z1)({
                            environment: n,
                            table: o(832375).lo9,
                            spaceId: A
                        });
                    if (!(0, o(971162).uW)(s.area)) throw Error("Module is not allowed in this area");
                    g({
                        environment: n,
                        questionId: w,
                        spaceId: A,
                        layoutId: d.id,
                        propertyId: i,
                        initialQuestionTitle: h,
                        inMemoryRecordCache: d.inMemoryRecordCache,
                        transaction: l,
                        shouldSyncQuestionNameToPropertyName: !0,
                        shouldLogEvent: c,
                        logData: {
                            area: s.area,
                            parentModuleId: null == a ? void 0 : a.parentModuleId,
                            layoutStore: d
                        },
                        collectionContextStore: m,
                        autofocusTitle: p,
                        existingFormQuestionConfig: b,
                        autoCreatedFromExistingDatabase: I
                    }), t = {
                        type: "formQuestion",
                        id: f,
                        formQuestionId: w,
                        ...a ? {
                            parentModuleId: u.get(a.parentModuleId ? ? "") ? ? a.parentModuleId,
                            parentConditionalGroupId: a.parentConditionalGroupId,
                            conditionalGroups: null == (y = a.conditionalGroups) ? void 0 : y.map(e => ({ ...e,
                                trigger: { ...e.trigger,
                                    property: v.get(e.trigger.property) ? ? e.trigger.property
                                },
                                children: []
                            }))
                        } : {}
                    }
                } else t = {
                    type: "placeholder",
                    id: f,
                    parentModuleId: u.get(a.parentModuleId ? ? ""),
                    parentConditionalGroupId: a.parentConditionalGroupId
                };
                return (0, o(18028).UQ)({
                    environment: n,
                    transaction: l,
                    layoutStore: d,
                    position: s,
                    module: t,
                    sessionId: p,
                    isPropertyCreation: !1
                }), {
                    moduleId: f
                }
            }

            function b(e) {
                let {
                    environment: t,
                    transaction: i,
                    layoutStore: a,
                    propertyId: n,
                    initialQuestionTitle: l,
                    moduleId: d,
                    shouldSyncQuestionNameToPropertyName: s,
                    collectionContextStore: u,
                    autofocusTitle: c,
                    area: m,
                    sessionId: p
                } = e, f = a.getModel();
                if (!f) throw Error("Layout model cannot be undefined");
                let y = a.getSpaceId(),
                    b = (0, o(295447).Z1)({
                        environment: t,
                        table: o(832375).lo9,
                        spaceId: y
                    });
                g({
                    environment: t,
                    questionId: b,
                    spaceId: y,
                    layoutId: f.id,
                    propertyId: n,
                    initialQuestionTitle: l,
                    inMemoryRecordCache: a.inMemoryRecordCache,
                    transaction: i,
                    shouldSyncQuestionNameToPropertyName: s,
                    collectionContextStore: u,
                    autofocusTitle: c,
                    logData: {
                        area: m,
                        parentModuleId: "form_conditional_modules" === m ? e.parentModuleId : void 0,
                        layoutStore: a
                    }
                });
                let I = {
                    type: "formQuestion",
                    id: d ? ? (0, r().Ay)(),
                    formQuestionId: b,
                    ..."form_conditional_modules" === m ? {
                        parentModuleId: e.parentModuleId,
                        parentConditionalGroupId: e.parentConditionalGroupId
                    } : {}
                };
                return d ? (0, o(660512).UQ)({
                    environment: t,
                    transaction: i,
                    layoutStore: a,
                    position: {
                        area: m,
                        moduleId: d
                    },
                    updatedModule: I
                }) : "form_conditional_modules" === m && (0, o(18028).UQ)({
                    environment: t,
                    transaction: i,
                    layoutStore: a,
                    position: {
                        type: "absolute",
                        area: "form_conditional_modules",
                        parentConditionalGroupId: e.parentConditionalGroupId,
                        parentModuleId: e.parentModuleId
                    },
                    module: I,
                    sessionId: p,
                    isPropertyCreation: !1
                }), {
                    updatedModuleId: I.id,
                    formQuestionId: b
                }
            }

            function I({
                environment: e,
                formBlockStore: t,
                isClosed: r
            }) {
                if (t.getIsFormClosed() === r) return;
                let i = t.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formActions.changeFormClosedState",
                    environment: e,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(715144).z)({
                            stores: [t],
                            update: {
                                form_config: { ...t.getFormConfig(),
                                    is_form_closed: r
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }

            function v({
                environment: e,
                formBlockStore: t,
                permissions: r
            }) {
                if (t.getFormSubmissionPermissions() === r) return;
                let i = t.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formActions.changeFormSubmissionPermissions",
                    environment: e,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(715144).z)({
                            stores: [t],
                            update: {
                                form_config: { ...t.getFormConfig(),
                                    submission_permissions: r
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }

            function _({
                environment: e,
                formBlockStore: t,
                template: r
            }) {
                let i = t.getFormSubmissionTemplate();
                if ((0, o(381453).n4)(i, r)) return;
                let a = t.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formActions.changeFormSubmissionTemplate",
                    environment: e,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(368198).K)({
                            store: t.getFormatStore().getKeyStore("form_config").getKeyStore("form_submission_template"),
                            transaction: e,
                            value: r
                        })
                    }
                })
            }

            function h({
                environment: e,
                formBlockStore: t
            }) {
                let r = t.getIsFormAnonymousSubmissionEnabled(),
                    i = t.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formActions.changeAnonymousFormSubmissionState",
                    environment: e,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(715144).z)({
                            stores: [t],
                            update: {
                                form_config: { ...t.getFormConfig(),
                                    anonymous_submissions: !r
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }

            function A({
                environment: e,
                formBlockStore: t
            }) {
                var r;
                let i = t.getSiteStore();
                if (!i) return;
                let a = (null == (r = i.getHeader()) ? void 0 : r.hideWatermark) ? ? !1,
                    n = t.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formBlockStore.publicForm.toggleNotionBranding",
                    environment: e,
                    cellTarget: n ? {
                        spaceWithId: n
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(421439).y4)({
                            store: i,
                            operation: {
                                pointer: i.pointer,
                                path: ["header", "hideWatermark"],
                                command: "set",
                                args: !a
                            },
                            transaction: e
                        })
                    }
                })
            }

            function w({
                environment: e,
                newPropertyId: t,
                formQuestionStore: r
            }) {
                let i = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "formQuestion.remapQuestionToNewProperty",
                    environment: e,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(421439).y4)({
                            store: r,
                            operation: {
                                pointer: r.pointer,
                                path: ["config", "propertyId"],
                                command: "set",
                                args: t
                            },
                            transaction: e
                        })
                    }
                })
            }

            function M(e) {
                let {
                    environment: t,
                    collectionSchemaPropertyIds: r,
                    temporaryRecordCache: i,
                    spaceId: a,
                    collectionId: n,
                    formMode: l
                } = e, d = {};
                r.forEach(e => {
                    d[e] = (0, o(247438).x9d)("")
                });
                let {
                    performResult: s
                } = (0, o(377796).createAndCommit)({
                    environment: t,
                    userAction: "formActions.createDummyFormPage",
                    cellTarget: {
                        spaceWithId: a
                    },
                    perform: e => {
                        let r = o(124937).Wv({
                            environment: t,
                            type: o(955630).xd.page,
                            inMemoryRecordCache: i,
                            transaction: e,
                            spaceId: a,
                            properties: { ...d
                            }
                        });
                        return (0, o(173157).z)({
                            store: r,
                            data: {
                                alive: "viewer" === l,
                                parent_id: n,
                                parent_table: "collection"
                            },
                            transaction: e
                        }), r
                    },
                    canUndo: !1
                });
                return s
            }
            async function S(e) {
                let {
                    environment: t,
                    formBlockStore: r,
                    collectionSchema: a,
                    onAccept: n
                } = e;
                if (!a) return;
                let l = (0, o(805999).Dx)(r),
                    d = (null == l ? void 0 : l.getNormalizedFormQuestionStoresForFormLayout({
                        collectionSchema: a
                    })) ? ? [],
                    s = [];
                if (d.forEach(e => {
                        let r = e.getPropertyId();
                        if (!r) return;
                        let i = (0, o(561872)._g)({
                                schema: a,
                                property: r
                            }),
                            n = null == i ? void 0 : i.type;
                        !n || (0, o(805999).CK)({
                            environment: t,
                            propertyType: n,
                            propertySchema: i,
                            isPublicForm: !0
                        }) && s.push(e)
                    }), 0 === s.length) return void n();
                let u = s.map((e, t) => {
                        let r = (0, o(458230).r4)({
                                textValue: e.getNameStore().getValue(),
                                getRecordModel: e.getRecordModel,
                                deterministic: !0,
                                userTimeZone: (0, o(714350).P)(),
                                intl: o(962299).A.getIntl()
                            }),
                            a = t === s.length - 1;
                        return (0, i.jsx)("div", {
                            style: {
                                fontSize: 14,
                                textAlign: "start",
                                padding: "8px 12px",
                                borderBottom: a ? void 0 : `1px solid ${o(632079).Tj.border.secondaryTranslucent}`
                            },
                            children: r
                        }, e.id)
                    }),
                    {
                        accept: c
                    } = await o(647095).Gh({
                        message: (0, i.jsx)(o(109939).sA, {
                            id: "formEditorActions.maybeAlertAboutUnsupportedPublicQuestions.message",
                            defaultMessage: "These questions are not supported in public forms and will not be shown to respondents:"
                        }),
                        description: (0, i.jsx)("div", {
                            style: {
                                borderRadius: 6,
                                border: `1px solid ${o(632079).Tj.border.secondaryTranslucent}`,
                                width: "calc(100% + 24px)",
                                marginInlineStart: -12,
                                marginTop: 12,
                                maxHeight: 210,
                                overflow: "auto"
                            },
                            children: u
                        }),
                        acceptLabel: (0, i.jsx)(o(109939).sA, {
                            id: "formEditorActions.maybeAlertAboutUnsupportedPublicQuestions.acceptLabel",
                            defaultMessage: "Got it"
                        }),
                        acceptColor: "blue",
                        cancelButtonType: "plain",
                        mode: "wide"
                    });
                c && n()
            }
        }
    }
]);