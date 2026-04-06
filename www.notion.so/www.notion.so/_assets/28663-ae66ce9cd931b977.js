"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [28663], {
        150172: (e, t, o) => {
            function r(e, t) {
                (0, o(614128).W)({
                    environment: e,
                    eventName: "timeline_view",
                    key: "timeline_view",
                    throttleSeconds: 5,
                    eventProperties: t
                })
            }

            function l(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("timeline_zoom_level_update", t)
            }

            function a(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("timeline_today_click", t)
            }

            function i(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "timeline_shift_time_click",
                        eventProperties: t
                    }
                })
            }

            function n(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "timeline_toggle_table_click",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "timeline_item_scroll_arrow_click",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("timeline_item_resize", t)
            }

            function c(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "timeline_dependency_arrow_add",
                        eventProperties: t
                    }
                })
            }

            function u(e, t) {
                (0, o(104310).u)({
                    event: {
                        eventName: "timeline_dependency_arrow_delete",
                        eventProperties: t
                    }
                })
            }

            function g(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    timelineState: l,
                    isFullScreen: a,
                    isRootChild: i
                } = e, n = l.zoomLevelStore.state, s = r.normalizedFormatStore.state, d = (0, o(861716).iw)({
                    environment: t,
                    format: s,
                    isFullScreen: a,
                    isRootChild: i
                }), c = d && s.timeline_table_properties ? s.timeline_table_properties.length : 0, u = s.timeline_properties || [], g = u.filter(e => "title" !== e.property);
                return {
                    zoom_level: n,
                    show_table: d,
                    show_table_properties_count: c,
                    show_timeline_title: u.length !== g.length,
                    show_timeline_properties_count: g.length
                }
            }
            o.d(t, {
                AP: () => a,
                VD: () => n,
                ZR: () => g,
                gp: () => d,
                i6: () => i,
                iH: () => r,
                iT: () => s,
                m2: () => u,
                xY: () => c,
                z2: () => l
            }), o(898992), o(354520)
        },
        168925: (e, t, o) => {
            o.d(t, {
                f: () => l
            });
            let r = (0, o(109939).YK)({
                removeSortingConfirmation: {
                    id: "databaseActions.removeSortingConfirmationDialog.prompt",
                    defaultMessage: "Would you like to remove sorting?"
                },
                removeSortingButton: {
                    id: "databaseActions.removeSortingConfirmationDialog.removeSortingButton.label",
                    defaultMessage: "Remove"
                },
                removeSortingCancel: {
                    id: "databaseActions.removeSortingConfirmationDialog.cancelRemoveSortingButton.label",
                    defaultMessage: "Don’t remove"
                },
                removeCollectionSortingLibraryConfirmation: {
                    id: "databaseActions.removeCollectionSortingLibraryConfirmationDialog.prompt",
                    defaultMessage: "Would you like to change to manual sorting?"
                },
                removeCollectionSortingLibraryButton: {
                    id: "databaseActions.removeCollectionSortingLibraryConfirmationDialog.removeSortingButton.label",
                    defaultMessage: "Yes, use manual sort"
                },
                removeCollectionSortingLibraryCancel: {
                    id: "databaseActions.removeCollectionSortingLibraryConfirmationDialog.cancelRemoveSortingButton.label",
                    defaultMessage: "No, keep last edited"
                }
            });

            function l(e) {
                let {
                    environment: t,
                    collectionContextStore: l
                } = e, a = (0, o(845001).q)(l.capabilitiesStore, l.permissionScopesStore), i = l.collectionViewBlockStore(), n = l.collectionViewStore();
                if (!n || !i) return !1;
                let s = l.currentViewHasSort(),
                    d = (0, o(951390).gv)(l),
                    c = n.getType(),
                    u = l.isInLibraryBlock();
                if ((s || d) && c && o(799514).gP[c] && a) {
                    let {
                        confirmationMessage: e,
                        confirmButtonLabel: a,
                        cancelButtonLabel: i
                    } = u ? {
                        confirmationMessage: r.removeCollectionSortingLibraryConfirmation,
                        confirmButtonLabel: r.removeCollectionSortingLibraryButton,
                        cancelButtonLabel: r.removeCollectionSortingLibraryCancel
                    } : {
                        confirmationMessage: r.removeSortingConfirmation,
                        confirmButtonLabel: r.removeSortingButton,
                        cancelButtonLabel: r.removeSortingCancel
                    };
                    return o(647095).ui({
                        message: o(962299).A.formatMessage(e),
                        items: [{
                            label: o(962299).A.formatMessage(a),
                            color: u ? "blue" : "red",
                            onAccept: () => {
                                var e;
                                let r = null == (e = l.collectionStore()) ? void 0 : e.getSpaceId();
                                (0, o(377796).createAndCommit)({
                                    userAction: "collectionGroupActions.offerToRemoveSort",
                                    environment: t,
                                    cellTarget: r ? {
                                        spaceWithId: r
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        if ((0, o(66177).f)({
                                                collectionViewStore: n,
                                                update: {
                                                    sort: []
                                                },
                                                transaction: e
                                            }), u && (0, o(962165).b)({
                                                collectionContextStore: l
                                            })) {
                                            var r;
                                            let a = o(728372).AppStoreSidebarSpaceViewStore.state,
                                                i = null == (r = l.collectionViewStore()) || null == (r = r.getCollectionSource()) ? void 0 : r.type;
                                            a && (0, o(190566).gX)(i) && (0, o(536806).c)({
                                                environment: t,
                                                transaction: e,
                                                spaceViewStore: a,
                                                update: {
                                                    type: "sortOption",
                                                    value: "manual"
                                                },
                                                sectionType: i
                                            })
                                        }
                                    }
                                });
                                let a = l.temporaryStateStore.state;
                                l.temporaryStateStore.setState({ ...a,
                                    sorts: void 0
                                })
                            }
                        }, {
                            label: o(962299).A.formatMessage(i),
                            onAccept: () => {}
                        }],
                        showCancel: !1,
                        keepFocus: !0
                    }), !0
                }
                return !1
            }
        },
        183502: (e, t, o) => {
            o.d(t, {
                S: () => r
            });

            function r(e) {
                let {
                    searchQuery: t,
                    collectionContextStore: o
                } = e;
                o.collectionViewStore() && (o.searchQueryStore.setState(t || ""), o.groupsStore.resetAllLimits())
            }
        },
        238690: (e, t, o) => {
            o.d(t, {
                u: () => r
            }), o(581454);

            function r(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    before: l,
                    store: a,
                    groupsPointer: i,
                    collectionStore: n,
                    transaction: s,
                    subitemPath: d,
                    subitemInsertDirection: c,
                    from: u,
                    skipSelection: g,
                    skipTemplateInitialization: f
                } = e, p = r.collectionViewStore();
                if (!p) return;
                let m = r.groupsStore.getGroupState(i),
                    S = null == m ? void 0 : m.groupUiParentStore,
                    b = (null == m ? void 0 : m.resultsStore.state) || [];
                if (!S) return;
                let v = o(124937).Wv({
                    environment: t,
                    type: o(955630).xd.page,
                    inMemoryRecordCache: a.inMemoryRecordCache,
                    transaction: s,
                    spaceId: p.pointer.spaceId
                });
                if (u) {
                    let e = "collectionTypedView" === r.contextTypeFromStoreState ? v.getAssociatedCollectionId() : void 0;
                    o(549960).vH(t, {
                        from: u,
                        type: "page",
                        new_page_id: v.id,
                        creating_block_id: v.id,
                        ...o(752242).sl(r, e)
                    })
                }
                let y = (0, o(188993).j)({
                        environment: t,
                        store: v,
                        collectionStore: n,
                        collectionContextStore: r,
                        groupsPointer: i,
                        shouldCoerce: !0,
                        transaction: s
                    }),
                    k = r.defaultPageTemplateStore.state;
                !f && k && o(845422).TB({
                    title: "template",
                    environment: t,
                    store: v,
                    templateStore: k,
                    isKeyboard: !1,
                    isCreateIn: !1,
                    transaction: s,
                    from: "collection_group_actions"
                });
                let C = o(970831).B.createChildStore(S, {
                    table: o(832375).evP,
                    id: v.id
                });
                d && d.length > 0 && (0, o(755744).i)({
                    environment: t,
                    collectionContextStore: r,
                    subitemPath: d,
                    collectionStore: n,
                    store: a,
                    before: !1,
                    insertBlockStore: C,
                    insertDirection: c,
                    transaction: s
                });
                let _ = b.findIndex(e => e.id === a.id),
                    w = l ? _ : _ + 1,
                    h = [...b.slice(0, w), C, ...b.slice(w)];
                if ((0, o(806875).z)({
                        resultIds: h.map(e => e.id),
                        collectionViewStore: p,
                        collectionContextStore: r,
                        transaction: s
                    }), !g && !y) return void(0, o(908919).V)({
                    environment: t,
                    store: C,
                    peekMode: o(28630).hH(r),
                    resultsStore: null == m ? void 0 : m.resultsStore,
                    collectionContextStore: r,
                    pageVisitSource: o(254656).y8.Create
                });
                if (d) {
                    var M;
                    let e = "into" === c ? a : null == (M = d[d.length - 2]) ? void 0 : M.value.store;
                    return e ? o(970831).B.createChildStore(e, C.pointer) : C
                }
                return g || (0, o(472709).L)({
                    environment: t,
                    store: C
                }), (0, o(168925).f)({
                    environment: t,
                    collectionContextStore: r
                }), C
            }
        },
        350445: (e, t, o) => {
            o.d(t, {
                D: () => i
            }), o(944114), o(581454);
            var r = () => o(970831),
                l = () => o(832375),
                a = () => o(188993);

            function i(e) {
                var t, i;
                let {
                    environment: n,
                    collectionContextStore: s,
                    before: d,
                    insertStores: c,
                    store: u,
                    groupsPointer: g,
                    transaction: f
                } = e, p = s.collectionViewStore(), m = (null == (t = s.groupsStore.getGroupState(g)) ? void 0 : t.resultsStore.state) || [], S = null == (i = s.groupsStore.getGroupState(g)) ? void 0 : i.groupUiParentStore;
                if (!S) return [];
                let b = [];
                for (let t of c) {
                    let o = e.collectionStore ? ? t.getAssociatedCollectionStore();
                    o && ((0, a().j)({
                        environment: n,
                        store: t,
                        collectionStore: o,
                        collectionContextStore: s,
                        groupsPointer: g,
                        shouldCoerce: !0,
                        transaction: f
                    }), b.push(r().B.createChildStore(S, {
                        table: l().evP,
                        id: t.id
                    })))
                }
                let v = m.indexOf(u),
                    y = d ? v : v + 1,
                    k = [...m.slice(0, y), ...b, ...m.slice(y)];
                return p && (0, o(806875).z)({
                    resultIds: k.map(e => e.id),
                    collectionViewStore: p,
                    collectionContextStore: s,
                    transaction: f
                }), s.groupsStore.setLimitIfGreater(g, k.length), b
            }
        },
        411264: (e, t, o) => {
            o.d(t, {
                D: () => r
            });
            let r = (0, o(109939).YK)({
                inputPlaceholder: {
                    defaultMessage: "Filter by…",
                    id: "database.viewSettings.createFilterTab.inputPlaceholder"
                },
                propertyInputPlaceholder: {
                    defaultMessage: "Search for a property…",
                    id: "database.viewSettings.mobileSheet.propertyInputPlaceholder"
                },
                sortTitle: {
                    defaultMessage: "Sort",
                    id: "database.viewSettings.mainTab.sortButton.title"
                },
                advancedFilterTitle: {
                    defaultMessage: "Advanced filter",
                    id: "database.viewSettings.createFilterTab.advancedFilterTitle"
                },
                addAdvancedFilterTitle: {
                    defaultMessage: "Add advanced filter",
                    id: "database.viewSettings.createFilterTab.addAdvancedFilter.title"
                },
                advancedFilterRulesCount: {
                    defaultMessage: "{ruleCount, plural, one {{ruleCount} rule} other {{ruleCount} rules}}",
                    id: "database.viewSettings.createFilterTab.advancedFilterRulesCount.title"
                },
                filterButtonTitle: {
                    defaultMessage: "Filter",
                    id: "database.viewSettings.mainTab.filterButton.title"
                },
                learnMoreAboutScimAttributes: {
                    defaultMessage: "Learn about SCIM attributes",
                    id: "database.viewSettings.scimPropertiesTab.learnMoreAboutScimAttributes"
                },
                loadingDataMessage: {
                    defaultMessage: "It might take a couple of seconds for the data to load into the database",
                    id: "database.viewSettings.scimPropertiesTab.loadingDataMessage"
                },
                numberOfFiltersTitle: {
                    defaultMessage: "{numberOfFilters, plural, one {{numberOfFilters} filter} other {{numberOfFilters} filters}}",
                    id: "database.viewSettings.mainTab.filterButton.filters.title"
                },
                noFiltersTitle: {
                    defaultMessage: "No filters",
                    id: "database.viewSettings.mainTab.filterButton.noFilters.title"
                },
                openFullscreenButton: {
                    defaultMessage: "Open as full page",
                    id: "database.collectionViewBlock.openFullscreenButton.label"
                },
                lockDatabaseMultiSourceTooltip: {
                    defaultMessage: "Lock views and data sources in this database",
                    id: "database.lockDatabase.multiSourceTooltip"
                },
                lockDatabaseViewsTooltip: {
                    defaultMessage: "Lock all views in this database",
                    id: "database.lockDatabaseViews.tooltip"
                },
                visibleToAllWorkspaceMembers: {
                    defaultMessage: "Visible to all workspace members",
                    id: "database.viewSettings.scimPropertiesTab.visibleToAllWorkspaceMembers"
                }
            })
        },
        674788: (e, t, o) => {
            o.d(t, {
                A: () => l
            }), o(296540);
            var r = o(474848);

            function l(e) {
                return (0, r.jsx)(o(746434).E, {
                    style: e.style,
                    content: (0, r.jsx)(o(109939).sA, {
                        id: "AlphaBadgeComponent.label",
                        defaultMessage: "Alpha"
                    })
                })
            }
        },
        746998: (e, t, o) => {
            o.d(t, {
                ZN: () => i,
                mN: () => l,
                qo: () => d
            });
            let r = (0, o(109939).YK)({
                default: {
                    defaultMessage: "Default",
                    id: "colors.select.lightGray"
                },
                gray: {
                    defaultMessage: "Gray",
                    id: "colors.select.gray"
                },
                brown: {
                    defaultMessage: "Brown",
                    id: "colors.select.brown"
                },
                orange: {
                    defaultMessage: "Orange",
                    id: "colors.select.orange"
                },
                yellow: {
                    defaultMessage: "Yellow",
                    id: "colors.select.yellow"
                },
                green: {
                    defaultMessage: "Green",
                    id: "colors.select.green"
                },
                blue: {
                    defaultMessage: "Blue",
                    id: "colors.select.blue"
                },
                purple: {
                    defaultMessage: "Purple",
                    id: "colors.select.purple"
                },
                pink: {
                    defaultMessage: "Pink",
                    id: "colors.select.pink"
                },
                red: {
                    defaultMessage: "Red",
                    id: "colors.select.red"
                }
            });

            function l(e) {
                let t = r[e] || r.gray;
                return o(962299).A.formatMessage(t)
            }
            let a = (0, o(109939).YK)({
                default_background: {
                    defaultMessage: "Default",
                    id: "colors.blockColor.lightGray"
                },
                gray_background: {
                    defaultMessage: "Gray",
                    id: "colors.blockColor.gray"
                },
                brown_background: {
                    defaultMessage: "Brown",
                    id: "colors.blockColor.brown"
                },
                orange_background: {
                    defaultMessage: "Orange",
                    id: "colors.blockColor.orange"
                },
                yellow_background: {
                    defaultMessage: "Yellow",
                    id: "colors.blockColor.yellow"
                },
                teal_background: {
                    defaultMessage: "Green",
                    id: "colors.blockColor.green"
                },
                blue_background: {
                    defaultMessage: "Blue",
                    id: "colors.blockColor.blue"
                },
                purple_background: {
                    defaultMessage: "Purple",
                    id: "colors.blockColor.purple"
                },
                pink_background: {
                    defaultMessage: "Pink",
                    id: "colors.blockColor.pink"
                },
                red_background: {
                    defaultMessage: "Red",
                    id: "colors.blockColor.red"
                }
            });

            function i(e) {
                let t = a[e];
                return o(962299).A.formatMessage(t)
            }
            let n = (0, o(109939).YK)({
                    foregroundColorDefault: {
                        id: "action.foregroundColor.default.name",
                        defaultMessage: "Default text"
                    },
                    foregroundColorGray: {
                        id: "action.foregroundColor.gray.name",
                        defaultMessage: "Gray text"
                    },
                    foregroundColorBrown: {
                        id: "action.foregroundColor.brown.name",
                        defaultMessage: "Brown text"
                    },
                    foregroundColorOrange: {
                        id: "action.foregroundColor.orange.name",
                        defaultMessage: "Orange text"
                    },
                    foregroundColorYellow: {
                        id: "action.foregroundColor.yellow.name",
                        defaultMessage: "Yellow text"
                    },
                    foregroundColorGreen: {
                        id: "action.foregroundColor.green.name",
                        defaultMessage: "Green text"
                    },
                    foregroundColorBlue: {
                        id: "action.foregroundColor.blue.name",
                        defaultMessage: "Blue text"
                    },
                    foregroundColorPurple: {
                        id: "action.foregroundColor.purple.name",
                        defaultMessage: "Purple text"
                    },
                    foregroundColorPink: {
                        id: "action.foregroundColor.pink.name",
                        defaultMessage: "Pink text"
                    },
                    foregroundColorRed: {
                        id: "action.foregroundColor.red.name",
                        defaultMessage: "Red text"
                    },
                    backgroundColorGray: {
                        id: "action.backgroundColor.gray.name",
                        defaultMessage: "Gray background"
                    },
                    backgroundColorBrown: {
                        id: "action.backgroundColor.brown.name",
                        defaultMessage: "Brown background"
                    },
                    backgroundColorOrange: {
                        id: "action.backgroundColor.orange.name",
                        defaultMessage: "Orange background"
                    },
                    backgroundColorYellow: {
                        id: "action.backgroundColor.yellow.name",
                        defaultMessage: "Yellow background"
                    },
                    backgroundColorGreen: {
                        id: "action.backgroundColor.green.name",
                        defaultMessage: "Green background"
                    },
                    backgroundColorBlue: {
                        id: "action.backgroundColor.blue.name",
                        defaultMessage: "Blue background"
                    },
                    backgroundColorPurple: {
                        id: "action.backgroundColor.purple.name",
                        defaultMessage: "Purple background"
                    },
                    backgroundColorPink: {
                        id: "action.backgroundColor.pink.name",
                        defaultMessage: "Pink background"
                    },
                    backgroundColorRed: {
                        id: "action.backgroundColor.red.name",
                        defaultMessage: "Red background"
                    },
                    backgroundColorDefault: {
                        id: "action.backgroundColor.default.name",
                        defaultMessage: "Default background"
                    }
                }),
                s = {
                    default: { ...n.foregroundColorDefault
                    },
                    gray: { ...n.foregroundColorGray
                    },
                    brown: { ...n.foregroundColorBrown
                    },
                    orange: { ...n.foregroundColorOrange
                    },
                    yellow: { ...n.foregroundColorYellow
                    },
                    teal: { ...n.foregroundColorGreen
                    },
                    blue: { ...n.foregroundColorBlue
                    },
                    purple: { ...n.foregroundColorPurple
                    },
                    pink: { ...n.foregroundColorPink
                    },
                    red: { ...n.foregroundColorRed
                    },
                    default_background: { ...n.backgroundColorDefault
                    },
                    gray_background: { ...n.backgroundColorGray
                    },
                    brown_background: { ...n.backgroundColorBrown
                    },
                    orange_background: { ...n.backgroundColorOrange
                    },
                    yellow_background: { ...n.backgroundColorYellow
                    },
                    teal_background: { ...n.backgroundColorGreen
                    },
                    blue_background: { ...n.backgroundColorBlue
                    },
                    purple_background: { ...n.backgroundColorPurple
                    },
                    pink_background: { ...n.backgroundColorPink
                    },
                    red_background: { ...n.backgroundColorRed
                    }
                };

            function d(e) {
                return s[e]
            }
        },
        755744: (e, t, o) => {
            o.d(t, {
                i: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    subitemPath: l,
                    collectionStore: a,
                    store: i,
                    before: n,
                    insertBlockStore: s,
                    insertDirection: d,
                    transaction: c
                } = e, u = r.currentSubitemFormatStoreForCollectionStore.state;
                if (!u) return;
                let g = a.getSchema()[u.property];
                if (!g || "relation" !== g.type) return;
                if ("into" === d) {
                    var f;
                    let e = l[l.length - 1],
                        r = e.value.store;
                    o(356975).j$({
                        environment: t,
                        sourceStore: r,
                        destStore: s,
                        position: n ? {
                            type: "before",
                            before: null == (f = e.children[0]) ? void 0 : f.value.store.id
                        } : {
                            type: "after"
                        },
                        propertyWithInverse: u,
                        transaction: c
                    });
                    return
                }
                let p = l[l.length - 2];
                if (!p) return;
                let m = p.value.store;
                o(356975).j$({
                    environment: t,
                    sourceStore: m,
                    destStore: s,
                    propertyWithInverse: u,
                    position: n ? {
                        type: "before",
                        before: i.id
                    } : {
                        type: "after",
                        after: i.id
                    },
                    transaction: c
                })
            }
        },
        792763: (e, t, o) => {
            o.r(t), o.d(t, {
                arrowExpandDiagonalBottomLeftToTopRightIcon: () => l,
                iconDefinition: () => r
            }), o(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.23 3.23 13.54 13.54",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M11.14 4.485h3.491l-4.073 4.073a.625.625 0 0 0 .884.884l4.073-4.073v3.49a.625.625 0 1 0 1.25 0v-5a.625.625 0 0 0-.625-.624h-5a.625.625 0 1 0 0 1.25M4.485 14.631l4.07-4.07a.625.625 0 0 1 .884.884l-4.07 4.07h3.49a.625.625 0 1 1 0 1.25h-5a.625.625 0 0 1-.624-.625v-5a.625.625 0 1 1 1.25 0z"
                    })
                },
                l = (0, o(104509).wt)("arrowExpandDiagonalBottomLeftToTopRight", r, "default")
        },
        917104: (e, t, o) => {
            o.d(t, {
                $N: () => s,
                GB: () => u,
                GZ: () => g,
                L_: () => k,
                MQ: () => b,
                P7: () => S,
                Pt: () => m,
                Tq: () => y,
                Xt: () => n,
                bu: () => i,
                cd: () => v,
                dO: () => C,
                eW: () => f,
                k3: () => a,
                n_: () => l,
                sd: () => p,
                v7: () => d,
                vt: () => c
            }), o(944114), o(898992), o(672577), o(803949), o(581454), o(737550);
            var r = () => o(41403);

            function l(e) {
                let {
                    collectionViewStore: t,
                    collectionContextStore: r,
                    timelineState: l,
                    environment: i
                } = e, n = (0, o(845001).q)(r.capabilitiesStore, r.permissionScopesStore), s = i.currentUser.id, d = (0, o(861716).UA)(t.id), c = (0, o(861716).yG)(t, i), u = o(381453).sg(() => {
                    if (l.destroyed) return;
                    let e = {
                        zoomLevel: l.zoomLevelStore.state,
                        centerTimestamp: (0, o(861716).o$)(l)
                    };
                    o(255482).K.set({
                        userId: s,
                        key: d,
                        value: e
                    })
                }, 1e3), g = o(381453).sg(() => {
                    if (l.destroyed || !o(205885).A.state.online || !i.currentUser.isLoggedIn() || !n) return;
                    let e = {
                            zoomLevel: l.zoomLevelStore.state,
                            centerTimestamp: (0, o(861716).o$)(l)
                        },
                        r = t.getFormat().timeline_preference;
                    if (!o(381453).n4(r, e)) {
                        let r = t.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "timelineActions.setRemotePreference",
                            environment: i,
                            canUndo: !0,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            perform: r => {
                                (0, o(715144).z)({
                                    stores: [t],
                                    update: {
                                        timeline_preference: e
                                    },
                                    transaction: r
                                })
                            }
                        })
                    }
                }, 5e3);
                l.savePreference = () => {
                    u(), g()
                }, a({
                    timelineState: l,
                    environment: i,
                    ...c
                })
            }

            function a(e) {
                let {
                    timelineState: t,
                    zoomLevel: r,
                    centerTimestamp: l,
                    environment: a
                } = e;
                t.zoomLevelStore.setState(r);
                let n = a.WindowSizeStore.state.width + 2 * o(861716).E6,
                    s = (0, o(861716).C1)(r, n);
                t.currentRangeStore.setState({
                    startTimestamp: l - s / 2,
                    endTimestamp: l + s / 2
                });
                let {
                    savePreference: d
                } = t;
                o(374176).default.afterNextFlush(() => {
                    i({
                        timelineState: t,
                        centerTimestamp: l
                    }), d && d()
                })
            }

            function i(e) {
                let {
                    timelineState: t,
                    centerTimestamp: r
                } = e, {
                    horizontalScroller: l,
                    outerSizeObserver: a
                } = t;
                if (!l) return;
                let i = t.zoomLevelStore.state,
                    {
                        startTimestamp: n,
                        endTimestamp: s
                    } = t.currentRangeStore.state,
                    d = a.rect.state.width;
                if (d === (0, o(861716).w0)(i, s - n)) return;
                let c = (0, o(861716).w0)(i, r - n) - d / 2;
                l.scrollLeft = ((0, o(619157).A1)() ? -1 : 1) * c, t.scrollLeftStore.setState(c)
            }

            function n(e) {
                let {
                    environment: t,
                    store: r,
                    query: l,
                    date: a,
                    schema: i,
                    transaction: n
                } = e, {
                    timeline_by: s
                } = l;
                if (!s) return;
                let d = r.getAssociatedCollectionStore(),
                    c = (null == d ? void 0 : d.getMappedProperty(s)) ? ? s,
                    u = l.timeline_by_end ? (null == d ? void 0 : d.getMappedProperty(l.timeline_by_end)) ? ? l.timeline_by_end : void 0,
                    g = (0, o(861716).u9)({
                        store: r,
                        dateValue: a,
                        query: l,
                        schema: (null == d ? void 0 : d.getSchema()) ? ? i
                    }),
                    f = r.getPropertyValue(c),
                    p = u ? r.getPropertyValue(u) : void 0;
                return (0, o(173157).z)({
                    store: r.getPropertiesStore(),
                    data: g,
                    transaction: n
                }), o(977906).O4({
                    environment: t,
                    store: r,
                    dateProperty: {
                        id: c,
                        newValue: (null == g ? void 0 : g[c]) ? ? [],
                        oldValue: f
                    },
                    otherDateProperty: u ? {
                        id: u,
                        newValue: (null == g ? void 0 : g[u]) ? ? [],
                        oldValue: p
                    } : void 0
                }), r
            }

            function s(e) {
                var t;
                let {
                    environment: r,
                    timelineState: l,
                    collectionStore: a,
                    collectionContextStore: i,
                    store: s,
                    query: d,
                    groupFormat: c,
                    transaction: u
                } = e, g = l.zoomLevelStore.state, f = (0, o(861716).o$)(l), {
                    snapUnit: p,
                    getDateRangePlaceholderDuration: m
                } = o(861716).eM[g], {
                    timeline_by: S
                } = d;
                if (!S) return;
                let b = null == (t = i.groupsStore.getGroupState(c)) ? void 0 : t.resultsStore.state;
                if (!b) return;
                let v = o(906745).DateTime.fromMillis(f),
                    y = (0, o(861716).DY)(v, p),
                    k = (0, o(861716).DY)(m(v), p),
                    C = (0, o(861716).oJ)({
                        startValue: (0, o(25825).Ec)((0, o(714350).P)()),
                        snapUnit: p,
                        desiredStart: y,
                        desiredEnd: k
                    });
                return n({
                    environment: r,
                    store: s,
                    query: d,
                    schema: a.getSchema(),
                    date: C,
                    transaction: u
                }), (0, o(350445).D)({
                    environment: r,
                    collectionStore: a,
                    before: !0,
                    store: b[0],
                    insertStores: [s],
                    collectionContextStore: i,
                    groupsPointer: c ? [c] : [],
                    transaction: u
                }), s
            }

            function d(e) {
                let {
                    type: t,
                    timelineState: r,
                    store: l,
                    startX: a,
                    query: i,
                    schema: n,
                    intl: s,
                    environment: d,
                    formulasModule: c
                } = e, {
                    horizontalScroller: u
                } = r, {
                    startTimestamp: g
                } = r.currentRangeStore.state;
                if (!u) return;
                (0, o(472709).L)({
                    environment: d,
                    store: l
                });
                let f = u.scrollLeft,
                    p = (0, o(861716).Ul)(f, u.scrollWidth, u.clientWidth),
                    {
                        stores: m
                    } = o(584265).default.state,
                    S = o(381453).oE(m.map(e => {
                        let t = (0, o(861716).GM)({
                            store: e,
                            query: i,
                            schema: n,
                            userId: d.currentUser.id,
                            intl: s,
                            formulasModule: c,
                            environment: d
                        });
                        if (t) return {
                            startValue: t,
                            store: e
                        }
                    }));
                r.dragStateStore.setState({
                    type: t,
                    startStore: l,
                    stores: S.map(({
                        store: e
                    }) => e),
                    startValues: S.map(({
                        startValue: e
                    }) => e),
                    temporaryValues: S.map(({
                        startValue: e
                    }) => e),
                    startX: a,
                    startStartTimestamp: g,
                    startScrollLeft: p
                })
            }

            function c(e) {
                let {
                    timelineState: t,
                    store: r,
                    startX: l,
                    startY: a,
                    schema: i,
                    collectionContextStore: n,
                    verticalScroller: s
                } = e, {
                    horizontalScroller: d
                } = t, {
                    startTimestamp: c
                } = t.currentRangeStore.state;
                if (!d || !s) return;
                let u = d.scrollLeft,
                    g = s.scrollTop,
                    f = (0, o(861716).GW)(n, r, i);
                t.drawStateStore.setState({
                    startStore: r,
                    startDependencyRelationPointers: f,
                    temporaryDependencyRelationPointers: [...f],
                    startX: l,
                    startY: a,
                    startScrollLeft: u,
                    startScrollTop: g,
                    startStartTimestamp: c,
                    xOffsetPx: 0,
                    yOffsetPx: 0,
                    tryToCompleteDrawnArrow: !1
                })
            }

            function u(e) {
                let t, {
                        timelineState: r,
                        currentX: l
                    } = e,
                    {
                        horizontalScroller: a
                    } = r,
                    i = r.zoomLevelStore.state,
                    n = r.dragStateStore.state,
                    {
                        startTimestamp: s
                    } = r.currentRangeStore.state;
                if (!n || !a) return;
                let {
                    type: d,
                    startStartTimestamp: c,
                    startValues: u,
                    startScrollLeft: g,
                    startX: f,
                    startStore: p,
                    stores: m
                } = n, {
                    snapUnit: S
                } = o(861716).eM[i], b = a.scrollLeft, v = (0, o(861716).Ul)(b, a.scrollWidth, a.clientWidth) - g + ((0, o(619157).A1)() ? f - l : l - f) + (0, o(861716).w0)(i, s - c), y = (0, o(861716).C1)(i, v), k = u[m.indexOf(p)];
                if (d === o(861716).MB.LeftResizer) {
                    let {
                        start: e
                    } = (0, o(861716).yl)(k, S), r = e.plus(y);
                    t = u.map(e => {
                        let t = (0, o(861716).oJ)({
                            startValue: e,
                            snapUnit: S,
                            desiredStart: r
                        });
                        return (0, o(25825).u7)(t)
                    })
                } else if (d === o(861716).MB.RightResizer) {
                    let {
                        end: e
                    } = (0, o(861716).yl)(k, S), r = e.plus(y);
                    t = u.map(e => {
                        let t = (0, o(861716).oJ)({
                            startValue: e,
                            snapUnit: S,
                            desiredEnd: r
                        });
                        return (0, o(25825).rL)(t)
                    })
                } else d === o(861716).MB.ItemDrag ? t = u.map(e => {
                    let {
                        start: t,
                        end: r
                    } = (0, o(861716).yl)(e, S), l = t.plus(y), a = l.plus(r.valueOf() - t.valueOf());
                    return (0, o(861716).oJ)({
                        startValue: e,
                        snapUnit: S,
                        desiredStart: l,
                        desiredEnd: a
                    })
                }) : (0, o(722371).HB)(d);
                o(381453).n4(n.temporaryValues, t) || r.dragStateStore.setState({ ...n,
                    temporaryValues: t
                })
            }

            function g(e) {
                let {
                    timelineState: t,
                    currentX: r,
                    currentY: l,
                    verticalScroller: a
                } = e, i = t.drawStateStore.state, n = t.zoomLevelStore.state, {
                    startTimestamp: s
                } = t.currentRangeStore.state, {
                    horizontalScroller: d
                } = t;
                if (!i || !d || !a) return;
                let {
                    startDependencyRelationPointers: c,
                    startStore: u,
                    startX: g,
                    startY: f,
                    startScrollLeft: p,
                    startScrollTop: m,
                    startStartTimestamp: S
                } = i, b = d.scrollLeft, v = (0, o(861716).Ul)(b, d.scrollWidth, d.clientWidth), y = a.scrollTop, k = v - p + ((0, o(619157).A1)() ? g - r : r - g) + (0, o(861716).w0)(n, s - S), C = t.hoveredItemStore.state;
                if (C && C !== u && !c.some(e => e.id === C.id)) {
                    let e = [...c, {
                        table: "block",
                        id: C.id,
                        spaceId: C.getSpaceId()
                    }];
                    o(381453).n4(i.temporaryDependencyRelationPointers, e) || t.drawStateStore.setState({ ...i,
                        temporaryDependencyRelationPointers: e,
                        xOffsetPx: void 0,
                        yOffsetPx: void 0
                    })
                } else t.drawStateStore.setState({ ...i,
                    temporaryDependencyRelationPointers: [...c],
                    xOffsetPx: k,
                    yOffsetPx: y - m + (l - f)
                })
            }

            function f(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    timelineState: l,
                    query: a,
                    schema: i,
                    transaction: s
                } = e, d = l.dragStateStore.state, {
                    timeline_by: c
                } = a;
                if (!d || !c) return;
                let {
                    temporaryValues: u,
                    stores: g
                } = d;
                u.forEach((e, l) => {
                    var d, u, f;
                    let p = g[l];
                    n({
                        environment: t,
                        store: p,
                        query: a,
                        schema: i,
                        transaction: s,
                        date: e
                    }), (0, o(85868).E)({
                        environment: t,
                        collection_id: null == (d = r.collectionStore()) ? void 0 : d.id,
                        collection_view_id: null == (u = r.collectionViewStore()) ? void 0 : u.id,
                        collection_view_block_id: null == (f = r.collectionViewBlockStore()) ? void 0 : f.id,
                        block_id: p.id,
                        property: c,
                        property_type: "date",
                        from: "timeline"
                    })
                }), l.dragStateStore.setState(void 0)
            }

            function p(e) {
                var t, r, l, a;
                let i, {
                        timelineState: s,
                        environment: d,
                        transaction: c,
                        collectionContextStore: u,
                        isFullScreen: g,
                        isRootChild: f
                    } = e,
                    p = s.drawStateStore.state,
                    m = s.dateRangePlaceholderStore.state;
                if (!p) return;
                let {
                    startStore: S,
                    startDependencyRelationPointers: b,
                    temporaryDependencyRelationPointers: v
                } = p;
                if (!S) return void s.drawStateStore.setState(void 0);
                if (m.active) {
                    let {
                        date: e,
                        store: t,
                        parentStore: o,
                        groupFormat: r,
                        newTimelineItemProps: l,
                        existingTimelineItemProps: a
                    } = m;
                    if (t && a) {
                        let {
                            query: o,
                            schema: r
                        } = a;
                        n({
                            environment: d,
                            store: t,
                            query: o,
                            schema: r,
                            date: e,
                            transaction: c
                        }), i = {
                            table: "block",
                            id: t.id,
                            spaceId: S.getSpaceId()
                        }
                    } else if (l) {
                        let {
                            query: a,
                            schema: n,
                            isFullScreen: s,
                            canEditTimelineItems: g,
                            subitemPath: f
                        } = l, p = C({
                            environment: d,
                            date: e,
                            store: t,
                            parentStore: o,
                            query: a,
                            schema: n,
                            isFullScreen: s,
                            groupFormat: r,
                            canEditTimelineItems: g,
                            collectionContextStore: u,
                            subitemPath: f,
                            transaction: c,
                            from: "timeline_complete_draw"
                        });
                        p && (i = {
                            table: "block",
                            id: p.id,
                            spaceId: S.getSpaceId()
                        })
                    }
                    s.dateRangePlaceholderStore.setState({
                        active: !1
                    })
                } else i = v.find(e => !b.includes(e));
                let y = (0, o(861716).VC)(u);
                if (y) {
                    let {
                        property: e
                    } = y;
                    i && (o(356975).j$({
                        environment: d,
                        propertyWithInverse: y,
                        sourceStore: S,
                        destStore: o(970831).B.createChildStore(S, i),
                        position: {
                            type: "after"
                        },
                        transaction: c
                    }), (0, o(85868).E)({
                        environment: d,
                        collection_id: null == (r = u.collectionStore()) ? void 0 : r.id,
                        collection_view_id: null == (l = u.collectionViewStore()) ? void 0 : l.id,
                        collection_view_block_id: null == (a = u.collectionViewBlockStore()) ? void 0 : a.id,
                        block_id: S.id,
                        property: e,
                        property_type: "relation",
                        from: "timeline",
                        isFromBulkActionsToolbar: !1,
                        isUnthrottled: !0
                    })), s.drawStateStore.setState(void 0)
                } else(0, o(132425).R)({
                    item: {
                        type: "dependencies",
                        from: "view_options"
                    },
                    collectionSettingsStore: u.settingsStore
                }), s.drawStateStore.setState({ ...p,
                    tryToCompleteDrawnArrow: !0
                });
                let k = null == (t = i) ? void 0 : t.id;
                k && (0, o(150172).xY)(d, { ...(0, o(752242).sl)(u),
                    ...(0, o(150172).ZR)({
                        environment: d,
                        collectionContextStore: u,
                        timelineState: s,
                        isFullScreen: g,
                        isRootChild: f
                    }),
                    dependenciesPropertyID: null == y ? void 0 : y.property,
                    blockedByStoreID: S.id,
                    blockingStoreID: k
                })
            }

            function m(e) {
                let {
                    timelineState: t,
                    environment: r
                } = e;
                t.dragStateStore.state && (t.dragStateStore.setState(void 0), (0, o(471e3).I)({
                    environment: r
                }))
            }

            function S(e) {
                let {
                    timelineState: t,
                    environment: r
                } = e;
                t.drawStateStore.state && (t.drawStateStore.setState(void 0), (0, o(471e3).I)({
                    environment: r
                }))
            }

            function b(e) {
                let {
                    stores: t,
                    collectionViewStore: l,
                    schema: a,
                    transaction: i
                } = e, n = l.getType(), s = (0, o(648256).$)({
                    collectionViewStore: l,
                    schema: a
                }), d = [];
                for (let e of (s && ("calendar" === n ? s.calendar_by && d.push(s.calendar_by) : "timeline" === n && (s.timeline_by && d.push(s.timeline_by), s.timeline_by_end && d.push(s.timeline_by_end))), t))
                    for (let t of d) r().R9({
                        environment: e.environment,
                        store: e.getPropertyStore(t),
                        value: void 0,
                        transaction: i
                    })
            }

            function v(e) {
                let {
                    dependency: t,
                    collectionContextStore: r,
                    environment: l,
                    timelineState: a,
                    isFullScreen: i,
                    isRootChild: n
                } = e, s = (0, o(861716).VC)(r), d = r.collectionStore();
                if (!s || !d) return;
                let {
                    property: c
                } = s, {
                    store: u,
                    relationPointer: g
                } = t, f = u.getSchema()[c];
                if (!f || "relation" !== f.type) return;
                let p = u.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionTimelineDependenciesOverlay.handleRemoveRelation",
                    environment: l,
                    canUndo: !0,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    perform: e => {
                        var t, a, i;
                        o(356975).c3({
                            environment: l,
                            propertyWithInverse: s,
                            sourceStore: u,
                            destStore: o(970831).B.createChildStore(u, g),
                            transaction: e
                        }), (0, o(85868).E)({
                            environment: l,
                            collection_id: null == (t = r.collectionStore()) ? void 0 : t.id,
                            collection_view_id: null == (a = r.collectionViewStore()) ? void 0 : a.id,
                            collection_view_block_id: null == (i = r.collectionViewBlockStore()) ? void 0 : i.id,
                            block_id: g.id,
                            property: c,
                            property_type: f.type,
                            from: "timeline",
                            isFromBulkActionsToolbar: !1,
                            isUnthrottled: !0
                        })
                    }
                }), (0, o(150172).m2)(l, { ...(0, o(752242).sl)(r),
                    ...(0, o(150172).ZR)({
                        environment: l,
                        collectionContextStore: r,
                        timelineState: a,
                        isFullScreen: i,
                        isRootChild: n
                    }),
                    dependenciesPropertyID: c,
                    blockedByStoreID: u.id,
                    blockingStoreID: g.id
                })
            }

            function y(e) {
                let {
                    collectionViewStore: t,
                    newProperty: r,
                    transaction: l
                } = e;
                (0, o(715144).z)({
                    stores: [t],
                    update: {
                        timeline_arrows_by: {
                            property: r
                        }
                    },
                    transaction: l
                })
            }

            function k(e) {
                var t;
                let {
                    collectionContextStore: r,
                    relationPropertyId: l,
                    transaction: a
                } = e, i = r.collectionStore();
                if (!i) return;
                let n = l ? i.getSchema()[l] : void 0,
                    s = (null == n ? void 0 : n.type) === "relation" && n.property && (null == (t = i.getSchema()[n.property]) ? void 0 : t.type) === "relation" ? n.property : void 0;
                (0, o(715144).z)({
                    stores: [i],
                    update: {
                        collection_default_arrows_by: l,
                        ...i.getFormat().app_config_uri === o(103249).dC ? {
                            app_uri_map: { ...i.getFormat().app_uri_map ? i.getFormat().app_uri_map : {},
                                [o(11448).yx.BlockingRelation]: l,
                                [o(11448).yx.BlockedRelation]: s
                            }
                        } : {}
                    },
                    transaction: a
                })
            }

            function C(e) {
                let {
                    environment: t,
                    transaction: r,
                    date: l,
                    parentStore: a,
                    query: i,
                    schema: s,
                    isFullScreen: d,
                    groupFormat: c,
                    canEditTimelineItems: u,
                    collectionContextStore: g,
                    from: f
                } = e;
                if (!(0, o(194020).E)(t, (0, o(974410).f)(a))) return;
                let p = c ? [c] : [],
                    m = g.groupsStore.getGroupState(p);
                if (!m) return;
                if (a) return function(e) {
                    let {
                        environment: t,
                        transaction: r,
                        date: l,
                        store: a,
                        parentStore: i,
                        query: s,
                        schema: d,
                        groupFormat: c,
                        canEditTimelineItems: u,
                        collectionContextStore: g,
                        subitemPath: f
                    } = e;
                    if (!a || !i) return;
                    let p = (0, o(238690).u)({
                        environment: t,
                        collectionContextStore: g,
                        groupsPointer: c ? [c] : [],
                        store: a,
                        before: !1,
                        collectionStore: i,
                        transaction: r,
                        subitemPath: f,
                        subitemInsertDirection: "into"
                    });
                    if (p) {
                        if (n({
                                environment: t,
                                store: p,
                                query: s,
                                schema: d,
                                date: l,
                                transaction: r
                            }), o(986939).A.isMobile)(0, o(545586).navigateToBlock)({
                            environment: t,
                            store: p,
                            pageVisitSource: o(254656).y8.Create
                        });
                        else if (p && u) {
                            let e = p.getBlockTitleStore();
                            (0, o(940763).e)({
                                store: e
                            })
                        }
                        return p
                    }
                }(e);
                g.searchQueryStore.state && (0, o(183502).S)({
                    searchQuery: "",
                    collectionContextStore: g,
                    isFullScreen: d
                });
                let S = (0, o(127872).Q)({
                    environment: t,
                    collectionContextStore: g,
                    groupsPointer: p,
                    shouldCoerce: !0,
                    templateStore: g.defaultPageTemplateStore.state,
                    transaction: r,
                    from: {
                        createBlock: f
                    },
                    inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache
                });
                if (!S) return;
                let b = S.coercionSucceeded,
                    v = S.newStore;
                if (n({
                        environment: t,
                        store: v,
                        query: i,
                        schema: s,
                        date: l,
                        transaction: r
                    }), o(986939).A.isMobile)(0, o(545586).navigateToBlock)({
                    environment: t,
                    store: v,
                    pageVisitSource: o(254656).y8.Create
                });
                else if (b && u) {
                    let e = v.getBlockTitleStore();
                    (0, o(739204).z)({
                        store: e
                    })
                } else(0, o(908919).V)({
                    environment: t,
                    store: v,
                    peekMode: (0, o(28630).hH)(g),
                    resultsStore: null == m ? void 0 : m.resultsStore,
                    collectionContextStore: g,
                    pageVisitSource: o(254656).y8.Create
                });
                return v
            }
        }
    }
]);