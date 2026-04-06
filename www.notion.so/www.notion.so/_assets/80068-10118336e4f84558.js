"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [80068], {
        618: (e, t, r) => {
            r.d(t, {
                u: () => n
            }), r(898992), r(823215), r(581454);
            var o = r(296540),
                i = r(474848);
            let s = {
                containerBase: {
                    fontSize: 14,
                    color: r(632079).Tj.text.secondary,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                },
                containerCard: {
                    backgroundColor: r(632079).Tj.background.primary,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: r(632079).Tj.border.secondary,
                    padding: 16,
                    boxShadow: r(632079).Tj.shadow.base.diffuse
                },
                emptyState: {
                    color: r(632079).Tj.text.secondary,
                    fontSize: 14,
                    paddingBlock: 20,
                    paddingInline: 12,
                    textAlign: "center"
                }
            };

            function n(e) {
                let {
                    spaceId: t,
                    actorId: o,
                    overridePeekMode: n,
                    variant: a
                } = e, d = (0, r(533992).v3)(), c = (0, r(109939).tz)(), [{
                    value: u,
                    status: h,
                    error: p
                }] = (0, r(97668).Yb)(async () => {
                    let e = await d.api.callCellCompatibleApi({
                        eventName: "getActorActivities",
                        environment: d,
                        data: {
                            spaceId: t,
                            actorId: o
                        },
                        cellNavigation: {
                            spaceId: t
                        }
                    });
                    if ("success" === e.type) return e.data;
                    if ("failed" === e.type) throw e.error;
                    (0, r(722371).HB)(e)
                }, [d, t, o]), m = (0, r(972740).L)(), x = null == u ? void 0 : u.actorActivities, b = (0, r(682985).K8)(() => !x || 0 === x.length || !!m && x.every(e => {
                    let t = r(970831).B.createChildStore(m, {
                        table: r(832375).evP,
                        id: e.navigableBlockId,
                        spaceId: m.id
                    });
                    return !!t && t.isReady()
                }), [x, m]);
                return (0, i.jsx)(r(337336).K, {
                    from: "ActivityFeedModule",
                    fallback: e => (0, i.jsx)(r(640310).d, { ...e
                    }),
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(r(982379).j, {
                            children: (0, i.jsx)(r(109939).sA, {
                                id: "PersonProfile.recentActivity.title",
                                defaultMessage: "Recent activity"
                            })
                        }), "pending" === h || "idle" === h ? (0, i.jsx)(f, {
                            variant: a
                        }) : p ? (0, i.jsx)(r(789682).LargeSurfaceRenderError, {}) : null != u && u.hidden || !x || 0 === x.length ? (0, i.jsx)("div", {
                            style: s.emptyState,
                            children: c.formatMessage(g.emptyState)
                        }) : b ? (0, i.jsx)("div", {
                            style: { ...s.containerBase,
                                ..."card" === a && s.containerCard
                            },
                            children: x.map(e => (0, i.jsx)(l, {
                                activity: e,
                                overridePeekMode: n,
                                variant: a
                            }, e.id))
                        }) : (0, i.jsx)(f, {
                            variant: a
                        })]
                    })
                })
            }
            let a = {
                itemBase: {
                    paddingBlock: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                itemCard: {
                    paddingInline: 8,
                    borderRadius: 6
                },
                activityText: {
                    color: r(632079).Tj.text.primary,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    flex: 1,
                    minWidth: 0
                },
                actionText: {
                    color: r(632079).Tj.text.secondary,
                    flexShrink: 0
                },
                timestamp: {
                    fontSize: 12,
                    color: r(632079).Tj.text.tertiary,
                    marginInlineStart: 8,
                    flexShrink: 0
                }
            };

            function l(e) {
                var t, s;
                let n, l, d, {
                        activity: u,
                        overridePeekMode: h,
                        variant: f
                    } = e,
                    p = (0, r(109939).tz)(),
                    m = (0, r(533992).v3)(),
                    x = (0, r(972740).L)(),
                    b = (0, r(682985).K8)(() => {
                        if (!x) return;
                        let e = r(970831).B.createChildStore(x, {
                            table: r(832375).evP,
                            id: u.navigableBlockId,
                            spaceId: x.id
                        });
                        if (e && e.isReady() && e.isNavigableBlock()) return e
                    }, [u.navigableBlockId, x]),
                    y = o.useCallback(e => {
                        e.preventDefault(), b && (0, r(545586).navigateToBlock)({
                            environment: m,
                            store: b,
                            openInSidePeek: h === r(387722).A || void 0,
                            openInCenterPeek: h === r(387722).O || void 0,
                            pageVisitSource: r(254656).y8.PersonProfileRecentActivity
                        })
                    }, [m, b, h]),
                    j = (0, r(799843).nl)(u.latestTime, {
                        useUltraCompactFormat: !0
                    }),
                    v = (0, r(960253).I)(() => ({
                        button: { ...a.itemBase,
                            ..."card" === f && a.itemCard
                        }
                    }), [f]);
                return (0, i.jsxs)(r(64960).Ay, {
                    onClick: y,
                    style: v.button,
                    children: [(0, i.jsxs)("div", {
                        style: a.activityText,
                        children: [(0, i.jsx)("span", {
                            style: a.actionText,
                            children: (t = u.actionTypes, s = p, n = t.includes("created"), l = t.includes("edited"), d = t.includes("commented"), n && l && d ? s.formatMessage(g.createdEditedAndCommented) : n && l ? s.formatMessage(g.createdAndEdited) : n && d ? s.formatMessage(g.createdAndCommented) : l && d ? s.formatMessage(g.editedAndCommented) : n ? s.formatMessage(g.created) : l ? s.formatMessage(g.edited) : d ? s.formatMessage(g.commented) : "")
                        }), b ? (0, i.jsx)(c, {
                            blockStore: b,
                            sidebarSpaceStore: x
                        }) : null]
                    }), (0, i.jsx)("div", {
                        style: a.timestamp,
                        children: j
                    })]
                })
            }
            let d = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    minWidth: 0
                },
                recordIcon: {
                    flexShrink: 0
                },
                recordTitle: {
                    color: r(632079).Tj.text.primary,
                    fontWeight: r(699422).Wy.medium,
                    minWidth: 0
                }
            };

            function c(e) {
                let {
                    blockStore: t,
                    sidebarSpaceStore: o
                } = e, s = (0, r(533992).v3)(), n = (0, r(682985).K8)(() => {
                    var e;
                    return null == t || null == (e = t.getModel()) ? void 0 : e.getRenderIcon({
                        getRecordModel: t.getRecordModel
                    })
                }, [t]), a = (0, r(682985).K8)(() => !!t && t.isEmptyPage(), [t]), l = (0, r(682985).K8)(() => (0, r(569553).Te)(t), [t]), c = (0, r(682985).K8)(() => !!t && !!o && (0, r(359659).DU)({
                    recordId: t.id,
                    recordType: "block",
                    tab: "personProfile",
                    rootStore: o,
                    environment: s
                }), [t, o, s]);
                return (0, i.jsxs)("span", {
                    style: d.container,
                    children: [(0, i.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: n,
                        iconRecordCategory: l,
                        isEmptyPage: a,
                        size: 16,
                        style: d.recordIcon
                    }), (0, i.jsx)(r(627918).A, {
                        store: t,
                        style: d.recordTitle,
                        underline: !0
                    }), c ? (0, i.jsx)(r(299304).Y, {}) : null]
                })
            }
            let u = {
                    height: 10,
                    borderRadius: 4
                },
                h = {
                    width: 35,
                    height: 10,
                    borderRadius: 4,
                    flexShrink: 0
                };

            function f(e) {
                let {
                    variant: t
                } = e;
                return (0, i.jsx)("div", {
                    style: { ...s.containerBase,
                        ..."card" === t && s.containerCard
                    },
                    children: ["55%", "45%", "65%", "50%", "60%"].map((e, t) => (0, i.jsxs)(r(4458).fI, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                        height: 29,
                        children: [(0, i.jsx)(r(795830).P, {
                            style: { ...u,
                                width: e
                            }
                        }), (0, i.jsx)(r(795830).P, {
                            style: h
                        })]
                    }, t))
                })
            }
            let g = (0, r(109939).YK)({
                created: {
                    id: "ActorActivityFeed.action.created",
                    defaultMessage: "Created"
                },
                edited: {
                    id: "ActorActivityFeed.action.edited",
                    defaultMessage: "Edited"
                },
                commented: {
                    id: "ActorActivityFeed.action.commented",
                    defaultMessage: "Commented on"
                },
                createdAndEdited: {
                    id: "ActorActivityFeed.action.createdAndEdited",
                    defaultMessage: "Created and edited"
                },
                createdAndCommented: {
                    id: "ActorActivityFeed.action.createdAndCommented",
                    defaultMessage: "Created and commented on"
                },
                editedAndCommented: {
                    id: "ActorActivityFeed.action.editedAndCommented",
                    defaultMessage: "Edited and commented on"
                },
                createdEditedAndCommented: {
                    id: "ActorActivityFeed.action.createdEditedAndCommented",
                    defaultMessage: "Created, edited, and commented on"
                },
                emptyState: {
                    id: "ActorActivityFeed.emptyState",
                    defaultMessage: "No activity in the past 30 days"
                }
            })
        },
        102569: (e, t, r) => {
            r.d(t, {
                h: () => i
            }), r(296540);
            var o = r(474848);

            function i(e) {
                let {
                    icon: t,
                    totalCount: i,
                    message: s,
                    onToggleTruncation: n,
                    maxRowsShownWhenTruncated: a = r(924448).rX
                } = e, l = (0, r(109939).tz)(), d = Math.max(i - a, 0);
                return (0, o.jsxs)(r(64960).Ay, {
                    onClick: n,
                    style: r(760727).ZI.truncationButton,
                    hoveredStyle: r(760727).ZI.hoveredStyle,
                    children: [t, (0, o.jsx)("div", {
                        style: r(760727).ZI.truncationLabel,
                        children: l.formatMessage(s, {
                            numHidden: d
                        })
                    })]
                })
            }
        },
        325204: (e, t, r) => {
            r.d(t, {
                K: () => s
            }), r(944114), r(581454);
            var o = r(296540),
                i = r(474848);

            function s(e) {
                let {
                    personProfileStore: t
                } = e, o = (0, r(533992).Y0)(), s = r(986939).A.isMobile && !o.isTablet, a = (0, r(682985).K8)(() => {
                    if (!t.isReady()) return;
                    let e = t.getModel();
                    if (e) return (0, r(907137).dY)({
                        personProfileBlock: e,
                        getRecordModel: t.getRecordModel
                    })
                }, [t]), l = (0, r(682985).K8)(() => t.isReady() && t.canEdit(), [t]), {
                    person_profile_page_main: d
                } = (0, r(935817).Qf)({
                    personProfileStore: t
                });
                return (0, i.jsx)(i.Fragment, {
                    children: d.map(e => {
                        switch (e.type) {
                            case "normalizedTitleWithIcon":
                                return (0, i.jsx)(r(394112).vV, {
                                    style: s ? {
                                        paddingInline: 24,
                                        width: "100%"
                                    } : void 0,
                                    children: (0, i.jsx)(n, {
                                        module: e,
                                        personProfileStore: t,
                                        modules: d,
                                        isEditable: l,
                                        isViewedUserDeactivated: a
                                    })
                                }, e.id);
                            case "cover":
                                return (0, i.jsx)(r(334120).f, {
                                    store: t,
                                    isEditable: l,
                                    paddingX: 0,
                                    pageCoverHeight: r(865594).mv,
                                    onMouseEnter: r(763230).lQ,
                                    onMouseLeave: r(763230).lQ
                                }, e.id);
                            default:
                                return null
                        }
                    })
                })
            }

            function n(e) {
                let {
                    module: t,
                    personProfileStore: s,
                    modules: n,
                    isEditable: a,
                    isViewedUserDeactivated: l
                } = e, d = (0, r(209046).Jh)({
                    layoutModule: t,
                    area: "page_main",
                    collectionSchema: void 0,
                    collectionStore: void 0,
                    showDetailsPanelToggleButtonBelowTitle: !1,
                    modules: n,
                    context: r(166654).R.Frame
                }), c = (0, r(682985).K8)(() => !!(null == s ? void 0 : s.getCover()), [s]), u = r(546605).Store.createValue(!1, {
                    name: "headerFocusStore"
                }), h = (0, o.useMemo)(() => {
                    let e = [];
                    return a && !c && e.push((0, i.jsx)(r(204729).A, {
                        store: s,
                        style: (0, r(865594).g1)(!0),
                        label: (0, i.jsx)(r(109939).sA, {
                            id: "PageViewBlock.cover.pageCover",
                            defaultMessage: "Add cover"
                        }),
                        from: "person_page_header"
                    }, "add-cover")), e
                }, [a, c, s]), f = (0, r(643160).yf)(), g = (0, r(960253).I)(() => ({
                    subtitle: {
                        marginTop: -12,
                        marginBottom: 24,
                        ...f ? (0, r(381453).Up)(r(57461).dE, "paddingInlineStart", "paddingInlineEnd") : {}
                    }
                }), [f]), p = d((0, i.jsx)(r(28847).H, {
                    store: s,
                    context: r(166654).R.Frame,
                    isEditable: !1,
                    headerControls: (0, i.jsx)(r(306472).A, {
                        store: s,
                        context: r(166654).R.Frame,
                        children: h
                    }),
                    hasCover: c,
                    isInSidePeek: !1,
                    headerFocusStore: u,
                    openMenuOnMount: !1,
                    openMenuOnMountCallback: r(763230).lQ,
                    disabled: !0,
                    collectionContextStore: void 0,
                    shouldShowTemplatePicker: !1,
                    onTitleChange: r(763230).lQ,
                    onTitleEditText: r(763230).lQ,
                    onTitleEsc: r(763230).lQ,
                    onTitleUntab: r(763230).lQ,
                    onTitleTab: r(763230).lQ,
                    handleHeaderMouseEnter: r(763230).lQ,
                    handleHeaderMouseLeave: r(763230).lQ,
                    layoutModule: t
                }));
                return l ? (0, i.jsxs)(i.Fragment, {
                    children: [p, (0, i.jsx)("div", {
                        style: g.subtitle,
                        children: (0, i.jsx)(r(111010).D, {
                            styleKey: "titleSemibold",
                            colorVariant: "tertiary",
                            children: (0, i.jsx)(r(109939).sA, { ...r(805186).S.deactivatedLabel
                            })
                        })
                    })]
                }) : p
            }
        },
        359659: (e, t, r) => {
            function o({
                actor: e,
                environment: t
            }) {
                return e.isBot() ? 2 : +(t.currentUser.id === e.id)
            }

            function i(e) {
                let {
                    edits: t,
                    rootStore: i
                } = e, s = r(381453).Mp(t.flatMap(e => e.authors || []), r(381453).n4), a = r(381453).oE(s.map(e => n(e, i)));
                return a.sort((e, t) => o({
                    actor: e,
                    environment: i.environment
                }) - o({
                    actor: t,
                    environment: i.environment
                })), a
            }

            function s(e, t) {
                let o = r(728372).AppStoreCurrentUserStore.state,
                    i = null == o ? void 0 : o.id;
                return (0, r(847871).b)({
                    intl: r(962299).A.getIntl(),
                    authors: e,
                    currentUserId: i,
                    fontWeightForAuthorNames: t
                })
            }

            function n(e, t) {
                var o, i, s, n;
                if (e.table === r(832375).oo9) {
                    let s = (o = e.id, i = t, r(807825).L.createChildStore(i, {
                        table: r(832375).oo9,
                        id: o
                    }).getValue());
                    if (s) return (0, r(197018).A7)(s)
                } else {
                    let o = (s = e.id, n = t, (0, r(517013).v3)(n, {
                        table: r(832375).GPl,
                        id: s
                    }).getValue());
                    if (o) return (0, r(197018).qt)(o)
                }
            }

            function a(e) {
                let {
                    tab: t,
                    recordId: o,
                    recordType: i,
                    rootStore: s,
                    environment: n
                } = e;
                if ("all" === t || "personProfile" === t) {
                    let e;
                    return !!o && ("block" === i ? e = r(970831).B.createChildStore(s, {
                        table: r(832375).evP,
                        id: o
                    }) : "collection" === i ? e = r(356912).m.createChildStore(s, {
                        table: r(832375).VlP,
                        id: o
                    }) : (0, r(722371).HB)(i), (0, r(862085).X9)(n, e))
                }
                return "inbox" !== t && "archive" !== t && "homeTile" !== t && "pageUpdatesSidebar" !== t && !1
            }

            function l(e) {
                let {
                    activity: t,
                    rootStore: o
                } = e;
                if ("commented" !== t.type) return;
                let i = o.getRecordModel({
                    table: r(832375).$YH,
                    id: t.discussion_id,
                    spaceId: t.space_id
                });
                if (!i) return;
                let s = d(i);
                if (s) return {
                    id: i.id,
                    context: s
                }
            }

            function d(e) {
                let t = e.getPersistedContext(),
                    o = t ? (0, r(353711).l8)({
                        discussionContextData: t,
                        discussionType: (0, r(148337).o9)(e.getType()),
                        discussionId: e.id,
                        intl: r(962299).A.getIntl()
                    }) : void 0;
                if (o) return (0, r(247438).JJ$)(o, t => !(0, r(247438).iQL)(t) || (0, r(247438).Orm)(t) === e.id)
            }
            r.d(t, {
                DU: () => a,
                G7: () => o,
                Ln: () => i,
                T9: () => n,
                U6: () => l,
                bD: () => s,
                pN: () => d
            }), r(18107), r(967357), r(898992), r(430670), r(581454), r(737550)
        },
        375564: (e, t, r) => {
            r.d(t, {
                q: () => a
            });
            var o = r(296540),
                i = r(474848);
            let s = {
                    width: 70,
                    height: 24,
                    borderRadius: 4
                },
                n = {
                    width: 160,
                    height: 24,
                    borderRadius: 4
                };

            function a(e) {
                let {
                    module: t,
                    personProfileStore: a,
                    showBottomDivider: l
                } = e, d = (0, r(533992).v3)(), c = (0, r(83208).X)("page_surface_block_property_router"), u = (0, o.useMemo)(() => c ? void 0 : new(r(109900)).B(d), [d, c]), {
                    peopleCollectionStore: h,
                    peopleCollectionBlockStore: f,
                    isPeopleCollectionReady: g
                } = (0, r(682985).K8)(() => {
                    let e = a.getAssociatedCollectionStore(),
                        t = null == e ? void 0 : e.getParentBlockStore();
                    return {
                        peopleCollectionStore: e,
                        peopleCollectionBlockStore: t,
                        isPeopleCollectionReady: null == e ? void 0 : e.isReady()
                    }
                }, [a]);
                if ((0, o.useEffect)(() => {
                        !c && h && f && f.isCollectionView() && (null == u || u.setContext({
                            type: "collectionPage",
                            collectionStore: h,
                            collectionViewBlockStore: f
                        }))
                    }, [c, h, f, u]), !g) return (0, i.jsxs)(r(4458).VP, {
                    gap: 8,
                    paddingInlineStart: 6,
                    children: [(0, i.jsx)(r(795830).P, {
                        style: s,
                        emphasized: !0
                    }), (0, i.jsx)(r(795830).P, {
                        style: n,
                        emphasized: !0
                    })]
                });
                let p = (0, i.jsx)(r(120805).h, {
                    context: r(166654).R.Frame,
                    disabled: !1,
                    store: a,
                    wrapper: e => (0, i.jsx)("div", {
                        children: e
                    }),
                    layoutModule: t,
                    customization: {
                        neverShowPropertiesElsewhereInLayout: !0,
                        stackPropertyLabelAndValue: !0,
                        disableLastRowBottomPadding: !1,
                        hideEmptyProperties: !1,
                        sortNonEmptyPropertiesFirst: !1,
                        propertyIdsToExclude: (0, r(639328).fD)(),
                        hideAddPropertyButton: !0,
                        disableContainerPadding: !0,
                        disableTopPadding: !0
                    },
                    showDefaultTitle: !1
                });
                return (0, i.jsx)(r(337336).K, {
                    from: "PersonProfilePropertiesModule",
                    fallback: e => (0, i.jsx)(r(640310).d, { ...e
                    }),
                    children: (0, i.jsxs)("div", {
                        children: [!c && u ? (0, i.jsx)(r(713311).RI, {
                            value: u,
                            children: p
                        }) : p, l ? (0, i.jsx)(r(346268).c, {
                            size: 1,
                            colorVariant: "secondaryTranslucent"
                        }) : null]
                    })
                })
            }
        },
        531978: (e, t, r) => {
            r.d(t, {
                E: () => s
            }), r(296540);
            var o = r(474848);
            let i = {
                width: 120,
                height: 16,
                borderRadius: 4
            };

            function s({
                isIconCircular: e = !1
            }) {
                let t = (0, r(960253).I)(() => ({
                    skeletonIcon: {
                        width: 20,
                        height: 20,
                        borderRadius: e ? "50%" : 4
                    }
                }), [e]);
                return (0, o.jsxs)("div", {
                    style: r(760727).ZI.rowContainer,
                    children: [(0, o.jsx)(r(795830).P, {
                        style: t.skeletonIcon
                    }), (0, o.jsx)(r(795830).P, {
                        style: { ...r(760727).ZI.rowLabel,
                            ...i
                        }
                    })]
                })
            }
        },
        561007: (e, t, r) => {
            r.d(t, {
                U: () => o
            });
            let o = (0, r(109939).YK)({
                forOneAuthorCurrentUser: {
                    id: "authorPhrase.forOneAuthorCurrentUser.label",
                    defaultMessage: "You"
                },
                forTwoAuthorsCurrentUser: {
                    id: "authorPhrase.forTwoAuthorsCurrentUser.label",
                    defaultMessage: "<b>{firstAuthor}</b> and you"
                },
                forThreeAuthorsCurrentUser: {
                    id: "authorPhrase.forThreeAuthorsCurrentUser.label",
                    defaultMessage: "<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and you"
                },
                forMoreThanThreeAuthorsCurrentUser: {
                    id: "authorPhrase.forMoreThanThreeAuthorsCurrentUser.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, you, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, you, and {numberOfOtherAuthors} others}}"
                },
                forOneAuthor: {
                    id: "authorPhrase.forOneAuthor.label",
                    defaultMessage: "<b>{author}</b>"
                },
                forTwoAuthorsCondensed: {
                    id: "authorPhrase.forTwoAuthorsCondensed.label",
                    defaultMessage: "<b>{firstAuthor}</b>, <b>{secondAuthor}</b>"
                },
                forTwoAuthorsPushNotification: {
                    id: "authorPhrase.forTwoAuthorsPushNotification.label",
                    defaultMessage: "{firstAuthor} and {secondAuthor}"
                },
                forTwoAuthors: {
                    id: "authorPhrase.forTwoAuthors.label",
                    defaultMessage: "<b>{firstAuthor}</b> and <b>{secondAuthor}</b>"
                },
                forMoreThanTwoAuthorsCondensed: {
                    id: "authorPhrase.forMoreThanTwoAuthorsCondensed.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, {numberOfOtherAuthors} others}}"
                },
                forMoreThanTwoAuthorsPushNotification: {
                    id: "authorPhrase.forMoreThanTwoAuthorsPushNotification.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, one {{firstAuthor} and {numberOfOtherAuthors} other} other {{firstAuthor}, {numberOfOtherAuthors} others}}"
                },
                forMoreThanTwoAuthors: {
                    id: "authorPhrase.forMoreThanTwoAuthors.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, =0 {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>} one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} others}}"
                },
                someone: {
                    id: "authorPhrase.someone.label",
                    defaultMessage: "Someone"
                }
            })
        },
        589275: (e, t, r) => {
            r.d(t, {
                N: () => A
            }), r(581454);
            var o = r(296540),
                i = r(474848);
            let s = {
                container: {
                    width: 140,
                    height: 140,
                    flexShrink: 0,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    borderRadius: 16,
                    backgroundColor: r(632079).Tj.background.primary,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    paddingTop: 32,
                    paddingInlineEnd: 20,
                    paddingBottom: 20,
                    paddingInlineStart: 20
                },
                shimmer: {
                    position: "absolute",
                    inset: 0
                },
                icon: {
                    position: "relative"
                },
                titleContainer: {
                    marginTop: 8,
                    display: "flex",
                    alignItems: "flex-start",
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden"
                },
                title: {
                    fontSize: 16,
                    lineHeight: "24px",
                    fontWeight: r(699422).Wy.semibold,
                    color: r(632079).Tj.text.primary,
                    wordBreak: "break-word",
                    overflowWrap: "break-word"
                }
            };

            function n(e) {
                let {
                    store: t,
                    onClick: o
                } = e, n = (0, r(682985).K8)(() => null != t && t.isDefined() ? t : void 0, [t]), l = !n;
                return (0, i.jsx)(r(64960).Ay, {
                    style: s.container,
                    onClick: o,
                    disabled: l,
                    children: l ? (0, i.jsx)(r(795830).P, {
                        style: s.shimmer
                    }) : (0, i.jsx)(a, {
                        store: n
                    })
                })
            }

            function a(e) {
                let {
                    store: t
                } = e, {
                    icon: o,
                    isEmptyPage: n,
                    iconRecordCategory: a
                } = (0, r(682985).K8)(() => {
                    let e = t.getIcon();
                    return {
                        icon: e,
                        isEmptyPage: t.isEmptyPage(),
                        iconRecordCategory: (0, r(569553).Te)(t)
                    }
                }, [t]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l, {
                        store: t
                    }), (0, i.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: o,
                        iconRecordCategory: a,
                        isEmptyPage: n,
                        size: 28,
                        style: s.icon
                    }), (0, i.jsx)("div", {
                        style: s.titleContainer,
                        children: (0, i.jsx)(r(627918).A, {
                            shouldWrap: !0,
                            maxLines: 2,
                            store: t,
                            style: s.title
                        })
                    })]
                })
            }

            function l(e) {
                let {
                    store: t
                } = e, o = (0, r(960253).e)(), s = (0, r(682985).K8)(() => {
                    var e;
                    return (0, r(417317).b)({
                        icon: null == (e = t.getIconStore()) ? void 0 : e.getValue(),
                        themeMode: o
                    })
                }, [t, o]), n = (0, r(960253).I)(() => ({
                    container: {
                        position: "absolute",
                        top: 0,
                        insetInline: 0,
                        height: 44,
                        overflow: "hidden",
                        backgroundColor: s ? (0, r(650342).X4)(s, .1) : r(632079).Tj.background.secondaryTranslucent
                    }
                }), [s]);
                return (0, i.jsx)("div", {
                    style: n.container,
                    children: (0, i.jsx)(r(15021).d, {
                        store: t,
                        disabled: !1,
                        paddingLeft: 0,
                        paddingRight: 0,
                        height: 44,
                        proxyWidth: 140
                    })
                })
            }
            let d = {
                container: {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: 168,
                    overflow: "hidden",
                    contain: "strict",
                    borderRadius: 16,
                    backgroundColor: r(632079).Tj.background.primary,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    boxShadow: r(632079).Tj.shadow.base.diffuse
                }
            };

            function c(e) {
                let {
                    store: t,
                    onClick: o
                } = e, s = (0, r(682985).K8)(() => null != t && t.isDefined() ? t : void 0, [t]), n = !s;
                return (0, i.jsx)(r(64960).Ay, {
                    style: d.container,
                    onClick: o,
                    disabled: n,
                    children: n ? (0, i.jsx)(h, {}) : (0, i.jsx)(g, {
                        store: s
                    })
                })
            }
            let u = {
                position: "absolute",
                inset: 0
            };

            function h() {
                return (0, i.jsx)(r(795830).P, {
                    style: u
                })
            }
            let f = {
                position: "relative",
                marginTop: 32,
                marginInlineStart: 20
            };

            function g(e) {
                let {
                    store: t
                } = e, {
                    icon: o,
                    isEmptyPage: s,
                    iconRecordCategory: n
                } = (0, r(682985).K8)(() => {
                    let e = t.getIcon();
                    return {
                        icon: e,
                        isEmptyPage: t.isEmptyPage(),
                        iconRecordCategory: (0, r(569553).Te)(t)
                    }
                }, [t]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(p, {
                        store: t
                    }), (0, i.jsx)(r(569553).B6, {
                        disabled: !0,
                        icon: o,
                        iconRecordCategory: n,
                        isEmptyPage: s,
                        size: 28,
                        style: f
                    }), (0, i.jsx)(x, {
                        store: t
                    }), (0, i.jsx)(j, {
                        store: t
                    })]
                })
            }

            function p(e) {
                let {
                    store: t
                } = e, o = (0, r(960253).e)(), s = (0, r(682985).K8)(() => {
                    var e;
                    return (0, r(417317).b)({
                        icon: null == (e = t.getIconStore()) ? void 0 : e.getValue(),
                        themeMode: o
                    })
                }, [t, o]), n = (0, r(960253).I)(() => ({
                    container: {
                        position: "absolute",
                        top: 0,
                        insetInline: 0,
                        height: 44,
                        overflow: "hidden",
                        pointerEvents: "none",
                        backgroundColor: s ? (0, r(650342).X4)(s, .1) : r(632079).Tj.background.secondaryTranslucent
                    }
                }), [s]);
                return (0, i.jsx)("div", {
                    style: n.container,
                    children: (0, i.jsx)(r(15021).d, {
                        store: t,
                        disabled: !0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        height: 44,
                        proxyWidth: 300
                    })
                })
            }
            let m = {
                container: {
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginTop: 12,
                    marginInline: 20,
                    flex: "1"
                },
                title: {
                    fontWeight: r(699422).Wy.semibold,
                    fontSize: "14px",
                    color: r(632079).Tj.text.primary,
                    lineHeight: "20px",
                    wordBreak: "break-word",
                    overflowWrap: "break-word"
                }
            };

            function x(e) {
                let {
                    store: t
                } = e;
                return (0, i.jsx)("div", {
                    style: m.container,
                    children: (0, i.jsx)(r(627918).A, {
                        shouldWrap: !0,
                        maxLines: 2,
                        store: t,
                        style: m.title
                    })
                })
            }

            function b(e) {
                let {
                    userOrBotStore: t,
                    size: o
                } = e;
                switch (null == t ? void 0 : t.table) {
                    case r(832375).oo9:
                        return (0, i.jsx)(r(321753).A, {
                            userStore: t,
                            size: o
                        });
                    case r(832375).GPl:
                        return (0, i.jsx)(r(31319).A, {
                            botStore: t,
                            size: o
                        });
                    default:
                        return (0, i.jsx)(r(321753).A, {
                            userStore: void 0,
                            size: o
                        })
                }
            }
            let y = {
                container: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 8,
                    marginInline: 20,
                    paddingBottom: 16
                },
                text: {
                    fontSize: 12,
                    lineHeight: "16px",
                    color: r(632079).Tj.text.tertiary,
                    whiteSpace: "nowrap"
                }
            };

            function j(e) {
                let {
                    store: t
                } = e, o = (0, r(533992).v3)(), s = (0, r(972740).L)(), n = (0, r(682985).K8)(() => !!t && !!s && (0, r(359659).DU)({
                    recordId: t.id,
                    recordType: "block",
                    tab: "personProfile",
                    rootStore: s,
                    environment: o
                }), [o, s, t]), {
                    lastEditedTime: a,
                    lastEditedByStore: l
                } = (0, r(682985).K8)(() => ({
                    lastEditedTime: t.getLastEditedTime(),
                    lastEditedByStore: t.getLastEditedByStore()
                }), [t]);
                if (a <= 0) return null;
                let d = (0, r(799843).nl)(a, {
                        useCompactFormat: !0,
                        useWeeks: !0
                    }),
                    c = (0, i.jsxs)("div", {
                        style: y.container,
                        children: [n ? (0, i.jsx)(r(299304).Y, {}) : (0, i.jsx)(b, {
                            userOrBotStore: l,
                            size: 20
                        }), (0, i.jsx)("span", {
                            style: y.text,
                            children: d
                        })]
                    });
                return n || (null == l ? void 0 : l.table) !== r(832375).oo9 ? c : (0, i.jsx)(r(691631).AvatarHoverCard, {
                    trigger: c,
                    userStore: l,
                    spaceStore: s,
                    placement: "bottom",
                    header: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Last edited by",
                        id: "pageTile.lastEdit.header"
                    })
                })
            }
            let v = (0, r(109939).YK)({
                title: {
                    id: "PersonProfile.theirPages.title",
                    defaultMessage: "{userName}’s pages"
                },
                emptyState: {
                    id: "PersonProfile.theirPages.emptyState",
                    defaultMessage: "Pages created by {userNameOrEmail} will appear here"
                },
                titleFallback: {
                    id: "PersonProfile.theirPages.titleFallback",
                    defaultMessage: "Their pages"
                },
                noSearchResults: {
                    id: "PersonProfile.theirPages.noSearchResults",
                    defaultMessage: "No pages found"
                },
                offlineState: {
                    id: "PersonProfile.theirPages.offlineState",
                    defaultMessage: "Go online to see pages created by {userNameOrEmail}"
                },
                searchLabel: {
                    id: "PersonProfile.theirPages.searchButton.tooltip",
                    defaultMessage: "Search"
                },
                searchInputPlaceholder: {
                    id: "PersonProfile.theirPages.searchInputPlaceholder",
                    defaultMessage: "Type to search…"
                },
                seeMore: {
                    id: "PersonProfile.theirPages.seeMore",
                    defaultMessage: "See more"
                }
            });

            function A(e) {
                let t, {
                        userStore: s,
                        spaceStore: a,
                        overridePeekMode: l,
                        variant: d
                    } = e,
                    u = (0, r(533992).v3)(),
                    [h, f] = (0, o.useState)(""),
                    [g, p] = (0, o.useState)(!1),
                    m = (0, r(682985).K8)(() => null == s ? void 0 : s.getName(), [s]),
                    x = (0, r(682985).K8)(() => (null == s ? void 0 : s.getEmail()) ? ? "", [s]),
                    b = m || x,
                    y = (0, r(668745).lW)(h, 300, (e, t) => e === t),
                    j = function({
                        userStore: e,
                        spaceStore: t,
                        searchQuery: i = ""
                    }) {
                        let s = (0, r(533992).v3)(),
                            [n, a] = (0, o.useState)(1);
                        (0, o.useEffect)(() => {
                            a(1)
                        }, [i]);
                        let [l, d] = (0, r(682985).K8)(() => null != e && e.isDefined() && null != t && t.isDefined() ? [e, t] : [], [e, t]), [c] = (0, r(97668).Yb)(async () => {
                            if (!l || !d) return {
                                state: "loading",
                                pageStores: []
                            };
                            let e = Math.min(12 * n, r(600614).dP),
                                t = await s.api.callCellCompatibleApi({
                                    eventName: "search",
                                    environment: s,
                                    cellNavigation: {
                                        spaceId: d.id
                                    },
                                    data: {
                                        type: r(821603).Vz.BlocksInSpace,
                                        query: i,
                                        spaceId: d.id,
                                        filters: (0, r(821603).N2)({
                                            createdBy: [l.id]
                                        }),
                                        sort: {
                                            field: "lastEdited",
                                            direction: "desc"
                                        },
                                        limit: e,
                                        source: "people_profile_their_pages"
                                    }
                                });
                            return "failed" === t.type ? t.offline ? {
                                state: "offline",
                                pageStores: [],
                                total: 0
                            } : {
                                state: "failed",
                                pageStores: [],
                                total: 0,
                                error: t.error
                            } : {
                                state: "succeeded",
                                pageStores: t.data.results.map(e => r(970831).B.createChildStore(l, {
                                    id: e.id,
                                    table: r(832375).evP,
                                    spaceId: d.id
                                })),
                                total: t.data.total
                            }
                        }, [s, l, d, i, n], {
                            throttle: r(695216).TD,
                            debugName: "useFetchUserPages"
                        }), u = (0, o.useCallback)(() => {
                            a(e => e + 1)
                        }, []), h = "pending" === c.status || "idle" === c.status, f = c.value, g = h && n > 1;
                        if (h && !f) return {
                            state: "loading",
                            pageStores: [],
                            hasMore: !1,
                            isLoadingMore: !1,
                            loadMore: u,
                            isLoadingAdditionalPages: !1
                        };
                        if ("rejected" === c.status) return {
                            state: "failed",
                            pageStores: [],
                            error: c.error,
                            hasMore: !1,
                            isLoadingMore: !1,
                            loadMore: u,
                            isLoadingAdditionalPages: !1
                        };
                        if (h && 1 === n && f || !f) return {
                            state: "loading",
                            pageStores: [],
                            hasMore: !1,
                            isLoadingMore: !1,
                            loadMore: u,
                            isLoadingAdditionalPages: !1
                        };
                        let p = void 0 !== f.total && f.pageStores.length < f.total,
                            m = 12 * n < r(600614).dP;
                        return {
                            state: f.state,
                            pageStores: f.pageStores,
                            error: f.error,
                            hasMore: p && m,
                            isLoadingMore: h,
                            loadMore: u,
                            isLoadingAdditionalPages: g
                        }
                    }({
                        userStore: s,
                        spaceStore: a,
                        searchQuery: y
                    });
                (0, o.useEffect)(() => {
                    "succeeded" === j.state && j.pageStores.length > 0 && !y && p(!0)
                }, [j, y]);
                let A = (0, o.useCallback)(e => {
                        (0, r(545586).navigateToBlock)({
                            environment: u,
                            store: e,
                            openInSidePeek: l === r(387722).A || void 0,
                            openInCenterPeek: l === r(387722).O || void 0,
                            pageVisitSource: r(254656).y8.PersonProfileTheirPages
                        })
                    }, [u, l]),
                    S = j.pageStores.length > 0;
                return t = "loading" !== j.state || S ? S ? "carousel" === d ? (0, i.jsx)(w, {
                    children: j.pageStores.map(e => (0, i.jsx)(n, {
                        store: e,
                        onClick: () => A(e)
                    }, e.id))
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(C, {
                        children: [j.pageStores.map(e => (0, i.jsx)(c, {
                            store: e,
                            onClick: () => A(e)
                        }, e.id)), j.isLoadingAdditionalPages ? Array.from({
                            length: 12
                        }, (e, t) => (0, i.jsx)(c, {
                            store: void 0,
                            onClick: r(763230).lQ
                        }, `shimmer-${t}`)) : void 0]
                    }), j.hasMore || j.isLoadingMore ? (0, i.jsx)(B, {
                        isLoading: j.isLoadingMore,
                        onClick: j.loadMore
                    }) : void 0]
                }) : "offline" === j.state ? (0, i.jsx)(L, {
                    userNameOrEmail: b
                }) : "failed" === j.state ? (0, i.jsx)(r(789682).LargeSurfaceRenderError, {
                    error: j.error
                }) : y && g ? (0, i.jsx)(E, {}) : (0, i.jsx)(k, {
                    userNameOrEmail: b
                }) : "carousel" === d ? (0, i.jsx)(w, {
                    children: Array.from({
                        length: 3
                    }, (e, t) => (0, i.jsx)(n, {
                        store: void 0,
                        onClick: r(763230).lQ
                    }, t))
                }) : (0, i.jsx)(C, {
                    children: Array.from({
                        length: 12
                    }, (e, t) => (0, i.jsx)(c, {
                        store: void 0,
                        onClick: r(763230).lQ
                    }, t))
                }), (0, i.jsx)(r(337336).K, {
                    from: "TheirPagesModule",
                    fallback: e => (0, i.jsx)(r(640310).d, { ...e
                    }),
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 12,
                            children: [(0, i.jsx)(r(982379).j, {
                                withPadding: !1,
                                children: m ? (0, i.jsx)(r(109939).sA, { ...v.title,
                                    values: {
                                        userName: m
                                    }
                                }) : (0, i.jsx)(r(109939).sA, { ...v.titleFallback
                                })
                            }), (0, i.jsx)(M, {
                                value: h,
                                onChange: f
                            })]
                        }), t]
                    })
                })
            }
            let S = {
                searchButton: {
                    width: 25,
                    height: 25,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                input: {
                    fontSize: 14,
                    lineHeight: 1,
                    paddingInlineEnd: 4,
                    color: r(632079).Tj.text.primary
                },
                style0: {
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden"
                }
            };

            function M(e) {
                let {
                    value: t,
                    onChange: s
                } = e, n = (0, r(109939).tz)(), [a, l] = (0, o.useState)(!1), d = (0, o.useRef)(null), c = (0, o.useCallback)(() => {
                    l(e => !e)
                }, []), u = (0, o.useCallback)(() => {
                    s(""), l(!1)
                }, [s]), h = (0, o.useCallback)(e => {
                    s(e.target.value)
                }, [s]), f = (0, o.useCallback)(e => {
                    "Escape" === e.key && u()
                }, [u]), g = (0, o.useCallback)(e => {
                    var r;
                    e.relatedTarget instanceof Node && (null == (r = d.current) ? void 0 : r.contains(e.relatedTarget)) || t || l(!1)
                }, [t]);
                return (0, i.jsxs)(r(4458).fI, {
                    alignItems: "center",
                    ref: d,
                    children: [(0, i.jsx)(r(374533).A, {
                        icon: r(921048).magnifyingGlassSmallIcon,
                        onClick: c,
                        ariaLabel: n.formatMessage(v.searchLabel),
                        style: S.searchButton
                    }), (0, i.jsx)(r(654979).A, {
                        visible: a,
                        animate: {
                            width: 150,
                            opacity: 1
                        },
                        initial: {
                            width: 0,
                            opacity: 0
                        },
                        exit: {
                            width: 0,
                            opacity: 0
                        },
                        children: (0, i.jsx)(r(790124).A, {
                            capture: a,
                            allowEsc: !0,
                            children: e => (0, i.jsx)("div", {
                                style: S.style0,
                                ...e,
                                children: (0, i.jsx)(r(36481).p, {
                                    style: S.input,
                                    format: "transparent",
                                    value: t,
                                    onChange: h,
                                    placeholder: n.formatMessage(v.searchInputPlaceholder),
                                    focusInitial: a,
                                    showClearButton: !0,
                                    onBlur: g,
                                    onCancel: u,
                                    onClick: r(933143).k,
                                    onClearButtonClick: u,
                                    onKeyDown: f
                                })
                            })
                        })
                    })]
                })
            }

            function C(e) {
                let t = (0, o.useRef)(null),
                    s = (0, r(729787).wY)(t),
                    n = s ? s.width >= 712 ? 4 : s.width >= 530 ? 3 : s.width >= 348 ? 2 : 1 : 4,
                    a = (0, r(960253).I)(() => ({
                        grid: {
                            display: "grid",
                            gridTemplateColumns: `repeat(${n}, 1fr)`,
                            gridTemplateRows: "repeat(auto-fill, 168px)",
                            columnGap: 16,
                            rowGap: 20
                        }
                    }), [n]);
                return (0, i.jsx)("div", {
                    ref: t,
                    style: a.grid,
                    children: e.children
                })
            }
            let P = {
                carousel: {
                    marginTop: 12,
                    overflowX: "auto",
                    overflowY: "hidden",
                    WebkitOverflowScrolling: "touch",
                    marginInlineStart: -r(760727).ik,
                    marginInlineEnd: -r(760727).ik
                },
                carouselInner: {
                    display: "flex",
                    gap: 12,
                    paddingBlock: 4,
                    paddingInlineStart: r(760727).ik,
                    paddingInlineEnd: r(760727).ik
                }
            };

            function w(e) {
                return (0, i.jsx)("div", {
                    style: P.carousel,
                    children: (0, i.jsx)("div", {
                        style: P.carouselInner,
                        children: e.children
                    })
                })
            }
            let T = {
                container: {
                    width: "100%",
                    height: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    border: `1px solid ${r(632079).Tj.border.secondary}`,
                    borderRadius: 16
                },
                label: {
                    fontSize: 14,
                    width: "100%",
                    paddingInline: 16,
                    textAlign: "center"
                }
            };

            function I(e) {
                return (0, i.jsxs)("div", {
                    style: T.container,
                    children: [(0, i.jsx)(r(16275).I, {
                        icon: r(490648).d,
                        colorVariant: "tertiary",
                        size: "xl"
                    }), (0, i.jsx)(r(324489).V, {
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        style: T.label,
                        children: e.children
                    })]
                })
            }

            function k(e) {
                let {
                    userNameOrEmail: t
                } = e;
                return (0, i.jsx)(I, {
                    children: (0, i.jsx)(r(109939).sA, { ...v.emptyState,
                        values: {
                            userNameOrEmail: t
                        }
                    })
                })
            }

            function E() {
                return (0, i.jsx)(I, {
                    children: (0, i.jsx)(r(109939).sA, { ...v.noSearchResults
                    })
                })
            }

            function L(e) {
                let {
                    userNameOrEmail: t
                } = e;
                return (0, i.jsx)(I, {
                    children: (0, i.jsx)(r(109939).sA, { ...v.offlineState,
                        values: {
                            userNameOrEmail: t
                        }
                    })
                })
            }

            function B(e) {
                let {
                    isLoading: t,
                    onClick: o
                } = e, s = (0, r(109939).tz)();
                return (0, i.jsx)(r(4458).fI, {
                    marginTop: 12,
                    alignItems: "center",
                    children: (0, i.jsx)(r(988022).p, {
                        size: "md",
                        iconLeading: r(397900).ellipsisIcon,
                        onClick: o,
                        colorVariant: "secondary",
                        disabled: t,
                        children: s.formatMessage(v.seeMore)
                    })
                })
            }
        },
        600614: (e, t, r) => {
            r.d(t, {
                ZW: () => o,
                dP: () => i
            });
            let o = 100,
                i = 9500
        },
        731488: (e, t, r) => {
            r.d(t, {
                r: () => d
            }), r(581454);
            var o = r(296540),
                i = r(474848);
            let s = r(924448).rX + 1,
                n = (0, r(109939).YK)({
                    topCollaboratorsModuleShowMore: {
                        id: "PersonProfile.collaboratorsModule.showMore",
                        defaultMessage: "{numHidden} more collaborators"
                    },
                    topCollaboratorsModuleShowLess: {
                        id: "PersonProfile.collaboratorsModule.showLess",
                        defaultMessage: "Hide {numHidden} collaborators"
                    },
                    topCollaboratorsModuleMobileShowMore: {
                        id: "PersonProfile.collaboratorsModule.mobileShowMore",
                        defaultMessage: "{numHidden} more"
                    },
                    topCollaboratorsModuleMobileShowLess: {
                        id: "PersonProfile.collaboratorsModule.mobileShowLess",
                        defaultMessage: "Show less"
                    }
                });

            function a(e) {
                let {
                    userStore: t,
                    spaceStore: o
                } = e, s = (0, r(533992).v3)(), n = (0, r(682985).K8)(() => t.isReady(), [t]), a = (0, r(682985).K8)(() => t.getName() || t.getEmail(), [t]), l = (0, r(682985).K8)(() => {
                    if (!o) return;
                    let e = s.idCreator.getSpaceIdCreatorSync(o.id);
                    return (0, r(805697).o4)({
                        userId: t.id,
                        spaceIdCreator: e,
                        pageVisitSource: r(254656).y8.PersonProfileTopCollaborators
                    })
                }, [t, s, o]);
                if (!n) return (0, i.jsx)(r(531978).E, {
                    isIconCircular: !0
                });
                let d = (0, i.jsxs)("div", {
                    style: r(760727).ZI.avatarAndName,
                    children: [(0, i.jsx)(r(321753).A, {
                        hasPersonHoverCard: !1,
                        userStore: t,
                        size: 20
                    }), (0, i.jsx)("div", {
                        style: r(760727).ZI.rowLabel,
                        children: a
                    })]
                });
                return (0, i.jsx)(r(64960).Ay, {
                    style: r(760727).ZI.rowContainer,
                    hoveredStyle: r(760727).ZI.hoveredStyle,
                    href: l,
                    children: (0, i.jsx)(r(532755).D, {
                        userStore: t,
                        spaceStore: o,
                        from: "profile_page",
                        width: "100%",
                        children: d
                    })
                })
            }

            function l() {
                return (0, i.jsx)("div", {
                    style: r(760727).ZI.listModule,
                    children: [0, 1, 2].map(e => (0, i.jsx)(r(531978).E, {
                        isIconCircular: !0
                    }, e))
                })
            }

            function d(e) {
                let {
                    userId: t,
                    spaceStore: d
                } = e, {
                    value: c,
                    isLoading: u
                } = function({
                    userId: e
                }) {
                    let t = (0, r(533992).v3)(),
                        o = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                        [{
                            status: i,
                            error: s,
                            value: n
                        }] = (0, r(97668).Yb)(async () => {
                            if (!o || (0, r(916804).I)(o)) return [];
                            let i = await t.api.callApi({
                                eventName: "getSimilarUsers",
                                environment: t,
                                data: {
                                    userId: e,
                                    spaceId: o.id
                                }
                            });
                            if ("failed" === i.type) throw i.error;
                            if (i) return Object.entries(i.data.userSimilarity ? ? []).map(([e, t]) => ({
                                userStore: r(807825).L.createChildStore(o, {
                                    table: r(832375).oo9,
                                    id: e
                                }),
                                id: e
                            }))
                        }, [t, e, o]);
                    return void 0 === o ? {
                        isLoading: !0,
                        error: void 0,
                        value: []
                    } : {
                        isLoading: "pending" === i || "idle" === i,
                        error: s,
                        value: n
                    }
                }({
                    userId: t
                }), h = c && c.length > s, [f, g] = (0, o.useState)(!0), p = (0, o.useCallback)(() => {
                    g(!f)
                }, [f]);
                return (0, i.jsx)(r(337336).K, {
                    from: "TopCollaboratorsModule",
                    fallback: e => (0, i.jsx)(r(640310).d, { ...e
                    }),
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(r(982379).j, {
                            children: (0, i.jsx)(r(109939).sA, {
                                id: "PersonProfile.topCollaborators.title",
                                defaultMessage: "Top collaborators"
                            })
                        }), u ? (0, i.jsx)(l, {}) : c && 0 !== c.length ? (0, i.jsxs)("div", {
                            style: r(760727).ZI.listModule,
                            children: [c.map((e, t) => f && h && t >= r(924448).rX ? null : (0, i.jsx)(a, {
                                userStore: e.userStore,
                                spaceStore: d
                            }, e.id)), h ? (0, i.jsx)(r(102569).h, {
                                icon: f ? (0, i.jsx)(r(16275).I, {
                                    icon: r(87963).arrowChevronSingleDownIcon,
                                    colorVariant: "secondary"
                                }) : (0, i.jsx)(r(16275).I, {
                                    icon: r(386946).h,
                                    colorVariant: "secondary"
                                }),
                                totalCount: c.length,
                                message: f ? r(986939).A.isMobile ? n.topCollaboratorsModuleMobileShowMore : n.topCollaboratorsModuleShowMore : r(986939).A.isMobile ? n.topCollaboratorsModuleMobileShowLess : n.topCollaboratorsModuleShowLess,
                                maxRowsShownWhenTruncated: r(924448).rX,
                                onToggleTruncation: p
                            }) : void 0]
                        }) : (0, i.jsx)("div", {
                            style: r(760727).ZI.listModule,
                            children: (0, i.jsx)(r(324489).V, {
                                isSecondaryColor: !0,
                                isMultiline: !0,
                                children: (0, i.jsx)(r(109939).sA, {
                                    id: "TopCollaboratorsModule.emptyState.message",
                                    defaultMessage: "No collaborators yet!"
                                })
                            })
                        })]
                    })
                })
            }
        },
        746519: (e, t, r) => {
            r.d(t, {
                j: () => u
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var o = r(296540),
                i = r(474848);
            let s = r(924448).rX + 1,
                n = (0, r(109939).YK)({
                    teamspacesModuleShowMore: {
                        id: "PersonProfile.teamspacesModule.showMore",
                        defaultMessage: "{numHidden} more teamspaces"
                    },
                    teamspacesModuleShowLess: {
                        id: "PersonProfile.teamspacesModule.showLess",
                        defaultMessage: "Hide {numHidden} teamspaces"
                    },
                    teamspacesModuleMobileShowMore: {
                        id: "PersonProfile.teamspacesModule.mobileShowMore",
                        defaultMessage: "{numHidden} more"
                    },
                    teamspacesModuleMobileShowLess: {
                        id: "PersonProfile.teamspacesModule.mobileShowLess",
                        defaultMessage: "Show less"
                    }
                });
            async function a(e, t, o) {
                if (!o) return;
                let i = await e.api.callApi({
                    eventName: "getSpacePermissionGroupIdsContainingMembers",
                    environment: e,
                    data: {
                        spaceId: o,
                        userIds: [t]
                    }
                });
                if ("success" === i.type) {
                    var s;
                    return new Set((null == (s = i.data) || null == (s = s.userToGroupMap) || null == (s = s[t]) ? void 0 : s.map(e => e.toString())) || [])
                }
                throw r(773352).log({
                    level: "error",
                    from: "personProfile.teamspacesModule",
                    type: "getSpacePermissionGroupIdsContainingMembersError",
                    error: {
                        message: (0, r(201790).V4)(i) || "Error fetching user permission group ids"
                    }
                }), i.error
            }

            function l() {
                return (0, i.jsx)("div", {
                    style: r(760727).ZI.listModule,
                    children: [0, 1, 2].map(e => (0, i.jsx)(r(531978).E, {
                        isIconCircular: !1
                    }, e))
                })
            }

            function d() {
                return (0, i.jsx)("div", {
                    style: r(760727).ZI.listModule,
                    children: (0, i.jsx)(r(324489).V, {
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        children: (0, i.jsx)(r(109939).sA, {
                            id: "PersonProfile.teamspaces.empty",
                            defaultMessage: "None"
                        })
                    })
                })
            }

            function c(e) {
                let {
                    teamStore: t
                } = e, o = (0, r(682985).K8)(() => t.isReady(), [t]), s = (0, r(682985).K8)(() => t.getName(), [t]);
                return o ? (0, i.jsx)(r(656252).A, {
                    popupType: r(986939).A.isMobile ? r(656252).z.BottomSheet : r(656252).z.Popup,
                    content: e => (0, i.jsx)(r(219210).dX, {
                        teamStore: t,
                        parent: e
                    }),
                    children: e => (0, i.jsxs)(r(64960).Ay, {
                        style: r(760727).ZI.rowContainer,
                        hoveredStyle: r(760727).ZI.hoveredStyle,
                        ...e,
                        children: [(0, i.jsx)(r(729746).x, {
                            store: t,
                            disabled: !0,
                            size: 20
                        }), (0, i.jsx)("div", {
                            style: r(760727).ZI.rowLabel,
                            children: s
                        })]
                    })
                }) : (0, i.jsx)(r(531978).E, {
                    isIconCircular: !1
                })
            }

            function u(e) {
                let {
                    userId: t
                } = e, {
                    teams: u,
                    isLoading: h
                } = function({
                    environment: e,
                    spaceStore: t,
                    userId: o
                }) {
                    let {
                        value: {
                            userPermissionGroupIds: i
                        },
                        isLoading: s
                    } = function(e, t, o) {
                        let [{
                            value: i,
                            status: s,
                            error: n
                        }] = (0, r(97668).Yb)(async () => a(e, t, o), [e, t, o], {
                            debugName: "personProfile.userToPermissionGroupIds"
                        });
                        return {
                            value: {
                                userPermissionGroupIds: i
                            },
                            isLoading: "resolved" !== s && "rejected" !== s,
                            error: n
                        }
                    }(e, o, null == t ? void 0 : t.id), {
                        teams: n,
                        isLoading: l
                    } = (0, r(367299).Z)({
                        environment: e,
                        spaceStore: t,
                        userId: o,
                        userPermissionGroupIds: i
                    });
                    return {
                        teams: n,
                        isLoading: l || s
                    }
                }({
                    environment: (0, r(533992).v3)(),
                    spaceStore: (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    userId: t
                }), f = u.length > s, [g, p] = (0, o.useState)(!0), m = (0, o.useCallback)(() => {
                    p(!g)
                }, [g]);
                return (0, i.jsx)(r(337336).K, {
                    from: "TeamspacesModule",
                    fallback: e => (0, i.jsx)(r(640310).d, { ...e
                    }),
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(r(982379).j, {
                            children: (0, i.jsx)(r(109939).sA, {
                                id: "PersonProfile.teamspaces.title",
                                defaultMessage: "Teamspaces"
                            })
                        }), h ? (0, i.jsx)(l, {}) : 0 === u.length ? (0, i.jsx)(d, {}) : (0, i.jsxs)("div", {
                            style: r(760727).ZI.listModule,
                            children: [u.map((e, t) => g && f && t >= r(924448).rX ? null : (0, i.jsx)(c, {
                                teamStore: e
                            }, e.id)), f ? (0, i.jsx)(r(102569).h, {
                                icon: g ? (0, i.jsx)(r(16275).I, {
                                    icon: r(87963).arrowChevronSingleDownIcon,
                                    colorVariant: "secondary"
                                }) : (0, i.jsx)(r(16275).I, {
                                    icon: r(386946).h,
                                    colorVariant: "secondary"
                                }),
                                totalCount: u.length,
                                message: g ? r(986939).A.isMobile ? n.teamspacesModuleMobileShowMore : n.teamspacesModuleShowMore : r(986939).A.isMobile ? n.teamspacesModuleMobileShowLess : n.teamspacesModuleShowLess,
                                maxRowsShownWhenTruncated: r(924448).rX,
                                onToggleTruncation: m
                            }) : void 0]
                        })]
                    })
                })
            }
        },
        847871: (e, t, r) => {
            r.d(t, {
                b: () => i
            }), r(898992), r(354520), r(672577), r(581454), r(296540);
            var o = r(474848);

            function i(e) {
                let {
                    intl: t,
                    authors: i,
                    currentUserId: s,
                    isCondensedFormat: n = !1,
                    fontWeightForAuthorNames: a = "semibold",
                    precomputedActorNames: l
                } = e, d = i.find(e => e.id === s), c = {
                    fontWeight: a ? r(699422).Wy[a] : r(699422).Wy.semibold
                }, u = l ? ? i.filter(e => e !== d).map(e => (0, r(197018).lR)(t, e));
                if (s && d) {
                    if (0 === u.length) return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.forOneAuthorCurrentUser
                        })
                    });
                    else if (1 === u.length) return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.forTwoAuthorsCurrentUser,
                            values: {
                                firstAuthor: u[0],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                    else if (2 === u.length) return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.forThreeAuthorsCurrentUser,
                            values: {
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                    else if (u.length > 2) {
                        let e = (0, o.jsx)(r(109939).sA, { ...r(561007).U.forMoreThanThreeAuthorsCurrentUser,
                            values: {
                                numberOfOtherAuthors: u.length - 1,
                                firstAuthor: u[0],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        });
                        return (0, o.jsx)("span", {
                            children: e
                        })
                    }
                } else if (1 === u.length) return (0, o.jsx)("span", {
                    children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.forOneAuthor,
                        values: {
                            author: u[0],
                            b: e => (0, o.jsx)("span", {
                                style: c,
                                children: e
                            })
                        }
                    })
                });
                else if (2 === u.length)
                    if (n) return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.forTwoAuthorsCondensed,
                            values: {
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                    else return (0, o.jsx)("span", {
                        children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.forTwoAuthors,
                            values: {
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        })
                    });
                else if (u.length > 2)
                    if (n) {
                        let e = (0, o.jsx)(r(109939).sA, { ...r(561007).U.forMoreThanTwoAuthorsCondensed,
                            values: {
                                numberOfOtherAuthors: u.length - 1,
                                firstAuthor: u[0],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        });
                        return (0, o.jsx)("span", {
                            children: e
                        })
                    } else {
                        let e = (0, o.jsx)(r(109939).sA, { ...r(561007).U.forMoreThanTwoAuthors,
                            values: {
                                numberOfOtherAuthors: u.length - 2,
                                firstAuthor: u[0],
                                secondAuthor: u[1],
                                b: e => (0, o.jsx)("span", {
                                    style: c,
                                    children: e
                                })
                            }
                        });
                        return (0, o.jsx)("span", {
                            children: e
                        })
                    }
                return (0, o.jsx)("span", {
                    children: (0, o.jsx)(r(109939).sA, { ...r(561007).U.someone
                    })
                })
            }
        },
        921048: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => o,
                magnifyingGlassSmallIcon: () => i
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                i = (0, r(104509).wt)("magnifyingGlassSmall", o, "small")
        },
        982379: (e, t, r) => {
            r.d(t, {
                j: () => s
            }), r(296540);
            var o = r(474848);
            let i = {
                title: {
                    fontSize: 14,
                    lineHeight: "20px",
                    fontWeight: r(699422).Wy.regular,
                    color: r(632079).Tj.text.secondary,
                    paddingBottom: 8
                },
                titleNoPadding: {
                    fontSize: 14,
                    lineHeight: "20px",
                    fontWeight: r(699422).Wy.regular,
                    color: r(632079).Tj.text.secondary
                }
            };

            function s(e) {
                let {
                    withPadding: t = !0
                } = e;
                return (0, o.jsx)("div", {
                    style: t ? i.title : i.titleNoPadding,
                    children: e.children
                })
            }
        }
    }
]);