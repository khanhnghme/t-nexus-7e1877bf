"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [9914], {
        100010: (e, t, a) => {
            a.d(t, {
                Sf: () => n,
                UY: () => l,
                ft: () => r,
                mm: () => i,
                vU: () => s,
                wg: () => o
            }), a(581454);
            let i = a(824626).to.map(e => ({
                    key: e,
                    value: a(962299).A.formatMessage(a(824626).M6[e])
                })),
                n = a(824626).QA.map(e => ({
                    key: e,
                    value: a(962299).A.formatMessage(a(824626).mY[e])
                })),
                r = a(824626).bS.map(e => ({
                    key: e,
                    value: a(962299).A.formatMessage(a(824626).JU[e])
                })),
                o = a(824626).RV.map(e => ({
                    key: e,
                    value: a(962299).A.formatMessage(a(824626).j$[e])
                })),
                l = a(824626).Gn.map(e => ({
                    key: e,
                    value: a(962299).A.formatMessage(a(824626).qG[e])
                }));

            function s(e) {
                return a(824626).f7.map(t => ({
                    key: t,
                    value: a(962299).A.formatMessage(a(824626).TG[t], {
                        userLocale: e
                    })
                }))
            }
        },
        199231: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        isModalOpen: !1,
                        marketplaceListingId: "",
                        teamStore: void 0,
                        hasSuccessfullyPurchasedProduct: !1,
                        templateId: "",
                        creatorId: "",
                        customerId: ""
                    }
                }
            }
            let r = new n
        },
        205852: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        isOpen: !1
                    }
                }
                open(e) {
                    this.setState({
                        isOpen: !0,
                        ...e
                    })
                }
                submit() {
                    var e, t;
                    null == (e = (t = this.state).onSubmit) || e.call(t, !0), this.setState({
                        isOpen: !1
                    })
                }
                skip() {
                    var e, t;
                    null == (e = (t = this.state).onSubmit) || e.call(t, !1), this.setState({
                        isOpen: !1
                    })
                }
                cancel() {
                    this.setState({
                        isOpen: !1
                    })
                }
            }
            let r = new n
        },
        276744: (e, t, a) => {
            a.d(t, {
                I: () => i
            });

            function i() {
                let e = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    let {
                        RouterStore: t
                    } = e;
                    return t.state.route
                }, [e])
            }
        },
        303072: (e, t, a) => {
            function i(e) {
                let {
                    taxAmount: t,
                    price: i,
                    currencyCode: n
                } = e, r = new(a(972457)).W(n, t);
                return new(a(972457)).W(n, i).plus(r)
            }

            function n(e, t, i) {
                return {
                    appearance: (0, a(889503).getStripeAppearance)(e, i),
                    mode: "payment",
                    currency: "usd",
                    amount: 1e3,
                    paymentMethodTypes: ["card"],
                    setupFutureUsage: "on_session",
                    locale: (0, a(889503).stripeElementLocaleGivenNotionLocale)(t)
                }
            }

            function r(e) {
                return "card" === e || "google_pay" === e || "apple_pay" === e
            }
            a.d(t, {
                $D: () => i,
                IT: () => n,
                t6: () => r
            })
        },
        318311: (e, t, a) => {
            a.d(t, {
                B: () => n
            }), a(16280);
            var i = a(296540);

            function n(e, t, r = 0) {
                (0, i.useEffect)(() => {
                    let i = new(a(864844)).E({
                        throttleMs: r
                    });
                    if (!e.current) throw Error("ref.current is null");
                    return i.observe(e.current), i.rect.addListener(t), () => {
                        i.destroy()
                    }
                }, [t])
            }
        },
        432843: (e, t, a) => {
            a.d(t, {
                l: () => z
            });
            var i = a(296540);
            a(581454);
            var n = a(474848);
            let r = "marketplace-checkout-email",
                o = {
                    inputLabel: {
                        fontSize: 12,
                        lineHeight: "15px",
                        fontWeight: a(699422).Wy.regular,
                        color: a(632079).Tj.text.secondary,
                        marginBottom: 8
                    },
                    inputContainer: {
                        marginTop: 4,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingInlineStart: 0,
                        paddingInlineEnd: 0
                    },
                    inputStyle: {
                        lineHeight: "18px",
                        padding: "7px 8px",
                        cursor: "not-allowed",
                        color: a(632079).Tj.text.tertiary
                    }
                };

            function l() {
                let e = (0, a(682985).K8)(() => {
                    var e;
                    return (null == (e = a(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail()) || ""
                }, []);
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(a(111010).D, {
                        as: "label",
                        id: r,
                        style: o.inputLabel,
                        children: (0, n.jsx)(a(109939).sA, {
                            id: "inApp.marketplace.checkout.email",
                            defaultMessage: "Email"
                        })
                    }), (0, n.jsx)(a(36481).p, {
                        disabled: !0,
                        value: e,
                        style: o.inputContainer,
                        inputStyle: o.inputStyle,
                        "aria-labelledby": r
                    })]
                })
            }
            let s = (0, a(109939).YK)({
                    paymentDetails: {
                        id: "inApp.marketplace.checkout.payment.secondaryText",
                        defaultMessage: "Payment details"
                    },
                    billedTo: {
                        id: "inApp.marketplace.checkout.payment.billedTo",
                        defaultMessage: "Billed to"
                    }
                }),
                d = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                c = {
                    isolation: "auto"
                },
                u = {
                    zIndex: 1
                };

            function p(e) {
                let {
                    onAddressChange: t,
                    contacts: i,
                    setIsPaymentElementComplete: r,
                    isPaying: o
                } = e, p = (0, a(222926).useStripe)(), m = (0, a(222926).useElements)(), g = (0, a(109939).tz)(), y = {
                    mode: "billing",
                    contacts: i.length > 0 ? i.map(e => ({
                        name: e.name,
                        address: e.address
                    })) : void 0
                }, f = (0, a(84235).Y)(t, 1e3);
                return (0, n.jsxs)(a(4458).VP, {
                    minWidth: a(986939).A.isMobile ? "100%" : 390,
                    gap: 24,
                    children: [(0, n.jsxs)("div", {
                        style: { ...d,
                            ...c
                        },
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "captionSemibold",
                            colorVariant: "secondary",
                            children: g.formatMessage(s.billedTo)
                        }), (0, n.jsx)("div", {
                            style: u,
                            children: (0, n.jsx)(a(222926).AddressElement, {
                                options: y,
                                onChange: f
                            })
                        }), (0, n.jsx)(l, {})]
                    }), (0, n.jsxs)(a(4458).VP, {
                        width: "100%",
                        gap: 8,
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "captionSemibold",
                            colorVariant: "secondary",
                            children: g.formatMessage(s.paymentDetails)
                        }), (0, n.jsx)(a(222926).PaymentElement, {
                            options: {
                                business: {
                                    name: "Notion Labs, Inc"
                                },
                                readOnly: o
                            },
                            onChange: e => {
                                p && m && (e.value.type && (0, a(303072).t6)(e.value.type) && a(544841).A.setState({ ...a(544841).A.state,
                                    paymentType: e.value.type
                                }), e.complete && r(!0))
                            }
                        })]
                    })]
                })
            }
            let m = {
                container: {
                    display: "flex",
                    gap: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: a(986939).A.isMobile ? "16px 16px 0px 16px" : "16px",
                    borderRadius: 6,
                    border: `1px solid ${a(632079).Tj.border.primary}`,
                    maxHeight: a(986939).A.isMobile ? "120px" : "initial",
                    overflow: a(986939).A.isMobile ? "hidden" : "initial"
                },
                mobileProductImage: {
                    width: "87px",
                    minHeight: "100px",
                    height: "auto",
                    border: a(986939).A.isMobile ? "none" : `1px solid ${a(632079).Tj.border.primary}`,
                    boxShadow: a(986939).A.isMobile ? "rgba(0, 0, 0, 0.02) -10px 12px 32px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" : "unset",
                    borderRadius: 6
                },
                productImageContainer: {
                    alignSelf: a(986939).A.isMobile ? "start" : "initial"
                },
                productImage: {
                    width: 118,
                    height: 74,
                    borderRadius: 6,
                    border: `1px solid ${a(632079).Tj.border.primary}`
                },
                productNameAndCreator: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingBottom: 16 * !!a(986939).A.isMobile
                },
                productName: {
                    display: "flex",
                    flexWrap: "wrap",
                    maxWidth: 181
                }
            };

            function g(e) {
                let {
                    productInformation: t
                } = e, {
                    name: i,
                    imageSource: r,
                    mobileImageSource: o,
                    creatorIconImage: l,
                    creatorName: s
                } = t;
                return (0, n.jsxs)("div", {
                    style: m.container,
                    children: [(0, n.jsxs)("div", {
                        style: m.productNameAndCreator,
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "titleSmSemibold",
                            colorVariant: "primary",
                            style: m.productName,
                            children: i
                        }), (0, n.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, n.jsx)(a(321753).A, {
                                size: 20,
                                avatar: {
                                    name: s,
                                    avatarUrl: l
                                }
                            }), (0, n.jsx)(a(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                children: s
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        style: m.productImageContainer,
                        children: (0, n.jsx)(a(989059).A, {
                            src: a(986939).A.isMobile ? o : r,
                            alt: i,
                            style: a(986939).A.isMobile ? m.mobileProductImage : m.productImage
                        })
                    })]
                })
            }
            let y = {
                cursor: "pointer"
            };

            function f(e) {
                let {
                    children: t,
                    source: i,
                    styles: r = {}
                } = e, o = (0, a(682985).K8)(() => a(218744).default.getConfigKey("mwn_refund_policy_link", "link"), []);
                return o ? (0, n.jsx)("a", {
                    style: { ...y,
                        ...r
                    },
                    href: o,
                    target: "_blank",
                    onClick: () => {
                        (0, a(104310).u)({
                            event: {
                                eventName: "marketplace_refund_policy_click",
                                eventProperties: {
                                    source: i
                                }
                            }
                        })
                    },
                    children: t
                }) : (0, n.jsx)(n.Fragment, {
                    children: t
                })
            }
            let h = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    position: "relative"
                },
                inputOuter: {
                    height: 34,
                    paddingTop: 10,
                    paddingInlineEnd: 6,
                    paddingBottom: 10,
                    paddingInlineStart: 10,
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 6,
                    border: a(632079).Tj.border.primary,
                    background: a(632079).Tj.background.secondary
                },
                input: {
                    position: "relative"
                },
                buttonContainer: {
                    cursor: "pointer"
                },
                invalidBoxShadow: {
                    position: "absolute",
                    pointerEvents: "none",
                    isolation: "auto",
                    borderRadius: 6,
                    inset: 0,
                    zIndex: 1,
                    boxShadow: "0px 0px 0px 1px #D44C47 inset, 0px 0px 0px 2px rgba(225, 111, 100, 0.35)"
                }
            };

            function x(e) {
                let {
                    couponCode: t,
                    onApplyClick: i,
                    onCouponChange: r,
                    isApplyingCoupon: o,
                    isCouponApplied: l,
                    onRemoveClick: s,
                    invalidCouponReason: d,
                    disabled: c
                } = e, u = (0, a(109939).tz)(), p = c || o || "" === t, m = function(e) {
                    let {
                        disabled: t,
                        applyButtonDisabled: i
                    } = e;
                    return (0, a(960253).I)(() => ({
                        inputInner: {
                            cursor: t ? "not-allowed" : void 0
                        },
                        button: {
                            background: "transparent",
                            height: 28,
                            paddingTop: 0,
                            paddingInlineEnd: 8,
                            paddingBottom: 0,
                            paddingInlineStart: 8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 6,
                            isolation: "auto",
                            cursor: i ? "not-allowed" : void 0,
                            width: "max-content"
                        },
                        buttonHovered: {
                            background: t ? void 0 : a(632079).Tj.buttonHoveredBackground
                        },
                        buttonPressed: {
                            background: t ? void 0 : a(632079).Tj.buttonPressedBackground
                        }
                    }), [t, i])
                }({
                    disabled: c || o,
                    applyButtonDisabled: p
                }), g = async () => {
                    await i(t)
                }, y = !!d;
                return (0, n.jsxs)("div", {
                    style: h.container,
                    children: [(0, n.jsx)(a(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: (0, n.jsx)("label", {
                            htmlFor: "couponInput",
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.coupon.label",
                                defaultMessage: "Coupon"
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        style: h.input,
                        children: [(0, n.jsx)(a(36481).p, {
                            id: "couponInput",
                            ignoreKeyboardMode: !0,
                            value: t,
                            disabled: c || o,
                            onChange: r,
                            placeholder: u.formatMessage({
                                id: "inApp.marketplace.checkout.coupon.input.placeholder",
                                defaultMessage: "Code"
                            }),
                            style: h.inputOuter,
                            inputStyle: m.inputInner,
                            rightStyle: h.buttonContainer,
                            right: o ? (0, n.jsx)(a(517334).k, {}) : l ? (0, n.jsx)(a(64960).Ay, {
                                style: m.button,
                                onClick: () => {
                                    s()
                                },
                                hoveredStyle: m.buttonHovered,
                                pressedStyle: m.buttonPressed,
                                disabled: c,
                                children: (0, n.jsx)(a(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "primary",
                                    children: (0, n.jsx)(a(109939).sA, {
                                        id: "inApp.marketplace.checkout.coupon.remove",
                                        defaultMessage: "Remove"
                                    })
                                })
                            }) : (0, n.jsx)(a(64960).Ay, {
                                style: m.button,
                                onClick: g,
                                hoveredStyle: m.buttonHovered,
                                pressedStyle: m.buttonPressed,
                                disabled: p,
                                children: (0, n.jsx)(a(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: p ? "secondary" : "primary",
                                    children: (0, n.jsx)(a(109939).sA, {
                                        id: "inApp.marketplace.checkout.coupon.apply",
                                        defaultMessage: "Apply"
                                    })
                                })
                            })
                        }), y ? (0, n.jsx)("div", {
                            style: h.invalidBoxShadow
                        }) : void 0]
                    }), y ? (0, n.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorPalette: "red",
                        colorVariant: "accentPrimary",
                        "aria-invalid": "true",
                        "aria-errormessage": u.formatMessage({
                            id: "inApp.marketplace.checkout.coupon.invalid.label",
                            defaultMessage: "Invalid coupon code"
                        }),
                        children: d
                    }) : void 0]
                })
            }
            let A = {
                    display: "flex",
                    gap: 8
                },
                k = {
                    marginTop: "1px"
                };

            function v(e) {
                let {
                    checkboxProps: t,
                    label: i,
                    error: r,
                    containerStyles: o = {}
                } = e;
                return (0, n.jsxs)("label", {
                    style: { ...A,
                        ...o
                    },
                    children: [(0, n.jsx)(a(349050).S, {
                        size: 14,
                        ...t,
                        style: { ...t.style,
                            ...k
                        }
                    }), (0, n.jsxs)(a(4458).VP, {
                        gap: 2,
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "primary",
                            children: i
                        }), r ? (0, n.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorPalette: "red",
                            colorVariant: "accentPrimary",
                            children: r
                        }) : void 0]
                    })]
                })
            }

            function b(e) {
                let {
                    displayInformation: {
                        emailRequirement: t
                    }
                } = e, {
                    isChecked: r,
                    isError: o
                } = (0, a(682985).K8)(() => ({
                    isChecked: a(544841).A.state.allowCreatorToAddToMailingList,
                    isError: a(544841).A.state.allowCreatorToAddToMailingListError
                }), []);
                (0, i.useEffect)(() => {
                    r && o && a(544841).A.setState({ ...a(544841).A.state,
                        allowCreatorToAddToMailingListError: !1
                    })
                }, [r, o]);
                let l = "required" === t;
                return l || "optional" === t ? (0, n.jsx)(a(4458).VP, {
                    gap: 8,
                    children: (0, n.jsx)(v, {
                        label: (0, n.jsx)(a(109939).sA, {
                            id: "inApp.marketplace.checkout.saveEmail",
                            defaultMessage: "Allow the creator to add me to their mailing list for updates, promotions, and helpful tips."
                        }),
                        checkboxProps: {
                            onClick: () => {
                                a(544841).A.setState({ ...a(544841).A.state,
                                    allowCreatorToAddToMailingList: !a(544841).A.state.allowCreatorToAddToMailingList
                                })
                            },
                            checked: r,
                            "aria-required": l
                        },
                        error: l && o && (0, n.jsx)(a(109939).sA, {
                            id: "inApp.marketplace.checkout.emailRequired",
                            defaultMessage: "You must opt-in to emails to continue"
                        })
                    })
                }) : null
            }
            let C = {
                fullPriceStrikethrough: {
                    textDecoration: "line-through",
                    color: a(632079).Tj.text.tertiary
                }
            };

            function S(e) {
                let {
                    price: t,
                    taxAmount: i,
                    discount: r,
                    isCalculatingNewPrice: o,
                    discountedPrice: l,
                    taxAmountWithDiscount: s
                } = e, d = (0, a(303072).$D)({
                    price: t,
                    taxAmount: i,
                    currencyCode: "USD"
                }), c = (0, a(109939).tz)();
                return (0, n.jsxs)(a(4458).fI, {
                    gap: 8,
                    alignItems: "center",
                    flexWrap: "wrap",
                    children: [(0, n.jsxs)(a(4458).fI, {
                        gap: 4,
                        alignItems: "center",
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "titleXlBold",
                            colorVariant: "primary",
                            children: void 0 !== r && void 0 !== l ? (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.totalPrice.withDiscount",
                                defaultMessage: "<strikethrough><fullPriceMoney></fullPriceMoney></strikethrough> <priceWithDiscountMoney></priceWithDiscountMoney>",
                                values: {
                                    strikethrough: e => (0, n.jsx)("span", {
                                        style: C.fullPriceStrikethrough,
                                        children: e
                                    }),
                                    fullPriceMoney: () => (0, n.jsx)(a(887949).v, {
                                        cost: {
                                            amount: d.amount,
                                            currencyCode: "USD"
                                        },
                                        intl: c,
                                        trailingZeroDisplay: "auto"
                                    }),
                                    priceWithDiscountMoney: () => {
                                        let e = (0, a(303072).$D)({
                                            price: l,
                                            taxAmount: s,
                                            currencyCode: "USD"
                                        });
                                        return (0, n.jsx)(a(887949).v, {
                                            cost: {
                                                amount: e.amount,
                                                currencyCode: "USD"
                                            },
                                            intl: c,
                                            trailingZeroDisplay: "auto"
                                        })
                                    }
                                }
                            }) : (0, n.jsx)(a(887949).v, {
                                cost: {
                                    amount: d.amount,
                                    currencyCode: "USD"
                                },
                                intl: c,
                                trailingZeroDisplay: "auto"
                            })
                        }), (0, n.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.taxIfApplicable",
                                defaultMessage: "(includes tax if applicable)"
                            })
                        })]
                    }), o ? (0, n.jsx)(a(517334).k, {}) : void 0]
                })
            }
            let I = {
                link: {
                    cursor: "pointer",
                    color: a(632079).Tj.text.primary
                }
            };

            function T(e) {
                let {
                    listingId: t
                } = e, i = (0, a(682985).K8)(() => a(218744).default.getConfigKey("marketplace_transactional_email_config", "listingIds"), []), r = (0, a(682985).K8)(() => a(544841).A.state.agreedToTermsAndConditions, []), o = (0, a(682985).K8)(() => a(544841).A.state.showTermsAndConditionsError, []), l = (0, a(109939).tz)();
                return (0, n.jsx)(a(4458).VP, {
                    gap: 2,
                    children: (0, n.jsx)(v, {
                        checkboxProps: {
                            onClick: () => {
                                a(544841).A.setState({ ...a(544841).A.state,
                                    agreedToTermsAndConditions: !r,
                                    showTermsAndConditionsError: !1
                                })
                            },
                            "aria-required": !0,
                            checked: r
                        },
                        label: l.formatMessage(i.includes(t) ? w.termsAndConditionsTransactionalEmail : w.termsAndConditions, {
                            a: e => (0, n.jsx)("a", {
                                style: I.link,
                                href: "https://www.notion.so/notion/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac",
                                target: "_blank",
                                children: e
                            }),
                            refundLink: e => (0, n.jsx)(f, {
                                source: "checkout_modal",
                                styles: I.link,
                                children: e
                            })
                        }),
                        error: o ? l.formatMessage(w.termsAndConditionsError) : void 0
                    })
                })
            }
            let w = (0, a(109939).YK)({
                termsAndConditionsTransactionalEmail: {
                    id: "inApp.marketplace.payment.termsAndConditions.transactionalEmail",
                    defaultMessage: "I agree to <a>Notion’s terms & conditions</a> and the Marketplace’s <refundLink>14-day refund policy</refundLink>. I also agree that the above email address may be shared with the template creator for transactional purposes"
                },
                termsAndConditions: {
                    id: "inApp.marketplace.payment.termsAndConditions",
                    defaultMessage: "I agree to <a>Notion’s terms & conditions</a> and the Marketplace’s <refundLink>14-day refund policy</refundLink>"
                },
                termsAndConditionsError: {
                    id: "inApp.marketplace.payment.termsAndConditions.error",
                    defaultMessage: "You must accept the Marketplace terms to continue"
                }
            });
            async function j(e) {
                let {
                    setIsApplyingCoupon: t,
                    environment: i,
                    coupon: n,
                    productListingId: r,
                    address: o,
                    elements: l,
                    acquisitionId: s
                } = e, d = n.trim().toUpperCase();
                if (0 === d.length) return;
                t(!0);
                let c = await a(579008).Ks({
                    environment: i,
                    coupon: d,
                    productListingId: r
                });
                if (c) {
                    let e = 0;
                    if ((0, a(834817).Z)(o)) {
                        let t = await i.api.callApi({
                            eventName: "calculateMarketplaceTax",
                            environment: i,
                            data: {
                                address: o,
                                acquisitionId: s,
                                couponCode: n
                            }
                        });
                        if ("success" === t.type && t.data.valid) {
                            e = t.data.taxAmountWithCoupon ? ? 0;
                            let a = t.data.totalAmountWithCoupon;
                            l && 0 !== a && l.update({
                                amount: a
                            })
                        }
                    }
                    a(544841).A.setState({ ...a(544841).A.state,
                        discount: c.discount,
                        discountedPrice: c.discountedPrice,
                        isCouponApplied: !0,
                        taxAmountWithDiscount: e
                    }), a(579008).H4({
                        coupon: n
                    })
                }
                t(!1)
            }
            let _ = {
                sidebarContainer: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 30
                },
                singleButton: {
                    width: "100%",
                    height: 36,
                    borderRadius: 8
                },
                buyButtonText: {
                    fontSize: 16,
                    color: a(632079).Tj.text.inversePrimary,
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function M(e) {
                let {
                    displayInformation: t,
                    price: i,
                    isPaying: r,
                    onSubmit: o,
                    productListingId: l,
                    acquisitionId: s,
                    isTCCheckboxEnabled: d
                } = e;
                return (0, n.jsxs)("div", {
                    style: _.sidebarContainer,
                    children: [(0, n.jsxs)(a(4458).VP, {
                        gap: 8,
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.product.label",
                                defaultMessage: "Notion template"
                            })
                        }), (0, n.jsx)(g, {
                            productInformation: t
                        })]
                    }), (0, n.jsxs)(a(4458).VP, {
                        gap: 20,
                        children: [(0, n.jsx)(P, {
                            productListingId: l,
                            acquisitionId: s,
                            price: i,
                            isPaying: r
                        }), (0, n.jsx)(a(4458).VP, {
                            gap: 16,
                            children: (0, n.jsx)(D, {
                                listingId: l,
                                displayInformation: t,
                                isTCCheckboxEnabled: d
                            })
                        }), (0, n.jsx)(a(346268).c, {
                            size: 1
                        }), (0, n.jsx)(B, {
                            onSubmit: o,
                            price: i,
                            isPaying: r
                        }), d ? null : (0, n.jsx)(L, {
                            listingId: l
                        })]
                    })]
                })
            }

            function P(e) {
                let {
                    productListingId: t,
                    acquisitionId: r,
                    price: o,
                    isPaying: l
                } = e, s = (0, a(533992).v3)(), d = (0, a(276744).I)(), c = (0, a(222926).useElements)(), u = (0, i.useRef)(!1), [p, m] = (0, i.useState)(!1), g = (0, a(682985).K8)(() => a(544841).A.state.coupon, []), y = (0, a(682985).K8)(() => a(544841).A.state.isCouponApplied, []), f = (0, a(682985).K8)(() => a(544841).A.state.invalidCouponReason, []), h = (0, a(682985).K8)(() => a(544841).A.state.taxAmount, []), A = (0, a(682985).K8)(() => a(544841).A.state.address, []), k = (0, i.useCallback)(async e => {
                    await j({
                        environment: s,
                        productListingId: t,
                        acquisitionId: r,
                        address: A,
                        elements: c,
                        setIsApplyingCoupon: m,
                        coupon: e
                    })
                }, [s, t, r, A, c]);
                return (0, i.useEffect)(() => {
                    (async () => {
                        if (!d.coupon || !t || !r || !c || u.current) return;
                        let e = d.coupon.trim().toUpperCase();
                        a(544841).A.setState({ ...a(544841).A.state,
                            coupon: e
                        }), await j({
                            environment: s,
                            productListingId: t,
                            acquisitionId: r,
                            address: A,
                            elements: c,
                            setIsApplyingCoupon: m,
                            coupon: e
                        }), u.current = !0
                    })()
                }, [d.coupon, s, t, r, A, c]), (0, n.jsx)(x, {
                    couponCode: g,
                    onCouponChange: e => {
                        let t = e.target.value.trim().toUpperCase();
                        e.target.value = t, a(544841).A.setState({ ...a(544841).A.state,
                            coupon: t
                        })
                    },
                    onApplyClick: k,
                    onRemoveClick: () => {
                        a(544841).A.setState({ ...a(544841).A.state,
                            coupon: "",
                            discount: void 0,
                            isCouponApplied: !1,
                            discountedPrice: void 0
                        }), c && c.update({
                            amount: h + o
                        })
                    },
                    isCouponApplied: y,
                    isApplyingCoupon: p,
                    invalidCouponReason: f,
                    disabled: l
                })
            }

            function D(e) {
                let {
                    displayInformation: t,
                    listingId: a,
                    isTCCheckboxEnabled: i
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(b, {
                        displayInformation: t
                    }), i ? (0, n.jsx)(T, {
                        listingId: a
                    }) : void 0]
                })
            }
            let K = {
                link: {
                    color: a(632079).Tj.text.secondary
                }
            };

            function L(e) {
                let {
                    listingId: t
                } = e, i = (0, a(682985).K8)(() => a(218744).default.getConfigKey("marketplace_transactional_email_config", "listingIds"), []);
                return (0, n.jsx)(a(111010).D, {
                    styleKey: "captionRegular",
                    colorVariant: "secondary",
                    children: i.includes(t) ? (0, n.jsx)(a(109939).sA, {
                        id: "inApp.marketplace.payment.termsAndConditionsBuyLabel.transactionalEmail",
                        defaultMessage: "By purchasing this template, I agree to <a>Notion’s terms & conditions</a> and the Marketplace’s <refundLink>14-day refund policy</refundLink>. I also agree that the above email address may be shared with the template creator for transactional purposes",
                        values: {
                            a: e => (0, n.jsx)("a", {
                                style: K.link,
                                href: "https://www.notion.so/notion/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac",
                                target: "_blank",
                                children: e
                            }),
                            refundLink: e => (0, n.jsx)(f, {
                                source: "checkout_modal",
                                styles: K.link,
                                children: e
                            })
                        }
                    }) : (0, n.jsx)(a(109939).sA, {
                        id: "inApp.marketplace.payment.termsAndConditionsBuyLabel",
                        defaultMessage: "By purchasing this template, I agree to <a>Notion’s terms & conditions</a> and the Marketplace’s <refundLink>14-day refund policy</refundLink>",
                        values: {
                            a: e => (0, n.jsx)("a", {
                                style: K.link,
                                href: "https://www.notion.so/notion/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac",
                                target: "_blank",
                                children: e
                            }),
                            refundLink: e => (0, n.jsx)(f, {
                                source: "checkout_modal",
                                styles: K.link,
                                children: e
                            })
                        }
                    })
                })
            }

            function B(e) {
                let {
                    onSubmit: t,
                    price: i,
                    isPaying: r
                } = e, o = (0, a(109939).tz)(), l = (0, a(682985).K8)(() => a(544841).A.state.discountedPrice, []), s = (0, a(682985).K8)(() => a(544841).A.state.taxAmount, []), d = (0, a(682985).K8)(() => a(544841).A.state.discount, []), c = (0, a(682985).K8)(() => a(544841).A.state.isCalculatingTax, []), u = (0, a(682985).K8)(() => a(544841).A.state.taxAmountWithDiscount, []), p = (0, a(303072).$D)({
                    taxAmount: void 0 !== l ? u : s,
                    price: void 0 !== l ? l : i,
                    currencyCode: "USD"
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(S, {
                        price: i,
                        discountedPrice: l,
                        taxAmount: s,
                        taxAmountWithDiscount: u,
                        discount: d,
                        isCalculatingNewPrice: c
                    }), (0, n.jsx)(a(912946).A, {
                        colorPalette: "blue",
                        onClick: t,
                        style: _.singleButton,
                        disabled: r,
                        children: r ? (0, n.jsx)(a(517334).k, {}) : (0, n.jsx)("div", {
                            style: _.buyButtonText,
                            children: 0 === p.amount ? o.formatMessage(R.purchaseFreeTemplate) : o.formatMessage(R.purchaseTemplate, {
                                money: () => (0, n.jsx)(a(887949).v, {
                                    cost: {
                                        amount: p.amount,
                                        currencyCode: "USD"
                                    },
                                    intl: o,
                                    trailingZeroDisplay: "auto"
                                })
                            })
                        })
                    })]
                })
            }
            let R = (0, a(109939).YK)({
                    purchaseTemplate: {
                        id: "inApp.marketplace.checkout.payment.buy",
                        defaultMessage: "Buy for <money></money>"
                    },
                    purchaseFreeTemplate: {
                        id: "inApp.marketplace.checkout.payment.buy.free",
                        defaultMessage: "Add"
                    }
                }),
                E = (0, a(109939).YK)({
                    paymentError: {
                        id: "marketplace.payment.error",
                        defaultMessage: "An error occurred while processing your payment. {error}"
                    },
                    duplicationError: {
                        id: "marketplace.payment.error.duplicationError",
                        defaultMessage: "A error occurred duplication the template after your payment. Please refresh the page."
                    }
                }),
                V = {
                    mobileContentContainer: {
                        position: "sticky",
                        bottom: -40,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        background: a(632079).Tj.popoverBackground,
                        borderTop: "1px solid lightgray",
                        paddingTop: 16,
                        minHeight: 124
                    }
                };

            function N(e) {
                let t = (0, a(533992).v3)(),
                    {
                        displayInformation: r,
                        alreadyOwned: o,
                        price: l,
                        acquisitionId: s,
                        listingId: d,
                        contacts: c
                    } = e,
                    u = (0, a(682985).K8)(() => "on" !== a(218744).default.getEligibleGroup({
                        experimentId: "marketplace_checkout_move_tc_checkbox",
                        defaultGroup: "off"
                    }), []),
                    m = (0, a(83208).X)("enable_ai_personalization_marketplace"),
                    g = (0, a(83208).X)("automatic_tax_enabled"),
                    y = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(728372).AppStoreSidebarSpaceViewStore.state;
                        return null == t || null == (e = t.getSettings()) ? void 0 : e.agent_personalization_settings
                    }, []),
                    f = (0, a(682985).K8)(() => a(218744).default.getConfigKey("marketplace_redirect_url_after_purchase_config", d), [d]),
                    h = (0, a(682985).K8)(() => a(544841).A.state.address, []),
                    x = (0, a(682985).K8)(() => a(544841).A.state.discountedPrice, []),
                    A = (0, a(682985).K8)(() => a(544841).A.state.coupon, []),
                    k = (0, a(682985).K8)(() => a(544841).A.state.allowCreatorToAddToMailingList, []),
                    v = (0, a(682985).K8)(() => a(544841).A.state.agreedToTermsAndConditions, []),
                    b = (0, a(682985).K8)(() => a(544841).A.state.isTaxValid, []),
                    C = (0, a(682985).K8)(() => a(544841).A.state.isCalculatingTax, []),
                    S = (0, a(682985).K8)(() => a(199231).A.state.teamStore, []),
                    I = (0, a(682985).K8)(() => a(544841).A.state.paymentType, []),
                    T = (0, a(222926).useStripe)(),
                    w = (0, a(222926).useElements)(),
                    j = (0, a(109939).tz)(),
                    [_, P] = (0, i.useState)(!1),
                    [D, K] = (0, i.useState)(!1),
                    [L, B] = (0, i.useState)(!1),
                    R = q(),
                    V = (0, a(723240).r)(),
                    N = (0, a(276744).I)(),
                    W = (0, a(682985).K8)(() => {
                        if (s) return new(a(48922)).y(t, {
                            table: a(832375).HtE,
                            id: s
                        }).getStatus()
                    }, [s, t]),
                    z = (0, a(682985).K8)(() => {
                        let e = N.slug;
                        if (!e) return {
                            isValid: !1
                        };
                        if (void 0 !== a(756168).K.state[e]) return a(756168).K.state[e];
                        let i = (0, a(867194).kz)({
                            environment: t,
                            sidebarSpaceId: V,
                            slug: N.slug,
                            intl: j
                        });
                        return a(756168).K.setState({ ...a(756168).K.state,
                            [e]: i
                        }), i
                    }, [N.slug, t, j, V]);
                (0, i.useEffect)(() => {
                    let e = async () => {
                        if (!N.slug) {
                            a(647095).f1(j.formatMessage(E.duplicationError)), P(!1);
                            return
                        }
                        f && window.open(f, "_blank");
                        let e = await a(867194).xL({
                            environment: t,
                            slug: N.slug,
                            locale: (0, a(599412).H)(j),
                            acquisitionDestinationId: V,
                            sidebarSpaceId: V,
                            includeCategories: !0
                        });
                        if (e && e.block_id) {
                            var i, n, r, o, l;
                            let s = new(a(970831)).B(t, {
                                    table: a(832375).evP,
                                    id: e.block_id
                                }),
                                d = a(199231).A.state.from;
                            if (a(579008).zi(t), a(199231).A.setState({ ...a(199231).A.state,
                                    hasSuccessfullyPurchasedProduct: !0
                                }), a(947673).A.setState({ ...a(947673).A.state,
                                    duplicationStatus: "duplicating"
                                }), a(986939).A.isMobile) {
                                (0, a(867194).uy)({
                                    environment: t,
                                    template: e,
                                    templateBlockStore: s,
                                    teamStore: S,
                                    from: d
                                }).then(() => {
                                    a(947673).A.setState({ ...a(947673).A.state,
                                        duplicationStatus: "success"
                                    })
                                }), a(752085).A.state.open && a(752085).A.setState({ ...a(752085).A.state,
                                    isCheckout: !1,
                                    item: { ...a(752085).A.state.item,
                                        marketplaceTemplateMetadata: { ...a(752085).A.state.item.marketplaceTemplateMetadata,
                                            userHasAcquiredTemplate: !0
                                        }
                                    }
                                });
                                return
                            }
                            let c = (0, a(908796).VT)(e) && m;
                            c && a(534375).L.setState({ ...a(534375).L.state,
                                isDuplicating: !0
                            });
                            let u = await (0, a(867194).uy)({
                                environment: t,
                                template: e,
                                templateBlockStore: s,
                                teamStore: S,
                                from: d,
                                isValidated: D,
                                duplicationStartedToastProps: (i = j, {
                                    iconGroup: a(471377).z,
                                    iconGroupColorPalette: "green",
                                    iconGroupColorVariant: "accentPrimary",
                                    iconGroupVariant: "default",
                                    title: i.formatMessage({
                                        id: "inApp.marketplace.checkout.payment.success.duplication.started.title",
                                        defaultMessage: "Purchase successful"
                                    }),
                                    message: i.formatMessage({
                                        id: "inApp.marketplace.checkout.payment.success.duplication.started.message",
                                        defaultMessage: "The template is being added to your workspace. We will let you know when it’s ready to use."
                                    })
                                }),
                                ...c ? {
                                    showDuplicationFinishedToast: !1,
                                    showDuplicationStartedToast: !1,
                                    duplicationStartedToastProps: {},
                                    durationMsBeforeShowingFinishedToast: 2e3
                                } : {}
                            });
                            if (a(947673).A.setState({ ...a(947673).A.state,
                                    duplicationStatus: "success"
                                }), c && u) {
                                a(463226).Mu({
                                    environment: t,
                                    newPageIdToAdd: u.id,
                                    contextPageId: u.id,
                                    agentName: null == y ? void 0 : y.name,
                                    customizationItems: null == y ? void 0 : y.customization_items
                                });
                                let i = "";
                                null != (n = e.attributes) && n.icon && (i = (0, a(111012).T8)(null == (r = e.attributes) ? void 0 : r.icon) ? null == (o = e.attributes) ? void 0 : o.icon : (null == (l = e.attributes) ? void 0 : l.emoji) ? ? ""), a(534375).L.setState({ ...a(534375).L.state,
                                    templateName: e.name,
                                    templateIcon: i,
                                    isDuplicating: !1,
                                    isDuplicatingFinished: !0,
                                    newPageBlockStore: u
                                })
                            }
                        }
                        P(!1)
                    };
                    _ && "succeeded" === W && e()
                }, [W, _, N.slug, S, V, j, t, f, m, y, D]);
                let H = !_ && b && L && !C,
                    F = (0, i.useCallback)(async e => {
                        var i;
                        let n, l, c;
                        e.preventDefault();
                        let p = !v && u,
                            m = "required" === r.emailRequirement && !k,
                            g = {
                                listingId: d,
                                acquisitionId: s,
                                sidebarSpaceId: V
                            };
                        if (p || m) {
                            a(773352).log({
                                level: "error",
                                from: "marketplacePaymentContent.onSubmit",
                                type: "Terms and conditions or mailing list error",
                                data: {
                                    miscDataToConvertToString: { ...g,
                                        showTermsAndConditionsError: p,
                                        allowCreatorToAddToMailingListError: m
                                    }
                                }
                            }), a(544841).A.setState({ ...a(544841).A.state,
                                showTermsAndConditionsError: p,
                                allowCreatorToAddToMailingListError: m
                            });
                            return
                        }
                        if (!w) return void a(773352).log({
                            level: "error",
                            from: "marketplacePaymentContent.onSubmit",
                            type: "No Stripe elements found.",
                            data: {
                                miscDataToConvertToString: { ...g
                                }
                            }
                        });
                        if (!T) return void a(773352).log({
                            level: "error",
                            from: "marketplacePaymentContent.onSubmit",
                            type: "No stripe instance found.",
                            data: {
                                miscDataToConvertToString: { ...g
                                }
                            }
                        });
                        if (!V) return void a(773352).log({
                            level: "error",
                            from: "marketplacePaymentContent.onSubmit",
                            type: "No spaceId found.",
                            data: {
                                miscDataToConvertToString: { ...g
                                }
                            }
                        });
                        if (!h) return void a(773352).log({
                            level: "error",
                            from: "marketplacePaymentContent.onSubmit",
                            type: "No Stripe address found or invalid input.",
                            data: {
                                miscDataToConvertToString: { ...g
                                }
                            }
                        });
                        if (o) return void a(773352).log({
                            level: "error",
                            from: "marketplacePaymentContent.onSubmit",
                            type: "Customer already owns this product for the workspace.",
                            data: {
                                miscDataToConvertToString: { ...g
                                }
                            }
                        });
                        if (!H && 0 !== x) return void a(773352).log({
                            level: "error",
                            from: "marketplacePaymentContent.onSubmit",
                            type: "Attempted payment without enabled payment.",
                            data: {
                                miscDataToConvertToString: { ...g,
                                    isTaxValid: b,
                                    isPaymentElementComplete: L,
                                    isCalculatingTax: C,
                                    isPaying: _
                                }
                            }
                        });
                        if ("card" !== I) {
                            let e = w.getElement("address");
                            if (e) {
                                let t = await e.getValue();
                                if (!t.complete) return void a(773352).log({
                                    level: "error",
                                    from: "marketplacePaymentContent.onSubmit",
                                    type: "Google/Apply Pay attempt with incomplete address",
                                    data: {
                                        miscDataToConvertToString: { ...g,
                                            addressValue: t
                                        }
                                    }
                                })
                            }
                        }
                        if ("card" === I) {
                            let e = 0 !== x ? await w.submit() : {};
                            if (e.error) return void a(773352).log({
                                level: "error",
                                from: "marketplacePaymentContent.onSubmit",
                                type: "Element submit error",
                                data: {
                                    miscDataToConvertToString: { ...g,
                                        elementSubmitResponse: e
                                    }
                                }
                            })
                        }
                        a(544841).A.setState({ ...a(544841).A.state,
                            showTermsAndConditionsError: !1
                        }), P(!0);
                        try {
                            if (!(await z).isValid) {
                                P(!1), a(773352).log({
                                    level: "error",
                                    from: "marketplacePaymentContent.onSubmit",
                                    type: "Template content validation failed",
                                    data: {
                                        miscDataToConvertToString: { ...g
                                        }
                                    }
                                }), a(647095).f1(j.formatMessage({
                                    id: "marketplace.payment.error.templateValidationFailed",
                                    defaultMessage: "Unable to purchase template."
                                }));
                                return
                            }
                        } catch (e) {
                            P(!1), a(773352).log({
                                level: "error",
                                from: "marketplacePaymentContent.onSubmit",
                                type: "Template content validation error",
                                data: {
                                    miscDataToConvertToString: { ...g
                                    }
                                }
                            }), a(647095).f1(j.formatMessage({
                                id: "marketplace.payment.error.templateValidationFailed",
                                defaultMessage: "Unable to purchase template."
                            }));
                            return
                        }
                        K(!0), a(579008).mM({
                            emailRequirement: r.emailRequirement
                        });
                        let y = await t.api.callApi({
                            eventName: "confirmProductPurchase",
                            environment: t,
                            data: {
                                productId: d,
                                listingId: d,
                                address: h,
                                spaceId: V,
                                allowCreatorToAddToMailingList: k,
                                couponCode: A
                            }
                        });
                        if ("failed" === y.type) {
                            P(!1), a(773352).log({
                                level: "error",
                                from: "marketplacePaymentContent.onSubmit",
                                type: "Confirm product purchase failed.",
                                data: {
                                    miscDataToConvertToString: { ...g,
                                        address: h,
                                        coupon: A,
                                        result: y
                                    }
                                }
                            }), a(647095).f1((0, a(922271).H)(j, y));
                            return
                        }
                        if (y.data.intentClientSecret) {
                            if (void 0 !== y.data.finalAmountCents && w.update({
                                    amount: y.data.finalAmountCents
                                }), await w.submit(), void 0 !== (l = await T.confirmPayment({
                                    elements: w,
                                    clientSecret: y.data.intentClientSecret,
                                    confirmParams: {
                                        return_url: window.location.href,
                                        expand: ["amount"]
                                    },
                                    redirect: "if_required"
                                })).error) n = l.error, c = "Stripe confirm payment error";
                            else if ("requires_action" === l.paymentIntent.status) {
                                let e = await T.handleNextAction({
                                    clientSecret: l.paymentIntent.client_secret ? ? ""
                                });
                                void 0 !== e.error && (n = e.error, c = "Stripe handle next action error")
                            }
                            void 0 !== n && void 0 !== c && (a(773352).log({
                                level: "error",
                                from: "marketplacePaymentContent.onSubmit",
                                type: c,
                                data: {
                                    miscDataToConvertToString: { ...g,
                                        error: n
                                    }
                                }
                            }), (0, a(771807).c)(t, {
                                error: n.code,
                                stripe_decline_code: n.decline_code
                            }), a(647095).f1(j.formatMessage(E.paymentError, {
                                error: (0, a(889503).translateStripeError)(j, n)
                            })), P(!1))
                        }
                        a(579008).Il({
                            success: void 0 === n,
                            emailRequirement: r.emailRequirement,
                            transactionValue: null == (i = l) || null == (i = i.paymentIntent) ? void 0 : i.amount,
                            error: n
                        })
                    }, [T, w, o, h, V, x, r.emailRequirement, k, t, d, H, v, j, A, I, u, s, C, _, L, b, z]),
                    Y = (0, i.useMemo)(() => (0, a(381453).sg)(F, 2e3, {
                        leading: !0,
                        trailing: !1
                    }), [F]),
                    O = async e => {
                        var i;
                        if (!w || o) return;
                        let n = {
                            zipCode: (i = e.value.address).postal_code ? ? "",
                            country: i.country ? ? "",
                            addressLine1: i.line1 ? ? "",
                            city: i.city ? ? "",
                            state: i.state ? ? ""
                        };
                        a(381453).n4(n, h) || ((0, a(834817).Z)(n) && l ? g ? a(544841).A.setState({ ...a(544841).A.state,
                            address: n,
                            isTaxValid: !0,
                            isCalculatingTax: !1
                        }) : await a(579008).wx({
                            environment: t,
                            acquisitionId: s,
                            address: n,
                            elements: w
                        }) : a(544841).A.setState({ ...a(544841).A.state,
                            address: n,
                            isTaxValid: !1,
                            isCalculatingTax: !1
                        }))
                    };
                return a(986939).A.isMobile ? (0, n.jsx)(U, {
                    displayInformation: r,
                    alreadyOwned: o,
                    onAddressChange: O,
                    contacts: c ? ? [],
                    setIsPaymentElementComplete: B,
                    isPaying: _,
                    listingId: d,
                    acquisitionId: s,
                    price: l ? ? 0,
                    onSubmit: Y,
                    isTCCheckboxEnabled: u
                }) : (0, n.jsxs)("div", {
                    style: R.contentContainer,
                    children: [o ? null : (0, n.jsx)(p, {
                        onAddressChange: O,
                        contacts: c ? ? [],
                        setIsPaymentElementComplete: B,
                        isPaying: _
                    }), (0, n.jsx)(M, {
                        acquisitionId: s,
                        displayInformation: r,
                        alreadyOwned: o,
                        price: l ? ? 0,
                        isPaying: _,
                        onSubmit: Y,
                        productListingId: d,
                        isTCCheckboxEnabled: u
                    })]
                })
            }

            function q() {
                let {
                    isMobileWidth: e,
                    isTabletWidth: t,
                    isLowResolutionTabletWidth: i
                } = (0, a(434785).LS)(), n = a(986939).A.isMobile ? e || t : e || i;
                return (0, a(960253).I)(() => ({
                    contentContainer: {
                        display: "flex",
                        gap: 32,
                        flexDirection: n ? "column" : "row"
                    }
                }), [n])
            }

            function U(e) {
                let {
                    displayInformation: t,
                    alreadyOwned: a,
                    onAddressChange: i,
                    contacts: r,
                    setIsPaymentElementComplete: o,
                    isPaying: l,
                    listingId: s,
                    acquisitionId: d,
                    price: c,
                    onSubmit: u,
                    isTCCheckboxEnabled: m
                } = e, y = q();
                return (0, n.jsxs)("div", {
                    style: y.contentContainer,
                    children: [(0, n.jsx)(g, {
                        productInformation: t
                    }), a ? null : (0, n.jsx)(p, {
                        onAddressChange: i,
                        contacts: r ? ? [],
                        setIsPaymentElementComplete: o,
                        isPaying: l
                    }), (0, n.jsx)(P, {
                        productListingId: s,
                        acquisitionId: d,
                        price: c ? ? 0,
                        isPaying: l
                    }), (0, n.jsx)(D, {
                        displayInformation: t,
                        listingId: s,
                        isTCCheckboxEnabled: m
                    }), (0, n.jsx)("div", {
                        style: V.mobileContentContainer,
                        children: (0, n.jsx)(B, {
                            onSubmit: u,
                            price: c ? ? 0,
                            isPaying: l
                        })
                    })]
                })
            }
            let W = {
                minHeight: 400,
                maxHeight: 850,
                display: "flex",
                padding: "32px",
                flexDirection: "column",
                gap: 24,
                borderRadius: 12,
                position: "relative",
                overflow: "auto"
            };

            function z() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    i = (0, a(222926).useElements)(),
                    r = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = (0, a(328765).S)()) ? void 0 : e.getName()
                    }, []),
                    o = (0, a(723240).r)(),
                    l = (0, a(682985).K8)(() => a(199231).A.state.marketplaceListingId, []),
                    [s] = (0, a(97668).Yb)(async () => {
                        if (!o || !i || !l || !(0, a(4962).uj)(l)) return;
                        let n = await a(579008).y$({
                            environment: e,
                            listingId: l,
                            spaceId: o,
                            intl: t
                        });
                        if (n && (a(199231).A.setState({ ...a(199231).A.state,
                                creatorId: n.creatorId,
                                customerId: n.customerId
                            }), a(579008).Ix({
                                emailRequirement: n.displayInformation.emailRequirement
                            })), n && !n.alreadyOwned && 0 !== n.contacts.length && n.acquisitionId) {
                            let t = n.contacts[0],
                                r = {
                                    zipCode: t.address.postal_code ? ? "",
                                    country: t.address.country ? ? "",
                                    addressLine1: t.address.line1 ? ? "",
                                    city: t.address.city ? ? "",
                                    state: t.address.state ? ? ""
                                };
                            await a(579008).wx({
                                environment: e,
                                elements: i,
                                address: r,
                                acquisitionId: n.acquisitionId
                            })
                        }
                        return n
                    }, [o, e, l, t, i]),
                    d = s.value;
                if (!l || !(0, a(4962).uj)(l) || !d) return null;
                let {
                    displayInformation: c,
                    alreadyOwned: u,
                    acquisitionId: p
                } = d, m = d.alreadyOwned ? void 0 : d.price, g = d.alreadyOwned ? void 0 : d.contacts;
                return (0, n.jsxs)("div", {
                    style: W,
                    children: [(0, n.jsxs)(a(4458).VP, {
                        gap: 2,
                        children: [(0, n.jsx)(a(111010).D, {
                            styleKey: "titleXlBold",
                            colorVariant: "primary",
                            children: (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.modal.header",
                                defaultMessage: "Checkout"
                            })
                        }), void 0 !== r ? (0, n.jsx)(a(111010).D, {
                            styleKey: "titleSmRegular",
                            colorVariant: "secondary",
                            children: a(986939).A.isMobile ? (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.modal.mobile.subheader",
                                defaultMessage: "This template will be added to your Private space within {spaceName}",
                                values: {
                                    spaceName: r
                                }
                            }) : (0, n.jsx)(a(109939).sA, {
                                id: "inApp.marketplace.checkout.modal.subheader",
                                defaultMessage: "This template is being added to {spaceName}",
                                values: {
                                    spaceName: r
                                }
                            })
                        }) : void 0]
                    }), (0, n.jsx)(a(434785).KF, {
                        throttle: 100,
                        lowResolutionTabletUpperBound: 760,
                        children: (0, n.jsx)(N, {
                            listingId: l,
                            displayInformation: c,
                            acquisitionId: p,
                            alreadyOwned: u,
                            price: m,
                            contacts: g
                        })
                    })]
                })
            }
        },
        434785: (e, t, a) => {
            a.d(t, {
                KF: () => s,
                LS: () => o
            }), a(16280);
            var i = a(296540),
                n = a(474848);
            let r = (0, i.createContext)({
                screenWidthType: "desktop",
                isMobileWidth: !1,
                isLowResolutionTabletWidth: !1,
                isDesktopWidth: !1,
                isTabletWidth: !1
            });

            function o() {
                let e = (0, i.useContext)(r);
                if (!e) throw Error("ScreenWidthContext not found. Please make sure this is used within a ScreenWidthContext.Provider.");
                return e
            }
            r.displayName = "ScreenWidthContext";
            let l = {
                width: "100%",
                height: 0,
                position: "absolute"
            };

            function s(e) {
                let {
                    children: t,
                    mobileUpperBound: o = 550,
                    lowResolutionTabletUpperBound: s = 720,
                    tabletUpperBound: d = 1024,
                    throttle: c = 0
                } = e, u = (0, i.useRef)(null), [p, m] = (0, i.useState)("desktop"), g = (0, i.useCallback)(e => {
                    e.state.width <= o ? m("mobile") : e.state.width > o && e.state.width <= s ? m("lowResolutionTablet") : e.state.width > s && e.state.width <= d ? m("tablet") : m("desktop")
                }, [o, s, d]);
                (0, a(318311).B)(u, g, c);
                let y = "mobile" === p,
                    f = "desktop" === p,
                    h = "tablet" === p,
                    x = "lowResolutionTablet" === p,
                    A = i.useMemo(() => ({
                        screenWidthType: p,
                        isMobileWidth: y,
                        isLowResolutionTabletWidth: x,
                        isDesktopWidth: f,
                        isTabletWidth: h
                    }), [p, y, x, f, h]);
                return (0, n.jsxs)(r.Provider, {
                    value: A,
                    children: [(0, n.jsx)("div", {
                        ref: u,
                        style: l
                    }), t]
                })
            }
        },
        471377: (e, t, a) => {
            a.d(t, {
                z: () => i
            });
            let i = (0, a(104509).xh)("checkStack", {
                default: {
                    loader: () => a.e(92905).then(a.bind(a, 552619))
                },
                small: {
                    loader: () => a.e(92905).then(a.bind(a, 64621))
                },
                fill: {
                    loader: () => a.e(92905).then(a.bind(a, 205415))
                },
                fillSmall: {
                    loader: () => a.e(92905).then(a.bind(a, 859358))
                }
            }, ["Cards", "tasks", "completed", "pile", "stack"])
        },
        534375: (e, t, a) => {
            a.d(t, {
                L: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        templateName: "",
                        templateIcon: "",
                        newPageBlockStore: void 0,
                        isDuplicating: !1,
                        isDuplicatingFinished: !1
                    }
                }
                clearState() {
                    this.setState({ ...this.getInitialState()
                    })
                }
            }
            let r = new n
        },
        544841: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        address: {
                            addressLine1: "",
                            city: "",
                            state: "",
                            country: "",
                            zipCode: ""
                        },
                        allowCreatorToAddToMailingList: !1,
                        allowCreatorToAddToMailingListError: !1,
                        taxAmount: 0,
                        taxAmountWithDiscount: 0,
                        discountedPrice: void 0,
                        discount: void 0,
                        coupon: "",
                        agreedToTermsAndConditions: !1,
                        showTermsAndConditionsError: !1,
                        isCouponInvalid: !1,
                        isCouponApplied: !1,
                        isCalculatingTax: !1,
                        isTaxValid: !1,
                        invalidCouponReason: "",
                        paymentType: "card"
                    }
                }
            }
            let r = new n
        },
        579008: (e, t, a) => {
            function i(e) {
                a(199231).A.setState({ ...a(199231).A.state,
                    isModalOpen: !1,
                    marketplaceListingId: void 0,
                    from: void 0
                });
                let t = new URL(window.location.href);
                t.searchParams.delete("checkout"), t.searchParams.delete("coupon"), t.searchParams.delete("from"), (0, a(79266).navigate)({
                    environment: e,
                    url: t.toString()
                })
            }

            function n(e) {
                let t = new URL(window.location.href);
                t.searchParams.append("checkout", "true"), (0, a(79266).navigate)({
                    environment: e,
                    url: t.toString()
                })
            }
            async function r(e) {
                let {
                    environment: t,
                    listingId: n,
                    spaceId: r,
                    intl: o
                } = e, l = await t.api.callMainCellApi({
                    eventName: "initiateProductPurchase",
                    environment: t,
                    data: {
                        productId: n,
                        listingId: n,
                        spaceId: r
                    }
                });
                if ("success" === l.type) return l.data;
                i(t), a(647095).f1((0, a(922271).H)(o, l))
            }
            async function o(e) {
                let {
                    coupon: t,
                    productListingId: i,
                    environment: n
                } = e, r = a(962299).A.getIntl();
                try {
                    a(544841).A.setState({ ...a(544841).A.state,
                        invalidCouponReason: ""
                    });
                    let e = await n.api.callMainCellApi({
                        eventName: "calculatePriceWithMarketplaceCoupon",
                        environment: n,
                        data: {
                            productListingId: i,
                            couponCode: t
                        }
                    });
                    if ("success" === e.type) return {
                        discount: e.data.discount,
                        discountedPrice: e.data.discountedPrice
                    }; {
                        let t = (0, a(922271).H)(r, e);
                        a(544841).A.setState({ ...a(544841).A.state,
                            invalidCouponReason: t
                        })
                    }
                } catch (e) {
                    a(544841).A.setState({ ...a(544841).A.state,
                        invalidCouponReason: r.formatMessage({
                            id: "inApp.marketplace.checkout.coupon.invalid",
                            defaultMessage: "Something went wrong, please try again."
                        })
                    })
                }
            }
            async function l(e) {
                let {
                    address: t,
                    acquisitionId: i,
                    elements: n,
                    environment: r
                } = e, o = a(544841).A.state.discountedPrice, l = a(544841).A.state.coupon, s = 0, d = 0;
                a(544841).A.setState({ ...a(544841).A.state,
                    isTaxValid: !1,
                    isCalculatingTax: !0
                });
                let c = await r.api.callMainCellApi({
                    eventName: "calculateMarketplaceTax",
                    environment: r,
                    data: {
                        address: t,
                        acquisitionId: i,
                        couponCode: l
                    }
                });
                "success" === c.type && c.data.valid && (s = c.data.taxAmount, d = c.data.taxAmountWithCoupon ? ? 0, 0 !== (void 0 !== o ? c.data.totalAmountWithCoupon : c.data.totalAmount) && n.update({
                    amount: void 0 !== o ? c.data.totalAmountWithCoupon : c.data.totalAmount
                }), a(544841).A.setState({ ...a(544841).A.state,
                    address: t,
                    taxAmount: s,
                    taxAmountWithDiscount: d,
                    isTaxValid: !0,
                    isCalculatingTax: !1
                }))
            }

            function s(e) {
                let {
                    emailRequirement: t
                } = e, i = a(199231).A.state;
                if (i.creatorId && i.customerId && i.marketplaceListingId && i.templateId) {
                    let e = {
                        creator_id: i.creatorId,
                        template_id: i.templateId,
                        listing_id: i.marketplaceListingId,
                        customer_id: i.customerId,
                        email_requirement: t
                    };
                    (0, a(104310).u)({
                        event: {
                            eventName: "marketplace_checkout_open",
                            eventProperties: e
                        }
                    })
                }
            }

            function d(e) {
                let {
                    coupon: t
                } = e, i = a(199231).A.state;
                if (i.creatorId && i.customerId && i.marketplaceListingId && i.templateId) {
                    let e = {
                        creator_id: i.creatorId,
                        template_id: i.templateId,
                        listing_id: i.marketplaceListingId,
                        customer_id: i.customerId,
                        coupon: t
                    };
                    (0, a(104310).u)({
                        event: {
                            eventName: "marketplace_coupon_apply",
                            eventProperties: e
                        }
                    })
                }
            }

            function c(e) {
                let {
                    emailRequirement: t
                } = e, i = a(199231).A.state, n = a(544841).A.state;
                if (i.creatorId && i.customerId && i.marketplaceListingId && i.templateId && n.paymentType) {
                    let e = {
                        creator_id: i.creatorId,
                        template_id: i.templateId,
                        listing_id: i.marketplaceListingId,
                        customer_id: i.customerId,
                        payment_method: n.paymentType,
                        email_requirement: t
                    };
                    (0, a(104310).u)({
                        event: {
                            eventName: "marketplace_payment_initiated",
                            eventProperties: e
                        }
                    }), a(773352).log({
                        level: "info",
                        from: "marketplaceCheckoutActions",
                        type: "marketplacePaymentInitiated",
                        data: {
                            miscDataToConvertToString: { ...e
                            }
                        }
                    })
                }
            }

            function u(e) {
                let {
                    success: t,
                    emailRequirement: i,
                    transactionValue: n,
                    error: r
                } = e, o = a(199231).A.state, l = a(544841).A.state;
                if (o.creatorId && o.customerId && o.marketplaceListingId && o.templateId && l.paymentType) {
                    let e = {
                        creator_id: o.creatorId,
                        template_id: o.templateId,
                        listing_id: o.marketplaceListingId,
                        customer_id: o.customerId,
                        payment_method: l.paymentType,
                        email_requirement: i,
                        transaction_value: n,
                        success: t
                    };
                    (0, a(104310).u)({
                        event: {
                            eventName: "marketplace_payment_completed",
                            eventProperties: e
                        }
                    })
                }
                t ? a(773352).log({
                    level: "info",
                    from: "marketplaceCheckoutActions",
                    type: "marketplacePaymentCompletedSuccess",
                    data: {
                        miscDataToConvertToString: {
                            creator_id: o.creatorId,
                            template_id: o.templateId,
                            listing_id: o.marketplaceListingId,
                            customer_id: o.customerId,
                            payment_method: l.paymentType,
                            email_requirement: i,
                            success: t
                        }
                    }
                }) : a(773352).log({
                    level: "error",
                    from: "marketplaceCheckoutActions",
                    type: "marketplacePaymentCompletedFailure",
                    data: {
                        miscDataToConvertToString: {
                            error: r,
                            creator_id: o.creatorId,
                            template_id: o.templateId,
                            listing_id: o.marketplaceListingId,
                            customer_id: o.customerId,
                            payment_method: l.paymentType,
                            email_requirement: i,
                            success: t
                        }
                    }
                })
            }
            a.d(t, {
                H4: () => d,
                Il: () => u,
                Ix: () => s,
                Ks: () => o,
                Rv: () => n,
                mM: () => c,
                wx: () => l,
                y$: () => r,
                zi: () => i
            }), a(814603), a(147566), a(198721)
        },
        756168: (e, t, a) => {
            a.d(t, {
                K: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {}
                }
                clearState() {
                    this.setState({})
                }
            }
            let r = new n
        },
        824626: (e, t, a) => {
            a.d(t, {
                Gn: () => g,
                JU: () => r,
                M6: () => d,
                QA: () => o,
                RV: () => p,
                TG: () => u,
                bS: () => i,
                f7: () => c,
                j$: () => m,
                mY: () => l,
                qG: () => y,
                tQ: () => n,
                to: () => s
            });
            let i = ["popular", "recent", "duplications"],
                n = ["popular", "recent"],
                r = (0, a(109939).YK)({
                    recent: {
                        defaultMessage: "Most Recent",
                        id: "shared.marketplace.template.sort.recent"
                    },
                    duplications: {
                        defaultMessage: "Duplications",
                        id: "shared.marketplace.template.sort.duplication"
                    },
                    popular: {
                        defaultMessage: "Popular",
                        id: "shared.marketplace.template.sort.popular"
                    }
                }),
                o = ["community", "notion", "all"],
                l = (0, a(109939).YK)({
                    all: {
                        id: "shared.marketplace.template.filter.madeBy.all",
                        defaultMessage: "Notion + Creators"
                    },
                    notion: {
                        id: "shared.marketplace.template.filter.madeBy.notion",
                        defaultMessage: "Notion"
                    },
                    community: {
                        id: "shared.marketplace.template.filter.madeBy.creators",
                        defaultMessage: "Creators"
                    }
                }),
                s = ["paid", "free", "all"],
                d = (0, a(109939).YK)({
                    all: {
                        id: "shared.marketplace.template.filter.price.all",
                        defaultMessage: "Free + Paid"
                    },
                    paid: {
                        defaultMessage: "Paid",
                        id: "shared.marketplace.template.filter.price.paid"
                    },
                    free: {
                        defaultMessage: "Free",
                        id: "shared.marketplace.template.filter.price.free"
                    }
                }),
                c = ["english_and_user_locale", "user_locale"],
                u = (0, a(109939).YK)({
                    english_and_user_locale: {
                        defaultMessage: "English + {userLocale}",
                        id: "shared.marketplace.template.filter.locale.all"
                    },
                    user_locale: {
                        defaultMessage: "{userLocale}",
                        id: "shared.marketplace.template.filter.locale.user"
                    }
                }),
                p = ["all", "certified", "notion_recommended"],
                m = (0, a(109939).YK)({
                    all: {
                        defaultMessage: "All creators",
                        id: "shared.marketplace.creator.qualification.allCreators"
                    },
                    notion_recommended: {
                        defaultMessage: "Notion recommended",
                        id: "shared.marketplace.creator.qualification.notionRecommended"
                    },
                    certified: {
                        defaultMessage: "Certified consultants",
                        id: "shared.marketplace.creator.qualification.certifiedConsultants"
                    }
                }),
                g = ["number_of_duplicates", "number_of_templates", "alphabetical"],
                y = (0, a(109939).YK)({
                    number_of_duplicates: {
                        defaultMessage: "Most duplicated",
                        id: "shared.marketplace.creator.sort.mostDuplicated"
                    },
                    number_of_templates: {
                        defaultMessage: "Most templates",
                        id: "shared.marketplace.creator.sort.mostTemplates"
                    },
                    alphabetical: {
                        defaultMessage: "Alphabetical",
                        id: "shared.marketplace.creator.sort.alphabetical"
                    }
                })
        },
        908796: (e, t, a) => {
            a.d(t, {
                $H: () => r,
                BZ: () => g,
                Bf: () => o,
                CX: () => h,
                FN: () => y,
                H6: () => x,
                P9: () => l,
                TM: () => s,
                VT: () => A,
                dc: () => i,
                zG: () => f,
                zn: () => n
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454), a(737550), a(814603), a(147566), a(198721);
            let i = {
                madeBy: ["notion", "community"],
                paid: ["paid", "free"],
                orderBy: "popular",
                locales: "english_and_user_locale"
            };

            function n(e) {
                let {
                    madeBy: t,
                    paid: a,
                    orderBy: i,
                    locales: n
                } = e;
                return {
                    madeBy: m("madeBy", t) ? [t] : ["notion", "community"],
                    paid: m("paid", a) ? [a] : ["paid", "free"],
                    orderBy: m("orderBy", i) ? i : "popular",
                    locales: m("locales", n) ? n : "english_and_user_locale"
                }
            }

            function r(e) {
                let {
                    madeBy: t,
                    paid: a,
                    orderBy: i,
                    locales: n
                } = e;
                return {
                    madeBy: (null == t ? void 0 : t.split("+")) ? ? [],
                    paid: (null == a ? void 0 : a.split("+")) ? ? [],
                    orderBy: m("orderBy", i) ? i : "popular",
                    locales: m("locales", n) ? n : "english_and_user_locale"
                }
            }

            function o(e) {
                return (null == e ? void 0 : e.split(",")) ? ? []
            }

            function l(e) {
                return (null == e ? void 0 : e.split(",")) ? ? []
            }

            function s(e) {
                let {
                    slug: t,
                    filters: i,
                    allowMultiple: n
                } = e, r = new URL(`${a(986939).A.domainBaseUrl}${a(168962).JZ.marketplace}/categories/${encodeURIComponent(t)}`);
                if (i) {
                    let {
                        selectedCategorySlugs: e,
                        templateCategoryFilters: t,
                        selectedGroupedCategorySlugs: a
                    } = i;
                    0 !== e.length && r.searchParams.append("tags", e.toString()), 0 !== a.length && r.searchParams.append("groupedTags", a.toString()), "popular" !== t.orderBy && r.searchParams.append("orderBy", encodeURIComponent(t.orderBy)), "english_and_user_locale" !== t.locales && r.searchParams.append("locales", encodeURIComponent(t.locales)), n ? (t.madeBy.length > 0 && r.searchParams.append("madeBy", encodeURIComponent(t.madeBy.join("+").toString())), t.paid.length > 0 && r.searchParams.append("paid", encodeURIComponent(t.paid.join("+").toString()))) : (1 === t.madeBy.length && r.searchParams.append("madeBy", encodeURIComponent(t.madeBy[0].toString())), 1 === t.paid.length && r.searchParams.append("paid", encodeURIComponent(t.paid[0].toString())))
                }
                return r.toString()
            }
            let d = ["notion", "community"],
                c = ["paid", "free"],
                u = ["duplications", "recent"],
                p = ["english_and_user_locale", "user_locale"];

            function m(e, t) {
                if (void 0 === t) return !1;
                switch (e) {
                    case "madeBy":
                        if ("all" === t) return !1;
                        return d.includes(t);
                    case "orderBy":
                        return u.includes(t);
                    case "paid":
                        if ("all" === t) return !1;
                        return c.includes(t);
                    case "locales":
                        return p.includes(t);
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function g(e) {
                let {
                    subcategories: t,
                    contentGroups: i,
                    selectedSubcategorySlugs: n
                } = e, r = a(381453).qI(i.map(e => e.categories)).map(e => e.slug), o = t.filter(e => !r.includes(e.slug)), l = new Set, s = e => {
                    let t = [];
                    for (let a of e)
                        if (!l.has(a.slug))
                            if (l.add(a.slug), n.includes(a.slug)) {
                                let e = o.filter(e => {
                                    var t;
                                    return null == (t = a.subcategory_contentful_ids_v2) ? void 0 : t.includes(e.contentful_id)
                                });
                                t.push({ ...a,
                                    subcategories: s(e)
                                })
                            } else t.push(a);
                    return t
                };
                return s(o)
            }
            Date.now(), Date.now(), Date.now();
            let y = "white";

            function f(e) {
                if (e) {
                    for (let t of e)
                        if (t.attributes.color) return t.attributes.color;
                    return y
                }
            }
            let h = a(100010).mm.filter(e => "all" !== e.key),
                x = a(100010).Sf.filter(e => "all" !== e.key);

            function A(e) {
                var t;
                return !!(null == (t = e.categories) ? void 0 : t.some(e => e.contentful_id === a(54353).pm))
            }
        },
        947673: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var i = () => a(546605);
            class n extends i().Store {
                getInitialState() {
                    return {
                        duplicationStatus: null
                    }
                }
            }
            let r = new n
        }
    }
]);