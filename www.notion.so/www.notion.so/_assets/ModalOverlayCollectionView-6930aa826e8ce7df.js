"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [32413], {
        13717: (e, t, o) => {
            function r(e) {
                let {
                    spaceStore: t,
                    groupId: r
                } = e;
                return o(398652).C.createChildStore(t, (0, o(659341).S4)({
                    spacePermissionGroupId: r,
                    spaceId: t.id
                }))
            }

            function i(e) {
                let {
                    spaceStore: t,
                    groupId: r,
                    userId: i
                } = e;
                return o(291886).m.createChildStore(t, (0, o(867863).BZ)({
                    spacePermissionGroupId: r,
                    spaceId: t.id,
                    userId: i
                }))
            }
            o.d(t, {
                A: () => i,
                E: () => r
            })
        },
        44419: (e, t, o) => {
            o.d(t, {
                E: () => i
            }), o(296540);
            var r = o(474848);

            function i(e) {
                var t;
                let {
                    collectionStore: i,
                    pageVisitSource: n,
                    size: l
                } = e, a = (0, o(533992).v3)(), c = (0, o(109939).tz)(), s = (0, o(682985).K8)(() => {
                    var e;
                    return null == i || null == (e = i.getParentBlockStore()) ? void 0 : e.getNavigableBlockStore()
                }, [i]), d = (0, o(682985).K8)(() => null == i ? void 0 : i.getIcon(), [i]), u = (t = l, (0, o(960253).I)(() => ({
                    button: {
                        display: "inline-flex",
                        alignItems: "center",
                        color: o(632079).Tj.text.primary,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4,
                        marginInlineEnd: 2,
                        height: 24,
                        flex: "1 1 auto",
                        gap: 4,
                        fontSize: t
                    }
                }), [t]));
                return (0, r.jsxs)(o(988022).p, {
                    style: u.button,
                    onClick: e => {
                        s && ((0, o(545586).navigateToBlock)({
                            environment: a,
                            store: s,
                            pageVisitSource: n
                        }), o(738923).Q.close(), e.stopPropagation(), e.preventDefault())
                    },
                    children: [(0, r.jsx)(o(569553).B6, {
                        disabled: !0,
                        icon: d,
                        iconRecordCategory: "collection",
                        isEmptyPage: !1,
                        size: l,
                        useInvertedColors: !1
                    }), i ? (0, r.jsx)(o(627918).A, {
                        store: i
                    }) : (0, o(543464).L)(c)]
                })
            }
        },
        369409: (e, t, o) => {
            o.d(t, {
                S: () => s,
                f: () => d
            }), o(944114);
            var r = o(296540),
                i = () => o(773352);
            o(16280);
            var n = () => o(517013),
                l = () => o(305050),
                a = () => o(593016),
                c = () => o(421439);

            function s(e, {
                canUndo: t,
                shouldPersistOperation: d
            }) {
                let u = (0, o(533992).v3)(),
                    p = (0, r.useRef)([]).current,
                    h = (0, r.useCallback)(e => {
                        p.push(...e)
                    }, [p]),
                    f = (0, r.useCallback)(e => {
                        (!d || d(e)) && h([e])
                    }, [h, d]),
                    m = (0, o(133796).l)(e, {
                        cacheFallback: u.defaultRecordCache.inMemoryRecordCache,
                        isTemporaryData: !0,
                        onOperationCallback: f
                    });
                (0, r.useEffect)(() => {
                    o(506507).A.initializeCache(e, m)
                }, [e, m]);
                let g = (0, r.useCallback)(() => {
                    o(912846).default.reset(), o(506507).A.clearCache(e), p.splice(0, p.length)
                }, [e, p]);
                (0, r.useEffect)(() => (o(912846).default.reset(), () => {
                    o(912846).default.reset(), o(506507).A.expire(e)
                }), [e]);
                let w = (0, o(682985).K8)(() => o(912846).default.state.undoStack.length > 0, []);
                (0, r.useEffect)(() => {
                    o(506507).A.updateUnsavedCacheState(e, w)
                }, [e, w]);
                let v = (0, r.useCallback)(async r => {
                    var s;
                    if (0 === p.length) return;
                    m.assertUnexpired(),
                        function(e) {
                            for (let t of o(912846).default.state.undoStack)
                                for (let o of t.transactions)
                                    for (let t of o.stores)
                                        if (t.inMemoryRecordCache !== e && !t.inMemoryRecordCache.isMockTextStore && !t.inMemoryRecordCache.isTemporaryData) {
                                            let r = o.getUserActionForAnalyticsPurposesOnly(),
                                                n = t.inMemoryRecordCache.name,
                                                l = e.name,
                                                a = `Undoable user action "${r}" was applied to cache "${n}", but only operations in the cache "${l}" should be in the undo stack!`;
                                            (0, i().log)({
                                                from: "useLocalDraft",
                                                type: "invalidStoreInRevisionStack",
                                                level: "error",
                                                data: {
                                                    message: a,
                                                    miscDataToConvertToString: {
                                                        userAction: r,
                                                        inMemoryRecordCacheName: n,
                                                        expectedInMemoryRecordCacheName: l
                                                    }
                                                }
                                            })
                                        }
                        }(m);
                    let d = null == (s = p[0]) ? void 0 : s.operation.pointer.spaceId,
                        {
                            serverCommitResult: h
                        } = (0, o(377796).createAndCommit)({
                            environment: u,
                            userAction: r,
                            cellTarget: d ? {
                                spaceWithId: d
                            } : void 0,
                            perform(e) {
                                ! function({
                                    environment: e,
                                    transaction: t,
                                    operationsWithStores: o
                                }) {
                                    for (let {
                                            operation: r,
                                            store: i
                                        } of o) {
                                        if (!(i instanceof n().pm)) continue;
                                        let o = i.clone(e.defaultRecordCache.inMemoryRecordCache);
                                        (0, l().ph)(r) ? (0, a().k)({
                                            store: i,
                                            operation: r,
                                            transaction: t,
                                            invertedOperation: void 0
                                        }) : (0, c().y4)({
                                            transaction: t,
                                            store: o,
                                            operation: r
                                        })
                                    }
                                }({
                                    environment: u,
                                    transaction: e,
                                    operationsWithStores: p
                                }), e.postSubmitCallbacks.push(e => {
                                    e || (m.expire(), o(912846).default.reset(), p.splice(0, p.length))
                                })
                            },
                            canUndo: t
                        });
                    try {
                        await h
                    } catch (l) {
                        let t, n = [];
                        for (let e of p) e.transactionId !== t && (t = e.transactionId, n.push(e.userAction ? ? "unknownUserAction"));
                        throw (0, i().log)({
                            level: "error",
                            from: "useLocalDraft",
                            type: "draftPersistFailed",
                            error: (0, o(416607).convertErrorToLog)(l),
                            data: {
                                miscDataToConvertToString: {
                                    cacheName: e,
                                    persistUserAction: r,
                                    transactionUserActions: n
                                }
                            }
                        }), l
                    }
                }, [e, t, u, p, m]);
                return (0, r.useMemo)(() => ({
                    cache: m,
                    hasChanges: w,
                    persist: v,
                    reset: g
                }), [w, v, g, m])
            }

            function d(e, t) {
                return (0, r.useMemo)(() => t.clone(e.cache), [t, e.cache])
            }
        },
        405461: (e, t, o) => {
            function r(e) {
                let {
                    intl: t,
                    groupName: r
                } = e;
                return r || t.formatMessage(o(95384).D.untitledGroupName)
            }

            function i(e) {
                var t;
                return (null == (t = o(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function n(e) {
                let {
                    userIds: t,
                    limit: r,
                    spaceStore: i
                } = e;
                if (!i) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let n = r ? t.slice(0, r) : t;
                return {
                    limitedUserStores: o(381453).oE(n.map(e => o(807825).L.createChildStore(i, {
                        table: o(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - n.length
                }
            }

            function l({
                userStores: e,
                spaceStore: t,
                intl: r
            }) {
                return o(381453).Ul(e, e => e.getSearchName(r)).sort((e, r) => {
                    if (!t) return 0;
                    let i = (0, o(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        n = (0, o(993077).dp)(t, r.id).getMembershipTypeAsRoleOrNone();
                    return i && n ? o(642157).hV.indexOf(n) - o(642157).hV.indexOf(i) : 0
                })
            }

            function a(e) {
                var t;
                let {
                    spaceStore: r,
                    spaceUserStore: i
                } = e;
                if (!r) return !1;
                let n = (null == i ? void 0 : i.getMembershipType()) ? ? "none",
                    l = null == (t = r.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (n) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === l;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, o(722371).HB)(n)
                }
            }

            function c(e) {
                let {
                    groupId: t,
                    delta: r
                } = e, i = o(801062).h.getGroupData(t);
                i && o(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, i.memberCount + r)
                })
            }

            function s(e) {
                let {
                    members: t,
                    query: o
                } = e, r = o.trim().toLowerCase();
                return "" === r ? t : t.filter(e => e.name.toLowerCase().includes(r) || void 0 !== e.email && e.email.toLowerCase().includes(r))
            }

            function d(e) {
                let {
                    memberUserIds: t,
                    spaceStore: r,
                    groupId: i,
                    currentUserId: n
                } = e;
                return t.map(e => {
                    let t = o(807825).L.createChildStore(r, {
                            table: o(832375).oo9,
                            id: e
                        }),
                        l = (0, o(13717).A)({
                            spaceStore: r,
                            groupId: i,
                            userId: e
                        }),
                        a = o(229903).V.createChildStore(r, (0, o(729052).i1)({
                            userId: e,
                            spaceId: r.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === n,
                        isOwner: "owner" === l.getMembershipType(),
                        isWorkspaceOwner: r.canAdmin(),
                        isRestrictedMember: a.isRestrictedMember() ? ? !0
                    }
                })
            }

            function u(e) {
                let {
                    users: t,
                    existingMemberIds: o
                } = e, r = new Set(o);
                return t.filter(e => !r.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: r
                } = e;
                o(801062).h.updateGroup(t, {
                    group: r.getModel()
                })
            }
            o.d(t, {
                A9: () => u,
                Fz: () => d,
                Ny: () => a,
                Pf: () => r,
                cp: () => l,
                gA: () => n,
                mi: () => s,
                s: () => c,
                sd: () => p,
                xQ: () => i
            }), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(898992), o(354520), o(581454)
        },
        579998: (e, t, o) => {
            o.r(t), o.d(t, {
                ModalOverlayCollectionView: () => a
            }), o(16280);
            var r = o(296540),
                i = o(474848);
            let n = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: o(47080).PN + o(798402).nh + 40
                },
                l = ["search", "saveOrOpenOverflow", "closeCollectionViewInModal", "dashboardBuildMode"];

            function a() {
                let e = (0, o(682985).O$)(o(738923).Q);
                return e.isOpen ? "chart_drilldown" === e.type ? (0, i.jsx)(c, {
                    collectionViewBlockStore: e.collectionViewBlockStore,
                    collectionViewValue: e.collectionViewValue,
                    viewsModuleContext: e.viewsModuleContext,
                    title: e.title,
                    archiveStatus: e.archiveStatus
                }) : "ai_ephemeral_view" === e.type ? (0, i.jsx)(d, {
                    render: () => (0, i.jsx)(p, {
                        collectionViewBlockId: e.collectionViewBlockId,
                        collectionViewId: e.collectionViewId,
                        type: e.type
                    })
                }) : null : null
            }

            function c(e) {
                let {
                    collectionViewBlockStore: t,
                    collectionViewValue: n,
                    viewsModuleContext: l,
                    title: a,
                    archiveStatus: c
                } = e, [s, u] = (0, r.useState)(), h = (0, o(533992).v3)(), f = (0, o(369409).S)(o(526226).oW, {
                    canUndo: !1
                }), m = (0, o(369409).f)(f, t);
                return ((0, o(383953).w)(() => {
                    let e = m.getSpaceId();
                    u((0, o(377796).createAndCommit)({
                        environment: h,
                        cellTarget: {
                            spaceWithId: e
                        },
                        perform: e => ((0, o(173157).z)({
                            store: m.getFormatStore(),
                            data: {
                                block_locked: !0,
                                block_locked_by: h.currentUser.id
                            },
                            transaction: e
                        }), (0, o(723732).i)({
                            environment: h,
                            collectionViewBlockStore: m,
                            collectionView: n,
                            transaction: e,
                            disableAppendingToCollectionViewBlock: !0
                        }).id),
                        userAction: "CollectionChartView.onDrilldownClick",
                        canUndo: !1
                    }).performResult)
                }), s) ? (0, i.jsx)(d, {
                    render: () => (0, i.jsx)(p, {
                        collectionViewBlockId: t.id,
                        collectionViewId: s,
                        type: "chart_drilldown",
                        title: a,
                        viewsModuleContext: l,
                        archiveStatus: c
                    })
                }) : null
            }
            let s = {
                modalInnerStyle: {
                    background: o(632079).Tj.background.primary,
                    borderRadius: 12,
                    minHeight: 250,
                    maxHeight: 600,
                    width: 800
                },
                phoneModalInnerStyle: {
                    background: o(632079).Tj.background.primary,
                    borderStartStartRadius: 12,
                    borderStartEndRadius: 12,
                    borderEndEndRadius: 0,
                    borderEndStartRadius: 0,
                    height: "66.66vh",
                    width: "100%",
                    position: "absolute",
                    bottom: 0
                }
            };

            function d(e) {
                let {
                    render: t
                } = e, {
                    isPhone: n
                } = (0, o(533992).Y0)(), l = (0, o(109939).tz)(), a = (0, r.useCallback)(() => o(738923).Q.close(), []);
                return (0, i.jsx)(o(556809).a, {
                    className: o(828432).HA4,
                    open: !0,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: a,
                    innerStyle: n ? s.phoneModalInnerStyle : s.modalInnerStyle,
                    showCloseIcon: n,
                    ariaLabel: l.formatMessage({
                        defaultMessage: "Table data preview",
                        id: "ModalOverlayCollectionView.ariaLabel"
                    }),
                    children: (0, i.jsx)(o(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: t
                    })
                })
            }
            let u = {
                overflow: "hidden"
            };

            function p(e) {
                let {
                    collectionViewBlockId: t,
                    collectionViewId: a,
                    type: c,
                    title: s,
                    viewsModuleContext: d,
                    archiveStatus: p
                } = e, h = (0, o(533992).v3)(), {
                    isPhone: m
                } = (0, o(533992).Y0)(), w = (0, o(682985).K8)(() => (0, o(59406).w)(h), [h]), S = function(e) {
                    let {
                        collectionViewBlockId: t,
                        collectionViewId: r
                    } = e, i = (0, o(67499).S)(), n = (0, o(682985).K8)(() => {
                        if (null != i && i.spaceStore) return i.spaceStore;
                        let e = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                        if (null != e && e.getSpaceStore()) return e.getSpaceStore()
                    }, [i]), [{
                        value: l
                    }] = (0, o(97668).Yb)(async () => {
                        var e;
                        if (!n) return {
                            type: "loading"
                        };
                        let i = o(970831).B.createChildStore(n, {
                                table: "block",
                                id: t
                            }),
                            l = null == (e = o(506507).A.state.caches[o(526226).oW]) ? void 0 : e.inMemoryRecordCache;
                        if (l && (i = i.clone(l)), await i.load(), !i.isCollectionView()) throw Error("expected collection view");
                        let a = o(547131).p.createChildStore(i, {
                            table: o(832375).Gy1,
                            id: r
                        });
                        await a.load();
                        let c = a.getCollectionStore();
                        return await (null == c ? void 0 : c.load()), {
                            collectionViewBlockStore: i,
                            collectionViewStore: a,
                            collectionStore: c
                        }
                    }, [t, r, n]);
                    return l && "loading" !== l.type && l.collectionViewBlockStore ? {
                        type: "loaded",
                        value: {
                            collectionViewBlockStore: l.collectionViewBlockStore,
                            collectionViewStore: l.collectionViewStore,
                            collectionStore: l.collectionStore
                        }
                    } : {
                        type: "loading"
                    }
                }({
                    collectionViewBlockId: t,
                    collectionViewId: a
                });
                if (! function(e = 0) {
                        let [t, o] = (0, r.useState)(!1), i = (0, r.useRef)(Date.now());
                        return (0, r.useEffect)(() => {
                            let t, r = requestAnimationFrame(() => t = requestAnimationFrame(() => {
                                let t = Date.now() - i.current;
                                t > e ? o(!0) : setTimeout(() => {
                                    o(!0)
                                }, e - t)
                            }));
                            return () => {
                                cancelAnimationFrame(r), t && cancelAnimationFrame(t)
                            }
                        }, []), t
                    }(150)) return (0, i.jsx)("div", {
                    style: n,
                    children: (0, i.jsx)(o(517334).k, {})
                });
                switch (S.type) {
                    case "loading":
                        return (0, i.jsx)("div", {
                            style: n,
                            children: (0, i.jsx)(o(517334).k, {})
                        });
                    case "loaded":
                        {
                            let e, {
                                    collectionViewBlockStore: t,
                                    collectionViewStore: r,
                                    collectionStore: n
                                } = S.value,
                                y = m && n && !w;
                            "ai_ephemeral_view" !== c && s ? "chart_drilldown" === c && (e = (0, i.jsx)(f, {
                                title: s
                            })) : e = (0, i.jsx)(g, {
                                collectionStore: n
                            });
                            let C = (0, i.jsx)(o(590285).dN, {
                                headerText: e,
                                headerActionsBehavior: m ? "hidden" : "always_show",
                                headerAllowedActions: m ? [] : l,
                                hideViewTabBar: !0,
                                isUnlistedView: !0,
                                store: t,
                                isFullScreen: !1,
                                productUseCase: c,
                                disabled: !0,
                                viewId: a,
                                overridePaddingLeft: 0,
                                overridePaddingRight: 0,
                                additionalCollectionViewInnerHorizontalPadding: 16,
                                viewsModuleContext: d,
                                initialArchiveStatus: p,
                                maxHeight: m ? void 0 : 528,
                                setCollectionContextStore: e => {
                                    e.setContext({
                                        type: "collectionView",
                                        collectionViewBlockStore: t,
                                        collectionViewStore: r,
                                        collectionStore: n,
                                        pageVisitSourceOverride: void 0
                                    }), m ? e.filtersBarOpenStore.setState(!1) : e.filtersBarOpenStore.setState(!0)
                                }
                            });
                            if (m) return (0, i.jsxs)(o(4458).VP, {
                                justifyContent: "space-between",
                                height: "100%",
                                children: [(0, i.jsx)("div", {
                                    style: u,
                                    children: C
                                }), y ? (0, i.jsx)(v, {
                                    environment: h,
                                    collectionViewBlockStore: t,
                                    collectionViewStore: r,
                                    collectionStore: n,
                                    isChartDrilldown: "chart_drilldown" === c
                                }) : void 0]
                            });
                            return C
                        }
                    default:
                        (0, o(722371).HB)(S)
                }
            }
            let h = {
                textWrapper: {
                    color: o(632079).Tj.text.primary,
                    fontSize: 17,
                    fontWeight: o(699422).Wy.bold,
                    display: "flex",
                    alignItems: "center"
                }
            };

            function f(e) {
                let {
                    title: t
                } = e, {
                    isPhone: r
                } = (0, o(533992).Y0)(), n = (0, o(960253).I)(() => ({
                    headerWrapper: {
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                        gap: 6,
                        ...r ? {
                            justifyContent: "center"
                        } : {
                            justifyContent: "flex-start"
                        }
                    }
                }), [r]);
                return (0, i.jsx)("div", {
                    style: n.headerWrapper,
                    children: (0, i.jsx)("div", {
                        style: h.textWrapper,
                        children: t
                    })
                })
            }
            let m = {
                textWrapper: {
                    color: o(632079).Tj.primaryBlack,
                    fontSize: 17,
                    fontWeight: o(699422).Wy.medium,
                    display: "flex",
                    alignItems: "center"
                }
            };

            function g(e) {
                let {
                    collectionStore: t
                } = e;
                return (0, i.jsx)(o(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexGrow: 1,
                    children: (0, i.jsx)("div", {
                        style: m.textWrapper,
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Results in {databaseName}",
                            id: "AssistantEphemeralViewHeader.resultsIn",
                            values: {
                                databaseName: (0, i.jsx)(o(44419).E, {
                                    collectionStore: t,
                                    pageVisitSource: o(254656).y8.AIEphemeralView,
                                    size: 17
                                })
                            }
                        })
                    })
                })
            }
            let w = {
                width: "100%",
                flexShrink: 1,
                height: 44,
                borderRadius: 12,
                fontSize: 17
            };

            function v(e) {
                let {
                    environment: t,
                    collectionViewBlockStore: n,
                    collectionViewStore: l,
                    isChartDrilldown: a
                } = e, c = (0, o(109939).tz)(), s = (0, r.useRef)(null), d = (0, r.useCallback)(() => {
                    o(630031).B({
                        environment: t,
                        blockStore: n,
                        pageVisitSource: a ? o(254656).y8.ChartsDrilldown : o(254656).y8.AIEphemeralView
                    })
                }, [t, n, a]), u = (0, r.useCallback)(() => {
                    if (a) {
                        var e;
                        o(630031).z({
                            collectionViewBlockStore: n,
                            collectionViewStore: l,
                            environment: t,
                            originRect: null == (e = s.current) ? void 0 : e.getBoundingClientRect(),
                            intl: c
                        })
                    }
                }, [n, l, t, a, c, s]);
                return (0, i.jsxs)(o(4458).fI, {
                    paddingInline: 16,
                    paddingTop: 32,
                    paddingBottom: 48,
                    justifyContent: "space-between",
                    gap: 10,
                    children: [(0, i.jsx)(o(548436).A, {
                        style: w,
                        iconLeading: {
                            icon: o(684668).arrowDiagonalUpRightIcon,
                            size: 24
                        },
                        onClick: d,
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Open source",
                            id: "ModalOverlayCollectionView.phoneButtons.openSource"
                        })
                    }), (0, i.jsx)(o(912946).A, {
                        colorPalette: "blue",
                        ref: s,
                        style: w,
                        iconLeading: {
                            icon: o(885822).addSquareRoundedIcon,
                            size: 24
                        },
                        onClick: u,
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Save view",
                            id: "ModalOverlayCollectionView.phoneButtons.saveView"
                        })
                    })]
                })
            }
        },
        630031: (e, t, o) => {
            function r(e) {
                let {
                    collectionViewBlockStore: t,
                    collectionViewStore: r,
                    environment: n,
                    originRect: l,
                    intl: a
                } = e;
                t && r && o(351198).ho({
                    environment: n,
                    blocks: [t],
                    originRect: l,
                    moveToContext: "ai_ephemeral_view",
                    isAddTo: !0,
                    isDefaultPrivateLocation: !0,
                    forceShowPrivatePageOption: !0,
                    dontCommitActions: !0,
                    onAccept: async e => {
                        let {
                            performResult: l
                        } = await (0, o(377796).createAndCommitAsync)({
                            environment: n,
                            userAction: "UnlistedCollectionViewMoreButton.handleAddViewToMenuClick",
                            waitForServerCommit: !0,
                            perform: i => o(37759).Iz({
                                environment: n,
                                collectionViewStore: r,
                                collectionViewBlockStore: t,
                                acceptMoveToArgs: e,
                                transaction: i,
                                intl: a
                            })
                        });
                        await i({
                            environment: n,
                            blockStore: l,
                            pageVisitSource: o(254656).y8.ChartsDrilldown
                        })
                    }
                })
            }
            async function i(e) {
                let {
                    environment: t,
                    blockStore: r,
                    pageVisitSource: i
                } = e;
                if (!r) return;
                let n = (0, o(483227).Ay)({
                    store: r,
                    pageVisitSource: i
                });
                (0, o(79266).navigate)({
                    environment: t,
                    url: n
                });
                let {
                    assistantMenuActions: l
                } = await o(310639).assistantDependency.load();
                o(738923).Q.close(), await l.closeAssistantRightHandSideMenu({
                    environment: t
                })
            }
            o.d(t, {
                B: () => i,
                z: () => r
            })
        },
        783969: (e, t, o) => {
            o.d(t, {
                Q: () => r
            }), o(898992), o(354520), o(672577);

            function r(e, t) {
                let r = {
                        property: o(439368).rn,
                        visible: !0,
                        width: 276
                    },
                    i = {
                        property: t,
                        visible: !0
                    },
                    n = e.getCollectionViewStores().find(e => "table" === e.getType()),
                    l = null == n ? void 0 : n.getFormatStore().getKeyStore("table_properties").getValue();
                return n && l && 0 !== l.length ? [l.find(e => e.property === o(439368).rn) ? ? r, l.find(e => e.property === t) ? ? i, ...l.filter(e => e.property !== o(439368).rn && e.property !== t)] : [r, i]
            }
        },
        798402: (e, t, o) => {
            o.d(t, {
                Lq: () => r,
                WK: () => n,
                nh: () => i
            });
            let r = 40,
                i = 48,
                n = 60
        },
        885822: (e, t, o) => {
            o.r(t), o.d(t, {
                addSquareRoundedIcon: () => n,
                iconDefinition: () => i
            }), o(296540);
            var r = o(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 6.375c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                n = (0, o(104509).wt)("addSquareRounded", i, "default")
        }
    }
]);