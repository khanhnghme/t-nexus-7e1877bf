"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [46352, 73259], {
        36151: (e, s, t) => {
            t.d(s, {
                c: () => n
            });
            var r = () => t(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        wasGetVisibleUsersCalled: {}
                    }
                }
            }
            let n = new i;
            t(202146).exposeDebugValue("GetVisibleUsersStore", n)
        },
        90119: (e, s, t) => {
            function r(e) {
                let {
                    campaign: s,
                    products: t,
                    billingInterval: r
                } = e;
                return !!s && a(s, t) && o(s, r)
            }

            function i(e, s) {
                return r({
                    campaign: e,
                    products: (0, t(958059).Fe)(s),
                    billingInterval: (0, t(958059).yw)(s)
                })
            }

            function n(e, s, r) {
                if (e && (0, t(875472).rM)(e, r) && i(e.offer.campaign, s)) return e.offer
            }

            function a(e, s) {
                var r;
                if (!e) return !1;
                let i = null == (r = t(361200).offerEligibilityMap[e]) ? void 0 : r.productsOfferCanApplyTo;
                return !!(!i || (0, t(528815).xw)(i, s))
            }

            function u(e, s) {
                return !!e && a(e, [s])
            }

            function o(e, s) {
                return (0, t(528815).mQ)({
                    offerEligibility: t(361200).offerEligibilityMap[e],
                    billingInterval: s
                })
            }

            function l(e) {
                let {
                    offer: s,
                    currentProducts: i,
                    billingInterval: n,
                    potentialDiscountedProduct: a
                } = e;
                if (!s || !r({
                        campaign: s.campaign,
                        products: i,
                        billingInterval: n
                    })) return !1;
                let u = function(e) {
                    if (e) return t(361200).offerEligibilityMap[e].productsOfferCanApplyTo
                }(s.campaign);
                return !!u && (0, t(528815).Z6)(u, a)
            }

            function p(e) {
                return "claimed" === e.type
            }
            t.d(s, {
                FV: () => u,
                GK: () => p,
                MN: () => a,
                QK: () => l,
                Uh: () => r,
                d$: () => i,
                ex: () => n,
                sZ: () => o
            }), t(898992), t(354520)
        },
        109955: (e, s, t) => {
            t.d(s, {
                x: () => r
            }), t(16280);
            async function r(e, s) {
                var r, i;
                let n = s ? ? (null == (r = (0, t(328765).S)()) ? void 0 : r.id),
                    a = e.currentUser.id;
                if (!a) throw Error("No userId.");
                if (!n) throw Error("No spaceId.");
                let u = `SubscriptionData:${n}:v2`,
                    o = t(255482).K.get({
                        userId: a,
                        key: u
                    });
                o && (t(105692).subscriptionDataStoreInstance.setState(o), t(105692).subscriptionDataStoreInstance.spaceId = n, t(105692).subscriptionDataStoreInstance.userId = a, (0, t(336613).XC)().setUserSimilarityState(o.userSimilarity)), t(36151).c.setState({
                    wasGetVisibleUsersCalled: { ...t(36151).c.state.wasGetVisibleUsersCalled,
                        [n]: !0
                    }
                }), await (0, t(336613).XC)().drainTransactionQueue();
                let [l, p, m] = await Promise.all([e.api.callCellCompatibleApi({
                    eventName: "getSubscriptionData",
                    environment: e,
                    data: {
                        spaceId: n
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: n
                    }
                }), e.api.callCellCompatibleApi({
                    eventName: "getVisibleUsers",
                    environment: e,
                    data: {
                        spaceId: n,
                        supportsEdgeCache: !0,
                        earlyReturnForEdgeCache: !0
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                }), e.api.callCellCompatibleApi({
                    eventName: "getSimilarUsers",
                    environment: e,
                    data: {
                        userId: a,
                        spaceId: n,
                        limit: 100
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                })]);
                if ("success" === l.type && "success" === p.type) {
                    let e = { ...l.data,
                            ...p.data
                        },
                        s = "success" === m.type ? m.data.userSimilarity : void 0;
                    s && (e.userSimilarity = s);
                    try {
                        t(255482).K.set({
                            userId: a,
                            key: u,
                            value: e
                        })
                    } catch {
                        t(773352).log({
                            level: "error",
                            from: "subscriptionActions",
                            type: "subscriptionDataTooLarge",
                            data: {
                                miscDataToConvertToString: {
                                    subscriptionDataJsonSize: JSON.stringify(e).length
                                }
                            }
                        })
                    }(null == (i = (0, t(328765).S)()) ? void 0 : i.id) === n && ((0, t(336613).XC)().setShouldUseEdgeCache({
                        userId: a,
                        spaceId: n,
                        shouldUseEdgeCache: p.data.shouldUseEdgeCache
                    }), t(105692).subscriptionDataStoreInstance.setState(e), t(105692).subscriptionDataStoreInstance.spaceId = n, t(105692).subscriptionDataStoreInstance.userId = a, (0, t(336613).XC)().setUserSimilarityState(e.userSimilarity), (0, t(322082).F)(e) && (0, t(104310).u)({
                        event: {
                            eventName: "currently_subscribed",
                            eventProperties: {}
                        }
                    }))
                } else t(773352).log({
                    level: "error",
                    from: "subscriptionActions",
                    type: "fetchSubscriptionDataFailed",
                    data: {
                        miscDataToConvertToString: {
                            getSubscriptionDataResponseType: l.type,
                            getSubscriptionDataResponseStatus: l.status,
                            getVisibleUserResponseType: p.type,
                            getVisibleUserResponseStatus: p.status
                        }
                    }
                });
                let _ = await (0, t(336613).N7)();
                await _.maybeUpdateAiEligibility(e, n, !0)
            }
        },
        122657: (e, s, t) => {
            t.d(s, {
                c: () => r
            });
            let r = new(t(273917)).U((e, {
                spaceId: s
            }) => `${e.currentUser.id}:${s}`, async (e, {
                spaceId: s
            }) => {
                let t = await e.api.callCellCompatibleApi({
                    eventName: "getLegacyPriceInfo",
                    environment: e,
                    data: {
                        spaceId: s
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: s
                    }
                });
                if ("success" === t.type) return t.data
            })
        },
        129909: (e, s, t) => {
            t.d(s, {
                n: () => r
            }), t(16280);
            async function r(e) {
                let s, {
                    from: r,
                    environment: i,
                    spaceStore: n,
                    paymentData: a,
                    offerInfo: u,
                    sessionId: o,
                    desiredState: l,
                    trialData: p,
                    postUpgradeCallback: m,
                    performImmediately: _,
                    loadingMessage: c,
                    ...b
                } = e;
                t(474329).Re({
                    bannerStore: t(465361).A
                }), t(262058).m({
                    message: c ? ? t(893658).D.updatingSubscription
                });
                let d = n.id,
                    f = await (0, t(226309).Vv)({
                        environment: i,
                        spaceId: d
                    });
                if (!f) throw Error("Billing data not loaded");
                if ("failed" === (s = l && 0 === l.items.length ? await i.api.callApi({
                        eventName: "cancelSubscription",
                        environment: i,
                        data: {
                            spaceId: n.id,
                            cancelImmediately: e.performImmediately
                        }
                    }) : await i.api.callApi({
                        eventName: "updateSubscription",
                        environment: i,
                        data: { ...b,
                            spaceId: d,
                            desiredState: l ? (0, t(337174).Lm)(l) : void 0,
                            paymentMethodId: (0, t(889503).optionalPaymentMethodIdGivenPaymentData)(a),
                            countryCode: void 0,
                            modalSessionId: o,
                            offerInfo: u,
                            clientVersion: i.device.version,
                            trialData: p,
                            from: r,
                            billingPolicyOverwrites: _ ? {
                                prorationBehavior: "always_invoice",
                                billingCycleAnchor: "now"
                            } : void 0
                        }
                    })).type) throw t(262058).V(), t(647095).Qg(s), Error("An error occurred while updating subscription");
                (0, t(776629).o)({
                    environment: i,
                    spaceStore: n
                });
                let E = await (0, t(226309).Vv)({
                        environment: i,
                        spaceId: d
                    }),
                    y = await t(375592).T.awaitData(i, {
                        userId: i.currentUser.id || ""
                    }),
                    A = (0, t(208117).H)({
                        environment: i,
                        externalOrgSummary: y,
                        spaceStore: n,
                        billingData: E
                    });
                if (!E) throw t(262058).V(), Error("Billing data not loaded");
                let R = n.getPlanType();
                if ((0, t(148760).i)({
                        environment: i,
                        context: {
                            spaceId: d,
                            planType: R,
                            from: r,
                            isMmOrEnt: A,
                            trialData: p,
                            modalId: o,
                            offer: null == u ? void 0 : u.campaign
                        },
                        oldData: f,
                        newData: E,
                        desiredState: l
                    }), t(185995).default.resetData(i, {
                        spaceId: d
                    }), t(262058).V(), m) m();
                else if (p) {
                    if ((0, t(192159).TB)(f) && !(0, t(192159).TB)(E)) {
                        let e = (0, t(192159).AW)(f);
                        "upgrade" === (0, t(262166).qR)({
                            oldTier: e,
                            newTier: (0, t(192159).AI)(E)
                        }) && (0, t(883812).u)({
                            oldTier: (0, t(192159).AW)(f),
                            newTier: (0, t(192159).AI)(E),
                            oldAddOns: (0, t(192159).ji)(f),
                            newAddOns: (0, t(192159).ji)(E)
                        })
                    }
                } else(0, t(883812).u)({
                    oldTier: (0, t(192159).AI)(f),
                    newTier: (0, t(192159).AI)(E),
                    oldAddOns: (0, t(192159).ji)(f),
                    newAddOns: (0, t(192159).ji)(E)
                });
                return t(227947).A.state.open && "requests" === t(227947).A.state.currentPage && t(599754).Ow({
                    currentPage: "billing"
                }), s.data
            }
        },
        148760: (e, s, t) => {
            async function r(e, s) {
                var r, i, n, a, u, o;
                let l = (0, t(336613).XC)().getCurrentUserDomainType(),
                    p = await (0, t(832129).x)({
                        environment: e,
                        spaceId: s.spaceId
                    }) ? ? 1,
                    m = !!s.trialEndDate && s.trialEndDate >= t(906745).DateTime.now();
                (0, t(104310).u)({
                    event: {
                        eventName: "update_subscription_tier",
                        eventProperties: {
                            from: s.from,
                            action: s.action,
                            old_subscription_tier: s.oldSubscriptionTier,
                            new_subscription_tier: s.newSubscriptionTier,
                            old_price_id: s.oldPriceId,
                            new_price_id: s.newPriceId,
                            old_currency: s.oldCurrency,
                            new_currency: s.newCurrency,
                            old_add_ons: s.oldAddOns,
                            new_add_ons: s.newAddOns,
                            old_billing_interval: s.oldBillingInterval,
                            new_billing_interval: s.newBillingInterval,
                            is_cancel_subscription: s.isCancelSubscription,
                            is_professional_team: s.isProfessionalTeamUser,
                            domain_type: l,
                            space_visible_members: p,
                            is_trial: s.isTrial,
                            is_mid_trial: m,
                            is_mm_or_ent_trial: s.isMmOrEnt,
                            trial_end_date: (null == s || null == (r = s.trialEndDate) ? void 0 : r.toISO()) ? ? void 0,
                            trial_id: null == (i = s.trialData) ? void 0 : i.id,
                            trial_from: null == (n = s.trialData) ? void 0 : n.from,
                            modal_id: s.modalId,
                            offer: s.offer
                        }
                    }
                });
                let _ = null == (a = s.oldAddOns) ? void 0 : a.includes("ai"),
                    c = null == (u = s.newAddOns) ? void 0 : u.includes("ai");
                if (!_ && c && ((0, t(104310).u)({
                        event: {
                            eventName: "ai_addon_purchased",
                            eventProperties: s
                        }
                    }), (0, t(336613).XC)().trackGTMEvent(e, {
                        event: "ai_addon_purchased"
                    })), !s.oldSubscriptionTier || !s.newSubscriptionTier) return;
                let {
                    device: b
                } = e;
                if (!(0, t(56281)._6)(s.oldSubscriptionTier) && (0, t(56281)._6)(s.newSubscriptionTier) && "personal" !== s.newSubscriptionTier) {
                    let r = {
                        country: s.addressCountry,
                        productName: s.newPriceId,
                        price: s.creditAmount || 0,
                        spaceId: (0, t(4962).Xw)(s.spaceId),
                        deviceType: b.isTablet ? "tablet" : t(986939).A.isMobile ? "mobile" : "desktop",
                        subscriptionTier: s.newSubscriptionTier
                    };
                    if ("professional" === l && (0, t(104310).u)({
                            event: {
                                eventName: "professional_workspace_upgraded",
                                eventProperties: s
                            }
                        }), (0, t(195857).DO_NOT_USE_trackLegacy)("workspace_upgraded", s), o = { ...r,
                            domainType: l
                        }, (0, t(336613).XC)().trackGTMEvent(e, {
                            event: "workspace_upgraded",
                            data: o
                        }), "professional" === l && (0, t(336613).XC)().trackGTMEvent(e, {
                            event: "professional_workspace_upgraded"
                        }), "team" === s.planType && ((0, t(104310).u)({
                            event: {
                                eventName: "team_workspace_upgraded",
                                eventProperties: s
                            }
                        }), (0, t(336613).XC)().trackGTMEvent(e, {
                            event: "team_workspace_upgraded"
                        })), e.device.isElectron && !(0, t(717274).Pe)()) {
                        let i = (0, t(132702).YO)(t(986939).A.domainBaseUrl, {
                            deviceId: await (0, t(336613).XC)().getDeviceIdForAnalytics(e),
                            oldSubscriptionTier: s.oldSubscriptionTier,
                            newSubscriptionTier: s.newSubscriptionTier,
                            isProfessionalTeamUser: s.isProfessionalTeamUser,
                            deviceType: e.device.deviceType,
                            domainType: l,
                            eventData: r
                        });
                        (0, t(754573).P)(i)
                    }
                }
            }

            function i({
                environment: e,
                context: s,
                oldData: n,
                newData: a,
                desiredState: u
            }) {
                var o;
                let l = (0, t(192159).V9)(n),
                    p = (0, t(192159).AI)(n),
                    m = (0, t(192159).ji)(n),
                    _ = (0, t(192159).k4)(n),
                    c = (0, t(192159).Ry)(n),
                    b = n.email,
                    d = (0, t(958059).j1)(u),
                    f = (0, t(958059).Gf)(u),
                    E = (0, t(958059).V_)(u),
                    y = (0, t(958059).yw)(u),
                    A = (0, t(958059).j8)(u),
                    R = !!(null == u ? void 0 : u.trialEnd),
                    g = a.email,
                    T = !(0, t(192159).Fq)(n) && (0, t(958059).DS)(u),
                    N = (0, t(192159).Fq)(n) && (0, t(958059).DS)(u),
                    M = (0, t(192159).Fq)(n) && !(0, t(958059).DS)(u);
                T && d ? (0, t(104310).u)({
                    event: {
                        eventName: "create_subscription",
                        eventProperties: {
                            plan: d,
                            credit_amount: 0
                        }
                    }
                }) : N ? (0, t(340580).p)(e, {
                    billing_email_changed: b !== g,
                    plan_changed: d !== l,
                    plan_current: d,
                    plan_old: l,
                    currency_code: A,
                    billing_address_changed: !1
                }) : M && l && (0, t(104310).u)({
                    event: {
                        eventName: "cancel_subscription",
                        eventProperties: {
                            plan: {
                                plan: l
                            }.plan
                        }
                    }
                }), r(e, {
                    from: s.from,
                    action: M ? "cancel" : "update",
                    spaceId: s.spaceId,
                    isMmOrEnt: s.isMmOrEnt,
                    planType: s.planType,
                    addressCountry: null == (o = a.address) ? void 0 : o.country,
                    oldSubscriptionTier: p,
                    newSubscriptionTier: f,
                    oldCurrency: c,
                    newCurrency: A,
                    oldPriceId: l,
                    newPriceId: d,
                    oldAddOns: m,
                    newAddOns: E,
                    oldBillingInterval: _,
                    newBillingInterval: y,
                    creditAmount: 0,
                    isProfessionalTeamUser: (0, t(336613).XC)().isProfessionalTeamUser(),
                    isTrial: R,
                    trialEndDate: (0, t(192159).i5)(n),
                    trialData: s.trialData,
                    modalId: s.modalId,
                    offer: s.offer
                })
            }
            t.d(s, {
                i: () => i
            })
        },
        324282: (e, s, t) => {
            t.d(s, {
                A: () => i
            });
            let r = new(t(273917)).U((e, {
                spaceId: s
            }) => `${e.currentUser.id}:${s}`, async (e, {
                spaceId: s
            }) => {
                let t = await e.api.callApi({
                    eventName: "getInvoiceData",
                    environment: e,
                    data: {
                        spaceId: s,
                        type: "upcoming"
                    }
                });
                return "success" === t.type ? t.data.invoiceData : void 0
            });
            t(202146).exposeDebugValue("UpcomingInvoiceStore", r);
            let i = r
        },
        340580: (e, s, t) => {
            t.d(s, {
                p: () => r
            });

            function r(e, s) {
                (0, t(195857).DO_NOT_USE_trackLegacy)("subscription_update_billing", s)
            }
        },
        361200: (e, s, t) => {
            t.r(s), t.d(s, {
                freeAndNoAddOns: () => u,
                intervalSelectEligibilityMap: () => l,
                offerEligibilityMap: () => p
            });
            let r = ["BR", "IN", "ID", "MX", "PH", "AR", "CO", "TR", "PE", "UA", "TH", "CL", "MY", "EG", "ZA", "NG", "PK", "KZ", "MA", "EC", "BD", "VE", "BY"];

            function i(...e) {
                return {
                    type: "and",
                    products: e
                }
            }

            function n(...e) {
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
            let u = a(n(...t(645040).bQ));

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
                p = { ...l,
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
                        productRequirement: i("ai", a(n("business", "enterprise"))),
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
                            start: t(906745).dw.fromObject({
                                days: 3
                            }),
                            end: t(906745).dw.fromObject({
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
                            start: t(906745).dw.fromObject({
                                days: 3
                            }),
                            end: t(906745).dw.fromObject({
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
                            start: t(906745).dw.fromObject({
                                days: 3
                            }),
                            end: t(906745).dw.fromObject({
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
                        productRequirement: i("free", a("ai")),
                        productsOfferCanApplyTo: n("plus", "business"),
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
                        productRequirement: i("free", a("ai")),
                        productsOfferCanApplyTo: n("plus", "business"),
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
                        productRequirement: i("free", a("ai"), a("sites_custom_hostnames")),
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
                        productRequirement: i("plus", "ai"),
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
                        productRequirement: i("plus", "ai"),
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
                        productsOfferCanApplyTo: n("business", i("plus", "ai")),
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
                        productsOfferCanApplyTo: n("business", i("plus", "ai")),
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
                        productsOfferCanApplyTo: n("business", i("plus", "ai")),
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
                        productsOfferCanApplyTo: n("plus", "business"),
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
                        productRequirement: i("plus", a("ai")),
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
                        productsOfferCanApplyTo: i("plus", "ai"),
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
                        productRequirement: i("plus", a("ai")),
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
                        productRequirement: i("plus", a("ai")),
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
                        productRequirement: i("plus", a("ai")),
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
                        productRequirement: i("plus", a("ai")),
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
                        productRequirement: n("free", "plus"),
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
                        productRequirement: n("free", "plus"),
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
                        productRequirement: n("free", "plus", "student"),
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
                        productRequirement: n("free", "plus", "student"),
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
                        productRequirement: n("free", "plus"),
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
        465424: (e, s, t) => {
            t.d(s, {
                R: () => r
            });

            function r(e, s) {
                return (0, t(192159).N4)(e, {
                    subscription: s
                })
            }
        },
        567516: (e, s, t) => {
            t.d(s, {
                L: () => r
            });
            let r = new(t(273917)).U((e, {
                spaceId: s
            }) => `${e.currentUser.id}:${s}`, async (e, {
                spaceId: s
            }) => {
                var t;
                let r = await e.api.callApi({
                    eventName: "getBillingHistory",
                    environment: e,
                    data: {
                        spaceId: s,
                        limit: 20
                    }
                });
                return "success" === r.type ? null == (t = r.data) ? void 0 : t.events : void 0
            });
            t(202146).exposeDebugValue("BillingHistoryStore", r)
        },
        672965: (e, s, t) => {
            t.d(s, {
                q: () => n
            }), t(898992), t(672577);
            var r = () => t(546605);
            class i extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                close() {
                    this.state.open && this.setState({
                        open: !1
                    })
                }
                open({
                    oldTier: e,
                    newTier: s,
                    oldAddOns: r,
                    newAddOns: i
                }) {
                    var n, a, u, o;
                    if ((n = s) && ["plus", "enterprise", "business", "student"].includes(n) && (a = e, u = s, a && u && "upgrade" === (0, t(262166).qR)({
                            oldTier: a,
                            newTier: u
                        }))) return this.setState({
                        productUpgrade: s,
                        open: !0
                    }), !0;
                    if (i.length > r.length) {
                        let e = i.find(e => !r.includes(e));
                        if ((o = e) && ["ai"].includes(o)) return this.setState({
                            productUpgrade: e,
                            open: !0
                        }), !0
                    }
                    return !1
                }
            }
            let n = new i
        },
        776629: (e, s, t) => {
            t.d(s, {
                o: () => i
            });
            let r = new(t(273917)).U((e, {
                spaceId: s
            }) => `${e.currentUser.id}:${s}`, async (e, {
                spaceId: s
            }) => {
                if (!e.currentUser.isLoggedIn()) return;
                let t = await e.api.callCellCompatibleApi({
                    eventName: "getSpaceBlockUsage",
                    environment: e,
                    data: {
                        spaceId: s
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: s
                    }
                });
                if ("success" === t.type) return t.data
            }, {
                dontCacheUndefined: !0
            });
            async function i({
                environment: e,
                spaceStore: s
            }) {
                let n = s.id;
                t(653828).H.setState({ ...t(653828).H.state,
                    status: "init"
                }), await Promise.all([t(829489).$W({
                    environment: e,
                    spaceId: n
                }), (0, t(109955).x)(e, n), t(122657).c.resetData(e, {
                    spaceId: n
                }), t(567516).L.resetData(e, {
                    spaceId: n
                }), t(324282).A.resetData(e, {
                    spaceId: n
                }), t(949830).A.resetData(e, {
                    spaceId: n,
                    userId: e.currentUser.id
                }), t(54068).T.resetData(e, {
                    spaceId: n
                }), r.resetData(e, {
                    spaceId: n
                }), t(377292).A.resetData(e, {
                    spaceId: n
                })])
            }(0, t(202146).exposeDebugValue)("BlockUsageStore", r)
        },
        883812: (e, s, t) => {
            t.d(s, {
                u: () => r
            });

            function r(e) {
                return !!(0, t(717274).Pe)() && t(672965).q.open(e)
            }
        },
        893658: (e, s, t) => {
            t.d(s, {
                D: () => r
            });
            let r = (0, t(109939).YK)({
                updatingSubscription: {
                    id: "subscriptionSettings.updatingSubscriptionMessage",
                    defaultMessage: "Getting your workspace ready…"
                },
                paymentMethodUpdateAuthFailed: {
                    id: "subscriptionSettings.paymentMethodUpdateAuthFailedMessage",
                    defaultMessage: "We could not update your payment method. Please try again or contact support."
                },
                verifyingEligibility: {
                    id: "subscriptionSettings.verifyingEligibilityMessage",
                    defaultMessage: "Verifying eligibility…"
                },
                educationPlusFree: {
                    id: "subscriptionSettings.educationPlusFreeMessage",
                    defaultMessage: "You are now subscribed to Notion’s Education plan for free"
                },
                finishingUp: {
                    id: "subscription.upgrade.finishing",
                    defaultMessage: "Finishing up…"
                },
                useAnotherPaymentMethod: {
                    id: "subscriptionSettings.useAnotherPaymentMethodMessage",
                    defaultMessage: "We could not process this payment method. Please use a different payment method."
                }
            })
        },
        958059: (e, s, t) => {
            function r(e) {
                return (0, t(192159).Fq)({
                    subscription: e
                })
            }

            function i(e) {
                return (0, t(192159).Ry)({
                    clock: void 0,
                    subscription: e,
                    trial: void 0
                })
            }

            function n({
                subscriptionState: e,
                logFunction: s,
                spaceId: r
            }) {
                let i = c(e);
                return (0, t(192159).yB)({
                    billingData: {
                        clock: void 0,
                        subscription: i,
                        trial: void 0
                    },
                    logFunction: s,
                    spaceId: r
                })
            }

            function a(e) {
                return (0, t(192159).q8)({
                    subscription: e
                })
            }

            function u(e) {
                return (0, t(192159).k4)({
                    subscription: e
                })
            }

            function o(e) {
                return (0, t(192159).V9)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function l(e) {
                return (0, t(192159).d$)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function p(e) {
                return (0, t(192159).ji)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function m(e) {
                return (0, t(192159).AI)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                })
            }

            function _(e, s) {
                return (0, t(192159).KH)({
                    clock: void 0,
                    subscription: c(e),
                    trial: void 0
                }, s)
            }

            function c(e) {
                return e ? { ...e,
                    trialEnd: void 0
                } : void 0
            }
            t.d(s, {
                DS: () => r,
                Fe: () => l,
                GB: () => n,
                Gf: () => m,
                SX: () => u,
                V_: () => p,
                j1: () => o,
                j8: () => i,
                yp: () => _,
                yw: () => a
            }), t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698), t(898992), t(354520), t(581454)
        },
        982473: (e, s, t) => {
            function r(e, s) {
                var r, i;
                return (r = e.items, i = s.items, (0, t(627179).qq)({
                    as: r,
                    aKey: e => t(192159).IE(e),
                    bs: i,
                    bKey: e => t(192159).IE(e)
                })).some(([e, s]) => (function(e, s) {
                    if (!e) return !1;
                    if (!s) return !0;
                    let r = t(192159).xp(e),
                        i = t(192159).xp(s);
                    return !!r && !!i && t(262166).o3[r] > t(262166).o3[i]
                })(e, s))
            }

            function i(e, {
                trialEnd: s,
                items: t
            }, r) {
                return {
                    trialEnd: s,
                    items: t.map(s => {
                        let t = l(e, {
                            interval: r,
                            product: s.price.product,
                            currency: s.price.unitAmount.currencyCode
                        });
                        return { ...s,
                            price: t
                        }
                    })
                }
            }

            function n(e, s) {
                let r = e.items.filter(e => t(192159).IE(e) !== s);
                return { ...e,
                    items: r
                }
            }

            function a(e, s) {
                let r = t(192159).IE(s),
                    i = s.price.product,
                    n = e.items.filter(e => {
                        let s = e.price.product,
                            n = t(192159).IE(e),
                            a = "ai" === s && !t(192159).$0(e.price.externalId);
                        return r !== n && !(a && ("business" === i || "enterprise" === i))
                    });
                return { ...e,
                    items: n.concat([s])
                }
            }

            function u(e) {
                let {
                    state: s,
                    prices: r,
                    quantities: i,
                    params: {
                        planBillingInterval: n,
                        currency: a
                    },
                    products: u
                } = e, o = u.map(e => {
                    var s;
                    return "personal_free" === (s = e) || "team_free" === s ? "free" : s
                }), m = o.map(e => t(192159).Mr(e)), _ = s.items.filter(e => {
                    let s = e.price.product,
                        r = t(192159).IE(e),
                        i = m.includes(r),
                        n = "ai" === s && (o.includes("business") || o.includes("enterprise"));
                    return !i && !n
                }), c = o.map(e => p(l(r, {
                    interval: "ai_credit_pack" === e ? "month" : n,
                    currency: a,
                    product: e
                }), i));
                return { ...s,
                    items: _.concat(c)
                }
            }

            function o(e) {
                let {
                    prices: s,
                    billingData: r,
                    product: i
                } = e, n = t(192159).Ry(r), a = t(192159).Mr(i), u = t(192159).lQ(r), o = (0, t(465424).R)(a, u), l = t(192159).N4(a, r), p = o ? ? l;
                return s.find(e => e.product === i && e.billingInterval === p && e.unitAmount.currencyCode === n)
            }

            function l(e, {
                interval: s,
                product: t,
                currency: r
            }) {
                var i = e.find(e => e.product === t && e.billingInterval === s && e.unitAmount.currencyCode === r),
                    n = `Unable to find price with interval: ${s}, product: ${t}, currency: ${r}`;
                if (null == i) throw Error(n);
                return i
            }

            function p(e, s) {
                let {
                    numSeats: r,
                    numCustomHostnames: i,
                    numAiCreditPacks: n
                } = s;
                switch ((0, t(475413).vK)(e.product)) {
                    case "public_domain_custom_hostnames":
                        return {
                            price: e,
                            quantity: i
                        };
                    case "ai_credit_pack_units":
                        return {
                            price: e,
                            quantity: n
                        };
                    default:
                        return {
                            price: e,
                            quantity: r
                        }
                }
            }
            t.d(s, {
                V5: () => r,
                Vr: () => i,
                ef: () => u,
                gL: () => n,
                ng: () => p,
                vH: () => a,
                vk: () => l,
                z2: () => o
            }), t(16280), t(898992), t(354520), t(672577), t(581454), t(737550)
        }
    }
]);