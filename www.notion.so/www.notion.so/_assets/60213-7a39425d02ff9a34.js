"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [60213], {
        760213: (e, t, n) => {
            n.d(t, {
                Y: () => r,
                V: () => l
            });
            let a = (0, n(109939).YK)({
                cancellingTrial: {
                    defaultMessage: "Cancelling your trial.",
                    id: "cancelTrial.error.message"
                },
                cancellationConfirmationMessage: {
                    defaultMessage: "Are you sure you want to cancel your trial?",
                    id: "cancelTrial.confirmation.message"
                },
                yes: {
                    defaultMessage: "Yes, cancel my trial",
                    id: "cancelTrial.yes.confirmation.message"
                }
            });
            async function r(e) {
                let {
                    environment: t,
                    billingData: a,
                    sessionId: r
                } = e, l = (0, n(328765).S)();
                if (!l) return;
                if (!(0, n(192159).pm)(a.subscription) || !l) return n(647095).f1((0, n(993638).e9)());
                let i = (0, n(192159).PP)(a);
                await n(371151).nV({
                    environment: t,
                    from: "space_settings-billing_tab",
                    spaceStore: l,
                    desiredState: i,
                    sessionId: r
                }), n(436555).D6({
                    label: (0, n(993638).MA)()
                })
            }
            async function l(e, t) {
                let r = (0, n(328765).S)();
                r && (n(262058).m({
                    message: a.cancellingTrial
                }), await n(371151).nV({
                    environment: e,
                    spaceStore: r,
                    from: "space_settings-plans_tab",
                    desiredState: {
                        items: [],
                        trialEnd: void 0
                    },
                    sessionId: t
                }), n(262058).V())
            }
        },
        993096: (e, t, n) => {
            n.d(t, {
                FK: () => M,
                Mb: () => y,
                Wo: () => a,
                aZ: () => r,
                ze: () => h
            });
            let a = 500,
                r = 100,
                l = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                i = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                s = {
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
                o = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "personal_ai"
                    },
                    upsell: void 0
                },
                c = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                d = {
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
                g = {
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
                P = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                m = {
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
                v = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                A = {
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
                let t = (0, n(192159).YF)(e),
                    a = (0, n(192159).N8)(e),
                    r = (0, n(192159).eh)(e, "plus"),
                    h = (0, n(192159).eh)(e, "business"),
                    M = (0, n(192159).eh)(e, "enterprise"),
                    T = (0, n(192159).eh)(e, "ai"),
                    I = (0, n(192159).eh)(e, "student"),
                    w = (0, n(192159).eh)(e, "personal");
                if (a)
                    if (T && (r || h || M)) return l;
                    else if (e && (0, n(192159).PB)(e)) return M ? i : s;
                else return u;
                if (I)
                    if (T) return p;
                    else return g;
                if (h)
                    if (T) return S;
                    else return P;
                if (M)
                    if (T) return m;
                    else return b;
                if (t)
                    if (T && w) return o;
                    else if (w && !T) return c;
                else if (T && !w) return d;
                else return f;
                else if (T) return v;
                else return A
            }

            function h({
                billingData: e
            }) {
                var t;
                return (null == (t = y({
                    billingData: e
                })) || null == (t = t.upsell) ? void 0 : t.product) === "ai"
            }

            function M(e) {
                return e * r
            }
        },
        993638: (e, t, n) => {
            n.d(t, {
                Ft: () => P,
                HN: () => p,
                MA: () => c,
                Sk: () => f,
                Yn: () => b,
                e9: () => o,
                eJ: () => m,
                g9: () => d,
                su: () => S
            }), n(944114), n(898992), n(672577), n(737550);
            let a = (0, n(109939).YK)({
                unableToCancelError: {
                    id: "midtermSubscriptionHelpers.unableToCancel",
                    defaultMessage: "We cannot cancel your scheduled changes right now. Please contact support for more help."
                },
                cancellationSuccess: {
                    id: "midtermSubscriptionHelpers.cancellationSucceeded",
                    defaultMessage: "Pending changes have been canceled"
                }
            });

            function r(e) {
                return (0, n(262166).dL)(e) ? "free" : (0, n(262166).wb)(e) ? "education" : (0, n(262166).sP)(e) ? "singlePlayerPlus" : (0, n(262166).$P)(e) ? "plus" : (0, n(262166).tL)(e) ? "business" : (0, n(262166).OX)(e) ? "enterprise" : "legacy"
            }
            let l = (0, n(109939).YK)({
                    freePlan: {
                        defaultMessage: "Free Plan",
                        id: "freePlan.title"
                    },
                    educationPlusPlan: {
                        defaultMessage: "Education Plus Plan",
                        id: "educationPlusPlan.title"
                    },
                    plusPlan: {
                        defaultMessage: "Plus Plan",
                        id: "plusPlan.title"
                    },
                    businessPlan: {
                        id: "businessPlan.title",
                        defaultMessage: "Business Plan"
                    },
                    enterprisePlan: {
                        defaultMessage: "Enterprise Plan",
                        id: "enterprisePlan.label"
                    },
                    legacyPlan: {
                        defaultMessage: "Legacy Plan",
                        id: "legacyPlan.label"
                    }
                }),
                i = {
                    free: {
                        planTitle: l.freePlan
                    },
                    singlePlayerPlus: {
                        planTitle: l.plusPlan
                    },
                    education: {
                        planTitle: l.educationPlusPlan
                    },
                    plus: {
                        planTitle: l.plusPlan
                    },
                    business: {
                        planTitle: l.businessPlan
                    },
                    enterprise: {
                        planTitle: l.enterprisePlan
                    },
                    legacy: {
                        planTitle: l.legacyPlan
                    }
                },
                s = (0, n(109939).YK)({
                    notionAI: {
                        defaultMessage: "Notion AI",
                        id: "notionAI.title"
                    },
                    removeAI: {
                        defaultMessage: "Remove AI",
                        id: "notionAI.remove.title"
                    }
                }),
                u = (0, n(109939).YK)({
                    month: {
                        defaultMessage: "Monthly billing",
                        id: "billingInterval.monthly"
                    },
                    year: {
                        defaultMessage: "Annual billing",
                        id: "billingInterval.annual"
                    }
                });

            function o() {
                return n(962299).A.formatMessage(a.unableToCancelError)
            }

            function c() {
                return n(962299).A.formatMessage(a.cancellationSuccess)
            }

            function d(e) {
                let t = (0, n(192159).pm)(null == e ? void 0 : e.subscription);
                if (!t) return;
                let a = (0, n(192159).PP)(e),
                    r = (0, n(192159).lQ)(e);
                return {
                    oldTier: (0, n(958059).Gf)(a) ? ? "free",
                    newTier: (0, n(958059).Gf)(r) ? ? "free",
                    oldAIAddOn: (0, n(958059).V_)(a).find(e => "ai" === e),
                    newAIAddOn: (0, n(958059).V_)(r).find(e => "ai" === e),
                    oldAiCreditPackQuantity: (0, n(192159).Oq)(a.items),
                    newAiCreditPackQuantity: (0, n(192159).Oq)(r.items),
                    oldInterval: (0, n(958059).yw)(a),
                    newInterval: (0, n(958059).yw)(r),
                    phaseOneEndDate: t.startDate
                }
            }

            function f(e) {
                let t = d(e);
                return !!t && !!t.newInterval && t.oldInterval !== t.newInterval
            }

            function p(e) {
                let t = d(e);
                return !!t && t.oldTier !== t.newTier
            }
            let g = (0, n(109939).YK)({
                bannerQuantityChange: {
                    defaultMessage: "Notion Credits: {oldAiCreditsQuantity} → {newAiCreditsQuantity}",
                    id: "bannerQuantityMessages.bannerQuantityChange"
                }
            });

            function S(e) {
                let t, a, l = d(e),
                    o = [];
                if (!l) return {
                    scheduledChanges: o,
                    periodEndDate: null
                };
                let {
                    newTier: c,
                    oldTier: f,
                    oldAIAddOn: p,
                    newAIAddOn: S,
                    oldAiCreditPackQuantity: P,
                    newAiCreditPackQuantity: m,
                    oldInterval: b,
                    newInterval: v,
                    phaseOneEndDate: A
                } = l;
                f !== c && o.push(function(e, t) {
                    let a = r(e),
                        l = n(962299).A.formatMessage(i[a].planTitle);
                    if (!t) return "";
                    let s = r(t),
                        u = n(962299).A.formatMessage(i[s].planTitle);
                    return `${l} ${(0,n(619157).A1)()?"←":"→"} ${u}`
                }(f, c)), p !== S && o.push((t = n(962299).A.formatMessage(p ? s.notionAI : s.removeAI), a = n(962299).A.formatMessage(S ? s.notionAI : s.removeAI), `${t} ${(0,n(619157).A1)()?"←":"→"} ${a}`));
                let y = (0, n(192159).qV)(e).isRecurring,
                    h = (0, n(192159).Le)(e).isRecurring,
                    M = y !== h;
                return (P !== m || M) && o.push(function(e) {
                    let {
                        oldAiCreditPackQuantity: t,
                        newAiCreditPackQuantity: a,
                        oldStateHasAllocatedCredits: r,
                        newStateHasAllocatedCredits: l
                    } = e, i = r ? n(993096).Wo : 0, s = l ? n(993096).Wo : 0;
                    return n(962299).A.formatMessage(g.bannerQuantityChange, {
                        oldAiCreditsQuantity: ((0, n(993096).FK)(t) + i).toLocaleString(),
                        newAiCreditsQuantity: ((0, n(993096).FK)(a) + s).toLocaleString()
                    })
                }({
                    oldAiCreditPackQuantity: P,
                    newAiCreditPackQuantity: m,
                    oldStateHasAllocatedCredits: y,
                    newStateHasAllocatedCredits: h
                })), b !== v && o.push(function(e, t) {
                    if (!e || !t) return "";
                    let a = n(962299).A.formatMessage("month" === e ? u.month : u.year),
                        r = n(962299).A.formatMessage("month" === t ? u.month : u.year);
                    return `${a} ${(0,n(619157).A1)()?"←":"→"} ${r}`
                }(b, v)), {
                    scheduledChanges: o,
                    periodEndDate: A
                }
            }

            function P(e, t) {
                var a;
                if (!e) return;
                let r = (0, n(192159).PP)(e).items,
                    l = (0, n(192159).lQ)(e).items;
                if ((0, n(192159).HO)(r, l).some(([e, a]) => (0, n(192159).IE)(e ? ? a) === t && e && !a)) return null == (a = (0, n(192159).pm)(e.subscription)) ? void 0 : a.startDate
            }

            function m({
                billingData: e
            }) {
                let t = (0, n(226309).a9)(e);
                if (!t || (0, n(192159).et)(e)) return !1;
                let a = (0, n(192159).bO)(t),
                    r = (0, n(192159).N8)(t);
                return !a && !r
            }

            function b(e) {
                let t = (0, n(192159).V9)(e),
                    a = (0, n(192159).ji)(e).length > 0;
                return !(t && n(126365).xd.includes(t)) || !!(a && n(126365).iV.includes(t)) || !1
            }
        }
    }
]);