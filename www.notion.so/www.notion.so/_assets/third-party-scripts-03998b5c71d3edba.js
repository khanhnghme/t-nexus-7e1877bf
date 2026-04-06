"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [1978], {
        267032: (e, t, a) => {
            a.r(t), a.d(t, {
                InjectThirdPartyScripts: () => r,
                useThirdPartyScripts: () => o
            });
            var i = a(296540);
            a(944114);

            function n() {
                var e, t, a;
                if (!window._cio)
                    for (a = 0, window._cio = [], e = function(e) {
                            return function() {
                                window._cio.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }, t = ["load", "identify", "sidentify", "track", "page", "on", "off", "reset"]; a < t.length; a++) window._cio[t[a]] = e(t[a])
            }
            let s = new(a(815048)).O2("sentry", a(747935).q);

            function o() {
                let {
                    navigate: e
                } = (0, i.useContext)(a(44894).E), t = (0, a(533992).v3)(), o = (0, a(723240).r)(), r = (0, a(855361).S)({
                    environment: t,
                    spaceId: o
                }) ? ? 0, l = (0, a(533992).Y0)(), {
                    currentUser: c
                } = t, {
                    siteGoogleAnalyticsId: u,
                    requestedOnPublicDomain: d
                } = (0, a(682985).K8)(() => {
                    if (!(0, a(59406).w)(t)) return {
                        siteGoogleAnalyticsId: void 0,
                        requestedOnPublicDomain: !1
                    };
                    let {
                        publicPageData: e
                    } = a(686494).A.state, {
                        siteGoogleAnalyticsId: i
                    } = e || {};
                    return i && i.match(/[0-9A-Z]+/) ? {
                        siteGoogleAnalyticsId: `G-${i}`,
                        requestedOnPublicDomain: !0
                    } : {
                        siteGoogleAnalyticsId: void 0,
                        requestedOnPublicDomain: !0
                    }
                }, [t]);
                ! function({
                    isEnabled: e,
                    cookieService: t,
                    siteGoogleAnalyticsId: n
                }) {
                    (0, i.useEffect)(() => {
                        (async function() {
                            return !(!e || !n || !await a(640666).nQ({
                                service: "google_tag_manager",
                                cookieService: t
                            }) || "dataLayer" in window)
                        })().then(e => {
                            if (e) return (0, a(197603).Ay)(`https://www.googletagmanager.com/gtag/js?id=${n}`, {
                                id: "notion-site-google-analytics"
                            }).catch(e => {
                                console.error("GA script failed to load", e)
                            }).then(() => {
                                if (window.dataLayer) {
                                    function e() {
                                        window.dataLayer.push(arguments)
                                    }
                                    window.dataLayer = window.dataLayer || [], e("js", new Date), e("config", n)
                                }
                            })
                        })
                    }, [e, t, n])
                }({
                    isEnabled: !!d,
                    siteGoogleAnalyticsId: u,
                    cookieService: t.cookieService
                }),
                function({
                    isEnabled: e,
                    isLoggedIn: t,
                    userId: s,
                    onMessageOpened: o,
                    onMessageDismissed: r,
                    onMessageError: l,
                    onMessageAction: c,
                    cookieService: u
                }) {
                    (0, i.useEffect)(() => {
                        (async function() {
                            return !(!e || !await a(640666).nQ({
                                service: "customer_io",
                                cookieService: u
                            }) || "cio-tracker" in window)
                        })().then(e => {
                            if (e) return n(), (0, a(197603).Ay)("https://assets.customer.io/assets/track.js", {
                                id: "cio-tracker",
                                attributes: {
                                    "data-site-id": "a2a8e2144b2bbbb4074a",
                                    "data-use-array-params": "true",
                                    "data-in-app-org-id": "901895b8-45c7-40c8-ba91-626cfc6739b3",
                                    "data-use-in-app": "true",
                                    "data-auto-track-page": "false"
                                }
                            }).catch(e => {
                                console.warn("Customer.io failed to load", e)
                            })
                        })
                    }, [e, u]);
                    let d = (0, a(668745).ZC)(s);
                    (0, i.useEffect)(() => {
                        if (d !== s) {
                            if (n(), !t || void 0 === s) return void window._cio.reset();
                            window._cio.identify({
                                id: (0, a(4962).Xw)(s)
                            }), o && window._cio.on("in-app:message-opened", o), r && window._cio.on("in-app:message-dismissed", r), c && window._cio.on("in-app:message-action", c), window._cio.on("in-app:message-error", l)
                        }
                    }, [t, s, d, o, r, l, c])
                }({
                    isEnabled: (0, a(682985).K8)(() => c.isLoggedIn(), [c]),
                    isLoggedIn: c.isLoggedIn(),
                    userId: c.id,
                    onMessageOpened: e => {
                        a(763927).A.state.suppressReason ? a(618731).pO(t, {
                            message_id: e.detail.messageId,
                            reason: a(763927).A.state.suppressReason
                        }) : (a(763927).A.setState({ ...a(763927).A.state,
                            isVisible: !0
                        }), a(618731).v4(t, {
                            message_id: e.detail.messageId
                        }))
                    },
                    onMessageDismissed: e => {
                        a(763927).A.setState({ ...a(763927).A.state,
                            isVisible: !1
                        }), a(618731).gQ(t, {
                            message_id: e.detail.messageId
                        })
                    },
                    onMessageError: e => {
                        a(618731).gr(t, {
                            message_id: e.detail.messageId
                        })
                    },
                    onMessageAction: a => {
                        a.detail.actionValue.startsWith("relative_url=") && e({
                            environment: t,
                            url: a.detail.actionValue.split("relative_url=")[1]
                        }), a.detail.message.dismiss()
                    },
                    cookieService: t.cookieService
                }), (0, a(707964).LW)({ ...(0, a(682985).K8)(() => {
                        var e, i;
                        let n = t.RouterStore.state.route,
                            s = "settingsConsoleOrganization" === n.name && (null == (e = n.tabRoute) ? void 0 : e.name) === "onboarding",
                            o = "settingsConsoleOrganization" === n.name,
                            c = !s && (!!o || a(218744).default.checkGate({
                                gateName: "sprig"
                            })),
                            u = a(453997).default.state.isSprigEnabled && a(154431).A.state.permission.performance && c && l.isDesktop && !(0, a(59406).w)(t),
                            d = a(728372).AppStoreCurrentUserSettingsStore.state,
                            g = a(728372).AppStoreSidebarSpaceStore.state,
                            p = a(728372).AppStoreCurrentUserStore.state,
                            f = null == p ? void 0 : p.getEmail(),
                            _ = d ? (0, a(996903).i)(d) : null,
                            m = !!(null == g ? void 0 : g.canAdmin()),
                            y = null == g || null == (i = g.getModel()) ? void 0 : i.getDaysSinceCreated();
                        return {
                            isEnabled: u,
                            userEmail: f,
                            userDaysSinceSignup: _ ? ? 0,
                            userDomainType: (0, a(904434).FX)(),
                            daysSinceSpaceCreated: y,
                            isSpaceAdmin: m,
                            spaceMemberCount: r
                        }
                    }, [l, r, t]),
                    isLoggedIn: c.isLoggedIn(),
                    userId: c.id,
                    spaceId: o,
                    sprigConfig: a(986939).A.sprig
                }),
                function(e) {
                    var t;
                    let {
                        userId: n,
                        spaceId: o,
                        ...r
                    } = e, l = (0, a(815048).fJ)(s);
                    (0, i.useEffect)(() => {
                        if (!l.value) return;
                        let {
                            Sentry: e,
                            sentryInitializeFull: t
                        } = l.value;
                        t({
                            Sentry: { ...e,
                                isFullSDK: !0
                            },
                            config: a(986939).A,
                            ...r
                        })
                    }, [l.value, r]);
                    let c = null == (t = l.value) ? void 0 : t.Sentry;
                    (0, i.useEffect)(() => {
                        c && c.setUser(n ? {
                            id: n
                        } : null)
                    }, [c, n]), (0, i.useEffect)(() => {
                        c && c.setTag("space.id", o)
                    }, [c, o])
                }({
                    userId: c.id,
                    spaceId: o,
                    getErrorsSampleRate: (0, i.useCallback)(() => a(218744).default.getConfigKey("sentry", "errorsSampleRate"), []),
                    getTracesSampleRate: (0, i.useCallback)(() => a(218744).default.getConfigKey("sentry", "tracesSampleRate-v0"), []),
                    getReplaysSessionSampleRate: (0, i.useCallback)(() => a(218744).default.getConfigKey("sentry", "replaysSessionSampleRate-v0"), []),
                    getReplaysOnErrorSampleRate: (0, i.useCallback)(() => a(218744).default.getConfigKey("sentry", "replaysOnErrorSampleRate-v0"), []),
                    getIsProfilingEnabled: (0, i.useCallback)(() => "sentry" === (0, a(100946).getProfilingToolForSession)(), []),
                    getProfilesSampleRate: (0, i.useCallback)(() => a(218744).default.getConfigKey("sentry", "profilesSampleRate"), []),
                    getSentryMetricSamplingOverrides: (0, i.useCallback)(() => a(218744).default.getConfigKey("sentry", "sentryMetricSamplingOverrides"), [])
                })
            }

            function r() {
                return o(), null
            }
        },
        618731: (e, t, a) => {
            function i(e, t) {
                let {
                    name: i,
                    ...n
                } = t;
                (0, a(195857).DO_NOT_USE_trackLegacy)("click_link", { ...n,
                    click_name: i
                })
            }

            function n(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("scroll", t)
            }

            function s(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("customer_io_in_app_callout_show", t)
            }

            function o(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("customer_io_in_app_callout_suppress", t)
            }

            function r(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("customer_io_in_app_callout_dismiss", t)
            }

            function l(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "customer_io_in_app_callout_error",
                        eventProperties: t
                    }
                })
            }
            a.d(t, {
                _C: () => i,
                gQ: () => r,
                gr: () => l,
                jr: () => n,
                pO: () => o,
                v4: () => s
            })
        },
        763927: (e, t, a) => {
            a.d(t, {
                A: () => r,
                e: () => s
            });
            var i, n = () => a(546605);
            let s = ((i = {}).IN_APP_CALLOUT_CONFLICT = "in-app callout conflict", i.DARK_MODE = "not shown in dark mode", i);
            class o extends n().Store {
                getInitialState() {
                    return {
                        isVisible: !1,
                        suppressReason: void 0
                    }
                }
            }
            let r = new o
        },
        855361: (e, t, a) => {
            a.d(t, {
                S: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e;
                return (0, a(682985).K8)(() => {
                    if (i) return (0, a(616579).j)({
                        environment: t,
                        spaceId: i
                    })
                }, [t, i])
            }
        },
        996903: (e, t, a) => {
            a.d(t, {
                i: () => i
            });

            function i(e) {
                let t = e.getSettings(),
                    i = null == t ? void 0 : t.signup_time;
                return i ? (0, a(362008).Mn)(i) : null
            }
        }
    }
]);