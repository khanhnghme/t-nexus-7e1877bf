"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [72805, 76298, 96579], {
        33529: (e, t, r) => {
            r.d(t, {
                y: () => n
            }), r(898992), r(672577);

            function n(e) {
                var t;
                let {
                    actionModels: n,
                    id: s
                } = e, i = (0, r(297493).y5)(s), a = "action" === i.source ? n.find(e => e.id === i.action_id) : void 0;
                return {
                    automationValueInfo: i,
                    collectionPointer: (0, r(722371).O9)(a) && a.isType("create_page") ? null == (t = a.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: a
                }
            }
        },
        79268: (e, t, r) => {
            r.d(t, {
                C: () => s
            });
            var n = r(296540);

            function s({
                upsell: e,
                source: t,
                buttonDisplayType: i,
                onClickBeforeUpgradeAction: a,
                postUpgradeCallback: o,
                spaceStore: l
            }) {
                let u = (0, r(533992).v3)(),
                    c = (0, r(855021).q)(),
                    _ = (0, r(226309)._3)({
                        spaceId: null == l ? void 0 : l.id
                    }),
                    d = (0, r(345776).T)(),
                    {
                        campaign: p,
                        loading: m
                    } = (0, r(435276).V)(t),
                    [f, b] = function(e) {
                        let {
                            upsell: t
                        } = e, s = (0, r(533992).v3)(), i = (0, r(972740).L)(), a = (0, r(993077).U2)(), o = null == i ? void 0 : i.id, l = (0, r(345776).T)(), u = (0, r(226309).lh)({
                            spaceId: o
                        }), c = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, _ = (0, r(682985).K8)(() => {
                            if (o) return r(477870).L.getData(s, {
                                spaceId: o
                            })
                        }, [s, o]), d = (0, r(682985).K8)(() => (0, r(966458).Jg)({
                            product: c,
                            userId: l,
                            billingData: u,
                            spaceStore: i,
                            spaceUserStore: a,
                            existingRequests: _
                        }), [c, l, u, i, a, _]), [p, m] = (0, n.useState)(d);
                        return (0, n.useEffect)(() => {
                            m(d)
                        }, [d]), [p, m]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    y = (0, r(682985).K8)(() => e ? (0, r(96495).a)({
                        environment: u,
                        upsell: e,
                        spaceStore: l,
                        salesStatus: c,
                        campaign: p,
                        requestState: f,
                        billingData: _,
                        source: t,
                        loading: m
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [l, u, e, c, p, f, _, t, m]),
                    v = (0, n.useCallback)(async () => {
                        if (!e) return;
                        let n = "product" === e.type ? e.product : void 0,
                            s = (0, r(555676).x)();
                        if (!s) return;
                        let [, {
                            getUpgradeSystemAction: c
                        }] = await Promise.all([null == a ? void 0 : a(), s()]), m = c(y);
                        await m({
                            source: t,
                            spaceStore: l,
                            product: n,
                            billingData: _,
                            environment: u,
                            setRequestState: b,
                            userId: d,
                            buttonDisplayType: i,
                            postUpgradeCallback: o,
                            campaign: p,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, a, y, t, l, _, u, b, d, i, o, p]);
                return {
                    upgradeEligibility: y,
                    handleClick: v
                }
            }
        },
        96495: (e, t, r) => {
            r.d(t, {
                a: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    upsell: n,
                    spaceStore: s,
                    salesStatus: i,
                    campaign: a,
                    requestState: o,
                    billingData: l,
                    source: u,
                    loading: c
                } = e;
                if (c) return {
                    status: "loading"
                };
                let _ = (0, r(875472).sO)(a);
                if ("none" === n.type) return {
                    status: "not_eligible",
                    reason: "feature_not_upsellable"
                };
                if ((0, r(916804).I)(s)) return {
                    status: "not_eligible",
                    reason: "guest"
                };
                let d = n.product,
                    {
                        addOnFeature: p
                    } = (0, r(269612).p)({
                        billingData: l,
                        product: d
                    });
                if (!(0, r(192159).Gm)(l) && ["block_limit_sidebar", "block_limit_settings", "block_limit_banner", "database_chart_paywall", "delete_blocks_modal", "slash_menu", "out_of_blocks_toast", "forms_increase_file_limit", "forms_notion_branding", "forms_customize_settings"].includes(u) && !p) return {
                    status: "eligible_to_purchase",
                    reason: "plans_page_redirect"
                };
                let m = function(e) {
                    let {
                        product: t,
                        environment: n,
                        spaceStore: s
                    } = e;
                    if ((0, r(832139).A)()) return {
                        status: "not_eligible",
                        reason: "samsung_purchases_not_supported"
                    };
                    let i = (0, r(663842).m)({
                        environment: n
                    }) && ("personal" === t || "ai" === t);
                    return i && s && (0, r(471078).O)({
                        environment: n,
                        spaceId: s.id
                    }) ? {
                        status: "not_eligible",
                        reason: "mobile_multi_member_workspace"
                    } : n.device.isMobileNative ? "ai" !== t || (0, r(907620).T)("supportsAiIAP") ? i ? {
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
                    product: d,
                    environment: t,
                    spaceStore: s
                });
                return m || ((null == l ? void 0 : l.provider) === "app_store" || (null == l ? void 0 : l.provider) === "play_store" ? {
                    status: "not_eligible",
                    reason: "subscribed_via_in_app_purchase"
                } : "unrequested" === o ? {
                    status: "eligible_to_request"
                } : "pending" === o ? {
                    status: "request_pending"
                } : "sales_assisted" === i ? {
                    status: "sales_assisted"
                } : (0, r(262166).h0)(d) && "sales_eligible" === i ? {
                    status: "sales_eligible"
                } : null != s && s.canAdmin() ? (0, r(192159).bO)((0, r(226309).a9)(l)) ? {
                    status: "not_eligible",
                    reason: "unverified_payment"
                } : "preferred" === n.trialability && (null == _ ? void 0 : _.type) === "trial" && _.subscriptionTier === n.product ? {
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
        124094: (e, t, r) => {
            r.d(t, {
                E: () => l,
                Z: () => u
            });
            var n = () => r(889089);
            let s = {
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
            var i = () => r(617995),
                a = () => r(705820);
            async function o(e) {
                var t;
                let {
                    campaign: n,
                    eligibleCampaigns: s
                } = e;
                if (!s.includes(n)) return !1;
                await (0, r(591083).yc)().catch(() => void 0);
                let i = (0, r(591083).v7)(),
                    a = null == i || null == (t = i[n]) ? void 0 : t.statsigDetails;
                return !!a && (await r(218744).default.waitUntilStatsigReadyAsync(), (0, r(134213).l)({
                    experimentService: r(218744).default,
                    statsigDetails: a
                }).isEligible)
            }
            async function l(e, t, r) {
                let l, u = function(e) {
                    if (s.hasOwnProperty(e)) return s[e]
                }(r);
                if (u)
                    for (let r of u) {
                        if ((0, n().w)(r)) {
                            if (l || (l = await a().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await o({
                                    campaign: r,
                                    eligibleCampaigns: l
                                })) return r;
                            continue
                        }
                        let s = await i().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: r
                        });
                        if ((null == s ? void 0 : s.campaign) === r) return r
                    }
            }

            function u({
                environment: e,
                spaceName: t,
                campaign: n,
                entrypoint: s
            }) {
                if (t) switch (n) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, r(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: n,
                                    entrypoint: s
                                }
                            }
                        })
                }
            }
        },
        208117: (e, t, r) => {
            function n(e) {
                let {
                    environment: t,
                    externalOrgSummary: n,
                    spaceStore: i,
                    billingData: a
                } = e;
                return s({
                    environment: t,
                    externalOrgSummary: n,
                    spaceStore: i,
                    billingData: a
                }) && !(0, r(192159).N8)(a) && !!(!i || !(0, r(556306).h)(i))
            }

            function s(e) {
                let {
                    environment: t,
                    externalOrgSummary: n,
                    spaceStore: s,
                    billingData: i
                } = e;
                if (i && (0, r(192159).N8)(i)) return !0;
                let a = null == s ? void 0 : s.id;
                return !!a && (!!(((0, r(616579).j)({
                    environment: t,
                    spaceId: a
                }) ? ? 1) > 99 || (0, r(192159).N8)(i)) || !!n && "company_employee_count" in n && parseInt(n.company_employee_count) > 99)
            }
            r.d(t, {
                H: () => s,
                q: () => n
            })
        },
        269612: (e, t, r) => {
            r.d(t, {
                p: () => n
            });

            function n({
                billingData: e,
                product: t
            }) {
                return (0, r(722371).Xk)(r(645040).xm, t) ? {
                    addOnFeature: t,
                    for_subscription_tier: (0, r(192159).AI)(e)
                } : {
                    for_subscription_tier: t
                }
            }
        },
        336632: (e, t, r) => {
            r.d(t, {
                Y: () => s
            }), r(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 4.97 9.9 5.58",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M8.442 5.158a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 1 0 .884.884L8 6.484l3.878 3.878a.625.625 0 1 0 .884-.884z"
                    })
                },
                s = (0, r(104509).wt)("arrowChevronSingleUpSmall", n, "small")
        },
        375592: (e, t, r) => {
            r.d(t, {
                T: () => n
            });
            let n = new(r(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            r(202146).exposeDebugValue("ExternalOrgDataStore", n)
        },
        407998: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    billingData: s,
                    externalOrgSummary: i
                } = e;
                return (0, r(192159).N8)(s) ? "sales_assisted" : n && (0, r(208117).H)({
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: n,
                    billingData: s
                }) && !(0, r(556306).h)(n) ? "sales_eligible" : "self_serve"
            }
        },
        432705: (e, t, r) => {
            function n(e) {
                return "event" === e || "recurrence" === e
            }

            function s(e) {
                let t = e.getTrigger();
                return (0, r(722371).O9)(t) && n(t.type)
            }

            function i(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, r(722371).HB)(e)
            }
            r.d(t, {
                $X: () => s,
                H8: () => i,
                x2: () => n
            })
        },
        435276: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n(e) {
                let t = (0, r(533992).v3)(),
                    n = (0, r(972740).L)(),
                    {
                        spaceId: s,
                        spaceName: i
                    } = (0, r(682985).K8)(() => n ? {
                        spaceId: n.getSpaceId(),
                        spaceName: (0, r(742197).G)(t, n)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, n]),
                    [{
                        value: a,
                        status: o
                    }] = (0, r(97668).Yb)(async () => {
                        if (!s) return;
                        let n = await (0, r(124094).E)(t, s, e);
                        if (n) return i && (0, r(124094).Z)({
                            environment: t,
                            spaceName: i,
                            campaign: n,
                            entrypoint: e
                        }), n
                    }, [t, s, i, e]);
                return {
                    campaign: a,
                    loading: "pending" === o || "idle" === o
                }
            }
        },
        477870: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            let n = new(r(227586)).n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, t) => {
                let n = await e.api.callApi({
                        eventName: "getAllUpgradeRequestsForSpace",
                        environment: e,
                        data: t
                    }),
                    s = [{
                        key: (0, r(568479).VI)(t),
                        version: -1
                    }];
                return "success" === n.type ? {
                    value: n.data.requests,
                    dependencies: n.data.dependencies ? ? s
                } : void 0
            })
        },
        556306: (e, t, r) => {
            r.d(t, {
                h: () => n
            });

            function n(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
        },
        605263: (e, t, r) => {
            r.d(t, {
                K4: () => l,
                To: () => d,
                fi: () => u,
                q8: () => o,
                u: () => a
            }), r(16280), r(18107), r(967357);
            var n = r(296540),
                s = r(474848);
            let i = (0, n.createContext)({
                ancestors: []
            });

            function a(e) {
                let {
                    automationStore: t,
                    children: a,
                    contextType: o,
                    collectionStore: l,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: d,
                    collectionViewStore: p,
                    enableExistenceGuarantees: m
                } = e, f = (0, r(533992).v3)(), b = (0, r(109939).tz)(), {
                    value: y
                } = (0, r(815048).fJ)(r(864850).T.formulas), {
                    value: v
                } = (0, r(815048).fJ)(r(879267).QV.automationTypecheck), g = (0, r(470569).o)(t), k = (0, r(67499).S)(), h = (0, r(682985).K8)(() => y ? v ? function(e) {
                    let {
                        environment: t,
                        automationStore: n,
                        automationTypecheckModule: s,
                        contextType: i,
                        formulasModule: a,
                        intl: o,
                        subscriptionInfo: l,
                        pageStore: u,
                        enableExistenceGuarantees: d
                    } = e, p = d ? c.get(n) : c.get(n) ? ? _.get(n);
                    if (p) return p;
                    let m = new(r(345426)).ComputedStore(() => {
                        let e = n.getTriggerType(),
                            c = i;
                        return (0, r(722371).O9)(e) && (0, r(432705).x2)(e) && (c = (0, r(432705).H8)(e)), (0, r(100197).Z)({
                            environment: t,
                            automationStore: n,
                            automationTypecheckModule: s,
                            contextType: c,
                            formulasModule: a,
                            intl: o,
                            subscriptionInfo: l,
                            pageStore: u,
                            enableExistenceGuarantees: d
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return d && c.set(n, m), _.set(n, m), m
                }({
                    automationStore: t,
                    automationTypecheckModule: v,
                    contextType: o,
                    environment: f,
                    formulasModule: y,
                    intl: b,
                    subscriptionInfo: g,
                    pageStore: "button_block" === o ? null == k ? void 0 : k.pageStore : void 0,
                    enableExistenceGuarantees: m
                }).state : {
                    error: new(r(600005)).N9("Missing automation dependency")
                } : {
                    error: new(r(600005)).N9("Missing formulas dependency")
                }, [f, t, v, o, y, b, g, null == k ? void 0 : k.pageStore, m]), x = (0, n.useContext)(i), w = (0, n.useMemo)(() => 0 === x.ancestors.length ? [{
                    automationStore: t,
                    contextType: o,
                    typecheckResult: h,
                    collectionStore: l,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: d,
                    collectionViewStore: p
                }] : [...x.ancestors, {
                    automationStore: t,
                    contextType: o,
                    typecheckResult: h,
                    collectionStore: l,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: d,
                    collectionViewStore: p
                }], [x, t, o, h, l, u, d, p]), S = (0, n.useMemo)(() => ({
                    ancestors: w,
                    enableExistenceGuarantees: m
                }), [w, m]);
                return (0, s.jsx)(i.Provider, {
                    value: S,
                    children: a
                })
            }

            function o() {
                let e = (0, n.useContext)(i).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function l() {
                return (0, n.useContext)(i).ancestors.at(-1)
            }

            function u() {
                return (0, n.useContext)(i).enableExistenceGuarantees
            }
            i.displayName = "AutomationContext", i.Consumer;
            let c = new WeakMap,
                _ = new WeakMap;

            function d(e) {
                var t;
                return null == (t = c.get(e)) ? void 0 : t.state
            }
        },
        705820: (e, t, r) => {
            r.d(t, {
                P: () => n
            });
            let n = new(r(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!r(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let n = new(r(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await n.load(), !n.canAdmin()) return;
                let s = await e.api.callCellCompatibleApi({
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
                if ("success" === s.type) return s.data.campaigns
            });
            r(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", n)
        },
        816231: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var n = r(296540),
                s = r(474848);

            function i(e) {
                let t = (0, n.useRef)(null),
                    r = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    let r = t.current;
                    if (!r) return;
                    let n = e.el.getBoundingClientRect();
                    r.style.height = `${n.height}px`;
                    let s = 0,
                        i = e => {
                            cancelAnimationFrame(s), s = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: r,
                                    mouseY: n
                                }) {
                                    let {
                                        x: s,
                                        y: i,
                                        height: a,
                                        width: o
                                    } = t;
                                    if (r > s) {
                                        let t = Math.max(r - (s + o), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(n-i)/a}%)`
                                    } else {
                                        let t = Math.max(s - r, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(n-i)/a}%, 100% 100%)`
                                    }
                                }({
                                    div: r,
                                    rect: n,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", i), () => {
                        window.removeEventListener("mousemove", i), cancelAnimationFrame(s)
                    }
                }, [e.el]);
                let i = n.useCallback(e => {
                    if (!r.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let n = document.elementFromPoint(e.clientX, e.clientY);
                        if (n === t.current && (t.current.style.visibility = "hidden", n = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), n && n !== t.current) {
                            r.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                n.dispatchEvent(t)
                            } finally {
                                r.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, s.jsx)("div", {
                    ref: t,
                    onClick: i,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let a = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                o = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                l = n.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: l,
                    allowOptionalExtensionMenu: u,
                    ...c
                }, _) {
                    let {
                        disabled: d,
                        disableDefaultClick: p,
                        onFocus: m,
                        focused: f,
                        placementToOrigin: b,
                        alignmentToOrigin: y,
                        disableCloseOnEnter: v,
                        bottomSheetInitialState: g,
                        popupTypeOverride: k
                    } = c, h = (0, r(533992).WS)(), x = (0, r(649476).Tf)(), [w, S] = (0, n.useState)(!1), [C, I] = (0, n.useState)(!1), T = (0, n.useRef)(null), E = (0, n.useRef)(null), M = (0, n.useRef)(null), A = (0, n.useRef)(null), P = (0, n.useCallback)(() => {
                        M.current && window.clearTimeout(M.current), A.current && window.clearTimeout(A.current), M.current = null, A.current = null
                    }, []), N = (0, n.useCallback)(() => {
                        P(), d || (S(!0), I(!0))
                    }, [d, P]), F = (0, n.useCallback)(() => {
                        P(), I(!1), S(!1)
                    }, [P]), j = (0, n.useCallback)(e => {
                        P(), w || (e && e.preventDefault && e.preventDefault(), M.current = window.setTimeout(N, 120))
                    }, [w, P, N]), D = (0, n.useCallback)(() => {
                        I(!1), P(), w && (A.current = window.setTimeout(F, 100))
                    }, [w, F, P]), R = (0, n.useCallback)(t => {
                        m(), N(), u && (null == e || e(t), F())
                    }, [m, N, u, e, F]), W = (0, n.useCallback)(() => {
                        h || j()
                    }, [j, h]), V = (0, n.useCallback)(() => {
                        h || (m(), j())
                    }, [m, j, h]), $ = (0, n.useCallback)(e => {
                        if (r(986939).A.isMobile) return;
                        let t = T.current;
                        w && t && !t.contains(e.target) && F()
                    }, [w, F]), L = (0, n.useCallback)(e => {
                        13 === e.keyCode && w && !v && F()
                    }, [w, F, v]);
                    (0, n.useEffect)(() => {
                        if (!p) return window.addEventListener("click", $), () => {
                            window.removeEventListener("click", $)
                        }
                    }, [p, $]), (0, n.useEffect)(() => (window.addEventListener("keydown", L), () => {
                        window.removeEventListener("keydown", L)
                    }), [L]);
                    let O = (0, n.useRef)(f);
                    (0, n.useEffect)(() => {
                        !f && O.current && D(), O.current = f
                    }, [f, D]);
                    let U = { ...(0, r(63390).A)({
                                onMouseEnter: W,
                                onClick: R
                            }, c),
                            showExtensionArrow: !0
                        },
                        q = r(423291).n.Popup;
                    return k ? q = k : h && (q = x ? r(423291).n.BottomSheet : r(423291).n.SlideUp), (0, s.jsx)(r(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: f,
                        onEnter: w ? void 0 : j,
                        onRight: j,
                        onLeft: w ? D : void 0,
                        onEsc: w ? D : void 0,
                        children: (0, s.jsx)(r(182718).zD, {
                            popupType: q,
                            bottomSheetInitialState: g,
                            open: w,
                            placementToOrigin: b ? ? "right",
                            alignmentToOrigin: y ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !h,
                            preventCaptureEsc: !0,
                            ref: T,
                            content: () => (0, s.jsxs)(s.Fragment, {
                                children: [!h && C && E.current ? (0, s.jsx)(i, {
                                    el: E.current
                                }) : null, (0, s.jsx)("div", {
                                    ref: E,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: l({
                                        onMouseEnter: V
                                    }, {
                                        close: D
                                    })
                                })]
                            }),
                            style: [o, h && a],
                            trapFocus: !0,
                            onDismiss: F,
                            children: null == t ? void 0 : t(U, _)
                        })
                    })
                })
        },
        832139: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n() {
                return ((0, r(907620).T)("isSamsungPreload") || (0, r(907620).T)("isInstalledFromSamsungAppStore")) && r(218744).default.checkGate({
                    gateName: "samsung_disable_all_upgrades"
                })
            }
        },
        853160: (e, t, r) => {
            r.r(t), r.d(t, {
                checkmarkCircleIcon: () => i,
                iconDefinition: () => s
            }), r(296540);
            var n = r(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, n.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                i = (0, r(104509).wt)("checkmarkCircle", s, "default")
        },
        855021: (e, t, r) => {
            r.d(t, {
                q: () => n
            });

            function n() {
                let e = (0, r(972740).L)(),
                    t = (0, r(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    n = (0, r(533992).v3)(),
                    s = (0, r(682985).K8)(() => r(375592).T.getData(n, {
                        userId: n.currentUser.id || ""
                    }), [n]);
                return (0, r(682985).K8)(() => (0, r(407998).V)({
                    environment: n,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: s
                }), [n, e, t, s])
            }
        },
        895105: (e, t, r) => {
            r.r(t), r.d(t, {
                filterIcon: () => s,
                iconDefinition: () => n
            }), r(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                s = (0, r(104509).wt)("filter", n, "default")
        },
        966458: (e, t, r) => {
            r.d(t, {
                Jg: () => n
            }), r(898992), r(672577);

            function n(e) {
                var t;
                let {
                    product: n,
                    userId: s,
                    billingData: i,
                    spaceUserStore: a,
                    spaceStore: o,
                    existingRequests: l
                } = e;
                if (!n || !(null != o && o.id) || !s) return "not_eligible";
                if ((0, r(192159).eh)(i, n) && "ai_credit_pack" !== n) return "product_already_available";
                let u = (0, r(880280).rU)(n),
                    c = function(e) {
                        let {
                            billingData: t,
                            spaceUserStore: n,
                            spaceStore: s
                        } = e;
                        if (!s || !n || !t) return !1;
                        let i = s.getDisableMemberUpgradeRequests();
                        return !(r(986939).A.isMobile || i || !(0, r(262166).jR)((0, r(192159).AI)(t)) || (0, r(192159).et)(t)) && !!(n.isMember() && !n.isWorkspaceOwner())
                    }({
                        billingData: i,
                        spaceUserStore: a,
                        spaceStore: o
                    });
                if (!(u && c) || void 0 === l) return "not_eligible";
                let _ = null == (t = l[n]) ? void 0 : t.find(e => e.created_by_id === s);
                return (null == _ ? void 0 : _.request_status) || "unrequested"
            }
        },
        976298: (e, t, r) => {
            r.d(t, {
                $0: () => c,
                Fx: () => y,
                Ge: () => o,
                I3: () => i,
                Kj: () => f,
                PP: () => v,
                TK: () => g,
                Yy: () => s,
                aE: () => k,
                cQ: () => b,
                kH: () => l,
                m7: () => a,
                nq: () => p,
                nv: () => _,
                tj: () => u
            }), r(898992), r(354520), r(737550);
            let n = {
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
                s = {
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

            function i(e) {
                return !!(n[e.type] && !(0, r(425985).U)(e) && (!(0, r(9247).$M)(e) || void 0 === (0, r(9247).om)(e)))
            }

            function a(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    filter: s,
                    sort: a,
                    sourcePropertyIds: o
                } = e, l = (o ? ? (0, r(722371).objectKeys)(n)).filter((t, a, o) => {
                    let l = n[t];
                    return !(!l || !i(l) || "relation" === l.type && e.restrictCrossSpace && (0, r(226989).o)(e.spaceId, l)) && (!s || s([t, l], a, n))
                });
                if (0 === l.length) return [];
                if (!t || !1 === a) return l;
                let u = (0, r(944940).L)(t, n, void 0, r(565546).jf.Page).collection_page_properties || [];
                return r(381453).Ul(l, e => u.findIndex(t => t.property === e))
            }

            function o(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    sort: s
                } = e, i = (0, r(722371).objectKeys)(n).filter((e, t, s) => {
                    let i = n[e];
                    return !!i && !!(0, r(568249).J)(i)
                });
                if (0 === i.length) return [];
                if (!t || !1 === s) return i;
                let a = (0, r(944940).L)(t, n, void 0, r(565546).jf.Page).collection_page_properties || [];
                return r(381453).Ul(i, e => a.findIndex(t => t.property === e))
            }

            function l(e) {
                if (e.type === r(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === r(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === r(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === r(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === r(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === r(944897).uW.LibraryFunctionExecutionError) return {
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
            let u = {
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
                return !!u[e.type]
            }

            function _(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    filter: s,
                    sort: i
                } = e, a = (0, r(722371).objectKeys)(n).filter((e, t, i) => {
                    var a;
                    let o = n[e];
                    return !(!o || !u[o.type] || (0, r(9247).$M)(o) && null != (a = (0, r(9247).om)(o)) && a.auto_update_on_edit) && (!s || s([e, o], t, n))
                });
                if (0 === a.length) return [];
                if (!t || !1 === i) return a;
                let o = (0, r(944940).L)(t, n, void 0, r(565546).jf.Page).collection_page_properties || [];
                return r(381453).Ul(a, e => o.findIndex(t => t.property === e))
            }
            let d = {
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

            function p(e) {
                return d[e.type]
            }
            let m = {
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

            function f(e) {
                return m[e.type]
            }

            function b(e) {
                return 0 === e
            }

            function y(e) {
                return "button_block" === e || "button_property" === e
            }

            function v(e) {
                let {
                    property: t,
                    collectionSchema: r
                } = e;
                return !!r && !r[t]
            }

            function g(e) {
                let {
                    collectionSchema: t,
                    property: r,
                    type: n
                } = e, s = null == t ? void 0 : t[r];
                return !s || ("action" === n ? !i(s) : !u[s.type])
            }

            function k({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: n,
                        pagePropertiesEdited: s,
                        source: i
                    } = e.event;
                    if (void 0 === i) return !1;
                    let a = "some" === s.type && s.some,
                        o = "all" === s.type && s.all;
                    if ((a || o || []).some(e => v({
                            collectionSchema: t,
                            property: e.property
                        }) || g({
                            collectionSchema: t,
                            property: e.property,
                            type: "trigger"
                        }))) return !1;
                    let l = "some" === s.type && (!(0, r(722371).O9)(s.some) || 0 === s.some.length),
                        u = "all" === s.type && (!(0, r(722371).O9)(s.all) || 0 === s.all.length);
                    if (!n && ("none" === s.type || l || u)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        }
    }
]);