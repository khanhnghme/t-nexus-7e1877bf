"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5815, 72423, 97615], {
        12672: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            var n = i(296540);
            i(581454);
            var o = i(474848);
            let a = function({
                analyticsName: e,
                children: t
            }) {
                let a = (0, i(533992).v3)(),
                    s = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    if (s.current) {
                        let t = s.current.getElementsByClassName(i(828432).OUt),
                            n = {},
                            o = i(381453).nF(() => {
                                let o, s = Array.from(t),
                                    l = s.map(e => e.getBoundingClientRect()).findIndex(e => e.top > window.innerHeight);
                                o = l >= 0 ? l - 1 : s.length - 1; {
                                    let t = s[o];
                                    if (t && t.id) {
                                        let s = t.id;
                                        n[s] || (n[s] = !0, i(618731).jr(a, {
                                            scroll_name: s,
                                            index: o,
                                            from: e
                                        }))
                                    }
                                }
                            }, 500);
                        return window.addEventListener("scroll", o), () => {
                            window.removeEventListener("scroll", o)
                        }
                    }
                }, [e, a]), (0, o.jsx)("div", {
                    ref: s,
                    children: t
                })
            };

            function s(e) {
                return (0, o.jsx)(i(172474).BQ, {
                    mode: "light",
                    children: (0, o.jsx)(r, { ...e
                    })
                })
            }
            let l = {
                root: { ...(0, i(57461).xH)(i(849917).locale),
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    color: i(632079).Tj.text.primary,
                    backgroundColor: i(632079).Tj.background.primary
                },
                main: { ...(0, i(57461).xH)(i(849917).locale),
                    fontFamily: i(395416).A.fontFamily.sans,
                    background: i(632079).oZ.frontCreamBackground,
                    color: i(632079).oZ.frontText,
                    fontSize: i(395416).A.fontSize.body.m,
                    lineHeight: 1.5,
                    WebkitFontSmoothing: "antialiased",
                    minHeight: 0,
                    flexGrow: 1
                }
            };

            function r(e) {
                let {
                    children: t,
                    analyticsName: s,
                    hideLogo: r,
                    hideNotionText: d,
                    hideNavItems: c,
                    hideNotificationBanner: u,
                    signupInputAndButtonWidth: g,
                    hideTopbar: m
                } = e;
                return (0, n.useLayoutEffect)(() => {
                    let e = document.documentElement;
                    return e && e.classList.add(i(828432).DY5), () => {
                        e && e.classList.contains(i(828432).DY5) && e.classList.remove(i(828432).DY5)
                    }
                }, []), (0, n.useLayoutEffect)(() => ((0, i(994732).u)() !== i(644154).A.None ? document.body.classList.contains("disable-scroll") || document.body.classList.add("disable-scroll") : document.body.classList.contains("disable-scroll") && document.body.classList.remove("disable-scroll"), () => {
                    document.body.classList.contains("disable-scroll") && document.body.classList.remove("disable-scroll")
                }), []), (0, o.jsx)(a, {
                    analyticsName: s,
                    children: (0, o.jsxs)("div", {
                        style: l.root,
                        children: [(0, o.jsx)(i(976800).o, {
                            sidebarAware: !1
                        }), m ? void 0 : (0, o.jsx)(i(645862).Ay, {
                            analyticsName: s,
                            hideNavItems: c,
                            hideNotificationBanner: u,
                            hideLogo: r,
                            hideNotionText: d,
                            signupInputAndButtonWidth: g
                        }), (0, o.jsx)("main", {
                            id: "main",
                            style: l.main,
                            children: t
                        })]
                    })
                })
            }
        },
        90814: (e, t, i) => {
            i.r(t), i.d(t, {
                bubbleEllipsesIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.63 15.25 14.86",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M6.75 10.38a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75m4.125-.875a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0m2.375.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75"
                        }), (0, n.jsx)("path", {
                            d: "M17.625 5.755A2.125 2.125 0 0 0 15.5 3.63h-11a2.125 2.125 0 0 0-2.125 2.125v7.5c0 1.173.951 2.125 2.125 2.125h1.188v2.482a.625.625 0 0 0 1.006.496l3.87-2.978H15.5a2.125 2.125 0 0 0 2.125-2.125zM15.5 4.88c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-5.148a.63.63 0 0 0-.38.13l-3.034 2.333v-1.838a.625.625 0 0 0-.625-.625H4.5a.875.875 0 0 1-.875-.875v-7.5c0-.483.392-.875.875-.875z"
                        })]
                    })
                },
                a = (0, i(104509).wt)("bubbleEllipses", o, "default")
        },
        114159: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var n = i(474848);
            let o = {
                    style0: {
                        flexShrink: 0
                    },
                    style1: {
                        cursor: "pointer",
                        userSelect: "auto",
                        WebkitUserSelect: "auto"
                    },
                    style3: {
                        fontWeight: i(699422).Wy.medium,
                        fontSize: 16
                    }
                },
                a = function(e) {
                    let {
                        analyticsName: t
                    } = e, a = (0, i(533992).v3)(), s = (0, i(682985).K8)(() => (0, i(434089).m)(a, "maxWidth", "large"), [a]);
                    return (0, n.jsx)("div", {
                        style: o.style0,
                        children: (0, n.jsx)(i(68774).N, {
                            "aria-label": "Notion",
                            href: "https://www.notion.com/product",
                            onMouseDown: () => i(618731)._C(a, {
                                from: t,
                                name: "notion_logo",
                                href: i(168962).JZ.product
                            }),
                            style: o.style1,
                            children: (0, n.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                children: [(0, i(898378).notionTintableIcon)({
                                    width: s ? 30 : 32,
                                    height: s ? 30 : 32,
                                    marginInlineEnd: 10,
                                    flexShrink: 0
                                }), e.hideNotionText ? void 0 : (0, n.jsx)("div", {
                                    style: o.style3,
                                    children: "Notion"
                                })]
                            })
                        })
                    })
                }
        },
        149995: (e, t, i) => {
            i.d(t, {
                cj: () => a,
                xs: () => o
            });
            let n = "challengeHelpers";
            async function o(e) {
                var t;
                let o, a, {
                    environment: s,
                    shouldExecute: l,
                    options: r,
                    action: d,
                    timeoutMs: c = 15e3,
                    logMetadata: u
                } = e;
                if (!l || !r) return;
                let g = r.executeChallenge;
                if (!g) return;
                let m = performance.now();
                try {
                    let e = await (0, i(975162).Vq)(g(d), c);
                    e.timeout ? (i(773352).log({
                        level: "error",
                        from: n,
                        type: "challengeExecutionTimeout",
                        data: {
                            challengeProvider: r.provider,
                            ...u
                        }
                    }), o = void 0, a = "time_out") : o = e.result
                } catch (e) {
                    i(773352).log({
                        level: "error",
                        from: n,
                        type: "challengeExecutionError",
                        error: (0, i(416607).convertErrorToLog)(e),
                        data: {
                            challengeProvider: r.provider,
                            ...u
                        }
                    }), o = void 0, a = "error"
                }
                return t = {
                    provider: r.provider,
                    action: d,
                    is_success: void 0 !== o,
                    time_ms: performance.now() - m,
                    fail_reason: a
                }, (0, i(104310).u)({
                    event: {
                        eventName: "challenge_executed",
                        eventProperties: t
                    }
                }), o
            }

            function a({
                challengeProvider: e,
                challengeProps: t,
                challengeToken: i
            }) {
                let n = function({
                    challengeProvider: e,
                    challengeProps: t
                }) {
                    return "hcaptcha" !== e ? "not_required" : null != t && t.ready ? "ready" : null != t && t.initTimeout ? "timed_out" : "not_ready"
                }({
                    challengeProvider: e,
                    challengeProps: t
                });
                return i ? "ready" === n && "ready" === i.status || "timed_out" === n || "not_required" === n : "ready" === n || "timed_out" === n || "not_required" === n
            }
        },
        158820: (e, t, i) => {
            i.d(t, {
                O: () => s
            }), i(296540);
            var n = i(474848);
            let o = {
                    minHeight: 0
                },
                a = {
                    flex: 1
                };

            function s({
                showMobileLayout: e,
                publicPageData: t,
                isSignup: l,
                redirectURL: r,
                addAnotherAccount: d,
                isMobile: c,
                loginPermissionsStore: u
            }) {
                var g;
                let m = (0, i(690940).A)(),
                    p = (0, i(483908).Nz)(),
                    h = (0, i(483908).EB)(),
                    f = !!r && d,
                    y = void 0 !== t,
                    b = (0, i(483908).yb)(),
                    x = (0, i(960253).I)(() => ({
                        topSpacer: {
                            minHeight: e ? "4vh" : h ? "3vh" : p && !l ? 0 : p && f ? "20vh" : "10vh"
                        }
                    }), [e, h, p, l, f]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        style: { ...x.topSpacer,
                            ...a
                        }
                    }), (0, n.jsxs)("div", {
                        style: (g = {
                            hasPublicPageData: y,
                            isFormResponseSignup: m,
                            isMailSignup: p,
                            isCalendarSignup: h,
                            isReimaginedLoginPage: b
                        }, {
                            fontWeight: i(699422).Wy.bold,
                            textAlign: "center",
                            lineHeight: 1.1,
                            maxWidth: g.isFormResponseSignup ? 420 : 380,
                            ...(g.isMailSignup || g.isCalendarSignup || g.isReimaginedLoginPage) && {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        }),
                        children: [b && !t ? (0, n.jsx)(i(636602).d, {}) : void 0, t ? (0, n.jsx)("div", {
                            style: {
                                marginBottom: c ? "12px" : "16px"
                            },
                            children: (0, n.jsx)(i(619209).HS, {
                                publicPageData: t,
                                size: "lg"
                            })
                        }) : void 0, b ? void 0 : (0, n.jsx)(i(636602).d, {})]
                    }), (0, n.jsx)(i(887483).f, {
                        loginPermissionsStore: u,
                        emailLabelType: !c && l ? "work_email" : "email",
                        isSignup: l,
                        centerTitleContainer: !0,
                        publicPageData: t,
                        isAddAnotherAccount: f,
                        redirectURL: r,
                        isOnFrontSignupPage: l
                    }), (0, n.jsx)("div", {
                        style: { ...o,
                            ...a
                        }
                    })]
                })
            }
        },
        222229: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var n = () => i(546605);
            class o extends n().Store {
                getInitialState() {
                    return {
                        buttons: {}
                    }
                }
                getButtonState(e) {
                    return this.state.buttons[e]
                }
            }
            let a = o
        },
        260033: (e, t, i) => {
            i.d(t, {
                C: () => o
            });
            var n = i(296540);

            function o(e) {
                let {
                    environment: t,
                    challengeProps: o,
                    action: a,
                    enabled: s,
                    logMetadata: l
                } = e, [r, d] = (0, n.useState)({
                    status: "idle"
                }), c = null == o ? void 0 : o.provider, u = (0, n.useCallback)(async e => {
                    let {
                        challengeProps: t,
                        action: n,
                        environment: o
                    } = e;
                    "loading" !== r.status && s && t && (d({
                        status: "loading"
                    }), d({
                        token: await (0, i(149995).xs)({
                            environment: o,
                            shouldExecute: !0,
                            options: t,
                            action: n,
                            logMetadata: l
                        }),
                        status: "ready"
                    }))
                }, [s, r, l]);
                return (0, i(668745).T7)(c, (e, t) => {
                    (0, i(722371).O9)(e) && (0, i(722371).O9)(t) && e !== t && d({
                        status: "idle"
                    })
                }), (0, n.useEffect)(() => {
                    null != o && o.ready && "idle" === r.status && u({
                        environment: t,
                        challengeProps: o,
                        action: a
                    })
                }, [u, o, a, t, r]), null != o && o.ready && s ? {
                    forceFetch: u,
                    tokenState: r
                } : void 0
            }
        },
        277908: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => n,
                wifiExclamationMarkFillIcon: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.66 2.72 16.75 14.18",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.875 3.597a.875.875 0 0 0-1.75 0v8a.875.875 0 0 0 1.75 0zM1.92 7.345A11.45 11.45 0 0 1 8 4.128v1.784a9.7 9.7 0 0 0-4.835 2.664.875.875 0 1 1-1.244-1.231M4.13 9.467A8.4 8.4 0 0 1 8 7.262v1.82a6.66 6.66 0 0 0-2.633 1.622.875.875 0 0 1-1.238-1.238M12 7.231v1.812c1.053.322 1.997.9 2.758 1.66a.875.875 0 0 0 1.238-1.237A8.4 8.4 0 0 0 12 7.231m-5.705 4.401A5.4 5.4 0 0 1 8 10.484v1.113c0 .274.055.536.155.774q-.34.215-.623.498a.875.875 0 1 1-1.237-1.237M12 11.597q-.002.378-.13.712.397.235.724.56a.875.875 0 0 0 1.237-1.237A5.35 5.35 0 0 0 12 10.433zm0-7.491v1.78c1.9.386 3.6 1.33 4.924 2.653A.875.875 0 1 0 18.161 7.3 11.44 11.44 0 0 0 12 4.106M10.063 13.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
                    })
                },
                o = (0, i(104509).wt)("wifiExclamationMarkFill", n, "fill")
        },
        299985: (e, t, i) => {
            i.d(t, {
                s: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.12 3.12 17.75 13.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M5.25 3.125c1.28 0 2.326.875 3.018 2.09.698 1.227 1.107 2.902 1.107 4.788 0 1.885-.409 3.56-1.107 4.785-.692 1.214-1.738 2.087-3.018 2.087s-2.326-.873-3.018-2.087c-.698-1.226-1.107-2.9-1.107-4.785s.409-3.561 1.107-4.788C2.924 4 3.97 3.125 5.25 3.125m0 1.25c-.652 0-1.357.448-1.932 1.458-.388.681-.686 1.574-.836 2.62a2 2 0 1 1-.001 3.094c.15 1.046.449 1.94.837 2.622.575 1.008 1.28 1.456 1.932 1.456.653 0 1.357-.448 1.932-1.456.568-.997.943-2.446.943-4.166s-.375-3.172-.943-4.17c-.575-1.01-1.28-1.458-1.932-1.458m9.5-1.25c1.28 0 2.326.875 3.018 2.09.698 1.227 1.107 2.902 1.107 4.788 0 1.885-.409 3.56-1.107 4.785-.692 1.214-1.738 2.087-3.018 2.087s-2.326-.873-3.018-2.087c-.698-1.226-1.107-2.9-1.107-4.785s.409-3.561 1.107-4.788c.692-1.215 1.737-2.09 3.018-2.09m0 1.25c-.652 0-1.357.448-1.932 1.458-.387.681-.686 1.574-.836 2.62a2 2 0 1 1-.001 3.094c.15 1.046.449 1.94.837 2.622.575 1.008 1.28 1.456 1.932 1.456.653 0 1.357-.448 1.932-1.456.568-.997.943-2.446.943-4.166s-.375-3.172-.943-4.17c-.575-1.01-1.28-1.458-1.932-1.458"
                    })
                },
                o = (0, i(104509).wt)("eyes", n, "default")
        },
        304908: (e, t, i) => {
            i.d(t, {
                o: () => s
            });
            var n = i(296540),
                o = i(474848);
            let a = (0, i(109939).YK)({
                backButtonAriaLabel: {
                    id: "addAnotherAccountLoginPage.backButton.ariaLabel",
                    defaultMessage: "Back to previous page"
                }
            });

            function s({
                redirectURL: e
            }) {
                let t, {
                        navigate: l
                    } = (0, n.useContext)(i(44894).E),
                    r = (0, i(109939).tz)(),
                    d = (0, i(533992).v3)(),
                    c = (t = (0, i(533992).Y0)(), (0, i(960253).I)(() => ({
                        backButton: {
                            width: 36,
                            height: 36,
                            marginInlineStart: 20,
                            top: t.isElectronAny ? 40 : 5,
                            position: "absolute",
                            zIndex: 1
                        }
                    }), [t]));
                return (0, o.jsx)(i(374533).A, {
                    icon: i(414243).v,
                    colorVariant: "secondary",
                    ariaLabel: r.formatMessage(a.backButtonAriaLabel),
                    onClick: () => {
                        e && l({
                            environment: d,
                            url: e
                        })
                    },
                    style: c.backButton
                })
            }
        },
        343481: (e, t, i) => {
            i.d(t, {
                u: () => o
            });
            var n = i(296540);

            function o(e) {
                let t = (0, n.useContext)(i(811298).qb);
                return {
                    primary: "hcaptcha" === e ? t : void 0
                }
            }
        },
        365265: (e, t, i) => {
            i.d(t, {
                s: () => o
            }), i(296540);
            var n = i(474848);

            function o(e) {
                let {
                    buttonsStore: t,
                    showInvitationVersion: o,
                    isMobile: a,
                    themeOverride: s,
                    callbackType: l
                } = e, r = (0, i(533992).Y0)(), d = (0, i(533992).v3)(), c = (0, i(109939).tz)(), u = (0, i(682985).K8)(() => (null == t ? void 0 : t.state.buttons.loginWithPasskeyButton) === "loading", [t]), g = (0, i(682985).K8)(() => i(83879).b.state.forceAdminSamlLogin ? ? !1, []), m = (0, i(483908).yb)(), p = (0, i(109939).YK)({
                    message: {
                        id: "passkey.genericError",
                        defaultMessage: "Something went wrong; please try another sign-in option or follow the instructions on your device for passkeys"
                    }
                }), h = c.formatMessage(p.message);
                return r.isBannedGoogleSSOUserAgent || g ? null : (0, n.jsx)(i(557143).F, {
                    onClick: async () => {
                        if (i(649296).E({
                                buttonsStore: t,
                                buttonName: "loginWithPasskeyButton",
                                buttonState: "loading"
                            }), r.isElectronAny || r.isMobileNativeCalendar) i(374866).YN(d);
                        else {
                            let e;
                            if (l) return void await i(374866).BU(d, l);
                            i(680007).default.mark("login_time.passkey");
                            try {
                                e = await i(374866).ho({
                                    environment: d,
                                    showInvitationVersion: o,
                                    isMobile: a
                                })
                            } catch (e) {
                                e instanceof i(101787).Cdc && i(83879).b.setState({ ...i(83879).b.state,
                                    alert: c.formatMessage(i(195272).O.cant_access_workspace_from_network)
                                })
                            }
                            "boolean" == typeof e && i(83879).b.setState({ ...i(83879).b.state,
                                alert: h
                            })
                        }
                        i(649296).E({
                            buttonsStore: t,
                            buttonName: "loginWithPasskeyButton",
                            buttonState: "idle"
                        })
                    },
                    icon: i(913825).personKeyFillIcon,
                    getLabel: () => m ? (0, n.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithPasskeyButton.reimaginedLabel",
                        defaultMessage: "Passkey"
                    }) : o ? (0, n.jsx)(i(109939).sA, {
                        id: "loginForm.verifyWithPasskeyButton.label",
                        defaultMessage: "Verify with passkey"
                    }) : (0, n.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithPasskeyButton.label",
                        defaultMessage: "Log in with passkey"
                    }),
                    isLoading: u,
                    themeOverride: s
                })
            }
        },
        374866: (e, t, i) => {
            i.d(t, {
                $p: () => r,
                A$: () => x,
                BU: () => f,
                Dh: () => l,
                W9: () => S,
                WV: () => o,
                YN: () => h,
                Zr: () => s,
                bn: () => c,
                ho: () => b,
                pe: () => m,
                y8: () => g,
                yt: () => p,
                z: () => v
            }), i(964979), i(814603), i(147566), i(198721);
            let n = (0, i(109939).YK)({
                loggingInWithApple: {
                    id: "loginActions.loggingInWithApple.loadingMessage",
                    defaultMessage: "Logging in with Apple…"
                },
                loggingInWithGoogle: {
                    id: "loginActions.loggingInWithGoogle.loadingMessage",
                    defaultMessage: "Logging in with Google…"
                },
                googleErrorMessage: {
                    id: "loginActions.loggingInWithGoogle.errorMessage",
                    defaultMessage: "Something went wrong while trying to log in with Google."
                },
                titleMessageGooglePopup: {
                    defaultMessage: "Google login",
                    id: "loginActions.googleLoginPopupModal.title"
                },
                titleMessageMicrosoftPopup: {
                    defaultMessage: "Microsoft login",
                    id: "loginActions.microsoftLoginPopupModal.title"
                }
            });
            async function o(e) {
                let {
                    environment: t,
                    disableLoginLink: n,
                    reverify: o,
                    needsSendTemporaryPasswordReason: s,
                    challengeProps: l,
                    onSendTemporaryPasswordSuccess: r,
                    onSendTemporaryPasswordFailure: d,
                    isResend: c
                } = e, u = await (0, i(149995).xs)({
                    environment: t,
                    shouldExecute: void 0 !== i(83879).b.state.challengeProvider,
                    options: l,
                    action: "login_temporary_password",
                    logMetadata: {
                        email: i(83879).b.state.email
                    }
                });
                await a({
                    environment: t,
                    disableLoginLink: n,
                    reverify: o,
                    needsSendTemporaryPasswordReason: s,
                    challengeToken: u,
                    loginOptionsToken: i(83879).b.state.loginOptionsToken,
                    onSendTemporaryPasswordSuccess: r,
                    onSendTemporaryPasswordFailure: d,
                    isResend: c
                })
            }
            async function a(e) {
                let {
                    environment: t,
                    reverify: n,
                    challengeToken: o,
                    loginOptionsToken: a,
                    onSendTemporaryPasswordSuccess: s,
                    onSendTemporaryPasswordFailure: l,
                    isResend: r
                } = e, {
                    RouterStore: d
                } = t, c = e.disableLoginLink || !!(0, i(13565).sY)() || (0, i(891545).A)();
                i(578942).QR(t, r);
                let {
                    url: u
                } = i(998071).v4(t), g = i(483908).Sw(t), m = i(83879).b.getState(), p = "microsoft_login" === m.loginType || "microsoft_verification" === m.loginType, h = {
                    email: m.email,
                    redirectURL: u,
                    disableLoginLink: c,
                    native: t.device.isNative,
                    clientApp: i(483908).ye() ? "sai" : void 0,
                    isSignup: "signup" === d.state.route.name,
                    challengeToken: "hcaptcha" === m.challengeProvider ? o : void 0,
                    shouldHidePasscode: g,
                    loginOptionsToken: a,
                    deviceId: await (0, i(128190).getExperimentDeviceId)(t),
                    loginRouteOrigin: (0, i(13565).xd)()
                };
                p && (h = { ...h,
                    thirdPartyToken: m.thirdPartyToken,
                    microsoftEmailVerification: !0
                });
                let f = await t.api.callApi({
                    eventName: "sendTemporaryPassword",
                    environment: t,
                    data: h
                });
                if ("success" === f.type) {
                    let {
                        csrfState: e
                    } = f.data;
                    if (p ? i(83879).b.setState({ ...m,
                            loginType: "microsoft_verification",
                            password: "",
                            alert: void 0,
                            hiddenPasscode: g,
                            sentEmailPasscodeState: e
                        }) : i(83879).b.setState({ ...i(83879).b.state,
                            loginType: n ? "reverify" : "temporary",
                            password: "",
                            sentEmailPasscodeState: e,
                            alert: void 0,
                            hiddenPasscode: g
                        }), null == s || s(), function({
                            environment: e,
                            isMicrosoftLogin: t
                        }) {
                            return e.device.isElectronAny && "en-US" === i(849917).locale && !t
                        }({
                            environment: t,
                            isMicrosoftLogin: p
                        })) {
                        let e = await (0, i(647439).T)(t),
                            n = i(758654).Gm({
                                url: `${i(986939).A.domainBaseUrl}${i(168962).JZ.desktopEmailConfirm}`,
                                query: {
                                    state: btoa(JSON.stringify({
                                        email: i(83879).b.state.email,
                                        deviceId: e
                                    }))
                                }
                            });
                        t.device.isElectronAny && i(589883).P(n)
                    }
                } else {
                    null == l || l();
                    let e = (0, i(922271).H)(i(962299).A.getIntl(), f);
                    i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "email",
                        password: "",
                        alert: e
                    })
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    email: n,
                    password: o,
                    redirectURL: a,
                    challengeTokenState: s
                } = e, l = await (0, i(395066).loadCurrentUserId)(t), r = (e => {
                    var t;
                    if (void 0 !== e.challengeProvider) {
                        if ((null == (t = e.challengeTokenState) ? void 0 : t.status) === "ready") return e.challengeTokenState.token;
                        i(773352).log({
                            level: "warning",
                            from: "loginWithPassword",
                            type: "challengeTokenNotReady",
                            data: {
                                email: n,
                                provider: e.challengeProvider
                            }
                        })
                    }
                })({
                    challengeTokenState: s,
                    challengeProvider: i(83879).b.state.challengeProvider
                }), d = await t.api.callApi({
                    eventName: "loginWithEmail",
                    environment: t,
                    data: {
                        email: n,
                        password: o,
                        challengeToken: "hcaptcha" === i(83879).b.state.challengeProvider ? r : void 0,
                        loginOptionsToken: i(83879).b.state.loginOptionsToken,
                        source: (0, i(13565).dY)(),
                        loginRouteOrigin: (0, i(13565).xd)()
                    }
                });
                if ("success" !== d.type) {
                    var c;
                    return await i(724942).pQ(t, d), (null == (c = d.body) || null == (c = c.clientData) ? void 0 : c.type) === "login_options_invalid" && i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "email",
                        password: ""
                    }), (0, i(922271).H)(i(962299).A.getIntl(), d)
                } {
                    let e = d.data.enabledMfaSettings ? ? [],
                        {
                            userId: n
                        } = d.data;
                    e.length > 0 ? i(724942).ur({
                        environment: t,
                        isNewSignup: !1,
                        userId: n,
                        redirectURL: a,
                        previousPersistedUserId: l,
                        loginMethod: "password",
                        mfaSettings: e,
                        targetDomain: i(724942).CL(d.data)
                    }) : await i(724942).Pq({
                        environment: t,
                        isNewSignup: !1,
                        userId: n,
                        redirectURL: a,
                        previousPersistedUserId: l,
                        loginMethod: "password",
                        challengeProvider: i(83879).b.state.challengeProvider,
                        targetDomain: i(724942).CL(d.data)
                    })
                }
            }
            async function l(e) {
                let {
                    environment: t
                } = e, n = await t.api.callApi({
                    eventName: "sendTemporaryPassword",
                    environment: t,
                    data: {
                        passwordReset: !0,
                        email: i(83879).b.state.email,
                        native: t.device.isNative,
                        clientApp: i(483908).ye() ? "sai" : void 0,
                        loginOptionsToken: i(83879).b.state.loginOptionsToken
                    }
                });
                if ("success" === n.type) {
                    let {
                        csrfState: e
                    } = n.data;
                    i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "reset",
                        password: "",
                        sentPasswordResetState: e,
                        alert: void 0
                    })
                } else {
                    let e = (0, i(922271).H)(i(962299).A.getIntl(), n);
                    i(83879).b.setState({ ...i(83879).b.state,
                        password: "",
                        alert: e
                    })
                }
            }
            async function r(e) {
                let {
                    environment: t
                } = e, {
                    mobileNative: n
                } = t, o = await (0, i(395066).loadCurrentUserId)(t);
                if (i(578942).lt(t), n && n.hasNativeAppleLogin()) return void await d({
                    environment: t,
                    previousPersistedUserId: o
                });
                let a = (0, i(321543).Le)(t),
                    s = i(132702).tt(i(986939).A.domainBaseUrl, {
                        authType: a
                    });
                s = a.redirectToAuth ? s : await (0, i(321543).YN)(t, s), t.mobileNative ? i(724942).lE(t, s) : t.device.isElectronAny ? i(589883).P(s) : (0, i(318620).Y)(s)
            }
            async function d(e) {
                let {
                    environment: t,
                    previousPersistedUserId: o
                } = e, {
                    mobileNative: a
                } = t;
                if (!a) return;
                let s = await a.requestNativeAppleAuth();
                if (s)
                    if (s.error) i(773352).log({
                        level: "error",
                        from: "loginActions",
                        type: "requestNativeAppleAuth",
                        error: (0, i(416607).convertErrorToLog)(s.error)
                    });
                    else {
                        i(262058).m({
                            message: n.loggingInWithApple
                        });
                        let {
                            code: e,
                            nonce: a,
                            firstName: l,
                            lastName: r
                        } = s.value, d = await t.api.callApi({
                            eventName: "loginWithAppleNativeAuth",
                            environment: t,
                            data: {
                                code: e,
                                nonce: a,
                                firstName: l,
                                lastName: r,
                                loginRouteOrigin: (0, i(13565).xd)()
                            }
                        });
                        if ("success" === d.type) {
                            let {
                                isNewSignup: e,
                                userId: n
                            } = d.data;
                            await i(724942).Pq({
                                environment: t,
                                isNewSignup: e,
                                userId: n,
                                previousPersistedUserId: o,
                                loginMethod: "login-with-apple",
                                targetDomain: i(724942).CL(d.data)
                            }), i(262058).V()
                        } else {
                            await i(724942).pQ(t, d);
                            let e = (0, i(922271).H)(i(962299).A.getIntl(), d);
                            i(83879).b.setState({ ...i(83879).b.state,
                                alert: e
                            }), i(262058).V()
                        }
                    }
            }
            async function c(e) {
                let {
                    environment: t
                } = e, o = i(483908).EB() || i(483908).Nz() ? (0, i(13565).dY)() : void 0;
                i(578942).P6(t);
                let a = (0, i(321543).LX)(t),
                    s = i(132702).LC(i(986939).A.domainBaseUrl, {
                        authType: a,
                        source: o
                    });
                if (s = a.redirectToAuth ? s : await (0, i(321543).YN)(t, s), t.mobileNative) i(724942).lE(t, s);
                else if ("redirect" === a.callbackType)(0, i(318620).Y)(s);
                else if (t.device.isElectronAny) i(589883).P(s);
                else {
                    let e = await i(956935).P(t, {
                        width: 610,
                        height: 700,
                        url: s,
                        titleMessage: n.titleMessageMicrosoftPopup
                    });
                    if (!e) return;
                    let o = i(758654).Jh({
                        url: i(758654).ZO(e),
                        pathname: i(168962).JZ.microsoftAuthCallback
                    });
                    (0, i(79266).navigate)({
                        environment: t,
                        url: o
                    })
                }
            }
            let u = i(962299).A.formatMessage(n.googleErrorMessage);
            async function g(e) {
                let {
                    environment: t,
                    email: o,
                    permissionsStore: a
                } = e, {
                    mobileNative: s
                } = t, l = await (0, i(395066).loadCurrentUserId)(t);
                i(578942).s(t);
                let r = s && s.hasNativeGoogleLogin() ? () => s.requestGoogleJwt() : void 0;
                if (r) {
                    let e = await r();
                    if (e) {
                        if (e.error) return void i(773352).log({
                            level: "error",
                            from: "loginActions",
                            type: "requestGoogleJwt",
                            error: (0, i(416607).convertErrorToLog)(e.error)
                        }); {
                            let o;
                            i(262058).m({
                                message: n.loggingInWithGoogle
                            });
                            let {
                                idToken: a
                            } = e.value, {
                                device: s
                            } = t;
                            s.isElectronMail ? o = "nativemailredirect" : s.isElectron ? o = "nativeredirect" : s.isAndroid ? o = (0, i(321543).B4)(s) : s.isNative && (o = "native");
                            let r = await t.api.callApi({
                                eventName: "loginWithGoogleJwt",
                                environment: t,
                                data: {
                                    idToken: a,
                                    callbackType: o
                                }
                            });
                            if ("success" === r.type) {
                                let {
                                    isNewSignup: e,
                                    userId: n
                                } = r.data;
                                await i(724942).Pq({
                                    environment: t,
                                    isNewSignup: e,
                                    userId: n,
                                    previousPersistedUserId: l,
                                    loginMethod: "login-with-google",
                                    targetDomain: i(724942).CL(r.data)
                                }), i(262058).V()
                            } else await i(724942).pQ(t, r), i(83879).b.setState({ ...i(83879).b.state,
                                alert: u
                            }), i(262058).V()
                        }
                        return
                    }
                }
                let d = i(483908).EB() || i(483908).Nz() ? (0, i(13565).dY)() : void 0,
                    c = (0, i(321543).LX)(t),
                    g = crypto.randomUUID(),
                    m = i(132702).g$(i(986939).A.domainBaseUrl, {
                        email: o,
                        contacts: a.state.contacts,
                        authType: c,
                        source: d
                    }, g);
                if (sessionStorage.setItem("googleLoginRequestId", g), m = c.redirectToAuth ? m : await (0, i(321543).YN)(t, m, !!(t.mobileNative && i(986939).A.domainBaseUrl.indexOf("localhost") >= 0)), t.mobileNative) i(724942).lE(t, m);
                else if ("redirect" === c.callbackType)(0, i(318620).Y)(m);
                else if (t.device.isElectronAny) i(589883).P(m);
                else {
                    let e = await i(956935).P(t, {
                        width: 610,
                        height: 700,
                        url: m,
                        titleMessage: n.titleMessageGooglePopup
                    });
                    if (!e) return;
                    let o = i(758654).Jh({
                        url: i(758654).ZO(e),
                        pathname: i(168962).JZ.googleAuthCallback
                    });
                    (0, i(79266).navigate)({
                        environment: t,
                        url: o
                    })
                }
            }
            async function m(e) {
                let {
                    environment: t
                } = e;
                if (!i(83879).b.isEmail()) return;
                let {
                    email: n
                } = i(83879).b.state, o = await t.api.callApi({
                    eventName: "getLoginOptions",
                    environment: t,
                    data: {
                        email: n,
                        requireWorkTypeEmail: (0, i(891545).A)()
                    }
                });
                if ("failed" === o.type) {
                    var a;
                    let e = (0, i(922271).H)(i(962299).A.getIntl(), o);
                    i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "email",
                        alert: e
                    }), a = n, (0, i(104310).u)({
                        event: {
                            eventName: "login_invalid_email_submitted",
                            eventProperties: {
                                invalidEmail: a
                            }
                        }
                    });
                    return
                }
                let s = o.data;
                if ("required" === s.samlSignIn) {
                    await i(724942).G0(2e3), i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "saml",
                        alert: "Redirecting you to use SAML SSO"
                    }), p({
                        environment: t
                    });
                    return
                }((0, i(884353).aq)({
                    device: t.device,
                    email: n,
                    cookieService: t.cookieService
                }), i(83879).b.setState({ ...i(83879).b.state,
                    loginOptionsToken: s.loginOptionsToken,
                    challengeProvider: s.challengeProvider
                }), s.hasAccount) ? s.mustReverify ? i(83879).b.setState({ ...i(83879).b.state,
                    needsSendTemporaryPasswordReason: "reverify"
                }) : s.passwordSignIn ? i(83879).b.setState({ ...i(83879).b.state,
                    loginType: "password",
                    alert: void 0
                }) : i(83879).b.setState({ ...i(83879).b.state,
                    needsSendTemporaryPasswordReason: "login_no_password"
                }): i(83879).b.setState({ ...i(83879).b.state,
                    needsSendTemporaryPasswordReason: "signup"
                })
            }
            async function p(e) {
                let t, n, {
                        environment: o
                    } = e,
                    {
                        device: a
                    } = o;
                if (!i(83879).b.isSaml()) return;
                let {
                    email: s
                } = i(83879).b.state, l = i(962299).A.getIntl();
                if (!s && !i(83879).b.state.forceAdminSamlLogin) return;
                a.isElectronMail ? n = "nativemailredirect" : a.isElectronCalendar || a.isMobileNativeCalendar ? n = "nativecalendarredirect" : a.isElectron ? n = "nativeredirect" : a.isNative && (n = (0, i(321543).B4)(a));
                let r = (0, i(13565).KB)({
                        config: i(986939).A,
                        fileHostProtocol: i(986939).A.secureFileConfig.protocol,
                        fileHostName: i(986939).A.secureFileConfig.hostname
                    }),
                    d = (null == r ? void 0 : r.type) === "other" || (null == r ? void 0 : r.type) === "file" ? r.redirectUrl : void 0;
                (0, i(760578).ds)("production").includes(window.location.hostname) && (t = crypto.randomUUID(), sessionStorage.setItem("samlCsrfNonce", t));
                let c = await o.api.callApi({
                    eventName: "getSamlRedirect",
                    environment: o,
                    data: {
                        email: s,
                        callbackType: n,
                        redirectUrl: d,
                        samlCsrfNonce: t,
                        loginRouteOrigin: (0, i(13565).xd)()
                    }
                });
                if ("failed" === c.type) return void i(83879).b.setState({ ...i(83879).b.state,
                    alert: (0, i(922271).H)(l, c)
                });
                i(83879).b.setState({ ...i(83879).b.state,
                    alert: void 0
                });
                let u = c.data.redirectUrl;
                if (u) {
                    let e = (0, i(41225).iK)();
                    if (e) {
                        let t = new URL(u);
                        t.searchParams.set(i(41225).sg, e), i(724942).t8(o, t.toString())
                    } else i(724942).t8(o, u)
                }
            }

            function h(e) {
                let t = {
                        callbackType: (0, i(321543).LX)(e).callbackType
                    },
                    n = i(758654).Gm({
                        url: `${i(986939).A.domainBaseUrl}${i(168962).JZ.passkeyAuthVerify}`,
                        query: t
                    });
                e.mobileNative ? i(724942).lE(e, n) : e.device.isElectronAny ? i(589883).P(n) : (0, i(79266).navigate)({
                    environment: e,
                    url: n
                })
            }
            async function f(e, t) {
                let n = await y(e);
                if (!n) return;
                let {
                    attestation: o,
                    attemptId: a
                } = n, s = i(758654).O$(i(168962).JZ.passkeyAuthCallback, {
                    attestation: JSON.stringify(o),
                    attemptId: a
                });
                "nativemailredirect" === t ? (0, i(79266).navigate)({
                    environment: e,
                    url: `/nativemail${s}`
                }) : "nativecalendarredirect" === t ? (0, i(79266).navigate)({
                    environment: e,
                    url: `/nativecalendar${s}`
                }) : (0, i(79266).navigate)({
                    environment: e,
                    url: `/native${s}`
                })
            }
            async function y(e) {
                let t, n = await e.api.callApi({
                    eventName: "authPasskeyGenerateChallenge",
                    environment: e,
                    data: {}
                });
                if ("success" === n.type) {
                    try {
                        t = await (0, i(412681).HS)(n.data.options, !1)
                    } catch (e) {
                        return
                    }
                    return {
                        attestation: t,
                        attemptId: n.data.attemptId
                    }
                }
            }
            async function b(e) {
                let {
                    environment: t,
                    showInvitationVersion: n
                } = e, o = await y(t);
                if (!o) return !1;
                let {
                    attestation: a,
                    attemptId: s
                } = o;
                return await i(724942).zo({
                    environment: t,
                    attestation: a,
                    attemptId: s,
                    showInvitationVersion: n
                })
            }
            async function x(e) {
                let {
                    environment: t,
                    state: n,
                    password: o
                } = e, a = await t.api.callApi({
                    eventName: "verifyEmail",
                    environment: t,
                    data: {
                        state: n,
                        password: o
                    }
                });
                if ("success" !== a.type) return (0, i(922271).H)(i(962299).A.getIntl(), a)
            }
            async function v(e) {
                let {
                    environment: t,
                    redirectURL: n,
                    previousPersistedUserId: o,
                    userId: a,
                    regenerateBackupCodes: s
                } = e;
                await i(724942).Pq({
                    environment: t,
                    isNewSignup: !1,
                    userId: a,
                    redirectURL: n,
                    previousPersistedUserId: o,
                    loginMethod: "password-mfa",
                    targetDomain: e.targetDomain
                }), s && (0, i(599754).Ow)({
                    currentPage: "profile",
                    openedFrom: "login"
                })
            }

            function S() {
                i(83879).b.reset()
            }
        },
        395416: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            let n = {
                fontSize: {
                    ui: {
                        s: 14,
                        m: 15
                    },
                    body: {
                        s: 15,
                        m: 17,
                        l: 20
                    },
                    title: {
                        s: 22,
                        m: 30,
                        l: 38,
                        xl: 50,
                        xxl: 74
                    }
                },
                fontFamily: {
                    sans: 'inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                    handwriting: 'permanent-marker, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                    mono: "iawriter-mono, Nitti, Menlo, Courier, monospace"
                },
                fontWeight: {
                    regular: 400,
                    medium: 500,
                    bold: 700
                },
                styles: {
                    paragraph: {
                        fontSize: 17,
                        lineHeight: 1.5
                    },
                    smallCaps: {
                        textTransform: "uppercase",
                        fontSize: 11,
                        letterSpacing: .5,
                        fontWeight: 500
                    }
                }
            }
        },
        434089: (e, t, i) => {
            i.d(t, {
                m: () => o
            });
            let n = {
                small: 600,
                medium: 800,
                large: 1020,
                giant: 1380
            };

            function o(e, t, i) {
                let {
                    WindowSizeStore: o
                } = e, a = "number" == typeof i ? i : n[i];
                return "minWidth" === t ? o.state.width >= a : o.state.width <= a
            }
        },
        533859: (e, t, i) => {
            i.d(t, {
                z: () => s
            }), i(296540);
            var n = i(474848);
            let o = {
                    userSelect: "auto",
                    WebkitUserSelect: "auto"
                },
                a = {
                    marginTop: 30,
                    marginBottom: 0
                };

            function s(e) {
                let {
                    disable: t,
                    style: s,
                    themeOverride: l
                } = e, r = (0, i(960253).I)(() => {
                    let e = l ? ? i(632079).Tj;
                    return {
                        root: {
                            width: "100%",
                            marginBottom: 0,
                            fontSize: 12,
                            lineHeight: "16px",
                            color: e.text.secondary,
                            textAlign: "center",
                            textWrap: "balance"
                        },
                        inlineTextLink: {
                            color: e.text.tertiary
                        }
                    }
                }, [l]);
                if (t) return null;
                let d = (e, t) => (0, n.jsx)(i(428217).V, {
                    href: e,
                    external: !0,
                    color: r.inlineTextLink.color,
                    hoverColor: "blue",
                    style: o,
                    children: t
                });
                return (0, n.jsx)("div", {
                    style: { ...r.root,
                        ...s
                    },
                    children: (0, n.jsx)("p", {
                        style: a,
                        children: (0, n.jsx)(i(109939).sA, {
                            id: "loginFormRevamp.disclaimer.withPhotoNotice",
                            defaultMessage: "By continuing, you acknowledge that you understand and agree to the <termsandconditionslink>Terms & Conditions</termsandconditionslink> and <privacypolicylink>Privacy Policy</privacypolicylink>",
                            values: {
                                termsandconditionslink: e => d(i(168962).JZ.termsAndConditions, e),
                                privacypolicylink: e => d(i(168962).JZ.privacyPolicy, e)
                            }
                        })
                    })
                })
            }
        },
        555348: (e, t, i) => {
            i.d(t, {
                a: () => E,
                default: () => I
            }), i(581454), i(814603), i(147566), i(198721);
            var n = i(296540);
            let o = {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            };

            function a(e) {
                return (0, i(434089).m)(e, "maxWidth", "small") ? 20 : (0, i(434089).m)(e, "minWidth", "small") && (0, i(434089).m)(e, "maxWidth", "large") ? 40 : 60
            }
            var s = i(474848);
            let l = function(e) {
                    return (0, s.jsx)("div", {
                        style: o,
                        children: e.children
                    })
                },
                r = function(e) {
                    return (0, s.jsx)("div", {
                        className: i(828432).OUt,
                        id: e.name
                    })
                },
                d = {
                    style0: {
                        height: 1,
                        background: i(632079).oZ.frontBorder
                    }
                };

            function c(e) {
                return (0, s.jsx)("div", {
                    style: { ...d.style0,
                        ...e.style
                    }
                })
            }
            let u = {
                    s: 620,
                    m: 960,
                    l: 1260
                },
                g = function(e) {
                    let t = {
                            width: "100%",
                            maxWidth: u[e.size],
                            margin: "0 auto"
                        },
                        i = e.style ? { ...t,
                            ...e.style
                        } : t;
                    return (0, s.jsx)("div", {
                        style: i,
                        children: e.children
                    })
                },
                m = {
                    inner: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 4
                    },
                    divider: {
                        maxWidth: u.l,
                        margin: "0 auto"
                    }
                };

            function p(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => {
                        var n;
                        let o;
                        return {
                            xPadding: a(t),
                            marginStyle: {
                                marginTop: o = (n = e.marginSize) ? function(e, t) {
                                    switch (t) {
                                        case "xl":
                                            if ((0, i(434089).m)(e, "maxWidth", "small")) return 60;
                                            if ((0, i(434089).m)(e, "maxWidth", "giant")) return 80;
                                            return 160;
                                        case "l":
                                            if ((0, i(434089).m)(e, "maxWidth", "small")) return 60;
                                            if ((0, i(434089).m)(e, "maxWidth", "giant")) return 80;
                                            return 120;
                                        case "m":
                                            if ((0, i(434089).m)(e, "maxWidth", "giant")) return 40;
                                            return 60;
                                        case "s":
                                            return 40;
                                        case "xs":
                                            return Number(20);
                                        default:
                                            return 0
                                    }
                                }(t, n) : 0,
                                marginBottom: o
                            }
                        }
                    }, [t, e.marginSize]),
                    o = (0, i(960253).I)(() => ({
                        section: {
                            paddingInlineStart: e.noSidePadding ? 0 : n.xPadding,
                            paddingInlineEnd: e.noSidePadding ? 0 : n.xPadding,
                            width: "100%",
                            margin: "0 auto",
                            overflow: e.overflowHidden ? "hidden" : "visible",
                            ...n.marginStyle,
                            ...e.style
                        }
                    }), [n.marginStyle, n.xPadding, e.overflowHidden, e.noSidePadding, e.style]);
                return (0, s.jsxs)("section", {
                    style: o.section,
                    children: [e.hasBorderTop ? (0, s.jsx)("div", {
                        style: m.divider,
                        children: (0, s.jsx)(c, {})
                    }) : void 0, (0, s.jsxs)("div", {
                        style: m.inner,
                        children: [e.analyticsName ? (0, s.jsx)(r, {
                            name: e.analyticsName
                        }) : void 0, e.limit ? (0, s.jsx)(g, {
                            size: e.limit,
                            children: e.children
                        }) : e.children]
                    })]
                })
            }
            let h = {
                    desktop: i(896221).A.images.signup.aiMeetingNotesDesktopPng,
                    mobile: i(896221).A.images.signup.aiMeetingNotesMobilePng
                },
                f = {
                    getContent: e => ({
                        title: (0, s.jsx)(i(109939).sA, {
                            id: "signupPage.meetingNotes.title",
                            defaultMessage: "Try AI Meeting Notes."
                        }),
                        subtitle: (0, s.jsx)(i(109939).sA, {
                            id: "signupPage.revamped.signInText",
                            defaultMessage: "Create your Notion account"
                        }),
                        images: h,
                        isForWork: !0
                    })
                },
                y = {
                    desktop: i(896221).A.images.signup.notionSitesDesktopSignupPng,
                    mobile: i(896221).A.images.signup.notionSitesMobileSignupPng
                },
                b = {
                    mobileContent: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 24,
                        width: "100%",
                        overflow: "hidden"
                    },
                    desktopContainer: {
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        width: "100%",
                        overflow: "hidden"
                    },
                    rightColumn: {
                        gridColumn: "span 7",
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        paddingTop: "12vh"
                    },
                    titleSection: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginBottom: 32,
                        textAlign: "start",
                        width: "100%",
                        maxWidth: 320
                    },
                    titleText: {
                        fontSize: 22,
                        fontWeight: i(699422).Wy.semibold,
                        lineHeight: "26px",
                        margin: 0,
                        textAlign: "start",
                        fontFamily: "inherit"
                    },
                    subtitle: {
                        color: i(632079).Tj.text.tertiary
                    },
                    loginSection: {
                        width: "100%",
                        maxWidth: 320
                    },
                    mobileImage: {
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                    },
                    desktopImage: {
                        width: 750,
                        height: "auto",
                        maxHeight: "calc(88vh - 12vh)",
                        objectFit: "contain",
                        flexShrink: 0
                    }
                };

            function x({
                title: e,
                subtitle: t,
                images: n,
                isForWork: o,
                loginPermissionsStore: r,
                showMobileLayout: d
            }) {
                let c = (0, i(533992).v3)(),
                    u = (0, i(682985).K8)(() => a(c), [c]),
                    g = (0, i(960253).I)(() => ({
                        leftColumn: {
                            gridColumn: "span 5",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            paddingInlineStart: u,
                            paddingInlineEnd: u,
                            paddingTop: "12vh",
                            minWidth: 320
                        }
                    }), [u]);
                return (0, s.jsxs)(i(12672).A, {
                    hideNotificationBanner: !0,
                    hideNavItems: !0,
                    analyticsName: "signup",
                    children: [d ? (0, s.jsx)(p, {
                        children: (0, s.jsx)(l, {
                            align: "center",
                            children: (0, s.jsx)("div", {
                                style: b.mobileContent,
                                children: (0, s.jsxs)(i(4458).VP, {
                                    alignItems: "center",
                                    width: "100%",
                                    children: [(0, s.jsxs)("div", {
                                        style: b.titleSection,
                                        children: [(0, s.jsx)(i(636602).d, {}), (0, s.jsx)("div", {
                                            style: b.titleText,
                                            children: e
                                        }), t ? (0, s.jsx)("div", {
                                            style: { ...b.titleText,
                                                ...b.subtitle
                                            },
                                            children: t
                                        }) : void 0]
                                    }), n ? (0, s.jsx)(i(4458).fI, {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: 24,
                                        width: "100%",
                                        maxWidth: 320,
                                        children: (0, s.jsx)(i(989059).A, {
                                            src: n.mobile,
                                            style: b.mobileImage
                                        })
                                    }) : void 0, (0, s.jsx)("div", {
                                        style: b.loginSection,
                                        children: (0, s.jsx)(i(891418).Ay, {
                                            loginPermissionsStore: r,
                                            emailLabelType: o ? "work_email" : "email",
                                            isSignup: !0,
                                            from: "contextualSignupPage"
                                        })
                                    })]
                                })
                            })
                        })
                    }) : (0, s.jsx)(p, {
                        noSidePadding: !0,
                        children: (0, s.jsxs)("div", {
                            style: b.desktopContainer,
                            children: [(0, s.jsxs)("div", {
                                style: g.leftColumn,
                                children: [(0, s.jsxs)("div", {
                                    style: b.titleSection,
                                    children: [(0, s.jsx)(i(636602).d, {}), (0, s.jsx)("div", {
                                        style: b.titleText,
                                        children: e
                                    }), t ? (0, s.jsx)("div", {
                                        style: { ...b.titleText,
                                            ...b.subtitle
                                        },
                                        children: t
                                    }) : void 0]
                                }), (0, s.jsx)("div", {
                                    style: b.loginSection,
                                    children: (0, s.jsx)(i(891418).Ay, {
                                        loginPermissionsStore: r,
                                        emailLabelType: o ? "work_email" : "email",
                                        isSignup: !0,
                                        from: "contextualSignupPage"
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                style: b.rightColumn,
                                children: n ? (0, s.jsx)(i(989059).A, {
                                    src: n.desktop,
                                    style: b.desktopImage
                                }) : void 0
                            })]
                        })
                    }), (0, s.jsx)(E, {
                        isMobile: !1
                    })]
                })
            }

            function v({
                loginPermissionsStore: e,
                showMobileLayout: t,
                featureIntent: n
            }) {
                let o = (0, i(682985).K8)(() => (function(e) {
                    switch (e) {
                        case "meeting_notes":
                            return f;
                        case "notion_sites_signup":
                            let t;
                            return t = i(218744).default.getEligibleGroup({
                                experimentId: "contextual_sites_signup_page",
                                defaultGroup: "control"
                            }), {
                                getContent: e => ({
                                    title: "start_building_today" === t ? (0, s.jsx)(i(109939).sA, {
                                        id: "signupPage.notionSites.title",
                                        defaultMessage: "Start building today."
                                    }) : "try_notion_sites" === t ? (0, s.jsx)(i(109939).sA, {
                                        id: "signupPage.notionSites.tryNotionSites.title",
                                        defaultMessage: "Try Notion Sites."
                                    }) : "build_your_own_notion_site" === t ? (0, s.jsx)(i(109939).sA, {
                                        id: "signupPage.notionSites.buildYourOwnNotionSite.title",
                                        defaultMessage: "Build your own Notion site."
                                    }) : (0, s.jsx)(i(109939).sA, {
                                        id: "signupPage.revamped.titlev2",
                                        defaultMessage: "Your AI workspace."
                                    }),
                                    subtitle: (0, s.jsx)(i(109939).sA, {
                                        id: "signupPage.revamped.signInText",
                                        defaultMessage: "Create your Notion account"
                                    }),
                                    images: y,
                                    isForWork: !1
                                })
                            };
                        default:
                            return null
                    }
                })(n), [n]);
                if (!o) return null;
                let a = o.getContent({
                    showMobileLayout: t,
                    featureIntent: n
                });
                return (0, s.jsx)(x, {
                    title: a.title,
                    subtitle: a.subtitle,
                    images: a.images,
                    isForWork: a.isForWork,
                    loginPermissionsStore: e,
                    showMobileLayout: t
                })
            }
            let S = {
                    marginTop: "12vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                },
                j = {
                    marginInlineStart: "80px",
                    flexGrow: 1
                },
                w = {
                    width: "100%",
                    marginTop: "20px"
                },
                A = {
                    insetInlineStart: 0,
                    bottom: 0,
                    maxWidth: 750,
                    overflow: "hidden"
                },
                k = {
                    width: "100%"
                };

            function M(e) {
                let {
                    loginPermissionsStore: t,
                    imageUrl: n,
                    disableBoxShadow: o,
                    showImageOnLeft: a,
                    isReferralSignup: l,
                    isSignup: r
                } = e, d = (0, i(960253).I)(() => ({
                    screenshot: {
                        boxShadow: o ? "" : i(632079).Tj.shadow.outline.lg,
                        borderRadius: "6px",
                        overflow: "hidden",
                        maxWidth: "650px"
                    }
                }), [o]);
                return (0, s.jsx)("div", {
                    style: S,
                    children: (0, s.jsx)(i(4458).fI, {
                        alignItems: "center",
                        width: "100%",
                        children: a ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("img", {
                                src: n,
                                style: A
                            }), (0, s.jsx)(i(4458).fI, {
                                justifyContent: "center",
                                children: (0, s.jsxs)(i(4458).VP, {
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    maxWidth: 320,
                                    children: [(0, s.jsx)(i(887483).f, {
                                        loginPermissionsStore: t,
                                        emailLabelType: l ? "business_email" : "email",
                                        isSignup: r,
                                        centerTitleContainer: !0,
                                        disableDisclaimer: !0,
                                        isReferralSignup: l
                                    }), (0, s.jsx)(i(533859).z, {
                                        style: w
                                    })]
                                })
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(i(4458).VP, {
                                justifyContent: "center",
                                flexShrink: 0,
                                maxWidth: 320,
                                children: [(0, s.jsx)(i(887483).f, {
                                    loginPermissionsStore: t,
                                    emailLabelType: l ? "business_email" : "email",
                                    isSignup: r,
                                    disableDisclaimer: !0,
                                    isReferralSignup: l
                                }), (0, s.jsx)(i(533859).z, {
                                    style: w
                                })]
                            }), (0, s.jsx)("div", {
                                style: j,
                                children: (0, s.jsx)("div", {
                                    style: d.screenshot,
                                    children: (0, s.jsx)(i(989059).A, {
                                        src: n,
                                        style: k
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            let C = {
                    LoginWithAIPrompt: new(i(815048)).O2("LoginWithAIPrompt", async () => await Promise.all([i.e(45414), i.e(32257), i.e(16922), i.e(15961), i.e(68126)]).then(i.bind(i, 600288)))
                },
                T = (0, i(815048)._h)(C.LoginWithAIPrompt, e => e.LoginWithAIPrompt),
                P = {
                    LoginWithTemplate: new(i(815048)).O2("LoginWithTemplate", async () => await i.e(2144).then(i.bind(i, 469176)))
                },
                _ = (0, i(815048)._h)(P.LoginWithTemplate, e => e.LoginWithTemplate),
                L = {
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                    maxHeight: "100vh"
                };

            function I({
                isSignup: e,
                referrer: t,
                style: o,
                redirectURL: a,
                addAnotherAccount: l
            }) {
                let r = (0, i(533992).v3)(),
                    d = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    d.current || (i(986939).A.isAdminMode && ["development", "staging", "production"].includes("production") ? i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "saml",
                        forceAdminSamlLogin: !0,
                        email: "_@makenotion.com"
                    }) : "email" === i(83879).b.state.loginType && r.device.isMobileBrowser && !r.device.isBannedGoogleSSOUserAgent && "front_personal" !== t && i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "google"
                    })), d.current = !0
                }, [r.device.isBannedGoogleSSOUserAgent, r.device.isMobileBrowser, t]);
                let c = (0, i(682985).K8)(() => i(686494).A.state.publicPageData, []),
                    {
                        device: u,
                        WindowSizeStore: g
                    } = r,
                    m = i(986939).A.isMobile || u.isMobileBrowser,
                    p = (0, i(682985).K8)(() => g.state.width, [g]),
                    h = m || p < 852,
                    f = (0, i(109939).tz)();
                return m || "en-US" !== f.locale || (0, i(219279).ZP)({
                    experimentId: "login_page_aa_test",
                    enableEventTrailLogging: !0,
                    defaultGroup: "control"
                }), (0, s.jsx)(W, {
                    analyticsName: e ? "signup" : "login",
                    publicPageData: c,
                    showMobileLayout: h,
                    isMobile: m,
                    isSignup: e,
                    redirectURL: a,
                    addAnotherAccount: l
                })
            }
            let B = {
                helpIcon: {
                    height: 20,
                    width: 20,
                    fill: i(632079).Tj.icon.tertiary
                },
                helpButton: {
                    cursor: "pointer",
                    color: i(632079).Tj.text.secondary
                },
                style0: {
                    position: "fixed",
                    bottom: 12,
                    insetInlineEnd: 12,
                    cursor: "pointer"
                }
            };

            function E({
                isMobile: e
            }) {
                let t = (0, i(109939).tz)().formatMessage({
                    defaultMessage: "Help",
                    id: "signupPage.help"
                });
                return (0, s.jsx)(i(656252).A, {
                    onClick: () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "login_help_menu_button_click",
                                eventProperties: {}
                            }
                        })
                    },
                    alignmentToOrigin: "end",
                    placementToOrigin: "top",
                    popupType: e ? i(656252).z.SlideUp : i(656252).z.Popup,
                    originGap: 12,
                    content: i => (0, s.jsx)(N, {
                        buttonPopupParent: i,
                        isMobile: e,
                        helpMenuButtonLabel: t
                    }),
                    children: n => e ? (0, s.jsx)("div", { ...n,
                        style: B.helpButton,
                        children: (0, s.jsx)(i(109939).sA, {
                            id: "loginPage.helpButton.label",
                            defaultMessage: "Help"
                        })
                    }) : (0, s.jsx)(i(374533).A, { ...n,
                        style: B.style0,
                        icon: i(80094).questionMarkCircleIcon,
                        iconStyle: B.helpIcon,
                        ariaLabel: t
                    })
                })
            }

            function N({
                buttonPopupParent: e,
                isMobile: t,
                helpMenuButtonLabel: n
            }) {
                let o = (0, i(533992).v3)(),
                    a = (0, i(109939).tz)(),
                    l = [{
                        title: a.formatMessage({
                            defaultMessage: "Message support",
                            id: "signupHelpMenu.messageSupport"
                        }),
                        icon: i(90814).bubbleEllipsesIcon,
                        onClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "login_help_menu_message_support_click",
                                    eventProperties: {}
                                }
                            }), i(963430).S({
                                environment: o,
                                from: "signup_help_menu"
                            })
                        }
                    }, {
                        title: a.formatMessage({
                            defaultMessage: "Help & documentation",
                            id: "signupHelpMenu.helpAndDocumentation"
                        }),
                        icon: i(712802).bookIcon,
                        onClick: () => {
                            let e = `https://www.notion.com/${i(168962).JZ.help}`;
                            (0, i(104310).u)({
                                event: {
                                    eventName: "login_help_menu_help_and_documentation_click",
                                    eventProperties: {}
                                }
                            }), window.open(e, "_blank")
                        }
                    }, {
                        title: a.formatMessage({
                            defaultMessage: "Terms & privacy",
                            id: "signupHelpMenu.termsAndPrivacy"
                        }),
                        icon: i(550270).D,
                        onClick: () => {
                            let e = i(168962).JZ.termsAndPrivacy;
                            (0, i(104310).u)({
                                event: {
                                    eventName: "login_help_menu_terms_and_privacy_click",
                                    eventProperties: {}
                                }
                            }), window.open(e, "_blank")
                        }
                    }, {
                        title: a.formatMessage({
                            defaultMessage: "Status",
                            id: "signupHelpMenu.status"
                        }),
                        icon: i(774458).n,
                        onClick: () => {
                            let e = i(168962).JZ.statusPage;
                            (0, i(104310).u)({
                                event: {
                                    eventName: "login_help_menu_status_click",
                                    eventProperties: {}
                                }
                            }), window.open(e, "_blank")
                        }
                    }].map((e, t) => ({
                        key: t,
                        render: t => (0, s.jsx)(i(95582).A, { ...t,
                            disabled: !1,
                            title: e.title,
                            icon: (0, s.jsx)(i(16275).I, {
                                icon: e.icon
                            }),
                            onClick: e.onClick
                        }),
                        action: () => {
                            window.parent.close()
                        }
                    })),
                    r = t ? {
                        menuType: i(649476).gu.Modal,
                        title: n,
                        right: (0, s.jsx)(i(109939).sA, { ...i(789722).W.done
                        }),
                        onClickRight: () => {
                            e.close()
                        }
                    } : {
                        menuType: i(649476).gu.Popup,
                        width: 280,
                        maxWidth: 360
                    };
                return (0, s.jsx)(i(747369).A, { ...r,
                    children: (0, s.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        sections: [{
                            key: 0,
                            items: l
                        }],
                        initialFocus: void 0
                    })
                })
            }

            function W({
                analyticsName: e,
                publicPageData: t,
                showMobileLayout: n,
                isMobile: o,
                isSignup: a,
                loginPermissionsStore: r,
                redirectURL: d,
                addAnotherAccount: c
            }) {
                let u, g = (0, i(682985).uB)(r, i(719069).A),
                    m = (u = (0, i(533992).v3)(), (0, i(682985).K8)(() => {
                        let e = u.RouterStore.state.route;
                        if ("login" !== e.name) return;
                        let {
                            redirectURL: t
                        } = e;
                        if (!t) return;
                        let n = i(132702).parseRoute({
                            url: t,
                            isMobile: !1,
                            baseUrl: "",
                            publicDomainName: "",
                            protocol: "",
                            currentUrl: "",
                            requestedOnAlternateDomain: (0, i(700473).wasRequestedOnAlternateDomain)()
                        });
                        if ("marketplace" === n.name || "gallery" === n.name) return n.slug
                    }, [u])),
                    h = !o,
                    f = !!new URLSearchParams(window.location.search).get("prompt"),
                    y = (0, i(483908).OD)(),
                    b = (0, i(483908).Nz)(),
                    x = (0, i(483908).EB)(),
                    S = !!d && c,
                    j = (0, i(682985).K8)(() => (0, i(891545).A)(), []),
                    w = (0, i(682985).K8)(() => i(13565).J0(), []),
                    A = (0, i(682985).K8)(() => a && w && !!i(849917).locale.toLowerCase().startsWith("en") && !!w && "meeting_notes" !== w && "notion_sites_signup" === w && "control" !== i(218744).default.getEligibleGroup({
                        experimentId: "contextual_sites_signup_page",
                        defaultGroup: "control"
                    }), [a, w]),
                    k = (0, i(483908).yb)() && !m,
                    C = (0, i(219279).aH)({
                        gateName: "acquisition_contextual_signup_page"
                    });
                return !f || o || y || b || x ? A && C ? (0, s.jsx)(v, {
                    loginPermissionsStore: g,
                    showMobileLayout: n,
                    featureIntent: w
                }) : (0, s.jsxs)(i(12672).A, {
                    hideNotificationBanner: !0,
                    hideNavItems: !0,
                    analyticsName: e,
                    hideTopbar: S || k,
                    children: [S ? (0, s.jsx)(i(304908).o, {
                        redirectURL: d
                    }) : void 0, (0, s.jsx)("div", {
                        style: L,
                        children: m ? (0, s.jsx)(p, {
                            limit: "l",
                            children: (0, s.jsx)(l, {
                                align: "center",
                                children: (0, s.jsx)(_, {
                                    templateSlug: m,
                                    loginPermissionsStore: g,
                                    showMobileLayout: n
                                })
                            })
                        }) : !n && j ? (0, s.jsx)(p, {
                            limit: "l",
                            children: (0, s.jsx)(l, {
                                align: "center",
                                children: (0, s.jsx)(M, {
                                    loginPermissionsStore: g,
                                    imageUrl: i(896221).A.images.referralPreviewPng,
                                    disableBoxShadow: !0,
                                    isReferralSignup: !0,
                                    isSignup: a
                                })
                            })
                        }) : k ? (0, s.jsx)(i(708690).m, {
                            showMobileLayout: n,
                            publicPageData: t,
                            isSignup: a,
                            redirectURL: d,
                            addAnotherAccount: c,
                            isMobile: o,
                            loginPermissionsStore: g,
                            isDesktopApp: !1
                        }) : (0, s.jsx)(p, {
                            limit: "l",
                            children: (0, s.jsx)(l, {
                                align: "center",
                                children: (0, s.jsx)(i(158820).O, {
                                    showMobileLayout: n,
                                    publicPageData: t,
                                    isSignup: a,
                                    redirectURL: d,
                                    addAnotherAccount: c,
                                    isMobile: o,
                                    loginPermissionsStore: g
                                })
                            })
                        })
                    }), h ? (0, s.jsx)(E, {
                        isMobile: o
                    }) : void 0]
                }) : (0, s.jsx)(i(12672).A, {
                    hideNotificationBanner: !0,
                    hideNavItems: !0,
                    analyticsName: e,
                    children: (0, s.jsx)("div", {
                        style: L,
                        children: (0, s.jsxs)(p, {
                            overflowHidden: !0,
                            children: [(0, s.jsx)(T, {
                                loginPermissionsStore: g
                            }), h ? (0, s.jsx)(E, {
                                isMobile: o
                            }) : void 0]
                        })
                    })
                })
            }
        },
        557143: (e, t, i) => {
            i.d(t, {
                F: () => d
            }), i(296540);
            var n = i(474848);

            function o({
                onClick: e,
                getLabel: t,
                id: a,
                icon: s,
                isLoading: l,
                themeOverride: r,
                hoveredBackgroundColor: d,
                isFullWidth: c
            }) {
                let u = (0, i(960253).I)(() => {
                    let e = r ? ? i(632079).Tj;
                    return {
                        base: {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            height: 72,
                            borderRadius: 6,
                            color: e.text.primary,
                            fill: e.text.primary,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            fontWeight: i(699422).Wy.medium,
                            minWidth: 112,
                            width: c ? "100%" : void 0,
                            boxShadow: e.shadow.outline.sm
                        },
                        hovered: {
                            background: d ? ? e.buttonHoveredBackground
                        }
                    }
                }, [c, r, d]);
                return (0, n.jsxs)(i(64960).Ay, {
                    id: a,
                    onClick: e,
                    style: u.base,
                    hoveredStyle: u.hovered,
                    disabled: l,
                    children: [l ? (0, n.jsx)(i(517334).k, {
                        size: "lg"
                    }) : (0, n.jsx)(i(16275).I, {
                        size: "lg",
                        icon: s,
                        fitToViewBox: "all"
                    }), (0, n.jsx)(i(111010).D, {
                        styleKey: "bodyMedium",
                        children: t()
                    })]
                })
            }
            let a = {
                    marginInlineStart: "auto",
                    marginInlineEnd: 8
                },
                s = {
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center"
                },
                l = {
                    position: "absolute",
                    insetInlineStart: 10
                };

            function r({
                onClick: e,
                getLabel: t,
                id: o,
                icon: d,
                isLoading: c,
                themeOverride: u,
                backgroundColor: g,
                hoveredBackgroundColor: m
            }) {
                let p = (0, i(483908).OD)(),
                    h = (0, i(960253).I)(() => {
                        let e = u ? ? i(632079).Tj;
                        return {
                            base: {
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                whiteSpace: "nowrap",
                                height: 36,
                                borderRadius: 6,
                                color: e.text.primary,
                                fill: e.text.primary,
                                background: g ? ? "none",
                                fontSize: 14,
                                lineHeight: 1,
                                paddingInlineStart: 12,
                                paddingInlineEnd: 12,
                                fontWeight: i(699422).Wy.medium,
                                border: `1px solid ${e.border.primary}`,
                                width: "100%",
                                boxShadow: "none",
                                marginTop: "8px",
                                ...p && {
                                    height: 48,
                                    borderRadius: 12,
                                    fontSize: 16,
                                    marginTop: 10,
                                    fontWeight: i(699422).Wy.semibold
                                },
                                ...c && {
                                    display: "grid",
                                    gridTemplateColumns: "1fr auto 1fr"
                                }
                            },
                            hovered: {
                                background: m ? ? e.buttonHoveredBackground
                            }
                        }
                    }, [p, u, c, g, m]);
                return (0, n.jsxs)(i(64960).Ay, {
                    id: o,
                    onClick: e,
                    style: h.base,
                    hoveredStyle: h.hovered,
                    disabled: c,
                    children: [c ? (0, n.jsx)(i(517334).k, {
                        style: a
                    }) : null, (0, n.jsxs)("div", {
                        style: s,
                        children: [" ", (0, n.jsx)(i(16275).I, {
                            icon: d,
                            size: p ? "default" : "sm",
                            style: l,
                            fitToViewBox: "all"
                        }), (0, n.jsx)(i(111010).D, {
                            styleKey: "bodyMedium",
                            children: t()
                        })]
                    })]
                })
            }

            function d(e) {
                return (0, i(483908).yb)() ? (0, n.jsx)(o, { ...e
                }) : (0, n.jsx)(r, { ...e
                })
            }
        },
        618731: (e, t, i) => {
            function n(e, t) {
                let {
                    name: n,
                    ...o
                } = t;
                (0, i(195857).DO_NOT_USE_trackLegacy)("click_link", { ...o,
                    click_name: n
                })
            }

            function o(e, t) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("scroll", t)
            }

            function a(e, t) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("customer_io_in_app_callout_show", t)
            }

            function s(e, t) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("customer_io_in_app_callout_suppress", t)
            }

            function l(e, t) {
                (0, i(195857).DO_NOT_USE_trackLegacy)("customer_io_in_app_callout_dismiss", t)
            }

            function r(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "customer_io_in_app_callout_error",
                        eventProperties: t
                    }
                })
            }
            i.d(t, {
                _C: () => n,
                gQ: () => l,
                gr: () => r,
                jr: () => o,
                pO: () => s,
                v4: () => a
            })
        },
        619209: (e, t, i) => {
            i.d(t, {
                HS: () => a,
                fD: () => o
            }), i(296540);
            var n = i(474848);

            function o(e) {
                switch (e.type) {
                    case "incorrectDomain":
                        return (0, n.jsx)(i(16275).I, {
                            icon: i(515388).globeIcon,
                            colorVariant: "secondary",
                            size: "xl"
                        });
                    case "noAccess":
                        return (0, n.jsx)(r, {
                            publicPageData: e.publicPageData,
                            size: "md"
                        });
                    case "notFound":
                        return (0, n.jsx)(i(16275).I, {
                            icon: i(299985).s,
                            colorVariant: "secondary",
                            size: "xl"
                        });
                    case "offline":
                        return (0, n.jsx)(i(16275).I, {
                            icon: i(277908).wifiExclamationMarkFillIcon,
                            colorVariant: "secondary",
                            size: "xl"
                        });
                    case "unsafe":
                        return (0, n.jsx)(i(16275).I, {
                            colorPalette: "red",
                            colorVariant: "accentPrimary",
                            icon: i(789777).exclamationMarkTriangleFillIcon,
                            size: "xl"
                        });
                    default:
                        return null
                }
            }

            function a({
                iconBoxInitialStyle: e,
                publicPageData: t,
                size: o = "md"
            }) {
                let s = function(e, t) {
                    switch (e) {
                        case "md":
                            return t ? 30 : 40;
                        case "lg":
                            return t ? 48 : 64
                    }
                }(o, i(986939).A.isMobile);
                return (0, i(312028).A)(t.icon) ? (0, n.jsx)(i(968860).A, {
                    size: s,
                    emoji: t.icon
                }) : t.icon ? (0, n.jsx)(i(392392).A, {
                    type: "image_url",
                    size: s,
                    imageURL: t.icon
                }) : t.spaceName ? (0, n.jsx)(i(402363).A, {
                    size: s,
                    title: t.spaceName,
                    style: e
                }) : (0, n.jsx)(i(863637).A, {
                    size: s,
                    isEmptyPage: !1,
                    role: void 0
                })
            }
            let s = {
                    position: "relative"
                },
                l = {
                    bottom: "-6px",
                    position: "absolute",
                    insetInlineEnd: "-6px"
                };

            function r(e) {
                return (0, n.jsxs)("div", {
                    style: s,
                    children: [(0, n.jsx)(a, { ...e
                    }), (0, n.jsx)("div", {
                        style: l,
                        children: (0, n.jsx)(i(16275).I, {
                            icon: i(269298).lockFillIcon,
                            size: "default"
                        })
                    })]
                })
            }
        },
        636602: (e, t, i) => {
            i.d(t, {
                d: () => d
            });
            var n = i(296540),
                o = i(474848);
            let a = {
                position: "relative",
                height: 150,
                width: 150
            };

            function s() {
                let e = (0, i(109939).tz)(),
                    t = (0, i(960253).e)(),
                    [s, l] = (0, n.useState)(!1),
                    r = (0, i(188137).s)();
                (0, n.useEffect)(() => {
                    s ? r.start({
                        y: [0, -20, 0],
                        transition: {
                            duration: 2,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        }
                    }) : r.start({
                        y: 0,
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        }
                    })
                }, [s, r]);
                let d = "dark" === t;
                return (0, o.jsx)("div", {
                    style: a,
                    onMouseEnter: () => l(!0),
                    onMouseLeave: () => l(!1),
                    role: "img",
                    "aria-label": e.formatMessage({
                        id: "notionMailAnimatedPlaneLogo.label",
                        defaultMessage: "Notion Mail"
                    }),
                    children: (0, o.jsxs)(i(5793).F, {
                        features: i(7411).l,
                        children: [(0, o.jsxs)(i(766031).m.svg, {
                            animate: r,
                            fill: "none",
                            height: "150",
                            viewBox: d ? "0 0 150 150" : "0 0 220 220",
                            width: "150",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [d ? (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(i(766031).m.path, {
                                    d: "M38.3608 56.8L38.3722 56.8113L38.3837 56.8224L52.7008 70.6336L57.8534 99.856C58.7152 104.743 64.9634 106.289 68.0121 102.377L68.0131 102.376L75.9495 92.1746L87.558 101.925C89.5109 103.856 91.8704 105.086 94.2608 104.898C96.8065 104.699 98.7765 102.955 99.9051 100.232C99.9057 100.23 99.9062 100.229 99.9067 100.227L130.311 27.7228L130.313 27.7179L130.315 27.7129C131.654 24.4664 131.018 20.6905 128.518 18.2583C125.947 15.7573 121.821 15.0388 116.886 16.9985L40.6113 46.0093C38.2895 46.8536 36.5658 48.4645 36.1131 50.6539C35.6624 52.834 36.5887 55.0279 38.3608 56.8Z",
                                    fill: "white",
                                    stroke: "white",
                                    strokeWidth: "3.55931"
                                }), (0, o.jsx)(i(766031).m.path, {
                                    d: "M59.7935 67.3678C76.7553 57.3542 90.3868 45.8806 105.883 36.4378C107.184 35.6455 108.324 37.2285 107.198 38.2538C103.609 41.5221 99.9056 44.9052 99.0432 45.7293C97.2625 47.4301 76.8395 64.4569 76.8395 64.4569L66.2586 73.1664C68.4305 76.4239 87.4115 94.501 91.8069 96.1827C103.066 71.8437 113.284 49.3077 121.472 27.5927C122.068 26.0137 120.499 24.4933 118.935 25.1254L68.6338 45.4482L45.0992 54.612L59.7935 67.3678Z",
                                    fill: "white"
                                }), (0, o.jsx)(i(766031).m.path, {
                                    d: "M41.2482 47.212C37.8219 48.5601 36.6499 52.0896 39.6363 55.076L54.0693 68.9989C54.2661 69.1722 54.3895 69.3997 54.4357 69.6618L59.6232 99.0813C60.2165 102.447 64.5226 103.515 66.6256 100.818L75.1871 89.8131C75.4767 89.4505 76.0081 89.3979 76.3545 89.711L88.777 100.144C92.3064 103.674 96.3789 103.674 98.2793 99.0813L128.687 26.569C130.857 21.3057 126.515 14.6232 117.548 18.1916",
                                    fill: "black"
                                }), (0, o.jsx)(i(766031).m.path, {
                                    d: "M60.8638 65.3684C77.8256 55.3549 91.4573 43.8813 106.954 34.4386C108.254 33.6462 109.394 35.2292 108.268 36.2545C104.68 39.5229 100.976 42.9059 100.114 43.7301C98.3329 45.4308 77.9098 62.458 77.9098 62.458L67.3289 71.167C69.5009 74.4245 88.4814 92.5022 92.8774 94.1838C104.136 69.8444 114.354 47.3085 122.542 25.5934C123.138 24.0144 121.57 22.4939 120.005 23.1261L69.7042 43.449L46.1696 52.6126L60.8638 65.3684Z",
                                    fill: "white"
                                })]
                            }) : void 0, d ? void 0 : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(i(766031).m.path, {
                                    d: "M52.3664 83.2038C47.2619 85.2122 45.5158 90.4704 49.965 94.9196L71.4672 115.662C71.7606 115.92 71.9443 116.259 72.0131 116.649L79.7414 160.479C80.6254 165.492 87.0406 167.085 90.1737 163.066L102.929 146.671C103.36 146.13 104.152 146.053 104.668 146.519L123.175 162.062C128.433 167.321 134.5 167.321 137.332 160.479L182.633 52.4498C185.866 44.6084 179.397 34.6529 166.038 39.9691",
                                    fill: "black"
                                }), (0, o.jsx)(i(766031).m.path, {
                                    d: "M81.5895 110.253C106.611 95.4815 126.769 78.577 149.575 64.5889C151.611 63.3404 153.39 65.8072 151.624 67.4153C146.468 72.1129 141.302 76.8335 140.064 78.0163C137.411 80.5501 106.985 105.917 106.985 105.917L91.2212 118.892C94.457 123.745 122.734 150.677 129.283 153.182C146.001 117.042 161.179 83.5704 173.357 51.3186C174.292 48.8429 171.833 46.458 169.379 47.4494L94.7599 77.5976L59.698 91.2497L81.5895 110.253Z",
                                    fill: "white"
                                })]
                            })]
                        }), [{
                            d: "M67.5 147.5C69 150 71.2309 151.118 59 156.5C48.5 161.12 50.5 162.5 52.5 165",
                            delay: 0,
                            duration: 2,
                            top: 5,
                            left: -5
                        }, {
                            d: "M61.5 167.5C62.5 169 62.8613 171.568 60.5 173C30 191.5 34.5 190.5 37 193.5",
                            delay: .1,
                            duration: 2.2,
                            top: 0,
                            left: -0
                        }, {
                            d: "M103 166C103.522 166.696 106.3 168.4 105.5 169C103.5 170.5 96.6247 173.134 94.5 174.5C90 177 86.75 179 86.5 180.5L88 183",
                            delay: .2,
                            duration: 1.8,
                            top: 5,
                            left: -15
                        }].map((e, t) => (0, o.jsx)(i(766031).m.svg, {
                            animate: r,
                            fill: "none",
                            height: "150",
                            style: {
                                position: "absolute",
                                top: e.top,
                                insetInlineStart: e.left
                            },
                            viewBox: "0 0 220 220",
                            width: "150",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, o.jsx)(i(766031).m.path, {
                                animate: s || null === s ? {
                                    pathLength: 1,
                                    y: [0, -5 + 5 * t, 0],
                                    transition: {
                                        y: {
                                            repeat: 1 / 0,
                                            duration: 2,
                                            ease: "easeInOut"
                                        }
                                    }
                                } : {
                                    pathLength: 0
                                },
                                d: e.d,
                                initial: {
                                    pathLength: 0
                                },
                                stroke: d ? i(632079).Tj.white : i(632079).Tj.primaryBlack,
                                strokeWidth: "8",
                                transition: {
                                    pathLength: {
                                        duration: .5,
                                        ease: "easeOut"
                                    }
                                }
                            })
                        }, t))]
                    })
                })
            }
            let l = {
                    marginBottom: 34
                },
                r = {
                    marginBottom: 24
                };

            function d() {
                let e = (0, i(109939).tz)(),
                    t = (0, i(483908).Nz)(),
                    n = (0, i(483908).EB)(),
                    a = (0, i(483908).yb)();
                return t ? (0, o.jsx)(s, {}) : n ? (0, o.jsx)(i(16275).I, {
                    icon: i(227946).notionCalendarIcon,
                    size: 90,
                    style: l,
                    label: e.formatMessage({
                        id: "productLogo.notionCalendar.label",
                        defaultMessage: "Notion Calendar"
                    })
                }) : a ? (0, o.jsx)(i(16275).I, {
                    icon: i(792668).notionIcon,
                    size: "xl",
                    style: r,
                    label: e.formatMessage({
                        id: "productLogo.notion.label",
                        defaultMessage: "Notion"
                    })
                }) : null
            }
        },
        645862: (e, t, i) => {
            i.d(t, {
                TT: () => g,
                FS: () => m,
                Ay: () => p
            });
            var n = i(296540);
            let o = {
                    fontSize: 15,
                    whiteSpace: "nowrap",
                    top: 0,
                    width: "100%",
                    background: i(632079).oZ.frontCreamBackground,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                a = `0 1px 0 ${i(632079).oZ.frontBorder}`;
            var s = i(474848);
            let l = {
                    width: "100%"
                },
                r = {
                    height: 20
                };

            function d(e) {
                let t = (0, i(109939).tz)(),
                    n = (0, i(533992).v3)(),
                    d = (0, i(682985).K8)(() => (0, i(434089).m)(n, "maxWidth", "large"), [n]),
                    c = (0, i(599412).H)(t),
                    u = (0, i(682985).O$)(i(584257).b),
                    m = {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "100%",
                        paddingInlineStart: 20,
                        paddingInlineEnd: 20,
                        transition: "height 250ms",
                        height: e.pageHasScrolled ? 60 : g,
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: e.pageHasScrolled ? a : "none"
                    },
                    p = !e.hideLogo,
                    h = n.device.isElectron && !u;
                return (0, s.jsxs)("div", {
                    style: { ...o,
                        ...e.outerStyle
                    },
                    children: [n.device.isElectron ? (0, s.jsx)("div", {
                        className: h ? i(828432).sbV : void 0,
                        style: l,
                        children: n.device.isElectronWindows && !u ? (0, s.jsx)(i(662886).K, {}) : void 0
                    }) : void 0, (0, s.jsxs)("nav", {
                        style: m,
                        children: [e.hideLogo ? void 0 : (0, s.jsx)(i(114159).A, {
                            analyticsName: "front_header",
                            hideNotionText: !0
                        }), p ? (0, s.jsx)(i(346268).c, {
                            size: 8,
                            type: "vertical",
                            style: r
                        }) : void 0, (0, s.jsx)(i(678064).A, {
                            confirm: !0,
                            onChange: e => (0, i(989068).i)({
                                locale: e,
                                environment: n,
                                origin: "signup",
                                intl: t
                            }),
                            currentLocale: c,
                            origin: "signup",
                            showGlobeIcon: !0,
                            showVisibleLabelPrefix: !0
                        }), (0, s.jsx)("div", {
                            style: {
                                flex: "1",
                                display: "flex",
                                justifyContent: d ? "flex-end" : "center"
                            }
                        })]
                    })]
                })
            }
            let c = function(e) {
                    let t = (0, i(109939).tz)(),
                        n = { ...o,
                            boxShadow: e.pageHasScrolled ? a : "none",
                            paddingInlineStart: 20,
                            paddingInlineEnd: 20,
                            ...e.outerStyle
                        },
                        l = (0, i(533992).v3)(),
                        r = (0, i(599412).H)(t);
                    return (0, s.jsx)("div", {
                        style: n,
                        children: (0, s.jsxs)("nav", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                height: m
                            },
                            children: [e.hideLogo ? void 0 : (0, s.jsx)(i(114159).A, {
                                analyticsName: "front_header",
                                hideNotionText: e.hideNotionText
                            }), (0, s.jsx)(i(678064).A, {
                                confirm: !0,
                                onChange: e => (0, i(989068).i)({
                                    locale: e,
                                    environment: l,
                                    origin: "signup",
                                    intl: t
                                }),
                                origin: "signup",
                                currentLocale: r,
                                showVisibleLabelPrefix: !0
                            }), (0, s.jsx)(i(555348).a, {
                                isMobile: !0
                            })]
                        })
                    })
                },
                u = {
                    position: "fixed",
                    zIndex: 99,
                    fontFamily: i(395416).A.fontFamily.sans,
                    width: "100%"
                },
                g = 80,
                m = 54;

            function p(e) {
                let {
                    analyticsName: t,
                    hideNavItems: o,
                    hideLogo: a,
                    hideNotionText: l,
                    signupInputAndButtonWidth: r
                } = e, [p, h] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    let e = i(381453).nF(() => {
                        h(window.scrollY)
                    }, 15);
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                });
                let f = p > 60 * !i(986939).A.isMobile;
                return (0, s.jsxs)(n.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        style: u,
                        children: [i(986939).A.isMobile ? (0, s.jsx)(c, {
                            analyticsName: t,
                            hideNavItems: o,
                            hideLogo: a,
                            hideNotionText: l,
                            signupInputAndButtonWidth: r,
                            pageHasScrolled: f
                        }) : void 0, i(986939).A.isMobile ? void 0 : (0, s.jsx)(d, {
                            analyticsName: t,
                            hideNavItems: o,
                            hideLogo: a,
                            signupInputAndButtonWidth: r,
                            pageHasScrolled: f
                        })]
                    }), (0, s.jsx)("div", {
                        style: function(e, t) {
                            let i;
                            return {
                                width: "100%",
                                height: (i = e ? m : g, t ? i + 45 * !e : i),
                                flexShrink: 0,
                                flexGrow: 0
                            }
                        }(i(986939).A.isMobile, !1)
                    })]
                })
            }
        },
        649296: (e, t, i) => {
            i.d(t, {
                E: () => n
            });

            function n(e) {
                let {
                    buttonsStore: t,
                    buttonName: i,
                    buttonState: n
                } = e;
                t.setState({
                    buttons: { ...t.state.buttons,
                        [i]: n
                    }
                })
            }
        },
        660983: (e, t, i) => {
            i.d(t, {
                A: () => A
            });
            var n = i(296540);
            i(898992), i(672577);
            var o = () => i(546605),
                a = () => i(891390);
            class s extends o().Store {
                getInitialState() {
                    return {
                        step: "loginUninitialized"
                    }
                }
            }
            class l extends a()._ {
                service;
                constructor(e, t) {
                    super(e, "login"), this.service = t
                }
                loginShowChoices(e = !1) {
                    "loginComplete" !== this.getCurrentStep().step && (this.store.setState({
                        step: "loginLoadSettings"
                    }), this.doLoadSettings(e).catch(this.handleUnexpectedError))
                }
                loginUseMethod({
                    mfaSettingId: e
                }) {
                    let t = this.checkStep("loginChooseMethod");
                    if (!t) return;
                    let {
                        settings: n
                    } = t, o = n.find(t => t.mfaSettingId === e);
                    if (o) switch (o.mfaMethod) {
                        case "totp":
                            return this.loginChooseTOTP({
                                mfaSettingId: e,
                                friendlyName: o.friendlyName
                            });
                        case "sms":
                            return this.loginChooseSMS({
                                mfaSettingId: e,
                                partialPhoneNumber: o.phoneNumber
                            });
                        case "backup_code":
                            return this.loginChooseBackupCode({
                                mfaSettingId: e
                            });
                        default:
                            throw (0, i(722371).HB)(o)
                    }
                }
                loginChooseTOTP({
                    mfaSettingId: e,
                    friendlyName: t
                }) {
                    this.checkStep("loginChooseMethod") && this.store.setState({
                        isLoading: !1,
                        mfaSettingId: e,
                        friendlyName: t,
                        step: "loginTOTP"
                    })
                }
                loginChooseSMS({
                    mfaSettingId: e,
                    partialPhoneNumber: t
                }) {
                    this.checkStep("loginChooseMethod") && (this.store.setState({
                        isLoading: !0,
                        mfaSettingId: e,
                        partialPhoneNumber: t,
                        step: "loginSMS",
                        resentAt: 0,
                        resentStatus: "not-resent"
                    }), this.doSendSMS({
                        mfaSettingId: e
                    }).catch(this.handleUnexpectedError))
                }
                loginChooseBackupCode({
                    mfaSettingId: e
                }) {
                    this.checkStep("loginChooseMethod") && this.store.setState({
                        isLoading: !1,
                        mfaSettingId: e,
                        step: "loginBackupCode"
                    })
                }
                loginVerifyBackupCode({
                    mfaSettingId: e,
                    code: t,
                    onComplete: i
                }) {
                    let n = this.checkStep("loginBackupCode");
                    n && (this.store.setState({ ...n,
                        isLoading: !0
                    }), this.doVerifyBackupCode({
                        code: t,
                        onComplete: i
                    }).catch(this.handleUnexpectedError))
                }
                loginVerifyCode({
                    mfaMethod: e,
                    mfaSettingId: t,
                    code: i,
                    onComplete: n
                }) {
                    let o = r(e),
                        a = this.checkStep(o);
                    a && (this.store.setState({ ...a,
                        isLoading: !0
                    }), this.doVerifyCode({
                        mfaMethod: e,
                        mfaSettingId: t,
                        code: i,
                        onComplete: n
                    }).catch(this.handleUnexpectedError))
                }
                loginResendSMS(e) {
                    let t = this.checkStep("loginSMS");
                    t && (this.store.setState({ ...t,
                        isLoading: !0,
                        resentStatus: "resending"
                    }), this.doSendSMS({
                        mfaSettingId: e
                    }).catch(this.handleUnexpectedError))
                }
                exit() {
                    this.store.setState({
                        step: "loginUninitialized"
                    })
                }
                async doLoadSettings(e) {
                    let t = await this.withStep("loginLoadSettings", () => this.service.loadSettings());
                    if (!t) return;
                    let {
                        result: i
                    } = t, n = i.settings;
                    if (this.store.setState({
                            step: "loginChooseMethod",
                            settings: n
                        }), e && 2 === n.length) {
                        var o;
                        let e = null == (o = n.find(e => "backup_code" !== e.mfaMethod)) ? void 0 : o.mfaSettingId;
                        e && this.loginUseMethod({
                            mfaSettingId: e
                        })
                    }
                }
                async doVerifyBackupCode({
                    code: e,
                    onComplete: t
                }) {
                    let n = await this.withStep("loginBackupCode", t => this.service.verifyBackupCode(e));
                    if (!n) return;
                    let {
                        result: o,
                        state: a
                    } = n;
                    switch (o.status) {
                        case "match":
                            o.recovery ? (this.store.setState({
                                step: "loginComplete"
                            }), t()) : this.store.setState({
                                step: "loginAlertBackupCode",
                                remainingCodes: o.remainingCodes
                            });
                            break;
                        case "error":
                            this.store.setState({ ...a,
                                error: i(74306).xc.unexpectedError,
                                isLoading: !1
                            });
                            break;
                        case "incorrect":
                            this.store.setState({ ...a,
                                error: (0, i(74306).qX)("backup_code"),
                                isLoading: !1
                            });
                            break;
                        default:
                            return (0, i(722371).HB)(o)
                    }
                }
                async doVerifyCode({
                    mfaMethod: e,
                    mfaSettingId: t,
                    code: n,
                    onComplete: o
                }) {
                    let a = r(e),
                        s = await this.withStep(a, () => {
                            switch (e) {
                                case "totp":
                                    return this.service.verifyTOTP(t, n);
                                case "sms":
                                    return this.service.verifySMS(t, n);
                                default:
                                    (0, i(722371).HB)(e)
                            }
                        });
                    if (!s) return;
                    let {
                        result: l,
                        state: d
                    } = s;
                    switch (l.status) {
                        case "match":
                            this.store.setState({
                                step: "loginComplete"
                            }), o();
                            break;
                        case "error":
                            this.store.setState({ ...d,
                                error: i(74306).xc.unexpectedError,
                                isLoading: !1
                            });
                            break;
                        case "incorrect":
                            this.store.setState({ ...d,
                                error: (0, i(74306).qX)(e),
                                isLoading: !1
                            });
                            break;
                        default:
                            return (0, i(722371).HB)(l.status)
                    }
                }
                async doSendSMS({
                    mfaSettingId: e
                }) {
                    let t = await this.withStep("loginSMS", t => this.service.sendSMS(e));
                    if (!t) return;
                    let {
                        state: i
                    } = t, {
                        resentStatus: n,
                        resentAt: o
                    } = "not-resent" === i.resentStatus ? {
                        resentStatus: "not-resent",
                        resentAt: 0
                    } : {
                        resentStatus: "resent",
                        resentAt: Date.now()
                    };
                    this.store.setState({ ...i,
                        step: "loginSMS",
                        isLoading: !1,
                        resentStatus: n,
                        resentAt: o
                    })
                }
            }

            function r(e) {
                return "totp" === e ? "loginTOTP" : "sms" === e ? "loginSMS" : (0, i(722371).HB)(e)
            }
            i(354520), i(581454);
            var d = i(474848);
            let c = {
                    container: {
                        position: "relative",
                        width: 324,
                        padding: 16
                    },
                    title: {
                        fontWeight: i(699422).Wy.semibold,
                        fontSize: 20,
                        lineHeight: 1.2,
                        color: i(632079).Tj.text.primary,
                        marginBottom: 16,
                        marginInlineStart: 6,
                        marginInlineEnd: 6,
                        textAlign: "center"
                    },
                    error: {
                        color: i(632079).oZ.red,
                        width: "100%",
                        marginBottom: 10,
                        textAlign: "center",
                        fontSize: i(699422).J.UISmall.desktop
                    },
                    header: {
                        fontWeight: i(699422).Wy.regular,
                        fontSize: i(699422).J.UIRegular.desktop,
                        color: i(632079).Tj.text.tertiary,
                        textAlign: "center",
                        marginBottom: 18
                    },
                    hiddenButton: {
                        display: "none"
                    }
                },
                u = function({
                    primaryAction: e,
                    secondaryActions: t,
                    title: o,
                    header: a,
                    children: s,
                    errorMessage: l
                }) {
                    let {
                        isMobileNative: r
                    } = (0, i(533992).Y0)(), u = (0, n.useMemo)(() => e ? (0, d.jsx)(i(912946).A, {
                        size: "xl",
                        width: "fill",
                        onClick: e.onClick,
                        disabled: e.disabled,
                        colorPalette: e.isRed ? "red" : "blue",
                        children: e.text
                    }) : null, [e]), g = (0, i(442564).x)("guides.mfa"), m = (0, n.useMemo)(() => (0, i(381453).oE)([...t || [], {
                        text: r ? (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.mfaPrompt.needHelp.mobileNative",
                            defaultMessage: "Need help with 2-step verification?"
                        }) : (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.mfaPrompt.needHelp",
                            defaultMessage: "Need help?"
                        }),
                        type: "link",
                        view: "plain",
                        href: g,
                        isExternal: !0
                    }]).map((e, t) => (0, n.createElement)(i(570787).A, { ...e,
                        key: t
                    })), [t, g, r]), p = l ? (0, d.jsx)("div", {
                        style: c.error,
                        children: l
                    }) : void 0, h = (0, n.useCallback)(t => {
                        t.preventDefault(), e && !e.disabled && e.onClick()
                    }, [e]);
                    return (0, d.jsxs)("form", {
                        style: c.container,
                        onSubmit: h,
                        children: [(0, d.jsx)("div", {
                            style: c.title,
                            children: o
                        }), (0, d.jsx)("div", {
                            style: c.header,
                            children: a
                        }), p, s, u || m ? (0, d.jsxs)(i(4458).VP, {
                            gap: 12,
                            paddingTop: 12,
                            children: [u, (0, d.jsx)(i(4458).VP, {
                                gap: 8,
                                children: m
                            })]
                        }) : null, (0, d.jsx)("button", {
                            style: c.hiddenButton
                        })]
                    })
                },
                g = {
                    avatar: {
                        marginBottom: 12
                    },
                    email: {
                        fontSize: i(699422).J.UISmall.desktop,
                        fontWeight: i(699422).Wy.regular,
                        color: i(632079).Tj.text.tertiary
                    }
                };

            function m({
                userStore: e,
                children: t,
                hideEmail: n
            }) {
                let o = (0, i(682985).K8)(() => e.getEmail(), [e]),
                    a = (0, i(960253).I)(() => ({
                        title: {
                            marginBottom: n ? "auto" : 12
                        }
                    }), [n]);
                return (0, d.jsxs)(i(4458).VP, {
                    width: "100%",
                    alignItems: "center",
                    children: [(0, d.jsx)(i(321753).A, {
                        userStore: e,
                        size: 64,
                        avatarShouldShowShadow: !0,
                        style: g.avatar
                    }), (0, d.jsx)("div", {
                        style: a.title,
                        children: t
                    }), n ? void 0 : (0, d.jsx)("div", {
                        style: g.email,
                        children: o
                    })]
                })
            }
            let p = {
                style0: {
                    fontWeight: i(699422).Wy.semibold
                }
            };

            function h(e) {
                let {
                    userStore: t,
                    remainingCodes: o,
                    onComplete: a,
                    errorMessage: s
                } = e, l = o.filter(e => !e.hasBeenUsed).length, r = (0, n.useMemo)(() => (0, d.jsx)(m, {
                    userStore: t,
                    hideEmail: !0,
                    children: 0 === l ? (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.backupCode.regenerateBackupCodesTitle",
                        defaultMessage: "Regenerate backup codes"
                    }) : (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.backupCode.remainingBackupCodesTitle",
                        defaultMessage: "Remaining backup codes"
                    })
                }), [t, l]), c = (0, n.useMemo)(() => 0 === l ? (0, d.jsx)(i(109939).sA, {
                    id: "login.mfa.backupCode.regenerateBackupCodes.noCodeRemaining.header",
                    defaultMessage: "You’ve used all of your recovery codes. On the browser or desktop app, go to <boldtext>Settings & members</boldtext> > <boldtext>My account</boldtext> > <boldtext>2-step verification</boldtext> to create new codes.",
                    values: {
                        boldtext: e => (0, d.jsx)("span", {
                            style: p.style0,
                            children: e
                        })
                    }
                }) : (0, d.jsx)(i(109939).sA, {
                    id: "login.mfa.backupCode.regenerateBackupCodes.codeRemaining.header",
                    defaultMessage: "You have {numRemainingCodes} backup codes left.",
                    values: {
                        numRemainingCodes: l
                    }
                }), [l]), g = (0, n.useMemo)(() => ({
                    text: 0 !== l || i(986939).A.isMobile ? (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.backupCode.continueButton",
                        defaultMessage: "Continue"
                    }) : (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.backupCode.goToAccountSettingsButton",
                        defaultMessage: "Go to account settings"
                    }),
                    onClick: i(986939).A.isMobile ? a : () => a(!0)
                }), [l, a]), h = (0, n.useMemo)(() => 0 !== l || i(986939).A.isMobile ? [] : [{
                    text: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.backupCode.doThisLaterButton",
                        defaultMessage: "Do this later"
                    }),
                    type: "button",
                    view: "plain",
                    onClick: () => a()
                }], [l, a]), f = (0, n.useMemo)(() => 0 !== l ? (0, d.jsx)(i(182797).A, {
                    type: "status",
                    status: o
                }) : void 0, [l, o]);
                return (0, d.jsx)(u, {
                    title: r,
                    header: c,
                    primaryAction: g,
                    secondaryActions: h,
                    errorMessage: s,
                    children: f
                })
            }

            function f({
                isLoading: e,
                userStore: t,
                errorMessage: o,
                onVerifyCode: a,
                onTryAnotherMethod: s
            }) {
                let l = (0, i(960253).e)(),
                    r = (0, i(960253).I)(() => ({
                        backupCodeInput: {
                            background: "light" === l ? i(632079).oZ.transparent : i(632079).Tj.background.secondaryTranslucent,
                            color: i(632079).Tj.text.accentPrimary,
                            height: 44,
                            fontSize: 16
                        }
                    }), [l]),
                    [c, g] = (0, n.useState)(""),
                    p = (0, d.jsx)(m, {
                        userStore: t,
                        hideEmail: !1,
                        children: (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.backupCode.verifyCodeTitle",
                            defaultMessage: "Verify your identity"
                        })
                    }),
                    h = (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.backupCode.verifyCodeHeader",
                        defaultMessage: "Enter an unused one-time backup code."
                    }),
                    y = {
                        text: (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.backupCode.verifyCodeButton",
                            defaultMessage: "Continue"
                        }),
                        onClick: () => a(c),
                        disabled: e
                    },
                    b = [{
                        text: (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.backupCode.anotherMethod",
                            defaultMessage: "Try another method"
                        }),
                        type: "button",
                        view: "plain",
                        onClick: s
                    }];
                return (0, d.jsx)(u, {
                    title: p,
                    header: h,
                    primaryAction: y,
                    secondaryActions: b,
                    errorMessage: o,
                    children: (0, d.jsx)(i(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 16,
                        marginBottom: 16,
                        children: (0, d.jsx)(i(36481).p, {
                            value: c,
                            spellCheck: !1,
                            style: r.backupCodeInput,
                            onChange: e => g((0, i(885915).H)(e.target.value)),
                            placeholder: "1234-1234",
                            disabled: e
                        })
                    })
                })
            }
            let y = {
                marginBottom: 10
            };

            function b({
                errorMessage: e,
                userStore: t,
                mfaSettings: o,
                onUseMethod: a,
                onCancelMfa: s
            }) {
                let l = (0, i(533992).Y0)(),
                    r = (0, d.jsx)(m, {
                        userStore: t,
                        hideEmail: !1,
                        children: (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.methodChooser.chooseMethodTitle",
                            defaultMessage: "Verify your identity"
                        })
                    }),
                    c = (0, i(381453).oE)([!l.isMobileNative && {
                        text: (0, d.jsx)(i(109939).sA, {
                            id: "login.mfa.methodChooser.anotherAccount",
                            defaultMessage: "Log into another account"
                        }),
                        type: "button",
                        view: "plain",
                        onClick: s
                    }]),
                    g = (0, n.useMemo)(() => (0, i(162895).WS)(o).map(e => {
                        let {
                            mfaMethod: t,
                            mfaSettingId: n
                        } = e;
                        switch (t) {
                            case "totp":
                                return (0, d.jsx)(i(30399).A, {
                                    type: "totp",
                                    isActive: !0,
                                    title: e.friendlyName,
                                    caption: (0, d.jsx)(i(109939).sA, {
                                        id: "login.mfa.methodChooser.activeSection.useAuthenticator.button.message",
                                        defaultMessage: "Use code from authenticator"
                                    }),
                                    onClick: () => a("totp", n),
                                    style: y
                                }, n);
                            case "sms":
                                return (0, d.jsx)(i(30399).A, {
                                    type: "sms",
                                    isActive: !0,
                                    title: e.phoneNumber,
                                    caption: (0, d.jsx)(i(109939).sA, {
                                        id: "login.mfa.methodChooser.activeSection.usePhoneNumber.button.message",
                                        defaultMessage: "Text me a code"
                                    }),
                                    onClick: () => a("sms", n),
                                    style: y
                                }, n);
                            case "backup_code":
                                return (0, d.jsx)(i(30399).A, {
                                    type: "backup_code",
                                    isActive: !0,
                                    title: (0, d.jsx)(i(109939).sA, {
                                        id: "login.mfa.methodChooser.activeSection.useBackupCode.button.title",
                                        defaultMessage: "Use backup code"
                                    }),
                                    caption: (0, d.jsx)(i(109939).sA, {
                                        id: "login.mfa.methodChooser.activeSection.useBackupCode.button.message",
                                        defaultMessage: "Use a one-time backup code"
                                    }),
                                    onClick: () => a("backup_code", n),
                                    style: y
                                }, n);
                            default:
                                (0, i(722371).HB)(t)
                        }
                    }), [o, a]);
                return (0, d.jsx)(u, {
                    title: r,
                    header: void 0,
                    primaryAction: void 0,
                    secondaryActions: c,
                    errorMessage: e,
                    children: (0, d.jsx)(i(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 16,
                        marginBottom: 16,
                        children: g
                    })
                })
            }

            function x({
                isLoading: e,
                userStore: t,
                phoneHint: o,
                resentAt: a,
                resentStatus: s,
                errorMessage: l,
                onVerifyCode: r,
                onResendLink: c,
                onTryAnotherMethod: g
            }) {
                let [p, h] = (0, n.useState)([]), f = (0, d.jsx)(m, {
                    userStore: t,
                    hideEmail: !1,
                    children: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.sms.verifyCodeTitle",
                        defaultMessage: "Verify your identity"
                    })
                }), y = (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.sms.verifyCodeHeader",
                        defaultMessage: "Enter the code sent to {phoneHint}.",
                        values: {
                            phoneHint: o
                        }
                    }), " ", (0, d.jsx)(i(506619).n, {
                        resentAt: a,
                        resentStatus: s,
                        onResendLink: c
                    })]
                }), b = {
                    text: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.sms.verifyCodeButton",
                        defaultMessage: "Continue"
                    }),
                    onClick: () => r(p.join("")),
                    disabled: e || "resending" === s || (0, i(381453).oE)(p).length !== i(324589)._
                }, v = [{
                    text: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.sms.anotherMethod",
                        defaultMessage: "Try another method"
                    }),
                    type: "button",
                    view: "plain",
                    onClick: g
                }];
                return (0, d.jsx)(u, {
                    title: f,
                    header: y,
                    primaryAction: b,
                    secondaryActions: v,
                    errorMessage: l,
                    children: (0, d.jsx)(i(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 16,
                        marginBottom: 16,
                        children: (0, d.jsx)(i(266581).d2, {
                            numInputs: i(324589)._,
                            format: "login",
                            disabled: e,
                            value: p,
                            onChange: h,
                            autoFocus: !0,
                            isValidKey: i(266581).Vx
                        })
                    })
                })
            }
            let v = {
                boldText: {
                    fontWeight: i(699422).Wy.semibold
                }
            };

            function S({
                isLoading: e,
                userStore: t,
                friendlyName: o,
                errorMessage: a,
                onVerifyCode: s,
                onTryAnotherMethod: l
            }) {
                let [r, c] = (0, n.useState)([]), g = (0, d.jsx)(m, {
                    userStore: t,
                    hideEmail: !1,
                    children: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.totp.verifyCodeTitle",
                        defaultMessage: "Verify your identity"
                    })
                }), p = (0, d.jsx)(i(109939).sA, {
                    id: "login.mfa.totp.verifyCodeHeader",
                    defaultMessage: "Enter code from authenticator <boldtext>{friendlyName}</boldtext>.",
                    values: {
                        friendlyName: o,
                        boldtext: e => (0, d.jsx)("span", {
                            style: v.boldText,
                            children: e
                        })
                    }
                }), h = {
                    text: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.totp.verifyCodeButton",
                        defaultMessage: "Continue"
                    }),
                    onClick: () => s(r.join("")),
                    disabled: e || (0, i(381453).oE)(r).length !== i(393501)._
                }, f = [{
                    text: (0, d.jsx)(i(109939).sA, {
                        id: "login.mfa.totp.anotherMethod",
                        defaultMessage: "Try another method"
                    }),
                    type: "button",
                    view: "plain",
                    onClick: l
                }];
                return (0, d.jsx)(u, {
                    title: g,
                    header: p,
                    primaryAction: h,
                    secondaryActions: f,
                    errorMessage: a,
                    children: (0, d.jsx)(i(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 16,
                        marginBottom: 16,
                        children: (0, d.jsx)(i(266581).d2, {
                            numInputs: i(393501)._,
                            format: "login",
                            disabled: e,
                            value: r,
                            onChange: c,
                            autoFocus: !0,
                            isValidKey: i(266581).Vx
                        })
                    })
                })
            }

            function j(e) {
                let {
                    loginStateMachine: t,
                    userStore: o,
                    onCancelMfa: a,
                    onComplete: s
                } = e, l = (0, i(682985).K8)(() => t.getCurrentStep(), [t]);
                return (0, d.jsx)(n.Fragment, {
                    children: function() {
                        switch (l.step) {
                            case "loginUninitialized":
                            case "loginComplete":
                                return;
                            case "loginLoadSettings":
                                return (0, d.jsx)(i(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: `calc(100vh - ${i(986939).A.isMobile?i(645862).FS:i(645862).TT}px)`,
                                    children: (0, d.jsx)(i(517334).k, {})
                                });
                            case "loginChooseMethod":
                                return (0, d.jsx)(b, {
                                    userStore: o,
                                    mfaSettings: l.settings,
                                    errorMessage: l.error,
                                    onUseMethod: (e, i) => t.loginUseMethod({
                                        mfaSettingId: i
                                    }),
                                    onCancelMfa: a
                                });
                            case "loginTOTP":
                                return (0, d.jsx)(S, {
                                    isLoading: l.isLoading,
                                    userStore: o,
                                    friendlyName: l.friendlyName,
                                    errorMessage: l.error,
                                    onVerifyCode: e => t.loginVerifyCode({
                                        mfaMethod: "totp",
                                        mfaSettingId: l.mfaSettingId,
                                        code: e,
                                        onComplete: s
                                    }),
                                    onTryAnotherMethod: () => t.loginShowChoices()
                                });
                            case "loginSMS":
                                return (0, d.jsx)(x, {
                                    isLoading: l.isLoading,
                                    userStore: o,
                                    phoneHint: l.partialPhoneNumber,
                                    errorMessage: l.error,
                                    resentAt: l.resentAt,
                                    resentStatus: l.resentStatus,
                                    onVerifyCode: e => t.loginVerifyCode({
                                        mfaMethod: "sms",
                                        mfaSettingId: l.mfaSettingId,
                                        code: e,
                                        onComplete: s
                                    }),
                                    onResendLink: () => {
                                        t.loginResendSMS(l.mfaSettingId)
                                    },
                                    onTryAnotherMethod: () => t.loginShowChoices()
                                });
                            case "loginBackupCode":
                                return (0, d.jsx)(f, {
                                    isLoading: l.isLoading,
                                    userStore: o,
                                    errorMessage: l.error,
                                    onVerifyCode: e => t.loginVerifyBackupCode({
                                        mfaSettingId: l.mfaSettingId,
                                        code: e,
                                        onComplete: s
                                    }),
                                    onTryAnotherMethod: () => t.loginShowChoices()
                                });
                            case "loginAlertBackupCode":
                                return (0, d.jsx)(h, {
                                    userStore: o,
                                    remainingCodes: l.remainingCodes,
                                    onComplete: s
                                });
                            default:
                                return (0, i(722371).HB)(l)
                        }
                    }()
                })
            }
            class w {
                environment;
                userId;
                constructor(e) {
                    this.environment = e.environment, this.userId = e.userId
                }
                async loadSettings() {
                    let e = await this.environment.api.callMainCellApi({
                        eventName: "authGetLoginConfiguration",
                        environment: this.environment,
                        data: {},
                        userId: this.userId
                    });
                    if ("success" === e.type) {
                        let {
                            data: t
                        } = e;
                        return "required" === t.samlSignIn ? {
                            settings: []
                        } : {
                            settings: t.mfaOptions
                        }
                    }
                    throw e.error
                }
                async sendSMS(e) {
                    let t = await this.environment.api.callApi({
                        eventName: "authSendSms",
                        environment: this.environment,
                        data: {
                            mfaSettingId: e
                        },
                        userId: this.userId
                    });
                    if ("success" !== t.type) throw t.error
                }
                async verifySMS(e, t) {
                    var i;
                    let n = await this.environment.api.callApi({
                        eventName: "authVerifySmsLogin",
                        environment: this.environment,
                        data: {
                            mfaSettingId: e,
                            code: t
                        },
                        userId: this.userId
                    });
                    if ("success" === n.type) return {
                        status: "match"
                    };
                    if ((null == (i = n.body) || null == (i = i.clientData) ? void 0 : i.type) === "invalid_mfa_code") return {
                        status: "incorrect"
                    };
                    throw n.error
                }
                async verifyTOTP(e, t) {
                    var i;
                    let n = await this.environment.api.callApi({
                        eventName: "authVerifyTotpLogin",
                        environment: this.environment,
                        data: {
                            mfaSettingId: e,
                            code: t
                        },
                        userId: this.userId
                    });
                    if ("success" === n.type) return {
                        status: "match"
                    };
                    if ((null == (i = n.body) || null == (i = i.clientData) ? void 0 : i.type) === "invalid_mfa_code") return {
                        status: "incorrect"
                    };
                    throw n.error
                }
                async verifyBackupCode(e) {
                    var t;
                    let i = await this.environment.api.callApi({
                        eventName: "authVerifyBackupCodesLogin",
                        environment: this.environment,
                        data: {
                            code: e
                        },
                        userId: this.userId
                    });
                    if ("success" === i.type) return {
                        status: "match",
                        recovery: i.data.recovery,
                        remainingCodes: i.data.remainingCodes
                    };
                    if ((null == (t = i.body) || null == (t = t.clientData) ? void 0 : t.type) === "invalid_mfa_code") return {
                        status: "incorrect"
                    };
                    throw i.error
                }
            }

            function A() {
                let e = i(83879).b,
                    t = (0, i(533992).v3)(),
                    [o, a] = (0, n.useState)(void 0),
                    {
                        userId: r,
                        userStore: c,
                        previousPersistedUserId: u,
                        redirectURL: g,
                        targetDomain: m
                    } = (0, i(682985).K8)(() => ({
                        userId: e.state.userStore.id,
                        userStore: e.state.userStore,
                        previousPersistedUserId: e.state.previousPersistedUserId,
                        redirectURL: e.state.redirectURL,
                        targetDomain: e.state.targetDomain
                    }), [e]);
                (0, n.useEffect)(() => {
                    if (void 0 === o) {
                        let e = new w({
                                environment: t,
                                userId: r
                            }),
                            i = new l(new s, e);
                        a(i), i.loginShowChoices(!0)
                    }
                }, [t, r, o]);
                let p = (0, n.useCallback)(async e => {
                    await i(374866).z({
                        environment: t,
                        redirectURL: g,
                        userId: r,
                        previousPersistedUserId: u,
                        regenerateBackupCodes: e,
                        targetDomain: m
                    })
                }, [t, r, u, g, m]);
                return o ? (0, d.jsx)(j, {
                    loginStateMachine: o,
                    userStore: c,
                    onCancelMfa: i(374866).W9,
                    onComplete: p
                }) : (0, d.jsx)(i(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: `calc(100vh - ${i(986939).A.isMobile?i(645862).FS:i(645862).TT}px)`,
                    children: (0, d.jsx)(i(517334).k, {})
                })
            }
        },
        696906: (e, t, i) => {
            i.d(t, {
                i: () => a
            }), i(814603), i(147566), i(198721), i(296540);
            var n = i(474848);
            let o = (0, i(109939).YK)({
                signupTitleForSpace: {
                    id: "signupPage.titleForSpace",
                    defaultMessage: "Welcome to {company} on Notion"
                },
                signupTitleTryNotionMobileCTA: {
                    id: "signupPage.title.tryNotionMobileCTA",
                    defaultMessage: "Sign up to create a Notion page"
                },
                signupDefaultSubtitle: {
                    id: "signupPage.revamped.signInText",
                    defaultMessage: "Create your Notion account"
                },
                signupWorkEmailSubtitle: {
                    id: "signupPage.workEmail.signInText",
                    defaultMessage: "Sign up with your work email"
                },
                signupPerfmarkTrialTitle: {
                    id: "signupPage.perfmarkTrial.title",
                    defaultMessage: "Start your free Notion Plus trial"
                },
                signupPerfmarkTrialSubtitle: {
                    id: "signupPage.smb.signInText",
                    defaultMessage: "No credit card required"
                },
                signupFormResponseTitle: {
                    id: "signupPage.formResponse.title",
                    defaultMessage: "Sign up to see a copy of your form response"
                },
                mailTitle: {
                    id: "signupPage.mail.title",
                    defaultMessage: "Welcome to Notion Mail"
                },
                calendarTitle: {
                    id: "signupPage.calendar.title",
                    defaultMessage: "Welcome to Notion Calendar"
                },
                signupReferralTitle: {
                    id: "signupPage.referral.title",
                    defaultMessage: "Try Notion Business, on us"
                },
                signupReferralSignInText: {
                    id: "signupPage.referral.signInText",
                    defaultMessage: "Sign up using a business email"
                },
                signupAddAnotherAccountSubtitle: {
                    id: "signupPage.addAnotherAccount.subtitle",
                    defaultMessage: "Log in or create an account"
                },
                loginNotionAcademyTitle: {
                    id: "signupPage.title.fromSourceNotionAcademy",
                    defaultMessage: "Log in to view this lesson"
                },
                loginTemplateGalleryTitle: {
                    id: "signupPage.title.fromSourceNotionTemplateGallery",
                    defaultMessage: "Log in to duplicate this template"
                },
                loginTitleFromTemplate: {
                    id: "loginPage.title.fromTemplate",
                    defaultMessage: "Log in to get this template"
                },
                signupAddAnotherAccountTitle: {
                    id: "signupPage.addAnotherAccount.title",
                    defaultMessage: "Add an account"
                },
                loginAddAnotherAccountSubtitle: {
                    id: "loginPage.addAnotherAccount.subtitle",
                    defaultMessage: "Use an existing account, or sign up with a new email"
                },
                loginFormResponsePromptTitle: {
                    id: "loginPage.formResponsePrompt.title",
                    defaultMessage: "Log in or sign up to see your form response"
                },
                defaultTitle: {
                    id: "loginPage.revamped.title",
                    defaultMessage: "Your AI workspace."
                },
                titleForWorkEmailExperiment: {
                    id: "loginPage.workEmail.title",
                    defaultMessage: "Notion: your AI workspace."
                },
                loginStartupProgramSubtitle: {
                    id: "loginPage.startupProgram.subtitle",
                    defaultMessage: "Claim your free trial"
                },
                defaultLoginSubtitle: {
                    id: "loginPage.revamped.logInText",
                    defaultMessage: "Log in to your Notion account"
                },
                meetingNotesTitle: {
                    id: "loginPage.meetingNotes.title",
                    defaultMessage: "Try AI Meeting Notes"
                },
                createAWorkAccountTitle: {
                    id: "loginPage.createAWorkAccount.title",
                    defaultMessage: "Create a work account"
                },
                createAWorkAccountSubtitle: {
                    id: "loginPage.createAWorkAccount.subtitle",
                    defaultMessage: "We’ll check if your teammates are already on Notion. If not, we’ll create a new home for you and your team."
                }
            });

            function a(e) {
                let {
                    spaceName: t,
                    isSignup: a,
                    isPerfmarkTrialSignup: s,
                    isAddAnotherAccount: l,
                    isReferralSignup: r,
                    isStartupProgram: d,
                    isTemplateLogin: c,
                    isCreateAWorkAccount: u,
                    isOnFrontSignupPage: g,
                    centerText: m
                } = e, p = new URLSearchParams(window.location.search), h = a && i(986939).A.isMobile && p.get("try_notion_cta"), f = (0, i(682985).K8)(() => (0, i(690940).A)(), []), y = (0, i(483908).Nz)(), b = (0, i(483908).EB)(), x = (0, i(682985).K8)(() => i(83879).b.isMicrosoftVerification(), []), v = i(13565).J0(), S = (0, i(682985).K8)(() => g ? i(218744).default.getEligibleGroup({
                    experimentId: "signup_page_for_work",
                    defaultGroup: "control"
                }) : "control", [g]), j = "placeholder_and_copy" === S || "placeholder_and_copy_and_banner_v1" === S || "placeholder_and_copy_and_banner_v2" === S, w = (0, i(960253).I)(() => {
                    let e = {
                        fontWeight: i(699422).Wy.semibold,
                        fontSize: 22,
                        lineHeight: "26px",
                        margin: 0,
                        textWrap: "balance"
                    };
                    return {
                        wrapper: {
                            display: "flex",
                            flexDirection: "column",
                            textAlign: m ? "center" : "start",
                            width: r ? 360 : 320
                        },
                        title: { ...e
                        },
                        subtitle: { ...e,
                            color: i(632079).Tj.text.tertiary
                        }
                    }
                }, [r, m]);
                if (x) return null;
                let {
                    title: A,
                    subtitle: k
                } = function() {
                    if (a)
                        if (t) return {
                            title: { ...o.signupTitleForSpace,
                                values: {
                                    company: t
                                }
                            }
                        };
                        else {
                            if ("mobile" === h) return {
                                title: o.signupTitleTryNotionMobileCTA
                            };
                            let e = j ? o.signupWorkEmailSubtitle : o.signupDefaultSubtitle;
                            return "meeting_notes" === v ? {
                                title: o.meetingNotesTitle,
                                subtitle: e
                            } : s ? {
                                title: o.signupPerfmarkTrialTitle,
                                subtitle: o.signupPerfmarkTrialSubtitle
                            } : f ? {
                                title: o.signupFormResponseTitle
                            } : y ? {
                                title: o.mailTitle,
                                subtitle: e
                            } : b ? {
                                title: o.calendarTitle,
                                subtitle: e
                            } : r ? {
                                title: o.signupReferralTitle,
                                subtitle: o.signupReferralSignInText
                            } : u ? {
                                title: o.createAWorkAccountTitle,
                                subtitle: o.createAWorkAccountSubtitle
                            } : l ? {
                                title: o.signupAddAnotherAccountTitle,
                                subtitle: o.signupAddAnotherAccountSubtitle
                            } : {
                                title: j ? o.titleForWorkEmailExperiment : o.defaultTitle,
                                subtitle: e
                            }
                        } {
                            let e = p.get("from");
                            if (i(986939).A.isAdminMode) return {
                                title: "Log In (Admin Mode)"
                            };
                            if (e) switch (e) {
                                case "notion_academy":
                                    return {
                                        title: o.loginNotionAcademyTitle
                                    };
                                case "notion_template_gallery":
                                    return {
                                        title: o.loginTemplateGalleryTitle
                                    }
                            }
                            return c ? {
                                title: o.loginTitleFromTemplate
                            } : l ? {
                                title: o.signupAddAnotherAccountTitle,
                                subtitle: o.loginAddAnotherAccountSubtitle
                            } : f ? {
                                title: o.loginFormResponsePromptTitle
                            } : d ? {
                                title: o.defaultTitle,
                                subtitle: o.loginStartupProgramSubtitle
                            } : y ? {
                                title: o.mailTitle,
                                subtitle: o.defaultLoginSubtitle
                            } : b ? {
                                title: o.calendarTitle,
                                subtitle: o.defaultLoginSubtitle
                            } : "meeting_notes" === v ? {
                                title: o.meetingNotesTitle,
                                subtitle: o.defaultLoginSubtitle
                            } : {
                                title: o.defaultTitle,
                                subtitle: o.defaultLoginSubtitle
                            }
                        }
                }();
                return (0, n.jsxs)("div", {
                    style: w.wrapper,
                    children: [(0, n.jsx)("h1", {
                        style: w.title,
                        children: "string" == typeof A ? A : (0, n.jsx)(i(109939).sA, { ...A
                        })
                    }), k ? (0, n.jsx)("h2", {
                        style: w.subtitle,
                        children: (0, n.jsx)(i(109939).sA, { ...k
                        })
                    }) : void 0]
                })
            }
        },
        708690: (e, t, i) => {
            i.d(t, {
                m: () => l
            }), i(296540);
            var n = i(474848);
            let o = {
                bottomBar: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBlock: "16px",
                    backgroundColor: i(632079).Tj.background.primary
                }
            };

            function a() {
                let e = (0, i(533992).v3)(),
                    t = (0, i(109939).tz)(),
                    a = (0, i(599412).H)(t);
                return (0, n.jsx)("div", {
                    style: o.bottomBar,
                    children: (0, n.jsx)(i(678064).A, {
                        confirm: !0,
                        onChange: n => (0, i(989068).i)({
                            locale: n,
                            environment: e,
                            origin: "signup",
                            intl: t
                        }),
                        currentLocale: a,
                        origin: "signup",
                        showGlobeIcon: !0,
                        showVisibleLabelPrefix: !0
                    })
                })
            }
            let s = {
                minHeight: "100vh",
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto"
            };

            function l({
                showMobileLayout: e,
                publicPageData: t,
                isSignup: o,
                redirectURL: r,
                addAnotherAccount: d,
                isMobile: c,
                loginPermissionsStore: u,
                isDesktopApp: g
            }) {
                return (0, n.jsx)("div", {
                    style: s,
                    children: (0, n.jsxs)(i(4458).VP, {
                        justifyContent: "space-between",
                        flex: 1,
                        children: [(0, n.jsx)(i(4458).VP, {
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1,
                            children: (0, n.jsx)(i(158820).O, {
                                showMobileLayout: e,
                                publicPageData: t,
                                isSignup: o,
                                redirectURL: r,
                                addAnotherAccount: d,
                                isMobile: c,
                                loginPermissionsStore: u
                            })
                        }), g ? void 0 : (0, n.jsx)(a, {})]
                    })
                })
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
        766751: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                microsoftIcon: () => a
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0 0 20 20",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("g", {
                            clipPath: "url(#clip0_16020_721)",
                            children: [(0, n.jsx)("path", {
                                fill: "#F25022",
                                d: "M9.524.952H.952v8.572h8.572z"
                            }), (0, n.jsx)("path", {
                                fill: "#00A4EF",
                                d: "M9.524 10.476H.952v8.572h8.572z"
                            }), (0, n.jsx)("path", {
                                fill: "#7FBA00",
                                d: "M19.048.952h-8.572v8.572h8.572z"
                            }), (0, n.jsx)("path", {
                                fill: "#FFB900",
                                d: "M19.048 10.476h-8.572v8.572h8.572z"
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16020_721",
                                children: (0, n.jsx)("path", {
                                    fill: "#fff",
                                    d: "M0 0h20v20H0z"
                                })
                            })
                        })]
                    })
                },
                a = (0, i(104509).wt)("microsoft", o, "default")
        },
        773225: (e, t, i) => {
            i.d(t, {
                H: () => n
            });
            let n = (0, i(104509).xh)("infoCircle", {
                default: {
                    loader: () => i.e(7457).then(i.bind(i, 61107))
                },
                small: {
                    loader: () => i.e(7457).then(i.bind(i, 372181))
                },
                fill: {
                    loader: () => i.e(7457).then(i.bind(i, 923007))
                },
                fillSmall: {
                    loader: () => i.e(7457).then(i.bind(i, 827670))
                }
            }, ["info", "circle", "information", "help", "details"])
        },
        811298: (e, t, i) => {
            i.d(t, {
                qb: () => l,
                sY: () => r
            }), i(16280);
            var n = i(296540);
            i(814603), i(147566), i(198721);
            let o = "__hcaptchaOnLoad",
                a = "https://js.hcaptcha.com/1/api.js";
            var s = i(474848);
            let l = (0, n.createContext)({
                executeChallenge: void 0,
                ready: !1,
                initTimeout: !1,
                provider: "hcaptcha"
            });

            function r({
                children: e,
                initTimeoutMs: t,
                renderProps: d,
                enabled: c
            }) {
                let u = (0, n.useRef)(null),
                    g = function(e) {
                        let {
                            initTimeoutMs: t,
                            enabled: s
                        } = e, [l, r] = (0, n.useState)(void 0);
                        return ((0, n.useEffect)(() => {
                            if ((0, i(722371).O9)(l) || !s) return;
                            let e = !1;
                            return (0, i(975162).xz)(2, t, () => new Promise(e => {
                                let t, n;
                                window.__hcaptchaOnLoad = () => {
                                    var t;
                                    e(null == (t = window) ? void 0 : t.hcaptcha)
                                }, t = new URLSearchParams({
                                    render: "explicit",
                                    onload: o
                                }), n = `${a}?${t}`, (0, i(197603).Ay)(n, {
                                    resourceType: i(197603).vt.Javascript,
                                    id: "hcaptcha-script",
                                    defer: !0,
                                    async: !0
                                })
                            })).then(t => {
                                if (e) return;
                                if (t.timeout) {
                                    i(773352).log({
                                        level: "error",
                                        from: "useHCaptcha",
                                        type: "initTimeout"
                                    }), r({
                                        status: "failed",
                                        instance: void 0,
                                        reason: "timeout"
                                    });
                                    return
                                }
                                let n = t.result;
                                if (!n) throw Error("HCaptcha script loaded but no instance was found");
                                r({
                                    status: "success",
                                    instance: n
                                })
                            }).catch(t => {
                                e || (i(773352).log({
                                    level: "error",
                                    from: "useHCaptcha",
                                    type: "injectScriptError",
                                    error: (0, i(416607).convertErrorToLog)(t)
                                }), r({
                                    status: "failed",
                                    reason: "script-error",
                                    instance: void 0
                                }))
                            }), () => {
                                let t;
                                e = !0, delete window[o];
                                let n = (t = new URLSearchParams({
                                    render: "explicit",
                                    onload: o
                                }), `${a}?${t}`);
                                (0, i(197603).dC)(n)
                            }
                        }, [l, s, t]), (null == l ? void 0 : l.status) === "success") ? {
                            isTimedOut: !1,
                            hCaptchaInstance: l.instance
                        } : (null == l ? void 0 : l.status) === "failed" ? {
                            isTimedOut: !0,
                            hCaptchaInstance: void 0
                        } : void 0
                    }({
                        initTimeoutMs: t,
                        enabled: c
                    }),
                    m = null == g ? void 0 : g.hCaptchaInstance,
                    p = (null == g ? void 0 : g.isTimedOut) ? ? !1,
                    [h, f] = (0, n.useState)(void 0),
                    y = (0, n.useCallback)(async () => {
                        if (!m || !m.render) throw Error("HCaptcha hasn't been loaded");
                        let e = u.current;
                        if (!e) throw Error("Container has not been loaded yet");
                        let t = h;
                        if (!t) {
                            let n = performance.now();
                            f(t = m.render(e, {
                                size: "invisible",
                                sitekey: d.sitekey,
                                "expired-callback": void 0,
                                "error-callback": void 0,
                                callback: void 0
                            })), i(773352).log({
                                type: "hcaptchaWidgetRender",
                                from: "HCaptchaProvider",
                                data: {
                                    timeMs: performance.now() - n
                                },
                                level: "info"
                            })
                        }
                        let n = await m.execute(t, {
                            async: !0
                        });
                        return n ? n.response : void 0
                    }, [m, d.sitekey, h]),
                    b = (0, n.useMemo)(() => ({
                        executeChallenge: m ? y : void 0,
                        ready: !!m,
                        initTimeout: p,
                        provider: "hcaptcha"
                    }), [y, m, p]);
                return (0, s.jsxs)(l.Provider, {
                    value: b,
                    children: [e, c ? (0, s.jsx)("div", {
                        ref: u,
                        style: {
                            width: 0,
                            height: 0,
                            overflow: "hidden",
                            position: "absolute"
                        }
                    }) : void 0]
                })
            }
            l.displayName = "HCaptchaContext", l.Consumer
        },
        837572: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(296540);
            var n = i(474848);

            function o({
                children: e,
                provider: t,
                initTimeoutMs: a = 1e4,
                sitekey: s
            }) {
                return (0, n.jsx)(i(811298).sY, {
                    renderProps: {
                        sitekey: s
                    },
                    initTimeoutMs: a,
                    enabled: "hcaptcha" === t,
                    children: e
                })
            }
        },
        887483: (e, t, i) => {
            i.d(t, {
                f: () => o
            }), i(296540);
            var n = i(474848);

            function o({
                loginPermissionsStore: e,
                emailLabelType: t,
                isSignup: a,
                centerTitleContainer: s,
                publicPageData: l,
                isAddAnotherAccount: r,
                redirectURL: d,
                disableDisclaimer: c,
                isTemplateLogin: u,
                isReferralSignup: g,
                isCreateAWorkAccount: m,
                centerTitleText: p,
                isOnFrontSignupPage: h
            }) {
                let f = (0, i(682985).K8)(() => a && (0, i(639878).Os)(), [a]),
                    y = !!i(13565).Qp(),
                    b = (0, i(690940).A)(),
                    x = (0, i(682985).K8)(() => i(83879).b.isMfa(), []),
                    v = (0, i(483908).yb)(),
                    S = (0, i(960253).I)(() => ({
                        titleContainer: {
                            fontWeight: i(699422).Wy.bold,
                            marginBottom: v ? 30 : 23,
                            textAlign: "center",
                            lineHeight: 1.1,
                            maxWidth: b ? 420 : 380,
                            ...s && {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        }
                    }), [b, s, v]);
                return x ? (0, n.jsx)(i(660983).A, {}) : (0, n.jsxs)(i(4458).VP, {
                    alignItems: "center",
                    children: [(0, n.jsx)("div", {
                        style: S.titleContainer,
                        children: (0, n.jsx)(i(696906).i, {
                            isSignup: a,
                            spaceName: null == l ? void 0 : l.spaceName,
                            isPerfmarkTrialSignup: f,
                            isAddAnotherAccount: r,
                            isStartupProgram: y,
                            isTemplateLogin: u,
                            isReferralSignup: g,
                            isCreateAWorkAccount: m,
                            centerText: p || v,
                            isOnFrontSignupPage: h
                        })
                    }), (0, n.jsx)(i(891418).Ay, {
                        loginPermissionsStore: e,
                        emailLabelType: t,
                        style: c ? void 0 : {
                            marginBottom: "4vh"
                        },
                        isSignup: a,
                        isPerfmarkTrialSignup: f,
                        isStartupProgram: y,
                        from: "frontLoginPage",
                        disableDisclaimer: c,
                        redirectURL: d
                    })]
                })
            }
        },
        891418: (e, t, i) => {
            i.d(t, {
                Ay: () => $,
                oi: () => Z
            }), i(16280), i(814603), i(147566), i(198721);
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let {
                    showInvitationVersion: t,
                    themeOverride: a
                } = e, s = (0, i(533992).v3)(), l = (0, n.useCallback)(() => {
                    i(374866).$p({
                        environment: s
                    })
                }, [s]), r = (0, i(483908).yb)();
                return i(986939).A.isAdminMode ? null : (0, o.jsx)(i(557143).F, {
                    onClick: l,
                    icon: i(893167).appleTintableIcon,
                    getLabel: () => r ? (0, o.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithAppleButton.reimaginedLabel",
                        defaultMessage: "Apple"
                    }) : t ? (0, o.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithAppleButton.label.verify",
                        defaultMessage: "Verify with Apple"
                    }) : (0, o.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithAppleButton.label",
                        defaultMessage: "Continue with Apple"
                    }),
                    themeOverride: a
                })
            }
            i(898992), i(354520);
            let s = "onetap_nonce";

            function l(e) {
                try {
                    var t;
                    let n = null == (t = window) ? void 0 : t.google;
                    n ? e(n) : i(773352).log({
                        level: "warning",
                        from: "googleOneTapLogin",
                        type: "googleOneTapLibraryNotFound",
                        error: {
                            message: "Please make sure you have the google onetap library installed"
                        }
                    })
                } catch (e) {
                    i(773352).log({
                        level: "error",
                        from: "googleOneTapLogin",
                        type: "googleOneTapLibraryLoadError",
                        error: (0, i(416607).convertErrorToLog)(e)
                    })
                }
            }
            let r = function(e) {
                    let {
                        onCancel: t,
                        onSuccess: i,
                        googleAccountConfigs: a,
                        containerStyle: s
                    } = e;
                    if ((0, n.useEffect)(() => (l(e => {
                            e.accounts.id.initialize({ ...a,
                                prompt_parent_id: "g_id_onload",
                                itp_support: !0
                            }), e.accounts.id.prompt(e => {
                                e.isSkippedMoment() && ["user_cancel", "tap_outside"].includes(e.getSkippedReason()) ? t() : e.isDismissedMoment() && ("credential_returned" === e.getDismissedReason() ? i() : t())
                            })
                        }), () => l(e => {
                            e.accounts.id.cancel()
                        })), []), !s) return null; {
                        let t = {
                            position: "absolute",
                            ...e.containerStyle,
                            zIndex: 100
                        };
                        return (0, o.jsx)("div", {
                            id: "g_id_onload",
                            "data-prompt_parent_id": "g_id_onload",
                            "data-cancel_on_tap_outside": "false",
                            style: t
                        })
                    }
                },
                d = new(i(815048)).O2("googleOneTap", async () => await i(975162).lG([(0, i(197603).Ay)("https://accounts.google.com/gsi/client"), i(975162).mO(1e4, void 0)]));

            function c(e) {
                let {
                    isSignup: t,
                    showInvitationVersion: a,
                    buttonsStore: l,
                    loginPermissionsStore: c,
                    themeOverride: u,
                    isFullWidth: g
                } = e, m = (0, i(533992).Y0)(), p = (0, i(533992).v3)(), [h] = (0, n.useState)(() => {
                    let e, t, n;
                    return e = (0, i(4962).lZ)(), t = "https:" === window.location.protocol, n = window.location.hostname, document.cookie = `${s}=; path=/; domain=.${n}; max-age=0`, document.cookie = [`${s}=${e}`, "path=/", "max-age=3600", "SameSite=Strict", t ? "Secure" : ""].filter(Boolean).join("; "), e
                }), f = (0, i(682985).K8)(() => "loading" === l.state.buttons.loginWithGoogleButton, [l]), y = (0, i(682985).K8)(() => i(83879).b.state.forceAdminSamlLogin, []), b = m.isMobileBrowser, x = (0, i(483908).yb)(), v = (0, i(483908).Nz)();
                return m.isBannedGoogleSSOUserAgent || y ? null : (0, o.jsxs)(o.Fragment, {
                    children: [b || v || m.isElectronAny ? null : (0, o.jsx)(i(815048).u2, {
                        dependency: d,
                        children: () => (0, o.jsx)(r, {
                            onCancel: () => {
                                i(578942).NW(p, {
                                    actionType: "close",
                                    isSignup: t
                                })
                            },
                            onSuccess: () => {
                                i(578942).NW(p, {
                                    actionType: "success",
                                    isSignup: t
                                })
                            },
                            googleAccountConfigs: {
                                client_id: i(986939).A.google.clientId,
                                cancel_on_tap_outside: !1,
                                context: t ? "signup" : "login",
                                nonce: h,
                                callback: e => {
                                    i(680007).default.mark("login_time.google"), i(578942).NW(p, {
                                        actionType: "click",
                                        isSignup: t
                                    }), i(724942).vr({
                                        environment: p,
                                        idToken: e.credential
                                    })
                                }
                            }
                        })
                    }), (0, o.jsx)(i(557143).F, {
                        onClick: async () => {
                            i(680007).default.mark("login_time.google"), i(649296).E({
                                buttonsStore: l,
                                buttonName: "loginWithGoogleButton",
                                buttonState: "loading"
                            }), await i(374866).y8({
                                environment: p,
                                permissionsStore: c
                            }), i(649296).E({
                                buttonsStore: l,
                                buttonName: "loginWithGoogleButton",
                                buttonState: "idle"
                            })
                        },
                        icon: i(930646).googleIcon,
                        getLabel: () => x ? (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.loginWithGoogleButton.reimaginedLabel",
                            defaultMessage: "Google"
                        }) : a ? (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.verifyWithGoogleButton.label",
                            defaultMessage: "Verify with Google"
                        }) : (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.loginWithGoogleButton.label",
                            defaultMessage: "Continue with Google"
                        }),
                        isLoading: f,
                        themeOverride: u,
                        isFullWidth: g
                    })]
                })
            }

            function u(e) {
                let {
                    showInvitationVersion: t,
                    buttonsStore: n,
                    themeOverride: a
                } = e, s = (0, i(533992).v3)(), l = (0, i(682985).K8)(() => "loading" === n.state.buttons.loginWithMicrosoftButton, [n]), r = (0, i(483908).yb)();
                return (0, o.jsx)(i(557143).F, {
                    onClick: async () => {
                        i(680007).default.mark("login_time.microsoft.verified"), i(649296).E({
                            buttonsStore: n,
                            buttonName: "loginWithMicrosoftButton",
                            buttonState: "loading"
                        }), await i(374866).bn({
                            environment: s
                        }), i(649296).E({
                            buttonsStore: n,
                            buttonName: "loginWithMicrosoftButton",
                            buttonState: "idle"
                        })
                    },
                    icon: i(766751).microsoftIcon,
                    getLabel: () => r ? (0, o.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithMicrosoftButton.reimaginedLabel",
                        defaultMessage: "Microsoft"
                    }) : t ? (0, o.jsx)(i(109939).sA, {
                        id: "loginForm.verifyWithMicrosoftButton.label",
                        defaultMessage: "Verify with Microsoft"
                    }) : (0, o.jsx)(i(109939).sA, {
                        id: "loginForm.loginWithMicrosoftButton.label",
                        defaultMessage: "Continue with Microsoft"
                    }),
                    isLoading: l,
                    themeOverride: a
                })
            }
            i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(581454);
            let g = new Set(i(801109)._w.map(e => e.split(".")[0])),
                m = {
                    marginBottom: 8
                };

            function p(e) {
                let {
                    email: t,
                    emailLabelType: a,
                    onSubmit: s,
                    autoComplete: l,
                    buttonsStore: r,
                    disableCaption: d,
                    trustedDomain: c,
                    emailInputRef: u,
                    isOnFrontSignupPage: p
                } = e, h = (0, i(109939).tz)(), f = "notion_for_work" === (0, i(13565).J0)(), y = Z({
                    isReimaginedLoginPage: (0, i(483908).yb)()
                }), b = (0, i(682985).K8)(() => p ? i(218744).default.getEligibleGroup({
                    experimentId: "signup_page_for_work",
                    defaultGroup: "control"
                }) : "control", [p]), x = "placeholder_and_copy_and_banner_v1" === b || "placeholder_and_copy_and_banner_v2" === b, v = (0, i(682985).K8)(() => p ? i(218744).default.getEligibleGroup({
                    experimentId: "signup_work_email_business_trial",
                    defaultGroup: "control"
                }) : "control", [p]), [S, j] = (0, n.useState)(!1), w = (0, n.useMemo)(() => i(381453).NF("notion-email-input-"), []), A = f ? (0, o.jsx)(i(109939).sA, {
                    id: "loginForm.professionalEmailInput.label",
                    defaultMessage: "Professional email"
                }) : "email" === a ? (0, o.jsx)(i(109939).sA, {
                    id: "loginForm.emailInput.label",
                    defaultMessage: "Email"
                }) : "business_email" === a ? (0, o.jsx)(i(109939).sA, {
                    id: "loginForm.businessEmailInput.label",
                    defaultMessage: "Business email"
                }) : (0, o.jsx)(i(109939).sA, {
                    id: "loginForm.workEmailInput.label",
                    defaultMessage: "Work email"
                }), k = "business_email" === a ? h.formatMessage({
                    id: "loginForm.businessEmailInput.placeholder",
                    defaultMessage: "Enter your business email address"
                }) : "placeholder_only" === b || "placeholder_and_copy" === b || "placeholder_and_copy_and_banner_v1" === b || "placeholder_and_copy_and_banner_v2" === b ? h.formatMessage({
                    id: "loginForm.workEmailInput.placeholder.forWorkExperiment",
                    defaultMessage: "name@company.com"
                }) : h.formatMessage({
                    id: "loginForm.emailInput.placeholder",
                    defaultMessage: "Enter your email address..."
                }), M = (0, i(682985).K8)(() => "loading" === r.state.buttons.continueWithEmailButton || "loading" === r.state.buttons.continueWithPasswordButton, [r]), C = (0, n.useCallback)(e => {
                    let t = e.target.value;
                    if (x || "v1" === v) {
                        var n;
                        let e = (0, i(801109).zN)(t),
                            o = null == e || null == (n = e.split(".")[0]) ? void 0 : n.toLowerCase();
                        j(!!(null != e && e.includes(".")) && !!o && g.has(o))
                    }
                    let o = { ...i(83879).b.state,
                        email: t,
                        alert: void 0
                    };
                    i(83879).b.isPassword() || i(83879).b.isTemporaryPasscode() || i(83879).b.isReverifying() ? i(83879).b.setState({ ...o,
                        loginType: "email",
                        password: ""
                    }) : i(83879).b.setState(o)
                }, [x, v]), T = (0, n.useCallback)(e => {
                    e.stopPropagation()
                }, []), P = (0, i(682985).K8)(() => i(83879).b.state.forceAdminSamlLogin, []), _ = (0, i(682985).K8)(() => i(83879).b.isMicrosoftVerification(), []), L = S && x && !_, I = !_ && "v1" === v && S, B = function(e) {
                    let {
                        isOnFrontSignupPage: t,
                        isMicrosoftVerification: n
                    } = e;
                    return !!t && !n && "treatment" === (0, i(219279).ZP)({
                        experimentId: "signup_work_email_business_trial_v2",
                        enableEventTrailLogging: !0,
                        defaultGroup: "control"
                    })
                }({
                    isOnFrontSignupPage: p,
                    isMicrosoftVerification: _
                }), E = !_ && ("v2" === v || B), N = (0, o.jsx)(i(109939).sA, {
                    id: "loginForm.emailInput.workEmailTooltip.v2",
                    defaultMessage: "<bold>Tip: Use your work email</bold> (if you have one) so it’s easier for your team to join you on Notion",
                    values: {
                        bold: e => (0, o.jsx)(i(111010).D, {
                            as: "span",
                            styleKey: "bodySemibold",
                            children: e
                        })
                    }
                });
                return P ? null : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(i(111010).D, {
                        as: "label",
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        htmlFor: w,
                        style: {
                            display: "block",
                            marginBottom: 4,
                            ...y.settingsLabel
                        },
                        children: A
                    }), _ ? (0, o.jsx)("div", {
                        children: t
                    }) : (0, o.jsx)(i(36481).p, {
                        ref: u,
                        id: w,
                        value: t,
                        type: "email",
                        format: "large",
                        style: { ...y.input,
                            backgroundColor: "transparent",
                            marginBottom: d ? 16 : 8
                        },
                        onSubmit: s,
                        placeholder: k,
                        autoComplete: l,
                        showClearButton: !0,
                        autoFocus: !0,
                        onChange: C,
                        disabled: M,
                        onPaste: T
                    }), I || E ? (0, o.jsx)("div", {
                        style: m,
                        children: (0, o.jsx)(i(748356).l, {
                            display: "inline",
                            tint: E ? "gray" : "yellow",
                            label: (0, o.jsx)(i(111010).D, {
                                as: "span",
                                children: B ? N : (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.emailInput.workEmailTrialBanner",
                                    defaultMessage: "<bold>Tip: Use your work email</bold> for a free trial of Notion’s AI Agent, Meeting Notes, and more",
                                    values: {
                                        bold: e => (0, o.jsx)(i(111010).D, {
                                            as: "span",
                                            styleKey: "bodySemibold",
                                            children: e
                                        })
                                    }
                                })
                            })
                        })
                    }) : L ? (0, o.jsx)("div", {
                        style: m,
                        children: (0, o.jsx)(i(748356).l, {
                            display: "inline",
                            tint: "yellow",
                            label: (0, o.jsx)(i(111010).D, {
                                as: "span",
                                children: "placeholder_and_copy_and_banner_v1" === b ? (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.emailInput.workEmailTooltip.v1",
                                    defaultMessage: "<bold>Tip: Use your work email</bold> (if you have one) to collaborate more easily with your team",
                                    values: {
                                        bold: e => (0, o.jsx)(i(111010).D, {
                                            as: "span",
                                            styleKey: "bodySemibold",
                                            children: e
                                        })
                                    }
                                }) : N
                            })
                        })
                    }) : d || c || _ || "business_email" === a ? void 0 : (0, o.jsx)("div", {
                        style: y.captionV2,
                        children: "v1" === v ? (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.emailInput.workEmailTrialCaption",
                            defaultMessage: "Use your work email for a free trial of Notion’s AI Agent, Meeting Notes, and more"
                        }) : (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.emailInput.organization.label",
                            defaultMessage: "Use an organization email to easily collaborate with teammates"
                        })
                    })]
                })
            }
            let h = {
                caption: {
                    color: i(632079).Tj.blue.text.accentPrimary,
                    fontSize: 12,
                    lineHeight: 1.6,
                    marginTop: 4,
                    marginBottom: 12,
                    textAlign: "start",
                    fontWeight: i(699422).Wy.semibold
                }
            };

            function f(e) {
                let t = (0, i(682985).K8)(() => i(83879).b.isPassword() || i(83879).b.isEmail(), []),
                    a = (0, n.useCallback)(() => {
                        i(83879).b.setState({ ...i(83879).b.state,
                            loginType: "forgot",
                            password: "",
                            alert: void 0
                        })
                    }, []);
                return t ? (0, o.jsx)("div", {
                    id: void 0,
                    style: h.caption,
                    children: (0, o.jsx)(i(428217).V, {
                        onClick: a,
                        disableUnderline: !0,
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.forgotPasswordLinkV2",
                            defaultMessage: "Forgot your password?"
                        })
                    })
                }) : null
            }
            let y = {
                fontFamily: "monospace"
            };

            function b(e) {
                let {
                    password: t,
                    inputType: a,
                    placeholderType: s,
                    onSubmit: l,
                    icon: r,
                    onIconClick: d,
                    autoFocus: c,
                    disableCaption: u,
                    withVerificationLabel: g,
                    inputRef: m
                } = e, p = "", h = (0, i(109939).tz)(), b = (0, i(533992).v3)(), x = Z({}), v = (0, n.useMemo)(() => i(381453).NF("notion-password-input-"), []);
                switch (s) {
                    case "enter_password":
                        p = h.formatMessage({
                            id: "loginForm.passcodeInput.enterPasswordPlaceholder",
                            defaultMessage: "Enter your password..."
                        });
                        break;
                    case "enter_code":
                        p = h.formatMessage({
                            id: "loginForm.passcodeInput.enterSignupCodePlaceholder",
                            defaultMessage: "Enter code"
                        });
                        break;
                    case "reverify":
                        p = h.formatMessage({
                            id: "loginForm.passcodeInput.reverifyPlaceholder",
                            defaultMessage: "Paste verification code"
                        })
                }
                let S = (0, n.useCallback)(e => {
                    i(83879).b.setState({ ...i(83879).b.state,
                        password: "text" === a ? e.target.value.trim() : e.target.value,
                        alert: void 0
                    })
                }, [a]);
                return (0, o.jsxs)(n.Fragment, {
                    children: [(0, o.jsx)(i(111010).D, {
                        as: "label",
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        htmlFor: v,
                        style: {
                            display: "block",
                            marginBottom: 4,
                            ...x.settingsLabel
                        },
                        children: g ? (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.verificationCodeInput.labelV2",
                            defaultMessage: "Verification code"
                        }) : (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.passwordInput.label",
                            defaultMessage: "Password"
                        })
                    }), (0, o.jsx)(i(36481).p, {
                        ref: m,
                        id: v,
                        type: a,
                        value: t,
                        style: { ...x.input,
                            backgroundColor: "transparent",
                            marginBottom: u ? 16 : 8,
                            ..."enter_code" === s ? y : {}
                        },
                        format: "large",
                        placeholder: p,
                        onSubmit: l,
                        autoFocus: c,
                        autoComplete: "text" === a ? "one-time-code" : "current-password",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: !1,
                        onChange: S,
                        icon: r,
                        onIconClick: d,
                        onPaste: function(e) {
                            e.stopPropagation(), (0, i(578942).Hl)(b, e.clipboardData.getData("text").length > 10)
                        }
                    }), u ? void 0 : (0, o.jsx)(f, {})]
                })
            }
            let x = 30 * i(627179).wK,
                v = {
                    marginTop: 8
                },
                S = {
                    marginInlineStart: 6,
                    marginTop: 2
                },
                j = {
                    display: "block",
                    textAlign: "center",
                    paddingTop: "6px"
                },
                w = {
                    display: "block",
                    textAlign: "center",
                    paddingTop: "6px"
                };

            function A(e) {
                let t = (0, i(533992).v3)(),
                    a = (0, i(109939).tz)(),
                    {
                        announce: s
                    } = (0, i(813367).U)(),
                    l = (0, i(682985).K8)(() => i(83879).b.state.challengeProvider, []),
                    {
                        primary: r
                    } = (0, i(343481).u)(l),
                    [d, c] = (0, n.useState)(!1),
                    [u, g] = (0, n.useState)(x),
                    m = () => {
                        clearInterval(p.current), g(x)
                    },
                    p = (0, n.useRef)(void 0),
                    h = (0, n.useCallback)(() => {
                        m(), p.current = window.setInterval(() => {
                            g(e => e <= 1 ? (window.clearInterval(p.current), p.current = void 0, 0) : e - i(627179).wK)
                        }, i(627179).TD)
                    }, []);
                (0, n.useEffect)(() => {
                    h()
                }, [h]);
                let f = (0, i(934877).A)({
                        visibility: d,
                        delayShow: 100
                    }),
                    y = (0, n.useRef)(!1);
                return (0, n.useEffect)(() => {
                    f && !y.current && s(a.formatMessage({
                        id: "loginForm.resendVerificationCode.loadingAnnouncement",
                        defaultMessage: "Sending verification code…"
                    })), y.current = f
                }, [f, s, a]), (0, o.jsx)("div", {
                    style: v,
                    children: f ? (0, o.jsx)(i(517334).k, {
                        style: S
                    }) : 0 === u ? (0, o.jsx)(i(988022).p, {
                        colorPalette: "blue",
                        onClick: () => {
                            c(!0), e.handleSendTemporaryPassword({
                                environment: t,
                                reverify: !1,
                                disableLoginLink: !1,
                                challengeProps: r,
                                onSendTemporaryPasswordSuccess: () => {
                                    var t;
                                    m(), h(), c(!1), null == (t = e.onResendSuccess) || t.call(e)
                                },
                                onSendTemporaryPasswordFailure: () => {
                                    c(!1)
                                },
                                isResend: !0
                            })
                        },
                        style: j,
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.microsoftVerify.resendButtonLabel",
                            defaultMessage: "Resend verification code"
                        })
                    }) : (0, o.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        role: "status",
                        "aria-live": "polite",
                        style: w,
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.temporaryPasscodeInput.resendVerificationCodeSoon",
                            defaultMessage: "Resend in {secondsRemaining}s",
                            values: {
                                secondsRemaining: u
                            }
                        })
                    })
                })
            }
            let k = {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "320px",
                    margin: "0 auto",
                    justifyContent: "center"
                },
                M = {
                    marginBottom: "4px",
                    marginTop: "16px"
                },
                C = {
                    marginBottom: "4px"
                },
                T = {
                    marginTop: "8px",
                    marginBottom: "8px"
                },
                P = {
                    marginTop: "20px",
                    marginBottom: "12px"
                };

            function _({
                email: e,
                onSubmit: t,
                onVerificationCodeChange: a,
                handleSendTemporaryPassword: s
            }) {
                let l = (0, n.useRef)(null);
                return (0, o.jsxs)("div", {
                    style: k,
                    children: [(0, o.jsx)(i(114159).A, {
                        analyticsName: "login",
                        hideNotionText: !0
                    }), (0, o.jsx)(i(111010).D, {
                        colorVariant: "primary",
                        style: M,
                        styleKey: "titleLgSemibold",
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.microsoftVerify.header",
                            defaultMessage: "Verify your email"
                        })
                    }), (0, o.jsx)(i(111010).D, {
                        colorVariant: "secondary",
                        style: C,
                        styleKey: "bodyRegular",
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.microsoftVerify.description",
                            defaultMessage: "We couldn’t verify the email linked to your Microsoft account, so let’s take care of that now."
                        })
                    }), (0, o.jsx)("div", {
                        children: (0, o.jsx)(i(111010).D, {
                            colorVariant: "secondary",
                            styleKey: "captionMedium",
                            style: M,
                            children: (0, o.jsx)(i(109939).sA, {
                                id: "loginForm.microsoftVerify.emailFieldLabel",
                                defaultMessage: "Email address"
                            })
                        })
                    }), (0, o.jsx)("div", {
                        children: (0, o.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            children: e
                        })
                    }), (0, o.jsx)("div", {
                        children: (0, o.jsx)(i(111010).D, {
                            colorVariant: "secondary",
                            styleKey: "captionMedium",
                            style: M,
                            children: (0, o.jsx)(i(109939).sA, {
                                id: "loginForm.microsoftVerify.verificationCodeFieldLabel",
                                defaultMessage: "Verification code"
                            })
                        })
                    }), (0, o.jsx)("div", {
                        children: (0, o.jsx)("input", {
                            ref: l,
                            type: "text",
                            onChange: a
                        })
                    }), (0, o.jsx)(i(111010).D, {
                        colorVariant: "secondary",
                        styleKey: "captionMedium",
                        style: T,
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.microsoftVerify.verificationCodeInstruction",
                            defaultMessage: "Enter the code sent to your email"
                        })
                    }), (0, o.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        style: P,
                        onClick: t,
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "loginForm.microsoftVerify.verifyButtonLabel",
                            defaultMessage: "Verify"
                        })
                    }), (0, o.jsx)(A, {
                        handleSendTemporaryPassword: s,
                        onResendSuccess: () => {
                            var e;
                            null == (e = l.current) || e.focus()
                        }
                    })]
                })
            }
            new(i(510969)).A;
            let L = {
                marginTop: 4,
                marginBottom: 20
            };

            function I({
                isStartupProgram: e
            }) {
                return e ? (0, o.jsx)("div", {
                    style: L,
                    children: (0, o.jsx)(i(141342).l, {
                        tint: "blue",
                        display: "inline",
                        iconGroup: i(773225).H,
                        label: (0, o.jsx)(i(109939).sA, {
                            id: "login.startupProgramBanner",
                            defaultMessage: "Only professional email domains are eligible for this offer."
                        })
                    })
                }) : null
            }

            function B() {
                let e = (0, i(682985).K8)(() => i(83879).b.state.alert, []),
                    t = e && e.split("User:")[1] || e,
                    a = (0, n.useRef)(null),
                    s = (0, n.useRef)(t);
                return (0, n.useEffect)(() => {
                    if (!s.current && t) {
                        var e;
                        null == (e = a.current) || e.focus()
                    }
                    s.current = t
                }, [t, a]), (0, o.jsx)("div", {
                    ref: a,
                    style: {
                        fontSize: 14,
                        color: "rgba(235, 87, 87, 1)",
                        textAlign: "center",
                        display: t ? "block" : "none",
                        width: "100%",
                        margin: "12px 0"
                    },
                    "aria-live": "polite",
                    role: "alert",
                    "aria-atomic": "true",
                    tabIndex: -1,
                    children: t
                })
            }

            function E(e) {
                e.preventDefault()
            }
            async function N(e) {
                let {
                    environment: t,
                    buttonsStore: n
                } = e;
                i(649296).E({
                    buttonsStore: n,
                    buttonName: "continueWithEmailButton",
                    buttonState: "loading"
                }), await i(374866).pe({
                    environment: t
                }), i(83879).b.state.needsSendTemporaryPasswordReason || i(649296).E({
                    buttonsStore: n,
                    buttonName: "continueWithEmailButton",
                    buttonState: "idle"
                })
            }
            async function W(e) {
                let {
                    environment: t,
                    reverify: n,
                    disableLoginLink: o,
                    needsSendTemporaryPasswordReason: a,
                    challengeProps: s,
                    buttonsStore: l,
                    onSendTemporaryPasswordSuccess: r,
                    onSendTemporaryPasswordFailure: d,
                    isResend: c
                } = e;
                l && i(649296).E({
                    buttonsStore: l,
                    buttonName: "continueWithEmailButton",
                    buttonState: "loading"
                }), await i(374866).WV({
                    environment: t,
                    disableLoginLink: o,
                    reverify: n,
                    needsSendTemporaryPasswordReason: a,
                    challengeProps: s,
                    onSendTemporaryPasswordSuccess: r,
                    onSendTemporaryPasswordFailure: d,
                    isResend: c
                }), l && i(649296).E({
                    buttonsStore: l,
                    buttonName: "continueWithEmailButton",
                    buttonState: "idle"
                })
            }
            async function F(e) {
                let {
                    environment: t,
                    buttonName: n,
                    redirectURL: o,
                    showInvitationVersion: a,
                    buttonsStore: s
                } = e;
                if (i(83879).b.isReverifying()) {
                    i(649296).E({
                        buttonsStore: s,
                        buttonName: n,
                        buttonState: "loading"
                    });
                    let {
                        password: e,
                        sentEmailPasscodeState: o
                    } = i(83879).b.state, a = await i(374866).A$({
                        environment: t,
                        state: o,
                        password: e
                    });
                    a ? i(83879).b.setState({ ...i(83879).b.state,
                        alert: a
                    }) : i(83879).b.setState({ ...i(83879).b.state,
                        loginType: "password",
                        password: "",
                        reverified: !0,
                        alert: void 0
                    }), i(649296).E({
                        buttonsStore: s,
                        buttonName: n,
                        buttonState: "idle"
                    })
                }
                if (i(83879).b.isTemporaryPasscodeOrMicrosoftVerification()) {
                    i(649296).E({
                        buttonsStore: s,
                        buttonName: n,
                        buttonState: "loading"
                    });
                    let {
                        password: e,
                        sentEmailPasscodeState: l,
                        email: r
                    } = i(83879).b.state, d = await i(724942).fp({
                        environment: t,
                        state: l,
                        password: e,
                        redirectURL: o,
                        passcodeEnterMethod: "manual_input",
                        showInvitationVersion: a,
                        email: r,
                        isMicrosoft: i(83879).b.isMicrosoftVerification()
                    });
                    "fail" === d.status && i(83879).b.setState({ ...i(83879).b.state,
                        alert: d.errorMessage
                    }), i(649296).E({
                        buttonsStore: s,
                        buttonName: n,
                        buttonState: "idle"
                    })
                }
            }
            let O = {
                    opacity: 0,
                    height: 0,
                    padding: 0,
                    pointerEvents: "none"
                },
                R = {
                    paddingInlineEnd: 4,
                    display: "inline-block"
                },
                V = {
                    marginTop: 6,
                    marginBottom: 12,
                    width: "100%"
                },
                z = {
                    marginTop: 30,
                    marginBottom: 30
                };

            function D(e) {
                let t = (0, i(533992).v3)(),
                    a = (0, i(533992).Y0)(),
                    s = (0, i(109939).tz)(),
                    l = (0, i(483908).yb)(),
                    r = l ? (0, o.jsx)("div", {
                        style: z,
                        children: (0, o.jsx)(i(346268).c, {
                            size: 21,
                            label: s.formatMessage({
                                id: "loginForm.divider.label",
                                defaultMessage: "or continue with"
                            })
                        })
                    }) : (0, o.jsx)(i(346268).c, {
                        size: 41,
                        colorVariant: "secondary"
                    }),
                    d = function(e) {
                        let {
                            isReimaginedLoginPage: t
                        } = e, n = (0, i(483908).OD)();
                        return (0, i(960253).I)(() => ({
                            frontButtonStyle: {
                                marginTop: 6,
                                width: "100%",
                                ...n && {
                                    borderRadius: 12,
                                    height: 48,
                                    fontSize: "16px"
                                },
                                ...t && {
                                    borderRadius: 8,
                                    height: 40,
                                    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%), ${i(632079).oZ.frontBlueButtonBackground}`
                                }
                            }
                        }), [n, t])
                    }({
                        isReimaginedLoginPage: l
                    }),
                    c = Z({}),
                    {
                        emailLabelType: u,
                        isSignup: g,
                        redirectURL: m,
                        showInvitationVersion: h,
                        isStartupProgram: f,
                        styles: y,
                        buttonsStore: x,
                        showDivider: v,
                        emailInputRef: S,
                        isOnFrontSignupPage: j
                    } = e,
                    {
                        email: w,
                        password: k
                    } = (0, i(682985).O$)(i(83879).b),
                    M = (0, n.useRef)(null),
                    C = (0, i(682985).K8)(() => "password" === i(83879).b.state.loginType && i(83879).b.state.reverified, []),
                    T = (0, i(682985).K8)(() => i(83879).b.isEmail(), []),
                    P = (0, i(682985).K8)(() => i(83879).b.isPassword(), []),
                    L = (0, i(682985).K8)(() => i(83879).b.isPasswordResetSent(), []),
                    B = (0, i(682985).K8)(() => i(83879).b.isForgotPassword(), []),
                    D = (0, i(682985).K8)(() => i(83879).b.isReverifying(), []),
                    U = (0, i(682985).K8)(() => i(83879).b.isExclusiveLoginLinkTemporaryPasscode(), []),
                    H = (0, i(682985).K8)(() => i(83879).b.isTemporaryPasscode(), []),
                    K = (0, i(682985).K8)(() => i(83879).b.isSaml(), []),
                    G = (0, i(682985).K8)(() => i(83879).b.isMicrosoftVerification(), []),
                    q = (0, i(682985).K8)(() => i(83879).b.state.challengeProvider, []),
                    {
                        primary: Y
                    } = (0, i(343481).u)(q),
                    $ = (0, n.useMemo)(() => ({
                        email: w
                    }), [w]),
                    J = (0, i(260033).C)({
                        environment: t,
                        challengeProps: Y,
                        action: "login_password",
                        enabled: void 0 !== q && P,
                        logMetadata: $
                    }),
                    Q = (0, i(682985).K8)(() => "loading" === x.state.buttons.continueWithEmailButton, [x]),
                    X = (0, i(682985).K8)(() => "loading" === x.state.buttons.continueWithPasswordButton, [x]),
                    ee = (0, i(682985).K8)(() => "loading" === x.state.buttons.temporaryPasscodeLoginButton, [x]),
                    et = (0, i(682985).K8)(() => "loading" === x.state.buttons.resetPasswordButton, [x]),
                    ei = (0, i(682985).K8)(() => "loading" === x.state.buttons.continueWithReverifyButton, [x]),
                    en = (0, i(682985).K8)(() => "loading" === x.state.buttons.continueWithSAMLButton, [x]),
                    eo = (0, n.useCallback)(async () => {
                        Q || await N({
                            environment: t,
                            buttonsStore: x
                        })
                    }, [Q, t, x]),
                    ea = (0, n.useCallback)(e => {
                        let t = { ...i(83879).b.state,
                            password: e.currentTarget.value,
                            alert: void 0
                        };
                        i(83879).b.setState(t)
                    }, []),
                    es = (0, i(682985).K8)(() => i(83879).b.state.needsLoginWithPassword, []);
                (0, n.useEffect)(() => {
                    es && (0, i(149995).cj)({
                        challengeProvider: i(83879).b.state.challengeProvider,
                        challengeProps: Y,
                        challengeToken: null == J ? void 0 : J.tokenState
                    }) && (async () => {
                        i(83879).b.setState({ ...i(83879).b.state,
                            needsLoginWithPassword: !1
                        });
                        let {
                            email: e,
                            password: n
                        } = i(83879).b.state, o = await i(374866).Zr({
                            environment: t,
                            email: e,
                            password: n,
                            redirectURL: m,
                            challengeTokenState: null == J ? void 0 : J.tokenState
                        });
                        o && (null == J || J.forceFetch({
                            environment: t,
                            challengeProps: Y,
                            action: "login_password"
                        })), i(83879).b.setState({ ...i(83879).b.state,
                            alert: o
                        }), i(649296).E({
                            buttonsStore: x,
                            buttonName: "continueWithPasswordButton",
                            buttonState: "idle"
                        })
                    })()
                }, [t, es, x, m, Y, J, q]);
                let el = (0, n.useCallback)(() => {
                        i(649296).E({
                            buttonsStore: x,
                            buttonName: "continueWithPasswordButton",
                            buttonState: "loading"
                        }), i(83879).b.setState({ ...i(83879).b.state,
                            needsLoginWithPassword: !0
                        }), i(680007).default.mark("login_time.password")
                    }, [x]),
                    er = (0, n.useCallback)(async () => {
                        i(649296).E({
                            buttonsStore: x,
                            buttonName: "resetPasswordButton",
                            buttonState: "loading"
                        }), await i(374866).Dh({
                            environment: t
                        }), i(649296).E({
                            buttonsStore: x,
                            buttonName: "resetPasswordButton",
                            buttonState: "idle"
                        })
                    }, [t, x]),
                    ed = (0, n.useCallback)(async () => {
                        let e;
                        if (i(680007).default.mark("login_time.passcode"), i(83879).b.isReverifying()) e = "continueWithReverifyButton";
                        else if (i(83879).b.isExclusiveLoginLinkTemporaryPasscode() || i(83879).b.isTemporaryPasscodeOrMicrosoftVerification()) e = "temporaryPasscodeLoginButton";
                        else throw Error("unknown button name");
                        await F({
                            environment: t,
                            buttonName: e,
                            redirectURL: m,
                            showInvitationVersion: h,
                            buttonsStore: x
                        })
                    }, [t, m, h, x]),
                    ec = (0, n.useCallback)(async () => {
                        i(649296).E({
                            buttonsStore: x,
                            buttonName: "continueWithSAMLButton",
                            buttonState: "loading"
                        }), await i(374866).yt({
                            environment: t
                        }), i(649296).E({
                            buttonsStore: x,
                            buttonName: "continueWithSAMLButton",
                            buttonState: "idle"
                        })
                    }, [t, x]),
                    eu = T || P || L || B || D || U || H || G || K,
                    [eg, em] = (0, n.useState)(eu);
                return ((0, n.useEffect)(() => {
                    if (eu && !eg) {
                        let e = requestAnimationFrame(() => {
                            em(!0)
                        });
                        return () => cancelAnimationFrame(e)
                    }!eu && eg && em(!1)
                }, [eu, eg]), eu) ? (0, o.jsxs)("div", {
                    style: {
                        maxHeight: 5e3 * !!eg,
                        opacity: +!!eg,
                        transition: "all 0.5s ease-in-out"
                    },
                    children: [v ? r : void 0, (() => {
                        if (T) return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("form", {
                                onSubmit: E,
                                children: [(0, o.jsx)(p, {
                                    emailInputRef: S,
                                    email: w,
                                    emailLabelType: u,
                                    autoComplete: g ? "email" : "username",
                                    onSubmit: eo,
                                    buttonsStore: x,
                                    disableCaption: f,
                                    isOnFrontSignupPage: j
                                }), (0, o.jsx)(I, {
                                    isStartupProgram: f
                                }), (0, o.jsx)(i(36481).p, {
                                    type: "password",
                                    autoComplete: "current-password",
                                    style: O,
                                    inputElementAttributes: {
                                        tabIndex: -1,
                                        "aria-hidden": !0
                                    },
                                    onChange: ea
                                }), (0, o.jsx)(i(801510).A, {
                                    style: d.frontButtonStyle,
                                    variant: a.isBannedGoogleSSOUserAgent ? "secondary" : "primary",
                                    onClick: eo,
                                    isLoading: Q,
                                    disabledFeedback: !0,
                                    children: (0, o.jsx)(i(109939).sA, {
                                        id: "loginForm.continueButton.label",
                                        defaultMessage: "Continue"
                                    })
                                })]
                            }), void 0]
                        });
                        if (P) return (0, o.jsxs)("form", {
                            onSubmit: E,
                            children: [(0, o.jsx)(p, {
                                email: w,
                                emailLabelType: u,
                                autoComplete: g ? "email" : "username",
                                onSubmit: el,
                                buttonsStore: x,
                                disableCaption: !0,
                                isOnFrontSignupPage: j
                            }), (0, o.jsx)(I, {
                                isStartupProgram: f
                            }), C ? (0, o.jsxs)("div", {
                                style: y.emailSentCaption,
                                children: [(0, o.jsx)("span", {
                                    style: R,
                                    children: (0, o.jsx)(i(16275).I, {
                                        icon: i(971730).checkmarkSmallIcon,
                                        size: "xs",
                                        colorVariant: "primary"
                                    })
                                }), (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.reverifyPasswordLabel",
                                    defaultMessage: "<emailverifiedtext>Email verified</emailverifiedtext>. You can continue logging in with your password.",
                                    values: {
                                        emailverifiedtext: e => (0, o.jsx)("span", {
                                            style: y.emailVerifiedText,
                                            children: e
                                        })
                                    }
                                })]
                            }) : void 0, (0, o.jsx)(b, {
                                password: k,
                                inputType: "password",
                                placeholderType: "enter_password",
                                onSubmit: el,
                                autoFocus: !0
                            }), (0, o.jsx)(i(801510).A, {
                                id: void 0,
                                variant: "primary",
                                style: d.frontButtonStyle,
                                onClick: el,
                                isLoading: X,
                                disabledFeedback: !0,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.continueWithPasswordButton.label",
                                    defaultMessage: "Continue with password"
                                })
                            })]
                        });
                        if (L) return (0, o.jsx)("div", {
                            style: y.emailSentCaption,
                            children: (0, o.jsx)(i(109939).sA, {
                                id: "loginForm.passwordResetSentMessage",
                                defaultMessage: "Check your inbox for the link to reset your password."
                            })
                        });
                        if (B) return (0, o.jsxs)("form", {
                            onSubmit: E,
                            children: [(0, o.jsx)(p, {
                                email: w,
                                emailLabelType: u,
                                onSubmit: er,
                                buttonsStore: x,
                                disableCaption: !0,
                                isOnFrontSignupPage: j
                            }), (0, o.jsx)(I, {
                                isStartupProgram: f
                            }), (0, o.jsx)(i(801510).A, {
                                id: void 0,
                                style: d.frontButtonStyle,
                                variant: "primary",
                                onClick: er,
                                isLoading: et,
                                disabledFeedback: !0,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.sendResetLink",
                                    defaultMessage: "Send reset link"
                                })
                            })]
                        });
                        if (D) return (0, o.jsxs)("form", {
                            onSubmit: E,
                            children: [(0, o.jsx)(p, {
                                email: w,
                                emailLabelType: u,
                                onSubmit: ed,
                                buttonsStore: x,
                                disableCaption: !0,
                                isOnFrontSignupPage: j
                            }), (0, o.jsx)(I, {
                                isStartupProgram: f
                            }), (0, o.jsx)("div", {
                                style: y.emailSentCaption,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.reverifySentMessage",
                                    defaultMessage: "This account requires email verification. Please check your inbox and paste in the verification code."
                                })
                            }), (0, o.jsx)(b, {
                                password: k,
                                inputType: "text",
                                placeholderType: "reverify",
                                onSubmit: ed,
                                autoFocus: !0,
                                withVerificationLabel: !0
                            }), (0, o.jsx)(i(548436).A, {
                                style: V,
                                size: "lg",
                                onClick: ed,
                                isLoading: ei,
                                disabledFeedback: !0,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.continueWithReverifyButton.label",
                                    defaultMessage: "Verify email"
                                })
                            })]
                        });
                        else if (U) return (0, o.jsxs)("form", {
                            onSubmit: E,
                            children: [(0, o.jsx)(p, {
                                email: w,
                                emailLabelType: u,
                                onSubmit: ed,
                                buttonsStore: x,
                                disableCaption: f,
                                isOnFrontSignupPage: j
                            }), (0, o.jsx)(I, {
                                isStartupProgram: f
                            })]
                        });
                        else if (H) return (0, o.jsxs)("form", {
                            onSubmit: E,
                            children: [h ? void 0 : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(p, {
                                    email: w,
                                    emailLabelType: u,
                                    onSubmit: ed,
                                    buttonsStore: x,
                                    disableCaption: f,
                                    isOnFrontSignupPage: j
                                }), (0, o.jsx)(I, {
                                    isStartupProgram: f
                                })]
                            }), (0, o.jsx)(b, {
                                inputRef: M,
                                password: k,
                                inputType: "text",
                                placeholderType: "enter_code",
                                onSubmit: ed,
                                autoFocus: !0,
                                withVerificationLabel: !0
                            }), (0, o.jsx)("div", {
                                style: c.captionV2,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.temporaryPasscodeInput.label",
                                    defaultMessage: "We sent a code to your inbox"
                                })
                            }), (0, o.jsx)(i(801510).A, {
                                id: void 0,
                                style: d.frontButtonStyle,
                                variant: h ? "quaternary" : "primary",
                                onClick: ed,
                                isLoading: ee,
                                disabledFeedback: !0,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.createNewAccountButton.label",
                                    defaultMessage: "Continue"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)(A, {
                                    handleSendTemporaryPassword: W,
                                    onResendSuccess: () => {
                                        var e;
                                        null == (e = M.current) || e.focus()
                                    }
                                })
                            })]
                        });
                        else if (G) return (0, o.jsx)(_, {
                            email: w,
                            onSubmit: ed,
                            onVerificationCodeChange: ea,
                            handleSendTemporaryPassword: W
                        });
                        else if (K) return (0, o.jsxs)("form", {
                            onSubmit: E,
                            children: [(0, o.jsx)(p, {
                                emailInputRef: S,
                                email: w,
                                emailLabelType: u,
                                autoComplete: g ? "email" : "username",
                                onSubmit: ec,
                                buttonsStore: x,
                                disableCaption: f,
                                isOnFrontSignupPage: j
                            }), (0, o.jsx)(i(801510).A, {
                                style: d.frontButtonStyle,
                                variant: "primary",
                                onClick: ec,
                                isLoading: en,
                                disabledFeedback: !0,
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.continueWithSAMLButton.label",
                                    defaultMessage: "Continue with SSO"
                                })
                            })]
                        })
                    })()]
                }) : null
            }
            let U = {
                marginTop: 20
            };

            function H(e) {
                let {
                    emailLabelType: t,
                    isSignup: s,
                    disableDisclaimer: l,
                    disableLoginLink: r,
                    redirectURL: d,
                    showInvitationVersion: g = !1,
                    themeOverride: m,
                    isPerfmarkTrialSignup: p,
                    isStartupProgram: h,
                    from: f
                } = e, y = (0, n.useRef)(null), b = (0, i(533992).v3)(), x = (0, i(533992).Y0)(), v = (0, i(109939).tz)(), [S, j] = (0, n.useState)(s ? ? !1), w = (0, i(682985).uB)(e.loginPermissionsStore, i(719069).A), A = (0, i(682985).uB)(e.buttonsStore, i(222229).A), k = (0, i(682985).K8)(() => i(83879).b.state.challengeProvider, []), {
                    primary: M
                } = (0, i(343481).u)(k);
                (0, n.useEffect)(() => {
                    i(578942).zi(b, {
                        isBannedGoogleSSOUserAgent: x.isBannedGoogleSSOUserAgent,
                        isSignup: !!S,
                        isPerfmarkTrialSignup: p
                    })
                }, [b, x, S, p]);
                let C = (0, i(483908).yb)(),
                    T = C ? (0, i(219279).ZP)({
                        experimentId: "acquisition_login_signup_links",
                        enableEventTrailLogging: !0,
                        defaultGroup: "control"
                    }) : void 0;
                (0, n.useEffect)(() => {
                    let e = i(18728).A.getState().inviteeEmail,
                        t = i(18728).A.getState().passcodeEmailSent;
                    e && !t && (i(18728).A.setState({ ...i(18728).A.getState(),
                        passcodeEmailSent: !0
                    }), N({
                        environment: b,
                        buttonsStore: A
                    }))
                }, []);
                let P = (0, i(682985).K8)(() => i(83879).b.state.needsSendTemporaryPasswordReason, []),
                    _ = (0, i(483908).Nz)() && s,
                    [L, I] = (0, n.useState)(!_);
                (0, n.useEffect)(() => {
                    P && (0, i(149995).cj)({
                        challengeProvider: i(83879).b.state.challengeProvider,
                        challengeProps: M
                    }) && (i(680007).default.mark("login_time.send_temporary_passcode"), i(83879).b.setState({ ...i(83879).b.state,
                        needsSendTemporaryPasswordReason: void 0
                    }), W({
                        environment: b,
                        disableLoginLink: r,
                        reverify: "reverify" === P,
                        needsSendTemporaryPasswordReason: P,
                        challengeProps: M,
                        buttonsStore: A,
                        isResend: !1,
                        onSendTemporaryPasswordSuccess: () => {
                            i(680007).default.measure("login_time.send_temporary_passcode", {
                                data: {
                                    challenge_provider: i(83879).b.state.challengeProvider,
                                    reason: P
                                }
                            }), i(680007).default.measure("login_time.page_load_to_send_temporary_passcode", {
                                data: {
                                    challenge_provider: i(83879).b.state.challengeProvider,
                                    reason: P
                                }
                            })
                        }
                    }))
                }, [b, P, r, M, A]);
                let E = function(e) {
                        let {
                            hasMobileNativeEmailPasswordSentPromptStyle: t,
                            themeOverride: n,
                            isReimaginedLoginPage: o
                        } = e;
                        return (0, i(960253).I)(() => {
                            let e = n ? ? i(632079).Tj;
                            return {
                                container: {
                                    width: "100%",
                                    maxWidth: o ? 360 : 320,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                formLayout: {
                                    display: "flex",
                                    width: "100%",
                                    flexDirection: "column"
                                },
                                buttonsContainer: o ? {
                                    display: "flex",
                                    gap: 12,
                                    flexWrap: "wrap",
                                    justifyContent: "center"
                                } : {},
                                simplifiedButtonsContainer: {
                                    width: "100%"
                                },
                                disclaimer: {
                                    color: e.text.secondary,
                                    ...o ? {
                                        marginTop: 0
                                    } : {}
                                },
                                emailVerifiedText: {
                                    color: e.text.primary
                                },
                                emailSentCaption: {
                                    fontSize: 14,
                                    textAlign: "center",
                                    marginTop: 8,
                                    marginBottom: 8,
                                    width: "100%",
                                    color: e.text.secondary,
                                    ...t && {
                                        fontSize: 13
                                    }
                                },
                                deEmphasizedSso: {
                                    marginTop: 100,
                                    fontSize: 12,
                                    color: e.text.secondary
                                }
                            }
                        }, [n, t, o])
                    }({
                        hasMobileNativeEmailPasswordSentPromptStyle: e.hasMobileNativeEmailPasswordSentPromptStyle,
                        themeOverride: e.themeOverride,
                        isReimaginedLoginPage: C
                    }),
                    F = (0, i(682985).K8)(() => i(83879).b.isExclusiveLoginLinkTemporaryPasscode(), []),
                    O = (0, n.useCallback)(() => {
                        var e;
                        I(!0), null == (e = y.current) || e.focus(), i(83879).b.setState({ ...i(83879).b.state,
                            loginType: "saml",
                            alert: void 0
                        })
                    }, []),
                    R = (0, n.useCallback)(() => {
                        var e;
                        I(!0), null == (e = y.current) || e.focus(), i(83879).b.setState({ ...i(83879).b.state,
                            loginType: "email",
                            alert: void 0
                        })
                    }, []),
                    V = (0, i(682985).K8)(() => i(83879).b.isSaml(), []),
                    H = i(986939).A.isMobile || x.isMobileBrowser,
                    K = (0, i(682985).K8)(() => i(83879).b.isMicrosoftLogin() || i(83879).b.isMicrosoftVerification(), []),
                    G = (0, i(219279).aH)({
                        gateName: "enable_reorder_login_options"
                    }),
                    q = (0, i(682985).K8)(() => !i(83879).b.state.forceAdminSamlLogin, []),
                    Z = H || !V,
                    $ = H || V;
                i(680007).default.hasMetricBeenMarked("login_time") || i(680007).default.mark("login_time"), i(680007).default.hasMetricBeenMarked("login_time.page_load_to_send_temporary_passcode") || i(680007).default.mark("login_time.page_load_to_send_temporary_passcode");
                let J = !F && !K && !_,
                    Q = C && "test" === (0, i(219279).ZP)({
                        experimentId: "acquisition_email_signup_tile",
                        defaultGroup: "control"
                    }),
                    X = C && S && "treatment" === (0, i(219279).ZP)({
                        experimentId: "acquisition_simplified_signup_google_tile",
                        enableEventTrailLogging: !0,
                        defaultGroup: "control"
                    }),
                    ee = F || K ? void 0 : (0, o.jsxs)("div", {
                        style: X ? E.simplifiedButtonsContainer : E.buttonsContainer,
                        children: [(0, o.jsx)(c, {
                            isSignup: S,
                            showInvitationVersion: g,
                            buttonsStore: A,
                            loginPermissionsStore: w,
                            themeOverride: m,
                            isFullWidth: X
                        }), _ || X ? void 0 : (0, o.jsxs)(o.Fragment, {
                            children: [G ? (0, o.jsxs)(o.Fragment, {
                                children: [q ? (0, o.jsx)(u, {
                                    isSignup: S,
                                    showInvitationVersion: g,
                                    buttonsStore: A,
                                    themeOverride: m
                                }) : void 0, (0, o.jsx)(a, {
                                    showInvitationVersion: g,
                                    themeOverride: m
                                })]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(a, {
                                    showInvitationVersion: g,
                                    themeOverride: m
                                }), q ? (0, o.jsx)(u, {
                                    isSignup: S,
                                    showInvitationVersion: g,
                                    buttonsStore: A,
                                    themeOverride: m
                                }) : void 0]
                            }), (0, o.jsx)(i(365265).s, {
                                isSignup: S,
                                showInvitationVersion: g,
                                buttonsStore: A,
                                themeOverride: m,
                                isMobile: H
                            }), Z ? (0, o.jsx)(i(557143).F, {
                                onClick: O,
                                icon: i(767816).teamspaceIcon,
                                getLabel: () => C ? (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.loginWithSSO.reimaginedLabel",
                                    defaultMessage: "SSO"
                                }) : (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.loginWithSSO.label",
                                    defaultMessage: "Single sign-on (SSO)"
                                }),
                                themeOverride: m
                            }) : void 0, $ ? (0, o.jsx)(i(557143).F, {
                                id: void 0,
                                onClick: R,
                                icon: i(823811).o,
                                getLabel: () => C ? (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.continueWithEmail.reimaginedLabel",
                                    defaultMessage: "Email"
                                }) : (0, o.jsx)(i(109939).sA, {
                                    id: "loginForm.continueWithEmail.label",
                                    defaultMessage: "Continue with email"
                                }),
                                themeOverride: m
                            }) : void 0]
                        })]
                    }),
                    et = L ? (0, o.jsxs)("div", {
                        children: [(0, o.jsx)(D, {
                            emailLabelType: t,
                            isSignup: S,
                            redirectURL: d,
                            showInvitationVersion: g,
                            isStartupProgram: h,
                            styles: E,
                            buttonsStore: A,
                            themeOverride: m,
                            showDivider: J && !Q,
                            emailInputRef: y,
                            isOnFrontSignupPage: "frontLoginPage" === f && S
                        }), (0, o.jsx)(B, {})]
                    }) : void 0,
                    ei = "treatment" === T ? (0, o.jsx)(Y, {
                        isSignup: S,
                        themeOverride: m
                    }) : void 0;
                return (0, o.jsxs)("div", {
                    className: i(828432).iDC,
                    style: { ...E.container,
                        ...e.style
                    },
                    children: [(0, o.jsxs)("div", {
                        style: E.formLayout,
                        children: [Q ? et : ee, Q && J ? (0, o.jsx)("div", {
                            style: z,
                            children: (0, o.jsx)(i(346268).c, {
                                size: 21,
                                label: v.formatMessage({
                                    id: "loginForm.divider.label",
                                    defaultMessage: "or continue with"
                                })
                            })
                        }) : void 0, Q ? ee : et]
                    }), ei, (0, o.jsx)(i(533859).z, {
                        disable: l,
                        style: { ...E.disclaimer,
                            ...!J && U,
                            ...ei && {
                                marginTop: 0
                            }
                        },
                        themeOverride: m
                    })]
                })
            }
            let K = {
                    marginBlockStart: 30,
                    textAlign: "center"
                },
                G = {
                    id: "loginForm.existingUserDeeplink.label",
                    defaultMessage: "Existing user? <loginlink>Log in</loginlink>",
                    description: "Link on the signup page directing existing users to the login page"
                },
                q = {
                    id: "loginForm.newUserDeeplink.label",
                    defaultMessage: "New user? <signuplink>Sign up</signuplink>",
                    description: "Link on the login page directing new users to the signup page"
                };

            function Y(e) {
                let {
                    isSignup: t,
                    themeOverride: a
                } = e, s = (0, i(960253).I)(() => {
                    let e = a ? ? i(632079).Tj;
                    return {
                        container: { ...K,
                            color: e.text.secondary
                        }
                    }
                }, [a]), l = t ? i(25408).GJ.login : i(25408).GJ.signup, r = new URLSearchParams(window.location.search), d = {};
                for (let e of ["redirectURL", "from", "pathname"]) {
                    let t = r.get(e);
                    t && (d[e] = t)
                }
                let c = Object.keys(d).length > 0 ? i(758654).O$(l, d) : l,
                    u = (0, n.useCallback)(() => {
                        i(578942).Lk(t ? "signup" : "login")
                    }, [t]);
                return (0, o.jsx)("div", {
                    style: s.container,
                    children: (0, o.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        children: (0, o.jsx)(i(109939).sA, { ...t ? G : q,
                            values: {
                                [t ? "loginlink" : "signuplink"]: e => (0, o.jsx)(i(428217).V, {
                                    href: c,
                                    color: s.container.color,
                                    hoverColor: "blue",
                                    onClick: u,
                                    children: e
                                })
                            }
                        })
                    })
                })
            }

            function Z(e) {
                let {
                    isReimaginedLoginPage: t
                } = e, n = (0, i(483908).OD)();
                return (0, i(960253).I)(() => ({
                    settingsLabel: {
                        color: i(632079).Tj.text.secondary,
                        fontWeight: i(699422).Wy.medium,
                        ...t && {
                            marginBottom: 8
                        }
                    },
                    input: {
                        marginTop: 4,
                        marginBottom: 8,
                        boxShadow: `${i(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                        borderRadius: 6,
                        ...i(986939).A.isMobile && {
                            lineHeight: "30px"
                        },
                        ...n && {
                            height: 40,
                            borderRadius: 10
                        },
                        ...t && {
                            height: 40,
                            borderRadius: 8,
                            paddingInline: 16,
                            paddingBlock: 10,
                            boxShadow: i(632079).Tj.shadow.outline.sm
                        }
                    },
                    captionV2: {
                        color: i(632079).Tj.text.tertiary,
                        fontSize: 12,
                        lineHeight: "16px",
                        marginTop: 6,
                        marginBottom: 18,
                        textAlign: "start",
                        display: "flex"
                    }
                }), [n, t])
            }
            let $ = n.memo(function(e) {
                let t = (0, i(682985).K8)(() => i(83879).b.state.challengeProvider, []);
                return (0, o.jsx)(i(837572).A, {
                    initTimeoutMs: 3e3,
                    provider: t,
                    sitekey: i(986939).A.hcaptcha.sitekey,
                    children: (0, o.jsx)(H, { ...e
                    })
                })
            }, i(795676).A)
        },
        893167: (e, t, i) => {
            i.r(t), i.d(t, {
                appleTintableIcon: () => o,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.67 0.99 14.65 18.01",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M13.294 5.348q.192 0 .592.045.41.036.927.2.52.164 1.055.528.537.363.992 1.018-.046.028-.346.246a5 5 0 0 0-.664.637 3.9 3.9 0 0 0-.655 1.046q-.272.627-.273 1.5 0 1.001.346 1.692.355.692.819 1.119.473.427.837.628.373.19.4.2-.01.036-.137.409-.127.364-.4.946a8.4 8.4 0 0 1-.691 1.2q-.39.555-.81 1.065-.409.51-.9.827a1.9 1.9 0 0 1-1.092.328 2.5 2.5 0 0 1-.79-.11 5 5 0 0 1-.628-.254 5 5 0 0 0-.646-.246 3 3 0 0 0-.883-.109q-.69 0-1.155.182-.454.192-.864.373a2.4 2.4 0 0 1-.964.182q-.846 0-1.491-.673a16 16 0 0 1-1.31-1.61q-.519-.745-.946-1.719a12 12 0 0 1-.682-2.065 9.6 9.6 0 0 1-.255-2.183q0-1.746.664-2.937.665-1.192 1.7-1.801 1.037-.61 2.156-.61.592 0 1.11.191.528.192.982.391.456.192.828.191.355 0 .837-.2.482-.21 1.064-.418a3.8 3.8 0 0 1 1.273-.21m-.636-1.474q-.455.555-1.146.919-.683.364-1.292.364-.128 0-.245-.028l-.028-.127a2 2 0 0 1-.009-.2q0-.691.3-1.346t.692-1.092q.482-.573 1.218-.955.747-.38 1.428-.409.028.154.028.355 0 .7-.264 1.364a4.3 4.3 0 0 1-.682 1.155"
                    })
                },
                o = (0, i(104509).wt)("appleTintable", n, "tintable")
        }
    }
]);