"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [48095], {
        32323: (e, a, t) => {
            t.d(a, {
                m: () => s
            });

            function s(e) {
                let a = (0, t(533992).v3)();
                return (0, t(682985).K8)(() => {
                    var s;
                    return void 0 === e ? 0 : (null == (s = (0, t(867819).P)({
                        environment: a,
                        teamStore: e
                    })) ? void 0 : s.ownersCount) ? ? 0
                }, [a, e])
            }
        },
        45370: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var s = () => t(546605);
            class i extends s().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let n = new i
        },
        77868: (e, a, t) => {
            t.d(a, {
                J: () => s
            });

            function s(e) {
                return (0, t(682985).K8)(() => !!e && (0, t(648334).x)(e), [e])
            }
        },
        107885: (e, a, t) => {
            t.d(a, {
                z: () => r
            });
            var s = t(296540),
                i = t(474848);
            let n = function(e) {
                let {
                    teamStore: a,
                    style: n,
                    hoveredStyle: r
                } = e, [o, l] = (0, s.useState)(!1), m = (0, t(682985).K8)(() => a.getName(), [a]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(t(988022).p, {
                        style: n,
                        hoveredStyle: r,
                        onClick: () => l(!0),
                        children: (0, i.jsx)(t(109939).sA, {
                            id: "teamRequestButton.requestButton.label",
                            defaultMessage: "Request"
                        })
                    }), (0, i.jsx)(t(980183).A, {
                        teamStore: a,
                        teamName: m,
                        teamId: a.id,
                        isModalOpen: o,
                        onDismiss: () => l(!1)
                    })]
                })
            };

            function r(e) {
                let {
                    teamStore: a,
                    style: s,
                    hoveredStyle: r
                } = e, o = (0, t(533992).v3)(), l = (0, t(77868).J)(a), m = (0, t(682985).K8)(() => a.getTeamAccessLevel(), [a]), c = (0, t(960253).I)(() => ({
                    joinTeamButton: {
                        maxHeight: 26,
                        marginInlineStart: 10,
                        paddingInlineStart: 10,
                        paddingInlineEnd: 10,
                        borderRadius: 100,
                        fontSize: 13,
                        fontWeight: t(699422).Wy.semibold,
                        background: t(632079).Tj.buttonHoveredBackground,
                        alignSelf: "center",
                        ...s
                    },
                    joinTeamButtonHoveredStyle: {
                        background: t(632079).Tj.buttonPressedBackground,
                        ...r
                    }
                }), [s, r]), d = (0, t(32323).m)(a), u = (0, t(682985).K8)(() => (0, t(887788).h)(o), [o]);
                return l ? (0, i.jsx)(t(696310).A, { ...e,
                    style: c.joinTeamButton,
                    hoveredStyle: c.joinTeamButtonHoveredStyle
                }) : !l && "open" === m || u && 0 === d ? (0, i.jsx)(t(328987).A, { ...e,
                    style: c.joinTeamButton,
                    hoveredStyle: c.joinTeamButtonHoveredStyle
                }) : l || "closed" !== m ? null : (0, i.jsx)(n, {
                    teamStore: a,
                    style: c.joinTeamButton,
                    hoveredStyle: c.joinTeamButtonHoveredStyle
                })
            }
        },
        123026: (e, a, t) => {
            t.d(a, {
                Z: () => s
            }), t(898992), t(354520), t(430670);
            async function s({
                environment: e,
                teamStore: a,
                teamMemberInfos: i,
                isSettingDefaultTeam: n,
                createNewTeamFlowId: r
            }) {
                let o = a.getSpaceId();
                if (!o) return !1;
                let l = e.currentUser.id;
                if (!o || !l || "failed" === (await e.api.callApi({
                        eventName: "updateTeamMembers",
                        environment: e,
                        data: {
                            spaceId: o,
                            teamId: a.id,
                            newMembersToAdd: i,
                            isSettingDefaultTeam: n,
                            addNewMembersToSpace: (0, t(216260).El)()
                        },
                        userId: l
                    })).type) return !1;
                if (!n) {
                    let s = i.flatMap(e => "user" !== e.entity_type ? [] : e.user_id),
                        n = s.length,
                        o = i.filter(e => "group" === e.entity_type).length;
                    n > 0 && t(649807).PA(e, {
                        store: a,
                        num_members_invited: n,
                        create_new_team_flow_id: r,
                        members_invited: s
                    }), o > 0 && t(649807).En(e, {
                        store: a,
                        num_groups_invited: o,
                        create_new_team_flow_id: r
                    })
                }
                return !0
            }
        },
        152880: (e, a, t) => {
            t.d(a, {
                S: () => i
            });
            var s = () => t(546605);
            class i extends s().Store {
                getInitialState() {
                    return {
                        modalOpen: !1,
                        tokenQuery: "",
                        inviteTargets: [],
                        inviteRole: "member",
                        table: t(832375).yKj,
                        isFocused: !0,
                        flowId: void 0,
                        inputFocus: "invitee",
                        emailMessage: ""
                    }
                }
            }
        },
        225455: (e, a, t) => {
            t.d(a, {
                i: () => s
            });
            async function s(e) {
                let {
                    environment: a,
                    currentUserId: s,
                    teamStore: i,
                    spaceId: n,
                    from: r,
                    andNavigateToTeamHome: o
                } = e;
                if (!s) return !1;
                let l = await a.api.callApi({
                    eventName: "updateTeamMembers",
                    environment: a,
                    data: {
                        spaceId: n,
                        teamId: i.id,
                        newMembersToAdd: [{
                            type: "member",
                            entity_type: "user",
                            user_id: s
                        }]
                    }
                });
                return "failed" === l.type ? ((0, t(21731).O)(l), !1) : ((0, t(558389).s)({
                    environment: a,
                    teamStore: i,
                    spaceId: n,
                    from: r,
                    newRole: "member",
                    usingAdminPrivileges: !1,
                    andNavigateToTeamHome: o
                }), !0)
            }
        },
        271218: (e, a, t) => {
            t.d(a, {
                h: () => s
            });

            function s(e) {
                let a = (0, t(533992).v3)();
                return (0, t(682985).K8)(() => {
                    var s;
                    return void 0 === e ? 0 : (null == (s = (0, t(867819).P)({
                        environment: a,
                        teamStore: e
                    })) ? void 0 : s.membersIncludingOwnersCount) ? ? 0
                }, [a, e])
            }
        },
        296696: (e, a, t) => {
            t.d(a, {
                J: () => s
            });
            async function s({
                environment: e,
                teamStore: a,
                from: i,
                userGroupsInTeam: n
            }) {
                let r = e.currentUser.id;
                return !!r && await (0, t(545298).f)({
                    environment: e,
                    teamStore: a,
                    userId: r,
                    from: i,
                    userGroupsInTeam: n
                })
            }
        },
        328987: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var s = t(296540),
                i = t(474848);
            let n = function(e) {
                let {
                    teamStore: a,
                    from: n,
                    navigateToTeamHomeOnJoin: r,
                    style: o,
                    hoveredStyle: l,
                    icon: m,
                    isRed: c
                } = e, d = (0, t(533992).v3)(), u = (0, t(682985).K8)(() => {
                    var e;
                    return null == (e = a.getSpaceStore()) ? void 0 : e.id
                }, [a]), p = (0, t(345776).T)(), g = (0, s.useCallback)(async () => {
                    u && p && await (0, t(225455).i)({
                        environment: d,
                        currentUserId: p,
                        teamStore: a,
                        spaceId: u,
                        from: n,
                        andNavigateToTeamHome: r ? ? !1
                    })
                }, [p, u, d, a, n, r]);
                return (0, i.jsxs)(t(988022).p, {
                    style: o,
                    hoveredStyle: l,
                    onClick: g,
                    colorPalette: c ? "red" : void 0,
                    children: [m ? m() : void 0, (0, i.jsx)(t(109939).sA, {
                        id: "outlinerTeamToggleButton.joinTeamButton",
                        defaultMessage: "Join"
                    })]
                })
            }
        },
        406134: (e, a, t) => {
            async function s({
                environment: e,
                teamId: a,
                spaceId: t,
                teamUserInfo: i,
                isSettingDefaultTeam: n,
                inviterId: r
            }) {
                let o = e.currentUser.id;
                return !!t && !!o && "failed" !== (await e.api.callApi({
                    eventName: "updateTeamMembers",
                    environment: e,
                    data: {
                        spaceId: t,
                        teamId: a,
                        newMembersToAdd: [i],
                        isSettingDefaultTeam: n,
                        addNewMembersToSpace: !1
                    },
                    userId: r
                })).type
            }
            t.d(a, {
                YT: () => m,
                D2: () => c,
                e2: () => n,
                g: () => r,
                Ip: () => o,
                Jk: () => l
            }), t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698), t(898992), t(354520);
            let i = (0, t(109939).YK)({
                joinTeamSuccessMessage: {
                    id: "teamInviteLinkActions.joinTeam.confirmationMessage",
                    defaultMessage: "Joined {teamName}"
                },
                requestTeamSuccessMessage: {
                    id: "teamInviteLinkActions.requestAccess.successMessage",
                    defaultMessage: "Successfully requested membership"
                },
                requestTeamFailureMessage: {
                    id: "teamInviteLinkActions.requestAccess.failureMessage",
                    defaultMessage: "Failed to request membership"
                }
            });
            async function n({
                environment: e,
                userId: a,
                teamStore: o,
                user: l
            }) {
                let m = o.getSpaceId();
                !m || await s({
                    environment: e,
                    teamId: o.id,
                    spaceId: m,
                    teamUserInfo: l,
                    isSettingDefaultTeam: !1,
                    inviterId: a
                }) && (t(649807).vo(e, {
                    store: o,
                    joined_role: "member",
                    from: "team_invite_link"
                }), await r({
                    environment: e,
                    userId: a,
                    teamStore: o
                }), t(436555).D6({
                    label: t(962299).A.formatMessage(i.joinTeamSuccessMessage, {
                        teamName: o.getName()
                    })
                }))
            }
            async function r({
                environment: e,
                userId: a,
                teamStore: s
            }) {
                let i = t(728372).AppStoreCurrentUserRootStore.state,
                    n = s.getSpaceId();
                if (!n || !i) return;
                let o = i.getSpaceViewStores().filter(e => e.getSpaceId() === n)[0];
                await (0, t(72713).t)({
                    environment: e,
                    spaceViewStore: o,
                    userSettingsStore: void 0,
                    userRootStore: i,
                    pageVisitSource: t(254656).y8.JoinTeam,
                    navigationType: "switchingToOrLoadingSpace"
                }), (0, t(455205).fetchUnfetchedTeamsFromLocalStorage)(), t(205885).A.state.online && (0, t(455205).fetchUnfetchedTeams)({
                    userId: a,
                    spaceId: n,
                    teamTypes: new Set(["Joined"]),
                    environment: e
                }), (0, t(189498).L)({
                    environment: e,
                    teamStore: s,
                    shouldScroll: !0
                })
            }
            async function o({
                environment: e,
                teamId: a,
                message: s
            }) {
                e.currentUser.id && ("success" !== (await e.api.callApi({
                    eventName: "requestAccess",
                    environment: e,
                    data: {
                        type: "current-actor-to-team",
                        teamId: a,
                        message: s
                    }
                })).type ? t(436555).D6({
                    label: t(962299).A.formatMessage(i.requestTeamFailureMessage)
                }) : (t(649807).XQ(e, {
                    teamId: a
                }), await m({
                    environment: e
                }), new Promise(e => setTimeout(e, 500)).then(() => {
                    t(436555).D6({
                        label: t(962299).A.formatMessage(i.requestTeamSuccessMessage)
                    })
                })))
            }
            async function l({
                environment: e,
                teamStore: a,
                accessRequestStore: s,
                status: i
            }) {
                let n = s.getForActorId();
                if (!n) return;
                let r = s.getRecordModel({
                    table: t(832375).oo9,
                    id: n
                });
                if (!r) return;
                if ("approved" === i) {
                    let s = [{
                        type: "member",
                        entity_type: "user",
                        user_id: r.id
                    }];
                    if (!await (0, t(123026).Z)({
                            environment: e,
                            teamStore: a,
                            teamMemberInfos: s,
                            isSettingDefaultTeam: !1,
                            createNewTeamFlowId: void 0
                        })) return
                }
                let o = a.getSpaceId();
                (0, t(377796).createAndCommit)({
                    userAction: "GrantAccessActivityAction.handleGrantAccess",
                    environment: e,
                    canUndo: !0,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    perform: a => {
                        (0, t(173157).z)({
                            store: s,
                            transaction: a,
                            data: {
                                resolved_time: Date.now(),
                                resolved_by_table: t(832375).oo9,
                                resolved_by_id: e.currentUser.id,
                                status: i
                            }
                        })
                    }
                }), t(649807).GW(e, {
                    store: a,
                    resolution: i
                })
            }
            async function m({
                environment: e
            }) {
                let {
                    lastVisitedSpaceView: a,
                    userRootStore: s,
                    userSettingsStore: i
                } = await (0, t(290816).e)({
                    environment: e,
                    disableRedirectUrl: !1
                });
                a ? await (0, t(72713).t)({
                    environment: e,
                    spaceViewStore: a,
                    userRootStore: s,
                    userSettingsStore: i,
                    pageVisitSource: t(254656).y8.BackForward,
                    navigationType: "switchingToOrLoadingSpace"
                }) : await (0, t(200635).t)({
                    environment: e,
                    userRootStore: s,
                    userSettingsStore: i,
                    pageVisitSource: t(254656).y8.BackForward
                })
            }
            async function c({
                environment: e,
                teamId: a
            }) {
                let t = await e.api.callApi({
                    eventName: "getTeamAccessRequestMetadata",
                    environment: e,
                    data: {
                        teamId: a
                    }
                });
                if ("success" === t.type) return t.data
            }
        },
        505034: (e, a, t) => {
            t.d(a, {
                $y: () => n,
                CE: () => g,
                Lc: () => i,
                Pc: () => o,
                SM: () => l,
                d$: () => f,
                f1: () => c,
                fT: () => v,
                kq: () => m,
                oP: () => u,
                yu: () => r,
                zH: () => p
            }), t(898992), t(581454), t(737550), t(296540);
            var s = t(474848);
            async function i({
                isCurrentUser: e,
                teamName: a,
                memberName: n
            }) {
                return await t(647095).Gh({
                    message: e ? (0, s.jsx)(t(109939).sA, {
                        defaultMessage: "Leave {teamName}?",
                        id: "teamActions.leaveTeam.confirmDialogMessage.removingYourself",
                        values: {
                            teamName: a
                        }
                    }) : (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.leaveTeam.confirmDialogMessage.removingSomeoneElse",
                        defaultMessage: "Remove {memberName} from {teamName}?",
                        values: {
                            memberName: n,
                            teamName: a
                        }
                    }),
                    description: e ? (0, s.jsx)("div", {
                        children: (0, t(784331).xc)() ? (0, s.jsx)(t(109939).sA, {
                            id: "teamActions.leaveTeam.confirmDialogDescription.removingYourself",
                            defaultMessage: "This teamspace will be removed from your sidebar and Library, and you may lose page access."
                        }) : (0, s.jsx)(t(109939).sA, {
                            id: "teamActions.leaveTeam.confirmDialogDescription.removingYourself.sidebarOnly",
                            defaultMessage: "You’ll no longer see this teamspace in your sidebar and you may lose permissions to the teamspace’s pages."
                        })
                    }) : (0, s.jsx)("div", {
                        children: (0, s.jsx)(t(109939).sA, {
                            id: "teamActions.leaveTeam.confirmDialogDescription.removingSomeoneElse",
                            defaultMessage: "This change won’t apply to any restricted pages in the teamspace."
                        })
                    }),
                    acceptLabel: e ? (0, s.jsx)(t(109939).sA, {
                        defaultMessage: "Leave Teamspace",
                        id: "teamActions.leaveTeam.confirmDialogAcceptLabel.removingYourself"
                    }) : (0, s.jsx)(t(109939).sA, {
                        defaultMessage: "Remove",
                        id: "teamActions.leaveTeam.confirmDialogAcceptLabel"
                    }),
                    cancelLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.leaveTeam.confirmDialogCancelLabel.removingSomeoneElse",
                        defaultMessage: "Cancel"
                    })
                }).then(e => e.accept)
            }

            function n() {
                t(647095).rG({
                    message: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.leaveTeam.onlyTeamMemberLeftDialogMessage",
                        defaultMessage: "Invite another teamspace owner to leave this teamspace"
                    })
                })
            }

            function r(e) {
                t(647095).rG({
                    message: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.leaveTeam.userMembershipFromGroupDialogMessage",
                        defaultMessage: "You can’t leave this teamspace because you’re a member of {groupNames}.",
                        values: {
                            groupNames: t(381453).oE(e.map(e => `"${e.name}"`)).join(", ")
                        }
                    })
                })
            }
            async function o({
                groupId: e
            }) {
                let a = t(801062).h.getGroupData(e),
                    i = (null == a ? void 0 : a.memberCount) ? ? 0,
                    n = null == a ? void 0 : a.group.name;
                return (await t(647095).Gh({
                    message: n ? (0, s.jsx)(t(109939).sA, {
                        id: "TeamSettings.groups.removeGroupModal.title",
                        defaultMessage: "Remove {groupName}?",
                        values: {
                            groupName: n
                        }
                    }) : (0, s.jsx)(t(109939).sA, {
                        id: "TeamSettings.groups.removeGroupModal.title.noGroupName",
                        defaultMessage: "Remove this group?"
                    }),
                    description: (0, s.jsx)(t(109939).sA, {
                        id: "TeamSettings.groups.removeGroupModal.description",
                        defaultMessage: "{numGroupMembers} {numGroupMembers, plural, one {member} other {members}} from this group will be removed from this teamspace.",
                        values: {
                            numGroupMembers: i
                        }
                    }),
                    acceptLabel: (0, s.jsx)(t(109939).sA, {
                        id: "TeamSettings.groups.removeGroupModal.confirmationButton",
                        defaultMessage: "Remove group"
                    }),
                    acceptColor: "red"
                })).accept
            }

            function l() {
                t(647095).rG({
                    message: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.removeGroup.showRemoveOnlyGroupOwnerDialogMessage",
                        defaultMessage: "Invite another teamspace owner to remove this group from the teamspace"
                    })
                })
            }
            async function m(e, a) {
                return await t(509939).h({
                    title: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.archiveTeam.confirmDialogTitle",
                        defaultMessage: "Archive this teamspace?"
                    }),
                    message: a ? (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.archiveTeam.transitionToZeroTeams.confirmDialogDescription",
                        defaultMessage: "This is your last default teamspace. Archiving will remove the “Teamspaces” section in your sidebar. Type the teamspace name to confirm."
                    }) : (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.archiveTeam.confirmDialogDescription",
                        defaultMessage: "Archiving this teamspace will remove access and hide it in the sidebar for all teamspace members. Type the teamspace name to confirm."
                    }),
                    acceptLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.archiveTeam.confirmDialogAcceptLabel",
                        defaultMessage: "Archive teamspace"
                    }),
                    requiredInputValue: e,
                    width: 432
                })
            }
            async function c(e) {
                return await t(647095).Gh({
                    message: (0, s.jsx)(t(4458).VP, {
                        children: (0, s.jsx)(t(109939).sA, {
                            id: "teamActions.movePagesFromArchivedTeam.confirmDialogTitle",
                            defaultMessage: "Would you like to move pages under {teamName} to the “Private” and “Shared” sections in your sidebar?",
                            values: {
                                teamName: e
                            }
                        })
                    }),
                    acceptLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.movePagesFromArchivedTeam.confirmDialogAcceptLabel",
                        defaultMessage: "Move pages"
                    }),
                    cancelLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.movePagesFromArchivedTeam.confirmDialogCancelLabel",
                        defaultMessage: "Proceed without moving pages"
                    })
                }).then(e => e.accept)
            }
            let d = {
                marginTop: 8
            };
            async function u({
                teamName: e,
                currentIsDefault: a,
                accessLevel: i,
                isDefault: n,
                numberOfTeamGuests: r
            }) {
                let o, l, m = (0, s.jsx)("div", {
                    style: d,
                    children: (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.confirmTeamAccessDialog.disableDefaultTeamLabel",
                        defaultMessage: "{teamName} will also no longer be a default teamspace and auto-add workspace members.",
                        values: {
                            teamName: e
                        }
                    })
                });
                return "private" === i ? (o = (0, s.jsx)(t(109939).sA, {
                    defaultMessage: "Make {teamName} private?",
                    id: "teamActions.confirmTeamAccessChangeDialog.privateTeam.titleWithName",
                    values: {
                        teamName: e
                    }
                }), l = (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(t(109939).sA, {
                        id: "teamActions.teamScreen.privateTeam.description",
                        defaultMessage: "Only members will be able to see the teamspace and its content."
                    }), a ? m : void 0]
                })) : n ? r > 0 ? (o = (0, s.jsx)(t(109939).sA, {
                    id: "teamActions.confirmTeamAccessChangeDialog.defaultTeamWithGuests.titleWithName",
                    defaultMessage: "Make {teamName} a default teamspace?",
                    values: {
                        teamName: e
                    }
                }), l = (0, s.jsx)(t(109939).sA, {
                    id: "teamActions.teamScreen.defaultTeamWithGuests.description",
                    defaultMessage: "Everyone in the workspace and future workspace members will be added to this teamspace. Additionally, {numberOfTeamGuests} teamspace guests will be removed.",
                    values: {
                        numberOfTeamGuests: r
                    }
                })) : (o = (0, s.jsx)(t(109939).sA, {
                    id: "teamActions.confirmTeamAccessChangeDialog.defaultTeam.titleWithName",
                    defaultMessage: "Make {teamName} a default teamspace?",
                    values: {
                        teamName: e
                    }
                }), l = (0, s.jsx)(t(109939).sA, {
                    id: "teamActions.teamScreen.defaultTeam.description",
                    defaultMessage: "Everyone in the workspace and future workspace members will be added to this teamspace."
                })) : "open" === i ? (o = (0, s.jsx)(t(109939).sA, {
                    defaultMessage: "Make {teamName} open?",
                    id: "teamActions.confirmTeamAccessChangeDialog.openTeam.titleWithName",
                    values: {
                        teamName: e
                    }
                }), l = (0, s.jsxs)("div", {
                    children: [a ? void 0 : (0, s.jsx)(t(109939).sA, {
                        id: "teamActions.teamScreen.openTeam.description",
                        defaultMessage: "Everyone in the workspace will have access to the teamspace and its content."
                    }), a ? m : void 0]
                })) : "closed" === i ? (o = (0, s.jsx)(t(109939).sA, {
                    defaultMessage: "Make {teamName} closed?",
                    id: "teamActions.confirmTeamAccessChangeDialog.closedTeam.titleWithName",
                    values: {
                        teamName: e
                    }
                }), l = (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(t(109939).sA, {
                        id: "teamActions.teamScreen.closedTeam.description",
                        defaultMessage: "The teamspace will still be discoverable, but joining will be invite-only."
                    }), a ? m : void 0]
                })) : (0, t(722371).HB)(i), await t(647095).Gh({
                    message: o,
                    description: l
                }).then(e => e.accept)
            }
            async function p(e) {
                let a, i, n = "normal";
                switch (e) {
                    case "disable_guests":
                        a = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableGuests.confirmationTitle",
                            defaultMessage: "Disable guests?"
                        }), i = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableGuests.confirmationDescription",
                            defaultMessage: "All page guests in this teamspace will be removed."
                        });
                        break;
                    case "disable_public_access":
                        a = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disablePublicPages.confirmationTitleAWTLUpdate",
                            defaultMessage: "Disable publishing sites, forms, and public links?"
                        }), i = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disablePublicPages.confirmationDescription",
                            defaultMessage: "This will remove access for anyone who is not a member or guest of the workspace from all pages in this teamspace."
                        }), n = "wide";
                        break;
                    case "disable_restricted_members":
                        a = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableRestrictedMembers.confirmationTitle",
                            defaultMessage: "Disable restricted members?"
                        }), i = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableRestrictedMembers.confirmationDescription",
                            defaultMessage: "All restricted members in this teamspace will be removed."
                        });
                        break;
                    case "disable_export":
                    case "disable_team_page_edits":
                        return !0;
                    default:
                        (0, t(722371).HB)(e)
                }
                return await t(647095).Gh({
                    message: a,
                    description: i,
                    mode: n
                }).then(e => e.accept)
            }
            async function g(e) {
                let a, i;
                switch (e) {
                    case "disable_guests":
                        a = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableGuestsOverride.confirmationTitle",
                            defaultMessage: "Allow guests on this teamspace?"
                        }), i = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableGuestsOverride.confirmationDescription",
                            defaultMessage: "By default, guests are not allowed on teamspaces in this workspace."
                        });
                        break;
                    case "disable_public_access":
                        a = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disablePublicPagesOverride.confirmationTitle",
                            defaultMessage: "Allow teamspace pages to be made public?"
                        }), i = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disablePublicPagesOverride.confirmationDescription",
                            defaultMessage: "By default, pages in this workspace cannot be made public."
                        });
                        break;
                    case "disable_export":
                        a = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableExportOverride.confirmationTitle",
                            defaultMessage: "Allow teamspace pages to be exported?"
                        }), i = (0, s.jsx)(t(109939).sA, {
                            id: "teamSettings.disableExportOverride.confirmationDescription",
                            defaultMessage: "By default, pages in this workspace cannot be exported."
                        });
                        break;
                    case "disable_team_page_edits":
                        return !0;
                    default:
                        (0, t(722371).HB)(e)
                }
                return await t(647095).Gh({
                    message: a,
                    description: i,
                    acceptLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamSettings.workspaceSettingOverride.confirmationButtonLabel",
                        defaultMessage: "Override workspace setting"
                    })
                }).then(e => e.accept)
            }
            async function f({
                teamName: e,
                teamMetadata: a
            }) {
                return !a.some(a => a.title.trim() === e.trim()) || await t(647095).Gh({
                    message: (0, s.jsx)(t(109939).sA, {
                        id: "teamSettings.confirmDuplicateTeamName.message",
                        defaultMessage: "A teamspace with the same name already exists. Are you sure you want to name this teamspace “{teamName}”?",
                        values: {
                            teamName: e
                        }
                    }),
                    cancelLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamSettings.confirmDuplicateTeamName.cancelLabel",
                        defaultMessage: "Cancel"
                    })
                }).then(e => e.accept)
            }
            async function v() {
                return await t(647095).Gh({
                    message: (0, s.jsx)(t(109939).sA, {
                        id: "teamSettings.setTeamPermissions.ClearCustomTeamPermissionsDialogMessage",
                        defaultMessage: "Raising the permission level for all teamspace members will remove some custom permissions. Are you sure you want to proceed?"
                    }),
                    cancelLabel: (0, s.jsx)(t(109939).sA, {
                        id: "teamSettings.setTeamPermissions.cancelLabel",
                        defaultMessage: "Cancel"
                    })
                }).then(e => e.accept)
            }
        },
        509939: (e, a, t) => {
            function s(e) {
                let a = t(975162).yX();
                return t(45370).A.setState({ ...e,
                    open: !0,
                    onComplete: a.resolve
                }), a.promise
            }

            function i(e) {
                let a = t(45370).A.state;
                a.open && (a.onComplete(e.didConfirm), t(45370).A.reset())
            }
            t.d(a, {
                V: () => i,
                h: () => s
            })
        },
        545298: (e, a, t) => {
            t.d(a, {
                f: () => s
            });
            async function s({
                environment: e,
                teamStore: a,
                userId: i,
                from: n,
                userGroupsInTeam: r
            }) {
                let o = a.getSpaceId();
                if (!a.isDefined() || !e.currentUser.id || !o) return !1;
                let {
                    ownerUserIds: l,
                    ownerGroupIds: m
                } = (0, t(140289).JQ)(a), c = l.length + m.length === 1, d = l[0] === i;
                if (d && c) return t(505034).$y(), !1;
                if (!(0, t(887652).p)({
                        teamStore: a,
                        userId: i
                    })) return t(505034).yu(r), !1;
                let u = t(807825).L.createChildStore(a, {
                        table: t(832375).oo9,
                        id: i
                    }),
                    p = i === e.currentUser.id,
                    g = a.getName() ? ? "",
                    f = u.getDisplayName(t(962299).A.getIntl());
                if (!await t(505034).Lc({
                        isCurrentUser: p,
                        teamName: g,
                        memberName: f
                    })) return !1;
                let v = [{
                        entity_type: "user",
                        type: d ? "owner" : "member",
                        user_id: i
                    }],
                    b = await e.api.callApi({
                        eventName: "updateTeamMembers",
                        environment: e,
                        data: {
                            spaceId: o,
                            teamId: a.id,
                            existingMembersToRemove: v
                        }
                    });
                return "failed" === b.type ? ((0, t(21731).O)(b), !1) : (t(649807).o$(e, {
                    store: a,
                    is_leaving_team: p,
                    num_members_removed: v.length,
                    from: n
                }), r.length > 0 ? p ? (0, t(356164).hX)(g, r) : (0, t(356164).WE)(f, g, r) : p && (0, t(356164).fE)(g), t(905717).Z({
                    environment: e,
                    userId: i,
                    spaceId: o
                }), !0)
            }
        },
        558389: (e, a, t) => {
            t.d(a, {
                s: () => s
            }), t(898992), t(354520), t(581454);

            function s({
                environment: e,
                teamStore: a,
                spaceId: i,
                from: n,
                newRole: r,
                usingAdminPrivileges: o,
                andNavigateToTeamHome: l
            }) {
                let m = e.currentUser.id,
                    c = t(728372).AppStoreSidebarSpaceViewStore.state;
                if (!m || !c) return !1;
                ! function(e) {
                    var a;
                    let {
                        environment: s,
                        teamId: i,
                        spaceViewStore: n
                    } = e, r = null == (a = (0, t(804011).r)(s).state) ? void 0 : a.userJoinedTeamsStores;
                    if (!r) return;
                    let o = [...r.map(({
                        id: e
                    }) => e).filter(e => e !== i), i];
                    t(89739).br({
                        environment: s,
                        spaceViewStore: n,
                        orderedTeamIds: o,
                        userAction: "TeamBrowserOutliner",
                        isExplicitUserAction: !1
                    })
                }({
                    environment: e,
                    spaceViewStore: c,
                    teamId: a.id
                }), t(649807).vo(e, {
                    store: a,
                    joined_role: r,
                    from: n
                }), t(905717).Z({
                    environment: e,
                    userId: m,
                    spaceId: i
                });
                let d = a.getName();
                l ? ((0, t(189498).L)({
                    environment: e,
                    teamStore: a,
                    shouldScroll: !1
                }), d && new Promise(e => setTimeout(e, 500)).then(() => {
                    (0, t(356164).VV)({
                        teamName: d,
                        usingAdminPrivileges: o
                    })
                })) : d && (0, t(356164).VV)({
                    teamName: d,
                    usingAdminPrivileges: o
                })
            }
        },
        696310: (e, a, t) => {
            t.d(a, {
                A: () => o,
                v: () => r
            }), t(581454);
            var s = t(296540),
                i = t(474848);
            let n = {
                marginInlineEnd: 2
            };

            function r({
                teamStore: e
            }) {
                let a = (0, t(533992).v3)().currentUser.id,
                    s = (0, t(682985).K8)(() => e.isDefault(), [e]),
                    n = (0, t(711280).$)(e),
                    o = (0, t(32323).m)(e),
                    l = (0, t(682985).K8)(() => !!(a && e.canAdmin() && 1 === o), [e, a, o]),
                    m = (0, t(682985).K8)(() => s ? {
                        type: "defaultTeam"
                    } : l ? {
                        type: "onlyOwner"
                    } : n.length > 0 ? {
                        type: "userGroupsInTeam",
                        groupNames: t(381453).oE(n.map(e => e.name)).join()
                    } : void 0, [s, l, n]);
                if (m) switch (m.type) {
                    case "defaultTeam":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "teamBrowser.teamCard.leaveTeam.defaultTeamTooltip",
                            defaultMessage: "You can’t leave this teamspace because everyone in the workspace must be a member"
                        });
                    case "onlyOwner":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "teamJoinLeaveButton.leaveTeam.onlyOwnerTooltip",
                            defaultMessage: "Invite another teamspace owner to leave this teamspace"
                        });
                    case "userGroupsInTeam":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "teamBrowser.teamCard.leaveTeam.groupTooltip",
                            defaultMessage: "{groupNames, plural, one {You can’t leave this teamspace because you’re a member of multiple groups, {groupNames}.} other {You can’t leave this teamspace because you’re a member of the group, {groupNames}.}}",
                            values: {
                                groupNames: m.groupNames
                            }
                        });
                    default:
                        (0, t(722371).HB)(m)
                }
            }
            let o = function(e) {
                let {
                    teamStore: a,
                    from: o,
                    onLeavingTeam: l,
                    style: m,
                    hoveredStyle: c,
                    icon: d,
                    isRed: u,
                    placement: p,
                    alignment: g,
                    buttonInternals: f
                } = e, v = (0, t(533992).v3)(), b = (0, t(682985).O$)(t(728372).AppStoreSidebarSpaceStore), h = (0, t(711280).$)(a), A = (0, s.useCallback)(async () => {
                    !b || await (0, t(296696).J)({
                        environment: v,
                        teamStore: a,
                        from: o,
                        userGroupsInTeam: h
                    }) && (null == l || l())
                }, [b, v, a, o, h, l]), T = (0, i.jsx)(t(109939).sA, {
                    id: "teamJoinLeaveButton.leaveTeam.enabledTooltip",
                    defaultMessage: "Click to leave teamspace"
                }), y = r({
                    teamStore: a
                }), M = !!y, w = M ? y : T;
                return (0, i.jsx)(t(51831).m, {
                    style: M ? {
                        width: 240
                    } : void 0,
                    disableTooltip: !w,
                    content: e => (0, i.jsx)("div", { ...e,
                        children: w
                    }),
                    textWrap: M,
                    placement: p,
                    alignment: g,
                    children: e => (0, i.jsxs)(t(988022).p, { ...e,
                        style: m,
                        hoveredStyle: c,
                        onClick: A,
                        disabled: M,
                        disabledFeedback: M,
                        colorPalette: u ? "red" : void 0,
                        children: [d ? d() : void 0, f || (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(t(16275).I, {
                                icon: t(20413).checkmarkFillSmallIcon,
                                size: "sm",
                                style: n
                            }), (0, i.jsx)(t(109939).sA, {
                                id: "teamBrowser.teamCard.button.joined",
                                defaultMessage: "Joined"
                            })]
                        })]
                    })
                })
            }
        },
        711280: (e, a, t) => {
            t.d(a, {
                $: () => s
            }), t(898992), t(354520), t(581454);

            function s(e) {
                return (0, t(682985).K8)(() => {
                    let a = e.getSpaceStore();
                    if (!e.isDefined() || !a) return [];
                    let s = a.id;
                    return Array.from(t(68809).f.getSpacePermissionGroupIds({
                        spaceId: s
                    })).filter(a => (0, t(175110).J)({
                        teamStore: e,
                        groupId: a
                    })).map(e => (0, t(13717).E)({
                        spaceStore: a,
                        groupId: e
                    }).getModel()).filter(t(722371).O9)
                }, [e])
            }
        },
        980183: (e, a, t) => {
            t.d(a, {
                A: () => d
            });
            var s = t(296540),
                i = t(474848);
            let n = (0, t(109939).YK)({
                    message_placeholder: {
                        id: "teamInviteLinkRequestPage.message.placeholder",
                        defaultMessage: "Message (optional)"
                    }
                }),
                r = {
                    alignSelf: "center",
                    overflow: "visible",
                    padding: 15,
                    width: 420
                },
                o = {
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                },
                l = {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 15
                },
                m = {
                    marginInlineStart: 20
                },
                c = {
                    padding: 8
                },
                d = function(e) {
                    let {
                        teamStore: a,
                        teamName: d,
                        teamId: u,
                        isModalOpen: p,
                        onDismiss: g
                    } = e, [f, v] = (0, s.useState)(""), b = (0, t(533992).v3)(), h = (0, t(109939).tz)(), A = async () => {
                        await t(406134).Ip({
                            environment: b,
                            teamId: u,
                            message: f
                        }), g()
                    };
                    return (0, i.jsx)(t(556809).a, {
                        open: p,
                        onDismiss: g,
                        innerStyle: r,
                        preventHideChildrenWhileOpening: !0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(t(4458).fI, {
                                marginBottom: 10,
                                inline: !0,
                                children: (0, i.jsx)(t(109939).sA, {
                                    id: "teamInviteLinkRequestModal.reasonForRequest.title",
                                    defaultMessage: "Request access to {icon} {teamName}",
                                    values: {
                                        teamName: d,
                                        icon: (0, i.jsx)(t(729746).x, {
                                            style: o,
                                            store: a,
                                            disabled: !0,
                                            size: 22
                                        })
                                    }
                                })
                            }), (0, i.jsx)(t(36481).p, {
                                textarea: !0,
                                style: c,
                                value: f,
                                onChange: e => {
                                    v(e.target.value)
                                },
                                placeholder: h.formatMessage(n.message_placeholder)
                            }), (0, i.jsxs)("div", {
                                style: l,
                                children: [(0, i.jsx)(t(324489).V, {
                                    isSecondaryColor: !0,
                                    isSmall: !0,
                                    isMultiline: !0,
                                    children: (0, i.jsx)(t(109939).sA, {
                                        id: "teamInviteLinkRequestModal.caption",
                                        defaultMessage: "Your teamspace owners will approve or decline your request."
                                    })
                                }), (0, i.jsx)(t(912946).A, {
                                    colorPalette: "blue",
                                    size: "lg",
                                    style: m,
                                    onClick: A,
                                    children: (0, i.jsx)(t(109939).sA, {
                                        id: "teamInviteLinkRequestModal.requestAccessButton.label",
                                        defaultMessage: "Request"
                                    })
                                })]
                            })]
                        })
                    })
                }
        }
    }
]);