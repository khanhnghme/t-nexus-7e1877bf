"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [22197, 79563], {
        5091: (e, t, r) => {
            r.d(t, {
                K: () => n
            });

            function n(e, t, n) {
                let o = (0, r(682985).K8)(() => "business_trial" === r(218744).default.getEligibleGroup({
                        experimentId: "business_block_limit_offer",
                        defaultGroup: r(218745).STATSIG_DEFAULT_GROUP,
                        disableExposureLogging: !0
                    }), []),
                    a = (0, r(682985).K8)(() => null == e ? void 0 : e.getSetting("reach_block_limit_time"), [e]),
                    i = a ? (0, r(362008).Mn)(a) : void 0,
                    s = !!(o && i && i >= 6 && "eligible_to_purchase" === n.status);
                return !!(0, r(682985).K8)(() => !!s && !!e && r(617995).I.getData(t, {
                    offerCampaign: "business_cc_14d_block_limit",
                    spaceId: e.id
                }), [t, e, s])
            }
        },
        44027: (e, t, r) => {
            function n(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: n,
                    modalLastShownAt: o,
                    modalShownTimes: a
                } = e;
                return !!(0, r(383378).V9)(t, n) && void 0 !== o && void 0 !== a && (!(o > 0) || !(n.diff(r(906745).DateTime.fromMillis(o), "days").days >= r(118999).ls)) && (a ? ? 0) >= r(118999).TY
            }

            function o(e, t = (0, r(192159).DS)(e)) {
                if (!e) return;
                let n = (0, r(192159).i5)(e);
                if (n) return Math.ceil(n.toUTC().diff(t.toUTC(), "days").days)
            }

            function a(e, t) {
                let n = r(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? r(906745).DateTime.now()).toUTC().hasSame(n, "day")
            }

            function i(e) {
                let t = (0, r(278662).Jd)(e);
                if (t) return (0, r(875472).Vm)(t)
            }

            function s(e) {
                let t = (0, r(278662).Jd)(e);
                if (t) return (0, r(875472).kd)(t)
            }

            function u(e) {
                let t = r(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function c(e) {
                return Math.round(e / 30)
            }

            function d({
                billingData: e
            }) {
                if (!(0, r(192159).TB)(e)) return !1;
                if ((0, r(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, r(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function l(e) {
                return (0, r(192159).oD)(e) && (0, r(717274).pX)()
            }

            function p(e) {
                return (0, r(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function f(e) {
                return (0, r(722371).Xk)(r(90416).K_, e)
            }

            function g(e) {
                return (0, r(722371).Xk)([...r(994234).iE, ...r(994234).wW, ...r(994234).Fh], e)
            }

            function m(e) {
                let {
                    openedFrom: t,
                    campaign: r,
                    isCustomAgentsGateEnabled: n
                } = e;
                return n && (f(t) || "deeplink" === t && g(r))
            }
            r.d(t, {
                F$: () => m,
                IU: () => l,
                J: () => i,
                SF: () => f,
                Tr: () => c,
                UP: () => o,
                XF: () => a,
                cn: () => s,
                dt: () => g,
                od: () => n,
                rE: () => u,
                tY: () => p,
                z2: () => d
            }), r(16280)
        },
        56281: (e, t, r) => {
            function n(e, t) {
                return t ? t.percent_off ? {
                    amount: e * t.percent_off / 100,
                    monthsRemaining: t.duration_in_months
                } : t.amount_off ? {
                    amount: t.amount_off
                } : {
                    amount: 0
                } : {
                    amount: 0
                }
            }

            function o(e) {
                return "personal" !== e && r(126365).tX.find(t => t === e)
            }
            r.d(t, {
                VV: () => i,
                _6: () => o,
                _q: () => a,
                ex: () => n
            }), r(16280), r(944114), r(898992), r(672577);
            let a = ["kr_card", "kakao_pay", "naver_pay"];

            function i(e) {
                let {
                    currency: t
                } = e, r = ["card", "link"];
                return "EUR" === t && r.push("sepa_debit"), "KRW" === t && r.push(...a), r
            }
        },
        79268: (e, t, r) => {
            r.d(t, {
                C: () => o
            });
            var n = r(296540);

            function o({
                upsell: e,
                source: t,
                buttonDisplayType: a,
                onClickBeforeUpgradeAction: i,
                postUpgradeCallback: s,
                spaceStore: u
            }) {
                let c = (0, r(533992).v3)(),
                    d = (0, r(855021).q)(),
                    l = (0, r(226309)._3)({
                        spaceId: null == u ? void 0 : u.id
                    }),
                    p = (0, r(345776).T)(),
                    {
                        campaign: f,
                        loading: g
                    } = (0, r(435276).V)(t),
                    [m, _] = function(e) {
                        let {
                            upsell: t
                        } = e, o = (0, r(533992).v3)(), a = (0, r(972740).L)(), i = (0, r(993077).U2)(), s = null == a ? void 0 : a.id, u = (0, r(345776).T)(), c = (0, r(226309).lh)({
                            spaceId: s
                        }), d = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, l = (0, r(682985).K8)(() => {
                            if (s) return r(477870).L.getData(o, {
                                spaceId: s
                            })
                        }, [o, s]), p = (0, r(682985).K8)(() => (0, r(966458).Jg)({
                            product: d,
                            userId: u,
                            billingData: c,
                            spaceStore: a,
                            spaceUserStore: i,
                            existingRequests: l
                        }), [d, u, c, a, i, l]), [f, g] = (0, n.useState)(p);
                        return (0, n.useEffect)(() => {
                            g(p)
                        }, [p]), [f, g]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    b = (0, r(682985).K8)(() => e ? (0, r(96495).a)({
                        environment: c,
                        upsell: e,
                        spaceStore: u,
                        salesStatus: d,
                        campaign: f,
                        requestState: m,
                        billingData: l,
                        source: t,
                        loading: g
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [u, c, e, d, f, m, l, t, g]),
                    h = (0, n.useCallback)(async () => {
                        if (!e) return;
                        let n = "product" === e.type ? e.product : void 0,
                            o = (0, r(555676).x)();
                        if (!o) return;
                        let [, {
                            getUpgradeSystemAction: d
                        }] = await Promise.all([null == i ? void 0 : i(), o()]), g = d(b);
                        await g({
                            source: t,
                            spaceStore: u,
                            product: n,
                            billingData: l,
                            environment: c,
                            setRequestState: _,
                            userId: p,
                            buttonDisplayType: a,
                            postUpgradeCallback: s,
                            campaign: f,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, i, b, t, u, l, c, _, p, a, s, f]);
                return {
                    upgradeEligibility: b,
                    handleClick: h
                }
            }
        },
        90416: (e, t, r) => {
            r.d(t, {
                CT: () => i,
                K_: () => u,
                Mi: () => n,
                uv: () => a,
                zL: () => s,
                zj: () => o
            });
            let n = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                o = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                a = ["ai_research_mode"],
                i = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                s = ["ai_agent"],
                u = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        118999: (e, t, r) => {
            r.d(t, {
                Hb: () => g,
                Hu: () => d,
                TY: () => n,
                Tu: () => i,
                U4: () => f,
                U7: () => m,
                WO: () => u,
                XX: () => p,
                c4: () => c,
                ef: () => a,
                ej: () => l,
                hI: () => s,
                ls: () => o
            });
            let n = 2,
                o = 30,
                a = 30,
                i = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                s = 332,
                u = 852,
                c = 800,
                d = 407,
                l = 24,
                p = 400,
                f = 450,
                g = 524,
                m = 7
        },
        272799: (e, t, r) => {
            function n(e) {
                r(986939).A.isMobile || r(822284).HL.setState({
                    open: !0,
                    ...e
                })
            }

            function o() {
                r(822284).HL.update(e => ({ ...e,
                    open: !1
                }))
            }

            function a(e) {
                r(986939).A.isMobile || r(822284).BusinessTrialEndingModalStore.update(() => ({
                    modalState: "initial",
                    ...e,
                    open: !0
                }))
            }

            function i(e) {
                r(822284).BusinessTrialEndingModalStore.update(t => ({ ...t,
                    modalState: e
                }))
            }

            function s() {
                r(822284).BusinessTrialEndingModalStore.update(e => ({ ...e,
                    open: !1,
                    modalState: "initial"
                }))
            }

            function u(e) {
                r(822284).BS.setState({ ...e,
                    open: !0
                })
            }

            function c() {
                r(822284).BS.update(e => ({ ...e,
                    open: !1
                }))
            }

            function d(e) {
                r(822284).jz.setState({
                    open: !0,
                    ...e
                })
            }

            function l() {
                r(822284).jz.update(e => ({ ...e,
                    open: !1
                }))
            }

            function p(e) {
                r(986939).A.isMobile || r(822284).ZJ.setState({
                    open: !0,
                    ...e
                })
            }

            function f() {
                r(822284).ZJ.update(e => ({ ...e,
                    open: !1
                }))
            }
            async function g(e) {
                var t;
                let {
                    billingData: n,
                    environment: o,
                    spaceStore: a,
                    from: i,
                    memberCount: s,
                    prices: u,
                    offerToApply: c,
                    autoConvert: d,
                    captchaToken: l,
                    sessionId: p
                } = e;
                if (!a || !i || !n || void 0 === s || !c) return {
                    success: !1,
                    error: "Invalid arguments"
                };
                let f = e.nowForTesting ? ? r(906745).DateTime.now(),
                    g = r(653828).H.state.selectedCurrencyCode ? ? "USD",
                    m = (0, r(982473).vk)(u, {
                        product: "business",
                        interval: "month",
                        currency: g
                    }),
                    _ = (0, r(982473).vH)({
                        items: (null == (t = n.subscription) ? void 0 : t.items) ? ? [],
                        trialEnd: f.plus({
                            days: (0, r(337592).s1)(c)
                        })
                    }, {
                        price: m,
                        quantity: s
                    }),
                    b = c.campaign;
                try {
                    return await (0, r(129909).n)({
                        environment: o,
                        spaceStore: a,
                        from: i,
                        desiredState: _,
                        trialData: {
                            id: b,
                            from: i,
                            autoConvert: d
                        },
                        captchaToken: l,
                        sessionId: p
                    }), {
                        success: !0,
                        error: void 0
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: e instanceof Error ? e.message : void 0
                    }
                }
            }
            async function m(e) {
                let {
                    billingData: t,
                    environment: n,
                    spaceStore: o
                } = e, a = o.getSpaceId();
                if (!t || !(0, r(192159).TB)(t) || !o.canAdmin()) return;
                let i = await n.api.callCellCompatibleApi({
                    eventName: "getCustomerOffersReceived",
                    environment: n,
                    data: {
                        spaceId: a
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: a
                    }
                });
                if ("failed" !== i.type) return (0, r(278662).Jd)(i.data)
            }

            function _(e) {
                var t, n;
                let o, {
                    billingData: a,
                    businessTrialOffer: i,
                    modalLastShownAt: s,
                    modalShownTimes: u
                } = e;
                if (!a) return !1;
                let c = (0, r(192159).DS)(a);
                if (t = s, n = c, t && r(906745).DateTime.fromMillis(t).startOf("day").equals(n.startOf("day")) || "business" === (0, r(192159).AW)(a) || "enterprise" === (0, r(192159).AW)(a) || !i || (0, r(44027).od)({
                        businessTrialOffer: i,
                        billingTime: c,
                        modalLastShownAt: s,
                        modalShownTimes: u
                    }) || (0, r(44027).z2)({
                        billingData: a
                    }) || void 0 === i || (0, r(875472).nb)(i)) return !1;
                let d = i.offer.duration.days;
                if (void 0 === d) return !1;
                try {
                    o = (0, r(44027).rE)(d)
                } catch {
                    o = void 0
                }
                return void 0 !== o && (0, r(383378).tz)(i, o, c) || (0, r(44027).XF)(i, c) || (0, r(383378).V9)(i, c)
            }
            r.r(t), r.d(t, {
                closeBusinessTrialCCUpfrontModal: () => f,
                closeBusinessTrialEndingModal: () => s,
                closeBusinessTrialExplorePlanModal: () => l,
                closeBusinessTrialLossAversionModal: () => c,
                closeBusinessTrialStartModal: () => o,
                createBusinessTrial: () => g,
                determineShouldShowTrialEndingModal: () => _,
                getBusinessTrialUsingOffersReceived: () => m,
                openBusinessTrialCCUpfrontModal: () => p,
                openBusinessTrialEndingModal: () => a,
                openBusinessTrialExplorePlanModal: () => d,
                openBusinessTrialLossAversionModal: () => u,
                openBusinessTrialStartModal: () => n,
                updateBusinessTrialEndingModalState: () => i
            }), r(16280)
        },
        336613: (e, t, r) => {
            let n, o;

            function a(e) {
                n = e
            }

            function i(e) {
                o = e
            }

            function s() {
                if (!n) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return n
            }
            async function u() {
                if (!o) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return o()
            }
            r.d(t, {
                N7: () => u,
                NK: () => a,
                NS: () => i,
                XC: () => s
            }), r(16280)
        },
        337592: (e, t, r) => {
            r.d(t, {
                Ki: () => o,
                d1: () => a,
                j8: () => u,
                s1: () => s,
                yX: () => i
            }), r(898992), r(737550), r(296540);
            var n = r(474848);

            function o(e) {
                if (!e) return;
                let t = (0, r(875472).b_)(e);
                return (0, n.jsx)(r(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, n.jsx)(r(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function a(e, t, n, o) {
                return o && (0, r(90119).FV)(o, t) ? o : n && e === t && (0, r(90119).FV)(n.campaign, e) ? n.campaign : void 0
            }

            function i(e, t, n) {
                let o, a;
                if (e && (0, r(875472).rM)(e) && (o = (0, r(90119).MN)(e.offer.campaign, t), a = !!n && (0, r(90119).sZ)(e.offer.campaign, n), o && a)) return (0, r(875472).kd)(e)
            }

            function s(e) {
                return (0, r(875472).b_)(e).days
            }
            async function u({
                billingData: e,
                environment: t,
                sidebarSpaceStore: n,
                offerCampaign: o
            }) {
                return !n.id || !e || !n.getSetting("reach_block_limit_time") || (0, r(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await r(617995).I.awaitData(t, {
                    offerCampaign: o,
                    spaceId: n.id
                }))
            }
        },
        383378: (e, t, r) => {
            r.d(t, {
                $G: () => o,
                Hj: () => a,
                Nh: () => d,
                V9: () => s,
                WL: () => n,
                cv: () => c,
                nS: () => i,
                tz: () => u
            }), r(581454);
            let n = 30,
                o = 5;

            function a(e, t) {
                var r;
                return (null == (r = e.subscription) ? void 0 : r.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function i(e, t, n) {
                return e ? (0, r(850640).W_)(e.toMillis(), n ? ? "long", t) : void 0
            }

            function s(e, t) {
                let n = r(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? r(906745).DateTime.now()) > n
            }

            function u(e, t, n) {
                let o = r(906745).DateTime.fromMillis(e.endDateMs),
                    a = n ? ? r(906745).DateTime.now();
                return a < o && o.diff(a).as("days") <= t
            }

            function c(e) {
                let {
                    prices: t,
                    products: o,
                    interval: a,
                    memberCount: i,
                    currency: s = "USD",
                    trialLengthDays: u = n,
                    trialStartDate: c = r(906745).DateTime.now()
                } = e;
                return {
                    items: o.map(e => ({
                        price: (0, r(982473).vk)(t, {
                            product: e,
                            interval: a,
                            currency: s
                        }),
                        quantity: i
                    })),
                    trialEnd: c.plus({
                        days: u
                    })
                }
            }

            function d(e) {
                return (0, r(722371).Xk)(e, "plus") && (0, r(722371).Xk)(e, "ai")
            }
        },
        435276: (e, t, r) => {
            r.d(t, {
                V: () => n
            });

            function n(e) {
                let t = (0, r(533992).v3)(),
                    n = (0, r(972740).L)(),
                    {
                        spaceId: o,
                        spaceName: a
                    } = (0, r(682985).K8)(() => n ? {
                        spaceId: n.getSpaceId(),
                        spaceName: (0, r(742197).G)(t, n)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, n]),
                    [{
                        value: i,
                        status: s
                    }] = (0, r(97668).Yb)(async () => {
                        if (!o) return;
                        let n = await (0, r(124094).E)(t, o, e);
                        if (n) return a && (0, r(124094).Z)({
                            environment: t,
                            spaceName: a,
                            campaign: n,
                            entrypoint: e
                        }), n
                    }, [t, o, a, e]);
                return {
                    campaign: i,
                    loading: "pending" === s || "idle" === s
                }
            }
        },
        451963: (e, t, r) => {
            r.d(t, {
                f: () => n
            });

            function n(e) {
                let {
                    spaceId: t,
                    userId: n,
                    enforceIdsCheck: o,
                    debugFrom: a
                } = e;
                if (!t || !n || !r(105692).subscriptionDataStoreInstance.userId || !r(105692).subscriptionDataStoreInstance.spaceId) {
                    if (o) return;
                    return r(105692).subscriptionDataStoreInstance
                }
                if (r(105692).subscriptionDataStoreInstance.spaceId === t || (r(773352).rateLimitedLog({
                        level: "warning",
                        from: "getSubscriptionDataStore",
                        type: o ? "rejectedCrossSpaceSubscriptionDataStoreRead" : "allowedCrossSpaceSubscriptionDataStoreRead",
                        spaceId: t,
                        data: {
                            userId: n,
                            miscDataToConvertToString: {
                                debugFrom: a,
                                enforceIdsCheck: o,
                                requestedUserId: n,
                                requestedSpaceId: t,
                                cachedSubscriptionDataUserId: r(105692).subscriptionDataStoreInstance.userId,
                                cachedSubscriptionDataSpaceId: r(105692).subscriptionDataStoreInstance.spaceId
                            }
                        }
                    }), !o)) {
                    if (r(105692).subscriptionDataStoreInstance.userId === n || (r(773352).rateLimitedLog({
                            level: "warning",
                            from: "getSubscriptionDataStore",
                            type: o ? "rejectedCrossUserSubscriptionDataStoreRead" : "allowedCrossUserSubscriptionDataStoreRead",
                            spaceId: t,
                            data: {
                                userId: n,
                                miscDataToConvertToString: {
                                    debugFrom: a,
                                    enforceIdsCheck: o,
                                    requestedUserId: n,
                                    requestedSpaceId: t,
                                    cachedSubscriptionDataUserId: r(105692).subscriptionDataStoreInstance.userId,
                                    cachedSubscriptionDataSpaceId: r(105692).subscriptionDataStoreInstance.spaceId
                                }
                            }
                        }), !o)) return r(105692).subscriptionDataStoreInstance
                }
            }
        },
        555676: (e, t, r) => {
            let n;

            function o(e) {
                n = e
            }

            function a() {
                return n
            }
            r.d(t, {
                w: () => o,
                x: () => a
            })
        },
        822284: (e, t, r) => {
            r.d(t, {
                BS: () => a,
                BusinessTrialEndingModalStore: () => o,
                HL: () => n,
                ZJ: () => s,
                jz: () => i
            });
            let n = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    potentialCampaigns: []
                }, {
                    name: "BusinessTrialStartModalStore"
                }),
                o = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    recentPageStores: [],
                    verifiedPageStores: [],
                    teamStores: [],
                    workspaceUserStores: [],
                    connectedApps: [],
                    workflowStores: [],
                    numAiMeetingMinutes: 0,
                    modalState: "initial"
                }, {
                    name: "BusinessTrialEndingModalStore"
                }),
                a = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: [],
                    onSecondaryButtonClick: void 0
                }, {
                    name: "BusinessTrialLossAversionModalStore"
                }),
                i = r(546605).Store.createValue({
                    open: !1,
                    connectedApps: [],
                    teamStores: [],
                    pageStores: []
                }, {
                    name: "BusinessTrialExplorePlanModalStore"
                }),
                s = r(546605).Store.createValue({
                    open: !1,
                    openedFrom: void 0,
                    trialCampaign: void 0,
                    showBillingIntervalSelect: !1
                }, {
                    name: "BusinessTrialCCUpfrontModalStore"
                })
        },
        840752: (e, t, r) => {
            r.d(t, {
                M: () => n
            });

            function n(e) {
                let {
                    spaceId: t,
                    userId: n,
                    enforceIdsCheck: o,
                    debugFrom: a
                } = e, i = (0, r(451963).f)({
                    spaceId: t,
                    userId: n,
                    enforceIdsCheck: o,
                    debugFrom: a
                });
                return null == i ? void 0 : i.state
            }
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
                    o = (0, r(682985).K8)(() => r(375592).T.getData(n, {
                        userId: n.currentUser.id || ""
                    }), [n]);
                return (0, r(682985).K8)(() => (0, r(407998).V)({
                    environment: n,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: o
                }), [n, e, t, o])
            }
        },
        889503: (e, t, r) => {
            r.r(t), r.d(t, {
                getStripe: () => a,
                getStripeAppearance: () => c,
                optionalPaymentMethodIdGivenPaymentData: () => l,
                stripeElementLocaleGivenNotionLocale: () => i,
                translateStripeError: () => u,
                useElementsOptions: () => s
            });
            var n = r(296540);
            let o = null;
            async function a() {
                return o || (r(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), o = (0, r(37458).loadStripe)(r(986939).A.stripe.key)), o
            }

            function i(e) {
                switch (e) {
                    case "en-US":
                        return "en";
                    case "ko-KR":
                        return "ko";
                    case "ja-JP":
                        return "ja";
                    case "fr-FR":
                        return "fr-FR";
                    case "de-DE":
                        return "de";
                    case "es-ES":
                        return "es-ES";
                    case "es-LA":
                        return "es-419";
                    case "pt-BR":
                        return "pt-BR";
                    case "zh-CN":
                        return "zh";
                    case "zh-TW":
                        return "zh-TW";
                    case "da-DK":
                        return "da";
                    case "nl-NL":
                        return "nl";
                    case "fi-FI":
                        return "fi";
                    case "nb-NO":
                        return "nb";
                    case "sv-SE":
                        return "sv";
                    default:
                        return "auto"
                }
            }

            function s(e) {
                let t = (0, r(960253).e)(),
                    o = (0, r(632079).O4)({
                        theme: t
                    }),
                    {
                        type: a
                    } = e,
                    s = "setup" === a || "subscription" === a ? e.currency : void 0,
                    u = "subscription" === a ? e.amount : void 0,
                    d = (0, r(682985).K8)(() => {
                        var e;
                        return (null == (e = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || r(599412).q
                    }, []);
                return (0, n.useMemo)(() => {
                    let e = {
                            appearance: c(o, t),
                            locale: i(d)
                        },
                        n = {
                            paymentMethodTypes: (0, r(56281).VV)({
                                currency: s
                            })
                        };
                    switch (a) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...n,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...n,
                                amount: u,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, r(722371).HB)(a)
                    }
                }, [o, t, d, s, a, u])
            }

            function u(e, t) {
                if (!t.code) return t.message || "";
                switch (t.code) {
                    case "invalid_expiry_year_past":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidExpiryYear.error.message",
                            defaultMessage: "Your card's expiration year is in the past."
                        });
                    case "invalid_cvc":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidCVC.error.message",
                            defaultMessage: "Your card's security code is invalid."
                        });
                    case "invalid_number":
                        return e.formatMessage({
                            id: "stripeHelpers.invalidNumber.error.message",
                            defaultMessage: "Your card number is not a valid credit card number."
                        });
                    case "card_declined":
                        var r = e,
                            n = t.decline_code;
                        switch (n) {
                            case "expired_card":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.expiredCard",
                                    defaultMessage: "Your card was declined because it is an expired card."
                                });
                            case "incorrect_number":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.incorrectNumber",
                                    defaultMessage: "Your card was declined because you input an incorrect number."
                                });
                            case "insufficient_funds":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.declinedFunds",
                                    defaultMessage: "Your card was declined because of insufficient funds."
                                });
                            case "invalid_cvc":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidCvc",
                                    defaultMessage: "Your card was declined because you input an invalid CVC number"
                                });
                            case "invalid_amount":
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidAmount",
                                    defaultMessage: "Your card was declined because payment amount exceeds the amount that's allowed."
                                });
                            default:
                                return r.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message",
                                    defaultMessage: "Your card was declined."
                                })
                        }
                    default:
                        return t.message || ""
                }
            }

            function c(e, t) {
                let n = d(e.text.primary),
                    o = d(e.text.secondary),
                    a = d(e.text.tertiary),
                    i = d(e.red.text.accentPrimary),
                    s = d(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: n,
                        colorPrimaryText: n,
                        colorText: n,
                        colorTextSecondary: o,
                        colorTextPlaceholder: a,
                        colorIcon: n,
                        colorIconCheckmark: d(e.icon.inversePrimary),
                        colorDanger: i,
                        colorBackground: d(e.whiteButtonBackground),
                        colorIconTabHover: n,
                        colorIconTabSelected: s,
                        colorIconChevronDown: n,
                        fontFamily: r(699422).Tf.sans,
                        fontWeightLight: `${r(699422).Wy.light}`,
                        fontWeightNormal: `${r(699422).Wy.regular}`,
                        fontWeightMedium: `${r(699422).Wy.medium}`,
                        fontWeightBold: `${r(699422).Wy.medium}`,
                        fontSizeBase: "14px",
                        fontSizeSm: "12px",
                        colorLogo: t,
                        colorLogoBlock: t,
                        colorLogoTab: t,
                        colorLogoTabSelected: t,
                        borderRadius: "6px"
                    },
                    rules: {
                        ".Tab": {
                            padding: "10px 16px 10px 10px",
                            fontSize: "13px",
                            fontWeight: "500",
                            lineHeight: "16px",
                            color: n,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            backgroundColor: e.whiteButtonBackground
                        },
                        ".Tab:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".Tab:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Tab--selected, .Tab--selected:active": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            color: n,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: n
                        },
                        ".Tab--selected:focus": {
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".Input": {
                            fontSize: "14px",
                            lineHeight: "18px",
                            padding: "7px 8px",
                            backgroundColor: e.background.secondary,
                            boxShadow: `0 0 0 1px ${e.border.primary}`,
                            border: "none",
                            color: n
                        },
                        ".Input--invalid": {
                            color: n,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: n,
                            boxShadow: e.inputBlueFocusRing
                        },
                        ".Label": {
                            fontSize: "12px",
                            lineHeight: "15px",
                            fontWeight: "500",
                            color: o,
                            marginBottom: "8px"
                        },
                        ".Error": {
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "15px",
                            color: i
                        },
                        ".CodeInput": {
                            backgroundColor: e.background.secondary,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem, .PickerItem--selected": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            color: n
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: n,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--selected:hover": {
                            boxShadow: "none"
                        },
                        ".PickerItem--new": {
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "18px",
                            color: n
                        },
                        ".PickerItem--highlight, .PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.blue.border.accentPrimary}`,
                            boxShadow: "none"
                        },
                        ".PickerItem--highlight:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground
                        },
                        ".TermsText": {
                            color: o,
                            fontSize: "10px",
                            fontWeight: "400",
                            lineHeight: "13px",
                            letterSpacing: "0.12px"
                        },
                        ".CheckboxLabel": {
                            color: n,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: n,
                            fontWeight: "400",
                            padding: "4px 8px"
                        },
                        ".Action:hover, .MenuAction:hover": {
                            backgroundColor: e.buttonHoveredBackground
                        },
                        ".BlockAction:focus, .CodeInput:focus, .Input:focus,.CheckboxInput:focus, .PickerItem:focus, .PickerAction:focus,.MenuAction:focus, .Action:focus, .SecondaryLink:focus": {
                            boxShadow: e.buttonBlueFocusRing
                        },
                        ".MenuIcon, .MenuIcon:hover": {
                            fill: n
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: n
                        }
                    }
                }
            }

            function d(e) {
                let [t, r, n, o] = e.match(/[\d.]+/g) ? ? [];
                return t && r && n && o && 1 === parseInt(o) ? `rgb(${t}, ${r}, ${n})` : e
            }

            function l(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        }
    }
]);