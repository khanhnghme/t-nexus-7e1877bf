"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [72317], {
        66833: (e, t, n) => {
            n.d(t, {
                E: () => a
            });

            function a({
                sidebarSpaceStore: e,
                sidebarSpaceViewStore: t
            }) {
                let r = (0, n(533992).v3)(),
                    {
                        isEligibleForGuestMembershipRequest: i,
                        isEligibleForGuestMembershipRequestStatus: s
                    } = (0, n(454122).X)({
                        sidebarSpaceStore: e,
                        environment: r
                    }),
                    l = (0, n(682985).K8)(() => {
                        var t;
                        let a = null == (t = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.guest_sidebar_membership_request_popup_dismissed;
                        return !!e && !!(null == a ? void 0 : a.includes(e.id))
                    }, [e]),
                    o = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getGuestExperience()) === "guest_with_private_pages"
                    }, []),
                    u = (0, n(682985).K8)(() => {
                        var a;
                        return !!(!(0, n(916804).I)(e) || (0, n(494144).o)(t)) || null != (a = n(686494).A.state.publicPageData) && !!a.isDLSViewer || !!l || (0, n(505941).y)(r)
                    }, [l, r, t, e]),
                    [{
                        value: d
                    }] = (0, n(417066).P)({
                        environment: r,
                        skipServerFetch: u
                    }),
                    p = !!(null == d ? void 0 : d.hasJoinableSpaces);
                return (0, n(682985).K8)(() => {
                    if ("pending" === s || u) return {
                        state: null
                    };
                    let e = n(986939).A.isMobile ? "on" === n(218744).default.getEligibleGroup({
                        experimentId: "guest_upsell_banner_mobile_experiment",
                        defaultGroup: "control"
                    }) ? "gray" : "control" : n(218744).default.getEligibleGroup({
                        experimentId: "guest_upsell_banner_experiment",
                        defaultGroup: "control"
                    });
                    return {
                        state: {
                            membershipRequest: function({
                                isGuestWithPrivatePages: e,
                                isEligibleForGuestMembershipRequest: t
                            }) {
                                return e ? "pending_request" : t ? "can_request" : "cannot_request"
                            }({
                                isGuestWithPrivatePages: o,
                                isEligibleForGuestMembershipRequest: !!i
                            }),
                            hasJoinableSpaces: p,
                            experimentVariant: e
                        }
                    }
                }, [u, i, p, o, s])
            }
        },
        159899: (e, t, n) => {
            n.d(t, {
                DH: () => r
            });
            let a = ["trial_from_perf_marketing", "onboarding_reverse_trial", "mp_reverse_trial", "feature_upsell_reverse_trial", "admin_trial"];

            function r(e) {
                return a.includes(e) || n(994234).FN.includes(e)
            }[...a]
        },
        187041: (e, t, n) => {
            n.d(t, {
                g: () => a
            });

            function a({
                spaceId: e
            }) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => {
                    if (e) return n(185995).default.getData(t, {
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        190640: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => s
            });
            var a = n(296540);
            let r = "PasskeyDomainMigrationBanner",
                i = (0, n(109939).YK)({
                    blockingModalMessage: {
                        id: "passkeyMigration.blockingModal.message",
                        defaultMessage: "Your passkey needs to be updated. Since your passkey is your only sign-in method, please re-register it or add an alternative sign-in method to keep access to your account."
                    },
                    blockingModalUpdateButton: {
                        id: "passkeyMigration.blockingModal.updateButton",
                        defaultMessage: "Update sign-in methods"
                    }
                });

            function s() {
                let e, t, s, l, o, u, d, p, g, c, b, S, f;
                return (0, a.useEffect)(() => {
                    if (n(986939).A.isAdminMode) return n(474329).HQ({
                        bannerStore: n(465361).A,
                        id: "AdminModeBanner",
                        contentKey: "admin_mode",
                        styleKey: n(909595).q.Blue,
                        prepend: !0
                    }), () => {
                        n(474329).zA({
                            bannerStore: n(465361).A,
                            id: "AdminModeBanner"
                        })
                    }
                }, []), e = (0, n(533992).v3)(), t = (0, n(682985).K8)(() => !(!(0, n(470641).g)() || e.currentUser.isLoggedIn() || (0, n(875439).shouldShowLoggedOutPublicSharingSidebar)(e, !0)), [e]), (0, a.useEffect)(() => {
                    let e = n(986939).A.isMobile ? n(465361).A : n(819356).p,
                        a = e.getState().banners.some(e => "LoggedOutAppBanner" === e.id);
                    t ? n(474329).HQ({
                        bannerStore: e,
                        id: "LoggedOutAppBanner",
                        contentKey: "logged_out_app_banner",
                        styleKey: n(909595).q.Yellow
                    }) : a && n(474329).zA({
                        bannerStore: e,
                        id: "LoggedOutAppBanner"
                    })
                }, [t]), (0, n(407879).i)(), (0, n(847869).G)(), (0, n(363811).G)(), (0, n(508854).A)(), s = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = (0, n(328765).S)()) ? void 0 : e.getFreezeSettings()
                }, []), l = (0, n(671215).p)(s), (0, a.useEffect)(() => {
                    ("active" === l || "warning" === l) && n(474329).HQ({
                        bannerStore: n(465361).A,
                        id: "SpaceFreezeBanner",
                        contentKey: "space_freeze",
                        styleKey: n(909595).q.Red
                    })
                }, [l]), (0, n(128501).K)(), o = (0, n(682985).O$)(n(728372).AppStoreMainEditorCurrentBlockStore), u = (0, n(533992).v3)(), d = (0, n(682985).K8)(() => !o || (0, n(891711).PT)(o), [o]), p = (0, n(682985).K8)(() => {
                    if (u.currentUser.isLoggedIn() || !(0, n(59406).w)(u)) return !1;
                    try {
                        let e = new URLSearchParams(window.location.search).get("origin");
                        if ("screenshot-generation" === e) return !1
                    } catch (e) {}
                    return !d && !!n(218744).default.checkGate({
                        gateName: "notion_sites_banner"
                    }) && "dismissed" !== n(652595).P.state
                }, [u, d]), (0, a.useEffect)(() => {
                    let e = n(986939).A.isMobile ? n(465361).A : n(652595).W,
                        t = e.getState().banners.some(e => "PublicSiteBanner" === e.id);
                    p ? n(474329).HQ({
                        bannerStore: e,
                        id: "PublicSiteBanner",
                        contentKey: "public_site_banner",
                        styleKey: n(909595).q.LightGray
                    }) : t && n(474329).zA({
                        bannerStore: e,
                        id: "PublicSiteBanner"
                    })
                }, [p]), g = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore), c = (0, n(682985).O$)(n(330870).S), b = (0, n(682985).K8)(() => n(447036).m3(), []), S = (0, n(682985).K8)(() => {
                    var e;
                    if (!(0, n(784331).un)() || (0, n(728372).isTransitioningSpaces)(n(728372).default.state.spaceTransitionStatus)) return !1;
                    let t = null == (e = n(691207).U.getState()) ? void 0 : e.dismissedExpiresAt,
                        a = Date.now();
                    if (t && t > a) return !1;
                    let r = null == c ? void 0 : c.getSpaceStore();
                    return !!r && (null == g ? void 0 : g.getSpaceId()) !== r.id
                }, [g, c]), f = (0, n(682985).K8)(() => (b ? n(731810).A : n(465361).A).getState().banners.some(e => "ExternalPagesBanner" === e.id), [b]), (0, a.useEffect)(() => {
                    let e = b ? n(731810).A : n(465361).A,
                        t = b ? n(465361).A : n(731810).A;
                    S && !n(986939).A.isMobile ? (n(474329).HQ({
                        bannerStore: e,
                        id: "ExternalPagesBanner",
                        contentKey: "external_pages_banner",
                        styleKey: n(909595).q.LightBlue
                    }), t.getState().banners.some(e => "ExternalPagesBanner" === e.id) && n(474329).zA({
                        bannerStore: t,
                        id: "ExternalPagesBanner"
                    })) : f && n(474329).zA({
                        bannerStore: e,
                        id: "ExternalPagesBanner"
                    })
                }, [S, f, b]), ! function() {
                    let e = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore),
                        t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                        {
                            state: r
                        } = (0, n(66833).E)({
                            sidebarSpaceStore: e,
                            sidebarSpaceViewStore: t
                        }),
                        i = r && ("yellow" === r.experimentVariant || "gray" === r.experimentVariant),
                        s = (null == r ? void 0 : r.experimentVariant) === "yellow" ? n(909595).q.Yellow : n(909595).q.LightGray;
                    (0, a.useEffect)(() => {
                        let e = n(474329).Cn(n(465361).A, "GuestUpsellBanner");
                        i ? (e && n(474329).zA({
                            bannerStore: n(465361).A,
                            id: "GuestUpsellBanner"
                        }), n(474329).HQ({
                            bannerStore: n(465361).A,
                            id: "GuestUpsellBanner",
                            contentKey: "guest_upsell_banner",
                            styleKey: s
                        })) : e && n(474329).zA({
                            bannerStore: n(465361).A,
                            id: "GuestUpsellBanner"
                        })
                    }, [i, s])
                }(), ! function() {
                    let e = (0, n(533992).v3)(),
                        t = (0, n(368891).g)(),
                        i = (0, n(83208).X)("passkey_domain_migration"),
                        s = (0, n(682985).K8)(() => {
                            var e;
                            let n = null == t || null == (e = t.getSettings()) ? void 0 : e.passkey_migration_banner_dismissed_at;
                            return !!n && Date.now() - n < 6048e5
                        }, [t]),
                        [l, o] = a.useState(!1);
                    a.useEffect(() => {
                        if (!i || s) return;
                        let t = !1;
                        return (async () => {
                            let n = await e.api.callApi({
                                eventName: "getPasskeyMigrationStatus",
                                environment: e,
                                data: {}
                            });
                            !t && "success" === n.type && n.data.needsPasskeyMigration && o(!0)
                        })(), () => {
                            t = !0
                        }
                    }, [e, i, s]);
                    let u = i && l && !s;
                    a.useEffect(() => (u ? (n(474329).HQ({
                        bannerStore: n(465361).A,
                        id: r,
                        contentKey: "passkey_domain_migration",
                        styleKey: n(909595).q.Blue
                    }), (0, n(104310).u)({
                        event: {
                            eventName: "passkey_migration_banner_displayed",
                            eventProperties: {}
                        }
                    })) : n(474329).zA({
                        bannerStore: n(465361).A,
                        id: r
                    }), () => {
                        n(474329).zA({
                            bannerStore: n(465361).A,
                            id: r
                        })
                    }), [u])
                }(), ! function() {
                    let e = (0, n(533992).v3)(),
                        t = (0, n(83208).X)("passkey_domain_migration"),
                        [r, s] = a.useState(!1);
                    a.useEffect(() => {
                        if (!t || r) return;
                        let a = !1;
                        return (async () => {
                            let t = await e.api.callApi({
                                eventName: "getPasskeyMigrationStatus",
                                environment: e,
                                data: {}
                            });
                            !a && (s(!0), "success" === t.type && t.data.needsPasskeyMigration && t.data.isPasskeyOnlyUser && n(647095).ui({
                                message: n(962299).A.formatMessage(i.blockingModalMessage),
                                showCancel: !0,
                                keepFocus: !1,
                                items: [{
                                    label: n(962299).A.formatMessage(i.blockingModalUpdateButton),
                                    onAccept: () => {
                                        n(599754).Ow({
                                            currentPage: "profile"
                                        })
                                    }
                                }]
                            }))
                        })(), () => {
                            a = !0
                        }
                    }, [e, t, r])
                }(), null
            }
            n(898992), n(737550), n(814603), n(147566), n(198721)
        },
        236946: (e, t, n) => {
            n.d(t, {
                p: () => a
            });

            function a() {
                let e = (0, n(723240).r)(),
                    t = (0, n(187041).g)({
                        spaceId: e
                    });
                if (t) return (0, n(875472).e8)(t, "trial")
            }
        },
        454122: (e, t, n) => {
            n.d(t, {
                X: () => a
            });

            function a({
                sidebarSpaceStore: e,
                environment: t
            }) {
                let [{
                    value: r,
                    status: i
                }] = (0, n(97668).Yb)(async () => {
                    if (!e || !(0, n(881016).d)()) return !1;
                    let a = await t.api.callApi({
                        eventName: "isEligibleForGuestMembershipRequest",
                        environment: t,
                        data: {
                            spaceId: e.id
                        }
                    });
                    return "failed" !== a.type && a.data.isEligible
                }, [e, t]);
                return {
                    isEligibleForGuestMembershipRequest: r,
                    isEligibleForGuestMembershipRequestStatus: i
                }
            }
        }
    }
]);