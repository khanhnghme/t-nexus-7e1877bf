"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [10188], {
        198347: (e, t, i) => {
            i.d(t, {
                v: () => r
            });

            function r(e, t) {
                i(606047).A.setState({ ...i(606047).A.state,
                    open: !0,
                    from: e
                }), i(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        226952: (e, t, i) => {
            i.d(t, {
                L: () => r
            });

            function r(e) {
                if (e.getType() === i(955630).xd.alias) {
                    let t = e.getAliasTargetStore();
                    return t instanceof i(970831).B ? t : void 0
                }
                return e
            }
        },
        318506: (e, t, i) => {
            i.d(t, {
                N: () => r
            });

            function r({
                type: e,
                from: t
            }) {
                switch (e) {
                    case "notion_apps":
                    case "recents":
                    case "workspace":
                    case "myMeetings":
                        return i(254656).y8.SidebarWorkspace;
                    case "bookmarks":
                        return i(254656).y8.SidebarBookmark;
                    case "meetings_today":
                        return i(254656).y8.UpcomingMeetingCalendarEvent;
                    case "shared":
                        return "main_sidebar" === t ? i(254656).y8.SidebarShared : i(254656).y8.SidebarSharedPane;
                    case "private":
                        return "main_sidebar" === t ? i(254656).y8.SidebarPrivate : i(254656).y8.SidebarPrivatePane;
                    case "team":
                        return i(254656).y8.SidebarTeam;
                    case "teamSidebar":
                    case "teamBrowserSearch":
                    case "teamBrowserUnjoinedTeams":
                    case "teamBrowserJoinedTeams":
                        return i(254656).y8.SidebarTeamBrowser;
                    case i(171231).yy:
                        return i(254656).y8.SidebarPublicPageTemplateIncludes;
                    case "agents":
                        return i(254656).y8.SidebarChats;
                    case i(171231).tJ:
                        return i(254656).y8.SidebarAgentsMyAgents;
                    case i(171231).sx:
                        return i(254656).y8.SidebarAgentsFavorites;
                    case i(171231).qe:
                        return i(254656).y8.SidebarAgentsFromWorkspace;
                    case i(171231).Vf:
                        return i(254656).y8.SidebarAgentsSearch;
                    default:
                        (0, i(722371).HB)(e)
                }
            }
        },
        322915: (e, t, i) => {
            i.d(t, {
                l: () => p
            }), i(16280), i(898992), i(737550);
            var r = i(296540),
                a = i(474848);
            let o = {
                    position: "relative"
                },
                l = {
                    position: "absolute",
                    bottom: -4,
                    insetInlineEnd: -6
                };

            function n(e) {
                let t = (0, i(83208).X)("library_cross_workspace_shared_tab"),
                    r = (0, i(723240).r)(),
                    n = (0, i(682985).K8)(() => e.store.getSpaceId() !== r, [e.store, r]);
                return t && n ? (0, a.jsxs)("div", {
                    style: o,
                    children: [e.children, (0, a.jsx)(i(708966).Q, {
                        style: { ...l,
                            width: 12,
                            height: 12
                        },
                        iconGroup: i(449486).w,
                        variantName: "fillSmall"
                    })]
                }) : e.children
            }
            let s = {
                pageIcon: {
                    fill: i(632079).Tj.sidebarSecondaryColor
                }
            };

            function d(e) {
                let {
                    targetStore: t,
                    canEditItem: r
                } = e, o = (0, i(109939).tz)(), l = (0, i(533992).v3)(), n = (0, i(682985).K8)(() => t.getIcon(), [t], {
                    equalityFn: i(381453).n4
                }), d = (0, i(682985).K8)(() => !i(986939).A.isMobile && r && !(0, i(444285).S)(t) && !(0, i(933062).Nh)(t.id), [r, t]), c = e => {
                    let r = t.getIconStore();
                    if (r) {
                        let a = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "OutlinerItem.handleRecordIconChange",
                            environment: l,
                            cellTarget: {
                                spaceWithId: a
                            },
                            canUndo: !0,
                            perform: t => {
                                (0, i(368198).K)({
                                    store: r,
                                    value: e,
                                    transaction: t
                                })
                            }
                        })
                    }
                }, g = (0, i(682985).K8)(() => {
                    let e = t.getIconStore(),
                        i = null == e ? void 0 : e.table;
                    return {
                        recordTable: i,
                        source: "sidebar",
                        block_type: t.getType(),
                        collection_id: "collection" === i ? null == e ? void 0 : e.id : void 0
                    }
                }, [t]), u = (0, i(682985).K8)(() => t.isEmptyPage(), [t]), p = (0, i(682985).K8)(() => (0, i(569553).Te)(t), [t]);
                return (0, a.jsx)(i(51831).m, {
                    content: () => (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Change icon",
                        id: "sidebarItem.changeIconButton.tooltip"
                    }),
                    placement: "bottom",
                    children: e => d ? (0, a.jsx)(i(569553).B6, {
                        bucket: "secure",
                        disabled: !0,
                        icon: n,
                        store: t,
                        title: void 0,
                        isEmptyPage: u,
                        iconRecordCategory: p,
                        size: i(986939).A.isMobile ? 24 : 20,
                        onChange: c,
                        pageIconStyle: s.pageIcon,
                        ...e,
                        largeIcon: !0,
                        iconLoggingData: g,
                        label: o.formatMessage({
                            defaultMessage: "Change page icon",
                            id: "sidebarItem.changeIconButton.buttonLabel"
                        }),
                        disableAnimation: !0
                    }) : (0, a.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: n,
                        title: void 0,
                        isEmptyPage: u,
                        iconRecordCategory: p,
                        size: i(986939).A.isMobile ? 24 : 20,
                        pageIconStyle: s.pageIcon,
                        largeIcon: !0,
                        label: o.formatMessage({
                            defaultMessage: "Page icon",
                            id: "sidebarItem.changeIconButton.disabledLabel"
                        }),
                        disableAnimation: !0,
                        iconLoggingData: g
                    })
                })
            }

            function c(e) {
                let {
                    store: t,
                    from: o,
                    type: l,
                    itemIndex: n,
                    itemDepth: s,
                    isOpen: d,
                    onToggle: c
                } = e, g = (0, i(533992).v3)(), u = "library" === o && "team" === l, p = u && !d, m = (0, i(682985).K8)(() => !!p && (0, i(531353).IX)({
                    store: t,
                    outlinerFilter: "library"
                }), [t, p]), [y, b] = (0, r.useState)(!1), S = (0, i(960253).I)(() => ({
                    toggle: {
                        color: u ? d || m ? i(632079).Tj.text.primary : y ? i(632079).Tj.icon.tertiary : "transparent" : i(632079).Tj.icon.tertiary
                    },
                    button: "library" === o ? {
                        fontSize: 15,
                        marginInlineStart: 4
                    } : {}
                }), [o, d, y, u, m]);
                return (0, a.jsx)("div", {
                    onMouseEnter: () => b(!0),
                    onMouseLeave: () => b(!1),
                    children: (0, a.jsx)(i(890389).f, {
                        isSidebar: "library" !== e.from,
                        fill: !0,
                        icon: "library" === e.from ? "triangle" : "chevron",
                        open: d,
                        color: S.toggle.color,
                        style: S.button,
                        onClick: () => {
                            let e = 0 === s,
                                r = (0, i(297311).U)(t);
                            (0, i(714485).tD)(g, {
                                teamStore: r,
                                type: e ? "top_level" : "nested",
                                is_toggled: !d,
                                outliner_type: l,
                                outliner_position: n,
                                outliner_depth: s,
                                from: o
                            }), c(), (0, i(531353).s4)({
                                store: t,
                                toOpen: !d,
                                environment: g,
                                isTopLevelItem: e
                            })
                        },
                        "aria-describedby": e["aria-describedby"],
                        "aria-controls": e["aria-controls"]
                    })
                })
            }
            let g = (0, i(109939).YK)({
                    aiInstructionsBadge: {
                        id: "blockSidebarItem.aiInstructionsBadge",
                        defaultMessage: "AI Instructions"
                    },
                    agentInstructionsBadge: {
                        id: "blockSidebarItem.agentInstructionsBadge",
                        defaultMessage: "Agent instructions"
                    },
                    systemPromptBadge: {
                        id: "blockSidebarItem.systemPromptBadge",
                        defaultMessage: "Prompt"
                    },
                    aiSkillBadge: {
                        id: "blockSidebarItem.aiSkillBadge",
                        defaultMessage: "AI Skill"
                    },
                    templateBadge: {
                        id: "blockSidebarItem.templateBadge",
                        defaultMessage: "Template"
                    },
                    meetingInstructionsBadge: {
                        id: "blockSidebarItem.meetingInstructionsBadge",
                        defaultMessage: "Meeting instructions"
                    }
                }),
                u = {
                    children: {
                        display: "flex",
                        alignItems: "center"
                    },
                    loadingSpinner: {
                        marginInlineStart: 6
                    },
                    moveOrDuplicateProgress: {
                        flex: 1,
                        marginInlineStart: i(986939).A.isMobile ? 10 : 6,
                        marginInlineEnd: i(986939).A.isMobile ? 12 : void 0
                    },
                    link: {
                        width: "100%"
                    },
                    sidebarItemHovered: {
                        background: i(632079).Tj.sidebarItemSelectedBackground
                    },
                    tooltipContainer: {
                        maxWidth: 280,
                        width: "max-content"
                    },
                    tooltipMessage: {
                        color: i(632079).Tj.text.secondary
                    }
                };

            function p(e) {
                let {
                    store: t,
                    from: o,
                    variant: l,
                    style: n,
                    targetStore: s,
                    itemDepth: d,
                    type: c,
                    nestedOutlinerAriaId: g,
                    titleAriaId: p,
                    isOpen: m,
                    itemIndex: y,
                    onFocus: S,
                    onBlur: h,
                    onMouseMove: f,
                    onMouseLeave: v,
                    onNavigate: I,
                    spaceViewStore: x,
                    showSpaceData: j
                } = e, A = (0, i(533992).v3)(), w = (0, i(665002).g)(), k = "library" === o, M = (0, r.useMemo)(() => w ? { ...u.link,
                    ...i(153262).hG,
                    transition: "none"
                } : { ...u.link,
                    ...i(153262).hG
                }, [w]), C = (0, i(682985).K8)(() => P({
                    targetStore: s,
                    type: c,
                    from: o
                }), [o, s, c]), T = (0, r.useCallback)(() => P({
                    targetStore: s,
                    type: c,
                    from: o,
                    openInSidePeek: !0
                }), [o, s, c]), {
                    isCopyIndicator: B,
                    shouldShowAsLoadingSpinner: _
                } = (0, i(788480).v)(t), E = (0, i(682985).K8)(() => {
                    let e = i(728372).AppStoreMainEditorCurrentBlockStore.state;
                    return e && t.id === e.id
                }, [t]), K = (0, i(682985).K8)(() => (0, i(597845).Wi)(A, t.id), [A, t]), D = (0, i(682985).K8)(() => {
                    let e = t.getFormat();
                    if ("workflow_template_placeholder" === e.collection_view_sub_type && e.placeholder_workflow_template_id && t.isCollectionView()) return {
                        collectionTemplateId: e.placeholder_workflow_template_id,
                        collectionViewBlockStore: t
                    }
                }, [t]), V = j || "secondary" === l, N = (0, i(960253).I)(() => ({
                    sidebarItem: { ...!i(986939).A.isMobile && {
                            paddingInlineStart: 5
                        },
                        ...E && i(132261).DX.currentSelectedSidebarItem,
                        ...!i(986939).A.isMobile && !k && (0, i(153262).Jg)(),
                        ...n,
                        ...V && {
                            paddingInlineStart: 8,
                            paddingInlineEnd: 8,
                            paddingTop: 8,
                            paddingBottom: 8,
                            height: "unset"
                        }
                    }
                }), [E, n, V, k]), F = (0, r.useCallback)(e => {
                    K || (I && I(t), !(e.metaKey || e.ctrlKey) && ("secondary_sidebar" === o ? "peek" === i(550830).default.state.mode && i(550830).default.isVisible() : i(550830).default.isVisible()) && i(477810).VI({
                        environment: A,
                        skipAnimation: !0
                    }), function(e, t) {
                        let {
                            teamStore: r,
                            ...a
                        } = t;
                        i(649807).rP(e, "click_outliner_item", {
                            store: r,
                            ...(0, i(403884).h)({
                                environment: e
                            }),
                            ...a
                        })
                    }(A, {
                        teamStore: (0, i(297311).U)(t),
                        type: 0 === d ? "top_level" : "nested",
                        outliner_type: c,
                        outliner_position: y,
                        outliner_depth: d
                    }))
                }, [o, I, c, y, t, A, d, K]), {
                    startDwell: O,
                    stopDwell: R
                } = (0, i(150671).C)(i(508941).T.medium), L = (0, r.useCallback)(() => {
                    K || O(A.currentUser.id, t.id)
                }, [O, A.currentUser.id, t.id, K]), z = (0, r.useCallback)(() => R(), [R]), W = (0, r.useCallback)(async e => {
                    if (x) {
                        let t = i(728372).AppStoreSidebarSpaceStore.state;
                        if ((null == t ? void 0 : t.id) !== x.getSpaceId()) {
                            let t = await (0, i(269948).y)({
                                environment: A,
                                spaceViewStore: x
                            });
                            if (t.switchedUser) return e(t.newEnvironment)
                        }
                    }
                    e()
                }, [A, x]), U = {
                    role: "treeitem",
                    "aria-current": E ? "page" : void 0,
                    "aria-expanded": !!m,
                    "aria-owns": g,
                    "aria-labelledby": p
                };
                if (B) return _ ? (0, a.jsxs)(i(380559).u, {
                    style: N.sidebarItem,
                    childrenStyle: u.children,
                    onFocus: S,
                    onBlur: h,
                    onMouseMove: f,
                    onMouseLeave: v,
                    children: [(0, a.jsx)(i(517334).k, {
                        style: u.loadingSpinner
                    }), (0, a.jsx)(i(891160).A, {
                        targetRecordId: t.id,
                        style: u.moveOrDuplicateProgress
                    })]
                }) : null;
                if (D) return (0, a.jsx)(i(64960).Ay, {
                    onClick: async () => {
                        let {
                            collectionTemplateId: e,
                            collectionViewBlockStore: r
                        } = D, {
                            getCollectionTemplateFromId: a
                        } = await i(708370).t.load(), o = a(e);
                        if (!o) throw Error("Collection template not found");
                        I && I(t);
                        let {
                            onNavigateToPlaceholderWorkflowTemplateBlock: l
                        } = await i(903673).O.load();
                        l({
                            environment: A,
                            collectionTemplate: o,
                            collectionViewBlockStore: r
                        })
                    },
                    children: (0, a.jsx)(b, { ...e,
                        environment: A,
                        disableHoverAnimations: w,
                        onFocus: S,
                        onBlur: h,
                        sidebarItemStyle: N.sidebarItem,
                        sidebarItemChildrenStyle: u.children,
                        titleAriaId: p,
                        nestedOutlinerAriaId: g,
                        isWorkflowTemplatePlaceholder: !0,
                        ...U
                    })
                });
                let H = (0, a.jsxs)("div", {
                    style: u.tooltipContainer,
                    children: [(0, a.jsx)(i(109939).sA, {
                        id: "blockSidebarItem.offlineTooltip.title",
                        defaultMessage: "Unavailable offline"
                    }), (0, a.jsx)("div", {
                        style: u.tooltipMessage,
                        children: (0, a.jsx)(i(109939).sA, {
                            id: "blockSidebarItem.offlineTooltip.message",
                            defaultMessage: "Return online to view or make the page available offline."
                        })
                    })]
                });
                return C && "library" !== o ? (0, a.jsx)(i(51831).m, {
                    disableTooltip: !K,
                    placement: "right",
                    textWrap: !0,
                    content: () => H,
                    children: t => (0, a.jsx)(i(590422).Q, {
                        altHref: T,
                        disabled: K,
                        disabledFeedback: K,
                        onFocus: S,
                        onBlur: h,
                        onMouseEnter: L,
                        onMouseLeave: z,
                        style: M,
                        href: K ? void 0 : C,
                        onClick: F,
                        hoveredStyle: u.sidebarItemHovered,
                        preNavigationAction: W,
                        ...U,
                        ...t,
                        children: (0, a.jsx)(b, { ...e,
                            environment: A,
                            disableHoverAnimations: w,
                            sidebarItemStyle: N.sidebarItem,
                            sidebarItemChildrenStyle: u.children,
                            titleAriaId: p,
                            nestedOutlinerAriaId: g,
                            disableRightButtons: K
                        })
                    })
                }) : (0, a.jsx)(b, { ...e,
                    environment: A,
                    disableHoverAnimations: w,
                    onFocus: S,
                    onBlur: h,
                    sidebarItemStyle: N.sidebarItem,
                    sidebarItemChildrenStyle: u.children,
                    titleAriaId: p,
                    nestedOutlinerAriaId: g,
                    ...U
                })
            }
            let m = {
                    spaceName: void 0,
                    spaceIcon: void 0
                },
                y = {
                    iconContainer: {
                        display: "grid"
                    },
                    subtitle: {
                        marginTop: 2
                    },
                    subtitleSeparator: {
                        color: i(632079).Tj.text.secondary
                    }
                };

            function b(e) {
                let {
                    store: t,
                    variant: r,
                    from: o,
                    parentStore: l,
                    targetStore: s,
                    itemDepth: g,
                    type: u,
                    onFocus: p,
                    onBlur: b,
                    onMouseMove: S,
                    onMouseLeave: f,
                    onToggle: v,
                    titleAriaId: I,
                    nestedOutlinerAriaId: x,
                    isOpen: j,
                    isHovered: P,
                    isFocused: w,
                    showSpaceData: k,
                    environment: M,
                    disableHoverAnimations: C,
                    isPromptPagesEnabled: T,
                    isMeetingNotesCustomPromptEnabled: B,
                    shimmerFeatureGateEnabled: _,
                    agentProfilePageId: E,
                    dailyBriefPageId: K
                } = e, D = (0, i(682985).K8)(() => (function(e) {
                    let {
                        store: t,
                        parentStore: r,
                        isTopLevelItem: a,
                        type: o
                    } = e;
                    if (t.isDefined() && (0, i(162782).s)(t)) return !1;
                    let l = (0, i(350277).z)({
                        spaceStore: t.getSpaceStore()
                    }) > 0;
                    return t.isCollectionView() && !l ? 0 === t.getOwnedCollectionStores().length : !((null == r ? void 0 : r.table) === "block" && i(970831).B.createChildStore(r, {
                        table: i(832375).evP,
                        id: r.id,
                        spaceId: t.getSpaceId()
                    }).isType("collection_view_page")) && (!!t.isDefined() && t.getType() === i(955630).xd.alias || (!a || "team" === o) && !!r && !!t.isDefined() && t.getParentId() !== r.id)
                })({
                    store: t,
                    parentStore: l,
                    isTopLevelItem: 0 === g,
                    type: u
                }), [t, l, g, u]), V = (0, i(682985).K8)(() => {
                    let e = t.getLastEditedTime();
                    return (0, i(799843).nl)(e, {
                        useLowercase: !1,
                        useCompactFormat: !0
                    })
                }, [t]), N = P || w, F = "library" === o, O = (0, i(682985).K8)(() => !("myMeetings" === u || "slippery_slope_flyout_menu" === o || t.isPersonProfile()), [t, u, o]), R = N && O, L = i(986939).A.isMobile || F, z = k && "shared" === u || "secondary" === r, W = !!(k && "shared" === u), U = !!(E && t.id === E), H = !!(K && t.id === K), G = (0, i(682985).K8)(() => {
                    var e;
                    if ("workflow" !== t.getParentTable()) return !1;
                    let r = t.getParentStore();
                    if (!(r instanceof i(360851).N)) return !1;
                    let a = null == (e = r.getData()) ? void 0 : e.instructions;
                    return !!(0, i(886883).ap)(a) && a.id === t.id
                }, [t]), X = (0, i(682985).K8)(() => T && t.isAiSkill(), [t, T]), $ = (0, i(682985).K8)(() => t.isTemplate(), [t]), Q = (0, i(682985).K8)(() => B && !0 === t.getFormatStore().getKeyValue("is_transcription_summary_template"), [t, B]), J = (0, i(960253).I)(() => ({
                    toggle: {
                        gridColumn: 1,
                        gridRow: 1,
                        zIndex: 1,
                        opacity: +!!R,
                        visibility: R ? "visible" : "hidden",
                        order: +!!R,
                        transition: C ? "none" : `opacity ${i(153262).bM}, visibility ${i(153262).bM}`
                    },
                    itemIcon: F ? {
                        opacity: 1
                    } : {
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: +!R,
                        transition: C ? "none" : `opacity ${i(153262).bM}`,
                        order: +!R,
                        ...z && {
                            marginTop: -6
                        }
                    },
                    rightIcons: { ...!i(986939).A.isMobile && {
                            opacity: +!!N,
                            visibility: N ? "visible" : "hidden",
                            transition: C ? "none" : `opacity ${i(153262).bM}, visibility ${i(153262).bM}`
                        }
                    },
                    childrenStyle: { ...e.sidebarItemChildrenStyle,
                        ...F ? {
                            overflow: "visible"
                        } : {},
                        ...z && {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }
                    },
                    rightStyle: W ? {
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        flexShrink: 0,
                        flexGrow: 0,
                        marginTop: 8
                    } : {}
                }), [e.sidebarItemChildrenStyle, N, R, F, z, W, C]), {
                    spaceName: q,
                    spaceIcon: Y
                } = (0, i(682985).K8)(() => {
                    if ("shared" !== u || !k) return m;
                    let e = t.getSpaceStore();
                    return e ? {
                        spaceName: (0, i(742197).G)(M, e),
                        spaceIcon: e.getIcon()
                    } : m
                }, [t, M, u, k]), Z = (0, i(682985).K8)(() => {
                    var e;
                    return !!_ && !!t.isEmptyTitle() && (t.isCollectionView() ? !t.getOwnedAndLinkedCollectionStores().some(e => e.isReady()) : !(null != (e = t.getTitleStore()) && e.isReady()))
                }, [_, t]);
                return (0, a.jsxs)(i(380559).u, {
                    role: e.role,
                    "aria-current": e["aria-current"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-owns": e["aria-owns"],
                    "aria-labelledby": e["aria-labelledby"],
                    style: e.sidebarItemStyle,
                    childrenStyle: J.childrenStyle,
                    isLibrary: F,
                    left: L ? O ? (0, a.jsx)(c, {
                        store: t,
                        from: o,
                        type: u,
                        itemIndex: e.itemIndex,
                        itemDepth: g,
                        "aria-controls": x,
                        "aria-describedby": I,
                        onToggle: v,
                        isOpen: j
                    }) : (0, a.jsx)("div", {}) : void 0,
                    icon: i(986939).A.isMobile ? s && (0, a.jsx)(d, {
                        targetStore: s,
                        canEditItem: e.canEditItem
                    }) : (0, a.jsxs)("div", {
                        style: y.iconContainer,
                        children: [!F && O ? (0, a.jsx)("div", {
                            style: J.toggle,
                            children: (0, a.jsx)(c, {
                                store: t,
                                from: o,
                                type: u,
                                itemIndex: e.itemIndex,
                                itemDepth: g,
                                "aria-controls": x,
                                "aria-describedby": I,
                                onToggle: v,
                                isOpen: j
                            })
                        }) : void 0, (0, a.jsx)("div", {
                            style: J.itemIcon,
                            children: (0, a.jsx)(n, {
                                store: s,
                                children: s ? (0, a.jsxs)(a.Fragment, {
                                    children: [e.isWorkflowTemplatePlaceholder ? (0, a.jsx)(h, {}) : void 0, (0, a.jsx)(d, {
                                        targetStore: s,
                                        canEditItem: e.canEditItem
                                    })]
                                }) : (0, a.jsx)(a.Fragment, {})
                            })
                        })]
                    }),
                    right: e.disableRightButtons ? void 0 : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            style: J.rightIcons,
                            children: (0, a.jsx)(i(710426).Ay, {
                                store: t,
                                from: o,
                                type: u,
                                itemIndex: e.itemIndex,
                                itemDepth: g,
                                canEditItem: e.canEditItem,
                                onToggle: v,
                                isHovered: P,
                                isFocused: w
                            })
                        }), W ? (0, a.jsx)(i(569553).B6, {
                            icon: Y,
                            isEmptyPage: !1,
                            iconRecordCategory: "workspace",
                            size: 16,
                            disabled: !0,
                            title: q
                        }) : void 0]
                    }),
                    onFocus: p,
                    onBlur: b,
                    onMouseMove: S,
                    onMouseLeave: f,
                    isAlias: D,
                    rightStyle: J.rightStyle,
                    children: [(0, a.jsx)(A, {
                        shouldShowShimmer: Z,
                        isAgentProfilePage: U,
                        isDailyBriefPage: H,
                        isCustomAgentInstructionPage: G,
                        isPromptPage: X,
                        isTemplate: $,
                        isMeetingNotesInstructionPage: Q,
                        titleAriaId: I,
                        store: t,
                        showExpandedStyle: z,
                        showSpaceIcon: W,
                        from: o,
                        type: u,
                        isHovered: P
                    }), z ? q ? (0, a.jsxs)(i(4458).fI, {
                        gap: 4,
                        children: [(0, a.jsx)(i(324489).V, {
                            isSmall: !0,
                            isSecondaryColor: !0,
                            style: y.subtitle,
                            children: q
                        }), "secondary" === r ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                style: y.subtitleSeparator,
                                children: "•"
                            }), (0, a.jsx)(i(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                style: y.subtitle,
                                children: V
                            })]
                        }) : void 0]
                    }) : "secondary" === r && (0, a.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        style: y.subtitle,
                        children: V
                    }) : void 0]
                })
            }
            let S = {
                circle: {
                    position: "absolute",
                    background: i(632079).Tj.blue.background.accentPrimary,
                    borderRadius: "50%",
                    border: `1px solid ${i(632079).Tj.background.secondary}`,
                    width: 8,
                    height: 8,
                    insetInlineStart: 14,
                    zIndex: 1
                }
            };

            function h() {
                return (0, a.jsx)("div", {
                    style: S.circle
                })
            }
            let f = {
                    width: "80%",
                    height: 10,
                    borderRadius: 10
                },
                v = {
                    marginInlineStart: 2
                },
                I = {
                    marginInlineStart: 2
                },
                x = {
                    marginInlineStart: "auto",
                    marginInlineEnd: "70%",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative"
                },
                j = {
                    opacity: 0
                };

            function A(e) {
                let {
                    shouldShowShimmer: t,
                    isAgentProfilePage: r,
                    isDailyBriefPage: o,
                    isCustomAgentInstructionPage: l,
                    isPromptPage: n,
                    isTemplate: s,
                    isMeetingNotesInstructionPage: d,
                    titleAriaId: c,
                    store: u,
                    showExpandedStyle: p,
                    showSpaceIcon: m,
                    from: y,
                    type: b,
                    isHovered: S
                } = e, h = (0, i(109939).tz)(), A = (0, i(682985).K8)(() => u.isArchived(), [u]), P = (0, i(960253).I)(() => ({
                    title: {
                        fontWeight: i(699422).Wy.medium,
                        ...p && {
                            width: "100%"
                        },
                        ...m && {
                            maxWidth: "calc(100% - 12px)"
                        },
                        unicodeBidi: "plaintext",
                        ...A && {
                            color: i(632079).Tj.text.tertiary
                        }
                    }
                }), [p, m, A]);
                return t ? (0, a.jsx)(i(795830).P, {
                    style: f
                }) : r ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)("div", {
                        style: v,
                        children: (0, a.jsx)(i(746434).E, {
                            content: h.formatMessage(g.aiInstructionsBadge),
                            color: "gray"
                        })
                    })]
                }) : o ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)("div", {
                        style: v,
                        children: (0, a.jsx)(i(746434).E, {
                            content: h.formatMessage(g.systemPromptBadge),
                            color: "gray"
                        })
                    })]
                }) : l ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)(i(746434).E, {
                        content: h.formatMessage(g.agentInstructionsBadge),
                        color: "gray"
                    })]
                }) : n ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)("div", {
                        style: v,
                        children: (0, a.jsx)(i(746434).E, {
                            content: h.formatMessage(g.aiSkillBadge),
                            color: "gray"
                        })
                    })]
                }) : s ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)("div", {
                        style: v,
                        children: (0, a.jsx)(i(746434).E, {
                            content: h.formatMessage(g.templateBadge),
                            color: "gray"
                        })
                    })]
                }) : d ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)("div", {
                        style: v,
                        children: (0, a.jsx)(i(746434).E, {
                            content: h.formatMessage(g.meetingInstructionsBadge),
                            color: "gray"
                        })
                    })]
                }) : "library" === y ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), A ? (0, a.jsx)(i(16275).I, {
                        icon: i(968793).j,
                        size: "sm",
                        colorPalette: "gray",
                        colorVariant: "tertiary",
                        style: I
                    }) : null, (0, a.jsx)("div", {
                        style: { ...x,
                            ...S || i(986939).A.isMobile ? {} : j
                        },
                        children: (0, a.jsx)(i(252941).M, {
                            store: u,
                            type: b,
                            from: "library"
                        })
                    })]
                }) : A ? (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    children: [(0, a.jsx)(i(627918).A, {
                        id: c,
                        store: u,
                        style: P.title
                    }), (0, a.jsx)(i(16275).I, {
                        icon: i(968793).j,
                        size: "sm",
                        colorPalette: "gray",
                        colorVariant: "tertiary",
                        style: I
                    })]
                }) : (0, a.jsx)(i(627918).A, {
                    id: c,
                    store: u,
                    style: P.title
                })
            }

            function P(e) {
                let {
                    targetStore: t,
                    type: r,
                    from: a,
                    openInSidePeek: o = !1
                } = e;
                if (!t) return;
                let l = (0, i(318506).N)({
                        type: r,
                        from: a
                    }),
                    n = o ? {
                        openInSidePeek: !0,
                        peekMode: "s",
                        peekViewBlockId: t.id
                    } : {};
                if (t.isNavigableBlock()) return (0, i(483227).Ay)({ ...n,
                    store: t,
                    fullyQualified: !1,
                    pageVisitSource: l
                }); {
                    let e = (0, i(637306).N)(t);
                    if (e) return (0, i(483227).Ay)({ ...n,
                        store: e,
                        scrollToBlockId: t.id,
                        fullyQualified: !1,
                        pageVisitSource: l
                    })
                }
            }
        },
        393658: (e, t, i) => {
            i.d(t, {
                Hc: () => o,
                RD: () => a,
                iC: () => l,
                ph: () => r
            });
            let r = 6,
                a = 22,
                o = 8,
                l = 2
        },
        449486: (e, t, i) => {
            i.d(t, {
                w: () => r
            });
            let r = (0, i(104509).xh)("arrowDiagonalUpRight", {
                default: {
                    loader: () => i.e(66972).then(i.bind(i, 684668))
                },
                small: {
                    loader: () => i.e(66972).then(i.bind(i, 759706))
                },
                fill: {
                    loader: () => i.e(66972).then(i.bind(i, 695142))
                },
                fillSmall: {
                    loader: () => i.e(66972).then(i.bind(i, 810197))
                }
            }, ["arrow", "up", "right", "direction", "navigation"])
        },
        607579: (e, t, i) => {
            i.d(t, {
                t: () => o
            });
            var r = () => i(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        status: "not_started"
                    }
                }
                getStatus() {
                    return this.state.status
                }
                getCreatedPageStore() {
                    if ("completed" === this.state.status) return this.state.blockStore
                }
                startDelivery() {
                    this.setState({ ...this.state,
                        status: "in_progress"
                    })
                }
                completeDelivery(e) {
                    let {
                        blockStore: t
                    } = e;
                    this.setState({ ...this.state,
                        status: "completed",
                        blockStore: t
                    })
                }
                invalidateDelivery() {
                    this.setState({ ...this.state,
                        status: "invalid"
                    })
                }
            }
            let o = new a
        },
        710426: (e, t, i) => {
            i.d(t, {
                Ay: () => o,
                MR: () => n
            }), i(18107), i(967357), i(898992), i(354520), i(581454);
            var r = i(296540),
                a = i(474848);
            let o = r.memo(function(e) {
                let {
                    store: t,
                    from: r,
                    type: o,
                    canEditItem: n,
                    itemDepth: s,
                    isHovered: d,
                    isFocused: c,
                    onToggle: g
                } = e, p = i(986939).A.isMobile || d || c, m = (0, i(682985).K8)(() => {
                    var e;
                    let r = (0, i(162782).s)(t),
                        a = t.isPlaceholderWorkflowTemplateBlock(),
                        o = null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.isSyncedCollection(),
                        l = t.isPersonProfile(),
                        s = t.isPeopleCollectionViewPage();
                    return !!(t.getType() && n && !r && !a && !o && !l && !s)
                }, [t, n]), y = function(e) {
                    let {
                        showRightIcons: t
                    } = e;
                    return (0, i(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            paddingInlineStart: 3,
                            ...t ? {} : { ...i(69916).Qg,
                                display: "block"
                            }
                        }
                    }), [t])
                }({
                    showRightIcons: p
                });
                return o === i(171231).yy ? null : (0, a.jsx)("div", {
                    style: y.iconContainer,
                    children: "library" === r ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u, {
                            store: t,
                            from: r,
                            type: e.type,
                            itemIndex: e.itemIndex,
                            itemDepth: s
                        }), m ? (0, a.jsx)(l, {
                            store: t,
                            onToggle: g,
                            isTopLevelItem: 0 === s,
                            from: r,
                            type: o
                        }) : void 0]
                    })
                })
            });

            function l(e) {
                let {
                    store: t,
                    onToggle: r,
                    isTopLevelItem: o,
                    from: l,
                    type: n
                } = e, d = (0, i(533992).v3)(), c = (0, i(109939).tz)(), u = (0, i(682985).K8)(() => t.isCollectionView(), [t]), p = (0, i(682985).K8)(() => t.getOwnedAndLinkedCollectionStores(), [t]), m = (0, i(682985).K8)(() => {
                    var e;
                    let r = null == (e = t.getCollectionViewStores().at(0)) ? void 0 : e.id;
                    if (!r) return;
                    let a = i(547131).p.createChildStore(t, {
                        table: i(832375).Gy1,
                        id: r
                    });
                    return null == a ? void 0 : a.getFormatStore().getValue()
                }, [t]), y = c.formatMessage(i(925021).v.addAPageInside);
                return u && !m && 0 === p.length ? (0, a.jsx)(s, {
                    disabled: !0
                }) : p.length <= 1 ? (0, a.jsx)(i(51831).m, {
                    content: () => y,
                    placement: "bottom",
                    children: e => {
                        let c = { ...e,
                            onClick: e => {
                                var a;
                                let s = (null == (a = p[0]) ? void 0 : a.getParentBlockStore()) ? ? t;
                                i(245757).ru({
                                    store: s,
                                    shouldNavigateToSource: !1,
                                    environment: d,
                                    analytics: {
                                        from: l,
                                        type: n
                                    },
                                    toggleOptions: {
                                        onToggle: r,
                                        isTopLevelItem: o
                                    }
                                })
                            }
                        };
                        return (0, a.jsx)(s, {
                            events: c
                        })
                    }
                }) : (0, a.jsx)(i(51831).m, {
                    content: () => y,
                    placement: "bottom",
                    children: e => (0, a.jsx)(i(656252).A, {
                        popupType: i(986939).A.isMobile ? i(656252).z.BottomSheet : i(656252).z.Popup,
                        content: e => (0, a.jsx)(g, {
                            blockStore: t,
                            parent: e,
                            from: l,
                            type: n
                        }),
                        children: t => (0, a.jsx)(s, {
                            events: (0, i(63390).A)(e, t)
                        })
                    })
                })
            }
            let n = {
                button: i(986939).A.isMobile ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    marginInlineStart: 0
                } : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    marginInlineStart: 4
                }
            };

            function s(e) {
                let t = (0, i(109939).tz)();
                return (0, a.jsx)(i(64960).Ay, {
                    ariaLabel: t.formatMessage(i(925021).v.addAPageInside),
                    style: n.button,
                    disabled: e.disabled,
                    disabledFeedback: e.disabled,
                    ...e.events,
                    children: (0, a.jsx)(i(16275).I, {
                        icon: i(638501).plusSmallIcon,
                        size: "sm",
                        colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                    })
                })
            }
            let d = {
                display: "flex",
                alignItems: "center",
                whiteSpace: "pre"
            };

            function c({
                itemProps: e,
                store: t,
                disabled: r,
                blockStore: o
            }) {
                let l = (0, i(682985).K8)(() => t.getIcon(), [t]),
                    n = (0, i(682985).K8)(() => {
                        var e;
                        return (null == (e = t.getParentBlockStore()) ? void 0 : e.id) !== o.id
                    }, [t, o]);
                return (0, a.jsx)(i(95582).A, { ...e,
                    disabled: r,
                    disabledFeedback: !0,
                    title: (0, a.jsx)("div", {
                        style: d,
                        children: (0, a.jsx)(i(627918).A, {
                            store: t
                        })
                    }),
                    icon: (0, a.jsx)(i(734914).A, {
                        icon: l,
                        size: 14,
                        isEmptyPage: !1,
                        isAlias: n,
                        iconRecordCategory: "collection"
                    })
                })
            }

            function g(e) {
                let {
                    blockStore: t,
                    parent: r,
                    from: o,
                    type: l
                } = e, n = (0, i(533992).v3)(), s = (0, i(682985).K8)(() => t.getOwnedAndLinkedCollectionStores().filter(e => !e.isSyncedCollection()), [t]), d = (0, i(682985).K8)(() => s.map(e => !i(352441).Q.getData(n, {
                    collectionId: e.id,
                    spaceId: e.getSpaceId()
                })), [s, n]), g = {
                    menuType: i(986939).A.isMobile ? i(649476).gu.Modal : i(649476).gu.Popup,
                    right: i(986939).A.isMobile ? (0, a.jsx)(i(109939).sA, { ...i(789722).W.done
                    }) : void 0
                }, u = {
                    key: "collections",
                    render: e => (0, a.jsx)(i(844565).A, { ...e,
                        title: (0, a.jsx)(i(109939).sA, {
                            defaultMessage: "Add to",
                            id: "sidebarItem.addAPageInside.popup.addTo"
                        })
                    }),
                    items: s.map((e, r) => ({
                        key: e.id,
                        render: i => (0, a.jsx)(c, {
                            itemProps: i,
                            store: e,
                            disabled: d[r],
                            blockStore: t
                        }),
                        action: t => {
                            i(245757).ru({
                                store: e,
                                environment: n,
                                shouldNavigateToSource: !0,
                                analytics: {
                                    from: o,
                                    type: l
                                }
                            })
                        }
                    }))
                };
                return (0, a.jsx)(i(747369).A, { ...g,
                    children: (0, a.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        onAccept: r.close,
                        initialFocus: void 0,
                        sections: [u]
                    })
                })
            }

            function u(e) {
                let {
                    store: t,
                    from: r,
                    type: o,
                    itemDepth: l,
                    itemIndex: s
                } = e, d = (0, i(109939).tz)(), c = (0, i(533992).v3)(), g = e => {
                    let a = (0, i(297311).U)(t);
                    (0, i(472709).L)({
                        environment: c,
                        store: t
                    }), i(899964).it({
                        environment: c,
                        stores: [t],
                        left: e.clientX,
                        top: e.clientY,
                        showInput: !1,
                        actionSectionGroupKey: "sidebar_outliner",
                        analyticsFrom: "sidebar_more_menu",
                        optionalAnalyticsProperties: {
                            teamStore: a,
                            type: 0 === l ? "top_level" : "nested",
                            outliner_type: o,
                            outliner_position: s,
                            outliner_depth: l,
                            outliner_location: "main_sidebar" === r ? "sidebar" : "library" === r ? "library" : "pane"
                        }
                    })
                }, u = "bookmarks" === o ? d.formatMessage({
                    defaultMessage: "Remove, rename, and more…",
                    id: "sidebarItem.favoritedPageMenuButton.tooltip"
                }) : "myMeetings" === o ? d.formatMessage({
                    defaultMessage: "Copy, move, and more…",
                    id: "sidebarItem.meetingNoteMenuButton.tooltip"
                }) : d.formatMessage({
                    defaultMessage: "Delete, duplicate, and more…",
                    id: "sidebarItem.pageMenuButton.tooltip"
                });
                return (0, a.jsx)(i(51831).m, {
                    content: () => u,
                    placement: "bottom",
                    children: e => (0, a.jsx)(i(64960).Ay, {
                        ariaLabel: u,
                        style: n.button,
                        onClick: g,
                        ...e,
                        children: (0, a.jsx)(i(16275).I, {
                            icon: i(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                })
            }
        },
        734914: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(296540);
            var r = i(474848);
            let a = {
                wrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: i(986939).A.isMobile ? 28 : 22,
                    height: i(986939).A.isMobile ? 24 : 18,
                    position: "relative"
                }
            };

            function o(e) {
                let {
                    icon: t,
                    isAlias: o,
                    isEmptyPage: l,
                    iconStyle: n,
                    size: s,
                    iconRecordCategory: d
                } = e;
                return (0, r.jsxs)("div", {
                    style: a.wrap,
                    children: [(0, r.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: t,
                        iconRecordCategory: d,
                        isEmptyPage: l,
                        size: s ? ? 19,
                        style: n
                    }), o ? (0, r.jsx)(i(321825).H, {
                        size: "sm"
                    }) : void 0]
                })
            }
        },
        770275: (e, t, i) => {
            i.d(t, {
                T: () => u
            }), i(898992), i(354520), i(581454);
            var r = i(296540),
                a = () => i(728372),
                o = () => i(23803);
            let l = new(i(815048)).O2("SecondSessionDatabaseLearningTooltip", async () => await i.e(66549).then(i.bind(i, 1537))),
                n = (0, i(815048)._h)(l, e => e.SecondSessionDatabaseLearningTooltip);
            var s = i(474848);
            let d = {
                sidebarItem: {
                    color: i(632079).Tj.sidebarSecondaryColor
                },
                buttonHovered: {
                    background: i(632079).Tj.sidebarItemSelectedBackground
                }
            };

            function c(e) {
                let {
                    type: t,
                    from: o
                } = e, l = (0, i(533992).v3)(), n = (0, r.useCallback)(async () => {
                    let e = (0, i(328765).S)(),
                        r = a().AppStoreSidebarSpaceViewStore.state;
                    if ("team" !== t && e && r) {
                        if ((0, i(685257).u)(l)) {
                            let {
                                openTemplateOnboardingModal: t,
                                getTemplateOnboardingVersion: r
                            } = await i(903673).O.load();
                            t({
                                origin: "sidebar_private_section_empty_state",
                                parentStore: e,
                                template: void 0,
                                version: r({
                                    template: void 0
                                })
                            });
                            return
                        }
                        await i(245757).SE({
                            environment: l,
                            spaceStore: e,
                            spaceViewStore: r,
                            type: t,
                            outlinerItemFrom: o,
                            prepend: !1,
                            shouldPersistToggleState: !0
                        }) && i(986939).A.isMobile && (0, i(713167).V)()
                    }
                }, [t, l, o]);
                return (0, s.jsx)(i(64960).Ay, {
                    style: i(132261).DX.baseSidebarItem,
                    hoveredStyle: d.buttonHovered,
                    onClick: n,
                    children: (0, s.jsx)(i(380559).u, {
                        style: d.sidebarItem,
                        left: (0, s.jsx)(i(16275).I, {
                            icon: i(638501).plusSmallIcon,
                            size: "sm",
                            colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                        }),
                        disableMobileBorder: !0,
                        children: (0, s.jsx)(i(109939).sA, {
                            defaultMessage: "Add new",
                            id: "sidebar.addAWorkspaceOrPrivatePage.tooltip"
                        })
                    })
                })
            }
            let g = {
                    style0: {
                        boxShadow: i(978990).p.buttonBlueFocusRing.light,
                        borderRadius: 6
                    },
                    style1: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 1
                    }
                },
                u = r.memo(e => {
                    let {
                        disabled: t,
                        childStores: l,
                        areChildrenLoading: d,
                        itemDepth: u,
                        type: b
                    } = e, S = (0, i(533992).v3)(), h = (0, i(682985).K8)(() => (0, i(752153).gt)(a().AppStoreCurrentUserSettingsStore.state, "jira-sync-onboarding"), []), f = (0, r.useRef)(), v = (0, r.useRef)(), I = (0, i(682985).K8)(() => i(639675).Ay.state.showOnboardingTour, []), x = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = i(607579).t.getCreatedPageStore()) ? void 0 : e.id
                    }, []), j = (0, i(682985).K8)(() => {
                        let e = (0, i(336136).Vk)();
                        if (I) {
                            var t, r, n;
                            let e = null,
                                i = null;
                            for (let r of l) {
                                let l = r.isCollectionView(),
                                    n = r.getCollectionStoreIfSingleSource();
                                if (l && n && (null == (t = a().AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id) === r.id) {
                                    let t = n.getFormat();
                                    if ((null == t ? void 0 : t.app_config_uri) === "notion://projects_collection" || (null == t ? void 0 : t.app_config_uri) === "notion://tasks_collection") {
                                        let t = (0, o().Be)(n);
                                        e = t.projectCollectionPointer, i = t.taskCollectionPointer;
                                        break
                                    }
                                }
                            }
                            for (let t of l) {
                                let a = t.isCollectionView(),
                                    o = t.getCollectionStoreIfSingleSource();
                                if (a && o) {
                                    if (o.id === (null == (r = e) ? void 0 : r.id)) {
                                        f.current = t.id;
                                        continue
                                    }
                                    if (o.id === (null == (n = i) ? void 0 : n.id)) {
                                        v.current = t.id;
                                        continue
                                    }
                                }
                            }
                        }
                        return (0, i(722371).O9)(e) ? l.filter(t => !e.includes(t.id)) : l
                    }, [l, I]), A = (0, i(828294).N)("ai_prompt_pages"), P = (0, i(553635).sD)(), w = (0, i(83208).X)("sidebar_loading_page_shimmer"), {
                        agentProfilePageId: k,
                        dailyBriefPageId: M
                    } = (0, i(682985).K8)(() => {
                        var e;
                        let t = null == (e = a().AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getSettingsStore().getKeyStore("agent_personalization_settings");
                        return {
                            agentProfilePageId: (null == t ? void 0 : t.getKeyValue("context_page_id")) ? ? void 0,
                            dailyBriefPageId: (null == t ? void 0 : t.getKeyStore("daily_brief_prompt").getKeyValue("page_id")) ? ? void 0
                        }
                    }, []), C = j.map((t, a) => {
                        let o = r.createRef();
                        return I && f.current === t.id && "all-projects-tooltip" === h ? (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("div", {
                                ref: o,
                                style: g.style0,
                                children: (0, r.createElement)(m, { ...e,
                                    key: t.id,
                                    store: t,
                                    index: a,
                                    isPromptPagesEnabled: A,
                                    isMeetingNotesCustomPromptEnabled: P,
                                    shimmerFeatureGateEnabled: w,
                                    agentProfilePageId: k,
                                    dailyBriefPageId: M
                                })
                            }), (0, s.jsx)(i(553608).jX, {
                                origin: o
                            })]
                        }, t.id) : I && v.current === t.id && "all-issues-tooltip" === h ? (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("div", {
                                ref: o,
                                style: g.style0,
                                children: (0, r.createElement)(m, { ...e,
                                    key: t.id,
                                    store: t,
                                    index: a,
                                    isPromptPagesEnabled: A,
                                    isMeetingNotesCustomPromptEnabled: P,
                                    shimmerFeatureGateEnabled: w,
                                    agentProfilePageId: k,
                                    dailyBriefPageId: M
                                })
                            }), (0, s.jsx)(i(553608).h9, {
                                origin: o
                            })]
                        }, t.id) : x === t.id ? (0, s.jsx)("div", {
                            children: (0, s.jsxs)("div", {
                                ref: o,
                                children: [(0, r.createElement)(m, { ...e,
                                    key: t.id,
                                    store: t,
                                    index: a,
                                    isPromptPagesEnabled: A,
                                    isMeetingNotesCustomPromptEnabled: P,
                                    shimmerFeatureGateEnabled: w,
                                    agentProfilePageId: k,
                                    dailyBriefPageId: M
                                }), (0, s.jsx)(n, {
                                    contentRef: o
                                })]
                            })
                        }, t.id) : (0, r.createElement)(m, { ...e,
                            key: t.id,
                            store: t,
                            index: a,
                            isPromptPagesEnabled: A,
                            isMeetingNotesCustomPromptEnabled: P,
                            shimmerFeatureGateEnabled: w,
                            agentProfilePageId: k,
                            dailyBriefPageId: M
                        })
                    }), T = (0, i(682985).O$)(a().AppStoreSidebarSpaceViewStore), B = (0, i(972740).L)(), _ = (0, i(682985).K8)(() => void 0 !== T && (0, i(822209).X)({
                        environment: S,
                        spaceViewStore: T,
                        userSettingsStore: a().AppStoreCurrentUserSettingsStore.state
                    }), [S, T]), E = (0, i(682985).K8)(() => (0, i(194020).E)(S, B), [S, B]), K = 0 === u, D = (null == C ? void 0 : C.length) === 0, V = ((null == C ? void 0 : C.length) <= i(393658).iC || e.isHeaderless || i(986939).A.isMobile) && K && ("private" === b || "workspace" === b) && !t, N = D && !V && !K, F = {
                        offline: i(828432).lpW,
                        bookmarks: i(828432).X3W,
                        workspace: i(828432).rR7,
                        shared: i(828432).Bbz,
                        private: i(828432).$_L,
                        team: i(828432).zqk,
                        agents: i(828432).zCL,
                        [i(171231).sx]: i(828432).zCL,
                        [i(171231).tJ]: i(828432).zCL,
                        [i(171231).qe]: i(828432).zCL,
                        [i(171231).Vf]: i(828432).zCL,
                        notion_apps: i(828432).M4_,
                        meetings_today: i(828432).gSH,
                        myMeetings: i(828432).XM5,
                        recents: i(828432).buo,
                        [i(171231).zt]: void 0,
                        [i(171231).AX]: void 0,
                        [i(171231).GU]: void 0,
                        [i(171231).st]: void 0,
                        [i(171231).yy]: void 0
                    }[e.type], O = V && E;
                    return (0, r.useEffect)(() => {
                        O && i(903673).O.load()
                    }, [O]), (0, s.jsxs)(i(60469).A, {
                        id: e.id,
                        "aria-labelledby": e["aria-labelledby"],
                        role: K ? "tree" : "group",
                        style: e.style,
                        innerStyle: g.style1,
                        className: F,
                        loaded: !d,
                        showSpinnerTimeout: 3e3,
                        spinnerSize: "relative",
                        children: [(0, s.jsx)(i(4458).VP, {
                            gap: 1,
                            children: C
                        }), D && K && !("private" === b && _) ? (0, s.jsx)(y, {
                            type: e.type,
                            parentStore: e.parentStore
                        }) : void 0, V ? (0, s.jsx)(c, {
                            type: e.type,
                            from: "main_sidebar"
                        }) : void 0, N ? (0, s.jsx)(p, {
                            itemStyle: e.itemStyle
                        }) : void 0]
                    })
                });

            function p(e) {
                let {
                    isTablet: t
                } = (0, i(533992).Y0)(), r = (0, i(960253).I)(() => ({
                    placeholder: {
                        color: i(632079).Tj.text.tertiary,
                        fontWeight: t ? i(699422).Wy.regular : void 0,
                        paddingInlineStart: 16,
                        ...i(986939).A.isMobile && {
                            display: "flex",
                            alignItems: "center",
                            height: 32,
                            marginTop: t ? "-8px" : void 0
                        }
                    }
                }), [t]);
                return (0, s.jsx)(i(380559).u, {
                    role: "treeitem",
                    style: e.itemStyle,
                    children: (0, s.jsx)("div", {
                        style: r.placeholder,
                        children: (0, s.jsx)(i(109939).sA, {
                            defaultMessage: "No pages inside",
                            id: "outliner.NoPagesInside.placeholder"
                        })
                    })
                })
            }
            u.displayName = "Outliner";
            let m = r.memo(function(e) {
                    let {
                        store: t,
                        index: r
                    } = e;
                    return (0, s.jsx)(i(824256).Mw, {
                        type: e.type,
                        from: e.from,
                        variant: "primary",
                        store: t,
                        style: e.itemStyle,
                        toggleStyle: e.itemToggleStyle,
                        itemIndex: r,
                        itemDepth: e.itemDepth,
                        itemOpenByDefault: e.itemOpenByDefault,
                        parentStore: t.getRecordStoreUIParent(),
                        onNavigate: e.onNavigate,
                        disabled: e.disabled,
                        spaceViewStore: e.spaceViewStore,
                        includeArchivedPages: e.includeArchivedPages,
                        isPromptPagesEnabled: e.isPromptPagesEnabled,
                        isMeetingNotesCustomPromptEnabled: e.isMeetingNotesCustomPromptEnabled,
                        shimmerFeatureGateEnabled: e.shimmerFeatureGateEnabled,
                        agentProfilePageId: e.agentProfilePageId,
                        dailyBriefPageId: e.dailyBriefPageId
                    }, t.id)
                }),
                y = r.memo(function(e) {
                    let {
                        type: t,
                        parentStore: a
                    } = e, o = (0, i(533992).v3)(), l = (0, i(67499).S)(), n = (0, i(972740).L)(), d = `OutlinerItem${t??""}${(null==a?void 0:a.id)??""}`, c = (0, r.useCallback)(e => !!n && (0, i(576536).ox)({
                        environment: o,
                        draggingStores: e.draggingStores,
                        parentStore: a,
                        spaceStore: n,
                        pageContext: l
                    }), [o, n, l, a]), {
                        value: g
                    } = (0, i(815048).fJ)(i(411648).VI.duplicateActions), u = (0, i(993077).U2)(n), p = (0, r.useCallback)(async e => {
                        await i(245757).RM({
                            dropArgs: e,
                            environment: o,
                            type: t,
                            isDroppingOnFullSection: !1,
                            parentStore: a,
                            duplicateActions: g,
                            spaceUserStore: u
                        })
                    }, [o, t, a, g, u]);
                    return (0, s.jsx)(i(634944).Tl, {
                        dropTargetKey: d,
                        canDropBelow: !0,
                        onSelectableDrop: p,
                        shouldShowDropZone: !0,
                        canAcceptDrop: c
                    })
                })
        },
        788480: (e, t, i) => {
            i.d(t, {
                v: () => r
            });

            function r(e) {
                return (0, i(682985).K8)(() => (0, i(152396).u)(e), [e])
            }
        },
        824256: (e, t, i) => {
            i.d(t, {
                Mw: () => s
            });
            var r = i(296540);
            i(898992), i(823215), i(581454), i(737550);
            var a = i(474848);
            let o = {
                initialIcon: {
                    fontSize: 12,
                    fontWeight: i(699422).Wy.medium,
                    marginInlineStart: 5,
                    color: i(632079).Tj.text.secondary
                },
                hoveredItem: {
                    background: i(632079).Tj.sidebarItemSelectedBackground
                },
                linkBox: {
                    width: "100%",
                    ...i(153262).hG
                },
                tooltipContainer: {
                    maxWidth: 280,
                    width: "max-content"
                },
                tooltipMessage: {
                    color: i(632079).Tj.text.secondary
                }
            };

            function l(e) {
                let {
                    store: t,
                    collectionViewStore: l,
                    onNavigate: n,
                    type: s,
                    from: d,
                    spaceViewStore: c,
                    includeArchivedPages: g
                } = e, u = (0, i(533992).v3)(), p = (0, i(682985).K8)(() => t.getCollectionViewStores().some(e => "page" === e.getType()), [t]), m = (0, i(682985).K8)(() => {
                    if (p) return !1;
                    let e = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                        {
                            currentCollectionViewStore: r
                        } = i(728372).default.state;
                    return !!(e && t.id === e.id && r && r.id === l.id)
                }, [l.id, t.id, p]), y = (0, i(682985).K8)(() => (0, i(597845).Wi)(u, t.id), [u, t]), b = (0, i(960253).I)(() => ({
                    sidebarItem: { ...m && i(132261).DX.currentSelectedSidebarItem,
                        ...(0, i(153262).Jg)(),
                        ...e.style
                    }
                }), [m, e.style]), S = (0, i(682985).K8)(() => (0, i(483227).Ay)({
                    store: t,
                    fullyQualified: !1,
                    collectionViewId: l.id,
                    pageVisitSource: (0, i(318506).N)({
                        type: s,
                        from: d
                    })
                }), [l.id, d, t, s]), h = (0, i(682985).K8)(() => ({
                    ready: l.isReady(),
                    type: l.getType(),
                    pagePointer: l.getFormat().page_pointer,
                    name: l.getName()
                }), [l]), f = (0, i(682985).K8)(() => {
                    if ("page" !== h.type || !h.pagePointer) return null;
                    let e = i(970831).B.createChildStore(t, {
                        table: h.pagePointer.table,
                        id: h.pagePointer.id
                    });
                    return {
                        ready: (0, i(734957).X)(e),
                        outlinerItems: (0, i(531353).yD)({
                            rootStore: e,
                            includeArchived: g
                        })
                    }
                }, [h, t, g]), v = (0, i(682985).K8)(() => t.getContentStore(), [t]), I = (0, r.useCallback)(() => {
                    !y && n && n(t)
                }, [t, n, y]), x = (0, r.useCallback)(async e => {
                    if (c) {
                        let t = i(728372).AppStoreSidebarSpaceStore.state;
                        if ((null == t ? void 0 : t.id) !== c.getSpaceId()) {
                            let t = await (0, i(269948).y)({
                                environment: u,
                                spaceViewStore: c
                            });
                            if (t.switchedUser) return e(t.newEnvironment)
                        }
                    }
                    e()
                }, [u, c]);
                if (!h.ready) return null;
                if ("page" === h.type && f) {
                    let {
                        ready: t,
                        outlinerItems: r
                    } = f;
                    return (0, a.jsx)(i(770275).T, {
                        type: e.type,
                        childStores: r,
                        areChildrenLoading: !t,
                        itemDepth: e.itemDepth + 1,
                        parentStore: v,
                        itemStyle: b.sidebarItem,
                        itemToggleStyle: e.itemToggleStyle,
                        onNavigate: e.onNavigate,
                        disabled: e.disabled,
                        from: d,
                        spaceViewStore: e.spaceViewStore
                    })
                }
                if (p) return null;
                let j = (0, a.jsxs)("div", {
                    style: o.tooltipContainer,
                    children: [(0, a.jsx)(i(109939).sA, {
                        id: "collectionViewOutlinerItem.offlineTooltip.title",
                        defaultMessage: "Unavailable offline"
                    }), (0, a.jsx)("div", {
                        style: o.tooltipMessage,
                        children: (0, a.jsx)(i(109939).sA, {
                            id: "collectionViewOutlinerItem.offlineTooltip.message",
                            defaultMessage: "Return online to view or make the page available offline."
                        })
                    })]
                });
                return (0, a.jsx)(i(51831).m, {
                    disableTooltip: !y,
                    placement: "right",
                    textWrap: !0,
                    content: () => j,
                    children: e => (0, a.jsx)(i(590422).Q, {
                        href: y ? void 0 : S,
                        style: o.linkBox,
                        hoveredStyle: o.hoveredItem,
                        preNavigationAction: x,
                        onClick: I,
                        role: "treeitem",
                        "aria-current": m ? "step" : void 0,
                        disabled: y,
                        disabledFeedback: y,
                        ...e,
                        children: (0, a.jsx)(i(380559).u, {
                            icon: (0, a.jsx)("div", {
                                style: o.initialIcon,
                                children: "•"
                            }),
                            style: b.sidebarItem,
                            children: (0, a.jsx)(i(437188).A, {
                                collectionViewName: h.name,
                                collectionViewType: h.type ? ? "table"
                            })
                        })
                    })
                })
            }

            function n(e) {
                let {
                    store: t,
                    from: r
                } = e, o = (0, i(682985).K8)(() => t.getCollectionViewStores(), [t]);
                return (0, a.jsx)("div", {
                    role: "group",
                    id: e.id,
                    "aria-labelledby": e["aria-labelledby"],
                    onContextMenu: e => {
                        e.preventDefault(), (0, i(705660).SQ)(e, i(705660).y$.EditorContextMenu, () => {})
                    },
                    children: o.map(i => (0, a.jsx)(l, {
                        store: t,
                        from: r,
                        collectionViewStore: i,
                        style: e.itemStyle,
                        onNavigate: e.onNavigate,
                        type: e.type,
                        itemDepth: e.itemDepth,
                        disabled: e.disabled,
                        childStores: e.childStores,
                        spaceViewStore: e.spaceViewStore,
                        includeArchivedPages: e.includeArchivedPages
                    }, i.id))
                })
            }

            function s(e) {
                let {
                    store: t,
                    itemIndex: o,
                    parentStore: l,
                    type: n,
                    itemDepth: s,
                    disabled: c,
                    from: g,
                    variant: u,
                    spaceViewStore: p,
                    showSpaceData: m
                } = e, y = (0, i(533992).v3)(), b = (0, i(67499).S)(), S = 0 === s, [h, f] = (0, r.useState)(() => {
                    if ((0, i(722371).O9)(e.itemOpenByDefault)) return e.itemOpenByDefault;
                    if (S) {
                        var r;
                        let e = i(255482).K.get({
                            userId: y.currentUser.id,
                            key: (r = t, `Outliner-${r.id}`)
                        });
                        if ((0, i(722371).O9)(e)) return e
                    }
                    return !1
                }), [v, I] = (0, r.useState)(!1), [x, j] = (0, r.useState)(!1), A = (0, r.useId)(), P = (0, r.useId)(), w = (0, i(682985).K8)(() => (0, i(226952).L)(t), [t]), k = (0, i(682985).K8)(() => t.canRead() && "copy_indicator" !== t.getType(), [t]), M = (0, i(682985).K8)(() => {
                    var e;
                    return !c && (e = {
                        environment: y,
                        blocks: [t],
                        publicEditMode: null == b ? void 0 : b.publicEditModeStore.state,
                        pageContext: b
                    }, !(i(420153).l.state || (0, i(245857).q)()) && e.blocks.every(t => (0, i(862085).M0)(t, e.publicEditMode, e.environment)))
                }, [c, y, t, b]), C = (0, i(682985).K8)(() => !!M && (0, i(258440).g)({
                    destinationStore: t,
                    toggleStore: void 0
                }), [t, M]), {
                    isCopyIndicator: T,
                    shouldShowAsLoadingSpinner: B
                } = (0, i(788480).v)(t), _ = (0, r.useRef)(null);
                (0, i(336494).b)(i(522756).A, () => ({
                    store: t,
                    parentStore: l,
                    type: n,
                    isTopLevelItem: S,
                    getNode: () => _.current,
                    setIsOpen: f
                }), [t, l, n, S, f]);
                let E = (0, r.useMemo)(() => k && l && "recents" !== n ? {
                        onInsertBelow: e => i(245757).o8({ ...e,
                            environment: y,
                            store: t,
                            parentStore: l,
                            before: !0,
                            type: n
                        }),
                        onInsertAbove: e => i(245757).o8({ ...e,
                            environment: y,
                            store: t,
                            parentStore: l,
                            before: !1,
                            type: n
                        })
                    } : {}, [k, y, l, t, n]),
                    K = (0, r.useCallback)(e => {
                        let t = e.target;
                        t instanceof HTMLElement && (0, i(768397).p)(t) && j(!0)
                    }, []),
                    D = (0, r.useCallback)(() => {
                        j(!1)
                    }, []),
                    V = (0, r.useCallback)(() => {
                        i(400198).A.state.isDragging || I(!0)
                    }, []),
                    N = (0, r.useCallback)(() => {
                        I(!1)
                    }, []),
                    F = (0, r.useCallback)(e => {
                        void 0 !== e ? f(e) : f(e => !e)
                    }, []),
                    O = (0, i(960253).I)(() => ({
                        selectableStyle: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            paddingBottom: h && "secondary" === u ? 8 : 0
                        }
                    }), [h, u]),
                    R = (0, r.useCallback)(e => {
                        let r = t.getRecordStoreUIParent();
                        null != r && r.valueIs(i(823608)._) && i(245757).Nr({ ...e,
                            type: n,
                            targetStore: t,
                            targetParentStore: r,
                            isTopLevelItem: S
                        })
                    }, [t, n, S]),
                    {
                        value: L
                    } = (0, i(815048).fJ)(i(411648).VI.duplicateActions),
                    z = (0, i(993077).U2)(),
                    W = (0, r.useCallback)(async e => {
                        let {
                            droppedDirection: r,
                            droppedStores: a,
                            duplicate: o
                        } = e;
                        l && await i(245757).Hu({
                            environment: y,
                            spaceUserStore: z,
                            type: n,
                            targetParentStore: l,
                            targetStore: t,
                            isTopLevelItem: S,
                            droppedDirection: r,
                            droppedStores: a,
                            duplicate: o,
                            isDroppingOnFullSection: !1,
                            duplicateActions: L
                        })
                    }, [l, y, n, t, S, L, z]);
                if (!w || T && !B) return null;
                let U = "recents" !== n && k,
                    H = "recents" !== n && 0 === o;
                return (0, a.jsxs)(i(611752).Ay, {
                    analyticsName: "outliner_item",
                    actionSectionGroupKey: "sidebar_outliner",
                    contextMenuAndDragStores: [t],
                    canDrag: k,
                    canDropAbove: H,
                    canDropBelow: U,
                    canDropOnto: C,
                    canInsertBelow: U,
                    canInsertAbove: U,
                    canSelect: k,
                    canTriggerContextMenu: !0,
                    disableDiffHighlight: !0,
                    onRemove: R,
                    onSelectableDrop: W,
                    shouldShowDropZone: !0,
                    showBlockMenuInput: !1,
                    store: t,
                    ref: _,
                    style: O.selectableStyle,
                    ...E,
                    children: [(0, a.jsx)(i(322915).l, {
                        variant: u,
                        from: g,
                        store: t,
                        style: e.style,
                        parentStore: l,
                        type: n,
                        itemIndex: e.itemIndex,
                        itemDepth: e.itemDepth,
                        onNavigate: e.onNavigate,
                        targetStore: w,
                        canEditItem: M,
                        nestedOutlinerAriaId: A,
                        titleAriaId: P,
                        onFocus: K,
                        onBlur: D,
                        onMouseMove: V,
                        onMouseLeave: N,
                        onToggle: F,
                        isHovered: v,
                        isFocused: x,
                        isOpen: h,
                        spaceViewStore: p,
                        showSpaceData: m ? ? !1,
                        isPromptPagesEnabled: e.isPromptPagesEnabled,
                        isMeetingNotesCustomPromptEnabled: e.isMeetingNotesCustomPromptEnabled,
                        shimmerFeatureGateEnabled: e.shimmerFeatureGateEnabled,
                        agentProfilePageId: e.agentProfilePageId,
                        dailyBriefPageId: e.dailyBriefPageId
                    }), h ? (0, a.jsx)(d, {
                        disabled: c,
                        store: t,
                        from: g,
                        style: e.style,
                        targetStore: w,
                        itemDepth: e.itemDepth,
                        nestedOutlinerAriaId: A,
                        titleAriaId: P,
                        onNavigate: e.onNavigate,
                        type: n,
                        toggleStyle: e.toggleStyle,
                        spaceViewStore: p,
                        includeArchivedPages: e.includeArchivedPages
                    }) : void 0]
                })
            }

            function d(e) {
                let {
                    disabled: t,
                    store: r,
                    from: o,
                    style: l,
                    targetStore: s,
                    itemDepth: d,
                    nestedOutlinerAriaId: c,
                    titleAriaId: g,
                    onNavigate: u,
                    type: p,
                    toggleStyle: m,
                    spaceViewStore: y,
                    includeArchivedPages: b
                } = e, S = "library" === o, h = (0, i(682985).K8)(() => !(0, i(734957).X)(r), [r]), f = (0, i(682985).K8)(() => s.isCollectionView() ? s : null, [s]), v = (0, i(682985).K8)(() => (0, i(531353).Mr)({
                    store: r,
                    includeArchived: b
                }), [r, b]), I = (0, i(682985).K8)(() => s.getContentStore(), [s]), x = (0, i(960253).I)(() => {
                    let e = "number" == typeof(null == l ? void 0 : l.paddingInlineStart) ? l.paddingInlineStart : i(986939).A.isMobile ? i(393658).ph : 5,
                        t = i(986939).A.isMobile ? i(393658).RD : S ? i(453440).yy : i(393658).Hc;
                    return {
                        item: { ...l,
                            paddingInlineStart: e + t
                        }
                    }
                }, [l, S]);
                return f && !S ? (0, a.jsx)(n, {
                    store: f,
                    from: o,
                    itemStyle: x.item,
                    onNavigate: u,
                    type: p,
                    childStores: v,
                    areChildrenLoading: !1,
                    itemDepth: d + 1,
                    parentStore: I,
                    itemToggleStyle: e.toggleStyle,
                    disabled: t,
                    id: c,
                    "aria-labelledby": g,
                    spaceViewStore: y,
                    includeArchivedPages: b
                }) : (0, a.jsx)(i(770275).T, {
                    from: o,
                    type: p,
                    childStores: v,
                    areChildrenLoading: h,
                    itemDepth: d + 1,
                    parentStore: I,
                    itemStyle: x.item,
                    itemToggleStyle: m,
                    onNavigate: u,
                    disabled: t,
                    id: c,
                    "aria-labelledby": g,
                    spaceViewStore: y,
                    includeArchivedPages: b
                })
            }
        },
        925021: (e, t, i) => {
            i.d(t, {
                K: () => a,
                v: () => r
            });
            let r = (0, i(109939).YK)({
                    addAPageInside: {
                        defaultMessage: "Add a page inside",
                        id: "sidebarItem.addAPageInside.tooltip"
                    }
                }),
                a = (0, i(109939).YK)({
                    addPageTooltip: {
                        defaultMessage: "Add a page",
                        id: "sidebar.addButton.addPageTooltip"
                    }
                })
        }
    }
]);