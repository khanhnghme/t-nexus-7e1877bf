"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86662], {
        36642: (e, t, a) => {
            a.d(t, {
                g: () => r
            }), a(16280);

            function r() {
                let e = (0, a(539709).f)();
                if (!e) throw Error("No available store");
                return e
            }
        },
        204021: (e, t, a) => {
            a.d(t, {
                P: () => r
            });

            function r(e) {
                if (e >= 1e5) return "100k-or-more";
                if (e >= 5e4) return "50k-100k";
                if (e >= 1e4) return "10k-50k";
                if (e >= 5e3) return "5k-10k";
                if (e >= 1e3) return "1k-5k";
                else if (e >= 500) return "500-1k";
                else if (e >= 100) return "100-500";
                else if (e >= 1) return "1-100";
                else return "0"
            }
        },
        418511: (e, t, a) => {
            a.d(t, {
                BB: () => c,
                CD: () => f,
                _W: () => m,
                gv: () => p,
                r0: () => d,
                y2: () => s
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(803949), a(581454);
            var r = () => a(932082),
                i = () => a(832375),
                o = () => a(722371);
            async function n(e) {
                let {
                    environment: t,
                    latentOperation: r,
                    operationContext: n,
                    inMemoryRecordCache: s,
                    transaction: d
                } = e, p = (0, a(328765).S)(), c = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!c || !p) throw Error("No space or space view.");
                let m = new Set,
                    {
                        assistantOperation: f,
                        type: h
                    } = r;
                if ("addBlockToPage" === h || "insertBlockAfter" === h) {
                    let e, r = "addBlockToPage" === h ? f.blockNode.attributes.id : f.insertBlockNode.attributes.id;
                    m.add(r);
                    let l = a(970831).B.createChildStore(c, {
                            id: (0, a(627155).So)(r),
                            table: i().evP
                        }),
                        {
                            target: s
                        } = n.addBlockToPage,
                        u = p.id;
                    "insertBlockAfter" === h && n.enforceDefaultInsertBehavior ? (e = {
                        type: "page",
                        id: f.parentId,
                        spaceId: u
                    }, m.add(f.parentId)) : "page" === s ? (e = {
                        type: "page",
                        id: n.addBlockToPage.pageId,
                        spaceId: u
                    }, m.add(n.addBlockToPage.pageId)) : "collection" === s ? e = {
                        type: "collection",
                        id: n.addBlockToPage.collectionId,
                        spaceId: u
                    } : "privatePages" === s ? e = {
                        type: "space-private-pages",
                        spaceId: u
                    } : "team" === s ? e = {
                        type: "team",
                        id: n.addBlockToPage.teamspaceId,
                        spaceId: u
                    } : (0, o().HB)(s);
                    let g = {
                        environment: t,
                        value: e,
                        blocksToMove: [l],
                        transaction: d
                    };
                    "insertBlockAfter" === h ? "team" === g.value.type || n.enforceDefaultInsertBehavior ? await a(351198).HY(g) : await a(351198).LC(g) : "addBlockToPage" === h ? await a(351198).HY(g) : (0, o().HB)(h)
                } else if ("removeBlock" === h) {
                    let {
                        actorPointer: e
                    } = r.data;
                    for (let r of (0, a(627155).o4)({
                            assistantOperation: f,
                            updateMetadata: {
                                last_edited_by_table: e.table,
                                last_edited_by_id: e.id,
                                last_edited_time: Date.now()
                            },
                            includeRemoveFromParent: !0
                        })) {
                        u({
                            environment: t,
                            operation: r,
                            recordCache: s,
                            transaction: d
                        });
                        let e = l({
                            operation: r,
                            environment: t,
                            inMemoryRecordCache: s
                        });
                        e && m.add(e)
                    }
                } else if ("addUnknownBlockToPage" === h) {
                    let {
                        operations: e
                    } = (0, a(627155).rB)({
                        latentOperation: r,
                        shouldCreateUnknownBlock: !0
                    });
                    for (let a of e) u({
                        environment: t,
                        operation: a,
                        recordCache: s,
                        transaction: d
                    })
                } else(0, o().HB)(h);
                return {
                    editedPageIds: m
                }
            }

            function l(e) {
                let {
                    operation: t,
                    environment: r,
                    inMemoryRecordCache: o
                } = e;
                if (t.pointer.table === i().evP) {
                    let e = new(a(970831)).B(r, t.pointer, {
                        inMemoryRecordCache: o
                    });
                    if (e.isPageBlock()) return e.id
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    transaction: a,
                    operations: r,
                    inMemoryRecordCache: i,
                    operationContext: s
                } = e, d = new Set;
                for (let e of r)
                    if ("latentOperation" === e.type) {
                        let {
                            latentOperation: r
                        } = e, {
                            editedPageIds: o
                        } = await n({
                            environment: t,
                            latentOperation: r,
                            operationContext: s,
                            inMemoryRecordCache: i,
                            transaction: a
                        });
                        o.forEach(e => d.add(e))
                    } else if ("operation" === e.type) {
                    let {
                        operation: r
                    } = e;
                    u({
                        environment: t,
                        operation: r,
                        recordCache: i,
                        transaction: a
                    });
                    let o = l({
                        operation: r,
                        environment: t,
                        inMemoryRecordCache: i
                    });
                    o && d.add(o)
                } else(0, o().HB)(e);
                return {
                    editedPageIds: d
                }
            }

            function d(e) {
                var t;
                let {
                    assistantOperation: r,
                    attributionActor: i,
                    caches: o,
                    environment: n,
                    currentUserId: l
                } = e, s = (0, a(36642).g)().getSpaceId(), d = null == (t = a(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.id, u = a(300441).Q.unwrap((0, a(627155).Vz)({
                    assistantOperation: r,
                    actorPointer: i,
                    getRecordValue: o.makeGetRecordValueFnFromUpdatesCache(l),
                    spaceId: s,
                    spaceViewId: d,
                    currentTimeZone: (0, a(714350).P)()
                }));
                return u.length > 0 && p({
                    environment: n,
                    operations: u,
                    caches: o,
                    attributionActor: i
                }), u
            }

            function p(e) {
                var t;
                let {
                    environment: o,
                    operations: n,
                    caches: l,
                    attributionActor: s,
                    operationContext: d
                } = e, p = o.currentUser.id;
                if (!p) throw Error("No current user.");
                let c = a(496282).L3.isEqual(s, {
                        id: p,
                        table: i().oo9
                    }),
                    m = null == (t = (0, a(328765).S)()) ? void 0 : t.id,
                    f = new Set;
                l.commitTransaction({
                    environment: o,
                    createAndCommit: a(377796).createAndCommit,
                    cellTarget: m ? {
                        spaceWithId: m
                    } : void 0,
                    perform(e, t, l) {
                        let {
                            operations: s
                        } = (0, a(627155).g$)(n, d ? ? (0, a(627155).tF)({
                            shouldRemoveBlocksFromParent: l
                        }), !0);
                        for (let n of s) {
                            if (! function(e, t) {
                                    let r = t.pointer,
                                        i = new(a(517013)).pm({
                                            environment: e,
                                            pointer: r
                                        }).getRole();
                                    return !i || (0, a(642157).p2)(i)
                                }(o, n)) throw new(r()).Te("page_edit_insufficient_permissions", "Insufficient permissions to perform this edit. Respond with a chat instead.");
                            n.pointer.table === i().evP && f.add(n.pointer.id), u({
                                environment: o,
                                operation: n,
                                recordCache: t,
                                transaction: e
                            })
                        }
                    },
                    userAction: "assistantActions.applyTemporaryOperations",
                    userId: p,
                    ...!c && {
                        skipUpdatingEditedMetadata: !0
                    },
                    canUndo: !1
                });
                let h = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                h && a(807635).YW(o, h, [...f])
            }

            function u(e) {
                let {
                    environment: t,
                    operation: r,
                    transaction: n,
                    recordCache: l
                } = e;
                if ((0, a(305050).ph)(r))(0, a(857796).I)({
                    environment: t,
                    operation: r,
                    transaction: n,
                    inMemoryRecordCache: l
                });
                else if (r.pointer.table === i().evP)(0, a(857796).I)({
                    environment: t,
                    operation: r,
                    transaction: n,
                    inMemoryRecordCache: l
                });
                else if ((0, a(488307).$Y)(r) || (0, a(488307).mP)(r)) {
                    let e = new(a(517013)).pm({
                        environment: t,
                        pointer: r.pointer,
                        path: r.path,
                        recordStoreOptions: {
                            inMemoryRecordCache: l
                        }
                    });
                    (0, a(421439).y4)({
                        store: e,
                        operation: r,
                        transaction: n
                    })
                } else(0, o().HB)(r)
            }

            function c(e) {
                let {
                    shouldCreateUnknownBlock: t
                } = e, r = a(838448).default.getActiveSession();
                if (null != r && r.assistantConfigurationStoreState.requestedOnPublicDomain) return (0, a(627155).ze)();
                let i = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i) throw Error("No space view.");
                return (0, a(627155).OS)({
                    spaceViewId: i.id,
                    shouldCreateUnknownBlock: t
                })
            }

            function m(e) {
                let t, r = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!r) throw Error("No space view.");
                let {
                    type: i
                } = e;
                if ("page" === i) t = {
                    addBlockToPage: {
                        target: "page",
                        pageId: e.id
                    }
                };
                else if ("space-private-pages" === i) t = {
                    addBlockToPage: {
                        target: "privatePages",
                        spaceViewId: r.id
                    }
                };
                else if ("collection" === i) t = {
                    addBlockToPage: {
                        target: "collection",
                        collectionId: e.id
                    }
                };
                else if ("team" === i) t = {
                    addBlockToPage: {
                        target: "team",
                        teamspaceId: e.id
                    }
                };
                else if ("space" === i) throw Error("Move to Space not supported");
                else(0, o().HB)(i);
                return t
            }
            async function f(e) {
                let {
                    environment: t,
                    assistantOperations: r
                } = e, n = [];
                for (let e of r) "createBlock" === e.command && (0, o().O9)(e.databaseSchemaId) && n.push({
                    id: e.databaseSchemaId,
                    table: i().evP
                });
                let l = n.map(e => new(a(970831)).B(t, e));
                await a(975162).lX(l, 500, e => e.load());
                let s = l.map(e => e.DANGEROUSLY_INCORRECT_getCollectionStore()).filter(o().O9);
                await a(975162).lX(s, 500, e => e.load())
            }
        },
        476325: (e, t, a) => {
            a.d(t, {
                I: () => f
            }), a(898992), a(354520), a(16280), a(944114), a(823215), a(672577), a(581454), a(737550);
            var r = () => a(970831),
                i = () => a(955630),
                o = () => a(832375),
                n = () => a(247438),
                l = () => a(381453);

            function s(e) {
                let {
                    environment: t,
                    from: r,
                    ...i
                } = e, {
                    diffValue: o,
                    metrics: n
                } = (0, a(674106).hl)(i);
                return (0, a(104310).u)({
                    event: {
                        eventName: "diff_text_value_latency",
                        eventProperties: {
                            time: n.latencyMs,
                            from: r,
                            implementation: "sync",
                            before_length: (0, a(204021).P)(n.beforeLength),
                            after_length: (0, a(204021).P)(n.afterLength)
                        }
                    }
                }), o
            }
            var d = () => a(368198);

            function p(e, t) {
                let {
                    environment: a,
                    isIncompleteAfter: r,
                    editId: i
                } = t;
                return s({
                    environment: a,
                    from: "assistantDiff",
                    before: e ? ? [],
                    after: [],
                    isIncompleteAfter: r,
                    insertionAnnotation: i ? [n().Ifu.Inserted, i] : [n().Ifu.Inserted],
                    deletionAnnotation: i ? [n().Ifu.Deleted, i] : [n().Ifu.Deleted]
                })
            }

            function u(e, t) {
                let {
                    environment: a,
                    isIncompleteAfter: r,
                    editId: i
                } = t;
                return s({
                    environment: a,
                    from: "assistantDiff",
                    before: [],
                    after: e ? ? [],
                    isIncompleteAfter: r,
                    insertionAnnotation: i ? [n().Ifu.Inserted, i] : [n().Ifu.Inserted],
                    deletionAnnotation: i ? [n().Ifu.Deleted, i] : [n().Ifu.Deleted]
                })
            }

            function c(e) {
                let {
                    environment: t,
                    transaction: r,
                    blockStore: i,
                    property: o,
                    beforePropertyValue: l,
                    afterPropertyValue: d,
                    editId: p,
                    isIncompleteAfter: u,
                    dontDisplayRemoves: c
                } = e, m = function(e, t) {
                    if (!e || !t) return t;
                    let r = e => [e[0], { ...e[1],
                        date_format: void 0,
                        time_format: void 0
                    }];
                    if (t.every(e => !(0, n().uPN)(e).some(n().qsB)) || e.every(e => !(0, n().uPN)(e).some(n().qsB))) return t;
                    let i = e.map(e => {
                            if (!(0, n().qXl)(e)) return;
                            let [, t] = e;
                            return (0, n().$CJ)(t)
                        }).filter(a(722371).O9),
                        o = new(a(793665)).A;
                    for (let e of i) {
                        let t = r(e);
                        o.set(t, e)
                    }
                    return t.map(e => {
                        let t = (0, n().uPN)(e).map(e => {
                            if (!(0, n().qsB)(e)) return e;
                            let t = r(e);
                            return o.get(t) ? ? e
                        });
                        return (0, n().Ey_)((0, n().N8A)(e), t)
                    })
                }(l, d);
                if ((l || m) && !(0, n().MTk)(l, m)) {
                    let e = s({
                        environment: t,
                        from: "assistantDiff",
                        before: l || [],
                        after: m || [],
                        isIncompleteAfter: u,
                        insertionAnnotation: p ? [n().Ifu.Inserted, p] : [n().Ifu.Inserted],
                        deletionAnnotation: p ? [n().Ifu.Deleted, p] : [n().Ifu.Deleted]
                    });
                    c && (e = e.filter(e => !(e => {
                        if (!(0, n().BEe)(e)) return !1;
                        let [, t] = e;
                        return t.some(n().XKU)
                    })(e))), a(41403).R9({
                        environment: t,
                        transaction: r,
                        store: i.getPropertyStore(o),
                        value: e
                    })
                }
            }

            function m(e) {
                let {
                    environment: t,
                    transaction: r,
                    property: i,
                    blockStore: o,
                    originalPropertyValue: n
                } = e;
                a(41403).R9({
                    environment: t,
                    transaction: r,
                    store: o.getPropertyStore(i),
                    value: p(n, e)
                })
            }

            function f(e) {
                let {
                    assistantSessionContext: t,
                    environment: s,
                    processingBlockId: f
                } = e, h = t.getAllPendingOperations(), g = t.getAllPendingExecutableOperations(), b = (0, a(655404).iL)(t.getAllPendingExecutableOperations()).filter(a(655404).BP), {
                    operations: y
                } = (0, a(627155).g$)(h, (0, a(418511).BB)({
                    shouldCreateUnknownBlock: !1
                }), !0);
                ! function(e) {
                    var t;
                    let {
                        environment: s,
                        operations: f,
                        processingBlockId: h,
                        caches: g,
                        updatedPageGroups: b,
                        executableOperations: y,
                        originalCache: v = s.defaultRecordCache.inMemoryRecordCache
                    } = e, k = s.currentUser.id;
                    if (!k) throw Error("User is not logged in.");
                    let {
                        blockIdToPageGroupAndEdit: w
                    } = (0, a(655404).s2)({
                        updatedPageGroups: b,
                        executableOperations: y
                    }), N = l().hS(l().oE(f.map(e => {
                        if (e.pointer.table === o().evP) return e.pointer
                    })), e => e.id), _ = null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id;
                    g.commitDiffPreviewTransaction({
                        environment: s,
                        createAndCommit: a(377796).createAndCommit,
                        cellTarget: _ ? {
                            spaceWithId: _
                        } : void 0,
                        perform(e, t) {
                            for (let x of N) {
                                var f, b, y, _, T;
                                let N = w.get(x.id);
                                if (!N) continue;
                                let I = new(r()).B(s, x, {
                                        inMemoryRecordCache: t
                                    }),
                                    B = null == (f = v.getEntry({
                                        pointer: x,
                                        userId: k
                                    }, {
                                        ignoreAllCaches: !0
                                    })) || null == (f = f.value) ? void 0 : f.value,
                                    [M, P] = N;
                                if (M.didCreatePage) {
                                    let t = g.updatesCache.getEntry({
                                        pointer: x,
                                        userId: k
                                    }, {
                                        ignoreAllCaches: !0
                                    });
                                    t && (0, d().K)({
                                        store: I.getContentStore(),
                                        transaction: e,
                                        value: (null == (y = t.value.value) ? void 0 : y.content) ? ? []
                                    });
                                    continue
                                }
                                let C = null == (b = t.getEntry({
                                        pointer: x,
                                        userId: k
                                    }, {
                                        ignoreAllCaches: !0
                                    })) || null == (b = b.value) ? void 0 : b.value,
                                    E = l().sb([...Object.keys((null == B ? void 0 : B.properties) ? ? {}), ...Object.keys((null == C ? void 0 : C.properties) ? ? {})]),
                                    S = M.removedBlockIds.has(x.id),
                                    A = S && (null == B ? void 0 : B.type) === i().xd.text && (null == B ? void 0 : B.properties) === void 0;
                                for (let r of (A && E.push("title"), E)) {
                                    let i = function(e) {
                                        let {
                                            blockStore: t,
                                            property: r
                                        } = e, i = Object.entries(t.getSchema() || {}).find(([e]) => e === r), o = null == i ? void 0 : i[1];
                                        return o ? (0, a(9247).QP)(o) : void 0
                                    }({
                                        blockStore: I,
                                        property: r
                                    });
                                    if (i && "text" !== i) continue;
                                    let l = null == B || null == (_ = B.properties) ? void 0 : _[r],
                                        d = null == C || null == (T = C.properties) ? void 0 : T[r],
                                        f = {
                                            environment: s,
                                            transaction: e,
                                            temporaryCache: t,
                                            blockStore: I,
                                            property: r,
                                            beforePropertyValue: l,
                                            afterPropertyValue: d,
                                            isIncompleteAfter: x.id === h && x.table === o().evP,
                                            editId: null == P ? void 0 : P.editId
                                        },
                                        g = function(e) {
                                            let {
                                                beforeString: t,
                                                afterString: r
                                            } = e, i = (0, a(674106).PD)(t, r).filter(([e]) => e !== a(674106).cb.same).length;
                                            return [i > 5, {
                                                numberOfDiffs: i
                                            }]
                                        }({
                                            beforeString: (0, n().q4_)(l),
                                            afterString: (0, n().q4_)(d)
                                        })[0],
                                        b = M.updatedBlockIds.has(x.id) && (0, n().MTk)(l, d),
                                        y = S && !A && void 0 === l;
                                    (0, n().MTk)(I.getPropertyValue("language"), [
                                        ["Mermaid"]
                                    ]) ? c({ ...f,
                                        dontDisplayRemoves: !0
                                    }): g && "title" === r ? function(e) {
                                        let {
                                            environment: t,
                                            transaction: r,
                                            blockStore: i,
                                            property: o,
                                            beforePropertyValue: l,
                                            afterPropertyValue: s
                                        } = e;
                                        if ((l || s) && !(0, n().MTk)(l, s)) {
                                            let n = p(l, e),
                                                d = u(s, e),
                                                c = n.concat([
                                                    ["\n"]
                                                ]).concat(d);
                                            a(41403).R9({
                                                environment: t,
                                                transaction: r,
                                                store: i.getPropertyStore(o),
                                                value: c
                                            })
                                        }
                                    }({ ...f
                                    }) : b ? function(e) {
                                        let {
                                            environment: t,
                                            transaction: r,
                                            property: i,
                                            blockStore: o,
                                            newPropertyValue: n
                                        } = e;
                                        a(41403).R9({
                                            environment: t,
                                            transaction: r,
                                            store: o.getPropertyStore(i),
                                            value: u(n, e)
                                        })
                                    }({ ...f,
                                        newPropertyValue: d
                                    }) : A ? m({ ...f,
                                        originalPropertyValue: (0, n().x9d)("        ")
                                    }) : y || S ? m({ ...f,
                                        originalPropertyValue: d
                                    }) : c(f)
                                }
                            }
                        },
                        userAction: "assistantActions.displayTransactionDiff",
                        userId: k,
                        canUndo: !1
                    })
                }({
                    environment: s,
                    operations: y,
                    processingBlockId: f,
                    caches: t.caches,
                    updatedPageGroups: b,
                    executableOperations: g
                })
            }
        },
        525844: (e, t, a) => {
            a.d(t, {
                U: () => r
            }), a(898992), a(354520), a(581454);

            function r(e) {
                let {
                    environment: t
                } = e, r = e.sessionId ? ? a(838448).default.getActiveSessionId(), i = r ? a(838448).default.getSessionContext(r) : void 0;
                if (!r || !i) return;
                i.addTemporaryOperationsToUncommittedOperations();
                let {
                    editGroupsThatWereRejected: o
                } = (0, a(864833).V)({
                    environment: t,
                    sessionId: r
                }), n = t.RouterStore.state.route, l = (0, a(132702).hZ)(n);
                if (l.length > 0) {
                    let e = o.map(e => "updatedPage" === e.type && e.didCreatePage ? e.pageId : void 0).filter(a(722371).O9);
                    a(381453).E$(l, e).length > 0 && (0, a(79266).navigate)({
                        environment: t,
                        url: i.urlAtStartOfSession
                    })
                }
                i.caches.removeDefaultCacheOverride(t), a(838448).default.setState({ ...a(838448).default.state,
                    ...a(838448).default.state.activeAiSessionId === r && {
                        activeAiSessionId: void 0
                    }
                })
            }
        },
        530096: (e, t, a) => {
            a.d(t, {
                jk: () => h,
                om: () => q,
                Xp: () => y,
                y5: () => F,
                Ij: () => D,
                BM: () => v,
                Rz: () => f,
                ld: () => function e(t) {
                    let {
                        getRecordModel: i,
                        currentTimeZone: o
                    } = t;
                    if ("text" === t.type) {
                        var n;
                        let {
                            nodes: l,
                            citationHandling: s
                        } = t, d = (n = l.flatMap(t => {
                            if ("inline" === t.type) {
                                var n, l;
                                let d, u = "mention-date" === (n = t.tagName) || "mention-datetime" === n || "mention-date-range" === n || "mention-datetime-range" === n ? "d" : "mention-database" === n ? "p" : U[n];
                                if (!u) throw Error(`Unknown inline element: ${t.tagName}`);
                                let c = t.children;
                                if ((0, r().O)(O, u)) d = O[u]({
                                    node: t,
                                    getRecordModel: i
                                });
                                else {
                                    if (l = u, !(0, r().O)(R, l)) throw Error(`Unsupported annotation type: ${u}`);
                                    else d = [u]
                                }
                                if (!d) return [];
                                let m = e({
                                    type: "text",
                                    nodes: c,
                                    getRecordModel: i,
                                    currentTimeZone: o
                                }) || [];
                                if (p().iGj(d)) return [p().Ey_(p().Sj, [d])];
                                if (p().gir(d)) return [p().Ey_(p().Yl$, [d])];
                                if (p().sh$(d) && (0, r().O9)(d[1]) && 0 === p().AhH(m) && (0, r().O9)(s))
                                    if ("createCitations" === s.type) {
                                        let e = p().cQR(d),
                                            t = a(683053).tD.parseAssistantHref(e);
                                        if (t)
                                            if ("database_query_results" === t.type) {
                                                let e = t.id;
                                                return [p().wmz(p().X$({
                                                    type: "query_database_result",
                                                    href: d[1],
                                                    queryDatabaseResultId: e
                                                }))]
                                            } else if ("block" === t.type) {
                                            let {
                                                blockId: e
                                            } = t;
                                            return [p().wmz(p().X$({
                                                href: d[1],
                                                blockId: e,
                                                type: "block"
                                            }))]
                                        } else if ("slack" === t.type) {
                                            let {
                                                baseUrl: e,
                                                domain: a,
                                                channelId: r,
                                                messageId: i,
                                                threadTs: o
                                            } = t;
                                            return [p().wmz(p().X$({
                                                type: "slack",
                                                href: d[1],
                                                baseUrl: e,
                                                domain: a,
                                                channelId: r,
                                                messageId: i,
                                                threadTs: o,
                                                threadHref: s.getPageLevelCitationId(t.href)
                                            }))]
                                        } else if ("helpdoc" === t.type) {
                                            let {
                                                url: e
                                            } = t;
                                            return [p().wmz(p().X$({
                                                href: d[1],
                                                url: e,
                                                type: t.type
                                            }))]
                                        } else if ("helpdoc-section" === t.type) {
                                            let {
                                                url: e
                                            } = t;
                                            return [p().wmz(p().X$({
                                                href: d[1],
                                                url: e,
                                                type: t.type,
                                                parentPageHref: t.parentPageHref
                                            }))]
                                        } else if ("microsoft-teams" === t.type) {
                                            let {
                                                url: e,
                                                channelId: a,
                                                messageId: r,
                                                threadTs: i,
                                                messageType: o
                                            } = t;
                                            return [p().wmz(p().X$({
                                                href: d[1],
                                                url: e,
                                                type: "microsoft-teams",
                                                channelId: a,
                                                messageId: r,
                                                threadTs: i,
                                                messageType: o,
                                                threadHref: s.getPageLevelCitationId(t.href)
                                            }))]
                                        } else if ("discord" === t.type) {
                                            let {
                                                url: e
                                            } = t;
                                            return [p().wmz(p().X$({
                                                type: "discord",
                                                href: d[1],
                                                url: e
                                            }))]
                                        } else if ((0, a(932956).aB)(t)) {
                                            let {
                                                url: e
                                            } = t;
                                            return [p().wmz(p().X$({
                                                href: d[1],
                                                url: e,
                                                type: t.type,
                                                messageId: e
                                            }))]
                                        } else if ("webpage" === t.type) {
                                            let {
                                                url: e
                                            } = t;
                                            return [p().wmz(p().X$({
                                                href: d[1],
                                                url: e,
                                                type: "webpage"
                                            }))]
                                        } else {
                                            if ("citation_unsupported" === t.type) return [I];
                                            (0, r().HB)(t)
                                        }
                                    } else {
                                        if ("stripCitations" === s.type) return [I];
                                        (0, r().HB)(s)
                                    }
                                if (p().sh$(d) && (0, r().O9)(d[1])) {
                                    let e = p().cQR(d),
                                        t = a(683053).tD.parseAssistantHref(e);
                                    if (t)
                                        if ("slack" === t.type) {
                                            let {
                                                baseUrl: e,
                                                domain: r,
                                                channelId: i,
                                                messageId: o,
                                                threadTs: n
                                            } = t, l = (0, a(313168).mQ)({
                                                baseUrl: e,
                                                domain: r,
                                                channelId: i,
                                                messageId: o,
                                                threadTs: n
                                            });
                                            d = p().Sez(l)
                                        } else("google-drive" === t.type || "github" === t.type || "webpage" === t.type || "helpdoc" === t.type || "helpdoc-section" === t.type) && (d = p().Sez(t.url))
                                }
                                let f = d;
                                return m.map(e => p().Ey_(p().N8A(e), [f, ...p().uPN(e)]))
                            }
                            if ("text" === t.type) return [p().Ey_(t.value, [])];
                            (0, r().HB)(t)
                        })).map((e, t) => {
                            if (e === I) return;
                            let a = p().N8A(e);
                            if (t < n.length && n[t + 1] === I && (a = a.trimEnd()), t >= 0 && n[t - 1] === I && (a = a.trimStart()), 0 !== a.length) return p().Ey_(a, p().uPN(e))
                        }).filter(r().O9), u = (null == s ? void 0 : s.type) !== "createCitations" ? d : function({
                            tokens: e,
                            getPageLevelCitationId: t
                        }) {
                            let a = e => {
                                var a;
                                if (!p().qXl(e)) return;
                                let r = null == (a = p().g2K(e[1])) ? void 0 : a[1].href;
                                if (r) return t(r)
                            };
                            return e.filter((t, i) => {
                                if (0 === i) return !0;
                                let o = a(t);
                                return (!(0, r().O9)(o) || o !== a(e[i - 1])) && !0
                            })
                        }({
                            tokens: d,
                            getPageLevelCitationId: s.getPageLevelCitationId
                        });
                        return p().__s(u)
                    } {
                        let {
                            property: n,
                            nodes: l
                        } = t;
                        if ("property-title" === n.tagName || "property-text" === n.tagName || "property-url" === n.tagName || "property-email" === n.tagName || "property-phone-number" === n.tagName) return e({
                            type: "text",
                            nodes: l,
                            getRecordModel: i,
                            currentTimeZone: o
                        });
                        if ("property-person" === n.tagName) {
                            let e = a(381453).oE(l.map(e => "inline" === e.type && "mention-person" === e.tagName ? e.attributes["person-id"] : void 0));
                            return (0, a(383431).h)(e.map(e => ({
                                table: d().oo,
                                id: e
                            })))
                        }
                        if ("property-relation" === n.tagName) {
                            let e = a(381453).oE(l.map(e => {
                                if ("inline" === e.type && "mention-page" === e.tagName) return e.attributes["page-id"]
                            }));
                            return (0, a(561872).Ap)(e.map(e => ({
                                table: s().ev,
                                id: e
                            })))
                        } else if ("property-date" === n.tagName) {
                            if (1 !== l.length) throw Error("Date property XML definition is invalid - should only have 1 mention");
                            let e = l[0];
                            if ("inline" !== e.type) throw Error("Date property XML definition should only have inline children");
                            if ("mention-date" === e.tagName) return a(561872).m5({
                                type: "date",
                                start_date: e.attributes.date
                            });
                            if ("mention-date-range" === e.tagName) return a(561872).m5({
                                type: "daterange",
                                start_date: e.attributes["start-date"],
                                end_date: e.attributes["end-date"]
                            });
                            if ("mention-datetime" === e.tagName) return a(561872).m5({
                                type: "datetime",
                                start_date: e.attributes.date,
                                start_time: e.attributes.time,
                                time_zone: o
                            });
                            else if ("mention-datetime-range" === e.tagName) return a(561872).m5({
                                type: "datetimerange",
                                start_date: e.attributes["start-date"],
                                end_date: e.attributes["end-date"],
                                start_time: e.attributes["start-time"],
                                end_time: e.attributes["end-time"],
                                time_zone: o
                            });
                            else throw Error("Date property XML mention option is invalid")
                        } else if ("property-checkbox" === n.tagName) return "true" === n.attributes.checked ? a(745680).h4 : a(745680).ZO;
                        else if ("property-select" === n.tagName || "property-status" === n.tagName) {
                            let e = a(381453).oE(l.map(e => "inline" === e.type && "option" === e.tagName ? e.attributes.option : void 0))[0];
                            return a(561872).U8(e)
                        } else if ("property-multi-select" === n.tagName) {
                            let e = a(381453).oE(l.map(e => "inline" === e.type && "option" === e.tagName ? e.attributes.option : void 0));
                            return a(561872).rK(e)
                        } else if ("property-number" === n.tagName) {
                            let e = n.attributes.number,
                                t = e ? a(700369).$J(e) : void 0;
                            return a(272139).h(t)
                        } else if ("property-created-time" === n.tagName || "property-last-edited-time" === n.tagName || "property-created-by" === n.tagName || "property-last-edited-by" === n.tagName) throw Error(`You should not manually edit metadata of type ${n.tagName}.`);
                        else(0, r().HB)(n)
                    }
                },
                oc: () => C,
                w$: () => M
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(430670), a(803949), a(581454), a(737550);
            var r = () => a(722371),
                i = () => a(281708),
                o = () => a(543464),
                n = () => a(955630),
                l = () => a(25825),
                s = () => a(682956),
                d = () => a(514214),
                p = () => a(247438),
                u = () => a(444700),
                c = () => a(418672);
            async function m({
                items: e,
                concurrencyLimit: t,
                timeoutMs: a,
                processor: r
            }) {
                let i = Array(e.length),
                    o = !1,
                    n = setTimeout(() => {
                        o = !0
                    }, a);
                try {
                    let a = new Set;
                    for (let n = 0; n < e.length && !o; n++) {
                        let l = n,
                            s = e[n],
                            d = (async () => {
                                try {
                                    if (o) return;
                                    let e = await r(s);
                                    o || (i[l] = e)
                                } catch (e) {
                                    o || (i[l] = void 0)
                                }
                            })().then(() => {
                                a.delete(d)
                            });
                        if (a.add(d), a.size >= t && await Promise.race(a), o) break
                    }
                    if (!o && a.size > 0) {
                        let e = new Promise(e => {
                                let t = setInterval(() => {
                                    (o || 0 === a.size) && (clearInterval(t), e())
                                }, 100)
                            }),
                            t = Array.from(a);
                        await Promise.race([Promise.all(t), e])
                    }
                } finally {
                    clearTimeout(n)
                }
                return i
            }
            async function f(e) {
                let {
                    pointer: t,
                    intl: r,
                    currentTimeZone: i
                } = e, o = "loadRecordValue" in e ? a(993189).h0Y.fromLoadRecordValueFn(e.loadRecordValue) : e.loadRecordModel, n = (0, a(579825).ns)({
                    pointer: t,
                    loadRecordModel: o
                }), l = await y({
                    pointer: t,
                    loadRecordModel: o,
                    rootPointer: t,
                    parentPointer: void 0,
                    spaceId: t.spaceId,
                    intl: r,
                    currentTimeZone: i
                });
                if (!l) throw new(a(932082)).u7(t.id, "Failed to build XML node");
                return {
                    node: l,
                    isNonSpaceShared: !await n
                }
            }
            async function h(e) {
                let {
                    intl: t,
                    textValue: m,
                    allowsText: f,
                    allowedTagNames: h,
                    loadRecordModel: g,
                    shouldUsePlaceholderRecordInformation: b,
                    currentTimeZone: y,
                    allowWebLoading: v = !1
                } = e, k = [], w = a(412951).RecordMap.create(), N = p().RQ(m).flatMap(e => p().uPN(e));
                if (b && g) throw Error("Expected no loadRecordModelFn when using placeholder record information");
                if (!b && !g) throw Error("Expected loadRecordModelFn to be defined when not using placeholder record info");
                !b && g && await Promise.all(N.map(async e => {
                    if (p().jIt(e)) {
                        let t = p().i$F(e);
                        if (!t) return;
                        let r = await g(t);
                        if (w.setModel(t, r), !r) return;
                        let i = a(975162).lX(r.getCollectionPointers(), 100, async e => {
                                w.setModel(e, await g(e))
                            }),
                            o = a(975162).lX(r.getCollectionViewPointers(), 100, async e => {
                                w.setModel(e, await g(e))
                            });
                        await Promise.all([i, o]);
                        let {
                            linkedCollectionPointers: n
                        } = r.getAllLinkedAndSourceCollectionPointers(a(993189).b4_.fromRecordMap(w));
                        await a(975162).lX(n, 100, async e => {
                            w.setModel(e, await g(e))
                        })
                    } else if (p().rie(e)) {
                        let t = {
                            table: d().oo,
                            id: p().NcG(e)
                        };
                        w.setModel(t, await g(t))
                    } else if (p().RaC(e)) {
                        let t = p().FHi(e);
                        if (!t) return;
                        let {
                            groupId: r,
                            spaceId: i
                        } = t, o = {
                            table: a(659341).n,
                            id: (0, a(659341).gK)({
                                spacePermissionGroupId: r,
                                spaceId: i
                            }),
                            spaceId: i
                        };
                        w.setModel(o, await g(o))
                    } else if (p().$ch(e)) {
                        let t = p().KdU(e);
                        w.setModel(t, await g(t))
                    } else if (p().muW(e)) {
                        let t = p().TSJ(e);
                        w.setModel(t, await g(t))
                    }
                }));
                let _ = b ? void 0 : a(993189).b4_.fromRecordMap(w);
                for (let e of p().RQ(m)) {
                    let a = k,
                        m = !1,
                        g = p().uPN(e);
                    if (p().GiG(e) ? g = [...g.filter(e => !p().gir(e)), ...g.filter(e => p().gir(e))] : p().qXl(e) && (g = [...g.filter(e => !p().iGj(e)), ...g.filter(e => p().iGj(e))]), !g.some(e => (0, p().O3D)(e))) {
                        for (let f of g) {
                            var T, x, I;
                            let g;
                            (p().iGj(f) || p().gir(f)) && (m = !0);
                            let b = A[p()._XS(f)];
                            if ((0, r().Xk)(h, b)) {
                                if ("e" === b)
                                    if (p().GiG(e)) g = {
                                        type: "inline",
                                        tagName: b,
                                        attributes: {
                                            equation: p().u$N(e)
                                        },
                                        children: []
                                    };
                                    else {
                                        m = !1;
                                        continue
                                    }
                                else if ("a" === b) {
                                    if (!p().sh$(f)) throw Error("Unexpected annotation for link annotation");
                                    let e = p().cQR(f),
                                        t = (0, i().Tq)(e);
                                    g = (t = v || "web" !== t ? t : void 0) ? {
                                        type: "inline",
                                        tagName: b,
                                        attributes: {
                                            href: e,
                                            type: t,
                                            "external-id": (0, i().V9)(e)
                                        },
                                        children: []
                                    } : {
                                        type: "inline",
                                        tagName: b,
                                        attributes: {
                                            href: e,
                                            type: void 0,
                                            "external-id": void 0
                                        },
                                        children: []
                                    }
                                } else if ("mention-page" === b) {
                                    if (!p().jIt(f)) throw Error("Unexpected annotation for page annotation");
                                    let e = p().v55(f);
                                    if (_) {
                                        let a = _({
                                                table: s().ev,
                                                id: e
                                            }),
                                            r = (null == a ? void 0 : a.DANGEROUSLY_INCORRECT_getCollectionPointer()) ? ? (null == a ? void 0 : a.getFirstCollectionPointerFromViews(_)),
                                            i = a ? r && (null == (T = _(r)) ? void 0 : T.getName()) || (null == a ? void 0 : a.getNonCollectionProperty("title")) : p().x9d((0, o().mA)(t)),
                                            l = [{
                                                type: "text",
                                                value: (0, u().Pm)(p().q4_(i))
                                            }];
                                        if (a && (0, n().Ef)(a.type)) {
                                            if (!r) throw Error("Unable to find collection for mention-database");
                                            g = {
                                                type: "inline",
                                                tagName: "mention-database",
                                                attributes: {
                                                    "database-id": (0, c().z5)(r.id)
                                                },
                                                children: l
                                            }
                                        } else g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "page-id": (0, c().ew)(e)
                                            },
                                            children: l
                                        }
                                    } else {
                                        let t = [{
                                            type: "text",
                                            value: (0, u().Pm)("Page title")
                                        }];
                                        g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "page-id": (0, c().ew)(e)
                                            },
                                            children: t
                                        }
                                    }
                                } else if ("mention-database" === b) {
                                    if (!p().$ch(f)) throw Error("Unexpected annotation for database annotation");
                                    let e = p().KdU(f);
                                    if (_) {
                                        let a = e ? (null == (x = _(e)) ? void 0 : x.getName()) ? ? p().x9d("Unnamed collection") : p().x9d((0, o().mA)(t)),
                                            r = [{
                                                type: "text",
                                                value: (0, u().Pm)(p().q4_(a))
                                            }];
                                        g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "database-id": (0, c().z5)(e.id)
                                            },
                                            children: r
                                        }
                                    } else {
                                        let t = [{
                                            type: "text",
                                            value: (0, u().Pm)("Collection title")
                                        }];
                                        g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "database-id": (0, c().z5)(e.id)
                                            },
                                            children: t
                                        }
                                    }
                                } else if ("mention-data-source" === b) {
                                    if (!p().muW(f)) throw Error("Unexpected annotation for database annotation");
                                    let e = p().TSJ(f);
                                    if (_) {
                                        let a = e ? (null == (I = _(e)) ? void 0 : I.getName()) ? ? p().x9d("Unnamed collection") : p().x9d((0, o().mA)(t)),
                                            r = [{
                                                type: "text",
                                                value: (0, u().Pm)(p().q4_(a))
                                            }];
                                        g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "data-source-id": (0, c().z5)(e.id)
                                            },
                                            children: r
                                        }
                                    } else {
                                        let t = [{
                                            type: "text",
                                            value: (0, u().Pm)("Collection title")
                                        }];
                                        g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "data-source-id": (0, c().z5)(e.id)
                                            },
                                            children: t
                                        }
                                    }
                                } else if ("mention-person" === b) {
                                    if (!p().rie(f)) throw Error("Unexpected annotation for user annotation");
                                    let e = p().NcG(f);
                                    if (_) {
                                        let a = _({
                                            table: d().oo,
                                            id: e
                                        });
                                        g = {
                                            type: "inline",
                                            tagName: b,
                                            attributes: {
                                                "person-id": (0, c().ew)(e),
                                                "person-name": null == a ? void 0 : a.getDisplayName(t)
                                            },
                                            children: []
                                        }
                                    } else g = {
                                        type: "inline",
                                        tagName: b,
                                        attributes: {
                                            "person-id": (0, c().ew)(e),
                                            "person-name": "Person name"
                                        },
                                        children: []
                                    }
                                } else if ("mention-date" === b) {
                                    let e, t;
                                    if (!p().qsB(f)) throw Error("Unexpected annotation for date annotation");
                                    let a = p().K7D(f),
                                        r = (0, l().kW)(a, y);
                                    "date" === r.type ? (e = "mention-date", t = {
                                        date: r.start_date
                                    }) : "datetime" === r.type ? (e = "mention-datetime", t = {
                                        date: r.start_date,
                                        time: r.start_time
                                    }) : "daterange" === r.type ? (e = "mention-date-range", t = {
                                        "start-date": r.start_date,
                                        "end-date": r.end_date
                                    }) : (e = "mention-datetime-range", t = {
                                        "start-date": r.start_date,
                                        "start-time": r.start_time,
                                        "end-date": r.end_date,
                                        "end-time": r.end_time
                                    }), g = {
                                        type: "inline",
                                        tagName: e,
                                        attributes: t,
                                        children: []
                                    }
                                } else if ("h" === b) {
                                    if (!p().YuY(f)) throw Error("Unexpected annotation for highlight annotation");
                                    g = {
                                        type: "inline",
                                        tagName: b,
                                        attributes: {
                                            color: c().P8[p().uIc(f)]
                                        },
                                        children: []
                                    }
                                } else if ("mention-link" === b) {
                                    if (!p().ik2(f)) throw Error("Unexpected annotation for link mention annotation");
                                    let e = p().q1R(f);
                                    g = {
                                        type: "inline",
                                        tagName: b,
                                        attributes: {
                                            title: e.title,
                                            href: e.href,
                                            description: e.description,
                                            icon_url: e.icon_url
                                        },
                                        children: []
                                    }
                                } else g = {
                                    type: "inline",
                                    tagName: b,
                                    attributes: {},
                                    children: []
                                };
                                a.push(g), a = g.children
                            }
                        }
                        if (!m && f) {
                            let t = p().N8A(e);
                            t.length > 0 && a.push({
                                type: "text",
                                value: (0, u().Pm)(t)
                            })
                        }
                    }
                }
                return k
            }

            function g(e) {
                let {
                    tagName: t,
                    blockId: a,
                    schemaId: r,
                    attributes: i
                } = e;
                return (0, c().g5)(t), {
                    type: "block",
                    tagName: t,
                    text: [],
                    attributes: {
                        id: a,
                        ...i
                    },
                    properties: {},
                    schemas: {},
                    children: [],
                    parent: void 0,
                    persisted: !0,
                    schemaId: r
                }
            }

            function b(e) {
                let t = B[e];
                return (0, r().O)(c().sA, t)
            }
            async function y(e) {
                var t, i;
                let o, {
                    pointer: l,
                    loadRecordModel: d,
                    rootPointer: p,
                    parentPointer: u,
                    spaceId: f,
                    intl: v,
                    currentTimeZone: k,
                    viewedBlockIds: w = new Set
                } = e;
                if (w.has(l.id)) return;
                w.add(l.id);
                let N = await d(l);
                if (!N || !b(N.type)) return;
                let I = l.table === p.table && l.id === p.id && l.spaceId === p.spaceId,
                    M = N.getFormatValue("suggestions");
                if (!I && M && M.some(e => "insert" === e.type)) return;
                let C = l,
                    E = (0, c().ew)((null == u ? void 0 : u.id) ? ? p.id),
                    S = (0, n().Af)(N.type, N.getFormat());
                if (N.isType(n().xd.page) || N.isType(n().xd.collectionViewPage) && S) {
                    let e = null == (t = await (0, a(975908).wC)({
                            block: N,
                            loadRecordModel: d
                        })) ? void 0 : t.id,
                        r = e ? (0, c().z5)(e) : void 0,
                        i = N.getFormatValue("page_font"),
                        l = N.getFormatValue("page_small_text") ? "small" : void 0,
                        s = N.getFormatValue("page_full_width") ? "full-width" : void 0;
                    if (I) {
                        let e, t = await (0, a(975908).wC)({
                            block: N,
                            loadRecordModel: d
                        });
                        e = t && t.parent_table !== a(46241).V ? (0, c().ew)(t.parent_id) : (0, c().ew)(N.id), o = g({
                            tagName: N.isType(n().xd.collectionViewPage) && S ? "page" : B[N.type],
                            blockId: (0, c().ew)(N.id),
                            attributes: { ...i && "comic" !== i ? {
                                    "page-font": i
                                } : {},
                                ...l ? {
                                    "page-font-size": l
                                } : {},
                                ...s ? {
                                    "page-width": s
                                } : {},
                                ...r ? {
                                    "database-id": r
                                } : {}
                            },
                            schemaId: e
                        })
                    } else o = g({
                        tagName: "child-page",
                        blockId: (0, c().ew)(`${N.id}/${(null==u?void 0:u.id)||p.id}`),
                        attributes: {
                            "page-id": (0, c().ew)(N.id),
                            "database-id": r,
                            "has-content": N.getContentLength() > 0 ? "true" : "false"
                        },
                        schemaId: E
                    });
                    await T({
                        node: o,
                        block: N,
                        loadRecordModel: d,
                        intl: v,
                        currentTimeZone: k
                    }), !I && r && await x({
                        node: o,
                        loadRecordModel: d,
                        intl: v,
                        currentTimeZone: k,
                        block: N,
                        maxBlocksToLoad: 50,
                        viewedBlockIds: w
                    })
                } else if (N.type === n().xd.collectionView || N.isType(n().xd.collectionViewPage) && !S) o = g({
                    tagName: "database-views",
                    blockId: (0, c().ew)(N.id),
                    schemaId: (0, c().ew)(N.id),
                    attributes: {}
                }), await T({
                    block: N,
                    node: o,
                    loadRecordModel: d,
                    intl: v,
                    currentTimeZone: k
                });
                else if (N.type === n().xd.alias) {
                    let e = N.getFormatValue("alias_pointer");
                    if (!e || e.table !== s().ev) return;
                    let t = await d(e);
                    if (!t) return;
                    if (t.type === n().xd.collectionView || t.type === n().xd.collectionViewPage) o = g({
                        tagName: "link-database",
                        blockId: (0, c().ew)(N.id),
                        schemaId: E,
                        attributes: {
                            "database-id": (0, c().z5)(t.id)
                        }
                    });
                    else {
                        let e = null == (i = await (0, a(975908).wC)({
                            block: N,
                            loadRecordModel: d
                        })) ? void 0 : i.getParentId();
                        o = g({
                            tagName: "link-page",
                            blockId: (0, c().ew)(N.id),
                            schemaId: E,
                            attributes: {
                                "page-id": (0, c().ew)(t.id),
                                ...e ? {
                                    "database-id": (0, c().z5)(e)
                                } : {}
                            }
                        })
                    }
                    await T({
                        node: o,
                        block: t,
                        loadRecordModel: d,
                        intl: v,
                        currentTimeZone: k
                    })
                } else if (N.type === n().xd.table) {
                    let e = N.getFormatValue("table_block_row_header"),
                        t = N.getFormatValue("table_block_column_header");
                    o = g({
                        tagName: B[N.type],
                        blockId: (0, c().ew)(N.id),
                        schemaId: E,
                        attributes: { ...e ? {
                                "header-row": "true"
                            } : {},
                            ...t ? {
                                "header-column": "true"
                            } : {}
                        }
                    })
                } else if (N.type === n().xd.tableRow) {
                    if (N.parent_table !== s().ev) return;
                    let e = await d({
                        table: N.parent_table,
                        id: N.parent_id,
                        spaceId: N.space_id
                    });
                    if (!e || e.type !== n().xd.table) return;
                    o = g({
                        tagName: B[N.type],
                        blockId: (0, c().ew)(N.id),
                        schemaId: E,
                        attributes: {}
                    });
                    let t = a(993189).b4_.constant(void 0),
                        r = e.getFormatValue("table_block_column_order") || [];
                    for (let e of r) {
                        let a = (r.indexOf(e) + 1).toString(),
                            i = {
                                type: "property",
                                tagName: "property-text",
                                attributes: {
                                    name: a
                                },
                                children: await h({
                                    textValue: N.getProperty(e, t),
                                    allowsText: c().GU["property-text"].text,
                                    allowedTagNames: c().GU["property-text"].inline,
                                    loadRecordModel: d,
                                    intl: v,
                                    currentTimeZone: k
                                })
                            };
                        o.properties[a] = i
                    }
                } else if (N.isType(n().xd.transclusionReference)) {
                    let e = N.getTransclusionReferenceTargetPointer();
                    if (!e) return;
                    o = g({
                        tagName: B[N.type],
                        blockId: (0, c().ew)(N.id),
                        schemaId: E,
                        attributes: {
                            "synced-block-id": (0, c().ew)(e.id)
                        }
                    }), C = e
                } else if (N.getFormatValue("toggleable") && (N.isType(n().xd.header) || N.isType(n().xd.subHeader) || N.isType(n().xd.subSubHeader) || N.isType(n().xd.header4))) {
                    let e = P[N.type];
                    o = g({
                        tagName: "toggle",
                        blockId: (0, c().ew)(N.id),
                        schemaId: E,
                        attributes: {
                            size: e
                        }
                    }), await T({
                        block: N,
                        node: o,
                        loadRecordModel: d,
                        intl: v,
                        currentTimeZone: k
                    })
                } else if (N.isType(n().xd.code)) {
                    let e = N.getLanguage().name,
                        t = a(656974).$K[e];
                    o = g({
                        tagName: "code-block",
                        blockId: (0, c().ew)(N.id),
                        schemaId: E,
                        attributes: {
                            language: t
                        }
                    }), await T({
                        block: N,
                        node: o,
                        loadRecordModel: d,
                        intl: v,
                        currentTimeZone: k
                    })
                } else o = "unknown-block" === B[N.type] ? g({
                    tagName: "unknown-block",
                    blockId: (0, c().ew)(N.id),
                    schemaId: E,
                    attributes: {
                        type: N.type
                    }
                }) : g({
                    tagName: B[N.type],
                    blockId: (0, c().ew)(N.id),
                    schemaId: E,
                    attributes: {}
                }), await T({
                    block: N,
                    node: o,
                    loadRecordModel: d,
                    intl: v,
                    currentTimeZone: k
                });
                if ((0, r().Xk)(c().sW, o.tagName)) {
                    let e = N.getFormatValue("block_color");
                    e && (o.attributes.color = c().P8[e])
                }
                if (N.isType(n().xd.collectionViewPage) && !S || N.isType(n().xd.collectionView)) {
                    let e = N.getCollectionViewIds(),
                        t = (await a(975162).lX(e, 500, async e => await _({
                            pointer: {
                                table: a(435544).G,
                                id: e
                            },
                            loadRecordModel: d,
                            rootPointer: p,
                            intl: v,
                            parentPointer: {
                                table: s().ev,
                                id: o.attributes.id
                            }
                        }))).filter(r().O9);
                    o.children.push(...t)
                } else if (I || !(0, n().$I)(N.type)) {
                    let e;
                    if (N.isType(n().xd.transclusionReference)) {
                        e = [];
                        let t = N.getTransclusionReferenceTargetPointer();
                        if (t) {
                            let a = await d(t);
                            a && (e = a.getRenderableContentIds())
                        }
                    } else e = N.getRenderableContentIds();
                    let t = (await m({
                        items: e,
                        concurrencyLimit: 25,
                        timeoutMs: 3e3,
                        processor: async e => y({
                            pointer: {
                                table: "block",
                                id: e
                            },
                            loadRecordModel: d,
                            rootPointer: p,
                            parentPointer: C,
                            spaceId: f,
                            intl: v,
                            currentTimeZone: k,
                            viewedBlockIds: w
                        })
                    })).filter(r().O9);
                    o.children.push(...t), t.forEach(e => {
                        e.parent = o
                    })
                }
                return o
            }
            async function v(e) {
                let {
                    loadRecordModel: t,
                    collectionPointer: r,
                    intl: i,
                    currentTimeZone: o
                } = e, n = await t(r);
                if (!n) throw new(a(932082)).S2(r.id, "Failed to build XML Node. No available collection model");
                let s = n.getParentPointer();
                if (s.table === a(46241).V) throw new(a(932082)).S2(r.id, "Unsupported operation for table");
                let d = await t(s);
                if (!d) throw new(a(932082)).QT(r.id, "Failed to build XML node: missing block");
                if (!b(d.type)) throw new(a(932082)).S2(r.id, `Failed to build XML node: unsupported block type ${d.type}`);
                let p = a(412951).RecordMapWithRole.create(),
                    u = a(993189).b4_.fromRecordMapWithRole(p),
                    m = {
                        type: "collection",
                        tagName: "database",
                        parent: (0, c().ew)(s.id),
                        attributes: {
                            id: (0, c().z5)(r.id),
                            title: n.getRenderTitle({
                                getRecordModel: u,
                                userTimeZone: (0, l().dB)(),
                                intl: i
                            }) ? ? ""
                        },
                        persisted: !0,
                        schemaId: (0, c().ew)(d.id),
                        schemas: {},
                        properties: {}
                    },
                    f = n.getDescription();
                if (f) {
                    let e = {
                        type: "property",
                        tagName: "property-text",
                        attributes: {
                            name: "Description"
                        },
                        children: await h({
                            textValue: f,
                            allowsText: !0,
                            allowedTagNames: Object.keys(c()._S),
                            loadRecordModel: t,
                            intl: i,
                            currentTimeZone: o
                        })
                    };
                    m.properties.description = e
                }
                return await w({
                    collectionPointedTo: n,
                    node: m,
                    loadRecordModel: t
                }), m
            }

            function k(e, t) {
                let r = e.getNormalizedSchema(t),
                    i = ["title", ...((0, a(944940).L)(e.getFormat() || {}, r, void 0, a(565546).jf.Page).collection_page_properties || []).map(({
                        property: e
                    }) => e)];
                return Object.entries(r).sort(([e], [t]) => i.indexOf(e) - i.indexOf(t))
            }
            async function w({
                collectionPointedTo: e,
                node: t,
                loadRecordModel: i
            }) {
                let o = await i(e.getAdditionalPropertyPointers()),
                    n = a(993189).b4_.fromRecordMap(o);
                await Promise.all(k(e, n).map(async ([e, o]) => {
                    if (!(0, a(698596).Ut)(e) || !o) return;
                    let n = `schema-${E[o.type]}`;
                    if ((0, r().O)(c().U4, n)) switch (n) {
                        case "schema-property-title":
                        case "schema-property-text":
                        case "schema-property-url":
                        case "schema-property-email":
                        case "schema-property-phone-number":
                        case "schema-property-checkbox":
                        case "schema-property-created-time":
                        case "schema-property-created-by":
                        case "schema-property-last-edited-by":
                        case "schema-property-last-edited-time":
                            {
                                let e = {
                                    type: "schema",
                                    tagName: n,
                                    attributes: {
                                        name: o.name,
                                        description: o.description
                                    },
                                    children: []
                                };t.schemas[o.name] = e;
                                break
                            }
                        case "schema-property-date":
                            {
                                let e = {
                                    type: "schema",
                                    tagName: n,
                                    attributes: {
                                        name: o.name,
                                        description: o.description
                                    },
                                    children: []
                                };t.schemas[o.name] = e;
                                break
                            }
                        case "schema-property-number":
                            {
                                if ("number" !== o.type) throw Error(`Unexpected property schema type ${o.type}`);
                                let e = {
                                    type: "schema",
                                    tagName: n,
                                    attributes: {
                                        name: o.name,
                                        description: o.description,
                                        format: o.number_format || "number"
                                    },
                                    children: []
                                };t.schemas[o.name] = e;
                                break
                            }
                        case "schema-property-person":
                            {
                                if ("person" !== o.type) throw Error(`Unexpected property schema type ${o.type}`);
                                let e = 1 === o.limit ? "1" : "Infinity",
                                    a = {
                                        type: "schema",
                                        tagName: n,
                                        attributes: {
                                            name: o.name,
                                            description: o.description,
                                            limit: e
                                        },
                                        children: []
                                    };t.schemas[o.name] = a;
                                break
                            }
                        case "schema-property-multi-select":
                        case "schema-property-select":
                            {
                                if ("select" !== o.type && "multi_select" !== o.type) throw Error(`Unexpected property schema type ${o.type}`);
                                let e = {
                                    type: "schema",
                                    tagName: n,
                                    attributes: {
                                        name: o.name,
                                        description: o.description
                                    },
                                    children: (o.options || []).map(e => ({
                                        type: "inline",
                                        tagName: "schema-option",
                                        attributes: {
                                            option: e.value
                                        },
                                        children: []
                                    }))
                                };t.schemas[o.name] = e;
                                break
                            }
                        case "schema-property-relation":
                            {
                                var l;
                                if ("relation" !== o.type) throw Error(`Unexpected property schema type ${o.type}`);
                                let e = 1 === o.limit ? "1" : "Infinity",
                                    s = (0, a(114588).z)(o),
                                    d = s ? (0, c().z5)(s) : void 0;
                                if (!d) throw Error("Cannot link to relation without table pointer");
                                if (o.connectedRelation) break;
                                let p = await i({
                                    id: d,
                                    table: a(46241).V
                                });
                                if (!p) break;
                                let u = p.getNormalizedSchema(a(993189).b4_.fromRecordMap(await i(p.getAdditionalPropertyPointers()))),
                                    m = o.property && (0, r().O)(u, o.property) ? (null == (l = u[o.property]) ? void 0 : l.name) ? ? void 0 : void 0,
                                    f = {
                                        type: "schema",
                                        tagName: n,
                                        attributes: {
                                            name: o.name,
                                            description: o.description,
                                            limit: e,
                                            "database-id": d,
                                            "synced-property-name": m
                                        },
                                        children: []
                                    };t.schemas[o.name] = f;
                                break
                            }
                        case "schema-property-status":
                            {
                                if ("status" !== o.type) throw Error(`Unexpected property schema type ${o.type}`);
                                let e = {
                                    type: "schema",
                                    tagName: n,
                                    attributes: {
                                        name: o.name,
                                        description: o.description
                                    },
                                    children: (o.groups || []).map(e => ({
                                        type: "inline",
                                        tagName: "schema-option-category",
                                        attributes: {
                                            category: e.name
                                        },
                                        children: (e.optionIds || []).flatMap(e => {
                                            var t;
                                            let a = null == (t = o.options) ? void 0 : t.find(t => t.id === e);
                                            return a ? {
                                                type: "inline",
                                                tagName: "schema-option",
                                                attributes: {
                                                    option: a.value
                                                },
                                                children: []
                                            } : []
                                        })
                                    }))
                                };t.schemas[o.name] = e;
                                break
                            }
                        default:
                            (0, r().HB)(n)
                    }
                }))
            }
            async function N({
                propertySchemaByIdEntries: e,
                block: t,
                node: i,
                intl: o,
                collectionPointedTo: n,
                loadRecordModel: l,
                currentTimeZone: s,
                getRecordModel: d
            }) {
                let p = new Map;
                for (let [u, m] of (await (0, a(975162).lX)(e, 25, async ([e, i]) => {
                        if (!(0, a(698596).Ut)(e) || !i) return;
                        let u = E[i.type];
                        if (!(0, r().O)(c().GU, u)) return;
                        let m = "title" === e && (null == n ? void 0 : n.getName()) || t.getProperty(e, d);
                        switch (u) {
                            case "property-title":
                                {
                                    let t = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: await h({
                                            textValue: m,
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, t);
                                    break
                                }
                            case "property-text":
                                {
                                    let t = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: await h({
                                            textValue: m,
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, t);
                                    break
                                }
                            case "property-url":
                                {
                                    let t = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: await h({
                                            textValue: a(561872).jw(a(561872).MO(m)),
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, t);
                                    break
                                }
                            case "property-email":
                            case "property-phone-number":
                                {
                                    let t = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: await h({
                                            textValue: m,
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, t);
                                    break
                                }
                            case "property-person":
                                {
                                    let r = a(993189).Bj6.fromBlock(t),
                                        n = {
                                            type: "property",
                                            tagName: u,
                                            attributes: {
                                                name: i.name
                                            },
                                            children: await h({
                                                textValue: (0, a(383431).h)((0, a(465256).e)({
                                                    textValue: m,
                                                    propertySchema: i,
                                                    blockCreatorPointer: r.getCreatedByPointer()
                                                })),
                                                allowsText: c().GU[u].text,
                                                allowedTagNames: c().GU[u].inline,
                                                loadRecordModel: l,
                                                intl: o,
                                                currentTimeZone: s
                                            })
                                        };p.set(e, n);
                                    break
                                }
                            case "property-created-by":
                            case "property-last-edited-by":
                                {
                                    let r;r = "property-created-by" === u ? t.getCreatedByPointer() : t.getLastEditedByPointer();
                                    let n = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: await h({
                                            textValue: (0, a(383431).h)(r ? [r] : []),
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, n);
                                    break
                                }
                            case "property-relation":
                                {
                                    if ("relation" !== i.type) throw Error("Invalid type for property-relation");
                                    let t = (0, a(114588).z)(i);
                                    if (!t) throw Error("Invalid database id for property-relation");
                                    let r = await l({
                                        table: a(46241).V,
                                        id: t
                                    });
                                    if (!r || i.connectedRelation) break;
                                    let n = (0, c().z5)(r.id),
                                        d = (await a(561872).jB({
                                            collectionId: r.id,
                                            relationValue: (0, a(561872).n)(m),
                                            loadRecordModel: l,
                                            relationLimit: i.limit ? ? 10
                                        })).map(e => e.pointer),
                                        f = {
                                            type: "property",
                                            tagName: u,
                                            attributes: {
                                                name: i.name,
                                                "database-id": n
                                            },
                                            children: await h({
                                                textValue: (0, a(561872).Ap)(d),
                                                allowsText: c().GU[u].text,
                                                allowedTagNames: c().GU[u].inline,
                                                loadRecordModel: l,
                                                intl: o,
                                                currentTimeZone: s
                                            })
                                        };p.set(e, f);
                                    break
                                }
                            case "property-date":
                                {
                                    let t = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: await h({
                                            textValue: m,
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, t);
                                    break
                                }
                            case "property-created-time":
                            case "property-last-edited-time":
                                {
                                    let r = a(906745).DateTime.fromMillis(t[S[u]]),
                                        n = {
                                            type: "property",
                                            tagName: u,
                                            attributes: {
                                                name: i.name
                                            },
                                            children: await h({
                                                textValue: a(561872).m5({
                                                    type: "datetime",
                                                    start_date: r.toISODate(),
                                                    start_time: r.toFormat("HH:mm"),
                                                    time_zone: r.zone.name
                                                }),
                                                allowsText: c().GU[u].text,
                                                allowedTagNames: c().GU[u].inline,
                                                loadRecordModel: l,
                                                intl: o,
                                                currentTimeZone: s
                                            })
                                        };p.set(e, n);
                                    break
                                }
                            case "property-checkbox":
                                {
                                    let t = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name,
                                            checked: (0, a(896216).w)(m) ? "true" : "false"
                                        },
                                        children: await h({
                                            textValue: m,
                                            allowsText: c().GU[u].text,
                                            allowedTagNames: c().GU[u].inline,
                                            loadRecordModel: l,
                                            intl: o,
                                            currentTimeZone: s
                                        })
                                    };p.set(e, t);
                                    break
                                }
                            case "property-select":
                            case "property-multi-select":
                            case "property-status":
                                {
                                    let t;
                                    if ("select" === i.type) {
                                        let e = a(561872).L3(m, i.options || []);
                                        t = void 0 !== e ? [e] : []
                                    } else if ("multi_select" === i.type) t = a(561872).o2(m, i.options || []);
                                    else if ("status" === i.type) {
                                        let e = a(561872).RZ(m, i);
                                        t = void 0 !== e ? [e] : []
                                    } else throw Error("Unexpected property schema type");
                                    let r = {
                                        type: "property",
                                        tagName: u,
                                        attributes: {
                                            name: i.name
                                        },
                                        children: t.map(e => ({
                                            type: "inline",
                                            tagName: "option",
                                            attributes: {
                                                option: e
                                            },
                                            children: []
                                        }))
                                    };p.set(e, r);
                                    break
                                }
                            case "property-number":
                                {
                                    if ("number" !== i.type) throw Error("Unexpected property schema type");
                                    let t = a(700369).ZV(a(588688).M(m), i.number_format, o),
                                        r = {
                                            type: "property",
                                            tagName: u,
                                            attributes: {
                                                name: i.name,
                                                number: t
                                            },
                                            children: await h({
                                                textValue: m,
                                                allowsText: c().GU[u].text,
                                                allowedTagNames: c().GU[u].inline,
                                                loadRecordModel: l,
                                                intl: o,
                                                currentTimeZone: s
                                            })
                                        };p.set(e, r);
                                    break
                                }
                            default:
                                (0, r().HB)(u)
                        }
                    }), e)) {
                    if (!m) continue;
                    let e = p.get(u);
                    e && (i.properties[m.name] = e)
                }
            }
            async function _(e) {
                let {
                    pointer: t,
                    parentPointer: a,
                    loadRecordModel: r
                } = e, i = await r(t);
                if (!i) return;
                let o = await r(a);
                if (!o) return;
                let n = i.DANGEROUSLY_INCORRECT_getCollectionPointerWithBlockFallback(o);
                if (!n) return;
                let l = await r(n);
                if (!l) return;
                let s = (0, p().k4p)(l.getName()),
                    d = i.getName();
                return {
                    type: "collectionView",
                    tagName: "database-view",
                    parent: (0, c().ew)(a.id),
                    attributes: {
                        id: (0, c().wn)(t.id),
                        title: d ? ? "",
                        "database-id": (0, c().z5)(l.id),
                        "database-name": s
                    },
                    persisted: !0,
                    schemaId: (0, c().ew)(a.id)
                }
            }
            async function T(e) {
                let {
                    block: t,
                    node: i,
                    loadRecordModel: o,
                    intl: l,
                    currentTimeZone: s
                } = e, d = t.DANGEROUSLY_INCORRECT_getCollectionPointer(), u = d && await o(d);
                u && "database-views" !== i.tagName && await w({
                    collectionPointedTo: u,
                    node: i,
                    loadRecordModel: o
                });
                let m = await (0, a(975908).wC)({
                        block: t,
                        loadRecordModel: o
                    }),
                    f = m ? a(993189).b4_.fromRecordMap(await o([...m.getAdditionalPropertyPointers(), ...t.getAdditionalPropertyPointers()])) : a(993189).b4_.constant(void 0),
                    g = m ? k(m, f) : (0, n().$I)(t.type) ? (0, r().WP)({
                        title: (0, a(511791).RX)(l).title
                    }) : void 0;
                if (g) await N({
                    propertySchemaByIdEntries: g,
                    block: t,
                    node: i,
                    intl: l,
                    loadRecordModel: o,
                    collectionPointedTo: u,
                    currentTimeZone: s,
                    getRecordModel: f
                });
                else
                    for (let e of a(511791).vn) {
                        let n = t.getNonCollectionProperty(e);
                        if (n)
                            if ("title" === e) i.text.push(...await h({
                                textValue: n,
                                allowsText: !0,
                                allowedTagNames: (0, r().objectKeys)(c()._S),
                                loadRecordModel: o,
                                intl: l,
                                currentTimeZone: s
                            }));
                            else {
                                let t = function(e, t) {
                                    if ("checked" === e) return p().q4_(t) === a(745680).I1 ? "true" : "false"
                                }(e, n);
                                t && (i.attributes[e] = t)
                            }
                    }
            }
            async function x(e) {
                let {
                    node: t,
                    loadRecordModel: a,
                    intl: r,
                    currentTimeZone: i,
                    block: o,
                    maxBlocksToLoad: n = 50,
                    viewedBlockIds: l = new Set
                } = e, s = o.getContentPointers(), d = [];
                for (let e of s) {
                    let t = await y({
                        pointer: e,
                        rootPointer: o.pointer,
                        parentPointer: o.pointer,
                        spaceId: o.getSpaceId(),
                        loadRecordModel: a,
                        intl: r,
                        currentTimeZone: i,
                        viewedBlockIds: l
                    });
                    if (t && (d.push(t), d.length >= n)) break
                }
                t.children.push(...d.slice(0, n))
            }
            let I = Symbol("CitationToStrip"),
                B = {
                    text: "text",
                    page: "page",
                    factory_task: "unknown-block",
                    bulleted_list: "uli",
                    numbered_list: "oli",
                    toggle: "toggle",
                    quote: "quote",
                    factory: "factory",
                    button: "button",
                    to_do: "todo",
                    column_list: "columns",
                    column: "column",
                    embed: "unknown-block",
                    framer: "unknown-block",
                    tweet: "unknown-block",
                    gist: "unknown-block",
                    drive: "unknown-block",
                    figma: "unknown-block",
                    loom: "unknown-block",
                    typeform: "unknown-block",
                    codepen: "unknown-block",
                    audio: "unknown-block",
                    maps: "unknown-block",
                    invision: "unknown-block",
                    image: "unknown-block",
                    pdf: "unknown-block",
                    video: "unknown-block",
                    file: "unknown-block",
                    bookmark: "unknown-block",
                    temporary_ui: "unknown-block",
                    equation: "math-block",
                    code: "code-block",
                    header: "h1",
                    sub_header: "h2",
                    sub_sub_header: "h3",
                    header_4: "h4",
                    collection_view: "database-views",
                    collection_view_page: "database-views",
                    breadcrumb: "breadcrumb",
                    copy_indicator: "unknown-block",
                    link_to_page: "link_to_page",
                    link_to_collection: "link_to_collection",
                    alias: "link-page",
                    transclusion_container: "synced-block",
                    transclusion_reference: "synced-block-reference",
                    divider: "hr",
                    callout: "callout",
                    table_of_contents: "tableofcontents",
                    whimsical: "unknown-block",
                    miro: "unknown-block",
                    abstract: "unknown-block",
                    sketch: "unknown-block",
                    excalidraw: "unknown-block",
                    replit: "unknown-block",
                    hex: "unknown-block",
                    deepnote: "unknown-block",
                    mixpanel: "unknown-block",
                    post: "unknown-block",
                    external_object_instance: "unknown-block",
                    workflow: "unknown-block",
                    transcription: "transcript",
                    custom: "unknown-block",
                    external_object_instance_page: "unknown-block",
                    table: "table",
                    table_row: "tr",
                    tab: "tab",
                    ai_block: "ai-block",
                    drawing: "drawing",
                    slide: "slide",
                    mail: "mail-block",
                    personal_home_page: "page",
                    home_shortcuts: "page",
                    form: "page",
                    edit_reference: "page"
                },
                M = { ...(0, r().MU)((0, r().WP)(B).map(([e, t]) => [t, e])),
                    "child-page": "page",
                    "child-database": "page",
                    "link-page": "alias",
                    "link-database": "alias",
                    page: "page"
                },
                P = {
                    [n().xd.header]: "h1",
                    [n().xd.subHeader]: "h2",
                    [n().xd.subSubHeader]: "h3",
                    [n().xd.header4]: "h4"
                },
                C = (0, a(627179).AH)(P),
                E = {
                    title: "property-title",
                    text: "property-text",
                    url: "property-url",
                    email: "property-email",
                    phone_number: "property-phone-number",
                    checkbox: "property-checkbox",
                    person: "property-person",
                    created_by: "property-created-by",
                    last_edited_by: "property-last-edited-by",
                    file: "property-file",
                    select: "property-select",
                    multi_select: "property-multi-select",
                    status: "property-status",
                    number: "property-number",
                    date: "property-date",
                    created_time: "property-created-time",
                    last_edited_time: "property-last-edited-time",
                    last_visited_time: "property-last-visited-time",
                    formula: "property-formula",
                    rollup: "property-rollup",
                    button: "property-button",
                    auto_increment_id: "property-id",
                    location: "property-location",
                    verification: "property-verification",
                    place: "property-geo-point",
                    relation: "property-relation"
                },
                S = a(381453).B8(E),
                A = {
                    b: "b",
                    i: "i",
                    s: "s",
                    c: "code",
                    "~": "~",
                    _: "u",
                    "+": "+",
                    "-": "-",
                    z: "z",
                    u: "mention-person",
                    r: "r",
                    p: "mention-page",
                    ds: "mention-data-source",
                    dst: "dst",
                    ce: "ce",
                    pt: "pt",
                    d: "mention-date",
                    eoi: "eoi",
                    tv: "tv",
                    cm: "cm",
                    m: "m",
                    a: "a",
                    h: "h",
                    e: "e",
                    et: "et",
                    xt: "xt",
                    st: "st",
                    fpp: "fpp",
                    fv: "fv",
                    pv: "pv",
                    g: "group",
                    t: "team",
                    mark: "find-highlight",
                    smark: "selected-find-highlight",
                    ci: "ci",
                    cit: "cit",
                    tc: "tc",
                    si: "si",
                    sr: "sr",
                    sa: "sa",
                    sua: "sua",
                    mabf: "mabf",
                    dut: "dut",
                    ht: "ht",
                    lm: "mention-link",
                    aic: "mention-database",
                    tch: "tch",
                    plc: "plc",
                    sm: "mention-slack",
                    usc: "usc",
                    sf: "sf",
                    sfct: "sfct",
                    sflet: "sflet",
                    to: "to",
                    so: "so",
                    dm: "dm"
                },
                O = {
                    u: ({
                        node: e
                    }) => {
                        if (!e.attributes["person-id"]) throw Error(`Missing attribute person-id for inline element ${e.tagName}`);
                        return ["u", e.attributes["person-id"]]
                    },
                    p: ({
                        node: e,
                        getRecordModel: t
                    }) => {
                        if ("mention-page" === e.tagName) {
                            if (!e.attributes["page-id"]) throw Error(`Missing attribute page-id for inline element ${e.tagName}`);
                            return ["p", e.attributes["page-id"]]
                        }
                        if ("mention-database" === e.tagName) {
                            if (!e.attributes["database-id"]) throw Error(`Missing attribute database-id for inline element ${e.tagName}`);
                            let r = t({
                                    id: e.attributes["database-id"],
                                    table: a(46241).V
                                }),
                                i = null == r ? void 0 : r.getParentPointer();
                            if ((null == i ? void 0 : i.table) === s().ev) return ["p", i.id]
                        } else(0, r().HB)(e)
                    },
                    d: ({
                        node: e
                    }) => "mention-date-range" === e.tagName ? ["d", {
                        start_date: e.attributes["start-date"],
                        end_date: e.attributes["end-date"],
                        type: "daterange"
                    }] : "mention-date" === e.tagName ? ["d", {
                        start_date: e.attributes.date,
                        type: "date"
                    }] : "mention-datetime" === e.tagName ? ["d", {
                        start_date: e.attributes.date,
                        start_time: e.attributes.time,
                        time_zone: (0, a(714350).P)(),
                        type: "datetime"
                    }] : "mention-datetime-range" === e.tagName ? ["d", {
                        start_date: e.attributes["start-date"],
                        start_time: e.attributes["start-time"],
                        end_date: e.attributes["end-date"],
                        end_time: e.attributes["end-time"],
                        time_zone: (0, a(714350).P)(),
                        type: "datetimerange"
                    }] : void(0, r().HB)(e),
                    a: ({
                        node: e
                    }) => {
                        if (!e.attributes.href) throw Error(`Missing attribute href for inline element ${e.tagName}`);
                        return ["a", e.attributes.href]
                    },
                    h: ({
                        node: e
                    }) => {
                        if (!e.attributes.color) throw Error(`Missing color attribute for inline element ${e.tagName}`);
                        if (!c().Bt.includes(e.attributes.color)) throw Error(`Bad color attribute for inline element: ${e.attributes.color}`);
                        return ["h", c().BP[e.attributes.color]]
                    },
                    lm: ({
                        node: e
                    }) => {
                        if (!e.attributes.href) throw Error(`Missing attribute href for inline element ${e.tagName}`);
                        return ["lm", {
                            href: e.attributes.href,
                            title: e.attributes.title,
                            description: e.attributes.description,
                            icon_url: e.attributes.icon_url
                        }]
                    },
                    e: ({
                        node: e
                    }) => {
                        if (!e.attributes.equation) throw Error(`Missing attribute equation for inline element ${e.tagName}`);
                        return ["e", e.attributes.equation]
                    }
                },
                R = {
                    [p().Ifu.Bold]: !0,
                    [p().Ifu.Italic]: !0,
                    [p().Ifu.Strike]: !0,
                    [p().Ifu.Code]: !0,
                    [p().Ifu.FormulaError]: !0,
                    [p().Ifu.Underline]: !0,
                    [p().Ifu.Inserted]: !0,
                    [p().Ifu.Deleted]: !0,
                    [p().Ifu.TemporaryComment]: !0,
                    [p().Ifu.TemporaryCursor]: !0,
                    [p().Ifu.TemporaryPage]: !0,
                    [p().Ifu.TemporaryCitation]: !0,
                    [p().Ifu.TemporaryCollection]: !0,
                    [p().Ifu.TemporaryEquation]: !0,
                    [p().Ifu.TemporarySelection]: !0,
                    [p().Ifu.TemporaryFindHighlight]: !0,
                    [p().Ifu.TemporarySelectedFindHighlight]: !0,
                    [p().Ifu.TemporaryCommentHighlight]: !0,
                    [p().Ifu.TitleOnly]: !0
                },
                U = (0, a(627179).AH)(A);
            async function q(e) {
                return {
                    type: "instructions",
                    tagName: "instructions",
                    attributes: {},
                    children: e.shouldUsePlaceholderRecordInformation ? await h({
                        textValue: e.textValue,
                        allowsText: !0,
                        allowedTagNames: c().qI,
                        intl: e.intl,
                        shouldUsePlaceholderRecordInformation: !0,
                        currentTimeZone: e.currentTimeZone
                    }) : await h({
                        textValue: e.textValue,
                        allowsText: !0,
                        allowedTagNames: c().qI,
                        loadRecordModel: e.loadRecordModel,
                        intl: e.intl,
                        currentTimeZone: e.currentTimeZone
                    })
                }
            }

            function F(e) {
                let {
                    inlineNodes: t,
                    idMapper: r,
                    humanChatTag: i
                } = e, o = function(e) {
                    let {
                        inlineNodes: t,
                        idMapper: r
                    } = e, i = t.map(e => r.mapNodeKeyToCounter(e)).map(e => (0, a(710559).sD)({
                        node: e,
                        selection: void 0,
                        namespace: "end_to_end"
                    })).join("");
                    return `<text>${i}</text>`
                }({
                    inlineNodes: t,
                    idMapper: r
                });
                return `<${i}>${o}</${i}>`
            }

            function D(e) {
                return (function(e) {
                    let {
                        chatValue: t,
                        evaluatorState: r
                    } = e, i = r.getIdMapper(), o = (0, a(945117).gO)(r.parse(t), a(988184).p$), n = (0, a(860936).$d)((0, a(872654).dl)({
                        allocateIdFn: () => (0, c().ew)(a(92513).Dt()),
                        mapCounterToKey: e => i.mapCounterToKey(e)
                    }), o);
                    return a(300441).Q.isSuccess(n) ? n.value.children : []
                })({
                    chatValue: e.humanChatValue,
                    evaluatorState: e.evaluatorState
                }).flatMap(e => {
                    if ("text" in e) return e.text
                }).filter(r().O9)
            }
        },
        539709: (e, t, a) => {
            a.d(t, {
                f: () => r
            });

            function r() {
                return a(475097).default.state.open ? a(475097).default.state.targetStore : a(728372).AppStoreMainEditorCurrentBlockStore.state ? ? (0, a(328765).S)()
            }
        },
        547517: (e, t, a) => {
            a.d(t, {
                O: () => o
            });
            var r = () => a(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        currentState: "default",
                        lastStepLoadingCompletionUnixEpochMs: -1 / 0,
                        aiWindowLastSeenUnixEpochMs: -1 / 0
                    }
                }
                setAssistantLastViewedTime() {
                    this.setState({ ...this.state,
                        aiWindowLastSeenUnixEpochMs: Date.now()
                    })
                }
            }
            let o = new i;
            (0, a(202146).exposeDebugValue)("AssistantOriginElementStore", o)
        },
        557032: (e, t, a) => {
            a.d(t, {
                YL: () => i,
                qO: () => r
            });
            let r = 10,
                i = 10
        },
        600327: (e, t, a) => {
            a.d(t, {
                c: () => o
            }), a(16280);
            var r = a(296540),
                i = a(474848);

            function o(e) {
                let {
                    clientStep: t,
                    disablePointerEvents: o
                } = e, n = (0, a(533992).v3)(), {
                    value: l
                } = (0, a(815048).fJ)(a(94386).g), {
                    value: s
                } = (0, a(815048).fJ)(a(235645).R.clipboardActions), d = (0, r.useMemo)(() => l && s ? a(363256).e.withListenerIgnored(() => (function(e) {
                    var t;
                    let {
                        environment: r,
                        clientStep: i,
                        clipboardActions: o,
                        markdownLinkifyIt: n
                    } = e, l = new(a(870941)).A({
                        name: "AssistantChatMessageListRenderer"
                    }), s = null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id;
                    return (0, a(377796).createAndCommit)({
                        userAction: "AssistantChatMessageRenderer.temporaryListStoreForClientChatTextStep",
                        environment: r,
                        cellTarget: s ? {
                            spaceWithId: s
                        } : void 0,
                        canUndo: !1,
                        perform: e => {
                            let t = function(e) {
                                var t;
                                let {
                                    environment: r,
                                    clientStep: i,
                                    clipboardActions: o,
                                    transaction: n,
                                    markdownLinkifyIt: l
                                } = e, s = new(a(870941)).A({
                                    name: "AssistantChatMessageRenderer",
                                    isSyntheticAssistantData: !0
                                }), d = r.currentUser.id;
                                if (!d) throw Error("No current user.");
                                s.addCacheFallback(r.defaultRecordCache.inMemoryRecordCache);
                                let p = null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id;
                                return (0, a(377796).createAndCommitOrAppend)({
                                    userAction: "AssistantChatMessageRenderer.temporaryBlockStoresForClientChatTextStep",
                                    transaction: n,
                                    environment: r,
                                    cellTarget: p ? {
                                        spaceWithId: p
                                    } : void 0,
                                    perform: e => {
                                        let t = o.markdownToBlocks({
                                            environment: r,
                                            text: (0, a(444700).e_)(i.text),
                                            transaction: e,
                                            inMemoryRecordCache: s,
                                            markdownLinkifyIt: l,
                                            tinyMceMicrosoftWordPasteFilter: void 0
                                        });
                                        if (!t) return [];
                                        for (let e of t) s.setModelAndRole({
                                            pointer: e.pointer,
                                            userId: d
                                        }, e.getModel(), "reader");
                                        return t
                                    },
                                    canUndo: !1
                                })
                            }({
                                environment: r,
                                clientStep: i,
                                clipboardActions: o,
                                transaction: e,
                                markdownLinkifyIt: n
                            });
                            return a(9774).wrapTemporaryBlocksInList({
                                environment: r,
                                stores: t,
                                inMemoryRecordCache: l,
                                transaction: e
                            })
                        }
                    }).performResult
                })({
                    environment: n,
                    clientStep: t,
                    clipboardActions: s,
                    markdownLinkifyIt: l
                })) : void 0, [t, n, l, s]);
                return (0, i.jsx)(a(744628).c, {
                    displayName: "AssistantChatStepContent",
                    disabled: !0,
                    style: o ? {
                        pointerEvents: "none"
                    } : void 0,
                    children: d ? (0, i.jsx)(a(301124).A, {
                        store: d,
                        disabled: !0,
                        disableCommentMenu: !0,
                        disableHoverMenu: !0,
                        disableDrag: !0
                    }) : null
                })
            }
        },
        627155: (e, t, a) => {
            a.d(t, {
                Nc: () => b,
                OS: () => d,
                So: () => v,
                Vg: () => k,
                Vz: () => s,
                g$: () => m,
                l4: () => y,
                o4: () => f,
                qY: () => c,
                rB: () => g,
                tF: () => p,
                ze: () => u
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(430670), a(803949), a(581454);
            var r = () => a(722371),
                i = () => a(682956),
                o = () => a(213003),
                n = () => a(485890),
                l = () => a(530096);

            function s(e) {
                let t = function(e) {
                    var t, o, n, s, d;
                    let {
                        legacyNonCrdt: p,
                        assistantOperation: u,
                        actorPointer: c,
                        getRecordValue: m,
                        spaceId: f,
                        citationHandling: g,
                        currentTimeZone: b
                    } = e, y = Date.now(), k = {
                        last_edited_by_table: c.table,
                        last_edited_by_id: c.id,
                        last_edited_time: y
                    }, N = {
                        created_by_table: c.table,
                        created_by_id: c.id,
                        created_time: y,
                        ...k
                    }, _ = a(993189).b4_.fromGetRecordValueFn(m), T = [];
                    if ("createBlock" === u.command) {
                        let e;
                        if ("database" === u.blockNode.tagName) return {
                            error: Error("Invalid creation operation for database")
                        };
                        let n = _({
                                table: i().ev,
                                id: u.blockNode.attributes.id
                            }),
                            s = {},
                            d = {};
                        if ("toggle" === u.blockNode.tagName && (0, r().O9)(u.blockNode.attributes.size) && (e = l().oc[u.blockNode.attributes.size], d.toggleable = !0), e || (e = l().w$[u.blockNode.tagName]), !e) return {
                            error: Error(`Unknown block type: ${u.blockNode.tagName}`)
                        };
                        if (u.blockNode.attributes)
                            for (let [e, t] of Object.entries(u.blockNode.attributes)) {
                                let a = w[e];
                                if (a) {
                                    let e = a(t, {
                                        spaceId: f,
                                        isCreate: !0
                                    });
                                    Object.assign(s, e.properties), Object.assign(d, e.format)
                                }
                            }
                        let h = Object.values(u.blockNode.properties).find(e => "property-title" === e.tagName),
                            y = h ? h.children : u.blockNode.text,
                            k = {};
                        if (u.databaseSchemaId) {
                            let e = m({
                                table: i().ev,
                                id: u.databaseSchemaId
                            });
                            if (!e) return {
                                error: Error("No collection view block")
                            };
                            let t = u.collectionId ? {
                                table: a(46241).V,
                                id: u.collectionId,
                                spaceId: f
                            } : (0, a(290167).j6)({
                                table: i().ev,
                                value: e
                            });
                            if (!t) return {
                                error: Error("No collection pointer")
                            };
                            let r = m(t);
                            if (!r) return {
                                error: Error("No collection")
                            };
                            let o = a(993189).Bj6.fromCollection(r).getNormalizedSchema(_);
                            for (let [e, t] of Object.entries(u.blockNode.properties)) {
                                let a = Object.entries(o).find(([, t]) => (null == t ? void 0 : t.name) === e);
                                if (!a) return {
                                    error: Error(`Property not found: ${e}`)
                                };
                                let [r] = a;
                                k[r] = (0, l().ld)({
                                    type: "property",
                                    property: t,
                                    nodes: t.children,
                                    getRecordModel: _,
                                    currentTimeZone: b
                                }) || []
                            }
                        }
                        if ("unknown-block" === u.blockNode.tagName && n) return {
                            value: [{
                                type: "latentOperation",
                                latentOperation: {
                                    type: "addUnknownBlockToPage",
                                    assistantOperation: {
                                        command: "addUnknownBlockToPage",
                                        blockNode: u.blockNode,
                                        copiedFromBlock: n
                                    },
                                    data: {
                                        spaceId: f,
                                        actorPointer: c
                                    }
                                }
                            }]
                        };
                        if (f) {
                            let {
                                operations: t
                            } = a(993189).zgg.assistantCreate({
                                type: e,
                                id: v(u.blockNode.attributes.id),
                                space_id: f,
                                properties: {
                                    title: (null == y ? void 0 : y.length) > 0 ? (0, l().ld)({
                                        type: "text",
                                        nodes: y,
                                        citationHandling: g,
                                        getRecordModel: _,
                                        currentTimeZone: b
                                    }) : void 0,
                                    ...s,
                                    ...k
                                },
                                content: u.blockNode.children.length > 0 ? u.blockNode.children.map(e => v(e.attributes.id)) : void 0,
                                parentPointer: u.blockNode.parent && {
                                    table: i().ev,
                                    id: v(u.blockNode.parent.attributes.id),
                                    spaceId: f
                                },
                                createdBy: {
                                    table: N.created_by_table,
                                    id: N.created_by_id,
                                    spaceId: f
                                },
                                lastEditedBy: {
                                    table: N.last_edited_by_table,
                                    id: N.last_edited_by_id,
                                    spaceId: f
                                },
                                format: d,
                                legacyNonCrdt: p
                            });
                            T.push(...t)
                        }
                        if ("tr" === u.blockNode.tagName) {
                            let e = u.blockNode.attributes.id,
                                r = null == (t = u.blockNode.parent) ? void 0 : t.attributes.id;
                            if (!r) return {
                                error: Error(`Parent not found: ${r}.`)
                            };
                            let n = {
                                    table: i().ev,
                                    id: v(e)
                                },
                                s = {
                                    table: i().ev,
                                    id: v(r)
                                },
                                d = m(s);
                            if (!d) return {
                                error: Error(`Parent block not found: ${r}.`)
                            };
                            if (d.type !== a(955630).xd.table) return {
                                error: Error("Parent block is not of type table.")
                            };
                            let p = (null == (o = d.format) ? void 0 : o.table_block_column_order) || [],
                                c = Object.values(u.blockNode.properties).sort((e, t) => parseInt(e.attributes.name) - parseInt(t.attributes.name));
                            if (p.length > 0 && p.length !== c.length) {
                                let e = e => ({
                                    type: "property",
                                    tagName: "property-text",
                                    attributes: {
                                        name: e
                                    },
                                    children: [{
                                        type: "text",
                                        value: ""
                                    }]
                                });
                                for (let t of a(381453).y1(c.length, p.length)) {
                                    let a = (t + 1).toString();
                                    c.push(e(a))
                                }
                            }
                            for (let e of c)
                                if (c.indexOf(e) + 1 !== parseInt(e.attributes.name)) return {
                                    error: Error("Table row properties are not in order.")
                                };
                            if (0 === p.length) {
                                p = c.map(() => (0, a(698596).Ay)());
                                let e = {
                                    last_edited_by_table: N.last_edited_by_table,
                                    last_edited_by_id: N.last_edited_by_id,
                                    last_edited_time: N.last_edited_time
                                };
                                T.push(a(488307).op.update({
                                    pointer: s,
                                    path: ["format"],
                                    args: {
                                        table_block_column_order: p
                                    }
                                }), a(488307).op.update({
                                    pointer: s,
                                    path: [],
                                    args: e
                                }))
                            }
                            let f = Object.fromEntries(c.map((e, t) => [p[t], e.children.length > 0 ? (0, l().ld)({
                                type: "property",
                                nodes: e.children,
                                property: e,
                                getRecordModel: _,
                                currentTimeZone: b
                            }) : void 0]));
                            T.push(a(488307).op.update({
                                pointer: n,
                                path: ["properties"],
                                args: f
                            }))
                        }
                    } else if ("removeBlock" === u.command) return {
                        value: [{
                            type: "latentOperation",
                            latentOperation: {
                                type: "removeBlock",
                                assistantOperation: u,
                                data: {
                                    spaceId: f,
                                    actorPointer: c
                                }
                            }
                        }]
                    };
                    else if ("moveBlock" === u.command) T = [{
                        pointer: {
                            table: i().ev,
                            id: v(u.oldParentId)
                        },
                        command: "listRemove",
                        path: ["content"],
                        args: {
                            id: v(u.blockNode.attributes.id)
                        }
                    }, a(488307).op.update({
                        pointer: {
                            table: i().ev,
                            id: v(u.parentId)
                        },
                        path: [],
                        args: k
                    }), {
                        pointer: {
                            table: i().ev,
                            id: v(u.blockNode.attributes.id)
                        },
                        command: "update",
                        path: [],
                        args: {
                            parent_id: v(u.parentId),
                            parent_table: i().ev,
                            alive: !0,
                            ...k
                        }
                    }];
                    else if ("insertBlockBefore" === u.command) T = [{
                        pointer: {
                            table: i().ev,
                            id: v(u.parentId)
                        },
                        command: "listBefore",
                        path: ["content"],
                        args: {
                            id: v(u.insertBlockNode.attributes.id),
                            before: u.beforeId ? v(u.beforeId) : void 0
                        }
                    }, a(488307).op.update({
                        pointer: {
                            table: i().ev,
                            id: v(u.parentId)
                        },
                        path: [],
                        args: k
                    }), {
                        pointer: {
                            table: i().ev,
                            id: v(u.insertBlockNode.attributes.id)
                        },
                        command: "update",
                        path: [],
                        args: {
                            parent_id: v(u.parentId),
                            parent_table: i().ev,
                            alive: !0,
                            ...k
                        }
                    }];
                    else if ("insertBlockAfter" === u.command)
                        if ("page" === u.insertBlockNode.tagName) return {
                            value: [{
                                type: "latentOperation",
                                latentOperation: {
                                    type: "insertBlockAfter",
                                    assistantOperation: u,
                                    data: {
                                        spaceId: f,
                                        actorPointer: c
                                    }
                                }
                            }]
                        };
                        else T = h(u, k);
                    else if ("setBlockText" === u.command) T = [{
                        pointer: {
                            table: i().ev,
                            id: v(u.blockNode.attributes.id)
                        },
                        command: "update",
                        path: ["properties"],
                        args: {
                            title: u.text && u.text.length > 0 ? (0, l().ld)({
                                type: "text",
                                nodes: u.text,
                                getRecordModel: _,
                                currentTimeZone: b
                            }) : void 0
                        }
                    }, a(488307).op.update({
                        pointer: {
                            table: i().ev,
                            id: v(u.blockNode.attributes.id)
                        },
                        path: [],
                        args: k
                    })];
                    else if ("setBlockAttribute" === u.command) {
                        let e = w[u.attribute];
                        if (!e) return {
                            value: []
                        }; {
                            let t = e(u.value, {
                                    spaceId: f,
                                    isCreate: !1
                                }),
                                r = {
                                    table: i().ev,
                                    id: v(u.blockNode.attributes.id)
                                };
                            T = [...t.properties ? [a(488307).op.update({
                                pointer: r,
                                path: ["properties"],
                                args: t.properties
                            })] : [], ...t.format ? [a(488307).op.update({
                                pointer: r,
                                path: ["format"],
                                args: t.format
                            })] : [], a(488307).op.update({
                                pointer: r,
                                path: [],
                                args: k
                            })]
                        }
                    } else if ("setBlockTagName" === u.command) {
                        let e = l().w$[u.tagName];
                        if (!e) return {
                            error: Error(`Unknown tag name: ${u.tagName}`)
                        };
                        T = [{
                            pointer: {
                                table: i().ev,
                                id: v(u.blockNode.attributes.id)
                            },
                            command: "update",
                            path: [],
                            args: {
                                type: e,
                                ...k
                            }
                        }]
                    } else if ("setBlockProperty" === u.command) {
                        let {
                            blockNode: e,
                            property: t,
                            parentBlockId: r
                        } = u, o = {
                            table: i().ev,
                            id: v(e.attributes.id)
                        }, s = r ? {
                            table: i().ev,
                            id: v(r)
                        } : void 0, d = m(o), p = s ? m(s) : void 0;
                        if (!d) return {
                            error: Error(`Block not found: ${e.attributes.id}.`)
                        };
                        if ("property-title" === t.tagName) T = [{
                            pointer: {
                                table: i().ev,
                                id: v(u.blockNode.attributes.id)
                            },
                            command: "update",
                            path: ["properties"],
                            args: {
                                title: (0, l().ld)({
                                    type: "text",
                                    nodes: t.children,
                                    getRecordModel: _,
                                    currentTimeZone: b
                                })
                            }
                        }, a(488307).op.update({
                            pointer: {
                                table: i().ev,
                                id: v(u.blockNode.attributes.id)
                            },
                            path: [],
                            args: k
                        })];
                        else if (d.type === a(955630).xd.tableRow) {
                            let e, i;
                            if (!s || !p) return {
                                error: Error(`Block not found: ${r}.`)
                            };
                            if (p.type !== a(955630).xd.table) return {
                                error: Error("Parent block is not of type table.")
                            };
                            let d = Number(t.attributes.name);
                            if (!Number.isInteger(d) || d < 1) return {
                                error: Error(`Invalid column index: ${d}.`)
                            };
                            let u = (null == (n = p.format) ? void 0 : n.table_block_column_order) || [];
                            if (d > u.length + 1) return {
                                error: Error(`Column index too high: ${d}.`)
                            };
                            let c = u[d - 1];
                            c ? (e = c, i = [...u]) : i = [...u, e = (0, a(698596).Ay)()], T = [a(488307).op.update({
                                pointer: o,
                                path: ["properties"],
                                args: {
                                    [e]: t.children.length > 0 ? (0, l().ld)({
                                        type: "text",
                                        nodes: t.children,
                                        getRecordModel: _,
                                        currentTimeZone: b
                                    }) || [] : null
                                }
                            }), a(488307).op.update({
                                pointer: o,
                                path: [],
                                args: k
                            })], c || T.push(a(488307).op.update({
                                pointer: s,
                                path: ["format"],
                                args: {
                                    table_block_column_order: i
                                }
                            }), a(488307).op.update({
                                pointer: s,
                                path: [],
                                args: k
                            }))
                        } else {
                            let e = (0, a(975908).zN)({
                                getRecordValue: m,
                                block: d
                            });
                            if (!e) return {
                                error: Error("Block is not in a database.")
                            };
                            let r = t.attributes.name,
                                o = Object.entries(a(993189).Bj6.fromCollection(e).getNormalizedSchema(_)).find(([, e]) => (null == e ? void 0 : e.name) === r);
                            if (!o) return {
                                error: Error(`Property not found: ${r}`)
                            };
                            let [n] = o, s = (0, l().ld)({
                                type: "property",
                                property: t,
                                nodes: t.children,
                                getRecordModel: _,
                                currentTimeZone: b
                            });
                            T = [{
                                pointer: {
                                    table: i().ev,
                                    id: v(u.blockNode.attributes.id)
                                },
                                command: "update",
                                path: ["properties"],
                                args: {
                                    [n]: s
                                }
                            }, a(488307).op.update({
                                pointer: {
                                    table: i().ev,
                                    id: v(u.blockNode.attributes.id)
                                },
                                path: [],
                                args: k
                            })]
                        }
                    } else if ("insertOrMoveTableColumns" === u.command) {
                        let {
                            blockNode: e,
                            atIndex: t,
                            insertOrMoves: o
                        } = u, n = {
                            table: i().ev,
                            id: v(e.attributes.id)
                        }, l = m(n);
                        if (!l) return {
                            error: Error(`Block not found: ${e.attributes.id}.`)
                        };
                        if (l.type !== a(955630).xd.table) return {
                            error: Error("Block is not of type table.")
                        };
                        let d = (null == (s = l.format) ? void 0 : s.table_block_column_order) || [],
                            p = a(300441).Q.map(o, e => {
                                if ("schema" === e.type) return {
                                    value: (0, a(698596).Ay)()
                                };
                                if ("move" === e.type) {
                                    let t = d[Number(e.attributes.name) - 1];
                                    return t ? {
                                        value: t
                                    } : {
                                        error: Error(`Invalid column index: ${e.attributes.name}.`)
                                    }
                                }(0, r().HB)(e)
                            });
                        if (a(300441).Q.isFail(p)) return p;
                        let c = p.value,
                            f = [...d.slice(0, t).filter(e => !c.includes(e)), ...c, ...d.slice(t).filter(e => !c.includes(e))];
                        T = [a(488307).op.update({
                            pointer: n,
                            path: ["format"],
                            args: {
                                table_block_column_order: f
                            }
                        }), a(488307).op.update({
                            pointer: n,
                            path: [],
                            args: k
                        })]
                    } else if ("removeTableColumn" === u.command) {
                        let {
                            blockNode: e,
                            columnIndex: t
                        } = u, r = {
                            table: i().ev,
                            id: v(e.attributes.id)
                        }, o = m(r);
                        if (!o) return {
                            error: Error(`Block not found: ${e.attributes.id}.`)
                        };
                        if (o.type !== a(955630).xd.table) return {
                            error: Error("Block is not of type table.")
                        };
                        let n = (null == (d = o.format) ? void 0 : d.table_block_column_order) || [],
                            l = n[t];
                        if (!l) return {
                            error: Error(`Invalid column index: ${t}.`)
                        };
                        let s = [...n.slice(0, t), ...n.slice(t + 1)];
                        T = [a(488307).op.update({
                            pointer: r,
                            path: ["format"],
                            args: {
                                table_block_column_order: s
                            }
                        }), a(488307).op.update({
                            pointer: r,
                            path: [],
                            args: k
                        }), ...(o.content || []).flatMap(e => {
                            let t = {
                                    table: i().ev,
                                    id: e
                                },
                                r = m(t);
                            return r && r.type === a(955630).xd.tableRow ? [a(488307).op.update({
                                pointer: t,
                                path: ["properties"],
                                args: {
                                    [l]: null
                                }
                            }), a(488307).op.update({
                                pointer: t,
                                path: [],
                                args: k
                            })] : []
                        })]
                    } else if ("setBlockParent" === u.command) {
                        let e, t = {
                                table: i().ev,
                                id: u.parentId
                            },
                            r = m(t);
                        r && (e = u.collectionId ? {
                            table: a(46241).V,
                            id: u.collectionId,
                            spaceId: f
                        } : (0, a(290167).j6)({
                            table: i().ev,
                            value: r
                        })), T = [{
                            pointer: {
                                table: i().ev,
                                id: v(u.blockNode.attributes.id)
                            },
                            command: "update",
                            path: [],
                            args: { ...e ? {
                                    parent_id: v(e.id),
                                    parent_table: e.table
                                } : {
                                    parent_id: v(t.id),
                                    parent_table: t.table
                                },
                                alive: !0,
                                ...k
                            }
                        }]
                    } else {
                        if ("addBlockToPage" === u.command) return {
                            value: [{
                                type: "latentOperation",
                                latentOperation: {
                                    type: "addBlockToPage",
                                    assistantOperation: u,
                                    data: {
                                        spaceId: f,
                                        actorPointer: c
                                    }
                                }
                            }]
                        };
                        (0, r().HB)(u)
                    }
                    return {
                        value: T.map(e => ({
                            type: "operation",
                            operation: e
                        }))
                    }
                }(e);
                return a(300441).Q.isFail(t) ? t : {
                    value: t.value.map(e => {
                        if ("operation" === e.type || "latentOperation" === e.type) return e;
                        (0, r().HB)(e)
                    })
                }
            }

            function d(e) {
                let {
                    spaceViewId: t,
                    shouldCreateUnknownBlock: a
                } = e;
                return {
                    addBlockToPage: {
                        target: "privatePages",
                        spaceViewId: t
                    },
                    enforceDefaultInsertBehavior: !0,
                    shouldRemoveBlocksFromParent: !1,
                    shouldCreateUnknownBlock: a
                }
            }

            function p(e) {
                let {
                    shouldRemoveBlocksFromParent: t
                } = e;
                return {
                    addBlockToPage: {
                        spaceViewId: void 0,
                        target: "unlistedPages"
                    },
                    enforceDefaultInsertBehavior: !0,
                    shouldRemoveBlocksFromParent: t,
                    shouldCreateUnknownBlock: !1
                }
            }

            function u() {
                return {
                    addBlockToPage: {
                        target: "privatePages",
                        spaceViewId: void 0
                    },
                    enforceDefaultInsertBehavior: !0,
                    shouldRemoveBlocksFromParent: !1,
                    shouldCreateUnknownBlock: !0
                }
            }

            function c() {
                return {
                    addBlockToPage: {
                        target: "privatePages",
                        spaceViewId: void 0
                    },
                    enforceDefaultInsertBehavior: !0,
                    shouldRemoveBlocksFromParent: !0,
                    shouldCreateUnknownBlock: !0
                }
            }

            function m(e, t, a) {
                let l = [],
                    s = new Map;
                for (let d of e) {
                    if ("operation" === d.type) {
                        l.push(d.operation);
                        continue
                    }
                    let {
                        latentOperation: e
                    } = d, {
                        type: p
                    } = e;
                    if ("addBlockToPage" === p) {
                        let {
                            assistantOperation: a,
                            data: r
                        } = e, {
                            spaceId: s,
                            actorPointer: d
                        } = r, {
                            addBlockToPage: p
                        } = t, u = [{
                            type: "user_permission",
                            role: "editor",
                            user_id: d.id
                        }];
                        "unlistedPages" === p.target && u.push({
                            type: "space_permission",
                            role: "editor",
                            unlisted_timestamp: Date.now()
                        });
                        let c = {
                                pointer: {
                                    table: i().ev,
                                    id: v(a.blockNode.attributes.id)
                                },
                                command: "update",
                                path: [],
                                args: {
                                    permissions: u,
                                    parent_id: s,
                                    parent_table: o().NX,
                                    alive: !0
                                }
                            },
                            {
                                spaceViewId: m
                            } = p,
                            f = m && {
                                pointer: {
                                    table: n().mu,
                                    id: m
                                },
                                command: "listAfter",
                                path: ["private_pages"],
                                args: {
                                    id: v(a.blockNode.attributes.id)
                                }
                            };
                        f && l.push(f), l.push(c)
                    } else if ("insertBlockAfter" === p) {
                        let {
                            actorPointer: t
                        } = e.data;
                        l.push(...h(e.assistantOperation, {
                            last_edited_by_table: t.table,
                            last_edited_by_id: t.id,
                            last_edited_time: Date.now()
                        }))
                    } else if ("removeBlock" === p) {
                        let {
                            actorPointer: a
                        } = e.data;
                        l.push(...f({
                            assistantOperation: e.assistantOperation,
                            updateMetadata: {
                                last_edited_by_table: a.table,
                                last_edited_by_id: a.id,
                                last_edited_time: Date.now()
                            },
                            includeRemoveFromParent: t.shouldRemoveBlocksFromParent
                        }))
                    } else if ("addUnknownBlockToPage" === p) {
                        let {
                            operations: r,
                            replacedBlockIdMap: i
                        } = g({
                            latentOperation: e,
                            shouldCreateUnknownBlock: t.shouldCreateUnknownBlock,
                            legacyNonCrdt: a
                        });
                        l.push(...r), i.forEach((e, t) => {
                            s.set(t, e)
                        })
                    } else(0, r().HB)(p)
                }
                return {
                    operations: l,
                    replacedBlockIdMap: s
                }
            }

            function f(e) {
                let {
                    assistantOperation: t,
                    updateMetadata: r,
                    includeRemoveFromParent: o
                } = e;
                return (o ? [{
                    pointer: {
                        table: i().ev,
                        id: v(t.parentId)
                    },
                    command: "listRemove",
                    path: ["content"],
                    args: {
                        id: v(t.removeBlockNode.attributes.id)
                    }
                }] : []).concat([a(488307).op.update({
                    pointer: {
                        table: i().ev,
                        id: v(t.parentId)
                    },
                    path: [],
                    args: r
                }), {
                    pointer: {
                        table: i().ev,
                        id: v(t.removeBlockNode.attributes.id)
                    },
                    command: "update",
                    path: [],
                    args: {
                        parent_id: v(t.parentId),
                        parent_table: i().ev,
                        alive: !1,
                        ...r
                    }
                }])
            }

            function h(e, t) {
                return [{
                    pointer: {
                        table: i().ev,
                        id: v(e.parentId)
                    },
                    command: "listAfter",
                    path: ["content"],
                    args: {
                        id: v(e.insertBlockNode.attributes.id),
                        after: e.afterId ? v(e.afterId) : void 0
                    }
                }, a(488307).op.update({
                    pointer: {
                        table: i().ev,
                        id: v(e.parentId)
                    },
                    path: [],
                    args: t
                }), {
                    pointer: {
                        table: i().ev,
                        id: v(e.insertBlockNode.attributes.id)
                    },
                    command: "update",
                    path: [],
                    args: {
                        parent_id: v(e.parentId),
                        parent_table: i().ev,
                        alive: !0,
                        ...t
                    }
                }]
            }

            function g(e) {
                let {
                    latentOperation: t,
                    shouldCreateUnknownBlock: r,
                    legacyNonCrdt: o
                } = e, {
                    spaceId: n,
                    actorPointer: l
                } = t.data, s = Date.now(), {
                    blockNode: d,
                    copiedFromBlock: p
                } = t.assistantOperation, u = [], c = new Map;
                if (r) {
                    let e, t = {
                        table: i().ev,
                        id: v(a(92513).Dt()),
                        spaceId: n
                    };
                    if (d.parent && (e = {
                            table: i().ev,
                            id: v(d.parent.attributes.id),
                            spaceId: n
                        }), !n) throw Error("Invalid spaceId.");
                    let {
                        operations: r
                    } = a(993189).zgg.assistantCreate({
                        id: t.id,
                        type: p.type,
                        space_id: n,
                        properties: p.getProperties(a(993189).b4_.constant(void 0)),
                        content: p.getContentIds(),
                        format: p.getFormat(),
                        parentPointer: e,
                        createdBy: l,
                        lastEditedBy: l,
                        created_time: s,
                        legacyNonCrdt: o
                    });
                    for (let e of (u.push(...r), p.getFileIds())) u.push({
                        pointer: t,
                        command: "copyFile",
                        path: [],
                        args: {
                            source: p.pointer,
                            fileId: e
                        }
                    });
                    c.set(p.id, t.id), e && u.push({
                        pointer: e,
                        path: ["content"],
                        command: "listReplace",
                        args: {
                            id: p.pointer.id,
                            newId: t.id
                        }
                    })
                } else if (n) {
                    let {
                        operations: e
                    } = a(993189).zgg.assistantCreate({
                        type: p.type,
                        space_id: n,
                        id: p.id,
                        properties: p.getProperties(a(993189).b4_.constant(void 0)),
                        content: p.getContentIds(),
                        format: p.getFormat(),
                        createdBy: {
                            table: l.table,
                            id: l.id,
                            spaceId: n
                        },
                        lastEditedBy: {
                            table: l.table,
                            id: l.id,
                            spaceId: n
                        },
                        parentPointer: d.parent && {
                            table: i().ev,
                            id: v(d.parent.attributes.id),
                            spaceId: n
                        },
                        legacyNonCrdt: o
                    });
                    u.push(...e)
                }
                return {
                    operations: u,
                    replacedBlockIdMap: c
                }
            }

            function b(e) {
                let t = new Set;
                for (let a of e) "latentOperation" === a.type ? "removeBlock" === a.latentOperation.type ? t.add(a.latentOperation.assistantOperation.removeBlockNode.attributes.id) : "insertBlockAfter" === a.latentOperation.type ? t.add(a.latentOperation.assistantOperation.insertBlockNode.attributes.id) : "addBlockToPage" === a.latentOperation.type || "addUnknownBlockToPage" === a.latentOperation.type ? t.add(a.latentOperation.assistantOperation.blockNode.attributes.id) : (0, r().HB)(a.latentOperation) : "operation" === a.type ? a.operation.pointer.table === i().ev && t.add(a.operation.pointer.id) : (0, r().HB)(a);
                return [...t]
            }
            async function y({
                assistantDatabaseQuery: e,
                spaceId: t,
                loadRecordModel: i
            }) {
                let o = {
                        databaseId: v(e.databaseId),
                        filter: e.filter,
                        sorts: e.sorts,
                        limit: e.limit
                    },
                    n = {
                        table: a(46241).V,
                        id: o.databaseId,
                        spaceId: t
                    },
                    l = await i(n);
                if (!l) throw Error("No collection");
                let s = l.getAdditionalPropertyPointers(),
                    d = await i(s),
                    p = l.getNormalizedSchema(a(993189).b4_.fromRecordMap(d)),
                    u = l.getParentPointer();
                if (u.table === a(46241).V) throw Error("Unsupported parent object for collection");
                let c = { ...u,
                    spaceId: t
                };
                return {
                    collectionViewBlockPointer: c,
                    collectionPointer: { ...n,
                        spaceId: c.spaceId
                    },
                    filter: function e(t) {
                        let {
                            groupFilter: i,
                            schema: o
                        } = t;
                        return {
                            operator: ({
                                any: "or",
                                all: "and"
                            })[i.operator],
                            filters: i.filters.map(t => {
                                let {
                                    operator: i
                                } = t;
                                return "any" === i || "all" === i ? e({
                                    groupFilter: t,
                                    schema: o
                                }) : "is" === i || "contains" === i || ">" === i || "<" === i || "≥" === i || "≤" === i || "is empty" === i ? function(e) {
                                    let {
                                        filter: t,
                                        schema: i
                                    } = e, {
                                        propertyTagName: o,
                                        operator: n,
                                        not: l,
                                        attributes: s,
                                        children: d,
                                        propertyName: p
                                    } = t, u = Object.keys(i).find(e => {
                                        var t;
                                        return (0, a(698596).Ut)(e) && (null == (t = i[e]) ? void 0 : t.name) === p
                                    });
                                    if (!u) throw Error(`Invalid property name: ${p}.`);
                                    if ("property-title" === o || "property-text" === o || "property-url" === o || "property-email" === o || "property-phone-number" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            is: l ? "string_is_not" : "string_is",
                                            contains: l ? "string_does_not_contain" : "string_contains"
                                        };
                                        return {
                                            property: u,
                                            filter: "is empty" !== n && (0, r().EI)(d) ? {
                                                operator: e[n],
                                                value: {
                                                    type: "exact",
                                                    value: d[0].value
                                                }
                                            } : {
                                                operator: e.empty
                                            }
                                        }
                                    }
                                    if ("property-person" === o || "property-created-by" === o || "property-last-edited-by" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            contains: l ? "person_does_not_contain" : "person_contains"
                                        };
                                        return {
                                            property: u,
                                            filter: (0, r().EI)(d) ? {
                                                operator: e[n],
                                                value: d.filter(e => "mention-person" === e.tagName).map(e => {
                                                    let t = e.attributes["person-id"];
                                                    return {
                                                        type: "exact",
                                                        value: {
                                                            table: a(514214).oo,
                                                            id: t
                                                        }
                                                    }
                                                })
                                            } : {
                                                operator: e.empty
                                            }
                                        }
                                    }
                                    if ("property-relation" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            contains: l ? "relation_does_not_contain" : "relation_contains"
                                        };
                                        return {
                                            property: u,
                                            filter: (0, r().EI)(d) ? {
                                                operator: e[n],
                                                value: d.map(e => ({
                                                    type: "exact",
                                                    value: e.attributes["page-id"]
                                                }))
                                            } : {
                                                operator: e.empty
                                            }
                                        }
                                    }
                                    if ("property-date" === o || "property-created-time" === o || "property-last-edited-time" === o) {
                                        let e;
                                        if ("is" === n && !0 === l) throw Error("Data filter does not support 'is not' operator");
                                        let t = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            is: "date_is",
                                            ">": l ? "date_is_on_or_before" : "date_is_after",
                                            "<": l ? "date_is_on_or_after" : "date_is_before",
                                            "≥": l ? "date_is_before" : "date_is_on_or_after",
                                            "≤": l ? "date_is_after" : "date_is_on_or_before"
                                        };
                                        if ("is empty" === n) return {
                                            property: u,
                                            filter: {
                                                operator: t.empty
                                            }
                                        };
                                        let a = d[0];
                                        if ("mention-date" === a.tagName) e = {
                                            type: "date",
                                            start_date: a.attributes.date
                                        };
                                        else throw Error("Invalid mention date in filter. This should never happen");
                                        return {
                                            property: u,
                                            filter: {
                                                operator: t[n],
                                                value: {
                                                    type: "exact",
                                                    value: e
                                                }
                                            }
                                        }
                                    }
                                    if ("property-checkbox" === o) return {
                                        property: u,
                                        filter: {
                                            operator: ({
                                                is: l ? "checkbox_is_not" : "checkbox_is"
                                            })[n],
                                            value: {
                                                type: "exact",
                                                value: ({
                                                    true: !0,
                                                    false: !1
                                                })[s.checked]
                                            }
                                        }
                                    };
                                    else if ("property-select" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            is: l ? "enum_is_not" : "enum_is"
                                        };
                                        return {
                                            property: u,
                                            filter: (0, r().EI)(d) ? {
                                                operator: e[n],
                                                value: d.map(e => ({
                                                    type: "exact",
                                                    value: e.attributes.option
                                                }))
                                            } : {
                                                operator: e.empty
                                            }
                                        }
                                    } else if ("property-multi-select" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            contains: l ? "enum_does_not_contain" : "enum_contains"
                                        };
                                        return {
                                            property: u,
                                            filter: (0, r().EI)(d) ? {
                                                operator: e[n],
                                                value: d.map(e => ({
                                                    type: "exact",
                                                    value: e.attributes.option
                                                }))
                                            } : {
                                                operator: e.empty
                                            }
                                        }
                                    } else if ("property-status" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            is: l ? "status_is_not" : "status_is"
                                        };
                                        return {
                                            property: u,
                                            filter: (0, r().EI)(d) ? {
                                                operator: e[n],
                                                value: d.map(e => "option-category" === e.tagName ? {
                                                    type: "is_group",
                                                    value: e.attributes.category
                                                } : "option" === e.tagName ? {
                                                    type: "is_option",
                                                    value: e.attributes.option
                                                } : (0, r().HB)(e))
                                            } : {
                                                operator: e.empty
                                            }
                                        }
                                    } else if ("property-number" === o) {
                                        let e = {
                                            empty: l ? "is_not_empty" : "is_empty",
                                            is: l ? "number_does_not_equal" : "number_equals",
                                            ">": l ? "number_less_than_or_equal_to" : "number_greater_than",
                                            "<": l ? "number_greater_than_or_equal_to" : "number_less_than",
                                            "≥": l ? "number_less_than" : "number_greater_than_or_equal_to",
                                            "≤": l ? "number_greater_than" : "number_less_than_or_equal_to"
                                        };
                                        if ("is empty" === n) return {
                                            property: u,
                                            filter: {
                                                operator: e.empty
                                            }
                                        };
                                        let t = i[u];
                                        if (!t || "number" !== t.type) throw Error("Invalid property type");
                                        let r = a(700369).$J(s.number);
                                        if ("number" != typeof r) throw Error("Invalid number");
                                        let o = {
                                            property: u,
                                            filter: {
                                                operator: e[n],
                                                value: {
                                                    type: "exact",
                                                    value: r
                                                }
                                            }
                                        };
                                        return l && (">" === n || "<" === n || "≥" === n || "≤" === n) ? {
                                            operator: "or",
                                            filters: [o, {
                                                property: u,
                                                filter: {
                                                    operator: "is_empty"
                                                }
                                            }]
                                        } : o
                                    } else(0, r().HB)(o)
                                }({
                                    filter: t,
                                    schema: o
                                }) : void(0, r().HB)(i)
                            })
                        }
                    }({
                        groupFilter: o.filter,
                        schema: p
                    }),
                    sort: o.sorts.map(e => {
                        let t = Object.keys(p).find(t => {
                            var r;
                            return (0, a(698596).Ut)(t) && (null == (r = p[t]) ? void 0 : r.name) === e.propertyName
                        });
                        if (!t) throw Error(`Invalid property name: ${e.propertyName}.`);
                        return {
                            property: t,
                            direction: e.direction
                        }
                    }),
                    aggregation: function(e) {
                        let {
                            collectionSchema: t,
                            aggregationRequest: r
                        } = e;
                        if (!r) return;
                        let i = Object.entries(t).find(([, e]) => e && e.name === r.attributes.name);
                        if (!i) return;
                        let o = i[0];
                        return "aggregation-property-status" === r.tagName ? {
                            property: o,
                            aggregator: "Count per group" === r.attributes.aggregation || "Percent per group" === r.attributes.aggregation ? {
                                operator: a(418672).sk[r.attributes.aggregation],
                                groupName: r.attributes.group
                            } : a(418672).sk[r.attributes.aggregation]
                        } : {
                            property: o,
                            aggregator: a(418672).sk[r.attributes.aggregation]
                        }
                    }({
                        collectionSchema: p,
                        aggregationRequest: e.aggregation
                    }),
                    limit: Math.min(o.limit || a(557032).qO, a(557032).qO)
                }
            }

            function v(e) {
                return e.split("/")[0]
            }

            function k(e) {
                return e
            }
            let w = {
                checked: e => ({
                    properties: {
                        checked: "true" === e ? a(745680).h4 : a(745680).ZO
                    }
                }),
                color: e => {
                    if (!e) return {};
                    let t = a(418672).BP[e];
                    if (!t) throw Error(`Unrecognized assistant color: ${e}`);
                    return {
                        format: {
                            block_color: t
                        }
                    }
                },
                "synced-block-id": (e, {
                    spaceId: t
                }) => e ? {
                    format: {
                        transclusion_reference_pointer: {
                            id: e,
                            table: i().ev,
                            spaceId: t
                        }
                    }
                } : {},
                "page-font": e => ({
                    format: {
                        page_font: e && (0, a(699422).PE)(e) ? e : void 0
                    }
                }),
                "page-font-size": e => ({
                    format: {
                        page_small_text: "small" === e
                    }
                }),
                "page-width": e => ({
                    format: {
                        page_full_width: "full-width" === e
                    }
                }),
                language: (e, t) => {
                    if (!e || !(0, a(656974).Ll)(e)) return {};
                    let r = a(656974).nD[e];
                    return {
                        properties: {
                            language: [
                                [r]
                            ]
                        },
                        ...t.isCreate && (0, a(656974).Ys)(r).customRender ? {
                            format: {
                                code_preview_format: "code"
                            }
                        } : {}
                    }
                },
                index: e => {
                    if (!e) return {};
                    let t = parseInt(e);
                    return Number.isInteger(t) ? {
                        format: {
                            list_start_index: t
                        }
                    } : {}
                }
            }
        },
        655404: (e, t, a) => {
            a.d(t, {
                BL: () => p,
                BP: () => u,
                Wd: () => d,
                Wu: () => k,
                iL: () => g,
                j_: () => w,
                qT: () => s,
                s2: () => N,
                wF: () => y
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(430670), a(803949), a(581454);
            var r = a.n(a(794148)),
                i = () => a(381453),
                o = () => a(722371),
                n = () => a(418672),
                l = () => a(627155);

            function s(e) {
                return e.flatMap(e => "removedPage" === e.type || e.didCreatePage ? e.operationIds : e.groupedEdits.flatMap(e => e.operationIds))
            }

            function d(e) {
                return !p(e)
            }

            function p(e) {
                return "updatedPage" === e.type && !!e.didCreatePage
            }

            function u(e) {
                return "updatedPage" === e.type
            }
            class c {
                parentToChildIndexMap = new(a(277637)).G(e => {
                    if ("database-views" === e.tagName) return new Map;
                    let t = new Map;
                    return e.children.forEach((e, a) => t.set(e.attributes.id, a)), t
                });
                blockIdMap = new Map;
                getIndexInParentForBlock(e) {
                    return this.blockIdMap.set(e.attributes.id, e), (e.parent && this.parentToChildIndexMap.get(e.parent).get(e.attributes.id)) ? ? 0
                }
                getIndexInParentForBlockId(e) {
                    let t = this.blockIdMap.get(e);
                    return t ? this.getIndexInParentForBlock(t) : 0
                }
            }
            let m = ["insertedBlocks", "updatedBlocks"];

            function f(e) {
                let {
                    groupedEditType: t,
                    group: a,
                    block: r,
                    executableOperation: i,
                    blockIndexFinder: n
                } = e, l = r.parent ? [r.parent.attributes.id, n.getIndexInParentForBlock(r)] : [void 0, 0], s = a.groupedEditsByType[t].blocksByParent.get(l);
                "insertedBlocks" === t ? a.groupedEditsByType[t].blocksByParent.set(l, {
                    editId: r.attributes.id,
                    type: t,
                    blockIds: new Set([r.attributes.id, ...(null == s ? void 0 : s.blockIds) ? ? []]),
                    operationIds: [...(null == s ? void 0 : s.operationIds) ? ? [], i.id]
                }) : "updatedBlocks" === t ? a.groupedEditsByType[t].blocksByParent.set(l, {
                    editId: r.attributes.id,
                    type: t,
                    blockIds: new Set([r.attributes.id]),
                    operationIds: [...(null == s ? void 0 : s.operationIds) ? ? [], i.id]
                }) : (0, o().HB)(t)
            }

            function h(e) {
                let {
                    group: t,
                    names: a,
                    executableOperation: r
                } = e;
                0 !== a.length && t.groupedEditsByType.updatedProperties.push({
                    editId: `${t.pageId}.properties`,
                    type: "updatedProperties",
                    propertyNames: new Set(a),
                    operationIds: [r.id]
                })
            }

            function g(e) {
                let t = new c,
                    s = new(a(277637)).G(e => ({
                        type: "updatedPage",
                        pageId: e,
                        didCreatePage: !1,
                        updatedTitle: !1,
                        updatedPropertyNames: new Set,
                        insertedBlockIds: new Set,
                        updatedBlockIds: new Set,
                        removedBlockIds: new Set,
                        groupedEditsByType: {
                            insertedBlocks: {
                                blocksByParent: new(a(793665)).A
                            },
                            removedBlocks: void 0,
                            updatedBlocks: {
                                blocksByParent: new(a(793665)).A
                            },
                            updatedProperties: [],
                            updatedTitle: void 0
                        },
                        extraOperationIds: []
                    })),
                    d = new(a(277637)).G(e => ({
                        type: "removedPage",
                        pageId: e,
                        operationIds: []
                    })),
                    {
                        rootOperations: u,
                        descendantOperationsMap: g,
                        movedBlocks: k
                    } = function(e) {
                        let t = new Map,
                            r = new Set,
                            i = new Set;
                        for (let a of e) {
                            let e = y(a);
                            t.set(e.attributes.id, e), "createBlock" === a.command || "insertBlockAfter" === a.command || "insertBlockBefore" === a.command || "setBlockProperty" === a.command || "setBlockText" === a.command || "setBlockAttribute" === a.command || "setBlockParent" === a.command ? r.add(e.attributes.id) : "moveBlock" === a.command && i.add(e.attributes.id)
                        }
                        let o = [],
                            n = new(a(277637)).G(e => []);
                        for (let a of e) {
                            let e = y(a),
                                i = (function(e) {
                                    let t = null == e ? void 0 : e.parent,
                                        a = [];
                                    for (; t && !v(t);) a.push(t), t = t.parent;
                                    return a
                                })(e).slice().reverse().find(e => t.get(e.attributes.id));
                            i ? n.get(i.attributes.id).push({ ...a
                            }) : "removeBlock" === a.command && r.has(e.attributes.id) ? n.get(e.attributes.id).push(a) : o.push(a)
                        }
                        return {
                            rootOperations: o,
                            descendantOperationsMap: n,
                            movedBlocks: i
                        }
                    }(e);
                for (let e of u) {
                    let a = y(e);
                    if ("moveBlock" === e.command || k.has(a.attributes.id)) {
                        let r = b(s, a);
                        r.updatedBlockIds.add(a.attributes.id), f({
                            groupedEditType: "updatedBlocks",
                            group: r,
                            block: a,
                            executableOperation: e,
                            blockIndexFinder: t
                        })
                    } else if ("createBlock" === e.command || "insertBlockAfter" === e.command || "insertBlockBefore" === e.command) {
                        let r = [];
                        for (let e of a.children) r.push(e.attributes.id);
                        let i = Object.values(a.properties).filter(e => "property-title" !== e.tagName).map(e => e.attributes.name);
                        if (v(a)) {
                            let o = s.get((0, l().So)(a.attributes.id));
                            o.didCreatePage = !0, i.forEach(e => o.updatedPropertyNames.add(e)), r.forEach(e => o.insertedBlockIds.add(e)), a.children.forEach(a => {
                                (0, n().gc)(a) || f({
                                    groupedEditType: "insertedBlocks",
                                    group: o,
                                    block: a,
                                    executableOperation: e,
                                    blockIndexFinder: t
                                })
                            }), (0, n().gc)(a) || f({
                                groupedEditType: "insertedBlocks",
                                group: o,
                                block: a,
                                executableOperation: e,
                                blockIndexFinder: t
                            }), h({
                                group: o,
                                names: i,
                                executableOperation: e
                            })
                        } else {
                            let r = b(s, a);
                            r.insertedBlockIds.add(a.attributes.id), f({
                                groupedEditType: "insertedBlocks",
                                group: r,
                                block: a,
                                executableOperation: e,
                                blockIndexFinder: t
                            })
                        }
                    } else if ("setBlockParent" === e.command) f({
                        groupedEditType: "insertedBlocks",
                        group: s.get(e.blockNode.attributes.id),
                        block: e.blockNode,
                        executableOperation: e,
                        blockIndexFinder: t
                    });
                    else if ("removeBlock" === e.command)
                        if (v(e.removeBlockNode)) d.get((0, l().So)(e.removeBlockNode.attributes.id)).operationIds.push(e.id);
                        else {
                            let t = b(s, a);
                            t.removedBlockIds.add(a.attributes.id),
                                function(e) {
                                    let {
                                        group: t,
                                        block: a,
                                        executableOperation: r
                                    } = e, i = t.groupedEditsByType.removedBlocks;
                                    t.groupedEditsByType.removedBlocks = {
                                        type: "removedBlocks",
                                        blockIds: new Set([...(null == i ? void 0 : i.blockIds) ? ? [], a.attributes.id]),
                                        editId: (null == i ? void 0 : i.editId) ? ? a.attributes.id,
                                        operationIds: [...(null == i ? void 0 : i.operationIds) ? ? [], r.id]
                                    }
                                }({
                                    group: t,
                                    block: a,
                                    executableOperation: e
                                })
                        }
                    else if ("setBlockAttribute" === e.command || "setBlockTagName" === e.command || "setBlockText" === e.command || "setBlockProperty" === e.command || "insertOrMoveTableColumns" === e.command || "addBlockToPage" === e.command || "removeTableColumn" === e.command)
                        if (v(e.blockNode)) {
                            let t = s.get((0, l().So)(e.blockNode.attributes.id)),
                                a = "setBlockText" === e.command;
                            a && (t.updatedTitle = !0);
                            let r = "setBlockProperty" === e.command ? e.property.attributes.name : void 0;
                            r && t.updatedPropertyNames.add(r), a || "Title" === r ? function(e) {
                                let {
                                    group: t,
                                    executableOperation: a
                                } = e;
                                t.groupedEditsByType.updatedTitle = {
                                    editId: `${t.pageId}.title`,
                                    type: "updatedTitle",
                                    blockId: t.pageId,
                                    operationIds: [a.id]
                                }
                            }({
                                group: t,
                                executableOperation: e
                            }) : r && h({
                                group: t,
                                names: [r],
                                executableOperation: e
                            }), "addBlockToPage" === e.command && (t.extraOperationIds.push(e.id), t.didCreatePage = !0)
                        } else {
                            let r = b(s, a);
                            r.updatedBlockIds.add(e.blockNode.attributes.id), f({
                                groupedEditType: "updatedBlocks",
                                group: r,
                                block: e.blockNode,
                                executableOperation: e,
                                blockIndexFinder: t
                            })
                        }
                    else(0, o().HB)(e)
                }
                return function(e) {
                    let {
                        allGroups: t,
                        rootOperations: a
                    } = e, r = e => {
                        let {
                            pageId: t
                        } = e, r = a.find(e => y(e).attributes.id === t), i = r && y(r), o = null == i ? void 0 : i.parent;
                        return i && o ? o.children.findIndex(e => e.attributes.id === t) : -1
                    };
                    return t.slice().sort((e, t) => p(e) && p(t) ? r(e) - r(t) : 0)
                }({
                    allGroups: [...[...s.entries()].map(([e, a]) => {
                        if (!d.has(e))
                            if (a.didCreatePage) return function(e) {
                                var t, a;
                                let {
                                    updatedPageGroup: o,
                                    descendantOperationsMap: n
                                } = e;
                                r()(o.didCreatePage);
                                let {
                                    extraOperationIds: l,
                                    didCreatePage: s,
                                    groupedEditsByType: d,
                                    ...p
                                } = o;
                                return {
                                    didCreatePage: !0,
                                    ...p,
                                    operationIds: i().sb([...d.insertedBlocks.blocksByParent.valuesArray().flatMap(e => e.operationIds), ...d.updatedBlocks.blocksByParent.valuesArray().flatMap(e => e.operationIds), ...(null == (t = d.removedBlocks) ? void 0 : t.operationIds) ? ? [], ...(null == (a = d.updatedTitle) ? void 0 : a.operationIds) ? ? [], ...d.updatedProperties.flatMap(e => e.operationIds), ...l, ...[...n.values()].flat().map(e => e.id)])
                                }
                            }({
                                updatedPageGroup: a,
                                descendantOperationsMap: g
                            });
                            else return function(e) {
                                let {
                                    rootUpdatedPageGroup: t,
                                    descendantOperationsMap: a
                                } = e;
                                for (let e of t.groupedEdits)
                                    if ("insertedBlocks" === e.type || "updatedBlocks" === e.type || "removedBlocks" === e.type)
                                        for (let r of e.blockIds)
                                            for (let i of a.get(r)) e.operationIds.push(i.id), "removeBlock" === i.command && t.removedBlockIds.add(i.removeBlockNode.attributes.id);
                                return t
                            }({
                                rootUpdatedPageGroup: function(e) {
                                    let {
                                        updatedPageGroup: t,
                                        blockIndexFinder: a
                                    } = e;
                                    if (r()(!t.didCreatePage), t.extraOperationIds.length > 0) throw Error("Non page create update group contained unaccounted-for operations");
                                    let {
                                        groupedEditsByType: n,
                                        didCreatePage: l,
                                        extraOperationIds: s,
                                        ...d
                                    } = t, p = [], {
                                        updatedProperties: u,
                                        updatedTitle: c
                                    } = n;
                                    for (let e of (c && p.push(c), u.length > 0 && p.push({
                                            type: "updatedProperties",
                                            editId: u[0].editId,
                                            operationIds: u.flatMap(e => e.operationIds),
                                            propertyNames: new Set(u.flatMap(e => [...e.propertyNames]))
                                        }), m)) {
                                        let t = n[e].blocksByParent,
                                            a = [];
                                        for (; t.size > 0;) {
                                            let e = [t.keys().next().value],
                                                r = t.get(e[0]);
                                            for (a.push(r); t.size > 0 && e.length > 0;) {
                                                let a = e.shift(),
                                                    i = t.get(a);
                                                i && (t.delete(a), r.operationIds.push(...i.operationIds), i.blockIds.forEach(e => r.blockIds.add(e)), e.push([a[0], a[1] - 1], [a[0], a[1] + 1]))
                                            }
                                        }
                                        p.push(...a)
                                    }
                                    for (let e of (n.removedBlocks && p.push(n.removedBlocks), p)) {
                                        if ((0, o().Xk)(m, e.type))
                                            if ("insertedBlocks" === e.type || "updatedBlocks" === e.type) {
                                                let t = i().Ul([...e.blockIds], e => a.getIndexInParentForBlockId(e));
                                                e.blockIds = new Set(t)
                                            } else(0, o().HB)(e.type);
                                        e.operationIds = i().sb(e.operationIds)
                                    }
                                    return {
                                        didCreatePage: !1,
                                        ...d,
                                        groupedEdits: p
                                    }
                                }({
                                    updatedPageGroup: a,
                                    blockIndexFinder: t
                                }),
                                descendantOperationsMap: g
                            })
                    }).filter(o().O9), ...d.values()],
                    rootOperations: u
                })
            }

            function b(e, t) {
                let a = function(e) {
                    let t = e;
                    for (; t;) {
                        if (v(t)) return t;
                        t = t.parent
                    }
                }(t);
                if (!a) throw Error(`No ancestor page found for block: ${t.attributes.id}`);
                return e.get(a.attributes.id)
            }

            function y(e) {
                return "removeBlock" === e.command ? e.removeBlockNode : "insertBlockAfter" === e.command || "insertBlockBefore" === e.command ? e.insertBlockNode : e.blockNode
            }

            function v(e) {
                return "page" === e.tagName || "database" === e.tagName || "child-page" === e.tagName || "child-database" === e.tagName
            }

            function k(e) {
                let t = 0;
                for (let a of e)
                    if ("updatedPage" === a.type) t += a.didCreatePage ? 1 : a.groupedEdits.length;
                    else {
                        if ("removedPage" !== a.type) return (0, o().HB)(a);
                        t += 1
                    }
                return t
            }

            function w(e) {
                let {
                    insertedBlockIds: t,
                    updatedBlockIds: a,
                    removedBlockIds: r,
                    updatedTitle: i,
                    updatedPropertyNames: o
                } = e;
                return t.size + a.size + r.size + +!!i + o.size
            }

            function N(e) {
                let {
                    updatedPageGroups: t,
                    executableOperations: a
                } = e, r = new Map;
                for (let e of a) r.set(e.id, {
                    block: y(e),
                    operation: e
                });
                let i = new Map;
                for (let e of t) {
                    if (e.didCreatePage) {
                        i.set(e.pageId, [e, void 0]);
                        continue
                    }
                    for (let t of (i.set(e.pageId, [e, void 0]), e.groupedEdits))
                        if ("insertedBlocks" === t.type || "updatedBlocks" === t.type || "removedBlocks" === t.type)
                            for (let a of t.operationIds) {
                                let o = r.get(a);
                                if (o) {
                                    let {
                                        block: a
                                    } = o;
                                    i.set(a.attributes.id, [e, t])
                                }
                            }
                }
                return {
                    blockIdToPageGroupAndEdit: i
                }
            }
        },
        674106: (e, t, a) => {
            a.d(t, {
                PD: () => s,
                cb: () => l,
                hl: () => d
            }), a(16280), a(944114), a(898992), a(354520), a(803949), a(581454);
            var r, i = a.n(a(625473)),
                o = a.n(a(716471)),
                n = () => a(247438);
            let l = ((r = {})[r.removed = -1] = "removed", r[r.added = 1] = "added", r[r.same = 0] = "same", r);

            function s(e, t) {
                let a = new(o())({
                        timeout: 2,
                        editCost: 6
                    }),
                    r = a.main(t, e);
                return a.cleanupSemantic(r), r
            }

            function d(e) {
                let t = performance.now(),
                    {
                        before: r,
                        after: o,
                        isIncompleteAfter: d,
                        insertCursor: p
                    } = e,
                    u = n().AhH(r),
                    c = n().AhH(o);
                if (Math.max(u, c) > 1e4) return {
                    diffValue: o,
                    metrics: {
                        beforeLength: u,
                        afterLength: c,
                        latencyMs: performance.now() - t
                    }
                };
                let m = {
                        count: 0,
                        encoding: Object.create(null),
                        decoding: Object.create(null),
                        annotationEncoding: Object.create(null),
                        annotationDecoding: Object.create(null)
                    },
                    f = e => {
                        let t = m.encoding[e];
                        if (t) return t; {
                            let t = String.fromCharCode(m.count);
                            return m.count++, m.encoding[e] = t, m.decoding[t] = e, t
                        }
                    },
                    h = e => {
                        let t = i()(e),
                            a = m.annotationEncoding[t];
                        if (a) return a; {
                            let a = String.fromCharCode(m.count);
                            return m.count++, m.annotationEncoding[t] = a, m.annotationDecoding[a] = e, a
                        }
                    },
                    g = t => a(381453).Bq(n().RQ(t).map(t => {
                        let r = [];
                        if ("word" === e.mode)
                            if ("u" > typeof Intl && Intl.Segmenter) r = Array.from(new Intl.Segmenter(void 0, {
                                granularity: "word"
                            }).segment(t[0])).map(e => e.segment);
                            else throw Error("Intl.Segmenter is not supported");
                        else r = a(871871).PE(t[0]);
                        let i = r.map(f);
                        if (n().qXl(t)) {
                            let e = n().uPN(t),
                                a = n().jhx(e);
                            a && (i[0] = h({
                                type: "mention",
                                value: a
                            }), e.forEach(e => {
                                n().iGj(e) || n().gir(e) || n().lfl(e) || (i.unshift(h({
                                    type: "start",
                                    value: e
                                })), i.push(h({
                                    type: "end",
                                    value: e
                                })))
                            }))
                        } else if (n().GiG(t)) {
                            let e = n().uPN(t),
                                a = n().j1D(e);
                            if (a)
                                for (let t of (i[0] = h({
                                        type: "equation",
                                        value: a
                                    }), e)) n().iGj(t) || n().gir(t) || n().lfl(t) || (i.unshift(h({
                                    type: "start",
                                    value: t
                                })), i.push(h({
                                    type: "end",
                                    value: t
                                })))
                        } else n().BEe(t) && n().uPN(t).forEach(e => {
                            i.unshift(h({
                                type: "start",
                                value: e
                            })), i.push(h({
                                type: "end",
                                value: e
                            }))
                        });
                        return i
                    })).join("");
                if (m.count > 65535) throw Error("This string has way too many different characters.");
                let b = s(g(o), g(r)),
                    y = [],
                    v = [],
                    k = 0,
                    w = d ? a(381453).Kl(b, e => 0 === e[0] || 1 === e[0]) : 0,
                    N = !1,
                    _ = e.insertionAnnotation,
                    T = e.deletionAnnotation;
                return b.forEach(([e, t]) => {
                    t.split("").forEach(t => {
                        if (m.decoding[t]) {
                            let a = m.decoding[t];
                            e === l.added ? y.push([a, [...v, _]]) : e === l.removed && (!d || k <= w) ? y.push([a, [...v, T]]) : (d && p && !N && k === w + 1 && (N = !0, y.push(["", [
                                ["tc"]
                            ]])), y.push([a, v]))
                        } else {
                            let r = m.annotationDecoding[t];
                            if (e === l.added)
                                if ("mention" === r.type) y.push([n().Sj, [...v, _, r.value]]);
                                else if ("start" === r.type) v = [...v, r.value];
                            else if ("end" === r.type) v = v.filter(e => !a(381453).n4(e, r.value));
                            else if ("equation" === r.type) {
                                let e = n().U35(r.value),
                                    t = n().G0H(e, [...v, _]);
                                y.push(t)
                            } else(0, a(722371).HB)(r);
                            else if (e === l.removed) {
                                if ("mention" === r.type) y.push([n().Sj, [...v, T, r.value]]);
                                else if ("equation" === r.type) {
                                    let e = n().U35(r.value),
                                        t = n().G0H(e, [...v, T]);
                                    y.push(t)
                                }
                            } else if (e === l.same)
                                if ("mention" === r.type) y.push([n().Sj, [...v, r.value]]);
                                else if ("start" === r.type) v = [...v, r.value];
                            else if ("end" === r.type) v = v.filter(e => !a(381453).n4(e, r.value));
                            else if ("equation" === r.type) {
                                let e = n().U35(r.value),
                                    t = n().G0H(e, v);
                                y.push(t)
                            } else(0, a(722371).HB)(r)
                        }
                    }), d && (k += 1)
                }), {
                    diffValue: n().__s(y),
                    metrics: {
                        beforeLength: u,
                        afterLength: c,
                        latencyMs: performance.now() - t
                    }
                }
            }
        },
        800277: (e, t, a) => {
            function r(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-page",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "block_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-page",
                    attributes: e
                }))
            }

            function i(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-slack",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-slack",
                    attributes: e
                }))
            }

            function o(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-google-drive",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-google-drive",
                    attributes: e
                }))
            }

            function n(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-github",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-github",
                    attributes: e
                }))
            }

            function l(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-github-code",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-github-code",
                    attributes: e
                }))
            }

            function s(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-jira",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-jira",
                    attributes: e
                }))
            }

            function d(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-linear",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-linear",
                    attributes: e
                }))
            }

            function p(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-box",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-box",
                    attributes: e
                }))
            }

            function u(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-salesforce",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-salesforce",
                    attributes: e
                }))
            }

            function c(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-microsoft-teams",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-microsoft-teams",
                    attributes: e
                }))
            }

            function m(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-sharepoint",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-sharepoint",
                    attributes: e
                }))
            }

            function f(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-web-page",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "external_id_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-web-page",
                    attributes: e
                }))
            }

            function h(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-attachment",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "attachment_id_counter"
                        },
                        attachmentType: {
                            required: !0,
                            values: ["pdf"]
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-attachment",
                    attributes: e
                }))
            }

            function g(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "load-database",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "collection_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "load-database",
                    attributes: e
                }))
            }

            function b(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("load"), t => {
                    let r = (0, a(863025).x3)(t);
                    if (a(300441).Q.isFail(r)) return r;
                    let {
                        id: i,
                        ...o
                    } = t.attributes;
                    if (void 0 === i) return {
                        error: Error("<load> must have an 'id' attribute")
                    };
                    if (Object.keys(o).length > 0) return {
                        error: Error("<load> cannot have any attributes other than 'id'")
                    };
                    let {
                        mapCounterToKey: n
                    } = e;
                    if (!n) return {
                        error: Error("mapCounterToKey is required")
                    };
                    let l = a(683053).tD.mapCounterToKeyInMode({
                        mapCounterToKey: n
                    }, i, "block_counter", "load");
                    if (!l.error) return {
                        value: {
                            type: "observation",
                            tagName: "load-page",
                            attributes: {
                                id: l.value
                            }
                        }
                    };
                    let s = a(683053).tD.mapCounterToKeyInMode({
                        mapCounterToKey: n
                    }, i, "collection_counter", "load");
                    if (!s.error) return {
                        value: {
                            type: "observation",
                            tagName: "load-database",
                            attributes: {
                                id: s.value
                            }
                        }
                    };
                    let d = a(683053).tD.mapCounterToKeyInMode({
                        mapCounterToKey: n
                    }, i, "external_id_counter", "load");
                    if (!d.error) {
                        let e = (0, a(281708).Tq)(d.value);
                        if ("web" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-web-page",
                                attributes: {
                                    id: d.value
                                }
                            }
                        };
                        if ("slack" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-slack",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("google-drive" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-google-drive",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("github" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-github",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("githubCode" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-github-code",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("jira" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-jira",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("linear" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-linear",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("box" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-box",
                                attributes: {
                                    id: (0, a(281708).V9)(d.value)
                                }
                            }
                        };
                        if ("microsoft-teams" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-microsoft-teams",
                                attributes: {
                                    id: d.value
                                }
                            }
                        };
                        if ("sharepoint" === e) return {
                            value: {
                                type: "observation",
                                tagName: "load-sharepoint",
                                attributes: {
                                    id: d.value
                                }
                            }
                        }
                    }
                    return {
                        error: Error(`<load> with id ${i} could must be either a block or database ID.`)
                    }
                })
            }
            a.d(t, {
                Dk: () => w,
                F6: () => d,
                GC: () => l,
                Km: () => v,
                Lh: () => g,
                N3: () => u,
                Nm: () => f,
                Or: () => k,
                Uj: () => c,
                Ut: () => y,
                Wg: () => N,
                XO: () => r,
                aD: () => b,
                d5: () => m,
                dR: () => n,
                lM: () => h,
                w2: () => s,
                xw: () => p,
                yX: () => i,
                zD: () => o
            }), a(16280), a(581454);
            let y = ["notion", "onedrive", ...a(281708).fl, "web"],
                v = ["document", "spreadsheets", "presentation", "pdf", "message", "chat", "thread", "pull-request", "code", "issue", "task", "ticket", "email", "project"],
                k = a(860936).p.map((0, a(863025).RB)({
                    tagName: "search",
                    attributeDefinitions: {
                        question: {
                            required: !0,
                            values: !0
                        },
                        keywords: {
                            required: !0,
                            values: !0
                        },
                        lookback: {
                            required: !1,
                            values: !0
                        },
                        "question-intl": {
                            required: !1,
                            values: !0
                        },
                        channel: {
                            required: !1,
                            values: !0
                        },
                        source: {
                            required: !1,
                            values: !0
                        },
                        sort: {
                            required: !1,
                            values: ["latest"]
                        },
                        database: {
                            required: !1,
                            values: !0
                        },
                        "file-type": {
                            required: !1,
                            values: v
                        },
                        repo: {
                            required: !1,
                            values: !0
                        },
                        [a(418672).HV]: {
                            required: !1,
                            values: ["true"]
                        },
                        contributor: {
                            required: !1,
                            values: !0
                        }
                    },
                    mapCounterToKey: void 0
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "search",
                    attributes: e
                }));
            a(860936).p.map((0, a(863025).RB)({
                tagName: "search",
                attributeDefinitions: {
                    question: {
                        required: !1,
                        values: !0
                    },
                    keywords: {
                        required: !0,
                        values: !0
                    },
                    lookback: {
                        required: !1,
                        values: !0
                    },
                    "question-intl": {
                        required: !1,
                        values: !0
                    },
                    channel: {
                        required: !1,
                        values: !0
                    },
                    source: {
                        required: !1,
                        values: !0
                    },
                    sort: {
                        required: !1,
                        values: ["latest"]
                    },
                    database: {
                        required: !1,
                        values: !0
                    },
                    "file-type": {
                        required: !1,
                        values: v
                    },
                    repo: {
                        required: !1,
                        values: !0
                    },
                    [a(418672).HV]: {
                        required: !1,
                        values: ["true"]
                    },
                    contributor: {
                        required: !1,
                        values: !0
                    }
                },
                mapCounterToKey: void 0
            }), ({
                attributes: e
            }) => ({
                type: "observation",
                tagName: "search",
                attributes: e
            }));
            let w = a(860936).p.map((0, a(863025).RB)({
                    tagName: "search-people",
                    attributeDefinitions: {
                        search: {
                            required: !0,
                            values: !0
                        }
                    },
                    mapCounterToKey: void 0
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "search-people",
                    attributes: e
                })),
                N = a(860936).p.map((0, a(863025).RB)({
                    tagName: "search-databases",
                    attributeDefinitions: {
                        search: {
                            required: !0,
                            values: !0
                        }
                    },
                    mapCounterToKey: void 0
                }), ({
                    attributes: e
                }) => ({
                    type: "observation",
                    tagName: "search-databases",
                    attributes: e
                }))
        },
        860769: (e, t, a) => {
            a.d(t, {
                Z: () => r
            }), a(898992), a(430670);

            function r(e) {
                let {
                    environment: t,
                    sessionContext: r
                } = e, i = r.getAllPendingExecutableOperations();
                if (0 === i.length) return;
                let o = i.flatMap(({
                    operations: e
                }) => e);
                (0, a(418511).gv)({
                    environment: t,
                    operations: o,
                    caches: r.caches,
                    attributionActor: r.attributionActorFromStoreState
                }), (0, a(476325).I)({
                    environment: t,
                    assistantSessionContext: r
                })
            }
        },
        864833: (e, t, a) => {
            a.d(t, {
                V: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    sessionId: r,
                    operationIds: i
                } = e, o = a(838448).default.getSessionContextOrThrow(r);
                o.caches.clear();
                let n = o.clearUncommittedOperations({
                        onlyClearOperationIds: i
                    }),
                    l = 0 === o.uncommittedExecutableOperationsFromStoreState.length,
                    s = (0, a(655404).iL)(n);
                for (let e of n) "addBlockToPage" === e.command && o.evaluatorFromStoreState.state.unmarkPageAsLoaded(e.blockNode.attributes.id);
                return (0, a(860769).Z)({
                    environment: t,
                    sessionContext: o
                }), {
                    allEditsRejected: l,
                    editGroupsThatWereRejected: s
                }
            }
        },
        872654: (e, t, a) => {
            function r(e) {
                return a(860936).p.choice([a(860936).p.try(a(860936).p.mapResult((0, a(863025).U5)("insert-inside"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: "insert-inside",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = (0, a(471242).x)(e),
                        o = (0, a(860936).$d)(a(860936).p.sequence([a(860936).p.choice([i["property-relation"], i["property-person"], i["property-multi-select"]]), a(860936).p.eof(() => new(a(932082)).yd)]), t.children ? ? []);
                    return a(300441).Q.isFail(o) ? o : {
                        value: {
                            type: "effect",
                            tagName: "insert-inside",
                            insertType: "property",
                            attributes: r.value,
                            children: [o.value[0]]
                        }
                    }
                })), a(860936).p.andThen(a(860936).p.lookAhead(a(860936).p.map((0, a(863025).U5)("insert-inside"), t => {
                    let {
                        mapCounterToKey: r
                    } = e;
                    if (!(0, a(722371).O9)(r) || !(0, a(722371).O9)(t.attributes.id)) return !1;
                    let i = (0, a(300441).j)(() => r(t.attributes.id));
                    return !a(300441).Q.isFail(i) && "collection" === i.value.type
                })), t => t ? a(860936).p.mapResult((0, a(863025).U5)("insert-inside"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "collection_counter"
                            }
                        },
                        tagName: "insert-inside",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = (0, a(860936).$d)((0, a(863025).nx)("insert-inside", [(0, a(886508).vj)({
                        allocateIdFn: e.allocateIdFn,
                        allowMove: !0,
                        allowUncited: !1,
                        persisted: !1,
                        mapCounterToKey: e.mapCounterToKey
                    })]), t.children ? ? []);
                    return a(300441).Q.isFail(i) ? i : {
                        value: {
                            type: "effect",
                            tagName: "insert-inside",
                            insertType: "blockIntoDatabase",
                            attributes: r.value,
                            children: i.value
                        }
                    }
                }) : a(860936).p.mapResult((0, a(863025).U5)("insert-inside"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: "insert-inside",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = (0, a(860936).$d)((0, a(863025).nx)("insert-inside", [(0, a(886508).vj)({
                        allocateIdFn: e.allocateIdFn,
                        allowMove: !0,
                        allowUncited: !1,
                        persisted: !1,
                        mapCounterToKey: e.mapCounterToKey
                    })]), t.children ? ? []);
                    return a(300441).Q.isFail(i) ? i : {
                        value: {
                            type: "effect",
                            tagName: "insert-inside",
                            insertType: "block",
                            attributes: r.value,
                            children: i.value
                        }
                    }
                }))])
            }

            function i(e) {
                return t => {
                    let r = a(860936).p.mapResult((0, a(863025).U5)(e), r => {
                            let i = (0, a(863025).ke)({
                                inputAttributes: r.attributes,
                                definitions: {
                                    id: {
                                        required: !0,
                                        values: !0,
                                        mappingMode: "block_counter"
                                    }
                                },
                                tagName: e,
                                mapCounterToKey: t.mapCounterToKey
                            });
                            if (a(300441).Q.isFail(i)) return i;
                            let o = (0, a(860936).$d)((0, a(863025).nx)(e, [(0, a(886508).vj)({
                                allocateIdFn: t.allocateIdFn,
                                allowMove: !0,
                                allowUncited: !1,
                                persisted: !1,
                                mapCounterToKey: t.mapCounterToKey
                            })]), r.children ? ? []);
                            return a(300441).Q.isFail(o) ? o : {
                                value: {
                                    type: "effect",
                                    tagName: e,
                                    insertType: "block",
                                    attributes: i.value,
                                    children: o.value
                                }
                            }
                        }),
                        i = a(860936).p.mapResult((0, a(863025).U5)(e), r => {
                            let i = (0, a(863025).ke)({
                                inputAttributes: r.attributes,
                                definitions: {
                                    id: {
                                        required: !0,
                                        values: !0,
                                        mappingMode: "block_counter"
                                    },
                                    name: {
                                        required: !0,
                                        values: !0
                                    }
                                },
                                tagName: e,
                                mapCounterToKey: t.mapCounterToKey
                            });
                            if (a(300441).Q.isFail(i)) return i;
                            let o = (0, a(344572).D)({
                                    mapCounterToKey: t.mapCounterToKey
                                }),
                                n = (0, a(860936).$d)((0, a(863025).nx)(e, [(0, a(791890).M)(t), o["schema-property-text"]]), r.children ? ? []);
                            return a(300441).Q.isFail(n) ? n : {
                                value: {
                                    type: "effect",
                                    tagName: e,
                                    insertType: "table",
                                    attributes: i.value,
                                    children: n.value
                                }
                            }
                        });
                    return a(860936).p.andThen(a(860936).p.lookAhead(a(860936).p.map(a(860936).p.any(), t => {
                        var r;
                        return "element" === t.type && t.tagName === e && (0, a(722371).O9)(null == (r = t.attributes) ? void 0 : r.name)
                    })), e => e ? i : r)
                }
            }
            a.d(t, {
                C: () => f,
                VY: () => g,
                WR: () => s,
                Y2: () => p,
                ZE: () => c,
                dF: () => o,
                dl: () => d,
                oZ: () => r,
                pf: () => u,
                tl: () => h,
                wT: () => n,
                wq: () => m
            }), a(898992), a(354520), a(581454), a(737550);
            let o = i("insert-before"),
                n = i("insert-after"),
                l = a(860936).p.mapResult((0, a(863025).U5)("action-button"), e => {
                    let t = (0, a(863025).ke)({
                        inputAttributes: e.attributes,
                        definitions: {
                            name: {
                                required: !0,
                                values: !0
                            },
                            icon: {
                                required: !1,
                                values: !0
                            },
                            action: {
                                required: !1,
                                values: !0
                            }
                        },
                        tagName: "action-button",
                        mapCounterToKey: void 0
                    });
                    return a(300441).Q.isFail(t) ? t : {
                        value: {
                            name: t.value.name,
                            icon: t.value.icon,
                            action: t.value.action
                        }
                    }
                }),
                s = a(860936).p.mapResult((0, a(863025).U5)("chat-md"), e => {
                    let t = e.attributes ? Object.keys(e.attributes) : [];
                    if (t.length > 0) return {
                        error: new(a(932082)).LN({
                            tagName: "chat-md",
                            attributeNames: t
                        })
                    };
                    let r = (0, a(860936).$d)((0, a(863025).nx)("chat-md", [a(863025).W6]), e.children ? ? []);
                    return a(300441).Q.isFail(r) ? r : {
                        value: {
                            type: "effect",
                            tagName: "chat-md",
                            text: r.value.map(e => e.value).join("")
                        }
                    }
                });

            function d(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("chat"), t => {
                    let r = t.attributes ? Object.keys(t.attributes) : [];
                    if (r.length > 0) return {
                        error: new(a(932082)).LN({
                            tagName: "chat",
                            attributeNames: r
                        })
                    };
                    let i = (0, a(860936).$d)((0, a(863025).nx)("chat", [(0, a(886508).st)(), (0, a(886508).V8)({
                        allocateIdFn: e.allocateIdFn,
                        allowMove: !1,
                        allowUncited: !0,
                        persisted: !1,
                        mapCounterToKey: e.mapCounterToKey
                    }), a(860936).p.map(l, e => ({
                        type: "action-button",
                        value: e
                    }))]), t.children ? ? []);
                    if (a(300441).Q.isFail(i)) return i;
                    let o = i.value.some(e => "uncited" === e.type),
                        n = i.value.filter(e => "uncited" !== e.type),
                        s = n.filter(e => "block" === e.type),
                        d = n.filter(e => "action-button" === e.type),
                        p = s.some(e => e.hasUncited);
                    return {
                        value: {
                            type: "effect",
                            tagName: "chat",
                            children: s,
                            actionButtons: d.map(e => e.value),
                            uncited: o || p
                        }
                    }
                })
            }

            function p(e) {
                return a(860936).p.choice([a(860936).p.try(a(860936).p.mapResult((0, a(863025).U5)("delete"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: "delete",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = (0, a(863025).x3)(t);
                    return a(300441).Q.isFail(i) ? i : {
                        value: {
                            type: "effect",
                            tagName: "delete",
                            deleteType: "block",
                            attributes: r.value
                        }
                    }
                })), a(860936).p.try(a(860936).p.mapResult((0, a(863025).U5)("delete"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: "delete",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = (0, a(471242).x)(e),
                        o = (0, a(860936).$d)(a(860936).p.sequence([a(860936).p.choice([i["property-relation"], i["property-person"], i["property-multi-select"]]), a(860936).p.eof(() => new(a(932082)).nD)]), t.children ? ? []);
                    return a(300441).Q.isFail(o) ? o : {
                        value: {
                            type: "effect",
                            tagName: "delete",
                            deleteType: "property",
                            attributes: r.value,
                            children: [o.value[0]]
                        }
                    }
                })), a(860936).p.map((0, a(863025).RB)({
                    tagName: "delete",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "block_counter"
                        },
                        name: {
                            required: !0,
                            values: !0
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "effect",
                    tagName: "delete",
                    deleteType: "table-column",
                    attributes: e
                }))])
            }

            function u(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("set-title"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: "set-title",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = (0, a(860936).$d)((0, a(863025).nx)("set-title", [(0, a(180736).Et)({
                        inlineNodesAllowed: a(418672).qI,
                        textAllowed: !0,
                        parentTagName: "set-title",
                        mapCounterToKey: e.mapCounterToKey
                    })]), t.children ? ? []);
                    return a(300441).Q.isFail(i) ? i : {
                        value: {
                            type: "effect",
                            tagName: "set-title",
                            attributes: r.value,
                            children: i.value
                        }
                    }
                })
            }

            function c(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("set-attribute"), t => {
                    let {
                        id: r,
                        ...i
                    } = t.attributes ? ? {};
                    if (!r) return {
                        error: new(a(932082)).HQ({
                            tagName: "set-attribute",
                            attributeName: "id"
                        })
                    };
                    if (!(0, a(683053).D4)(r)) return {
                        error: new(a(932082)).qW("id", r)
                    };
                    let o = e.mapCounterToKey ? a(683053).tD.mapCounterToKeyInMode({
                        mapCounterToKey: e.mapCounterToKey
                    }, r, "block_counter", "set-attribute") : {
                        value: r
                    };
                    if (a(300441).Q.isFail(o)) return o;
                    let n = o.value;
                    if (0 === Object.keys(i).length) return {
                        error: new(a(932082)).Uc
                    };
                    let l = (0, a(863025).x3)(t);
                    return a(300441).Q.isFail(l) ? l : {
                        value: {
                            type: "effect",
                            tagName: "set-attribute",
                            id: n,
                            attributes: Object.entries(i).map(([e, t]) => ({
                                key: e,
                                value: t
                            }))
                        }
                    }
                })
            }

            function m(e) {
                return a(860936).p.map((0, a(863025).RB)({
                    tagName: "set-tag-name",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "block_counter"
                        },
                        "tag-name": {
                            required: !0,
                            values: (0, a(722371).objectKeys)(a(418672).sA)
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "effect",
                    tagName: "set-tag-name",
                    attributes: {
                        id: e.id,
                        newTagName: e["tag-name"]
                    }
                }))
            }

            function f(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("set-property"), t => {
                    let r = (0, a(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !0,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: "set-property",
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (a(300441).Q.isFail(r)) return r;
                    let i = t.children.filter(e => "element" === e.type),
                        o = (0, a(860936).$d)(a(860936).p.map(a(860936).p.sequence([(0, a(471242).Q)(e), a(860936).p.manyTill((0, a(471242).Q)(e), a(860936).p.eof())]), ([e, t]) => [e, ...t]), i);
                    return a(300441).Q.isFail(o) ? o : {
                        value: {
                            type: "effect",
                            tagName: "set-property",
                            attributes: r.value,
                            children: o.value
                        }
                    }
                })
            }

            function h(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("persist-blocks"), t => {
                    let r = t.attributes ? Object.keys(t.attributes) : [];
                    if (r.length > 0) return {
                        error: new(a(932082)).LN({
                            tagName: "persist-blocks",
                            attributeNames: r
                        })
                    };
                    let i = (0, a(860936).$d)((0, a(863025).nx)("persist-blocks", [(0, a(886508).V8)({
                        allocateIdFn: e.allocateIdFn,
                        allowMove: !1,
                        allowUncited: !1,
                        persisted: !1,
                        mapCounterToKey: e.mapCounterToKey
                    })]), t.children ? ? []);
                    return a(300441).Q.isFail(i) ? i : {
                        value: {
                            type: "effect",
                            tagName: "persist-blocks",
                            children: i.value
                        }
                    }
                })
            }

            function g(e) {
                return a(860936).p.mapResult((0, a(863025).U5)("create"), t => {
                    let r = t.attributes ? Object.keys(t.attributes) : [];
                    if (r.length > 0) return {
                        error: new(a(932082)).LN({
                            tagName: "create",
                            attributeNames: r
                        })
                    };
                    let i = (0, a(860936).$d)((0, a(863025).nx)("create", [(0, a(886508).V8)({
                        allocateIdFn: e.allocateIdFn,
                        allowMove: !1,
                        allowUncited: !1,
                        persisted: !1,
                        mapCounterToKey: e.mapCounterToKey
                    })]), t.children ? ? []);
                    return a(300441).Q.isFail(i) ? i : {
                        value: {
                            type: "effect",
                            tagName: "create",
                            children: i.value
                        }
                    }
                })
            }
        },
        945117: (e, t, a) => {
            a.d(t, {
                gO: () => f
            }), a(16280), a(18107), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(967357), a(898992), a(823215), a(354520), a(672577), a(430670), a(581454), a(737550);
            var r = () => a(236242);
            class i {
                didModify = !1;
                modified() {
                    return this.didModify
                }
                markModified() {
                    this.didModify = !0
                }
                resetModified() {
                    this.didModify = !1
                }
                apply(e, t) {
                    return this.resetModified(), this.applyImpl(e, t)
                }
                trimLeadingAndTrailingWhitespace(e) {
                    var t, a;
                    if (0 === e.length) return e;
                    let r = [...e],
                        i = r[0];
                    if ("text" === i.type) {
                        let e = (t = i.value) !== t.trimStart() && "" !== t.trimStart() && " " === t[0] ? ` ${t.trimStart()}` : t.trimStart();
                        "" === e ? (this.markModified(), r.shift()) : e !== i.value && (this.markModified(), r[0] = {
                            type: "text",
                            value: e
                        })
                    }
                    let o = r.at(-1);
                    if ((null == o ? void 0 : o.type) === "text") {
                        let e = (a = o.value) !== a.trimEnd() && "" !== a.trimEnd() && " " === a[a.length - 1] ? `${a.trimEnd()} ` : a.trimEnd();
                        "" === e ? (this.markModified(), r.pop()) : e !== o.value && (this.markModified(), r[r.length - 1] = {
                            type: "text",
                            value: e
                        })
                    }
                    return r
                }
            }

            function o(e) {
                return "text" === e.type || !!a(418672)._S[e.tagName]
            }

            function n(e) {
                return "element" === e.type && !!a(418672).sA[e.tagName]
            }

            function l(e) {
                return "element" === e.type && e.tagName in a(418672).GU
            }
            a(803949);
            var s = a.n(a(42833)),
                d = a.n(a(542922));
            let p = {
                h1: {
                    disableRules: ["list"]
                },
                h2: {
                    disableRules: ["list"]
                },
                h3: {
                    disableRules: ["list"]
                },
                text: {
                    disableRules: []
                },
                uli: {
                    disableRules: ["heading"]
                },
                oli: {
                    disableRules: []
                },
                toggle: {
                    disableRules: []
                },
                quote: {
                    disableRules: []
                },
                todo: {
                    disableRules: []
                }
            };

            function u(e) {
                return "element" === e.type && void 0 !== p[e.tagName]
            }
            class c extends i {
                name = "ConvertMarkdownFormattingToXMLUsingMarkdownIt";
                static REPLACEMENTS = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#46;": ".",
                    "<ul>": "",
                    "</ul>": "",
                    "<li>": "<uli>",
                    "</li>": "</uli>",
                    "<strong>": "<b>",
                    "</strong>": "</b>",
                    "<em>": "<i>",
                    "</em>": "</i>",
                    "<p>": "<text>",
                    "</p>": "</text>",
                    "<br>": "\n",
                    "<br/>": "\n"
                };
                applyImpl(e, t) {
                    return e.flatMap(e => this.convertMarkdownFormattingToXMLUsingMarkdownIt(e))
                }
                convertMarkdownFormattingToXMLUsingMarkdownIt(e) {
                    if ("text" === e.type) return e;
                    if (!u(e)) return { ...e,
                        children: e.children.flatMap(e => this.convertMarkdownFormattingToXMLUsingMarkdownIt(e))
                    }; {
                        let t = (0, r()._o)(e, !1, 0, !0),
                            i = ";!--childPlaceholder--;",
                            o = "\x3c!--childPlaceholder--\x3e",
                            n = "\x3c!--lt--\x3e",
                            l = "\x3c!--gt--\x3e",
                            u = [],
                            m = e.children.map(e => "element" === e.type ? (u.push(e), {
                                type: "text",
                                value: i
                            }) : e).map(e => (0, r()._o)(e, !1, 0, !0)).join("").replaceAll("&lt;", n).replaceAll("&gt;", l).replaceAll(i, o),
                            {
                                disableRules: f
                            } = p[e.tagName],
                            h = (0, a(593430).uY)({
                                markdown: m,
                                LinkifyIt: s(),
                                MarkdownIt: d(),
                                options: {
                                    breaks: !0
                                },
                                disable: ["newline", ...f]
                            }).replace(/\n+/g, "\n").replace(/>\n+</g, "><").replace(/>\n$/, ">").replace(/^\n/, "");
                        for (let [e, t] of Object.entries(c.REPLACEMENTS)) h = h.replaceAll(e, t);
                        h = h.replace(RegExp(o, "g"), () => {
                            let e = u.shift();
                            return e ? (0, r()._o)(e, !1, 0, !0) : ""
                        }).replaceAll(n, "&lt;").replaceAll(l, "&gt;");
                        let g = (0, r().BD)(h);
                        1 === g.length && "element" === g[0].type && "text" === g[0].tagName && (g = g[0].children);
                        let b = { ...e,
                            children: g
                        };
                        return t !== (0, r()._o)(b, !1, 0, !0) && this.markModified(), b
                    }
                }
            }
            class m extends i {
                name = "CollapseRedundantParentTags";
                static collapseRules = [
                    ["oli", ["uli", "oli"]],
                    ["uli", ["hx", "uli"]],
                    ["hx", ["hx", "oli"]],
                    ["hx", ["hx", "text"]],
                    ["text", ["text", "text"]],
                    ["b", ["b", "b"]],
                    ["uli", ["text", "uli"]],
                    ["uli", ["uli", "text"]],
                    ["oli", ["text", "oli"]],
                    ["oli", ["oli", "text"]],
                    ["toggle", ["toggle", "text"]],
                    ["quote", ["quote", "text"]],
                    ["todo", ["todo", "text"]],
                    ["oli", ["oli", "text"]]
                ];
                applyImpl(e, t) {
                    return e.flatMap(e => this.collapseRedundantParentTags(e))
                }
                collapseRedundantParentTags(e) {
                    return "text" === e.type ? e : u(e) ? this.generalCollapse(e) : { ...e,
                        children: e.children.map(e => this.collapseRedundantParentTags(e))
                    }
                }
                generalCollapse(e) {
                    if ("element" === e.type) {
                        for (let [t, [a, r]] of m.collapseRules)
                            if (("hx" === a ? /^h[1-3]$/.test(e.tagName) : e.tagName === a) && 1 === e.children.length && "element" === e.children[0].type) {
                                let a = e.children[0],
                                    i = "hx" === r ? /^h[1-3]$/.test(a.tagName) : a.tagName === r;
                                if ("element" === a.type && i) return this.markModified(), { ...a,
                                    tagName: "hx" === t ? e.tagName : t,
                                    attributes: { ...e.attributes,
                                        ...a.attributes
                                    }
                                }
                            }
                        return { ...e,
                            children: e.children.map(e => this.generalCollapse(e))
                        }
                    }
                    return e
                }
            }

            function f(e, t, a) {
                let {
                    nodes: i
                } = function({
                    xmlNodes: e,
                    state: t,
                    debug: a = !1,
                    autoFixerNamesToSkip: i
                }) {
                    let o = "",
                        n = "",
                        l = [],
                        s = new Set(i ? ? []),
                        d = g.filter(e => !s.has(e.name));
                    for (let i of d) a && (o = e.map(e => (0, r()._o)(e)).join("")), e = i.apply(e, t), a && i.modified() && (n = e.map(e => (0, r()._o)(e)).join(""), l.push({
                        name: i.name,
                        before: o,
                        after: n
                    }));
                    return {
                        nodes: e,
                        activeAutoFixerNames: d.filter(e => e.modified()).map(e => e.name),
                        debugLogs: l
                    }
                }({
                    xmlNodes: e,
                    state: t,
                    debug: !1,
                    autoFixerNamesToSkip: a
                });
                return i
            }
            class h extends i {
                name = "RemoveDisallowedBlocks";
                static removeBlockTagNames = {
                    "database-views": !0
                };
                applyImpl(e, t) {
                    return e.flatMap(e => this.removeDisallowedBlocks(e))
                }
                removeDisallowedBlocks(e) {
                    return "element" !== e.type ? [e] : h.removeBlockTagNames[e.tagName] ? (this.markModified(), []) : [{ ...e,
                        children: e.children.flatMap(e => this.removeDisallowedBlocks(e))
                    }]
                }
            }
            let g = [new class extends i {
                name = "CleanupSearchTags";
                applyImpl(e, t) {
                    return e.map(e => this.cleanupSearchTags(e))
                }
                cleanupSearchTags(e) {
                    if ("element" !== e.type || "search" !== e.tagName) return e;
                    let t = Object.fromEntries(Object.entries(e.attributes).map(([e, t]) => {
                        if ("question" === e || "keywords" === e || "question-intl" === e) return [e, t];
                        if ("source" === e) return a(800277).Ut.includes(t) ? ["source", t] : void this.markModified();
                        if ("lookback" === e) return ["lookback", t];
                        if ("channel" === e) return ["channel", t];
                        if ("sort" === e) return ["sort", t];
                        else if ("file-type" === e) return a(800277).Km.includes(t) ? ["file-type", t] : void this.markModified();
                        else if ("contributor" === e) return ["contributor", t];
                        else if ("repo" === e) return ["repo", t];
                        else if ("database" === e) return ["database", t];
                        else if ("database-id" === e) return this.markModified(), ["database", t];
                        else if ("search-notion-help" !== e) return void this.markModified();
                        else if ("true" === t) return ["search-notion-help", "true"];
                        else return void this.markModified()
                    }).filter(e => void 0 !== e));
                    return { ...e,
                        attributes: t
                    }
                }
            }, new class extends i {
                name = "CitationATagInnerTextRemover";
                applyImpl(e, t) {
                    return e.map(e => "element" === e.type && "chat" === e.tagName ? { ...e,
                        children: e.children.flatMap(e => this.ensureCitationATagsHaveNoInnerText(e))
                    } : e)
                }
                ensureCitationATagsHaveNoInnerText(e) {
                    if ("element" !== e.type) return [e]; {
                        if ("a" === e.tagName) {
                            let t = e.attributes.href;
                            if (t && /^[0-9]+$/.test(t)) {
                                e.children.length > 0 && this.markModified();
                                let t = e.children.flatMap(e => this.ensureCitationATagsHaveNoInnerText(e));
                                return e.children = [], [...t, e]
                            }
                        }
                        let {
                            children: t,
                            ...a
                        } = e;
                        return [{ ...a,
                            children: t.flatMap(e => this.ensureCitationATagsHaveNoInnerText(e))
                        }]
                    }
                }
            }, new class extends i {
                name = "MarkdownInlineNodeConverter";
                applyImpl(e, t) {
                    return e.map(e => "element" === e.type && "chat" === e.tagName ? { ...e,
                        children: e.children.flatMap(e => this.convertInlineMarkdownToXML(e, []))
                    } : e)
                }
                convertInlineMarkdownToXML(e, t) {
                    let a = t.some(e => "element" === e.type && ("code-block" === e.tagName || "code" === e.tagName || "math-block" === e.tagName));
                    if ("text" !== e.type || a)
                        if ("element" === e.type) return [{ ...e,
                            children: e.children.flatMap(a => this.convertInlineMarkdownToXML(a, [...t, e]))
                        }];
                        else return [e]; {
                        let t, a = /(\*\*|~~|\*|`)(.+?)\1/g,
                            r = [],
                            i = 0;
                        for (; null !== (t = a.exec(e.value));) {
                            let o, [n, l, s] = t,
                                d = e.value.slice(i, t.index);
                            switch (d && r.push({
                                type: "text",
                                value: d
                            }), l) {
                                case "**":
                                    o = {
                                        type: "element",
                                        tagName: "b",
                                        attributes: {},
                                        children: [{
                                            type: "text",
                                            value: s
                                        }]
                                    };
                                    break;
                                case "*":
                                    o = {
                                        type: "element",
                                        tagName: "i",
                                        attributes: {},
                                        children: [{
                                            type: "text",
                                            value: s
                                        }]
                                    };
                                    break;
                                case "`":
                                    o = {
                                        type: "element",
                                        tagName: "code",
                                        attributes: {},
                                        children: [{
                                            type: "text",
                                            value: s
                                        }]
                                    };
                                    break;
                                case "~~":
                                    o = {
                                        type: "element",
                                        tagName: "s",
                                        attributes: {},
                                        children: [{
                                            type: "text",
                                            value: s
                                        }]
                                    }
                            }
                            if (!o) throw Error("Unreachable");
                            r.push(o), this.markModified(), i = a.lastIndex
                        }
                        let o = e.value.slice(i);
                        return o && r.push({
                            type: "text",
                            value: o
                        }), r
                    }
                }
            }, new class extends i {
                name = "ConvertUnicodeBulletsToUlis";
                applyImpl(e, t) {
                    return e.map(e => this.convertUnicodeBulletsToUlis(e, !1))
                }
                convertUnicodeBulletsToUlis(e, t) {
                    if ("text" === e.type) {
                        let a = e.value.trim();
                        if (a.startsWith("•")) {
                            this.markModified();
                            let e = a.replaceAll("•", "").trim();
                            return t ? {
                                type: "text",
                                value: e
                            } : {
                                type: "element",
                                tagName: "uli",
                                attributes: {},
                                children: [{
                                    type: "text",
                                    value: e
                                }]
                            }
                        }
                        return e
                    }
                    let a = "uli" === e.tagName || "oli" === e.tagName;
                    return { ...e,
                        children: e.children.map(e => this.convertUnicodeBulletsToUlis(e, a))
                    }
                }
            }, new class extends i {
                name = "TagNameMapper";
                inlineTagNameMap = {
                    strong: "b",
                    p: "text",
                    span: "inline",
                    sub: "inline",
                    sup: "inline"
                };
                applyImpl(e, t) {
                    return e = (e = e.flatMap(e => this.mapTagNames(e, this.inlineTagNameMap))).map(e => "element" === e.type && "chat" === e.tagName ? { ...e,
                        children: e.children.flatMap(e => this.mapTagNames(e, {
                            chat: "text"
                        }))
                    } : e)
                }
                mapTagNames(e, t) {
                    if ("element" !== e.type) return e; {
                        let a = t[e.tagName.toLowerCase()];
                        if (void 0 !== a && this.markModified(), "inline" === a) return {
                            type: "text",
                            value: e.children.map(e => "text" === e.type ? e.value : "").join("")
                        };
                        let r = a || e.tagName;
                        return { ...e,
                            tagName: r,
                            children: e.children.map(e => this.mapTagNames(e, t))
                        }
                    }
                }
            }, new class extends i {
                name = "DowngradeBlocksToTextInSimpleTables";
                applyImpl(e, t) {
                    return e.map(e => this.downgradeBlocksToTextInSimpleTables(e))
                }
                downgradeBlocksToTextInSimpleTables(e) {
                    return "text" === e.type ? e : "table" === e.tagName ? { ...e,
                        children: e.children.flatMap(e => this.maybeConvertToInlineNode(e))
                    } : { ...e,
                        children: e.children.map(e => this.downgradeBlocksToTextInSimpleTables(e))
                    }
                }
                maybeConvertToInlineNode(e) {
                    if ("text" === e.type || o(e)) return [e];
                    if ("text" === e.tagName || "h2" === e.tagName || "h1" === e.tagName || "h3" === e.tagName || "quote" === e.tagName || "todo" === e.tagName || "toggle" === e.tagName || "callout" === e.tagName || "code-block" === e.tagName || "math-block" === e.tagName) return this.markModified(), e.children.flatMap(e => this.maybeConvertToInlineNode(e));
                    if ("uli" === e.tagName || "oli" === e.tagName) {
                        let t = e.children.flatMap(e => this.maybeConvertToInlineNode(e));
                        return this.markModified(), [{
                            type: "text",
                            value: "· "
                        }, ...t]
                    } {
                        let t = e.children.flatMap(e => this.maybeConvertToInlineNode(e));
                        return [{ ...e,
                            children: t
                        }]
                    }
                }
            }, new class extends i {
                name = "TrimLinesBetweenBrTags";
                applyImpl(e, t) {
                    return e.map(e => this.trimLinesBetweenBrTags(e))
                }
                trimLinesBetweenBrTags(e) {
                    if ("element" === e.type)
                        if (!e.children.some(e => "element" === e.type && "br" === e.tagName)) return { ...e,
                            children: e.children.map(e => this.trimLinesBetweenBrTags(e))
                        };
                        else {
                            let t = e.children.map(e => {
                                if ("text" === e.type) {
                                    let t = e.value.trim();
                                    return t !== e.value ? (this.markModified(), {
                                        type: "text",
                                        value: t
                                    }) : e
                                }
                                return this.trimLinesBetweenBrTags(e)
                            });
                            return { ...e,
                                children: t
                            }
                        }
                    return e
                }
            }, new class extends i {
                name = "ConvertBrToNewline";
                applyImpl(e, t) {
                    return e.flatMap(e => this.convertBrToNewline(e))
                }
                convertBrToNewline(e) {
                    return "element" !== e.type ? [e] : "br" === e.tagName ? (this.markModified(), [{
                        type: "text",
                        value: "\n"
                    }]) : [{ ...e,
                        children: e.children.flatMap(e => this.convertBrToNewline(e))
                    }]
                }
            }, new class extends i {
                name = "RemoveTopLevelWhitespace";
                applyImpl(e, t) {
                    return e.flatMap(e => "text" === e.type ? (this.markModified(), []) : [e])
                }
            }, new class extends i {
                name = "ClampHeaderLevel";
                headerRegex = /^h(\d+)$/;
                applyImpl(e, t) {
                    return e.map(e => this.clampHeaderLevel(e))
                }
                clampHeaderLevel(e) {
                    if ("element" !== e.type) return e;
                    let t = e.tagName,
                        a = e.tagName.match(this.headerRegex);
                    return a && parseInt(a[1], 10) > 3 && (this.markModified(), t = "h3"), { ...e,
                        tagName: t,
                        children: e.children.map(e => this.clampHeaderLevel(e))
                    }
                }
            }, new class extends i {
                name = "TextWrapTopLevelInlineNodes";
                applyImpl(e, t) {
                    return e.map(e => "element" === e.type && ("chat" === e.tagName || "insert" === e.tagName || "insert-before" === e.tagName || "insert-after" === e.tagName || "create-page" === e.tagName || "replace" === e.tagName) ? this.textWrapTopLevelInlineNodes(e) : e)
                }
                textWrapTopLevelInlineNodes(e) {
                    if ("element" !== e.type) return e; {
                        let t = [],
                            r = this.trimLeadingAndTrailingWhitespace(e.children),
                            i = e => {
                                if (e && "element" === e.type && function(e) {
                                        if ("element" !== e.type) return !1;
                                        let t = a(418672).sA[e.tagName];
                                        return void 0 !== t && !0 === t.title
                                    }(e)) {
                                    let t = e.children.at(-1);
                                    return !t || o(t)
                                }
                                return !1
                            };
                        for (let e of r)
                            if (o(e)) {
                                this.markModified();
                                let a = t.at(-1);
                                (null == a ? void 0 : a.type) === "element" && i(a) ? a.children.push(e) : t.push({
                                    type: "element",
                                    tagName: "text",
                                    attributes: {},
                                    children: [e]
                                })
                            } else t.push(e);
                        return { ...e,
                            children: t
                        }
                    }
                }
            }, new class extends i {
                name = "SanitizeTextNodes";
                applyImpl(e, t) {
                    let i = e.map(e => (0, r()._o)(e)).join(""),
                        o = a(381453).oE(e.map(e => this.sanitizeTextNodes(e)));
                    return i === (0, r().PJ)(o) || this.modified() || this.markModified(), o
                }
                sanitizeTextNodes(e) {
                    if ("element" === e.type)
                        if ((0, a(722371).O)(a(418672).sA, e.tagName) && a(418672).sA[e.tagName].title) {
                            let t = !1,
                                a = [...e.children],
                                r = [],
                                i = [];
                            for (; a.length > 0;) {
                                let e = a.shift();
                                if (o(e))
                                    if (t) {
                                        let t = [e];
                                        for (; a.length > 0 && o(a[0]);) t.push(a.shift());
                                        let i = this.trimLeadingAndTrailingWhitespace(t);
                                        i.length > 0 && r.push({
                                            type: "element",
                                            tagName: "text",
                                            attributes: {},
                                            children: i
                                        })
                                    } else i.push(e);
                                else {
                                    let a = this.sanitizeTextNodes(e);
                                    a && r.push(a), t = !0
                                }
                            }
                            let n = [...this.trimLeadingAndTrailingWhitespace(i), ...r];
                            return { ...e,
                                children: n
                            }
                        } else if ((0, a(722371).O)(a(418672).GU, e.tagName)) return { ...e,
                        children: this.trimLeadingAndTrailingWhitespace(e.children)
                    };
                    else return { ...e,
                        children: e.children ? a(381453).oE(e.children.map(e => this.sanitizeTextNodes(e))) : []
                    }; {
                        let t = e.value.trim();
                        if (t)
                            if (t !== e.value) return { ...e,
                                value: t
                            };
                            else return e
                    }
                }
            }, new class extends i {
                name = "WrapNodesWithRequiredParent";
                wrapNodesMap = {
                    td: "tr",
                    tr: "table"
                };
                applyImpl(e, t) {
                    return e.map(e => this.wrapNodesWithRequiredParent(e))
                }
                wrapNodesWithRequiredParent(e) {
                    if ("element" === e.type) {
                        let t = e;
                        for (let r of (0, a(722371).objectKeys)(this.wrapNodesMap)) t.tagName !== this.wrapNodesMap[r] && e.children.some(e => "element" === e.type && e.tagName === r) && (this.markModified(), t = { ...e,
                            children: [{
                                type: "element",
                                tagName: this.wrapNodesMap[r],
                                attributes: {},
                                children: e.children
                            }]
                        });
                        return { ...t,
                            children: t.children.map(e => this.wrapNodesWithRequiredParent(e))
                        }
                    }
                    return e
                }
            }, new class extends i {
                name = "RemoveNonTitleProperties";
                applyImpl(e, t) {
                    return e = e.flatMap(e => "element" !== e.type || ("create-page" !== e.tagName || e.attributes.in) && "replace" !== e.tagName ? [e] : this.removeNonTitleProperties(e))
                }
                removeNonTitleProperties(e) {
                    return "element" !== e.type ? [e] : e.tagName.startsWith("property-") && "property-title" !== e.tagName ? (this.markModified(), []) : [{ ...e,
                        children: e.children.flatMap(e => this.removeNonTitleProperties(e))
                    }]
                }
            }, new class extends i {
                name = "RemoveUnsupportedProperties";
                applyImpl(e, t) {
                    return e.flatMap(e => this.removeUnsupportedProperties(e))
                }
                removeUnsupportedProperties(e) {
                    return "element" !== e.type ? [e] : "property-created-time" === e.tagName || "property-last-edited-time" === e.tagName || "property-created-by" === e.tagName || "property-last-edited-by" === e.tagName ? (this.markModified(), []) : [{ ...e,
                        children: e.children.flatMap(e => this.removeUnsupportedProperties(e))
                    }]
                }
            }, new class extends i {
                name = "UnwrapHTMLLists";
                applyImpl(e, t) {
                    return e.flatMap(e => this.unwrapHTMLLists(e, void 0))
                }
                unwrapHTMLLists(e, t) {
                    return "element" !== e.type ? [e] : "ul" === e.tagName || "ol" === e.tagName ? (this.markModified(), e.children.flatMap(t => this.unwrapHTMLLists(t, e.tagName))) : "li" === e.tagName ? (this.markModified(), [{ ...e,
                        tagName: "ol" === t ? "oli" : "uli",
                        children: e.children.flatMap(e => this.unwrapHTMLLists(e, t))
                    }]) : [{ ...e,
                        children: e.children.flatMap(e => this.unwrapHTMLLists(e, t))
                    }]
                }
            }, new class extends i {
                name = "RemoveBlockIds";
                applyImpl(e, t) {
                    return e.map(e => this.removeBlockIds(e))
                }
                removeBlockIds(e) {
                    if ("element" !== e.type) return e;
                    if (!n(e) || "unknown-block" === e.tagName) return { ...e,
                        children: e.children.map(e => this.removeBlockIds(e))
                    }; {
                        e.attributes.id && this.markModified();
                        let t = a(381453).cJ(e.attributes, "id");
                        return { ...e,
                            attributes: t,
                            children: e.children.map(e => this.removeBlockIds(e))
                        }
                    }
                }
            }, new class extends i {
                name = "FixCodeBlockLanguage";
                applyImpl(e, t) {
                    return e.map(e => this.fixCodeBlockLanguage(e))
                }
                fixCodeBlockLanguage(e) {
                    if ("element" !== e.type) return e;
                    if ("code-block" === e.tagName) {
                        let t = e.attributes.language;
                        if (t && !a(656974).yz.includes(t)) {
                            this.markModified();
                            let t = a(381453).cJ(e.attributes, "language");
                            return { ...e,
                                attributes: t,
                                children: e.children.map(e => this.fixCodeBlockLanguage(e))
                            }
                        }
                    }
                    return { ...e,
                        children: e.children.map(e => this.fixCodeBlockLanguage(e))
                    }
                }
            }, new class extends i {
                name = "TransformTopLevelApisInCreatePageToCreatePage";
                applyImpl(e, t) {
                    return e.map(e => this.transformTopLevelApisInCreatePageToCreatePage(e))
                }
                transformTopLevelApisInCreatePageToCreatePage(e) {
                    let t = ["page", "insert"];
                    if ("element" === e.type && "create-page" === e.tagName) {
                        let a, r = [];
                        for (let i of e.children) "element" === i.type && t.includes(i.tagName) ? (a || (a = i), r = [...r, ...i.children]) : r.push(i);
                        return a ? (this.markModified(), {
                            type: "element",
                            tagName: "create-page",
                            attributes: { ...a.attributes,
                                ...e.attributes.in && { in: e.attributes.in
                                }
                            },
                            children: r
                        }) : e
                    }
                    return e
                }
            }, new class extends i {
                name = "UnwrapPages";
                applyImpl(e, t) {
                    return e.flatMap(e => "element" === e.type && ("insert" === e.tagName || "chat" === e.tagName) ? this.unwrapPages(e) : [e])
                }
                unwrapPages(e) {
                    return "element" !== e.type ? [e] : "page" === e.tagName || "child-page" === e.tagName ? (this.markModified(), e.children.flatMap(e => this.unwrapPages(e))) : [{ ...e,
                        children: e.children.flatMap(e => this.unwrapPages(e))
                    }]
                }
            }, new class extends i {
                name = "RemoveProperties";
                applyImpl(e, t) {
                    return e.map(e => "element" === e.type && ("insert" === e.tagName || "chat" === e.tagName) ? this.removeProperties(e) : e)
                }
                removeProperties(e) {
                    if ("text" === e.type) return e;
                    if (!e.children.some(l)) return { ...e,
                        children: e.children.map(e => this.removeProperties(e))
                    }; {
                        let t = e.children.flatMap(t => "element" !== e.type ? [t] : l(t) ? (this.markModified(), "property-title" === t.tagName) ? [{
                            type: "element",
                            attributes: {},
                            tagName: "h1",
                            children: t.children
                        }] : [] : [t]);
                        return { ...e,
                            children: t.map(e => this.removeProperties(e))
                        }
                    }
                }
            }, new class extends i {
                name = "MoveCreatePageInChatToTopLevel";
                applyImpl(e, t) {
                    return e.flatMap(e => this.moveCreatePageInChatToTopLevel(e))
                }
                moveCreatePageInChatToTopLevel(e) {
                    if ("element" !== e.type || "chat" !== e.tagName) return [e]; {
                        let t = e.children.filter(e => "element" === e.type && "create-page" === e.tagName);
                        if (0 === t.length) return [e];
                        this.markModified();
                        let a = e.children.filter(e => !t.includes(e));
                        return [{ ...e,
                            children: a
                        }, ...t]
                    }
                }
            }, new class extends i {
                name = "MoveTopLevelCreateOrPageToCreatePage";
                applyImpl(e, t) {
                    return e.map(e => this.moveTopLevelCreateOrPageToCreatePage(e))
                }
                moveTopLevelCreateOrPageToCreatePage(e) {
                    return "element" === e.type && "page" === e.tagName ? (this.markModified(), {
                        type: "element",
                        tagName: "create-page",
                        attributes: {},
                        children: e.children
                    }) : "element" !== e.type || "create" !== e.tagName ? e : 1 === e.children.length && "element" === e.children[0].type && "page" === e.children[0].tagName ? (this.markModified(), {
                        type: "element",
                        tagName: "create-page",
                        attributes: {},
                        children: e.children[0].children
                    }) : e
                }
            }, new class extends i {
                name = "ConvertUliWithNumberToOli";
                applyImpl(e, t) {
                    return e.map(e => this.convertUliWithNumberToOli(e))
                }
                convertUliWithNumberToOli(e) {
                    if ("text" === e.type) return e;
                    if ("uli" !== e.tagName) return { ...e,
                        children: e.children.map(e => this.convertUliWithNumberToOli(e))
                    }; {
                        let t = (e.children.length > 0 && "text" === e.children[0].type ? e.children[0].value : "").match(/^(\d+)\.\s(.*)$/);
                        if (t) {
                            let a = [...e.children.slice(1)];
                            "" !== t[2] && a.unshift({
                                type: "text",
                                value: t[2]
                            }), e = {
                                type: "element",
                                tagName: "oli",
                                attributes: {
                                    index: t[1]
                                },
                                children: a
                            }, this.markModified()
                        }
                        return e
                    }
                }
            }, new c, new class extends i {
                name = "ConvertOlUliToOli";
                applyImpl(e, t) {
                    return e.map(e => this.convertOl(e))
                }
                convertOl(e) {
                    return "text" === e.type ? e : u(e) ? (e = this.convertOlUliToOli(e), e = this.removeToDeleteNodes(e)) : { ...e,
                        children: e.children.map(e => this.convertOl(e))
                    }
                }
                convertOlUliToOli(e) {
                    if ("element" === e.type && "ol" === e.tagName) {
                        let t = e.children.filter(e => "element" === e.type && "uli" === e.tagName),
                            a = e.children.filter(e => "element" !== e.type || "uli" !== e.tagName);
                        return { ...e,
                            tagName: "toDelete",
                            children: [...t.map(t => {
                                var a;
                                return { ...t,
                                    tagName: "oli",
                                    attributes: {
                                        index: null == (a = e.attributes) ? void 0 : a.start
                                    }
                                }
                            }), ...a]
                        }
                    }
                    return "element" === e.type ? { ...e,
                        children: e.children.map(e => this.convertOlUliToOli(e))
                    } : e
                }
                removeToDeleteNodes(e) {
                    if ("element" === e.type) {
                        let t = [];
                        return e.children.forEach(e => {
                            "element" === e.type && "toDelete" === e.tagName ? (this.markModified(), t = t.concat(e.children)) : t.push(this.removeToDeleteNodes(e))
                        }), { ...e,
                            children: t
                        }
                    }
                    return e
                }
            }, new class extends i {
                name = "ConvertTextChildrenOfListItems";
                applyImpl(e, t) {
                    return e.flatMap(e => this.convertTextChildrenOfListItems(e))
                }
                convertTextChildrenOfListItems(e) {
                    return "text" === e.type ? e : "oli" === e.tagName || "uli" === e.tagName || "quote" === e.tagName ? { ...e,
                        children: e.children.flatMap(e => "element" === e.type && "text" === e.tagName ? (this.markModified(), e.children) : e)
                    } : { ...e,
                        children: e.children.map(e => this.convertTextChildrenOfListItems(e))
                    }
                }
            }, new class extends i {
                name = "UnwrapEmptyBlocks";
                applyImpl(e, t) {
                    return e.flatMap(e => this.unwrapEmptyBlocks(e))
                }
                unwrapEmptyBlocks(e) {
                    return "element" !== e.type ? [e] : e.children.every(e => n(e)) && ("uli" === e.tagName || "oli" === e.tagName || "text" === e.tagName || "toggle" === e.tagName || "quote" === e.tagName) ? (this.markModified(), e.children.flatMap(e => this.unwrapEmptyBlocks(e))) : [{ ...e,
                        children: e.children.flatMap(e => this.unwrapEmptyBlocks(e))
                    }]
                }
            }, new m, new class extends i {
                name = "RemoveATargetAttribute";
                applyImpl(e, t) {
                    return e.map(e => this.removeATargetAttribute(e))
                }
                removeATargetAttribute(e) {
                    if ("element" !== e.type || "a" !== e.tagName || !e.attributes.target) return e; {
                        let t = a(381453).cJ(e.attributes, "target");
                        return { ...e,
                            attributes: t,
                            children: e.children.map(e => this.removeATargetAttribute(e))
                        }
                    }
                }
            }, new class extends i {
                name = "UnwrapSyncedBlocks";
                applyImpl(e, t) {
                    return e.flatMap(e => this.unwrapSyncedBlocks(e))
                }
                unwrapSyncedBlocks(e) {
                    return "element" !== e.type ? [e] : "synced-block-reference" === e.tagName || "synced-block" === e.tagName ? (this.markModified(), e.children.flatMap(e => this.unwrapSyncedBlocks(e))) : [{ ...e,
                        children: e.children.flatMap(e => this.unwrapSyncedBlocks(e))
                    }]
                }
            }, new h, new class extends i {
                name = "ConvertToggleToUli";
                applyImpl(e, t) {
                    return e = e.map(e => "element" === e.type && "chat" === e.tagName ? this.convertToggleToUli(e) : e)
                }
                convertToggleToUli(e) {
                    return "element" !== e.type ? e : "toggle" === e.tagName ? (this.markModified(), { ...e,
                        tagName: "uli",
                        attributes: {},
                        children: e.children.map(e => this.convertToggleToUli(e))
                    }) : { ...e,
                        children: e.children.map(e => this.convertToggleToUli(e))
                    }
                }
            }, new class extends i {
                name = "UnwrapBlocksInProperties";
                applyImpl(e, t) {
                    return e.flatMap(e => this.unwrapBlocksInProperties(e))
                }
                unwrapBlocksInProperties(e) {
                    return "element" !== e.type ? [e] : l(e) ? [{ ...e,
                        children: e.children.flatMap(e => this.unwrapBlocks(e))
                    }] : [{ ...e,
                        children: e.children.flatMap(e => this.unwrapBlocksInProperties(e))
                    }]
                }
                unwrapBlocks(e) {
                    return "element" !== e.type ? [e] : n(e) ? (this.markModified(), [...e.children.flatMap(e => this.unwrapBlocks(e)), {
                        type: "text",
                        value: "\n"
                    }]) : [{ ...e,
                        children: e.children.flatMap(e => this.unwrapBlocks(e))
                    }]
                }
            }, new class extends i {
                name = "JoinAdjacentTextNodes";
                applyImpl(e, t) {
                    return e.map(e => this.joinAdjacentTextNodes(e))
                }
                joinAdjacentTextNodes(e) {
                    if ("text" === e.type) return e;
                    let t = [];
                    for (let a of e.children) {
                        let e = t.at(-1);
                        "text" === a.type && e && "text" === e.type && "" !== a.value ? (this.markModified(), t[t.length - 1] = {
                            type: "text",
                            value: e.value + a.value
                        }) : t.push(this.joinAdjacentTextNodes(a))
                    }
                    return { ...e,
                        children: t
                    }
                }
            }, new class extends i {
                name = "TruncateSearches";
                applyImpl(e, t) {
                    return this.truncateSearches(e)
                }
                truncateSearches(e) {
                    let t = 0;
                    return e.flatMap(e => "element" !== e.type || "search" !== e.tagName ? [e] : t < 3 ? (t += 1, [e]) : (this.markModified(), []))
                }
            }, new class extends i {
                name = "FillEmptyQueryDatabaseWithEmptySearch";
                applyImpl(e, t) {
                    return e.map(e => this.fillEmptyQueryDatabaseWithEmptySearch(e))
                }
                fillEmptyQueryDatabaseWithEmptySearch(e) {
                    return "element" !== e.type || "query-database" !== e.tagName || e.children.length > 0 ? e : (this.markModified(), { ...e,
                        children: [{
                            type: "element",
                            tagName: "search",
                            attributes: {
                                question: "",
                                keywords: "",
                                lookback: "default"
                            },
                            children: []
                        }]
                    })
                }
            }, new class extends i {
                name = "RemoveExtraSearchNotionHelpAttributes";
                applyImpl(e, t) {
                    let a = e.map(e => (0, r()._o)(e)).join(""),
                        i = this.removeExtraSearchNotionHelpAttributes(e);
                    return a !== i.map(e => (0, r()._o)(e)).join("") && this.markModified(), i
                }
                removeExtraSearchNotionHelpAttributes(e) {
                    let t = !1;
                    return e.map(e => ("element" === e.type && "search" === e.tagName && a(418672).HV in e.attributes && (t ? (this.markModified(), delete e.attributes[(0, a(418672)).HV]) : t = !0), e))
                }
            }, new class extends i {
                name = "AutofixTypesInDatabaseQueryOutput";
                applyImpl(e, t) {
                    return t ? e.map(e => this.autofixTypesInDatabaseQueryOutput(e, t)) : e
                }
                autofixTypesInDatabaseQueryOutput(e, t) {
                    var r;
                    if ("element" !== e.type || "query-database" !== e.tagName) return e;
                    let i = e.attributes.id;
                    if (!i) return e;
                    let o = null == (r = t.idMapper.keyMap.find(e => e.counter === i)) ? void 0 : r.key;
                    if (!o) return e;
                    let n = t.collectionIdMap[o.key];
                    return n ? function e(t, r) {
                        let i = r(t);
                        return "element" === i.type ? { ...i,
                            children: i.children.map(t => e(t, r)).filter(a(722371).O9)
                        } : i
                    }(e, e => this.fixQueryDatabaseFilterSortTypes(e, n.schemas)) : e
                }
                fixQueryDatabaseFilterSortTypes(e, t) {
                    if ("element" !== e.type) return e;
                    let a = e.tagName.startsWith("filter"),
                        r = e.tagName.startsWith("sort");
                    if (!a && !r) return e;
                    let i = e.attributes.name,
                        o = Object.entries(t).filter(([e, t]) => e === i).map(([e, t]) => t.tagName.replace(/^schema-property-/, "")),
                        n = e.tagName.replace(/^(filter|sort)-property-/, "");
                    return 0 === o.length || o.includes(n) ? e : (this.markModified(), { ...e,
                        tagName: `${a?"filter":"sort"}-property-${o[0]}`
                    })
                }
            }, new class extends i {
                name = "CollapseTableSectionTags";
                applyImpl(e, t) {
                    return e.flatMap(e => this.collapseTableSectionTags(e))
                }
                collapseTableSectionTags(e) {
                    return "element" === e.type ? "thead" === e.tagName || "tbody" === e.tagName || "tfoot" === e.tagName ? (this.markModified(), e.children.flatMap(e => this.collapseTableSectionTags(e))) : [{ ...e,
                        children: e.children.flatMap(e => this.collapseTableSectionTags(e))
                    }] : [e]
                }
            }]
        }
    }
]);