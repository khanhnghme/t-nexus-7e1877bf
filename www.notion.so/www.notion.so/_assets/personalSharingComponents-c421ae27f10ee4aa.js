"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [84605], {
        154457: (e, t, i) => {
            i.d(t, {
                h: () => n
            });
            let n = (0, i(104509).xh)("plus", {
                default: {
                    loader: () => i.e(8881).then(i.bind(i, 581923))
                },
                small: {
                    loader: () => i.e(8881).then(i.bind(i, 638501))
                },
                fill: {
                    loader: () => i.e(8881).then(i.bind(i, 223759))
                },
                fillSmall: {
                    loader: () => i.e(8881).then(i.bind(i, 550246))
                }
            }, ["plus", "add", "new", "create", "increase"])
        },
        156555: (e, t, i) => {
            i.d(t, {
                X: () => n
            });

            function n(e) {
                return (0, i(682985).K8)(() => {
                    var t;
                    let i = null == (t = e.getState()) ? void 0 : t.dismissedExpiresAt,
                        n = Date.now();
                    return !!i && !!(i > n)
                }, [e])
            }
        },
        249567: (e, t, i) => {
            i.d(t, {
                CloseSharedSectionButton: () => a
            }), i(296540);
            var n = i(474848);

            function a() {
                return (0, n.jsx)(i(64960).Ay, {
                    onClick: () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "sharing_click_first_time_personal_sharing",
                                eventProperties: {
                                    type: "dismiss"
                                }
                            }
                        }), i(476003).H.setState({
                            dismissed: !0
                        })
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 20,
                        width: 20,
                        borderRadius: 4
                    },
                    children: (0, n.jsx)(i(708966).Q, {
                        iconGroup: i(438322).k,
                        colorVariant: "secondary",
                        variantName: "small"
                    })
                })
            }
        },
        700790: (e, t, i) => {
            i.d(t, {
                I: () => n
            });

            function n(e, t) {
                if (e === i(728372).AppStoreMainEditorCurrentBlockStore.state) {
                    let {
                        RouterStore: e
                    } = t, i = e.state.route;
                    if ("page" === i.name) return i.collectionViewId
                }
            }
        },
        719086: (e, t, i) => {
            i.d(t, {
                EmptySharedSidebarSection: () => o
            });
            var n = i(296540),
                a = i(474848);
            let s = {
                sidebarItem: {
                    color: i(632079).Tj.sidebarSecondaryColor
                },
                hovered: {
                    background: i(632079).Tj.sidebarItemSelectedBackground
                }
            };

            function o() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(156555).X)(i(476003).H),
                    o = (0, n.useRef)(!1),
                    l = async () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "sharing_click_first_time_personal_sharing",
                                eventProperties: {
                                    type: "click"
                                }
                            }
                        }), await (0, i(323836).M)({
                            environment: e,
                            from: "sidebar_empty_shared_section",
                            pageVisitSource: i(254656).y8.SharingEmptySidebarSection,
                            callback: () => {
                                (0, i(729619).Tk)({
                                    environment: e
                                })
                            }
                        })
                    };
                return ((0, n.useEffect)(() => {
                    o.current || ((0, i(104310).u)({
                        event: {
                            eventName: "sharing_click_first_time_personal_sharing",
                            eventProperties: {
                                type: "show"
                            }
                        }
                    }), o.current = !0)
                }, [e]), t) ? null : (0, a.jsx)(i(64960).Ay, {
                    style: i(132261).DX.baseSidebarItem,
                    hoveredStyle: s.hovered,
                    onClick: l,
                    children: (0, a.jsx)(i(380559).u, {
                        style: s.sidebarItem,
                        left: (0, a.jsx)(i(708966).Q, {
                            iconGroup: i(154457).h,
                            colorPalette: "gray",
                            colorVariant: "accentPrimary",
                            variantName: "small"
                        }),
                        children: (0, a.jsx)(i(109939).sA, {
                            defaultMessage: "Start collaborating",
                            id: "sidebar.startCollaborating.tooltip"
                        })
                    })
                })
            }
        },
        729619: (e, t, i) => {
            i.d(t, {
                XP: () => s,
                T: () => o,
                Tk: () => a,
                YG: () => r,
                jW: () => l,
                Zp: () => c
            }), i(898992), i(354520), i(581454), i(296540);
            var n = i(474848);

            function a(e) {
                var t;
                let {
                    environment: n,
                    store: a
                } = e;
                i(218744).default.getEligibleGroup({
                    experimentId: "adoption_aa_page_share_menu"
                }), i(880853).Ay.reset(), i(475097).default.state.open ? i(344476).A.setState({ ...i(344476).A.state,
                    open: !0
                }) : i(409614).A.setState({ ...i(409614).A.state,
                    open: !0
                }), t = {
                    share_menu_session_id: i(880853).Ay.state.sessionId,
                    ...a && a.table === i(832375).evP && a.isCollectionView() ? {
                        collection_view_block_id: a.id,
                        ...(0, i(633171).P)(a, {
                            skipPages: !1
                        })
                    } : {}
                }, (0, i(104310).u)({
                    event: {
                        eventName: "open_page_share",
                        eventProperties: t
                    }
                })
            }

            function s(e) {
                var t;
                let {
                    environment: n,
                    store: a
                } = e;
                i(475097).default.state.open ? i(344476).A.setState({ ...i(344476).A.state,
                    open: !1
                }) : i(409614).A.setState({ ...i(409614).A.state,
                    open: !1
                }), i(982993).A.setState({ ...i(982993).A.state,
                    siteSettingContentType: "initial"
                });
                let {
                    collection_view_block_id: s,
                    collection_view_id: o,
                    collection_id: l,
                    owned_collection_count: r,
                    linked_collection_count: c
                } = (() => {
                    if (a && a.table === i(832375).evP && a.isCollectionView()) {
                        let e = (0, i(633171).P)(a, {
                            skipPages: !1
                        });
                        return {
                            collection_view_block_id: a.id,
                            collection_view_id: (0, i(700790).I)(a, n),
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
                    share_menu_session_id: i(880853).Ay.state.sessionId,
                    collection_id: l,
                    collection_view_id: o,
                    collection_view_block_id: s,
                    owned_collection_count: r,
                    linked_collection_count: c
                }, (0, i(104310).u)({
                    event: {
                        eventName: "close_page_share",
                        eventProperties: t
                    }
                })
            }
            async function o(e) {
                let {
                    inviteTargetsStore: t
                } = e, a = (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationMessage",
                    defaultMessage: "Your changes have not been saved. Discard changes?"
                }), s = (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationButton.label",
                    defaultMessage: "Yes"
                }), o = (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.closeInviteDialog.cancelButton.label",
                    defaultMessage: "Cancel"
                });
                return t.state.inviteTargets.length > 0 && (await i(647095).Gh({
                    message: a,
                    acceptLabel: s,
                    cancelLabel: o
                })).accept
            }

            function l(e) {
                let t = i(880853).Ay.state;
                (t.display === i(880853).pP.Invite || t.display === i(880853).pP.AddInviteMessage) && i(880853).Ay.setState({ ...t,
                    selectedBlockRole: e
                })
            }

            function r(e) {
                let t = i(880853).Ay.state;
                (t.display === i(880853).pP.Invite || t.display === i(880853).pP.AddInviteMessage) && i(880853).Ay.setState({ ...t,
                    canCreatePagesInCollection: e
                })
            }

            function c(e) {
                let t = i(880853).Ay.state;
                (t.display === i(880853).pP.Invite || t.display === i(880853).pP.AddInviteMessage) && i(880853).Ay.setState({ ...t,
                    userSelectedCreatorRole: e
                })
            }
        },
        982993: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var n = () => i(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        siteSettingContentType: "initial"
                    }
                }
            }
            let s = new a
        }
    }
]);