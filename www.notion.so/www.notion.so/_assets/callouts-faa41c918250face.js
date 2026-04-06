"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [46352, 74688, 92754], {
        44027: (e, t, s) => {
            function r(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: r,
                    modalLastShownAt: n,
                    modalShownTimes: i
                } = e;
                return !!(0, s(383378).V9)(t, r) && void 0 !== n && void 0 !== i && (!(n > 0) || !(r.diff(s(906745).DateTime.fromMillis(n), "days").days >= s(118999).ls)) && (i ? ? 0) >= s(118999).TY
            }

            function n(e, t = (0, s(192159).DS)(e)) {
                if (!e) return;
                let r = (0, s(192159).i5)(e);
                if (r) return Math.ceil(r.toUTC().diff(t.toUTC(), "days").days)
            }

            function i(e, t) {
                let r = s(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? s(906745).DateTime.now()).toUTC().hasSame(r, "day")
            }

            function a(e) {
                let t = (0, s(278662).Jd)(e);
                if (t) return (0, s(875472).Vm)(t)
            }

            function u(e) {
                let t = (0, s(278662).Jd)(e);
                if (t) return (0, s(875472).kd)(t)
            }

            function o(e) {
                let t = s(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function l(e) {
                return Math.round(e / 30)
            }

            function _({
                billingData: e
            }) {
                if (!(0, s(192159).TB)(e)) return !1;
                if ((0, s(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, s(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function m(e) {
                return (0, s(192159).oD)(e) && (0, s(717274).pX)()
            }

            function p(e) {
                return (0, s(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function c(e) {
                return (0, s(722371).Xk)(s(90416).K_, e)
            }

            function f(e) {
                return (0, s(722371).Xk)([...s(994234).iE, ...s(994234).wW, ...s(994234).Fh], e)
            }

            function d(e) {
                let {
                    openedFrom: t,
                    campaign: s,
                    isCustomAgentsGateEnabled: r
                } = e;
                return r && (c(t) || "deeplink" === t && f(s))
            }
            s.d(t, {
                F$: () => d,
                IU: () => m,
                J: () => a,
                SF: () => c,
                Tr: () => l,
                UP: () => n,
                XF: () => i,
                cn: () => u,
                dt: () => f,
                od: () => r,
                rE: () => o,
                tY: () => p,
                z2: () => _
            }), s(16280)
        },
        75170: (e, t, s) => {
            s.d(t, {
                A: () => u
            });
            var r = () => s(546605);
            let n = [];
            class i extends r().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: n,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let a = new i;
            (0, s(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", a);
            let u = a
        },
        85071: (e, t, s) => {
            s.r(t), s.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => n
            }), s(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                n = (0, s(104509).wt)("integration", r, "default")
        },
        90119: (e, t, s) => {
            function r(e) {
                let {
                    campaign: t,
                    products: s,
                    billingInterval: r
                } = e;
                return !!t && a(t, s) && o(t, r)
            }

            function n(e, t) {
                return r({
                    campaign: e,
                    products: (0, s(958059).Fe)(t),
                    billingInterval: (0, s(958059).yw)(t)
                })
            }

            function i(e, t, r) {
                if (e && (0, s(875472).rM)(e, r) && n(e.offer.campaign, t)) return e.offer
            }

            function a(e, t) {
                var r;
                if (!e) return !1;
                let n = null == (r = s(361200).offerEligibilityMap[e]) ? void 0 : r.productsOfferCanApplyTo;
                return !!(!n || (0, s(528815).xw)(n, t))
            }

            function u(e, t) {
                return !!e && a(e, [t])
            }

            function o(e, t) {
                return (0, s(528815).mQ)({
                    offerEligibility: s(361200).offerEligibilityMap[e],
                    billingInterval: t
                })
            }

            function l(e) {
                let {
                    offer: t,
                    currentProducts: n,
                    billingInterval: i,
                    potentialDiscountedProduct: a
                } = e;
                if (!t || !r({
                        campaign: t.campaign,
                        products: n,
                        billingInterval: i
                    })) return !1;
                let u = function(e) {
                    if (e) return s(361200).offerEligibilityMap[e].productsOfferCanApplyTo
                }(t.campaign);
                return !!u && (0, s(528815).Z6)(u, a)
            }

            function _(e) {
                return "claimed" === e.type
            }
            s.d(t, {
                FV: () => u,
                GK: () => _,
                MN: () => a,
                QK: () => l,
                Uh: () => r,
                d$: () => n,
                ex: () => i,
                sZ: () => o
            }), s(898992), s(354520)
        },
        90416: (e, t, s) => {
            s.d(t, {
                CT: () => a,
                K_: () => o,
                Mi: () => r,
                uv: () => i,
                zL: () => u,
                zj: () => n
            });
            let r = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                n = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                i = ["ai_research_mode"],
                a = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                u = ["ai_agent"],
                o = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        118999: (e, t, s) => {
            s.d(t, {
                Hb: () => f,
                Hu: () => _,
                TY: () => r,
                Tu: () => a,
                U4: () => c,
                U7: () => d,
                WO: () => o,
                XX: () => p,
                c4: () => l,
                ef: () => i,
                ej: () => m,
                hI: () => u,
                ls: () => n
            });
            let r = 2,
                n = 30,
                i = 30,
                a = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                u = 332,
                o = 852,
                l = 800,
                _ = 407,
                m = 24,
                p = 400,
                c = 450,
                f = 524,
                d = 7
        },
        124094: (e, t, s) => {
            s.d(t, {
                E: () => o,
                Z: () => l
            });
            var r = () => s(889089);
            let n = {
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
            var i = () => s(617995),
                a = () => s(705820);
            async function u(e) {
                var t;
                let {
                    campaign: r,
                    eligibleCampaigns: n
                } = e;
                if (!n.includes(r)) return !1;
                await (0, s(591083).yc)().catch(() => void 0);
                let i = (0, s(591083).v7)(),
                    a = null == i || null == (t = i[r]) ? void 0 : t.statsigDetails;
                return !!a && (await s(218744).default.waitUntilStatsigReadyAsync(), (0, s(134213).l)({
                    experimentService: s(218744).default,
                    statsigDetails: a
                }).isEligible)
            }
            async function o(e, t, s) {
                let o, l = function(e) {
                    if (n.hasOwnProperty(e)) return n[e]
                }(s);
                if (l)
                    for (let s of l) {
                        if ((0, r().w)(s)) {
                            if (o || (o = await a().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await u({
                                    campaign: s,
                                    eligibleCampaigns: o
                                })) return s;
                            continue
                        }
                        let n = await i().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: s
                        });
                        if ((null == n ? void 0 : n.campaign) === s) return s
                    }
            }

            function l({
                environment: e,
                spaceName: t,
                campaign: r,
                entrypoint: n
            }) {
                if (t) switch (r) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, s(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: r,
                                    entrypoint: n
                                }
                            }
                        })
                }
            }
        },
        149402: (e, t, s) => {
            s.d(t, {
                w: () => i
            });
            var r = () => s(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                setCampaign(e) {
                    this.setState({ ...this.state,
                        campaign: e
                    })
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
                close() {
                    this.setState({
                        open: !1
                    })
                }
            }
            let i = new n
        },
        187649: (e, t, s) => {
            let r, n;

            function i(e) {
                r = e
            }
            async function a() {
                return n || (r ? n = await r() : void 0)
            }
            s.d(t, {
                Q: () => i,
                z: () => a
            })
        },
        219988: (e, t, s) => {
            s.d(t, {
                A: () => i
            });
            var r = () => s(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        uploadingProfilePhoto: !1,
                        name: "",
                        startDayOfWeek: (0, s(25825).Lm)(),
                        accountSettings: {
                            hasPassword: !1,
                            canConfigurePassword: !1,
                            isSamlEnforced: !1,
                            mfaStatus: "loading",
                            numMfaSettings: 0,
                            regenerateBackupCodes: !1,
                            hasPasskeys: !1,
                            error: void 0
                        }
                    }
                }
                getValueForUser(e, t, r) {
                    if (e.isDefined()) {
                        let n = e.getFullName(r),
                            i = e.getProfilePhoto(),
                            a = t.getSettings();
                        return { ...this.state,
                            uploadingProfilePhoto: !1,
                            profilePhoto: i,
                            name: n || "",
                            startDayOfWeek: (null == a ? void 0 : a.start_day_of_week) === void 0 ? (0, s(25825).Lm)() : null == a ? void 0 : a.start_day_of_week
                        }
                    }
                }
            }
            let i = n
        },
        236278: (e, t, s) => {
            s.d(t, {
                $: () => r
            });

            function r(e, t, r) {
                let n = {
                    id: "",
                    type: "static",
                    key: t,
                    category: s(292609).lU[t].category,
                    props: {}
                };
                return (0, s(505483).t)(e, n, r)
            }
        },
        330602: (e, t, s) => {
            s.d(t, {
                A: () => r
            });
            let r = s(546605).Store.createValue(!1)
        },
        337592: (e, t, s) => {
            s.d(t, {
                Ki: () => n,
                d1: () => i,
                j8: () => o,
                s1: () => u,
                yX: () => a
            }), s(898992), s(737550), s(296540);
            var r = s(474848);

            function n(e) {
                if (!e) return;
                let t = (0, s(875472).b_)(e);
                return (0, r.jsx)(s(109939).sA, {
                    id: "coupon.duration.months",
                    defaultMessage: "{formattedMonths} months",
                    values: {
                        formattedMonths: (0, r.jsx)(s(109939).Gr, {
                            value: t.months
                        })
                    }
                })
            }

            function i(e, t, r, n) {
                return n && (0, s(90119).FV)(n, t) ? n : r && e === t && (0, s(90119).FV)(r.campaign, e) ? r.campaign : void 0
            }

            function a(e, t, r) {
                let n, i;
                if (e && (0, s(875472).rM)(e) && (n = (0, s(90119).MN)(e.offer.campaign, t), i = !!r && (0, s(90119).sZ)(e.offer.campaign, r), n && i)) return (0, s(875472).kd)(e)
            }

            function u(e) {
                return (0, s(875472).b_)(e).days
            }
            async function o({
                billingData: e,
                environment: t,
                sidebarSpaceStore: r,
                offerCampaign: n
            }) {
                return !r.id || !e || !r.getSetting("reach_block_limit_time") || (0, s(192159).Gm)(e) ? Promise.resolve(!1) : Promise.resolve(!!await s(617995).I.awaitData(t, {
                    offerCampaign: n,
                    spaceId: r.id
                }))
            }
        },
        348295: (e, t, s) => {
            s.d(t, {
                $: () => r
            });
            let r = s(381453).Bj(e => new(s(345426)).ComputedStore(() => {
                let t = s(728372).AppStoreMainEditorCurrentBlockStore.state,
                    r = t && t.isCollectionView(),
                    n = (0, s(548124).getChatPanelState)(e),
                    i = (null == n ? void 0 : n.isOpen) ? ? !1;
                return s(200083).A.state.isKeyboardMode && !s(330602).A.state && !s(11446).A.isActive() && !r && !s(930179).default.state.open && !s(847591).Ay.state.open && !(0, s(659262).y)() && 0 === s(465361).A.state.banners.length && !s(585823).gZ.state && !s(75170).A.state.open && !i
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        350130: (e, t, s) => {
            s.d(t, {
                X: () => r
            });
            async function r(e, t) {
                let r = s(348939).A.getConfig(t) || {};
                if (r.message) {
                    let t = r.message;
                    await e.api.callApi({
                        eventName: "updateInAppMessage",
                        environment: e,
                        data: {
                            messageId: t.id,
                            state: "skipped"
                        }
                    })
                }
            }
        },
        357709: (e, t, s) => {
            function r(e, t) {
                let r = (0, s(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, s(462391).t9)(r)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }

            function n(e, t) {
                let r = (0, s(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, s(462391).t9)(r)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                }), t.callout_key && s(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function i(e, t) {
                let r = (0, s(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, s(462391).t9)(r)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }

            function a(e, t) {
                let r = (0, s(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, s(462391).t9)(r)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }

            function u(e, t) {
                let {
                    eligible_callouts: r,
                    required_arg_timeout: n,
                    required_args_run_duration: i,
                    eligibility_timeouts: a,
                    blocklist: u
                } = t;
                (0, s(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: r,
                            required_arg_timeout: n,
                            required_args_run_duration: i,
                            eligibility_timeouts: a,
                            blocklist: u
                        }
                    }
                })
            }

            function o(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function _(e, t) {
                let r = (0, s(462391).h2)(t.callout_key);
                r && (t.placement_key = (0, s(462391).t9)(r)), (0, s(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: r ? "static" : "cio"
                        }
                    }
                })
            }
            s.d(t, {
                Ak: () => _,
                Cu: () => l,
                DL: () => r,
                Jb: () => a,
                Sq: () => i,
                Y5: () => n,
                gc: () => o,
                wo: () => u
            })
        },
        361200: (e, t, s) => {
            s.r(t), s.d(t, {
                freeAndNoAddOns: () => u,
                intervalSelectEligibilityMap: () => l,
                offerEligibilityMap: () => _
            });
            let r = ["BR", "IN", "ID", "MX", "PH", "AR", "CO", "TR", "PE", "UA", "TH", "CL", "MY", "EG", "ZA", "NG", "PK", "KZ", "MA", "EC", "BD", "VE", "BY"];

            function n(...e) {
                return {
                    type: "and",
                    products: e
                }
            }

            function i(...e) {
                return {
                    type: "or",
                    products: e
                }
            }

            function a(e) {
                return {
                    type: "not",
                    product: e
                }
            }
            let u = a(i(...s(645040).bQ));

            function o(e) {
                return {
                    minMemberCount: 1,
                    maxMemberCount: 10,
                    couponRefreshDays: 180,
                    trialRefreshDays: 14,
                    productRequirement: e,
                    productsOfferCanApplyTo: e,
                    billingIntervals: ["month"]
                }
            }
            let l = {
                    block_limit_interval: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "annual_block_limit_offer",
                            groups: ["month_offer", "multi_offer"]
                        }
                    },
                    aimn: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "aimn_offer",
                            groups: ["on", "exploding"]
                        }
                    }
                },
                _ = { ...l,
                    team_three_months: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: "plus",
                        productsOfferCanApplyTo: "plus",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    team_annual: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["year"],
                        productRequirement: "plus",
                        productsOfferCanApplyTo: "plus",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_three_months: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: "business",
                        productsOfferCanApplyTo: "business",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_annual: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["year"],
                        productRequirement: "business",
                        productsOfferCanApplyTo: "business",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    enterprise_three_months: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: "enterprise",
                        productsOfferCanApplyTo: "enterprise",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    enterprise_annual: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["year"],
                        productRequirement: "enterprise",
                        productsOfferCanApplyTo: "enterprise",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    ai_fifty_percent_upgrade: {
                        minMemberCount: 1,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month", "year"],
                        productRequirement: "student",
                        productsOfferCanApplyTo: "ai",
                        requiresStudentDomains: !0,
                        statsigDetails: {
                            statsigType: "gate",
                            id: "ai_fifty_percent_upgrade_gate"
                        }
                    },
                    ai_fifty_percent_downgrade: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: n("ai", a(i("business", "enterprise"))),
                        productsOfferCanApplyTo: "ai",
                        requiredPaymentHistory: "has_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    resurrection_offer: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: u,
                        productsOfferCanApplyTo: "plus",
                        lastSubscription: {
                            start: s(906745).dw.fromObject({
                                days: 3
                            }),
                            end: s(906745).dw.fromObject({
                                days: 60
                            })
                        },
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_resurrection_offer: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        lastSubscription: {
                            start: s(906745).dw.fromObject({
                                days: 3
                            }),
                            end: s(906745).dw.fromObject({
                                days: 60
                            }),
                            products: ["business"]
                        },
                        statsigDetails: {
                            id: "business_resurrection_offer",
                            groups: ["on"],
                            statsigType: "experiment"
                        }
                    },
                    business_resurrection_offer_50pct_1m: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        lastSubscription: {
                            start: s(906745).dw.fromObject({
                                days: 3
                            }),
                            end: s(906745).dw.fromObject({
                                days: 60
                            }),
                            products: ["business"]
                        },
                        statsigDetails: {
                            id: "business_resurrection_offer_50pct_1m",
                            groups: ["on"],
                            statsigType: "experiment"
                        }
                    },
                    personal: {
                        minMemberCount: 1,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        billingIntervals: ["month"],
                        productRequirement: "personal",
                        productsOfferCanApplyTo: "personal",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    lic_25: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 1,
                        billingIntervals: ["month", "year"],
                        productRequirement: n("free", a("ai")),
                        productsOfferCanApplyTo: i("plus", "business"),
                        eligibleCountryCodes: r,
                        requiresNonSalesEligibleDomains: !0,
                        statsigDetails: {
                            id: "lic",
                            groups: ["lic_25"],
                            statsigType: "experiment"
                        }
                    },
                    lic_50: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 1,
                        billingIntervals: ["month", "year"],
                        productRequirement: n("free", a("ai")),
                        productsOfferCanApplyTo: i("plus", "business"),
                        eligibleCountryCodes: r,
                        requiresNonSalesEligibleDomains: !0,
                        statsigDetails: {
                            id: "lic",
                            groups: ["lic_50"],
                            statsigType: "experiment"
                        }
                    },
                    new_year_2025: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 331,
                        trialRefreshDays: 1,
                        billingIntervals: ["month"],
                        productRequirement: n("free", a("ai"), a("sites_custom_hostnames")),
                        productsOfferCanApplyTo: "ai",
                        requiresNonSalesEligibleDomains: !0,
                        statsigDetails: {
                            id: "new_year_2025",
                            groups: ["on"],
                            statsigType: "experiment"
                        }
                    },
                    biz_upgrade_2025_8: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 30,
                        billingIntervals: ["month"],
                        productRequirement: n("plus", "ai"),
                        productsOfferCanApplyTo: "business",
                        requiresNonSalesEligibleDomains: !0,
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    biz_upgrade_2025_10: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 30,
                        billingIntervals: ["year"],
                        productRequirement: n("plus", "ai"),
                        productsOfferCanApplyTo: "business",
                        requiresNonSalesEligibleDomains: !0,
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    referral_50: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 0,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            id: "referral_program",
                            statsigType: "experiment",
                            groups: ["on"]
                        }
                    },
                    linkedin_perk_2025_july: {
                        minMemberCount: 1,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: i("business", n("plus", "ai")),
                        billingIntervals: ["month"],
                        requiresOfferCode: !0,
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    linkedin_perk_2025_fall: {
                        minMemberCount: 1,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: i("business", n("plus", "ai")),
                        billingIntervals: ["month"],
                        requiresOfferCode: !0,
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    youtube_creators_2025_fall: {
                        minMemberCount: 1,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: i("business", n("plus", "ai")),
                        billingIntervals: ["month"],
                        requiresOfferCode: !0,
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    globis_offer: {
                        minMemberCount: 1,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        billingIntervals: ["month"],
                        requiresOfferCode: !0,
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    default: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: i("plus", "business"),
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    mm_ent: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    perfmark: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    reverse: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    reverse_mm_ent: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    enterprise: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "plus",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_cc: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    stacked_business_trial: {
                        minMemberCount: 10,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        billingIntervals: ["month"],
                        productRequirement: n("plus", a("ai")),
                        productsOfferCanApplyTo: "business",
                        requiresProfessionalEmailDomains: !0,
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    samsung_tablet_preload_2025: {
                        minMemberCount: 0,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: n("plus", "ai"),
                        billingIntervals: ["month"],
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "samsung_tablet_preload_2025_plus_ai_enabled"
                        }
                    },
                    samsung_tablet_preload_2025_business: {
                        minMemberCount: 0,
                        maxMemberCount: 1,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        billingIntervals: ["month"],
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_12m_lenny_business: {
                        minMemberCount: 1,
                        maxMemberCount: 9,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    lenny_business_12m_2026: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        billingIntervals: ["month"],
                        requiresOfferCode: !0,
                        requiredPaymentHistory: "never_paid",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_1m_startups_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_3m_startups_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_6m_startups_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_12m_startups_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_1m_smb_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_3m_smb_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_1m_commercial_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_1m_midmarket_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_1m_enterprise_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    creator_6m: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    creator_12m: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    admin_6m_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_1m: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 0,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    referral_biz_trial: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 365,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    expansion_offer: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 365,
                        trialRefreshDays: 0,
                        productRequirement: "free",
                        billingIntervals: ["month"],
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "expansion_offer",
                            groups: ["on"]
                        }
                    },
                    business_reverse_14d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        requiresProfessionalEmailDomains: !0,
                        statsigDetails: {
                            statsigType: "gate",
                            id: "business_trials_fall_2025"
                        }
                    },
                    stacked_business_trial_14d: {
                        minMemberCount: 1,
                        maxMemberCount: 9,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        billingIntervals: ["month"],
                        productRequirement: n("plus", a("ai")),
                        productsOfferCanApplyTo: "business",
                        requiresProfessionalEmailDomains: !0,
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    mwn_business_reverse_14d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 90,
                        trialRefreshDays: 90,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "mwn_business_trials"
                        }
                    },
                    mwn_stacked_business_trial_14d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 90,
                        trialRefreshDays: 90,
                        billingIntervals: ["month"],
                        productRequirement: n("plus", a("ai")),
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "mwn_business_trials"
                        }
                    },
                    custom_agents_stacked_business_trial_14d: {
                        minMemberCount: 1,
                        maxMemberCount: 10,
                        couponRefreshDays: 0,
                        trialRefreshDays: 30,
                        billingIntervals: ["month"],
                        productRequirement: n("plus", a("ai")),
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "custom_agents_business_trials"
                        }
                    },
                    custom_agents_business_reverse_14d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 14,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "custom_agents_business_trials"
                        }
                    },
                    custom_agents_business_reverse_1m: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 30,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "custom_agents_business_trials"
                        }
                    },
                    custom_agents_stacked_business_trial_1m: {
                        minMemberCount: 11,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 30,
                        billingIntervals: ["month"],
                        productRequirement: n("plus", a("ai")),
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "custom_agents_business_trials"
                        }
                    },
                    custom_agents_business_cc_14d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 14,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_trial_cc_upfront",
                            groups: ["on"]
                        }
                    },
                    custom_agents_business_cc_30d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 30,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_trial_cc_upfront_30d",
                            groups: ["on"]
                        }
                    },
                    business_cc_14d: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "gate",
                            id: "business_trials_fall_2025"
                        }
                    },
                    business_cc_30_perf_marketing: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse_30_perf_marketing: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse_1m_startup: {
                        minMemberCount: 1,
                        maxMemberCount: 100,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse_3m_startup: {
                        minMemberCount: 1,
                        maxMemberCount: 100,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse_6m_startup: {
                        minMemberCount: 1,
                        maxMemberCount: 100,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse_12m_startup: {
                        minMemberCount: 1,
                        maxMemberCount: 100,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_reverse_1m_commercial: {
                        minMemberCount: 1,
                        maxMemberCount: 100,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_cc_14d_personal: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_trials_14d_personal_user",
                            groups: ["on"]
                        }
                    },
                    block_limit: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "plus",
                        billingIntervals: ["month"],
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "annual_block_limit_offer",
                            groups: ["month_offer", "multi_offer"]
                        }
                    },
                    removing_member_block_limit: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "plus",
                        billingIntervals: ["month"],
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "removing_member_block_limit_offer",
                            groups: ["on"]
                        }
                    },
                    annual_block_limit: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "plus",
                        billingIntervals: ["year"],
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "annual_block_limit_offer",
                            groups: ["annual_offer", "multi_offer"]
                        }
                    },
                    business_block_limit_coupon: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        billingIntervals: ["month"],
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_block_limit_offer",
                            groups: ["business_coupon"]
                        }
                    },
                    business_cc_14d_block_limit: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_block_limit_offer",
                            groups: ["business_trial"]
                        }
                    },
                    plus_block_limit_coupon: {
                        minMemberCount: 2,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 180,
                        productRequirement: u,
                        productsOfferCanApplyTo: "plus",
                        billingIntervals: ["month"],
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_block_limit_offer",
                            groups: ["plus_coupon"]
                        }
                    },
                    aimn_monthly: { ...l.aimn,
                        billingIntervals: ["month"]
                    },
                    aimn_annual: { ...l.aimn,
                        billingIntervals: ["year"]
                    },
                    business_trial_non_conversion: {
                        minMemberCount: 1,
                        maxMemberCount: 49,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 0,
                        productRequirement: i("free", "plus"),
                        productsOfferCanApplyTo: "business",
                        billingIntervals: ["month"],
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    business_trial_non_conversion_delayed: {
                        minMemberCount: 1,
                        maxMemberCount: 49,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: 0,
                        productRequirement: i("free", "plus"),
                        productsOfferCanApplyTo: "business",
                        billingIntervals: ["month"],
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    "3m_startup_business": {
                        minMemberCount: 1,
                        maxMemberCount: 99,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    "6m_startup_business": {
                        minMemberCount: 1,
                        maxMemberCount: 99,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    "12m_startup_business": {
                        minMemberCount: 1,
                        maxMemberCount: 99,
                        couponRefreshDays: Number.MAX_SAFE_INTEGER,
                        trialRefreshDays: Number.MAX_SAFE_INTEGER,
                        productRequirement: "free",
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    hackathon_3d_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 0,
                        productRequirement: i("free", "plus", "student"),
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    dev_only_45d_reverse: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 0,
                        productRequirement: i("free", "plus", "student"),
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    marketing_30d_creator_business: {
                        minMemberCount: 1,
                        maxMemberCount: Number.MAX_SAFE_INTEGER,
                        couponRefreshDays: 0,
                        trialRefreshDays: 0,
                        productRequirement: i("free", "plus"),
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "none"
                        }
                    },
                    plus_expansion_one_member: { ...o("plus"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "plus_expansion_offer",
                            groups: ["one_member"]
                        }
                    },
                    plus_expansion_two_member: { ...o("plus"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "plus_expansion_offer",
                            groups: ["two_member"]
                        }
                    },
                    business_expansion_one_member: { ...o("business"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_expansion_offer",
                            groups: ["one_member"]
                        }
                    },
                    business_expansion_two_member: { ...o("business"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_expansion_offer",
                            groups: ["two_member"]
                        }
                    }
                }
        },
        383378: (e, t, s) => {
            s.d(t, {
                $G: () => n,
                Hj: () => i,
                Nh: () => _,
                V9: () => u,
                WL: () => r,
                cv: () => l,
                nS: () => a,
                tz: () => o
            }), s(581454);
            let r = 30,
                n = 5;

            function i(e, t) {
                var s;
                return (null == (s = e.subscription) ? void 0 : s.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function a(e, t, r) {
                return e ? (0, s(850640).W_)(e.toMillis(), r ? ? "long", t) : void 0
            }

            function u(e, t) {
                let r = s(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? s(906745).DateTime.now()) > r
            }

            function o(e, t, r) {
                let n = s(906745).DateTime.fromMillis(e.endDateMs),
                    i = r ? ? s(906745).DateTime.now();
                return i < n && n.diff(i).as("days") <= t
            }

            function l(e) {
                let {
                    prices: t,
                    products: n,
                    interval: i,
                    memberCount: a,
                    currency: u = "USD",
                    trialLengthDays: o = r,
                    trialStartDate: l = s(906745).DateTime.now()
                } = e;
                return {
                    items: n.map(e => ({
                        price: (0, s(982473).vk)(t, {
                            product: e,
                            interval: i,
                            currency: u
                        }),
                        quantity: a
                    })),
                    trialEnd: l.plus({
                        days: o
                    })
                }
            }

            function _(e) {
                return (0, s(722371).Xk)(e, "plus") && (0, s(722371).Xk)(e, "ai")
            }
        },
        423127: (e, t, s) => {
            function r(e) {
                let {
                    mostRecentOfferDate: t,
                    daysToAdd: r,
                    billingData: n
                } = e, i = (0, s(192159).DS)(n).toMillis();
                return (0, s(25825).K1)({
                    date: t,
                    daysToAdd: r
                }) < i
            }

            function n({
                memberCount: e,
                billingData: t,
                spaceId: r,
                environment: i
            }) {
                return !!e && !!t && !!r && !!(0, s(262166).dL)((0, s(192159).AI)(t)) && !(e > 10) && !(e < 2) && !!s(617995).I.getData(i, {
                    spaceId: r,
                    offerCampaign: "expansion_offer"
                }) && (0, s(717274).Nu)()
            }
            async function i({
                billingData: e,
                spaceStore: t,
                environment: r
            }) {
                var n;
                let [u, o] = await Promise.all([a({
                    billingData: e,
                    spaceStore: t,
                    environment: r
                }), (0, s(832129).x)({
                    environment: r,
                    spaceId: t.id
                })]), {
                    eligible: l,
                    campaign: _
                } = u;
                if (!l || !o) return {
                    shouldShow: !1,
                    campaign: void 0
                };
                let m = t.getModel();
                return (null == m || null == (n = m.getSettings()) || null == (n = n.offer_member_count) ? void 0 : n.find(e => e.campaign === _)) || !(o > 4) ? {
                    shouldShow: !0,
                    campaign: _
                } : {
                    shouldShow: !1,
                    campaign: void 0
                }
            }
            async function a({
                billingData: e,
                spaceStore: t,
                environment: n
            }) {
                if (!e || !(0, s(226309).qc)(e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let i = (0, s(192159).AI)(e);
                if (!((0, s(262166).$P)(i) || (0, s(262166).tL)(i)) || "month" !== (0, s(192159).N4)("plan", e)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let u = (0, s(521469).UB)(i);
                if (!u) return {
                    eligible: !1,
                    campaign: void 0
                };
                let o = s(218744).default.getEligibleGroup({
                    experimentId: u,
                    defaultGroup: s(218745).STATSIG_DEFAULT_GROUP,
                    disableExposureLogging: !0
                });
                if ("control" === o || o === s(218745).STATSIG_DEFAULT_GROUP) return {
                    eligible: !1,
                    campaign: void 0
                };
                let l = (0, s(521469).$E)(i, o);
                if (!l) return {
                    eligible: !1,
                    campaign: void 0
                };
                let _ = t.getModel();
                if ((0, s(521469).fd)(_, l)) return {
                    eligible: !1,
                    campaign: void 0
                };
                let m = await s(185995).default.awaitData(n, {
                    spaceId: t.id
                });
                if (m) {
                    let {
                        isEligible: t
                    } = function(e) {
                        let {
                            campaign: t,
                            offerStatuses: n,
                            billingData: i
                        } = e, a = n.filter(s(90119).GK), u = [], o = (0, s(875472).e8)(a, "coupon"), l = !o || r({
                            mostRecentOfferDate: o.endDateMs,
                            daysToAdd: s(361200).offerEligibilityMap[t].couponRefreshDays,
                            billingData: i
                        });
                        l || u.push({
                            reason: "Coupon cooldown period has not passed",
                            extra: {
                                mostRecentCoupon: o,
                                requiredCouponRefreshDays: s(361200).offerEligibilityMap[t].couponRefreshDays
                            }
                        });
                        let _ = (0, s(875472).e8)(a, "trial"),
                            m = !_ || r({
                                mostRecentOfferDate: _.endDateMs,
                                daysToAdd: s(361200).offerEligibilityMap[t].trialRefreshDays,
                                billingData: i
                            });
                        return m || u.push({
                            reason: "Trial cooldown period has not passed",
                            extra: {
                                mostRecentTrial: _,
                                requiredTrialRefreshDays: s(361200).offerEligibilityMap[t].trialRefreshDays
                            }
                        }), {
                            isEligible: l && m,
                            ineligibleReasons: u
                        }
                    }({
                        campaign: l,
                        offerStatuses: m,
                        billingData: e
                    });
                    if (!t) return {
                        eligible: !1,
                        campaign: void 0
                    }
                }
                return {
                    eligible: !0,
                    campaign: l
                }
            }
            async function u({
                billingData: e,
                spaceStore: t,
                environment: r
            }) {
                let {
                    eligible: n,
                    campaign: i
                } = await a({
                    billingData: e,
                    spaceStore: t,
                    environment: r
                });
                if (!n || !i) return;
                let o = t.getModel(),
                    l = (0, s(521469)._w)(o, i);
                if (l) return {
                    shouldShowCallout: !0,
                    campaign: i,
                    membersAdded: l.membersAdded ? ? 0
                }
            }

            function o({
                initialTimestamp: e,
                dismissalKey: t,
                billingData: r
            }) {
                var n, i;
                let a = (0, s(192159).DS)(r).toMillis();
                if (a - e > 30 * Number(s(627179).nD)) return !1;
                let u = null == (n = s(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : n.getSettings(),
                    l = null == u || null == (i = u.callout_dismissal_timestamps) ? void 0 : i.find(e => e.name === t);
                return !(null != l && l.timestamp && (a - l.timestamp) / Number(s(627179).nD) < 3) && !0
            }
            s.d(t, {
                dM: () => n,
                Xd: () => u,
                ju: () => o,
                TO: () => i
            }), s(898992), s(672577), s(944114), s(354520)
        },
        425749: (e, t, s) => {
            s.d(t, {
                I$: () => a,
                R2: () => l,
                WF: () => o,
                bZ: () => u,
                cE: () => n,
                jX: () => i,
                rz: () => _
            });
            var r = () => s(381453);

            function n(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function a(e) {
                return !!(void 0 !== e && (0, s(722371).Xk)(i, e))
            }

            function u() {
                let e = (0, s(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: s(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, s(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function o(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let l = [{
                type: "everything"
            }];

            function _(e) {
                for (let t of l)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        465424: (e, t, s) => {
            s.d(t, {
                R: () => r
            });

            function r(e, t) {
                return (0, s(192159).N4)(e, {
                    subscription: t
                })
            }
        },
        521469: (e, t, s) => {
            function r(e) {
                switch (e) {
                    case "plus":
                        return "plus_expansion_offer";
                    case "business":
                        return "business_expansion_offer";
                    default:
                        return
                }
            }

            function n(e, t) {
                if ("plus" === e) {
                    if ("one_member" === t) return "plus_expansion_one_member";
                    if ("two_member" === t) return "plus_expansion_two_member"
                }
                if ("business" === e) {
                    if ("one_member" === t) return "business_expansion_one_member";
                    if ("two_member" === t) return "business_expansion_two_member"
                }
            }

            function i(e) {
                switch (e) {
                    case "plus_expansion_one_member":
                    case "business_expansion_one_member":
                        return 1;
                    case "plus_expansion_two_member":
                    case "business_expansion_two_member":
                        return 2;
                    default:
                        return 3
                }
            }

            function a(e, t) {
                if (!e) return !1;
                let s = u(e, t);
                return !!s && (s.membersAdded ? ? 0) >= i(t)
            }

            function u(e, t) {
                var s;
                if (e) return null == e || null == (s = e.getSettings()) || null == (s = s.offer_member_count) ? void 0 : s.find(e => e.campaign === t)
            }
            s.d(t, {
                $E: () => n,
                UB: () => r,
                Zy: () => i,
                _w: () => u,
                fd: () => a
            }), s(898992), s(672577)
        },
        557255: (e, t, s) => {
            s.r(t), s.d(t, {
                buildMessages: () => v,
                getEligiblePendingMessages: () => R,
                getEligibleStaticMessages: () => E,
                isPendingMessageEligibleImpl: () => h,
                maybeShowMessagesImpl: () => A,
                maybeShowPendingMessagesImpl: () => M,
                showStartupMessagesImpl: () => T
            }), s(944114), s(898992), s(354520), s(581454), s(908872);
            var r = () => s(125542),
                n = () => s(292609),
                i = () => s(462391),
                a = () => s(975162),
                u = () => s(543346),
                o = () => s(43261),
                l = () => s(696190),
                _ = () => s(348939);
            async function m(e, t) {
                let s = await e.api.callApi({
                    eventName: "getUnreadInAppMessagesForUser",
                    environment: e,
                    data: {
                        workspaceId: t
                    }
                });
                return "failed" === s.type ? {
                    high: [],
                    rest: []
                } : s.data.messages.reduce((e, t) => ("highPriority" in t.config && t.config.highPriority ? e.high.push(t) : e.rest.push(t), e), {
                    high: [],
                    rest: []
                })
            }
            var p = () => s(955704),
                c = () => s(236278),
                f = () => s(357709),
                d = () => s(94849);
            async function b(e, t) {
                let s = [],
                    r = [];
                for (let n of t) {
                    let {
                        timeout: t,
                        result: i
                    } = await (0, a().nQ)(5e3, d().S[n](e));
                    t ? s.push(n) : i && r.push(n)
                }
                return {
                    candidates: r,
                    timeouts: s
                }
            }
            async function y(e, t, s) {
                let r = await (0, a().nQ)(3e4, s);
                return r.timeout ? Promise.reject(t) : (e[t] = r.result, Promise.resolve(void 0))
            }
            async function g(e) {
                let t = {
                        environment: Promise.resolve(e),
                        currentUserSettingsStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = s(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : e.isReady())
                        }).then(() => s(728372).AppStoreCurrentUserSettingsStore.state),
                        sidebarSpaceStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = (0, s(328765).S)()) ? void 0 : e.isReady())
                        }).then(() => (0, s(328765).S)()),
                        mainEditorCurrentBlockStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = s(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.isReady())
                        }).then(() => s(728372).AppStoreMainEditorCurrentBlockStore.state),
                        sidebarSpaceViewStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = s(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.isReady())
                        }).then(() => s(728372).AppStoreSidebarSpaceViewStore.state),
                        assistantFeatureGateStore: s(886556).z.waitUntil(() => s(886556).z.getIsInitialized()).then(() => s(886556).z),
                        subscriptionDataStore: s(105692).subscriptionDataStoreInstance.waitUntilLoaded().then(() => s(105692).subscriptionDataStoreInstance),
                        experimentStore: s(218744).default.waitUntilStatsigReadyAsync().then(() => s(218744).default),
                        billingData: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = (0, s(328765).S)()) ? void 0 : e.isReady())
                        }).then(() => (0, s(328765).S)()).then(t => (0, s(226309).Vv)({
                            environment: e,
                            spaceId: t.getSpaceId()
                        })),
                        spaceProfileSettingsStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = (0, s(328765).S)()) ? void 0 : e.isReady())
                        }).then(() => new(s(219988)).A),
                        currentUserRootStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = s(728372).AppStoreCurrentUserRootStore.state) ? void 0 : e.isReady())
                        }).then(() => s(728372).AppStoreCurrentUserRootStore.state),
                        aiCreditsStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = (0, s(328765).S)()) ? void 0 : e.isReady())
                        }).then(() => (0, s(328765).S)()).then(t => s(547631).a.awaitData(e, {
                            spaceId: t.getSpaceId()
                        })).then(() => s(547631).a),
                        claimedOffersStore: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = (0, s(328765).S)()) ? void 0 : e.isReady())
                        }).then(() => (0, s(328765).S)()).then(t => t ? s(185995).default.awaitData(e, {
                            spaceId: t.getSpaceId()
                        }) : void 0).then(() => s(185995).default),
                        userLifecycleProfileStore: s(529119).k.waitUntil(() => void 0 !== s(529119).k.state).then(() => s(529119).k),
                        recentEventsStore: s(309479).a.waitUntil(() => void 0 !== s(309479).a.state).then(() => s(309479).a),
                        publicSpaceDataStoreLoaded: s(728372).default.waitUntil(() => {
                            var e;
                            return !!(null == (e = (0, s(328765).S)()) ? void 0 : e.isReady())
                        }).then(() => (0, s(328765).S)()).then(t => t ? s(949830).A.awaitData(e, {
                            spaceId: t.id,
                            userId: e.currentUser.id
                        }) : void 0).then(e => void 0 !== e)
                    },
                    r = {};
                return Promise.all((0, s(722371).objectKeys)(t).map(e => y(r, e, t[e]))).then(() => ({
                    requiredArgs: r,
                    timeoutKey: void 0
                }), e => ({
                    timeoutKey: e,
                    requiredArgs: void 0
                }))
            }
            async function E(e, t) {
                let r = s(906745).DateTime.now().toMillis(),
                    {
                        requiredArgs: n,
                        timeoutKey: i
                    } = await g(e),
                    a = s(906745).DateTime.now().toMillis() - r;
                if (!n) return {
                    eligibleKeys: [],
                    requiredArgTimeout: i,
                    requiredArgsRunDuration: a
                };
                let {
                    candidates: u,
                    timeouts: o
                } = await b(n, t);
                return {
                    eligibleKeys: u,
                    eligibilityTimeouts: o,
                    requiredArgsRunDuration: a
                }
            }
            async function A(e, t, s) {
                await I();
                let {
                    eligibleKeys: r,
                    eligibilityTimeouts: n,
                    requiredArgsRunDuration: a,
                    requiredArgTimeout: u
                } = await E(e, t);
                if (u) return {
                    shown: [],
                    requiredArgTimeout: u,
                    requiredArgsRunDuration: a
                };
                let o = (0, i().p8)(r),
                    l = [];
                for (let t of o)(0, c().$)(e, t, s).success && l.push(t);
                return {
                    shown: l,
                    eligibilityTimeouts: n,
                    requiredArgsRunDuration: a
                }
            }
            async function R(e) {
                let t, {
                        environment: s,
                        messageKeys: n,
                        inAppMessageEligibilityContext: a,
                        options: _
                    } = e,
                    m = a ? ? await (0, u().Gn)(s),
                    {
                        staticMessageKeys: p,
                        dynamicMessageKeys: c
                    } = n.reduce((e, t) => {
                        if (!l().default.isPendingDynamicMessage(t)) return e;
                        let s = (0, i().h2)(t);
                        return s ? e.staticMessageKeys.push(s) : e.dynamicMessageKeys.push(t), e
                    }, {
                        staticMessageKeys: [],
                        dynamicMessageKeys: []
                    }),
                    d = [],
                    b = 0,
                    y = [...c];
                if (p.length > 0) {
                    let e = await E(s, p);
                    if (d = e.eligibilityTimeouts || [], t = e.requiredArgTimeout, b = e.requiredArgsRunDuration, t) return {
                        eligibleKeys: [],
                        skippedKeys: [],
                        eligibilityTimeouts: d,
                        requiredArgTimeout: t,
                        requiredArgsRunDuration: b
                    };
                    y = [...(0, i().p8)(e.eligibleKeys), ...c]
                }
                let g = [],
                    A = [];
                for (let e of y) {
                    let t = l().default.getPendingDynamicMessage(e);
                    if (!t) {
                        (0, i().P$)(e) && g.push(e);
                        continue
                    }
                    if (!l().default.isVisible(e)) {
                        if (!(t && (0, u().ZF)(t)) || (0, u().Tc)({
                                messageConfig: t,
                                environment: s,
                                inAppMessageEligibilityContext: m
                            }))
                            if ((0, u().tN)({
                                    messageConfig: t,
                                    environment: s,
                                    inAppMessageEligibilityContext: m
                                })) A.push(e);
                            else {
                                let n = o().g(s, t, _);
                                n.success ? g.push(e) : n.error && f().Ak(s, {
                                    callout_key: e,
                                    placement_key: (0, r().Po)(t.type) ? ? "None",
                                    rule: n.error,
                                    message_category: t.category
                                })
                            }
                    }
                }
                for (let e of A) {
                    let t = l().default.getPendingDynamicMessage(e);
                    await N({
                        environment: s,
                        messageKey: e,
                        messageConfig: t
                    }), l().default.removePendingDynamicMessage(e)
                }
                return {
                    eligibleKeys: g,
                    skippedKeys: A,
                    eligibilityTimeouts: d,
                    requiredArgsRunDuration: b
                }
            }
            async function M(e) {
                let {
                    environment: t,
                    messageKeys: s,
                    options: n,
                    metadata: i
                } = e;
                await I();
                let a = await (0, u().Gn)(t),
                    {
                        eligibleKeys: _,
                        eligibilityTimeouts: m,
                        requiredArgTimeout: c,
                        requiredArgsRunDuration: d
                    } = await R({
                        environment: t,
                        messageKeys: s,
                        inAppMessageEligibilityContext: a ? ? void 0,
                        options: n
                    });
                if (c) return {
                    shown: [],
                    requiredArgTimeout: c,
                    requiredArgsRunDuration: d,
                    eligibilityTimeouts: m
                };
                let b = [];
                for (let e of _) {
                    let s = l().default.getPendingDynamicMessage(e);
                    if (s) {
                        let a = function(e, t) {
                                if (!t) return e;
                                switch (e.type) {
                                    case "modal":
                                    case "sidebar":
                                    case "toast":
                                    case "tooltip":
                                    case "static":
                                        return { ...e,
                                            props: { ...e.props,
                                                metadata: t
                                            }
                                        };
                                    case "empty":
                                        return e
                                }
                            }(s, i),
                            u = o().g(t, a, n);
                        u.success ? b.push(a) : u.error && f().Ak(t, {
                            callout_key: e,
                            placement_key: (0, r().Po)(a.type) ? ? "None",
                            rule: u.error,
                            message_category: a.category
                        })
                    }
                }
                let y = [];
                for (let e of b)(0, p().r)(t, e, { ...n,
                    inAppMessageEligibilityContext: a ? ? void 0
                }).success && y.push(e.key);
                return {
                    shown: y,
                    eligibilityTimeouts: m,
                    requiredArgsRunDuration: d
                }
            }
            async function h(e, t) {
                let {
                    eligibleKeys: s
                } = await R({
                    environment: e,
                    messageKeys: [t]
                });
                return s.includes(t)
            }
            async function T(e) {
                let t = i().qd.filter(e => n().lU[e].show_on_startup);
                await s(218744).default.waitUntilStatsigReadyAsync();
                let {
                    eligibleKeys: r,
                    eligibilityTimeouts: a,
                    requiredArgTimeout: u,
                    requiredArgsRunDuration: o
                } = await E(e, t);
                if (u) return void f().wo(e, {
                    eligible_callouts: [],
                    required_arg_timeout: u,
                    required_args_run_duration: o,
                    eligibility_timeouts: []
                });
                let l = (0, i().p8)(r),
                    {
                        requiredArgs: _
                    } = await g(e),
                    m = await v({
                        staticMessageKeys: l,
                        environment: e,
                        requiredArgs: _
                    }),
                    c = [];
                for (let t of m) {
                    let s = (0, i().h2)(t.key);
                    (0, p().r)(e, t, {
                        skipDefaultRules: s ? n().lU[s].skip_default_rules : []
                    }).success && c.push(t.key)
                }
                let d = s(218744).default.getConfigKey("callout_config", "callout_blocklist");
                f().wo(e, {
                        eligible_callouts: c,
                        required_arg_timeout: null,
                        required_args_run_duration: o,
                        eligibility_timeouts: a ? ? [],
                        blocklist: d
                    }),
                    function() {
                        for (let e of (S = !0, C)) e()
                    }()
            }
            async function N({
                environment: e,
                messageKey: t,
                messageConfig: n
            }) {
                let a, u = (0, i().h2)(t);
                if (u) a = (0, i().t9)(u);
                else if (null != n && n.type) {
                    let e = (0, r().Po)(n.type);
                    e && (a = e)
                }
                f().Cu(e, {
                    callout_key: t,
                    placement_key: a ? ? "None",
                    callout_src: u ? "static" : "cio"
                }), await (0, s(350130).X)(e, t)
            }
            async function D({
                messageConfig: e,
                environment: t,
                inAppMessageEligibilityContext: s,
                requiredArgs: r
            }) {
                if ((0, u().tN)({
                        messageConfig: e,
                        environment: t,
                        inAppMessageEligibilityContext: s
                    })) return await N({
                    environment: t,
                    messageKey: e.key,
                    messageConfig: e
                }), !1;
                let n = (0, i().h2)(e.key);
                if (n && d().S[n]) {
                    if (!r) return !0;
                    let {
                        timeout: s,
                        result: i
                    } = await (0, a().nQ)(5e3, d().S[n](r));
                    if (s) return !1;
                    if (!i) return await N({
                        environment: t,
                        messageKey: e.key,
                        messageConfig: e
                    }), !1
                }
                return !0
            }
            async function v(e) {
                var t;
                let {
                    staticMessageKeys: i,
                    environment: a,
                    requiredArgs: o
                } = e, p = [], c = await (0, u().Gn)(a), {
                    high: f,
                    rest: d
                } = i.reduce((e, t) => (0 === s(316381).z[t] ? e.high.push(t) : e.rest.push(t), e), {
                    high: [],
                    rest: []
                }), {
                    high: b,
                    rest: y
                } = await m(a, null == o || null == (t = o.sidebarSpaceStore) ? void 0 : t.getSpaceId());
                for (let e of f) p.push({
                    id: "",
                    key: e,
                    type: "static",
                    category: n().lU[e].category,
                    props: {}
                });
                for (let e of b) _().A.setConfig(e.config.key, {
                    message: e
                }), (0, r().dO)(e.config) ? l().default.addPendingDynamicMessage(e.config) : await D({
                    messageConfig: e.config,
                    environment: a,
                    inAppMessageEligibilityContext: c,
                    requiredArgs: o
                }) && p.push(e.config);
                for (let e of d) p.push({
                    id: "",
                    key: e,
                    type: "static",
                    category: n().lU[e].category,
                    props: {}
                });
                for (let e of y) _().A.setConfig(e.config.key, {
                    message: e
                }), (0, r().dO)(e.config) ? l().default.addPendingDynamicMessage(e.config) : await D({
                    messageConfig: e.config,
                    environment: a,
                    inAppMessageEligibilityContext: c,
                    requiredArgs: o
                }) && p.push(e.config);
                return p
            }
            let S = !1,
                C = [];
            async function I() {
                return new Promise(e => {
                    S ? e() : C.push(e)
                })
            }
        },
        659262: (e, t, s) => {
            s.d(t, {
                L: () => n,
                y: () => i
            });
            let r = Number(s(627179).Xb);

            function n() {
                var e, t;
                if (s(205885).A.state.online) {
                    if (null != (e = s(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = s(420153).A.state.connectionError) ? void 0 : t.startTime) < r) return;
                    return s(420153).A.state.connectionError
                }
            }

            function i() {
                return !!n()
            }
        },
        705820: (e, t, s) => {
            s.d(t, {
                P: () => r
            });
            let r = new(s(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!s(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let r = new(s(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await r.load(), !r.canAdmin()) return;
                let n = await e.api.callCellCompatibleApi({
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
                if ("success" === n.type) return n.data.campaigns
            });
            s(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", r)
        },
        724175: (e, t, s) => {
            s.d(t, {
                x: () => r
            });

            function r() {
                return (0, s(881016).d)()
            }
        },
        745452: (e, t, s) => {
            s.d(t, {
                p: () => r
            });

            function r() {
                var e, t, r, n, i, a, u, o, l, _, m, p, c, f;
                let d = s(728372).AppStoreSidebarSpaceStore.state,
                    b = s(728372).AppStoreSidebarSpaceViewStore.state,
                    y = null == d ? void 0 : d.getSpaceSurveyData(),
                    g = null == b ? void 0 : b.getUserSurveyData();
                return {
                    function: null != g && null != (e = g.function) && e.value ? (0, s(88917).Tj)(null == g || null == (t = g.function) ? void 0 : t.value) : void 0,
                    role: null != g && null != (r = g.role) && r.value ? (0, s(88917).t_)(null == g || null == (n = g.role) ? void 0 : n.value) : void 0,
                    educationRole: null == g || null == (i = g.education_role) ? void 0 : i.value,
                    educationLevel: null == g || null == (a = g.education_level) ? void 0 : a.value,
                    useCases: null != y && null != (u = y.use_cases) && u.value ? (0, s(88917).h0)(null == y || null == (o = y.use_cases) ? void 0 : o.value) : void 0,
                    companySize: null != y && null != (l = y.company_size) && l.value ? (0, s(88917).JE)(null == y || null == (_ = y.company_size) ? void 0 : _.value) : void 0,
                    intent: null != y && null != (m = y.intent) && m.value ? (0, s(88917).j9)(null == y || null == (p = y.intent) ? void 0 : p.value) : void 0,
                    categories: null == g || null == (c = g.categories) ? void 0 : c.value,
                    collaborativeIntent: null == y || null == (f = y.collaborative_intent) ? void 0 : f.value
                }
            }
        },
        855361: (e, t, s) => {
            s.d(t, {
                S: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    spaceId: r
                } = e;
                return (0, s(682985).K8)(() => {
                    if (r) return (0, s(616579).j)({
                        environment: t,
                        spaceId: r
                    })
                }, [t, r])
            }
        },
        937776: (e, t, s) => {
            s.d(t, {
                B: () => i
            }), s(296540);
            var r = s(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, r.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                i = (0, s(104509).wt)("archiveBox", n, "default")
        },
        955704: (e, t, s) => {
            s.d(t, {
                r: () => r
            });

            function r(e, t, r) {
                return (0, s(505483).t)(e, t, r)
            }
        },
        958059: (e, t, s) => {
            function r(e) {
                return (0, s(192159).Fq)({
                    subscription: e
                })
            }

            function n(e) {
                return (0, s(192159).Ry)({
                    clock: void 0,
                    subscription: e,
                    trial: void 0
                })
            }

            function i({
                subscriptionState: e,
                logFunction: t,
                spaceId: r
            }) {
                let n = c(e);
                return (0, s(192159).yB)({
                    billingData: {
                        clock: void 0,
                        subscription: n,
                        trial: void 0
                    },
                    logFunction: t,
                    spaceId: r
                })
            }

            function a(e) {
                return (0, s(192159).q8)({
                    subscription: e
                })
            }

            function u(e) {
                return (0, s(192159).k4)({
                    subscription: e
                })
            }

            function o(e) {
                return (0, s(192159).V9)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function l(e) {
                return (0, s(192159).d$)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function _(e) {
                return (0, s(192159).ji)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function m(e) {
                return (0, s(192159).AI)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function p(e, t) {
                return (0, s(192159).KH)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                }, t)
            }

            function c(e) {
                return e ? { ...e,
                    trialEnd: void 0
                } : void 0
            }
            s.d(t, {
                DS: () => r,
                Fe: () => l,
                GB: () => i,
                Gf: () => m,
                SX: () => u,
                V_: () => _,
                j1: () => o,
                j8: () => n,
                yp: () => p,
                yw: () => a
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(354520), s(581454)
        },
        982473: (e, t, s) => {
            function r(e, t) {
                var r, n;
                return (r = e.items, n = t.items, (0, s(627179).qq)({
                    as: r,
                    aKey: e => s(192159).IE(e),
                    bs: n,
                    bKey: e => s(192159).IE(e)
                })).some(([e, t]) => (function(e, t) {
                    if (!e) return !1;
                    if (!t) return !0;
                    let r = s(192159).xp(e),
                        n = s(192159).xp(t);
                    return !!r && !!n && s(262166).o3[r] > s(262166).o3[n]
                })(e, t))
            }

            function n(e, {
                trialEnd: t,
                items: s
            }, r) {
                return {
                    trialEnd: t,
                    items: s.map(t => {
                        let s = l(e, {
                            interval: r,
                            product: t.price.product,
                            currency: t.price.unitAmount.currencyCode
                        });
                        return { ...t,
                            price: s
                        }
                    })
                }
            }

            function i(e, t) {
                let r = e.items.filter(e => s(192159).IE(e) !== t);
                return { ...e,
                    items: r
                }
            }

            function a(e, t) {
                let r = s(192159).IE(t),
                    n = t.price.product,
                    i = e.items.filter(e => {
                        let t = e.price.product,
                            i = s(192159).IE(e),
                            a = "ai" === t && !s(192159).$0(e.price.externalId);
                        return r !== i && !(a && ("business" === n || "enterprise" === n))
                    });
                return { ...e,
                    items: i.concat([t])
                }
            }

            function u(e) {
                let {
                    state: t,
                    prices: r,
                    quantities: n,
                    params: {
                        planBillingInterval: i,
                        currency: a
                    },
                    products: u
                } = e, o = u.map(e => {
                    var t;
                    return "personal_free" === (t = e) || "team_free" === t ? "free" : t
                }), m = o.map(e => s(192159).Mr(e)), p = t.items.filter(e => {
                    let t = e.price.product,
                        r = s(192159).IE(e),
                        n = m.includes(r),
                        i = "ai" === t && (o.includes("business") || o.includes("enterprise"));
                    return !n && !i
                }), c = o.map(e => _(l(r, {
                    interval: "ai_credit_pack" === e ? "month" : i,
                    currency: a,
                    product: e
                }), n));
                return { ...t,
                    items: p.concat(c)
                }
            }

            function o(e) {
                let {
                    prices: t,
                    billingData: r,
                    product: n
                } = e, i = s(192159).Ry(r), a = s(192159).Mr(n), u = s(192159).lQ(r), o = (0, s(465424).R)(a, u), l = s(192159).N4(a, r), _ = o ? ? l;
                return t.find(e => e.product === n && e.billingInterval === _ && e.unitAmount.currencyCode === i)
            }

            function l(e, {
                interval: t,
                product: s,
                currency: r
            }) {
                var n = e.find(e => e.product === s && e.billingInterval === t && e.unitAmount.currencyCode === r),
                    i = `Unable to find price with interval: ${t}, product: ${s}, currency: ${r}`;
                if (null == n) throw Error(i);
                return n
            }

            function _(e, t) {
                let {
                    numSeats: r,
                    numCustomHostnames: n,
                    numAiCreditPacks: i
                } = t;
                switch ((0, s(475413).vK)(e.product)) {
                    case "public_domain_custom_hostnames":
                        return {
                            price: e,
                            quantity: n
                        };
                    case "ai_credit_pack_units":
                        return {
                            price: e,
                            quantity: i
                        };
                    default:
                        return {
                            price: e,
                            quantity: r
                        }
                }
            }
            s.d(t, {
                V5: () => r,
                Vr: () => n,
                ef: () => u,
                gL: () => i,
                ng: () => _,
                vH: () => a,
                vk: () => l,
                z2: () => o
            }), s(16280), s(898992), s(354520), s(672577), s(581454), s(737550)
        },
        996903: (e, t, s) => {
            s.d(t, {
                i: () => r
            });

            function r(e) {
                let t = e.getSettings(),
                    r = null == t ? void 0 : t.signup_time;
                return r ? (0, s(362008).Mn)(r) : null
            }
        }
    }
]);