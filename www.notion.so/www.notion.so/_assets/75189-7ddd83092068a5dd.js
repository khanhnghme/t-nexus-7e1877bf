"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [75189, 88980], {
        106576: (e, t, i) => {
            function s(e) {
                let {
                    context: t,
                    staticOptions: s,
                    staticGroups: n,
                    externalStatusOptions: r
                } = e;
                return t.collectionType && "Jira" === t.collectionType ? function(e) {
                    let {
                        transitions: t,
                        staticOptions: s,
                        staticGroups: n
                    } = e;
                    return t ? function(e) {
                        let {
                            transitions: t,
                            staticGroups: s
                        } = e, n = [], r = [];
                        return (0, i(722371).WP)(t).forEach(([e, t]) => {
                            let a = [];
                            t.forEach(t => {
                                let s = (0, i(4962).Ay)();
                                n.push({
                                    id: s,
                                    value: t.name,
                                    color: function(e) {
                                        switch (e) {
                                            case "To-do":
                                            default:
                                                return "gray";
                                            case "In progress":
                                                return "blue";
                                            case "Complete":
                                                return "green"
                                        }
                                    }(e)
                                }), a.push(s)
                            });
                            let o = s.find(t => t.name === e);
                            o && r.push({ ...o,
                                optionIds: a
                            })
                        }), {
                            options: n,
                            groups: r
                        }
                    }({
                        transitions: t,
                        staticOptions: s,
                        staticGroups: n
                    }) : null
                }({
                    transitions: r,
                    staticOptions: s,
                    staticGroups: n
                }) : null
            }

            function n(e) {
                let {
                    collectionStore: t,
                    blockStore: i
                } = e, s = null == t ? void 0 : t.getFormat();
                return {
                    collectionType: null == s ? void 0 : s.external_collection_type,
                    spaceId: null == i ? void 0 : i.getSpaceId(),
                    blockStore: i,
                    collectionStore: t
                }
            }

            function r(e) {
                for (let [t, i] of Object.entries(e.getProperties() || {}))
                    if (Array.isArray(i) && i.length > 0) {
                        let e = i[0];
                        if (Array.isArray(e) && e.length > 0) {
                            let t = e[0];
                            if ("string" == typeof t && t.includes("/browse/")) {
                                let e = t.match(/\/browse\/([A-Z]+-\d+)/);
                                if (e) return e[1]
                            }
                        }
                    }
                return null
            }

            function a(e) {
                let t = e.getFormat();
                return null == t ? void 0 : t.synced_collection_external_url
            }
            i.d(t, {
                WS: () => s,
                ot: () => n,
                q6: () => r,
                r_: () => a
            }), i(944114), i(898992), i(672577), i(803949), i(737550)
        },
        161591: (e, t, i) => {
            i.d(t, {
                A: () => o,
                E: () => r
            });
            var s, n = () => i(546605);
            let r = ((s = {}).InviteInput = "invite_input", s.MessageInput = "message_input", s.NoFocus = "no_focus", s);
            class a extends n().Store {
                getInitialState() {
                    return {
                        flowId: i(92513).JW(),
                        role: "editor",
                        focus: r.InviteInput,
                        emailMessage: "",
                        isLoading: !1,
                        showEmptyError: !1
                    }
                }
            }
            let o = a
        },
        167852: (e, t, i) => {
            i.d(t, {
                Y: () => d,
                z: () => u
            }), i(898992), i(354520), i(581454), i(296540);
            var s = i(474848);
            let n = {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 0",
                    width: "100%"
                },
                r = {
                    width: 20,
                    height: 20,
                    borderRadius: 6
                },
                a = {
                    height: 10,
                    borderRadius: 6,
                    width: "35%",
                    marginTop: 6
                },
                o = {
                    flex: 1
                };

            function l({
                width: e
            }) {
                let t = (0, i(960253).I)(() => ({
                    primary: {
                        height: 12,
                        borderRadius: 6,
                        width: e
                    }
                }), [e]);
                return (0, s.jsxs)("div", {
                    style: n,
                    children: [(0, s.jsx)(i(795830).P, {
                        style: r
                    }), (0, s.jsxs)("div", {
                        style: o,
                        children: [(0, s.jsx)(i(795830).P, {
                            style: t.primary
                        }), (0, s.jsx)(i(795830).P, {
                            style: a
                        })]
                    })]
                })
            }

            function d({
                environment: e,
                intl: t,
                store: n,
                isSyncedCollection: r,
                inputValue: a,
                value: o,
                surface: u,
                propertySchema: c,
                handlePersonPropertyMenuAddMentions: p,
                sectionMenuTitle: g,
                externalSyncedCollectionType: m,
                onDismiss: v,
                tokenLimit: f
            }) {
                let y = async s => {
                    if (r && s.emailAddress) {
                        let r = await i(308825).T.searchActions.load(),
                            a = await r.searchSpaceActors({
                                environment: e,
                                query: s.emailAddress,
                                membersOnly: !1,
                                userLocale: t.locale,
                                limit: 1
                            });
                        if (1 === a.users.length) p([{
                            table: i(832375).oo9,
                            id: a.users[0].id
                        }]);
                        else {
                            let t = await i(660107).RW({
                                environment: e,
                                externalUser: s,
                                blockPointer: n.pointer,
                                externalSyncedCollectionType: m
                            });
                            t && p([{
                                table: i(832375).oo9,
                                id: t.id
                            }])
                        }
                    }
                };
                return { ...{
                        request: {
                            query: a,
                            actorPointers: o.filter(i(197018).Pu),
                            groupPointers: o.filter(e => "string" != typeof e && (0, i(659341).I6)(e))
                        },
                        performRequest: async ({
                            query: t,
                            actorPointers: s,
                            groupPointers: r
                        }) => ({
                            externalUsers: await i(660107).bV({
                                environment: e,
                                blockPointer: n.pointer,
                                query: t
                            }),
                            type: "externalUsers"
                        }),
                        render: (e, t, n) => {
                            if (e || t && "externalUsers" !== t.type) return (0, s.jsx)(i(844565).A, {
                                title: g,
                                loading: !n,
                                children: (0, s.jsx)(i(498341).u, {
                                    title: (0, s.jsx)(i(109939).sA, { ...i(893242).Qg.searchErrorMessage
                                    })
                                })
                            });
                            let r = i(381453).oE((t && t.externalUsers || []).map(e => {
                                    let t = (0, s.jsx)(i(321753).A, {
                                        avatar: {
                                            email: e.emailAddress,
                                            avatarUrl: "",
                                            name: e.displayName
                                        }
                                    });
                                    return {
                                        key: e.accountId,
                                        render: n => (0, s.jsx)(i(95582).A, { ...n,
                                            title: e.displayName,
                                            caption: e.emailAddress,
                                            icon: t
                                        }),
                                        action: async () => {
                                            await y(e), (!f || f && o.length >= f) && v()
                                        }
                                    }
                                })),
                                d = n ? [] : i(23803).eg.map((e, t) => ({
                                    key: `external-user-shimmer-${String(e)}-${t}`,
                                    action: () => {},
                                    render: t => (0, s.jsx)(i(95582).A, { ...t,
                                        disabled: !0,
                                        disabledFeedback: !1,
                                        focused: !1,
                                        title: (0, s.jsx)(l, {
                                            width: e
                                        })
                                    })
                                })),
                                u = i(381453).oE([r.length > 0 || !n ? {
                                    key: "external user section",
                                    render: e => (0, s.jsx)(i(844565).A, { ...e,
                                        title: (0, s.jsx)(i(109939).sA, {
                                            defaultMessage: "Select user from Jira",
                                            id: "database.personPropertyValue.externalUsers.searchPlaceholder"
                                        })
                                    }),
                                    items: [...r, ...d]
                                } : void 0]);
                            return (0, s.jsx)(i(558045).A, {
                                type: i(558045).O.Vertical,
                                initialFocus: a.length > 0 ? 0 : void 0,
                                sections: u
                            })
                        }
                    }
                }
            }

            function u() {
                let e = (0, i(723240).r)(),
                    t = (0, i(345776).T)(),
                    s = (0, i(682985).K8)(() => i(639675).Ay.state.instanceValue, []) === i(639675).cK.DataCenter ? "collection_synced_database_jira_datacenter" : "collection_synced_database_jira";
                return (0, i(217844)._)({
                    name: s,
                    spaceId: e,
                    userId: t
                })
            }
        },
        186557: (e, t, i) => {
            i.d(t, {
                j: () => n
            }), i(296540);
            var s = i(474848);

            function n({
                featureAvailability: e
            }) {
                let t = e.limit.total,
                    r = e.upsell;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "inviteUserButton.modalTooltip.guestLimitLine1",
                            defaultMessage: "Your plan allows up to {currentLimit, plural, one {{currentLimit} unique guest} other {{currentLimit} unique guests}}.",
                            values: {
                                currentLimit: t
                            }
                        })
                    }), "product" === r.type ? (0, s.jsx)("div", {
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "inviteUserButton.modalTooltip.guestLimitLine2upgrade",
                            defaultMessage: "Upgrade to get up to {upsellLimit, plural, one {{upsellLimit} guest} other {{upsellLimit} guests}}",
                            values: {
                                upsellLimit: r.limit.total
                            }
                        })
                    }) : (0, s.jsx)(i(109939).sA, {
                        id: "inviteUserButton.modalTooltip.guestLimitLine2contactSales",
                        defaultMessage: "Contact sales to get more guests"
                    })]
                })
            }
        },
        261133: (e, t, i) => {
            function s(e) {
                let {
                    target: t,
                    inviteTargetsStore: i
                } = e;
                return i.state.inviteTargets.some(e => "newUser" === t.type ? e.type === t.type && t.value.email === e.value.email : "invalidUser" === t.type ? e.type === t.type && t.value.text === e.value.text : "group" === t.type ? e.type === t.type && e.value.group_id === t.value.group_id : "agent" === t.type ? e.type === t.type && e.value.workflowId === t.value.workflowId : e.type === t.type && e.value.id === t.value.id)
            }

            function n(e) {
                return "invalidUser" !== e.type
            }

            function r(e) {
                let {
                    inviteTargetsStore: t,
                    includeInputFieldText: r
                } = e, a = [...t.state.inviteTargets];
                if (r) {
                    let e = function(e) {
                        let t = e.state.tokenQuery.trim();
                        if (!(0, i(801109).DT)(t)) return;
                        let n = {
                            type: "newUser",
                            value: {
                                email: t
                            },
                            source: "email"
                        };
                        return s({
                            target: n,
                            inviteTargetsStore: e
                        }) ? void 0 : n
                    }(t);
                    e && a.push(e)
                }
                return a.filter(n)
            }

            function a(e) {
                let {
                    inviteTargetsStore: t,
                    inviteTarget: i
                } = e;
                if (s({
                        target: i,
                        inviteTargetsStore: t
                    })) {
                    let e = t.state.inviteTargets.filter(e => "group" === i.type && "group" === e.type ? i.value.group_id !== e.value.group_id : "existingUser" === i.type && "existingUser" === e.type ? i.value.id !== e.value.id : "newUser" === i.type && "newUser" === e.type ? i.value.email !== e.value.email : "agent" !== i.type || "agent" !== e.type || i.value.workflowId !== e.value.workflowId);
                    return t.setState({ ...t.state,
                        inviteTargets: e
                    }), !1
                }
                return t.setState({
                    inviteTargets: [...t.state.inviteTargets, i],
                    tokenQuery: ""
                }), !0
            }
            i.d(t, {
                P4: () => s,
                U1: () => r,
                lW: () => a
            }), i(944114), i(898992), i(354520), i(737550)
        },
        275372: (e, t, i) => {
            i.d(t, {
                p: () => n
            }), i(296540);
            var s = i(474848);

            function n({
                invalidInvites: e,
                showEmptyError: t,
                styles: r
            }) {
                if (t) return (0, s.jsx)("div", {
                    style: r,
                    children: (0, s.jsx)(i(109939).sA, {
                        id: "inviteTargetsInput.invalidWarning.noEmails",
                        defaultMessage: "Please enter an email address"
                    })
                });
                if (0 === e.length) return null;
                let a = e[0].value.text;
                return 1 === e.length ? (0, s.jsx)("div", {
                    style: r,
                    children: (0, s.jsx)(i(109939).sA, {
                        id: "inviteTargetsInput.invalidWarning.singleEmail",
                        defaultMessage: "“{text}” is not a valid email",
                        values: {
                            text: a
                        }
                    })
                }) : (0, s.jsx)("div", {
                    style: r,
                    children: (0, s.jsx)(i(109939).sA, {
                        id: "inviteTargetsInput.invalidWarning.multipleEmails",
                        defaultMessage: "{additionalInvalid, plural, one {”{text}” and {additionalInvalid} other are not valid emails} other {”{text}” and {additionalInvalid} others are not valid emails}}",
                        values: {
                            text: a,
                            additionalInvalid: e.length - 1
                        }
                    })
                })
            }
        },
        367752: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                personCropCircleBadgeExclamationPointSmallIcon: () => r
            }), i(296540);
            var s = i(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.32 1.87 13.8 13.81",
                    svg: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 0 0-6.057 7.043.075.075 0 0 0 .1.059 4 4 0 0 1 1.058-.233.075.075 0 0 0 .068-.085 4.875 4.875 0 1 1 8.076 2.98c-.666-1.063-1.878-1.76-3.245-1.76-.52 0-1.02.1-1.474.285a.075.075 0 0 0-.032.115q.329.437.526.954a.075.075 0 0 0 .095.044c.274-.095.572-.148.885-.148.962 0 1.783.5 2.212 1.217a4.86 4.86 0 0 1-2.87.485.075.075 0 0 0-.085.069q-.045.555-.233 1.056a.075.075 0 0 0 .059.1q.449.069.917.069a6.125 6.125 0 0 0 0-12.25"
                        }), (0, s.jsx)("path", {
                            d: "M8 4.036c-.787 0-1.432.327-1.868.87-.424.528-.619 1.219-.619 1.927s.195 1.4.619 1.927c.436.543 1.081.87 1.868.87s1.433-.327 1.869-.87c.423-.528.618-1.219.618-1.927s-.195-1.4-.618-1.927c-.436-.543-1.082-.87-1.869-.87m-.893 1.652c.195-.243.48-.402.893-.402s.698.159.894.402c.207.258.343.653.343 1.145s-.136.887-.343 1.145c-.196.243-.48.402-.894.402-.413 0-.698-.159-.893-.402-.208-.258-.344-.653-.344-1.145s.136-.887.344-1.145M3.4 9.525a3.075 3.075 0 1 0 0 6.15 3.075 3.075 0 0 0 0-6.15m-.425 1.409a.425.425 0 1 1 .85 0v2a.425.425 0 0 1-.85 0zm0 3.44a.425.425 0 1 1 .85.002.425.425 0 0 1-.85-.002"
                        })]
                    })
                },
                r = (0, i(104509).wt)("personCropCircleBadgeExclamationPointSmall", n, "small")
        },
        367806: (e, t, i) => {
            i.d(t, {
                i: () => E
            });
            var s = i(296540);
            i(581454), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var n = i(474848);
            let r = {
                    verifiedDomain: {
                        margin: 2,
                        backgroundColor: "rgba(83, 168, 63, 0.1)"
                    },
                    disabled: {
                        margin: 2,
                        backgroundColor: "rgba(211, 79, 67, 0.1)",
                        border: "dashed #D9655B 1px",
                        paddingInlineStart: 5
                    },
                    normal: {
                        margin: 2
                    },
                    guest: {
                        margin: 2,
                        backgroundColor: "rgba(218, 163, 64, 0.2)"
                    },
                    error: {
                        margin: 2,
                        backgroundColor: "rgba(195,90,75,0.2)",
                        color: "#DE5550"
                    },
                    tokenSpan: {
                        maxWidth: "100%"
                    },
                    tokenText: {
                        marginInlineStart: 4,
                        ...i(699422).RC
                    },
                    base: {
                        borderRadius: 4
                    },
                    style0: {
                        color: "#D34F43"
                    },
                    style1: {
                        color: "#DAA340"
                    },
                    style2: {
                        color: "#DE5550"
                    },
                    style3: {
                        color: "#53A83F"
                    },
                    style4: {
                        height: 16,
                        width: 16,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    style5: {
                        color: i(632079).oZ.mediumTextColor
                    }
                },
                a = function(e) {
                    let {
                        store: t,
                        target: a
                    } = e, o = (0, i(109939).tz)(), l = (0, i(682985).K8)(() => {
                        let e = (0, i(966980).Yu)(t) ? t : (0, i(974410).f)(t);
                        return new Set(null == e ? void 0 : e.getEmailDomains())
                    }, [t]), d = (0, i(429015).A)(t), u = (0, i(371927).N)(t), c = (0, i(682985).K8)(() => {
                        if ("invalidUser" === a.type) return "invalidUser";
                        if (e.tokenType) return e.tokenType;
                        if ("group" === a.type) return "group";
                        if ("agent" === a.type) return "member";
                        if ("existingUser" === a.type && !a.membershipType) {
                            let e = t.getSpaceId();
                            if (e) {
                                var s;
                                let n = i(695906).SpaceStore.createChildStore(t, {
                                        table: i(832375).NXh,
                                        id: e
                                    }),
                                    r = null == (s = (0, i(993077).sE)(n, a.value.id)) ? void 0 : s.getMembershipType();
                                a.membershipType = r ? ? "none"
                            } else a.membershipType = "none"
                        }
                        if (!(0, i(494341).yi)(a)) return "member";
                        if (d.isGuestRequestRequired) return "guestRequestRequired";
                        if (d.isStoreInTeam && !d.teamAllowsGuests) return "teamGuestDisabled";
                        if (!d.isStoreInTeam && !d.spaceAllowsGuests || d.isStoreInTeam && !d.teamAllowsGuests && !d.spaceAllowsGuests) return "spaceGuestDisabled";
                        let n = (0, i(801109).zN)(a.value.email);
                        return n && l.has(n) ? "verifiedDomain" : "guest"
                    }, [e.tokenType, a, l, d, t]), p = (0, s.useMemo)(() => {
                        let e = r.base;
                        switch (c) {
                            case "member":
                            case "group":
                                return { ...e,
                                    ...r.normal
                                };
                            case "invalidUser":
                                return { ...e,
                                    ...r.error
                                };
                            case "guest":
                            case "guestRequestRequired":
                                return { ...e,
                                    ...r.guest
                                };
                            case "verifiedDomain":
                                return { ...e,
                                    ...r.verifiedDomain
                                };
                            case "spaceGuestDisabled":
                            case "teamGuestDisabled":
                            case "teamGroupOwner":
                                return { ...e,
                                    ...r.disabled
                                };
                            default:
                                (0, i(722371).HB)(c)
                        }
                    }, [c]);

                    function g(t) {
                        var i;
                        t.stopPropagation(), null == (i = e.onClickRemove) || i.call(e)
                    }
                    let m = "newUser" === a.type ? a.value.email : "invalidUser" === a.type ? a.value.text : "agent" === a.type ? `agent-${a.value.botId}` : a.value.id,
                        v = "group" !== a.type && "invalidUser" !== a.type && "agent" !== a.type ? a.value.email : void 0;
                    return (0, n.jsx)(i(51831).m, {
                        placement: "top",
                        content: () => (function(e) {
                            let {
                                tokenType: t,
                                target: s,
                                email: r
                            } = e;
                            return "guest" === t ? (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "{email} will be invited as a guest",
                                id: "inviteTargetToken.guest.tooltip",
                                values: {
                                    email: r
                                }
                            }) : "spaceGuestDisabled" === t || "teamGuestDisabled" === t || "guestRequestRequired" === t ? u : "invalidUser" === s.type ? (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "{text} is not a valid email",
                                id: "inviteTargetToken.invalidUser.tooltip",
                                values: {
                                    text: s.value.text
                                }
                            }) : "verifiedDomain" === t && "group" !== s.type && "agent" !== s.type ? (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "{email}{br}will automatically be added to the workspace{br}since @{domain} is an allowed email domain.",
                                id: "inviteTargetToken.verifiedDomain.tooltip",
                                values: {
                                    email: s.value.email,
                                    br: (0, n.jsx)("br", {}),
                                    domain: (0, i(801109).zN)(s.value.email)
                                }
                            }) : "group" === s.type ? s.value.name || (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Untitled group",
                                id: "inviteTargetToken.group.untitled"
                            }) : r
                        })({
                            tokenType: c,
                            email: v,
                            target: a
                        }),
                        children: t => {
                            let s, l, d;
                            return (0, n.jsx)("div", {
                                style: r.tokenSpan,
                                ...t,
                                children: (0, n.jsx)(i(628462).A, {
                                    isSingle: !1,
                                    format: i(986939).A.isMobile ? i(696654).NY.Large : i(696654).NY.Medium,
                                    showRemoveButton: e.showRemoveButton,
                                    onClickRemove: g,
                                    disabledFeedback: !0,
                                    value: (s = function() {
                                        let e = (0, n.jsx)(i(16275).I, {
                                            icon: i(211052).questionMarkCircleSmallIcon,
                                            size: "sm",
                                            style: r.style0
                                        });
                                        switch (c) {
                                            case "member":
                                                if ((0, i(888173).ju)(a)) return (0, n.jsx)(i(321753).A, {
                                                    userValue: a.value,
                                                    size: 16
                                                });
                                                if ((0, i(888173).rP)(a)) return (0, n.jsx)(i(321753).A, {
                                                    size: 16,
                                                    avatar: a.value
                                                });
                                                return (0, n.jsx)(i(321753).A, {
                                                    size: 16
                                                });
                                            case "guest":
                                            case "guestRequestRequired":
                                                return (0, n.jsx)(i(16275).I, {
                                                    icon: i(451034).globeSmallIcon,
                                                    size: "sm",
                                                    style: r.style1
                                                });
                                            case "invalidUser":
                                                return (0, n.jsx)(i(16275).I, {
                                                    icon: i(367752).personCropCircleBadgeExclamationPointSmallIcon,
                                                    size: "sm",
                                                    style: r.style2
                                                });
                                            case "verifiedDomain":
                                                return (0, n.jsx)(i(16275).I, {
                                                    icon: i(437102).checkmarkCircleSmallIcon,
                                                    size: "sm",
                                                    style: r.style3
                                                });
                                            case "group":
                                                return (0, n.jsx)("div", {
                                                    style: r.style4,
                                                    children: (0, n.jsx)(i(16275).I, {
                                                        icon: i(480605).peopleFillSmallIcon,
                                                        size: "xxs",
                                                        style: r.style5
                                                    })
                                                });
                                            case "spaceGuestDisabled":
                                            case "teamGuestDisabled":
                                            case "teamGroupOwner":
                                                return e;
                                            default:
                                                (0, i(722371).HB)(c)
                                        }
                                    }(), l = function() {
                                        switch (a.type) {
                                            case "newUser":
                                                return a.value.email.trim();
                                            case "invalidUser":
                                                return a.value.text.trim();
                                            case "existingUser":
                                                return (0, i(413818).c6)(o, a.value);
                                            case "group":
                                                return (0, i(405461).Pf)({
                                                    intl: o,
                                                    groupName: a.value.name
                                                });
                                            case "agent":
                                                return a.value.name;
                                            default:
                                                (0, i(722371).HB)(a)
                                        }
                                    }(), d = r.tokenText, e.onlyShowTokenType && (["guest", "teamGuestDisabled", "spaceGuestDisabled"].includes(c) ? (l = "Guest", d = { ...d,
                                        color: "#DAA340"
                                    }) : (l = "Member", d = { ...d,
                                        color: "#53A83F"
                                    })), (0, n.jsxs)(i(4458).fI, {
                                        alignItems: "center",
                                        maxWidth: "100%",
                                        children: [s, (0, n.jsx)("div", {
                                            style: d,
                                            children: l
                                        })]
                                    })),
                                    style: p,
                                    shouldWrap: !1
                                })
                            })
                        }
                    }, m)
                },
                o = {
                    gap: 2
                },
                l = {
                    paddingTop: 0
                },
                d = {
                    color: "#DE5550"
                },
                u = function(e) {
                    let {
                        flowId: t,
                        store: s,
                        disabled: r,
                        placeholder: u,
                        right: c,
                        focus: p,
                        hideIconColorAndTooltips: g,
                        showEmptyError: m,
                        origin: v,
                        onFocus: f,
                        onSubmit: y,
                        onInputChanged: h
                    } = e, b = (0, i(67499).S)(), x = (0, i(533992).v3)(), w = (0, i(682985).uB)(e.inviteTargetsStore, i(888173).Ay), T = (0, i(682985).K8)(() => w.state.inviteTargets, [w]), A = (0, i(682985).K8)(() => w.state.tokenQuery, [w]), S = T.map(e => {
                        let t = "newUser" === e.type ? e.value.email : "invalidUser" === e.type ? e.value.text : "agent" === e.type ? `agent-${e.value.botId}` : e.value.id;
                        return (0, n.jsx)(a, {
                            store: s,
                            target: e,
                            showRemoveButton: !0,
                            tokenType: g ? "member" : void 0,
                            onClickRemove: () => i(526113).S({
                                inviteTargetsStore: w,
                                targetToRemove: e
                            })
                        }, t)
                    }), j = (0, i(960253).I)(() => ({
                        tokenInputMenuItem: {
                            paddingTop: S.length > 0 ? 4 : 6,
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4,
                            paddingBottom: 4,
                            borderRadius: 4,
                            minHeight: 32,
                            ...p && {
                                background: "none"
                            },
                            ...r && {
                                background: i(632079).Tj.background.secondaryTranslucent,
                                color: i(632079).Tj.text.secondary,
                                fill: i(632079).oZ.white,
                                opacity: .4
                            }
                        }
                    }), [p, r, S]);
                    return (0, n.jsx)(i(160319).Ay, {
                        focus: p,
                        focusAfterAnimation: !0,
                        onClick: () => {
                            i(986939).A.isMobile || null == f || f()
                        },
                        format: i(160319).le.Share,
                        value: A,
                        onChange: e => i(526113).P({
                            environment: x,
                            event: e,
                            pageContext: b,
                            inviteTargetsStore: w,
                            inviteOrigin: v,
                            flowId: t,
                            onInputChanged: h
                        }),
                        type: "email",
                        tokens: S,
                        disabled: r,
                        autoComplete: "off",
                        placeholder: u,
                        onRemoveLastToken: () => {
                            w.setState({ ...w.state,
                                inviteTargets: w.state.inviteTargets.slice(0, -1)
                            })
                        },
                        right: c,
                        showBorder: !0,
                        inputStyle: l,
                        inputAndTokenWrapRightStyle: o,
                        style: j.tokenInputMenuItem,
                        onSubmit: y,
                        inputFullWidth: !0,
                        message: (0, n.jsx)(i(275372).p, {
                            invalidInvites: (0, i(381453).oE)(T.map(e => "invalidUser" === e.type ? e : void 0)),
                            showEmptyError: m,
                            styles: d
                        })
                    })
                };

            function c(e) {
                let {
                    isFirst: t,
                    isLast: s,
                    isSelected: r,
                    item: a,
                    itemStyle: o,
                    selectedItemStyle: l,
                    innerStyle: d,
                    children: u,
                    colors: c,
                    onClick: p
                } = e, {
                    isDisabled: g,
                    tooltip: m
                } = a, v = (0, i(960253).I)(() => {
                    let e = (null == c ? void 0 : c.selectedOutline) ? ? i(632079).Tj.blue.border.accentPrimary,
                        n = (null == c ? void 0 : c.unselectedOutline) ? ? i(632079).Tj.border.primaryTranslucent;
                    return {
                        SegmentedItem: {
                            alignItems: "center",
                            background: r ? null == c ? void 0 : c.selectedBackground : void 0,
                            borderEndStartRadius: 3 * !!t,
                            borderEndEndRadius: 3 * !!s,
                            borderColor: r ? e : n,
                            borderStyle: "solid",
                            borderStartStartRadius: 3 * !!t,
                            borderStartEndRadius: 3 * !!s,
                            borderWidth: 1,
                            cursor: g ? void 0 : "pointer",
                            display: "flex",
                            flexBasis: "50%",
                            marginInlineStart: t ? 0 : -1,
                            padding: 0,
                            userSelect: "none",
                            zIndex: 10 * !!r,
                            ...o,
                            ...r ? l : void 0
                        },
                        Inner: {
                            borderEndStartRadius: 2 * !!t,
                            borderEndEndRadius: 2 * !!s,
                            borderColor: r ? e : "transparent",
                            borderStyle: "solid",
                            borderStartStartRadius: 2 * !!t,
                            borderStartEndRadius: 2 * !!s,
                            borderWidth: 1,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "center",
                            padding: "12px 20px",
                            textAlign: "center",
                            width: "100%",
                            ...d
                        }
                    }
                }, [null == c ? void 0 : c.selectedBackground, null == c ? void 0 : c.selectedOutline, null == c ? void 0 : c.unselectedOutline, t, s, r, g, o, l, d]), f = () => {
                    p && p(a.key)
                };
                return (0, n.jsx)(i(51831).m, {
                    content: () => (0, n.jsx)("div", {
                        children: m
                    }),
                    disableTooltip: r || void 0 === m,
                    placement: "bottom",
                    children: e => (0, n.jsx)(i(64960).Ay, {
                        ariaLabel: a.ariaLabel,
                        "aria-pressed": r,
                        onClick: f,
                        style: v.SegmentedItem,
                        disabled: g,
                        ...e,
                        children: (0, n.jsx)("div", {
                            style: v.Inner,
                            children: u
                        })
                    })
                })
            }

            function p(e) {
                let {
                    items: t = [],
                    itemStyle: s,
                    selectedItemStyle: r,
                    innerStyle: a,
                    outerStyle: o,
                    value: l,
                    onChange: d,
                    colors: u
                } = e, p = (0, i(960253).I)(() => ({
                    SegmentedButton: {
                        background: i(632079).Tj.background.elevated,
                        display: "flex",
                        width: "100%",
                        ...o
                    }
                }), [o]);
                return 0 === t.length ? null : (0, n.jsx)("div", {
                    style: p.SegmentedButton,
                    children: t.map((e, i) => (0, n.jsx)(c, {
                        isFirst: 0 === i,
                        isLast: i === t.length - 1,
                        isSelected: e.key === l,
                        item: e,
                        itemStyle: s,
                        selectedItemStyle: r,
                        innerStyle: a,
                        colors: u,
                        onClick: d,
                        children: e.render()
                    }, e.key))
                })
            }
            i(16280), i(898992), i(354520), i(737550);
            let g = {
                mainTextSelected: {
                    fontWeight: i(699422).Wy.medium,
                    color: i(632079).Tj.text.primary,
                    fontSize: 14,
                    lineHeight: "14px"
                },
                mainTextUnselected: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: 14,
                    lineHeight: "14px"
                },
                row: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    lineHeight: "14px"
                },
                section: {
                    paddingTop: 16,
                    paddingInlineEnd: 11,
                    paddingBottom: 16,
                    paddingInlineStart: 11
                },
                itemStyle: {
                    margin: 5,
                    borderRadius: 8,
                    borderWidth: 2
                },
                innerStyle: {
                    borderWidth: 0
                },
                optionSubtitle: {
                    whiteSpace: "pre-wrap",
                    paddingTop: 2,
                    fontSize: 12
                }
            };

            function m(e) {
                let t, {
                        store: r,
                        sudoModeStore: a,
                        personPropertyInviteStore: o,
                        onInviteCompleteFn: l,
                        inviteOrigin: d
                    } = e,
                    u = (0, i(533992).v3)(),
                    c = (0, i(345776).T)(),
                    m = (0, i(682985).uB)(e.inviteTargetsStore, i(888173).Ay),
                    v = (0, i(682985).K8)(() => o.state.isLoading, [o]),
                    y = (0, s.useCallback)(e => {
                        o.setState({ ...o.state,
                            isLoading: e,
                            focus: i(161591).E.NoFocus
                        })
                    }, [o]),
                    [x, w] = (0, s.useState)("member"),
                    T = (0, i(682985).K8)(() => {
                        let {
                            emailMessage: e
                        } = o.state;
                        return e
                    }, [o]),
                    A = (0, i(682985).K8)(() => {
                        let {
                            role: e
                        } = o.state;
                        return e
                    }, [o]),
                    S = (0, i(109939).tz)(),
                    j = (0, i(682985).K8)(() => o.state.flowId, [o]),
                    {
                        spaceId: M,
                        spaceStore: _
                    } = (0, i(682985).K8)(() => {
                        let e = (0, i(974410).f)(r);
                        return {
                            spaceId: null == e ? void 0 : e.id,
                            spaceStore: e
                        }
                    }, [r]),
                    I = (0, i(682985).K8)(() => r.canEditMembership(), [r]),
                    k = (0, i(682985).K8)(() => (0, i(261133).U1)({
                        inviteTargetsStore: m
                    }), [m]),
                    C = (0, s.useCallback)(async () => {
                        await i(910772).handleEnterPress({
                            environment: u,
                            inviteTargetsStore: m,
                            personPropertyInviteStore: o,
                            allowShowEmptyError: !0
                        })
                    }, [u, m, o]),
                    R = (0, s.useCallback)(() => {
                        let e = (0, i(261133).U1)({
                                inviteTargetsStore: m
                            }),
                            t = e.filter(({
                                type: e
                            }) => "newUser" === e).map(({
                                value: e
                            }) => e.email),
                            s = e.filter(({
                                type: e
                            }) => "existingUser" === e).map(({
                                value: e
                            }) => e.id);
                        return i(862085).FC({
                            environment: u,
                            newGuestIds: [...t, ...s]
                        })
                    }, [m, u]),
                    P = (0, i(429015).A)(r),
                    E = (0, i(682985).K8)(() => {
                        if (P.isGuestRequestRequired) return !1;
                        let e = P.isStoreInTeam && !P.teamAllowsGuests,
                            t = !P.isStoreInTeam && !P.spaceAllowsGuests || P.isStoreInTeam && !P.teamAllowsGuests && !P.spaceAllowsGuests,
                            i = k.some(e => "newUser" === e.type || ("existingUser" === e.type ? "page_guest" === e.membershipType || "none" === e.membershipType : void 0));
                        return (e || t) && i
                    }, [k, P]),
                    D = (0, i(682985).K8)(() => null == _ ? void 0 : _.getRole(), [_]),
                    U = (0, i(682985).K8)(() => !(!D || !(0, i(642157).NB)(D) || !_ || _.getDisableMembershipRequests()), [D, _]),
                    B = !!((0, i(611285).P)({
                        name: "members",
                        spaceId: M,
                        userId: c,
                        amount: 1
                    }) && D && (0, i(642157).vp)(D));
                (0, s.useEffect)(() => {
                    B ? w("member") : w("guest")
                }, [B]);
                let L = (0, i(217844)._)({
                        name: "guests",
                        spaceId: M,
                        userId: c,
                        amount: 1
                    }),
                    F = (0, i(371927).N)(r),
                    G = T.length > 1e3,
                    N = (0, s.useCallback)(e => {
                        let {
                            response: t,
                            shouldDoCompleteFn: s,
                            invitedUserEmails: n,
                            isRequestMember: r
                        } = e;
                        t.success ? s && (i(287621).cI(u, {
                            invited_user_count: n.length,
                            is_success: t.success,
                            can_add_member: B,
                            invite_option: x,
                            origin: d,
                            invite_flow_id: j
                        }), i(910772).showMessageForInviteComplete({
                            success: t.success,
                            invitedUserEmails: n,
                            isRequestMember: r
                        }), y(!1), l(t)) : (i(910772).showMessageForInviteComplete({
                            success: t.success,
                            invitedUserEmails: n
                        }), i(287621).cI(u, {
                            invited_user_count: n.length,
                            is_success: t.success,
                            can_add_member: B,
                            invite_option: x,
                            origin: d
                        }))
                    }, [l, j, y, u, x, B, d]),
                    q = (0, s.useCallback)(async e => {
                        let {
                            invitedUserEmails: t,
                            shouldDoCompleteFn: s
                        } = e;
                        return await i(910772).handleGuestInvite({
                            environment: u,
                            inviteOrigin: d,
                            role: A,
                            emailMessage: T,
                            inviteTargetsStore: m,
                            blockStore: r,
                            sudoModeStore: a,
                            flowId: j,
                            onInviteComplete: e => {
                                N({
                                    response: e,
                                    shouldDoCompleteFn: s || !1,
                                    invitedUserEmails: t
                                })
                            }
                        })
                    }, [u, A, T, r, a, j, m, N, d]),
                    W = (0, s.useCallback)(async e => {
                        let {
                            invitedUserEmails: t,
                            disable_invite_email: s,
                            guestInviteResponse: n,
                            shouldDoCompleteFn: r
                        } = e;
                        if (!_) return null;
                        let a = null != n && n.success ? n.invitedUsers : void 0;
                        await i(910772).handleMemberInvite({
                            environment: u,
                            spaceStore: _,
                            flowId: j,
                            onInviteComplete: e => {
                                N({
                                    response: e,
                                    shouldDoCompleteFn: r || !1,
                                    invitedUserEmails: t
                                })
                            },
                            intl: S,
                            invitedUsers: a,
                            inviteTargetsStore: m,
                            inviteOrigin: d,
                            disable_invite_email: s
                        })
                    }, [_, u, j, m, S, N, d]),
                    K = (0, s.useCallback)(async e => {
                        let {
                            invitedUserEmails: t,
                            guestInviteResponse: s
                        } = e;
                        if (!_) return null;
                        let n = null != s && s.success ? s.invitedUsers : void 0;
                        n && await i(910772).handleMemberRequest({
                            environment: u,
                            spaceStore: _,
                            originType: "person_property_invite",
                            intl: S,
                            invitedUsers: n,
                            reasonMessage: void 0,
                            originId: r.id,
                            flowId: j,
                            onInviteComplete: e => {
                                N({
                                    response: e,
                                    shouldDoCompleteFn: !0,
                                    invitedUserEmails: t,
                                    isRequestMember: !0
                                })
                            },
                            inviteOrigin: d
                        })
                    }, [u, j, _, S, N, r, d]),
                    O = (0, s.useCallback)(async () => {
                        let e = "member" === x,
                            t = m.state.inviteTargets.filter(e => "newUser" === e.type || "existingUser" === e.type).map(e => e.value.email);
                        if (0 === t.length) return void i(287621).N_(u, {
                            invite_stage: "click_invite_button",
                            invite_flow_id: j,
                            error: "No valid input emails"
                        });
                        let s = R();
                        if (y(!0), e)
                            if (s) await W({
                                invitedUserEmails: t,
                                disable_invite_email: !1,
                                guestInviteResponse: void 0,
                                shouldDoCompleteFn: !0
                            });
                            else {
                                let e = !B && !U,
                                    i = await q({
                                        invitedUserEmails: t,
                                        shouldDoCompleteFn: e
                                    });
                                B ? await W({
                                    invitedUserEmails: t,
                                    disable_invite_email: !0,
                                    guestInviteResponse: i,
                                    shouldDoCompleteFn: !0
                                }) : U && await K({
                                    invitedUserEmails: t,
                                    guestInviteResponse: i
                                })
                            }
                        else s ? i(287621).N_(u, {
                            invite_stage: "click_invite_button",
                            invite_flow_id: j,
                            error: "Invite guest with guest limitation exceed"
                        }) : await q({
                            invitedUserEmails: t,
                            shouldDoCompleteFn: !0
                        });
                        y(!1), m.reset()
                    }, [u, B, U, x, j, R, m, q, W, K, y]),
                    z = (0, s.useCallback)(async () => {
                        await C();
                        let e = (0, i(261133).U1)({
                            inviteTargetsStore: m
                        }).length;
                        i(287621).u$(u, {
                            invited_user_count: e,
                            invite_option: x,
                            can_add_member: B,
                            origin: d,
                            inviteTargets: m.state.inviteTargets.map(e => e.type.toString()),
                            inviteTokenQuery: m.state.tokenQuery,
                            invite_flow_id: j
                        }), await O()
                    }, [u, j, C, O, x, B, m, d]);
                t = E ? F : G ? (0, n.jsx)(i(109939).sA, {
                    id: "shareMenu.inviteButton.emailOverMaxLength.tooltip",
                    defaultMessage: "Message exceeds the limit of 1000 characters."
                }) : void 0;
                let V = (0, s.useMemo)(() => [{
                    key: "member",
                    render: () => (0, n.jsx)(i(51831).m, {
                        disableTooltip: B || U,
                        content: () => (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.invite_member.tooltip",
                            defaultMessage: "You do not have permission to add or request members to this workspace"
                        }),
                        children: e => (0, n.jsx)(b, {
                            isSelected: "member" === x,
                            inviteOption: "member",
                            events: e
                        })
                    }),
                    isDisabled: !B && !U
                }, {
                    key: "guest",
                    render: () => (0, n.jsx)(i(51831).m, {
                        disableTooltip: (0, i(811656).e2)(L),
                        content: () => (0, i(811656).Vi)(L, e => (0, n.jsx)(i(186557).j, {
                            featureAvailability: e
                        })),
                        children: e => (0, n.jsx)(b, {
                            isSelected: "guest" === x,
                            inviteOption: "guest",
                            events: e
                        })
                    })
                }], [x, L, B, U]);
                return (0, n.jsxs)(i(4458).VP, {
                    justifyContent: "space-between",
                    children: [(0, n.jsx)("div", {
                        style: g.section,
                        children: (0, n.jsx)(p, {
                            items: V,
                            itemStyle: g.itemStyle,
                            innerStyle: g.innerStyle,
                            value: x,
                            onChange: e => {
                                w(e), i(287621).ZZ(u, {
                                    invite_option: e,
                                    invite_flow_id: j,
                                    origin: d
                                })
                            }
                        })
                    }), "guest" === x && (0, i(94418).Pd)(L) ? (0, n.jsx)(f, {
                        featureAvailability: L,
                        onClick: () => {
                            i(287621).j$(u, {
                                invited_user_count: k.length,
                                invite_flow_id: j,
                                origin: d
                            }), i(929447).D6({
                                environment: u,
                                upgradeButtonName: "user_permission_item",
                                spaceStore: _
                            })
                        }
                    }) : (0, n.jsx)(h, {
                        tooltip: t,
                        disabled: !I || E || G,
                        onClick: z,
                        isLoading: v
                    })]
                })
            }
            let v = {
                marginTop: 0,
                marginInlineEnd: 16,
                marginBottom: 16,
                marginInlineStart: 16,
                borderRadius: 6
            };

            function f(e) {
                let {
                    onClick: t,
                    featureAvailability: s
                } = e;
                return (0, n.jsx)(i(51831).m, {
                    disableTooltip: !1,
                    content: () => (0, n.jsx)(i(186557).j, {
                        featureAvailability: s
                    }),
                    children: e => (0, n.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        size: "lg",
                        style: v,
                        onClick: t,
                        ...e,
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.upgrade",
                            defaultMessage: "Upgrade"
                        })
                    })
                })
            }
            let y = {
                marginTop: 0,
                marginInlineEnd: 16,
                marginBottom: 16,
                marginInlineStart: 16,
                borderRadius: 6
            };

            function h(e) {
                let {
                    tooltip: t,
                    disabled: s,
                    onClick: r,
                    isLoading: a
                } = e;
                return (0, n.jsx)(i(51831).m, {
                    disableTooltip: !t,
                    content: () => t,
                    children: e => (0, n.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        size: "lg",
                        style: y,
                        disabled: s,
                        onClick: r,
                        ...e,
                        isLoading: a,
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.invite",
                            defaultMessage: "Invite"
                        })
                    })
                })
            }

            function b(e) {
                let t, s, {
                        isSelected: r,
                        inviteOption: a,
                        events: o
                    } = e,
                    l = r ? g.mainTextSelected : g.mainTextUnselected;
                switch (a) {
                    case "guest":
                        t = (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.addAsGuest.title",
                            defaultMessage: "Add to page only"
                        }), s = (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.addAsGuest.subtitle",
                            defaultMessage: "Invite as a Guest"
                        });
                        break;
                    case "member":
                        t = (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.addAsMember.title",
                            defaultMessage: "Add to Workspace"
                        }), s = (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.addAsMember.subtitle",
                            defaultMessage: "Invite and bill as a Member"
                        });
                        break;
                    default:
                        throw Error(`Unsupported invite option: ${a}`)
                }
                return (0, n.jsx)("div", {
                    style: g.row,
                    ...o,
                    children: (0, n.jsxs)("div", {
                        style: l,
                        children: [t, (0, n.jsx)(i(324489).V, {
                            isSmall: !0,
                            style: g.optionSubtitle,
                            children: s
                        })]
                    })
                })
            }
            let x = {
                display: "flex",
                margin: "0 12px 0px",
                height: 40
            };

            function w({
                handleBackButtonClick: e
            }) {
                return (0, n.jsx)("div", {
                    style: x,
                    children: (0, n.jsx)(A, {
                        onClick: e
                    })
                })
            }
            let T = {
                iconButton: {
                    marginInlineEnd: 6,
                    height: 24,
                    width: 24
                },
                arrowIcon: {
                    height: i(104509).Ev.sm,
                    width: i(104509).Ev.sm
                },
                sendInviteLabel: {
                    fontWeight: i(699422).Wy.medium
                }
            };

            function A(e) {
                let {
                    onClick: t
                } = e, s = (0, i(109939).tz)();
                return (0, n.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    width: "max-content",
                    children: [(0, n.jsx)(i(374533).A, {
                        icon: i(374241).arrowStraightLeftSmallIcon,
                        iconStyle: T.arrowIcon,
                        style: T.iconButton,
                        onClick: t,
                        ariaLabel: s.formatMessage({
                            id: "shareMenu.backButton.iconButton",
                            defaultMessage: "Go back to main share menu."
                        })
                    }), (0, n.jsx)(i(324489).V, {
                        style: T.sendInviteLabel,
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "invite.person_property.popup_title",
                            defaultMessage: "Invite and mention"
                        })
                    })]
                })
            }
            let S = i(381453).sg(({
                environment: e,
                flowId: t,
                origin: s
            }) => {
                i(287621).IT(e, {
                    origin: s,
                    invite_flow_id: t
                })
            }, 1e3);

            function j(e) {
                let {
                    inviteTargetsStore: t,
                    personPropertyInviteStore: r,
                    inviteOrigin: a
                } = e, o = (0, i(533992).v3)(), {
                    focus: l,
                    emailMessage: d
                } = (0, i(682985).K8)(() => {
                    let {
                        focus: e,
                        emailMessage: t
                    } = r.state;
                    return {
                        focus: e,
                        emailMessage: t
                    }
                }, [r]), u = (0, i(682985).K8)(() => r.state.flowId, [r]), c = (0, s.useCallback)(() => {
                    t.reset()
                }, [t]), p = (0, s.useCallback)(e => {
                    r.setState({ ...r.state,
                        focus: l,
                        emailMessage: e.target.value
                    }), S({
                        environment: o,
                        flowId: u,
                        origin: a
                    })
                }, [o, r, u, a, l]), g = (0, s.useCallback)(() => {
                    c()
                }, [c]), m = (0, s.useCallback)(() => {
                    r.setState({ ...r.state,
                        focus: i(161591).E.MessageInput,
                        emailMessage: d
                    })
                }, [r, d]);
                return (0, n.jsx)(_, {
                    focus: l === i(161591).E.MessageInput,
                    value: d,
                    onFocus: m,
                    onChange: p,
                    onCancel: g,
                    maxLength: 1e3,
                    inviteTargetsStore: t
                })
            }
            let M = {
                container: {
                    maxHeight: 80,
                    bottom: 0,
                    paddingTop: 2,
                    paddingInlineEnd: 16,
                    paddingBottom: 2,
                    paddingInlineStart: 16,
                    backgroundColor: i(632079).Tj.background.elevated,
                    pointerEvents: "all",
                    transitionProperty: "max-height",
                    transitionDuration: "0.3s",
                    overflow: "hidden",
                    zIndex: 1,
                    height: 72
                },
                input: {
                    maxHeight: 80,
                    borderTop: 1,
                    borderTopStyle: "solid",
                    borderTopColor: i(632079).Tj.border.secondaryTranslucent,
                    padding: 2,
                    fontSize: 14,
                    transitionProperty: "max-height",
                    transitionDuration: "0.3s",
                    height: "100%"
                }
            };

            function _(e) {
                let {
                    focus: t,
                    value: s,
                    maxLength: r,
                    inviteTargetsStore: a,
                    onFocus: o,
                    onChange: l,
                    onCancel: d
                } = e, u = (0, i(109939).tz)(), c = s.length / r >= .8, p = (0, i(765898).BS)(s), g = c || p, m = (0, i(960253).I)(() => ({
                    inputBox: {
                        paddingTop: 0,
                        paddingInlineEnd: 4,
                        paddingBottom: 0,
                        paddingInlineStart: 4,
                        boxShadow: `${i(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        background: i(632079).Tj.background.secondaryTranslucent,
                        width: "auto",
                        height: "100%",
                        borderRadius: 6,
                        ...t && {
                            background: "none",
                            boxShadow: i(632079).Tj.inputBlueFocusRing
                        }
                    }
                }), [t]), v = (0, i(682985).K8)(() => a.state.inviteTargets.filter(e => "newUser" === e.type || "existingUser" === e.type).map(e => e.value.email), [a]), f = (0, i(682985).K8)(() => v.length > 0 ? u.formatMessage({
                    id: "invite.person_property.emailMessageInput.placeholder.withEmails",
                    defaultMessage: "Add a message for {users}"
                }, {
                    users: (0, i(890142).l)(v)
                }) : u.formatMessage({
                    id: "invite.person_property.emailMessageInput.placeholder.noEmails",
                    defaultMessage: "Add a message to your invite..."
                }), [u, v]);
                return (0, n.jsxs)("div", {
                    style: M.container,
                    children: [g ? (0, n.jsx)(k, {
                        value: s,
                        maxLength: r,
                        shouldShowLengthWarning: c,
                        shouldShowLinkWarning: p
                    }) : void 0, (0, n.jsx)(i(36481).p, {
                        textarea: !0,
                        focusInitial: !1,
                        format: "transparent",
                        placeholder: f,
                        maxlength: r,
                        focus: t,
                        value: s,
                        onFocus: o,
                        onChange: l,
                        inputStyle: M.input,
                        onCancel: d,
                        style: m.inputBox,
                        onClick: () => {
                            i(986939).A.isMobile || null == o || o()
                        }
                    })]
                })
            }
            let I = {
                container: {
                    position: "absolute",
                    top: 0,
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 12,
                    color: i(632079).Tj.text.tertiary,
                    width: "100%"
                },
                warning: {
                    display: "flex",
                    justifyContent: "center",
                    width: "calc(100% - 36px)",
                    backgroundColor: i(632079).Tj.background.elevated,
                    marginTop: 1
                }
            };

            function k(e) {
                let {
                    shouldShowLengthWarning: t,
                    shouldShowLinkWarning: s,
                    value: r,
                    maxLength: a
                } = e;
                return (0, n.jsx)("div", {
                    style: I.container,
                    children: (0, n.jsxs)("div", {
                        style: I.warning,
                        children: [t ? (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "{characters} / {maxCharacters} characters",
                            id: "ContextualInvite.permissions_invites.messageLengthWarning",
                            values: {
                                characters: r.length,
                                maxCharacters: a
                            }
                        }) : void 0, t && s ? " · " : void 0, s ? (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Links will be omitted from your message",
                            id: "ContextualInvite.permissions_invites.removeLinkWarning"
                        }) : void 0]
                    })
                })
            }
            let C = {
                    position: "relative",
                    width: 450,
                    transition: "all",
                    transitionDuration: "0.3s",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: 500
                },
                R = {
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    paddingBottom: 16,
                    paddingTop: 16
                },
                P = {
                    margin: "0",
                    color: "#E3E2E0",
                    opacity: .3
                };

            function E(e) {
                let {
                    store: t,
                    handleBackButtonClick: r,
                    onInviteCompleteFn: a,
                    inviteTargetsStore: o,
                    personPropertyInviteStore: l,
                    inviteOrigin: d
                } = e, u = (0, i(682985).uB)(void 0, i(874003).A), c = (0, i(533992).v3)(), p = (0, s.useCallback)(async () => {
                    await i(910772).handleEnterPress({
                        environment: c,
                        inviteTargetsStore: o,
                        personPropertyInviteStore: l,
                        allowShowEmptyError: !1
                    })
                }, [c, o, l]);
                return (0, n.jsx)(i(369064).N, {
                    debugName: "PersonPropertyInvitePopup",
                    capture: !0,
                    onLeft: i(763230).D_,
                    onRight: i(763230).D_,
                    onSelectAll: i(763230).D_,
                    onRedo: i(763230).D_,
                    onUndo: i(763230).D_,
                    onCut: i(763230).D_,
                    onCopy: i(763230).D_,
                    onPaste: i(763230).D_,
                    onKeypress: i(763230).D_,
                    onDelete: i(763230).D_,
                    onBackspace: i(763230).D_,
                    onTab: i(763230).D_,
                    onEnter: p,
                    children: (0, n.jsxs)("div", {
                        style: C,
                        children: [(0, n.jsx)(w, {
                            handleBackButtonClick: r
                        }), (0, n.jsx)("hr", {
                            style: P
                        }), (0, n.jsx)("div", {
                            style: R,
                            children: (0, n.jsx)(U, {
                                store: t,
                                inviteTargetsStore: o,
                                personPropertyInviteStore: l,
                                inviteOrigin: d
                            })
                        }), (0, n.jsx)(j, {
                            store: t,
                            inviteTargetsStore: o,
                            personPropertyInviteStore: l,
                            inviteOrigin: d
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(m, {
                                store: t,
                                inviteTargetsStore: o,
                                sudoModeStore: u,
                                onInviteCompleteFn: a,
                                personPropertyInviteStore: l,
                                inviteOrigin: d
                            })
                        })]
                    })
                })
            }
            let D = {
                permissionsRoleSelectButton: {
                    display: "flex",
                    whiteSpace: "nowrap",
                    height: 20,
                    margin: 0,
                    borderRadius: 4,
                    color: i(632079).oZ.uiGray
                },
                style0: {
                    display: "flex"
                }
            };

            function U(e) {
                let {
                    store: t,
                    personPropertyInviteStore: s,
                    inviteOrigin: r
                } = e, a = (0, i(109939).tz)(), o = (0, i(533992).v3)(), l = (0, i(682985).uB)(e.inviteTargetsStore, i(888173).Ay), d = (0, i(682985).K8)(() => t.getSpaceStore(), [t]), c = (0, i(557620).A)(d), {
                    focus: p,
                    emailMessage: g
                } = (0, i(682985).K8)(() => {
                    let {
                        focus: e,
                        emailMessage: t
                    } = s.state;
                    return {
                        focus: e,
                        emailMessage: t
                    }
                }, [s]), {
                    role: m,
                    showEmptyError: v
                } = (0, i(682985).K8)(() => {
                    let {
                        role: e,
                        showEmptyError: t
                    } = s.state;
                    return {
                        role: e,
                        showEmptyError: t
                    }
                }, [s]), f = (0, i(682985).K8)(() => t.getType(), [t]), y = (0, i(682985).K8)(() => s.state.flowId, [s]), h = (0, i(682985).K8)(() => t.canEditMembership(), [t]);
                return d && c ? (0, n.jsx)(i(51831).m, {
                    disableTooltip: h,
                    content: () => {
                        if (!h) return (0, n.jsx)(i(109939).sA, {
                            id: "shareMenu.inviteButton.fullAccessOnlyMessage.tooltip",
                            defaultMessage: "Only those with full access can add people."
                        })
                    },
                    children: e => (0, n.jsx)("div", {
                        style: D.style0,
                        ...e,
                        children: (0, n.jsx)(u, {
                            inviteTargetsStore: l,
                            store: d,
                            disabled: !h,
                            origin: r,
                            flowId: y,
                            focus: p === i(161591).E.InviteInput,
                            showEmptyError: v,
                            onFocus: () => {
                                s.setState({ ...s.state,
                                    focus: i(161591).E.InviteInput,
                                    emailMessage: g || ""
                                })
                            },
                            placeholder: a.formatMessage({
                                id: "invite.person_property.inviteTargetsInput.placeholder",
                                defaultMessage: "Add emails..."
                            }),
                            onInputChanged: () => s.setState({ ...s.state,
                                showEmptyError: !1
                            }),
                            right: (0, n.jsx)(i(761163).Ay, {
                                spaceStore: d,
                                disabled: !h,
                                role: m,
                                table: "block",
                                type: "user_permission",
                                blockType: f,
                                isInvite: !0,
                                upgradeButtonName: "invite_permission_block",
                                buttonStyle: D.permissionsRoleSelectButton,
                                isMenuItem: !1,
                                onChange: e => {
                                    s.setState({ ...s.state,
                                        role: e
                                    }), i(287621).et(o, {
                                        invited_role: e,
                                        invite_flow_id: y,
                                        origin: r
                                    })
                                }
                            })
                        })
                    })
                }) : null
            }
        },
        371927: (e, t, i) => {
            i.d(t, {
                N: () => n
            }), i(296540);
            var s = i(474848);

            function n(e) {
                let t = (0, i(429015).A)(e);
                return t.isGuestRequestRequired ? (0, s.jsx)(i(109939).sA, {
                    id: "contextualInvite.buttonAndTokenTooltip.guestRequestRequired",
                    defaultMessage: "This guest must be approved by a workspace owner first"
                }) : t.isStoreInTeam ? t.teamAllowsGuests ? void 0 : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "contextualInvite.buttonAndTokenTooltip.teamDisablesGuestsAlertLine1",
                            defaultMessage: "This teamspace doesn’t allow guests."
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "contextualInvite.buttonAndTokenTooltip.teamDisablesGuestsAlertLine2",
                            defaultMessage: "Remove any guests to continue."
                        })
                    })]
                }) : t.spaceAllowsGuests ? void 0 : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "contextualInvite.buttonAndTokenTooltip.spaceDisablesGuestsAlertLine1",
                            defaultMessage: "This workspace doesn’t allow guests."
                        })
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "contextualInvite.buttonAndTokenTooltip.spaceDisablesGuestsAlertLine2",
                            defaultMessage: "Remove any guests to continue."
                        })
                    })]
                })
            }
        },
        429015: (e, t, i) => {
            function s(e, t) {
                return (0, i(447576).h)(e) ? {
                    isGuestRequestRequired: !0
                } : t ? {
                    isStoreInTeam: !0,
                    teamAllowsGuests: !0,
                    spaceAllowsGuests: !0,
                    isGuestRequestRequired: !1
                } : {
                    isStoreInTeam: !1,
                    spaceAllowsGuests: !0,
                    isGuestRequestRequired: !1
                }
            }
            i.d(t, {
                A: () => n
            });
            let n = function(e) {
                return (0, i(682985).K8)(() => {
                    if ((0, i(966980).nw)(e)) return {
                        isStoreInTeam: !1,
                        spaceAllowsGuests: !0,
                        isGuestRequestRequired: !1
                    };
                    if ("workflow" === e.table) {
                        let t = (0, i(974410).f)(e);
                        return (0, i(575190).r)(t) ? s(t, void 0) : {
                            isStoreInTeam: !1,
                            spaceAllowsGuests: !(null != t && t.getDisableGuests()),
                            isGuestRequestRequired: !1
                        }
                    }
                    if (!(0, i(966980)._p)(e)) return (0, i(575190).r)(e) ? s(e, void 0) : {
                        isStoreInTeam: !1,
                        spaceAllowsGuests: !0,
                        isGuestRequestRequired: !1
                    };
                    let t = (0, i(297311).U)(e),
                        n = (0, i(197788).p)(e),
                        r = n || (0, i(974410).f)(e);
                    if ((0, i(575190).r)(r)) return s(r, t);
                    let a = !(null != n && n.getDisableGuests());
                    return t ? {
                        isStoreInTeam: !0,
                        teamAllowsGuests: !t.getDisableGuests(),
                        spaceAllowsGuests: a,
                        isGuestRequestRequired: !1
                    } : {
                        isStoreInTeam: !1,
                        spaceAllowsGuests: a,
                        isGuestRequestRequired: !1
                    }
                }, [e])
            }
        },
        449074: (e, t, i) => {
            i.d(t, {
                f: () => s
            });

            function s(e) {
                return i(262166).dL(e)
            }
        },
        487604: (e, t, i) => {
            i.d(t, {
                u: () => n
            }), i(296540);
            var s = i(474848);

            function n() {
                return (0, s.jsx)(i(746434).E, {
                    color: "gray",
                    content: (0, s.jsx)(i(109939).sA, {
                        id: "disabledBadgeComponent.label",
                        defaultMessage: "Disabled"
                    })
                })
            }
        },
        526113: (e, t, i) => {
            i.d(t, {
                P: () => n,
                S: () => r
            }), i(898992), i(354520), i(581454);
            let s = i(381453).sg(({
                flowId: e,
                billingData: t,
                origin: s
            }) => {
                i(179701).D2({
                    invite_flow_id: e,
                    billingData: t,
                    invite_origin: s
                })
            }, 1e3);
            async function n(e) {
                var t;
                let {
                    environment: n,
                    pageContext: r,
                    event: a,
                    flowId: o,
                    inviteTargetsStore: l,
                    inviteOrigin: d,
                    onInputChanged: u
                } = e;
                null == u || u();
                let c = null == (t = (0, i(888).$)(r)) ? void 0 : t.id,
                    p = await (0, i(226309).yk)({
                        environment: n,
                        spaceId: c
                    });
                l.setState({ ...l.state,
                    tokenQuery: a.target.value
                }), s({
                    flowId: o,
                    billingData: p,
                    origin: d
                });
                let g = a.target.value,
                    {
                        extractedEmails: m,
                        invalidParts: v,
                        newInputValue: f
                    } = (0, i(801109).l2)(g),
                    y = [...await i(929447).Ah(n, m), ...v.map(e => ({
                        type: "invalidUser",
                        value: {
                            text: e
                        }
                    }))].filter(e => !i(261133).P4({
                        inviteTargetsStore: l,
                        target: e
                    })),
                    h = [...l.state.inviteTargets, ...y];
                l.setState({ ...l.state,
                    inviteTargets: h,
                    tokenQuery: f
                })
            }

            function r(e) {
                let {
                    targetToRemove: t,
                    inviteTargetsStore: i
                } = e;
                if (0 === i.state.inviteTargets.length) return;
                let s = i.state.inviteTargets.filter(e => e !== t);
                0 === s.length ? i.setState({ ...i.state,
                    inviteTargets: []
                }) : i.setState({ ...i.state,
                    inviteTargets: s
                })
            }
        },
        587832: (e, t, i) => {
            async function s(e) {
                let {
                    index: t
                } = await (0, i(901282).Fr)(), s = e.map(e => {
                    var t;
                    let s = null == (t = e.getPublishedArtifactStore()) ? void 0 : t.getData(),
                        r = e.getDraftData(),
                        a = s ? ? r;
                    return {
                        id: e.id,
                        text: n(e),
                        inits: (0, i(168534).IM)((null == a ? void 0 : a.name) || ""),
                        block: e
                    }
                });
                return await t.addAllAsync(s), t
            }

            function n(e) {
                return e.getName() ? ? ""
            }

            function r(e) {
                let {
                    query: t,
                    workflowStores: s,
                    limit: n = 10
                } = e;
                return t && 0 !== t.trim().length ? (0, i(821048).Ay)(t, s, e => e.getName() ? ? "", {
                    normalizeFuzzyScore: !0
                }).slice(0, n) : s.slice(0, n)
            }

            function a(e) {
                let {
                    query: t,
                    agentIndex: i,
                    limit: s = 100
                } = e;
                return t && 0 !== t.trim().length ? i.search(t, {
                    prefix: !0,
                    fields: ["text", "inits"]
                }).slice(0, s).map(e => e.block) : []
            }
            i.r(t), i.d(t, {
                createCustomAgentSearchIndex: () => s,
                getWorkflowSearchText: () => n,
                searchWorkflowStores: () => r,
                searchWorkflowStoresWithMinisearchIndex: () => a
            }), i(581454)
        },
        604384: (e, t, i) => {
            function s(e) {
                var t;
                if (!e) return !1;
                let s = e.getDataStore().getValue();
                if (!s) return !1;
                let n = null == (t = s.paused_reason) ? void 0 : t.reason;
                return "paused" === s.status && (0, i(425749).cE)(n)
            }

            function n(e) {
                var t;
                if (!e) return;
                let i = e.getDataStore().getValue();
                if (i && (!i.status || "paused" === i.status)) return null == (t = i.paused_reason) ? void 0 : t.reason
            }

            function r(e) {
                var t;
                if (!e) return;
                let s = e.getDraftData() ? ? e.getData();
                if (!s || s.status && "paused" !== s.status) return;
                let n = null == (t = s.paused_reason) ? void 0 : t.reason;
                return (0, i(425749).I$)(n) ? n : void 0
            }

            function a(e, t) {
                switch (e) {
                    case "runLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runLimit",
                            defaultMessage: "Run limit reached for this agent"
                        });
                    case "creditLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.creditLimit",
                            defaultMessage: "Credit limit reached for this agent"
                        });
                    case "runawayCreditUsage":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runawayCreditUsage",
                            defaultMessage: "Auto-paused for unusually high credit usage"
                        });
                    case "failureLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.failureLimit",
                            defaultMessage: "Too many failures for this agent"
                        });
                    case "workspaceSpendLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.workspaceSpendLimit",
                            defaultMessage: "Workspace custom agent usage limit reached"
                        });
                    case "disabledByAdmin":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByAdmin",
                            defaultMessage: "Disabled by workspace owner"
                        });
                    case "orphanedAutoDisable":
                        return t.formatMessage({
                            id: "workflow.pausedReason.orphanedAutoDisable",
                            defaultMessage: "Automatically disabled — no full access members"
                        });
                    case "disabledByNotion":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByNotion",
                            defaultMessage: "Temporarily disabled."
                        });
                    case "internalError":
                        return t.formatMessage({
                            id: "workflow.pausedReason.internalError",
                            defaultMessage: "Internal error"
                        });
                    case "needsReview":
                        return t.formatMessage({
                            id: "workflow.pausedReason.needsReview",
                            defaultMessage: "Needs review"
                        });
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function o(e, t) {
                switch (e) {
                    case "runLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runLimit.short",
                            defaultMessage: "Run limit"
                        });
                    case "creditLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.creditLimit.short",
                            defaultMessage: "Credit limit"
                        });
                    case "runawayCreditUsage":
                        return t.formatMessage({
                            id: "workflow.pausedReason.runawayCreditUsage.short",
                            defaultMessage: "Auto-paused"
                        });
                    case "failureLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.failureLimit.short",
                            defaultMessage: "Failures"
                        });
                    case "workspaceSpendLimit":
                        return t.formatMessage({
                            id: "workflow.pausedReason.workspaceSpendLimit.short",
                            defaultMessage: "Workspace limit"
                        });
                    case "disabledByAdmin":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByAdmin.short",
                            defaultMessage: "Disabled"
                        });
                    case "orphanedAutoDisable":
                        return t.formatMessage({
                            id: "workflow.pausedReason.orphanedAutoDisable.short",
                            defaultMessage: "No owner"
                        });
                    case "disabledByNotion":
                        return t.formatMessage({
                            id: "workflow.pausedReason.disabledByNotion.short",
                            defaultMessage: "Disabled"
                        });
                    case "internalError":
                        return t.formatMessage({
                            id: "workflow.pausedReason.internalError.short",
                            defaultMessage: "Error"
                        });
                    case "needsReview":
                        return t.formatMessage({
                            id: "workflow.pausedReason.needsReview.short",
                            defaultMessage: "Needs review"
                        });
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function l(e) {
                let {
                    runStatus: t,
                    runPausedReason: i
                } = e;
                return "paused" === t && ("creditLimit" === i || "runLimit" === i || "runawayCreditUsage" === i)
            }
            i.d(t, {
                QF: () => l,
                R6: () => o,
                W0: () => n,
                jp: () => s,
                of: () => a,
                uf: () => r
            })
        },
        658157: (e, t, i) => {
            i.d(t, {
                Sl: () => l,
                i5: () => r,
                ol: () => n,
                xU: () => o
            }), i(898992), i(672577), i(803949);
            let s = (0, i(109939).YK)({
                JiraAuthenticationInvalidDetails: {
                    id: "jiraImport.invalidDetails",
                    defaultMessage: "Invalid Details"
                },
                TasksCollectionName: {
                    defaultMessage: "Issues",
                    id: "appTemplates.tasks.issuesDatabaseName"
                }
            });
            async function n(e) {
                let {
                    environment: t,
                    userEmail: n,
                    spaceId: r,
                    flowId: a,
                    authInfo: o
                } = e;
                (0, i(104310).u)({
                    event: {
                        eventName: "external_sync_auth",
                        eventProperties: {
                            integration: "jira",
                            actionType: "admin_auth_initiated",
                            flowId: a
                        }
                    }
                });
                try {
                    var l, d;
                    let u, c = e.site.replace(/\/+$/, "");
                    if (!t.currentUser.id) {
                        i(647095).rG({
                            message: i(962299).A.formatMessage(s.JiraAuthenticationInvalidDetails)
                        }), i(262058).V();
                        return
                    }
                    if ("Basic" === o.authType && "DataCenter" === o.instance && "username" in o && "password" in o) u = await t.api.callApi({
                        eventName: "authenticateJiraUser",
                        environment: t,
                        data: {
                            userEmail: n,
                            site: c,
                            userId: t.currentUser.id,
                            spaceId: r,
                            instance: o.instance,
                            username: o.username,
                            password: o.password,
                            authType: o.authType,
                            isScopedToken: !1
                        }
                    });
                    else {
                        if (!("apiKey" in o)) return;
                        u = o.isScopedToken && "cloudId" in o ? await t.api.callApi({
                            eventName: "authenticateJiraUser",
                            environment: t,
                            data: {
                                userEmail: n,
                                site: c,
                                apiKey: o.apiKey,
                                userId: t.currentUser.id,
                                spaceId: r,
                                instance: o.instance,
                                isScopedToken: o.isScopedToken,
                                cloudId: o.cloudId
                            }
                        }) : await t.api.callApi({
                            eventName: "authenticateJiraUser",
                            environment: t,
                            data: {
                                userEmail: n,
                                site: c,
                                apiKey: o.apiKey,
                                userId: t.currentUser.id,
                                spaceId: r,
                                instance: o.instance,
                                isScopedToken: o.isScopedToken
                            }
                        })
                    }
                    await i(994869).refreshExternalIntegrationStore({
                        environment: t
                    });
                    let p = "success" === u.type && (null == (l = u) || null == (l = l.data) ? void 0 : l.isAdmin);
                    if ((0, i(104310).u)({
                            event: {
                                eventName: "external_sync_auth",
                                eventProperties: {
                                    integration: "jira",
                                    actionType: "admin_auth_status",
                                    flowId: a,
                                    status: p ? "success" : "failed"
                                }
                            }
                        }), i(773352).log({
                            level: p ? "info" : "error",
                            from: "jiraActions",
                            type: "authenticateWithJira",
                            data: {
                                message: p ? "authenticate with Jira is successful" : "Failed to authenticate with Jira",
                                miscDataToConvertToString: {
                                    authResponse: u
                                }
                            }
                        }), "failed" === u.type) {
                        let e = (0, i(201790).V4)(u);
                        console.error(u.error);
                        let t = i(639675).Ay.getInitialState();
                        i(639675).Ay.setState(t), i(647095).ui({
                            message: e,
                            showCancel: !1,
                            keepFocus: !1,
                            items: [{
                                label: i(962299).A.formatMessage(i(647095)._0.dismissButtonLabel),
                                onAccept: i(763230).D_
                            }]
                        }), i(773352).log({
                            level: "error",
                            from: "jiraActions",
                            type: "authenticateWithJira",
                            data: {
                                message: "Failed to authenticate with Jira",
                                miscDataToConvertToString: {
                                    errorMessage: e,
                                    authResponse: u
                                }
                            }
                        })
                    } else if (null != (d = u) && null != (d = d.data) && d.isAdmin) {
                        if ("collection_settings_external_source" === i(639675).Ay.state.from) {
                            let e = i(639675).Ay.getInitialState();
                            i(639675).Ay.setState({ ...e,
                                open: !1
                            })
                        } else i(639675).Ay.setState({ ...i(639675).Ay.state,
                            type: "teamspace-selection",
                            open: !0,
                            flowId: a,
                            site: c,
                            botId: u.data.botId
                        }), (0, i(104310).u)({
                            event: {
                                eventName: "external_sync_teamspace_selection",
                                eventProperties: {
                                    integration: "jira",
                                    actionType: "teamspace_modal_render",
                                    flowId: a
                                }
                            }
                        });
                        let e = i(227947).A.getInitialState();
                        i(227947).A.setState(e)
                    } else i(639675).Ay.setState({ ...i(639675).Ay.state,
                        type: "auth",
                        open: !0,
                        adminTokenError: !0,
                        flowId: a,
                        site: void 0
                    }), (0, i(104310).u)({
                        event: {
                            eventName: "external_sync_auth",
                            eventProperties: {
                                integration: "jira",
                                actionType: "admin_auth_render",
                                flowId: a
                            }
                        }
                    });
                    i(262058).V()
                } catch (e) {
                    (0, i(104310).u)({
                        event: {
                            eventName: "external_sync_auth",
                            eventProperties: {
                                integration: "jira",
                                actionType: "admin_auth_status",
                                flowId: a,
                                status: "failed"
                            }
                        }
                    }), i(773352).log({
                        level: "error",
                        from: "jiraActions",
                        type: "authenticateWithJira",
                        data: {
                            message: "Failed to authenticate with Jira",
                            miscDataToConvertToString: {
                                err: e
                            }
                        }
                    })
                }
            }
            async function r({
                environment: e,
                selectedTeamspaceId: t,
                siteUrl: n,
                botId: a,
                instanceType: o,
                syncName: l
            }) {
                try {
                    let {
                        appTemplatesSetupActions: r,
                        appConfigs: d
                    } = await i(929925).Aw.load(), u = i(728372).AppStoreSidebarSpaceStore.state, c = i(728372).AppStoreSidebarSpaceViewStore.state, p = i(728372).AppStoreCurrentUserStore.state, g = null == p ? void 0 : p.id;
                    if (!g || !u) return;
                    let m = u;
                    if (t) {
                        let s = (await (0, i(455205).getActiveTeamsMetadataForUserInSpace)({
                            userId: g,
                            spaceStore: u,
                            environment: e
                        })).find(e => e.id === t);
                        if (!s) return;
                        m = (0, i(455205).getTeamStore)({
                            teamId: s.id,
                            spaceStore: u
                        })
                    }
                    if (!c || !m) return;
                    let {
                        serverCommitResult: v,
                        performResult: f
                    } = (0, i(377796).createAndCommit)({
                        environment: e,
                        cellTarget: {
                            spaceWithId: u.id
                        },
                        perform: t => {
                            var s;
                            let n = i(11448).tP,
                                a = null == (s = (0, i(440605).B)(d(), n)) ? void 0 : s.uri;
                            if (!a) return;
                            let o = d().find(e => e.uri === a);
                            return (null == o ? void 0 : o.presets.find(e => e.uri === n)) ? r.initializeApp({
                                environment: e,
                                spaceViewStore: c,
                                appParentStore: m,
                                appUri: a,
                                presetUri: n,
                                transaction: t,
                                from: "jira_import"
                            }) : []
                        },
                        canUndo: !0,
                        userAction: "importActions.importJira"
                    }), y = e.defaultRecordCache.inMemoryRecordCache;
                    await v, null == f || f.forEach(t => {
                        let r = t.getFormat(),
                            d = null == r ? void 0 : r.collection_pointer;
                        if (d) {
                            let t = y.getRecord({
                                pointer: d,
                                userId: e.currentUser.id
                            });
                            t && t.value && (0, i(377796).createAndCommit)({
                                userAction: "jiraActions.updateFormatForCollections",
                                environment: e,
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: u.id
                                },
                                perform: r => {
                                    let u = t.value,
                                        c = null == u ? void 0 : u.format;
                                    if (c) {
                                        c.external_collection_type = i(565546).uO.Jira, c.synced_collection_external_url = n, c.synced_collection_instance_type = o, c.bot_id = a, u.icon = c.app_config_uri === i(11448).dC ? i(896221).A.images.appPackages.jiraTaskIconSvg : i(896221).A.images.appPackages.jiraProjectIconSvg;
                                        let t = new(i(356912)).m(e, d),
                                            p = c.app_config_uri === i(11448).dC ? i(962299).A.formatMessage(s.TasksCollectionName) : i(247438).q4_(u.name);
                                        (l || c.app_config_uri === i(11448).dC) && (u.name = (0, i(247438).x9d)(l ? `${l} ${p}` : p)), (0, i(173157).z)({
                                            store: t,
                                            data: u,
                                            transaction: r
                                        })
                                    }
                                }
                            })
                        }
                    });
                    let h = null == f ? void 0 : f.find(e => {
                        var t;
                        return (null == (t = e.getFormat()) ? void 0 : t.app_config_uri) === i(11448).d0
                    });
                    return i(691968).eH({
                        import_source: "jira",
                        from: "modal"
                    }), h
                } catch (e) {
                    i(773352).log({
                        level: "error",
                        from: "jiraActions",
                        type: "projectPageNotCreated",
                        data: {
                            message: "Error while creating project page for Jira sync",
                            miscDataToConvertToString: {
                                error: e
                            }
                        }
                    })
                }
            }
            async function a(e, t, s) {
                let n = await i(211791).Jq({
                        environment: e,
                        integration: t,
                        spaceId: s,
                        from: "connected_apps_settings"
                    }),
                    r = i(610463).A.externalAuthentications.state,
                    a = performance.now() + 6e4,
                    o = i(975162).yX(),
                    l = setInterval(() => {
                        a < performance.now() ? o.resolve(void 0) : i(610463).A.externalAuthentications.state.length > r.length && o.resolve("success")
                    }, 1e3);
                return await o.promise, clearInterval(l), n
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: s
                } = e, n = i(610463).A.integrations.state.find(({
                    id: e
                }) => e === i(49361).me);
                if (n && s) try {
                    let e = t.device.isElectron ? await a(t, n, s) : await i(211791).Jq({
                        environment: t,
                        integration: n,
                        spaceId: s,
                        from: "connected_apps_settings"
                    });
                    e && i(300441).Q.isSuccess(e) && ((0, i(104310).u)({
                        event: {
                            eventName: "external_sync_auth",
                            eventProperties: {
                                integration: "jira",
                                flowId: i(639675).Ay.state.flowId ? ? "",
                                status: "success",
                                actionType: "member_auth_status"
                            }
                        }
                    }), i(691968).Gy({
                        from: "collection_view_page",
                        step: "auth_success"
                    }), i(474329).zA({
                        bannerStore: i(465361).A,
                        id: "AuthMissingForJiraSyncedCollectionPageBanner"
                    }), i(474329).zA({
                        bannerStore: i(731810).A,
                        id: "AuthMissingForJiraSyncedCollectionPageBanner"
                    }))
                } catch (e) {
                    i(773352).log({
                        level: "error",
                        from: "syncedCollectionActions",
                        type: "connectIntegrationFailed",
                        data: {
                            message: "Failed to authenticate",
                            miscDataToConvertToString: {
                                error: e
                            }
                        }
                    }), i(691968).Gy({
                        from: "collection_view_page",
                        step: "auth_failure"
                    })
                }
            }
            async function l(e) {
                let {
                    environment: t,
                    blockStore: s,
                    collectionStore: n
                } = e, r = (0, i(106576).q6)(s), a = (0, i(106576).r_)(n), o = s.getSpaceId();
                try {
                    if (!r || !a || !o) return null;
                    let e = await t.api.callApi({
                        eventName: "getJiraIssueTransitions",
                        environment: t,
                        data: {
                            issueId: r,
                            site: a,
                            spaceId: o
                        }
                    });
                    if ("success" === e.type) return e.data.transitions;
                    return i(773352).log({
                        level: "error",
                        from: "jiraActions",
                        type: "fetchJiraIssueTransitionsFailed",
                        data: {
                            message: "Failed to fetch JIRA issue status options",
                            miscDataToConvertToString: {
                                response: e,
                                issueId: r,
                                site: a,
                                spaceId: o
                            }
                        }
                    }), null
                } catch (e) {
                    return i(773352).log({
                        level: "error",
                        from: "jiraActions",
                        type: "fetchJiraIssueTransitionsError",
                        data: {
                            message: "Failed to fetch JIRA transitions",
                            miscDataToConvertToString: {
                                error: e,
                                issueId: r,
                                site: a,
                                spaceId: o
                            }
                        }
                    }), null
                }
            }
        },
        658456: (e, t, i) => {
            i.d(t, {
                D: () => s
            });
            let s = (0, i(109939).YK)({
                personalAgentMentionName: {
                    id: "botMention.personalAgent.name",
                    defaultMessage: "Notion AI"
                }
            }).personalAgentMentionName
        },
        660107: (e, t, i) => {
            async function s({
                environment: e,
                blockPointer: t,
                query: n
            }) {
                let r = await e.api.callApi({
                    eventName: "getExternalUsersForSyncedCollection",
                    environment: e,
                    data: {
                        blockPointer: t,
                        query: n
                    }
                });
                return (0, i(654070).kX)(r) ? [] : "success" === r.type ? r.data.externalUsers : []
            }
            async function n({
                environment: e,
                externalUser: t,
                blockPointer: s,
                externalSyncedCollectionType: r
            }) {
                let a = await e.api.callApi({
                    eventName: "getOrCreateNotionUserFromExternalUser",
                    environment: e,
                    data: {
                        externalUser: (0, i(607689).Vz)(t, r),
                        blockPointer: s
                    }
                });
                if (!(0, i(654070).kX)(a)) return "success" === a.type ? a.data.notionUser : void 0
            }
            async function r({
                environment: e,
                blockStore: t,
                collectionStore: s
            }) {
                if (!t || !s) return null;
                let n = (0, i(106576).ot)({
                    collectionStore: s,
                    blockStore: t
                }).collectionType;
                return n && "Jira" === n ? await i(658157).Sl({
                    environment: e,
                    blockStore: t,
                    collectionStore: s
                }) : null
            }
            i.d(t, {
                RW: () => n,
                bV: () => s,
                nR: () => r
            })
        },
        711193: (e, t, i) => {
            i.d(t, {
                iL: () => g,
                _h: () => v,
                Ju: () => f,
                cO: () => m
            }), i(944114), i(898992), i(354520), i(581454), i(737550);
            var s = i(296540);
            let n = new(i(815048)).O2("AgentPermissionDropdown", () => Promise.all([i.e(57042), i.e(54280), i.e(65620)]).then(i.bind(i, 150930))),
                r = (0, i(815048)._h)(n, e => e.AgentPermissionDropdown);
            var a = i(474848);
            let o = (0, i(109939).YK)({
                personalAgentTriggerWords: {
                    id: "botMention.personalAgent.triggerWords",
                    defaultMessage: "personal,ai,notion,agent,bot"
                },
                agentInviteToastTitle: {
                    id: "agentMention.inviteToast.title",
                    defaultMessage: "Invite agent to page?"
                },
                agentInviteToastDescription: {
                    id: "agentMention.inviteToast.description",
                    defaultMessage: "This agent doesn’t have access to this page yet."
                },
                agentToastSettingsButton: {
                    id: "agentMention.inviteToast.settingsButton",
                    defaultMessage: "Agent Settings"
                },
                agentNoEditToastTitle: {
                    id: "agentMention.noEditToast.title",
                    defaultMessage: "Agent cannot access this page"
                },
                agentNoEditToastDescription: {
                    id: "agentMention.noEditToast.description",
                    defaultMessage: "Ask the owner of the agent to allow it access to this page."
                },
                agentNoEditToastViewButton: {
                    id: "agentMention.noEditToast.viewButton",
                    defaultMessage: "View Agent"
                },
                agentMentionTriggerToastTitle: {
                    id: "agentMention.triggerToast.title",
                    defaultMessage: "Have agent listen to mentions?"
                },
                agentMentionTriggerToastSettingsButton: {
                    id: "agentMention.triggerToast.settingsButton",
                    defaultMessage: "Agent Settings"
                },
                agentMentionTriggerToastMessage: {
                    id: "agentMention.triggerToast.message",
                    defaultMessage: "This agent is not triggered when it’s mentioned."
                },
                agentDisabledToastTitle: {
                    id: "agentMention.disabledToast.title",
                    defaultMessage: "This agent is disabled"
                }
            });

            function l(e, t) {
                return `ShowBotMentionInvite-${e}-${t}`
            }

            function d(e) {
                return `ShowMentionTrigger-${e}`
            }

            function u({
                environment: e,
                pageStore: t,
                bot: s
            }) {
                i(255482).K.set({
                    userId: e.currentUser.id,
                    key: l(t.id, s.id),
                    value: !1
                });
                let n = (0, i(453573).Lm)({
                    workflowId: s.workflowStore.id,
                    params: {
                        workflowViewType: "settings"
                    }
                });
                (0, i(79266).navigate)({
                    environment: e,
                    url: n
                })
            }
            let c = {
                container: {
                    display: "grid",
                    gridTemplateColumns: "auto minmax(0, 1fr)",
                    gap: 8,
                    paddingTop: 8,
                    paddingBottom: 4
                },
                nameRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: i(699422).Wy.medium
                }
            };

            function p(e) {
                let {
                    bot: t,
                    message: s,
                    isDisabled: n
                } = e;
                return (0, a.jsx)(i(172474).BQ, {
                    mode: "dark",
                    children: (0, a.jsxs)("div", {
                        style: c.container,
                        children: [(0, a.jsx)(i(736371).Z, {
                            icon: t.icon
                        }), (0, a.jsxs)(i(4458).VP, {
                            gap: 4,
                            children: [(0, a.jsx)(i(51831).m, {
                                overlayContainerZIndex: 202,
                                alignment: "center",
                                originGap: 2,
                                placement: "top",
                                content: () => t.name,
                                children: e => (0, a.jsxs)("div", {
                                    style: c.nameRow,
                                    ...e,
                                    children: [(0, a.jsx)("span", {
                                        style: i(699422).RC,
                                        children: t.name
                                    }), n ? (0, a.jsx)(i(487604).u, {}) : void 0]
                                })
                            }), (0, a.jsx)("div", {
                                style: {
                                    color: n ? i(632079).Tj.text.secondary : "inherit"
                                },
                                children: s
                            })]
                        })]
                    })
                })
            }

            function g(e) {
                var t;
                let {
                    bot: s,
                    environment: n,
                    intl: c,
                    pageStore: g,
                    getDisabledAgentAction: m
                } = e;
                if (!g || i(986939).A.isMobile || !s.workflowStore) return;
                let v = {
                        id: s.id,
                        name: s.name,
                        icon: s.icon,
                        workflowStore: s.workflowStore
                    },
                    f = (0, i(604384).W0)(s.workflowStore);
                if (f) {
                    let e = null == m ? void 0 : m({
                        bot: v,
                        pausedReason: f
                    });
                    i(819652).HK(function(e) {
                        let {
                            environment: t,
                            pageStore: s,
                            bot: n,
                            intl: r,
                            pausedReason: l,
                            disabledAgentAction: d
                        } = e, c = {
                            title: r.formatMessage(o.agentToastSettingsButton),
                            onAction: () => u({
                                environment: t,
                                pageStore: s,
                                bot: n
                            })
                        };
                        return {
                            id: `agent_disabled_${n.id}`,
                            presentationType: "persistent",
                            title: r.formatMessage(o.agentDisabledToastTitle),
                            jsxMessage: (0, a.jsx)(p, {
                                bot: n,
                                isDisabled: !0,
                                message: (0, i(604384).of)(l, r)
                            }),
                            actions: {
                                primary: d ? ? c
                            }
                        }
                    }({
                        environment: n,
                        bot: v,
                        intl: c,
                        pageStore: g,
                        pausedReason: f,
                        disabledAgentAction: e
                    }));
                    return
                }
                if (i(255482).K.get({
                        userId: n.currentUser.id,
                        key: l(g.id, s.id)
                    })) return;
                let y = v.workflowStore.canEdit(),
                    h = (t = v.workflowStore, ((0, i(646440).getWorkflowValue)(t).triggers || []).filter(e => {
                        let t = e.state;
                        return (null == t ? void 0 : t.type) === "notion.agent.mentioned" && !1 !== e.enabled
                    }).length > 0);
                if (!h && y && !i(255482).K.get({
                        userId: n.currentUser.id,
                        key: d(s.id)
                    })) {
                    i(255482).K.set({
                        userId: n.currentUser.id,
                        key: d(s.id),
                        value: !0
                    }), i(819652).HK(function(e) {
                        let {
                            environment: t,
                            bot: s,
                            intl: n
                        } = e;
                        return {
                            id: `agent_mention_trigger_${s.id}`,
                            title: n.formatMessage(o.agentMentionTriggerToastTitle, {
                                agentName: s.name
                            }),
                            jsxMessage: (0, a.jsx)(p, {
                                bot: s,
                                message: (0, a.jsx)(i(109939).sA, { ...o.agentMentionTriggerToastMessage
                                })
                            }),
                            actions: {
                                primary: {
                                    title: n.formatMessage(o.agentMentionTriggerToastSettingsButton),
                                    onAction: () => {
                                        i(255482).K.set({
                                            userId: t.currentUser.id,
                                            key: d(s.id),
                                            value: !1
                                        });
                                        let e = (0, i(453573).Lm)({
                                            workflowId: s.workflowStore.id,
                                            params: {
                                                workflowViewType: "settings"
                                            }
                                        });
                                        (0, i(79266).navigate)({
                                            environment: t,
                                            url: e
                                        })
                                    }
                                }
                            }
                        }
                    }({
                        environment: n,
                        bot: v,
                        intl: c,
                        pageStore: g
                    }));
                    return
                }
                if (h) {
                    if (function(e, t) {
                            try {
                                let s = (0, i(862085).X2)({
                                    botId: e,
                                    store: t
                                });
                                if (!s || !s.role || "none" === s.role) return !1;
                                return (0, i(642157).Tt)(s.role)
                            } catch (s) {
                                return i(773352).log({
                                    level: "error",
                                    from: "doesBotHavePageAccess",
                                    type: "BotPermissionCheckError",
                                    error: (0, i(416607).convertErrorToLog)(s),
                                    data: {
                                        botId: e,
                                        pageId: t.id
                                    }
                                }), !1
                            }
                        }(v.id, g)) return;
                    s.workflowStore && (i(255482).K.set({
                        userId: n.currentUser.id,
                        key: l(g.id, s.id),
                        value: !0
                    }), y ? i(819652).HK(function(e) {
                        let {
                            environment: t,
                            bot: s,
                            intl: n,
                            pageStore: l
                        } = e;
                        return {
                            id: `agent_invite_${s.id}`,
                            title: n.formatMessage(o.agentInviteToastTitle, {
                                agentName: s.name
                            }),
                            jsxMessage: (0, a.jsx)(p, {
                                bot: s,
                                message: (0, a.jsx)(i(109939).sA, { ...o.agentInviteToastDescription
                                })
                            }),
                            actions: {
                                primary: {
                                    title: (0, a.jsx)(r, {
                                        environment: t,
                                        workflowStore: s.workflowStore,
                                        pageStore: l,
                                        botId: s.id
                                    }),
                                    onAction: () => {}
                                },
                                secondary: {
                                    title: n.formatMessage(o.agentToastSettingsButton),
                                    onAction: () => u({
                                        environment: t,
                                        pageStore: l,
                                        bot: s
                                    })
                                }
                            }
                        }
                    }({
                        environment: n,
                        bot: v,
                        intl: c,
                        pageStore: g
                    })) : i(819652).HK(function(e) {
                        let {
                            environment: t,
                            bot: s,
                            intl: n,
                            pageStore: r
                        } = e;
                        return {
                            id: `agent_no_edit_${s.id}`,
                            title: n.formatMessage(o.agentNoEditToastTitle, {
                                agentName: s.name
                            }),
                            jsxMessage: (0, a.jsx)(p, {
                                bot: s,
                                message: (0, a.jsx)(i(109939).sA, { ...o.agentNoEditToastDescription
                                })
                            }),
                            actions: {
                                primary: {
                                    title: n.formatMessage(o.agentNoEditToastViewButton),
                                    onAction: () => {
                                        i(255482).K.set({
                                            userId: t.currentUser.id,
                                            key: l(r.id, s.id),
                                            value: !1
                                        });
                                        let e = (0, i(739185).iZ)({
                                            workflowId: s.workflowStore.id,
                                            params: {}
                                        });
                                        (0, i(79266).navigate)({
                                            environment: t,
                                            url: e
                                        })
                                    }
                                }
                            }
                        }
                    }({
                        environment: n,
                        bot: v,
                        intl: c,
                        pageStore: g
                    })))
                }
            }

            function m(e) {
                let {
                    spaceStore: t,
                    userId: n
                } = e, r = (0, i(109939).tz)(), a = (0, i(217844)._)({
                    name: "custom_agents_credit_usage",
                    spaceId: null == t ? void 0 : t.id,
                    userId: n,
                    amount: "unknown"
                }), {
                    handleClick: o,
                    upgradeEligibility: l
                } = (0, i(79268).C)({
                    upsell: null == a ? void 0 : a.upsell,
                    source: "ai_agent",
                    spaceStore: t
                }), d = null == a ? void 0 : a.upsell, u = (0, s.useMemo)(() => {
                    if (d) return {
                        title: (0, i(327506).n)({
                            upsell: d,
                            intl: r,
                            upgradeStatus: l.status
                        }).upgradePhrase,
                        onAction: () => {
                            o()
                        }
                    }
                }, [o, r, l.status, d]);
                return (0, s.useCallback)(({
                    bot: e,
                    pausedReason: t
                }) => {
                    switch (t) {
                        case "workspaceSpendLimit":
                            return u;
                        case "creditLimit":
                            e.workflowStore.canEdit();
                            return;
                        default:
                            return
                    }
                }, [u])
            }

            function v(e) {
                let t, s, {
                        query: n,
                        disabled: r
                    } = e,
                    a = (0, i(533992).v3)(),
                    l = (0, i(109939).tz)(),
                    d = (0, i(682985).O$)(i(205885).e),
                    u = (0, i(972740).L)(),
                    c = (0, i(876252).$)(),
                    p = (0, i(596663).k)(),
                    g = (t = (0, i(972740).L)(), s = (0, i(83208).X)("ai_multi_player_chat"), !!(0, i(682985).K8)(() => !!(null == t ? void 0 : t.isAiEnabledOnSpace()), [t]) && !!s),
                    m = !r && !!u && !!c,
                    v = (0, i(682985).K8)(() => {
                        if (!p || !u) return [];
                        let e = (0, i(203462).zf)(a).getData(a, {
                            spaceId: null == u ? void 0 : u.id
                        });
                        if (e) return e.agents.filter(e => !1 !== e.getAlive())
                    }, [a, u, p]);
                return {
                    results: (0, i(682985).K8)(() => {
                        if (!p || !m || !d || !v) return [];
                        try {
                            if (!u || !c) return [];
                            let s = [],
                                r = l.formatMessage(i(658456).D),
                                a = l.formatMessage(o.personalAgentTriggerWords).split(",").map(e => e.trim().toLowerCase()).filter(Boolean),
                                d = n.toLowerCase();
                            for (let o of (g && ("" === d || r.toLowerCase().includes(d) || a.some(e => d.includes(e))) && s.push({
                                    id: i(180139).Lj,
                                    name: r,
                                    icon: void 0,
                                    workflowStore: void 0
                                }), (0, i(587832).searchWorkflowStores)({
                                    query: n,
                                    workflowStores: v,
                                    limit: e.limit ? ? 3
                                }))) {
                                var t;
                                let e = o.getName(),
                                    i = o.getRawIcon(),
                                    n = null == (t = o.getData()) ? void 0 : t.runtime_actor_pointer,
                                    r = (null == n ? void 0 : n.table) === "bot" ? n.id : void 0;
                                e && r && s.push({
                                    id: r,
                                    name: e,
                                    icon: i,
                                    workflowStore: o
                                })
                            }
                            return s
                        } catch (e) {
                            return i(773352).log({
                                level: "error",
                                from: "botResults",
                                type: "BotMentionSearchError",
                                error: (0, i(416607).convertErrorToLog)(e),
                                data: {
                                    query: n
                                }
                            }), []
                        }
                    }, [m, d, u, c, n, e.limit, l, g, v, p]),
                    isLoading: p && void 0 === v
                }
            }

            function f(e) {
                var t;
                let n, r, {
                        isFirstSection: o,
                        query: l,
                        setTemporaryInputData: d,
                        disabled: u
                    } = e,
                    c = (0, i(533992).v3)(),
                    p = (0, i(109939).tz)(),
                    f = (0, i(972740).L)(),
                    y = (0, i(876252).$)(),
                    h = (0, i(682985).K8)(() => i(498368).Ay.state.mentionTypes.bot, []),
                    {
                        results: b,
                        isLoading: x
                    } = (t = {
                        query: l,
                        disabled: u
                    }, n = (0, i(682985).K8)(() => i(498368).Ay.state.open, []), r = (0, i(682985).K8)(() => i(498368).Ay.state.mentionTypes.bot, []) && n && !t.disabled, v({
                        query: t.query,
                        disabled: !r
                    })),
                    w = (0, i(682985).O$)(i(330870).S),
                    T = m({
                        spaceStore: f,
                        userId: null == y ? void 0 : y.id
                    }),
                    A = (0, s.useCallback)(e => {
                        g({
                            bot: e,
                            environment: c,
                            intl: p,
                            pageStore: w,
                            getDisabledAgentAction: T
                        })
                    }, [T, c, p, w]),
                    S = (0, s.useMemo)(() => b.map(e => {
                        let t = e.id;
                        return {
                            key: t,
                            render: n => (n.focused && d({
                                title: e.name,
                                icon: (0, a.jsx)(i(345076).sL, {}),
                                allowTabCompletion: !0
                            }), (0, s.createElement)(i(864728).M, { ...n,
                                key: t,
                                name: e.name,
                                icon: e.icon
                            })),
                            action: t => {
                                if (e.id === i(180139).Lj) {
                                    let s = null == f ? void 0 : f.id;
                                    (0, i(377796).createAndCommit)({
                                        userAction: "MentionMenu.botMenuItem",
                                        environment: c,
                                        cellTarget: s ? {
                                            spaceWithId: s
                                        } : void 0,
                                        canUndo: !0,
                                        perform: s => {
                                            i(977712).Ju({
                                                environment: c,
                                                editorMode: "default",
                                                annotations: [(0, i(247438).Vb6)(e.id)],
                                                transaction: s,
                                                menuListItemAction: t,
                                                query: l,
                                                mentionType: "bot"
                                            })
                                        }
                                    });
                                    return
                                }
                                let s = new(i(447003)).v(c, {
                                    table: i(832375).GPl,
                                    id: e.id
                                });
                                s.waitUntil(() => s.isReady()).then(() => {
                                    let s = null == f ? void 0 : f.id;
                                    (0, i(377796).createAndCommit)({
                                        userAction: "MentionMenu.botMenuItem",
                                        environment: c,
                                        cellTarget: s ? {
                                            spaceWithId: s
                                        } : void 0,
                                        canUndo: !0,
                                        perform: s => {
                                            i(977712).Ju({
                                                environment: c,
                                                editorMode: "default",
                                                annotations: [(0, i(247438).Vb6)(e.id)],
                                                transaction: s,
                                                menuListItemAction: t,
                                                query: l,
                                                mentionType: "bot"
                                            })
                                        }
                                    }), A(e)
                                })
                            }
                        }
                    }), [b, c, l, d, A, f]),
                    j = (0, i(82002).h)({
                        resultsCount: S.length,
                        shouldShow: x,
                        variant: "mention-menu-people"
                    }),
                    M = (0, s.useMemo)(() => {
                        let e;
                        if (h && (0 !== S.length || x)) return {
                            key: (e = S.length > 0, x && !e ? "bot-results-loading" : x || e ? "bot-results" : "bot-results-empty"),
                            render: e => (0, a.jsx)(i(844565).A, { ...e,
                                title: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Agents",
                                    id: "mentionMenu.botsSection.title"
                                }),
                                desktopTitleStyle: o ? {
                                    paddingTop: 4
                                } : void 0,
                                topBorder: !o
                            }),
                            items: [...S, ...j]
                        }
                    }, [h, S, x, j, o]);
                return h ? {
                    botResultsSection: M,
                    isBotResultsLoading: x,
                    numberOfBotResults: b.length
                } : {
                    botResultsSection: void 0,
                    isBotResultsLoading: !1,
                    numberOfBotResults: 0
                }
            }
        },
        736371: (e, t, i) => {
            i.d(t, {
                Z: () => n
            }), i(296540);
            var s = i(474848);

            function n(e) {
                let {
                    icon: t,
                    size: n = 18
                } = e;
                if (!t) return (0, s.jsx)(i(16275).I, {
                    icon: i(273344).aiFaceIcon,
                    size: n
                });
                let r = (0, i(565546).WO)(t);
                if (!r) return (0, s.jsx)(i(16275).I, {
                    icon: i(273344).aiFaceIcon,
                    size: n
                });
                switch (r.type) {
                    case "unicode_emoji":
                        return (0, s.jsx)(i(968860).A, {
                            size: n,
                            emoji: r.emoji.unicode,
                            disableShrinking: !0
                        });
                    case "notion_icon":
                    case "app_package_asset":
                        return (0, s.jsx)(i(392392).A, {
                            type: r.type,
                            size: n,
                            icon: t,
                            alt: "bot icon",
                            isLoading: !1,
                            progressPercent: 0
                        });
                    case "custom_emoji":
                    case "url":
                        return (0, s.jsx)("img", {
                            src: t,
                            alt: "bot icon",
                            style: {
                                width: n,
                                height: n,
                                objectFit: "cover",
                                borderRadius: 2
                            }
                        });
                    default:
                        return (0, i(722371).HB)(r)
                }
            }
        },
        864728: (e, t, i) => {
            i.d(t, {
                M: () => r
            });
            var s = i(296540),
                n = i(474848);
            let r = s.forwardRef(function(e, t) {
                let {
                    name: s,
                    icon: r,
                    ...a
                } = e;
                return (0, n.jsx)(i(95582).A, { ...a,
                    ref: t,
                    icon: (0, n.jsx)(i(736371).Z, {
                        icon: r
                    }),
                    title: s
                })
            })
        },
        893242: (e, t, i) => {
            i.d(t, {
                gw: () => u,
                Qg: () => o
            }), i(944114), i(898992), i(354520), i(581454), i(737550);
            var s = i(296540),
                n = i(474848);
            let r = {
                moreBarTitleStyle: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: 11
                },
                desktopTitleStyle: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: 11
                },
                messageBodyStyle: {
                    color: i(632079).Tj.text.tertiary,
                    paddingInlineStart: 2
                },
                messageTitleStyle: {
                    color: i(632079).Tj.text.tertiary
                },
                inviteBodyStyle: {
                    color: i(632079).Tj.text.primary
                },
                style0: {
                    paddingBottom: 4
                },
                style1: {
                    marginTop: 0,
                    paddingTop: 10
                }
            };

            function a(e) {
                let t = (0, i(682985).uB)(void 0, i(888173).Ay),
                    a = (0, i(682985).uB)(void 0, i(161591).A),
                    {
                        store: o,
                        inputValue: l,
                        intl: d,
                        propertySchemaLimit: u,
                        isLoading: c,
                        handlePersonPropertyMenuChange: p,
                        surface: g
                    } = e,
                    m = (0, i(533992).v3)(),
                    v = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = (0, i(974410).f)(o)) ? void 0 : e.getName()
                    }, [o]),
                    f = (0, i(682985).K8)(() => a.state.flowId, [a]),
                    {
                        email: y,
                        isEmail: h,
                        inviteButtonTitle: b
                    } = (0, s.useMemo)(() => {
                        let e = (0, i(801109).qh)(l),
                            t = (0, i(801109).DT)(e),
                            s = d.formatMessage({
                                id: "invite.person_property.button.invite_people",
                                defaultMessage: "Invite people"
                            }),
                            n = d.formatMessage({
                                id: "invite.person_property.button.invite_email",
                                defaultMessage: "Invite ”{email}”"
                            }, {
                                email: e
                            });
                        return {
                            email: e,
                            isEmail: t,
                            inviteButtonTitle: t ? n : s
                        }
                    }, [l, d]),
                    x = (0, s.useCallback)(() => {
                        h && y && i(910772).handlePopupClickWithEmail({
                            email: y,
                            inviteTargetsStore: t
                        }), i(287621).TS(m, {
                            origin: "person_property_invite",
                            invite_flow_id: f
                        })
                    }, [h, f, y, m, t]),
                    w = (0, s.useCallback)(() => {
                        i(287621).F$(m, {
                            origin: "person_property_invite",
                            invite_flow_id: f
                        })
                    }, [f, m]),
                    T = (0, i(682985).K8)(() => {
                        let e = function(e) {
                            let {
                                canAddPermissions: t,
                                isMobile: s,
                                surface: n
                            } = e, r = "enterprise" === e.subscriptionTier;
                            return !(s || r || !t || (0, i(22148).J)(n))
                        }({
                            canAddPermissions: o.canEditMembership(),
                            isMobile: i(986939).A.isMobile,
                            subscriptionTier: (0, i(216260).AI)(),
                            surface: g
                        });
                        return e && i(287621).HJ(m, {
                            origin: "person_property_invite",
                            invite_flow_id: f
                        }), e
                    }, [o, f, m, g]),
                    A = (0, s.useMemo)(() => {
                        if (!(0, i(22148).J)(g)) return (0, i(773609).j)(u)
                    }, [g, u]);
                return T ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i(844565).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "People",
                            id: "database.personPropertyValue.selectPerson.noSearchResults.resultsTitle"
                        }),
                        desktopTitleStyle: r.desktopTitleStyle,
                        loading: c,
                        desktopStyle: r.style0,
                        children: (0, n.jsx)(i(498341).u, {
                            title: (0, n.jsx)("span", {
                                style: r.messageBodyStyle,
                                children: (0, n.jsx)(i(109939).sA, {
                                    defaultMessage: "No matches in {spaceName}",
                                    id: "database.personPropertyMenu.noSearchResults.messageWithSpaceName",
                                    values: {
                                        spaceName: v
                                    }
                                })
                            }),
                            titleStyle: r.messageTitleStyle
                        })
                    }), (0, n.jsx)(i(844565).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "More",
                            id: "database.personPropertyValue.selectPerson.noSearchResults.suggestionTitle"
                        }),
                        desktopTitleStyle: r.moreBarTitleStyle,
                        topBorder: !0,
                        desktopStyle: r.style1,
                        children: (0, n.jsx)(i(785267).A, {
                            focused: !1,
                            stopClickPropagation: !0,
                            popupType: i(656252).z.Popup,
                            onClick: x,
                            onClose: w,
                            borderRadius: 8,
                            content: e => (0, n.jsx)(i(367806).i, {
                                inviteOrigin: "person_property_invite",
                                store: o,
                                handleBackButtonClick: () => e.close(),
                                inviteTargetsStore: t,
                                personPropertyInviteStore: a,
                                onInviteCompleteFn: t => {
                                    e.close(), p((t.success ? Object.values(t.invitedUsers) : []).map(e => ({
                                        table: i(832375).oo9,
                                        id: e
                                    })))
                                }
                            }),
                            children: e => (0, n.jsx)(i(95582).A, { ...e,
                                focused: !1,
                                icon: (0, n.jsx)(i(16275).I, {
                                    icon: i(447364).inviteMemberIcon,
                                    colorVariant: "primary"
                                }),
                                title: b,
                                right: (0, n.jsx)(i(16275).I, {
                                    icon: i(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                }),
                                textWrapperStyle: r.inviteBodyStyle
                            })
                        })
                    })]
                }) : (0, n.jsx)(i(844565).A, {
                    title: A,
                    loading: c,
                    children: (0, n.jsx)(i(498341).u, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "No results",
                            id: "database.personPropertyMenu.noSearchResults.message"
                        })
                    })
                })
            }
            let o = (0, i(109939).YK)({
                    searchForPeopleOrGroups: {
                        defaultMessage: "Search for people or groups…",
                        id: "database.personPropertyValue.searchPlaceholderPeopleOrGroups"
                    },
                    searchErrorMessage: {
                        defaultMessage: "Something went wrong.",
                        id: "database.personPropertyMenu.searchErrorMessage"
                    },
                    searchOfflineErrorMessage: {
                        defaultMessage: "Unavailable offline.",
                        id: "database.personPropertyMenu.searchOfflineErrorMessage"
                    }
                }),
                l = {
                    marginTop: 0,
                    marginInlineEnd: 6,
                    marginBottom: 6,
                    marginInlineStart: 0
                };

            function d({
                sectionMenuTitle: e,
                ready: t
            }) {
                let s = (0, i(682985).O$)(i(205885).e);
                return (0, n.jsx)(i(844565).A, {
                    title: e,
                    loading: !t,
                    children: (0, n.jsx)(i(498341).u, {
                        title: s ? (0, n.jsx)(i(109939).sA, { ...o.searchErrorMessage
                        }) : (0, n.jsx)(i(109939).sA, { ...o.searchOfflineErrorMessage
                        })
                    })
                })
            }

            function u(e) {
                let t, r = (0, i(533992).v3)(),
                    u = (0, i(109939).tz)(),
                    {
                        disabled: g,
                        value: m,
                        surface: v,
                        valueIsUnpersistedDefaultValue: f,
                        onChange: y,
                        propertySchema: h,
                        parentStore: b,
                        isTemplatePage: x,
                        insertChar: w,
                        formQuestionStore: T,
                        collectionStore: A,
                        showDoneButton: S,
                        excludeGuests: j,
                        onDismiss: M
                    } = e,
                    _ = (0, i(682985).K8)(() => b.getSpaceStore(), [b]),
                    [I, k] = (0, s.useState)(() => w || ""),
                    C = (0, i(682985).K8)(() => {
                        if (!(0, i(22148).J)(v)) return (0, i(773609).j)(h.limit)
                    }, [v, h.limit]),
                    R = (0, i(682985).K8)(() => {
                        let e = h.limit;
                        return (0, i(22148).J)(v) && T ? (0, i(703049).hm)(h, T.getModel()) : e
                    }, [T, v, h]),
                    P = (0, s.useCallback)(e => {
                        ! function({
                            newMentions: e,
                            tokenLimit: t,
                            value: i,
                            valueIsUnpersistedDefaultValue: s,
                            onChange: n
                        }) {
                            1 === t && e.length > 0 ? n({
                                type: "personPropertyMenuUpdateReplacePerson",
                                newValue: e[0]
                            }) : void 0 === t ? n(s ? {
                                type: "personPropertyMenuUpdateAddPerson",
                                newValues: [...i, ...e]
                            } : {
                                type: "personPropertyMenuUpdateAddPerson",
                                newValues: e
                            }) : e.length + i.length <= t && n({
                                type: "personPropertyMenuUpdateAddPerson",
                                newValues: e
                            })
                        }({
                            newMentions: e,
                            tokenLimit: R,
                            value: m,
                            valueIsUnpersistedDefaultValue: f,
                            onChange: y
                        }), k("")
                    }, [y, R, m, f]),
                    {
                        tokens: E,
                        selectedTemplateAnnotationVariables: D
                    } = (0, i(682985).K8)(() => {
                        let e = [];
                        return {
                            tokens: m.map(t => {
                                if ((0, i(247438).MMZ)(t)) return e.push(t), (0, n.jsx)(i(167834).W, {
                                    templateVariableType: t,
                                    showRemoveButton: !g,
                                    onRemove: () => {
                                        y({
                                            type: "personPropertyMenuUpdateRemovePerson",
                                            removedValue: t
                                        })
                                    },
                                    style: l
                                }, t);
                                if ((0, i(197018).Pu)(t)) {
                                    let e = (0, i(197018).xC)({
                                        pointer: t,
                                        getRecordValue: b.getRecordValue
                                    });
                                    return (0, n.jsx)(i(72461).Ay, {
                                        actor: e,
                                        format: i(986939).A.isMobile ? i(72461).Ay.Format.Large : i(72461).Ay.Format.Medium,
                                        showRemoveButton: !g,
                                        onClickRemove: () => {
                                            f ? i(436555).D6({
                                                label: (0, n.jsx)(i(109939).sA, {
                                                    defaultMessage: "To replace the default user, add another person to this property.",
                                                    id: "database.personPropertyMenu.defaultUserCannotBeRemoved"
                                                })
                                            }) : y({
                                                type: "personPropertyMenuUpdateRemovePerson",
                                                removedValue: t
                                            })
                                        },
                                        shouldShrink: !0,
                                        isSingle: !0,
                                        hasPersonHoverCard: !0,
                                        personHoverCardEntrypoint: "database_property",
                                        spaceStore: _
                                    }, t.id)
                                }
                                if ((0, i(659341).I6)(t)) {
                                    let e = (0, i(659341).S4)({
                                        spacePermissionGroupId: t.id,
                                        spaceId: t.spaceId
                                    });
                                    return (0, n.jsx)(i(11444).UISpacePermissionGroupToken, {
                                        parentStore: b,
                                        groupPointer: e,
                                        format: i(986939).A.isMobile ? i(72461).Ay.Format.Large : i(72461).Ay.Format.Medium,
                                        showRemoveButton: !g,
                                        onClickRemove: () => {
                                            y({
                                                type: "personPropertyMenuUpdateRemovePerson",
                                                removedValue: t
                                            })
                                        },
                                        shouldShrink: !0,
                                        isSingle: !0
                                    }, e.id)
                                }(0, i(722371).HB)(t)
                            }),
                            selectedTemplateAnnotationVariables: e
                        }
                    }, [m, g, y, b, f, _]),
                    U = i(247438).Wov.filter(e => !D.includes(e)),
                    B = (0, i(83208).X)("agent_in_person_property"),
                    {
                        results: L
                    } = (0, i(711193)._h)({
                        query: I,
                        disabled: !B,
                        limit: 20
                    }),
                    F = (0, i(682985).O$)(i(330870).S),
                    G = (0, i(711193).cO)({
                        spaceStore: _,
                        userId: r.currentUser.id
                    }),
                    N = (0, i(682985).K8)(() => {
                        let e = !!(A && A.isExternallyImportedAndSyncedCollection() && (null == A ? void 0 : A.getFormat().external_collection_type)),
                            t = null == A ? void 0 : A.getFormat().external_collection_type,
                            s = !!(null == h ? void 0 : h.derived_property_record_metadata);
                        return (0, i(23803).JD)(A) && e && t && s ? (0, i(167852).Y)({
                            environment: r,
                            intl: u,
                            store: b,
                            isSyncedCollection: e,
                            inputValue: I,
                            value: m,
                            surface: v,
                            propertySchema: h,
                            handlePersonPropertyMenuAddMentions: P,
                            sectionMenuTitle: C,
                            externalSyncedCollectionType: t,
                            onDismiss: M,
                            tokenLimit: R
                        }) : {
                            request: {
                                query: I,
                                actorPointers: m.filter(i(197018).Pu),
                                groupPointers: m.filter(e => "string" != typeof e && (0, i(659341).I6)(e))
                            },
                            performRequest: async ({
                                query: e,
                                actorPointers: t,
                                groupPointers: s
                            }) => {
                                let n = await i(308825).T.searchActions.load(),
                                    a = await n.searchSpaceUsers({
                                        environment: r,
                                        query: e,
                                        membersOnly: !!j,
                                        limit: 20 + t.length,
                                        placeSelfFirst: "" === e || n.isPersonalPronoun(e, u.locale)
                                    }),
                                    o = n.searchSpaceGroups({
                                        query: e,
                                        intl: u
                                    });
                                return {
                                    users: a.filter(e => !t.some(t => t.id === e.id)).slice(0, 20),
                                    groups: o.filter(e => !s.some(t => t.id === (0, i(659341).HT)(e.pointer.id).spacePermissionGroupId)).slice(0, 20),
                                    type: "notionUsersAndGroups"
                                }
                            },
                            render: (e, t, s) => {
                                if (e) return (0, n.jsx)(d, {
                                    sectionMenuTitle: C,
                                    ready: s
                                });
                                if (t && "notionUsersAndGroups" !== t.type) return (0, n.jsx)(i(844565).A, {
                                    title: C,
                                    loading: !s,
                                    children: (0, n.jsx)(i(498341).u, {
                                        title: (0, n.jsx)(i(109939).sA, { ...o.searchErrorMessage
                                        })
                                    })
                                });
                                if (t && 0 === t.users.length && 0 === t.groups.length && 0 === L.length) return (0, n.jsx)(a, {
                                    store: b,
                                    inputValue: I,
                                    intl: u,
                                    propertySchemaLimit: h.limit,
                                    isLoading: !s,
                                    surface: v,
                                    handlePersonPropertyMenuChange: e => {
                                        P(e)
                                    }
                                });
                                let l = !(void 0 !== R && m.length >= R && R && R > 1),
                                    c = i(381453).oE((t && t.users || []).map(e => ({
                                        key: e.id,
                                        render: t => (0, n.jsx)(i(51831).m, {
                                            disableTooltip: l,
                                            content: () => (0, n.jsx)(i(109939).sA, {
                                                defaultMessage: "To select more, remove selection above",
                                                id: "database.personPropertyMenu.limitReached"
                                            }),
                                            children: s => (0, n.jsx)(i(920224).A, { ...t,
                                                badge: (0, n.jsx)(p, {
                                                    user: e,
                                                    spaceStore: _
                                                }),
                                                actor: (0, i(197018).A7)(e),
                                                disabled: !l,
                                                disabledFeedback: !l,
                                                ...s
                                            })
                                        }),
                                        action: () => {
                                            P([{
                                                table: i(832375).oo9,
                                                id: e.id
                                            }])
                                        }
                                    }))),
                                    g = i(381453).oE((t && t.groups || []).map(e => ({
                                        key: e.group_id,
                                        render: t => (0, n.jsx)(i(729460)._, {
                                            group: e,
                                            menuListItemProps: t
                                        }),
                                        action: () => {
                                            P([e.getGroupPointer()])
                                        }
                                    }))),
                                    f = i(381453).oE(L.map(e => ({
                                        key: e.id,
                                        render: t => {
                                            let s = (0, i(197018).xC)({
                                                pointer: {
                                                    table: i(832375).GPl,
                                                    id: e.id
                                                },
                                                getRecordModel: b.getRecordModel
                                            });
                                            return (0, n.jsx)(i(51831).m, {
                                                disableTooltip: l,
                                                content: () => (0, n.jsx)(i(109939).sA, {
                                                    defaultMessage: "To select more, remove selection above",
                                                    id: "database.personPropertyMenu.limitReached"
                                                }),
                                                children: e => (0, n.jsx)(i(920224).A, { ...t,
                                                    actor: s,
                                                    disabled: !l,
                                                    disabledFeedback: !l,
                                                    ...e
                                                })
                                            })
                                        },
                                        action: () => {
                                            P([{
                                                table: i(832375).GPl,
                                                id: e.id
                                            }]), (0, i(711193).iL)({
                                                bot: e,
                                                environment: r,
                                                intl: u,
                                                pageStore: F,
                                                getDisabledAgentAction: G
                                            })
                                        }
                                    }))),
                                    y = i(381453).oE([c.length > 0 || g.length > 0 || f.length > 0 ? {
                                        key: "person and group section",
                                        render: e => (0, n.jsx)(i(844565).A, { ...e,
                                            title: C,
                                            loading: !s
                                        }),
                                        items: [...c, ...g, ...f]
                                    } : void 0]);
                                return (0, n.jsx)(i(558045).A, {
                                    type: i(558045).O.Vertical,
                                    initialFocus: I.length > 0 ? 0 : void 0,
                                    sections: y
                                })
                            }
                        }
                    }, [A, I, m, r, u, b, v, h, P, C, R, _, L, F, j, M, G]),
                    q = (0, n.jsx)(c, {
                        tokens: E,
                        disabled: g,
                        onChange: y,
                        value: m,
                        inputValue: I,
                        setInputValue: k
                    });
                return (i(986939).A.isMobile ? (t = {
                    menuType: i(649476).gu.Modal,
                    title: h.name,
                    header: q,
                    includeFixedHeaderSpacing: !0,
                    scrollerStyle: {
                        paddingBottom: i(69118).H
                    }
                }, S && (t = { ...t,
                    right: (0, n.jsx)(i(109939).sA, { ...i(789722).W.done
                    }),
                    onClickRight: e.onDismiss
                })) : t = {
                    menuType: i(649476).gu.Popup,
                    header: q,
                    tokenInputHeader: !0,
                    maxHeight: 333
                }, g) ? (0, n.jsx)(i(747369).A, { ...t
                }) : (0, n.jsxs)(i(747369).A, { ...t,
                    children: [x ? (0, n.jsx)(i(844565).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Shortcuts",
                            id: "PersonPropertyMenu.menuItem.shortcuts.label"
                        }),
                        children: U.length > 0 ? (0, n.jsx)(s.Fragment, {
                            children: U.map(e => (0, n.jsx)(i(95582).A, {
                                focused: !1,
                                title: (0, n.jsx)(i(167834).W, {
                                    templateVariableType: e
                                }),
                                caption: (0, i(664993).EC)(e, u),
                                inline: !0,
                                onClick: () => {
                                    P([e])
                                }
                            }, `relative-person-shortcut-${e}`))
                        }) : (0, n.jsx)(i(498341).u, {
                            title: (0, n.jsx)(i(109939).sA, {
                                id: "database.personPropertyMenu.noShorcuts.message",
                                defaultMessage: "No shortcuts"
                            })
                        })
                    }) : void 0, (0, n.jsx)(i(814255).A, { ...N
                    })]
                })
            }
            let c = s.memo(function(e) {
                let {
                    tokens: t,
                    disabled: r,
                    onChange: a,
                    value: l,
                    inputValue: d,
                    setInputValue: u
                } = e, {
                    isAndroid: c,
                    isPhone: p
                } = (0, i(533992).Y0)(), g = (0, i(109939).tz)(), m = (0, i(960253).I)(() => ({
                    tokenWrapStyle: { ...(0, i(642065)._Q)({
                            isPhone: p
                        }).table.token,
                        gap: 4
                    }
                }), [p]), v = (0, s.useCallback)(() => {
                    a({
                        type: "personPropertyMenuUpdateRemovePerson",
                        removedValue: l[l.length - 1]
                    })
                }, [a, l]);
                return (0, n.jsx)(i(844565).A, {
                    disableDesktopPadding: !0,
                    children: (0, n.jsx)(i(160319).Ay, {
                        focus: !i(986939).A.isMobile || void 0,
                        focusAfterAnimation: !0,
                        format: i(160319).le.Person,
                        tokens: t,
                        tokenWrapStyle: m.tokenWrapStyle,
                        placeholder: g.formatMessage(o.searchForPeopleOrGroups),
                        hideInput: r,
                        onRemoveLastToken: v,
                        value: d,
                        onChange: e => u(e.target.value),
                        dontShowBorderBottom: c || i(986939).A.isMobile
                    })
                })
            });

            function p({
                user: e,
                spaceStore: t
            }) {
                let s = (0, i(993077).V_)({
                    userId: e.id,
                    spaceStore: t
                });
                return t && "restricted_member" === s ? (0, n.jsx)(i(156379).L, {}) : null
            }
        },
        910772: (e, t, i) => {
            i.r(t), i.d(t, {
                handleEnterPress: () => d,
                handleGuestInvite: () => r,
                handleMemberInvite: () => n,
                handleMemberRequest: () => a,
                handlePopupClickWithEmail: () => u,
                inviteToSpaceAsMembers: () => o,
                showMessageForInviteComplete: () => c
            }), i(944114), i(898992), i(354520), i(430670), i(581454), i(737550), i(296540);
            var s = i(474848);
            async function n(e) {
                let {
                    environment: t,
                    onInviteComplete: s,
                    flowId: n,
                    intl: r,
                    spaceStore: a,
                    invitedUsers: l,
                    inviteTargetsStore: d,
                    inviteOrigin: u,
                    disable_invite_email: c
                } = e, p = {
                    success: !1
                };
                try {
                    (p = await o({
                        environment: t,
                        spaceStore: a,
                        invitedUsers: l,
                        from: u,
                        flowId: n,
                        intl: r,
                        inviteTargetsStore: d,
                        disable_invite_email: c
                    })).success ? i(287621).ke(t, {
                        invited_user_count: Object.keys(p.invitedUsers).length,
                        invite_flow_id: n,
                        origin: u
                    }) : (i(287621).N_(t, {
                        invite_stage: "invite_member",
                        invite_flow_id: n,
                        error: p.error
                    }), i(773352).log({
                        level: "error",
                        from: "personPropertyInviteAction",
                        type: "handleMemberInvite"
                    }))
                } catch (s) {
                    let e = (0, i(161179).A)(s);
                    i(287621).N_(t, {
                        invite_stage: "invite_member",
                        invite_flow_id: n,
                        error: e
                    }), i(773352).log({
                        level: "error",
                        from: "personPropertyInviteAction",
                        type: "handleMemberInvite",
                        error: (0, i(416607).convertErrorToLog)(s)
                    })
                } finally {
                    null == s || s(p)
                }
            }
            async function r(e) {
                let {
                    environment: t,
                    blockStore: s,
                    inviteTargetsStore: n,
                    sudoModeStore: r,
                    onInviteComplete: a,
                    inviteOrigin: o,
                    role: d,
                    emailMessage: u,
                    flowId: c
                } = e, p = {
                    success: !1
                };
                try {
                    if (!(p = await l({
                            environment: t,
                            blockStore: s,
                            sudoModeStore: r,
                            inviteTargetsStore: n,
                            role: d,
                            emailMessage: u,
                            inviteOrigin: o,
                            flowId: c
                        })).success) return
                } catch (s) {
                    let e = (0, i(161179).A)(s);
                    i(287621).N_(t, {
                        invite_stage: "invite_guest",
                        invite_flow_id: c,
                        error: e
                    }), i(773352).log({
                        level: "error",
                        from: "personPropertyInviteAction",
                        type: "handleGuestInvite",
                        error: (0, i(416607).convertErrorToLog)(s)
                    })
                } finally {
                    p.success && i(287621).oU(t, {
                        invited_user_count: Object.keys(p.invitedUsers).length,
                        origin: o,
                        invite_flow_id: c
                    }), null == a || a(p)
                }
                return p
            }
            async function a(e) {
                let {
                    environment: t,
                    spaceStore: s,
                    originId: n,
                    originType: r,
                    reasonMessage: a,
                    intl: o,
                    flowId: l,
                    onInviteComplete: d,
                    invitedUsers: u,
                    inviteOrigin: c
                } = e, p = [], g = {
                    success: !1
                };
                try {
                    let e = Object.entries(u).map(([e, i]) => t.api.callApi({
                        eventName: "requestAccess",
                        environment: t,
                        data: {
                            type: "actor-to-space",
                            forActorId: i,
                            spaceId: s.id,
                            message: a,
                            attributes: {
                                origin_id: n,
                                origin_type: r,
                                origin_table: "block",
                                add_permissions_on_approval: !1
                            }
                        }
                    }).catch(() => p.push([e, i])));
                    await Promise.all(e), g = {
                        success: !0,
                        invitedUsers: u,
                        requestedUsers: {}
                    }
                } catch (n) {
                    var m;
                    let e, s = (0, i(161179).A)(n);
                    i(287621).N_(t, {
                        invite_stage: "request_member",
                        invite_flow_id: l,
                        error: s
                    }), m = o, 0 !== (e = Object.keys(u)).length && i(436555).D6({
                        label: m.formatMessage({
                            id: "contextual_invite.request_members_failure",
                            defaultMessage: "Failed to request {users} to become members"
                        }, {
                            users: (0, i(890142).l)(e)
                        })
                    }), i(773352).log({
                        level: "error",
                        from: "personPropertyInviteAction",
                        type: "handleMemberRequest",
                        data: {
                            miscDataToConvertToString: {
                                inviteTargetEmailsWithErrors: p
                            }
                        }
                    })
                } finally {
                    g.success && i(287621).d6(t, {
                        invited_user_count: Object.keys(g.invitedUsers).length,
                        origin: c,
                        invite_flow_id: l
                    }), null == d || d(g)
                }
                return g
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: s,
                    from: n,
                    invitedUsers: r,
                    intl: a,
                    flowId: o,
                    onInviteStart: l,
                    inviteTargetsStore: d,
                    disable_invite_email: u
                } = e, c = function(e) {
                    let t = [];
                    if (!e) return t;
                    for (let [i, s] of Object.entries(e)) t.push({
                        type: "existingUser",
                        value: {
                            id: s,
                            email: i,
                            version: 1
                        }
                    });
                    return t
                }(r), p = d.state.inviteTargets.filter(e => "newUser" === e.type).filter(e => !c.some(t => t.value.email === e.value.email)), g = [...c, ...p], m = (0, i(216260).AI)(), v = m && (0, i(449074).f)(m) ? "owner" : "member", f = {
                    success: !1
                };
                if (!s.isTeamsEnabled() && !await i(821969).oH({
                        environment: t,
                        flowId: o,
                        trackCreateTeamComplete: !1
                    })) return f;
                try {
                    null == l || l(), f = await (0, i(487998).F)({
                        spaceStore: s,
                        environment: t,
                        inviteTargets: g,
                        membershipType: v,
                        isOnboarding: !1,
                        invite: {
                            inviteOrigin: n,
                            inviteFlowId: o,
                            disable_invite_email: u
                        }
                    })
                } catch (e) {
                    0 !== g.length && i(436555).D6({
                        label: a.formatMessage({
                            id: "contextual_invite.contextual_invite_failure",
                            defaultMessage: "{userCount, plural, one {Failed to invite {users} as member} other {Failed to invite {users} as members}}"
                        }, {
                            users: (0, i(890142).l)(g.flatMap(e => e.value.email || [])),
                            userCount: g.length
                        })
                    }), i(773352).log({
                        level: "error",
                        from: "contextualInviteHelpers",
                        type: "inviteMembers.inviteTargets",
                        data: {
                            miscDataToConvertToString: {
                                usersToInviteAsMembers: g
                            }
                        }
                    })
                }
                return f
            }
            async function l(e) {
                let {
                    environment: t,
                    blockStore: s,
                    sudoModeStore: n,
                    inviteTargetsStore: r,
                    role: a,
                    inviteOrigin: o,
                    emailMessage: l,
                    onInviteStart: d
                } = e, u = e.flowId || i(92513).JW();
                if (!(0, i(642157).PW)(a)) return {
                    success: !1
                };
                let {
                    tokenQuery: c,
                    inviteTargets: p
                } = r.state;
                if ((0, i(801109).DT)(c.trim()) && 0 === p.length) {
                    let e = {
                        type: "newUser",
                        value: {
                            email: c.trim()
                        },
                        source: "email"
                    };
                    i(261133).P4({
                        target: e,
                        inviteTargetsStore: r
                    }) || r.setState({
                        inviteTargets: [...r.state.inviteTargets, e],
                        tokenQuery: ""
                    })
                }
                let g = i(862085).Nr(s, i(261133).U1({
                    inviteTargetsStore: r
                }));
                return null == d || d(), await (0, i(179349).e)({
                    environment: t,
                    store: s,
                    sudoModeStore: n,
                    inviteTargets: g.filter(e => "agent" !== e.type),
                    inviteRole: a,
                    isOnboarding: !1,
                    invite: {
                        inviteFlowId: u,
                        inviteMessage: l,
                        inviteOrigin: o
                    }
                })
            }
            async function d(e) {
                let {
                    environment: t,
                    inviteTargetsStore: s,
                    allowShowEmptyError: n,
                    personPropertyInviteStore: r
                } = e, a = s.state.tokenQuery;
                if ("" === a) {
                    0 === s.state.inviteTargets.length && n && r.setState({ ...r.state,
                        showEmptyError: !0
                    });
                    return
                }
                let o = (0, i(801109).C3)(a),
                    l = await i(929447).Ah(t, o),
                    d = [];
                0 === l.length && (d = [{
                    type: "invalidUser",
                    value: {
                        text: a
                    }
                }]);
                let u = l.filter(e => !i(261133).P4({
                        inviteTargetsStore: s,
                        target: e
                    })),
                    c = [...s.state.inviteTargets, ...u, ...d];
                s.setState({ ...s.state,
                    inviteTargets: c,
                    tokenQuery: ""
                })
            }

            function u(e) {
                let {
                    email: t,
                    inviteTargetsStore: s
                } = e, n = {
                    type: "newUser",
                    value: {
                        email: t
                    },
                    source: "email"
                }, r = [...s.state.inviteTargets];
                i(261133).P4({
                    inviteTargetsStore: s,
                    target: n
                }) || r.push(n), s.setState({ ...s.state,
                    inviteTargets: r
                })
            }

            function c(e) {
                let {
                    success: t,
                    invitedUserEmails: n,
                    isRequestMember: r
                } = e;
                if (!t) return void i(436555).D6({
                    label: (0, s.jsx)(i(109939).sA, {
                        id: "shareMenu.inviteFailure.snackbarMessage",
                        defaultMessage: "Failed to invite {users}",
                        values: {
                            users: (0, i(890142).l)(n)
                        }
                    })
                });
                if (0 !== n.length) {
                    if (r) return void i(436555).D6({
                        label: (0, s.jsx)(i(109939).sA, {
                            id: "shareMenu.inviteSuccess.snackbarMessage.sendMemberRequest",
                            defaultMessage: "Successfully sent request to admin to invite {users}",
                            values: {
                                users: (0, i(890142).l)(n)
                            }
                        })
                    });
                    i(436555).D6({
                        label: (0, s.jsx)(i(109939).sA, {
                            id: "shareMenu.inviteSuccess.snackbarMessage",
                            defaultMessage: "Successfully invited {users}",
                            values: {
                                users: (0, i(890142).l)(n)
                            }
                        })
                    })
                }
            }
        }
    }
]);