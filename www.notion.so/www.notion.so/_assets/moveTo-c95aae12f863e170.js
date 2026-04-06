"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21475, 21753, 22197, 23644, 27038, 32626, 33503, 43239, 47414, 48486, 60858, 64696, 76135, 76298, 76983, 81241, 89563, 92754, 96579], {
        13475: (e, t, n) => {
            n.d(t, {
                W: () => i
            });

            function i(e) {
                n(460961).dg.setState(e)
            }
        },
        18274: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);

            function a(e) {
                return (0, i.jsx)(n(746434).E, {
                    style: e.style,
                    content: (0, i.jsx)(n(109939).sA, {
                        id: "betaBadgeComponent.label",
                        defaultMessage: "Beta"
                    })
                })
            }
        },
        31256: (e, t, n) => {
            n.d(t, {
                J: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                marginTop: 12,
                marginBottom: 4
            };

            function o() {
                let e = (0, n(533992).v3)();
                return (0, i.jsx)(n(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, i.jsx)(n(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, i.jsx)(n(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, i.jsx)(n(548436).A, {
                        size: "lg",
                        style: a,
                        onClick: () => {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: n(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, i.jsx)(n(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        33529: (e, t, n) => {
            n.d(t, {
                y: () => i
            }), n(898992), n(672577);

            function i(e) {
                var t;
                let {
                    actionModels: i,
                    id: a
                } = e, o = (0, n(297493).y5)(a), r = "action" === o.source ? i.find(e => e.id === o.action_id) : void 0;
                return {
                    automationValueInfo: o,
                    collectionPointer: (0, n(722371).O9)(r) && r.isType("create_page") ? null == (t = r.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: r
                }
            }
        },
        33918: (e, t, n) => {
            n.d(t, {
                G: () => i
            });

            function i(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        50171: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkTriangleSmallIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, i.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("exclamationMarkTriangleSmall", a, "small")
        },
        51194: (e, t, n) => {
            n.d(t, {
                a: () => a
            });
            var i = n(296540);

            function a() {
                let e = (0, i.useRef)(!1);
                return (0, n(525128).E)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        53634: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                sparklesSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.17 1.53 13.65 12.93",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.577 1.536a.7.7 0 0 0-.7.7c0 .362-.236.87-.684 1.317-.448.448-.955.683-1.316.683a.7.7 0 1 0 0 1.4c.36 0 .868.236 1.316.684s.684.955.684 1.316a.7.7 0 1 0 1.4 0c0-.36.235-.868.683-1.316s.955-.684 1.317-.684a.7.7 0 1 0 0-1.4c-.362 0-.87-.235-1.317-.683-.448-.448-.683-.955-.683-1.317a.7.7 0 0 0-.7-.7m-.394 3.007q.208-.208.394-.451a4.4 4.4 0 0 0 .844.844 4.4 4.4 0 0 0-.844.845 4.4 4.4 0 0 0-.845-.845 4 4 0 0 0 .451-.393m5.887.413a.7.7 0 0 0-.7.7c0 .831-.392 1.674-1.036 2.318S6.847 9.01 6.016 9.01a.7.7 0 1 0 0 1.4c.831 0 1.674.392 2.318 1.036s1.036 1.487 1.036 2.318a.7.7 0 1 0 1.4 0c0-.831.392-1.674 1.036-2.318s1.487-1.036 2.318-1.036a.7.7 0 1 0 0-1.4c-.831 0-1.674-.392-2.318-1.036S10.77 6.487 10.77 5.656a.7.7 0 0 0-.7-.7m-.746 4.008a5.2 5.2 0 0 0 .746-.941 5.2 5.2 0 0 0 1.687 1.687 5.2 5.2 0 0 0-1.687 1.687A5.2 5.2 0 0 0 8.383 9.71a5.2 5.2 0 0 0 .94-.746"
                    })
                },
                a = (0, n(104509).wt)("sparklesSmall", i, "small")
        },
        59651: (e, t, n) => {
            n.d(t, {
                l: () => a
            });
            let i = {
                [n(49361).e1]: "collection_connected_property_figma",
                [n(49361).Hd]: "collection_connected_property_google_drive",
                [n(49361).ob]: "collection_connected_property_github",
                [n(49361).k0]: "collection_connected_property_zendesk",
                [n(49361).bh]: "collection_synced_database_github",
                [n(49361).MN]: "collection_synced_database_asana",
                [n(49361).Fo]: "collection_synced_database_gitlab",
                [n(49361).me]: "collection_synced_database_jira",
                [n(49361).F6]: "collection_synced_database_jira_workspace",
                [n(49361).Fv]: "collection_synced_database_jira_datacenter",
                [n(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function a(e) {
                if (e) return i[e]
            }
        },
        62412: (e, t, n) => {
            n.d(t, {
                O: () => r,
                u: () => o
            });
            var i = n(296540),
                a = n(474848);

            function o(e) {
                let {
                    buttonStyles: t
                } = e, o = (0, n(109939).tz)(), l = o.formatMessage(r.settings), s = (0, i.useCallback)(() => {
                    n(599754).Ow({
                        openedFrom: "sidebar",
                        currentPage: "user_settings"
                    })
                }, []);
                return (0, a.jsx)(n(51831).m, {
                    content: () => o.formatMessage(r.tooltip),
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, a.jsx)(n(64960).Ay, { ...e,
                        onClick: s,
                        style: n(132261).DX.baseSidebarItem,
                        hoveredStyle: null == t ? void 0 : t.hoveredStyle,
                        children: (0, a.jsx)(n(380559).u, {
                            left: (0, a.jsx)(n(16275).I, {
                                icon: n(829968).gearIcon,
                                colorVariant: "secondary",
                                size: "lg"
                            }),
                            children: l
                        })
                    })
                })
            }
            let r = (0, n(109939).YK)({
                settingsAndMembers: {
                    id: "sidebarSettingsButton.settingsAndMembers",
                    defaultMessage: "Settings & members"
                },
                settings: {
                    id: "sidebarSettingsButton.settings",
                    defaultMessage: "Settings"
                },
                tooltip: {
                    id: "sidebarSettingsButton.tooltip",
                    defaultMessage: "Manage your account and settings"
                }
            })
        },
        67207: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personSlashIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                a = (0, n(104509).wt)("personSlash", i, "default")
        },
        72762: (e, t, n) => {
            n.d(t, {
                o: () => i
            });

            function i(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), n(639675).Ay.setState({ ...n(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        79268: (e, t, n) => {
            n.d(t, {
                C: () => a
            });
            var i = n(296540);

            function a({
                upsell: e,
                source: t,
                buttonDisplayType: o,
                onClickBeforeUpgradeAction: r,
                postUpgradeCallback: l,
                spaceStore: s
            }) {
                let d = (0, n(533992).v3)(),
                    c = (0, n(855021).q)(),
                    u = (0, n(226309)._3)({
                        spaceId: null == s ? void 0 : s.id
                    }),
                    p = (0, n(345776).T)(),
                    {
                        campaign: m,
                        loading: f
                    } = (0, n(435276).V)(t),
                    [g, y] = function(e) {
                        let {
                            upsell: t
                        } = e, a = (0, n(533992).v3)(), o = (0, n(972740).L)(), r = (0, n(993077).U2)(), l = null == o ? void 0 : o.id, s = (0, n(345776).T)(), d = (0, n(226309).lh)({
                            spaceId: l
                        }), c = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, u = (0, n(682985).K8)(() => {
                            if (l) return n(477870).L.getData(a, {
                                spaceId: l
                            })
                        }, [a, l]), p = (0, n(682985).K8)(() => (0, n(966458).Jg)({
                            product: c,
                            userId: s,
                            billingData: d,
                            spaceStore: o,
                            spaceUserStore: r,
                            existingRequests: u
                        }), [c, s, d, o, r, u]), [m, f] = (0, i.useState)(p);
                        return (0, i.useEffect)(() => {
                            f(p)
                        }, [p]), [m, f]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    h = (0, n(682985).K8)(() => e ? (0, n(96495).a)({
                        environment: d,
                        upsell: e,
                        spaceStore: s,
                        salesStatus: c,
                        campaign: m,
                        requestState: g,
                        billingData: u,
                        source: t,
                        loading: f
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [s, d, e, c, m, g, u, t, f]),
                    v = (0, i.useCallback)(async () => {
                        if (!e) return;
                        let i = "product" === e.type ? e.product : void 0,
                            a = (0, n(555676).x)();
                        if (!a) return;
                        let [, {
                            getUpgradeSystemAction: c
                        }] = await Promise.all([null == r ? void 0 : r(), a()]), f = c(h);
                        await f({
                            source: t,
                            spaceStore: s,
                            product: i,
                            billingData: u,
                            environment: d,
                            setRequestState: y,
                            userId: p,
                            buttonDisplayType: o,
                            postUpgradeCallback: l,
                            campaign: m,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, r, h, t, s, u, d, y, p, o, l, m]);
                return {
                    upgradeEligibility: h,
                    handleClick: v
                }
            }
        },
        80384: (e, t, n) => {
            n.d(t, {
                MG: () => o,
                T1: () => a,
                a1: () => c,
                dt: () => r,
                kg: () => l,
                lC: () => d,
                n_: () => s
            });
            var i = n(296540);
            let a = new(n(815048)).O2("PerformanceToolbar", () => Promise.all([n.e(39225), n.e(45624)]).then(n.bind(n, 476932))),
                o = (0, n(815048)._h)(a, e => e.PerformanceToolbar),
                r = (0, n(815048)._h)(a, e => e.PerformanceToolbarSettings);

            function l() {
                let e = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(186452).D)(e, e.RouterStore.state), [e])
            }

            function s() {
                let e = (0, n(533992).v3)(),
                    t = u("performanceToolbarStore"),
                    i = u("isPerformanceToolbarVisible");
                return (0, n(682985).K8)(() => !!t && !!i && i(e, e.RouterStore.state, t.state), [i, e, t])
            }

            function d() {
                let e = u("performanceToolbarStore");
                return (0, n(682985).K8)(() => !!e && e.state.isPerformanceToolbarMounted, [e])
            }

            function c() {
                let e = (0, n(533992).v3)(),
                    t = u("createPerformanceToolbarMouseListeners"),
                    a = u("performanceToolbarStore"),
                    {
                        sidebarExpanded: o,
                        sidebarWidth: r,
                        secondarySidebarExpanded: l,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: d,
                        updateSidebarWidth: c
                    } = (0, n(682985).K8)(() => ({
                        sidebarExpanded: n(984858).sidebarExpandedStore.state,
                        sidebarWidth: n(984858).sidebarWidthStore.state,
                        secondarySidebarExpanded: n(550830).default.isOpen(),
                        secondarySidebarWidth: n(515492).Ay.getWidth(),
                        updateSidebarExpanded: n(449473).B8.state.expanded,
                        updateSidebarWidth: n(449473).B8.state.width
                    }), []);
                return (0, i.useEffect)(() => {
                    if (a && t) return t({
                        environment: e,
                        setMouseNearPerformanceToolbar: e => a.update(t => ({ ...t,
                            isMouseNearPerformanceToolbar: e
                        })),
                        sidebarExpanded: o,
                        sidebarWidth: r,
                        secondarySidebarExpanded: l,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: d,
                        updateSidebarWidth: c
                    })
                }, [t, e, a, o, r, l, s, d, c])
            }

            function u(e) {
                let t = l(),
                    [{
                        value: i
                    }] = (0, n(97668).Yb)(() => t ? a.load().then(t => t[e]) : Promise.resolve(void 0), [e, t]);
                return i
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                integrationIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, n(104509).wt)("integration", i, "default")
        },
        96351: (e, t, n) => {
            n.d(t, {
                B: () => i
            });

            function i({
                openInNew: e,
                url: t,
                makeTabActive: a,
                position: o,
                isNewPage: r,
                environment: l
            }) {
                "tab" === e && a ? (0, n(266527).x)(l, {
                    url: t,
                    position: o,
                    makeTabActive: a,
                    isNewPage: r
                }) : "tab" !== e || a ? "window" === e && (0, n(714770).E)(t) : (0, n(380839).x)(l, {
                    url: t,
                    position: o
                })
            }
        },
        96495: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    upsell: i,
                    spaceStore: a,
                    salesStatus: o,
                    campaign: r,
                    requestState: l,
                    billingData: s,
                    source: d,
                    loading: c
                } = e;
                if (c) return {
                    status: "loading"
                };
                let u = (0, n(875472).sO)(r);
                if ("none" === i.type) return {
                    status: "not_eligible",
                    reason: "feature_not_upsellable"
                };
                if ((0, n(916804).I)(a)) return {
                    status: "not_eligible",
                    reason: "guest"
                };
                let p = i.product,
                    {
                        addOnFeature: m
                    } = (0, n(269612).p)({
                        billingData: s,
                        product: p
                    });
                if (!(0, n(192159).Gm)(s) && ["block_limit_sidebar", "block_limit_settings", "block_limit_banner", "database_chart_paywall", "delete_blocks_modal", "slash_menu", "out_of_blocks_toast", "forms_increase_file_limit", "forms_notion_branding", "forms_customize_settings"].includes(d) && !m) return {
                    status: "eligible_to_purchase",
                    reason: "plans_page_redirect"
                };
                let f = function(e) {
                    let {
                        product: t,
                        environment: i,
                        spaceStore: a
                    } = e;
                    if ((0, n(832139).A)()) return {
                        status: "not_eligible",
                        reason: "samsung_purchases_not_supported"
                    };
                    let o = (0, n(663842).m)({
                        environment: i
                    }) && ("personal" === t || "ai" === t);
                    return o && a && (0, n(471078).O)({
                        environment: i,
                        spaceId: a.id
                    }) ? {
                        status: "not_eligible",
                        reason: "mobile_multi_member_workspace"
                    } : i.device.isMobileNative ? "ai" !== t || (0, n(907620).T)("supportsAiIAP") ? o ? {
                        status: "eligible_to_purchase",
                        reason: "show_mobile_native_upgrade_modal"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_purchase_not_supported"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_ai_add_on_purchase_not_supported"
                    } : void 0
                }({
                    product: p,
                    environment: t,
                    spaceStore: a
                });
                return f || ((null == s ? void 0 : s.provider) === "app_store" || (null == s ? void 0 : s.provider) === "play_store" ? {
                    status: "not_eligible",
                    reason: "subscribed_via_in_app_purchase"
                } : "unrequested" === l ? {
                    status: "eligible_to_request"
                } : "pending" === l ? {
                    status: "request_pending"
                } : "sales_assisted" === o ? {
                    status: "sales_assisted"
                } : (0, n(262166).h0)(p) && "sales_eligible" === o ? {
                    status: "sales_eligible"
                } : null != a && a.canAdmin() ? (0, n(192159).bO)((0, n(226309).a9)(s)) ? {
                    status: "not_eligible",
                    reason: "unverified_payment"
                } : "preferred" === i.trialability && (null == u ? void 0 : u.type) === "trial" && u.subscriptionTier === i.product ? {
                    status: "eligible_for_trial"
                } : {
                    status: "eligible_to_purchase",
                    reason: "show_upgrade_modal"
                } : {
                    status: "not_eligible",
                    reason: "not_workspace_owner"
                })
            }
        },
        97010: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                templatesIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.08 2.62 15.84 14.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.682 5.716V4.182c0-.858.7-1.557 1.557-1.557h5.823c.858 0 1.557.7 1.557 1.557v5.59a1.56 1.56 0 0 1-1.093 1.486l2.185 3.786c.589 1.038-.154 2.331-1.354 2.331H9.38c-1.138 0-1.895-1.18-1.421-2.201q-.513.113-1.057.114a4.81 4.81 0 0 1-4.818-4.818 4.812 4.812 0 0 1 5.6-4.754M9.24 3.875a.31.31 0 0 0-.307.307v5.6a.3.3 0 0 0 .298.296h1.66l.622-1.075a.6.6 0 0 1 .073-.103 1.56 1.56 0 0 1 2.638.1l.002.003.62 1.075h.217a.31.31 0 0 0 .307-.306v-5.59a.31.31 0 0 0-.307-.307zm-.01 7.453a1.55 1.55 0 0 1-1.547-1.547V6.99a3.562 3.562 0 0 0-4.35 3.481 3.56 3.56 0 0 0 3.569 3.568 3.54 3.54 0 0 0 2.09-.669l1.178-2.04zm3.914-1.7a.31.31 0 0 0-.54.002 1 1 0 0 1-.057.08L9.11 15.665l-.001.002a.306.306 0 0 0 .27.458h6.978a.31.31 0 0 0 .268-.463z"
                    })
                },
                a = (0, n(104509).wt)("templates", i, "default")
        },
        100410: (e, t, n) => {
            n.r(t), n.d(t, {
                iPhoneIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.12 2.37 9.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.375 15c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25H8A.625.625 0 0 1 7.375 15M9 4.375a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25z"
                        }), (0, i.jsx)("path", {
                            d: "M5.125 4.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-5.5A2.125 2.125 0 0 1 5.125 15.5zm2.125-.875a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-11a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("iPhone", a, "default")
        },
        109925: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                phoneIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.58 2.77 14.78 14.57",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.84 3.093a1.34 1.34 0 0 1 1.881.158l2.52 2.96a1.524 1.524 0 0 1-.083 2.066l-1.22 1.22 2.715 2.717 1.221-1.221a1.525 1.525 0 0 1 2.066-.084l2.962 2.517a1.29 1.29 0 0 1 .16 1.805l-.559.678a3.94 3.94 0 0 1-3.447 1.414l-.16-.016A11.564 11.564 0 0 1 2.614 7.299 3.88 3.88 0 0 1 3.97 3.822zm.93.969a.09.09 0 0 0-.128-.011l-.869.729a2.63 2.63 0 0 0-.919 2.358 10.314 10.314 0 0 0 9.17 8.925l.16.017a2.7 2.7 0 0 0 2.355-.966l.558-.678a.04.04 0 0 0-.005-.057l-2.961-2.517a.275.275 0 0 0-.373.015l-1.663 1.663a.625.625 0 0 1-.884 0l-3.6-3.6a.625.625 0 0 1 0-.884l1.663-1.663a.275.275 0 0 0 .015-.373z"
                    })
                },
                a = (0, n(104509).wt)("phone", i, "default")
        },
        124094: (e, t, n) => {
            n.d(t, {
                E: () => s,
                Z: () => d
            });
            var i = () => n(889089);
            let a = {
                plans_page: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                checkout_modal: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                business_trial_verify_pages_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_settings_centralized_view: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_page_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_collection_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_private_teamspaces_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_ai_connectors_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                upgrade_requests_page: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_workspace_settings_connector_cards: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                multi_search_scope_menu: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                assistant_overflow_menu_add_connectors: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_corner_chat_welcome_connector_action_card: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_chat_connectors_banner: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                post_business_trial_coupon_callout: ["business_trial_non_conversion"],
                resurrection_offer_callout: ["business_resurrection_offer", "resurrection_offer"],
                ai_agent: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d"],
                custom_agent: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_library: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                slippery_slope_flyout_menu: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_launch_modal: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_gift_box: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                marketplace_agents: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"]
            };
            var o = () => n(617995),
                r = () => n(705820);
            async function l(e) {
                var t;
                let {
                    campaign: i,
                    eligibleCampaigns: a
                } = e;
                if (!a.includes(i)) return !1;
                await (0, n(591083).yc)().catch(() => void 0);
                let o = (0, n(591083).v7)(),
                    r = null == o || null == (t = o[i]) ? void 0 : t.statsigDetails;
                return !!r && (await n(218744).default.waitUntilStatsigReadyAsync(), (0, n(134213).l)({
                    experimentService: n(218744).default,
                    statsigDetails: r
                }).isEligible)
            }
            async function s(e, t, n) {
                let s, d = function(e) {
                    if (a.hasOwnProperty(e)) return a[e]
                }(n);
                if (d)
                    for (let n of d) {
                        if ((0, i().w)(n)) {
                            if (s || (s = await r().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await l({
                                    campaign: n,
                                    eligibleCampaigns: s
                                })) return n;
                            continue
                        }
                        let a = await o().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: n
                        });
                        if ((null == a ? void 0 : a.campaign) === n) return n
                    }
            }

            function d({
                environment: e,
                spaceName: t,
                campaign: i,
                entrypoint: a
            }) {
                if (t) switch (i) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, n(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: i,
                                    entrypoint: a
                                }
                            }
                        })
                }
            }
        },
        124108: (e, t, n) => {
            n.d(t, {
                N: () => l
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                    alignItems: "center",
                    borderRadius: n(986939).A.isMobile ? 12 : 6,
                    boxShadow: void 0,
                    display: "flex",
                    flexShrink: 0,
                    fontSize: n(986939).A.isMobile ? 16 : 14,
                    fontWeight: n(699422).Wy.medium,
                    height: n(986939).A.isMobile ? 48 : 32,
                    justifyContent: "center",
                    lineHeight: 1.2,
                    paddingInlineStart: n(986939).A.isMobile ? 20 : 12,
                    paddingInlineEnd: n(986939).A.isMobile ? 20 : 12,
                    whiteSpace: "nowrap"
                },
                r = {
                    destructiveButtonDefault: { ...o,
                        background: n(632079).Tj.red.background.accentPrimary,
                        color: n(632079).oZ.white,
                        fill: n(632079).oZ.lightTextColor
                    },
                    destructiveButtonHovered: {
                        background: "rgba(235, 87, 87, 0.8)"
                    },
                    destructiveButtonPressed: {
                        background: n(632079).oZ.red
                    },
                    primaryButtonDefault: { ...o,
                        background: n(632079).Tj.blue.background.accentPrimary,
                        color: n(632079).oZ.white,
                        fill: n(632079).oZ.lightTextColor
                    },
                    primaryButtonHovered: {
                        background: n(632079).Tj.blueButtonHoveredBackground
                    },
                    primaryButtonPressed: {
                        background: n(632079).Tj.blueButtonPressedBackground
                    },
                    secondaryButtonDefault: { ...o,
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...o,
                        background: "transparent",
                        color: n(632079).Tj.text.primary,
                        fill: n(632079).Tj.text.primary
                    },
                    plainButtonHovered: {
                        background: n(632079).Tj.whiteButtonHoveredBackground
                    },
                    plainButtonPressed: {
                        background: n(632079).Tj.whiteButtonPressedBackground
                    },
                    outlineButtonDefault: { ...o,
                        background: n(632079).Tj.whiteButtonBackground,
                        color: n(632079).Tj.text.primary,
                        fill: n(632079).Tj.text.primary,
                        border: `1px solid ${n(632079).Tj.border.primary}`
                    },
                    outlineButtonHovered: {
                        background: n(632079).Tj.whiteButtonHoveredBackground
                    },
                    outlineButtonPressed: {
                        background: n(632079).Tj.whiteButtonPressedBackground
                    },
                    blackButtonDefault: { ...o,
                        background: n(632079).Tj.primaryBlack,
                        color: n(632079).oZ.white,
                        fill: n(632079).Tj.primaryBlack
                    },
                    blackButtonHovered: {
                        background: n(632079).oZ.frontBlackButtonBackgroundHovered
                    },
                    blackButtonPressed: {
                        background: n(632079).oZ.frontBlackButtonBackgroundPressed
                    },
                    style0: {
                        marginInlineEnd: 4
                    }
                };

            function l(e) {
                let {
                    buttonInfo: t,
                    ...o
                } = e, l = (0, i.useContext)(n(19187).e), s = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, i.useMemo)(() => ({
                    destructive: {
                        default: r.destructiveButtonDefault,
                        hovered: r.destructiveButtonHovered,
                        pressed: r.destructiveButtonPressed
                    },
                    primary: {
                        default: r.primaryButtonDefault,
                        hovered: r.primaryButtonHovered,
                        pressed: r.primaryButtonPressed
                    },
                    secondary: {
                        default: r.secondaryButtonDefault
                    },
                    dismiss: {
                        default: r.secondaryButtonDefault
                    },
                    outline: {
                        default: r.outlineButtonDefault,
                        hovered: r.outlineButtonHovered,
                        pressed: r.outlineButtonPressed
                    },
                    black: {
                        default: r.blackButtonDefault,
                        hovered: r.blackButtonHovered,
                        pressed: r.blackButtonPressed
                    },
                    plain: {
                        default: r.plainButtonDefault,
                        hovered: r.plainButtonHovered,
                        pressed: r.plainButtonPressed
                    }
                }), []);
                if ("dismiss" === t.buttonType) {
                    let e = t.label ? ? (0, a.jsx)(n(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        i = t.combinedStyles ? ? d.dismiss;
                    return (0, a.jsx)(n(64960).Ay, {
                        style: null == i ? void 0 : i.default,
                        hoveredStyle: null == i ? void 0 : i.hovered,
                        pressedStyle: null == i ? void 0 : i.pressed,
                        onClick: l,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        i = t.combinedStyles ? ? d[e];
                    return (0, a.jsxs)(n(64960).Ay, {
                        style: { ...null == i ? void 0 : i.default,
                            ...s
                        },
                        hoveredStyle: null == i ? void 0 : i.hovered,
                        pressedStyle: null == i ? void 0 : i.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...o,
                        children: [t.isLoading ? (0, a.jsx)(n(517334).k, {
                            style: r.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        128743: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightLeftIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                a = (0, n(104509).wt)("arrowStraightLeft", i, "default")
        },
        132261: (e, t, n) => {
            n.d(t, {
                DX: () => u,
                FD: () => o,
                Zr: () => r,
                aL: () => i,
                bG: () => l,
                qe: () => c,
                ry: () => a,
                sI: () => d,
                sx: () => s
            });
            let i = 800,
                a = 22,
                o = 24,
                r = 30,
                l = 8,
                s = 4,
                d = 6,
                c = 15,
                u = {
                    baseSidebarItem: { ...n(153262).hG,
                        fontWeight: n(699422).Wy.medium
                    },
                    currentSelectedSidebarItem: {
                        background: n(632079).Tj.sidebarItemSelectedBackground,
                        color: n(632079).Tj.text.primary,
                        ...n(986939).A.isMobile && {
                            boxShadow: `
                            0 1px 0 ${n(632079).Tj.buttonHoveredBackground}
                        `
                        }
                    }
                }
        },
        138105: (e, t, n) => {
            n.d(t, {
                W: () => r,
                U: () => s
            });
            var i = n(296540);
            let a = {
                control: (0, n(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.control.tooltip",
                        defaultMessage: "Find templates by Notion’s community"
                    }
                }),
                v1: (0, n(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v1.tooltip",
                        defaultMessage: "Discover tools and templates for your workspace"
                    }
                }),
                v2: (0, n(109939).YK)({
                    tooltip: {
                        id: "adoptionMarketplaceSidebarTooltipDiscovery.v2.tooltip",
                        defaultMessage: "Discover what the community has built"
                    }
                })
            };
            var o = n(474848);

            function r(e) {
                let {
                    styles: t
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)(), d = (0, i.useRef)(!1), c = (0, n(682985).K8)(() => {
                    let {
                        RouterStore: e
                    } = r;
                    return e.state.route.name
                }, [r]), u = (0, n(682985).K8)(() => {
                    let e = n(218744).default.getEligibleGroup({
                        experimentId: "adoption_marketplace_sidebar_surface_exploratory_copy",
                        defaultGroup: "control"
                    });
                    return "v1" === e || "v2" === e ? e : "control"
                }, []), p = (0, n(682985).K8)(() => n(218744).default.getEligibleGroup({
                    experimentId: "adoption_marketplace_sidebar_tooltip_discovery_copy",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                }), []), m = (0, n(892166).U)("marketplace_sidebar_option_click"), f = (0, i.useCallback)(() => {
                    var e;
                    let t = "control" === (e = p) || "v1" === e || "v2" === e ? e : "control";
                    return s.formatMessage(a[t].tooltip)
                }, [s, p]), g = (0, i.useCallback)(() => {
                    d.current || (d.current = !0, n(218744).default.manuallyLogExperimentExposure("adoption_marketplace_sidebar_tooltip_discovery_copy"))
                }, []);
                return (0, o.jsx)(n(51831).m, {
                    content: f,
                    originGap: 6,
                    placement: "right",
                    children: (e, i) => (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(l, {
                            isTooltipVisible: i,
                            onTooltipVisible: g
                        }), (0, o.jsx)(n(590422).Q, {
                            style: t.sidebarItemButtonStyle,
                            hoveredStyle: t.buttonHoveredStyle,
                            onClick: m,
                            ...e,
                            children: (0, o.jsx)(n(380559).u, {
                                left: (0, o.jsx)(n(16275).I, {
                                    icon: n(97010).templatesIcon,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                isBottomItem: !0,
                                style: "gallery" === c ? t.sidebarItemActiveStyle : {},
                                children: s.formatMessage(n(648880).L[u])
                            })
                        })]
                    })
                })
            }

            function l(e) {
                let {
                    isTooltipVisible: t,
                    onTooltipVisible: n
                } = e;
                return (0, i.useEffect)(() => {
                    t && n()
                }, [t, n]), null
            }
            let s = (0, n(109939).YK)({
                templatesMwnTooltip: {
                    defaultMessage: "Find templates by Notion’s community",
                    id: "sidebar.openTemplatePickerButton.tooltip.mwn"
                },
                title: {
                    defaultMessage: "Templates",
                    id: "sidebar.openTemplatePickerButton"
                },
                marketplaceTitle: {
                    defaultMessage: "Marketplace",
                    id: "sidebar.openMarketplaceButton"
                }
            })
        },
        153321: (e, t, n) => {
            n.d(t, {
                P: () => a,
                w: () => o
            });
            let i = { ...n(337807).W,
                    ...n(720128).n,
                    ...n(945632).$,
                    ...n(961820).Z
                },
                a = (0, n(6046).H)((e, t) => (0, n(501723).P)(e, t, i, n(104355).J));

            function o(e) {
                return (0, n(698809).G)((0, n(501723).P)(e, {
                    forwardMotionProps: !1
                }, i, n(104355).J))
            }
        },
        153828: (e, t, n) => {
            n.d(t, {
                P: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                a = (0, n(104509).wt)("home", i, "default")
        },
        166863: (e, t, n) => {
            n.d(t, {
                P: () => a
            });
            let i = (0, n(109939).YK)({
                    languageTitle: {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    },
                    languageDescription: {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    },
                    numberFormatTitle: {
                        id: "languageRegionSettings.numberFormat.label",
                        defaultMessage: "Number format"
                    },
                    numberFormatDescription: {
                        id: "languageRegionSettings.numberFormat.description",
                        defaultMessage: "Choose how numbers and currencies are formatted. Default uses your language setting."
                    },
                    spellcheckerTitle: {
                        id: "languageRegionSettings.spellchecker.label",
                        defaultMessage: "Spellchecker languages"
                    },
                    spellcheckerDescription: {
                        id: "languageSettings.spellcheckerSwitcher.subtitle",
                        defaultMessage: "Change the languages used by the spellchecker."
                    },
                    textDirectionTitle: {
                        id: "textDirectionControlsSetting.title",
                        defaultMessage: "Always show text direction controls"
                    },
                    textDirectionDescription: {
                        id: "textDirectionControlsSetting.caption",
                        defaultMessage: "Show the option to change text direction (left to right or right to left) in the editor, regardless of what language you’re using"
                    },
                    startWeekOnMondayTitle: {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    },
                    startWeekOnMondayDescription: {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will affect the way your calendars appear in Notion"
                    },
                    dateFormatTitle: {
                        id: "dateMentionFormatSettings.title",
                        defaultMessage: "Date format"
                    },
                    dateFormatDescription: {
                        id: "dateMentionFormatSettings.caption",
                        defaultMessage: "Set the default format for new @date mentions"
                    },
                    autoTimezoneTitle: {
                        id: "dateAndTimeSettings.autoTimeZone.title",
                        defaultMessage: "Set time zone automatically using your location"
                    },
                    autoTimezoneDescription: {
                        id: "dateAndTimeSettings.autoTimeZone.caption",
                        defaultMessage: "Reminders, notifications, and emails will be delivered to you based on your time zone"
                    },
                    timezoneTitle: {
                        id: "dateAndTimeSettings.timeZone.title",
                        defaultMessage: "Time zone"
                    },
                    timezoneDescription: {
                        id: "dateAndTimeSettings.timeZone.caption",
                        defaultMessage: "Choose your time zone"
                    }
                }),
                a = {
                    language: {
                        id: "languageAndRegionSettingsLanguage",
                        title: i.languageTitle,
                        description: i.languageDescription
                    },
                    numberFormat: {
                        id: "languageAndRegionSettingsNumberFormat",
                        title: i.numberFormatTitle,
                        description: i.numberFormatDescription
                    },
                    spellchecker: {
                        id: "languageAndRegionSettingsSpellchecker",
                        title: i.spellcheckerTitle,
                        description: i.spellcheckerDescription
                    },
                    textDirection: {
                        id: "languageAndRegionSettingsTextDirection",
                        title: i.textDirectionTitle,
                        description: i.textDirectionDescription
                    },
                    startWeekOnMonday: {
                        id: "languageAndRegionSettingsStartWeekOnMonday",
                        title: i.startWeekOnMondayTitle,
                        description: i.startWeekOnMondayDescription
                    },
                    dateFormat: {
                        id: "languageAndRegionSettingsDateFormat",
                        title: i.dateFormatTitle,
                        description: i.dateFormatDescription
                    },
                    autoTimezone: {
                        id: "languageAndRegionSettingsAutoTimezone",
                        title: i.autoTimezoneTitle,
                        description: i.autoTimezoneDescription
                    },
                    timezone: {
                        id: "languageAndRegionSettingsTimezone",
                        title: i.timezoneTitle,
                        description: i.timezoneDescription
                    }
                }
        },
        186452: (e, t, n) => {
            n.d(t, {
                D: () => i
            });

            function i(e, t) {
                return t.route.name, !1
            }
        },
        187649: (e, t, n) => {
            let i, a;

            function o(e) {
                i = e
            }
            async function r() {
                return a || (i ? a = await i() : void 0)
            }
            n.d(t, {
                Q: () => o,
                z: () => r
            })
        },
        198048: (e, t, n) => {
            n.d(t, {
                C: () => a
            });
            var i = n(296540);

            function a() {
                let e = (0, n(51194).a)(),
                    [t, a] = (0, i.useState)(0),
                    o = (0, i.useCallback)(() => {
                        e.current && a(t + 1)
                    }, [t]);
                return [(0, i.useCallback)(() => n(610104).Gt.postRender(o), [o]), t]
            }
        },
        198347: (e, t, n) => {
            n.d(t, {
                v: () => i
            });

            function i(e, t) {
                n(606047).A.setState({ ...n(606047).A.state,
                    open: !0,
                    from: e
                }), n(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        199894: (e, t, n) => {
            n.d(t, {
                t: () => i
            }), n(16280), n(898992), n(672577), n(581454);

            function i(e) {
                let {
                    environment: t,
                    selection: i,
                    transaction: a,
                    preventSetSelection: o
                } = e, {
                    blocks: r
                } = e, l = (0, n(385941).Z)();
                if (!l) throw Error("No root store.");
                if (i.length > 0) {
                    let e = i[0],
                        l = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = l.props.onInsertAbove({
                        insertStores: r,
                        transaction: a
                    });
                    return o || (0, n(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = l.getContentStore(),
                        i = r.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return o || (0, n(854924).t)({
                        environment: t,
                        stores: i
                    }), i
                }
            }
        },
        200261: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                o = function() {
                    return (0, i.jsx)(n(636518).Ay, {
                        title: (0, i.jsx)(n(517334).k, {
                            size: "default"
                        }),
                        titleStyle: a
                    })
                }
        },
        203066: (e, t, n) => {
            n.d(t, {
                N: () => d
            });
            var i = n(296540);
            class a extends i.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function o({
                children: e,
                isPresent: t
            }) {
                let n = (0, i.useId)(),
                    r = (0, i.useRef)(null),
                    l = (0, i.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, i.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: i,
                        top: a,
                        left: o
                    } = l.current;
                    if (t || !r.current || !e || !i) return;
                    r.current.dataset.motionPopId = n;
                    let s = document.createElement("style");
                    return document.head.appendChild(s), s.sheet && s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `), () => {
                        document.head.removeChild(s)
                    }
                }, [t]), i.createElement(a, {
                    isPresent: t,
                    childRef: r,
                    sizeRef: l
                }, i.cloneElement(e, {
                    ref: r
                }))
            }
            let r = ({
                children: e,
                initial: t,
                isPresent: a,
                onExitComplete: r,
                custom: s,
                presenceAffectsLayout: d,
                mode: c
            }) => {
                let u = (0, n(328601).M)(l),
                    p = (0, i.useId)(),
                    m = (0, i.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: a,
                        custom: s,
                        onExitComplete: e => {
                            for (let t of (u.set(e, !0), u.values()))
                                if (!t) return;
                            r && r()
                        },
                        register: e => (u.set(e, !1), () => u.delete(e))
                    }), d ? void 0 : [a]);
                return (0, i.useMemo)(() => {
                    u.forEach((e, t) => u.set(t, !1))
                }, [a]), i.useEffect(() => {
                    a || u.size || !r || r()
                }, [a]), "popLayout" === c && (e = i.createElement(o, {
                    isPresent: a
                }, e)), i.createElement(n(786719).t.Provider, {
                    value: m
                }, e)
            };

            function l() {
                return new Map
            }
            let s = e => e.key || "",
                d = ({
                    children: e,
                    custom: t,
                    initial: a = !0,
                    onExitComplete: o,
                    exitBeforeEnter: l,
                    presenceAffectsLayout: d = !0,
                    mode: c = "sync"
                }) => {
                    let u;
                    (0, n(285238).V)(!l, "Replace exitBeforeEnter with mode='wait'");
                    let p = (0, i.useContext)(n(29473).L).forceRender || (0, n(198048).C)()[0],
                        m = (0, n(51194).a)(),
                        f = (u = [], i.Children.forEach(e, e => {
                            (0, i.isValidElement)(e) && u.push(e)
                        }), u),
                        g = f,
                        y = (0, i.useRef)(new Map).current,
                        h = (0, i.useRef)(g),
                        v = (0, i.useRef)(new Map).current,
                        b = (0, i.useRef)(!0);
                    if ((0, n(525128).E)(() => {
                            b.current = !1, f.forEach(e => {
                                let t = s(e);
                                v.set(t, e)
                            }), h.current = g
                        }), (0, n(757491).l)(() => {
                            b.current = !0, v.clear(), y.clear()
                        }), b.current) return i.createElement(i.Fragment, null, g.map(e => i.createElement(r, {
                        key: s(e),
                        isPresent: !0,
                        initial: !!a && void 0,
                        presenceAffectsLayout: d,
                        mode: c
                    }, e)));
                    g = [...g];
                    let _ = h.current.map(s),
                        x = f.map(s),
                        w = _.length;
                    for (let e = 0; e < w; e++) {
                        let t = _[e]; - 1 !== x.indexOf(t) || y.has(t) || y.set(t, void 0)
                    }
                    return "wait" === c && y.size && (g = []), y.forEach((e, n) => {
                        if (-1 !== x.indexOf(n)) return;
                        let a = v.get(n);
                        if (!a) return;
                        let l = _.indexOf(n),
                            u = e;
                        u || (u = i.createElement(r, {
                            key: s(a),
                            isPresent: !1,
                            onExitComplete: () => {
                                y.delete(n);
                                let e = Array.from(v.keys()).filter(e => !x.includes(e));
                                if (e.forEach(e => v.delete(e)), h.current = f.filter(t => {
                                        let i = s(t);
                                        return i === n || e.includes(i)
                                    }), !y.size) {
                                    if (!1 === m.current) return;
                                    p(), o && o()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: d,
                            mode: c
                        }, a), y.set(n, u)), g.splice(l, 0, u)
                    }), g = g.map(e => {
                        let t = e.key;
                        return y.has(t) ? e : i.createElement(r, {
                            key: s(e),
                            isPresent: !0,
                            presenceAffectsLayout: d,
                            mode: c
                        }, e)
                    }), i.createElement(i.Fragment, null, y.size ? g : g.map(e => (0, i.cloneElement)(e)))
                }
        },
        208117: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: o,
                    billingData: r
                } = e;
                return a({
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: o,
                    billingData: r
                }) && !(0, n(192159).N8)(r) && !!(!o || !(0, n(556306).h)(o))
            }

            function a(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: a,
                    billingData: o
                } = e;
                if (o && (0, n(192159).N8)(o)) return !0;
                let r = null == a ? void 0 : a.id;
                return !!r && (!!(((0, n(616579).j)({
                    environment: t,
                    spaceId: r
                }) ? ? 1) > 99 || (0, n(192159).N8)(o)) || !!i && "company_employee_count" in i && parseInt(i.company_employee_count) > 99)
            }
            n.d(t, {
                H: () => a,
                q: () => i
            })
        },
        209572: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                style0: { ...n(699422).RC,
                    display: "flex"
                },
                style1: {
                    flexGrow: 1,
                    flexShrink: 1
                }
            };

            function o(e) {
                let {
                    icon: t,
                    iconStyle: o,
                    title: r,
                    caption: l,
                    right: s,
                    rightStyle: d,
                    isRedOnHover: c,
                    isGray: u,
                    isOrange: p,
                    onClick: m,
                    onMouseDown: f,
                    onMouseEnter: g,
                    onMouseLeave: y,
                    disabled: h,
                    showChevron: v,
                    chevronStyle: b,
                    rotateChevron: _,
                    showDragHandle: x,
                    focused: w,
                    textWrapperStyle: S,
                    shouldWrapCaption: k,
                    desktopIconStyle: M,
                    buttonStyle: T,
                    desktopTitleStyle: C,
                    source: I,
                    menuListItemProps: A,
                    isPulsing: j,
                    shouldShowMobileBackground: D
                } = e, B = (0, n(564725).y$)(), H = (0, n(960253).I)(() => ({
                    style: { ...u ? {
                            color: n(632079).Tj.text.secondary,
                            fill: n(632079).Tj.icon.secondary
                        } : p ? {
                            color: n(632079).Tj.orange.icon.accentPrimary,
                            fill: n(632079).Tj.orange.icon.accentPrimary
                        } : {
                            color: n(632079).Tj.text.primary,
                            fill: n(632079).Tj.icon.primary
                        },
                        opacity: h ? .4 : void 0,
                        ...T
                    },
                    leftIconStyle: {
                        width: B,
                        height: B,
                        ...o
                    },
                    rightStyle: {
                        display: "flex",
                        alignItems: "center",
                        color: h ? n(632079).Tj.text.primary : n(632079).Tj.text.tertiary,
                        fill: h ? n(632079).Tj.icon.primary : n(632079).Tj.icon.tertiary,
                        flexShrink: 0,
                        marginInlineStart: n(986939).A.isMobile ? 8 : void 0,
                        ...d
                    },
                    rightChevronStyle: {
                        marginInlineStart: 6 * ("tableHeaderMenu" !== I),
                        transition: "transform 200ms ease-in-out",
                        ..._ && {
                            transform: "rotate(90deg)"
                        },
                        ...b
                    }
                }), [u, p, h, o, b, d, T, B, _, I]), {
                    itemRef: P,
                    onKeyDown: E,
                    onFocus: O
                } = (0, n(943019).e)(), N = (0, i.jsx)(n(95582).A, {
                    ref: P,
                    role: "menuitem",
                    icon: null == t ? void 0 : t(H.leftIconStyle),
                    focused: w || !1,
                    disabled: h,
                    title: r,
                    caption: l,
                    shouldWrapTitle: !0,
                    shouldWrapCaption: k,
                    desktopTitleStyle: { ...a.style1,
                        ...C
                    },
                    onKeyDown: E,
                    onFocus: O,
                    disallowTabbing: !1,
                    showDragHandle: x,
                    buttonStyle: H.style,
                    rightStyle: H.rightStyle,
                    isRedOnHover: c,
                    ignoreLocalHoverState: !!h || void 0,
                    right: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: a.style0,
                            children: s
                        }), !h && v ? (0, i.jsx)(n(16275).I, {
                            icon: n(491469).arrowChevronSingleRightSmallIcon,
                            size: "sm",
                            colorVariant: "tableHeaderMenu" === I ? "secondary" : "tertiary",
                            style: H.rightChevronStyle
                        }) : null]
                    }),
                    onClick: m,
                    onMouseDown: f,
                    onMouseEnter: g,
                    onMouseLeave: y,
                    textWrapperStyle: S,
                    desktopIconStyle: M,
                    reducedPadding: e.reducedPadding,
                    shouldShowMobileBackground: D,
                    ...A
                });
                return j ? (0, i.jsx)(n(315384).u, {
                    borderRadius: 6,
                    shape: "square",
                    children: N
                }) : N
            }
        },
        209590: (e, t, n) => {
            n.d(t, {
                Z: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                o = {
                    position: "relative"
                };

            function r(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: r,
                    iconColorVariant: l = "secondary",
                    title: s,
                    variantName: d = "default"
                } = e;
                return t || s ? (0, i.jsxs)(n(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...o
                    },
                    children: [t ? (0, i.jsx)(n(708966).Q, {
                        iconGroup: t,
                        colorPalette: r,
                        colorVariant: l,
                        variantName: d,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, s ? (0, i.jsx)(n(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: a,
                        children: s
                    }) : null]
                }) : null
            }
        },
        213458: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUpRightSquareIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("arrowUpRightSquare", a, "default")
        },
        215746: (e, t, n) => {
            n.d(t, {
                I: () => i,
                w: () => a
            });
            let i = (e, t) => Math.abs(e - t);

            function a(e, t) {
                return Math.sqrt(i(e.x, t.x) ** 2 + i(e.y, t.y) ** 2)
            }
        },
        242912: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightDownSmallIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                a = (0, n(104509).wt)("arrowStraightDownSmall", i, "small")
        },
        245102: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLineDownIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                a = (0, n(104509).wt)("arrowLineDown", i, "default")
        },
        250943: (e, t, n) => {
            n.d(t, {
                E: () => i
            }), n(581454);

            function i(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, n(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let i = (0, n(247438).RQ)(e.getValue()),
                        a = (0, n(247438).xbM)(i, t),
                        {
                            tokensInsideRange: o
                        } = (0, n(247438).AI5)(i, a.startIndex, a.endIndex);
                    return (0, n(536614).r4)(o, e)
                }).join("\n\n")
            }
        },
        262401: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personSlashSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                a = (0, n(104509).wt)("personSlashSmall", i, "small")
        },
        269612: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i({
                billingData: e,
                product: t
            }) {
                return (0, n(722371).Xk)(n(645040).xm, t) ? {
                    addOnFeature: t,
                    for_subscription_tier: (0, n(192159).AI)(e)
                } : {
                    for_subscription_tier: t
                }
            }
        },
        285482: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let i = (0, n(115964).$)(t.clientData);
                    if (i) return "messageValues" in t.clientData ? e.formatMessage(i, t.clientData.messageValues) : e.formatMessage(i)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        289120: (e, t, n) => {
            n.d(t, {
                tF: () => o,
                xQ: () => a
            });
            var i = n(296540);

            function a() {
                let e = (0, i.useContext)(n(786719).t);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: a,
                    register: o
                } = e, r = (0, i.useId)();
                return (0, i.useEffect)(() => o(r), []), !t && a ? [!1, () => a && a(r)] : [!0]
            }

            function o() {
                var e;
                return null === (e = (0, i.useContext)(n(786719).t)) || e.isPresent
            }
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => m,
                KF: () => p,
                LG: () => l,
                Zf: () => d,
                yD: () => s
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                r = i.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: r,
                    preventCaptureSpacebarWhenEmpty: l,
                    ...s
                }, d) {
                    let {
                        left: c,
                        right: u,
                        inputLeft: p,
                        inputRight: m,
                        inputRightStyle: f,
                        disableInput: g,
                        inputOuterStyle: h,
                        rightMobileEditLabel: b,
                        mobileKeyboardOnDismiss: _,
                        style: x,
                        value: w,
                        onChange: S,
                        autosize: k,
                        autosizeMinHeight: M,
                        autosizeMaxHeight: T,
                        customElementAttributes: C,
                        disabled: I,
                        format: A,
                        id: j,
                        placeholder: D,
                        type: B,
                        autoFocus: H,
                        focus: P,
                        focusInitial: E,
                        focusAfterAnimation: O,
                        forceShowClearButton: N,
                        ignoreKeyboardMode: V,
                        inputElementAttributes: R,
                        inputStyle: L,
                        isRightLastElementOfInput: z,
                        maxlength: F,
                        min: U,
                        max: W,
                        selectAll: K,
                        showClearButton: q,
                        suppressFocusRing: $,
                        textarea: G,
                        textareaSubmitOnEnter: Y,
                        onBlur: Z,
                        onCancel: J,
                        onClearButtonClick: Q,
                        onClick: X,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...ei
                    } = s, [ea, eo] = (0, i.useState)(() => !!(P || E));
                    (0, i.useEffect)(() => {
                        void 0 !== P && eo(P)
                    }, [P]);
                    let er = e ? void 0 : n(763230).D_,
                        el = !t || w.length > 0 ? n(763230).D_ : void 0,
                        es = r ? void 0 : n(763230).D_,
                        ed = !l || w.length > 0 ? n(763230).D_ : void 0,
                        ec = (0, n(649476).Tf)(),
                        eu = (0, i.useContext)(n(649476).xu),
                        ep = (0, i.useRef)(null),
                        em = {
                            value: w,
                            onChange: S,
                            autosize: k,
                            autosizeMinHeight: M,
                            autosizeMaxHeight: T,
                            customElementAttributes: C,
                            disabled: I,
                            format: A,
                            id: j,
                            placeholder: D,
                            type: B,
                            autoFocus: H,
                            focus: P,
                            focusInitial: E,
                            focusAfterAnimation: O,
                            forceShowClearButton: N,
                            ignoreKeyboardMode: V,
                            inputElementAttributes: R,
                            inputStyle: L,
                            isRightLastElementOfInput: z,
                            maxlength: F,
                            min: U,
                            max: W,
                            selectAll: K,
                            showClearButton: q,
                            suppressFocusRing: $,
                            textarea: G,
                            textareaSubmitOnEnter: Y,
                            onBlur: Z,
                            onCancel: J,
                            onClearButtonClick: Q,
                            onClick: X,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, a.jsx)(n(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: n(763230).D_,
                        onTab: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: es,
                        onCopy: es,
                        onPaste: es,
                        onKeypress: n(763230).D_,
                        onLeft: er,
                        onRight: er,
                        onDelete: el,
                        onBackspace: el,
                        onSpace: ed,
                        children: n(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(n(636518).Ay, {
                                ref: d,
                                ...ei,
                                itemMarginLeft: ec ? 8 : void 0,
                                style: x,
                                title: (0, a.jsx)(v, {
                                    ref: ep,
                                    left: c,
                                    right: u,
                                    inputLeft: p,
                                    inputRight: m,
                                    inputRightStyle: f,
                                    disableInput: g,
                                    inputOuterStyle: h,
                                    rightMobileEditLabel: b,
                                    isFocused: ea,
                                    setIsFocused: eo,
                                    ...em
                                })
                            }), (0, a.jsx)(n(368678).P, {
                                show: ea && eu.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: _,
                                inputRef: ep
                            })]
                        }) : (0, a.jsx)(n(636518).Ay, {
                            ref: d,
                            ...ei,
                            left: c,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(y, {
                                ref: ep,
                                disableInput: g,
                                inputOuterStyle: h,
                                inputRight: m,
                                inputRightStyle: f,
                                inputLeft: p,
                                ...em
                            }),
                            style: { ...o,
                                ...x
                            }
                        })
                    })
                }),
                l = 30,
                s = 28;

            function d(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: n(632079).Tj.icon.secondary,
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let c = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                u = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, n(533992).WS)(),
                    i = (0, n(960253).I)(() => ({
                        outlineButton: { ...(0, n(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: n(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? n(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...i.outlineButton,
                        ...e.style,
                        height: t ? l : s,
                        width: t ? l : s
                    },
                    hoveredStyle: c.outlineButtonHovered,
                    pressedStyle: i.outlineButtonPressed
                })
            }
            let m = r,
                f = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function g({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let o = (0, n(533992).v3)(),
                    r = (0, i.useCallback)(e => {
                        e.preventDefault();
                        let i = t.current;
                        i && (0, n(862215).G)(o, i)
                    }, [o, t]);
                return (0, a.jsx)(n(64960).Ay, {
                    onClick: r,
                    style: f.style0,
                    children: e
                })
            }
            let y = i.forwardRef(function(e, t) {
                    let {
                        disabled: i,
                        disableInput: o,
                        inputOuterStyle: r,
                        inputRight: l,
                        inputRightStyle: s,
                        inputLeft: d,
                        min: c,
                        textarea: u,
                        ...p
                    } = e;
                    return (0, a.jsx)(n(36481).p, { ...p,
                        ref: t,
                        disabled: i || o,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...r
                        },
                        left: d,
                        right: l,
                        rightStyle: s,
                        min: c,
                        textarea: u
                    })
                }),
                h = {
                    fontSize: 16
                },
                v = i.forwardRef(function(e, t) {
                    let {
                        left: o,
                        right: r,
                        inputLeft: l,
                        inputRight: s,
                        inputRightStyle: d,
                        disableInput: c,
                        inputOuterStyle: u,
                        rightMobileEditLabel: p,
                        isFocused: m,
                        setIsFocused: f,
                        disabled: y,
                        showClearButton: v,
                        onBlur: b,
                        onFocus: _,
                        ...x
                    } = e, w = (0, i.useCallback)(e => {
                        f(!1), b && b(e)
                    }, [b, f]), S = (0, i.useCallback)(e => {
                        f(!0), _ && _(e)
                    }, [_, f]), k = (0, i.useRef)(null), M = (0, n(421573).A)(k, t), T = p && !m ? (0, a.jsx)(g, {
                        rightMobileEditLabel: p,
                        inputRef: k
                    }) : null;
                    return (0, a.jsx)(n(36481).p, { ...x,
                        ref: M,
                        format: "transparent",
                        style: { ...h,
                            ...u
                        },
                        onFocus: S,
                        onBlur: w,
                        showClearButton: !1 !== v,
                        disabled: y || c,
                        left: l || o,
                        right: T || s || r,
                        rightStyle: d
                    })
                })
        },
        314084: (e, t, n) => {
            n.d(t, {
                t: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function o(e) {
                let {
                    children: t,
                    footer: o,
                    header: r,
                    showDismissButton: l = !0,
                    sizeRange: s,
                    gap: d = 24
                } = e;
                return (0, i.jsxs)(n(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == s ? void 0 : s.minHeight,
                    maxHeight: null == s ? void 0 : s.maxHeight,
                    minWidth: null == s ? void 0 : s.minWidth,
                    maxWidth: null == s ? void 0 : s.maxWidth,
                    gap: d,
                    style: a,
                    className: "autolayout-fill-width",
                    children: [(0, i.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: r
                    }), t ? (0, i.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, i.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, o ? (0, i.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: o
                    }) : null, l ? (0, i.jsx)(n(226512).R, {}) : null]
                })
            }
        },
        315384: (e, t, n) => {
            n.d(t, {
                u: () => a
            });
            let i = new(n(815048)).O2("PulsingWrapper", async () => n.e(45248).then(n.bind(n, 593830))),
                a = (0, n(815048).jQ)(i, e => e.PulsingWrapper, {
                    renderLoading: (e, t) => t.children
                })
        },
        321412: (e, t, n) => {
            n.d(t, {
                b: () => s
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: n(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function r({
                itemId: e,
                itemRef: t
            }) {
                let l = (0, n(533992).v3)(),
                    s = (0, i.useContext)(n(700587).U),
                    d = (0, n(682985).K8)(() => n(488301).J.state.highlightedSetting === e, [e]);
                return (0, i.useEffect)(() => {
                    d && t.current && (0, n(341471).h)({
                        element: t.current,
                        environment: l,
                        scrollerContext: s,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [d, l, t, s]), (0, a.jsx)(n(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!d,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: o.highlight
                })
            }
            let l = {
                flex: 3,
                minWidth: 200
            };

            function s({
                id: e,
                title: t,
                titleId: o,
                byline: d,
                bylineId: c,
                item: u,
                badge: p,
                layout: m = "inline"
            }) {
                let f = (0, i.useRef)(null),
                    g = (0, n(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === m ? {
                                flexDirection: "column"
                            } : {
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        settingItem: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            ..."stacked" === m ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [m]);
                return (0, a.jsxs)("div", {
                    ref: f,
                    style: g.settingContainer,
                    children: [(0, a.jsx)("div", {
                        style: l,
                        children: (0, a.jsx)(n(741489).j, {
                            title: t,
                            titleId: o,
                            byline: d,
                            bylineId: c,
                            badge: p
                        })
                    }), (0, a.jsx)("div", {
                        style: g.settingItem,
                        children: u
                    }), (0, a.jsx)(r, {
                        itemId: e,
                        itemRef: f
                    })]
                })
            }
        },
        321753: (e, t, n) => {
            n.d(t, {
                A: () => r,
                n: () => o
            });
            var i = n(296540),
                a = n(474848);

            function o(e) {
                return (0, n(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: n(632079).Tj.text.inverseSecondary
                    },
                    tooltipAvatarContainer: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineEnd: 8
                    },
                    tooltipContainer: {
                        display: "flex",
                        flexDirection: "row",
                        padding: "4px 6px",
                        alignItems: "center",
                        ...e
                    },
                    tooltipUserInfoContainer: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }), [e])
            }
            let r = function(e) {
                let {
                    hasTooltip: t,
                    showAvatarInTooltip: r,
                    tooltipHeader: l,
                    style: s,
                    iconStyle: d,
                    isOffline: c,
                    borderStyle: u,
                    avatarShouldShowShadow: p,
                    initialOverrideStyle: m,
                    tooltipOverrideStyle: f,
                    userValue: g,
                    userStore: y,
                    avatar: h,
                    type: v = "avatar",
                    delayThreshold: b,
                    hasPersonHoverCard: _,
                    personHoverCardEntrypoint: x = "avatar",
                    avatarOutlineOffset: w
                } = e, S = (0, n(109939).tz)(), k = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), M = (0, n(67499).S)(), T = (0, n(682985).K8)(() => (0, n(888).$)(M) ? ? k, [M, k]), C = e.size ? ? 18, {
                    initialStyle: I,
                    avatarWrapStyle: A,
                    avatarStyle: j,
                    proxiedImageStyle: D,
                    suspendedUserStyle: B,
                    deletedUserStyle: H
                } = (0, n(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${C}px`,
                        width: C,
                        height: C,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * C, 11),
                        background: n(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        isolation: "auto",
                        ...d,
                        ...m
                    },
                    avatarWrapStyle: {
                        background: n(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: p ? n(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: u ? ? "solid",
                        outlineColor: n(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: w ? ? -1,
                        ...d
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: C,
                        height: C,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: c ? .3 : 1,
                        ...d
                    },
                    proxiedImageStyle: {
                        width: C,
                        height: C,
                        ...d
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: C - 2,
                        height: C - 2,
                        overflow: "hidden",
                        background: n(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.text.primary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...d
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: C,
                        height: C,
                        overflow: "hidden",
                        background: n(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        ...d
                    }
                }), [m, p, u, c, C, d, w]), {
                    tooltipTextStyle: P,
                    tooltipAvatarContainer: E,
                    tooltipContainer: O,
                    tooltipUserInfoContainer: N
                } = o(f), V = (0, i.useMemo)(() => y ? ? (g ? n(993189).Bj6.fromValue(n(832375).oo9, g) : void 0), [y, g]), R = (0, i.useMemo)(() => V instanceof n(807825).L ? V : T && V ? n(807825).L.createChildStore(T, {
                    id: V.id,
                    table: n(832375).oo9
                }) : void 0, [V, T]), L = (0, n(682985).K8)(() => null == V ? void 0 : V.getFullName(S), [V, S]), z = (0, n(682985).K8)(() => null == V ? void 0 : V.getDisplayName(S), [V, S]), F = (0, n(682985).K8)(() => null == V ? void 0 : V.getEmail(), [V]), U = (0, n(682985).K8)(() => null == V ? void 0 : V.getProfilePhoto(), [V]), W = (0, n(682985).K8)(() => null == V ? void 0 : V.getIsSuspended(), [V]), K = (0, n(682985).K8)(() => null == V ? void 0 : V.getIsDeleted(), [V]), q = (0, n(525272).E)({
                    spaceStore: T,
                    viewedUserId: null == V ? void 0 : V.id
                }) && _, $ = () => e.defaultAvatar ? ? (0, a.jsx)(n(16275).I, {
                    icon: n(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), G = (e, t, i) => {
                    if (!e) return $();
                    let o = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...i
                    };
                    return (0, a.jsx)(n(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: o,
                        placeholderStyle: o
                    })
                }, Y = e => (0, a.jsxs)("div", {
                    style: O,
                    children: [(0, a.jsx)("div", {
                        style: E,
                        children: J()
                    }), (0, a.jsxs)("div", {
                        style: N,
                        children: [V ? z : null == h ? void 0 : h.name, e ? void 0 : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("br", {}), V ? (0, a.jsx)("span", {
                                style: P,
                                children: F
                            }) : null != h && h.email ? (0, a.jsx)("span", {
                                style: P,
                                children: null == h ? void 0 : h.email
                            }) : null]
                        })]
                    })]
                }), Z = e => {
                    let t = n(871871).PE(e)[0].toUpperCase();
                    return (0, a.jsx)("div", {
                        style: A,
                        children: (0, a.jsx)("div", {
                            style: I,
                            children: (0, a.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, J = () => {
                    if (W && V) return (0, a.jsx)("div", {
                        style: A,
                        children: (0, a.jsx)("div", {
                            style: B,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(67207).personSlashIcon,
                                size: C - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (K) return (0, a.jsx)("div", {
                        style: A,
                        children: (0, a.jsx)("div", {
                            style: H,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (V) {
                        if (U) return (0, a.jsx)("div", {
                            style: j,
                            children: (0, a.jsx)(n(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: U,
                                isAuthenticated: !1,
                                width: Math.max(Number(D.width), 120),
                                render: (e, t) => G(t, L, A)
                            })
                        });
                        else if (L) return Z(L);
                        else if (F) return Z(F)
                    } else if (h) {
                        if (!h.type && h.avatarUrl) return (0, a.jsx)("div", {
                            style: A,
                            children: (0, a.jsx)("div", {
                                style: j,
                                children: G(h.avatarUrl, h.name)
                            })
                        });
                        else if (h.name) return Z(h.name);
                        else if (h.email) return Z(h.email)
                    }
                    return $()
                };
                switch (v) {
                    case "avatar":
                        {
                            let e = (0, a.jsx)("div", {
                                style: s,
                                children: J()
                            });
                            if (q && R && T) return (0, a.jsx)(n(532755).D, {
                                userStore: R,
                                spaceStore: T,
                                from: x,
                                children: e
                            });
                            if (t) return (0, a.jsx)(n(51831).m, {
                                content: () => r ? Y() : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: l
                                    }), z, (0, a.jsx)("br", {}), V ? (0, a.jsx)("span", {
                                        style: P,
                                        children: F
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: b,
                                children: t => (0, a.jsx)("div", {
                                    style: s,
                                    "aria-label": z,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return Y("avatar-name" === v);
                    default:
                        (0, n(722371).HB)(v)
                }
            }
        },
        322095: (e, t, n) => {
            function i(e, t) {
                return e.map(e => a(e, t))
            }

            function a(e, t) {
                var i, a;
                let o, {
                        nameMessage: r,
                        descriptionMessage: l,
                        ...s
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (i = e, a = t, o = (0, n(599412).H)(a), i.sources[o] || i.sources[n(599412).q]);
                return { ...s,
                    id: r.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(r),
                    description: l ? t.formatMessage(l) : void 0
                }
            }
            n.d(t, {
                B: () => a,
                o: () => i
            }), n(581454)
        },
        337439: (e, t, n) => {
            n.d(t, {
                p: () => i
            });
            async function i() {
                return (await n.e(32675).then(n.bind(n, 271417))).navigateToLibraryPage
            }
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => r
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function r(e) {
                let {
                    onDismiss: t,
                    inputRef: r
                } = e, l = (0, n(533992).Y0)(), s = (0, i.useRef)(null), d = l.isMobileNative && l.isIOS, c = d && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => s.current,
                    isShown: () => c
                }), [c]);
                let u = (0, n(571354).n)(),
                    p = (0, i.useCallback)(() => {
                        var e;
                        null == r || null == (e = r.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [r, t]);
                if (!d) return null;
                let m = c ? -(n(247800).j + u) : 0;
                return (0, a.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, a.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${m}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: s,
                        children: (0, a.jsx)(n(64960).Ay, {
                            style: o.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        372181: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => a,
                infoCircleSmallIcon: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 4.425a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M6.95 6.5a.625.625 0 1 0 0 1.25h.425V10H6.95a.625.625 0 1 0 0 1.25h2.1a.625.625 0 1 0 0-1.25h-.425V7.125A.625.625 0 0 0 8 6.5z"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("infoCircleSmall", a, "small")
        },
        372365: (e, t, n) => {
            n.r(t), n.d(t, {
                clockSmallIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 3.955a.625.625 0 0 0-.625.625v2.795H5.12a.625.625 0 1 0 0 1.25H8c.345 0 .625-.28.625-.625V4.58A.625.625 0 0 0 8 3.955"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("clockSmall", a, "small")
        },
        375592: (e, t, n) => {
            n.d(t, {
                T: () => i
            });
            let i = new(n(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            n(202146).exposeDebugValue("ExternalOrgDataStore", i)
        },
        380559: (e, t, n) => {
            n.d(t, {
                u: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function o(e) {
                let {
                    size: t
                } = e;
                return (0, i.jsx)("span", {
                    style: a,
                    children: (0, i.jsx)(n(16275).I, {
                        icon: n(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function r(e) {
                var t, a;
                let {
                    isTablet: r
                } = (0, n(533992).Y0)(), l = (0, n(853284).U)(), s = (0, n(665002).g)(), d = n(986939).A.isMobile ? (0, n(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (a = e.style) ? void 0 : a.paddingInlineStart : 10) : void 0, c = (0, n(960253).I)(() => {
                    let t = n(986939).A.isMobile ? {
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
                            height: n(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, n(153262).ic)()
                        },
                        i = n(986939).A.isMobile ? 24 : e.isLibrary ? n(132261).FD : n(132261).ry;
                    return {
                        wrapper: { ...t,
                            ...e.style,
                            ...s && {
                                transition: "none"
                            }
                        },
                        icon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: n(986939).A.isMobile ? 28 : 22,
                            height: n(986939).A.isMobile ? 24 : 18,
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
                            color: n(632079).Tj.text.secondary,
                            width: i,
                            height: i,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: l ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !n(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [r, d, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, l, s]);
                return (0, i.jsxs)("div", {
                    role: e.role,
                    dir: (0, n(619157).A1)() ? "rtl" : "ltr",
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
                    children: [e.left ? (0, i.jsx)("div", {
                        style: c.left,
                        children: e.left
                    }) : void 0, e.icon ? (0, i.jsxs)("div", {
                        style: c.icon,
                        children: [e.icon, e.isAlias ? (0, i.jsx)(o, {
                            size: "xs"
                        }) : void 0]
                    }) : void 0, (0, i.jsx)("div", {
                        style: c.children,
                        children: e.children
                    }), e.right ? (0, i.jsx)("div", {
                        style: c.right,
                        children: e.right
                    }) : void 0]
                })
            }
        },
        388400: (e, t, n) => {
            n.d(t, {
                Bu: () => c,
                I8: () => d,
                qw: () => s
            }), n(898992), n(354520), n(803949);
            let i = /[\u4E00-\u9FA5]/g,
                a = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                o = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                r = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                l = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function s(e) {
                return (0, n(381453).oE)(e.split(l))
            }

            function d(e) {
                return "none" === c(e) ? s(e).length : e.length
            }

            function c(e, t) {
                let n = !!e.match(r);
                return e.match(i) || e.match(a) || n ? n ? "ko" : e.match(o) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, n) => {
            function i(e) {
                return "on" === function(e) {
                    let {
                        disableExposureLogging: t
                    } = e;
                    return n(218744).default.checkGate({
                        gateName: "force_enable_script_agent",
                        disableExposureLogging: t
                    }) ? "on" : n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_script_agent",
                        defaultGroup: "control",
                        disableExposureLogging: t,
                        enableEventTrailLogging: !0
                    })
                }(e)
            }

            function a(e = {}) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => i({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => a,
                p: () => i
            })
        },
        394673: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(581454);
            var i = n(296540),
                a = n(474848);
            let o = {
                skeletonRect: {
                    borderRadius: 4,
                    backgroundColor: n(632079).Tj.background.tertiaryTranslucent
                }
            };

            function r({
                paragraphs: e
            }) {
                let t = null == e ? void 0 : e.map((e, t) => {
                    let r = {
                            height: e.lineHeight,
                            marginTop: e.lineMargin,
                            marginBottom: e.lineMargin
                        },
                        l = {
                            marginTop: e.sectionMargin,
                            marginBottom: e.sectionMargin
                        },
                        s = [...Array(e.repeat || 1)].map((t, i) => (0, a.jsx)("div", {
                            style: l,
                            children: e.sectionWidths.map((e, t) => (0, a.jsx)(n(795830).P, {
                                style: { ...o.skeletonRect,
                                    ...r,
                                    width: `${e}%`
                                }
                            }, t))
                        }, i));
                    return (0, a.jsxs)(i.Fragment, {
                        children: [" ", s, " "]
                    }, t)
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [" ", t, " "]
                })
            }
        },
        398879: (e, t, n) => {
            n.d(t, {
                EG: () => r,
                K5: () => o,
                RH: () => a,
                Yi: () => l,
                ls: () => i
            });
            let i = 32,
                a = 202,
                o = 1e3,
                r = "Want to add a metric? Look for 'src/client/performanceToolbar/config.ts' in notion-next.",
                l = "To disable the toolbar entirely, go to the 'Experiments' panel and look for the 'performance_debugging_toolbar' flag."
        },
        405072: (e, t, n) => {
            n.d(t, {
                J: () => i
            });

            function i(e) {
                var t;
                let {
                    isMobileNative: i,
                    isAndroid: a
                } = e, o = n(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), r = null == (t = (0, n(663250).getMobileNativeDeviceInfo)()) ? void 0 : t.mobileNativeAndroidApiLevel;
                return o && i && a && "number" == typeof r && r >= 33
            }
        },
        407998: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    billingData: a,
                    externalOrgSummary: o
                } = e;
                return (0, n(192159).N8)(a) ? "sales_assisted" : i && (0, n(208117).H)({
                    environment: t,
                    externalOrgSummary: o,
                    spaceStore: i,
                    billingData: a
                }) && !(0, n(556306).h)(i) ? "sales_eligible" : "self_serve"
            }
        },
        413630: (e, t, n) => {
            n.d(t, {
                LN: () => f,
                Qh: () => s,
                Qs: () => c,
                gc: () => g,
                hL: () => r,
                m: () => m,
                rV: () => p
            }), n(57145), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(581454);
            var i = n(296540);
            let a = new Set(["Joined"]);

            function o(e) {
                let {
                    teamTypes: t
                } = e, a = (0, n(533992).v3)(), o = (0, n(682985).K8)(() => {
                    var t;
                    return e.userId ? ? (null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id)
                }, [e.userId]), r = (0, n(682985).K8)(() => e.spaceStore ? ? (0, n(328765).S)(), [e.spaceStore]);
                return (0, i.useEffect)(() => {
                    void 0 !== o && void 0 !== r && (0, n(455205).fetchUnfetchedTeams)({
                        userId: o,
                        spaceId: r.id,
                        teamTypes: t,
                        environment: a,
                        canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                        sort: null == e ? void 0 : e.sort
                    })
                }, [o, r, t, a, null == e ? void 0 : e.canTruncateRecordMap, null == e ? void 0 : e.sort]), (0, n(682985).K8)(() => {
                    if (void 0 === o || void 0 === r) return {
                        teams: [],
                        isLoading: !0,
                        isError: !1
                    };
                    let {
                        teams: e,
                        isLoading: i,
                        isError: a
                    } = n(988752).E.readTeams(o, r.id, t);
                    return {
                        teams: e,
                        isLoading: i,
                        isError: a
                    }
                }, [o, r, t], {
                    equalityFn: n(795676).k
                })
            }

            function r(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return o({
                    userId: t,
                    spaceStore: n,
                    teamTypes: a
                })
            }
            let l = new Set(["UnjoinedActive"]);

            function s(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return o({
                    userId: t,
                    spaceStore: n,
                    teamTypes: l,
                    canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                    sort: null == e ? void 0 : e.sort
                })
            }
            let d = new Set(["Joined", "UnjoinedActive"]);

            function c(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return o({
                    userId: t,
                    spaceStore: n,
                    teamTypes: d
                })
            }
            let u = new Set(["Joined", "UnjoinedActive", "Archived"]);

            function p(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return o({
                    userId: t,
                    spaceStore: n,
                    teamTypes: u
                })
            }

            function m(e) {
                let {
                    userId: t,
                    spaceStore: a
                } = e, {
                    teams: o,
                    isLoading: l,
                    isError: s
                } = r({
                    userId: t,
                    spaceStore: a
                }), d = (0, n(682985).K8)(() => {
                    var e;
                    return new Map(((null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getJoinedTeams()) ? ? []).map((e, t) => [e, t]))
                }, []);
                return {
                    teams: (0, i.useMemo)(() => o.toSorted((e, t) => (d.get(e.id) ? ? 1 / 0) - (d.get(t.id) ? ? 1 / 0)), [o, d]),
                    isLoading: l,
                    isError: s
                }
            }

            function f(e) {
                let {
                    spaceStore: t,
                    shouldCreateTeamStores: i
                } = e, {
                    teams: a
                } = m(e);
                return {
                    teams: (0, n(682985).K8)(() => t && i ? a.map(e => (0, n(455205).getTeamStore)({
                        teamId: e.id,
                        spaceStore: t
                    })) : [], [a, t, i]),
                    metadata: a
                }
            }

            function g(e) {
                let {
                    teams: t
                } = e, i = (0, n(682985).K8)(() => e.spaceStore ? ? (0, n(328765).S)(), [e.spaceStore]);
                return i ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: a
                }) => ({
                    store: (0, n(455205).getTeamStore)({
                        teamId: e,
                        spaceStore: i
                    }),
                    type: t,
                    membershipSummary: a
                })) : []
            }
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => r,
                R2: () => d,
                WF: () => s,
                bZ: () => l,
                cE: () => a,
                jX: () => o,
                rz: () => c
            });
            var i = () => n(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let o = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function r(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(o, e))
            }

            function l() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (i().n4(e, t)) return !0;
                return !1
            }
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    collectionViewStore: a,
                    property_type: o,
                    from: r,
                    property: l
                } = e;
                (0, n(33918).G)(t, {
                    property: l,
                    property_type: o,
                    from: r,
                    collection_id: null == i ? void 0 : i.id,
                    collection_view_id: null == a ? void 0 : a.id
                })
            }
        },
        432155: (e, t, n) => {
            n.d(t, {
                Af: () => x,
                Bw: () => S,
                Cs: () => f,
                Oq: () => d,
                Re: () => u,
                X4: () => c,
                YJ: () => b,
                Yc: () => l,
                ZB: () => _,
                Zd: () => w,
                d2: () => p,
                dd: () => y,
                gg: () => s,
                in: () => m,
                kQ: () => v
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(737550);
            var i = () => n(180139),
                a = () => n(697006),
                o = () => n(832375),
                r = () => n(247438);
            let l = "reset_user_selected_model";

            function s(e) {
                let {
                    userChatPreference: t,
                    isStatsigInitialized: n,
                    shouldResetUserSelectedModel: i
                } = e;
                if (!((t.version ? ? 0) >= 1) && n) return { ...i && void 0 !== t.model ? {
                        model: void 0
                    } : {},
                    version: 1
                }
            }

            function d(e, t) {
                let i = n(57168).UserChatPreferenceLocalStorageStore.getState();
                n(57168).UserChatPreferenceLocalStorageStore.setState({ ...i,
                    [e]: { ...null == i ? void 0 : i[e],
                        ...t
                    }
                })
            }

            function c(e) {
                return e.some(e => "in_progress" === e.status)
            }

            function u(e) {
                return e.some(e => "complete" === e.status && "risky" === e.attachmentRisk)
            }

            function p(e, t) {
                let n = r().w9s(e),
                    i = ((null == t ? void 0 : t.length) ? ? 0) > 0;
                return !n || i
            }

            function m(e) {
                let t = f({
                    config: e,
                    includeWeb: !1
                });
                return 1 === t.length ? t[0] : void 0
            }

            function f(e) {
                let {
                    config: t,
                    includeWeb: i
                } = e, a = [];
                if ("search" === t.type) a.push(t.scopeForNextSearch);
                else if ("researcher" === t.type && t.searchScope) a.push(t.searchScope);
                else {
                    if ("workflow" !== t.type) return [];
                    a.push(...(0, n(548161).n_)({
                        config: t,
                        modules: []
                    }) ? ? [])
                }
                return i && t.useWebSearch && a.push({
                    type: "web"
                }), a
            }

            function g(e) {
                let {
                    botId: t,
                    spaceStore: i
                } = e, a = (0, n(203462).zf)(i.environment).getData(i.environment, {
                    spaceId: i.id
                });
                if (a)
                    for (let e of a.agents) {
                        var o;
                        let n = e.getDraftData();
                        if ((null == n || null == (o = n.runtime_actor_pointer) ? void 0 : o.table) === "bot" && n.runtime_actor_pointer.id === t) return e.id
                    }
            }

            function y(e, t, l) {
                if (!e) return [];
                let s = r().moK(e),
                    d = r().Fbh(e).map(e => ({
                        table: o().oo9,
                        id: e
                    })),
                    c = r().jgW(e);
                return [...s, ...d, ...t && l ? c.map(e => {
                    if ((0, a().ut)(e)) return {
                        table: o().C0E,
                        id: i().Lj,
                        spaceId: t.id
                    };
                    let n = g({
                        spaceStore: t,
                        botId: e
                    });
                    if (n) return {
                        table: o().C0E,
                        id: n,
                        spaceId: t.id
                    }
                }).filter(n(722371).O9) : []]
            }

            function h(e, t) {
                let i = new Set(e.map(e => n(496282).L3.toIdTableKey(e))),
                    a = new Set(t.map(e => n(496282).L3.toIdTableKey(e))),
                    o = t.filter(e => !i.has(n(496282).L3.toIdTableKey(e)));
                return {
                    added: o,
                    removed: e.filter(e => !a.has(n(496282).L3.toIdTableKey(e))),
                    unchanged: e.filter(e => a.has(n(496282).L3.toIdTableKey(e)))
                }
            }

            function v(e) {
                let t, i, {
                        currentTextMentionPointers: a,
                        inputMentionPointers: o,
                        allMentionPointers: r
                    } = e,
                    {
                        added: l
                    } = h(Array.from(r), a),
                    {
                        removed: s,
                        unchanged: d
                    } = h(o, a),
                    c = l.length > 0,
                    u = s.length > 0;
                if (c || u) {
                    let e = Array.from(r);
                    if (u) {
                        let t = new Set(s.map(e => n(496282).L3.toIdTableKey(e)));
                        e = e.filter(e => !t.has(n(496282).L3.toIdTableKey(e)))
                    }
                    c && (e = [...e, ...l]), t = e, i = [...d, ...l]
                }
                return {
                    newMentionPointers: t,
                    newInputMentionPointers: i
                }
            }

            function b(e, t) {
                return (0, n(381453).n4)(e, t)
            }

            function _(e) {
                return !!e && ("workspace" === e.type || "teamspace" === e.type || "collection" === e.type || "page" === e.type)
            }

            function x(e) {
                let {
                    currentScopes: t,
                    scope: n,
                    isMultiScopeEnabled: i
                } = e, a = [];
                if ("everything" === n.type) a = [{
                    type: "everything"
                }];
                else if (i) {
                    let e = t.filter(e => "everything" !== e.type);
                    a = e.some(e => b(e, n)) ? e.filter(e => !b(e, n)) : "notion" === n.type ? [...e.filter(e => !_(e)), n] : _(n) ? [...e.filter(e => "notion" !== e.type), n] : [...e, n]
                } else a = [n];
                return 0 === a.length ? [{
                    type: "everything"
                }] : a
            }

            function w(e, t) {
                switch (e.type) {
                    case "workflow":
                        return { ...e,
                            searchScopes: t
                        };
                    case "search":
                        return { ...e,
                            scopeForNextSearch: t[0]
                        };
                    case "researcher":
                        return { ...e,
                            searchScope: t[0]
                        };
                    default:
                        return e
                }
            }

            function S(e) {
                let {
                    token: t,
                    pointer: n,
                    spaceStore: l,
                    userStore: s
                } = e;
                if (!r().qXl(t)) return !1;
                for (let e of r().uPN(t))
                    if (n.table === o().oo9 && r().rie(e)) {
                        if (r().NcG(e) === n.id) return !0
                    } else if (n.table === o().evP && r().jIt(e)) {
                    let t = r().i$F(e);
                    if (t && t.id === n.id) return !0
                } else if (n.table === o().C0E && r().XkZ(e)) {
                    let t = r().vjW(e);
                    if (t && (0, a().ut)(t) && n.id === i().Lj || t && l && s && g({
                            spaceStore: l,
                            botId: t
                        }) === n.id) return !0
                }
                return !1
            }
        },
        432705: (e, t, n) => {
            function i(e) {
                return "event" === e || "recurrence" === e
            }

            function a(e) {
                let t = e.getTrigger();
                return (0, n(722371).O9)(t) && i(t.type)
            }

            function o(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, n(722371).HB)(e)
            }
            n.d(t, {
                $X: () => a,
                H8: () => o,
                x2: () => i
            })
        },
        435276: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(972740).L)(),
                    {
                        spaceId: a,
                        spaceName: o
                    } = (0, n(682985).K8)(() => i ? {
                        spaceId: i.getSpaceId(),
                        spaceName: (0, n(742197).G)(t, i)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, i]),
                    [{
                        value: r,
                        status: l
                    }] = (0, n(97668).Yb)(async () => {
                        if (!a) return;
                        let i = await (0, n(124094).E)(t, a, e);
                        if (i) return o && (0, n(124094).Z)({
                            environment: t,
                            spaceName: o,
                            campaign: i,
                            entrypoint: e
                        }), i
                    }, [t, a, o, e]);
                return {
                    campaign: r,
                    loading: "pending" === l || "idle" === l
                }
            }
        },
        451199: (e, t, n) => {
            n.d(t, {
                A: () => r,
                p: () => o
            });
            var i = n(296540),
                a = n(474848);
            let o = 8,
                r = i.forwardRef(function({
                    isSelected: e,
                    radioButtonColor: t = "blue"
                }, i) {
                    let {
                        radioButtonStyle: r,
                        dotStyle: l
                    } = (0, n(960253).I)(() => {
                        let i = "blue" === t ? n(632079).Tj.blue.icon.accentPrimary : n(632079).Tj.red.icon.accentPrimary;
                        return {
                            radioButtonStyle: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                width: 16,
                                height: 16,
                                borderRadius: 16,
                                marginInlineEnd: o,
                                background: e ? i : n(632079).Tj.whiteButtonBackground,
                                border: e ? "none" : `1px solid ${n(632079).Tj.border.strongTranslucent}`,
                                transition: "background 100ms ease-out"
                            },
                            dotStyle: {
                                width: 6,
                                height: 6,
                                borderRadius: 6,
                                background: n(632079).Tj.text.inversePrimary,
                                transition: "opacity 100ms ease-out",
                                opacity: +!!e
                            }
                        }
                    }, [e, t]);
                    return (0, a.jsx)("div", {
                        ref: i,
                        style: r,
                        children: (0, a.jsx)("div", {
                            style: l
                        })
                    })
                })
        },
        455205: (e, t, n) => {
            n.r(t), n.d(t, {
                FETCHABLE_TEAM_TYPES: () => r,
                fetchUnfetchedTeams: () => s,
                fetchUnfetchedTeamsFromLocalStorage: () => c,
                getActiveTeamsMetadataForUserInSpace: () => p,
                getAllTeamsMetadataForUserInSpace: () => m,
                getTeamMetadataFromStore: () => g,
                getTeamStore: () => f,
                refetchTeams: () => d
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520);
            var i = () => n(988752);
            async function a(e) {
                let {
                    actorUserId: t,
                    targetUserId: i,
                    spaceId: a,
                    teamTypes: o,
                    teamIds: r,
                    environment: l
                } = e;
                if (!(0, n(422280).GL)({
                        actorUserId: t,
                        targetUserId: i,
                        teamTypes: o
                    })) throw new(n(101787)).qQk("User does not have permission to fetch teams for another user.");
                let s = await l.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: l,
                    data: {
                        spaceId: a,
                        teamTypes: Array.from(o),
                        teamIds: "all" === r ? void 0 : Array.from(r),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, n(958692).X7)() && void 0,
                        targetUserId: i
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" === s.type) throw s.error;
                let {
                    teams: d,
                    hasUnjoinedActiveTeams: c
                } = s.data;
                return {
                    teams: d,
                    ...void 0 !== c && {
                        hasUnjoinedActiveTeams: c
                    }
                }
            }
            let o = new(n(245541)).R({
                    key: "localStorageTeams",
                    namespace: n(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                r = ["Joined", "UnjoinedActive", "Archived"];
            async function l(e) {
                let {
                    userId: t,
                    spaceId: r,
                    teamTypesToUpdate: l,
                    teamIdsToUpdate: s,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                } = e, p = i().E.getOrCreateUnit(t, r);
                if (0 === l.size || "all" !== s && 0 === s.size) return void await p.pendingUpdates;
                let m = a({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: r,
                    teamTypes: l,
                    teamIds: s,
                    environment: d,
                    canTruncateRecordMap: c,
                    sort: u
                });
                i().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: r,
                        fetchedTeamsPromise: m,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: l,
                        teamIdsToUpdate: s
                    }), await p.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: i,
                            teamsResponse: a
                        } = e;
                        if (!n(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: r
                        } = a, l = r.filter(e => "Joined" === e.type), s = r.filter(e => "UnjoinedActive" === e.type), d = r.filter(e => "Archived" === e.type), c = l.concat(s, d).slice(0, 1e3);
                        o.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [i] : { ...a,
                                    teams: c
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: r,
                        teamsResponse: {
                            teams: Object.values(p.teams),
                            hasUnjoinedActiveTeams: p.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function s(e) {
                let {
                    userId: t,
                    spaceId: n,
                    teamTypes: a,
                    environment: o,
                    canTruncateRecordMap: r,
                    sort: s
                } = e, d = i().E.getOrCreateUnit(t, n), c = new Set(Array.from(a.values()).filter(e => "server" !== d.lastFetchSourceOfTeamType[e]));
                await l({
                    userId: t,
                    spaceId: n,
                    teamTypesToUpdate: c,
                    teamIdsToUpdate: "all",
                    environment: o,
                    canTruncateRecordMap: r,
                    sort: s
                })
            }
            async function d(e) {
                let {
                    userId: t,
                    spaceId: n,
                    teamIds: a,
                    environment: o
                } = e, s = i().E.getOrCreateUnit(t, n), d = new Set(r.filter(e => "server" === s.lastFetchSourceOfTeamType[e]));
                await l({
                    userId: t,
                    spaceId: n,
                    teamTypesToUpdate: d,
                    teamIdsToUpdate: a,
                    environment: o
                })
            }

            function c() {
                let e = o.getState();
                for (let t in e)
                    for (let n in e[t]) {
                        let a = i().E.getOrCreateUnit(t, n),
                            o = new Set(r.filter(e => "none" === a.lastFetchSourceOfTeamType[e]));
                        0 !== o.size && i().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: n,
                            fetchedTeamsPromise: Promise.resolve(e[t][n]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: o,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    teamTypes: a,
                    environment: o
                } = e;
                return await s({
                    userId: t,
                    spaceId: n.id,
                    teamTypes: a,
                    environment: o
                }), i().E.readTeams(t, n.id, a).teams
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    environment: i
                } = e;
                return await u({
                    userId: t,
                    spaceStore: n,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: i
                })
            }
            async function m(e) {
                let {
                    userId: t,
                    spaceStore: n,
                    environment: i
                } = e;
                return await u({
                    userId: t,
                    spaceStore: n,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: i
                })
            }

            function f(e) {
                let {
                    teamId: t,
                    spaceStore: i
                } = e;
                return n(681735).h.createChildStore(i, {
                    table: n(832375).yKj,
                    id: t
                })
            }

            function g(e) {
                var t;
                let {
                    teamStore: a,
                    userId: o,
                    spaceStore: r
                } = e, l = i().E.readMembershipCount({
                    userId: o,
                    spaceId: r.id,
                    teamId: a.id
                }), s = a.getArchivedBy() ? "Archived" : (0, n(220530).f)({
                    userId: o,
                    teamStore: a,
                    userPermissionGroups: n(68809).f.getSpacePermissionGroupIds({
                        spaceId: r.id
                    })
                }) ? "Joined" : "UnjoinedActive", d = (0, n(228091).a)({
                    teamStore: a,
                    userId: o,
                    userPermissionGroups: n(68809).f.getSpacePermissionGroupIds({
                        spaceId: r.id
                    })
                }) ? ? "none";
                return {
                    id: a.id,
                    title: a.getName() ? ? "",
                    icon: null == (t = a.getIcon()) ? void 0 : t.icon,
                    type: s,
                    membershipSummary: l,
                    lastEditedTime: 0 === a.getLastEditedTime() ? void 0 : a.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: a.getDisablePublicAccess(),
                        disableGuests: a.getDisableGuests(),
                        disableExport: a.getDisableExport()
                    },
                    teamRole: d,
                    isDefaultTeam: a.isDefault(),
                    accessLevel: a.getTeamAccessLevel(),
                    description: a.getDescription()
                }
            }
        },
        460961: (e, t, n) => {
            n.d(t, {
                O_: () => o,
                dg: () => i,
                iQ: () => a
            });
            let i = new(n(245541)).R({
                    key: "slipperySlopeSidebarSelectedTab",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                a = n(546605).Store.createValue(void 0, {
                    name: "slipperySlopeOpenBackgroundChatRequestStore"
                });

            function o() {
                a.setState((0, n(4962).Ay)())
            }
        },
        473182: (e, t, n) => {
            n.d(t, {
                $y: () => r,
                jc: () => o,
                x9: () => a
            }), n(296540);
            var i = n(474848);

            function a() {
                let e = (0, n(682985).K8)(() => {
                    let {
                        editsBlocked: e
                    } = n(177123).A.state;
                    return e ? ? !1
                }, []);
                return (0, n(682985).K8)(() => (0, n(717274).Jq)(), []) && e
            }

            function o() {
                return (0, n(682985).K8)(() => {
                    var e;
                    let t = n(731632).A.state;
                    return null == t || null == (e = t.data) ? void 0 : e.invoiceHostedUrl
                }, [])
            }

            function r() {
                var e, t;
                let a = (0, n(533992).v3)(),
                    r = o(),
                    s = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(731632).A.state;
                        return (null == t || null == (e = t.data) ? void 0 : e.overdueInvoiceCount) ? ? 0
                    }, []),
                    d = (0, n(682985).K8)(() => (0, n(887788).h)(a), [a]),
                    c = (e = d, t = s, e ? t > 1 ? (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}.",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.multipleInvoicesMessageContent",
                        values: {
                            overdueInvoiceCount: t
                        }
                    }) : (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process your last payment",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.messageContent"
                    }) : (0, i.jsx)(n(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberMessageContent",
                        defaultMessage: "Access to Notion is limited"
                    })),
                    u = function(e) {
                        if (!e) return (0, i.jsx)(n(109939).sA, {
                            id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberSecondaryLabel",
                            defaultMessage: "Contact a workspace owner to update your workspace’s payment method"
                        })
                    }(d),
                    p = function(e, t, i) {
                        if (t) {
                            let a = (0, n(987954).a)(i);
                            return n => {
                                a && (l(t, e), a(n))
                            }
                        }
                        return i => {
                            l(t, e), n(599754).Ow()
                        }
                    }(a, d, r),
                    m = d ? (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "View unpaid invoice",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.buttonLabel"
                    }) : (0, i.jsx)(n(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberButtonLabel",
                        defaultMessage: "View workspace owner"
                    });
                return {
                    clickAction: p,
                    ctaMessage: m,
                    primaryMessage: c,
                    secondaryMessage: u,
                    ctaIcon: d ? n(213458).arrowUpRightSquareIcon : n(11056).personCircleFillIcon,
                    tooltipBodyMessage: d ? m : u,
                    isWorkspaceOwner: d,
                    overdueInvoiceCount: s
                }
            }

            function l(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "subscription_uncollectible_blurred_experience_cta_clicked",
                        eventProperties: {
                            is_workspace_owner: e
                        }
                    }
                })
            }
        },
        476719: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personFillSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                a = (0, n(104509).wt)("personFillSmall", i, "fillSmall")
        },
        477870: (e, t, n) => {
            n.d(t, {
                L: () => i
            });
            let i = new(n(227586)).n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, t) => {
                let i = await e.api.callApi({
                        eventName: "getAllUpgradeRequestsForSpace",
                        environment: e,
                        data: t
                    }),
                    a = [{
                        key: (0, n(568479).VI)(t),
                        version: -1
                    }];
                return "success" === i.type ? {
                    value: i.data.requests,
                    dependencies: i.data.dependencies ? ? a
                } : void 0
            })
        },
        487016: (e, t, n) => {
            n.d(t, {
                Bi: () => l,
                My: () => r,
                ZM: () => d,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var i = () => n(388507),
                a = () => n(715144),
                o = () => n(717673);

            function r({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var l, s;
                let d = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of n) {
                    let n = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && c.push({
                        property: n.id,
                        visible: !(0, i().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let n = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            i = new Set(n.map(e => e.property)),
                            o = c.filter(e => !i.has(e.property));
                        0 !== o.length && (0, a().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...o]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let i = [];
                for (let e of n) {
                    let n = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && i.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let r = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(r.map(e => e.property)),
                    d = i.filter(e => !s.has(e.property));
                d.length && (0, a().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...r, ...d]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: i
            }) {
                if ("accepted_template" === i.type || "accepted_empty_collection" === i.type) {
                    let a = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        perform: a => {
                            let o = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: a,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === i.type && !(0, n(247438).w9s)(o)) {
                                let r = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: i.blockId
                                }).getTitleStore();
                                r && n(41403).yr({
                                    environment: e,
                                    transaction: a,
                                    tokens: o,
                                    index: 0,
                                    store: r
                                })
                            }
                            let r = t.getParentStore();
                            if ((null == r ? void 0 : r.table) === n(682956).ev) {
                                let e = r.getContentIds();
                                (0, n(173157).z)({
                                    store: r,
                                    transaction: a,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: i,
                existingCollectionViewBlockStore: a,
                existingCollectionStore: o
            }) {
                if ("canceled" !== i.type) {
                    if ("accepted_empty_collection" === i.type && o) {
                        let a = o.getKeyStore("name"),
                            r = (0, n(247438).x9d)(i.newCollectionTitle);
                        if (a) {
                            let i = o.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: a,
                                    transaction: t,
                                    value: r
                                })
                            })
                        }
                    }
                    if (a) {
                        var r;
                        let e = null == (r = (0, n(444610).U)(a)) ? void 0 : r.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === i.type && null != a && a.isCollectionView() && !(null != a && a.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(a),
                            o = a.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === i.collectionId
                            });
                        if (!t || !o) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: o.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let i = t.id;
                if (!t.isDefined()) {
                    let a = await (0, n(389323).$)({
                        environment: e,
                        blockId: i
                    });
                    if (!a) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: a
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: i
                    }), await t.load()
                }
                let a = t.getSpaceId();
                if (!a) throw Error("Space ID not found for collection block");
                let o = (0, n(593303).k)(a);
                if (!o) throw Error(`Space view not found for space ID: ${a}`);
                let r = n(728372).AppStoreSidebarSpaceStore.state;
                (null == r ? void 0 : r.id) !== a && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: o
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: i
                    } = await n(708370).t.load(), a = i(l.placeholder_workflow_template_id);
                    if (!a) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: o
                    } = await n(903673).O.load();
                    o({
                        environment: e,
                        collectionTemplate: a,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, n) => {
            n.d(t, {
                CA: () => r
            }), n(16280), n(898992), n(354520), n(581454);
            let i = Symbol("JSON Schema"),
                a = Symbol("JSON Schema Components"),
                o = Symbol("No JSON Schema"),
                r = (0, n(722371).MU)((0, n(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [a]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [a]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [a]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [a]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [a]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [a]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [a]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [a]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [a]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [a]: {}
                            },
                            n = e[0];
                        return "boolean" == typeof n ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof n ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [a]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [a]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[i],
                        [a]: e[i][a]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[i]).filter(e => e !== o),
                        [a]: Object.assign({}, ...e.map(e => e[i][a]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[i],
                        [a]: t[i][a]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: r
                    }) => ({
                        type: "object",
                        properties: (0, n(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[i] !== o).map(([e, t]) => [e, t[i]])),
                        ...r && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [a]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[i][a]))
                    }),
                    union: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[i]).filter(e => e !== o), e => JSON.stringify(e)),
                            r = (0, n(381453).hS)(e.map(e => e[i][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...r)
                        } : {
                            anyOf: t,
                            [a]: Object.assign({}, ...r)
                        }
                    },
                    intersection: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[i]).filter(e => e !== o), e => JSON.stringify(e)),
                            r = (0, n(381453).hS)(e.map(e => e[i][a]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [a]: Object.assign({}, ...r)
                        } : {
                            allOf: t,
                            [a]: Object.assign({}, ...r)
                        }
                    },
                    gte: (e, t) => {
                        let n = e[i];
                        return n !== o ? { ...n,
                            minimum: t
                        } : n
                    },
                    gt: (e, t) => {
                        let n = e[i];
                        return n !== o ? { ...n,
                            exclusiveMinimum: t
                        } : n
                    },
                    lte: (e, t) => {
                        let n = e[i];
                        return n !== o ? { ...n,
                            maximum: t
                        } : n
                    },
                    lt: (e, t) => {
                        let n = e[i];
                        return n !== o ? { ...n,
                            exclusiveMaximum: t
                        } : n
                    },
                    maxLength: (e, t) => {
                        let n = e[i];
                        if (n === o) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                maxLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let n = e[i];
                        if (n === o) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                minLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[i];
                        if (t === o) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[i];
                        if (t === o) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, n(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, n(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var r;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [a]: {}
                                }, {
                                    type: "null",
                                    [a]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [a]: {}
                                }],
                                [a]: t[a]
                            };
                            if (r = t, (0, n(722371).Gv)(r) && 0 === Object.keys(r).length) return t;
                            (0, n(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...o) => 1 === o.length && (0, n(722371).Gv)(o[0]) && ("id" in o[0] || "title" in o[0] || "description" in o[0] || "examples" in o[0]) ? (...r) => {
                    let {
                        description: l,
                        examples: s,
                        id: d,
                        title: c
                    } = o[0], u = { ...c && {
                            title: c
                        },
                        description: l,
                        ...s && {
                            examples: s
                        },
                        ...t(...r)
                    };
                    return d && (u = {
                        $ref: `#/components/schemas/${d}`,
                        [a]: { ...u[a],
                            [d]: u
                        }
                    }), {
                        [i]: u,
                        ...n(969475)[e](...r)
                    }
                } : {
                    [i]: t(...o),
                    ...n(969475)[e](...o),
                    describe: t => r[e]({
                        description: t
                    })(...o)
                }]));
            Symbol("Exact empty object ({})"), r.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        500465: (e, t, n) => {
            n.r(t), n.d(t, {
                MoveOrDuplicateProgress: () => S().A,
                MoveToMenuRenderer: () => x,
                MoveToOrCreateMenu: () => i().v8,
                MoveToSnackbarButtons: () => w().F
            });
            var i = () => n(634150);
            n(581454);
            var a = n(296540),
                o = () => n(519995),
                r = () => n(880904);
            n(898992), n(354520);
            let l = (0, n(104509).xh)("squareOnSquarePlus", {
                default: {
                    loader: () => n.e(59994).then(n.bind(n, 650750))
                },
                small: {
                    loader: () => n.e(59994).then(n.bind(n, 16780))
                },
                fill: {
                    loader: () => n.e(59994).then(n.bind(n, 224412))
                },
                fillSmall: {
                    loader: () => n.e(59994).then(n.bind(n, 208867))
                }
            }, ["copy", "duplicate", "clone", "replicate", "add", "plus"]);
            var s = n(474848);
            let d = {
                style0: {
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function c({
                isOpen: e,
                onClose: t,
                collectionToMoveStore: i,
                onMoveDataSourceOnly: a,
                onMoveDataSourceAndViews: o
            }) {
                let r = (0, n(682985).K8)(() => i.getParentCollectionViewBlockStore(), [i]),
                    u = (0, n(682985).K8)(() => {
                        let e = null == r ? void 0 : r.getCollectionStores();
                        return (null == e ? void 0 : e.length) === 1 && !(0, n(247438).w9s)(i.getDescription())
                    }, [i, r]),
                    p = (0, n(682985).K8)(() => (0, n(901881).Cy)({
                        collectionViewBlockStore: r,
                        collectionStore: i
                    }).length, [r, i]),
                    m = (0, n(682985).K8)(() => (0, n(901881).h0)({
                        collectionViewBlockStore: r,
                        collectionStore: i
                    }).filter(e => {
                        var t;
                        return "view" === e.type && (null == (t = e.viewStore) ? void 0 : t.getType()) === "form_editor"
                    }).length, [r, i]),
                    f = m > 0,
                    g = (0, n(536601).useCollectionNameOrDefault)(i);
                return (0, s.jsx)(n(833503).s, {
                    isOpen: e,
                    onDismiss: t,
                    onClosed: t,
                    areaConstraint: {
                        width: {
                            type: "min",
                            length: 380
                        }
                    },
                    children: () => (0, s.jsx)(n(314084).t, {
                        header: (0, s.jsx)(n(582471).Y, {
                            iconAndTitle: (0, s.jsx)(n(209590).Z, {
                                iconGroup: l,
                                title: (0, s.jsx)(n(109939).sA, {
                                    id: "dataSourceMoveToConfirmationModal.title",
                                    defaultMessage: "Moving data source {dataSourceNameWithIcon}",
                                    values: {
                                        dataSourceNameWithIcon: (0, s.jsx)(n(899260).A, {
                                            store: i,
                                            iconSize: 22,
                                            style: d.style0,
                                            useInvertedColors: !1
                                        })
                                    }
                                })
                            }),
                            description: u ? (0, s.jsx)(n(109939).sA, {
                                id: "dataSourceMoveToConfirmationModal.losingDescription.description",
                                defaultMessage: "{numViews, plural, one {This database has {numViews} view based on this data source. Moving it will also remove the database description.} other {This database has {numViews} views based on this data source. Moving it will also remove the database description.}}",
                                values: {
                                    numViews: p
                                }
                            }) : (0, s.jsx)(n(109939).sA, {
                                id: "dataSourceMoveToConfirmationModal.description",
                                defaultMessage: "{numViews, plural, one {This database has {numViews} view based on this data source.} other {This database has {numViews} views based on this data source.}}",
                                values: {
                                    numViews: p
                                }
                            })
                        }),
                        footer: (0, s.jsx)(n(591637).a, {
                            layout: "vertical",
                            primaryButtons: [{
                                buttonType: "primary",
                                onClick: o,
                                label: (0, s.jsx)(n(109939).sA, {
                                    id: "dataSourceMoveToConfirmationModal.moveDataSourceAndViewsButton.label",
                                    defaultMessage: "{numViews, plural, one {Move data source and {numViews} view} other {Move data source and {numViews} views}}",
                                    values: {
                                        numViews: p
                                    }
                                })
                            }],
                            secondaryButtons: [{
                                buttonType: "secondary",
                                onClick: a,
                                isDisabled: f,
                                label: (0, s.jsx)(n(109939).sA, {
                                    id: "dataSourceMoveToConfirmationModal.moveDataSourceOnlyButton.label",
                                    defaultMessage: "Move data source only"
                                })
                            }],
                            secondaryButtonTooltip: f ? (0, s.jsx)(n(109939).sA, {
                                id: "dataSourceMoveToConfirmationModal.moveDataSourceOnlyButton.collectionHasFormView.tooltip",
                                defaultMessage: "{formViewCount, plural, one {Delete <dataSourceNameChunk>{dataSourceName}</dataSourceNameChunk>’s form to move the data source only} other {Delete <dataSourceNameChunk>{dataSourceName}</dataSourceNameChunk>’s forms to move the data source only}}",
                                values: {
                                    dataSourceNameChunk: (...e) => (0, s.jsx)("b", {
                                        children: e
                                    }),
                                    dataSourceName: g,
                                    formViewCount: m
                                }
                            }) : void 0
                        })
                    })
                })
            }

            function u({
                error: e,
                destinationCollectionViewBlockStore: t,
                collectionToMoveStore: i
            }) {
                let a = (0, n(109939).tz)(),
                    o = (0, n(533992).v3)(),
                    r = (0, n(682985).K8)(() => (0, n(112293).Qe)({
                        store: i,
                        intl: a,
                        environment: o
                    }), [i, a, o]),
                    l = (0, n(682985).K8)(() => (0, n(112293).Qe)({
                        store: t,
                        intl: a,
                        environment: o
                    }), [t, a, o]),
                    d = (0, n(682985).K8)(() => i.getDatabaseType(), [i]),
                    c = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = t.getOwnedTypedCollectionStores()[0]) ? void 0 : e.getDatabaseType()
                    }, [t]);
                switch (e) {
                    case "cannotMoveCollection":
                        return (0, s.jsx)(m, {
                            destinationCollectionViewBlockTitle: l,
                            collectionTitle: r
                        });
                    case "cannotMoveViews":
                        return (0, s.jsx)(g, {
                            destinationCollectionViewBlockTitle: l,
                            collectionTitle: r
                        });
                    case "cannotMoveTypedCollection":
                        return (0, s.jsx)(y, {
                            collectionType: d,
                            existingCollectionType: c
                        });
                    default:
                        (0, n(722371).HB)(e)
                }
            }
            let p = {
                display: "inline"
            };

            function m({
                destinationCollectionViewBlockTitle: e,
                collectionTitle: t
            }) {
                return (0, s.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, s.jsx)(n(109939).sA, {
                        id: "dataSourceMoveToMenu.errorDialog.tooManyCollections.title",
                        defaultMessage: "Maximum number of data sources ({maxDataSourceCount}) reached",
                        values: {
                            maxDataSourceCount: n(801230).A
                        }
                    }), (0, s.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        color: "error",
                        children: (0, s.jsx)(n(109939).sA, {
                            id: "dataSourceMoveToMenu.errorDialog.tooManyCollections.message",
                            defaultMessage: "{titlesAreDefined, select, true {Remove a data source from {destinationCollectionViewBlockTitle} to move {collectionTitle}.} other {Remove a data source from the database to move this data source.}}",
                            values: {
                                titlesAreDefined: !!(t && e),
                                collectionTitle: (0, s.jsx)(n(111010).D, {
                                    styleKey: "bodySemibold",
                                    style: p,
                                    children: t
                                }),
                                destinationCollectionViewBlockTitle: (0, s.jsx)(n(111010).D, {
                                    styleKey: "bodySemibold",
                                    style: p,
                                    children: e
                                })
                            }
                        })
                    })]
                })
            }
            let f = {
                display: "inline"
            };

            function g({
                destinationCollectionViewBlockTitle: e,
                collectionTitle: t
            }) {
                return (0, s.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, s.jsx)(n(109939).sA, {
                        id: "dataSourceMoveToMenu.errorDialog.tooManyViews.title",
                        defaultMessage: "Maximum number of views ({maxViewCount}) reached",
                        values: {
                            maxViewCount: n(801230).L
                        }
                    }), (0, s.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        color: "error",
                        children: (0, s.jsx)(n(109939).sA, {
                            id: "dataSourceMoveToMenu.errorDialog.tooManyViews.message",
                            defaultMessage: "{titlesAreDefined, select, true {Remove views from {destinationCollectionViewBlockTitle} to move {collectionTitle} and views.} other {Remove views from the database to move this data source and views.}}",
                            values: {
                                titlesAreDefined: !!(t && e),
                                collectionTitle: (0, s.jsx)(n(111010).D, {
                                    styleKey: "bodySemibold",
                                    style: f,
                                    children: t
                                }),
                                destinationCollectionViewBlockTitle: (0, s.jsx)(n(111010).D, {
                                    styleKey: "bodySemibold",
                                    style: f,
                                    children: e
                                })
                            }
                        })
                    })]
                })
            }

            function y({
                collectionType: e,
                existingCollectionType: t
            }) {
                let i = (0, n(463082)._V)(e),
                    a = (0, n(463082)._V)(t);
                return (0, s.jsxs)(n(4458).VP, {
                    gap: 4,
                    children: [(0, s.jsx)(n(109939).sA, {
                        id: "dataSourceMoveToMenu.errorDialog.cannotMoveTypedCollection.title",
                        defaultMessage: "Cannot move a {collectionTypeName} data source into a database with a separate {existingCollectionTypeName} data source.",
                        values: {
                            collectionTypeName: i,
                            existingCollectionTypeName: a
                        }
                    }), (0, s.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        color: "error",
                        children: (0, s.jsx)(n(109939).sA, {
                            id: "dataSourceMoveToMenu.errorDialog.cannotMoveTypedCollection.message",
                            defaultMessage: "Please select a different destination."
                        })
                    })]
                })
            }

            function h(e) {
                let {
                    autocompleteQuery: t,
                    desktopWidth: o,
                    onAccept: l,
                    onAutocompleteQueryChange: d,
                    onCancel: c,
                    onMouseEnter: u,
                    collectionToMoveStore: p
                } = e, m = (0, n(533992).WS)();
                (0, a.useEffect)(() => (n(199012).x.reset(), () => {
                    n(199012).x.reset()
                }), []);
                let f = (0, n(682985).uB)(void 0, n(419110).$),
                    g = (0, n(682985).K8)(() => (0, n(907124).wc)(), []),
                    y = (0, n(682985).K8)(() => (0, n(907124).NA)(), []),
                    h = (0, n(682985).K8)(() => (0, n(916804).I)(g), [g]),
                    v = (0, n(682985).K8)(() => (0, n(907124).L2)(r().Ay.state), []),
                    b = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = p.getParentCollectionViewBlockStore()) ? void 0 : e.id
                    }, [p]),
                    _ = (0, n(183464).W)({
                        type: n(821603).Vz.BlocksInSpace,
                        query: t,
                        limit: v,
                        source: "move_to_menu",
                        filters: {
                            requireEditPermissions: !1,
                            excludeSurrogateCollections: !0,
                            excludeTemplates: !1
                        },
                        excludedBlockIds: [b].filter(e => void 0 !== e),
                        options: {
                            disable: !1,
                            overrideSpaceStore: g
                        },
                        peopleBlocksToInclude: "none"
                    }),
                    x = (0, a.useMemo)(() => [p], [p]),
                    w = (0, n(303282).t)({
                        allItemsToMoveAreNavigable: !1,
                        forceShowPrivatePageOption: !1,
                        isAddTo: !1,
                        isCreateIn: !1,
                        isTurnIntoPage: !1,
                        showDataSources: !1,
                        onAccept: l,
                        parentBlockId: void 0,
                        query: t,
                        searchResults: _,
                        itemsToMove: x
                    }),
                    S = (0, n(682985).K8)(() => (0, n(907124).R3)(), []),
                    k = (0, a.useMemo)(() => {
                        if (S) return m ? (0, s.jsx)(i().Xy, {
                            autocompleteQuery: t,
                            onAutocompleteQueryChange: d,
                            isDataSource: !0,
                            menuListStore: f,
                            isLoading: _.isResultsLoading
                        }) : (0, s.jsx)(n(844565).A, {
                            isInput: !0,
                            children: (0, s.jsx)(i().Xy, {
                                autocompleteQuery: t,
                                onAutocompleteQueryChange: d,
                                isDataSource: !0,
                                menuListStore: f,
                                isLoading: _.isResultsLoading
                            })
                        })
                    }, [S, m, t, d, f, _.isResultsLoading]),
                    M = (0, a.useMemo)(() => m ? {
                        onMouseEnter: u,
                        menuType: n(649476).gu.Modal,
                        title: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Move to",
                            id: "moveBlockMenu.mobileMoveTo.label"
                        }),
                        right: (0, s.jsx)(n(109939).sA, {
                            defaultMessage: "Done",
                            id: "moveBlockMenu.rightDoneButton.label"
                        }),
                        onClickRight: c,
                        header: k
                    } : {
                        onMouseEnter: u,
                        menuType: n(649476).gu.Popup,
                        width: o,
                        header: k
                    }, [m, u, c, k, o]);
                return y && g ? (0, s.jsxs)(n(519451).A, {
                    debugName: "DataSourceMoveToMenu",
                    capture: !0,
                    allowMenuList: !0,
                    allowEsc: !0,
                    allowLeft: !0,
                    allowTabUntab: !1,
                    allowUndo: !1,
                    children: [(0, s.jsx)(n(369064).N, {
                        debugName: "DataSourceMoveToMenu",
                        capture: !0,
                        onEsc: c
                    }), (0, s.jsx)(n(747369).A, { ...M,
                        footer: (0, s.jsx)(i().n5, {
                            isCreateIn: !1,
                            isAddTo: !1,
                            allItemsToMoveAreNavigable: !1
                        }),
                        children: t || m ? (0, s.jsx)(n(897104).c, {
                            sections: w,
                            error: void 0,
                            menuListStore: f,
                            initialFocus: t ? 0 : void 0,
                            loading: _.isResultsLoading,
                            canLoadMore: _.hasMoreResults,
                            onLoadMore: () => {
                                var e;
                                return null == (e = _.fetchAdditionalServerResultsOnChange) ? void 0 : e.call(_, v)
                            }
                        }) : (0, s.jsx)(n(775945).Cr, {
                            spaceStore: g,
                            spaceViewStore: y,
                            onAccept: l,
                            itemsToMove: [p],
                            moveToPagesOnly: h,
                            forceShowPrivatePageOption: !1
                        })
                    })]
                }) : null
            }

            function v() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(682985).K8)(() => {
                        let e = r().Ay.state;
                        if (e.isOpen && e.blocksToMove) return {
                            autocompleteQuery: e.autocompleteQuery,
                            blocksToMove: e.blocksToMove,
                            isAddTo: e.isAddTo,
                            isOpen: e.isOpen,
                            forceShowPrivatePageOption: !!e.forceShowPrivatePageOption
                        }
                    }, []),
                    a = !!(null == t ? void 0 : t.isOpen);
                if ((0, n(805469).A)({
                        shouldPreserveTextSelection: a,
                        shouldPreserveBlockSelection: !1,
                        shouldRestoreSelection: a && !n(986939).A.isMobile
                    }), void 0 === t || !t.isOpen) return null;
                let l = async ({
                        value: t,
                        shouldClearPagePermissions: i
                    }) => {
                        await n(351198).zA({
                            environment: e,
                            value: t,
                            useSudoMode: r().Ay.state.isOpen && r().Ay.state.useSudoMode,
                            renderType: "web",
                            shouldClearPagePermissions: i
                        })
                    },
                    d = async t => {
                        if (!r().Ay.state.isOpen || !r().Ay.state.blocksToMove) return;
                        let i = r().Ay.state.blocksToMove,
                            a = await (0, n(411216).OY)({
                                environment: e,
                                blocks: i,
                                from: "moveTo",
                                moveToArgs: {
                                    moveToValue: t,
                                    destination: (0, n(411216).sZ)(t)
                                }
                            });
                        if (!a.confirmed) return void c();
                        for (let t of i) {
                            let n = await o().rW({
                                environment: e,
                                block: t,
                                action: "move"
                            });
                            "user_canceled" === n ? c() : n.length > 1 && r().Ay.state.isOpen && r().Ay.setState({ ...r().Ay.state,
                                blocksToMove: n
                            })
                        }
                        if (r().Ay.state.isOpen) {
                            let {
                                flowId: i,
                                blocksToMove: a,
                                moveToContext: o,
                                openedTimeMs: l,
                                autocompleteQuery: s
                            } = r().Ay.state, d = "space-private-pages" === t.type ? -1 : a.findIndex(e => e.id === t.id);
                            n(278947).uU(e, {
                                from: o,
                                render_type: "web",
                                type: t.type,
                                target_block_ids: a.map(e => e.id),
                                time_to_select_ms: Date.now() - l,
                                selected_item_index: d,
                                query_length: s.length,
                                flowId: i
                            })
                        }
                        let {
                            shouldClearPagePermissions: s
                        } = a;
                        l({
                            value: t,
                            shouldClearPagePermissions: s
                        })
                    },
                    c = () => {
                        if (r().Ay.state.isOpen && r().Ay.state.blocksToMove) {
                            let {
                                flowId: t,
                                blocksToMove: i,
                                moveToContext: a
                            } = r().Ay.state;
                            n(278947).X3(e, {
                                from: a,
                                render_type: "web",
                                target_block_ids: i.map(e => e.id),
                                flowId: t
                            })
                        }
                        n(351198).VN({
                            environment: e,
                            clearSelection: !0
                        })
                    },
                    {
                        autocompleteQuery: u,
                        blocksToMove: p,
                        isAddTo: m
                    } = t;
                return (0, s.jsx)(i().v8, {
                    autocompleteQuery: u,
                    blocksToMove: p,
                    onAutocompleteQueryChange: t => {
                        if (r().Ay.state.isOpen) {
                            r().Ay.setState({ ...r().Ay.state,
                                queryLimit: n(411216).p1,
                                autocompleteQuery: t
                            });
                            let {
                                flowId: i,
                                moveToContext: a
                            } = r().Ay.state;
                            n(278947).cn(e, {
                                flowId: i,
                                from: a
                            })
                        }
                    },
                    onAccept: d,
                    onCancel: c,
                    desktopWidth: 330,
                    isAddTo: m,
                    isCreateIn: !1,
                    forceShowPrivatePageOption: t.forceShowPrivatePageOption
                })
            }
            async function b({
                environment: e,
                moveToValue: t,
                shouldMoveViews: i,
                handleCancel: a,
                menuState: o,
                intl: r
            }) {
                var l;
                if (!o.collectionToMoveStore || !t) return;
                let d = (0, n(411216).Il)(t);
                if (d && ! function(e) {
                        let {
                            destinationCollectionViewBlockStore: t,
                            collectionToMoveStore: i,
                            shouldMoveViews: a
                        } = e;
                        if (a) {
                            let e = (0, n(901881).WO)({
                                collectionViewBlockStore: i.getParentCollectionViewBlockStore(),
                                collectionStore: i
                            });
                            return t.canAddCollectionView(e)
                        } {
                            let e = (0, n(901881).Cy)({
                                collectionViewBlockStore: t,
                                collectionStore: i
                            }).length > 0;
                            return t.canAddCollectionView(+!e)
                        }
                    }({
                        destinationCollectionViewBlockStore: d,
                        collectionToMoveStore: o.collectionToMoveStore,
                        shouldMoveViews: i
                    })) return void n(647095).f1((0, s.jsx)(u, {
                    error: "cannotMoveViews",
                    destinationCollectionViewBlockStore: d,
                    collectionToMoveStore: o.collectionToMoveStore
                }));
                let c = await (0, n(411216).OY)({
                    environment: e,
                    blocks: [],
                    from: "moveTo",
                    moveToArgs: {
                        moveToValue: t,
                        destination: (0, n(411216).sZ)(t)
                    }
                });
                if (!c.confirmed) return void a();
                let {
                    dataSourceSessionId: p,
                    dataSourceFrom: m,
                    moveToContext: f,
                    collectionToMoveStore: g,
                    useSudoMode: y,
                    openedTimeMs: h,
                    autocompleteQuery: v,
                    flowId: _
                } = o;
                n(278947).Aw(e, {
                    data_source_session_id: p,
                    data_source_from: m,
                    from: f,
                    render_type: "web",
                    target_collection_id: g.id,
                    original_collection_block_id: null == (l = g.getParentCollectionViewBlockStore()) ? void 0 : l.id,
                    time_to_select_ms: Date.now() - h,
                    query_length: v.length,
                    flowId: _
                }), n(351198).Y8({
                    environment: e,
                    value: t,
                    useSudoMode: y,
                    renderType: "web",
                    shouldClearPagePermissions: c.shouldClearPagePermissions,
                    shouldMoveViews: i,
                    intl: r
                })
            }

            function _() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(109939).tz)(),
                    i = (0, n(682985).O$)(r().Ay),
                    o = (0, a.useCallback)(() => {
                        var t;
                        if (n(351198).VN({
                                environment: e,
                                clearSelection: !0
                            }), !r().Ay.state.isOpen || !r().Ay.state.collectionToMoveStore) return;
                        let {
                            dataSourceSessionId: i,
                            dataSourceFrom: a,
                            moveToContext: o,
                            collectionToMoveStore: l
                        } = r().Ay.state;
                        n(278947).z$(e, {
                            data_source_session_id: i,
                            data_source_from: a,
                            from: o,
                            render_type: "web",
                            target_collection_id: l.id,
                            original_collection_block_id: null == (t = l.getParentCollectionViewBlockStore()) ? void 0 : t.id
                        })
                    }, [e]),
                    l = (0, a.useCallback)(() => {
                        r().Ay.state.isOpen && "dataSource" === r().Ay.state.variant && r().Ay.setState({ ...r().Ay.state,
                            isConfirmationModalOpen: !1,
                            destination: void 0
                        })
                    }, []),
                    d = (0, a.useCallback)(async (n, a) => {
                        i.isOpen && await b({
                            environment: e,
                            moveToValue: n,
                            shouldMoveViews: a,
                            handleCancel: o,
                            menuState: i,
                            intl: t
                        })
                    }, [e, i, o, t]),
                    p = (0, a.useCallback)(async e => {
                        if (!i.isOpen || !i.collectionToMoveStore) return;
                        let t = (0, n(411216).Il)(e);
                        if (t) {
                            let e = void 0 !== i.collectionToMoveStore.getDatabaseType(),
                                a = i.collectionToMoveStore.getParentCollectionViewBlockStore();
                            if (e && a && !n(403331).i_({
                                    originBlockStore: a,
                                    destinationBlockStore: t
                                })) {
                                n(647095).f1((0, s.jsx)(u, {
                                    error: "cannotMoveTypedCollection",
                                    destinationCollectionViewBlockStore: t,
                                    collectionToMoveStore: i.collectionToMoveStore
                                })), n(773352).log({
                                    level: "info",
                                    from: "DataSourceMoveToMenuModal",
                                    type: "cannotMoveTypedCollection",
                                    data: {
                                        message: "Cannot move typed collection because origin and destination blocks have different app_id values.",
                                        collectionId: i.collectionToMoveStore.id,
                                        collectionType: i.collectionToMoveStore.getDatabaseType(),
                                        originBlockId: a.id,
                                        originBlockAppId: a.getFormat().app_id,
                                        destinationBlockId: t.id,
                                        destinationBlockAppId: t.getFormat().app_id
                                    }
                                });
                                return
                            }
                            let o = null == t ? void 0 : t.canAddCollection();
                            if (!o.canAddView && "tooManyCollections" === o.reason) return void n(647095).f1((0, s.jsx)(u, {
                                error: "cannotMoveCollection",
                                destinationCollectionViewBlockStore: t,
                                collectionToMoveStore: i.collectionToMoveStore
                            }));
                            if (!o.canAddView && "tooManyViews" === o.reason && 0 === (0, n(901881).WO)({
                                    collectionViewBlockStore: t,
                                    collectionStore: i.collectionToMoveStore
                                })) return void n(647095).f1((0, s.jsx)(u, {
                                error: "cannotMoveViews",
                                destinationCollectionViewBlockStore: t,
                                collectionToMoveStore: i.collectionToMoveStore
                            }))
                        }
                        0 === (0, n(901881).WO)({
                            collectionViewBlockStore: i.collectionToMoveStore.getParentCollectionViewBlockStore(),
                            collectionStore: i.collectionToMoveStore
                        }) ? await d(e, !1) : r().Ay.state.isOpen && "dataSource" === r().Ay.state.variant && r().Ay.setState({ ...r().Ay.state,
                            isConfirmationModalOpen: !0,
                            destination: e
                        })
                    }, [i, d]),
                    m = (0, a.useCallback)(t => {
                        i.isOpen && (r().Ay.setState({ ...i,
                            queryLimit: n(411216).p1,
                            autocompleteQuery: t
                        }), n(278947).cn(e, {
                            flowId: i.flowId,
                            from: i.moveToContext
                        }))
                    }, [e, i]);
                return void 0 !== i && i.isOpen && i.collectionToMoveStore ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(h, {
                        autocompleteQuery: i.autocompleteQuery,
                        collectionToMoveStore: i.collectionToMoveStore,
                        onAutocompleteQueryChange: m,
                        onAccept: p,
                        onCancel: o,
                        desktopWidth: 330
                    }), (0, s.jsx)(c, {
                        isOpen: i.isConfirmationModalOpen,
                        onClose: l,
                        collectionToMoveStore: i.collectionToMoveStore,
                        onMoveDataSourceOnly: () => d(i.destination, !1),
                        onMoveDataSourceAndViews: () => d(i.destination, !0)
                    })]
                }) : null
            }

            function x() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(682985).K8)(() => {
                        let e = r().Ay.state;
                        if (e.isOpen) return {
                            renderType: e.renderType,
                            isOpen: e.isOpen,
                            rect: e.rect,
                            alignmentToOrigin: e.alignmentToOrigin,
                            placementToOrigin: e.placementToOrigin,
                            variant: e.variant
                        }
                    }, []),
                    i = (0, a.useCallback)(() => (null == t ? void 0 : t.variant) === "dataSource" ? (0, s.jsx)(_, {}) : (0, s.jsx)(v, {}), [t]);
                return (0, s.jsx)(n(182718).zD, {
                    popupType: n(986939).A.isMobile ? n(423291).n.BottomSheet : n(423291).n.Popup,
                    alignmentToOrigin: (null == t ? void 0 : t.alignmentToOrigin) ? ? "start",
                    placementToOrigin: null == t ? void 0 : t.placementToOrigin,
                    open: void 0 !== t && "mobileNative" !== t.renderType && t.isOpen,
                    content: i,
                    originRect: null == t ? void 0 : t.rect,
                    onDismiss: () => {
                        n(351198).VN({
                            environment: e,
                            clearSelection: !0
                        })
                    },
                    trapFocus: !0
                })
            }
            x.displayName = "MoveToMenuRenderer";
            var w = () => n(786778),
                S = () => n(891160)
        },
        503473: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function r(e) {
                let {
                    children: t,
                    style: r,
                    overlayContainerZIndex: l,
                    placement: s = "bottom",
                    tooltipStyle: d
                } = e, {
                    isSafari: c
                } = (0, n(533992).Y0)(), u = (0, i.useRef)(null), p = function(e) {
                    let [t, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void n(!1);
                        let i = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            n(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == i || i.observe(t), () => null == i ? void 0 : i.unobserve(t)
                    }, []), t
                }(u);
                return (0, a.jsx)(n(51831).m, {
                    delayThreshold: 500,
                    placement: s,
                    textWrap: !0,
                    style: d,
                    overlayContainerZIndex: l,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: c,
                    content: () => p ? t : void 0,
                    children: e => (0, a.jsx)("div", {
                        ref: u,
                        ...n(952687).A.props(o, r),
                        ...e,
                        children: t
                    })
                })
            }
        },
        506768: (e, t, n) => {
            n.d(t, {
                P: () => a,
                i: () => i
            });
            let i = {
                    current: void 0
                },
                a = (0, n(411784).u0)({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!i.current) {
                            let e = new(n(508656)).B({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), i.current = e
                        }
                        return i.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                })
        },
        515487: (e, t, n) => {
            n.d(t, {
                r: () => o
            });
            var i = n(296540),
                a = n(474848);

            function o({
                loadingMessage: e
            }) {
                let t = (0, n(934877).A)({
                    visibility: !0,
                    delayShow: 400
                });
                return (0, a.jsx)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    children: t ? (0, a.jsxs)(i.Fragment, {
                        children: [(0, a.jsx)(n(517334).k, {}), e ? (0, a.jsx)("div", {
                            className: "x13fj5qh x1b8rd1j",
                            children: e
                        }) : void 0]
                    }) : void 0
                })
            }
        },
        525272: (e, t, n) => {
            n.d(t, {
                E: () => i
            });

            function i(e) {
                let {
                    spaceStore: t,
                    viewedUserId: i
                } = e, a = (0, n(533992).v3)(), o = (0, n(993077).nB)(t), r = (0, n(993077).V_)({
                    spaceStore: t,
                    userId: i
                }), l = (0, n(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, n(455221).e)(a, e) && "control" !== n(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [a, t]);
                return (0, n(682985).K8)(() => (0, n(62694).V)({
                    spaceStore: t,
                    actorRole: o,
                    viewedRole: r,
                    shouldShowForExternalUsers: l
                }), [t, o, r, l])
            }
        },
        532755: (e, t, n) => {
            n.d(t, {
                D: () => o
            });
            var i = n(296540),
                a = n(474848);

            function o({
                userStore: e,
                suppressMouse: t,
                children: r,
                spaceStore: l,
                width: s,
                from: d = "unknown"
            }) {
                let c = (0, i.useRef)(null),
                    u = (0, n(525272).E)({
                        spaceStore: l,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    p = (0, n(83208).X)("prefetch_extended_user_profiles"),
                    m = u && p,
                    f = (0, n(815048).fJ)(n(554666).u.extendedUserProfileActions, {
                        disabled: !m
                    }),
                    g = (0, n(533992).v3)();
                (0, i.useEffect)(() => {
                    m && "resolved" === f.status && null != e && e.id && l && null != l && l.userId && f.value.prefetchExtendedUserProfiles({
                        spaceStore: l,
                        actorUserId: l.userId,
                        viewedUserIds: [e.id]
                    }, g)
                }, [m, null == e ? void 0 : e.id, l, u, g, f]);
                let y = (0, i.useCallback)(() => {
                        c.current && e && l && !t && n(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: c.current.getBoundingClientRect(),
                            spaceStore: l,
                            from: d
                        })
                    }, [e, l, t, d]),
                    h = (0, i.useCallback)(() => {
                        n(84300).A.setState(void 0)
                    }, []);
                return e && u ? (0, a.jsx)("div", {
                    ref: c,
                    onMouseEnter: u ? y : void 0,
                    onMouseLeave: u ? h : void 0,
                    style: s ? {
                        width: s
                    } : void 0,
                    children: r
                }) : r
            }
        },
        540336: (e, t, n) => {
            n.d(t, {
                Jy: () => y,
                LZ: () => h,
                vU: () => g
            }), n(581454);
            var i = n(296540),
                a = n(474848);
            let o = {
                    kORKVm: "xryxfnj",
                    kXHlph: "xw2csxc",
                    k1xSpc: "x78zum5",
                    kzqmXN: "xh8yej3",
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                r = {
                    kGVxlE: "xx4f2qb",
                    $$css: !0
                },
                l = {
                    kGuDYH: "xif65rj",
                    kZCmMZ: "xmzvs34",
                    kwRFfy: "xf159sx",
                    kY2c9j: "x1vjfegm",
                    $$css: !0
                },
                s = {
                    kGuDYH: "x1j61zf2",
                    kLKAdn: "x1nn3v0j",
                    kY2c9j: "xhtitgo",
                    kZKoxP: "xn3w4p2",
                    kC7eKd: "x1mmz80m",
                    $$css: !0
                },
                d = {
                    kZCmMZ: "xf7dkkf",
                    kwRFfy: "xv54qhq",
                    $$css: !0
                },
                c = {
                    kLKAdn: "x1yrsyyn",
                    kGO01o: "x10b6aqq",
                    khDVqt: "xuxw1ft",
                    k7Eaqz: "xeuugli",
                    kmuXW: "x2lah0s",
                    kMwMTN: "x1b8rd1j",
                    $$css: !0
                },
                u = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                p = {
                    k4EQJz: "xkaiwgt",
                    kVAEAm: "x10l6tqk",
                    krVfgx: "x1ey2m1c",
                    kLqNvP: "xrotz4w",
                    kt4wiu: "x11dcrhx",
                    $$css: !0
                },
                m = {
                    k1xSpc: "x78zum5",
                    kzQI83: "x1iyjqo2",
                    $$css: !0
                },
                f = {
                    selectedTab: {
                        color: n(632079).Tj.text.primary
                    }
                };

            function g(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function y(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            let h = i.memo(function({
                tabs: e,
                selectedIndex: t,
                onChange: h,
                right: v,
                style: b,
                tabStyle: _,
                tabTitleStyle: x,
                selectedTabTitleStyle: w,
                tabBorderStyle: S,
                selectedTabStyle: k,
                readOnly: M,
                hideTabBorder: T,
                idPrefix: C
            }) {
                let I = (0, i.useContext)(n(649476).xu),
                    A = (0, n(616844).Y5)("left", 16),
                    j = (0, n(616844).Y5)("right", 16),
                    D = I.menuType === n(649476).gu.Popup;
                return (0, a.jsxs)("div", { ...n(952687).A.props(o, !T && r, n(986939).A.isMobile ? [s, D ? d : ((e, t) => [{
                        kZCmMZ: null != e ? "xnvo3vl" : e,
                        kwRFfy: null != t ? "x120eax6" : t,
                        $$css: !0
                    }, {
                        "--x-paddingInlineStart": "number" == typeof e ? e + "px" : null != e ? e : void 0,
                        "--x-paddingInlineEnd": "number" == typeof t ? t + "px" : null != t ? t : void 0
                    }])(A, j)] : l, b, {
                        $$css: !0,
                        className: "hide-scrollbar"
                    }),
                    children: [(0, a.jsx)("div", {
                        role: "tablist",
                        ...n(952687).A.props(m, "object" == typeof b && b && "flexDirection" in b && {
                            flexDirection: b.flexDirection
                        }),
                        children: e.map((e, o) => {
                            let r = o === t;
                            return (0, a.jsx)(i.Fragment, {
                                children: (0, a.jsxs)("div", { ...n(952687).A.props(c, _, r && u, r && f.selectedTab, r && k),
                                    children: [(0, a.jsx)(n(988022).p, {
                                        role: "tab",
                                        style: [x, r && w],
                                        onClick: () => h(o),
                                        disabled: M,
                                        "aria-selected": r,
                                        id: g(C, o),
                                        "aria-controls": y(C, o),
                                        colorPalette: r ? void 0 : "gray",
                                        children: e
                                    }), r ? (0, a.jsx)("div", { ...n(952687).A.props(p, S)
                                    }) : void 0]
                                }, `tabButton-${o}`)
                            }, o)
                        })
                    }), v ? (0, a.jsx)("div", {
                        className: "x1iyjqo2 x78zum5 x6s0dn4 x13a6bvl x1b8rd1j",
                        children: v
                    }) : void 0]
                })
            })
        },
        540358: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);

            function a(e) {
                let {
                    style: t
                } = e, a = (0, n(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...t
                    }
                }), [t]);
                return (0, i.jsx)(n(746434).E, {
                    color: "blue",
                    style: a.badge,
                    content: (0, i.jsx)(n(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }
        },
        554666: (e, t, n) => {
            n.d(t, {
                i: () => a,
                u: () => i
            });
            let i = {
                    PersonProfileContainer: new(n(815048)).O2("PersonProfileContainer", () => Promise.all([n.e(75134), n.e(21969), n.e(29663), n.e(75136), n.e(98175), n.e(47414), n.e(16922), n.e(65594), n.e(15021), n.e(98821), n.e(77470), n.e(80068), n.e(44632)]).then(n.bind(n, 587386))),
                    extendedUserProfileActions: new(n(815048)).O2("extendedUserProfileActions", () => n.e(63717).then(n.bind(n, 433562)))
                },
                a = (0, n(815048)._h)(i.PersonProfileContainer, e => e.PersonProfileContainer)
        },
        555676: (e, t, n) => {
            let i;

            function a(e) {
                i = e
            }

            function o() {
                return i
            }
            n.d(t, {
                w: () => a,
                x: () => o
            })
        },
        556306: (e, t, n) => {
            n.d(t, {
                h: () => i
            });

            function i(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
        },
        559096: (e, t, n) => {
            n.r(t), n.d(t, {
                loadLocalSubtree: () => l
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var i = () => n(986939),
                a = () => n(430733),
                o = () => n(832375),
                r = () => n(247438);

            function l(e) {
                let {
                    environment: t,
                    blockId: l,
                    inMemoryRecordCache: s,
                    options: d
                } = e, c = t.currentUser.id, u = n(412951).RecordMap.create(), p = new Set, m = [{
                    pointer: {
                        table: o().evP,
                        id: l
                    },
                    parentId: "doesn't matter"
                }];
                for (; m.length > 0;) {
                    let e = m.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = l === e.pointer.id,
                        f = function(e) {
                            let t, {
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m,
                                isRootRequest: f
                            } = e;
                            return (0, n(496282).Yt)(l, o().evP) ? t = function(e) {
                                var t, l, s, d, c, u, p, m;
                                let {
                                    pointer: f,
                                    recordMap: g,
                                    inMemoryRecordCache: y,
                                    currentUserId: h,
                                    cursors: v,
                                    cursor: b,
                                    options: _,
                                    isRootRequest: x
                                } = e, w = y.getRecord({
                                    pointer: f,
                                    userId: h
                                }), S = null == w ? void 0 : w.value;
                                if (!S) return _.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: f
                                } : void 0;
                                let k = _.excludeCrdtData ? n(877308).ir(S) : S;
                                if (_.includeLegacyTransclusionBlockValues) {
                                    if (!x && k.parent_id !== b.parentId && !b.isBlockContentChild) return
                                } else if (!x && k.parent_id !== b.parentId) return;
                                if (k.type === n(955630).xd.externalObjectInstance && !_.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: f
                                };
                                if (g.setValue(f, k), !_.skipNavigableChildren) {
                                    for (let e of n(993189).Bj6.fromBlock(k).getCollectionPointers()) {
                                        let t = y.getRecord({
                                            pointer: e,
                                            userId: h
                                        });
                                        if (t) {
                                            if ((null == (c = t.value) ? void 0 : c.parent_table) !== o().evP || (null == (u = t.value) ? void 0 : u.parent_id) !== k.id) continue
                                        } else {
                                            if (_.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        v.push({
                                            pointer: e,
                                            parentId: k.id
                                        })
                                    }
                                    if (k.view_ids)
                                        for (let e of k.view_ids) v.push({
                                            pointer: {
                                                table: o().Gy1,
                                                id: e,
                                                spaceId: k.space_id
                                            },
                                            parentId: k.id
                                        })
                                }
                                if (!_.skipBlockContent && (!_.skipTransclusionContainerChildren || "transclusion_container" !== k.type) && (!_.skipNavigableChildren || !(0, n(955630).$I)(k.type)))
                                    for (let e of n(993189).Bj6.fromBlock(k).getRenderableContentIds()) v.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e
                                        },
                                        parentId: k.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of n(993189).Bj6.fromBlock(k).getNonContentChildren()) v.push({
                                    pointer: {
                                        table: o().evP,
                                        id: e
                                    },
                                    parentId: k.id,
                                    isBlockContentChild: !0
                                });
                                if (k.type === n(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = k.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (m = k.format) ? void 0 : m.related_external_object_uris_to_instance_ids) || []) v.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    });
                                if (!_.skipNavigableChildren && k.properties)
                                    for (let e of Object.values(k.properties).filter(n(722371).O9))
                                        for (let t of e)
                                            for (let e of r().uPN(t)) {
                                                if (r().jIt(e)) {
                                                    let t = r().v55(e);
                                                    v.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: t
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                                if (r().sh$(e)) {
                                                    let t = r().cQR(e),
                                                        n = (0, a().lX)({
                                                            url: t,
                                                            baseUrl: i().A.domainBaseUrl,
                                                            publicDomainName: i().A.publicDomainName
                                                        });
                                                    n && v.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: n
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                                if (r().N53(e)) {
                                                    let t = r().T$c(e);
                                                    t && v.push({
                                                        pointer: {
                                                            table: o().evP,
                                                            id: t,
                                                            spaceId: k.space_id
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                            }
                                if ("form" === k.type && null != (t = k.format) && t.form_layout_pointer && v.push({
                                        pointer: k.format.form_layout_pointer,
                                        parentId: k.id
                                    }), null != (l = k.format) && l.automation_id && v.push({
                                        pointer: {
                                            table: o().yBS,
                                            id: k.format.automation_id,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    }), null != (s = k.format) && s.workflow_id && v.push({
                                        pointer: {
                                            table: o().C0E,
                                            id: k.format.workflow_id,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    }), k.format && "database_agent_ids" in k.format && Array.isArray(k.format.database_agent_ids))
                                    for (let e of k.format.database_agent_ids) v.push({
                                        pointer: {
                                            table: o().C0E,
                                            id: e,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    });
                                null != (d = k.format) && d.ai_instructions_page_pointer && v.push({
                                    pointer: k.format.ai_instructions_page_pointer,
                                    parentId: k.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m,
                                isRootRequest: f
                            }) : (0, n(496282).Yt)(l, o().VlP) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: i,
                                    recordMap: a,
                                    inMemoryRecordCache: r,
                                    currentUserId: l,
                                    cursors: s,
                                    cursor: d,
                                    options: c
                                } = e;
                                if (!c.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: i
                                };
                                let u = r.getRecord({
                                    pointer: i,
                                    userId: l
                                });
                                if (!(null != u && u.value)) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                if (u.value.parent_id !== d.parentId) return;
                                let p = u.value;
                                for (let e of (a.setValue(i, p), r.forEachRecord({
                                        userId: l,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === o().evP && e && e.parent_id === i.id && e.alive && s.push({
                                                pointer: e.pointer,
                                                parentId: i.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) s.push({
                                    pointer: {
                                        table: o().yBS,
                                        id: e,
                                        spaceId: p.space_id
                                    },
                                    parentId: p.id
                                });
                                p.schema && (Object.values(p.schema).forEach(e => {
                                    e && "button" === e.type && e.automation_id && s.push({
                                        pointer: {
                                            id: e.automation_id,
                                            spaceId: p.space_id,
                                            table: o().yBS
                                        },
                                        parentId: p.id
                                    })
                                }), Object.values(p.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        s.push({
                                            pointer: {
                                                table: o().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: d.parentId
                                        })
                                    }
                                })), null != (n = p.format) && n.layout_pointer && s.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, n(496282).Yt)(l, o().Gy1) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: i,
                                    recordMap: a,
                                    inMemoryRecordCache: o,
                                    currentUserId: r,
                                    cursors: l,
                                    cursor: s,
                                    options: d
                                } = e, c = o.getRecord({
                                    pointer: i,
                                    userId: r
                                });
                                if (!(null != c && c.value)) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                (c.value.parent_id === s.parentId || s.skipParentIdCheck) && ("form_editor" === c.value.type && null != (t = c.value.format) && t.form_block_pointer && l.push({
                                    pointer: c.value.format.form_block_pointer,
                                    parentId: c.value.id
                                }), null != (n = c.value.format) && n.dashboard_layout_pointer && l.push({
                                    pointer: c.value.format.dashboard_layout_pointer,
                                    parentId: c.value.id
                                }), a.setValue(i, c.value))
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, n(496282).Yt)(l, o().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    cursors: r,
                                    cursor: l,
                                    options: s
                                } = e, d = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != d && d.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (d.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, d.value), d.value.action_ids ? ? [])) r.push({
                                        pointer: {
                                            table: o().SC1,
                                            id: e,
                                            spaceId: d.value.space_id
                                        },
                                        parentId: d.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, n(496282).Yt)(l, o().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    cursors: r,
                                    cursor: l,
                                    options: s
                                } = e, d = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != d && d.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: l.pointer
                                } : void 0;
                                if (d.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, d.value), d.value.blocks ? ? [])) r.push({
                                        pointer: {
                                            table: o().evP,
                                            id: e,
                                            spaceId: d.value.space_id
                                        },
                                        parentId: d.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, n(496282).Yt)(l, o().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    cursor: o,
                                    options: r
                                } = e, l = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != l && l.value)) return r.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: o.pointer
                                } : void 0;
                                l.value.parent_id === o.parentId && n.setValue(t, l.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursor: p,
                                options: m
                            }) : (0, n(496282).Yt)(l, o().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: i,
                                    recordMap: a,
                                    inMemoryRecordCache: r,
                                    currentUserId: l,
                                    cursors: s,
                                    options: d
                                } = e, c = r.getRecord({
                                    pointer: i,
                                    userId: l
                                }), u = null == c ? void 0 : c.value;
                                if (!u) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                let p = u.parent_id !== e.cursor.parentId ? { ...u,
                                        parent_id: e.cursor.parentId
                                    } : u,
                                    m = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let i = r.getRecord({
                                                pointer: (0, n(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: l
                                            });
                                            return (null == i || null == (t = i.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: m
                                        }
                                    }, a.setValue(i, p), n(993189).Bj6.fromValue(o().zx0, p).getBlockChildrenPointers())) s.push({
                                    pointer: e,
                                    parentId: i.id
                                });
                                let f = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: o().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return s.push({
                                        pointer: t,
                                        parentId: i.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, n(322268).E)(p.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: o().lo9,
                                            spaceId: p.space_id
                                        };
                                        s.push({
                                            pointer: t,
                                            parentId: i.id
                                        })
                                    } else if ("view" === e.type) f(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && f(t)
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            }) : (0, n(496282).Yt)(l, o().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: a,
                                    options: o
                                } = e, r = i.getRecord({
                                    pointer: t,
                                    userId: a
                                });
                                if (!(null != r && r.value)) return o.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                n.setValue(t, r.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: m
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: u,
                            inMemoryRecordCache: s,
                            currentUserId: c,
                            cursors: m,
                            cursor: e,
                            options: d,
                            isRootRequest: t
                        });
                    if (f) return f;
                    p.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: u
                }
            }
        },
        574657: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleFillSmallIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                a = (0, n(104509).wt)("checkmarkCircleFillSmall", i, "fillSmall")
        },
        582471: (e, t, n) => {
            n.d(t, {
                Y: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                o = {
                    position: "relative"
                };

            function r(e) {
                let {
                    iconAndTitle: t,
                    description: r
                } = e;
                return t || r ? (0, i.jsxs)(n(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: o,
                    children: [t, r ? (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: a,
                        children: r
                    }) : null]
                }) : null
            }
        },
        589563: (e, t, n) => {
            n.d(t, {
                Ah: () => d,
                Dk: () => r,
                Iv: () => s,
                SF: () => l,
                YO: () => p,
                _f: () => f,
                c_: () => a,
                dW: () => u,
                gW: () => o,
                sp: () => g,
                vN: () => c
            }), n(16280), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            var i = () => n(722371);

            function a(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function o(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "delete_automation_step",
                    properties: t
                })
            }

            function r(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_create",
                    properties: t
                })
            }

            function l(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_update",
                    properties: t
                })
            }

            function s(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_delete",
                    properties: t
                })
            }

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_enable",
                    properties: t
                })
            }

            function c(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_disable",
                    properties: t
                })
            }

            function u(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_create",
                    properties: t
                })
            }

            function p(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_delete",
                    properties: t
                })
            }

            function m(e) {
                let {
                    formulaAnalyticsModule: t,
                    formulasModule: a,
                    formulaTypecheckContextValues: o,
                    getRecordModel: r,
                    spaceId: l,
                    value: s,
                    featureGates: d
                } = e;
                if ("formula" === s.type) {
                    if (!(0, i().O9)(s.value)) return;
                    let e = n(300441).Q.unwrapOr(a.parseFormulaInputToAst(s.value), void 0);
                    if (e) {
                        let i = a.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, n(297493).zg)(r),
                            spaceId: l,
                            valueTypes: o,
                            featureGates: d
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: r,
                                typecheckContextValues: o
                            }),
                            formula_return_type: i.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: r,
                                typecheckContextValues: o
                            })
                        }
                    }
                } else if ("simple" === s.type) {
                    if (!(0, i().O9)(s.value)) return;
                    return t.getSimpleFormulaAnalytics(s.value, {
                        getRecordModel: r,
                        typecheckContextValues: o
                    })
                } else(0, i().HB)(s.type)
            }

            function f(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d,
                    simpleFormulasModule: c
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: n,
                            formulaAnalyticsModule: a,
                            formulasModule: o,
                            formulaTypecheckContextValues: r,
                            getRecordModel: l,
                            featureGates: s
                        } = e,
                        d = n.getConfig(),
                        c = [],
                        u = null == d ? void 0 : d.collection,
                        p = null == d ? void 0 : d.properties;
                    if ((0, i().O9)(u) && (0, i().O9)(p) && p.length > 0) {
                        let e = l(u),
                            g = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, i().O9)(g) && (c = p.map(e => {
                            var t;
                            return (null == (t = g[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let y = null == d ? void 0 : d.values;
                        if (o && (0, i().O9)(y))
                            for (let e of (t = [], p)) {
                                var f;
                                let i = null == (f = y[e]) ? void 0 : f.value;
                                if (!i) continue;
                                let d = m({
                                    formulaAnalyticsModule: a,
                                    formulasModule: o,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: r,
                                    spaceId: n.spaceId,
                                    value: i,
                                    featureGates: s
                                });
                                d && t.push(d)
                            }
                    }
                    return {
                        automation_action_id: n.pointer.id,
                        property_formula_stats: t,
                        property_types: c,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: o,
                        getRecordModel: r,
                        featureGates: l
                    } = e, s = t.getConfig(), d = [];
                    if (a && (0, i().O9)(s) && s.text) {
                        let e = m({
                            formulasModule: a,
                            formulaAnalyticsModule: n,
                            getRecordModel: r,
                            formulaTypecheckContextValues: o,
                            spaceId: t.spaceId,
                            value: s.text,
                            featureGates: l
                        });
                        e && d.push(e)
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: d,
                        type: "modal_confirmation"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, a;
                    let {
                        automationActionModel: o,
                        formulaAnalyticsModule: r,
                        formulasModule: l,
                        formulaTypecheckContextValues: s,
                        getRecordModel: d,
                        featureGates: c,
                        simpleFormulasModule: u
                    } = e, p = {
                        automation_action_id: o.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, f = o.getConfig();
                    if (!(0, i().O9)(f)) return p;
                    if ((0, i().O9)(f.target)) {
                        if ("formula" === f.target.type && (0, i().O9)(f.target.value)) {
                            if (p.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, n(247438).Fbh)(f.target.value.value).length,
                                    numFormulaContextTargets: u.getReferencedContextValueIds(f.target.value).length
                                }, l) {
                                let e = m({
                                    formulasModule: l,
                                    formulaAnalyticsModule: r,
                                    getRecordModel: d,
                                    formulaTypecheckContextValues: s,
                                    spaceId: o.spaceId,
                                    value: f.target.value,
                                    featureGates: c
                                });
                                e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                            }
                        } else if ("property" === f.target.type && (0, i().O9)(f.target.propertyId) && (0, i().O9)(f.target.collectionPointer)) {
                            let e = d(f.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, i().O9)(t) && (p.targetData = {
                                type: "property",
                                propertyType: null == (a = t[f.target.propertyId]) ? void 0 : a.type
                            })
                        }
                    }
                    if ((0, i().O9)(null == (t = f.notification_message) ? void 0 : t.value) && (p.messageCharacterCount = (0, n(247438).FAw)(f.notification_message.value), l)) {
                        let e = m({
                            formulasModule: l,
                            formulaAnalyticsModule: r,
                            getRecordModel: d,
                            formulaTypecheckContextValues: s,
                            spaceId: o.spaceId,
                            value: f.notification_message,
                            featureGates: c
                        });
                        e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                    }
                    return p
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d,
                    simpleFormulasModule: c
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, a, o, r, l, s, d;
                    let {
                        automationActionModel: c,
                        formulaAnalyticsModule: u,
                        formulasModule: p,
                        formulaTypecheckContextValues: f,
                        getRecordModel: g,
                        featureGates: y
                    } = e, h = c.getConfig();
                    if (!(0, i().O9)(h)) return {
                        automation_action_id: c.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let v = Object.fromEntries(Object.entries(h || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var n;
                                return [e, !!(null == t || null == (n = t.value) ? void 0 : n.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: b,
                            cc: _,
                            bcc: x
                        } = h,
                        w = [...(null == b || null == (t = b.value) ? void 0 : t.value) || [], ...(null == _ || null == (a = _.value) ? void 0 : a.value) || [], ...(null == x || null == (o = x.value) ? void 0 : o.value) || []],
                        S = [...(0, n(247438).Fbh)(w).map(e => g({
                            table: n(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(i().O9), ...(0, n(801109).C3)((0, n(247438).k4p)(w))],
                        k = (0, n(763230).Tr)(S.map(e => e.split("@")[1])),
                        M = [null == (r = h.to) ? void 0 : r.value, null == (l = h.cc) ? void 0 : l.value, null == (s = h.bcc) ? void 0 : s.value, null == (d = h.reply_to) ? void 0 : d.value, h.from_name, h.email_subject, h.email_body].map(e => {
                            if (p && (0, i().O9)(e)) return m({
                                formulaAnalyticsModule: u,
                                formulasModule: p,
                                getRecordModel: g,
                                formulaTypecheckContextValues: f,
                                spaceId: c.spaceId,
                                value: e,
                                featureGates: y
                            })
                        }).filter(i().O9);
                    return {
                        automation_action_id: c.pointer.id,
                        fields: v,
                        formula_stats: M,
                        recipient_domains: k,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: a,
                        formulaAnalyticsModule: o,
                        formulasModule: r,
                        formulaTypecheckContextValues: l,
                        getRecordModel: s,
                        featureGates: d
                    } = e, c = t.getConfig(), u = [], p = [], f = [];
                    if ((0, i().O9)(c) && (0, i().O9)(c.target) && (0, i().O9)(c.properties) && c.properties.length > 0) {
                        let e;
                        if ("variable" === c.target.type) {
                            let t = (0, n(297493).y5)(c.target.id);
                            if ("action" === t.source) {
                                let t = (0, n(33529).y)({
                                    actionModels: a,
                                    id: c.target.id
                                }).collectionPointer;
                                if ((0, i().O9)(t)) {
                                    let n = s(t);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, n(297493).IV)(l, c.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, i().O9)(t.type.collection)) {
                                    let n = s(t.type.collection);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === c.target.type) {
                            let t = s(c.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(s)
                        }(0, i().O9)(e) && c.properties.forEach(n => {
                            let a = e[n];
                            if ((0, i().O9)(a) && (u.push(a.type), r && (0, i().O9)(c.values))) {
                                let e = c.values[n];
                                if ((0, i().O9)(e) && (p.push({
                                        type: a.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let n = m({
                                        formulasModule: r,
                                        formulaAnalyticsModule: o,
                                        getRecordModel: s,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: d
                                    });
                                    n && f.push(n)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: p,
                        property_formula_stats: f,
                        property_types: u,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: a,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: a,
                        formulaTypecheckContextValues: o,
                        getRecordModel: r,
                        featureGates: l
                    } = e, s = t.getConfig(), d = [];
                    if (a && (0, i().O9)(s) && s.values) {
                        for (let e of Object.values(s.values))
                            if (e.value) {
                                let i = m({
                                    formulasModule: a,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: r,
                                    formulaTypecheckContextValues: o,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                i && d.push(i)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: d,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: o,
                    formulasModule: r,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("http_request") ? {
                    automation_action_id: t.pointer.id,
                    type: "http_request"
                } : t.isType("publish_site") ? {
                    automation_action_id: t.pointer.id,
                    type: "publish_site"
                } : t.isType("worker") ? {
                    automation_action_id: t.pointer.id,
                    type: "worker"
                } : t.isType("archive_pages") ? {
                    automation_action_id: t.pointer.id,
                    type: "archive_pages"
                } : void(0, i().HB)(t)
            }

            function g(e) {
                var t, a;
                let o, r, l, {
                        automationModel: s,
                        builderType: d = "sidebar",
                        formulaAnalyticsModule: c,
                        formulasModule: u,
                        formulaTypecheckContextValues: p,
                        getRecordModel: m,
                        featureGates: g,
                        simpleFormulasModule: y,
                        source: h
                    } = e,
                    v = [],
                    b = s.getActionPointers().map(e => m(e)).filter(i().O9);
                for (let e of s.getActionPointers()) {
                    let t = m(e);
                    (0, i().O9)(t) && v.push(f({
                        automationActionModel: t,
                        automationActionModels: b,
                        formulaAnalyticsModule: c,
                        formulasModule: u,
                        formulaTypecheckContextValues: p,
                        getRecordModel: m,
                        featureGates: g,
                        simpleFormulasModule: y
                    }))
                }
                let _ = [];
                if (s.isEventType()) {
                    let e = s.getEventConfiguration(),
                        a = m(s.getParentPointer());
                    o = s.getParentId();
                    let d = s.getEventConfiguration();
                    if ((null == (t = d.source) ? void 0 : t.type) === "collection_view") {
                        let e = m(d.source.pointer);
                        (null == e ? void 0 : e.parent_table) === n(682956).ev && (l = null == e ? void 0 : e.parent_id), r = null == d ? void 0 : d.source.pointer.id
                    }
                    let c = null == a ? void 0 : a.getNormalizedSchema(m);
                    if ((0, i().O9)(c)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: n
                        } = e;
                        if (t && _.push({
                                type: "page"
                            }), "any" === n.type) _.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === n.type) _.push({
                            condition: "none",
                            type: "property"
                        });
                        else {
                            let e = [];
                            "some" === n.type ? e = n.some ? ? [] : "all" === n.type && (e = n.all ? ? []);
                            let t = [],
                                a = [];
                            e.forEach(e => {
                                var n;
                                let o = null == (n = c[e.property]) ? void 0 : n.type;
                                (0, i().O9)(o) && (t.push({
                                    type: o,
                                    operator: e.filter.operator
                                }), a.push(o))
                            }), _.push({
                                condition: n.type,
                                property_configs: t,
                                property_types: a,
                                type: "property"
                            })
                        }
                    }
                } else s.isButtonType() ? _.push({
                    type: "button"
                }) : s.isRecurrenceType() ? _.push({
                    type: "recurrence",
                    frequency: null == (a = s.getTrigger().recurrence) ? void 0 : a.frequency
                }) : (0, i().HB)(s);
                return {
                    automation_actions: v,
                    automation_id: s.id,
                    automation_triggers: _,
                    collection_id: o,
                    collection_view_id: r,
                    collection_view_block_id: l,
                    builder_type: d,
                    source: h
                }
            }
        },
        591637: (e, t, n) => {
            n.d(t, {
                a: () => o
            }), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);
            let a = {
                style0: {
                    width: 200
                },
                style1: {
                    minWidth: 200
                },
                caption: {
                    color: n(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: n(699422).Wy.regular,
                    lineHeight: "15px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function o(e) {
                var t;
                let {
                    caption: o,
                    layout: r,
                    sectionGap: l,
                    secondaryButtonTooltip: s
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !o) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === r ? (0, i.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: l ? ? 8,
                        ...a.positionRelative
                    },
                    children: [(0, i.jsxs)(n(4458).VP, {
                        style: {
                            gap: 7,
                            ...a.positionRelative
                        },
                        children: [d.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t)), o ? (0, i.jsx)("div", {
                            style: a.caption,
                            children: o
                        }) : null]
                    }), u ? s ? (0, i.jsx)(n(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: a.style0,
                        placement: "bottom",
                        children: e => (0, i.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, i.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, i.jsx)("div", {
                        children: c.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === r ? (0, i.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: l ? ? 8,
                        ...a.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, i.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, i.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === r ? (0, i.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? s ? (0, i.jsx)(n(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: a.style1,
                        placement: "bottom",
                        children: e => (0, i.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, i.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, i.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, i.jsx)("div", {
                        children: d.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, n(722371).HB)(r)
            }
        },
        598974: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => a,
                notionTemplateIcon: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            fill: "#FFB110",
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, i.jsx)("path", {
                            fill: "#097FE8",
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, i.jsx)("path", {
                            fill: "#F64932",
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, n(104509).wt)("notionTemplate", a, "default")
        },
        605263: (e, t, n) => {
            n.d(t, {
                K4: () => s,
                To: () => p,
                fi: () => d,
                q8: () => l,
                u: () => r
            }), n(16280), n(18107), n(967357);
            var i = n(296540),
                a = n(474848);
            let o = (0, i.createContext)({
                ancestors: []
            });

            function r(e) {
                let {
                    automationStore: t,
                    children: r,
                    contextType: l,
                    collectionStore: s,
                    collectionSettingsStore: d,
                    collectionViewBlockStore: p,
                    collectionViewStore: m,
                    enableExistenceGuarantees: f
                } = e, g = (0, n(533992).v3)(), y = (0, n(109939).tz)(), {
                    value: h
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: v
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), b = (0, n(470569).o)(t), _ = (0, n(67499).S)(), x = (0, n(682985).K8)(() => h ? v ? function(e) {
                    let {
                        environment: t,
                        automationStore: i,
                        automationTypecheckModule: a,
                        contextType: o,
                        formulasModule: r,
                        intl: l,
                        subscriptionInfo: s,
                        pageStore: d,
                        enableExistenceGuarantees: p
                    } = e, m = p ? c.get(i) : c.get(i) ? ? u.get(i);
                    if (m) return m;
                    let f = new(n(345426)).ComputedStore(() => {
                        let e = i.getTriggerType(),
                            c = o;
                        return (0, n(722371).O9)(e) && (0, n(432705).x2)(e) && (c = (0, n(432705).H8)(e)), (0, n(100197).Z)({
                            environment: t,
                            automationStore: i,
                            automationTypecheckModule: a,
                            contextType: c,
                            formulasModule: r,
                            intl: l,
                            subscriptionInfo: s,
                            pageStore: d,
                            enableExistenceGuarantees: p
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return p && c.set(i, f), u.set(i, f), f
                }({
                    automationStore: t,
                    automationTypecheckModule: v,
                    contextType: l,
                    environment: g,
                    formulasModule: h,
                    intl: y,
                    subscriptionInfo: b,
                    pageStore: "button_block" === l ? null == _ ? void 0 : _.pageStore : void 0,
                    enableExistenceGuarantees: f
                }).state : {
                    error: new(n(600005)).N9("Missing automation dependency")
                } : {
                    error: new(n(600005)).N9("Missing formulas dependency")
                }, [g, t, v, l, h, y, b, null == _ ? void 0 : _.pageStore, f]), w = (0, i.useContext)(o), S = (0, i.useMemo)(() => 0 === w.ancestors.length ? [{
                    automationStore: t,
                    contextType: l,
                    typecheckResult: x,
                    collectionStore: s,
                    collectionSettingsStore: d,
                    collectionViewBlockStore: p,
                    collectionViewStore: m
                }] : [...w.ancestors, {
                    automationStore: t,
                    contextType: l,
                    typecheckResult: x,
                    collectionStore: s,
                    collectionSettingsStore: d,
                    collectionViewBlockStore: p,
                    collectionViewStore: m
                }], [w, t, l, x, s, d, p, m]), k = (0, i.useMemo)(() => ({
                    ancestors: S,
                    enableExistenceGuarantees: f
                }), [S, f]);
                return (0, a.jsx)(o.Provider, {
                    value: k,
                    children: r
                })
            }

            function l() {
                let e = (0, i.useContext)(o).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function s() {
                return (0, i.useContext)(o).ancestors.at(-1)
            }

            function d() {
                return (0, i.useContext)(o).enableExistenceGuarantees
            }
            o.displayName = "AutomationContext", o.Consumer;
            let c = new WeakMap,
                u = new WeakMap;

            function p(e) {
                var t;
                return null == (t = c.get(e)) ? void 0 : t.state
            }
        },
        609328: (e, t, n) => {
            n.d(t, {
                P: () => o
            }), n(944114), n(296540);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function o({
                environment: e,
                title: t,
                ...r
            }) {
                var l, s, d;
                let c = [],
                    u = null == (l = r.error) ? void 0 : l.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (d = s.terminate) || d.call(s)), c.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, n(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: a.errorStacktraceCopied
                            })
                        }
                    })
                }
                c.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, i.jsx)(n(109939).sA, { ...n(647095)._0.dismissButtonLabel
                    }),
                    onAccept: n(763230).D_
                }), n(647095).ui({
                    message: t,
                    description: (0, i.jsx)(n(149795).dD, { ...r
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: c
                })
            }
        },
        623644: (e, t, n) => {
            n.d(t, {
                NX: () => a,
                gp: () => r,
                h9: () => o,
                i6: () => s,
                rj: () => l,
                tw: () => i
            }), n(581454);
            let i = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                a = ["2022-06-28", "2025-09-03", "2026-03-11"],
                o = "2026-03-11",
                r = "2022-06-28",
                l = "2026-03-11";
            n(489561).CA.literals(...i);
            let s = "2025-09-03"
        },
        638501: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                plusSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.74 2.74 10.52 10.52",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.74a.66.66 0 0 1 .66.66v3.94h3.94a.66.66 0 0 1 0 1.32H8.66v3.94a.66.66 0 0 1-1.32 0V8.66H3.4a.66.66 0 0 1 0-1.32h3.94V3.4A.66.66 0 0 1 8 2.74"
                    })
                },
                a = (0, n(104509).wt)("plusSmall", i, "small")
        },
        647414: (e, t, n) => {
            n.d(t, {
                DZ: () => i,
                l4: () => a
            });
            let i = (0, n(109939).YK)({
                notionCalendar: {
                    defaultMessage: "Notion Calendar",
                    id: "templateHelpers.connectedApps.notionCalendar"
                },
                gettingStarted: {
                    defaultMessage: "Getting started",
                    id: "templateHelpers.personas.gettingStarted"
                },
                life: {
                    defaultMessage: "Life",
                    id: "templateGallery.sidebar.life"
                },
                personal: {
                    defaultMessage: "Personal",
                    id: "templateHelpers.personas.personal"
                },
                designer: {
                    defaultMessage: "Design",
                    id: "templateHelpers.personas.design"
                },
                engineering: {
                    defaultMessage: "Engineering",
                    id: "templateHelpers.personas.engineering"
                },
                marketing: {
                    defaultMessage: "Marketing",
                    id: "templateHelpers.personas.marketing"
                },
                media: {
                    defaultMessage: "Media",
                    id: "templateHelpers.personas.media"
                },
                it: {
                    defaultMessage: "IT",
                    id: "templateHelpers.personas.it"
                },
                entrepreneur: {
                    defaultMessage: "Entrepreneur",
                    id: "templateHelpers.personas.entrepreneur"
                },
                freelancer: {
                    defaultMessage: "Freelancer",
                    id: "templateHelpers.personas.freelancer"
                },
                educator: {
                    defaultMessage: "Educator",
                    id: "templateHelpers.personas.educator"
                },
                student: {
                    defaultMessage: "Student",
                    id: "templateHelpers.personas.student"
                },
                other: {
                    defaultMessage: "Other",
                    id: "templateHelpers.personas.otherOptionLabel"
                },
                hr: {
                    defaultMessage: "Human resources",
                    id: "templateHelpers.personas.humanResources"
                },
                truncated_hr: {
                    defaultMessage: "HR",
                    id: "templateHelpers.personas.truncated.humanResources"
                },
                productManagement: {
                    defaultMessage: "Product management",
                    id: "templateHelpers.personas.productManagement"
                },
                productManagementV2: {
                    defaultMessage: "Product",
                    id: "templateHelpers.personas.productManagementV2"
                },
                support: {
                    defaultMessage: "Support",
                    id: "templateHelpers.personas.support"
                },
                education: {
                    defaultMessage: "Education",
                    id: "templateHelpers.personas.education"
                },
                sales: {
                    defaultMessage: "Sales",
                    id: "templateHelpers.personas.sales"
                },
                getStartedPage: {
                    defaultMessage: "Getting started",
                    id: "templateHelpers.templates.getStarted"
                },
                getStartedPageEvernote: {
                    defaultMessage: "Getting started from Evernote",
                    id: "templateHelpers.templates.getStartedOnEvernote"
                },
                getStartedPageMobile: {
                    defaultMessage: "Getting started on mobile",
                    id: "templateHelpers.templates.getStartedOnMobile"
                },
                readingList: {
                    defaultMessage: "Reading List",
                    id: "templateHelpers.templates.readingList"
                },
                taskList: {
                    defaultMessage: "Task List",
                    id: "templateHelpers.templates.taskList"
                },
                todoList: {
                    defaultMessage: "To-do List",
                    id: "templateHelpers.templates.todo"
                },
                journal: {
                    defaultMessage: "Journal",
                    id: "templateHelpers.templates.journal"
                },
                travelPlanner: {
                    defaultMessage: "Travel Planner",
                    id: "templateHelpers.templates.travelPlanner"
                },
                quickNote: {
                    defaultMessage: "Quick Note",
                    id: "templateHelpers.templates.quickNote"
                },
                blogPost: {
                    defaultMessage: "Blog Post",
                    id: "templateHelpers.templates.blogPost"
                },
                personalHome: {
                    defaultMessage: "Personal Home",
                    id: "templateHelpers.templates.personalHome"
                },
                userResearch: {
                    defaultMessage: "User Research Database",
                    id: "templateHelpers.templates.userResearchDatabase"
                },
                userResearchDescription: {
                    defaultMessage: "Use this template to schedule and track the status of your user research.",
                    id: "templateHelpers.templates.userResearchDatabase.description"
                },
                designSystem: {
                    defaultMessage: "Design System",
                    id: "templateHelpers.templates.designSystem"
                },
                designSystemDescription: {
                    defaultMessage: "A design system is a great way to keep everyone aligned. Use this template to document design patterns, assets, and brand, and make assets downloadable for everyone on your team.",
                    id: "templateHelpers.templates.designSystem.description"
                },
                engineeringWiki: {
                    defaultMessage: "Engineering Wiki",
                    id: "templateHelpers.templates.engineeringWiki"
                },
                engineeringWikiDescription: {
                    defaultMessage: "Use this template to give engineering teams a single source of truth for processes, documentation, and projects, build good programming habits, and keep everyone aligned.",
                    id: "templateHelpers.templates.engineeringWiki.description"
                },
                engineeringMeetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.templates.meetingNotes"
                },
                brandAssets: {
                    defaultMessage: "Brand Assets",
                    id: "templateHelpers.templates.brandAssets"
                },
                brandAssetsDescription: {
                    defaultMessage: "This template makes it easy to keep track of brand assets like logos, images, and fonts by tagging them so they’re easily sortable by file type or application.",
                    id: "templateHelpers.templates.brandAssets.description"
                },
                marketingWiki: {
                    defaultMessage: "Marketing Wiki",
                    id: "templateHelpers.templates.marketingWiki"
                },
                mediaList: {
                    defaultMessage: "Media List",
                    id: "templateHelpers.templates.mediaList"
                },
                mediaListDescription: {
                    defaultMessage: "Use this template to follow news coverage of your company and the people reporting it. Subpages help you keep track of press details and more.",
                    id: "templateHelpers.templates.mediaList.description"
                },
                contentCalendar: {
                    defaultMessage: "Content Calendar",
                    id: "templateHelpers.templates.contentCalendar"
                },
                contentCalendarDescription: {
                    defaultMessage: "Use this template to schedule and track all the content you’re putting out, from blog posts to podcasts to tweets.",
                    id: "templateHelpers.templates.contentCalendar.description"
                },
                moodBoard: {
                    defaultMessage: "Mood Board",
                    id: "templateHelpers.templates.moodBoard"
                },
                moodBoardDescription: {
                    defaultMessage: "Ideal template for assembling mood or inspiration boards for events, products, brand campaigns, and more.",
                    id: "templateHelpers.templates.moodBoard.description"
                },
                jobBoard: {
                    defaultMessage: "Job Board",
                    id: "templateHelpers.templates.jobBoard"
                },
                jobBoardDescription: {
                    defaultMessage: "Easily list and edit your company’s openings with this jobs templates that lets you make real-time changes to a lightweight, public-facing job site. ",
                    id: "templateHelpers.templates.jobBoard.description"
                },
                newHireOnboarding: {
                    defaultMessage: "New Hire Onboarding",
                    id: "templateHelpers.templates.newHireOnboarding"
                },
                newHireOnboardingDescription: {
                    defaultMessage: "Onboarding checklists help new hires get settled at your company. You can sort by status, team, and start date, and click into any individual card to review onboarding tasks and notes for that person.",
                    id: "templateHelpers.templates.newHireOnboarding.description"
                },
                applicantTracker: {
                    defaultMessage: "Applicant Tracker",
                    id: "templateHelpers.templates.applicantTracker"
                },
                applicantTrackerDescription: {
                    defaultMessage: "Manage candidate progress across the hiring cycle with this template that lets you easily view each candidate’s information, notes, documents, offers, next steps, and more.",
                    id: "templateHelpers.templates.applicantTracker.description"
                },
                companyHome: {
                    defaultMessage: "Company Home",
                    id: "templateHelpers.templates.companyHome"
                },
                companyHomeDescription: {
                    defaultMessage: "Every company needs a place where important info is easy to find. This template gathers everything your company needs in order to run smoothly, from mission and values to the employee directory. ",
                    id: "templateHelpers.templates.companyHome.description"
                },
                productWiki: {
                    defaultMessage: "Product Wiki",
                    id: "templateHelpers.templates.productWiki"
                },
                productWikiDescription: {
                    defaultMessage: "Organize all your product-related documentation with this template, which unifies guides and processes in one place with easy-to-navigate sections.",
                    id: "templateHelpers.templates.productWiki.description"
                },
                salesCRM: {
                    defaultMessage: "Sales CRM",
                    id: "templateHelpers.templates.salesCRM"
                },
                salesCRMDescription: {
                    defaultMessage: "Your sales funnel doesn’t have to feel like heavy SaaS software. This template offers you a clean canvas to define only the fields you need to track leads.",
                    id: "templateHelpers.templates.salesCRM.description"
                },
                salesWiki: {
                    defaultMessage: "Sales Wiki",
                    id: "templateHelpers.templates.salesWiki"
                },
                salesWikiDescription: {
                    defaultMessage: "With this template you can keep all your company’s sales documentation and projects in one place so crucial info is easy for anyone across the team or organization to find at a moment’s notice. ",
                    id: "templateHelpers.templates.salesWiki.description"
                },
                competitiveAnalysis: {
                    defaultMessage: "Competitive Analysis",
                    id: "templateHelpers.templates.competitiveAnalysis"
                },
                salesAssets: {
                    defaultMessage: "Sales Assets",
                    id: "templateHelpers.templates.salesAssets"
                },
                salesAssetsDescription: {
                    defaultMessage: "Use this template to keep your sales assets organized so you always use the proper demo, white paper, video, etc. for every meeting. You can upload any type of file to this page for instant access and version control.",
                    id: "templateHelpers.templates.salesAssets.description"
                },
                productFAQs: {
                    defaultMessage: "Product FAQs",
                    id: "templateHelpers.templates.productFAQs"
                },
                productFAQsDescription: {
                    defaultMessage: "Keep responses to your customers’ common support questions in one place for everyone to see. Every row of this template is its own Notion page, to which you can add any content you want.",
                    id: "templateHelpers.templates.productFAQs.description"
                },
                helpCenter: {
                    defaultMessage: "Help Center",
                    id: "templateHelpers.templates.helpCenter"
                },
                helpCenterDescription: {
                    defaultMessage: "This template lets you build your own help center, with columns, headings, and sub-pages. You can easily share this page with users and quickly add new support pages as needed.",
                    id: "templateHelpers.templates.helpCenter.description"
                },
                classNotes: {
                    defaultMessage: "Class Notes",
                    id: "templateHelpers.templates.classNotes"
                },
                jobApplications: {
                    defaultMessage: "Job Applications",
                    id: "templateHelpers.templates.jobApplications"
                },
                gradeCalculator: {
                    defaultMessage: "Grade Calculator",
                    id: "templateHelpers.templates.gradeCalculator"
                },
                clubHomepage: {
                    defaultMessage: "Club Homepage",
                    id: "templateHelpers.templates.clubHomepage"
                },
                cornellNotesSystem: {
                    defaultMessage: "Cornell Notes System",
                    id: "templateHelpers.templates.cornellNotesSystem"
                },
                personalCRM: {
                    defaultMessage: "Personal CRM",
                    id: "templateHelpers.templates.personalCRM"
                },
                simpleBudget: {
                    defaultMessage: "Simple Budget",
                    id: "templateHelpers.templates.simpleBudget"
                },
                syllabus: {
                    defaultMessage: "Syllabus",
                    id: "templateHelpers.templates.syllabus"
                },
                classroomHome: {
                    defaultMessage: "Classroom Home",
                    id: "templateHelpers.templates.classroomHome"
                },
                lessonPlans: {
                    defaultMessage: "Lesson Plans",
                    id: "templateHelpers.templates.lessonPlans"
                },
                courseSchedule: {
                    defaultMessage: "Course Schedule",
                    id: "templateHelpers.templates.courseSchedule"
                },
                groupProjects: {
                    defaultMessage: "Group Projects",
                    id: "templateHelpers.templates.groupProjects"
                },
                classDirectory: {
                    defaultMessage: "Class Directory",
                    id: "templateHelpers.templates.classDirectory"
                },
                lifeWiki: {
                    defaultMessage: "Life Wiki",
                    id: "templateHelpers.templates.lifeWiki"
                },
                habitTracker: {
                    defaultMessage: "Habit Tracker",
                    id: "templateHelpers.templates.habitTracker"
                },
                hobbies: {
                    defaultMessage: "Hobbies",
                    id: "templateHelpers.templates.hobbies"
                },
                resume: {
                    defaultMessage: "Resume",
                    id: "templateHelpers.templates.resume"
                },
                resumeDescription: {
                    defaultMessage: "Build a beautiful, functional resume within your Notion workspace, make it publicly accessible and send over the link with your job applications. You can keep improving the resume even after you send it out.",
                    id: "templateHelpers.templates.resume.description"
                },
                teamsGettingStarted: {
                    defaultMessage: "Teams Getting Started",
                    id: "templateHelpers.templates.teamsGettingStarted"
                },
                teamsHomepage: {
                    defaultMessage: "Teamspaces Home",
                    id: "templateHelpers.templates.teamsHomepage"
                },
                wiki: {
                    defaultMessage: "Team Wiki",
                    id: "templateHelpers.templates.wiki"
                },
                notes: {
                    defaultMessage: "Notes & docs",
                    id: "templateHelpers.templates.notes"
                },
                projectManagement: {
                    defaultMessage: "Project & tasks",
                    id: "templateHelpers.templates.projectManagement"
                },
                suggested: {
                    defaultMessage: "Suggested templates",
                    id: "templateHelpers.personas.suggestedTemplates"
                },
                suggestedCategory: {
                    defaultMessage: "Suggested",
                    id: "templateGallery.sidebar.suggested"
                },
                teamHome: {
                    defaultMessage: "Team Home",
                    id: "templateHelpers.useCase.teamHome"
                },
                teamTasks: {
                    defaultMessage: "Team Tasks",
                    id: "templateHelpers.useCase.teamTasks"
                },
                teamMeetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.useCase.teamMeetingNotes"
                },
                teamDocs: {
                    defaultMessage: "Docs",
                    id: "templateHelpers.useCase.teamDocs"
                },
                peopleDirectory: {
                    defaultMessage: "People Directory",
                    id: "templateHelpers.useCase.peopleDirectory"
                },
                peopleDirectoryDescription: {
                    defaultMessage: "Help your team keep track of who’s who with this simple template. Each card can be updated to store an employee’s bio, past achievements, goals, and more. ",
                    id: "templateHelpers.useCase.peopleDirectory.description"
                },
                employeeBenefits: {
                    defaultMessage: "Employee Benefits",
                    id: "templateHelpers.useCase.employeeBenefits"
                },
                employeeBenefitsDescription: {
                    defaultMessage: "This template is a perfect place to describe your company’s benefits and link out to all necessary info so your employees feel appreciated and informed.",
                    id: "templateHelpers.useCase.employeeBenefits.description"
                },
                recruitingTracker: {
                    defaultMessage: "Recruiting Tracker",
                    id: "templateHelpers.useCase.recruitingTracker"
                },
                recruitingTrackerDescription: {
                    defaultMessage: "This template makes it easy for your company to keep up with your headcount, including job postings and relevant details like role, status, location, and more.",
                    id: "templateHelpers.useCase.recruitingTracker.description"
                },
                investorUpdate: {
                    defaultMessage: "Investor Update",
                    id: "templateHelpers.useCase.investorUpdate"
                },
                investorUpdateDescription: {
                    defaultMessage: "Instead of sending the usual disorganized email updates to your investors, use this template to offer them a more comprehensive and digestible look at your company’s progress.",
                    id: "templateHelpers.useCase.investorUpdate.description"
                },
                designSprint: {
                    defaultMessage: "Design Sprint",
                    id: "templateHelpers.useCase.designSprint"
                },
                designSprintDescription: {
                    defaultMessage: "This template is designed to help design teams continuously track and iterate on their projects, from creative sprints to finished projects based on user feedback.",
                    id: "templateHelpers.useCase.designSprint.description"
                },
                visionAndStrategy: {
                    defaultMessage: "Vision and strategy",
                    id: "templateHelpers.useCase.visionAndStrategy"
                },
                visionAndStrategyDescription: {
                    defaultMessage: "Use this template to put your organization’s guiding principles in one place so that they stay top of mind and easy for employees to reference.",
                    id: "templateHelpers.useCase.visionAndStrategy.description"
                },
                designPortfolio: {
                    defaultMessage: "Design Portfolio",
                    id: "templateHelpers.useCase.designPortfolio"
                },
                designPortfolioDescription: {
                    defaultMessage: "Use this template to showcase creative projects you’ve worked on and offer more context on their purpose and the development process you or your team followed.",
                    id: "templateHelpers.useCase.designPortfolio.description"
                },
                teamWiki: {
                    defaultMessage: "Team Wiki",
                    id: "templateHelpers.useCase.teamWiki"
                },
                defaultWiki: {
                    defaultMessage: "Wiki",
                    id: "templateHelpers.useCase.wiki"
                },
                teamWikiDescription: {
                    defaultMessage: "This template lets every team in your company create and manage a personalized homepage where they can organize processes, projects, and knowledge specific to their work.",
                    id: "templateHelpers.useCase.teamWiki.description"
                },
                teamGoals: {
                    defaultMessage: "Goals",
                    id: "templateHelpers.useCase.teamGoals"
                },
                campaignBrief: {
                    defaultMessage: "Campaign Brief",
                    id: "templateHelpers.useCase.campaignBrief"
                },
                campaignBriefDescription: {
                    defaultMessage: "Use this template to brief other team members on any given campaign’s goals, messaging, timeline, and more. You can also easily add any relevant supporting documents so everyone in the company stays well-informed. ",
                    id: "templateHelpers.useCase.campaignBrief.description"
                },
                presentation: {
                    defaultMessage: "Presentation",
                    id: "templateHelpers.useCase.presentation"
                },
                presentationDescription: {
                    defaultMessage: "Use this template to present new ideas and status updates to your team, organized in a way that’s easily updated and scannable. ",
                    id: "templateHelpers.useCase.presentation.description"
                },
                experimentResults: {
                    defaultMessage: "Experiment Results",
                    id: "templateHelpers.useCase.experimentResults"
                },
                experimentResultsDescription: {
                    defaultMessage: "Use this template to track your experiments along with their results. Anyone from any team can quickly add an experiment by using the database templates.",
                    id: "templateHelpers.useCase.experimentResults.description"
                },
                engineeringTechSpec: {
                    defaultMessage: "Engineering Tech Spec",
                    id: "templateHelpers.useCase.engineeringTechSpec"
                },
                engineeringTechSpecDescription: {
                    defaultMessage: "Use this template to organize a project kickoff and deliver the necessary context so team members are all up to speed and well-informed.",
                    id: "templateHelpers.useCase.engineeringTechSpec.description"
                },
                productSpec: {
                    defaultMessage: "Product Spec",
                    id: "templateHelpers.useCase.productSpec"
                },
                productSpecDescription: {
                    defaultMessage: "A product spec should contain all the info your team needs to build something new. Use this template as a source of truth to give context, set goals, see edge cases, and plan development steps.",
                    id: "templateHelpers.useCase.productSpec.description"
                },
                interviewGuide: {
                    defaultMessage: "Interview Guide",
                    id: "templateHelpers.useCase.interviewGuide"
                },
                interviewGuideDescription: {
                    defaultMessage: "Use this template to prepare your job candidates for their interviews and offer them helpful resources like videos, links, schedules and more.",
                    id: "templateHelpers.useCase.interviewGuide.description"
                },
                brainstorm: {
                    defaultMessage: "Remote Brainstorming",
                    id: "templateHelpers.useCase.brainstorm"
                },
                brainstormDescription: {
                    defaultMessage: "Boost your team’s remote collaboration with this remote brainstorming template. Designed to streamline brainstorming sessions and maximize creativity using Notion’s new button and AI blocks. This template helps team members to generate brainstorming questions and effortlessly contribute ideas with just a click of a button. Use this template for seamless idea generation and action planning.",
                    id: "templateHelpers.useCase.brainstorm.description"
                },
                oneOnOneNotes: {
                    defaultMessage: "1:1 Notes",
                    id: "templateHelpers.useCase.oneOnOneNotes"
                },
                oneOnOneNotesDescription: {
                    defaultMessage: "This template is perfect for keeping all of your 1:1 notes and docs in one place. You can add dates to each meeting and even check off action items as the week progresses.",
                    id: "templateHelpers.useCase.oneOnOneNotes.description"
                },
                productLaunchBrief: {
                    defaultMessage: "Product Launch Brief",
                    id: "templateHelpers.useCase.productLaunchBrief"
                },
                productLaunchBriefDescription: {
                    defaultMessage: "Use this template to plan and execute every part of your launch with your team, in one, centralized page.",
                    id: "templateHelpers.useCase.productLaunchBrief.description"
                },
                blogEditorialCalendar: {
                    defaultMessage: "Blog Editorial Calendar",
                    id: "templateHelpers.useCase.blogEditorialCalendar"
                },
                blogEditorialCalendarDescription: {
                    defaultMessage: "Use this template to plan and write all your marketing content with a database that lets you track each project’s status, audience, author, reviewer, publish date, and more. ",
                    id: "templateHelpers.useCase.blogEditorialCalendar.description"
                },
                socialMediaCalendar: {
                    defaultMessage: "Social Media Calendar",
                    id: "templateHelpers.useCase.socialMediaCalendar"
                },
                socialMediaCalendarDescription: {
                    defaultMessage: "Use this template to draft, plan, and write all of your social posts in one simple database. You can view your own posts in a calendar to get an idea of timelines, or switch to a board view to see platform usage.",
                    id: "templateHelpers.useCase.socialMediaCalendar.description"
                },
                simpleBudgetDescription: {
                    defaultMessage: "Track your spending to reach your financial goals. Set a monthly cap for your spending, then enter your expenses in the database below. View your expenses in different ways using different database views.",
                    id: "templateHelpers.useCase.simpleBudget.description"
                },
                readingListDescription: {
                    defaultMessage: "The modern day reading list includes more than just books. We’ve created a dashboard to help you track all of the articles, videos, podcasts, blog posts, Twitter threads, and — yes, books.",
                    id: "templateHelpers.useCase.readingList.description"
                },
                habitTrackerDescription: {
                    defaultMessage: "Keep yourself accountable by tracking your habits everyday. With Notion’s new button block, you can easily check off completed habits for the day with a single click. Whether you’re trying to drink more water, exercise regularly, or meditate every day, this template will help you build healthy habits with ease.",
                    id: "templateHelpers.useCase.habitTracker.description"
                },
                travelPlannerDescription: {
                    defaultMessage: "Travel planning can be a fragmented mess with different documents and information everywhere. With this template, you can pull all the essential details about your plans into one spot.",
                    id: "templateHelpers.useCase.travelPlanner.description"
                },
                jobApplicationsDescription: {
                    defaultMessage: "Keep track of the entire job application process all in one page. Easily add customized resumes, cover letters, and portfolio’s while keeping track of companies you’ve reached out to.",
                    id: "templateHelpers.useCase.jobApplication.description"
                },
                meetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.useCase.meetingNotes"
                },
                weeklyPlan: {
                    defaultMessage: "Weekly Plan",
                    id: "templateHelpers.useCase.weeklyPlan"
                },
                weeklyPlanDescription: {
                    defaultMessage: "Use this template to plan and organize all the work you need to accomplish over the next week. Visualize your most important to-do’s with an agenda that helps you prioritize.",
                    id: "templateHelpers.useCase.weeklyPlan.description"
                },
                weeklyTodo: {
                    defaultMessage: "Weekly To-do List",
                    id: "templateHelpers.useCase.weeklyTodo"
                },
                weeklyTodoDescription: {
                    defaultMessage: "Use this template to plan and organize all the work you need to accomplish over the next week. Visualize your most important to-do’s with an agenda that helps you prioritize.",
                    id: "templateHelpers.useCase.weeklyTodo.description"
                },
                journalDescription: {
                    defaultMessage: "Document your life - daily happenings, special occasions, and reflections on your goals. Categorize entries with tags and automatically capture the date.",
                    id: "templateHelpers.useCase.journal.description"
                },
                quickNoteDescription: {
                    defaultMessage: "This template gives you a sense of the many different types of content you can add while taking quick notes in any situation. It includes a to-do list, web bookmarks, sub-headings, and more!",
                    id: "templateHelpers.useCase.quickNote.description"
                },
                personalHomeDescription: {
                    defaultMessage: "Just like a wiki can help keep all the important information in a company somewhere central, a personal wiki can give you a helpful knowledge base for your life!",
                    id: "templateHelpers.useCase.personalHome.description"
                },
                lifeWikiDescription: {
                    defaultMessage: "Plan and keep track of your entire life with this comprehensive dashboard. Take charge of your growth with setting goals, tracking daily habits and maintaining a log of everything you’re reading.",
                    id: "templateHelpers.useCase.lifeWiki.description"
                },
                blogPostDescription: {
                    defaultMessage: "Use this template as a format for your blog posts. Format your writing and images in any format you like. Make your page live by enable the ‘Share to web’ feature.",
                    id: "templateHelpers.useCase.blogPost.description"
                },
                personalCRMDescription: {
                    defaultMessage: "Keep track of all the people you meet, what you know about them, when to reach out, and whether they’re a professional contact. Be the person who always follows up and knows the exact gift to give.",
                    id: "templateHelpers.useCase.personalCRM.description"
                },
                classNotesDescription: {
                    defaultMessage: "Keep all your notes from all your classes in one spot. This template makes it easy to capture all your notes and tag them by class, date, and topic.",
                    id: "templateHelpers.useCase.classNotes.description"
                },
                classDirectoryDescription: {
                    defaultMessage: "Put names to faces. Use this directory to track class participation, absences, and take any other notes that will be helpful when it comes time to calculate final grades or give feedback to students.",
                    id: "templateHelpers.useCase.classDirectory.description"
                },
                clubHomepageDescription: {
                    defaultMessage: "We know that school probably isn’t just about school for you. Notion is the perfect solution for managing information for clubs, organizations, and group projects.",
                    id: "templateHelpers.useCase.clubHomepage.description"
                },
                gradeCalculatorDescription: {
                    defaultMessage: "Strategize your quarter or semester by knowing how much every assignment, exam, and project is worth for your final grade. Use this template to stay on top of your grades and plan accordingly.",
                    id: "templateHelpers.useCase.gradeCalculator.description"
                },
                cornellNotesSystemDescription: {
                    defaultMessage: "In the 1940s, Cornell Professor Walter Pauk developed a new note-taking system to give college students a better way to organize, condense, and intake knowledge. Here’s the Notion version!",
                    id: "templateHelpers.useCase.cornellNotesSystem.description"
                },
                syllabusDescription: {
                    defaultMessage: "Create a digital syllabus that all your students can easily access on the web. Notion makes building a web page like this as easy as typing a document. Just replace this sample content with your own!",
                    id: "templateHelpers.useCase.syllabus.description"
                },
                classroomHomeDescription: {
                    defaultMessage: "Give your students one source of truth for class information, course materials, assignments, announcements, scheduling and more. Editing this web page is as easy as writing any document.",
                    id: "templateHelpers.useCase.classroomHome.description"
                },
                lessonPlansDescription: {
                    defaultMessage: "These lesson plans are based on Harvard Business School’s Elements of Effective Class Preparation. This makes it easy to track their status, keep all related notes in one spot, and make progress.",
                    id: "templateHelpers.useCase.lessonPlans.description"
                },
                classroomManagement: {
                    defaultMessage: "Classroom Management",
                    id: "templateHelpers.useCase.classroomManagement"
                },
                courseScheduleDescription: {
                    defaultMessage: "This course schedule provides a comprehensive list of weekly topics, readings, assignments, and exams. You can create your own categories and topics for whatever you’re teaching.",
                    id: "templateHelpers.useCase.courseSchedule.description"
                },
                studentPlanner: {
                    defaultMessage: "Student Planner",
                    id: "templateHelpers.useCase.studentPlanner"
                },
                studentPlannerDescription: {
                    id: "templateHelpers.useCase.studentPlanner.description",
                    defaultMessage: "From your courses to your calendar, personal projects to club meetings and event, use this template to stay organized, focused, and inspired to have a successful school year."
                },
                scratchpad: {
                    defaultMessage: "Scratchpad",
                    id: "templateHelpers.private.scratchpad"
                },
                aiUpgrade: {
                    defaultMessage: "Getting Started with Notion AI",
                    id: "templateHelpers.private.aiUpgrade"
                },
                websiteBuilder: {
                    defaultMessage: "Website Builder",
                    id: "templateHelpers.private.websiteBuilder"
                },
                research: {
                    defaultMessage: "Research",
                    id: "templateHelpers.private.research"
                },
                galaxyStudyNotebook: {
                    defaultMessage: "Galaxy Study Notebook",
                    id: "templateHelpers.samsung.galaxyStudyNotebook"
                },
                galaxyLifePlanner: {
                    defaultMessage: "Galaxy Life Planner",
                    id: "templateHelpers.samsung.galaxyLifePlanner"
                },
                galaxyCompanyHome: {
                    defaultMessage: "Galaxy Company Home",
                    id: "templateHelpers.samsung.galaxyCompanyHome"
                }
            });
            (0, n(109939).YK)({
                creative: {
                    id: "teamHelpers.creativeTeam.name",
                    defaultMessage: "Creative"
                },
                support: {
                    id: "teamHelpers.supportTeam.name",
                    defaultMessage: "Customer Service"
                },
                educator: {
                    id: "teamHelpers.educatorTeam.name",
                    defaultMessage: "Educator"
                },
                eng: {
                    id: "teamHelpers.engTeam.name",
                    defaultMessage: "Engineering"
                },
                finance: {
                    id: "teamHelpers.financeTeam.name",
                    defaultMessage: "Finance"
                },
                founder_or_ceo: {
                    id: "teamHelpers.founderCeoTeam.name",
                    defaultMessage: "Executive"
                },
                hr: {
                    id: "teamHelpers.hrTeam.name",
                    defaultMessage: "Human Resources"
                },
                internal_communication: {
                    id: "teamHelpers.internalCommunicationTeam.name",
                    defaultMessage: "Internal Communication"
                },
                it_admin: {
                    id: "teamHelpers.itAdminTeam.name",
                    defaultMessage: "IT Admin"
                },
                knowledge_management: {
                    id: "teamHelpers.knowledgeManagementTeam.name",
                    defaultMessage: "Knowledge Management"
                },
                marketing: {
                    id: "teamHelpers.marketingTeam.name",
                    defaultMessage: "Marketing"
                },
                operations: {
                    id: "teamHelpers.operationsTeam.name",
                    defaultMessage: "Operations"
                },
                product_design: {
                    id: "teamHelpers.productDesignTeam.name",
                    defaultMessage: "Product Design"
                },
                product: {
                    id: "teamHelpers.productTeam.name",
                    defaultMessage: "Product Management"
                },
                project_or_program_management: {
                    id: "teamHelpers.projectProgramMgmtTeam.name",
                    defaultMessage: "Project / Program Management"
                },
                sales: {
                    id: "teamHelpers.salesTeam.name",
                    defaultMessage: "Sales"
                },
                student: {
                    id: "teamHelpers.studentTeam.name",
                    defaultMessage: "Student"
                },
                other: {
                    id: "teamHelpers.otherTeam.name",
                    defaultMessage: "Your Team"
                }
            });
            let a = (0, n(109939).YK)({
                generalTeamLabel: {
                    defaultMessage: "General",
                    id: "teamHelpers.generalTeam.name"
                },
                personaTeamDescription: {
                    id: "teamHelpers.personaTeam.description",
                    defaultMessage: "A home for you and your team"
                },
                workspaceNameHq: {
                    defaultMessage: "{workspaceName} HQ",
                    id: "templateMessages.workspaceNameHQ"
                }
            })
        },
        665002: (e, t, n) => {
            n.d(t, {
                H: () => s,
                g: () => d
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                    disableHoverAnimations: !1
                },
                r = {
                    disableHoverAnimations: !0
                },
                l = (0, i.createContext)(o);

            function s({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, a.jsx)(l.Provider, {
                    value: e ? r : o,
                    children: t
                })
            }

            function d() {
                return (0, i.useContext)(l).disableHoverAnimations
            }
            l.displayName = "SidebarItemHoverAnimationContext"
        },
        665887: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        from: void 0,
                        collectionContextStore: void 0
                    }
                }
            }
            let o = new a
        },
        666236: (e, t, n) => {
            n.d(t, {
                P: () => i
            });

            function i(e) {
                let {
                    environment: t
                } = e;
                (0, n(79266).navigate)({
                    environment: t,
                    url: n(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        674880: (e, t, n) => {
            n.d(t, {
                BX: () => m,
                Jv: () => p,
                Kf: () => s,
                WM: () => o,
                Xd: () => f,
                Xw: () => g,
                defaultInferenceContextStore: () => i,
                fd: () => c,
                i6: () => l,
                uP: () => d
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let i = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    i = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && i) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: i,
                    blockStore: a,
                    peekStore: n(475097).default.state.open ? n(475097).default.state.targetStore : void 0,
                    workflowStore: (0, n(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function a(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let i = (0, n(444610).U)(e),
                        a = null == i ? void 0 : i.collectionViewStore();
                    a && (t[e.id] = a.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let i = (0, n(444610).U)(e),
                            a = null == i ? void 0 : i.collectionViewStore();
                        a && (t[e.id] = a.id)
                    }
                });
                return t
            }

            function o(e) {
                let {
                    environment: t,
                    surface: i,
                    inferenceContext: o,
                    config: r,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: d
                } = e, {
                    userStore: c,
                    spaceStore: u,
                    spaceViewStore: p,
                    blockStore: m,
                    peekStore: f,
                    workflowStore: g
                } = o, y = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: u.id
                }), h = "meet" === t.RouterStore.state.route.name, v = { ...m && m.isCollectionView() ? {
                        collectionViewBlockId: m.id,
                        visibleCollectionViewIds: a(m)
                    } : void 0,
                    ...m && !m.isCollectionView() && "personal_home_page" !== m.getType() && "daily_brief_reminder" !== i ? {
                        blockId: m.id,
                        visibleCollectionViewIds: a(m)
                    } : void 0,
                    ...f ? {
                        peekBlockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...g ? {
                        workflowId: g.id
                    } : void 0,
                    ...h ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: i,
                            userId: a
                        } = e, o = t.idCreator.getSpaceIdCreatorSync(i), r = (0, n(413388).sX)(a, o);
                        return {
                            collectionViewBlockId: r,
                            visibleCollectionViewIds: {
                                [r]: (0, n(413388).X$)(a, o)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: u.id,
                        userId: c.id
                    }) : void 0
                }, b = {};
                if ("workflow" !== r.type || !r.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var _;
                        t.name && (b.agentName = t.name), null != (_ = t.customization_items) && _[0] && (b.agentAccessory = t.customization_items[0]), t.context_page_id && (b.context_page_id = t.context_page_id)
                    }
                }
                let x = function(e) {
                    var t, i, a;
                    let {
                        config: o,
                        workflowStore: r
                    } = e;
                    if ("workflow" !== o.type || !o.isCustomAgent || !r) return;
                    let l = !0 === o.useCustomAgentDraft || !0 === o.use_draft_actor_pointer ? (null == (t = r.getDraftData()) ? void 0 : t.instructions) ? ? (null == (i = r.getData()) ? void 0 : i.instructions) : null == (a = r.getPublishedArtifactStore()) || null == (a = a.getData()) ? void 0 : a.instructions;
                    if ((0, n(886883).ap)(l)) return l.id
                }({
                    config: r,
                    workflowStore: g
                });
                if (x && (b.context_page_id = x), n(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: y,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: i,
                        ...v,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === i && s && d ? {
                            checklistId: s,
                            checklistStepId: d
                        } : {},
                        ...b
                    }
                };
                let w = n(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: i = 10
                    } = e;
                    return n(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, i)
                }({
                    spaceId: u.id
                }) : void 0;
                return {
                    id: y,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: c.getName(),
                        userId: c.id,
                        userEmail: c.getEmail(),
                        spaceName: u.getName(),
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: i,
                        ...v,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === i && s && d ? {
                            checklistId: s,
                            checklistStepId: d
                        } : {},
                        ...b,
                        recentPageVisits: w
                    }
                }
            }

            function r(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    config: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "config",
                    value: a
                }
            }

            function l(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: i,
                    config: a
                } = e;
                if (!t.some(e => "config" === e.type)) return r({
                    environment: n,
                    spaceStore: i,
                    config: a
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    value: a,
                    userStore: o
                } = e, r = u(a);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user",
                    value: r,
                    userId: o.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    actualMessage: a,
                    displayMessage: o,
                    userStore: r,
                    surveyStepId: l,
                    sourceStepId: s
                } = e, d = u(a) ? ? [], c = u(o);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user-injected",
                    actualMessage: d,
                    displayMessage: c,
                    userId: r.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: l,
                    sourceStepId: s
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    agentMessageKey: a,
                    instructions: o
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: a,
                    instructions: o
                }
            }

            function u(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: i,
                promptType: a,
                value: o,
                locale: r,
                args: l
            }) {
                return {
                    id: (0, n(295447).Z1)({
                        environment: e,
                        table: n(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: a,
                    userId: i.id,
                    createdAt: Date.now(),
                    value: o,
                    locale: r,
                    isEdited: !1,
                    args: l
                }
            }

            function m(e) {
                let t, i, {
                    environment: a,
                    spaceId: o,
                    pointers: r,
                    selectedBlockStores: l,
                    textSelection: s,
                    blockSelectionContext: d,
                    textSelectionContext: c
                } = e;
                if (d) t = d;
                else if (l && l.length > 0) {
                    let e = (0, n(685745).B)(l);
                    e && (t = {
                        type: "blocks",
                        value: l.map(e => e.pointer),
                        text: (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) i = c;
                else if (s && s.start.store.pointer.table === n(832375).evP && s.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        a = e.length > 1200;
                    i = {
                        type: "text",
                        value: {
                            start: {
                                pointer: s.start.store.pointer,
                                index: s.start.index
                            },
                            end: {
                                pointer: s.end.store.pointer,
                                index: s.end.index
                            }
                        },
                        text: t,
                        ...a ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== r.length || t || i) return {
                    id: (0, n(295447).Z1)({
                        environment: a,
                        table: n(832375).mSw,
                        spaceId: o
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: r,
                        blockSelection: t,
                        textSelection: i
                    }
                }
            }

            function f(e) {
                let {
                    environment: t,
                    inferenceContext: i,
                    config: a,
                    addSteps: l,
                    surface: s,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                } = e, p = [r({
                    environment: t,
                    spaceStore: i.spaceStore,
                    config: a
                }), o({
                    environment: t,
                    inferenceContext: i,
                    surface: s,
                    config: a,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                })];
                return l && p.push(...l), p.filter(n(722371).O9)
            }

            function g(e) {
                let {
                    environment: t,
                    spaceId: i,
                    message: a,
                    notificationType: o = "info",
                    metadata: r
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i
                    }),
                    type: "system-notification",
                    message: a,
                    notificationType: o,
                    metadata: r
                }
            }
        },
        678064: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(581454), n(296540);
            var i = n(474848);
            let a = function({
                    currentLocale: e,
                    confirm: t,
                    onChange: a,
                    origin: o,
                    showGlobeIcon: l,
                    showVisibleLabelPrefix: s = !1
                }) {
                    (0, n(533992).v3)();
                    let d = (0, n(109939).tz)(),
                        c = (0, n(682985).uB)(void 0, n(510969).A),
                        u = (0, n(83208).X)("polyglot");
                    if (n(986939).A.isMobile) return null;
                    let p = (0, n(601587).Vn)(d)[e].languageNameInThatLanguage,
                        m = l ? n(988022).p : n(548436).A;
                    return (0, i.jsx)(n(656252).A, {
                        onClick: () => {
                            (0, n(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: o
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: n(656252).z.Popup,
                        buttonPopupStore: c,
                        ariaLabel: d.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: o => {
                            let l = u ? [...n(619157).fy, ...n(619157).Tf] : [...n(619157).fy],
                                s = [{
                                    key: "languages",
                                    render: e => (0, i.jsx)(n(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, n(601587).O8)(l, d).map(l => ({
                                        key: l,
                                        render: e => (function(e, t, a, o) {
                                            let {
                                                languageNameInThatLanguage: l,
                                                languageNameInCurrentLanguage: s
                                            } = (0, n(601587).Vn)(o)[e];
                                            return (0, i.jsx)(r, {
                                                label: l,
                                                caption: s,
                                                focused: t,
                                                props: a,
                                                locale: e
                                            })
                                        })(l, e.focused, e, d),
                                        action: () => {
                                            var r, s, c, u, p;
                                            r = l, s = e, c = d, u = t, p = a, s !== r && function(e, t, a, o) {
                                                let {
                                                    languageNameInThatLanguage: r
                                                } = (0, n(601587).Vn)(t)[e];
                                                a ? n(647095).ui({
                                                    showCancel: !0,
                                                    keepFocus: !1,
                                                    message: (0, i.jsx)(n(109939).sA, {
                                                        id: "languagePicker.changeLanguage.confirmationMessage",
                                                        defaultMessage: "Are you sure you want to update the language to {language}?",
                                                        values: {
                                                            language: r
                                                        }
                                                    }),
                                                    items: [{
                                                        label: (0, i.jsx)(n(109939).sA, {
                                                            id: "languagePicker.changeLanguage.updateButton.label",
                                                            defaultMessage: "Update"
                                                        }),
                                                        color: "red",
                                                        onAccept: () => {
                                                            o(e)
                                                        }
                                                    }]
                                                }) : o(e)
                                            }(r, c, u, p), o.close()
                                        }
                                    }))
                                }],
                                c = {
                                    menuType: n(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, i.jsx)(n(747369).A, {
                                className: n(828432).jtA,
                                ...c,
                                children: (0, i.jsx)(n(558045).A, {
                                    type: n(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: s
                                })
                            })
                        },
                        children: e => (0, i.jsx)(m, {
                            "aria-label": d.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: p
                            }),
                            colorPalette: l ? "gray" : void 0,
                            iconLeading: l ? n(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: n(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: s ? (0, i.jsx)(n(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: p
                                }
                            }) : p
                        })
                    })
                },
                o = {
                    style1: {
                        marginInlineEnd: 0
                    },
                    style2: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function r(e) {
                return (0, i.jsx)(n(95582).A, { ...e.props,
                    title: (0, i.jsx)(n(4458).fI, {
                        alignItems: "center",
                        children: (0, i.jsx)("div", {
                            style: { ...e.style,
                                ...o.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, i.jsx)("span", {
                        style: o.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        682006: (e, t, n) => {
            n.d(t, {
                a: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                a = (0, n(104509).wt)("duplicateSmall", i, "small")
        },
        685745: (e, t, n) => {
            n.d(t, {
                B: () => r
            });
            var i = () => n(129499),
                a = () => n(955630);

            function o(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && n(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== a().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function r(e) {
                let t, a = o(e);
                if (!a) return;
                let r = o([...e].reverse());
                if (!r) return;
                let l = (0, n(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: a.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!l) return;
                let s = (0, n(787926).mP)(r.blockStore, l);
                if (s) {
                    for (let e of (0, n(827049).Y_)(s)) {
                        let n = e.value.store.getTitleStore();
                        if (n) {
                            let e = (0, i().s)(n);
                            e && (t = {
                                store: n,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: a.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        690004: (e, t, n) => {
            n.d(t, {
                r: () => i
            });
            let i = (0, n(477465).Dv)("importEvernote")
        },
        691509: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(944114), n(898992), n(803949), n(581454);
            var i = n(296540),
                a = n(474848);
            let o = function({
                children: e,
                onClick: t,
                items: i,
                getKey: o,
                renderItem: r,
                selectedItem: s,
                onSelect: d,
                dontCloseParentOnSelect: c,
                menuTypeOverride: u,
                menuTitle: p,
                width: m,
                minWidth: f,
                disabled: g,
                originGap: y,
                originRectTransform: h,
                buttonPopupStore: v,
                sameWidthAsOrigin: b
            }) {
                let _ = (0, n(682985).uB)(v, n(510969).A),
                    x = u ? ? (n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup);
                return (0, a.jsx)(n(656252).A, {
                    popupType: function(e) {
                        switch (e) {
                            case n(649476).gu.ActionSheet:
                                return n(423291).n.SlideUp;
                            case n(649476).gu.Modal:
                                return n(423291).n.BottomSheet;
                            case n(649476).gu.Popup:
                                return n(423291).n.Popup
                        }
                    }(x),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: _,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, a.jsx)(l, {
                        parent: e,
                        items: i,
                        getKey: o,
                        renderItem: r,
                        selectedItem: s,
                        onSelect: d,
                        dontCloseParentOnSelect: c,
                        menuType: x,
                        menuTitle: p,
                        width: m,
                        minWidth: f
                    }),
                    disabled: g,
                    originGap: y,
                    originRectTransform: h,
                    sameWidthAsOrigin: b,
                    children: e
                })
            };

            function r(e, t, a, o, r, l, s, d) {
                return {
                    key: 0,
                    render: e => (0, i.createElement)(n(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: o(e),
                        render: t => r({ ...t,
                            value: e,
                            key: o(e),
                            selectedItem: l
                        }),
                        action: () => {
                            l !== e && s(e), d || a.close()
                        }
                    }))
                }
            }

            function l({
                parent: e,
                items: t,
                getKey: i,
                renderItem: o,
                selectedItem: s,
                onSelect: d,
                dontCloseParentOnSelect: c,
                menuType: u,
                menuTitle: p,
                width: m,
                minWidth: f
            }) {
                let g, y = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, n) => {
                    let a = r(t, n, e, i, o, s, d, c);
                    y.push(a)
                });
                else {
                    let n = r(t, 0, e, i, o, s, d, c);
                    y.push(n)
                }
                let h = (0, a.jsx)(n(558045).A, {
                    type: n(558045).O.Vertical,
                    initialFocus: n(381453).SL(n(381453).Bq(t), e => n(381453).n4(e, s)),
                    sections: y
                });
                switch (u) {
                    case n(649476).gu.ActionSheet:
                        g = {
                            menuType: n(649476).gu.ActionSheet
                        };
                        break;
                    case n(649476).gu.Modal:
                        g = {
                            menuType: n(649476).gu.Modal,
                            title: p,
                            right: (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case n(649476).gu.Popup:
                        g = {
                            menuType: n(649476).gu.Popup,
                            width: m || 160,
                            minWidth: f
                        };
                        break;
                    default:
                        (0, n(722371).HB)(u)
                }
                return (0, a.jsx)(n(747369).A, { ...g,
                    children: h
                })
            }
        },
        695142: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowDiagonalUpRightFillIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                a = (0, n(104509).wt)("arrowDiagonalUpRightFill", i, "fill")
        },
        697198: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => a,
                lockSmallIcon: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 1.59 9.66 12.45",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 8.1a1.125 1.125 0 0 0-.525 2.12v.93a.525.525 0 1 0 1.05 0v-.93A1.125 1.125 0 0 0 8 8.1"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.6a3.25 3.25 0 0 0-3.25 3.25v1a2.026 2.026 0 0 0-1.575 1.975v4.2c0 1.118.907 2.025 2.025 2.025h5.6a2.025 2.025 0 0 0 2.025-2.025v-4.2c0-.964-.673-1.77-1.575-1.975v-1A3.25 3.25 0 0 0 8 1.6M6 4.85a2 2 0 1 1 4 0v.95H6zM4.425 7.825c0-.428.347-.775.775-.775h5.6c.428 0 .775.347.775.775v4.2a.775.775 0 0 1-.775.775H5.2a.775.775 0 0 1-.775-.775z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("lockSmall", a, "small")
        },
        699978: (e, t, n) => {
            n.d(t, {
                C4: () => a,
                Nf: () => r,
                qM: () => o
            }), n(16280), n(944114), n(898992), n(430670), n(581454);
            let i = (0, n(109939).YK)({
                authError: {
                    defaultMessage: "Auth failed. Please try again or contact Notion support.",
                    id: "database.viewSettings.propertyTypeSection.connected.authFail"
                },
                mobileAdminError: {
                    defaultMessage: "Ask your workspace admin to configure the GitHub (Workspace) app in settings to use this feature.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileAdminError"
                },
                mobileError: {
                    defaultMessage: "Please authorize this integration on the desktop app or a browser.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileError"
                }
            });
            async function a({
                environment: e,
                collectionStore: t,
                integration: o,
                canOnlyAdminAuth: r
            }) {
                let l = null == t ? void 0 : t.getSpaceStore();
                if (!l) return;
                let s = (0, n(88937).jw)(o.id).length;
                if (n(986939).A.isMobile && r && !s) {
                    let e = n(962299).A.formatMessage(i.mobileAdminError);
                    throw n(647095).f1(e), Error(e)
                }
                if (n(986939).A.isMobile && !r && !s) {
                    let e = n(962299).A.formatMessage(i.mobileError);
                    throw n(647095).f1(e), Error(e)
                }
                if (!s && r && l.canAdmin() || !s && !r) try {
                    await n(211791).Jq({
                        environment: e,
                        integration: o,
                        spaceId: l.id,
                        from: "collection_settings_property_type"
                    })
                } catch (t) {
                    let e = n(962299).A.formatMessage(i.authError);
                    throw n(647095).f1(e), Error(e)
                }
                if (!(0, n(88937).jw)(o.id).length) {
                    let e = n(962299).A.formatMessage(i.authError);
                    throw n(647095).f1(e), Error(e)
                }
            }

            function o(e) {
                let {
                    environment: t,
                    pattern: i,
                    integration: a,
                    parentCollectionStore: o,
                    transaction: r
                } = e;
                if (!i.connected_relation_properties) throw Error("Cannot create a connected relation collection without properties");
                let l = new(n(356912)).m(t, (0, n(295447).zP)({
                        environment: t,
                        table: n(832375).VlP,
                        spaceId: o.pointer.spaceId
                    })),
                    s = {};
                i.connected_relation_sub_schemas && (0, n(722371).WP)(i.connected_relation_sub_schemas).map(([e, i]) => {
                    let a = new(n(356912)).m(t, (0, n(295447).zP)({
                            environment: t,
                            table: n(832375).VlP,
                            spaceId: o.pointer.spaceId
                        })),
                        d = {
                            id: a.id,
                            version: 0,
                            space_id: (0, n(226221).e)(o.pointer.spaceId),
                            parent_table: n(832375).VlP,
                            parent_id: l.id,
                            alive: !0,
                            format: {
                                bot_id: void 0,
                                external_object_id: void 0,
                                uri: e,
                                integration_id: void 0,
                                is_placeholder: void 0,
                                original_url: void 0,
                                domain: void 0,
                                external_schema: i,
                                sync_state: void 0,
                                pattern_name: void 0
                            },
                            schema: {}
                        };
                    s[e] = a.id, (0, n(173157).z)({
                        store: a,
                        data: d,
                        transaction: r
                    })
                });
                let d = {
                    id: l.id,
                    version: 0,
                    space_id: (0, n(226221).e)(o.pointer.spaceId),
                    parent_table: n(832375).VlP,
                    parent_id: o.id,
                    alive: !0,
                    format: {
                        attributes: [{
                            id: "title",
                            name: "title",
                            type: "inline",
                            format: {
                                type: "title",
                                section: "title"
                            },
                            values: [(0, n(607689).Fe)({
                                pattern: i,
                                integration: a
                            })]
                        }],
                        bot_id: void 0,
                        external_object_id: void 0,
                        uri: `notion://user-defined-collection/${a.id}/${i.name}`,
                        integration_id: a.id,
                        is_placeholder: void 0,
                        original_url: void 0,
                        domain: void 0,
                        external_schema: i.connected_relation_properties,
                        sync_state: void 0,
                        pattern_name: i.name,
                        related_external_object_uris_to_instance_ids: s
                    },
                    schema: {}
                };
                return (0, n(173157).z)({
                    store: l,
                    data: d,
                    transaction: r
                }), l
            }
            async function r(e) {
                let {
                    bot: t,
                    connected_relation_properties: i
                } = e;
                if (t.integration_id === n(49361).Iy || t.integration_id === n(49361).mn) return await l(e);
                let a = [];
                for (let e in i) {
                    let t = i[e];
                    null != t && t.name && null != t && t.type && a.push({
                        id: e,
                        name: t.name,
                        isSelected: !1,
                        type: t.type,
                        metadata: {
                            name: t.name,
                            label: t.name,
                            type: t.type,
                            custom: !1
                        },
                        isAlreadySynced: !1
                    })
                }
                return {
                    value: a
                }
            }
            async function l(e) {
                var t, i, a, o, r;
                let {
                    environment: l,
                    objectName: s,
                    spaceId: d,
                    bot: c
                } = e, u = await l.api.callApi({
                    eventName: "describeSalesforceObject",
                    environment: l,
                    data: {
                        spaceId: d,
                        objectName: s,
                        botId: c.id
                    }
                });
                if ((null == u ? void 0 : u.type) !== "success") return {
                    error: n(212527).qh.FAILED_TO_FETCH_SALESFORCE_PROPERTIES
                };
                if ((null == (t = u.data) ? void 0 : t.responseStatus) === n(212527).qh.REAUTHENTICATION_REQUIRED || (null == (i = u.data) ? void 0 : i.responseStatus) === n(212527).qh.NO_USER_API_ACCESS) return {
                    error: `${null==(o=u.data)?void 0:o.responseStatus}:${null==(r=u.data)?void 0:r.userType}`
                };
                let p = null == u || null == (a = u.data) ? void 0 : a.properties;
                return p ? {
                    value: p.flatMap(e => {
                        let t = e.custom ? e.label : e.relationshipName || e.label;
                        return "User" === e.referenceTo || "Group" === e.referenceTo ? [{
                            id: e.name,
                            name: t,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }, {
                            id: `mapped_${e.name}`,
                            name: `${t} (Notion User)`,
                            isSelected: !1,
                            type: "person",
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }] : [{
                            id: "Name" === e.name ? "title" : e.name,
                            name: "relation" === e.type ? t : e.label,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }]
                    })
                } : {
                    error: n(212527).qh.NO_PROPERTIES_FOUND
                }
            }
        },
        705820: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            let i = new(n(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!n(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let i = new(n(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await i.load(), !i.canAdmin()) return;
                let a = await e.api.callCellCompatibleApi({
                    eventName: "getEligibleIntervalSelectCampaigns",
                    environment: e,
                    data: {
                        spaceId: t
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: t
                    }
                });
                if ("success" === a.type) return a.data.campaigns
            });
            n(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", i)
        },
        710426: (e, t, n) => {
            n.d(t, {
                Ay: () => o,
                MR: () => l
            }), n(18107), n(967357), n(898992), n(354520), n(581454);
            var i = n(296540),
                a = n(474848);
            let o = i.memo(function(e) {
                let {
                    store: t,
                    from: i,
                    type: o,
                    canEditItem: l,
                    itemDepth: s,
                    isHovered: d,
                    isFocused: c,
                    onToggle: u
                } = e, m = n(986939).A.isMobile || d || c, f = (0, n(682985).K8)(() => {
                    var e;
                    let i = (0, n(162782).s)(t),
                        a = t.isPlaceholderWorkflowTemplateBlock(),
                        o = null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.isSyncedCollection(),
                        r = t.isPersonProfile(),
                        s = t.isPeopleCollectionViewPage();
                    return !!(t.getType() && l && !i && !a && !o && !r && !s)
                }, [t, l]), g = function(e) {
                    let {
                        showRightIcons: t
                    } = e;
                    return (0, n(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            paddingInlineStart: 3,
                            ...t ? {} : { ...n(69916).Qg,
                                display: "block"
                            }
                        }
                    }), [t])
                }({
                    showRightIcons: m
                });
                return o === n(171231).yy ? null : (0, a.jsx)("div", {
                    style: g.iconContainer,
                    children: "library" === i ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(p, {
                            store: t,
                            from: i,
                            type: e.type,
                            itemIndex: e.itemIndex,
                            itemDepth: s
                        }), f ? (0, a.jsx)(r, {
                            store: t,
                            onToggle: u,
                            isTopLevelItem: 0 === s,
                            from: i,
                            type: o
                        }) : void 0]
                    })
                })
            });

            function r(e) {
                let {
                    store: t,
                    onToggle: i,
                    isTopLevelItem: o,
                    from: r,
                    type: l
                } = e, d = (0, n(533992).v3)(), c = (0, n(109939).tz)(), p = (0, n(682985).K8)(() => t.isCollectionView(), [t]), m = (0, n(682985).K8)(() => t.getOwnedAndLinkedCollectionStores(), [t]), f = (0, n(682985).K8)(() => {
                    var e;
                    let i = null == (e = t.getCollectionViewStores().at(0)) ? void 0 : e.id;
                    if (!i) return;
                    let a = n(547131).p.createChildStore(t, {
                        table: n(832375).Gy1,
                        id: i
                    });
                    return null == a ? void 0 : a.getFormatStore().getValue()
                }, [t]), g = c.formatMessage(n(925021).v.addAPageInside);
                return p && !f && 0 === m.length ? (0, a.jsx)(s, {
                    disabled: !0
                }) : m.length <= 1 ? (0, a.jsx)(n(51831).m, {
                    content: () => g,
                    placement: "bottom",
                    children: e => {
                        let c = { ...e,
                            onClick: e => {
                                var a;
                                let s = (null == (a = m[0]) ? void 0 : a.getParentBlockStore()) ? ? t;
                                n(245757).ru({
                                    store: s,
                                    shouldNavigateToSource: !1,
                                    environment: d,
                                    analytics: {
                                        from: r,
                                        type: l
                                    },
                                    toggleOptions: {
                                        onToggle: i,
                                        isTopLevelItem: o
                                    }
                                })
                            }
                        };
                        return (0, a.jsx)(s, {
                            events: c
                        })
                    }
                }) : (0, a.jsx)(n(51831).m, {
                    content: () => g,
                    placement: "bottom",
                    children: e => (0, a.jsx)(n(656252).A, {
                        popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        content: e => (0, a.jsx)(u, {
                            blockStore: t,
                            parent: e,
                            from: r,
                            type: l
                        }),
                        children: t => (0, a.jsx)(s, {
                            events: (0, n(63390).A)(e, t)
                        })
                    })
                })
            }
            let l = {
                button: n(986939).A.isMobile ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    marginInlineStart: 0
                } : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    marginInlineStart: 4
                }
            };

            function s(e) {
                let t = (0, n(109939).tz)();
                return (0, a.jsx)(n(64960).Ay, {
                    ariaLabel: t.formatMessage(n(925021).v.addAPageInside),
                    style: l.button,
                    disabled: e.disabled,
                    disabledFeedback: e.disabled,
                    ...e.events,
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(638501).plusSmallIcon,
                        size: "sm",
                        colorVariant: n(986939).A.isMobile ? "tertiary" : "secondary"
                    })
                })
            }
            let d = {
                display: "flex",
                alignItems: "center",
                whiteSpace: "pre"
            };

            function c({
                itemProps: e,
                store: t,
                disabled: i,
                blockStore: o
            }) {
                let r = (0, n(682985).K8)(() => t.getIcon(), [t]),
                    l = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = t.getParentBlockStore()) ? void 0 : e.id) !== o.id
                    }, [t, o]);
                return (0, a.jsx)(n(95582).A, { ...e,
                    disabled: i,
                    disabledFeedback: !0,
                    title: (0, a.jsx)("div", {
                        style: d,
                        children: (0, a.jsx)(n(627918).A, {
                            store: t
                        })
                    }),
                    icon: (0, a.jsx)(n(734914).A, {
                        icon: r,
                        size: 14,
                        isEmptyPage: !1,
                        isAlias: l,
                        iconRecordCategory: "collection"
                    })
                })
            }

            function u(e) {
                let {
                    blockStore: t,
                    parent: i,
                    from: o,
                    type: r
                } = e, l = (0, n(533992).v3)(), s = (0, n(682985).K8)(() => t.getOwnedAndLinkedCollectionStores().filter(e => !e.isSyncedCollection()), [t]), d = (0, n(682985).K8)(() => s.map(e => !n(352441).Q.getData(l, {
                    collectionId: e.id,
                    spaceId: e.getSpaceId()
                })), [s, l]), u = {
                    menuType: n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup,
                    right: n(986939).A.isMobile ? (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                    }) : void 0
                }, p = {
                    key: "collections",
                    render: e => (0, a.jsx)(n(844565).A, { ...e,
                        title: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Add to",
                            id: "sidebarItem.addAPageInside.popup.addTo"
                        })
                    }),
                    items: s.map((e, i) => ({
                        key: e.id,
                        render: n => (0, a.jsx)(c, {
                            itemProps: n,
                            store: e,
                            disabled: d[i],
                            blockStore: t
                        }),
                        action: t => {
                            n(245757).ru({
                                store: e,
                                environment: l,
                                shouldNavigateToSource: !0,
                                analytics: {
                                    from: o,
                                    type: r
                                }
                            })
                        }
                    }))
                };
                return (0, a.jsx)(n(747369).A, { ...u,
                    children: (0, a.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        onAccept: i.close,
                        initialFocus: void 0,
                        sections: [p]
                    })
                })
            }

            function p(e) {
                let {
                    store: t,
                    from: i,
                    type: o,
                    itemDepth: r,
                    itemIndex: s
                } = e, d = (0, n(109939).tz)(), c = (0, n(533992).v3)(), u = e => {
                    let a = (0, n(297311).U)(t);
                    (0, n(472709).L)({
                        environment: c,
                        store: t
                    }), n(899964).it({
                        environment: c,
                        stores: [t],
                        left: e.clientX,
                        top: e.clientY,
                        showInput: !1,
                        actionSectionGroupKey: "sidebar_outliner",
                        analyticsFrom: "sidebar_more_menu",
                        optionalAnalyticsProperties: {
                            teamStore: a,
                            type: 0 === r ? "top_level" : "nested",
                            outliner_type: o,
                            outliner_position: s,
                            outliner_depth: r,
                            outliner_location: "main_sidebar" === i ? "sidebar" : "library" === i ? "library" : "pane"
                        }
                    })
                }, p = "bookmarks" === o ? d.formatMessage({
                    defaultMessage: "Remove, rename, and more…",
                    id: "sidebarItem.favoritedPageMenuButton.tooltip"
                }) : "myMeetings" === o ? d.formatMessage({
                    defaultMessage: "Copy, move, and more…",
                    id: "sidebarItem.meetingNoteMenuButton.tooltip"
                }) : d.formatMessage({
                    defaultMessage: "Delete, duplicate, and more…",
                    id: "sidebarItem.pageMenuButton.tooltip"
                });
                return (0, a.jsx)(n(51831).m, {
                    content: () => p,
                    placement: "bottom",
                    children: e => (0, a.jsx)(n(64960).Ay, {
                        ariaLabel: p,
                        style: l.button,
                        onClick: u,
                        ...e,
                        children: (0, a.jsx)(n(16275).I, {
                            icon: n(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: n(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                })
            }
        },
        726342: (e, t, n) => {
            n.d(t, {
                u: () => i
            });

            function i(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
        },
        731632: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {}
            let o = new a
        },
        734914: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                wrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: n(986939).A.isMobile ? 28 : 22,
                    height: n(986939).A.isMobile ? 24 : 18,
                    position: "relative"
                }
            };

            function o(e) {
                let {
                    icon: t,
                    isAlias: o,
                    isEmptyPage: r,
                    iconStyle: l,
                    size: s,
                    iconRecordCategory: d
                } = e;
                return (0, i.jsxs)("div", {
                    style: a.wrap,
                    children: [(0, i.jsx)(n(569553).B6, {
                        disabled: !0,
                        icon: t,
                        iconRecordCategory: d,
                        isEmptyPage: r,
                        size: s ? ? 19,
                        style: l
                    }), o ? (0, i.jsx)(n(321825).H, {
                        size: "sm"
                    }) : void 0]
                })
            }
        },
        736620: (e, t, n) => {
            n.d(t, {
                M: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 1.53 9.26 12.92",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m10.225 6.095-.11-1.14.18-.16c.64-.57 1.01-1.4 1.01-2.26v-.38c0-.34-.28-.62-.62-.62h-5.36c-.34 0-.62.28-.62.62v.38c0 .86.37 1.68 1.01 2.26l.18.16-.11 1.14c-1.44.58-2.41 2-2.41 3.55v.5c0 .34.28.62.63.62h3.23v2.34c0 .14.03.27.09.4l.35.75c.05.11.14.18.26.2h.06c.09 0 .19-.04.26-.11l.06-.08.35-.77c.06-.12.09-.26.09-.4v-2.34h3.26c.34 0 .62-.28.62-.62v-.5c0-1.56-.96-2.98-2.41-3.55zm-3.66 1.05c.23-.08.4-.29.42-.53l.18-1.85c.02-.2-.06-.4-.21-.53l-.42-.38c-.32-.28-.52-.66-.58-1.08h4.07c-.06.42-.26.8-.58 1.08l-.42.38c-.15.13-.23.33-.21.53l.18 1.85c.02.24.19.45.42.53l.19.06c1 .34 1.7 1.27 1.75 2.32h-6.73c.05-1.05.74-1.98 1.75-2.32z"
                    })
                },
                a = (0, n(104509).wt)("pinSmall", i, "small")
        },
        739271: (e, t, n) => {
            n.d(t, {
                s: () => a
            });
            var i = n(296540);

            function a() {
                let [e, t] = (0, i.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [n, a] = (0, i.useState)(!1), [o, r] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    if (n) {
                        function e() {
                            r(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && r(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [n]), [(0, i.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && o,
                    onFocus: () => {
                        a(!0)
                    },
                    onBlur: () => {
                        a(!1)
                    }
                }), [e, o]), (0, i.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: o,
                    isComboboxFocused: n,
                    onItemHover: () => {
                        r(!1)
                    }
                }), [o, n])]
            }
        },
        741489: (e, t, n) => {
            n.d(t, {
                j: () => a
            }), n(296540);
            var i = n(474848);

            function a({
                title: e,
                titleId: t,
                byline: o,
                bylineId: r,
                badge: l
            }) {
                return (0, i.jsxs)(n(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, i.jsx)(n(111010).D, {
                            id: t,
                            styleKey: n(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), l]
                    }), o ? (0, i.jsx)(n(111010).D, {
                        id: r,
                        styleKey: n(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: o
                    }) : void 0]
                })
            }
        },
        757491: (e, t, n) => {
            n.d(t, {
                l: () => a
            });
            var i = n(296540);

            function a(e) {
                return (0, i.useEffect)(() => () => e(), [])
            }
        },
        766970: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                xMarkFillIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFill", i, "fill")
        },
        786221: (e, t, n) => {
            n.d(t, {
                HL: () => u,
                L5: () => c,
                Pl: () => E,
                parseCSV: () => P,
                ph: () => d
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(672577), n(430670), n(803949), n(581454), n(908872), n(737550);
            var i = () => n(627179),
                a = () => n(773352),
                o = () => n(247438);
            let r = "PartialMatch",
                l = "FullMatch",
                s = (0, n(109939).YK)({
                    titleColumnName: {
                        id: "database.titleColumn.name",
                        defaultMessage: "Title"
                    },
                    genericColumnName: {
                        id: "database.genericColumn.name",
                        defaultMessage: "Column {columnNumber}"
                    }
                });

            function d(e) {
                let {
                    table: t,
                    deps: {
                        intl: i,
                        randomShortID: a,
                        isPhoneNumber: r
                    },
                    options: {
                        useCsvAdaptiveSchema: l,
                        addHeadersToCollectionEnabled: d
                    }
                } = e, c = function(e, t, i, a, o = !1, r, l, d) {
                    var c;
                    let f = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        g = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== f);
                    if (g.length > 0) {
                        let e = g[0];
                        throw new(n(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: f,
                                    numBadRows: g.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let y = null == (c = e[0]) ? void 0 : c.length;
                    null == r || r.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(y));
                    let h = null == l ? void 0 : l.columnHeaders,
                        b = void 0 !== h && h.length > 0,
                        x = [];
                    b ? (x = h.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != l && l.useFirstRowAsHeaders && e.shift()) : 1 === e.length || d ? x = e[0].map((e, n) => t.formatMessage(s.genericColumnName, {
                        columnNumber: n + 1
                    })) : e.length > 1 && (x = e[0].map(e => e.text), e.shift());
                    let w = e,
                        {
                            types: k,
                            schema: M,
                            pages: T
                        } = b && h ? function(e) {
                            let {
                                body: t,
                                intl: i,
                                randomShortID: a,
                                headerTitles: o,
                                headersMetadata: r,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, d = performance.now(), {
                                types: c,
                                notToImportColumnIndex: u
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: i,
                                    randomShortID: a
                                } = e, o = [];
                                return {
                                    types: i.flatMap((e, i) => {
                                        if (e.doNotImport) return o.push(i), [];
                                        let r = n(763230).D_;
                                        return "checkbox" === e.propertyType ? r = e => v(e) : "number" === e.propertyType ? r = e => _(e) : "date" === e.propertyType && "format" in e ? r = n => S(n, t, e.format) : "date" === e.propertyType && (r = e => S(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : a(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: r
                                        }]
                                    }),
                                    notToImportColumnIndex: o
                                }
                            }({
                                intl: i,
                                columns: r,
                                randomShortID: a
                            }), f = performance.now() - d;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", f);
                            let {
                                pages: g,
                                selectPropertyOptions: y
                            } = m({
                                body: t,
                                types: c,
                                isPreTypedCSV: l,
                                notToImportColumnIndex: u
                            });
                            if (y)
                                for (let e of c) y[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: i,
                                        propertyType: a
                                    } = e;
                                    return ("multi_select" === a ? i.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : i.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, n(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: a,
                                    optionValues: y[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: h
                            } = p({
                                body: t,
                                intl: i,
                                randomShortID: a,
                                headers: o,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: h,
                                pages: g
                            }
                        }({
                            body: w,
                            intl: t,
                            randomShortID: i,
                            headerTitles: x,
                            headersMetadata: h,
                            isPreTypedCSV: b,
                            csvEvalContext: r
                        }) : function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: i,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: o,
                                headers: r,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, d = performance.now(), {
                                types: c
                            } = u({
                                body: t,
                                intl: n,
                                randomShortID: i,
                                isPhoneNumber: a,
                                useCsvAdaptiveSchema: o,
                                csvEvalContext: s
                            }), f = performance.now() - d;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", f);
                            let {
                                schema: g
                            } = p({
                                body: t,
                                intl: n,
                                randomShortID: i,
                                headers: r,
                                types: c,
                                isPreTypedCSV: l
                            }), {
                                pages: y
                            } = m({
                                body: t,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: g,
                                pages: y
                            }
                        }({
                            body: w,
                            intl: t,
                            randomShortID: i,
                            isPhoneNumber: a,
                            useCsvAdaptiveSchema: o,
                            headers: x,
                            isPreTypedCSV: b,
                            csvEvalContext: r
                        });
                    return {
                        schema: M,
                        types: k,
                        pages: T
                    }
                }(t, i, a, r, l, e.csvEvalContext, e.metadata, d);
                return function(e) {
                    let {
                        actor: t,
                        blockType: i,
                        root: a,
                        parent: r,
                        name: l,
                        format: s,
                        deps: {
                            randomID: d,
                            spaceIdCreator: c,
                            addFileIdsToBlock: u,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: m,
                            legacyNonCrdt: f
                        },
                        pages: g,
                        schema: y,
                        columnIds: h
                    } = e, v = e.collectionId ? ? (null == c ? void 0 : c.idInSavedSpace(n(46241).V)) ? ? d(), b = e.collectionViewId ? ? (null == c ? void 0 : c.idInSavedSpace(n(435544).G)) ? ? d(), _ = [], x = [], w = [], {
                        operations: S
                    } = n(993189).WBy.create({
                        id: v,
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        name: o().x9d(l),
                        schema: y,
                        format: {
                            collection_page_properties: n(381453).oE(h.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...p && {
                                sync_state: {
                                    syncing: !0,
                                    last_synced_at: Date.now()
                                },
                                static_import_collection_type: n(565546).IE.CsvImport
                            }
                        },
                        createdBy: t
                    });
                    _.push(...S);
                    let k = {
                            id: a.existing ? a.record.id : a.id,
                            type: i,
                            collection_id: v,
                            format: {
                                collection_pointer: {
                                    table: n(46241).V,
                                    id: v,
                                    spaceId: r.spaceId
                                }
                            },
                            view_ids: [b],
                            createdBy: t,
                            parentPointer: r,
                            space_id: r.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: M
                        } = n(877308).Rf({
                            blockModelArgs: k,
                            existingBlock: a.existing ? a.record : void 0,
                            legacyNonCrdt: f
                        });
                    if (_.push(...M), p) {
                        let {
                            operations: e
                        } = n(993189).lqf.create({
                            id: b,
                            type: "table",
                            name: "Show All",
                            parent: a.existing ? a.record.pointer : {
                                id: a.id,
                                table: n(682956).ev,
                                spaceId: r.spaceId
                            },
                            space_id: r.spaceId,
                            format: {
                                collection_pointer: (0, n(9247).Z8)({
                                    collectionId: v,
                                    spaceId: r.spaceId
                                }),
                                table_properties: n(381453).oE(h.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...s
                            },
                            createdBy: t
                        });
                        _.push(...e)
                    }
                    let T = function(e) {
                        let {
                            actor: t,
                            collectionId: i,
                            spaceId: a,
                            pages: o,
                            randomID: r,
                            spaceIdCreator: l,
                            options: s
                        } = e;
                        return o.map(o => {
                            let d = (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? r(),
                                {
                                    model: c,
                                    operations: u
                                } = n(993189).zgg.create({
                                    id: d,
                                    parentPointer: {
                                        id: i,
                                        table: n(46241).V,
                                        spaceId: a
                                    },
                                    space_id: a,
                                    type: n(955630).xd.page,
                                    createdBy: t,
                                    properties: o,
                                    ...s.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...u];
                            if (e.addFileIdsToBlock) {
                                let e = (0, n(781539).c)(c, "", "").fileIds;
                                e.length > 0 && p.push(n(488307).op.update({
                                    pointer: c.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: d,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: v,
                        addFileIdsToBlock: u,
                        spaceId: r.spaceId,
                        pages: g,
                        randomID: d,
                        spaceIdCreator: c,
                        options: {
                            ignoreBlockCount: m
                        }
                    });
                    for (let {
                            operations: e
                        } of T) x.push(...e);
                    let {
                        operations: C
                    } = n(993189).lqf.create({
                        id: b,
                        type: "table",
                        name: "Show All",
                        parent: a.existing ? a.record.pointer : {
                            id: a.id,
                            table: n(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        format: {
                            collection_pointer: (0, n(9247).Z8)({
                                collectionId: v,
                                spaceId: r.spaceId
                            }),
                            table_properties: n(381453).oE(h.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...s
                        },
                        page_sort: T.map(e => e.id).slice(0, n(9247).WF),
                        createdBy: t
                    });
                    if (x.push(...C), !p) return {
                        operations: [..._, ...x]
                    }; {
                        let e = {
                                table: n(46241).V,
                                id: v,
                                spaceId: r.spaceId
                            },
                            t = n(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return w.push(t), {
                            operations: x,
                            createCollectionOperations: _,
                            collectionFinishedOperations: w
                        }
                    }
                }({ ...c,
                    columnIds: c.types.map(e => e.id),
                    ...e
                })
            }

            function c(e) {
                let {
                    table: t,
                    actor: i,
                    parent: a,
                    tableId: o,
                    deps: {
                        randomID: r,
                        spaceIdCreator: l,
                        randomShortID: s
                    },
                    options: {
                        legacyNonCrdt: d,
                        ignoreBlockCount: c,
                        hasHeaderRow: u,
                        hasHeaderColumn: p
                    }
                } = e, m = [], f = t.length ? t[0].map(e => s()) : [], g = t.map(e => (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? r());
                return m.push(...n(993189).zgg.create({
                    id: o,
                    type: n(955630).xd.table,
                    content: g,
                    format: {
                        table_block_column_order: f,
                        ...u ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: a,
                    space_id: a.spaceId,
                    createdBy: i,
                    ignore_block_count: !!c || void 0,
                    legacyNonCrdt: d
                }).operations), m.push(...g.flatMap((e, r) => {
                    let l = (0, n(722371).MU)(f.flatMap((e, n) => {
                        var i;
                        let a = null == (i = t[r]) || null == (i = i[n]) ? void 0 : i.textValue;
                        return a ? [
                            [e, a]
                        ] : []
                    }));
                    return n(993189).zgg.create({
                        id: e,
                        type: n(955630).xd.tableRow,
                        parentPointer: {
                            id: o,
                            table: n(682956).ev,
                            spaceId: a.spaceId
                        },
                        space_id: a.spaceId,
                        properties: l,
                        createdBy: i,
                        legacyNonCrdt: d
                    }).operations
                })), {
                    operations: m
                }
            }

            function u(e) {
                let {
                    body: t,
                    intl: o,
                    randomShortID: s,
                    isPhoneNumber: d,
                    useCsvAdaptiveSchema: c,
                    csvEvalContext: u
                } = e, p = [{
                    test: j.bind(null, d),
                    sampledSchemaIsComplete: !0
                }, {
                    test: x,
                    sampledSchemaIsComplete: !0
                }, {
                    test: T,
                    sampledSchemaIsComplete: !0
                }, {
                    test: I,
                    sampledSchemaIsComplete: !0
                }, {
                    test: k,
                    sampledSchemaIsComplete: !0
                }, {
                    test: b,
                    sampledSchemaIsComplete: !1
                }, {
                    test: D,
                    sampledSchemaIsComplete: !1
                }, {
                    test: B,
                    sampledSchemaIsComplete: !1
                }, {
                    test: H,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: n(381453).oE(n(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, o, s, d, c) {
                        let u = t.filter(e => !!e);
                        if (0 === u.length) return H(e, u);
                        if (d) {
                            let n = u.length > 1e3 ? function(e) {
                                let t = e.length,
                                    n = [];
                                for (let i = 0; i < 1e3; i++) {
                                    let i = Math.floor(Math.random() * t);
                                    n.push(e[i])
                                }
                                return n
                            }(u) : u;
                            for (let d of s) {
                                let s = d.test(e, n, o);
                                if (s) {
                                    let n = s;
                                    if (!1 === s.isFullMatch) {
                                        a().log({
                                            level: "info",
                                            from: "csvHelper",
                                            type: "csvColumnTypes",
                                            data: {
                                                message: "Partial column type match detected, setting data type as string",
                                                columnType: s.schema.type,
                                                matchType: "Partial"
                                            }
                                        }), n = H(e, t);
                                        let o = (null == c ? void 0 : c.get(r)) || 0;
                                        (0, i().Et)(o) && (null == c || c.set(r, o + 1))
                                    } else a().log({
                                        level: "info",
                                        from: "csvHelper",
                                        type: "csvColumnTypes",
                                        data: {
                                            message: "Complete column type match detected",
                                            columnType: s.schema.type,
                                            matchType: "Full"
                                        }
                                    });
                                    let o = (null == c ? void 0 : c.get(l)) || 0;
                                    return (0, i().Et)(o) && (null == c || c.set(l, o + 1)), n
                                }
                            }
                        } else {
                            let t = u.filter(e => !n(381453).Im(e)).slice(0, 100);
                            for (let n of s) {
                                let s = n.test(e, t, o);
                                if (s) {
                                    let d = n.sampledSchemaIsComplete || t.length === u.length ? s : n.test(e, u, o);
                                    if (d) {
                                        if (!1 === d.isFullMatch) {
                                            a().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: d.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == c ? void 0 : c.get(r)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(r, e + 1))
                                        } else {
                                            let e = (null == c ? void 0 : c.get(l)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(l, e + 1))
                                        }
                                        return d
                                    }
                                }
                            }
                        }
                        return H(e, [])
                    }(o, e.map(e => null == e ? void 0 : e.text), s, p, c, u)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: n,
                    randomShortID: i,
                    headers: a,
                    types: r,
                    isPreTypedCSV: l
                } = e, d = a.map(() => !1);
                if (!l) {
                    for (let e = 0; e < a.length; e++)
                        if ("text" === r[e].schema.type)
                            for (let n = 0; n < t.length; n++) {
                                let i = t[n][e].textValue;
                                if (i) {
                                    for (let a of i)
                                        if (o().BEe(a)) {
                                            d[e] = !0, n = t.length;
                                            break
                                        }
                                }
                            }
                }
                let c = !0,
                    u = {
                        title: {
                            type: "title",
                            name: n.formatMessage(s.titleColumnName)
                        }
                    };
                return a.forEach((e, t) => {
                    let n = r[t];
                    if (n)
                        if ("text" !== n.schema.type || !c || d[t] || l)
                            if (l && "title" === n.schema.type) {
                                let t = u.title;
                                t && (t.name = e)
                            } else {
                                let t = n.id ? ? i();
                                n.id || (n.id = t), u[t] = { ...n.schema,
                                    name: e
                                }
                            }
                    else {
                        c = !1, n.id = "title", n.schema = {
                            type: "title",
                            name: e
                        };
                        let t = u.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: u
                }
            }

            function m(e) {
                let {
                    body: t,
                    types: i,
                    isPreTypedCSV: a,
                    notToImportColumnIndex: r
                } = e, l = {};
                return {
                    pages: t.map(e => {
                        null != r && r.length && (e = e.filter((e, t) => !r.includes(t)));
                        let t = {};
                        return i.forEach((i, r) => {
                            if (i) {
                                let {
                                    id: s,
                                    schema: d,
                                    coerce: c
                                } = i, {
                                    type: u
                                } = d;
                                if (s) {
                                    let i = e[r] || "";
                                    if ("url" === u) t[s] = n(561872).jw(i.text);
                                    else if ("date" === u) t[s] = n(561872).m5(c(i.text));
                                    else if ("text" === u) t[s] = i.textValue || o().x9d(c(i.text));
                                    else if ("file" === u) t[s] = i.textValue || [];
                                    else if ("select" === u || "multi_select" === u) {
                                        let e = [];
                                        if (e = "multi_select" === u ? i.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : i.text.trim() ? [i.text.trim()] : [], a)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                l[s] || (l[s] = []), l[s].find(t => t.toLowerCase() === e.toLowerCase()) || l[s].push(e)
                                            }
                                        t[s] = o().x9d(c(i.text))
                                    } else t[s] = o().x9d(c(i.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: a ? l : void 0
                }
            }
            let f = ["yes", "Yes", "true", "True", "checked"],
                g = ["no", "No", "false", "False", "unchecked"];

            function y(e) {
                return f.some(t => e === t) || g.some(t => e === t)
            }

            function h(e, t) {
                return e.length === t.length
            }

            function v(e) {
                return f.some(t => e === t) ? n(745680).I1 : n(745680).oP
            }

            function b(e, t) {
                if (t.every(y)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: y,
                    coerce: e => v(e)
                }
            }

            function _(e) {
                let t = n(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function x(e, t) {
                let a = t.map(n(700369).sA),
                    o = a[0];
                if (o && a.every(e => !!(e && e.format === o.format))) return {
                    schema: {
                        type: "number",
                        number_format: o.format
                    },
                    validate(e) {
                        let t = n(700369).sA(e);
                        return !i().pN(t) && t.format === o.format
                    },
                    coerce: e => _(e)
                }
            }

            function w(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!n(629518).JC(t, e)
            }

            function S(e, t, i) {
                let a = e.includes("→");
                return n(629518).JC(e, t, a ? void 0 : i)
            }

            function k(e, t) {
                let n = t.filter(t => w(e, t));
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => w(e, t),
                    coerce: t => S(t, e),
                    isFullMatch: h(t, n)
                }
            }

            function M(e) {
                return e.length < 320 && e.includes("@") && n(159523).t6(e, "email")
            }

            function T(e, t) {
                let i = t.filter(M);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: M,
                    coerce: n(763230).D_,
                    isFullMatch: h(t, i)
                }
            }

            function C(e) {
                return e.length < 320 && n(159523).t6(e, "url")
            }

            function I(e, t) {
                let i = t.filter(C);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: C,
                    coerce: n(763230).D_,
                    isFullMatch: h(t, i)
                }
            }

            function A(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function j(e, t, i) {
                let a = A.bind(null, e),
                    o = i.filter(a);
                if (o.length >= i.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: a,
                    coerce: n(763230).D_,
                    isFullMatch: h(i, o)
                }
            }

            function D(e, t, i) {
                var a, o, r, l;
                let s = [];
                t.forEach(e => e.split(",").forEach(e => s.push(e.trim())));
                let d = n(561872).ki(s),
                    c = new Set(d);
                if (a = d.length, (o = s.length) > t.length && (r = a, l = o, r > 0 && r ** 2 < l)) return {
                    schema: {
                        type: "multi_select",
                        options: d.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => c.has(e),
                    coerce: n(763230).D_
                }
            }

            function B(e, t, i) {
                var a, o;
                let r = n(561872).ki(t),
                    l = new Set(r);
                if (a = r.length, o = t.length, a > 0 && a ** 2 < o) return {
                    schema: {
                        type: "select",
                        options: r.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => l.has(e),
                    coerce: n(763230).D_
                }
            }

            function H(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: n(763230).D_
                }
            }

            function P(e, t) {
                t || (t = function(e, t) {
                    let n = ",",
                        i = 0,
                        a = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let n = [],
                                i = [],
                                a = "",
                                o = !1;
                            for (let r = 0; r < e.length; r++) {
                                let l = e[r],
                                    s = e[r + 1];
                                '"' === l ? o && '"' === s ? (a += '"', r++) : o = !o : l !== t || o ? "\n" !== l && "\r" !== l || o ? a += l : (i.push(a), i.length > 0 && n.push(i), i = [], a = "", "\r" === l && "\n" === s && r++) : (i.push(a), a = "")
                            }
                            return (a || i.length > 0) && (i.push(a), n.push(i)), n.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(a, e);
                        if (t.length <= 1) continue;
                        let o = t.map(e => e.length),
                            r = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(o),
                            l = o.filter(e => e === r).length / o.length,
                            s = r >= 6 ? .6 : .7;
                        if (r <= 1 || l < s) continue;
                        let d = t.flat().filter(t => t.includes(e)).length / (t.length * r),
                            c = 100 * l + 10 * r - 50 * d;
                        c > i && (i = c, n = e)
                    }
                    return n
                }(e, [",", ";", "	", "|"]));
                let n = [],
                    i = [],
                    a = "",
                    o = !1;
                for (let r = 0; r < e.length; r++) {
                    let l = e[r],
                        s = e[r + 1];
                    if ('"' === l) o && '"' === s ? (a += '"', r++) : o = !o;
                    else if (l !== t || o)
                        if ("\n" !== l && ("\r" !== l || "\n" === s) || o) {
                            if ("\r" === l && "\n" === s && !o) continue;
                            a += l
                        } else i.push(a), n.push(i), i = [], a = "";
                    else i.push(a), a = ""
                }
                return (a || i.length > 0) && (i.push(a), n.push(i)), n
            }
            let E = [{
                type: "title",
                name: "Title"
            }, {
                type: "text",
                name: "Text"
            }, {
                type: "number",
                name: "Number"
            }, {
                type: "select",
                name: "Select"
            }, {
                type: "multi_select",
                name: "Multi-select"
            }, {
                type: "status",
                name: "Status"
            }, {
                type: "date",
                name: "Date"
            }, {
                type: "checkbox",
                name: "Checkbox"
            }, {
                type: "url",
                name: "URL"
            }, {
                type: "email",
                name: "Email"
            }, {
                type: "phone_number",
                name: "Phone Number"
            }, {
                type: "person",
                name: "Person"
            }, {
                type: "dont_import",
                name: "Don't import"
            }]
        },
        789701: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("inbox", i, "default")
        },
        799891: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                a = (0, n(104509).wt)("chatBubble", i, "default")
        },
        805469: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var i = n(296540);
            let a = function({
                shouldPreserveTextSelection: e,
                shouldPreserveBlockSelection: t,
                shouldRestoreSelection: a,
                onClearSelection: o
            }) {
                let r = (0, n(533992).v3)(),
                    l = (0, i.useRef)(e),
                    s = (0, i.useRef)(""),
                    d = (0, i.useRef)({
                        selectionState: null,
                        textSelectionState: null
                    }),
                    c = (0, i.useCallback)(() => d.current, []),
                    u = (0, i.useCallback)(() => {
                        s.current = window.location.href, n(358377).default.hasSelection() && (d.current.textSelectionState = n(358377).default.cloneState()), (0, n(525779).clear)({
                            environment: r
                        }), t && (n(584265).default.isSelected() && (d.current.selectionState = n(584265).default.cloneState()), (0, n(471e3).I)({
                            environment: r
                        }))
                    }, [r, t]),
                    p = (0, i.useCallback)(() => {
                        d.current = {
                            selectionState: null,
                            textSelectionState: null
                        }, s.current = "", null == o || o()
                    }, [o]),
                    m = (0, i.useCallback)(() => {
                        let {
                            selectionState: e,
                            textSelectionState: i
                        } = d.current;
                        window.location.href === s.current && (i && "mode" in i && "editing" === i.mode && n(358377).default.setState({ ...n(358377).default.state,
                            ...i
                        }), t && e && n(584265).default.setState({ ...n(584265).default.state,
                            ...e
                        })), p()
                    }, [p, t]);
                return (0, n(383953).l)(() => {
                    l.current = e, e && u()
                }), (0, i.useEffect)(() => (l.current && !e ? a ? m() : p() : !l.current && e && u(), l.current = e, () => {
                    a ? m() : p()
                }), [e, p, m, u, a]), {
                    clearSavedSelection: p,
                    restoreSavedSelection: m,
                    getSavedSelection: c
                }
            }
        },
        816231: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var i = n(296540),
                a = n(474848);

            function o(e) {
                let t = (0, i.useRef)(null),
                    n = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    let i = e.el.getBoundingClientRect();
                    n.style.height = `${i.height}px`;
                    let a = 0,
                        o = e => {
                            cancelAnimationFrame(a), a = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: n,
                                    mouseY: i
                                }) {
                                    let {
                                        x: a,
                                        y: o,
                                        height: r,
                                        width: l
                                    } = t;
                                    if (n > a) {
                                        let t = Math.max(n - (a + l), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(i-o)/r}%)`
                                    } else {
                                        let t = Math.max(a - n, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(i-o)/r}%, 100% 100%)`
                                    }
                                }({
                                    div: n,
                                    rect: i,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", o), () => {
                        window.removeEventListener("mousemove", o), cancelAnimationFrame(a)
                    }
                }, [e.el]);
                let o = i.useCallback(e => {
                    if (!n.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let i = document.elementFromPoint(e.clientX, e.clientY);
                        if (i === t.current && (t.current.style.visibility = "hidden", i = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), i && i !== t.current) {
                            n.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                i.dispatchEvent(t)
                            } finally {
                                n.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, a.jsx)("div", {
                    ref: t,
                    onClick: o,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let r = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                l = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                s = i.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: s,
                    allowOptionalExtensionMenu: d,
                    ...c
                }, u) {
                    let {
                        disabled: p,
                        disableDefaultClick: m,
                        onFocus: f,
                        focused: g,
                        placementToOrigin: y,
                        alignmentToOrigin: h,
                        disableCloseOnEnter: v,
                        bottomSheetInitialState: b,
                        popupTypeOverride: _
                    } = c, x = (0, n(533992).WS)(), w = (0, n(649476).Tf)(), [S, k] = (0, i.useState)(!1), [M, T] = (0, i.useState)(!1), C = (0, i.useRef)(null), I = (0, i.useRef)(null), A = (0, i.useRef)(null), j = (0, i.useRef)(null), D = (0, i.useCallback)(() => {
                        A.current && window.clearTimeout(A.current), j.current && window.clearTimeout(j.current), A.current = null, j.current = null
                    }, []), B = (0, i.useCallback)(() => {
                        D(), p || (k(!0), T(!0))
                    }, [p, D]), H = (0, i.useCallback)(() => {
                        D(), T(!1), k(!1)
                    }, [D]), P = (0, i.useCallback)(e => {
                        D(), S || (e && e.preventDefault && e.preventDefault(), A.current = window.setTimeout(B, 120))
                    }, [S, D, B]), E = (0, i.useCallback)(() => {
                        T(!1), D(), S && (j.current = window.setTimeout(H, 100))
                    }, [S, H, D]), O = (0, i.useCallback)(t => {
                        f(), B(), d && (null == e || e(t), H())
                    }, [f, B, d, e, H]), N = (0, i.useCallback)(() => {
                        x || P()
                    }, [P, x]), V = (0, i.useCallback)(() => {
                        x || (f(), P())
                    }, [f, P, x]), R = (0, i.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = C.current;
                        S && t && !t.contains(e.target) && H()
                    }, [S, H]), L = (0, i.useCallback)(e => {
                        13 === e.keyCode && S && !v && H()
                    }, [S, H, v]);
                    (0, i.useEffect)(() => {
                        if (!m) return window.addEventListener("click", R), () => {
                            window.removeEventListener("click", R)
                        }
                    }, [m, R]), (0, i.useEffect)(() => (window.addEventListener("keydown", L), () => {
                        window.removeEventListener("keydown", L)
                    }), [L]);
                    let z = (0, i.useRef)(g);
                    (0, i.useEffect)(() => {
                        !g && z.current && E(), z.current = g
                    }, [g, E]);
                    let F = { ...(0, n(63390).A)({
                                onMouseEnter: N,
                                onClick: O
                            }, c),
                            showExtensionArrow: !0
                        },
                        U = n(423291).n.Popup;
                    return _ ? U = _ : x && (U = w ? n(423291).n.BottomSheet : n(423291).n.SlideUp), (0, a.jsx)(n(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: g,
                        onEnter: S ? void 0 : P,
                        onRight: P,
                        onLeft: S ? E : void 0,
                        onEsc: S ? E : void 0,
                        children: (0, a.jsx)(n(182718).zD, {
                            popupType: U,
                            bottomSheetInitialState: b,
                            open: S,
                            placementToOrigin: y ? ? "right",
                            alignmentToOrigin: h ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !x,
                            preventCaptureEsc: !0,
                            ref: C,
                            content: () => (0, a.jsxs)(a.Fragment, {
                                children: [!x && M && I.current ? (0, a.jsx)(o, {
                                    el: I.current
                                }) : null, (0, a.jsx)("div", {
                                    ref: I,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: s({
                                        onMouseEnter: V
                                    }, {
                                        close: E
                                    })
                                })]
                            }),
                            style: [l, x && r],
                            trapFocus: !0,
                            onDismiss: H,
                            children: null == t ? void 0 : t(F, u)
                        })
                    })
                })
        },
        819534: (e, t, n) => {
            n.d(t, {
                u: () => i
            });
            let i = (0, n(104509).xh)("pencilLine", {
                default: {
                    loader: () => n.e(92668).then(n.bind(n, 636))
                },
                small: {
                    loader: () => n.e(92668).then(n.bind(n, 753114))
                },
                fill: {
                    loader: () => n.e(92668).then(n.bind(n, 491558))
                },
                fillSmall: {
                    loader: () => n.e(92668).then(n.bind(n, 476309))
                }
            }, ["compose", "edit", "write", "create"])
        },
        823230: (e, t, n) => {
            n.d(t, {
                c: () => i
            });
            async function i(e) {
                let {
                    environment: t,
                    collectionStore: i
                } = e, a = {
                    id: i.id,
                    table: n(832375).VlP,
                    spaceId: i.getSpaceId()
                }, o = await t.api.callApi({
                    eventName: "suggestRecordKey",
                    environment: t,
                    data: { ...a,
                        shouldSetSuccessfullySuggestedRecord: !0
                    }
                });
                if ("success" === o.type) return o.data.key;
                n(773352).log({
                    level: "error",
                    from: "collectionAutoIncrementIdActions.suggestRecordKeyResponse",
                    type: "JSONParseError",
                    error: {
                        miscDataString: o.error.message
                    }
                })
            }
        },
        831957: (e, t, n) => {
            n.d(t, {
                k: () => i
            });

            function i(e, t) {
                let i = n(986939).A.isMobile ? 2 : 3;
                return t.slice(0, i)
            }
        },
        832139: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i() {
                return ((0, n(907620).T)("isSamsungPreload") || (0, n(907620).T)("isInstalledFromSamsungAppStore")) && n(218744).default.checkGate({
                    gateName: "samsung_disable_all_upgrades"
                })
            }
        },
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => l,
                fF: () => b,
                es: () => v,
                LE: () => y,
                zs: () => g,
                HE: () => f,
                yg: () => h,
                QH: () => m,
                kn: () => p,
                mB: () => s,
                L$: () => d,
                X3: () => c,
                jX: () => u
            }), n(898992), n(354520), n(581454), n(944114);
            var i = () => n(896346);
            class a extends i().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let o = (0, n(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                r = {
                    hour: a.HOURLY,
                    day: a.DAILY,
                    week: a.WEEKLY,
                    month: a.MONTHLY,
                    year: a.YEARLY
                },
                l = {
                    MO: a.MO,
                    TU: a.TU,
                    WE: a.WE,
                    TH: a.TH,
                    FR: a.FR,
                    SA: a.SA,
                    SU: a.SU
                };

            function s(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function d(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function c(e) {
                let {
                    start_date: t,
                    frequency: i,
                    interval: o,
                    weekdays: s,
                    timezone: d,
                    hour: c,
                    minute: u
                } = e, p = (0, n(943003).eU)(t);
                "hour" === i && p.setUTCHours(c ? ? 0, u ? ? 0, 0, 0);
                let m = "week" === i && s ? s.map(e => l[e]) : void 0,
                    f = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? f.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? f.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? f.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? f.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let i = [];
                    for (let a of t) i.push(...e(n[0], ...n.slice(1)).map(e => [a, ...e]));
                    return i
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new a({
                    freq: r[i],
                    dtstart: p,
                    interval: o,
                    byweekday: m,
                    tzid: "hour" === i ? void 0 : d,
                    ..."hour" === i ? {} : {
                        byhour: c ? ? 0,
                        byminute: u ? ? 0,
                        bysecond: 0
                    },
                    ...f
                })
            }

            function u(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let n = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    i = e.length,
                    a = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    o = i > 1,
                    r = n.length >= 1;
                return {
                    violatesConstraint: o || r,
                    templateNestingExceedsMaxDepth: o,
                    ancestorHasDailyTemplate: r,
                    nestedDepthOfAutomationAncestors: i,
                    immediateAncestorRecurrenceType: a
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function m(e) {
                return c(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function f(e) {
                let {
                    recurrence: t,
                    intl: i
                } = e, a = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let i = t.startOf("hour");
                    return { ...e,
                        start_date: i.toMillis(),
                        hour: i.hour,
                        minute: i.minute
                    }
                }(t) : t, r = m(v(a));
                if (!r) return;
                let l = n(906745).DateTime.fromJSDate(r).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(i));
                "hour" !== a.frequency && (l = l.setZone(a.timezone));
                let s = "hour" !== t.frequency && p(t),
                    d = (0, n(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: i,
                        shortenDate: !0
                    });
                if (s) return i.formatMessage(o.dateBetweenMidnightAnd3AM, {
                    date: d
                }); {
                    let e = l.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), i.formatMessage(o.dateAtTime, {
                        date: d,
                        time: e
                    })
                }
            }

            function g(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(o.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(o.noEndCondition)
            }

            function y(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function h(e, t, n) {
                return e.plus(n - t)
            }

            function v(e) {
                var t;
                let i;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, i = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(i.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function b(e, t) {
                let i = n(381453).fN(e, e => void 0 !== e),
                    a = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(i, a)
            }
        },
        833503: (e, t, n) => {
            n.d(t, {
                s: () => y
            });
            var i = n(296540),
                a = () => n(722371),
                o = () => n(770808),
                r = n(474848);

            function l(e) {
                let {
                    children: t,
                    isSizeTransitionAnimated: a,
                    onSizeChanged: l
                } = e, s = (0, i.useMemo)(() => (0, o().Ve)(e.areaConstraint), [e.areaConstraint]), {
                    preferredSize: d,
                    ref: c
                } = (0, n(218381).e)(s), u = (0, i.useMemo)(() => (function(e) {
                    let {
                        areaConstraint: t,
                        preferredSize: i
                    } = e;
                    return {
                        width: (0, n(627179).qE)({
                            value: (null == i ? void 0 : i.width) ? ? 0,
                            min: t.width.min,
                            max: t.width.max
                        }),
                        height: (0, n(627179).qE)({
                            value: (null == i ? void 0 : i.height) ? ? 0,
                            min: t.height.min,
                            max: t.height.max
                        })
                    }
                })({
                    areaConstraint: s,
                    preferredSize: d
                }), [s, d]), p = function(e) {
                    let {
                        actualSize: t,
                        preferredSize: n,
                        areaConstraint: i
                    } = e, a = "allow" === i.width.scroll, o = "allow" === i.height.scroll, r = a && (null == n ? void 0 : n.width) !== void 0 && t.width < n.width, l = o && (null == n ? void 0 : n.width) !== void 0 && t.height < n.height;
                    return {
                        actualSize: t,
                        constrainedSize: {
                            minWidth: i.width.min,
                            maxWidth: a ? void 0 : i.width.max,
                            minHeight: i.height.min,
                            maxHeight: o ? void 0 : i.height.max
                        },
                        isWidthScrollbarVisible: r,
                        isHeightScrollbarVisible: l
                    }
                }({
                    actualSize: u,
                    preferredSize: d,
                    areaConstraint: s
                }), m = function(e) {
                    let {
                        actualSize: t,
                        areaConstraint: i,
                        isSizeTransitionAnimated: a
                    } = e, r = (0, n(11012).j)(100), {
                        prefersReducedMotion: l
                    } = (0, n(533992).Y0)(), s = (0, o().bv)(i);
                    return (0, n(960253).I)(() => {
                        let e = "allow" === i.width.scroll,
                            n = "allow" === i.height.scroll;
                        return {
                            wrapper: {
                                position: "relative"
                            },
                            content: {
                                height: null == t ? void 0 : t.height,
                                overflowX: e ? "auto" : "clip",
                                overflowY: n ? "auto" : "clip",
                                WebkitOverflowScrolling: "touch",
                                width: null == t ? void 0 : t.width,
                                transition: a && r && !l ? "0.25s ease width, 0.25s ease height" : void 0
                            },
                            measure: {
                                display: "flex",
                                flexDirection: "column",
                                height: s.height ? "fit-content" : "100%",
                                maxHeight: i.height.max,
                                maxWidth: i.width.max,
                                minHeight: i.height.min,
                                minWidth: i.width.min,
                                width: s.width ? "fit-content" : "100%"
                            }
                        }
                    }, [t, i, a, r, l, s])
                }({
                    actualSize: u,
                    areaConstraint: s,
                    isSizeTransitionAnimated: a
                });
                return (0, i.useEffect)(() => {
                    null == l || l(u, d)
                }, [u, l, d]), (0, r.jsx)(n(858803).w.Provider, {
                    value: p,
                    children: (0, r.jsx)("div", {
                        style: m.wrapper,
                        children: (0, r.jsx)("div", {
                            style: m.content,
                            children: (0, r.jsx)("div", {
                                ref: c,
                                className: "measure",
                                style: m.measure,
                                children: t
                            })
                        })
                    })
                })
            }
            n(898992), n(354520), n(581454);
            var s = () => n(381453);

            function d(e) {
                let t = 0,
                    n = Number.MAX_SAFE_INTEGER;
                for (let i of e) {
                    if (!i) continue;
                    let e = (0, o().Vo)(i),
                        a = (0, s().qE)(e.max, 0, Number.MAX_SAFE_INTEGER);
                    t = Math.max(t, (0, s().qE)(e.min, 0, a)), n = Math.min(n, a)
                }
                let i = function(e) {
                    let t;
                    for (let n of e) {
                        let e = null == n ? void 0 : n.scroll;
                        switch (e) {
                            case "disallow":
                                return "disallow";
                            case "allow":
                                t = "allow";
                                break;
                            case void 0:
                                break;
                            default:
                                (0, a().HB)(e)
                        }
                    }
                    return t
                }(e);
                return {
                    type: "range",
                    min: (0, s().qE)(t, 0, n),
                    max: n,
                    scroll: i
                }
            }

            function c(e) {
                let t = e.filter(Boolean);
                return {
                    width: d(t.map(e => null == e ? void 0 : e.width)),
                    height: d(t.map(e => null == e ? void 0 : e.height))
                }
            }

            function u(e) {
                let {
                    minimumOutsideSpacing: t
                } = e, a = (0, n(118872).lW)();
                return (0, i.useMemo)(() => {
                    let e = a.width - t.left - t.right,
                        n = a.height - t.top - t.bottom;
                    return (0, o().Ve)({
                        width: {
                            type: "max",
                            length: e
                        },
                        height: {
                            type: "max",
                            length: n
                        }
                    })
                }, [t.bottom, t.left, t.right, t.top, a.height, a.width])
            }

            function p(e) {
                let t, {
                        allowMenuList: o,
                        allowDismissByEscape: s = !0,
                        anchor: d = "center",
                        animateSizeTransition: p = !0,
                        ariaLabel: m,
                        ariaLabelledBy: f,
                        ariaDescribedBy: g,
                        keyboardAreaPriority: y,
                        children: h,
                        transition: v,
                        showCloseIcon: b,
                        borderRadius: _,
                        backgroundAppearance: x,
                        transitionAppearance: w
                    } = e,
                    [S, k] = (0, i.useState)(!1);
                (0, n(202146).exposeDebugValue)("screenshotMode", () => {
                    k(e => !e)
                });
                let M = function(e) {
                        let {
                            partial: t,
                            defaultLength: n = 0
                        } = e;
                        switch (null == t ? void 0 : t.type) {
                            case "sides":
                                return {
                                    type: "sides",
                                    left: t.left ? ? n,
                                    right: t.right ? ? n,
                                    top: t.top ? ? n,
                                    bottom: t.bottom ? ? n
                                };
                            case "axes":
                                return {
                                    type: "sides",
                                    left: t.horizontal ? ? n,
                                    right: t.horizontal ? ? n,
                                    top: t.vertical ? ? n,
                                    bottom: t.vertical ? ? n
                                };
                            case "all":
                                return {
                                    type: "sides",
                                    left: t.length ? ? n,
                                    right: t.length ? ? n,
                                    top: t.length ? ? n,
                                    bottom: t.length ? ? n
                                };
                            case void 0:
                                return {
                                    type: "sides",
                                    left: n,
                                    right: n,
                                    top: n,
                                    bottom: n
                                };
                            default:
                                (0, a().HB)(t)
                        }
                    }({
                        partial: e.minimumOutsideSpacing,
                        defaultLength: 40
                    }),
                    T = u({
                        minimumOutsideSpacing: M
                    });
                e.areaConstraint && (t = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "desktop"
                }) : e.areaConstraint);
                let C = c([T, t]),
                    I = function(e) {
                        let {
                            screenshotMode: t,
                            anchor: i,
                            minimumOutsideSpacing: o,
                            borderRadius: r
                        } = e;
                        return (0, n(960253).I)(() => {
                            let e, l, s;
                            switch (i) {
                                case "top":
                                    e = "flex-start", l = o.top;
                                    break;
                                case "bottom":
                                    e = "flex-end", s = o.bottom;
                                    break;
                                case "center":
                                case void 0:
                                    e = "center";
                                    break;
                                default:
                                    (0, a().HB)(i)
                            }
                            return {
                                innerStyle: {
                                    borderRadius: r ? ? 12,
                                    display: "flex",
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                outerStyle: {
                                    alignItems: e,
                                    paddingTop: l,
                                    paddingBottom: s
                                },
                                overlay: t ? {
                                    background: n(632079).Tj.background.primary,
                                    transition: "0.2s ease background"
                                } : {},
                                fullScreenOverlay: {
                                    background: n(632079).Tj.background.primary
                                }
                            }
                        }, [i, t, o.bottom, o.top, r])
                    }({
                        screenshotMode: S,
                        anchor: d,
                        minimumOutsideSpacing: M,
                        borderRadius: _
                    }),
                    A = (0, r.jsx)(n(790124).A, {
                        capture: !0,
                        keyboardAreaPriority: y,
                        allowEsc: !0,
                        allowMenuList: o,
                        children: () => (0, r.jsx)(l, {
                            areaConstraint: C,
                            isSizeTransitionAnimated: p,
                            children: (0, r.jsx)(n(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? h({
                                    displayMode: "desktop",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    });
                return (0, r.jsx)(n(19187).e.Provider, {
                    value: v.onDismiss,
                    children: (0, r.jsx)(n(556809).a, {
                        ariaDescribedBy: g,
                        ariaLabel: m,
                        ariaLabelledBy: f,
                        backgroundStyle: "full-screen" === w ? I.fullScreenOverlay : I.overlay,
                        innerStyle: I.innerStyle,
                        isWaxPaper: "waxPaper" === x,
                        isWash: "wash" === x,
                        transitionAppearance: w,
                        onClosed: v.onClosed,
                        onDismiss: s ? v.onDismiss : void 0,
                        open: v.isOpen,
                        preventHideChildrenWhileOpening: !0,
                        children: A,
                        showCloseIcon: b,
                        style: I.outerStyle,
                        className: e.className
                    })
                })
            }
            let m = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto"
                },
                f = {
                    height: "var(--full-viewport-height)"
                };

            function g(e) {
                var t, a, o;
                let s, d, {
                        allowDismissByEscape: p = !0,
                        animateSizeTransition: g = !0,
                        ariaLabel: y,
                        ariaLabelledBy: h,
                        ariaDescribedBy: v,
                        children: b,
                        transition: _
                    } = e,
                    x = u({
                        minimumOutsideSpacing: {
                            type: "sides",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }
                    }),
                    {
                        isTablet: w
                    } = (0, n(533992).Y0)();
                null != (t = e.deprecatedCompatibilityOverrides) && t.tabletsUsePhoneDisplayMode && w && (s = {
                    width: {
                        type: "fixed",
                        length: n(182718).bJ
                    }
                }), e.areaConstraint && (d = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "phone"
                }) : e.areaConstraint);
                let S = c([x, s, {
                        width: {
                            type: "fill",
                            scroll: null == (a = d) || null == (a = a.width) ? void 0 : a.scroll
                        },
                        height: null == (o = d) ? void 0 : o.height
                    }]),
                    k = (0, i.useCallback)(() => (0, r.jsx)(n(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, r.jsx)(l, {
                            areaConstraint: S,
                            isSizeTransitionAnimated: g,
                            children: (0, r.jsx)(n(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? b({
                                    displayMode: "phone",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    }), [S, g, b]);
                return (0, r.jsx)(n(19187).e.Provider, {
                    value: _.onDismiss,
                    children: (0, r.jsx)(n(182718).zD, {
                        ariaLabel: y,
                        ariaLabelledBy: h,
                        ariaDescribedBy: v,
                        open: _.isOpen,
                        popupType: n(423291).n.BottomSheet,
                        onDismiss: p ? _.onDismiss : void 0,
                        onClosed: _.onClosed,
                        slideUpWrapStyle: f,
                        style: m,
                        content: k,
                        className: e.className,
                        bottomSheetBackgroundColor: "elevated"
                    })
                })
            }

            function y(e) {
                let {
                    isOpen: t,
                    onClosed: i,
                    onDismiss: o,
                    deprecatedCompatibilityOverrides: l,
                    startClosingOnDismiss: s
                } = e, d = function(e) {
                    let {
                        isPhone: t
                    } = (0, n(533992).Y0)();
                    return null != e && e.tabletsUsePhoneDisplayMode ? n(986939).A.isMobile ? "phone" : "desktop" : t ? "phone" : "desktop"
                }(l), c = (0, n(245372).j)({
                    isOpen: t,
                    onClosed: i,
                    onDismiss: o,
                    startClosingOnDismiss: s
                });
                if (!c.shouldRender) return null;
                switch (d) {
                    case "phone":
                        return (0, r.jsx)(g, { ...e,
                            transition: c
                        });
                    case "desktop":
                        return (0, r.jsx)(p, { ...e,
                            transition: c
                        });
                    default:
                        (0, a().HB)(d)
                }
            }
        },
        852864: (e, t, n) => {
            n.d(t, {
                H: () => i
            }), n(898992), n(672577);

            function i({
                spaceStore: e,
                userId: t,
                environment: a
            }) {
                let o = new(n(736309)).d(a, {
                    table: n(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return o ? n(994797).SpaceViewStore.createChildStore(e, {
                    id: o.id,
                    table: n(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        853160: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("checkmarkCircle", a, "default")
        },
        855021: (e, t, n) => {
            n.d(t, {
                q: () => i
            });

            function i() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    i = (0, n(533992).v3)(),
                    a = (0, n(682985).K8)(() => n(375592).T.getData(i, {
                        userId: i.currentUser.id || ""
                    }), [i]);
                return (0, n(682985).K8)(() => (0, n(407998).V)({
                    environment: i,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: a
                }), [i, e, t, a])
            }
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => i
            });

            function i(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        },
        892166: (e, t, n) => {
            n.d(t, {
                U: () => a
            });
            var i = n(296540);

            function a(e, t) {
                let {
                    navigate: a
                } = (0, i.useContext)(n(44894).E), o = (0, n(533992).v3)(), {
                    isPhone: r
                } = (0, n(533992).Y0)(), l = (0, i.useContext)(n(19187).e);
                return (0, i.useCallback)(i => {
                    if ((0, n(104310).u)({
                            event: {
                                eventName: e,
                                eventProperties: {}
                            }
                        }), r) null == l || l(), a({
                        environment: o,
                        url: "/nativetab/templates",
                        redirect: !0
                    });
                    else {
                        let e = "click" === i.type && (i.metaKey || i.ctrlKey);
                        (null == t ? void 0 : t.forceOpenInNewTab) || e ? a({
                            environment: o,
                            url: n(168962).JZ.marketplace,
                            openInNew: "tab",
                            makeTabActive: !e && o.device.isDesktop
                        }) : (0, n(666236).P)({
                            environment: o
                        })
                    }
                }, [o, e, t, r, l, a])
            }
        },
        898378: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                notionTintableIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.76 1.39 16.47 17.17",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                    })
                },
                a = (0, n(104509).wt)("notionTintable", i, "tintable")
        },
        916612: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);
            let a = function({
                    imageURL: e,
                    imageWidth: t,
                    imageHeight: a,
                    caption: o,
                    title: l,
                    imageContainerStyle: s
                }) {
                    if (!e) return (0, i.jsx)(r, {
                        caption: o,
                        title: l,
                        style: {
                            width: t
                        }
                    }); {
                        let d = (0, n(703003).L)(e);
                        return (0, i.jsxs)("div", {
                            style: {
                                width: t || 200,
                                marginTop: 4,
                                marginBottom: 4
                            },
                            children: [(0, i.jsx)("div", {
                                style: {
                                    width: "100%",
                                    height: a || 100,
                                    borderRadius: 4,
                                    backgroundImage: `url(${d})`,
                                    backgroundSize: "cover",
                                    marginBottom: 6,
                                    ...s
                                }
                            }), (0, i.jsx)(r, {
                                caption: o,
                                title: l
                            })]
                        })
                    }
                },
                o = {
                    style0: {
                        fontWeight: n(699422).Wy.bold,
                        marginBottom: 4
                    },
                    style1: {
                        whiteSpace: "normal",
                        lineHeight: 1.4
                    }
                };

            function r({
                style: e,
                caption: t,
                title: n
            }) {
                return (0, i.jsxs)("div", {
                    style: { ...o.style1,
                        ...e
                    },
                    children: [n ? (0, i.jsx)("header", {
                        style: o.style0,
                        children: n
                    }) : void 0, t]
                })
            }
        },
        921048: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                magnifyingGlassSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                a = (0, n(104509).wt)("magnifyingGlassSmall", i, "small")
        },
        922900: (e, t, n) => {
            n.d(t, {
                getWorkflowAgentConfig: () => a
            }), n(898992), n(430670), n(737550);
            let i = new(n(245541)).R({
                key: "agent_memory_database_page",
                namespace: n(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function a(e) {
                let t, {
                        isOnboardingAgent: a,
                        searchScopes: r,
                        searchSessionId: l,
                        useWebSearch: s,
                        useComputer: d,
                        yoloMode: c,
                        useReadOnlyMode: u,
                        model: p,
                        isCustomAgent: m,
                        isCustomAgentBuilder: f,
                        workflowId: g,
                        modelFromUser: y,
                        writerMode: h,
                        useRulePrioritization: v,
                        useCustomAgentDraft: b,
                        useDraftActorPointer: _,
                        ephemeralInstructions: x,
                        databaseAgentConfigMode: w,
                        environment: S,
                        spaceId: k,
                        spaceStore: M
                    } = e,
                    T = n(886556).z.isZeroRetentionEnabled(),
                    C = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), o),
                    I = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), o),
                    A = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), o),
                    j = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), o),
                    D = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), o),
                    B = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), o),
                    H = (0, n(388647).p)({
                        environment: S
                    }),
                    P = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), o),
                    E = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), o),
                    O = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), o),
                    N = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), o),
                    V = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), o),
                    R = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), o),
                    L = o("agent_enable_create_thread"),
                    z = o("software_factory_page"),
                    F = o("enable_script_agent_writer"),
                    U = o("database_agents_on_script_agent"),
                    W = (!w || U) && (!h || F),
                    K = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), o),
                    q = o("agent_crdt_operations"),
                    $ = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), o),
                    G = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), o),
                    Y = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), o),
                    Z = (0, n(328765).S)(),
                    J = M ? ? (void 0 === k || (null == Z ? void 0 : Z.id) === k ? Z : void 0),
                    Q = o("sams_specials"),
                    X = o("ai_image_generation") && !Q && ((null == J ? void 0 : J.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), o),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), o),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), o),
                    ei = o("agent_search_tool_v2"),
                    ea = o("agent_update_page_autofixer"),
                    eo = o("agent_markdown_vnext"),
                    er = o("agent_update_page_order_updates"),
                    el = o("agent_support_property_reorder"),
                    es = o("agent_short_update_page_result"),
                    ed = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ec = i.getState(),
                    eu = null == ec ? void 0 : ec.pageId,
                    ep = h || m ? void 0 : function() {
                        switch (n(218744).default.getEligibleGroup({
                            experimentId: "ai_product_retention_agent_follow_ups",
                            defaultGroup: "control"
                        })) {
                            case "button_nudge":
                                return ["button", "nudge"];
                            case "button_control":
                                return ["button", "default"];
                            case "nudge":
                                return ["nudge"];
                            default:
                                return
                        }
                    }(),
                    em = "on" === n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_agent_speculative_search",
                        defaultGroup: "control"
                    }),
                    ef = (0, n(876688).wd)(),
                    eg = ef.some(e => (0, n(281708).yY)(e)),
                    ey = o("mail_explicit_tool_calls"),
                    eh = o("outlook_custom_agent_email_connector"),
                    ev = o("agent_query_calendar_tool") && eg,
                    eb = ef.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    e_ = o("agent_query_mail_tool") && eb,
                    ex = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    ew = o("agent_ask_survey");
                return t = !g && (u ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: I,
                    enableAgentIntegrations: A,
                    enableCustomAgents: C,
                    enableExperimentalIntegrations: j,
                    enableAgentViewNotificationsTool: Y,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: D,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: q,
                    enableAgentCardCustomization: $,
                    enableSystemPromptAsPage: G,
                    enableUserSessionContext: K,
                    enableScriptAgentAdvanced: !!W && B,
                    enableScriptAgent: !!W && H,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!W && !!m && P,
                    enableScriptAgentGoogleDriveInCustomAgent: !!W && !!m && E,
                    enableScriptAgentSlack: !!W && O,
                    enableScriptAgentMcpServers: !!W && N,
                    enableScriptAgentMail: !!W && V,
                    enableScriptAgentCalendar: !!W && H,
                    enableScriptAgentCustomToolCalling: !!W && R,
                    enableCreateAndRunThread: L,
                    enableSoftwareFactoryPage: z,
                    ...m ? {} : {
                        enableAgentGenerateImage: X
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: em,
                    enableQueryCalendar: ev,
                    enableQueryMail: e_,
                    enableMailExplicitToolCalls: ey,
                    enableMailAgentMultiProviderSupport: eh,
                    useRulePrioritization: v ? ? ex,
                    memoryDatabasePageId: eu,
                    workflowId: g,
                    availableConnectors: ef,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: h ? [] : r ? ? n(425749).R2,
                    useSearchToolV2: ei,
                    useWebSearch: !h && !T && (void 0 === s || s),
                    useComputer: d ? ? !0,
                    yoloMode: c ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!h,
                    model: h ? ed : p,
                    searchSessionId: l,
                    modelFromUser: !h && (y ? ? void 0 !== p),
                    isCustomAgent: !!m,
                    isCustomAgentBuilder: !!f,
                    useCustomAgentDraft: !!b,
                    use_draft_actor_pointer: !!_,
                    enableUpdatePageAutofixer: ea,
                    enableMarkdownVNext: eo,
                    enableUpdatePageOrderUpdates: er,
                    enableAgentSupportPropertyReorder: el,
                    agentShortUpdatePageResult: es,
                    ephemeralInstructions: x,
                    ...h || a || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: ew
                    },
                    databaseAgentConfigMode: !!w,
                    isOnboardingAgent: !!a,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: n(986939).A.isMobile
                }
            }

            function o(e) {
                return n(218744).default.checkGate({
                    gateName: e
                })
            }
        },
        925021: (e, t, n) => {
            n.d(t, {
                K: () => a,
                v: () => i
            });
            let i = (0, n(109939).YK)({
                    addAPageInside: {
                        defaultMessage: "Add a page inside",
                        id: "sidebarItem.addAPageInside.tooltip"
                    }
                }),
                a = (0, n(109939).YK)({
                    addPageTooltip: {
                        defaultMessage: "Add a page",
                        id: "sidebar.addButton.addPageTooltip"
                    }
                })
        },
        927364: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => a,
                xMarkCircleIcon: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.817 7.183a.625.625 0 0 1 0 .884L10.884 10l1.933 1.933a.625.625 0 1 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 1 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 1 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
                        }), (0, i.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                o = (0, n(104509).wt)("xMarkCircle", a, "default")
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                o = (0, n(104509).wt)("archiveBox", a, "default")
        },
        938211: (e, t, n) => {
            n.d(t, {
                J: () => i
            });

            function i() {
                return (0, n(682985).K8)(() => {
                    var e;
                    return !!(null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.setup_session_booked)
                }, [])
            }
        },
        950237: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                layoutIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.29 3.29 13.41 13.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.3 4.825c0-.842.683-1.525 1.525-1.525h3.15c.842 0 1.525.683 1.525 1.525v10.35c0 .842-.683 1.525-1.525 1.525h-3.15A1.525 1.525 0 0 1 3.3 15.175zm1.525-.275a.275.275 0 0 0-.275.275v10.35c0 .152.123.275.275.275h3.15a.275.275 0 0 0 .275-.275V4.825a.275.275 0 0 0-.275-.275zm5.675.275v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525h-3.15c-.842 0-1.525.683-1.525 1.525m1.525-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275v-3.15c0-.152.123-.275.275-.275m0 5.95c-.842 0-1.525.683-1.525 1.525v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525zm-.275 1.525c0-.152.123-.275.275-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275z"
                    })
                },
                a = (0, n(104509).wt)("layout", i, "default")
        },
        961489: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    preference: i
                } = e, a = (0, n(904434).R$)(t);
                a && (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setContrastPreference",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                contrast_preference: i
                            }
                        })
                    }
                })
            }

            function a(e) {
                let t = (0, n(904434).R$)(e);
                return (null == t ? void 0 : t.getSettingsStore().getKeyStore("contrast_preference").getValue()) ? ? "auto"
            }

            function o(e) {
                return void 0 !== (0, n(904434).R$)(e)
            }
            n.d(t, {
                S4: () => i,
                Wu: () => a,
                rD: () => o
            })
        },
        966458: (e, t, n) => {
            n.d(t, {
                Jg: () => i
            }), n(898992), n(672577);

            function i(e) {
                var t;
                let {
                    product: i,
                    userId: a,
                    billingData: o,
                    spaceUserStore: r,
                    spaceStore: l,
                    existingRequests: s
                } = e;
                if (!i || !(null != l && l.id) || !a) return "not_eligible";
                if ((0, n(192159).eh)(o, i) && "ai_credit_pack" !== i) return "product_already_available";
                let d = (0, n(880280).rU)(i),
                    c = function(e) {
                        let {
                            billingData: t,
                            spaceUserStore: i,
                            spaceStore: a
                        } = e;
                        if (!a || !i || !t) return !1;
                        let o = a.getDisableMemberUpgradeRequests();
                        return !(n(986939).A.isMobile || o || !(0, n(262166).jR)((0, n(192159).AI)(t)) || (0, n(192159).et)(t)) && !!(i.isMember() && !i.isWorkspaceOwner())
                    }({
                        billingData: o,
                        spaceUserStore: r,
                        spaceStore: l
                    });
                if (!(d && c) || void 0 === s) return "not_eligible";
                let u = null == (t = s[i]) ? void 0 : t.find(e => e.created_by_id === a);
                return (null == u ? void 0 : u.request_status) || "unrequested"
            }
        },
        966559: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("exclamationMarkCircleSmall", a, "small")
        },
        976298: (e, t, n) => {
            n.d(t, {
                $0: () => c,
                Fx: () => h,
                Ge: () => l,
                I3: () => o,
                Kj: () => g,
                PP: () => v,
                TK: () => b,
                Yy: () => a,
                aE: () => _,
                cQ: () => y,
                kH: () => s,
                m7: () => r,
                nq: () => m,
                nv: () => u,
                tj: () => d
            }), n(898992), n(354520), n(737550);
            let i = {
                    checkbox: !0,
                    date: !0,
                    email: !0,
                    multi_select: !0,
                    number: !0,
                    person: !0,
                    phone_number: !0,
                    relation: !0,
                    select: !0,
                    status: !0,
                    text: !0,
                    title: !0,
                    url: !0,
                    auto_increment_id: !1,
                    button: !1,
                    created_by: !1,
                    created_time: !1,
                    file: !1,
                    formula: !1,
                    last_edited_by: !1,
                    last_edited_time: !1,
                    last_visited_time: !1,
                    location: !1,
                    rollup: !1,
                    verification: !1,
                    place: !1
                },
                a = {
                    checkbox: [{
                        type: "checkbox"
                    }, {
                        type: "undefined"
                    }],
                    date: [{
                        type: "date"
                    }, {
                        type: "undefined"
                    }],
                    email: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    multi_select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    number: [{
                        type: "number"
                    }, {
                        type: "undefined"
                    }],
                    person: [{
                        type: "person"
                    }, { of: {
                            type: "person"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    phone_number: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    relation: [{
                        type: "block"
                    }, { of: {
                            type: "block"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    status: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    text: void 0,
                    title: void 0,
                    url: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }]
                };

            function o(e) {
                return !!(i[e.type] && !(0, n(425985).U)(e) && (!(0, n(9247).$M)(e) || void 0 === (0, n(9247).om)(e)))
            }

            function r(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: i,
                    filter: a,
                    sort: r,
                    sourcePropertyIds: l
                } = e, s = (l ? ? (0, n(722371).objectKeys)(i)).filter((t, r, l) => {
                    let s = i[t];
                    return !(!s || !o(s) || "relation" === s.type && e.restrictCrossSpace && (0, n(226989).o)(e.spaceId, s)) && (!a || a([t, s], r, i))
                });
                if (0 === s.length) return [];
                if (!t || !1 === r) return s;
                let d = (0, n(944940).L)(t, i, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(s, e => d.findIndex(t => t.property === e))
            }

            function l(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: i,
                    sort: a
                } = e, o = (0, n(722371).objectKeys)(i).filter((e, t, a) => {
                    let o = i[e];
                    return !!o && !!(0, n(568249).J)(o)
                });
                if (0 === o.length) return [];
                if (!t || !1 === a) return o;
                let r = (0, n(944940).L)(t, i, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(o, e => r.findIndex(t => t.property === e))
            }

            function s(e) {
                if (e.type === n(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === n(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.LibraryFunctionExecutionError) return {
                    type: e.type,
                    error: e.error,
                    libraryFunctionName: e.libraryFunction.name,
                    errorSource: e.errorSource
                };
                return "errorSource" in e ? {
                    type: e.type,
                    errorSource: e.errorSource
                } : {
                    type: e.type
                }
            }
            let d = {
                checkbox: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                button: !1,
                file: !1,
                verification: !1,
                auto_increment_id: !1,
                created_by: !1,
                created_time: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                place: !1
            };

            function c(e) {
                return !!d[e.type]
            }

            function u(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: i,
                    filter: a,
                    sort: o
                } = e, r = (0, n(722371).objectKeys)(i).filter((e, t, o) => {
                    var r;
                    let l = i[e];
                    return !(!l || !d[l.type] || (0, n(9247).$M)(l) && null != (r = (0, n(9247).om)(l)) && r.auto_update_on_edit) && (!a || a([e, l], t, i))
                });
                if (0 === r.length) return [];
                if (!t || !1 === o) return r;
                let l = (0, n(944940).L)(t, i, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(r, e => l.findIndex(t => t.property === e))
            }
            let p = {
                checkbox: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                auto_increment_id: !1,
                button: !1,
                created_by: !1,
                created_time: !1,
                date: !1,
                file: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function m(e) {
                return p[e.type]
            }
            let f = {
                checkbox: !0,
                created_by: !0,
                created_time: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                last_edited_by: !0,
                last_edited_time: !0,
                auto_increment_id: !1,
                button: !1,
                file: !1,
                formula: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function g(e) {
                return f[e.type]
            }

            function y(e) {
                return 0 === e
            }

            function h(e) {
                return "button_block" === e || "button_property" === e
            }

            function v(e) {
                let {
                    property: t,
                    collectionSchema: n
                } = e;
                return !!n && !n[t]
            }

            function b(e) {
                let {
                    collectionSchema: t,
                    property: n,
                    type: i
                } = e, a = null == t ? void 0 : t[n];
                return !a || ("action" === i ? !o(a) : !d[a.type])
            }

            function _({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: i,
                        pagePropertiesEdited: a,
                        source: o
                    } = e.event;
                    if (void 0 === o) return !1;
                    let r = "some" === a.type && a.some,
                        l = "all" === a.type && a.all;
                    if ((r || l || []).some(e => v({
                            collectionSchema: t,
                            property: e.property
                        }) || b({
                            collectionSchema: t,
                            property: e.property,
                            type: "trigger"
                        }))) return !1;
                    let s = "some" === a.type && (!(0, n(722371).O9)(a.some) || 0 === a.some.length),
                        d = "all" === a.type && (!(0, n(722371).O9)(a.all) || 0 === a.all.length);
                    if (!i && ("none" === a.type || s || d)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        },
        989068: (e, t, n) => {
            async function i(e) {
                var t;
                return null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(n(775657).electronApi, e)
            }
            n.d(t, {
                o: () => s,
                i: () => r
            }), n(296540);
            var a = n(474848);
            let o = (0, n(109939).YK)({
                title: {
                    id: "desktop.unsupportedLocale.title",
                    defaultMessage: "Language not supported on desktop"
                },
                message: {
                    id: "desktop.unsupportedLocale.message",
                    defaultMessage: "The {localeName} locale isn’t supported in this version of the desktop app. Try updating to the latest desktop version."
                }
            });
            async function r({
                locale: e,
                environment: t,
                origin: a,
                intl: l
            }) {
                var s;
                if (t.device.isElectron) {
                    let t = await i(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void n(819652).HK({
                        id: "unsupported_locale",
                        title: l.formatMessage(o.title),
                        message: l.formatMessage(o.message, {
                            localeName: e
                        })
                    })
                }(0, n(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: a
                });
                let d = await t.api.callApi({
                    eventName: "setlocale",
                    environment: t,
                    data: {
                        locale: e
                    }
                });
                "success" === d.type ? (n(467008).A.set("preferredLocale", e), await n(941701).transactionQueue.drain(), t.device.isElectron) ? (null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (s = n(775657).electronApi.setLocale) || s.call(n(775657).electronApi, e), (0, n(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : n(647095).Qg(d)
            }

            function l(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(109939).tz)();
                return (0, a.jsx)(n(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, a.jsx)(n(109939).sA, { ...n(166863).P.language.title
                    }),
                    byline: (0, a.jsx)(n(109939).sA, { ...n(166863).P.language.description
                    }),
                    item: (0, a.jsx)(n(678064).A, {
                        confirm: !0,
                        onChange: e => r({
                            locale: e,
                            environment: t,
                            origin: "languageSettings",
                            intl: i
                        }),
                        currentLocale: e.locale,
                        origin: "languageSettings"
                    })
                })
            }

            function s(e) {
                let {
                    device: t
                } = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, a.jsx)(n(31256).J, {}) : n(986939).A.isMobile ? null : (0, a.jsx)(l, { ...e
                })
            }
        },
        997524: (e, t, n) => {
            n.d(t, {
                lv: () => u,
                C5: () => d,
                u7: () => s,
                uh: () => c
            });
            let i = "theme";

            function a(e, t) {
                var a, o;
                let r, {
                        ThemeStore: l
                    } = e,
                    {
                        mode: d,
                        usingSystemTheme: c
                    } = t;
                if (n(172474)._u) return;
                let u = {
                    mode: d
                };
                l.setState(u), e.mobileNative && e.mobileNative.setTheme(d, c), r = (0, n(632079).O4)({
                    theme: d
                }), a = {
                    mode: d,
                    usingSystemTheme: c,
                    colors: {
                        white: n(632079).oZ.white,
                        blue: r.blue.background.accentPrimary
                    },
                    borderRadius: 4,
                    textColor: r.text.primary,
                    popoverBackgroundColor: r.popoverBackground,
                    popoverBoxShadow: r.shadow.outline.lg,
                    inputBoxShadow: `${r.border.primaryTranslucent} 0 0 0 1px`,
                    inputBackgroundColor: r.background.secondaryTranslucent,
                    dividerColor: r.border.primaryTranslucent,
                    shadowOpacity: 0
                }, null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (o = n(775657).electronApi.setTheme) || o.call(n(775657).electronApi, a);
                try {
                    localStorage.setItem(i, JSON.stringify(u))
                } catch (e) {
                    (0, n(165219).x)({
                        keyId: i,
                        keyValue: JSON.stringify(u),
                        from: "ThemeActions",
                        error: e
                    })
                }
                s(d), "dark" === d ? (document.body.classList.add("dark"), document.body.classList.add("notion-dark-theme")) : (document.body.classList.remove("dark"), document.body.classList.remove("notion-dark-theme"))
            }
            async function o(e) {
                let {
                    mobileNative: t
                } = e, i = "light";
                i = t && t.api.getTheme ? await t.api.getTheme() : (0, n(172474).VD)(e), a(e, {
                    mode: i,
                    usingSystemTheme: !0
                })
            }
            let r = {
                    light: "rgba(0, 0, 0, 0)",
                    dark: "rgba(0, 0, 0, 0)"
                },
                l = {
                    light: "#D3D1CB",
                    dark: "rgba(255, 255, 255, 0.2)"
                };

            function s(e) {
                if (0 === n(190159).A.state) return;
                let t = document.getElementById("scroll-properties");
                t && (t.innerHTML = `
		* {
			scrollbar-width: 15px;
			scrollbar-color: ${l[e]}  ${r[e]};
		}
	`)
            }

            function d(e) {
                n(199162).A.setState(e)
            }

            function c(e) {
                let t = u();
                switch (t) {
                    case "dark":
                    case "light":
                        a(e, {
                            mode: t,
                            usingSystemTheme: !1
                        });
                        break;
                    case "system":
                        o(e);
                        break;
                    default:
                        (0, n(722371).HB)(t)
                }
            }

            function u() {
                var e;
                return "dark" === (e = n(199162).A.state || "system") || "light" === e || "system" === e ? e : "system"
            }
        }
    }
]);