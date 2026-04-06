"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [43239, 74936], {
        13717: (e, t, i) => {
            function n(e) {
                let {
                    spaceStore: t,
                    groupId: n
                } = e;
                return i(398652).C.createChildStore(t, (0, i(659341).S4)({
                    spacePermissionGroupId: n,
                    spaceId: t.id
                }))
            }

            function a(e) {
                let {
                    spaceStore: t,
                    groupId: n,
                    userId: a
                } = e;
                return i(291886).m.createChildStore(t, (0, i(867863).BZ)({
                    spacePermissionGroupId: n,
                    spaceId: t.id,
                    userId: a
                }))
            }
            i.d(t, {
                A: () => a,
                E: () => n
            })
        },
        66833: (e, t, i) => {
            i.d(t, {
                E: () => n
            });

            function n({
                sidebarSpaceStore: e,
                sidebarSpaceViewStore: t
            }) {
                let a = (0, i(533992).v3)(),
                    {
                        isEligibleForGuestMembershipRequest: s,
                        isEligibleForGuestMembershipRequestStatus: r
                    } = (0, i(454122).X)({
                        sidebarSpaceStore: e,
                        environment: a
                    }),
                    o = (0, i(682985).K8)(() => {
                        var t;
                        let n = null == (t = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.guest_sidebar_membership_request_popup_dismissed;
                        return !!e && !!(null == n ? void 0 : n.includes(e.id))
                    }, [e]),
                    l = (0, i(682985).K8)(() => {
                        var e;
                        return (null == (e = i(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getGuestExperience()) === "guest_with_private_pages"
                    }, []),
                    d = (0, i(682985).K8)(() => {
                        var n;
                        return !!(!(0, i(916804).I)(e) || (0, i(494144).o)(t)) || null != (n = i(686494).A.state.publicPageData) && !!n.isDLSViewer || !!o || (0, i(505941).y)(a)
                    }, [o, a, t, e]),
                    [{
                        value: c
                    }] = (0, i(417066).P)({
                        environment: a,
                        skipServerFetch: d
                    }),
                    u = !!(null == c ? void 0 : c.hasJoinableSpaces);
                return (0, i(682985).K8)(() => {
                    if ("pending" === r || d) return {
                        state: null
                    };
                    let e = i(986939).A.isMobile ? "on" === i(218744).default.getEligibleGroup({
                        experimentId: "guest_upsell_banner_mobile_experiment",
                        defaultGroup: "control"
                    }) ? "gray" : "control" : i(218744).default.getEligibleGroup({
                        experimentId: "guest_upsell_banner_experiment",
                        defaultGroup: "control"
                    });
                    return {
                        state: {
                            membershipRequest: function({
                                isGuestWithPrivatePages: e,
                                isEligibleForGuestMembershipRequest: t
                            }) {
                                return e ? "pending_request" : t ? "can_request" : "cannot_request"
                            }({
                                isGuestWithPrivatePages: l,
                                isEligibleForGuestMembershipRequest: !!s
                            }),
                            hasJoinableSpaces: u,
                            experimentVariant: e
                        }
                    }
                }, [d, s, u, l, r])
            }
        },
        85071: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                integrationIcon: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, i(104509).wt)("integration", n, "default")
        },
        97010: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                templatesIcon: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.62 15.84 14.75",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.682 5.716V4.182c0-.858.7-1.557 1.557-1.557h5.823c.858 0 1.557.7 1.557 1.557v5.59a1.56 1.56 0 0 1-1.093 1.486l2.185 3.786c.589 1.038-.154 2.331-1.354 2.331H9.38c-1.138 0-1.895-1.18-1.421-2.201q-.513.113-1.057.114a4.81 4.81 0 0 1-4.818-4.818 4.812 4.812 0 0 1 5.6-4.754M9.24 3.875a.31.31 0 0 0-.307.307v5.6a.3.3 0 0 0 .298.296h1.66l.622-1.075a.6.6 0 0 1 .073-.103 1.56 1.56 0 0 1 2.638.1l.002.003.62 1.075h.217a.31.31 0 0 0 .307-.306v-5.59a.31.31 0 0 0-.307-.307zm-.01 7.453a1.55 1.55 0 0 1-1.547-1.547V6.99a3.562 3.562 0 0 0-4.35 3.481 3.56 3.56 0 0 0 3.569 3.568 3.54 3.54 0 0 0 2.09-.669l1.178-2.04zm3.914-1.7a.31.31 0 0 0-.54.002 1 1 0 0 1-.057.08L9.11 15.665l-.001.002a.306.306 0 0 0 .27.458h6.978a.31.31 0 0 0 .268-.463z"
                    })
                },
                a = (0, i(104509).wt)("templates", n, "default")
        },
        133144: (e, t, i) => {
            i.d(t, {
                s: () => n
            });

            function n({
                shouldRedirectForExistingUsersOnly: e
            }) {
                (0, i(533992).v3)();
                let t = (0, i(682985).K8)(() => {
                    let e = i(728372).AppStoreMainEditorCurrentBlockStore.state;
                    if (e) return (0, i(483227).J8)({
                        store: e,
                        pageVisitSource: i(254656).y8.PublicShareLink
                    })
                }, []);
                return n => {
                    (0, i(104310).u)({
                        event: {
                            eventName: "click_sharing_signup",
                            eventProperties: {
                                from: n
                            }
                        }
                    }), t && (0, i(13565).wA)({
                        url: t,
                        shouldRedirectForExistingUsersOnly: e
                    }), i(922913).publicShareLinkLoginModalStore.setState({
                        open: !0
                    })
                }
            }
        },
        159899: (e, t, i) => {
            i.d(t, {
                DH: () => a
            });
            let n = ["trial_from_perf_marketing", "onboarding_reverse_trial", "mp_reverse_trial", "feature_upsell_reverse_trial", "admin_trial"];

            function a(e) {
                return n.includes(e) || i(994234).FN.includes(e)
            }[...n]
        },
        179701: (e, t, i) => {
            function n(e) {
                var t;
                let n = e.invite_targets.filter(i(64273).Gz),
                    a = e.invite_targets.filter(i(64273).ju),
                    s = n.length + a.length,
                    r = i(381453).oE(e.permission_items.map(e => {
                        if ("user_permission" === e.type) return e.user_id && (0, i(4962).ot)(e.user_id)
                    })),
                    o = new Set(null == (t = (0, i(328765).S)()) ? void 0 : t.getEmailDomains()),
                    l = e.invite_targets.filter(e => {
                        if ("existingUser" !== e.type && "newUser" !== e.type) return !1;
                        let t = (0, i(801109).zN)(e.value.email);
                        return t && o.has(t)
                    }).flatMap(e => "agent" === e.type ? [] : e.value.id ? [(0, i(4962).ot)(e.value.id)] : []),
                    d = (0, i(216260).AI)(),
                    c = e.invitee_ids_with_internal_domain ? ? [];
                return {
                    role: e.role,
                    user_count: s,
                    new_user_count: n.length,
                    new_workspace_member_count: e.is_space ? s : l.length,
                    new_workspace_member_ids: e.is_space ? r : l,
                    is_onboarding: e.is_onboarding,
                    invite_flow_id: e.invite_flow_id,
                    invite_origin: e.invite_origin,
                    invitee_ids: r,
                    invite_message_length: e.invite_message_length,
                    subscription_tier: d,
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
                    is_internal_domain: c.length > 0,
                    invitee_ids_with_internal_domain: c,
                    invitee_ids_with_internal_domain_enforced: e.invitee_ids_with_internal_domain_enforced
                }
            }

            function a(e) {
                let t = n(e);
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_error",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                let a = n(t);
                (0, i(104310).u)({
                    event: {
                        eventName: "invite",
                        eventProperties: { ...a,
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
                                eventProperties: { ...a,
                                    is_space: t.is_space,
                                    is_over_block_limit: s,
                                    block_usage: l
                                }
                            }
                        }), t.is_space || (r(e, a), i(287621).xO(e, {
                            inviteTargets: t.invite_targets,
                            origin: t.invite_origin
                        }))
                    }), t.is_space || a.allow_domain_auto_invite) {
                    (0, i(104310).u)({
                        event: {
                            eventName: "space_invite",
                            eventProperties: a
                        }
                    }), (0, i(772208).M)(e, {
                        space_invited: !0
                    }), i(287621).KX(e, {
                        invite_origin: t.invite_origin,
                        domainType: t.domainType,
                        new_workspace_member_count: a.new_workspace_member_count,
                        new_workspace_member_ids: a.new_workspace_member_ids,
                        allow_domain_auto_invite: a.allow_domain_auto_invite
                    });
                    let n = (0, i(616579).j)({
                        environment: e,
                        spaceId: s.id
                    }) ? ? 1;
                    var l, d = e,
                        c = {
                            visibleMembersCount: n,
                            isProfessionalTeamUser: t.isProfessionalTeamUser,
                            domainType: t.domainType
                        };
                    let r = (0, i(216260).AI)();
                    if (c.visibleMembersCount <= 1) {
                        (0, i(195857).DO_NOT_USE_trackLegacy)("workspace_first_invite_sent"), l = {
                            subscriptionTier: r,
                            domainType: c.domainType
                        }, (0, i(378414).W)(d, {
                            event: "workspace_first_invite_sent",
                            data: l
                        }), "professional" === c.domainType && ((0, i(104310).u)({
                            event: {
                                eventName: "professional_workspace_first_invite_sent",
                                eventProperties: {
                                    visible_members_count: c.visibleMembersCount,
                                    is_professional_team_user: c.isProfessionalTeamUser,
                                    domain_type: c.domainType
                                }
                            }
                        }), (0, i(378414).W)(d, {
                            event: "professional_workspace_first_invite_sent"
                        }))
                    }
                }
                t.is_space || a.new_workspace_member_ids.length === t.invite_targets.length || ((0, i(104310).u)({
                    event: {
                        eventName: "page_invite",
                        eventProperties: a
                    }
                }), function(e, t) {
                    let n = i(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!n) return;
                    let a = n.getKeyStore("settings").getKeyStore("signup_time").getValue();
                    if (!n.getKeyStore("settings").getKeyStore("first_page_invite_at").getValue()) {
                        let s = Date.now(),
                            r = { ...t,
                                ...a ? {
                                    signup_time_ready: !0,
                                    time_from_signup_to_first_page_invite: a - s
                                } : {
                                    signup_time_ready: !1
                                }
                            };
                        (0, i(104310).u)({
                            event: {
                                eventName: "page_invite_time",
                                eventProperties: r
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
                }(e, a))
            }
            async function r(e, t) {
                let n, a = i(728372).AppStoreSidebarSpaceStore.state,
                    s = i(728372).AppStoreCurrentUserStore.state,
                    r = a && a.canEditMembership(),
                    o = i(904434).FX(),
                    l = null == s ? void 0 : s.getEmail();
                if (!r || !o || !l || "professional" !== o) return;
                let d = (0, i(801109).zN)(l);
                if (d) {
                    if (i(908032).i({
                            userId: null == s ? void 0 : s.id,
                            spaceId: a.id,
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
                                    spaceId: a.id,
                                    includeAliasSearch: (0, i(485477).K)(t)
                                }
                            });
                        if ("success" !== s.type) return;
                        n = s.data.users.map(e => e.id)
                    } else {
                        let e = i(105692).subscriptionDataStoreInstance.state;
                        if (!e) return;
                        n = (0, i(883947).o)(e).slice(0, 50).map(e => ({
                            email: i(807825).L.createChildStore(a, {
                                table: i(832375).oo9,
                                id: e.userId
                            }).getEmail(),
                            guestId: e.userId
                        })).filter(e => e.email && (0, i(801109).zN)(e.email) === d).map(e => e.guestId)
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

            function d(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_change_role",
                        eventProperties: e
                    }
                })
            }

            function c(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "abandon_permissions_invite",
                        eventProperties: e
                    }
                })
            }

            function u(e) {
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

            function b(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "invite_users_to_page",
                        eventProperties: e
                    }
                }), i(707964).u4({
                    name: "invite_users_to_page"
                })
            }

            function S(e) {
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

            function A(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "share_menu_invite_display_mode_change",
                        eventProperties: e
                    }
                })
            }
            i.d(t, {
                iv: () => c,
                _u: () => p,
                Jg: () => s,
                J8: () => a,
                hp: () => S,
                Jy: () => d,
                Wd: () => h,
                kH: () => l,
                D2: () => o,
                R2: () => b,
                vX: () => y,
                F1: () => g,
                bT: () => u,
                VV: () => f,
                xF: () => m,
                RH: () => _,
                UC: () => A,
                l8: () => v,
                ig: () => w
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(430670), i(581454)
        },
        187041: (e, t, i) => {
            i.d(t, {
                g: () => n
            });

            function n({
                spaceId: e
            }) {
                let t = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => {
                    if (e) return i(185995).default.getData(t, {
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        194913: (e, t, i) => {
            i.d(t, {
                G: () => n
            });

            function n(e) {
                var t;
                let {
                    environment: n,
                    userSettingsStore: a,
                    spaceId: s,
                    isEligibleForGuestMembershipRequest: r,
                    hasJoinableSpaces: o,
                    userAction: l,
                    experimentVariant: d
                } = e;
                (0, i(104310).u)({
                    event: {
                        eventName: "guest_membership_popup_dismissed",
                        eventProperties: {
                            request_membership: r,
                            create_workspace: !o,
                            create_or_join_workspace: o,
                            experiment_variant: d,
                            ui_type: "control" === d ? "footer" : "banner"
                        }
                    }
                });
                let c = ((null == (t = a.getSettings()) ? void 0 : t.guest_sidebar_membership_request_popup_dismissed) || []).concat(s);
                (0, i(377796).createAndCommit)({
                    environment: n,
                    userAction: l,
                    canUndo: !1,
                    cellTarget: "main",
                    perform: e => {
                        (0, i(173157).z)({
                            store: a,
                            data: {
                                settings: { ...a.getSettings(),
                                    guest_sidebar_membership_request_popup_dismissed: c
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }
        },
        199894: (e, t, i) => {
            i.d(t, {
                t: () => n
            }), i(16280), i(898992), i(672577), i(581454);

            function n(e) {
                let {
                    environment: t,
                    selection: n,
                    transaction: a,
                    preventSetSelection: s
                } = e, {
                    blocks: r
                } = e, o = (0, i(385941).Z)();
                if (!o) throw Error("No root store.");
                if (n.length > 0) {
                    let e = n[0],
                        o = i(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!o || !o.props.onInsertAbove) throw Error("No Selectable found.");
                    let l = o.props.onInsertAbove({
                        insertStores: r,
                        transaction: a
                    });
                    return s || (0, i(854924).t)({
                        environment: t,
                        stores: l
                    }), l
                } {
                    let e = o.getContentStore(),
                        n = r.map(t => (0, i(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return s || (0, i(854924).t)({
                        environment: t,
                        stores: n
                    }), n
                }
            }
        },
        236946: (e, t, i) => {
            i.d(t, {
                p: () => n
            });

            function n() {
                let e = (0, i(723240).r)(),
                    t = (0, i(187041).g)({
                        spaceId: e
                    });
                if (t) return (0, i(875472).e8)(t, "trial")
            }
        },
        425749: (e, t, i) => {
            i.d(t, {
                I$: () => r,
                R2: () => d,
                WF: () => l,
                bZ: () => o,
                cE: () => a,
                jX: () => s,
                rz: () => c
            });
            var n = () => i(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let s = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function r(e) {
                return !!(void 0 !== e && (0, i(722371).Xk)(s, e))
            }

            function o() {
                let e = (0, i(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: i(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, i(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function l(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        454122: (e, t, i) => {
            i.d(t, {
                X: () => n
            });

            function n({
                sidebarSpaceStore: e,
                environment: t
            }) {
                let [{
                    value: a,
                    status: s
                }] = (0, i(97668).Yb)(async () => {
                    if (!e || !(0, i(881016).d)()) return !1;
                    let n = await t.api.callApi({
                        eventName: "isEligibleForGuestMembershipRequest",
                        environment: t,
                        data: {
                            spaceId: e.id
                        }
                    });
                    return "failed" !== n.type && n.data.isEligible
                }, [e, t]);
                return {
                    isEligibleForGuestMembershipRequest: a,
                    isEligibleForGuestMembershipRequestStatus: s
                }
            }
        },
        455205: (e, t, i) => {
            i.r(t), i.d(t, {
                FETCHABLE_TEAM_TYPES: () => r,
                fetchUnfetchedTeams: () => l,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => _,
                getTeamMetadataFromStore: () => v,
                getTeamStore: () => m,
                refetchTeams: () => d
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520);
            var n = () => i(988752);
            async function a(e) {
                let {
                    actorUserId: t,
                    targetUserId: n,
                    spaceId: a,
                    teamTypes: s,
                    teamIds: r,
                    environment: o
                } = e;
                if (!(0, i(422280).GL)({
                        actorUserId: t,
                        targetUserId: n,
                        teamTypes: s
                    })) throw new(i(101787)).qQk("User does not have permission to fetch teams for another user.");
                let l = await o.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: o,
                    data: {
                        spaceId: a,
                        teamTypes: Array.from(s),
                        teamIds: "all" === r ? void 0 : Array.from(r),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, i(958692).X7)() && void 0,
                        targetUserId: n
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" === l.type) throw l.error;
                let {
                    teams: d,
                    hasUnjoinedActiveTeams: c
                } = l.data;
                return {
                    teams: d,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let s = new(i(245541)).R({
                    key: "localStorageTeams",
                    namespace: i(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                r = ["Joined", "UnjoinedActive", "Archived"];
            async function o(e) {
                let {
                    userId: t,
                    spaceId: r,
                    teamTypesToUpdate: o,
                    teamIdsToUpdate: l,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                } = e, p = n().E.getOrCreateUnit(t, r);
                if (0 === o.size || "all" !== l && 0 === l.size) return void await p.pendingUpdates;
                let _ = a({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: r,
                    teamTypes: o,
                    teamIds: l,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                });
                n().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: r,
                        fetchedTeamsPromise: _,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: o,
                        teamIdsToUpdate: l
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: n,
                            teamsResponse: a
                        } = e;
                        if (!i(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: r
                        } = a, o = r.filter(e => "Joined" === e.type), l = r.filter(e => "UnjoinedActive" === e.type), d = r.filter(e => "Archived" === e.type), c = o.concat(l, d).slice(0, 1e3);
                        s.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [n] : { ...a,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: r,
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
                    teamTypes: a,
                    environment: s,
                    canTruncateRecordMap: r,
                    sort: l
                } = e, d = n().E.getOrCreateUnit(t, i), c = new Set(Array.from(a.values()).filter(e => "server" !== d.lastFetchSourceOfTeamType[e]));
                await o({
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: s,
                    canTruncateRecordMap: r,
                    sort: l
                })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamIds: a,
                    environment: s
                } = e, l = n().E.getOrCreateUnit(t, i), d = new Set(r.filter(e => "server" === l.lastFetchSourceOfTeamType[e]));
                await o({
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: d,
                    teamIdsToUpdate: a,
                    environment: s
                })
            }

            function c() {
                let e = s.getState();
                for (let t in e)
                    for (let i in e[t]) {
                        let a = n().E.getOrCreateUnit(t, i),
                            s = new Set(r.filter(e => "none" === a.lastFetchSourceOfTeamType[e]));
                        0 !== s.size && n().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: i,
                            fetchedTeamsPromise: Promise.resolve(e[t][i]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: s,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    teamTypes: a,
                    environment: s
                } = e;
                return await l({
                    userId: t,
                    spaceId: i.id,
                    teamTypes: a,
                    environment: s
                }), n().E.readTeams(t, i.id, a).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: i,
                    environment: n
                } = e;
                return await u({
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
                return await u({
                    userId: t,
                    spaceStore: i,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: n
                })
            }

            function m(e) {
                let {
                    teamId: t,
                    spaceStore: n
                } = e;
                return i(681735).h.createChildStore(n, {
                    table: i(832375).yKj,
                    id: t
                })
            }

            function v(e) {
                var t;
                let {
                    teamStore: a,
                    userId: s,
                    spaceStore: r
                } = e, o = n().E.readMembershipCount({
                    userId: s,
                    spaceId: r.id,
                    teamId: a.id
                }), l = a.getArchivedBy() ? "Archived" : (0, i(220530).f)({
                    userId: s,
                    teamStore: a,
                    userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                        spaceId: r.id
                    })
                }) ? "Joined" : "UnjoinedActive", d = (0, i(228091).a)({
                    teamStore: a,
                    userId: s,
                    userPermissionGroups: i(68809).f.getSpacePermissionGroupIds({
                        spaceId: r.id
                    })
                }) ? ? "none";
                return {
                    id: a.id,
                    title: a.getName() ? ? "",
                    icon: null == (t = a.getIcon()) ? void 0 : t.icon,
                    type: l,
                    membershipSummary: o,
                    lastEditedTime: 0 === a.getLastEditedTime() ? void 0 : a.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: a.getDisablePublicAccess(),
                        disableGuests: a.getDisableGuests(),
                        disableExport: a.getDisableExport()
                    },
                    teamRole: d,
                    isDefaultTeam: a.isDefault(),
                    accessLevel: a.getTeamAccessLevel(),
                    description: a.getDescription()
                }
            }
        },
        510504: (e, t, i) => {
            i.d(t, {
                L: () => n
            });

            function n(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "notion_topbar_click",
                        eventProperties: e
                    },
                    opts: {
                        dontWait: !0
                    }
                })
            }
        },
        521180: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var n = i(474848);
            let a = function(e) {
                let t = (0, i(533992).v3)(),
                    {
                        modalStyle: a,
                        alignItems: s = "flex-start"
                    } = e,
                    r = (0, i(960253).I)(() => ({
                        modalStyle: {
                            top: i(801113).jq(t.device.isElectronMac),
                            borderRadius: 12,
                            overflow: "hidden",
                            boxShadow: i(632079).Tj.shadow.outline.scrim,
                            background: i(632079).Tj.background.primary,
                            ...a
                        }
                    }), [t, a]);
                return i(986939).A.isMobile ? (0, n.jsx)(i(182718).zD, {
                    popupType: i(423291).n.SlideUp,
                    open: e.open,
                    content: e.renderContent,
                    preventSlideUpTransition: e.disableAnimation,
                    onDismiss: e.onDismiss,
                    trapFocus: !1,
                    ariaLabel: e.ariaLabel,
                    children: e.children
                }) : (0, n.jsx)(i(556809).a, {
                    open: e.open,
                    preventHideChildrenWhileOpening: !0,
                    style: {
                        alignItems: s
                    },
                    innerStyle: r.modalStyle,
                    onDismiss: e.onDismiss,
                    origin: e.children,
                    isWaxPaper: e.modalIsWaxPaper,
                    backgroundStyle: e.modalBackgroundStyle,
                    transitionAppearance: e.disableAnimation ? "none" : void 0,
                    ariaLabel: e.ariaLabel,
                    children: e.renderContent()
                })
            }
        },
        609328: (e, t, i) => {
            i.d(t, {
                P: () => s
            }), i(944114), i(296540);
            var n = i(474848);
            let a = (0, i(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function s({
                environment: e,
                title: t,
                ...r
            }) {
                var o, l, d;
                let c = [],
                    u = null == (o = r.error) ? void 0 : o.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (l = t.replay) || null == (d = l.terminate) || d.call(l)), c.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, i(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: a.errorStacktraceCopied
                            })
                        }
                    })
                }
                c.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, n.jsx)(i(109939).sA, { ...i(647095)._0.dismissButtonLabel
                    }),
                    onAccept: i(763230).D_
                }), i(647095).ui({
                    message: t,
                    description: (0, n.jsx)(i(149795).dD, { ...r
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: c
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
        729619: (e, t, i) => {
            i.d(t, {
                XP: () => s,
                T: () => r,
                Tk: () => a,
                YG: () => l,
                jW: () => o,
                Zp: () => d
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
                    collection_view_id: r,
                    collection_id: o,
                    owned_collection_count: l,
                    linked_collection_count: d
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
                    collection_id: o,
                    collection_view_id: r,
                    collection_view_block_id: s,
                    owned_collection_count: l,
                    linked_collection_count: d
                }, (0, i(104310).u)({
                    event: {
                        eventName: "close_page_share",
                        eventProperties: t
                    }
                })
            }
            async function r(e) {
                let {
                    inviteTargetsStore: t
                } = e, a = (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationMessage",
                    defaultMessage: "Your changes have not been saved. Discard changes?"
                }), s = (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationButton.label",
                    defaultMessage: "Yes"
                }), r = (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.closeInviteDialog.cancelButton.label",
                    defaultMessage: "Cancel"
                });
                return t.state.inviteTargets.length > 0 && (await i(647095).Gh({
                    message: a,
                    acceptLabel: s,
                    cancelLabel: r
                })).accept
            }

            function o(e) {
                let t = i(880853).Ay.state;
                (t.display === i(880853).pP.Invite || t.display === i(880853).pP.AddInviteMessage) && i(880853).Ay.setState({ ...t,
                    selectedBlockRole: e
                })
            }

            function l(e) {
                let t = i(880853).Ay.state;
                (t.display === i(880853).pP.Invite || t.display === i(880853).pP.AddInviteMessage) && i(880853).Ay.setState({ ...t,
                    canCreatePagesInCollection: e
                })
            }

            function d(e) {
                let t = i(880853).Ay.state;
                (t.display === i(880853).pP.Invite || t.display === i(880853).pP.AddInviteMessage) && i(880853).Ay.setState({ ...t,
                    userSelectedCreatorRole: e
                })
            }
        },
        758972: (e, t, i) => {
            i.d(t, {
                Ay: () => d,
                NJ: () => r,
                d5: () => o
            }), i(898992), i(354520), i(581454), i(737550);
            var n, a, s = () => i(546605);
            let r = ((n = {}).unselected = "unselected", n.workspace_member = "workspace_member", n.request_workspace_member = "request_workspace_member", n.page_guest = "page_guest", n.closed = "closed", n),
                o = ((a = {})[a.closed = 0] = "closed", a[a.share_page = 1] = "share_page", a[a.share_workspace = 2] = "share_workspace", a[a.request_workspace = 3] = "request_workspace", a);
            class l extends s().Store {
                getInitialState() {
                    return {
                        inviteStage: o.closed,
                        selection: r.workspace_member,
                        order: [r.workspace_member, r.page_guest],
                        invitedUsers: [],
                        invitedEmailToUserIdMap: {},
                        flowId: i(92513).JW()
                    }
                }
                startWorkspaceInvite() {
                    this.setState({ ...this.state,
                        inviteStage: o.share_workspace,
                        order: [r.workspace_member, r.page_guest],
                        selection: r.workspace_member
                    })
                }
                startRequestMembership() {
                    this.setState({ ...this.state,
                        inviteStage: o.request_workspace,
                        order: [r.request_workspace_member, r.page_guest],
                        selection: r.request_workspace_member
                    })
                }
                hasGuests() {
                    return this.state.invitedUsers.some(e => e.isGuest)
                }
                getGuestEmails() {
                    return this.state.invitedUsers.filter(e => e.isGuest).map(e => e.email)
                }
            }
            let d = l
        },
        804392: (e, t, i) => {
            i.d(t, {
                A: () => l,
                k: () => r
            });
            var n = i(296540),
                a = i(474848);
            let s = {
                container: {
                    padding: 20,
                    width: 350,
                    paddingBottom: 15
                },
                title: {
                    fontWeight: i(699422).Wy.medium,
                    marginBottom: 10
                },
                input: {
                    width: "100%",
                    padding: "8px 12px",
                    marginTop: 10,
                    marginBottom: 10
                },
                button: {
                    width: "100%",
                    marginTop: 10
                }
            };

            function r(e) {
                let t = (0, i(533992).v3)(),
                    {
                        onDismiss: r
                    } = e,
                    [o, l] = (0, n.useState)(""),
                    d = (0, i(109939).tz)(),
                    c = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    u = (0, i(682985).K8)(() => c ? (0, i(742197).G)(t, c) : "workspace", [t, c]);
                return (0, a.jsxs)("div", {
                    style: s.container,
                    children: [(0, a.jsx)("div", {
                        style: s.title,
                        children: (0, a.jsx)(i(109939).sA, {
                            id: "GuestMembershipRequestModal.title",
                            defaultMessage: "Request membership to {workspaceName}",
                            values: {
                                workspaceName: u
                            }
                        })
                    }), (0, a.jsxs)(i(519451).A, {
                        debugName: "GuestMembershipRequestModal",
                        capture: !0,
                        allowEsc: !0,
                        children: [(0, a.jsx)(i(36481).p, {
                            style: s.input,
                            textarea: !0,
                            value: o,
                            placeholder: d.formatMessage({
                                id: "GuestMembershipRequestModal.message.placeholder",
                                defaultMessage: "Reason (optional)"
                            }),
                            onChange: e => {
                                l(e.target.value)
                            }
                        }), (0, a.jsx)(i(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            style: s.button,
                            onClick: () => {
                                let {
                                    currentUser: e
                                } = t;
                                e && e.id && c && (i(179701).RH({
                                    invite_flow_id: void 0,
                                    user_count: 1,
                                    new_user_count: 1,
                                    is_bot: !1,
                                    space_role: "read_and_write",
                                    invite_message_length: o.length,
                                    invite_space_role_selection: i(758972).NJ.request_workspace_member,
                                    from: "sidebar_guest_request"
                                }), t.api.callApi({
                                    eventName: "requestAccess",
                                    environment: t,
                                    data: {
                                        type: "actor-to-space",
                                        forActorId: e.id,
                                        spaceId: c.id,
                                        message: o,
                                        attributes: {
                                            origin_id: c.id,
                                            origin_type: "sidebar_guest_request",
                                            origin_table: "space",
                                            add_permissions_on_approval: !1
                                        }
                                    }
                                }).catch(() => {
                                    i(436555).D6({
                                        label: (0, a.jsx)(i(109939).sA, {
                                            id: "guestMembershipRequestModal.confirmationToast.errorMessage",
                                            defaultMessage: "Failed to send membership request."
                                        })
                                    })
                                }).finally(() => {
                                    i(436555).D6({
                                        label: (0, a.jsx)(i(109939).sA, {
                                            id: "guestMembershipRequestModal.confirmationToast.successMessage",
                                            defaultMessage: "Sent membership request."
                                        })
                                    })
                                }), l(""), r())
                            },
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "GuestMembershipRequestModal.sendRequest.button",
                                defaultMessage: "Send request"
                            })
                        }), (0, a.jsx)(i(548436).A, {
                            size: "lg",
                            style: s.button,
                            onClick: () => {
                                l(""), r()
                            },
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "GuestMembershipRequestModal.cancel.button",
                                defaultMessage: "Cancel"
                            })
                        })]
                    })]
                })
            }
            let o = {
                    alignSelf: "center",
                    overflow: "visible",
                    top: 0,
                    width: 350
                },
                l = function(e) {
                    let [t, s] = (0, n.useState)(!1), {
                        origin: l
                    } = e;
                    return (0, a.jsx)(i(521180).A, {
                        modalStyle: o,
                        open: t,
                        onDismiss: () => s(!1),
                        renderContent: () => (0, a.jsx)(r, {
                            onDismiss: () => s(!1)
                        }),
                        children: (0, a.jsx)("div", {
                            onClick: () => {
                                i(594311).cK(), s(!0)
                            },
                            children: l
                        })
                    })
                }
        },
        852864: (e, t, i) => {
            i.d(t, {
                H: () => n
            }), i(898992), i(672577);

            function n({
                spaceStore: e,
                userId: t,
                environment: a
            }) {
                let s = new(i(736309)).d(a, {
                    table: i(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return s ? i(994797).SpaceViewStore.createChildStore(e, {
                    id: s.id,
                    table: i(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        855361: (e, t, i) => {
            i.d(t, {
                S: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    spaceId: n
                } = e;
                return (0, i(682985).K8)(() => {
                    if (n) return (0, i(616579).j)({
                        environment: t,
                        spaceId: n
                    })
                }, [t, n])
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
        922913: (e, t, i) => {
            i.r(t), i.d(t, {
                PublicShareLinkLoginModal: () => r,
                publicShareLinkLoginModalStore: () => s
            });
            var n = i(296540),
                a = i(474848);
            let s = new(i(436614)).A;

            function r() {
                let e = (0, i(682985).K8)(() => s.state.open, []),
                    t = (0, n.useMemo)(() => {
                        let e = (0, i(13565).KB)({
                            config: i(986939).A,
                            fileHostProtocol: i(986939).A.secureFileConfig.protocol,
                            fileHostName: i(986939).A.secureFileConfig.hostname
                        });
                        return null == e ? void 0 : e.shouldRedirectForExistingUsersOnly
                    }, [e]);
                return e ? (0, a.jsx)(i(813515).z, {
                    loginModalStore: s,
                    title: (0, a.jsx)(i(109939).sA, {
                        id: "publicShareLinkLoginModal.title",
                        defaultMessage: "Sign up or log in"
                    }),
                    description: t ? (0, a.jsx)(i(109939).sA, {
                        id: "publicShareLinkLoginModal.description.createWorkspace",
                        defaultMessage: "Create a new account to start building, or log in to access more features."
                    }) : (0, a.jsx)(i(109939).sA, {
                        id: "publicShareLinkLoginModal.description",
                        defaultMessage: "Create an account or log in to access more features."
                    })
                }) : null
            }
        },
        966559: (e, t, i) => {
            i.r(t), i.d(t, {
                exclamationMarkCircleSmallIcon: () => s,
                iconDefinition: () => a
            }), i(296540);
            var n = i(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, n.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                s = (0, i(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        980494: (e, t, i) => {
            i.d(t, {
                A: () => s
            }), i(296540);
            var n = i(474848);
            let a = {
                    style0: { ...i(699422).RC
                    }
                },
                s = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        s = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        r = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: o,
                            avatarShouldShowShadow: l,
                            avatarSize: d,
                            hasTooltip: c,
                            tooltipHeader: u,
                            hasPersonHoverCard: p,
                            spaceStore: _
                        } = e,
                        m = (0, i(109939).tz)(),
                        v = (0, i(682985).K8)(() => null == o ? void 0 : o.getDisplayName(m), [o, m]),
                        g = (0, n.jsxs)("div", {
                            style: s,
                            children: [(0, n.jsx)("div", {
                                style: r,
                                children: (0, n.jsx)(i(321753).A, {
                                    userStore: o,
                                    avatarShouldShowShadow: l,
                                    size: d,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, n.jsx)("div", {
                                className: "notranslate",
                                style: a.style0,
                                children: v
                            })]
                        });
                    return p ? (0, n.jsx)(i(532755).D, {
                        userStore: o,
                        spaceStore: _,
                        from: e.personHoverCardEntrypoint,
                        children: g
                    }) : g
                }
        }
    }
]);