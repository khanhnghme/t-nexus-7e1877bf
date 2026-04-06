"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [43239, 77470], {
        111057: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        recentRecoverableUsers: [],
                        searchQuery: void 0
                    }
                }
            }
            let a = new r
        },
        156379: (e, t, i) => {
            i.d(t, {
                L: () => r
            }), i(296540);
            var n = i(474848);

            function r() {
                return (0, n.jsx)(i(746434).E, {
                    content: (0, n.jsx)(i(109939).sA, {
                        id: "spaceUserMembershipType.restrictedMember",
                        defaultMessage: "Restricted"
                    }),
                    color: "yellow"
                })
            }
        },
        179701: (e, t, i) => {
            function n(e) {
                var t;
                let n = e.invite_targets.filter(i(64273).Gz),
                    r = e.invite_targets.filter(i(64273).ju),
                    a = n.length + r.length,
                    s = i(381453).oE(e.permission_items.map(e => {
                        if ("user_permission" === e.type) return e.user_id && (0, i(4962).ot)(e.user_id)
                    })),
                    o = new Set(null == (t = (0, i(328765).S)()) ? void 0 : t.getEmailDomains()),
                    l = e.invite_targets.filter(e => {
                        if ("existingUser" !== e.type && "newUser" !== e.type) return !1;
                        let t = (0, i(801109).zN)(e.value.email);
                        return t && o.has(t)
                    }).flatMap(e => "agent" === e.type ? [] : e.value.id ? [(0, i(4962).ot)(e.value.id)] : []),
                    c = (0, i(216260).AI)(),
                    u = e.invitee_ids_with_internal_domain ? ? [];
                return {
                    role: e.role,
                    user_count: a,
                    new_user_count: n.length,
                    new_workspace_member_count: e.is_space ? a : l.length,
                    new_workspace_member_ids: e.is_space ? s : l,
                    is_onboarding: e.is_onboarding,
                    invite_flow_id: e.invite_flow_id,
                    invite_origin: e.invite_origin,
                    invitee_ids: s,
                    invite_message_length: e.invite_message_length,
                    subscription_tier: c,
                    domain_type: e.domainType,
                    ...!e.is_space && {
                        share_menu_session_id: e.share_menu_session_id
                    },
                    allow_domain_auto_invite: l.length > 0,
                    is_space: e.is_space,
                    collection_id: e.collection_id,
                    owned_collection_count: e.owned_collection_count,
                    linked_collection_count: e.linked_collection_count,
                    parent_collection_id: e.parent_collection_id,
                    is_internal_domain: u.length > 0,
                    invitee_ids_with_internal_domain: u,
                    invitee_ids_with_internal_domain_enforced: e.invitee_ids_with_internal_domain_enforced
                }
            }

            function r(e) {
                let t = n(e);
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_error",
                        eventProperties: t
                    }
                })
            }

            function a(e, t) {
                let r = n(t);
                (0, i(104310).u)({
                    event: {
                        eventName: "invite",
                        eventProperties: { ...r,
                            is_space: t.is_space
                        }
                    }
                });
                let a = (0, i(328765).S)();
                if (!a) return;
                let o = a.id;
                if (i(105692).subscriptionDataStoreInstance.waitUntilLoaded().then(() => {
                        let n = i(105692).subscriptionDataStoreInstance.state,
                            a = n ? (0, i(34504).V)(e, n, o) : void 0,
                            l = n ? (0, i(19676).h)(e, n, o) : void 0;
                        (0, i(104310).u)({
                            event: {
                                eventName: "invite_debug_with_block_usage",
                                eventProperties: { ...r,
                                    is_space: t.is_space,
                                    is_over_block_limit: a,
                                    block_usage: l
                                }
                            }
                        }), t.is_space || (s(e, r), i(287621).xO(e, {
                            inviteTargets: t.invite_targets,
                            origin: t.invite_origin
                        }))
                    }), t.is_space || r.allow_domain_auto_invite) {
                    (0, i(104310).u)({
                        event: {
                            eventName: "space_invite",
                            eventProperties: r
                        }
                    }), (0, i(772208).M)(e, {
                        space_invited: !0
                    }), i(287621).KX(e, {
                        invite_origin: t.invite_origin,
                        domainType: t.domainType,
                        new_workspace_member_count: r.new_workspace_member_count,
                        new_workspace_member_ids: r.new_workspace_member_ids,
                        allow_domain_auto_invite: r.allow_domain_auto_invite
                    });
                    let n = (0, i(616579).j)({
                        environment: e,
                        spaceId: a.id
                    }) ? ? 1;
                    var l, c = e,
                        u = {
                            visibleMembersCount: n,
                            isProfessionalTeamUser: t.isProfessionalTeamUser,
                            domainType: t.domainType
                        };
                    let s = (0, i(216260).AI)();
                    if (u.visibleMembersCount <= 1) {
                        (0, i(195857).DO_NOT_USE_trackLegacy)("workspace_first_invite_sent"), l = {
                            subscriptionTier: s,
                            domainType: u.domainType
                        }, (0, i(378414).W)(c, {
                            event: "workspace_first_invite_sent",
                            data: l
                        }), "professional" === u.domainType && ((0, i(104310).u)({
                            event: {
                                eventName: "professional_workspace_first_invite_sent",
                                eventProperties: {
                                    visible_members_count: u.visibleMembersCount,
                                    is_professional_team_user: u.isProfessionalTeamUser,
                                    domain_type: u.domainType
                                }
                            }
                        }), (0, i(378414).W)(c, {
                            event: "professional_workspace_first_invite_sent"
                        }))
                    }
                }
                t.is_space || r.new_workspace_member_ids.length === t.invite_targets.length || ((0, i(104310).u)({
                    event: {
                        eventName: "page_invite",
                        eventProperties: r
                    }
                }), function(e, t) {
                    let n = i(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!n) return;
                    let r = n.getKeyStore("settings").getKeyStore("signup_time").getValue();
                    if (!n.getKeyStore("settings").getKeyStore("first_page_invite_at").getValue()) {
                        let a = Date.now(),
                            s = { ...t,
                                ...r ? {
                                    signup_time_ready: !0,
                                    time_from_signup_to_first_page_invite: r - a
                                } : {
                                    signup_time_ready: !1
                                }
                            };
                        (0, i(104310).u)({
                            event: {
                                eventName: "page_invite_time",
                                eventProperties: s
                            }
                        }), (0, i(377796).createAndCommit)({
                            userAction: "firstPageInvite",
                            environment: e,
                            cellTarget: "main",
                            userId: n.id,
                            canUndo: !0,
                            perform: e => {
                                (0, i(862759).m)({
                                    userSettingsStore: n,
                                    data: {
                                        first_page_invite_at: a
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }
                }(e, r))
            }
            async function s(e, t) {
                let n, r = i(728372).AppStoreSidebarSpaceStore.state,
                    a = i(728372).AppStoreCurrentUserStore.state,
                    s = r && r.canEditMembership(),
                    o = i(904434).FX(),
                    l = null == a ? void 0 : a.getEmail();
                if (!s || !o || !l || "professional" !== o) return;
                let c = (0, i(801109).zN)(l);
                if (c) {
                    if (i(908032).i({
                            userId: null == a ? void 0 : a.id,
                            spaceId: r.id,
                            debugFrom: "trackPageInviteGuestSummary"
                        })) {
                        let t = i(218744).default.getConfigKey("email_alias_migration", "mode"),
                            a = await e.api.callApi({
                                eventName: "listUsers",
                                environment: e,
                                data: {
                                    cursor: void 0,
                                    membershipFilter: "guests",
                                    limit: 1e4,
                                    sort: "name_normalized",
                                    sortDirection: "asc",
                                    query: "",
                                    spaceId: r.id,
                                    includeAliasSearch: (0, i(485477).K)(t)
                                }
                            });
                        if ("success" !== a.type) return;
                        n = a.data.users.map(e => e.id)
                    } else {
                        let e = i(105692).subscriptionDataStoreInstance.state;
                        if (!e) return;
                        n = (0, i(883947).o)(e).slice(0, 50).map(e => ({
                            email: i(807825).L.createChildStore(r, {
                                table: i(832375).oo9,
                                id: e.userId
                            }).getEmail(),
                            guestId: e.userId
                        })).filter(e => e.email && (0, i(801109).zN)(e.email) === c).map(e => e.guestId)
                    }(0, i(104310).u)({
                        event: {
                            eventName: "page_invite_guest_summary",
                            eventProperties: { ...t,
                                guest_with_same_domain_count: n.length,
                                guest_ids: n
                            }
                        }
                    })
                }
            }

            function o(e) {
                let t = (0, i(192159).AI)(e.billingData);
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_typed",
                        eventProperties: {
                            invite_flow_id: e.invite_flow_id,
                            invite_origin: e.invite_origin,
                            subscription_tier: t
                        }
                    }
                })
            }

            function l(e) {
                let t, {
                    selected_user_token: n
                } = e;
                "group" === n.type && (t = {
                    type: n.type,
                    value: {
                        id: n.value.group_id
                    }
                }), (0, i(104310).u)({
                    event: {
                        eventName: "invite_select_target",
                        eventProperties: t ? { ...e,
                            selected_user_token: t
                        } : e
                    }
                })
            }

            function c(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_change_role",
                        eventProperties: e
                    }
                })
            }

            function u(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "abandon_permissions_invite",
                        eventProperties: e
                    }
                })
            }

            function d(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_share_workspace_invite",
                        eventProperties: e
                    }
                })
            }

            function p(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "send_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function _(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "send_membership_request",
                        eventProperties: e
                    }
                })
            }

            function v(e) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("send_guest_request", e)
            }

            function m(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "skip_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function g(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_page_share_invite",
                        eventProperties: e
                    }
                })
            }

            function f() {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_space_invite",
                        eventProperties: {}
                    }
                })
            }

            function h(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_modal_input_focus",
                        eventProperties: e
                    }
                })
            }

            function w(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_users_to_page",
                        eventProperties: e
                    }
                }), i(707964).u4({
                    name: "invite_users_to_page"
                })
            }

            function b(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "internal_domain_enforced",
                        eventProperties: e
                    }
                })
            }

            function y() {
                (0, i(104310).u)({
                    event: {
                        eventName: "workspace_over_guest_limit",
                        eventProperties: {}
                    }
                })
            }

            function T(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_invite_members_modal",
                        eventProperties: e
                    }
                })
            }

            function S(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "share_menu_invite_display_mode_change",
                        eventProperties: e
                    }
                })
            }
            i.d(t, {
                iv: () => u,
                _u: () => p,
                Jg: () => a,
                J8: () => r,
                hp: () => b,
                Jy: () => c,
                Wd: () => h,
                kH: () => l,
                D2: () => o,
                R2: () => w,
                vX: () => T,
                F1: () => g,
                bT: () => d,
                VV: () => f,
                xF: () => v,
                RH: () => _,
                UC: () => S,
                l8: () => m,
                ig: () => y
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670), i(581454)
        },
        205954: (e, t, i) => {
            function n({
                spaceStore: e,
                members: t
            }) {
                let r = s({
                        spaceStore: e
                    }),
                    a = (0, i(533992).v3)(),
                    o = e.id,
                    [l] = (0, i(97668).Yb)(async () => {
                        if (!r) return;
                        let e = await a.api.callApi({
                            eventName: "getRecentlyRemovedUsers",
                            environment: a,
                            data: {
                                spaceId: o
                            }
                        });
                        if ("failed" === e.type) throw i(647095).Qg(e), e;
                        return e.data.recentlyRemovedMembers
                    }, [o, a, r, t]);
                return l.value
            }

            function r({
                spaceStore: e,
                subscriptionData: t
            }) {
                let n = a({
                        spaceStore: e,
                        subscriptionData: t
                    }),
                    s = (0, i(533992).v3)();
                (0, i(97668).Yb)(async () => {
                    if (!n) return;
                    let t = await s.api.callApi({
                        eventName: "getRecoverableSpaceUserContent",
                        environment: s,
                        data: {
                            spaceId: e.id
                        }
                    });
                    if ("failed" === t.type) throw t;
                    let r = t.data.recentSpaceRecoverPages;
                    return i(111057).A.setState({ ...i(111057).A.state,
                        recentRecoverableUsers: r
                    }), r
                }, [e, s, n])
            }

            function a({
                spaceStore: e,
                subscriptionData: t
            }) {
                return (0, i(682985).K8)(() => e.canAdmin() && i(262166).OX(t.subscriptionTier), [t, e])
            }

            function s({
                spaceStore: e
            }) {
                return (0, i(682985).K8)(() => e.canAdmin(), [e])
            }

            function o({
                spaceStore: e
            }) {
                return (0, i(682985).K8)(() => !!e && e.canEditMembership(), [e])
            }

            function l({
                spaceStore: e
            }) {
                let t = (0, i(993077).U2)(e);
                return (0, i(682985).K8)(() => (0, i(405461).Ny)({
                    spaceStore: e,
                    spaceUserStore: t
                }), [e, t])
            }

            function c() {
                let e = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => (0, i(939588).v)(e), [e])
            }

            function u({
                spaceStore: e
            }) {
                let t = (0, i(394810).h)(e);
                return (0, i(682985).K8)(() => !!((null == e ? void 0 : e.canEditMembership()) && t), [e, t])
            }

            function d({
                spaceStore: e
            }) {
                let t = (0, i(394810).h)(e),
                    n = !!((0, i(682985).K8)(() => null == e ? void 0 : e.canAdmin(), [e]) && t);
                return {
                    hoverCard: n,
                    directory: n,
                    activity: n
                }
            }
            i.d(t, {
                BV: () => n,
                Gg: () => u,
                Ul: () => d,
                k4: () => o,
                qz: () => l,
                r1: () => s,
                rl: () => r,
                t1: () => a,
                zh: () => c
            })
        },
        215813: (e, t, i) => {
            i.d(t, {
                E: () => s
            }), i(944114);
            var n = () => i(517013),
                r = () => i(832375),
                a = () => i(173157);

            function s(e) {
                var t;
                let {
                    environment: s,
                    store: o,
                    permissionItems: l,
                    transaction: c,
                    inviteFlowId: u,
                    inviteMessage: d,
                    inviteOrigin: p,
                    disable_invite_email: _
                } = e, v = o.getSpaceId() || (o.table === r().NXh ? o.id : null == (t = (0, i(974410).f)(o)) ? void 0 : t.id), {
                    id: m
                } = s.currentUser;
                for (let e of l)
                    if (v && "user_permission" === e.type && e.invite_id) {
                        if (o.table === r().C0E) continue;
                        let {
                            inviteeId: t,
                            inviteeTable: s
                        } = function(e) {
                            let {
                                item: t,
                                spaceId: n
                            } = e;
                            return i(642157).B2(t) ? {
                                inviteeId: t.user_id,
                                inviteeTable: r().oo9
                            } : i(642157).P3(t) ? {
                                inviteeId: t.bot_id,
                                inviteeTable: r().GPl
                            } : i(642157).Ds(t) ? {
                                inviteeId: t.group_id,
                                inviteeTable: i(434652).gp
                            } : i(642157).Lg(t) ? {
                                inviteeId: n,
                                inviteeTable: r().NXh
                            } : i(642157).gl(t) ? {
                                inviteeId: t.team_id,
                                inviteeTable: r().yKj
                            } : {}
                        }({
                            item: e,
                            spaceId: v
                        }), l = {
                            id: e.invite_id,
                            version: 1,
                            flow_id: u,
                            space_id: v,
                            target_id: o.id,
                            target_table: o.table,
                            inviter_id: m,
                            inviter_table: r().oo9,
                            invitee_id: t,
                            invitee_table_or_group: s,
                            message: d,
                            created_time: Date.now(),
                            attributes: {
                                permission: e,
                                origin_type: p,
                                disable_invite_email: _
                            }
                        };
                        (0, a().z)({
                            store: (0, n().v3)(o, {
                                table: "invite",
                                id: l.id,
                                spaceId: v
                            }),
                            data: l,
                            transaction: c
                        })
                    }
                return c.postSubmitCallbacks.push(e => {
                    i(179701).R2({
                        status: e ? "fail" : "success",
                        origin: p
                    })
                }), !0
            }
        },
        251143: (e, t, i) => {
            i.d(t, {
                i: () => a
            }), i(296540);
            var n = i(474848);
            let r = {
                header: {
                    minWidth: 300,
                    padding: "10px 12px"
                },
                headerBackground: {
                    backgroundColor: i(632079).Tj.background.secondary
                }
            };

            function a(e) {
                let {
                    trigger: t,
                    header: a,
                    children: s,
                    originGap: o,
                    placement: l,
                    alignment: c,
                    disabled: u
                } = e, d = (0, i(83208).X)("use_topbar_person_hovercards");
                return (0, n.jsxs)(i(399806).Z, {
                    trigger: t,
                    originGap: o,
                    placement: l,
                    alignment: c,
                    disabled: u,
                    children: [(0, n.jsx)(i(111010).D, {
                        styleKey: d ? "captionMedium" : "bodyRegular",
                        colorVariant: "secondary",
                        style: { ...r.header,
                            ...d && r.headerBackground
                        },
                        children: a
                    }), (0, n.jsx)(i(346268).c, {
                        size: 0,
                        type: "horizontal",
                        colorVariant: "secondary"
                    }), s]
                })
            }
        },
        399806: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i(296540),
                r = i(474848);

            function a(e) {
                let {
                    trigger: t,
                    children: a,
                    originGap: s = 6,
                    placement: o = "bottom",
                    alignment: l = "center",
                    disabled: c = !1
                } = e, [u, d] = (0, n.useState)(!1), [p, _] = (0, n.useState)(), v = (0, n.useRef)(null), m = (0, n.useRef)(), g = (0, n.useRef)(!1), f = (0, n.useRef)(!1), h = (0, n.useCallback)(() => i(23531).A.state.isPinned || void 0 !== i(84300).A.state, []), w = (0, i(682985).K8)(h, [h]), b = (0, n.useCallback)(() => {
                    c || (g.current = !0, window.clearTimeout(m.current), m.current = window.setTimeout(() => {
                        v.current && (_(v.current.getBoundingClientRect()), d(!0))
                    }, 200))
                }, [c]), y = (0, n.useCallback)(() => {
                    if (c || (g.current = !1, h())) return;
                    let e = f.current ? 300 : 100;
                    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
                        h() || d(!1)
                    }, e)
                }, [c, h]);
                return (0, n.useEffect)(() => () => {
                    window.clearTimeout(m.current)
                }, []), (0, n.useEffect)(() => {
                    f.current && !w && u && !g.current && (window.clearTimeout(m.current), m.current = window.setTimeout(() => {
                        h() || d(!1)
                    }, 300)), f.current = w
                }, [w, u, h]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        ref: v,
                        onMouseOver: b,
                        onMouseLeave: y,
                        children: t
                    }), (0, r.jsx)(i(182718).zD, {
                        popupType: i(182718).nl.Popup,
                        open: u,
                        originRect: p,
                        originGap: s,
                        placementToOrigin: o,
                        alignmentToOrigin: l,
                        preventCaptureEsc: !0,
                        disableMouseCapture: !0,
                        trapFocus: !1,
                        content: () => (0, r.jsx)("div", {
                            onMouseOver: b,
                            onMouseLeave: y,
                            children: a
                        })
                    })]
                })
            }
        },
        413630: (e, t, i) => {
            i.d(t, {
                LN: () => v,
                Qh: () => l,
                Qs: () => u,
                gc: () => m,
                hL: () => s,
                m: () => _,
                rV: () => p
            }), i(57145), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(581454);
            var n = i(296540);
            let r = new Set(["Joined"]);

            function a(e) {
                let {
                    teamTypes: t
                } = e, r = (0, i(533992).v3)(), a = (0, i(682985).K8)(() => {
                    var t;
                    return e.userId ? ? (null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id)
                }, [e.userId]), s = (0, i(682985).K8)(() => e.spaceStore ? ? (0, i(328765).S)(), [e.spaceStore]);
                return (0, n.useEffect)(() => {
                    void 0 !== a && void 0 !== s && (0, i(455205).fetchUnfetchedTeams)({
                        userId: a,
                        spaceId: s.id,
                        teamTypes: t,
                        environment: r,
                        canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                        sort: null == e ? void 0 : e.sort
                    })
                }, [a, s, t, r, null == e ? void 0 : e.canTruncateRecordMap, null == e ? void 0 : e.sort]), (0, i(682985).K8)(() => {
                    if (void 0 === a || void 0 === s) return {
                        teams: [],
                        isLoading: !0,
                        isError: !1
                    };
                    let {
                        teams: e,
                        isLoading: n,
                        isError: r
                    } = i(988752).E.readTeams(a, s.id, t);
                    return {
                        teams: e,
                        isLoading: n,
                        isError: r
                    }
                }, [a, s, t], {
                    equalityFn: i(795676).k
                })
            }

            function s(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: i,
                    teamTypes: r
                })
            }
            let o = new Set(["UnjoinedActive"]);

            function l(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: i,
                    teamTypes: o,
                    canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                    sort: null == e ? void 0 : e.sort
                })
            }
            let c = new Set(["Joined", "UnjoinedActive"]);

            function u(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: i,
                    teamTypes: c
                })
            }
            let d = new Set(["Joined", "UnjoinedActive", "Archived"]);

            function p(e) {
                let {
                    userId: t,
                    spaceStore: i
                } = e || {};
                return a({
                    userId: t,
                    spaceStore: i,
                    teamTypes: d
                })
            }

            function _(e) {
                let {
                    userId: t,
                    spaceStore: r
                } = e, {
                    teams: a,
                    isLoading: o,
                    isError: l
                } = s({
                    userId: t,
                    spaceStore: r
                }), c = (0, i(682985).K8)(() => {
                    var e;
                    return new Map(((null == (e = i(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getJoinedTeams()) ? ? []).map((e, t) => [e, t]))
                }, []);
                return {
                    teams: (0, n.useMemo)(() => a.toSorted((e, t) => (c.get(e.id) ? ? 1 / 0) - (c.get(t.id) ? ? 1 / 0)), [a, c]),
                    isLoading: o,
                    isError: l
                }
            }

            function v(e) {
                let {
                    spaceStore: t,
                    shouldCreateTeamStores: n
                } = e, {
                    teams: r
                } = _(e);
                return {
                    teams: (0, i(682985).K8)(() => t && n ? r.map(e => (0, i(455205).getTeamStore)({
                        teamId: e.id,
                        spaceStore: t
                    })) : [], [r, t, n]),
                    metadata: r
                }
            }

            function m(e) {
                let {
                    teams: t
                } = e, n = (0, i(682985).K8)(() => e.spaceStore ? ? (0, i(328765).S)(), [e.spaceStore]);
                return n ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: r
                }) => ({
                    store: (0, i(455205).getTeamStore)({
                        teamId: e,
                        spaceStore: n
                    }),
                    type: t,
                    membershipSummary: r
                })) : []
            }
        },
        428602: (e, t, i) => {
            i.d(t, {
                Y: () => a
            }), i(296540);
            var n = i(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, n.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                a = (0, i(104509).wt)("viewCalendarSmall", r, "small")
        },
        455205: (e, t, i) => {
            i.r(t), i.d(t, {
                FETCHABLE_TEAM_TYPES: () => s,
                fetchUnfetchedTeams: () => l,
                fetchUnfetchedTeamsFromLocalStorage: () => u,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => _,
                getTeamMetadataFromStore: () => m,
                getTeamStore: () => v,
                refetchTeams: () => c
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520);
            var n = () => i(988752);
            async function r(e) {
                let {
                    actorUserId: t,
                    targetUserId: n,
                    spaceId: r,
                    teamTypes: a,
                    teamIds: s,
                    environment: o
                } = e;
                if (!(0, i(422280).GL)({
                        actorUserId: t,
                        targetUserId: n,
                        teamTypes: a
                    })) throw new(i(101787)).qQk("User does not have permission to fetch teams for another user.");
                let l = await o.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: o,
                    data: {
                        spaceId: r,
                        teamTypes: Array.from(a),
                        teamIds: "all" === s ? void 0 : Array.from(s),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, i(958692).X7)() && void 0,
                        targetUserId: n
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: r
                    }
                });
                if ("failed" === l.type) throw l.error;
                let {
                    teams: c,
                    hasUnjoinedActiveTeams: u
                } = l.data;
                return {
                    teams: c,
                    ...void 0 !== u && {
                        hasUnjoinedActiveTeams: u
                    }
                }
            }
            let a = new(i(245541)).R({
                    key: "localStorageTeams",
                    namespace: i(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                s = ["Joined", "UnjoinedActive", "Archived"];
            async function o(e) {
                let {
                    userId: t,
                    spaceId: s,
                    teamTypesToUpdate: o,
                    teamIdsToUpdate: l,
                    environment: c,
                    canTruncateRecordMap: u,
                    sort: d
                } = e, p = n().E.getOrCreateUnit(t, s);
                if (0 === o.size || "all" !== l && 0 === l.size) return void await p.pendingUpdates;
                let _ = r({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: s,
                    teamTypes: o,
                    teamIds: l,
                    environment: c,
                    canTruncateRecordMap: u,
                    sort: d
                });
                n().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: s,
                        fetchedTeamsPromise: _,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: o,
                        teamIdsToUpdate: l
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: n,
                            teamsResponse: r
                        } = e;
                        if (!i(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: s
                        } = r, o = s.filter(e => "Joined" === e.type), l = s.filter(e => "UnjoinedActive" === e.type), c = s.filter(e => "Archived" === e.type), u = o.concat(l, c).slice(0, 1e3);
                        a.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [n] : { ...r,
                                    teams: u
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: s,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function l(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamTypes: r,
                    environment: a,
                    canTruncateRecordMap: s,
                    sort: l
                } = e, c = n().E.getOrCreateUnit(t, i), u = new Set(Array.from(r.values()).filter(e => "server" !== c.lastFetchSourceOfTeamType[e]));
                await o({
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: u,
                    teamIdsToUpdate: "all",
                    environment: a,
                    canTruncateRecordMap: s,
                    sort: l
                })
            }
            async function c(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamIds: r,
                    environment: a
                } = e, l = n().E.getOrCreateUnit(t, i), c = new Set(s.filter(e => "server" === l.lastFetchSourceOfTeamType[e]));
                await o({
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: r,
                    environment: a
                })
            }

            function u() {
                let e = a.getState();
                for (let t in e)
                    for (let i in e[t]) {
                        let r = n().E.getOrCreateUnit(t, i),
                            a = new Set(s.filter(e => "none" === r.lastFetchSourceOfTeamType[e]));
                        0 !== a.size && n().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: i,
                            fetchedTeamsPromise: Promise.resolve(e[t][i]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: a,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    teamTypes: r,
                    environment: a
                } = e;
                return await l({
                    userId: t,
                    spaceId: i.id,
                    teamTypes: r,
                    environment: a
                }), n().E.readTeams(t, i.id, r).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    environment: n
                } = e;
                return await d({
                    userId: t,
                    spaceStore: i,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: n
                })
            }
            async function _(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    environment: n
                } = e;
                return await d({
                    userId: t,
                    spaceStore: i,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: n
                })
            }

            function v(e) {
                let {
                    teamId: t,
                    spaceStore: n
                } = e;
                return i(681735).h.createChildStore(n, {
                    table: i(832375).yKj,
                    id: t
                })
            }

            function m(e) {
                var t;
                let {
                    teamStore: r,
                    userId: a,
                    spaceStore: s
                } = e, o = n().E.readMembershipCount({
                    userId: a,
                    spaceId: s.id,
                    teamId: r.id
                }), l = r.getArchivedBy() ? "Archived" : (0, i(220530).f)({
                    userId: a,
                    teamStore: r,
                    userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                        spaceId: s.id
                    })
                }) ? "Joined" : "UnjoinedActive", c = (0, i(228091).a)({
                    teamStore: r,
                    userId: a,
                    userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                        spaceId: s.id
                    })
                }) ? ? "none";
                return {
                    id: r.id,
                    title: r.getName() ? ? "",
                    icon: null == (t = r.getIcon()) ? void 0 : t.icon,
                    type: l,
                    membershipSummary: o,
                    lastEditedTime: 0 === r.getLastEditedTime() ? void 0 : r.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: r.getDisablePublicAccess(),
                        disableGuests: r.getDisableGuests(),
                        disableExport: r.getDisableExport()
                    },
                    teamRole: c,
                    isDefaultTeam: r.isDefault(),
                    accessLevel: r.getTeamAccessLevel(),
                    description: r.getDescription()
                }
            }
        },
        691631: (e, t, i) => {
            i.r(t), i.d(t, {
                AvatarHoverCard: () => r
            }), i(296540);
            var n = i(474848);

            function r(e) {
                let {
                    trigger: t,
                    userStore: r,
                    header: a,
                    spaceStore: s,
                    placement: o
                } = e, l = (0, i(682985).K8)(() => (0, i(916804).I)(s) || !r.isDefined(), [s, r]);
                return a ? (0, n.jsx)(i(251143).i, {
                    trigger: t,
                    header: a,
                    disabled: l,
                    placement: o,
                    children: (0, n.jsx)(i(3196).E, {
                        userStore: r,
                        from: "page_topbar"
                    })
                }) : (0, n.jsx)(i(399806).Z, {
                    trigger: t,
                    disabled: l,
                    placement: o,
                    children: (0, n.jsx)(i(3196).E, {
                        userStore: r,
                        from: "page_topbar"
                    })
                })
            }
        },
        758972: (e, t, i) => {
            i.d(t, {
                Ay: () => c,
                NJ: () => s,
                d5: () => o
            }), i(898992), i(354520), i(581454), i(737550);
            var n, r, a = () => i(546605);
            let s = ((n = {}).unselected = "unselected", n.workspace_member = "workspace_member", n.request_workspace_member = "request_workspace_member", n.page_guest = "page_guest", n.closed = "closed", n),
                o = ((r = {})[r.closed = 0] = "closed", r[r.share_page = 1] = "share_page", r[r.share_workspace = 2] = "share_workspace", r[r.request_workspace = 3] = "request_workspace", r);
            class l extends a().Store {
                getInitialState() {
                    return {
                        inviteStage: o.closed,
                        selection: s.workspace_member,
                        order: [s.workspace_member, s.page_guest],
                        invitedUsers: [],
                        invitedEmailToUserIdMap: {},
                        flowId: i(92513).JW()
                    }
                }
                startWorkspaceInvite() {
                    this.setState({ ...this.state,
                        inviteStage: o.share_workspace,
                        order: [s.workspace_member, s.page_guest],
                        selection: s.workspace_member
                    })
                }
                startRequestMembership() {
                    this.setState({ ...this.state,
                        inviteStage: o.request_workspace,
                        order: [s.request_workspace_member, s.page_guest],
                        selection: s.request_workspace_member
                    })
                }
                hasGuests() {
                    return this.state.invitedUsers.some(e => e.isGuest)
                }
                getGuestEmails() {
                    return this.state.invitedUsers.filter(e => e.isGuest).map(e => e.email)
                }
            }
            let c = l
        },
        765898: (e, t, i) => {
            i.d(t, {
                BS: () => o,
                CO: () => r,
                Hb: () => s,
                Y3: () => n,
                _T: () => l
            }), i(898992), i(672577), i(803949), i(814603), i(147566), i(198721);
            let n = 8,
                r = 70;
            (0, i(109939).YK)({
                member: {
                    id: "sharedContextualInviteHelpers.member.inviteMessage2",
                    defaultMessage: "{userName} shared a page {pageName} with you."
                },
                guest: {
                    id: "sharedContextualInviteHelpers.guest.inviteMessage2",
                    defaultMessage: "Accept {userName}{userNameEndsWithS, select, true {’} other {’s}} invite to view {pageName}."
                },
                default: {
                    id: "sharedContextualInviteHelpers.default.inviteMessage",
                    defaultMessage: "Your invitation message"
                },
                optional: {
                    id: "sharedContextualInviteHelpers.default.inviteMessagePrefix",
                    defaultMessage: "Optional message…"
                }
            });
            let a = /@0x[0-9a-fA-F]+/g;

            function s(e, t = 1e3) {
                let n, r;
                if (!e) return "";
                let o = (n = (0, i(189684).Kq)(e), r = "[link]", n = n.replaceAll(a, r), i(159523).I6(n, "url").forEach(e => {
                    n = n.replace(e.value, r)
                }), n);
                return o.length > t && (o = `${o.substring(0,t)}...`), o
            }

            function o(e) {
                return !!e && i(159523).I6(e, "url").length > 0
            }

            function l(e, t) {
                var n;
                let r = null == (n = i(993189).Bj6.fromValue("block", e).getPermissionItems()) ? void 0 : n.find(e => "user_permission" === e.type && e.user_id === t.invited_user_id);
                if (r && "invite_id" in r) return r.invite_id
            }
        },
        883947: (e, t, i) => {
            i.d(t, {
                o: () => n
            }), i(898992), i(354520);

            function n(e) {
                return (0, i(576968).B)(e).filter(i(573143).QE)
            }
        },
        939588: (e, t, i) => {
            i.d(t, {
                v: () => n
            });

            function n(e) {
                var t;
                let n;
                return t = ["personal", "student", "personal_free"], !((n = (0, i(216260).AI)()) && t.includes(n))
            }
        }
    }
]);