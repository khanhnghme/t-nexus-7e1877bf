"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [70506], {
        127872: (e, t, o) => {
            function l(e) {
                let {
                    collectionStore: t,
                    environment: l
                } = e;
                return t.canEdit() || t.canEditCollection() || t.canEditContentOnly() || (0, o(862085).gN)({
                    collectionStore: t,
                    environment: l
                })
            }

            function r(e) {
                let {
                    collectionContextStore: t,
                    transaction: l
                } = e;
                return (0, o(165170).w)({
                    collectionContextStore: t,
                    transaction: l
                }), i(e)
            }

            function i(e) {
                var t, r, i;
                let n, {
                        environment: a,
                        collectionContextStore: c,
                        groupsPointer: d,
                        insertAtIndex: s,
                        shouldCoerce: u,
                        templateStore: p,
                        transaction: S,
                        from: f,
                        tracker: g,
                        inMemoryRecordCache: v,
                        isKeyboard: m,
                        title: h,
                        blockType: b
                    } = e,
                    C = o(680007).default.mark("collections.add_item_lag");
                o(680007).default.measureAfterNextFlush(C, {
                    getData: () => ({ ...o(752242).kz(c),
                        from: f.createBlock
                    })
                });
                let y = "collectionTypedView" === c.contextTypeFromStoreState,
                    I = c.databaseTypeFromStoreState,
                    w = c.collectionStoresStore.state,
                    k = w.find(e => l({
                        collectionStore: e,
                        environment: a
                    })) || w[0],
                    P = null == (t = (0, o(974410).f)(k)) ? void 0 : t.id,
                    _ = o(728372).AppStoreCurrentUserSettingsStore.state,
                    T = y && I && P && _ && [..._.getAllPreferredCollections(P), ..._.getPreferredCollectionsOfType(P, I)] || [],
                    A = d[0];
                if ("group_header" === f.createBlock && "location" === A.value.type) {
                    let e = A.value.value;
                    e && (n = w.find(t => t.id === e.id && l({
                        collectionStore: t,
                        environment: a
                    })))
                } else n = function(e, t, o) {
                    for (let r of e) {
                        let e = t.find(e => e.id === r && l({
                            collectionStore: e,
                            environment: o
                        }));
                        if (e) return e
                    }
                }(T, w, a);
                let M = n ? ? k,
                    B = null == M ? void 0 : M.getSpaceId(),
                    F = c.collectionViewStore(),
                    x = c.getViewType(),
                    E = o(124937).Wv({
                        environment: a,
                        type: b ? ? o(955630).xd.page,
                        inMemoryRecordCache: v,
                        transaction: S,
                        spaceId: B,
                        tracker: g,
                        properties: {
                            title: (0, o(247438).x9d)(h)
                        }
                    });
                if (!M || !F || !x) return {
                    coercionSucceeded: !0,
                    newStore: E
                };
                let V = null == (r = c.groupsStore.getGroupState(d)) ? void 0 : r.groupUiParentStore;
                if (!V) return {
                    coercionSucceeded: !0,
                    newStore: E
                };
                let R = o(970831).B.createChildStore(V, {
                    table: o(832375).evP,
                    id: E.id
                });
                p && o(205885).A.state.online && o(845422).TB({
                    title: "template",
                    environment: a,
                    store: E,
                    templateStore: p,
                    isKeyboard: m ? ? !1,
                    isCreateIn: !1,
                    transaction: S,
                    from: f.initCollection ? ? "collection_group_actions"
                });
                let G = (0, o(188993).j)({
                        environment: a,
                        store: E,
                        collectionStore: M,
                        collectionContextStore: c,
                        groupsPointer: d,
                        shouldCoerce: u,
                        transaction: S
                    }),
                    z = (null == (i = c.groupsStore.getGroupState(d)) || null == (i = i.reducerResultStore.state) ? void 0 : i.blockIds) || [],
                    O = void 0 !== s ? s : z.length,
                    W = c.permissionScopesStore.state.canCreatePagesInCollection;
                if ((0, o(979052).k)({
                        environment: a,
                        collectionStore: M,
                        blockIds: [R.id],
                        action: "collection_view"
                    }), W || y) {
                    let e = [...z.slice(0, O), R.id, ...z.slice(O)];
                    (0, o(806875).z)({
                        resultIds: e,
                        collectionViewStore: F,
                        collectionContextStore: c,
                        transaction: S
                    })
                }
                return {
                    coercionSucceeded: G,
                    newStore: R
                }
            }
            o.d(t, {
                H: () => i,
                Q: () => r
            }), o(898992), o(672577)
        },
        165170: (e, t, o) => {
            o.d(t, {
                w: () => l
            }), o(898992), o(672577);

            function l({
                collectionContextStore: e,
                transaction: t
            }) {
                let r = "collectionTypedView" === e.contextTypeFromStoreState,
                    i = e.databaseTypeFromStoreState,
                    n = e.collectionStoresStore.state,
                    a = n.find(e => e.canEdit() || e.canEditCollection() || e.canEditContentOnly()) || n[0];
                !r && a && (0, o(90252).e)({
                    transaction: t,
                    databaseType: i,
                    collectionId: a.id,
                    spaceId: a.getSpaceId()
                })
            }
        },
        345889: (e, t, o) => {
            o.d(t, {
                O: () => f,
                n: () => m
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(823215), o(354520), o(672577), o(430670), o(803949), o(581454), o(737550);
            var l = () => o(970831),
                r = () => o(832375),
                i = () => o(17224),
                n = () => o(356975),
                a = () => o(435260),
                c = () => o(481539),
                d = () => o(135674),
                s = () => o(579695),
                u = () => o(188993),
                p = () => o(755744);

            function S(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    collectionContextStore: l,
                    groupsPointer: r,
                    alreadyMovedToCollection: i,
                    duplicatedBlocks: n,
                    transaction: a
                } = e;
                for (let e of n) {
                    let n = o ? ? e.getAssociatedCollectionStore();
                    n && (0, u().j)({
                        environment: t,
                        store: e,
                        collectionStore: n,
                        collectionContextStore: l,
                        groupsPointer: r,
                        shouldCoerce: !0,
                        transaction: a,
                        alreadyMovedToCollection: i
                    })
                }
            }

            function f(e) {
                let {
                    environment: t,
                    droppedStore: l,
                    collectionStore: r,
                    transaction: i
                } = e, n = o(124937).Wv({
                    environment: t,
                    type: "copy_indicator",
                    inMemoryRecordCache: l.inMemoryRecordCache,
                    transaction: i,
                    spaceId: r.getSpaceId()
                });
                return s().X$({
                    childStore: n,
                    parentStore: r,
                    transaction: i
                }), n
            }

            function g(e) {
                let {
                    environment: t,
                    droppedStores: o,
                    collectionStore: l,
                    transaction: r
                } = e, i = [];
                for (let e of o) {
                    let o = l ? ? e.getAssociatedCollectionStore();
                    if (!o) continue;
                    let n = f({
                        environment: t,
                        droppedStore: e,
                        collectionStore: o,
                        transaction: r
                    });
                    i.push(n)
                }
                return i
            }

            function v(e) {
                let {
                    groupsPointer: t,
                    collectionContextStore: l,
                    blocks: r,
                    formulasModule: i,
                    environment: n
                } = e, a = [];
                return t.forEach(e => {
                    var t, c;
                    let d = null == l || null == (t = l.collectionStore()) ? void 0 : t.getSchema()[e.property],
                        s = null == l || null == (c = l.collectionStore()) ? void 0 : c.getSchema(),
                        u = new Map,
                        p = new Map,
                        S = new Map,
                        f = r.flatMap(t => {
                            let l = t.getModel();
                            if (d && s && l) return (0, o(260357).W)({
                                property: e.property,
                                schema: s,
                                block: l,
                                getRecordModel: t.getRecordModel,
                                collectionRequestContext: {
                                    userId: void 0,
                                    userTimeZone: (0, o(714350).P)(),
                                    depth: 0,
                                    intl: o(962299).A.getIntl(),
                                    visitedProperties: new Set,
                                    resultCache: u,
                                    regExpCache: p,
                                    formatDateCache: S,
                                    experimentService: o(218744).default,
                                    collectionFeatureGates: (0, o(457103).i)(),
                                    getRelationEdgeList: (0, o(323082).Y)({
                                        environment: n,
                                        spaceId: t.getSpaceId()
                                    })
                                },
                                exportedFilePaths: !1,
                                formulasModule: i,
                                spaceIdCreator: n.idCreator.getSpaceIdCreatorSync(t.getSpaceId())
                            })
                        }).filter(e => void 0 !== e);
                    a.push(...f)
                }), o(381453).Mp(a, o(381453).n4)
            }

            function m(e) {
                var t, f, m, h, b, C;
                let {
                    environment: y,
                    collectionStore: I,
                    targetStore: w,
                    droppedDirection: k,
                    droppedStores: P,
                    transaction: _,
                    duplicate: T,
                    collectionContextStore: A,
                    groupsPointer: M,
                    subitemPath: B,
                    formulasModule: F,
                    duplicateActions: x,
                    handleDropModule: E
                } = e;
                if (null != I && I.pathIsDead() || P.some(e => (0, o(336136).pQ)(e.id)) || P.some(e => {
                        for (let t of e.getDiscussionStores())
                            if (t.isSuggestionDiscussion()) return !0
                    }) || (e.collapsedGroup && function(e) {
                        var t;
                        let {
                            environment: l,
                            droppedStores: r,
                            duplicate: i,
                            collectionContextStore: n,
                            groupsPointer: a,
                            transaction: c,
                            duplicateActions: d,
                            handleDropModule: s
                        } = e, p = n.collectionStore(), f = n.collectionViewStore(), v = null == (t = r[0]) ? void 0 : t.getAssociatedCollectionStore(), m = v && v.id === (null == p ? void 0 : p.id), h = n.hasSingleCollection() && i, b = o(218744).default.checkGate({
                            gateName: "duplicate_subtree_advanced_flows"
                        }), C = h && b, y = C ? g({
                            environment: l,
                            droppedStores: r,
                            collectionStore: p,
                            transaction: c
                        }) : [], I = (0, o(340661).T)({
                            environment: l,
                            droppedStores: r,
                            duplicate: h,
                            transaction: c,
                            collectionStore: p,
                            duplicateActions: d,
                            existingBlocks: y,
                            handleDropModule: s
                        });
                        if (S({
                                environment: l,
                                collectionStore: p,
                                collectionContextStore: n,
                                groupsPointer: a,
                                alreadyMovedToCollection: !0,
                                duplicatedBlocks: y,
                                transaction: c
                            }), !C)
                            for (let e of I) {
                                let t = p ? ? e.getAssociatedCollectionStore();
                                t && (0, u().j)({
                                    environment: l,
                                    store: e,
                                    collectionStore: t,
                                    collectionContextStore: n,
                                    groupsPointer: a,
                                    shouldCoerce: !0,
                                    transaction: c
                                })
                            }
                        f && (0, o(806875).z)({
                            resultIds: I.map(e => e.id),
                            collectionViewStore: f,
                            collectionContextStore: n,
                            transaction: c
                        }), c.postSubmitCallbacks.push(async e => {
                            e || !p || m || await o(112944).Bz({
                                droppedStores: r,
                                createdStores: I,
                                collectionStore: p,
                                environment: l,
                                collectionContextStore: n,
                                groupsPointer: a,
                                shouldDuplicate: i
                            })
                        })
                    }({
                        environment: y,
                        collectionContextStore: A,
                        groupsPointer: M,
                        droppedStores: P,
                        duplicate: T,
                        transaction: _,
                        duplicateActions: x,
                        handleDropModule: E
                    }), !w)) return;
                let V = A.collectionViewStore();
                if (!V) return;
                let R = null == (t = P[0]) ? void 0 : t.getAssociatedCollectionStore(),
                    G = R && R.id === (null == I ? void 0 : I.id),
                    z = null == (f = A.groupsStore.getGroupState(M)) ? void 0 : f.groupUiParentStore;
                if (!z) return;
                let O = v({
                        groupsPointer: M,
                        collectionContextStore: A,
                        blocks: P,
                        formulasModule: F,
                        environment: y
                    }),
                    W = (null == (m = A.groupsStore.getGroupState(M)) ? void 0 : m.resultsStore.state) || [],
                    j = P.every(e => e.isExternalObjectInstancePageBlockStore()) && !(null != I && I.isSyncedCollection() && (null == (h = P[0]) ? void 0 : h.getParentId()) === (null == I ? void 0 : I.id)),
                    D = A.hasSingleCollection() && (j || T);
                if (k === o(966225).bH.Onto) {
                    (0, o(471e3).I)({
                        environment: y
                    });
                    let e = w.getContentStore();
                    for (let t of (0, o(340661).T)({
                            environment: y,
                            droppedStores: P,
                            duplicate: D,
                            transaction: _,
                            collectionStore: I,
                            duplicateActions: x,
                            handleDropModule: E
                        }))(0, d().B)({
                        parentStore: e,
                        appendStore: t,
                        transaction: _
                    });
                    return []
                }
                let H = !1,
                    K = [];
                if (!D && I) {
                    let e = function(e) {
                        let {
                            environment: t,
                            droppedStores: l,
                            collectionStore: i,
                            transaction: n
                        } = e;
                        if (!l.length) return;
                        let a = (0, o(839288).K)({
                            environment: t,
                            stores: l,
                            spaceId: i.getSpaceId(),
                            transaction: n
                        });
                        for (let e of a)
                            if (e.getParentTable() === r().VlP || e.getAssociatedCollectionStore() || !s().X$({
                                    childStore: e,
                                    parentStore: i,
                                    transaction: n
                                })) return;
                        return a
                    }({
                        environment: y,
                        droppedStores: P,
                        collectionStore: I,
                        transaction: _
                    });
                    H = void 0 !== e, K = e ? ? []
                }
                let L = (0, o(60848).k)([...(null == B ? void 0 : B.map(e => e.value.store.pointer)) ? ? []]),
                    N = A.subitemExpandedStore.state.get(L),
                    U = B && B.length > 1 || (null == N ? void 0 : N.isExpanded) && k === o(966225).bH.Below,
                    X = A.groupsStore.getAllGroupStates();
                P.forEach(e => {
                    let t = X.find(t => t.resultsStore.state.includes(e));
                    t && !U && (0, o(406389).J)({
                        environment: y,
                        store: e,
                        collectionContextStore: A,
                        groupsPointer: t.groupsPointer,
                        transaction: _
                    })
                });
                let q = o(218744).default.checkGate({
                        gateName: "duplicate_subtree_advanced_flows"
                    }),
                    J = D && q,
                    Q = e.existingBlocks ? ? (J ? g({
                        environment: y,
                        droppedStores: P,
                        collectionStore: I,
                        transaction: _
                    }) : void 0) ? ? [];
                J && (H = !0, K = Q);
                let Y = (0, o(340661).T)({
                    environment: y,
                    droppedStores: P,
                    duplicate: D,
                    transaction: _,
                    collectionStore: I,
                    duplicateActions: x,
                    existingBlocks: Q,
                    handleDropModule: E
                });
                if (S({
                        environment: y,
                        collectionStore: I,
                        collectionContextStore: A,
                        groupsPointer: M,
                        alreadyMovedToCollection: H,
                        duplicatedBlocks: Q,
                        transaction: _
                    }), H || (K = (0, o(839288).K)({
                        environment: y,
                        stores: Y,
                        spaceId: w.getSpaceId(),
                        transaction: _
                    })), _.postSubmitCallbacks.push(async e => {
                        e || !I || G || await o(112944).Bz({
                            droppedStores: P,
                            createdStores: Y,
                            collectionStore: I,
                            environment: y,
                            collectionContextStore: A,
                            groupsPointer: M,
                            alreadyMovedToCollection: H,
                            shouldDuplicate: D
                        })
                    }), !J)
                    for (let e of K) {
                        let t = I ? ? e.getAssociatedCollectionStore();
                        t && (0, u().j)({
                            environment: y,
                            store: e,
                            collectionStore: t,
                            collectionContextStore: A,
                            groupsPointer: U ? [] : M,
                            shouldCoerce: !0,
                            transaction: _,
                            alreadyMovedToCollection: H
                        })
                    }
                I && function(e) {
                    var t, r, d;
                    let {
                        environment: s,
                        isInsertingAsSubitem: u,
                        shouldDuplicate: S,
                        collectionContextStore: f,
                        collectionStore: g,
                        droppedStores: v,
                        wrappedStores: m,
                        targetSubitemExpandedState: h,
                        subitemPath: b,
                        targetStore: C,
                        transaction: y
                    } = e, I = f.currentSubitemFormatStoreForCollectionStore.state, w = null == I ? void 0 : I.inverse, k = w && f.normalizedSchemaStore.state[w], P = null == I ? void 0 : I.property, _ = P && f.normalizedSchemaStore.state[P], T = null == (t = f.collectionViewStore()) ? void 0 : t.getType(), A = null == (r = f.collectionViewStore()) ? void 0 : r.getFormat();
                    if (null != (d = f.collectionViewStore()) && null != (d = d.getCollectionStore()) && d.isExternallyImportedAndSyncedCollection()) return;
                    let M = (null == A ? void 0 : A.subitem_display_mode) ? ? "show",
                        B = I && T && (0, o(986629).qS)(T) && k && (0, o(795e3).n)(k) && "flattened" !== M && "disabled" !== M,
                        F = (0, o(634702).o)(v[0]);
                    null != F && F.subitemFormat && I && _ && (0, o(795e3).n)(_) && o(112944).Ch({
                        blocksToDuplicate: [...v],
                        duplicatedBlocks: [...m],
                        environment: s,
                        shouldDuplicate: S,
                        originSubitemFormat: F.subitemFormat,
                        destinationSubitemFormat: I,
                        transaction: y,
                        subitemRelationSchema: _,
                        relationPropertyCollectionId: g.id
                    });
                    let x = I ? (0, o(403582).K)(m, I) : void 0;
                    for (let e of x ? m.filter((e, t) => x.includes(t)) : []) {
                        if (B)
                            for (let t of (0, a().e)({
                                    store: e,
                                    subitemFormat: I,
                                    propertySchema: k
                                })) {
                                let o = l().B.createChildStore(e, t);
                                n().c3({
                                    environment: s,
                                    sourceStore: o,
                                    destStore: e,
                                    propertyWithInverse: I,
                                    transaction: y
                                })
                            }
                        if (u) {
                            let t = null != h && h.isExpanded ? "into" : "below";
                            (0, p().i)({
                                environment: s,
                                collectionContextStore: f,
                                collectionStore: g,
                                subitemPath: b && (null == b ? void 0 : b.length) > 0 ? b : [new(i()).PH((0, c().f)(C), [])],
                                store: C,
                                before: "into" === t,
                                insertBlockStore: e,
                                insertDirection: t,
                                transaction: y
                            })
                        }
                    }
                }({
                    environment: y,
                    isInsertingAsSubitem: !!U,
                    shouldDuplicate: D,
                    collectionContextStore: A,
                    collectionStore: I,
                    droppedStores: P,
                    wrappedStores: K,
                    targetSubitemExpandedState: N,
                    subitemPath: B,
                    targetStore: w,
                    transaction: _
                });
                let Z = W.filter(e => !Y.includes(e)),
                    $ = Z.indexOf(w),
                    ee = k === o(966225).bH.Above || k === o(966225).bH.Left ? $ : $ + 1,
                    et = [...Z.slice(0, ee), ...K, ...Z.slice(ee)];
                (0, o(806875).z)({
                    resultIds: et.map(e => e.id),
                    collectionViewStore: V,
                    collectionContextStore: A,
                    transaction: _
                });
                let eo = v({
                        groupsPointer: M,
                        collectionContextStore: A,
                        blocks: Y,
                        formulasModule: F,
                        environment: y
                    }),
                    el = o(381453).n4(O.sort(), eo.sort());
                if ((G || el) && (0, o(168925).f)({
                        environment: y,
                        collectionContextStore: A
                    }), !A.collectionViewBlockStore()) return;
                let er = U ? w : z,
                    ei = K.map(e => l().B.createChildStore(er, {
                        table: r().evP,
                        id: e.id
                    }));
                return (0, o(854924).t)({
                    environment: y,
                    stores: ei
                }), (null == (b = A.collectionViewStore()) ? void 0 : b.getFormat().app_config_uri) === o(11448).Lu && (null == (C = o(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : C.getFormat().special_page_for_pm_launch) === "sprint_board" && o(128817).tutorialAdvanceToStepAfter(_, "sprints-onboarding", "sprint-task-tooltip"), ei
            }
        },
        403582: (e, t, o) => {
            o.d(t, {
                K: () => l
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(803949), o(737550);

            function l(e, t) {
                let l = new Set;
                e.forEach(e => {
                    l.add(e.pointer.id)
                });
                let r = [];
                return e.forEach((e, i) => {
                    let n = e.getPropertyValue(t.inverse);
                    o(561872).n(n).some(e => l.has(e.id)) || r.push(i)
                }), r
            }
        },
        406389: (e, t, o) => {
            o.d(t, {
                J: () => s
            });
            var l = () => o(97892),
                r = () => o(218744),
                i = () => o(962299),
                n = () => o(21312),
                a = () => o(714350),
                c = () => o(323082),
                d = () => o(157781);

            function s(e) {
                let {
                    store: t,
                    groupsPointer: s,
                    environment: u,
                    collectionContextStore: p,
                    transaction: S
                } = e;
                if (!t.isDefined()) return;
                let f = p.normalizedSchemaStore.state,
                    g = p.relativeVariableStore.state,
                    v = (0, o(353387).b)(p),
                    m = new Map,
                    h = new Map,
                    b = new Map;
                for (let e of s) {
                    var C;
                    let o = n().jV({
                        block: t.getModel(),
                        schema: f,
                        propertyMapping: void 0,
                        userFilterContext: {
                            userId: u.currentUser.id,
                            userTimeZone: (0, a().P)(),
                            userStartOfWeek: l().X.state
                        },
                        group: e,
                        groupBy: p.getGroupByAndGroupFormats().groupBy,
                        getRecordModel: t.getRecordModel,
                        intl: i().A.getIntl(),
                        relativeVariableResult: g,
                        currentPageInRelatedCollection: v,
                        resultCache: m,
                        regExpCache: h,
                        formatDateCache: b,
                        experimentService: r().default,
                        spaceIdCreator: u.idCreator.getSpaceIdCreatorSync(t.getModel().space_id),
                        getRelationEdgeList: (0, c().Y)({
                            environment: u,
                            spaceId: t.getModel().space_id
                        }),
                        sourceCollectionId: null == (C = p.collectionStore()) ? void 0 : C.id
                    });
                    (0, d().l)({
                        environment: u,
                        blockStore: t,
                        properties: o,
                        transaction: S
                    })
                }
            }
        },
        806875: (e, t, o) => {
            o.d(t, {
                z: () => c
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(430670), o(581454);
            var l = () => o(517013),
                r = () => o(832375),
                i = () => o(51929),
                n = () => o(987380),
                a = () => o(818646);

            function c(e) {
                let {
                    resultIds: t,
                    collectionViewStore: c,
                    collectionContextStore: d,
                    transaction: s
                } = e, u = c.getPageSortStore(), p = u.getValue() || [], {
                    beforeOps: S
                } = (0, o(219083).i)(p, t.slice(0, o(9247).WF));
                for (let [e, o] of Object.entries(S))
                    if (o) {
                        let t = (0, l().v3)(c, {
                            table: r().evP,
                            id: o
                        });
                        (0, n().n)({
                            parentStore: u,
                            insertStore: (0, l().v3)(c, {
                                table: r().evP,
                                id: e
                            }),
                            beforeStore: t,
                            transaction: s
                        })
                    } else {
                        let o = t.findIndex(t => t === e),
                            n = t[o - 1],
                            a = n ? (0, l().v3)(c, {
                                table: r().evP,
                                id: n
                            }) : void 0;
                        (0, i().W)({
                            parentStore: u,
                            insertStore: (0, l().v3)(c, {
                                table: r().evP,
                                id: e
                            }),
                            afterStore: a,
                            transaction: s
                        })
                    }! function(e) {
                    let {
                        collectionContextStore: t,
                        collectionViewStore: i,
                        transaction: n
                    } = e, c = i.getPageSortStore();
                    for (let e of function(e) {
                            let {
                                pageSort: t,
                                currentResults: l
                            } = e;
                            if (!t || t.length <= o(9247).WF) return [];
                            let r = t.filter(e => !l.has(e));
                            return o(381453).sb([...r.reverse(), ...o(381453).o8(t).reverse()]).slice(0, t.length - o(9247).WF)
                        }({
                            pageSort: c.getValue(),
                            currentResults: new Set(t.groupsStore.getAllGroupStates().flatMap(e => e.resultsStore.state.map(e => e.id)))
                        }))(0, a().T)({
                        parentStore: c,
                        childToRemoveStore: (0, l().v3)(c, {
                            table: r().evP,
                            id: e
                        }),
                        transaction: n
                    })
                }({
                    collectionContextStore: d,
                    collectionViewStore: c,
                    transaction: s
                })
            }
            o(354520)
        }
    }
]);