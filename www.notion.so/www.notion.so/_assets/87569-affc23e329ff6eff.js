"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [87569], {
        128501: (e, n, t) => {
            t.d(n, {
                K: () => o,
                M: () => s
            });
            var a = t(296540),
                i = t(474848);

            function s() {
                return (0, i.jsx)(t(141342).l, {
                    label: (0, i.jsx)(t(109939).sA, {
                        id: "sanctions.missing_name_banner.banner_text",
                        defaultMessage: "Please provide your name in the billing tab"
                    }),
                    display: "full-width",
                    actions: [{
                        label: (0, i.jsx)(t(109939).sA, {
                            id: "sanctions.missing_name_banner.cta_message",
                            defaultMessage: "Click to update"
                        }),
                        onClick: () => {
                            t(599754).Ow({
                                currentPage: "billing",
                                tab: "address"
                            }), (0, t(104310).u)({
                                event: {
                                    eventName: "missing_name_sanctions_banner_clicked",
                                    eventProperties: {}
                                }
                            })
                        }
                    }],
                    tint: "red"
                })
            }

            function o() {
                var e;
                let n, i, s, o, r, l, c, u = (n = (0, t(83208).X)("missing_name_banner"), i = (0, t(972740).L)(), s = (0, t(226309)._3)({
                    spaceId: null == i ? void 0 : i.id
                }), o = (0, t(192159).Fq)(s) && !(0, t(192159).Qx)(null == s ? void 0 : s.subscription), r = !!(null == s || null == (e = s.address) ? void 0 : e.name), l = (0, t(84163).J)(i), c = null == s ? void 0 : s.provider, n && l && o && !r && "app_store" !== c && "play_store" !== c);
                a.useEffect(() => (u ? (t(474329).HQ({
                    bannerStore: t(465361).A,
                    id: "MissingNameBanner",
                    contentKey: "missing_name",
                    prepend: !0,
                    styleKey: t(909595).q.Red
                }), (0, t(104310).u)({
                    event: {
                        eventName: "missing_name_sanctions_banner_displayed",
                        eventProperties: {}
                    }
                })) : t(474329).zA({
                    bannerStore: t(465361).A,
                    id: "MissingNameBanner"
                }), () => {
                    t(474329).zA({
                        bannerStore: t(465361).A,
                        id: "MissingNameBanner"
                    })
                }), [u])
            }
        },
        141342: (e, n, t) => {
            t.d(n, {
                l: () => a().l
            });
            var a = () => t(748356)
        },
        363811: (e, n, t) => {
            t.d(n, {
                G: () => c,
                i: () => l
            });
            var a = t(296540),
                i = t(474848);
            let s = {
                    width: 75,
                    textAlign: "end"
                },
                o = {
                    width: 48
                },
                r = {
                    flexGrow: 1,
                    textWrap: "wrap"
                };

            function l(e) {
                let {
                    legacyColor: n
                } = e, l = (0, t(723240).r)(), c = (0, t(226309).lh)({
                    spaceId: l
                }), u = (0, t(192159).KH)(c, "ai_credit_pack") ? (0, t(192159).Ue)(c) : (0, t(192159).k4)(c), d = (0, t(192159).DS)(c), p = null == c ? void 0 : c.clock.externalId, [m, y] = (0, a.useState)(1), [b, f] = (0, a.useState)("second"), [g, x] = (0, a.useState)(!1), v = (0, t(533992).v3)();
                if (!l || !p || !u) return null;
                let _ = async () => {
                        let e = t(906745).dw.fromObject({
                            [b]: m
                        });
                        e > function(e) {
                            switch (e) {
                                case "month":
                                    return t(906745).dw.fromObject({
                                        months: 2
                                    });
                                case "year":
                                    return t(906745).dw.fromObject({
                                        years: 2
                                    });
                                default:
                                    (0, t(722371).HB)(e)
                            }
                        }(u) || (x(!0), "success" === (await v.api.callApi({
                            eventName: "stripeAdvanceTestClock",
                            environment: v,
                            data: {
                                spaceId: l,
                                epochSeconds: d.plus(e).toSeconds()
                            }
                        })).type && await Promise.all([t(54068).T.resetData(v, {
                            spaceId: l
                        })]), x(!1))
                    },
                    h = (0, i.jsxs)("div", {
                        style: r,
                        children: ["The clock time is currently frozen at ", d.toLocaleString(t(906745).DateTime.DATETIME_FULL)]
                    }),
                    j = [{
                        label: (0, i.jsx)("input", {
                            disabled: g,
                            type: "number",
                            value: m,
                            style: s,
                            onChange: e => y(parseInt(e.target.value))
                        }),
                        onClick: () => {}
                    }, {
                        label: (0, i.jsxs)("select", {
                            disabled: g,
                            value: b,
                            onChange: e => {
                                f(e.target.value)
                            },
                            children: [(0, i.jsx)("option", {
                                value: "seconds",
                                children: "seconds"
                            }), (0, i.jsx)("option", {
                                value: "minutes",
                                children: "minutes"
                            }), (0, i.jsx)("option", {
                                value: "hours",
                                children: "hours"
                            }), (0, i.jsx)("option", {
                                value: "days",
                                children: "days"
                            }), (0, i.jsx)("option", {
                                value: "months",
                                children: "months"
                            }), (0, i.jsx)("option", {
                                value: "years",
                                disabled: "year" !== u,
                                children: "years"
                            })]
                        }),
                        onClick: () => {}
                    }, {
                        label: "Advance clock",
                        onClick: () => _()
                    }, {
                        label: g ? (0, i.jsx)("img", {
                            src: t(896221).A.images.clubPenguinDanceGif,
                            alt: "loading…",
                            style: o
                        }) : (0, i.jsx)("div", {
                            style: o
                        }),
                        onClick: () => {}
                    }];
                return (0, i.jsx)(t(141342).l, {
                    label: h,
                    display: "full-width",
                    actions: j,
                    tint: (0, t(909595).V)(n)
                })
            }

            function c() {
                var e;
                let n = (0, t(723240).r)(),
                    i = (0, t(226309).lh)({
                        spaceId: n
                    }),
                    s = (0, t(192159).Fq)(i) && (null == i || null == (e = i.clock) ? void 0 : e.externalId);
                a.useEffect(() => (s ? t(474329).HQ({
                    bannerStore: t(465361).A,
                    id: "TestClockBanner",
                    contentKey: "test_clock",
                    styleKey: t(909595).q.Yellow,
                    prepend: !0
                }) : t(474329).zA({
                    bannerStore: t(465361).A,
                    id: "TestClockBanner"
                }), () => {
                    t(474329).zA({
                        bannerStore: t(465361).A,
                        id: "TestClockBanner"
                    })
                }), [s])
            }
        },
        368891: (e, n, t) => {
            t.d(n, {
                g: () => a
            });

            function a() {
                return (0, t(682985).O$)(t(728372).AppStoreCurrentUserSettingsStore)
            }
        },
        407879: (e, n, t) => {
            t.d(n, {
                g: () => p,
                i: () => d
            });
            var a = t(296540),
                i = t(474848);
            let s = {
                updatePaymentMethod: (0, i.jsx)(t(109939).sA, {
                    id: "subscription.payment_status_banner.update_payment_method",
                    defaultMessage: "Update payment information"
                }),
                viewWorkspaceOwner: (0, i.jsx)(t(109939).sA, {
                    id: "subscription.payment_status_banner.view_workspace_owner",
                    defaultMessage: "View workspace owner"
                }),
                confirmPayment: (0, i.jsx)(t(109939).sA, {
                    id: "subscription.payment_status_banner.confirm_payment",
                    defaultMessage: "Confirm payment"
                })
            };

            function o() {
                return () => {
                    t(599754).Ow()
                }
            }

            function r(e) {
                let {
                    messageType: n,
                    overdueInvoiceCount: a = 1
                } = e;
                switch (n) {
                    case "past_due_owner":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.payment_failed.past_due.workspace_owner",
                            defaultMessage: "We couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}. Please update your payment method or you may lose access to Notion soon.",
                            values: {
                                overdueInvoiceCount: a
                            }
                        });
                    case "past_due_member":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.payment_failed.past_due.member",
                            defaultMessage: "Please contact a workspace owner to update your payment method or you may lose access to Notion soon."
                        });
                    case "unpaid_owner":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.payment_failed.unpaid.workspace_owner",
                            defaultMessage: "Access to Notion is limited to viewing because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}.",
                            values: {
                                overdueInvoiceCount: a
                            }
                        });
                    case "unpaid_member":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.payment_failed.unpaid.member",
                            defaultMessage: "Access to Notion is limited to viewing. Contact a workspace owner to update your workspace’s payment method."
                        });
                    default:
                        (0, t(722371).HB)(n)
                }
            }

            function l(e) {
                let {
                    messageType: n,
                    overdueInvoiceCount: a = 1
                } = e;
                switch (n) {
                    case "past_due_owner":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.confirmation_required.past_due.workspace_owner",
                            defaultMessage: "Please confirm {overdueInvoiceCount, plural, one {your subscription payment} other {{overdueInvoiceCount} payments}} or you may lose access to Notion soon.",
                            values: {
                                overdueInvoiceCount: a
                            }
                        });
                    case "unpaid_owner":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.confirmation_required.unpaid.workspace_owner",
                            defaultMessage: "Access to Notion is limited to viewing. Confirm {overdueInvoiceCount, plural, one {your subscription payment} other {{overdueInvoiceCount} payments}} to restore full access.",
                            values: {
                                overdueInvoiceCount: a
                            }
                        });
                    case "unpaid_member":
                        return (0, i.jsx)(t(109939).sA, {
                            id: "subscription.payment_status_banner.confirmation_required.unpaid.member",
                            defaultMessage: "Access to Notion is limited to viewing. Contact a workspace owner to update your workspace’s payment method."
                        });
                    default:
                        (0, t(722371).HB)(n)
                }
            }

            function c(e) {
                let {
                    billingStatusData: n
                } = e;
                if ((null == n ? void 0 : n.data) === void 0) return;
                let {
                    overdueReason: a
                } = n.data;
                if (a) switch (a) {
                    case "payment_failed":
                        return function(e) {
                            let {
                                billingStatusData: n,
                                uncollectibleExperienceEnabled: a
                            } = e;
                            if (!(null != n && n.data)) return;
                            let {
                                isWorkspaceOwner: i
                            } = n, {
                                invoiceHostedUrl: l,
                                overdueInvoiceCount: c,
                                bannerKey: u
                            } = n.data;
                            switch (u) {
                                case "past_due":
                                    return function(e) {
                                        let {
                                            isWorkspaceOwner: n,
                                            invoiceHostedUrl: a,
                                            overdueInvoiceCount: i
                                        } = e, l = t(909595).q.Yellow;
                                        return n ? {
                                            bannerStyleKey: l,
                                            messageType: "past_due_owner",
                                            messageText: r({
                                                overdueInvoiceCount: i,
                                                messageType: "past_due_owner"
                                            }),
                                            callToActionText: s.updatePaymentMethod,
                                            callToActionHandler: (0, t(987954).a)(a)
                                        } : {
                                            bannerStyleKey: l,
                                            messageType: "past_due_member",
                                            messageText: r({
                                                overdueInvoiceCount: i,
                                                messageType: "past_due_member"
                                            }),
                                            callToActionText: s.viewWorkspaceOwner,
                                            callToActionHandler: o()
                                        }
                                    }({
                                        isWorkspaceOwner: i,
                                        invoiceHostedUrl: l,
                                        overdueInvoiceCount: c
                                    });
                                case "unpaid":
                                    if (a) return;
                                    return function(e) {
                                        let {
                                            isWorkspaceOwner: n,
                                            invoiceHostedUrl: a,
                                            overdueInvoiceCount: i
                                        } = e, l = t(909595).q.LightRed;
                                        return n ? {
                                            bannerStyleKey: l,
                                            messageType: "unpaid_owner",
                                            messageText: r({
                                                overdueInvoiceCount: i,
                                                messageType: "unpaid_owner"
                                            }),
                                            callToActionText: s.updatePaymentMethod,
                                            callToActionHandler: (0, t(987954).a)(a)
                                        } : {
                                            bannerStyleKey: l,
                                            messageType: "unpaid_member",
                                            messageText: r({
                                                overdueInvoiceCount: i,
                                                messageType: "unpaid_member"
                                            }),
                                            callToActionText: s.viewWorkspaceOwner,
                                            callToActionHandler: o()
                                        }
                                    }({
                                        isWorkspaceOwner: i,
                                        invoiceHostedUrl: l,
                                        overdueInvoiceCount: c
                                    });
                                default:
                                    (0, t(722371).HB)(u)
                            }
                        }(e);
                    case "confirmation_required":
                        return function(e) {
                            if (!e.data) return;
                            let {
                                isWorkspaceOwner: n
                            } = e, {
                                invoiceHostedUrl: a,
                                bannerKey: i
                            } = e.data;
                            switch (i) {
                                case "past_due":
                                    if (n) return {
                                        bannerStyleKey: t(909595).q.Yellow,
                                        messageType: "past_due_owner",
                                        messageText: l({
                                            overdueInvoiceCount: void 0,
                                            messageType: "past_due_owner"
                                        }),
                                        callToActionText: s.confirmPayment,
                                        callToActionHandler: (0, t(987954).a)(a)
                                    };
                                    return;
                                case "unpaid":
                                    let r;
                                    return r = t(909595).q.LightRed, n ? {
                                        bannerStyleKey: r,
                                        messageType: "unpaid_owner",
                                        messageText: l({
                                            overdueInvoiceCount: void 0,
                                            messageType: "unpaid_owner"
                                        }),
                                        callToActionText: s.confirmPayment,
                                        callToActionHandler: (0, t(987954).a)(a)
                                    } : {
                                        bannerStyleKey: r,
                                        messageType: "unpaid_member",
                                        messageText: l({
                                            overdueInvoiceCount: void 0,
                                            messageType: "unpaid_member"
                                        }),
                                        callToActionText: s.viewWorkspaceOwner,
                                        callToActionHandler: o()
                                    };
                                default:
                                    (0, t(722371).HB)(i)
                            }
                        }(n);
                    default:
                        (0, t(722371).HB)(a)
                }
            }

            function u(e) {
                let n = t(731632).A.state,
                    a = (0, t(887788).h)(e);
                if (n && n.data) return { ...n,
                    isWorkspaceOwner: a
                }
            }

            function d() {
                let e = (0, t(533992).v3)(),
                    n = (0, t(682985).K8)(() => u(e), [e]),
                    i = (0, t(682985).K8)(() => (0, t(717274).Jq)(), []),
                    s = (0, a.useMemo)(() => c({
                        billingStatusData: n,
                        uncollectibleExperienceEnabled: i
                    }), [n, i]);
                a.useEffect(() => (["local", "development", "staging"].includes("production") && (0, t(202146).exposeDebugValue)("billingStatus", n), null != n && n.data && s ? (t(474329).HQ({
                    bannerStore: t(465361).A,
                    id: "BillingSubscriptionBanner",
                    contentKey: "billing_subscription_status",
                    styleKey: s.bannerStyleKey,
                    prepend: !0
                }), (0, t(104310).u)({
                    event: {
                        eventName: "billing_subscription_banner_displayed",
                        eventProperties: {
                            isWorkspaceOwner: n.isWorkspaceOwner,
                            ...n.data
                        }
                    }
                })) : t(474329).zA({
                    bannerStore: t(465361).A,
                    id: "BillingSubscriptionBanner"
                }), () => {
                    t(474329).zA({
                        bannerStore: t(465361).A,
                        id: "BillingSubscriptionBanner"
                    })
                }), [n, s])
            }

            function p(e) {
                let {
                    legacyColor: n
                } = e, s = (0, t(533992).v3)(), o = (0, t(682985).K8)(() => u(s), [s]), r = (0, t(682985).K8)(() => (0, t(717274).Jq)(), []), l = (0, a.useMemo)(() => c({
                    billingStatusData: o,
                    uncollectibleExperienceEnabled: r
                }), [o, r]), d = null == l ? void 0 : l.callToActionText, p = null == l ? void 0 : l.callToActionHandler, m = (0, a.useCallback)(e => {
                    void 0 !== p && p(e), null != o && o.data && (0, t(104310).u)({
                        event: {
                            eventName: "billing_subscription_banner_action",
                            eventProperties: {
                                isWorkspaceOwner: o.isWorkspaceOwner,
                                ...o.data
                            }
                        }
                    })
                }, [p, o]);
                return l ? (0, i.jsx)(t(141342).l, {
                    label: l.messageText,
                    display: "full-width",
                    actions: [{
                        label: d,
                        onClick: e => m(e)
                    }],
                    tint: (0, t(909595).V)(n)
                }) : null
            }
        },
        417066: (e, n, t) => {
            t.d(n, {
                P: () => i
            });
            let a = new Map;

            function i({
                environment: e,
                skipServerFetch: n,
                includeTopSpaces: a = !1,
                limit: o
            }) {
                return (0, t(97668).Yb)(async () => await s({
                    environment: e,
                    includeTopSpaces: a,
                    limit: o,
                    skipServerFetch: n
                }), [e, n, a, o])
            }
            async function s(e) {
                let {
                    environment: n,
                    includeTopSpaces: t,
                    limit: i,
                    skipServerFetch: s
                } = e, o = n.currentUser.id, r = `${t}-${i??"default"}`, l = a.get(r);
                if (l && l.userId === o) return l.response;
                if (s) return;
                let c = await n.api.callMainCellApi({
                    eventName: "hasJoinableSpaces",
                    environment: n,
                    data: {
                        includeTopSpaces: t,
                        limit: i
                    }
                });
                if ("failed" !== c.type && o) return a.set(r, {
                    userId: o,
                    response: c.data
                }), c.data
            }
        },
        508854: (e, n, t) => {
            t.d(n, {
                A: () => o,
                b: () => s
            });
            var a = t(296540),
                i = t(474848);

            function s(e) {
                let {
                    legacyColor: n
                } = e, a = (0, i.jsx)(t(109939).sA, {
                    id: "app.banner.trial_subscription.add_payment_method",
                    defaultMessage: "Add a payment method to continue using your free trial. You will not be charged until the end of your trial period."
                }), s = (0, i.jsx)(t(109939).sA, {
                    id: "app.banner.trial_subscription.add_payment_method.call_to_action",
                    defaultMessage: "Add payment method"
                });
                return (0, i.jsx)(t(141342).l, {
                    label: a,
                    display: "full-width",
                    actions: [{
                        label: s,
                        onClick: () => {
                            t(599754).Ow({
                                currentPage: "billing"
                            })
                        }
                    }],
                    tint: (0, t(909595).V)(n)
                })
            }

            function o() {
                let e, n = (0, t(723240).r)(),
                    i = (0, t(226309).lh)({
                        spaceId: n
                    }),
                    s = (0, t(236946).p)(),
                    o = (null == i ? void 0 : i.type) === "admin" && (0, t(192159).i5)(i);
                e = !!o && !!s && !(0, t(192159).N8)(i) && !i.paymentMethod && !(0, t(159899).DH)(s.offer.campaign) && t(906745).DateTime.now() > (null == o ? void 0 : o.minus({
                    days: 15
                })), a.useEffect(() => (e ? t(474329).HQ({
                    bannerStore: t(465361).A,
                    id: "SubscriptionTrialAddPaymentMethodBanner",
                    contentKey: "subscription_trial_add_payment_method",
                    styleKey: t(909595).q.Yellow,
                    prepend: !0
                }) : t(474329).zA({
                    bannerStore: t(465361).A,
                    id: "SubscriptionTrialAddPaymentMethodBanner"
                }), () => {
                    t(474329).zA({
                        bannerStore: t(465361).A,
                        id: "SubscriptionTrialAddPaymentMethodBanner"
                    })
                }), [e])
            }
        },
        691207: (e, n, t) => {
            t.d(n, {
                U: () => a
            });
            let a = new(t(245541)).R({
                key: "externalPagesBannerPreference",
                namespace: t(274919).Bq,
                important: !0,
                trackingType: "necessary"
            })
        },
        748356: (e, n, t) => {
            t.d(n, {
                f: () => u,
                l: () => f
            }), t(581454), t(296540);
            var a = t(474848);
            let i = (0, t(109939).YK)({
                learnMore: {
                    id: "banner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "banner.dismiss",
                    defaultMessage: "Dismiss"
                }
            });

            function s(e, n) {
                return (0, t(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: t(632079).Tj[e].background.secondary,
                        padding: "8px 12px",
                        minHeight: 44,
                        flexShrink: 0
                    },
                    icon: {
                        width: t(986939).A.isMobile ? t(104509).Ev.default : t(104509).Ev.sm,
                        height: t(986939).A.isMobile ? t(104509).Ev.default : t(104509).Ev.sm,
                        fill: n ? t(632079).Tj[n].icon.accentPrimary : t(632079).Tj[e].icon.secondary
                    },
                    content: {
                        color: t(632079).Tj[e].text.secondary
                    },
                    contentAutoLayout: {
                        position: "relative",
                        color: t(632079).Tj[e].text.secondary
                    },
                    learnMoreIcon: {
                        fill: t(632079).Tj[e].icon.secondary
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    }
                }), [e, n])
            }

            function o(e) {
                let {
                    onDismiss: n
                } = e, s = (0, t(109939).tz)();
                return n ? (0, a.jsx)(t(374533).A, {
                    size: "xs",
                    onClick: n,
                    icon: t(25094).xMarkSmallIcon,
                    colorVariant: "primary",
                    ariaLabel: s.formatMessage(i.dismiss)
                }) : (0, a.jsx)("div", {})
            }

            function r(e) {
                let {
                    tint: n,
                    iconGroup: i,
                    style: s
                } = e;
                return i ? (0, a.jsx)(t(708966).Q, {
                    iconGroup: i,
                    variantName: "small",
                    colorPalette: n,
                    colorVariant: "secondary",
                    style: s
                }) : null
            }
            let l = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "x1q0g3np",
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                c = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function u(e) {
                let {
                    tint: n,
                    action: i
                } = e, {
                    label: s,
                    onClick: o,
                    icon: r
                } = i, c = (0, t(960253).I)(() => ({
                    button: {
                        color: "gray" === n ? t(632079).Tj.text.primary : t(632079).Tj[n].text.secondary,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: t(632079).Tj[n].border.strongTranslucent
                    },
                    buttonHovered: {
                        backgroundColor: t(632079).Tj[n].background.secondaryTranslucent
                    },
                    buttonPressed: {
                        backgroundColor: t(632079).Tj[n].background.tertiaryTranslucent
                    }
                }), [n]);
                return (0, a.jsx)(t(548436).A, {
                    iconLeading: r ? {
                        icon: r,
                        size: "sm"
                    } : void 0,
                    onClick: o,
                    style: c.button,
                    hoveredStyle: c.buttonHovered,
                    pressedStyle: c.buttonPressed,
                    children: (0, a.jsx)(t(111010).D, {
                        styleKey: "bodyMedium",
                        style: l,
                        children: s
                    })
                })
            }

            function d(e) {
                let {
                    label: n,
                    iconGroup: l,
                    tint: d,
                    onDismiss: p,
                    actions: m,
                    onLearnMoreClick: y
                } = e, b = s(d), f = (0, t(109939).tz)();
                return (0, a.jsxs)(t(4458).fI, {
                    style: b.container,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, a.jsxs)(t(4458).fI, {
                        style: b.contentAutoLayout,
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, a.jsx)(r, {
                            tint: d,
                            iconGroup: l,
                            style: b.titleIcon
                        }), (0, a.jsx)(t(111010).D, {
                            styleKey: "bodyMedium",
                            children: n
                        }), y ? (0, a.jsx)(t(374533).A, {
                            onClick: y,
                            icon: () => (0, a.jsx)(t(708966).Q, {
                                iconGroup: t(799472).u,
                                variantName: "default",
                                colorPalette: d,
                                colorVariant: "secondary"
                            }),
                            ariaLabel: f.formatMessage(i.learnMore)
                        }) : void 0]
                    }), (0, a.jsxs)(t(4458).fI, {
                        gap: 12,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: c,
                        flex: "1 1 0",
                        children: [(0, a.jsx)(t(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            style: c,
                            children: null == m ? void 0 : m.map((e, n) => e.isCustom ? e.render() : (0, a.jsx)(u, {
                                tint: d,
                                action: e
                            }, n))
                        }), (0, a.jsx)(o, {
                            onDismiss: p
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    label: n,
                    iconGroup: l,
                    staticIcon: d,
                    iconColor: p,
                    tint: m,
                    onDismiss: y,
                    actions: b,
                    onLearnMoreClick: f,
                    alignment: g = "center"
                } = e, x = s(m, p), v = (0, t(109939).tz)(), _ = l ? (0, a.jsx)(r, {
                    tint: m,
                    iconGroup: l,
                    style: x.titleIcon
                }) : d ? d({ ...x.icon,
                    ...x.titleIcon
                }) : null;
                return (0, a.jsxs)(t(4458).fI, {
                    style: x.container,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 8,
                    children: [(0, a.jsxs)(t(4458).fI, {
                        style: x.contentAutoLayout,
                        gap: 24,
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "start" === g ? "space-between" : "center",
                        children: [(0, a.jsxs)(t(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: c,
                            children: [_, (0, a.jsx)(t(111010).D, {
                                styleKey: "bodyMedium",
                                children: n
                            }), f ? (0, a.jsx)(t(51831).m, {
                                content: () => v.formatMessage(i.learnMore),
                                children: e => (0, a.jsx)(t(374533).A, {
                                    onClick: f,
                                    icon: () => (0, a.jsx)(t(708966).Q, {
                                        iconGroup: t(799472).u,
                                        variantName: "default",
                                        colorPalette: m,
                                        colorVariant: "secondary"
                                    }),
                                    ariaLabel: v.formatMessage(i.learnMore),
                                    ...e
                                })
                            }) : void 0]
                        }), b ? (0, a.jsx)(t(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == b ? void 0 : b.map((e, n) => e.isCustom ? e.render() : (0, a.jsx)(u, {
                                tint: m,
                                action: e
                            }, n))
                        }) : null]
                    }), (0, a.jsx)(o, {
                        onDismiss: y
                    })]
                })
            }

            function m(e) {
                let {
                    label: n,
                    description: i,
                    iconGroup: l,
                    staticIcon: d,
                    iconColor: p,
                    tint: m,
                    onDismiss: y,
                    actions: b,
                    noRoundedCorners: f
                } = e, g = s(m, p), x = (0, t(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: t(632079).Tj[m].background.secondary,
                        padding: 16,
                        borderRadius: 8 * !f,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [m, f]), v = l ? (0, a.jsx)(r, {
                    tint: m,
                    iconGroup: l
                }) : d ? d(g.icon) : null;
                return (0, a.jsxs)(t(4458).fI, {
                    style: x.container,
                    gap: 8,
                    width: "100%",
                    children: [v ? (0, a.jsx)(t(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: v
                    }) : null, (0, a.jsxs)(t(4458).VP, {
                        style: g.content,
                        gap: 8,
                        flex: "1 1 0",
                        children: [(0, a.jsxs)(t(4458).VP, {
                            gap: 4,
                            style: c,
                            children: [(0, a.jsx)(t(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "gray" === m ? "primary" : void 0,
                                children: n
                            }), i ? (0, a.jsx)(t(111010).D, {
                                styleKey: "bodyRegular",
                                children: i
                            }) : null]
                        }), b ? (0, a.jsx)(t(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == b ? void 0 : b.map((e, n) => e.isCustom ? e.render() : (0, a.jsx)(u, {
                                tint: m,
                                action: e
                            }, n))
                        }) : null]
                    }), (0, a.jsx)(o, {
                        onDismiss: y
                    })]
                })
            }

            function y(e) {
                let {
                    label: n,
                    staticIcon: i,
                    tint: r,
                    iconColor: l,
                    onDismiss: d,
                    actions: p
                } = e, m = s(r, l), y = (0, t(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: t(632079).Tj[r].background.secondary,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 8,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [r]);
                return (0, a.jsxs)(t(4458).fI, {
                    style: y.container,
                    gap: 8,
                    alignItems: p ? "center" : void 0,
                    justifyContent: p ? "center" : void 0,
                    width: "100%",
                    children: [i ? (0, a.jsx)(t(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: i(m.icon)
                    }) : null, (0, a.jsxs)(t(4458).fI, {
                        style: m.content,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: "1 1 0",
                        children: [(0, a.jsx)(t(4458).VP, {
                            gap: 4,
                            style: c,
                            flex: "1 1 0",
                            children: (0, a.jsx)(t(111010).D, {
                                styleKey: "bodyRegular",
                                children: n
                            })
                        }), p ? (0, a.jsx)(t(4458).fI, {
                            gap: 8,
                            style: c,
                            children: null == p ? void 0 : p.map((e, n) => e.isCustom ? e.render() : (0, a.jsx)(u, {
                                tint: r,
                                action: e
                            }, n))
                        }) : null]
                    }), (0, a.jsx)(o, {
                        onDismiss: d
                    })]
                })
            }

            function b(e) {
                let {
                    tint: n,
                    onDismiss: i,
                    content: r,
                    alignment: l = "center",
                    verticalAlignment: c = "center"
                } = e, u = s(n);
                return (0, a.jsxs)(t(4458).fI, {
                    style: u.container,
                    gap: 8,
                    alignItems: c,
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, a.jsx)(t(4458).fI, {
                        style: u.content,
                        flexGrow: 1,
                        justifyContent: l,
                        children: r
                    }), (0, a.jsx)(o, {
                        onDismiss: i
                    })]
                })
            }

            function f(e) {
                let {
                    display: n
                } = e;
                switch (n) {
                    case "inline":
                        return (0, a.jsx)(m, { ...e
                        });
                    case "full-width":
                        if (t(986939).A.isMobile) return (0, a.jsx)(d, { ...e
                        });
                        return (0, a.jsx)(p, { ...e
                        });
                    case "full-width-no-content":
                        return (0, a.jsx)(b, { ...e
                        });
                    case "inline-compact":
                        return (0, a.jsx)(y, { ...e
                        })
                }
                return (0, a.jsx)(a.Fragment, {})
            }
        },
        847869: (e, n, t) => {
            t.d(n, {
                G: () => o,
                U: () => s
            });
            var a = t(296540),
                i = t(474848);

            function s(e) {
                let {
                    legacyColor: n
                } = e, a = (0, t(533992).v3)(), s = a.currentUser.id, o = (0, t(972740).L)(), r = (0, t(993077).U2)(o), l = (0, t(682985).K8)(() => {
                    if (!o || !s || !r) return null;
                    let e = null == (u = t(266319).A.getData(a, {
                        spaceId: o.id
                    })) || null == (u = u.bannerIds) ? void 0 : u[0];
                    if (!e) return null;
                    let n = t(59521).b.createChildStore(o, {
                        id: e,
                        table: "subscription_banner",
                        spaceId: o.id
                    });
                    if (!n.isDefined()) return null;
                    let l = n.getBannerText();
                    if (l) return (0, i.jsx)("span", {
                        children: l
                    });
                    let c = !!(null == r ? void 0 : r.isWorkspaceOwner());
                    var u, d = n.getBannerKey();
                    switch (d) {
                        case "uncollectible_past_due":
                            return c ? (0, i.jsx)(t(109939).sA, {
                                id: "subscription.payment_uncollectible.past_due.workspace_owner",
                                defaultMessage: "Your workspace may lose editing capabilities soon due to past-due invoices. Please remit payment to avoid losing access to Notion. If you have any questions, please reach out to billing@makenotion.com."
                            }) : (0, i.jsx)(t(109939).sA, {
                                id: "subscription.payment_uncollectible.past_due.member",
                                defaultMessage: "Your workspace may lose editing capabilities soon due to past-due invoices. Please remit payment to avoid losing access to Notion. If you have any questions, please reach out to billing@makenotion.com."
                            });
                        case "uncollectible_unpaid":
                            return c ? (0, i.jsx)(t(109939).sA, {
                                id: "subscription.payment_uncollectible.unpaid.workspace_owner",
                                defaultMessage: "Your workspace is unable to edit due to past-due invoices. Please remit payment to avoid losing access to Notion. If you have any questions, please reach out to billing@makenotion.com."
                            }) : (0, i.jsx)(t(109939).sA, {
                                id: "subscription.payment_uncollectible.unpaid.member",
                                defaultMessage: "Your workspace is unable to edit due to past-due invoices. Please remit payment to avoid losing access to Notion. If you have any questions, please reach out to billing@makenotion.com."
                            });
                        case "dunning":
                        case "legacy_price":
                            return;
                        default:
                            return (0, t(722371).HB)(d)
                    }
                }, [a, s, o, r]);
                return l ? (0, i.jsx)(t(141342).l, {
                    label: l,
                    display: "full-width",
                    actions: [],
                    tint: (0, t(909595).V)(n)
                }) : null
            }

            function o() {
                let e = (0, t(533992).v3)(),
                    n = (0, t(682985).O$)(t(728372).AppStoreSidebarSpaceStore),
                    [i, s, o, r, l] = (0, t(682985).K8)(() => {
                        var a;
                        if (!n) return [];
                        let i = null == (a = t(266319).A.getData(e, {
                            spaceId: n.id
                        })) ? void 0 : a.bannerIds;
                        if (i && i.length > 0) {
                            let e = i[0],
                                a = t(59521).b.createChildStore(n, {
                                    id: e,
                                    table: "subscription_banner",
                                    spaceId: n.id
                                });
                            if (!a.isDefined()) return [];
                            let s = a.getBannerKey(),
                                o = a.getBannerType(),
                                r = a.getAudience(),
                                l = a.getBannerText();
                            switch (o) {
                                case "warning":
                                    return [e, t(909595).q.Yellow, s, r, l];
                                case "alert":
                                    return [e, t(909595).q.LightRed, s, r, l];
                                case "info":
                                    return [e, t(909595).q.LightBlue, s, r, l];
                                case "uncollectible":
                                    return [e, "uncollectible_unpaid" === s ? t(909595).q.LightRed : t(909595).q.Yellow, s, r, l];
                                default:
                                    (0, t(722371).HB)(o)
                            }
                        }
                        return []
                    }, [e, n]);
                a.useEffect(() => {
                    if (i && s) {
                        if (t(474329).HQ({
                                bannerStore: t(465361).A,
                                id: "SubscriptionUncollectibleBanner",
                                contentKey: "arbitrary_subscription_banner",
                                styleKey: s,
                                prepend: !0
                            }), o && r) {
                            let e = {
                                banner: o,
                                audience: r,
                                text: ""
                            };
                            l && (e.text = l), (0, t(104310).u)({
                                event: {
                                    eventName: "subscription_uncollectible_banner_displayed",
                                    eventProperties: e
                                }
                            })
                        }
                    } else t(474329).zA({
                        bannerStore: t(465361).A,
                        id: "SubscriptionUncollectibleBanner"
                    });
                    return () => {
                        t(474329).zA({
                            bannerStore: t(465361).A,
                            id: "SubscriptionUncollectibleBanner"
                        })
                    }
                }, [e, i, s, o, r, l])
            }
        }
    }
]);