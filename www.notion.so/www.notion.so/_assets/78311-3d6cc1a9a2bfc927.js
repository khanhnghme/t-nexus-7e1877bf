"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [78311], {
        478311: (e, t, r) => {
            r.r(t), r.d(t, {
                applyPresetFeatures: () => S,
                applyTypedFeatures: () => w,
                initializeApp: () => h,
                installAppsInTeam: () => I,
                markTasksDatabaseTemplateIfNeeded: () => b,
                removeTypedDependencies: () => P
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(430670), r(803949), r(581454), r(737550);
            var i = () => r(547131),
                o = () => r(114588),
                l = () => r(795e3),
                a = () => r(773352),
                n = () => r(832375),
                p = () => r(381453),
                c = () => r(722371),
                u = () => r(33918),
                d = () => r(823230),
                s = () => r(875964),
                f = () => r(505131),
                g = () => r(279187),
                _ = () => r(173157);

            function m(e, t) {
                let i = (0, r(440605).B)(e, t.uri);
                return i ? [...t.requiredFeatures, ...t.defaultOnFeatures].filter(e => {
                    let t = i.allFeatures.find(t => t.uri === e.featureUri);
                    if (!t) return !1;
                    let {
                        type: r
                    } = e;
                    return "simple" === r ? "dependencies" in t : "with_variant" === r ? "variants" in t : void(0, c().HB)(r)
                }) : []
            }
            var v = () => r(545934);
            let y = (0, r(109939).YK)({
                initializeAppTemplateError: {
                    id: "appTemplateActions.initializeAppTemplateError.message",
                    defaultMessage: "Duplicate template failed."
                }
            });

            function b(e) {
                e && e.some(e => e.getFormat().app_config_uri === r(11448).d0) && (r(138324).e.locallyMutatedTasksDatabase = !0)
            }

            function h(e) {
                let {
                    environment: t,
                    temporaryContainerBlockStore: i,
                    transaction: o,
                    skipNavigation: l
                } = e, a = S({ ...e,
                    initializeStore: i,
                    createOrModify: "create"
                }), n = !["jira_import"].includes(e.from) && !l;
                return a && a.length > 0 && n && (0, r(545586).navigateToBlock)({
                    environment: t,
                    store: a[0],
                    redirect: !0,
                    pageVisitSource: r(254656).y8.Onboarding
                }), o.postSubmitCallbacks.push(async e => {
                    e ? r(647095).f1(r(962299).A.formatMessage(y.initializeAppTemplateError)) : a && await V({
                        environment: t,
                        appCollectionViewBlockStores: a
                    })
                }), a
            }

            function S(e) {
                let {
                    environment: t,
                    appUri: i,
                    presetUri: o,
                    transaction: l,
                    createOrModify: n,
                    from: p
                } = e, c = (0, r(402276).appConfigs)().find(e => e.uri === i), u = null == c ? void 0 : c.presets.find(e => e.uri === o);
                return u ? (l.postSubmitCallbacks.push(e => {
                    var t, l;
                    t = {
                        preset_uri: (l = o, (0, r(11448).kT)(l) ? l : "other"),
                        status: e ? "fail" : "success",
                        from: p
                    }, (0, r(104310).u)({
                        event: {
                            eventName: "apply_preset_features",
                            eventProperties: t
                        }
                    }), e && a().log({
                        level: "error",
                        from: "appTemplateActions.applyPresetFeatures",
                        type: "transactionFailed",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                appUri: i,
                                presetUri: o,
                                createOrModify: n,
                                from: p
                            }
                        }
                    })
                }), w({ ...e,
                    features: m((0, r(402276).appConfigs)(), u)
                })) : void a().log({
                    level: "error",
                    from: "appTemplateActions.applyPresetFeatures",
                    type: "presetNotFound",
                    error: {
                        name: `Preset not found for appUri ${i} and presetUri ${o}. From: ${p}`
                    }
                })
            }

            function w(e) {
                let t, {
                        environment: i,
                        spaceViewStore: o,
                        appParentStore: l,
                        appUri: n,
                        features: u,
                        transaction: d,
                        createOrModify: s,
                        customPropertyName: f
                    } = e,
                    g = (0, r(402276).appConfigs)().find(e => e.uri === n);
                if (!g || !l.isDefined()) return;
                if ("modify" === s) {
                    let {
                        appCollectionViewBlockStores: i
                    } = e, o = p().sb(p().oE(i.map(e => e.getFormat().app_id)));
                    if (o.length > 1) throw Error("App collection view block stores must have the same app id");
                    0 === o.length ? t = function({
                        transaction: e,
                        collectionViewBlockStores: t
                    }) {
                        let i = r(92513).JW();
                        for (let r of t) {
                            let t = B(r);
                            if (!t) continue;
                            let o = r.getFormat(),
                                l = {
                                    app_id: o.app_id ? ? i,
                                    ...t
                                };
                            (0, _().z)({
                                store: r.getFormatStore(),
                                data: l,
                                transaction: e
                            }), a().log({
                                level: "info",
                                from: "appTemplateActions.backfillAppMetadataOnCollectionViewBlocks",
                                type: "backfillAppMetadata",
                                data: {
                                    miscDataToConvertToString: {
                                        databaseType: C(r),
                                        collectionViewBlockId: r.id,
                                        originalFormat: o
                                    }
                                }
                            })
                        }
                        return i
                    }({
                        transaction: d,
                        collectionViewBlockStores: i
                    }) : (k({
                        transaction: d,
                        collectionViewBlockStores: i
                    }), t = o[0])
                }
                let m = function({
                    featurePointers: e,
                    appConfig: t
                }) {
                    let i = p().oE(e.map(e => {
                            let {
                                type: t
                            } = e;
                            return "simple" === t ? e.featureUri : "with_variant" === t ? e.defaultVariantUri : void(0, c().HB)(t)
                        })),
                        o = {};
                    for (let e of t.allFeatures) o[e.uri] = e;
                    let l = i.map(e => o[e]).filter(e => (0, r(778949).l)(e)),
                        a = {};
                    for (let e of l)
                        for (let t of e.dependencies) a[t.uri] = t;
                    return Object.values(a)
                }({
                    featurePointers: u,
                    appConfig: g
                });
                if (0 === m.length) return;
                let y = {};
                if ("create" === e.createOrModify && e.initializeStore) {
                    let t = m.filter(e => "collection_view_block" === e.type)[0];
                    t && ((0, _().z)({
                        store: e.initializeStore,
                        data: {
                            type: e.initializeStore.isType(r(955630).xd.collectionViewPage) || e.initializeStore.isType(r(955630).xd.collectionView) ? e.initializeStore.getType() : r(955630).xd.collectionViewPage
                        },
                        transaction: d
                    }), (0, _().z)({
                        store: e.initializeStore.getFormatStore(),
                        data: {
                            app_config_uri: t.uri,
                            page_icon: t.icon,
                            page_cover: t.cover,
                            collection_view_sub_type: null,
                            app_template_features: null
                        },
                        transaction: d
                    }), r(41403).R9({
                        environment: i,
                        store: e.initializeStore.getBlockTitleStore(),
                        value: (0, r(247438).x9d)(t.name),
                        transaction: d
                    }), y[t.uri] = e.initializeStore.id)
                } else "modify" === e.createOrModify && (y = Object.assign({}, ...p().oE(e.appCollectionViewBlockStores.map(e => {
                    var t;
                    return null == (t = e.getFormat()) ? void 0 : t.app_uri_map
                }))));
                let b = { ...y
                };
                (0, v().$K)({
                    environment: i,
                    spaceViewStore: o,
                    appParentStore: l,
                    addedDependencies: m,
                    newUriMap: b,
                    appConfig: g,
                    transaction: d,
                    customPropertyName: f
                }), m.map(e => {
                    if ("collection_view_block" === e.type) {
                        var t, r, i;
                        let o, a, n = (0, v().Or)(l, e.uri, b);
                        n && (t = n, r = e.defaultViewsOrder || [], i = d, o = t.getCollectionViewStores().map(e => {
                            let t = e.getFormat().app_config_uri,
                                i = t ? null == r ? void 0 : r.indexOf(t) : null == r ? void 0 : r.length;
                            return (void 0 === i || -1 === i) && (i = null == r ? void 0 : r.length), {
                                viewStore: e,
                                order: i
                            }
                        }), a = p().Ul(o, e => e.order).map(e => e.viewStore.id), (0, _().z)({
                            store: t,
                            data: {
                                view_ids: a
                            },
                            transaction: i
                        }))
                    }
                });
                let h = p().oE(p().sb(p().oE(m.map(e => {
                        if ("collection_view_block" === e.type) return e.uri;
                        if ("collection" === e.type || "collection_view" === e.type) {
                            let t = (0, r(645683).T)([e.collectionViewBlockUri], g);
                            if (t && t.length && "collection_view_block" === t[0].type) return e.collectionViewBlockUri
                        }
                    })))),
                    S = p().oE(h.map(e => (0, v().Or)(l, e, b)));
                if ("create" === s && e.initializeStore) {
                    let t = e.initializeStore.getPermissionItemsStore().getValue();
                    t && S.forEach(e => {
                        (0, _().z)({
                            store: e,
                            data: {
                                permissions: t
                            },
                            transaction: d
                        })
                    })
                }
                let w = "create" === s ? p().oE([e.initializeStore]) : e.appCollectionViewBlockStores,
                    P = S.filter(e => void 0 === w.find(t => t.id === e.id));
                if (w.length > 0 && P.length > 0) {
                    let e = w[w.length - 1],
                        t = (0, v().cA)(o, l, e);
                    t && P.forEach((i, o) => {
                        (0, r(101571).Y)({
                            parentStore: t,
                            currentStore: i,
                            afterStore: 0 === o ? e : P[o - 1],
                            transaction: d
                        })
                    })
                }
                let V = S.flatMap(e => {
                    var t;
                    return (null == (t = e.getCollectionPointers()) ? void 0 : t.map(e => e.id)) ? ? []
                }).filter(c().O9);
                return (0, r(104310).u)({
                        event: {
                            eventName: "create_app_templates",
                            eventProperties: {
                                target_page_ids: S.map(e => e.id),
                                template_label: g.name,
                                collection_ids: V
                            }
                        }
                    }),
                    function(e) {
                        let {
                            collectionViewBlockStores: t,
                            newDependencies: i,
                            newUriMap: o,
                            appId: l,
                            transaction: a
                        } = e;
                        t.forEach(e => {
                            let t = e.getFormat().app_config_uri;
                            if (t) {
                                var n;
                                let p = function e(t, r) {
                                        let i = [];
                                        for (let e of r) "property" === e.type || "database_template" === e.type ? t.has(e.collectionUri) && i.push(e) : "block" === e.type ? t.has(e.parentUri) && i.push(e) : ("collection" === e.type || "collection_view" === e.type) && t.has(e.collectionViewBlockUri) && i.push(e);
                                        let o = [];
                                        return i.length > 0 && (o = e(new Set(i.map(e => e.uri)), r)), [...i, ...o]
                                    }(new Set([t]), i),
                                    c = {};
                                p.forEach(e => {
                                    o[e.uri] && (c[e.uri] = o[e.uri])
                                }), c[t] = o[t], (0, r(715144).z)({
                                    stores: [e],
                                    update: {
                                        app_uri_map: { ...(null == (n = e.getFormat()) ? void 0 : n.app_uri_map) || {},
                                            ...c
                                        },
                                        app_id: l
                                    },
                                    transaction: a
                                })
                            }
                        })
                    }({
                        collectionViewBlockStores: S,
                        newDependencies: m,
                        newUriMap: b,
                        appId: t || r(92513).JW(),
                        transaction: d
                    }), S
            }

            function C(e) {
                var t;
                let r = null == (t = e.getCollectionStores()) ? void 0 : t.map(e => e.getDatabaseType());
                if (r && 0 !== r.length) return 1 === r.length ? r[0] : r.join(", ")
            }

            function k({
                transaction: e,
                collectionViewBlockStores: t
            }) {
                for (let r of t) {
                    let t = B(r);
                    if (!t) continue;
                    let i = r.getFormat(),
                        o = {
                            app_config_uri: i.app_config_uri,
                            app_uri_map: i.app_uri_map
                        };
                    p().n4(o, t) || ((0, _().z)({
                        store: r.getFormatStore(),
                        data: t,
                        transaction: e
                    }), a().log({
                        level: "info",
                        from: "appTemplateActions.maybeUpsertAppUriMetadataOnCollectionViewBlocks",
                        type: "fixAppMetadata",
                        data: {
                            miscDataToConvertToString: {
                                databaseType: C(r),
                                collectionViewBlockId: r.id,
                                originalFormat: i
                            }
                        }
                    }))
                }
            }

            function B(e) {
                let t = e.getCollectionStoreIfSingleSource();
                if (!t) return;
                let i = t.getDatabaseType();
                if (!i) return;
                let o = r(11448).Fh[i].blockUri,
                    l = {
                        [i]: t.id
                    };
                return o && (l[o] = e.id), {
                    app_config_uri: o,
                    app_uri_map: { ...e.getFormat().app_uri_map,
                        ...l
                    }
                }
            }

            function P(e) {
                var t, a;
                let {
                    environment: d,
                    dependencies: _,
                    appCollectionViewBlockStores: m,
                    from: y
                } = e, b = (a = _).filter(e => "collection" === e.type ? !!a.find(t => "collection_view_block" === t.type && t.uri === e.collectionViewBlockUri) : "property" === e.type || "collection_view" === e.type || "collection_view_block" === e.type || "page_template" === e.type || "block" === e.type || "database_template" === e.type || "sub_external_collection" === e.type || void(0, c().HB)(e)), h = null == (t = m[0]) ? void 0 : t.getSpaceId();
                (0, r(377796).createAndCommit)({
                    userAction: "appTemplateActions.removeTypedDependencies",
                    environment: d,
                    cellTarget: h ? {
                        spaceWithId: h
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        k({
                            transaction: e,
                            collectionViewBlockStores: m
                        });
                        let t = Object.assign({}, ...p().oE(m.map(e => {
                            var t;
                            return null == (t = e.getFormat()) ? void 0 : t.app_uri_map
                        })));
                        ! function(e) {
                            let {
                                environment: t,
                                appCollectionViewBlockStores: r,
                                dependenciesToRemove: a,
                                completeUriMap: p,
                                transaction: d
                            } = e;
                            for (let _ of [...a.filter(({
                                    type: e
                                }) => "collection_view" === e), ...a.filter(({
                                    type: e
                                }) => "block" === e), ...a.filter(({
                                    type: e
                                }) => "database_template" === e), ...a.filter(({
                                    type: e
                                }) => "page_template" === e), ...a.filter(({
                                    type: e
                                }) => "property" === e), ...a.filter(({
                                    type: e
                                }) => "sub_external_collection" === e), ...a.filter(({
                                    type: e
                                }) => "collection" === e), ...a.filter(({
                                    type: e
                                }) => "collection_view_block" === e)])
                                if ("collection_view_block" === _.type) {
                                    let e = r.find(e => {
                                        var t;
                                        return (null == (t = e.getFormat()) ? void 0 : t.app_config_uri) === _.uri
                                    });
                                    e && d.postSubmitCallbacks.push(r => {
                                        r || t.api.callApi({
                                            eventName: "deleteContentRecords",
                                            environment: t,
                                            data: {
                                                records: [e.getSpaceShardedPointer()],
                                                permanentlyDelete: !0
                                            }
                                        })
                                    })
                                } else if ("collection" === _.type) {
                                let e = r.find(e => {
                                    var t;
                                    return (null == (t = e.getFormat()) ? void 0 : t.app_config_uri) === _.collectionViewBlockUri
                                });
                                if (e) {
                                    let t = (0, v().Pu)(e, _.uri, p);
                                    t && (0, g().removeCollectionFromCollectionViewBlock)({
                                        collectionViewBlockStore: e,
                                        collectionStore: t,
                                        transaction: d
                                    })
                                }
                            } else if ("property" === _.type) {
                                let i = r.find(e => {
                                        var t;
                                        return null == (t = e.getCollectionStores() ? ? []) ? void 0 : t.some(e => {
                                            var t;
                                            return (null == e || null == (t = e.getFormat()) ? void 0 : t.app_config_uri) === _.collectionUri
                                        })
                                    }) ? ? r[0],
                                    a = (0, v().Pu)(i, _.collectionUri, p);
                                if (a) {
                                    let r, n = (0, l().n)(_.propertySchema) ? (0, o().z)(_.propertySchema) : void 0;
                                    n && (r = (0, v().Pu)(i, n, p)), (0, s().B)({
                                        environment: t,
                                        collectionStore: a,
                                        schema: a.getSchema(),
                                        property: _.uri,
                                        transaction: d,
                                        targetCollectionStore: r
                                    }), (0, u().G)(t, {
                                        property_type: _.propertySchema.type,
                                        from: e.from,
                                        property: _.uri,
                                        collection_id: a.id
                                    })
                                }
                            } else if ("collection_view" === _.type) {
                                let e = p[_.uri];
                                if (!e) throw Error("Cannot delete view: id not found in map.");
                                let t = r.find(e => {
                                    var t;
                                    return (null == (t = e.getFormat()) ? void 0 : t.app_config_uri) === _.collectionViewBlockUri
                                });
                                if (t) {
                                    let r = i().p.createChildStore(t, {
                                        table: n().Gy1,
                                        id: e,
                                        spaceId: t.getSpaceId()
                                    });
                                    (0, f().T)({
                                        collectionViewBlockStore: t,
                                        collectionViewStore: r,
                                        transaction: d
                                    })
                                }
                            } else "page_template" === _.type || "block" === _.type || "database_template" === _.type || "sub_external_collection" === _.type || (0, c().HB)(_)
                        }({
                            environment: d,
                            appCollectionViewBlockStores: m,
                            dependenciesToRemove: b,
                            completeUriMap: t,
                            transaction: e,
                            from: y
                        })
                    }
                })
            }
            async function V(e) {
                let {
                    environment: t,
                    appCollectionViewBlockStores: i
                } = e;
                for (let e of i.flatMap(e => e.getCollectionStores() ? ? []).filter(e => {
                        let t = e.getSchema();
                        return (0, r(154326).yP)(t).length > 0
                    })) await d().c({
                    environment: t,
                    collectionStore: e
                })
            }
            async function I(e) {
                let {
                    environment: t,
                    presets: i,
                    spaceStore: o,
                    spaceViewStore: l,
                    teamStore: a
                } = e, n = o.id, c = i.slice().reverse().map(e => {
                    let {
                        serverCommitResult: i,
                        performResult: p
                    } = (0, r(377796).createAndCommit)({
                        environment: t,
                        cellTarget: {
                            spaceWithId: n
                        },
                        userAction: "AppsSetup.onContinueWithAppsMultiTransaction",
                        canUndo: !0,
                        skipUpdatingEditedMetadata: !0,
                        perform: i => {
                            var n;
                            let p = null == (n = (0, r(440605).B)((0, r(402276).appConfigs)(), e)) ? void 0 : n.uri;
                            if (p) return function(e) {
                                let {
                                    appUri: t,
                                    parentStore: i,
                                    presetUri: o
                                } = e, l = (0, r(402276).appConfigs)().find(e => e.uri === t);
                                if (!i.isDefined() || !l) return;
                                if (0 === l.presets.length) throw Error(`No presets configuration for specified app: ${t}`);
                                let a = l.presets.find(e => e.uri === o);
                                if (o && !a) throw Error("Couldn't find specified preset");
                                let n = a || l.presets[0],
                                    p = m((0, r(402276).appConfigs)(), n),
                                    c = l.presets.filter(e => !e.uri.endsWith(r(11448).W));
                                return function(e) {
                                    let {
                                        environment: t,
                                        spaceViewStore: i,
                                        appUri: o,
                                        parentStore: l,
                                        spaceId: a,
                                        transaction: n,
                                        startingFeatures: p,
                                        defaultPreset: c,
                                        nonTypedDBPresets: u,
                                        foundConfiguration: d
                                    } = e;
                                    if (!o.startsWith("notion://wiki") && 1 === u.length) return w({
                                        environment: t,
                                        spaceViewStore: i,
                                        appParentStore: l,
                                        appUri: o,
                                        features: p,
                                        createOrModify: "create",
                                        transaction: n
                                    });
                                    let s = r(124937).Wv({
                                        environment: t,
                                        type: r(955630).xd.collectionViewPage,
                                        spaceId: a,
                                        format: {
                                            app_config_uri: o,
                                            collection_view_sub_type: "app_container",
                                            page_icon: d.logo,
                                            app_template_preset: c.uri,
                                            app_template_features: p
                                        },
                                        properties: {
                                            title: (0, r(247438).x9d)(o.startsWith("notion://wiki") ? d.name : c.shortName)
                                        },
                                        inMemoryRecordCache: l.inMemoryRecordCache,
                                        transaction: n
                                    });
                                    (0, _().z)({
                                        store: s,
                                        data: {
                                            parent_id: l.id,
                                            parent_table: l.table,
                                            alive: !0,
                                            view_ids: []
                                        },
                                        transaction: n
                                    });
                                    let f = r(970831).B.createChildStore(l, s.pointer);
                                    return (0, v().Ls)({
                                        environment: t,
                                        spaceViewStore: i,
                                        parentStore: l,
                                        collectionViewBlockStore: f,
                                        transaction: n,
                                        appendOrPrepend: "prepend"
                                    }), [f]
                                }({ ...e,
                                    startingFeatures: p,
                                    defaultPreset: n,
                                    nonTypedDBPresets: c,
                                    foundConfiguration: l
                                })
                            }({
                                environment: t,
                                spaceViewStore: l,
                                appUri: p,
                                parentStore: a,
                                spaceId: o.id,
                                transaction: i,
                                presetUri: e
                            })
                        }
                    });
                    return {
                        serverCommitResult: i,
                        performResult: p
                    }
                });
                return await Promise.all(c.map(e => e.serverCommitResult)), p().oE(p().Bq(c.map(e => e.performResult).reverse()))
            }
        },
        545934: (e, t, r) => {
            r.d(t, {
                Ls: () => V,
                Or: () => I,
                Pu: () => P,
                cA: () => U,
                ww: () => C,
                Io: () => k,
                $K: () => B
            }), r(16280), r(944114), r(898992), r(354520), r(672577), r(803949), r(581454);
            var i = () => r(610463),
                o = () => r(970831),
                l = () => r(356912),
                a = () => r(383431),
                n = () => r(114588),
                p = () => r(425985),
                c = () => r(561872),
                u = () => r(212527),
                d = () => r(832375),
                s = () => r(247438),
                f = () => r(381453),
                g = () => r(722371),
                _ = () => r(430042),
                m = () => r(279187),
                v = () => r(699978),
                y = () => r(249487),
                b = () => r(715144),
                h = () => r(124937),
                S = () => r(135674),
                w = () => r(173157);

            function C(e) {
                var t, i, o, l, a, n, p, c, u, s, _, m, v, y, b, C;
                let {
                    environment: k,
                    collectionStore: B,
                    collectionViewBlockStore: P,
                    dependency: V,
                    blockUriMap: I,
                    transaction: U
                } = e, F = I[V.uri];
                if (F) {
                    let e = r(547131).p.createChildStore(P, {
                        table: d().Gy1,
                        id: F,
                        spaceId: P.getSpaceId()
                    });
                    return (0, w().z)({
                        store: e,
                        data: {
                            alive: !0,
                            parent_id: P.id,
                            parent_table: P.table
                        },
                        transaction: U
                    }), (0, S().B)({
                        parentStore: P.getCollectionViewsStore(),
                        appendStore: e,
                        transaction: U
                    }), I
                }
                let z = B.getPropertyMapping(),
                    A = M(null == (t = V.value.format) ? void 0 : t.collection_group_by, B),
                    O = M(null == (i = V.value.format) ? void 0 : i.board_columns_by, B),
                    R = T(null == (o = V.value.format) ? void 0 : o.board_columns, B),
                    D = function(e, t) {
                        if (!e || "placeholder" === e.type) return;
                        let i = f().mg(e);
                        if ("groups_reducer" === i.dataConfig.type) {
                            var o;
                            let e = i.dataConfig.groupBy.property;
                            i.dataConfig.groupBy.property = t.getMappedProperty(e);
                            let l = i.dataConfig.aggregationConfig.aggregation.property;
                            l && (i.dataConfig.aggregationConfig.aggregation.property = t.getMappedProperty(l));
                            let a = (0, r(828660).m8)(i) ? null == (o = i.dataConfig.aggregationConfig.stackOptions) ? void 0 : o.groupBy.property : void 0;
                            (0, r(828660).m8)(i) && a && i.dataConfig.aggregationConfig.stackOptions && (i.dataConfig.aggregationConfig.stackOptions.groupBy.property = t.getMappedProperty(a))
                        } else if ("results_reducer" === i.dataConfig.type) {
                            let e = i.dataConfig.nameProperty;
                            i.dataConfig.nameProperty = t.getMappedProperty(e);
                            let r = i.dataConfig.valueProperty;
                            i.dataConfig.valueProperty = t.getMappedProperty(r)
                        } else "number_reducer" === i.dataConfig.type || (0, g().HB)(i.dataConfig);
                        return i
                    }(null == (l = V.value.format) ? void 0 : l.chart_config, B),
                    x = null == z ? void 0 : z[r(11448).yx.SubTaskRelation],
                    N = null == z ? void 0 : z[r(11448).yx.BlockingRelation],
                    W = V.value.type,
                    q = W ? (0, r(565546).u9)(W) : void 0,
                    j = q ? null == (a = V.value.format) ? void 0 : a[q] : void 0,
                    H = q ? {
                        [q]: T(j, B)
                    } : {},
                    X = T(null == (n = V.value.format) ? void 0 : n.board_properties, B),
                    $ = T(null == (p = V.value.format) ? void 0 : p.table_properties, B);
                if (x && !(0, r(986629).qS)(W) && q) {
                    let e = null == (C = H[q]) ? void 0 : C.findIndex(e => e.property === x),
                        t = H[q];
                    t && (!e || e < 0 ? t.push({
                        property: x,
                        visible: !0
                    }) : t[e].visible = !0)
                }
                let K = { ...V.value.format,
                        collection_group_by: A,
                        board_columns_by: O,
                        board_columns: R,
                        board_properties: X,
                        table_properties: $,
                        chart_config: D,
                        property_filters: null == (c = V.value.format) || null == (c = c.property_filters) ? void 0 : c.map(({
                            id: e,
                            filter: t
                        }) => {
                            let {
                                filter: r
                            } = t;
                            if ("relation_contains" === r.operator) {
                                let i = (Array.isArray(r.value) ? r.value : [r.value]).map(e => {
                                    let t = e.type;
                                    if ("relative" === t) return e;
                                    if ("exact" === t) {
                                        let t = e.value,
                                            r = t && I[t];
                                        return r ? { ...e,
                                            value: r
                                        } : e
                                    }(0, g().HB)(t)
                                });
                                return {
                                    id: e,
                                    filter: E({
                                        property: t.property,
                                        filter: {
                                            operator: r.operator,
                                            value: i
                                        }
                                    }, B)
                                }
                            }
                            return {
                                id: e,
                                filter: E(t, B)
                            }
                        }),
                        collection_groups: null == (u = V.value.format) || null == (u = u.collection_groups) ? void 0 : u.map(e => "relation" === e.value.type && e.value.value && !(0, r(910675).zx)(e.value.value) && I[e.value.value.id] ? { ...e,
                            value: {
                                type: "relation",
                                value: {
                                    id: I[e.value.value.id],
                                    table: "block",
                                    spaceId: B.getSpaceId()
                                }
                            }
                        } : e),
                        ...H,
                        table_subitem_toggle_column: "title",
                        ...N ? {
                            timeline_arrows_by: {
                                property: N
                            }
                        } : {}
                    },
                    L = f().oE(null == (s = V.value.page_sort) ? void 0 : s.map(e => I[e])),
                    G = null == (_ = V.value.query2) || null == (_ = _.aggregations) ? void 0 : _.map(e => e.property ? { ...e,
                        property: (null == z ? void 0 : z[e.property]) ? ? e.property
                    } : e),
                    J = T(null == (m = V.value.query2) ? void 0 : m.sort, B),
                    Y = null == (v = V.value.query2) ? void 0 : v.timeline_by,
                    Q = Y ? B.getMappedProperty(Y) : void 0,
                    Z = null == (y = V.value.query2) ? void 0 : y.calendar_by,
                    ee = Z ? B.getMappedProperty(Z) : void 0,
                    et = null == (b = V.value.query2) ? void 0 : b.filter,
                    er = et ? function(e, t) {
                        let i = [];
                        if (e.filters)
                            for (let o of e.filters) {
                                let e = function e(t, i) {
                                    if ((0, r(400473).yX)(t))
                                        if (null != i && i[t.property]) return { ...t,
                                            property: i[t.property]
                                        };
                                        else return t;
                                    if ((0, r(400473).LB)(t)) return t;
                                    if ((0, r(400473).dU)(t)) {
                                        if (t.filters) {
                                            let r = [];
                                            for (let o of t.filters) {
                                                let t = e(o, i);
                                                if (!t) throw Error("Invalid filter");
                                                r.push(t)
                                            }
                                            return {
                                                operator: t.operator,
                                                filters: r
                                            }
                                        }
                                    } else(0, g().HB)(t)
                                }(o, t);
                                if (!e) throw Error("Invalid filter");
                                i.push(e)
                            }
                        return { ...e,
                            filters: i
                        }
                    }(et, z) : void 0,
                    ei = h().eC({
                        environment: k,
                        table: d().Gy1,
                        inMemoryRecordCache: P.inMemoryRecordCache,
                        value: { ...V.value,
                            parent_id: P.id,
                            parent_table: P.table,
                            space_id: P.getSpaceId(),
                            format: { ...K,
                                app_config_uri: V.uri,
                                collection_pointer: B.pointer
                            },
                            query2: { ...V.value.query2,
                                filter: er,
                                aggregations: G,
                                sort: J,
                                timeline_by: Q,
                                calendar_by: ee
                            },
                            page_sort: L,
                            alive: !0
                        },
                        transaction: U
                    });
                I[V.uri] = ei.id;
                let eo = r(547131).p.createChildStore(P, ei.pointer);
                return (0, S().B)({
                    parentStore: P.getCollectionViewsStore(),
                    appendStore: eo,
                    transaction: U
                }), I
            }

            function k(e) {
                var t, i, o;
                let {
                    environment: a,
                    collectionStore: n,
                    dependency: c,
                    allFeatures: u,
                    blockUriMap: s,
                    transaction: _,
                    customPropertyName: m
                } = e, v = c.propertySchema;
                if ("relation" === v.type) {
                    let e = (0, r(390768).N)(v);
                    if (!e) throw Error("Invalid relation schema.");
                    let t = s[e.id];
                    if (!t) throw Error("Related collection not yet created");
                    let i = n.getDeletedSchema(),
                        o = i[c.uri],
                        l = o && (0, p().U)(o) ? (0, r(390768).N)(o) : void 0;
                    if (c.isConnectedRelation && c.integrationId === r(49361).ob && l) {
                        let e = r(28630).KA({
                            deletedSchema: i,
                            property: c.uri
                        });
                        if (!e) throw Error("Deleted property schema was not found");
                        (0, r(957395).F)({
                            environment: a,
                            collectionStore: n,
                            update: e.updateSchema,
                            transaction: _
                        }), (0, r(149568).E)({
                            collectionStore: n,
                            update: e.updateDeletedSchema,
                            transaction: _
                        }), v = { ...v,
                            collection_pointer: l,
                            collection_id: l.id
                        }
                    } else v = { ...v,
                        collection_pointer: {
                            id: t,
                            table: d().VlP,
                            spaceId: n.getSpaceId()
                        },
                        collection_id: t
                    }
                } else if ("select" === v.type) {
                    let e = n.getSchema()[c.uri];
                    if (e && "select" === e.type) {
                        let t = (0, r(599811).r)([c.uri], u),
                            o = f().Bq(f().oE(t.map(e => {
                                if ("property" === e.type && "select" === e.propertySchema.type) {
                                    var t;
                                    return null == (t = e.propertySchema.options) ? void 0 : t.map(e => e.id)
                                }
                            }))),
                            l = (null == (i = e.options) ? void 0 : i.filter(e => !o.includes(e.id))) || [];
                        v = { ...v,
                            options: [...v.options || [], ...l]
                        }
                    }
                } else if ("auto_increment_id" === v.type) {
                    let e = n.getSchema(),
                        t = (0, g().WP)(e).find(e => {
                            var t;
                            let r = e[0],
                                i = null == (t = e[1]) ? void 0 : t.type;
                            return r && i && "auto_increment_id" === i
                        });
                    if (t) {
                        let e = t[0];
                        return (0, b().z)({
                            stores: [n],
                            update: {
                                app_uri_map: { ...null == (o = n.getFormat()) ? void 0 : o.app_uri_map,
                                    [c.uri]: e
                                }
                            },
                            transaction: _
                        }), c.uri
                    }
                } else if ("text" === v.type) v.ai_inference && v.ai_inference.auto_update_on_edit && (v.ai_inference.auto_update_on_edit = (0, r(799514).hn)({
                    environment: a,
                    userId: a.currentUser.id,
                    spaceId: n.getSpaceId()
                }));
                else if ("rollup" === v.type) {
                    if (!v.relation_property || !v.target_property) throw Error("Invalid rollup schema.");
                    let e = n.getSchema()[v.relation_property];
                    if (!e || "relation" !== e.type) throw Error("Invalid rollup schema.");
                    let t = (0, r(390768).N)(e);
                    if (!t) throw Error("Invalid rollup schema. Missing target collection pointer.");
                    let i = n.getParentStore();
                    if (!i) throw Error("Undefined parent store.");
                    let o = l().m.createChildStore(i, t);
                    if (!o) throw Error("Related collection not yet created");
                    let a = o.getMappedProperty(v.target_property);
                    a && (v.target_property = a)
                } else if ("formula" === v.type && (0, r(537664).F)(v) && v.formula2) {
                    let {
                        value: e
                    } = (0, r(138303).RI)({
                        baseUrl: r(986939).A.domainBaseUrl,
                        formula: v.formula2.code,
                        publicDomainName: r(986939).A.publicDomainName,
                        spaceId: n.getSpaceId(),
                        visitors: {
                            visitFormulaContextValue: void 0,
                            visitFormulaPageProperty: e => {
                                var t;
                                return "collection" in e && (null == (t = e.collection) ? void 0 : t.id) === c.collectionUri ? {
                                    type: "replace",
                                    value: { ...e,
                                        collection: n.pointer
                                    }
                                } : {
                                    type: "keep"
                                }
                            },
                            visitRecordPointer: void 0
                        }
                    });
                    v.formula2.code = e
                }
                m && m.length > 0 && (v = { ...v,
                    name: m
                }), (0, r(957395).F)({
                    environment: a,
                    collectionStore: n,
                    update: {
                        [c.uri]: v
                    },
                    transaction: _
                }), (0, b().z)({
                    stores: [n],
                    update: {
                        app_uri_map: { ...null == (t = n.getFormat()) ? void 0 : t.app_uri_map,
                            [c.uri]: c.uri
                        }
                    },
                    transaction: _
                })
            }

            function B(e) {
                let {
                    environment: t,
                    spaceViewStore: B,
                    appParentStore: M,
                    addedDependencies: T,
                    appConfig: E,
                    transaction: F,
                    customPropertyName: z
                } = e, {
                    newUriMap: A
                } = e, O = [...T.filter(({
                    type: e
                }) => "collection_view_block" === e), ...T.filter(({
                    type: e
                }) => "collection" === e), ...T.filter(({
                    type: e
                }) => "sub_external_collection" === e), ...T.filter(({
                    type: e
                }) => "property" === e), ...T.filter(({
                    type: e
                }) => "database_template" === e), ...T.filter(({
                    type: e
                }) => "block" === e), ...T.filter(({
                    type: e
                }) => "collection_view" === e)], R = M.table === d().NXh ? M.id : M.getSpaceId(), D = M.table === d().NXh ? M : M.getSpaceStore();
                if (R && D) {
                    for (let e of O)
                        if ("collection_view_block" === e.type) {
                            let r = A[e.uri];
                            if (r) {
                                var x;
                                let e = o().B.createChildStore(M, {
                                    table: d().evP,
                                    id: r,
                                    spaceId: R
                                });
                                null != (x = U(B, M, e)) && null != (x = x.getValue()) && x.includes(e.id) || V({
                                    environment: t,
                                    spaceViewStore: B,
                                    parentStore: M,
                                    collectionViewBlockStore: e,
                                    transaction: F,
                                    appendOrPrepend: "append"
                                }), (0, w().z)({
                                    store: e,
                                    data: {
                                        parent_id: M.id,
                                        parent_table: M.table,
                                        alive: !0
                                    },
                                    transaction: F
                                })
                            } else {
                                let r = h().Wv({
                                    environment: t,
                                    inMemoryRecordCache: M.inMemoryRecordCache,
                                    type: M.table === d().evP && "app_container" === M.getFormat().collection_view_sub_type ? "collection_view" : "collection_view_page",
                                    spaceId: R,
                                    format: {
                                        app_config_uri: e.uri,
                                        page_icon: e.icon,
                                        page_cover: e.cover
                                    },
                                    properties: {
                                        title: (0, s().x9d)(e.name)
                                    },
                                    transaction: F
                                });
                                (0, w().z)({
                                    store: r,
                                    data: {
                                        parent_id: M.id,
                                        parent_table: M.table,
                                        alive: !0
                                    },
                                    transaction: F
                                }), A[e.uri] = r.id;
                                let i = o().B.createChildStore(M, r.pointer);
                                V({
                                    environment: t,
                                    spaceViewStore: B,
                                    parentStore: M,
                                    collectionViewBlockStore: i,
                                    transaction: F,
                                    appendOrPrepend: "append"
                                })
                            }
                        } else if ("collection" === e.type) {
                        let r = I(M, e.collectionViewBlockUri, A);
                        if (!r) throw Error("SubViewBlockStore not found");
                        for (let e of r.getOwnedCollectionStores())(0, m().removeCollectionFromCollectionViewBlock)({
                            collectionViewBlockStore: r,
                            collectionStore: e,
                            transaction: F
                        });
                        let i = A[e.uri];
                        if (i) {
                            let e = l().m.createChildStore(M, {
                                table: d().VlP,
                                id: i,
                                spaceId: R
                            });
                            (0, _().p)({
                                collectionViewBlockStore: r,
                                collectionPointer: e.pointer,
                                transaction: F
                            }), (0, w().z)({
                                store: e,
                                data: {
                                    alive: !0,
                                    parent_id: r.id,
                                    parent_table: r.table
                                },
                                transaction: F
                            })
                        } else {
                            let i = h().eC({
                                environment: t,
                                table: d().VlP,
                                inMemoryRecordCache: r.inMemoryRecordCache,
                                value: { ...e.value,
                                    parent_id: r.id,
                                    parent_table: r.table,
                                    space_id: r.getSpaceId(),
                                    format: {
                                        app_config_uri: e.uri,
                                        app_uri_map: Object.fromEntries(Object.keys(e.value.schema ? ? {}).filter(e => e.startsWith("notion://")).map(e => [e, e])),
                                        ...e.value.format
                                    },
                                    alive: !0
                                },
                                transaction: F
                            });
                            A[e.uri] = i.id;
                            let o = l().m.createChildStore(r, i.pointer);
                            (0, _().p)({
                                collectionViewBlockStore: r,
                                collectionPointer: o.pointer,
                                transaction: F
                            })
                        }
                    } else if ("sub_external_collection" === e.type) {
                        let r = i().A.getIntegrationsAsRecordMap().getModel({
                            table: d().Lij,
                            id: e.integrationId
                        });
                        if (!r || !(0, u().Ww)(r)) throw Error("Invalid integration");
                        let o = P(M, e.parentCollectionUri, A);
                        if (!o) throw Error("Unable to find parent collection store");
                        let l = o.getDeletedSchema()[e.relationUri],
                            a = l && (0, p().U)(l) ? (0, n().z)(l) : void 0;
                        if (l && (0, p().U)(l) && a) {
                            A[e.uri] = a;
                            continue
                        }
                        let c = v().qM({
                            environment: t,
                            pattern: e.pattern,
                            integration: r,
                            parentCollectionStore: o,
                            transaction: F
                        });
                        A[e.uri] = c.id
                    } else if ("property" === e.type) ! function(e) {
                        let {
                            environment: t,
                            transaction: r,
                            appParentStore: i,
                            dependency: o,
                            uriMap: l,
                            appConfig: a,
                            customPropertyName: n
                        } = e, p = P(i, o.collectionUri, l);
                        if (!p) throw Error("Collection not found");
                        k({
                            environment: t,
                            collectionStore: p,
                            dependency: o,
                            blockUriMap: l,
                            allFeatures: a.allFeatures,
                            transaction: r,
                            customPropertyName: n
                        })
                    }({
                        environment: t,
                        appConfig: E,
                        appParentStore: M,
                        dependency: e,
                        uriMap: A,
                        transaction: F,
                        customPropertyName: z
                    });
                    else if ("collection_view" === e.type) {
                        let r = "block" === M.table && M.getFormat().app_config_uri === e.collectionViewBlockUri ? M : I(M, e.collectionViewBlockUri, A);
                        if (!r) throw Error("View's home block not found");
                        let i = P(M, e.collectionUri, A);
                        if (!i) throw Error("View source collection not found");
                        A = C({
                            environment: t,
                            collectionStore: i,
                            collectionViewBlockStore: r,
                            dependency: e,
                            blockUriMap: A,
                            transaction: F
                        })
                    } else if ("database_template" === e.type) {
                        let r = P(M, e.collectionUri, A);
                        if (!r) throw Error("Collection not found");
                        let i = r.getTemplatePagesStore(),
                            l = A[e.uri];
                        if (l) {
                            let t = o().B.createChildStore(r, {
                                table: d().evP,
                                id: l,
                                spaceId: r.getSpaceId()
                            });
                            (0, w().z)({
                                store: t,
                                data: {
                                    alive: !0,
                                    parent_id: r.id,
                                    parent_table: r.table,
                                    is_template: !0
                                },
                                transaction: F
                            }), (0, S().B)({
                                parentStore: i,
                                appendStore: t,
                                transaction: F
                            }), e.isDefault && (0, b().z)({
                                stores: [r],
                                update: {
                                    collection_default_template: {
                                        template_page_id: t.id
                                    }
                                },
                                transaction: F
                            })
                        } else {
                            let o = h().Wv({
                                environment: t,
                                inMemoryRecordCache: M.inMemoryRecordCache,
                                type: e.blockValue.type,
                                spaceId: r.getSpaceId(),
                                properties: e.blockValue.properties,
                                format: { ...e.blockValue.format,
                                    app_config_uri: e.uri
                                },
                                transaction: F
                            });
                            (0, w().z)({
                                store: o,
                                data: {
                                    parent_id: r.id,
                                    parent_table: r.table,
                                    alive: !0,
                                    is_template: !0
                                },
                                transaction: F
                            }), A[e.uri] = o.id, (0, S().B)({
                                parentStore: i,
                                appendStore: o,
                                transaction: F
                            }), e.isDefault && (0, b().z)({
                                stores: [r],
                                update: {
                                    collection_default_template: {
                                        template_page_id: o.id
                                    }
                                },
                                transaction: F
                            })
                        }
                    } else "block" === e.type ? function(e) {
                        let {
                            environment: t,
                            appParentStore: i,
                            dependency: l,
                            newUriMap: a,
                            transaction: n
                        } = e, p = I(i, l.uri, a), c = "collection" === l.parentType ? P(i, l.parentUri, a) : I(i, l.parentUri, a);
                        if (c) {
                            if (p)(0, w().z)({
                                store: p,
                                data: {
                                    parent_id: c.id,
                                    parent_table: c.table,
                                    alive: !0
                                },
                                transaction: n
                            });
                            else {
                                let e = i.table === d().NXh ? i.id : i.getSpaceId(),
                                    r = i.table === d().NXh ? i : i.getSpaceStore();
                                if (!e || !r) return;
                                let u = h().Wv({
                                    environment: t,
                                    type: l.blockValue.type,
                                    spaceId: e,
                                    format: { ...l.blockValue.format,
                                        app_config_uri: l.uri
                                    },
                                    properties: l.blockValue.properties,
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    transaction: n
                                });
                                (0, w().z)({
                                    store: u,
                                    data: {
                                        parent_id: c.id,
                                        parent_table: c.table,
                                        alive: !0
                                    },
                                    transaction: n
                                }), p = o().B.createChildStore(c, u.pointer), a[l.uri] = u.pointer.id
                            }
                            "block" === c.table ? r(579695).NI({
                                parentStore: c,
                                childStore: p,
                                transaction: n
                            }) : "collection" === c.table ? r(579695).X$({
                                parentStore: c,
                                childStore: p,
                                transaction: n
                            }) : (0, g().HB)(c)
                        }
                    }({
                        environment: t,
                        appParentStore: M,
                        dependency: e,
                        newUriMap: A,
                        transaction: F
                    }) : "page_template" === e.type || (0, g().HB)(e);
                    ! function(e) {
                        let {
                            environment: t,
                            appParentStore: r,
                            collectionTutorialBlockDependencies: i,
                            newUriMap: o,
                            transaction: l
                        } = e;
                        for (let e of i) {
                            let i = I(r, e.uri, o),
                                n = null == i ? void 0 : i.getParentStore();
                            if (!i || !n || "collection" !== n.table || !e.blockValue.properties) continue;
                            let p = {};
                            Object.entries(e.blockValue.properties).forEach(([e, i]) => {
                                var l, u;
                                if ((null == (l = n.getSchema()[e]) ? void 0 : l.type) === "relation") {
                                    let t = (0, c().n)(i),
                                        l = f().oE(t.map(e => {
                                            let t = o[e.id];
                                            if (t) return {
                                                table: d().evP,
                                                id: t,
                                                spaceId: r.table === d().NXh ? r.id : r.getSpaceId()
                                            }
                                        })),
                                        a = (0, c().Ap)(l);
                                    p[e] = a
                                } else(null == (u = n.getSchema()[e]) ? void 0 : u.type) === "person" && t.currentUser.id ? p[e] = (0, a().h)([{
                                    table: d().oo9,
                                    id: t.currentUser.id
                                }]) : p[e] = i
                            }), y().C({
                                environment: t,
                                store: i,
                                properties: p,
                                transaction: l
                            })
                        }
                    }({
                        environment: t,
                        appParentStore: M,
                        collectionTutorialBlockDependencies: T.filter(({
                            type: e
                        }) => "block" === e),
                        newUriMap: A,
                        transaction: F
                    })
                }
            }

            function P(e, t, r) {
                return r[t] ? l().m.createChildStore(e, {
                    table: d().VlP,
                    id: r[t],
                    spaceId: e.table === d().NXh ? e.id : e.getSpaceId()
                }) : void 0
            }

            function V(e) {
                let {
                    environment: t,
                    spaceViewStore: i,
                    parentStore: o,
                    collectionViewBlockStore: l,
                    transaction: a,
                    appendOrPrepend: n
                } = e;
                if (o.table === d().evP);
                else if (o.table === d().NXh) {
                    if ((null == i ? void 0 : i.getSpaceId()) !== o.id) return;
                    r(964232).yM({
                        environment: t,
                        spaceStore: o,
                        spaceViewStore: i,
                        pageStore: l,
                        isPrivate: !0,
                        transaction: a
                    })
                } else o.table === d().yKj ? r(89739).sP({
                    teamStore: o,
                    store: l,
                    transaction: a,
                    location: {
                        type: n
                    }
                }) : (0, g().HB)(o)
            }

            function I(e, t, r) {
                return r[t] ? o().B.createChildStore(e, {
                    table: d().evP,
                    id: r[t],
                    spaceId: e.table === d().NXh ? e.id : e.getSpaceId()
                }) : void 0
            }

            function U(e, t, r) {
                if (t.table === d().yKj) return t.getTeamPagesStore();
                if (t.table === d().NXh) {
                    var i, o;
                    if (null != (i = e.getPrivatePagesStore().getValue()) && i.includes(r.id)) return e.getPrivatePagesStore();
                    if (null != (o = e.getSharedPagesStore().getValue()) && o.includes(r.id)) return e.getSharedPagesStore()
                } else {
                    if (t.table === d().evP) return t.getContentStore();
                    (0, g().HB)(t)
                }
            }

            function M(e, t) {
                if (e) return E(e, t)
            }

            function T(e, t) {
                if (e) return e.map(e => E(e, t))
            }

            function E(e, t) {
                let r = t.getMappedProperty(e.property);
                return r ? { ...e,
                    property: r
                } : e
            }
        }
    }
]);