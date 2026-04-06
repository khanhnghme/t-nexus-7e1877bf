"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5834, 11528, 14344, 32626, 40600, 51646, 75215, 86477], {
        2009: (e, t, n) => {
            n.d(t, {
                w: () => r
            });
            var o = () => n(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let r = new i
        },
        5556: (e, t, n) => {
            n.d(t, {
                u: () => o
            });

            function o(e) {
                let {
                    blocks: t,
                    transaction: o
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && n(966980).wm(e) && (0, n(210191).T)({
                        store: e,
                        transaction: o
                    })
                }
            }
        },
        11444: (e, t, n) => {
            n.r(t), n.d(t, {
                UISpacePermissionGroupToken: () => a
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                avatarWrapStyle: {
                    width: "none",
                    minHeight: "none",
                    marginInlineEnd: 6
                },
                style0: { ...n(699422).RC
                },
                style1: {
                    margin: 0
                }
            };

            function a(e) {
                let {
                    parentStore: t,
                    style: a,
                    format: l
                } = e, s = e.groupPointer.id, d = e.groupPointer.spaceId, c = (0, n(659341).S4)({
                    spacePermissionGroupId: s,
                    spaceId: d
                }), u = (0, n(682985).K8)(() => e.groupModel ? e.groupModel : t ? n(398652).C.createChildStore(t, c).getModel() : void 0, [t, c, e.groupModel]), p = (0, n(533992).Y0)(), {} = (0, n(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: n(632079).Tj.background.tertiaryTranslucent,
                        fontSize: n(986939).A.isMobile ? 11 : 9,
                        lineHeight: p.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [p]), m = (0, n(109939).tz)(), f = (0, n(682985).K8)(() => (0, n(95384).n)({
                    intl: m,
                    permissionGroupModel: u
                }), [m, u]), g = (0, o.useCallback)(e => l === n(696654).NY.Inline ? (0, i.jsx)(n(308256).o, {
                    group: u,
                    size: e
                }) : (0, i.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, i.jsx)("div", {
                        style: r.avatarWrapStyle,
                        children: (0, i.jsx)(n(308256).o, {
                            group: u,
                            size: e
                        })
                    }), (0, i.jsx)("div", {
                        style: r.style0,
                        children: f
                    })]
                }), [l, u, f]);
                return (0, i.jsx)(n(376921).Ay, { ...e,
                    style: { ...r.style1,
                        ...a
                    },
                    renderAvatar: g
                })
            }
        },
        13042: (e, t, n) => {
            n.d(t, {
                d: () => o
            });

            function o(e) {
                if (!e) return !1;
                let t = e.getFormat();
                if (!t) return !1;
                let n = t.marketplace_listing_id;
                return !!n && n.length > 0
            }
        },
        18274: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                return (0, o.jsx)(n(746434).E, {
                    style: e.style,
                    content: (0, o.jsx)(n(109939).sA, {
                        id: "betaBadgeComponent.label",
                        defaultMessage: "Beta"
                    })
                })
            }
        },
        31319: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    activeDotStyle: {
                        height: 10,
                        width: 10,
                        backgroundColor: n(632079).Tj.palette.green[400],
                        border: "2px solid white",
                        borderRadius: "50%",
                        position: "absolute",
                        insetInlineStart: 11,
                        top: 11
                    }
                },
                r = function(e) {
                    let {
                        botValue: t,
                        botStore: r,
                        showActiveDot: a,
                        style: l,
                        size: s
                    } = e, d = (0, n(109939).tz)(), c = (0, n(682985).K8)(() => {
                        if (r) {
                            let e = r.getIcon();
                            if (e) return {
                                pointer: {
                                    table: n(832375).GPl,
                                    id: r.id,
                                    spaceId: r.getSpaceId()
                                },
                                icon: e
                            }
                        } else if (null != t && t.icon) return {
                            pointer: {
                                table: n(832375).GPl,
                                id: t.id,
                                spaceId: t.space_id
                            },
                            icon: t.icon
                        }
                    }, [r, t]), u = (0, n(682985).K8)(() => (null == r ? void 0 : r.getDisplayName(d)) ? ? (0, n(697006).Hg)(t), [r, t, d]);
                    return (0, o.jsxs)("div", {
                        style: l,
                        children: [(0, o.jsx)(n(569553).B6, {
                            icon: c,
                            title: u,
                            size: s || 18,
                            disabled: !0,
                            isEmptyPage: !1,
                            useInvertedColors: !0
                        }), a ? (0, o.jsx)("div", {
                            style: i.activeDotStyle
                        }) : void 0]
                    })
                }
        },
        33402: (e, t, n) => {
            n.d(t, {
                J: () => i
            });
            let o = new(n(815048)).O2("PageAttributionHoverCard", async () => await n.e(73458).then(n.bind(n, 373592))),
                i = (0, n(815048)._h)(o, e => e.PageAttributionHoverCard)
        },
        34824: (e, t, n) => {
            n.d(t, {
                G: () => s,
                e: () => a
            });
            var o, i = n(296540),
                r = n(474848);
            let a = ((o = {})[o.Name = 0] = "Name", o),
                l = {
                    propertyIcon: {
                        fill: n(632079).Tj.icon.primary,
                        marginInlineStart: 6,
                        marginInlineEnd: 2
                    }
                },
                s = i.forwardRef(function(e, t) {
                    let {
                        propertySchema: o,
                        format: i
                    } = e, {
                        name: s,
                        type: d,
                        icon: c
                    } = o, u = (0, n(960253).e)(), p = i === a.Name ? s : n(799514).dC[d];
                    return (0, r.jsx)(n(95582).A, {
                        title: p,
                        icon: (0, r.jsx)(n(221535).zB, {
                            icon: c,
                            type: d,
                            size: n(986939).A.isMobile ? 18 : 16,
                            theme: n(632079).Tj,
                            themeMode: u,
                            style: l.propertyIcon
                        }),
                        ...e
                    })
                })
        },
        47187: (e, t, n) => {
            n.d(t, {
                E: () => o
            });

            function o(e) {
                let {
                    size: t,
                    style: o
                } = e;
                return (0, n(960253).I)(() => ({
                    icon: {
                        width: .6 * t,
                        height: .6 * t,
                        fill: n(632079).Tj.text.secondary
                    },
                    iconContainer: {
                        width: t,
                        height: t,
                        borderRadius: "100%",
                        background: n(632079).Tj.background.tertiaryTranslucent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...o
                    }
                }), [t, o])
            }
        },
        58931: (e, t, n) => {
            n.d(t, {
                HR: () => i,
                _y: () => r
            });
            let o = (0, n(109939).YK)({
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
                    discussionHelpers: a,
                    reason: l
                } = e;
                n(332190).A.isComposingNewDiscussion() ? r({
                    environment: i,
                    reason: l ? ? "navigating_away"
                }) : a.hasCommentChanged(t) ? (n(65255).yO(i), n(647095).ui({
                    message: n(962299).A.formatMessage(o.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => n(65255).Ie(i),
                    keepFocus: !0,
                    items: [{
                        label: n(962299).A.formatMessage(o.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            n(65255).QP(i), (0, n(585356).c)()
                        }
                    }]
                })) : (0, n(585356).c)()
            }

            function r(e) {
                let {
                    environment: t
                } = e;
                if (!n(332190).A.isDraftCommentOnValidSelection()) return;
                let i = n(332190).A.getDiscussionInputStore();
                n(65255).yO(t), n(647095).ui({
                    message: n(962299).A.formatMessage(o.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return n(962299).A.formatMessage(o.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return n(962299).A.formatMessage(o.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, n(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: n(962299).A.formatMessage(o.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, n(758275).x)({
                                currentBlockStore: n(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: i,
                                environment: t
                            }), n(65255).Ie(t)
                        }
                    }, {
                        label: n(962299).A.formatMessage(o.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            n(65255).QP(t), (0, n(585356).c)()
                        }
                    }]
                })
            }
        },
        59651: (e, t, n) => {
            n.d(t, {
                l: () => i
            });
            let o = {
                [n(49361).e1]: "collection_connected_property_figma",
                [n(49361).Hd]: "collection_connected_property_google_drive",
                [n(49361).ob]: "collection_connected_property_github",
                [n(49361).k0]: "collection_connected_property_zendesk",
                [n(49361).bh]: "collection_synced_database_github",
                [n(49361).MN]: "collection_synced_database_asana",
                [n(49361).Fo]: "collection_synced_database_gitlab",
                [n(49361).me]: "collection_synced_database_jira",
                [n(49361).F6]: "collection_synced_database_jira_workspace",
                [n(49361).Fv]: "collection_synced_database_jira_datacenter",
                [n(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function i(e) {
                if (e) return o[e]
            }
        },
        59724: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    style0: { ...n(699422).RC
                    }
                },
                r = function(e) {
                    let {
                        botStore: t,
                        avatarSize: r,
                        shouldShowBadge: a,
                        style: l,
                        inline: s
                    } = e, d = (0, n(109939).tz)(), c = (0, n(533992).Y0)(), u = (0, n(682985).K8)(() => null == t ? void 0 : t.getDisplayName(d), [t, d]), {
                        outerStyle: p,
                        avatarWrapStyle: m,
                        badgeStyle: f
                    } = (0, n(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...l
                        },
                        avatarWrapStyle: s ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: n(632079).Tj.text.secondary,
                            background: n(632079).Tj.background.tertiaryTranslucent,
                            fontSize: n(986939).A.isMobile ? 11 : 9,
                            lineHeight: c.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [l, s, c]);
                    return (0, o.jsxs)("div", {
                        style: p,
                        children: [(0, o.jsx)("div", {
                            style: m,
                            children: (0, o.jsx)(n(31319).A, {
                                botStore: t,
                                size: r
                            })
                        }), (0, o.jsx)("div", {
                            style: i.style0,
                            children: u
                        }), a ? (0, o.jsx)("div", {
                            style: f,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        72762: (e, t, n) => {
            n.d(t, {
                o: () => o
            });

            function o(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), n(639675).Ay.setState({ ...n(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        73888: (e, t, n) => {
            n.d(t, {
                y: () => o
            }), n(944114), n(898992), n(354520), n(803949), n(581454);

            function o(e) {
                let {
                    environment: t,
                    transaction: o,
                    spaceStore: i,
                    actors: r,
                    metadata: a
                } = e;
                if (!i.isDefined()) return !1;
                let l = i.id,
                    s = r.filter(e => "user" === e.type).map(e => ({
                        id: (0, n(729052).yO)({
                            spaceId: l,
                            userId: e.userId
                        }),
                        space_id: l,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    d = r.filter(e => "bot" === e.type).map(e => {
                        var t, o;
                        return {
                            id: (0, n(611042).YS)({
                                spaceId: i.id,
                                botId: e.botId
                            }),
                            space_id: l,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (o = e.parent) ? void 0 : o.table,
                            membership_type: e.membershipType
                        }
                    });
                return s.map(e => [e, n(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, n(421439).y4)({
                    store: (0, n(993077).dp)(i, e.user_id),
                    operation: t,
                    transaction: o
                })), d.map(e => [e, n(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, n(421439).y4)({
                    store: (0, n(993077).Ts)(i, e.bot_id),
                    operation: t,
                    transaction: o
                })), o.postSubmitCallbacks.push(async o => {
                    var l, c;
                    let u = r.map(e => (0, n(283161).z)(e));
                    n(594311).Ah({
                        status: o ? "fail" : "success",
                        location: null == a ? void 0 : a.pagePermissionChangeLocation,
                        permission_items: u
                    }), s.forEach(e => {
                        n(594311).sY({
                            spaceUser: e,
                            from: null == a ? void 0 : a.from,
                            status: o ? "fail" : "success"
                        })
                    }), d.forEach(e => {
                        n(594311).W7({
                            spaceBot: e,
                            from: null == a ? void 0 : a.from,
                            status: o ? "fail" : "success"
                        })
                    }), null != (l = e.metadata) && l.metric && n(680007).default.DO_NOT_USE_measureLegacy(null == (c = e.metadata) ? void 0 : c.metric, {}), o || await n(371151).nO({
                        environment: t,
                        spaceStore: i
                    })
                }), !0
            }
        },
        76790: (e, t, n) => {
            n.d(t, {
                a: () => o
            });

            function o(e) {
                let {
                    collectionSettingsStore: t,
                    item: n,
                    hideSettingsPopup: o
                } = e, i = t.state;
                t.setState({ ...i,
                    open: !0,
                    stack: [...i.stack, n],
                    ...void 0 !== o ? {
                        hideSettingsPopup: o
                    } : {}
                })
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                integrationIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                i = (0, n(104509).wt)("integration", o, "default")
        },
        95783: (e, t, n) => {
            n.d(t, {
                w: () => o
            }), n(16280), n(18107), n(967357), n(898992), n(737550);

            function o(e) {
                var t, o, i, r, a, l;
                let {
                    environment: s,
                    createBlockItem: d,
                    from: c,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: m
                } = e;
                if (!d.templateRootBlockId || !d.createTemplate) throw Error("Invalid createBlock item.");
                let f = (m.length > 0 ? m[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = n(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    g = f ? s.idCreator.getSpaceIdCreatorSync(f) : void 0,
                    h = m.some(e => (0, n(398346).l)(e)),
                    v = d.createTemplate(s),
                    {
                        targetBlockStore: b
                    } = (0, n(963771).initializeTemplate)({
                        environment: s,
                        sourceBlockId: d.templateRootBlockId,
                        targetBlockPointer: (0, n(295447).zP)({
                            environment: s,
                            table: n(832375).evP,
                            spaceId: f
                        }),
                        sourceBlockSubtree: (0, n(412951).partialRecordMapToRecordMap)(v),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !h,
                        spaceIdCreator: g
                    });
                null == (o = d.postCreateCallback) || o.call(d, b, s, p);
                let [y] = m;
                if (n(205103).eY({
                        environment: s,
                        store: b,
                        transaction: p,
                        previousStore: y
                    }), c && d.blockType) {
                    let e, t, o, u, p = d.collectionViewType,
                        f = 0 !== m.length ? null == (i = m[0]) ? void 0 : i.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let n = null == (r = b.getCollectionViewStores()) ? void 0 : r.at(0);
                        e = null == n || null == (a = n.getChartConfig()) ? void 0 : a.type, t = null == n ? void 0 : n.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (l = b.getCollectionViewStores()) ? void 0 : l.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        o = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: g,
                        ownedCollectionCount: h,
                        linkedCollectionCount: v
                    } = (0, n(633171).P)(b, {
                        skipPages: !1
                    }), y = {
                        from: c,
                        collection_id: g,
                        owned_collection_count: h,
                        linked_collection_count: v,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: d.isToggleable,
                        automation_id: b.getAutomationId(),
                        new_page_id: "page" === d.blockType ? b.id : void 0,
                        creating_block_id: b.id,
                        parent_collection_id: f,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: o,
                        view_id: u
                    }, S = d.blockType;
                    n(549960).tP(S) ? n(549960).vH(s, { ...y,
                        type: S,
                        collection_id: g || ""
                    }) : n(549960).vH(s, { ...y,
                        type: S
                    })
                }
                return b
            }
        },
        100246: (e, t, n) => {
            n.d(t, {
                g: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let t = (0, n(533992).v3)();
                return (0, o.jsx)(n(95582).A, {
                    focused: !1,
                    href: e.href,
                    external: !0,
                    onClick: () => (0, n(150782).F)(t, {
                        from: e.analyticsFrom
                    }),
                    icon: (0, o.jsx)(n(16275).I, {
                        icon: n(80094).questionMarkCircleIcon,
                        colorVariant: "secondary"
                    }),
                    title: (0, o.jsx)(n(111010).D, {
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        children: e.title
                    }),
                    style: n(699422).RC
                })
            }
        },
        104335: (e, t, n) => {
            n.d(t, {
                AU: () => i,
                CF: () => a,
                rj: () => r,
                y9: () => o
            });
            let o = 24,
                i = -3,
                r = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        padding: 2,
                        background: n(632079).Tj.background.primary,
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        boxShadow: n(632079).Tj.shadow.outline.md,
                        pointerEvents: "auto"
                    }
                };

            function a(e) {
                return {
                    background: n(632079).Tj.background.primary,
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    borderRadius: 6,
                    boxSizing: "border-box",
                    boxShadow: n(710575).$.shadow[e].base.sm,
                    padding: 2
                }
            }
        },
        128743: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightLeftIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                i = (0, n(104509).wt)("arrowStraightLeft", o, "default")
        },
        138308: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowBranchIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.48 3.92 13.04 12.85",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.483 4.55c0-.345.28-.625.625-.625h3.5a.625.625 0 1 1 0 1.25H5.617L8.86 8.42A6 6 0 0 1 10 10.007a6 6 0 0 1 1.14-1.588l3.243-3.244h-1.99a.625.625 0 1 1 0-1.25h3.5c.344 0 .624.28.624.625v3.5a.625.625 0 0 1-1.25 0V6.06l-3.243 3.244a4.78 4.78 0 0 0-1.399 3.358v4.108h-1.25v-4.108a4.78 4.78 0 0 0-1.398-3.358L4.733 6.059V8.05a.625.625 0 1 1-1.25 0z"
                    })
                },
                i = (0, n(104509).wt)("arrowBranch", o, "default")
        },
        150945: (e, t, n) => {
            function o(e) {
                let t, {
                        environment: o,
                        createBlockItem: i,
                        selection: r,
                        transaction: a,
                        analyticsFrom: l,
                        preventSetSelection: s
                    } = e,
                    d = n(584265).default.getCurrentRecordCache(),
                    c = new(n(303541)).UF({
                        environment: o,
                        userFlow: (null == i ? void 0 : i.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: l,
                        succeedOnEnqueue: !0
                    });
                if ((0, n(194020).E)(o, (0, n(974410).f)(r[0])) && i && d) {
                    let e = n(95783).w({
                        environment: o,
                        createBlockItem: i,
                        transaction: a,
                        inMemoryRecordCache: d,
                        from: l,
                        selection: r
                    });
                    c.track(e.pointer, a), t = (0, n(210318).L)({
                        environment: o,
                        blocksToInsert: [e],
                        target: r,
                        transaction: a,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: s
                    })[0]
                } else c.fail("invalid_state");
                return t
            }

            function i(e) {
                let t, {
                        environment: o,
                        createBlockItem: i,
                        selection: r,
                        transaction: a,
                        analyticsFrom: l,
                        preventSetSelection: s
                    } = e,
                    d = n(584265).default.getCurrentRecordCache();
                if ((0, n(194020).E)(o, (0, n(974410).f)(r[0])) && i && d) {
                    let e = n(95783).w({
                        environment: o,
                        createBlockItem: i,
                        transaction: a,
                        inMemoryRecordCache: d,
                        from: l,
                        selection: r
                    });
                    t = (0, n(199894).t)({
                        environment: o,
                        blocks: [e],
                        selection: r,
                        transaction: a,
                        preventSetSelection: s
                    })[0]
                }
                return t
            }

            function r(e) {
                let {
                    environment: t,
                    selection: i,
                    transaction: r
                } = e, a = o({ ...e,
                    preventSetSelection: !0
                });
                if (a) {
                    var l;
                    (0, n(270819).x)({
                        environment: t,
                        insertedStores: [a],
                        isCreated: !0
                    });
                    let e = n(708929).Uv.getMode(a);
                    if ("suggest" === e) {
                        let e = (0, n(714577).R)(t, r, a);
                        (0, n(132993).t)(r, a, {
                            id: n(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, n(941538).c)({
                            environment: t,
                            transaction: r,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [a.id]
                        })
                    }
                    "suggest" === e && null != (l = a.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && l.isCommentOnly() || (0, n(5556).u)({
                        transaction: r,
                        blocks: i
                    })
                }
                return a
            }

            function a(e) {
                let {
                    blocks: t,
                    transaction: i,
                    environment: r,
                    skipAnalytics: a
                } = e, l = o({
                    environment: r,
                    selection: t,
                    createBlockItem: n(992140).ry.text,
                    analyticsFrom: a ? void 0 : "text_insert_below",
                    transaction: i
                });
                return l && n(374176).default.afterNextFlush(() => {
                    (0, n(464515).z)({
                        environment: r,
                        blockStore: l,
                        insertedTextBlockLocation: "below",
                        editSelection: n(182553).h,
                        getRectFromStore: n(240414).T.getRectFromStore.bind(n(240414).T)
                    })
                }), l
            }

            function l(e) {
                let {
                    blocks: t,
                    transaction: o,
                    environment: r,
                    skipAnalytics: a
                } = e, l = i({
                    environment: r,
                    selection: t,
                    createBlockItem: n(992140).ry.text,
                    analyticsFrom: a ? void 0 : "text_insert_below",
                    transaction: o
                });
                return l && n(374176).default.afterNextFlush(() => {
                    (0, n(464515).z)({
                        environment: r,
                        blockStore: l,
                        insertedTextBlockLocation: "above",
                        editSelection: n(182553).h,
                        getRectFromStore: n(240414).T.getRectFromStore.bind(n(240414).T)
                    })
                }), l
            }
            n.r(t), n.d(t, {
                insertBlockAbove: () => i,
                insertBlockAndEdit: () => r,
                insertBlockBelow: () => o,
                insertTextAbove: () => l,
                insertTextBelow: () => a
            })
        },
        152208: (e, t, n) => {
            n.r(t), n.d(t, {
                eyeIcon: () => r,
                iconDefinition: () => i
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.96 4.19 18.07 11.62",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.135 3.303l-.005.17a3.305 3.305 0 0 1-3.3 3.137l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17A3.307 3.307 0 0 1 10 6.69zm-.17 2.2a1.104 1.104 0 0 0 0 2.207 1.103 1.103 0 0 0 0-2.207"
                        }), (0, o.jsx)("path", {
                            d: "M10 4.194c3.878 0 7.26 2.075 8.862 5.127l.073.163c.126.333.126.7 0 1.033l-.073.163c-1.602 3.052-4.984 5.126-8.862 5.126-3.757 0-7.049-1.946-8.707-4.843l-.156-.283a1.46 1.46 0 0 1 0-1.359l.156-.283C2.95 6.141 6.243 4.194 10 4.194m0 1.251c-3.33 0-6.196 1.724-7.622 4.214l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214 3.437 0 6.38-1.837 7.756-4.457l.018-.048a.2.2 0 0 0 0-.1l-.018-.049C16.38 7.282 13.437 5.445 10 5.445"
                        })]
                    })
                },
                r = (0, n(104509).wt)("eye", i, "default")
        },
        179239: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(898992), n(354520), n(581454);
            var o = n(296540);
            let i = {
                diffHelpers: new(n(815048)).O2("async-diffs", async () => await Promise.all([n.e(16471), n.e(79254)]).then(n.bind(n, 719829)))
            };
            var r = n(474848);
            let a = (0, n(109939).YK)({
                intermediateChanges: {
                    id: "editPropertyDiff.intermediateChanges",
                    defaultMessage: "{count, plural, one {# change} other {# changes}}"
                }
            });

            function l(e) {
                let t = n(9247).QP(e.propertySchema);
                switch (t) {
                    case "text":
                        return (0, r.jsx)(s, { ...e
                        });
                    case "relation":
                        return (0, r.jsx)(u, {
                            propertySchema: e.propertySchema,
                            beforeValue: e.beforeValue,
                            afterValue: e.afterValue,
                            rootStore: e.rootStore
                        });
                    case "arrow":
                        return (0, r.jsx)(m, { ...e
                        });
                    default:
                        (0, n(722371).HB)(t)
                }
            }

            function s(e) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(482170).l)(c(e.beforeValue.value)),
                    a = (0, n(482170).l)(c(e.afterValue.value)),
                    l = (0, n(815048).fJ)(i.diffHelpers).value,
                    [s] = (0, n(97668).Yb)(async () => {
                        if (l) return await l.diffTextValueAsync({
                            environment: t,
                            from: "textPropertyDiff",
                            before: o,
                            after: a,
                            insertionAnnotation: [n(247438).Ifu.Inserted],
                            deletionAnnotation: [n(247438).Ifu.Deleted]
                        })
                    }, [t, o, a, l], {});
                if (void 0 === s.value) return (0, r.jsx)(d, {});
                let u = {
                    value: s.value,
                    spaceId: e.beforeValue.spaceId
                };
                return (0, r.jsx)(n(917659).A, {
                    value: u,
                    propertySchema: e.propertySchema,
                    rootStore: e.rootStore
                })
            }
            let d = o.memo(function() {
                return (0, r.jsx)(n(795830).P, {
                    style: {
                        display: "inline-block",
                        verticalAlign: "baseline",
                        width: "60%",
                        height: 14,
                        borderRadius: 4
                    }
                })
            });

            function c(e) {
                return n(247438).JG8(e, 1e3, [n(247438).Ey_("…")])
            }

            function u(e) {
                let {
                    beforeValue: t,
                    afterValue: o,
                    propertySchema: i,
                    rootStore: a
                } = e, l = (0, n(682985).K8)(() => n(561872).tH({
                    beforeValue: t.value,
                    afterValue: o.value,
                    propertySchema: i,
                    getRecordModel: a.getRecordModel,
                    getBlockTitle: e => n(970831).B.createChildStore(a, {
                        table: n(832375).evP,
                        id: e.id
                    }).getPropertyValue("title")
                }), [t, o, i, a]);
                return (0, r.jsx)(n(917659).A, {
                    value: {
                        value: l,
                        spaceId: t.spaceId
                    },
                    propertySchema: {
                        type: "title",
                        name: "Title"
                    },
                    rootStore: a
                })
            }
            let p = {
                display: "inline-flex",
                alignItems: "center",
                overflow: "hidden",
                flexWrap: "wrap",
                rowGap: 6
            };

            function m(e) {
                let t = e.intermediateChanges && e.intermediateChanges.length > 0;
                return (0, r.jsxs)("div", {
                    style: p,
                    children: [(0, r.jsx)(n(917659).A, {
                        value: e.beforeValue,
                        propertySchema: e.propertySchema,
                        rootStore: e.rootStore
                    }), t ? (0, r.jsx)(v, {
                        intermediateChanges: e.intermediateChanges,
                        propertySchema: e.propertySchema,
                        rootStore: e.rootStore,
                        latestTimestamp: e.latestIntermediateTimestamp
                    }) : (0, r.jsx)(g, {}), (0, r.jsx)(n(917659).A, {
                        value: e.afterValue,
                        propertySchema: e.propertySchema,
                        rootStore: e.rootStore
                    })]
                })
            }
            let f = {
                padding: "0px 6px"
            };

            function g() {
                return (0, r.jsx)("div", {
                    style: f,
                    children: (0, r.jsx)(n(16275).I, {
                        icon: n(491469).arrowChevronSingleRightSmallIcon,
                        size: "xs",
                        colorVariant: "tertiary"
                    })
                })
            }
            let h = {
                container: {
                    padding: "4px 8px"
                },
                tooltipContent: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                },
                tooltipTitle: {
                    fontWeight: n(699422).Wy.medium,
                    maxWidth: 264,
                    ...n(699422).RC
                },
                tooltipBody: {
                    color: n(632079).Tj.text.secondary,
                    display: "flex",
                    flexDirection: "row"
                },
                tooltipSeperatorDot: {
                    margin: "0px 4px"
                }
            };

            function v(e) {
                let t = (0, n(109939).tz)(),
                    o = (0, n(682985).K8)(() => {
                        let o = (0, n(714350).P)();
                        return e.intermediateChanges.map(i => {
                            let r = (0, n(458230).r4)({
                                textValue: i.value.value,
                                getRecordModel: e.rootStore.getRecordModel,
                                userTimeZone: o,
                                intl: t,
                                disableAnnotationPrefix: !0,
                                deterministic: !0
                            });
                            return "date" === e.propertySchema.type ? r : r.replace(/,/g, " / ")
                        }).filter(Boolean).join(", ") || ""
                    }, [e.intermediateChanges, e.rootStore.getRecordModel, e.propertySchema.type, t]);
                return (0, r.jsx)(n(51831).m, {
                    placement: "top",
                    content: t => (0, r.jsxs)("div", { ...t,
                        style: h.tooltipContent,
                        children: [(0, r.jsx)("div", {
                            style: h.tooltipTitle,
                            children: o
                        }), (0, r.jsxs)("div", {
                            style: h.tooltipBody,
                            children: [(0, r.jsx)(n(109939).sA, { ...a.intermediateChanges,
                                values: {
                                    count: e.intermediateChanges.length
                                }
                            }), (0, r.jsx)("div", {
                                style: h.tooltipSeperatorDot,
                                children: "•"
                            }), (e => {
                                if (e) return (0, n(799843).nl)(e, {
                                    useCompactFormat: !0
                                })
                            })(e.latestTimestamp)]
                        })]
                    }),
                    children: e => (0, r.jsx)("div", { ...e,
                        style: h.container,
                        children: (0, r.jsx)(n(16275).I, {
                            icon: n(758737).R,
                            size: "xs",
                            colorVariant: "tertiary"
                        })
                    })
                })
            }
        },
        199894: (e, t, n) => {
            n.d(t, {
                t: () => o
            }), n(16280), n(898992), n(672577), n(581454);

            function o(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: i,
                    preventSetSelection: r
                } = e, {
                    blocks: a
                } = e, l = (0, n(385941).Z)();
                if (!l) throw Error("No root store.");
                if (o.length > 0) {
                    let e = o[0],
                        l = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = l.props.onInsertAbove({
                        insertStores: a,
                        transaction: i
                    });
                    return r || (0, n(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = l.getContentStore(),
                        o = a.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: i
                        }).childStore);
                    return r || (0, n(854924).t)({
                        environment: t,
                        stores: o
                    }), o
                }
            }
        },
        219083: (e, t, n) => {
            function o(e, t) {
                let o = n(371562).create({
                    arrays: {
                        detectMove: !1,
                        includeValueOnMove: !0
                    }
                }).diff(e, t);
                if (!o) return {
                    beforeOps: {},
                    removeOps: new Set
                };
                let i = [],
                    r = [];
                for (let e in o) "_t" !== e && ("_" === e[0] ? i.push(parseInt(e.slice(1), 10)) : 1 === o[e].length && r.push({
                    index: parseInt(e, 10),
                    value: o[e][0]
                }));
                let a = {},
                    l = new Set,
                    s = [...e];
                i = i.sort((e, t) => e - t);
                for (let e = i.length - 1; e >= 0; e--) {
                    let t = i[e],
                        n = s.splice(t, 1)[0];
                    l.add(n)
                }
                r = r.sort((e, t) => e.index - t.index);
                for (let e = 0; e < r.length; e++) {
                    let t = r[e];
                    a[t.value] = s[t.index], s.splice(t.index, 0, t.value)
                }
                return {
                    beforeOps: a,
                    removeOps: l
                }
            }
            n.d(t, {
                i: () => o
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(371562)
        },
        246467: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                a = function(e) {
                    let t, a = (0, n(109939).tz)(),
                        s = (0, n(75272).I)(),
                        d = (0, o.useRef)(),
                        c = (0, o.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let o = n(25825).q8(t, (0, n(714350).P)());
                            if (!o) return;
                            let i = o.valueOf(),
                                r = i - Date.now();
                            r < 0 || r > n(627179).nD || d.current && d.current.timestamp === i || (d.current && clearTimeout(d.current.timer), d.current = {
                                timestamp: i,
                                timer: setTimeout(() => s("DateBox", "DateBox/createReminderTimer"), r)
                            })
                        }, [s, e.value]),
                        u = (0, o.useCallback)(() => {
                            d.current && (clearTimeout(d.current.timer), d.current = void 0)
                        }, []);
                    (0, o.useEffect)(() => {
                        c()
                    }, [c]), (0, o.useEffect)(() => () => {
                        u()
                    }, [u]);
                    let {
                        value: p,
                        withComma: m
                    } = e, f = (0, n(682985).K8)(() => p ? (0, n(850640).ZF)({
                        value: p,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, n(714350).P)(),
                        allowRelativeDates: !0,
                        intl: a,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: n(132315).x1
                    }) : void 0, [a, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, p]);
                    if (!p) return null;
                    let g = n(25825).AA(p, (0, n(714350).P)(), n(849917).locale);
                    (0, n(943003).Lh)(p) && (t = n(25825).Zs(p, (0, n(714350).P)()) ? {
                        color: n(632079).Tj.red.text.accentPrimary
                    } : {
                        color: n(632079).Tj.blue.text.accentPrimary
                    });
                    let h = (0, i.jsxs)(i.Fragment, {
                        children: [f, (0, n(943003).Lh)(p) ? (0, i.jsx)(n(16275).I, {
                            icon: n(848194).alarmSmallIcon,
                            style: r
                        }) : void 0, m ? ", " : null]
                    });
                    return e.disableTooltip ? (0, i.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: h
                    }) : (0, i.jsx)(n(51831).m, {
                        content: () => (0, i.jsxs)(i.Fragment, {
                            children: [e.tooltipHeader, (0, i.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: n(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [l(g.start), g.end ? ` → ${l(g.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: n => (0, i.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...n,
                            children: h
                        })
                    })
                };

            function l(e) {
                return (0, n(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        250943: (e, t, n) => {
            n.d(t, {
                E: () => o
            }), n(581454);

            function o(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, n(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let o = (0, n(247438).RQ)(e.getValue()),
                        i = (0, n(247438).xbM)(o, t),
                        {
                            tokensInsideRange: r
                        } = (0, n(247438).AI5)(o, i.startIndex, i.endIndex);
                    return (0, n(536614).r4)(r, e)
                }).join("\n\n")
            }
        },
        260682: (e, t, n) => {
            n.d(t, {
                $: () => i
            });
            let o = ["button", "formula", "auto_increment_id", "file"];

            function i(e) {
                let {
                    propertyType: t,
                    propertySchema: i,
                    allowAIProperty: r
                } = e, a = (0, n(722371).O9)(i) && (0, n(9247).$M)(i) && (0, n(722371).O9)((0, n(9247).om)(i)), l = (0, n(722371).O9)((0, n(561872).Dz)(i));
                return o.includes(t) || !r && a || l
            }
        },
        274749: (e, t, n) => {
            n.d(t, {
                i: () => o
            });

            function o(e) {
                var t;
                return null == (t = e.getSetting("getting_started_templates")) ? void 0 : t.default[0].page_id
            }
        },
        280996: (e, t, n) => {
            n.d(t, {
                b: () => r,
                T: () => a()
            }), n(581454);
            var o = n(296540),
                i = n(474848);
            let r = o.memo(function(e) {
                let {
                    store: t = n(2009).w
                } = e, r = (0, n(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, i.jsx)(i.Fragment, {
                    children: r.map(e => {
                        let {
                            id: t,
                            internalRenderModal: n,
                            isOpen: r
                        } = e, a = n(r);
                        return (0, i.jsx)(o.Fragment, {
                            children: a
                        }, t)
                    })
                })
            });
            var a = () => n(796123)
        },
        283161: (e, t, n) => {
            n.d(t, {
                z: () => o
            });

            function o(e) {
                return "user" === e.type ? {
                    type: "user_permission",
                    role: (0, n(729052).ps)(e.membershipType),
                    user_id: e.userId,
                    invite_id: e.inviteId
                } : "bot" === e.type ? {
                    type: "bot_permission",
                    role: (0, n(611042).rf)(e.membershipType),
                    bot_id: e.botId
                } : void(0, n(722371).HB)(e)
            }
        },
        287513: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            let o = /[a-zA-Z0-9'_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+[a-zA-Z0-9'_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff-]*|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

            function i(e) {
                let t = e.match(o),
                    n = 0;
                if (!t) return 0;
                for (let e = 0; e < t.length; e++) t[e].charCodeAt(0) >= 19968 ? n += t[e].length : n += 1;
                return n
            }
        },
        308256: (e, t, n) => {
            n.d(t, {
                o: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let {
                    group: t
                } = e, i = e.size ? ? 20, r = (0, n(109939).tz)(), a = (0, n(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), l = (0, n(682985).K8)(() => (0, n(95384).n)({
                    intl: r,
                    permissionGroupModel: t
                }), [r, t]);
                return (0, o.jsx)("div", {
                    children: a ? (0, o.jsx)(n(569553).B6, {
                        disabled: !0,
                        size: i,
                        icon: a,
                        isEmptyPage: !1,
                        title: l
                    }) : (0, o.jsx)(n(391343).A, {
                        size: i
                    })
                })
            }
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => m,
                KF: () => p,
                LG: () => l,
                Zf: () => d,
                yD: () => s
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                a = o.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: a,
                    preventCaptureSpacebarWhenEmpty: l,
                    ...s
                }, d) {
                    let {
                        left: c,
                        right: u,
                        inputLeft: p,
                        inputRight: m,
                        inputRightStyle: f,
                        disableInput: g,
                        inputOuterStyle: v,
                        rightMobileEditLabel: y,
                        mobileKeyboardOnDismiss: S,
                        style: x,
                        value: w,
                        onChange: A,
                        autosize: I,
                        autosizeMinHeight: k,
                        autosizeMaxHeight: C,
                        customElementAttributes: M,
                        disabled: _,
                        format: T,
                        id: j,
                        placeholder: B,
                        type: D,
                        autoFocus: P,
                        focus: R,
                        focusInitial: E,
                        focusAfterAnimation: V,
                        forceShowClearButton: z,
                        ignoreKeyboardMode: N,
                        inputElementAttributes: F,
                        inputStyle: L,
                        isRightLastElementOfInput: U,
                        maxlength: O,
                        min: H,
                        max: K,
                        selectAll: W,
                        showClearButton: G,
                        suppressFocusRing: Y,
                        textarea: $,
                        textareaSubmitOnEnter: Z,
                        onBlur: X,
                        onCancel: Q,
                        onClearButtonClick: q,
                        onClick: J,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...eo
                    } = s, [ei, er] = (0, o.useState)(() => !!(R || E));
                    (0, o.useEffect)(() => {
                        void 0 !== R && er(R)
                    }, [R]);
                    let ea = e ? void 0 : n(763230).D_,
                        el = !t || w.length > 0 ? n(763230).D_ : void 0,
                        es = a ? void 0 : n(763230).D_,
                        ed = !l || w.length > 0 ? n(763230).D_ : void 0,
                        ec = (0, n(649476).Tf)(),
                        eu = (0, o.useContext)(n(649476).xu),
                        ep = (0, o.useRef)(null),
                        em = {
                            value: w,
                            onChange: A,
                            autosize: I,
                            autosizeMinHeight: k,
                            autosizeMaxHeight: C,
                            customElementAttributes: M,
                            disabled: _,
                            format: T,
                            id: j,
                            placeholder: B,
                            type: D,
                            autoFocus: P,
                            focus: R,
                            focusInitial: E,
                            focusAfterAnimation: V,
                            forceShowClearButton: z,
                            ignoreKeyboardMode: N,
                            inputElementAttributes: F,
                            inputStyle: L,
                            isRightLastElementOfInput: U,
                            maxlength: O,
                            min: H,
                            max: K,
                            selectAll: W,
                            showClearButton: G,
                            suppressFocusRing: Y,
                            textarea: $,
                            textareaSubmitOnEnter: Z,
                            onBlur: X,
                            onCancel: Q,
                            onClearButtonClick: q,
                            onClick: J,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, i.jsx)(n(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: n(763230).D_,
                        onTab: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: es,
                        onCopy: es,
                        onPaste: es,
                        onKeypress: n(763230).D_,
                        onLeft: ea,
                        onRight: ea,
                        onDelete: el,
                        onBackspace: el,
                        onSpace: ed,
                        children: n(986939).A.isMobile ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(n(636518).Ay, {
                                ref: d,
                                ...eo,
                                itemMarginLeft: ec ? 8 : void 0,
                                style: x,
                                title: (0, i.jsx)(b, {
                                    ref: ep,
                                    left: c,
                                    right: u,
                                    inputLeft: p,
                                    inputRight: m,
                                    inputRightStyle: f,
                                    disableInput: g,
                                    inputOuterStyle: v,
                                    rightMobileEditLabel: y,
                                    isFocused: ei,
                                    setIsFocused: er,
                                    ...em
                                })
                            }), (0, i.jsx)(n(368678).P, {
                                show: ei && eu.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: S,
                                inputRef: ep
                            })]
                        }) : (0, i.jsx)(n(636518).Ay, {
                            ref: d,
                            ...eo,
                            left: c,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, i.jsx)(h, {
                                ref: ep,
                                disableInput: g,
                                inputOuterStyle: v,
                                inputRight: m,
                                inputRightStyle: f,
                                inputLeft: p,
                                ...em
                            }),
                            style: { ...r,
                                ...x
                            }
                        })
                    })
                }),
                l = 30,
                s = 28;

            function d(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: n(632079).Tj.icon.secondary,
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let c = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                u = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, n(533992).WS)(),
                    o = (0, n(960253).I)(() => ({
                        outlineButton: { ...(0, n(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: n(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? n(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, i.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...o.outlineButton,
                        ...e.style,
                        height: t ? l : s,
                        width: t ? l : s
                    },
                    hoveredStyle: c.outlineButtonHovered,
                    pressedStyle: o.outlineButtonPressed
                })
            }
            let m = a,
                f = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function g({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let r = (0, n(533992).v3)(),
                    a = (0, o.useCallback)(e => {
                        e.preventDefault();
                        let o = t.current;
                        o && (0, n(862215).G)(r, o)
                    }, [r, t]);
                return (0, i.jsx)(n(64960).Ay, {
                    onClick: a,
                    style: f.style0,
                    children: e
                })
            }
            let h = o.forwardRef(function(e, t) {
                    let {
                        disabled: o,
                        disableInput: r,
                        inputOuterStyle: a,
                        inputRight: l,
                        inputRightStyle: s,
                        inputLeft: d,
                        min: c,
                        textarea: u,
                        ...p
                    } = e;
                    return (0, i.jsx)(n(36481).p, { ...p,
                        ref: t,
                        disabled: o || r,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...a
                        },
                        left: d,
                        right: l,
                        rightStyle: s,
                        min: c,
                        textarea: u
                    })
                }),
                v = {
                    fontSize: 16
                },
                b = o.forwardRef(function(e, t) {
                    let {
                        left: r,
                        right: a,
                        inputLeft: l,
                        inputRight: s,
                        inputRightStyle: d,
                        disableInput: c,
                        inputOuterStyle: u,
                        rightMobileEditLabel: p,
                        isFocused: m,
                        setIsFocused: f,
                        disabled: h,
                        showClearButton: b,
                        onBlur: y,
                        onFocus: S,
                        ...x
                    } = e, w = (0, o.useCallback)(e => {
                        f(!1), y && y(e)
                    }, [y, f]), A = (0, o.useCallback)(e => {
                        f(!0), S && S(e)
                    }, [S, f]), I = (0, o.useRef)(null), k = (0, n(421573).A)(I, t), C = p && !m ? (0, i.jsx)(g, {
                        rightMobileEditLabel: p,
                        inputRef: I
                    }) : null;
                    return (0, i.jsx)(n(36481).p, { ...x,
                        ref: k,
                        format: "transparent",
                        style: { ...v,
                            ...u
                        },
                        onFocus: A,
                        onBlur: w,
                        showClearButton: !1 !== b,
                        disabled: h || c,
                        left: l || r,
                        right: C || s || a,
                        rightStyle: d
                    })
                })
        },
        322095: (e, t, n) => {
            function o(e, t) {
                return e.map(e => i(e, t))
            }

            function i(e, t) {
                var o, i;
                let r, {
                        nameMessage: a,
                        descriptionMessage: l,
                        ...s
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (o = e, i = t, r = (0, n(599412).H)(i), o.sources[r] || o.sources[n(599412).q]);
                return { ...s,
                    id: a.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(a),
                    description: l ? t.formatMessage(l) : void 0
                }
            }
            n.d(t, {
                B: () => i,
                o: () => o
            }), n(581454)
        },
        325336: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUTurnUpLeftIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.72 15.76 12.16",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.592 4.792a.625.625 0 1 0-.884-.884l-4.4 4.4a.625.625 0 0 0 0 .884l4.4 4.4a.625.625 0 1 0 .884-.884L4.259 9.375H14a2.625 2.625 0 0 1 0 5.25h-1.42a.625.625 0 1 0 0 1.25H14a3.875 3.875 0 0 0 0-7.75H4.259z"
                    })
                },
                i = (0, n(104509).wt)("arrowUTurnUpLeft", o, "default")
        },
        329171: (e, t, n) => {
            n.d(t, {
                n: () => o
            });

            function o(e) {
                return (0, n(862085).Jh)(e) || (0, n(862085).K1)(e)
            }
        },
        346596: (e, t, n) => {
            n.d(t, {
                L: () => i,
                k: () => r
            });
            var o = n(296540);

            function i(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: i
                } = (0, n(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: n(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, o.useMemo)(() => {
                    if (t && i) return n(360851).N.createChildStore(i, {
                        table: n(43296).C,
                        id: t,
                        spaceId: i.id
                    })
                }, [t, i])
            }

            function r(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    o = n(728372).AppStoreSidebarSpaceStore.state;
                if (t && o) return n(360851).N.createChildStore(o, {
                    table: n(43296).C,
                    id: t,
                    spaceId: o.id
                })
            }
        },
        349806: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowTurnDownLeftIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 4.12 14.76 12.16",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.63 4.75a.625.625 0 1 1 1.25 0v5a2.125 2.125 0 0 1-2.125 2.125H4.264l3.333 3.333a.625.625 0 0 1-.884.884l-4.4-4.4a.625.625 0 0 1 0-.884l4.4-4.4a.625.625 0 0 1 .884.884l-3.333 3.333h10.49a.875.875 0 0 0 .876-.875z"
                    })
                },
                i = (0, n(104509).wt)("arrowTurnDownLeft", o, "default")
        },
        356622: (e, t, n) => {
            n.d(t, {
                V: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    errors: i
                } = e, r = (0, n(274749).i)(o);
                if (!r) return;
                let a = o.getSetting("getting_started_template_errors");
                (0, n(377796).createAndCommit)({
                    userAction: "spaceActions.setGettingStartedTemplateError",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    canUndo: !0,
                    perform: e => {
                        (0, n(818116).R)(o, e, {
                            getting_started_template_errors: { ...a,
                                [r]: i
                            }
                        })
                    }
                })
            }
        },
        356938: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightDownIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.37 12.06 15.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10.625 3a.625.625 0 1 0-1.25 0v12.491l-4.333-4.333a.625.625 0 1 0-.884.884l5.4 5.4a.62.62 0 0 0 .884 0l5.4-5.4a.625.625 0 1 0-.884-.884l-4.333 4.333z"
                    })
                },
                i = (0, n(104509).wt)("arrowStraightDown", o, "default")
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => a
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function a(e) {
                let {
                    onDismiss: t,
                    inputRef: a
                } = e, l = (0, n(533992).Y0)(), s = (0, o.useRef)(null), d = l.isMobileNative && l.isIOS, c = d && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => s.current,
                    isShown: () => c
                }), [c]);
                let u = (0, n(571354).n)(),
                    p = (0, o.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [a, t]);
                if (!d) return null;
                let m = c ? -(n(247800).j + u) : 0;
                return (0, i.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, i.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${m}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: s,
                        children: (0, i.jsx)(n(64960).Ay, {
                            style: r.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        376921: (e, t, n) => {
            n.d(t, {
                Ay: () => s,
                mI: () => r,
                vb: () => a
            }), n(296540);
            var o = n(474848);
            let i = (0, n(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                r = n(696654).NY,
                a = {
                    [n(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: n(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [n(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: n(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [n(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: n(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [n(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: n(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [n(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: n(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [n(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: n(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [n(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: n(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                l = {
                    style0: { ...n(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function s({
                avatarSize: e,
                format: t,
                isSingle: r,
                onClickRemove: d,
                renderAvatar: c,
                showRemoveButton: u,
                shouldShrink: p,
                style: m,
                title: f
            }) {
                let g = (0, n(109939).tz)(),
                    {
                        height: h,
                        fontSize: v,
                        margin: b,
                        marginEditState: y,
                        closeIconSize: S,
                        avatarSize: x
                    } = a[t],
                    w = (0, n(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!p,
                            minWidth: 0,
                            height: h,
                            borderRadius: 6,
                            fontSize: v,
                            lineHeight: "120%",
                            margin: r ? 0 : u ? y : b,
                            ...m
                        }
                    }), [v, h, r, b, y, p, u, m]);
                return (0, o.jsxs)("div", {
                    style: w.root,
                    children: [null == c ? void 0 : c(e ? ? x), (0, o.jsx)("div", {
                        className: "notranslate",
                        style: l.style0,
                        children: f
                    }), u ? (0, o.jsx)(n(64960).Ay, {
                        ariaLabel: void 0 !== f ? g.formatMessage(i.removeTokenLabel, {
                            title: f
                        }) : g.formatMessage(i.removeTokenLabelGeneric),
                        onClick: d,
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
                        children: (0, o.jsx)(n(16275).I, {
                            icon: n(519529).xMarkFillSmallIcon,
                            size: S,
                            style: l.style1
                        })
                    }) : null]
                })
            }
        },
        391343: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let t = (0, n(47187).E)(e);
                return (0, o.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, o.jsx)(n(16275).I, {
                        icon: n(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        397900: (e, t, n) => {
            n.r(t), n.d(t, {
                ellipsisIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                i = (0, n(104509).wt)("ellipsis", o, "default")
        },
        406531: (e, t, n) => {
            n.d(t, {
                l: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 2.29 11.93 10.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.165 12.75a.8.8 0 0 0 .69-1.203L8.692 2.693a.8.8 0 0 0-1.382 0l-5.165 8.854a.8.8 0 0 0 .691 1.203z"
                    })
                },
                i = (0, n(104509).wt)("arrowCaretUpFillSmall", o, "fillSmall")
        },
        408033: (e, t, n) => {
            n.d(t, {
                F: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                marginTop: 4
            };

            function r(e) {
                let {
                    role: t
                } = e, r = (0, n(109939).tz)(), a = (0, n(625921).I2)(t);
                return (0, o.jsx)(n(636518).Ay, { ...e,
                    title: (0, o.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: r.formatMessage((0, n(579825).sK)(t, void 0).label)
                    }),
                    shouldWrapCaption: !0,
                    style: n(986939).A.isMobile ? {
                        padding: "12px 4px"
                    } : {
                        padding: 4,
                        marginTop: 2,
                        marginBottom: 2
                    },
                    captionStyle: i,
                    caption: (0, o.jsx)("div", {
                        children: a
                    })
                })
            }
        },
        420459: (e, t, n) => {
            n.d(t, {
                G4: () => a,
                gu: () => i,
                rs: () => r
            }), n(18107), n(967357);
            var o = () => n(970831);

            function i(e) {
                let t = e ? ? ("editing" === n(358377).default.state.mode ? n(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let i = t.start.store,
                    r = i.getRecordStoreUIRoot(),
                    a = n(521595).n.findNodeFromStore(i),
                    l = (0, n(534012).T)(i),
                    s = null == l ? void 0 : l.getRecordStoreUIParent(),
                    d = (0, n(730994).K3)(r),
                    c = l && l instanceof o().B && l !== r ? l : void 0,
                    u = c ? ? a;
                if (r && r instanceof o().B && u) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: r,
                    currentBlock: c,
                    origin: u,
                    currentParent: s,
                    scrollerStore: d,
                    isPageTitle: r.id === i.id
                }
            }

            function r() {
                let {
                    stores: e
                } = n(584265).default.state, t = n(358377).default.state, i = "empty" !== t.mode ? t.multiSelection : void 0, r = "empty" !== t.mode ? t.multiSelection.start.store : void 0, a = r ? r.getRecordStoreUIRoot() : void 0;
                if (!(a instanceof o().B)) {
                    let e, t = null == r ? void 0 : r.getRecordStoreUIParent();
                    for (; null != t;) t instanceof o().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (a = e)
                }
                if (i && a && a instanceof o().B) {
                    let t = (0, n(534012).T)(i.end.store),
                        o = null == t ? void 0 : t.getRecordStoreUIParent(),
                        r = (0, n(730994).K3)(a);
                    if (t && o) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: i,
                        currentPage: a,
                        origin: t,
                        endBlock: t,
                        endBlockParent: o,
                        scrollerStore: r
                    }
                }
            }

            function a() {
                if (n(584265).default.state.stores.length > 0) {
                    let e = n(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== n(584265).default.state.stores.length) return;
                            let e = n(584265).default.state.stores[0];
                            if (!(e instanceof o().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? i(e) : function() {
                            let {
                                stores: e
                            } = n(584265).default.state, t = e[0], i = e.at(-1), r = t ? t.getRecordStoreUIRoot() : void 0;
                            if (r && r instanceof o().B && i) {
                                let t = (0, n(730994).K3)(r);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: r,
                                    origin: i,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, n(971541).k)(e.multiSelection) ? i() : r()
                }
            }
        },
        422224: (e, t, n) => {
            n.r(t), n.d(t, {
                maybeTurnCollectionViewIntoCollectionViewPage: () => f,
                transformBlocks: () => m,
                transformIntoColumnList: () => g
            }), n(898992), n(354520), n(581454);
            var o = () => n(374176),
                i = () => n(823608),
                r = () => n(831983),
                a = () => n(135674),
                l = () => n(818646),
                s = () => n(579695),
                d = () => n(773777),
                c = () => n(421439);
            let u = (0, n(109939).YK)({
                blockConvertedTo: {
                    id: "duplicationTransform.a11y.blockConvertedTo",
                    defaultMessage: "Converted to {blockType}"
                },
                blocksConvertedTo: {
                    id: "duplicationTransform.a11y.blocksConvertedTo",
                    defaultMessage: "{count, plural, one {# block converted to {blockType}} other {# blocks converted to {blockType}}}"
                }
            });

            function p(e, t) {
                let o = (0, n(955630).pL)(e) ? (0, n(955630).i_)(e) : e,
                    i = (0, n(495734).Z)(o);
                if (i) {
                    let e = n(962299).A.formatMessage(i);
                    1 === t ? (0, n(663123).l)(n(962299).A.formatMessage(u.blockConvertedTo, {
                        blockType: e
                    })) : (0, n(663123).l)(n(962299).A.formatMessage(u.blocksConvertedTo, {
                        count: t,
                        blockType: e
                    }))
                }
            }

            function m(e) {
                let {
                    environment: t,
                    blockType: i,
                    transaction: a
                } = e, l = e.blocks.filter(e => e.getParentTable() !== n(832375).C0E);
                if (0 !== l.length) {
                    if (i === n(955630).xd.transclusionContainer) {
                        (function(e) {
                            let {
                                environment: t,
                                blocks: o,
                                transaction: i
                            } = e, r = o[0];
                            if (!r) return;
                            let a = r.getRecordStoreUIParent();
                            if (!a || !(0, n(966980).iU)(a)) return;
                            let l = a.getRecordStoreUIParent();
                            if (!l || !(0, n(966980)._p)(l) || !l.isDefined()) return;
                            let s = (0, n(295447).Z1)({
                                    environment: t,
                                    table: n(832375).evP,
                                    spaceId: l.getSpaceId()
                                }),
                                d = n(124937).Wv({
                                    environment: t,
                                    id: s,
                                    type: n(955630).xd.transclusionContainer,
                                    inMemoryRecordCache: a.inMemoryRecordCache,
                                    transaction: i,
                                    spaceId: l.getSpaceId()
                                });
                            (0, n(51929).W)({
                                parentStore: a,
                                insertStore: d,
                                afterStore: r,
                                transaction: i
                            }), h({
                                newParentStore: d.getContentStore(),
                                blocks: o,
                                transaction: i
                            }), (0, n(525779).clear)({
                                environment: t
                            }), (0, n(471e3).I)({
                                environment: t
                            }), (0, n(854924).t)({
                                environment: t,
                                stores: [d]
                            })
                        })({
                            environment: t,
                            blocks: l,
                            transaction: a
                        }), p(i, l.length);
                        return
                    }
                    if (i === n(955630).xd.callout && n(218744).default.checkGate({
                            gateName: "create_v2_callouts"
                        })) {
                        (function(e) {
                            let {
                                environment: t,
                                blocks: o,
                                transaction: i
                            } = e, r = o[0];
                            if (!r) return;
                            let a = r.getRecordStoreUIParent();
                            if (!a || !(0, n(966980).iU)(a)) return;
                            let l = a.getRecordStoreUIParent();
                            if (!l || !(l instanceof n(970831).B)) return;
                            let d = (0, n(295447).Z1)({
                                    environment: t,
                                    table: n(832375).evP,
                                    spaceId: l.getSpaceId()
                                }),
                                c = n(124937).Wv({
                                    environment: t,
                                    id: d,
                                    type: n(955630).xd.callout,
                                    inMemoryRecordCache: a.inMemoryRecordCache,
                                    transaction: i,
                                    spaceId: l.getSpaceId(),
                                    format: {
                                        callout_version: 2
                                    }
                                });
                            s().NI({
                                parentStore: a,
                                childStore: c,
                                after: r.id,
                                transaction: i
                            }), h({
                                newParentStore: c.getContentStore(),
                                blocks: o,
                                transaction: i
                            }), n(205103).s4({
                                store: c,
                                transaction: i
                            }), (0, n(525779).clear)({
                                environment: t
                            }), (0, n(471e3).I)({
                                environment: t
                            }), (0, n(854924).t)({
                                environment: t,
                                stores: [c]
                            })
                        })({
                            environment: t,
                            blocks: l,
                            transaction: a
                        }), p(i, l.length);
                        return
                    }
                    if (i === n(955630).xd.columnList) {
                        g({
                            environment: t,
                            blocks: l,
                            transaction: a
                        }), p(i, l.length);
                        return
                    }
                    if ((0, n(955630).ZK)(i)) {
                        let e = parseInt(i.replace("column", "").replace("block", "")),
                            r = n(381453).oE(n(381453).Hn(e - 1, () => (0, n(150945).insertTextBelow)({
                                environment: t,
                                blocks: l,
                                transaction: a
                            }))),
                            s = g({
                                environment: t,
                                blocks: [...l, ...r],
                                transaction: a
                            });
                        o().default.afterNextFlush(() => {
                            (0, n(940763).e)({
                                store: s[0].getBlockTitleStore()
                            })
                        }), p(n(955630).xd.columnList, l.length);
                        return
                    }
                    for (let e of l)
                        if (e.isCalloutV2()) {
                            let n = e.getParentBlockStore();
                            if (n) {
                                let u = e.getContentStores();
                                for (let o of ((0, c().y4)({
                                        store: n,
                                        operation: {
                                            pointer: n.pointer,
                                            path: ["content"],
                                            command: "insertChildrenAfter",
                                            args: {
                                                ids: u.map(e => e.id),
                                                after: e.id
                                            }
                                        },
                                        transaction: a
                                    }), s().zz({
                                        parentStore: n.getContentStore(),
                                        childStore: e,
                                        transaction: a
                                    }), u)) r().pd({
                                    environment: t,
                                    block: o,
                                    blockType: i,
                                    transaction: a,
                                    isMultiBlockTransformation: l.length > 1
                                });
                                o().default.afterNextFlush(() => {
                                    (0, d().d)(t, u.map(e => e.id))
                                })
                            }
                        } else r().pd({
                            environment: t,
                            block: e,
                            blockType: i,
                            transaction: a,
                            isMultiBlockTransformation: l.length > 1
                        });
                    l.length > 1 && p(i, l.length)
                }
            }

            function f({
                environment: e,
                blocks: t,
                transaction: n
            }) {
                1 === t.length && "collection_view" === t[0].getType() && m({
                    environment: e,
                    blocks: t,
                    blockType: "collection_view_page",
                    transaction: n
                })
            }

            function g(e) {
                let {
                    environment: t,
                    blocks: o,
                    transaction: r
                } = e, a = o[0];
                if (!a) return [];
                let s = a.recordStoreUIParentStore;
                if (!(null != s && s.valueIs(i()._))) return [];
                let d = (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).evP,
                        spaceId: a.getSpaceId()
                    }),
                    c = n(124937).Wv({
                        environment: t,
                        id: d,
                        type: n(955630).xd.columnList,
                        inMemoryRecordCache: a.inMemoryRecordCache,
                        transaction: r,
                        spaceId: a.getSpaceId()
                    }),
                    {
                        childStore: u
                    } = (0, n(987380).n)({
                        parentStore: s,
                        insertStore: c,
                        beforeStore: a,
                        transaction: r
                    });
                return o.map(e => {
                    let o = (0, n(295447).Z1)({
                            environment: t,
                            table: n(832375).evP,
                            spaceId: a.getSpaceId()
                        }),
                        i = n(124937).Wv({
                            environment: t,
                            id: o,
                            type: n(955630).xd.column,
                            inMemoryRecordCache: a.inMemoryRecordCache,
                            transaction: r,
                            spaceId: a.getSpaceId()
                        }),
                        {
                            childStore: d
                        } = (0, l().T)({
                            parentStore: s,
                            childToRemoveStore: e,
                            transaction: r
                        }),
                        {
                            childStore: c
                        } = (0, n(51929).W)({
                            parentStore: u.getContentStore(),
                            insertStore: i,
                            transaction: r
                        }),
                        {
                            childStore: p
                        } = (0, n(51929).W)({
                            parentStore: c.getContentStore(),
                            insertStore: d,
                            transaction: r
                        });
                    return p
                })
            }

            function h(e) {
                let {
                    newParentStore: t,
                    blocks: n,
                    transaction: o
                } = e;
                for (let e of n) {
                    let n = e.getRecordStoreUIParent();
                    null != n && n.valueIs(i()._) && ((0, l().T)({
                        parentStore: n,
                        childToRemoveStore: e,
                        transaction: o
                    }), (0, a().B)({
                        parentStore: t,
                        appendStore: e,
                        transaction: o
                    }))
                }
            }
        },
        424107: (e, t, n) => {
            n.d(t, {
                i: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "6.24 2.75 7.51 14.51",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.25 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m5 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m1.25 7.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.25 10a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m6.25 7.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.25 16a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0"
                    })
                },
                i = (0, n(104509).wt)("dragHandle", o, "default")
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => a,
                R2: () => d,
                WF: () => s,
                bZ: () => l,
                cE: () => i,
                jX: () => r,
                rz: () => c
            });
            var o = () => n(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function a(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(r, e))
            }

            function l() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (o().n4(e, t)) return !0;
                return !1
            }
        },
        428375: (e, t, n) => {
            n.d(t, {
                f: () => o
            });

            function o() {
                let e = (0, n(330870).a)(),
                    t = n(358377).default.state;
                if ("editing" !== t.mode) return !1;
                let o = t.multiSelection.start.store;
                return !!(e && e.id === o.id && (e.getBlockTitleStore() === o || n(381453).n4(e.getBlockTitleStore().path, o.path)))
            }
        },
        454736: (e, t, n) => {
            n.d(t, {
                p: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.94 14.91 15.66",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M10.55 12.808a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 1 0 1.1 0z"
                        }), (0, o.jsx)("path", {
                            d: "M15.4 1.95a3.48 3.48 0 0 0-3.48 3.48v1.92H6.4a2.425 2.425 0 0 0-2.425 2.425v5.4A2.425 2.425 0 0 0 6.4 17.6h7.2a2.425 2.425 0 0 0 2.425-2.425v-5.4A2.425 2.425 0 0 0 13.6 7.35h-.43V5.43a2.23 2.23 0 1 1 4.46 0v2.095a.625.625 0 1 0 1.25 0V5.43a3.48 3.48 0 0 0-3.48-3.48M5.225 9.775c0-.649.526-1.175 1.175-1.175h7.2c.649 0 1.175.526 1.175 1.175v5.4c0 .649-.526 1.175-1.175 1.175H6.4a1.175 1.175 0 0 1-1.175-1.175z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("lockOpen", i, "default")
        },
        464515: (e, t, n) => {
            n.d(t, {
                z: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    blockStore: o,
                    insertedTextBlockLocation: i,
                    editSelection: r,
                    getRectFromStore: a
                } = e, l = n(764615).Ay.state;
                if (r({
                        environment: t,
                        store: o
                    }), (0, n(940763).e)({
                        store: o.getBlockTitleStore()
                    }), !l.open && !t.device.isPhone) {
                    let e = o.getBlockTitleStore(),
                        r = a(o),
                        l = n(92513).JW();
                    r && (n(764615).Ay.setState({
                        id: l,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: r,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: n(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: i
                    }), (0, n(525779).clear)({
                        environment: t
                    }), (0, n(940763).e)({
                        store: e
                    }), (0, n(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: l,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        476081: (e, t, n) => {
            n.d(t, {
                l: () => o
            });
            async function o(e) {
                var t;
                let {
                    environment: o,
                    blockStore: i,
                    rect: r,
                    property_id: a,
                    from: l
                } = e;
                if (n(332190).A.hasContent()) return void(0, n(58931)._y)({
                    environment: o,
                    reason: "starting_new"
                });
                let s = n(496704).K.getRect(i);
                if (!s) return;
                let d = new(n(478597)).A(o, (0, n(226221).e)(i.pointer.spaceId)),
                    c = s.width,
                    u = s.height,
                    p = s.right - c;
                n(332190).A.setState({
                    open: !0,
                    rect: r || new DOMRect(p, s.top, c, u),
                    type: "block",
                    content: "comment",
                    blockStore: i,
                    blockId: i.id,
                    discussionInputStore: d,
                    property_id: a,
                    lastKnownBlockStore: i,
                    from: l
                }), (0, n(661767).V)({
                    element: null == (t = n(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: o,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), n(827862).A.setActiveWithSource("text_annotation"), await (0, n(745990).M)({
                    discussionInputStore: d,
                    environment: o
                }), n(65255).j4(o, {
                    from: l
                })
            }
        },
        478597: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = () => n(546605);
            class i extends o().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(n(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(n(517013)).pm({
                            environment: this.environment,
                            pointer: (0, n(295447).zP)({
                                environment: this.environment,
                                table: n(832375).SNf,
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
                    return n(247438).q4_(e).includes("\n")
                }
            }
            let r = i
        },
        487016: (e, t, n) => {
            n.d(t, {
                Bi: () => l,
                My: () => a,
                ZM: () => d,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var o = () => n(388507),
                i = () => n(715144),
                r = () => n(717673);

            function a({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var l, s;
                let d = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of n) {
                    let n = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && c.push({
                        property: n.id,
                        visible: !(0, o().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let n = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            o = new Set(n.map(e => e.property)),
                            r = c.filter(e => !o.has(e.property));
                        0 !== r.length && (0, i().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...r]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let o = [];
                for (let e of n) {
                    let n = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && o.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let a = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(a.map(e => e.property)),
                    d = o.filter(e => !s.has(e.property));
                d.length && (0, i().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...a, ...d]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: o
            }) {
                if ("accepted_template" === o.type || "accepted_empty_collection" === o.type) {
                    let i = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: i => {
                            let r = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: i,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === o.type && !(0, n(247438).w9s)(r)) {
                                let a = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: o.blockId
                                }).getTitleStore();
                                a && n(41403).yr({
                                    environment: e,
                                    transaction: i,
                                    tokens: r,
                                    index: 0,
                                    store: a
                                })
                            }
                            let a = t.getParentStore();
                            if ((null == a ? void 0 : a.table) === n(682956).ev) {
                                let e = a.getContentIds();
                                (0, n(173157).z)({
                                    store: a,
                                    transaction: i,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: o,
                existingCollectionViewBlockStore: i,
                existingCollectionStore: r
            }) {
                if ("canceled" !== o.type) {
                    if ("accepted_empty_collection" === o.type && r) {
                        let i = r.getKeyStore("name"),
                            a = (0, n(247438).x9d)(o.newCollectionTitle);
                        if (i) {
                            let o = r.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: o ? {
                                    spaceWithId: o
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: i,
                                    transaction: t,
                                    value: a
                                })
                            })
                        }
                    }
                    if (i) {
                        var a;
                        let e = null == (a = (0, n(444610).U)(i)) ? void 0 : a.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === o.type && null != i && i.isCollectionView() && !(null != i && i.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(i),
                            r = i.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === o.collectionId
                            });
                        if (!t || !r) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: r.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let o = t.id;
                if (!t.isDefined()) {
                    let i = await (0, n(389323).$)({
                        environment: e,
                        blockId: o
                    });
                    if (!i) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: i
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: o
                    }), await t.load()
                }
                let i = t.getSpaceId();
                if (!i) throw Error("Space ID not found for collection block");
                let r = (0, n(593303).k)(i);
                if (!r) throw Error(`Space view not found for space ID: ${i}`);
                let a = n(728372).AppStoreSidebarSpaceStore.state;
                (null == a ? void 0 : a.id) !== i && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: r
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: o
                    } = await n(708370).t.load(), i = o(l.placeholder_workflow_template_id);
                    if (!i) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: r
                    } = await n(903673).O.load();
                    r({
                        environment: e,
                        collectionTemplate: i,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        490648: (e, t, n) => {
            n.d(t, {
                d: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.88 2.32 14.24 15.36",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.294 2.325h3.103c.484 0 .948.192 1.29.534l2.897 2.898c.343.342.535.806.535 1.29v5.903a1.825 1.825 0 0 1-1.825 1.825H12.53v1.075a1.825 1.825 0 0 1-1.825 1.825h-6A1.825 1.825 0 0 1 2.88 15.85v-8.8c0-1.008.817-1.825 1.825-1.825H7.47V4.15c0-1.008.817-1.825 1.825-1.825M9.1 5.76l2.897 2.897c.342.342.534.806.534 1.29v3.578h2.763a.575.575 0 0 0 .575-.575V7.3h-1.975a1.75 1.75 0 0 1-1.75-1.75V3.575h-2.85a.575.575 0 0 0-.575.575v1.318q.208.12.38.292m6.16.44-2.016-2.016V5.55c0 .359.29.65.65.65zm-10.554.275a.575.575 0 0 0-.575.575v8.8c0 .318.258.575.575.575h6a.575.575 0 0 0 .575-.575V10.2H9.306a1.75 1.75 0 0 1-1.75-1.75V6.475zm3.95.609V8.45c0 .359.291.65.65.65h1.366z"
                    })
                },
                i = (0, n(104509).wt)("docOnDoc", o, "default")
        },
        496722: (e, t, n) => {
            n.d(t, {
                a: () => o
            });

            function o() {
                let e = n(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        497857: (e, t, n) => {
            n.d(t, {
                h: () => i
            }), n(296540);
            var o = n(474848);

            function i() {
                return (0, o.jsx)(n(16275).I, {
                    icon: n(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        501148: (e, t, n) => {
            n.d(t, {
                Z: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.49 2.37 15.01 15.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.154 3.625h1.23a.625.625 0 1 0 0-1.25h-1.23A2.625 2.625 0 0 0 4.529 5v2.069c0 .9-.508 1.722-1.313 2.124l-.317.159a.725.725 0 0 0 0 1.297l.317.158a2.38 2.38 0 0 1 1.313 2.124V15a2.625 2.625 0 0 0 2.625 2.625h1.23a.625.625 0 1 0 0-1.25h-1.23c-.76 0-1.375-.616-1.375-1.375v-2.069c0-1.17-.564-2.256-1.492-2.931a3.63 3.63 0 0 0 1.492-2.931V5c0-.76.615-1.375 1.375-1.375m5.692 12.75h-1.23a.625.625 0 1 0 0 1.25h1.23A2.625 2.625 0 0 0 15.471 15v-2.069c0-.9.508-1.722 1.313-2.124l.317-.159a.725.725 0 0 0 0-1.296l-.317-.159a2.38 2.38 0 0 1-1.313-2.124V5a2.625 2.625 0 0 0-2.625-2.625h-1.23a.625.625 0 1 0 0 1.25h1.23c.76 0 1.375.616 1.375 1.375v2.069c0 1.17.564 2.256 1.492 2.931a3.63 3.63 0 0 0-1.492 2.931V15c0 .76-.615 1.375-1.375 1.375"
                    })
                },
                i = (0, n(104509).wt)("curlyBraces", o, "default")
        },
        519529: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                xMarkFillSmallIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                i = (0, n(104509).wt)("xMarkFillSmall", o, "fillSmall")
        },
        540234: (e, t, n) => {
            n.d(t, {
                V: () => o
            });
            let o = (0, n(477465).Dv)("importFile")
        },
        554397: (e, t, n) => {
            function o(e) {
                let t = [];
                if ("textSelection" === e.type) {
                    let o = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e.textSelection,
                            forceExtendAnnotations: {}
                        }),
                        i = o.slice(0, 1200),
                        r = o.length > 1200,
                        a = e.textSelection.start.store.pointer,
                        l = e.textSelection.end.store.pointer;
                    a.table === n(832375).evP && l.table === n(832375).evP && t.push({
                        textSelection: {
                            type: "text",
                            value: {
                                start: {
                                    pointer: a,
                                    index: e.textSelection.start.index
                                },
                                end: {
                                    pointer: l,
                                    index: e.textSelection.end.index
                                }
                            },
                            text: i,
                            ...r ? {
                                isPreviewTruncated: !0
                            } : {}
                        }
                    })
                }
                return "blockSelection" === e.type && t.push(r(e.stores)), t
            }

            function i(e) {
                return 0 === e.length ? [] : [r(e)]
            }

            function r(e) {
                let t = (0, n(685745).B)(e),
                    o = t ? (0, n(250943).E)({
                        mode: "editing",
                        multiSelection: t,
                        forceExtendAnnotations: {}
                    }) : "";
                return {
                    blockSelection: {
                        type: "blocks",
                        value: e.map(e => e.pointer),
                        text: o.slice(0, 1200)
                    }
                }
            }
            n.d(t, {
                e: () => o,
                j: () => i
            }), n(944114), n(581454)
        },
        560860: (e, t, n) => {
            n.d(t, {
                QU: () => a,
                f2: () => r,
                r6: () => l
            }), n(581454), n(296540);
            var o = n(474848);
            let i = {
                scroller: {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: 290,
                    border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 6,
                    paddingTop: 8,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    marginTop: 15,
                    marginBottom: 5,
                    marginInlineStart: -12,
                    marginInlineEnd: -12
                },
                editContainer: {
                    marginTop: 2,
                    marginBottom: 2,
                    color: n(632079).Tj.text.primary
                }
            };

            function r(e) {
                let {
                    openState: t
                } = e, {
                    mainEditorCurrentBlockStore: r,
                    currentSpaceStore: a
                } = (0, n(682985).K8)(() => ({
                    mainEditorCurrentBlockStore: n(728372).AppStoreMainEditorCurrentBlockStore.state,
                    currentSpaceStore: n(728372).AppStoreSidebarSpaceStore.state
                }), []);
                if (!r || !a) return null;
                let l = Date.now();
                return (0, o.jsx)(n(126767).H, {
                    type: n(644154).A.Y,
                    style: i.scroller,
                    children: t.permissionChanges.map(([e, t], s) => {
                        let d = {
                            timestamp: l,
                            space_id: a.id,
                            type: "permission-changed",
                            permission_data: {
                                before: e,
                                after: t
                            }
                        };
                        return (0, o.jsx)("div", {
                            style: i.editContainer,
                            children: (0, o.jsx)(n(773588).A, {
                                rootStore: r,
                                edit: d
                            })
                        }, `${e.type}-${s}`)
                    })
                })
            }

            function a(e) {
                return ["remove", "restrict"].includes(e.type) ? (0, o.jsx)(n(109939).sA, {
                    id: "restrictedPermissionConfirmationModal.actionButton.restrictAccessV2",
                    defaultMessage: "Change and unlink"
                }) : (0, o.jsx)(n(109939).sA, {
                    id: "restrictedPermissionConfirmationModal.actionButton.relink",
                    defaultMessage: "Relink"
                })
            }

            function l(e) {
                switch (e.type) {
                    case "remove":
                    case "restrict":
                        return (0, o.jsx)(n(109939).sA, {
                            id: "restrictedPermissionConfirmationModal.remove.descriptionV2",
                            defaultMessage: "Change access and unlink share settings from parent page?"
                        });
                    case "restore":
                    case "restoreTeamPermissions":
                        return (0, o.jsx)(n(109939).sA, {
                            id: "restrictedPermissionConfirmationModal.relink.description",
                            defaultMessage: "Relink share settings?"
                        });
                    default:
                        throw n(722371).HB(e)
                }
            }
        },
        568427: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = n(296540),
                i = n(474848);

            function r(e) {
                let t = (0, o.useMemo)(() => (0, n(847442).s)(e.store), [e.store]);
                return (0, i.jsx)(n(109939).sA, {
                    id: "pageWordCount.wordCount",
                    defaultMessage: "{count, plural, one {# word} other {# words}}",
                    values: {
                        count: t
                    }
                })
            }
        },
        573953: (e, t, n) => {
            n.d(t, {
                o: () => o
            });

            function o() {
                let e = (0, n(330870).a)();
                return !e || !e.isLocked()
            }
        },
        573970: (e, t, n) => {
            n.d(t, {
                w: () => a
            }), n(944114), n(898992), n(354520), n(581454);
            var o = () => n(642157),
                i = () => n(832375),
                r = () => n(421439);

            function a(e) {
                var t;
                let {
                    environment: a,
                    store: l,
                    permissionItem: s,
                    transaction: d,
                    shouldInherit: c,
                    fromPermissionWrapper: u
                } = e;
                if (!l.isDefined()) return;
                let p = [];
                if (c)
                    for (let e of (0, n(862085).i0)(l).map(e => e.permissionItem).filter(e => !s || !n(138798).nK(e, s))) {
                        let t = !1;
                        "collection_property_permission" === e.type && (t = !0), o().hI(e) && (l.table !== i().evP || l.isCollectionView() || o().P3(e) || "content_only_editor" !== e.role ? t || p.push(e) : p.push({ ...e,
                            role: "read_and_write"
                        }))
                    }
                s && (p.push(s), l.table === i().evP ? n(594311).e1({
                    store: l,
                    newItems: [s],
                    fromPermissionWrapper: u
                }) : l.table === i().VlP || l.table === i().C0E || l.table === i().yKj || (0, n(722371).HB)(l.table));
                let m = a.currentUser.id,
                    f = n(381453).hS([...p, ...l.getPermissionItems() || [], {
                        type: "restricted_permission"
                    }], n(138798).I$);
                !m || d.useSudoMode || (0, n(310248).JF)({
                    store: l,
                    userId: m,
                    updatedPermissionItems: f
                }) || p.push({
                    type: "user_permission",
                    user_id: m,
                    role: "editor"
                });
                let g = l.getPermissionItemsStore();
                for (let e of p)(0, r().y4)({
                    store: g,
                    operation: {
                        pointer: g.pointer,
                        command: "setPermissionItem",
                        path: g.path,
                        args: e
                    },
                    transaction: d
                });
                (0, r().y4)({
                    store: g,
                    operation: {
                        pointer: g.pointer,
                        command: "setSingletonPermissionItem",
                        path: g.path,
                        args: {
                            singletonPermissionItem: {
                                type: "restricted_permission"
                            },
                            set: !0
                        }
                    },
                    transaction: d
                }), t = {
                    type: (null == s ? void 0 : s.role) === "none" ? "remove" : "narrow"
                }, (0, n(195857).DO_NOT_USE_trackLegacy)("restrict_permissions", t), d.postSubmitCallbacks.push(e => {
                    !e && l.pointer.spaceId && n(371151).nO({
                        environment: a,
                        spaceStore: {
                            id: l.pointer.spaceId
                        }
                    })
                })
            }
        },
        577464: (e, t, n) => {
            n.d(t, {
                GO: () => c,
                Ju: () => d,
                KA: () => s,
                L2: () => x,
                MN: () => u,
                Ol: () => f,
                Q0: () => b,
                dA: () => p,
                gI: () => l,
                gX: () => S,
                iN: () => y,
                j5: () => m,
                jw: () => A,
                oG: () => h,
                sK: () => g
            }), n(898992), n(354520), n(803949), n(296540);
            var o = () => n(176609),
                i = () => n(377796),
                r = n(474848);
            let a = (0, n(109939).YK)({
                duplicatingTemplate: {
                    id: "botActions.duplicatingTemplate.loadingMessage",
                    defaultMessage: "Duplicating template…"
                },
                duplicatingTemplateError: {
                    id: "botActions.duplicateTemplateAndShareWithBot.snackbar.failure",
                    defaultMessage: "Failed to duplicate template for to your workspace"
                },
                removeInheritedConnectionTitle: {
                    id: "botActions.removeInheritedConnection.title",
                    defaultMessage: "Disconnect {botName} and unlink share settings from parent page?"
                },
                removeInheritedConnectionDescription: {
                    id: "botActions.removeInheritedConnection.description",
                    defaultMessage: "This page will no longer inherit share settings from its parent. Admins can still restore settings later."
                },
                removeInheritedConnectionAcceptLabel: {
                    id: "botActions.removeInheritedConnection.acceptLabel",
                    defaultMessage: "Disconnect and unlink"
                }
            });

            function l(e) {
                let {
                    environment: t
                } = e, o = e.spaceStore.getSpaceId(), {
                    serverCommitResult: r,
                    performResult: {
                        botStore: a
                    }
                } = (0, i().createAndCommit)({
                    userAction: "botActions.createSpaceBot",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o
                    },
                    canUndo: !0,
                    perform: t => (function(e, t) {
                        let {
                            environment: o,
                            spaceStore: i,
                            membershipType: r
                        } = t, a = function(e) {
                            let {
                                name: t,
                                spaceStore: o,
                                userId: i,
                                icon: r,
                                type: a,
                                environment: l
                            } = e, s = Date.now(), d = {
                                name: t,
                                created_at: s,
                                created_by_table: n(832375).oo9,
                                created_by_id: i,
                                alive: !0,
                                icon: r,
                                space_id: o.id,
                                last_edited_at: s,
                                last_edited_by_id: i,
                                last_edited_by_table: n(832375).oo9
                            };
                            switch (a) {
                                case "guest":
                                    return { ...d,
                                        type: "guest",
                                        capabilities: e.capabilities,
                                        parent_table: n(832375).NXh,
                                        parent_id: o.id,
                                        integration_id: void 0
                                    };
                                case "scim":
                                    return { ...d,
                                        id: (0, n(295447).Z1)({
                                            environment: l,
                                            table: n(832375).GPl,
                                            spaceId: o.id
                                        }),
                                        type: "scim",
                                        parent_table: n(832375).oo9,
                                        parent_id: i
                                    };
                                default:
                                    (0, n(722371).HB)(a)
                            }
                        }(t), l = n(124937).eC({
                            environment: o,
                            table: n(832375).GPl,
                            value: a,
                            inMemoryRecordCache: o.defaultRecordCache.inMemoryRecordCache,
                            transaction: e
                        });
                        return (0, n(73888).y)({
                            environment: o,
                            spaceStore: i,
                            actors: [{
                                type: "bot",
                                membershipType: r,
                                botId: l.id,
                                parent: void 0
                            }],
                            transaction: e
                        }), {
                            botStore: l
                        }
                    })(t, e)
                });
                return {
                    botStore: a,
                    transactionPromise: r
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    botId: o,
                    onSuccess: i
                } = e, r = await t.api.callApi({
                    eventName: "deleteBot",
                    environment: t,
                    data: {
                        botId: o
                    }
                });
                "failed" === r.type ? n(647095).Qg(r) : "success" === r.type && (await n(994869).refreshExternalIntegrationStore({
                    environment: t
                }), i && i())
            }
            async function d(e) {
                let t, {
                    environment: o,
                    table: i,
                    id: r,
                    type: a
                } = e;
                return "failed" === (t = i === n(832375).NXh ? await o.api.callCellCompatibleApi({
                    eventName: "getBots",
                    environment: o,
                    data: {
                        table: i,
                        id: r,
                        type: a
                    },
                    cellNavigation: {
                        spaceId: r
                    }
                }) : await o.api.callApi({
                    eventName: "getBots",
                    environment: o,
                    data: {
                        table: i,
                        id: r,
                        type: a
                    }
                })).type ? (n(647095).Qg(t), {
                    botIds: [],
                    recordMap: {}
                }) : (t.data.integrationManagementPermissions && n(322103).bM.updatePermissions(t.data.integrationManagementPermissions), {
                    botIds: t.data.botIds,
                    recordMap: t.data.recordMap
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    botIds: i
                } = e;
                if (!o) return;
                let r = await t.api.callApi({
                    eventName: "getBotSharedPageIds",
                    environment: t,
                    data: {
                        spaceId: o.id,
                        botIds: i
                    }
                });
                return "failed" === r.type ? void n(647095).Qg(r) : (function(e) {
                    let {
                        integrationManagementPermissions: t
                    } = e;
                    t && Object.keys(t).length > 0 && n(322103).bM.updatePermissions(t)
                }({
                    integrationManagementPermissions: r.data.integrationManagementPermissions
                }), r.data)
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    botIds: i
                } = e;
                if (!o) return;
                let r = await t.api.callApi({
                    eventName: "getBotSharedAgentIds",
                    environment: t,
                    data: {
                        spaceId: o.id,
                        botIds: i
                    }
                });
                return "failed" === r.type ? void n(647095).Qg(r) : r.data
            }
            async function p(e) {
                let {
                    environment: t,
                    botId: o
                } = e, i = await t.api.callApi({
                    eventName: "getBotToken",
                    environment: t,
                    data: {
                        botId: o
                    }
                });
                return "failed" === i.type ? void n(647095).Qg(i) : i.data.token
            }
            async function m(e) {
                let {
                    environment: t,
                    botId: o,
                    tokenId: i
                } = e, r = await t.api.callApi({
                    eventName: "revokeBotToken",
                    environment: t,
                    data: {
                        botId: o,
                        tokenId: i
                    }
                });
                return "failed" !== r.type || (n(647095).Qg(r), !1)
            }
            async function f(e) {
                let {
                    environment: t,
                    botId: o,
                    oldTokenExpiresInMs: i
                } = e, r = await t.api.callApi({
                    eventName: "refreshBotToken",
                    environment: t,
                    data: {
                        botId: o,
                        oldTokenExpiresInMs: i
                    }
                });
                return "failed" === r.type ? void n(647095).Qg(r) : r.data.token
            }

            function g(e) {
                let {
                    botValue: t,
                    store: r,
                    environment: a
                } = e, {
                    id: l,
                    parent_id: s,
                    parent_table: d,
                    capabilities: c
                } = t, u = {
                    type: "bot_permission",
                    bot_id: l,
                    parent_id: s,
                    parent_table: d,
                    role: (0, n(579825).MD)(c)
                }, p = r.getSpaceId();
                (0, i().createAndCommit)({
                    userAction: "TopbarMoreButton.handleAddingConnection",
                    environment: a,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o().z)({
                            environment: a,
                            store: r,
                            permissionItems: [u],
                            transaction: e
                        })
                    }
                })
            }

            function h(e) {
                let {
                    botId: t,
                    store: r,
                    environment: a
                } = e, l = r.getPermissionItems().filter(e => !!(0, n(642157).P3)(e)), s = r.getSpaceId();
                for (let e of l)
                    if (e.bot_id === t) {
                        let t = { ...e,
                            role: "none"
                        };
                        (0, i().createAndCommit)({
                            userAction: "TopbarMoreButton.handleRemovingConnection",
                            environment: a,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, o().z)({
                                    environment: a,
                                    store: r,
                                    permissionItems: [t],
                                    transaction: e
                                })
                            }
                        })
                    }
            }
            let v = {
                marginTop: 8
            };
            async function b(e) {
                let {
                    botId: t,
                    botName: o,
                    store: l,
                    environment: s
                } = e, d = {
                    type: "bot_permission",
                    bot_id: t,
                    role: "none"
                }, c = (await n(647095).Gh({
                    message: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(n(111010).D, {
                            styleKey: "titleSmSemibold",
                            children: n(962299).A.formatMessage(a.removeInheritedConnectionTitle, {
                                botName: o
                            })
                        }), (0, r.jsx)(n(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: v,
                            children: (0, r.jsx)(n(109939).sA, { ...a.removeInheritedConnectionDescription
                            })
                        })]
                    }),
                    acceptLabel: n(962299).A.formatMessage(a.removeInheritedConnectionAcceptLabel),
                    icon: (0, r.jsx)(n(16275).I, {
                        icon: n(138308).arrowBranchIcon,
                        size: "xl"
                    })
                })).accept;
                if (c) {
                    let e = l.getSpaceId();
                    (0, i().createAndCommit)({
                        userAction: "TopbarMoreButton.handleRemovingInheritedConnection",
                        environment: s,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, n(573970).w)({
                                environment: s,
                                store: l,
                                permissionItem: d,
                                shouldInherit: !0,
                                transaction: e
                            })
                        }
                    })
                }
                return c
            }
            async function y(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    botStore: o,
                    pageIdAndOperations: i,
                    effectiveAdminOnly: r
                } = e;
                return (0 !== i.length || void 0 !== r) && (await t.api.callApi({
                    eventName: "setBotPermissionsForPages",
                    environment: t,
                    data: {
                        spaceId: n.getSpaceId(),
                        botId: o.id,
                        pageOperations: i,
                        effectiveAdminOnly: r
                    }
                }), !0)
            }
            async function S(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    botStore: o,
                    agentOperations: i
                } = e;
                return 0 !== i.length && (await t.api.callApi({
                    eventName: "setBotPermissionsForAgents",
                    environment: t,
                    data: {
                        spaceId: n.getSpaceId(),
                        botId: o.id,
                        agentOperations: i
                    }
                }), !0)
            }
            async function x(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    spaceViewStore: a,
                    templatePageId: l,
                    botValue: s,
                    pages: d
                } = e;
                if (!r) return;
                let c = n(447003).v.createChildStore(r, {
                    table: n(832375).GPl,
                    id: s.id
                });
                if (l) return await w({
                    environment: t,
                    templatePageId: l,
                    botStore: c,
                    spaceStore: r,
                    spaceViewStore: a
                });
                ! function(e) {
                    let {
                        spaceStore: t,
                        environment: r,
                        pages: a,
                        botStore: l,
                        addPermission: s
                    } = e;
                    if (!t) return;
                    let d = (0, n(862085).Ws)({
                            botStore: l,
                            addPermission: s
                        }),
                        c = t.getSpaceId();
                    a.forEach(e => {
                        let a = n(970831).B.createChildStore(t, {
                            table: n(832375).evP,
                            id: e,
                            spaceId: c
                        });
                        (0, i().createAndCommit)({
                            userAction: "botActions.updateBlockPermissionsForBot",
                            environment: r,
                            cellTarget: {
                                spaceWithId: c
                            },
                            canUndo: !0,
                            perform: e => {
                                (0, o().z)({
                                    environment: r,
                                    store: a,
                                    permissionItems: [d],
                                    transaction: e
                                })
                            }
                        })
                    })
                }({
                    environment: t,
                    spaceStore: r,
                    botStore: c,
                    pages: d,
                    addPermission: !0
                })
            }
            async function w(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    spaceViewStore: l,
                    templatePageId: s,
                    botStore: d
                } = e;
                if (r && l) try {
                    n(262058).m({
                        message: a.duplicatingTemplate
                    });
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "loadBlockSubtree",
                        environment: t,
                        data: {
                            block: {
                                id: s,
                                spaceId: (0, n(226221).e)(void 0)
                            },
                            shallow: !1
                        },
                        cellNavigation: {
                            recordId: s
                        }
                    });
                    if ("failed" === e.type) return;
                    let c = n(412951).RecordMapWithRole.create(e.data.subtreeRecordMap),
                        {
                            createAndDuplicatePageInSpace: u
                        } = await (0, n(411648).nd)(),
                        p = r.getSpaceId(),
                        {
                            performResult: m
                        } = (0, i().createAndCommit)({
                            userAction: "botActions.duplicateTemplateAndShareWithBot",
                            environment: t,
                            cellTarget: {
                                spaceWithId: p
                            },
                            canUndo: !0,
                            perform: e => {
                                let i = u({
                                        environment: t,
                                        recordMap: c,
                                        copyPageId: s,
                                        isPrivate: !0,
                                        spaceStore: r,
                                        spaceViewStore: l,
                                        transaction: e,
                                        allowCopyExternalObjectInstances: !1
                                    }),
                                    a = l.getPrivatePageIds();
                                a.length > 0 && (0, n(173157).z)({
                                    store: l,
                                    data: {
                                        private_pages: [i.id, ...a]
                                    },
                                    transaction: e
                                });
                                let p = (0, n(862085).Ws)({
                                    botStore: d,
                                    addPermission: !0
                                });
                                return (0, o().z)({
                                    environment: t,
                                    store: i,
                                    permissionItems: [p],
                                    transaction: e
                                }), i
                            }
                        });
                    return m
                } catch (e) {
                    n(436555).D6({
                        label: n(962299).A.formatMessage(a.duplicatingTemplateError)
                    })
                } finally {
                    n(262058).V()
                }
            }
            async function A({
                botIds: e,
                environment: t
            }) {
                e && 0 !== e.length && await (0, n(975162).lX)(e, 5, async e => s({
                    environment: t,
                    botId: e,
                    onSuccess: () => {}
                }))
            }
        },
        594014: (e, t, n) => {
            n.d(t, {
                m: () => r
            });
            var o = n(296540),
                i = n(474848);
            let r = o.memo(function(e) {
                let {
                    textValue: t
                } = e, r = (0, o.useMemo)(() => (0, n(862060).X1)((0, n(862060).eC)(t)), [t]);
                return (0, i.jsx)("span", {
                    children: r
                })
            })
        },
        625921: (e, t, n) => {
            n.d(t, {
                AC: () => l,
                I2: () => r,
                YC: () => a
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let {
                    enabled: t,
                    labelIfEnabled: i,
                    labelIfDisabled: r
                } = e;
                return (0, o.jsx)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: t ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(n(16275).I, {
                            icon: n(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        }), (0, o.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: i
                        })]
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(n(16275).I, {
                            icon: n(25094).xMarkSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }), (0, o.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: r
                        })]
                    })
                })
            }

            function r(e) {
                let t = "none" !== e;
                return [(0, o.jsx)(i, {
                    enabled: t && e.read_content,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.mixedAccess.readContent.enabled",
                        defaultMessage: "Can read content"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.readContent.disabled",
                        defaultMessage: "Cannot read content"
                    })
                }, "read_content"), (0, o.jsx)(i, {
                    enabled: t && e.insert_content,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.insertContent.enabled",
                        defaultMessage: "Can insert content"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.insertContent.disabled",
                        defaultMessage: "Cannot insert content."
                    })
                }, "insert_content"), (0, o.jsx)(i, {
                    enabled: t && e.update_content,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.updateContent.enabled",
                        defaultMessage: "Can update content"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.updateContent.disabled",
                        defaultMessage: "Cannot update content"
                    })
                }, "update_content"), (0, o.jsx)(i, {
                    enabled: t && e.insert_comment,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.insertComment.enabled",
                        defaultMessage: "Can comment"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.insertComment.disabled",
                        defaultMessage: "Cannot comment"
                    })
                }, "insert_comment"), (0, o.jsx)(i, {
                    enabled: t && e.read_comment,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.readComment.enabled",
                        defaultMessage: "Can read comments"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.readComment.disabled",
                        defaultMessage: "Cannot read comments"
                    })
                }, "read_comment")]
            }

            function a(e) {
                return [(0, o.jsx)(i, {
                    enabled: e.read_user_without_email,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUsers.enabled",
                        defaultMessage: "Can view users"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUsers.disabled",
                        defaultMessage: "Cannot view users"
                    })
                }, "read_user_without_email"), (0, o.jsx)(i, {
                    enabled: e.read_user_with_email,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled",
                        defaultMessage: "Can view user email addresses"
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled",
                        defaultMessage: "Cannot view user email addresses"
                    })
                }, "read_user_with_email")]
            }

            function l(e) {
                return [(0, o.jsx)(i, {
                    enabled: e.link_preview,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.linkPreview.enabled",
                        defaultMessage: "Can preview links."
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.linkPreview.disabled",
                        defaultMessage: "Cannot preview links."
                    })
                }, "link_preview"), (0, o.jsx)(i, {
                    enabled: e.synced_database,
                    labelIfEnabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.syncedDatabase.enabled",
                        defaultMessage: "Can sync databases."
                    }),
                    labelIfDisabled: (0, o.jsx)(n(109939).sA, {
                        id: "capabilitiesTooltip.syncedDatabase.disabled",
                        defaultMessage: "Cannot sync databases."
                    })
                }, "synced_database")]
            }
        },
        633418: (e, t, n) => {
            n.d(t, {
                j: () => s
            });
            var o = n(296540),
                i = n(474848);
            let r = {
                    k1xSpc: "x78zum5",
                    kGNEyG: "x6s0dn4",
                    kjj79g: "xl56j7k",
                    krdFHd: "xjwep3j",
                    kfmiAY: "x1t39747",
                    kT0f0o: "x1wcsgtt",
                    kVL7Gh: "x1pczhz8",
                    $$css: !0
                },
                a = {
                    kkrTdU: "x1jm3nie",
                    $$css: !0
                },
                l = {
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                },
                s = (0, o.forwardRef)(function(e, t) {
                    let s = (0, n(109939).tz)(),
                        d = (0, n(533992).v3)(),
                        c = e["aria-label"],
                        {
                            disableDrag: u,
                            hideClickMessage: p
                        } = e,
                        m = (0, o.useMemo)(() => {
                            if (void 0 !== c) return c;
                            let e = !u,
                                t = !p;
                            return e && t ? s.formatMessage({
                                id: "dragHandleButton.ariaLabel.dragAndClick",
                                defaultMessage: "Drag to move, click to open menu"
                            }) : e ? s.formatMessage({
                                id: "dragHandleButton.ariaLabel.dragOnly",
                                defaultMessage: "Drag to move"
                            }) : t ? s.formatMessage({
                                id: "dragHandleButton.ariaLabel.clickOnly",
                                defaultMessage: "Click to open menu"
                            }) : ""
                        }, [c, u, p, s]),
                        {
                            onClick: f
                        } = e,
                        g = (0, o.useCallback)(e => {
                            f && (e.preventDefault(), f(e))
                        }, [f]),
                        h = (0, o.useCallback)(o => (0, i.jsx)(n(800526).U, {
                            ref: t,
                            ariaLabel: m,
                            role: e.role,
                            style: [r, e.disableDrag ? l : a, ((e, t) => [{
                                kzqmXN: null != e ? "x5lhr3w" : e,
                                kZKoxP: null != t ? "x16ye13r" : t,
                                $$css: !0
                            }, {
                                "--x-width": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                                "--x-height": "number" == typeof t ? t + "px" : null != t ? t : void 0
                            }])(e.width ? ? n(859996).Z9, e.height ? ? n(859996).SP), e.style],
                            onClick: e.onClick,
                            onContextMenu: g,
                            disallowTabbing: e.disallowTabbing,
                            ...o,
                            children: (0, i.jsx)(n(16275).I, {
                                icon: n(424107).i,
                                colorVariant: "tertiary"
                            })
                        }), [m, g, e.disableDrag, e.disallowTabbing, e.height, e.onClick, e.role, e.style, e.width, t]);
                    return e.disableTooltip ? h({}) : (0, i.jsx)(n(51831).m, {
                        placement: e.tooltipPlacement ? ? "bottom",
                        delayThreshold: 300,
                        allowHover: !0,
                        content: function() {
                            let t = d.device.isMac ? "⌘/" : "ctrl/";
                            return (0, i.jsxs)("div", { ...{
                                    className: "x2b8uid"
                                },
                                children: [e.disableDrag ? void 0 : void 0 !== e.dragTooltipMessage ? e.dragTooltipMessage : (0, i.jsx)(n(109939).sA, {
                                    defaultMessage: "Drag <medium>to move</medium>",
                                    id: "dragHandleButton.dragPrompt.text",
                                    values: {
                                        medium: e => (0, i.jsx)("span", {
                                            className: "x1achzq6",
                                            children: e
                                        })
                                    }
                                }), e.hideClickMessage ? void 0 : (0, i.jsx)("div", {
                                    children: (0, i.jsx)(n(109939).sA, {
                                        defaultMessage: "Click <medium>or</medium> <kbd>⌘/</kbd> <medium>to open menu</medium>",
                                        id: "dragHandleButton.clickPrompt.text",
                                        values: {
                                            medium: e => (0, i.jsx)("span", {
                                                className: "x1achzq6",
                                                children: e
                                            }),
                                            kbd: () => (0, i.jsx)("kbd", {
                                                children: t
                                            })
                                        }
                                    })
                                })]
                            })
                        },
                        children: h
                    })
                })
        },
        644967: (e, t, n) => {
            n.d(t, {
                n: () => o
            });

            function o(e, t) {
                (0, n(195857).DO_NOT_USE_trackLegacy)("tap_mobile_action_bar_item", {
                    item_name: t.itemName,
                    from: t.from
                })
            }
        },
        653594: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var o = n(296540);

            function i(e) {
                return e.blocks.every(e => e.isRestricted())
            }
            n(898992), n(823215);
            var r = n(474848);
            let a = {
                    style0: {
                        backgroundColor: n(632079).Tj.sidebarSecondaryBackground,
                        boxShadow: `0 -1px 0 ${n(632079).Tj.border.secondaryTranslucent}`,
                        marginTop: n(986939).A.isMobile ? 28 : 1
                    },
                    style1: {
                        padding: 12
                    },
                    style2: {
                        marginTop: 6,
                        fontWeight: n(699422).Wy.semibold
                    }
                },
                l = function({
                    store: e
                }) {
                    let t = (0, n(533992).v3)(),
                        l = (0, n(67499).S)(),
                        d = (0, o.useMemo)(() => ({
                            environment: t,
                            blocks: [e],
                            publicEditMode: void 0,
                            pageContext: l
                        }), [t, e, l]),
                        c = (0, n(682985).K8)(() => (0, n(648903).U)([i, (0, n(572251).A)(n(998256).p)])(d), [d]),
                        u = (0, n(682985).K8)(() => (0, n(648903).U)([n(818285)._, (0, n(572251).A)(n(329117).K)])(d), [d]);
                    return c ? (0, r.jsx)("div", {
                        style: a.style0,
                        children: (0, r.jsxs)(n(64960).Ay, {
                            disabled: !u,
                            style: a.style1,
                            onClick: () => s(e, t),
                            children: [(0, r.jsx)(n(324489).V, {
                                isMultiline: !0,
                                isSmall: !0,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "blockMenuRestrictedMessage.label",
                                    defaultMessage: "You don’t have permission to edit this block because it is restricted."
                                })
                            }), u ? (0, r.jsx)(n(324489).V, {
                                style: a.style2,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "blockMenuRestrictedMessage.adminRestoreAction.label",
                                    defaultMessage: "Restore permissions"
                                })
                            }) : void 0]
                        })
                    }) : null
                };
            async function s(e, t) {
                if (!e.isDefined()) return;
                let o = e.getPermissionItems(),
                    i = (0, n(190623).K)(e),
                    a = i ? n(579825).wD((0, n(625925).E)(i)) : [],
                    l = {
                        type: "restore",
                        permissionChanges: n(579825).Cd(e.getModel(), o, a)
                    },
                    {
                        accept: s
                    } = await n(647095).Gh({
                        message: (0, n(560860).r6)(l),
                        acceptLabel: (0, n(560860).QU)(l),
                        cancelLabel: (0, r.jsx)(n(109939).sA, {
                            id: "restrictedPermissionConfirmationModal.actionButton.close",
                            defaultMessage: "Close"
                        }),
                        description: (0, r.jsx)(n(560860).f2, {
                            openState: l
                        })
                    });
                s && (0, n(713634).Y)({
                    environment: t,
                    store: e
                })
            }
        },
        671215: (e, t, n) => {
            n.d(t, {
                p: () => a,
                A: () => l
            });
            var o = n(296540);
            let i = 24 * n(695216).pT;

            function r(e) {
                if (!(null != e && e.enabled)) return {
                    status: "disabled"
                };
                let t = e.start_ts ? 1e3 * e.start_ts - Date.now() : 0;
                return t <= 0 ? {
                    status: "active"
                } : t <= i ? {
                    status: "warning",
                    nextUpdateInMs: t
                } : {
                    status: "scheduled",
                    nextUpdateInMs: t - i
                }
            }

            function a(e) {
                let [t, n] = (0, o.useState)(() => r(e).status);
                return (0, o.useEffect)(() => {
                    let t;
                    if (null != e && e.enabled) return function o() {
                        t = void 0;
                        let {
                            status: i,
                            nextUpdateInMs: a
                        } = r(e);
                        n(i), a && (t = setTimeout(o, a))
                    }(), () => {
                        t && (clearTimeout(t), t = void 0)
                    }
                }, [e]), t
            }

            function l(e) {
                let [t, i] = (0, o.useState)(() => Date.now()), a = (null == e ? void 0 : e.enabled) && e.start_ts;
                return (0, o.useEffect)(() => {
                    let e;
                    if ("number" == typeof a) return ! function t() {
                        let o = Date.now();
                        i(o);
                        let r = a * n(695216).TD - o;
                        if (r > 0) {
                            let o = r % n(695216).Xb;
                            e = setTimeout(t, 0 === o ? n(695216).Xb : o)
                        } else e = void 0
                    }(), () => {
                        e && (clearTimeout(e), e = void 0)
                    }
                }, [a]), {
                    freezeStatus: r(e).status,
                    minUntilFreeze: a ? Math.floor((a * n(695216).TD - t) / n(695216).Xb) : void 0
                }
            }
        },
        674880: (e, t, n) => {
            n.d(t, {
                BX: () => m,
                Jv: () => p,
                Kf: () => s,
                WM: () => r,
                Xd: () => f,
                Xw: () => g,
                defaultInferenceContextStore: () => o,
                fd: () => c,
                i6: () => l,
                uP: () => d
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let o = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    o = n(728372).AppStoreSidebarSpaceViewStore.state,
                    i = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && o) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: o,
                    blockStore: i,
                    peekStore: n(475097).default.state.open ? n(475097).default.state.targetStore : void 0,
                    workflowStore: (0, n(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function i(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let o = (0, n(444610).U)(e),
                        i = null == o ? void 0 : o.collectionViewStore();
                    i && (t[e.id] = i.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let o = (0, n(444610).U)(e),
                            i = null == o ? void 0 : o.collectionViewStore();
                        i && (t[e.id] = i.id)
                    }
                });
                return t
            }

            function r(e) {
                let {
                    environment: t,
                    surface: o,
                    inferenceContext: r,
                    config: a,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: d
                } = e, {
                    userStore: c,
                    spaceStore: u,
                    spaceViewStore: p,
                    blockStore: m,
                    peekStore: f,
                    workflowStore: g
                } = r, h = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: u.id
                }), v = "meet" === t.RouterStore.state.route.name, b = { ...m && m.isCollectionView() ? {
                        collectionViewBlockId: m.id,
                        visibleCollectionViewIds: i(m)
                    } : void 0,
                    ...m && !m.isCollectionView() && "personal_home_page" !== m.getType() && "daily_brief_reminder" !== o ? {
                        blockId: m.id,
                        visibleCollectionViewIds: i(m)
                    } : void 0,
                    ...f ? {
                        peekBlockId: f.id,
                        visibleCollectionViewIds: i(f)
                    } : void 0,
                    ...g ? {
                        workflowId: g.id
                    } : void 0,
                    ...v ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: o,
                            userId: i
                        } = e, r = t.idCreator.getSpaceIdCreatorSync(o), a = (0, n(413388).sX)(i, r);
                        return {
                            collectionViewBlockId: a,
                            visibleCollectionViewIds: {
                                [a]: (0, n(413388).X$)(i, r)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: u.id,
                        userId: c.id
                    }) : void 0
                }, y = {};
                if ("workflow" !== a.type || !a.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var S;
                        t.name && (y.agentName = t.name), null != (S = t.customization_items) && S[0] && (y.agentAccessory = t.customization_items[0]), t.context_page_id && (y.context_page_id = t.context_page_id)
                    }
                }
                let x = function(e) {
                    var t, o, i;
                    let {
                        config: r,
                        workflowStore: a
                    } = e;
                    if ("workflow" !== r.type || !r.isCustomAgent || !a) return;
                    let l = !0 === r.useCustomAgentDraft || !0 === r.use_draft_actor_pointer ? (null == (t = a.getDraftData()) ? void 0 : t.instructions) ? ? (null == (o = a.getData()) ? void 0 : o.instructions) : null == (i = a.getPublishedArtifactStore()) || null == (i = i.getData()) ? void 0 : i.instructions;
                    if ((0, n(886883).ap)(l)) return l.id
                }({
                    config: a,
                    workflowStore: g
                });
                if (x && (y.context_page_id = x), n(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: o,
                        ...b,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === o && s && d ? {
                            checklistId: s,
                            checklistStepId: d
                        } : {},
                        ...y
                    }
                };
                let w = n(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: o = 10
                    } = e;
                    return n(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, o)
                }({
                    spaceId: u.id
                }) : void 0;
                return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: c.getName(),
                        userId: c.id,
                        userEmail: c.getEmail(),
                        spaceName: u.getName(),
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: o,
                        ...b,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === o && s && d ? {
                            checklistId: s,
                            checklistStepId: d
                        } : {},
                        ...y,
                        recentPageVisits: w
                    }
                }
            }

            function a(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    config: i
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "config",
                    value: i
                }
            }

            function l(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: o,
                    config: i
                } = e;
                if (!t.some(e => "config" === e.type)) return a({
                    environment: n,
                    spaceStore: o,
                    config: i
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    value: i,
                    userStore: r
                } = e, a = u(i);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "user",
                    value: a,
                    userId: r.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    actualMessage: i,
                    displayMessage: r,
                    userStore: a,
                    surveyStepId: l,
                    sourceStepId: s
                } = e, d = u(i) ? ? [], c = u(r);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "user-injected",
                    actualMessage: d,
                    displayMessage: c,
                    userId: a.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: l,
                    sourceStepId: s
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    agentMessageKey: i,
                    instructions: r
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: i,
                    instructions: r
                }
            }

            function u(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: o,
                promptType: i,
                value: r,
                locale: a,
                args: l
            }) {
                return {
                    id: (0, n(295447).Z1)({
                        environment: e,
                        table: n(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: i,
                    userId: o.id,
                    createdAt: Date.now(),
                    value: r,
                    locale: a,
                    isEdited: !1,
                    args: l
                }
            }

            function m(e) {
                let t, o, {
                    environment: i,
                    spaceId: r,
                    pointers: a,
                    selectedBlockStores: l,
                    textSelection: s,
                    blockSelectionContext: d,
                    textSelectionContext: c
                } = e;
                if (d) t = d;
                else if (l && l.length > 0) {
                    let e = (0, n(685745).B)(l);
                    e && (t = {
                        type: "blocks",
                        value: l.map(e => e.pointer),
                        text: (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) o = c;
                else if (s && s.start.store.pointer.table === n(832375).evP && s.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        i = e.length > 1200;
                    o = {
                        type: "text",
                        value: {
                            start: {
                                pointer: s.start.store.pointer,
                                index: s.start.index
                            },
                            end: {
                                pointer: s.end.store.pointer,
                                index: s.end.index
                            }
                        },
                        text: t,
                        ...i ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== a.length || t || o) return {
                    id: (0, n(295447).Z1)({
                        environment: i,
                        table: n(832375).mSw,
                        spaceId: r
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: a,
                        blockSelection: t,
                        textSelection: o
                    }
                }
            }

            function f(e) {
                let {
                    environment: t,
                    inferenceContext: o,
                    config: i,
                    addSteps: l,
                    surface: s,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                } = e, p = [a({
                    environment: t,
                    spaceStore: o.spaceStore,
                    config: i
                }), r({
                    environment: t,
                    inferenceContext: o,
                    surface: s,
                    config: i,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                })];
                return l && p.push(...l), p.filter(n(722371).O9)
            }

            function g(e) {
                let {
                    environment: t,
                    spaceId: o,
                    message: i,
                    notificationType: r = "info",
                    metadata: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: o
                    }),
                    type: "system-notification",
                    message: i,
                    notificationType: r,
                    metadata: a
                }
            }
        },
        685745: (e, t, n) => {
            n.d(t, {
                B: () => a
            });
            var o = () => n(129499),
                i = () => n(955630);

            function r(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && n(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== i().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function a(e) {
                let t, i = r(e);
                if (!i) return;
                let a = r([...e].reverse());
                if (!a) return;
                let l = (0, n(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: i.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!l) return;
                let s = (0, n(787926).mP)(a.blockStore, l);
                if (s) {
                    for (let e of (0, n(827049).Y_)(s)) {
                        let n = e.value.store.getTitleStore();
                        if (n) {
                            let e = (0, o().s)(n);
                            e && (t = {
                                store: n,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: i.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        713634: (e, t, n) => {
            n.d(t, {
                Y: () => o
            });
            async function o(e) {
                let {
                    environment: t,
                    store: o,
                    from: i,
                    shareMenuSessionId: r
                } = e, a = n(728372).AppStoreSidebarSpaceStore.state;
                if (a) {
                    let e = a.id,
                        l = o.id,
                        s = await t.api.callApi({
                            eventName: "spaceAdminRestoreAccess",
                            environment: t,
                            data: {
                                spaceId: e,
                                blockId: l
                            }
                        });
                    (0, n(853925).K)(t, {
                        using_admin_api: !0,
                        from: i,
                        share_menu_session_id: r
                    }), "failed" === s.type && n(647095).Qg(s)
                }
            }
        },
        725111: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowInCircleDownIcon: () => r,
                iconDefinition: () => i
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M6.958 10.446a.625.625 0 0 1 .884 0l1.533 1.533V6.513a.625.625 0 1 1 1.25 0v5.466l1.533-1.533a.625.625 0 1 1 .884.883l-2.6 2.6a.625.625 0 0 1-.884 0l-2.6-2.6a.625.625 0 0 1 0-.883"
                        }), (0, o.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                r = (0, n(104509).wt)("arrowInCircleDown", i, "default")
        },
        726342: (e, t, n) => {
            n.d(t, {
                u: () => o
            });

            function o(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
        },
        739271: (e, t, n) => {
            n.d(t, {
                s: () => i
            });
            var o = n(296540);

            function i() {
                let [e, t] = (0, o.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [n, i] = (0, o.useState)(!1), [r, a] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    if (n) {
                        function e() {
                            a(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && a(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [n]), [(0, o.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && r,
                    onFocus: () => {
                        i(!0)
                    },
                    onBlur: () => {
                        i(!1)
                    }
                }), [e, r]), (0, o.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: r,
                    isComboboxFocused: n,
                    onItemHover: () => {
                        a(!1)
                    }
                }), [r, n])]
            }
        },
        746204: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                i = (0, n(104509).wt)("arrowChevronSingleLeftFill", o, "fill")
        },
        758737: (e, t, n) => {
            n.d(t, {
                R: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.41 3.05 9.98 9.9",
                    directional: !0,
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M4.482 3.238a.625.625 0 1 0-.884.884L7.476 8l-3.878 3.878a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                        }), (0, o.jsx)("path", {
                            d: "M8.882 3.238a.625.625 0 0 0-.884.884L11.876 8l-3.878 3.878a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("arrowChevronDoubleForwardSmall", i, "small")
        },
        766970: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                xMarkFillIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                i = (0, n(104509).wt)("xMarkFill", o, "fill")
        },
        789722: (e, t, n) => {
            n.d(t, {
                W: () => o
            });
            let o = (0, n(109939).YK)({
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
        796123: (e, t, n) => {
            n.r(t), n.d(t, {
                showAsyncModal: () => i,
                showAsyncModalComponent: () => r,
                testOnly: () => m
            }), n(898992), n(354520), n(672577), n(581454);
            var o = n(296540);

            function i(e, t = n(2009).w) {
                return new Promise((n, o) => {
                    try {
                        let i = c({
                            renderModal: e,
                            promiseResolve: n,
                            promiseReject: o,
                            store: t
                        });
                        a({
                            asyncModal: i,
                            store: t
                        })
                    } catch (e) {
                        o(e)
                    }
                })
            }

            function r(e, t = n(2009).w) {
                return i(t => o.createElement(e, t), t)
            }

            function a(e) {
                let {
                    asyncModal: t,
                    store: o = n(2009).w
                } = e;
                o.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function l(e) {
                let {
                    id: t,
                    promiseResolve: o,
                    store: i = n(2009).w
                } = e;
                return e => {
                    let n = u({
                        id: t,
                        store: i
                    });
                    null != n && n.isOpen && (p({
                        id: t,
                        store: i,
                        update: {
                            isOpen: !1
                        }
                    }), o(e))
                }
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: o,
                    store: i = n(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: i
                    });
                    null != e && e.isOpen && (p({
                        id: t,
                        store: i,
                        update: {
                            isOpen: !1
                        }
                    }), o())
                }
            }

            function d(e) {
                let {
                    id: t,
                    store: o = n(2009).w
                } = e;
                return () => {
                    o.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function c(e) {
                let {
                    renderModal: t,
                    promiseResolve: o,
                    promiseReject: i,
                    store: r = n(2009).w
                } = e, a = n(92513).JW(), c = d({
                    id: a,
                    store: r
                }), u = s({
                    id: a,
                    promiseResolve: o,
                    store: r
                }), p = l({
                    id: a,
                    promiseResolve: o,
                    store: r
                });
                return {
                    id: a,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: c,
                                onDismiss: u,
                                resolve: p
                            })
                        } catch (e) {
                            throw i(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: o = n(2009).w
                } = e;
                return o.state.asyncModals.find(e => e.id === t)
            }

            function p(e) {
                let {
                    id: t,
                    update: o,
                    store: i = n(2009).w
                } = e;
                i.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...o
                    })
                }))
            }
            let m = {
                addAsyncModal: a,
                createAsyncModal: c,
                createOnClosed: d,
                createOnDismiss: s,
                createResolve: l,
                getAsyncModal: u,
                updateAsyncModal: p
            }
        },
        799843: (e, t, n) => {
            n.d(t, {
                DG: () => d,
                OH: () => l,
                nl: () => a,
                x$: () => s
            });
            let o = (0, n(109939).YK)({
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
                i = (0, n(109939).YK)({
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
                r = (0, n(109939).YK)({
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

            function a(e, {
                useCompactFormat: t,
                useUltraCompactFormat: l,
                useLowercase: s,
                roundDownYears: d,
                useWeeks: c,
                showDaysToOneWeek: u,
                nowOverrideMs: p = Date.now()
            } = {}) {
                let m = l ? i : t ? r : o,
                    f = new Date(e),
                    g = n(962299).A.getIntl().locale,
                    h = new Date(p),
                    v = Number(h) - e;
                if (v >= n(627179).Gq && d) {
                    let e = Math.floor(v / n(627179).Gq);
                    return n(962299).A.formatMessage(m.year, {
                        numYears: e
                    })
                }
                if (f.getFullYear() !== h.getFullYear()) return f.toLocaleDateString(g, l ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let b = Math.floor(v / n(627179).nD);
                if (b < 28 && b > 7 && c || u && 7 === b) {
                    let e = Math.floor(b / 7);
                    return n(962299).A.formatMessage(m.week, {
                        numWeeks: e
                    })
                }
                if (u && b > 6 || !u && b >= 3) return f.toLocaleDateString(g, {
                    month: "short",
                    day: "numeric"
                });
                if (b >= 1) return n(962299).A.formatMessage(m.day, {
                    numDays: b
                });
                let y = Math.floor(v / n(627179).pT);
                if (y >= 1) return n(962299).A.formatMessage(m.hour, {
                    numHours: y
                });
                let S = Math.floor(v / n(627179).Xb);
                return S >= 1 ? n(962299).A.formatMessage(m.minute, {
                    numMinutes: S
                }) : s ? n(962299).A.formatMessage(m.second).toLocaleLowerCase() : n(962299).A.formatMessage(m.second)
            }

            function l(e, t) {
                let o = t - e,
                    i = Math.floor(o / n(627179).Gq),
                    r = Math.floor(o / n(627179).nD),
                    a = Math.floor(o / n(627179).pT),
                    l = Math.floor(o / n(627179).Xb),
                    s = Math.floor(o / n(627179).TD);
                return i >= 1 ? n(962299).A.formatMessage(n(362008).jX.year, {
                    numYears: i
                }) : r >= 1 ? n(962299).A.formatMessage(n(362008).jX.day, {
                    numDays: r
                }) : a >= 1 ? n(962299).A.formatMessage(n(362008).jX.hour, {
                    numHours: a
                }) : l >= 1 ? n(962299).A.formatMessage(n(362008).jX.minute, {
                    numMinutes: l
                }) : n(962299).A.formatMessage(n(362008).jX.second, {
                    numSeconds: s
                })
            }

            function s(e, t) {
                return new Date(e).toLocaleDateString(n(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function d(e) {
                return new Date(e).toLocaleDateString(n(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        816231: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var o = n(296540),
                i = n(474848);

            function r(e) {
                let t = (0, o.useRef)(null),
                    n = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    let o = e.el.getBoundingClientRect();
                    n.style.height = `${o.height}px`;
                    let i = 0,
                        r = e => {
                            cancelAnimationFrame(i), i = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: n,
                                    mouseY: o
                                }) {
                                    let {
                                        x: i,
                                        y: r,
                                        height: a,
                                        width: l
                                    } = t;
                                    if (n > i) {
                                        let t = Math.max(n - (i + l), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(o-r)/a}%)`
                                    } else {
                                        let t = Math.max(i - n, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(o-r)/a}%, 100% 100%)`
                                    }
                                }({
                                    div: n,
                                    rect: o,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", r), () => {
                        window.removeEventListener("mousemove", r), cancelAnimationFrame(i)
                    }
                }, [e.el]);
                let r = o.useCallback(e => {
                    if (!n.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let o = document.elementFromPoint(e.clientX, e.clientY);
                        if (o === t.current && (t.current.style.visibility = "hidden", o = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), o && o !== t.current) {
                            n.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                o.dispatchEvent(t)
                            } finally {
                                n.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, i.jsx)("div", {
                    ref: t,
                    onClick: r,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let a = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                l = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                s = o.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: s,
                    allowOptionalExtensionMenu: d,
                    ...c
                }, u) {
                    let {
                        disabled: p,
                        disableDefaultClick: m,
                        onFocus: f,
                        focused: g,
                        placementToOrigin: h,
                        alignmentToOrigin: v,
                        disableCloseOnEnter: b,
                        bottomSheetInitialState: y,
                        popupTypeOverride: S
                    } = c, x = (0, n(533992).WS)(), w = (0, n(649476).Tf)(), [A, I] = (0, o.useState)(!1), [k, C] = (0, o.useState)(!1), M = (0, o.useRef)(null), _ = (0, o.useRef)(null), T = (0, o.useRef)(null), j = (0, o.useRef)(null), B = (0, o.useCallback)(() => {
                        T.current && window.clearTimeout(T.current), j.current && window.clearTimeout(j.current), T.current = null, j.current = null
                    }, []), D = (0, o.useCallback)(() => {
                        B(), p || (I(!0), C(!0))
                    }, [p, B]), P = (0, o.useCallback)(() => {
                        B(), C(!1), I(!1)
                    }, [B]), R = (0, o.useCallback)(e => {
                        B(), A || (e && e.preventDefault && e.preventDefault(), T.current = window.setTimeout(D, 120))
                    }, [A, B, D]), E = (0, o.useCallback)(() => {
                        C(!1), B(), A && (j.current = window.setTimeout(P, 100))
                    }, [A, P, B]), V = (0, o.useCallback)(t => {
                        f(), D(), d && (null == e || e(t), P())
                    }, [f, D, d, e, P]), z = (0, o.useCallback)(() => {
                        x || R()
                    }, [R, x]), N = (0, o.useCallback)(() => {
                        x || (f(), R())
                    }, [f, R, x]), F = (0, o.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = M.current;
                        A && t && !t.contains(e.target) && P()
                    }, [A, P]), L = (0, o.useCallback)(e => {
                        13 === e.keyCode && A && !b && P()
                    }, [A, P, b]);
                    (0, o.useEffect)(() => {
                        if (!m) return window.addEventListener("click", F), () => {
                            window.removeEventListener("click", F)
                        }
                    }, [m, F]), (0, o.useEffect)(() => (window.addEventListener("keydown", L), () => {
                        window.removeEventListener("keydown", L)
                    }), [L]);
                    let U = (0, o.useRef)(g);
                    (0, o.useEffect)(() => {
                        !g && U.current && E(), U.current = g
                    }, [g, E]);
                    let O = { ...(0, n(63390).A)({
                                onMouseEnter: z,
                                onClick: V
                            }, c),
                            showExtensionArrow: !0
                        },
                        H = n(423291).n.Popup;
                    return S ? H = S : x && (H = w ? n(423291).n.BottomSheet : n(423291).n.SlideUp), (0, i.jsx)(n(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: g,
                        onEnter: A ? void 0 : R,
                        onRight: R,
                        onLeft: A ? E : void 0,
                        onEsc: A ? E : void 0,
                        children: (0, i.jsx)(n(182718).zD, {
                            popupType: H,
                            bottomSheetInitialState: y,
                            open: A,
                            placementToOrigin: h ? ? "right",
                            alignmentToOrigin: v ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !x,
                            preventCaptureEsc: !0,
                            ref: M,
                            content: () => (0, i.jsxs)(i.Fragment, {
                                children: [!x && k && _.current ? (0, i.jsx)(r, {
                                    el: _.current
                                }) : null, (0, i.jsx)("div", {
                                    ref: _,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: s({
                                        onMouseEnter: N
                                    }, {
                                        close: E
                                    })
                                })]
                            }),
                            style: [l, x && a],
                            trapFocus: !0,
                            onDismiss: P,
                            children: null == t ? void 0 : t(O, u)
                        })
                    })
                })
        },
        828294: (e, t, n) => {
            function o(e) {
                let t = (0, n(83208).X)(e);
                return "on" === (0, n(604306).r)("agent_writer_custom_skills") || t
            }

            function i(e) {
                return "on" === n(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || n(218744).default.checkGate({
                    gateName: e
                })
            }
            n.d(t, {
                N: () => o,
                a: () => i
            })
        },
        845001: (e, t, n) => {
            function o(e, t) {
                return n(218744).default.checkGate({
                    gateName: "collections_capabilities_refactor"
                }) ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1
            }

            function i(e, t) {
                let o = (0, n(83208).X)("collections_capabilities_refactor");
                return (0, n(682985).K8)(() => o ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1, [e, t, o])
            }
            n.d(t, {
                q: () => o,
                x: () => i
            })
        },
        847442: (e, t, n) => {
            n.d(t, {
                s: () => o
            }), n(898992), n(672577);

            function o(e) {
                let t = n(400890).A.find(t => t.store === e);
                if (t) {
                    let e = t.getContentWrapEl();
                    if (e) return (0, n(287513).A)(e.innerText)
                }
                return 0
            }
        },
        848288: (e, t, n) => {
            n.d(t, {
                g: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let {
                    store: t,
                    showWordCount: i
                } = e, r = (0, n(533992).v3)(), a = (0, n(533992).WS)(), l = (0, n(109939).tz)(), s = (0, n(682985).K8)(() => (0, n(505941).y)(r), [r]), d = (0, n(682985).K8)(() => t.canRead(), [t]), c = (0, n(682985).K8)(() => {
                    let e = t.getLastEditedByPointer();
                    if (!e || !t.getRecordModel) return;
                    let o = (0, n(197018).xC)({
                        pointer: e,
                        getRecordModel: t.getRecordModel
                    });
                    if (null != o && o.asActor) return (0, n(197018).lR)(l, o)
                }, [t, l]), u = (0, n(682985).K8)(() => t.getLastEditedTime(), [t]), p = (0, n(960253).I)(() => ({
                    label: {
                        marginTop: a ? 8 : 4,
                        marginBottom: a ? 8 : 4
                    }
                }), [a]);
                if (s || !d) return null;
                let m = c && u,
                    f = m ? (0, o.jsxs)("div", {
                        children: [i ? (0, o.jsx)(n(324489).V, {
                            isSmall: !0,
                            isSecondaryColor: !0,
                            isMultiline: !0,
                            style: p.label,
                            children: (0, o.jsx)(n(109939).sA, {
                                id: "pageMoreButton.wordCount.caption",
                                defaultMessage: "Word count: {count}",
                                values: {
                                    count: (0, o.jsx)(n(568427).A, {
                                        store: t
                                    })
                                }
                            })
                        }) : void 0, (0, o.jsx)(n(324489).V, {
                            isSmall: !0,
                            isSecondaryColor: !0,
                            isMultiline: !0,
                            style: p.label,
                            children: (0, o.jsx)(n(109939).sA, {
                                id: "blockAuthorInfo.label",
                                defaultMessage: "Last edited by {author}",
                                values: {
                                    author: c
                                }
                            })
                        }), (0, o.jsx)(n(324489).V, {
                            isSmall: !0,
                            isSecondaryColor: !0,
                            style: p.label,
                            children: (0, n(850640).jE)(u, n(849917).locale, l)
                        })]
                    }) : void 0;
                return (0, o.jsx)(n(33402).J, {
                    store: t,
                    placement: "right",
                    children: (0, o.jsx)(n(844565).A, {
                        topBorder: !0,
                        children: (0, o.jsx)(n(636518).Ay, {
                            shouldWrapTitle: !0,
                            title: f,
                            loading: !m
                        })
                    })
                })
            }
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => o
            });

            function o(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        },
        877163: (e, t, n) => {
            n.d(t, {
                m: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                i = (0, n(104509).wt)("lightning", o, "default")
        },
        877234: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => w
            });
            var o = n(296540);
            n(898992), n(672577);
            var i = n(474848);
            let r = (0, n(109939).YK)({
                    ariaLabelApple: {
                        id: "block.selectableAddMenu.ariaLabel.apple",
                        defaultMessage: "Click to add below. Option-click to add a block above"
                    },
                    ariaLabelWindows: {
                        id: "block.selectableAddMenu.ariaLabel.windows",
                        defaultMessage: "Click to add below. Alt-click to add a block above"
                    }
                }),
                a = (0, o.forwardRef)(function({
                    store: e,
                    nodeRect: t,
                    containerRect: o,
                    selectable: a,
                    containedGroup: l
                }, d) {
                    let c = (0, n(109939).tz)(),
                        u = (0, n(533992).v3)(),
                        p = (0, n(533992).WS)(),
                        m = (0, n(67499).S)(),
                        f = (0, n(682985).K8)(() => {
                            var t;
                            return "editor" === e.getRole() || "read_and_write" === e.getRole() || (null == m || null == (t = m.publicEditModeStore.state) ? void 0 : t.permission) === "edit"
                        }, [null == m ? void 0 : m.publicEditModeStore, e]),
                        g = (0, n(682985).K8)(() => {
                            var t, n;
                            return (null == (t = e.getNavigableBlockStore({
                                skipCurrent: !0
                            })) ? void 0 : t.getRole()) === "comment_only" || (null == m || null == (n = m.publicEditModeStore.state) ? void 0 : n.permission) === "comment"
                        }, [null == m ? void 0 : m.publicEditModeStore, e]),
                        h = (0, n(682985).K8)(() => "suggest" === n(708929).Uv.getMode(e), [e]),
                        v = (0, n(682985).K8)(() => e.isFirstBlockInCalloutV2Block(), [e]),
                        b = (0, n(682985).K8)(() => {
                            var t;
                            let o = m && (0, n(933062).Nh)(m.pageStore.id),
                                i = e.getType();
                            return !(i && ["column_list", "external_object_instance_page"].includes(i)) && !p && (!(0, n(88527).r)(e) || (null == (t = e.getParentStore()) ? void 0 : t.table) === "collection") && (f || g && h) && !e.isNavigableAncestorExternallyImportedPage() && !o && !v && !e.isPersonProfile()
                        }, [g, f, v, p, h, m, e]),
                        y = (0, n(682985).K8)(() => {
                            var t;
                            return null == (t = e.getSpaceStore()) ? void 0 : t.getFreezeSettings()
                        }, [e]),
                        S = (0, n(671215).p)(y),
                        x = (0, n(643160).yf)(),
                        w = (0, n(682985).K8)(() => (function(e, t, o, i, r, a, l) {
                            let s = l ? n(104335).y9 : 24,
                                d = {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fill: n(632079).Tj.icon.tertiary,
                                    width: s,
                                    height: s,
                                    borderRadius: l ? 6 : 4,
                                    pointerEvents: "auto",
                                    ...a ? {} : {
                                        cursor: "-webkit-grab"
                                    }
                                };
                            if (l) return d;
                            let c = (0, n(783418).qg)({
                                marginItemType: "plus_button",
                                store: e,
                                environment: t,
                                nodeRect: o,
                                containerRect: i,
                                selectable: r
                            });
                            return { ...d,
                                position: "absolute",
                                insetInlineStart: c
                            }
                        })(e, u, t, o, a, x, l), [e, u, t, o, a, x, l]);
                    return b && "active" !== S ? (0, i.jsx)(n(51831).m, {
                        placement: "bottom",
                        delayThreshold: 300,
                        allowHover: !0,
                        content: () => (0, i.jsx)(s, {}),
                        children: t => (0, i.jsx)(n(64960).Ay, {
                            ref: d,
                            disallowTabbing: !0,
                            onClick: () => {
                                let t = (0, n(974410).f)(e);
                                if (!(0, n(194020).E)(u, t)) return (0, n(703183).Q)(u, t);
                                ! function(e, t, o) {
                                    let i = n(708929).Uv.getMode(t),
                                        r = n(240414).T.findSelectablesFromStore(t).find(e => !!e.props.onInsertRowBelow);
                                    if ((0, n(335818).fc)(t)) return;
                                    let a = t.getSpaceId();
                                    "above" === o ? r && r.props.onInsertRowAbove ? (0, n(377796).createAndCommit)({
                                        userAction: "SelectableAddMenu.handleClick.onInsertRowBelow",
                                        environment: e,
                                        cellTarget: {
                                            spaceWithId: a
                                        },
                                        canUndo: !0,
                                        perform: e => {
                                            r.props.onInsertRowAbove && r.props.onInsertRowAbove({
                                                transaction: e
                                            })
                                        }
                                    }) : (0, n(377796).createAndCommit)({
                                        environment: e,
                                        userAction: "SelectableAddMenu.handleClick.addAbove",
                                        cellTarget: {
                                            spaceWithId: a
                                        },
                                        canUndo: !0,
                                        perform: o => {
                                            let r = n(150945).insertTextAbove({
                                                environment: e,
                                                blocks: [t],
                                                transaction: o,
                                                skipAnalytics: !0
                                            });
                                            if ("suggest" === i && r) {
                                                let t = (0, n(714577).R)(e, o, r);
                                                (0, n(132993).t)(o, r, {
                                                    id: n(92513).JW(),
                                                    type: "insert",
                                                    discussionId: t.id
                                                }), (0, n(941538).c)({
                                                    environment: e,
                                                    transaction: o,
                                                    discussionStore: t,
                                                    addModifiedBlockIdsAfter: [r.id]
                                                })
                                            }
                                        }
                                    }) : n(966980).wm(t) ? (0, n(464515).z)({
                                        environment: e,
                                        blockStore: t,
                                        insertedTextBlockLocation: "none",
                                        editSelection: n(182553).h,
                                        getRectFromStore: n(240414).T.getRectFromStore.bind(n(240414).T)
                                    }) : r && r.props.onInsertRowBelow ? (0, n(377796).createAndCommit)({
                                        userAction: "SelectableAddMenu.handleClick.onInsertRowBelow",
                                        environment: e,
                                        cellTarget: {
                                            spaceWithId: a
                                        },
                                        canUndo: !0,
                                        perform: e => {
                                            r.props.onInsertRowBelow && r.props.onInsertRowBelow({
                                                transaction: e
                                            })
                                        }
                                    }) : (0, n(377796).createAndCommit)({
                                        environment: e,
                                        userAction: "SelectableAddMenu.handleClick.addBelow",
                                        cellTarget: {
                                            spaceWithId: a
                                        },
                                        canUndo: !0,
                                        perform: o => {
                                            let r = n(150945).insertTextBelow({
                                                environment: e,
                                                blocks: [t],
                                                transaction: o,
                                                skipAnalytics: !0
                                            });
                                            if ("suggest" === i && r) {
                                                let t = (0, n(714577).R)(e, o, r);
                                                (0, n(132993).t)(o, r, {
                                                    id: n(92513).JW(),
                                                    type: "insert",
                                                    discussionId: t.id
                                                }), (0, n(941538).c)({
                                                    environment: e,
                                                    transaction: o,
                                                    discussionStore: t,
                                                    addModifiedBlockIdsAfter: [r.id]
                                                })
                                            }
                                        }
                                    }), (0, n(104310).u)({
                                        event: {
                                            eventName: "click_add_menu",
                                            eventProperties: {}
                                        }
                                    }), n(183056).default.reset()
                                }(u, e, (0, n(874873).r)().option ? "above" : "below")
                            },
                            style: w,
                            ariaLabel: c.formatMessage(u.device.isApple ? r.ariaLabelApple : r.ariaLabelWindows),
                            ...t,
                            children: (0, i.jsx)(n(16275).I, {
                                icon: n(581923).plusIcon
                            })
                        })
                    }) : null
                }),
                l = {
                    textAlign: "center"
                };

            function s() {
                let e = (0, n(533992).v3)(),
                    t = {
                        color: n(632079).Tj.text.inverseSecondary
                    };
                return (0, i.jsxs)("div", {
                    style: l,
                    children: [(0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Click <mediumcolor>to add below</mediumcolor>",
                        id: "block.selectableAddMenu.tooltip.addBlockBelow",
                        values: {
                            mediumcolor: e => (0, i.jsx)("span", {
                                style: t,
                                children: e
                            })
                        }
                    }), (0, i.jsx)("div", {
                        children: e.device.isApple ? (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Option-click <mediumcolor>to add above</mediumcolor>",
                            id: "block.selectableAddMenu.tooltip.addAbove",
                            values: {
                                mediumcolor: e => (0, i.jsx)("span", {
                                    style: t,
                                    children: e
                                })
                            }
                        }) : (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Alt-click <mediumcolor>to add a block above</mediumcolor>",
                            id: "block.selectableAddMenu.tooltip.addAbove.windows",
                            values: {
                                mediumcolor: e => (0, i.jsx)("span", {
                                    style: t,
                                    children: e
                                })
                            }
                        })
                    })]
                })
            }
            n(354520), n(737550);
            let d = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 2.57 11.75 11.7",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 4.575a.625.625 0 0 0-.625.625v1.375H6a.625.625 0 1 0 0 1.25h1.375V9.2a.625.625 0 0 0 1.25 0V7.825H10a.625.625 0 1 0 0-1.25H8.625V5.2A.625.625 0 0 0 8 4.575"
                        }), (0, i.jsx)("path", {
                            d: "M4 2.575c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h.466v1.822a.625.625 0 0 0 1.019.485l2.84-2.307H12c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.035-.84-1.875-1.875-1.875zM3.375 4.45c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v5.5c0 .345-.28.625-.625.625H8.102a.63.63 0 0 0-.394.14l-1.992 1.619V11.2a.625.625 0 0 0-.625-.625H4a.625.625 0 0 1-.625-.625z"
                        })]
                    })
                },
                c = (0, n(104509).wt)("commentAddSmall", d, "small"),
                u = {
                    paddingInlineStart: 6,
                    paddingInlineEnd: 6
                },
                p = (0, o.forwardRef)(function(e, t) {
                    let r = (0, n(533992).v3)(),
                        a = (0, n(109939).tz)(),
                        {
                            selectable: l,
                            store: s,
                            containerRect: d
                        } = e,
                        p = (0, n(682985).K8)(() => s.isFirstBlockInCalloutV2Block(), [s]),
                        m = (0, n(682985).K8)(() => {
                            var e;
                            if (!l || n(986939).A.isMobile || !l.props.shouldShowCommentMenu || p || n(350175).A.getFirstSelectedDiscussionId() || n(575125).A.getFramePageFirstSelectedDiscussionId() || n(827862).A.state.isActivelyComposing || s.getDiscussionStores().filter(e => !e.getResolved()).length > 0 || n(332190).A.getBlockStore() === s) return !1;
                            let t = s.getType();
                            if (t && ["video", "image"].includes(t) || "toggle" === t && !n(96382).A.isOpen(s.id) && (0, n(966980).O3)(s, {
                                    recursivelyLoadAllDiscussions: !0
                                }).length > 0 || (0, n(88527).O)(s) || s.isEmptyTitle()) return !1;
                            let o = "empty" !== n(358377).default.state.mode && n(358377).default.state.multiSelection;
                            return !!(o && (0, n(971541).k)(o)) || !(o ? (null == (e = (0, n(358538).Z)({
                                multiSelection: o,
                                filterCommonAncestors: !1,
                                focus: "end"
                            })) ? void 0 : e.stores) ? ? [] : []).some(e => e.id === s.id)
                        }, [s, l, p]),
                        f = (0, n(682985).K8)(() => {
                            var e;
                            let t = (0, n(664676).Z)(),
                                o = null == t || null == (e = t.getContentWrapEl()) ? void 0 : e.getBoundingClientRect();
                            return (0, n(783418).jU)({
                                marginItemType: "add_comment",
                                nodeRect: o,
                                containerRect: d
                            })
                        }, [d]),
                        g = (0, n(960253).I)(() => ({
                            container: {
                                position: "relative",
                                insetInlineEnd: f
                            }
                        }), [f]),
                        h = (0, o.useCallback)(async () => {
                            if (s.isType(n(955630).uP)) {
                                let e = s.getBlockTitleStore(),
                                    t = n(183056).default.state,
                                    o = t.isOpen ? t.selectableBoundingRect : void 0,
                                    i = n(329937).m(e);
                                if (i) {
                                    let t = await n(864850).T.formulas.load();
                                    n(22229).hN({
                                        environment: r,
                                        blockStore: s,
                                        multiSelection: {
                                            start: {
                                                index: i.startIndex,
                                                store: e
                                            },
                                            end: {
                                                index: i.endIndex,
                                                store: e
                                            }
                                        },
                                        rect: o,
                                        from: "right_margin",
                                        formulasModule: t
                                    })
                                }
                            } else(0, n(476081).l)({
                                environment: r,
                                blockStore: s,
                                from: "right_margin"
                            })
                        }, [r, s]),
                        v = (0, o.useCallback)(e => {
                            e ? n(827862).A.setHoverWithSource("right_margin_button") : n(827862).A.resetHoverSource("right_margin_button")
                        }, []),
                        b = (0, o.useCallback)(() => v(!0), [v]),
                        y = (0, o.useCallback)(() => v(!1), [v]);
                    return m ? (0, i.jsx)("div", {
                        style: g.container,
                        onMouseDown: n(220684).t,
                        children: (0, i.jsx)(n(51831).m, {
                            placement: "bottom",
                            delayThreshold: 300,
                            content: () => (0, i.jsx)(n(109939).sA, {
                                defaultMessage: "Comment",
                                id: "selectableCommentMenu.commentPrompt.tooltip"
                            }),
                            children: e => (0, i.jsx)("div", {
                                onMouseOver: b,
                                onMouseLeave: y,
                                children: (0, i.jsx)(n(374533).A, {
                                    ref: t,
                                    ariaLabel: a.formatMessage({
                                        id: "selectableCommentMenu.iconButton",
                                        defaultMessage: "Comment"
                                    }),
                                    disallowTabbing: !0,
                                    icon: c,
                                    style: u,
                                    onClick: h,
                                    ...e
                                })
                            })
                        })
                    }) : null
                }),
                m = (0, n(109939).YK)({
                    filterActions: {
                        defaultMessage: "Search actions…",
                        id: "selectableHoverMenu.filterActions.placeholder"
                    }
                });

            function f(e) {
                let t, {
                        hasEditorPermissions: r,
                        isWorkspaceAdmin: a,
                        store: l,
                        onDismiss: s,
                        containerRef: d,
                        query: c,
                        setQuery: u
                    } = e,
                    p = (0, n(533992).v3)(),
                    m = (0, n(533992).WS)(),
                    f = (0, n(682985).K8)(() => n(584265).default.state.stores, []),
                    v = (0, n(67499).S)(),
                    b = (0, n(682985).K8)(() => {
                        var e, t;
                        let o = n(584265).default.state.stores.length ? n(584265).default.state.stores : [l];
                        return {
                            environment: p,
                            blocks: o,
                            originRect: null == (e = d.current) ? void 0 : e.getBoundingClientRect(),
                            publicEditMode: n(827482).A.getMode(p, o[0], null == (t = o[0]) ? void 0 : t.getSpaceStore()),
                            analyticsFrom: "selection_menu",
                            pageContext: v
                        }
                    }, [p, l, d, v]),
                    y = (0, n(682985).K8)(() => (0, n(88527).r)(l), [l]),
                    S = (0, n(682985).K8)(() => (0, n(335818).yU)(l), [l]),
                    [x, w] = (0, n(739271).s)(),
                    A = (0, o.useCallback)(e => {
                        let t = f[0];
                        if (t) {
                            let o = t.getType();
                            if (o) {
                                let i = (0, n(444610).U)(t),
                                    r = (0, n(752242).sl)(i) || {};
                                (0, n(658024).N)(p, {
                                    analyticsName: e.analyticsName,
                                    action_type: e.analyticsActionType,
                                    from: "selection_menu",
                                    block_id: t.id,
                                    block_type: o,
                                    is_toggleable: (0, n(955630).Yt)(o, t.getFormat()),
                                    parent_collection_id: t.getParentCollectionIdUpToTwoLevels(),
                                    ...r
                                })
                            }
                        }
                        e.closeParentMenu && s()
                    }, [p, s, f]),
                    I = (0, n(682985).K8)(() => l.isCollectionView(), [l]),
                    k = (0, n(270102).i)(l),
                    C = !m && r && !y && !S && !k,
                    M = C && (0, i.jsx)(g, {
                        filter: c,
                        setQuery: u,
                        inputComboboxProps: x
                    });
                t = m ? {
                    menuType: n(649476).gu.ActionSheet,
                    header: M
                } : {
                    menuType: n(649476).gu.Popup,
                    width: 265,
                    header: M
                };
                let _ = (0, n(682985).K8)(() => void 0 !== l.getAssociatedCollectionStore(), [l]),
                    T = (0, n(682985).K8)(() => l.isInLibraryBlock(), [l]),
                    j = (0, n(682985).K8)(() => T ? n(982735).Bf : _ ? n(982735).SH : (0, n(982735).A2)(), [T, _]);
                return (0, i.jsxs)(n(747369).A, { ...t,
                    children: [(0, i.jsx)(n(530500).A, {
                        filter: c,
                        initialFocus: c ? 0 : void 0,
                        sections: j,
                        context: b,
                        onAccept: A,
                        comboboxProps: C ? w : void 0,
                        shouldShowBlockTypeTitle: !0
                    }), !c && (r || a) ? (0, i.jsx)(n(848288).g, {
                        store: l
                    }) : void 0, c ? void 0 : (0, i.jsx)(n(653594).A, {
                        store: l
                    }), !c && I ? (0, i.jsx)(h, {}) : void 0]
                })
            }

            function g(e) {
                let {
                    filter: t,
                    setQuery: o,
                    inputComboboxProps: r
                } = e, a = (0, n(109939).tz)();
                return (0, i.jsx)(n(844565).A, {
                    isInput: !0,
                    children: (0, i.jsx)(n(310324).Ay, {
                        value: t,
                        onChange: e => o(e.target.value),
                        focus: !n(986939).A.isMobile || void 0,
                        focusAfterAnimation: !0,
                        placeholder: a.formatMessage(m.filterActions),
                        preventCaptureDeleteWhenEmpty: !0,
                        preventCaptureClipboardShortcuts: !0,
                        preventCaptureSpacebarWhenEmpty: !0,
                        ...r
                    })
                })
            }

            function h() {
                return (0, i.jsx)(n(844565).A, {
                    topBorder: !0,
                    children: (0, i.jsx)(n(100246).g, {
                        title: (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Learn about databases",
                            id: "blocks.hoverBlockMenu.collectionHelpButton"
                        }),
                        href: (0, n(442564).x)("guides.database"),
                        analyticsFrom: "selectable_hover_menu"
                    })
                })
            }
            let v = {
                    width: 265,
                    overflow: "hidden"
                },
                b = (0, o.forwardRef)(function(e, t) {
                    var r;
                    let {
                        selectable: a,
                        store: l,
                        isWorkspaceAdmin: s,
                        nodeRect: d,
                        containerRect: c,
                        containedGroup: u
                    } = e, p = (0, n(533992).v3)(), m = (0, n(533992).WS)(), g = (0, n(67499).S)(), h = (0, o.useRef)(null), b = (0, n(682985).K8)(() => (0, n(405560).zb)(), []), y = n(36896).j, S = u ? n(104335).y9 : b, x = u ? n(104335).y9 : y, w = (0, n(682985).K8)(() => (0, n(783418).qg)({
                        marginItemType: "drag_handle",
                        store: l,
                        environment: p,
                        nodeRect: d,
                        containerRect: c,
                        selectable: a
                    }), [l, p, d, c, a]), A = (0, n(682985).K8)(() => (0, n(88527).r)(l) && !l.isInsideCollection(), [l]), I = (0, n(682985).K8)(() => {
                        var e;
                        return "editor" === l.getRole() || "read_and_write" === l.getRole() || (null == g || null == (e = g.publicEditModeStore.state) ? void 0 : e.permission) === "edit"
                    }, [null == g ? void 0 : g.publicEditModeStore, l]), k = (0, n(682985).K8)(() => "suggest" === n(708929).Uv.getMode(l), [l]), C = (0, n(682985).K8)(() => l.isInLibraryBlock(), [l]), M = (0, n(682985).K8)(() => {
                        var e;
                        return (0, n(784331).xc)() && (null == a || null == (e = a.props) ? void 0 : e.canDrag)
                    }, [null == a || null == (r = a.props) ? void 0 : r.canDrag]), _ = C ? M : I && !A && !k, T = (0, n(960253).I)(() => {
                        let e = _ ? "-webkit-grab" : void 0;
                        return {
                            div: u ? {
                                pointerEvents: "auto",
                                cursor: e
                            } : {
                                position: "absolute",
                                insetInlineStart: w,
                                width: S,
                                height: x,
                                pointerEvents: "auto",
                                cursor: e
                            },
                            buttonStyle: u ? {
                                borderRadius: 6
                            } : {}
                        }
                    }, [w, S, x, _, u]), [j, B] = (0, o.useState)(""), D = (0, n(682985).K8)(() => {
                        let e = n(183056).default.state;
                        return e.isOpen && e.menuIsOpen && e.currentStore === l
                    }, [l]);
                    (0, o.useEffect)(() => () => {
                        D && n(183056).default.reset()
                    }, []);
                    let P = (0, o.useCallback)(() => {
                            let e = n(183056).default.state,
                                t = n(707785).A.state;
                            if (e.isOpen) {
                                B(""), m && t.phase === n(707785).i.shown ? n(707785).A.onHide(() => n(183056).default.setState({ ...e,
                                    menuIsOpen: !0
                                })) : n(183056).default.setState({ ...e,
                                    menuIsOpen: !0
                                }), (0, n(472709).L)({
                                    environment: p,
                                    store: l
                                });
                                let o = l.getType();
                                o && (0, n(104310).u)({
                                    event: {
                                        eventName: "click_selection_menu",
                                        eventProperties: {
                                            block_type: {
                                                blockType: o
                                            }.blockType
                                        }
                                    }
                                })
                            }
                        }, [p, m, l]),
                        R = (0, o.useCallback)(() => n(183056).default.reset(), []);
                    return (0, n(682985).K8)(() => {
                        if (!a || !a.props.shouldShowHoverMenu || m) return !1;
                        let e = l.getType();
                        return !(e && ["column_list"].includes(e))
                    }, [l, a, m]) ? (0, i.jsx)("div", {
                        style: T.div,
                        ref: h,
                        children: (0, i.jsx)(n(182718).zD, {
                            popupType: m ? n(656252).z.SlideUp : n(656252).z.Popup,
                            open: D,
                            placementToOrigin: "left",
                            alignmentToOrigin: "center",
                            onDismiss: R,
                            originGap: 5,
                            forceInitialInbound: !0,
                            style: v,
                            content: () => (0, i.jsx)(f, {
                                hasEditorPermissions: I,
                                isWorkspaceAdmin: s,
                                store: l,
                                onDismiss: R,
                                containerRef: h,
                                query: j,
                                setQuery: B
                            }),
                            trapFocus: D,
                            children: (0, i.jsx)(n(611752).Ay, {
                                className: n(828432).LpV,
                                store: l,
                                isHoverMenu: !0,
                                canDrag: _,
                                canSelect: !1,
                                analyticsName: "selection_menu",
                                disableForceTouch: !0,
                                disableHorizontalDragEdgeScroll: !0,
                                children: (0, i.jsx)(n(633418).j, {
                                    ref: t,
                                    width: S,
                                    height: x,
                                    disallowTabbing: !0,
                                    onClick: P,
                                    disableDrag: !_,
                                    style: T.buttonStyle
                                })
                            })
                        })
                    }) : null
                }),
                y = {
                    marginInlineStart: 4
                },
                S = o.forwardRef(function(e, t) {
                    var r;
                    let l = (0, n(533992).v3)(),
                        {
                            exactTargetBlockStore: s,
                            container: d
                        } = e,
                        {
                            targetSelectable: c,
                            targetBlockStore: u
                        } = (0, n(682985).K8)(() => ({
                            targetSelectable: n(240414).T.findSelectablesFromStore(s).find(e => !!(e.props.shouldShowHoverMenu || e.props.shouldShowCommentMenu)),
                            targetBlockStore: s
                        }), [s]),
                        [m, f] = (0, o.useState)(null == c || null == (r = c.getNode()) ? void 0 : r.getBoundingClientRect()),
                        g = (0, n(682985).K8)(() => {
                            if (!s) return !1;
                            if (null != s && s.pathIsDead()) return !0;
                            let e = (0, n(637306).N)(s);
                            return e && (0, n(336136).pQ)(e.id)
                        }, [s]);
                    (0, o.useEffect)(() => {
                        if (!c) return;
                        let e = c.getNode();
                        if (!e) return;
                        let t = () => {
                                f(e.getBoundingClientRect())
                            },
                            o = (0, n(54503).NM)(e);
                        o && (0, n(166027).P)({
                            el: o,
                            eventName: "scroll",
                            callback: t
                        });
                        let i = (0, n(54503).T8)(e);
                        return i && i !== o && (0, n(166027).P)({
                            el: i,
                            eventName: "scroll",
                            callback: t
                        }), t(), () => {
                            o && (0, n(260244).O)({
                                el: o,
                                eventName: "scroll",
                                callback: t
                            }), i && (0, n(260244).O)({
                                el: i,
                                eventName: "scroll",
                                callback: t
                            })
                        }
                    }, [c]);
                    let h = (0, n(682985).K8)(() => (0, n(887788).h)(l), [l]),
                        v = (0, n(682985).K8)(() => {
                            var e;
                            return n(183056).default.state.isOpen && (null == (e = n(183056).default.state.currentStore) ? void 0 : e.id) === u.id
                        }, [u]),
                        S = (0, n(682985).K8)(() => {
                            if (!n(183056).default.isRightMarginCommentHovered()) return !1;
                            let e = u.getNavigableBlockStore();
                            return !(null == e ? void 0 : e.isDraft())
                        }, [u]),
                        x = !S && (null == c ? void 0 : c.props.shouldShowHoverMenu) && v,
                        w = (0, n(682985).K8)(() => u.isInLibraryBlock(), [u]),
                        A = x && !w,
                        I = (0, n(682985).K8)(() => x && !S && function(e) {
                            let t = (0, n(444610).U)(e);
                            if (!t || !t.isDashboardWidget() || !e.isInsideCollection() && !e.isPersonProfile()) return !1;
                            let o = t.getViewType();
                            return "table" === o || "list" === o
                        }(u), [u, x, S]);
                    (0, o.useEffect)(() => {
                        !S && n(827862).A.state.isHovered && n(827862).A.resetHoverSource("right_margin_button")
                    }, [S]);
                    let k = null == d ? void 0 : d.getBoundingClientRect(),
                        C = (0, n(682985).K8)(() => {
                            if (!I || !c) return 0;
                            let e = (0, n(783418).qg)({
                                    marginItemType: "plus_button",
                                    store: u,
                                    environment: l,
                                    nodeRect: m,
                                    containerRect: k,
                                    selectable: c
                                }),
                                t = (0, n(444610).U)(u);
                            return (null == t ? void 0 : t.getViewType()) === "list" ? e - 4 : (null == t ? void 0 : t.getViewType()) === "table" ? e - 6 : e
                        }, [I, u, l, m, k, c]),
                        M = (0, n(682985).K8)(() => (0, n(783418).ac)({
                            marginItemType: "selectable_hover_menu_overlay_item",
                            store: u,
                            nodeRect: m,
                            containerRect: k,
                            environment: l,
                            shouldUseContainedActionStyle: I
                        }), [u, m, k, l, I]),
                        _ = (0, n(960253).e)(),
                        T = (0, n(960253).I)(() => ({
                            container: {
                                position: "absolute",
                                top: M,
                                ...e.style
                            },
                            containedGroup: { ...n(104335).rj.container,
                                position: "absolute",
                                insetInlineStart: C + n(104335).AU,
                                boxShadow: n(710575).$.shadow[_].base.sm
                            }
                        }), [e.style, M, C, _]);
                    return g ? null : (0, n(264873).N)(e => (0, i.jsxs)("div", {
                        style: T.container,
                        ref: t,
                        ...e,
                        children: [S ? (0, i.jsx)("div", {
                            style: y,
                            children: (0, i.jsx)(p, {
                                selectable: c,
                                store: u,
                                containerRect: k
                            })
                        }) : void 0, I && (A || x) ? (0, i.jsxs)("div", {
                            style: T.containedGroup,
                            children: [A ? (0, i.jsx)(a, {
                                store: u,
                                nodeRect: m,
                                containerRect: k,
                                selectable: c,
                                containedGroup: !0
                            }) : void 0, x ? (0, i.jsx)(b, {
                                selectable: c,
                                store: u,
                                isWorkspaceAdmin: h,
                                nodeRect: m,
                                containerRect: k,
                                containedGroup: !0
                            }) : void 0]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [x ? (0, i.jsx)(b, {
                                selectable: c,
                                store: u,
                                isWorkspaceAdmin: h,
                                nodeRect: m,
                                containerRect: k
                            }) : void 0, A ? (0, i.jsx)(a, {
                                store: u,
                                nodeRect: m,
                                containerRect: k,
                                selectable: c
                            }) : void 0]
                        })]
                    }))
                }),
                x = {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    zIndex: 99
                },
                w = function(e) {
                    let t = (0, o.useRef)(null),
                        {
                            isOpen: r,
                            container: a,
                            currentStore: l
                        } = (0, n(682985).K8)(() => {
                            let e = n(183056).default.getState();
                            return {
                                isOpen: e.isOpen,
                                container: e.isOpen && e.container,
                                currentStore: e.isOpen && e.currentStore
                            }
                        }, []),
                        s = (0, n(682985).K8)(() => !(!r || a !== e.selectableContainer || n(793767).A.state.isActive && "editing" === n(358377).default.state.mode && (0, n(689461).K)(n(358377).default.state.multiSelection)) && "closed" === n(304636).default.state.type, [r, a, e.selectableContainer]),
                        d = (0, o.useMemo)(() => {
                            if (r && a === e.selectableContainer) return l
                        }, [l, r, a, e.selectableContainer]);
                    return (0, i.jsx)("div", {
                        style: x,
                        ref: t,
                        children: (0, i.jsx)(n(8366).A, {
                            className: n(962817).zN,
                            children: () => s && d ? [(0, i.jsx)(n(654979).A, {
                                tag: S,
                                animate: {
                                    opacity: 1
                                },
                                initial: {
                                    opacity: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                exactTargetBlockStore: d,
                                container: t.current ? ? void 0,
                                config: {
                                    timingFunction: "ease-out"
                                }
                            }, d.id)] : []
                        })
                    })
                }
        },
        927364: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                xMarkCircleIcon: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M12.817 7.183a.625.625 0 0 1 0 .884L10.884 10l1.933 1.933a.625.625 0 1 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 1 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 1 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
                        }), (0, o.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                r = (0, n(104509).wt)("xMarkCircle", i, "default")
        },
        931990: (e, t, n) => {
            function o(e) {
                let {
                    dateTime: t,
                    intl: o,
                    shortenDateAndRange: i
                } = e, r = n(25825).C6.toPersistedDate(t.valueOf());
                return n(850640).ZF({
                    value: r,
                    allowRelativeDates: !0,
                    intl: o,
                    shortenDateAndRange: i,
                    displayInUserTimezone: !0
                })
            }

            function i(e) {
                let {
                    dateTime: t,
                    intl: o,
                    userTimeZone: i,
                    displayInUserTimezone: r,
                    alwaysIncludeTimezone: a
                } = e, l = n(25825).C6.toPersistedDateTime(t.valueOf(), t.zoneName);
                return n(850640).ZF({
                    value: l,
                    allowRelativeDates: !0,
                    intl: o,
                    userTimeZone: i,
                    displayInUserTimezone: r,
                    alwaysIncludeTimezone: a
                })
            }

            function r(e) {
                let {
                    luxonRange: t,
                    intl: o
                } = e, i = n(25825).C6.toPersistedDateRange(t), r = n(850640).ZF({
                    value: i,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    intl: o,
                    displayInUserTimezone: !0
                }), a = t.end.setZone((0, n(714350).P)()), l = n(850640).fU({
                    start_time: a.toFormat(n(943003).GE),
                    humanReadable: !1,
                    intl: o
                });
                return o.formatMessage({
                    id: "verification.timeRange",
                    defaultMessage: "{formattedDateRange} at {formattedEndTime}"
                }, {
                    formattedDateRange: r,
                    formattedEndTime: l
                })
            }
            n.d(t, {
                OH: () => o,
                T2: () => i,
                do: () => r
            })
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                r = (0, n(104509).wt)("archiveBox", i, "default")
        },
        951390: (e, t, n) => {
            function o(e, t, o) {
                var i, r, a, l;
                let s, d, c = e.collectionViewStore();
                if (!c) return {
                    combinatorFilter: void 0,
                    filters: {
                        moveOps: [],
                        removed: [],
                        updated: [],
                        moved: [],
                        added: []
                    },
                    sorts: void 0
                };
                let u = !e.getIsInDashboardBuildMode() || !!(null == o ? void 0 : o.forceUseTemporaryStateInBuildMode),
                    p = "persisted" === t ? c.getQueryStore().getKeyStore("sort").getValue() || [] : (null == (i = e.normalizedQueryStore.state) ? void 0 : i.sort) || [],
                    m = e.getCurrentSortsValue(!u),
                    f = "persisted" === t ? c.getQueryStore().getKeyStore("filter").getValue() : null == (r = e.normalizedQueryStore.state) ? void 0 : r.filter,
                    g = e.getCurrentCombinatorFilterValue(!u),
                    h = "persisted" === t ? (null == (a = c.getPropertyFiltersStore().getValue()) ? void 0 : a.sort((0, n(655135).I)())) || [] : (s = (l = e).normalizedSchemaStore.state, d = l.normalizedFormatStore.state.property_filters || [], n(381453).oE(d.filter(e => {
                        let t = (0, n(9658).hs)(e.filter, s),
                            o = l.collectionViewBlockStore();
                        if (s[e.filter.property] && t && (0, n(400473).tn)(s, e.filter.property, t.filter, null == o ? void 0 : o.getRecordModel)) return t && {
                            id: e.id,
                            filter: t
                        }
                    }).sort((0, n(655135).I)()))),
                    v = e.getCurrentPropertyFiltersValue(!u),
                    b = "dashboard" === c.getType(),
                    y = b ? "persisted" === t ? c.getFormatStore().getKeyStore("dashboard_global_filters").getValue() : e.normalizedFormatStore.state.dashboard_global_filters : void 0,
                    S = b ? e.getCurrentDashboardGlobalFiltersValue(!u) : void 0,
                    x = h.map(e => e.id),
                    w = v.map(e => e.id),
                    {
                        beforeOps: A,
                        removeOps: I
                    } = (0, n(219083).i)(x, w),
                    k = Array.from(I).filter(e => !w.includes(e)),
                    C = Object.keys(A).map(e => ({
                        id: e,
                        beforeId: A[e]
                    })),
                    M = C.filter(({
                        id: e
                    }) => x.includes(e)).map(({
                        id: e
                    }) => e),
                    _ = C.filter(({
                        id: e
                    }) => !x.includes(e)).map(({
                        id: e
                    }) => e),
                    T = v.filter(e => h.find(t => {
                        if (e.id !== t.id) return !1;
                        let o = n(381453).mg(t),
                            i = n(381453).mg(e);
                        return !n(381453).n4((0, n(799150).A)(i, "ignore-class-instances"), (0, n(799150).A)(o, "ignore-class-instances"))
                    })).map(e => e.id);
                return {
                    combinatorFilter: n(381453).n4(f, g) ? void 0 : {
                        value: g
                    },
                    filters: {
                        moveOps: C,
                        removed: k,
                        updated: T,
                        moved: M,
                        added: _
                    },
                    sorts: n(381453).n4(p, m) ? void 0 : {
                        value: m
                    },
                    dashboardGlobalFilters: function({
                        sourceDashboardGlobalFilters: e,
                        localDashboardGlobalFilters: t
                    }) {
                        let o = (null == e ? void 0 : e.filter(e => e.targets && e.targets.length > 0)) ? ? [],
                            i = (null == t ? void 0 : t.filter(e => e.targets && e.targets.length > 0)) ? ? [];
                        return n(381453).n4(o, i) ? void 0 : {
                            value: i
                        }
                    }({
                        sourceDashboardGlobalFilters: y,
                        localDashboardGlobalFilters: S
                    })
                }
            }

            function i(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = o(e, "normalized");
                return !!(t.filters.moved.length > 0 || t.filters.added.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.sorts || void 0 !== t.dashboardGlobalFilters)
            }

            function r(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = o(e, "normalized");
                return !!(t.filters.moved.length > 0 || t.filters.added.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.dashboardGlobalFilters)
            }

            function a(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = o(e, "normalized"),
                    i = e.currentPropertyFiltersStore.state.filter(e => !(0, n(400473).t_)(e.filter));
                return !!(t.filters.added.some(e => i.some(t => t.id === e)) || t.filters.moved.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.dashboardGlobalFilters)
            }

            function l(e) {
                return !e.getIsInDashboardBuildMode() && void 0 !== o(e, "normalized").sorts
            }
            n.d(t, {
                I6: () => r,
                Ml: () => o,
                gv: () => l,
                y_: () => i,
                ye: () => a
            }), n(898992), n(354520), n(672577), n(581454), n(737550)
        },
        969278: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightRightSmallIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.372 3.238a.625.625 0 1 0-.884.884l3.253 3.253H2.75a.625.625 0 0 0 0 1.25h8.991l-3.253 3.253a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                    })
                },
                i = (0, n(104509).wt)("arrowStraightRightSmall", o, "small")
        },
        980494: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    style0: { ...n(699422).RC
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
                        a = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: l,
                            avatarShouldShowShadow: s,
                            avatarSize: d,
                            hasTooltip: c,
                            tooltipHeader: u,
                            hasPersonHoverCard: p,
                            spaceStore: m
                        } = e,
                        f = (0, n(109939).tz)(),
                        g = (0, n(682985).K8)(() => null == l ? void 0 : l.getDisplayName(f), [l, f]),
                        h = (0, o.jsxs)("div", {
                            style: r,
                            children: [(0, o.jsx)("div", {
                                style: a,
                                children: (0, o.jsx)(n(321753).A, {
                                    userStore: l,
                                    avatarShouldShowShadow: s,
                                    size: d,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, o.jsx)("div", {
                                className: "notranslate",
                                style: i.style0,
                                children: g
                            })]
                        });
                    return p ? (0, o.jsx)(n(532755).D, {
                        userStore: l,
                        spaceStore: m,
                        from: e.personHoverCardEntrypoint,
                        children: h
                    }) : h
                }
        },
        984211: (e, t, n) => {
            n.d(t, {
                f: () => i
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let {
                    item: t,
                    onDismiss: i
                } = e;
                n(436555).D6({ ...t,
                    right: (0, o.jsx)(n(531119).Ag, {
                        onClick: i ? ? n(436555).N2,
                        children: (0, o.jsx)(n(109939).sA, {
                            id: "snackbar.dismiss.title",
                            defaultMessage: "Dismiss"
                        })
                    })
                })
            }
        },
        987329: (e, t, n) => {
            n.r(t), n.d(t, {
                canMoveDown: () => x,
                canMoveUp: () => S,
                canShowMobileActionBar: () => s,
                canTriggerBlockActions: () => f,
                canTriggerTextActions: () => g,
                getOpenPropertyValueOverlaySchema: () => K,
                handleAi: () => I,
                handleComment: () => B,
                handleDatabaseDiscoveryModal: () => R,
                handleDelete: () => w,
                handleDismissKeyboard: () => L,
                handleEmojiPicker: () => z,
                handleEquation: () => P,
                handleFilePicker: () => N,
                handleIndent: () => h,
                handleLink: () => j,
                handleMention: () => A,
                handleMoreClick: () => F,
                handleMoveDown: () => y,
                handleMoveUp: () => b,
                handleReaction: () => D,
                handleRedo: () => _,
                handleSetMenu: () => C,
                handleSetSubMenu: () => M,
                handleTemplate: () => V,
                handleTemplates: () => E,
                handleTextAnnotation: () => k,
                handleUndo: () => T,
                handleUnindent: () => v,
                isEditingCollectionTextProperty: () => c,
                mobileActionBarRenderAvailability: () => d,
                shouldPreserveExistingSelection: () => m,
                shouldShowTemplatesButton: () => u,
                shouldShowTextActions: () => p,
                trackItemTap: () => U,
                updateDebugShouldShow: () => l
            }), n(18107), n(967357), n(898992), n(737550);
            let o = {
                pageTemplateModalActions: new(n(815048)).O2("pageTemplateModalActions", async () => Promise.all([n.e(9773), n.e(40537), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(23519), n.e(63771), n.e(53847), n.e(48486), n.e(34208)]).then(n.bind(n, 151965)))
            };
            async function i(e) {
                var t, o;
                if (!e.mobileNative) return;
                let i = n(358377).default.state;
                if ("editing" !== i.mode) return;
                let r = null == (t = await e.mobileNative.openEmojiPicker()) ? void 0 : t.emoji;
                if (r) {
                    let t = null == (o = (0, n(385941).Z)()) ? void 0 : o.pointer.spaceId;
                    (0, n(377796).createAndCommit)({
                        userAction: "mobileActions.pickEmoji",
                        environment: e,
                        cellTarget: t ? {
                            spaceWithId: t
                        } : void 0,
                        canUndo: !0,
                        perform: t => {
                            n(68205).Yf({
                                environment: e,
                                multiSelection: i.multiSelection,
                                isFromInsertion: !1
                            }), n(68205).Ju({
                                environment: e,
                                emoji: r,
                                transaction: t
                            }), n(68205).VN()
                        }
                    })
                }
            }
            async function r(e) {
                var t;
                let o = n(584265).default.state.stores,
                    i = e.device.isIOS,
                    r = await n(385475).dA({
                        environment: e,
                        supportsMobileNativeFileUpload: !0,
                        multiple: !0,
                        accept: i ? "*/*" : "image/*, video/*"
                    }),
                    a = n(584265).default.getCurrentRecordCache(),
                    l = (0, n(830479).y)(e);
                if (!r || 0 === r.length || !a) return;
                let s = 0 !== o.length ? o[0].pointer.spaceId : null == (t = (0, n(385941).Z)()) ? void 0 : t.pointer.spaceId;
                (0, n(377796).createAndCommit)({
                    userAction: "mobileActions.takePicture",
                    environment: e,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        var i;
                        let s = n(556533).$C({
                            environment: e,
                            files: r,
                            inMemoryRecordCache: a,
                            pageWidth: l,
                            transaction: t,
                            spaceId: 0 !== o.length ? o[0].pointer.spaceId : null == (i = (0, n(385941).Z)()) ? void 0 : i.pointer.spaceId
                        });
                        1 === o.length && o[0] && (0, n(966980).wm)(o[0]) ? (0, n(199894).t)({
                            environment: e,
                            blocks: s,
                            selection: o,
                            transaction: t,
                            preventSetSelection: !0
                        }) : ((0, n(210318).L)({
                            environment: e,
                            blocksToInsert: s,
                            target: o,
                            transaction: t,
                            replaceEmptyTextBlock: !0
                        }), (0, n(471e3).I)({
                            environment: e
                        }))
                    }
                })
            }
            let a = !1;

            function l(e) {
                a = e
            }

            function s(e, t, o, i) {
                var r;
                let {
                    device: l,
                    TabbedRouterStore: s
                } = e, d = a || !!n(770520).A.state.enableShouldShowDebugging;
                if (!n(986939).A.isMobile) return O(d, "canShowMobileActionBar = false (reason: !config.isMobile)"), !1;
                if ((0, n(318355).A)(e) && n(218744).default.checkGate({
                        gateName: "mab_consider_navigation_top_page"
                    })) {
                    let e = (0, n(500880).Xz)(s.state);
                    if ("web" !== e.type || "page" !== (0, n(500880).AE)(e).route.name) return O(d, "canShowMobileActionBar = false (reason: top page is not a web page)"), !1
                }
                if (n(930179).default.state.open) return O(d, "canShowMobileActionBar = false (reason: quickFindOpen)"), !1;
                if (!l.isMobileNative && n(498368).Ay.state.open) return O(d, "canShowMobileActionBar = false (reason: !device.isMobileNative && MentionMenuStore.state.open)"), !1;
                if (n(358377).default.isEditingComment()) return O(d, "canShowMobileActionBar = false (reason: TextSelectionStore.isEditingComment())"), !1;
                let c = (0, n(730994).SB)(n(304636).default.state),
                    u = null == (r = n(838448).default.getActiveSession()) ? void 0 : r.hasPendingOperations();
                if (c || u) return O(d, "canShowMobileActionBar = false (reason: isCompletionsPopupActive || hasPendingEdits)"), !1;
                if (!n(363746).A.state.isOpen && e.device.isMobileNative && n(630121).A.hasOpenPopups()) return O(d, "canShowMobileActionBar = false (reason: !PageTemplateModalStore.state.open && environment.device.isMobileNative && GlobalPopupStore.hasOpenPopups() > 0)"), !1;
                if (n(363746).A.state.isOpen) {
                    let t = K(n(363746).A.state);
                    if (!t) return O(d, "canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema === undefined)"), !1;
                    switch (t.type) {
                        case "text":
                            if (t.ai_inference) return O(d, "canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema.ai_inference !== undefined)"), !1;
                            break;
                        case "number":
                            if (! function(e) {
                                    let {
                                        device: t
                                    } = e, {
                                        isIOS: o,
                                        isIpad: i
                                    } = t;
                                    return o && !i && n(218744).default.checkGate({
                                        gateName: "ios_number_property_mab"
                                    })
                                }({
                                    device: e.device
                                })) return O(d, 'canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema.type == "number")'), !1;
                            break;
                        default:
                            return O(d, `canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema.type == "${t.type}`), !1
                    }
                }
                if (t.isFormBlock()) return !1;
                let p = "editing" === n(358377).default.state.mode;
                return (0, n(712358).K)(e) && n(984858).sidebarOpenStore.state && !p ? (O(d, "canShowMobileActionBar = false (reason: sidebarHelpers.sidebarIsExpanded(environment) && sidebarOpenStore.get() && !isCurrentlyEditing"), !1) : (0, n(573953).o)() ? !!(0, n(998256).p)({
                    environment: e,
                    blocks: [t],
                    publicEditMode: o,
                    pageContext: i
                }) || (O(d, "canShowMobileActionBar = false (reason: !_canEdit)"), !1) : (O(d, "canShowMobileActionBar = false (reason: !currentPageIsNotLocked())"), !1)
            }

            function d(e, t, o, i) {
                var r, l;
                let d = a || !!n(770520).A.state.enableShouldShowDebugging;
                if (!s(e, t, o, i)) return O(d, "shouldShowMobileActionBar = false (reason: !canShowMobileActionBar)"), {
                    canShow: !1,
                    canShowNativeBar: !1,
                    shouldShow: !1
                };
                let c = e.device.isMobileNative;
                if (null != (r = n(770520).A.state.menu) && r.type && !(0, n(428375).f)()) return O(d, "shouldShowMobileActionBar = true (reason: NativeMobileActionBarStore && NativeMobileActionBarStore.state.menu?.type"), {
                    canShow: !0,
                    canShowNativeBar: c,
                    shouldShow: !0
                };
                let u = n(358377).default.state;
                if ("editing" !== u.mode) return O(d, "shouldShowMobileActionBar = false (reason: TextSelectionStore.state.mode !== editing"), {
                    canShow: !0,
                    canShowNativeBar: c,
                    shouldShow: !1
                };
                let p = u.multiSelection,
                    m = (0, n(58512).$)(p),
                    f = m.some(e => e.editable.props.disableStyleAnnotations),
                    g = m.some(e => e.editable.props.disableMobileActionBar),
                    h = m.some(e => e.editable.props.disableComment);
                return m && g ? (O(d, "shouldShowMobileActionBar = false (reason: !renderedBlocks || !disableMobileActionBar)"), {
                    canShow: !0,
                    canShowNativeBar: c,
                    shouldShow: !1
                }) : (O(d, "shouldShowMobileActionBar = true"), {
                    shouldShow: !0,
                    canShowNativeBar: c,
                    disableStyleAnnotations: f,
                    disableComment: h,
                    isEmpty: (0, n(971541).k)(p) && 0 === p.end.index && (null == (l = (0, n(129499).s)(p.end.store)) ? void 0 : l.endIndex) === 0
                })
            }

            function c() {
                var e;
                let t = n(363746).A.state;
                if (!t.isOpen) return !1;
                let o = null == (e = t.collectionContextStore) ? void 0 : e.normalizedSchemaStore.state;
                if (!o) return !1;
                let i = (0, n(561872)._g)({
                    schema: o,
                    property: t.property
                });
                return (null == i ? void 0 : i.type) === "text"
            }

            function u(e) {
                let {
                    environment: t,
                    store: o
                } = e, {
                    isPhone: i
                } = t.device, r = t.currentUser.isLoggedIn(), a = o.isCollectionView(), l = o.getAssociatedCollectionStore(), s = n(752085).A.state.open, d = n(728372).default.state.currentLoadingContainerStore, c = o.getContentStores()[0], u = c && !c.isEmptyTextBlock();
                return !!(i && o.isDefined() && o.canEdit() && r && !l && !a && !s && !u && d && d.state.ready)
            }

            function p(e, t) {
                let o = n(358377).default.state;
                if ("editing" === o.mode) return !t.state.isComposing && !(0, n(971541).k)(o.multiSelection) || void 0 !== n(169274).wg();
                let i = e.state.savedTextSelectionStoreState;
                return !!i && "editing" === i.mode && !(0, n(971541).k)(i.multiSelection)
            }

            function m(e) {
                var t;
                let {
                    device: o
                } = e;
                return !!((null == (t = n(770520).A.state.menu) ? void 0 : t.type) && !o.isTablet && !o.isAndroid && !(0, n(907620).T)("supportsMobileActionBarNativeActionMenuWithoutIgnoreSelectionArea"))
            }

            function f(e) {
                if ((0, n(45262).Q)(e)) return !1;
                let {
                    stores: t
                } = n(584265).default.state;
                return t.length > 0 && t[0].canEdit() && !t[0].isNavigableBlock() && !n(169274).wg()
            }

            function g(e, t) {
                return !(0, n(45262).Q)(e) && t.canEdit()
            }

            function h(e, t) {
                "editing" === n(358377).default.state.mode && ((0, n(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleIndent",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        n(41403).Mf({
                            environment: e,
                            transaction: t,
                            shiftKey: !1
                        })
                    }
                }), U(e, "indent"))
            }

            function v(e, t) {
                "editing" === n(358377).default.state.mode && ((0, n(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleUnindent",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        n(41403).Mf({
                            environment: e,
                            transaction: t,
                            shiftKey: !0
                        })
                    }
                }), U(e, "unindent"))
            }

            function b(e, t) {
                (0, n(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleMoveUp",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        n(41403).$P({
                            environment: e,
                            transaction: t,
                            direction: "up",
                            maintainParent: !0
                        })
                    }
                }), U(e, "move-up")
            }

            function y(e, t) {
                (0, n(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleMoveDown",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        n(41403).$P({
                            environment: e,
                            transaction: t,
                            direction: "down",
                            maintainParent: !0
                        })
                    }
                }), U(e, "move-down")
            }

            function S(e) {
                if (!e) return !1;
                let t = e.getRecordStoreUIParent();
                if (!(null != t && t.isTable(n(832375).evP))) return !1;
                let o = (0, n(746473).zH)(t);
                return !!(null != o && o.isDefined()) && o.getContentIds().indexOf(e.id) > 0
            }

            function x(e) {
                if (!e) return !1;
                let t = e.getRecordStoreUIParent();
                if (!(null != t && t.isTable(n(832375).evP))) return !1;
                let o = (0, n(746473).zH)(t);
                if (!(null != o && o.isDefined())) return !1;
                let i = o.getContentIds(),
                    r = i.indexOf(e.id);
                return r >= 0 && r < i.length - 1
            }

            function w(e) {
                let t = n(584265).default.state.stores[0],
                    o = n(358377).default.state;
                if (t && "editing" === o.mode) {
                    let {
                        multiSelection: i
                    } = o, r = (0, n(698702).J)(i.end.store) || (0, n(477402).H)(i.start.store), a = t.getParentBlockStore(), l = a && a.isCalloutV2() && 1 === a.getContentLength(), s = t.getSpaceId();
                    if ((0, n(377796).createAndCommit)({
                            userAction: "mobileActionBarHelpers.handleDelete",
                            environment: e,
                            cellTarget: {
                                spaceWithId: s
                            },
                            canUndo: !0,
                            perform: e => {
                                if (l) {
                                    let t = a.getParentBlockStore();
                                    t && n(579695).zz({
                                        childStore: a,
                                        parentStore: t,
                                        transaction: e
                                    })
                                } else(0, n(210191).T)({
                                    store: t,
                                    transaction: e
                                })
                            }
                        }), n(169274).wg())(0, n(377796).createAndCommit)({
                        userAction: "mobileActionBarHelpers.handleDelete",
                        environment: e,
                        cellTarget: {
                            spaceWithId: s
                        },
                        canUndo: !0,
                        perform: t => {
                            (0, n(922393).x)({
                                environment: e,
                                transaction: t
                            })
                        }
                    });
                    else if (r) {
                        let t = (0, n(534012).T)(r);
                        (0, n(182553).h)({
                            environment: e,
                            store: t
                        }), (0, n(931263).Z)(e)
                    } else(0, n(471e3).I)({
                        environment: e
                    });
                    U(e, "remove")
                }
            }

            function A(e, t) {
                n(977712).Gf({
                    spaceStore: t,
                    environment: e,
                    mentionTypes: {
                        page: !0,
                        collection: !0,
                        heading: !0,
                        createPage: !0,
                        user: !0,
                        inviteUserToWorkspace: !1,
                        inviteUserToPage: !0,
                        bot: !0,
                        date: !0,
                        reminder: !0,
                        templateVariable: !0,
                        group: !0,
                        team: !0,
                        formulaContextVariable: !0,
                        slackSpecialMention: !1,
                        property: !1,
                        propertyValue: !1
                    }
                }), U(e, "mention")
            }

            function I(e) {
                let t = n(358377).default.state;
                if ("editing" === t.mode && (0, n(971541).k)(t.multiSelection)) {
                    let t = n(584265).default.state.stores.at(0),
                        o = null == t ? void 0 : t.getTitleStore();
                    t && o && !t.isEmptyTextBlock() && (0, n(492368).x)({
                        environment: e,
                        store: o,
                        canSelectAllBlocks: !0
                    })
                }
                if ((0, n(828294).a)("agent_writer") && e.device.isMobileNative) {
                    let t = (0, n(420459).G4)();
                    if (t && (0, n(907620).T)("supportsNativeAgent")) {
                        var o;
                        let i = (0, n(554397).e)(t);
                        null == (o = e.mobileNative) || o.openNewAgentChat({
                            from: "mobile_action_bar",
                            mode: "writer",
                            userSpecifiedContextValues: i.length > 0 ? i : void 0
                        }), U(e, "ai")
                    }
                } else H({
                    from: "mobile_action_bar",
                    environment: e
                }), U(e, "ai")
            }

            function k(e, t) {
                n(31904).po({
                    environment: e,
                    annotation: t
                }), U(e, t[0])
            }

            function C(e, t, o) {
                n(770520).A.update(e => ({ ...e,
                    menu: t,
                    shouldRestoreSelectionForMenu: o
                }))
            }

            function M(e, t, o) {
                n(770520).A.update(e => ({ ...e,
                    isSubMenuOverridden: o,
                    subMenu: t
                })), void 0 === t ? (0, n(259413).V)({
                    environment: e,
                    dismissed: !0,
                    trackCreateBlock: n(549960).vH
                }) : U(e, t.type)
            }

            function _(e) {
                (0, n(270600).Z)({
                    environment: e
                }), U(e, "redo")
            }

            function T(e) {
                (0, n(462446).t)({
                    environment: e,
                    preventSelectText: !1
                }), U(e, "undo")
            }

            function j(e) {
                n(280546).fi({
                    type: "focusOnly",
                    focus: !0
                }), U(e, n(247438).Ifu.Link)
            }

            function B(e, t, o) {
                let i = n(584265).default.state.stores[0];
                if (!i) return;
                let r = n(358377).default.state,
                    a = "empty" !== r.mode && r.multiSelection;
                a && !(0, n(971541).k)(a) ? (n(22229).hN({
                    environment: e,
                    blockStore: i,
                    multiSelection: a,
                    formulasModule: o
                }), U(e, "comment", t)) : ((0, n(476081).l)({
                    environment: e,
                    blockStore: i
                }), U(e, "discuss", t))
            }

            function D(e, t, o, i) {
                (0, n(593342).O)({
                    environment: e,
                    blockStore: o,
                    from: "right_margin",
                    formulasModule: i
                }), U(e, "react", t)
            }

            function P(e, t) {
                n(817048).Wx({
                    environment: e,
                    analyticsFrom: "rich_text_menu",
                    katex: t
                }), U(e, "equation")
            }
            async function R(e, t) {
                n(218744).default.checkGate({
                    gateName: "mobile_discovery_modal_restore_selection_killswitch"
                }) && ((0, n(471e3).I)({
                    environment: e
                }), (0, n(854091).k)());
                let o = t.getParentStore();
                if (o && (0, n(726342).u)(o)) {
                    let {
                        openTemplateOnboardingModal: i,
                        getTemplateOnboardingVersion: r
                    } = await n(903673).O.load();
                    i({
                        parentStore: o,
                        template: void 0,
                        version: r({
                            template: void 0
                        }),
                        origin: "mobile_new_page_pills",
                        navigateToOnFinish: "created_collection",
                        onClose: o => {
                            (0, n(487016)._M)({
                                environment: e,
                                newPageStore: t,
                                result: o
                            })
                        }
                    });
                    return
                }
                U(e, "databaseDiscoveryModal")
            }

            function E(e) {
                n(218744).default.checkGate({
                    gateName: "mobile_template_gallery_restore_selection_killswitch"
                }) && ((0, n(471e3).I)({
                    environment: e
                }), (0, n(854091).k)()), n(717376).A.setState({
                    open: !0
                }), U(e, "templates")
            }
            async function V(e, t) {
                var i;
                let r = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreSidebarSpaceStore.state,
                    l = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (!r || !a || !l) return;
                let s = n(962299).A.getIntl(),
                    d = (0, n(714350).P)(),
                    c = (0, n(322095).B)(t, s),
                    u = ((null == (i = l.getModel()) || null == (i = i.getRenderTitle({
                        getRecordModel: l.getRecordModel,
                        userTimeZone: d,
                        intl: s
                    })) ? void 0 : i.length) ? ? 0) > 0,
                    p = !1,
                    m = Date.now();
                try {
                    n(137933).A.setState({
                        isDuplicating: !0
                    });
                    let t = await o.pageTemplateModalActions.load();
                    await t.loadAndDuplicatePageTemplate({
                        environment: e,
                        isPrivate: !1,
                        item: c,
                        spaceStore: a,
                        spaceViewStore: r,
                        useMinimalTemplates: !1,
                        initializeStore: l
                    }), p = !0
                } finally {
                    n(137933).A.setState({
                        isDuplicating: !1
                    });
                    let e = Date.now() - m;
                    (0, n(81149).h)({
                        from: "mobileApp",
                        success: p,
                        context: "template_pill",
                        template_block_id: c.rootId,
                        target_space_id: a.id,
                        template_duplication_duration_ms: e,
                        public_template_name: c.name,
                        has_existing_title: u
                    })
                }
            }

            function z(e) {
                i(e), U(e, "pick_emoji")
            }

            function N(e) {
                r(e), U(e, "take_picture")
            }

            function F(e) {
                let {
                    device: t
                } = e, o = t.isMobileNative && t.isIOS && t.isPhone;
                o || (0, n(854924).t)({
                    environment: e,
                    stores: n(584265).default.state.stores
                }), n(899964).WU({
                    environment: e,
                    stores: n(584265).default.state.stores,
                    actionSectionGroupKey: "default",
                    showInput: !1,
                    analyticsFrom: "mobile_more_menu"
                }), U(e, "more"), n(374176).default.afterNextFlush(() => {
                    o && (0, n(854091).k)()
                })
            }

            function L(e, t) {
                (0, n(471e3).I)({
                    environment: t
                }), e.store.setState({ ...e.store.state,
                    menuType: void 0,
                    selectedBlocks: void 0
                }), U(t, "hide_keyboard"), (0, n(854091).k)()
            }

            function U(e, t, o) {
                (0, n(644967).n)(e, {
                    itemName: t,
                    from: o
                })
            }

            function O(e, t) {
                e && (console.log(t), n(773352).log({
                    level: "info",
                    from: "mobileActionBarHelpers.ts",
                    type: "logShouldShowReason",
                    data: {
                        message: t
                    }
                }))
            }
            async function H(e) {
                let {
                    completionInitialPromptActions: t
                } = await n(712155).aiDependency.load();
                await t.toggleInitialPrompt(e)
            }

            function K(e) {
                var t;
                if (!e.isOpen) return;
                let o = null == (t = e.collectionContextStore) ? void 0 : t.normalizedSchemaStore.state;
                if (o) return (0, n(561872)._g)({
                    schema: o,
                    property: e.property
                })
            }
        }
    }
]);