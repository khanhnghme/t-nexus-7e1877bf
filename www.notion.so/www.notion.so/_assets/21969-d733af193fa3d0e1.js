"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21969], {
        17698: (e, t, a) => {
            a.d(t, {
                F: () => r
            });

            function r(e) {
                switch (e) {
                    case "team_browser":
                    case "duplicate_team":
                    case "create_team_from_page":
                    case "permission_item":
                    case "teams_dropdown_for_team_member":
                    case "teams_dropdown_for_group":
                    case "teamSidebar":
                    case "teamBrowserSearch":
                    case "teamBrowserUnjoinedTeams":
                    case "teamBrowserJoinedTeams":
                    case "team_breadcrumb_popup":
                    case "team_menu_header":
                    case "sidebar_team_modal":
                    case "team_invite_link":
                    case "teams_dropdown_space_settings_people":
                    case "share_menu":
                    case "team_home":
                    case "team_home_more_menu":
                    case "team_home_topbar":
                    case "slippery_slope_flyout_menu":
                    case "breadcrumb_browser":
                        return !1;
                    case "manage_teams_table":
                    case "team_settings_members":
                        return !0;
                    default:
                        (0, a(722371).HB)(e)
                }
            }
        },
        21731: (e, t, a) => {
            a.d(t, {
                O: () => r
            });

            function r(e) {
                a(647095).Qg(e), a(773352).log({
                    level: "error",
                    from: "teamActions",
                    type: "TeamApiError",
                    error: (0, a(416607).convertErrorToLog)(e.error),
                    data: {
                        miscDataToConvertToString: {
                            body: e.body,
                            status: e.status
                        }
                    }
                })
            }
        },
        54647: (e, t, a) => {
            async function r(e) {
                let t, {
                    type: r,
                    spaceStore: s,
                    initializeStore: n,
                    teamStore: m
                } = e;
                if ("inExistingStore" === r) {
                    let r = n.isEmptyPage(),
                        o = n.getParentStore();
                    if (await n.waitUntil(() => n.isDefined()), r && o && o.canEdit() && ("block" === o.table || "space" === o.table || "team" === o.table)) return i({ ...e,
                        destination: (0, a(208322).LT)(o)
                    });
                    t = (0, a(208322).LT)(n)
                } else "inTeam" === r ? t = (0, a(208322).LT)(m) : "inSpace" === r ? t = (0, a(208322).LT)(s) : (0, a(722371).HB)(r);
                return o({ ...e,
                    destination: t
                })
            }
            async function i(e) {
                let {
                    environment: t,
                    item: r,
                    spaceStore: i,
                    initializeStore: s
                } = e, n = await o(e);
                try {
                    return await (0, a(377796).createAndCommit)({
                        userAction: "createTemplateInstance.deleteCurrentPageStore",
                        environment: t,
                        cellTarget: {
                            spaceWithId: i.id
                        },
                        canUndo: !0,
                        perform: e => {
                            a(51932).oD({
                                environment: t,
                                blocks: [s],
                                transaction: e,
                                permanentlyDelete: !0
                            })
                        }
                    }).serverCommitResult, n
                } catch (e) {
                    e instanceof Error && a(773352).log({
                        level: "error",
                        from: "createTemplateInstance",
                        type: "deleteCurrentPageStoreError",
                        error: e,
                        data: {
                            miscDataToConvertToString: {
                                template_id: r.id,
                                template_block_id: r.rootId,
                                target_space_id: i.id,
                                public_template_name: r.name
                            }
                        }
                    })
                }
            }
            async function o(e) {
                var t;
                let r, {
                        environment: i,
                        item: o,
                        useRecordCache: n,
                        useMinimalTemplates: m,
                        spaceStore: l,
                        from: d,
                        isEmailShared: c,
                        destination: u
                    } = e,
                    p = n && !m ? o.previewRootId : o.rootId,
                    f = {
                        id: p,
                        spaceId: o.spaceId
                    },
                    g = new(a(970831)).B(i, {
                        table: a(832375).evP,
                        id: f.id,
                        spaceId: f.spaceId
                    });
                "onboarding" === d ? r = "onboarding" : "page_template_modal" === d ? r = "mobile_app" : "homepage_team" === d ? r = "team_home" : (0, a(722371).HB)(d);
                let T = await s({
                        environment: i,
                        templateSource: r,
                        sourceBlockId: p,
                        isEmailShared: c
                    }),
                    h = "onboarding" === r,
                    S = "mobile_app" === T.source ? await (0, a(918103)._3)({
                        environment: i,
                        sourceTemplateBlockStore: g,
                        templateId: null == (t = o.marketplaceTemplateMetadata) ? void 0 : t.templateId,
                        destination: u,
                        options: {
                            duplicateOnlyCollectionSchema: !1,
                            deepCopyTransclusionContainers: !0,
                            resolveTemplateVariables: !0
                        },
                        templateInstallationMetadata: { ...T,
                            source: "mobile_app"
                        },
                        from: d
                    }) : await (0, a(918103).hh)({
                        environment: i,
                        sourceBlocks: [g],
                        destination: u,
                        options: {
                            duplicateOnlyCollectionSchema: !1,
                            deepCopyTransclusionContainers: !0,
                            resolveTemplateVariables: !0
                        },
                        duplicateSubtreeGateName: "duplicate_subtree_template_flows",
                        unlockPage: !0,
                        templateInstallationMetadata: T,
                        shouldUseSynchronousDuplicationAPI: h,
                        from: d,
                        skipUserFacingMessages: !0
                    });
                return !S || a(300441).Q.isFail(S) || 0 === S.value.createdBlocks.length ? void a(773352).log({
                    level: "error",
                    from: "createTemplateInstance",
                    type: "duplicateTemplateError",
                    error: null != S && S.error ? S.error : Error("No response"),
                    data: {
                        miscDataToConvertToString: {
                            template_id: o.id,
                            template_block_id: o.rootId,
                            target_space_id: l.id,
                            public_template_name: o.name,
                            from: d
                        }
                    }
                }) : S.value.createdBlocks[0]
            }
            async function s(e) {
                let {
                    environment: t,
                    templateSource: r,
                    sourceBlockId: i,
                    isEmailShared: o
                } = e, s = await (0, a(887527).oC)(t, i);
                return {
                    context: "",
                    source: r,
                    isListedTemplate: !!s,
                    isFirstPartyPaidTemplate: void 0 !== s && (0, a(873144).Z1)(s),
                    isEmailShared: o
                }
            }
            a.d(t, {
                o: () => r
            }), a(16280)
        },
        153808: (e, t, a) => {
            a.d(t, {
                A: () => s
            }), a(898992), a(354520), a(581454);
            var r = () => a(546605),
                i = () => a(832375);
            class o extends r().Store {
                getInitialState() {
                    return {
                        initialized: !1
                    }
                }
                createTeamStoreFromCache({
                    environment: e,
                    teamId: t,
                    spaceId: r,
                    userId: o
                }) {
                    if (this.state.initialized && r && o && this.state.spaceId === r && this.state.userId === o) return new(a(681735)).h(e, {
                        table: i().yKj,
                        id: t
                    }, {
                        inMemoryRecordCache: this.state.inMemoryCache
                    })
                }
                initialize({
                    environment: e,
                    userId: t,
                    spaceId: r,
                    teamIds: o,
                    getRecordWithRole: s
                }) {
                    let n = new(a(870941)).A({
                        name: "GlobalEnterpriseAdminTeamsStore"
                    });
                    for (let e of o) {
                        let a = {
                            table: i().yKj,
                            id: e
                        };
                        n.setRecord({
                            pointer: a,
                            userId: t
                        }, s(a))
                    }
                    return this.setState({
                        initialized: !0,
                        spaceId: r,
                        userId: t,
                        inMemoryCache: n
                    }), o.map(a => this.createTeamStoreFromCache({
                        environment: e,
                        teamId: a,
                        spaceId: r,
                        userId: t
                    })).filter(a(722371).O9)
                }
            }
            let s = new o
        },
        189498: (e, t, a) => {
            a.d(t, {
                L: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    teamStore: r,
                    shouldScroll: i
                } = e;
                i && (0, a(639323).M)({
                    teamStore: r,
                    environment: t
                });
                let o = (0, a(709633).O)({
                    teamStore: r
                });
                o && !(o.length < 1) && ((0, a(545586).navigateToBlock)({
                    environment: t,
                    store: o[0],
                    pageVisitSource: a(254656).y8.JoinTeam
                }), a(649807)._L(t, {
                    store: r
                }))
            }
        },
        283632: (e, t, a) => {
            a.d(t, {
                fK: () => r
            });

            function r(e) {
                return void 0 === function(e) {
                    let {
                        space: t,
                        spaceUser: r
                    } = e;
                    return void 0 !== t && null != r && r.isWorkspaceOwner() ? function(e) {
                        if (!(0, a(262166).OX)(e.getSubscriptionTier())) return new(a(101787)).rTV("The feature is not available on your current plan type.", {
                            type: "generic_insufficient_plan_type"
                        })
                    }(t) : new(a(101787)).rTV("You do not have permissions to this feature in the requested space.", {
                        type: "generic_insufficient_permissions"
                    })
                }(e)
            }
        },
        356164: (e, t, a) => {
            a.d(t, {
                VV: () => s,
                WE: () => l,
                cO: () => c,
                eh: () => d,
                fE: () => n,
                hX: () => m,
                jH: () => u,
                vH: () => o
            }), a(898992), a(430670);
            let r = (0, a(109939).YK)({
                leftTeam: {
                    id: "teamPermissionsActions.leftTeam",
                    defaultMessage: "Left {teamName}"
                },
                leftTeamNoName: {
                    id: "teamPermissionsActions.leftTeamNoName",
                    defaultMessage: "Left teamspace"
                },
                leftYetStillInTeam: {
                    id: "teamPermissionsActions.leftYetStillInTeam",
                    defaultMessage: "You are still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because you are a member of the following groups: {groupsString}"
                },
                removedYetStillInTeam: {
                    id: "teamPermissionsActions.removedYetStillInTeam",
                    defaultMessage: "{hasMemberName, select, true {{memberName}} other {The removed user}} is still in {hasTeamName, select, true {{teamName}} other {the teamspace}} because they are a member of the following groups: {groupsString}"
                },
                joinedTeam: {
                    id: "teamPermissionsActions.joinedTeam",
                    defaultMessage: "Joined {teamName}"
                },
                joinedTeamUsingAdminPrivileges: {
                    id: "teamPermissionsActions.joinedTeamUsingAdminPrivileges",
                    defaultMessage: "Joined {teamName} using admin privileges"
                },
                upgradedSelfToOwner: {
                    id: "teamPermissionsActions.upgradedSelfToOwnerUsingAdminPrivileges",
                    defaultMessage: "Became owner of {teamName} using admin privileges"
                },
                archivedTeam: {
                    id: "teamPermissionsActions.archivedTeam",
                    defaultMessage: "Archived {teamName}"
                },
                restoredTeam: {
                    id: "teamPermissionsActions.restoredTeam",
                    defaultMessage: "Restored {teamName}"
                },
                restoredTeamNoName: {
                    id: "teamPermissionsActions.restoredTeamNoName",
                    defaultMessage: "Restored teamspace"
                },
                duplicatedTeam: {
                    id: "teamPermissionsActions.duplicatedTeam",
                    defaultMessage: "Duplicated {teamName}"
                },
                duplicatedTeamNoName: {
                    id: "teamPermissionsActions.duplicatedTeamNoName",
                    defaultMessage: "Duplicated teamspace"
                }
            });

            function i(e, t, r) {
                let i = a(962299).A.formatMessage(e, { ...t
                });
                a(436555).D6({
                    label: i,
                    durationMs: r
                })
            }

            function o(e) {
                return i(r.upgradedSelfToOwner, {
                    teamName: e
                })
            }

            function s({
                teamName: e,
                usingAdminPrivileges: t
            }) {
                return i(t ? r.joinedTeamUsingAdminPrivileges : r.joinedTeam, {
                    teamName: e
                })
            }

            function n(e) {
                return e ? i(r.leftTeam, {
                    teamName: e
                }) : i(r.leftTeamNoName)
            }

            function m(e, t) {
                let o = (0, a(890142).l)(t.flatMap(e => e.name || []));
                i(r.leftYetStillInTeam, {
                    hasTeamName: void 0 !== e,
                    teamName: e,
                    groupsString: o
                }, a(441742).LX)
            }

            function l(e, t, o) {
                let s = (0, a(890142).l)(o.flatMap(e => e.name || []));
                i(r.removedYetStillInTeam, {
                    hasMemberName: void 0 !== e,
                    hasTeamName: void 0 !== t,
                    memberName: e,
                    teamName: t,
                    groupsString: s
                }, a(441742).LX)
            }

            function d(e) {
                return i(r.archivedTeam, {
                    teamName: e
                })
            }

            function c(e) {
                return e ? i(r.restoredTeam, {
                    teamName: e
                }) : i(r.restoredTeamNoName)
            }

            function u(e) {
                return e ? i(r.duplicatedTeam, {
                    teamName: e
                }) : i(r.duplicatedTeamNoName)
            }
        },
        372031: (e, t, a) => {
            a.d(t, {
                M: () => r
            });

            function r({
                environment: e,
                spaceStore: t,
                teamId: i,
                from: o
            }) {
                var s;
                if (!(0, a(17698).F)(o)) return;
                let n = t.getModel(),
                    m = null == (s = a(728372).AppStoreCurrentUserStore.state) ? void 0 : s.id;
                if (!m) return;
                let l = (0, a(993077).dp)(t, m).getModel();
                if (!l || !(0, a(283632).fK)({
                        space: n,
                        spaceUser: l
                    })) return;
                let d = a(153808).A.createTeamStoreFromCache({
                        environment: e,
                        teamId: i,
                        spaceId: t.id,
                        userId: m
                    }),
                    c = a(68809).f.getSpacePermissionGroupIds({
                        spaceId: t.id
                    });
                if (null != d && d.canRead() && function(e) {
                        let {
                            teamStore: t,
                            userId: r,
                            userPermissionGroups: i,
                            spaceUserModel: o
                        } = e;
                        return "private" === t.getTeamAccessLevel() && "none" === (0, a(228091).a)({
                            teamStore: t,
                            userId: r,
                            userPermissionGroups: i,
                            spaceUser: o
                        })
                    }({
                        teamStore: d,
                        spaceUserModel: l,
                        userPermissionGroups: c,
                        userId: m
                    })) return d
            }
        },
        639323: (e, t, a) => {
            a.d(t, {
                M: () => r
            });

            function r({
                teamStore: e,
                environment: t
            }) {
                if (a(986939).A.isMobile) return;
                let i = (0, a(646044).p)(e),
                    o = a(791869).A.findDropTargetFromKey(i);
                if (o) {
                    let r = o.getNode();
                    if (!(r instanceof HTMLElement)) return;
                    if (a(862921).A.SidebarScroller) {
                        var s;
                        let i = (null == (s = a(862921).A.SidebarScroller.getNode()) ? void 0 : s.offsetTop) || 0,
                            o = a(862921).A.SidebarScroller.getNode();
                        (0, a(661767).V)({
                            element: o,
                            environment: t,
                            options: {
                                top: r.offsetTop - i,
                                left: 0,
                                behavior: "smooth"
                            }
                        }), a(854722).A.setState(e.id), setTimeout(() => {
                            a(854722).A.state === e.id && a(854722).A.setState(void 0)
                        }, 1500)
                    }
                }
            }
        },
        646044: (e, t, a) => {
            a.d(t, {
                p: () => r
            });

            function r(e) {
                return `TeamToggle_${e.id}`
            }
        },
        692212: (e, t, a) => {
            a.d(t, {
                U: () => r
            }), a(898992), a(672577), a(581454);

            function r(e) {
                let t = (0, a(862085).i0)(e).map(e => e.permissionItem).find(a(642157).Lg),
                    r = (null == t ? void 0 : t.role) ? ? "none";
                return {
                    spacePermissionRole: r,
                    accessLevel: "none" === r ? "private" : "closed"
                }
            }
        },
        821969: (e, t, a) => {
            async function r(e) {
                let {
                    spacePermissionRole: t,
                    accessLevel: r
                } = (0, a(692212).U)(e), i = (0, a(862085).i0)(e).map(e => e.permissionItem);
                await (0, a(975162).lX)(i, 5, async t => {
                    if ((0, a(642157).B2)(t)) {
                        let r = (0, a(993077).sE)(e.getSpaceStore(), t.user_id);
                        await (null == r ? void 0 : r.load())
                    }
                });
                let o = i.filter(t => {
                        if ((0, a(642157).B2)(t)) {
                            let r = (0, a(993077).sE)(e.getSpaceStore(), t.user_id);
                            if (null != r && r.isMember()) return !0
                        }
                        return !!(0, a(642157).Ds)(t)
                    }),
                    s = function(e) {
                        if (0 !== e.length) return e.reduce((e, t) => (0, a(138798).Y1)(t, e) ? t : e, e[0])
                    }(o.map(e => e.role)) ? ? "read_and_write",
                    n = (0, a(138798).$q)(s, t);
                return {
                    accessLevel: r,
                    spacePermissionRole: t,
                    teamPermissionRole: n,
                    members: o.map(e => {
                        let {
                            type: t
                        } = e;
                        return "user_permission" === t ? {
                            entity_type: "user",
                            type: "member",
                            user_id: e.user_id
                        } : "group_permission" === t ? {
                            entity_type: "group",
                            type: "member",
                            group_id: e.group_id
                        } : void(0, a(722371).HB)(t)
                    })
                }
            }
            async function i({
                environment: e,
                name: t,
                description: r,
                icon: o,
                accessLevel: s,
                isDefault: n,
                flowId: m,
                createTeamHome: d,
                teamPermissionRole: c,
                spacePermissionRole: u,
                members: p,
                settings: f
            }) {
                let g = a(728372).AppStoreSidebarSpaceStore.state,
                    T = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!g) throw Error("currentSpaceStore does not exist");
                if (!T) throw Error("currentSpaceViewStore does not exist");
                let h = a(680007).default.mark("client_create_team_latency"),
                    S = g.id,
                    _ = await e.api.callApi({
                        eventName: "createTeam",
                        environment: e,
                        data: {
                            spaceId: S,
                            name: t,
                            description: r,
                            icon: o,
                            isDefault: n,
                            accessLevel: s,
                            teamPermissionRole: c,
                            spacePermissionRole: u,
                            members: p,
                            settings: f
                        }
                    });
                if ("failed" === _.type) return void(0, a(21731).O)(_);
                let {
                    teamId: v
                } = _.data, b = a(681735).h.createChildStore(g, {
                    table: a(832375).yKj,
                    id: v,
                    spaceId: S
                });
                await b.load();
                let w = b.getSpaceId(),
                    A = b && w && {
                        id: b.id,
                        table: a(832375).VlP,
                        spaceId: w
                    },
                    I = b && A && a(356912).m.createChildStore(b, A);
                await (null == I ? void 0 : I.load());
                let M = b && w && a(970831).B.createChildStore(b, {
                    id: (0, a(731162).t)(b.id),
                    table: a(832375).evP,
                    spaceId: w
                });
                return await (null == M ? void 0 : M.load()), d && l({
                    environment: e,
                    teamStore: b,
                    spaceStore: g,
                    spaceViewStore: T
                }), a(649807)._P(e, {
                    store: b,
                    flowId: m
                }), a(680007).default.measure(h, {}), b
            }

            function o({
                environment: e,
                page: t
            }) {
                var r;
                let i = a(92513).JW(),
                    s = (null == (r = t.getParentPointer()) ? void 0 : r.table) !== a(832375).yKj;
                a(649807).H8(e, {
                    from: s ? "page_to_team_nested" : "page_to_team",
                    flowId: i
                }), a(905132).A.setState({
                    open: !0,
                    pageStore: t,
                    flowId: i
                })
            }
            async function s({
                environment: e,
                page: t,
                flowId: o,
                intl: n
            }) {
                var m;
                let {
                    accessLevel: l,
                    spacePermissionRole: d,
                    teamPermissionRole: c,
                    members: u
                } = await r(t), p = (t.isDefined() ? t.getModel().getRenderTitle({
                    intl: n,
                    userTimeZone: (0, a(714350).P)(),
                    getRecordModel: t.getRecordModel
                }) : void 0) ? ? a(247438).q4_(t.getTitleValue()), f = await i({
                    environment: e,
                    name: p,
                    icon: null == (m = t.getIcon()) ? void 0 : m.icon,
                    accessLevel: l,
                    isDefault: !1,
                    description: "",
                    flowId: o,
                    createTeamHome: !1,
                    teamPermissionRole: c,
                    spacePermissionRole: d,
                    members: u
                });
                if (!f) return;
                let g = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!g) return;
                let T = await (0, a(457442).U)(),
                    h = f.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "teamActions.movePageToCreatedTeam",
                    environment: e,
                    canUndo: !0,
                    cellTarget: h ? {
                        spaceWithId: h
                    } : void 0,
                    perform: a => {
                        T({
                            environment: e,
                            spaceViewStore: g,
                            transaction: a,
                            teamStore: f,
                            blocksToMove: [t],
                            location: {
                                type: "append"
                            }
                        })
                    }
                }), (0, a(976880).F)({
                    environment: e,
                    teamId: f.id,
                    tab: a(48023).p.Members,
                    from: "create_team_from_page"
                }), await new Promise(t => setTimeout(() => (0, a(639323).M)({
                    teamStore: f,
                    environment: e
                }), 100))
            }
            async function n({
                environment: e,
                name: t,
                description: r,
                icon: i,
                flowId: o,
                trackCreateTeamComplete: s
            }) {
                let m = a(728372).AppStoreSidebarSpaceStore.state,
                    d = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!m) throw Error("currentSpaceStore does not exist");
                if (!d) throw Error("currentSpaceViewStore does not exist");
                let c = m.id,
                    u = await e.api.callApi({
                        eventName: "enableTeams",
                        environment: e,
                        data: {
                            spaceId: c,
                            defaultTeamName: t,
                            defaultTeamIcon: i,
                            defaultTeamDescription: r
                        }
                    });
                if ("failed" === u.type) return void(0, a(21731).O)(u);
                let {
                    teamId: p
                } = u.data, f = a(681735).h.createChildStore(m, (0, a(422280).KF)(p, c));
                return await f.load(), l({
                    environment: e,
                    teamStore: f,
                    spaceStore: m,
                    spaceViewStore: d
                }), a(649807).b0(e, {
                    spaceId: c,
                    store: f,
                    flowId: o
                }), s && p && a(649807)._P(e, {
                    store: f,
                    flowId: o
                }), f
            }
            async function m({
                environment: e,
                teamStore: t,
                from: r,
                buttonPopupStore: o
            }) {
                var s;
                if (!e.currentUser.id) return !1;
                let n = a(92513).JW(),
                    l = t.isDefault(),
                    d = t.getTeamAccessLevel();
                if (l) return !1;
                let c = t.getName(),
                    u = await i({
                        environment: e,
                        name: (0, a(441998).Q)(c || ""),
                        description: "",
                        icon: t.getRawIcon(),
                        accessLevel: d,
                        isDefault: l,
                        createTeamHome: !0,
                        teamPermissionRole: null == (s = t.getTeamPermission()) ? void 0 : s.role,
                        spacePermissionRole: t.getSpacePermissionRole(),
                        members: [],
                        settings: t.getSettings(),
                        flowId: n
                    });
                return !!u && (a(649807).KK(e, {
                    store: u,
                    from: r
                }), (0, a(189498).L)({
                    environment: e,
                    teamStore: u,
                    shouldScroll: !0
                }), (0, a(976880).F)({
                    environment: e,
                    teamId: u.id,
                    tab: a(48023).p.General,
                    from: "duplicate_team",
                    buttonPopupStore: o
                }), new Promise(e => setTimeout(e, 500)).then(() => {
                    (0, a(356164).jH)(c)
                }), !0)
            }
            async function l(e) {
                var t;
                let {
                    environment: r,
                    teamStore: i,
                    spaceStore: o,
                    spaceViewStore: s
                } = e, n = (t = a(962299).A.getIntl(), (0, a(322095).B)(a(606430).w.teamsHomepage, t));
                return !!await (0, a(54647).o)({
                    environment: r,
                    item: n,
                    spaceStore: o,
                    spaceViewStore: s,
                    useMinimalTemplates: !1,
                    type: "inTeam",
                    teamStore: i,
                    from: "homepage_team"
                }) || (a(773352).log({
                    level: "error",
                    from: "teamActions",
                    type: "createHomepageOnTeamCreation-PageNotCreated"
                }), !1)
            }
            a.d(t, {
                Vs: () => o,
                gj: () => i,
                v4: () => s,
                hX: () => m,
                oH: () => n
            }), a(16280), a(898992), a(354520), a(581454), a(908872)
        },
        854722: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            let r = a(546605).Store.createValue(void 0, {
                name: "TeamHighlightStore"
            })
        },
        890142: (e, t, a) => {
            a.d(t, {
                l: () => i
            });
            let r = (0, a(109939).YK)({
                twoItems: {
                    id: "formatSettings.twoItems",
                    defaultMessage: "{item1} and {item2}"
                },
                threeOrMoreItems: {
                    id: "formatSettings.threeOrMoreItems",
                    defaultMessage: "{item1}, and {numberOfOther} others"
                },
                twoItemsWithAmpersand: {
                    id: "formatSettings.twoItems.withAmpersand",
                    defaultMessage: "{item1} & {item2}"
                },
                threeOrMoreItemsWithAmpersand: {
                    id: "formatSettings.threeOrMoreItems.withAmpersand",
                    defaultMessage: "{item1}, & {numberOfOther} others"
                },
                threeOrMoreItemsWithAmpersandAndRemoveComma: {
                    id: "formatSettings.threeOrMoreItems.withAmpersandAndRemoveComma",
                    defaultMessage: "{item1} & {numberOfOther} others"
                }
            });

            function i(e, t) {
                let {
                    removeComma: i,
                    useAmpersand: o
                } = t || {};
                if (0 === e.length) return "";
                let s = e[0];
                if (1 === e.length) return s;
                let n = e[1];
                if (2 === e.length) return o ? a(962299).A.formatMessage(r.twoItemsWithAmpersand, {
                    item1: s,
                    item2: n
                }) : a(962299).A.formatMessage(r.twoItems, {
                    item1: s,
                    item2: n
                });
                let m = e.length - 1;
                return o ? i ? a(962299).A.formatMessage(r.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: s,
                    numberOfOther: m
                }) : a(962299).A.formatMessage(r.threeOrMoreItemsWithAmpersand, {
                    item1: s,
                    numberOfOther: m
                }) : a(962299).A.formatMessage(r.threeOrMoreItems, {
                    item1: s,
                    numberOfOther: m
                })
            }
        },
        905132: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var r = () => a(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new i
        },
        976880: (e, t, a) => {
            a.d(t, {
                F: () => r
            });

            function r({
                environment: e,
                teamId: t,
                tab: i,
                from: o,
                buttonPopupStore: s
            }) {
                let n = (0, a(328765).S)();
                if (!n) return;
                let m = a(681735).h.createChildStore(n, {
                    table: a(832375).yKj,
                    id: t
                });
                if (m.canRead()) a(48023)._.update(e => ({ ...e,
                    open: !0,
                    tab: i,
                    teamStore: m,
                    viewingUnjoinedPrivateTeamAsEnterpriseAdmin: !1
                }));
                else {
                    let r = (0, a(372031).M)({
                        environment: e,
                        spaceStore: n,
                        teamId: t,
                        from: o
                    });
                    if (!r) return;
                    a(48023)._.update(e => ({ ...e,
                        open: !0,
                        tab: i,
                        unjoinedPrivateTeamStore: r,
                        viewingUnjoinedPrivateTeamAsEnterpriseAdmin: !0
                    }))
                }
                s && (a(630121).A.removeNamedPopup("team_more_actions"), s.setState({ ...s.state,
                    open: !1
                }))
            }
        }
    }
]);