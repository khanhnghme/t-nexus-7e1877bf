"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [60858, 96966], {
        45062: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var n = i(296540);

            function l(e) {
                return (0, n.useEffect)(() => {
                    document.title = e.title, (0, i(328975).H)(e.title)
                }, [e.title]), e.children
            }
        },
        210909: (e, t, i) => {
            i.d(t, {
                LoginMobileNative: () => g
            });
            var n = i(296540),
                l = i(474848);
            let o = {
                    height: "100%",
                    width: "100%"
                },
                s = {
                    width: 44,
                    height: 44,
                    flexGrow: 0,
                    flexShrink: 0,
                    marginTop: 64,
                    marginBottom: 20
                },
                r = {
                    marginTop: 36,
                    paddingBottom: 48,
                    marginInlineStart: -4
                },
                a = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 56,
                    paddingBottom: 44
                },
                d = {
                    marginBottom: 24
                };

            function c(e) {
                let t = (0, i(533992).v3)(),
                    {
                        WindowSizeStore: r
                    } = t,
                    {
                        isSignup: c,
                        loginPermissionsStore: g,
                        showBackButton: p,
                        onBackButtonClick: u
                    } = e,
                    f = (0, i(483908).EB)() || (0, i(483908).Nz)(),
                    m = (0, i(682985).K8)(() => i(83879).b.isMfa(), []);
                (0, n.useEffect)(() => {
                    var e;
                    "email" === i(83879).b.state.loginType && i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "google"
                    }), i(266130).setInitialRenderCompleted(), null == (e = t.mobileNative) || e.markTransitionReady({
                        environment: t,
                        type: "login"
                    })
                }, [t]);
                let h = "dark" === (0, i(960253).e)(),
                    v = {
                        position: "absolute",
                        top: (0, i(616844).Y5)("top", 18),
                        insetInlineStart: (0, i(616844).Y5)("left", 18),
                        zIndex: 2
                    },
                    y = (0, i(682985).K8)(() => ({
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: 414,
                        marginInlineStart: "auto",
                        marginInlineEnd: "auto",
                        paddingTop: r.state.paddingTopCSS,
                        paddingInlineStart: (0, i(616844).Y5)("left", 34),
                        paddingInlineEnd: (0, i(616844).Y5)("right", 34)
                    }), [r]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [p ? (0, l.jsx)(i(265779).E, {
                        shape: "pill",
                        style: v,
                        onClick: () => {
                            null == u || u()
                        },
                        children: (0, l.jsx)(i(16275).I, {
                            icon: i(746204).w,
                            size: "default"
                        })
                    }) : null, (0, l.jsx)(i(126767).H, {
                        style: o,
                        type: i(644154).A.Y,
                        children: (0, l.jsxs)("div", {
                            style: y,
                            children: [f ? (0, l.jsx)("div", {
                                style: a,
                                children: (0, l.jsxs)(i(4458).VP, {
                                    width: 320,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexGrow: 1,
                                    children: [(0, l.jsx)(i(636602).d, {}), (0, l.jsx)(i(696906).i, {
                                        isSignup: c,
                                        spaceName: void 0,
                                        isOnFrontSignupPage: c
                                    })]
                                })
                            }) : m ? void 0 : (0, l.jsxs)(l.Fragment, {
                                children: [h ? (0, i(792668).notionIcon)(s) : (0, i(898378).notionTintableIcon)(s), (0, l.jsx)(i(696906).i, {
                                    isSignup: c,
                                    spaceName: void 0,
                                    isOnFrontSignupPage: c
                                })]
                            }), m ? (0, l.jsx)(i(660983).A, {}) : (0, l.jsx)(i(891418).Ay, {
                                style: d,
                                hasMobileNativeEmailPasswordSentPromptStyle: !0,
                                emailLabelType: "email",
                                from: "loginMobileNative",
                                loginPermissionsStore: g
                            }), (0, l.jsx)(x, {})]
                        })
                    })]
                })
            }

            function g(e) {
                let {
                    isSignup: t,
                    loginPermissionsStore: i,
                    showBackButton: n,
                    onBackButtonClick: o
                } = e;
                return (0, l.jsx)(c, {
                    loginPermissionsStore: i,
                    isSignup: t,
                    showBackButton: n,
                    onBackButtonClick: o
                })
            }
            let p = {
                    display: "flex",
                    alignItems: "center",
                    lineHeight: 1.2
                },
                u = {
                    marginInlineStart: 4
                },
                f = {
                    marginTop: 12
                };

            function x() {
                let e = (0, i(533992).v3)();
                return (0, l.jsxs)("div", {
                    style: r,
                    children: [(0, l.jsxs)("div", {
                        style: p,
                        children: [(0, l.jsx)(i(988022).p, {
                            colorPalette: "gray",
                            size: "xs",
                            href: i(168962).JZ.termsAndPrivacy,
                            external: !0,
                            children: (0, l.jsx)(i(109939).sA, {
                                defaultMessage: "Privacy & terms",
                                id: "loginMobileNative.footer.privacyAndTermsButton.label"
                            })
                        }), (0, l.jsx)(i(988022).p, {
                            colorPalette: "gray",
                            size: "xs",
                            style: u,
                            onClick: () => {
                                i(963430).S({
                                    environment: e,
                                    from: "mobile_login"
                                })
                            },
                            children: (0, l.jsx)(i(109939).sA, {
                                defaultMessage: "Need help?",
                                id: "loginMobileNative.footer.helpButton.label"
                            })
                        })]
                    }), (0, l.jsxs)(i(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        style: f,
                        children: ["© ", i(906745).DateTime.now().year, " Notion Labs, Inc."]
                    })]
                })
            }
        },
        328975: (e, t, i) => {
            i.d(t, {
                H: () => n
            });

            function n(e) {
                var t;
                null === i(775657).electronApi || void 0 === i(775657).electronApi || null == (t = i(775657).electronApi.setWindowTitle) || t.call(i(775657).electronApi, e)
            }
        },
        622207: (e, t, i) => {
            i.d(t, {
                default: () => o
            }), i(814603), i(147566), i(198721);
            var n = i(296540),
                l = i(474848);
            let o = function(e) {
                let {
                    navigate: t
                } = (0, n.useContext)(i(44894).E), {
                    email: o,
                    isSignup: s,
                    redirectURL: r,
                    addAnotherAccount: a,
                    referrer: d
                } = e;
                (0, i(483908).TW)();
                let c = (0, i(533992).v3)(),
                    g = (0, i(109939).tz)(),
                    p = (0, i(682985).uB)(void 0, i(719069).A);
                (0, n.useEffect)(() => {
                    let e = new URLSearchParams(window.location.search).get("prompt");
                    e && (0, i(13565).l0)(e)
                }, []);
                let {
                    device: u
                } = c;
                if ((0, n.useEffect)(() => {
                        (async () => {
                            if ("microsoft_login" !== i(83879).b.state.loginType && c.currentUser.isLoggedIn() && !a && await (0, i(686717).T)()) return t({
                                environment: c,
                                url: r && (0, i(510995).J)(r) ? r : i(168962).JZ.root,
                                redirect: !0
                            });
                            o && i(83879).b.setState({ ...i(83879).b.state,
                                email: o
                            }), r ? ((0, i(13565).wA)({
                                url: r
                            }), (0, i(13565).IT)(r)) : ((0, i(13565).HP)(), (0, i(13565).dC)()), (0, i(483908).kD)()
                        })()
                    }), u.isElectronAny) return (0, l.jsx)(i(949204).default, {
                    loginPermissionsStore: p,
                    isSignup: s,
                    redirectURL: r,
                    addAnotherAccount: a
                }); {
                    if (u.isMobileNative) return (0, l.jsx)(i(210909).LoginMobileNative, {
                        loginPermissionsStore: p,
                        isSignup: s
                    });
                    let e = `Notion - ${s?g.formatMessage({defaultMessage:"Sign up",id:"signupPage.pageTitle"}):g.formatMessage({defaultMessage:"Log in",id:"loginPage.pageTitle"})}`;
                    return (0, l.jsx)(i(45062).A, {
                        title: e,
                        children: (0, l.jsx)(i(555348).default, {
                            isSignup: s,
                            referrer: d,
                            redirectURL: r,
                            addAnotherAccount: a
                        })
                    })
                }
            }
        },
        746204: (e, t, i) => {
            i.d(t, {
                w: () => l
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                l = (0, i(104509).wt)("arrowChevronSingleLeftFill", n, "fill")
        },
        898378: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                notionTintableIcon: () => l
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                l = (0, i(104509).wt)("notionTintable", n, "tintable")
        },
        949204: (e, t, i) => {
            i.d(t, {
                default: () => r
            }), i(296540);
            var n = i(474848);
            let l = {
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    overflow: "auto",
                    height: "100%",
                    paddingBottom: 60,
                    paddingTop: 45
                },
                o = {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    overflow: "auto",
                    height: "100%"
                },
                s = {
                    width: "100%",
                    height: "45px"
                },
                r = function(e) {
                    let t = (0, i(109939).tz)(),
                        r = (0, i(533992).v3)(),
                        {
                            loginPermissionsStore: a,
                            isSignup: c,
                            redirectURL: g,
                            addAnotherAccount: p
                        } = e,
                        u = (0, i(682985).K8)(() => i(83879).b.isMfa(), []),
                        f = (0, i(682985).O$)(i(584257).b),
                        x = r.device.isElectronAny && !f,
                        m = !!g && p,
                        h = (0, i(682985).K8)(() => i(686494).A.state.publicPageData, []);
                    return ("en-US" === t.locale && (0, i(219279).ZP)({
                        experimentId: "login_page_aa_test",
                        enableEventTrailLogging: !0,
                        defaultGroup: "control"
                    }), u) ? (0, n.jsxs)("div", {
                        style: l,
                        children: [(0, n.jsx)(i(660983).A, {}), (0, n.jsx)(d, {})]
                    }) : (0, n.jsxs)("div", {
                        style: o,
                        children: [(0, n.jsx)("div", {
                            style: s,
                            className: x ? i(828432).sbV : void 0,
                            children: r.device.isElectronWindows && !f ? (0, n.jsx)(i(662886).K, {}) : void 0
                        }), (0, n.jsx)(i(45062).A, {
                            title: t.formatMessage({
                                defaultMessage: "Log in",
                                id: "loginDesktopPage.title"
                            })
                        }), m ? (0, n.jsx)(i(304908).o, {
                            redirectURL: g
                        }) : void 0, (0, n.jsx)(i(4458).fI, {
                            children: (0, n.jsx)(i(708690).m, {
                                showMobileLayout: !1,
                                publicPageData: h,
                                isSignup: c,
                                redirectURL: g,
                                addAnotherAccount: p,
                                isMobile: !1,
                                loginPermissionsStore: a,
                                isDesktopApp: !0
                            })
                        })]
                    })
                },
                a = {
                    footer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        lineHeight: 1.2,
                        position: "fixed",
                        bottom: 0,
                        gap: 4,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        paddingBottom: 16,
                        backgroundColor: i(632079).Tj.background.primary
                    }
                };

            function d() {
                let e = (0, i(533992).v3)();
                return (0, n.jsxs)("div", {
                    style: a.footer,
                    children: [(0, n.jsx)(i(988022).p, {
                        colorPalette: "gray",
                        size: "xs",
                        onClick: () => {
                            i(963430).S({
                                environment: e,
                                from: "desktop_login"
                            })
                        },
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "desktopLogin.footer.helpCenterLink",
                            defaultMessage: "Need help?"
                        })
                    }), (0, n.jsx)(i(988022).p, {
                        colorPalette: "gray",
                        size: "xs",
                        href: i(168962).JZ.termsAndPrivacy,
                        external: !0,
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "desktopLogin.footer.privacyAndTermsLink",
                            defaultMessage: "Privacy & Terms"
                        })
                    }), (0, n.jsxs)(i(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: ["© ", i(906745).DateTime.now().year, " ", "Notion Labs, Inc."]
                    })]
                })
            }
        }
    }
]);