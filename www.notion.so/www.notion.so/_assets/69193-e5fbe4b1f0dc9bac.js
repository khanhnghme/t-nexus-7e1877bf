"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [69193], {
        121823: (e, t, a) => {
            a.d(t, {
                $: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.91 1.23 15.18 17.53",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M16.958 13.771a.625.625 0 0 1 1.028.71 4.8 4.8 0 0 1-3.326 2.033v.997h2.21a.625.625 0 0 1 0 1.25H11.2a.625.625 0 1 1 0-1.25h2.21v-.997a4.8 4.8 0 0 1-3.326-2.032.626.626 0 0 1 1.029-.711 3.55 3.55 0 0 0 2.922 1.535 3.55 3.55 0 0 0 2.923-1.535"
                        }), (0, n.jsx)("path", {
                            d: "M12.535 1.239c1.174 0 2.125.951 2.125 2.125v3.032a4 4 0 0 0-.447-.053l-.178-.005a3.45 3.45 0 0 0-3.45 3.45v2.464a1.875 1.875 0 0 0-1.53 2.94c.338.49.747.926 1.212 1.297H5.035a2.125 2.125 0 0 1-2.125-2.125v-11c0-1.174.951-2.125 2.125-2.125zm-6.25 5.663a.55.55 0 1 0 0 1.1H9a.55.55 0 0 0 0-1.1zm0-2.5a.55.55 0 1 0 0 1.1h5a.55.55 0 0 0 0-1.1z"
                        }), (0, n.jsx)("path", {
                            d: "M14.035 7.664c1.173 0 2.125.951 2.125 2.125v2.52a2.125 2.125 0 0 1-4.25 0v-2.52c0-1.174.951-2.125 2.125-2.125"
                        })]
                    })
                },
                o = (0, a(104509).wt)("paperMicrophoneFill", i, "fill")
        },
        322450: (e, t, a) => {
            function n(e = !1) {
                return e ? "workspace_owners_only" : "all_workspace_members"
            }

            function i(e) {
                let {
                    policy: t,
                    userRole: i,
                    userPermissionGroups: o,
                    isOwnersOnlyDefaultEnabled: r
                } = e, s = n(r), l = i && (0, a(642157).Km)(i);
                switch (t ? ? s) {
                    case "disabled":
                        return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                    case "workspace_owners_only":
                        if (!l) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                        break;
                    case "all_workspace_members":
                        break;
                    case "custom":
                        if (!(null == o ? void 0 : o.some(e => {
                                var t;
                                return (null == (t = e.settings) ? void 0 : t.can_create_custom_agents) === !0
                            })) && !l) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        }
                }
                return {
                    canCreate: !0
                }
            }
            a.d(t, {
                D: () => n,
                K: () => i
            }), a(898992), a(737550)
        },
        367584: (e, t, a) => {
            a.d(t, {
                i: () => n
            }), a(898992), a(354520);

            function n({
                spaceStore: e,
                spaceViewStore: t,
                userRootStore: i,
                currentUserStore: o
            }) {
                var r, s, l;
                let d, c = null == o ? void 0 : o.getEmail(),
                    p = c ? (0, a(801109).zN)(c) : void 0,
                    u = null == i || null == (r = i.getSpaceViewStores()) ? void 0 : r.filter(e => (0, a(916804).I)(e.getSpaceStore())),
                    g = u && u.length > 1,
                    m = null == e || null == (s = e.getPublicSpaceData()) ? void 0 : s.createdByDomain,
                    x = !1;
                if ((0, a(494144).o)(t)) {
                    let e;
                    x = !!(p && (l = {
                        emailDomain: p,
                        spaceOwnerDomain: m
                    }, ((e = (0, a(904434).FX)()) ? "professional" !== e : l.emailDomain && (0, a(801109).Ff)(l.emailDomain)) || l.emailDomain !== l.spaceOwnerDomain) || g || i && (0, a(799853).C)({
                        userRootStore: i
                    }))
                } else x = !!(0, a(484712).U)(t) || !(0, a(881016).d)();
                return !!e && !!i && !!(0, a(916804).I)(e) && !a(986939).A.isMobile && !x && !!(d = null == e ? void 0 : e.getPublicSpaceData()) && !d.disableGuestMembershipRequests && !0
            }
        },
        380559: (e, t, a) => {
            a.d(t, {
                u: () => r
            }), a(296540);
            var n = a(474848);
            let i = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function o(e) {
                let {
                    size: t
                } = e;
                return (0, n.jsx)("span", {
                    style: i,
                    children: (0, n.jsx)(a(16275).I, {
                        icon: a(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function r(e) {
                var t, i;
                let {
                    isTablet: r
                } = (0, a(533992).Y0)(), s = (0, a(853284).U)(), l = (0, a(665002).g)(), d = a(986939).A.isMobile ? (0, a(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (i = e.style) ? void 0 : i.paddingInlineStart : 10) : void 0, c = (0, a(960253).I)(() => {
                    let t = a(986939).A.isMobile ? {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: 26,
                            fontSize: 16,
                            paddingTop: r ? 4 : 8,
                            paddingBottom: r ? 4 : 8,
                            paddingInlineStart: d,
                            paddingInlineEnd: 10,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            boxShadow: void 0,
                            marginBottom: e.shouldShowMobileMarginBottom ? 12 : 1
                        } : {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: 14,
                            minHeight: e.isBottomItem ? 24 : 27,
                            height: a(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, a(153262).ic)()
                        },
                        n = a(986939).A.isMobile ? 24 : e.isLibrary ? a(132261).FD : a(132261).ry;
                    return {
                        wrapper: { ...t,
                            ...e.style,
                            ...l && {
                                transition: "none"
                            }
                        },
                        icon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: a(986939).A.isMobile ? 28 : 22,
                            height: a(986939).A.isMobile ? 24 : 18,
                            marginInlineEnd: e.isLibrary ? 3 : 8,
                            position: "relative"
                        },
                        right: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            height: "100%",
                            ...e.rightStyle
                        },
                        left: {
                            flexShrink: 0,
                            flexGrow: 0,
                            borderRadius: 4,
                            color: a(632079).Tj.text.secondary,
                            width: n,
                            height: n,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: s ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !a(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [r, d, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, s, l]);
                return (0, n.jsxs)("div", {
                    role: e.role,
                    dir: (0, a(619157).A1)() ? "rtl" : "ltr",
                    "aria-current": e["aria-current"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-owns": e["aria-owns"],
                    "aria-labelledby": e["aria-labelledby"],
                    style: c.wrapper,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    onMouseMove: e.onMouseMove,
                    onMouseLeave: e.onMouseLeave,
                    onClick: e.onClick,
                    className: e.className,
                    children: [e.left ? (0, n.jsx)("div", {
                        style: c.left,
                        children: e.left
                    }) : void 0, e.icon ? (0, n.jsxs)("div", {
                        style: c.icon,
                        children: [e.icon, e.isAlias ? (0, n.jsx)(o, {
                            size: "xs"
                        }) : void 0]
                    }) : void 0, (0, n.jsx)("div", {
                        style: c.children,
                        children: e.children
                    }), e.right ? (0, n.jsx)("div", {
                        style: c.right,
                        children: e.right
                    }) : void 0]
                })
            }
        },
        437959: (e, t, a) => {
            a.d(t, {
                S: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.42 3.97 12.16 12.06",
                    directional: !0,
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M3.608 10.442a.625.625 0 0 1 0-.884l5.4-5.4a.625.625 0 0 1 .884.884L4.934 10l4.958 4.958a.625.625 0 1 1-.884.884z"
                        }), (0, n.jsx)("path", {
                            d: "m14.508 4.158-5.4 5.4a.625.625 0 0 0 0 .884l5.4 5.4a.625.625 0 1 0 .884-.884L10.434 10l4.958-4.958a.625.625 0 1 0-.884-.884"
                        })]
                    })
                },
                o = (0, a(104509).wt)("arrowChevronDoubleBackward", i, "default")
        },
        639938: (e, t, a) => {
            a.d(t, {
                $: () => o,
                V: () => i
            }), a(581454);
            let n = (0, a(109939).YK)({
                permissionDeniedTooltip: {
                    id: "permissions.agentCreation.denied",
                    defaultMessage: "Contact a workspace owner to create agents"
                }
            });

            function i() {
                let e = (0, a(972740).L)(),
                    t = (0, a(876252).$)(),
                    n = (0, a(682985).K8)(() => !!(null == e ? void 0 : e.getZeroRetentionEnabled()), [e]),
                    i = (0, a(83208).X)("agent_creation_permissions"),
                    o = (0, a(83208).X)("custom_agents_allow_hipaa"),
                    r = (0, a(83208).X)("agent_creation_default_owners_only");
                return (0, a(682985).K8)(() => {
                    if (n && !o) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    if (!i) return {
                        canCreate: !0
                    };
                    let s = null == e ? void 0 : e.getModel(),
                        l = null == s ? void 0 : s.getSettings();
                    if (!e || !t || !s || !l) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    let d = (0, a(993077).dp)(e, t.id).getMembershipTypeAsRoleOrNone(),
                        c = a(68809).f.getSpacePermissionGroupIds({
                            spaceId: e.id
                        }),
                        p = (0, a(381453).oE)(Array.from(c).map(t => {
                            let n = (0, a(13717).E)({
                                spaceStore: e,
                                groupId: t
                            });
                            if (n) {
                                let e = n.getSettings();
                                return {
                                    settings: e ? {
                                        can_create_custom_agents: e.can_create_custom_agents
                                    } : void 0
                                }
                            }
                        })),
                        u = {
                            policy: l.custom_agent_creation_policy,
                            userRole: d && "none" !== d ? d : void 0,
                            userPermissionGroups: p,
                            isOwnersOnlyDefaultEnabled: r
                        };
                    return (0, a(322450).K)(u)
                }, [e, t, i, r, n, o])
            }

            function o() {
                let e = i(),
                    t = (0, a(109939).tz)().formatMessage(n.permissionDeniedTooltip);
                return {
                    canCreate: e.canCreate,
                    reason: e.reason,
                    tooltipMessage: t
                }
            }
        },
        665002: (e, t, a) => {
            a.d(t, {
                H: () => l,
                g: () => d
            });
            var n = a(296540),
                i = a(474848);
            let o = {
                    disableHoverAnimations: !1
                },
                r = {
                    disableHoverAnimations: !0
                },
                s = (0, n.createContext)(o);

            function l({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, i.jsx)(s.Provider, {
                    value: e ? r : o,
                    children: t
                })
            }

            function d() {
                return (0, n.useContext)(s).disableHoverAnimations
            }
            s.displayName = "SidebarItemHoverAnimationContext"
        },
        722965: (e, t, a) => {
            a.d(t, {
                B: () => n
            });
            let n = new(a(815048)).O2("homeShortcutsActions", () => Promise.all([a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(23519), a.e(63771), a.e(45213), a.e(53847), a.e(12354), a.e(43444), a.e(23979), a.e(48486), a.e(76298), a.e(23644), a.e(89563), a.e(29872)]).then(a.bind(a, 675693)))
        },
        739423: (e, t, a) => {
            a.d(t, {
                B: () => i
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10.441 2.407c4.513.182 7.747 3.144 7.748 6.947 0 3.802-3.235 6.765-7.748 6.947l-.44.009c-.88 0-1.711-.106-2.484-.3-1.35 1.023-2.986 1.62-4.827 1.428a.626.626 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.641-1.115-1.198-1.756-2.734-1.756-4.41 0-3.926 3.448-6.956 8.189-6.956z"
                    })
                },
                i = (0, a(104509).wt)("chatBubbleFill", n, "fill")
        },
        784665: (e, t, a) => {
            a.d(t, {
                K: () => p
            });
            var n = a(296540);
            let i = new(a(815048)).O2("ComposeMenuMorphWrapper", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(98629), a.e(42838), a.e(30085), a.e(8142), a.e(8360), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(31243), a.e(86662), a.e(14886), a.e(39225), a.e(87971), a.e(2626), a.e(64453), a.e(4779), a.e(76361), a.e(56308), a.e(55067), a.e(83490), a.e(58360), a.e(82538), a.e(12690), a.e(60262), a.e(72805), a.e(2276), a.e(90735), a.e(50354), a.e(3723), a.e(40716), a.e(14231), a.e(78311), a.e(4287), a.e(44724), a.e(48095), a.e(69193), a.e(67098), a.e(10188), a.e(75484), a.e(97711), a.e(18802), a.e(59133), a.e(20957), a.e(32664), a.e(3055), a.e(67252), a.e(20491), a.e(70506), a.e(62146), a.e(23639), a.e(24394), a.e(72143), a.e(53478), a.e(38998), a.e(78295), a.e(38539), a.e(75651), a.e(31061)]).then(a.bind(a, 660101))),
                o = (0, a(815048)._h)(i, e => e.ComposeMenuMorphWrapper);
            var r = a(474848);
            let s = (0, a(109939).YK)({
                    moreOptionsTooltip: {
                        id: "sidebar.createPageButton.moreOptions",
                        defaultMessage: "More options"
                    },
                    moreOptionsSecondaryTooltip: {
                        id: "sidebar.createPageButton.moreOptionsSecondary",
                        defaultMessage: "Pick a type"
                    },
                    newTooltip: {
                        id: "sidebar.createPageButton.newTooltip",
                        defaultMessage: "New…"
                    },
                    createNewTitle: {
                        id: "sidebar.createPageButton.createNewTitle",
                        defaultMessage: "Create new"
                    }
                }),
                l = {
                    background: "transparent",
                    boxShadow: "none",
                    borderRadius: 0,
                    overflow: "visible"
                },
                d = {
                    position: "relative"
                },
                c = {
                    shortcutLabel: {
                        color: a(632079).Tj.text.inverseSecondary
                    },
                    slipperySlopeHovered: {
                        background: a(632079).Tj.gray.background.secondaryTranslucent
                    },
                    button: {
                        width: "fit-content",
                        height: 28,
                        borderRadius: 4
                    },
                    iconDisabled: {
                        opacity: .4
                    },
                    hovered: {
                        background: a(632079).Tj.sidebarItemSelectedBackground
                    },
                    expandedContainer: {
                        position: "relative",
                        width: "100%"
                    },
                    expandedContent: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                    },
                    expandedLabelAndShortcut: {
                        display: "flex",
                        alignItems: "baseline",
                        gap: 6
                    },
                    expandedShortcutInline: {
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: 4,
                        color: a(632079).Tj.text.tertiary,
                        fontSize: 12,
                        fontWeight: a(699422).Wy.medium,
                        background: a(632079).Tj.background.secondaryTranslucent,
                        padding: "2px 4px",
                        marginInlineEnd: -4
                    },
                    mainButton: {
                        width: 28,
                        height: 28,
                        borderRadius: 4
                    },
                    chevronButton: {
                        width: 16,
                        height: 28,
                        borderRadius: 4
                    },
                    chevronIcon: {
                        width: a(104509).Ev.xs,
                        height: a(104509).Ev.xs,
                        fill: a(632079).Tj.icon.secondary
                    },
                    secondaryTooltip: {
                        color: a(632079).Tj.text.inverseSecondary
                    },
                    expandedFloatingMenuItem: {
                        minHeight: 32
                    }
                };

            function p({
                from: e,
                onClick: t,
                iconStyle: i,
                variant: u = "default",
                hideChatOption: g,
                menuOffsetX: m = 0
            }) {
                let x = (0, a(533992).v3)(),
                    h = (0, a(109939).tz)(),
                    b = (0, a(960253).e)(),
                    v = "dark" === b ? a(632079).Tj.gray.background.elevated : a(632079).Tj.background.primary,
                    {
                        hovered: f,
                        pressed: y
                    } = (0, a(133251)._S)({
                        color: v
                    }),
                    w = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    S = (0, n.useRef)(null),
                    j = (0, n.useRef)(null),
                    {
                        currentUserRootStore: _,
                        currentUserStore: k
                    } = (0, a(682985).K8)(() => ({
                        currentUserRootStore: a(728372).AppStoreCurrentUserRootStore.state,
                        currentUserStore: a(728372).AppStoreCurrentUserStore.state
                    }), []),
                    M = (0, a(682985).K8)(() => (0, a(916804).I)(w), [w]),
                    A = (0, a(815048).fJ)(a(68067).$),
                    B = (0, a(815048).fJ)(a(722965).B),
                    {
                        navigate: I
                    } = (0, n.useContext)(a(44894).E),
                    C = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    T = (0, a(682985).K8)(() => (0, a(367584).i)({
                        spaceStore: w,
                        spaceViewStore: C,
                        userRootStore: _,
                        currentUserStore: k
                    }), [w, _, k, C]),
                    P = (0, a(83208).X)("sidebar_add_new_pages_to_bottom"),
                    O = (0, a(853284).U)(),
                    F = x.device.isElectron && O,
                    z = (0, a(682985).K8)(() => (0, a(219888).x)(), []),
                    V = (0, a(869708).p8)(),
                    E = (0, a(24971).A)("(prefers-reduced-motion: reduce)"),
                    [L, R] = (0, n.useState)(!1),
                    [H, D] = (0, n.useState)(!1),
                    N = "floating" === u && O && !E && !a(986939).A.isMobile,
                    K = (0, n.useCallback)(() => {
                        (0, a(104310).u)({
                            event: {
                                eventName: "open_sidebar_new_page_menu",
                                eventProperties: {
                                    from: e
                                }
                            }
                        })
                    }, [e]),
                    G = (0, n.useCallback)(({
                        event: e
                    }) => {
                        let n = F ? "tab" : (0, a(7029).V)(e),
                            i = !!x.device.isElectron || void 0,
                            o = x.RouterStore.state.route;
                        "chat" !== o.name && "ai" !== o.name && a(562733).zI.setState({ ...a(562733).zI.state,
                            fullPageChatSourceUrl: window.location.href
                        }), I({
                            environment: x,
                            url: "/ai",
                            openInNew: n,
                            makeTabActive: i
                        }), t && t()
                    }, [x, I, t, F]);
                (0, n.useEffect)(() => {
                    let e = () => {
                        a(984858).sidebarAnimatingStore.state && S.current && (R(!1), D(!1), S.current.setOpen(!1))
                    };
                    return a(984858).sidebarAnimatingStore.addListener(e), () => {
                        a(984858).sidebarAnimatingStore.removeListener(e)
                    }
                }, []);
                let U = (0, a(960253).I)(() => {
                        let e = "dark" === b ? f : v,
                            t = "dark" === b ? y : v;
                        return {
                            icon: {
                                width: a(104509).Ev.lg,
                                height: a(104509).Ev.lg,
                                fill: a(632079).Tj.text.primary,
                                ...i
                            },
                            floatingButton: {
                                width: 40,
                                height: 40,
                                borderRadius: 999,
                                background: v,
                                boxShadow: a(632079).Tj.shadow.outline.md,
                                flexShrink: 0,
                                transition: "background 20ms ease-in, transform 100ms ease-out"
                            },
                            floatingButtonHovered: {
                                background: e,
                                transform: "scale(1.06)"
                            },
                            floatingButtonPressed: {
                                background: t,
                                transform: "scale(1.0)"
                            },
                            expandedFloatingButton: {
                                position: "relative",
                                width: "100%",
                                height: 40,
                                borderRadius: 999,
                                background: v,
                                boxShadow: a(632079).Tj.shadow.outline.md,
                                border: "none",
                                transition: "background 20ms ease-in, box-shadow 20ms ease-in, transform 100ms ease-out"
                            },
                            expandedFloatingHovered: {
                                background: e,
                                transform: "scale(1.03)"
                            },
                            expandedFloatingPressed: {
                                background: t,
                                transform: "scale(1.0)"
                            }
                        }
                    }, [i, b, f, y, v]),
                    W = "dark" === b ? "0 0 0 1px rgba(56, 56, 54, 1), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)" : "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0 0 0 1px rgba(84, 72, 49, 0.08)",
                    $ = "dark" === b ? "0 0 0 1px rgba(56, 56, 54, 1), 0px 14px 28px -6px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.12)" : "0px 14px 28px -6px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(84, 72, 49, 0.08)",
                    J = (0, a(682985).K8)(() => (0, a(702482).w)(C), [C]),
                    X = (0, a(596663).k)(),
                    {
                        canCreate: Y
                    } = (0, a(639938).V)(),
                    q = (0, n.useCallback)(() => {
                        var e;
                        null == (e = S.current) || e.setOpen(!1), R(!1), D(!1)
                    }, []);
                if ("sidebar_new_page_button" === e && T && (M || J)) return (0, r.jsx)(a(374533).A, {
                    icon: a(111481).M,
                    ariaLabel: h.formatMessage(a(323836).e.label),
                    onClick: () => {
                        a(346472).A.open()
                    },
                    style: c.button,
                    iconStyle: { ...U.icon,
                        ...c.iconDisabled
                    }
                });
                let Q = async n => {
                        let i = (0, a(484712).U)(C);
                        if (M && !i) a(807717).createOrJoinSpace(x, "sidebar_switcher");
                        else {
                            if (w) {
                                let t = F ? "tab" : (0, a(7029).V)(n),
                                    i = await (0, a(323836).M)({
                                        environment: x,
                                        from: e,
                                        event: n,
                                        navigateOnCreate: !t,
                                        prependPrivatePage: !P
                                    });
                                if (t && i) {
                                    let e = (0, a(483227).Ay)({
                                        store: i,
                                        pageVisitSource: a(254656).y8.SidebarQuickAdd
                                    });
                                    x.device.isElectron ? (0, a(96351).B)({
                                        makeTabActive: !0,
                                        url: e,
                                        position: "end",
                                        openInNew: t,
                                        isNewPage: !0,
                                        environment: x
                                    }) : I({
                                        environment: x,
                                        url: e,
                                        openInNew: t
                                    })
                                }
                                "sidebar_private_pane" === e && a(707964).u4({
                                    name: "page_created",
                                    args: {
                                        type: "private",
                                        from: "secondary_sidebar"
                                    }
                                })
                            }
                            t && t()
                        }
                    },
                    Z = async ({
                        event: e
                    }) => {
                        await Q(e)
                    },
                    ee = async () => {
                        let e = await a(178801).oQ.agentActions.load(),
                            t = a(92513).JW();
                        await e.showCreationModal({
                            analytics: {
                                flowId: t,
                                origin: "top_level_create_page_menu"
                            }
                        })
                    },
                    et = "expandedFloating" === u,
                    ea = et || N ? c.expandedFloatingMenuItem : void 0,
                    en = [{
                        key: "new_page",
                        action: Z,
                        render: e => (0, r.jsx)(a(95582).A, { ...e,
                            buttonStyle: ea,
                            style: et ? ea : void 0,
                            title: h.formatMessage({
                                id: "sidebar.createPageButton.page",
                                defaultMessage: "Page"
                            }),
                            icon: O ? (0, r.jsx)(a(16275).I, {
                                icon: a(865213).Y
                            }) : (0, r.jsx)(a(16275).I, {
                                icon: a(782622).pageFillIcon,
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            })
                        })
                    }, ...O && !g ? [{
                        key: "ai_chat",
                        action: G,
                        render: e => (0, r.jsx)(a(95582).A, { ...e,
                            buttonStyle: ea,
                            style: et ? ea : void 0,
                            title: h.formatMessage({
                                id: "sidebar.createPageButton.chat",
                                defaultMessage: "Chat"
                            }),
                            icon: O ? (0, r.jsx)(a(16275).I, {
                                icon: a(799891).y
                            }) : (0, r.jsx)(a(16275).I, {
                                icon: a(739423).B,
                                colorPalette: "purple",
                                colorVariant: "accentPrimary"
                            })
                        })
                    }] : [], ...z ? [{
                        key: "meeting_note",
                        action: ({
                            event: n
                        }) => {
                            if (M) return void a(807717).createOrJoinSpace(x, "sidebar_switcher");
                            if ("resolved" !== A.status) return;
                            let i = F ? "tab" : (0, a(7029).V)(n),
                                {
                                    createAndNavigateToTranscriptionBlock: o
                                } = A.value,
                                r = o({
                                    environment: x,
                                    from: e,
                                    title: "none",
                                    navigateOnCreate: !i
                                });
                            if (i && r) {
                                let e = r.getNavigableBlockStore() ? ? r,
                                    t = (0, a(483227).Ay)({
                                        store: e,
                                        pageVisitSource: a(254656).y8.Create
                                    });
                                x.device.isElectron ? (0, a(96351).B)({
                                    makeTabActive: !0,
                                    url: t,
                                    position: "end",
                                    openInNew: i,
                                    isNewPage: !0,
                                    environment: x
                                }) : I({
                                    environment: x,
                                    url: t,
                                    openInNew: i
                                })
                            }
                            r && "sidebar_private_pane" === e && a(707964).u4({
                                name: "page_created",
                                args: {
                                    type: "private",
                                    from: "secondary_sidebar"
                                }
                            }), t && t()
                        },
                        render: e => (0, r.jsx)(a(95582).A, { ...e,
                            buttonStyle: ea,
                            style: et ? ea : void 0,
                            title: h.formatMessage(V),
                            icon: O ? (0, r.jsx)(a(16275).I, {
                                icon: a(958863).E
                            }) : (0, r.jsx)(a(16275).I, {
                                icon: a(121823).$,
                                colorPalette: "red",
                                colorVariant: "accentPrimary"
                            }),
                            loading: "pending" === A.status,
                            ..."resolved" !== A.status ? {
                                disabled: !0,
                                disabledFeedback: !0
                            } : {}
                        })
                    }] : [], {
                        key: "new_database",
                        action: ({
                            event: e
                        }) => {
                            if (M && !J) return void a(807717).createOrJoinSpace(x, "sidebar_switcher");
                            if ("resolved" !== B.status) return;
                            let {
                                createNewDatabase: t
                            } = B.value, n = F ? "tab" : (0, a(7029).V)(e), i = !!x.device.isElectron || void 0;
                            t(x, {
                                openInNew: n,
                                makeTabActive: i
                            })
                        },
                        render: e => (0, r.jsx)(a(95582).A, { ...e,
                            buttonStyle: ea,
                            style: et ? ea : void 0,
                            title: h.formatMessage({
                                id: "sidebar.createPageButton.database",
                                defaultMessage: "Database"
                            }),
                            icon: O ? (0, r.jsx)(a(16275).I, {
                                icon: a(518630).T
                            }) : (0, r.jsx)(a(16275).I, {
                                icon: a(783892).C,
                                colorPalette: "orange",
                                colorVariant: "accentPrimary"
                            }),
                            loading: "pending" === B.status,
                            ..."resolved" !== B.status ? {
                                disabled: !0,
                                disabledFeedback: !0
                            } : {}
                        })
                    }, ...!O && X && Y ? [{
                        key: "new_custom_agent",
                        action: ee,
                        render: e => (0, r.jsx)(a(95582).A, { ...e,
                            title: h.formatMessage({
                                id: "sidebar.createPageButton.customAgent",
                                defaultMessage: "Custom Agent"
                            }),
                            icon: (0, r.jsx)(a(16275).I, {
                                icon: a(920976).F
                            })
                        })
                    }] : [], ...O ? [] : [{
                        key: "browse_templates",
                        action: () => {
                            I({
                                environment: x,
                                url: "/marketplace"
                            })
                        },
                        render: e => (0, r.jsx)(a(95582).A, { ...e,
                            title: h.formatMessage({
                                id: "sidebar.createPageButton.browseTemplates",
                                defaultMessage: "Templates"
                            }),
                            icon: (0, r.jsx)(a(16275).I, {
                                icon: a(856400).templatesFillIcon,
                                colorVariant: "secondary"
                            })
                        })
                    }]],
                    ei = en.findIndex(e => "browse_templates" === e.key),
                    eo = ei > -1 ? [{
                        key: "create_page_options",
                        items: en.slice(0, ei)
                    }, {
                        key: "templates_section",
                        render: e => (0, r.jsx)(a(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: en.slice(ei)
                    }] : [{
                        key: "create_page_options",
                        render: e => et ? (0, r.jsx)(a(844565).A, { ...e,
                            title: h.formatMessage(s.createNewTitle)
                        }) : (0, r.jsx)(a(844565).A, { ...e
                        }),
                        items: en
                    }],
                    er = N && (L || H),
                    es = e => {
                        var t;
                        let n = (0, r.jsx)(a(747369).A, {
                            menuType: a(649476).gu.Popup,
                            width: et ? ((null == (t = j.current) ? void 0 : t.offsetWidth) ? ? 175) + 8 : O ? 175 : 200,
                            children: (0, r.jsx)(a(558045).A, {
                                type: a(558045).O.Vertical,
                                sections: eo,
                                initialFocus: 0,
                                onAccept: () => {
                                    e.close()
                                }
                            })
                        });
                        return N ? (0, r.jsx)(o, {
                            isOpen: L && !H,
                            onExitComplete: q,
                            buttonBackground: v,
                            buttonBoxShadow: W,
                            menuBoxShadow: $,
                            originGap: 8,
                            buttonIcon: (0, r.jsx)("div", {
                                style: U.icon,
                                children: (0, r.jsx)(a(16275).I, {
                                    icon: a(111481).M,
                                    size: "lg"
                                })
                            }),
                            children: n
                        }) : n
                    };
                if (O) {
                    let e = (0, r.jsxs)(a(4458).fI, {
                        gap: 6,
                        alignItems: "center",
                        justifyContent: "center",
                        className: "autolayout-fill-width",
                        style: d,
                        children: [(0, r.jsx)("span", {
                            children: h.formatMessage(s.newTooltip)
                        }), x.device.isNative ? (0, r.jsx)(a(693592).A, {
                            style: c.shortcutLabel,
                            name: "newPage"
                        }) : null]
                    });
                    return "expandedFloating" === u ? (0, r.jsx)("div", {
                        ref: j,
                        style: c.expandedContainer,
                        children: (0, r.jsx)(a(656252).A, {
                            ref: S,
                            popupType: a(656252).z.Popup,
                            placementToOrigin: "bottom",
                            alignmentToOrigin: "center",
                            originGap: 8,
                            onClick: K,
                            content: es,
                            children: e => (0, r.jsx)(a(548436).A, { ...e,
                                size: "lg",
                                hasSolidBackground: !0,
                                colorVariant: "accentPrimary",
                                ariaLabel: h.formatMessage(s.newTooltip),
                                style: U.expandedFloatingButton,
                                hoveredStyle: U.expandedFloatingHovered,
                                pressedStyle: U.expandedFloatingPressed,
                                children: (0, r.jsxs)("span", {
                                    style: c.expandedContent,
                                    children: [(0, r.jsx)(a(16275).I, {
                                        icon: a(111481).M
                                    }), (0, r.jsxs)("span", {
                                        style: c.expandedLabelAndShortcut,
                                        children: [(0, r.jsx)(a(109939).sA, {
                                            id: "sidebar.createPageButton.expandedNewLabel",
                                            defaultMessage: "New"
                                        }), x.device.isElectron ? (0, r.jsx)("span", {
                                            style: c.expandedShortcutInline,
                                            children: (0, r.jsx)(a(693592).A, {
                                                name: "newPage"
                                            })
                                        }) : void 0]
                                    })]
                                })
                            })
                        })
                    }) : (0, r.jsx)(a(656252).A, {
                        ref: S,
                        popupType: a(656252).z.Popup,
                        placementToOrigin: N ? "top" : "bottom",
                        alignmentToOrigin: "start",
                        originGap: 8,
                        originRectTransform: e => new DOMRect(N ? e.x + m - 4 : e.x - 6 + m, e.y, e.width, e.height),
                        onClick: K,
                        onOpen: N ? () => R(!0) : void 0,
                        onClose: N ? () => D(!0) : void 0,
                        persistOnClose: N,
                        preventScaleTransition: N,
                        preventOpacityTransition: N,
                        popupWrapStyle: N ? l : void 0,
                        content: es,
                        children: t => (0, r.jsx)(a(51831).m, {
                            content: () => e,
                            placement: "bottom",
                            children: e => (0, r.jsx)(a(374533).A, { ...e,
                                ...t,
                                icon: er ? a(117152).xMarkIcon : a(111481).M,
                                ariaLabel: h.formatMessage(a(323836).e.label),
                                size: "lg",
                                shape: "pill",
                                style: "floating" === u ? U.floatingButton : void 0,
                                iconStyle: U.icon,
                                hoveredStyle: "floating" === u ? er ? {
                                    background: U.floatingButtonHovered.background
                                } : U.floatingButtonHovered : c.slipperySlopeHovered,
                                pressedStyle: "floating" === u ? er ? {
                                    background: U.floatingButtonPressed.background
                                } : U.floatingButtonPressed : void 0
                            })
                        })
                    })
                }
                return (0, r.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    children: [(0, r.jsx)(a(51831).m, {
                        content: () => (0, r.jsxs)(r.Fragment, {
                            children: [h.formatMessage(a(323836).e.tooltip), x.device.isNative ? (0, r.jsx)("div", {
                                children: (0, r.jsx)(a(693592).A, {
                                    style: c.shortcutLabel,
                                    name: "newPage"
                                })
                            }) : void 0]
                        }),
                        originGap: 6,
                        placement: "right",
                        children: e => (0, r.jsx)(a(374533).A, { ...e,
                            icon: a(111481).M,
                            ariaLabel: h.formatMessage(a(323836).e.label),
                            onClick: Q,
                            style: c.mainButton,
                            iconStyle: U.icon,
                            hoveredStyle: c.hovered
                        })
                    }), (0, r.jsx)(a(656252).A, {
                        ref: S,
                        popupType: a(656252).z.Popup,
                        placementToOrigin: "bottom",
                        originGap: 6,
                        originRectTransform: e => new DOMRect(e.x - 37, e.y, e.width, e.height),
                        onClick: K,
                        content: es,
                        children: e => (0, r.jsx)(a(51831).m, {
                            content: () => (0, r.jsxs)("div", {
                                children: [h.formatMessage(s.moreOptionsTooltip), (0, r.jsx)("div", {
                                    style: c.secondaryTooltip,
                                    children: h.formatMessage(s.moreOptionsSecondaryTooltip)
                                })]
                            }),
                            originGap: 6,
                            placement: "right",
                            children: t => (0, r.jsx)(a(374533).A, { ...t,
                                ...e,
                                icon: a(595453).arrowChevronSingleDownSmallIcon,
                                ariaLabel: h.formatMessage(s.moreOptionsTooltip),
                                style: c.chevronButton,
                                iconStyle: c.chevronIcon,
                                hoveredStyle: c.hovered
                            })
                        })
                    })]
                })
            }
        },
        856400: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                templatesFillIcon: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.71 3.25 14.58 13.51",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "m14.636 8.765 1.003 1.737a.93.93 0 0 0 .355-.73v-5.59a.934.934 0 0 0-.932-.932H9.239a.934.934 0 0 0-.932.932v5.6c0 .502.41.921.923.921h.752L11.1 8.765q.048-.083.109-.155a2.035 2.035 0 0 1 3.425.152z"
                        }), (0, n.jsx)("path", {
                            d: "M9.347 11.803H9.23a2.024 2.024 0 0 1-2.022-2.022V6.284a4.195 4.195 0 1 0 .538 8.295zm2.706-2.488L8.57 15.353a.931.931 0 0 0 .81 1.397h6.978a.934.934 0 0 0 .811-1.398l-3.484-6.037a.936.936 0 0 0-1.622 0z"
                        })]
                    })
                },
                o = (0, a(104509).wt)("templatesFill", i, "fill")
        },
        958863: (e, t, a) => {
            a.d(t, {
                E: () => o
            }), a(296540);
            var n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.45 2.17 11.09 15.43",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M10 2.175A2.875 2.875 0 0 0 7.125 5.05v3.6a2.875 2.875 0 1 0 5.75 0v-3.6A2.875 2.875 0 0 0 10 2.175M8.375 5.05a1.625 1.625 0 0 1 3.25 0v3.6a1.625 1.625 0 1 1-3.25 0z"
                        }), (0, n.jsx)("path", {
                            d: "M5.604 10.891a.625.625 0 1 0-1.028.71 6.58 6.58 0 0 0 4.799 2.82v1.929H5.95a.625.625 0 1 0 0 1.25h8.1a.625.625 0 0 0 0-1.25h-3.425v-1.93a6.58 6.58 0 0 0 4.799-2.818.625.625 0 1 0-1.029-.71 5.33 5.33 0 0 1-4.393 2.308h-.004a5.33 5.33 0 0 1-4.394-2.309"
                        })]
                    })
                },
                o = (0, a(104509).wt)("microphone", i, "default")
        }
    }
]);