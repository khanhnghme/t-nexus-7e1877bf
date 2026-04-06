"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [59133], {
        52865: (e, t, i) => {
            i.d(t, {
                l: () => n
            });
            let n = (0, i(104509).xh)("arrowChevronSingleDown", {
                default: {
                    loader: () => i.e(95737).then(i.bind(i, 87963))
                },
                small: {
                    loader: () => i.e(95737).then(i.bind(i, 595453))
                },
                fill: {
                    loader: () => i.e(95737).then(i.bind(i, 36663))
                },
                fillSmall: {
                    loader: () => i.e(95737).then(i.bind(i, 469102))
                }
            }, ["chevron", "down", "arrow", "direction", "downward"])
        },
        91377: (e, t, i) => {
            i.d(t, {
                U: () => n
            });
            let n = (0, i(815048)._h)(new(i(815048)).O2("SidebarSwitcherMultiAccountPopup", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(35837), i.e(25867), i.e(88595), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(43444), i.e(23979), i.e(73259), i.e(87971), i.e(4779), i.e(55067), i.e(50354), i.e(14231), i.e(18406), i.e(97615), i.e(48095), i.e(10188), i.e(18802), i.e(20957), i.e(53157), i.e(58033), i.e(79563), i.e(6782), i.e(74936), i.e(5309), i.e(76060), i.e(2209)]).then(i.bind(i, 657070))), e => e.SidebarSwitcherMultiAccountPopup)
        },
        175498: (e, t, i) => {
            function n(e) {
                i(599754).Ow({
                    currentPage: "offline",
                    openedFrom: e
                })
            }
            i.d(t, {
                c: () => n
            }), i(296540), i(474848), (0, i(109939).YK)({
                togglePageAvailableOfflineSuccessTitle: {
                    id: "offlinePagesActions.togglePageAvailableOfflineSuccessTitle",
                    defaultMessage: "Page now available offline"
                },
                togglePageAvailableOfflineSuccessBody: {
                    id: "offlinePagesActions.togglePageAvailableOfflineSuccessBody",
                    defaultMessage: "This page and all inline databases within it are available offline."
                },
                toggleCollectionViewBlockAvailableOfflineTitle: {
                    id: "offlinePagesActions.toggleCollectionViewBlockAvailableOfflineSuccess",
                    defaultMessage: "Database now available offline"
                },
                toggleCollectionViewBlockAvailableOfflineBody: {
                    id: "offlinePagesActions.toggleCollectionViewBlockAvailableOfflineBody",
                    defaultMessage: "The top 50 pages in the first view are available offline. To guarantee offline access to a page, make it available manually."
                },
                togglePageAvailableOfflineFailedTitle: {
                    id: "offlinePagesActions.togglePageAvailableOfflineFailedTitle",
                    defaultMessage: "Download failed. Please try again"
                },
                togglePageAvailableOfflineFailedBody: {
                    id: "offlinePagesActions.togglePageAvailableOfflineFailedBody",
                    defaultMessage: "Tap to manage offline pages"
                }
            }), i(632079).Tj.text.secondary
        },
        334722: (e, t, i) => {
            i.d(t, {
                D: () => o
            }), i(581454);
            let n = new Map;

            function o({
                environment: e,
                skipServerFetch: t,
                surface: n,
                limit: s
            }) {
                return (0, i(97668).Yb)(async () => await a({
                    environment: e,
                    surface: n,
                    limit: s,
                    skipServerFetch: t
                }), [e, t, n, s])
            }
            async function a(e) {
                let {
                    environment: t,
                    surface: i,
                    limit: o,
                    skipServerFetch: a
                } = e, s = t.currentUser.id, l = `${i}-${o??"default"}`, r = n.get(l);
                if (r && r.userId === s) return r.response;
                if (a || !s) return;
                let d = await t.api.callMainCellApi({
                    eventName: "getWorkspaceRecommendations",
                    environment: t,
                    data: {
                        surface: i,
                        limit: o
                    }
                });
                if ("failed" === d.type) return;
                let c = {
                    results: d.data.results.map(e => ({
                        id: e.id,
                        name: e.name,
                        joinabilityStatus: e.joinabilityStatus,
                        subscriptionTier: e.subscriptionTier,
                        totalMemberCount: e.totalMemberCount,
                        guestPageIds: e.guestPageIds,
                        requiredAuthStep: e.requiredAuthStep,
                        spaceIcon: e.spaceIcon,
                        requestMembershipCustomizationRedirectUrl: e.requestMembershipCustomizationRedirectUrl
                    }))
                };
                return n.set(l, {
                    userId: s,
                    response: c
                }), c
            }
        },
        359133: (e, t, i) => {
            i.d(t, {
                z: () => d,
                A: () => f
            }), i(898992), i(672577);
            var n, o = i(296540),
                a = i(474848);
            let s = (0, i(109939).YK)({
                    offlineIcon: {
                        id: "offlineIndicator.icon",
                        defaultMessage: "No internet connection"
                    },
                    closeIcon: {
                        id: "offlineIndicator.popup.closeIcon",
                        defaultMessage: "Close"
                    }
                }),
                l = {
                    iconButton: {
                        width: 28,
                        height: 28
                    },
                    icon: {
                        width: 22,
                        height: 22,
                        fill: i(632079).Tj.text.primary
                    },
                    iconHover: {
                        background: i(632079).Tj.sidebarItemSelectedBackground
                    },
                    popup: {
                        background: i(632079).Tj.background.accentPrimary,
                        color: i(632079).Tj.text.inversePrimary,
                        width: 280,
                        padding: 12,
                        fontSize: 14
                    },
                    title: {
                        fontWeight: i(699422).Wy.medium
                    },
                    subtitle: {
                        color: i(632079).Tj.text.secondary
                    },
                    closeButton: {
                        width: 24,
                        height: 24,
                        position: "absolute",
                        insetInlineEnd: 8,
                        top: 8
                    }
                };

            function r() {
                let [e, t] = (0, o.useState)(!1), n = (0, i(109939).tz)(), r = (0, i(632079).O4)({
                    theme: "dark"
                }), d = (0, i(960253).I)(() => ({
                    closeIcon: {
                        width: i(104509).Ev.xs,
                        height: i(104509).Ev.xs,
                        fill: r.palette.translucentGray[800]
                    },
                    closeHovered: {
                        background: r.state.hover
                    },
                    closePressed: {
                        background: r.state.pressed
                    },
                    settingsButton: {
                        border: `1px solid ${r.border.primaryTranslucent}`
                    },
                    settingsHover: {
                        background: r.state.hover
                    },
                    settingsPressed: {
                        background: r.state.pressed
                    }
                }), [r]), c = (0, o.useCallback)(() => t(!e), [e]), u = (0, o.useCallback)(() => t(!1), []), p = (0, o.useMemo)(() => (0, a.jsx)(i(374533).A, {
                    icon: i(460237).C,
                    ariaLabel: n.formatMessage(s.offlineIcon),
                    onClick: c,
                    style: l.iconButton,
                    iconStyle: l.icon,
                    hoveredStyle: l.iconHover
                }), [n, c]);
                return (0, a.jsx)(i(182718).zD, {
                    originGap: 2,
                    open: e,
                    onClosed: u,
                    onDismiss: u,
                    popupType: i(423291).n.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    popupWrapStyle: l.popup,
                    content: () => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            style: l.title,
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "offlineIndicator.popup.title",
                                defaultMessage: "No internet connection"
                            })
                        }), (0, a.jsx)(i(374533).A, {
                            ariaLabel: n.formatMessage(s.closeIcon),
                            icon: i(25094).xMarkSmallIcon,
                            iconStyle: d.closeIcon,
                            style: l.closeButton,
                            hoveredStyle: d.closeHovered,
                            pressedStyle: d.closePressed,
                            onClick: u
                        }), (0, a.jsx)("div", {
                            style: l.subtitle,
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "offlineIndicator.popup.subtitle",
                                defaultMessage: "Return online for full access, or manage your offline settings."
                            })
                        }), (0, a.jsx)(i(4458).fI, {
                            justifyContent: "end",
                            paddingTop: 10,
                            children: (0, a.jsx)(i(548436).A, {
                                colorVariant: "inversePrimary",
                                style: d.settingsButton,
                                hoveredStyle: d.settingsHover,
                                pressedStyle: d.settingsPressed,
                                size: "sm",
                                onClick: () => {
                                    (0, i(175498).c)("sidebar_offline_indicator"), u()
                                },
                                children: (0, a.jsx)(i(109939).sA, {
                                    id: "offlineIndicator.popup.manageOfflinePagesButton",
                                    defaultMessage: "Manage offline pages"
                                })
                            })
                        })]
                    }),
                    trapFocus: !0,
                    children: p
                })
            }
            let d = ((n = {})[n.Regular = 0] = "Regular", n[n.DesktopMac = 1] = "DesktopMac", n[n.Mobile = 2] = "Mobile", n),
                c = {
                    [d.Regular]: i(801113).$C - 8,
                    [d.DesktopMac]: i(801113).Uu,
                    [d.Mobile]: "auto"
                },
                u = {
                    display: "flex",
                    alignItems: "center",
                    minWidth: 0,
                    height: "100%",
                    width: "100%"
                },
                p = i(546605).Store.createClass(!1, {
                    name: "SidebarSwitcherIsHoveredStore"
                }),
                g = {
                    spaceName: {
                        marginInlineStart: 0
                    },
                    unexpand: {
                        width: 24,
                        height: 24,
                        marginInlineEnd: 4
                    },
                    unexpandHover: {
                        fill: i(632079).Tj.text.primary,
                        background: i(632079).Tj.sidebarItemSelectedBackground
                    },
                    rightButtonsContainer: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        marginInlineStart: "auto",
                        marginInlineEnd: 0
                    },
                    style0: {
                        display: "flex"
                    }
                },
                f = function({
                    shouldShowUnexpandButton: e,
                    shouldShowCreatePageButton: t,
                    disabled: n,
                    format: s,
                    buttonStyle: l,
                    buttonContent: f,
                    redirectURL: h,
                    disableLoginLink: b,
                    onSpaceClick: m,
                    hideEmail: S,
                    shouldShowCreateOrJoinWorkspaceButtonInFooter: v = !1,
                    shouldShowConfigurationOptions: y = !0,
                    shouldShowHeader: x = !0,
                    width: j = i(970801).Q,
                    isHeaderHovered: I = !1,
                    useGrayHoverBackground: w = !1
                }) {
                    let M = (0, i(533992).v3)(),
                        A = (0, i(718012).V)(),
                        k = (0, i(153223).u)(),
                        T = (0, i(682985).uB)(void 0, p),
                        C = (0, i(682985).O$)(i(984858).sidebarExpandedStore),
                        P = (0, i(682985).uB)(void 0, i(719069).A),
                        O = (0, i(853284).U)(),
                        {
                            isTablet: B
                        } = (0, i(533992).Y0)(),
                        {
                            sidebarSpaceStore: _,
                            currentUserStore: E,
                            sidebarSpaceViewStore: U
                        } = (0, i(682985).K8)(() => {
                            let e = i(728372).AppStoreSidebarSpaceStore.state;
                            return {
                                sidebarSpaceStore: e,
                                currentUserStore: i(728372).AppStoreCurrentUserStore.state,
                                sidebarSpaceViewStore: i(728372).AppStoreSidebarSpaceViewStore.state
                            }
                        }, []),
                        V = M.currentUser.loggedInUserIds,
                        z = (0, i(682985).K8)(() => {
                            if (!S) return V.length > 1 ? null == E ? void 0 : E.getEmail() : void 0
                        }, [V, E, S]),
                        F = (0, i(682985).O$)(T),
                        K = (0, i(682985).K8)(() => i(563591).default.isTutorialStepActive("create_page_sidebar") && t, [t]),
                        {
                            organizationsInfo: N
                        } = (0, i(663679).q)(),
                        {
                            spaceInfo: W
                        } = (0, i(930770).x)({
                            userId: M.currentUser.id
                        }),
                        R = (0, o.useMemo)(() => ({
                            organizationsInfo: N,
                            spaceInfo: W
                        }), [N, W]),
                        H = (0, o.useMemo)(() => (0, i(64273).nc)(), []),
                        D = (0, i(682985).K8)(() => H.state.modalOpen, [H]),
                        $ = (0, i(556583).y)(),
                        G = (0, i(682985).O$)(i(205885).e),
                        L = (0, i(960253).I)(() => ({
                            popup: { ...i(986939).A.isMobile ? {} : {
                                    width: j,
                                    overflow: "hidden"
                                }
                            },
                            button: { ...u,
                                height: c[s],
                                marginInlineStart: 4,
                                marginInlineEnd: 4,
                                marginTop: 4 * !i(986939).A.isMobile,
                                width: "calc(100% - 8px)",
                                borderRadius: 4,
                                marginBottom: z ? 8 * !i(986939).A.isMobile : 0,
                                padding: 0,
                                ...l
                            },
                            hoveredStyle: {
                                background: w ? i(632079).Tj.gray.background.secondaryTranslucent : i(632079).Tj.sidebarItemSelectedBackground
                            },
                            unexpand: { ...g.unexpand,
                                borderRadius: (null == l ? void 0 : l.borderRadius) === 9999 ? 9999 : 6
                            },
                            popupWrapShifted: {
                                transform: "translateX(-4px)"
                            }
                        }), [z, l, s, j, w]),
                        Y = async () => (0, i(323836).M)({
                            environment: M,
                            from: "home_checklist"
                        }),
                        q = (0, o.useCallback)(() => {
                            let e = (0, i(109939).YK)({
                                invitingMembers: {
                                    id: "sidebarSwitcherMultiAccount.inviteMember.loadingMessage",
                                    defaultMessage: "Updating…"
                                }
                            });
                            i(262058).m({
                                message: e.invitingMembers
                            })
                        }, []),
                        X = (0, o.useCallback)((e, t) => {
                            i(262058).V();
                            let n = e ? (0, a.jsx)(i(109939).sA, {
                                id: "sidebarSwitcherMultiAccount.inviteMember.successToastMessage",
                                defaultMessage: "Successfully sent"
                            }) : (0, a.jsx)(i(109939).sA, {
                                id: "sidebarSwitcherMultiAccount.inviteMember.failureToastMessage",
                                defaultMessage: "Failed to send invites"
                            });
                            i(436555).D6({
                                label: n
                            })
                        }, []),
                        Q = (0, i(917441).Rx)(),
                        J = (0, i(682985).K8)(() => {
                            var e;
                            return _ || (null == (e = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.getSpaceStore()) || Q && new(i(695906)).SpaceStore(M, {
                                table: i(832375).NXh,
                                id: Q.spaceId
                            })
                        }, [_, Q, M]),
                        Z = (0, i(682985).O$)(i(728372).AppStoreCurrentUserSettingsStore),
                        ee = (0, i(682985).K8)(() => U || (M.currentUser.id && J ? i(492047).A.getSpaceViewStores(M, M.currentUser.id).find(e => e.getSpaceId() === J.id) : void 0), [M, U, J]),
                        et = !!n || K,
                        ei = (0, i(83208).X)("should_request_joinable_spaces_for_workspace_discovery_surface"),
                        en = (0, i(83208).X)("use_workspace_recommendation_api"),
                        eo = (0, i(682985).K8)(() => !!(!(0, i(204368).c)({
                            currentUserSettingsStore: Z
                        }) || J && (0, i(455221).e)(M, J.id) || !ei || (0, i(916804).I)(J)), [Z, ei, J, M]),
                        [{
                            value: ea
                        }] = (0, i(417066).P)({
                            environment: M,
                            skipServerFetch: eo || en,
                            includeTopSpaces: !0,
                            limit: 3
                        }),
                        [{
                            value: es
                        }] = (0, i(334722).D)({
                            environment: M,
                            skipServerFetch: eo || !en,
                            surface: "switcher",
                            limit: 3
                        }),
                        el = (0, o.useMemo)(() => i(986939).A.isMobile ? 0 : M.device.isElectron && C && O ? -8 : 4, [C, M.device.isElectron, O]),
                        er = !i(986939).A.isMobile;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i(656252).A, {
                            popupType: (() => {
                                switch (!0) {
                                    case B:
                                        return i(656252).z.BottomSheet;
                                    case i(986939).A.isMobile:
                                        return i(656252).z.SlideUp;
                                    default:
                                        return i(656252).z.Popup
                                }
                            })(),
                            bottomSheetInitialState: B ? "half" : void 0,
                            buttonPopupStore: i(2907).V,
                            originGap: el,
                            popupWrapStyle: er ? L.popupWrapShifted : void 0,
                            disableMutationObserver: !0,
                            forceInitialInbound: !0,
                            style: L.popup,
                            content: e => (0, a.jsx)(i(91377).U, {
                                permissionsInviteStore: H,
                                parent: e,
                                redirectURL: h,
                                disableLoginLink: b,
                                onSpaceClick: m,
                                loginPermissionsStore: P,
                                organizationEntryPointProps: R,
                                shouldShowCreateOrJoinWorkspaceButtonInFooter: v,
                                shouldShowConfigurationOptions: y,
                                shouldShowHeader: x,
                                width: j,
                                joinableSpaces: eo ? void 0 : en ? null == es ? void 0 : es.results : null == ea ? void 0 : ea.topJoinableSpaces,
                                joinableSpacesCount: en ? (null == es ? void 0 : es.results.length) ? ? 0 : null != ea && ea.hasJoinableSpaces ? ea.joinableSpacesCount : 0
                            }),
                            children: () => (0, a.jsx)(i(64960).Ay, {
                                style: L.button,
                                onClick: () => {
                                    var e;
                                    return e = M, void(i(2907).V.setState({ ...i(2907).V.state,
                                        open: !0
                                    }), (0, i(615079).PL)(e))
                                },
                                disabled: et,
                                className: i(828432).eGX,
                                hovered: F,
                                hoveredStyle: L.hoveredStyle,
                                ignoreLocalHoverState: !0,
                                onMouseEnter: () => T.setState(!0),
                                onMouseLeave: () => T.setState(!1),
                                children: f || (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(i(741570).A, {
                                        isMobile: s === d.Mobile,
                                        spaceStore: J,
                                        spaceViewStore: ee,
                                        activeUserEmailAddress: z,
                                        showExpand: !et && (B || F),
                                        type: "store",
                                        style: g.spaceName
                                    }), (0, a.jsx)("div", {
                                        style: g.rightButtonsContainer,
                                        children: (0, a.jsxs)(i(4458).fI, {
                                            alignItems: "center",
                                            marginInlineEnd: 2,
                                            gap: 2,
                                            inline: !0,
                                            children: [e ? (0, a.jsx)(i(405907).I, {
                                                style: L.unexpand,
                                                hoveredStyle: g.unexpandHover
                                            }) : void 0, $ && !G ? (0, a.jsx)(r, {}) : null, B || !t || O ? void 0 : (0, a.jsx)(i(24884).n, {
                                                step: "create_page_sidebar",
                                                isFullWidth: !1,
                                                onNextButtonClick: Y,
                                                wrapperStyle: g.style0,
                                                inAppCalloutStore: A,
                                                teamIds: k,
                                                children: (0, a.jsx)(i(784665).K, {
                                                    from: "sidebar_new_page_button"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), D && J ? (0, a.jsx)(i(239697).H, {
                            targetStore: J,
                            spaceStore: J,
                            permissionsInviteStore: H,
                            origin: (0, a.jsx)(a.Fragment, {}),
                            membersOnly: !0,
                            shouldGrow: !1,
                            disabled: !1,
                            isSubscribed: !1,
                            upgradeButtonName: "space_permission_settings",
                            onInviteClick: q,
                            onInviteComplete: X,
                            analyticsFrom: "space_switcher_invite_button"
                        }) : void 0, J ? (0, a.jsx)(i(179279).cx, {
                            spaceStore: J,
                            origin: (0, a.jsx)(a.Fragment, {}),
                            analyticsFrom: "space_switcher_add_members"
                        }) : void 0]
                    })
                }
        },
        405907: (e, t, i) => {
            i.d(t, {
                I: () => a,
                i: () => l
            });
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(533992).Y0)(),
                    a = (0, i(109939).tz)(),
                    s = (0, i(682985).O$)(i(984858).sidebarMouseEnteredStore),
                    r = (0, i(682985).O$)(i(584257).b),
                    d = (0, i(682985).O$)((0, i(348295).$)(t)),
                    c = a.formatMessage({
                        defaultMessage: "Close sidebar",
                        id: "sidebarUnexpandButton.closeSidebar.tooltip"
                    }),
                    u = (!n.isElectronMac || !d) && !r && s;
                return (0, o.jsx)(l, {
                    isVisible: u,
                    icon: i(437959).S,
                    caption: c,
                    onClick: () => {
                        (0, i(568071).O)(t)
                    },
                    keyboardShortcutName: "toggleSidebar",
                    style: e.style,
                    hoveredStyle: e.hoveredStyle
                })
            }
            let s = {
                keyboardShortcut: {
                    color: i(632079).Tj.text.inverseSecondary
                },
                button: {
                    fill: i(632079).Tj.icon.secondary,
                    width: 24,
                    height: 24,
                    borderRadius: 9999
                }
            };

            function l(e) {
                let t = (0, i(533992).Y0)(),
                    [a, l] = (0, i(768397).s)(),
                    [r, d] = (0, n.useState)(!e.isVisible),
                    c = e.isVisible || l;
                (0, n.useEffect)(() => {
                    c && d(!1)
                }, [c]);
                let u = (0, n.useCallback)(() => {
                        c || d(!0)
                    }, [c]),
                    p = (0, n.useMemo)(() => ({
                        position: "relative",
                        marginInlineStart: 10,
                        ...i(986939).A.isMobile && {
                            height: "100%"
                        },
                        ...s.button,
                        ...e.style,
                        ...r && i(69916).Qg
                    }), [e.style, r]);
                return (0, o.jsx)(i(51831).m, {
                    content: () => (0, o.jsxs)("div", {
                        children: [(0, o.jsx)("div", {
                            children: e.caption
                        }), e.keyboardShortcutName ? (0, o.jsx)(i(693592).A, {
                            style: s.keyboardShortcut,
                            name: e.keyboardShortcutName
                        }) : void 0]
                    }),
                    originGap: 6,
                    placement: t.isElectron ? "right" : "bottom",
                    children: t => (0, o.jsx)(i(654979).A, {
                        tag: i(374533).A,
                        ref: a,
                        animate: {
                            opacity: +!!c
                        },
                        onAnimationEnd: u,
                        ariaLabel: e.caption,
                        size: "sm",
                        shape: "default",
                        icon: {
                            icon: e.icon,
                            size: "default",
                            style: {
                                fill: "inherit"
                            }
                        },
                        style: p,
                        hoveredStyle: e.hoveredStyle,
                        onClick: e.onClick,
                        className: i(828432).P7S,
                        ...t
                    })
                })
            }
        },
        568071: (e, t, i) => {
            i.d(t, {
                O: () => n
            });

            function n(e) {
                (0, i(16822).h)({
                    environment: e,
                    isExpanded: !1,
                    from: "sidebar_unexpand_button",
                    saveDetailsSidebarPreference: !0
                }), (i(550830).default.isVisible() || (0, i(875439).shouldShowLoggedOutPublicSharingSidebar)(e)) && (0, i(713167).V)()
            }
        },
        719069: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = () => i(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        contacts: !1
                    }
                }
            }
            let a = o
        },
        741570: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let {
                    showIcon: t
                } = e, n = (0, i(960253).I)(() => {
                    let e = Math.ceil(60),
                        n = Math.floor(Math.random() * (Math.floor(85) - e + 1)) + e,
                        o = `${n}%`;
                    return {
                        placeholderPageStyle: {
                            height: 28,
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            padding: t ? "0 15px" : "0 0px"
                        },
                        placeholderTextWrapStyle: {
                            flexGrow: 1,
                            marginInlineStart: 10 * !!t,
                            height: 28,
                            display: "flex",
                            alignItems: "center"
                        },
                        placeholderTextStyle: {
                            height: 4,
                            background: i(632079).Tj.buttonHoveredBackground,
                            width: o
                        }
                    }
                }, [t]);
                return (0, o.jsxs)("div", {
                    style: n.placeholderPageStyle,
                    children: [t ? (0, i(646220).notionTemplateTintableIcon)({
                        width: 16,
                        height: 16,
                        fill: i(632079).Tj.buttonHoveredBackground
                    }) : void 0, (0, o.jsx)("div", {
                        style: n.placeholderTextWrapStyle,
                        children: (0, o.jsx)("div", {
                            style: n.placeholderTextStyle
                        })
                    })]
                })
            }
            let s = {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                l = {
                    titleText: {
                        color: i(632079).Tj.text.primary,
                        fontWeight: i(699422).Wy.medium,
                        ...s,
                        lineHeight: "20px",
                        unicodeBidi: "plaintext"
                    },
                    emailText: {
                        color: i(632079).Tj.text.secondary,
                        fontSize: 11,
                        lineHeight: "16px",
                        fontWeight: i(699422).Wy.regular,
                        ...s
                    }
                },
                r = function(e) {
                    let t = (0, i(533992).v3)(),
                        {
                            device: a
                        } = t,
                        r = (0, i(917441).Rx)(),
                        d = "name" === e.type ? e.spaceName : void 0,
                        p = "store" === e.type ? e.spaceStore : void 0,
                        f = (0, i(682985).K8)(() => "store" === e.type && p && p.isDefined() ? (0, i(742197).G)(t, p) : "store" === e.type && (null == p ? void 0 : p.id) === (null == r ? void 0 : r.spaceId) ? null == r ? void 0 : r.spaceName : d, [t, e.type, d, p, r]),
                        h = (0, i(682985).K8)(() => "store" === e.type && (0, i(916804).I)(p) && "on" === i(218744).default.getEligibleGroup({
                            experimentId: "guest_badge_navbar",
                            defaultGroup: "control"
                        }), [e.type, p]);
                    (0, n.useEffect)(() => {
                        "store" === e.type && (null == p || p.getValue())
                    }, [p, e.type]);
                    let b = function(e) {
                        let {
                            style: t,
                            activeUserEmailAddress: n,
                            isAndroid: o
                        } = e;
                        return (0, i(960253).I)(() => ({
                            container: {
                                overflow: "hidden",
                                paddingInlineStart: 8,
                                paddingInlineEnd: 8,
                                ...i(986939).A.isMobile && {
                                    fontSize: 14,
                                    padding: 0,
                                    marginInlineEnd: 12
                                },
                                ...t
                            },
                            titleContainer: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: n ? "space-between" : "start"
                            },
                            titleContent: {
                                display: "flex",
                                flexDirection: "column",
                                marginInlineEnd: 6,
                                marginTop: 3 * !!o,
                                ...s
                            }
                        }), [t, o, n])
                    }({
                        style: e.style,
                        activeUserEmailAddress: e.activeUserEmailAddress,
                        isAndroid: a.isAndroid
                    });
                    return (0, o.jsxs)(i(380559).u, {
                        style: b.container,
                        left: f ? (0, o.jsx)(g, {
                            title: f,
                            icon: "store" === e.type ? void 0 : e.spaceIcon,
                            isMobile: e.isMobile,
                            spaceStore: "store" === e.type ? e.spaceStore : void 0
                        }) : (0, o.jsx)(c, {}),
                        disableMobileBorder: !0,
                        children: [f ? void 0 : (0, o.jsx)(u, {}), f ? (0, o.jsxs)("div", {
                            style: b.titleContainer,
                            className: "notranslate",
                            children: [(0, o.jsxs)("div", {
                                style: b.titleContent,
                                children: [(0, o.jsxs)(i(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, o.jsx)("div", {
                                        style: l.titleText,
                                        children: f
                                    }), h ? (0, o.jsx)(i(577280).w, {
                                        labelType: "guest"
                                    }) : void 0]
                                }), (0, o.jsx)("div", {
                                    style: l.emailText,
                                    children: e.activeUserEmailAddress
                                })]
                            }), e.showExpand ? (0, o.jsx)(i(708966).Q, {
                                iconGroup: i(52865).l,
                                style: {
                                    width: 14,
                                    height: 14
                                },
                                variantName: "small",
                                colorVariant: "secondary"
                            }) : void 0]
                        }) : void 0]
                    })
                },
                d = {
                    opacity: .25
                };

            function c() {
                return (0, o.jsx)("div", {
                    style: d,
                    children: (0, o.jsx)(i(402363).A, {
                        size: 20,
                        title: void 0
                    })
                })
            }

            function u() {
                return (0, o.jsx)(a, {
                    showIcon: !1
                })
            }
            let p = {
                style0: {
                    position: "relative"
                },
                style1: {
                    marginTop: 1,
                    color: i(632079).Tj.text.primary,
                    fontWeight: i(699422).Wy.medium
                }
            };

            function g({
                title: e,
                icon: t,
                isMobile: n,
                spaceStore: a
            }) {
                let s = (0, i(533992).v3)(),
                    l = (0, i(682985).K8)(() => a ? a.getIcon() : t ? {
                        icon: t,
                        pointer: {
                            table: "space",
                            id: "undefined"
                        }
                    } : void 0, [a, t]),
                    r = (0, i(682985).K8)(() => a ? (0, i(742197).G)(s, a) : e, [a, s, e]),
                    d = (0, i(723240).r)(),
                    c = (0, i(345776).T)(),
                    u = (0, i(682985).K8)(() => {
                        if (i(995735).B.hasResults()) return i(995735).B.getUnreadMentionsCountForOtherSpaces()
                    }, []),
                    f = (0, i(879101).n)({
                        key: ["inbox", "unreadCount", "otherSpaces", d, c],
                        computedState: u
                    });
                return (0, o.jsxs)("div", {
                    style: p.style0,
                    children: [(0, o.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: l,
                        iconRecordCategory: "workspace",
                        isEmptyPage: !1,
                        title: r,
                        size: n ? 24 : 22,
                        style: p.style1
                    }), void 0 !== f && f > 0 ? (0, o.jsx)(h, {}) : void 0]
                })
            }
            let f = {
                unreadBadge: {
                    backgroundColor: i(632079).Tj.red.icon.accentPrimary,
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: -3,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    border: `1px solid ${i(632079).Tj.background.secondary}`
                }
            };

            function h() {
                return (0, o.jsx)("div", {
                    style: f.unreadBadge
                })
            }
        },
        930770: (e, t, i) => {
            i.d(t, {
                x: () => n
            }), i(898992), i(354520), i(581454);

            function n(e) {
                let {
                    userId: t
                } = e, n = (0, i(533992).v3)(), o = (0, i(682985).K8)(() => t ? i(492047).A.getSpaceViewStores(n, t) : [], [n, t]), a = (0, i(682985).K8)(() => o.map(e => e.getSpaceStore()).filter(i(722371).O9), [o]), s = (0, i(682985).K8)(() => t ? a.map(e => {
                    let n = (0, i(993077).dp)(e, t).isWorkspaceOwner(),
                        o = "enterprise" === e.getSubscriptionTier();
                    if (n && o) return e
                }).filter(i(722371).O9) : [], [a, t]), [{
                    value: l,
                    status: r
                }] = (0, i(97668).Yb)(async () => (await (0, i(975162).lX)(s, 10, e => {
                    let t = e.id;
                    return n.api.callApi({
                        eventName: "getOrganizationOnboardingInfo",
                        environment: n,
                        data: {
                            spaceId: t
                        }
                    }).then(o => {
                        if ("success" === o.type) return "ineligible" === o.data.result.onboardingStatus || "completed" === o.data.result.onboardingStatus ? void 0 : {
                            spaceId: t,
                            spaceName: (0, i(742197).G)(n, e)
                        }
                    })
                })).filter(i(722371).O9), [n, s]);
                return {
                    spaceInfo: l ? ? [],
                    isLoading: "resolved" !== r
                }
            }
        },
        970801: (e, t, i) => {
            i.d(t, {
                Q: () => n
            });
            let n = 300
        }
    }
]);