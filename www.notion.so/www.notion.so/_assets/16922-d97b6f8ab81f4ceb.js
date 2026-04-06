"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16922], {
        225476: (e, t, i) => {
            function r(e) {
                if (null != e && e.blockId) return e.blockId
            }

            function a(e, t) {
                let i = e.currentUser.id;
                return t.userId === i || t.present
            }

            function n(e) {
                var t;
                return (null == (t = e.state.rootStore) ? void 0 : t.canEdit()) ? ? !1
            }

            function o(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: r
                } = e, {
                    remotePresenceData: a
                } = r.state, n = [];
                a && (0, i(763230).uk)(a, e => {
                    null != e && e.userId && n.push(e)
                });
                let {
                    pageId: o,
                    lastViewTime: s,
                    lastExitTime: l,
                    totalCount: d,
                    hasMore: u,
                    ...c
                } = t.state;
                return (0, i(763230).uk)(c, e => {
                    e.isDefined() && n.push({
                        userId: e.getUserId(),
                        activityTimestampNearestMinuteMs: (0, i(627179).WY)(e.getVisitedAt()),
                        present: !1
                    })
                }), n = (0, i(381453).hS)(n, e => e.userId), (0, i(381453).Ul)(n, ({
                    activityTimestampNearestMinuteMs: e
                }) => e ? -e : 0)
            }

            function s(e) {
                let {
                    userId: t,
                    theme: r
                } = e;
                return (0, i(514214).MF)(t) ? i(632079).Tj.icon.secondary : (0, i(632079).Nq)(t, r)
            }
            i.d(t, {
                $L: () => s,
                EV: () => r,
                PZ: () => o,
                dp: () => a,
                xm: () => n
            }), i(944114)
        },
        314331: (e, t, i) => {
            i.d(t, {
                n: () => r
            });

            function r(e) {
                return (0, i(682985).K8)(() => i(585823).gZ.state && (null == e ? void 0 : e.id) === i(585823).Di.state, [e])
            }
        },
        315144: (e, t, i) => {
            i.d(t, {
                a: () => a
            });
            let r = new(i(815048)).O2("StopDictationButton", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(5410), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(12354), i.e(5721), i.e(57688), i.e(17250), i.e(64696), i.e(39726), i.e(87971), i.e(29663), i.e(74145), i.e(55067), i.e(79349), i.e(90735), i.e(50354), i.e(71136), i.e(86102), i.e(30671), i.e(3101)]).then(i.bind(i, 985993))),
                a = (0, i(815048)._h)(r, e => e.StopDictationButton)
        },
        346899: (e, t, i) => {
            i.d(t, {
                h: () => a
            });
            let r = new(i(815048)).O2("DictationAvatar", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(5410), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(12354), i.e(5721), i.e(57688), i.e(17250), i.e(64696), i.e(39726), i.e(87971), i.e(29663), i.e(74145), i.e(55067), i.e(79349), i.e(90735), i.e(50354), i.e(71136), i.e(86102), i.e(30671), i.e(3101)]).then(i.bind(i, 405957))),
                a = (0, i(815048)._h)(r, e => e.DictationAvatar)
        },
        418001: (e, t, i) => {
            i.d(t, {
                j: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    blockStore: r,
                    tabToOpen: a,
                    from: n
                } = e, o = i(475097).default.state.open, {
                    currentTab: s
                } = i(449473).B8.state, l = s !== a || s === a && !(0, i(953099).N)(t), d = a === i(449473).tF.Comments && (s !== a || !(0, i(953099).N)(t));
                (0, i(34953).f)(a), d && i(449473).B8.update(e => ({ ...e,
                    timeOpenedComments: Date.now()
                })), o ? ((0, i(545586).navigateToBlock)({
                    environment: t,
                    store: r,
                    pageVisitSource: i(254656).y8.Expand
                }), (0, i(911046).u)({
                    environment: t,
                    isExpanded: !0,
                    from: n,
                    saveDetailsSidebarPreference: !0
                })) : (0, i(911046).u)({
                    environment: t,
                    isExpanded: l,
                    from: n,
                    saveDetailsSidebarPreference: !0
                })
            }
        },
        469589: (e, t, i) => {
            i.r(t), i.d(t, {
                STORE_MAX_LIMIT: () => o,
                initializePageVisit: () => s,
                updatePageVisits: () => l
            }), i(898992), i(354520), i(581454);
            var r = () => i(726570),
                a = () => i(226221),
                n = () => i(832375);
            let o = 100;
            async function s(e, t) {
                await i(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: r,
                    blockStore: o,
                    pageVisitStore: s,
                    timestamp: l,
                    type: c
                } = t, p = e.currentUser.id;
                if (void 0 === p || r) return;
                t.blockStore.id !== s.state.pageId && s.setState({ ...s.getInitialState(),
                    pageId: t.blockStore.id
                });
                let v = (0, i(517013).v3)(o, {
                        table: n().F9f,
                        id: (0, i(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, a().e)(o.pointer.spaceId)
                    }),
                    f = (0, i(517013).v3)(o, {
                        table: n().ouC,
                        id: (0, i(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, a().e)(o.pointer.spaceId)
                    });
                if (await i(941701).transactionQueue.awaitRecordTransaction({
                        table: n().evP,
                        id: o.id
                    }), await (0, i(966980).hS)(o), !o.canRead() || (0, i(142484).q)(e, o, o.getSpaceStore())) return;
                await v.load(), await f.load();
                let g = v.getKeyStore("visited_at").getValue(),
                    h = f.getKeyStore("exited_at").getValue(),
                    m = await u({
                        environment: e,
                        blockStore: o,
                        spaceId: (0, a().e)(o.pointer.spaceId),
                        timestamp: l,
                        type: c
                    });
                if ("skipped" === m.type || "failed" === m.type) return;
                let S = d({
                    pageVisits: m.data.pageVisits,
                    currentState: s.state,
                    blockStore: o,
                    totalCount: s.state.totalCount,
                    hasMore: void 0
                });
                s.state.pageId === o.id && s.setState({ ...S,
                    lastViewTime: g,
                    lastExitTime: h
                })
            }
            async function l(e, t) {
                let r, n;
                await i(728372).default.waitUntilRendered();
                let s = e.currentUser.id;
                if (void 0 === s) return;
                let {
                    blockStore: l,
                    pageVisitStore: u,
                    incremental: c
                } = t, p = t.limit || 32;
                if (c) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: a,
                        totalCount: n,
                        hasMore: o,
                        ...l
                    } = u.state, d = Object.entries(l).map(([e, t]) => {
                        if (s === e) return;
                        let i = t.getVisitedAt();
                        if (void 0 !== i) return i + 1
                    });
                    r = (0, i(763230).T9)(d.filter(i(722371).O9))
                }
                let v = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: l.id,
                            spaceId: (0, a().e)(l.pointer.spaceId)
                        },
                        sinceTimestamp: r,
                        limit: p,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: l.id,
                        spaceId: (0, a().e)(l.pointer.spaceId)
                    }
                });
                if ("failed" === v.type) return;
                let f = d({
                    pageVisits: v.data.pageVisits,
                    blockStore: l,
                    currentState: u.state,
                    totalCount: v.data.totalCount,
                    hasMore: v.data.hasMore
                });
                if (Object.keys(f).length <= o) n = f;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: r,
                        totalCount: a,
                        hasMore: s,
                        ...l
                    } = f, d = (0, i(722371).WP)(l).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (n = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: a,
                            hasMore: s
                        }, i(381453).Ul(d, ([, e]) => -e).slice(0, o))) n[t] = f[t]
                }
                u.state.pageId === f.pageId && u.setState(n)
            }

            function d(e) {
                let {
                    blockStore: t,
                    pageVisits: i,
                    currentState: o,
                    totalCount: s,
                    hasMore: l
                } = e, d = { ...o,
                    pageId: t.id,
                    totalCount: s,
                    hasMore: l
                };
                for (let e of i) {
                    let {
                        id: i,
                        user_id: o
                    } = e;
                    o in d || (d[o] = r()._.createChildStore(t, {
                        table: n().F9f,
                        id: i,
                        spaceId: (0, a().e)(t.pointer.spaceId)
                    }))
                }
                return d
            }
            async function u(e) {
                let {
                    environment: t,
                    blockStore: r,
                    spaceId: a,
                    timestamp: o,
                    type: s
                } = e, {
                    id: l
                } = t.currentUser, d = r.id, u = r.getSystemBlockTypeStore().getValue();
                if ((0, i(512845).kR)(u) || r.getParentTable() === n().C0E) return {
                    type: "skipped"
                };
                if (l && "passive" !== s) {
                    var c;
                    null == t || null == (c = t.mobileNative) || c.recordPageVisit(l, {
                        blockId: d,
                        spaceId: a,
                        visitedAt: o
                    }), i(715265).A.recordVisit({
                        id: d,
                        systemBlockType: u,
                        type: i(981324).ig.Default,
                        currentUserId: l
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: d,
                            spaceId: a
                        },
                        timestamp: o,
                        type: s
                    },
                    headers: {
                        recordId: d,
                        spaceId: a
                    }
                })
            }
        },
        616922: (e, t, i) => {
            i.d(t, {
                eQ: () => v,
                hJ: () => C,
                Ay: () => f,
                Uo: () => m,
                XE: () => y
            }), i(944114), i(898992), i(823215), i(581454);
            var r = i(296540);
            let a = new(i(815048)).O2("AIMNLiveCollabCallout", async () => await i.e(35920).then(i.bind(i, 966085))),
                n = (0, i(815048)._h)(a, e => e.AIMNLiveCollabCallout);
            var o = () => i(225476);
            let s = function(e) {
                    let t = (0, i(533992).v3)(),
                        a = (0, r.useRef)(),
                        n = (0, i(396805).T)(),
                        o = (0, r.useCallback)(async () => {
                            if (await i(941701).transactionQueue.awaitRecordTransaction(e.blockStore.pointer), !n.current) return;
                            let r = (0, i(568479).Ws)(e.blockStore.id);
                            a.current = i(48091).Ay.addListener({
                                key: r,
                                authorizationToken: void 0,
                                listener: i(381453).nF(() => i(469589).updatePageVisits(t, {
                                    blockStore: e.blockStore,
                                    pageVisitStore: e.pageVisitStore,
                                    incremental: !0,
                                    limit: e.limit
                                }), 1e3),
                                subscriptionId: void 0
                            })
                        }, [t, n, e.blockStore, e.limit, e.pageVisitStore]),
                        s = (0, r.useCallback)(() => {
                            a.current && (i(48091).Ay.removeListener(a.current), a.current = void 0)
                        }, []);
                    return (0, r.useEffect)(() => (o(), s), [o, s]), null
                },
                l = new(i(815048)).O2("AvatarHoverCard", async () => await Promise.all([i.e(21969), i.e(47414), i.e(98821), i.e(77470), i.e(6608)]).then(i.bind(i, 691631))),
                d = (0, i(815048)._h)(l, e => e.AvatarHoverCard),
                u = new(i(815048)).O2("MoreViewersHoverCard", async () => await i.e(46118).then(i.bind(i, 479676))),
                c = (0, i(815048)._h)(u, e => e.MoreViewersHoverCard);
            var p = i(474848);
            let v = 22,
                f = function({
                    pageVisitStore: e,
                    presenceStore: t,
                    rootStore: r,
                    maxUsers: a
                }) {
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(i(315144).a, {
                            rootStore: r
                        }), (0, p.jsx)(C, {
                            rootStore: r,
                            pageVisitStore: e,
                            presenceStore: t,
                            maxUsers: a,
                            isShowingInFeed: !1
                        }), (0, p.jsx)(s, {
                            blockStore: r,
                            pageVisitStore: e,
                            limit: 1 + (a ? ? 5) + 25
                        })]
                    })
                };

            function g(e) {
                return i(381453).Ul(e, e => e.activityTimestampNearestMinuteMs)
            }

            function h(e, t) {
                return i(807825).L.createChildStore(t, {
                    table: i(832375).oo9,
                    id: e
                })
            }

            function m(e) {
                let {
                    environment: t,
                    isShowingTabBar: r,
                    isShowingInFeed: a
                } = e;
                return { ...(0, i(1249).g)({
                        noDrag: t.device.isElectron && !r
                    }),
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "row-reverse",
                    marginInlineStart: 8,
                    paddingInlineEnd: 6,
                    transform: "translateZ(0)",
                    ...a && {
                        maxHeight: 54,
                        paddingBottom: 12
                    }
                }
            }

            function S({
                hiddenUsers: e,
                hiddenUsersCount: t,
                hasMore: i,
                rootStore: r,
                environment: a
            }) {
                return (0, p.jsx)(c, {
                    trigger: (0, p.jsx)(I, {
                        hiddenUsersCount: t,
                        environment: a,
                        rootStore: r
                    }),
                    viewers: e,
                    totalCount: t,
                    rootStore: r
                })
            }
            let b = {
                paddingInline: 8,
                marginInlineStart: 4,
                marginInlineEnd: -10
            };

            function I({
                hiddenUsersCount: e,
                environment: t,
                rootStore: a
            }) {
                let n = (0, r.useCallback)(() => {
                    (0, i(418001).j)({
                        environment: t,
                        blockStore: a,
                        tabToOpen: i(449473).tF.Updates,
                        from: "more_menu"
                    }), i(449473).B8.setState({ ...i(449473).B8.state,
                        updatesSubTab: i(449473).VE.Analytics
                    })
                }, [t, a]);
                return (0, p.jsx)(i(988022).p, {
                    style: b,
                    size: "sm",
                    shape: "pill",
                    colorPalette: "gray",
                    onClick: n,
                    children: (0, p.jsx)(i(109939).sA, {
                        defaultMessage: "{hiddenUsersCount, plural, one {+{hiddenUsersCount}} other {+{hiddenUsersCount}}}",
                        id: "topbar.presenceIndicator.hiddenUsers.otherCount.message",
                        values: {
                            hiddenUsersCount: e
                        }
                    })
                })
            }

            function y(e, t) {
                return (0, i(960253).I)(() => {
                    let r = {
                            width: v,
                            height: v,
                            borderRadius: v
                        },
                        a = e(i(632079).Tj);
                    return {
                        button: {
                            transition: "all 0.2s ease",
                            transform: "scale(1)"
                        },
                        buttonHovered: {
                            transform: "scale(1.15)",
                            background: "none"
                        },
                        buttonPressed: {
                            transform: "scale(0.9)",
                            background: "none"
                        },
                        uiUserAvatarStyles: { ...r
                        },
                        avatarInnerOutline: { ...r,
                            outlineStyle: "solid",
                            outlineColor: i(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: t ? { ...r,
                            outlineStyle: "solid",
                            outlineColor: a,
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarOuterOutline: { ...r,
                            outlineStyle: "solid",
                            outlineColor: t ? i(632079).Tj.background.primary : i(632079).Tj.UIUserAvatarIdleOutline,
                            outlineWidth: .5,
                            outlineOffset: +!!t,
                            backgroundColor: i(632079).Tj.background.primary,
                            marginInlineEnd: -6,
                            position: "relative"
                        },
                        initialColor: {
                            color: t ? a : i(632079).Tj.icon.secondary
                        }
                    }
                }, [e, t])
            }

            function w(e) {
                let {
                    userData: t,
                    rootStore: a,
                    isShowingInFeed: n = !1
                } = e, s = (0, i(533992).v3)(), {
                    userId: l
                } = t, u = (0, o().dp)(s, t), c = (0, i(514214).MF)(l), {
                    userStore: f,
                    showAvatar: g
                } = (0, i(682985).K8)(() => {
                    let e = h(l, a);
                    return {
                        userStore: e,
                        showAvatar: (e.isDefined() || c) && !e.getIsSuspended()
                    }
                }, [l, a, c]), m = (0, i(682985).K8)(() => a.getSpaceStore(), [a]), S = y((0, r.useCallback)(e => (0, i(514214).MF)(l) ? i(632079).Tj.icon.secondary : l === s.currentUser.id ? i(632079).Tj.border.accentPrimary : (0, i(632079).Nq)(l, e), [s.currentUser.id, l]), u);
                if (!g) return null;
                let b = (0, p.jsx)("div", {
                        style: S.avatarOuterOutline,
                        children: (0, p.jsx)("div", {
                            style: S.avatarBorder,
                            children: (0, p.jsx)(i(321753).A, {
                                iconStyle: S.avatarInnerOutline,
                                userStore: c ? i(268033).px : f,
                                style: S.uiUserAvatarStyles,
                                isOffline: !u,
                                size: v,
                                avatarShouldShowShadow: !n,
                                initialOverrideStyle: S.initialColor
                            })
                        })
                    }),
                    I = u && t.blockId ? (0, p.jsx)(i(64960).Ay, {
                        onClick: () => (0, i(250717).B)([t.blockId ? ? ""], !0, s),
                        style: S.button,
                        hoveredStyle: S.buttonHovered,
                        pressedStyle: S.buttonPressed,
                        children: b
                    }) : b;
                if (n || !s.currentUser.id) return I;
                let w = function({
                    userData: e,
                    isPresent: t,
                    currentUserId: r,
                    userId: a,
                    isShowingInFeed: n
                }) {
                    if (r !== a) {
                        if (t) return e.blockId && !n ? (0, p.jsx)(i(109939).sA, {
                            defaultMessage: "Viewing now. Click to see where they are.",
                            id: "topbar.presenceIndicator.viewingNowWithLocation.tooltip"
                        }) : (0, p.jsx)(i(109939).sA, {
                            defaultMessage: "Viewing now",
                            id: "topbar.presenceIndicator.viewingNow.tooltip"
                        });
                        if (e.activityTimestampNearestMinuteMs) return (0, p.jsx)(i(109939).sA, {
                            defaultMessage: "Last viewed {timeFromNow}",
                            id: "topbar.presenceIndicator.lastViewedTime.tooltip",
                            values: {
                                timeFromNow: (0, i(850640).v9)(Math.min(e.activityTimestampNearestMinuteMs, Date.now()), i(849917).locale)
                            }
                        })
                    }
                }({
                    userData: t,
                    isPresent: u,
                    currentUserId: s.currentUser.id,
                    userId: l,
                    isShowingInFeed: n
                });
                return (0, p.jsx)(d, {
                    trigger: I,
                    userStore: f,
                    header: w,
                    spaceStore: m
                })
            }

            function C(e) {
                let {
                    rootStore: t,
                    pageVisitStore: a,
                    presenceStore: s,
                    maxUsers: l,
                    isShowingInFeed: d
                } = e, u = (0, i(533992).v3)(), c = u.currentUser.id, v = (0, i(682985).K8)(() => {
                    let e = u.currentUser.id;
                    if (!e) return;
                    let t = d || (0, o().xm)(s) ? (0, o().PZ)({
                            pageVisitStore: a,
                            presenceStore: s
                        }) : [],
                        i = (null == a ? void 0 : a.state.totalCount) ? ? t.length,
                        r = [],
                        n = [];
                    for (let a of t)
                        if (a.userId === e) {
                            i--;
                            continue
                        } else(0, o().dp)(u, a) ? r.push(a) : n.push(a);
                    let c = [...g(r).reverse(), ...g(n).reverse()],
                        p = (l ? ? 5) - 1;
                    return {
                        visibleUsers: c.slice(0, p),
                        hiddenUsers: c.slice(p),
                        totalCount: i,
                        hasMore: !!(null == a ? void 0 : a.state.hasMore)
                    }
                }, [a, s, u, d, l], {
                    equalityFn: i(381453).n4
                }), {
                    visibleUsers: f,
                    hiddenUsers: b,
                    hiddenUsersCount: I,
                    hasMoreHiddenUsers: y,
                    isEveryUserStoreReady: C
                } = (0, i(682985).K8)(() => {
                    if (!c) return {};
                    let {
                        visibleUsers: e = [],
                        hiddenUsers: r = []
                    } = v ? ? {}, a = [c, ...e.map(e => e.userId), ...r.map(e => e.userId)].map(e => h(e, t));
                    return {
                        visibleUsers: e,
                        hiddenUsers: r,
                        hiddenUsersCount: Number(null == v ? void 0 : v.totalCount) - e.length,
                        hasMoreHiddenUsers: !!(null == v ? void 0 : v.hasMore),
                        isEveryUserStoreReady: a.every(e => e.isReady() || (0, i(514214).MF)(e.id))
                    }
                }, [c, v, t]), k = (0, r.useRef)(null), x = (0, i(682985).K8)(() => i(218744).default.getEligibleGroup({
                    experimentId: "adoption_aimn_live_collab_discovery_nudge_video",
                    disableExposureLogging: !0
                }), []), j = (0, i(682985).O$)(i(584257).b), U = (0, i(314331).n)(t), T = !(0, i(682985).O$)(i(205885).e);
                if (!c || !v || !C || T || c !== t.userId) return null;
                if (0 === f.length && 0 === b.length) return U ? (0, p.jsx)("div", {
                    style: m({
                        environment: u,
                        isShowingTabBar: j,
                        isShowingInFeed: d
                    }),
                    children: (0, p.jsx)(i(346899).h, {
                        enableClickToScroll: !0,
                        rootStore: t
                    })
                }) : null; {
                    let e = [...f];
                    return e.reverse(), (0, p.jsxs)("div", {
                        ref: k,
                        style: m({
                            environment: u,
                            isShowingTabBar: j,
                            isShowingInFeed: d
                        }),
                        children: [I > 0 ? (0, p.jsx)(S, {
                            rootStore: t,
                            hiddenUsers: b,
                            hiddenUsersCount: I,
                            hasMore: y,
                            environment: u
                        }) : void 0, e.map(e => (0, p.jsx)(w, {
                            userData: e,
                            rootStore: t
                        }, e.userId)), d ? void 0 : (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(w, {
                                rootStore: t,
                                userData: {
                                    userId: c,
                                    present: !0
                                }
                            }), (0, p.jsx)(i(346899).h, {
                                enableClickToScroll: !0,
                                rootStore: t
                            }), void 0 !== x ? (0, p.jsx)(n, {
                                origin: k
                            }) : void 0]
                        })]
                    })
                }
            }
        }
    }
]);