"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [60858, 85330], {
        40915: (e, t, i) => {
            i.d(t, {
                hD: () => r,
                lK: () => a
            });
            let n = new(i(815048)).O2("MaybeMarketplaceReviewNudge", () => i.e(54215).then(i.bind(i, 398271))),
                r = (0, i(815048)._h)(n, e => e.MaybeMarketplaceReviewNudge),
                o = new(i(815048)).O2("MarketplaceReviewNudge", () => i.e(2501).then(i.bind(i, 154891))),
                a = (0, i(815048)._h)(o, e => e.MarketplaceReviewNudge)
        },
        88020: (e, t, i) => {
            i.d(t, {
                b: () => a
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                width: i(104509).Ev.default,
                height: i(104509).Ev.default,
                marginInlineEnd: 6
            };

            function a(e) {
                let {
                    store: t,
                    isInvalidPage: n
                } = e;
                return i(986939).A.isMobile || n ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(934036).A, {
                        store: t,
                        buttonPopupStore: i(19750).A
                    }), (0, r.jsx)("div", {
                        style: i(370838).R1()
                    }), (0, r.jsx)(l, {
                        store: t
                    })]
                })
            }

            function l(e) {
                let {
                    store: t
                } = e, a = (0, i(533992).v3)(), l = (0, i(321543).x3)(a), s = (0, i(682985).K8)(() => {
                    let {
                        publicPageData: e
                    } = i(686494).A.state;
                    return null == e ? void 0 : e.isDLSViewer
                }, []), d = (0, i(682985).K8)(() => i(891711).hn(t), [t]), c = (0, n.useCallback)(async () => {
                    (0, i(510504).L)({
                        variant: "open_notion"
                    });
                    let e = i(728372).AppStoreCurrentUserRootStore.state,
                        t = null == e ? void 0 : e.getSpaceViewStores();
                    if (s && (!t || 0 === t.length)) return void await (0, i(807717).startOnboarding)(a, {
                        type: "create-or-join",
                        source: "topbar"
                    });
                    let n = s ? i(168962).JZ.home : i(168962).JZ.root;
                    await (0, i(295615).VE)(a, {
                        utmContent: "topbar_cta",
                        nextRoute: n
                    })
                }, [a, s]), u = (0, n.useCallback)(async () => {
                    (0, i(510504).L)({
                        variant: "try_notion"
                    }), await (0, i(295615).VE)(a, {
                        utmContent: "topbar_cta",
                        nextRoute: i(168962).JZ.signup
                    })
                }, [a]);
                return d ? null : l ? (0, r.jsxs)(i(988022).p, {
                    onClick: c,
                    children: [(0, i(898378).notionTintableIcon)(o), (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Open Notion",
                        id: "topbar.publicPage.cta.label.open"
                    })]
                }) : (0, r.jsxs)(i(988022).p, {
                    onClick: u,
                    children: [(0, i(898378).notionTintableIcon)(o), (0, r.jsx)(i(109939).sA, {
                        defaultMessage: "Try Notion",
                        id: "topbar.publicPage.cta.label.try"
                    })]
                })
            }
        },
        97143: (e, t, i) => {
            i.d(t, {
                L: () => n
            });
            let n = 700
        },
        121930: (e, t, i) => {
            i.d(t, {
                w: () => r
            });
            let n = {
                    UncollectibleExperienceOverlay: new(i(815048)).O2("UncollectibleExperienceOverlay", async () => i.e(36432).then(i.bind(i, 575220)))
                },
                r = (0, i(815048)._h)(n.UncollectibleExperienceOverlay, e => e.UncollectibleExperienceOverlay)
        },
        127338: (e, t, i) => {
            i.d(t, {
                x: () => r
            });
            let n = new(i(815048)).O2("BannersRenderer", async () => Promise.all([i.e(75134), i.e(9773), i.e(40537), i.e(96346), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(23519), i.e(63771), i.e(53847), i.e(17250), i.e(26997), i.e(73259), i.e(33503), i.e(48486), i.e(96579), i.e(30532), i.e(73588), i.e(69684), i.e(76298), i.e(84444), i.e(23644), i.e(2337), i.e(31190), i.e(89563), i.e(61915), i.e(79563), i.e(74936), i.e(98608), i.e(87569), i.e(94153)]).then(i.bind(i, 309203))),
                r = (0, i(815048)._h)(n, e => e.BannersRenderer)
        },
        128743: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightLeftIcon: () => r,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                r = (0, i(104509).wt)("arrowStraightLeft", n, "default")
        },
        156555: (e, t, i) => {
            i.d(t, {
                X: () => n
            });

            function n(e) {
                return (0, i(682985).K8)(() => {
                    var t;
                    let i = null == (t = e.getState()) ? void 0 : t.dismissedExpiresAt,
                        n = Date.now();
                    return !!i && !!(i > n)
                }, [e])
            }
        },
        162859: (e, t, i) => {
            i.d(t, {
                JN: () => s,
                QB: () => n,
                Sx: () => r,
                Wt: () => l,
                hR: () => a,
                pT: () => o,
                rU: () => d
            });
            let n = (0, i(815048)._h)(i(734007).U, e => e.GetNotifiedFor),
                r = (0, i(815048)._h)(i(734007).U, e => e.UpdateSidebar),
                o = (0, i(815048)._h)(i(734007).U, e => e.MobileInboxPopup),
                a = (0, i(815048)._h)(i(734007).U, e => e.InboxActionsMenu),
                l = (0, i(815048)._h)(i(734007).U, e => e.UnreadMentionsBadge),
                s = (0, i(815048)._h)(i(734007).U, e => e.NotificationInboxPanelContent),
                d = (0, i(815048)._h)(i(734007).U, e => e.AnimatedEmojiBadge)
        },
        181307: (e, t, i) => {
            i.d(t, {
                Ay: () => el,
                gj: () => ev
            }), i(16280), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(737550);
            var n = i(296540);
            let r = (0, i(815048)._h)(new(i(815048)).O2("LibraryPageContainer", async () => await Promise.all([i.e(96579), i.e(23858)]).then(i.bind(i, 393370))), e => e.LibraryPageContainer),
                o = (0, i(815048)._h)(new(i(815048)).O2("LibraryRoute", async () => await Promise.all([i.e(96579), i.e(28215)]).then(i.bind(i, 722955))), e => e.LibraryRoute),
                a = {
                    MeetingsPageContainer: new(i(815048)).O2("MeetingsPageContainer", () => Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(26361), i.e(32350), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(45213), i.e(53847), i.e(12354), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(12001), i.e(40198), i.e(31243), i.e(14886), i.e(39225), i.e(87971), i.e(2626), i.e(64453), i.e(4779), i.e(55067), i.e(90735), i.e(50354), i.e(75484), i.e(20957), i.e(3055), i.e(24394), i.e(43024)]).then(i.bind(i, 715249)))
                },
                l = (0, i(815048)._h)(a.MeetingsPageContainer, e => e.MeetingsPageContainer);
            var s = i(474848);
            let d = new(i(815048)).O2("mobileActionBar", async () => {
                    let [{
                        default: e
                    }, {
                        MobileActionBar: t
                    }, {
                        NativeMobileActionBar: n
                    }] = await Promise.all([Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(29216), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(21969), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(18682), i.e(79349), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(60262), i.e(72805), i.e(91100), i.e(9817), i.e(47302), i.e(36441), i.e(75189), i.e(28663), i.e(47281), i.e(75234), i.e(66200), i.e(69626), i.e(88004), i.e(35118), i.e(94849), i.e(9914), i.e(95150), i.e(68028), i.e(15975), i.e(87087), i.e(11719), i.e(27207), i.e(42709), i.e(9806), i.e(75559), i.e(30119), i.e(26665), i.e(12037), i.e(49222)]).then(i.bind(i, 210274)), Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(29216), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(21969), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(18682), i.e(79349), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(60262), i.e(72805), i.e(91100), i.e(9817), i.e(47302), i.e(36441), i.e(75189), i.e(28663), i.e(47281), i.e(75234), i.e(66200), i.e(69626), i.e(88004), i.e(35118), i.e(94849), i.e(9914), i.e(95150), i.e(68028), i.e(15975), i.e(87087), i.e(11719), i.e(27207), i.e(42709), i.e(9806), i.e(75559), i.e(30119), i.e(26665), i.e(12037), i.e(49222)]).then(i.bind(i, 223741)), Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(29216), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(39726), i.e(42534), i.e(86662), i.e(6212), i.e(21969), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(18682), i.e(79349), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(60262), i.e(72805), i.e(91100), i.e(9817), i.e(47302), i.e(36441), i.e(75189), i.e(28663), i.e(47281), i.e(75234), i.e(66200), i.e(69626), i.e(88004), i.e(35118), i.e(94849), i.e(9914), i.e(95150), i.e(68028), i.e(15975), i.e(87087), i.e(11719), i.e(27207), i.e(42709), i.e(9806), i.e(75559), i.e(30119), i.e(26665), i.e(12037), i.e(49222)]).then(i.bind(i, 734627))]);
                    return {
                        MobileActionBarWrapper: e,
                        MobileActionBar: t,
                        NativeMobileActionBar: n
                    }
                }, {
                    waitUntilReadyToLoad: () => i(728372).default.waitUntilInitialRenderComplete()
                }),
                c = (0, i(815048)._h)(d, e => e.MobileActionBar),
                u = (0, i(815048)._h)(d, e => e.MobileActionBarWrapper),
                p = (0, i(815048)._h)(d, e => e.NativeMobileActionBar);

            function h({
                store: e,
                shouldShowMoveTo: t
            }) {
                var r;
                let o = (0, i(533992).v3)(),
                    a = null == (r = o.mobileNative) ? void 0 : r.api.renderMobileActionBar,
                    l = (0, n.useCallback)(t => {
                        let {
                            isMobileNative: n
                        } = o.device;
                        return (0, s.jsx)(c, {
                            stores: t,
                            position: n ? i(533357).n.Bottom : i(533357).n.Floating,
                            currentBlockStore: e
                        })
                    }, [o.device, e]);
                return o.device.isMobileNative ? (0, s.jsx)(u, {
                    currentBlockStore: e,
                    isNativeMobileActionBar: !0,
                    makeActionBarComponent: i => (0, s.jsx)(p, {
                        renderApi: a,
                        stores: i,
                        currentBlockStore: e,
                        shouldShowMoveTo: t,
                        fallbackRenderer: l
                    })
                }) : (0, s.jsx)(u, {
                    currentBlockStore: e,
                    isNativeMobileActionBar: !1,
                    makeActionBarComponent: l
                })
            }
            let g = new(i(815048)).O2("SavePageToOPFS", () => i.e(82094).then(i.bind(i, 877306))),
                b = (0, i(815048)._h)(g, e => e.SavePageToOPFS);

            function v() {
                var e;
                let t, r = (0, i(533992).v3)(),
                    o = (0, i(682985).O$)(i(205885).e);
                return (0, n.useEffect)(() => {
                    o || (0, i(399861).j)({
                        type: "page_error_indicator"
                    })
                }, [o]), t = o ? (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "Oops, there was an error loading this page. Refresh to load it again.",
                    id: "pageErrorIndicator.loadingError.message"
                }) : r.defaultRecordCache.persistedRecordCache ? (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "Please go online to load this page, then you’ll be able to access it while offline.",
                    id: "pageOfflineIndicator.hasLocalData.message"
                }) : (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "Oops, you seem to be offline. Please go online to view this page.",
                    id: "pageOfflineIndicator.noLocalData.message"
                }), (0, s.jsxs)("div", {
                    style: (e = r, {
                        height: "100%",
                        minHeight: `calc(100vh - ${2*i(801113).ek(e.device.isElectronMac)}px)`,
                        paddingInlineStart: i(986939).A.isMobile ? 16 : 32,
                        paddingInlineEnd: i(986939).A.isMobile ? 16 : 32,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }),
                    children: [(0, s.jsx)("div", {
                        style: {
                            fontSize: i(986939).A.isMobile ? 18 : 32,
                            marginBottom: 8,
                            textAlign: "center",
                            color: i(632079).oZ.uiBlack,
                            maxWidth: 640,
                            lineHeight: 1.3
                        },
                        children: t
                    }), (0, s.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        size: "lg",
                        onClick: () => window.location.reload(),
                        children: (0, s.jsx)(i(109939).sA, {
                            defaultMessage: "Refresh",
                            id: "pageErrorIndicator.reloadButton.label"
                        })
                    })]
                })
            }
            let m = {
                icon: {
                    width: 29,
                    height: 24,
                    fill: i(632079).Tj.text.secondary,
                    marginBottom: 8
                },
                title: {
                    fontWeight: i(699422).Wy.medium,
                    color: i(632079).Tj.text.secondary,
                    textAlign: "center"
                },
                description: {
                    color: i(632079).Tj.text.secondary,
                    textAlign: "center"
                },
                button: {
                    marginTop: 8
                }
            };

            function f({
                isOfflineAndUnavailable: e
            }) {
                let t, r, o = (0, i(533992).v3)(),
                    a = (0, i(682985).O$)(i(205885).e);
                (0, n.useEffect)(() => {
                    a || (0, i(399861).j)({
                        type: "page_error_indicator"
                    })
                }, [a]);
                let l = (0, i(960253).I)(() => ({
                    container: {
                        height: "100%",
                        minHeight: `calc(100vh - ${2*i(801113).ek(o.device.isElectronMac)}px)`,
                        paddingInlineStart: i(986939).A.isMobile ? 16 : 32,
                        paddingInlineEnd: i(986939).A.isMobile ? 16 : 32,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }), [o.device]);
                return e ? (t = (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "This page is not available while offline.",
                    id: "pageOfflineIndicator.unavailableError.title"
                }), r = (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "Please return online to access this content{hasLocalData, select, true { or sync the page} other {}}.",
                    id: "pageOfflineIndicator.unavailableError.description",
                    values: {
                        hasLocalData: !!o.defaultRecordCache.persistedRecordCache
                    }
                })) : (t = (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "Oops, there was an error loading this page.",
                    id: "pageErrorIndicator.loadingError.title"
                }), r = (0, s.jsx)(i(109939).sA, {
                    defaultMessage: "Refresh to load it again.",
                    id: "pageErrorIndicator.loadingError.description"
                })), (0, s.jsxs)("div", {
                    style: l.container,
                    children: [a ? (0, s.jsx)(i(16275).I, {
                        icon: i(789777).exclamationMarkTriangleFillIcon,
                        style: m.icon
                    }) : (0, s.jsx)(i(16275).I, {
                        icon: i(460237).C,
                        style: m.icon
                    }), (0, s.jsx)("div", {
                        style: m.title,
                        children: t
                    }), (0, s.jsx)("div", {
                        style: m.description,
                        children: r
                    }), a ? (0, s.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        style: m.button,
                        size: "lg",
                        onClick: () => window.location.reload(),
                        children: (0, s.jsx)(i(109939).sA, {
                            defaultMessage: "Refresh",
                            id: "pageErrorIndicator.reloadButton.label"
                        })
                    }) : void 0]
                })
            }
            let x = function({
                    isOfflineAndUnavailable: e
                }) {
                    return (0, i(83208).X)("download_for_offline") ? (0, s.jsx)(f, {
                        isOfflineAndUnavailable: e
                    }) : (0, s.jsx)(v, {})
                },
                S = new(i(815048)).O2("MobilePersonProfileContainer", async () => await Promise.all([i.e(21969), i.e(47414), i.e(98821), i.e(77470), i.e(80068), i.e(13462)]).then(i.bind(i, 752392))),
                y = (0, i(815048)._h)(S, e => e.MobilePersonProfileContainer);

            function w({
                store: e
            }) {
                let t = (0, i(533992).Y0)(),
                    [r, o] = (0, n.useState)(!0),
                    [a, l] = (0, n.useState)(!1),
                    d = (0, n.useRef)(0),
                    [c, u] = (0, n.useState)(null),
                    {
                        shouldRenderPublicPageTopbar: p
                    } = (0, i(319643).Im)({
                        store: e
                    }),
                    h = (0, i(682985).K8)(() => !i(891711).yr(e), [e]),
                    [{
                        value: g
                    }] = (0, i(97668).Yb)(async () => i(891711).wT(e, h), [e, h]),
                    b = (0, i(682985).K8)(() => {
                        var t;
                        return null == (t = (0, i(891711).GN)(e)) || null == (t = t.getSiteStore()) ? void 0 : t.id
                    }, [e]),
                    v = (0, i(533992).v3)();
                (0, n.useEffect)(() => {
                    g && b && (0, i(104310).u)({
                        event: {
                            eventName: "public_site_mobile_bottom_bar_displayed",
                            eventProperties: {
                                site_id: b
                            }
                        }
                    })
                }, [g, b, v, e.id]);
                let m = (0, i(682985).K8)(() => i(257130).A.state.elementRef ? ? {
                        current: void 0
                    }, []),
                    f = (0, i(239160).yE)(m);
                (0, n.useEffect)(() => {
                    let e = () => {
                        l(!0), document.removeEventListener("touchstart", e)
                    };
                    return a || document.addEventListener("touchstart", e), () => {
                        document.removeEventListener("touchstart", e)
                    }
                }, [a]), (0, n.useEffect)(() => {
                    if (!a || void 0 === f) return;
                    let e = f - d.current;
                    (d.current = f, 0 === f) ? o(!0): Math.abs(e) >= 5 && (e > 0 && f > 50 ? o(!1) : e < 0 && o(!0))
                }, [f, a]);
                let x = (0, n.useCallback)(() => {
                        u("share")
                    }, []),
                    S = (0, n.useCallback)(() => {
                        u(null)
                    }, []),
                    y = (0, i(960253).I)(() => ({
                        shareButtonWrapper: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 6,
                            border: "none",
                            overflow: "hidden",
                            width: "100%",
                            backgroundColor: "share" === c ? i(632079).Tj.background.secondary : "transparent",
                            transition: "background-color 20ms ease-in"
                        },
                        bottomBar: {
                            position: "fixed",
                            height: 50,
                            bottom: 0,
                            insetInlineStart: 0,
                            insetInlineEnd: 0,
                            width: "100%",
                            backgroundColor: i(632079).Tj.background.primary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "8px 16px",
                            zIndex: 1e3,
                            transform: r ? "translateY(0)" : "translateY(100%)",
                            transition: "transform 0.3s ease-in-out"
                        }
                    }), [r, c]);
                return g && i(986939).A.isMobile && !t.isMobileNative && p ? (0, s.jsx)("div", {
                    style: y.bottomBar,
                    children: (0, s.jsx)("button", {
                        style: y.shareButtonWrapper,
                        onTouchStart: x,
                        onTouchEnd: S,
                        onTouchCancel: S,
                        children: (0, s.jsx)(i(462180).L, {
                            store: e,
                            buttonPopupStore: i(19750).A,
                            button_location: "bottombar"
                        })
                    })
                }) : null
            }

            function j(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "search_post_click_page_interaction",
                        eventProperties: t
                    }
                })
            }
            let P = new(i(245541)).R({
                key: "getting-started-page-redirects",
                namespace: i(274919).Bq,
                important: !1,
                trackingType: "necessary"
            });

            function A(e) {
                let t = k();
                if (t[e]) {
                    let i = { ...t
                    };
                    delete i[e], P.setState(Object.keys(i).length > 0 ? i : void 0)
                }
            }

            function k() {
                let e = P.getState();
                if (!e) return {};
                let t = Date.now() - 36e5,
                    i = {},
                    n = !1;
                for (let [r, o] of Object.entries(e)) o.timestamp > t ? i[r] = o : n = !0;
                return n && P.setState(Object.keys(i).length > 0 ? i : void 0), i
            }
            let M = new(i(815048)).O2("LibraryTopbar", () => i.e(65500).then(i.bind(i, 918030))),
                _ = (0, i(815048)._h)(M, e => e.LibraryTopbar),
                C = new(i(815048)).O2("TemplateGalleryPublicPageTopbar", () => Promise.all([i.e(75134), i.e(33503), i.e(4460), i.e(63111)]).then(i.bind(i, 571476))),
                I = (0, i(815048)._h)(C, e => e.TemplateGalleryPublicPageTopbar),
                T = new(i(815048)).O2("MeetTopbar", () => i.e(19514).then(i.bind(i, 749583))),
                E = (0, i(815048)._h)(T, e => e.MeetTopbar),
                B = new(i(815048)).O2("PersonalHomeTopbar", () => Promise.all([i.e(68028), i.e(35210)]).then(i.bind(i, 197411))),
                O = (0, i(815048)._h)(B, e => e.PersonalHomeTopbar),
                K = new(i(815048)).O2("PublicSiteBanner", async () => await i.e(46743).then(i.bind(i, 616750))),
                R = (0, i(815048)._h)(K, e => e.PublicSiteBanner),
                L = new(i(815048)).O2("LoggedOutAppBanner", async () => await Promise.all([i.e(75134), i.e(33503), i.e(30214)]).then(i.bind(i, 974983))),
                D = (0, i(815048)._h)(L, e => e.LoggedOutAppBanner),
                N = new(i(815048)).O2("PublicSharingTopbar", () => i.e(68224).then(i.bind(i, 595386))),
                V = (0, i(815048)._h)(N, e => e.PublicSharingTopbar),
                z = new(i(815048)).O2("topbarActionButtons", () => Promise.all([i.e(55373), i.e(36192), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(94849), i.e(27207), i.e(54928)]).then(i.bind(i, 282276))),
                H = (0, i(815048)._h)(z, e => e.TopbarActionButtons);
            (0, i(815048)._h)(new(i(815048)).O2("topbar", () => i.e(53179).then(i.bind(i, 722716))), e => e.TopbarFavoriteButton);
            let F = (0, i(815048)._h)(new(i(815048)).O2("offlineDownloadIndicator", () => i.e(71739).then(i.bind(i, 672))), e => e.OfflineDownloadIndicator),
                U = {
                    fontSize: 14,
                    paddingInlineStart: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                W = {
                    flexGrow: 1,
                    flexShrink: 1
                };

            function $(e) {
                let {
                    store: t,
                    isInvalidPage: r,
                    showSidebarButton: o,
                    hideActionButtons: a,
                    shouldRenderTemplateGalleryTopbar: l,
                    handleClickTopbar: d,
                    handleMouseDown: c
                } = e, u = (0, i(533992).v3)(), p = n.useMemo(() => (0, i(899737).d)(t.id), [t.id]), h = (0, i(682985).K8)(() => t.isFormBlock(), [t]), g = (0, i(853284).U)(), b = (0, i(682985).K8)(() => g && (0, i(829435).s)(t.id), [t, g]), v = (0, i(682985).K8)(() => (0, i(142484).q)(u, t, t.getSpaceStore()) && !(0, i(470641).g)(), [u, t]), m = (0, i(119965).V)(), f = (0, i(682985).K8)(() => t.canEditCollection(), [t]), x = (0, i(440601).Kh)({
                    shouldRenderTemplateGalleryTopbar: l
                }), S = (0, i(682985).K8)(() => t.getIcon(), [t]), y = (0, i(235364).m)({
                    location: "DefaultTopbar"
                }), w = (0, i(83208).X)("content_reskin_v2"), j = (0, i(83208).X)("content_reskin_v2_toggle"), P = i(986939).A.isMobile ? 24 : 20, A = (0, i(83208).X)("breadcrumb_browser") && !i(986939).A.isMobile;
                return (0, s.jsx)(i(318981).A, {
                    store: t,
                    disableRectangularSelection: !0,
                    disableEditNearestBlock: !0,
                    render: () => (0, s.jsxs)("div", {
                        style: x,
                        onClick: d,
                        onMouseDown: c,
                        onDoubleClick: i(319643).mz,
                        children: [o ? (0, s.jsx)(i(457196).z, {}) : void 0, (0, s.jsx)(i(554810)._, {
                            topbarFeatureController: y
                        }), (0, s.jsxs)(i(337336).K, {
                            from: "DefaultTopbar.Left",
                            fallback: ({
                                error: e,
                                errorId: t
                            }) => (0, s.jsx)(i(380629).W, {
                                error: e,
                                errorId: t,
                                iconSize: 20
                            }),
                            children: [r || h || b ? void 0 : (0, s.jsx)(X, {
                                enabled: A,
                                children: (0, s.jsx)(i(7588).oK, {
                                    route: p,
                                    style: i(370838).lx(),
                                    maxAncestorCount: 2,
                                    ancestorMaxWidth: 160,
                                    currentPageMaxWidth: 240,
                                    showCurrentPageControls: !0
                                })
                            }), j ? (0, s.jsxs)(i(4458).fI, {
                                gap: 4,
                                children: [(0, s.jsx)(i(354491).d, {
                                    on: w,
                                    onClick: () => {
                                        i(473556).default.updateLocalOverrideGate("content_reskin_v2", !w)
                                    }
                                }), (0, s.jsx)(i(603651).W, {
                                    tooltipWidth: 300,
                                    tooltipTitle: (0, s.jsx)(i(109939).sA, {
                                        id: "content_reskin_v2_tooltip_title",
                                        defaultMessage: "Enable new block spacings"
                                    }),
                                    tooltipDescription: (0, s.jsx)(i(109939).sA, {
                                        id: "content_reskin_v2_tooltip_description",
                                        defaultMessage: "This toggles new spacing between blocks."
                                    })
                                })]
                            }) : void 0, h ? (0, s.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                minWidth: 0,
                                children: [(0, s.jsx)(i(884877).A, {
                                    size: 6
                                }), S ? (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(i(569553).B6, {
                                        disabled: !0,
                                        icon: S,
                                        iconRecordCategory: (0, i(569553).Te)(t),
                                        isEmptyPage: !1,
                                        size: P,
                                        emojiSize: P,
                                        largeIcon: !0
                                    }), (0, s.jsx)(i(884877).A, {
                                        size: 6
                                    })]
                                }) : void 0, (0, s.jsx)(i(627918).A, {
                                    store: t,
                                    removeIfEmpty: !0,
                                    style: U
                                }), (0, s.jsx)(i(884877).A, {
                                    size: 8
                                })]
                            }) : void 0, f ? (0, s.jsx)(i(868458).A, {
                                store: t
                            }, t.id) : void 0, r ? void 0 : (0, s.jsx)(i(854862).A, {}), (0, s.jsx)(F, {
                                blockStore: t
                            })]
                        }), (0, s.jsx)("div", {
                            style: W
                        }), (0, s.jsx)(i(337336).K, {
                            from: "DefaultTopbar.Right",
                            fallback: ({
                                error: e,
                                errorId: t
                            }) => (0, s.jsx)(i(380629).W, {
                                error: e,
                                errorId: t,
                                iconSize: 20
                            }),
                            children: m || i(986939).A.isMobile || v || a ? void 0 : (0, s.jsx)(H, {
                                store: t,
                                isInvalidPage: r
                            })
                        })]
                    })
                })
            }

            function X(e) {
                return e.enabled ? (0, s.jsx)(i(858778).H.Provider, {
                    value: !0,
                    children: e.children
                }) : e.children
            }
            let G = new(i(815048)).O2("PublicTopbar", () => Promise.all([i.e(75134), i.e(33503), i.e(4460)]).then(i.bind(i, 357767))),
                q = (0, i(815048)._h)(G, e => e.PublicTopbar),
                Y = n.forwardRef(function(e, t) {
                    let n = (0, i(533992).v3)(),
                        {
                            device: r
                        } = n,
                        {
                            store: o
                        } = e,
                        a = (0, i(212674).t)({
                            store: o
                        }),
                        l = (0, i(682985).K8)(() => i(819356).p.state.banners.some(e => "LoggedOutAppBanner" === e.id), []),
                        d = (0, i(682985).K8)(() => i(652595).W.state.banners.some(e => "PublicSiteBanner" === e.id), []),
                        c = (0, i(682985).K8)(() => i(896597).A.state.isFullScreen, []),
                        u = (0, i(682985).K8)(() => (0, i(712358).K)(n), [n]),
                        p = (0, i(682985).O$)((0, i(846044).e)(n)),
                        h = (0, i(682985).O$)(i(984858).sidebarElectronMousePeekStore),
                        g = (0, i(682985).O$)(i(584257).b),
                        b = (0, i(682985).K8)(() => i(550830).default.isVisible(), []),
                        v = !r.isElectron || g || c ? i(828432).N_7 : `${i(828432).N_7} ${i(828432).sbV}`,
                        m = (0, i(440601).U)({
                            store: o,
                            shouldRenderTemplateGalleryTopbar: a,
                            isBrowserFullScreen: c
                        }),
                        f = (0, i(319643).ky)();
                    return (0, s.jsxs)("header", {
                        style: m.header,
                        ref: t,
                        children: [l ? (0, s.jsx)(D, {}) : void 0, d ? (0, s.jsx)(R, {}) : void 0, f ? (0, s.jsx)(i(387939).C, {}) : void 0, (0, s.jsx)("div", {
                            style: m.container,
                            className: v,
                            onFocus: i(319643).lE,
                            onBlur: i(319643).c8,
                            children: (0, s.jsx)(i(337336).K, {
                                from: "Topbar",
                                fallback: ({
                                    error: e,
                                    errorId: t
                                }) => (0, s.jsx)(i(4458).fI, {
                                    className: i(828432).N_7,
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    width: "100%",
                                    height: (0, i(801113).ek)(r.isElectronMac),
                                    maxWidth: "100vw",
                                    paddingInlineEnd: 8,
                                    children: (0, s.jsx)(i(380629).W, {
                                        error: e,
                                        errorId: t,
                                        iconSize: 20
                                    })
                                }),
                                children: (0, s.jsx)(Z, { ...e,
                                    shouldRenderTemplateGalleryTopbar: a
                                })
                            })
                        }), h && g && p && !u && !b ? (0, s.jsx)(i(835051).k, {
                            style: m.electronTopbarSidebarMousePeekArea
                        }) : void 0]
                    })
                }),
                J = {
                    flexGrow: 1,
                    flexShrink: 1
                };

            function Q({
                store: e,
                isInvalidPage: t
            }) {
                let n = (0, i(440601).Kh)({
                        shouldRenderTemplateGalleryTopbar: !1
                    }),
                    r = (0, i(235364).m)({
                        location: "TrustedDomainPage"
                    });
                return (0, s.jsxs)("div", {
                    style: n,
                    onDoubleClick: i(319643).mz,
                    children: [(0, s.jsx)(i(554810)._, {
                        topbarFeatureController: r
                    }), (0, s.jsx)("div", {
                        style: J
                    }), (0, s.jsx)(i(88020).b, {
                        store: e,
                        isInvalidPage: t
                    })]
                })
            }

            function Z({
                shouldRenderTemplateGalleryTopbar: e,
                store: t,
                routerState: r,
                isInvalidPage: o,
                isElectron: a,
                showSidebarButton: l,
                hideActionButtons: d
            }) {
                let c = (0, i(533992).v3)(),
                    u = (0, n.useRef)(0),
                    p = (0, n.useRef)(0),
                    h = (0, n.useCallback)(() => {
                        u.current = window.screenX, p.current = window.screenY
                    }, []),
                    g = (0, n.useCallback)(e => {
                        let t = window.screenX,
                            n = window.screenY;
                        u.current === t && p.current === n && (e.target === e.currentTarget && (0, i(525779).clear)({
                            environment: c
                        }), (0, i(705660).SQ)(e, i(705660).y$.Click, () => {
                            i(270912).Cx(c)
                        }))
                    }, [c]),
                    {
                        shouldRenderPublicPageTopbar: b,
                        shouldRenderPublicShareLinkTopbar: v,
                        shouldRenderLoggedOutSidebarButton: m
                    } = (0, i(319643).Im)({
                        store: t
                    }),
                    {
                        isPersonalHome: f,
                        isMeet: x,
                        isLibrary: S,
                        isLibraryPage: y,
                        shouldRenderTrustDomainPageTopbar: w
                    } = (0, i(682985).K8)(() => {
                        if (!t) return {
                            isMeet: "meet" === r.route.name,
                            isLibrary: "library" === r.route.name,
                            isPersonalHome: !1,
                            isLibraryPage: !1,
                            shouldRenderPublicPageTopbar: !1,
                            shouldRenderTrustDomainPageTopbar: !1
                        };
                        let {
                            publicPageData: e
                        } = i(686494).A.state;
                        return {
                            isPersonalHome: t.isPersonalHomePage(),
                            isLibraryPage: t.isInLibraryBlock(),
                            isMeet: !1,
                            isLibrary: !1,
                            shouldRenderTrustDomainPageTopbar: null == e ? void 0 : e.isDLSViewer
                        }
                    }, [r.route, t]),
                    j = (0, i(682985).K8)(() => i(319643).i_({
                        store: t,
                        environment: c
                    }), [t, c]),
                    [{
                        status: P
                    }] = (0, i(97668).Yb)(async () => await i(686494).A.waitUntilLoaded(), []),
                    A = c.currentUser.isLoggedIn();
                if (!j || t && "pending" === P) return null;
                if (t && v) return (0, s.jsx)(V, {
                    showSidebarButton: l && (A || !A && m),
                    store: t,
                    isInvalidPage: o,
                    isElectron: a
                });
                if (b && t)
                    if (e) return (0, s.jsx)(I, {
                        blockStore: t,
                        isInvalidPage: o
                    });
                    else return (0, s.jsx)(q, {
                        store: t,
                        isInvalidPage: o
                    });
                return w && t ? (0, s.jsx)(Q, {
                    store: t,
                    isInvalidPage: o
                }) : f && t ? (0, s.jsx)(O, {
                    store: t,
                    isInvalidPage: o,
                    onClickTopbar: g,
                    onMouseDown: h
                }) : x ? (0, s.jsx)(E, {}) : S || y ? (0, s.jsx)(_, {}) : t ? (0, s.jsx)($, {
                    store: t,
                    isInvalidPage: o,
                    showSidebarButton: l,
                    hideActionButtons: d,
                    shouldRenderTemplateGalleryTopbar: e,
                    handleClickTopbar: g,
                    handleMouseDown: h
                }) : null
            }
            let ee = new(i(245541)).R({
                    key: "publicShareLinkEditDisclosureBannerPreference",
                    namespace: i(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                et = new(i(815048)).O2("Factory", async () => await Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(18965), i.e(34835), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(93430), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(28482), i.e(14369), i.e(74145), i.e(56308), i.e(58360), i.e(60262), i.e(18416), i.e(50354), i.e(91100), i.e(4287), i.e(38814), i.e(91636), i.e(34157), i.e(14023)]).then(i.bind(i, 989311))),
                ei = (0, i(815048)._h)(et, e => e.Factory),
                en = new(i(815048)).O2("SoftwareFactoryPage", async () => await i.e(41167).then(i.bind(i, 931139))),
                er = (0, i(815048)._h)(en, e => e.SoftwareFactoryPage),
                eo = new Set(["meet"]);

            function ea(e) {
                return (0, i(132702).Jx)(e.route)
            }
            let el = n.memo(function(e) {
                let t, a, d, c, u, p, g, b, {
                        store: v,
                        routerState: m
                    } = e,
                    f = "collectionViewStore" in e ? e.collectionViewStore : void 0,
                    x = (0, i(533992).v3)(),
                    {
                        RouterStore: S
                    } = x,
                    M = (0, i(533992).Y0)(),
                    {
                        navigate: _
                    } = (0, n.useContext)(i(44894).E),
                    C = (0, i(841690).B)(),
                    I = (0, i(841690).N)(),
                    T = "factory" === m.route.name;
                t = (0, i(533992).v3)(), a = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceViewStore), d = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id
                }, []), c = (0, i(109939).tz)(), u = (0, i(682985).K8)(() => {
                    let e = (0, i(599412).H)(c);
                    return (0, i(446504).q)(e)
                }, [c]), p = (0, i(682985).K8)(() => {
                    let e = (0, i(882061).J)({
                            environment: t
                        }),
                        n = i(218744).default.checkGate({
                            gateName: "private_pages_logged_in_no_workspace"
                        }),
                        r = d === u;
                    return e && n && r
                }, [t, u, d]), g = (0, i(682985).K8)(() => t.RouterStore.state.route.name, [t]), b = (0, i(682985).K8)(() => {
                    let e = null == a ? void 0 : a.getSharedPageStores(),
                        t = null == a ? void 0 : a.getPublicShareLinkPageStores(),
                        n = (null == e ? void 0 : e[0]) ? ? (null == t ? void 0 : t[0]);
                    return n ? (0, i(483227).Ay)({
                        store: n,
                        pageVisitSource: i(254656).y8.ExternalPagesSidebar
                    }) : void 0
                }, [a]), (0, n.useEffect)(() => {
                    if ("page" === g && d && b && p)
                        if (d === u) {
                            let e;
                            e = { ...k(),
                                [d]: {
                                    fallbackUrl: b,
                                    timestamp: Date.now()
                                }
                            }, P.setState(e)
                        } else A(d)
                }, [t, d, g, b, p, u]);
                let E = (0, n.useCallback)(e => {
                    i(41901).A.state && ("scroll" === e ? i(41901).A.state.hadScroll || (i(41901).A.setState({ ...i(41901).A.state,
                        hadScroll: !0
                    }), j(x, {
                        interactionType: e
                    })) : "click" === e ? i(41901).A.state.hadClick || (i(41901).A.setState({ ...i(41901).A.state,
                        hadClick: !0
                    }), j(x, {
                        interactionType: e
                    })) : "copy" === e ? i(41901).A.state.hadCopy || (i(41901).A.setState({ ...i(41901).A.state,
                        hadCopy: !0
                    }), j(x, {
                        interactionType: e
                    })) : (0, i(722371).HB)(e))
                }, [x]);
                (0, n.useEffect)(() => {
                    if (E) {
                        let e = () => {
                            E("copy")
                        };
                        return window.addEventListener("copy", e), () => window.removeEventListener("copy", e)
                    }
                }, [E]), (0, n.useEffect)(() => () => v && i(110047).O({
                    rootStore: v
                }), [v]), (0, n.useEffect)(() => {
                    ! function() {
                        try {
                            let e = (0, i(52628).w)(window.location.href),
                                t = k();
                            if (e && t[e]) {
                                let i = t[e].fallbackUrl;
                                A(e), window.location.replace(i)
                            }
                        } catch (e) {
                            return i(773352).log({
                                level: "error",
                                from: "checkAndHandleGettingStartedPageRedirect",
                                type: "error",
                                data: {
                                    miscDataToConvertToString: {
                                        error: e
                                    }
                                }
                            }), !1
                        }
                    }()
                }, []);
                let B = (0, i(682985).r6)(() => v ? i(827482).A.getMode(x, v, v.getSpaceStore()) : i(827482).s.disabled, [x, v]),
                    O = (0, i(682985).r6)(() => (0, i(576348).ZE)(B.state, v), [B, v]),
                    K = (0, i(682985).K8)(() => {
                        if (!v) return;
                        let {
                            presenceStore: e,
                            pageVisitStore: t
                        } = i(728372).default.state, n = v.getSpaceStore();
                        return {
                            isPeekRenderer: !1,
                            pageStore: v,
                            spaceStore: n,
                            spaceViewStore: n ? (0, i(593303).k)(n.id) : void 0,
                            presenceStore: e,
                            pageVisitStore: t,
                            publicEditModeStore: B,
                            arePublicEditCompletionsEnabledStore: O
                        }
                    }, [O, B, v]),
                    R = x.currentUser.isLoggedIn(),
                    {
                        isInvalidPage: L,
                        isHome: D,
                        libraryStore: N,
                        isPersonProfile: V,
                        shouldShowAddTo: z
                    } = (0, i(682985).K8)(() => {
                        if (!v) return {
                            isInvalidPage: !0,
                            isHome: !1,
                            libraryStore: void 0,
                            isPersonProfile: !1,
                            shouldShowAddTo: !1
                        };
                        let e = x.currentUser.id === v.getCreatedById() && v.getCreatedByTable() === i(832375).oo9;
                        return {
                            isInvalidPage: !!(!v.isDefined() || !v.canRead()),
                            isHome: "personal_home_page" === v.getType(),
                            libraryStore: v.isLibraryBlock() && v.isType("collection_view_page") ? v : void 0,
                            isPersonProfile: v.isPersonProfile(),
                            shouldShowAddTo: !!(m.route.showMoveTo && v.canEdit() && R && e)
                        }
                    }, [v, m.route, R, x.currentUser]);
                (0, n.useEffect)(() => {
                    var e;
                    if (!N) return;
                    let t = m.route;
                    if ("page" !== t.name) return;
                    let n = null == (e = (0, i(134273).N)(f)) ? void 0 : e.viewName;
                    _({
                        environment: x,
                        url: (0, i(631247).l9)({
                            spaceDomain: t.spaceDomain,
                            spaceId: N.getSpaceId(),
                            viewName: n,
                            peekViewBlockId: t.peekViewBlockId,
                            peekMode: t.peekMode,
                            addQueryParamForSpaceDomain: (0, i(700473).wasRequestedOnAlternateDomain)()
                        }),
                        redirect: !0
                    })
                }, [f, x, N, _, m.route]);
                let H = (0, i(682985).O$)(i(728372).AppStoreMainEditorCurrentBlockStore),
                    F = (0, i(682985).K8)(() => (0, i(846044).X)(x), [x]),
                    U = (0, i(682985).K8)(() => null == H ? void 0 : H.isPersonalHomePage(), [H]),
                    W = (0, i(682985).K8)(() => "meet" === m.route.name, [m.route.name]),
                    $ = U || W,
                    X = (0, i(682985).K8)(() => {
                        var e;
                        return !!(null == (e = i(584257).A.state.preferences) ? void 0 : e.isVibrancyEnabled)
                    }, []),
                    G = (0, i(682985).K8)(() => M.isTablet ? {
                        paddingBottom: x.WindowSizeStore.getSafePaddingBottomPx(0)
                    } : {}, [M.isTablet, x.WindowSizeStore]),
                    {
                        banners: q
                    } = (0, i(682985).O$)(i(465361).A),
                    J = (0, i(682985).K8)(() => {
                        let e = {
                            flexGrow: 0,
                            flexShrink: 1,
                            display: "flex",
                            flexDirection: "column",
                            background: U ? X ? `rgba(255, 255, 255, ${i(252426).a})` : (0, i(681693).Lu)({
                                isPhone: M.isPhone
                            }) : i(632079).Tj.background.primary,
                            zIndex: 1,
                            height: (() => {
                                switch (!0) {
                                    case $:
                                        return "100%";
                                    case i(986939).A.isMobile:
                                        return "100vh";
                                    default:
                                        return `calc(100vh - ${T?0:I}px)`
                                }
                            })(),
                            maxHeight: "100%",
                            position: $ && 0 === q.length ? "absolute" : "relative",
                            paddingBottom: $ && 0 === q.length ? G.paddingBottom : 0
                        };
                        if (!(0, i(845181).t)(x)) {
                            let t = i(984858).sidebarOpenStore.state;
                            (0, i(625906).o)(x) || (e.boxShadow = i(632079).Tj.shadow.outline.lg), e.pointerEvents = t ? "none" : "auto", e.transform = "translateX(0)"
                        }
                        return !F && M.isMobileNative && (e.pointerEvents = "auto", e.transform = "translateX(0px)"), e
                    }, [T, U, $, X, M.isPhone, M.isMobileNative, I, x, F, G, q]),
                    Q = (0, i(682985).K8)(() => "nativeTab" === S.state.route.name, [S]),
                    [Z, ee] = (0, i(682985).K8)(() => {
                        let e = (0, i(936221).U)(x),
                            t = e + (0, i(493739).Q)(x);
                        return [e, t]
                    }, [x]),
                    et = (0, i(682985).K8)(() => i(352202).Z8(), []),
                    en = (0, i(682985).K8)(() => i(550830).default.isTogglingToPanelModeState(), []),
                    el = (0, i(682985).K8)(() => i(984858).sidebarResizingStore.state.isResizing, []),
                    eu = (0, i(682985).O$)(i(984858).peekResizingStore),
                    ep = (0, i(682985).O$)(i(584257).b),
                    eh = (0, i(682985).K8)(() => (0, i(712358).K)(x), [x]),
                    eg = (0, i(682985).K8)(() => !ep && !eh && !i(550830).default.isPanelPinnedState(), [eh, ep]),
                    ev = (0, i(682985).K8)(() => i(353736).q.state.attached, []),
                    em = (0, i(960253).I)(() => ({
                        frameContainer: {
                            order: i(866217).A.appCursorListener.editor,
                            display: "flex",
                            flexDirection: "column",
                            width: M.isTablet ? "unset" : "100%",
                            overflow: M.isTablet ? "unset" : "hidden",
                            isolation: "auto",
                            position: "relative",
                            ...G
                        }
                    }), [M.isTablet, G]),
                    ef = (0, i(682985).O$)(i(825244).P),
                    ex = (0, i(682985).K8)(() => null == v ? void 0 : v.canEdit(), [v]),
                    eS = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceViewStore),
                    ey = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    ew = (0, i(604306).r)("lazier_right_sidebar", {
                        enableEventTrailLogging: !0
                    }),
                    ej = (0, i(682985).K8)(() => !i(986939).A.isMobile && !i(240935).eX.state, []),
                    eP = (0, i(682985).K8)(() => ej && (0, i(953099).N)(x), [ej, x]),
                    eA = (0, n.useRef)(!1);
                eP && (eA.current = !0);
                let ek = "on" === ew ? ej && (eP || eA.current) : ej;
                (0, n.useEffect)(() => {
                    i(670296).u.resetHeights()
                }, [null == H ? void 0 : H.id]);
                let eM = e.routerState.route,
                    e_ = M.isMobileNative && "page" === eM.name && !!eM.mobileEmbed,
                    eC = !e_ && (M.isTablet || M.isPhone && !eo.has(e.routerState.route.name)),
                    eI = (0, i(682985).K8)(() => eC && (0, i(319643).pF)({
                        device: x.device,
                        route: m.route
                    }), [x.device, m.route, eC]),
                    eT = i(986939).A.isMobile || T ? void 0 : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(Y, { ...e,
                            ref: C,
                            showSidebarButton: eg,
                            isElectron: M.isElectron,
                            isInvalidPage: L
                        }), M.isElectronWindows && !ep ? (0, s.jsx)(i(662886).K, {}) : void 0]
                    }),
                    eE = (0, s.jsxs)(i(654979).A, {
                        tag: "main",
                        id: "main",
                        animate: {
                            width: U ? ee : Z,
                            ...ev ? {} : {
                                translateX: et
                            }
                        },
                        skip: ep && el || eu || en || i(986939).A.isMobile || ef,
                        style: J,
                        className: i(828432).GtI,
                        children: [eC ? (0, s.jsx)(i(337336).K, {
                            from: "TopbarMobile",
                            fallback: ({
                                error: e,
                                errorId: t
                            }) => (0, s.jsx)(i(4458).fI, {
                                className: i(828432).byw,
                                justifyContent: "flex-end",
                                alignItems: "center",
                                width: "100%",
                                height: i(515378).s1,
                                maxWidth: "100vw",
                                paddingInlineEnd: 8,
                                children: (0, s.jsx)(i(380629).W, {
                                    error: e,
                                    errorId: t,
                                    iconSize: 26
                                })
                            }),
                            children: (0, s.jsx)(eb, {
                                route: m.route,
                                children: (0, s.jsx)(i(595417).JY, { ...e,
                                    isInvalidPage: L,
                                    shouldShowAddTo: z,
                                    isSidebarExpanded: eh,
                                    spaceStore: ey,
                                    spaceViewStore: eS
                                })
                            })
                        }) : void 0, q.length > 0 && !eI ? (0, s.jsx)(i(127338).x, {
                            banners: q,
                            bannerStore: i(465361).A
                        }) : void 0, D && v ? (0, s.jsx)(ed, {
                            store: v
                        }) : "meet" === m.route.name ? (0, s.jsx)(l, {}) : "library" === m.route.name ? (0, s.jsx)(o, {}) : "softwareFactory" === m.route.name ? (0, s.jsx)(er, {}) : "factory" === m.route.name ? (0, s.jsx)(ei, {
                            factoryId: m.route.factoryId
                        }) : V && v ? i(986939).A.isMobile && !M.isTablet ? (0, s.jsx)(y, {
                            personProfileStore: v,
                            routerState: ea(m) ? m : void 0
                        }) : (0, s.jsx)(i(554666).i, {
                            personProfileStore: v
                        }) : N ? (0, s.jsx)(r, {
                            store: N,
                            viewName: void 0
                        }) : v ? (0, s.jsx)(ec, {
                            store: v,
                            routerState: m,
                            maybeLogSearchInteractionEvent: E,
                            shouldShowAddTo: z
                        }) : null, R && i(986939).A.isMobile && v && !e_ ? (0, s.jsx)(h, {
                            store: v,
                            shouldShowMoveTo: !!((m.route.showMoveTo || M.isTablet) && ex)
                        }) : void 0, i(986939).A.isMobile && !M.isMobileNative && v ? (0, s.jsx)(w, {
                            store: v
                        }) : void 0]
                    }),
                    eB = ek && H && (0, s.jsx)(i(162859).Sx, {
                        currentBlockStore: H,
                        isElectronMac: x.device.isElectronMac
                    }),
                    eO = (0, i(682985).K8)(() => i(475097).default.state.open || i(273061).S.state.open, []),
                    eK = (0, i(604306).r)("lazier_peekrenderer", {
                        enableEventTrailLogging: !0
                    }),
                    eR = (0, i(119965).V)(),
                    eL = !i(986939).A.isMobile && ("on" !== eK || eO || !eR) && (0, s.jsx)(i(592599).t, {});
                return (0, s.jsx)(es, {
                    pageContext: K,
                    children: (0, s.jsxs)("div", {
                        className: Q ? "hidden" : "",
                        style: em.frameContainer,
                        children: [eT, eE, eB, eL]
                    })
                })
            });

            function es({
                pageContext: e,
                children: t
            }) {
                return e ? (0, s.jsx)(i(332136).q, {
                    value: e,
                    children: t
                }) : (0, s.jsx)(s.Fragment, {
                    children: t
                })
            }
            let ed = n.memo(function({
                store: e
            }) {
                return (0, s.jsx)(i(318981).A, {
                    disable: !0,
                    store: e,
                    isDefaultContainer: !0,
                    render: () => (0, s.jsx)(i(502498).VJ, {})
                })
            });

            function ec({
                store: e,
                routerState: t,
                maybeLogSearchInteractionEvent: r,
                shouldShowAddTo: o = !1
            }) {
                let a = (0, i(533992).v3)(),
                    {
                        RouterStore: l
                    } = a,
                    {
                        historyState: d
                    } = t,
                    {
                        currentLoadingContainerStore: c,
                        pageVisitStore: u
                    } = (0, i(682985).K8)(() => {
                        let {
                            currentLoadingContainerStore: e,
                            pageVisitStore: t
                        } = i(728372).default.state;
                        return {
                            currentLoadingContainerStore: e,
                            pageVisitStore: t
                        }
                    }, []),
                    p = d && (0, i(763230).Et)(d.scrollTop) ? d.scrollTop : void 0,
                    h = (0, i(682985).K8)(() => {
                        if ((0, i(142484).q)(a, e, e.getSpaceStore())) return !0;
                        let t = e.isCollectionView() ? (0, i(444610).U)(e) : void 0;
                        return !!(null != t && t.isDashboardView() || null != t && t.isDashboardWidget())
                    }, [a, e]),
                    g = (0, i(682985).K8)(() => !!(i(475097).default.isCenterPeekOpen() || i(752085).A.state.open), []),
                    b = (0, i(83208).X)("capture_page_load_record_stats") ? i(209401).t.forRootStore("Frame", e) : void 0;
                return (0, s.jsx)(i(318981).A, {
                    store: e,
                    isDefaultContainer: !0,
                    droppable: !0,
                    isRootContainer: !0,
                    disableRectangularSelection: h,
                    disable: g,
                    render: ({
                        selectableEvents: d,
                        selectableHoverMenuOverlay: h
                    }) => {
                        let g = i(807635).Cf(l),
                            v = {
                                pageStore: e,
                                pageVisitStore: u,
                                scrollToBlockIds: g,
                                scrollToDiscussionId: g.length ? void 0 : t.route.discussionId,
                                scrollToPosition: p,
                                observer: b,
                                onReady: () => {
                                    let e = t.skipSelection;
                                    void 0 !== e && l.update(e => ({ ...e,
                                        skipSelection: void 0
                                    })), i(89700).$(a, {
                                        animateScrollToBlocks: !1,
                                        skipSelection: e
                                    }), i(18922).f.setIsFrameReady(!0)
                                },
                                onDone: () => {
                                    e.isCollectionView() || "rendered" === i(728372).default.state.renderPhase || i(728372).default.setPageRendered()
                                },
                                render: ({
                                    scrollerRef: t,
                                    error: i,
                                    ready: n,
                                    initialRequestCompleted: a,
                                    endOfResultsReached: l,
                                    isCollectionInPage: c
                                }) => (0, s.jsx)(eu, {
                                    scrollerRef: t,
                                    store: e,
                                    error: i,
                                    ready: n,
                                    initialRequestCompleted: a,
                                    endOfResultsReached: l,
                                    isCollectionInPage: c,
                                    selectableEvents: d,
                                    selectableHoverMenuOverlay: h,
                                    maybeLogSearchInteractionEvent: r,
                                    shouldShowAddTo: o,
                                    observer: b
                                })
                            };
                        return (0, s.jsx)(n.Suspense, {
                            fallback: (0, s.jsx)(i(866147).A, {
                                isVisible: !0,
                                store: e
                            }),
                            children: (0, s.jsx)(i(757619).V, { ...v,
                                store: c,
                                observer: b
                            })
                        })
                    }
                }, e.id)
            }
            let eu = n.memo(function({
                    store: e,
                    error: t,
                    ready: r,
                    initialRequestCompleted: o,
                    endOfResultsReached: a,
                    isCollectionInPage: l,
                    selectableEvents: d,
                    selectableHoverMenuOverlay: c,
                    maybeLogSearchInteractionEvent: u,
                    scrollerRef: p,
                    shouldShowAddTo: h,
                    observer: g
                }) {
                    let v = (0, i(533992).v3)(),
                        m = (0, i(533992).Y0)(),
                        {
                            publicEditModeStore: f
                        } = (0, i(67499).S)() ? ? {},
                        x = (0, i(682985).K8)(() => (0, i(576348).ZE)(null == f ? void 0 : f.state, e), [f, e]),
                        S = (0, i(119965).V)(),
                        y = (0, n.useCallback)(e => {
                            if (i(862921).A.PageScroller = e, e) {
                                let t = e.getNode();
                                t instanceof HTMLElement && (p.current = t)
                            }
                        }, [p]),
                        w = (0, n.useCallback)(() => {
                            u("scroll")
                        }, [u]),
                        j = (0, n.useCallback)(e => {
                            d.onClick(e), u("click")
                        }, [u, d]),
                        P = (0, n.useCallback)(e => {
                            if (!v.device.isWindows) return;
                            e.preventDefault && e.preventDefault();
                            let t = p.current;
                            if (t) {
                                let e = t.clientHeight;
                                (0, i(284247).H)({
                                    element: t,
                                    environment: v,
                                    options: {
                                        top: -(.9 * e),
                                        left: 0,
                                        behavior: "smooth"
                                    }
                                })
                            }
                        }, [v, p]),
                        A = (0, n.useCallback)(e => {
                            if (!v.device.isWindows) return;
                            e.preventDefault && e.preventDefault();
                            let t = p.current;
                            if (t) {
                                let e = t.clientHeight;
                                (0, i(284247).H)({
                                    element: t,
                                    environment: v,
                                    options: {
                                        top: .9 * e,
                                        left: 0,
                                        behavior: "smooth"
                                    }
                                })
                            }
                        }, [v, p]),
                        k = (0, i(682985).K8)(() => e.isCollectionView(), [e]),
                        M = (0, i(682985).K8)(() => {
                            var e;
                            let t;
                            return e = v, "number" == typeof(t = (0, i(865594).Wj)(e.device)) ? `${t}px` : t
                        }, [v]),
                        _ = (0, i(960253).I)(() => ({
                            spinner: {
                                zIndex: 1,
                                opacity: .5,
                                marginTop: `calc(-${i(311336).K} / 2 - ${M} / 2)`,
                                marginBottom: 24,
                                marginInlineStart: "auto",
                                marginInlineEnd: "auto"
                            },
                            scroller: {
                                display: "flex",
                                flexDirection: "column",
                                zIndex: 1,
                                flexGrow: 1,
                                position: "relative",
                                ...r ? {} : {
                                    opacity: 0,
                                    pointerEvents: "none",
                                    height: 0
                                },
                                ...!k ? {
                                    alignItems: "center"
                                } : {}
                            }
                        }), [M, k, r]),
                        C = (0, i(682985).K8)(() => i(465361).A.state.banners.some(e => "over_free_block_limit" === e.contentKey), []),
                        I = (0, i(682985).K8)(() => (0, i(717274).Qe)(v), [v]),
                        T = (0, i(682985).K8)(() => i(475097).default.isSidePeekOpen() ? void 0 : r ? (0, i(994732).u)() : i(644154).A.All, [r]),
                        E = (0, i(682985).K8)(() => (0, i(676416).f)({
                            environment: v,
                            store: e
                        }), [v, e]),
                        B = i(22553).z.isEnabled;
                    return (0, s.jsx)(i(369064).N, {
                        capture: !0,
                        debugName: "FrameKeyboardArea",
                        onPageUp: P,
                        onPageDown: A,
                        children: (0, s.jsxs)(n.Fragment, {
                            children: [(0, s.jsxs)(i(126767).H, {
                                ref: y,
                                onScroll: w,
                                preventType: T,
                                type: E,
                                style: _.scroller,
                                store: i(257130).A,
                                ...d,
                                onClick: j,
                                children: [c, S || m.isPhone || !x ? void 0 : (0, s.jsx)(i(712155).H7, {
                                    scrollerStore: i(257130).A
                                }), S ? void 0 : (0, s.jsx)(i(872762).E, {
                                    scrollerStore: i(257130).A
                                }), !S && I && C ? (0, s.jsx)(i(429987).i, {}) : void 0, S ? void 0 : (0, s.jsx)(i(40915).hD, {
                                    blockStore: e
                                }), o ? (0, s.jsx)(ep, {
                                    store: e,
                                    error: t,
                                    shouldShowAddTo: h,
                                    observer: g
                                }) : void 0, !r || a || o && t ? void 0 : (0, s.jsx)(i(517334).k, {
                                    style: { ..._.spinner,
                                        fontSize: i(311336).K
                                    }
                                })]
                            }), !S && m.isPhone && x ? (0, s.jsx)(i(712155).H7, {
                                scrollerStore: i(257130).A
                            }) : void 0, S || m.isPhone || !x ? void 0 : (0, s.jsx)(i(712155).X9, {
                                scrollerKey: "Page"
                            }), (0, s.jsx)(i(866147).A, {
                                isVisible: !r,
                                store: e
                            }), B ? (0, s.jsx)(b, {
                                pageStore: e
                            }) : void 0]
                        })
                    })
                }),
                ep = n.memo(function({
                    store: e,
                    error: t,
                    shouldShowAddTo: r,
                    observer: o
                }) {
                    let {
                        pageVisitStore: a,
                        presenceStore: l,
                        currentLoadingContainerStore: d
                    } = (0, i(682985).K8)(() => {
                        let {
                            pageVisitStore: e,
                            presenceStore: t,
                            currentLoadingContainerStore: n
                        } = i(728372).default.state;
                        return {
                            pageVisitStore: e,
                            presenceStore: t,
                            currentLoadingContainerStore: n
                        }
                    }, []), c = (0, i(533992).v3)(), {
                        WindowSizeStore: u
                    } = c, p = (0, i(682985).K8)(() => u.state.height, [u]), [h, g] = (0, i(682985).K8)(() => {
                        let t = (0, i(936221).U)(c),
                            n = Math.max(i(335818).x6, t),
                            r = t + (0, i(493739).Q)(c);
                        return [(0, i(447036).RX)(e) && !e.isFullWidth() ? n : r, ev(c, p)]
                    }, [p, c, e]), b = (0, i(682985).K8)(() => i(475097).default.isSidePeekOpen() || i(475097).default.isSidePeekClosingStore.state, []), v = (0, i(473182).x9)(), m = (0, i(960253).I)(() => ({
                        pageViewBlockStyle: b ? {
                            width: h,
                            position: "absolute",
                            overflowX: "hidden",
                            insetInlineStart: 0
                        } : eg
                    }), [b, h]), f = (0, i(556583).y)(), S = (0, i(682985).K8)(() => !(!f || e.isReady()) && (0, i(597845).Wi)(c, e.id), [c, e, f]), y = (0, i(682985).K8)(() => {
                        if (!c.currentUser.isLoggedIn()) return !1;
                        let i = d && !d.state.endOfResultsReached,
                            n = e.isDefined() && !e.canRead();
                        return i && t || n
                    }, [c.currentUser, d, e, t]), w = (0, i(682985).K8)(() => (null == d ? void 0 : d.state.endOfResultsReached) === !1, [d]), j = (0, i(682985).K8)(() => e.canRead() && e.isDefined(), [e]), P = (0, i(682985).O$)(c.RouterStore), A = (0, i(682985).K8)(() => i(317035).b.state.topbar, []), k = (0, i(682985).K8)(() => {
                        let e = P.route;
                        return (!c.device.isMobileNative || "page" !== e.name || !e.mobileEmbed) && !r && (0, i(319643).pF)({
                            device: c.device,
                            route: e
                        }) && !!A
                    }, [c.device, P.route, r, A]);
                    ! function() {
                        let e = (0, i(533992).v3)(),
                            [t, r] = (0, n.useState)(!1),
                            o = (0, i(156555).X)(ee),
                            a = (0, i(109939).tz)(),
                            l = (0, i(682985).K8)(() => {
                                if (!i(728372).AppStoreSidebarSpaceViewStore.state || !i(728372).AppStoreCurrentUserRootStore.state || !(0, i(328765).S)() || !i(728372).AppStoreCurrentUserSettingsStore.state || o || !(0, i(470641).g)() || !e.currentUser.isLoggedIn()) return !1;
                                let t = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                                    n = null == t ? void 0 : t.getRole();
                                if (!n) return !1;
                                let r = (0, i(642157).ok)(n);
                                return !!t && (0, i(142484).q)(e, t, t.getSpaceStore()) && r
                            }, [e, o]),
                            d = () => {
                                i(436555).N2(), ee.setState({
                                    dismissedExpiresAt: (0, i(943003).g7)(90)
                                })
                            },
                            c = (0, i(682985).K8)(() => {
                                var e;
                                return null == (e = i(686494).A.getState().publicPageData) ? void 0 : e.publicAccessRole
                            }, []);
                        (0, n.useEffect)(() => {
                            l ? (r(!0), i(436555).D6({
                                durationMs: "keep",
                                label: a.formatMessage({
                                    defaultMessage: "When you start {permission}, your name, email and photo may become visible to anyone who can view the page.",
                                    id: "publicShareLinkEditDisclosureBanner.banner"
                                }, {
                                    permission: "comment_only" === c ? "commenting" : "editing"
                                }),
                                right: (0, s.jsx)(i(374533).A, {
                                    ariaLabel: a.formatMessage({
                                        defaultMessage: "Close",
                                        id: "publicShareLinkEditDisclosureBanner.closeButton"
                                    }),
                                    colorPalette: "gray",
                                    colorVariant: "inversePrimary",
                                    icon: i(25094).xMarkSmallIcon,
                                    onClick: d
                                })
                            })) : !l && t && (i(436555).N2(), r(!1))
                        }, [l, a, c, t])
                    }();
                    let M = (0, i(682985).K8)(() => i(465361).A.state.banners.length > 0, []),
                        _ = (0, i(682985).K8)(() => !!e.getCover() && !M, [e, M]);
                    return ((0, n.useEffect)(() => {
                        if (y && !(t instanceof i(989205).r)) {
                            let n = t || Error("Page loading error");
                            i(419750).O8(n, {
                                from: "Frame.PageContainerContent",
                                type: "pageLoadingError",
                                data: {
                                    pageId: e.id,
                                    miscDataToConvertToString: {
                                        isLoading: w,
                                        canRead: j
                                    }
                                }
                            })
                        }
                    }, [y, w, j, t, e.id]), y || S) ? (0, s.jsx)(x, {
                        isOfflineAndUnavailable: S
                    }) : (0, s.jsxs)(eh, {
                        observer: null == o ? void 0 : o.observer,
                        children: [v ? (0, s.jsx)(i(121930).w, {}) : null, (0, s.jsx)(i(271954).t, {}), k && ea(P) ? (0, s.jsx)(eb, {
                            route: P.route,
                            overridePosition: "relative",
                            shouldOverlayOnCover: _,
                            children: (0, s.jsx)(i(595417).S8, {
                                isInvalidPage: !1,
                                store: e,
                                routerState: P
                            })
                        }) : void 0, (0, s.jsx)(i(865594).AT, {
                            context: i(166654).R.Frame,
                            style: m.pageViewBlockStyle,
                            store: e,
                            paddingBottom: g,
                            disabled: !1
                        }), (0, s.jsx)(i(972233).l, {
                            pageVisitStore: a,
                            presenceStore: l,
                            isPeekView: !1
                        })]
                    })
                });

            function eh(e) {
                return e.observer ? (0, s.jsx)(i(422969).S, {
                    observer: e.observer,
                    children: e.children
                }) : (0, i(411048).Du)(e.children)
            }
            let eg = {};

            function eb(e) {
                let {
                    children: t,
                    route: n,
                    overridePosition: r,
                    shouldOverlayOnCover: o = !1
                } = e, a = (0, i(533992).v3)(), l = (0, i(682985).K8)(() => (0, i(319643).pF)({
                    device: a.device,
                    route: n
                }), [a.device, n]), d = (0, i(682985).K8)(() => a.WindowSizeStore.state.paddingTop, [a.WindowSizeStore]), c = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = i(317035).b.state.topbar) ? void 0 : e.position
                }, []), u = l ? i(515378).uF : i(515378).s1, p = (0, i(960253).I)(() => {
                    let e = o ? 0 : u + d;
                    return {
                        mobileTopbarPlaceholder: {
                            minHeight: u + d,
                            display: "flex",
                            flexShrink: 0,
                            zIndex: i(126767).Z + 1,
                            width: "100%"
                        },
                        mobileTopbarRedesigned: {
                            position: r ? ? c ? ? "relative",
                            pointerEvents: "none",
                            minHeight: e,
                            backgroundColor: "transparent",
                            display: "flex",
                            flexShrink: 0,
                            insetInlineStart: 0,
                            insetInlineEnd: 0,
                            zIndex: i(126767).Z + 1,
                            width: "100%"
                        }
                    }
                }, [d, r, c, u, o]);
                return (0, s.jsx)("div", {
                    style: l ? p.mobileTopbarRedesigned : p.mobileTopbarPlaceholder,
                    children: t
                })
            }

            function ev(e, t) {
                let n = i(986939).A.isMobile && i(498368).Ay.state.open ? t : 0;
                return (0, i(865594).Wj)(e.device, (0, i(175864).C)(e) + n)
            }
        },
        212674: (e, t, i) => {
            i.d(t, {
                t: () => n
            });

            function n(e) {
                let {
                    store: t
                } = e, n = (0, i(533992).v3)();
                return (0, i(682985).K8)(() => {
                    if (!t || i(986939).A.isMobile || !(0, i(59406).w)(n) || !(0, i(319643).K6)(t, n)) return !1;
                    let {
                        publicPageData: e
                    } = i(686494).A.state;
                    return !!(null != e && e.template)
                }, [n, t])
            }
        },
        213458: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowUpRightSquareIcon: () => o,
                iconDefinition: () => r
            }), i(296540);
            var n = i(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                        }), (0, n.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                o = (0, i(104509).wt)("arrowUpRightSquare", r, "default")
        },
        240935: (e, t, i) => {
            i.d(t, {
                Ay: () => c,
                eX: () => u,
                tA: () => p
            }), i(296540);
            let n = new(i(815048)).O2("PageLayoutEditor", async () => Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(30085), i.e(90109), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(21969), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(79349), i.e(58360), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(2276), i.e(30532), i.e(73588), i.e(3723), i.e(91100), i.e(78311), i.e(4287), i.e(9817), i.e(65594), i.e(47302), i.e(91636), i.e(36441), i.e(64049), i.e(75189), i.e(28372), i.e(28663), i.e(47281), i.e(29087), i.e(46350), i.e(75234), i.e(67281), i.e(66200), i.e(52064), i.e(69626), i.e(82816), i.e(2832), i.e(48095), i.e(67098), i.e(35118), i.e(63611), i.e(94849), i.e(75484), i.e(98821), i.e(97711), i.e(89076), i.e(86998), i.e(58889), i.e(22920), i.e(9914), i.e(78257), i.e(84382), i.e(51386), i.e(95150), i.e(10471), i.e(87087), i.e(98419), i.e(11719), i.e(13592), i.e(6743), i.e(5234), i.e(85376), i.e(67252), i.e(42709), i.e(44903), i.e(92181), i.e(7251), i.e(72143), i.e(67612), i.e(53478), i.e(75559), i.e(86793), i.e(34), i.e(54253), i.e(26665), i.e(67984), i.e(605), i.e(75681)]).then(i.bind(i, 72852))),
                r = (0, i(815048)._h)(n, e => e.PageLayoutEditor),
                o = new(i(815048)).O2("PagePresentationMode", async () => await Promise.all([i.e(49806), i.e(79974), i.e(45414), i.e(99723)]).then(i.bind(i, 24770))),
                a = (0, i(815048)._h)(o, e => e.PagePresentationMode),
                l = new(i(815048)).O2("SiteSettingsLayoutEditor", async () => await Promise.all([i.e(54951), i.e(26997), i.e(96579), i.e(73588), i.e(2337), i.e(61915), i.e(46204)]).then(i.bind(i, 224318))),
                s = (0, i(815048)._h)(l, e => e.SiteSettingsLayoutEditor);
            var d = i(474848);

            function c(e) {
                let {
                    mainEditorCurrentBlockStore: t,
                    currentCollectionViewStore: n
                } = (0, i(682985).K8)(() => ({
                    mainEditorCurrentBlockStore: i(728372).AppStoreMainEditorCurrentBlockStore.state,
                    currentCollectionViewStore: i(728372).default.state.currentCollectionViewStore
                }), []), o = (0, i(682985).K8)(() => {
                    let i = e.routerState,
                        r = i.route;
                    return "meet" === r.name || "library" === r.name ? {
                        store: void 0,
                        collectionViewStore: void 0,
                        routerState: i
                    } : "softwareFactory" === r.name ? {
                        store: void 0,
                        collectionViewStore: void 0,
                        routerState: i
                    } : "factory" === r.name ? {
                        store: void 0,
                        collectionViewStore: void 0,
                        routerState: i
                    } : t ? {
                        store: t,
                        collectionViewStore: n,
                        routerState: i
                    } : void 0
                }, [n, t, e.routerState]), l = (0, i(682985).O$)(u), c = (0, i(682985).O$)(p), h = (0, i(83208).X)("page_presentation_mode"), g = (0, i(682985).O$)(i(922118).M) && h;
                return l ? (0, d.jsx)(r, {}) : g ? (0, d.jsx)(a, {}) : o ? c ? (0, d.jsx)(s, {}) : (0, d.jsx)(i(181307).Ay, { ...o
                }) : null
            }
            let u = new(i(345426)).ComputedStore(() => {
                    let e = i(272755).g.getState();
                    return e.isOpen && "layout-editor" === e.mode
                }, {
                    debugName: "isPageLayoutEditorOpenStore"
                }),
                p = new(i(345426)).ComputedStore(() => {
                    let e = i(272755).g.getState();
                    return e.isOpen && "site-settings-editor" === e.mode
                }, {
                    debugName: "isSiteSettingsLayoutEditorOpenStore"
                })
        },
        252426: (e, t, i) => {
            i.d(t, {
                a: () => r,
                h: () => n
            });
            let n = .5,
                r = .3
        },
        271954: (e, t, i) => {
            i.d(t, {
                t: () => a
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                style0: {
                    gap: 4
                },
                content: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                    textAlign: "center",
                    fontSize: 14,
                    gap: 16,
                    zIndex: 2,
                    top: "50%",
                    insetInlineStart: "50%",
                    transform: "translate(calc(var(--direction, 1) * -50%), -50%)",
                    maxWidth: 282,
                    lineHeight: "20px"
                },
                blurContainer: {
                    position: "fixed",
                    backdropFilter: "blur(18px)",
                    height: "100%",
                    width: "100%",
                    zIndex: 1
                },
                buttonWrapper: {
                    paddingInlineStart: "10px",
                    paddingInlineEnd: "12px"
                },
                opacityContainer: {
                    position: "fixed",
                    opacity: .4,
                    zIndex: 1,
                    background: i(632079).Tj.white,
                    height: "100%",
                    width: "100%"
                },
                secondaryMessage: {
                    color: i(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    lineHeight: "16px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function a() {
                var e;
                let t, a, l, s, d, c, u, p = (0, i(533992).v3)(),
                    h = (t = (0, i(83208).X)("blur_missing_name_spaces"), a = (0, i(972740).L)(), l = (0, i(226309)._3)({
                        spaceId: null == a ? void 0 : a.id
                    }), s = (0, i(192159).Fq)(l) && !(0, i(192159).Qx)(null == l ? void 0 : l.subscription), d = !!(null == l || null == (e = l.address) ? void 0 : e.name), c = (0, i(84163).J)(a), u = null == l ? void 0 : l.provider, t && c && s && !d && "app_store" !== u && "play_store" !== u),
                    g = (0, i(682985).K8)(() => (0, i(887788).h)(p), [p]);
                return ((0, n.useEffect)(() => {
                    h && (0, i(104310).u)({
                        event: {
                            eventName: "missing_name_blur_overlay_displayed",
                            eventProperties: {}
                        }
                    })
                }, [h, p]), h) ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        style: o.content,
                        children: [(0, r.jsx)(i(16275).I, {
                            icon: i(157160).lockIcon,
                            size: 24,
                            colorVariant: "primary"
                        }), (0, r.jsxs)(i(4458).VP, {
                            gap: 12,
                            className: "autolayout-fill-width",
                            style: o.positionRelative,
                            children: [(0, r.jsx)("div", {
                                children: g ? (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Access to Notion is limited because we need your billing name",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.messageContent"
                                }) : (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Access to Notion is limited",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.memberMessageContent"
                                })
                            }), (0, r.jsx)("div", {
                                style: o.secondaryMessage,
                                children: g ? void 0 : (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Contact a workspace owner to update your workspace’s billing name",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.memberSecondaryLabel"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            style: o.buttonWrapper,
                            children: (0, r.jsx)(i(548436).A, {
                                style: o.style0,
                                size: "lg",
                                onClick: () => {
                                    (0, i(104310).u)({
                                        event: {
                                            eventName: "missing_name_blur_overlay_cta_clicked",
                                            eventProperties: {
                                                is_workspace_owner: g
                                            }
                                        }
                                    }), g ? i(599754).Ow({
                                        currentPage: "billing",
                                        tab: "address"
                                    }) : i(599754).Ow()
                                },
                                children: g ? (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "Update billing name",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.buttonLabel"
                                }) : (0, r.jsx)(i(109939).sA, {
                                    defaultMessage: "View workspace owner",
                                    id: "missingNameBlurExperience.missingNameBlurOverlay.memberButtonLabel"
                                })
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        style: o.blurContainer
                    }), (0, r.jsx)("div", {
                        style: o.opacityContainer
                    })]
                }) : null
            }
        },
        311336: (e, t, i) => {
            i.d(t, {
                K: () => n
            });
            let n = "1.375em"
        },
        317035: (e, t, i) => {
            i.d(t, {
                b: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {}
                }
            }
            let o = new r
        },
        380629: (e, t, i) => {
            i.d(t, {
                W: () => a
            }), i(296540);
            var n = i(474848);
            let r = {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                fontSize: 10
            };

            function o({
                iconGroup: e,
                children: t,
                iconSize: a,
                error: l,
                errorId: s
            }) {
                return (0, n.jsxs)("div", {
                    style: r,
                    children: [(0, n.jsx)(i(51831).m, {
                        placement: "top",
                        content: () => t,
                        children: t => (0, n.jsx)("div", { ...t,
                            children: (0, n.jsx)(i(708966).Q, {
                                iconGroup: e,
                                variantName: "default",
                                colorPalette: "red",
                                colorVariant: "accentPrimary",
                                style: {
                                    width: a,
                                    height: a
                                }
                            })
                        })
                    }), (0, n.jsx)(i(460927).Y, {
                        error: l,
                        errorId: s
                    })]
                })
            }

            function a(e) {
                return (0, n.jsx)(o, { ...e,
                    iconGroup: i(940227).F,
                    children: (0, n.jsx)(i(4458).VP, {
                        alignItems: "center",
                        children: (0, n.jsx)(i(823151).g, {})
                    })
                })
            }
        },
        387939: (e, t, i) => {
            i.d(t, {
                C: () => r
            });
            let n = new(i(815048)).O2("ClientPreviewBanner", async () => await i.e(60280).then(i.bind(i, 405941))),
                r = (0, i(815048)._h)(n, e => e.ClientPreviewBanner)
        },
        399861: (e, t, i) => {
            i.d(t, {
                j: () => n
            });

            function n(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "offline_access_failure",
                        eventProperties: e
                    }
                })
            }
        },
        429987: (e, t, i) => {
            i.d(t, {
                i: () => r
            });
            let n = {
                    ScrollableBlockLimitBanner: new(i(815048)).O2("ScrollableBlockLimitBanner", async () => Promise.all([i.e(73259), i.e(96579), i.e(79563), i.e(27942)]).then(i.bind(i, 899403)))
                },
                r = (0, i(815048)._h)(n.ScrollableBlockLimitBanner, e => e.ScrollableBlockLimitBanner)
        },
        462180: (e, t, i) => {
            i.d(t, {
                J: () => r,
                L: () => o
            });
            let n = new(i(815048)).O2("PublicTopbarShareButton", () => Promise.all([i.e(61072), i.e(26845)]).then(i.bind(i, 509946))),
                r = (0, i(815048)._h)(n, e => e.PublicTopbarShareButton),
                o = (0, i(815048)._h)(n, e => e.PublicTopbarShareButtonMobile)
        },
        533357: (e, t, i) => {
            var n;
            i.d(t, {
                n: () => r
            });
            let r = ((n = {})[n.Bottom = 0] = "Bottom", n[n.Floating = 1] = "Floating", n)
        },
        558154: (e, t, i) => {
            i.d(t, {
                S: () => r
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.02 4.12 15.96 11.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M17.975 15a.875.875 0 0 1-.875.875H2.9a.875.875 0 1 1 0-1.75h14.2c.483 0 .875.392.875.875m0-5a.875.875 0 0 1-.875.875H2.9a.875.875 0 1 1 0-1.75h14.2c.483 0 .875.392.875.875M17.1 5.875a.875.875 0 0 0 0-1.75H2.9a.875.875 0 1 0 0 1.75z"
                    })
                },
                r = (0, i(104509).wt)("menuFill", n, "fill")
        },
        592599: (e, t, i) => {
            i.d(t, {
                O: () => r,
                t: () => n
            });
            let n = (0, i(815048)._h)(new(i(815048)).O2("PeekRenderer", async () => {
                    let {
                        default: e
                    } = await Promise.all([i.e(75134), i.e(9773), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(11082), i.e(37571), i.e(73764), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(87971), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(21969), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(56308), i.e(48860), i.e(18682), i.e(55067), i.e(83490), i.e(58360), i.e(33162), i.e(63793), i.e(18881), i.e(12690), i.e(62731), i.e(68583), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(35602), i.e(90735), i.e(12024), i.e(30532), i.e(69684), i.e(81603), i.e(49297), i.e(91100), i.e(78288), i.e(68719), i.e(4287), i.e(55755), i.e(19812), i.e(18378), i.e(65594), i.e(38814), i.e(91636), i.e(72933), i.e(29087), i.e(85129), i.e(7912), i.e(64476), i.e(2832), i.e(94849), i.e(98821), i.e(27207), i.e(74063), i.e(1911), i.e(77470), i.e(94331), i.e(86787), i.e(80068), i.e(14401), i.e(50659), i.e(61224), i.e(35635), i.e(43151)]).then(i.bind(i, 167279));
                    return {
                        PeekRenderer: e
                    }
                }), e => e.PeekRenderer),
                r = (0, i(815048)._h)(new(i(815048)).O2("RestrictedAccess", async () => {
                    let {
                        RestrictedAccessComponent: e
                    } = await i.e(57314).then(i.bind(i, 549400));
                    return {
                        RestrictedAccessComponent: e
                    }
                }), e => e.RestrictedAccessComponent)
        },
        603651: (e, t, i) => {
            i.d(t, {
                W: () => r
            }), i(296540);
            var n = i(474848);

            function r({
                tooltipTitle: e,
                tooltipDescription: t,
                buttonProps: l,
                iconSize: s = "small",
                iconColorVariant: d = "tertiary",
                tooltipWidth: c,
                forceVisibleState: u = !1
            }) {
                return (0, n.jsx)(i(51831).m, {
                    placement: "top",
                    forceVisibleState: u,
                    style: c ? {
                        width: c
                    } : void 0,
                    content: () => (0, n.jsxs)(i(4458).VP, {
                        gap: 2,
                        className: "autolayout-fill-width",
                        style: o.positionRelative,
                        children: [e ? (0, n.jsx)(i(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "inversePrimary",
                            children: e
                        }) : null, t ? (0, n.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "inverseSecondary",
                            children: t
                        }) : null]
                    }),
                    textWrap: !!c,
                    children: e => (0, n.jsx)(a, {
                        buttonProps: l,
                        ...e,
                        children: (0, n.jsx)(i(708966).Q, {
                            iconGroup: i(799472).u,
                            colorVariant: d,
                            variantName: s
                        })
                    })
                })
            }
            let o = {
                button: {
                    borderRadius: 2
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function a({
                children: e,
                buttonProps: t,
                ...r
            }) {
                return t ? (0, n.jsx)(i(64960).Ay, {
                    style: o.button,
                    ...t,
                    ...r,
                    children: e
                }) : (0, n.jsx)("span", { ...r,
                    children: e
                })
            }
        },
        652595: (e, t, i) => {
            i.d(t, {
                P: () => a,
                W: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        banners: [],
                        totalHeight: 0,
                        height: void 0
                    }
                }
                setHeight(e) {
                    this.update(t => ({ ...t,
                        height: e
                    }))
                }
            }
            let o = new r,
                a = new(i(245541)).R({
                    key: "publicSiteBannerDismissed",
                    namespace: "notion",
                    important: !1,
                    trackingType: "necessary"
                })
        },
        676416: (e, t, i) => {
            i.d(t, {
                f: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    store: n
                } = e;
                return n.isCollectionView() ? (0, i(424963).z)(t) ? i(644154).A.All : i(644154).A.Y : !i(447036).cq(n) && i(475097).default.isSidePeekOpen() ? i(644154).A.All : i(644154).A.Y
            }
        },
        757619: (e, t, i) => {
            i.d(t, {
                V: () => r
            }), i(296540);
            var n = i(474848);

            function r(e) {
                let {
                    render: t,
                    ...r
                } = e, o = (0, i(117931).A)({ ...r,
                    isFromActualPageLoad: !0
                });
                return (0, n.jsx)(n.Fragment, {
                    children: (0, i(682985).K8)(() => t(o), [t, o], {
                        silenceRerenderDefender: !0
                    })
                })
            }
        },
        819356: (e, t, i) => {
            i.d(t, {
                p: () => o
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        banners: [],
                        totalHeight: 0,
                        height: void 0
                    }
                }
                setHeight(e) {
                    this.update(t => ({ ...t,
                        height: e
                    }))
                }
            }
            let o = new r
        },
        835051: (e, t, i) => {
            i.d(t, {
                k: () => r
            }), i(296540);
            var n = i(474848);

            function r({
                children: e,
                style: t
            }) {
                let o = e => {
                    (0, i(705660).SQ)(e, i(705660).y$.SidebarMouseMove, () => {
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, i(619157).A1)() ? t.left : t.right;
                        i(984858).sidebarMousePeekXStore.setState(n), (0, i(868892).h)({
                            fromElectron: !1
                        })
                    })
                };
                return (0, n.jsx)("div", {
                    onMouseEnter: o,
                    onMouseMove: o,
                    style: t,
                    children: e
                })
            }
        },
        841690: (e, t, i) => {
            i.d(t, {
                N: () => s,
                B: () => l
            });
            var n = () => i(546605);
            class r extends n().Store {
                getInitialState() {
                    return -1
                }
                getHeight(e) {
                    return -1 === this.state ? (0, i(801113).ek)(e.isElectronMac) : this.state
                }
                overrideHeight(e) {
                    this.setState(e)
                }
                reset() {
                    this.setState(-1)
                }
            }
            let o = new r("topbarHeight");

            function a(e) {
                o.overrideHeight(e.height)
            }

            function l() {
                return (0, i(729787).pP)(a)
            }

            function s() {
                let e = (0, i(533992).Y0)();
                return (0, i(682985).K8)(() => o.getHeight(e), [e])
            }
        },
        866217: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            let n = {
                appCursorListener: {
                    sidebar: 1,
                    secondarySidebar: 2,
                    editor: 3,
                    aiChat: 3,
                    marketplace: 3,
                    teamHome: 3,
                    aiChatSidebar: 4
                }
            }
        },
        872762: (e, t, i) => {
            i.d(t, {
                E: () => r
            });
            let n = new(i(815048)).O2("DictationBubble", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(5410), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(12354), i.e(5721), i.e(57688), i.e(17250), i.e(64696), i.e(39726), i.e(87971), i.e(29663), i.e(74145), i.e(55067), i.e(79349), i.e(90735), i.e(50354), i.e(71136), i.e(86102), i.e(30671), i.e(3101)]).then(i.bind(i, 184681))),
                r = (0, i(815048)._h)(n, e => e.DictationBubble)
        },
        898378: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                notionTintableIcon: () => r
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                r = (0, i(104509).wt)("notionTintable", n, "tintable")
        },
        934036: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            let n = new(i(815048)).O2("publicTopbarMoreMenu", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(36192), i.e(40537), i.e(96346), i.e(49806), i.e(79974), i.e(45414), i.e(71562), i.e(26361), i.e(16471), i.e(37353), i.e(62475), i.e(3151), i.e(18965), i.e(98629), i.e(96527), i.e(30085), i.e(90109), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(23519), i.e(63771), i.e(53050), i.e(87353), i.e(45213), i.e(53847), i.e(12354), i.e(5721), i.e(57688), i.e(54951), i.e(43444), i.e(23979), i.e(17250), i.e(26997), i.e(73259), i.e(28048), i.e(93430), i.e(55940), i.e(12560), i.e(88268), i.e(12001), i.e(40198), i.e(39726), i.e(31243), i.e(42534), i.e(86662), i.e(14886), i.e(39225), i.e(6212), i.e(2626), i.e(64453), i.e(4779), i.e(21969), i.e(29663), i.e(28482), i.e(76361), i.e(14369), i.e(74145), i.e(48860), i.e(75136), i.e(98175), i.e(18682), i.e(79349), i.e(58360), i.e(33162), i.e(82538), i.e(63793), i.e(18881), i.e(62731), i.e(41049), i.e(60262), i.e(72805), i.e(18416), i.e(2276), i.e(30532), i.e(73588), i.e(3723), i.e(91100), i.e(78311), i.e(4287), i.e(9817), i.e(65594), i.e(47302), i.e(91636), i.e(36441), i.e(64049), i.e(75189), i.e(28372), i.e(28663), i.e(47281), i.e(29087), i.e(46350), i.e(75234), i.e(67281), i.e(66200), i.e(52064), i.e(69626), i.e(82816), i.e(2832), i.e(48095), i.e(67098), i.e(35118), i.e(63611), i.e(94849), i.e(75484), i.e(98821), i.e(97711), i.e(89076), i.e(86998), i.e(58889), i.e(22920), i.e(9914), i.e(78257), i.e(84382), i.e(51386), i.e(95150), i.e(10471), i.e(87087), i.e(98419), i.e(11719), i.e(13592), i.e(6743), i.e(5234), i.e(85376), i.e(67252), i.e(42709), i.e(44903), i.e(92181), i.e(7251), i.e(72143), i.e(67612), i.e(53478), i.e(75559), i.e(86793), i.e(34), i.e(54253), i.e(26665), i.e(67984), i.e(605), i.e(75681)]).then(i.bind(i, 144655))),
                r = (0, i(815048)._h)(n, e => e.PublicTopbarMoreMenu);
            var o = i(474848);
            let a = function({
                buttonPopupStore: e,
                useEllipsisIcon: t,
                store: n,
                isPublicShareLink: a
            }) {
                let d = (0, i(533992).v3)(),
                    c = (0, i(533992).WS)();
                return (0, o.jsx)(i(656252).A, {
                    popupType: c ? i(656252).z.SlideUp : i(656252).z.Popup,
                    buttonPopupStore: e,
                    onClick: () => s(d),
                    content: () => (0, o.jsx)(r, {
                        blockStore: n,
                        onDismiss: () => s(d),
                        isPublicShareLink: !!a
                    }),
                    originGap: 8,
                    children: e => (0, o.jsx)(l, {
                        buttonPopupEvents: e,
                        useEllipsisIcon: !!t
                    })
                })
            };

            function l({
                buttonPopupEvents: e,
                useEllipsisIcon: t
            }) {
                let n = (0, i(109939).tz)();
                return (0, o.jsx)(i(64960).Ay, {
                    ariaLabel: n.formatMessage({
                        id: "publicTopbarMoreButton.ariaLabel",
                        defaultMessage: "More actions"
                    }),
                    style: i(986939).A.isMobile ? {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        marginInlineStart: 8,
                        marginInlineEnd: 8
                    } : {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 32,
                        height: 28,
                        borderRadius: 4
                    },
                    ...e,
                    children: t && i(986939).A.isMobile ? (0, o.jsx)(i(16275).I, {
                        icon: i(558154).S,
                        size: "lg"
                    }) : (0, o.jsx)(i(16275).I, {
                        icon: i(397900).ellipsisIcon,
                        size: "lg"
                    })
                })
            }

            function s(e) {
                (0, i(471e3).I)({
                    environment: e
                }), (0, i(104310).u)({
                    event: {
                        eventName: "open_public_more_menu",
                        eventProperties: {}
                    }
                })
            }
        },
        972233: (e, t, i) => {
            i.d(t, {
                l: () => r
            });
            let n = new(i(815048)).O2("presence-container", () => Promise.all([i.e(75134), i.e(41559), i.e(86625)]).then(i.bind(i, 342303))),
                r = (0, i(815048)._h)(n, e => e.PresenceContainer)
        }
    }
]);