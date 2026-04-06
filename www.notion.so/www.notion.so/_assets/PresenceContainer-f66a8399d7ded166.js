"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86625], {
        260235: (e, t, r) => {
            function n(e) {
                var t, n;
                if (!e.isInLibraryBlock()) return;
                let i = e.getRecordStoreUIRoot();
                if (!(i instanceof r(678703).Bv)) return;
                let o = null == (t = (0, r(444610).U)(i)) ? void 0 : t.collectionViewStore();
                return null == (n = (0, r(134273).N)(o)) ? void 0 : n.viewName
            }

            function i({
                environment: e,
                selectedItems: t
            }) {
                if (0 === t.length) return;
                let o = r(728372).AppStoreCurrentUserSettingsStore.state,
                    s = r(728372).AppStoreSidebarSpaceViewStore.state,
                    l = r(728372).AppStoreSidebarSpaceStore.state,
                    a = e.currentUser.id,
                    u = n(t[0]);
                if (!o || !s || !a || !l || !u || ! function({
                        libraryViewName: e,
                        blocks: t,
                        userId: n,
                        spaceStore: i,
                        spaceViewStore: o
                    }) {
                        if (t.some(e => e.isArchived())) return !1;
                        switch (e) {
                            case "recents":
                            case "teamspaceDirectory":
                            case "libraryExternalPages":
                            case "myMeetings":
                            case "agents":
                                return !1;
                            case "favorites":
                                let s = o.getBookmarkedPageIds();
                                return t.every(e => s.includes(e.id));
                            case "private":
                                return t.every(e => (0, r(528991).K)(e));
                            case "shared":
                                return t.every(e => (0, r(260405).B)({
                                    store: e,
                                    spaceStore: i,
                                    userId: n
                                }));
                            default:
                                return (0, r(722371).HB)(e), !1
                        }
                    }({
                        libraryViewName: u,
                        blocks: t,
                        userId: a,
                        spaceStore: l,
                        spaceViewStore: s
                    })) return;
                let c = r(678703).VF.createChildStore(s, (0, r(729052).i1)({
                    userId: a,
                    spaceId: s.id
                }));
                if (c) return {
                    environment: e,
                    selectedItems: t,
                    userSettingsStore: o,
                    spaceViewStore: s,
                    spaceUserStore: c,
                    libraryViewName: u
                }
            }
            r.d(t, {
                o: () => n,
                s: () => i
            }), r(898992), r(823215), r(737550)
        },
        342303: (e, t, r) => {
            r.r(t), r.d(t, {
                PresenceContainer: () => a
            }), r(944114), r(898992), r(354520), r(672577), r(581454);
            var n = r(296540),
                i = () => r(783418),
                o = () => r(225476),
                s = r(474848);
            let l = {
                position: "absolute",
                top: 0,
                insetInlineStart: 0,
                zIndex: 89
            };

            function a(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: a
                } = e, c = (0, r(533992).v3)(), p = (0, n.useRef)(null), d = (0, r(682985).K8)(() => (function(e) {
                    let {
                        pageVisitStore: t,
                        presenceStore: n,
                        environment: s,
                        containerEl: l
                    } = e, {
                        rootStore: a
                    } = n.state;
                    if (!a || !(0, o().xm)(n) || !l) return [];
                    let u = s.currentUser.id,
                        c = (0, o().PZ)({
                            pageVisitStore: t,
                            presenceStore: n
                        }).filter(e => e.userId !== u && (0, o().dp)(s, e));
                    if (!c.length) return [];
                    let p = {},
                        d = r(240414).T.getMembersByDOMOrder({
                            filter: () => !0
                        }),
                        f = l.getBoundingClientRect(),
                        h = [];
                    for (let e of c) {
                        let t, r = (0, o().EV)(e),
                            n = null == e ? void 0 : e.blockPath;
                        if (n && (null == n ? void 0 : n.length) > 0 ? t = function(e, t, r) {
                                let n, i, o = new Map(t.map((e, t) => [e, t]));
                                for (let t of e) {
                                    let e = t.props.store,
                                        s = o.get(e.id);
                                    if (!(void 0 === s || t.props.store.isFirstBlockInCalloutV2Block()) && !t.props.store.isTabInTabBlock() && ((void 0 === i || s < i) && r.uiContains(e) && t.props.shouldShowHalo && (n = t, i = s), 0 === i)) break
                                }
                                return n
                            }(d, n, a) : r && (t = function(e, t, r) {
                                return e.find(e => {
                                    let n = e.props.store;
                                    return !!(n && n.id === t && r.uiContains(n) && e.props.shouldShowHalo)
                                })
                            }(d, r, a)), !t) continue;
                        let l = t.props.store.id;
                        p.hasOwnProperty(l) || (p[l] = 0), p[l]++;
                        let u = t.getNode();
                        if (!u || !(u instanceof Element)) continue;
                        let c = u.getBoundingClientRect();
                        if (!c) continue;
                        let v = (0, i().ac)({
                                marginItemType: "presence_avatars",
                                nodeRect: c,
                                containerRect: f,
                                avatarCount: p[l],
                                store: t.props.store,
                                environment: s
                            }),
                            S = (0, i().qg)({
                                marginItemType: "presence_avatars",
                                nodeRect: c,
                                containerRect: f,
                                environment: s,
                                store: t.props.store,
                                selectable: t
                            });
                        h.push({
                            type: "presence",
                            userId: e.userId,
                            left: S,
                            top: v,
                            blockType: t.props.store.getType()
                        })
                    }
                    return h
                })({
                    pageVisitStore: t,
                    presenceStore: a,
                    environment: c,
                    containerEl: p.current
                }), [t, a, c], {
                    debugName: "presenceAvatars",
                    equalityFn: r(381453).n4
                });
                return (0, s.jsx)("div", {
                    className: "notion-presence-container",
                    style: l,
                    ref: p,
                    children: (0, s.jsx)(r(8366).A, {
                        children: () => d.map(t => {
                            let {
                                left: n,
                                top: i
                            } = t, o = {
                                translateX: n,
                                translateY: i,
                                scale: 1,
                                opacity: 1
                            }, l = { ...o,
                                scale: .7,
                                opacity: 0
                            };
                            return (0, s.jsx)(r(654979).A, {
                                initial: l,
                                exit: l,
                                animate: o,
                                children: (0, s.jsx)(u, {
                                    avatar: t,
                                    presenceStore: e.presenceStore
                                })
                            }, t.userId)
                        })
                    })
                })
            }

            function u(e) {
                let {
                    avatar: t
                } = e, n = r(986939).A.isMobile ? 16 : 22, i = (0, r(960253).I)(() => {
                    let e = {
                        width: n,
                        height: n,
                        borderRadius: n
                    };
                    return {
                        uiUserAvatarStyles: { ...e
                        },
                        avatarInnerOutline: { ...e,
                            outlineStyle: "solid",
                            outlineColor: r(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: "presence" === t.type ? { ...e,
                            outlineStyle: "solid",
                            outlineColor: (0, o().$L)({
                                userId: t.userId,
                                theme: r(632079).Tj
                            }),
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarWrapper: { ...e,
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 2 * !!r(986939).A.isMobile,
                            outlineStyle: "solid",
                            outlineWidth: .5,
                            outlineOffset: 1,
                            outlineColor: r(632079).Tj.background.primary
                        },
                        initialColor: "presence" === t.type ? {
                            color: (0, o().$L)({
                                userId: t.userId,
                                theme: r(632079).Tj
                            })
                        } : {}
                    }
                }, [n, t]), l = (0, r(682985).K8)(() => {
                    let {
                        rootStore: n
                    } = e.presenceStore.state;
                    if (n) {
                        if ((0, r(514214).MF)(t.userId)) return {
                            type: "presence",
                            userStore: r(268033).px
                        };
                        let e = r(807825).L.createChildStore(n, {
                            table: r(832375).oo9,
                            id: t.userId
                        });
                        return e.isDefined() ? {
                            type: "presence",
                            userStore: e
                        } : null
                    }
                    return null
                }, [t, e.presenceStore]);
                return l ? (0, r(264873).N)(e => (0, s.jsx)("div", {
                    style: i.avatarWrapper,
                    ...e,
                    children: (0, s.jsx)("div", {
                        style: i.avatarBorder,
                        children: (0, s.jsx)(r(321753).A, {
                            iconStyle: i.avatarInnerOutline,
                            hasTooltip: !0,
                            userStore: l.userStore,
                            style: i.uiUserAvatarStyles,
                            size: n,
                            avatarShouldShowShadow: !0,
                            initialOverrideStyle: i.initialColor
                        })
                    })
                })) : null
            }
        }
    }
]);