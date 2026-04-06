"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86793], {
        92168: (e, t, i) => {
            i.d(t, {
                k: () => s
            });
            let s = (0, i(104509).xh)("arrowInCircleUp", {
                default: {
                    loader: () => i.e(15538).then(i.bind(i, 531718))
                },
                small: {
                    loader: () => i.e(15538).then(i.bind(i, 989556))
                },
                fill: {
                    loader: () => i.e(15538).then(i.bind(i, 682612))
                },
                fillSmall: {
                    loader: () => i.e(15538).then(i.bind(i, 96699))
                }
            }, ["arrow", "circle", "up", "direction", "pointer", "upgrade"])
        },
        210285: (e, t, i) => {
            i.d(t, {
                A: () => u
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(672577), i(581454), i(296540);
            var s = i(474848);

            function a() {
                return (0, s.jsx)(i(746434).E, {
                    content: (0, s.jsx)(i(109939).sA, {
                        id: "spaceUserMembershipType.member",
                        defaultMessage: "Member"
                    })
                })
            }
            let r = (0, i(109939).YK)({
                    invited_page: {
                        id: "PermissionsInviteSearchRequest.userTooltip.invited_page",
                        defaultMessage: "{userNameAndEmail} is invited to this page already"
                    },
                    invited_database: {
                        id: "PermissionsInviteSearchRequest.userTooltip.invite_database",
                        defaultMessage: "{userNameAndEmail} is invited to this database already"
                    },
                    invited_space: {
                        id: "PermissionsInviteSearchRequest.userTooltip.invited_space",
                        defaultMessage: "{userNameAndEmail} is invited to this workspace already"
                    },
                    invited_team: {
                        id: "PermissionsInviteSearchRequest.userTooltip.invited_team",
                        defaultMessage: "{userNameAndEmail} is invited to this teamspace already"
                    },
                    not_in_space: {
                        id: "PermissionsInviteSearchRequest.userTooltip.admin",
                        defaultMessage: "Click to invite {userNameAndEmail}"
                    }
                }),
                n = (0, i(109939).YK)({
                    workspaceOwnerTooltip: {
                        id: "inviteUserModal.userRole.workspaceOwnerBadge.tooltip",
                        defaultMessage: "{ userNameAndEmail} is a workspace owner in this workspace"
                    },
                    membershipAdminTooltip: {
                        id: "inviteUserModal.userRole.membershipAdminBadge.tooltip",
                        defaultMessage: "{ userNameAndEmail} is a membership admin in this workspace"
                    },
                    memberTooltip: {
                        id: "inviteUserModal.userRole.memberBadge.tooltip",
                        defaultMessage: "{ userNameAndEmail} is a member in this workspace"
                    },
                    restrictedMemberTooltip: {
                        id: "inviteUserModal.userRole.restrictedMemberBadge.tooltip",
                        defaultMessage: "{ userNameAndEmail} is a restricted member in this workspace"
                    },
                    guestTooltip: {
                        id: "inviteUserModal.userRole.guest.tooltip",
                        defaultMessage: "{ userNameAndEmail} is a guest in this workspace"
                    }
                }),
                o = {
                    style0: {
                        fontWeight: i(699422).Wy.bold
                    }
                };

            function l(e, t) {
                return e.filter((e, i) => i < t)
            }

            function d(e) {
                let {
                    membershipType: t,
                    intl: r,
                    userNameAndEmail: o
                } = e;
                switch (t) {
                    case "owner":
                        return {
                            tooltip: r.formatMessage(n.workspaceOwnerTooltip, {
                                userNameAndEmail: o
                            }),
                            userTypeToken: (0, s.jsx)(i(580244).l, {
                                role: t
                            })
                        };
                    case "membership_admin":
                        return {
                            tooltip: r.formatMessage(n.membershipAdminTooltip, {
                                userNameAndEmail: o
                            }),
                            userTypeToken: (0, s.jsx)(i(580244).l, {
                                role: t
                            })
                        };
                    case "member":
                        return {
                            tooltip: r.formatMessage(n.memberTooltip, {
                                userNameAndEmail: o
                            }),
                            userTypeToken: (0, s.jsx)(a, {})
                        };
                    case "restricted_member":
                        return {
                            tooltip: r.formatMessage(n.restrictedMemberTooltip, {
                                userNameAndEmail: o
                            }),
                            userTypeToken: (0, s.jsx)(i(156379).L, {})
                        };
                    case "page_guest":
                        return {
                            tooltip: r.formatMessage(n.guestTooltip, {
                                userNameAndEmail: o
                            }),
                            userTypeToken: (0, s.jsx)(i(577280).w, {
                                labelType: t
                            })
                        };
                    default:
                        (0, i(722371).HB)(t)
                }
            }
            let u = function(e) {
                let {
                    store: t,
                    shouldShowGroups: a,
                    sectionRenderLimit: n,
                    membersOnly: u,
                    hideCurrentUser: m,
                    disableInvitedUsers: p,
                    guestsMustBeRequested: c,
                    hideTitle: g,
                    defaultUserTitle: v,
                    performSearchRequest: f
                } = e, [h, b, y] = (0, i(682985).$y)(e.permissionsInviteStore), x = (0, i(533992).v3)(), M = (0, i(109939).tz)(), {
                    tokenQuery: T
                } = h, j = (0, i(67499).S)(), k = "invitee";
                return (0, s.jsx)(i(814255).A, {
                    request: T,
                    performRequest: e => f ? f({
                        query: e,
                        limit: 10,
                        environment: x
                    }) : i(929447).hQ({
                        query: e,
                        sectionLimit: {
                            userLimit: 10,
                            groupLimit: 10 * !!a,
                            importContactLimit: 0
                        },
                        membersOnly: u,
                        environment: x,
                        intl: M,
                        pageContext: j
                    }),
                    render: (e, u, f) => {
                        if (e) return (0, s.jsx)(i(300193).z, {
                            loading: !f,
                            hideTitle: g,
                            children: (0, s.jsx)(i(498341).u, {
                                title: (0, s.jsx)(i(109939).sA, {
                                    id: "inviteUserModal.searchInput.errorMessage",
                                    defaultMessage: "Something went wrong"
                                })
                            })
                        });
                        let b = u && { ...u,
                                inviteUsers: u.inviteUsers.filter(e => !(0, i(494341).mQ)({
                                    permissionsInviteStore: y,
                                    target: e
                                }) && (!m || e.value.id !== x.currentUser.id)),
                                importedContacts: (0, i(494341).GZ)(u.inviteUsers, u.importedContacts)
                            },
                            j = b && (null == T ? void 0 : T.length) > 0,
                            {
                                inviteUsers: w,
                                inviteGroups: A,
                                importedContacts: I = []
                            } = j ? b : (0, i(494341).Es)({
                                currentInviteActors: b,
                                permissionsInviteStore: y,
                                targetStore: t
                            }),
                            S = [...l(w, n), ...l(I, 10)].map((e, a) => {
                                let n = "newUser" === e.type ? e.value.email : e.value.id,
                                    o = (0, i(494341).vP)(e),
                                    l = !!(j && (0, i(494341).VF)({
                                        permissionsInviteStore: y,
                                        userTarget: e,
                                        targetStore: t
                                    }));
                                return {
                                    key: n,
                                    render: a => {
                                        let {
                                            tooltip: n,
                                            userTypeToken: u
                                        } = function(e) {
                                            let {
                                                userTarget: t,
                                                targetStore: a,
                                                isInvited: n,
                                                membershipType: o,
                                                intl: l
                                            } = e, u = "newUser" === t.type ? null : i(993189).Bj6.fromValue(i(832375).oo9, t.value), m = null == u ? void 0 : u.id, p = null == u ? void 0 : u.getDisplayName(l), c = t.value.email, g = p && p !== c ? `${p} (${c})` : c ? ? l.formatMessage({
                                                id: "userTypeTooltip.generalPerson",
                                                defaultMessage: "This person"
                                            });
                                            if ((0, i(966980).$R)(a) && m) {
                                                let e = (0, i(228091).a)({
                                                    teamStore: a,
                                                    userId: m,
                                                    userPermissionGroups: new Set
                                                });
                                                if (e && "none" !== e) {
                                                    let t = l.formatMessage(i(391518).Y7[e].label);
                                                    return {
                                                        tooltip: l.formatMessage(r.invited_team, {
                                                            userNameAndEmail: g
                                                        }),
                                                        userTypeToken: (0, s.jsx)(i(746434).E, {
                                                            content: (0, s.jsx)(i(109939).sA, {
                                                                id: "inviteUserModal.teamspaceRole.memberBadge.label",
                                                                defaultMessage: "{teamRoleMessage}",
                                                                values: {
                                                                    teamRoleMessage: t
                                                                }
                                                            })
                                                        })
                                                    }
                                                }
                                                return (0, i(729052).P)(o) || (0, i(729052).GN)(o) ? d({
                                                    userNameAndEmail: g,
                                                    membershipType: o,
                                                    intl: l
                                                }) : {
                                                    tooltip: void 0,
                                                    userTypeToken: void 0
                                                }
                                            }
                                            return n ? {
                                                tooltip: (0, i(966980).Yu)(a) ? l.formatMessage(r.invited_space, {
                                                    userNameAndEmail: g
                                                }) : a instanceof i(970831).B ? l.formatMessage(r.invited_page, {
                                                    userNameAndEmail: g
                                                }) : a instanceof i(356912).m ? l.formatMessage(r.invited_database, {
                                                    userNameAndEmail: g
                                                }) : l.formatMessage(r.invited_team, {
                                                    userNameAndEmail: g
                                                }),
                                                userTypeToken: (0, s.jsx)(i(746434).E, {
                                                    content: (0, s.jsx)(i(109939).sA, {
                                                        id: "inviteUserModal.userRole.invitedBadge.label",
                                                        defaultMessage: "Invited"
                                                    })
                                                })
                                            } : "none" === o ? {
                                                tooltip: l.formatMessage(r.not_in_space, {
                                                    userNameAndEmail: g
                                                }),
                                                userTypeToken: void 0
                                            } : d({
                                                userNameAndEmail: g,
                                                membershipType: o,
                                                intl: l
                                            })
                                        }({
                                            userTarget: e,
                                            targetStore: t,
                                            membershipType: o,
                                            isInvited: l,
                                            intl: M
                                        });
                                        return "existingUser" === e.type ? (0, s.jsx)(i(920224).A, { ...a,
                                            actor: (0, i(197018).A7)(e.value),
                                            right: u,
                                            tooltip: n,
                                            tooltipPlacement: "bottom",
                                            disabled: p && l,
                                            defaultUserTitle: v
                                        }) : (0, s.jsx)(i(51831).m, {
                                            placement: "bottom",
                                            alignment: "start",
                                            textWrap: !0,
                                            disableTooltip: !n,
                                            content: () => n,
                                            children: t => (0, s.jsx)(i(95582).A, { ...a,
                                                ...t,
                                                icon: (0, s.jsx)(i(16275).I, {
                                                    icon: i(823811).o
                                                }),
                                                right: u,
                                                title: e.value.email.trim(),
                                                disabled: p && l
                                            })
                                        })
                                    },
                                    action: () => {
                                        if (p && l) return;
                                        let t = { ...e,
                                            ..."existingUser" === e.type && {
                                                membershipType: o
                                            }
                                        };
                                        i(179701).kH({
                                            subscription_tier: (0, i(216260).AI)(),
                                            invite_token_query: T,
                                            selected_user_token: e,
                                            selected_user_token_rank: a,
                                            from: "permission_invite"
                                        }), y.setState({ ...h,
                                            inviteTargets: [...h.inviteTargets, t],
                                            tokenQuery: "",
                                            inputFocus: k
                                        })
                                    }
                                }
                            }),
                            _ = l(A, n).map(e => {
                                let {
                                    value: t
                                } = e;
                                return {
                                    key: t.id,
                                    render: a => {
                                        let r = (0, i(494341).dV)(e) ? (0, s.jsx)(i(156379).L, {}) : void 0;
                                        return (0, s.jsx)(i(729460)._, {
                                            group: t,
                                            menuListItemProps: a,
                                            right: r
                                        })
                                    },
                                    action: () => {
                                        y.setState({ ...h,
                                            inviteTargets: [...h.inviteTargets, e],
                                            tokenQuery: "",
                                            inputFocus: k
                                        })
                                    }
                                }
                            }),
                            C = [];
                        if (S.length > 0 && C.push({
                                key: "user results",
                                render: e => (0, s.jsx)(i(300193).z, { ...e,
                                    loading: !f,
                                    hideTitle: g
                                }),
                                items: S
                            }), a && _.length > 0 && C.push({
                                key: "group results",
                                render: e => (0, s.jsx)(i(844565).A, { ...e,
                                    title: (0, s.jsx)(i(109939).sA, {
                                        id: "inviteUserModal.searchDropdown.selectGroupTitle",
                                        defaultMessage: "Select a group"
                                    }),
                                    loading: !f
                                }),
                                items: _
                            }), 0 === C.length) {
                            let e = (0, i(801109).qh)(h.tokenQuery);
                            if ((0, i(801109).DT)(e)) {
                                let a = (0, i(494341).mQ)({
                                    target: {
                                        type: "newUser",
                                        value: {
                                            email: e
                                        },
                                        source: "email"
                                    },
                                    permissionsInviteStore: y
                                });
                                if (!a) return;
                                if (a) return (0, s.jsx)(i(300193).z, {
                                    loading: !f,
                                    hideTitle: g,
                                    children: (0, s.jsx)(i(498341).u, {
                                        title: (0, s.jsx)(i(109939).sA, {
                                            id: "inviteUserModal.userAlreadyInvitedMessage",
                                            defaultMessage: "Already inviting {user}.",
                                            values: {
                                                user: (0, s.jsx)("span", {
                                                    style: o.style0,
                                                    children: (0, i(494341).Sk)({
                                                        intl: M,
                                                        target: a
                                                    })
                                                })
                                            }
                                        })
                                    })
                                });
                                let r = (u && u.inviteUsers || []).find(t => "existingUser" === t.type && t.value.email === e);
                                if (r && "existingUser" === r.type && (0, i(494341).wF)({
                                        store: t,
                                        target: r
                                    })) return (0, s.jsx)(i(300193).z, {
                                    loading: !f,
                                    hideTitle: g,
                                    children: (0, s.jsx)(i(498341).u, {
                                        title: (0, s.jsx)(i(109939).sA, {
                                            id: "inviteUserModal.userAlreadyHasPermissionMessage",
                                            defaultMessage: "{user} already has permission.",
                                            values: {
                                                user: (0, s.jsx)("span", {
                                                    style: o.style0,
                                                    children: (0, i(413818).c6)(M, r.value)
                                                })
                                            }
                                        })
                                    })
                                })
                            } else {
                                if (!h.tokenQuery) return null;
                                C.push({
                                    key: "user results",
                                    render: e => (0, s.jsx)(i(300193).z, { ...e,
                                        loading: !f,
                                        hideTitle: g,
                                        title: c ? (0, s.jsx)(i(109939).sA, {
                                            id: "inviteUserModal.searchDropdown.requestPeople",
                                            defaultMessage: "Keep typing to request inviting an email"
                                        }) : (0, s.jsx)(i(109939).sA, {
                                            id: "inviteUserModal.searchDropdown.addPeople",
                                            defaultMessage: "Keep typing to invite email"
                                        })
                                    }),
                                    items: [{
                                        key: h.tokenQuery,
                                        render: e => (0, s.jsx)(i(95582).A, {
                                            icon: (0, s.jsx)(i(16275).I, {
                                                icon: i(823811).o
                                            }),
                                            title: h.tokenQuery,
                                            ...e
                                        }),
                                        action: () => {}
                                    }]
                                })
                            }
                        }
                        return (0, s.jsx)(i(558045).A, {
                            type: i(558045).O.Vertical,
                            initialFocus: T.length > 0 ? 0 : void 0,
                            sections: C
                        })
                    }
                })
            }
        },
        362650: (e, t, i) => {
            function s(e, t) {
                var s;
                let a = i(92513).JW();
                s = {
                    modal_id: a,
                    currency_code: i(653828).H.selectedCurrencyCodeStoreState,
                    ...t.analyticsArgs,
                    desiredProducts: t.desiredProducts,
                    desiredInterval: t.desiredInterval
                }, (0, i(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_open",
                        eventProperties: s
                    }
                }), i(856863).j.open({
                    modalId: a,
                    ...t
                })
            }

            function a(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_exit",
                        eventProperties: {
                            modal_id: {
                                modalId: t
                            }.modalId
                        }
                    }
                }), i(856863).j.setState({
                    open: !1
                })
            }
            i.d(t, {
                A: () => a,
                o: () => s
            })
        },
        391518: (e, t, i) => {
            i.d(t, {
                H1: () => s,
                Y7: () => r
            });
            let s = ["owner", "member"],
                a = (0, i(109939).YK)({
                    ownerLabel: {
                        id: "teamPermissionsMenu.ownerItem.label",
                        defaultMessage: "Teamspace owner"
                    },
                    ownerCaption: {
                        id: "teamPermissionsMenu.ownerItem.caption",
                        defaultMessage: "Can edit teamspace settings and full access to teamspace pages."
                    },
                    memberLabel: {
                        id: "teamPermissionsMenu.memberItem.label",
                        defaultMessage: "Teamspace member"
                    },
                    memberCaption: {
                        id: "teamPermissionsMenu.memberItem.caption",
                        defaultMessage: "Cannot edit teamspace settings and can access teamspace pages."
                    },
                    guestLabel: {
                        id: "teamPermissionsMenu.guestItem.label",
                        defaultMessage: "Teamspace guest"
                    },
                    guestCaption: {
                        id: "teamPermissionsMenu.guestItem.caption",
                        defaultMessage: "Only has access to invited teamspaces."
                    }
                }),
                r = {
                    owner: {
                        label: a.ownerLabel,
                        caption: a.ownerCaption
                    },
                    member: {
                        label: a.memberLabel,
                        caption: a.memberCaption
                    },
                    team_level_guest: {
                        label: a.guestLabel,
                        caption: a.guestCaption
                    }
                }
        },
        413552: (e, t, i) => {
            async function s(e, t) {
                var s;
                let {
                    offerCampaign: a,
                    offerCode: r,
                    ...n
                } = t;
                if (a && (!n.spaceId || null != (s = (0, i(328765).S)()) && s.canAdmin())) {
                    if (n.spaceId) return i(617995).I.awaitData(e, {
                        spaceId: n.spaceId,
                        offerCampaign: a,
                        offerCode: r,
                        deviceId: n.deviceId
                    });
                    if (n.deviceId) {
                        let t = await e.api.callApi({
                            eventName: "getCustomerOffer",
                            environment: e,
                            data: { ...n,
                                offerCampaign: a,
                                offerCode: r
                            }
                        });
                        if ("failed" === t.type) return;
                        if ("offer" in t.data && t.data.offer) return t.data.offer
                    }
                }
            }
            i.d(t, {
                Cy: () => s,
                L6: () => n,
                VY: () => a
            }), i(898992), i(737550);
            let a = (0, i(381453).sg)(r, 1e3, {
                leading: !0,
                trailing: !1
            });
            async function r(e) {
                let {
                    environment: t,
                    spaceId: s,
                    offerCampaign: a,
                    entrypoint: r
                } = e, n = await t.api.callApi({
                    eventName: "applyCustomerOffer",
                    environment: t,
                    data: {
                        spaceId: s,
                        offerCampaign: a,
                        entrypoint: r ? ? "unknown"
                    }
                });
                return "failed" === n.type ? void i(647095).Qg(n) : (await i(185995).default.resetData(t, {
                    spaceId: s
                }), n)
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceId: i,
                    offerCampaign: a,
                    deviceId: r
                } = e;
                return void 0 !== await s(t, {
                    spaceId: i,
                    offerCampaign: a,
                    deviceId: r
                })
            }
        },
        556055: (e, t, i) => {
            i.d(t, {
                A: () => l
            }), i(898992), i(354520), i(581454);
            var s = i(296540),
                a = i(474848);
            let r = {
                    borderRadius: 6,
                    padding: "6px 8px"
                },
                n = {
                    gap: 4
                };

            function o(e) {
                let {
                    permissionsInviteStore: t
                } = e, o = (0, i(109939).tz)(), l = (0, i(682985).K8)(() => {
                    let {
                        inputFocus: e
                    } = t.state;
                    return "invitee" === e
                }, [t]), d = (0, i(682985).K8)(() => t.state.tokenQuery, [t]), u = (0, i(682985).K8)(() => t.state.inviteTargets.filter(i(64273).eL).filter(i(64273).eL), [t]), m = (0, i(682985).K8)(() => t.state.inviteRole, [t]), p = (0, s.useCallback)(e => {
                    let {
                        newInviteTargets: s,
                        newInputValue: a,
                        inputFocus: r
                    } = e;
                    t.setState({ ...t.state,
                        inviteTargets: s,
                        inviteRole: m,
                        ...(0, i(722371).O9)(a) && {
                            tokenQuery: a
                        },
                        ...(0, i(722371).O9)(r) && {
                            inputFocus: r
                        }
                    })
                }, [m, t]), c = (0, s.useCallback)(e => {
                    let s = e.target.value,
                        {
                            extractedEmails: a,
                            newInputValue: r
                        } = (0, i(801109).Ct)(s);
                    p({
                        newInviteTargets: [...u, ...a.map(e => ({
                            type: "newUser",
                            value: {
                                email: e
                            },
                            source: "email"
                        })).filter(e => !(0, i(494341).mQ)({
                            target: e,
                            permissionsInviteStore: t
                        })).filter(i(64273).eL)],
                        newInputValue: r,
                        inputFocus: "invitee"
                    })
                }, [u, t, p]), g = (0, s.useCallback)(e => {
                    p({
                        newInviteTargets: u.filter(t => t !== e)
                    })
                }, [u, p]), v = (0, s.useCallback)(() => {
                    p({
                        newInviteTargets: u.slice(0, -1)
                    })
                }, [u, p]), f = u.map(e => (0, a.jsx)(i(561273).A, {
                    target: e,
                    onClickRemove: g
                }, e.value.id));
                return (0, a.jsx)(i(160319).Ay, {
                    focusInitial: !0,
                    focus: l,
                    showBorder: !0,
                    format: i(160319).le.Select,
                    tokenWrapStyle: n,
                    value: d,
                    onChange: c,
                    onRemoveLastToken: v,
                    type: "email",
                    placeholder: o.formatMessage({
                        id: "spacePermissionsInviteEmailSection.tokenInput.placeholder",
                        defaultMessage: "Search names or emails"
                    }),
                    tokens: f,
                    focusAfterAnimation: !0,
                    style: r
                })
            }
            let l = function(e) {
                let {
                    permissionsInviteStore: t,
                    disableAutoFocus: r,
                    showCurrentUser: n
                } = e, l = (0, i(972740).L)(), d = e.parentStore || l, u = (0, i(682985).K8)(() => {
                    var e;
                    return (null == (e = t.state) ? void 0 : e.inputFocus) === "invitee"
                }, [t]), m = (0, s.useCallback)(() => {
                    let e = t.state.tokenQuery.trim();
                    if ((0, i(801109).DT)(e)) {
                        let s = t.state.inviteTargets.filter(i(64273).eL).filter(i(64273).eL),
                            a = t.state.inviteRole,
                            r = {
                                type: "newUser",
                                value: {
                                    email: e
                                },
                                source: "email"
                            };
                        if (!(0, i(494341).mQ)({
                                target: r,
                                permissionsInviteStore: t
                            })) {
                            let e = [...s, r];
                            t.setState({ ...t.state,
                                inviteTargets: e,
                                inviteRole: a,
                                tokenQuery: ""
                            })
                        }
                    }
                    t.setState({ ...t.state,
                        inputFocus: "none"
                    })
                }, [t]), p = (0, s.useCallback)(e => {
                    t.setState({ ...t.state,
                        inputFocus: "invitee"
                    }), e.stopPropagation()
                }, [t]);
                return ((0, s.useEffect)(() => {
                    r || t.setState({ ...t.state,
                        inputFocus: "invitee"
                    })
                }, [t, r]), d) ? (0, a.jsx)(i(182718).zD, {
                    trapFocus: !1,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 10,
                    open: u,
                    popupType: i(182718).nl.Popup,
                    sameWidthAsOrigin: !0,
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !0,
                    onDismiss: m,
                    content: () => (0, a.jsx)(i(210285).A, {
                        permissionsInviteStore: t,
                        store: d,
                        shouldShowGroups: !1,
                        sectionRenderLimit: 4,
                        membersOnly: !1,
                        disableInvitedUsers: !1,
                        hideCurrentUser: !n,
                        hideTitle: !0,
                        defaultUserTitle: "name_and_email_unless_right",
                        performSearchRequest: e.performSearchRequest
                    }),
                    children: (0, a.jsx)(i(4458).VP, {
                        width: "100%",
                        gap: 8,
                        padding: 2,
                        onClick: p,
                        children: (0, a.jsx)(o, {
                            permissionsInviteStore: t
                        })
                    })
                }) : null
            }
        },
        561273: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var s = i(474848);
            let a = function({
                isStrikedThrough: e,
                backgroundColor: t,
                onClickRemove: a,
                target: r,
                disabled: n,
                showInfoIcon: o,
                style: l,
                shouldWrap: d
            }) {
                let u = (0, i(109939).tz)(),
                    m = (0, i(682985).K8)(() => {
                        switch (r.type) {
                            case "newUser":
                                return r.value.email.trim();
                            case "existingUser":
                                return (0, i(413818).c6)(u, r.value);
                            case "group":
                                return (0, i(405461).Pf)({
                                    intl: u,
                                    groupName: r.value.name
                                });
                            case "agent":
                                return r.value.name;
                            default:
                                (0, i(722371).HB)(r)
                        }
                    }, [r, u]),
                    p = o ? (0, s.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        children: [(0, s.jsx)(i(16275).I, {
                            icon: i(372181).infoCircleSmallIcon,
                            size: "sm"
                        }), m]
                    }) : m;
                return (0, s.jsx)(i(628462).A, {
                    showRemoveButton: !0,
                    isSingle: !0,
                    isStrikedThrough: e,
                    backgroundColor: t,
                    format: i(986939).A.isMobile ? i(696654).NY.Large : i(696654).NY.Medium,
                    onClickRemove: e => {
                        var t, i, s;
                        return t = e, i = a, s = r, void(t.stopPropagation(), i(s))
                    },
                    disabled: n,
                    disabledFeedback: !0,
                    value: p,
                    style: l,
                    shouldWrap: d
                })
            }
        },
        679856: (e, t, i) => {
            i.d(t, {
                Q: () => r
            });
            var s = i(296540),
                a = i(474848);

            function r(e) {
                return (0, a.jsxs)(i(4458).VP, {
                    alignItems: "flex-start",
                    gap: 6,
                    alignSelf: "stretch",
                    children: [(0, a.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: (0, a.jsx)(i(109939).sA, {
                            id: "spacePermissionsInviteMessageSection.label",
                            defaultMessage: "Message"
                        })
                    }), (0, a.jsx)(n, { ...e
                    })]
                })
            }

            function n(e) {
                let {
                    permissionsInviteStore: t
                } = e, r = (0, i(682985).K8)(() => t.state.emailMessage, [t]), n = (0, i(109939).tz)().formatMessage({
                    id: "shareMenu.spacePermissionsInviteMessageInput.placeholder",
                    defaultMessage: "Add a note to your invite..."
                }), l = r.length / 1e3 >= .8, d = (0, i(765898).BS)(r), u = l || d, m = (0, s.useCallback)(e => {
                    t.setState({ ...t.state,
                        emailMessage: e.target.value
                    })
                }, [t]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i(36481).p, {
                        textarea: !0,
                        focusInitial: !1,
                        placeholder: n,
                        maxlength: 1e3,
                        value: r,
                        onChange: m
                    }), u ? (0, a.jsx)(o, {
                        messageLength: r.length,
                        maxLength: 1e3,
                        shouldShowLengthWarning: l,
                        shouldShowLinkWarning: d
                    }) : void 0]
                })
            }

            function o(e) {
                let {
                    shouldShowLengthWarning: t,
                    shouldShowLinkWarning: s,
                    messageLength: r,
                    maxLength: n
                } = e;
                return (0, a.jsxs)(i(111010).D, {
                    styleKey: "captionMedium",
                    colorVariant: "tertiary",
                    children: [t ? (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "{characters} / {maxCharacters} characters",
                        id: "ContextualInvite.permissions_invites.messageLengthWarning",
                        values: {
                            characters: r,
                            maxCharacters: n
                        }
                    }) : void 0, t && s ? " · " : void 0, s ? (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Links will be omitted from your message",
                        id: "ContextualInvite.permissions_invites.removeLinkWarning"
                    }) : void 0]
                })
            }
        },
        932125: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var s = i(296540),
                a = i(474848);
            let r = {
                button: {
                    width: "100%",
                    margin: 0,
                    paddingTop: 4,
                    paddingBottom: 4,
                    border: `1px solid ${i(632079).Tj.border.primaryTranslucent}`
                },
                chevron: {
                    marginInlineStart: 3,
                    marginInlineEnd: 3
                },
                icon: {
                    alignSelf: "start",
                    marginTop: 0,
                    fill: i(632079).Tj.icon.secondary,
                    height: 18,
                    width: 18
                }
            };

            function n(e) {
                let {
                    permissionsInviteStore: t,
                    spaceStore: n
                } = e, o = (0, i(533992).v3)(), l = (0, i(682985).K8)(() => {
                    let e = (0, i(216260).AI)();
                    return (0, i(449074).f)(e)
                }, []);
                (0, i(383953).l)(() => {
                    l || t.setState({ ...t.state,
                        inviteTargets: [],
                        inviteRole: "member"
                    })
                });
                let d = (0, i(682985).K8)(() => t.state.inviteRole, [t]),
                    u = (0, i(993077).U2)(n),
                    m = (0, i(682985).K8)(() => null == u ? void 0 : u.getModel(), [u]),
                    p = (0, s.useCallback)(e => {
                        i(929447).lf({
                            environment: o,
                            newRole: e,
                            permissionsInviteStore: t,
                            spaceStore: n
                        })
                    }, [o, t, n]);
                if (!m) return null;
                let c = (0, i(280096).BL)({
                    membershipType: d,
                    isRemovable: !1,
                    isCurrentUser: !1
                });
                return (0, a.jsx)(i(656252).A, {
                    popupType: i(182718).nl.Popup,
                    sameWidthAsOrigin: !0,
                    originGap: 8,
                    content: e => (0, a.jsx)(i(280096).kW, {
                        spaceStore: n,
                        spaceUser: m,
                        targetUserId: void 0,
                        isInvite: !0,
                        currentType: d,
                        parent: e,
                        onChange: p,
                        upgradeFrom: "sidebar_invite_people_button",
                        from: "inviteMembersModal"
                    }),
                    children: e => (0, a.jsx)(i(95582).A, { ...e,
                        right: (0, a.jsx)(i(16275).I, {
                            icon: i(87963).arrowChevronSingleDownIcon,
                            size: "xxs",
                            colorVariant: "tertiary",
                            style: r.chevron
                        }),
                        title: (0, a.jsx)(i(109939).sA, { ...c.label
                        }),
                        caption: (0, a.jsx)(i(109939).sA, { ...c.caption
                        }),
                        icon: (0, a.jsx)(i(708966).Q, {
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            iconGroup: c.icon,
                            variantName: "default"
                        }),
                        shouldWrapCaption: !0,
                        buttonStyle: r.button,
                        desktopIconStyle: r.icon,
                        focused: !1
                    })
                })
            }
            let o = function(e) {
                return (0, a.jsxs)(i(4458).VP, {
                    width: "100%",
                    gap: 8,
                    children: [(0, a.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: (0, a.jsx)(i(109939).sA, {
                            id: "spacePermissionsInviteRoleSection.label",
                            defaultMessage: "Select role"
                        })
                    }), (0, a.jsx)(n, { ...e
                    })]
                })
            }
        }
    }
]);