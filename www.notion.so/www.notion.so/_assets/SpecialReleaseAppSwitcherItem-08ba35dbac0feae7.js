"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [38096], {
        112341: (e, t, r) => {
            r.d(t, {
                P: () => i
            }), r(296540);
            var n = r(474848);
            let a = {
                wrapper: {
                    position: "relative",
                    display: "inline-flex"
                },
                badge: {
                    position: "absolute",
                    top: 1,
                    insetInlineEnd: -2,
                    border: `1px solid ${r(632079).Tj.background.secondary}`,
                    borderRadius: "50%",
                    pointerEvents: "none"
                },
                dot: {
                    color: r(632079).Tj.blue.icon.accentPrimary
                }
            };

            function i({
                label: e,
                icon: t,
                showBadge: l = !1,
                highlighted: o = !1,
                style: u,
                hoveredStyle: s,
                pressedStyle: d,
                "aria-label": c,
                ...f
            }) {
                return (0, n.jsxs)("div", {
                    style: a.wrapper,
                    children: [(0, n.jsx)(r(988022).p, {
                        iconLeading: t,
                        size: "md",
                        colorVariant: o ? "accentPrimary" : "tertiary",
                        colorPalette: o ? "blue" : "gray",
                        "aria-label": c ? ? e,
                        ...f,
                        children: e
                    }), l ? (0, n.jsx)(r(210882).m, {
                        color: a.dot.color,
                        size: 8,
                        style: a.badge
                    }) : null]
                })
            }
        },
        208326: (e, t, r) => {
            r.d(t, {
                o: () => i
            });
            var n = r(296540),
                a = r(474848);
            let i = (0, n.forwardRef)(function({
                icon: e,
                label: t,
                tooltipDisabled: n,
                onClick: i,
                onMouseEnter: l
            }, o) {
                let u = n => (0, a.jsx)(r(374533).A, { ...n,
                    size: "md",
                    icon: e,
                    ariaLabel: t,
                    colorVariant: "secondary",
                    onClick: i,
                    ref: o,
                    onMouseEnter: e => {
                        var t;
                        null == l || l(e), null == n || null == (t = n.onMouseEnter) || t.call(n, e)
                    }
                });
                return n ? u() : (0, a.jsx)(r(51831).m, {
                    content: () => t,
                    placement: "top",
                    children: e => u(e)
                })
            })
        },
        237211: (e, t, r) => {
            r.d(t, {
                W: () => a
            }), r(898992), r(354520);
            var n = r(296540);

            function a(e) {
                let t, a, i, l = (0, r(533992).v3)(),
                    o = (0, r(723240).r)(),
                    [u, s] = (0, n.useState)([]),
                    d = (t = (0, n.useRef)(e), a = e.join(","), i = (0, n.useRef)(a), a !== i.current && (t.current = e, i.current = a), t.current);
                return (0, n.useEffect)(() => {
                    o && Promise.all([r(875472).Vi, (0, r(975162).lX)(d, 10, e => (0, r(413552).Cy)(l, {
                        spaceId: o,
                        offerCampaign: e
                    }))]).then(([, e]) => s(e.filter(r(722371).O9)))
                }, [l, o, d]), u
            }
        },
        260714: (e, t, r) => {
            r.d(t, {
                b: () => i
            }), r(898992), r(354520);
            var n = r(296540);
            let a = [...r(994234).iE, ...r(994234).Fh];

            function i() {
                let e = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    t = (0, r(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    i = (0, r(237211).W)(a),
                    l = (0, n.useMemo)(() => i.filter(e => "trial" === e.type), [i]);
                return (0, r(682985).K8)(() => {
                    var n, a;
                    if (void 0 === t || void 0 === e || !(null != (n = r(728372).AppStoreCurrentUserSettingsStore.state) && n.isReady())) return;
                    let i = (0, r(993096).Mb)({
                        billingData: t
                    });
                    if ((null == i || null == (a = i.currentState) ? void 0 : a.featureSet) === void 0) return;
                    let o = (null == i ? void 0 : i.currentState.featureSet) === "advanced",
                        u = void 0 !== (0, r(226309).a9)(t),
                        s = void 0 !== t.subscription && (0, r(192159).N8)(t);
                    return {
                        product: (0, r(192159).AI)(t),
                        is_admin: u ? "true" : "false",
                        is_sales_assisted: s ? "true" : "false",
                        eligible_for_trial: l.length > 0 ? "true" : "false",
                        has_advanced_ai_features: o ? "true" : "false"
                    }
                }, [t, l, e])
            }
        },
        413552: (e, t, r) => {
            async function n(e, t) {
                var n;
                let {
                    offerCampaign: a,
                    offerCode: i,
                    ...l
                } = t;
                if (a && (!l.spaceId || null != (n = (0, r(328765).S)()) && n.canAdmin())) {
                    if (l.spaceId) return r(617995).I.awaitData(e, {
                        spaceId: l.spaceId,
                        offerCampaign: a,
                        offerCode: i,
                        deviceId: l.deviceId
                    });
                    if (l.deviceId) {
                        let t = await e.api.callApi({
                            eventName: "getCustomerOffer",
                            environment: e,
                            data: { ...l,
                                offerCampaign: a,
                                offerCode: i
                            }
                        });
                        if ("failed" === t.type) return;
                        if ("offer" in t.data && t.data.offer) return t.data.offer
                    }
                }
            }
            r.d(t, {
                Cy: () => n,
                L6: () => l,
                VY: () => a
            }), r(898992), r(737550);
            let a = (0, r(381453).sg)(i, 1e3, {
                leading: !0,
                trailing: !1
            });
            async function i(e) {
                let {
                    environment: t,
                    spaceId: n,
                    offerCampaign: a,
                    entrypoint: i
                } = e, l = await t.api.callApi({
                    eventName: "applyCustomerOffer",
                    environment: t,
                    data: {
                        spaceId: n,
                        offerCampaign: a,
                        entrypoint: i ? ? "unknown"
                    }
                });
                return "failed" === l.type ? void r(647095).Qg(l) : (await r(185995).default.resetData(t, {
                    spaceId: n
                }), l)
            }
            async function l(e) {
                let {
                    environment: t,
                    spaceId: r,
                    offerCampaign: a,
                    deviceId: i
                } = e;
                return void 0 !== await n(t, {
                    spaceId: r,
                    offerCampaign: a,
                    deviceId: i
                })
            }
        },
        448988: (e, t, r) => {
            r.d(t, {
                Wx: () => i,
                fM: () => n,
                sM: () => a
            });
            let n = new(r(815048)).O2("framer-motion", async () => await Promise.all([r.e(49806), r.e(79974), r.e(45414), r.e(37043)]).then(r.bind(r, 301716)));

            function a(e) {
                return e.useAnimation()
            }

            function i(e, ...t) {
                return e.useInView(...t)
            }
        },
        767998: (e, t, r) => {
            r.r(t), r.d(t, {
                SpecialReleaseAppSwitcherItem: () => f
            }), r(898992), r(737550);
            var n = r(296540);
            let a = (0, r(815048)._h)(new(r(815048)).O2("CustomAgentLaunchButtonContent", async () => await Promise.all([r.e(75134), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(18965), r.e(57688), r.e(54951), r.e(17250), r.e(26997), r.e(73259), r.e(93430), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(29663), r.e(28482), r.e(14369), r.e(74145), r.e(56308), r.e(75136), r.e(98175), r.e(58360), r.e(18416), r.e(81603), r.e(38814), r.e(63821), r.e(34157), r.e(71941), r.e(82815)]).then(r.bind(r, 688349))), e => e.CustomAgentLaunchButtonContent),
                i = (0, r(109939).YK)({
                    customAgentLaunch: {
                        id: "specialRelease.customAgentLaunch.title",
                        defaultMessage: "Custom Agents are here!"
                    }
                }),
                l = {
                    custom_agent_launch: a
                },
                o = {
                    custom_agent_launch: i.customAgentLaunch
                },
                u = {};
            var s = r(474848);
            let d = new(r(510969)).A,
                c = (0, r(109939).YK)({
                    giftBoxCaption: {
                        id: "sidebar.appSwitcher.giftBoxCaption",
                        defaultMessage: "Gift Box"
                    },
                    giftBoxTooltip: {
                        id: "sidebar.appSwitcher.giftBoxTooltip",
                        defaultMessage: "Gift Box"
                    }
                });

            function f({
                variant: e = "tooltip",
                onVisibilityChange: t
            }) {
                var a;
                let i = (0, r(533992).v3)(),
                    p = (0, r(109939).tz)(),
                    {
                        isTablet: S
                    } = (0, r(533992).Y0)(),
                    h = (0, r(83208).X)("adoption_enable_changelog_footer_updates"),
                    b = (0, r(596663).k)({
                        skipPremiumFeatureCheck: !0
                    }),
                    m = (0, r(300846).V)(),
                    _ = null == m ? void 0 : m.date,
                    y = null == m ? void 0 : m.name,
                    x = (0, r(682985).K8)(() => {
                        let e = r(479110).P.state.releases;
                        return !!e && !!_ && e.some(e => e.releaseDate === _)
                    }, [_]),
                    w = (0, r(226904).$)({
                        environment: i,
                        releaseDate: _,
                        enabled: h && x && b
                    }),
                    j = "no-render" !== w,
                    A = (0, n.useRef)(!1);
                (0, n.useEffect)(() => (j && !A.current ? (null == t || t(!0), A.current = !0) : !j && A.current && (null == t || t(!1), A.current = !1), () => {
                    A.current && (null == t || t(!1), A.current = !1)
                }), [j, t]);
                let k = (0, r(882833).R)();
                (0, n.useEffect)(() => {
                    j && (new Image().src = k)
                }, [j, k]);
                let C = (null == (a = i.mobileNative) ? void 0 : a.supportsNativeHomeOnPhone()) || !1,
                    P = (0, r(260714).b)();
                if (!j) return null;
                let T = "render-new" === w,
                    B = function(e) {
                        if (e) return o[e]
                    }(y) || c.giftBoxTooltip,
                    I = p.formatMessage(B);
                return (0, s.jsx)(r(656252).A, {
                    buttonPopupStore: d,
                    hidesMobileNativeBottomBar: C,
                    preventSlideUpTransition: C,
                    popupType: S || r(986939).A.isMobile ? r(656252).z.BottomSheet : r(656252).z.Popup,
                    bottomSheetInitialState: S ? "half" : "full",
                    onClick: () => {
                        let e = function(e) {
                            if (!e) return;
                            let t = u[e];
                            if (t) return t
                        }(y);
                        e && e({
                            environment: i
                        }), _ && (0, r(37967).X)({
                            environment: i,
                            releaseDate: _,
                            type: "special",
                            viewed: "content"
                        })
                    },
                    onClose: () => {
                        r(357709).Sq(i, {
                            callout_key: "custom_agents_gift_box",
                            placement_key: "SidebarFooter",
                            callout_metadata: P,
                            dismiss_type: "sidebar_dismiss"
                        })
                    },
                    alignmentToOrigin: "start",
                    placementToOrigin: "top",
                    originGap: 4,
                    content: () => {
                        let e = function(e) {
                            if (e) return l[e]
                        }(y);
                        return e ? (0, s.jsx)(e, {}) : null
                    },
                    children: t => "label" === e ? (0, s.jsx)(r(112341).P, {
                        icon: r(71282).R,
                        highlighted: T,
                        label: p.formatMessage(c.giftBoxCaption),
                        "aria-label": I,
                        ...t
                    }) : "floating" === e ? (0, s.jsx)(g, {
                        variant: e,
                        children: (0, s.jsx)(r(51831).m, {
                            content: () => I,
                            children: e => (0, s.jsx)(r(374533).A, { ...e,
                                ...t,
                                icon: {
                                    icon: r(71282).R,
                                    ...T ? {
                                        colorPalette: "blue",
                                        colorVariant: "accentPrimary"
                                    } : {}
                                },
                                ariaLabel: I,
                                size: "lg",
                                style: v.button,
                                iconStyle: v.icon,
                                hoveredStyle: v.hovered,
                                pressedStyle: v.pressed
                            })
                        })
                    }) : (0, s.jsx)(g, {
                        variant: e,
                        children: (0, s.jsx)(r(208326).o, {
                            icon: {
                                icon: r(71282).R,
                                ...T ? {
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary"
                                } : {}
                            },
                            label: I,
                            ...t
                        })
                    })
                })
            }
            let p = {
                    y: {
                        duration: .4,
                        bounce: 1,
                        ease: "easeOut",
                        delay: .5
                    }
                },
                v = {
                    button: {
                        width: 40,
                        height: 40,
                        background: r(632079).Tj.background.elevated,
                        boxShadow: r(632079).Tj.shadow.outline.sm,
                        borderRadius: 999,
                        flexShrink: 0,
                        transition: "background 20ms ease-in, transform 100ms ease-out"
                    },
                    icon: {
                        width: 20,
                        height: 20
                    },
                    hovered: {
                        background: r(632079).Tj.background.elevated,
                        boxShadow: r(632079).Tj.shadow.outline.md,
                        transform: "scale(1.06)"
                    },
                    pressed: {
                        background: r(632079).Tj.background.elevated,
                        boxShadow: r(632079).Tj.shadow.outline.md,
                        transform: "scale(1.0)"
                    }
                },
                S = {
                    height: 28
                };

            function g({
                children: e,
                variant: t
            }) {
                let {
                    value: n
                } = (0, r(815048).fJ)(r(448988).fM);
                if (!n) return e;
                let {
                    motion: a
                } = n;
                return (0, s.jsx)(a.div, {
                    style: "floating" !== t ? S : void 0,
                    transition: p,
                    children: e
                })
            }
        },
        768718: (e, t, r) => {
            r.d(t, {
                n: () => n
            });

            function n() {
                return (0, r(682985).K8)(() => {
                    var e;
                    let t = (null == (e = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) ? ? r(619157).q;
                    return (0, r(619157).o_)(t)
                }, [])
            }
        },
        882833: (e, t, r) => {
            r.d(t, {
                R: () => n
            });

            function n() {
                let e = (0, r(768718).n)(),
                    t = (0, r(960253).e)();
                return (0, r(682985).K8)(() => {
                    var n, a;
                    let i = r(218744).default.getConfig({
                        configName: "custom_agent_launch_modal_assets"
                    });
                    return (null == (n = i.images) || null == (n = n[e]) || null == (n = n[t]) || null == (n = n["gift-box-header"]) ? void 0 : n.src) || (null == (a = i.images) || null == (a = a.en) || null == (a = a[t]) || null == (a = a["gift-box-header"]) ? void 0 : a.src) || r(896221).A.images.customAgents.giftBoxHeaderPng
                }, [e, t])
            }
        },
        993096: (e, t, r) => {
            r.d(t, {
                FK: () => w,
                Mb: () => y,
                Wo: () => n,
                aZ: () => a,
                ze: () => x
            });
            let n = 500,
                a = 100,
                i = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                l = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                o = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                u = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                s = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "personal_ai"
                    },
                    upsell: void 0
                },
                d = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                c = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "personal",
                        featureSet: "advanced"
                    }
                },
                f = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "core"
                    }
                },
                p = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                v = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                S = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                g = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                h = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                b = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                m = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                _ = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                };

            function y({
                billingData: e
            }) {
                let t = (0, r(192159).YF)(e),
                    n = (0, r(192159).N8)(e),
                    a = (0, r(192159).eh)(e, "plus"),
                    x = (0, r(192159).eh)(e, "business"),
                    w = (0, r(192159).eh)(e, "enterprise"),
                    j = (0, r(192159).eh)(e, "ai"),
                    A = (0, r(192159).eh)(e, "student"),
                    k = (0, r(192159).eh)(e, "personal");
                if (n)
                    if (j && (a || x || w)) return i;
                    else if (e && (0, r(192159).PB)(e)) return w ? l : o;
                else return u;
                if (A)
                    if (j) return p;
                    else return v;
                if (x)
                    if (j) return S;
                    else return g;
                if (w)
                    if (j) return h;
                    else return b;
                if (t)
                    if (j && k) return s;
                    else if (k && !j) return d;
                else if (j && !k) return c;
                else return f;
                else if (j) return m;
                else return _
            }

            function x({
                billingData: e
            }) {
                var t;
                return (null == (t = y({
                    billingData: e
                })) || null == (t = t.upsell) ? void 0 : t.product) === "ai"
            }

            function w(e) {
                return e * a
            }
        }
    }
]);