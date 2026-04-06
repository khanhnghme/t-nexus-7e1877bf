"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [83778], {
        8542: (e, t, s) => {
            s.d(t, {
                R: () => i
            });

            function i(e) {
                var t;
                let s = null == (t = function(e) {
                    if ((null == e ? void 0 : e.type) === "subscribed_admin" || (null == e ? void 0 : e.type) === "unsubscribed_admin") return e
                }(e)) || null == (t = t.customerData) ? void 0 : t.stripe;
                if (void 0 !== s && "plan" in s && void 0 !== s.plan) return s
            }
        },
        11365: (e, t, s) => {
            s.d(t, {
                H: () => a
            }), s(296540);
            var i = s(474848);
            let n = {
                noAccessSummary: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: s(632079).Tj.text.secondary
                },
                noAccessRight: {
                    color: s(632079).Tj.text.secondary,
                    fontSize: 12
                }
            };

            function a(e) {
                let {
                    noAccessPageCount: t,
                    ...a
                } = e;
                return (0, i.jsx)(s(498341).u, { ...a,
                    title: (0, i.jsxs)("div", {
                        style: n.noAccessSummary,
                        children: [(0, i.jsx)(s(16275).I, {
                            icon: s(714021).C
                        }), (0, i.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.noAccessSummary",
                            defaultMessage: "{count, plural, one {# shared or private page} other {# shared or private pages}}",
                            values: {
                                count: t
                            }
                        })]
                    }),
                    right: (0, i.jsx)("div", {
                        style: n.noAccessRight,
                        children: (0, i.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.noAccessSummaryTag",
                            defaultMessage: "No access"
                        })
                    })
                })
            }
        },
        81930: (e, t, s) => {
            s.d(t, {
                D: () => o,
                P: () => a
            }), s(16280), s(581454), s(296540);
            var i = s(474848);
            let n = (0, s(109939).YK)({
                removingGuest: {
                    id: "convertGuestToMember.removeGuest.updatingMessage",
                    defaultMessage: "Updating…"
                },
                convertingGuest: {
                    id: "convertGuestToMember.convertingGuest.updatingMessage",
                    defaultMessage: "Updating…"
                }
            });
            async function a(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    membershipType: o,
                    guestUserStore: r
                } = e, l = r.id, u = r.getEmail();
                try {
                    if (s(262058).m({
                            message: n.convertingGuest
                        }), !a.isTeamsEnabled() && !await s(821969).oH({
                            environment: t,
                            flowId: "",
                            trackCreateTeamComplete: !1
                        })) return;
                    let i = [{
                            type: "user",
                            userId: l,
                            membershipType: o,
                            inviteId: void 0
                        }],
                        {
                            serverCommitResult: r
                        } = (0, s(377796).createAndCommit)({
                            userAction: "spacePerimssionGuestActions.convertGuestToMember",
                            environment: t,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: a.id
                            },
                            perform: e => {
                                (0, s(73888).y)({
                                    environment: t,
                                    spaceStore: a,
                                    actors: i,
                                    transaction: e
                                })
                            }
                        });
                    await r, s(287621).gc(t, {
                        member_user_id: l,
                        convert_to: "owner" === o ? "admin" : "member",
                        origin: e.origin
                    }), s(179701).Jg(t, {
                        role: (0, s(729052).ps)(o),
                        is_space: !0,
                        invite_targets: [{
                            type: "existingUser",
                            value: {
                                id: l,
                                version: 0,
                                email: ""
                            },
                            membershipType: "none"
                        }],
                        is_onboarding: !1,
                        invite_origin: "convert_to_member",
                        permission_items: i.map(e => (0, s(283161).z)(e)),
                        invite_message_length: 0,
                        domainType: (0, s(904434).FX)()
                    })
                } catch (e) {
                    s(436555).D6({
                        label: (0, i.jsx)(s(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.snackbar.failure",
                            defaultMessage: "Failed to convert {email} to workspace member",
                            values: {
                                email: u
                            }
                        })
                    })
                } finally {
                    await s(371151).nO({
                        environment: t,
                        spaceStore: a
                    }), s(262058).V()
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    guestUserStore: o
                } = e, r = o.id, l = o.getEmail();
                try {
                    s(262058).m({
                        message: n.removingGuest
                    });
                    let e = await t.api.callApi({
                        eventName: "removeUsersFromSpace",
                        environment: t,
                        data: {
                            userIds: [r],
                            spaceId: a.id,
                            removePagePermissions: !0,
                            revokeUserTokens: !1
                        }
                    });
                    if ("success" === e.type) s(287621).wX(t);
                    else throw Error("Failed to remove guest")
                } catch (e) {
                    s(436555).D6({
                        label: (0, i.jsx)(s(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.snackbar.failure",
                            defaultMessage: "Failed to remove {email} from workspace",
                            values: {
                                email: l
                            }
                        })
                    })
                } finally {
                    await s(371151).nO({
                        environment: t,
                        spaceStore: a
                    }), s(262058).V(), s(287621).xO(t, {
                        origin: "space_setting_guest_tab",
                        changedNumber: -1
                    })
                }
            }
        },
        209590: (e, t, s) => {
            s.d(t, {
                Z: () => o
            }), s(296540);
            var i = s(474848);
            let n = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                a = {
                    position: "relative"
                };

            function o(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: o,
                    iconColorVariant: r = "secondary",
                    title: l,
                    variantName: u = "default"
                } = e;
                return t || l ? (0, i.jsxs)(s(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...a
                    },
                    children: [t ? (0, i.jsx)(s(708966).Q, {
                        iconGroup: t,
                        colorPalette: o,
                        colorVariant: r,
                        variantName: u,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, l ? (0, i.jsx)(s(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: n,
                        children: l
                    }) : null]
                }) : null
            }
        },
        309044: (e, t, s) => {
            function i(e) {
                if (s(381453).sb(e).length <= 3) return {
                    success: !1,
                    reason: {
                        type: "password_too_consistent"
                    }
                };
                if (e.length >= 15) return {
                    success: !0
                };
                if (e.length < 8) return {
                    success: !1,
                    reason: {
                        type: "password_too_short"
                    }
                };
                let t = n(e),
                    i = a(e);
                return t && i ? {
                    success: !0
                } : t || i ? i ? t ? {
                    success: !1,
                    reason: {
                        type: "password_too_short"
                    }
                } : {
                    success: !1,
                    reason: {
                        type: "password_missing_letter"
                    }
                } : {
                    success: !1,
                    reason: {
                        type: "password_missing_number"
                    }
                } : {
                    success: !1,
                    reason: {
                        type: "password_missing_letter_and_number"
                    }
                }
            }

            function n(e) {
                return e.match(/[a-z]/i)
            }

            function a(e) {
                return e.match(/\d/)
            }
            s.d(t, {
                ZK: () => i,
                aC: () => n,
                lO: () => a
            })
        },
        314084: (e, t, s) => {
            s.d(t, {
                t: () => a
            }), s(296540);
            var i = s(474848);
            let n = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function a(e) {
                let {
                    children: t,
                    footer: a,
                    header: o,
                    showDismissButton: r = !0,
                    sizeRange: l,
                    gap: u = 24
                } = e;
                return (0, i.jsxs)(s(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == l ? void 0 : l.minHeight,
                    maxHeight: null == l ? void 0 : l.maxHeight,
                    minWidth: null == l ? void 0 : l.minWidth,
                    maxWidth: null == l ? void 0 : l.maxWidth,
                    gap: u,
                    style: n,
                    className: "autolayout-fill-width",
                    children: [(0, i.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: o
                    }), t ? (0, i.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, i.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, a ? (0, i.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: a
                    }) : null, r ? (0, i.jsx)(s(226512).R, {}) : null]
                })
            }
        },
        361637: (e, t, s) => {
            s.d(t, {
                V: () => a
            }), s(944114), s(898992), s(803949), s(581454);
            var i = s(296540),
                n = s(474848);

            function a({
                spaceStore: e,
                guestStore: t,
                isSubscribed: o,
                guestPageIds: r,
                hideActionButtons: u,
                children: d,
                menuWidth: c
            }) {
                let p = (0, s(682985).uB)(void 0, s(510969).A),
                    m = (0, i.useCallback)(() => (0, n.jsx)(l, {
                        spaceStore: e,
                        guestStore: t,
                        isSubscribed: o,
                        guestPageIds: r,
                        hideActionButtons: u,
                        buttonPopupStore: p,
                        menuWidth: c
                    }), [e, t, o, r, u, p, c]);
                return ((0, s(682985).K8)(() => r.map(t => {
                    s(970831).B.createChildStore(e, {
                        table: s(832375).evP,
                        id: t
                    }).load()
                }), [e, r]), 0 === r.length) ? (0, n.jsx)(s(988022).p, {
                    disabled: !0,
                    children: (0, n.jsx)(s(109939).sA, {
                        id: "guestPagesPopup.permissionsForUserGuest.label",
                        defaultMessage: "Guest"
                    })
                }) : (0, n.jsx)(s(656252).A, {
                    popupType: s(986939).A.isMobile ? s(423291).n.BottomSheet : s(423291).n.Popup,
                    buttonPopupStore: p,
                    content: m,
                    children: e => d ? d(e) : (0, n.jsx)(s(988022).p, { ...e,
                        iconTrailing: {
                            icon: s(595453).arrowChevronSingleDownSmallIcon,
                            colorVariant: "tertiary",
                            size: "xs"
                        },
                        children: (0, n.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.page",
                            defaultMessage: "{numberOfAccessiblePages, plural, one {{numberOfAccessiblePages} page} other {{numberOfAccessiblePages} pages}}",
                            values: {
                                numberOfAccessiblePages: r.length
                            }
                        })
                    })
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    guestStore: n,
                    isSubscribed: a,
                    buttonPopupStore: o
                } = e;
                o.setState({ ...o.state,
                    open: !1
                }), await s(81930).P({
                    environment: t,
                    guestUserStore: n,
                    membershipType: a ? "member" : "owner",
                    spaceStore: i,
                    origin: "guest_pages_popup"
                })
            }
            let r = {
                messageMenuItem: {
                    color: s(632079).Tj.text.secondary,
                    paddingInline: 12,
                    paddingTop: 8,
                    paddingBottom: 8
                },
                settingsMenuItem: {
                    color: s(632079).Tj.text.secondary,
                    padding: 8
                },
                divider: {
                    minHeight: 0
                },
                upgradeToMember: {
                    paddingBottom: 4,
                    paddingInline: 8
                },
                removeGuest: {
                    paddingInline: 8,
                    paddingBottom: 4,
                    color: s(632079).Tj.red.text.accentPrimary
                },
                inlineButton: {
                    width: "auto"
                },
                actionButtons: {
                    padding: 4
                }
            };

            function l({
                spaceStore: e,
                guestStore: t,
                isSubscribed: a,
                guestPageIds: u,
                hideActionButtons: d,
                buttonPopupStore: c,
                menuWidth: p
            }) {
                let m, g, v, {
                        navigate: h
                    } = (0, i.useContext)(s(44894).E),
                    x = (0, s(533992).v3)(),
                    f = (0, i.useCallback)(() => (function(e) {
                        let {
                            environment: t,
                            spaceStore: i,
                            guestStore: a,
                            buttonPopupStore: o
                        } = e;
                        s(647095).ui({
                            showCancel: !0,
                            keepFocus: !1,
                            message: (0, n.jsx)(s(109939).sA, {
                                id: "guestPagesPopup.removeGuestModal.confirmationMessage",
                                defaultMessage: "Are you sure you want to remove this person? They will lose access to all shared pages."
                            }),
                            items: [{
                                label: (0, n.jsx)(s(109939).sA, {
                                    id: "guestPagesPopup.removeGuestModal.removeButton.label",
                                    defaultMessage: "Remove"
                                }),
                                color: "red",
                                onAccept: async () => {
                                    o.setState({ ...o.state,
                                        open: !1
                                    }), await s(81930).D({
                                        environment: t,
                                        guestUserStore: a,
                                        spaceStore: i
                                    })
                                }
                            }]
                        })
                    })({
                        environment: x,
                        spaceStore: e,
                        guestStore: t,
                        buttonPopupStore: c
                    }), [x, e, t, c]),
                    w = (0, i.useCallback)(() => o({
                        environment: x,
                        spaceStore: e,
                        guestStore: t,
                        isSubscribed: a,
                        buttonPopupStore: c
                    }), [x, e, t, a, c]),
                    y = (0, s(682985).K8)(() => e.canEditMembership(), [e]),
                    {
                        noAccessGuestPageStores: b,
                        navigableGuestPageStores: A
                    } = function(e) {
                        let {
                            spaceStore: t,
                            guestPageIds: i
                        } = e;
                        return (0, s(682985).K8)(() => {
                            let e = [],
                                n = [];
                            return i.forEach(i => {
                                let a = s(970831).B.createChildStore(t, {
                                    table: s(832375).evP,
                                    id: i
                                });
                                a.canRead() ? n.push(a) : e.push(a)
                            }), {
                                noAccessGuestPageStores: e,
                                navigableGuestPageStores: n
                            }
                        }, [t, i])
                    }({
                        spaceStore: e,
                        guestPageIds: u
                    }),
                    _ = A.map(e => ({
                        key: e.id,
                        render: t => (0, n.jsx)(s(103558).A, { ...t,
                            store: e,
                            placeholder: (0, n.jsx)(s(109939).sA, {
                                id: "guestPagesPopup.privatePagePlaceholder",
                                defaultMessage: "Private page"
                            })
                        }),
                        action: () => {
                            h({
                                environment: x,
                                url: (0, s(483227).J8)({
                                    store: e,
                                    fullyQualified: !1,
                                    pageVisitSource: s(254656).y8.LinkInPage
                                }),
                                openInNew: "tab"
                            })
                        }
                    }));
                b.length > 0 && _.push({
                    key: "guest-pages-popup-no-access-summary",
                    render: e => (0, n.jsx)(s(11365).H, { ...e,
                        noAccessPageCount: b.length
                    }),
                    action: () => {}
                }), m = s(986939).A.isMobile ? {
                    menuType: s(649476).gu.ActionSheet
                } : {
                    menuType: s(649476).gu.Popup,
                    width: p ? ? 300
                };
                let M = (0, s(394810).h)(e),
                    P = (0, s(217844)._)({
                        name: "non_admin_members",
                        spaceId: e.id,
                        userId: x.currentUser.id
                    }),
                    j = (0, s(811656).e2)(P);
                M && (g = (0, n.jsx)(s(51831).m, {
                    content: () => j ? (0, n.jsx)(s(109939).sA, {
                        id: "guestPagesPopup.addMemberPermissionButton.tooltip",
                        defaultMessage: "This guest will become a member of this workspace."
                    }) : (0, n.jsx)(s(109939).sA, {
                        id: "guestPagesPopup.addAdminPermissionButton.tooltip",
                        defaultMessage: "This guest will become an admin of this workspace."
                    }),
                    children: e => (0, n.jsx)(s(95582).A, {
                        focused: !1,
                        icon: (0, n.jsx)(s(16275).I, {
                            icon: s(531718).arrowInCircleUpIcon
                        }),
                        title: j ? (0, n.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.addMemberPermissionButton.label",
                            defaultMessage: "Convert to member"
                        }) : (0, n.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.addAdminPermissionButton.label",
                            defaultMessage: "Convert to admin"
                        }),
                        style: r.upgradeToMember,
                        buttonStyle: r.inlineButton,
                        onClick: w,
                        ...e
                    })
                }), v = (0, n.jsx)(s(51831).m, {
                    content: () => (0, n.jsx)(s(109939).sA, {
                        id: "guestPagesPopup.removeGuestSettingsButton.tooltip",
                        defaultMessage: "This guest will be removed from the workspace"
                    }),
                    children: e => (0, n.jsx)(s(95582).A, {
                        focused: !1,
                        icon: (0, n.jsx)(s(16275).I, {
                            icon: s(117152).xMarkIcon
                        }),
                        title: (0, n.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.removeGuestPermissionButton.label",
                            defaultMessage: "Remove guest"
                        }),
                        style: r.removeGuest,
                        buttonStyle: r.inlineButton,
                        onClick: f,
                        ...e
                    })
                }));
                let S = !d && y;
                return (0, n.jsxs)(s(747369).A, { ...m,
                    children: [S ? (0, n.jsx)(s(498341).u, {
                        style: r.messageMenuItem,
                        title: 1 === _.length ? (0, n.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.guestHasAccessToSinglePageCaption",
                            defaultMessage: "Guest page"
                        }) : (0, n.jsx)(s(109939).sA, {
                            id: "guestPagesPopup.guestHasAccessToMultiplePagesCaption",
                            defaultMessage: "Guest pages"
                        })
                    }) : void 0, (0, n.jsx)(s(558045).A, {
                        type: s(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "pages",
                            items: _
                        }]
                    }), S ? (0, n.jsxs)("div", {
                        style: r.actionButtons,
                        children: [(0, n.jsx)(s(636518).Ay, {
                            title: (0, n.jsx)(s(346268).c, {
                                size: 1
                            }),
                            style: r.divider
                        }), (0, n.jsx)(s(498341).u, {
                            style: r.settingsMenuItem,
                            title: (0, n.jsx)(s(109939).sA, {
                                id: "guestPagesPopup.Settings",
                                defaultMessage: "Settings"
                            })
                        }), M ? g : null, v]
                    }) : void 0]
                })
            }
        },
        362650: (e, t, s) => {
            function i(e, t) {
                var i;
                let n = s(92513).JW();
                i = {
                    modal_id: n,
                    currency_code: s(653828).H.selectedCurrencyCodeStoreState,
                    ...t.analyticsArgs,
                    desiredProducts: t.desiredProducts,
                    desiredInterval: t.desiredInterval
                }, (0, s(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_open",
                        eventProperties: i
                    }
                }), s(856863).j.open({
                    modalId: n,
                    ...t
                })
            }

            function n(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_exit",
                        eventProperties: {
                            modal_id: {
                                modalId: t
                            }.modalId
                        }
                    }
                }), s(856863).j.setState({
                    open: !1
                })
            }
            s.d(t, {
                A: () => n,
                o: () => i
            })
        },
        394810: (e, t, s) => {
            s.d(t, {
                h: () => i
            });

            function i(e) {
                var t;
                let {
                    spaceId: i,
                    currentUserId: n
                } = (0, s(682985).K8)(() => {
                    var t;
                    return {
                        spaceId: null == e ? void 0 : e.id,
                        currentUserId: null == (t = s(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id
                    }
                }, [e]), a = (0, s(217844)._)({
                    name: "members",
                    spaceId: i,
                    userId: n,
                    amount: "unknown"
                }), o = null == a || null == (t = a.limit) ? void 0 : t.total;
                return !!o && ("unlimited" === o || o > 1)
            }
        },
        400308: (e, t, s) => {
            s.d(t, {
                $: () => i
            }), s(581454);
            async function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    userIds: n,
                    invite: a,
                    membershipType: o
                } = e, r = i.id, l = (0, s(295447).Gx)({
                    environment: t,
                    spaceId: r
                }), u = t.idCreator.getSpaceShortIdCreator(r, l), {
                    serverCommitResult: d
                } = (0, s(377796).createAndCommit)({
                    userAction: "permissionsActions.saveSpaceActors",
                    environment: t,
                    canUndo: !0,
                    useSudoMode: !1,
                    cellTarget: "main",
                    perform: e => {
                        let r = n.map(e => ({
                                type: "user",
                                userId: e,
                                inviteId: u.idInSavedSpace(s(832375).Yxt),
                                membershipType: o
                            })),
                            {
                                inviteFlowId: l,
                                inviteMessage: d,
                                inviteOrigin: c,
                                disable_invite_email: p
                            } = a;
                        (0, s(215813).E)({
                            environment: t,
                            store: i,
                            permissionItems: r.map(e => {
                                var t;
                                return t = e, {
                                    type: "user_permission",
                                    role: (0, s(729052).ps)(t.membershipType),
                                    user_id: t.userId,
                                    invite_id: t.inviteId
                                }
                            }),
                            transaction: e,
                            inviteFlowId: l,
                            inviteMessage: (0, s(765898).Hb)(d),
                            inviteOrigin: c,
                            disable_invite_email: p
                        }), (0, s(73888).y)({
                            environment: t,
                            spaceStore: i,
                            actors: r,
                            transaction: e
                        })
                    }
                });
                await d
            }
        },
        480605: (e, t, s) => {
            s.r(t), s.d(t, {
                iconDefinition: () => i,
                peopleFillSmallIcon: () => n
            }), s(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.55 1.9 15.26 11.99",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M11.4 1.908c-.872 0-1.584.362-2.064.96-.469.584-.687 1.353-.687 2.145 0 .793.218 1.561.687 2.145.48.599 1.192.96 2.064.96s1.584-.361 2.065-.96c.468-.584.687-1.352.687-2.145s-.219-1.56-.687-2.144c-.48-.6-1.193-.96-2.065-.96M2.693 3.46c.445-.554 1.104-.888 1.907-.888.804 0 1.463.334 1.907.888.433.539.632 1.245.632 1.97s-.2 1.43-.632 1.97c-.444.553-1.103.887-1.907.887-.803 0-1.462-.334-1.907-.888-.433-.539-.632-1.245-.632-1.97s.2-1.43.632-1.97M.71 11.561c.68-1.42 2.175-2.389 3.89-2.389.797 0 1.547.21 2.19.576a5.6 5.6 0 0 0-.814 1.333 2.78 2.78 0 0 0 .337 2.811H2.43c-.577 0-1.132-.243-1.49-.656a1.51 1.51 0 0 1-.23-1.675M11.4 8.84c-1.917 0-3.58 1.117-4.279 2.735a1.54 1.54 0 0 0 .268 1.665c.36.41.913.652 1.49.652h5.04c.579 0 1.131-.242 1.492-.652a1.54 1.54 0 0 0 .268-1.665c-.7-1.618-2.362-2.736-4.279-2.736"
                    })
                },
                n = (0, s(104509).wt)("peopleFillSmall", i, "fillSmall")
        },
        487998: (e, t, s) => {
            async function i(e) {
                let t, i, {
                        environment: a,
                        isOnboarding: o,
                        invite: r,
                        spaceStore: l,
                        inviteTargets: u,
                        membershipType: d
                    } = e,
                    c = l.id,
                    p = await (0, s(975162).lX)(u, 10, async e => "newUser" === e.type ? {
                        type: "user",
                        membershipType: d,
                        userId: await (0, s(378880).J)(a, e),
                        inviteId: void 0
                    } : "existingUser" === e.type ? {
                        type: "user",
                        membershipType: d,
                        userId: e.value.id,
                        inviteId: void 0
                    } : (0, s(722371).HB)(e));
                try {
                    await (0, s(400308).$)({
                        environment: a,
                        spaceStore: l,
                        userIds: p.map(e => e.userId),
                        invite: r,
                        membershipType: d
                    }), t = !0
                } catch (e) {
                    t = !1, i = (0, s(161179).A)(e)
                }
                if (u.filter(e => "existingUser" === e.type || "newUser" === e.type).length > 0) {
                    var m, g;
                    let e = p.map(e => (0, s(283161).z)(e)),
                        n = e[0].role ? ? "editor";
                    t ? s(179701).Jg(a, {
                        role: n,
                        is_space: !0,
                        invite_targets: u,
                        is_onboarding: o,
                        invite_origin: r.inviteOrigin,
                        permission_items: e,
                        invite_message_length: (null == (m = r.inviteMessage) ? void 0 : m.length) ? ? 0,
                        invite_flow_id: r.inviteFlowId,
                        isProfessionalTeamUser: (0, s(904434).YD)(),
                        domainType: (0, s(904434).FX)(),
                        share_menu_session_id: s(880853).Ay.state.sessionId,
                        collection_id: void 0,
                        parent_collection_id: void 0
                    }) : s(179701).J8({
                        error: i,
                        role: n,
                        is_space: !0,
                        invite_targets: u,
                        is_onboarding: o,
                        invite_origin: r.inviteOrigin,
                        permission_items: e,
                        invite_message_length: (null == (g = r.inviteMessage) ? void 0 : g.length) ? ? 0,
                        invite_flow_id: r.inviteFlowId,
                        isProfessionalTeamUser: (0, s(904434).YD)(),
                        domainType: (0, s(904434).FX)(),
                        share_menu_session_id: s(880853).Ay.state.sessionId,
                        collection_id: void 0,
                        parent_collection_id: void 0
                    })
                }
                o || await s(371151).nO({
                    environment: a,
                    spaceStore: {
                        id: c
                    }
                });
                let v = (0, s(381453).Cr)((0, s(381453).oE)(u.map(e => {
                    if ("newUser" !== e.type && "existingUser" !== e.type) return;
                    let t = e.value;
                    if (null != t && t.email && null != t && t.id) return [t.email, t.id]
                })));
                return t && await n({
                    environment: a,
                    spaceStore: l
                }), {
                    success: t,
                    error: i,
                    invitedUsers: v,
                    requestedUsers: {}
                }
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceStore: i
                } = e;
                if (!i) return;
                let n = (0, s(616579).j)({
                        environment: t,
                        spaceId: i.id
                    }) ? ? 0,
                    a = i.getSettings().seen_expansion_offer ? ? !1;
                n > 1 && a && !(0, s(521469).fd)(null == i ? void 0 : i.getModel(), "expansion_offer") && await (0, s(832799).Ni)(t, "expansion_offer")
            }
            s.d(t, {
                F: () => i
            }), s(898992), s(354520), s(581454)
        },
        531718: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowInCircleUpIcon: () => a,
                iconDefinition: () => n
            }), s(296540);
            var i = s(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M13.042 9.554a.625.625 0 0 1-.884 0l-1.533-1.533v5.466a.625.625 0 1 1-1.25 0V8.021L7.842 9.554a.625.625 0 0 1-.884-.883l2.6-2.6a.625.625 0 0 1 .884 0l2.6 2.6a.625.625 0 0 1 0 .883"
                        }), (0, i.jsx)("path", {
                            d: "M17.625 10a7.625 7.625 0 1 1-15.25 0 7.625 7.625 0 0 1 15.25 0M10 16.375a6.375 6.375 0 1 0 0-12.75 6.375 6.375 0 0 0 0 12.75"
                        })]
                    })
                },
                a = (0, s(104509).wt)("arrowInCircleUp", n, "default")
        },
        542061: (e, t, s) => {
            s.d(t, {
                a: () => o,
                E: () => a
            }), s(16280);
            var i = s(296540);
            s(898992), s(672577), s(640088).Ju.downloadMac, s(640088).Ju.downloadMacUniversal, s(640088).Ju.downloadMacIntel, s(640088).Ju.downloadMacAppleSilicon, s(640088).Ju.downloadWindows, s(640088).Ju.downloadWindowsArm, s(640088).Ju.downloadWindowsMsix, s(640088).Ju.downloadWindowsMsixArm;
            let n = [{
                route: s(640088).Ju.downloadMac,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: s(640088).Ju.downloadMacIntel,
                architecture: "x86",
                operatingSystem: "mac",
                target: "mac"
            }, {
                route: s(640088).Ju.downloadMacUniversal,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: s(640088).Ju.downloadMacAppleSilicon,
                architecture: "arm",
                operatingSystem: "mac",
                target: "macArm64"
            }, {
                route: s(640088).Ju.downloadWindows,
                architecture: "x86",
                operatingSystem: "windows",
                target: "windows"
            }, {
                route: s(640088).Ju.downloadWindowsArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "windowsArm64"
            }, {
                route: s(640088).Ju.downloadWindowsMsix,
                architecture: "x86",
                operatingSystem: "windows",
                target: "msix"
            }, {
                route: s(640088).Ju.downloadWindowsMsixArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "msixArm64"
            }];

            function a() {
                let e = (0, i.useRef)(null),
                    t = (0, s(533992).Y0)();
                return (0, i.useEffect)(() => {
                    o(t).then(t => {
                        e.current = t ? ? null
                    }).catch(e => {
                        throw Error(e)
                    })
                }, [t]), e
            }
            async function o(e) {
                var t;
                if (!("userAgentData" in navigator))
                    if (e.isMac) return s(640088).Ju.downloadMacUniversal;
                    else return s(640088).Ju.downloadWindows;
                let i = navigator.userAgentData,
                    a = await (null == i || null == (t = i.getHighEntropyValues) ? void 0 : t.call(i, ["architecture"])),
                    o = function(e, t) {
                        let s = function(e = "") {
                            let t = e.toLowerCase();
                            return t.startsWith("arm") ? "arm" : t.startsWith("x86") || "intel" === t ? "x86" : null
                        }(e);
                        if (!s || "mac" !== t && "windows" !== t) return null;
                        let i = n.find(e => e.architecture === s && e.operatingSystem === t);
                        return (null == i ? void 0 : i.route) || null
                    }(null == a ? void 0 : a.architecture, e.os);
                return o || null
            }
        },
        566666: (e, t, s) => {
            s.d(t, {
                X: () => i
            });

            function i(e) {
                let t = s(381453).oE(["invite", e]).join("/");
                return `${s(986939).A.domainBaseUrl}/${t}`
            }
        },
        582471: (e, t, s) => {
            s.d(t, {
                Y: () => o
            }), s(296540);
            var i = s(474848);
            let n = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                a = {
                    position: "relative"
                };

            function o(e) {
                let {
                    iconAndTitle: t,
                    description: o
                } = e;
                return t || o ? (0, i.jsxs)(s(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: a,
                    children: [t, o ? (0, i.jsx)(s(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: n,
                        children: o
                    }) : null]
                }) : null
            }
        },
        588222: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => n,
                iconDefinition: () => i
            }), s(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, s(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                n = (0, s(104509).wt)("arrowChevronSingleRightFillSmall", i, "fillSmall")
        },
        691509: (e, t, s) => {
            s.d(t, {
                A: () => a
            }), s(944114), s(898992), s(803949), s(581454);
            var i = s(296540),
                n = s(474848);
            let a = function({
                children: e,
                onClick: t,
                items: i,
                getKey: a,
                renderItem: o,
                selectedItem: l,
                onSelect: u,
                dontCloseParentOnSelect: d,
                menuTypeOverride: c,
                menuTitle: p,
                width: m,
                minWidth: g,
                disabled: v,
                originGap: h,
                originRectTransform: x,
                buttonPopupStore: f,
                sameWidthAsOrigin: w
            }) {
                let y = (0, s(682985).uB)(f, s(510969).A),
                    b = c ? ? (s(986939).A.isMobile ? s(649476).gu.Modal : s(649476).gu.Popup);
                return (0, n.jsx)(s(656252).A, {
                    popupType: function(e) {
                        switch (e) {
                            case s(649476).gu.ActionSheet:
                                return s(423291).n.SlideUp;
                            case s(649476).gu.Modal:
                                return s(423291).n.BottomSheet;
                            case s(649476).gu.Popup:
                                return s(423291).n.Popup
                        }
                    }(b),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: y,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, n.jsx)(r, {
                        parent: e,
                        items: i,
                        getKey: a,
                        renderItem: o,
                        selectedItem: l,
                        onSelect: u,
                        dontCloseParentOnSelect: d,
                        menuType: b,
                        menuTitle: p,
                        width: m,
                        minWidth: g
                    }),
                    disabled: v,
                    originGap: h,
                    originRectTransform: x,
                    sameWidthAsOrigin: w,
                    children: e
                })
            };

            function o(e, t, n, a, o, r, l, u) {
                return {
                    key: 0,
                    render: e => (0, i.createElement)(s(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: a(e),
                        render: t => o({ ...t,
                            value: e,
                            key: a(e),
                            selectedItem: r
                        }),
                        action: () => {
                            r !== e && l(e), u || n.close()
                        }
                    }))
                }
            }

            function r({
                parent: e,
                items: t,
                getKey: i,
                renderItem: a,
                selectedItem: l,
                onSelect: u,
                dontCloseParentOnSelect: d,
                menuType: c,
                menuTitle: p,
                width: m,
                minWidth: g
            }) {
                let v, h = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, s) => {
                    let n = o(t, s, e, i, a, l, u, d);
                    h.push(n)
                });
                else {
                    let s = o(t, 0, e, i, a, l, u, d);
                    h.push(s)
                }
                let x = (0, n.jsx)(s(558045).A, {
                    type: s(558045).O.Vertical,
                    initialFocus: s(381453).SL(s(381453).Bq(t), e => s(381453).n4(e, l)),
                    sections: h
                });
                switch (c) {
                    case s(649476).gu.ActionSheet:
                        v = {
                            menuType: s(649476).gu.ActionSheet
                        };
                        break;
                    case s(649476).gu.Modal:
                        v = {
                            menuType: s(649476).gu.Modal,
                            title: p,
                            right: (0, n.jsx)(s(109939).sA, { ...s(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case s(649476).gu.Popup:
                        v = {
                            menuType: s(649476).gu.Popup,
                            width: m || 160,
                            minWidth: g
                        };
                        break;
                    default:
                        (0, s(722371).HB)(c)
                }
                return (0, n.jsx)(s(747369).A, { ...v,
                    children: x
                })
            }
        },
        855361: (e, t, s) => {
            s.d(t, {
                S: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e;
                return (0, s(682985).K8)(() => {
                    if (i) return (0, s(616579).j)({
                        environment: t,
                        spaceId: i
                    })
                }, [t, i])
            }
        },
        895105: (e, t, s) => {
            s.r(t), s.d(t, {
                filterIcon: () => n,
                iconDefinition: () => i
            }), s(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                n = (0, s(104509).wt)("filter", i, "default")
        },
        920976: (e, t, s) => {
            s.d(t, {
                F: () => a
            }), s(296540);
            var i = s(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, i.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                a = (0, s(104509).wt)("aiFacePlus", n, "default")
        }
    }
]);