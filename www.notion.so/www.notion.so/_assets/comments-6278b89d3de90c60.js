"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14344, 22542, 37125], {
        1249: (e, t, o) => {
            o.d(t, {
                g: () => n
            });

            function n(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        13717: (e, t, o) => {
            function n(e) {
                let {
                    spaceStore: t,
                    groupId: n
                } = e;
                return o(398652).C.createChildStore(t, (0, o(659341).S4)({
                    spacePermissionGroupId: n,
                    spaceId: t.id
                }))
            }

            function i(e) {
                let {
                    spaceStore: t,
                    groupId: n,
                    userId: i
                } = e;
                return o(291886).m.createChildStore(t, (0, o(867863).BZ)({
                    spacePermissionGroupId: n,
                    spaceId: t.id,
                    userId: i
                }))
            }
            o.d(t, {
                A: () => i,
                E: () => n
            })
        },
        22229: (e, t, o) => {
            o.d(t, {
                DZ: () => s,
                Ek: () => d,
                hN: () => a,
                i5: () => l,
                of: () => r
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(672577), o(803949);
            var n = () => o(955630),
                i = () => o(598403);
            let s = (0, o(109939).YK)({
                emojiPicker: {
                    defaultMessage: "Reaction",
                    id: "ReactionBar.emojiModalMenu.title"
                },
                emojiTitle: {
                    id: "recordIcon.emojiTab.title",
                    defaultMessage: "Emoji"
                }
            });

            function r(e) {
                let {
                    environment: t,
                    blockStore: n,
                    multiSelection: i,
                    rect: r,
                    formulasModule: a
                } = e, c = r;
                if (!c) {
                    let e = o(239134).get();
                    if (!e) return;
                    c = o(239134).getRect(e)
                }
                if (!c) return;
                let d = c.width,
                    u = c.height,
                    m = c.right - d;
                o(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(m, c.top, d, u),
                    type: "inline",
                    content: "reaction",
                    blockStore: n,
                    blockId: n.id,
                    multiSelection: i,
                    emoji: void 0
                }), o(874443).W(t, {
                    originGap: 4,
                    originRect: c,
                    popupWidth: o(703188).jv,
                    popupHeight: o(703188).GF,
                    isSmallWidth: !1,
                    title: o(962299).A.formatMessage(s.emojiPicker),
                    currentTab: "emoji",
                    onCancel: () => o(332190).A.reset(),
                    tabs: [{
                        type: "emoji",
                        title: o(962299).A.formatMessage(s.emojiTitle),
                        hideRandomButton: !0,
                        onChange: e => {
                            let n = o(332190).A.state;
                            n.open && "reaction" === n.content && (o(332190).A.setState({ ...n,
                                emoji: e
                            }), l({
                                environment: t,
                                formulasModule: a
                            }), o(874443).I())
                        }
                    }]
                })
            }
            async function a(e) {
                var t;
                let {
                    environment: n,
                    blockStore: i,
                    multiSelection: s,
                    rect: r,
                    from: a,
                    property_id: l
                } = e;
                if (o(332190).A.hasContent()) return void(0, o(58931)._y)({
                    environment: n,
                    reason: "starting_new"
                });
                let c = r;
                if (!c) {
                    let e = o(239134).get();
                    if (!e) return;
                    c = o(239134).getRect(e)
                }
                if (!c) return;
                let d = c.width,
                    u = c.height,
                    m = c.right - d,
                    p = new(o(478597)).A(n, (0, o(226221).e)(i.pointer.spaceId));
                o(332190).A.setState({
                    open: !0,
                    rect: new DOMRect(m, c.top, d, u),
                    type: "inline",
                    content: "comment",
                    blockStore: i,
                    lastKnownBlockStore: i,
                    blockId: i.id,
                    multiSelection: s,
                    lastEditables: (0, o(58512).$)(s),
                    discussionInputStore: p,
                    property_id: l,
                    from: a
                }), (0, o(661767).V)({
                    element: null == (t = o(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: n,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), o(827862).A.setActiveWithSource("text_annotation"), o(661720).I(), await (0, o(745990).M)({
                    discussionInputStore: p,
                    environment: n
                }), o(65255).z0(n, {
                    from: a
                })
            }

            function l(e) {
                let {
                    environment: t,
                    allowActionsWhileCommenting: s,
                    skipOpeningDiscussion: r,
                    formulasModule: a
                } = e, l = o(332190).A.state;
                if (l.open) {
                    let e = "comment" === l.content ? l.property_id : void 0,
                        d = o(332190).A.getBlockStore() ? ? o(332190).A.getLastKnownBlockStore();
                    if (o(332190).A.hasContent() && (!s || d)) {
                        if ("inline" === l.type) {
                            let r = null == d ? void 0 : d.getSpaceId();
                            (0, o(377796).createAndCommit)({
                                userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                environment: t,
                                canUndo: !0,
                                cellTarget: r ? {
                                    spaceWithId: r
                                } : void 0,
                                perform: r => {
                                    let a = function(e) {
                                        let {
                                            environment: t,
                                            multiSelection: s,
                                            transaction: r,
                                            allowActionsWhileCommenting: a
                                        } = e, {
                                            id: l
                                        } = t.currentUser;
                                        if (!l) return;
                                        let c = a ? o(332190).A.getLastSelectedEditables() : (0, o(58512).$)(s).filter(({
                                            store: e
                                        }) => e.table === o(832375).evP);
                                        if (!c || 0 === c.length) return;
                                        let d = (0, o(746473).zH)(c[0].store),
                                            u = (0, o(295447).Z1)({
                                                environment: t,
                                                table: o(832375).$YH,
                                                spaceId: d.pointer.spaceId
                                            }),
                                            m = [],
                                            p = new Set;
                                        c.forEach(({
                                            store: e,
                                            selection: i
                                        }, s) => {
                                            p.add(e.id);
                                            let a = (0, o(746473).zH)(e);
                                            if (!(a instanceof o(970831).B)) return;
                                            let l = a.getType(),
                                                c = a.getFormat();
                                            if (l && (0, n().pD)(l, c)) return;
                                            let d = e.getValue(),
                                                g = o(247438).xbM(d, i);
                                            o(589873).Mw({
                                                environment: t,
                                                store: e,
                                                selection: g,
                                                annotation: [o(247438).Ifu.Discussion, u],
                                                transaction: r
                                            }), d = e.getValue();
                                            let f = o(247438).Ffo(d, g.startIndex, g.endIndex),
                                                h = 0 === s ? [] : [o(247438).Ey_("\n")];
                                            m.push(...h, ...f)
                                        });
                                        let g = (0, o(358538).Z)({
                                            multiSelection: s,
                                            filterCommonAncestors: !1,
                                            focus: void 0
                                        });
                                        if (g)
                                            for (let e of g.stores) {
                                                if (p.has(e.id)) continue;
                                                let t = e.getType(),
                                                    o = e.getFormat();
                                                t && (0, n().pD)(t, o) || (0, i().B)({
                                                    blockStore: e,
                                                    discussionId: u,
                                                    transaction: r
                                                })
                                            }
                                        return {
                                            blockStore: d,
                                            context: m,
                                            discussionId: u
                                        }
                                    }({
                                        environment: t,
                                        multiSelection: l.multiSelection,
                                        transaction: r,
                                        allowActionsWhileCommenting: s
                                    });
                                    if (!a) return;
                                    let {
                                        context: u,
                                        blockStore: m,
                                        discussionId: p
                                    } = a;
                                    if ("comment" === l.content) {
                                        let n = l.discussionInputStore.state.textStore.getValue() || [],
                                            a = l.discussionInputStore.state.files,
                                            {
                                                discussionStore: c,
                                                commentStore: g
                                            } = (0, o(952874).G)({
                                                createDiscussionArgs: {
                                                    type: "default",
                                                    context: u,
                                                    property_id: e
                                                },
                                                blockStore: m,
                                                environment: t,
                                                transaction: r,
                                                commentTextValue: n,
                                                files: o(385475).JC(a),
                                                discussionId: p
                                            });
                                        (0, i().B)({
                                            transaction: r,
                                            blockStore: m,
                                            discussionId: p
                                        });
                                        let {
                                            property_type: f,
                                            collection_id: h,
                                            collection_view_id: v,
                                            view_type: y,
                                            collection_view_block_id: b
                                        } = (0, o(618682).q)(e, d);
                                        o(65255).bJ(t, {
                                            discussion_id: c.id,
                                            discussion_type: c.getType(),
                                            comment_id: g.id,
                                            parent_block_id: c.getParentId(),
                                            from: o(332190).A.state.open && "comment" === o(332190).A.state.content ? o(332190).A.state.from : void 0,
                                            property_id: e,
                                            property_type: f,
                                            collection_view_id: v,
                                            view_type: y,
                                            collection_id: h,
                                            collection_view_block_id: b
                                        }), s && o(575125).A.addNewDiscussionId(p)
                                    } else l.emoji && c({
                                        context: u,
                                        blockStore: m,
                                        environment: t,
                                        transaction: r,
                                        icon: l.emoji,
                                        discussionId: p
                                    })
                                },
                                skipUpdatingEditedMetadata: !0
                            })
                        } else if ("block" === l.type)
                            if ("comment" === l.content) {
                                let n = l.discussionInputStore.state.textStore.getValue() || [],
                                    i = l.discussionInputStore.state.files;
                                if (s) {
                                    if (d) {
                                        let s = d.getSpaceId();
                                        (0, o(377796).createAndCommit)({
                                            userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                            environment: t,
                                            canUndo: !0,
                                            cellTarget: s ? {
                                                spaceWithId: s
                                            } : void 0,
                                            perform: s => {
                                                (0, o(151002).i)({
                                                    environment: t,
                                                    type: "default",
                                                    blockStore: d,
                                                    commentTextValue: n || [],
                                                    files: i,
                                                    transaction: s,
                                                    property_id: e,
                                                    formulasModule: a
                                                })
                                            },
                                            skipUpdatingEditedMetadata: !0
                                        })
                                    }
                                } else {
                                    let s = l.blockStore.getSpaceId();
                                    (0, o(377796).createAndCommit)({
                                        userAction: "newDiscussionMenuActions.submitNewDiscussion",
                                        environment: t,
                                        canUndo: !0,
                                        cellTarget: s ? {
                                            spaceWithId: s
                                        } : void 0,
                                        perform: s => {
                                            (0, o(151002).i)({
                                                environment: t,
                                                type: "default",
                                                blockStore: l.blockStore,
                                                commentTextValue: n || [],
                                                files: i,
                                                transaction: s,
                                                property_id: e,
                                                formulasModule: a
                                            })
                                        },
                                        skipUpdatingEditedMetadata: !0
                                    })
                                }
                            } else {
                                let e = t.currentUser.id,
                                    {
                                        emoji: n,
                                        blockStore: i
                                    } = l,
                                    s = o(966980).O3(i, {
                                        recursivelyLoadAllDiscussions: !1
                                    }).find(e => e.getReactions().length > 0),
                                    r = i.getSpaceId();
                                n && e && (0, o(377796).createAndCommit)({
                                    userAction: "newDiscussionMenuActions.submitNewDefaultDiscussion.addReaction",
                                    environment: t,
                                    canUndo: !0,
                                    cellTarget: r ? {
                                        spaceWithId: r
                                    } : void 0,
                                    perform: r => {
                                        null != s && s.isDefined() ? o(197657).createReaction({
                                            environment: t,
                                            transaction: r,
                                            store: s,
                                            icon: n,
                                            currentActorPointer: {
                                                table: o(832375).oo9,
                                                id: e
                                            },
                                            discussionLocation: "block_menu"
                                        }) : c({
                                            context: void 0,
                                            blockStore: i,
                                            environment: t,
                                            transaction: r,
                                            icon: n
                                        })
                                    },
                                    skipUpdatingEditedMetadata: !0
                                })
                            }
                    }(0, o(585356).c)({
                        skipRestoreSelection: !0
                    });
                    let u = s ? d && d.getAssociatedCollectionStore() : l.blockStore.getAssociatedCollectionStore();
                    r || e || !u || o(821243).B4({
                        environment: t,
                        blockStore: s ? d ? ? l.blockStore : l.blockStore,
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
                    blockStore: n,
                    environment: s,
                    transaction: r,
                    icon: a
                } = e, l = e.discussionId ? ? (0, o(295447).Z1)({
                    environment: s,
                    table: o(832375).$YH,
                    spaceId: n.pointer.spaceId
                });
                if (void 0 === s.currentUser.id) return;
                let c = o(124937).vt({
                    environment: s,
                    table: "discussion",
                    args: {
                        type: "default",
                        id: l,
                        parent: n.pointer,
                        context: t,
                        space_id: (0, o(226221).e)(n.pointer.spaceId)
                    },
                    inMemoryRecordCache: n.inMemoryRecordCache,
                    transaction: r
                });
                (0, i().B)({
                    transaction: r,
                    blockStore: n,
                    discussionId: c.id
                });
                let d = {
                    table: o(832375).oo9,
                    id: s.currentUser.id
                };
                return o(197657).createReaction({
                    environment: s,
                    transaction: r,
                    store: c,
                    icon: a,
                    currentActorPointer: d,
                    discussionLocation: "block_menu"
                }), c
            }

            function d(e) {
                let {
                    environment: t
                } = e;
                if (!t.currentUser.id) return;
                let i = o(332190).A.getPropertyId();
                if (i) {
                    var s;
                    let e = null == (s = o(332190).A.getBlockStore()) ? void 0 : s.getPropertyStore(i);
                    if (e) return {
                        blockStore: e,
                        context: e.getValue()
                    }
                }
                let r = o(332190).A.getLastSelectedEditables();
                if (!r || 0 === r.length) return;
                let a = (0, o(746473).zH)(r[0].store),
                    l = [],
                    c = new Set;
                return r.forEach(({
                    store: e,
                    selection: t
                }, i) => {
                    c.add(e.id);
                    let s = (0, o(746473).zH)(e);
                    if (!(s instanceof o(970831).B)) return;
                    let r = s.getType(),
                        a = s.getFormat();
                    if (r && (0, n().pD)(r, a)) return;
                    let d = e.getValue(),
                        u = o(247438).xbM(d, t),
                        m = o(247438).Ffo(d, u.startIndex, u.endIndex),
                        p = 0 === i ? [] : [o(247438).Ey_("\n")];
                    l.push(...p, ...m)
                }), {
                    blockStore: a,
                    context: l
                }
            }
        },
        24296: (e, t, o) => {
            o.d(t, {
                j: () => s
            });
            var n = () => o(375622);
            class i extends n().A {}
            let s = new i
        },
        31319: (e, t, o) => {
            o.d(t, {
                A: () => s
            }), o(296540);
            var n = o(474848);
            let i = {
                    activeDotStyle: {
                        height: 10,
                        width: 10,
                        backgroundColor: o(632079).Tj.palette.green[400],
                        border: "2px solid white",
                        borderRadius: "50%",
                        position: "absolute",
                        insetInlineStart: 11,
                        top: 11
                    }
                },
                s = function(e) {
                    let {
                        botValue: t,
                        botStore: s,
                        showActiveDot: r,
                        style: a,
                        size: l
                    } = e, c = (0, o(109939).tz)(), d = (0, o(682985).K8)(() => {
                        if (s) {
                            let e = s.getIcon();
                            if (e) return {
                                pointer: {
                                    table: o(832375).GPl,
                                    id: s.id,
                                    spaceId: s.getSpaceId()
                                },
                                icon: e
                            }
                        } else if (null != t && t.icon) return {
                            pointer: {
                                table: o(832375).GPl,
                                id: t.id,
                                spaceId: t.space_id
                            },
                            icon: t.icon
                        }
                    }, [s, t]), u = (0, o(682985).K8)(() => (null == s ? void 0 : s.getDisplayName(c)) ? ? (0, o(697006).Hg)(t), [s, t, c]);
                    return (0, n.jsxs)("div", {
                        style: a,
                        children: [(0, n.jsx)(o(569553).B6, {
                            icon: d,
                            title: u,
                            size: l || 18,
                            disabled: !0,
                            isEmptyPage: !1,
                            useInvertedColors: !0
                        }), r ? (0, n.jsx)("div", {
                            style: i.activeDotStyle
                        }) : void 0]
                    })
                }
        },
        42615: (e, t, o) => {
            o.d(t, {
                FB: () => m,
                JC: () => g,
                Ql: () => p,
                Wv: () => s,
                Yz: () => a,
                ds: () => i,
                e4: () => n,
                eQ: () => r,
                im: () => c,
                jw: () => l,
                k2: () => u,
                uG: () => d
            });
            let n = 8,
                i = 10,
                s = 8,
                r = 24,
                a = 6,
                l = 1.5,
                c = 11.25,
                d = 30,
                u = `calc(100% + ${s+(n-a)-d}px)`,
                m = 32,
                p = -16;

            function g(e, t, o) {
                return t ? 20 : "margin_comments" === e ? 12 : "comment_unfurl" === e && "start" === o ? 14 : 16
            }
        },
        58931: (e, t, o) => {
            o.d(t, {
                HR: () => i,
                _y: () => s
            });
            let n = (0, o(109939).YK)({
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
                    discussionHelpers: r,
                    reason: a
                } = e;
                o(332190).A.isComposingNewDiscussion() ? s({
                    environment: i,
                    reason: a ? ? "navigating_away"
                }) : r.hasCommentChanged(t) ? (o(65255).yO(i), o(647095).ui({
                    message: o(962299).A.formatMessage(n.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => o(65255).Ie(i),
                    keepFocus: !0,
                    items: [{
                        label: o(962299).A.formatMessage(n.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            o(65255).QP(i), (0, o(585356).c)()
                        }
                    }]
                })) : (0, o(585356).c)()
            }

            function s(e) {
                let {
                    environment: t
                } = e;
                if (!o(332190).A.isDraftCommentOnValidSelection()) return;
                let i = o(332190).A.getDiscussionInputStore();
                o(65255).yO(t), o(647095).ui({
                    message: o(962299).A.formatMessage(n.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return o(962299).A.formatMessage(n.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return o(962299).A.formatMessage(n.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, o(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: o(962299).A.formatMessage(n.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, o(758275).x)({
                                currentBlockStore: o(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: i,
                                environment: t
                            }), o(65255).Ie(t)
                        }
                    }, {
                        label: o(962299).A.formatMessage(n.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            o(65255).QP(t), (0, o(585356).c)()
                        }
                    }]
                })
            }
        },
        59724: (e, t, o) => {
            o.d(t, {
                A: () => s
            }), o(296540);
            var n = o(474848);
            let i = {
                    style0: { ...o(699422).RC
                    }
                },
                s = function(e) {
                    let {
                        botStore: t,
                        avatarSize: s,
                        shouldShowBadge: r,
                        style: a,
                        inline: l
                    } = e, c = (0, o(109939).tz)(), d = (0, o(533992).Y0)(), u = (0, o(682985).K8)(() => null == t ? void 0 : t.getDisplayName(c), [t, c]), {
                        outerStyle: m,
                        avatarWrapStyle: p,
                        badgeStyle: g
                    } = (0, o(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...a
                        },
                        avatarWrapStyle: l ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: o(632079).Tj.text.secondary,
                            background: o(632079).Tj.background.tertiaryTranslucent,
                            fontSize: o(986939).A.isMobile ? 11 : 9,
                            lineHeight: d.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [a, l, d]);
                    return (0, n.jsxs)("div", {
                        style: m,
                        children: [(0, n.jsx)("div", {
                            style: p,
                            children: (0, n.jsx)(o(31319).A, {
                                botStore: t,
                                size: s
                            })
                        }), (0, n.jsx)("div", {
                            style: i.style0,
                            children: u
                        }), r ? (0, n.jsx)("div", {
                            style: g,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        63728: (e, t, o) => {
            function n(e, t) {
                let n = o(966980).dd(t),
                    i = o(385475).xh(n);
                e.setState({ ...e.state,
                    files: i
                })
            }
            async function i(e) {
                let {
                    blockStore: t,
                    pageViewBlockStore: n,
                    environment: i
                } = e;
                n ? n.setState({ ...n.state,
                    forceDiscussionOpen: !0
                }) : o(400890).A.openNewPageDiscussionInput(t), o(65255).o2(i, {
                    from: "page_comments"
                }), await o(374176).default.afterNextFlush();
                let s = o(24296).j.find(e => e.getBlockStore().id === t.id),
                    r = null == s ? void 0 : s.getInputStore();
                r && (0, o(739204).z)({
                    store: r.state.textStore
                })
            }
            o.d(t, {
                O: () => i,
                e: () => n
            }), o(898992), o(672577)
        },
        81422: (e, t, o) => {
            o.d(t, {
                W: () => n
            });

            function n(e) {
                return e.scrollHeight - (e.scrollTop + e.clientHeight)
            }
        },
        88721: (e, t, o) => {
            o.d(t, {
                C: () => s
            }), o(296540);
            var n = o(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 1.25 15.63 15.63",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M16.25 6.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                        }), (0, n.jsx)("path", {
                            d: "M5.25 3.125h7.302a3.8 3.8 0 0 0 0 1.25H5.25a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875V7.448a3.8 3.8 0 0 0 1.25 0v7.302a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125v-9.5c0-1.174.951-2.125 2.125-2.125"
                        })]
                    })
                },
                s = (0, o(104509).wt)("markUnread", i, "default")
        },
        128743: (e, t, o) => {
            o.r(t), o.d(t, {
                arrowStraightLeftIcon: () => i,
                iconDefinition: () => n
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                i = (0, o(104509).wt)("arrowStraightLeft", n, "default")
        },
        128817: (e, t, o) => {
            function n(e, t, n) {
                var i;
                let s = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s) return;
                let r = null == (i = s.getSettings()) ? void 0 : i.tutorials;
                n ? (0, o(862759).m)({
                    userSettingsStore: s,
                    transaction: n,
                    data: {
                        tutorials: { ...r,
                            [t]: (0, o(752153).i9)(s, t)
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, o(862759).m)({
                            userSettingsStore: s,
                            transaction: e,
                            data: {
                                tutorials: { ...r,
                                    [t]: (0, o(752153).i9)(s, t)
                                }
                            }
                        })
                    },
                    userId: s.id
                })
            }

            function i(e, t) {
                var n;
                let i = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let s = null == (n = i.getSettings()) ? void 0 : n.tutorials;
                u({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, o(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                tutorials: { ...s,
                                    [t]: (0, o(752153).KD)(i, t)
                                }
                            }
                        })
                    },
                    userId: i.id
                })
            }

            function s(e, t) {
                var n;
                let i = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!i) return;
                let s = null == (n = i.getSettings()) ? void 0 : n.tutorials;
                (null == s ? void 0 : s[t]) !== o(212169).YD && u({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, o(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                tutorials: { ...s,
                                    [t]: o(212169).YD
                                }
                            }
                        })
                    },
                    userId: i.id
                })
            }

            function r(e) {
                let t = o(728372).AppStoreCurrentUserSettingsStore.state;
                t && u({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, o(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                tutorials: {}
                            }
                        })
                    },
                    userId: t.id
                })
            }

            function a(e, t, n) {
                var i;
                let s = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!s || (0, o(752153).x$)(s, t)) return;
                let r = (0, o(752153).gt)(s, t);
                o(212169).c$[t].steps.findIndex(e => e.id === r) >= o(212169).c$[t].steps.findIndex(e => e.id === n) || (0, o(862759).m)({
                    userSettingsStore: s,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (i = s.getSettings()) ? void 0 : i.tutorials,
                            [t]: n
                        }
                    }
                })
            }

            function l(e, t, n) {
                if ((0, o(752153).ll)(n)) return;
                let i = (0, o(752153).tb)(t, n);
                i && a(e, t, i)
            }

            function c(e) {
                var t;
                let {
                    environment: n,
                    tutorialId: i,
                    tutorialStepId: s,
                    transaction: r
                } = e, a = o(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let l = null == (t = a.getSettings()) ? void 0 : t.tutorials;
                r ? (0, o(862759).m)({
                    userSettingsStore: a,
                    transaction: r,
                    data: {
                        tutorials: { ...l,
                            [i]: s
                        }
                    }
                }) : u({
                    userAction: "TutorialActions.nextStep",
                    environment: n,
                    perform: e => {
                        (0, o(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                tutorials: { ...l,
                                    [i]: s
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function d(e) {
                let t = o(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, o(752153).x$)(t, e)
            }

            function u(e) {
                return (0, o(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            o.r(t), o.d(t, {
                checkIsTutorialDone: () => d,
                dismissTutorial: () => s,
                resetTutorials: () => r,
                tutorialAdvanceToStep: () => a,
                tutorialAdvanceToStepAfter: () => l,
                tutorialGoToNextStep: () => n,
                tutorialGoToPrevStep: () => i,
                tutorialGoToStep: () => c
            })
        },
        151002: (e, t, o) => {
            o.d(t, {
                i: () => n
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698);

            function n(e) {
                var t;
                let n, i, s, {
                        environment: r,
                        type: a,
                        blockStore: l,
                        commentTextValue: c,
                        transaction: d,
                        files: u,
                        property_id: m,
                        formulasModule: p,
                        fromOverride: g
                    } = e,
                    f = e.discussionId ? ? (0, o(295447).Z1)({
                        environment: r,
                        table: o(832375).$YH,
                        spaceId: l.pointer.spaceId
                    }),
                    {
                        id: h
                    } = r.currentUser;
                if (!h) return;
                let v = o(332190).A.state,
                    {
                        property_type: y,
                        collection_id: b,
                        collection_view_id: x,
                        view_type: S,
                        collection_view_block_id: C
                    } = (0, o(618682).q)(m, l);
                if (m && v.open && "block" === v.type) {
                    let e = v.blockStore.getPropertyStore(m);
                    if (n = e.getValue() || [], "status" === y && 0 === n.length && (n = [
                            [o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)]
                        ]), "formula" === y && (n = function({
                            store: e,
                            blockStore: t,
                            property_id: n,
                            formulasModule: i,
                            environment: s
                        }) {
                            var r;
                            let a = t.getAssociatedCollectionStore(),
                                l = t.getRecordModel,
                                c = null == a ? void 0 : a.getModel(),
                                d = null == c ? void 0 : c.getNormalizedSchema(l)[n],
                                u = null == d || null == (r = d.formula2) ? void 0 : r.code,
                                m = t.getModel(),
                                p = Number(o(627179).Xb),
                                g = o(218744).default.getConfigKey("collection_request_settings", "clientFormulaTimeoutMs") ? ? p;
                            if (m && u && i) {
                                let r = i.evaluateCollectionFormula2WithoutCache({
                                    block: m,
                                    property: n,
                                    formulaCode: u,
                                    getRecordModel: e.getRecordModel,
                                    intl: o(962299).A.getIntl(),
                                    userTimeZone: (0, o(714350).P)(),
                                    depth: 0,
                                    visitedProperties: new Set,
                                    formulaTimeoutTimestampMs: Date.now() + g,
                                    resultCache: new Map,
                                    regExpCache: new Map,
                                    formatDateCache: new Map,
                                    experimentService: o(218744).default,
                                    collectionFeatureGates: (0, o(457103).i)(),
                                    spaceIdCreator: s.idCreator.getSpaceIdCreatorSync(t.getSpaceId())
                                });
                                if (r && o(300441).Q.isSuccess(r)) return (0, o(297493).Ht)(r.value)
                            }
                            return []
                        }({
                            store: e,
                            blockStore: l,
                            property_id: m,
                            formulasModule: p,
                            environment: r
                        })), "text" === y) {
                        let t = {
                            startIndex: 0,
                            endIndex: (0, o(247438).qAZ)(n).length
                        };
                        o(589873).Mw({
                            environment: r,
                            store: e,
                            selection: t,
                            annotation: [o(247438).Ifu.Discussion, f],
                            transaction: d
                        })
                    }
                }
                let k = l.getType(),
                    I = l.getFormat();
                if ((0, o(955630).Db)(k, I) && !(0, o(955630).$I)(k)) {
                    let e = l.getTitleValue();
                    i = o(247438).DJ2(o(247438).Uee(e, {
                        removeSuggestionAnnotationsAndText: !0,
                        removeSuggestionAnnotations: !0,
                        removeDiscussions: !0
                    }))
                }
                m && n && (i = n);
                let {
                    discussionStore: A,
                    commentStore: w
                } = (0, o(952874).G)({
                    createDiscussionArgs: "default" === a ? {
                        type: "default",
                        context: i,
                        property_id: m
                    } : {
                        type: "suggestion",
                        modifiedBlockIds: [l.pointer.id]
                    },
                    blockStore: l,
                    environment: r,
                    transaction: d,
                    commentTextValue: c,
                    files: o(385475).JC(u),
                    discussionId: f
                });
                (0, o(598403).B)({
                    transaction: d,
                    blockStore: l,
                    discussionId: A.id
                }), o(332190).A.state.open ? "comment" === o(332190).A.state.content && (s = o(332190).A.state.from) : s = o(332190).A.state.from, g && (s = g);
                let M = (0, o(545849).B)(null == (t = l.getAssociatedCollectionStore()) ? void 0 : t.getLayoutStore());
                return o(65255).v3(r, {
                    discussion_id: A.id,
                    discussion_type: A.getType(),
                    comment_id: w.id,
                    parent_block_id: A.getParentId(),
                    from: s,
                    property_id: m,
                    property_type: y,
                    collection_view_id: x,
                    view_type: S,
                    collection_id: b,
                    collection_view_block_id: C,
                    page_discussion_layout_location: M
                }), (0, o(585356).c)(), A
            }
        },
        151710: (e, t, o) => {
            o.d(t, {
                Jv: () => c,
                Rl: () => d,
                mA: () => l
            });
            var n = o(296540),
                i = o(474848);
            let s = {
                    padding: "1px 4px",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 1
                },
                r = function() {
                    return (0, i.jsx)(o(746434).E, {
                        color: "purple",
                        style: s,
                        content: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "AI",
                            id: "database.property.aiAutofillEnabledIndicator"
                        })
                    })
                },
                a = {
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 8,
                    width: 12,
                    height: 12,
                    borderRadius: 12,
                    background: "transparent",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                },
                l = n.memo(function(e) {
                    let {
                        badge: t,
                        className: n,
                        dragHandleStyle: s,
                        hideName: r,
                        iconSize: l,
                        iconStyle: c,
                        labelSizeVariant: u,
                        propertySchema: m,
                        showDragIcon: p,
                        showIcon: g,
                        style: f,
                        textRef: h
                    } = e, v = (0, o(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "120%",
                            minWidth: 0,
                            fontSize: o(986939).A.isMobile ? 16 : 14,
                            gap: "small" === u ? 2 : 6,
                            ...f
                        },
                        iconWrapper: {
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "center",
                            position: e.showIntegrationIconOverlay ? "relative" : void 0,
                            ...c
                        },
                        dragHandle: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!!p,
                            transition: `opacity ${o(153262).bM}`
                        },
                        itemIcon: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!p,
                            transition: `opacity ${o(153262).bM}`
                        }
                    }), [c, u, p, f, e.showIntegrationIconOverlay]);
                    return (0, i.jsxs)("div", {
                        className: n,
                        style: v.container,
                        children: [g ? (0, i.jsxs)("div", {
                            style: v.iconWrapper,
                            children: [(0, i.jsx)("div", {
                                style: v.itemIcon,
                                children: (0, i.jsx)(d, {
                                    propertySchema: m,
                                    iconSize: l,
                                    iconStyle: c
                                })
                            }), e.showIntegrationIconOverlay ? (0, i.jsx)("div", {
                                style: a,
                                children: e.showIntegrationIconOverlay
                            }) : void 0, (0, i.jsx)("div", {
                                style: v.dragHandle,
                                children: (0, i.jsx)(o(544954).t, {
                                    wrapperStyle: s
                                })
                            })]
                        }) : void 0, r ? void 0 : (0, i.jsx)("div", {
                            ref: h,
                            style: o(699422).RC,
                            children: m.name
                        }), t]
                    })
                });

            function c(e) {
                let {
                    propertySchema: t
                } = e, n = o(9247).YE(t), {
                    shouldShowLegacyAutofill: s
                } = (0, o(251955).D)({
                    aiInference: n
                });
                return (0, o(682985).K8)(() => (0, o(576348).O0)() && o(9247).$M(t) && o(9247).om(t) && s, [s, t]) ? (0, i.jsx)(r, {}) : null
            }

            function d(e) {
                let {
                    propertySchema: t,
                    iconSize: n,
                    iconStyle: s
                } = e, r = (0, o(960253).e)(), a = o(986939).A.isMobile ? 18 : 16;
                return (0, i.jsx)(o(221535).zB, {
                    type: t.type,
                    icon: t.icon,
                    size: n || a,
                    theme: o(632079).Tj,
                    themeMode: r,
                    style: s
                })
            }
        },
        153262: (e, t, o) => {
            o.d(t, {
                Jg: () => i,
                bM: () => n,
                hG: () => s,
                ic: () => r
            });
            let n = "150ms ease";

            function i() {
                return {
                    borderRadius: 6
                }
            }
            let s = o(986939).A.isMobile ? {} : { ...i(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${n}`
            };

            function r() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        196441: (e, t, o) => {
            o.d(t, {
                n$: () => i,
                rx: () => n,
                yA: () => s
            });
            let n = 1;

            function i(e) {
                switch (o(381453).qE(o(381453).LI(e, 1), .5, 4.9)) {
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

            function s(e) {
                let t = o(381453).qE(o(381453).LI(e, 1), .5, 4.9);
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
        197657: (e, t, o) => {
            function n(e) {
                let {
                    discussionLocation: t,
                    environment: n,
                    transaction: r,
                    store: a,
                    icon: l
                } = e, c = function({
                    store: e,
                    icon: t
                }) {
                    let n = (0, o(517013).G_)(e, e.pointer, "reactions").getValue();
                    if (void 0 !== n) return n.map(t => {
                        let n = o(868249).L.createChildStore(e, {
                            table: o(832375).ez7,
                            id: t,
                            spaceId: (0, o(226221).e)(e.pointer.spaceId)
                        });
                        if (n.isDefined()) return n
                    }).filter(o(722371).O9).find(e => e.getIcon() === t)
                }({
                    store: a,
                    icon: l
                });
                if (void 0 === n.currentUser.id) return;
                let d = {
                    table: o(832375).oo9,
                    id: n.currentUser.id
                };
                return null != c && c.isDefined() ? function({
                    store: e,
                    actorPointer: t,
                    transaction: n,
                    environment: i,
                    discussionLocation: r
                }) {
                    var a;
                    let l = {
                            store: e,
                            actorPointer: t,
                            transaction: n,
                            environment: i,
                            discussionLocation: r
                        },
                        c = e.getParentStore(),
                        d = (null == c ? void 0 : c.table) === o(832375).$YH ? c : null == c ? void 0 : c.getParentStore(),
                        u = (null == (a = e.getActors()) ? void 0 : a.some(e => e.id === t.id)) ? ? !1;
                    return (d && s(d, c) && (0, o(737146).U)({
                        transaction: n,
                        discussionStore: d
                    }), u) ? (function(e) {
                        var t, n;
                        let {
                            store: i,
                            actorPointer: s,
                            discussionLocation: r,
                            transaction: a,
                            environment: l
                        } = e;
                        if (!i.isDefined()) return;
                        let c = i.getParentStore(),
                            d = (null == c ? void 0 : c.table) === o(832375).$YH ? c : null == c ? void 0 : c.getParentStore(),
                            u = o(313432).eR.includes(r),
                            m = null == d || null == (t = d.getParentStore()) ? void 0 : t.getNavigableBlockStore(),
                            p = 1 === o(868249).L.getUserVisibleReactions(c).length && 1 === i.getActors().length && i.getActors()[0].id === l.currentUser.id;
                        o(65255).fq({
                            environment: l,
                            reaction_value: i.getIcon(),
                            comment_id: i.getParentId(),
                            discussion_id: null == d ? void 0 : d.id,
                            discussion_type: null == d ? void 0 : d.getType(),
                            parent_block_id: null == d ? void 0 : d.getParentId(),
                            parent_collection_id: null == d || null == (n = d.getParentStore()) ? void 0 : n.getParentCollectionIdUpToTwoLevels(),
                            reaction_count: i.getActors().length ? ? 0,
                            from: r,
                            ...u && {
                                inbox_session_id: o(825109).Ay.state.sessionId,
                                notification_page_id: null == m ? void 0 : m.id
                            }
                        });
                        let g = i.getModel();
                        (0, o(421439).y4)({
                            transaction: a,
                            store: i,
                            operation: g.ops.removeActor(s)
                        }), p && c && c.table === o(832375).$YH && (0, o(247027).v)({
                            environment: l,
                            discussionStore: c,
                            transaction: a
                        })
                    }(l), "Removed") : (function(e) {
                        var t, n;
                        let {
                            store: i,
                            actorPointer: s,
                            discussionLocation: r,
                            transaction: a,
                            environment: l
                        } = e;
                        if (!i.isDefined()) return;
                        let c = i.getParentStore(),
                            d = (null == c ? void 0 : c.table) === o(832375).$YH ? c : null == c ? void 0 : c.getParentStore(),
                            u = o(313432).eR.includes(r),
                            m = null == d || null == (t = d.getParentStore()) ? void 0 : t.getNavigableBlockStore();
                        o(65255).MP({
                            environment: l,
                            reaction_value: i.getIcon(),
                            comment_id: i.getParentId(),
                            discussion_id: null == d ? void 0 : d.id,
                            discussion_type: null == d ? void 0 : d.getType(),
                            parent_block_id: null == d ? void 0 : d.getParentId(),
                            parent_collection_id: null == d || null == (n = d.getParentStore()) ? void 0 : n.getParentCollectionIdUpToTwoLevels(),
                            reaction_count: i.getActors().length ? ? 0,
                            from: r,
                            ...u && {
                                inbox_session_id: o(825109).Ay.state.sessionId,
                                notification_page_id: null == m ? void 0 : m.id
                            }
                        });
                        let p = i.getModel();
                        (0, o(421439).y4)({
                            transaction: a,
                            store: i,
                            operation: p.ops.appendActor(s)
                        })
                    }(l), "Added")
                }({
                    environment: n,
                    store: c,
                    actorPointer: d,
                    transaction: r,
                    discussionLocation: t
                }) : (i({
                    environment: n,
                    transaction: r,
                    store: a,
                    icon: l,
                    currentActorPointer: d,
                    discussionLocation: t
                }), "Added")
            }

            function i({
                environment: e,
                transaction: t,
                store: n,
                icon: r,
                currentActorPointer: a,
                discussionLocation: l
            }) {
                var c, d;
                let u = (0, o(295447).JH)({
                        environment: e,
                        table: o(832375).ez7,
                        spaceId: (0, o(226221).e)(n.pointer.spaceId)
                    }),
                    m = n.table === o(832375).$YH ? n : n.getParentStore(),
                    p = o(313432).eR.includes(l),
                    g = null == m || null == (c = m.getParentStore()) ? void 0 : c.getNavigableBlockStore(),
                    f = null == m ? void 0 : m.getPropertyId(),
                    h = null == m ? void 0 : m.getParentStore(),
                    {
                        property_type: v,
                        collection_id: y,
                        collection_view_id: b,
                        view_type: x,
                        collection_view_block_id: S
                    } = (0, o(618682).q)(f, h);
                o(65255).MP({
                    environment: e,
                    reaction_value: r,
                    comment_id: n.id,
                    discussion_id: null == m ? void 0 : m.id,
                    discussion_type: null == m ? void 0 : m.getType(),
                    parent_block_id: null == m ? void 0 : m.getParentId(),
                    parent_collection_id: null == m || null == (d = m.getParentStore()) ? void 0 : d.getParentCollectionIdUpToTwoLevels(),
                    reaction_count: 0,
                    from: l,
                    ...p && {
                        inbox_session_id: o(825109).Ay.state.sessionId,
                        notification_page_id: null == g ? void 0 : g.id
                    },
                    property_type: v,
                    collection_id: y,
                    collection_view_id: b,
                    view_type: x,
                    collection_view_block_id: S
                });
                let C = o(124937).vt({
                        environment: e,
                        table: u.table,
                        args: {
                            id: u.id,
                            spaceId: u.spaceId,
                            commentId: n.id,
                            icon: r,
                            actorPointer: a
                        },
                        inMemoryRecordCache: n.inMemoryRecordCache,
                        transaction: t
                    }),
                    k = (0, o(517013).G_)(n, n.pointer, "reactions");
                (0, o(135674).B)({
                    parentStore: k,
                    appendStore: C,
                    transaction: t
                }), m && s(m, n) && (0, o(737146).U)({
                    transaction: t,
                    discussionStore: m
                })
            }

            function s(e, t) {
                var n;
                if (!e || !t || t.table !== o(832375).SNf) return !1;
                let i = null == (n = e.getUserSeenRecordStore()) ? void 0 : n.getLastSeenAt();
                return !i || i < t.getCreatedTime()
            }
            o.r(t), o.d(t, {
                createReaction: () => i,
                toggleReaction: () => n
            }), o(898992), o(354520), o(672577), o(581454), o(737550)
        },
        210882: (e, t, o) => {
            o.d(t, {
                m: () => i
            }), o(296540);
            var n = o(474848);

            function i({
                color: e,
                size: t,
                style: s
            }) {
                let r = (0, o(109939).tz)(),
                    a = (0, o(960253).I)(() => ({
                        dot: {
                            height: t || 8,
                            width: t || 8,
                            background: e || o(632079).Tj.blue.icon.accentPrimary,
                            flexShrink: 0,
                            borderRadius: "100%",
                            pointerEvents: "none",
                            ...s
                        }
                    }), [t, e, s]);
                return (0, n.jsx)("div", {
                    role: "img",
                    "aria-label": r.formatMessage({
                        id: "statusDot.ariaLabel",
                        defaultMessage: "New"
                    }),
                    style: a.dot
                })
            }
        },
        212169: (e, t, o) => {
            o.d(t, {
                Ud: () => r,
                YD: () => s,
                c$: () => n,
                q_: () => i
            });
            let n = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                i = "completed",
                s = "dismissed";

            function r(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        247027: (e, t, o) => {
            o.d(t, {
                v: () => s
            });
            var n = () => o(966980),
                i = () => o(357018);

            function s(e) {
                let {
                    discussionStore: t,
                    transaction: s
                } = e, r = n().No(t);
                r && (0, i().u)({
                    discussionIds: [t.id],
                    transaction: s,
                    blockStore: r
                });
                let a = (0, o(385941).Z)();
                if (a)
                    for (let e of n().zo({
                            blockStore: a,
                            transclusionReferences: "recurseInto",
                            childPages: "omit"
                        })) {
                        if (r && e.table === r.table && e.id === r.id) continue;
                        let o = n().bN(e).getValue();
                        null != o && o.includes(t.id) && (0, i().u)({
                            discussionIds: [t.id],
                            transaction: s,
                            blockStore: e
                        })
                    }
            }
        },
        251955: (e, t, o) => {
            function n(e) {
                let {
                    aiInference: t
                } = e;
                return i({
                    isDatabaseAgentsEnabled: (0, o(551408).A)(),
                    aiInference: t
                })
            }

            function i(e) {
                let {
                    isDatabaseAgentsEnabled: t,
                    aiInference: o
                } = e;
                if (!t) return {
                    shouldShowDbAgent: !1,
                    shouldShowLegacyAutofill: !0
                };
                let n = !!o && !o.is_migrated;
                return {
                    shouldShowDbAgent: !n,
                    shouldShowLegacyAutofill: n
                }
            }
            o.d(t, {
                D: () => n,
                a: () => i
            })
        },
        273770: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            let n = new(o(510969)).A
        },
        311077: (e, t, o) => {
            o.d(t, {
                J: () => i,
                M: () => s
            }), o(16280);
            var n = o(296540);
            let i = n.createContext(null);

            function s() {
                let e = (0, n.useContext)(i);
                if (!e) throw Error("ActionBarContext must be used inside ActionBar");
                return e
            }
            i.displayName = "ActionBarContext"
        },
        322662: (e, t, o) => {
            o.d(t, {
                Ee: () => c,
                J1: () => s,
                oG: () => r
            }), o(296540);
            var n = o(474848);
            let i = {
                define_variables_automation_action: {
                    launchDateMs: 17277408e5,
                    expiryDateMs: 1738368e6
                },
                passkey_setting: {
                    launchDateMs: 1729101727e3,
                    expiryDateMs: 1738432882e3
                },
                publish_site_settings_embed_page: {
                    launchDateMs: 1736208e6,
                    expiryDateMs: 1743984e6
                },
                generalized_recurrence_automations: {
                    launchDateMs: 17365536e5,
                    expiryDateMs: 17460576e5
                },
                ai_page_translation_topbar_more_action: {
                    launchDateMs: 0x1953afaf7be,
                    expiryDateMs: 17434656e5
                },
                verification: {
                    launchDateMs: 1740096e6,
                    expiryDateMs: 174375e7
                },
                notion_ai_workspace_settings: {
                    launchDateMs: 17424288e5,
                    expiryDateMs: 17550432e5
                },
                notion_mail_launch_modal: {
                    launchDateMs: 17446752e5,
                    expiryDateMs: 17525376e5
                },
                notion_mail_launch_modal_2: {
                    launchDateMs: 17446752e5,
                    expiryDateMs: 17578944e5
                },
                ui_doc_example: {
                    launchDateMs: 19249056e5,
                    expiryDateMs: 19249056e5
                },
                salesforce_sync_unfurling_option: {
                    launchDateMs: 17443296e5,
                    expiryDateMs: 17538336e5
                },
                personal_home_sidebar_item: {
                    launchDateMs: 17470944e5,
                    expiryDateMs: 175392e7
                },
                collection_property_reminder: {
                    launchDateMs: 1751958e6,
                    expiryDateMs: 17552628e5
                },
                get_notified_onboarding_tooltip: {
                    launchDateMs: 17520228e5,
                    expiryDateMs: 17591904e5
                },
                conditional_color_feature: {
                    launchDateMs: 17537472e5,
                    expiryDateMs: 17563392e5
                },
                web_clipper_new_tab_settings: {
                    launchDateMs: 17471808e5,
                    expiryDateMs: 18149184e5
                },
                my_meetings: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 17657568e5
                },
                workspace_connections_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                external_agents_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                permissions_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                library_sidebar: {
                    launchDateMs: 17705952e5,
                    expiryDateMs: 17730144e5
                }
            };

            function s({
                style: e
            }) {
                let t = (0, o(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...e
                    }
                }), [e]);
                return (0, n.jsx)(o(746434).E, {
                    color: "blue",
                    style: t.badge,
                    content: (0, n.jsx)(o(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }

            function r(e) {
                return (0, o(682985).K8)(() => {
                    let {
                        launchDateMs: t,
                        expiryDateMs: n
                    } = i[e], s = o(728372).AppStoreCurrentUserSettingsStore.state;
                    if (s && s.isReady()) {
                        var r;
                        let e = null == (r = s.getSettings()) ? void 0 : r.signup_time;
                        if (e && e > t) return !1
                    }
                    return Date.now() <= n
                }, [e])
            }

            function a({
                style: e,
                newBadgeKey: t
            }) {
                return r(t) ? (0, n.jsx)(s, {
                    style: e
                }) : null
            }

            function l({
                style: e,
                newBadgeKey: t
            }) {
                return (0, o(83208).X)(t) ? (0, n.jsx)(s, {
                    style: e
                }) : null
            }

            function c(e) {
                return e.didUserEngage ? null : "feature_gate" === e.keyType ? (0, n.jsx)(l, { ...e
                }) : (0, n.jsx)(a, { ...e
                })
            }
        },
        330116: (e, t, o) => {
            o.d(t, {
                E: () => i
            }), o(296540);
            var n = o(474848);

            function i(e) {
                let {
                    children: t,
                    size: i = "sm",
                    ...s
                } = e, r = (0, o(960253).I)(() => ({
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: "lg" === i ? 2 : void 0,
                        background: o(632079).Tj.background.elevated,
                        boxShadow: o(632079).Tj.shadow.outline.md,
                        borderRadius: "lg" === i ? 12 : 6,
                        width: "fit-content",
                        padding: "lg" === i ? 4 : 2
                    }
                }), [i]);
                return (0, n.jsx)("div", { ...s,
                    dir: (0, o(619157).A1)() ? "rtl" : "ltr",
                    style: r.wrapper,
                    children: (0, n.jsx)(o(311077).J.Provider, {
                        value: {
                            size: i
                        },
                        children: t
                    })
                })
            }
        },
        338645: (e, t, o) => {
            o.r(t), o.d(t, {
                Comment: () => P,
                CommentFileBlock: () => ex().A,
                Discussion: () => Z,
                DiscussionIndicator: () => Q().Ay,
                DiscussionInput: () => R().V,
                DiscussionReactionBar: () => m().tx,
                MOBILE_REACTION_PILL_STYLE_OVERRIDES: () => m().ZR,
                MarginCommentsSection: () => em,
                NewDiscussionMenu: () => eh,
                PropertyDiscussionIndicator: () => et,
                REACTION_PILL_STYLE: () => m().Of,
                ReactionBar: () => m().Ay,
                ReplyDiscussionMenu: () => ev,
                SuggestionContext: () => $,
                UnreadDiscussionsPopup: () => eS().$,
                discussionHelpers: () => r(),
                discussionViewActions: () => n,
                handleDismissNewDiscussion: () => ep().HR,
                reactionActions: () => eC()
            });
            var n = {};
            o.r(n), o.d(n, {
                isCommentUnread: () => F
            }), o(898992), o(354520);
            var i = o(296540),
                s = () => o(247438),
                r = () => o(241838);

            function a(e) {
                return e.isFirstComment && "comment_unfurl" !== e.discussionLocation && "feed_item_top_level_discussion" !== e.discussionLocation
            }
            o(944114);
            let l = (0, o(109939).YK)({
                acceptAndResolveDiscussion: {
                    id: "comment.actions.acceptAndResolveDiscussion.label",
                    defaultMessage: "Accept and resolve discussion"
                }
            });

            function c(e, t) {
                let o = 0;
                for (let n of e) {
                    let e = s().WWE(n);
                    if (s().BEe(n)) {
                        let i = s().uPN(n);
                        for (let n of s().EF0(i))
                            if (s().Orm(n) === t) return {
                                startIndex: o,
                                endIndex: o + e
                            }
                    }
                    o += e
                }
            }

            function d(e, t) {
                let o = e.getTitleStore();
                if (o) {
                    let e = o.getValue();
                    if (e) {
                        let n = c(e, t);
                        if (n) return {
                            store: o,
                            ...n
                        }
                    }
                }
                let n = e.getCaptionStore();
                if (n) {
                    let e = n.getValue();
                    if (e) {
                        let o = c(e, t);
                        if (o) return {
                            store: n,
                            ...o
                        }
                    }
                }
                if (e.isType("table_row")) {
                    let o = e.getParentBlockStore();
                    for (let n of (null == o ? void 0 : o.getFormat().table_block_column_order) ? ? []) {
                        let o = e.getPropertyStore(n),
                            i = o.getValue();
                        if (i) {
                            let e = c(i, t);
                            if (e) return {
                                store: o,
                                ...e
                            }
                        }
                    }
                }
            }
            let u = (0, o(109939).YK)({
                unsubscribed: {
                    id: "discussionActions.unsubscribeFromDiscussion.toast",
                    defaultMessage: "Muted replies to this discussion"
                }
            });
            var m = () => o(860583),
                p = o(474848);
            let g = (0, o(109939).YK)({
                actionBar: {
                    id: "comment.actions.bar.label",
                    defaultMessage: "Comment actions"
                },
                addReaction: {
                    id: "comment.actions.addReaction.label",
                    defaultMessage: "Add reaction"
                },
                acceptButton: {
                    id: "comment.actions.acceptButton.label",
                    defaultMessage: "Accept"
                },
                rejectButton: {
                    id: "comment.actions.rejectButton.label",
                    defaultMessage: "Reject"
                },
                applyWithAi: {
                    id: "comment.actions.applyWithAi.label",
                    defaultMessage: "Apply with AI"
                },
                moreActions: {
                    id: "comment.actions.moreActions.label",
                    defaultMessage: "More actions"
                },
                reopenButton: {
                    id: "comment.actions.reopenButton.label",
                    defaultMessage: "Re-open"
                },
                resolveButton: {
                    id: "comment.actions.resolveButton.label",
                    defaultMessage: "Resolve"
                },
                markUnreadButton: {
                    id: "comment.actions.markAsUnread.label",
                    defaultMessage: "Mark as unread"
                },
                markReadButton: {
                    id: "comment.actions.markAsRead.label",
                    defaultMessage: "Mark as read"
                },
                mobileCommentMenuTitle: {
                    id: "comment.mobileCommentMenu.title",
                    defaultMessage: "Comment"
                },
                reopenDiscussionButton: {
                    id: "comment.reopenDiscussion.button",
                    defaultMessage: "Re-open discussion"
                },
                resolveDiscussionButton: {
                    id: "comment.resolveDiscussion.button",
                    defaultMessage: "Resolve comments"
                },
                editComment: {
                    id: "comment.editCommentNoDescriptor.button",
                    defaultMessage: "Edit"
                },
                deleteComment: {
                    id: "comment.deleteCommentNoDescriptor.button",
                    defaultMessage: "Delete"
                },
                copyLinkToDiscussion: {
                    id: "comment.copyLinkToDiscussionNoDescriptor.button",
                    defaultMessage: "Copy link"
                },
                copyLinkToDiscussionOnSubsequentComments: {
                    id: "comment.copyLinkToDiscussionOnSubsequentCommentsNoDescriptor.button",
                    defaultMessage: "Copy link to discussion"
                },
                subscribeToDiscussion: {
                    id: "comment.actions.subscribeToDiscussion.button",
                    defaultMessage: "Unmute replies"
                },
                unsubscribeFromDiscussion: {
                    id: "comment.actions.unsubscribeFromDiscussion.button",
                    defaultMessage: "Mute replies"
                }
            });

            function f(e) {
                let {
                    discussionLocation: t,
                    isFirstComment: n,
                    blockStore: c,
                    discussionStore: m,
                    showMarkAsRead: f
                } = e, S = (0, o(109939).tz)(), C = (0, o(533992).v3)(), k = (0, o(83208).X)("comment_ai_apply_button"), I = (0, i.useRef)(null), A = function(e) {
                    let {
                        commentStore: t,
                        discussionStore: n,
                        blockStore: r,
                        discussionLocation: a
                    } = e, c = (0, o(533992).v3)(), u = (0, o(109939).tz)();
                    return (0, i.useCallback)(async e => {
                        e.stopPropagation(), o(821243).xl();
                        let i = t.getText();
                        if (!i) return;
                        let m = function(e, t) {
                            let n = t.getRecordStoreUIRoot();
                            if (!n || !(n instanceof o(970831).B)) return;
                            let i = (0, o(730994).K3)(n),
                                r = [n, ...(0, o(966980).zo)({
                                    blockStore: n,
                                    transclusionReferences: "omit",
                                    childPages: "omit"
                                })].filter(t => (function(e, t) {
                                    let o = e.getTitleStore();
                                    if (o && s().j2Y(o.getValue()).includes(t)) return !0;
                                    let n = e.getCaptionStore();
                                    if (n && s().j2Y(n.getValue()).includes(t)) return !0;
                                    if (e.isType("table_row")) {
                                        let o = e.getParentBlockStore();
                                        for (let n of (null == o ? void 0 : o.getFormat().table_block_column_order) ? ? []) {
                                            let o = e.getPropertyStore(n);
                                            if (s().j2Y(o.getValue()).includes(t)) return !0
                                        }
                                    }
                                    return !1
                                })(t, e.id));
                            if (0 === r.length) return (0, o(966980).j3)(e) ? {
                                type: "blockSelection",
                                stores: [n],
                                currentPage: n,
                                origin: n,
                                scrollerStore: i
                            } : void 0;
                            let a = r[0],
                                l = r[r.length - 1],
                                c = d(a, e.id),
                                u = d(l, e.id);
                            if (c && u) {
                                let e = {
                                        start: {
                                            store: c.store,
                                            index: c.startIndex
                                        },
                                        end: {
                                            store: u.store,
                                            index: u.endIndex
                                        }
                                    },
                                    t = l.getParentBlockStore(),
                                    o = null == t ? void 0 : t.getContentStore();
                                if (o && t) return {
                                    type: "textSelection",
                                    textSelection: e,
                                    stores: r,
                                    currentPage: n,
                                    origin: a,
                                    endBlock: l,
                                    endBlockParent: o,
                                    scrollerStore: i
                                }
                            }
                            return {
                                type: "blockSelection",
                                stores: r,
                                currentPage: n,
                                origin: a,
                                scrollerStore: i
                            }
                        }(n, r);
                        if (!m) return;
                        o(65255).tP(c, {
                            discussion_id: n.id,
                            discussion_type: n.getType(),
                            from: a,
                            parent_block_id: n.getParentId(),
                            ...o(65255).A2({
                                store: t,
                                discussionStore: n,
                                blockStore: r
                            })
                        });
                        let {
                            aiDependency: p
                        } = await Promise.resolve().then(o.bind(o, 712155)), g = await p.load();
                        await g.completionInitialPromptActions.toggleInitialPrompt({
                            environment: c,
                            from: "comment_apply_with_ai",
                            prefilledValue: s().q4_(i),
                            context: m,
                            autoSubmit: !0,
                            forceAgentWriter: !0,
                            onAccept: () => {
                                let e = n.getSpaceId();
                                (0, o(377796).createAndCommit)({
                                    userAction: "ApplyCommentWithAi.resolveDiscussionOnAccept",
                                    environment: c,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        (0, o(29855).j)({
                                            environment: c,
                                            commentStore: t,
                                            discussionStore: n,
                                            transaction: e,
                                            discussionLocation: a
                                        })
                                    }
                                })
                            },
                            acceptButtonTooltipOverride: u.formatMessage(l.acceptAndResolveDiscussion)
                        })
                    }, [c, t, n, a, r, u])
                }({
                    commentStore: e.store,
                    discussionStore: m,
                    blockStore: c,
                    discussionLocation: t
                }), w = (0, o(67499).S)(), M = (0, o(682985).K8)(() => {
                    var e;
                    return null == w || null == (e = w.spaceStore) ? void 0 : e.getSpaceId()
                }, [w]), j = (0, o(682985).K8)(() => !!m.getResolved(), [m]), T = (0, o(682985).K8)(() => e.store.isDefined(), [e.store]), D = (0, o(345776).T)(), _ = (0, o(682985).K8)(() => {
                    let t = e.store.getCreatedById();
                    return e.store.getCreatedByTable() === o(832375).oo9 && D === t
                }, [D, e.store]), L = (0, o(682985).K8)(() => {
                    var e;
                    let t = null == (e = (0, o(974410).f)(c)) ? void 0 : e.getRole();
                    return t && o(642157).Km(t)
                }, [c]), B = (0, o(682985).K8)(() => c.getRole(), [c]), R = (0, o(682985).K8)(() => {
                    var e;
                    return null == w || null == (e = w.publicEditModeStore.state) ? void 0 : e.permission
                }, [null == w ? void 0 : w.publicEditModeStore]), {
                    isFirstCommentOfSuggestionDiscussion: E,
                    disableAccept: P
                } = (0, o(682985).K8)(() => {
                    var t;
                    let o = "suggestion" === m.getType() && m.getCommentPointers()[0].id === e.store.id,
                        n = (null == (t = c.getNavigableBlockStore()) ? void 0 : t.canEdit()) ? ? !1;
                    return {
                        isFirstCommentOfSuggestionDiscussion: o,
                        disableAccept: o && !n
                    }
                }, [m, c, e.store]), F = (0, o(682985).K8)(() => c.pathIsDead(), [c]), N = (0, o(682985).K8)(() => a({
                    isFirstComment: n,
                    discussionLocation: t
                }), [n, t]), U = (0, o(24971).A)("(prefers-reduced-motion: reduce)"), W = "comment_only" === B || "comment" === R, z = (0, o(682985).K8)(() => !!D && (0, r().isUserImplicitlyFollowingDiscussion)({
                    discussionStore: m,
                    userId: D
                }), [m, D]), V = (0, o(682985).K8)(() => {
                    var e;
                    if (!D) return !1;
                    let t = m.getUserSeenRecordStore(D);
                    return null == t || null == (e = t.getModel()) ? void 0 : e.isUnsubscribedFromDiscussion()
                }, [m, D]), O = (0, i.useCallback)(() => {
                    (0, o(377796).createAndCommit)({
                        userAction: "Comment.markDiscussionRead",
                        environment: C,
                        cellTarget: M ? {
                            spaceWithId: M
                        } : void 0,
                        canUndo: !0,
                        perform: e => (0, o(737146).U)({
                            transaction: e,
                            discussionStore: m
                        })
                    }), o(65255).Ry(C, {
                        discussion_id: m.id,
                        discussion_type: m.getType(),
                        from: t,
                        method: "action_group",
                        parent_block_id: m.getParentId(),
                        ...o(65255).A2({
                            store: e.store,
                            discussionStore: m,
                            blockStore: c
                        })
                    })
                }, [C, m, t, e.store, c, M]), K = (0, i.useCallback)(() => {
                    (0, o(377796).createAndCommit)({
                        userAction: "Comment.markDiscussionUnread",
                        environment: C,
                        cellTarget: M ? {
                            spaceWithId: M
                        } : void 0,
                        canUndo: !0,
                        perform: e => (function(e) {
                            let {
                                transaction: t,
                                discussionStore: n
                            } = e, i = n.userId;
                            if (!i) return;
                            let s = n.getUserSeenRecordStore(i);
                            return (0, o(421439).y4)({
                                store: s,
                                operation: {
                                    pointer: s.pointer,
                                    path: [],
                                    command: "update",
                                    args: {
                                        user_id: i,
                                        space_id: s.pointer.spaceId,
                                        parent_id: n.id,
                                        parent_table: n.table,
                                        last_seen_at: o(180912).Xq
                                    }
                                },
                                transaction: t
                            }), n
                        })({
                            transaction: e,
                            discussionStore: m
                        })
                    }), U || o(821243).F2(m.id), o(65255).i3(C, {
                        discussion_id: m.id,
                        method: "action_group",
                        discussion_type: m.getType(),
                        from: t,
                        parent_block_id: m.getParentId(),
                        ...o(65255).A2({
                            store: e.store,
                            discussionStore: m,
                            blockStore: c
                        })
                    })
                }, [C, U, m, e.store, c, t, M]), H = (0, i.useCallback)(() => {
                    D && ((0, o(377796).createAndCommit)({
                        userAction: "Comment.subscribeToDiscussion",
                        environment: C,
                        cellTarget: M ? {
                            spaceWithId: M
                        } : void 0,
                        canUndo: !0,
                        perform: e => (0, o(308114).u)({
                            userId: D,
                            transaction: e,
                            discussionStore: m,
                            showToast: !0
                        })
                    }), o(65255).dW(C, {
                        discussion_id: m.id,
                        discussion_type: m.getType(),
                        from: t,
                        parent_block_id: m.getParentId(),
                        ...o(65255).A2({
                            store: e.store,
                            discussionStore: m,
                            blockStore: c
                        })
                    }))
                }, [D, C, m, t, e.store, c, M]), X = (0, i.useCallback)(() => {
                    D && ((0, o(377796).createAndCommit)({
                        userAction: "Comment.unsubscribeFromDiscussion",
                        environment: C,
                        cellTarget: M ? {
                            spaceWithId: M
                        } : void 0,
                        canUndo: !0,
                        perform: e => (function(e) {
                            let {
                                userId: t,
                                transaction: n,
                                discussionStore: i,
                                showToast: s
                            } = e, r = i.getUserSeenRecordStore(t);
                            (0, o(421439).y4)({
                                store: r,
                                operation: {
                                    pointer: r.pointer,
                                    path: [],
                                    command: "update",
                                    args: {
                                        user_id: t,
                                        space_id: r.pointer.spaceId,
                                        parent_id: i.id,
                                        parent_table: i.table,
                                        subscription_state: "unsubscribed"
                                    }
                                },
                                transaction: n
                            }), s && o(436555).D6({
                                label: o(962299).A.formatMessage(u.unsubscribed)
                            })
                        })({
                            userId: D,
                            transaction: e,
                            discussionStore: m,
                            showToast: !0
                        })
                    }), o(65255).TJ(C, {
                        discussion_id: m.id,
                        discussion_type: m.getType(),
                        from: t,
                        parent_block_id: m.getParentId(),
                        ...o(65255).A2({
                            store: e.store,
                            discussionStore: m,
                            blockStore: c
                        })
                    }))
                }, [D, C, m, t, e.store, c, M]);
                if (!T || !D) return null;
                let $ = () => {
                        (0, o(377796).createAndCommit)({
                            userAction: "Comment.handleReopen",
                            environment: C,
                            cellTarget: M ? {
                                spaceWithId: M
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                o(554067).E3({
                                    environment: C,
                                    commentStore: e.store,
                                    discussionStore: m,
                                    transaction: t,
                                    discussionLocation: e.discussionLocation
                                })
                            }
                        })
                    },
                    Y = t => {
                        (0, o(377796).createAndCommit)({
                            userAction: "Comment.handleResolve",
                            environment: C,
                            cellTarget: M ? {
                                spaceWithId: M
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, o(29855).j)({
                                    environment: C,
                                    commentStore: e.store,
                                    discussionStore: m,
                                    transaction: t,
                                    discussionLocation: e.discussionLocation
                                })
                            }
                        }), o(821243).UP(), null == t || t.stopPropagation()
                    },
                    J = async () => {
                        var n, i, s;
                        let r = e.store.getParentStore();
                        if (!r || !(null != r && r.isDefined())) return null;
                        let a = r.getParentStore();
                        if (!(null != (n = a) && n.isDefined()) || (a.getType() === o(955630).xd.tableRow && (a = null == (s = a) ? void 0 : s.getParentBlockStore()), !(null != (i = a) && i.isDefined()))) return null;
                        let l = (0, o(492569).Q)({
                            model: a.getModel(),
                            baseUrl: o(986939).A.domainBaseUrl,
                            getRecordModel: e.store.getRecordModel,
                            discussionId: r.id,
                            pageVisitSource: o(254656).y8.CopyLink,
                            addPagePrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                        });
                        o(65255).tG(C, {
                            discussion_id: r.id,
                            discussion_type: r.getType(),
                            from: t,
                            parent_block_id: r.getParentId(),
                            ...o(65255).A2({
                                store: e.store,
                                discussionStore: r,
                                blockStore: a
                            })
                        });
                        let [c, d] = await Promise.all([(0, o(161333).r)(), (0, o(969899).jd)()]);
                        d({
                            environment: C,
                            stringValue: l,
                            copiedMessage: c.copiedLinkToClipboard
                        })
                    };
                if (!C.currentUser.isLoggedIn()) return null;
                let G = B && o(642157).h9(B) || F,
                    q = N && !W && !G,
                    Z = [],
                    Q = [];
                G || (n && !j && (f ? Z.push("markDiscussionRead") : Z.push("markDiscussionUnread")), !E && _ && Z.push("edit")), Z.push("copyLink"), n && z && (V ? Q.push("subscribeToDiscussion") : Q.push("unsubscribeFromDiscussion")), !G && !E && (_ || L) && Q.push("delete");
                let ee = Z.length > 0 || Q.length > 0;
                return ee || q || e.canShowReactions ? (0, p.jsx)(o(656252).A, {
                    ref: I,
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    bottomSheetInitialState: "half",
                    buttonPopupStore: e.buttonPopupStore,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "end",
                    stopClickPropagation: !0,
                    suppressOriginContext: !0,
                    content: t => {
                        let i;
                        i = o(986939).A.isMobile ? {
                            menuType: o(649476).gu.Modal,
                            title: (0, p.jsx)(o(109939).sA, { ...g.mobileCommentMenuTitle
                            })
                        } : {
                            menuType: o(649476).gu.Popup
                        };
                        let s = t => "reopen" === t ? {
                                key: "reopen",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(128743).arrowStraightLeftIcon
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.reopenDiscussionButton
                                    })
                                }),
                                action: $
                            } : "resolve" === t ? {
                                key: "resolve",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(971730).checkmarkSmallIcon
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.resolveDiscussionButton
                                    })
                                }),
                                action: () => Y()
                            } : "edit" === t ? {
                                key: "edit",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(636).pencilLineIcon
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.editComment
                                    })
                                }),
                                action: e.handleEditComment
                            } : "delete" === t ? {
                                key: "delete",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(968411).trashIcon
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.deleteComment
                                    }),
                                    isRedOnHover: !0
                                }),
                                action: e.handleDeleteComment
                            } : "copyLink" === t ? {
                                key: "copyLink",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(588739).linkIcon
                                    }),
                                    title: n ? (0, p.jsx)(o(109939).sA, { ...g.copyLinkToDiscussion
                                    }) : (0, p.jsx)(o(109939).sA, { ...g.copyLinkToDiscussionOnSubsequentComments
                                    })
                                }),
                                action: J
                            } : "markDiscussionRead" === t ? {
                                key: "markDiscussionRead",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(444202).d
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.markReadButton
                                    })
                                }),
                                action: O
                            } : "markDiscussionUnread" === t ? {
                                key: "markDiscussionUnread",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(88721).C
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.markUnreadButton
                                    })
                                }),
                                action: K
                            } : "subscribeToDiscussion" === t ? {
                                key: "subscribeToDiscussion",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(931118).r
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.subscribeToDiscussion
                                    })
                                }),
                                action: H
                            } : "unsubscribeFromDiscussion" === t ? {
                                key: "unsubscribeFromDiscussion",
                                render: e => (0, p.jsx)(o(95582).A, { ...e,
                                    icon: (0, p.jsx)(o(16275).I, {
                                        icon: o(761659).u
                                    }),
                                    title: (0, p.jsx)(o(109939).sA, { ...g.unsubscribeFromDiscussion
                                    })
                                }),
                                action: X
                            } : void(0, o(722371).HB)(t),
                            r = Z.map(s),
                            a = Q.map(s);
                        return 0 === r.length && (r.push(...a), a.length = 0), (0, p.jsx)("div", {
                            className: o(828432).Jb,
                            children: (0, p.jsx)(o(747369).A, { ...i,
                                children: (0, p.jsx)(o(558045).A, {
                                    type: o(558045).O.Vertical,
                                    initialFocus: void 0,
                                    onAccept: t.close,
                                    sections: o(381453).oE([r.length > 0 && {
                                        key: 0,
                                        render: e => (0, p.jsx)(o(844565).A, { ...e
                                        }),
                                        items: r
                                    }, a.length > 0 && {
                                        key: 1,
                                        render: e => (0, p.jsx)(o(844565).A, { ...e,
                                            topBorder: !0
                                        }),
                                        items: a
                                    }])
                                })
                            })
                        })
                    },
                    children: t => (0, p.jsxs)(h, {
                        visible: e.visible,
                        location: e.discussionLocation,
                        children: [!E || P || j ? void 0 : (0, p.jsx)(v, {
                            store: e.store,
                            discussionStore: e.discussionStore,
                            location: e.discussionLocation
                        }), E && !j && (!W || _) ? (0, p.jsx)(y, {
                            store: e.store,
                            discussionStore: e.discussionStore,
                            location: e.discussionLocation
                        }) : void 0, !G && e.canShowReactions ? (0, p.jsx)(b, {
                            store: e.store,
                            location: e.discussionLocation,
                            onReact: e.handleReaction
                        }) : void 0, !k || G || E || W ? void 0 : (0, p.jsx)(o(517352).e, {
                            "aria-label": S.formatMessage(g.applyWithAi),
                            tooltip: S.formatMessage(g.applyWithAi),
                            onClick: A,
                            iconLeading: o(652134).aiFaceSmallIcon
                        }), q && !E ? (0, p.jsx)(x, {
                            resolved: j,
                            onResolve: Y,
                            onReopen: $
                        }) : void 0, ee ? (0, p.jsx)(o(517352).e, { ...t,
                            "aria-label": S.formatMessage(g.moreActions),
                            tooltip: S.formatMessage(g.moreActions),
                            iconLeading: o(361226).ellipsisSmallIcon
                        }) : void 0]
                    })
                }) : null
            }

            function h(e) {
                let {
                    children: t,
                    visible: n,
                    location: i
                } = e, s = (0, o(109939).tz)(), r = n || o(986939).A.isMobile, a = (0, o(960253).I)(() => ({
                    wrapper: {
                        position: "absolute",
                        insetInlineEnd: 0,
                        zIndex: 1,
                        ...o(986939).A.isMobile ? {
                            top: -3
                        } : {
                            marginTop: 6 * ("updates_sidebar" === i),
                            top: -4
                        },
                        opacity: +!!r,
                        transition: "opacity 150ms ease-out"
                    }
                }), [i, r]);
                return (0, p.jsx)("div", {
                    style: a.wrapper,
                    children: (0, p.jsx)(o(330116).E, {
                        "aria-label": s.formatMessage(g.actionBar),
                        size: "sm",
                        children: t
                    })
                })
            }

            function v(e) {
                let {
                    store: t,
                    discussionStore: n,
                    location: s
                } = e, r = (0, o(533992).v3)(), a = (0, o(109939).tz)(), l = (0, i.useCallback)(() => {
                    let e = n.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "Suggestion.handleAccept",
                        environment: r,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, o(766920).H)({
                                action: "accept",
                                environment: r,
                                commentStore: t,
                                discussionStore: n,
                                transaction: e,
                                discussionLocation: s,
                                currentPageStore: (0, o(911520).f)(n)
                            })
                        }
                    }), o(821243).UP()
                }, [r, t, n, s]);
                return (0, p.jsx)(o(517352).e, {
                    "aria-label": a.formatMessage(g.acceptButton),
                    tooltip: a.formatMessage(g.acceptButton),
                    onClick: l,
                    iconLeading: o(971730).checkmarkSmallIcon
                })
            }

            function y(e) {
                let {
                    store: t,
                    discussionStore: n,
                    location: s
                } = e, r = (0, o(533992).v3)(), a = (0, o(109939).tz)(), l = (0, i.useCallback)(() => {
                    let e = n.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "Suggestion.handleReject",
                        environment: r,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, o(766920).H)({
                                action: "reject",
                                environment: r,
                                commentStore: t,
                                discussionStore: n,
                                transaction: e,
                                discussionLocation: s,
                                currentPageStore: (0, o(911520).f)(n)
                            })
                        }
                    }), o(821243).UP()
                }, [r, t, n, s]);
                return (0, p.jsx)(o(517352).e, {
                    "aria-label": a.formatMessage(g.rejectButton),
                    tooltip: a.formatMessage(g.rejectButton),
                    onClick: l,
                    iconLeading: o(25094).xMarkSmallIcon
                })
            }

            function b(e) {
                let {
                    store: t,
                    location: n,
                    onReact: s
                } = e, r = (0, i.useRef)(null), a = (0, o(533992).v3)(), l = (0, o(109939).tz)(), c = (0, i.useCallback)(() => {
                    (0, m().uJ)(a, l, t, r.current, n, s)
                }, [a, l, t, r, n, s]);
                return (0, p.jsx)(o(517352).e, {
                    ref: r,
                    "aria-label": l.formatMessage(g.addReaction),
                    tooltip: l.formatMessage(g.addReaction),
                    onClick: c,
                    iconLeading: o(689220).S
                })
            }

            function x(e) {
                let {
                    resolved: t,
                    onResolve: n,
                    onReopen: s
                } = e, r = (0, i.useRef)(null), a = (0, o(109939).tz)(), l = t ? g.reopenButton : g.resolveButton;
                return (0, p.jsx)(o(517352).e, {
                    ref: r,
                    "aria-label": a.formatMessage(l),
                    tooltip: a.formatMessage(l),
                    onClick: t ? s : n,
                    iconLeading: t ? o(983012).w : o(971730).checkmarkSmallIcon
                })
            }

            function S({
                stores: e,
                collapsed: t,
                shouldShowGrayFogInScroller: n,
                onRemoveBlockFromComment: i
            }) {
                return 0 === e.length ? null : e.length <= 3 ? (0, p.jsx)(o(4458).VP, {
                    gap: 4,
                    children: e.map(e => (0, p.jsx)(o(957562).k, {
                        store: e,
                        disabled: !1,
                        commentProps: {
                            shouldHideBlockActionMenu: t,
                            onRemoveBlockFromComment: i
                        }
                    }, e.id))
                }) : (0, p.jsx)(o(674707).A, {
                    shouldShowGrayFog: n,
                    children: e.map(e => (0, p.jsx)(o(957562).k, {
                        store: e,
                        disabled: !1,
                        commentProps: {
                            shouldHideBlockActionMenu: t,
                            onRemoveBlockFromComment: i
                        }
                    }, e.id))
                })
            }
            o(581454);
            let C = {
                style2: {
                    position: "absolute",
                    zIndex: 1,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: 8,
                    color: "white",
                    fontWeight: o(699422).Wy.bold
                },
                style3: {
                    background: "rgba(0, 0, 0, 0.4)"
                },
                style4: {
                    display: "none"
                }
            };

            function k({
                stores: e,
                embedBlockLocation: t,
                onRemoveContent: n
            }) {
                let i = (0, o(533992).v3)();
                if (0 === e.length) return null;
                if (e.length <= 3) return (0, p.jsx)(o(4458).VP, {
                    gap: 4,
                    children: e.map(e => (0, p.jsx)(A, {
                        store: e,
                        embedBlockLocation: t,
                        onRemoveContent: n,
                        isLarge: !0
                    }, e.id))
                });
                if (e.length <= 4) return (0, p.jsx)(o(4458).fI, {
                    gap: 4,
                    children: e.map(e => (0, p.jsx)(A, {
                        store: e,
                        embedBlockLocation: t,
                        onRemoveContent: n,
                        isLarge: !1
                    }, e.id))
                });
                let s = e.slice(0, 3),
                    r = e[3],
                    a = e.length - 4 + 1,
                    l = e.slice(4);
                return (0, p.jsxs)(o(4458).fI, {
                    gap: 4,
                    children: [s.map(e => (0, p.jsx)(A, {
                        store: e,
                        embedBlockLocation: t,
                        onRemoveContent: n,
                        isLarge: !1
                    }, e.id)), (0, p.jsxs)("div", {
                        children: [(0, p.jsx)(o(64960).Ay, {
                            style: C.style2,
                            hoveredStyle: C.style3,
                            pressedStyle: C.style3,
                            onClick: () => {
                                (0, o(2925).i)({
                                    environment: i,
                                    blockStore: r
                                })
                            },
                            children: `+${a}`
                        }), (0, p.jsx)(A, {
                            store: r,
                            embedBlockLocation: t,
                            onRemoveContent: n,
                            isLarge: !1
                        }, r.id)]
                    }), (0, p.jsx)("div", {
                        style: C.style4,
                        children: l.map(e => (0, p.jsx)(A, {
                            store: e,
                            embedBlockLocation: t,
                            onRemoveContent: n,
                            isLarge: !1
                        }, e.id))
                    })]
                })
            }
            let I = {
                imageShared: {
                    border: `1px solid ${o(632079).Tj.border.secondary}`,
                    borderRadius: 8,
                    cursor: "zoom-in"
                }
            };

            function A({
                store: e,
                isLarge: t,
                embedBlockLocation: n,
                onRemoveContent: i
            }) {
                return (0, p.jsx)(o(494295).Ay, {
                    store: e,
                    blockLocation: n,
                    disabled: !1,
                    disableDrag: !0,
                    disableResizers: !0,
                    preserveScale: !0,
                    inlineContentStyle: { ...I.imageShared,
                        ...t ? w : M
                    },
                    disableActions: !t,
                    onRemoveBlockFromComment: t ? i : void 0
                }, e.id)
            }
            let w = {
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                    maxWidth: 240,
                    maxHeight: 240,
                    minWidth: 48,
                    minHeight: 48
                },
                M = {
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    minHeight: 48
                },
                j = {
                    wrapper: {
                        height: 48,
                        width: 214,
                        display: "flex",
                        alignItems: "center",
                        background: o(632079).Tj.background.primary,
                        border: `1px solid ${o(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 12,
                        paddingTop: 8,
                        paddingInlineEnd: 10,
                        paddingBottom: 8,
                        paddingInlineStart: 8,
                        gap: 8
                    },
                    icon: {
                        background: o(632079).Tj.background.tertiaryTranslucent,
                        borderRadius: 6,
                        width: 32,
                        minWidth: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    fileName: {
                        fontSize: 14,
                        fontWeight: o(699422).Wy.medium,
                        lineHeight: "18px",
                        color: o(632079).Tj.text.primary,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    },
                    fileSizeText: {
                        color: o(632079).Tj.text.secondary
                    },
                    progressText: {
                        color: o(632079).Tj.text.tertiary
                    },
                    sizeAndProgressContainer: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        lineHeight: "15px"
                    },
                    style0: {
                        overflow: "hidden"
                    }
                };

            function T({
                store: e
            }) {
                let t = (0, o(682985).K8)(() => o(553871).default.getKeyState(o(553871).default.getBlockKey(e.id)), [e.id]),
                    n = (0, o(109939).tz)();
                if (!t) return (0, p.jsxs)("div", {
                    style: j.wrapper,
                    children: [(0, p.jsx)("div", {
                        style: j.icon,
                        children: (0, p.jsx)(o(517334).k, {})
                    }), (0, p.jsx)(o(4458).VP, {
                        children: (0, p.jsx)("div", {
                            style: j.fileName,
                            children: n.formatMessage({
                                id: "commentFilePlaceholder.loading",
                                defaultMessage: "Loading..."
                            })
                        })
                    })]
                });
                let {
                    name: i,
                    size: s,
                    progressPercent: a,
                    progressText: l
                } = t;
                return (0, p.jsxs)("div", {
                    style: j.wrapper,
                    children: [(0, p.jsx)("div", {
                        style: j.icon,
                        children: (0, p.jsx)(o(517334).k, {})
                    }), (0, p.jsx)("div", {
                        style: j.style0,
                        children: (0, p.jsxs)(o(4458).VP, {
                            children: [(0, p.jsx)("div", {
                                style: j.fileName,
                                children: i
                            }), (0, p.jsxs)("div", {
                                style: j.sizeAndProgressContainer,
                                children: [(0, p.jsx)("span", {
                                    style: j.fileSizeText,
                                    children: (0, r().formatFileSize)(s)
                                }), (0, p.jsx)("span", {
                                    style: j.progressText,
                                    children: "—"
                                }), (0, p.jsx)(o(517334).k, {}), a ? (0, p.jsx)(o(547374).A, {
                                    percentage: a,
                                    style: j.progressText
                                }) : l ? (0, p.jsx)("span", {
                                    children: l
                                }) : null]
                            })]
                        })
                    })]
                })
            }

            function D({
                stores: e
            }) {
                return 0 === e.length ? null : (0, p.jsx)(o(4458).VP, {
                    gap: 4,
                    children: e.map(e => (0, p.jsx)(T, {
                        store: e
                    }, e.id))
                })
            }

            function _(e) {
                let t = e.discussionFormat === r().DiscussionFormat.Sidebar ? o(556533).ZO.SidebarComment : o(556533).ZO.PageComment,
                    {
                        uploading: n,
                        images: i,
                        embeds: s,
                        files: a
                    } = (0, o(682985).K8)(() => {
                        let [t, n] = o(381453).jB(e.contentStores, e => {
                            let t = !!o(553871).default.getKeyState(o(553871).default.getBlockKey(e.id)),
                                n = (0, o(494295).getEmbedSourceFromBlockStore)(e);
                            return t || !n
                        }), [i, s] = o(381453).jB(n, e => e.getType() === o(955630).xd.image), [r, a] = o(381453).jB(s, e => "video" === e.getType());
                        return {
                            uploading: t,
                            images: i,
                            embeds: r,
                            files: a
                        }
                    }, [e.contentStores]);
                return 0 === n.length && 0 === i.length && 0 === s.length && 0 === a.length ? null : (0, p.jsxs)(o(4458).VP, {
                    gap: 4,
                    marginTop: 8,
                    children: [(0, p.jsx)(D, {
                        stores: n
                    }), (0, p.jsx)(k, {
                        stores: i,
                        embedBlockLocation: t,
                        onRemoveContent: e.onRemoveContent
                    }), s.length > 0 ? (0, p.jsx)(o(4458).VP, {
                        gap: 4,
                        children: s.map(n => (0, p.jsx)(o(494295).Ay, {
                            store: n,
                            blockLocation: t,
                            disabled: !1,
                            disableDrag: !0,
                            disableResizers: !0,
                            preserveScale: !0,
                            inlineContentStyle: {},
                            onRemoveBlockFromComment: e.onRemoveContent
                        }, n.id))
                    }) : void 0, (0, p.jsx)(S, {
                        stores: a,
                        collapsed: e.collapsed,
                        shouldShowGrayFogInScroller: e.discussionHovered && (e.discussionFormat === r().DiscussionFormat.Margin || e.discussionFormat === r().DiscussionFormat.Sidebar),
                        onRemoveBlockFromComment: e.onRemoveContent
                    })]
                })
            }
            let L = {
                container: {
                    position: "relative"
                },
                newBarLineWrapper: {
                    width: "100%"
                },
                newBarLine: {
                    borderRadius: 2,
                    height: o(42615).jw,
                    background: o(632079).Tj.blue.background.secondary,
                    width: "100%",
                    margin: "auto 0px"
                },
                newBarWrapper: {
                    color: o(632079).Tj.text.secondary,
                    fontSize: 10,
                    fontWeight: o(699422).Wy.regular,
                    display: "flex",
                    alignItems: "center",
                    marginTop: 0,
                    marginBottom: 12,
                    paddingInlineStart: 0
                },
                threadLine: {
                    position: "absolute",
                    backgroundColor: o(632079).Tj.border.secondary,
                    width: o(42615).jw,
                    height: 8,
                    borderRadius: 2,
                    insetInlineStart: o(42615).im,
                    bottom: -6,
                    zIndex: -1
                },
                style0: {
                    marginInlineStart: 12,
                    marginInlineEnd: 12
                }
            };

            function B() {
                return (0, p.jsxs)("div", {
                    style: L.container,
                    children: [(0, p.jsxs)("div", {
                        style: L.newBarWrapper,
                        children: [(0, p.jsx)("div", {
                            style: L.newBarLineWrapper,
                            children: (0, p.jsx)("div", {
                                style: L.newBarLine
                            })
                        }), (0, p.jsx)(o(322662).J1, {
                            style: L.style0
                        }), (0, p.jsx)("div", {
                            style: L.newBarLineWrapper,
                            children: (0, p.jsx)("div", {
                                style: L.newBarLine
                            })
                        })]
                    }), (0, p.jsx)("div", {
                        style: L.threadLine
                    })]
                })
            }
            var R = () => o(305215);
            let E = {
                    style0: {
                        marginTop: 4
                    },
                    style2: {
                        alignSelf: "flex-end",
                        marginInlineEnd: 8,
                        marginInlineStart: 8
                    },
                    style3: {
                        marginInlineEnd: 5
                    },
                    style4: {
                        marginTop: 8
                    },
                    commentElementsBelowUserRow: {
                        paddingInlineStart: o(42615).FB
                    },
                    threadLine: {
                        position: "absolute",
                        backgroundColor: o(632079).Tj.border.secondary,
                        borderRadius: 2,
                        width: o(42615).jw,
                        height: o(42615).k2,
                        insetInlineStart: o(42615).im,
                        top: o(42615).uG
                    },
                    commentAttachment: {}
                },
                P = function(e) {
                    let {
                        store: t,
                        discussionContext: n,
                        discussionLocation: l,
                        shouldShowThreadLine: c,
                        discussionStore: d,
                        blockStore: u,
                        collapsed: g,
                        showMarkAsRead: h
                    } = e, v = (0, o(533992).v3)(), [y, b] = (0, i.useState)(!1), [x, S] = (0, i.useState)(!1), [C, k] = (0, i.useState)(!1), [I, A] = (0, i.useState)(!1), [w, M] = (0, i.useState)("feed_item_top_level_discussion" === l && g), j = (0, o(682985).K8)(() => u.getSpaceId(), [u]), T = (0, o(682985).K8)(() => e.store.isDefined() ? new(o(478597)).A(v, e.store.getSpaceId()) : void 0, [v, e.store]), D = (0, o(682985).K8)(() => o(966980).dd(e.store).filter(e => (0, o(517013).G_)(e, {
                        table: o(832375).evP,
                        id: e.id
                    }, "alive").getValue()), [e.store]), L = (0, o(682985).K8)(() => d.getResolved(), [d]), P = (0, o(682985).K8)(() => null == T ? void 0 : T.state.files, [T]), F = (0, o(682985).K8)(() => null == T ? void 0 : T.state.textStore, [T]), N = (0, i.useCallback)(e => {
                        let t = e.target;
                        t instanceof HTMLElement && (0, o(768397).p)(t) && S(!0)
                    }, []), U = (0, i.useCallback)(() => {
                        S(!1)
                    }, []), W = (0, i.useCallback)(() => {
                        o(395364).A.state || k(!0)
                    }, []), z = (0, i.useCallback)(() => {
                        k(!1)
                    }, []), V = (0, o(67499).S)(), O = (0, o(682985).uB)(void 0, o(510969).A), K = (0, o(682985).K8)(() => O.state.open, [O]), H = (0, o(366318).S)(u), X = (0, o(682985).K8)(() => (0, o(607689).o7)(e.store.id), [e.store.id]), $ = (0, o(682985).K8)(() => {
                        let t = e.discussionStore.getComments();
                        return !!(t && t[0] === e.store.id)
                    }, [e.discussionStore, e.store.id]), Y = (0, o(682985).K8)(() => {
                        var t;
                        let n = u.getRole(),
                            i = a({
                                isFirstComment: $,
                                discussionLocation: l
                            }),
                            s = u.pathIsDead(),
                            r = n && o(642157).h9(n) || s,
                            c = "comment_only" === n || V && (null == (t = V.publicEditModeStore.state) ? void 0 : t.permission) === "comment",
                            d = i && !o(986939).A.isMobile && !c && !r;
                        return C || x || e.hoveringDiscussion && i || K || o(986939).A.isMobile || e.showResolveButtonByDefaultIfPossible && d
                    }, [u, e.hoveringDiscussion, e.showResolveButtonByDefaultIfPossible, $, l, V, C, x, K]), J = (0, i.useContext)(o(700587).U), G = (0, o(682985).K8)(() => {
                        let e = t.getCreatedByPointer();
                        return e ? {
                            createdByPointer: e,
                            lastEditedTime: t.getLastEditedTime(),
                            createdTime: t.getCreatedTime(),
                            text: t.getText(),
                            reactions: o(868249).L.getUserVisibleReactions(t)
                        } : null
                    }, [t]), q = (0, o(682985).K8)(() => G ? (0, o(935786).JQ)({
                        parentStore: t,
                        pointer: G.createdByPointer
                    }) : null, [G, t]), Z = (0, o(682985).K8)(() => o(966980).gp(e.store), [e.store]), Q = function(e) {
                        let {
                            discussionLocation: t,
                            isCommentCollapsed: o,
                            isDiscussionCollapsed: n,
                            maxLines: i
                        } = e;
                        return "feed_item_top_level_discussion" === t ? o ? i : void 0 : n ? i : void 0
                    }({
                        discussionLocation: l,
                        isCommentCollapsed: w,
                        isDiscussionCollapsed: g,
                        maxLines: e.maxLines
                    }), ee = (0, i.useCallback)(() => {
                        (0, o(377796).createAndCommit)({
                            userAction: "Comment.deleteComment",
                            environment: v,
                            cellTarget: {
                                spaceWithId: j
                            },
                            canUndo: !0,
                            perform: t => {
                                o(554067).Tu({
                                    environment: v,
                                    commentStore: e.store,
                                    transaction: t,
                                    discussionLocation: l
                                })
                            },
                            skipUpdatingEditedMetadata: !0
                        })
                    }, [v, e.store, l, j]), et = (0, i.useCallback)(async () => {
                        let {
                            accept: e
                        } = await o(647095).Gh({
                            message: (0, p.jsx)(o(109939).sA, {
                                defaultMessage: "Would you like to delete this comment?",
                                id: "comment.confirmDialog.deleteComment.prompt"
                            }),
                            acceptLabel: (0, p.jsx)(o(109939).sA, {
                                defaultMessage: "Delete",
                                id: "comment.confirmDialog.deleteComment.deleteButton.label"
                            })
                        });
                        e && (ee(), o(821243).UP(), o(827862).A.state.overlapsExistingDiscussionMenu && !o(575125).A.state.open && o(827862).A.setState({ ...o(827862).A.state,
                            overlapsExistingDiscussionMenu: !1
                        }), (0, o(753288).j)(v))
                    }, [ee, v]), eo = (0, i.useCallback)(async t => {
                        let n = Z.getValue(),
                            i = o(966980).dd(e.store).filter(e => e.id !== t.id),
                            s = n && n.length > 0,
                            r = 0 === i.length;
                        !s && r ? (await et(), b(!1)) : (0, o(377796).createAndCommit)({
                            userAction: "Comment.handleRemoveFileFromActions",
                            environment: v,
                            cellTarget: {
                                spaceWithId: j
                            },
                            canUndo: !0,
                            perform: n => {
                                o(554067).L6({
                                    commentStore: e.store,
                                    fileBlocks: [t],
                                    transaction: n
                                })
                            }
                        })
                    }, [Z, v, et, e.store, j]), en = (0, i.useCallback)(() => {
                        A(!0)
                    }, []), ei = (0, i.useCallback)(async () => {
                        if (!T) return;
                        let e = Z.getValue() || [],
                            t = T.state.textStore;
                        (0, o(377796).createAndCommit)({
                            userAction: "Comment.handleEditComment",
                            environment: v,
                            cellTarget: {
                                spaceWithId: j
                            },
                            canUndo: !0,
                            perform: n => {
                                o(41403).R9({
                                    environment: v,
                                    store: t,
                                    value: e,
                                    transaction: n
                                })
                            }
                        }), b(!0), await o(374176).default.afterNextFlush(), await o(374176).default.afterNextFlush(), (0, o(739204).z)({
                            store: t
                        })
                    }, [T, Z, v, j]), es = (0, i.useCallback)(async () => {
                        if (!T) return !1;
                        if (!(0, r().hasCommentChanged)(T, e.store)) return b(!1), !0; {
                            let {
                                accept: e
                            } = await o(647095).Gh({
                                message: (0, p.jsx)(o(109939).sA, {
                                    defaultMessage: "Do you want to discard this edit?",
                                    id: "comment.confirmDialog.discardEdit.prompt"
                                }),
                                acceptLabel: (0, p.jsx)(o(109939).sA, {
                                    defaultMessage: "Discard",
                                    id: "comment.confirmDialog.discardEdit.discardButton.label"
                                })
                            });
                            if (e) return b(!1), !0
                        }
                        return !1
                    }, [T, e.store]), er = (0, i.useCallback)(async () => {
                        let t = null == F ? void 0 : F.getValue();
                        t && t.length > 0 || P && P.length > 0 ? (0, o(377796).createAndCommit)({
                            userAction: "Comment.handleSubmitEdit",
                            environment: v,
                            cellTarget: {
                                spaceWithId: j
                            },
                            canUndo: !0,
                            perform: n => {
                                o(554067).QA({
                                    environment: v,
                                    store: e.store,
                                    text: t || [],
                                    transaction: n,
                                    discussionLocation: l,
                                    files: P || [],
                                    property_id: d.getPropertyId(),
                                    blockStore: u
                                })
                            }
                        }) : await et(), b(!1)
                    }, [F, P, v, e.store, l, d, u, et, j]), ea = (0, i.useCallback)(() => {
                        "feed_item_top_level_discussion" === l && M(!1)
                    }, [l]), el = (0, i.useRef)(null), ec = (0, i.useRef)(null);
                    (0, o(336494).b)(o(74292).A, () => ({
                        edit: ei,
                        handleCancelEdit: es,
                        getNode: () => el.current,
                        isEditing: () => y,
                        discussionLocation: l,
                        commentId: e.store.id
                    }), [ei, es, y, l, e.store.id]);
                    let ed = null == G ? void 0 : G.text,
                        eu = void 0 !== ed && ed.length > 0 && s().AhH(ed) > 0,
                        em = eu && (0, r().isCommentAllEmojis)(ed),
                        ep = (0, o(233633).C)({
                            type: "discussionLocation",
                            location: l
                        }),
                        eg = function({
                            discussionLocation: e,
                            showNewBar: t,
                            isAllEmojis: n,
                            newStatusDotPosition: i,
                            isMobileRedesignEnabled: s
                        }) {
                            return (0, o(960253).I)(() => ({
                                container: {
                                    flexGrow: "comment_unfurl" === e ? 1 : void 0,
                                    paddingTop: t ? 0 : "comment_unfurl" === e ? o(42615).ds : o(42615).e4,
                                    paddingInlineEnd: o(42615).JC(e, s, "end"),
                                    paddingBottom: o(42615).Wv,
                                    paddingInlineStart: o(42615).JC(e, s, "start")
                                },
                                comment: {
                                    position: "relative",
                                    fontSize: s ? o(699422).J.UIRegular.mobile : o(699422).J.UIRegular.desktop
                                },
                                unfurlMoreWrapper: {
                                    color: o(632079).Tj.text.tertiary,
                                    fontWeight: "comment_unfurl" === e ? o(699422).Wy.medium : void 0,
                                    display: "block",
                                    marginBottom: -1.5,
                                    pointerEvents: "auto"
                                },
                                text: {
                                    cursor: "comment_unfurl" !== e ? "text" : void 0,
                                    lineHeight: "20px",
                                    paddingTop: 4,
                                    ...n ? {
                                        fontSize: 32,
                                        lineHeight: "32px"
                                    } : {}
                                },
                                authorRowContainer: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: i ? "flex-start" : "space-between"
                                },
                                unreadStatusDot: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginInlineEnd: 4,
                                    ...i && {
                                        marginInlineStart: 6
                                    }
                                }
                            }), [e, n, t, i, s])
                        }({
                            discussionLocation: l,
                            isAllEmojis: em,
                            showNewBar: !!e.showNewBar,
                            newStatusDotPosition: o(986939).A.isMobile,
                            isMobileRedesignEnabled: ep
                        }),
                        ef = (0, i.useMemo)(() => ({
                            type: "comment_match",
                            commentId: e.store.id
                        }), [e.store.id]),
                        eh = "comment_unfurl" !== l,
                        ev = eh && G && G.reactions.length > 0;
                    if ((0, i.useEffect)(() => {
                            I && ec.current && ev && ((0, o(341471).h)({
                                element: ec.current,
                                environment: v,
                                scrollerContext: J,
                                vertical: {
                                    reveal: "closest"
                                },
                                horizontal: void 0,
                                animate: !0
                            }), A(!1))
                        }, [v, J, I, ev]), !T || !G || !q) return null;
                    let ey = D.length > 0 && (0, p.jsx)("div", {
                        style: E.commentAttachment,
                        children: (0, p.jsx)(_, {
                            contentStores: D,
                            onRemoveContent: eo,
                            discussionFormat: (0, r().discussionLocationToDiscussionFormat)(l),
                            collapsed: g,
                            discussionHovered: e.hoveringDiscussion
                        })
                    });
                    return (0, p.jsxs)("div", {
                        ref: el,
                        onClick: e => y && e.stopPropagation(),
                        style: eg.container,
                        children: [e.showNewBar ? (0, p.jsx)(B, {}) : void 0, (0, p.jsxs)("div", {
                            style: eg.comment,
                            onFocus: N,
                            onBlur: U,
                            onMouseMove: W,
                            onMouseLeave: z,
                            children: [(0, p.jsxs)("div", {
                                style: eg.authorRowContainer,
                                children: [(0, p.jsx)(o(917563).Y, {
                                    createdTime: G.createdTime,
                                    lastEditedTime: G.lastEditedTime,
                                    location: l,
                                    isResolved: L,
                                    isSuggestionComment: e.isSuggestionComment,
                                    authorStore: q,
                                    commentStore: t,
                                    suppressMouse: g
                                }), e.showUnreadStatusDot ? (0, p.jsx)("div", {
                                    style: eg.unreadStatusDot,
                                    children: (0, p.jsx)(o(210882).m, {
                                        size: o(357491).jd
                                    })
                                }) : void 0]
                            }), c ? (0, p.jsx)("div", {
                                style: E.threadLine
                            }) : void 0, (0, p.jsxs)("div", {
                                style: E.commentElementsBelowUserRow,
                                children: [n || void 0, y ? (0, p.jsx)("div", {
                                    style: E.style0,
                                    children: (0, p.jsx)(R().V, {
                                        showAvatar: !1,
                                        parentStore: e.store,
                                        blockStore: u,
                                        onCancel: es,
                                        onSubmit: er,
                                        discussionInputStore: T,
                                        isEditingExistingComment: !0,
                                        isMobileSlideUpMenu: !0,
                                        shouldSaveUnsentComments: !1,
                                        commentStore: e.store,
                                        discussionFormat: (0, r().discussionLocationToDiscussionFormat)(l),
                                        canDrop: !0
                                    })
                                }) : void 0, eu && !y ? (0, p.jsxs)(o(4458).fI, {
                                    justifyContent: "space-between",
                                    children: [(0, p.jsx)(o(18079).A, {
                                        onMore: "comment_unfurl" === l ? void 0 : ea,
                                        moreElement: (0, p.jsxs)(o(428217).V, {
                                            disableUnderline: !0,
                                            style: eg.unfurlMoreWrapper,
                                            hoverColor: "blue",
                                            children: ["…", " ", (0, p.jsx)("span", {
                                                children: (0, p.jsx)(o(109939).sA, {
                                                    id: "comment.truncated.showMoreLabel",
                                                    defaultMessage: "more"
                                                })
                                            })]
                                        }),
                                        maxLines: Q,
                                        children: (0, p.jsx)(o(53373).A, {
                                            style: eg.text,
                                            store: Z,
                                            disabled: !0,
                                            disabledMentionTypes: {
                                                date: !0,
                                                property: !0
                                            },
                                            disableEquationInteraction: !0,
                                            inPageFind: ef
                                        })
                                    }), H && X ? (0, p.jsx)(o(517334).k, {
                                        style: E.style2
                                    }) : void 0]
                                }) : void 0, y || "comment_unfurl" === l ? !eu && (0, p.jsxs)(o(4458).fI, {
                                    alignItems: "center",
                                    children: [(0, p.jsx)("div", {
                                        style: E.style3,
                                        children: (0, p.jsx)(o(16275).I, {
                                            colorVariant: "secondary",
                                            icon: o(695317).o
                                        })
                                    }), (0, p.jsx)(o(109939).sA, {
                                        defaultMessage: "{numberOfAttachments, plural, one {{numberOfAttachments} attachment} other {{numberOfAttachments} attachments}}",
                                        values: {
                                            numberOfAttachments: D.length
                                        },
                                        id: "comment.unfurl.attachments.title"
                                    })]
                                }) : ey, ev ? (0, p.jsx)("div", {
                                    ref: ec,
                                    style: E.style4,
                                    children: (0, p.jsx)(m().Ay, {
                                        parentStore: e.store,
                                        discussionLocation: l
                                    })
                                }) : void 0]
                            }), "comment_unfurl" === l || y || H ? void 0 : (0, p.jsx)(f, {
                                store: e.store,
                                discussionStore: e.discussionStore,
                                blockStore: u,
                                discussionLocation: l,
                                visible: Y,
                                isFirstComment: $,
                                buttonPopupStore: O,
                                canShowReactions: eh,
                                handleEditComment: ei,
                                handleDeleteComment: et,
                                handleReaction: en,
                                showMarkAsRead: h
                            })]
                        })]
                    })
                };

            function F({
                discussionStore: e,
                commentStore: t
            }) {
                var n;
                if (!t.isDefined()) return !1;
                let i = null == (n = o(728372).AppStoreCurrentUserStore.state) ? void 0 : n.id,
                    s = o(490817).A.state.lastInteractionTimes[e.id];
                if (t.getCreatedById() === i) return !1;
                let r = function() {
                    if (!e.isDefined() || !i) return 0;
                    let {
                        pageVisitStore: t
                    } = o(728372).default.state, {
                        lastViewTime: n,
                        lastExitTime: s
                    } = t.state;
                    return s || n
                }();
                if (void 0 === r) return !1;
                let a = e.getCommentStoresSortedByCreatedTime().filter(e => e.getCreatedById() === i).reverse()[0],
                    l = t.getCreatedTime();
                return !l || !(a && l < a.getCreatedTime()) && (!s || !(l < s)) && l > r
            }
            o(18107), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(967357), o(672577), o(737550), o(632079).Tj.text.inversePrimary;
            let N = {
                helpIcon: {
                    color: o(632079).Tj.text.tertiary,
                    flexDirection: "row-reverse",
                    gap: 6,
                    width: 14,
                    alignItems: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                    pointerEvents: "auto"
                },
                text: {
                    maxWidth: 200
                }
            };

            function U(e) {
                let {
                    discussionLocation: t,
                    commentStore: n
                } = e, i = (0, o(682985).K8)(() => {
                    if (!n) return !1;
                    let e = n.getCreatedByPointer();
                    return !!e && e.id === o(268033).px.id
                }, [n]), s = (0, o(233633).C)({
                    type: "discussionLocation",
                    location: t
                }), r = (0, o(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "row",
                        gap: 6,
                        width: "100%",
                        color: o(632079).Tj.text.tertiary,
                        fontSize: o(986939).A.isMobile ? o(699422).J.UISmall.mobile : o(699422).J.UISmall.desktop,
                        paddingTop: o(42615).e4,
                        paddingInlineStart: o(42615).JC(t, s, "start") + o(42615).eQ - 8
                    }
                }), [t, s]);
                return i ? (0, p.jsxs)("div", {
                    style: r.container,
                    children: [(0, p.jsx)(o(16275).I, {
                        icon: o(143896).exclamationMarkTriangleFillSmallIcon,
                        size: "xs"
                    }), (0, p.jsx)(o(503473).j, {
                        style: N.text,
                        children: (0, p.jsx)(o(109939).sA, {
                            id: "aiCommentHeader.conflictingContent.label",
                            defaultMessage: "Notion AI found potential conflicts"
                        })
                    }), (0, p.jsx)(o(68774).N, {
                        href: "https://notion.notion.site/AI-Conflict-Detection-158efdeead058037b57efc2b77ad9c21",
                        external: !0,
                        style: N.helpIcon,
                        children: (0, p.jsx)(o(16275).I, {
                            icon: o(211052).questionMarkCircleSmallIcon,
                            size: "sm"
                        })
                    })]
                }) : null
            }
            o(430670);
            let W = {
                style0: {
                    fontWeight: o(699422).Wy.regular
                },
                content: {
                    position: "relative",
                    fontSize: 14,
                    width: "100%"
                },
                avatarsAndNames: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontWeight: o(699422).Wy.medium,
                    gap: 8
                },
                reactorNames: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                reactionElementsBelowUserRow: {
                    paddingInlineStart: o(42615).FB
                },
                reactionBarWrapper: {
                    marginTop: 8
                },
                statusDot: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: o(632079).Tj.blue.icon.accentPrimary
                }
            };

            function z(e) {
                let {
                    discussionStore: t,
                    discussionContext: n,
                    discussionLocation: s,
                    blockStore: a,
                    hoveringDiscussion: l,
                    showUnreadStatusDot: c = !1
                } = e, d = (0, o(109939).tz)(), [u, g] = (0, i.useState)(!1), f = (0, i.useCallback)(() => {
                    g(!0)
                }, []), h = (0, i.useCallback)(() => {
                    g(!1)
                }, []), v = (0, o(682985).uB)(void 0, o(510969).A), y = (0, o(682985).K8)(() => v.state.open, [v]), b = (0, o(682985).K8)(() => (0, o(974410).f)(a), [a]), x = (0, o(682985).K8)(() => {
                    let e = o(868249).L.getUserVisibleReactions(t),
                        n = e.flatMap(e => {
                            let t = e.getCreatedTime();
                            return e.getActorStores().map(e => ({
                                actor: e,
                                createdTime: t
                            }))
                        }),
                        i = (0, o(381453).hS)(n.sort((e, t) => t.createdTime - e.createdTime), e => e.actor.id);
                    return {
                        reactorNames: i.map(e => e.actor.getDisplayName(d)),
                        reactors: i.map(e => e.actor),
                        reactions: e
                    }
                }, [t, d]), S = u || l || y || ((null == x ? void 0 : x.reactions) ? ? []).length > 0, C = function({
                    discussionLocation: e
                }) {
                    return (0, o(960253).I)(() => ({
                        container: {
                            flexGrow: "comment_unfurl" === e ? 1 : void 0,
                            paddingTop: "comment_unfurl" === e ? o(42615).ds : o(42615).e4,
                            paddingBottom: o(42615).Wv
                        }
                    }), [e])
                }({
                    discussionLocation: s
                }), k = (0, i.useRef)(null), I = (0, o(533992).v3)().currentUser.id, A = (0, o(682985).K8)(() => {
                    var e;
                    let t = null == x || null == (e = x.reactors) ? void 0 : e.map(e => (0, o(935786).d5)(e).asActor).filter(o(722371).O9);
                    return (0, o(847871).b)({
                        intl: d,
                        currentUserId: I,
                        authors: t,
                        fontWeightForAuthorNames: "medium",
                        isCondensedFormat: !0
                    })
                }, [I, null == x ? void 0 : x.reactors, d]);
                if (!x) return null;
                let w = n || "updates_sidebar" === s,
                    M = x.reactors[0],
                    j = x.reactors[1];
                return (0, p.jsx)("div", {
                    ref: k,
                    style: C.container,
                    onMouseMove: f,
                    onMouseLeave: h,
                    children: (0, p.jsxs)("div", {
                        style: W.content,
                        children: [(0, p.jsxs)(o(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [(0, p.jsxs)("div", {
                                style: W.avatarsAndNames,
                                children: [x.reactors.length > 0 ? (0, p.jsxs)("div", {
                                    children: [M && j && b ? (0, p.jsx)(o(126177).v, {
                                        frontActorStore: M,
                                        backActorStore: j,
                                        spaceStore: b
                                    }) : void 0, M && !j ? (0, p.jsx)(o(10097).E, {
                                        authorStore: M,
                                        avatarSize: o(42615).eQ,
                                        hasTooltip: !0,
                                        avatarStyle: {}
                                    }, M.id) : void 0]
                                }) : void 0, (0, p.jsx)("span", {
                                    style: W.reactorNames,
                                    children: (0, p.jsx)(o(109939).sA, {
                                        id: "reactions.blockReaction",
                                        defaultMessage: "{reactors} <regular>reacted</regular>",
                                        values: {
                                            reactors: A,
                                            regular: e => (0, p.jsx)("span", {
                                                style: W.style0,
                                                children: e
                                            })
                                        }
                                    })
                                })]
                            }), c ? (0, p.jsx)(o(4458).fI, {
                                alignItems: "center",
                                marginInlineEnd: 4,
                                children: (0, p.jsx)("div", {
                                    style: W.statusDot
                                })
                            }) : void 0]
                        }), (0, p.jsxs)("div", {
                            style: W.reactionElementsBelowUserRow,
                            children: [w ? (0, p.jsx)(o(222121).A, {
                                format: (0, r().discussionLocationToDiscussionFormat)(s),
                                discussionLocation: s,
                                store: t,
                                blockStore: a,
                                onClick: e => e.stopPropagation()
                            }) : void 0, S ? (0, p.jsx)("div", {
                                style: W.reactionBarWrapper,
                                children: (0, p.jsx)(m().Ay, {
                                    parentStore: t,
                                    discussionLocation: s
                                })
                            }) : void 0]
                        })]
                    })
                })
            }
            let V = {
                    block_menu: "8px 16px 0px",
                    page_discussion: "8px 0px 0px",
                    updates_sidebar: "4px 16px 12px",
                    margin_comments: "8px 12px 6px",
                    comment_unfurl: "0",
                    feed_item_top_level_discussion: "8px 16px 0px",
                    new_discussions_sheet: "8px 12px 6px",
                    updates_menu_mentions_comments: "4px 16px 12px",
                    updates_menu_all_updates: "4px 16px 12px",
                    updates_menu_archive: "4px 16px 12px",
                    reply_menu_mentions_comments: "8px 16px 0px",
                    reply_menu_all_updates: "8px 16px 0px",
                    reply_menu_archive: "8px 16px 0px",
                    reply_menu_updates_sidebar: "8px 16px 0px",
                    ai_reject_all_suggestions: "0"
                },
                O = i.forwardRef(function(e, t) {
                    let n = (0, o(533992).v3)(),
                        {
                            format: i,
                            role: s,
                            showMoreCommentsButton: a,
                            onMoreCommentsClick: l,
                            inputVisible: c,
                            blockStore: d
                        } = e,
                        u = (0, o(270102).i)(d),
                        m = s && o(642157).h9(s) || u,
                        g = n.currentUser.isLoggedIn(),
                        f = (0, o(233633).C)({
                            type: "discussionFormat",
                            format: e.format
                        }),
                        h = (0, o(960253).I)(() => ({
                            container: {
                                position: "relative",
                                padding: 0,
                                ...i === r().DiscussionFormat.Page ? {
                                    marginInlineStart: 16,
                                    marginInlineEnd: 16
                                } : {}
                            },
                            discussionInputContainer: {
                                padding: V[e.discussionLocation],
                                ...f ? {
                                    paddingInlineStart: (0, o(42615).JC)(e.discussionLocation, f, "start"),
                                    paddingInlineEnd: (0, o(42615).JC)(e.discussionLocation, f, "end")
                                } : {}
                            }
                        }), [i, e.discussionLocation, f]);
                    return g && !m && (a || c) ? (0, p.jsxs)("div", {
                        style: h.container,
                        children: [a ? (0, p.jsx)(o(69138).d, {
                            enableIcon: !0,
                            onClick: l
                        }) : void 0, c ? (0, p.jsx)(R().V, {
                            autoFocus: !0,
                            showAvatar: !0,
                            containerStyle: h.discussionInputContainer,
                            parentStore: e.store,
                            blockStore: e.blockStore,
                            onCancel: e.onCancel,
                            onSubmit: e.onSubmit,
                            discussionInputStore: e.discussionInputStore,
                            isMobileSlideUpMenu: !1,
                            shouldSaveUnsentComments: !0,
                            onEditPreviousComment: e.onEditPreviousComment,
                            inReplyToDiscussionId: e.store.id,
                            discussionFormat: e.format,
                            showCtaButtons: e.showCtaButtons,
                            ref: t,
                            onFileUploaded: e.onFileUploaded
                        }) : void 0]
                    }) : null
                }),
                K = {
                    buttonHovered: {
                        background: o(632079).Tj.background.secondaryTranslucent
                    },
                    badge: {
                        marginInlineStart: 6,
                        marginInlineEnd: 6
                    },
                    style0: {
                        position: "relative"
                    }
                };

            function H(e) {
                let t = (0, o(233633).C)({
                        type: "discussionLocation",
                        location: e.discussionLocation
                    }),
                    n = (0, o(960253).I)(() => {
                        let n = t ? o(699422).J.UIRegular.mobile : o(699422).J.UIRegular.desktop,
                            i = o(42615).JC(e.discussionLocation, t, "start") + o(42615).eQ;
                        return {
                            moreCommentsWrapper: {
                                color: o(632079).Tj.text.tertiary,
                                fontSize: n,
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                paddingInlineStart: 8
                            },
                            button: {
                                borderRadius: 6,
                                fontSize: n,
                                color: o(632079).Tj.text.secondary,
                                justifyContent: "space-between",
                                padding: "14px 0",
                                margin: `0 0 0 ${i}px`,
                                width: `calc(100% - ${i}px - 16px)`
                            },
                            threadLine: {
                                position: "absolute",
                                backgroundColor: o(632079).Tj.border.secondary,
                                width: o(42615).jw,
                                height: "100%",
                                top: o(42615).e4 - o(42615).Yz,
                                insetInlineStart: o(42615).JC(e.discussionLocation, t, "start") + o(42615).im,
                                borderRadius: 2
                            }
                        }
                    }, [e.discussionLocation, t]);
                return e.count <= 0 ? null : (0, p.jsxs)("div", {
                    style: K.style0,
                    children: [(0, p.jsx)("div", {
                        style: n.threadLine
                    }), (0, p.jsx)(o(988022).p, {
                        colorPalette: "gray",
                        size: "xs",
                        style: n.button,
                        onClick: e.onClick,
                        hoveredStyle: K.buttonHovered,
                        children: (0, p.jsxs)("div", {
                            className: "discussion-show-all-button",
                            style: n.moreCommentsWrapper,
                            children: [(0, p.jsx)(o(109939).sA, {
                                defaultMessage: "Show {moreCommentsNumber, plural, one {{moreCommentsNumber} reply} other {{moreCommentsNumber} replies}}",
                                id: "discussion.showMoreCommentsSidebarButton.label",
                                values: {
                                    moreCommentsNumber: e.count
                                }
                            }), e.showNewBadge ? (0, p.jsx)(o(322662).J1, {
                                style: K.badge
                            }) : null]
                        })
                    }, "show")]
                })
            }
            let X = {
                container: {
                    marginTop: 2
                },
                label: {
                    color: o(632079).Tj.blue.text.tertiary,
                    fontSize: 14,
                    lineHeight: "18px"
                },
                labelDeleteColor: {
                    color: o(632079).Tj.text.tertiary
                },
                text: {
                    color: o(632079).Tj.blue.text.accentPrimary,
                    fontSize: 14,
                    lineHeight: 1.29
                },
                textDeleteColor: {
                    color: o(632079).Tj.text.secondary
                },
                suggestionContextItem: {
                    display: "block",
                    marginBottom: 4,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                },
                unfurlMoreWrapper: {
                    color: o(632079).Tj.text.tertiary,
                    fontWeight: o(699422).Wy.medium,
                    display: "block",
                    marginBottom: -1.5,
                    pointerEvents: "auto"
                }
            };

            function $(e) {
                let {
                    discussionStore: t
                } = e, n = (0, o(109939).tz)(), i = (0, o(682985).K8)(() => t.isSuggestionDiscussion(), [t]), s = (0, o(682985).K8)(() => {
                    let t = e.discussionStore.getContext();
                    return (t ? (0, o(353711).Qe)({
                        discussionContextData: t,
                        discussionId: e.discussionStore.id,
                        discussionType: (0, o(148337).o9)(e.discussionStore.getType()),
                        intl: n
                    }) : []) ? ? []
                }, [e.discussionStore, n]), r = (0, o(511791).RX)(n).title;
                return i && r && 0 !== s.length ? (0, p.jsx)("div", {
                    style: X.container,
                    children: (0, p.jsx)(o(18079).A, {
                        maxLines: e.collapsed ? 1 : void 0,
                        clampOverride: {
                            lineHeight: 1.29,
                            fontSize: 14
                        },
                        moreElement: (0, p.jsxs)(o(428217).V, {
                            disableUnderline: !0,
                            style: X.unfurlMoreWrapper,
                            hoverColor: "blue",
                            children: ["…", " ", (0, p.jsx)("span", {
                                children: (0, p.jsx)(o(109939).sA, {
                                    id: "suggestion.truncated.showMoreLabel",
                                    defaultMessage: "more"
                                })
                            })]
                        }),
                        children: s.map(({
                            label: e,
                            value: o,
                            shouldUseDeleteColor: n,
                            removeQuotationMarks: i
                        }, s) => (0, p.jsxs)("div", {
                            style: X.suggestionContextItem,
                            children: [(0, p.jsxs)("span", {
                                style: { ...X.label,
                                    ...n && X.labelDeleteColor
                                },
                                children: [e, ": "]
                            }), (0, p.jsxs)("span", {
                                style: { ...X.text,
                                    ...n && X.textDeleteColor
                                },
                                children: [i ? null : "“", (0, p.jsx)(Y, {
                                    value: o,
                                    discussionStore: t
                                }), i ? null : "”"]
                            })]
                        }, s))
                    })
                }) : null
            }

            function Y({
                value: e,
                discussionStore: t
            }) {
                let n = (0, o(533992).v3)(),
                    i = (0, o(960253).e)(),
                    {
                        value: s
                    } = (0, o(815048).fJ)(o(406921).V),
                    r = (0, o(682985).K8)(() => (0, o(536614).S5)({
                        environment: n,
                        textValue: {
                            value: e,
                            spaceId: t.pointer.spaceId
                        },
                        parentStore: t,
                        disableHover: !0,
                        disableStyleAnnotations: !0,
                        disableInsertedDeletedAnnotations: !0,
                        disableDateStyleAnnotations: !0,
                        disableSuggestionAnnotations: !0,
                        disabled: !0,
                        theme: o(632079).Tj,
                        themeMode: i,
                        emojiType: (0, o(591404).FN)(n),
                        katex: s,
                        formulaValueTypes: []
                    }), [n, e, t, s, i], {
                        silenceRerenderDefender: !0
                    });
                return (0, p.jsx)("span", {
                    children: r
                })
            }
            let J = {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: 500
                },
                G = {
                    position: "relative"
                },
                q = {
                    height: 8
                },
                Z = i.memo(function(e) {
                    let {
                        onDismiss: t
                    } = e, n = (0, i.useRef)(null), a = (0, o(109939).tz)(), l = (0, o(533992).v3)(), c = (0, o(682985).K8)(() => "suggestion" === e.store.getType(), [e.store]), d = (0, o(682985).K8)(() => e.store.getCommentStoresSortedByCreatedTime(), [e.store]), u = (0, o(682985).K8)(() => d.filter(e => e.isDefined()).filter(e => !!e.getAlive()), [d]), g = "page_discussion" === e.discussionLocation ? 3 : 5;
                    (0, i.useEffect)(() => {
                        u.length === g && C(!0)
                    }, [u, g]);
                    let f = (0, i.useRef)(e.discussionInputStore || new(o(478597)).A(l, e.store.pointer.spaceId)).current,
                        h = (0, o(682985).K8)(() => (0, r().inputIsEmpty)(f), [f]),
                        v = (0, o(682985).K8)(() => {
                            if ((0, o(335818).fc)(e.blockStore)) {
                                if ((0, o(335818).f1)(e.blockStore)) {
                                    let t = e.blockStore.getAssociatedCollectionStore();
                                    if (t) return !(0, o(607689).vW)(t)
                                }
                                return !0
                            }
                            return !1
                        }, [e.blockStore]),
                        y = (0, o(682985).K8)(() => e.store.getResolved(), [e.store]),
                        [b, x] = (0, i.useState)(!1),
                        [S, C] = (0, i.useState)(void 0 !== e.collapsed && !e.collapsed),
                        [k, I] = (0, i.useState)(!0),
                        A = (0, o(682985).uB)(void 0, o(593423).A),
                        w = (0, o(682985).K8)(() => A.state.clientRect, [A]),
                        M = e.format === r().DiscussionFormat.Sidebar,
                        j = e.format === r().DiscussionFormat.Margin,
                        T = e.format === r().DiscussionFormat.Menu,
                        D = (0, i.useRef)(null);
                    (0, o(336494).b)(o(115995).A, () => ({
                        isSidebarFormat: () => M,
                        isMarginFormat: () => j,
                        isMenuFormat: () => T,
                        getStore: () => e.store,
                        getInputStore: () => f,
                        getNode: () => D.current,
                        getMarginDiscussionScrollContainer: () => n.current
                    }), [M, j, e.store, f]);
                    let _ = (0, o(682985).K8)(() => {
                            if (M) return d.find(t => F({
                                discussionStore: e.store,
                                commentStore: t
                            }))
                        }, [M, e.store, d]),
                        L = (0, i.useRef)(_),
                        B = (0, o(682985).K8)(() => (0, o(47354).s)({
                            discussionStore: e.store,
                            navigableBlockStore: e.blockStore.getNavigableBlockStore()
                        }), [e.store, e.blockStore]),
                        R = (0, o(682985).K8)(() => {
                            var t, o;
                            if (!B) return;
                            let n = null == (t = e.store.getUserSeenRecordStore()) ? void 0 : t.getLastSeenAt();
                            return n ? null == (o = u.find(e => e.getCreatedTime() > n)) ? void 0 : o.id : null == _ ? void 0 : _.id
                        }, [_, u, e.store, B]),
                        E = (0, i.useCallback)(() => {
                            var t;
                            if (S || u.length <= g || "block_menu" === e.discussionLocation) return u;
                            if ("page_discussion" === e.discussionLocation) return o(381453).O6(u, 1);
                            let n = [e.showAllRepliesAfterTimestamp, null == (t = L.current) ? void 0 : t.getCreatedTime(), null == _ ? void 0 : _.getCreatedTime()].filter(o(722371).O9),
                                i = n.length > 0 ? Math.min(...n) : void 0;
                            if (!i) return o(381453).O6(u, 2); {
                                let e = u.filter(e => (e.getCreatedTime() || 0) > i),
                                    t = u.filter(e => (e.getCreatedTime() || 0) <= i);
                                return t.length <= 5 ? u : [...o(381453).O6(t, 2), ...e]
                            }
                        }, [u, _, g, e.discussionLocation, e.showAllRepliesAfterTimestamp, S]),
                        N = (0, o(682985).K8)(() => {
                            let t = E(),
                                n = new Set(t.map(e => e.id)),
                                i = u.filter(e => !n.has(e.id));
                            return {
                                commentStores: u,
                                commentsToShow: t,
                                commentsToCollapse: i,
                                reactionsToShow: o(868249).L.getUserVisibleReactions(e.store)
                            }
                        }, [u, E, e.store], {
                            equalityFn: o(381453).n4
                        }),
                        W = (0, i.useCallback)(() => {
                            if (!e.store.isDefined()) return;
                            let t = e.store.getContext();
                            if (!t) return;
                            let n = (0, o(353711).l8)({
                                discussionContextData: t,
                                discussionType: (0, o(148337).o9)(e.store.getType()),
                                discussionId: e.store.id,
                                intl: a
                            });
                            return s().JJ$(n, t => !s().iQL(t) || s().Orm(t) === e.store.id)
                        }, [e.store, a]),
                        V = (0, i.useRef)(null),
                        K = (0, i.useRef)(e.blockStore.clone()).current,
                        X = async ({
                            files: e
                        }) => {
                            V.current && await V.current.uploadFiles(e)
                        },
                        Y = (0, o(233633).C)({
                            type: "discussionFormat",
                            format: e.format
                        }),
                        Z = (0, o(960253).I)(() => ({
                            discussionWrapper: { ...e.format === r().DiscussionFormat.Page && {
                                    marginTop: 6 * (N.reactionsToShow.length > 0),
                                    marginInlineEnd: o(42615).Ql,
                                    marginInlineStart: o(42615).Ql,
                                    marginBottom: N.reactionsToShow.length > 0 ? 6 : 16,
                                    ..."feed_item_top_level_discussion" === e.discussionLocation && {
                                        marginInlineStart: -16,
                                        marginBottom: N.reactionsToShow.length > 0 ? 0 : 12
                                    }
                                },
                                ...e.format === r().DiscussionFormat.Menu && {
                                    padding: "6px 0 12px",
                                    marginInlineStart: Y ? 0 : -2,
                                    boxShadow: e.isFirst ? "none" : `0 -1px 0 ${o(632079).Tj.border.secondaryTranslucent}`,
                                    marginTop: +!e.isFirst
                                },
                                ...e.format === r().DiscussionFormat.Margin && {
                                    padding: "4px 0",
                                    borderRadius: 8
                                }
                            },
                            reactionBarWrapper: {
                                paddingInlineStart: 16,
                                paddingInlineEnd: 16,
                                ..."feed_item_top_level_discussion" === e.discussionLocation && {
                                    display: "flex",
                                    justifyContent: "space-between"
                                }
                            },
                            discussionContainer: { ...e.format === r().DiscussionFormat.Page && {
                                    borderRadius: 8
                                }
                            }
                        }), [N.reactionsToShow.length, e.discussionLocation, e.format, e.isFirst, Y]);
                    (0, i.useEffect)(() => {
                        var e;
                        void 0 !== (e = W()) && s().IcF(e).length > 0 && o(406921).V.load()
                    }, [W]);
                    let Q = (0, i.useCallback)(t => {
                            if (!o(986939).A.isMobile || !e.store.isDefined()) return;
                            t.stopPropagation(), t.preventDefault(), o(718106).W.setState({
                                open: !1
                            });
                            let n = o(381453).oE(o(240414).T.findSelectablesFromIds([e.store.getParentId()])),
                                i = null == n ? void 0 : n[0];
                            i && (0, o(840529).p)({
                                environment: l,
                                handle: i,
                                vertical: {
                                    reveal: "bottom"
                                },
                                horizontal: {
                                    reveal: "closest"
                                },
                                animate: !0
                            })
                        }, [e.store, l]),
                        ee = (0, i.useCallback)(e => {
                            j || (e.stopPropagation(), C(!0))
                        }, [j]),
                        et = (0, i.useMemo)(() => {
                            let {
                                commentStores: t,
                                commentsToShow: i,
                                commentsToCollapse: s
                            } = N;
                            if (j) {
                                let i = (0, r().lineClampForCommentCount)(t.length);
                                if (!e.collapsed) return (0, p.jsx)(o(126767).H, {
                                    style: J,
                                    ref: n,
                                    type: o(644154).A.Y,
                                    store: A,
                                    children: t.map((o, n) => {
                                        let s = c && 0 === n;
                                        return (0, p.jsx)(P, {
                                            store: o,
                                            discussionStore: e.store,
                                            blockStore: e.blockStore,
                                            hoveringDiscussion: b,
                                            discussionLocation: e.discussionLocation,
                                            showResolveButtonByDefaultIfPossible: e.showResolveButtonByDefaultIfPossible,
                                            maxLines: i,
                                            shouldShowThreadLine: n !== t.length - 1,
                                            discussionContext: s ? (0, p.jsx)($, {
                                                discussionStore: e.store,
                                                collapsed: !!e.collapsed
                                            }) : void 0,
                                            showNewBar: o.id === R && 0 !== n,
                                            isSuggestionComment: s,
                                            showUnreadStatusDot: 0 === n && B,
                                            showMarkAsRead: B
                                        }, o.id)
                                    })
                                });
                                let s = t[0] && (0, p.jsx)(P, {
                                        store: t[0],
                                        discussionStore: e.store,
                                        blockStore: e.blockStore,
                                        hoveringDiscussion: b,
                                        discussionLocation: e.discussionLocation,
                                        showResolveButtonByDefaultIfPossible: e.showResolveButtonByDefaultIfPossible,
                                        maxLines: i,
                                        collapsed: e.collapsed,
                                        shouldShowThreadLine: 1 !== t.length,
                                        discussionContext: c ? (0, p.jsx)($, {
                                            discussionStore: e.store,
                                            collapsed: !!e.collapsed
                                        }) : void 0,
                                        isSuggestionComment: c,
                                        showUnreadStatusDot: B,
                                        showMarkAsRead: B
                                    }, t[0].id),
                                    a = t.length > 1 && t[t.length - 1] && (0, p.jsx)(P, {
                                        store: t[t.length - 1],
                                        discussionStore: e.store,
                                        blockStore: e.blockStore,
                                        hoveringDiscussion: b,
                                        discussionLocation: e.discussionLocation,
                                        showResolveButtonByDefaultIfPossible: e.showResolveButtonByDefaultIfPossible,
                                        maxLines: i,
                                        collapsed: e.collapsed,
                                        shouldShowThreadLine: !1,
                                        showUnreadStatusDot: !1,
                                        showMarkAsRead: !1,
                                        showNewBar: t[t.length - 1].id === R
                                    }, t[t.length - 1].id),
                                    l = t.length - 2;
                                return (0, p.jsxs)(p.Fragment, {
                                    children: [s, (0, p.jsx)(H, {
                                        insetButton: !j,
                                        count: l,
                                        onClick: ee,
                                        discussionLocation: e.discussionLocation,
                                        showNewBadge: t.some((e, o) => e.id === R && 0 !== o && o !== t.length - 1)
                                    }), a]
                                })
                            }
                            let a = s.length > 0,
                                l = i.map((t, n) => {
                                    let s = c && 0 === n,
                                        l = 0 === n && !a,
                                        d = s ? (0, p.jsx)($, {
                                            discussionStore: e.store,
                                            collapsed: !!e.collapsed
                                        }) : l && (e.format === r().DiscussionFormat.Menu || e.format === r().DiscussionFormat.Sidebar) && (0, p.jsx)(o(222121).A, {
                                            format: e.format,
                                            discussionLocation: e.discussionLocation,
                                            store: e.store,
                                            blockStore: e.blockStore,
                                            onClick: Q
                                        }),
                                        u = "feed_item_top_level_discussion" === e.discussionLocation ? (0, r().lineClampForCommentCount)(i.length) : void 0;
                                    return (0, p.jsx)(P, {
                                        store: t,
                                        discussionStore: e.store,
                                        blockStore: e.blockStore,
                                        hoveringDiscussion: b,
                                        discussionLocation: e.discussionLocation,
                                        showResolveButtonByDefaultIfPossible: e.showResolveButtonByDefaultIfPossible,
                                        discussionContext: d,
                                        isSuggestionComment: s,
                                        showNewBar: t.id === R && !l,
                                        shouldShowThreadLine: n !== i.length - 1,
                                        maxLines: u,
                                        showUnreadStatusDot: l && B,
                                        showMarkAsRead: B
                                    }, t.id)
                                }),
                                d = c ? (0, p.jsx)($, {
                                    discussionStore: e.store,
                                    collapsed: !!e.collapsed
                                }) : (e.format === r().DiscussionFormat.Menu || e.format === r().DiscussionFormat.Sidebar) && (0, p.jsx)(o(222121).A, {
                                    format: e.format,
                                    discussionLocation: e.discussionLocation,
                                    store: e.store,
                                    blockStore: e.blockStore,
                                    onClick: Q
                                });
                            return (0, p.jsxs)("div", {
                                style: { ...G,
                                    ...Z.discussionContainer
                                },
                                children: [a ? (0, p.jsx)(P, {
                                    store: t[0],
                                    discussionStore: e.store,
                                    blockStore: e.blockStore,
                                    hoveringDiscussion: b,
                                    discussionLocation: e.discussionLocation,
                                    showResolveButtonByDefaultIfPossible: e.showResolveButtonByDefaultIfPossible,
                                    discussionContext: d,
                                    shouldShowThreadLine: 1 !== t.length,
                                    isSuggestionComment: c,
                                    collapsed: e.collapsed,
                                    maxLines: "feed_item_top_level_discussion" === e.discussionLocation && e.collapsed ? (0, r().lineClampForCommentCount)(t.length) : void 0,
                                    showUnreadStatusDot: B,
                                    showMarkAsRead: B
                                }, t[0].id) : void 0, (0, p.jsx)(H, {
                                    insetButton: !j,
                                    count: s.length - 1,
                                    showNewBadge: s.some((e, o) => e.id === R && 0 !== o && o !== t.length - 1),
                                    onClick: ee,
                                    discussionLocation: e.discussionLocation
                                }), l]
                            })
                        }, [N, j, c, e.store, e.collapsed, e.format, e.discussionLocation, e.blockStore, e.showResolveButtonByDefaultIfPossible, Q, Z.discussionContainer, b, B, ee, R, A]),
                        eo = (0, o(682985).K8)(() => e.blockStore.getRole(), [e.blockStore]),
                        [en, ei] = (0, i.useState)(!0);
                    (0, i.useEffect)(() => {
                        var e;
                        let t = null == (e = n.current) ? void 0 : e.getNode();
                        if (t && w) {
                            function i() {
                                t && ei(50 > Math.abs((0, o(81422).W)(t)))
                            }
                            return i(), t.addEventListener("scroll", i), () => t.removeEventListener("scroll", i)
                        }
                    }, [w, n]);
                    let es = k && !e.collapsed && j && w && !en,
                        er = (0, i.useCallback)(() => {
                            let e = o(240414).T.findSelectableFromStore(K);
                            e && (0, o(840529).p)({
                                environment: l,
                                handle: e,
                                vertical: {
                                    reveal: "bottom"
                                },
                                horizontal: {
                                    reveal: "closest"
                                },
                                animate: !0
                            })
                        }, [K, l]),
                        ea = (0, i.useCallback)(() => {
                            f.reset()
                        }, [f]),
                        el = (0, i.useCallback)(() => {
                            let t = l.currentUser.id;
                            if (!t) return;
                            let n = d.filter(e => e.getCreatedById() === t),
                                i = n.at(-1);
                            if (!i || c && 1 === n.length) return;
                            let s = o(74292).A.find(t => t.commentId === i.id && t.discussionLocation === e.discussionLocation);
                            s && ((0, o(525779).clear)({
                                environment: l
                            }), s.edit())
                        }, [d, e.discussionLocation, c, l]),
                        ec = (0, i.useCallback)(async () => {
                            if ((0, r().hasCommentChanged)(f)) {
                                let {
                                    accept: e
                                } = await o(647095).Gh({
                                    message: (0, p.jsx)(o(109939).sA, {
                                        defaultMessage: "Do you want to discard this reply?",
                                        id: "discussion.confirmDialog.discardReply.prompt"
                                    }),
                                    acceptLabel: (0, p.jsx)(o(109939).sA, {
                                        defaultMessage: "Discard",
                                        id: "discussion.confirmDialog.discardReplyButton.label"
                                    })
                                });
                                e ? (ea(), t && t()) : (await o(374176).default.afterNextFlush(), (0, o(739204).z)({
                                    store: f.state.textStore
                                }))
                            } else ea(), t && t()
                        }, [t, f, ea]),
                        ed = (0, i.useCallback)(() => {
                            o(374176).default.afterNextFlush(() => {
                                var e;
                                let t = null == (e = n.current) ? void 0 : e.getNode();
                                t && (0, o(661767).V)({
                                    element: t,
                                    environment: l,
                                    options: {
                                        top: t.scrollHeight,
                                        behavior: "smooth"
                                    }
                                })
                            })
                        }, [n, l]),
                        eu = o(381453).sg(() => {
                            setTimeout(() => I(!0), 50)
                        }, 50),
                        em = (0, i.useCallback)(async () => {
                            I(!1);
                            let t = e.store.pointer.spaceId;
                            (0, o(377796).createAndCommit)({
                                userAction: "Discussion.handleSubmitReply",
                                environment: l,
                                canUndo: !0,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                perform: t => {
                                    o(554067).lV({
                                        environment: l,
                                        discussionStore: e.store,
                                        textValue: f.state.textStore.getValue() || [],
                                        transaction: t,
                                        discussionLocation: e.discussionLocation,
                                        files: f.state.files,
                                        property_id: e.store.getPropertyId(),
                                        blockStore: e.blockStore
                                    }), (0, o(737146).U)({
                                        transaction: t,
                                        discussionStore: e.store
                                    })
                                }
                            }), ea(), (0, o(525779).clear)({
                                environment: l
                            }), ed(), eu(), o(986939).A.isMobile || (await o(374176).default.afterNextFlush(), (0, o(940763).e)({
                                store: f.state.textStore
                            }))
                        }, [f, eu, e.blockStore, e.store, e.discussionLocation, ed, l, ea]),
                        ep = (0, i.useCallback)(() => {
                            o(395364).A.state || x(!0)
                        }, []),
                        eg = (0, i.useCallback)(() => {
                            x(!1)
                        }, []);
                    return 0 === N.commentsToShow.length && N.reactionsToShow.length > 0 || "feed_item_top_level_discussion" === e.discussionLocation && 0 === N.commentsToShow.length && N.reactionsToShow.length > 0 ? (0, p.jsxs)("div", {
                        ref: D,
                        style: { ...Z.discussionWrapper,
                            ...Z.reactionBarWrapper
                        },
                        onMouseMove: ep,
                        onMouseLeave: eg,
                        children: [e.format === r().DiscussionFormat.Menu || e.format === r().DiscussionFormat.Sidebar ? (0, p.jsx)(z, {
                            discussionStore: e.store,
                            blockStore: e.blockStore,
                            discussionLocation: e.discussionLocation,
                            hoveringDiscussion: b,
                            discussionContext: (0, p.jsx)(o(222121).A, {
                                format: e.format,
                                discussionLocation: e.discussionLocation,
                                store: e.store,
                                blockStore: e.blockStore,
                                onClick: Q
                            })
                        }) : (0, p.jsx)(m().tx, {
                            focused: !0,
                            disableShadow: !0,
                            parentStore: e.store,
                            discussionLocation: e.discussionLocation
                        }), "feed_item_top_level_discussion" === e.discussionLocation && e.pageVisitStore && e.presenceStore ? (0, p.jsx)(o(616922).hJ, {
                            pageVisitStore: e.pageVisitStore,
                            presenceStore: e.presenceStore,
                            rootStore: e.blockStore,
                            maxUsers: 5,
                            isShowingInFeed: !0
                        }) : void 0]
                    }) : (0, p.jsx)(o(611752).Ay, {
                        store: K,
                        analyticsName: "discussion",
                        canNativeDropOnto: !0,
                        onNativeDrop: X,
                        keepTextSelectionOnDrop: !0,
                        shouldShowDropZone: !0,
                        children: (0, p.jsxs)("div", {
                            ref: D,
                            style: Z.discussionWrapper,
                            onMouseMove: ep,
                            onMouseLeave: eg,
                            dir: (0, o(619157).A1)() ? "rtl" : "ltr",
                            children: [e.collapsed ? void 0 : (0, p.jsx)(U, {
                                commentStore: d[0],
                                discussionLocation: e.discussionLocation
                            }), et, y ? (0, p.jsx)("div", {
                                style: q
                            }) : (0, p.jsx)(O, {
                                ref: V,
                                showMoreCommentsButton: !!es,
                                onMoreCommentsClick: ed,
                                inputVisible: !v && (!e.collapsed || !h || "feed_item_top_level_discussion" === e.discussionLocation),
                                store: e.store,
                                blockStore: K,
                                format: e.format,
                                discussionInputStore: f,
                                discussionLocation: e.discussionLocation,
                                onCancel: ec,
                                onSubmit: em,
                                onEditPreviousComment: el,
                                showCtaButtons: !!j || void 0,
                                onFileUploaded: er,
                                role: eo
                            })]
                        })
                    })
                });
            var Q = () => o(221131);
            let ee = (0, o(109939).YK)({
                    commentsAriaLabel: {
                        defaultMessage: "{count, plural, one {1 comment} other {{count} comments}}",
                        id: "comments.components.discussionindicator.commentAriaLabel"
                    },
                    suggestionsAriaLabel: {
                        defaultMessage: "{count, plural, one {1 suggestion} other {{count} suggestions}}",
                        id: "comments.components.discussionindicator.suggestionAriaLabel"
                    },
                    reactionsAriaLabel: {
                        defaultMessage: "{count, plural, one {1 reaction} other {{count} reactions}}",
                        id: "comments.components.discussionindicator.reactionsAriaLabel"
                    }
                }),
                et = i.memo(function(e) {
                    let t = (0, o(109939).tz)(),
                        {
                            store: n,
                            propertyId: i,
                            style: s
                        } = e,
                        {
                            showIndicator: r,
                            formattedReactionCount: a,
                            onlySuggestions: l,
                            icon: c,
                            showReactionsIcon: d,
                            onlyHasDraftIndicator: u,
                            formattedCommentCount: m,
                            handleClick: g,
                            discussionIsSelected: f,
                            commentsCount: h,
                            shouldShowDraftIndicator: v
                        } = (0, o(340958).A)({
                            store: n,
                            recursivelyLoadAllDiscussions: !1,
                            onlyCountBlockLevelDiscussions: !1,
                            propertyId: i
                        }),
                        y = (0, o(533992).v3)(),
                        b = (0, o(682985).K8)(() => (0, o(832122).m)(y), [y]),
                        x = (0, o(682985).K8)(() => (0, o(424332).dC)(y, n), [y, n]),
                        {
                            isPropertyInPageDetails: S
                        } = (0, o(287753)._1)({
                            store: n,
                            propertyId: i
                        });
                    return !r || !S && (b || x) ? null : (0, p.jsxs)(o(4458).fI, {
                        style: s,
                        children: [h > 0 || u ? (0, p.jsx)(o(487769).M, {
                            icon: c,
                            countLabel: m,
                            ariaLabel: l ? t.formatMessage(ee.suggestionsAriaLabel, {
                                count: m
                            }) : t.formatMessage(ee.commentsAriaLabel, {
                                count: m
                            }),
                            onClick: g,
                            indicatorStatus: v ? "draft" : void 0,
                            isSelected: f
                        }) : void 0, d ? (0, p.jsx)(o(487769).M, {
                            icon: o(489784).emojiFaceSmallIcon,
                            countLabel: a,
                            ariaLabel: t.formatMessage(ee.reactionsAriaLabel, {
                                count: a
                            }),
                            onClick: g
                        }) : void 0]
                    })
                }),
                eo = {
                    lastEditedTime: {
                        marginTop: 1,
                        marginInlineEnd: 0,
                        marginBottom: 0,
                        marginInlineStart: 0,
                        whiteSpace: "normal",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: o(632079).Tj.text.tertiary,
                        fontSize: 12,
                        lineHeight: "15px"
                    },
                    commentAuthorAvatarStyle: {
                        borderRadius: 20,
                        position: "relative",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        width: 24,
                        height: 24,
                        marginInlineEnd: -6
                    },
                    secondaryLabel: {
                        fontSize: o(699422).J.UISmall.desktop,
                        whiteSpace: "normal",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        lineHeight: "21px",
                        marginInlineStart: 0,
                        marginTop: 0,
                        color: o(632079).Tj.text.tertiary
                    },
                    unreadStatusDot: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineEnd: 4,
                        marginInlineStart: "auto"
                    }
                };

            function en({
                discussionData: {
                    groupedDiscussionsData: e,
                    newDiscussionData: t,
                    id: n
                },
                onClick: s
            }) {
                let [r, a] = (0, i.useState)(!1), l = (0, o(533992).v3)(), c = l.currentUser.id, d = (0, i.useCallback)(() => {
                    a(!0)
                }, []), u = (0, i.useCallback)(() => {
                    a(!1)
                }, []), m = (0, i.useCallback)(async n => {
                    if (t) {
                        let e = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                        o(827862).A.setActiveWithSource("margin_comments"), await (0, o(758275).x)({
                            currentBlockStore: e,
                            discussionInputStore: t.discussionInputStore,
                            environment: l
                        })
                    } else if (e.length > 0) {
                        let t = e[0].discussionStore;
                        await s(n, t)
                    }
                }, [t, e, null == t ? void 0 : t.discussionInputStore, l, s]), {
                    commentStores: g,
                    reactionStores: f
                } = (0, o(682985).K8)(() => e ? {
                    commentStores: e.flatMap(e => e.discussionStore.getCommentStoresSortedByCreatedTime()),
                    reactionStores: e.flatMap(e => o(868249).L.getUserVisibleReactions(e.discussionStore))
                } : {
                    commentStores: [],
                    reactionStores: []
                }, [e]), h = (0, o(682985).K8)(() => {
                    let n;
                    if (t && (n = t.parentBlockStore), e.length > 0 && (n = e[0].parentBlockStore), n) return Array.from(new Set([...g.map(e => e.getCreatedById()).filter(o(722371).O9), ...f.map(e => e.getActorPointers().map(e => e.id)).flat().filter(o(722371).O9), ...t && c ? [c] : []])).map(e => o(807825).L.createChildStore(n, {
                        table: o(832375).oo9,
                        id: e
                    })).slice(0, 5)
                }, [e, t, g, f, c, null == t ? void 0 : t.parentBlockStore]), v = (0, o(682985).K8)(() => Math.max(...g.map(e => e.getLastEditedTime()), ...f.map(e => e.getCreatedTime())), [g, f]), y = (0, o(682985).K8)(() => e.map(e => e.discussionStore).some(e => {
                    var t;
                    return (0, o(47354).s)({
                        discussionStore: e,
                        navigableBlockStore: null == (t = e.getParentStore()) ? void 0 : t.getNavigableBlockStore()
                    })
                }), [e]), b = (0, o(960253).I)(() => ({
                    discussion: {
                        background: r ? o(632079).Tj.hoveredMarginDiscussionBackground : o(632079).Tj.background.primary,
                        width: o(424332).JC,
                        display: "flex",
                        cursor: "pointer",
                        border: `1px solid ${o(632079).Tj.border.secondary}`,
                        borderRadius: 10,
                        padding: "12px",
                        alignItems: "center",
                        gap: 6
                    }
                }), [r]), x = (0, p.jsx)("div", {
                    style: eo.secondaryLabel,
                    children: (0, p.jsx)(o(109939).sA, {
                        defaultMessage: "Draft",
                        id: "marginComments.collapsed.draft.label"
                    })
                }), S = (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(o(4458).fI, {
                        justifyContent: "center",
                        alignItems: "center",
                        marginInlineStart: 0,
                        children: (0, p.jsx)(o(16275).I, {
                            icon: o(939434).w,
                            size: "xxs",
                            colorVariant: "tertiary"
                        })
                    }), t ? x : (0, p.jsx)("div", {
                        style: eo.secondaryLabel,
                        children: (0, p.jsx)(o(109939).sA, {
                            defaultMessage: "Expand",
                            id: "marginComments.collapsed.expand.label"
                        })
                    })]
                }), C = t ? x : v && (0, p.jsx)(o(324489).V, {
                    isSmall: !0,
                    isSecondaryColor: !0,
                    isMultiline: !0,
                    style: eo.lastEditedTime,
                    children: (0, p.jsx)(o(596955).A, {
                        text: (0, o(799843).nl)(v, {
                            useUltraCompactFormat: !0
                        }),
                        tooltipText: (0, o(799843).x$)(v),
                        icon: o(428602).Y
                    })
                });
                return (0, p.jsxs)("div", {
                    style: b.discussion,
                    onMouseEnter: d,
                    onMouseLeave: u,
                    onClick: m,
                    className: o(828432).OO1,
                    children: [(0, p.jsx)(o(4458).fI, {
                        justifyContent: "center",
                        alignItems: "center",
                        marginInlineEnd: 8,
                        reverse: !0,
                        children: null == h ? void 0 : h.map(e => (0, p.jsx)(o(10097).E, {
                            authorStore: e,
                            avatarSize: 24,
                            avatarStyle: eo.commentAuthorAvatarStyle
                        }, e.id))
                    }), (0, p.jsx)(es, {
                        reactionCount: f.length,
                        commentCount: g.length + +!!t
                    }), r ? S : C, y ? (0, p.jsx)("div", {
                        style: eo.unreadStatusDot,
                        children: (0, p.jsx)(o(210882).m, {
                            size: o(357491).jd
                        })
                    }) : void 0]
                })
            }
            let ei = {
                commentCount: {
                    fontSize: 14,
                    whiteSpace: "normal",
                    marginInlineStart: 0,
                    color: o(632079).Tj.text.primary,
                    fontWeight: o(699422).Wy.medium,
                    lineHeight: "18px"
                },
                textPlaceholder: {
                    background: o(632079).Tj.background.tertiaryTranslucent,
                    height: 14,
                    width: 81,
                    borderRadius: 4,
                    marginInlineStart: 4
                }
            };

            function es(e) {
                return e.commentCount > 0 ? (0, p.jsx)("div", {
                    style: ei.commentCount,
                    children: (0, p.jsx)(o(109939).sA, {
                        defaultMessage: "{numComments, plural, one {{numComments} comment} other {{numComments} comments}}",
                        id: "marginComments.collapsed.numComments.count",
                        values: {
                            numComments: e.commentCount
                        }
                    })
                }) : e.reactionCount > 0 ? (0, p.jsx)("div", {
                    style: ei.commentCount,
                    children: (0, p.jsx)(o(109939).sA, {
                        defaultMessage: "{numReactions, plural, one {{numReactions} reaction} other {{numReactions} reactions}}",
                        id: "marginComments.collapsed.numReactions.count",
                        values: {
                            numReactions: e.reactionCount
                        }
                    })
                }) : (0, p.jsx)("div", {
                    style: ei.textPlaceholder
                })
            }

            function er({
                discussionData: {
                    parentBlockStore: e,
                    discussionInputStore: t
                },
                isVisible: n
            }) {
                let s = (0, i.useRef)(null),
                    a = (0, o(533992).v3)(),
                    l = (0, i.useCallback)(async () => {
                        let e = await o(864850).T.formulas.load();
                        o(22229).i5({
                            environment: a,
                            allowActionsWhileCommenting: !0,
                            formulasModule: e
                        })
                    }, [a]),
                    c = (0, o(682985).K8)(() => t.isEmpty(), [t]),
                    d = (0, i.useCallback)(() => {
                        o(827862).A.setActiveWithSource("margin_comments")
                    }, []),
                    u = (0, i.useCallback)(() => {
                        o(827862).A.resetActiveSource("margin_comments")
                    }, []),
                    m = (0, i.useCallback)(() => {
                        c && o(332190).A.reset(), o(827862).A.resetEditorActiveSources()
                    }, [c]),
                    g = (0, i.useCallback)(() => {
                        o(827862).A.setHoverWithSource("margin_comments")
                    }, []),
                    f = (0, i.useCallback)(() => {
                        o(827862).A.resetHoverSource("margin_comments")
                    }, []),
                    h = (0, i.useMemo)(() => [`.${o(545028).hq}`], []),
                    v = (0, o(682985).K8)(() => o(827862).A.state.isActivelyComposing, []),
                    y = (0, o(682985).K8)(() => o(827862).A.state.isHovered && !o(827862).A.state.isActivelyComposing, []),
                    b = !!(v || c);
                (0, o(251454).L)({
                    active: n && b,
                    closeHandler: m,
                    ref: s,
                    excludedSelectors: h,
                    ignoreKeydown: !0
                });
                let x = (0, o(960253).I)(() => ({
                    discussion: {
                        borderRadius: 10,
                        ...v ? {
                            boxShadow: o(632079).Tj.shadow.outline.md
                        } : {
                            border: `1px solid ${o(632079).Tj.border.secondaryTranslucent}`
                        },
                        width: o(424332).JC,
                        background: o(632079).Tj.selectedMarginDiscussionBackground,
                        ...{
                            willChange: "transform",
                            transition: "transform 200ms ease",
                            transform: v ? "translateX(calc(var(--direction, 1) * -20px))" : y ? "translateX(calc(var(--direction, 1) * -5px))" : void 0
                        }
                    },
                    discussionInputContainer: {
                        borderRadius: 6,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 4,
                        paddingInlineStart: 12,
                        ...{
                            backgroundColor: y ? o(632079).Tj.hoveredMarginDiscussionBackground : void 0
                        }
                    }
                }), [v, y]);
                return (0, p.jsx)("div", {
                    style: x.discussion,
                    ref: s,
                    className: o(828432).OO1,
                    onMouseEnter: g,
                    onMouseLeave: f,
                    children: (0, p.jsx)(R().V, {
                        parentStore: e,
                        discussionInputStore: t,
                        shouldSaveUnsentComments: !1,
                        isMobileSlideUpMenu: !1,
                        discussionFormat: r().DiscussionFormat.Margin,
                        onSubmit: l,
                        onCancel: m,
                        isNewComment: !0,
                        blockStore: e,
                        canDrop: !0,
                        showAvatar: !1,
                        containerStyle: x.discussionInputContainer,
                        showCtaButtons: !0,
                        onFocus: d,
                        onBlur: u
                    })
                })
            }
            let ea = {
                    style0: {
                        width: o(424332).JC
                    }
                },
                el = i.memo(function({
                    discussionData: {
                        discussionStore: e,
                        parentBlockStore: t
                    },
                    timeMounted: n,
                    onClick: s,
                    isVisible: a,
                    isDiscussionSelected: l,
                    isDiscussionHovered: c
                }) {
                    let d = (0, i.useRef)(null),
                        u = (0, o(533992).v3)(),
                        [g, f] = (0, i.useState)(() => new(o(478597)).A(u, e.pointer.spaceId)),
                        h = (0, o(83208).X)("block_reactions"),
                        v = e.id,
                        y = (0, i.useRef)(void 0),
                        [b, x] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => {
                        l && (y.current = (0, o(47354).s)({
                            discussionStore: e,
                            navigableBlockStore: t.getNavigableBlockStore()
                        }))
                    }, [e, l, t]);
                    let S = (0, i.useCallback)(() => {
                        x(!0);
                        let e = setTimeout(() => {
                            x(!1)
                        }, 750);
                        return () => clearTimeout(e)
                    }, []);
                    (0, i.useEffect)(() => {
                        let e = d.current;
                        if (e) return e.addEventListener("flash-halo", S), () => {
                            e.removeEventListener("flash-halo", S)
                        }
                    }, [S]);
                    let C = (0, o(682985).K8)(() => e.getCommentStores().length > 0, [e]),
                        k = (0, o(682985).K8)(() => e.getReactionStores().length > 0, [e]),
                        I = (0, i.useMemo)(() => [`.${(0,o(762507).wV)({discussionId:v})}`, `.${o(545028).hq}`, `.${o(828432).OO1}`], [v]),
                        A = (0, i.useCallback)(async () => {
                            let t = o(74292).A.find(e => e.isEditing());
                            (!t || await t.handleCancelEdit()) && (y.current && (0, o(737146).X)({
                                environment: u,
                                discussionStores: [e]
                            }), o(821243).xl())
                        }, [e, u]);
                    (0, o(251454).L)({
                        active: a && l,
                        closeHandler: A,
                        ref: d,
                        excludedSelectors: I,
                        ignoreKeydown: !0
                    });
                    let w = (0, i.useCallback)(async t => {
                            if (!l) {
                                var n;
                                o(65255).E9(u, {
                                    discussion_id: e.id,
                                    discussion_type: e.getType(),
                                    from: "margin_comments",
                                    parent_block_id: e.getParentId(),
                                    parent_collection_id: null == (n = e.getParentStore()) ? void 0 : n.getParentCollectionIdUpToTwoLevels()
                                }), await s(t, e)
                            }
                        }, [s, e, l, u]),
                        M = (0, o(960253).I)(() => ({
                            discussion: {
                                border: l ? void 0 : `1px solid ${o(632079).Tj.border.secondaryTranslucent}`,
                                borderRadius: 10,
                                padding: l ? "1px" : void 0,
                                background: b ? "rgba(35, 131, 226, 0.14)" : l ? o(632079).Tj.selectedMarginDiscussionBackground : c ? o(632079).Tj.hoveredMarginDiscussionBackground : o(632079).Tj.background.primary,
                                boxShadow: l ? o(632079).Tj.shadow.outline.md : void 0,
                                width: o(424332).JC,
                                cursor: l ? void 0 : "pointer",
                                transition: "background-color 200ms ease"
                            },
                            wrapper: {
                                willChange: "transform",
                                transition: "transform 200ms ease",
                                transform: l ? "translateX(calc(var(--direction, 1) * -20px))" : c ? "translateX(calc(var(--direction, 1) * -5px))" : void 0
                            }
                        }), [c, l, b]);
                    return (0, p.jsxs)("div", {
                        className: o(828432).OO1,
                        ref: d,
                        style: M.wrapper,
                        onClick: w,
                        children: [k && h ? (0, p.jsx)("div", {
                            style: ea.style0,
                            children: (0, p.jsx)(m().tx, {
                                focused: l,
                                parentStore: e,
                                discussionLocation: "margin_comments"
                            })
                        }) : void 0, C ? (0, p.jsx)("div", {
                            style: M.discussion,
                            children: (0, p.jsx)(Z, {
                                store: e,
                                blockStore: t,
                                format: r().DiscussionFormat.Margin,
                                isFirst: !1,
                                isOnly: !1,
                                showResolveButtonByDefaultIfPossible: !1,
                                discussionLocation: "margin_comments",
                                showAllRepliesAfterTimestamp: n,
                                discussionInputStore: g,
                                collapsed: !l
                            })
                        }) : void 0]
                    })
                }),
                ec = i.memo(function(e) {
                    let t, {
                            discussionData: n,
                            isLastItem: s,
                            isDiscussionSelected: r,
                            discussionItemElementMap: a
                        } = e,
                        l = (0, o(682985).K8)(() => !matchMedia("(prefers-reduced-motion: reduce)").matches, []),
                        c = (0, o(960253).I)(() => {
                            let e = l ? "opacity 200ms ease-in-out, top 350ms ease" : "opacity 200ms ease-in-out";
                            return {
                                discussionContainer: {
                                    transition: n.hide ? void 0 : e,
                                    top: n.offsetTop,
                                    position: "absolute",
                                    paddingBottom: s ? o(424332).t_ : o(424332).kH,
                                    zIndex: r ? 1 : void 0,
                                    opacity: +!n.hide,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    pointerEvents: "auto"
                                }
                            }
                        }, [n.hide, n.offsetTop, r, s, l]),
                        d = n.type,
                        u = (0, o(533992).v3)(),
                        m = (0, o(682985).K8)(() => (0, o(424332).$N)(u, n.parentBlockStore), [u, n.parentBlockStore]),
                        g = (0, i.useCallback)(() => {
                            o(350175).A.setState({
                                source: "margin_comments",
                                discussionIds: [n.id]
                            })
                        }, [n.id]),
                        f = (0, i.useCallback)(() => {
                            o(350175).A.setState({
                                discussionIds: []
                            })
                        }, []),
                        h = (0, i.useCallback)(e => {
                            a.set(n.id, e)
                        }, [n.id, a]);
                    return m ? "existing" === d ? t = (0, p.jsx)(el, { ...e,
                        discussionData: n
                    }) : "new" === d ? t = (0, p.jsx)(er, { ...e,
                        discussionData: n
                    }) : "grouped" === d ? t = (0, p.jsx)(en, { ...e,
                        discussionData: n
                    }) : (0, o(722371).HB)(d) : t = null, (0, p.jsx)("div", {
                        style: c.discussionContainer,
                        onMouseEnter: g,
                        onMouseLeave: f,
                        ref: h,
                        children: t
                    })
                }),
                ed = `.${o(605351).iU}, .${o(605351).F0}, .${o(605351).te}`,
                eu = i.memo(function({
                    pageBlockStore: e,
                    timeMounted: t,
                    isVisible: n,
                    animating: s,
                    pageViewBlockAccessor: r,
                    width: a,
                    context: l
                }) {
                    let c = (0, o(533992).v3)(),
                        d = (0, o(533992).Y0)(),
                        u = (0, i.useRef)(null),
                        m = (0, i.useRef)(new Map),
                        g = (0, i.useRef)(new Map),
                        f = (0, o(682985).K8)(() => o(350175).A.getFirstSelectedDiscussionId(), []),
                        h = (0, i.useCallback)(async (t, n) => {
                            var i;
                            (0, o(453734).Z)() || t.target instanceof Element && t.target.closest(ed) || await o(554067).DZ({
                                discussionStore: n,
                                currentBlockStore: e,
                                environment: c,
                                analyticsFrom: "margin_comments",
                                currentEl: u.current,
                                animateScroll: !0,
                                discussionReadStatus: (0, o(47354).g)({
                                    discussionStore: n,
                                    navigableBlockStore: null == (i = n.getParentStore()) ? void 0 : i.getNavigableBlockStore()
                                })
                            })
                        }, [e, c]),
                        [v, y] = (0, i.useState)({
                            data: [],
                            hasNewDiscussion: !1,
                            selectedDiscussion: void 0
                        }),
                        [b, x] = (0, i.useState)(!1),
                        {
                            WindowSizeStore: S
                        } = c,
                        C = o(801113).ek(c.device.isElectronMac),
                        k = (0, o(682985).K8)(() => !matchMedia("(prefers-reduced-motion: reduce)").matches, []);
                    (0, i.useEffect)(() => {
                        if (!n) return;
                        let t = new(o(345426)).ComputedStore(() => ({
                                selectableRectMap: o(448475).default.state.selectableRectMap,
                                pageContentStores: e.getContentStores(),
                                sidebarIsAnimating: o(449473).B8.state.isAnimating,
                                windowHeight: S.state.height
                            }), {
                                debugName: "effectDataStore"
                            }),
                            i = new(o(345426)).ComputedStore(() => o(424332).Ob.state, {
                                debugName: "discussionStoresStore"
                            }),
                            a = new(o(345426)).ComputedStore(() => {
                                let e = o(332190).A.state,
                                    t = o(332190).A.getBlockStore(),
                                    n = o(332190).A.getClosestBlockStore();
                                if (e.open && e.rect && "comment" === e.content && (t || n) && (!t || o(400890).A.isBlockInFrame(t) && !e.property_id)) return {
                                    recomputeFocus: o(827862).A.state.isActivelyComposing,
                                    blockStore: t ? ? e.blockStore,
                                    discussionInputStore: e.discussionInputStore
                                }
                            }, {
                                debugName: "newMarginDiscussionArgsStore"
                            }),
                            c = new(o(345426)).ComputedStore(() => {
                                if (!o(827862).A.state.isActivelyComposing) return o(575125).A.getFramePageFirstSelectedDiscussionId();
                                o(575125).A.reset()
                            }, {
                                debugName: "selectedDiscussionIdStore"
                            }),
                            p = !1,
                            f = (0, o(381453).sg)(() => {
                                let {
                                    selectableRectMap: n,
                                    pageContentStores: f,
                                    sidebarIsAnimating: h,
                                    windowHeight: S
                                } = t.state, I = i.state, A = a.state, w = c.state;
                                if (s || h) return;
                                let M = r();
                                M && u.current && n && n.size && (0, o(424332).cY)({
                                    discussionStores: I,
                                    pageContentStores: f,
                                    marginDiscussionItemRefs: m.current,
                                    selectedDiscussionId: w,
                                    newMarginDiscussionArgs: A,
                                    marginContainerElement: u.current,
                                    pageViewBlockElement: M,
                                    onComputeComplete: (e, t) => {
                                        p || (g.current = t, b || x(!0), y(e))
                                    },
                                    computedOnce: b,
                                    topbarHeight: C,
                                    windowHeight: S,
                                    isFullWidth: (0, o(335818).Ck)(e, l, d),
                                    prevSelectedDiscussionId: v.selectedDiscussion,
                                    previousDiscussionElements: g.current,
                                    ignoreOffsetTop: k
                                })
                            }, 5);
                        return t.addListener(f), i.addListener(f), c.addListener(f), a.addListener(f), () => {
                            p = !0, t.removeListener(f), i.removeListener(f), c.removeListener(f), a.removeListener(f)
                        }
                    }, [n, s, r, b, e, v.selectedDiscussion, S, C, c, l, d, k]);
                    let I = (0, o(960253).I)(() => ({
                        marginCommentsContainer: {
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingInlineStart: o(424332).JR,
                            paddingInlineEnd: o(424332).JR,
                            width: a - 2 * o(424332).JR,
                            flexShrink: 0,
                            height: "100%",
                            position: "relative",
                            pointerEvents: "none",
                            zIndex: 1
                        }
                    }), [a]);
                    return (0, p.jsx)("div", {
                        style: I.marginCommentsContainer,
                        ref: u,
                        children: v.data.map((e, o) => (0, p.jsx)(ec, {
                            discussionData: e,
                            timeMounted: t,
                            onClick: h,
                            isVisible: n,
                            discussionItemElementMap: m.current,
                            isDiscussionSelected: e.selected || "new" === e.type,
                            isDiscussionHovered: e.id === f,
                            isLastItem: o === v.data.length - 1
                        }, `margin-discussion-${e.id}`))
                    })
                });

            function em({
                pageBlockStore: e,
                isVisible: t,
                pageViewBlockAccessor: n,
                context: s,
                isCollapsedAnchor: r
            }) {
                let [a, l] = (0, i.useState)(!1), c = (0, o(533992).v3)(), d = (0, o(533992).Y0)(), u = (0, i.useMemo)(() => new Date().getTime(), []), m = (0, o(682985).K8)(() => {
                    let t = (0, o(335818).Ck)(e, s, d);
                    return r ? {
                        paddingInlineStart: t ? 96 : 16,
                        height: 0
                    } : t ? void 0 : {
                        position: "absolute",
                        insetInlineEnd: (0, o(424332).gg)({
                            environment: c,
                            isInPeekRenderer: (0, o(447036).cq)(e),
                            isInFrameWhenSidePeekOpen: (0, o(447036).RX)(e)
                        })
                    }
                }, [e, s, c, d, r]), g = (0, i.useCallback)(() => {
                    l(!0)
                }, []), f = (0, i.useCallback)(() => {
                    l(!1)
                }, []), h = (0, o(960253).I)(() => ({
                    marginCommentsSection: {
                        display: t || a ? "flex" : "none",
                        flexShrink: 0,
                        pointerEvents: "none",
                        width: t ? o(424332).Qb : 0,
                        ...m
                    }
                }), [t, a, m]);
                return (0, p.jsx)(o(654979).A, {
                    animate: {
                        opacity: +!!t
                    },
                    onAnimationStart: g,
                    onAnimationEnd: f,
                    style: h.marginCommentsSection,
                    children: (0, p.jsx)(eu, {
                        pageBlockStore: e,
                        timeMounted: u,
                        isVisible: t,
                        animating: a,
                        pageViewBlockAccessor: n,
                        width: o(424332).Qb,
                        context: s
                    })
                })
            }
            var ep = () => o(58931);
            let eg = function(e) {
                let {
                    capture: t,
                    children: n
                } = e, s = (0, i.useRef)(null);
                return (0, o(336494).b)(o(635981).A, () => ({
                    getNode: () => s.current,
                    isCaptured: () => t
                }), [t]), (0, p.jsx)("div", {
                    ref: s,
                    children: i.Children.only(n)
                })
            };

            function ef({
                blockStore: e,
                discussionInputStore: t,
                handleDismiss: n
            }) {
                let s = (0, o(533992).v3)(),
                    {
                        device: a
                    } = s,
                    l = (0, i.useCallback)(async () => {
                        let e = await o(864850).T.formulas.load();
                        o(22229).i5({
                            environment: s,
                            allowActionsWhileCommenting: !0,
                            formulasModule: e
                        })
                    }, [s]),
                    c = (0, o(682985).K8)(() => o(707785).A.keyboardHeight() > 0, []),
                    d = (0, o(682985).K8)(() => {
                        let e = a.isAndroid ? 12 : 8;
                        return {
                            paddingLeft: (0, o(616844).Y5)("left", 12),
                            paddingRight: (0, o(616844).Y5)("right", 8),
                            paddingBottom: c ? e : (0, o(616844).Y5)("bottom", e)
                        }
                    }, [c, a.isAndroid]),
                    u = (0, o(682985).K8)(() => a.isMobileBrowser ? "90vw" : a.isTablet ? "470px" : "100%", [a]),
                    m = (0, o(682985).K8)(() => a.isMobileNative && a.isPhone ? "100%" : a.isMobileNative && a.isTablet ? "470px" : 470, [a]),
                    g = (0, o(960253).I)(() => ({
                        inputWrapper: {
                            width: m,
                            maxWidth: u,
                            paddingTop: 9,
                            paddingInlineStart: d.paddingLeft,
                            paddingInlineEnd: d.paddingRight,
                            paddingBottom: d.paddingBottom
                        }
                    }), [m, u, d]);
                return (0, o(805469).A)({
                    shouldPreserveTextSelection: !0,
                    shouldPreserveBlockSelection: !0,
                    shouldRestoreSelection: !0
                }), (0, p.jsx)(o(790124).A, {
                    capture: !0,
                    allowOpenLinkMenu: !0,
                    children: () => (0, p.jsx)(o(318981).A, {
                        store: e,
                        droppable: !0,
                        render: () => (0, p.jsx)(eg, {
                            capture: !0,
                            children: (0, p.jsx)("div", {
                                style: g.inputWrapper,
                                children: (0, p.jsx)(R().V, {
                                    showAvatar: !0,
                                    parentStore: e,
                                    blockStore: e,
                                    onCancel: n,
                                    onSubmit: l,
                                    discussionInputStore: t,
                                    isMobileSlideUpMenu: !0,
                                    shouldSaveUnsentComments: !1,
                                    discussionFormat: r().DiscussionFormat.Page,
                                    canDrop: !0
                                })
                            })
                        })
                    }, e.id)
                })
            }
            let eh = function() {
                    let e = (0, o(533992).v3)(),
                        t = (0, o(533992).WS)(),
                        n = (0, o(682985).K8)(() => o(332190).A.state.rect, []),
                        s = (0, o(682985).K8)(() => {
                            if (o(332190).A.state.open && "comment" === o(332190).A.state.content) {
                                let {
                                    discussionInputStore: n
                                } = o(332190).A.state;
                                if ((0, o(832122).m)(e)) return null;
                                if (o(332190).A.updateRect(), o(827862).A.state.isActivelyComposing) {
                                    "comments_pane" === o(827862).A.state.clickEntryPoint && o(827862).A.setActiveWithSource("popover_comments");
                                    let i = o(332190).A.getBlockStore();
                                    if (i) {
                                        var t;
                                        return {
                                            blockStore: i,
                                            discussionInputStore: n,
                                            canMarginCommentsRender: !(null != (t = o(332190).A.state) && t.property_id) && (0, o(424332).$N)(e, i)
                                        }
                                    }
                                }
                            }
                            return null
                        }, [e]),
                        a = (0, i.useCallback)(() => {
                            let t = null == s ? void 0 : s.discussionInputStore;
                            t && (0, o(745990).M)({
                                discussionInputStore: t,
                                environment: e
                            })
                        }, [e, null == s ? void 0 : s.discussionInputStore]),
                        l = (0, i.useCallback)(() => {
                            o(332190).A.hasContent() ? o(827862).A.resetEditorActiveSources() : s && (0, o(585356).c)()
                        }, [s]);
                    (0, i.useEffect)(() => {
                        function t(t) {
                            let n = o(332190).A.state,
                                i = n.open && "comment" === n.content && n.discussionInputStore || void 0;
                            i && ((0, ep().HR)({
                                discussionInputStore: i,
                                environment: e,
                                discussionHelpers: r()
                            }), t.preventDefault())
                        }
                        return window.addEventListener("beforeunload", t), () => {
                            window.removeEventListener("beforeunload", t)
                        }
                    }, [e]);
                    let c = (0, o(682985).K8)(() => o(363746).A.state.isOpen, []);
                    return (0, o(682985).K8)(() => o(827862).A.state.overlapsExistingDiscussionMenu, []) ? null : (0, p.jsx)(o(182718).zD, {
                        popupType: t ? o(423291).n.SlideUp : o(423291).n.Popup,
                        keepFocus: !0,
                        open: null !== s && (!s.canMarginCommentsRender || c),
                        originRect: n,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "center",
                        originGap: 4,
                        onDismiss: l,
                        content: () => s ? (0, p.jsx)(ef, {
                            blockStore: s.blockStore,
                            discussionInputStore: s.discussionInputStore,
                            handleDismiss: l
                        }) : null,
                        onAnimationEnd: a
                    })
                },
                ev = function() {
                    let e = (0, o(533992).v3)(),
                        t = (0, o(533992).Y0)(),
                        {
                            open: n,
                            rect: i,
                            discussionLocation: s
                        } = (0, o(682985).K8)(() => {
                            let {
                                open: e,
                                rect: t
                            } = o(266960).A.state;
                            return {
                                open: e,
                                rect: t,
                                discussionLocation: o(266960).A.state.open ? o(266960).A.state.discussionLocation : o(266960).A.state.prevDiscussionLocation
                            }
                        }, []),
                        {
                            popupType: r,
                            bottomSheetInitialState: a
                        } = {
                            device: t,
                            discussionLocation: s
                        }.device.isPhone ? {
                            popupType: o(423291).n.BottomSheet,
                            bottomSheetInitialState: "full"
                        } : {
                            popupType: o(423291).n.Popup,
                            bottomSheetInitialState: void 0
                        };
                    return (0, p.jsx)(o(182718).zD, {
                        popupType: r,
                        bottomSheetInitialState: a,
                        bottomSheetBackgroundColor: r === o(423291).n.BottomSheet ? "primary" : void 0,
                        open: n,
                        originRect: i,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "center",
                        originGap: 4,
                        onDismiss: () => (0, o(753288).o)(e),
                        content: () => (0, p.jsx)(eb, {}),
                        trapFocus: !0
                    })
                },
                ey = {
                    closeButton: {
                        position: "absolute",
                        insetInlineEnd: 10,
                        borderRadius: "50%",
                        background: o(632079).Tj.background.tertiaryTranslucent
                    }
                };

            function eb() {
                let e = (0, o(533992).v3)(),
                    t = (0, o(109939).tz)(),
                    n = (0, o(682985).O$)(o(266960).A),
                    s = (0, o(682985).K8)(() => o(266960).A.state.open ? o(266960).A.state.discussionInputStore.state.textStore.getValue() : null, []);
                if ((0, i.useEffect)(() => {
                        var e;
                        if (n.open && "feed_item_top_level_discussion" === n.discussionLocation) return;
                        let t = null == (e = o(862921).A.MenuScroller) ? void 0 : e.getNode();
                        null == t || t.scrollTo({
                            top: t.scrollHeight
                        })
                    }, [s, n]), n.open) {
                    let i, {
                        discussionStore: s,
                        discussionInputStore: a,
                        blockStore: l,
                        discussionLocation: c
                    } = n;
                    return i = o(986939).A.isMobile ? {
                        menuType: o(649476).gu.Modal,
                        title: (0, p.jsx)(o(109939).sA, {
                            defaultMessage: "Discussion",
                            id: "discussion.mobileReplyMenu.title"
                        }),
                        right: (0, p.jsx)(o(374533).A, {
                            icon: o(766970).xMarkFillIcon,
                            onClick: () => (0, o(753288).o)(e),
                            style: ey.closeButton,
                            ariaLabel: t.formatMessage({
                                id: "updateSidebar.header.closeLabel",
                                defaultMessage: "Close"
                            })
                        }),
                        onClickRight: () => (0, o(753288).o)(e),
                        whiteBackground: !0
                    } : {
                        menuType: o(649476).gu.Popup,
                        width: 420,
                        minHeight: "100px",
                        maxHeight: "50vh",
                        maxWidth: "100%"
                    }, (0, p.jsx)(o(747369).A, {
                        className: o(828432)._qG,
                        ...i,
                        children: (0, p.jsx)(o(790124).A, {
                            capture: !0,
                            allowMobileAutoScroll: !0,
                            children: () => (0, p.jsx)(Z, {
                                store: s,
                                discussionInputStore: a,
                                onDismiss: () => (0, o(753288).o)(e),
                                format: r().DiscussionFormat.Menu,
                                isFirst: !0,
                                isOnly: !0,
                                showResolveButtonByDefaultIfPossible: !0,
                                blockStore: l,
                                collapsed: !1,
                                ..."feed_item_top_level_discussion" === c ? {
                                    pageVisitStore: void 0,
                                    presenceStore: void 0,
                                    discussionLocation: "feed_item_top_level_discussion"
                                } : {
                                    discussionLocation: c
                                }
                            })
                        })
                    })
                }
                return null
            }
            var ex = () => o(576454),
                eS = () => o(78172),
                eC = () => o(197657)
        },
        349761: (e, t, o) => {
            function n(e) {
                return "type" in e && (e.type === o(944897).IA.CalledFunctionOnEmptyValue || e.type === o(944897).IA.CallingFunctionWithUnknownTarget || e.type === o(944897).IA.CallingFunctionWithUnknownArgument) ? "warning" : "error"
            }

            function i(e) {
                switch (e) {
                    case "checkbox":
                        return "boolean";
                    case "number":
                        return "number";
                    case "text":
                        return "text";
                    case "date":
                        return "date";
                    case "array":
                        return "array";
                    case "block":
                        return "block";
                    case "person":
                        return "person";
                    case "select":
                        return "select";
                    case "function":
                        return "function";
                    case "unknown":
                        return "unknown";
                    case "undefined":
                        return "undefined";
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function s(e) {
                switch (e.type) {
                    case o(944897).M9.InvalidCharacter:
                        return { ...o(649210).x0.InvalidCharacter,
                            values: {
                                errorCharacter: e.character
                            }
                        };
                    case o(944897).M9.UnclosedStringLiteral:
                        return o(649210).x0.UnclosedStringLiteral;
                    case o(944897).M9.UnclosedComment:
                        return o(649210).x0.UnclosedComment;
                    case o(944897).M9.TokenExpected:
                        return { ...o(649210).x0.TokenExpected,
                            values: {
                                expectedToken: e.token
                            }
                        };
                    case o(944897).M9.StringLiteralContainsToken:
                        return o(649210).x0.StringLiteralContainsToken;
                    case o(944897).M9.ExpressionExpected:
                        return o(649210).x0.ExpressionExpected;
                    case o(944897).M9.PropertyTokenOrFunctionExpected:
                        return o(649210).x0.PropertyTokenOrFunctionExpected;
                    case o(944897).M9.EndOfInputExpected:
                        return o(649210).x0.EndOfInputExpected;
                    case o(944897).M9.UnexpectedError:
                        return o(649210).x0.UnexpectedError;
                    case o(944897).M9.TooDeeplyNested:
                        return o(649210).x0.TooDeeplyNested;
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function r(e) {
                switch (e.type) {
                    case o(944897).IA.FunctionCallArgumentWrongType:
                    case o(944897).IA.FunctionCallUnexpectedArgument:
                        return e.argument;
                    default:
                        return e.node
                }
            }

            function a(e, t) {
                let n;
                switch (t.type) {
                    case o(944897).IA.ThisRowTypeNotFound:
                        n = o(649210).Xz.ThisRowTypeNotFound;
                        break;
                    case o(944897).IA.ThisRowNotBlockWithCollection:
                        n = o(649210).Xz.ThisRowNotBlockWithCollection;
                        break;
                    case o(944897).IA.MissingPropertyOnThisRow:
                        n = { ...o(649210).Xz.MissingPropertyOnThisRow,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).IA.MissingContextVariable:
                        {
                            let e = (0, o(297493).ix)(t.token) ? t.token.contextValueId : t.token.valueId;n = { ...o(649210).Xz.MissingContextVariable,
                                values: {
                                    valueId: e
                                }
                            }
                        }
                        break;
                    case o(944897).IA.MissingBlock:
                        n = { ...o(649210).Xz.MissingBlock,
                            values: {
                                blockId: t.token.blockId
                            }
                        };
                        break;
                    case o(944897).IA.CallingNotFunction:
                        n = { ...o(649210).Xz.CallingNotFunction,
                            values: {
                                expressionType: i(t.callee.type.type)
                            }
                        };
                        break;
                    case o(944897).IA.FunctionCallTooFewArguments:
                        n = { ...o(649210).Xz.FunctionCallTooFewArguments,
                            values: {
                                minNumParameters: t.minNumParameters,
                                functionName: t.libraryFunction.name,
                                numArguments: t.numArguments
                            }
                        };
                        break;
                    case o(944897).IA.FunctionCallUnexpectedArgument:
                        n = { ...o(649210).Xz.FunctionCallUnexpectedArgument,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).IA.FunctionCallArgumentWrongType:
                        n = { ...o(649210).Xz.FunctionCallArgumentWrongType,
                            values: {
                                argumentType: i(t.argument.type.type),
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).IA.CallingFunctionWithUnknownArgument:
                        {
                            let e = Array.isArray(t.expectedParameter.type) ? t.expectedParameter.type[0] : t.expectedParameter.type,
                                s = "expression" === e.type ? "expression" : i(e.type);n = { ...o(649210).Xz.CallingFunctionWithUnknownArgument,
                                values: {
                                    functionName: t.libraryFunction.name,
                                    expectedType: s
                                }
                            };
                            break
                        }
                    case o(944897).IA.MemberPropertyMismatchCollection:
                        n = { ...o(649210).Xz.MemberPropertyMismatchCollection,
                            values: {
                                propertyName: t.token.property
                            }
                        };
                        break;
                    case o(944897).IA.MemberPropertyMissing:
                        n = { ...o(649210).Xz.MemberPropertyMissing,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).IA.MemberPropertyTargetNotBlock:
                        n = o(649210).Xz.MemberPropertyTargetNotBlock;
                        break;
                    case o(944897).IA.MemberPropertyTypeInvalid:
                        n = { ...o(649210).Xz.MemberPropertyTypeInvalid,
                            values: {
                                propertyName: t.propertyName,
                                propertyType: t.propertyType
                            }
                        };
                        break;
                    case o(944897).IA.UndefinedIdentifier:
                        n = { ...o(649210).Xz.UndefinedIdentifier,
                            values: {
                                identifier: t.node.text
                            }
                        };
                        break;
                    case o(944897).IA.InvalidPropCall:
                        n = { ...o(649210).Xz.InvalidPropCall,
                            values: {
                                propertyName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.InvalidContextCall:
                        n = { ...o(649210).Xz.InvalidContextCall,
                            values: {
                                variableName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.InvalidVariableCall:
                        n = { ...o(649210).Xz.InvalidVariableCall,
                            values: {
                                variableName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.UnifiedFunctionCannotFindFunction:
                        n = { ...o(649210).Xz.UnifiedFunctionCannotFindFunction,
                            values: {
                                functionName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.UnifiedFunctionNoArguments:
                        n = { ...o(649210).Xz.UnifiedFunctionNoArguments,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).IA.UnifiedFunctionTargetWrongType:
                        n = { ...o(649210).Xz.UnifiedFunctionTargetWrongType,
                            values: {
                                functionName: t.libraryFunction.name,
                                targetType: i(t.expression.type.type)
                            }
                        };
                        break;
                    case o(944897).IA.CallingFunctionWithUnknownTarget:
                        {
                            let e = Array.isArray(t.expectedParameter.type) ? t.expectedParameter.type[0] : t.expectedParameter.type,
                                s = "expression" === e.type ? "expression" : i(e.type);n = { ...o(649210).Xz.CallingFunctionWithUnknownTarget,
                                values: {
                                    functionName: t.libraryFunction.name,
                                    expectedType: s
                                }
                            };
                            break
                        }
                    case o(944897).IA.CannotRelativelyCompareTypes:
                        n = { ...o(649210).Xz.CannotRelativelyCompareTypes,
                            values: {
                                lhsType: i(t.lhsType.type),
                                rhsType: i(t.rhsType.type)
                            }
                        };
                        break;
                    case o(944897).IA.CannotDoMathOnType:
                        n = { ...o(649210).Xz.CannotDoMathOnType,
                            values: {
                                lhsType: i(t.lhsType.type),
                                rhsType: i(t.rhsType.type)
                            }
                        };
                        break;
                    case o(944897).IA.UnaryMinusOnNonNumber:
                        n = { ...o(649210).Xz.UnaryMinusOnNonNumber,
                            values: {
                                type: i(t.expression.type.type)
                            }
                        };
                        break;
                    case o(944897).IA.IdentifierExpected:
                        n = o(649210).Xz.IdentifierExpected;
                        break;
                    case o(944897).IA.FunctionCallExpected:
                        n = { ...o(649210).Xz.FunctionCallExpected,
                            values: {
                                functionName: t.functionName
                            }
                        };
                        break;
                    case o(944897).IA.RenamedIdentifier:
                        n = { ...o(649210).Xz.RenamedIdentifier,
                            values: {
                                identifier: t.identifier,
                                renamedTo: t.renamedTo
                            }
                        };
                        break;
                    case o(944897).IA.RemovedFunction:
                        n = { ...o(649210).Xz.RemovedFunction,
                            values: {
                                functionName: t.functionName,
                                alternative: t.alternative
                            }
                        };
                        break;
                    case o(944897).IA.ContextVariableNotBlockWithCollection:
                        n = { ...o(649210).Xz.ContextVariableNotBlockWithCollection,
                            values: {
                                valueId: t.token.contextValueId
                            }
                        };
                        break;
                    case o(944897).IA.MissingPropertyOnContextVariable:
                        n = { ...o(649210).Xz.MissingPropertyOnContextVariable,
                            values: {
                                propertyName: t.property,
                                valueId: t.token.contextValueId
                            }
                        };
                        break;
                    case o(944897).IA.BlockPropertyTypeInvalid:
                        n = { ...o(649210).Xz.BlockPropertyTypeInvalid,
                            values: {
                                propertyName: t.propertyName
                            }
                        };
                        break;
                    case o(944897).IA.DisallowedReturnType:
                        {
                            let i = t.allowedReturnTypes.map(t => e.formatMessage((0, o(345091).getHumanReadableType)(t)).toLocaleLowerCase());n = { ...o(649210).Xz.DisallowedReturnType,
                                values: {
                                    allowedReturnType: e.formatList(i, {
                                        style: "long",
                                        type: "conjunction"
                                    }),
                                    allowedReturnTypeCount: t.allowedReturnTypes.length,
                                    returnType: e.formatMessage((0, o(345091).getHumanReadableType)(t.returnType)).toLocaleLowerCase()
                                }
                            };
                            break
                        }
                    case o(944897).IA.CrossSpacePropertyNotSupported:
                        n = { ...o(649210).Xz.CrossSpacePropertyNotSupported
                        };
                        break;
                    case o(944897).IA.CalledFunctionOnEmptyValue:
                        n = { ...o(649210).Xz.CalledFunctionOnEmptyValue
                        };
                        break;
                    case o(944897).IA.UnsafeRegexPattern:
                        n = "too_many_quantifiers" === t.reason ? { ...o(649210).tB.TooManyQuantifiers
                        } : { ...o(649210).Xz.UnsafeRegexPattern
                        };
                        break;
                    default:
                        (0, o(722371).HB)(t)
                }
                return { ...n,
                    values: { ...n.values,
                        startOffset: t.node.startOffset,
                        endOffset: t.node.endOffset + 1
                    }
                }
            }

            function l(e, t) {
                let n;
                switch (t.type) {
                    case o(944897).uW.MissingThisRow:
                        n = o(649210).X8.MissingThisRow;
                        break;
                    case o(944897).uW.MissingSchemaPropertyOnThisRow:
                        n = { ...o(649210).X8.MissingSchemaPropertyOnThisRow,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).uW.ThisRowBlockPropertyMismatchCollection:
                        n = o(649210).X8.ThisRowBlockPropertyMismatchCollection;
                        break;
                    case o(944897).uW.MissingContextVariable:
                        n = { ...o(649210).X8.MissingContextVariable,
                            values: {
                                valueId: t.valueId
                            }
                        };
                        break;
                    case o(944897).uW.IdentifierNotFound:
                        n = { ...o(649210).X8.IdentifierNotFound,
                            values: {
                                identifier: t.node.text
                            }
                        };
                        break;
                    case o(944897).uW.CannotRelativelyCompareTypes:
                        n = { ...o(649210).X8.CannotRelativelyCompareTypes,
                            values: {
                                lhsType: i(t.lhsType),
                                rhsType: i(t.rhsType)
                            }
                        };
                        break;
                    case o(944897).uW.CannotDoMathOnType:
                        n = { ...o(649210).X8.CannotDoMathOnType,
                            values: {
                                valueType: i(t.valueType)
                            }
                        };
                        break;
                    case o(944897).uW.CannotCallNonFunction:
                        n = { ...o(649210).X8.CannotCallNonFunction,
                            values: {
                                calleeType: i(t.calleeType)
                            }
                        };
                        break;
                    case o(944897).uW.UnifiedFunctionPropertyNotFound:
                        n = { ...o(649210).X8.UnifiedFunctionPropertyNotFound,
                            values: {
                                functionName: t.node.name
                            }
                        };
                        break;
                    case o(944897).uW.LibraryFunctionExecutionError:
                        let s = t.error instanceof o(944897).x4 ? t.error : void 0;
                        n = (null == s ? void 0 : s.info.type) === o(944897).v3.DateInvalidDurationUnit ? { ...o(649210).gW.DateInvalidDurationUnit,
                            values: {
                                functionName: t.libraryFunction.name,
                                invalidUnit: s.info.invalidUnit
                            }
                        } : (null == s ? void 0 : s.info.type) === o(944897).v3.CannotUseToNumberOnList ? { ...o(649210).gW.CannotUseToNumberOnList
                        } : (null == s ? void 0 : s.info.type) === o(944897).v3.CannotRoundToNonInteger ? { ...o(649210).gW.CannotRoundToNonInteger,
                            values: {
                                precision: s.info.precision
                            }
                        } : (null == s ? void 0 : s.info.type) === o(944897).v3.CannotRoundToTooManyDecimalPlaces ? { ...o(649210).gW.CannotRoundToTooManyDecimalPlaces,
                            values: {
                                precision: s.info.precision
                            }
                        } : (null == s ? void 0 : s.info.type) === o(944897).v3.NumberFormatInvalid ? { ...o(649210).gW.NumberFormatInvalid,
                            values: {
                                invalidFormat: s.info.invalidFormat
                            }
                        } : { ...o(649210).X8.LibraryFunctionExecutionError,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).uW.FunctionCallTooFewArguments:
                        n = { ...o(649210).X8.FunctionCallTooFewArguments,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).uW.FunctionCallUnexpectedArgument:
                        n = { ...o(649210).X8.FunctionCallUnexpectedArgument,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).uW.FunctionCallArgumentWrongType:
                        n = { ...o(649210).X8.FunctionCallArgumentWrongType,
                            values: {
                                functionName: t.libraryFunction.name,
                                argumentType: i(t.argumentType)
                            }
                        };
                        break;
                    case o(944897).uW.AccessingPropertyOnNonBlock:
                        n = o(649210).X8.AccessingPropertyOnNonBlock;
                        break;
                    case o(944897).uW.MissingDataDependencyBlock:
                        n = { ...o(649210).X8.MissingDataDependencyBlock,
                            values: {
                                blockId: t.blockPointer.id
                            }
                        };
                        break;
                    case o(944897).uW.MissingDataDependencyPerson:
                        n = { ...o(649210).X8.MissingDataDependencyPerson,
                            values: {
                                personId: t.personPointer.id
                            }
                        };
                        break;
                    case o(944897).uW.MemberPropertyMismatchCollection:
                        n = o(649210).X8.MemberPropertyMismatchCollection;
                        break;
                    case o(944897).uW.MissingPropertyOnSchemaForMemberProperty:
                        n = o(649210).X8.MissingPropertyOnSchemaForMemberProperty;
                        break;
                    case o(944897).uW.UnaryMinusOnNonNumber:
                        n = { ...o(649210).X8.UnaryMinusOnNonNumber,
                            values: {
                                expressionType: i(t.expressionType)
                            }
                        };
                        break;
                    case o(944897).uW.UnexpectedRecoveryNode:
                        n = o(649210).X8.UnexpectedRecoveryNode;
                        break;
                    case o(944897).uW.UnexpectedError:
                        n = o(649210).X8.UnexpectedError;
                        break;
                    case o(944897).uW.DepthExceeded:
                        n = o(649210).X8.DepthExceeded;
                        break;
                    case o(944897).uW.CycleDetected:
                        n = o(649210).X8.CycleDetected;
                        break;
                    case o(944897).uW.DownstreamParseFailure:
                        n = o(649210).X8.DownstreamParseFailure;
                        break;
                    case o(944897).uW.MaxEvaluationTimeExceeded:
                        n = o(649210).X8.MaxEvaluationTimeExceeded;
                        break;
                    case o(944897).uW.MissingSchemaPropertyOnCollection:
                        n = { ...o(649210).X8.MissingSchemaPropertyOnCollection,
                            values: {
                                collectionId: t.collectionId,
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).uW.ContextVariableWrongType:
                        n = { ...o(649210).X8.ContextVariableWrongType,
                            values: {
                                expectedType: t.expectedType,
                                propertyType: t.resultType,
                                valueId: t.valueId
                            }
                        };
                        break;
                    case o(944897).uW.DisallowedValueType:
                        {
                            let i = t.allowedValueTypes.map(t => e.formatMessage((0, o(345091).getHumanReadableType)(t)).toLocaleLowerCase());n = { ...o(649210).Xz.DisallowedReturnType,
                                values: {
                                    allowedValueType: e.formatList(i, {
                                        style: "long",
                                        type: "conjunction"
                                    }),
                                    allowedValueTypeCount: t.allowedValueTypes.length,
                                    valueType: e.formatMessage((0, o(345091).getHumanReadableValueType)(t.expressionValue)).toLocaleLowerCase()
                                }
                            };
                            break
                        }
                    case o(944897).uW.TotalDependencyLimitExceeded:
                        n = { ...o(649210).X8.TotalDependencyLimitExceeded,
                            values: {
                                totalLoaded: t.totalLoaded,
                                limit: t.limit
                            }
                        };
                        break;
                    case o(944897).uW.PerFormulaDependencyLimitExceeded:
                        n = { ...o(649210).X8.PerFormulaDependencyLimitExceeded,
                            values: {
                                perFormulaLoaded: t.perFormulaLoaded,
                                limit: t.limit
                            }
                        };
                        break;
                    default:
                        (0, o(722371).HB)(t)
                }
                return (0, o(297493).li)(t) ? { ...n,
                    values: { ...n.values,
                        startOffset: t.node.startOffset,
                        endOffset: t.node.endOffset + 1
                    }
                } : n
            }

            function c(e) {
                let t = null == e ? void 0 : e.values;
                return [o(381453).cJ(e, "values"), t]
            }

            function d(e) {
                return e.type === o(944897).uW.DepthExceeded || e.type === o(944897).uW.CycleDetected || e.type === o(944897).uW.MaxEvaluationTimeExceeded || e.type === o(944897).uW.LibraryFunctionExecutionError
            }
            o.d(t, {
                SA: () => n,
                eJ: () => d,
                ew: () => c,
                ml: () => s,
                rA: () => a,
                yI: () => l,
                zf: () => r
            }), o(581454)
        },
        368678: (e, t, o) => {
            o.d(t, {
                P: () => r
            });
            var n = o(296540),
                i = o(474848);
            let s = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: o(632079).Tj.blue.text.accentPrimary,
                    fontWeight: o(699422).Wy.semibold
                }
            };

            function r(e) {
                let {
                    onDismiss: t,
                    inputRef: r
                } = e, a = (0, o(533992).Y0)(), l = (0, n.useRef)(null), c = a.isMobileNative && a.isIOS, d = c && e.show;
                (0, o(336494).b)(o(651748).A, () => ({
                    getNode: () => l.current,
                    isShown: () => d
                }), [d]);
                let u = (0, o(571354).n)(),
                    m = (0, n.useCallback)(() => {
                        var e;
                        null == r || null == (e = r.current) || e.focus(), t && t();
                        let o = document.activeElement;
                        o instanceof HTMLElement && o.blur()
                    }, [r, t]);
                if (!c) return null;
                let p = d ? -(o(247800).j + u) : 0;
                return (0, i.jsx)(o(114596).O, {
                    open: !0,
                    children: (0, i.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: o(247800).j,
                            display: d ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: o(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${p}px)`,
                            transition: d ? "ease-out" : "ease-in",
                            boxShadow: d ? `
								0 -1px 0 ${o(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: l,
                        children: (0, i.jsx)(o(64960).Ay, {
                            style: s.style0,
                            onTouchEnd: () => {
                                m()
                            },
                            children: (0, i.jsx)(o(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        374241: (e, t, o) => {
            o.r(t), o.d(t, {
                arrowStraightLeftSmallIcon: () => i,
                iconDefinition: () => n
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                i = (0, o(104509).wt)("arrowStraightLeftSmall", n, "small")
        },
        376921: (e, t, o) => {
            o.d(t, {
                Ay: () => l,
                mI: () => s,
                vb: () => r
            }), o(296540);
            var n = o(474848);
            let i = (0, o(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                s = o(696654).NY,
                r = {
                    [o(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [o(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [o(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [o(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [o(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [o(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: o(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [o(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: o(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                a = {
                    style0: { ...o(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function l({
                avatarSize: e,
                format: t,
                isSingle: s,
                onClickRemove: c,
                renderAvatar: d,
                showRemoveButton: u,
                shouldShrink: m,
                style: p,
                title: g
            }) {
                let f = (0, o(109939).tz)(),
                    {
                        height: h,
                        fontSize: v,
                        margin: y,
                        marginEditState: b,
                        closeIconSize: x,
                        avatarSize: S
                    } = r[t],
                    C = (0, o(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!m,
                            minWidth: 0,
                            height: h,
                            borderRadius: 6,
                            fontSize: v,
                            lineHeight: "120%",
                            margin: s ? 0 : u ? b : y,
                            ...p
                        }
                    }), [v, h, s, y, b, m, u, p]);
                return (0, n.jsxs)("div", {
                    style: C.root,
                    children: [null == d ? void 0 : d(e ? ? S), (0, n.jsx)("div", {
                        className: "notranslate",
                        style: a.style0,
                        children: g
                    }), u ? (0, n.jsx)(o(64960).Ay, {
                        ariaLabel: void 0 !== g ? f.formatMessage(i.removeTokenLabel, {
                            title: g
                        }) : f.formatMessage(i.removeTokenLabelGeneric),
                        onClick: c,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: h,
                            height: h,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, n.jsx)(o(16275).I, {
                            icon: o(519529).xMarkFillSmallIcon,
                            size: x,
                            style: a.style1
                        })
                    }) : null]
                })
            }
        },
        397900: (e, t, o) => {
            o.r(t), o.d(t, {
                ellipsisIcon: () => i,
                iconDefinition: () => n
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                i = (0, o(104509).wt)("ellipsis", n, "default")
        },
        406531: (e, t, o) => {
            o.d(t, {
                l: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 2.29 11.93 10.46",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M13.165 12.75a.8.8 0 0 0 .69-1.203L8.692 2.693a.8.8 0 0 0-1.382 0l-5.165 8.854a.8.8 0 0 0 .691 1.203z"
                    })
                },
                i = (0, o(104509).wt)("arrowCaretUpFillSmall", n, "fillSmall")
        },
        425749: (e, t, o) => {
            o.d(t, {
                I$: () => r,
                R2: () => c,
                WF: () => l,
                bZ: () => a,
                cE: () => i,
                jX: () => s,
                rz: () => d
            });
            var n = () => o(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let s = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function r(e) {
                return !!(void 0 !== e && (0, o(722371).Xk)(s, e))
            }

            function a() {
                let e = (0, o(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: o(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, o(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function l(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let c = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of c)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        478597: (e, t, o) => {
            o.d(t, {
                A: () => s
            });
            var n = () => o(546605);
            class i extends n().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(o(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(o(517013)).pm({
                            environment: this.environment,
                            pointer: (0, o(295447).zP)({
                                environment: this.environment,
                                table: o(832375).SNf,
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
                    return o(247438).q4_(e).includes("\n")
                }
            }
            let s = i
        },
        497857: (e, t, o) => {
            o.d(t, {
                h: () => i
            }), o(296540);
            var n = o(474848);

            function i() {
                return (0, n.jsx)(o(16275).I, {
                    icon: o(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        503473: (e, t, o) => {
            o.d(t, {
                j: () => r
            });
            var n = o(296540),
                i = o(474848);
            let s = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function r(e) {
                let {
                    children: t,
                    style: r,
                    overlayContainerZIndex: a,
                    placement: l = "bottom",
                    tooltipStyle: c
                } = e, {
                    isSafari: d
                } = (0, o(533992).Y0)(), u = (0, n.useRef)(null), m = function(e) {
                    let [t, o] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void o(!1);
                        let n = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            o(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == n || n.observe(t), () => null == n ? void 0 : n.unobserve(t)
                    }, []), t
                }(u);
                return (0, i.jsx)(o(51831).m, {
                    delayThreshold: 500,
                    placement: l,
                    textWrap: !0,
                    style: c,
                    overlayContainerZIndex: a,
                    forceVisibleState: !!m && void 0,
                    disableTooltip: d,
                    content: () => m ? t : void 0,
                    children: e => (0, i.jsx)("div", {
                        ref: u,
                        ...o(952687).A.props(s, r),
                        ...e,
                        children: t
                    })
                })
            }
        },
        517352: (e, t, o) => {
            o.d(t, {
                e: () => s
            });
            var n = o(296540),
                i = o(474848);
            let s = (0, n.forwardRef)(function(e, t) {
                let {
                    children: s,
                    relative: r,
                    tooltip: a,
                    tooltipPlacement: l = "top",
                    iconLeading: c,
                    iconTrailing: d,
                    ...u
                } = e, {
                    size: m
                } = (0, o(311077).M)(), p = (0, n.useMemo)(() => c && "sm" !== m ? {
                    size: "default",
                    icon: c
                } : c, [c, m]), g = (0, n.useMemo)(() => d && "sm" !== m ? {
                    size: "default",
                    icon: d
                } : d, [d, m]), f = (0, o(960253).I)(() => ({
                    button: {
                        borderRadius: o(399411).VJ["lg" === m ? "xl" : "xs"],
                        position: r ? "relative" : void 0
                    }
                }), [r, m]), h = e => (0, i.jsx)(o(988022).p, {
                    ref: t,
                    colorPalette: "gray",
                    size: m,
                    iconLeading: p,
                    iconTrailing: g,
                    external: !0,
                    disabledFeedback: !0,
                    style: f.button,
                    ...(0, o(63390).A)(u, e),
                    children: s ? (0, i.jsx)(o(111010).D, {
                        styleKey: "captionRegular",
                        children: s
                    }) : void 0
                });
                return a ? (0, i.jsx)(o(51831).m, {
                    content: () => a,
                    placement: l,
                    alignment: "center",
                    children: h
                }) : h()
            })
        },
        519529: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => n,
                xMarkFillSmallIcon: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                i = (0, o(104509).wt)("xMarkFillSmall", n, "fillSmall")
        },
        551408: (e, t, o) => {
            function n() {
                let e = (0, o(83208).X)("database_agents"),
                    t = (0, o(682985).K8)(() => o(886556).z.isAiEnabled(), []);
                return e && t
            }

            function i() {
                return o(218744).default.checkGate({
                    gateName: "database_agents"
                }) && o(886556).z.isAiEnabled()
            }
            o.d(t, {
                A: () => n,
                R: () => i
            })
        },
        564657: (e, t, o) => {
            o.d(t, {
                Z: () => a,
                v: () => r
            });
            var n = o(296540),
                i = o(474848);
            let s = (0, n.createContext)(void 0);

            function r() {
                return (0, n.useContext)(s)
            }

            function a(e) {
                let {
                    index: t,
                    children: o
                } = e;
                return (0, i.jsx)(s.Provider, {
                    value: t,
                    children: o
                })
            }
            s.displayName = "NotificationIndexContext"
        },
        635981: (e, t, o) => {
            o.d(t, {
                A: () => s
            });
            var n = () => o(375622);
            class i extends n().A {}
            let s = new i
        },
        652134: (e, t, o) => {
            o.r(t), o.d(t, {
                aiFaceSmallIcon: () => s,
                iconDefinition: () => i
            }), o(296540);
            var n = o(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.43 11.63 12.81",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.204 1.93a3.47 3.47 0 0 0-4.097.39.625.625 0 1 0 .834.931 2.22 2.22 0 0 1 3.16.202.625.625 0 0 0 .944-.818 3.5 3.5 0 0 0-.84-.705m6.018.976A3.47 3.47 0 0 0 8.463 4.1l-5.077 8.476a.625.625 0 0 0 .437.938l4.41.715a.625.625 0 0 0 .2-1.234l-3.5-.568 4.602-7.685a2.22 2.22 0 0 1 3.822.02.625.625 0 1 0 1.08-.63 3.46 3.46 0 0 0-1.214-1.226m-7.83 2.105a1.094 1.094 0 1 0-.35 2.159 1.094 1.094 0 0 0 .35-2.159"
                        }), (0, n.jsx)("path", {
                            d: "M10.762 5.881a1.093 1.093 0 1 0-.35 2.159 1.093 1.093 0 0 0 .35-2.159"
                        })]
                    })
                },
                s = (0, o(104509).wt)("aiFaceSmall", i, "small")
        },
        661720: (e, t, o) => {
            o.d(t, {
                I: () => n
            });

            function n() {
                o(793767).A.state.isActive && (o(273770).A.setState({ ...o(273770).A.state,
                    open: !1
                }), o(793767).A.setState({ ...o(793767).A.state,
                    isActive: !1,
                    isAnimatingClosed: !0
                }))
            }
        },
        682612: (e, t, o) => {
            o.r(t), o.d(t, {
                arrowInCircleUpFillIcon: () => i,
                iconDefinition: () => n
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M10 17.625a7.625 7.625 0 1 0 0-15.25 7.625 7.625 0 0 0 0 15.25m3.042-8.07a.625.625 0 0 1-.884 0L10.625 8.02v5.466a.625.625 0 1 1-1.25 0V8.021L7.842 9.554a.625.625 0 1 1-.884-.883l2.6-2.6a.625.625 0 0 1 .884 0l2.6 2.6a.625.625 0 0 1 0 .883"
                    })
                },
                i = (0, o(104509).wt)("arrowInCircleUpFill", n, "fill")
        },
        746204: (e, t, o) => {
            o.d(t, {
                w: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                i = (0, o(104509).wt)("arrowChevronSingleLeftFill", n, "fill")
        },
        752153: (e, t, o) => {
            function n(e, t) {
                return i(l(e, t))
            }

            function i(e) {
                return void 0 !== e && (e === o(212169).q_ || e === o(212169).YD)
            }

            function s(e, t) {
                if (i(t)) return;
                let n = o(212169).c$[e],
                    s = n.steps.findIndex(e => e.id === t);
                return -1 === s ? n.steps[0].id : s === n.steps.length - 1 ? o(212169).q_ : n.steps[s + 1].id
            }

            function r(e, t) {
                let o = l(e, t);
                if (!(!o || i(o))) return s(t, o)
            }

            function a(e, t) {
                let n = l(e, t);
                if (n) {
                    var s;
                    let e = o(212169).c$[t];
                    if (i(n)) return null == (s = e.steps.at(-1)) ? void 0 : s.id;
                    let r = e.steps.findIndex(e => e.id === n);
                    return -1 !== r && 0 !== r ? e.steps[r - 1].id : void 0
                }
            }

            function l(e, t) {
                var n;
                if (!e) return;
                let i = ((null == (n = e.getSettings()) ? void 0 : n.tutorials) || {})[t];
                return void 0 === i ? o(212169).c$[t].steps[0].id : i
            }
            o.d(t, {
                KD: () => a,
                gt: () => l,
                i9: () => r,
                ll: () => i,
                tb: () => s,
                x$: () => n
            }), o(18107), o(967357)
        },
        766920: (e, t, o) => {
            o.d(t, {
                H: () => function e(t) {
                    let {
                        action: b,
                        environment: x,
                        commentStore: S,
                        discussionStore: C,
                        transaction: k,
                        discussionLocation: I,
                        currentPageStore: A
                    } = t;
                    if (!A) throw new(i()).yI4("Expected current page store to be defined");
                    let w = (0, o(96011).B)(C) ? ? [],
                        M = o(728372).AppStoreCurrentUserStore.state;
                    if (!M) throw new(i()).yI4("Expected current user store to be defined");
                    let j = w.filter(e => {
                        let t = (0, o(911520).f)(e);
                        return A.id === (null == t ? void 0 : t.id)
                    });
                    if (j.length !== w.length) return void
                    function(t) {
                        let {
                            action: n,
                            blockStoresInPage: a,
                            discussionStore: l,
                            transaction: c,
                            environment: d,
                            discussionLocation: p,
                            currentPageStore: y
                        } = t, b = l.getParentStore();
                        if (!b) throw new(i()).yI4("Suggestion should have parent block store");
                        let x = l.getRawContextStore(),
                            S = x.getValue(),
                            C = a.map(e => e.id);
                        (0, o(368198).K)({
                            store: x,
                            value: { ...S,
                                modifiedBlockIds: o(381453).FF(l.getSuggestModifiedBlockIds(), ...C),
                                resolvedBlockIds: C
                            },
                            transaction: c
                        });
                        let {
                            discussionStore: k,
                            commentStore: I
                        } = (0, o(959139).F)({
                            environment: d,
                            transaction: c,
                            blockStore: b,
                            modifiedBlockIds: C,
                            splitFrom: l.id,
                            skipAnnotatingTransaction: !0
                        });
                        (function(e) {
                            let {
                                environment: t,
                                blockStores: n,
                                oldDiscussionStore: i,
                                newDiscussionStore: a,
                                transaction: l
                            } = e;
                            n.forEach(n => {
                                (0, o(357018).u)({
                                    transaction: l,
                                    blockStore: n,
                                    discussionIds: [i.id]
                                }), (0, f().B)({
                                    transaction: l,
                                    blockStore: n,
                                    discussionId: a.id
                                });
                                let c = h(n, i.id);
                                c && ((0, v().E)({
                                        environment: t,
                                        transaction: l,
                                        blockStore: n,
                                        blockSuggestionId: c.id,
                                        removeDiscussionId: {
                                            discussionId: c.discussionId
                                        }
                                    }), (0, o(941538).c)({
                                        environment: t,
                                        transaction: l,
                                        discussionStore: i
                                    }), (0, o(132993).t)(l, n, {
                                        id: o(92513).JW(),
                                        type: c.type,
                                        discussionId: a.id
                                    })),
                                    function(e) {
                                        let {
                                            blockStore: t,
                                            oldDiscussionStore: o,
                                            newDiscussionStore: n,
                                            transaction: i,
                                            environment: a
                                        } = e, l = (0, r().o9)(t.getTitleStore()), c = t.getTitleValue();
                                        for (let e = 0; e < c.length; e++)
                                            for (let t of s().uPN(c[e]))
                                                if (s().I1e(t) && s().vu(t) === o.id) {
                                                    let o = (0, r().o9)(g().B(c, e));
                                                    (0, m().g)({
                                                        environment: a,
                                                        store: l,
                                                        selection: o,
                                                        annotationKey: s().JIi(t),
                                                        transaction: i,
                                                        updateSelection: !1
                                                    });
                                                    let d = s()._kG(t, n.id);
                                                    u().Mw({
                                                        environment: a,
                                                        store: l,
                                                        selection: o,
                                                        annotation: d,
                                                        transaction: i
                                                    })
                                                }
                                    }({ ...e,
                                        blockStore: n
                                    })
                            })
                        })({
                            blockStores: a,
                            oldDiscussionStore: l,
                            newDiscussionStore: k,
                            transaction: c,
                            environment: d
                        }), e({
                            action: n,
                            environment: d,
                            commentStore: I,
                            discussionStore: k,
                            transaction: c,
                            discussionLocation: p,
                            currentPageStore: y
                        })
                    }({
                        action: b,
                        discussionLocation: I,
                        blockStoresInPage: j,
                        discussionStore: C,
                        transaction: k,
                        environment: x,
                        currentPageStore: A
                    });
                    for (let e of ((0, o(29855).j)({
                            environment: x,
                            commentStore: S,
                            discussionStore: C,
                            transaction: k,
                            discussionLocation: I,
                            resolutionType: b
                        }), ! function(e) {
                            let {
                                blockStores: t,
                                discussionStore: o,
                                environment: i,
                                transaction: u,
                                action: m
                            } = e;
                            for (let e of t) {
                                let t = h(e, o.id);
                                if (t) {
                                    if ((0, v().E)({
                                            environment: i,
                                            transaction: u,
                                            blockStore: e,
                                            blockSuggestionId: t.id
                                        }), "reject" === m && "insert" === t.type) {
                                        let t = e.getTitleStore(),
                                            o = null == t ? void 0 : t.getValue();
                                        o && function(e) {
                                            for (let t of e)
                                                if (!s().uPN(t).some(s().I1e)) return !0;
                                            return !1
                                        }(o) || (0, a().Z)({
                                            environment: i,
                                            blocks: [e],
                                            transaction: u
                                        })
                                    }
                                    if ("accept" === m && "remove" === t.type && (0, a().Z)({
                                            environment: i,
                                            blocks: [e],
                                            transaction: u
                                        }), "reject" === m && "add_line_break" === t.type || "accept" === m && "remove_line_break" === t.type) {
                                        let t = (0, r().o9)(e.getTitleStore()),
                                            o = (0, l().bd)(t),
                                            s = o ? (0, n().T)(o) : void 0;
                                        if (o && s) {
                                            p().oZ({
                                                environment: i,
                                                transaction: u,
                                                store: o,
                                                block: s,
                                                targetStore: t,
                                                targetBlock: e
                                            });
                                            let l = s.getContentStores(),
                                                m = (0, r().o9)((0, n().T)(e));
                                            for (let e of l)(0, c().n)({
                                                parentStore: m.getContentStore(),
                                                beforeStore: s,
                                                insertStore: e,
                                                transaction: u
                                            }), (0, d().T)({
                                                parentStore: s.getContentStore(),
                                                childToRemoveStore: e,
                                                transaction: u
                                            });
                                            (0, a().Z)({
                                                environment: i,
                                                transaction: u,
                                                blocks: [s]
                                            })
                                        }
                                    }
                                }
                            }
                        }({
                            environment: x,
                            transaction: k,
                            blockStores: w,
                            discussionStore: C,
                            action: b
                        }), w)) {
                        if (e.isType("table_row")) {
                            var T;
                            for (let t of (null == (T = e.getParentBlockStore()) ? void 0 : T.getFormat().table_block_column_order) ? ? []) y({
                                environment: x,
                                transaction: k,
                                discussionStore: C,
                                titleStore: e.getPropertyStore(t),
                                action: b
                            })
                        } else {
                            let t = e.getTitleStore(),
                                o = e.getCaptionStore();
                            if (!t && !o) throw new(i()).yI4("Could not get title store or caption store for block");
                            t && y({
                                environment: x,
                                transaction: k,
                                discussionStore: C,
                                titleStore: t,
                                action: b
                            }), o && y({
                                environment: x,
                                transaction: k,
                                discussionStore: C,
                                titleStore: o,
                                action: b
                            })
                        }(0, f().B)({
                            transaction: k,
                            blockStore: e,
                            discussionId: C.id
                        })
                    }
                    let D = (0, r().o9)(C.getSuggestionRawContextStore());
                    (0, o(173157).z)({
                        store: D,
                        data: {
                            rejected: "reject" === b,
                            resolvedBy: {
                                id: M.id,
                                table: o(832375).oo9
                            }
                        },
                        transaction: k
                    })
                }
            }), o(898992), o(354520), o(803949), o(581454);
            var n = () => o(534012),
                i = () => o(101787),
                s = () => o(247438),
                r = () => o(148337),
                a = () => o(596740),
                l = () => o(871874),
                c = () => o(987380),
                d = () => o(818646),
                u = () => o(589873),
                m = () => o(364807),
                p = () => o(99147),
                g = () => o(282274),
                f = () => o(598403);

            function h(e, t) {
                let o = e.getSuggestionsStore().getValue();
                return null == o ? void 0 : o.find(e => e.discussionId === t)
            }
            o(672577), o(737550);
            var v = () => o(86778);

            function y(e) {
                let {
                    environment: t,
                    transaction: n,
                    discussionStore: r,
                    titleStore: a,
                    action: l
                } = e, c = a.getValue();
                if (c) {
                    for (let e = c.length - 1; e >= 0; e--)
                        for (let d of s().uPN(c[e]))
                            if (s().I1e(d) && s().vu(d) === r.id) {
                                let r = g().B(c, e);
                                if (!r) throw new(i()).yI4("Could not generate selection for token");
                                ! function(e) {
                                    let {
                                        annotation: t,
                                        action: n,
                                        selection: i,
                                        environment: r,
                                        transaction: a,
                                        titleStore: l
                                    } = e, c = s().JIi(t);
                                    if ("accept" === n)
                                        if (s().O3D(t))(0, m().g)({
                                            environment: r,
                                            store: l,
                                            selection: i,
                                            annotationKey: c,
                                            transaction: a,
                                            updateSelection: !1
                                        });
                                        else if (s().ZRT(t)) o(41403).jQ({
                                        environment: r,
                                        store: l,
                                        selection: i,
                                        transaction: a
                                    });
                                    else if (s().MXn(t) || s().zIw(t)) {
                                        (0, m().g)({
                                            environment: r,
                                            store: l,
                                            selection: i,
                                            annotationKey: c,
                                            transaction: a,
                                            updateSelection: !1
                                        });
                                        let e = s().Dew(t);
                                        if (s().MXn(t)) u().Mw({
                                            environment: r,
                                            store: l,
                                            selection: i,
                                            annotation: e,
                                            transaction: a
                                        });
                                        else {
                                            let t = s().JIi(e);
                                            (0, m().g)({
                                                environment: r,
                                                store: l,
                                                selection: i,
                                                annotationKey: t,
                                                transaction: a,
                                                updateSelection: !1
                                            })
                                        }
                                    } else(0, o(722371).HB)(t);
                                    else "reject" === n ? s().ZRT(t) || s().MXn(t) || s().zIw(t) ? (0, m().g)({
                                        environment: r,
                                        store: l,
                                        selection: i,
                                        annotationKey: c,
                                        transaction: a,
                                        updateSelection: !1
                                    }) : s().O3D(t) ? o(41403).jQ({
                                        environment: r,
                                        store: l,
                                        selection: i,
                                        transaction: a
                                    }) : (0, o(722371).HB)(t) : (0, o(722371).HB)(n)
                                }({
                                    annotation: d,
                                    action: l,
                                    selection: r,
                                    environment: t,
                                    transaction: n,
                                    titleStore: a
                                })
                            }
                }
            }
        },
        766970: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => n,
                xMarkFillIcon: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                i = (0, o(104509).wt)("xMarkFill", n, "fill")
        },
        789722: (e, t, o) => {
            o.d(t, {
                W: () => n
            });
            let n = (0, o(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799843: (e, t, o) => {
            o.d(t, {
                DG: () => c,
                OH: () => a,
                nl: () => r,
                x$: () => l
            });
            let n = (0, o(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                i = (0, o(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                s = (0, o(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function r(e, {
                useCompactFormat: t,
                useUltraCompactFormat: a,
                useLowercase: l,
                roundDownYears: c,
                useWeeks: d,
                showDaysToOneWeek: u,
                nowOverrideMs: m = Date.now()
            } = {}) {
                let p = a ? i : t ? s : n,
                    g = new Date(e),
                    f = o(962299).A.getIntl().locale,
                    h = new Date(m),
                    v = Number(h) - e;
                if (v >= o(627179).Gq && c) {
                    let e = Math.floor(v / o(627179).Gq);
                    return o(962299).A.formatMessage(p.year, {
                        numYears: e
                    })
                }
                if (g.getFullYear() !== h.getFullYear()) return g.toLocaleDateString(f, a ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let y = Math.floor(v / o(627179).nD);
                if (y < 28 && y > 7 && d || u && 7 === y) {
                    let e = Math.floor(y / 7);
                    return o(962299).A.formatMessage(p.week, {
                        numWeeks: e
                    })
                }
                if (u && y > 6 || !u && y >= 3) return g.toLocaleDateString(f, {
                    month: "short",
                    day: "numeric"
                });
                if (y >= 1) return o(962299).A.formatMessage(p.day, {
                    numDays: y
                });
                let b = Math.floor(v / o(627179).pT);
                if (b >= 1) return o(962299).A.formatMessage(p.hour, {
                    numHours: b
                });
                let x = Math.floor(v / o(627179).Xb);
                return x >= 1 ? o(962299).A.formatMessage(p.minute, {
                    numMinutes: x
                }) : l ? o(962299).A.formatMessage(p.second).toLocaleLowerCase() : o(962299).A.formatMessage(p.second)
            }

            function a(e, t) {
                let n = t - e,
                    i = Math.floor(n / o(627179).Gq),
                    s = Math.floor(n / o(627179).nD),
                    r = Math.floor(n / o(627179).pT),
                    a = Math.floor(n / o(627179).Xb),
                    l = Math.floor(n / o(627179).TD);
                return i >= 1 ? o(962299).A.formatMessage(o(362008).jX.year, {
                    numYears: i
                }) : s >= 1 ? o(962299).A.formatMessage(o(362008).jX.day, {
                    numDays: s
                }) : r >= 1 ? o(962299).A.formatMessage(o(362008).jX.hour, {
                    numHours: r
                }) : a >= 1 ? o(962299).A.formatMessage(o(362008).jX.minute, {
                    numMinutes: a
                }) : o(962299).A.formatMessage(o(362008).jX.second, {
                    numSeconds: l
                })
            }

            function l(e, t) {
                return new Date(e).toLocaleDateString(o(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function c(e) {
                return new Date(e).toLocaleDateString(o(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        801113: (e, t, o) => {
            o.d(t, {
                $C: () => i,
                Hi: () => n,
                Qy: () => s,
                Uu: () => r,
                ek: () => a,
                jq: () => l,
                pz: () => c
            });
            let n = 52,
                i = 45,
                s = 44,
                r = 44;

            function a(e) {
                return e ? r : s
            }

            function l(e) {
                return 2 * a(e)
            }

            function c(e, t, n) {
                return (e && !t ? (0, o(196441).n$)(n) : 12) + 30
            }
        },
        805469: (e, t, o) => {
            o.d(t, {
                A: () => i
            });
            var n = o(296540);
            let i = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: i,
                onClearSelection: s
            }) {
                let r = (0, o(533992).v3)(),
                    a = (0, n.useRef)(e),
                    l = (0, n.useRef)(""),
                    c = (0, n.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    d = (0, n.useCallback)(() => c.current, []),
                    u = (0, n.useCallback)(() => {
                        l.current = window.location.href, o(358377).default.hasSelection() && (c.current.textSelectionState = o(358377).default.cloneState()), (0, o(525779).clear)({
                            environment: r
                        }), t && (o(584265).default.isSelected() && (c.current.selectionState = o(584265).default.cloneState()), (0, o(471e3).I)({
                            environment: r
                        }))
                    }, [r, t]),
                    m = (0, n.useCallback)(() => {
                        c.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, l.current = "", null == s || s()
                    }, [s]),
                    p = (0, n.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: n
                        } = c.current;
                        window.location.href === l.current && (n && "mode" in n && "editing" === n.mode && o(358377).default.setState({ ...o(358377).default.state,
                            ...n
                        }), t && e && o(584265).default.setState({ ...o(584265).default.state,
                            ...e
                        })), m()
                    }, [m, t]);
                return (0, o(383953).l)(() => {
                    a.current = e, e && u()
                }), (0, n.useEffect)(() => (a.current && !e ? i ? p() : m() : !a.current && e && u(), a.current = e, () => {
                    i ? p() : m()
                }), [e, m, p, u, i]), {
                    clearSavedSelection: m,
                    restoreSavedSelection: p,
                    getSavedSelection: d
                }
            }
        },
        816231: (e, t, o) => {
            o.d(t, {
                A: () => l
            });
            var n = o(296540),
                i = o(474848);

            function s(e) {
                let t = (0, n.useRef)(null),
                    o = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    let o = t.current;
                    if (!o) return;
                    let n = e.el.getBoundingClientRect();
                    o.style.height = `${n.height}px`;
                    let i = 0,
                        s = e => {
                            cancelAnimationFrame(i), i = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: o,
                                    mouseY: n
                                }) {
                                    let {
                                        x: i,
                                        y: s,
                                        height: r,
                                        width: a
                                    } = t;
                                    if (o > i) {
                                        let t = Math.max(o - (i + a), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(n-s)/r}%)`
                                    } else {
                                        let t = Math.max(i - o, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(n-s)/r}%, 100% 100%)`
                                    }
                                }({
                                    div: o,
                                    rect: n,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", s), () => {
                        window.removeEventListener("mousemove", s), cancelAnimationFrame(i)
                    }
                }, [e.el]);
                let s = n.useCallback(e => {
                    if (!o.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let n = document.elementFromPoint(e.clientX, e.clientY);
                        if (n === t.current && (t.current.style.visibility = "hidden", n = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), n && n !== t.current) {
                            o.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                n.dispatchEvent(t)
                            } finally {
                                o.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, i.jsx)("div", {
                    ref: t,
                    onClick: s,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let r = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                a = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                l = n.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: l,
                    allowOptionalExtensionMenu: c,
                    ...d
                }, u) {
                    let {
                        disabled: m,
                        disableDefaultClick: p,
                        onFocus: g,
                        focused: f,
                        placementToOrigin: h,
                        alignmentToOrigin: v,
                        disableCloseOnEnter: y,
                        bottomSheetInitialState: b,
                        popupTypeOverride: x
                    } = d, S = (0, o(533992).WS)(), C = (0, o(649476).Tf)(), [k, I] = (0, n.useState)(!1), [A, w] = (0, n.useState)(!1), M = (0, n.useRef)(null), j = (0, n.useRef)(null), T = (0, n.useRef)(null), D = (0, n.useRef)(null), _ = (0, n.useCallback)(() => {
                        T.current && window.clearTimeout(T.current), D.current && window.clearTimeout(D.current), T.current = null, D.current = null
                    }, []), L = (0, n.useCallback)(() => {
                        _(), m || (I(!0), w(!0))
                    }, [m, _]), B = (0, n.useCallback)(() => {
                        _(), w(!1), I(!1)
                    }, [_]), R = (0, n.useCallback)(e => {
                        _(), k || (e && e.preventDefault && e.preventDefault(), T.current = window.setTimeout(L, 120))
                    }, [k, _, L]), E = (0, n.useCallback)(() => {
                        w(!1), _(), k && (D.current = window.setTimeout(B, 100))
                    }, [k, B, _]), P = (0, n.useCallback)(t => {
                        g(), L(), c && (null == e || e(t), B())
                    }, [g, L, c, e, B]), F = (0, n.useCallback)(() => {
                        S || R()
                    }, [R, S]), N = (0, n.useCallback)(() => {
                        S || (g(), R())
                    }, [g, R, S]), U = (0, n.useCallback)(e => {
                        if (o(986939).A.isMobile) return;
                        let t = M.current;
                        k && t && !t.contains(e.target) && B()
                    }, [k, B]), W = (0, n.useCallback)(e => {
                        13 === e.keyCode && k && !y && B()
                    }, [k, B, y]);
                    (0, n.useEffect)(() => {
                        if (!p) return window.addEventListener("click", U), () => {
                            window.removeEventListener("click", U)
                        }
                    }, [p, U]), (0, n.useEffect)(() => (window.addEventListener("keydown", W), () => {
                        window.removeEventListener("keydown", W)
                    }), [W]);
                    let z = (0, n.useRef)(f);
                    (0, n.useEffect)(() => {
                        !f && z.current && E(), z.current = f
                    }, [f, E]);
                    let V = { ...(0, o(63390).A)({
                                onMouseEnter: F,
                                onClick: P
                            }, d),
                            showExtensionArrow: !0
                        },
                        O = o(423291).n.Popup;
                    return x ? O = x : S && (O = C ? o(423291).n.BottomSheet : o(423291).n.SlideUp), (0, i.jsx)(o(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: f,
                        onEnter: k ? void 0 : R,
                        onRight: R,
                        onLeft: k ? E : void 0,
                        onEsc: k ? E : void 0,
                        children: (0, i.jsx)(o(182718).zD, {
                            popupType: O,
                            bottomSheetInitialState: b,
                            open: k,
                            placementToOrigin: h ? ? "right",
                            alignmentToOrigin: v ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !S,
                            preventCaptureEsc: !0,
                            ref: M,
                            content: () => (0, i.jsxs)(i.Fragment, {
                                children: [!S && A && j.current ? (0, i.jsx)(s, {
                                    el: j.current
                                }) : null, (0, i.jsx)("div", {
                                    ref: j,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: l({
                                        onMouseEnter: N
                                    }, {
                                        close: E
                                    })
                                })]
                            }),
                            style: [a, S && r],
                            trapFocus: !0,
                            onDismiss: B,
                            children: null == t ? void 0 : t(V, u)
                        })
                    })
                })
        },
        912221: (e, t, o) => {
            o.d(t, {
                $D: () => a,
                CJ: () => c,
                CY: () => p,
                Sg: () => r,
                bq: () => s,
                iM: () => f,
                kJ: () => d,
                kx: () => m,
                qj: () => g,
                rL: () => n,
                sH: () => u,
                u6: () => i,
                zr: () => l
            });
            let n = 16,
                i = 20,
                s = 1e3,
                r = 12,
                a = 456,
                l = 24,
                c = 48;

            function d() {
                return {
                    background: o(632079).Tj.background.tertiaryTranslucent,
                    borderRadius: 8,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    marginInlineStart: o(986939).A.isMobile ? 0 : n,
                    marginInlineEnd: o(986939).A.isMobile ? 0 : n,
                    marginTop: 4,
                    marginBottom: 8
                }
            }

            function u() {
                return { ...p(),
                    width: "unset",
                    height: c,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingInlineEnd: 6
                }
            }

            function m() {
                return o(986939).A.isMobile ? o(418676).Kw : o(418676).vQ
            }

            function p() {
                return {
                    borderRadius: 10,
                    transition: "background 150ms ease-out"
                }
            }

            function g({
                isMobile: e
            }) {
                return e ? 12 : 10
            }

            function f({
                themeMode: e,
                colorOverride: t,
                size: n = 24,
                useLargeBorderRadius: i,
                useLightBackgroundColor: s,
                icon: r
            }) {
                return {
                    background: t || (r && (0, o(111012).T8)(r) ? (0, o(111012).ez)({
                        icon: r,
                        mode: e,
                        useLightGrayColor: s
                    }) : o(632079).Tj.background.tertiaryTranslucent),
                    width: n,
                    height: n,
                    borderRadius: i ? 6 : "0.25em"
                }
            }
        },
        931663: (e, t, o) => {
            o.d(t, {
                X: () => r,
                l: () => s
            });
            var n = o(296540),
                i = o(474848);
            let s = (0, n.createContext)({
                hoveredIndex: null,
                setHoveredIndex: () => {}
            });

            function r(e) {
                let {
                    children: t
                } = e, [o, r] = (0, n.useState)(null), a = (0, n.useMemo)(() => ({
                    hoveredIndex: o,
                    setHoveredIndex: r
                }), [o]);
                return (0, i.jsx)(s.Provider, {
                    value: a,
                    children: t
                })
            }
            s.displayName = "InboxNotificationHoverContext"
        },
        937776: (e, t, o) => {
            o.d(t, {
                B: () => s
            }), o(296540);
            var n = o(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, n.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                s = (0, o(104509).wt)("archiveBox", i, "default")
        },
        939434: (e, t, o) => {
            o.d(t, {
                w: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 0.97 9.66 14.06",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8.442 1.158a.625.625 0 0 0-.884 0l-4.2 4.2a.625.625 0 0 0 .884.884L8 2.484l3.758 3.758a.625.625 0 0 0 .884-.884L8.445 1.16zm4.2 8.6a.625.625 0 0 0-.884 0L8 13.516 4.242 9.758a.625.625 0 1 0-.884.884l4.2 4.2c.244.244.64.244.884 0l.005-.005 4.195-4.195a.625.625 0 0 0 0-.884"
                    })
                },
                i = (0, o(104509).wt)("arrowChevronDoubleUpAndDownSmall", n, "small")
        },
        969278: (e, t, o) => {
            o.r(t), o.d(t, {
                arrowStraightRightSmallIcon: () => i,
                iconDefinition: () => n
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, o(474848).jsx)("path", {
                        d: "M9.372 3.238a.625.625 0 1 0-.884.884l3.253 3.253H2.75a.625.625 0 0 0 0 1.25h8.991l-3.253 3.253a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                    })
                },
                i = (0, o(104509).wt)("arrowStraightRightSmall", n, "small")
        },
        980494: (e, t, o) => {
            o.d(t, {
                A: () => s
            }), o(296540);
            var n = o(474848);
            let i = {
                    style0: { ...o(699422).RC
                    }
                },
                s = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        s = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        r = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: a,
                            avatarShouldShowShadow: l,
                            avatarSize: c,
                            hasTooltip: d,
                            tooltipHeader: u,
                            hasPersonHoverCard: m,
                            spaceStore: p
                        } = e,
                        g = (0, o(109939).tz)(),
                        f = (0, o(682985).K8)(() => null == a ? void 0 : a.getDisplayName(g), [a, g]),
                        h = (0, n.jsxs)("div", {
                            style: s,
                            children: [(0, n.jsx)("div", {
                                style: r,
                                children: (0, n.jsx)(o(321753).A, {
                                    userStore: a,
                                    avatarShouldShowShadow: l,
                                    size: c,
                                    hasTooltip: d && !m,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, n.jsx)("div", {
                                className: "notranslate",
                                style: i.style0,
                                children: f
                            })]
                        });
                    return m ? (0, n.jsx)(o(532755).D, {
                        userStore: a,
                        spaceStore: p,
                        from: e.personHoverCardEntrypoint,
                        children: h
                    }) : h
                }
        },
        983012: (e, t, o) => {
            o.d(t, {
                w: () => i
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.57 0.97 10.86 13.25",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8.715 1.077a.626.626 0 0 0-.863.868l.08.098L9.27 3.375H8A5.425 5.425 0 1 0 13.425 8.8a.625.625 0 0 0-1.25 0A4.175 4.175 0 1 1 8 4.625h1.27L7.942 5.96l-.08.097a.626.626 0 0 0 .966.784l2.395-2.406.077-.095a.624.624 0 0 0-.08-.788L8.813 1.157z"
                    })
                },
                i = (0, o(104509).wt)("arrowCircleSpinClockwiseSmall", n, "small")
        },
        987308: (e, t, o) => {
            o.d(t, {
                o: () => s
            }), o(296540);
            var n = o(474848);
            let i = {
                default: {
                    display: "flex",
                    marginTop: 7,
                    marginBottom: 7,
                    alignItems: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                    pointerEvents: "auto",
                    width: "fit-content",
                    color: o(632079).Tj.text.secondary,
                    gap: 4
                }
            };

            function s(e) {
                let {
                    href: t,
                    style: s
                } = e;
                return (0, n.jsxs)("a", {
                    href: t,
                    target: "_blank",
                    style: { ...i.default,
                        ...s
                    },
                    children: [(0, n.jsx)(o(16275).I, {
                        icon: o(211052).questionMarkCircleSmallIcon,
                        size: "sm"
                    }), (0, n.jsx)(o(109939).sA, {
                        id: "LearnMoreLink.learnMore",
                        defaultMessage: "Learn more"
                    })]
                })
            }
        },
        992351: (e, t, o) => {
            o.d(t, {
                B: () => r
            });
            var n = o(296540);
            let i = new Map;
            var s = o(474848);

            function r({
                tutorialId: e,
                tutorialStepId: t,
                onPrimaryButtonClick: a,
                displayStore: l,
                calloutId: c,
                enableTracking: d = !1,
                ...u
            }) {
                var m;
                let p, g, f = (0, o(533992).v3)(),
                    h = (m = `${e}.${t}`, p = !i.get(m), (g = (0, n.useRef)(p)).current && i.set(m, !0), (0, n.useEffect)(() => () => {
                        g.current && i.set(m, !1)
                    }, [m]), g.current),
                    v = (0, o(718012).V)(),
                    {
                        currentStep: y,
                        isLoading: b
                    } = (0, o(682985).K8)(() => {
                        var t;
                        return {
                            isLoading: !(null != (t = o(728372).AppStoreCurrentUserSettingsStore.state) && t.getSettings()),
                            currentStep: (0, o(752153).gt)(o(728372).AppStoreCurrentUserSettingsStore.state, e)
                        }
                    }, [e]);
                if ((0, n.useEffect)(() => {
                        b || y !== t || !h ? null == l || l.setState(!1) : null == l || l.setState(!0)
                    }, [b, y, t, h, l]), b || y !== t || !h) return null;
                let x = o(212169).c$[e],
                    S = x.steps.findIndex(e => e.id === t),
                    C = x.steps.length,
                    k = n => {
                        d && (0, o(104310).u)({
                            event: {
                                eventName: "tutorial_tooltip_action",
                                eventProperties: {
                                    step: S + 1,
                                    total_steps: C,
                                    tutorial_id: e,
                                    tutorial_step_id: t,
                                    action_type: n
                                }
                            }
                        })
                    },
                    I = (0, s.jsx)(o(788139).k, {
                        onCloseClick: () => {
                            o(128817).dismissTutorial(f, e), k("dismiss")
                        },
                        onPrimaryButtonClick: t => {
                            o(128817).tutorialGoToNextStep(f, e), null == a || a(t), k("next")
                        },
                        onBackButtonClick: () => {
                            o(128817).tutorialGoToPrevStep(f, e), k("back")
                        },
                        numSteps: C,
                        currStepIndex: S,
                        ...u
                    });
                return c ? (0, s.jsx)(o(397732).B, {
                    calloutId: c,
                    shouldShow: !0,
                    inAppCalloutStore: v,
                    children: I
                }) : I
            }
        }
    }
]);