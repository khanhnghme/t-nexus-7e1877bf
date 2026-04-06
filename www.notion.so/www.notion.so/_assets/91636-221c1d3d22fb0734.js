"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [91636], {
        262118: (e, t, a) => {
            a.d(t, {
                Q: () => o
            });

            function o(e) {
                let {
                    chatFeatureType: t
                } = e;
                a(562733).zI.update(e => ({ ...e,
                    focusRequest: {
                        chatFeatureType: t,
                        id: (0, a(4962).Ay)()
                    }
                }))
            }
        },
        265255: (e, t, a) => {
            a.d(t, {
                d: () => o
            });

            function o() {
                let e = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                return a(475097).default.state.open && a(475097).default.state.targetStore || e
            }
        },
        420459: (e, t, a) => {
            a.d(t, {
                G4: () => r,
                gu: () => n,
                rs: () => i
            }), a(18107), a(967357);
            var o = () => a(970831);

            function n(e) {
                let t = e ? ? ("editing" === a(358377).default.state.mode ? a(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let n = t.start.store,
                    i = n.getRecordStoreUIRoot(),
                    r = a(521595).n.findNodeFromStore(n),
                    l = (0, a(534012).T)(n),
                    s = null == l ? void 0 : l.getRecordStoreUIParent(),
                    c = (0, a(730994).K3)(i),
                    d = l && l instanceof o().B && l !== i ? l : void 0,
                    u = d ? ? r;
                if (i && i instanceof o().B && u) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: i,
                    currentBlock: d,
                    origin: u,
                    currentParent: s,
                    scrollerStore: c,
                    isPageTitle: i.id === n.id
                }
            }

            function i() {
                let {
                    stores: e
                } = a(584265).default.state, t = a(358377).default.state, n = "empty" !== t.mode ? t.multiSelection : void 0, i = "empty" !== t.mode ? t.multiSelection.start.store : void 0, r = i ? i.getRecordStoreUIRoot() : void 0;
                if (!(r instanceof o().B)) {
                    let e, t = null == i ? void 0 : i.getRecordStoreUIParent();
                    for (; null != t;) t instanceof o().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (r = e)
                }
                if (n && r && r instanceof o().B) {
                    let t = (0, a(534012).T)(n.end.store),
                        o = null == t ? void 0 : t.getRecordStoreUIParent(),
                        i = (0, a(730994).K3)(r);
                    if (t && o) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: n,
                        currentPage: r,
                        origin: t,
                        endBlock: t,
                        endBlockParent: o,
                        scrollerStore: i
                    }
                }
            }

            function r() {
                if (a(584265).default.state.stores.length > 0) {
                    let e = a(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== a(584265).default.state.stores.length) return;
                            let e = a(584265).default.state.stores[0];
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
                        return e ? n(e) : function() {
                            let {
                                stores: e
                            } = a(584265).default.state, t = e[0], n = e.at(-1), i = t ? t.getRecordStoreUIRoot() : void 0;
                            if (i && i instanceof o().B && n) {
                                let t = (0, a(730994).K3)(i);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: i,
                                    origin: n,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, a(971541).k)(e.multiSelection) ? n() : i()
                }
            }
        },
        457547: (e, t, a) => {
            a.d(t, {
                u: () => o
            });

            function o({
                environment: {
                    device: e
                }
            }) {
                return e.isWindows
            }
        },
        685284: (e, t, a) => {
            a.d(t, {
                q: () => i
            });
            var o = () => a(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                open() {
                    this.setState({
                        open: !0
                    })
                }
                close() {
                    this.setState({
                        open: !1
                    })
                }
            }
            let i = new n
        },
        700790: (e, t, a) => {
            a.d(t, {
                I: () => o
            });

            function o(e, t) {
                if (e === a(728372).AppStoreMainEditorCurrentBlockStore.state) {
                    let {
                        RouterStore: e
                    } = t, a = e.state.route;
                    if ("page" === a.name) return a.collectionViewId
                }
            }
        },
        701513: (e, t, a) => {
            a.d(t, {
                D: () => o
            });

            function o(e) {
                let t = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                t && (0, a(358667).openChatPanel)({
                    environment: e,
                    store: t,
                    chatPanelState: {
                        isOpen: !0,
                        isNewThread: !0
                    }
                })
            }
        },
        729619: (e, t, a) => {
            a.d(t, {
                XP: () => i,
                T: () => r,
                Tk: () => n,
                YG: () => s,
                jW: () => l,
                Zp: () => c
            }), a(898992), a(354520), a(581454), a(296540);
            var o = a(474848);

            function n(e) {
                var t;
                let {
                    environment: o,
                    store: n
                } = e;
                a(218744).default.getEligibleGroup({
                    experimentId: "adoption_aa_page_share_menu"
                }), a(880853).Ay.reset(), a(475097).default.state.open ? a(344476).A.setState({ ...a(344476).A.state,
                    open: !0
                }) : a(409614).A.setState({ ...a(409614).A.state,
                    open: !0
                }), t = {
                    share_menu_session_id: a(880853).Ay.state.sessionId,
                    ...n && n.table === a(832375).evP && n.isCollectionView() ? {
                        collection_view_block_id: n.id,
                        ...(0, a(633171).P)(n, {
                            skipPages: !1
                        })
                    } : {}
                }, (0, a(104310).u)({
                    event: {
                        eventName: "open_page_share",
                        eventProperties: t
                    }
                })
            }

            function i(e) {
                var t;
                let {
                    environment: o,
                    store: n
                } = e;
                a(475097).default.state.open ? a(344476).A.setState({ ...a(344476).A.state,
                    open: !1
                }) : a(409614).A.setState({ ...a(409614).A.state,
                    open: !1
                }), a(982993).A.setState({ ...a(982993).A.state,
                    siteSettingContentType: "initial"
                });
                let {
                    collection_view_block_id: i,
                    collection_view_id: r,
                    collection_id: l,
                    owned_collection_count: s,
                    linked_collection_count: c
                } = (() => {
                    if (n && n.table === a(832375).evP && n.isCollectionView()) {
                        let e = (0, a(633171).P)(n, {
                            skipPages: !1
                        });
                        return {
                            collection_view_block_id: n.id,
                            collection_view_id: (0, a(700790).I)(n, o),
                            collection_id: e.collectionId,
                            owned_collection_count: e.ownedCollectionCount,
                            linked_collection_count: e.linkedCollectionCount
                        }
                    }
                    return {
                        collection_view_block_id: void 0,
                        collection_view_id: void 0,
                        collection_id: void 0,
                        owned_collection_count: void 0,
                        linked_collection_count: void 0
                    }
                })();
                t = {
                    share_menu_session_id: a(880853).Ay.state.sessionId,
                    collection_id: l,
                    collection_view_id: r,
                    collection_view_block_id: i,
                    owned_collection_count: s,
                    linked_collection_count: c
                }, (0, a(104310).u)({
                    event: {
                        eventName: "close_page_share",
                        eventProperties: t
                    }
                })
            }
            async function r(e) {
                let {
                    inviteTargetsStore: t
                } = e, n = (0, o.jsx)(a(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationMessage",
                    defaultMessage: "Your changes have not been saved. Discard changes?"
                }), i = (0, o.jsx)(a(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationButton.label",
                    defaultMessage: "Yes"
                }), r = (0, o.jsx)(a(109939).sA, {
                    id: "shareMenu.closeInviteDialog.cancelButton.label",
                    defaultMessage: "Cancel"
                });
                return t.state.inviteTargets.length > 0 && (await a(647095).Gh({
                    message: n,
                    acceptLabel: i,
                    cancelLabel: r
                })).accept
            }

            function l(e) {
                let t = a(880853).Ay.state;
                (t.display === a(880853).pP.Invite || t.display === a(880853).pP.AddInviteMessage) && a(880853).Ay.setState({ ...t,
                    selectedBlockRole: e
                })
            }

            function s(e) {
                let t = a(880853).Ay.state;
                (t.display === a(880853).pP.Invite || t.display === a(880853).pP.AddInviteMessage) && a(880853).Ay.setState({ ...t,
                    canCreatePagesInCollection: e
                })
            }

            function c(e) {
                let t = a(880853).Ay.state;
                (t.display === a(880853).pP.Invite || t.display === a(880853).pP.AddInviteMessage) && a(880853).Ay.setState({ ...t,
                    userSelectedCreatorRole: e
                })
            }
        },
        816893: (e, t, a) => {
            a.d(t, {
                y: () => i
            }), a(898992), a(737550);
            var o = () => a(871871),
                n = () => a(247438);

            function i(e) {
                let t = a(358377).default.state;
                if ("editing" !== t.mode) return !1;
                let {
                    multiSelection: i
                } = t;
                if ((0, a(971541).k)(i)) return !1;
                for (let {
                        store: t,
                        selection: r
                    } of (0, a(58512).$)(i)) {
                    let a = t.getValue();
                    if (!a) continue;
                    let i = n().RQ(a),
                        l = 0;
                    for (let t of i) {
                        let a = o().PE(n().N8A(t));
                        if ((l >= r.startIndex && l < r.endIndex || l < r.startIndex && l + a.length > r.startIndex) && n().uPN(t).some(t => n()._XS(t) === e)) return !0;
                        l += a.length
                    }
                }
                return !1
            }
        },
        839032: (e, t, a) => {
            a.d(t, {
                M: () => o
            });

            function o(e) {
                let {
                    TabbedRouterStore: t,
                    RouterStore: o
                } = e;
                return (0, a(318355).A)(e) ? t.canGoForward() : e.device.isElectron ? a(219040).H.canGoForward() : o.canGoForward()
            }
        },
        868366: (e, t, a) => {
            a.d(t, {
                Fg: () => J,
                p6: () => $,
                bD: () => eA,
                tN: () => L
            }), a(898992), a(823215), a(354520), a(581454);
            var o = a.n(a(36545));

            function n(e) {
                return void 0 !== e.shortcuts
            }
            var i = () => a(424007);
            a(672577), a(803949);
            let r = (0, a(233319).Fw)({
                key: "open home",
                displayName: void 0,
                analyticsName: "openHome",
                validators: [a(26313).M, (0, a(572251).A)(() => (0, a(828560).hw)())],
                shortcuts: ["openHome"],
                closeParentMenu: !0,
                action: async e => {
                    let t = e.environment,
                        o = a(933062).XH("main");
                    !o || (await o.load(), o.canRead() && ((0, a(167552).ZL)({
                        environment: t,
                        from: "keyboard_shortcut"
                    }), (0, a(545586).navigateToBlock)({
                        environment: t,
                        store: o,
                        pageVisitSource: a(254656).y8.SidebarHome
                    })))
                }
            });

            function l(e) {
                let t, o = a(584265).default.state.stores,
                    n = a(584265).default.state.pivot,
                    i = (0, a(381453).oE)((0, a(381453).FF)(o, n));
                t = n === (0, a(763230).HV)(o) ? o[o.length - 2] : o[1], (0, a(854924).t)({
                    environment: e,
                    stores: i,
                    pivot: t
                })
            }

            function s(e) {
                let t = a(584265).default.state.pivot || (0, a(763230).HV)(a(584265).default.state.stores);
                if (t) {
                    let o = a(240414).T.findScrollToSelectableFromStore(t);
                    o && (0, a(840529).p)({
                        environment: e,
                        handle: o,
                        vertical: {
                            reveal: "bottom"
                        },
                        horizontal: o.props.disableScrollToRevealHorizontal ? void 0 : {
                            reveal: "closest"
                        }
                    })
                }
            }

            function c(e) {
                var t;
                let o = (0, a(444610).U)(e),
                    n = null == o || null == (t = o.collectionViewStore()) ? void 0 : t.getType();
                return !!((null == o ? void 0 : o.currentSubitemFormatStoreForUiDisplayStore.state) && n && (0, a(986629).qS)(n))
            }

            function d(e) {
                let t = a(584265).default.state.pivot || a(584265).default.state.stores[0],
                    o = a(240414).T.findScrollToSelectableFromStore(t);
                o && (0, a(840529).p)({
                    environment: e,
                    handle: o,
                    vertical: {
                        reveal: "top"
                    },
                    horizontal: o.props.disableScrollToRevealHorizontal ? void 0 : {
                        reveal: "closest"
                    }
                })
            }
            a(18107), a(967357);
            let u = (0, a(109939).YK)({
                blockMovedUp: {
                    id: "blockKeyboardActions.a11y.blockMovedUp",
                    defaultMessage: "Block moved up"
                },
                blockMovedDown: {
                    id: "blockKeyboardActions.a11y.blockMovedDown",
                    defaultMessage: "Block moved down"
                },
                blockIndented: {
                    id: "blockKeyboardActions.a11y.blockIndented",
                    defaultMessage: "{count, plural, one {Block indented} other {# blocks indented}}"
                },
                blockOutdented: {
                    id: "blockKeyboardActions.a11y.blockOutdented",
                    defaultMessage: "{count, plural, one {Block outdented} other {# blocks outdented}}"
                }
            });
            async function p(e) {
                let t = a(486631).BO({
                    transaction: e.transaction,
                    blocks: a(584265).default.state.stores
                });
                t && ((0, a(663123).l)(a(962299).A.formatMessage(u.blockMovedUp)), (0, a(854924).t)({
                    environment: e.environment,
                    stores: t
                }), await a(374176).default.afterNextFlush(), (0, a(975461).B)({
                    environment: e.environment
                }))
            }
            async function m(e) {
                let t = a(486631).oJ({
                    transaction: e.transaction,
                    blocks: a(584265).default.state.stores
                });
                t && ((0, a(663123).l)(a(962299).A.formatMessage(u.blockMovedDown)), (0, a(854924).t)({
                    environment: e.environment,
                    stores: t
                }), await a(374176).default.afterNextFlush(), (0, a(975461).B)({
                    environment: e.environment
                }))
            }

            function y(e) {
                return !!a(728372).AppStoreMainEditorCurrentBlockStore.state
            }

            function v() {
                var e, t;
                let o = (0, a(330870).a)(),
                    n = null == o || null == (e = o.getSiteStore()) ? void 0 : e.getModel();
                return !!n && !!(null == (t = n.getHeader()) ? void 0 : t.hideSearch)
            }
            let f = (0, a(109939).YK)({
                    quickFindName: {
                        id: "action.quickFind.name",
                        defaultMessage: "Quick find"
                    }
                }),
                g = (0, a(233319).Fw)({
                    key: "quick find",
                    displayName: f.quickFindName,
                    analyticsName: f.quickFindName.defaultMessage,
                    validators: [(0, a(515914).or)([y, h]), (0, a(572251).A)(S), (0, a(572251).A)(v)],
                    shortcuts: ["quickFind"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => a(635257).su({
                        environment: e,
                        analyticsFrom: "keyboard-shortcut"
                    })
                }),
                k = (0, a(233319).Fw)({
                    key: "quick find (alternative)",
                    displayName: f.quickFindName,
                    analyticsName: f.quickFindName.defaultMessage,
                    validators: [(0, a(515914).or)([y, h]), (0, a(572251).A)(S), (0, a(572251).A)((0, a(515914).or)([(0, a(648903).U)([a(653601).c, a(696388).T]), (0, a(648903).U)([a(998256).p, a(21848).v, a(552555).w])])), (0, a(572251).A)(v)],
                    shortcuts: ["openLinkMenuOrOpenSearch"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => a(635257).su({
                        environment: e,
                        analyticsFrom: "keyboard-shortcut-command-k"
                    })
                });

            function S(e) {
                return "factory" === e.environment.RouterStore.state.route.name
            }

            function h(e) {
                return (0, a(132702).CP)(e.environment.RouterStore.state.route)
            }
            let N = (0, a(109939).YK)({
                    searchName: {
                        id: "action.search.name",
                        defaultMessage: "Search"
                    }
                }),
                b = (0, a(233319).Fw)({
                    key: "search",
                    displayName: N.searchName,
                    analyticsName: N.searchName.defaultMessage,
                    validators: [a(26313).M, (0, a(515914).or)([a(52203).a, y]), (0, a(572251).A)(a(750844).d), (0, a(572251).A)(a(897822).n), (0, a(572251).A)(function() {
                        return !!a(847591).Ay.state.open
                    })],
                    shortcuts: ["search"],
                    closeParentMenu: !0,
                    action: e => {
                        var t, o;
                        let n = (0, a(330870).a)();
                        if (!n) return;
                        let i = n.isCollectionView(),
                            r = (0, a(444610).U)(n),
                            l = (null == r || null == (t = r.collectionViewStore()) ? void 0 : t.getType()) === "page";
                        if (i && !l) {
                            let e = a(496704).K.findCollectionViewBlockFromStore(n);
                            e && "collectionContextStore" in e && (null == e || e.collectionContextStore.searchOpenStore.setState(!0));
                            return
                        }
                        let s = null == (o = window.getSelection()) ? void 0 : o.toString(),
                            c = "editing" === a(358377).default.state.mode ? a(358377).default.state : void 0;
                        a(945949).h({
                            environment: e.environment,
                            selectedString: s,
                            textSelectionOnOpen: c
                        })
                    }
                });

            function M({
                blocks: e
            }) {
                return a(28630).Rd(e)
            }

            function A(e) {
                return (0, a(722622).U)(e.environment)
            }

            function w(e) {
                return (0, a(839032).M)(e.environment)
            }

            function P({
                blocks: e
            }) {
                let t = null == e ? void 0 : e.at(0);
                return !!(t && c(t))
            }

            function F() {
                return a(584265).default.state.stores.length > 0
            }

            function I(e) {
                let {
                    environment: t
                } = e, {
                    device: a
                } = t, o = "quickSearch" === t.RouterStore.state.route.name;
                return a.isElectron && o
            }
            a(737550);
            let T = (0, a(109939).YK)({
                    enterName: {
                        id: "action.enter.name",
                        defaultMessage: "Enter"
                    },
                    copyFormattedLinkNavigableTypeName: {
                        id: "action.copyFormattedLinkNavigableType.name",
                        defaultMessage: "Copy linked title"
                    },
                    pasteName: {
                        id: "action.paste.name",
                        defaultMessage: "Paste"
                    },
                    moveUpName: {
                        id: "action.moveUp.name",
                        defaultMessage: "Move up"
                    },
                    moveDownName: {
                        id: "action.moveDown.name",
                        defaultMessage: "Move down"
                    },
                    propertyVisibilityLabel: {
                        id: "action.propertyVisibility.label",
                        defaultMessage: "Toggle property visibility"
                    },
                    createLinkName: {
                        id: "action.createLink.name",
                        defaultMessage: "Add link"
                    },
                    boldName: {
                        id: "action.bold.name",
                        defaultMessage: "Bold"
                    },
                    italicName: {
                        id: "action.italic.name",
                        defaultMessage: "Italic"
                    },
                    strikeThroughName: {
                        id: "action.strikeThrough.name",
                        defaultMessage: "Strike-through"
                    },
                    underlineName: {
                        id: "action.underline.name",
                        defaultMessage: "Underline"
                    },
                    darkModeName: {
                        id: "action.darkMode.name",
                        defaultMessage: "Dark mode"
                    },
                    openAsPageName: {
                        id: "action.openAsPage.name",
                        defaultMessage: "Open as page"
                    },
                    toggleQnAMessage: {
                        defaultMessage: "Toggle QnA",
                        id: "action.toggleQnA.name"
                    }
                }),
                B = [a(998256).p, (0, a(572251).A)(a(99378).v), a(494755).O];

            function C(e) {
                return (0, a(233319).Fw)({ ...e,
                    validators: B,
                    closeParentMenu: !0,
                    action: ({
                        environment: t,
                        blocks: o,
                        pageContext: n
                    }) => {
                        var i;
                        let r = null == n || null == (i = n.spaceStore) ? void 0 : i.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.createAnnotationAction",
                            environment: t,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: n => {
                                a(989871).XJ({
                                    environment: t,
                                    blocks: o,
                                    annotation: e.annotation,
                                    transaction: n
                                })
                            }
                        })
                    }
                })
            }
            let U = (0, a(233319).Fw)({
                    key: "toggle all updates",
                    displayName: void 0,
                    analyticsName: "toggleAllUpdates",
                    validators: [a(26313).M],
                    shortcuts: ["toggleAllUpdates"],
                    closeParentMenu: !0,
                    action: e => {
                        if ((0, a(828560).hw)()) {
                            (0, a(16822).h)({
                                environment: e.environment,
                                isExpanded: !0,
                                from: "keyboard_shortcut",
                                saveDetailsSidebarPreference: !0
                            }), (0, a(13475).W)("inbox");
                            return
                        }
                        a(477810).ZT({
                            environment: e.environment,
                            contentType: "inbox"
                        })
                    }
                }),
                _ = (0, a(233319).Fw)({
                    key: "open share menu",
                    displayName: void 0,
                    analyticsName: "openShareMenu",
                    validators: [a(26313).M],
                    shortcuts: ["openShareMenu"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        blocks: t
                    }) => a(729619).Tk({
                        environment: e,
                        store: null == t ? void 0 : t[0]
                    })
                }),
                L = (0, a(233319).Fw)({
                    key: "undo",
                    displayName: a(233319).AY.undoName,
                    analyticsName: a(233319).AY.undoName.defaultMessage,
                    svg: a(325336).arrowUTurnUpLeftIcon,
                    validators: [a(26313).M, a(998256).p, a(378718).B, (0, a(572251).A)(a(803254).F), (0, a(572251).A)((0, a(686412).X)(a(955630).xd.externalObjectInstancePage)), (0, a(515914).or)([(0, a(572251).A)(a(228634).l), (0, a(572251).A)(a(877340).P)]), (0, a(572251).A)(a(804043).o)],
                    shortcuts: ["undo"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "undo"
                    },
                    action: (e, {
                        environment: t
                    }, o) => (0, a(462446).t)({
                        environment: t,
                        preventSelectText: !1,
                        callback: e
                    })
                }),
                x = (0, a(233319).Fw)({
                    key: "redo",
                    displayName: a(233319).AY.redoName,
                    analyticsName: a(233319).AY.redoName.defaultMessage,
                    svg: a(515861).W,
                    validators: [a(628664).f],
                    shortcuts: ["redo"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "redo"
                    },
                    action: (e, {
                        environment: t
                    }, o) => (0, a(270600).Z)({
                        environment: t,
                        callback: e
                    })
                }),
                K = (0, a(233319).Fw)({
                    key: "up",
                    analyticsName: "Up",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["up"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }, t) => {
                        if (t && (0, a(601119).k)(t)) {
                            if (t.metaKey || t.ctrlKey) {
                                let t = (0, a(234909).X)()[0];
                                if (t) {
                                    (0, a(854924).t)({
                                        environment: e,
                                        stores: [t],
                                        pivot: t,
                                        multiSelectBoundaryStore: t
                                    });
                                    let o = a(240414).T.findScrollToSelectableFromStore(t);
                                    o && (0, a(840529).p)({
                                        environment: e,
                                        handle: o,
                                        vertical: {
                                            reveal: "top"
                                        },
                                        horizontal: o.props.disableScrollToRevealHorizontal ? void 0 : {
                                            reveal: "closest"
                                        }
                                    })
                                }
                                return
                            }! function(e) {
                                let {
                                    environment: t
                                } = e, o = a(584265).default.state.stores;
                                (0, a(362789).B)(o);
                                let n = a(584265).default.state.pivot,
                                    i = o[0];
                                if (i)
                                    if (e.shiftKey)
                                        if (n === i) {
                                            let n = (0, a(787926).OL)({
                                                    includeNonSelectableListContainer: !1
                                                }),
                                                r = (0, a(787926).Xs)(i, n.children),
                                                {
                                                    prev: l,
                                                    parent: s
                                                } = e.altKey ? (0, a(17224).MY)(n, r) : (0, a(17224).zJ)(n, r);
                                            if (l) {
                                                let e = l.value.store,
                                                    n = (0, a(381453).KC)(o, [e]);
                                                (0, a(854924).t)({
                                                    environment: t,
                                                    stores: n,
                                                    pivot: e,
                                                    multiSelectBoundaryStore: e
                                                })
                                            } else if (s) {
                                                let e = s.value.store,
                                                    n = (0, a(381453).KC)(o.filter(e => !(0, a(17224).uU)(s, t => t.store === e)), [e]);
                                                (0, a(854924).t)({
                                                    environment: t,
                                                    stores: n,
                                                    pivot: e,
                                                    multiSelectBoundaryStore: e
                                                })
                                            }
                                        } else l(e.environment);
                                else {
                                    let o = (0, a(787926).OL)({
                                            includeNonSelectableListContainer: !1
                                        }),
                                        n = (0, a(787926).Xs)(i, o.children),
                                        {
                                            prev: r,
                                            parent: l
                                        } = e.altKey ? (0, a(17224).MY)(o, n) : (0, a(17224).zJ)(o, n);
                                    if (r) {
                                        let e = r.value.store;
                                        (0, a(854924).t)({
                                            environment: t,
                                            stores: [e],
                                            pivot: e,
                                            multiSelectBoundaryStore: e
                                        })
                                    } else if (l) {
                                        let e = l.value.store;
                                        (0, a(854924).t)({
                                            environment: t,
                                            stores: [e],
                                            pivot: e,
                                            multiSelectBoundaryStore: e
                                        })
                                    } else(0, a(854924).t)({
                                        environment: t,
                                        stores: [i],
                                        pivot: i,
                                        multiSelectBoundaryStore: i
                                    })
                                } else if (n)(0, a(854924).t)({
                                    environment: t,
                                    stores: [n],
                                    multiSelectBoundaryStore: n
                                });
                                else {
                                    let e = (0, a(234909).X)(),
                                        o = (0, a(763230).HV)(e);
                                    o && (0, a(854924).t)({
                                        environment: t,
                                        stores: [o],
                                        pivot: o,
                                        multiSelectBoundaryStore: o
                                    })
                                }
                                d(t)
                            }({
                                environment: e,
                                shiftKey: !!(t && t.shiftKey),
                                altKey: !!(t && t.altKey)
                            })
                        }
                    }
                }),
                E = (0, a(233319).Fw)({
                    key: "left",
                    analyticsName: "Left",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["left"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }, t) => {
                        t && (0, a(601119).k)(t) && function(e) {
                            let t = a(584265).default.state.stores;
                            (0, a(362789).B)(t);
                            let o = a(584265).default.state.pivot;
                            if (0 !== t.length && o)
                                if ((0, a(676951).BN)(o) && a(96382).A.isOpen(o.id))(0, a(854924).t)({
                                    environment: e,
                                    stores: [o],
                                    pivot: o,
                                    multiSelectBoundaryStore: o
                                }), a(749560).xT({
                                    environment: e,
                                    blockId: o.id,
                                    state: !1,
                                    currentUserId: e.currentUser.id
                                });
                                else if (c(o)) a(112944).jG(o);
                            else {
                                let t = (0, a(787926).OL)({
                                        includeNonSelectableListContainer: !1
                                    }),
                                    n = (0, a(787926).Xs)(o, t.children),
                                    i = (0, a(17224).dC)(n);
                                if (i) {
                                    let t = i.value.store;
                                    (0, a(854924).t)({
                                        environment: e,
                                        stores: [t],
                                        pivot: t,
                                        multiSelectBoundaryStore: t
                                    })
                                } else(0, a(854924).t)({
                                    environment: e,
                                    stores: [o],
                                    pivot: o,
                                    multiSelectBoundaryStore: o
                                })
                            } else if (o)(0, a(854924).t)({
                                environment: e,
                                stores: [o],
                                multiSelectBoundaryStore: o
                            });
                            else {
                                let t = (0, a(234909).X)(),
                                    o = (0, a(763230).HV)(t);
                                o && (0, a(854924).t)({
                                    environment: e,
                                    stores: [o],
                                    pivot: o,
                                    multiSelectBoundaryStore: o
                                })
                            }
                            d(e)
                        }(e)
                    }
                }),
                R = (0, a(233319).Fw)({
                    key: "down",
                    analyticsName: "Down",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["down"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }, t) => {
                        if (t && (0, a(601119).k)(t)) {
                            if (t.metaKey || t.ctrlKey) {
                                let t = (0, a(234909).X)(),
                                    o = t[t.length - 1];
                                if (o) {
                                    (0, a(854924).t)({
                                        environment: e,
                                        stores: [o],
                                        pivot: o,
                                        multiSelectBoundaryStore: o
                                    });
                                    let t = a(240414).T.findScrollToSelectableFromStore(o);
                                    t && (0, a(840529).p)({
                                        environment: e,
                                        handle: t,
                                        vertical: {
                                            reveal: "bottom"
                                        },
                                        horizontal: t.props.disableScrollToRevealHorizontal ? void 0 : {
                                            reveal: "closest"
                                        }
                                    })
                                }
                                return
                            }! function(e) {
                                let {
                                    environment: t
                                } = e, o = a(584265).default.state.stores;
                                (0, a(362789).B)(o);
                                let n = a(584265).default.state.pivot,
                                    i = o.at(-1);
                                if (i)
                                    if (e.shiftKey)
                                        if (n === i) {
                                            let e = (0, a(787926).OL)({
                                                    includeNonSelectableListContainer: !1
                                                }),
                                                n = (0, a(787926).Xs)(i, e.children),
                                                {
                                                    next: r
                                                } = (0, a(17224).Eq)(e, n);
                                            if (r) {
                                                let e = r.value.store,
                                                    n = a(381453).KC(o, [e]);
                                                (0, a(854924).t)({
                                                    environment: t,
                                                    stores: n,
                                                    pivot: e,
                                                    multiSelectBoundaryStore: e
                                                })
                                            }
                                        } else l(t);
                                else {
                                    let o = (0, a(787926).OL)({
                                            includeNonSelectableListContainer: !1
                                        }),
                                        n = (0, a(787926).Xs)(i, o.children),
                                        {
                                            next: r
                                        } = e.altKey ? (0, a(17224).Eq)(o, n) : (0, a(17224).hi)(o, n);
                                    if (r) {
                                        let e = r.value.store;
                                        (0, a(854924).t)({
                                            environment: t,
                                            stores: [e],
                                            pivot: e,
                                            multiSelectBoundaryStore: e
                                        })
                                    } else(0, a(854924).t)({
                                        environment: t,
                                        stores: [i],
                                        pivot: i,
                                        multiSelectBoundaryStore: i
                                    })
                                } else if (n)(0, a(854924).t)({
                                    environment: t,
                                    stores: [n],
                                    multiSelectBoundaryStore: n
                                });
                                else {
                                    let e = (0, a(234909).X)()[0];
                                    e && (0, a(854924).t)({
                                        environment: t,
                                        stores: [e],
                                        pivot: e,
                                        multiSelectBoundaryStore: e
                                    })
                                }
                                s(t)
                            }({
                                environment: e,
                                shiftKey: !!(t && t.shiftKey),
                                altKey: !!(t && t.altKey)
                            })
                        }
                    }
                }),
                O = (0, a(233319).Fw)({
                    key: "right",
                    analyticsName: "Right",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["right"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        ! function(e) {
                            let t = a(584265).default.state.stores;
                            (0, a(362789).B)(t);
                            let o = a(584265).default.state.pivot;
                            if (0 !== t.length && o)
                                if ((0, a(676951).BN)(o) && !a(96382).A.isOpen(o.id))(0, a(854924).t)({
                                    environment: e,
                                    stores: [o],
                                    pivot: o,
                                    multiSelectBoundaryStore: o
                                }), a(749560).xT({
                                    environment: e,
                                    blockId: o.id,
                                    state: !0,
                                    currentUserId: e.currentUser.id
                                });
                                else if (c(o)) a(112944).Uz(o);
                            else {
                                let t = (0, a(787926).OL)({
                                        includeNonSelectableListContainer: !1
                                    }),
                                    n = (0, a(787926).Xs)(o, t.children),
                                    i = (0, a(17224).NU)(n);
                                if (i) {
                                    let t = i.value.store;
                                    (0, a(854924).t)({
                                        environment: e,
                                        stores: [t],
                                        pivot: t,
                                        multiSelectBoundaryStore: t
                                    })
                                } else(0, a(854924).t)({
                                    environment: e,
                                    stores: [o],
                                    pivot: o,
                                    multiSelectBoundaryStore: o
                                })
                            } else if (o)(0, a(854924).t)({
                                environment: e,
                                stores: [o],
                                multiSelectBoundaryStore: o
                            });
                            else {
                                let t = (0, a(234909).X)()[0];
                                t && (0, a(854924).t)({
                                    environment: e,
                                    stores: [t],
                                    pivot: t,
                                    multiSelectBoundaryStore: t
                                })
                            }
                            s(e)
                        }(e)
                    }
                }),
                D = (0, a(233319).Fw)({
                    key: "context menu",
                    analyticsName: "Context menu",
                    displayName: void 0,
                    validators: [F, (0, a(572251).A)(a(99378).v)],
                    shortcuts: ["commandSlash"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        let {
                            stores: t
                        } = a(584265).default.state;
                        a(899964).WU({
                            environment: e,
                            stores: t,
                            actionSectionGroupKey: "default",
                            analyticsFrom: "command_slash_menu"
                        })
                    }
                }),
                Y = (0, a(233319).Fw)({
                    key: "toggle keyboard shortcuts",
                    analyticsName: "Toggle keyboard shortcuts",
                    displayName: void 0,
                    validators: [a(26313).M],
                    shortcuts: ["toggleKeyboardShortcutsModalVisibility"],
                    closeParentMenu: !1,
                    action: e => {
                        a(499267).j({
                            store: a(432428).V,
                            toggleSource: "keyboard_shortcut"
                        })
                    }
                }),
                V = (0, a(233319).Fw)({
                    key: "indent",
                    analyticsName: "Indent",
                    displayName: void 0,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(734533).c, (0, a(572251).A)(a(993186).$)],
                    shortcuts: ["tab"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        var o;
                        let n = null == t || null == (o = t.spaceStore) ? void 0 : o.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.indent",
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            environment: e,
                            canUndo: !0,
                            perform: t => {
                                var o = e,
                                    n = t;
                                let i = a(584265).default.state.stores;
                                if (i.length > 0) {
                                    let e = a(486631).pZ({
                                        environment: o,
                                        blocks: i,
                                        transaction: n
                                    });
                                    e && ((0, a(663123).l)(a(962299).A.formatMessage(u.blockIndented, {
                                        count: e.length
                                    })), (0, a(854924).t)({
                                        environment: o,
                                        stores: e
                                    }))
                                }
                            }
                        })
                    }
                }),
                z = (0, a(233319).Fw)({
                    key: "subitemIndent",
                    analyticsName: "Toggle By Indent",
                    displayName: void 0,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(734533).c, a(993186).$, P, M],
                    shortcuts: ["tab"],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.subitemIndent",
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            environment: t,
                            canUndo: !0,
                            perform: o => {
                                a(112944).RJ({
                                    environment: t,
                                    transaction: o,
                                    blocks: e,
                                    action: "indentSelfAndSubtree"
                                })
                            }
                        })
                    }
                }),
                q = (0, a(233319).Fw)({
                    key: "unindent",
                    analyticsName: "Unindent",
                    displayName: void 0,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(734533).c, (0, a(572251).A)(a(993186).$)],
                    shortcuts: ["untab"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        var o;
                        let n = null == t || null == (o = t.spaceStore) ? void 0 : o.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.unindent",
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            environment: e,
                            canUndo: !0,
                            perform: t => {
                                var o = e,
                                    n = t;
                                let i = a(584265).default.state.stores;
                                if (i.length > 0) {
                                    let e = a(486631).Y1({
                                        environment: o,
                                        blocks: i,
                                        transaction: n
                                    });
                                    e && ((0, a(663123).l)(a(962299).A.formatMessage(u.blockOutdented, {
                                        count: e.length
                                    })), (0, a(854924).t)({
                                        environment: o,
                                        stores: e
                                    }))
                                }
                            }
                        })
                    }
                }),
                W = (0, a(233319).Fw)({
                    key: "subitemUnindent",
                    analyticsName: "Toggle By Unindent",
                    displayName: void 0,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(734533).c, a(993186).$, P, M],
                    shortcuts: ["untab"],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.subitemUnindent",
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            environment: t,
                            canUndo: !0,
                            perform: o => {
                                a(112944).RJ({
                                    environment: t,
                                    transaction: o,
                                    blocks: e,
                                    action: "unindentSelf"
                                })
                            }
                        })
                    }
                }),
                G = (0, a(233319).Fw)({
                    key: "escape",
                    analyticsName: "Escape",
                    displayName: void 0,
                    validators: [(0, a(572251).A)(I)],
                    shortcuts: ["esc"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        (0, a(998095).P)(e), (0, a(471e3).I)({
                            environment: e
                        }), a(270912).nJ(e),
                            function(e) {
                                let {
                                    environment: t,
                                    source: o = "keyboard_shortcut"
                                } = e;
                                if (!(0, a(828560).hw)() || "sidebar" !== a(562733).zI.state.chatPanelMode) return;
                                let n = (0, a(548124).getChatPanelState)(t);
                                (null == n ? void 0 : n.isOpen) === !0 && (0, a(705059).z)({
                                    environment: t,
                                    source: o
                                })
                            }({
                                environment: e
                            }), a(563591).default.dismissTourTutorial()
                    }
                }),
                X = (0, a(233319).Fw)({
                    key: "escape",
                    analyticsName: "Quick Search Escape",
                    displayName: void 0,
                    validators: [I],
                    shortcuts: ["esc"],
                    closeParentMenu: !0,
                    action: () => {
                        a(661238).Ay.state.query.text.length > 0 ? a(661238).Ay.updateQueryText("") : (0, a(909718).y)()
                    }
                }),
                H = (0, a(233319).Fw)({
                    key: "select all",
                    analyticsName: "Select all",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["selectAll"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        (0, a(295910).U)(e)
                    }
                }),
                Q = (0, a(233319).Fw)({
                    key: "cut",
                    analyticsName: "Cut",
                    displayName: void 0,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(573953).o],
                    shortcuts: ["cut"],
                    closeParentMenu: !0,
                    lazyDependencyKeys: ["clipboardActions", "markdownLinkifyIt"],
                    action: ({
                        environment: e
                    }, t) => {
                        let o = (0, a(968864).Y)("clipboardActions"),
                            n = (0, a(968864).Y)("markdownLinkifyIt");
                        o && t && (0, a(601119).N)(t) && o.cutWithMaybeConfirmation({
                            environment: e,
                            event: t,
                            markdownLinkifyIt: n
                        })
                    }
                }),
                j = (0, a(233319).Fw)({
                    key: "copy",
                    analyticsName: "Copy",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["copy"],
                    closeParentMenu: !0,
                    lazyDependencyKeys: ["clipboardActions", "markdownLinkifyIt"],
                    action: ({
                        environment: e
                    }, t) => {
                        let o = (0, a(968864).Y)("clipboardActions"),
                            n = (0, a(968864).Y)("markdownLinkifyIt");
                        o && t && (0, a(601119).N)(t) && o.copy({
                            environment: e,
                            event: t,
                            markdownLinkifyIt: n
                        })
                    }
                });
            async function J(e, t, o) {
                let [n, i, r] = await Promise.all([(0, a(969899).jd)(), a(235645).R.clipboardActions.load(), (0, a(161333).r)()]), l = (0, a(265255).d)();
                if (l) return void e(i)({
                    environment: t,
                    blockStore: l,
                    callback: o
                });
                let s = function(e) {
                    let {
                        route: t
                    } = e.RouterStore.state;
                    if (t && "marketplace" === t.name && "templates" === t.pageType && t.slug) return (0, a(97266).sO)(t.slug, t)
                }(t);
                if (s) return void n({
                    environment: t,
                    stringValue: s,
                    copiedMessage: r.copiedLinkToClipboard
                }).then(o);
                let c = function(e) {
                    let {
                        route: t
                    } = e.RouterStore.state;
                    if (t && "agent" === t.name) return window.location.href
                }(t);
                c && n({
                    environment: t,
                    stringValue: c,
                    copiedMessage: r.copiedLinkToClipboard
                }).then(o)
            }
            let $ = (0, a(233319).Fw)({
                    key: "copy link to current page",
                    displayName: a(233319).AY.copyLinkNavigableTypeName,
                    analyticsName: a(233319).AY.copyLinkNavigableTypeName.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [a(595474).b, (0, a(572251).A)(a(804043).o)],
                    shortcuts: ["copyLinkToCurrentPage"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_block_link"
                    },
                    action: (e, {
                        environment: t
                    }, a) => J(e => e.copyLinkToBlock, t, e)
                }),
                Z = (0, a(233319).Fw)({
                    key: "copy linkified page title to current page",
                    displayName: T.copyFormattedLinkNavigableTypeName,
                    analyticsName: T.copyFormattedLinkNavigableTypeName.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [],
                    shortcuts: ["copyCurrentPageLinkifiedBlockTitle"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_block_link"
                    },
                    action: (e, {
                        environment: t
                    }, a) => J(e => e.copyFormattedLinkToBlock, t, e)
                }),
                ee = (0, a(233319).Fw)({
                    key: "paste",
                    displayName: T.pasteName,
                    analyticsName: T.pasteName.defaultMessage,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(573953).o, a(26313).M],
                    shortcuts: ["paste"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "paste"
                    },
                    lazyDependencyKeys: ["clipboardActions", "formulasModule", "markdownLinkifyIt", "tinyMceMicrosoftWordPasteFilter"],
                    action: (e, {
                        environment: t,
                        pageContext: o
                    }, n) => {
                        var i;
                        let r = (0, a(968864).Y)("clipboardActions"),
                            l = (0, a(968864).Y)("formulasModule"),
                            s = (0, a(968864).Y)("markdownLinkifyIt"),
                            c = (0, a(968864).Y)("tinyMceMicrosoftWordPasteFilter");
                        if (!n || !(0, a(601119).N)(n) || !r) return;
                        let d = null == o || null == (i = o.spaceStore) ? void 0 : i.id,
                            {
                                serverCommitResult: u,
                                transactionId: p
                            } = (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.paste",
                                environment: t,
                                cellTarget: d ? {
                                    spaceWithId: d
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    r.paste({
                                        environment: t,
                                        event: n,
                                        disableEmbedMenu: !0,
                                        transaction: e,
                                        onPasteFiles: r.pasteFilesForBlocks,
                                        formulasModule: l,
                                        markdownLinkifyIt: s,
                                        tinyMceMicrosoftWordPasteFilter: c,
                                        spaceStore: (0, a(888).$)(o)
                                    })
                                }
                            });
                        return e.setMetadata({
                            transactionId: p
                        }), u.then(e)
                    }
                }),
                et = (0, a(233319).Fw)({
                    key: "move up",
                    displayName: T.moveUpName,
                    analyticsName: T.moveUpName.defaultMessage,
                    validators: [a(998256).p, a(734533).c, (0, a(572251).A)(a(993186).$)],
                    shortcuts: ["moveUp"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        var o;
                        let n = null == t || null == (o = t.spaceStore) ? void 0 : o.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.moveUp",
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            environment: e,
                            canUndo: !0,
                            perform: t => {
                                p({
                                    environment: e,
                                    transaction: t
                                })
                            }
                        })
                    }
                }),
                ea = (0, a(233319).Fw)({
                    key: "move down",
                    displayName: T.moveDownName,
                    analyticsName: T.moveDownName.defaultMessage,
                    validators: [a(998256).p, a(734533).c, (0, a(572251).A)(a(993186).$)],
                    shortcuts: ["moveDown"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        pageContext: t
                    }) => {
                        var o;
                        let n = null == t || null == (o = t.spaceStore) ? void 0 : o.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.moveDown",
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            environment: e,
                            canUndo: !0,
                            perform: t => {
                                m({
                                    environment: e,
                                    transaction: t
                                })
                            }
                        })
                    }
                }),
                eo = (0, a(233319).Fw)({
                    key: "property visibility",
                    displayName: T.propertyVisibilityLabel,
                    analyticsName: T.propertyVisibilityLabel.defaultMessage,
                    shortcuts: ["togglePropertyVisibility"],
                    validators: [a(998256).p, (0, a(572251).A)(a(533301).K)],
                    closeParentMenu: !0,
                    action: e => {
                        let t = Object.values(a(475097).default.state.open ? a(120025).A6.state.pagePropertiesStoreMap : a(120025).Ep.state.pagePropertiesStoreMap),
                            o = a(475097).default.state.open ? a(475097).default.state.targetStore : a(728372).AppStoreMainEditorCurrentBlockStore.state;
                        if (!o) return;
                        let n = o.getAssociatedCollectionStore();
                        if (!n) return;
                        let r = t.every(e => e.state.forceShowProperties),
                            l = (null == n ? void 0 : n.getNormalizedPropertyGroups()) ? ? [],
                            s = l.every(e => i().A.isPropertyGroupExpanded({
                                groupId: e.id
                            })),
                            c = !r || !s;
                        for (let e of t) e.setState({ ...e.state,
                            forceShowProperties: c
                        });
                        for (let e of l) i().A.setPropertyGroupExpandedOverride({
                            groupId: e.id,
                            override: c ? "open" : "closed"
                        })
                    }
                }),
                en = (0, a(233319).Fw)({
                    key: "enter",
                    displayName: T.enterName,
                    analyticsName: T.enterName.defaultMessage,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v)],
                    shortcuts: ["enter"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        blocks: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.enter",
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            environment: e,
                            canUndo: !0,
                            perform: e => {
                                ! function(e) {
                                    let {
                                        blocks: t
                                    } = e, o = t[0];
                                    if (o) {
                                        let t = a(240414).T.findSelectableFromStore(o);
                                        t && t.props.onEnter && t.props.onEnter(e)
                                    }
                                }({
                                    blocks: t,
                                    transaction: e
                                })
                            }
                        })
                    }
                }),
                ei = (0, a(233319).Fw)({
                    key: "activate",
                    analyticsName: "Activate",
                    displayName: void 0,
                    validators: [a(998256).p, function(e) {
                        return e.blocks.some(e => !!a(496704).K.findBlockFromStoreWithMethod(e, "activate"))
                    }],
                    shortcuts: ["commandEnter"],
                    closeParentMenu: !0,
                    action: e => {
                        let t;
                        e.blocks.find(e => {
                            let o = a(496704).K.findBlockFromStoreWithMethod(e, "activate");
                            return !!o && (t = o, !0)
                        }), t && t.activate && t.activate()
                    }
                }),
                er = (0, a(233319).Fw)({
                    key: "open tab",
                    analyticsName: "open tab",
                    displayName: void 0,
                    validators: [function(e) {
                        if (1 !== e.blocks.length) return !1;
                        let t = e.blocks.at(0);
                        if (!t) return !1;
                        let o = t.getParentStore();
                        return !!o && o.table === a(832375).evP && o.isType(a(955630).xd.tab)
                    }],
                    shortcuts: ["commandEnter"],
                    closeParentMenu: !0,
                    action: e => {
                        e.blocks.forEach(t => {
                            let o = t.getParentStore();
                            o && o.table === a(832375).evP && o.getType() === a(955630).xd.tab && a(667145).cN({
                                store: o,
                                id: t.id,
                                currentUserId: e.environment.currentUser.id
                            })
                        })
                    }
                }),
                el = (0, a(233319).Fw)({
                    key: "toggle sidebar",
                    analyticsName: "Toggle sidebar",
                    displayName: void 0,
                    validators: [(0, a(572251).A)(function() {
                        return a(930179).default.state.open
                    })],
                    shortcuts: ["toggleSidebar"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => (0, a(16822).h)({
                        environment: e,
                        isExpanded: !a(984858).sidebarExpandedStore.state,
                        from: "keyboard_shortcut",
                        saveDetailsSidebarPreference: !0
                    })
                }),
                es = (0, a(233319).Fw)({
                    key: "toggle update sidebar",
                    analyticsName: "Toggle update sidebar",
                    displayName: void 0,
                    validators: [],
                    shortcuts: ["toggleUpdateSidebar"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        if (a(475097).default.state.open) {
                            let t = a(82702).A.getPanelState("peek"),
                                o = a(475097).default.state.targetStore,
                                n = null == o ? void 0 : o.getAssociatedCollectionStore();
                            if (!n) return;
                            let i = n.getLayoutStore();
                            if (!i) return;
                            t.isOpen ? (0, a(127789).F)({
                                environment: e,
                                layoutStore: i,
                                from: "keyboard_default",
                                panelLocation: "peek"
                            }) : (0, a(127789).j)({
                                environment: e,
                                layoutStore: i,
                                from: "keyboard_default",
                                panelLocation: "peek"
                            });
                            return
                        }(0, a(911046).u)({
                            environment: e,
                            isExpanded: !(0, a(953099).N)(e),
                            from: "keyboard_default",
                            saveDetailsSidebarPreference: !0
                        })
                    }
                }),
                ec = (0, a(233319).Fw)({
                    key: "open link annotation menu",
                    displayName: T.createLinkName,
                    analyticsName: T.createLinkName.defaultMessage,
                    validators: [a(653601).c, a(696388).T, function() {
                        return !((0, a(816893).y)(a(247438).Ifu.User) || (0, a(816893).y)(a(247438).Ifu.Bot) || (0, a(816893).y)(a(247438).Ifu.Date) || (0, a(816893).y)(a(247438).Ifu.Page))
                    }, a(573953).o, (0, a(572251).A)(a(442284).P)],
                    shortcuts: ["openLinkMenuOrOpenSearch"],
                    closeParentMenu: !0,
                    action: () => a(280546).fi({
                        type: "focusOnly",
                        focus: !0
                    })
                }),
                ed = (0, a(233319).Fw)({
                    key: "exit app",
                    analyticsName: "Exit app",
                    displayName: void 0,
                    validators: [(0, a(572251).A)(A), a(983397).m],
                    shortcuts: ["backbutton"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        if (e.mobileNative)
                            if ((0, a(318355).A)(e)) {
                                let {
                                    TabbedRouterStore: t
                                } = e;
                                "home" !== t.state.activeTab ? (0, a(451908).s)({
                                    environment: e,
                                    tab: "home",
                                    navigationAction: "pop",
                                    navigationSource: "mobile-back-navigation"
                                }) : e.mobileNative.exitApp()
                            } else e.mobileNative.exitApp()
                    }
                }),
                eu = (0, a(233319).Fw)({
                    key: "command left",
                    analyticsName: "Go back",
                    displayName: void 0,
                    validators: [A, (0, a(572251).A)(a(653601).c)],
                    shortcuts: ["commandLeft"],
                    closeParentMenu: !0,
                    action: (e, t) => (0, a(381057).a)(e.environment)
                }),
                ep = (0, a(233319).Fw)({
                    key: "command right",
                    analyticsName: "Go forward",
                    displayName: void 0,
                    validators: [w, (0, a(572251).A)(a(653601).c)],
                    shortcuts: ["commandRight"],
                    closeParentMenu: !0,
                    action: e => (0, a(964357).s)(e.environment)
                }),
                em = (0, a(233319).Fw)({
                    key: "go back",
                    analyticsName: "Go back",
                    displayName: void 0,
                    validators: [A],
                    shortcuts: ["goBack", "backbutton"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => (0, a(381057).a)(e)
                }),
                ey = (0, a(233319).Fw)({
                    key: "go forward",
                    analyticsName: "Go forward",
                    displayName: void 0,
                    validators: [w],
                    shortcuts: ["goForward"],
                    closeParentMenu: !0,
                    action: e => (0, a(964357).s)(e.environment)
                }),
                ev = (0, a(233319).Fw)({
                    key: "go up",
                    analyticsName: "Go up",
                    displayName: void 0,
                    validators: [() => {
                        let e;
                        return !!(e = a(728372).AppStoreMainEditorCurrentBlockStore.state) && !!(0, a(637306).N)(e, 1)
                    }],
                    shortcuts: ["goUp"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => (function(e) {
                        let t = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                        if (!t) return;
                        let o = (0, a(637306).N)(t, 1);
                        o && (0, a(545586).navigateToBlock)({
                            environment: e,
                            store: a(970831).B.createChildStore(o, o.pointer),
                            pageVisitSource: a(254656).y8.Breadcrumb
                        })
                    })(e)
                }),
                ef = (0, a(233319).Fw)({
                    key: "open settings",
                    analyticsName: "Open settings",
                    displayName: void 0,
                    validators: [a(595474).b, a(457547).u],
                    shortcuts: ["settings"],
                    closeParentMenu: !0,
                    action: e => {
                        a(599754).Ow()
                    }
                }),
                eg = (0, a(233319).Fw)({
                    key: "new page",
                    analyticsName: "New page",
                    displayName: void 0,
                    validators: [function() {
                        let e = a(728372).AppStoreSidebarSpaceStore.state;
                        return !!(e && e.canEdit())
                    }, a(26313).M, (0, a(515914).or)([a(595474).b, a(341133).w]), (0, a(572251).A)(function({
                        environment: e
                    }) {
                        return (0, a(882061).J)({
                            environment: e
                        })
                    })],
                    shortcuts: ["newPage"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        if ((0, a(828560).hw)()) return void(a(685284).q.state.open ? a(685284).q.close() : a(685284).q.open());
                        let t = "open" === a(562733).zI.state.chatPanelVisibility,
                            o = document.querySelector('[data-testid="ai-sidebar-chat"]'),
                            n = (null == o ? void 0 : o.contains(document.activeElement)) ? ? !1;
                        t && n ? (0, a(701513).D)(e) : (0, a(323836).M)({
                            environment: e,
                            from: "cmd_n"
                        })
                    }
                }),
                ek = (0, a(233319).Fw)({
                    key: "turn into type",
                    displayName: a(233319).AY.turnIntoName,
                    analyticsName: a(233319).AY.turnIntoName.defaultMessage,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(211129).Y, a(689441).p],
                    shortcuts: ["turnIntoType"],
                    closeParentMenu: !0,
                    track: {
                        actionName: "turn_into"
                    },
                    action: async (e, {
                        blocks: t,
                        environment: n,
                        pageContext: i
                    }, r) => {
                        var l;
                        let s = await (0, a(411648).zQ)();
                        if (!r || !(0, a(601119).k)(r)) return;
                        r.preventDefault();
                        let c = parseInt(o()(r.keyCode)),
                            d = a(955630).zx[c],
                            u = null == i || null == (l = i.spaceStore) ? void 0 : l.getSpaceId(),
                            {
                                serverCommitResult: p,
                                transactionId: m
                            } = (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.turnIntoTypeViaKeyboard",
                                environment: n,
                                cellTarget: u ? {
                                    spaceWithId: u
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    s({
                                        environment: n,
                                        blocks: t,
                                        blockType: d,
                                        transaction: e
                                    })
                                }
                            });
                        return e.setMetadata({
                            transactionId: m
                        }), p.then(e)
                    }
                }),
                eS = [C({
                    key: "toggle bold",
                    displayName: T.boldName,
                    analyticsName: T.boldName.defaultMessage,
                    shortcuts: ["toggleBold"],
                    annotation: ["b"]
                }), C({
                    key: "toggle italics",
                    displayName: T.italicName,
                    analyticsName: T.italicName.defaultMessage,
                    shortcuts: ["toggleItalics"],
                    annotation: ["i"]
                }), C({
                    key: "toggle strike",
                    displayName: T.strikeThroughName,
                    analyticsName: T.strikeThroughName.defaultMessage,
                    shortcuts: ["toggleStrike"],
                    annotation: ["s"]
                }), C({
                    key: "toggle underline",
                    displayName: T.underlineName,
                    analyticsName: T.underlineName.defaultMessage,
                    shortcuts: ["toggleUnderline"],
                    annotation: [a(247438).Ifu.Underline]
                })],
                eh = (0, a(233319).Fw)({
                    key: "toggle dark mode",
                    displayName: T.darkModeName,
                    analyticsName: T.darkModeName.defaultMessage,
                    validators: [],
                    shortcuts: ["toggleDarkMode"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        let t = "light" === e.ThemeStore.state.mode ? "dark" : "light";
                        a(997524).C5(t)
                    }
                }),
                eN = (0, a(233319).Fw)({
                    key: "open peek view as page",
                    displayName: T.openAsPageName,
                    analyticsName: T.openAsPageName.defaultMessage,
                    validators: [a(668400).G],
                    shortcuts: ["commandEnter"],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        a(475097).default.peekTargetStore.state && (0, a(545586).navigateToBlock)({
                            environment: e,
                            store: a(475097).default.peekTargetStore.state,
                            pageVisitSource: a(254656).y8.Expand
                        })
                    }
                });

            function eb(e) {
                return e.actions.filter(n).map(t => ({ ...t,
                    searchName: [e.title, t.displayName].filter(Boolean).join(" ")
                }))
            }
            let eM = (0, a(233319).Fw)({
                key: "toggle qna in corner",
                displayName: T.toggleQnAMessage,
                analyticsName: "toggleQnAPane",
                validators: [(0, a(515914).or)([() => (0, a(828294).a)("agent_writer"), (0, a(648903).U)([(0, a(572251).A)(F), ...a(49204).J])])],
                shortcuts: ["commandJ"],
                closeParentMenu: !0,
                action: async ({
                    environment: e
                }) => {
                    let {
                        RouterStore: t
                    } = e, {
                        route: o
                    } = t.state;
                    if ("chat" === o.name || "ai" === o.name) {
                        (0, a(828560).hw)() && (0, a(262118).Q)({
                            chatFeatureType: "slippery_slope"
                        });
                        return
                    }
                    let {
                        getIsChatPanelOpen: n
                    } = await a.e(81084).then(a.bind(a, 548124));
                    if (n(e)) {
                        let {
                            dismissChatSidebar: e
                        } = await a.e(81084).then(a.bind(a, 984107));
                        e()
                    } else {
                        let {
                            openChatPanel: t
                        } = await a.e(81084).then(a.bind(a, 358667));
                        t({
                            environment: e,
                            store: a(728372).AppStoreMainEditorCurrentBlockStore.state,
                            chatPanelState: {
                                isOpen: !0
                            },
                            source: "keyboard_shortcut"
                        })
                    }
                }
            });

            function eA() {
                return [g, k, a(479131).zo, ...a(467366).yj.actions, a(467366).As, a(887329).i, en, ei, a(93078).N, a(93078).S, er, a(612256).Sr, a(612256).EC, a(621792).Zm, a(621792).Lc, a(7316).U, a(7316).H, a(28653).Im, a(28653).pG, (0, a(964049).F)("keyboard_shortcut"), L, x, b, V, z, W, q, H, G, X, et, ea, Q, j, ee, K, E, R, O, eM, D, (0, a(36741).gS)(), a(986758).k, (0, a(36741).KV)(), ec, ed, em, ey, eu, ep, ev, a(47131).tw, a(47131).Yk, $, Z, ek, a(612256).NQ, a(612256).ET, Y, el, es, ef, eg, eh, eN, eo, U, _, r, ...eS, ...eb(a(993581).t3), ...eb(a(612678).kl)]
            }
        },
        964357: (e, t, a) => {
            a.d(t, {
                s: () => o
            });

            function o(e) {
                null != e && e.device.isElectron ? (0, a(295918).s)(e) : window.history.forward()
            }
        },
        982993: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o = () => a(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        siteSettingContentType: "initial"
                    }
                }
            }
            let i = new n
        },
        983397: (e, t, a) => {
            a.d(t, {
                m: () => o
            });

            function o({
                environment: {
                    device: e
                }
            }) {
                return e.isAndroid
            }
        }
    }
]);