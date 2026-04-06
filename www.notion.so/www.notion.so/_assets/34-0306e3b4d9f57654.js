"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [34, 95737], {
        36663: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowChevronSingleDownFillIcon: () => n,
                iconDefinition: () => i
            }), s(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 6.72 12.56 7.16",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M9.38 13.619a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 0 0-1.237-1.238L10 11.763 5.218 6.98a.875.875 0 1 0-1.237 1.24z"
                    })
                },
                n = (0, s(104509).wt)("arrowChevronSingleDownFill", i, "fill")
        },
        96623: (e, t, s) => {
            s.d(t, {
                F: () => i
            });

            function i(e) {
                var t;
                return !!(null == (t = e.getSettings()) ? void 0 : t.disable_invite_link)
            }
        },
        143229: (e, t, s) => {
            s.d(t, {
                T: () => i
            });

            function i() {
                return !s(218744).default.checkGate({
                    gateName: "restricted_member_as_teamspace_owner_disabled"
                })
            }
        },
        178965: (e, t, s) => {
            s.d(t, {
                A: () => d
            }), s(898992), s(354520), s(581454), s(737550);
            var i = s(296540),
                n = s(474848);
            let a = {
                button: {
                    height: 32
                },
                multiButtonContainer: {
                    width: "100%",
                    paddingTop: 12,
                    display: "flex",
                    justifyContent: "space-between"
                },
                singleButtonContainer: {
                    width: "100%",
                    paddingTop: 12,
                    display: "flex",
                    justifyContent: "right"
                },
                containerLeftAligned: {
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    flexDirection: "column",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    width: "100%"
                },
                titleAndIcon: {
                    paddingBottom: 18,
                    alignItems: "center",
                    display: "flex"
                },
                addMembersTo: {
                    minWidth: "25%"
                },
                icon: {
                    paddingInlineEnd: 3,
                    paddingInlineStart: 3
                },
                teamName: {
                    paddingInlineEnd: 10,
                    fontWeight: s(699422).Wy.medium,
                    ...s(699422).RC,
                    maxWidth: 250
                },
                full: {
                    width: "100%"
                },
                inviteInput: {
                    zIndex: 1
                },
                submitTooltip: {
                    minWidth: 250
                },
                subtitle: {
                    paddingTop: 16,
                    position: "relative",
                    zIndex: -1
                },
                style0: {
                    minWidth: 80
                }
            };

            function o({
                isLoading: e,
                isNewlyCreatedTeam: t,
                onDismiss: i,
                onSubmit: r,
                inviteTargets: l,
                inviteRole: d,
                canEditSpaceMembership: c,
                membershipRequestsDisabled: u,
                restrictedMembersDisabled: p
            }) {
                let m = l.length > 0,
                    x = l.filter(e => (0, s(494341).yi)(e)).length,
                    g = (0, s(682985).K8)(() => l.some(s(494341).dV), [l]),
                    f = (0, s(682985).K8)(() => "owner" === d && !(0, s(143229).T)(), [d]),
                    b = g && (p || f),
                    h = x > 0 && u && !c || b;
                if (e) return (0, n.jsx)(s(912946).A, {
                    colorPalette: "blue",
                    style: { ...a.button,
                        ...a.style0
                    },
                    disabled: !0,
                    children: (0, n.jsx)(s(517334).k, {
                        onDarkBackground: !0
                    })
                });
                if (t && !m) return (0, n.jsx)(s(548436).A, {
                    size: "lg",
                    style: a.button,
                    onClick: i,
                    disabled: e,
                    children: (0, n.jsx)(s(109939).sA, {
                        id: "teamPermissionsInviteOverlay.inviteModal.skipForNow",
                        defaultMessage: "Skip for now"
                    })
                });
                let y = p ? (0, n.jsx)(s(109939).sA, {
                        id: "teamPermissionsInviteOverlay.inviteModal.addRestrictedMembers",
                        defaultMessage: "Cannot add restricted members as teamspace members. Remove them to continue."
                    }) : (0, n.jsx)(s(109939).sA, {
                        id: "teamPermissionsInviteOverlay.inviteModal.addRestrictedMembersAsOwner",
                        defaultMessage: "Cannot add restricted members as teamspace owners. Remove them or add them as members instead."
                    }),
                    v = b ? y : null;
                return (0, n.jsx)(s(51831).m, {
                    textWrap: !0,
                    style: a.submitTooltip,
                    disableTooltip: !v,
                    content: () => v,
                    children: t => (0, n.jsx)(s(912946).A, {
                        colorPalette: "blue",
                        style: a.button,
                        onClick: r,
                        disabled: !m || e || h,
                        ...t,
                        children: (0, n.jsx)(s(109939).sA, {
                            id: "teamPermissionsInviteOverlayV2.inviteButton.label",
                            defaultMessage: "Invite"
                        })
                    })
                })
            }

            function r({
                inviteTargets: e,
                workspaceName: t,
                canEditSpaceMembership: i,
                membershipRequestsDisabled: a,
                isFreeTier: o,
                inviteRole: l,
                restrictedMembersDisabled: d,
                restrictedMembersDisabledForTeam: c
            }) {
                let u = (0, s(682985).K8)(() => e.some(s(494341).dV), [e]),
                    p = (0, s(682985).K8)(() => (0, s(143229).T)(), []);
                if (void 0 === i || !e || 0 === e.length) return null;
                let m = e.filter(s(64273).eL).filter(s(494341).yi).map(e => e.value.email);
                if (u) {
                    if (d) return c ? (0, n.jsx)(s(324489).V, {
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        isSmall: !0,
                        children: (0, n.jsx)(s(109939).sA, {
                            id: "TeamPermissionsInviteOverlayV2.restrictedMembersDisabledForTeam.subtitle",
                            defaultMessage: "Restricted members cannot be added to this teamspace."
                        })
                    }) : (0, n.jsx)(s(324489).V, {
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        isSmall: !0,
                        children: (0, n.jsx)(s(109939).sA, {
                            id: "TeamPermissionsInviteOverlayV2.restrictedMembersDisabled.subtitle",
                            defaultMessage: "You do not have permission to add restricted members to this teamspace."
                        })
                    });
                    else if ("owner" === l && !p) return (0, n.jsx)(s(324489).V, {
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        isSmall: !0,
                        children: (0, n.jsx)(s(109939).sA, {
                            id: "TeamPermissionsInviteOverlayV2.restrictedMemberAsOwner.subtitle",
                            defaultMessage: "Restricted members cannot be added as teamspace owners."
                        })
                    })
                }
                if (!m || 0 === m.length) return null;
                let x = e => (0, n.jsx)("b", {
                        children: e
                    }),
                    g = t ? ? "this workspace";
                return i ? o ? (0, n.jsx)(s(324489).V, {
                    isSecondaryColor: !0,
                    isMultiline: !0,
                    isSmall: !0,
                    children: 1 === m.length ? (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.addSpaceMembershipSingularOwner.subtitle",
                        defaultMessage: "<b>{guestEmail}</b> will be added to {workspaceName} as a workspace owner.",
                        values: {
                            guestEmail: m[0],
                            workspaceName: g,
                            b: x
                        }
                    }) : (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.addSpaceMembershipPluralOwners.subtitle",
                        defaultMessage: "<b>{numberOfOtherEmails, plural, one {{firstGuest} and {secondGuest}} other {{firstGuest} and {numberOfOtherEmails} more}}</b> will be added to {workspaceName} as workspace owners.",
                        values: {
                            firstGuest: m[0],
                            secondGuest: m[1],
                            numberOfOtherEmails: m.length - 1,
                            workspaceName: g,
                            b: x
                        }
                    })
                }) : (0, n.jsx)(s(324489).V, {
                    isSecondaryColor: !0,
                    isMultiline: !0,
                    isSmall: !0,
                    children: 1 === m.length ? (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.addSpaceMembershipSingular.subtitle",
                        defaultMessage: "<b>{guestEmail}</b> will be added to {workspaceName} as a billed workspace member.",
                        values: {
                            guestEmail: m[0],
                            workspaceName: g,
                            b: x
                        }
                    }) : (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.addSpaceMembershipPlural.subtitle",
                        defaultMessage: "<b>{numberOfOtherEmails, plural, one {{firstGuest} and {secondGuest}} other {{firstGuest} and {numberOfOtherEmails} more}}</b> will be added to {workspaceName} as billed workspace members.",
                        values: {
                            firstGuest: m[0],
                            secondGuest: m[1],
                            numberOfOtherEmails: m.length - 1,
                            workspaceName: g,
                            b: x
                        }
                    })
                }) : a ? (0, n.jsx)(s(324489).V, {
                    isSecondaryColor: !0,
                    isMultiline: !0,
                    isSmall: !0,
                    children: (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.requestSpaceMembershipDisabled.subtitle",
                        defaultMessage: "You can’t add workspace guests to a teamspace. Ask your admin to add them as workspace members first."
                    })
                }) : (0, n.jsx)(s(324489).V, {
                    isSecondaryColor: !0,
                    isMultiline: !0,
                    isSmall: !0,
                    children: 1 === m.length ? (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.requestSpaceMembershipSingular.subtitle",
                        defaultMessage: "Request will be sent to your admin to add <b>{guestEmail}</b> as a member to {workspaceName}.",
                        values: {
                            guestEmail: m[0],
                            workspaceName: g,
                            b: x
                        }
                    }) : (0, n.jsx)(s(109939).sA, {
                        id: "TeamPermissionsInviteOverlayV2.requestSpaceMembershipPlural.subtitle",
                        defaultMessage: "Request will be sent to your admin to add <b>{numberOfOtherEmails, plural, one {{firstGuest} and {secondGuest}} other {{firstGuest} and {numberOfOtherEmails} more}}</b> as members to {workspaceName}.",
                        values: {
                            firstGuest: m[0],
                            secondGuest: m[1],
                            numberOfOtherEmails: m.length - 1,
                            workspaceName: g,
                            b: x
                        }
                    })
                })
            }

            function l(e) {
                let {
                    teamStore: t,
                    isSmall: i
                } = e, a = (0, s(533992).v3)(), o = async () => {
                    var e;
                    let [i, n] = await Promise.all([(0, s(161333).r)(), (0, s(969899).jd)()]);
                    n({
                        environment: a,
                        stringValue: (e = t.id, `${s(986939).A.domainBaseUrl}/team/${e}/join`),
                        copiedMessage: i.copiedLinkToClipboard
                    }), s(649807).lY(a, {
                        store: t
                    })
                }, r = (0, s(960253).I)(() => ({
                    button: {
                        marginInlineEnd: 5,
                        marginInlineStart: 5,
                        height: 32,
                        fontSize: i ? 12 : 14
                    }
                }), [i]);
                return (0, n.jsx)(s(988022).p, {
                    onClick: o,
                    iconLeading: i ? {
                        icon: s(748869).linkSmallIcon,
                        size: "sm"
                    } : s(588739).linkIcon,
                    style: r.button,
                    colorPalette: "blue",
                    children: i ? (0, n.jsx)(s(109939).sA, {
                        id: "teamPermissionsInviteOverlay.copyLinkCondensedButton.label",
                        defaultMessage: "Copy link"
                    }) : (0, n.jsx)(s(109939).sA, {
                        id: "teamPermissionsInviteOverlay.copyLinkButton.label",
                        defaultMessage: "Copy invite link"
                    })
                })
            }
            let d = function({
                teamStore: e,
                permissionsInviteStore: t,
                isNewlyCreatedTeam: d,
                onSubmitSuccessful: c,
                onDismiss: u
            }) {
                let p = (0, s(533992).v3)(),
                    {
                        teamName: m,
                        workspaceName: x,
                        canEditSpaceMembership: g,
                        membershipRequestsDisabled: f,
                        restrictedMembersDisabledForTeam: b
                    } = (0, s(682985).K8)(() => {
                        let t = s(728372).AppStoreSidebarSpaceStore.state;
                        return {
                            teamName: e.getName(),
                            workspaceName: null == t ? void 0 : t.getName(),
                            canEditSpaceMembership: null == t ? void 0 : t.canEditMembership(),
                            membershipRequestsDisabled: null == t ? void 0 : t.getDisableMembershipRequests(),
                            restrictedMembersDisabledForTeam: e.getDisableRestrictedMembers()
                        }
                    }, [e]),
                    h = (0, s(993077).U2)(),
                    y = (0, s(682985).K8)(() => {
                        if (b) return !0;
                        let t = e.getSpaceStore(),
                            i = null == h ? void 0 : h.getMembershipType();
                        return !t || !i || !(0, s(53502)._X)({
                            roleThatCanAddRestrictedMembersToTeamspaces: t.getSetting("roles_that_can_add_restricted_members_to_teamspaces"),
                            spaceUserRole: i,
                            isTeamOwner: e.canAdmin()
                        })
                    }, [e, h, b]);
                (0, i.useEffect)(() => () => {
                    d && (0, s(189498).L)({
                        environment: p,
                        teamStore: e,
                        shouldScroll: !0
                    })
                }, [d, e, p]);
                let [v, j] = (0, i.useState)(!1), S = (0, s(682985).K8)(() => t.state.inviteTargets, [t]), A = (0, s(682985).K8)(() => t.state.inviteTargets.length, [t]), M = (0, s(682985).K8)(() => t.state.inviteRole, [t]), k = (0, s(682985).K8)(() => s(216260).dL(), []), T = (0, s(682985).K8)(() => !k && !(0, s(96623).F)(e), [e, k]), C = async () => {
                    if (j(!0), A > 0) {
                        let i = t.state.inviteTargets,
                            {
                                success: a
                            } = await s(929447).l5({
                                environment: p,
                                targetStore: e,
                                permissionsInviteStore: t,
                                inviteOrigin: "team_invite_overlay"
                            });
                        if (void 0 !== g)
                            if (a) {
                                let t = (0, s(494341).c3)({
                                    inviteTargets: i,
                                    recordStore: e,
                                    canEditSpaceMembership: g
                                });
                                if (!t) return;
                                setTimeout(() => {
                                    s(436555).D6({
                                        label: t
                                    })
                                })
                            } else setTimeout(() => {
                                s(436555).D6({
                                    label: (0, n.jsx)(s(109939).sA, {
                                        id: "TeamPermissionsInviteOverlay.inviteMembersFailure.message",
                                        defaultMessage: "Failed to send invites"
                                    })
                                })
                            })
                    }
                    s(929447).Oo({
                        permissionsInviteStore: t
                    }), j(!1), null == c || c()
                };
                return (0, n.jsx)("div", {
                    className: s(828432).jnS,
                    style: a.full,
                    children: (0, n.jsxs)("div", {
                        style: a.containerLeftAligned,
                        children: [(0, n.jsxs)("div", {
                            style: a.titleAndIcon,
                            children: [(0, n.jsx)("div", {
                                style: a.addMembersTo,
                                children: (0, n.jsx)(s(109939).sA, {
                                    id: "TeamPermissionsInviteOverlayV2.membersTitle.label",
                                    defaultMessage: "Invite people to"
                                })
                            }), (0, n.jsx)("div", {
                                style: a.icon,
                                children: (0, n.jsx)(s(729746).x, {
                                    disabled: !0,
                                    store: e,
                                    size: 20
                                })
                            }), (0, n.jsx)(s(503473).j, {
                                style: a.teamName,
                                children: m
                            })]
                        }), (0, n.jsxs)("div", {
                            style: a.inviteInput,
                            children: [(0, n.jsx)(s(219210).XM, {
                                teamStore: e,
                                permissionsInviteStore: t,
                                onEmptySubmit: C
                            }), (0, n.jsx)("div", {
                                style: a.subtitle,
                                children: (0, n.jsx)(r, {
                                    inviteTargets: S,
                                    workspaceName: x,
                                    canEditSpaceMembership: g,
                                    membershipRequestsDisabled: f,
                                    restrictedMembersDisabled: y,
                                    restrictedMembersDisabledForTeam: b,
                                    isFreeTier: k,
                                    inviteRole: M
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            style: T ? a.multiButtonContainer : a.singleButtonContainer,
                            children: (0, n.jsxs)("div", {
                                style: T ? a.multiButtonContainer : {},
                                children: [T ? (0, n.jsx)(l, {
                                    teamStore: e
                                }) : void 0, (0, n.jsx)(o, {
                                    isLoading: v,
                                    onSubmit: C,
                                    onDismiss: () => {
                                        s(929447).Oo({
                                            permissionsInviteStore: t
                                        }), null == u || u()
                                    },
                                    isNewlyCreatedTeam: d,
                                    inviteTargets: S,
                                    inviteRole: M,
                                    canEditSpaceMembership: g,
                                    membershipRequestsDisabled: f,
                                    restrictedMembersDisabled: y
                                })]
                            })
                        })]
                    })
                })
            }
        },
        185495: (e, t, s) => {
            s.d(t, {
                O: () => i
            });

            function i() {
                let e = (0, s(585279).g)("stacked_business_trial"),
                    t = (0, s(585279).g)("business_reverse"),
                    i = (0, s(585279).g)("stacked_business_trial_14d");
                return !(0, s(682985).K8)(() => (0, s(832139).A)(), []) && (e || t || i)
            }
        },
        265456: (e, t, s) => {
            s.d(t, {
                Y: () => o
            });
            var i = s(296540),
                n = s(474848);
            let a = {
                position: "relative"
            };

            function o() {
                let e = (0, s(682985).O$)(s(45370).A);
                return e.open ? (0, n.jsx)(r, {
                    state: e
                }) : null
            }

            function r({
                state: e
            }) {
                var t;
                let [o, d] = i.useState(null), [c, u] = i.useState(""), [p, m] = i.useState(!1), x = (t = !!o, (0, s(960253).I)(() => ({
                    input: {
                        padding: "10px, 8px",
                        width: "100%",
                        height: 36,
                        background: s(632079).Tj.background.secondary,
                        borderRadius: 6,
                        border: `1px solid ${t?s(632079).Tj.red.border.strong:s(632079).Tj.border.primary}`,
                        ...t ? {
                            boxShadow: s(632079).Tj.inputRedFocusRing
                        } : {
                            boxShadow: "none"
                        }
                    }
                }), [t])), {
                    title: g,
                    message: f,
                    acceptLabel: b,
                    requiredInputValue: h,
                    content: y,
                    width: v,
                    secondStageModal: j
                } = e, S = i.useCallback(() => {
                    var e, t;
                    (e = h, t = c, 0 === l(e).localeCompare(l(t), void 0, {
                        sensitivity: "base",
                        usage: "search"
                    })) ? void 0 !== j ? m(!0) : s(509939).V({
                        didConfirm: !0
                    }): d((0, n.jsx)(s(109939).sA, {
                        id: "confirmDialogInput.incorrectInputError.message",
                        defaultMessage: "Please type “{requiredInputValue}” to continue",
                        values: {
                            requiredInputValue: h
                        }
                    }))
                }, [c, h, j]), A = i.useCallback(() => {
                    s(509939).V({
                        didConfirm: !0
                    })
                }, []);
                return (0, n.jsx)(s(833503).s, {
                    isOpen: !0,
                    onDismiss: () => s(509939).V({
                        didConfirm: !1
                    }),
                    areaConstraint: {
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        },
                        width: {
                            type: "fixed",
                            length: v ? ? 420
                        }
                    },
                    children: () => (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s(314084).t, {
                            showDismissButton: !1,
                            header: (0, n.jsx)(s(582471).Y, {
                                iconAndTitle: (0, n.jsx)(s(209590).Z, {
                                    iconGroup: s(940227).F,
                                    iconColorPalette: "red",
                                    iconColorVariant: "accentPrimary",
                                    title: g
                                }),
                                description: f
                            }),
                            footer: (0, n.jsx)(s(591637).a, {
                                layout: "vertical",
                                primaryButtons: [{
                                    buttonType: "destructive",
                                    label: b,
                                    onClick: S
                                }],
                                secondaryButtons: [{
                                    buttonType: "dismiss"
                                }]
                            }),
                            children: (0, n.jsxs)(s(4458).VP, {
                                gap: 12,
                                padding: 2,
                                className: "autolayout-fill-width",
                                style: a,
                                children: [y, (0, n.jsxs)(s(4458).VP, {
                                    gap: 4,
                                    style: a,
                                    children: [(0, n.jsx)(s(36481).p, {
                                        style: x.input,
                                        value: c,
                                        onChange: e => {
                                            d(void 0), u(e.target.value)
                                        },
                                        placeholder: h,
                                        onSubmit: S
                                    }), o ? (0, n.jsx)(s(111010).D, {
                                        styleKey: "captionRegular",
                                        colorPalette: "red",
                                        colorVariant: "accentPrimary",
                                        children: o
                                    }) : null]
                                })]
                            })
                        }), (0, n.jsx)(s(833503).s, {
                            isOpen: p,
                            onDismiss: () => m(!1),
                            areaConstraint: {
                                height: {
                                    type: "unlimited",
                                    scroll: "allow"
                                },
                                width: {
                                    type: "fixed",
                                    length: v ? ? 420
                                }
                            },
                            children: () => (0, n.jsx)(s(314084).t, {
                                showDismissButton: !1,
                                header: (0, n.jsx)(s(582471).Y, {
                                    iconAndTitle: (0, n.jsx)(s(209590).Z, {
                                        iconGroup: s(940227).F,
                                        iconColorPalette: "red",
                                        iconColorVariant: "accentPrimary",
                                        title: null == j ? void 0 : j.title
                                    }),
                                    description: null == j ? void 0 : j.message
                                }),
                                footer: (0, n.jsx)(s(591637).a, {
                                    layout: "vertical",
                                    primaryButtons: [{
                                        buttonType: "destructive",
                                        label: b,
                                        onClick: A
                                    }],
                                    secondaryButtons: [{
                                        buttonType: "dismiss"
                                    }]
                                })
                            })
                        })]
                    })
                })
            }

            function l(e) {
                return e.trim().replace(/\s+/g, " ")
            }
        },
        269929: (e, t, s) => {
            s.d(t, {
                q: () => i
            }), s(814603), s(147566), s(198721);

            function i(e) {
                let {
                    environment: t,
                    utmSource: i,
                    utmCampaign: n
                } = e, a = (0, s(427846)._)(t), o = (null == a ? void 0 : a.id) ? ? "", r = (null == a ? void 0 : a.getEmail()) ? ? "", l = (null == a ? void 0 : a.getName()) ? ? "", d = l, c = "", u = l.indexOf(" "); - 1 !== u && (d = l.slice(0, u), c = l.slice(u + 1));
                let p = new URLSearchParams;
                return p.set("User-ID", o), p.set("userId", o), p.set("email", r), p.set("firstName", d), p.set("lastName", c), p.set("utm_source", i), p.set("utm_campaign", n), `${s(168962).JZ.setupSessions}?${p.toString()}`
            }
        },
        272642: (e, t, s) => {
            s.d(t, {
                F: () => a
            }), s(296540);
            var i = s(474848);
            let n = {
                display: "inline-block",
                pointerEvents: "none"
            };

            function a(e) {
                let t, a = (0, s(533992).v3)(),
                    {
                        render: o,
                        spaceStore: r,
                        requireUpgradeToTier: l,
                        analyticsName: d,
                        renderUpgradeTooltip: c,
                        onUpgradeClick: u,
                        alwaysAllowClick: p,
                        tooltipPlacement: m,
                        upgradeButtonDesktopStyle: x,
                        upgradeButtonMobileStyle: g
                    } = e,
                    {
                        onClick: f,
                        renderTooltip: b
                    } = e;
                return l && (t = (0, i.jsx)(s(455319).u, {
                    subscriptionTier: l,
                    analyticsName: d,
                    desktopStyle: { ...n,
                        ...x
                    },
                    mobileStyle: { ...n,
                        ...g
                    },
                    spaceStore: r
                }), p || (f = e => {
                    s(907063).K(a, {
                        from: d,
                        upsell: {
                            type: "product",
                            product: l,
                            limit: {
                                type: "none"
                            },
                            trialability: "none"
                        },
                        spaceStore: r
                    }), u && u(e)
                }, b = c)), (0, i.jsx)(s(51831).m, {
                    content: b || (() => null),
                    disableTooltip: !b,
                    placement: m,
                    children: e => o((0, s(63390).A)(e, {
                        onClick: f
                    }), t)
                })
            }
        },
        277318: (e, t, s) => {
            s.r(t), s.d(t, {
                AccessLevelSection: () => C,
                SidebarCreateTeamModal: () => P,
                TeamDescriptionRow: () => v,
                TeamIconAndNameRow: () => A
            }), s(581454);
            var i = s(296540);
            let n = (0, s(109939).YK)({
                    teamspaceCreateTitle: {
                        id: "setupSessionsToast.teamspaceCreate.title",
                        defaultMessage: "Need help setting up your teamspace?"
                    },
                    teamspaceCreateSubtitle: {
                        id: "setupSessionsToast.teamspaceCreate.subtitle",
                        defaultMessage: "Book a free call with a Notion expert to get your team up and running."
                    },
                    teamspaceCreateCta: {
                        id: "setupSessionsToast.teamspaceCreate.cta",
                        defaultMessage: "Book a setup session"
                    }
                }),
                a = {
                    teamspace_create: {
                        title: n.teamspaceCreateTitle,
                        subtitle: n.teamspaceCreateSubtitle,
                        cta: n.teamspaceCreateCta
                    }
                },
                o = "setup-sessions-toast",
                r = {
                    teamspace_create: "setup_sessions_toast_teamspace_create"
                };

            function l(e) {
                try {
                    var t;
                    let i, n, {
                            from: l,
                            environment: d
                        } = e,
                        c = a[l];
                    if (!s(218744).default.checkGate({
                            gateName: r[l]
                        }) || (i = (0, s(904434).R$)(d), !(n = null == i ? void 0 : i.getSettings()) || "professional" !== n.domain_type || n.setup_session_booked || (null == (t = (0, s(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise" || 0)) return;
                    let u = s(962299).A.intl,
                        p = (0, s(269929).q)({
                            environment: d,
                            utmSource: l,
                            utmCampaign: "setup_sessions_toast"
                        });
                    s(819652).HK({
                        id: o,
                        title: u.formatMessage(c.title),
                        message: u.formatMessage(c.subtitle),
                        presentationType: "persistent",
                        actions: {
                            primary: {
                                title: u.formatMessage(c.cta),
                                onAction: () => {
                                    (0, s(357709).Y5)(d, {
                                        callout_key: "setup_sessions_toast",
                                        placement_key: "Toast",
                                        callout_metadata: {
                                            entry_point: l
                                        },
                                        click_type: "primary_cta"
                                    }), (0, s(624621).L)({
                                        environment: d,
                                        url: p
                                    }), s(819652).UW({
                                        id: o
                                    })
                                }
                            }
                        },
                        onUserDismiss: () => {
                            (0, s(357709).Sq)(d, {
                                callout_key: "setup_sessions_toast",
                                placement_key: "Toast",
                                callout_metadata: {
                                    entry_point: l
                                },
                                dismiss_type: "toast_dismiss"
                            })
                        }
                    }), (0, s(357709).DL)(d, {
                        callout_key: "setup_sessions_toast",
                        placement_key: "Toast",
                        callout_metadata: {
                            entry_point: l
                        }
                    })
                } catch (e) {
                    s(773352).log({
                        level: "error",
                        from: "maybeShowSetupSessionToast",
                        type: "failed_to_show_setup_session_toast",
                        error: (0, s(416607).convertErrorToLog)(e)
                    })
                }
            }

            function d({
                environment: e,
                from: t,
                teamStore: i
            }) {
                let {
                    state: n
                } = s(606047).A;
                if (s(649807).w_(e, {
                        screen: n.screen,
                        team_id: n.teamId,
                        team_has_icon: !!n.icon,
                        team_has_name: !!n.name,
                        team_has_description: !!n.description,
                        team_access_level: n.accessLevel,
                        flow_id: n.flowId,
                        from: t,
                        store: i
                    }), n.teamId) {
                    var a, o;
                    null == (a = (o = s(606047).A.state).onClose) || a.call(o, n.teamId)
                }
                s(606047).A.reset()
            }

            function c(e) {
                return (0, s(682985).K8)(() => {
                    let t = s(728372).AppStoreSidebarSpaceStore.state;
                    return (0, s(378352).k)({
                        spaceStore: t,
                        billingData: e
                    })
                }, [e])
            }
            var u = s(474848);
            let p = {
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                    width: "100%",
                    paddingTop: 22
                },
                m = {
                    marginInlineStart: 8
                },
                x = {
                    overflow: "hidden"
                };

            function g() {
                let e, t, n, a = (0, s(533992).v3)(),
                    o = (0, s(723240).r)(),
                    r = (0, s(972740).L)(),
                    l = (0, s(476743).a)(),
                    g = (0, s(345776).T)(),
                    b = (0, s(226309).lh)({
                        spaceId: o
                    }),
                    h = (0, s(682985).O$)(s(606047).A),
                    y = c(b),
                    v = (e = (0, s(682985).K8)(() => s(216260).El() && !s(606047).A.state.isDefault, []), t = s(606047).s.Team, n = s(606047).s.Members, e ? [t, n] : [t]),
                    {
                        screen: j,
                        pageNumber: S,
                        teamId: A
                    } = h,
                    M = "" === h.name || h.name.length > s(187374).Q || h.description.length > s(187374).z,
                    k = (0, i.useCallback)((e, t) => {
                        r && function(e) {
                            let {
                                pageOrder: t,
                                pageNumber: i,
                                teamId: n,
                                spaceStore: a,
                                environment: o,
                                from: r
                            } = e, l = i + 1;
                            if (l <= t.length) s(606047).A.update(e => ({ ...e,
                                loading: !1,
                                screen: t[l - 1],
                                pageNumber: l
                            }));
                            else if (n) {
                                let e = s(681735).h.createChildStore(a, {
                                    table: "team",
                                    id: n,
                                    spaceId: a.id
                                });
                                (0, s(189498).L)({
                                    environment: o,
                                    teamStore: e,
                                    shouldScroll: !0
                                }), d({
                                    environment: o,
                                    from: r,
                                    teamStore: e
                                })
                            }
                        }({
                            pageOrder: v,
                            pageNumber: S,
                            teamId: t || A,
                            spaceStore: r,
                            environment: a,
                            from: e
                        })
                    }, [r, a, S, v, A]),
                    T = s(381453).sg(async () => {
                        if (!r || !l || !g) return;
                        let e = A;
                        switch (j) {
                            case s(606047).s.Team:
                                e = await f({
                                    spaceStore: r,
                                    userId: g,
                                    environment: a,
                                    shouldShowZeroTeamsExperience: y,
                                    sidebarCreateTeamModalStoreState: h
                                });
                                break;
                            case s(606047).s.Members:
                                break;
                            default:
                                (0, s(722371).HB)(j)
                        }
                        e ? k("success", e) : s(606047).A.update(e => ({ ...e,
                            loading: !1
                        }))
                    }, 1e3, {
                        leading: !0,
                        trailing: !1
                    }),
                    C = (0, i.useCallback)(T, [T]);
                return (0, u.jsxs)("div", {
                    style: p,
                    children: [(0, u.jsx)(s(539819).A, {
                        containerStyle: x,
                        helpCenterLocation: "bestPractices",
                        analyticsFrom: "teams_learn_more_sidebar_create_team_modal"
                    }), (0, u.jsx)(s(4458).fI, {
                        inline: !0,
                        children: (0, u.jsx)(s(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            onClick: C,
                            disabled: M,
                            style: m,
                            children: (0, u.jsx)(s(109939).sA, {
                                id: "sidebarCreateTeamModal.footer.createTeam",
                                defaultMessage: "Create teamspace"
                            })
                        })
                    })]
                })
            }
            async function f({
                spaceStore: e,
                userId: t,
                environment: i,
                shouldShowZeroTeamsExperience: n,
                sidebarCreateTeamModalStoreState: a
            }) {
                let o, {
                        name: r,
                        description: l,
                        icon: d,
                        flowId: c,
                        accessLevel: u,
                        isDefault: p
                    } = a,
                    m = await (0, s(455205).getActiveTeamsMetadataForUserInSpace)({
                        userId: t,
                        spaceStore: e,
                        environment: i
                    });
                if (!await (0, s(505034).d$)({
                        teamName: r,
                        teamMetadata: m
                    }) || (s(606047).A.update(e => ({ ...e,
                        loading: !0
                    })), !(o = n ? await s(821969).oH({
                        environment: i,
                        name: r,
                        description: l,
                        icon: d,
                        flowId: c,
                        trackCreateTeamComplete: !0
                    }) : await s(821969).gj({
                        environment: i,
                        name: r,
                        description: l,
                        icon: d,
                        accessLevel: u,
                        isDefault: p,
                        flowId: c,
                        createTeamHome: !0
                    })))) return;
                let x = null == o ? void 0 : o.id;
                return s(606047).A.update(e => ({ ...e,
                    teamId: x
                })), x
            }
            let b = {
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    position: "relative",
                    padding: "22px 26px"
                },
                h = {
                    createTeamContainer: { ...b,
                        width: 480
                    },
                    addMembersContainer: { ...b,
                        width: 500
                    },
                    full: {
                        width: "100%"
                    },
                    iconNameContainer: {
                        display: "inline-flex",
                        width: "100%",
                        verticalAlign: "middle"
                    },
                    firstTeamHeaderContainer: {
                        borderStartStartRadius: 5,
                        borderStartEndRadius: 5,
                        background: s(632079).Tj.background.secondaryTranslucent,
                        boxShadow: `${s(632079).Tj.border.primaryTranslucent} 0 0 0 1px`
                    },
                    icon: {
                        marginInlineEnd: 8,
                        marginTop: 1
                    },
                    description: {
                        marginTop: 3,
                        marginBottom: 26
                    },
                    spinner: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: s(632079).Tj.modalUnderlayBackground,
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0
                    },
                    style0: {
                        position: "absolute",
                        top: "50%",
                        insetInlineStart: "50%"
                    },
                    openAccessMessage: {
                        fontSize: 13,
                        color: s(632079).Tj.text.secondary,
                        marginTop: 20,
                        lineHeight: 1.4,
                        display: "flex"
                    },
                    iconContainer: {
                        marginInlineEnd: 8
                    },
                    header: {
                        display: "flex",
                        padding: 14,
                        fontWeight: s(699422).Wy.medium
                    },
                    avatar: {
                        marginInlineStart: -4
                    },
                    message: {
                        paddingInlineStart: 14,
                        paddingInlineEnd: 14
                    },
                    closeButtonAbsolute: {
                        position: "absolute",
                        top: 14,
                        insetInlineEnd: 14,
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "100%",
                        background: s(632079).Tj.buttonHoveredBackground,
                        width: 20,
                        height: 20
                    },
                    closeButtonAbsoluteHover: {
                        background: s(632079).Tj.buttonPressedBackground
                    },
                    closeButtonInHeader: {
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "100%",
                        background: s(632079).Tj.buttonHoveredBackground,
                        width: 20,
                        height: 20,
                        padding: 4
                    },
                    closeButtonInHeaderHover: {
                        background: s(632079).Tj.buttonPressedBackground
                    },
                    modal: {
                        maxWidth: 500,
                        borderRadius: 5,
                        overflow: "visible"
                    },
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        userSelect: "none",
                        WebkitUserSelect: "none"
                    },
                    style1: {
                        height: "100%"
                    },
                    style2: {
                        fontSize: 18,
                        fontWeight: s(699422).Wy.semibold
                    }
                },
                y = (0, s(109939).YK)({
                    teamNamePlaceholder: {
                        id: "sidebarCreateTeamModal.teamScreen.namePlaceholder",
                        defaultMessage: "Acme Labs"
                    },
                    teamDescriptionPlaceholder: {
                        id: "sidebarCreateTeamModal.teamScreen.descriptionPlaceholder",
                        defaultMessage: "Details about your teamspace"
                    }
                });

            function v({
                hasMarginTop: e = !0
            }) {
                let t = (0, s(109939).tz)(),
                    {
                        description: i,
                        isDescriptionTooLong: n
                    } = (0, s(682985).K8)(() => {
                        let e = s(606047).A.state.description,
                            t = e.length > s(187374).z;
                        return {
                            description: e,
                            isDescriptionTooLong: t
                        }
                    }, []),
                    a = t.formatMessage(s(426356).q.team_description_too_long, {
                        maxTeamDescriptionLength: s(187374).z
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(s(111010).D, {
                        as: "label",
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        style: {
                            display: "block",
                            marginBottom: 4,
                            ...e && {
                                marginTop: 14
                            }
                        },
                        children: (0, u.jsx)(s(109939).sA, {
                            id: "sidebarCreateTeamModal.teamScreen.teamDescriptionLabel",
                            defaultMessage: "Description"
                        })
                    }), (0, u.jsxs)(s(4458).VP, {
                        gap: 4,
                        flexGrow: 1,
                        children: [(0, u.jsx)(s(36481).p, {
                            value: i,
                            placeholder: t.formatMessage(y.teamDescriptionPlaceholder),
                            textarea: !0,
                            onChange: e => {
                                s(606047).A.update(t => ({ ...t,
                                    description: e.target.value
                                }))
                            },
                            errorOutline: n
                        }), n ? (0, u.jsx)(s(837624).R, {
                            id: "team-description-too-long",
                            error: a
                        }) : void 0]
                    })]
                })
            }

            function j(e) {
                return (0, u.jsx)("div", {
                    id: e.titleAriaId,
                    style: h.style2,
                    children: (() => {
                        switch (e.screen) {
                            case s(606047).s.Team:
                                return (0, u.jsx)(s(109939).sA, {
                                    id: "sidebarCreateTeamModal.teamTitle.label",
                                    defaultMessage: "Create a new teamspace"
                                });
                            case s(606047).s.Members:
                                return (0, u.jsx)(s(109939).sA, {
                                    id: "sidebarCreateTeamModal.membersTitle.label",
                                    defaultMessage: "Add people"
                                });
                            default:
                                (0, s(722371).HB)(e.screen)
                        }
                    })()
                })
            }

            function S(e) {
                let t = (0, s(533992).v3)(),
                    {
                        screen: n,
                        teamId: a
                    } = (0, s(682985).K8)(() => {
                        let {
                            screen: e,
                            teamId: t
                        } = s(606047).A.state;
                        return {
                            screen: e,
                            teamId: t
                        }
                    }, []),
                    o = (0, i.useCallback)((e, s) => {
                        l({
                            environment: t,
                            from: "teamspace_create"
                        }), d({
                            environment: t,
                            from: s,
                            teamStore: e
                        })
                    }, [t]);
                switch (n) {
                    case s(606047).s.Team:
                        return (0, u.jsx)(k, {
                            titleAriaId: e.titleAriaId,
                            descriptionAriaId: e.descriptionAriaId,
                            parentSpaceStore: e.parentSpaceStore
                        });
                    case s(606047).s.Members:
                        if (!a) return null;
                        return (0, u.jsx)(I, {
                            teamId: a,
                            onCompleted: e => {
                                o(e, "success")
                            },
                            onCanceled: e => {
                                o(e, "dismiss_button")
                            }
                        });
                    default:
                        (0, s(722371).HB)(n)
                }
            }

            function A({
                parentSpaceStore: e,
                hasMarginTop: t = !0,
                inputStyles: i
            }) {
                let n = (0, s(109939).tz)(),
                    {
                        spaceId: a,
                        spaceStore: o
                    } = (0, s(682985).K8)(() => {
                        let t = e ? ? (0, s(328765).S)();
                        return {
                            spaceId: null == t ? void 0 : t.id,
                            spaceStore: t
                        }
                    }, [e]),
                    {
                        icon: r,
                        name: l,
                        nameTooLong: d
                    } = (0, s(682985).K8)(() => {
                        let {
                            icon: e,
                            name: t
                        } = s(606047).A.state, i = t.length > s(187374).Q;
                        return {
                            icon: e,
                            name: t,
                            nameTooLong: i
                        }
                    }, []),
                    c = n.formatMessage(s(426356).q.team_name_too_long, {
                        maxTeamNameLength: s(187374).Q
                    });
                if (!o) return null;
                let p = r && a ? {
                    icon: r,
                    pointer: (0, s(213003).n2)(a)
                } : void 0;
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(s(111010).D, {
                        as: "label",
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        style: {
                            display: "block",
                            marginBottom: 4,
                            ...t && {
                                marginTop: 14
                            }
                        },
                        children: (0, u.jsx)(s(109939).sA, {
                            id: "sidebarCreateTeamModal.teamScreen.teamNameLabel",
                            defaultMessage: "Icon & name"
                        })
                    }), (0, u.jsxs)("div", {
                        style: h.iconNameContainer,
                        children: [(0, u.jsx)(s(729746).x, {
                            icon: p,
                            size: 26,
                            style: h.icon,
                            onChange: e => {
                                s(606047).A.update(t => ({ ...t,
                                    icon: e
                                }))
                            },
                            iconLoggingData: {
                                recordTable: "team",
                                source: "team_creation"
                            },
                            parentSpaceStore: e
                        }), (0, u.jsxs)(s(4458).VP, {
                            gap: 4,
                            flexGrow: 1,
                            children: [(0, u.jsx)(s(36481).p, {
                                style: i,
                                value: l,
                                placeholder: n.formatMessage(y.teamNamePlaceholder),
                                onChange: e => {
                                    s(606047).A.update(t => ({ ...t,
                                        name: e.target.value
                                    }))
                                },
                                preventSafariAutofill: !0
                            }), d ? (0, u.jsx)(s(837624).R, {
                                id: "team-name-too-long",
                                error: c
                            }) : void 0]
                        })]
                    })]
                })
            }

            function M(e) {
                return (0, u.jsx)(s(324489).V, {
                    id: e.descriptionAriaId,
                    isMultiline: !0,
                    isSmall: !0,
                    isSecondaryColor: !0,
                    style: h.description,
                    children: (() => {
                        switch (e.screen) {
                            case s(606047).s.Team:
                                return (0, u.jsx)(s(109939).sA, {
                                    id: "sidebarCreateTeamModal.teamDescription.label",
                                    defaultMessage: "Teamspaces are where your team organizes pages, permissions, and members"
                                });
                            case s(606047).s.Members:
                                return null;
                            default:
                                (0, s(722371).HB)(e.screen)
                        }
                    })()
                })
            }

            function k(e) {
                let t = (0, s(533992).v3)(),
                    {
                        open: n,
                        from: a,
                        flowId: o
                    } = (0, s(682985).K8)(() => {
                        let e = s(606047).A.state;
                        return {
                            open: e.open,
                            from: e.open ? e.from : void 0,
                            flowId: e.flowId
                        }
                    }, []);
                return (0, i.useEffect)(() => {
                    n && a && s(649807).H8(t, {
                        from: a,
                        flowId: o
                    })
                }, []), (0, u.jsxs)("div", {
                    style: h.createTeamContainer,
                    children: [(0, u.jsx)(j, {
                        titleAriaId: e.titleAriaId,
                        screen: s(606047).s.Team
                    }), (0, u.jsx)(M, {
                        descriptionAriaId: e.descriptionAriaId,
                        screen: s(606047).s.Team
                    }), (0, u.jsxs)("div", {
                        style: h.full,
                        children: [(0, u.jsx)(A, {
                            parentSpaceStore: e.parentSpaceStore
                        }), (0, u.jsx)(v, {}), (0, u.jsx)(C, {
                            parentSpaceStore: e.parentSpaceStore
                        })]
                    }), (0, u.jsx)(g, {})]
                })
            }

            function T() {
                return (0, s(682985).K8)(() => s(606047).A.state.loading, []) ? (0, u.jsx)("div", {
                    style: h.spinner,
                    children: (0, u.jsx)(s(517334).k, {
                        style: h.style0
                    })
                }) : null
            }

            function C({
                parentSpaceStore: e,
                hasMarginTop: t = !0
            }) {
                let i = c((0, s(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    })),
                    n = (0, s(533992).v3)(),
                    a = (0, s(682985).K8)(() => {
                        let t = e ? ? (0, s(328765).S)();
                        return t ? (0, s(742197).G)(n, t) : "this workspace"
                    }, [n, e]),
                    {
                        accessLevel: o,
                        isDefault: r
                    } = (0, s(682985).K8)(() => {
                        let {
                            accessLevel: e,
                            isDefault: t
                        } = s(606047).A.state;
                        return {
                            accessLevel: e,
                            isDefault: t
                        }
                    }, []);
                return i ? (0, u.jsxs)("div", {
                    style: h.openAccessMessage,
                    children: [(0, u.jsx)("div", {
                        style: h.iconContainer,
                        children: (0, u.jsx)(s(16275).I, {
                            icon: s(767816).teamspaceIcon,
                            size: "lg",
                            colorVariant: "secondary"
                        })
                    }), (0, u.jsx)(s(109939).sA, {
                        id: "sidebarCreateTeamModal.teamScreen.openAccessLabel",
                        defaultMessage: "Everyone at {spaceName} and new members will have access to this teamspace",
                        values: {
                            spaceName: a
                        }
                    })]
                }) : (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(s(111010).D, {
                        as: "label",
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        style: {
                            display: "block",
                            marginBottom: 4,
                            ...t && {
                                marginTop: 14
                            }
                        },
                        children: (0, u.jsx)(s(109939).sA, {
                            id: "sidebarCreateTeamModal.teamScreen.permissionsLabel",
                            defaultMessage: "Permissions"
                        })
                    }), (0, u.jsx)(s(898929).u, {
                        currentAccessLevel: o,
                        currentIsDefault: r,
                        onChange: (e, t) => {
                            t ? s(606047).A.update(e => ({ ...e,
                                accessLevel: "open",
                                isDefault: t
                            })) : s(606047).A.update(s => ({ ...s,
                                accessLevel: e,
                                isDefault: t
                            }))
                        },
                        parentSpaceStore: e
                    })]
                })
            }

            function I(e) {
                let t = (0, s(533992).v3)(),
                    i = (0, s(682985).uB)(void 0, s(152880).S);
                (0, s(682985).K8)(() => {
                    let {
                        defaultInviteTargets: e,
                        flowId: t
                    } = s(606047).A.state;
                    i.setState({ ...i.state,
                        flowId: t
                    }), e && i.setState({ ...i.state,
                        inviteTargets: e
                    })
                }, [i]);
                let n = (0, s(682985).K8)(() => e.parentSpaceStore ? ? (0, s(328765).S)(), [e.parentSpaceStore]);
                if (!n) return null;
                let a = s(681735).h.createChildStore(n, {
                    table: "team",
                    id: e.teamId,
                    spaceId: n.id
                });
                return (0, u.jsx)("div", {
                    style: h.full,
                    children: (0, u.jsx)("div", {
                        style: h.addMembersContainer,
                        children: (0, u.jsx)(s(178965).A, {
                            teamStore: a,
                            permissionsInviteStore: i,
                            isNewlyCreatedTeam: !0,
                            onSubmitSuccessful: () => {
                                e.onCompleted(a), (0, s(189498).L)({
                                    environment: t,
                                    teamStore: a,
                                    shouldScroll: !0
                                })
                            },
                            onDismiss: () => {
                                e.onCanceled(a)
                            }
                        })
                    })
                })
            }
            let w = [s(896221).A.images.avatars.avatar1Png, s(896221).A.images.avatars.avatar2Png, s(896221).A.images.avatars.avatar3Png];

            function _({
                handleModalClose: e
            }) {
                return (0, u.jsx)("div", {
                    style: h.firstTeamHeaderContainer,
                    children: (0, u.jsxs)("div", {
                        style: h.header,
                        children: [(0, u.jsx)(s(4458).fI, {
                            width: "100",
                            marginInlineStart: 4,
                            alignSelf: "center",
                            children: w.map((e, t) => (0, u.jsx)(s(321753).A, {
                                avatarShouldShowShadow: !0,
                                style: h.avatar,
                                size: 28,
                                avatar: {
                                    avatarUrl: e
                                }
                            }, t))
                        }), (0, u.jsx)(s(324489).V, {
                            style: h.message,
                            isMultiline: !0,
                            isSmall: !0,
                            children: (0, u.jsx)(s(109939).sA, {
                                id: "sidebarCreateTeamModal.teamScreen.firstTeamHeader",
                                defaultMessage: "Create your first teamspace to start using Notion with your teammates"
                            })
                        }), (0, u.jsx)(s(64960).Ay, {
                            onClick: e,
                            style: h.closeButtonInHeader,
                            hoveredStyle: h.closeButtonInHeaderHover,
                            children: (0, u.jsx)(s(16275).I, {
                                icon: s(25094).xMarkSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            })
                        })]
                    })
                })
            }

            function P(e) {
                let t = (0, s(533992).v3)(),
                    n = (0, i.useId)(),
                    a = (0, i.useId)(),
                    {
                        open: o,
                        loading: r,
                        screen: p
                    } = (0, s(682985).K8)(() => {
                        let {
                            open: e,
                            loading: t,
                            screen: i
                        } = s(606047).A.state;
                        return {
                            open: e,
                            loading: t,
                            screen: i
                        }
                    }, []),
                    m = (0, i.useCallback)(e => {
                        p === s(606047).s.Members && l({
                            environment: t,
                            from: "teamspace_create"
                        }), d({
                            environment: t,
                            from: e
                        })
                    }, [t, p]),
                    x = (0, s(682985).K8)(() => (null == e ? void 0 : e.parentSpaceStore) ? ? (0, s(328765).S)(), [null == e ? void 0 : e.parentSpaceStore]),
                    g = c((0, s(226309).lh)({
                        spaceId: null == x ? void 0 : x.id
                    })),
                    f = (0, i.useRef)(g);
                return ((0, i.useEffect)(() => {
                    r || (f.current = g && p === s(606047).s.Team)
                }, [r, p, g]), o) ? (0, u.jsx)(s(556809).a, {
                    ariaLabelledBy: n,
                    ariaDescribedBy: a,
                    open: o,
                    innerStyle: h.modal,
                    onDismiss: () => {
                        m("modal")
                    },
                    children: (0, u.jsxs)("div", {
                        style: h.style1,
                        children: [s(986939).A.isMobile ? void 0 : f.current ? (0, u.jsx)(_, {
                            handleModalClose: () => {
                                m("close_button")
                            }
                        }) : (0, u.jsx)(s(64960).Ay, {
                            onClick: () => {
                                m("close_button")
                            },
                            style: h.closeButtonAbsolute,
                            hoveredStyle: h.closeButtonAbsoluteHover,
                            children: (0, u.jsx)(s(16275).I, {
                                icon: s(25094).xMarkSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            })
                        }), (0, u.jsx)("div", {
                            style: h.wrapper,
                            children: (0, u.jsx)(s(369064).N, {
                                debugName: "SidebarCreateTeamModal",
                                capture: !0,
                                onBackspace: s(763230).D_,
                                onLeft: s(763230).D_,
                                onRight: s(763230).D_,
                                onSelectAll: s(763230).D_,
                                onRedo: s(763230).D_,
                                onUndo: s(763230).D_,
                                onCut: s(763230).D_,
                                onCopy: s(763230).D_,
                                onPaste: s(763230).D_,
                                onKeypress: s(763230).D_,
                                onDelete: s(763230).D_,
                                onTab: s(763230).D_,
                                children: (0, u.jsx)(S, {
                                    titleAriaId: n,
                                    descriptionAriaId: a,
                                    parentSpaceStore: x
                                })
                            })
                        }), (0, u.jsx)(T, {})]
                    })
                }) : null
            }
        },
        336613: (e, t, s) => {
            let i, n;

            function a(e) {
                i = e
            }

            function o(e) {
                n = e
            }

            function r() {
                if (!i) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return i
            }
            async function l() {
                if (!n) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return n()
            }
            s.d(t, {
                N7: () => l,
                NK: () => a,
                NS: () => o,
                XC: () => r
            }), s(16280)
        },
        378352: (e, t, s) => {
            s.d(t, {
                k: () => i
            });

            function i(e) {
                let {
                    spaceStore: t,
                    billingData: i
                } = e;
                return !!t && !s(986939).A.isMobile && !t.isTeamsEnabled() && !(0, s(192159).et)(i) && (0, s(128729).p)(t)
            }
        },
        454860: (e, t, s) => {
            s.d(t, {
                C: () => p,
                A: () => m
            }), s(898992), s(354520), s(581454);
            var i, n = s(296540);
            s(18107), s(967357);
            var a = s(474848);
            let o = {
                    width: 250,
                    maxHeight: "40vh"
                },
                r = {
                    maxHeight: "20vh"
                },
                l = function({
                    labelText: e,
                    value: t,
                    renderResultMenuItem: i,
                    onConfirm: r,
                    items: l,
                    performRequest: d,
                    onDismiss: p,
                    onChange: m,
                    renderToken: x,
                    onRemove: g,
                    onClear: f,
                    disabled: b
                }) {
                    var h, y, v, j, S, A, M, k, T, C;
                    let I = (0, s(682985).uB)(void 0, s(419110).$),
                        w = (0, s(682985).uB)(void 0, s(519156).A),
                        [_, P] = (0, s(739271).s)(),
                        B = (0, n.useCallback)((s, n, o) => (0, a.jsx)(u, {
                            error: s,
                            data: n,
                            ready: o,
                            labelText: e,
                            value: t,
                            renderResultMenuItem: i,
                            onConfirm: r,
                            menuListStore: I,
                            comboboxProps: P
                        }), [e, t, i, r, I, P]);
                    return (0, a.jsx)(s(747369).A, { ...(h = p, y = e, v = t, j = l, S = m, A = x, M = g, k = f, T = b, C = _, s(986939).A.isMobile ? {
                            menuType: s(649476).gu.Modal,
                            title: y.title,
                            right: (0, a.jsx)(s(109939).sA, { ...s(789722).W.done
                            }),
                            onClickRight: h,
                            header: (0, a.jsx)(c, {
                                labelText: y,
                                value: v,
                                items: j,
                                disabled: T,
                                onChange: S,
                                renderToken: A,
                                onRemove: M,
                                onClear: k,
                                inputComboboxProps: C
                            })
                        } : {
                            menuType: s(649476).gu.Popup,
                            onClickOutside: h,
                            header: (0, a.jsx)(c, {
                                labelText: y,
                                value: v,
                                items: j,
                                disabled: T,
                                onChange: S,
                                renderToken: A,
                                onRemove: M,
                                onClear: k,
                                inputComboboxProps: C
                            }),
                            ...o
                        }),
                        children: (0, a.jsx)(s(814255).A, {
                            debounce: 100,
                            requestStore: w,
                            request: {
                                query: t,
                                current: l
                            },
                            performRequest: d,
                            render: B
                        })
                    })
                },
                d = {
                    padding: "4px 8px"
                };

            function c({
                labelText: e,
                value: t,
                items: i,
                disabled: n,
                onChange: o,
                renderToken: l,
                onRemove: u,
                onClear: p,
                inputComboboxProps: m
            }) {
                let x = i.map(e => l(e, {
                    onRemove: () => u(e)
                }));
                return (0, a.jsx)(s(844565).A, {
                    isInput: !0,
                    children: (0, a.jsx)("div", {
                        style: d,
                        children: (0, a.jsx)(s(160319).Ay, {
                            focus: !s(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            format: s(160319).le.FilterValue,
                            tokens: x,
                            placeholder: e.tokenInputPlaceholder,
                            onRemoveLastToken: () => {
                                let e;
                                (e = i.at(-1)) && u(e)
                            },
                            onClearButtonClick: p,
                            value: t,
                            onChange: o,
                            showClearButton: !0,
                            disabled: !!n,
                            style: r,
                            ...m
                        })
                    })
                })
            }

            function u({
                error: e,
                data: t,
                ready: i,
                labelText: o,
                value: r,
                renderResultMenuItem: l,
                onConfirm: d,
                menuListStore: c,
                comboboxProps: p
            }) {
                let m = (0, s(682985).uB)(c, s(419110).$),
                    x = (0, n.useCallback)(e => (0, a.jsx)(s(844565).A, { ...e,
                        title: o.resultSectionTitle,
                        loading: !i
                    }), [o, i]);
                if (e) return s(773352).log({
                    level: "error",
                    from: o.componentDebugName,
                    type: "requestFailed",
                    error: (0, s(416607).convertErrorToLog)(e),
                    data: {
                        miscDataToConvertToString: {
                            query: r
                        }
                    }
                }), (0, a.jsx)(x, {
                    children: (0, a.jsx)(s(498341).u, {
                        title: (0, a.jsx)(s(109939).sA, {
                            defaultMessage: "Something went wrong.",
                            id: "search.inputMenu.errorMessage"
                        })
                    })
                });
                if (!t) return (0, a.jsx)(x, {
                    children: (0, a.jsx)(s(498341).u, {
                        title: (0, a.jsx)(s(109939).sA, {
                            defaultMessage: "Loading…",
                            id: "search.inputMenu.loading.message"
                        })
                    })
                });
                if (t && 0 === t.length) return (0, a.jsx)(x, {
                    children: (0, a.jsx)(s(498341).u, {
                        title: (0, a.jsx)(s(109939).sA, {
                            defaultMessage: "No results found",
                            id: "search.inputMenu.noResults.message"
                        })
                    })
                });
                let g = {
                    key: "results",
                    items: t.map(e => ({
                        key: e,
                        action: () => d(e),
                        render: t => l(e, t)
                    })),
                    render: x
                };
                return (0, a.jsx)(s(558045).A, {
                    type: s(558045).O.Vertical,
                    store: m,
                    initialFocus: 0,
                    sections: [g],
                    comboboxProps: p
                })
            }
            let p = ((i = {}).Button = "Button", i.Section = "Section", i.Pill = "Pill", i);

            function m(e) {
                let {
                    items: t,
                    keepInputOnItemConfirm: i,
                    mode: o,
                    onChange: r,
                    onMenuDismiss: l,
                    onMenuOpen: d,
                    autoOpen: c
                } = e, u = (0, n.useRef)(), m = (0, n.useRef)(null), [x, g] = (0, n.useState)(!1), [b, h] = (0, n.useState)(""), [y, v] = (0, n.useState)(void 0), [j, A] = (0, n.useState)(void 0), M = (0, n.useCallback)((e, t) => {
                    u.current = requestAnimationFrame(e => {
                        if (m && m.current && (A(m.current.getBoundingClientRect()), t)) {
                            let {
                                shouldOpenMenu: e,
                                nextIndexToReplace: s
                            } = t;
                            e && (g(!0), v(s))
                        }
                    })
                }, [m]);
                (0, n.useEffect)(() => (window.addEventListener("resize", M), () => {
                    window.removeEventListener("resize", M), u.current && (cancelAnimationFrame(u.current), u.current = void 0)
                }), [M]);
                let k = (0, n.useCallback)(e => {
                        null == d || d(), M(void 0, {
                            shouldOpenMenu: !0,
                            nextIndexToReplace: e
                        })
                    }, [d, M]),
                    T = (0, n.useCallback)(() => {
                        g(!0)
                    }, []),
                    C = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    !c || x || C.current || (s(986939).A.isMobile ? T() : k(), C.current = !0)
                }, [c, x, k, T]);
                let I = t.length;

                function w(e) {
                    P(), g(!1), v(void 0), null == l || l(e)
                }

                function _(e) {
                    h(e.target.value)
                }

                function P() {
                    h("")
                }

                function B() {
                    r([])
                }
                let O = (0, n.useCallback)(e => {
                        r(t.filter(t => t !== e))
                    }, [t, r]),
                    F = (0, n.useCallback)(e => {
                        if ("number" == typeof y && y < t.length) r(t.slice(0, y).concat(e, t.slice(y + 1)));
                        else if (t.includes(e) && p.Pill) O(e);
                        else {
                            let i = t.concat(e);
                            r(s(381453).sb(i))
                        }
                        i || P()
                    }, [O, y, t, i, r]);
                return (0, n.useEffect)(() => {
                    M()
                }, [I, o, M]), s(986939).A.isMobile ? (0, a.jsx)(S, {
                    inputTemporaryValue: b,
                    isMenuOpen: x,
                    onClearInput: P,
                    onClearItems: B,
                    onItemConfirm: F,
                    onMenuClose: w,
                    onMenuInputChange: _,
                    onMenuOpen: T,
                    onRemove: O,
                    searchTokenFilterProps: e
                }) : (0, a.jsx)(f, {
                    hasItemsSelected: o === p.Pill && e.hasItemsSelected,
                    inputTemporaryValue: b,
                    isMenuOpen: x,
                    onClearInput: P,
                    onClearItems: B,
                    onItemConfirm: F,
                    onMenuClose: w,
                    onMenuInputChange: _,
                    onMenuOpen: k,
                    onRemove: O,
                    popupOriginRect: j,
                    ref: m,
                    searchTokenFilterProps: e
                })
            }

            function x() {
                return {
                    buttonMenuItem: {
                        color: s(632079).Tj.text.secondary
                    },
                    appendListItemButton: {
                        color: s(632079).Tj.text.tertiary
                    }
                }
            }

            function g(e) {
                return {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: s(986939).A.isMobile ? 12 : 4,
                        paddingBottom: s(986939).A.isMobile ? 12 : 4
                    },
                    menuItemWrapper: {
                        display: "flex"
                    },
                    sectionMenuItem: {
                        display: "flex"
                    },
                    appendListItemButton: {
                        minHeight: "initial",
                        paddingTop: 4,
                        paddingBottom: 4,
                        fontSize: s(418676).vQ
                    },
                    icon: {
                        marginInlineEnd: "Pill" === e ? 6 : -2
                    },
                    iconSmall: {
                        height: 12,
                        width: 12
                    },
                    summary: {
                        display: "inline"
                    },
                    summaryItem: {
                        display: "inline"
                    }
                }
            }
            let f = (0, n.forwardRef)(function(e, t) {
                let {
                    hasItemsSelected: i,
                    inputTemporaryValue: o,
                    isMenuOpen: r,
                    onClearInput: l,
                    onClearItems: d,
                    onItemConfirm: c,
                    onMenuClose: u,
                    onMenuInputChange: m,
                    onMenuOpen: x,
                    onRemove: f,
                    popupOriginRect: j,
                    searchTokenFilterProps: S
                } = e, {
                    addItemLabel: A,
                    disabled: k,
                    focused: T,
                    icon: C,
                    items: I,
                    mode: w,
                    renderFilter: _,
                    title: P
                } = S, B = k || r, O = (0, n.useMemo)(() => ({
                    open: r,
                    ariaPopupType: "listbox"
                }), [r]), F = (0, n.useCallback)(() => {
                    x()
                }, [x]);
                return (0, a.jsxs)(s(543588).A, {
                    title: w === p.Section ? P : void 0,
                    marginAfter: w === p.Section,
                    style: g(w).sectionMenuItem,
                    children: [w !== p.Pill ? (0, a.jsx)(b, {
                        disableFilters: B,
                        items: I,
                        onClick: x,
                        onRemove: f,
                        renderFilter: _
                    }) : void 0, (0, a.jsx)(s(660343).k.Provider, {
                        value: O,
                        children: w === p.Section ? (0, a.jsx)(h, {
                            addItemLabel: A,
                            disabled: k,
                            isMenuOpen: r,
                            mode: w,
                            onClick: F,
                            ref: t
                        }) : w === p.Button ? (0, a.jsx)(y, {
                            disabled: k,
                            focused: T,
                            icon: C,
                            isMenuOpen: r,
                            mode: w,
                            onClick: F,
                            ref: t,
                            title: P
                        }) : w === p.Pill ? (0, a.jsx)(v, {
                            disabled: k,
                            hasItemsSelected: i,
                            icon: C,
                            onClick: F,
                            ref: t,
                            title: P
                        }) : void(0, s(722371).HB)(w)
                    }), (0, a.jsx)(s(182718).zD, {
                        alignmentToOrigin: "start",
                        keepFocus: !0,
                        onDismiss: u,
                        open: r,
                        originRect: j,
                        placementToOrigin: "bottom",
                        popupType: s(423291).n.Popup,
                        preventScaleTransition: !0,
                        content: () => (0, a.jsx)(M, {
                            searchTokenFilterProps: S,
                            inputTemporaryValue: o,
                            onMenuInputChange: m,
                            onClearInput: l,
                            onClearItems: d,
                            onItemConfirm: c,
                            onMenuClose: u,
                            onRemove: f
                        }),
                        trapFocus: !0
                    })]
                })
            });

            function b(e) {
                let {
                    disableFilters: t,
                    items: i,
                    onClick: o,
                    onRemove: r,
                    renderFilter: l
                } = e, d = (0, n.useMemo)(() => i.map((e, s) => (0, a.jsx)("li", {
                    children: l(e, {
                        disabled: t,
                        onClick: () => o(s),
                        onRemove: () => r(e)
                    })
                }, `${e}_${s}`)), [t, i, o, r, l]);
                return (0, a.jsx)("ul", {
                    style: s(418676).$t,
                    children: d
                })
            }
            let h = (0, n.forwardRef)(function(e, t) {
                    let {
                        addItemLabel: i,
                        disabled: n,
                        isMenuOpen: o,
                        mode: r,
                        onClick: l
                    } = e, d = g(r), c = (0, s(960253).I)(x, [x]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: t,
                            style: d.menuItemWrapper
                        }), (0, a.jsx)(s(95582).A, {
                            disabled: n || o,
                            focused: !1,
                            icon: (0, a.jsx)(s(16275).I, {
                                icon: s(550246).plusFillSmallIcon,
                                size: "xxs"
                            }),
                            onClick: l,
                            style: { ...d.appendListItemButton,
                                ...c.appendListItemButton
                            },
                            title: i
                        })]
                    })
                }),
                y = (0, n.forwardRef)(function(e, t) {
                    let {
                        disabled: i,
                        focused: n,
                        icon: o,
                        isMenuOpen: r,
                        mode: l,
                        onClick: d,
                        title: c
                    } = e, u = g(l), p = (0, s(960253).I)(x, [x]), m = { ...u.menuItem,
                        ...p.buttonMenuItem
                    };
                    return (0, a.jsx)("div", {
                        ref: t,
                        style: u.menuItemWrapper,
                        children: (0, a.jsx)(s(95582).A, {
                            disabled: i || r,
                            focused: n,
                            icon: (0, a.jsx)(s(16275).I, {
                                icon: o,
                                size: "default",
                                style: u.icon
                            }),
                            onClick: d,
                            style: m,
                            title: c
                        })
                    })
                }),
                v = (0, n.forwardRef)(function(e, t) {
                    let {
                        disabled: i,
                        hasItemsSelected: n,
                        icon: o,
                        onClick: r,
                        title: l
                    } = e, d = g(p.Pill);
                    return (0, a.jsx)("div", {
                        ref: t,
                        style: d.menuItemWrapper,
                        children: (0, a.jsx)(s(97726).n, {
                            on: n,
                            icon: (0, a.jsx)(s(16275).I, {
                                icon: o,
                                fitToViewBox: "horizontal"
                            }),
                            title: (0, a.jsx)("span", {
                                children: l
                            }),
                            onClick: r,
                            disabled: i
                        })
                    })
                });

            function j(e) {
                let {
                    disableFilters: t,
                    items: i,
                    mode: n,
                    onClickClear: o,
                    onMenuOpen: r,
                    renderItemForSummary: l,
                    title: d
                } = e, c = g(n), u = { ...s(418676).$t,
                    ...c.summary
                }, p = i.length - 1, m = (0, a.jsx)("ul", {
                    style: u,
                    children: i.map((e, t) => (0, a.jsxs)("li", {
                        style: c.summaryItem,
                        children: [l(e), t !== p ? "," : void 0, " "]
                    }, e))
                });
                return (0, a.jsx)(s(835187).A, {
                    disabled: t,
                    label: d,
                    onClick: r,
                    onClickClear: o,
                    title: m
                })
            }

            function S(e) {
                let {
                    inputTemporaryValue: t,
                    isMenuOpen: i,
                    onClearInput: n,
                    onClearItems: o,
                    onItemConfirm: r,
                    onMenuClose: l,
                    onMenuInputChange: d,
                    onMenuOpen: c,
                    onRemove: u,
                    searchTokenFilterProps: m
                } = e, {
                    mode: x,
                    disabled: f,
                    title: b,
                    items: h,
                    renderItemForSummary: y,
                    icon: v
                } = m, S = g(x), A = f || i, k = x === p.Section ? (0, a.jsx)(j, {
                    disableFilters: A,
                    items: h,
                    mode: x,
                    onClickClear: o,
                    onMenuOpen: c,
                    renderItemForSummary: y,
                    title: b
                }) : (0, a.jsx)(s(95582).A, {
                    disabled: A,
                    focused: !1,
                    icon: (0, a.jsx)(s(16275).I, {
                        icon: v,
                        style: S.icon
                    }),
                    onClick: c,
                    title: b
                });
                return (0, a.jsx)(s(182718).zD, {
                    keepFocus: !0,
                    onDismiss: l,
                    open: i,
                    popupType: s(423291).n.SlideUp,
                    content: () => (0, a.jsx)(M, {
                        inputTemporaryValue: t,
                        onClearInput: n,
                        onClearItems: o,
                        onItemConfirm: r,
                        onMenuClose: l,
                        onMenuInputChange: d,
                        onRemove: u,
                        searchTokenFilterProps: m
                    }),
                    children: k
                })
            }
            let A = {
                padding: 6,
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row"
            };

            function M(e) {
                let {
                    inputTemporaryValue: t,
                    onClearInput: i,
                    onClearItems: o,
                    onItemConfirm: r,
                    onMenuClose: d,
                    onMenuInputChange: c,
                    onRemove: u,
                    searchTokenFilterProps: p
                } = e, {
                    renderToken: m,
                    renderFooter: x,
                    allowApplyBatchSelection: g,
                    isRemovable: f,
                    onFilterRemove: b
                } = p, h = (0, n.useCallback)(() => {
                    d(), null == b || b()
                }, [d, b]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l, { ...p,
                        onChange: c,
                        onClear: () => {
                            i(), o()
                        },
                        onConfirm: r,
                        onDismiss: d,
                        onRemove: u,
                        renderToken: m,
                        value: t
                    }), x ? (0, a.jsxs)(s(844565).A, {
                        style: A,
                        topBorder: !0,
                        children: [(0, a.jsx)(s(988022).p, {
                            onClick: o,
                            children: (0, a.jsx)(s(109939).sA, {
                                id: "searchTokenFilter.clearButton",
                                defaultMessage: "Clear"
                            })
                        }), g ? (0, a.jsx)(s(912946).A, {
                            colorPalette: "blue",
                            onClick: () => {
                                d("applyButton")
                            },
                            children: (0, a.jsx)(s(109939).sA, {
                                defaultMessage: "Apply",
                                id: "searchTokenFilter.applyButton"
                            })
                        }) : void 0]
                    }) : void 0, f && b ? (0, a.jsx)(s(726219).x, {
                        onRemove: h
                    }) : void 0]
                })
            }
        },
        539819: (e, t, s) => {
            s.d(t, {
                A: () => a
            }), s(296540);
            var i = s(474848);
            let n = {
                maxWidth: "100%"
            };

            function a({
                onClick: e,
                message: t,
                helpCenterLocation: o,
                analyticsFrom: r,
                containerStyle: l
            }) {
                return (0, i.jsx)("div", {
                    style: l,
                    children: (0, i.jsx)(s(724235).V, {
                        buttonStyle: n,
                        title: t || (0, i.jsx)(s(503473).j, {
                            children: (0, i.jsx)(s(109939).sA, {
                                defaultMessage: "Learn about teamspaces",
                                id: "teamsLearnMoreLink"
                            })
                        }),
                        analyticsFrom: r,
                        href: function(e) {
                            switch (e) {
                                case "bestPractices":
                                    return (0, s(442564).x)("guides.teamspacesLearnMore");
                                case "workspaceOwnerGuide":
                                    return (0, s(442564).x)("guides.teamspacesWorkspaceOwner");
                                case "settingsAndPermissions":
                                    return (0, s(442564).x)("guides.teamspacesSettingsAndPermissions");
                                default:
                                    return (0, s(722371).HB)(e)
                            }
                        }(o),
                        onClick: e
                    })
                })
            }
        },
        543588: (e, t, s) => {
            s.d(t, {
                A: () => n
            }), s(296540);
            var i = s(474848);
            let n = function(e) {
                let t = {
                        marginBottom: 4
                    },
                    {
                        title: n,
                        marginAfter: a,
                        desktopStyle: o,
                        desktopTitleStyle: r,
                        ...l
                    } = e,
                    d = (a || o) && { ...a && {
                            marginBottom: 16
                        },
                        ...o
                    },
                    c = r ? { ...t,
                        ...r
                    } : t;
                return (0, i.jsx)(s(844565).A, {
                    disableDesktopPadding: !0,
                    enableActionSheetTitle: !0,
                    desktopStyle: d,
                    desktopTitleStyle: c,
                    shouldShowBottomDivider: !1,
                    title: n,
                    ...l
                })
            }
        },
        559452: (e, t, s) => {
            s.r(t), s.d(t, {
                iconDefinition: () => n,
                keySmallIcon: () => a
            }), s(296540);
            var i = s(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.99 1.37 8.01 13.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 3.8a.825.825 0 1 0 0 1.65.825.825 0 0 0 0-1.65"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.375a4 4 0 0 0-2.125 7.39v3.922c0 .18.078.352.213.47l1.5 1.313a.625.625 0 0 0 .824 0l1.5-1.312a.625.625 0 0 0 .063-.877l-.777-.906.777-.906a.63.63 0 0 0 .15-.406V8.764A4 4 0 0 0 8 1.374m-2.75 4a2.75 2.75 0 1 1 3.972 2.464.63.63 0 0 0-.347.56V9.83L7.9 10.968c-.2.234-.2.58 0 .814l.723.842L8 13.17l-.875-.765V8.399a.63.63 0 0 0-.347-.56A2.75 2.75 0 0 1 5.25 5.375"
                        })]
                    })
                },
                a = (0, s(104509).wt)("keySmall", n, "small")
        },
        577497: (e, t, s) => {
            s.d(t, {
                Zp: () => c,
                fT: () => a,
                v3: () => o
            }), s(944114);
            var i = s(296540),
                n = s(474848);
            let a = {
                    xxs: 4,
                    xs: 6,
                    sm: 8,
                    md: 10,
                    lg: 12
                },
                o = {
                    none: 0,
                    sm: 12,
                    md: 16,
                    lg: 20,
                    xl: 24
                },
                r = {
                    kzqmXN: "xh8yej3",
                    $$css: !0
                },
                l = {
                    xxs: {
                        krdFHd: "xjwep3j",
                        kfmiAY: "x1t39747",
                        kT0f0o: "x1wcsgtt",
                        kVL7Gh: "x1pczhz8",
                        $$css: !0
                    },
                    xs: {
                        krdFHd: "x1i5p2am",
                        kfmiAY: "x1whfx0g",
                        kT0f0o: "xr2y4jy",
                        kVL7Gh: "x1ihp6rs",
                        $$css: !0
                    },
                    sm: {
                        krdFHd: "x1obq294",
                        kfmiAY: "x5a5i1n",
                        kT0f0o: "xde0f50",
                        kVL7Gh: "x15x8krk",
                        $$css: !0
                    },
                    md: {
                        krdFHd: "x16qb05n",
                        kfmiAY: "xi7iut8",
                        kT0f0o: "x1dm3dyd",
                        kVL7Gh: "x1pv694p",
                        $$css: !0
                    },
                    lg: {
                        krdFHd: "x6nl9eh",
                        kfmiAY: "x1a5l9x9",
                        kT0f0o: "x7vuprf",
                        kVL7Gh: "x1mg3h75",
                        $$css: !0
                    }
                },
                d = {
                    none: {
                        kLKAdn: "xexx8yu",
                        kwRFfy: "xyri2b",
                        kGO01o: "x18d9i69",
                        kZCmMZ: "x1c1uobl",
                        $$css: !0
                    },
                    sm: {
                        kLKAdn: "xz9dl7a",
                        kwRFfy: "xpdmqnj",
                        kGO01o: "xsag5q8",
                        kZCmMZ: "x1g0dm76",
                        $$css: !0
                    },
                    md: {
                        kLKAdn: "xyamay9",
                        kwRFfy: "xv54qhq",
                        kGO01o: "x1l90r2v",
                        kZCmMZ: "xf7dkkf",
                        $$css: !0
                    },
                    lg: {
                        kLKAdn: "x1cnzs8",
                        kwRFfy: "x1xnnf8n",
                        kGO01o: "xx6bls6",
                        kZCmMZ: "x106a9eq",
                        $$css: !0
                    },
                    xl: {
                        kLKAdn: "x1p5oq8j",
                        kwRFfy: "x64bnmy",
                        kGO01o: "xwxc41k",
                        kZCmMZ: "x13jy36j",
                        $$css: !0
                    }
                },
                c = i.forwardRef(function(e, t) {
                    let i, a, {
                            children: o,
                            colorPalette: c,
                            colorVariant: u = "primary",
                            borderRadius: p = "md",
                            borderVariant: m,
                            padding: x = "none",
                            shadowVariant: g
                        } = e,
                        f = c ? s(632079).Tj[c] : s(632079).Tj,
                        b = [];
                    g && b.push(s(632079).Tj.shadow.base[g]), m && b.push(`inset 0 0 0 1px ${f.border[m]}`);
                    let h = (0, s(722371).O)(f.background, u) ? f.background[u] : f.background.primary;
                    return (0, n.jsx)("div", { ...s(952687).A.props(r, l[p], "number" == typeof x ? {
                            padding: x
                        } : d[x], [{
                            kC7eKd: null != (i = h) ? "xt2wqj3" : i,
                            $$css: !0
                        }, {
                            "--x-background": null != i ? i : void 0
                        }], b.length > 0 && [{
                            kGVxlE: null != (a = b.join(", ")) ? "x1iotiob" : a,
                            $$css: !0
                        }, {
                            "--x-boxShadow": null != a ? a : void 0
                        }]),
                        ref: t,
                        children: o
                    })
                })
        },
        585279: (e, t, s) => {
            s.d(t, {
                g: () => n
            });
            var i = s(296540);

            function n(e) {
                var t;
                let n = (0, s(533992).v3)(),
                    [a, o] = (0, i.useState)(),
                    r = (0, s(723240).r)(),
                    l = (null == (t = (0, s(187041).g)({
                        spaceId: r
                    })) ? void 0 : t.length) ? ? 0;
                return (0, i.useEffect)(() => {
                    !async function() {
                        r && o(await (0, s(413552).L6)({
                            environment: n,
                            spaceId: r,
                            offerCampaign: e
                        }))
                    }()
                }, [n, r, e, l]), a
            }
        },
        667291: (e, t, s) => {
            function i(e) {
                let t = (0, s(109939).tz)();
                return (0, s(682985).K8)(() => {
                    let i = s(728372).AppStoreSidebarSpaceStore.state;
                    if (i && e) return s(807825).L.createChildStore(i, {
                        table: s(832375).oo9,
                        id: e
                    }).getDisplayName(t)
                }, [t, e])
            }

            function n() {
                let e = (0, s(109939).tz)();
                return (0, s(682985).K8)(() => {
                    let t = s(728372).AppStoreCurrentUserStore.state,
                        i = null != t && t.isDefined() ? t.getModel() : void 0;
                    return i ? i.getDisplayName(e) : void 0
                }, [e])
            }
            s.d(t, {
                L: () => n,
                y: () => i
            })
        },
        706893: (e, t, s) => {
            s.d(t, {
                A: () => a
            }), s(296540);
            var i = s(474848);
            let n = (0, s(109939).YK)({
                    removeItem: {
                        id: "menuItemRemoveButton.ariaLabel",
                        defaultMessage: "Remove item"
                    }
                }),
                a = function(e) {
                    let t = (0, s(109939).tz)(),
                        a = {
                            height: void 0,
                            width: void 0
                        },
                        {
                            onClick: o,
                            disabled: r
                        } = e,
                        l = s(986939).A.isMobile ? { ...a,
                            marginInlineEnd: -12,
                            marginTop: -12,
                            marginBottom: -12,
                            paddingInlineEnd: 12,
                            paddingTop: 12,
                            paddingBottom: 12
                        } : a;
                    return (0, i.jsx)(s(374533).A, {
                        icon: s(367198).xMarkCircleFillIcon,
                        onClick: o,
                        disabled: r,
                        disableBackground: !0,
                        style: l,
                        ariaLabel: t.formatMessage(n.removeItem)
                    })
                }
        },
        726219: (e, t, s) => {
            s.d(t, {
                x: () => n
            }), s(296540);
            var i = s(474848);

            function n(e) {
                let {
                    onRemove: t
                } = e;
                return (0, i.jsx)(s(844565).A, {
                    topBorder: !0,
                    children: (0, i.jsx)(s(95582).A, {
                        focused: !1,
                        title: (0, i.jsx)(s(109939).sA, {
                            defaultMessage: "Remove",
                            id: "searchFilter.removeButton.label"
                        }),
                        onClick: t
                    })
                })
            }
        },
        753290: (e, t, s) => {
            s.d(t, {
                A: () => l
            }), s(296540);
            var i = s(474848);
            let n = {
                    display: "flex",
                    alignItems: "center",
                    width: "100%"
                },
                a = {
                    fontSize: 14,
                    marginInlineEnd: 8,
                    flexGrow: 1
                },
                o = {
                    marginTop: 2,
                    width: "95%"
                };

            function r({
                title: e,
                subtitle: t,
                on: l,
                onChange: d,
                disabled: c,
                style: u
            }) {
                return (0, i.jsxs)("div", {
                    style: { ...n,
                        ...u
                    },
                    children: [(0, i.jsxs)("div", {
                        style: a,
                        children: [e, (0, i.jsx)(s(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: o,
                            children: t
                        })]
                    }), (0, i.jsx)(s(354491).d, {
                        on: l,
                        disabled: c,
                        onClick: d
                    })]
                })
            }
            r.defaultProps = {
                disabled: !1,
                style: {}
            };
            let l = r
        },
        777805: (e, t, s) => {
            s.r(t), s.d(t, {
                checkmarkShieldIcon: () => a,
                iconDefinition: () => n
            }), s(296540);
            var i = s(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.876 7.978a.625.625 0 0 0-1.072-.643L9.25 11.59 7.815 9.916a.625.625 0 0 0-.95.814l2 2.333a.625.625 0 0 0 1.011-.085z"
                        }), (0, i.jsx)("path", {
                            d: "M10.28 2.241a.63.63 0 0 0-.56 0l-1.889.945a7.5 7.5 0 0 1-3.343.789H3.7a.625.625 0 0 0-.625.625v6.933a5.13 5.13 0 0 0 3.106 4.71l3.573 1.532a.63.63 0 0 0 .492 0l3.573-1.532a5.13 5.13 0 0 0 3.106-4.71V4.6a.625.625 0 0 0-.625-.625h-.788c-1.16 0-2.305-.27-3.343-.79zM8.39 4.304 10 3.499l1.61.805a8.7 8.7 0 0 0 3.902.921h.163v6.308c0 1.55-.924 2.95-2.348 3.562L10 16.52l-3.326-1.425a3.88 3.88 0 0 1-2.349-3.562V5.225h.163c1.355 0 2.69-.315 3.902-.921"
                        })]
                    })
                },
                a = (0, s(104509).wt)("checkmarkShield", n, "default")
        },
        783170: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => p,
                getBlockExportTypeTitle: () => m,
                getBlockIncludeContentsTitle: () => x,
                getCollectionViewExportTypeTitle: () => g
            }), s(581454);
            var i = s(296540),
                n = s(474848);
            let a = ["pdf", "html", "markdown"],
                o = ["currentView", "all"],
                r = ["everything", "no_files"],
                l = (0, s(109939).YK)({
                    dialogLabel: {
                        id: "exportModal.dialogLabel",
                        defaultMessage: "Export"
                    },
                    tooltipTitle: {
                        defaultMessage: "Upgrade to export the workspace as PDFs",
                        id: "exportModal.workspacePdfUpgradeTooltip.title"
                    },
                    tooltipCaption: {
                        defaultMessage: "Creates a zip file containing all pages in the workspace as PDF files.",
                        id: "exportModal.workspacePdfUpgradeTooltip.caption"
                    }
                }),
                d = {
                    width: 60
                },
                c = {
                    textAlign: "end"
                };

            function u({
                value: e,
                onChange: t
            }) {
                let a = (0, s(109939).tz)(),
                    o = i.useCallback(e => {
                        let i, n = e.target.value,
                            o = (0, s(700369).sA)(n) || (0, s(368864).q)(n, a);
                        "object" == typeof o ? i = "percent" === o.format ? o.value : o.value / 100 : "number" == typeof o && (i = o / 100), void 0 !== i && t(i)
                    }, [t, a]),
                    [r, l] = i.useState(!1),
                    p = i.useMemo(() => (0, s(700369).ZV)(Math.round(100 * e), "number", a), [e, a]);
                return (0, n.jsx)(s(519451).A, {
                    debugName: "ExportModal",
                    capture: r,
                    children: (0, n.jsx)(s(36481).p, {
                        value: p,
                        onChange: o,
                        onFocus: () => l(!0),
                        onBlur: () => l(!1),
                        style: d,
                        inputStyle: c
                    })
                })
            }
            let p = function() {
                let e = (0, s(109939).tz)(),
                    t = (0, s(682985).uB)(void 0, s(510969).A),
                    a = (0, s(682985).uB)(void 0, s(510969).A),
                    o = (0, s(682985).uB)(void 0, s(510969).A),
                    r = (0, s(682985).uB)(void 0, s(510969).A),
                    d = (0, i.useCallback)(() => (0, n.jsx)(D, {
                        includeContentsPopupStore: r,
                        exportTypePopupStore: o,
                        pdfFormatPopupStore: a,
                        collectionViewExportTypePopupStore: t
                    }), [r, o, a, t]),
                    c = (0, s(682985).K8)(() => s(206567).Ay.state.open, []);
                return (0, n.jsx)(s(979479).A, {
                    ariaLabel: e.formatMessage(l.dialogLabel),
                    onDismiss: j,
                    content: d,
                    isOpen: c
                })
            };

            function m(e) {
                switch (e) {
                    case "pdf":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.exportFormatButton.pdf.label",
                            defaultMessage: "PDF"
                        });
                    case "markdown":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.exportFormatButton.markdownAndCSV.label",
                            defaultMessage: "Markdown & CSV"
                        });
                    case "html":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.exportFormatButton.html.label",
                            defaultMessage: "HTML"
                        })
                }
            }

            function x(e) {
                switch (e) {
                    case "everything":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.includeContentTypes.everything.label",
                            defaultMessage: "Everything"
                        });
                    case "no_files":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.includeContentTypes.no_files.label",
                            defaultMessage: "Exclude files and images"
                        })
                }
            }

            function g(e) {
                switch (e) {
                    case "all":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.includeDatabases.all.label.defaultView",
                            defaultMessage: "Default view"
                        });
                    case "currentView":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.includeDatabases.currentView.label",
                            defaultMessage: "Current view"
                        })
                }
            }

            function f(e) {
                switch (e) {
                    case "Letter":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.pageFormatButton.letter.label",
                            defaultMessage: "Letter"
                        });
                    case "A3":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.pageFormatButton.a3.label",
                            defaultMessage: "A3"
                        });
                    case "A4":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.pageFormatButton.a4.label",
                            defaultMessage: "A4"
                        });
                    case "Legal":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.pageFormatButton.legal.label",
                            defaultMessage: "Legal"
                        });
                    case "Tabloid":
                        return (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.pageFormatButton.tabloid.label",
                            defaultMessage: "Tabloid"
                        })
                }
            }

            function b() {
                let e = s(206567).Ay.state;
                return e.open && (0, s(206567).xt)(e) ? void 0 === e.exportOptions.scale ? 1 : e.exportOptions.scale : 1
            }

            function h() {
                return {
                    width: 320,
                    padding: 24,
                    fontSize: 14
                }
            }

            function y() {
                var e;
                return (e = b()) > .1 && e < 2
            }

            function v() {
                return (0, n.jsx)("div", {
                    style: { ...h(),
                        color: s(632079).Tj.text.secondary
                    },
                    children: (0, n.jsx)(s(109939).sA, {
                        defaultMessage: "Please go online to export.",
                        id: "exportModal.offlineMessage.description"
                    })
                })
            }

            function j() {
                s(958220)._3()
            }

            function S(e) {
                let t = s(206567).Ay.state,
                    i = (0, s(328765).S)();
                if (t.open) {
                    if ((0, s(206567).xt)(t) && !s(958220).Dd(e)) return void s(907063).K(e, {
                        from: "export_modal",
                        upsell: {
                            type: "product",
                            product: "enterprise",
                            limit: {
                                type: "none"
                            },
                            trialability: "none"
                        },
                        spaceStore: i
                    });
                    s(958220).z_(e, { ...t,
                        recursive: !t.recursive
                    })
                }
            }

            function A(e) {
                if (!y()) return;
                let t = s(206567).Ay.state;
                t.open && (s(958220)._3(), void 0 === t.exportOptions.flattenExportFiletree && e.device.isWindows && (t.exportOptions.flattenExportFiletree = !0), t.root.table === s(832375).NXh ? s(958220).P_(e, {
                    spaceId: t.root.id,
                    exportOptions: t.exportOptions,
                    shouldExportComments: t.shouldExportComments
                }) : s(958220).UP(e, {
                    block: {
                        id: t.root.id,
                        spaceId: (0, s(226221).e)(t.root.spaceId)
                    },
                    recursive: t.recursive,
                    exportOptions: t.exportOptions,
                    shouldExportComments: t.shouldExportComments
                }))
            }

            function M(e, t, i, a, o, r) {
                let l = "pdf" === e && "space" === o && !s(958220).Dd(a) && "business",
                    d = l ? {
                        type: "product",
                        product: l,
                        limit: {
                            type: "none"
                        },
                        trialability: "none"
                    } : void 0;
                return {
                    key: e,
                    action: () => {
                        (t.close(), d) ? s(907063).K(a, {
                            from: "export_modal",
                            upsell: d,
                            spaceStore: r
                        }): function(e, t, i) {
                            let n, a = s(206567).Ay.state;
                            if (!a.open) return;
                            let {
                                exportOptions: o
                            } = a;
                            e !== o.exportType && (n = "pdf" === e ? { ...o,
                                exportType: "pdf",
                                pdfFormat: s(958220).id(t)
                            } : { ...o,
                                exportType: e
                            }, s(958220).z_(i, { ...a,
                                exportOptions: n
                            }))
                        }(e, i, a)
                    },
                    render: t => {
                        let {
                            onClick: i,
                            key: a,
                            ...o
                        } = t;
                        return d ? (0, n.jsx)(k, { ...t,
                            upsell: d,
                            exportType: e
                        }) : (0, n.jsx)(s(95582).A, { ...o,
                            title: m(e),
                            onClick: i
                        })
                    }
                }
            }

            function k({
                onClick: e,
                key: t,
                upsell: a,
                exportType: o,
                ...r
            }) {
                let d = i.useRef(null),
                    c = (0, s(109939).tz)(),
                    u = (0, s(328765).S)();
                return (0, n.jsx)(s(968080).c, {
                    upsell: a,
                    showTooltip: !0,
                    source: "export_modal",
                    spaceStore: u,
                    tooltipProps: {
                        placement: "left",
                        content: (0, n.jsx)(s(916612).A, {
                            imageURL: s(896221).A.images.tooltips.upsells.exportPdfSubpagesPng,
                            imageWidth: 240,
                            imageHeight: 100,
                            title: c.formatMessage(l.tooltipTitle),
                            caption: c.formatMessage(l.tooltipCaption)
                        })
                    },
                    children: () => (0, n.jsx)("div", {
                        ref: d,
                        children: (0, n.jsx)(s(95582).A, { ...r,
                            title: m(o),
                            right: (0, n.jsx)(s(754951).UpgradeButton, {
                                display: "icon",
                                upsell: a,
                                source: "export_modal",
                                showPlanName: !0,
                                iconAlignment: "right",
                                hoverRef: d,
                                spaceStore: u
                            }),
                            onClick: e
                        })
                    })
                }, t)
            }

            function T(e, t, i) {
                return {
                    key: e,
                    action: () => {
                        let n;
                        t.close(), !(n = s(206567).Ay.state).open || (0, s(206567).xt)(n) && s(958220).z_(i, { ...n,
                            exportOptions: { ...n.exportOptions,
                                pdfFormat: e
                            }
                        })
                    },
                    render: t => (0, n.jsx)(s(95582).A, { ...t,
                        title: f(e)
                    })
                }
            }
            let C = {
                style1: {
                    color: s(632079).Tj.text.tertiary
                },
                style2: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: 32,
                    padding: "4px 0"
                },
                style3: {
                    color: s(632079).Tj.red.text.accentPrimary
                }
            };

            function I() {
                let e = (0, s(533992).v3)(),
                    t = (0, s(682985).K8)(() => b(), []),
                    i = (0, s(934877).A)({
                        visibility: !0,
                        delayShow: 500,
                        delayHold: 100
                    });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(s(4458).fI, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 32,
                        children: [(0, n.jsx)(s(324489).V, {
                            style: C.style1,
                            children: (0, n.jsx)(s(109939).sA, {
                                id: "exportModal.pageScale.description",
                                defaultMessage: "Scale percent"
                            })
                        }), (0, n.jsx)(u, {
                            value: t,
                            onChange: t => {
                                let i;
                                !(i = s(206567).Ay.state).open || (0, s(206567).xt)(i) && s(958220).z_(e, { ...i,
                                    exportOptions: { ...i.exportOptions,
                                        scale: t
                                    }
                                })
                            }
                        })]
                    }), !(t > .1 && t < 2) && i ? (0, n.jsx)("div", {
                        style: C.style2,
                        children: (0, n.jsx)(s(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: C.style3,
                            children: (0, n.jsx)(s(109939).sA, {
                                id: "exportModal.pageScale.invalidScaleError",
                                defaultMessage: "Scale percent must be a number between 10 and 200"
                            })
                        })
                    }) : void 0]
                })
            }
            let w = {
                style0: {
                    color: s(632079).Tj.text.tertiary,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: "auto",
                    height: 32
                },
                style2: {
                    marginInlineStart: "auto",
                    marginInlineEnd: 8
                }
            };

            function _({
                modalState: e,
                includeContentsPopupStore: t,
                exportTypePopupStore: i,
                pdfFormatPopupStore: l,
                collectionViewExportTypePopupStore: d
            }) {
                let c = (0, s(533992).v3)(),
                    u = (0, s(682985).uB)(d, s(510969).A),
                    p = (0, s(682985).uB)(l, s(510969).A),
                    b = (0, s(682985).uB)(i, s(510969).A),
                    v = (0, s(682985).uB)(t, s(510969).A),
                    {
                        currentUser: S
                    } = c,
                    k = (0, s(682985).K8)(() => (0, s(206567).xt)(e) && !s(958220).Dd(c) && "business", [e, c]),
                    C = c.device.isWindows,
                    B = (0, s(682985).K8)(() => y(), []),
                    O = (0, s(682985).K8)(() => g(e.exportOptions.collectionViewExportType || "currentView"), [e]),
                    F = (0, s(682985).K8)(() => (0, s(328765).S)(), []);
                return (0, n.jsxs)("div", {
                    style: h(),
                    children: [(0, n.jsx)(s(127322).A, {
                        isMenuItem: s(986939).A.isMobile,
                        buttonPopupStore: b,
                        label: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.exportFormat.description",
                            defaultMessage: "Export format"
                        }),
                        selectedTitle: m(e.exportOptions.exportType),
                        renderMenuSections: t => [{
                            key: "exportType",
                            items: a.map(s => M(s, t, S.id, c, e.root.table, F))
                        }]
                    }), e.exportOptions.collectionViewExportType ? (0, n.jsx)(s(127322).A, {
                        isMenuItem: s(986939).A.isMobile,
                        buttonPopupStore: u,
                        label: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.includeDatabases.description",
                            defaultMessage: "Database views"
                        }),
                        selectedTitle: O,
                        renderMenuSections: e => [{
                            key: "exportCollection",
                            items: o.map(t => ({
                                key: t,
                                action: () => {
                                    let i;
                                    e.close(), (i = s(206567).Ay.state).open && s(958220).z_(c, { ...i,
                                        exportOptions: { ...i.exportOptions,
                                            collectionViewExportType: t
                                        }
                                    })
                                },
                                render: e => (0, n.jsx)(s(95582).A, { ...e,
                                    title: g(t)
                                })
                            }))
                        }]
                    }) : void 0, (0, n.jsx)(s(127322).A, {
                        isMenuItem: s(986939).A.isMobile,
                        buttonPopupStore: v,
                        label: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.includeContents.description",
                            defaultMessage: "Page content"
                        }),
                        selectedTitle: x(e.exportOptions.includeContents || "everything"),
                        renderMenuSections: e => [{
                            key: "includeContents",
                            items: r.map(t => ({
                                key: t,
                                action: () => {
                                    let i;
                                    e.close(), (i = s(206567).Ay.state).open && s(958220).z_(c, { ...i,
                                        exportOptions: { ...i.exportOptions,
                                            includeContents: t
                                        }
                                    })
                                },
                                render: e => (0, n.jsx)(s(95582).A, { ...e,
                                    title: x(t)
                                })
                            }))
                        }]
                    }), (0, s(206567).xt)(e) ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s(127322).A, {
                            isMenuItem: s(986939).A.isMobile,
                            buttonPopupStore: p,
                            label: (0, n.jsx)(s(109939).sA, {
                                id: "exportModal.pageFormat.description",
                                defaultMessage: "Page format"
                            }),
                            selectedTitle: f(e.exportOptions.pdfFormat),
                            renderMenuSections: e => [{
                                key: "isoPaperFormats",
                                items: s(728601).yC.map(t => T(t, e, c))
                            }, {
                                key: "otherPaperFormats",
                                render: e => (0, n.jsx)(s(844565).A, {
                                    topBorder: !0,
                                    ...e
                                }),
                                items: s(728601).hj.map(t => T(t, e, c))
                            }]
                        }), (0, n.jsx)(I, {})]
                    }) : void 0, "space" !== e.root.table ? (0, n.jsx)(P, {
                        spaceStore: F,
                        upsellTier: k,
                        modalState: e
                    }) : void 0, (0, n.jsx)(s(753290).A, {
                        title: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.flattenExportFiletree.description",
                            defaultMessage: "Create folders for subpages"
                        }),
                        subtitle: "",
                        style: w.style0,
                        on: void 0 === e.exportOptions.flattenExportFiletree ? !C : !e.exportOptions.flattenExportFiletree,
                        disabled: !e.recursive,
                        onChange: () => {
                            let e;
                            (e = s(206567).Ay.state).open && s(958220).z_(c, { ...e,
                                exportOptions: { ...e.exportOptions,
                                    flattenExportFiletree: !e.exportOptions.flattenExportFiletree
                                }
                            })
                        }
                    }), "html" === e.exportOptions.exportType ? (0, n.jsx)(s(753290).A, {
                        title: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.shouldExportComments.description",
                            defaultMessage: "Export comments"
                        }),
                        subtitle: "",
                        style: w.style0,
                        on: e.shouldExportComments,
                        onChange: () => {
                            let e;
                            (e = s(206567).Ay.state).open && s(958220).z_(c, { ...e,
                                shouldExportComments: !e.shouldExportComments
                            })
                        }
                    }) : null, (0, n.jsxs)(s(4458).fI, {
                        alignItems: "center",
                        marginTop: 16,
                        children: [(0, n.jsx)(s(988022).p, {
                            colorPalette: "gray",
                            style: w.style2,
                            onClick: j,
                            children: (0, n.jsx)(s(109939).sA, {
                                defaultMessage: "Cancel",
                                id: "exportModal.cancelButton.label"
                            })
                        }), (0, n.jsx)(s(912946).A, {
                            colorPalette: "blue",
                            onClick: () => A(c),
                            disabled: !B,
                            children: (0, n.jsx)(s(109939).sA, {
                                defaultMessage: "Export",
                                id: "exportModal.exportButton.label"
                            })
                        })]
                    })]
                })
            }

            function P(e) {
                let {
                    upsellTier: t,
                    modalState: a,
                    spaceStore: o
                } = e, r = (0, s(533992).v3)(), l = t ? {
                    type: "product",
                    product: t,
                    limit: {
                        type: "none"
                    },
                    trialability: "none"
                } : void 0, d = i.useRef(null);
                return (0, n.jsxs)(s(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 32,
                    gap: 0,
                    children: [(0, n.jsx)(s(111010).D, {
                        colorVariant: "tertiary",
                        styleKey: "body",
                        children: (0, n.jsx)(s(109939).sA, {
                            defaultMessage: "Include subpages",
                            id: "exportModal.includeSubpages.label"
                        })
                    }), l ? (0, n.jsx)(s(968080).c, {
                        upsell: l,
                        source: "export_modal",
                        showTooltip: !0,
                        spaceStore: o,
                        tooltipProps: {
                            placement: "right",
                            showTitle: !1,
                            showIcon: !1,
                            maxWidth: 260,
                            content: (0, n.jsx)(s(916612).A, {
                                imageURL: s(896221).A.images.tooltips.upsells.exportPdfSubpagesPng,
                                imageWidth: 240,
                                imageHeight: 100,
                                title: (0, n.jsx)(s(109939).sA, {
                                    defaultMessage: "Upgrade to include subpages in PDF exports",
                                    id: "exportModal.pdfSubpageUpgradeTooltip.title"
                                }),
                                caption: (0, n.jsx)(s(109939).sA, {
                                    defaultMessage: "Creates a zip file containing all the pages nested inside the current page as PDF files.",
                                    id: "exportModal.pdfSubpageUpgradeTooltip.caption"
                                })
                            })
                        },
                        children: () => (0, n.jsx)("div", {
                            ref: d,
                            children: (0, n.jsx)(s(754951).UpgradeButton, {
                                upsell: l,
                                source: "export_modal",
                                display: "icon",
                                showPlanName: !0,
                                iconAlignment: "right",
                                hoverRef: d,
                                spaceStore: o
                            })
                        })
                    }) : (0, n.jsx)(s(354491).d, {
                        on: a.recursive,
                        disabled: !1,
                        onClick: () => S(r)
                    })]
                })
            }
            let B = {
                    marginInlineStart: 8
                },
                O = {
                    marginTop: 2
                };

            function F({
                modalState: e,
                exportTypePopupStore: t,
                pdfFormatPopupStore: i
            }) {
                let o = (0, s(533992).v3)(),
                    r = {
                        menuType: s(649476).gu.Modal,
                        title: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.title",
                            defaultMessage: "Export"
                        }),
                        right: (0, n.jsx)(s(109939).sA, {
                            id: "exportModal.closeButton.label",
                            defaultMessage: "Close"
                        }),
                        onClickRight: j
                    },
                    l = (0, s(682985).K8)(() => (function(e, t, i, o) {
                        let {
                            currentUser: r
                        } = t, l = (0, s(328765).S)();
                        return s(381453).oE([{
                            key: "export type",
                            render: ({
                                ref: o,
                                ...d
                            }) => (0, n.jsx)(s(127322).A, { ...d,
                                isMenuItem: s(986939).A.isMobile,
                                buttonPopupStore: i,
                                label: (0, n.jsx)(s(109939).sA, {
                                    defaultMessage: "Export format",
                                    id: "exportModal.exportFormat.description"
                                }),
                                selectedTitle: m(e.exportOptions.exportType),
                                renderMenuSections: s => [{
                                    key: "exportType",
                                    items: a.map(i => M(i, s, r.id, t, e.root.table, l))
                                }]
                            }),
                            action: () => {
                                i.setState({
                                    open: !0
                                })
                            }
                        }, (0, s(206567).xt)(e) && {
                            key: "pdf format",
                            render: ({
                                ref: i,
                                ...a
                            }) => (0, n.jsx)(s(127322).A, { ...a,
                                isMenuItem: s(986939).A.isMobile,
                                buttonPopupStore: o,
                                label: (0, n.jsx)(s(109939).sA, {
                                    defaultMessage: "Page format",
                                    id: "exportModal.pageFormat.description"
                                }),
                                selectedTitle: f(e.exportOptions.pdfFormat),
                                renderMenuSections: e => [{
                                    key: "isoPaperFormats",
                                    items: s(728601).yC.map(s => T(s, e, t))
                                }, {
                                    key: "otherPaperFormats",
                                    render: e => (0, n.jsx)(s(844565).A, {
                                        topBorder: !0,
                                        ...e
                                    }),
                                    items: s(728601).hj.map(s => T(s, e, t))
                                }]
                            }),
                            action: () => {
                                o.setState({
                                    open: !0
                                })
                            }
                        }, "space" !== e.root.table && {
                            key: "recursive",
                            render: ({
                                onClick: i,
                                key: a,
                                ...o
                            }) => {
                                let r = (0, s(206567).xt)(e) && !s(958220).Dd(t) && "business";
                                return (0, n.jsx)(s(272642).F, {
                                    spaceStore: l,
                                    requireUpgradeToTier: r,
                                    analyticsName: "export_modal",
                                    onClick: i,
                                    render: (t, i) => {
                                        let a = (0, s(63390).A)(o, t);
                                        return (0, n.jsx)(s(95582).A, { ...a,
                                            title: (0, n.jsxs)(s(4458).fI, {
                                                alignItems: "center",
                                                children: [(0, n.jsx)(s(109939).sA, {
                                                    defaultMessage: "Include subpages",
                                                    id: "exportModal.includeSubpages.label"
                                                }), " ", i ? (0, n.jsx)("div", {
                                                    style: B,
                                                    children: i
                                                }) : void 0]
                                            }),
                                            right: (0, n.jsx)(s(354491).d, { ...a,
                                                on: e.recursive,
                                                disabled: !!r
                                            })
                                        })
                                    },
                                    renderUpgradeTooltip: () => (0, n.jsx)(s(916612).A, {
                                        imageURL: s(896221).A.images.tooltips.upsells.exportPdfSubpagesPng,
                                        imageWidth: 240,
                                        imageHeight: 100,
                                        title: (0, n.jsx)(s(109939).sA, {
                                            defaultMessage: "Upgrade to include subpages in PDF exports",
                                            id: "exportModal.pdfSubpageUpgradeTooltip.title"
                                        }),
                                        caption: (0, n.jsx)(s(109939).sA, {
                                            defaultMessage: "Creates a zip file containing all the pages nested inside the current page as PDF files.",
                                            id: "exportModal.pdfSubpageUpgradeTooltip.caption"
                                        })
                                    }),
                                    tooltipPlacement: "left",
                                    upgradeButtonDesktopStyle: O
                                }, a)
                            },
                            action: () => S(t)
                        }])
                    })(e, o, t, i), [o, t, e, i]);
                return (0, n.jsx)(s(747369).A, { ...r,
                    children: (0, n.jsx)(s(558045).A, {
                        type: s(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: [{
                            key: "exportOptions",
                            render: e => (0, n.jsx)(s(844565).A, { ...e
                            }),
                            items: l
                        }, {
                            key: "actions",
                            render: ({
                                children: e,
                                ...t
                            }) => (0, n.jsx)(s(844565).A, { ...t,
                                children: e
                            }),
                            items: [{
                                key: "submit",
                                render: e => {
                                    let {
                                        onClick: t,
                                        ...i
                                    } = e;
                                    return (0, n.jsx)(s(336113).A, { ...i,
                                        onClick: t || (() => A(o)),
                                        disabled: !y(),
                                        title: (0, n.jsx)(s(109939).sA, {
                                            id: "exportModal.exportButton.label",
                                            defaultMessage: "Export"
                                        })
                                    })
                                },
                                action: () => A(o)
                            }]
                        }]
                    })
                })
            }

            function D({
                includeContentsPopupStore: e,
                exportTypePopupStore: t,
                pdfFormatPopupStore: i,
                collectionViewExportTypePopupStore: a
            }) {
                let o = (0, s(682985).O$)(s(205885).e),
                    r = (0, s(682985).O$)(s(206567).Ay);
                return o ? r.open ? s(986939).A.isMobile ? (0, n.jsx)(F, {
                    exportTypePopupStore: t,
                    pdfFormatPopupStore: i,
                    modalState: r
                }) : (0, n.jsx)(_, {
                    includeContentsPopupStore: e,
                    exportTypePopupStore: t,
                    pdfFormatPopupStore: i,
                    collectionViewExportTypePopupStore: a,
                    modalState: r
                }) : null : (0, n.jsx)(v, {})
            }
        },
        800191: (e, t, s) => {
            s.d(t, {
                e: () => n
            }), s(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.68 2.37 17.01 15.26",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M8 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M5.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M8 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h8.3c.68 0 1.328-.287 1.74-.767.429-.502.591-1.217.23-1.923C13.1 12.945 10.7 11.63 8 11.63m-5.007 3.875c.761-1.488 2.672-2.626 5.007-2.626s4.246 1.138 5.007 2.626c.105.204.07.378-.067.54-.156.182-.448.33-.79.33h-8.3c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54m15.493-8.568a.625.625 0 0 1 0 .884L16.807 9.5l1.68 1.68a.625.625 0 1 1-.884.883l-1.68-1.68-1.68 1.68a.625.625 0 0 1-.883-.884L15.04 9.5l-1.68-1.68a.625.625 0 1 1 .884-.883l1.68 1.68 1.678-1.68a.625.625 0 0 1 .884 0"
                    })
                },
                n = (0, s(104509).wt)("personXmark", i, "default")
        },
        835187: (e, t, s) => {
            s.d(t, {
                A: () => n
            }), s(296540);
            var i = s(474848);
            let n = function(e) {
                let {
                    disabled: t,
                    label: n,
                    title: r,
                    onClick: l,
                    isToggle: d,
                    isToggleActive: c,
                    onClickClear: u,
                    ...p
                } = e, m = {
                    menuItemLabel: {
                        color: s(632079).Tj.text.tertiary
                    }
                }, x = a(), g = (0, i.jsx)("span", {
                    style: m.menuItemLabel,
                    children: n
                });
                return (0, i.jsx)(s(95582).A, {
                    focused: !1,
                    ...p,
                    inline: d,
                    disabled: t,
                    icon: g,
                    title: r,
                    right: (0, i.jsx)(o, {
                        disabled: !!t,
                        isToggle: !!d,
                        isToggleActive: !!c,
                        onClick: l,
                        onClickClear: u
                    }),
                    onClick: l,
                    dontShrinkIcon: !0,
                    dontShrinkRight: !0,
                    shouldWrapTitle: !0,
                    style: x.menuItem,
                    desktopIconStyle: x.menuItemLabel
                })
            };

            function a() {
                return {
                    menuItem: {
                        background: "initial",
                        minHeight: "initial",
                        fontSize: s(986939).A.isMobile ? s(699422).J.UISmall.mobile : s(699422).J.UIRegular.desktop,
                        paddingTop: s(986939).A.isMobile ? 12 : 4,
                        paddingBottom: s(986939).A.isMobile ? 12 : 4
                    },
                    labeledMenuItemTitle: {
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    menuItemLabel: {
                        marginTop: 0
                    },
                    rightWrapper: {
                        display: "flex",
                        alignItems: "center",
                        marginTop: "-50%",
                        marginBottom: "-50%",
                        height: 44
                    }
                }
            }

            function o({
                disabled: e,
                isToggle: t,
                isToggleActive: n,
                onClick: r,
                onClickClear: l = () => {}
            }) {
                let d = a().rightWrapper;
                return t ? (0, i.jsx)("div", {
                    style: d,
                    children: (0, i.jsx)(s(354491).d, {
                        on: !!n,
                        onClick: r
                    })
                }) : (0, i.jsx)(s(706893).A, {
                    disabled: e,
                    onClick: l
                })
            }
        },
        837624: (e, t, s) => {
            s.d(t, {
                R: () => n
            }), s(296540);
            var i = s(474848);

            function n({
                error: e,
                id: t
            }) {
                return e ? (0, i.jsx)(s(111010).D, {
                    id: t,
                    styleKey: "captionRegular",
                    colorPalette: "red",
                    colorVariant: "accentPrimary",
                    children: "object" == typeof e ? (0, i.jsx)(s(109939).sA, { ...e
                    }) : e
                }) : null
            }
        },
        898929: (e, t, s) => {
            s.d(t, {
                u: () => r
            }), s(898992), s(672577), s(581454), s(296540);
            var i = s(474848);
            let n = {
                    marginInlineStart: 3,
                    marginInlineEnd: 3
                },
                a = {
                    alignSelf: "center",
                    marginTop: 0
                },
                o = {
                    width: 350
                };

            function r({
                currentAccessLevel: e,
                currentIsDefault: t = !1,
                onChange: l,
                teamStore: d,
                disabledWithRightChevron: c = !1,
                style: u,
                parentSpaceStore: p
            }) {
                let m = (0, s(345776).T)(),
                    x = (0, s(144153).y)(d),
                    g = (0, s(185495).O)(),
                    f = (0, s(960253).I)(() => ({
                        selectedButton: {
                            width: "100%",
                            margin: 0,
                            paddingTop: 4,
                            paddingBottom: 4,
                            border: `1px solid ${s(632079).Tj.border.primaryTranslucent}`,
                            ...u
                        }
                    }), [u]),
                    b = (0, s(682985).K8)(() => (null == d ? void 0 : d.isDefault()) ? ? t, [d, t]),
                    h = b ? "default" : e,
                    y = (0, s(723240).r)(),
                    v = (0, s(217844)._)({
                        spaceId: y,
                        userId: m,
                        name: "private_teamspaces"
                    }),
                    j = (0, s(682985).K8)(() => p || (d ? (0, s(974410).f)(d) : void 0), [p, d]),
                    S = (0, s(806818).Z)({
                        teamId: null == d ? void 0 : d.id,
                        onChange: l,
                        isDefault: b,
                        parentSpaceStore: j,
                        privateTeamspacesFeatureAvailability: v
                    });
                return (0, i.jsx)(s(656252).A, {
                    popupType: s(986939).A.isMobile ? s(656252).z.SlideUp : s(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    sameWidthAsOrigin: !0,
                    content: e => {
                        let t = [{
                            key: "access levels",
                            render: e => (0, i.jsx)(s(844565).A, { ...e,
                                topBorder: 0 !== e.index
                            }),
                            items: S.map(t => {
                                let n = t.key === h;
                                return {
                                    key: t.key,
                                    render: e => (0, i.jsx)(s(51831).m, {
                                        placement: "top",
                                        disableTooltip: !t.tooltip,
                                        content: () => t.tooltip,
                                        children: o => (0, i.jsx)(s(95582).A, { ...(0, s(63390).A)(e, o),
                                            title: t.title,
                                            caption: t.caption,
                                            icon: t.icon({
                                                fill: t.iconColor
                                            }),
                                            desktopIconStyle: a,
                                            isChecked: n,
                                            disabled: t.disabled,
                                            shouldWrapCaption: !0
                                        })
                                    }),
                                    action: () => {
                                        t.onSelect(), e.close()
                                    }
                                }
                            })
                        }, ...g ? [{
                            key: "try private teamspaces",
                            render: () => (0, i.jsx)(s(901547).c, {
                                openedFrom: "business_trial_private_teamspaces_upsell",
                                styleOverrides: {
                                    margin: "4px 12px 12px 12px"
                                }
                            }),
                            items: []
                        }] : []];
                        return (0, i.jsx)(s(747369).A, {
                            menuType: s(649476).gu.Popup,
                            children: (0, i.jsx)(s(558045).A, {
                                type: s(558045).O.Vertical,
                                initialFocus: void 0,
                                sections: t
                            })
                        })
                    },
                    children: e => {
                        let t = S.find(e => e.key === h);
                        if (!t) return null;
                        let r = t.disableAllOptionsTooltip,
                            l = c || !!r || !!d && !x;
                        return (0, i.jsx)(s(51831).m, {
                            placement: "bottom",
                            alignment: "start",
                            disableTooltip: !r || !x,
                            content: () => r,
                            style: o,
                            textWrap: !0,
                            children: o => (0, i.jsx)(s(95582).A, { ...(0, s(63390).A)(e, o),
                                title: t.title,
                                caption: t.caption,
                                icon: t.icon({
                                    fill: t.iconColor
                                }),
                                desktopIconStyle: a,
                                disabled: l,
                                right: c ? (0, i.jsx)(s(16275).I, {
                                    icon: s(588222).arrowChevronSingleRightFillSmallIcon,
                                    size: "xxs",
                                    colorVariant: "tertiary",
                                    style: n
                                }) : l ? void 0 : (0, i.jsx)(s(16275).I, {
                                    icon: s(469102).arrowChevronSingleDownFillSmallIcon,
                                    size: "xxs",
                                    colorVariant: "tertiary",
                                    style: n
                                }),
                                focused: !1,
                                shouldWrapCaption: !0,
                                buttonStyle: f.selectedButton
                            })
                        })
                    }
                })
            }
        },
        901547: (e, t, s) => {
            s.d(t, {
                c: () => o
            });
            var i = s(296540),
                n = s(474848);
            let a = {
                display: "flex",
                alignItems: "center",
                flex: 1
            };

            function o({
                openedFrom: e,
                styleOverrides: t
            }) {
                let {
                    animationState: l,
                    animationTriggers: d
                } = (0, s(183999).lP)(), c = (0, i.useMemo)(() => {
                    switch (e) {
                        case "business_trial_verify_pages_upsell":
                            return "pageVerification";
                        case "business_trial_private_teamspaces_upsell":
                            return "privateTeamspaces";
                        case "business_trial_ai_connectors_upsell":
                            return "aiConnectors";
                        case "upgrade_requests_page":
                            return "free";
                        default:
                            return "blank"
                    }
                }, [e]);
                return (0, n.jsx)(s(548436).A, { ...d,
                    size: "lg",
                    iconLeading: {
                        type: "animated",
                        icon: s(824843).P,
                        colorPalette: "orange",
                        colorVariant: "accentPrimary",
                        size: "sm",
                        animationState: l
                    },
                    style: { ...a,
                        ...t
                    },
                    onClick: () => {
                        (0, s(272799).openBusinessTrialStartModal)({
                            openedFrom: e,
                            potentialCampaigns: ["stacked_business_trial", "stacked_business_trial_14d", "business_reverse"]
                        })
                    },
                    children: (0, n.jsx)(s(109939).sA, { ...r[c]
                    })
                })
            }
            let r = (0, s(109939).YK)({
                blank: {
                    id: "selfServeBusinessTrial.tryButton.blank",
                    defaultMessage: "Try"
                },
                privateTeamspaces: {
                    id: "selfServeBusinessTrial.tryButton.privateTeamspaces",
                    defaultMessage: "Try for free"
                },
                aiConnectors: {
                    id: "selfServeBusinessTrial.tryButton.connectors",
                    defaultMessage: "Try connectors"
                },
                pageVerification: {
                    id: "selfServeBusinessTrial.tryButton.pageVerification",
                    defaultMessage: "Try for free"
                },
                free: {
                    id: "selfServeBusinessTrial.tryButton.free",
                    defaultMessage: "Try for free"
                }
            })
        }
    }
]);