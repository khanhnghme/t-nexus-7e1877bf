(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [65213], {
        2009: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let i = new a
        },
        8542: (e, t, n) => {
            "use strict";

            function r(e) {
                var t;
                let n = null == (t = function(e) {
                    if ((null == e ? void 0 : e.type) === "subscribed_admin" || (null == e ? void 0 : e.type) === "unsubscribed_admin") return e
                }(e)) || null == (t = t.customerData) ? void 0 : t.stripe;
                if (void 0 !== n && "plan" in n && void 0 !== n.plan) return n
            }
            n.d(t, {
                R: () => r
            })
        },
        37458: (e, t, n) => {
            e.exports = n(708009)
        },
        56281: (e, t, n) => {
            "use strict";

            function r(e, t) {
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

            function a(e) {
                return "personal" !== e && n(126365).tX.find(t => t === e)
            }
            n.d(t, {
                VV: () => o,
                _6: () => a,
                _q: () => i,
                ex: () => r
            }), n(16280), n(944114), n(898992), n(672577);
            let i = ["kr_card", "kakao_pay", "naver_pay"];

            function o(e) {
                let {
                    currency: t
                } = e, n = ["card", "link"];
                return "EUR" === t && n.push("sepa_debit"), "KRW" === t && n.push(...i), n
            }
        },
        124108: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => s
            });
            var r = n(296540),
                a = n(474848);
            let i = {
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
                o = {
                    destructiveButtonDefault: { ...i,
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
                    primaryButtonDefault: { ...i,
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
                    secondaryButtonDefault: { ...i,
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...i,
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
                    outlineButtonDefault: { ...i,
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
                    blackButtonDefault: { ...i,
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

            function s(e) {
                let {
                    buttonInfo: t,
                    ...i
                } = e, s = (0, r.useContext)(n(19187).e), l = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, r.useMemo)(() => ({
                    destructive: {
                        default: o.destructiveButtonDefault,
                        hovered: o.destructiveButtonHovered,
                        pressed: o.destructiveButtonPressed
                    },
                    primary: {
                        default: o.primaryButtonDefault,
                        hovered: o.primaryButtonHovered,
                        pressed: o.primaryButtonPressed
                    },
                    secondary: {
                        default: o.secondaryButtonDefault
                    },
                    dismiss: {
                        default: o.secondaryButtonDefault
                    },
                    outline: {
                        default: o.outlineButtonDefault,
                        hovered: o.outlineButtonHovered,
                        pressed: o.outlineButtonPressed
                    },
                    black: {
                        default: o.blackButtonDefault,
                        hovered: o.blackButtonHovered,
                        pressed: o.blackButtonPressed
                    },
                    plain: {
                        default: o.plainButtonDefault,
                        hovered: o.plainButtonHovered,
                        pressed: o.plainButtonPressed
                    }
                }), []);
                if ("dismiss" === t.buttonType) {
                    let e = t.label ? ? (0, a.jsx)(n(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        r = t.combinedStyles ? ? d.dismiss;
                    return (0, a.jsx)(n(64960).Ay, {
                        style: null == r ? void 0 : r.default,
                        hoveredStyle: null == r ? void 0 : r.hovered,
                        pressedStyle: null == r ? void 0 : r.pressed,
                        onClick: s,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        r = t.combinedStyles ? ? d[e];
                    return (0, a.jsxs)(n(64960).Ay, {
                        style: { ...null == r ? void 0 : r.default,
                            ...l
                        },
                        hoveredStyle: null == r ? void 0 : r.hovered,
                        pressedStyle: null == r ? void 0 : r.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...i,
                        children: [t.isLoading ? (0, a.jsx)(n(517334).k, {
                            style: o.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        137380: (e, t, n) => {
            "use strict";
            async function r({
                stripe: e,
                clientSecret: t
            }) {
                let {
                    paymentIntent: n,
                    setupIntent: a,
                    error: i
                } = await e.handleNextAction({
                    clientSecret: t
                });
                if (n) return n.status;
                if (a) return a.status;
                if (i.payment_intent) return i.payment_intent.status;
                if (i.setup_intent) return i.setup_intent.status;
                throw Error(`Unexpected error handling intent: ${i.message}`)
            }
            n.d(t, {
                u: () => r
            }), n(16280)
        },
        148344: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => i
            }), n(581454);
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {}
                waitUntilLoaded() {
                    return this.waitUntil(() => !!this.state)
                }
                getSortedUserIds() {
                    return Object.entries(this.state || {}).sort(([e, t], [n, r]) => r - t).map(([e, t]) => e)
                }
            }
            let i = new a;
            (0, n(202146).exposeDebugValue)("UserSimilarityStore", i)
        },
        208117: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: i,
                    billingData: o
                } = e;
                return a({
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: i,
                    billingData: o
                }) && !(0, n(192159).N8)(o) && !!(!i || !(0, n(556306).h)(i))
            }

            function a(e) {
                let {
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: a,
                    billingData: i
                } = e;
                if (i && (0, n(192159).N8)(i)) return !0;
                let o = null == a ? void 0 : a.id;
                return !!o && (!!(((0, n(616579).j)({
                    environment: t,
                    spaceId: o
                }) ? ? 1) > 99 || (0, n(192159).N8)(i)) || !!r && "company_employee_count" in r && parseInt(r.company_employee_count) > 99)
            }
            n.d(t, {
                H: () => a,
                q: () => r
            })
        },
        209590: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            }), n(296540);
            var r = n(474848);
            let a = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                i = {
                    position: "relative"
                };

            function o(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: o,
                    iconColorVariant: s = "secondary",
                    title: l,
                    variantName: d = "default"
                } = e;
                return t || l ? (0, r.jsxs)(n(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...i
                    },
                    children: [t ? (0, r.jsx)(n(708966).Q, {
                        iconGroup: t,
                        colorPalette: o,
                        colorVariant: s,
                        variantName: d,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, l ? (0, r.jsx)(n(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: a,
                        children: l
                    }) : null]
                }) : null
            }
        },
        280996: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => i,
                T: () => o()
            }), n(581454);
            var r = n(296540),
                a = n(474848);
            let i = r.memo(function(e) {
                let {
                    store: t = n(2009).w
                } = e, i = (0, n(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, a.jsx)(a.Fragment, {
                    children: i.map(e => {
                        let {
                            id: t,
                            internalRenderModal: n,
                            isOpen: i
                        } = e, o = n(i);
                        return (0, a.jsx)(r.Fragment, {
                            children: o
                        }, t)
                    })
                })
            });
            var o = () => n(796123)
        },
        314084: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => i
            }), n(296540);
            var r = n(474848);
            let a = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function i(e) {
                let {
                    children: t,
                    footer: i,
                    header: o,
                    showDismissButton: s = !0,
                    sizeRange: l,
                    gap: d = 24
                } = e;
                return (0, r.jsxs)(n(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == l ? void 0 : l.minHeight,
                    maxHeight: null == l ? void 0 : l.maxHeight,
                    minWidth: null == l ? void 0 : l.minWidth,
                    maxWidth: null == l ? void 0 : l.maxWidth,
                    gap: d,
                    style: a,
                    className: "autolayout-fill-width",
                    children: [(0, r.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: o
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
                    }) : null, s ? (0, r.jsx)(n(226512).R, {}) : null]
                })
            }
        },
        336613: (e, t, n) => {
            "use strict";
            let r, a;

            function i(e) {
                r = e
            }

            function o(e) {
                a = e
            }

            function s() {
                if (!r) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return r
            }
            async function l() {
                if (!a) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return a()
            }
            n.d(t, {
                N7: () => l,
                NK: () => i,
                NS: () => o,
                XC: () => s
            }), n(16280)
        },
        362650: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var r;
                let a = n(92513).JW();
                r = {
                    modal_id: a,
                    currency_code: n(653828).H.selectedCurrencyCodeStoreState,
                    ...t.analyticsArgs,
                    desiredProducts: t.desiredProducts,
                    desiredInterval: t.desiredInterval
                }, (0, n(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_open",
                        eventProperties: r
                    }
                }), n(856863).j.open({
                    modalId: a,
                    ...t
                })
            }

            function a(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "subscription_update_modal_exit",
                        eventProperties: {
                            modal_id: {
                                modalId: t
                            }.modalId
                        }
                    }
                }), n(856863).j.setState({
                    open: !1
                })
            }
            n.d(t, {
                A: () => a,
                o: () => r
            })
        },
        375592: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => r
            });
            let r = new(n(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            n(202146).exposeDebugValue("ExternalOrgDataStore", r)
        },
        430431: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let i = new a
        },
        441503: (e, t, n) => {
            "use strict";
            async function r(e) {
                n(262058).m({
                    message: n(893658).D.finishingUp
                });
                let {
                    paymentIntentData: t,
                    stripe: r,
                    onSuccess: a,
                    onFailure: i
                } = e, o = t.paymentIntentClientSecret, s = t.paymentIntentStatus;
                o && "requires_action" === s && (s = await (0, n(137380).u)({
                    stripe: r,
                    clientSecret: o
                })), "succeeded" === s || "processing" === s ? null == a || a() : function({
                    status: e
                }) {
                    return ["requires_payment_method", "requires_source"].includes(e)
                }({
                    status: s
                }) && (null == i || i()), n(262058).V()
            }
            n.d(t, {
                X: () => r
            })
        },
        556306: (e, t, n) => {
            "use strict";

            function r(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
            n.d(t, {
                h: () => r
            })
        },
        582471: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => o
            }), n(296540);
            var r = n(474848);
            let a = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                i = {
                    position: "relative"
                };

            function o(e) {
                let {
                    iconAndTitle: t,
                    description: o
                } = e;
                return t || o ? (0, r.jsxs)(n(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: i,
                    children: [t, o ? (0, r.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: a,
                        children: o
                    }) : null]
                }) : null
            }
        },
        591637: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => i
            }), n(898992), n(354520), n(581454), n(296540);
            var r = n(474848);
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

            function i(e) {
                var t;
                let {
                    caption: i,
                    layout: o,
                    sectionGap: s,
                    secondaryButtonTooltip: l
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !i) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === o ? (0, r.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: s ? ? 8,
                        ...a.positionRelative
                    },
                    children: [(0, r.jsxs)(n(4458).VP, {
                        style: {
                            gap: 7,
                            ...a.positionRelative
                        },
                        children: [d.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t)), i ? (0, r.jsx)("div", {
                            style: a.caption,
                            children: i
                        }) : null]
                    }), u ? l ? (0, r.jsx)(n(51831).m, {
                        content: () => l,
                        textWrap: !0,
                        style: a.style0,
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, r.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, r.jsx)("div", {
                        children: c.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === o ? (0, r.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: s ? ? 8,
                        ...a.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, r.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, r.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === o ? (0, r.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? l ? (0, r.jsx)(n(51831).m, {
                        content: () => l,
                        textWrap: !0,
                        style: a.style1,
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, r.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, r.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, r.jsx)("div", {
                        children: d.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, n(722371).HB)(o)
            }
        },
        687245: (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => r
            });
            let r = (0, n(104509).xh)("arrowInCircleDown", {
                default: {
                    loader: () => n.e(96029).then(n.bind(n, 725111))
                },
                small: {
                    loader: () => n.e(96029).then(n.bind(n, 152849))
                },
                fill: {
                    loader: () => n.e(96029).then(n.bind(n, 477507))
                },
                fillSmall: {
                    loader: () => n.e(96029).then(n.bind(n, 605626))
                }
            }, ["arrow", "circle", "down", "direction", "pointer", "downgrade"])
        },
        705820: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => r
            });
            let r = new(n(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!n(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let r = new(n(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await r.load(), !r.canAdmin()) return;
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
            n(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", r)
        },
        708009: (e, t) => {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var r, a = "https://js.stripe.com/v3",
                i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                s = function() {
                    for (var e = document.querySelectorAll('script[src^="'.concat(a, '"]')), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (i.test(n.src)) return n
                    }
                    return null
                },
                l = function(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        n = document.createElement("script");
                    n.src = "".concat(a).concat(t);
                    var r = document.head || document.body;
                    if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return r.appendChild(n), n
                },
                d = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "1.52.1",
                        startTime: t
                    })
                },
                c = null,
                u = function(e, t, n) {
                    if (null === e) return null;
                    var r = e.apply(void 0, t);
                    return d(r, n), r
                },
                p = function(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== n(e)) throw Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw Error(t)
                },
                f = !1,
                m = function() {
                    for (var e, t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    f = !0;
                    var i = Date.now();
                    return (e = r, null !== c ? c : c = new Promise(function(t, n) {
                        if ("u" < typeof window || "u" < typeof document) return void t(null);
                        if (window.Stripe && e && console.warn(o), window.Stripe) return void t(window.Stripe);
                        try {
                            var r = s();
                            r && e ? console.warn(o) : r || (r = l(e)), r.addEventListener("load", function() {
                                window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"))
                            }), r.addEventListener("error", function() {
                                n(Error("Failed to load Stripe.js"))
                            })
                        } catch (e) {
                            n(e);
                            return
                        }
                    })).then(function(e) {
                        return u(e, n, i)
                    })
                };
            m.setLoadParameters = function(e) {
                if (!(f && r && Object.keys(p(e)).reduce(function(t, n) {
                        var a;
                        return t && e[n] === (null == (a = r) ? void 0 : a[n])
                    }, !0))) {
                    if (f) throw Error("You cannot change load parameters after calling loadStripe");
                    r = p(e)
                }
            }, t.loadStripe = m
        },
        709295: (e, t, n) => {
            "use strict";
            async function r({
                environment: e,
                spaceStore: t
            }) {
                let a = t.id;
                await Promise.all([(0, n(109955).x)(e, a), n(949830).A.resetData(e, {
                    spaceId: a,
                    userId: e.currentUser.id
                })])
            }
            n.d(t, {
                n: () => r
            })
        },
        710234: (e, t, n) => {
            "use strict";
            let r, a;
            n.r(t), n.d(t, {
                applyStudentGitHubGrant: () => A,
                closeSubscriptionUpgradeModal: () => B,
                ensureSubscriptionDataIsFetched: () => y,
                handleIntentNextAction: () => d().u,
                handlePaymentIntentNextActions: () => _().X,
                handlePlanChangeClick: () => I,
                maybeOpenPostUpgradeModal: () => o().u,
                messages: () => l().D,
                openSubscriptionUpgradeModal: () => k,
                refreshAllBillingData: () => c().o,
                refreshNonReactiveBillingData: () => b().R,
                refreshSubscriptionData: () => v().x,
                refreshUserData: () => h().n,
                trackSubscriptionUpdate: () => s().i,
                updateAddress: () => f,
                updateBillingEmail: () => g,
                updatePaymentMethod: () => u,
                updateSidebarSpace: () => w,
                updateSubscription: () => i().n,
                updateSubscriptionToEducationPlan: () => M,
                updateVatId: () => m,
                validatePaymentMethod: () => p
            });
            var i = () => n(129909),
                o = () => n(883812),
                s = () => n(148760),
                l = () => n(893658),
                d = () => n(137380),
                c = () => n(776629);
            async function u(e) {
                let {
                    environment: t,
                    stripe: r,
                    spaceStore: a,
                    paymentMethodId: i
                } = e, o = await t.api.callApi({
                    eventName: "updatePaymentMethod",
                    environment: t,
                    data: {
                        spaceId: a.id,
                        paymentMethodId: i
                    }
                });
                if ("failed" === o.type) return void n(647095).Qg(o);
                if (o.data.clientSecret && "requires_action" === o.data.status) {
                    if ("succeeded" !== await (0, d().u)({
                            stripe: r,
                            clientSecret: o.data.clientSecret
                        })) return void n(647095).f1(n(962299).A.formatMessage(l().D.paymentMethodUpdateAuthFailed));
                    let e = await t.api.callApi({
                        eventName: "setDefaultPaymentMethod",
                        environment: t,
                        data: {
                            spaceId: a.id,
                            paymentMethodId: i
                        }
                    });
                    if ("failed" === e.type) return void n(647095).Qg(e)
                }
                await (0, c().o)({
                    environment: t,
                    spaceStore: a
                })
            }
            async function p(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    paymentMethodId: a
                } = e, i = await t.api.callCellCompatibleApi({
                    eventName: "updatePaymentMethod",
                    environment: t,
                    data: {
                        spaceId: r.id,
                        paymentMethodId: a
                    },
                    cellNavigation: {
                        spaceId: r.id
                    }
                });
                return "failed" === i.type ? (n(647095).Qg(i), "failed") : i.data.clientSecret && "requires_action" === i.data.status ? (n(647095).f1(n(962299).A.formatMessage(l().D.useAnotherPaymentMethod)), "failed") : "success"
            }
            async function f(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    address: a
                } = e;
                n(474329).Re({
                    bannerStore: n(465361).A
                }), n(262058).m({
                    message: l().D.updatingSubscription
                });
                let i = await t.api.callApi({
                    eventName: "updateBillingInformation",
                    environment: t,
                    data: {
                        spaceId: r.id,
                        address: a
                    }
                });
                if ("failed" === i.type) throw n(262058).V(), n(647095).Qg(i), i.error;
                (0, n(340580).p)(t, {
                    billing_email_changed: !1,
                    plan_changed: !1,
                    billing_address_changed: !0
                }), await (0, c().o)({
                    environment: t,
                    spaceStore: r
                }), n(262058).V()
            }
            async function m(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    vatId: a
                } = e;
                n(474329).Re({
                    bannerStore: n(465361).A
                }), n(262058).m({
                    message: l().D.updatingSubscription
                });
                let i = await t.api.callApi({
                    eventName: "updateBillingInformation",
                    environment: t,
                    data: {
                        spaceId: r.id,
                        vatId: a
                    }
                });
                if ("failed" === i.type) throw n(262058).V(), n(647095).Qg(i), i.error;
                (0, n(340580).p)(t, {
                    billing_email_changed: !1,
                    plan_changed: !1,
                    billing_address_changed: !1
                }), await (0, c().o)({
                    environment: t,
                    spaceStore: r
                }), n(262058).V()
            }
            async function g(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    email: a
                } = e;
                n(474329).Re({
                    bannerStore: n(465361).A
                }), n(262058).m({
                    message: l().D.updatingSubscription
                });
                let i = await t.api.callApi({
                    eventName: "updateBillingInformation",
                    environment: t,
                    data: {
                        spaceId: r.id,
                        billingEmail: a
                    }
                });
                if ("failed" === i.type) throw n(262058).V(), n(647095).Qg(i), i.error;
                (0, n(340580).p)(t, {
                    billing_email_changed: !0,
                    plan_changed: !1,
                    billing_address_changed: !1
                }), await (0, c().o)({
                    environment: t,
                    spaceStore: r
                }), n(262058).V()
            }
            var b = () => n(828797),
                h = () => n(709295),
                v = () => n(109955);
            async function y(e) {
                var t;
                let {
                    environment: r
                } = e, a = e.spaceId ? ? (null == (t = (0, n(328765).S)()) ? void 0 : t.id), i = r.currentUser.id;
                a && i && (n(105692).subscriptionDataStoreInstance.state && n(105692).subscriptionDataStoreInstance.spaceId === a && n(105692).subscriptionDataStoreInstance.userId === i || (await (0, v().x)(r, a), n(705820).P.awaitData(r, {
                    spaceId: a
                }), n(617995).I.prefetchBatchedOffers(r, a)))
            }
            async function x(e) {
                let {
                    spaceId: t
                } = e, i = (0, n(568479).GM)({
                    spaceId: t
                });
                if (!a || a !== i) {
                    let t;
                    r && n(48091).Ay.removeListener(r);
                    let o = n(381453).nF(({
                        value: n
                    }) => {
                        void 0 !== t && t !== n && S(e), t = n
                    }, 5e3);
                    if (r = n(48091).Ay.addListener({
                            key: i,
                            authorizationToken: void 0,
                            listener: o,
                            subscriptionId: void 0
                        }), a = i, !Object.keys(n(731632).A.state).length) return S(e)
                }
            }
            async function S(e) {
                var t, r;
                let {
                    environment: a,
                    spaceId: i
                } = e;
                if ((0, n(455221).e)(a, i)) return;
                let o = await a.api.callCellCompatibleApi({
                    eventName: "getBillingSubscriptionBannerData",
                    environment: a,
                    data: {
                        spaceId: i
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: i
                    }
                });
                "success" === o.type && (null == (t = (0, n(328765).S)()) ? void 0 : t.id) === i && n(731632).A.setState(o.data.bannerData);
                let s = await a.api.callApi({
                    eventName: "getSubscriptionEntitlements",
                    environment: a,
                    data: {
                        spaceId: i
                    }
                });
                "success" === s.type && (null == (r = (0, n(328765).S)()) ? void 0 : r.id) === i && n(177123).A.setState(s.data)
            }
            async function w(e) {
                let {
                    environment: t,
                    spaceId: r,
                    isNewlyCreatedSpace: a
                } = e, i = n(105692).subscriptionDataStoreInstance.spaceId;
                if (t.currentUser.isLoggedIn() && (!i || i !== r)) {
                    if (n(731632).A.setState({}), x({
                            environment: t,
                            spaceId: r
                        }), n(177123).A.setState({}), a) {
                        let e = {
                            type: "unsubscribed_admin",
                            accountBalance: 0,
                            users: [],
                            blockUsage: 0,
                            hasPaidNonzero: !1,
                            customerData: void 0,
                            revenueCatEnabled: !1,
                            spaceUsers: [],
                            members: [],
                            userSimilarity: {},
                            joinedMemberIds: []
                        };
                        n(105692).subscriptionDataStoreInstance.setState(e), n(105692).subscriptionDataStoreInstance.spaceId = r, n(105692).subscriptionDataStoreInstance.userId = t.currentUser.id, n(148344).k.setState(e.userSimilarity)
                    }(0, v().x)(t, r)
                } else await n(105692).subscriptionDataStoreInstance.waitUntilLoaded()
            }

            function k(e) {
                let {
                    subscriptionTier: t,
                    from: r,
                    addOnFeature: a,
                    isTrial: i,
                    dismissMobilePlansModal: o,
                    postUpgradeCallback: s,
                    campaign: l
                } = e, d = n(92513).JW();
                n(926875).A.open({
                    from: r,
                    subscriptionTier: t,
                    billingInterval: "month",
                    addOnFeature: a,
                    isTrial: i,
                    sessionId: d,
                    dismissMobilePlansModal: o,
                    postUpgradeCallback: s,
                    campaign: l
                })
            }

            function B() {
                let e = n(926875).A.state;
                e.open && ((0, n(793339).O)({
                    modal_id: e.sessionId
                }), n(926875).A.setState({
                    open: !1
                }))
            }
            async function I(e) {
                var t, r;
                let a, {
                        environment: o,
                        product: s,
                        spaceStore: l,
                        from: d,
                        sessionId: c,
                        pageSection: u,
                        churnState: p,
                        billingData: f
                    } = e,
                    m = await n(829489).p_({
                        environment: o,
                        spaceId: l.id
                    }),
                    g = f.subscription;
                if ((!g || !(0, n(722371).O9)(f.paymentMethod)) && "free" !== s) return void k({
                    subscriptionTier: s,
                    from: d
                });
                let b = (0, n(192159).lQ)(f),
                    h = (0, n(192159).Ry)(f),
                    v = (0, n(958059).yw)(b),
                    y = (0, n(958059).yw)(g),
                    x = v ? ? y,
                    S = (null == (t = (0, n(192159).KH)(f, "sites_custom_hostnames")) ? void 0 : t.quantity) ? ? 0,
                    w = (null == (r = (0, n(192159).KH)(f, "ai_credit_pack")) ? void 0 : r.quantity) ? ? 0,
                    B = (0, n(958059).GB)({
                        spaceId: l.id,
                        logFunction: n(773352).log.bind(n(773352)),
                        subscriptionState: b
                    }),
                    I = (0, n(958059).GB)({
                        spaceId: l.id,
                        logFunction: n(773352).log.bind(n(773352)),
                        subscriptionState: g
                    }),
                    _ = B ? ? I;
                if ("free" === s) a = (0, n(982473).gL)(b, "plan");
                else if (h && x && _) a = (0, n(982473).ef)({
                    state: b,
                    prices: m,
                    quantities: {
                        numSeats: _,
                        numCustomHostnames: S,
                        numAiCreditPacks: w
                    },
                    params: {
                        currency: h,
                        planBillingInterval: x
                    },
                    products: [s]
                });
                else throw Error("Trying to update plan on a subscription with no items");
                if (!n(381453).n4(b, a))
                    if ((0, n(982473).V5)(b, a)) {
                        if ("no_churn" === p || !p) return;
                        let e = n(185995).default.getData(o, {
                                spaceId: null == l ? void 0 : l.id
                            }),
                            t = (0, n(875472).e8)(e, "coupon");
                        if ((0, n(844765).s)(t, b, a, (0, n(192159).DS)(f)) && !await (0, n(844765).Z)(o)) return;
                        return await (0, i().n)({
                            environment: o,
                            spaceStore: l,
                            desiredState: a,
                            from: d,
                            sessionId: c,
                            performImmediately: "churn_immediately" === p
                        })
                    } else(0, n(362650).o)(o, {
                        desiredProducts: [s],
                        from: d,
                        analyticsArgs: {
                            from: d,
                            pageSection: u
                        }
                    })
            }
            n(16280);
            var _ = () => n(441503);
            async function A(e) {
                let {
                    environment: t,
                    data: n
                } = e;
                await t.api.callApi({
                    eventName: "applyStudentGitHubGrant",
                    environment: t,
                    data: n
                })
            }
            n(296540);
            var j = n(474848);
            async function P(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    code: a
                } = e;
                n(262058).m({
                    message: l().D.verifyingEligibility
                });
                let i = n(105692).subscriptionDataStoreInstance.state;
                if (!i) throw Error("Subscription data not loaded.");
                let o = await t.api.callApi({
                    eventName: "updateSubscriptionToEducationPlan",
                    environment: t,
                    data: {
                        spaceId: r.id,
                        code: a
                    }
                });
                "failed" === o.type ? n(647095).Qg(o) : o.data.isEligible ? (await (0, c().o)({
                    environment: t,
                    spaceStore: r
                }), D({
                    data: i,
                    spaceId: r.id,
                    environment: t
                })) : n(430431).A.setState({
                    open: !0,
                    handlePromoCode: async e => {
                        n(262058).m({
                            message: l().D.updatingSubscription
                        });
                        let a = await t.api.callApi({
                            eventName: "updateSubscriptionToEducationPlan",
                            environment: t,
                            data: {
                                spaceId: r.id,
                                code: e
                            }
                        });
                        "failed" === a.type ? n(647095).Qg(a) : a.data.isEligible ? (await (0, c().o)({
                            environment: t,
                            spaceStore: r
                        }), D({
                            data: i,
                            spaceId: r.id,
                            environment: t
                        })) : n(647095).f1((0, j.jsx)(n(109939).sA, {
                            id: "subscriptionSettings.invalidPromoCodeError.message",
                            defaultMessage: "This promo code is not valid."
                        })), n(262058).V()
                    }
                }), n(262058).V()
            }
            async function D({
                data: e,
                spaceId: t,
                environment: r
            }) {
                let a = await n(724942).TQ(r),
                    i = () => {
                        var a;
                        (0, o().u)({
                            oldTier: e.subscriptionTier ? ? "free",
                            newTier: "student",
                            oldAddOns: [],
                            newAddOns: []
                        }) || n(647095).rG({
                            message: n(962299).A.formatMessage(l().D.educationPlusFree)
                        }), n(185995).default.resetData(r, {
                            spaceId: t
                        }), n(227947).A.setState({ ...n(227947).A.state,
                            currentPage: "billing",
                            defaultTab: void 0
                        });
                        let i = (0, n(8542).R)(e);
                        a = {
                            plan: "student_free",
                            old_plan: i ? i.plan : void 0
                        }, (0, n(195857).DO_NOT_USE_trackLegacy)("subscription_update_plan", a)
                    };
                a ? n(98669).r({
                    onSubmit: i,
                    onCancel: i
                }) : i()
            }
            let M = (0, n(381453).sg)(P, 1e3, {
                leading: !0,
                trailing: !1
            })
        },
        731632: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {}
            let i = new a
        },
        766970: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                xMarkFillIcon: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFill", r, "fill")
        },
        793339: (e, t, n) => {
            "use strict";

            function r(e) {
                (0, n(104310).u)({
                    event: {
                        eventName: "subscription_upgrade_modal_exit",
                        eventProperties: e
                    }
                })
            }
            n.d(t, {
                O: () => r
            })
        },
        796123: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                showAsyncModal: () => a,
                showAsyncModalComponent: () => i,
                testOnly: () => f
            }), n(898992), n(354520), n(672577), n(581454);
            var r = n(296540);

            function a(e, t = n(2009).w) {
                return new Promise((n, r) => {
                    try {
                        let a = c({
                            renderModal: e,
                            promiseResolve: n,
                            promiseReject: r,
                            store: t
                        });
                        o({
                            asyncModal: a,
                            store: t
                        })
                    } catch (e) {
                        r(e)
                    }
                })
            }

            function i(e, t = n(2009).w) {
                return a(t => r.createElement(e, t), t)
            }

            function o(e) {
                let {
                    asyncModal: t,
                    store: r = n(2009).w
                } = e;
                r.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: r,
                    store: a = n(2009).w
                } = e;
                return e => {
                    let n = u({
                        id: t,
                        store: a
                    });
                    null != n && n.isOpen && (p({
                        id: t,
                        store: a,
                        update: {
                            isOpen: !1
                        }
                    }), r(e))
                }
            }

            function l(e) {
                let {
                    id: t,
                    promiseResolve: r,
                    store: a = n(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: a
                    });
                    null != e && e.isOpen && (p({
                        id: t,
                        store: a,
                        update: {
                            isOpen: !1
                        }
                    }), r())
                }
            }

            function d(e) {
                let {
                    id: t,
                    store: r = n(2009).w
                } = e;
                return () => {
                    r.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function c(e) {
                let {
                    renderModal: t,
                    promiseResolve: r,
                    promiseReject: a,
                    store: i = n(2009).w
                } = e, o = n(92513).JW(), c = d({
                    id: o,
                    store: i
                }), u = l({
                    id: o,
                    promiseResolve: r,
                    store: i
                }), p = s({
                    id: o,
                    promiseResolve: r,
                    store: i
                });
                return {
                    id: o,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: c,
                                onDismiss: u,
                                resolve: p
                            })
                        } catch (e) {
                            throw a(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: r = n(2009).w
                } = e;
                return r.state.asyncModals.find(e => e.id === t)
            }

            function p(e) {
                let {
                    id: t,
                    update: r,
                    store: a = n(2009).w
                } = e;
                a.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...r
                    })
                }))
            }
            let f = {
                addAsyncModal: o,
                createAsyncModal: c,
                createOnClosed: d,
                createOnDismiss: l,
                createResolve: s,
                getAsyncModal: u,
                updateAsyncModal: p
            }
        },
        828797: (e, t, n) => {
            "use strict";
            async function r({
                environment: e,
                spaceStore: t
            }) {
                let a = t.id;
                n(653828).H.setState({ ...n(653828).H.state,
                    status: "init"
                }), await Promise.all([n(829489).$W({
                    environment: e,
                    spaceId: a
                }), (0, n(109955).x)(e, a), n(122657).c.resetData(e, {
                    spaceId: a
                }), n(567516).L.resetData(e, {
                    spaceId: a
                }), n(324282).A.resetData(e, {
                    spaceId: a
                }), n(949830).A.resetData(e, {
                    spaceId: a,
                    userId: e.currentUser.id
                })])
            }
            n.d(t, {
                R: () => r
            })
        },
        844765: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i,
                Z: () => o
            }), n(296540);
            var r = n(474848);

            function a({
                onAccept: e
            }) {
                return (0, r.jsx)(n(314084).t, {
                    header: (0, r.jsx)(n(582471).Y, {
                        iconAndTitle: (0, r.jsx)(n(209590).Z, {
                            iconGroup: n(687245).r,
                            iconColorPalette: "red",
                            iconColorVariant: "accentPrimary",
                            title: (0, r.jsx)(n(109939).sA, {
                                id: "voidOfferModal.title",
                                defaultMessage: "Are you sure?"
                            })
                        }),
                        description: (0, r.jsx)(n(109939).sA, {
                            id: "voidOfferModal.subtitle",
                            defaultMessage: "If you continue, your current discount will no longer be applied. See <terms>terms and conditions</terms> for more information.",
                            values: {
                                terms: e => (0, r.jsx)(n(428217).V, {
                                    external: !0,
                                    href: (0, n(442564).x)("resurrectionLearnMore"),
                                    children: e
                                })
                            }
                        })
                    }),
                    footer: (0, r.jsx)(n(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "destructive",
                            label: (0, r.jsx)(n(109939).sA, {
                                id: "voidOfferModal.primaryAction",
                                defaultMessage: "Yes and remove discount"
                            }),
                            onClick: e
                        }],
                        secondaryButtons: [{
                            buttonType: "dismiss",
                            label: (0, r.jsx)(n(109939).sA, {
                                id: "voidOfferModal.cancelButton",
                                defaultMessage: "Cancel"
                            })
                        }]
                    })
                })
            }

            function i(e, t, r, a) {
                let i = (0, n(90119).ex)(e, t, a);
                return !!i && !(0, n(90119).d$)(i.campaign, r)
            }
            async function o(e) {
                var t;
                let i = null == (t = (0, n(328765).S)()) ? void 0 : t.id;
                return await n(280996).T.showAsyncModal(t => (0, r.jsx)(n(833503).s, {
                    isOpen: t.isOpen,
                    onDismiss: () => {
                        (0, n(104310).u)({
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
                    children: () => (0, r.jsx)(a, {
                        onAccept: async () => {
                            (0, n(104310).u)({
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
        856863: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
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
            let i = new a
        },
        889503: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getStripe: () => i,
                getStripeAppearance: () => d,
                optionalPaymentMethodIdGivenPaymentData: () => u,
                stripeElementLocaleGivenNotionLocale: () => o,
                translateStripeError: () => l,
                useElementsOptions: () => s
            });
            var r = n(296540);
            let a = null;
            async function i() {
                return a || (n(37458).loadStripe.setLoadParameters({
                    advancedFraudSignals: !1
                }), a = (0, n(37458).loadStripe)(n(986939).A.stripe.key)), a
            }

            function o(e) {
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
                let t = (0, n(960253).e)(),
                    a = (0, n(632079).O4)({
                        theme: t
                    }),
                    {
                        type: i
                    } = e,
                    s = "setup" === i || "subscription" === i ? e.currency : void 0,
                    l = "subscription" === i ? e.amount : void 0,
                    c = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || n(599412).q
                    }, []);
                return (0, r.useMemo)(() => {
                    let e = {
                            appearance: d(a, t),
                            locale: o(c)
                        },
                        r = {
                            paymentMethodTypes: (0, n(56281).VV)({
                                currency: s
                            })
                        };
                    switch (i) {
                        case "address":
                            return e;
                        case "setup":
                            return { ...e,
                                ...r,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "setup",
                                paymentMethodCreation: "manual"
                            };
                        case "subscription":
                            return { ...e,
                                ...r,
                                amount: l,
                                currency: null == s ? void 0 : s.toLowerCase(),
                                mode: "subscription",
                                paymentMethodCreation: "manual",
                                setupFutureUsage: "off_session",
                                loader: "never"
                            };
                        default:
                            (0, n(722371).HB)(i)
                    }
                }, [a, t, c, s, i, l])
            }

            function l(e, t) {
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
                        var n = e,
                            r = t.decline_code;
                        switch (r) {
                            case "expired_card":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.expiredCard",
                                    defaultMessage: "Your card was declined because it is an expired card."
                                });
                            case "incorrect_number":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.incorrectNumber",
                                    defaultMessage: "Your card was declined because you input an incorrect number."
                                });
                            case "insufficient_funds":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.declinedFunds",
                                    defaultMessage: "Your card was declined because of insufficient funds."
                                });
                            case "invalid_cvc":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidCvc",
                                    defaultMessage: "Your card was declined because you input an invalid CVC number"
                                });
                            case "invalid_amount":
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message.invalidAmount",
                                    defaultMessage: "Your card was declined because payment amount exceeds the amount that's allowed."
                                });
                            default:
                                return n.formatMessage({
                                    id: "stripeHelpers.cardDeclined.error.message",
                                    defaultMessage: "Your card was declined."
                                })
                        }
                    default:
                        return t.message || ""
                }
            }

            function d(e, t) {
                let r = c(e.text.primary),
                    a = c(e.text.secondary),
                    i = c(e.text.tertiary),
                    o = c(e.red.text.accentPrimary),
                    s = c(e.blue.text.accentPrimary);
                return {
                    labels: "above",
                    theme: "dark" === t ? "night" : "stripe",
                    variables: {
                        spacingGridRow: "12px",
                        spacingGridColumn: "12px",
                        spacingUnit: "4px",
                        spacingTab: "6px",
                        colorPrimary: r,
                        colorPrimaryText: r,
                        colorText: r,
                        colorTextSecondary: a,
                        colorTextPlaceholder: i,
                        colorIcon: r,
                        colorIconCheckmark: c(e.icon.inversePrimary),
                        colorDanger: o,
                        colorBackground: c(e.whiteButtonBackground),
                        colorIconTabHover: r,
                        colorIconTabSelected: s,
                        colorIconChevronDown: r,
                        fontFamily: n(699422).Tf.sans,
                        fontWeightLight: `${n(699422).Wy.light}`,
                        fontWeightNormal: `${n(699422).Wy.regular}`,
                        fontWeightMedium: `${n(699422).Wy.medium}`,
                        fontWeightBold: `${n(699422).Wy.medium}`,
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
                            color: r,
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
                            color: r,
                            boxShadow: "none",
                            outline: "none"
                        },
                        ".Tab--selected:hover": {
                            backgroundColor: e.whiteButtonBackground,
                            color: r
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
                            color: r
                        },
                        ".Input--invalid": {
                            color: r,
                            boxShadow: e.inputRedFocusRing
                        },
                        ".Input:focus": {
                            color: r,
                            boxShadow: e.inputBlueFocusRing
                        },
                        ".Label": {
                            fontSize: "12px",
                            lineHeight: "15px",
                            fontWeight: "500",
                            color: a,
                            marginBottom: "8px"
                        },
                        ".Error": {
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "15px",
                            color: o
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
                            color: r
                        },
                        ".PickerItem:hover": {
                            backgroundColor: e.whiteButtonHoveredBackground,
                            color: r,
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
                            color: r
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
                            color: a,
                            fontSize: "10px",
                            fontWeight: "400",
                            lineHeight: "13px",
                            letterSpacing: "0.12px"
                        },
                        ".CheckboxLabel": {
                            color: r,
                            fontSize: "12px",
                            fontWeight: "500",
                            lineHeight: "15px"
                        },
                        ".Action, .MenuAction": {
                            color: r,
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
                            fill: r
                        },
                        ".Block": {
                            backgroundColor: e.whiteButtonBackground,
                            border: `1px solid ${e.border.primary}`,
                            boxShadow: "none",
                            padding: "16px"
                        },
                        ".Icon": {
                            fill: r
                        }
                    }
                }
            }

            function c(e) {
                let [t, n, r, a] = e.match(/[\d.]+/g) ? ? [];
                return t && n && r && a && 1 === parseInt(a) ? `rgb(${t}, ${n}, ${r})` : e
            }

            function u(e) {
                return (null == e ? void 0 : e.type) === "paymentMethodId" ? e.value : void 0
            }
        },
        926875: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = () => n(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                closeWithSuccess() {
                    this.setState({
                        open: !1,
                        succeeded: !0
                    })
                }
                closeWithFailure() {
                    this.setState({
                        open: !1,
                        succeeded: !1
                    })
                }
                open(e) {
                    let {
                        subscriptionTier: t,
                        addOnFeature: n,
                        billingInterval: r,
                        isTrial: a,
                        sessionId: i,
                        dismissMobilePlansModal: o,
                        postUpgradeCallback: s,
                        from: l,
                        campaign: d
                    } = e;
                    this.setState({
                        open: !0,
                        temporaryBillingInterval: r,
                        temporaryAddress: {
                            name: "",
                            businessName: "",
                            addressLine1: "",
                            addressLine2: "",
                            zipCode: "",
                            city: "",
                            state: "",
                            country: ""
                        },
                        appliedPromo: void 0,
                        error: void 0,
                        subscriptionTier: t,
                        vatApplicable: !1,
                        calculatingTax: !1,
                        payButtonState: "enabled",
                        type: "current_space",
                        addOnFeature: n,
                        onlyShowAddOn: void 0 !== n,
                        sessionId: i,
                        isTrial: a,
                        dismissMobilePlansModal: o,
                        postUpgradeCallback: s,
                        from: l,
                        campaign: d
                    })
                }
                setAddressField(e) {
                    this.state.open && this.setState({ ...this.state,
                        temporaryAddress: { ...this.state.temporaryAddress,
                            ...e
                        },
                        taxCalculationError: void 0
                    })
                }
            }
            let i = new a
        }
    }
]);