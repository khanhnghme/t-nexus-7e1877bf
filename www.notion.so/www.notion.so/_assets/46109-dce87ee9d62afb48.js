"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [46109], {
        152994: (e, t, n) => {
            function r(e, t) {
                let r = n(219040).H.peekEntry("back" === t ? -1 : 1);
                r && (0, n(380839).x)(e, {
                    url: r.url,
                    position: "after-children"
                })
            }

            function o(e, t, r) {
                let o = function(e) {
                    let {
                        entries: t,
                        activeIndex: r
                    } = n(219040).H.getState();
                    if (void 0 === r) return;
                    let o = t.findIndex(t => t.historyId === e);
                    if (-1 !== o) return o - r
                }(t);
                if (void 0 === o) return;
                let i = n(219040).H.peekEntry(o);
                if (i) {
                    if (r) return void(0, n(96351).B)({
                        environment: e,
                        url: i.url,
                        makeTabActive: !1,
                        position: "after-children",
                        openInNew: r
                    });
                    (0, n(175576).o)({
                        environment: e,
                        offset: o
                    })
                }
            }
            n.d(t, {
                Y: () => r,
                x: () => o
            })
        },
        235364: (e, t, n) => {
            n.d(t, {
                m: () => i
            });
            var r = n(296540);
            class o {
                topbarRenderLocation;
                constructor(e) {
                    const {
                        topbarRenderLocation: t
                    } = e;
                    this.topbarRenderLocation = t
                }
                get showNewTabButton() {
                    return ({
                        AIChat: !0,
                        DefaultTopbar: !0,
                        Library: !0,
                        Marketplace: !0,
                        PersonProfile: !0,
                        PersonalHome: !0,
                        PersonalHomeScrolled: !0,
                        PublicPage: !0,
                        PublicSharing: !0,
                        TrustedDomainPage: !0,
                        WorkflowEditor: !0,
                        AssistantMenuHeader: !1,
                        Meet: !1
                    })[this.topbarRenderLocation]
                }
                get topbarActionsDisplayStyle() {
                    return ({
                        PersonalHome: "transparent",
                        PersonalHomeScrolled: "bordered",
                        AIChat: "solid",
                        AssistantMenuHeader: "solid",
                        DefaultTopbar: "solid",
                        Library: "solid",
                        Marketplace: "solid",
                        Meet: "solid",
                        PersonProfile: "solid",
                        PublicPage: "solid",
                        PublicSharing: "solid",
                        TrustedDomainPage: "solid",
                        WorkflowEditor: "solid"
                    })[this.topbarRenderLocation]
                }
                get showDesktopAppMenuIconButton() {
                    return ({
                        AIChat: !0,
                        AssistantMenuHeader: !1,
                        DefaultTopbar: !1,
                        Library: !1,
                        Marketplace: !1,
                        Meet: !1,
                        PersonProfile: !1,
                        PersonalHome: !1,
                        PersonalHomeScrolled: !1,
                        PublicPage: !1,
                        PublicSharing: !1,
                        TrustedDomainPage: !1,
                        WorkflowEditor: !1
                    })[this.topbarRenderLocation]
                }
            }

            function i(e) {
                let {
                    location: t
                } = e;
                return (0, r.useMemo)(() => new o({
                    topbarRenderLocation: t
                }), [t])
            }
        },
        263863: (e, t, n) => {
            n.d(t, {
                I: () => i
            });
            var r = () => n(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        direction: "back"
                    }
                }
            }
            let i = new o
        },
        319643: (e, t, n) => {
            n.d(t, {
                lY: () => d,
                C$: () => l,
                Cy: () => c,
                c8: () => p,
                mz: () => u,
                lE: () => g,
                JK: () => s,
                i_: () => i,
                K6: () => a,
                pF: () => f,
                ky: () => b,
                Im: () => m
            });
            var r = n(296540);

            function o() {
                var e;
                null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (e = n(775657).electronApi.toggleMaximized) || e.call(n(775657).electronApi)
            }

            function i(e) {
                let {
                    store: t,
                    environment: r
                } = e, o = (0, n(974410).f)(t), i = !t || (0, n(892400)._)(t), {
                    id: a
                } = r.currentUser, s = a && o ? n(807825).L.createChildStore(o, {
                    table: n(832375).oo9,
                    id: a
                }) : void 0, l = !s || s.isReady();
                return i && l
            }

            function a(e, t) {
                return !n(986939).A.isAdminMode && (0, n(142484).q)(t, e, e.getSpaceStore())
            }

            function s() {
                return n(218744).default.checkGate({
                    gateName: "sites_deprecate_edit_and_comment_top_bar"
                })
            }
            async function l(e) {
                let {
                    environment: t,
                    route: r,
                    openInNewTab: o
                } = e;
                (0, n(104310).u)({
                    event: {
                        eventName: n(441544).$,
                        eventProperties: {}
                    }
                }), await n(295615).NT(t, {
                    utmContent: "sites_banner_cta",
                    nextRoute: r,
                    openInNewTab: o
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    route: r,
                    openInNewTab: o
                } = e;
                (0, n(510504).L)({
                    variant: "made_with_notion"
                }), await n(295615).VE(t, {
                    utmContent: "topbar_cta",
                    nextRoute: r,
                    openInNewTab: o
                })
            }
            async function d(e) {
                let {
                    environment: t,
                    route: r,
                    formId: o,
                    spaceId: i,
                    openInNewTab: a
                } = e;
                (0, n(510504).L)({
                    variant: "made_with_notion"
                }), await n(295615)._q(t, {
                    utmContent: "topbar_cta",
                    nextRoute: r,
                    formId: o,
                    spaceId: i,
                    openInNewTab: a
                })
            }

            function u(e) {
                var t;
                e.target !== e.currentTarget || null != (t = n(584257).A.state.preferences) && t.isAlwaysOnTabBarEnabled || n(584257).A.state.isShowingTabBar || (0, n(705660).SQ)(e, n(705660).y$.EditorDoubleClick, o)
            }

            function g(e) {
                let t = e.target;
                t instanceof HTMLElement && (0, n(768397).p)(t) && n(330602).A.setState(!0)
            }

            function p() {
                n(330602).A.setState(!1)
            }

            function f({
                device: e,
                route: t
            }) {
                return "page" === t.name && (0, n(355301).aD)(e)
            }

            function b() {
                let e = (0, n(533992).v3)(),
                    [t, o] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    !async function() {
                        o(void 0 !== await (0, n(128190).getCookie)(e, n(794102).Mm))
                    }()
                }, [e]), t
            }

            function m(e) {
                let {
                    store: t
                } = e, r = (0, n(533992).v3)(), [{
                    status: o
                }] = (0, n(97668).Yb)(async () => await n(686494).A.waitUntilLoaded(), []);
                return (0, n(682985).K8)(() => {
                    if (!t) return {
                        shouldRenderPublicPageTopbar: !1,
                        shouldRenderPublicShareLinkTopbar: !1,
                        shouldRenderLoggedOutSidebarButton: !1,
                        isLoading: !1
                    };
                    if (!i({
                            store: t,
                            environment: r
                        }) || "pending" === o) return {
                        shouldRenderPublicPageTopbar: !1,
                        shouldRenderPublicShareLinkTopbar: !1,
                        shouldRenderLoggedOutSidebarButton: !1,
                        isLoading: !0
                    };
                    let e = !r.currentUser.isLoggedIn(),
                        s = a(t, r),
                        l = !!s && (0, n(470641).g)();
                    return {
                        shouldRenderPublicPageTopbar: !!(s && !l),
                        shouldRenderPublicShareLinkTopbar: !!(l && e),
                        shouldRenderLoggedOutSidebarButton: (0, n(875439).shouldShowLoggedOutPublicSharingSidebar)(r),
                        isLoading: !1
                    }
                }, [r, t, o])
            }
            n(168962).JZ.signup, n(168962).JZ.product
        },
        370838: (e, t, n) => {
            function r() {
                return {
                    height: "100%",
                    flexGrow: 0,
                    marginInlineEnd: 8,
                    fontSize: 14,
                    minWidth: 0
                }
            }

            function o({
                environment: e,
                isShowingTabBar: t,
                shouldShowSidebar: r,
                isSidebarExpanded: i,
                isSecondarySidebarVisible: a,
                isBrowserFullScreen: s,
                shouldRenderTemplateGalleryTopbar: l,
                allowOverflow: c,
                zoom: d
            }) {
                let {
                    device: u
                } = e, g = u.isElectronMac && (!r || !i && !a) && !s && !t, p = u.isElectronWindows && !t, f = n(801113).ek(u.isElectronMac);
                return l && (f = n(801113).Hi), {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflow: c ? "visible" : "hidden",
                    height: f,
                    paddingInlineStart: g ? (0, n(196441).n$)(d) : !p || r && (i || a) ? n(986939).A.isMobile ? 4 : 12 : 46,
                    paddingInlineEnd: p ? (0, n(196441).yA)(d) + 4 : n(986939).A.isMobile ? 4 : 10
                }
            }

            function i() {
                return {
                    flex: "none",
                    width: 1,
                    height: 16,
                    marginInlineStart: 8,
                    marginInlineEnd: 8,
                    background: n(632079).Tj.border.primaryTranslucent
                }
            }
            n.d(t, {
                DW: () => o,
                R1: () => i,
                lx: () => r
            })
        },
        440601: (e, t, n) => {
            n.d(t, {
                Kh: () => i,
                Nq: () => o,
                RN: () => c,
                U: () => a,
                nh: () => l,
                u7: () => s
            });
            var r = n(296540);

            function o() {
                let {
                    isElectronWindows: e
                } = (0, n(533992).Y0)(), t = (0, n(682985).O$)(n(584257).b), o = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor || n(196441).rx, []), i = e && !t;
                return (0, r.useMemo)(() => i ? (0, n(196441).yA)(o) + 4 : n(986939).A.isMobile ? 4 : 10, [i, o])
            }

            function i({
                shouldRenderTemplateGalleryTopbar: e
            }) {
                let t = (0, n(533992).v3)(),
                    o = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor, []),
                    a = (0, n(682985).O$)(n(584257).b),
                    s = (0, n(682985).O$)((0, n(846044).e)(t)),
                    l = (0, n(682985).K8)(() => (0, n(712358).K)(t), [t]),
                    c = (0, n(682985).K8)(() => n(550830).default.isPanelPinnedState(), []),
                    d = (0, n(682985).K8)(() => n(896597).A.state.isFullScreen, []),
                    {
                        device: u
                    } = t,
                    g = o || n(196441).rx,
                    p = u.isElectronMac && (!s || !l && !c) && !d && !a,
                    f = u.isElectronWindows && !a,
                    b = f && (!s || !l && !c),
                    m = n(801113).ek(u.isElectronMac);
                return e && (m = n(801113).Hi), (0, r.useMemo)(() => ({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflow: "hidden",
                    height: m,
                    paddingInlineStart: p ? (0, n(196441).n$)(g) : b ? 46 : n(986939).A.isMobile ? 4 : 12,
                    paddingInlineEnd: f ? (0, n(196441).yA)(g) + 4 : n(986939).A.isMobile ? 4 : 10
                }), [m, p, g, b, f])
            }

            function a({
                store: e,
                shouldRenderTemplateGalleryTopbar: t,
                isBrowserFullScreen: r
            }) {
                let o = (0, n(533992).v3)(),
                    i = (0, n(533992).Y0)(),
                    s = (0, n(533992).WS)(),
                    l = (0, n(682985).K8)(() => "meet" === o.RouterStore.state.route.name, [o.RouterStore]),
                    c = (0, n(682985).K8)(() => ((0, n(933062).lU)(e) || l) && 0 === n(465361).A.state.banners.length, [e, l]),
                    d = n(801113).ek(i.isElectronMac);
                t && (d = 2 * n(801113).Hi);
                let u = (0, n(682985).K8)(() => n(352202).Z8(), []),
                    g = (0, n(682985).O$)((0, n(348295).$)(o)),
                    p = (0, n(682985).K8)(() => n(584257).A.state.zoomFactor, []),
                    f = n(801113).pz(i.isElectronMac, r, p || n(196441).rx);
                return (0, n(960253).I)(() => ({
                    header: {
                        background: c && !s ? "transparent" : n(632079).Tj.background.primary,
                        maxWidth: "100vw",
                        zIndex: 100,
                        WebkitUserSelect: "none",
                        userSelect: "none",
                        position: "relative"
                    },
                    container: {
                        width: `calc(100% - ${u}px)`,
                        maxWidth: "100vw",
                        height: d,
                        opacity: +!g,
                        transition: `
						opacity ${n(97143).L}ms,
						color ${n(97143).L}ms
					`,
                        position: "relative",
                        insetInlineStart: u
                    },
                    electronTopbarSidebarMousePeekArea: {
                        position: "absolute",
                        top: 0,
                        bottom: -n(132261).qe,
                        width: `${f}px`
                    }
                }), [c, s, u, g, d, f])
            }
            let s = 28,
                l = 28,
                c = {
                    iconButton: {
                        width: 28,
                        height: 28,
                        marginInlineEnd: 2
                    },
                    icon: {
                        height: n(104509).Ev.default,
                        width: n(104509).Ev.default,
                        fill: n(632079).Tj.icon.primary
                    },
                    tabletIcon: {
                        height: n(104509).lD.lg,
                        width: n(104509).lD.lg,
                        fill: n(632079).Tj.icon.primary
                    }
                }
        },
        441544: (e, t, n) => {
            n.d(t, {
                $: () => r,
                H: () => o
            });
            let r = "notion_sites_banner_click",
                o = "notion_sites_banner_dismiss"
        },
        457196: (e, t, n) => {
            n.d(t, {
                z: () => o
            });
            let r = new(n(815048)).O2("topbarSidebarButton", async () => await n.e(62033).then(n.bind(n, 171847))),
                o = (0, n(815048)._h)(r, e => e.TopbarSidebarButton)
        },
        510504: (e, t, n) => {
            n.d(t, {
                L: () => r
            });

            function r(e) {
                (0, n(104310).u)({
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
        554810: (e, t, n) => {
            function r(e, t) {
                (0, n(195857).DO_NOT_USE_trackLegacy)("click_desktop_navigator", t)
            }
            n.d(t, {
                _: () => y
            }), n(296540);
            var o = n(474848);
            let i = (0, n(109939).YK)({
                    newTabButton: {
                        id: "desktopTopbarBrowserHistoryButton.newTabButton.label",
                        defaultMessage: "New tab"
                    },
                    goBackButton: {
                        id: "desktopTopbarBrowserHistoryButtons.goBackButton.label",
                        defaultMessage: "Go back"
                    },
                    goForwardButton: {
                        id: "desktopTopbarBrowserHistoryButton.goForwardButton.label",
                        defaultMessage: "Go forward"
                    }
                }),
                a = {
                    opacity: .5,
                    marginInlineStart: 4
                },
                s = {
                    position: "relative"
                };

            function l() {
                let e = (0, n(109939).tz)(),
                    t = (0, n(682985).K8)(() => n(584257).A.state.isTabPositionSupported, []);
                return (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsxs)(n(4458).fI, {
                        children: [e.formatMessage(i.newTabButton), (0, o.jsx)(n(693592).A, {
                            name: "newTab",
                            style: a
                        })]
                    }),
                    placement: "bottom",
                    alignment: "center",
                    originGap: 6,
                    children: r => (0, o.jsx)(n(374533).A, {
                        ariaLabel: e.formatMessage(i.newTabButton),
                        icon: {
                            icon: n(581923).plusIcon,
                            size: "lg"
                        },
                        colorVariant: "primary",
                        className: "notion-new-tab-button",
                        style: s,
                        onClick: () => {
                            n(775657).electronApi && null !== n(775657).electronApi && void 0 !== n(775657).electronApi && n(775657).electronApi.newTab ? n(775657).electronApi.newTab() : (0, n(66291).V)({
                                url: "",
                                makeTabActive: !0,
                                position: t ? "end" : "start"
                            })
                        },
                        ...r
                    })
                })
            }
            let c = {
                    opacity: .5,
                    marginInlineStart: 4
                },
                d = {
                    position: "relative",
                    width: 24,
                    height: 24
                };

            function u({
                isNavigationHistorySupported: e
            }) {
                let t = (0, n(109939).tz)(),
                    a = (0, n(533992).v3)(),
                    s = (0, n(682985).K8)(() => !n(219040).H.canGoBack(), []);
                return (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsxs)(n(4458).fI, {
                        children: [t.formatMessage(i.goBackButton), (0, o.jsx)(n(693592).A, {
                            name: "goBack",
                            style: c
                        })]
                    }),
                    placement: "bottom",
                    alignment: "center",
                    originGap: 6,
                    children: l => (0, o.jsx)(n(374533).A, {
                        ariaLabel: t.formatMessage(i.goBackButton),
                        icon: {
                            icon: n(128743).arrowStraightLeftIcon,
                            size: "lg"
                        },
                        colorVariant: "primary",
                        className: "notion-history-back-button",
                        disabled: s,
                        style: d,
                        onClick: t => {
                            let o;
                            return r(a, {
                                type: "back"
                            }), o = t.metaKey || t.ctrlKey, void(e && o ? (0, n(152994).Y)(a, "back") : (0, n(707603).a)(a))
                        },
                        onContextMenu: () => {
                            !s && e && n(263863).I.setState({
                                direction: "back",
                                open: !0
                            })
                        },
                        ...l
                    })
                })
            }
            let g = {
                    opacity: .5,
                    marginInlineStart: 4
                },
                p = {
                    position: "relative",
                    width: 24,
                    height: 24
                };

            function f({
                isNavigationHistorySupported: e
            }) {
                let t = (0, n(109939).tz)(),
                    a = (0, n(533992).v3)(),
                    s = (0, n(682985).K8)(() => !n(219040).H.canGoForward(), []);
                return (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsxs)(n(4458).fI, {
                        children: [t.formatMessage(i.goForwardButton), (0, o.jsx)(n(693592).A, {
                            name: "goForward",
                            style: g
                        })]
                    }),
                    placement: "bottom",
                    alignment: "center",
                    originGap: 6,
                    children: l => (0, o.jsx)(n(374533).A, {
                        ariaLabel: t.formatMessage(i.goForwardButton),
                        icon: {
                            icon: n(988824).arrowStraightRightIcon,
                            size: "lg"
                        },
                        colorVariant: "primary",
                        className: "notion-history-forward-button",
                        disabled: s,
                        style: p,
                        onClick: t => {
                            let o;
                            return r(a, {
                                type: "forward"
                            }), o = t.metaKey || t.ctrlKey, void(e && o ? (0, n(152994).Y)(a, "forward") : (0, n(295918).s)(a))
                        },
                        onContextMenu: () => {
                            !s && e && n(263863).I.setState({
                                direction: "forward",
                                open: !0
                            })
                        },
                        ...l
                    })
                })
            }
            let b = {
                position: "relative",
                display: "flex",
                flexShrink: 0,
                gap: 4
            };

            function m(e) {
                let {
                    topbarFeatureController: t
                } = e, r = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = n(584257).A.state.preferences) ? void 0 : e.isNavigationHistoryEnabled) && n(584257).A.state.isNavigationHistorySupported
                }, []), i = (0, n(463846).A)(!0);
                return (0, o.jsxs)("div", {
                    style: b,
                    ...i,
                    children: [(0, o.jsx)(u, {
                        isNavigationHistorySupported: r
                    }), (0, o.jsx)(f, {
                        isNavigationHistorySupported: r
                    }), t.showNewTabButton ? (0, o.jsx)(l, {}) : null]
                })
            }
            let h = {
                background: "transparent",
                borderRadius: 0,
                boxShadow: "none"
            };

            function y(e) {
                let {
                    topbarFeatureController: t
                } = e, {
                    isElectron: r
                } = (0, n(533992).Y0)(), i = (0, n(682985).O$)(n(584257).b), a = (0, n(682985).K8)(() => n(475097).default.isCenterPeekOpen(), []);
                return !r || i ? null : (0, o.jsx)(n(182718).zD, {
                    trapFocus: !1,
                    style: h,
                    content: () => (0, o.jsx)(m, {
                        topbarFeatureController: t
                    }),
                    placementToOrigin: "center",
                    alignmentToOrigin: "center",
                    open: a,
                    disableMouseCapture: !0,
                    preventCaptureEsc: !0,
                    preventScaleTransition: !0,
                    preventOpacityTransition: !0,
                    popupType: n(423291).n.Popup,
                    children: (0, o.jsx)(m, {
                        topbarFeatureController: t
                    })
                })
            }
        },
        662886: (e, t, n) => {
            n.d(t, {
                K: () => a
            }), n(296540);
            var r = n(474848);
            let o = (0, n(109939).YK)({
                    menu: {
                        defaultMessage: "Menu",
                        id: "topbar.appMenuButton.title"
                    }
                }),
                i = {
                    style0: {
                        position: "absolute",
                        top: "10px",
                        insetInlineStart: "14px",
                        width: 24,
                        height: 24,
                        zIndex: 1e5,
                        ...(0, n(1249).g)({
                            noDrag: !0
                        })
                    }
                };

            function a() {
                let e = (0, n(109939).tz)();
                return (0, n(682985).O$)(n(584257).b) ? null : (0, r.jsx)(n(374533).A, {
                    style: i.style0,
                    colorVariant: "primary",
                    onClick: () => {
                        var e;
                        null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (e = n(775657).electronApi.openAppMenu) || e.call(n(775657).electronApi)
                    },
                    icon: n(898378).notionTintableIcon,
                    ariaLabel: e.formatMessage(o.menu)
                })
            }
        },
        794102: (e, t, n) => {
            n.d(t, {
                Mm: () => r,
                RU: () => o,
                tt: () => i
            });
            let r = "notion_client_deploy_preview",
                o = "pr",
                i = "previewVersion"
        },
        854862: (e, t, n) => {
            n.d(t, {
                A: () => h
            });
            var r = n(296540),
                o = n(474848);

            function i(e) {
                let t = (0, n(621149).q)(500);
                if (n(986939).A.isMobile) return (0, o.jsx)(n(16275).I, {
                    icon: n(965885).exclamationMarkCircleIcon,
                    colorPalette: "red",
                    colorVariant: "accentPrimary"
                });
                if ("SpaceFrozenError" === e.error.retryReason) return (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "Your workspace is frozen, sync is paused.",
                    id: "connectionErrorIndicator.label.spaceFrozen"
                });
                if (void 0 === e.error.approximateBackoffDelayEndTime) return (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "Something’s not right.",
                    id: "connectionErrorIndicator.label.shortMessage"
                });
                let r = Math.floor((e.error.approximateBackoffDelayEndTime - t) / 1e3);
                return r > 0 ? (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "Something’s not right. Retrying in {numberOfSeconds}s…",
                    values: {
                        numberOfSeconds: r
                    },
                    id: "connectionErrorIndicator.label.retryingInSeconds"
                }) : (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "Something’s not right. Retrying…",
                    id: "connectionErrorIndicator.label.retrying"
                })
            }
            let a = {
                marginTop: 8,
                fontSize: 12,
                color: "rgba(255, 255, 255, 0.7)",
                fontStyle: "italic"
            };

            function s(e) {
                (0, n(621149).q)(1e4);
                let {
                    startTime: t
                } = e, i = (0, n(799843).nl)(t);
                return ((0, r.useEffect)(() => {
                    n(508297).ty({
                        errorSinceMs: Date.now() - t
                    })
                }, [t]), "SpaceFrozenError" === e.retryReason) ? (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "{sinceSomeTimeAgo}: saving was paused because your workspace is frozen. We’ll try again once your workspace is unfrozen.",
                    values: {
                        sinceSomeTimeAgo: i
                    },
                    id: "connectionErrorIndicator.details.spaceFrozen"
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(n(109939).sA, {
                        defaultMessage: "{sinceSomeTimeAgo}, an error occurred saving your changes. We’ll try again soon.",
                        values: {
                            sinceSomeTimeAgo: i
                        },
                        id: "connectionErrorIndicator.details.message"
                    }), e.retryReason ? (0, o.jsx)("div", {
                        style: a,
                        children: (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "Debug info: {debugInfo}",
                            values: {
                                debugInfo: e.retryReason
                            },
                            id: "connectionErrorIndicator.details.debugInfo"
                        })
                    }) : void 0]
                })
            }

            function l(e) {
                return (0, o.jsx)(n(109939).sA, {
                    defaultMessage: "You can no longer make edits: {errorMessage} {usageInfoMessage}",
                    id: "connectionState.errorIndicator.cannotMakeEdits.detailedMessage",
                    values: {
                        errorMessage: e.errorMessage,
                        usageInfoMessage: e.usageInfoMessage
                    }
                })
            }
            let c = {
                style0: {
                    padding: 15,
                    background: n(632079).Tj.red.background.accentPrimary,
                    color: "white"
                },
                style1: {
                    width: 320,
                    whiteSpace: "normal"
                }
            };

            function d(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, o.jsx)(n(16275).I, {
                        icon: n(923007).infoCircleFillIcon,
                        size: "xs",
                        fitToViewBox: "all",
                        style: {
                            marginInlineStart: 6,
                            fill: e.errorStateStyle.color
                        }
                    }),
                    a = "transactionQueue" === e.type ? e.message : void 0,
                    s = "lowStorage" === e.type ? e.estimate : void 0;
                return ((0, r.useEffect)(() => {
                    "transactionQueue" === e.type ? n(508297).Y({
                        message: a
                    }) : "connection" === e.type ? n(508297).pn() : "lowStorage" === e.type && n(508297).Ug({
                        estimate: s
                    })
                }, [e.type, a, s, t]), (0, r.useEffect)(() => {
                    a && n(647095).tW((0, o.jsx)(l, {
                        errorMessage: a
                    }))
                }, [a]), n(986939).A.isMobile) ? (0, o.jsx)(n(656252).A, {
                    popupType: n(656252).z.SlideUp,
                    content: ({
                        close: t
                    }) => (0, o.jsx)(n(747369).A, {
                        menuType: n(649476).gu.ActionSheet,
                        children: (0, o.jsx)("div", {
                            style: c.style0,
                            onClick: t,
                            children: e.detailsText
                        })
                    }),
                    children: t => (0, o.jsx)(n(988022).p, {
                        style: e.errorStateStyle,
                        ...t,
                        children: e.indicatorText || i
                    })
                }) : (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsx)("div", {
                        style: c.style1,
                        children: e.detailsText
                    }),
                    children: t => (0, o.jsxs)("div", {
                        style: e.errorStateStyle,
                        ...t,
                        children: [e.indicatorText, i]
                    })
                })
            }

            function u({
                showLoadingSpinner: e
            }) {
                let t = (0, n(533992).v3)(),
                    r = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = t.mobileNative) ? void 0 : e.supportsNativeHomeOnPhone()
                    }, [t]);
                return (0, o.jsx)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        marginInlineStart: "auto",
                        paddingInlineStart: !r || e ? 4 : 0,
                        paddingInlineEnd: !r || e ? 8 : 0,
                        visibility: e ? "visible" : "hidden"
                    },
                    children: !r || e ? (0, o.jsx)(n(517334).k, {
                        size: 18
                    }) : void 0
                })
            }

            function g(e) {
                return {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 18 * !e,
                    fontSize: e ? 12 : 14
                }
            }
            let p = {
                    width: 200
                },
                f = {
                    margin: 4,
                    marginInlineEnd: 8
                };

            function b({
                isOnline: e,
                showLoadingSpinner: t
            }) {
                let r = (0, n(109939).tz)(),
                    i = (0, n(533992).Y0)(),
                    a = (0, n(682985).O$)(n(584257).b),
                    s = (0, n(556583).y)(),
                    l = (0, n(682985).K8)(() => n(420153).A.state.totalPending, []),
                    c = (0, n(960253).I)(() => ({
                        offlineBadge: { ...(0, n(1249).g)({
                                noDrag: i.isElectron && !a
                            }),
                            display: "flex",
                            alignItems: "center",
                            padding: "0px 6px",
                            height: n(986939).A.isMobile ? 20 : 24,
                            borderRadius: 4,
                            marginInlineEnd: n(986939).A.isMobile ? 4 : 18,
                            whiteSpace: "nowrap",
                            fontSize: n(986939).A.isMobile ? 12 : 14,
                            color: n(632079).Tj.text.secondary,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`
                        },
                        loadingState: { ...(0, n(1249).g)({
                                noDrag: i.isElectron && !a
                            }),
                            ...g(n(986939).A.isMobile),
                            color: n(632079).Tj.text.tertiary
                        }
                    }), [i, a]);
                return e || s ? t && e ? (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "{percent} complete",
                        id: "connectionState.savePercentangeIndicator.tooltipInfo",
                        values: {
                            percent: n(420153).A.percentComplete(r)
                        }
                    }),
                    children: e => (0, o.jsxs)("div", {
                        style: c.loadingState,
                        ...e,
                        children: [(0, o.jsx)(n(517334).k, {
                            style: f
                        }), (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "Saving…",
                            id: "connectionState.saving.message"
                        })]
                    })
                }) : null : (0, o.jsx)(n(51831).m, {
                    content: () => (0, o.jsx)("div", {
                        style: p,
                        children: (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "{numberOfEdits, plural, one {You have {numberOfEdits} edit that will be synced next time you are online.} other {You have {numberOfEdits} edits that will be synced next time you are online.}}",
                            id: "connectionState.offlineBadge.tooltip",
                            values: {
                                numberOfEdits: l
                            }
                        })
                    }),
                    textWrap: !0,
                    children: e => (0, o.jsx)("div", {
                        style: c.offlineBadge,
                        ...e,
                        children: (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "Offline",
                            id: "connectionState.offlineBadge.label"
                        })
                    })
                })
            }

            function m() {
                let e = (0, n(533992).Y0)(),
                    t = (0, n(682985).K8)(() => n(420153).A.state.transactionQueueError, []),
                    a = (0, n(682985).K8)(() => n(420153).A.state.storageUsageEstimate, []),
                    c = (0, n(109939).tz)(),
                    u = (0, n(682985).O$)(n(584257).b),
                    p = (0, n(960253).I)(() => ({
                        errorState: { ...(0, n(1249).g)({
                                noDrag: e.isElectron && !u
                            }),
                            ...g(n(986939).A.isMobile),
                            whiteSpace: "nowrap",
                            color: n(632079).Tj.red.text.accentPrimary
                        }
                    }), [e, u]),
                    f = (0, n(682985).K8)(() => (0, n(659262).L)(), []),
                    b = () => {
                        if (a) {
                            let e = a.usage / a.quota;
                            return (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Notion is using {percentageOfStorageBytesUsed} of its available storage on your device ({usedNumberOfBytes} of {totalNumberOfBytes}).",
                                id: "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart1",
                                values: {
                                    usedNumberOfBytes: (0, n(700369).ZV)(a.usage, "bytes", c),
                                    totalNumberOfBytes: (0, n(700369).ZV)(a.quota, "bytes", c),
                                    percentageOfStorageBytesUsed: c.formatNumber(e, {
                                        style: "percent",
                                        maximumFractionDigits: 2
                                    })
                                }
                            })
                        }
                    };
                if (t) {
                    let e = (0, o.jsx)(n(109939).sA, {
                            defaultMessage: "Cannot save changes",
                            id: "connectionState.errorIndicator.cannotSaveChanges.message"
                        }),
                        r = (0, o.jsx)(l, {
                            errorMessage: t.message,
                            usageInfoMessage: b()
                        });
                    return (0, o.jsx)(d, {
                        type: "transactionQueue",
                        message: t.message,
                        indicatorText: e,
                        detailsText: r,
                        errorStateStyle: p.errorState
                    })
                }
                if (void 0 !== a && !(0, n(921200).W)(a)) {
                    let t = e.isBrowser ? (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Low browser storage",
                        id: "connectionState.errorIndicator.lowStorageOnWebApp.message"
                    }) : e.isMobileNative ? (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Low app storage",
                        id: "connectionState.errorIndicator.lowStorageOnMobileApp.message"
                    }) : (0, o.jsx)(n(109939).sA, {
                        defaultMessage: "Low disk space",
                        id: "connectionState.errorIndicator.lowStorageOnDesktopApp.message"
                    });
                    return (0, o.jsx)(d, {
                        type: "lowStorage",
                        estimate: a,
                        indicatorText: t,
                        detailsText: (0, o.jsxs)(r.Fragment, {
                            children: [b(), " ", (0, o.jsx)(n(109939).sA, {
                                id: "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart2",
                                defaultMessage: "You may lose changes made while offline. Try closing and re-opening your app, and contact support if that doesn’t fix the issue."
                            })]
                        }),
                        errorStateStyle: p.errorState
                    })
                }
                return f ? (0, o.jsx)(d, {
                    type: "connection",
                    indicatorText: (0, o.jsx)(i, {
                        error: f,
                        device: e
                    }),
                    detailsText: (0, o.jsx)(s, { ...f
                    }),
                    errorStateStyle: p.errorState
                }) : null
            }
            let h = function() {
                let e = (0, n(682985).O$)(n(205885).e),
                    t = !(0, n(682985).O$)(n(420153).l),
                    i = function() {
                        let e = (0, r.useRef)(!1),
                            [t, o] = (0, r.useState)(!1),
                            i = (0, n(84235).U)(() => {
                                n(205885).A.state.syncing && !e.current && (e.current = !0, o(!0))
                            }, 8e3),
                            a = (0, n(84235).U)(() => {
                                e.current && !n(205885).A.state.syncing && (e.current = !1, o(!1))
                            }, 200);
                        return (0, r.useEffect)(() => (n(205885).A.addListener(i), n(205885).A.addListener(a), () => {
                            n(205885).A.removeListener(i), n(205885).A.removeListener(a)
                        }), [i, a]), e.current
                    }(),
                    a = function(e, t) {
                        let o = (0, n(533992).v3)(),
                            [i, a] = (0, r.useState)(!1),
                            s = (0, r.useCallback)(r => {
                                (0, n(745308).A)(o, r, "command+s") && (r.preventDefault(), e && !i && t && (a(!0), setTimeout(() => {
                                    a(!1)
                                }, 500)))
                            }, [o, i, t, e]);
                        return (0, r.useEffect)(() => (window.addEventListener("keydown", s), () => {
                            window.removeEventListener("keydown", s)
                        }), [s]), i
                    }(e, t),
                    s = (0, n(682985).K8)(() => !(0, n(659262).y)(), []),
                    l = (0, n(682985).K8)(() => {
                        let e = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return !!e && (0, n(933062).Nh)(e.id)
                    }, []),
                    c = (a || i) && t && s && !l;
                return (0, o.jsxs)(o.Fragment, {
                    children: [n(986939).A.isMobile ? (0, o.jsx)(u, {
                        showLoadingSpinner: c
                    }) : (0, o.jsx)(b, {
                        isOnline: e,
                        showLoadingSpinner: c
                    }), (0, o.jsx)(m, {})]
                })
            }
        },
        896597: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = () => n(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        isFullScreen: window.outerWidth === window.screen.width && window.outerHeight === window.screen.height
                    }
                }
                constructor() {
                    super(), n(884972).Y5.addListener(this.updateFromElectronState), this.updateFromElectronState()
                }
                updateFromElectronState = async () => {
                    let e = await n(884972).Y5.get();
                    void 0 !== e && this.setState({
                        isFullScreen: e
                    })
                }
            }
            let i = new o
        }
    }
]);