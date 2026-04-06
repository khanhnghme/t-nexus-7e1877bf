"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [41485], {
        64287: (e, t, i) => {
            i.r(t), i.d(t, {
                handlePeekStateUpdate: () => a
            });

            function a(e) {
                var t, a;
                let o, r, d, {
                    environment: l,
                    route: n,
                    query: s
                } = e;
                if (i(986939).A.isMobile) return;
                let c = i(475097).default.state,
                    p = ("agent" === n.name || "chat" === n.name) && ("settings" === n.workflowViewType || "activity" === n.workflowViewType),
                    u = "agent" === n.name && !!n.peekViewBlockId && n.peekViewBlockId !== n.workflowId || "chat" === n.name && !!n.peekViewBlockId && i(273061).S.state.open && (!p || !!i(273061).S.state.agentId && n.peekViewBlockId !== i(273061).S.state.agentId),
                    g = p && !u;
                if ("agent" === n.name && !p && !n.peekViewBlockId || "chat" === n.name && !p && !n.peekViewBlockId) {
                    (0, i(740744).zM)(), c.open && i(270912).YH();
                    return
                }
                if (g) {
                    let e = "agent" === n.name ? n.workflowId : n.peekViewBlockId,
                        t = "settings" === n.workflowViewType ? "settings" : "activity";
                    if (e) {
                        if (c.open && i(270912).YH(), i(273061).S.state.open && i(273061).S.state.agentId === e && i(273061).S.state.mode === t) return;
                        (0, i(740744).vJ)({
                            environment: l,
                            agentId: e,
                            mode: t
                        });
                        return
                    }
                }
                if ("agent" === n.name && n.peekViewBlockId === n.workflowId && !g) {
                    (0, i(740744).zM)(), c.open && i(270912).YH();
                    return
                }
                p && u || p && i(273061).S.state.open || (0, i(740744).zM)();
                let w = !1,
                    k = !1;
                if ("page" === n.name && n.peekViewBlockId) {
                    let e = i(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (e) {
                        let t = i(970831).B.createChildStore(e, {
                            table: i(832375).evP,
                            id: n.peekViewBlockId
                        });
                        w = !!n.showMoveTo, k = !!n.saveParent, o = t;
                        let a = "page" === n.name && n.peekMode ? n.peekMode : void 0;
                        r = (0, i(475097).getPeekModeFromUrlParam)(a), d = n.scrollToBlockId
                    }
                } else if ((0, i(132702).Dk)(n) && n.peekViewBlockId) {
                    w = !1, k = !1, o = new(i(970831)).B(l, {
                        table: i(832375).evP,
                        id: n.peekViewBlockId
                    });
                    let e = n.peekMode ? n.peekMode : void 0;
                    r = (0, i(475097).getPeekModeFromUrlParam)(e) ? ? i(387722).A, d = "chat" === n.name || "meet" === n.name || "agent" === n.name ? n.scrollToBlockId : void 0
                }
                if (!(0, i(512845).mi)(null == (t = o) ? void 0 : t.getSystemBlockTypeStore().getValue())) {
                    if (o && (!c.open || o.id !== c.targetStore.id || r !== c.mode)) {
                        c.open && i(288413).J({
                            presenceStore: c.presenceStore,
                            environment: l,
                            pageVisitIdStore: i(287641).o,
                            blockStore: c.targetStore
                        });
                        let e = i(287641).o.getCurrentPageVisitId();
                        i(287641).o.initializeNewPageVisitId();
                        let t = i(584265).default.cloneState(),
                            n = i(544921).A.cloneState(),
                            p = i(596184).A.cloneState(),
                            u = l.currentUser.id;
                        (0, i(432373).I)(l, c.mode), (0, i(199927).b)(l), (0, i(169357).a)(l);
                        let g = o.getAssociatedCollectionStore(),
                            f = null == g ? void 0 : g.getLayoutStore(),
                            I = !!(null == f ? void 0 : f.firstModuleOfType("viewsMain")),
                            {
                                publicPageData: S
                            } = i(686494).A.state,
                            v = (0, i(254656).Q5)(s) ? void 0 : i(254656).y8.PeekOpen,
                            {
                                collectionId: m,
                                ownedCollectionCount: _,
                                linkedCollectionCount: V
                            } = (0, i(633171).P)(o, {
                                skipPages: !1
                            });
                        (0, i(533367).y)(l, {
                            page_id: o.id,
                            collection_id: (null == g ? void 0 : g.id) ? ? m,
                            owned_collection_count: _,
                            linked_collection_count: V,
                            layout_id: null == f ? void 0 : f.id,
                            layout_has_tabbed_structure: I,
                            team_id: null == (a = (0, i(297311).U)(o)) ? void 0 : a.id,
                            form_id: o.isFormBlock() ? o.id : void 0,
                            is_peek: !0,
                            peek_mode: r,
                            type: (0, i(51534).N)(o),
                            query: s,
                            page_visit_id: i(287641).o.getCurrentPageVisitId(),
                            page_visit_source_override: v,
                            previous_page_visit_id: e,
                            user_has_explicit_access: null == S ? void 0 : S.userHasExplicitAccess,
                            is_dls_viewer: null == S ? void 0 : S.isDLSViewer,
                            trusted_domains: null == S ? void 0 : S.domainLinkSharingEnabledDomains,
                            debug_page_visit_source: "handle_peek_state_update",
                            person_profile_user_id: o.getPersonProfileUserId(),
                            is_people_collection_view_page: o.isPeopleCollectionViewPage(),
                            is_archived: o.isArchived()
                        });
                        let y = (0, i(354128).getAgentPreviewWrapper)(l),
                            h = new(i(970831)).B(l, o.pointer, {
                                inMemoryRecordCache: y.getInMemoryRecordCacheIfIsPreviewingRecord(o.pointer, u)
                            }),
                            b = new(i(422526)).A,
                            P = new(i(343455)).A,
                            T = new(i(186499)).A;
                        i(270912).ho(l, {
                            mode: r ? ? i(387722).O,
                            targetStore: h,
                            pageVisitStore: b,
                            presenceStore: P,
                            showMoveTo: w,
                            saveParent: k,
                            loadingContainerStore: T,
                            savedSelectionStoreState: t,
                            savedTableSelectionStoreState: n,
                            savedCollectionViewSelectionStoreState: p,
                            savedSidebarExpandedStoreState: i(984858).sidebarExpandedStore.state,
                            scrollToBlockId: d
                        }), i(288413).I({
                            userId: u,
                            rootStore: h,
                            presenceStore: P,
                            environment: l,
                            pageVisitIdStore: i(287641).o
                        }), i(469589).initializePageVisit(l, {
                            blockStore: h,
                            pageVisitStore: b,
                            timestamp: Date.now(),
                            fromPageRefresh: (0, i(13565).oJ)()
                        }), i(715265).A.recordVisit({
                            id: o.id,
                            systemBlockType: o.getSystemBlockTypeStore().getValue(),
                            type: i(981324).ig.Default,
                            currentUserId: u
                        })
                    } else c.open && o && o.id === c.targetStore.id && d !== c.scrollToBlockId && (i(475097).default.setState({ ...c,
                        scrollToBlockId: d
                    }), d && i(374176).default.afterNextFlush().then(async () => {
                        let e = i(475097).default.state;
                        e.open && e.targetStore.id === o.id && e.scrollToBlockId === d && await i(807635).lZ({
                            environment: l,
                            pageStore: o,
                            scrollToBlockId: d
                        })
                    }));
                    c.open && !o && (i(270912).YH(), i(288413).J({
                        presenceStore: c.presenceStore,
                        environment: l,
                        pageVisitIdStore: i(287641).o,
                        blockStore: c.targetStore
                    }), (0, i(432373).I)(l, c.mode))
                }
            }
        },
        469589: (e, t, i) => {
            i.r(t), i.d(t, {
                STORE_MAX_LIMIT: () => d,
                initializePageVisit: () => l,
                updatePageVisits: () => n
            }), i(898992), i(354520), i(581454);
            var a = () => i(726570),
                o = () => i(226221),
                r = () => i(832375);
            let d = 100;
            async function l(e, t) {
                await i(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: a,
                    blockStore: d,
                    pageVisitStore: l,
                    timestamp: n,
                    type: p
                } = t, u = e.currentUser.id;
                if (void 0 === u || a) return;
                t.blockStore.id !== l.state.pageId && l.setState({ ...l.getInitialState(),
                    pageId: t.blockStore.id
                });
                let g = (0, i(517013).v3)(d, {
                        table: r().F9f,
                        id: (0, i(665619).$5)({
                            parent_id: d.id,
                            user_id: u
                        }),
                        spaceId: (0, o().e)(d.pointer.spaceId)
                    }),
                    w = (0, i(517013).v3)(d, {
                        table: r().ouC,
                        id: (0, i(665619).$5)({
                            parent_id: d.id,
                            user_id: u
                        }),
                        spaceId: (0, o().e)(d.pointer.spaceId)
                    });
                if (await i(941701).transactionQueue.awaitRecordTransaction({
                        table: r().evP,
                        id: d.id
                    }), await (0, i(966980).hS)(d), !d.canRead() || (0, i(142484).q)(e, d, d.getSpaceStore())) return;
                await g.load(), await w.load();
                let k = g.getKeyStore("visited_at").getValue(),
                    f = w.getKeyStore("exited_at").getValue(),
                    I = await c({
                        environment: e,
                        blockStore: d,
                        spaceId: (0, o().e)(d.pointer.spaceId),
                        timestamp: n,
                        type: p
                    });
                if ("skipped" === I.type || "failed" === I.type) return;
                let S = s({
                    pageVisits: I.data.pageVisits,
                    currentState: l.state,
                    blockStore: d,
                    totalCount: l.state.totalCount,
                    hasMore: void 0
                });
                l.state.pageId === d.id && l.setState({ ...S,
                    lastViewTime: k,
                    lastExitTime: f
                })
            }
            async function n(e, t) {
                let a, r;
                await i(728372).default.waitUntilRendered();
                let l = e.currentUser.id;
                if (void 0 === l) return;
                let {
                    blockStore: n,
                    pageVisitStore: c,
                    incremental: p
                } = t, u = t.limit || 32;
                if (p) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: o,
                        totalCount: r,
                        hasMore: d,
                        ...n
                    } = c.state, s = Object.entries(n).map(([e, t]) => {
                        if (l === e) return;
                        let i = t.getVisitedAt();
                        if (void 0 !== i) return i + 1
                    });
                    a = (0, i(763230).T9)(s.filter(i(722371).O9))
                }
                let g = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: n.id,
                            spaceId: (0, o().e)(n.pointer.spaceId)
                        },
                        sinceTimestamp: a,
                        limit: u,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: n.id,
                        spaceId: (0, o().e)(n.pointer.spaceId)
                    }
                });
                if ("failed" === g.type) return;
                let w = s({
                    pageVisits: g.data.pageVisits,
                    blockStore: n,
                    currentState: c.state,
                    totalCount: g.data.totalCount,
                    hasMore: g.data.hasMore
                });
                if (Object.keys(w).length <= d) r = w;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: a,
                        totalCount: o,
                        hasMore: l,
                        ...n
                    } = w, s = (0, i(722371).WP)(n).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (r = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: o,
                            hasMore: l
                        }, i(381453).Ul(s, ([, e]) => -e).slice(0, d))) r[t] = w[t]
                }
                c.state.pageId === w.pageId && c.setState(r)
            }

            function s(e) {
                let {
                    blockStore: t,
                    pageVisits: i,
                    currentState: d,
                    totalCount: l,
                    hasMore: n
                } = e, s = { ...d,
                    pageId: t.id,
                    totalCount: l,
                    hasMore: n
                };
                for (let e of i) {
                    let {
                        id: i,
                        user_id: d
                    } = e;
                    d in s || (s[d] = a()._.createChildStore(t, {
                        table: r().F9f,
                        id: i,
                        spaceId: (0, o().e)(t.pointer.spaceId)
                    }))
                }
                return s
            }
            async function c(e) {
                let {
                    environment: t,
                    blockStore: a,
                    spaceId: o,
                    timestamp: d,
                    type: l
                } = e, {
                    id: n
                } = t.currentUser, s = a.id, c = a.getSystemBlockTypeStore().getValue();
                if ((0, i(512845).kR)(c) || a.getParentTable() === r().C0E) return {
                    type: "skipped"
                };
                if (n && "passive" !== l) {
                    var p;
                    null == t || null == (p = t.mobileNative) || p.recordPageVisit(n, {
                        blockId: s,
                        spaceId: o,
                        visitedAt: d
                    }), i(715265).A.recordVisit({
                        id: s,
                        systemBlockType: c,
                        type: i(981324).ig.Default,
                        currentUserId: n
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: s,
                            spaceId: o
                        },
                        timestamp: d,
                        type: l
                    },
                    headers: {
                        recordId: s,
                        spaceId: o
                    }
                })
            }
        },
        964475: (e, t, i) => {
            async function a(e, t) {
                let a = new(i(695906)).SpaceStore(e, {
                    table: i(832375).NXh,
                    id: t
                });
                await a.load();
                let o = a.getEditDomain();
                return {
                    spaceStore: a,
                    spaceDomain: o
                }
            }
            async function o(e) {
                let t = i(728372).AppStoreSidebarSpaceStore.state;
                if (null != t && t.id) return t.id;
                let {
                    spaceId: a
                } = await i(998071).wA(e);
                return a
            }
            async function r(e) {
                let {
                    environment: t,
                    route: r,
                    getCanonicalUrl: d,
                    render: l
                } = e;
                if (r.spaceDomain) return void await l();
                if (r.spaceId) {
                    let {
                        spaceDomain: e
                    } = await a(t, r.spaceId);
                    if (e) {
                        let a = d({
                            spaceDomain: e,
                            spaceId: void 0
                        });
                        (0, i(79266).navigate)({
                            environment: t,
                            url: a,
                            redirect: !0
                        });
                        return
                    }
                    await l();
                    return
                }
                let n = await o(t);
                if (!n) return void(0, i(79266).navigate)({
                    environment: t,
                    url: i(168962).JZ.root,
                    redirect: !0
                });
                let {
                    spaceDomain: s
                } = await a(t, n), c = d({
                    spaceDomain: s,
                    spaceId: s ? void 0 : n
                });
                (0, i(79266).navigate)({
                    environment: t,
                    url: c,
                    redirect: !0
                })
            }
            async function d(e, t, a) {
                e.currentUser.id && await r({
                    environment: e,
                    route: t,
                    getCanonicalUrl: ({
                        spaceDomain: e,
                        spaceId: a
                    }) => (function(e) {
                        let t, {
                            spaceDomain: a,
                            spaceId: o,
                            viewName: r,
                            peekViewBlockId: d,
                            peekMode: l,
                            chatThreadId: n,
                            addQueryParamForSpaceDomain: s
                        } = e;
                        if (t = s ? "/library" : a ? `/${a}/library` : "/library", r) {
                            let e = (0, i(929694).G_)(r);
                            t = `${t}/${e}`
                        }
                        let c = {};
                        return s && a ? c[i(737869).bU] = a : !a && o && (c[i(737869).ge] = (0, i(4962).Xw)(o)), d && (c.p = (0, i(4962).Xw)(d)), l && (c.pm = l), n && (c[i(737869).P5] = (0, i(4962).Xw)(n)), (0, i(758654).Gm)({
                            url: t,
                            query: c
                        })
                    })({
                        spaceDomain: e,
                        spaceId: a,
                        viewName: t.viewName,
                        peekViewBlockId: t.peekViewBlockId,
                        peekMode: t.peekMode,
                        chatThreadId: t.chatThreadId,
                        addQueryParamForSpaceDomain: (0, i(700473).wasRequestedOnAlternateDomain)()
                    }),
                    render: () => (0, i(37469).w)({
                        nextRoute: t,
                        currentRoute: a,
                        environment: e,
                        query: ""
                    })
                })
            }
            i.r(t), i.d(t, {
                handleLibrary: () => d
            })
        }
    }
]);