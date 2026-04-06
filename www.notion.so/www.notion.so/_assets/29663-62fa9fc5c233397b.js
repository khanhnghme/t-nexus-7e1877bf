"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [29663], {
        22229: (e, t, o) => {
            o.d(t, {
                DZ: () => r,
                Ek: () => d,
                hN: () => s,
                i5: () => a,
                of: () => l
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(672577), o(803949);
            var i = () => o(955630),
                n = () => o(598403);
            let r = (0, o(109939).YK)({
                emojiPicker: {
                    defaultMessage: "Reaction",
                    id: "ReactionBar.emojiModalMenu.title"
                },
                emojiTitle: {
                    id: "recordIcon.emojiTab.title",
                    defaultMessage: "Emoji"
                }
            });

            function l(e) {
                let {
                    environment: t,
                    blockStore: i,
                    multiSelection: n,
                    rect: l,
                    formulasModule: s
                } = e, c = l;
                if (!c) {
                    let e = o(239134).get();
                    if (!e) return;
                    c = o(239134).getRect(e)
                }
                if (!c) return;
                let d = c.width,
                    u = c.height,
                    p = c.right - d;
                o(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(p, c.top, d, u),
                    type: "inline",
                    content: "reaction",
                    blockStore: i,
                    blockId: i.id,
                    multiSelection: n,
                    emoji: void 0
                }), o(874443).W(t, {
                    originGap: 4,
                    originRect: c,
                    popupWidth: o(703188).jv,
                    popupHeight: o(703188).GF,
                    isSmallWidth: !1,
                    title: o(962299).A.formatMessage(r.emojiPicker),
                    currentTab: "emoji",
                    onCancel: () => o(332190).A.reset(),
                    tabs: [{
                        type: "emoji",
                        title: o(962299).A.formatMessage(r.emojiTitle),
                        hideRandomButton: !0,
                        onChange: e => {
                            let i = o(332190).A.state;
                            i.open && "reaction" === i.content && (o(332190).A.setState({ ...i,
                                emoji: e
                            }), a({
                                environment: t,
                                formulasModule: s
                            }), o(874443).I())
                        }
                    }]
                })
            }
            async function s(e) {
                var t;
                let {
                    environment: i,
                    blockStore: n,
                    multiSelection: r,
                    rect: l,
                    from: s,
                    property_id: a
                } = e;
                if (o(332190).A.hasContent()) return void(0, o(58931)._y)({
                    environment: i,
                    reason: "starting_new"
                });
                let c = l;
                if (!c) {
                    let e = o(239134).get();
                    if (!e) return;
                    c = o(239134).getRect(e)
                }
                if (!c) return;
                let d = c.width,
                    u = c.height,
                    p = c.right - d,
                    g = new(o(478597)).A(i, (0, o(226221).e)(n.pointer.spaceId));
                o(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(p, c.top, d, u),
                    type: "inline",
                    content: "comment",
                    blockStore: n,
                    lastKnownBlockStore: n,
                    blockId: n.id,
                    multiSelection: r,
                    lastEditables: (0, o(58512).$)(r),
                    discussionInputStore: g,
                    property_id: a,
                    from: s
                }), (0, o(661767).V)({
                    element: null == (t = o(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: i,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), o(827862).A.setActiveWithSource("text_annotation"), o(661720).I(), await (0, o(745990).M)({
                    discussionInputStore: g,
                    environment: i
                }), o(65255).z0(i, {
                    from: s
                })
            }

            function a(e) {
                let {
                    environment: t,
                    allowActionsWhileCommenting: r,
                    skipOpeningDiscussion: l,
                    formulasModule: s
                } = e, a = o(332190).A.state;
                if (a.open) {
                    let e = "comment" === a.content ? a.property_id : void 0,
                        d = o(332190).A.getBlockStore() ? ? o(332190).A.getLastKnownBlockStore();
                    if (o(332190).A.hasContent() && (!r || d)) {
                        if ("inline" === a.type) {
                            let l = null == d ? void 0 : d.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                environment: t,
                                canUndo: !0,
                                cellTarget: l ? {
                                    spaceWithId: l
                                } : void 0,
                                perform: l => {
                                    let s = function(e) {
                                        let {
                                            environment: t,
                                            multiSelection: r,
                                            transaction: l,
                                            allowActionsWhileCommenting: s
                                        } = e, {
                                            id: a
                                        } = t.currentUser;
                                        if (!a) return;
                                        let c = s ? o(332190).A.getLastSelectedEditables() : (0, o(58512).$)(r).filter(({
                                            store: e
                                        }) => e.table === o(832375).evP);
                                        if (!c || 0 === c.length) return;
                                        let d = (0, o(746473).zH)(c[0].store),
                                            u = (0, o(295447).Z1)({
                                                environment: t,
                                                table: o(832375).$YH,
                                                spaceId: d.pointer.spaceId
                                            }),
                                            p = [],
                                            g = new Set;
                                        c.forEach(({
                                            store: e,
                                            selection: n
                                        }, r) => {
                                            g.add(e.id);
                                            let s = (0, o(746473).zH)(e);
                                            if (!(s instanceof o(970831).B)) return;
                                            let a = s.getType(),
                                                c = s.getFormat();
                                            if (a && (0, i().pD)(a, c)) return;
                                            let d = e.getValue(),
                                                f = o(247438).xbM(d, n);
                                            o(589873).Mw({
                                                environment: t,
                                                store: e,
                                                selection: f,
                                                annotation: [o(247438).Ifu.Discussion, u],
                                                transaction: l
                                            }), d = e.getValue();
                                            let m = o(247438).Ffo(d, f.startIndex, f.endIndex),
                                                v = 0 === r ? [] : [o(247438).Ey_("\n")];
                                            p.push(...v, ...m)
                                        });
                                        let f = (0, o(358538).Z)({
                                            multiSelection: r,
                                            filterCommonAncestors: !1,
                                            focus: void 0
                                        });
                                        if (f)
                                            for (let e of f.stores) {
                                                if (g.has(e.id)) continue;
                                                let t = e.getType(),
                                                    o = e.getFormat();
                                                t && (0, i().pD)(t, o) || (0, n().B)({
                                                    blockStore: e,
                                                    discussionId: u,
                                                    transaction: l
                                                })
                                            }
                                        return {
                                            blockStore: d,
                                            context: p,
                                            discussionId: u
                                        }
                                    }({
                                        environment: t,
                                        multiSelection: a.multiSelection,
                                        transaction: l,
                                        allowActionsWhileCommenting: r
                                    });
                                    if (!s) return;
                                    let {
                                        context: u,
                                        blockStore: p,
                                        discussionId: g
                                    } = s;
                                    if ("comment" === a.content) {
                                        let i = a.discussionInputStore.state.textStore.getValue() || [],
                                            s = a.discussionInputStore.state.files,
                                            {
                                                discussionStore: c,
                                                commentStore: f
                                            } = (0, o(952874).G)({
                                                createDiscussionArgs: {
                                                    type: "default",
                                                    context: u,
                                                    property_id: e
                                                },
                                                blockStore: p,
                                                environment: t,
                                                transaction: l,
                                                commentTextValue: i,
                                                files: o(385475).JC(s),
                                                discussionId: g
                                            });
                                        (0, n().B)({
                                            transaction: l,
                                            blockStore: p,
                                            discussionId: g
                                        });
                                        let {
                                            property_type: m,
                                            collection_id: v,
                                            collection_view_id: S,
                                            view_type: A,
                                            collection_view_block_id: b
                                        } = (0, o(618682).q)(e, d);
                                        o(65255).bJ(t, {
                                            discussion_id: c.id,
                                            discussion_type: c.getType(),
                                            comment_id: f.id,
                                            parent_block_id: c.getParentId(),
                                            from: o(332190).A.state.open && "comment" === o(332190).A.state.content ? o(332190).A.state.from : void 0,
                                            property_id: e,
                                            property_type: m,
                                            collection_view_id: S,
                                            view_type: A,
                                            collection_id: v,
                                            collection_view_block_id: b
                                        }), r && o(575125).A.addNewDiscussionId(g)
                                    } else a.emoji && c({
                                        context: u,
                                        blockStore: p,
                                        environment: t,
                                        transaction: l,
                                        icon: a.emoji,
                                        discussionId: g
                                    })
                                },
                                skipUpdatingEditedMetadata: !0
                            })
                        } else if ("block" === a.type)
                            if ("comment" === a.content) {
                                let i = a.discussionInputStore.state.textStore.getValue() || [],
                                    n = a.discussionInputStore.state.files;
                                if (r) {
                                    if (d) {
                                        let r = d.getSpaceId();
                                        (0, o(377796).createAndCommit)({
                                            userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                            environment: t,
                                            canUndo: !0,
                                            cellTarget: r ? {
                                                spaceWithId: r
                                            } : void 0,
                                            perform: r => {
                                                (0, o(151002).i)({
                                                    environment: t,
                                                    type: "default",
                                                    blockStore: d,
                                                    commentTextValue: i || [],
                                                    files: n,
                                                    transaction: r,
                                                    property_id: e,
                                                    formulasModule: s
                                                })
                                            },
                                            skipUpdatingEditedMetadata: !0
                                        })
                                    }
                                } else {
                                    let r = a.blockStore.getSpaceId();
                                    (0, o(377796).createAndCommit)({
                                        userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                        environment: t,
                                        canUndo: !0,
                                        cellTarget: r ? {
                                            spaceWithId: r
                                        } : void 0,
                                        perform: r => {
                                            (0, o(151002).i)({
                                                environment: t,
                                                type: "default",
                                                blockStore: a.blockStore,
                                                commentTextValue: i || [],
                                                files: n,
                                                transaction: r,
                                                property_id: e,
                                                formulasModule: s
                                            })
                                        },
                                        skipUpdatingEditedMetadata: !0
                                    })
                                }
                            } else {
                                let e = t.currentUser.id,
                                    {
                                        emoji: i,
                                        blockStore: n
                                    } = a,
                                    r = o(966980).O3(n, {
                                        recursivelyLoadAllDiscussions: !1
                                    }).find(e => e.getReactions().length > 0),
                                    l = n.getSpaceId();
                                i && e && (0, o(377796).createAndCommit)({
                                    userAction: "newDiscussionMenuActions.submitNewDefaultDiscussion.addReaction",
                                    environment: t,
                                    canUndo: !0,
                                    cellTarget: l ? {
                                        spaceWithId: l
                                    } : void 0,
                                    perform: l => {
                                        null != r && r.isDefined() ? o(197657).createReaction({
                                            environment: t,
                                            transaction: l,
                                            store: r,
                                            icon: i,
                                            currentActorPointer: {
                                                table: o(832375).oo9,
                                                id: e
                                            },
                                            discussionLocation: "block_menu"
                                        }) : c({
                                            context: void 0,
                                            blockStore: n,
                                            environment: t,
                                            transaction: l,
                                            icon: i
                                        })
                                    },
                                    skipUpdatingEditedMetadata: !0
                                })
                            }
                    }(0, o(585356).c)({
                        skipRestoreSelection: !0
                    });
                    let u = r ? d && d.getAssociatedCollectionStore() : a.blockStore.getAssociatedCollectionStore();
                    l || e || !u || o(821243).B4({
                        environment: t,
                        blockStore: r ? d ? ? a.blockStore : a.blockStore,
                        shouldFocusDiscussion: !0,
                        analyticsFrom: "db_page_comments",
                        rect: o(332190).A.state.rect,
                        recursivelyLoadAllDiscussions: !1
                    })
                }
            }

            function c(e) {
                let {
                    context: t,
                    blockStore: i,
                    environment: r,
                    transaction: l,
                    icon: s
                } = e, a = e.discussionId ? ? (0, o(295447).Z1)({
                    environment: r,
                    table: o(832375).$YH,
                    spaceId: i.pointer.spaceId
                });
                if (void 0 === r.currentUser.id) return;
                let c = o(124937).vt({
                    environment: r,
                    table: "discussion",
                    args: {
                        type: "default",
                        id: a,
                        parent: i.pointer,
                        context: t,
                        space_id: (0, o(226221).e)(i.pointer.spaceId)
                    },
                    inMemoryRecordCache: i.inMemoryRecordCache,
                    transaction: l
                });
                (0, n().B)({
                    transaction: l,
                    blockStore: i,
                    discussionId: c.id
                });
                let d = {
                    table: o(832375).oo9,
                    id: r.currentUser.id
                };
                return o(197657).createReaction({
                    environment: r,
                    transaction: l,
                    store: c,
                    icon: s,
                    currentActorPointer: d,
                    discussionLocation: "block_menu"
                }), c
            }

            function d(e) {
                let {
                    environment: t
                } = e;
                if (!t.currentUser.id) return;
                let n = o(332190).A.getPropertyId();
                if (n) {
                    var r;
                    let e = null == (r = o(332190).A.getBlockStore()) ? void 0 : r.getPropertyStore(n);
                    if (e) return {
                        blockStore: e,
                        context: e.getValue()
                    }
                }
                let l = o(332190).A.getLastSelectedEditables();
                if (!l || 0 === l.length) return;
                let s = (0, o(746473).zH)(l[0].store),
                    a = [],
                    c = new Set;
                return l.forEach(({
                    store: e,
                    selection: t
                }, n) => {
                    c.add(e.id);
                    let r = (0, o(746473).zH)(e);
                    if (!(r instanceof o(970831).B)) return;
                    let l = r.getType(),
                        s = r.getFormat();
                    if (l && (0, i().pD)(l, s)) return;
                    let d = e.getValue(),
                        u = o(247438).xbM(d, t),
                        p = o(247438).Ffo(d, u.startIndex, u.endIndex),
                        g = 0 === n ? [] : [o(247438).Ey_("\n")];
                    a.push(...g, ...p)
                }), {
                    blockStore: s,
                    context: a
                }
            }
        },
        137933: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            var i = () => o(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        isDuplicating: !1
                    }
                }
            }
            let r = new n
        },
        151002: (e, t, o) => {
            o.d(t, {
                i: () => i
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);

            function i(e) {
                var t;
                let i, n, r, {
                        environment: l,
                        type: s,
                        blockStore: a,
                        commentTextValue: c,
                        transaction: d,
                        files: u,
                        property_id: p,
                        formulasModule: g,
                        fromOverride: f
                    } = e,
                    m = e.discussionId ? ? (0, o(295447).Z1)({
                        environment: l,
                        table: o(832375).$YH,
                        spaceId: a.pointer.spaceId
                    }),
                    {
                        id: v
                    } = l.currentUser;
                if (!v) return;
                let S = o(332190).A.state,
                    {
                        property_type: A,
                        collection_id: b,
                        collection_view_id: I,
                        view_type: _,
                        collection_view_block_id: h
                    } = (0, o(618682).q)(p, a);
                if (p && S.open && "block" === S.type) {
                    let e = S.blockStore.getPropertyStore(p);
                    if (i = e.getValue() || [], "status" === A && 0 === i.length && (i = [
                            [o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)]
                        ]), "formula" === A && (i = function({
                            store: e,
                            blockStore: t,
                            property_id: i,
                            formulasModule: n,
                            environment: r
                        }) {
                            var l;
                            let s = t.getAssociatedCollectionStore(),
                                a = t.getRecordModel,
                                c = null == s ? void 0 : s.getModel(),
                                d = null == c ? void 0 : c.getNormalizedSchema(a)[i],
                                u = null == d || null == (l = d.formula2) ? void 0 : l.code,
                                p = t.getModel(),
                                g = Number(o(627179).Xb),
                                f = o(218744).default.getConfigKey("collection_request_settings", "clientFormulaTimeoutMs") ? ? g;
                            if (p && u && n) {
                                let l = n.evaluateCollectionFormula2WithoutCache({
                                    block: p,
                                    property: i,
                                    formulaCode: u,
                                    getRecordModel: e.getRecordModel,
                                    intl: o(962299).A.getIntl(),
                                    userTimeZone: (0, o(714350).P)(),
                                    depth: 0,
                                    visitedProperties: new Set,
                                    formulaTimeoutTimestampMs: Date.now() + f,
                                    resultCache: new Map,
                                    regExpCache: new Map,
                                    formatDateCache: new Map,
                                    experimentService: o(218744).default,
                                    collectionFeatureGates: (0, o(457103).i)(),
                                    spaceIdCreator: r.idCreator.getSpaceIdCreatorSync(t.getSpaceId())
                                });
                                if (l && o(300441).Q.isSuccess(l)) return (0, o(297493).Ht)(l.value)
                            }
                            return []
                        }({
                            store: e,
                            blockStore: a,
                            property_id: p,
                            formulasModule: g,
                            environment: l
                        })), "text" === A) {
                        let t = {
                            startIndex: 0,
                            endIndex: (0, o(247438).qAZ)(i).length
                        };
                        o(589873).Mw({
                            environment: l,
                            store: e,
                            selection: t,
                            annotation: [o(247438).Ifu.Discussion, m],
                            transaction: d
                        })
                    }
                }
                let y = a.getType(),
                    k = a.getFormat();
                if ((0, o(955630).Db)(y, k) && !(0, o(955630).$I)(y)) {
                    let e = a.getTitleValue();
                    n = o(247438).DJ2(o(247438).Uee(e, {
                        removeSuggestionAnnotationsAndText: !0,
                        removeSuggestionAnnotations: !0,
                        removeDiscussions: !0
                    }))
                }
                p && i && (n = i);
                let {
                    discussionStore: M,
                    commentStore: P
                } = (0, o(952874).G)({
                    createDiscussionArgs: "default" === s ? {
                        type: "default",
                        context: n,
                        property_id: p
                    } : {
                        type: "suggestion",
                        modifiedBlockIds: [a.pointer.id]
                    },
                    blockStore: a,
                    environment: l,
                    transaction: d,
                    commentTextValue: c,
                    files: o(385475).JC(u),
                    discussionId: m
                });
                (0, o(598403).B)({
                    transaction: d,
                    blockStore: a,
                    discussionId: M.id
                }), o(332190).A.state.open ? "comment" === o(332190).A.state.content && (r = o(332190).A.state.from) : r = o(332190).A.state.from, f && (r = f);
                let C = (0, o(545849).B)(null == (t = a.getAssociatedCollectionStore()) ? void 0 : t.getLayoutStore());
                return o(65255).v3(l, {
                    discussion_id: M.id,
                    discussion_type: M.getType(),
                    comment_id: P.id,
                    parent_block_id: M.getParentId(),
                    from: r,
                    property_id: p,
                    property_type: A,
                    collection_view_id: I,
                    view_type: _,
                    collection_id: b,
                    collection_view_block_id: h,
                    page_discussion_layout_location: C
                }), (0, o(585356).c)(), M
            }
        },
        197657: (e, t, o) => {
            function i(e) {
                let {
                    discussionLocation: t,
                    environment: i,
                    transaction: l,
                    store: s,
                    icon: a
                } = e, c = function({
                    store: e,
                    icon: t
                }) {
                    let i = (0, o(517013).G_)(e, e.pointer, "reactions").getValue();
                    if (void 0 !== i) return i.map(t => {
                        let i = o(868249).L.createChildStore(e, {
                            table: o(832375).ez7,
                            id: t,
                            spaceId: (0, o(226221).e)(e.pointer.spaceId)
                        });
                        if (i.isDefined()) return i
                    }).filter(o(722371).O9).find(e => e.getIcon() === t)
                }({
                    store: s,
                    icon: a
                });
                if (void 0 === i.currentUser.id) return;
                let d = {
                    table: o(832375).oo9,
                    id: i.currentUser.id
                };
                return null != c && c.isDefined() ? function({
                    store: e,
                    actorPointer: t,
                    transaction: i,
                    environment: n,
                    discussionLocation: l
                }) {
                    var s;
                    let a = {
                            store: e,
                            actorPointer: t,
                            transaction: i,
                            environment: n,
                            discussionLocation: l
                        },
                        c = e.getParentStore(),
                        d = (null == c ? void 0 : c.table) === o(832375).$YH ? c : null == c ? void 0 : c.getParentStore(),
                        u = (null == (s = e.getActors()) ? void 0 : s.some(e => e.id === t.id)) ? ? !1;
                    return (d && r(d, c) && (0, o(737146).U)({
                        transaction: i,
                        discussionStore: d
                    }), u) ? (function(e) {
                        var t, i;
                        let {
                            store: n,
                            actorPointer: r,
                            discussionLocation: l,
                            transaction: s,
                            environment: a
                        } = e;
                        if (!n.isDefined()) return;
                        let c = n.getParentStore(),
                            d = (null == c ? void 0 : c.table) === o(832375).$YH ? c : null == c ? void 0 : c.getParentStore(),
                            u = o(313432).eR.includes(l),
                            p = null == d || null == (t = d.getParentStore()) ? void 0 : t.getNavigableBlockStore(),
                            g = 1 === o(868249).L.getUserVisibleReactions(c).length && 1 === n.getActors().length && n.getActors()[0].id === a.currentUser.id;
                        o(65255).fq({
                            environment: a,
                            reaction_value: n.getIcon(),
                            comment_id: n.getParentId(),
                            discussion_id: null == d ? void 0 : d.id,
                            discussion_type: null == d ? void 0 : d.getType(),
                            parent_block_id: null == d ? void 0 : d.getParentId(),
                            parent_collection_id: null == d || null == (i = d.getParentStore()) ? void 0 : i.getParentCollectionIdUpToTwoLevels(),
                            reaction_count: n.getActors().length ? ? 0,
                            from: l,
                            ...u && {
                                inbox_session_id: o(825109).Ay.state.sessionId,
                                notification_page_id: null == p ? void 0 : p.id
                            }
                        });
                        let f = n.getModel();
                        (0, o(421439).y4)({
                            transaction: s,
                            store: n,
                            operation: f.ops.removeActor(r)
                        }), g && c && c.table === o(832375).$YH && (0, o(247027).v)({
                            environment: a,
                            discussionStore: c,
                            transaction: s
                        })
                    }(a), "Removed") : (function(e) {
                        var t, i;
                        let {
                            store: n,
                            actorPointer: r,
                            discussionLocation: l,
                            transaction: s,
                            environment: a
                        } = e;
                        if (!n.isDefined()) return;
                        let c = n.getParentStore(),
                            d = (null == c ? void 0 : c.table) === o(832375).$YH ? c : null == c ? void 0 : c.getParentStore(),
                            u = o(313432).eR.includes(l),
                            p = null == d || null == (t = d.getParentStore()) ? void 0 : t.getNavigableBlockStore();
                        o(65255).MP({
                            environment: a,
                            reaction_value: n.getIcon(),
                            comment_id: n.getParentId(),
                            discussion_id: null == d ? void 0 : d.id,
                            discussion_type: null == d ? void 0 : d.getType(),
                            parent_block_id: null == d ? void 0 : d.getParentId(),
                            parent_collection_id: null == d || null == (i = d.getParentStore()) ? void 0 : i.getParentCollectionIdUpToTwoLevels(),
                            reaction_count: n.getActors().length ? ? 0,
                            from: l,
                            ...u && {
                                inbox_session_id: o(825109).Ay.state.sessionId,
                                notification_page_id: null == p ? void 0 : p.id
                            }
                        });
                        let g = n.getModel();
                        (0, o(421439).y4)({
                            transaction: s,
                            store: n,
                            operation: g.ops.appendActor(r)
                        })
                    }(a), "Added")
                }({
                    environment: i,
                    store: c,
                    actorPointer: d,
                    transaction: l,
                    discussionLocation: t
                }) : (n({
                    environment: i,
                    transaction: l,
                    store: s,
                    icon: a,
                    currentActorPointer: d,
                    discussionLocation: t
                }), "Added")
            }

            function n({
                environment: e,
                transaction: t,
                store: i,
                icon: l,
                currentActorPointer: s,
                discussionLocation: a
            }) {
                var c, d;
                let u = (0, o(295447).JH)({
                        environment: e,
                        table: o(832375).ez7,
                        spaceId: (0, o(226221).e)(i.pointer.spaceId)
                    }),
                    p = i.table === o(832375).$YH ? i : i.getParentStore(),
                    g = o(313432).eR.includes(a),
                    f = null == p || null == (c = p.getParentStore()) ? void 0 : c.getNavigableBlockStore(),
                    m = null == p ? void 0 : p.getPropertyId(),
                    v = null == p ? void 0 : p.getParentStore(),
                    {
                        property_type: S,
                        collection_id: A,
                        collection_view_id: b,
                        view_type: I,
                        collection_view_block_id: _
                    } = (0, o(618682).q)(m, v);
                o(65255).MP({
                    environment: e,
                    reaction_value: l,
                    comment_id: i.id,
                    discussion_id: null == p ? void 0 : p.id,
                    discussion_type: null == p ? void 0 : p.getType(),
                    parent_block_id: null == p ? void 0 : p.getParentId(),
                    parent_collection_id: null == p || null == (d = p.getParentStore()) ? void 0 : d.getParentCollectionIdUpToTwoLevels(),
                    reaction_count: 0,
                    from: a,
                    ...g && {
                        inbox_session_id: o(825109).Ay.state.sessionId,
                        notification_page_id: null == f ? void 0 : f.id
                    },
                    property_type: S,
                    collection_id: A,
                    collection_view_id: b,
                    view_type: I,
                    collection_view_block_id: _
                });
                let h = o(124937).vt({
                        environment: e,
                        table: u.table,
                        args: {
                            id: u.id,
                            spaceId: u.spaceId,
                            commentId: i.id,
                            icon: l,
                            actorPointer: s
                        },
                        inMemoryRecordCache: i.inMemoryRecordCache,
                        transaction: t
                    }),
                    y = (0, o(517013).G_)(i, i.pointer, "reactions");
                (0, o(135674).B)({
                    parentStore: y,
                    appendStore: h,
                    transaction: t
                }), p && r(p, i) && (0, o(737146).U)({
                    transaction: t,
                    discussionStore: p
                })
            }

            function r(e, t) {
                var i;
                if (!e || !t || t.table !== o(832375).SNf) return !1;
                let n = null == (i = e.getUserSeenRecordStore()) ? void 0 : i.getLastSeenAt();
                return !n || n < t.getCreatedTime()
            }
            o.r(t), o.d(t, {
                createReaction: () => n,
                toggleReaction: () => i
            }), o(898992), o(354520), o(672577), o(581454), o(737550)
        },
        247027: (e, t, o) => {
            o.d(t, {
                v: () => r
            });
            var i = () => o(966980),
                n = () => o(357018);

            function r(e) {
                let {
                    discussionStore: t,
                    transaction: r
                } = e, l = i().No(t);
                l && (0, n().u)({
                    discussionIds: [t.id],
                    transaction: r,
                    blockStore: l
                });
                let s = (0, o(385941).Z)();
                if (s)
                    for (let e of i().zo({
                            blockStore: s,
                            transclusionReferences: "recurseInto",
                            childPages: "omit"
                        })) {
                        if (l && e.table === l.table && e.id === l.id) continue;
                        let o = i().bN(e).getValue();
                        null != o && o.includes(t.id) && (0, n().u)({
                            discussionIds: [t.id],
                            transaction: r,
                            blockStore: e
                        })
                    }
            }
        },
        273770: (e, t, o) => {
            o.d(t, {
                A: () => i
            });
            let i = new(o(510969)).A
        },
        593342: (e, t, o) => {
            o.d(t, {
                O: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    blockStore: i,
                    rect: n,
                    skipOpeningDiscussionOnSubmit: r,
                    formulasModule: l
                } = e, s = n ? ? o(496704).K.getRect(i);
                if (!s) return;
                let a = s.width,
                    c = s.height,
                    d = s.right - a;
                o(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(d, s.top, a, c),
                    type: "block",
                    content: "reaction",
                    blockStore: i,
                    blockId: i.id,
                    emoji: void 0
                }), o(874443).W(t, {
                    originGap: 4,
                    originRect: s,
                    popupWidth: o(703188).jv,
                    popupHeight: o(703188).GF,
                    isSmallWidth: !1,
                    title: o(962299).A.formatMessage(o(22229).DZ.emojiPicker),
                    currentTab: "emoji",
                    onCancel: () => o(332190).A.reset(),
                    tabs: [{
                        type: "emoji",
                        title: o(962299).A.formatMessage(o(22229).DZ.emojiTitle),
                        hideRandomButton: !0,
                        onChange: e => {
                            let i = o(332190).A.state;
                            i.open && "reaction" === i.content && (o(332190).A.setState({ ...i,
                                emoji: e
                            }), (0, o(22229).i5)({
                                environment: t,
                                skipOpeningDiscussion: r,
                                formulasModule: l
                            }), o(874443).I())
                        }
                    }]
                })
            }
        },
        661720: (e, t, o) => {
            o.d(t, {
                I: () => i
            });

            function i() {
                o(793767).A.state.isActive && (o(273770).A.setState({ ...o(273770).A.state,
                    open: !1
                }), o(793767).A.setState({ ...o(793767).A.state,
                    isActive: !1,
                    isAnimatingClosed: !0
                }))
            }
        },
        717376: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            var i = () => o(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new n
        }
    }
]);