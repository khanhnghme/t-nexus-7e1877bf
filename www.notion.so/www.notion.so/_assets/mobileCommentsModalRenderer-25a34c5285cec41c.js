"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18331, 37342], {
        11444: (e, t, a) => {
            a.r(t), a.d(t, {
                UISpacePermissionGroupToken: () => o
            });
            var u = a(296540),
                i = a(474848);
            let r = {
                avatarWrapStyle: {
                    width: "none",
                    minHeight: "none",
                    marginInlineEnd: 6
                },
                style0: { ...a(699422).RC
                },
                style1: {
                    margin: 0
                }
            };

            function o(e) {
                let {
                    parentStore: t,
                    style: o,
                    format: n
                } = e, D = e.groupPointer.id, s = e.groupPointer.spaceId, d = (0, a(659341).S4)({
                    spacePermissionGroupId: D,
                    spaceId: s
                }), c = (0, a(682985).K8)(() => e.groupModel ? e.groupModel : t ? a(398652).C.createChildStore(t, d).getModel() : void 0, [t, d, e.groupModel]), l = (0, a(533992).Y0)(), {} = (0, a(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        fontSize: a(986939).A.isMobile ? 11 : 9,
                        lineHeight: l.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [l]), p = (0, a(109939).tz)(), f = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: p,
                    permissionGroupModel: c
                }), [p, c]), m = (0, u.useCallback)(e => n === a(696654).NY.Inline ? (0, i.jsx)(a(308256).o, {
                    group: c,
                    size: e
                }) : (0, i.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, i.jsx)("div", {
                        style: r.avatarWrapStyle,
                        children: (0, i.jsx)(a(308256).o, {
                            group: c,
                            size: e
                        })
                    }), (0, i.jsx)("div", {
                        style: r.style0,
                        children: f
                    })]
                }), [n, c, f]);
                return (0, i.jsx)(a(376921).Ay, { ...e,
                    style: { ...r.style1,
                        ...o
                    },
                    renderAvatar: m
                })
            }
        },
        13717: (e, t, a) => {
            function u(e) {
                let {
                    spaceStore: t,
                    groupId: u
                } = e;
                return a(398652).C.createChildStore(t, (0, a(659341).S4)({
                    spacePermissionGroupId: u,
                    spaceId: t.id
                }))
            }

            function i(e) {
                let {
                    spaceStore: t,
                    groupId: u,
                    userId: i
                } = e;
                return a(291886).m.createChildStore(t, (0, a(867863).BZ)({
                    spacePermissionGroupId: u,
                    spaceId: t.id,
                    userId: i
                }))
            }
            a.d(t, {
                A: () => i,
                E: () => u
            })
        },
        22229: (e, t, a) => {
            a.d(t, {
                DZ: () => r,
                Ek: () => d,
                hN: () => n,
                i5: () => D,
                of: () => o
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(803949);
            var u = () => a(955630),
                i = () => a(598403);
            let r = (0, a(109939).YK)({
                emojiPicker: {
                    defaultMessage: "Reaction",
                    id: "ReactionBar.emojiModalMenu.title"
                },
                emojiTitle: {
                    id: "recordIcon.emojiTab.title",
                    defaultMessage: "Emoji"
                }
            });

            function o(e) {
                let {
                    environment: t,
                    blockStore: u,
                    multiSelection: i,
                    rect: o,
                    formulasModule: n
                } = e, s = o;
                if (!s) {
                    let e = a(239134).get();
                    if (!e) return;
                    s = a(239134).getRect(e)
                }
                if (!s) return;
                let d = s.width,
                    c = s.height,
                    l = s.right - d;
                a(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(l, s.top, d, c),
                    type: "inline",
                    content: "reaction",
                    blockStore: u,
                    blockId: u.id,
                    multiSelection: i,
                    emoji: void 0
                }), a(874443).W(t, {
                    originGap: 4,
                    originRect: s,
                    popupWidth: a(703188).jv,
                    popupHeight: a(703188).GF,
                    isSmallWidth: !1,
                    title: a(962299).A.formatMessage(r.emojiPicker),
                    currentTab: "emoji",
                    onCancel: () => a(332190).A.reset(),
                    tabs: [{
                        type: "emoji",
                        title: a(962299).A.formatMessage(r.emojiTitle),
                        hideRandomButton: !0,
                        onChange: e => {
                            let u = a(332190).A.state;
                            u.open && "reaction" === u.content && (a(332190).A.setState({ ...u,
                                emoji: e
                            }), D({
                                environment: t,
                                formulasModule: n
                            }), a(874443).I())
                        }
                    }]
                })
            }
            async function n(e) {
                var t;
                let {
                    environment: u,
                    blockStore: i,
                    multiSelection: r,
                    rect: o,
                    from: n,
                    property_id: D
                } = e;
                if (a(332190).A.hasContent()) return void(0, a(58931)._y)({
                    environment: u,
                    reason: "starting_new"
                });
                let s = o;
                if (!s) {
                    let e = a(239134).get();
                    if (!e) return;
                    s = a(239134).getRect(e)
                }
                if (!s) return;
                let d = s.width,
                    c = s.height,
                    l = s.right - d,
                    p = new(a(478597)).A(u, (0, a(226221).e)(i.pointer.spaceId));
                a(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(l, s.top, d, c),
                    type: "inline",
                    content: "comment",
                    blockStore: i,
                    lastKnownBlockStore: i,
                    blockId: i.id,
                    multiSelection: r,
                    lastEditables: (0, a(58512).$)(r),
                    discussionInputStore: p,
                    property_id: D,
                    from: n
                }), (0, a(661767).V)({
                    element: null == (t = a(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: u,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), a(827862).A.setActiveWithSource("text_annotation"), a(661720).I(), await (0, a(745990).M)({
                    discussionInputStore: p,
                    environment: u
                }), a(65255).z0(u, {
                    from: n
                })
            }

            function D(e) {
                let {
                    environment: t,
                    allowActionsWhileCommenting: r,
                    skipOpeningDiscussion: o,
                    formulasModule: n
                } = e, D = a(332190).A.state;
                if (D.open) {
                    let e = "comment" === D.content ? D.property_id : void 0,
                        d = a(332190).A.getBlockStore() ? ? a(332190).A.getLastKnownBlockStore();
                    if (a(332190).A.hasContent() && (!r || d)) {
                        if ("inline" === D.type) {
                            let o = null == d ? void 0 : d.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                environment: t,
                                canUndo: !0,
                                cellTarget: o ? {
                                    spaceWithId: o
                                } : void 0,
                                perform: o => {
                                    let n = function(e) {
                                        let {
                                            environment: t,
                                            multiSelection: r,
                                            transaction: o,
                                            allowActionsWhileCommenting: n
                                        } = e, {
                                            id: D
                                        } = t.currentUser;
                                        if (!D) return;
                                        let s = n ? a(332190).A.getLastSelectedEditables() : (0, a(58512).$)(r).filter(({
                                            store: e
                                        }) => e.table === a(832375).evP);
                                        if (!s || 0 === s.length) return;
                                        let d = (0, a(746473).zH)(s[0].store),
                                            c = (0, a(295447).Z1)({
                                                environment: t,
                                                table: a(832375).$YH,
                                                spaceId: d.pointer.spaceId
                                            }),
                                            l = [],
                                            p = new Set;
                                        s.forEach(({
                                            store: e,
                                            selection: i
                                        }, r) => {
                                            p.add(e.id);
                                            let n = (0, a(746473).zH)(e);
                                            if (!(n instanceof a(970831).B)) return;
                                            let D = n.getType(),
                                                s = n.getFormat();
                                            if (D && (0, u().pD)(D, s)) return;
                                            let d = e.getValue(),
                                                f = a(247438).xbM(d, i);
                                            a(589873).Mw({
                                                environment: t,
                                                store: e,
                                                selection: f,
                                                annotation: [a(247438).Ifu.Discussion, c],
                                                transaction: o
                                            }), d = e.getValue();
                                            let m = a(247438).Ffo(d, f.startIndex, f.endIndex),
                                                b = 0 === r ? [] : [a(247438).Ey_("\n")];
                                            l.push(...b, ...m)
                                        });
                                        let f = (0, a(358538).Z)({
                                            multiSelection: r,
                                            filterCommonAncestors: !1,
                                            focus: void 0
                                        });
                                        if (f)
                                            for (let e of f.stores) {
                                                if (p.has(e.id)) continue;
                                                let t = e.getType(),
                                                    a = e.getFormat();
                                                t && (0, u().pD)(t, a) || (0, i().B)({
                                                    blockStore: e,
                                                    discussionId: c,
                                                    transaction: o
                                                })
                                            }
                                        return {
                                            blockStore: d,
                                            context: l,
                                            discussionId: c
                                        }
                                    }({
                                        environment: t,
                                        multiSelection: D.multiSelection,
                                        transaction: o,
                                        allowActionsWhileCommenting: r
                                    });
                                    if (!n) return;
                                    let {
                                        context: c,
                                        blockStore: l,
                                        discussionId: p
                                    } = n;
                                    if ("comment" === D.content) {
                                        let u = D.discussionInputStore.state.textStore.getValue() || [],
                                            n = D.discussionInputStore.state.files,
                                            {
                                                discussionStore: s,
                                                commentStore: f
                                            } = (0, a(952874).G)({
                                                createDiscussionArgs: {
                                                    type: "default",
                                                    context: c,
                                                    property_id: e
                                                },
                                                blockStore: l,
                                                environment: t,
                                                transaction: o,
                                                commentTextValue: u,
                                                files: a(385475).JC(n),
                                                discussionId: p
                                            });
                                        (0, i().B)({
                                            transaction: o,
                                            blockStore: l,
                                            discussionId: p
                                        });
                                        let {
                                            property_type: m,
                                            collection_id: b,
                                            collection_view_id: g,
                                            view_type: F,
                                            collection_view_block_id: C
                                        } = (0, a(618682).q)(e, d);
                                        a(65255).bJ(t, {
                                            discussion_id: s.id,
                                            discussion_type: s.getType(),
                                            comment_id: f.id,
                                            parent_block_id: s.getParentId(),
                                            from: a(332190).A.state.open && "comment" === a(332190).A.state.content ? a(332190).A.state.from : void 0,
                                            property_id: e,
                                            property_type: m,
                                            collection_view_id: g,
                                            view_type: F,
                                            collection_id: b,
                                            collection_view_block_id: C
                                        }), r && a(575125).A.addNewDiscussionId(p)
                                    } else D.emoji && s({
                                        context: c,
                                        blockStore: l,
                                        environment: t,
                                        transaction: o,
                                        icon: D.emoji,
                                        discussionId: p
                                    })
                                },
                                skipUpdatingEditedMetadata: !0
                            })
                        } else if ("block" === D.type)
                            if ("comment" === D.content) {
                                let u = D.discussionInputStore.state.textStore.getValue() || [],
                                    i = D.discussionInputStore.state.files;
                                if (r) {
                                    if (d) {
                                        let r = d.getSpaceId();
                                        (0, a(377796).createAndCommit)({
                                            userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                            environment: t,
                                            canUndo: !0,
                                            cellTarget: r ? {
                                                spaceWithId: r
                                            } : void 0,
                                            perform: r => {
                                                (0, a(151002).i)({
                                                    environment: t,
                                                    type: "default",
                                                    blockStore: d,
                                                    commentTextValue: u || [],
                                                    files: i,
                                                    transaction: r,
                                                    property_id: e,
                                                    formulasModule: n
                                                })
                                            },
                                            skipUpdatingEditedMetadata: !0
                                        })
                                    }
                                } else {
                                    let r = D.blockStore.getSpaceId();
                                    (0, a(377796).createAndCommit)({
                                        userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                        environment: t,
                                        canUndo: !0,
                                        cellTarget: r ? {
                                            spaceWithId: r
                                        } : void 0,
                                        perform: r => {
                                            (0, a(151002).i)({
                                                environment: t,
                                                type: "default",
                                                blockStore: D.blockStore,
                                                commentTextValue: u || [],
                                                files: i,
                                                transaction: r,
                                                property_id: e,
                                                formulasModule: n
                                            })
                                        },
                                        skipUpdatingEditedMetadata: !0
                                    })
                                }
                            } else {
                                let e = t.currentUser.id,
                                    {
                                        emoji: u,
                                        blockStore: i
                                    } = D,
                                    r = a(966980).O3(i, {
                                        recursivelyLoadAllDiscussions: !1
                                    }).find(e => e.getReactions().length > 0),
                                    o = i.getSpaceId();
                                u && e && (0, a(377796).createAndCommit)({
                                    userAction: "newDiscussionMenuActions.submitNewDefaultDiscussion.addReaction",
                                    environment: t,
                                    canUndo: !0,
                                    cellTarget: o ? {
                                        spaceWithId: o
                                    } : void 0,
                                    perform: o => {
                                        null != r && r.isDefined() ? a(197657).createReaction({
                                            environment: t,
                                            transaction: o,
                                            store: r,
                                            icon: u,
                                            currentActorPointer: {
                                                table: a(832375).oo9,
                                                id: e
                                            },
                                            discussionLocation: "block_menu"
                                        }) : s({
                                            context: void 0,
                                            blockStore: i,
                                            environment: t,
                                            transaction: o,
                                            icon: u
                                        })
                                    },
                                    skipUpdatingEditedMetadata: !0
                                })
                            }
                    }(0, a(585356).c)({
                        skipRestoreSelection: !0
                    });
                    let c = r ? d && d.getAssociatedCollectionStore() : D.blockStore.getAssociatedCollectionStore();
                    o || e || !c || a(821243).B4({
                        environment: t,
                        blockStore: r ? d ? ? D.blockStore : D.blockStore,
                        shouldFocusDiscussion: !0,
                        analyticsFrom: "db_page_comments",
                        rect: a(332190).A.state.rect,
                        recursivelyLoadAllDiscussions: !1
                    })
                }
            }

            function s(e) {
                let {
                    context: t,
                    blockStore: u,
                    environment: r,
                    transaction: o,
                    icon: n
                } = e, D = e.discussionId ? ? (0, a(295447).Z1)({
                    environment: r,
                    table: a(832375).$YH,
                    spaceId: u.pointer.spaceId
                });
                if (void 0 === r.currentUser.id) return;
                let s = a(124937).vt({
                    environment: r,
                    table: "discussion",
                    args: {
                        type: "default",
                        id: D,
                        parent: u.pointer,
                        context: t,
                        space_id: (0, a(226221).e)(u.pointer.spaceId)
                    },
                    inMemoryRecordCache: u.inMemoryRecordCache,
                    transaction: o
                });
                (0, i().B)({
                    transaction: o,
                    blockStore: u,
                    discussionId: s.id
                });
                let d = {
                    table: a(832375).oo9,
                    id: r.currentUser.id
                };
                return a(197657).createReaction({
                    environment: r,
                    transaction: o,
                    store: s,
                    icon: n,
                    currentActorPointer: d,
                    discussionLocation: "block_menu"
                }), s
            }

            function d(e) {
                let {
                    environment: t
                } = e;
                if (!t.currentUser.id) return;
                let i = a(332190).A.getPropertyId();
                if (i) {
                    var r;
                    let e = null == (r = a(332190).A.getBlockStore()) ? void 0 : r.getPropertyStore(i);
                    if (e) return {
                        blockStore: e,
                        context: e.getValue()
                    }
                }
                let o = a(332190).A.getLastSelectedEditables();
                if (!o || 0 === o.length) return;
                let n = (0, a(746473).zH)(o[0].store),
                    D = [],
                    s = new Set;
                return o.forEach(({
                    store: e,
                    selection: t
                }, i) => {
                    s.add(e.id);
                    let r = (0, a(746473).zH)(e);
                    if (!(r instanceof a(970831).B)) return;
                    let o = r.getType(),
                        n = r.getFormat();
                    if (o && (0, u().pD)(o, n)) return;
                    let d = e.getValue(),
                        c = a(247438).xbM(d, t),
                        l = a(247438).Ffo(d, c.startIndex, c.endIndex),
                        p = 0 === i ? [] : [a(247438).Ey_("\n")];
                    D.push(...p, ...l)
                }), {
                    blockStore: n,
                    context: D
                }
            }
        },
        24296: (e, t, a) => {
            a.d(t, {
                j: () => r
            });
            var u = () => a(375622);
            class i extends u().A {}
            let r = new i
        },
        42615: (e, t, a) => {
            a.d(t, {
                FB: () => l,
                JC: () => f,
                Ql: () => p,
                Wv: () => r,
                Yz: () => n,
                ds: () => i,
                e4: () => u,
                eQ: () => o,
                im: () => s,
                jw: () => D,
                k2: () => c,
                uG: () => d
            });
            let u = 8,
                i = 10,
                r = 8,
                o = 24,
                n = 6,
                D = 1.5,
                s = 11.25,
                d = 30,
                c = `calc(100% + ${r+(u-n)-d}px)`,
                l = 32,
                p = -16;

            function f(e, t, a) {
                return t ? 20 : "margin_comments" === e ? 12 : "comment_unfurl" === e && "start" === a ? 14 : 16
            }
        },
        43371: e => {
            e.exports = function() {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
            }
        },
        47187: (e, t, a) => {
            a.d(t, {
                E: () => u
            });

            function u(e) {
                let {
                    size: t,
                    style: u
                } = e;
                return (0, a(960253).I)(() => ({
                    icon: {
                        width: .6 * t,
                        height: .6 * t,
                        fill: a(632079).Tj.text.secondary
                    },
                    iconContainer: {
                        width: t,
                        height: t,
                        borderRadius: "100%",
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...u
                    }
                }), [t, u])
            }
        },
        57168: (e, t, a) => {
            a.r(t), a.d(t, {
                ClientAIChatStore: () => s,
                UserChatPreferenceLocalStorageStore: () => n,
                defaultClientAIChatStore: () => d,
                defaultLegacyThreadConfig: () => D
            });
            var u = () => a(546605);
            a(898992), a(354520), a(430670), a(803949);
            let i = "confirmed_safe_by_user",
                r = {
                    acceptedInferenceKeys: [],
                    inferenceKeysToAnnotations: {},
                    inferenceKeysToMemories: {},
                    tags: [],
                    abortController: void 0,
                    stopInferencePromise: void 0,
                    temporarySteps: [],
                    inferences: [],
                    traceId: void 0,
                    draftTraceId: void 0,
                    wasForceStoppedByUser: !1,
                    requestInfo: void 0,
                    loading: !1,
                    currentUserInitiatedRunningInference: !1,
                    stagedData: {},
                    agentSearchResultsByToolResultStepId: {},
                    pendingStop: !1
                };
            class o extends u().Store {
                getInitialState() {
                    return r
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(r)
                }
                getOrCreateTraceId() {
                    let e = this.state.traceId ? ? (0, a(4962).Ay)();
                    return this.state.traceId || this.setState({ ...this.state,
                        traceId: e
                    }), e
                }
                clearTraceId() {
                    this.setState({ ...this.state,
                        traceId: void 0
                    })
                }
                getOrCreateDraftTraceId() {
                    let e = this.state.draftTraceId ? ? (0, a(4962).Ay)();
                    return this.state.draftTraceId || this.setState({ ...this.state,
                        draftTraceId: e
                    }), e
                }
                setAgentSearchResultsForTool(e) {
                    let {
                        agentStepId: t,
                        toolCallId: a,
                        toolResultStepId: u,
                        results: i
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [u]: {
                                agentStepId: t,
                                toolCallId: a,
                                results: i
                            }
                        }
                    })
                }
                getTemporaryAttachmentStagedDataOrInstantiate() {
                    let e = this.state.stagedData;
                    if (null != e && e.attachmentStagedData) return e.attachmentStagedData;
                    let t = {
                        stagedAttachmentUploadStore: new(a(729849)).Gi,
                        stagedClientSteps: [],
                        stagedEngineSteps: [],
                        stagedInferenceTranscriptSteps: []
                    };
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: t
                        }
                    }), t
                }
                getStagedAttachmentUploadStoreIfExists() {
                    var e;
                    let t = this.state.stagedData;
                    return null == t || null == (e = t.attachmentStagedData) ? void 0 : e.stagedAttachmentUploadStore
                }
                stageAttachmentInferenceTranscriptStep(e) {
                    let {
                        step: t
                    } = e, a = this.getTemporaryAttachmentStagedDataOrInstantiate(), u = { ...a,
                        stagedInferenceTranscriptSteps: [...a.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: u
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: a
                    } = e, u = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!u) return;
                    let i = u.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== a);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...u,
                                stagedInferenceTranscriptSteps: i
                            }
                        }
                    })
                }
                clearStagedComputerFileSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let a = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === a.length) return;
                    let u = t.stagedAttachmentUploadStore;
                    a.forEach(e => {
                        u.onDeleteFileUpload(e)
                    });
                    let i = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: i
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, a;
                    let {
                        fileUrl: u
                    } = e, r = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!r) return;
                    let o = r.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === u);
                    if (o < 0) return;
                    let n = r.stagedInferenceTranscriptSteps[o];
                    if ("attachment" !== n.type) return;
                    let D = null != (a = n.metadata) && a.guardrail ? { ...n.metadata.guardrail,
                            attachmentRisk: i
                        } : {
                            attachmentRisk: i
                        },
                        s = { ...n,
                            metadata: { ...n.metadata ? ? {},
                                guardrail : D
                            }
                        },
                        d = [...r.stagedInferenceTranscriptSteps];
                    d[o] = s, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...r,
                                stagedInferenceTranscriptSteps: d
                            }
                        }
                    })
                }
                getAndClearStagedAssistantAttachmentSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let {
                        stagedInferenceTranscriptSteps: a
                    } = t;
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: void 0
                        }
                    }), a
                }
                getStagedMentionPointers() {
                    let {
                        mentionStagedData: e
                    } = this.state.stagedData;
                    return e ? [...e] : []
                }
                updateMentionedStagedData(e) {
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            mentionStagedData: new(a(227318)).d(e)
                        }
                    })
                }
            }
            let n = new(a(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: a(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                D = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class s extends u().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: D,
                        userSelectedConfig: void 0,
                        model: void 0,
                        debugOverrides: {
                            usePromptCache: a(363256).e.withListenerIgnored(() => a(218744).default.checkGate({
                                gateName: "workflows_inference_replay"
                            })) ? "s3" : void 0,
                            emitAgentSearchExtractedResults: !0
                        },
                        threadRegistry: {},
                        isAIChatTranscriptSidePanelVisible: !1,
                        threadToStagedData: {},
                        primeInput: void 0
                    }
                }
                getOrCreateClientAIChatThreadStore(e) {
                    if (!this.state.threadRegistry[e]) {
                        let t = new o;
                        return this.setState({ ...this.state,
                            threadRegistry: { ...this.state.threadRegistry,
                                [e]: t
                            }
                        }), t
                    }
                    return this.state.threadRegistry[e]
                }
                getExistingClientAIChatThreadStore(e) {
                    return this.state.threadRegistry[e]
                }
                removeClientAIChatThreadStore(e) {
                    let {
                        threadRegistry: t
                    } = this.state, a = { ...t
                    };
                    delete a[e], this.setState({ ...this.state,
                        threadRegistry: a
                    })
                }
            }
            let d = new s;
            (0, a(202146).exposeDebugValue)("clientAiChatStore", d)
        },
        58931: (e, t, a) => {
            a.d(t, {
                HR: () => i,
                _y: () => r
            });
            let u = (0, a(109939).YK)({
                discardCommentConfirmationPrompt: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.prompt",
                    defaultMessage: "Do you want to discard the comment?"
                },
                discardCommentButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label",
                    defaultMessage: "Discard"
                },
                draftCommentConfirmationPromptTitle: {
                    id: "newDiscussionMenu.draftCommentConfirmationDialogTitle.prompt",
                    defaultMessage: "Finish your draft comment?"
                },
                draftCommentConfirmationStartingNewDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationStartingNewDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you start a new one"
                },
                draftCommentConfirmationNavigateAwayPromptDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationNavigateAwayPromptDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you leave the page"
                },
                returnToPageButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.returnToPage.label",
                    defaultMessage: "Return to draft"
                }
            });

            function i(e) {
                let {
                    discussionInputStore: t,
                    environment: i,
                    discussionHelpers: o,
                    reason: n
                } = e;
                a(332190).A.isComposingNewDiscussion() ? r({
                    environment: i,
                    reason: n ? ? "navigating_away"
                }) : o.hasCommentChanged(t) ? (a(65255).yO(i), a(647095).ui({
                    message: a(962299).A.formatMessage(u.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => a(65255).Ie(i),
                    keepFocus: !0,
                    items: [{
                        label: a(962299).A.formatMessage(u.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            a(65255).QP(i), (0, a(585356).c)()
                        }
                    }]
                })) : (0, a(585356).c)()
            }

            function r(e) {
                let {
                    environment: t
                } = e;
                if (!a(332190).A.isDraftCommentOnValidSelection()) return;
                let i = a(332190).A.getDiscussionInputStore();
                a(65255).yO(t), a(647095).ui({
                    message: a(962299).A.formatMessage(u.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return a(962299).A.formatMessage(u.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return a(962299).A.formatMessage(u.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, a(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: a(962299).A.formatMessage(u.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, a(758275).x)({
                                currentBlockStore: a(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: i,
                                environment: t
                            }), a(65255).Ie(t)
                        }
                    }, {
                        label: a(962299).A.formatMessage(u.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            a(65255).QP(t), (0, a(585356).c)()
                        }
                    }]
                })
            }
        },
        59724: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var u = a(474848);
            let i = {
                    style0: { ...a(699422).RC
                    }
                },
                r = function(e) {
                    let {
                        botStore: t,
                        avatarSize: r,
                        shouldShowBadge: o,
                        style: n,
                        inline: D
                    } = e, s = (0, a(109939).tz)(), d = (0, a(533992).Y0)(), c = (0, a(682985).K8)(() => null == t ? void 0 : t.getDisplayName(s), [t, s]), {
                        outerStyle: l,
                        avatarWrapStyle: p,
                        badgeStyle: f
                    } = (0, a(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...n
                        },
                        avatarWrapStyle: D ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: a(632079).Tj.text.secondary,
                            background: a(632079).Tj.background.tertiaryTranslucent,
                            fontSize: a(986939).A.isMobile ? 11 : 9,
                            lineHeight: d.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [n, D, d]);
                    return (0, u.jsxs)("div", {
                        style: l,
                        children: [(0, u.jsx)("div", {
                            style: p,
                            children: (0, u.jsx)(a(31319).A, {
                                botStore: t,
                                size: r
                            })
                        }), (0, u.jsx)("div", {
                            style: i.style0,
                            children: c
                        }), o ? (0, u.jsx)("div", {
                            style: f,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        63728: (e, t, a) => {
            function u(e, t) {
                let u = a(966980).dd(t),
                    i = a(385475).xh(u);
                e.setState({ ...e.state,
                    files: i
                })
            }
            async function i(e) {
                let {
                    blockStore: t,
                    pageViewBlockStore: u,
                    environment: i
                } = e;
                u ? u.setState({ ...u.state,
                    forceDiscussionOpen: !0
                }) : a(400890).A.openNewPageDiscussionInput(t), a(65255).o2(i, {
                    from: "page_comments"
                }), await a(374176).default.afterNextFlush();
                let r = a(24296).j.find(e => e.getBlockStore().id === t.id),
                    o = null == r ? void 0 : r.getInputStore();
                o && (0, a(739204).z)({
                    store: o.state.textStore
                })
            }
            a.d(t, {
                O: () => i,
                e: () => u
            }), a(898992), a(672577)
        },
        73888: (e, t, a) => {
            a.d(t, {
                y: () => u
            }), a(944114), a(898992), a(354520), a(803949), a(581454);

            function u(e) {
                let {
                    environment: t,
                    transaction: u,
                    spaceStore: i,
                    actors: r,
                    metadata: o
                } = e;
                if (!i.isDefined()) return !1;
                let n = i.id,
                    D = r.filter(e => "user" === e.type).map(e => ({
                        id: (0, a(729052).yO)({
                            spaceId: n,
                            userId: e.userId
                        }),
                        space_id: n,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    s = r.filter(e => "bot" === e.type).map(e => {
                        var t, u;
                        return {
                            id: (0, a(611042).YS)({
                                spaceId: i.id,
                                botId: e.botId
                            }),
                            space_id: n,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (u = e.parent) ? void 0 : u.table,
                            membership_type: e.membershipType
                        }
                    });
                return D.map(e => [e, a(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).dp)(i, e.user_id),
                    operation: t,
                    transaction: u
                })), s.map(e => [e, a(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).Ts)(i, e.bot_id),
                    operation: t,
                    transaction: u
                })), u.postSubmitCallbacks.push(async u => {
                    var n, d;
                    let c = r.map(e => (0, a(283161).z)(e));
                    a(594311).Ah({
                        status: u ? "fail" : "success",
                        location: null == o ? void 0 : o.pagePermissionChangeLocation,
                        permission_items: c
                    }), D.forEach(e => {
                        a(594311).sY({
                            spaceUser: e,
                            from: null == o ? void 0 : o.from,
                            status: u ? "fail" : "success"
                        })
                    }), s.forEach(e => {
                        a(594311).W7({
                            spaceBot: e,
                            from: null == o ? void 0 : o.from,
                            status: u ? "fail" : "success"
                        })
                    }), null != (n = e.metadata) && n.metric && a(680007).default.DO_NOT_USE_measureLegacy(null == (d = e.metadata) ? void 0 : d.metric, {}), u || await a(371151).nO({
                        environment: t,
                        spaceStore: i
                    })
                }), !0
            }
        },
        81930: (e, t, a) => {
            a.d(t, {
                D: () => o,
                P: () => r
            }), a(16280), a(581454), a(296540);
            var u = a(474848);
            let i = (0, a(109939).YK)({
                removingGuest: {
                    id: "convertGuestToMember.removeGuest.updatingMessage",
                    defaultMessage: "Updating…"
                },
                convertingGuest: {
                    id: "convertGuestToMember.convertingGuest.updatingMessage",
                    defaultMessage: "Updating…"
                }
            });
            async function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    membershipType: o,
                    guestUserStore: n
                } = e, D = n.id, s = n.getEmail();
                try {
                    if (a(262058).m({
                            message: i.convertingGuest
                        }), !r.isTeamsEnabled() && !await a(821969).oH({
                            environment: t,
                            flowId: "",
                            trackCreateTeamComplete: !1
                        })) return;
                    let u = [{
                            type: "user",
                            userId: D,
                            membershipType: o,
                            inviteId: void 0
                        }],
                        {
                            serverCommitResult: n
                        } = (0, a(377796).createAndCommit)({
                            userAction: "spacePerimssionGuestActions.convertGuestToMember",
                            environment: t,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: r.id
                            },
                            perform: e => {
                                (0, a(73888).y)({
                                    environment: t,
                                    spaceStore: r,
                                    actors: u,
                                    transaction: e
                                })
                            }
                        });
                    await n, a(287621).gc(t, {
                        member_user_id: D,
                        convert_to: "owner" === o ? "admin" : "member",
                        origin: e.origin
                    }), a(179701).Jg(t, {
                        role: (0, a(729052).ps)(o),
                        is_space: !0,
                        invite_targets: [{
                            type: "existingUser",
                            value: {
                                id: D,
                                version: 0,
                                email: ""
                            },
                            membershipType: "none"
                        }],
                        is_onboarding: !1,
                        invite_origin: "convert_to_member",
                        permission_items: u.map(e => (0, a(283161).z)(e)),
                        invite_message_length: 0,
                        domainType: (0, a(904434).FX)()
                    })
                } catch (e) {
                    a(436555).D6({
                        label: (0, u.jsx)(a(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.snackbar.failure",
                            defaultMessage: "Failed to convert {email} to workspace member",
                            values: {
                                email: s
                            }
                        })
                    })
                } finally {
                    await a(371151).nO({
                        environment: t,
                        spaceStore: r
                    }), a(262058).V()
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    guestUserStore: o
                } = e, n = o.id, D = o.getEmail();
                try {
                    a(262058).m({
                        message: i.removingGuest
                    });
                    let e = await t.api.callApi({
                        eventName: "removeUsersFromSpace",
                        environment: t,
                        data: {
                            userIds: [n],
                            spaceId: r.id,
                            removePagePermissions: !0,
                            revokeUserTokens: !1
                        }
                    });
                    if ("success" === e.type) a(287621).wX(t);
                    else throw Error("Failed to remove guest")
                } catch (e) {
                    a(436555).D6({
                        label: (0, u.jsx)(a(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.snackbar.failure",
                            defaultMessage: "Failed to remove {email} from workspace",
                            values: {
                                email: D
                            }
                        })
                    })
                } finally {
                    await a(371151).nO({
                        environment: t,
                        spaceStore: r
                    }), a(262058).V(), a(287621).xO(t, {
                        origin: "space_setting_guest_tab",
                        changedNumber: -1
                    })
                }
            }
        },
        111057: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var u = () => a(546605);
            class i extends u().Store {
                getInitialState() {
                    return {
                        recentRecoverableUsers: [],
                        searchQuery: void 0
                    }
                }
            }
            let r = new i
        },
        130782: (e, t, a) => {
            a.r(t), a.d(t, {
                MobileCommentsModalRenderer: () => r
            });
            var u = a(296540),
                i = a(474848);

            function r() {
                let e = (0, a(682985).K8)(() => a(718106).W.state.open, []),
                    [t, r] = (0, u.useState)(Date.now()),
                    o = (0, u.useCallback)(() => {
                        a(718106).W.setState({
                            open: !1
                        }), a(449473).B8.update(e => ({ ...e,
                            activeDiscussionStore: void 0,
                            hasActiveDraftComment: !1
                        }))
                    }, []);
                return ((0, u.useEffect)(() => {
                    e && r(Date.now())
                }, [e]), a(986939).A.isMobile) ? (0, i.jsx)(a(182718).zD, {
                    popupType: a(182718).nl.BottomSheet,
                    bottomSheetInitialState: "half",
                    bottomSheetBackgroundColor: "primary",
                    trapFocus: !0,
                    open: e,
                    content: () => (0, i.jsx)(a(400332).R, {
                        timeViewed: t,
                        location: "popup",
                        onMobileClose: o
                    }),
                    onDismiss: o
                }) : null
            }
        },
        133565: (e, t, a) => {
            a.d(t, {
                E: () => u
            });

            function u(e) {
                let {
                    spaceId: t
                } = e, u = (0, a(226309).lh)({
                    spaceId: t
                });
                return (0, a(192159).Fq)(u)
            }
        },
        151002: (e, t, a) => {
            a.d(t, {
                i: () => u
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);

            function u(e) {
                var t;
                let u, i, r, {
                        environment: o,
                        type: n,
                        blockStore: D,
                        commentTextValue: s,
                        transaction: d,
                        files: c,
                        property_id: l,
                        formulasModule: p,
                        fromOverride: f
                    } = e,
                    m = e.discussionId ? ? (0, a(295447).Z1)({
                        environment: o,
                        table: a(832375).$YH,
                        spaceId: D.pointer.spaceId
                    }),
                    {
                        id: b
                    } = o.currentUser;
                if (!b) return;
                let g = a(332190).A.state,
                    {
                        property_type: F,
                        collection_id: C,
                        collection_view_id: v,
                        view_type: I,
                        collection_view_block_id: h
                    } = (0, a(618682).q)(l, D);
                if (l && g.open && "block" === g.type) {
                    let e = g.blockStore.getPropertyStore(l);
                    if (u = e.getValue() || [], "status" === F && 0 === u.length && (u = [
                            [a(962299).A.formatMessage(a(998833).M_.statusOptionNotStarted)]
                        ]), "formula" === F && (u = function({
                            store: e,
                            blockStore: t,
                            property_id: u,
                            formulasModule: i,
                            environment: r
                        }) {
                            var o;
                            let n = t.getAssociatedCollectionStore(),
                                D = t.getRecordModel,
                                s = null == n ? void 0 : n.getModel(),
                                d = null == s ? void 0 : s.getNormalizedSchema(D)[u],
                                c = null == d || null == (o = d.formula2) ? void 0 : o.code,
                                l = t.getModel(),
                                p = Number(a(627179).Xb),
                                f = a(218744).default.getConfigKey("collection_request_settings", "clientFormulaTimeoutMs") ? ? p;
                            if (l && c && i) {
                                let o = i.evaluateCollectionFormula2WithoutCache({
                                    block: l,
                                    property: u,
                                    formulaCode: c,
                                    getRecordModel: e.getRecordModel,
                                    intl: a(962299).A.getIntl(),
                                    userTimeZone: (0, a(714350).P)(),
                                    depth: 0,
                                    visitedProperties: new Set,
                                    formulaTimeoutTimestampMs: Date.now() + f,
                                    resultCache: new Map,
                                    regExpCache: new Map,
                                    formatDateCache: new Map,
                                    experimentService: a(218744).default,
                                    collectionFeatureGates: (0, a(457103).i)(),
                                    spaceIdCreator: r.idCreator.getSpaceIdCreatorSync(t.getSpaceId())
                                });
                                if (o && a(300441).Q.isSuccess(o)) return (0, a(297493).Ht)(o.value)
                            }
                            return []
                        }({
                            store: e,
                            blockStore: D,
                            property_id: l,
                            formulasModule: p,
                            environment: o
                        })), "text" === F) {
                        let t = {
                            startIndex: 0,
                            endIndex: (0, a(247438).qAZ)(u).length
                        };
                        a(589873).Mw({
                            environment: o,
                            store: e,
                            selection: t,
                            annotation: [a(247438).Ifu.Discussion, m],
                            transaction: d
                        })
                    }
                }
                let E = D.getType(),
                    _ = D.getFormat();
                if ((0, a(955630).Db)(E, _) && !(0, a(955630).$I)(E)) {
                    let e = D.getTitleValue();
                    i = a(247438).DJ2(a(247438).Uee(e, {
                        removeSuggestionAnnotationsAndText: !0,
                        removeSuggestionAnnotations: !0,
                        removeDiscussions: !0
                    }))
                }
                l && u && (i = u);
                let {
                    discussionStore: S,
                    commentStore: A
                } = (0, a(952874).G)({
                    createDiscussionArgs: "default" === n ? {
                        type: "default",
                        context: i,
                        property_id: l
                    } : {
                        type: "suggestion",
                        modifiedBlockIds: [D.pointer.id]
                    },
                    blockStore: D,
                    environment: o,
                    transaction: d,
                    commentTextValue: s,
                    files: a(385475).JC(c),
                    discussionId: m
                });
                (0, a(598403).B)({
                    transaction: d,
                    blockStore: D,
                    discussionId: S.id
                }), a(332190).A.state.open ? "comment" === a(332190).A.state.content && (r = a(332190).A.state.from) : r = a(332190).A.state.from, f && (r = f);
                let y = (0, a(545849).B)(null == (t = D.getAssociatedCollectionStore()) ? void 0 : t.getLayoutStore());
                return a(65255).v3(o, {
                    discussion_id: S.id,
                    discussion_type: S.getType(),
                    comment_id: A.id,
                    parent_block_id: S.getParentId(),
                    from: r,
                    property_id: l,
                    property_type: F,
                    collection_view_id: v,
                    view_type: I,
                    collection_id: C,
                    collection_view_block_id: h,
                    page_discussion_layout_location: y
                }), (0, a(585356).c)(), S
            }
        },
        179701: (e, t, a) => {
            function u(e) {
                var t;
                let u = e.invite_targets.filter(a(64273).Gz),
                    i = e.invite_targets.filter(a(64273).ju),
                    r = u.length + i.length,
                    o = a(381453).oE(e.permission_items.map(e => {
                        if ("user_permission" === e.type) return e.user_id && (0, a(4962).ot)(e.user_id)
                    })),
                    n = new Set(null == (t = (0, a(328765).S)()) ? void 0 : t.getEmailDomains()),
                    D = e.invite_targets.filter(e => {
                        if ("existingUser" !== e.type && "newUser" !== e.type) return !1;
                        let t = (0, a(801109).zN)(e.value.email);
                        return t && n.has(t)
                    }).flatMap(e => "agent" === e.type ? [] : e.value.id ? [(0, a(4962).ot)(e.value.id)] : []),
                    s = (0, a(216260).AI)(),
                    d = e.invitee_ids_with_internal_domain ? ? [];
                return {
                    role: e.role,
                    user_count: r,
                    new_user_count: u.length,
                    new_workspace_member_count: e.is_space ? r : D.length,
                    new_workspace_member_ids: e.is_space ? o : D,
                    is_onboarding: e.is_onboarding,
                    invite_flow_id: e.invite_flow_id,
                    invite_origin: e.invite_origin,
                    invitee_ids: o,
                    invite_message_length: e.invite_message_length,
                    subscription_tier: s,
                    domain_type: e.domainType,
                    ...!e.is_space && {
                        share_menu_session_id: e.share_menu_session_id
                    },
                    allow_domain_auto_invite: D.length > 0,
                    is_space: e.is_space,
                    collection_id: e.collection_id,
                    owned_collection_count: e.owned_collection_count,
                    linked_collection_count: e.linked_collection_count,
                    parent_collection_id: e.parent_collection_id,
                    is_internal_domain: d.length > 0,
                    invitee_ids_with_internal_domain: d,
                    invitee_ids_with_internal_domain_enforced: e.invitee_ids_with_internal_domain_enforced
                }
            }

            function i(e) {
                let t = u(e);
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_error",
                        eventProperties: t
                    }
                })
            }

            function r(e, t) {
                let i = u(t);
                (0, a(104310).u)({
                    event: {
                        eventName: "invite",
                        eventProperties: { ...i,
                            is_space: t.is_space
                        }
                    }
                });
                let r = (0, a(328765).S)();
                if (!r) return;
                let n = r.id;
                if (a(105692).subscriptionDataStoreInstance.waitUntilLoaded().then(() => {
                        let u = a(105692).subscriptionDataStoreInstance.state,
                            r = u ? (0, a(34504).V)(e, u, n) : void 0,
                            D = u ? (0, a(19676).h)(e, u, n) : void 0;
                        (0, a(104310).u)({
                            event: {
                                eventName: "invite_debug_with_block_usage",
                                eventProperties: { ...i,
                                    is_space: t.is_space,
                                    is_over_block_limit: r,
                                    block_usage: D
                                }
                            }
                        }), t.is_space || (o(e, i), a(287621).xO(e, {
                            inviteTargets: t.invite_targets,
                            origin: t.invite_origin
                        }))
                    }), t.is_space || i.allow_domain_auto_invite) {
                    (0, a(104310).u)({
                        event: {
                            eventName: "space_invite",
                            eventProperties: i
                        }
                    }), (0, a(772208).M)(e, {
                        space_invited: !0
                    }), a(287621).KX(e, {
                        invite_origin: t.invite_origin,
                        domainType: t.domainType,
                        new_workspace_member_count: i.new_workspace_member_count,
                        new_workspace_member_ids: i.new_workspace_member_ids,
                        allow_domain_auto_invite: i.allow_domain_auto_invite
                    });
                    let u = (0, a(616579).j)({
                        environment: e,
                        spaceId: r.id
                    }) ? ? 1;
                    var D, s = e,
                        d = {
                            visibleMembersCount: u,
                            isProfessionalTeamUser: t.isProfessionalTeamUser,
                            domainType: t.domainType
                        };
                    let o = (0, a(216260).AI)();
                    if (d.visibleMembersCount <= 1) {
                        (0, a(195857).DO_NOT_USE_trackLegacy)("workspace_first_invite_sent"), D = {
                            subscriptionTier: o,
                            domainType: d.domainType
                        }, (0, a(378414).W)(s, {
                            event: "workspace_first_invite_sent",
                            data: D
                        }), "professional" === d.domainType && ((0, a(104310).u)({
                            event: {
                                eventName: "professional_workspace_first_invite_sent",
                                eventProperties: {
                                    visible_members_count: d.visibleMembersCount,
                                    is_professional_team_user: d.isProfessionalTeamUser,
                                    domain_type: d.domainType
                                }
                            }
                        }), (0, a(378414).W)(s, {
                            event: "professional_workspace_first_invite_sent"
                        }))
                    }
                }
                t.is_space || i.new_workspace_member_ids.length === t.invite_targets.length || ((0, a(104310).u)({
                    event: {
                        eventName: "page_invite",
                        eventProperties: i
                    }
                }), function(e, t) {
                    let u = a(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!u) return;
                    let i = u.getKeyStore("settings").getKeyStore("signup_time").getValue();
                    if (!u.getKeyStore("settings").getKeyStore("first_page_invite_at").getValue()) {
                        let r = Date.now(),
                            o = { ...t,
                                ...i ? {
                                    signup_time_ready: !0,
                                    time_from_signup_to_first_page_invite: i - r
                                } : {
                                    signup_time_ready: !1
                                }
                            };
                        (0, a(104310).u)({
                            event: {
                                eventName: "page_invite_time",
                                eventProperties: o
                            }
                        }), (0, a(377796).createAndCommit)({
                            userAction: "firstPageInvite",
                            environment: e,
                            cellTarget: "main",
                            userId: u.id,
                            canUndo: !0,
                            perform: e => {
                                (0, a(862759).m)({
                                    userSettingsStore: u,
                                    data: {
                                        first_page_invite_at: r
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }
                }(e, i))
            }
            async function o(e, t) {
                let u, i = a(728372).AppStoreSidebarSpaceStore.state,
                    r = a(728372).AppStoreCurrentUserStore.state,
                    o = i && i.canEditMembership(),
                    n = a(904434).FX(),
                    D = null == r ? void 0 : r.getEmail();
                if (!o || !n || !D || "professional" !== n) return;
                let s = (0, a(801109).zN)(D);
                if (s) {
                    if (a(908032).i({
                            userId: null == r ? void 0 : r.id,
                            spaceId: i.id,
                            debugFrom: "trackPageInviteGuestSummary"
                        })) {
                        let t = a(218744).default.getConfigKey("email_alias_migration", "mode"),
                            r = await e.api.callApi({
                                eventName: "listUsers",
                                environment: e,
                                data: {
                                    cursor: void 0,
                                    membershipFilter: "guests",
                                    limit: 1e4,
                                    sort: "name_normalized",
                                    sortDirection: "asc",
                                    query: "",
                                    spaceId: i.id,
                                    includeAliasSearch: (0, a(485477).K)(t)
                                }
                            });
                        if ("success" !== r.type) return;
                        u = r.data.users.map(e => e.id)
                    } else {
                        let e = a(105692).subscriptionDataStoreInstance.state;
                        if (!e) return;
                        u = (0, a(883947).o)(e).slice(0, 50).map(e => ({
                            email: a(807825).L.createChildStore(i, {
                                table: a(832375).oo9,
                                id: e.userId
                            }).getEmail(),
                            guestId: e.userId
                        })).filter(e => e.email && (0, a(801109).zN)(e.email) === s).map(e => e.guestId)
                    }(0, a(104310).u)({
                        event: {
                            eventName: "page_invite_guest_summary",
                            eventProperties: { ...t,
                                guest_with_same_domain_count: u.length,
                                guest_ids: u
                            }
                        }
                    })
                }
            }

            function n(e) {
                let t = (0, a(192159).AI)(e.billingData);
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_typed",
                        eventProperties: {
                            invite_flow_id: e.invite_flow_id,
                            invite_origin: e.invite_origin,
                            subscription_tier: t
                        }
                    }
                })
            }

            function D(e) {
                let t, {
                    selected_user_token: u
                } = e;
                "group" === u.type && (t = {
                    type: u.type,
                    value: {
                        id: u.value.group_id
                    }
                }), (0, a(104310).u)({
                    event: {
                        eventName: "invite_select_target",
                        eventProperties: t ? { ...e,
                            selected_user_token: t
                        } : e
                    }
                })
            }

            function s(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_change_role",
                        eventProperties: e
                    }
                })
            }

            function d(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "abandon_permissions_invite",
                        eventProperties: e
                    }
                })
            }

            function c(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_share_workspace_invite",
                        eventProperties: e
                    }
                })
            }

            function l(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "send_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function p(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "send_membership_request",
                        eventProperties: e
                    }
                })
            }

            function f(e) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("send_guest_request", e)
            }

            function m(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "skip_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function b(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_page_share_invite",
                        eventProperties: e
                    }
                })
            }

            function g() {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_space_invite",
                        eventProperties: {}
                    }
                })
            }

            function F(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_modal_input_focus",
                        eventProperties: e
                    }
                })
            }

            function C(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_users_to_page",
                        eventProperties: e
                    }
                }), a(707964).u4({
                    name: "invite_users_to_page"
                })
            }

            function v(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "internal_domain_enforced",
                        eventProperties: e
                    }
                })
            }

            function I() {
                (0, a(104310).u)({
                    event: {
                        eventName: "workspace_over_guest_limit",
                        eventProperties: {}
                    }
                })
            }

            function h(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_invite_members_modal",
                        eventProperties: e
                    }
                })
            }

            function E(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "share_menu_invite_display_mode_change",
                        eventProperties: e
                    }
                })
            }
            a.d(t, {
                iv: () => d,
                _u: () => l,
                Jg: () => r,
                J8: () => i,
                hp: () => v,
                Jy: () => s,
                Wd: () => F,
                kH: () => D,
                D2: () => n,
                R2: () => C,
                vX: () => h,
                F1: () => b,
                bT: () => c,
                VV: () => g,
                xF: () => f,
                RH: () => p,
                UC: () => E,
                l8: () => m,
                ig: () => I
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(430670), a(581454)
        },
        187649: (e, t, a) => {
            let u, i;

            function r(e) {
                u = e
            }
            async function o() {
                return i || (u ? i = await u() : void 0)
            }
            a.d(t, {
                Q: () => r,
                z: () => o
            })
        },
        189684: (e, t, a) => {
            function u(e) {
                return e.replaceAll(/(<([^>]+)>)/gi, "").trim()
            }

            function i(e, t = 140) {
                if (e.length <= t) return e;
                let a = e.substring(0, t).trim(),
                    u = a.split(" ");
                return u.length > 1 && " " !== a.charAt(a.length - 1) ? (u.pop(), `${u.map(e=>e.trim()).join(" ")}...`) : `${a.substring(0,t-3)}...`
            }

            function r(e) {
                return /[\"\']/.test(e)
            }
            a.d(t, {
                Kq: () => u,
                vo: () => r,
                xv: () => i
            }), a(898992), a(354520), a(581454)
        },
        196441: (e, t, a) => {
            a.d(t, {
                n$: () => i,
                rx: () => u,
                yA: () => r
            });
            let u = 1;

            function i(e) {
                switch (a(381453).qE(a(381453).LI(e, 1), .5, 4.9)) {
                    case .5:
                        return 155;
                    case .6:
                        return 128;
                    case .7:
                        return 108;
                    case .8:
                        return 94;
                    case .9:
                        return 83;
                    default:
                        return 75
                }
            }

            function r(e) {
                let t = a(381453).qE(a(381453).LI(e, 1), .5, 4.9);
                switch (t) {
                    case .5:
                        return 273;
                    case .6:
                        return 228;
                    case .7:
                        return 195;
                    case .8:
                        return 171;
                    case .9:
                        return 151;
                    case 1:
                        return 136;
                    case 1.1:
                        return 123;
                    case 1.2:
                        return 113;
                    case 1.3:
                        return 105;
                    case 1.4:
                        return 97;
                    case 1.5:
                        return 91;
                    case 1.6:
                        return 85;
                    default:
                        return Math.max(85 - Math.floor((t - 1.6) * 50), 0)
                }
            }
        },
        197657: (e, t, a) => {
            function u(e) {
                let {
                    discussionLocation: t,
                    environment: u,
                    transaction: o,
                    store: n,
                    icon: D
                } = e, s = function({
                    store: e,
                    icon: t
                }) {
                    let u = (0, a(517013).G_)(e, e.pointer, "reactions").getValue();
                    if (void 0 !== u) return u.map(t => {
                        let u = a(868249).L.createChildStore(e, {
                            table: a(832375).ez7,
                            id: t,
                            spaceId: (0, a(226221).e)(e.pointer.spaceId)
                        });
                        if (u.isDefined()) return u
                    }).filter(a(722371).O9).find(e => e.getIcon() === t)
                }({
                    store: n,
                    icon: D
                });
                if (void 0 === u.currentUser.id) return;
                let d = {
                    table: a(832375).oo9,
                    id: u.currentUser.id
                };
                return null != s && s.isDefined() ? function({
                    store: e,
                    actorPointer: t,
                    transaction: u,
                    environment: i,
                    discussionLocation: o
                }) {
                    var n;
                    let D = {
                            store: e,
                            actorPointer: t,
                            transaction: u,
                            environment: i,
                            discussionLocation: o
                        },
                        s = e.getParentStore(),
                        d = (null == s ? void 0 : s.table) === a(832375).$YH ? s : null == s ? void 0 : s.getParentStore(),
                        c = (null == (n = e.getActors()) ? void 0 : n.some(e => e.id === t.id)) ? ? !1;
                    return (d && r(d, s) && (0, a(737146).U)({
                        transaction: u,
                        discussionStore: d
                    }), c) ? (function(e) {
                        var t, u;
                        let {
                            store: i,
                            actorPointer: r,
                            discussionLocation: o,
                            transaction: n,
                            environment: D
                        } = e;
                        if (!i.isDefined()) return;
                        let s = i.getParentStore(),
                            d = (null == s ? void 0 : s.table) === a(832375).$YH ? s : null == s ? void 0 : s.getParentStore(),
                            c = a(313432).eR.includes(o),
                            l = null == d || null == (t = d.getParentStore()) ? void 0 : t.getNavigableBlockStore(),
                            p = 1 === a(868249).L.getUserVisibleReactions(s).length && 1 === i.getActors().length && i.getActors()[0].id === D.currentUser.id;
                        a(65255).fq({
                            environment: D,
                            reaction_value: i.getIcon(),
                            comment_id: i.getParentId(),
                            discussion_id: null == d ? void 0 : d.id,
                            discussion_type: null == d ? void 0 : d.getType(),
                            parent_block_id: null == d ? void 0 : d.getParentId(),
                            parent_collection_id: null == d || null == (u = d.getParentStore()) ? void 0 : u.getParentCollectionIdUpToTwoLevels(),
                            reaction_count: i.getActors().length ? ? 0,
                            from: o,
                            ...c && {
                                inbox_session_id: a(825109).Ay.state.sessionId,
                                notification_page_id: null == l ? void 0 : l.id
                            }
                        });
                        let f = i.getModel();
                        (0, a(421439).y4)({
                            transaction: n,
                            store: i,
                            operation: f.ops.removeActor(r)
                        }), p && s && s.table === a(832375).$YH && (0, a(247027).v)({
                            environment: D,
                            discussionStore: s,
                            transaction: n
                        })
                    }(D), "Removed") : (function(e) {
                        var t, u;
                        let {
                            store: i,
                            actorPointer: r,
                            discussionLocation: o,
                            transaction: n,
                            environment: D
                        } = e;
                        if (!i.isDefined()) return;
                        let s = i.getParentStore(),
                            d = (null == s ? void 0 : s.table) === a(832375).$YH ? s : null == s ? void 0 : s.getParentStore(),
                            c = a(313432).eR.includes(o),
                            l = null == d || null == (t = d.getParentStore()) ? void 0 : t.getNavigableBlockStore();
                        a(65255).MP({
                            environment: D,
                            reaction_value: i.getIcon(),
                            comment_id: i.getParentId(),
                            discussion_id: null == d ? void 0 : d.id,
                            discussion_type: null == d ? void 0 : d.getType(),
                            parent_block_id: null == d ? void 0 : d.getParentId(),
                            parent_collection_id: null == d || null == (u = d.getParentStore()) ? void 0 : u.getParentCollectionIdUpToTwoLevels(),
                            reaction_count: i.getActors().length ? ? 0,
                            from: o,
                            ...c && {
                                inbox_session_id: a(825109).Ay.state.sessionId,
                                notification_page_id: null == l ? void 0 : l.id
                            }
                        });
                        let p = i.getModel();
                        (0, a(421439).y4)({
                            transaction: n,
                            store: i,
                            operation: p.ops.appendActor(r)
                        })
                    }(D), "Added")
                }({
                    environment: u,
                    store: s,
                    actorPointer: d,
                    transaction: o,
                    discussionLocation: t
                }) : (i({
                    environment: u,
                    transaction: o,
                    store: n,
                    icon: D,
                    currentActorPointer: d,
                    discussionLocation: t
                }), "Added")
            }

            function i({
                environment: e,
                transaction: t,
                store: u,
                icon: o,
                currentActorPointer: n,
                discussionLocation: D
            }) {
                var s, d;
                let c = (0, a(295447).JH)({
                        environment: e,
                        table: a(832375).ez7,
                        spaceId: (0, a(226221).e)(u.pointer.spaceId)
                    }),
                    l = u.table === a(832375).$YH ? u : u.getParentStore(),
                    p = a(313432).eR.includes(D),
                    f = null == l || null == (s = l.getParentStore()) ? void 0 : s.getNavigableBlockStore(),
                    m = null == l ? void 0 : l.getPropertyId(),
                    b = null == l ? void 0 : l.getParentStore(),
                    {
                        property_type: g,
                        collection_id: F,
                        collection_view_id: C,
                        view_type: v,
                        collection_view_block_id: I
                    } = (0, a(618682).q)(m, b);
                a(65255).MP({
                    environment: e,
                    reaction_value: o,
                    comment_id: u.id,
                    discussion_id: null == l ? void 0 : l.id,
                    discussion_type: null == l ? void 0 : l.getType(),
                    parent_block_id: null == l ? void 0 : l.getParentId(),
                    parent_collection_id: null == l || null == (d = l.getParentStore()) ? void 0 : d.getParentCollectionIdUpToTwoLevels(),
                    reaction_count: 0,
                    from: D,
                    ...p && {
                        inbox_session_id: a(825109).Ay.state.sessionId,
                        notification_page_id: null == f ? void 0 : f.id
                    },
                    property_type: g,
                    collection_id: F,
                    collection_view_id: C,
                    view_type: v,
                    collection_view_block_id: I
                });
                let h = a(124937).vt({
                        environment: e,
                        table: c.table,
                        args: {
                            id: c.id,
                            spaceId: c.spaceId,
                            commentId: u.id,
                            icon: o,
                            actorPointer: n
                        },
                        inMemoryRecordCache: u.inMemoryRecordCache,
                        transaction: t
                    }),
                    E = (0, a(517013).G_)(u, u.pointer, "reactions");
                (0, a(135674).B)({
                    parentStore: E,
                    appendStore: h,
                    transaction: t
                }), l && r(l, u) && (0, a(737146).U)({
                    transaction: t,
                    discussionStore: l
                })
            }

            function r(e, t) {
                var u;
                if (!e || !t || t.table !== a(832375).SNf) return !1;
                let i = null == (u = e.getUserSeenRecordStore()) ? void 0 : u.getLastSeenAt();
                return !i || i < t.getCreatedTime()
            }
            a.r(t), a.d(t, {
                createReaction: () => i,
                toggleReaction: () => u
            }), a(898992), a(354520), a(672577), a(581454), a(737550)
        },
        205954: (e, t, a) => {
            function u({
                spaceStore: e,
                members: t
            }) {
                let i = o({
                        spaceStore: e
                    }),
                    r = (0, a(533992).v3)(),
                    n = e.id,
                    [D] = (0, a(97668).Yb)(async () => {
                        if (!i) return;
                        let e = await r.api.callApi({
                            eventName: "getRecentlyRemovedUsers",
                            environment: r,
                            data: {
                                spaceId: n
                            }
                        });
                        if ("failed" === e.type) throw a(647095).Qg(e), e;
                        return e.data.recentlyRemovedMembers
                    }, [n, r, i, t]);
                return D.value
            }

            function i({
                spaceStore: e,
                subscriptionData: t
            }) {
                let u = r({
                        spaceStore: e,
                        subscriptionData: t
                    }),
                    o = (0, a(533992).v3)();
                (0, a(97668).Yb)(async () => {
                    if (!u) return;
                    let t = await o.api.callApi({
                        eventName: "getRecoverableSpaceUserContent",
                        environment: o,
                        data: {
                            spaceId: e.id
                        }
                    });
                    if ("failed" === t.type) throw t;
                    let i = t.data.recentSpaceRecoverPages;
                    return a(111057).A.setState({ ...a(111057).A.state,
                        recentRecoverableUsers: i
                    }), i
                }, [e, o, u])
            }

            function r({
                spaceStore: e,
                subscriptionData: t
            }) {
                return (0, a(682985).K8)(() => e.canAdmin() && a(262166).OX(t.subscriptionTier), [t, e])
            }

            function o({
                spaceStore: e
            }) {
                return (0, a(682985).K8)(() => e.canAdmin(), [e])
            }

            function n({
                spaceStore: e
            }) {
                return (0, a(682985).K8)(() => !!e && e.canEditMembership(), [e])
            }

            function D({
                spaceStore: e
            }) {
                let t = (0, a(993077).U2)(e);
                return (0, a(682985).K8)(() => (0, a(405461).Ny)({
                    spaceStore: e,
                    spaceUserStore: t
                }), [e, t])
            }

            function s() {
                let e = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => (0, a(939588).v)(e), [e])
            }

            function d({
                spaceStore: e
            }) {
                let t = (0, a(394810).h)(e);
                return (0, a(682985).K8)(() => !!((null == e ? void 0 : e.canEditMembership()) && t), [e, t])
            }

            function c({
                spaceStore: e
            }) {
                let t = (0, a(394810).h)(e),
                    u = !!((0, a(682985).K8)(() => null == e ? void 0 : e.canAdmin(), [e]) && t);
                return {
                    hoverCard: u,
                    directory: u,
                    activity: u
                }
            }
            a.d(t, {
                BV: () => u,
                Gg: () => d,
                Ul: () => c,
                k4: () => n,
                qz: () => D,
                r1: () => o,
                rl: () => i,
                t1: () => r,
                zh: () => s
            })
        },
        210882: (e, t, a) => {
            a.d(t, {
                m: () => i
            }), a(296540);
            var u = a(474848);

            function i({
                color: e,
                size: t,
                style: r
            }) {
                let o = (0, a(109939).tz)(),
                    n = (0, a(960253).I)(() => ({
                        dot: {
                            height: t || 8,
                            width: t || 8,
                            background: e || a(632079).Tj.blue.icon.accentPrimary,
                            flexShrink: 0,
                            borderRadius: "100%",
                            pointerEvents: "none",
                            ...r
                        }
                    }), [t, e, r]);
                return (0, u.jsx)("div", {
                    role: "img",
                    "aria-label": o.formatMessage({
                        id: "statusDot.ariaLabel",
                        defaultMessage: "New"
                    }),
                    style: n.dot
                })
            }
        },
        215813: (e, t, a) => {
            a.d(t, {
                E: () => o
            }), a(944114);
            var u = () => a(517013),
                i = () => a(832375),
                r = () => a(173157);

            function o(e) {
                var t;
                let {
                    environment: o,
                    store: n,
                    permissionItems: D,
                    transaction: s,
                    inviteFlowId: d,
                    inviteMessage: c,
                    inviteOrigin: l,
                    disable_invite_email: p
                } = e, f = n.getSpaceId() || (n.table === i().NXh ? n.id : null == (t = (0, a(974410).f)(n)) ? void 0 : t.id), {
                    id: m
                } = o.currentUser;
                for (let e of D)
                    if (f && "user_permission" === e.type && e.invite_id) {
                        if (n.table === i().C0E) continue;
                        let {
                            inviteeId: t,
                            inviteeTable: o
                        } = function(e) {
                            let {
                                item: t,
                                spaceId: u
                            } = e;
                            return a(642157).B2(t) ? {
                                inviteeId: t.user_id,
                                inviteeTable: i().oo9
                            } : a(642157).P3(t) ? {
                                inviteeId: t.bot_id,
                                inviteeTable: i().GPl
                            } : a(642157).Ds(t) ? {
                                inviteeId: t.group_id,
                                inviteeTable: a(434652).gp
                            } : a(642157).Lg(t) ? {
                                inviteeId: u,
                                inviteeTable: i().NXh
                            } : a(642157).gl(t) ? {
                                inviteeId: t.team_id,
                                inviteeTable: i().yKj
                            } : {}
                        }({
                            item: e,
                            spaceId: f
                        }), D = {
                            id: e.invite_id,
                            version: 1,
                            flow_id: d,
                            space_id: f,
                            target_id: n.id,
                            target_table: n.table,
                            inviter_id: m,
                            inviter_table: i().oo9,
                            invitee_id: t,
                            invitee_table_or_group: o,
                            message: c,
                            created_time: Date.now(),
                            attributes: {
                                permission: e,
                                origin_type: l,
                                disable_invite_email: p
                            }
                        };
                        (0, r().z)({
                            store: (0, u().v3)(n, {
                                table: "invite",
                                id: D.id,
                                spaceId: f
                            }),
                            data: D,
                            transaction: s
                        })
                    }
                return s.postSubmitCallbacks.push(e => {
                    a(179701).R2({
                        status: e ? "fail" : "success",
                        origin: l
                    })
                }), !0
            }
        },
        246467: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var u = a(296540),
                i = a(474848);
            let r = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                o = function(e) {
                    let t, o = (0, a(109939).tz)(),
                        D = (0, a(75272).I)(),
                        s = (0, u.useRef)(),
                        d = (0, u.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let u = a(25825).q8(t, (0, a(714350).P)());
                            if (!u) return;
                            let i = u.valueOf(),
                                r = i - Date.now();
                            r < 0 || r > a(627179).nD || s.current && s.current.timestamp === i || (s.current && clearTimeout(s.current.timer), s.current = {
                                timestamp: i,
                                timer: setTimeout(() => D("DateBox", "DateBox/createReminderTimer"), r)
                            })
                        }, [D, e.value]),
                        c = (0, u.useCallback)(() => {
                            s.current && (clearTimeout(s.current.timer), s.current = void 0)
                        }, []);
                    (0, u.useEffect)(() => {
                        d()
                    }, [d]), (0, u.useEffect)(() => () => {
                        c()
                    }, [c]);
                    let {
                        value: l,
                        withComma: p
                    } = e, f = (0, a(682985).K8)(() => l ? (0, a(850640).ZF)({
                        value: l,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, a(714350).P)(),
                        allowRelativeDates: !0,
                        intl: o,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: a(132315).x1
                    }) : void 0, [o, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, l]);
                    if (!l) return null;
                    let m = a(25825).AA(l, (0, a(714350).P)(), a(849917).locale);
                    (0, a(943003).Lh)(l) && (t = a(25825).Zs(l, (0, a(714350).P)()) ? {
                        color: a(632079).Tj.red.text.accentPrimary
                    } : {
                        color: a(632079).Tj.blue.text.accentPrimary
                    });
                    let b = (0, i.jsxs)(i.Fragment, {
                        children: [f, (0, a(943003).Lh)(l) ? (0, i.jsx)(a(16275).I, {
                            icon: a(848194).alarmSmallIcon,
                            style: r
                        }) : void 0, p ? ", " : null]
                    });
                    return e.disableTooltip ? (0, i.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: b
                    }) : (0, i.jsx)(a(51831).m, {
                        content: () => (0, i.jsxs)(i.Fragment, {
                            children: [e.tooltipHeader, (0, i.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: a(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [n(m.start), m.end ? ` → ${n(m.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: a => (0, i.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...a,
                            children: b
                        })
                    })
                };

            function n(e) {
                return (0, a(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        247027: (e, t, a) => {
            a.d(t, {
                v: () => r
            });
            var u = () => a(966980),
                i = () => a(357018);

            function r(e) {
                let {
                    discussionStore: t,
                    transaction: r
                } = e, o = u().No(t);
                o && (0, i().u)({
                    discussionIds: [t.id],
                    transaction: r,
                    blockStore: o
                });
                let n = (0, a(385941).Z)();
                if (n)
                    for (let e of u().zo({
                            blockStore: n,
                            transclusionReferences: "recurseInto",
                            childPages: "omit"
                        })) {
                        if (o && e.table === o.table && e.id === o.id) continue;
                        let a = u().bN(e).getValue();
                        null != a && a.includes(t.id) && (0, i().u)({
                            discussionIds: [t.id],
                            transaction: r,
                            blockStore: e
                        })
                    }
            }
        },
        273770: (e, t, a) => {
            a.d(t, {
                A: () => u
            });
            let u = new(a(510969)).A
        },
        283161: (e, t, a) => {
            a.d(t, {
                z: () => u
            });

            function u(e) {
                return "user" === e.type ? {
                    type: "user_permission",
                    role: (0, a(729052).ps)(e.membershipType),
                    user_id: e.userId,
                    invite_id: e.inviteId
                } : "bot" === e.type ? {
                    type: "bot_permission",
                    role: (0, a(611042).rf)(e.membershipType),
                    bot_id: e.botId
                } : void(0, a(722371).HB)(e)
            }
        },
        308256: (e, t, a) => {
            a.d(t, {
                o: () => i
            }), a(296540);
            var u = a(474848);

            function i(e) {
                let {
                    group: t
                } = e, i = e.size ? ? 20, r = (0, a(109939).tz)(), o = (0, a(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), n = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: r,
                    permissionGroupModel: t
                }), [r, t]);
                return (0, u.jsx)("div", {
                    children: o ? (0, u.jsx)(a(569553).B6, {
                        disabled: !0,
                        size: i,
                        icon: o,
                        isEmptyPage: !1,
                        title: n
                    }) : (0, u.jsx)(a(391343).A, {
                        size: i
                    })
                })
            }
        },
        315384: (e, t, a) => {
            a.d(t, {
                u: () => i
            });
            let u = new(a(815048)).O2("PulsingWrapper", async () => a.e(45248).then(a.bind(a, 593830))),
                i = (0, a(815048).jQ)(u, e => e.PulsingWrapper, {
                    renderLoading: (e, t) => t.children
                })
        },
        322095: (e, t, a) => {
            function u(e, t) {
                return e.map(e => i(e, t))
            }

            function i(e, t) {
                var u, i;
                let r, {
                        nameMessage: o,
                        descriptionMessage: n,
                        ...D
                    } = e,
                    {
                        rootId: s,
                        previewRootId: d,
                        spaceId: c
                    } = (u = e, i = t, r = (0, a(599412).H)(i), u.sources[r] || u.sources[a(599412).q]);
                return { ...D,
                    id: o.id,
                    rootId: s,
                    spaceId: c,
                    previewRootId: d,
                    name: t.formatMessage(o),
                    description: n ? t.formatMessage(n) : void 0
                }
            }
            a.d(t, {
                B: () => i,
                o: () => u
            }), a(581454)
        },
        376921: (e, t, a) => {
            a.d(t, {
                Ay: () => D,
                mI: () => r,
                vb: () => o
            }), a(296540);
            var u = a(474848);
            let i = (0, a(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                r = a(696654).NY,
                o = {
                    [a(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [a(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [a(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: a(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                n = {
                    style0: { ...a(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function D({
                avatarSize: e,
                format: t,
                isSingle: r,
                onClickRemove: s,
                renderAvatar: d,
                showRemoveButton: c,
                shouldShrink: l,
                style: p,
                title: f
            }) {
                let m = (0, a(109939).tz)(),
                    {
                        height: b,
                        fontSize: g,
                        margin: F,
                        marginEditState: C,
                        closeIconSize: v,
                        avatarSize: I
                    } = o[t],
                    h = (0, a(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!l,
                            minWidth: 0,
                            height: b,
                            borderRadius: 6,
                            fontSize: g,
                            lineHeight: "120%",
                            margin: r ? 0 : c ? C : F,
                            ...p
                        }
                    }), [g, b, r, F, C, l, c, p]);
                return (0, u.jsxs)("div", {
                    style: h.root,
                    children: [null == d ? void 0 : d(e ? ? I), (0, u.jsx)("div", {
                        className: "notranslate",
                        style: n.style0,
                        children: f
                    }), c ? (0, u.jsx)(a(64960).Ay, {
                        ariaLabel: void 0 !== f ? m.formatMessage(i.removeTokenLabel, {
                            title: f
                        }) : m.formatMessage(i.removeTokenLabelGeneric),
                        onClick: s,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: b,
                            height: b,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, u.jsx)(a(16275).I, {
                            icon: a(519529).xMarkFillSmallIcon,
                            size: v,
                            style: n.style1
                        })
                    }) : null]
                })
            }
        },
        391343: (e, t, a) => {
            a.d(t, {
                A: () => i
            }), a(296540);
            var u = a(474848);

            function i(e) {
                let t = (0, a(47187).E)(e);
                return (0, u.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, u.jsx)(a(16275).I, {
                        icon: a(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        394810: (e, t, a) => {
            a.d(t, {
                h: () => u
            });

            function u(e) {
                var t;
                let {
                    spaceId: u,
                    currentUserId: i
                } = (0, a(682985).K8)(() => {
                    var t;
                    return {
                        spaceId: null == e ? void 0 : e.id,
                        currentUserId: null == (t = a(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id
                    }
                }, [e]), r = (0, a(217844)._)({
                    name: "members",
                    spaceId: u,
                    userId: i,
                    amount: "unknown"
                }), o = null == r || null == (t = r.limit) ? void 0 : t.total;
                return !!o && ("unlimited" === o || o > 1)
            }
        },
        400308: (e, t, a) => {
            a.d(t, {
                $: () => u
            }), a(581454);
            async function u(e) {
                let {
                    environment: t,
                    spaceStore: u,
                    userIds: i,
                    invite: r,
                    membershipType: o
                } = e, n = u.id, D = (0, a(295447).Gx)({
                    environment: t,
                    spaceId: n
                }), s = t.idCreator.getSpaceShortIdCreator(n, D), {
                    serverCommitResult: d
                } = (0, a(377796).createAndCommit)({
                    userAction: "permissionsActions.saveSpaceActors",
                    environment: t,
                    canUndo: !0,
                    useSudoMode: !1,
                    cellTarget: "main",
                    perform: e => {
                        let n = i.map(e => ({
                                type: "user",
                                userId: e,
                                inviteId: s.idInSavedSpace(a(832375).Yxt),
                                membershipType: o
                            })),
                            {
                                inviteFlowId: D,
                                inviteMessage: d,
                                inviteOrigin: c,
                                disable_invite_email: l
                            } = r;
                        (0, a(215813).E)({
                            environment: t,
                            store: u,
                            permissionItems: n.map(e => {
                                var t;
                                return t = e, {
                                    type: "user_permission",
                                    role: (0, a(729052).ps)(t.membershipType),
                                    user_id: t.userId,
                                    invite_id: t.inviteId
                                }
                            }),
                            transaction: e,
                            inviteFlowId: D,
                            inviteMessage: (0, a(765898).Hb)(d),
                            inviteOrigin: c,
                            disable_invite_email: l
                        }), (0, a(73888).y)({
                            environment: t,
                            spaceStore: u,
                            actors: n,
                            transaction: e
                        })
                    }
                });
                await d
            }
        },
        405461: (e, t, a) => {
            function u(e) {
                let {
                    intl: t,
                    groupName: u
                } = e;
                return u || t.formatMessage(a(95384).D.untitledGroupName)
            }

            function i(e) {
                var t;
                return (null == (t = a(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function r(e) {
                let {
                    userIds: t,
                    limit: u,
                    spaceStore: i
                } = e;
                if (!i) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let r = u ? t.slice(0, u) : t;
                return {
                    limitedUserStores: a(381453).oE(r.map(e => a(807825).L.createChildStore(i, {
                        table: a(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - r.length
                }
            }

            function o({
                userStores: e,
                spaceStore: t,
                intl: u
            }) {
                return a(381453).Ul(e, e => e.getSearchName(u)).sort((e, u) => {
                    if (!t) return 0;
                    let i = (0, a(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        r = (0, a(993077).dp)(t, u.id).getMembershipTypeAsRoleOrNone();
                    return i && r ? a(642157).hV.indexOf(r) - a(642157).hV.indexOf(i) : 0
                })
            }

            function n(e) {
                var t;
                let {
                    spaceStore: u,
                    spaceUserStore: i
                } = e;
                if (!u) return !1;
                let r = (null == i ? void 0 : i.getMembershipType()) ? ? "none",
                    o = null == (t = u.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (r) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === o;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, a(722371).HB)(r)
                }
            }

            function D(e) {
                let {
                    groupId: t,
                    delta: u
                } = e, i = a(801062).h.getGroupData(t);
                i && a(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, i.memberCount + u)
                })
            }

            function s(e) {
                let {
                    members: t,
                    query: a
                } = e, u = a.trim().toLowerCase();
                return "" === u ? t : t.filter(e => e.name.toLowerCase().includes(u) || void 0 !== e.email && e.email.toLowerCase().includes(u))
            }

            function d(e) {
                let {
                    memberUserIds: t,
                    spaceStore: u,
                    groupId: i,
                    currentUserId: r
                } = e;
                return t.map(e => {
                    let t = a(807825).L.createChildStore(u, {
                            table: a(832375).oo9,
                            id: e
                        }),
                        o = (0, a(13717).A)({
                            spaceStore: u,
                            groupId: i,
                            userId: e
                        }),
                        n = a(229903).V.createChildStore(u, (0, a(729052).i1)({
                            userId: e,
                            spaceId: u.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === r,
                        isOwner: "owner" === o.getMembershipType(),
                        isWorkspaceOwner: u.canAdmin(),
                        isRestrictedMember: n.isRestrictedMember() ? ? !0
                    }
                })
            }

            function c(e) {
                let {
                    users: t,
                    existingMemberIds: a
                } = e, u = new Set(a);
                return t.filter(e => !u.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function l(e) {
                let {
                    groupId: t,
                    groupStore: u
                } = e;
                a(801062).h.updateGroup(t, {
                    group: u.getModel()
                })
            }
            a.d(t, {
                A9: () => c,
                Fz: () => d,
                Ny: () => n,
                Pf: () => u,
                cp: () => o,
                gA: () => r,
                mi: () => s,
                s: () => D,
                sd: () => l,
                xQ: () => i
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454)
        },
        406531: (e, t, a) => {
            a.d(t, {
                l: () => i
            }), a(296540);
            let u = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 2.29 11.93 10.46",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M13.165 12.75a.8.8 0 0 0 .69-1.203L8.692 2.693a.8.8 0 0 0-1.382 0l-5.165 8.854a.8.8 0 0 0 .691 1.203z"
                    })
                },
                i = (0, a(104509).wt)("arrowCaretUpFillSmall", u, "fillSmall")
        },
        478597: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var u = () => a(546605);
            class i extends u().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(a(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(a(517013)).pm({
                            environment: this.environment,
                            pointer: (0, a(295447).zP)({
                                environment: this.environment,
                                table: a(832375).SNf,
                                spaceId: this.spaceId
                            }),
                            path: ["text"],
                            recordStoreOptions: {
                                inMemoryRecordCache: e
                            }
                        }),
                        localRecordCache: e,
                        files: [],
                        showAttachFileIntro: !1,
                        renderFileAttachIntro: !1
                    }
                }
                isEmpty() {
                    let e = this.state.textStore.getValue();
                    return !e || 0 === e.length
                }
                hasNewLineCharacter() {
                    let e = this.state.textStore.getValue();
                    return a(247438).q4_(e).includes("\n")
                }
            }
            let r = i
        },
        562033: (e, t, a) => {
            a.d(t, {
                r: () => i
            }), a(296540);
            var u = a(474848);

            function i(e) {
                let {
                    item: t,
                    undoFunc: i
                } = e;
                a(436555).D6({ ...t,
                    right: (0, u.jsx)(a(531119).q6, {
                        onUndo: i
                    })
                })
            }
        },
        577280: (e, t, a) => {
            a.d(t, {
                w: () => i
            }), a(296540);
            var u = a(474848);

            function i(e) {
                let {
                    labelType: t
                } = e, i = "invited" === t ? a(805186).S.invitedLabel : "external" === t ? a(805186).S.externalLabel : a(805186).S.guestLabel;
                return (0, u.jsx)(a(746434).E, {
                    content: (0, u.jsx)(a(109939).sA, { ...i
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        594014: (e, t, a) => {
            a.d(t, {
                m: () => r
            });
            var u = a(296540),
                i = a(474848);
            let r = u.memo(function(e) {
                let {
                    textValue: t
                } = e, r = (0, u.useMemo)(() => (0, a(862060).X1)((0, a(862060).eC)(t)), [t]);
                return (0, i.jsx)("span", {
                    children: r
                })
            })
        },
        606430: (e, t, a) => {
            a.d(t, {
                w: () => s,
                y: () => D
            });
            let u = {
                    sources: {
                        "en-US": {
                            previewRootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            rootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                i = {
                    sources: {
                        "en-US": {
                            previewRootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            rootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            rootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            rootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            rootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            rootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            rootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            rootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            rootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            rootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            rootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            rootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            rootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            rootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            rootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            rootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            rootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            rootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            rootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            rootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            previewRootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            previewRootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                r = {
                    sources: {
                        "en-US": {
                            previewRootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            rootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            rootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            rootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            rootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            rootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            rootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            rootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            rootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            rootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            rootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            rootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            rootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            rootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            rootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            rootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            rootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-812b-acae-d320272c9931",
                            rootId: "22317954-d9c2-812b-acae-d320272c9931",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            rootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            rootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            previewRootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            previewRootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                o = {
                    sources: {
                        "en-US": {
                            previewRootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            rootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            rootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            rootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            rootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            rootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            rootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            rootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            rootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            rootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            rootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            rootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            rootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            rootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            rootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            rootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            rootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            rootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            rootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            rootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            previewRootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            previewRootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                n = {
                    sources: {
                        "en-US": {
                            previewRootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            rootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            rootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            rootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            rootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            rootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            rootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            rootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            rootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            rootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            rootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            rootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            rootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            rootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            rootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            previewRootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            previewRootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPageEvernote
                },
                D = {
                    desktopPersonal: i,
                    desktopTeamCreate: r,
                    desktopTeamJoin: o,
                    mobile: {
                        sources: {
                            "en-US": {
                                previewRootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                rootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                rootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                rootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                rootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                rootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                rootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                rootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                rootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                spaceId: a(54353).rQ
                            },
                            "nb-NO": {
                                previewRootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                rootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                spaceId: a(54353).rQ
                            },
                            "nl-NL": {
                                previewRootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                rootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                spaceId: a(54353).rQ
                            },
                            "da-DK": {
                                previewRootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                rootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                spaceId: a(54353).rQ
                            },
                            "sv-SE": {
                                previewRootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                rootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                spaceId: a(54353).rQ
                            },
                            "fi-FI": {
                                previewRootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                rootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                spaceId: a(54353).rQ
                            },
                            "zh-CN": {
                                previewRootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                rootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                spaceId: a(54353).rQ
                            },
                            "zh-TW": {
                                previewRootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                rootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                spaceId: a(54353).rQ
                            },
                            "en-GB": {
                                previewRootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                rootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                spaceId: a(54353).rQ
                            },
                            "id-ID": {
                                previewRootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                rootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                spaceId: a(54353).rQ
                            },
                            "vi-VN": {
                                previewRootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                rootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                spaceId: a(54353).rQ
                            },
                            "th-TH": {
                                previewRootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                rootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                spaceId: a(54353).rQ
                            },
                            "ar-SA": {
                                rootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                previewRootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                spaceId: a(54353).rQ
                            },
                            "he-IL": {
                                rootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                previewRootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                spaceId: a(54353).rQ
                            }
                        },
                        nameMessage: a(647414).DZ.getStartedPageMobile
                    },
                    evernote: n,
                    web: u
                },
                s = {
                    teamsHomepage: {
                        emoji: "🏠",
                        nameMessage: a(647414).DZ.teamsHomepage,
                        sources: {
                            "en-US": {
                                previewRootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                rootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                rootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                rootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                rootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                rootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                rootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                rootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                rootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                spaceId: a(54353).rQ
                            }
                        }
                    }
                }
        },
        661720: (e, t, a) => {
            a.d(t, {
                I: () => u
            });

            function u() {
                a(793767).A.state.isActive && (a(273770).A.setState({ ...a(273770).A.state,
                    open: !1
                }), a(793767).A.setState({ ...a(793767).A.state,
                    isActive: !1,
                    isAnimatingClosed: !0
                }))
            }
        },
        729849: (e, t, a) => {
            a.d(t, {
                Gi: () => o,
                yB: () => r
            }), a(898992), a(354520), a(803949);
            var u = () => a(546605);

            function i() {
                return a(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function r() {
                return (0, a(682985).K8)(() => i(), [])
            }
            class o extends u().Store {
                getInitialState() {
                    return {
                        originalFileUrlToSuccessfullyUploadedFiles: new Map,
                        inProgressUploadFileIdsToProgress: new Map
                    }
                }
                setValueForUploadedFile(e, t) {
                    this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).set(e, t)
                    })
                }
                markUploadedFilesAsSafe(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    e.forEach(e => {
                        var a;
                        let u = t.get(e);
                        u && t.set(e, { ...u,
                            metadata: { ...u.metadata,
                                guardrail: { ...null == (a = u.metadata) ? void 0 : a.guardrail,
                                    attachmentRisk: "confirmed_safe_by_user"
                                }
                            }
                        })
                    }), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                setValueForUploadingFile(e, t) {
                    let a = new Map(this.state.inProgressUploadFileIdsToProgress),
                        u = a.get(e);
                    a.set(e, { ...t,
                        timeUploaded: (null == u ? void 0 : u.timeUploaded) ? ? Date.now()
                    }), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: a
                    })
                }
                getTimeUploadedForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                getTimeUploadedForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                deleteValueForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress);
                    t.delete(e), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: t
                    })
                }
                deleteValueForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    t.delete(e), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                onFileUploadPercentageChanged(e) {
                    let {
                        fileId: t,
                        fileName: a,
                        percentage: u,
                        contentType: i
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: a,
                        progress: u,
                        contentType: i
                    })
                }
                onFileUploadFailed(e) {
                    let {
                        error: t
                    } = e, {
                        files: a
                    } = t;
                    a.forEach(({
                        fileId: e,
                        fileName: a
                    }) => {
                        this.setValueForUploadingFile(e, {
                            type: "error",
                            error: t,
                            fileName: a
                        })
                    })
                }
                onFileUploadCompleted(e, t) {
                    let a = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, { ...t,
                        timeUploaded: a
                    })
                }
                onComputerFileUploadCompleted(e, t) {
                    let u = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, a(818963).pg)(t.assistantSessionId),
                        timeUploaded: u
                    })
                }
                setCompletedFileForRetry(e) {
                    let t = this.getTimeUploadedForUploadedFile(e.originalFileUrl);
                    this.setValueForUploadedFile(e.originalFileUrl, { ...e,
                        timeUploaded: t
                    })
                }
                onDeleteFileUpload(e) {
                    this.deleteValueForUploadedFile(e)
                }
                isUploadInProgress() {
                    return Array.from(this.state.inProgressUploadFileIdsToProgress.values()).filter(e => "error" !== e.type).length > 0
                }
                hasTooManyAttachments() {
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > i()
                }
            }
        },
        731512: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var u = a(474848);
            let i = {
                display: "flex",
                alignItems: "center",
                borderRadius: 4
            };

            function r(e) {
                let t = (0, a(533992).Y0)(),
                    r = (0, a(960253).I)(() => ({
                        innerStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: a(632079).Tj.text.secondary,
                            background: a(632079).Tj.background.tertiary,
                            fontSize: a(986939).A.isMobile ? 11 : 9,
                            lineHeight: t.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap"
                        }
                    }), [t.isAndroid]);
                return a(986939).A.isMobile ? (0, u.jsx)(a(64960).Ay, {
                    style: { ...i,
                        ...e.mobileStyle
                    },
                    disabled: void 0 === e.onClick,
                    children: (0, u.jsx)("div", {
                        style: { ...r.innerStyle,
                            ...e.innerStyle
                        },
                        children: e.children
                    })
                }) : (0, u.jsx)(a(64960).Ay, {
                    style: { ...i,
                        ...e.desktopStyle
                    },
                    disabled: void 0 === e.onClick,
                    ...e,
                    children: (0, u.jsx)("div", {
                        style: { ...r.innerStyle,
                            ...e.innerStyle
                        },
                        children: e.children
                    })
                })
            }
        },
        758972: (e, t, a) => {
            a.d(t, {
                Ay: () => s,
                NJ: () => o,
                d5: () => n
            }), a(898992), a(354520), a(581454), a(737550);
            var u, i, r = () => a(546605);
            let o = ((u = {}).unselected = "unselected", u.workspace_member = "workspace_member", u.request_workspace_member = "request_workspace_member", u.page_guest = "page_guest", u.closed = "closed", u),
                n = ((i = {})[i.closed = 0] = "closed", i[i.share_page = 1] = "share_page", i[i.share_workspace = 2] = "share_workspace", i[i.request_workspace = 3] = "request_workspace", i);
            class D extends r().Store {
                getInitialState() {
                    return {
                        inviteStage: n.closed,
                        selection: o.workspace_member,
                        order: [o.workspace_member, o.page_guest],
                        invitedUsers: [],
                        invitedEmailToUserIdMap: {},
                        flowId: a(92513).JW()
                    }
                }
                startWorkspaceInvite() {
                    this.setState({ ...this.state,
                        inviteStage: n.share_workspace,
                        order: [o.workspace_member, o.page_guest],
                        selection: o.workspace_member
                    })
                }
                startRequestMembership() {
                    this.setState({ ...this.state,
                        inviteStage: n.request_workspace,
                        order: [o.request_workspace_member, o.page_guest],
                        selection: o.request_workspace_member
                    })
                }
                hasGuests() {
                    return this.state.invitedUsers.some(e => e.isGuest)
                }
                getGuestEmails() {
                    return this.state.invitedUsers.filter(e => e.isGuest).map(e => e.email)
                }
            }
            let s = D
        },
        765898: (e, t, a) => {
            a.d(t, {
                BS: () => n,
                CO: () => i,
                Hb: () => o,
                Y3: () => u,
                _T: () => D
            }), a(898992), a(672577), a(803949), a(814603), a(147566), a(198721);
            let u = 8,
                i = 70;
            (0, a(109939).YK)({
                member: {
                    id: "sharedContextualInviteHelpers.member.inviteMessage2",
                    defaultMessage: "{userName} shared a page {pageName} with you."
                },
                guest: {
                    id: "sharedContextualInviteHelpers.guest.inviteMessage2",
                    defaultMessage: "Accept {userName}{userNameEndsWithS, select, true {’} other {’s}} invite to view {pageName}."
                },
                default: {
                    id: "sharedContextualInviteHelpers.default.inviteMessage",
                    defaultMessage: "Your invitation message"
                },
                optional: {
                    id: "sharedContextualInviteHelpers.default.inviteMessagePrefix",
                    defaultMessage: "Optional message…"
                }
            });
            let r = /@0x[0-9a-fA-F]+/g;

            function o(e, t = 1e3) {
                let u, i;
                if (!e) return "";
                let n = (u = (0, a(189684).Kq)(e), i = "[link]", u = u.replaceAll(r, i), a(159523).I6(u, "url").forEach(e => {
                    u = u.replace(e.value, i)
                }), u);
                return n.length > t && (n = `${n.substring(0,t)}...`), n
            }

            function n(e) {
                return !!e && a(159523).I6(e, "url").length > 0
            }

            function D(e, t) {
                var u;
                let i = null == (u = a(993189).Bj6.fromValue("block", e).getPermissionItems()) ? void 0 : u.find(e => "user_permission" === e.type && e.user_id === t.invited_user_id);
                if (i && "invite_id" in i) return i.invite_id
            }
        },
        801113: (e, t, a) => {
            a.d(t, {
                $C: () => i,
                Hi: () => u,
                Qy: () => r,
                Uu: () => o,
                ek: () => n,
                jq: () => D,
                pz: () => s
            });
            let u = 52,
                i = 45,
                r = 44,
                o = 44;

            function n(e) {
                return e ? o : r
            }

            function D(e) {
                return 2 * n(e)
            }

            function s(e, t, u) {
                return (e && !t ? (0, a(196441).n$)(u) : 12) + 30
            }
        },
        883947: (e, t, a) => {
            a.d(t, {
                o: () => u
            }), a(898992), a(354520);

            function u(e) {
                return (0, a(576968).B)(e).filter(a(573143).QE)
            }
        },
        895105: (e, t, a) => {
            a.r(t), a.d(t, {
                filterIcon: () => i,
                iconDefinition: () => u
            }), a(296540);
            let u = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                i = (0, a(104509).wt)("filter", u, "default")
        },
        912221: (e, t, a) => {
            a.d(t, {
                $D: () => n,
                CJ: () => s,
                CY: () => p,
                Sg: () => o,
                bq: () => r,
                iM: () => m,
                kJ: () => d,
                kx: () => l,
                qj: () => f,
                rL: () => u,
                sH: () => c,
                u6: () => i,
                zr: () => D
            });
            let u = 16,
                i = 20,
                r = 1e3,
                o = 12,
                n = 456,
                D = 24,
                s = 48;

            function d() {
                return {
                    background: a(632079).Tj.background.tertiaryTranslucent,
                    borderRadius: 8,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    marginInlineStart: a(986939).A.isMobile ? 0 : u,
                    marginInlineEnd: a(986939).A.isMobile ? 0 : u,
                    marginTop: 4,
                    marginBottom: 8
                }
            }

            function c() {
                return { ...p(),
                    width: "unset",
                    height: s,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingInlineEnd: 6
                }
            }

            function l() {
                return a(986939).A.isMobile ? a(418676).Kw : a(418676).vQ
            }

            function p() {
                return {
                    borderRadius: 10,
                    transition: "background 150ms ease-out"
                }
            }

            function f({
                isMobile: e
            }) {
                return e ? 12 : 10
            }

            function m({
                themeMode: e,
                colorOverride: t,
                size: u = 24,
                useLargeBorderRadius: i,
                useLightBackgroundColor: r,
                icon: o
            }) {
                return {
                    background: t || (o && (0, a(111012).T8)(o) ? (0, a(111012).ez)({
                        icon: o,
                        mode: e,
                        useLightGrayColor: r
                    }) : a(632079).Tj.background.tertiaryTranslucent),
                    width: u,
                    height: u,
                    borderRadius: i ? 6 : "0.25em"
                }
            }
        },
        920224: (e, t, a) => {
            a.d(t, {
                A: () => c,
                S: () => s
            });
            var u = a(296540),
                i = a(474848);
            let r = "bodyRegular",
                o = "bodySemibold",
                n = "bodySmRegular",
                D = u.forwardRef((e, t) => {
                    let u, {
                            actor: r,
                            defaultUserTitle: o = "name_only",
                            useEmailAsTooltip: n,
                            tooltip: D,
                            tooltipPlacement: c,
                            hoveredStyle: l,
                            disabledFeedback: p,
                            customUserTitleStyles: f,
                            iconSizeOverride: m
                        } = e,
                        b = (0, a(682985).K8)(() => r.asActor && r.isUser() ? r.email : void 0, [r]),
                        g = n && b ? b : D,
                        F = m || (a(986939).A.isMobile ? a(636518).nd : a(636518).pg),
                        C = "name_and_email" !== o && ("name_and_email_unless_right" !== o || e.right) ? (0, i.jsx)(s, {
                            customStyles: f,
                            actor: null == r ? void 0 : r.asActor
                        }) : (0, i.jsx)(d, {
                            actor: null == r ? void 0 : r.asActor,
                            customStyles: f
                        });
                    return (0, a(197018).H3)(r) ? u = (0, i.jsx)(a(31319).A, {
                        botValue: null == r ? void 0 : r.asActor,
                        size: F
                    }) : (0, a(197018).ps)(r) ? u = (0, i.jsx)(a(321753).A, {
                        userValue: null == r ? void 0 : r.asActor,
                        size: F
                    }) : (0, a(722371).HB)(r), (0, i.jsx)(a(51831).m, {
                        placement: c ? ? "bottom",
                        alignment: "start",
                        textWrap: !0,
                        disableTooltip: !g,
                        content: () => g,
                        children: r => (0, i.jsx)(a(95582).A, { ...(0, a(63390).A)(r, e),
                            icon: u,
                            title: C,
                            disabledFeedback: p,
                            className: "notranslate",
                            ref: t,
                            hoveredStyle: l
                        })
                    })
                });

            function s(e) {
                let {
                    actor: t,
                    customStyles: u
                } = e, o = (0, a(533992).v3)(), D = (0, a(109939).tz)(), s = t && t.id === o.currentUser.id, d = (0, a(682985).K8)(() => t && t.getDisplayName(D), [t, D]), c = a(986939).A.isMobile ? n : r;
                return s ? (0, i.jsx)(a(109939).sA, {
                    id: "UserMenuItem.fullName.authorLabel",
                    defaultMessage: "<author>{fullName}</author> <you>(You)</you>",
                    values: {
                        author: e => (0, i.jsx)(a(111010).D, {
                            as: "span",
                            styleKey: c,
                            style: u,
                            children: e
                        }),
                        fullName: d,
                        you: e => (0, i.jsx)(a(111010).D, {
                            as: "span",
                            colorVariant: "secondary",
                            styleKey: c,
                            style: u,
                            children: e
                        })
                    }
                }) : d ? (0, i.jsx)(a(111010).D, {
                    lineClamp: 1,
                    styleKey: c,
                    style: u,
                    children: d
                }) : (0, i.jsx)(a(111010).D, {
                    styleKey: c,
                    style: u,
                    children: (0, i.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }

            function d(e) {
                let {
                    actor: t,
                    customStyles: u
                } = e, D = (0, a(109939).tz)(), s = (0, a(682985).K8)(() => t && t.getDisplayName(D), [t, D]), {
                    email: d,
                    showEmail: c
                } = (0, a(682985).K8)(() => {
                    let e = t && t.asActor && t.isUser() ? t.email : void 0;
                    return {
                        email: e,
                        showEmail: s !== e
                    }
                }, [t, s]), l = a(986939).A.isMobile ? "bodySmRegular" : o, p = a(986939).A.isMobile ? n : r;
                return s ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: l,
                        style: u,
                        children: s
                    }), c ? (0, i.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: p,
                        style: u,
                        children: ` ${d}`
                    }) : void 0]
                }) : (0, i.jsx)(a(111010).D, {
                    styleKey: o,
                    style: u,
                    children: (0, i.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }
            D.displayName = "UserMenuItem";
            let c = D
        },
        931990: (e, t, a) => {
            function u(e) {
                let {
                    dateTime: t,
                    intl: u,
                    shortenDateAndRange: i
                } = e, r = a(25825).C6.toPersistedDate(t.valueOf());
                return a(850640).ZF({
                    value: r,
                    allowRelativeDates: !0,
                    intl: u,
                    shortenDateAndRange: i,
                    displayInUserTimezone: !0
                })
            }

            function i(e) {
                let {
                    dateTime: t,
                    intl: u,
                    userTimeZone: i,
                    displayInUserTimezone: r,
                    alwaysIncludeTimezone: o
                } = e, n = a(25825).C6.toPersistedDateTime(t.valueOf(), t.zoneName);
                return a(850640).ZF({
                    value: n,
                    allowRelativeDates: !0,
                    intl: u,
                    userTimeZone: i,
                    displayInUserTimezone: r,
                    alwaysIncludeTimezone: o
                })
            }

            function r(e) {
                let {
                    luxonRange: t,
                    intl: u
                } = e, i = a(25825).C6.toPersistedDateRange(t), r = a(850640).ZF({
                    value: i,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    intl: u,
                    displayInUserTimezone: !0
                }), o = t.end.setZone((0, a(714350).P)()), n = a(850640).fU({
                    start_time: o.toFormat(a(943003).GE),
                    humanReadable: !1,
                    intl: u
                });
                return u.formatMessage({
                    id: "verification.timeRange",
                    defaultMessage: "{formattedDateRange} at {formattedEndTime}"
                }, {
                    formattedDateRange: r,
                    formattedEndTime: n
                })
            }
            a.d(t, {
                OH: () => u,
                T2: () => i,
                do: () => r
            })
        },
        939588: (e, t, a) => {
            a.d(t, {
                v: () => u
            });

            function u(e) {
                var t;
                let u;
                return t = ["personal", "student", "personal_free"], !((u = (0, a(216260).AI)()) && t.includes(u))
            }
        },
        969278: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightRightSmallIcon: () => i,
                iconDefinition: () => u
            }), a(296540);
            let u = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.372 3.238a.625.625 0 1 0-.884.884l3.253 3.253H2.75a.625.625 0 0 0 0 1.25h8.991l-3.253 3.253a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                    })
                },
                i = (0, a(104509).wt)("arrowStraightRightSmall", u, "small")
        },
        980494: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(296540);
            var u = a(474848);
            let i = {
                    style0: { ...a(699422).RC
                    }
                },
                r = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        r = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        o = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: n,
                            avatarShouldShowShadow: D,
                            avatarSize: s,
                            hasTooltip: d,
                            tooltipHeader: c,
                            hasPersonHoverCard: l,
                            spaceStore: p
                        } = e,
                        f = (0, a(109939).tz)(),
                        m = (0, a(682985).K8)(() => null == n ? void 0 : n.getDisplayName(f), [n, f]),
                        b = (0, u.jsxs)("div", {
                            style: r,
                            children: [(0, u.jsx)("div", {
                                style: o,
                                children: (0, u.jsx)(a(321753).A, {
                                    userStore: n,
                                    avatarShouldShowShadow: D,
                                    size: s,
                                    hasTooltip: d && !l,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: c
                                })
                            }), (0, u.jsx)("div", {
                                className: "notranslate",
                                style: i.style0,
                                children: m
                            })]
                        });
                    return l ? (0, u.jsx)(a(532755).D, {
                        userStore: n,
                        spaceStore: p,
                        from: e.personHoverCardEntrypoint,
                        children: b
                    }) : b
                }
        }
    }
]);