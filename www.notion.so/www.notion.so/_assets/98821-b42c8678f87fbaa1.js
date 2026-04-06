"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [63717, 98821], {
        3196: (e, t, r) => {
            r.d(t, {
                E: () => p
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);
            var i = r(296540),
                s = r(474848);
            let a = (0, r(109939).YK)({
                    personalPronoun: {
                        id: "personHoverCard.personalPronoun",
                        defaultMessage: "You"
                    }
                }),
                n = {
                    style0: {
                        whiteSpace: "pre"
                    },
                    upgradeButtonBlueText: {
                        color: r(632079).Tj.blue.text.accentPrimary
                    }
                };

            function o({
                index: e
            }) {
                return (0, s.jsx)("span", {
                    style: n.style0,
                    children: (0, s.jsx)(r(109939).sA, {
                        defaultMessage: ", ",
                        id: "personHoverCard.userInfo.groupSeparatorValue"
                    })
                }, e)
            }

            function l(e) {
                switch (e.membershipType) {
                    case "none":
                        return (0, s.jsx)(r(109939).sA, {
                            id: "personHoverCard.memberStatus.none",
                            defaultMessage: "Deactivated"
                        });
                    case "page_guest":
                        return (0, s.jsx)(r(109939).sA, {
                            id: "personHoverCard.memberStatus.guest",
                            defaultMessage: "Guest"
                        });
                    case "restricted_member":
                        return (0, s.jsx)(r(109939).sA, {
                            id: "personHoverCard.memberStatus.restricted_member",
                            defaultMessage: "Restricted Member"
                        });
                    case "member":
                        return (0, s.jsx)(r(109939).sA, {
                            id: "personHoverCard.memberStatus.member",
                            defaultMessage: "Member"
                        });
                    case "membership_admin":
                        return (0, s.jsx)(r(109939).sA, {
                            id: "personHoverCard.memberStatus.admin",
                            defaultMessage: "Admin"
                        });
                    case "owner":
                        return (0, s.jsx)(r(109939).sA, {
                            id: "personHoverCard.memberStatus.owner",
                            defaultMessage: "Workspace Owner"
                        });
                    default:
                        (0, r(722371).HB)(e.membershipType)
                }
            }

            function d(e) {
                let {
                    permissionGroupNames: t,
                    membershipType: i,
                    isExtendedUserProfileLoading: a,
                    areTeamsLoading: n,
                    teamspaceNames: d,
                    scimTitle: u,
                    isScimTitleBlockLoading: c
                } = e;
                return a || n || c ? (0, s.jsx)(r(795830).P, {
                    style: r(760727).w0.loadingShimmerSecondary
                }) : u ? (0, s.jsx)(r(324489).V, {
                    isSmall: !0,
                    style: r(760727).w0.profileSubtitle,
                    children: u
                }) : t.length > 0 ? (0, s.jsx)(r(324489).V, {
                    isSmall: !0,
                    style: r(760727).w0.profileSubtitle,
                    children: (0, r(405843).G)(t.slice(0, 3), e => (0, s.jsx)(o, {
                        index: e
                    }, e))
                }) : d.length > 0 ? (0, s.jsx)(r(324489).V, {
                    isSmall: !0,
                    style: r(760727).w0.profileSubtitle,
                    children: (0, r(405843).G)(d.slice(0, 3), e => (0, s.jsx)(o, {
                        index: e
                    }, e))
                }) : i ? (0, s.jsx)(r(324489).V, {
                    isSmall: !0,
                    style: r(760727).w0.profileSubtitle,
                    children: (0, s.jsx)(l, {
                        membershipType: i
                    })
                }) : null
            }

            function u(e) {
                let t = (0, r(109939).tz)(),
                    {
                        isExtendedUserProfileLoading: i,
                        timeZone: a
                    } = e;
                return i ? (0, s.jsx)(r(795830).P, {
                    style: r(760727).w0.loadingShimmerTertiary
                }) : a ? (0, s.jsx)(r(324489).V, {
                    isSmall: !0,
                    isSecondaryColor: !0,
                    style: r(760727).w0.profileSubtitle,
                    children: (0, s.jsx)(r(109939).sA, {
                        id: "personHoverCard.userInfo.timeZone",
                        defaultMessage: "{time} local time",
                        values: {
                            time: new Date().toLocaleTimeString((0, r(599412).H)(t), {
                                timeZone: a,
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: !0
                            })
                        }
                    })
                }) : null
            }
            let c = {
                timeZone: void 0,
                permissionGroups: []
            };

            function p({
                userStore: e,
                from: t
            }) {
                let o = (0, r(109939).tz)(),
                    l = (0, r(533992).v3)(),
                    m = (0, r(377475).h)("person_hover_card_loaded", {
                        allowMultipleFiresPerSession: !0
                    }),
                    g = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    f = (0, r(682985).K8)(() => {
                        var t;
                        if (g) return null == (t = (0, r(993077).dp)(g, e.id)) ? void 0 : t.getMembershipType()
                    }, [g, e]),
                    v = e.id,
                    h = (0, r(345776).T)(),
                    b = h === v,
                    {
                        value: x,
                        isLoading: y
                    } = function({
                        userId: e
                    }) {
                        let t = (0, r(533992).v3)(),
                            i = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                            {
                                store: s,
                                refetch: a
                            } = (0, r(682985).K8)(() => {
                                if (!i || !i.userId) return {
                                    store: void 0,
                                    refetch: void 0
                                };
                                let s = i.userId,
                                    a = (0, r(113486).e9)({
                                        spaceId: i.id,
                                        actorUserId: s,
                                        viewedUserId: e
                                    }),
                                    n = async () => {
                                        await (0, r(433562).fetchExtendedUserProfile)({
                                            viewedUserId: e,
                                            actorUserId: s,
                                            spaceStore: i,
                                            store: a,
                                            environment: t
                                        })
                                    };
                                return {
                                    store: a,
                                    refetch: n
                                }
                            }, [i, t, e]),
                            n = a ? ? r(975162).TA,
                            [{
                                status: o,
                                error: l
                            }] = (0, r(97668).Yb)(n, [n]),
                            d = (0, r(682985).O$)(s);
                        return void 0 === i ? {
                            isLoading: !0,
                            error: void 0,
                            value: void 0
                        } : {
                            isLoading: !d && "pending" === o,
                            error: l,
                            value: d
                        }
                    }({
                        userId: v
                    }),
                    {
                        timeZone: w,
                        permissionGroupIds: S,
                        sortedGroupNames: I
                    } = (0, r(682985).K8)(() => {
                        let {
                            timeZone: e,
                            permissionGroups: t
                        } = x ? ? c;
                        return {
                            timeZone: e,
                            permissionGroupIds: new Set(t),
                            sortedGroupNames: function(e) {
                                let {
                                    groupIds: t,
                                    intl: i
                                } = e;
                                return t.sort((e, t) => {
                                    let i = r(801062).h.getGroupData(e),
                                        s = r(801062).h.getGroupData(t);
                                    return ((null == i ? void 0 : i.memberCount) ? ? 0) - ((null == s ? void 0 : s.memberCount) ? ? 0)
                                }).map(e => {
                                    let t = r(801062).h.getGroupData(e);
                                    return null == t ? void 0 : t.group.getDisplayName(i)
                                }).filter(r(722371).O9)
                            }({
                                groupIds: Array.from(t),
                                intl: o
                            })
                        }
                    }, [x, o]),
                    {
                        teams: C,
                        isLoading: _
                    } = (0, r(367299).Z)({
                        environment: l,
                        spaceStore: g,
                        userId: v,
                        userPermissionGroupIds: S
                    }),
                    j = (0, r(682985).K8)(() => C ? C.map(e => e.getName()).filter(e => void 0 !== e) : [], [C]),
                    {
                        name: T,
                        email: M
                    } = (0, r(682985).K8)(() => ({
                        name: e.getFullName(o),
                        email: e.getEmail()
                    }), [e, o]),
                    A = (0, r(682985).K8)(() => e.isDefined(), [e]),
                    k = (0, r(682985).K8)(() => {
                        if (!g) return;
                        let e = l.idCreator.getSpaceIdCreatorSync(g.id);
                        return (0, r(805697).o4)({
                            userId: v,
                            spaceIdCreator: e,
                            pageVisitSource: r(254656).y8.PersonHoverCard
                        })
                    }, [v, g, l]),
                    P = (0, r(525272).E)({
                        spaceStore: g,
                        viewedUserId: e.id
                    }),
                    U = "show" === (0, r(652743).$)({
                        spaceStore: g,
                        viewedUserId: e.id
                    }),
                    H = (0, r(345296).X)(),
                    L = (0, r(205954).k4)({
                        spaceStore: g
                    }),
                    G = (0, r(133565).E)({
                        spaceId: null == g ? void 0 : g.id
                    }),
                    F = "page_guest" === (0, r(682985).K8)(() => {
                        var e;
                        if (g && h) return null == (e = (0, r(993077).dp)(g, h)) ? void 0 : e.getMembershipType()
                    }, [g, h]),
                    E = (0, r(682985).K8)(() => {
                        let e = null == g ? void 0 : g.id;
                        return !(0, r(455221).e)(l, e) && "page_guest" === f && !b && !F && "control" !== r(218744).default.getEligibleGroup({
                            experimentId: "show_comment_guest_badge",
                            defaultGroup: "control"
                        })
                    }, [l, g, b, f, F]),
                    B = void 0 === f || "none" === f,
                    [D, R] = (0, i.useState)(!1),
                    q = (0, i.useCallback)(() => {
                        M && (H ? (0, r(874809).YQ)({
                            environment: l,
                            email: M,
                            from: "peopleHoverCard"
                        }) : (r(328373).o.setState({
                            signupCtaAttribution: "peopleHoverCard"
                        }), (0, r(171629).U)(l, "notion_calendar_launch_promo")))
                    }, [H, l, M]),
                    W = (0, i.useCallback)(async () => {
                        if (g) try {
                            await (0, r(81930).P)({
                                environment: l,
                                guestUserStore: e,
                                membershipType: G ? "member" : "owner",
                                spaceStore: g,
                                origin: "person_hover_card"
                            }), r(436555).D6({
                                label: (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.upgradeToMember.success",
                                    defaultMessage: "Successfully upgraded {nameOrEmail} to member",
                                    values: {
                                        nameOrEmail: T || M
                                    }
                                })
                            })
                        } catch (e) {
                            (0, r(222024).t)().error({
                                from: "PersonHoverCard",
                                type: "upgradeToMemberFailed",
                                error: e
                            }), r(436555).D6({
                                label: (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.upgradeToMember.error",
                                    defaultMessage: "Failed to upgrade {nameOrEmail} to member",
                                    values: {
                                        nameOrEmail: T || M
                                    }
                                })
                            })
                        }
                    }, [l, e, G, g, T, M]),
                    O = (0, i.useCallback)(async () => {
                        if (g) {
                            r(179701).RH({
                                invite_flow_id: void 0,
                                user_count: 1,
                                new_user_count: 1,
                                is_bot: !1,
                                space_role: "read_and_write",
                                invite_message_length: 0,
                                invite_space_role_selection: r(758972).NJ.request_workspace_member,
                                from: "person_hover_card"
                            });
                            try {
                                await l.api.callApi({
                                    eventName: "requestAccess",
                                    environment: l,
                                    data: {
                                        type: "actor-to-space",
                                        forActorId: e.id,
                                        spaceId: g.id,
                                        message: "",
                                        attributes: {
                                            origin_id: g.id,
                                            origin_type: "person_hover_card",
                                            origin_table: "space",
                                            add_permissions_on_approval: !1
                                        }
                                    }
                                }), R(!0), r(436555).D6({
                                    label: (0, s.jsx)(r(109939).sA, {
                                        id: "personHoverCard.requestToAdd.sent",
                                        defaultMessage: "Request sent"
                                    })
                                })
                            } catch (e) {
                                (0, r(222024).t)().error({
                                    from: "PersonHoverCard",
                                    type: "requestGuestUpgradeFailed",
                                    error: e
                                }), r(436555).D6({
                                    label: (0, s.jsx)(r(109939).sA, {
                                        id: "personHoverCard.requestToAdd.error",
                                        defaultMessage: "Failed to send request"
                                    })
                                })
                            }
                        }
                    }, [l, e, g]),
                    K = (0, i.useCallback)(async () => {
                        if (g) try {
                            await (0, r(400308).$)({
                                environment: l,
                                spaceStore: g,
                                userIds: [e.id],
                                invite: {
                                    inviteFlowId: void 0,
                                    inviteMessage: "",
                                    inviteOrigin: "person_hover_card",
                                    disable_invite_email: !1
                                },
                                membershipType: G ? "member" : "owner"
                            }), r(436555).D6({
                                label: (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.inviteToWorkspace.sent",
                                    defaultMessage: "Invitation sent"
                                })
                            })
                        } catch (e) {
                            (0, r(222024).t)().error({
                                from: "PersonHoverCard",
                                type: "inviteToWorkspaceFailed",
                                error: e
                            }), r(436555).D6({
                                label: (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.inviteToWorkspace.error",
                                    defaultMessage: "Failed to invite to workspace"
                                })
                            })
                        }
                    }, [l, e, g, G]),
                    z = (0, i.useCallback)(e => {
                        e.metaKey || r(227947).A.setState({ ...r(227947).A.state,
                            open: !1
                        })
                    }, []),
                    V = (0, r(722371).O9)(M) && A && P,
                    N = y || _;
                (0, i.useEffect)(() => {
                    V && !N && m()
                }, [V, N, m]),
                function({
                    environment: e,
                    shouldRender: t,
                    viewedUserId: s,
                    from: a
                }) {
                    let n = (0, i.useRef)(!1);
                    (0, i.useEffect)(() => {
                        t && !n.current && (n.current = !0, (0, r(104310).u)({
                            event: {
                                eventName: "person_hover_card_impression",
                                eventProperties: {
                                    viewed_user_id: s,
                                    from: a
                                }
                            }
                        }))
                    }, [t, e, s, a])
                }({
                    environment: l,
                    shouldRender: V,
                    viewedUserId: v,
                    from: t
                });
                let {
                    value: $,
                    isBlockLoading: Z
                } = function(e) {
                    let {
                        spaceStore: t,
                        environment: i,
                        hoveredUserId: s,
                        propertyId: a
                    } = e;
                    return (0, r(682985).K8)(() => {
                        if (!t) return {
                            value: void 0,
                            isBlockLoading: !0
                        };
                        let e = i.idCreator.getSpaceIdCreatorSync(t.id),
                            n = (0, r(907137).rf)({
                                userId: s,
                                spaceIdCreator: e
                            }),
                            o = r(970831).B.createChildStore(t, (0, r(518882).iL)({
                                blockId: n,
                                spaceId: t.id
                            }));
                        return {
                            value: o.getProperties()[a],
                            isBlockLoading: !o.isDefined()
                        }
                    }, [t, i, s, a])
                }({
                    spaceStore: g,
                    environment: l,
                    hoveredUserId: v,
                    propertyId: r(639328).Ab.title.id
                });
                if (!V) return null;
                let Y = T || M,
                    X = (0, s.jsx)(r(324489).V, {
                        style: r(760727).w0.profileTitle,
                        children: Y + (b ? ` (${o.formatMessage(a.personalPronoun)})` : "")
                    });
                return (0, s.jsx)("div", {
                    style: r(760727).w0.card,
                    children: (0, s.jsx)(r(337336).K, {
                        from: "PersonHoverCard",
                        fallback: e => (0, s.jsx)(r(640310).d, { ...e
                        }),
                        children: (0, s.jsxs)(r(4458).VP, {
                            gap: 16,
                            children: [(0, s.jsx)(r(4458).fI, {
                                gap: 0,
                                children: (0, s.jsxs)("div", {
                                    style: r(760727).w0.bio,
                                    children: [k && U ? (0, s.jsx)(r(590422).Q, {
                                        href: k,
                                        onClick: z,
                                        ignoreLocalHoverState: !0,
                                        children: (0, s.jsx)(r(321753).A, {
                                            userStore: e,
                                            size: 56
                                        })
                                    }) : (0, s.jsx)(r(321753).A, {
                                        userStore: e,
                                        size: 56
                                    }), (0, s.jsxs)(r(4458).VP, {
                                        gap: "inherit",
                                        style: { ...r(760727).w0.bioRight,
                                            gap: 3
                                        },
                                        children: [(0, s.jsxs)(r(4458).fI, {
                                            gap: 4,
                                            alignItems: "center",
                                            children: [k && U ? (0, s.jsx)(r(590422).Q, {
                                                href: k,
                                                onClick: z,
                                                ignoreLocalHoverState: !0,
                                                style: r(760727).w0.bioLink,
                                                children: X
                                            }) : X, B ? (0, s.jsx)(r(577280).w, {
                                                labelType: "external"
                                            }) : "restricted_member" === f ? (0, s.jsx)(r(156379).L, {}) : "page_guest" === f ? (0, s.jsx)(r(577280).w, {
                                                labelType: "page_guest"
                                            }) : null]
                                        }), B ? null : (0, s.jsx)(d, {
                                            isExtendedUserProfileLoading: y,
                                            scimTitle: $,
                                            isScimTitleBlockLoading: Z,
                                            permissionGroupNames: I,
                                            areTeamsLoading: _,
                                            teamspaceNames: j,
                                            membershipType: f
                                        }), B ? null : (0, s.jsx)(u, {
                                            isExtendedUserProfileLoading: y,
                                            timeZone: w
                                        })]
                                    })]
                                })
                            }), B || b ? null : (0, s.jsxs)(r(4458).fI, {
                                gap: 12,
                                children: [(0, s.jsx)(r(548436).A, {
                                    size: "lg",
                                    style: r(760727).w0.actionButton,
                                    onClick: () => {
                                        window.open(`mailto:${M}`, "_blank")
                                    },
                                    iconLeading: {
                                        icon: r(820997).D,
                                        size: "sm"
                                    },
                                    children: (0, s.jsx)(r(324489).V, {
                                        children: (0, s.jsx)(r(109939).sA, {
                                            id: "personHoverCard.actionButtons.email",
                                            defaultMessage: "Email"
                                        })
                                    })
                                }), (0, s.jsx)(r(548436).A, {
                                    size: "lg",
                                    style: r(760727).w0.actionButton,
                                    onClick: q,
                                    iconLeading: {
                                        icon: r(428602).Y,
                                        size: "sm"
                                    },
                                    children: (0, s.jsx)(r(109939).sA, {
                                        id: "personHoverCard.actionButtons.schedule",
                                        defaultMessage: "Schedule"
                                    })
                                })]
                            }), !B || b || F ? void 0 : L ? (0, s.jsx)(r(988022).p, {
                                iconLeading: {
                                    icon: r(96699).arrowInCircleUpFillSmallIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                },
                                onClick: K,
                                children: (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.upgradeToMember.label",
                                    defaultMessage: "<blue>Upgrade</blue> to member",
                                    values: {
                                        blue: e => (0, s.jsx)("span", {
                                            style: n.upgradeButtonBlueText,
                                            children: e
                                        })
                                    }
                                })
                            }) : (0, s.jsx)(r(988022).p, {
                                iconLeading: {
                                    icon: r(96699).arrowInCircleUpFillSmallIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                },
                                onClick: O,
                                disabled: D,
                                children: D ? (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.requestToAdd.requested",
                                    defaultMessage: "Requested"
                                }) : (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.requestToAdd.label",
                                    defaultMessage: "<blue>Request</blue> to add as member",
                                    values: {
                                        blue: e => (0, s.jsx)("span", {
                                            style: n.upgradeButtonBlueText,
                                            children: e
                                        })
                                    }
                                })
                            }), E ? L ? (0, s.jsx)(r(988022).p, {
                                iconLeading: {
                                    icon: r(96699).arrowInCircleUpFillSmallIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                },
                                onClick: W,
                                children: (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.upgradeToMember.label",
                                    defaultMessage: "<blue>Upgrade</blue> to member",
                                    values: {
                                        blue: e => (0, s.jsx)("span", {
                                            style: n.upgradeButtonBlueText,
                                            children: e
                                        })
                                    }
                                })
                            }) : (0, s.jsx)(r(988022).p, {
                                iconLeading: {
                                    icon: r(96699).arrowInCircleUpFillSmallIcon,
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                },
                                onClick: O,
                                disabled: D,
                                children: D ? (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.requestToAdd.requested",
                                    defaultMessage: "Requested"
                                }) : (0, s.jsx)(r(109939).sA, {
                                    id: "personHoverCard.requestToAdd.label",
                                    defaultMessage: "<blue>Request</blue> to add as member",
                                    values: {
                                        blue: e => (0, s.jsx)("span", {
                                            style: n.upgradeButtonBlueText,
                                            children: e
                                        })
                                    }
                                })
                            }) : void 0]
                        })
                    })
                })
            }
        },
        81930: (e, t, r) => {
            r.d(t, {
                D: () => n,
                P: () => a
            }), r(16280), r(581454), r(296540);
            var i = r(474848);
            let s = (0, r(109939).YK)({
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
                    membershipType: n,
                    guestUserStore: o
                } = e, l = o.id, d = o.getEmail();
                try {
                    if (r(262058).m({
                            message: s.convertingGuest
                        }), !a.isTeamsEnabled() && !await r(821969).oH({
                            environment: t,
                            flowId: "",
                            trackCreateTeamComplete: !1
                        })) return;
                    let i = [{
                            type: "user",
                            userId: l,
                            membershipType: n,
                            inviteId: void 0
                        }],
                        {
                            serverCommitResult: o
                        } = (0, r(377796).createAndCommit)({
                            userAction: "spacePerimssionGuestActions.convertGuestToMember",
                            environment: t,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: a.id
                            },
                            perform: e => {
                                (0, r(73888).y)({
                                    environment: t,
                                    spaceStore: a,
                                    actors: i,
                                    transaction: e
                                })
                            }
                        });
                    await o, r(287621).gc(t, {
                        member_user_id: l,
                        convert_to: "owner" === n ? "admin" : "member",
                        origin: e.origin
                    }), r(179701).Jg(t, {
                        role: (0, r(729052).ps)(n),
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
                        permission_items: i.map(e => (0, r(283161).z)(e)),
                        invite_message_length: 0,
                        domainType: (0, r(904434).FX)()
                    })
                } catch (e) {
                    r(436555).D6({
                        label: (0, i.jsx)(r(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.convertToMember.snackbar.failure",
                            defaultMessage: "Failed to convert {email} to workspace member",
                            values: {
                                email: d
                            }
                        })
                    })
                } finally {
                    await r(371151).nO({
                        environment: t,
                        spaceStore: a
                    }), r(262058).V()
                }
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceStore: a,
                    guestUserStore: n
                } = e, o = n.id, l = n.getEmail();
                try {
                    r(262058).m({
                        message: s.removingGuest
                    });
                    let e = await t.api.callApi({
                        eventName: "removeUsersFromSpace",
                        environment: t,
                        data: {
                            userIds: [o],
                            spaceId: a.id,
                            removePagePermissions: !0,
                            revokeUserTokens: !1
                        }
                    });
                    if ("success" === e.type) r(287621).wX(t);
                    else throw Error("Failed to remove guest")
                } catch (e) {
                    r(436555).D6({
                        label: (0, i.jsx)(r(109939).sA, {
                            id: "spacePermissionsSettings.externalTab.userThreeDotMenu.removeFromWorkspace.snackbar.failure",
                            defaultMessage: "Failed to remove {email} from workspace",
                            values: {
                                email: l
                            }
                        })
                    })
                } finally {
                    await r(371151).nO({
                        environment: t,
                        spaceStore: a
                    }), r(262058).V(), r(287621).xO(t, {
                        origin: "space_setting_guest_tab",
                        changedNumber: -1
                    })
                }
            }
        },
        113486: (e, t, r) => {
            let i;
            r.d(t, {
                Of: () => l,
                e9: () => d,
                ed: () => u
            }), r(944114);
            var s = () => r(546605);
            class a extends s().Store {
                lastFetchTimestamp;
                getInitialState() {}
                isRefetchThrottleReady() {
                    let e = Date.now();
                    return (void 0 === this.lastFetchTimestamp || !(e - this.lastFetchTimestamp < 1e4)) && (this.lastFetchTimestamp = e, !0)
                }
            }

            function n() {
                return i ? ? = new(r(759303)).q({
                    max: 100
                })
            }

            function o(e) {
                return `${e.spaceId}:${e.actorUserId}:${e.viewedUserId}`
            }

            function l(e) {
                let t = n().peek(o(e));
                return !!(t && void 0 !== t.state)
            }

            function d(e) {
                let t = n(),
                    r = o(e),
                    i = t.get(r);
                if (i) return i;
                let s = new a;
                return t.set(r, s), s
            }

            function u(e) {
                let t = e.profiles,
                    r = [];
                for (let e of Object.keys(t)) {
                    let i = t[e];
                    r.push({
                        userId: e,
                        timeZone: i.timeZone,
                        permissionGroups: i.permissionGroups
                    })
                }
                return r
            }(0, r(202146).exposeDebugGetter)("extendedUserProfileCache", n)
        },
        133565: (e, t, r) => {
            r.d(t, {
                E: () => i
            });

            function i(e) {
                let {
                    spaceId: t
                } = e, i = (0, r(226309).lh)({
                    spaceId: t
                });
                return (0, r(192159).Fq)(i)
            }
        },
        345296: (e, t, r) => {
            r.d(t, {
                X: () => i
            });

            function i() {
                let e = (0, r(682985).O$)(r(610463).X),
                    t = (0, r(682985).K8)(() => {
                        let e = (0, r(328765).S)();
                        return e && (0, r(453737).d)({
                            spaceStore: e
                        })
                    }, []),
                    i = (0, r(83208).X)("notion_calendar_launch_modal");
                return e || t || !i
            }
        },
        367299: (e, t, r) => {
            r.d(t, {
                Z: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    userId: s,
                    userPermissionGroupIds: a
                } = e, n = (0, r(682985).K8)(() => null == i ? void 0 : i.isReady(), [i]), {
                    spaceUserStore: o,
                    isSpaceUserStoreReady: l
                } = (0, r(682985).K8)(() => {
                    let e = (0, r(993077).sE)(i, s);
                    return {
                        spaceUserStore: e,
                        isSpaceUserStoreReady: null == e ? void 0 : e.isReady()
                    }
                }, [i, s]), {
                    teams: d,
                    isLoading: u
                } = function({
                    environment: e,
                    spaceStore: t,
                    spaceUserStore: i,
                    userId: s,
                    userPermissionGroupIds: a
                }) {
                    let {
                        teams: n,
                        isLoading: o
                    } = (0, r(413630).Qs)({
                        spaceStore: t
                    }), l = (0, r(682985).K8)(() => (0, r(958692).z5)({
                        environment: e,
                        userId: e.currentUser.id,
                        spaceId: null == t ? void 0 : t.id,
                        teamIds: n.map(e => e.id)
                    }).countsByTeamId, [e, t, n]), d = (0, r(413630).gc)({
                        spaceStore: t,
                        teams: n
                    });
                    return {
                        teams: (0, r(682985).K8)(() => {
                            let e = d.filter(e => {
                                let t = e.store;
                                return (0, r(220530).f)({
                                    userId: s,
                                    teamStore: t,
                                    userPermissionGroups: a || new Set,
                                    spaceUser: null == i ? void 0 : i.getModel()
                                })
                            });
                            return (0, r(924448).M9)({
                                teams: e,
                                countsByTeamId: l
                            }).map(e => e.store)
                        }, [l, d, a, s, i]),
                        isLoading: o
                    }
                }({
                    environment: t,
                    spaceStore: i,
                    spaceUserStore: o,
                    userId: s,
                    userPermissionGroupIds: a
                });
                return {
                    teams: d,
                    isLoading: !n || !l || u
                }
            }
        },
        377475: (e, t, r) => {
            r.d(t, {
                h: () => a,
                l: () => o
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var i = r(296540);
            let s = new Set;

            function a(e, t) {
                let a = (0, i.useMemo)(() => r(680007).default.mark(e), [e]),
                    n = (0, i.useRef)(t);
                return (0, i.useEffect)(() => {
                    n.current = t
                }, [t]), (0, i.useCallback)(() => {
                    (!s.has(e) || t.allowMultipleFiresPerSession) && (s.add(e), r(680007).default.measure(a, n.current))
                }, [a, e, t.allowMultipleFiresPerSession])
            }
            let n = new Set;

            function o(e, t) {
                let s = (0, i.useRef)(t);
                return (0, i.useEffect)(() => {
                    s.current = t
                }, [t]), (0, i.useCallback)(() => {
                    n.has(e) || (n.add(e), r(680007).default.measureFromPageOrigin(e, s.current))
                }, [e])
            }
        },
        394810: (e, t, r) => {
            r.d(t, {
                h: () => i
            });

            function i(e) {
                var t;
                let {
                    spaceId: i,
                    currentUserId: s
                } = (0, r(682985).K8)(() => {
                    var t;
                    return {
                        spaceId: null == e ? void 0 : e.id,
                        currentUserId: null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id
                    }
                }, [e]), a = (0, r(217844)._)({
                    name: "members",
                    spaceId: i,
                    userId: s,
                    amount: "unknown"
                }), n = null == a || null == (t = a.limit) ? void 0 : t.total;
                return !!n && ("unlimited" === n || n > 1)
            }
        },
        400308: (e, t, r) => {
            r.d(t, {
                $: () => i
            }), r(581454);
            async function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    userIds: s,
                    invite: a,
                    membershipType: n
                } = e, o = i.id, l = (0, r(295447).Gx)({
                    environment: t,
                    spaceId: o
                }), d = t.idCreator.getSpaceShortIdCreator(o, l), {
                    serverCommitResult: u
                } = (0, r(377796).createAndCommit)({
                    userAction: "permissionsActions.saveSpaceActors",
                    environment: t,
                    canUndo: !0,
                    useSudoMode: !1,
                    cellTarget: "main",
                    perform: e => {
                        let o = s.map(e => ({
                                type: "user",
                                userId: e,
                                inviteId: d.idInSavedSpace(r(832375).Yxt),
                                membershipType: n
                            })),
                            {
                                inviteFlowId: l,
                                inviteMessage: u,
                                inviteOrigin: c,
                                disable_invite_email: p
                            } = a;
                        (0, r(215813).E)({
                            environment: t,
                            store: i,
                            permissionItems: o.map(e => {
                                var t;
                                return t = e, {
                                    type: "user_permission",
                                    role: (0, r(729052).ps)(t.membershipType),
                                    user_id: t.userId,
                                    invite_id: t.inviteId
                                }
                            }),
                            transaction: e,
                            inviteFlowId: l,
                            inviteMessage: (0, r(765898).Hb)(u),
                            inviteOrigin: c,
                            disable_invite_email: p
                        }), (0, r(73888).y)({
                            environment: t,
                            spaceStore: i,
                            actors: o,
                            transaction: e
                        })
                    }
                });
                await u
            }
        },
        433562: (e, t, r) => {
            r.r(t), r.d(t, {
                collectMentionUserIds: () => u,
                fetchExtendedUserProfile: () => o,
                prefetchExtendedUserProfiles: () => l,
                prefetchMentionedUserProfiles: () => c
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577);
            var i = () => r(247438),
                s = () => r(381453);
            class a {
                pendingInvocations = new Map;
                constructor(e, t, r, i) {
                    this.fn = e, this.coalesce = t, this.waitMs = r, this.options = i
                }
                enqueue(e) {
                    for (let [t, r] of this.pendingInvocations) {
                        let i = this.coalesce(t, e);
                        if (i) {
                            this.pendingInvocations.delete(t), this.pendingInvocations.set(i, r), r.dequeueDebounced(i);
                            return
                        }
                    }
                    let t = (0, s().sg)(this.dequeue.bind(this), this.waitMs, this.options);
                    this.pendingInvocations.set(e, {
                        dequeueDebounced: t
                    }), t(e)
                }
                dequeue(e) {
                    this.pendingInvocations.delete(e), this.fn.apply(null, e)
                }
            }
            var n = () => r(113486);
            async function o(e) {
                let {
                    viewedUserId: t,
                    actorUserId: i,
                    spaceStore: a,
                    store: o,
                    environment: l
                } = e;
                if (!o.isRefetchThrottleReady()) return;
                let d = (0, r(993077).dp)(a, t),
                    u = (0, r(993077).dp)(a, i);
                if (!(0, r(277350).$)(d.getMembershipType()) || !(0, r(277350).n)(u.getMembershipType())) return;
                let c = await l.api.callCellCompatibleApi({
                    eventName: "getExtendedUserProfiles",
                    environment: l,
                    data: {
                        userIds: [t],
                        spaceId: a.id,
                        includePermissionGroupMemberCounts: !1
                    },
                    cellNavigation: {
                        spaceId: a.id
                    }
                });
                if ("failed" === c.type) throw c.error;
                c.type;
                let p = (0, n().ed)(c.data).find(e => e.userId === t);
                p && ((0, s().n4)(p, o.state) || o.setState(p))
            }
            let l = function({
                fn: e,
                coalesce: t,
                waitMs: r,
                options: i
            }) {
                let s = new a(e, t, r, i);
                return (...e) => s.enqueue(e)
            }({
                fn: d,
                coalesce: ([e, t], [i, s]) => e.spaceStore.id === i.spaceStore.id && e.actorUserId === i.actorUserId && !!Object.is(t, s) && [{ ...e,
                    viewedUserIds: (0, r(763230).sb)([...e.viewedUserIds, ...i.viewedUserIds]).slice(0, r(907137).sD)
                }, s],
                waitMs: 1e3,
                options: {
                    maxWait: 3e3
                }
            });
            async function d(e, t) {
                let {
                    spaceStore: i,
                    actorUserId: a
                } = e, o = i.id, l = e.viewedUserIds.filter(e => !(0, n().Of)({
                    spaceId: o,
                    actorUserId: a,
                    viewedUserId: e
                }));
                if (0 === l.length) return;
                let d = r(678703).VF.createChildStore(i, {
                    id: (0, r(729052).i1)({
                        userId: a,
                        spaceId: o
                    }).id,
                    table: r(832375).aJN,
                    spaceId: o
                });
                if (!(0, r(277350).n)(d.getMembershipType())) return;
                let u = await t.api.callCellCompatibleApi({
                    environment: t,
                    eventName: "getExtendedUserProfiles",
                    data: {
                        spaceId: o,
                        userIds: l,
                        includePermissionGroupMemberCounts: !1
                    },
                    cellNavigation: {
                        spaceId: o
                    }
                });
                if ("failed" !== u.type)
                    for (let e of (0, n().ed)(u.data)) {
                        let t = (0, n().e9)({
                            spaceId: o,
                            actorUserId: a,
                            viewedUserId: e.userId
                        });
                        (0, s().n4)(e, t.state) || t.setState(e)
                    }
            }

            function u(e, t) {
                let s = new Set,
                    a = [e];

                function n(e) {
                    r(4962).w7.includes(e) || s.add(e)
                }

                function o(e) {
                    e.table === r(832375).oo9 && n(e.id)
                }
                let l = 0;
                e: for (; a.length > 0 && s.size < t && l < 100;) {
                    l += 1;
                    let r = a.pop();
                    if (!r.isDefined()) continue;
                    for (let e of (0, i().Fbh)(r.getTitleValue()))
                        if (n(e), s.size >= t) break e;
                    if (r === e) {
                        let e = r.getCreatedByPointer();
                        if (e && o(e), s.size >= t) break;
                        let i = r.getLastEditedByPointer();
                        if (i && o(i), s.size >= t) break
                    }
                    let d = r.getProperties();
                    for (let e of Object.keys(d)) {
                        let r = d[e];
                        if (r) {
                            for (let e of (0, i().Fbh)(r))
                                if (n(e), s.size >= t) break e
                        }
                    }
                    for (let e of r.getDiscussionStores())
                        for (let r of e.getCommentStores()) {
                            let e = r.getCreatedByPointer();
                            if (e && o(e), s.size >= t) break e;
                            for (let e of (0, i().Fbh)(r.getText()))
                                if (n(e), s.size >= t) break e
                        }
                    let u = r.getRenderableContentStores();
                    for (let e = u.length - 1; e >= 0; e--) {
                        let t = u[e];
                        t.isNavigableBlock() || a.push(t)
                    }
                }
                return Array.from(s)
            }

            function c(e, t) {
                if (!r(205885).e.state) return;
                let i = e.getSpaceStore();
                if (!i || !i.id || !i.userId) return;
                let s = u(e, 10);
                0 !== s.length && l({
                    spaceStore: i,
                    actorUserId: i.userId,
                    viewedUserIds: s
                }, t)
            }
        },
        577280: (e, t, r) => {
            r.d(t, {
                w: () => s
            }), r(296540);
            var i = r(474848);

            function s(e) {
                let {
                    labelType: t
                } = e, s = "invited" === t ? r(805186).S.invitedLabel : "external" === t ? r(805186).S.externalLabel : r(805186).S.guestLabel;
                return (0, i.jsx)(r(746434).E, {
                    content: (0, i.jsx)(r(109939).sA, { ...s
                    }),
                    color: "invited" === t || "external" === t ? "gray" : "yellow"
                })
            }
        },
        652743: (e, t, r) => {
            r.d(t, {
                $: () => i
            });

            function i(e) {
                let {
                    spaceStore: t,
                    viewedUserId: i
                } = e, s = (0, r(993077).nB)(t), a = (0, r(993077).V_)({
                    spaceStore: t,
                    userId: i
                });
                return (0, r(682985).K8)(() => (0, r(805697).WG)({
                    spaceStore: t,
                    actorRole: s,
                    viewedRole: a
                }), [t, s, a])
            }
        },
        760727: (e, t, r) => {
            r.d(t, {
                P3: () => a,
                ZI: () => n,
                ik: () => i,
                w0: () => o,
                yB: () => s
            });
            let i = 24,
                s = 24,
                a = {
                    sectionContainer: {
                        paddingInline: 24
                    },
                    sectionLabel: {
                        fontSize: 14,
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.regular,
                        color: r(632079).Tj.text.secondary
                    },
                    divider: {
                        marginInline: i
                    }
                },
                n = {
                    listModule: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4
                    },
                    truncationButton: {
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        padding: 4,
                        marginInlineStart: -4,
                        flexGrow: 0,
                        alignSelf: "flex-start",
                        maxWidth: "100%"
                    },
                    truncationLabel: {
                        fontSize: 14,
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.regular,
                        color: r(632079).Tj.text.secondary,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    rowContainer: {
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        padding: 4,
                        marginInlineStart: -4,
                        flexGrow: 0,
                        alignSelf: "flex-start",
                        maxWidth: "100%"
                    },
                    rowLabel: {
                        fontSize: 14,
                        lineHeight: "20px",
                        fontWeight: r(699422).Wy.regular,
                        color: r(632079).Tj.text.primary,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minWidth: 0
                    },
                    hoveredStyle: {
                        borderRadius: "6px"
                    },
                    avatarAndName: {
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        overflow: "hidden",
                        minWidth: 0
                    }
                },
                o = {
                    card: {
                        maxWidth: 400,
                        minWidth: 280,
                        padding: 12
                    },
                    bio: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        overflow: "hidden"
                    },
                    bioLink: {
                        overflow: "hidden"
                    },
                    bioRight: {
                        overflow: "hidden",
                        width: "100%"
                    },
                    actionButton: {
                        width: "100%",
                        height: 28,
                        fontWeight: r(699422).Wy.medium
                    },
                    profileTitle: {
                        fontWeight: r(699422).Wy.semibold
                    },
                    profileSubtitle: { ...r(699422).RC
                    },
                    loadingShimmerSecondary: {
                        height: 16,
                        width: 130,
                        borderRadius: 6,
                        animation: "500ms ease-in fadein"
                    },
                    loadingShimmerTertiary: {
                        height: 16,
                        width: 115,
                        borderRadius: 6,
                        animation: "500ms ease-in fadein"
                    }
                }
        }
    }
]);