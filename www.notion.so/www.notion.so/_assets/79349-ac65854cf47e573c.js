"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [79349], {
        179349: (e, t, i) => {
            async function n(e) {
                let {
                    environment: t,
                    inviteTargets: n,
                    inviteRole: r
                } = e;
                return Promise.all(n.map(async e => {
                    if ("newUser" === e.type) {
                        let n = await (0, i(378880).J)(t, e);
                        return {
                            inviteTarget: { ...e,
                                value: { ...e.value,
                                    id: n
                                }
                            },
                            permissionItem: {
                                type: "user_permission",
                                role: r,
                                user_id: n
                            }
                        }
                    }
                    if ("existingUser" === e.type) {
                        let t = {
                            type: "user_permission",
                            role: r,
                            user_id: e.value.id
                        };
                        return {
                            inviteTarget: e,
                            permissionItem: t
                        }
                    }
                    if ("group" === e.type) {
                        let t = {
                            type: "group_permission",
                            role: r,
                            group_id: e.value.group_id
                        };
                        return {
                            inviteTarget: e,
                            permissionItem: t
                        }
                    }(0, i(722371).HB)(e)
                }))
            }
            async function r(e) {
                let {
                    environment: t,
                    permissionItems: i,
                    inviteMessage: n,
                    store: r,
                    type: s
                } = e;
                return !(await Promise.allSettled(i.map(async e => t.api.callApi({
                    eventName: "requestAccess",
                    environment: t,
                    data: {
                        type: s,
                        block: {
                            id: r.id,
                            spaceId: r.getSpaceId()
                        },
                        forActorId: e.user_id,
                        message: void 0,
                        attributes: {
                            role: e.role,
                            inviteMessage: n
                        }
                    }
                })))).find(e => "rejected" === e.status || "fulfilled" === e.status && "failed" === e.value.type)
            }
            async function s(e) {
                let {
                    environment: t,
                    permissionItems: i,
                    inviteMessage: n,
                    store: s
                } = e;
                return r({
                    environment: t,
                    store: s,
                    permissionItems: i,
                    inviteMessage: n,
                    type: "guest-invite-request"
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    spaceStore: n
                } = e;
                if (!n) return;
                let r = (0, i(616579).j)({
                        environment: t,
                        spaceId: n.id
                    }) ? ? 0,
                    s = n.getSettings().seen_expansion_offer ? ? !1;
                r > 1 && s && !(0, i(521469).fd)(null == n ? void 0 : n.getModel(), "expansion_offer") && await (0, i(832799).Ni)(t, "expansion_offer")
            }
            async function o(e) {
                let {
                    environment: t,
                    store: n,
                    permissionItems: r,
                    invite: s
                } = e, a = n.getSpaceId();
                if (!a || !i(949830).A.getData(t, {
                        spaceId: a,
                        userId: t.currentUser.id
                    })) return !1;
                let o = (0, i(295447).Gx)({
                        environment: t,
                        spaceId: a
                    }),
                    l = t.idCreator.getSpaceShortIdCreator(a, o),
                    u = r.filter(i(642157).B2).map(e => ({ ...e,
                        invite_id: l.idInSavedSpace(i(832375).Yxt)
                    }));
                if ("failed" === (await t.api.callApi({
                        eventName: "inviteGuestsToSpace",
                        environment: t,
                        data: {
                            block: {
                                id: n.id,
                                spaceId: a
                            },
                            permissionItems: u
                        }
                    })).type) return !1;
                let {
                    serverCommitResult: d
                } = (0, i(377796).createAndCommit)({
                    userAction: "permissionsActions.saveInvites",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        let {
                            inviteFlowId: r,
                            inviteMessage: a,
                            inviteOrigin: o,
                            disable_invite_email: l
                        } = s;
                        (0, i(215813).E)({
                            environment: t,
                            store: n,
                            permissionItems: u,
                            transaction: e,
                            inviteFlowId: r,
                            inviteMessage: (0, i(765898).Hb)(a),
                            inviteOrigin: o,
                            disable_invite_email: l
                        })
                    }
                });
                await d;
                let p = r.filter(i(642157).P3);
                return p.length > 0 && await (0, i(646201).J)({
                    environment: t,
                    store: n,
                    permissionItems: p,
                    invite: s
                }), !0
            }
            async function l(e) {
                var t, r;
                let l, u, {
                        environment: d,
                        store: p,
                        inviteTargets: _,
                        inviteRole: c,
                        invite: m,
                        sudoModeStore: v,
                        isOnboarding: f
                    } = e,
                    g = p.getSpaceId();
                if (0 === _.length || !g) return {
                    success: !0,
                    invitedUsers: {},
                    requestedUsers: {}
                };
                let b = (0, i(974410).f)(p),
                    {
                        toInvite: h,
                        toRequest: I
                    } = function(e, t) {
                        if (!(e.table === i(832375).evP && (0, i(447576).h)((0, i(974410).f)(e)))) return {
                            toInvite: t,
                            toRequest: []
                        };
                        let n = [],
                            r = [];
                        for (let e of t) {
                            var s;
                            (s = e, i(642157).B2(s.permissionItem) && (0, i(494341).yi)(s.inviteTarget)) ? n.push(e): r.push(e)
                        }
                        return {
                            toInvite: r,
                            toRequest: n
                        }
                    }(p, await n({
                        environment: d,
                        inviteTargets: _,
                        inviteRole: c
                    })),
                    w = {};
                if (p.table === i(832375).evP && I.length > 0) {
                    if (!await s({
                            environment: d,
                            store: p,
                            permissionItems: I.map(e => e.permissionItem),
                            inviteMessage: m.inviteMessage
                        })) return {
                        success: !1
                    };
                    for (let e of I) w[e.inviteTarget.value.email] = e.permissionItem.user_id
                }
                if (0 === h.length) return {
                    success: !0,
                    invitedUsers: {},
                    requestedUsers: w
                };
                let y = h.map(e => e.inviteTarget),
                    S = h.map(e => e.permissionItem),
                    T = await (0, i(628860).B)(d, {
                        name: "guests",
                        spaceId: g,
                        userId: d.currentUser.id,
                        amount: 0
                    });
                if (p.table === i(832375).evP && (0, i(811656).e2)(T) && "unlimited" !== T.limit.total && p.table === i(832375).evP) l = await o({
                    environment: d,
                    store: p,
                    permissionItems: S,
                    invite: m
                });
                else try {
                    await (0, i(646201).J)({
                        environment: d,
                        store: p,
                        sudoModeStore: v,
                        permissionItems: S,
                        invite: m
                    }), l = !0
                } catch (e) {
                    l = !1, u = (0, i(161179).A)(e)
                }
                let A = {
                    collectionId: void 0,
                    ownedCollectionCount: void 0,
                    linkedCollectionCount: void 0,
                    parentCollectionId: void 0
                };
                p.table === i(832375).evP && (A = { ...(0, i(633171).P)(p, {
                        skipPages: !0
                    }),
                    parentCollectionId: p.getParentCollectionIdUpToTwoLevels()
                }), l ? (i(179701).Jg(d, {
                    role: c,
                    is_space: !1,
                    invite_targets: y,
                    is_onboarding: f,
                    invite_origin: m.inviteOrigin,
                    permission_items: S,
                    invite_message_length: (null == (t = m.inviteMessage) ? void 0 : t.length) ? ? 0,
                    invite_flow_id: m.inviteFlowId,
                    isProfessionalTeamUser: (0, i(904434).YD)(),
                    domainType: (0, i(904434).FX)(),
                    share_menu_session_id: i(880853).Ay.state.sessionId,
                    collection_id: A.collectionId,
                    owned_collection_count: A.ownedCollectionCount,
                    linked_collection_count: A.linkedCollectionCount,
                    parent_collection_id: A.parentCollectionId
                }), "transcription_block" === m.inviteOrigin && (0, i(414824).R)({
                    environment: d,
                    data: {
                        type: "track",
                        payload: {
                            event: "transcriptionBlockCalendarParticipantsInvited",
                            numInvited: y.length,
                            notionBlockId: p.id
                        }
                    }
                })) : i(179701).J8({
                    error: u,
                    role: c,
                    is_space: !1,
                    invite_targets: y,
                    is_onboarding: f,
                    invite_origin: m.inviteOrigin,
                    permission_items: S,
                    invite_message_length: (null == (r = m.inviteMessage) ? void 0 : r.length) ? ? 0,
                    invite_flow_id: m.inviteFlowId,
                    isProfessionalTeamUser: (0, i(904434).YD)(),
                    domainType: (0, i(904434).FX)(),
                    share_menu_session_id: i(880853).Ay.state.sessionId,
                    collection_id: A.collectionId,
                    owned_collection_count: A.ownedCollectionCount,
                    linked_collection_count: A.linkedCollectionCount,
                    parent_collection_id: A.parentCollectionId
                }), !f && g && await i(371151).nO({
                    environment: d,
                    spaceStore: {
                        id: g
                    }
                });
                let C = {};
                return y.forEach((e, t) => {
                    var i;
                    let n = S[t];
                    ("newUser" === e.type || "existingUser" === e.type) && null != (i = e.value) && i.email && "user_permission" === n.type && (C[e.value.email] = n.user_id)
                }), l && await a({
                    environment: d,
                    spaceStore: b
                }), {
                    success: l,
                    error: u,
                    invitedUsers: C,
                    requestedUsers: w
                }
            }
            i.d(t, {
                e: () => l
            }), i(944114), i(898992), i(354520), i(672577), i(803949), i(581454)
        },
        179701: (e, t, i) => {
            function n(e) {
                var t;
                let n = e.invite_targets.filter(i(64273).Gz),
                    r = e.invite_targets.filter(i(64273).ju),
                    s = n.length + r.length,
                    a = i(381453).oE(e.permission_items.map(e => {
                        if ("user_permission" === e.type) return e.user_id && (0, i(4962).ot)(e.user_id)
                    })),
                    o = new Set(null == (t = (0, i(328765).S)()) ? void 0 : t.getEmailDomains()),
                    l = e.invite_targets.filter(e => {
                        if ("existingUser" !== e.type && "newUser" !== e.type) return !1;
                        let t = (0, i(801109).zN)(e.value.email);
                        return t && o.has(t)
                    }).flatMap(e => "agent" === e.type ? [] : e.value.id ? [(0, i(4962).ot)(e.value.id)] : []),
                    u = (0, i(216260).AI)(),
                    d = e.invitee_ids_with_internal_domain ? ? [];
                return {
                    role: e.role,
                    user_count: s,
                    new_user_count: n.length,
                    new_workspace_member_count: e.is_space ? s : l.length,
                    new_workspace_member_ids: e.is_space ? a : l,
                    is_onboarding: e.is_onboarding,
                    invite_flow_id: e.invite_flow_id,
                    invite_origin: e.invite_origin,
                    invitee_ids: a,
                    invite_message_length: e.invite_message_length,
                    subscription_tier: u,
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
                    is_internal_domain: d.length > 0,
                    invitee_ids_with_internal_domain: d,
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

            function s(e, t) {
                let r = n(t);
                (0, i(104310).u)({
                    event: {
                        eventName: "invite",
                        eventProperties: { ...r,
                            is_space: t.is_space
                        }
                    }
                });
                let s = (0, i(328765).S)();
                if (!s) return;
                let o = s.id;
                if (i(105692).subscriptionDataStoreInstance.waitUntilLoaded().then(() => {
                        let n = i(105692).subscriptionDataStoreInstance.state,
                            s = n ? (0, i(34504).V)(e, n, o) : void 0,
                            l = n ? (0, i(19676).h)(e, n, o) : void 0;
                        (0, i(104310).u)({
                            event: {
                                eventName: "invite_debug_with_block_usage",
                                eventProperties: { ...r,
                                    is_space: t.is_space,
                                    is_over_block_limit: s,
                                    block_usage: l
                                }
                            }
                        }), t.is_space || (a(e, r), i(287621).xO(e, {
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
                        spaceId: s.id
                    }) ? ? 1;
                    var l, u = e,
                        d = {
                            visibleMembersCount: n,
                            isProfessionalTeamUser: t.isProfessionalTeamUser,
                            domainType: t.domainType
                        };
                    let a = (0, i(216260).AI)();
                    if (d.visibleMembersCount <= 1) {
                        (0, i(195857).DO_NOT_USE_trackLegacy)("workspace_first_invite_sent"), l = {
                            subscriptionTier: a,
                            domainType: d.domainType
                        }, (0, i(378414).W)(u, {
                            event: "workspace_first_invite_sent",
                            data: l
                        }), "professional" === d.domainType && ((0, i(104310).u)({
                            event: {
                                eventName: "professional_workspace_first_invite_sent",
                                eventProperties: {
                                    visible_members_count: d.visibleMembersCount,
                                    is_professional_team_user: d.isProfessionalTeamUser,
                                    domain_type: d.domainType
                                }
                            }
                        }), (0, i(378414).W)(u, {
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
                        let s = Date.now(),
                            a = { ...t,
                                ...r ? {
                                    signup_time_ready: !0,
                                    time_from_signup_to_first_page_invite: r - s
                                } : {
                                    signup_time_ready: !1
                                }
                            };
                        (0, i(104310).u)({
                            event: {
                                eventName: "page_invite_time",
                                eventProperties: a
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
                                        first_page_invite_at: s
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }
                }(e, r))
            }
            async function a(e, t) {
                let n, r = i(728372).AppStoreSidebarSpaceStore.state,
                    s = i(728372).AppStoreCurrentUserStore.state,
                    a = r && r.canEditMembership(),
                    o = i(904434).FX(),
                    l = null == s ? void 0 : s.getEmail();
                if (!a || !o || !l || "professional" !== o) return;
                let u = (0, i(801109).zN)(l);
                if (u) {
                    if (i(908032).i({
                            userId: null == s ? void 0 : s.id,
                            spaceId: r.id,
                            debugFrom: "trackPageInviteGuestSummary"
                        })) {
                        let t = i(218744).default.getConfigKey("email_alias_migration", "mode"),
                            s = await e.api.callApi({
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
                        if ("success" !== s.type) return;
                        n = s.data.users.map(e => e.id)
                    } else {
                        let e = i(105692).subscriptionDataStoreInstance.state;
                        if (!e) return;
                        n = (0, i(883947).o)(e).slice(0, 50).map(e => ({
                            email: i(807825).L.createChildStore(r, {
                                table: i(832375).oo9,
                                id: e.userId
                            }).getEmail(),
                            guestId: e.userId
                        })).filter(e => e.email && (0, i(801109).zN)(e.email) === u).map(e => e.guestId)
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

            function u(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_change_role",
                        eventProperties: e
                    }
                })
            }

            function d(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "abandon_permissions_invite",
                        eventProperties: e
                    }
                })
            }

            function p(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_share_workspace_invite",
                        eventProperties: e
                    }
                })
            }

            function _(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "send_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function c(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "send_membership_request",
                        eventProperties: e
                    }
                })
            }

            function m(e) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("send_guest_request", e)
            }

            function v(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "skip_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function f(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_page_share_invite",
                        eventProperties: e
                    }
                })
            }

            function g() {
                (0, i(104310).u)({
                    event: {
                        eventName: "open_space_invite",
                        eventProperties: {}
                    }
                })
            }

            function b(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_modal_input_focus",
                        eventProperties: e
                    }
                })
            }

            function h(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_users_to_page",
                        eventProperties: e
                    }
                }), i(707964).u4({
                    name: "invite_users_to_page"
                })
            }

            function I(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "internal_domain_enforced",
                        eventProperties: e
                    }
                })
            }

            function w() {
                (0, i(104310).u)({
                    event: {
                        eventName: "workspace_over_guest_limit",
                        eventProperties: {}
                    }
                })
            }

            function y(e) {
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
                iv: () => d,
                _u: () => _,
                Jg: () => s,
                J8: () => r,
                hp: () => I,
                Jy: () => u,
                Wd: () => b,
                kH: () => l,
                D2: () => o,
                R2: () => h,
                vX: () => y,
                F1: () => f,
                bT: () => p,
                VV: () => g,
                xF: () => m,
                RH: () => c,
                UC: () => S,
                l8: () => v,
                ig: () => w
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670), i(581454)
        },
        189684: (e, t, i) => {
            function n(e) {
                return e.replaceAll(/(<([^>]+)>)/gi, "").trim()
            }

            function r(e, t = 140) {
                if (e.length <= t) return e;
                let i = e.substring(0, t).trim(),
                    n = i.split(" ");
                return n.length > 1 && " " !== i.charAt(i.length - 1) ? (n.pop(), `${n.map(e=>e.trim()).join(" ")}...`) : `${i.substring(0,t-3)}...`
            }

            function s(e) {
                return /[\"\']/.test(e)
            }
            i.d(t, {
                Kq: () => n,
                vo: () => s,
                xv: () => r
            }), i(898992), i(354520), i(581454)
        },
        215813: (e, t, i) => {
            i.d(t, {
                E: () => a
            }), i(944114);
            var n = () => i(517013),
                r = () => i(832375),
                s = () => i(173157);

            function a(e) {
                var t;
                let {
                    environment: a,
                    store: o,
                    permissionItems: l,
                    transaction: u,
                    inviteFlowId: d,
                    inviteMessage: p,
                    inviteOrigin: _,
                    disable_invite_email: c
                } = e, m = o.getSpaceId() || (o.table === r().NXh ? o.id : null == (t = (0, i(974410).f)(o)) ? void 0 : t.id), {
                    id: v
                } = a.currentUser;
                for (let e of l)
                    if (m && "user_permission" === e.type && e.invite_id) {
                        if (o.table === r().C0E) continue;
                        let {
                            inviteeId: t,
                            inviteeTable: a
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
                            spaceId: m
                        }), l = {
                            id: e.invite_id,
                            version: 1,
                            flow_id: d,
                            space_id: m,
                            target_id: o.id,
                            target_table: o.table,
                            inviter_id: v,
                            inviter_table: r().oo9,
                            invitee_id: t,
                            invitee_table_or_group: a,
                            message: p,
                            created_time: Date.now(),
                            attributes: {
                                permission: e,
                                origin_type: _,
                                disable_invite_email: c
                            }
                        };
                        (0, s().z)({
                            store: (0, n().v3)(o, {
                                table: "invite",
                                id: l.id,
                                spaceId: m
                            }),
                            data: l,
                            transaction: u
                        })
                    }
                return u.postSubmitCallbacks.push(e => {
                    i(179701).R2({
                        status: e ? "fail" : "success",
                        origin: _
                    })
                }), !0
            }
        },
        378880: (e, t, i) => {
            i.d(t, {
                J: () => n
            });
            async function n(e, t) {
                let n = (0, i(599412).H)(i(962299).A.getIntl()),
                    r = t.value.email,
                    s = await e.api.callApi({
                        eventName: "createEmailUser",
                        environment: e,
                        data: {
                            email: r,
                            preferredLocaleOrigin: "inferred_from_inviter",
                            preferredLocale: n
                        }
                    });
                if ("failed" !== s.type) return s.data.userId;
                if ((0, i(101787).op4)(s.error)) {
                    let e = (0, i(416207).D)(i(962299).A.getIntl(), s.error);
                    e ? i(647095).f1(e) : i(647095).c1(s.error.message)
                } else i(647095).c1(s.error.message);
                throw s.error
            }
        },
        447576: (e, t, i) => {
            i.d(t, {
                h: () => n
            });

            function n(e) {
                return !!(0, i(575190).r)(e) && !(null == e ? void 0 : e.canAdmin())
            }
        },
        494341: (e, t, i) => {
            i.d(t, {
                Es: () => o,
                GZ: () => l,
                LH: () => p,
                Sk: () => u,
                VF: () => a,
                Y5: () => m,
                c3: () => b,
                dV: () => v,
                iQ: () => r,
                mQ: () => s,
                oX: () => c,
                qv: () => g,
                vP: () => h,
                wF: () => d,
                yi: () => f
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(803949), i(581454), i(737550), i(296540);
            var n = i(474848);
            async function r({
                environment: e,
                permissionsInviteStoreState: t,
                from: s,
                spaceStore: a
            }) {
                let o = (0, n.jsx)(i(109939).sA, {
                        id: "permissionsInvite.closeInviteDialog.confirmationMessage",
                        defaultMessage: "Your changes have not been saved. Discard changes?"
                    }),
                    l = (0, n.jsx)(i(109939).sA, {
                        id: "permissionsInvite.closeInviteDialog.confirmationButton.label",
                        defaultMessage: "Yes"
                    }),
                    u = (0, n.jsx)(i(109939).sA, {
                        id: "permissionsInvite.closeInviteDialog.cancelButton.label",
                        defaultMessage: "Cancel"
                    });
                if (t.inviteTargets.length > 0) {
                    let {
                        accept: n
                    } = await i(647095).Gh({
                        message: o,
                        acceptLabel: l,
                        cancelLabel: u
                    });
                    return i(179701).iv({ ...c(e, t, a),
                        from: s,
                        discard_changes: n
                    }), !n
                }
                return !1
            }

            function s(e) {
                let {
                    target: t,
                    permissionsInviteStore: i
                } = e;
                return i.state.inviteTargets.find(e => "newUser" === t.type ? "newUser" === e.type && t.value.email === e.value.email : "group" === t.type ? e.type === t.type && e.value.group_id === t.value.group_id : "agent" === t.type ? e.type === t.type && e.value.workflowId === t.value.workflowId : e.type === t.type && e.value.id === t.value.id)
            }

            function a(e) {
                let {
                    targetStore: t,
                    permissionsInviteStore: i,
                    userTarget: n
                } = e;
                return !!s({
                    permissionsInviteStore: i,
                    target: n
                }) || "existingUser" === n.type && d({
                    target: n,
                    store: t
                })
            }

            function o(e) {
                var t;
                let {
                    targetStore: n,
                    permissionsInviteStore: r,
                    currentInviteActors: o
                } = e;
                if (!o) return {
                    inviteUsers: [],
                    inviteGroups: []
                };
                if ((0, i(966980).nw)(n)) return o;
                let l = o.inviteUsers.filter(e => !a({
                    targetStore: n,
                    permissionsInviteStore: r,
                    userTarget: e
                }));
                return {
                    inviteGroups: o.inviteGroups.filter(e => !s({
                        permissionsInviteStore: r,
                        target: e
                    }) && !d({
                        target: e,
                        store: n
                    })),
                    inviteUsers: l,
                    inviteAgents: null == (t = o.inviteAgents) ? void 0 : t.filter(e => !s({
                        permissionsInviteStore: r,
                        target: e
                    }) && !d({
                        target: e,
                        store: n
                    })),
                    importedContacts: o.importedContacts
                }
            }

            function l(e, t) {
                if (!e || !t || 0 === e.length || 0 === t.length) return t;
                let i = new Set(e.map(e => e.value.email.toLowerCase()));
                return t.filter(e => !i.has(e.value.email.toLowerCase()))
            }

            function u(e) {
                let {
                    intl: t,
                    target: n
                } = e;
                switch (n.type) {
                    case "newUser":
                        return n.value.email;
                    case "existingUser":
                        return (0, i(413818).c6)(t, n.value);
                    case "group":
                        return (0, i(405461).Pf)({
                            intl: t,
                            groupName: n.value.name
                        });
                    case "agent":
                        return n.value.name;
                    default:
                        (0, i(722371).HB)(n)
                }
            }

            function d(e) {
                let {
                    target: t,
                    store: n
                } = e;
                if (!n.isDefined()) return !1;
                if ((0, i(966980).$R)(n)) {
                    let e = t.type;
                    return "existingUser" === e ? !!(0, i(887652).p)({
                        teamStore: n,
                        userId: t.value.id
                    }) : "group" === e && (0, i(175110).J)({
                        teamStore: n,
                        groupId: t.value.group_id
                    })
                }
                if (n instanceof i(970831).B || n instanceof i(356912).m || n instanceof i(360851).N) switch (t.type) {
                    case "existingUser":
                        return n.getPermissionItems().some(e => (0, i(642157).B2)(e) && e.user_id === t.value.id);
                    case "group":
                        return n.getPermissionItems().some(e => (0, i(642157).Ds)(e) && e.group_id === t.value.group_id);
                    case "agent":
                        return function(e) {
                            let {
                                store: t,
                                botId: n
                            } = e;
                            return t.getPermissionItems().some(e => (0, i(642157).P3)(e) && e.bot_id === n && "none" !== e.role && !e.access_revoked)
                        }({
                            store: n,
                            botId: t.value.botId
                        });
                    case "newUser":
                        return !1;
                    default:
                        return (0, i(722371).HB)(t)
                }
                if (n instanceof i(695906).SpaceStore)
                    if ("existingUser" === t.type) return !!(0, i(993077).dp)(n, t.value.id).isMember();
                    else return !1;
                if ((0, i(966980).nw)(n)) return !1;
                (0, i(722371).HB)(n)
            }

            function p(e) {
                let {
                    environment: t,
                    permissionsInviteStore: n,
                    store: r,
                    renderInShareModal: s
                } = e;
                if ((0, i(966980).Yu)(r)) {
                    let t = _({ ...e,
                        store: r
                    });
                    n.setState({
                        modalOpen: !s,
                        tokenQuery: "",
                        inviteTargets: [],
                        inviteRole: t,
                        table: i(832375).NXh,
                        flowId: i(92513).JW(),
                        inputFocus: "invitee",
                        emailMessage: ""
                    }), i(179701).VV()
                } else {
                    let a = _({ ...e,
                        store: r
                    });
                    n.setState({
                        modalOpen: !s,
                        tokenQuery: "",
                        inviteTargets: [],
                        inviteRole: a,
                        table: r.table,
                        flowId: i(92513).JW(),
                        inputFocus: "invitee",
                        emailMessage: ""
                    }), i(179701).F1({ ...c(t, e.permissionsInviteStore.state, (0, i(974410).f)(r))
                    })
                }
            }

            function _(e) {
                let {
                    store: t,
                    isSubscribed: n
                } = e;
                return (0, i(966980).Yu)(t) ? n ? "member" : "owner" : (0, i(216260).El)() ? "editor" : "read_and_write"
            }

            function c(e, t, n) {
                let {
                    inviteRole: r,
                    flowId: s
                } = t, a = (0, i(330870).a)(), o = null == a ? void 0 : a.getRole(), l = null == n ? void 0 : n.getRole(), {
                    inviteTargets: u,
                    emailMessage: d
                } = t, p = (0, i(216260).AI)(), _ = {
                    invite_flow_id: s,
                    user_count: 0,
                    is_bot: !1,
                    invite_message_length: (null == d ? void 0 : d.length) ? ? 0,
                    ...o && {
                        page_current_user_role: o
                    },
                    ...l && {
                        space_role: l
                    },
                    ...p && {
                        subscription_tier: p
                    }
                };
                if (0 === u.length) return _;
                let c = u.filter(i(64273).Gz).length,
                    v = u.filter(i(64273).ju).length + c,
                    f = m(r);
                return { ..._,
                    role: f,
                    user_count: v,
                    new_user_count: c
                }
            }

            function m(e) {
                return (0, i(729052).kI)(e) ? (0, i(729052).ps)(e) : e
            }

            function v(e) {
                if ("group" === e.type) {
                    let t = e.value.getGroupId(),
                        n = i(801062).h.getGroupData(t);
                    if (n) return n.membershipTypes.includes("restricted_member")
                }
                return "existingUser" === e.type && "restricted_member" === e.membershipType
            }

            function f(e) {
                return "newUser" === e.type || "existingUser" === e.type && ("page_guest" === e.membershipType || "none" === e.membershipType)
            }

            function g(e) {
                return f(e) ? "rgba(246, 192, 80, 0.26)" : void 0
            }

            function b(e) {
                var t;
                let r, s, {
                    inviteTargets: a,
                    recordStore: o,
                    canEditSpaceMembership: l
                } = e;
                if (0 === a.length || !o) return null;
                let {
                    inviteTargetGuests: d,
                    inviteTargetMembers: p
                } = (r = [], s = [], a.forEach(e => {
                    f(e) ? r.push(e) : s.push(e)
                }), {
                    inviteTargetGuests: r,
                    inviteTargetMembers: s
                }), _ = l ? [...p, ...d] : p, c = l ? [] : d, m = i(962299).A.getIntl(), v = (0, i(966980)._p)(o) ? null == (t = o.getBlockTitleStore()) ? void 0 : t.getValue() : o.getName();
                return l || 0 === c.length ? (0, n.jsx)(i(109939).sA, {
                    id: "permissionsInvite.inviteConfirmationToast.usersAddedMessage",
                    defaultMessage: "{numberOfTargets, plural, one {Added {targetName} to {recordName}} other {Added {numberOfTargets} people to {recordName}}}",
                    values: {
                        numberOfTargets: _.length,
                        targetName: u({
                            intl: m,
                            target: _[0]
                        }),
                        recordName: v
                    }
                }) : 0 === _.length ? (0, n.jsx)(i(109939).sA, {
                    id: "permissionsInvite.inviteConfirmationToast.inviteRequestedMessage",
                    defaultMessage: "{numberOfTargets, plural, one {Requested {targetName} for approval} other {Requested {numberOfTargets} invites for approval}}",
                    values: {
                        numberOfTargets: c.length,
                        targetName: u({
                            intl: m,
                            target: c[0]
                        })
                    }
                }) : (0, n.jsx)(i(109939).sA, {
                    id: "permissionsInvite.inviteConfirmationToast.userAddedAndRequestedText",
                    defaultMessage: "{numberOfAddedTargets, plural, one {Added {addedTargetName}} other {Added {numberOfAddedTargets} people}} & {numberOfRequestedTargets, plural, one {requested {requestedTargetName} for approval} other {requested {numberOfRequestedTargets} people for approval}}",
                    values: {
                        numberOfAddedTargets: _.length,
                        addedTargetName: u({
                            intl: m,
                            target: _[0]
                        }),
                        numberOfRequestedTargets: c.length,
                        requestedTargetName: u({
                            intl: m,
                            target: c[0]
                        })
                    }
                })
            }

            function h(e) {
                let t = i(728372).AppStoreSidebarSpaceStore.state;
                if ("existingUser" !== e.type) return "none";
                let n = (0, i(993077).sE)(t, e.value.id);
                return (null == n ? void 0 : n.getMembershipType()) ? ? "none"
            }
        },
        521469: (e, t, i) => {
            function n(e) {
                switch (e) {
                    case "plus":
                        return "plus_expansion_offer";
                    case "business":
                        return "business_expansion_offer";
                    default:
                        return
                }
            }

            function r(e, t) {
                if ("plus" === e) {
                    if ("one_member" === t) return "plus_expansion_one_member";
                    if ("two_member" === t) return "plus_expansion_two_member"
                }
                if ("business" === e) {
                    if ("one_member" === t) return "business_expansion_one_member";
                    if ("two_member" === t) return "business_expansion_two_member"
                }
            }

            function s(e) {
                switch (e) {
                    case "plus_expansion_one_member":
                    case "business_expansion_one_member":
                        return 1;
                    case "plus_expansion_two_member":
                    case "business_expansion_two_member":
                        return 2;
                    default:
                        return 3
                }
            }

            function a(e, t) {
                if (!e) return !1;
                let i = o(e, t);
                return !!i && (i.membersAdded ? ? 0) >= s(t)
            }

            function o(e, t) {
                var i;
                if (e) return null == e || null == (i = e.getSettings()) || null == (i = i.offer_member_count) ? void 0 : i.find(e => e.campaign === t)
            }
            i.d(t, {
                $E: () => r,
                UB: () => n,
                Zy: () => s,
                _w: () => o,
                fd: () => a
            }), i(898992), i(672577)
        },
        575190: (e, t, i) => {
            i.d(t, {
                r: () => n
            });

            function n(e) {
                return null == e ? void 0 : e.getEnableGuestInviteRequest()
            }
        },
        646201: (e, t, i) => {
            i.d(t, {
                J: () => n
            }), i(581454);
            async function n(e) {
                var t;
                let {
                    environment: n,
                    store: r,
                    sudoModeStore: s,
                    permissionItems: a,
                    invite: o,
                    skipGuestLimitValidation: l
                } = e, u = r.getSpaceId() ? ? (null == (t = (0, i(974410).f)(r)) ? void 0 : t.id), d = (0, i(295447).Gx)({
                    environment: n,
                    spaceId: u
                }), p = u ? n.idCreator.getSpaceShortIdCreator(u, d) : void 0, {
                    serverCommitResult: _
                } = (0, i(377796).createAndCommit)({
                    userAction: "permissionsActions.savePermissionItems",
                    environment: n,
                    canUndo: !0,
                    useSudoMode: (r.table === i(832375).evP || r.table === i(832375).C0E) && (null == s ? void 0 : s.shouldSaveTransactionWithSudoMode(r)),
                    cellTarget: "main",
                    perform: e => {
                        let t = a.map(e => "user_permission" !== e.type ? e : { ...e,
                                invite_id: (null == p ? void 0 : p.idInSavedSpace(i(832375).Yxt)) || i(92513).JW()
                            }),
                            {
                                inviteFlowId: s,
                                inviteMessage: u,
                                inviteOrigin: d,
                                disable_invite_email: _
                            } = o;
                        (0, i(215813).E)({
                            environment: n,
                            store: r,
                            permissionItems: t,
                            transaction: e,
                            inviteFlowId: s,
                            inviteMessage: (0, i(765898).Hb)(u),
                            inviteOrigin: d,
                            disable_invite_email: _
                        }), r instanceof i(681735).h ? (0, i(779437).b)({
                            environment: n,
                            store: r,
                            permissionItems: t,
                            transaction: e,
                            from: d,
                            skipGuestLimitValidation: l
                        }) : r.table === i(832375).evP ? (0, i(176609).z)({
                            environment: n,
                            store: r,
                            permissionItems: t,
                            transaction: e,
                            from: d,
                            skipGuestLimitValidation: l
                        }) : r.table === i(832375).C0E && (0, i(481090).w)({
                            environment: n,
                            store: r,
                            permissionItems: t,
                            transaction: e,
                            from: d,
                            skipGuestLimitValidation: l
                        })
                    }
                });
                await _
            }
        },
        765898: (e, t, i) => {
            i.d(t, {
                BS: () => o,
                CO: () => r,
                Hb: () => a,
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
            let s = /@0x[0-9a-fA-F]+/g;

            function a(e, t = 1e3) {
                let n, r;
                if (!e) return "";
                let o = (n = (0, i(189684).Kq)(e), r = "[link]", n = n.replaceAll(s, r), i(159523).I6(n, "url").forEach(e => {
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
        779437: (e, t, i) => {
            i.d(t, {
                b: () => n
            });

            function n(e) {
                return (0, i(481090).w)(e)
            }
        },
        832799: (e, t, i) => {
            async function n(e) {
                var t;
                let {
                    environment: n,
                    campaign: r,
                    initialMemberCount: s
                } = e, a = (0, i(328765).S)();
                if (!a || (null == (t = a.getSettings().offer_member_count) || null == (t = t.find(e => e.campaign === r)) ? void 0 : t.initialCount)) return;
                let o = a.getSpaceId(),
                    {
                        serverCommitResult: l
                    } = (0, i(377796).createAndCommit)({
                        environment: n,
                        userAction: "offerActions.addOfferInitialMemberCount",
                        canUndo: !0,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: e => {
                            (0, i(173157).z)({
                                store: a,
                                data: {
                                    settings: { ...a.getSettings(),
                                        offer_member_count: [...a.getSettings().offer_member_count ? ? [], {
                                            campaign: r,
                                            initialCount: s,
                                            initialTimestamp: Date.now()
                                        }]
                                    }
                                },
                                transaction: e
                            })
                        }
                    });
                try {
                    await l
                } catch (e) {
                    (0, i(222024).t)().error({
                        from: "expansionOfferActions",
                        type: "addOfferInitialMemberCountFailed",
                        error: e
                    })
                }
            }
            async function r(e, t) {
                let n = (0, i(328765).S)();
                if (!n) return "failed";
                let r = n.getSettings().offer_member_count;
                if (!(null != r && r.find(e => e.campaign === t))) return "failed";
                let s = (0, i(616579).j)({
                    environment: e,
                    spaceId: n.getSpaceId()
                });
                if (void 0 === s) return (0, i(222024).t)().log({
                    level: "error",
                    from: "expansionOfferActions",
                    type: "currentMemberCountNotFound",
                    spaceId: n.getSpaceId()
                }), "failed";
                let a = r.map(e => e.campaign === t ? { ...e,
                        membersAdded: Math.max(s - (e.initialCount ? ? 0), 0)
                    } : e),
                    o = n.getSpaceId(),
                    {
                        serverCommitResult: l
                    } = (0, i(377796).createAndCommit)({
                        environment: e,
                        userAction: "offerActions.updateOfferMembersAdded",
                        canUndo: !0,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: e => {
                            (0, i(173157).z)({
                                store: n,
                                data: {
                                    settings: { ...n.getSettings(),
                                        offer_member_count: a
                                    }
                                },
                                transaction: e
                            })
                        }
                    });
                try {
                    await l
                } catch (e) {
                    return (0, i(222024).t)().error({
                        from: "expansionOfferActions",
                        type: "updateOfferMembersAddedFailed",
                        error: e
                    }), "failed"
                }
                return await i(617995).I.resetData(e, {
                    spaceId: o,
                    offerCampaign: t
                }), "success"
            }

            function s(e, t, r = "expansion_offer") {
                n({
                        environment: e,
                        campaign: r,
                        initialMemberCount: t
                    }),
                    function(e) {
                        let t = (0, i(328765).S)();
                        if (!t || t.getSettings().seen_expansion_offer) return;
                        let n = t.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            environment: e,
                            userAction: "offerActions.setSeenExpansionOffer",
                            canUndo: !0,
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            perform: e => {
                                (0, i(173157).z)({
                                    store: t,
                                    data: {
                                        settings: { ...t.getSettings(),
                                            seen_expansion_offer: !0
                                        }
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }(e)
            }
            i.d(t, {
                Ho: () => n,
                Ni: () => r,
                Pp: () => s
            }), i(898992), i(672577), i(581454)
        },
        883947: (e, t, i) => {
            i.d(t, {
                o: () => n
            }), i(898992), i(354520);

            function n(e) {
                return (0, i(576968).B)(e).filter(i(573143).QE)
            }
        },
        887652: (e, t, i) => {
            function n(e) {
                let {
                    teamStore: t,
                    userId: i
                } = e;
                return function(e) {
                    let {
                        rawMembership: t,
                        userId: i
                    } = e;
                    return t.find(e => "user" === e.entity_type && e.user_id === i && "none" !== e.type)
                }({
                    rawMembership: t.getRawMembership(),
                    userId: i
                })
            }
            i.d(t, {
                p: () => n
            }), i(898992), i(672577)
        }
    }
]);