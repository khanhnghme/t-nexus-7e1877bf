"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [75559], {
        9586: (e, t, a) => {
            a.d(t, {
                r: () => o
            });
            let o = a(546605).Store.createValue({
                showConvertTooltip: !1,
                forceShow: !1
            }, {
                name: "WikiPromoStore"
            })
        },
        35838: (e, t, a) => {
            async function o(e) {
                var t;
                let {
                    environment: o,
                    sudoModeStore: i,
                    sidebarSpaceStore: r,
                    targetPointer: n,
                    isAlreadyLoaded: s,
                    clearLoadedStore: l,
                    buildStore: d,
                    buildRequest: c
                } = e;
                if (a(986939).A.isMobile || s || i.state.loading || i.state.error) return;
                await a(218744).default.waitUntilStatsigReadyAsync();
                let u = r.isReady() && r.canAdmin(),
                    p = await (t = r.id, (0, a(655293).S)(o, {
                        name: "sudo_mode",
                        spaceId: t,
                        userId: o.currentUser.id
                    }));
                if (!n.id || !u || !p) return;
                i.setState({ ...i.state,
                    loading: !0
                }), l();
                let h = c(n),
                    b = await o.api.callApi({
                        eventName: "getPrivateRecordInfo",
                        environment: o,
                        data: h
                    });
                if ("failed" === b.type) return void i.setState({ ...i.state,
                    loading: !1,
                    error: b.error
                });
                let g = d({
                    environment: o,
                    recordId: n.id,
                    privateRecordCacheName: a(574698).Rb,
                    ancestorData: b.data,
                    spaceId: r.id
                });
                return i.setState({ ...i.state,
                    loading: !1,
                    error: void 0
                }), g
            }
            async function i(e) {
                let {
                    environment: t,
                    sudoModeStore: i,
                    pageBlockId: r,
                    sidebarSpaceStore: s
                } = e, l = i.state.privatePageStore && i.state.privatePageStore.id === r;
                if (!r || !s) return;
                let d = await o({
                    environment: t,
                    sudoModeStore: i,
                    sidebarSpaceStore: s,
                    targetPointer: {
                        id: r,
                        table: a(832375).evP,
                        spaceId: s.id
                    },
                    isAlreadyLoaded: !!l,
                    clearLoadedStore: () => i.setState({ ...i.state,
                        privatePageStore: void 0
                    }),
                    buildStore: e => n({ ...e,
                        recordTable: a(832375).evP
                    }),
                    buildRequest: e => ({
                        recordPointer: e
                    })
                });
                d && i.setState({ ...i.state,
                    privatePageStore: d
                })
            }
            async function r(e) {
                let {
                    environment: t,
                    sudoModeStore: i,
                    workflowId: r,
                    sidebarSpaceStore: s
                } = e, l = i.state.privateWorkflowStore && i.state.privateWorkflowStore.id === r;
                if (!r || !s) return;
                let d = await o({
                    environment: t,
                    sudoModeStore: i,
                    sidebarSpaceStore: s,
                    targetPointer: {
                        id: r,
                        table: a(832375).C0E,
                        spaceId: s.id
                    },
                    isAlreadyLoaded: !!l,
                    clearLoadedStore: () => i.setState({ ...i.state,
                        privateWorkflowStore: void 0
                    }),
                    buildStore: e => n({ ...e,
                        recordTable: a(832375).C0E
                    }),
                    buildRequest: e => ({
                        recordPointer: e
                    })
                });
                d && i.setState({ ...i.state,
                    privateWorkflowStore: d
                })
            }

            function n(e) {
                let t, {
                        environment: o,
                        recordId: i,
                        recordTable: r,
                        privateRecordCacheName: n,
                        ancestorData: s,
                        spaceId: l
                    } = e,
                    d = new(a(870941)).A({
                        name: n
                    });
                for (let e of s) switch (e.table) {
                    case "block":
                    case "collection":
                    case "workflow":
                    case "team":
                        d.setRecord({
                            pointer: {
                                spaceId: l,
                                table: e.table,
                                id: e.value.id
                            },
                            userId: o.currentUser.id
                        }, {
                            role: "editor",
                            value: e.value
                        })
                }
                return r === a(832375).evP ? t = new(a(970831)).B(o, {
                    id: i,
                    table: a(832375).evP
                }, {
                    inMemoryRecordCache: d
                }) : r === a(832375).VlP ? t = new(a(356912)).m(o, {
                    id: i,
                    table: a(832375).VlP
                }, {
                    inMemoryRecordCache: d
                }) : r === a(832375).C0E ? t = new(a(360851)).N(o, {
                    id: i,
                    table: a(832375).C0E,
                    spaceId: l
                }, {
                    inMemoryRecordCache: d
                }) : (0, a(722371).HB)(r), t.inMemoryRecordCache.addCacheFallback(o.defaultRecordCache.inMemoryRecordCache), t
            }
            a.d(t, {
                BX: () => i,
                YL: () => r,
                lE: () => n
            })
        },
        40340: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var o = () => a(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        permissionsInviteStore: (0, a(64273)._P)(),
                        contextualInviteStore: new(a(758972)).Ay
                    }
                }
                get stageFromStoreState() {
                    return this.state.contextualInviteStore.state.inviteStage
                }
            }
            let r = i
        },
        194443: (e, t, a) => {
            a.r(t), a.d(t, {
                TopbarShareButton: () => p,
                messages: () => n
            });
            var o = a(296540),
                i = () => a(642157),
                r = a(474848);
            let n = (0, a(109939).YK)({
                    share: {
                        defaultMessage: "Share",
                        id: "topbar.share"
                    },
                    private: {
                        defaultMessage: "Private",
                        id: "topbar.shareButton.private"
                    },
                    shared: {
                        defaultMessage: "Shared",
                        id: "topbar.shareButton.shared"
                    },
                    workspace: {
                        defaultMessage: "Workspace",
                        id: "topbar.shareButton.workspace"
                    },
                    publicLink: {
                        defaultMessage: "Public link",
                        id: "topbar.shareButton.publicLink"
                    },
                    published: {
                        defaultMessage: "Published",
                        id: "topbar.shareButton.published"
                    },
                    tooltipPrivate: {
                        defaultMessage: "Only you can access",
                        id: "topbar.shareButton.tooltipPrivate"
                    },
                    tooltipShared: {
                        defaultMessage: "Shared with specific people",
                        id: "topbar.shareButton.tooltipShared"
                    },
                    tooltipWorkspace: {
                        defaultMessage: "Everyone in the workspace can access",
                        id: "topbar.shareButton.tooltipWorkspace"
                    },
                    tooltipPublicLink: {
                        defaultMessage: "Anyone with the link can access",
                        id: "topbar.shareButton.tooltipPublicLink"
                    },
                    tooltipPublished: {
                        defaultMessage: "Published to the web",
                        id: "topbar.shareButton.tooltipPublished"
                    }
                }),
                s = {
                    shortcut: {
                        color: a(632079).Tj.text.inverseSecondary
                    }
                };

            function l({
                buttonPopupEvents: e,
                handleClick: t,
                shouldShowGlobeIcon: n,
                disabled: d,
                store: u,
                sharePillUpdateExperiment: p,
                buttonPopupStore: h
            }) {
                var b;
                let g = (0, a(533992).v3)(),
                    f = !(0, a(682985).O$)(a(205885).e),
                    m = (0, a(682985).K8)(() => (0, a(470641).g)(), []),
                    v = (0, a(682985).K8)(() => {
                        var e;
                        if (!u) return "private";
                        let t = null == (e = g.currentUser) ? void 0 : e.id,
                            o = (0, a(862085).i0)(u),
                            r = !1,
                            n = !1,
                            s = !1,
                            l = 0;
                        for (let {
                                permissionItem: e
                            } of o)(0, i().FP)(e) && ((0, i().W8)(e) && (0, i().Tt)(e.role) ? r = !0 : (0, i().Tt)(e.role) && (n = !0)), (0, i().Lg)(e) && (0, i().Tt)(e.role) && (s = !0), e.role && (0, i().Tt)(e.role) && ((0, i().Ds)(e) ? l++ : (0, i().B2)(e) && e.user_id !== t && l++);
                        return r ? "published" : n ? "publicLink" : s ? "workspace" : l > 0 ? "shared" : "private"
                    }, [u, null == (b = g.currentUser) ? void 0 : b.id]),
                    S = d || f,
                    w = "pill_share_text" === p || "pill_perm_text" === p,
                    k = (0, o.useCallback)(() => {
                        switch (v) {
                            case "published":
                                return (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Published to the web",
                                    id: "topbar.shareButton.tooltipPublished"
                                });
                            case "publicLink":
                                return (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Anyone with the link can access",
                                    id: "topbar.shareButton.tooltipPublicLink"
                                });
                            case "workspace":
                                return (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Everyone in the workspace can access",
                                    id: "topbar.shareButton.tooltipWorkspace"
                                });
                            case "shared":
                                return (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Shared with specific people",
                                    id: "topbar.shareButton.tooltipShared"
                                });
                            default:
                                return (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Only you can access",
                                    id: "topbar.shareButton.tooltipPrivate"
                                })
                        }
                    }, [v]),
                    x = (0, o.useCallback)(() => {
                        let e = f ? (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Unavailable while offline",
                            id: "topbar.shareButton.offlineTooltip"
                        }) : (0, r.jsx)(a(109939).sA, {
                            defaultMessage: "Create or join a workspace to share",
                            id: "topbar.shareButton.createOrJoinWorkspaceTooltip"
                        });
                        return S ? e : w ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                children: k()
                            }), (0, r.jsx)(a(693592).A, {
                                style: s.shortcut,
                                name: "openShareMenu"
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                children: m ? (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Share",
                                    id: "topbar.shareButton.tooltipAWTL"
                                }) : (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Share or publish to the web",
                                    id: "topbar.shareButton.tooltip"
                                })
                            }), (0, r.jsx)(a(693592).A, {
                                style: s.shortcut,
                                name: "openShareMenu"
                            })]
                        })
                    }, [m, S, f, w, k]);
                return (0, r.jsx)(a(51831).m, {
                    disableTooltip: a(986939).A.isMobile,
                    content: x,
                    placement: "bottom",
                    delayThreshold: 400,
                    children: o => (0, r.jsx)(c, {
                        events: (0, a(63390).A)(o, e),
                        handleClick: t,
                        disabled: S,
                        shouldShowGlobeIcon: n,
                        permissionLevel: v,
                        sharePillUpdateExperiment: p,
                        buttonPopupStore: h
                    })
                })
            }
            let d = {
                sharedButtonOutlineVariant: {
                    fontWeight: a(699422).Wy.regular
                }
            };

            function c({
                events: e,
                handleClick: t,
                disabled: i,
                shouldShowGlobeIcon: s,
                permissionLevel: l,
                sharePillUpdateExperiment: u,
                buttonPopupStore: p
            }) {
                let h = (0, a(109939).tz)(),
                    b = (0, a(682985).K8)(() => (null == p ? void 0 : p.state.open) ? ? !1, [p]),
                    g = (0, a(960253).I)(() => {
                        let e = (0, a(268736).aD)();
                        return {
                            mobileIconStyle: e.iconStyle,
                            shareButton: { ...a(986939).A.isMobile ? e.iconContainer : {
                                    marginInlineEnd: 6,
                                    marginInlineStart: 6
                                }
                            },
                            caretIcon: {
                                transform: b ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 150ms ease"
                            }
                        }
                    }, [b]),
                    f = (0, o.useCallback)(() => {
                        switch (l) {
                            case "published":
                                return {
                                    label: h.formatMessage(n.published),
                                    icon: a(900333).U
                                };
                            case "publicLink":
                                return {
                                    label: h.formatMessage(n.publicLink),
                                    icon: a(515388).globeIcon
                                };
                            case "workspace":
                                return {
                                    label: h.formatMessage(n.shared),
                                    icon: a(767816).teamspaceIcon
                                };
                            case "shared":
                                return {
                                    label: h.formatMessage(n.shared),
                                    icon: a(825012).peopleIcon
                                };
                            case "private":
                                return {
                                    label: h.formatMessage(n.private),
                                    icon: a(157160).lockIcon
                                };
                            default:
                                return {
                                    label: h.formatMessage(n.share),
                                    icon: a(269298).lockFillIcon
                                }
                        }
                    }, [h, l]);
                if (a(986939).A.isMobile) return (0, r.jsx)(a(988022).p, {
                    id: void 0,
                    className: a(828432).voG,
                    ...e,
                    style: g.shareButton,
                    "aria-label": h.formatMessage(n.share),
                    disabled: i,
                    disabledFeedback: i,
                    onClick: t,
                    children: (0, r.jsx)(a(16275).I, {
                        icon: a(687911).Y,
                        style: g.mobileIconStyle
                    })
                });
                if ("pill_share_text" === u || "pill_perm_text" === u) {
                    let {
                        label: o,
                        icon: l
                    } = f(), c = "pill_perm_text" === u ? o : h.formatMessage(n.share);
                    return (0, r.jsx)(a(548436).A, {
                        id: void 0,
                        className: a(828432).voG,
                        ...e,
                        style: { ...g.shareButton,
                            ...d.sharedButtonOutlineVariant
                        },
                        ariaLabel: h.formatMessage(n.share),
                        disabled: i,
                        onClick: t,
                        iconLeading: {
                            icon: s ? a(515388).globeIcon : l,
                            size: "sm"
                        },
                        iconTrailing: {
                            icon: a(595453).arrowChevronSingleDownSmallIcon,
                            style: g.caretIcon,
                            colorVariant: "secondary",
                            size: "xxs"
                        },
                        size: "md",
                        children: c
                    })
                }
                return (0, r.jsx)(a(988022).p, {
                    id: void 0,
                    className: a(828432).voG,
                    ...e,
                    style: g.shareButton,
                    "aria-label": h.formatMessage(n.share),
                    disabled: i,
                    disabledFeedback: i,
                    onClick: t,
                    iconLeading: s ? {
                        icon: a(515388).globeIcon,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    } : void 0,
                    children: (0, r.jsx)(a(109939).sA, {
                        defaultMessage: "Share",
                        id: "topbar.shareButton.title"
                    })
                })
            }

            function u({
                buttonPopupStore: e,
                universalMemberInviteStore: t,
                inviteTargetsStore: a
            }) {
                e.reset(), t.reset(), a.reset()
            }
            let p = o.memo(function({
                store: e,
                buttonPopupStore: t
            }) {
                let n = (0, a(533992).v3)(),
                    s = (0, a(682985).K8)(() => n.device.isTablet, [n]),
                    d = (0, a(682985).uB)(void 0, a(40340).A),
                    c = (0, a(682985).uB)(void 0, a(888173).Ay),
                    p = (0, a(682985).uB)(void 0, a(874003).A),
                    h = (0, a(682985).K8)(() => {
                        var t, a;
                        return t = e, (a = p).shouldUserHaveAccessToPrivatePageBlock() && a.state.changePermissionsEnabled && a.state.privatePageStore && a.state.privatePageStore.id === t.id ? a.state.privatePageStore : t
                    }, [e, p]),
                    b = (0, a(682985).K8)(() => e.canAdmin(), [e]),
                    g = (0, a(682985).K8)(() => !a(986939).A.isMobile && function(e, t) {
                        let {
                            permissionsInviteStore: a
                        } = e.state;
                        return a.state.inviteTargets.length > 0 || t.state.inviteTargets.length > 0
                    }(d, c), [c, d]),
                    f = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = p.state.privatePageStore) ? void 0 : e.id
                    }, [p]),
                    m = (0, a(682985).K8)(() => (0, a(974410).f)(e), [e]);
                (0, o.useEffect)(() => {
                    ! function({
                        environment: e,
                        store: t,
                        sudoModeStore: o,
                        canAdmin: i,
                        currentSpaceStore: r
                    }) {
                        var n;
                        null != (n = o.state.privatePageStore) && n.id && o.state.privatePageStore.id !== t.id && o.reset(), i || a(35838).BX({
                            environment: e,
                            sudoModeStore: o,
                            pageBlockId: t.id,
                            sidebarSpaceStore: r
                        })
                    }({
                        environment: n,
                        sudoModeStore: p,
                        store: e,
                        canAdmin: b,
                        currentSpaceStore: m
                    })
                }, [b, n, e, p, f, m]), (0, o.useEffect)(() => {
                    a(880853).Ay.setState({ ...a(880853).Ay.state,
                        isInitialized: !0
                    })
                });
                let v = (0, o.useCallback)(() => {
                        t.reset()
                    }, [t]),
                    S = (0, o.useCallback)(() => {
                        u({
                            buttonPopupStore: t,
                            universalMemberInviteStore: d,
                            inviteTargetsStore: c
                        }), (0, a(471e3).I)({
                            environment: n
                        }), a(729619).Tk({
                            environment: n,
                            store: e
                        }), (0, a(470641).g)() || a(371151).x(n)
                    }, [t, d, c, n, e]),
                    w = (0, a(682985).K8)(() => {
                        let t = e.getPublicPermission();
                        if (!t || !(0, i().W8)(t)) return !1;
                        let a = e.getSpaceStore();
                        return !!a && a.getSettings().hide_sites_banner
                    }, [e]),
                    k = (0, a(604306).r)("share_pill_update"),
                    x = (0, o.useCallback)(a => (0, r.jsx)(l, {
                        buttonPopupEvents: a,
                        handleClick: S,
                        shouldShowGlobeIcon: w,
                        store: e,
                        sharePillUpdateExperiment: k,
                        buttonPopupStore: t
                    }), [S, w, e, k, t]),
                    P = (0, o.useCallback)(async () => {
                        if (c.state.inviteTargets.length > 0) {
                            await a(729619).T({
                                environment: n,
                                inviteTargetsStore: c
                            }) && (a(729619).XP({
                                environment: n,
                                store: e
                            }), u({
                                buttonPopupStore: t,
                                universalMemberInviteStore: d,
                                inviteTargetsStore: c
                            }));
                            return
                        }
                        let {
                            permissionsInviteStore: o
                        } = d.state;
                        "invitee" === o.state.inputFocus && o.setState({ ...o.state,
                            inputFocus: "none"
                        }), await (0, a(494341).iQ)({
                            environment: n,
                            permissionsInviteStoreState: o.state,
                            from: "share_menu",
                            spaceStore: m
                        }) || (a(729619).XP({
                            environment: n,
                            store: e
                        }), u({
                            buttonPopupStore: t,
                            universalMemberInviteStore: d,
                            inviteTargetsStore: c
                        }))
                    }, [t, n, c, d, e, m]),
                    y = (0, a(960253).I)(() => ({
                        buttonPopup: { ...a(986939).A.isMobile ? {
                                width: "100%"
                            } : s ? {
                                width: 460
                            } : {
                                width: a(912221).$D,
                                overflow: "hidden",
                                borderRadius: a(912221).Sg,
                                boxShadow: a(632079).Tj.shadow.outline.lg
                            }
                        }
                    }), [s]);
                return (0, r.jsx)(a(656252).A, {
                    popupType: a(986939).A.isMobile ? a(656252).z.SlideUp : a(656252).z.Popup,
                    forceInitialInbound: !0,
                    buttonPopupStore: t,
                    originGap: a(986939).A.isMobile ? void 0 : 8,
                    alignmentToOrigin: "end",
                    style: y.buttonPopup,
                    onClick: S,
                    content: () => (0, r.jsx)(a(868869).k, {
                        buttonPopupStore: t,
                        sudoModeStore: p,
                        store: h,
                        inviteTargetsStore: c,
                        universalMemberInviteStore: d,
                        onUpgradeButtonClick: v,
                        location: a(986939).A.isMobile ? "topbar_mobile" : "topbar_share_button",
                        onClose: P
                    }),
                    persistOnClose: g,
                    onDismiss: P,
                    onClose: P,
                    children: x
                })
            })
        },
        320532: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => o,
                textTranslateSmallIcon: () => i
            }), a(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.34 3.54 15.31 8.91",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.946 4.174a.625.625 0 1 0-1.25 0v.648H7.619a.625.625 0 1 0 0 1.25h5.169c-.258.64-.722 1.487-1.466 2.381a10 10 0 0 1-1.075-1.564.625.625 0 0 0-1.095.603c.322.585.753 1.228 1.312 1.883A13 13 0 0 1 7.9 11.284a.625.625 0 0 0 .621 1.084 14.2 14.2 0 0 0 2.8-2.084c.756.727 1.68 1.443 2.801 2.084a.625.625 0 0 0 .622-1.084 13 13 0 0 1-2.564-1.91c1.06-1.242 1.663-2.445 1.936-3.302h.909a.625.625 0 1 0 0-1.25h-3.079zm-6.624 5.852.737 2.015a.625.625 0 0 0 1.174-.43l-2.6-7.109a.877.877 0 0 0-1.646 0l-2.599 7.11a.625.625 0 1 0 1.174.429l.736-2.015zm-.457-1.25h-2.11L3.81 5.891z"
                    })
                },
                i = (0, a(104509).wt)("textTranslateSmall", o, "small")
        },
        428094: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let o = new(a(510969)).A
        },
        458277: (e, t, a) => {
            a.r(t), a.d(t, {
                TopbarMoreButton: () => u,
                messages: () => p
            });
            var o = a(296540),
                i = a(474848);
            let r = {
                    display: "flex",
                    fontSize: 14,
                    gap: 12,
                    paddingInlineStart: 4,
                    paddingInlineEnd: 4
                },
                n = {
                    width: 300
                };

            function s(e) {
                let {
                    originRef: t
                } = e, o = (0, a(718012).V)();
                return (0, i.jsx)(a(397732).U, {
                    calloutId: "ai_page_translation",
                    inAppCalloutStore: o,
                    children: (0, i.jsx)(a(788139).k, {
                        origin: t,
                        placementToOrigin: "bottom",
                        header: (0, i.jsxs)("div", {
                            style: r,
                            children: [(0, i.jsx)(a(16275).I, {
                                icon: a(320532).textTranslateSmallIcon,
                                size: "sm",
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            }), (0, i.jsx)(a(109939).sA, {
                                id: "aiPageTranslationTooltip.header",
                                defaultMessage: "You can always find translation in the top right menu"
                            })]
                        }),
                        showPointer: !1,
                        pointerOffset: 6,
                        content: null,
                        onCloseClick: () => {
                            a(820738).W.reset()
                        },
                        style: n,
                        onPrimaryButtonClick: () => {
                            a(820738).W.reset()
                        },
                        nextButtonContent: (0, i.jsx)(a(109939).sA, {
                            id: "aiPageTranslationTooltip.dismiss",
                            defaultMessage: "Got it"
                        })
                    })
                })
            }
            let l = {
                style0: {
                    width: a(504879).Sw
                }
            };

            function d({
                originRef: e
            }) {
                let t = (0, a(718012).V)();
                return (0, i.jsx)(a(397732).U, {
                    calloutId: "wiki_promo",
                    inAppCalloutStore: t,
                    children: (0, i.jsx)(a(788139).k, {
                        origin: e,
                        placementToOrigin: "bottom",
                        header: "Upgrade your existing wikis",
                        content: "Look for the Turn into wiki action here",
                        onCloseClick: () => {
                            a(9586).r.reset()
                        },
                        pointerPosition: "98%",
                        pointerLength: 24,
                        pointerOffset: -3,
                        style: l.style0
                    })
                })
            }
            let c = {
                mobilePopupStyle: {
                    borderRadius: 12,
                    backgroundColor: a(632079).Tj.background.secondary
                }
            };

            function u({
                buttonPopupStore: e,
                store: t,
                isLastButton: r,
                children: n
            }) {
                let l = (0, a(533992).v3)(),
                    {
                        device: p
                    } = l,
                    [g, f] = (0, o.useState)(void 0),
                    m = (0, o.useRef)(null),
                    v = (0, o.useCallback)(() => {
                        a(9586).r.reset(), a(820738).W.reset(), (0, a(471e3).I)({
                            environment: l
                        });
                        let e = m.current;
                        e && f(e.getBoundingClientRect()), (0, a(104310).u)({
                            event: {
                                eventName: "open_more_menu",
                                eventProperties: {}
                            }
                        })
                    }, [m, l]),
                    S = (0, a(682985).K8)(() => a(9586).r.state.showConvertTooltip, []),
                    w = (0, a(682985).O$)(a(820738).W),
                    k = (0, i.jsxs)(i.Fragment, {
                        children: [S ? (0, i.jsx)(d, {
                            originRef: m
                        }) : w ? (0, i.jsx)(s, {
                            originRef: m
                        }) : null, (0, i.jsx)(a(656252).A, {
                            popupType: a(986939).A.isMobile ? a(656252).z.BottomSheet : a(656252).z.Popup,
                            buttonPopupStore: e,
                            onClick: v,
                            content: () => (0, i.jsx)(a(939940).P, {
                                blockStore: t,
                                onClickOriginRect: g,
                                handleAccept: t => (function(e, t, o) {
                                    let i = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                                    if (i) {
                                        let t = i.getType();
                                        if (t) {
                                            let {
                                                collectionId: r,
                                                ownedCollectionCount: n,
                                                linkedCollectionCount: s
                                            } = (0, a(633171).P)(i, {
                                                skipPages: !0
                                            });
                                            (0, a(658024).N)(o, {
                                                analyticsName: e.analyticsName,
                                                action_type: e.analyticsActionType,
                                                from: "topbar_more_menu",
                                                block_id: i.id,
                                                block_type: t,
                                                is_toggleable: (0, a(955630).Yt)(t, i.getFormat()),
                                                collection_id: r,
                                                owned_collection_count: n,
                                                linked_collection_count: s,
                                                parent_collection_id: i.getParentCollectionIdUpToTwoLevels(),
                                                form_id: i.getFirstFormIdInCollectionViewBlock()
                                            })
                                        }
                                    }
                                    e.closeParentMenu && h(t)
                                })(t, e, l),
                                handleDismiss: () => h(e)
                            }),
                            originGap: p.isElectronWindows ? 12 : 8,
                            alignmentToOrigin: "end",
                            forceInitialInbound: !0,
                            style: a(986939).A.isMobile ? c.mobilePopupStyle : {
                                width: 256,
                                maxHeight: "80vh"
                            },
                            children: n || (e => (0, i.jsx)(b, {
                                ref: m,
                                buttonPopupEvents: e,
                                isLastButton: r
                            }))
                        })]
                    }),
                    x = (0, a(682985).K8)(() => a(728372).AppStoreInAppCalloutStore.state.getCalloutVisibility("ai_page_translation").canShow, []);
                return w && x ? (0, i.jsx)(a(315384).u, {
                    shape: "square",
                    borderRadius: 6,
                    children: k
                }) : k
            }
            let p = (0, a(109939).YK)({
                actions: {
                    defaultMessage: "Actions",
                    id: "topbar.actions"
                }
            });

            function h(e) {
                e.setState({ ...e.state,
                    open: !1
                })
            }
            let b = o.forwardRef(function({
                buttonPopupEvents: e,
                isLastButton: t
            }, o) {
                let r = (0, a(533992).v3)(),
                    n = (0, a(533992).Y0)(),
                    s = (0, a(109939).tz)();
                return (0, i.jsx)(a(51831).m, {
                    content: () => r.currentUser.isLoggedIn() ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Style, export, and more…",
                        id: "topbarMoreButton.tooltip"
                    }) : (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "More…",
                        id: "topbarMoreButton.loggedOut.tooltip"
                    }),
                    placement: "bottom",
                    originGap: n.isElectronWindows ? 10 : void 0,
                    delayThreshold: 400,
                    children: r => (0, i.jsx)(a(64960).Ay, {
                        ref: o,
                        style: function({
                            device: e,
                            isLastButton: t
                        }) {
                            if (!a(986939).A.isMobile) return {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: a(440601).u7,
                                height: a(440601).nh,
                                borderRadius: 6
                            };
                            let o = (0, a(268736).aD)().iconContainer;
                            return t ? { ...o,
                                marginInlineStart: e.isTablet ? -6 : void 0,
                                marginInlineEnd: 0
                            } : { ...o,
                                marginInlineStart: e.isTablet ? -6 : void 0,
                                marginInlineEnd: e.isTablet ? -6 : o.marginInlineEnd
                            }
                        }({
                            device: n,
                            isLastButton: t
                        }),
                        className: a(828432).ug9,
                        ariaLabel: s.formatMessage(p.actions),
                        ...(0, a(63390).A)(e, r),
                        children: a(986939).A.isMobile ? (0, i.jsx)(a(16275).I, {
                            icon: a(397900).ellipsisIcon,
                            colorVariant: "primary",
                            size: "lg"
                        }) : (0, i.jsx)(a(16275).I, {
                            icon: a(397900).ellipsisIcon,
                            size: "lg",
                            colorVariant: "primary"
                        })
                    })
                })
            })
        },
        504879: (e, t, a) => {
            a.d(t, {
                Nu: () => n,
                Sw: () => o,
                gO: () => i,
                j$: () => r
            });
            let o = 220,
                i = 24,
                r = -7,
                n = -3
        },
        687911: (e, t, a) => {
            a.d(t, {
                Y: () => r
            }), a(296540);
            var o = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.37 0.43 13.25 16.44",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M9.533.62a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.884l-1.408-1.408V11a.625.625 0 1 1-1.25 0V2.546L7.917 4.004a.625.625 0 1 1-.884-.883z"
                        }), (0, o.jsx)("path", {
                            d: "M8.125 5.125H5.5A2.125 2.125 0 0 0 3.375 7.25v7.5c0 1.174.951 2.125 2.125 2.125h9a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 14.5 5.125h-2.625v1.25H14.5c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-9a.875.875 0 0 1-.875-.875v-7.5c0-.483.392-.875.875-.875h2.625z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("squareAndArrowUp", i, "default")
        },
        820738: (e, t, a) => {
            a.d(t, {
                W: () => o
            });
            let o = a(546605).Store.createValue(!1, {
                name: "AiPageTranslationCalloutStore"
            })
        },
        868869: (e, t, a) => {
            a.d(t, {
                k: () => i
            });
            let o = new(a(815048)).O2("shareMenuContainer", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(18965), a.e(98629), a.e(96527), a.e(30085), a.e(90109), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(39726), a.e(31243), a.e(42534), a.e(86662), a.e(14886), a.e(39225), a.e(6212), a.e(2626), a.e(64453), a.e(4779), a.e(21969), a.e(29663), a.e(28482), a.e(76361), a.e(14369), a.e(74145), a.e(48860), a.e(75136), a.e(98175), a.e(18682), a.e(79349), a.e(58360), a.e(33162), a.e(82538), a.e(63793), a.e(18881), a.e(62731), a.e(41049), a.e(60262), a.e(72805), a.e(18416), a.e(2276), a.e(30532), a.e(73588), a.e(3723), a.e(91100), a.e(78311), a.e(4287), a.e(9817), a.e(65594), a.e(47302), a.e(91636), a.e(36441), a.e(64049), a.e(75189), a.e(28372), a.e(28663), a.e(47281), a.e(29087), a.e(46350), a.e(75234), a.e(67281), a.e(66200), a.e(52064), a.e(69626), a.e(82816), a.e(2832), a.e(48095), a.e(67098), a.e(35118), a.e(63611), a.e(94849), a.e(75484), a.e(98821), a.e(97711), a.e(89076), a.e(86998), a.e(58889), a.e(22920), a.e(9914), a.e(78257), a.e(84382), a.e(51386), a.e(95150), a.e(10471), a.e(87087), a.e(98419), a.e(11719), a.e(13592), a.e(6743), a.e(5234), a.e(85376), a.e(67252), a.e(42709), a.e(44903), a.e(92181), a.e(7251), a.e(72143), a.e(67612), a.e(53478), a.e(75559), a.e(86793), a.e(34), a.e(54253), a.e(26665), a.e(67984), a.e(605), a.e(75681)]).then(a.bind(a, 144329))),
                i = (0, a(815048)._h)(o, e => e.ShareMenuContainer)
        },
        891356: (e, t, a) => {
            a.d(t, {
                f: () => o
            });

            function o(e, t) {
                let o = (0, a(399348).f)(t, {
                    includeTeamHomeFeed: !1,
                    includeDataSources: !1
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "topbar_breadcrumb_menu_click",
                        eventProperties: {
                            has_parent_pages: o.length > 1
                        }
                    }
                }), a(882251).F.setState({
                    open: !0
                })
            }
        },
        939940: (e, t, a) => {
            a.d(t, {
                P: () => i
            });
            let o = new(a(815048)).O2("topbarMoreMenu", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(96346), a.e(49806), a.e(79974), a.e(45414), a.e(71562), a.e(26361), a.e(16471), a.e(37353), a.e(62475), a.e(3151), a.e(18965), a.e(98629), a.e(96527), a.e(30085), a.e(90109), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(53847), a.e(12354), a.e(5721), a.e(57688), a.e(54951), a.e(43444), a.e(23979), a.e(17250), a.e(26997), a.e(73259), a.e(28048), a.e(93430), a.e(55940), a.e(12560), a.e(88268), a.e(12001), a.e(40198), a.e(39726), a.e(31243), a.e(42534), a.e(86662), a.e(14886), a.e(39225), a.e(6212), a.e(2626), a.e(64453), a.e(4779), a.e(21969), a.e(29663), a.e(28482), a.e(76361), a.e(14369), a.e(74145), a.e(48860), a.e(75136), a.e(98175), a.e(18682), a.e(79349), a.e(58360), a.e(33162), a.e(82538), a.e(63793), a.e(18881), a.e(62731), a.e(41049), a.e(60262), a.e(72805), a.e(18416), a.e(2276), a.e(30532), a.e(73588), a.e(3723), a.e(91100), a.e(78311), a.e(4287), a.e(9817), a.e(65594), a.e(47302), a.e(91636), a.e(36441), a.e(64049), a.e(75189), a.e(28372), a.e(28663), a.e(47281), a.e(29087), a.e(46350), a.e(75234), a.e(67281), a.e(66200), a.e(52064), a.e(69626), a.e(82816), a.e(2832), a.e(48095), a.e(67098), a.e(35118), a.e(63611), a.e(94849), a.e(75484), a.e(98821), a.e(97711), a.e(89076), a.e(86998), a.e(58889), a.e(22920), a.e(9914), a.e(78257), a.e(84382), a.e(51386), a.e(95150), a.e(10471), a.e(87087), a.e(98419), a.e(11719), a.e(13592), a.e(6743), a.e(5234), a.e(85376), a.e(67252), a.e(42709), a.e(44903), a.e(92181), a.e(7251), a.e(72143), a.e(67612), a.e(53478), a.e(75559), a.e(86793), a.e(34), a.e(54253), a.e(26665), a.e(67984), a.e(605), a.e(75681)]).then(a.bind(a, 462577))),
                i = (0, a(815048)._h)(o, e => e.TopbarMoreMenu)
        }
    }
]);