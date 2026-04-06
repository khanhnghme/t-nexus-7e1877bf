"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [19541, 46352], {
        90119: (e, t, s) => {
            function r(e) {
                let {
                    campaign: t,
                    products: s,
                    billingInterval: r
                } = e;
                return !!t && a(t, s) && u(t, r)
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

            function o(e, t) {
                return !!e && a(e, [t])
            }

            function u(e, t) {
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
                let o = function(e) {
                    if (e) return s(361200).offerEligibilityMap[e].productsOfferCanApplyTo
                }(t.campaign);
                return !!o && (0, s(528815).Z6)(o, a)
            }

            function m(e) {
                return "claimed" === e.type
            }
            s.d(t, {
                FV: () => o,
                GK: () => m,
                MN: () => a,
                QK: () => l,
                Uh: () => r,
                d$: () => n,
                ex: () => i,
                sZ: () => u
            }), s(898992), s(354520)
        },
        124108: (e, t, s) => {
            s.d(t, {
                N: () => o
            });
            var r = s(296540),
                n = s(474848);
            let i = {
                    alignItems: "center",
                    borderRadius: s(986939).A.isMobile ? 12 : 6,
                    boxShadow: void 0,
                    display: "flex",
                    flexShrink: 0,
                    fontSize: s(986939).A.isMobile ? 16 : 14,
                    fontWeight: s(699422).Wy.medium,
                    height: s(986939).A.isMobile ? 48 : 32,
                    justifyContent: "center",
                    lineHeight: 1.2,
                    paddingInlineStart: s(986939).A.isMobile ? 20 : 12,
                    paddingInlineEnd: s(986939).A.isMobile ? 20 : 12,
                    whiteSpace: "nowrap"
                },
                a = {
                    destructiveButtonDefault: { ...i,
                        background: s(632079).Tj.red.background.accentPrimary,
                        color: s(632079).oZ.white,
                        fill: s(632079).oZ.lightTextColor
                    },
                    destructiveButtonHovered: {
                        background: "rgba(235, 87, 87, 0.8)"
                    },
                    destructiveButtonPressed: {
                        background: s(632079).oZ.red
                    },
                    primaryButtonDefault: { ...i,
                        background: s(632079).Tj.blue.background.accentPrimary,
                        color: s(632079).oZ.white,
                        fill: s(632079).oZ.lightTextColor
                    },
                    primaryButtonHovered: {
                        background: s(632079).Tj.blueButtonHoveredBackground
                    },
                    primaryButtonPressed: {
                        background: s(632079).Tj.blueButtonPressedBackground
                    },
                    secondaryButtonDefault: { ...i,
                        color: s(632079).Tj.text.secondary,
                        fill: s(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...i,
                        background: "transparent",
                        color: s(632079).Tj.text.primary,
                        fill: s(632079).Tj.text.primary
                    },
                    plainButtonHovered: {
                        background: s(632079).Tj.whiteButtonHoveredBackground
                    },
                    plainButtonPressed: {
                        background: s(632079).Tj.whiteButtonPressedBackground
                    },
                    outlineButtonDefault: { ...i,
                        background: s(632079).Tj.whiteButtonBackground,
                        color: s(632079).Tj.text.primary,
                        fill: s(632079).Tj.text.primary,
                        border: `1px solid ${s(632079).Tj.border.primary}`
                    },
                    outlineButtonHovered: {
                        background: s(632079).Tj.whiteButtonHoveredBackground
                    },
                    outlineButtonPressed: {
                        background: s(632079).Tj.whiteButtonPressedBackground
                    },
                    blackButtonDefault: { ...i,
                        background: s(632079).Tj.primaryBlack,
                        color: s(632079).oZ.white,
                        fill: s(632079).Tj.primaryBlack
                    },
                    blackButtonHovered: {
                        background: s(632079).oZ.frontBlackButtonBackgroundHovered
                    },
                    blackButtonPressed: {
                        background: s(632079).oZ.frontBlackButtonBackgroundPressed
                    },
                    style0: {
                        marginInlineEnd: 4
                    }
                };

            function o(e) {
                let {
                    buttonInfo: t,
                    ...i
                } = e, o = (0, r.useContext)(s(19187).e), u = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, l = (0, r.useMemo)(() => ({
                    destructive: {
                        default: a.destructiveButtonDefault,
                        hovered: a.destructiveButtonHovered,
                        pressed: a.destructiveButtonPressed
                    },
                    primary: {
                        default: a.primaryButtonDefault,
                        hovered: a.primaryButtonHovered,
                        pressed: a.primaryButtonPressed
                    },
                    secondary: {
                        default: a.secondaryButtonDefault
                    },
                    dismiss: {
                        default: a.secondaryButtonDefault
                    },
                    outline: {
                        default: a.outlineButtonDefault,
                        hovered: a.outlineButtonHovered,
                        pressed: a.outlineButtonPressed
                    },
                    black: {
                        default: a.blackButtonDefault,
                        hovered: a.blackButtonHovered,
                        pressed: a.blackButtonPressed
                    },
                    plain: {
                        default: a.plainButtonDefault,
                        hovered: a.plainButtonHovered,
                        pressed: a.plainButtonPressed
                    }
                }), []);
                if ("dismiss" === t.buttonType) {
                    let e = t.label ? ? (0, n.jsx)(s(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        r = t.combinedStyles ? ? l.dismiss;
                    return (0, n.jsx)(s(64960).Ay, {
                        style: null == r ? void 0 : r.default,
                        hoveredStyle: null == r ? void 0 : r.hovered,
                        pressedStyle: null == r ? void 0 : r.pressed,
                        onClick: o,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        r = t.combinedStyles ? ? l[e];
                    return (0, n.jsxs)(s(64960).Ay, {
                        style: { ...null == r ? void 0 : r.default,
                            ...u
                        },
                        hoveredStyle: null == r ? void 0 : r.hovered,
                        pressedStyle: null == r ? void 0 : r.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...i,
                        children: [t.isLoading ? (0, n.jsx)(s(517334).k, {
                            style: a.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        132108: (e, t, s) => {
            s.d(t, {
                P: () => r
            });
            let r = s(546605).Store.createValue(!0, {
                name: "IsAiEligibleStore"
            })
        },
        209590: (e, t, s) => {
            s.d(t, {
                Z: () => a
            }), s(296540);
            var r = s(474848);
            let n = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                i = {
                    position: "relative"
                };

            function a(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: a,
                    iconColorVariant: o = "secondary",
                    title: u,
                    variantName: l = "default"
                } = e;
                return t || u ? (0, r.jsxs)(s(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...i
                    },
                    children: [t ? (0, r.jsx)(s(708966).Q, {
                        iconGroup: t,
                        colorPalette: a,
                        colorVariant: o,
                        variantName: l,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, u ? (0, r.jsx)(s(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: n,
                        children: u
                    }) : null]
                }) : null
            }
        },
        314084: (e, t, s) => {
            s.d(t, {
                t: () => i
            }), s(296540);
            var r = s(474848);
            let n = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function i(e) {
                let {
                    children: t,
                    footer: i,
                    header: a,
                    showDismissButton: o = !0,
                    sizeRange: u,
                    gap: l = 24
                } = e;
                return (0, r.jsxs)(s(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == u ? void 0 : u.minHeight,
                    maxHeight: null == u ? void 0 : u.maxHeight,
                    minWidth: null == u ? void 0 : u.minWidth,
                    maxWidth: null == u ? void 0 : u.maxWidth,
                    gap: l,
                    style: n,
                    className: "autolayout-fill-width",
                    children: [(0, r.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: a
                    }), t ? (0, r.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, r.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, i ? (0, r.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: i
                    }) : null, o ? (0, r.jsx)(s(226512).R, {}) : null]
                })
            }
        },
        361200: (e, t, s) => {
            s.r(t), s.d(t, {
                freeAndNoAddOns: () => o,
                intervalSelectEligibilityMap: () => l,
                offerEligibilityMap: () => m
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
            let o = a(i(...s(645040).bQ));

            function u(e) {
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
                        productRequirement: o,
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
                        productRequirement: o,
                        productsOfferCanApplyTo: "business",
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "aimn_offer",
                            groups: ["on", "exploding"]
                        }
                    }
                },
                m = { ...l,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                        productRequirement: o,
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
                    plus_expansion_one_member: { ...u("plus"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "plus_expansion_offer",
                            groups: ["one_member"]
                        }
                    },
                    plus_expansion_two_member: { ...u("plus"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "plus_expansion_offer",
                            groups: ["two_member"]
                        }
                    },
                    business_expansion_one_member: { ...u("business"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_expansion_offer",
                            groups: ["one_member"]
                        }
                    },
                    business_expansion_two_member: { ...u("business"),
                        statsigDetails: {
                            statsigType: "experiment",
                            id: "business_expansion_offer",
                            groups: ["two_member"]
                        }
                    }
                }
        },
        362650: (e, t, s) => {
            function r(e, t) {
                var r;
                let n = s(92513).JW();
                r = {
                    modal_id: n,
                    currency_code: s(653828).H.selectedCurrencyCodeStoreState,
                    ...t.analyticsArgs,
                    desiredProducts: t.desiredProducts,
                    desiredInterval: t.desiredInterval
                }, (0, s(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_open",
                        eventProperties: r
                    }
                }), s(856863).j.open({
                    modalId: n,
                    ...t
                })
            }

            function n(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_exit",
                        eventProperties: {
                            modal_id: {
                                modalId: t
                            }.modalId
                        }
                    }
                }), s(856863).j.setState({
                    open: !1
                })
            }
            s.d(t, {
                A: () => n,
                o: () => r
            })
        },
        582471: (e, t, s) => {
            s.d(t, {
                Y: () => a
            }), s(296540);
            var r = s(474848);
            let n = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                i = {
                    position: "relative"
                };

            function a(e) {
                let {
                    iconAndTitle: t,
                    description: a
                } = e;
                return t || a ? (0, r.jsxs)(s(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: i,
                    children: [t, a ? (0, r.jsx)(s(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: n,
                        children: a
                    }) : null]
                }) : null
            }
        },
        591637: (e, t, s) => {
            s.d(t, {
                a: () => i
            }), s(898992), s(354520), s(581454), s(296540);
            var r = s(474848);
            let n = {
                style0: {
                    width: 200
                },
                style1: {
                    minWidth: 200
                },
                caption: {
                    color: s(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: s(699422).Wy.regular,
                    lineHeight: "15px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function i(e) {
                var t;
                let {
                    caption: i,
                    layout: a,
                    sectionGap: o,
                    secondaryButtonTooltip: u
                } = e, l = e.primaryButtons.filter(Boolean), m = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != l && l.length) && !(null != m && m.length) && !i) return null;
                let p = (null == m ? void 0 : m.length) > 0;
                return "vertical" === a ? (0, r.jsxs)(s(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: o ? ? 8,
                        ...n.positionRelative
                    },
                    children: [(0, r.jsxs)(s(4458).VP, {
                        style: {
                            gap: 7,
                            ...n.positionRelative
                        },
                        children: [l.map((e, t) => (0, r.jsx)(s(124108).N, {
                            buttonInfo: e
                        }, t)), i ? (0, r.jsx)("div", {
                            style: n.caption,
                            children: i
                        }) : null]
                    }), p ? u ? (0, r.jsx)(s(51831).m, {
                        content: () => u,
                        textWrap: !0,
                        style: n.style0,
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: m.map((e, t) => (0, r.jsx)(s(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, r.jsx)("div", {
                        children: m.map((e, t) => (0, r.jsx)(s(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === a ? (0, r.jsxs)(s(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: o ? ? 8,
                        ...n.positionRelative
                    },
                    children: [null == m ? void 0 : m.map((e, t) => (0, r.jsx)(s(124108).N, {
                        buttonInfo: e
                    }, t)), l.map((e, t) => (0, r.jsx)(s(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === a ? (0, r.jsxs)(s(4458).fI, {
                    justifyContent: "space-between",
                    children: [p ? u ? (0, r.jsx)(s(51831).m, {
                        content: () => u,
                        textWrap: !0,
                        style: n.style1,
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: null == m ? void 0 : m.map((e, t) => (0, r.jsx)(s(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, r.jsx)("div", {
                        children: null == m ? void 0 : m.map((e, t) => (0, r.jsx)(s(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, r.jsx)("div", {
                        children: l.map((e, t) => (0, r.jsx)(s(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, s(722371).HB)(a)
            }
        },
        687245: (e, t, s) => {
            s.d(t, {
                r: () => r
            });
            let r = (0, s(104509).xh)("arrowInCircleDown", {
                default: {
                    loader: () => s.e(96029).then(s.bind(s, 725111))
                },
                small: {
                    loader: () => s.e(96029).then(s.bind(s, 152849))
                },
                fill: {
                    loader: () => s.e(96029).then(s.bind(s, 477507))
                },
                fillSmall: {
                    loader: () => s.e(96029).then(s.bind(s, 605626))
                }
            }, ["arrow", "circle", "down", "direction", "pointer", "downgrade"])
        },
        689087: (e, t, s) => {
            s.d(t, {
                QJ: () => d,
                TI: () => u
            }), s(944114), s(581454);
            var r = () => s(975162);
            let n = 0,
                i = "clipboard",
                a = {
                    debug: !!s(986939).A.isDevelopingInAirplaneMode,
                    responseText: i,
                    showErrorCode: !1,
                    delayBetweenChunks: 20,
                    chunkSize: 5,
                    numLoremIpsums: 3
                },
                o = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta auctor sem vel efficitur. Vivamus efficitur eros sed erat efficitur efficitur. Vivamus et augue vel est efficitur efficitur.";

            function u() {
                return a
            }
            async function l() {
                try {
                    return await navigator.clipboard.readText()
                } catch (e) {
                    return
                }
            }

            function m(e, t) {
                let s = Math.ceil(e.length / t),
                    r = Array(s);
                for (let n = 0, i = 0; n < s; ++n, i += t) r[n] = e.substr(i, t);
                return r
            }

            function p(e) {
                return e.map(e => ({
                    type: "success",
                    p: "padding",
                    completion: e,
                    inferenceId: "mock"
                }))
            }
            async function d({
                environment: e,
                data: t
            }) {
                console.log("Retrieving fake completion for data", t);
                let {
                    context: u
                } = t, b = u.selectedText, c = [], {
                    responseText: _
                } = a;
                if (_ === i && (_ = await l() ? ? "Unable to retrieve clipboard text."), void 0 === _ && (c.push({
                        type: "success",
                        p: "padding",
                        completion: "\n",
                        inferenceId: "mock"
                    }, {
                        type: "success",
                        p: "padding",
                        completion: "this is ",
                        inferenceId: "mock"
                    }, {
                        type: "success",
                        p: "padding",
                        completion: "fake ",
                        inferenceId: "mock"
                    }, {
                        type: "success",
                        p: "padding",
                        completion: `streaming response ${n++}.`,
                        inferenceId: "mock"
                    }), s(986939).A.isDevelopingInAirplaneMode && c.push({
                        type: "success",
                        p: "padding",
                        completion: "\n\nTo see a real AI response, run the server with `--airplaneMode=false`.",
                        inferenceId: "mock"
                    }), "string" == typeof b))
                    for (let e of (c.push({
                            type: "success",
                            p: "padding",
                            completion: "\n\nHere is the text you selected:\n\n",
                            inferenceId: "mock"
                        }), m(b, a.chunkSize))) c.push({
                        type: "success",
                        completion: e,
                        p: "padding",
                        inferenceId: "mock"
                    });
                if (a.showErrorCode) c.push({
                    type: "error",
                    message: "alas",
                    errorCode: a.showErrorCode,
                    isRetryable: !1
                });
                else if (void 0 === _)
                    for (let e = 0; e < a.numLoremIpsums; e++) c.push(...p([`

${e+1}. `, ...m(o, 0 === a.delayBetweenChunks ? o.length : a.chunkSize)]));
                else if (_.length > 0) {
                    let e = m(_, a.chunkSize);
                    c.push(...p(e))
                }
                return Promise.resolve({
                    type: "success",
                    data: {
                        async * [Symbol.asyncIterator]() {
                            for (let e of c) await (0, r().wR)(a.delayBetweenChunks), yield e
                        }
                    },
                    status: 200,
                    headers: {}
                })
            }(0, s(202146).exposeDebugValue)("completionDebugSettings", a)
        },
        745015: (e, t, s) => {
            async function r(e, t, r) {
                let i;
                s(218744).default.checkGate({
                    gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled"
                }) ? await n(e, t, r) : n(e, t, r).catch(e => {
                    s(773352).log({
                        level: "error",
                        from: "ai.completionActions",
                        type: "maybeUpdateAIUsageEligibilityStoreV2Error",
                        spaceId: t,
                        error: e
                    })
                });
                let a = s(689087).TI();
                if (a.debug) i = 402 !== a.showErrorCode;
                else {
                    let n = s(939707).o.getState();
                    if (n && n.isEligible && "unlimited" === n.type && !r) {
                        let e = n.lastUpdatedAt;
                        if (Date.now() - e < 10 * s(627179).Xb) return
                    }
                    let a = await e.api.callCellCompatibleApi({
                        eventName: "getAIUsageEligibility",
                        environment: e,
                        data: {
                            spaceId: t
                        },
                        cellNavigation: {
                            cellId: void 0,
                            spaceId: t
                        }
                    });
                    if ("success" === a.type) {
                        (i = a.data.isEligible) && s(898327).K.state && s(898327).K.setState(!1);
                        let e = (null == n ? void 0 : n.isEligible) === !1 && (null == n ? void 0 : n.requestedAccess),
                            t = a.data.researchModeUsage ? ? 0;
                        s(939707).o.setState({ ...a.data,
                            lastUpdatedAt: Date.now(),
                            researchModeUsage: t,
                            ...!1 === a.data.isEligible && {
                                requestedAccess: e
                            }
                        })
                    }
                }
                void 0 !== i && s(132108).P.setState(i)
            }
            async function n(e, t, r) {
                let n = await s(54068).T.awaitData(e, {
                        spaceId: t
                    }),
                    i = s(547631).a.getData(e, {
                        spaceId: t
                    });
                if (!n) return void s(773352).log({
                    level: "warning",
                    from: "ai.completionActions",
                    type: "maybeUpdateAIUsageEligibilityStoreV2BillingDataMissing",
                    data: {
                        spaceId: t,
                        hasCurrentUsageData: void 0 !== i
                    }
                });
                if (i && (0, s(149957).Hg)(n) && !r) {
                    let e = i.lastUpdatedAt,
                        r = Date.now() - e;
                    if (r < 10 * s(627179).Xb) return void s(773352).log({
                        level: "info",
                        from: "ai.completionActions",
                        type: "maybeUpdateAIUsageEligibilityStoreV2CacheHit",
                        data: {
                            spaceId: t,
                            elapsedMs: r,
                            lastUpdatedAt: e
                        }
                    })
                }
                s(773352).log({
                    level: "info",
                    from: "ai.completionActions",
                    type: "maybeUpdateAIUsageEligibilityStoreV2Refreshing",
                    data: {
                        spaceId: t,
                        forceRefresh: r ? ? !1,
                        hadCachedData: void 0 !== i
                    }
                }), await (0, s(838451).y)(e, t)
            }
            s.d(t, {
                Z: () => r
            })
        },
        838451: (e, t, s) => {
            s.d(t, {
                y: () => r
            });
            async function r(e, t) {
                if (await s(547631).a.resetData(e, {
                        spaceId: t
                    }), (0, s(717274).FA)()) {
                    let r = await (0, s(655293).S)(e, {
                        name: "ai_usage",
                        amount: 1,
                        spaceId: t,
                        userId: e.currentUser.id
                    });
                    r && s(898327).K.state && s(898327).K.setState(!1), s(132108).P.setState(r)
                }
            }
        },
        844765: (e, t, s) => {
            s.d(t, {
                s: () => i,
                Z: () => a
            }), s(296540);
            var r = s(474848);

            function n({
                onAccept: e
            }) {
                return (0, r.jsx)(s(314084).t, {
                    header: (0, r.jsx)(s(582471).Y, {
                        iconAndTitle: (0, r.jsx)(s(209590).Z, {
                            iconGroup: s(687245).r,
                            iconColorPalette: "red",
                            iconColorVariant: "accentPrimary",
                            title: (0, r.jsx)(s(109939).sA, {
                                id: "voidOfferModal.title",
                                defaultMessage: "Are you sure?"
                            })
                        }),
                        description: (0, r.jsx)(s(109939).sA, {
                            id: "voidOfferModal.subtitle",
                            defaultMessage: "If you continue, your current discount will no longer be applied. See <terms>terms and conditions</terms> for more information.",
                            values: {
                                terms: e => (0, r.jsx)(s(428217).V, {
                                    external: !0,
                                    href: (0, s(442564).x)("resurrectionLearnMore"),
                                    children: e
                                })
                            }
                        })
                    }),
                    footer: (0, r.jsx)(s(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "destructive",
                            label: (0, r.jsx)(s(109939).sA, {
                                id: "voidOfferModal.primaryAction",
                                defaultMessage: "Yes and remove discount"
                            }),
                            onClick: e
                        }],
                        secondaryButtons: [{
                            buttonType: "dismiss",
                            label: (0, r.jsx)(s(109939).sA, {
                                id: "voidOfferModal.cancelButton",
                                defaultMessage: "Cancel"
                            })
                        }]
                    })
                })
            }

            function i(e, t, r, n) {
                let i = (0, s(90119).ex)(e, t, n);
                return !!i && !(0, s(90119).d$)(i.campaign, r)
            }
            async function a(e) {
                var t;
                let i = null == (t = (0, s(328765).S)()) ? void 0 : t.id;
                return await s(280996).T.showAsyncModal(t => (0, r.jsx)(s(833503).s, {
                    isOpen: t.isOpen,
                    onDismiss: () => {
                        (0, s(104310).u)({
                            event: {
                                eventName: "void_offer_modal_dismiss",
                                eventProperties: {}
                            }
                        }), t.onDismiss()
                    },
                    onClosed: t.onClosed,
                    areaConstraint: {
                        width: {
                            type: "min",
                            length: 406
                        },
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        }
                    },
                    children: () => (0, r.jsx)(n, {
                        onAccept: async () => {
                            (0, s(104310).u)({
                                event: {
                                    eventName: "void_offer_modal_accept",
                                    eventProperties: {}
                                }
                            }), i && await e.api.callApi({
                                eventName: "voidCustomerOffer",
                                environment: e,
                                data: {
                                    spaceId: i
                                }
                            }), t.resolve("accepted")
                        }
                    })
                }))
            }
        },
        856863: (e, t, s) => {
            s.d(t, {
                j: () => i
            });
            var r = () => s(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
            }
            let i = new n
        },
        897525: (e, t, s) => {
            s.r(t), s.d(t, {
                maybeUpdateAiEligibility: () => n().Z,
                openMidtermCheckoutModal: () => i().o,
                shouldCreatePassword: () => r().TQ,
                showVoidOfferModal: () => a().Z
            });
            var r = () => s(724942),
                n = () => s(745015),
                i = () => s(362650),
                a = () => s(844765)
        },
        898327: (e, t, s) => {
            s.d(t, {
                K: () => r
            });
            let r = s(546605).Store.createValue(!1)
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
                let n = b(e);
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

            function o(e) {
                return (0, s(192159).k4)({
                    subscription: e
                })
            }

            function u(e) {
                return (0, s(192159).V9)({
                    clock: void 0,
                    subscription: b(e),
                    trial: void 0
                })
            }

            function l(e) {
                return (0, s(192159).d$)({
                    clock: void 0,
                    subscription: b(e),
                    trial: void 0
                })
            }

            function m(e) {
                return (0, s(192159).ji)({
                    clock: void 0,
                    subscription: b(e),
                    trial: void 0
                })
            }

            function p(e) {
                return (0, s(192159).AI)({
                    clock: void 0,
                    subscription: b(e),
                    trial: void 0
                })
            }

            function d(e, t) {
                return (0, s(192159).KH)({
                    clock: void 0,
                    subscription: b(e),
                    trial: void 0
                }, t)
            }

            function b(e) {
                return e ? { ...e,
                    trialEnd: void 0
                } : void 0
            }
            s.d(t, {
                DS: () => r,
                Fe: () => l,
                GB: () => i,
                Gf: () => p,
                SX: () => o,
                V_: () => m,
                j1: () => u,
                j8: () => n,
                yp: () => d,
                yw: () => a
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(354520), s(581454)
        }
    }
]);