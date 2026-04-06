"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [54951], {
        20479: (e, t, a) => {
            a.d(t, {
                C: () => r
            }), a(296540);
            var i = a(474848);
            let r = (0, a(839697).p)("arrowInCircleUpAnimated", {
                viewBox: "2.37 2.37 15.25 15.26",
                svg: e => {
                    let t = (0, a(4962).lZ)(),
                        r = `all 0.548s linear(
    						0, 0.006, 0.022 2%, 0.091 4.3%, 0.52 14%, 0.624, 0.71 19.3%, 0.784,
    						0.846 24.9%, 0.895 27.9%, 0.934, 0.961 34.4%, 0.98 37.9%, 0.993 42%,
    						1.001 46.8%, 1.004 55.3%, 1
  						)`;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: t,
                                children: (0, i.jsx)("rect", {
                                    x: "2.5",
                                    y: "2.5",
                                    width: "15",
                                    height: "15",
                                    rx: "7.5"
                                })
                            })
                        }), (0, i.jsx)("rect", {
                            x: "2.5",
                            y: "2.5",
                            width: "15",
                            height: "15",
                            rx: "7.5"
                        }), (0, i.jsx)("g", {
                            clipPath: `url(#${t})`,
                            children: (0, i.jsx)("path", {
                                style: {
                                    transformOrigin: "bottom center",
                                    transition: r,
                                    ..."animate" === e ? {
                                        translate: "0 -14px",
                                        scale: "70%",
                                        opacity: 0
                                    } : {}
                                },
                                d: "M13.0419 9.55439C12.7978 9.79847 12.4021 9.79847 12.158 9.55439L10.625 8.02136L10.625 13.4874C10.625 13.8326 10.3452 14.1124 10 14.1124C9.65482 14.1124 9.375 13.8326 9.375 13.4874L9.375 8.02131L7.84192 9.5544C7.59784 9.79847 7.20211 9.79847 6.95804 9.5544C6.71396 9.31032 6.71396 8.91459 6.95803 8.67051L9.55803 6.07051C9.67524 5.9533 9.83421 5.88745 9.99997 5.88745C10.1657 5.88745 10.3247 5.9533 10.4419 6.07051L13.0419 8.67051C13.286 8.91459 13.286 9.31032 13.0419 9.55439Z",
                                fill: "white"
                            })
                        }), (0, i.jsx)("g", {
                            clipPath: `url(#${t})`,
                            children: (0, i.jsx)("path", {
                                style: {
                                    translate: "0 10px",
                                    scale: "70%",
                                    opacity: 0,
                                    transformOrigin: "top center",
                                    transition: r,
                                    ..."animate" === e ? {
                                        translate: "0 0",
                                        scale: "100%",
                                        opacity: 1
                                    } : {}
                                },
                                d: "M13.0419 9.55439C12.7978 9.79847 12.4021 9.79847 12.158 9.55439L10.625 8.02136L10.625 13.4874C10.625 13.8326 10.3452 14.1124 10 14.1124C9.65482 14.1124 9.375 13.8326 9.375 13.4874L9.375 8.02131L7.84192 9.5544C7.59784 9.79847 7.20211 9.79847 6.95804 9.5544C6.71396 9.31032 6.71396 8.91459 6.95803 8.67051L9.55803 6.07051C9.67524 5.9533 9.83421 5.88745 9.99997 5.88745C10.1657 5.88745 10.3247 5.9533 10.4419 6.07051L13.0419 8.67051C13.286 8.91459 13.286 9.31032 13.0419 9.55439Z",
                                fill: "white"
                            })
                        })]
                    })
                }
            })
        },
        104361: (e, t, a) => {
            a.d(t, {
                d: () => r
            });
            let i = {
                orange: "orange",
                purple: "purple",
                pink: "pink"
            };

            function r({
                disableExposureLogging: e
            }) {
                return i[(0, a(604306).r)("nus_trial_button_color", {
                    disableExposureLogging: e
                })]
            }
        },
        156139: (e, t, a) => {
            a.d(t, {
                e: () => n
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var i = a(296540),
                r = a(474848);
            let s = {
                loading: {
                    icon: () => ({
                        type: "animated",
                        iconFn: a(20479).C,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }),
                    highlightText: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: () => (0, r.jsx)(a(517334).k, {}),
                        text: () => (0, r.jsx)(a(517334).k, {}),
                        icon: () => (0, r.jsx)(a(517334).k, {})
                    }
                },
                eligible_to_purchase: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: a(930887).q,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    } : {
                        type: "animated",
                        iconFn: a(20479).C,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    highlightText: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e,
                            upsell: t
                        }) => o(t) ? e.formatMessage({
                            id: "upgrade.addCreditsButton",
                            defaultMessage: "Add credits"
                        }) : e.formatMessage({
                            id: "upgrade.outlineButton",
                            defaultMessage: "Upgrade now"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: i,
                            renderTextHighlight: r
                        }) => {
                            let s = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCreditsText",
                                defaultMessage: "<highlight>Add credits</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.text",
                                defaultMessage: "<highlight>Upgrade</highlight> {hasProductDisplayName, select, true {to {productName}} other {for access}}"
                            }, {
                                highlight: (...e) => r ? r(e) : e,
                                hasProductDisplayName: !!s,
                                productName: s
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCreditsIconTooltip",
                                defaultMessage: "Add credits to restore AI access"
                            }) : e.formatMessage({
                                id: "upgrade.iconTooltip",
                                defaultMessage: "Upgrade {hasProductDisplayName, select, true {to {productName}} other {}} for access"
                            }, {
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        }
                    }
                },
                eligible_for_trial: {
                    icon: () => ({
                        type: "animated",
                        iconFn: a(824843).P,
                        colorPalette: "orange",
                        colorVariant: "accentPrimary"
                    }),
                    highlightText: {
                        colorPalette: "orange",
                        colorVariant: "secondary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.trial.button",
                            defaultMessage: "Try for free"
                        }),
                        text: ({
                            intl: e,
                            renderTextHighlight: t
                        }) => e.formatMessage({
                            id: "upgrade.trial.text",
                            defaultMessage: "<highlight>Try</highlight> for free"
                        }, {
                            highlight: (...e) => t ? t(e) : e
                        }),
                        icon: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.trial.iconTooltip",
                            defaultMessage: "Try for free"
                        })
                    }
                },
                sales_eligible: {
                    icon: () => ({
                        type: "static",
                        iconFn: a(714719).paperPlaneFillIcon,
                        colorVariant: "secondary"
                    }),
                    highlightText: {
                        colorVariant: "secondary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.button",
                            defaultMessage: "Contact sales"
                        }),
                        text: ({
                            intl: e,
                            renderTextHighlight: t
                        }) => e.formatMessage({
                            id: "upgrade.sales.text",
                            defaultMessage: "<highlight>Contact sales</highlight> to learn more"
                        }, {
                            highlight: (...e) => t ? t(e) : e
                        }),
                        icon: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.iconTooltip",
                            defaultMessage: "Contact sales to learn more"
                        })
                    }
                },
                sales_assisted: {
                    icon: () => ({
                        type: "static",
                        iconFn: a(714719).paperPlaneFillIcon,
                        colorVariant: "secondary"
                    }),
                    highlightText: {
                        colorVariant: "secondary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.button",
                            defaultMessage: "Contact sales"
                        }),
                        text: ({
                            intl: e,
                            renderTextHighlight: t
                        }) => e.formatMessage({
                            id: "upgrade.sales.text",
                            defaultMessage: "<highlight>Contact sales</highlight> to learn more"
                        }, {
                            highlight: (...e) => t ? t(e) : e
                        }),
                        icon: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.sales.iconTooltip",
                            defaultMessage: "Contact sales to learn more"
                        })
                    }
                },
                eligible_to_request: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: a(930887).q,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    } : {
                        type: "animated",
                        iconFn: a(20479).C,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    highlightText: {
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.request.button",
                            defaultMessage: "Request"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: i,
                            renderTextHighlight: r
                        }) => {
                            let s = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.requestCredits.text",
                                defaultMessage: "<highlight>Request credits</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.request.text",
                                defaultMessage: "<highlight>Request</highlight> {hasProductDisplayName, select, true {access to {productName}} other {access}}"
                            }, {
                                highlight: (...e) => r ? r(e) : e,
                                hasProductDisplayName: !!s,
                                productName: s
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.addCredits.iconTooltip",
                                defaultMessage: "Request credits to restore AI access"
                            }) : e.formatMessage({
                                id: "upgrade.request.iconTooltip",
                                defaultMessage: "Request {hasProductDisplayName, select, true {access to {productName}} other {access}}"
                            }, {
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        }
                    }
                },
                not_eligible: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: a(930887).q,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    } : {
                        type: "static",
                        iconFn: a(682612).arrowInCircleUpFillIcon,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    highlightText: {
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e,
                            upsell: t
                        }) => o(t) ? e.formatMessage({
                            id: "upgrade.addCreditsButton",
                            defaultMessage: "Add credits"
                        }) : e.formatMessage({
                            id: "upgrade.outlineButton",
                            defaultMessage: "Upgrade now"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: i,
                            renderTextHighlight: r
                        }) => {
                            let s = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.not.eligible.credits.text",
                                defaultMessage: "<highlight>Add credits</highlight>"
                            }, {
                                highlight: (...e) => r ? r(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.text",
                                defaultMessage: "<highlight>Upgrade</highlight> {hasProductDisplayName, select, true {to {productName}} other {for access}}"
                            }, {
                                highlight: (...e) => r ? r(e) : e,
                                hasProductDisplayName: !!s,
                                productName: s
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return e.formatMessage({
                                id: "upgrade.iconTooltip",
                                defaultMessage: "Upgrade {hasProductDisplayName, select, true {to {productName}} other {}} for access"
                            }, {
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        }
                    },
                    disabledTooltip: ({
                        intl: e,
                        upsell: t
                    }) => o(t) ? e.formatMessage({
                        id: "upgrade.not.eligible.credits.disabledTooltip",
                        defaultMessage: "You're not eligible to purchase credits"
                    }) : e.formatMessage({
                        id: "upgrade.not.eligible.disabledTooltip",
                        defaultMessage: "You're not eligible to upgrade"
                    })
                },
                request_pending: {
                    icon: ({
                        upsell: e
                    }) => o(e) ? {
                        type: "static",
                        iconFn: a(930887).q,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    } : {
                        type: "static",
                        iconFn: a(682612).arrowInCircleUpFillIcon,
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    highlightText: {
                        colorPalette: "gray",
                        colorVariant: "primary"
                    },
                    buttonColorPalette: "blue",
                    label: {
                        button: ({
                            intl: e
                        }) => e.formatMessage({
                            id: "upgrade.requestPending.button",
                            defaultMessage: "Pending"
                        }),
                        text: ({
                            intl: e,
                            upsell: t,
                            featureName: i,
                            renderTextHighlight: s
                        }) => {
                            let l = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return o(t) ? e.formatMessage({
                                id: "upgrade.requestPending.credits.text",
                                defaultMessage: "<highlight>Credits requested</highlight>"
                            }, {
                                highlight: (...e) => s ? s(e) : e
                            }) : e.formatMessage({
                                id: "upgrade.requestPending.text",
                                defaultMessage: "<highlight>Requested</highlight>{space}{hasProductDisplayName, select, true {access to {productName}} other {access}}{space}is{space}<highlight>pending</highlight>"
                            }, {
                                highlight: (...e) => s ? s(e) : e,
                                space: (0, r.jsx)(r.Fragment, {
                                    children: " "
                                }),
                                hasProductDisplayName: !!l,
                                productName: l
                            })
                        },
                        icon: ({
                            intl: e,
                            upsell: t,
                            featureName: i
                        }) => {
                            let r = (0, a(327506).T)({
                                upsell: t,
                                intl: e,
                                featureName: i
                            });
                            return e.formatMessage({
                                id: "upgrade.requestPending.iconTooltip",
                                defaultMessage: "Requested {hasProductDisplayName, select, true {access to {productName}} other {access}} is pending"
                            }, {
                                hasProductDisplayName: !!r,
                                productName: r
                            })
                        }
                    },
                    disabledTooltip: ({
                        intl: e,
                        upsell: t,
                        featureName: i
                    }) => {
                        let r = (0, a(327506).T)({
                            upsell: t,
                            intl: e,
                            featureName: i
                        });
                        return o(t) ? e.formatMessage({
                            id: "upgrade.requestPending.credits.disabledTooltip",
                            defaultMessage: "Request for credits is pending"
                        }) : e.formatMessage({
                            id: "upgrade.requestPending.disabledTooltip",
                            defaultMessage: "Requested {hasProductDisplayName, select, true {access to {productName}} other {access}} is pending"
                        }, {
                            hasProductDisplayName: !!r,
                            productName: r
                        })
                    }
                }
            };

            function o(e) {
                return "product" === e.type && "ai_credit_pack" === e.product
            }

            function l(e, t) {
                return { ...e,
                    icon: a => ({ ...e.icon(a),
                        colorPalette: t
                    }),
                    highlightText: { ...e.highlightText,
                        colorPalette: t
                    },
                    buttonColorPalette: t
                }
            }
            let d = new Set(["eligible_to_purchase", "eligible_to_request"]);

            function n(e) {
                let t = d.has(e),
                    r = (0, a(214665).r)({
                        disableExposureLogging: !t
                    }),
                    o = "eligible_for_trial" === e,
                    n = (0, a(104361).d)({
                        disableExposureLogging: !o
                    });
                return i.useMemo(() => {
                    let a = s[e];
                    return t ? l(a, r) : o && void 0 !== n ? l(a, n) : a
                }, [e, r, n, t, o])
            }
        },
        183999: (e, t, a) => {
            a.d(t, {
                e4: () => s,
                lP: () => o,
                y8: () => r
            });
            var i = a(296540);
            let r = {
                minHeight: "fit-content",
                textWrap: "pretty"
            };

            function s({
                icon: e,
                animationState: t
            }) {
                return "animated" === e.type ? {
                    type: "animated",
                    icon: e.iconFn,
                    colorPalette: e.colorPalette,
                    colorVariant: e.colorVariant ? ? "primary",
                    animationState: t
                } : {
                    type: "static",
                    icon: e.iconFn,
                    colorPalette: e.colorPalette,
                    colorVariant: e.colorVariant ? ? "primary"
                }
            }

            function o(e) {
                let [t, a] = i.useState("initial");
                return i.useEffect(() => {
                    null != e && e.current && (e.current.addEventListener("mouseenter", () => a("animate")), e.current.addEventListener("mouseleave", () => a("initial")))
                }, [e]), {
                    animationState: t,
                    animationTriggers: {
                        onMouseEnter: () => a("animate"),
                        onMouseLeave: () => a("initial")
                    }
                }
            }
        },
        214665: (e, t, a) => {
            a.d(t, {
                r: () => r
            });
            let i = {
                control: "blue",
                green: "green",
                teal: "teal",
                red: "red"
            };

            function r({
                disableExposureLogging: e
            }) {
                return i[(0, a(604306).r)("nus_upgrade_button_color", {
                    disableExposureLogging: e
                })] ? ? "blue"
            }
        },
        268627: (e, t, a) => {
            a.d(t, {
                c: () => s
            });
            var i = a(296540),
                r = a(474848);

            function s(e) {
                let {
                    upsell: t,
                    upgradeStatus: s,
                    handleClick: o,
                    customMessages: l,
                    size: d = "default",
                    width: n = "hug",
                    onMouseDown: c,
                    hoverRef: u,
                    hideIcon: g,
                    featureName: h
                } = e, p = (0, a(109939).tz)(), f = (0, a(156139).e)(s), m = i.useRef(null), b = (0, a(729787).wY)(m), M = e.textColor ? ? ("small" === d ? "secondary" : "primary"), y = { ...a(183999).y8,
                    ..."small" === d ? {
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4,
                        gap: 4
                    } : {
                        gap: 6
                    }
                }, x = e => (0, r.jsx)(a(725187).W, { ...f.highlightText,
                    size: d,
                    children: e
                }), {
                    productName: P,
                    upgradePhrase: C
                } = (0, a(327506).n)({
                    upsell: t,
                    intl: p,
                    featureName: h,
                    upgradeStatus: s
                }), T = null != l && l[s] ? p.formatMessage(l[s], { ...(0, a(426458).I)(x),
                    productName: P,
                    upgradePhrase: C,
                    ...l[s].interpolatedValues
                }) : f.label.text({
                    intl: p,
                    upsell: t,
                    featureName: h,
                    renderTextHighlight: x
                }), _ = !!f.disabledTooltip, {
                    animationState: v,
                    animationTriggers: N
                } = (0, a(183999).lP)(u);
                return (0, r.jsx)(a(988022).p, { ...u ? {} : N,
                    ref: m,
                    disabled: _ && !u,
                    hoveredStyle: u ? {
                        background: "unset"
                    } : void 0,
                    size: a(799236).kD[d],
                    width: n,
                    onMouseDown: c,
                    iconLeading: g ? void 0 : { ...(0, a(183999).e4)({
                            icon: f.icon({
                                upsell: t
                            }),
                            animationState: v
                        }),
                        size: a(799236).D6[d],
                        style: { ...null != b && b.height && b.height > a(399411).RO[a(799236).kD[d]] ? {
                                alignSelf: "flex-start",
                                marginTop: 2
                            } : {}
                        }
                    },
                    style: y,
                    onClick: o,
                    children: (0, r.jsx)(a(111010).D, {
                        colorVariant: M,
                        children: T
                    })
                })
            }
        },
        327506: (e, t, a) => {
            a.d(t, {
                T: () => r,
                n: () => s
            });
            let i = (0, a(109939).YK)({
                loading: {
                    id: "upgradeAction.loading",
                    defaultMessage: "Loading…"
                },
                upgradeToWithProduct: {
                    id: "upgradeAction.upgradeToWithProduct",
                    defaultMessage: "Upgrade to {productName}"
                },
                upgradeWithProduct: {
                    id: "upgradeAction.upgradeWithProduct",
                    defaultMessage: "Upgrade {productName}"
                },
                addWithProduct: {
                    id: "upgradeAction.addWithProduct",
                    defaultMessage: "Add {productName}"
                },
                tryWithProduct: {
                    id: "upgradeAction.tryWithProduct",
                    defaultMessage: "Try {productName} for free"
                },
                requestAccessToWithProduct: {
                    id: "upgradeAction.requestAccessToWithProduct",
                    defaultMessage: "Request access to {productName}"
                },
                pendingRequestedAccessToWithProduct: {
                    id: "upgradeAction.pendingRequestedAccessToWithProduct",
                    defaultMessage: "Requested access to {productName} is pending"
                },
                contactSales: {
                    id: "upgradeAction.contactSales",
                    defaultMessage: "Contact sales to learn more"
                },
                requestWithProduct: {
                    id: "upgradeAction.requestWithProduct",
                    defaultMessage: "Request {productName}"
                },
                pendingRequestWithProduct: {
                    id: "upgradeAction.pendingRequestWithProduct",
                    defaultMessage: "Your request for {productName} is pending"
                },
                credits: {
                    id: "upgradeAction.credits",
                    defaultMessage: "credits"
                }
            });

            function r({
                upsell: e,
                intl: t,
                featureName: i
            }) {
                let s = "product" === e.type ? e.product : void 0;
                if (s) return i && (0, a(149957).QO)(i) && "business" === s ? t.formatMessage(a(262166).v0.notionAi) : (0, a(262166).u2)({
                    product: s,
                    intl: t
                })
            }

            function s({
                upsell: e,
                intl: t,
                featureName: o,
                upgradeStatus: l
            }) {
                let d, n = "product" === e.type && "ai_credit_pack" === e.product,
                    c = r({
                        upsell: e,
                        intl: t,
                        featureName: o
                    }),
                    u = c === t.formatMessage(a(262166).v0.notionAi),
                    g = t.formatMessage(i.credits);
                if (n) {
                    switch (l) {
                        case "loading":
                            d = t.formatMessage(i.loading);
                            break;
                        case "eligible_to_purchase":
                        case "not_eligible":
                            d = t.formatMessage(i.addWithProduct, {
                                productName: g
                            });
                            break;
                        case "eligible_for_trial":
                            d = t.formatMessage(i.tryWithProduct, {
                                productName: g
                            });
                            break;
                        case "eligible_to_request":
                            d = t.formatMessage(i.requestWithProduct, {
                                productName: g
                            });
                            break;
                        case "request_pending":
                            d = t.formatMessage(i.pendingRequestWithProduct, {
                                productName: g
                            });
                            break;
                        case "sales_assisted":
                        case "sales_eligible":
                            d = t.formatMessage(i.contactSales);
                            break;
                        default:
                            (0, a(722371).HB)(l)
                    }
                    return {
                        productName: c,
                        upgradePhrase: d
                    }
                }
                if (u) {
                    switch (l) {
                        case "loading":
                            d = t.formatMessage(i.loading);
                            break;
                        case "eligible_to_purchase":
                        case "not_eligible":
                            d = t.formatMessage(i.upgradeWithProduct, {
                                productName: c
                            });
                            break;
                        case "eligible_for_trial":
                            d = t.formatMessage(i.tryWithProduct, {
                                productName: c
                            });
                            break;
                        case "eligible_to_request":
                            d = t.formatMessage(i.requestAccessToWithProduct, {
                                productName: c
                            });
                            break;
                        case "request_pending":
                            d = t.formatMessage(i.pendingRequestedAccessToWithProduct, {
                                productName: c
                            });
                            break;
                        case "sales_assisted":
                        case "sales_eligible":
                            d = t.formatMessage(i.contactSales, {
                                productName: c
                            });
                            break;
                        default:
                            (0, a(722371).HB)(l)
                    }
                    return {
                        productName: c,
                        upgradePhrase: d
                    }
                }
                switch (l) {
                    case "loading":
                        d = t.formatMessage(i.loading);
                        break;
                    case "eligible_to_purchase":
                    case "not_eligible":
                        d = t.formatMessage(i.upgradeToWithProduct, {
                            productName: c
                        });
                        break;
                    case "eligible_for_trial":
                        d = t.formatMessage(i.tryWithProduct, {
                            productName: c
                        });
                        break;
                    case "eligible_to_request":
                        d = t.formatMessage(i.requestAccessToWithProduct, {
                            productName: c
                        });
                        break;
                    case "request_pending":
                        d = t.formatMessage(i.pendingRequestedAccessToWithProduct, {
                            productName: c
                        });
                        break;
                    case "sales_assisted":
                    case "sales_eligible":
                        d = t.formatMessage(i.contactSales, {
                            productName: c
                        });
                        break;
                    default:
                        (0, a(722371).HB)(l)
                }
                return {
                    productName: c,
                    upgradePhrase: d
                }
            }
        },
        426458: (e, t, a) => {
            a.d(t, {
                I: () => i
            });

            function i(e) {
                return {
                    highlight: e,
                    bold: e
                }
            }
        },
        551942: (e, t, a) => {
            a.d(t, {
                T: () => s
            });
            var i = a(296540),
                r = a(474848);

            function s({
                tooltipMessage: e,
                children: t,
                placement: o = "bottom"
            }) {
                return e ? (0, r.jsx)(a(51831).m, {
                    placement: o,
                    style: {
                        maxWidth: 240,
                        minWidth: 174
                    },
                    content: () => (0, r.jsx)(a(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "inversePrimary",
                        children: e
                    }),
                    textWrap: !0,
                    children: e => i.cloneElement(t, (0, a(63390).A)(e, t.props))
                }) : t
            }
        },
        682612: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowInCircleUpFillIcon: () => r,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 17.625a7.625 7.625 0 1 0 0-15.25 7.625 7.625 0 0 0 0 15.25m3.042-8.07a.625.625 0 0 1-.884 0L10.625 8.02v5.466a.625.625 0 1 1-1.25 0V8.021L7.842 9.554a.625.625 0 1 1-.884-.883l2.6-2.6a.625.625 0 0 1 .884 0l2.6 2.6a.625.625 0 0 1 0 .883"
                    })
                },
                r = (0, a(104509).wt)("arrowInCircleUpFill", i, "fill")
        },
        714719: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                paperPlaneFillIcon: () => r
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.07 2.9 15.08 15.08",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m16.37 2.901-.053.019L2.474 8.277A.625.625 0 0 0 2.4 9.408l4.826 2.638zm-8.366 9.922 2.638 4.827a.625.625 0 0 0 1.13-.074L17.13 3.733l.019-.054z"
                    })
                },
                r = (0, a(104509).wt)("paperPlaneFill", i, "fill")
        },
        725187: (e, t, a) => {
            a.d(t, {
                W: () => r
            }), a(296540);
            var i = a(474848);

            function r({
                colorPalette: e,
                colorVariant: t,
                size: o,
                children: l
            }) {
                return (0, i.jsx)(a(111010).D, {
                    style: {
                        display: "contents"
                    },
                    colorPalette: e,
                    colorVariant: t,
                    styleKey: s[o],
                    children: l
                })
            }
            let s = {
                small: "captionMedium",
                default: "bodyMedium",
                large: "bodyMedium"
            }
        },
        740957: (e, t, a) => {
            a.d(t, {
                c: () => s
            }), a(296540);
            var i = a(474848);
            let r = {
                padding: 1
            };

            function s(e) {
                var t;
                let {
                    upsell: s,
                    upgradeStatus: l,
                    handleClick: d,
                    customMessages: n,
                    showPlanName: c,
                    onMouseDown: u,
                    hoverRef: g,
                    featureName: h
                } = e, p = (0, a(109939).tz)(), f = (0, a(156139).e)(l), {
                    productName: m,
                    upgradePhrase: b
                } = (0, a(327506).n)({
                    upsell: s,
                    intl: p,
                    featureName: h,
                    upgradeStatus: l
                }), M = null != n && n[l] ? p.formatMessage(n[l], { ...(0, a(426458).I)(e => (0, i.jsx)(a(725187).W, { ...f.highlightText,
                        size: "small",
                        children: e
                    })),
                    productName: m,
                    upgradePhrase: b,
                    ...n[l].interpolatedValues
                }) : f.label.icon({
                    intl: p,
                    upsell: s,
                    featureName: h
                }), y = c ? e.iconAlignment ? ? "left" : "left", {
                    animationState: x,
                    animationTriggers: P
                } = (0, a(183999).lP)(g);
                return (0, i.jsx)(a(551942).T, {
                    tooltipMessage: g ? void 0 : (null == (t = f.disabledTooltip) ? void 0 : t.call(f, {
                        intl: p,
                        upsell: s,
                        featureName: h
                    })) ? ? M,
                    children: (0, i.jsx)(a(988022).p, { ...g ? {} : P,
                        disabled: !!f.disabledTooltip,
                        hoveredStyle: g ? {
                            background: "unset"
                        } : void 0,
                        size: "xs",
                        style: {
                            gap: 4 * !!c
                        },
                        iconLeading: "left" === y ? { ...(0, a(183999).e4)({
                                icon: f.icon({
                                    upsell: s
                                }),
                                animationState: x
                            }),
                            size: "xs"
                        } : void 0,
                        iconTrailing: "right" === y ? { ...(0, a(183999).e4)({
                                icon: f.icon({
                                    upsell: s
                                }),
                                animationState: x
                            }),
                            size: "xs"
                        } : void 0,
                        onClick: d,
                        onMouseDown: u,
                        children: c && m ? (0, i.jsx)("span", {
                            style: r,
                            children: (0, i.jsx)(a(725187).W, { ...f.highlightText,
                                size: "small",
                                children: "product" === s.type && "ai_credit_pack" === s.product ? p.formatMessage(o.credits) : m
                            })
                        }) : null
                    })
                })
            }
            let o = (0, a(109939).YK)({
                credits: {
                    id: "upgradeIconButton.credits",
                    defaultMessage: "Credits"
                }
            })
        },
        754951: (e, t, a) => {
            a.r(t), a.d(t, {
                UpgradeButton: () => o
            }), a(296540);
            var i = a(474848);

            function r(e) {
                var t;
                let {
                    upgradeStatus: r,
                    handleClick: s,
                    size: o = "default",
                    width: l = "fill",
                    hoverRef: d,
                    onMouseDown: n,
                    upsell: c,
                    featureName: u
                } = e, g = (0, a(109939).tz)(), h = (0, a(156139).e)(r), p = h.label.button({
                    intl: g,
                    upsell: c,
                    featureName: u
                }), f = !!h.disabledTooltip, {
                    animationState: m,
                    animationTriggers: b
                } = (0, a(183999).lP)(d);
                return (0, i.jsx)(a(551942).T, {
                    tooltipMessage: f && !d ? null == (t = h.disabledTooltip) ? void 0 : t.call(h, {
                        intl: g,
                        upsell: c,
                        featureName: u
                    }) : void 0,
                    children: (0, i.jsx)(a(548436).A, { ...d ? {} : b,
                        disabled: f,
                        hoveredStyle: d ? {
                            background: "unset"
                        } : void 0,
                        size: a(799236).lR[o],
                        width: l,
                        iconLeading: { ...(0, a(183999).e4)({
                                icon: h.icon({
                                    upsell: c
                                }),
                                animationState: m
                            }),
                            size: a(799236).Ud[o]
                        },
                        style: a(183999).y8,
                        onClick: s,
                        onMouseDown: n,
                        children: p
                    })
                })
            }

            function s(e) {
                var t;
                let {
                    upsell: r,
                    upgradeStatus: s,
                    handleClick: o,
                    onMouseDown: l,
                    featureName: d
                } = e, n = (0, a(109939).tz)(), c = (0, a(156139).e)(s), u = c.label.button({
                    intl: n,
                    upsell: r,
                    featureName: d
                }), g = !!c.disabledTooltip;
                return (0, i.jsx)(a(551942).T, {
                    tooltipMessage: g ? null == (t = c.disabledTooltip) ? void 0 : t.call(c, {
                        intl: n,
                        upsell: r,
                        featureName: d
                    }) : void 0,
                    children: (0, i.jsx)(a(912946).A, {
                        colorPalette: c.buttonColorPalette,
                        disabled: g,
                        size: a(799236).lR.default,
                        onClick: o,
                        onMouseDown: l,
                        children: u
                    })
                })
            }

            function o({
                source: e,
                upsell: t,
                featureName: l,
                hoverRef: d,
                onMouseDown: n,
                postUpgradeCallback: c,
                onClickBeforeUpgradeAction: u,
                spaceStore: g,
                ...h
            }) {
                let {
                    upgradeEligibility: p,
                    handleClick: f
                } = (0, a(79268).C)({
                    upsell: t,
                    source: e,
                    buttonDisplayType: h.display,
                    onClickBeforeUpgradeAction: u,
                    postUpgradeCallback: c,
                    spaceStore: g
                });
                if (!p || "not_eligible" === p.status && "feature_not_upsellable" === p.reason) return null;
                switch (h.display) {
                    case "button":
                        return (0, i.jsx)(r, {
                            upgradeStatus: p.status,
                            handleClick: f,
                            upsell: t,
                            featureName: l,
                            hoverRef: d,
                            onMouseDown: n,
                            ...h
                        });
                    case "icon":
                        return (0, i.jsx)(a(740957).c, {
                            upgradeStatus: p.status,
                            handleClick: f,
                            upsell: t,
                            featureName: l,
                            hoverRef: d,
                            onMouseDown: n,
                            ...h
                        });
                    case "text":
                        return (0, i.jsx)(a(268627).c, {
                            upgradeStatus: p.status,
                            handleClick: f,
                            upsell: t,
                            featureName: l,
                            hoverRef: d,
                            onMouseDown: n,
                            ...h
                        });
                    case "primary":
                        return (0, i.jsx)(s, {
                            upgradeStatus: p.status,
                            handleClick: f,
                            upsell: t,
                            featureName: l,
                            onMouseDown: n,
                            ...h
                        })
                }
            }
        },
        799236: (e, t, a) => {
            a.d(t, {
                D6: () => o,
                Ud: () => r,
                kD: () => s,
                lR: () => i
            });
            let i = {
                    small: "md",
                    default: "lg",
                    large: "xl"
                },
                r = {
                    small: "xs",
                    default: "sm",
                    large: "sm"
                },
                s = {
                    small: "xs",
                    default: "sm"
                },
                o = {
                    small: "xxs",
                    default: "sm"
                }
        },
        824843: (e, t, a) => {
            a.d(t, {
                P: () => r
            }), a(296540);
            var i = a(474848);
            let r = (0, a(839697).p)("presentFillAnimated", {
                viewBox: "2.72 1.1 15.56 16.51",
                svg: e => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("path", {
                        d: "M7.93132 1.82416C6.22047 1.48199 4.62427 2.79056 4.62427 4.5353C4.62427 5.09457 4.79032 5.61505 5.07582 6.05014H4.29912C3.42927 6.05014 2.72412 6.75529 2.72412 7.62514V9.52514C2.72412 10.1359 3.07175 10.6654 3.57994 10.9267H9.37427V6.05643H10.6243V10.9267H16.4183C16.9265 10.6654 17.2741 10.1359 17.2741 9.52514V7.62514C17.2741 6.75529 16.569 6.05014 15.6991 6.05014H14.9228C15.2082 5.61507 15.3743 5.09461 15.3743 4.53538C15.3743 2.78566 13.7613 1.48542 12.0554 1.82661C11.2118 1.99533 10.4924 2.47592 10.0119 3.13467C9.54306 2.48204 8.83618 2.00513 8.00124 1.83815L7.93132 1.82416ZM9.37427 5.03772V6.05013H7.3891C6.55248 6.05013 5.87427 5.37192 5.87427 4.5353C5.87427 3.57937 6.74882 2.86241 7.68618 3.04989L7.7561 3.06387C8.69699 3.25205 9.37427 4.07819 9.37427 5.03772ZM14.1243 4.53538C14.1243 5.36715 13.4539 6.04235 12.624 6.05014H10.6243V5.08677C10.6243 4.10164 11.3289 3.24667 12.3005 3.05234C13.2428 2.86389 14.1243 3.58444 14.1243 4.53538Z",
                        style: {
                            rotate: "animate" === e ? "14deg" : "0deg",
                            transformOrigin: "75% center",
                            transition: `rotate 0.548s linear(
    				0, 0.007, 0.028 1.8%, 0.113 3.9%, 0.613 12.1%, 0.817 16.2%, 0.894,
   					0.954 20.4%, 1, 1.031 25.1%, 1.043 26.4%, 1.051, 1.055, 1.056 31.2%,
    				1.049 34.9%, 1.012 46.3%, 0.999 54.2%, 0.997 61.9%, 1
  				)`
                        }
                    }), (0, i.jsx)("path", {
                        d: "M10.6243 12.1768H16.4133V15.7002C16.4133 16.5701 15.7082 17.2752 14.8383 17.2752H10.6243V12.1768Z"
                    }), (0, i.jsx)("path", {
                        d: "M3.58521 12.1768H9.37427V17.2752H5.1602C4.29036 17.2752 3.58521 16.5701 3.58521 15.7002V12.1768Z"
                    })]
                })
            })
        },
        839697: (e, t, a) => {
            a.d(t, {
                p: () => r
            }), a(296540);
            var i = a(474848);

            function r(e, t) {
                let {
                    viewBox: r,
                    svg: s
                } = t, o = r ? ? `0 0 ${a(104509).Ev.default} ${a(104509).Ev.default}`;
                return Object.assign(({
                    style: t,
                    className: r,
                    label: l,
                    animationState: d,
                    skipBaseStyles: n
                }) => {
                    let c = r ? `${e} ${r}` : e;
                    return (0, i.jsx)(a(670375).A, {
                        viewBox: o,
                        className: c,
                        style: t,
                        label: l,
                        skipBaseStyles: n,
                        children: s(d)
                    })
                }, {
                    __iconDefinition: {
                        viewBox: o,
                        svg: s("initial")
                    }
                })
            }
        },
        930887: (e, t, a) => {
            a.d(t, {
                q: () => r
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25m0 4c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                    })
                },
                r = (0, a(104509).wt)("plusCircleFill", i, "fill")
        }
    }
]);