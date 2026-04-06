"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [605], {
        11310: (e, t, i) => {
            i.d(t, {
                h: () => r
            });

            function r(e) {
                let t = (0, i(533992).v3)(),
                    [{
                        value: r
                    }] = (0, i(97668).Yb)(async () => {
                        let i = await t.api.callApi({
                            eventName: "getMemberEmailDomains",
                            environment: t,
                            data: {
                                spaceId: e
                            }
                        });
                        if ("success" === i.type) return i.data.emailDomains;
                        if ("failed" === i.type) throw i.error
                    }, [t, e]);
                return r
            }
        },
        20173: (e, t, i) => {
            async function r(e) {
                let {
                    teamId: t,
                    spaceId: i,
                    environment: r
                } = e, n = await r.api.callCellCompatibleApi({
                    eventName: "getEntitiesInTeam",
                    environment: r,
                    data: {
                        teamId: t,
                        spaceId: i
                    },
                    cellNavigation: {
                        spaceId: i
                    }
                });
                if ("success" === n.type) return n.data.entities
            }
            async function n(e) {
                let {
                    teamIds: t,
                    spaceId: i,
                    environment: r,
                    membershipTypes: n
                } = e, a = await r.api.callCellCompatibleApi({
                    eventName: "getEntitiesInTeams",
                    environment: r,
                    data: {
                        spaceId: i,
                        teamIds: t,
                        membershipTypes: n
                    },
                    cellNavigation: {
                        spaceId: i
                    }
                });
                if ("success" === a.type) return a.data.entitiesByTeamId
            }
            async function a(e) {
                let {
                    userId: t,
                    teamId: n,
                    spaceId: a,
                    environment: o
                } = e, s = i(218744).default.checkGate({
                    gateName: "use_team_membership_store"
                });
                if (s) {
                    let e = i(781508).h.getUnit({
                        userId: t,
                        spaceId: a,
                        teamId: n
                    });
                    if (null != e && e.members && !e.isStale) return e.members
                }
                let l = await r({
                    teamId: n,
                    spaceId: a,
                    environment: o
                });
                return l && s && i(781508).h.writeTeamMembership({
                    userId: t,
                    spaceId: a,
                    teamId: n,
                    members: l
                }), l
            }
            i.d(t, {
                Mi: () => n,
                a1: () => a
            })
        },
        48458: (e, t, i) => {
            i.d(t, {
                A: () => n,
                C: () => a
            }), i(296540);
            var r = i(474848);

            function n(e) {
                let {
                    onInviteClick: t,
                    onInviteComplete: n,
                    buttonStyle: a,
                    buttonContainerStyle: o,
                    spacePermissionsSettingsStore: s,
                    shouldAddMembers: l = !0
                } = e;
                return [{
                    key: "slack_imports",
                    render: () => (0, r.jsx)(i(179279).Rc, {
                        inviteOrigin: "space_setting_slack_dropdown",
                        canEditPermission: !0,
                        onInviteClick: t,
                        onInviteComplete: n,
                        buttonLabel: (0, r.jsx)(i(179279).$c, {
                            type: "slack"
                        }),
                        buttonStyle: a,
                        buttonContainerStyle: o,
                        spacePermissionsSettingsStore: s,
                        shouldAddMembers: l
                    }),
                    action: () => {}
                }, {
                    key: "google_imports",
                    render: () => (0, r.jsx)(i(179279).aI, {
                        inviteOrigin: "space_setting_google_dropdown",
                        canEditPermission: !0,
                        onInviteClick: t,
                        onInviteComplete: n,
                        buttonLabel: (0, r.jsx)(i(179279).$c, {
                            type: "google"
                        }),
                        buttonStyle: a,
                        buttonContainerStyle: o,
                        spacePermissionsSettingsStore: s,
                        shouldAddMembers: l
                    }),
                    action: () => {}
                }, {
                    key: "microsoft_imports",
                    render: () => (0, r.jsx)(i(179279).Xd, {
                        inviteOrigin: "space_setting_microsoft_dropdown",
                        canEditPermission: !0,
                        onInviteClick: t,
                        onInviteComplete: n,
                        buttonLabel: (0, r.jsx)(i(179279).$c, {
                            type: "microsoft"
                        }),
                        spacePermissionsSettingsStore: s,
                        shouldAddMembers: l
                    }),
                    action: () => {}
                }]
            }

            function a(e) {
                let {
                    onClickAuthenticated: t,
                    hideChevronIcon: n,
                    containerStyle: a,
                    buttonStyle: o,
                    flowId: s
                } = e;
                return [{
                    key: "slack_imports",
                    render: () => (0, r.jsx)(i(314891).Xx, {
                        onClickAuthenticated: ({
                            isAfterImportConnection: e
                        }) => t(i(880853).NL.Slack, !e),
                        title: (0, r.jsx)(i(179279).$c, {
                            type: "slack"
                        }),
                        containerStyle: a,
                        buttonStyle: o,
                        from: "share_menu",
                        inviteOrigin: "page_share_modal",
                        flowId: s,
                        loadContacts: !0,
                        hideChevronIcon: n
                    }),
                    action: () => {}
                }, {
                    key: "google_imports",
                    render: () => (0, r.jsx)(i(314891).KG, {
                        onClickAuthenticated: ({
                            isAfterImportConnection: e
                        }) => t(i(880853).NL.Google, !e),
                        containerStyle: a,
                        buttonStyle: o,
                        from: "share_menu",
                        inviteOrigin: "page_share_modal",
                        flowId: s,
                        loadContacts: !0,
                        hideChevronIcon: n,
                        buttonLabel: (0, r.jsx)(i(179279).$c, {
                            type: "google"
                        })
                    }),
                    action: () => {}
                }, {
                    key: "microsoft_imports",
                    render: () => (0, r.jsx)(i(314891).PX, {
                        onClickAuthenticated: ({
                            isAfterImportConnection: e
                        }) => t(i(880853).NL.Microsoft, !e),
                        buttonLabel: (0, r.jsx)(i(179279).$c, {
                            type: "microsoft"
                        }),
                        from: "share_menu",
                        inviteOrigin: "page_share_modal",
                        loadContacts: !0,
                        hideChevronIcon: n
                    }),
                    action: () => {}
                }]
            }
        },
        66251: (e, t, i) => {
            i.d(t, {
                c: () => r
            }), i(898992), i(354520), i(581454);

            function r() {
                let e = (0, i(533992).v3)(),
                    t = e.currentUser.id,
                    r = (0, i(723240).r)(),
                    n = (0, i(476743).a)(),
                    a = (0, i(855361).S)({
                        environment: e,
                        spaceId: r
                    }) ? ? 1;
                return (0, i(682985).K8)(() => {
                    if (!t || !(null != n && n.isDefined())) return {
                        canArchive: !1,
                        reason: "invalidUserOrSpaceView"
                    };
                    let e = (0, i(679321).r)(n);
                    return (0, i(579825).z8)({
                        teamsThatUserIsANonGuestMemberOf: e.map(e => e.getModel()).filter(i(722371).O9),
                        teamsThatUserIsAOwnerOf: e.filter(e => e.canAdmin()).map(e => e.getModel()).filter(i(722371).O9),
                        spaceMembersCount: a
                    })
                }, [t, n, a])
            }
        },
        74189: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var r = i(474848);
            let n = {
                    style0: {
                        display: "flex",
                        padding: "0 4px"
                    },
                    InviteDropdownMenu: {
                        background: i(632079).Tj.background.elevated,
                        width: 265,
                        borderRadius: 8
                    },
                    helpSection: {
                        width: "100%"
                    }
                },
                a = function(e) {
                    let {
                        importListItems: t
                    } = e, a = (0, i(682985).uB)(void 0, i(419110).$), o = (0, r.jsx)(i(68774).N, {
                        style: n.style0,
                        className: "notion-print-ignore",
                        href: (0, i(442564).x)("guides.publicAPI"),
                        external: !0,
                        children: (0, r.jsx)(i(988022).p, {
                            iconLeading: {
                                icon: i(211052).questionMarkCircleSmallIcon,
                                size: "sm"
                            },
                            colorPalette: "gray",
                            style: n.helpSection,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "spacePermissionsSettings.inviteLinkRefreshModal.inviteDropdownMenu.learnMore",
                                defaultMessage: "Learn more"
                            })
                        })
                    });
                    return (0, r.jsx)(i(747369).A, {
                        menuType: i(649476).gu.Popup,
                        children: (0, r.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            store: a,
                            initialFocus: void 0,
                            disableInitialScroll: !0,
                            disableCommandEnter: !0,
                            sections: [{
                                key: "all_import_sections",
                                render: e => (0, r.jsx)(i(844565).A, { ...e,
                                    title: (0, r.jsx)(i(109939).sA, {
                                        id: "spacePermissionsSettings.inviteLinkRefreshModal.inviteDropdownMenu.title",
                                        defaultMessage: "Import from"
                                    })
                                }),
                                items: t
                            }, {
                                key: "help_section",
                                render: e => (0, r.jsx)(i(844565).A, { ...e,
                                    topBorder: !0
                                }),
                                items: [{
                                    key: "help_section",
                                    render: e => o,
                                    action: () => {}
                                }]
                            }],
                            style: n.InviteDropdownMenu
                        })
                    })
                }
        },
        314891: (e, t, i) => {
            i.d(t, {
                KG: () => a,
                PX: () => o,
                Xx: () => n
            });
            let r = {
                    SlackImportContactsButton: new(i(815048)).O2("SlackImportContactsButton", () => i.e(55901).then(i.bind(i, 870184))),
                    GoogleImportContactsButton: new(i(815048)).O2("GoogleImportContactsButton", () => i.e(37398).then(i.bind(i, 705151))),
                    MicrosoftImportContactsButton: new(i(815048)).O2("MicrosoftImportContactsButton", () => i.e(93629).then(i.bind(i, 947804)))
                },
                n = (0, i(815048)._h)(r.SlackImportContactsButton, e => e.default),
                a = (0, i(815048)._h)(r.GoogleImportContactsButton, e => e.GoogleImportContactsButton),
                o = (0, i(815048)._h)(r.MicrosoftImportContactsButton, e => e.MicrosoftImportContactsButton)
        },
        367154: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var r = () => i(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let a = new n
        },
        421553: (e, t, i) => {
            async function r(e) {
                let {
                    environment: t,
                    email: i
                } = e, r = await t.api.callApi({
                    eventName: "findUser",
                    environment: t,
                    data: {
                        email: i
                    }
                });
                if ("success" === r.type) {
                    let e = r.data;
                    if (e.value) return e.value.value.id
                }
                return await n({
                    environment: t,
                    email: i
                })
            }
            async function n(e) {
                let {
                    environment: t,
                    email: r
                } = e, n = await t.api.callApi({
                    eventName: "createEmailUser",
                    environment: t,
                    data: {
                        email: r,
                        preferredLocaleOrigin: "inferred_from_inviter",
                        preferredLocale: (0, i(599412).H)(i(962299).A.getIntl())
                    }
                });
                if ("failed" !== n.type) return n.data.userId;
                throw n.error
            }
            async function a(e) {
                let {
                    block: t,
                    blockRole: i,
                    environment: r,
                    inviteeUserId: n,
                    inviteMessage: a
                } = e;
                await s({
                    environment: r,
                    block: t,
                    blockRole: i,
                    inviteeUserId: n,
                    inviteMessage: a,
                    type: "guest-invite-request"
                })
            }
            async function o(e) {
                let {
                    block: t,
                    blockRole: i,
                    environment: r,
                    inviteeUserId: n,
                    inviteMessage: a
                } = e;
                await s({
                    environment: r,
                    block: t,
                    blockRole: i,
                    inviteeUserId: n,
                    inviteMessage: a,
                    type: "restricted-member-invite-request"
                })
            }
            async function s(e) {
                let {
                    environment: t,
                    block: i,
                    blockRole: r,
                    inviteeUserId: n,
                    inviteMessage: a,
                    type: o
                } = e, s = await t.api.callApi({
                    eventName: "requestAccess",
                    environment: t,
                    data: {
                        type: o,
                        block: i,
                        forActorId: n,
                        message: void 0,
                        attributes: {
                            role: r,
                            inviteMessage: a
                        }
                    }
                });
                if ("failed" === s.type) throw s.error
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    inviteeUserId: r,
                    inviteMessage: n
                } = e;
                if (i.canAdmin()) throw Error("This operation is not valid for workspace owners, because member requests are immediately approved when created by a workspace owner. Use createMember instead.");
                let a = await t.api.callApi({
                    eventName: "requestAccess",
                    environment: t,
                    data: {
                        type: "actor-to-space",
                        forActorId: r,
                        spaceId: i.id,
                        message: n
                    }
                });
                if ("failed" === a.type) throw a.error
            }
            async function c(e) {
                let {
                    blockPermissionItem: t,
                    blockStore: r,
                    environment: n,
                    metadata: a,
                    sudoModeStore: o
                } = e;
                await (0, i(646201).J)({
                    environment: n,
                    store: r,
                    sudoModeStore: o,
                    permissionItems: [t],
                    invite: a,
                    skipGuestLimitValidation: !0
                })
            }
            i.d(t, {
                Ft: () => c,
                Hq: () => o,
                Mb: () => a,
                k7: () => l,
                sR: () => r
            }), i(16280)
        },
        523607: (e, t, i) => {
            async function r({
                environment: e,
                existingTeamStore: t
            }) {
                let n = i(728372).AppStoreSidebarSpaceStore.state;
                if (!n) throw Error("currentSpaceStore does not exist");
                let a = n.id,
                    o = await e.api.callApi({
                        eventName: "enableTeams",
                        environment: e,
                        data: {
                            spaceId: a,
                            existingTeamId: t.id
                        }
                    });
                return "failed" === o.type ? ((0, i(21731).O)(o), !1) : (i(649807).b0(e, {
                    spaceId: a,
                    store: t,
                    flowId: ""
                }), !0)
            }
            async function n({
                environment: e,
                teamStore: t,
                teamName: a,
                from: o
            }) {
                let s = t.getSpaceStore();
                if (!s) throw Error("Team store does not have a space store");
                if (!(0, i(866290).m)(t)) throw Error("Cannot restore archived, non-open team with no active default team");
                if (s.isTeamsEnabled())(0, i(377796).createAndCommit)({
                    userAction: "teamsHelpers.restoreArchivedTeam",
                    environment: e,
                    cellTarget: {
                        spaceWithId: s.id
                    },
                    canUndo: !0,
                    perform: e => {
                        let r;
                        (0, i(852812).n)({
                            teamStore: t,
                            update: (r = (0, i(422280).ZF)({
                                numDefaultActiveTeams: (0, i(558951).S)({
                                    spaceStore: t.getSpaceStore()
                                }),
                                teamAccessLevel: t.getTeamAccessLevel()
                            }), (0, i(422280).nT)({
                                isDefault: r
                            })),
                            transaction: e
                        })
                    }
                });
                else if (!await r({
                        environment: e,
                        existingTeamStore: t
                    })) return;
                i(649807).Rt(e, {
                    store: t,
                    from: o
                }), (0, i(356164).cO)(a)
            }
            i.d(t, {
                Q: () => n
            }), i(16280)
        },
        530004: (e, t, i) => {
            i.d(t, {
                V: () => r
            });

            function r(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_import_contacts_dropdown",
                        eventProperties: {
                            source: t.source
                        }
                    }
                })
            }
        },
        552013: (e, t, i) => {
            function r({
                environment: e,
                notionApps: t
            }) {
                let n = i(728372).AppStoreSidebarSpaceViewStore.state;
                n && (0, i(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.moveNotionApp",
                    environment: e,
                    canUndo: !0,
                    cellTarget: n.pointer.spaceId ? {
                        spaceWithId: n.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        i(380762).AG(n, e, { ...n.getSettings(),
                            notion_apps: {
                                order: t
                            }
                        })
                    }
                })
            }

            function n(e) {
                let t = i(728372).AppStoreSidebarSpaceViewStore.state;
                t && (0, i(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.hideNotionAppsSection",
                    environment: e,
                    canUndo: !0,
                    cellTarget: t.pointer.spaceId ? {
                        spaceWithId: t.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        let r = t.getNotionAppsOrder();
                        i(380762).AG(t, e, {
                            notion_apps: {
                                hidden: !0,
                                order: r
                            }
                        })
                    }
                })
            }

            function a(e) {
                let t = i(728372).AppStoreSidebarSpaceViewStore.state;
                t && (0, i(377796).createAndCommit)({
                    userAction: "sidebarNotionAppsActions.showNotionAppsSection",
                    environment: e,
                    canUndo: !0,
                    cellTarget: t.pointer.spaceId ? {
                        spaceWithId: t.pointer.spaceId
                    } : void 0,
                    perform: e => {
                        let r = t.getNotionAppsOrder();
                        i(380762).AG(t, e, {
                            notion_apps: {
                                hidden: !1,
                                order: r
                            }
                        })
                    }
                })
            }
            i.d(t, {
                G6: () => r,
                nQ: () => n,
                sh: () => a
            })
        },
        556191: (e, t, i) => {
            function r({
                space: e,
                trustedDomains: t,
                enableTrustedDomainPermissionRedesign: a
            }) {
                return e && n(e) ? !a || (0, i(262166).OX)(e.subscription_tier) ? (t || []).filter(e => e.getDomainLinkSharingEnabled()).map(e => e.getEmailDomain()) : e.getEmailDomains() : []
            }

            function n(e) {
                return !!(e && (0, i(262166).jR)(e.subscription_tier))
            }

            function a(e) {
                return !!e && !!n(e) && (!(0, i(262166).OX)(e.subscription_tier) || (e.getSettings().domain_link_sharing_enabled ? ? !0))
            }
            i.d(t, {
                Hb: () => r,
                Hm: () => a,
                ko: () => n
            }), i(898992), i(354520), i(581454)
        },
        558951: (e, t, i) => {
            function r(e) {
                let t = e.getTeamAccessLevel();
                return e.isDefault() && !e.isArchived() && "open" === t
            }

            function n({
                spaceStore: e
            }) {
                var t, a;
                let o = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                if (!o || !e) return 0;
                let s = (null == (a = (0, i(924425).Z)({
                    userId: o,
                    spaceStore: e,
                    teamTypes: new Set(["Joined", "UnjoinedActive"])
                })) ? void 0 : a.teams) ? ? [];
                return (0, i(485129).d)({
                    spaceStore: e,
                    teams: s
                }).map(e => e.store).filter(r).length
            }
            i.d(t, {
                S: () => n
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454)
        },
        570864: (e, t, i) => {
            i.d(t, {
                T: () => r
            });

            function r(e) {
                let t = (0, i(144153).y)(e),
                    r = (0, i(77868).J)(e);
                return (0, i(682985).K8)(() => (0, i(138862).W)({
                    teamStore: e,
                    isCurrentUserTeamOwner: t,
                    isCurrentUserTeamMember: r
                }), [e, t, r])
            }
        },
        589539: (e, t, i) => {
            function r({
                entrypoint: e,
                userId: t,
                spaceStore: n
            }) {
                var a;
                let o = null == n ? void 0 : n.getModel();
                if (!t || !o) return !1;
                let s = null == (a = (0, i(993077).sE)(n, t)) ? void 0 : a.getModel();
                return !!s && (0, i(283632).fK)({
                    space: o,
                    spaceUser: s
                }) && (0, i(17698).F)(e)
            }

            function n(e) {
                let t = (0, i(533992).v3)().currentUser.id;
                return (0, i(682985).K8)(() => r({
                    entrypoint: e,
                    spaceStore: i(728372).AppStoreSidebarSpaceStore.state,
                    userId: t
                }), [t, e])
            }
            i.d(t, {
                a: () => n,
                j: () => r
            })
        },
        603200: (e, t, i) => {
            i.d(t, {
                c: () => r,
                Z: () => n
            });

            function r(e) {
                let t = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    r = e ? ? t;
                return (0, i(682985).K8)(() => {
                    let e = (null == r ? void 0 : r.getSubscriptionTier()) ? ? "free";
                    return (0, i(262166).rV)(e, "business")
                }, [r])
            }

            function n() {
                let e = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    t = (0, i(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    });
                return (0, i(682985).K8)(() => {
                    let r = (null == e ? void 0 : e.getSubscriptionTier()) ? ? "free";
                    return !(0, i(717274).hG)() && (0, i(262166).rV)(r, "business") || function({
                        billingData: e
                    }) {
                        var t;
                        return function({
                            subscriptionTier: e,
                            subscriptionCreatedAtTime: t,
                            useLegacyBehavior: r
                        }) {
                            return "enterprise" === e || "plus" === e && !!r && (0, i(722371).O9)(t) && t < i(943003).fQ
                        }({
                            subscriptionTier: (0, i(216260).AI)(),
                            subscriptionCreatedAtTime: null == e || null == (t = e.subscription) || null == (t = t.startDate) ? void 0 : t.toMillis(),
                            useLegacyBehavior: !(0, i(717274).hG)()
                        })
                    }({
                        billingData: t
                    })
                }, [e, t])
            }
        },
        604764: (e, t, i) => {
            i.d(t, {
                m: () => s
            }), i(16280), i(898992), i(354520), i(581454);
            var r = () => i(642157),
                n = () => i(832375),
                a = () => i(173157);

            function o(e) {
                return {
                    archived_by: e,
                    archived_at: Date.now(),
                    is_default: !1
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    teamStore: s,
                    from: l
                } = e, c = s.getSpaceStore();
                if (!c) throw Error("Team store does not have a space store");
                let d = i(728372).AppStoreSidebarSpaceViewStore.state;
                if (!d) throw Error("sidebarSpaceViewStore does not exist");
                let u = t.currentUser.id,
                    m = s.getName() || "",
                    p = c.getSettingsStore();
                if (!u) return;
                let f = await (0, i(832129).x)({
                        environment: t,
                        spaceId: c.id
                    }) ? ? 1,
                    h = (0, i(679321).r)(d),
                    v = (0, i(579825).z8)({
                        teamsThatUserIsANonGuestMemberOf: h.map(e => e.getModel()).filter(i(722371).O9),
                        teamsThatUserIsAOwnerOf: h.filter(e => e.canAdmin()).map(e => e.getModel()).filter(i(722371).O9),
                        spaceMembersCount: f
                    }).canArchive;
                if (await i(505034).kq(m, v)) {
                    if (v) {
                        let e = await i(505034).f1(m);
                        (0, i(377796).createAndCommit)({
                            userAction: "teamsHelpers.archiveLastTeam",
                            environment: t,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: c.id
                            },
                            perform: t => {
                                if ((0, i(852812).n)({
                                        teamStore: s,
                                        update: o(u),
                                        transaction: t
                                    }), (0, a().z)({
                                        store: p,
                                        data: {
                                            is_teams_enabled: !1
                                        },
                                        transaction: t
                                    }), ! function(e) {
                                        let {
                                            planType: t,
                                            spaceStore: i,
                                            transaction: r
                                        } = e;
                                        (0, a().z)({
                                            store: i,
                                            data: {
                                                plan_type: t
                                            },
                                            transaction: r
                                        })
                                    }({
                                        planType: "personal",
                                        spaceStore: c,
                                        transaction: t
                                    }), e) {
                                    for (let e of (0, i(709633).O)({
                                            teamStore: s,
                                            includeArchivedPages: !0
                                        }) ? ? []) {
                                        let i = e.getRole();
                                        if (!i) continue;
                                        let o = {
                                                type: "user_permission",
                                                user_id: u,
                                                role: i
                                            },
                                            s = [...e.getPermissionItems().filter(e => !r().eu(e) && !r().T6(e) && !r().Lg(e)), o];
                                        (0, a().z)({
                                            store: e,
                                            data: {
                                                parent_id: c.id,
                                                parent_table: n().NXh,
                                                permissions: s
                                            },
                                            transaction: t
                                        })
                                    }(0, a().z)({
                                        store: s,
                                        data: {
                                            team_pages: []
                                        },
                                        transaction: t
                                    })
                                }
                            }
                        }), i(649807).yB(t, {
                            store: s,
                            from: l
                        })
                    } else(0, i(377796).createAndCommit)({
                        userAction: "teamsHelpers.archiveTeam",
                        environment: t,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: c.id
                        },
                        perform: e => {
                            (0, i(852812).n)({
                                teamStore: s,
                                update: o(u),
                                transaction: e
                            })
                        }
                    });
                    i(649807).NB(t, {
                        store: s,
                        from: l
                    }), (0, i(563591).tourIsActiveInSidebarStep)(i(563591).default.state) && i(563591).default.setState({
                        type: "inactive"
                    }), i(48023)._.setState({
                        open: !1,
                        limitMembers: !0,
                        memberFilterQuery: "",
                        tab: void 0
                    }), (0, i(356164).eh)(m)
                }
            }
        },
        660571: (e, t, i) => {
            i.d(t, {
                P: () => a
            }), i(296540);
            var r = i(474848);
            let n = {
                whiteSpace: "normal"
            };

            function a(e) {
                if (e.canArchive) return null;
                let t = e.reason;
                switch (t) {
                    case "isNotOwnerOfTeam":
                        return (0, r.jsx)("div", {
                            style: n,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "sidebar.outlinerTeamToggleButton.cannotArchiveTooltip.notOwner",
                                defaultMessage: "Only teamspace owners can archive teamspaces"
                            })
                        });
                    case "multipleUnarchivedTeams":
                        return (0, r.jsx)("div", {
                            style: n,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "sidebar.outlinerTeamToggleButton.cannotArchiveTooltip.multipleUnarchivedTeams",
                                defaultMessage: "To archive, make another teamspace default or archive all other teamspaces"
                            })
                        });
                    case "multipleWorkspaceMembers":
                    case "invalidUserOrSpaceView":
                        return (0, r.jsx)("div", {
                            style: n,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "sidebar.outlinerTeamToggleButton.cannotArchiveTooltip.moreThanOneMember",
                                defaultMessage: "To archive, there must only be one member in the workspace"
                            })
                        });
                    default:
                        (0, i(722371).HB)(t)
                }
            }
        },
        667961: (e, t, i) => {
            i.d(t, {
                q: () => r
            });
            async function r({
                store: e,
                environment: t,
                accessLevel: n,
                teamName: a,
                from: o,
                isDefault: s
            }) {
                var l;
                let c = e.isDefault() ? ? !1,
                    d = e.getTeamAccessLevel(),
                    u = (null == (l = (0, i(867819).P)({
                        environment: t,
                        teamStore: e
                    })) ? void 0 : l.teamGuestsCount) ? ? 0;
                if (n === d && s === c || !await i(505034).oP({
                        teamName: a,
                        accessLevel: n,
                        currentIsDefault: c,
                        isDefault: s,
                        numberOfTeamGuests: u
                    })) return !1;
                let m = e.getPermissionItems(),
                    p = e.getSettingsStore().getValue();
                if (!p || !m) return !1;
                let f = (0, i(422280).gP)({
                        teamValue: {
                            id: e.id,
                            permissions: m,
                            settings: p
                        },
                        accessLevel: n,
                        isDefault: s
                    }),
                    h = e.pointer.spaceId,
                    {
                        performResult: {
                            result: v
                        }
                    } = (0, i(377796).createAndCommit)({
                        userAction: "teamActions.setTeamAccessLevel",
                        environment: t,
                        canUndo: !0,
                        cellTarget: h ? {
                            spaceWithId: h
                        } : void 0,
                        perform: r => {
                            (0, i(881110).z)({
                                environment: t,
                                transaction: r,
                                teamStore: e,
                                isDefault: "invite_only" !== f.settings.space_member_join_access && s,
                                from: o,
                                createNewTeamFlowId: void 0
                            });
                            let n = (0, i(779437).b)({
                                environment: t,
                                store: e,
                                permissionItems: f.permissions,
                                transaction: r
                            });
                            return (0, i(173157).z)({
                                store: e.getSettingsStore(),
                                data: f.settings,
                                transaction: r
                            }), {
                                result: n
                            }
                        }
                    });
                return v && i(649807).xZ(t, {
                    store: e,
                    old_access_level: d,
                    new_access_level: n,
                    from: o
                }), v
            }
        },
        728237: (e, t, i) => {
            i.d(t, {
                O: () => r
            });

            function r() {
                return (0, i(682985).K8)(() => {
                    var e;
                    return (null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_date_mention_format) ? ? i(943003).Yz
                }, [])
            }
        },
        781508: (e, t, i) => {
            i.d(t, {
                h: () => a
            });
            var r = () => i(546605);
            class n extends r().Store {
                getInitialState() {
                    return {}
                }
                getUnit(e) {
                    var t, i;
                    let {
                        userId: r,
                        spaceId: n,
                        teamId: a
                    } = e, o = null == (t = this.state[r]) || null == (t = t[n]) ? void 0 : t[a];
                    return o ? { ...o,
                        members: null == (i = o.members) ? void 0 : i.slice()
                    } : void 0
                }
                getOrCreateUnit(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        teamId: r
                    } = e;
                    return this.state[t] || (this.state[t] = {}), this.state[t][i] || (this.state[t][i] = {}), this.state[t][i][r] || (this.state[t][i][r] = {
                        members: void 0,
                        isStale: !1,
                        lastFetchTime: void 0
                    }), this.state[t][i][r]
                }
                readTeamMembership(e) {
                    var t;
                    let {
                        userId: i,
                        spaceId: r,
                        teamId: n
                    } = e;
                    return null == (t = this.state[i]) || null == (t = t[r]) || null == (t = t[n]) ? void 0 : t.members
                }
                writeTeamMembership(e) {
                    let {
                        userId: t,
                        spaceId: i,
                        teamId: r,
                        members: n
                    } = e, a = this.getOrCreateUnit({
                        userId: t,
                        spaceId: i,
                        teamId: r
                    });
                    a.members = n, a.isStale = !1, a.lastFetchTime = Date.now(), this.emit()
                }
                markStale(e) {
                    var t;
                    let {
                        userId: i,
                        spaceId: r,
                        teamId: n
                    } = e, a = null == (t = this.state[i]) || null == (t = t[r]) ? void 0 : t[n];
                    a && (a.isStale = !0, this.emit())
                }
                markAllStaleInSpace(e) {
                    var t;
                    let {
                        userId: i,
                        spaceId: r
                    } = e, n = null == (t = this.state[i]) ? void 0 : t[r];
                    if (n) {
                        for (let e of Object.keys(n)) n[e].isStale = !0;
                        this.emit()
                    }
                }
            }
            let a = new n
        },
        852812: (e, t, i) => {
            i.d(t, {
                n: () => r
            });

            function r(e) {
                let {
                    teamStore: t,
                    update: r,
                    transaction: n
                } = e;
                (0, i(173157).z)({
                    store: t,
                    data: (0, i(627179).g_)(r),
                    transaction: n
                })
            }
        },
        866290: (e, t, i) => {
            i.d(t, {
                m: () => r
            });

            function r(e) {
                let t = e.isArchived(),
                    r = (0, i(558951).S)({
                        spaceStore: e.getSpaceStore()
                    }),
                    n = e.getTeamAccessLevel();
                return t && (r > 0 || "open" === n)
            }
        },
        874048: (e, t, i) => {
            i.d(t, {
                fj: () => n,
                jG: () => a,
                qO: () => o
            }), i(581454);
            var r = i(296540);

            function n(e) {
                let t = (0, i(533992).v3)(),
                    {
                        userId: r,
                        spaceId: n,
                        teamIds: a
                    } = e;
                return (0, i(682985).K8)(() => (0, i(958692).z5)({
                    environment: t,
                    userId: r,
                    spaceId: n,
                    teamIds: a
                }), [t, r, n, a])
            }

            function a(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teams: o
                } = e, {
                    countsByTeamId: s,
                    isLoading: l
                } = n({
                    userId: t,
                    spaceId: a,
                    teamIds: (0, r.useMemo)(() => o.map(e => e.id), [o])
                });
                return {
                    teams: (0, r.useMemo)(() => (0, i(140289).z_)({
                        teams: o,
                        countsByTeamId: s
                    }), [o, s]),
                    countsByTeamId: s,
                    isLoading: l
                }
            }

            function o(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamId: a
                } = e, {
                    countsByTeamId: o,
                    isLoading: s
                } = n({
                    userId: t,
                    spaceId: i,
                    teamIds: (0, r.useMemo)(() => a ? [a] : [], [a])
                });
                return {
                    counts: a ? o.get(a) : void 0,
                    isLoading: s
                }
            }
        },
        881110: (e, t, i) => {
            i.d(t, {
                z: () => r
            }), i(16280), i(944114);

            function r({
                environment: e,
                transaction: t,
                teamStore: n,
                isDefault: a,
                from: o,
                createNewTeamFlowId: s
            }) {
                if (n.isArchived() && a) throw Error("Archived team cannot be set as default team.");
                return n.isDefault() === a || ((0, i(173157).z)({
                    store: n,
                    data: {
                        is_default: a
                    },
                    transaction: t
                }), t.postSubmitCallbacks.push(t => {
                    t || i(649807).ug(e, {
                        store: n,
                        is_default_team: a,
                        create_new_team_flow_id: s,
                        from: o
                    })
                }), !0)
            }
        },
        924140: (e, t, i) => {
            async function r(e) {
                return !i(367154).A.state.open && await new Promise(t => {
                    i(367154).A.setState({
                        open: !0,
                        type: e,
                        onAccept: () => t(!0),
                        onCancel: () => t(!1)
                    })
                })
            }
            async function n({
                environment: e,
                spaceStore: t,
                teamStore: a,
                from: o,
                action: s
            }) {
                let l = e.currentUser.id;
                if (!l || !t || !(0, i(589539).j)({
                        userId: l,
                        spaceStore: t,
                        entrypoint: o
                    }) || !await r(s)) return !1;
                let c = t.id,
                    d = await e.api.callApi({
                        eventName: "setAdminPrivilegedTeamMembership",
                        environment: e,
                        data: {
                            spaceId: c,
                            teamId: a.id,
                            teamRole: function(e) {
                                switch (e) {
                                    case "joinTeamAsOwner":
                                    case "upgradeToOwner":
                                        return "owner";
                                    case "joinClosedOrPrivateTeamAsMember":
                                        return "member";
                                    default:
                                        (0, i(722371).HB)(e)
                                }
                            }(s)
                        }
                    });
                if ("failed" === d.type) return (0, i(21731).O)(d), !1;
                switch (s) {
                    case "joinTeamAsOwner":
                    case "joinClosedOrPrivateTeamAsMember":
                        let u = "joinTeamAsOwner" === s ? "owner" : "member";
                        (0, i(558389).s)({
                            environment: e,
                            teamStore: a,
                            spaceId: c,
                            from: o,
                            newRole: u,
                            usingAdminPrivileges: !0,
                            andNavigateToTeamHome: !1
                        });
                        break;
                    case "upgradeToOwner":
                        i(594311).KI(e, {
                            memberInfo: {
                                entity_type: "user",
                                user_id: l,
                                type: "member"
                            },
                            team_role: "owner",
                            store: a
                        });
                        let m = a.getName();
                        m && (0, i(356164).vH)(m);
                        break;
                    default:
                        (0, i(722371).HB)(s)
                }
                return !0
            }
            i.d(t, {
                z: () => n
            })
        }
    }
]);