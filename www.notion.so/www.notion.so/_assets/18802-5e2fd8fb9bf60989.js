"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18802], {
        138676: (e, t, i) => {
            function o(e) {
                let {
                    environment: t,
                    spaceViewStore: o,
                    teamStore: a,
                    outlinerToggleButtonStore: r,
                    newIsHidden: s,
                    shouldPersistToggleState: l,
                    isExplicitUserAction: d
                } = e;
                if (r.setState({ ...r.state,
                        isHidden: s
                    }), d) {
                    let {
                        team_id: o,
                        ...n
                    } = (0, i(998539).f)({
                        environment: t,
                        teamStore: a
                    });
                    (0, i(104310).u)({
                        event: {
                            eventName: "outliner_team_toggle",
                            eventProperties: { ...n,
                                is_toggled: !s,
                                outliner_type: e.teamOutlinerType
                            }
                        },
                        opts: {
                            forceOverrideAutomaticEventData: {
                                team_id: o
                            }
                        }
                    })
                }
                l && i(255482).K.set({
                    userId: o.environment.currentUser.id,
                    key: n(o.id, a.id),
                    value: s
                }), s && i(563591).default.setState({
                    type: "inactive"
                })
            }

            function n(e, t) {
                return `Team_Outliner_Item_${e}:${t}`
            }

            function a({
                oldState: e,
                teamIds: t,
                spaceId: o,
                userId: r
            }) {
                return t.reduce((t, a) => {
                    if (a in t) return t;
                    if (a in e) return t[a] = e[a], t;
                    let s = n(o, a),
                        l = i(255482).K.get({
                            userId: r,
                            key: s
                        });
                    return t[a] = new(i(742112)).I, t[a].setState({
                        isHidden: l ? ? !1
                    }), t
                }, {})
            }
            i.d(t, {
                Of: () => o,
                YB: () => n,
                s: () => a
            }), i(898992), i(908872)
        },
        615096: (e, t, i) => {
            i.d(t, {
                ty: () => z,
                kv: () => w,
                Lr: () => A,
                uA: () => H,
                bH: () => L
            });
            var o = i(296540),
                n = i(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.47 2.08 13.09 11.65",
                    svg: (0, n.jsx)("path", {
                        d: "M1.476 3.504c0-.678.55-1.228 1.228-1.229h1.893c.22 0 .425.059.603.16.179-.101.384-.16.604-.16h1.892c.372 0 .704.166.929.427q.108-.054.23-.087l1.828-.49a1.23 1.23 0 0 1 1.504.87l2.327 8.685a1.23 1.23 0 0 1-.868 1.506l-1.829.489a1.23 1.23 0 0 1-1.505-.87L8.926 7.627v4.87c0 .679-.55 1.23-1.229 1.23H5.804a1.2 1.2 0 0 1-.604-.16 1.2 1.2 0 0 1-.603.16H2.704a1.23 1.23 0 0 1-1.228-1.23zm10.039 8.958 1.787-.479-2.317-8.645-1.787.478zm-3.84.014v-8.95h-1.85v8.95zm-3.1 0v-8.95h-1.85v8.95z"
                    })
                },
                r = (0, i(104509).wt)("bookshelfSmall", a, "small"),
                s = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                    width: 20,
                    borderRadius: 4,
                    marginInlineEnd: 4
                };

            function l(e) {
                var t;
                let a, l, d, c, u, g = (0, i(533992).v3)(),
                    p = (0, i(109939).tz)(),
                    m = (t = e.type, a = (0, i(784331).cd)(), l = (0, i(853284).U)(), d = (0, i(83208).X)("slippery_slope_sidebar_customization"), c = (0, i(682985).O$)(i(87945).F) && d, u = (0, i(784331).nr)(), (0, i(682985).K8)(() => {
                        if (!a || !l || c) return;
                        let e = i(669439).T5[t];
                        if ("agents" !== e || u) return e
                    }, [a, l, t, u, c])),
                    h = (0, o.useCallback)(async e => {
                        (await (0, i(337439).p)())({
                            event: e,
                            analyticsFrom: "slippery_slope_sidebar_section_library_icon_button",
                            environment: g,
                            viewName: m
                        })
                    }, [g, m]),
                    b = p.formatMessage(i(854615).D.openInLibrary);
                return m ? (0, n.jsx)(i(51831).m, {
                    textWrap: !1,
                    content: () => b,
                    placement: "bottom",
                    children: e => (0, n.jsx)(i(64960).Ay, {
                        ariaLabel: b,
                        style: s,
                        onClick: h,
                        ...e,
                        children: (0, n.jsx)(i(16275).I, {
                            icon: r,
                            size: "sm",
                            colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                }) : null
            }

            function d(e) {
                switch (e) {
                    case i(171231).AX:
                    case i(171231).GU:
                        return !0;
                    case i(171231).zt:
                    case i(171231).st:
                        return !1;
                    default:
                        (0, i(722371).HB)(e)
                }
            }
            let c = {
                    toggleButton: {
                        color: i(632079).Tj.icon.tertiary
                    }
                },
                u = function(e) {
                    let {
                        outlinerToggleButtonStore: t,
                        outlinerTeamOnToggle: o,
                        style: a
                    } = e, r = (0, i(960253).I)(() => ({
                        caratContainer: {
                            fontSize: 16,
                            flexShrink: 0,
                            minHeight: 20,
                            minWidth: 20,
                            ...a || {}
                        }
                    }), [a]), s = (0, i(682985).K8)(() => t.state.isHidden, [t]);
                    return (0, n.jsx)("div", {
                        style: r.caratContainer,
                        children: (0, n.jsx)(i(890389).f, {
                            isSidebar: !0,
                            fill: !0,
                            icon: "chevron",
                            open: !s,
                            color: c.toggleButton.color,
                            onClick: o,
                            disabled: i(986939).A.isMobile
                        })
                    })
                };
            i(898992), i(823215), i(581454);
            let g = {
                membershipSection: {
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 14,
                    alignItems: "center",
                    whiteSpace: "nowrap"
                },
                teamMemberList: {
                    paddingTop: 3
                },
                moreMessage: {
                    marginInlineStart: 2,
                    marginTop: 4,
                    color: i(632079).Tj.text.inverseSecondary
                },
                style0: {
                    marginBottom: 4
                }
            };

            function p(e) {
                let t = (0, i(533992).v3)(),
                    [a, r] = (0, o.useState)(!1),
                    {
                        teamStore: s,
                        teamOutlinerType: l
                    } = e,
                    d = (0, i(682985).K8)(() => (0, i(867819).P)({
                        environment: t,
                        teamStore: s
                    }), [t, s]),
                    c = (null == d ? void 0 : d.membersIncludingOwnersCount) ? ? 0,
                    {
                        tooltipIsReady: u,
                        limitedUserStores: p,
                        countRemainingUsers: m
                    } = (0, i(682985).K8)(() => {
                        let e = (null == d ? void 0 : d.sampleMemberUserIds) ? ? [];
                        e.length > 5 && (e = e.slice(0, 5));
                        let t = e.map(e => i(807825).L.createChildStore(s, {
                                table: i(832375).oo9,
                                id: e
                            })) ? ? [],
                            o = t && t.every(e => e.isReady());
                        return {
                            countRemainingUsers: (null == d ? void 0 : d.membersIncludingOwnersCount) ? ? 0 - t.length,
                            limitedUserStores: t,
                            tooltipIsReady: o
                        }
                    }, [s, d]);
                return (0, n.jsx)("div", {
                    style: g.membershipSection,
                    children: (0, n.jsx)(i(51831).m, {
                        placement: "bottom",
                        disableTooltip: !u || c <= 0,
                        content: e => (a || (r(!0), i(649807).JG(t, {
                            teamStore: s,
                            outliner_type: l
                        })), (0, n.jsx)("div", { ...e,
                            children: (0, n.jsxs)("div", {
                                style: g.style0,
                                children: [p.map(e => (0, n.jsx)(i(980494).A, {
                                    style: g.teamMemberList,
                                    userStore: e,
                                    avatarSize: 18,
                                    hasPersonHoverCard: !1
                                }, e.id)), m > 0 ? (0, n.jsx)("div", {
                                    style: g.moreMessage,
                                    children: (0, n.jsx)(i(109939).sA, {
                                        id: "teamMembersList.tooltip.overflowMessage",
                                        defaultMessage: "{countRemainingUsers} more…",
                                        values: {
                                            countRemainingUsers: m
                                        }
                                    })
                                }) : void 0]
                            })
                        })),
                        children: t => (0, n.jsxs)("span", { ...t,
                            style: e.renderStyle,
                            children: [c, " ", c > 1 ? (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "members",
                                id: "teamBrowser.teamCard.MembershipPlural"
                            }) : (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "member",
                                id: "teamBrowser.teamCard.Membership"
                            })]
                        })
                    })
                })
            }
            let m = (0, i(815048)._h)(new(i(815048)).O2("OutlinerToggleOpenSetupModalButton", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(35837), i.e(25867), i.e(88595), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(43444), i.e(23979), i.e(73259), i.e(87971), i.e(4779), i.e(55067), i.e(50354), i.e(14231), i.e(18406), i.e(97615), i.e(48095), i.e(10188), i.e(18802), i.e(20957), i.e(53157), i.e(58033), i.e(79563), i.e(6782), i.e(74936), i.e(5309), i.e(76060), i.e(2209)]).then(i.bind(i, 985269))), e => e.OutlinerToggleOpenSetupModalButton);

            function h({
                teamStore: e,
                from: t,
                outlinerToggleButtonStore: a,
                shouldPersistToggleState: r
            }) {
                let s = (0, i(533992).v3)(),
                    l = (0, i(682985).K8)(() => (0, i(685257).u)(s), [s]),
                    d = (0, o.useCallback)(() => (0, i(685257).u)(s), [s]);
                return l ? (0, n.jsx)(m, {
                    origin: "team",
                    parentStore: e,
                    onClick: d
                }) : (0, n.jsx)(y, {
                    teamStore: e,
                    from: t,
                    outlinerToggleButtonStore: a,
                    shouldPersistToggleState: r,
                    onClick: d
                })
            }
            let b = {
                button: {
                    height: i(986939).A.isMobile ? 32 : 20,
                    width: i(986939).A.isMobile ? 32 : 20,
                    border: "none",
                    borderRadius: 3,
                    marginInlineStart: 4 * !i(986939).A.isMobile
                },
                tooltip: {
                    width: "204px"
                }
            };

            function y({
                teamStore: e,
                from: t,
                outlinerToggleButtonStore: a,
                shouldPersistToggleState: r,
                onClick: s
            }) {
                let l = (0, i(109939).tz)(),
                    d = (0, i(533992).v3)(),
                    c = (0, i(972740).L)(),
                    u = (0, i(682985).K8)(() => (0, i(194020).E)(d, c), [d, c]),
                    g = (0, o.useCallback)(() => {
                        let o = i(728372).AppStoreSidebarSpaceStore.state,
                            n = i(728372).AppStoreSidebarSpaceViewStore.state;
                        null == s || s(), o && n && ((0, i(675062).A)({
                            environment: d,
                            from: t,
                            spaceStore: o,
                            spaceViewStore: n,
                            teamStore: e,
                            outlinerToggleButtonStore: a,
                            shouldPersistToggleState: r,
                            andNavigate: !0,
                            appendOrPrepend: "append"
                        }), i(986939).A.isMobile && (0, i(713167).V)(), (0, i(104310).u)({
                            event: {
                                eventName: "sidebar_new_page_click",
                                eventProperties: {
                                    origin: "team",
                                    target_team_id: e.id
                                }
                            }
                        }))
                    }, [d, t, s, a, r, e]);
                return (0, n.jsx)(i(51831).m, {
                    textWrap: !u,
                    content: () => u ? l.formatMessage(i(925021).K.addPageTooltip) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            children: l.formatMessage(f.disabledTooltipUpper)
                        }), (0, n.jsx)("div", {
                            children: l.formatMessage(f.disabledTooltipLower)
                        })]
                    }),
                    placement: "bottom",
                    style: u ? {} : b.tooltip,
                    children: e => (0, n.jsx)(i(64960).Ay, {
                        style: b.button,
                        onClick: g,
                        ariaLabel: u ? l.formatMessage(i(925021).K.addPageTooltip) : l.formatMessage(f.disabledTooltipUpper),
                        ...e,
                        disabled: !u,
                        children: (0, n.jsx)(i(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            height: i(986939).A.isMobile ? 32 : 20,
                            width: i(986939).A.isMobile ? 32 : 20,
                            children: (0, n.jsx)(i(16275).I, {
                                icon: i(638501).plusSmallIcon,
                                size: "sm",
                                colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                            })
                        })
                    })
                })
            }
            let f = (0, i(109939).YK)({
                    disabledTooltipUpper: {
                        defaultMessage: "You’ve used up your free blocks.",
                        id: "sidebar.addButton.disabledTooltipUpper"
                    },
                    disabledTooltipLower: {
                        defaultMessage: "Upgrade to add a new page.",
                        id: "sidebar.addButton.disabledTooltipLower"
                    }
                }),
                x = {
                    teamHighlightAnimationBackgroundContainer: {
                        backgroundColor: i(632079).oZ.frontTertiaryButtonBackgroundHovered,
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        zIndex: -1,
                        borderRadius: 4
                    },
                    labelContainer: {
                        flexShrink: 1,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        height: "100%",
                        ...i(699422).RC
                    },
                    labelText: {
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        lineHeight: i(699422).K_.UISmall.desktop,
                        marginBottom: 1,
                        minHeight: 20,
                        ...i(699422).RC
                    },
                    membersCountText: {
                        display: "flex",
                        fontSize: 12,
                        fontWeight: i(699422).Wy.regular,
                        lineHeight: 1.3,
                        color: i(632079).Tj.text.tertiary,
                        width: "100%",
                        ...i(699422).RC
                    },
                    joinedBadge: {
                        color: i(632079).Tj.text.accentPrimary,
                        lineHeight: 1.2,
                        ...i(699422).RC
                    },
                    joinedBadgeIcon: {
                        display: "inline",
                        color: i(632079).Tj.text.accentPrimary,
                        marginBottom: -1,
                        marginInlineEnd: 2,
                        marginInlineStart: 3
                    },
                    joinLeaveButtonHovered: {
                        background: i(632079).Tj.buttonHoveredBackground
                    },
                    teamIconContainer: {
                        minHeight: 20,
                        minWidth: 20,
                        marginInlineEnd: 9
                    },
                    carat: {
                        minHeight: 20,
                        height: 20
                    },
                    iconAndToggleContainer: {
                        display: "grid"
                    },
                    style0: {
                        fontWeight: i(699422).Wy.medium
                    }
                };

            function v(e) {
                let {
                    teamStore: t,
                    label: a,
                    isHovered: r,
                    outlinerToggleButtonStore: s,
                    teamOutlinerType: l,
                    shouldPersistToggleState: c,
                    outlinerTeamOnToggle: g,
                    labelAriaId: m
                } = e, b = d(l), y = (0, i(533992).v3)(), {
                    name: f,
                    showAddPageButton: v
                } = (0, i(682985).K8)(() => ({
                    name: t.getName(),
                    showAddPageButton: t.canAddOrRemoveTopLevelPages()
                }), [t]), T = (0, i(77868).J)(t), j = (0, i(271218).h)(t), w = (0, i(682985).K8)(() => t.getSpaceStore(), [t]), I = (0, i(682985).uB)(void 0, i(152880).S), A = i(986939).A.isMobile || r, M = (0, i(665002).g)(), C = (0, i(960253).I)(() => ({
                    container: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        minHeight: i(986939).A.isMobile ? 48 : b ? 30 : 28,
                        padding: b ? "6px 0px" : 0
                    },
                    overflow: {
                        marginInlineStart: 5,
                        justifySelf: "flex-end",
                        height: 22,
                        display: "flex",
                        alignItems: "center",
                        opacity: r || i(986939).A.isMobile ? 1 : 0,
                        transition: M ? "none" : `opacity ${i(153262).bM}`,
                        ...A ? {} : i(69916).Qg
                    },
                    joinLeaveButton: {
                        background: "none",
                        color: i(632079).Tj.text.secondary,
                        fontSize: 13,
                        borderRadius: 4,
                        padding: "0px 4px",
                        height: 22,
                        ...A ? {} : i(69916).Qg
                    },
                    unjoinedOverflowMenu: {
                        display: "flex",
                        height: 22,
                        marginInlineStart: 8,
                        marginInlineEnd: -6,
                        opacity: +!!r,
                        transition: M ? "none" : `opacity ${i(153262).bM}`,
                        ...A ? {} : i(69916).Qg
                    },
                    toggle: {
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: +!!r,
                        visibility: r ? "visible" : "hidden",
                        order: +!!r,
                        transition: M ? "none" : `opacity ${i(153262).bM}, visibility ${i(153262).bM}`
                    },
                    icon: {
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: +!r,
                        transition: M ? "none" : `opacity ${i(153262).bM}`,
                        order: +!r
                    }
                }), [b, A, r, M]), _ = (0, i(682985).K8)(() => t.getTeamPagesStore(), [t]), B = (0, i(682985).K8)(() => i(854722).A.state === t.id, [t.id]), [k, P] = (0, o.useState)(void 0), H = (0, i(67499).S)(), L = (0, o.useCallback)(({
                    draggingStores: e
                }) => !!w && (0, i(576536).ox)({
                    environment: y,
                    draggingStores: e,
                    parentStore: _,
                    spaceStore: w,
                    pageContext: H
                }), [w, y, _, H]), {
                    value: z
                } = (0, i(815048).fJ)(i(411648).VI.duplicateActions), O = (0, i(993077).U2)(w), R = (0, o.useCallback)(async e => {
                    await i(245757).RM({
                        dropArgs: e,
                        environment: y,
                        type: "team",
                        isDroppingOnFullSection: !1,
                        parentStore: _,
                        duplicateActions: z,
                        spaceUserStore: O
                    })
                }, [z, y, _, O]);
                if (!f) return null;
                let U = !T,
                    W = function(e, t) {
                        if (!t) return !1;
                        switch (e) {
                            case i(171231).GU:
                                return !0;
                            case i(171231).zt:
                            case i(171231).st:
                            case i(171231).AX:
                                return !1;
                            default:
                                (0, i(722371).HB)(e)
                        }
                    }(l, T),
                    E = e => {
                        i(630121).A.addNamedPopup("team_more_actions"), i(649807).lR(y, {
                            store: t,
                            from: e
                        })
                    },
                    K = () => {
                        i(630121).A.removeNamedPopup("team_more_actions")
                    };
                return (0, n.jsxs)(i(634944).Tl, {
                    dropTargetKey: (0, i(646044).p)(t),
                    canDropOnto: !e.isExpanded,
                    shouldShowDropZone: !0,
                    canAcceptDrop: L,
                    onSelectableDrop: R,
                    children: [(0, n.jsx)(i(656252).A, {
                        popupType: i(656252).z.Popup,
                        alignmentToOrigin: "start",
                        placementToOrigin: "right",
                        preventSlideUpTransition: !0,
                        preventScaleTransition: !0,
                        originRect: k,
                        content: e => (0, n.jsx)(i(219210).B1, {
                            teamStore: t,
                            permissionsInviteStore: I,
                            onDismiss: e.close,
                            from: "teamSidebar"
                        }),
                        onClick: () => E("teamSidebar"),
                        onClose: K,
                        children: ({
                            onClick: e
                        }) => (0, n.jsxs)("div", {
                            style: C.container,
                            onContextMenu: t => {
                                i(986939).A.isMobile || (0, i(705660).SQ)(t, i(705660).y$.EditorContextMenu, () => {
                                    t.preventDefault(), P(new DOMRect(t.clientX, t.clientY)), e()
                                })
                            },
                            children: [i(986939).A.isMobile ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(u, {
                                    store: t,
                                    outlinerToggleButtonStore: s,
                                    outlinerTeamOnToggle: g
                                }), (0, n.jsx)("div", {
                                    style: x.teamIconContainer,
                                    children: (0, n.jsx)(i(729746).x, {
                                        size: 20,
                                        store: t,
                                        disabled: !0,
                                        style: x.style0
                                    })
                                })]
                            }) : (0, n.jsxs)("div", {
                                style: x.iconAndToggleContainer,
                                children: [(0, n.jsx)("div", {
                                    style: C.icon,
                                    children: (0, n.jsx)("div", {
                                        style: x.teamIconContainer,
                                        children: (0, n.jsx)(i(729746).x, {
                                            size: 20,
                                            store: t,
                                            disabled: !0,
                                            style: x.style0
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    style: C.toggle,
                                    children: (0, n.jsx)(u, {
                                        store: t,
                                        outlinerToggleButtonStore: s,
                                        outlinerTeamOnToggle: g,
                                        style: b || A ? x.carat : i(69916).Qg
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                style: x.labelContainer,
                                children: [(0, n.jsx)("div", {
                                    style: x.labelText,
                                    id: m,
                                    children: a
                                }), b && void 0 !== j ? (0, n.jsxs)("div", {
                                    style: x.membersCountText,
                                    children: [w ? (0, n.jsx)(p, {
                                        teamStore: t,
                                        renderStyle: x.membersCountText,
                                        teamOutlinerType: l
                                    }) : void 0, W ? (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)("span", {
                                            children: " "
                                        }), " ·", (0, n.jsx)("span", {
                                            children: (0, n.jsx)(i(16275).I, {
                                                icon: i(437102).checkmarkCircleSmallIcon,
                                                size: "xxs",
                                                style: x.joinedBadgeIcon
                                            })
                                        }), (0, n.jsx)("span", {
                                            style: x.joinedBadge,
                                            children: (0, n.jsx)(i(109939).sA, {
                                                id: "outlinerTeamToggleButton.joinedBadge",
                                                defaultMessage: "Joined"
                                            })
                                        })]
                                    }) : void 0]
                                }) : void 0]
                            }), T ? (0, n.jsxs)("div", {
                                style: C.overflow,
                                children: [(0, n.jsx)(i(219210).eE, {
                                    teamId: t.id,
                                    from: l,
                                    onPopupClick: () => E(l),
                                    onPopupClose: K
                                }), v && !i(986939).A.isMobile ? (0, n.jsx)(h, {
                                    teamStore: t,
                                    outlinerToggleButtonStore: s,
                                    shouldPersistToggleState: c,
                                    from: S(l)
                                }) : void 0]
                            }) : void 0, T ? void 0 : (0, n.jsx)("div", {
                                style: C.unjoinedOverflowMenu,
                                children: (0, n.jsx)(i(219210).eE, {
                                    teamId: t.id,
                                    from: l,
                                    hideJoin: !0,
                                    onPopupClick: () => E(l),
                                    onPopupClose: K
                                })
                            }), !i(986939).A.isMobile && U ? (0, n.jsx)(i(107885).z, {
                                style: C.joinLeaveButton,
                                hoveredStyle: x.joinLeaveButtonHovered,
                                teamStore: t,
                                placement: "right",
                                from: "sidebar_team_modal",
                                navigateToTeamHomeOnJoin: !0
                            }) : void 0, v && i(986939).A.isMobile ? (0, n.jsx)("div", {
                                style: { ...C.overflow,
                                    ...A ? {} : i(69916).Qg
                                },
                                children: (0, n.jsx)(h, {
                                    teamStore: t,
                                    outlinerToggleButtonStore: s,
                                    shouldPersistToggleState: c,
                                    from: S(l)
                                })
                            }) : void 0, (0, n.jsx)(i(654979).A, {
                                visible: B,
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                style: x.teamHighlightAnimationBackgroundContainer
                            })]
                        })
                    }), (0, n.jsx)(i(219210).uo, {
                        permissionsInviteStore: I,
                        teamStore: t
                    })]
                })
            }

            function S(e) {
                switch (e) {
                    case i(171231).AX:
                    case i(171231).zt:
                        return "sidebar_team_section_browser";
                    case i(171231).GU:
                        return "sidebar_team_section_browser_search";
                    case i(171231).st:
                        return "sidebar_team_section";
                    default:
                        (0, i(722371).HB)(e)
                }
            }
            let T = {
                    labelTooltip: {
                        color: i(632079).Tj.text.inverseSecondary
                    }
                },
                j = function({
                    type: e,
                    from: t,
                    disableTooltip: a,
                    labelTooltip: r,
                    spaceStore: s,
                    spaceViewStore: l,
                    shouldPersistToggleState: d,
                    outlinerToggleButtonStore: c,
                    fromSecondarySidebar: u,
                    onClick: g
                }) {
                    let p = (0, i(533992).v3)(),
                        m = function(e) {
                            switch (e) {
                                case "bookmarks":
                                case "private":
                                case "shared":
                                case "agents":
                                case i(171231).tJ:
                                case i(171231).qe:
                                case i(171231).sx:
                                case i(171231).Vf:
                                case "meetings_today":
                                case "myMeetings":
                                case "team":
                                case "workspace":
                                case i(171231).yy:
                                case "notion_apps":
                                case "recents":
                                    return !1;
                                case i(171231).zt:
                                case i(171231).AX:
                                case i(171231).GU:
                                case i(171231).st:
                                    return !0;
                                default:
                                    (0, i(722371).HB)(e)
                            }
                        }(e),
                        h = (0, i(109939).tz)(),
                        b = (0, i(83208).X)("sidebar_add_new_pages_to_bottom"),
                        {
                            canCreate: y,
                            tooltipMessage: f
                        } = (0, i(639938).$)(),
                        x = (0, o.useRef)(null),
                        v = (0, o.useCallback)(async () => {
                            if (m)(0, i(198347).v)("sidebar_team_section");
                            else if ("agents" === e) {
                                if (!y) return;
                                let e = await i(178801).oQ.agentActions.load(),
                                    t = i(92513).JW();
                                await e.showCreationModal({
                                    analytics: {
                                        flowId: t,
                                        origin: "sidebar_new_agent"
                                    }
                                })
                            } else {
                                if (!l || !s || "team" === e || e === i(171231).yy) return;
                                if ((0, i(685257).u)(p) && "on" === i(218744).default.getEligibleGroup({
                                        experimentId: "packaging_open_modal_private_section_plus_button",
                                        defaultGroup: "control"
                                    })) {
                                    let {
                                        openTemplateOnboardingModal: e,
                                        getTemplateOnboardingVersion: t
                                    } = await i(903673).O.load();
                                    e({
                                        origin: "sidebar_private_new_page",
                                        parentStore: s,
                                        template: void 0,
                                        version: t({
                                            template: void 0
                                        })
                                    });
                                    return
                                }
                                i(707964).u4({
                                    name: "page_created",
                                    args: {
                                        type: e,
                                        from: t
                                    }
                                }), i(245757).SE({
                                    environment: p,
                                    spaceStore: s,
                                    spaceViewStore: l,
                                    type: e,
                                    outlinerToggleButtonStore: c,
                                    outlinerItemFrom: t,
                                    prepend: !b,
                                    shouldPersistToggleState: d
                                }), g && g()
                            }
                        }, [m, y, b, p, t, g, c, d, s, l, e]),
                        S = i(352202).zg(),
                        j = (0, i(960253).I)(() => ({
                            plusButton: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 20,
                                width: 20,
                                borderRadius: 4,
                                marginInlineStart: i(986939).A.isMobile || u ? 0 : 4,
                                ...u ? S.button : {}
                            }
                        }), [u, S]),
                        w = m ? h.formatMessage({
                            defaultMessage: "New teamspace",
                            id: "sidebar.addButton.addTeamTooltip"
                        }) : "agents" === e ? y ? h.formatMessage({
                            defaultMessage: "New agent",
                            id: "sidebar.addButton.addAgentTooltip"
                        }) : f : h.formatMessage({
                            defaultMessage: "Add a page",
                            id: "sidebar.addButton.addPageTooltip"
                        });
                    return (0, n.jsx)(i(51831).m, {
                        textWrap: !1,
                        disableTooltip: a,
                        content: () => (0, n.jsxs)(n.Fragment, {
                            children: [w, (0, n.jsx)("br", {}), (0, n.jsx)("span", {
                                style: T.labelTooltip,
                                children: m ? void 0 : r
                            })]
                        }),
                        placement: "bottom",
                        children: t => (0, n.jsxs)(i(64960).Ay, {
                            ariaLabel: w,
                            style: j.plusButton,
                            onClick: v,
                            className: "private" === e ? "shadow-cursor-new-page-sidebar" : void 0,
                            ...t,
                            children: [(0, n.jsx)("span", {
                                ref: x
                            }), (0, n.jsx)(i(16275).I, {
                                icon: i(638501).plusSmallIcon,
                                size: "sm",
                                colorVariant: i(986939).A.isMobile ? "tertiary" : "secondary"
                            })]
                        })
                    })
                },
                w = 12,
                I = {
                    bookmarks: i(828432).ojI,
                    workspace: i(828432).kRA,
                    shared: i(828432).c6k,
                    private: i(828432).MaD,
                    agents: i(828432).zCL,
                    offline: i(828432).mLD,
                    team: i(828432).zqk,
                    [i(171231).zt]: i(828432).Pji,
                    [i(171231).AX]: i(828432).oDg,
                    [i(171231).GU]: i(828432).kyo,
                    [i(171231).st]: i(828432).Of1,
                    [i(171231).yy]: i(828432).wgf,
                    [i(171231).tJ]: i(828432).zCL,
                    [i(171231).sx]: i(828432).zCL,
                    [i(171231).qe]: i(828432).zCL,
                    [i(171231).Vf]: i(828432).zCL,
                    notion_apps: i(828432).M4_,
                    meetings_today: i(828432).c6k,
                    recents: i(828432).buo,
                    myMeetings: i(828432).XM5
                },
                A = o.memo(function(e) {
                    var t;
                    let {
                        type: a,
                        renderSidebar: r,
                        isLastTeam: s,
                        marginBottomOverrideWhenExpanded: l,
                        marginBottomOverrideWhenCollapsed: d,
                        initialToggleState: c,
                        shouldPersistToggleState: u,
                        forceCollapsed: g
                    } = e, p = (0, i(533992).v3)(), {
                        isTablet: m
                    } = (0, i(533992).Y0)(), h = null == (t = (0, i(917441).Rx)()) ? void 0 : t.spaceViewId, b = (0, i(682985).uB)(e.outlinerToggleButtonStore, i(742112).I);
                    (0, i(383953).l)(() => {
                        if (c && b.setState({ ...b.state,
                                isHidden: "hidden" === c
                            }), !u || !h) return;
                        let t = function(e) {
                            let {
                                type: t,
                                spaceViewId: o
                            } = e;
                            if (t !== i(171231).yy) return "team" === t ? i(138676).YB(o, e.teamStore.id) : (0, i(485050).L)(o, t)
                        }({ ...e,
                            spaceViewId: h
                        });
                        if (!t) return;
                        let o = i(255482).K.get({
                            userId: p.currentUser.id,
                            key: t
                        });
                        o && b.setState({ ...b.state,
                            isHidden: o
                        })
                    });
                    let y = (0, i(682985).K8)(() => b.state.isHidden, [b]),
                        f = !!g || y,
                        x = I[a],
                        v = (0, o.useRef)(null),
                        S = (0, o.useId)(),
                        T = (0, o.useId)(),
                        j = (0, i(960253).I)(() => ({
                            toggle: {
                                marginBottom: f || s && !i(986939).A.isMobile ? d : l ? ? m ? 14 : w,
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            }
                        }), [f, s, d, l, m]);
                    return (0, n.jsxs)("div", {
                        ref: v,
                        style: j.toggle,
                        className: `${x}-container`,
                        children: [i(986939).A.isMobile && "team" === a ? (0, n.jsx)(_, { ...e,
                            outlinerToggleButtonStore: b,
                            isHidden: f,
                            labelAriaId: T,
                            contentsAriaId: S
                        }) : (0, n.jsx)(k, { ...e,
                            outlinerToggleButtonStore: b,
                            isHidden: f,
                            labelAriaId: T,
                            contentsAriaId: S
                        }), f ? void 0 : r({
                            headerRef: v,
                            labelAriaId: T,
                            contentsAriaId: S
                        })]
                    })
                }),
                M = {
                    padding: 0
                },
                C = {
                    overflow: "visible"
                };

            function _(e) {
                let {
                    type: t
                } = e, o = I[t];
                return (0, n.jsx)(i(380559).u, {
                    className: o,
                    style: M,
                    childrenStyle: C,
                    right: (0, n.jsx)(P, {
                        right: e.right,
                        from: e.from,
                        showAddButton: e.showAddButton,
                        type: e.type,
                        spaceStore: e.spaceStore,
                        spaceViewStore: e.spaceViewStore,
                        shouldPersistToggleState: e.shouldPersistToggleState,
                        outlinerToggleButtonStore: e.outlinerToggleButtonStore,
                        forceShow: e.forceShowRightLabel
                    }),
                    children: (0, n.jsx)(k, { ...e
                    })
                })
            }
            let B = {
                badgeWrapper: {
                    marginInlineStart: i(132261).sI,
                    display: "inline-flex"
                },
                hoveredButton: {
                    background: i(632079).Tj.sidebarItemSelectedBackground
                }
            };

            function k(e) {
                var t;
                let {
                    type: a,
                    isHidden: r,
                    teamOutlinerType: s,
                    teamStore: l,
                    hideChevron: d,
                    labelAriaId: c,
                    contentsAriaId: u,
                    forceHoveredButtonStyle: g,
                    disableToggle: p,
                    forceShowRightLabel: m,
                    labelColor: h,
                    spaceViewStore: b,
                    shouldPersistToggleState: y,
                    outlinerToggleButtonStore: f
                } = e, x = (0, i(533992).v3)(), {
                    isTablet: S
                } = (0, i(533992).Y0)(), T = (0, i(665002).g)(), [j, w] = (0, o.useState)(!1), [A, M] = (0, o.useState)(!1), C = j || A || !!g, _ = I[a], k = (0, i(960253).I)(() => ({
                    label: { ...L(),
                        ..."team" === a && {
                            width: "100%"
                        },
                        ...i(986939).A.isMobile && "team" !== a && {
                            fontWeight: S ? i(699422).Wy.regular : i(699422).Wy.semibold,
                            paddingInlineStart: S ? 5 : 8,
                            fontSize: S ? 15 : 13
                        },
                        ...!h && C && !S && {
                            color: i(632079).Tj.text.accentPrimary
                        },
                        ...h ? {
                            color: h
                        } : void 0,
                        ...T && {
                            transition: "none"
                        }
                    },
                    button: { ...!("team" === a && i(986939).A.isMobile) && H(s),
                        ...(0, i(153262).ic)(),
                        ..."team" === a && {
                            width: "100%",
                            ...i(153262).hG
                        },
                        ...T && {
                            transition: "none"
                        }
                    },
                    chevron: {
                        marginInlineStart: 4,
                        width: 12,
                        height: 12,
                        flexShrink: 0,
                        fill: i(632079).Tj.icon.tertiary,
                        opacity: +!!C,
                        transition: T ? "none" : `opacity ${i(153262).bM}, transform 100ms ease-out`,
                        transform: r ? "rotate(-90deg)" : "rotate(0deg)"
                    },
                    rightLabelWrapper: {
                        marginInlineStart: "auto",
                        marginInlineEnd: S ? 8 : void 0
                    }
                }), [a, C, r, s, S, h, T]), z = (0, o.useCallback)(() => {
                    p || function(e, t, o, n, a, r, s) {
                        let {
                            isHidden: l
                        } = s.state, d = !l;
                        "team" === t ? i(138676).Of({
                            environment: e,
                            spaceViewStore: o,
                            teamStore: n,
                            outlinerToggleButtonStore: s,
                            newIsHidden: d,
                            shouldPersistToggleState: a,
                            teamOutlinerType: r,
                            isExplicitUserAction: !0
                        }) : t === i(171231).yy ? i(245757).Wx({
                            environment: e,
                            type: t,
                            outlinerToggleButtonStore: s,
                            newIsHidden: d,
                            shouldPersistToggleState: !1
                        }) : i(245757).Wx({
                            environment: e,
                            spaceViewStore: o,
                            type: t,
                            outlinerToggleButtonStore: s,
                            newIsHidden: d,
                            shouldPersistToggleState: a
                        })
                    }(x, a, b, l, y, s, f)
                }, [p, x, a, b, l, s, y, f]), O = (0, o.useCallback)(() => w(!0), [w]), R = (0, o.useCallback)(() => w(!1), [w]), U = (0, o.useCallback)(e => {
                    let t = e.target;
                    t instanceof HTMLElement && (0, i(768397).p)(t) && M(!0)
                }, [M]), W = (0, o.useCallback)(() => M(!1), [M]), E = p ? void 0 : z, K = (0, i(109939).tz)();
                return (0, n.jsxs)(i(64960).Ay, {
                    className: _,
                    ..."team" === a ? {
                        "aria-labelledby": c
                    } : {
                        id: c
                    },
                    "aria-expanded": !r,
                    "aria-controls": u,
                    style: k.button,
                    hoveredStyle: B.hoveredButton,
                    hovered: !!g || void 0,
                    onClick: E,
                    onMouseMove: O,
                    onMouseLeave: R,
                    onFocus: U,
                    onBlur: W,
                    disabled: "publicPageTemplateIncludes" === a,
                    children: [(0, n.jsxs)("span", {
                        style: k.label,
                        children: ["team" === a ? (0, n.jsx)(v, {
                            isHovered: C,
                            isExpanded: !r,
                            teamStore: e.teamStore,
                            label: e.teamHeaderLabel,
                            outlinerToggleButtonStore: e.outlinerToggleButtonStore,
                            outlinerTeamOnToggle: z,
                            shouldPersistToggleState: e.shouldPersistToggleState,
                            teamOutlinerType: e.teamOutlinerType,
                            labelAriaId: e.labelAriaId
                        }) : (t = a) === i(171231).st || t === i(171231).zt || t === i(171231).AX || t === i(171231).GU || t === i(171231).yy || t === i(171231).tJ || t === i(171231).sx || t === i(171231).qe || t === i(171231).Vf ? e.sectionLabel : function(e, t) {
                            if ((0, i(190566).Yw)(e)) return (0, i(303322).y)(e, t);
                            switch (e) {
                                case "bookmarks":
                                    return (0, i(303322).y)("favorites", t);
                                case "workspace":
                                    return (0, n.jsx)(i(109939).sA, {
                                        defaultMessage: "Workspace",
                                        id: "sidebar.workspaceSection.header"
                                    });
                                case "notion_apps":
                                    return (0, n.jsx)(i(109939).sA, {
                                        defaultMessage: "Notion apps",
                                        id: "sidebar.notionAppsSection.header"
                                    });
                                default:
                                    (0, i(722371).HB)(e)
                            }
                        }(a, K), "sectionLabelBadge" in e && e.sectionLabelBadge ? (0, n.jsx)("span", {
                            style: B.badgeWrapper,
                            children: e.sectionLabelBadge
                        }) : void 0]
                    }), "team" === a || d ? void 0 : (0, n.jsx)(i(16275).I, {
                        icon: i(469102).arrowChevronSingleDownFillSmallIcon,
                        style: k.chevron
                    }), (0, n.jsx)("div", {
                        style: k.rightLabelWrapper,
                        children: (0, n.jsx)(P, {
                            right: e.right,
                            showAddButton: e.showAddButton,
                            from: e.from,
                            type: a,
                            spaceStore: e.spaceStore,
                            spaceViewStore: e.spaceViewStore,
                            shouldPersistToggleState: e.shouldPersistToggleState,
                            isHovered: C,
                            forceShow: m,
                            outlinerToggleButtonStore: e.outlinerToggleButtonStore
                        })
                    })]
                })
            }

            function P({
                right: e,
                showAddButton: t,
                isHovered: o,
                forceShow: a,
                ...r
            }) {
                let {
                    isTablet: s
                } = (0, i(533992).Y0)(), d = (0, i(665002).g)(), c = !!a || s || !!o, u = (0, i(960253).I)(() => ({
                    wrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: s ? 12 : void 0,
                        opacity: +!!c,
                        visibility: c ? "visible" : "hidden",
                        pointerEvents: c ? "auto" : "none",
                        transition: d ? "none" : `opacity ${i(153262).bM}, visibility ${i(153262).bM}`
                    }
                }), [c, s, d]);
                return (0, n.jsxs)("div", {
                    style: u.wrapper,
                    children: [(0, n.jsx)(l, {
                        type: r.type
                    }), e, t ? (0, n.jsx)(j, { ...r
                    }) : void 0]
                })
            }

            function H(e) {
                return {
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 6,
                    cursor: void 0,
                    ...!(e && d(e)) && {
                        height: i(132261).Zr
                    }
                }
            }

            function L() {
                return {
                    textTransform: "initial",
                    fontSize: 12,
                    lineHeight: 1,
                    color: i(632079).Tj.sidebarSecondaryColor,
                    fontWeight: i(699422).Wy.medium,
                    transition: "color 100ms ease-out"
                }
            }
            let z = o.memo(A)
        },
        675062: (e, t, i) => {
            async function o() {
                return (await Promise.all([i.e(9773), i.e(36556), i.e(40537), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(23519), i.e(63771), i.e(63137)]).then(i.bind(i, 118434))).createPageInTeamSyncImpl
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    spaceViewStore: a,
                    teamStore: r,
                    andNavigate: s,
                    from: l,
                    outlinerToggleButtonStore: d,
                    shouldPersistToggleState: c,
                    title: u,
                    loading: g,
                    appendOrPrepend: p,
                    event: m
                } = e;
                if (!(0, i(194020).E)(t, n)) return;
                let h = await o(),
                    {
                        performResult: {
                            createdPage: b
                        }
                    } = (0, i(377796).createAndCommit)({
                        userAction: "outlinerActions.createPageInTeam",
                        environment: t,
                        cellTarget: {
                            spaceWithId: n.id
                        },
                        canUndo: !0,
                        perform: e => ({
                            createdPage: h({
                                environment: t,
                                spaceStore: n,
                                spaceViewStore: a,
                                teamStore: r,
                                from: l,
                                title: u,
                                event: m,
                                loading: g,
                                appendOrPrepend: p,
                                transaction: e
                            })
                        })
                    });
                return s && (0, i(545586).navigateToBlock)({
                    environment: t,
                    store: b,
                    visitType: i(981324).ig.Link,
                    pageVisitSource: i(254656).y8.Create
                }), d && i(138676).Of({
                    environment: t,
                    spaceViewStore: a,
                    teamStore: r,
                    outlinerToggleButtonStore: d,
                    newIsHidden: !1,
                    shouldPersistToggleState: !!c,
                    isExplicitUserAction: !1
                }), b
            }
            i.d(t, {
                A: () => n
            })
        },
        715539: (e, t, i) => {
            i.d(t, {
                Fl: () => n,
                L_: () => d,
                Lm: () => s,
                Ow: () => l,
                Su: () => a,
                _T: () => c,
                f: () => r
            });
            let o = new(i(815048)).O2("SidebarTourTooltip", async () => {
                    let {
                        SidebarHeaderWelcomeTooltip: e,
                        TeamCreatorActionsTooltip: t,
                        TeamCreatorTeamspacesTooltip: o,
                        TeamCreatorPrebuiltTemplatesTooltip: n,
                        TeamCreatorPrivateTooltip: a,
                        TeamCreatorExploreTemplatesTooltip: r,
                        HomeAvailableTooltip: s
                    } = await i.e(45072).then(i.bind(i, 46643));
                    return {
                        SidebarHeaderWelcomeTooltip: e,
                        TeamCreatorActionsTooltip: t,
                        TeamCreatorTeamspacesTooltip: o,
                        TeamCreatorPrebuiltTemplatesTooltip: n,
                        TeamCreatorPrivateTooltip: a,
                        TeamCreatorExploreTemplatesTooltip: r,
                        HomeAvailableTooltip: s
                    }
                }),
                n = (0, i(815048)._h)(o, e => e.SidebarHeaderWelcomeTooltip),
                a = (0, i(815048)._h)(o, e => e.TeamCreatorActionsTooltip),
                r = (0, i(815048)._h)(o, e => e.TeamCreatorTeamspacesTooltip),
                s = (0, i(815048)._h)(o, e => e.TeamCreatorPrebuiltTemplatesTooltip),
                l = (0, i(815048)._h)(o, e => e.TeamCreatorPrivateTooltip),
                d = (0, i(815048)._h)(o, e => e.TeamCreatorExploreTemplatesTooltip),
                c = (0, i(815048)._h)(o, e => e.HomeAvailableTooltip)
        }
    }
]);