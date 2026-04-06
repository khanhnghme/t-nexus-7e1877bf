"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14401, 92883], {
        18705: (e, t, r) => {
            r.d(t, {
                T: () => n
            }), r(296540);
            var o = r(474848);
            let i = {
                    viewBox: "0 0 21 20",
                    fittedViewBox: "1.64 1.23 18.36 18.38",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M15.288 10.177a4.716 4.716 0 1 1-.002 9.432 4.716 4.716 0 0 1 .002-9.432m1.857 2.857a.55.55 0 0 0-.777 0l-1.082 1.082-1.082-1.082a.55.55 0 0 0-.777.777l1.082 1.083-1.082 1.082a.55.55 0 0 0 .777.777l1.082-1.082 1.082 1.082a.55.55 0 0 0 .777-.777l-1.081-1.082 1.081-1.082a.55.55 0 0 0 0-.778"
                        }), (0, o.jsx)("path", {
                            d: "M11.258 1.236c3.964 0 6.996 3.918 7.093 8.536a5.94 5.94 0 0 0-3.666-.816c-.405-3.829-3-6.62-5.942-6.62-3.203 0-5.998 3.31-5.998 7.664 0 4.355 2.795 7.663 5.998 7.663q.606-.002 1.185-.153c.221.453.5.873.824 1.253H8.743l-.375-.012C4.525 18.509 1.645 14.569 1.645 10c0-4.717 3.068-8.764 7.098-8.764z"
                        }), (0, o.jsx)("path", {
                            d: "M8.833 7.26a2.522 2.522 0 0 1 4.34.022.551.551 0 0 1-.95.555 1.422 1.422 0 0 0-2.446-.012L6.676 13l2.255.366a.55.55 0 0 1-.176 1.085L5.7 13.956a.55.55 0 0 1-.383-.825z"
                        }), (0, o.jsx)("path", {
                            d: "M10.518 8.604A.706.706 0 1 1 10.29 10a.706.706 0 0 1 .227-1.395m-3.718-.602a.706.706 0 1 1-.227 1.393.706.706 0 0 1 .227-1.393M5.146 5.999a2.524 2.524 0 0 1 3.586.23.55.55 0 0 1-.83.72 1.423 1.423 0 0 0-2.023-.13.55.55 0 1 1-.733-.82"
                        })]
                    })
                },
                n = (0, r(104509).wt)("aiCoinOverLimitFill", i, "fill")
        },
        34045: (e, t, r) => {
            r.d(t, {
                ZG: () => d,
                xt: () => l,
                yh: () => s
            });
            var o = r(296540),
                i = r(474848);
            let n = (0, r(109939).YK)({
                    buttonLabel: {
                        id: "agentTopbar.credits.label",
                        defaultMessage: "Credits"
                    },
                    buttonAriaLabel: {
                        id: "agentTopbar.credits.ariaLabel",
                        defaultMessage: "Credits"
                    },
                    previewTitle: {
                        id: "agentTopbar.credits.preview.title",
                        defaultMessage: "Credit usage"
                    },
                    previewDescription: {
                        id: "agentTopbar.credits.preview.description",
                        defaultMessage: "Custom agent credit usage resets at the start of each billing month."
                    },
                    approachingLimitDescription: {
                        id: "agentTopbar.credits.preview.approachingLimitDescription",
                        defaultMessage: "Custom agent is approaching its limit. <link>Request more credits</link> to avoid disruptions."
                    },
                    limitReachedDescription: {
                        id: "agentTopbar.credits.preview.limitReachedDescription",
                        defaultMessage: "Custom agent has reached its monthly limit. <link>Request more credits</link> to restore access."
                    },
                    currentUsageLabel: {
                        id: "agentTopbar.credits.preview.currentUsage",
                        defaultMessage: "Current usage"
                    },
                    currentUsageLabelPublicBeta: {
                        id: "agentTopbar.credits.preview.currentUsagePublicBeta",
                        defaultMessage: "Agent’s monthly usage"
                    },
                    currentUsageTooltip: {
                        id: "agentTopbar.credits.preview.currentUsageTooltip",
                        defaultMessage: "View workspace credit dashboard"
                    },
                    currentUsageUnavailable: {
                        id: "agentTopbar.credits.preview.currentUsageUnavailable",
                        defaultMessage: "Unavailable"
                    },
                    monthlyLimitLabel: {
                        id: "agentTopbar.credits.preview.monthlyLimit",
                        defaultMessage: "Monthly limit"
                    },
                    requestMoreCredits: {
                        id: "agentTopbar.credits.preview.requestMoreCredits",
                        defaultMessage: "Request more credits"
                    },
                    adminSetLimitFooter: {
                        id: "agentTopbar.credits.preview.adminSetLimitFooter",
                        defaultMessage: "Limit set to {limit} credits by workspace admin"
                    },
                    pendingRequest: {
                        id: "agentTopbar.credits.preview.pendingRequest",
                        defaultMessage: "Request for more credits is pending."
                    },
                    monthlyLimitInfoAriaLabel: {
                        id: "agentTopbar.credits.preview.monthlyLimitInfoAriaLabel",
                        defaultMessage: "Monthly limit information"
                    },
                    monthlyLimitTriggerAriaLabel: {
                        id: "agentTopbar.credits.preview.monthlyLimitTriggerAriaLabel",
                        defaultMessage: "Monthly limit, {monthlyLimit}"
                    },
                    monthlyLimitApproachingLimitTooltip: {
                        id: "agentTopbar.credits.preview.monthlyLimitApproachingLimitTooltip",
                        defaultMessage: "Custom agent is approaching its limit. Increase to avoid disruptions."
                    },
                    monthlyLimitReachedTooltip: {
                        id: "agentTopbar.credits.preview.monthlyLimitReachedTooltip",
                        defaultMessage: "Custom agent has reached its monthly limit. Increase to restore access."
                    }
                }),
                a = {
                    button: {
                        position: "relative",
                        gap: 8
                    },
                    previewCard: {
                        width: 320
                    },
                    previewPopup: {
                        width: 320,
                        padding: 12,
                        borderRadius: 12,
                        background: r(632079).Tj.background.elevated,
                        boxShadow: r(632079).Tj.shadow.outline.md
                    },
                    previewDescription: {
                        marginBottom: 6
                    },
                    descriptionInlineLink: {
                        display: "inline",
                        padding: 0,
                        minHeight: "auto",
                        minWidth: 0,
                        verticalAlign: "baseline",
                        fontWeight: r(699422).Wy.semibold,
                        color: r(632079).Tj.blue.text.accentPrimary,
                        textDecoration: "none"
                    },
                    descriptionInlineLinkHovered: {
                        background: "transparent"
                    },
                    descriptionInlineLinkPressed: {
                        background: "transparent"
                    },
                    previewRowButton: {
                        width: "100%",
                        minWidth: 0,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 6,
                        paddingBlock: 0,
                        borderRadius: 6
                    },
                    previewRowButtonHovered: {
                        background: r(632079).Tj.background.tertiaryTranslucent
                    },
                    rowIconContainer: {
                        display: "flex",
                        alignItems: "center",
                        height: 28,
                        paddingInlineEnd: 6,
                        flexShrink: 0
                    },
                    rowDisclosureValue: {
                        paddingInlineStart: 6,
                        paddingInlineEnd: 4,
                        borderRadius: 6,
                        height: 28
                    },
                    rowDisclosureValueHovered: {
                        background: r(632079).Tj.background.tertiaryTranslucent
                    },
                    currentUsageValueContainer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: 28,
                        paddingInlineEnd: 2,
                        borderRadius: 6
                    },
                    monthlyLimitValueContent: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                    },
                    previewFooterDivider: {
                        height: 1,
                        background: r(632079).Tj.border.secondary,
                        marginInline: 8
                    },
                    previewFooterSection: {
                        marginTop: 4,
                        gap: 10
                    },
                    previewFooter: {
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        paddingInline: 6,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderRadius: 6
                    },
                    publicBetaCallout: {
                        position: "relative",
                        width: "100%",
                        padding: 12,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: r(632079).Tj.border.secondary,
                        background: r(632079).Tj.background.elevated
                    },
                    publicBetaCalloutText: {
                        flex: "1 1 auto",
                        minWidth: 0
                    },
                    publicBetaCalloutTitle: {
                        display: "block"
                    },
                    publicBetaLearnMoreButton: {
                        display: "inline",
                        padding: 0,
                        minHeight: "auto",
                        minWidth: 0,
                        verticalAlign: "baseline",
                        textDecoration: "underline",
                        textDecorationSkipInk: "none",
                        color: r(632079).Tj.text.tertiary
                    },
                    publicBetaLearnMoreButtonHovered: {
                        background: "transparent"
                    },
                    publicBetaLearnMoreButtonPressed: {
                        background: "transparent"
                    },
                    publicBetaCalloutDismissButton: {
                        position: "absolute",
                        top: 6,
                        insetInlineEnd: 6,
                        flexShrink: 0
                    },
                    submenuPopup: {
                        width: 236,
                        padding: 4,
                        borderRadius: 10,
                        background: r(632079).Tj.background.elevated,
                        boxShadow: r(632079).Tj.shadow.outline.sm
                    },
                    submenuInputSection: {
                        gap: 4,
                        paddingInline: 8,
                        paddingTop: 4,
                        paddingBottom: 4
                    },
                    submenuInputSectionRequestFlowDisabled: {
                        paddingBottom: 8
                    },
                    submenuDivider: {
                        height: 1,
                        background: r(632079).Tj.border.secondary,
                        marginBlock: 4,
                        marginInline: 8
                    },
                    submenuFooter: {
                        padding: 8
                    },
                    requestCreditsButton: {
                        width: "100%",
                        minWidth: 0,
                        paddingInline: 8,
                        paddingBlock: 0,
                        borderRadius: 6
                    },
                    requestCreditsIconContainer: {
                        display: "flex",
                        alignItems: "center",
                        height: 28,
                        paddingInlineEnd: 6,
                        flexShrink: 0
                    },
                    monthlyLimitTooltip: {
                        width: 240
                    },
                    monthlyLimitInfoIconWrapper: {
                        display: "flex",
                        alignItems: "center",
                        pointerEvents: "auto"
                    },
                    submenuTrailingIcon: {
                        marginInlineStart: 2
                    }
                };

            function l(e) {
                switch (e) {
                    case "default":
                        return {
                            icon: r(681008).f,
                            size: "default"
                        };
                    case "approaching_limit":
                        return {
                            icon: r(810132).m,
                            size: "default",
                            colorPalette: "yellow",
                            colorVariant: "accentPrimary"
                        };
                    case "limit_reached":
                        return {
                            icon: r(18705).T,
                            size: "default",
                            colorPalette: "red",
                            colorVariant: "accentPrimary"
                        };
                    default:
                        return (0, r(722371).HB)(e)
                }
            }

            function s(e) {
                let {
                    creditState: t,
                    isWorkspaceAdmin: s,
                    isCreditEnforcementEnabled: d,
                    isCreditRequestFlowsEnabled: u,
                    onOpen: g,
                    onCurrentUsageClick: p,
                    onMonthlyLimitChange: m,
                    onRequestMoreCreditsClick: h
                } = e, f = (0, r(533992).v3)(), b = (0, r(109939).tz)(), y = (0, o.useMemo)(() => new(r(510969)).A, []), v = l(t.alertLevel), w = (0, r(682985).K8)(() => (e.containerWidth ? ? (0, r(936221).U)(f)) >= 550, [f, e.containerWidth]), k = (0, o.useCallback)(e => (0, i.jsx)(c, {
                    creditState: t,
                    isWorkspaceAdmin: s,
                    isCreditEnforcementEnabled: d,
                    isCreditRequestFlowsEnabled: u,
                    persistPublicBetaCalloutDismissal: !0,
                    onCurrentUsageClick: () => {
                        e.close(), p()
                    },
                    onMonthlyLimitChange: m,
                    onRequestMoreCreditsClick: () => {
                        e.close(), h()
                    }
                }), [t, s, d, u, p, m, h]);
                return (0, i.jsx)(r(656252).A, {
                    popupType: r(656252).z.Popup,
                    buttonPopupStore: y,
                    alignmentToOrigin: "end",
                    originGap: 8,
                    onOpen: g,
                    style: a.previewPopup,
                    trapFocus: !1,
                    content: k,
                    children: e => (0, i.jsx)(r(988022).p, { ...e,
                        iconLeading: v,
                        "aria-label": b.formatMessage(n.buttonAriaLabel),
                        style: a.button,
                        children: w ? (0, i.jsx)(r(109939).sA, { ...n.buttonLabel
                        }) : void 0
                    })
                })
            }

            function d(e) {
                return (0, i.jsx)(c, { ...e
                })
            }

            function c(e) {
                let t, {
                        creditState: l,
                        isWorkspaceAdmin: s,
                        isCreditEnforcementEnabled: d,
                        isCreditRequestFlowsEnabled: c,
                        onCurrentUsageClick: u,
                        onMonthlyLimitChange: m,
                        onRequestMoreCreditsClick: h,
                        persistPublicBetaCalloutDismissal: f = !0,
                        bannerTitleOverride: b
                    } = e,
                    y = (0, r(109939).tz)(),
                    v = (0, r(533992).v3)(),
                    w = (0, r(368891).g)(),
                    [k, C] = (0, o.useState)(!1),
                    x = (0, r(682985).K8)(() => {
                        var e;
                        return !!f && ((null == w || null == (e = w.getSettings()) ? void 0 : e.dismissed_custom_agents_pricing_banner) ? ? !1)
                    }, [f, w]),
                    _ = f ? x : k;
                t = l.isLoading ? (0, i.jsx)(r(517334).k, {
                    size: "sm"
                }) : void 0 === l.currentUsage ? (0, i.jsx)(r(109939).sA, { ...n.currentUsageUnavailable
                }) : y.formatNumber(l.currentUsage);
                let M = c ? n.currentUsageLabel : n.currentUsageLabelPublicBeta,
                    I = function(e) {
                        let {
                            creditState: t,
                            isCreditRequestFlowsEnabled: o,
                            onRequestMoreCreditsClick: l
                        } = e;
                        if (!o) return;
                        let s = e => (0, i.jsx)(r(988022).p, {
                            onClick: l,
                            style: a.descriptionInlineLink,
                            hoveredStyle: a.descriptionInlineLinkHovered,
                            pressedStyle: a.descriptionInlineLinkPressed,
                            children: e
                        });
                        switch (t.alertLevel) {
                            case "approaching_limit":
                                return (0, i.jsx)(r(109939).sA, { ...n.approachingLimitDescription,
                                    values: {
                                        link: s
                                    }
                                });
                            case "limit_reached":
                                return (0, i.jsx)(r(109939).sA, { ...n.limitReachedDescription,
                                    values: {
                                        link: s
                                    }
                                });
                            case "default":
                                return (0, i.jsx)(r(109939).sA, { ...n.previewDescription
                                });
                            default:
                                return (0, r(722371).HB)(t.alertLevel)
                        }
                    }({
                        creditState: l,
                        isCreditRequestFlowsEnabled: c,
                        onRequestMoreCreditsClick: h
                    });
                return (0, i.jsxs)(r(4458).VP, {
                    gap: 10,
                    children: [(0, i.jsxs)(r(4458).VP, {
                        gap: 2,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4,
                        children: [(0, i.jsx)(r(111010).D, {
                            styleKey: "bodyLgSemibold",
                            colorVariant: "primary",
                            children: (0, i.jsx)(r(109939).sA, { ...n.previewTitle
                            })
                        }), I ? (0, i.jsx)(r(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            style: a.previewDescription,
                            children: I
                        }) : void 0]
                    }), (0, i.jsxs)(r(4458).VP, {
                        gap: 4,
                        children: [(0, i.jsx)(r(51831).m, {
                            placement: "right",
                            content: () => (0, i.jsx)(r(109939).sA, { ...n.currentUsageTooltip
                            }),
                            children: e => (0, i.jsx)(r(988022).p, { ...e,
                                onClick: u,
                                hoveredStyle: a.previewRowButtonHovered,
                                style: a.previewRowButton,
                                children: (0, i.jsxs)(r(4458).fI, {
                                    alignItems: "start",
                                    width: "100%",
                                    children: [(0, i.jsx)("div", {
                                        style: a.rowIconContainer,
                                        children: (0, i.jsx)(r(16275).I, {
                                            icon: r(58195).g,
                                            colorVariant: "primary"
                                        })
                                    }), (0, i.jsxs)(r(4458).fI, {
                                        alignItems: "center",
                                        gap: 8,
                                        flexGrow: 1,
                                        minWidth: 0,
                                        children: [(0, i.jsx)(r(111010).D, {
                                            styleKey: "bodyRegular",
                                            colorVariant: "primary",
                                            children: (0, i.jsx)(r(109939).sA, { ...M
                                            })
                                        }), (0, i.jsx)(r(4458).fI, {
                                            justifyContent: "flex-end",
                                            flexGrow: 1,
                                            children: (0, i.jsx)("div", {
                                                style: a.currentUsageValueContainer,
                                                children: (0, i.jsx)(r(111010).D, {
                                                    styleKey: "bodyRegular",
                                                    colorVariant: "secondary",
                                                    children: t
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (0, i.jsxs)(r(4458).fI, {
                            alignItems: "start",
                            width: "100%",
                            paddingInlineStart: 4,
                            paddingInlineEnd: 0,
                            children: [(0, i.jsx)("div", {
                                style: a.rowIconContainer,
                                children: (0, i.jsx)(r(16275).I, {
                                    icon: r(999129).M,
                                    colorVariant: "primary"
                                })
                            }), (0, i.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                flexGrow: 1,
                                minWidth: 0,
                                children: [(0, i.jsx)(r(111010).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "primary",
                                    children: (0, i.jsx)(r(109939).sA, { ...n.monthlyLimitLabel
                                    })
                                }), (0, i.jsx)(r(4458).fI, {
                                    justifyContent: "flex-end",
                                    flexGrow: 1,
                                    children: (0, i.jsx)(p, {
                                        creditState: l,
                                        isWorkspaceAdmin: s,
                                        isCreditEnforcementEnabled: d,
                                        isCreditRequestFlowsEnabled: c,
                                        onMonthlyLimitChange: m,
                                        onRequestMoreCreditsClick: h
                                    })
                                })]
                            })]
                        }), d || _ ? void 0 : (0, i.jsx)(r(4458).VP, {
                            paddingTop: 6,
                            children: (0, i.jsx)(g, {
                                bannerTitleOverride: b,
                                onDismiss: () => {
                                    f && void 0 !== w ? (0, r(272109).a)({
                                        environment: v,
                                        userSettingsStore: w,
                                        dismissed: !0
                                    }) : C(!0)
                                }
                            })
                        }), c && l.hasPendingRequest ? (0, i.jsxs)(r(4458).VP, {
                            style: a.previewFooterSection,
                            children: [(0, i.jsx)("div", {
                                style: a.previewFooterDivider
                            }), (0, i.jsxs)(r(4458).fI, {
                                style: a.previewFooter,
                                children: [(0, i.jsx)(r(16275).I, {
                                    icon: r(560306).S,
                                    size: "sm",
                                    colorVariant: "tertiary"
                                }), (0, i.jsx)(r(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "tertiary",
                                    children: (0, i.jsx)(r(109939).sA, { ...n.pendingRequest
                                    })
                                })]
                            })]
                        }) : void 0]
                    })]
                })
            }

            function u(e) {
                let {
                    ariaLabel: t,
                    onClick: o
                } = e, n = (0, r(107332).P)({
                    variant: "plain",
                    colorVariant: "secondary"
                }), a = (0, r(960253).I)(() => ({
                    button: { ...(0, r(399411).qq)({
                            size: "xs",
                            shape: "pill",
                            hasIconOnly: !0,
                            isButtonGapEnabled: !0
                        }),
                        ...n.resting
                    },
                    hovered: {
                        background: r(632079).Tj.background.secondaryTranslucent
                    },
                    pressed: {
                        background: r(632079).Tj.background.secondaryTranslucent
                    }
                }), [n]);
                return (0, i.jsx)(r(64960).Ay, {
                    ariaLabel: t,
                    onClick: o,
                    style: a.button,
                    hoveredStyle: a.hovered,
                    pressedStyle: a.pressed,
                    children: (0, i.jsx)(r(16275).I, {
                        icon: r(25094).xMarkSmallIcon,
                        size: "xs",
                        colorVariant: "secondary"
                    })
                })
            }

            function g(e) {
                let {
                    onDismiss: t,
                    bannerTitleOverride: o
                } = e, n = (0, r(109939).tz)();
                return (0, i.jsxs)(r(4458).fI, {
                    style: a.publicBetaCallout,
                    alignItems: "flex-start",
                    children: [(0, i.jsxs)("div", {
                        style: a.publicBetaCalloutText,
                        children: [(0, i.jsx)("div", {
                            style: a.publicBetaCalloutTitle,
                            children: (0, i.jsx)(r(111010).D, {
                                styleKey: "captionSemibold",
                                colorVariant: "tertiary",
                                children: o ? ? n.formatMessage(r(890152).P.creditsBannerTitle)
                            })
                        }), (0, i.jsxs)(r(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: [n.formatMessage(r(890152).P.creditsBannerDescription), " ", (0, i.jsx)(r(988022).p, {
                                onClick: () => {
                                    window.open((0, r(442564).x)("guides.customAgentPricing"), "_blank")
                                },
                                size: "xs",
                                style: a.publicBetaLearnMoreButton,
                                hoveredStyle: a.publicBetaLearnMoreButtonHovered,
                                pressedStyle: a.publicBetaLearnMoreButtonPressed,
                                children: (0, i.jsx)(r(109939).sA, {
                                    id: "publicBetaCreditsInfoCallout.learnMore",
                                    defaultMessage: "Learn more"
                                })
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        style: a.publicBetaCalloutDismissButton,
                        children: (0, i.jsx)(u, {
                            onClick: t,
                            ariaLabel: n.formatMessage(r(890152).P.creditsBannerDismiss)
                        })
                    })]
                })
            }

            function p(e) {
                let {
                    creditState: t,
                    isWorkspaceAdmin: l,
                    isCreditEnforcementEnabled: s,
                    isCreditRequestFlowsEnabled: d,
                    onMonthlyLimitChange: c,
                    onRequestMoreCreditsClick: u
                } = e, g = (0, r(109939).tz)(), p = void 0 === t.monthlyLimit ? void 0 : function(e) {
                    switch (e) {
                        case "default":
                            return;
                        case "approaching_limit":
                            return {
                                icon: r(143896).exclamationMarkTriangleFillSmallIcon,
                                size: "sm",
                                colorPalette: "yellow",
                                colorVariant: "accentPrimary"
                            };
                        case "limit_reached":
                            return {
                                icon: r(778765).xMarkCircleFillSmallIcon,
                                size: "sm",
                                colorPalette: "red",
                                colorVariant: "accentPrimary"
                            };
                        default:
                            return (0, r(722371).HB)(e)
                    }
                }(t.alertLevel), h = void 0 === t.monthlyLimit ? g.formatMessage(r(701433).S.setLimit) : g.formatNumber(t.monthlyLimit), f = g.formatMessage(n.monthlyLimitTriggerAriaLabel, {
                    monthlyLimit: h
                }), b = (0, o.useCallback)(e => (0, i.jsx)(m, {
                    alertLevel: t.alertLevel,
                    monthlyLimit: t.monthlyLimit,
                    monthlyLimitByWorkspaceAdmin: t.monthlyLimitByWorkspaceAdmin,
                    isWorkspaceAdmin: l,
                    isCreditEnforcementEnabled: s,
                    isCreditRequestFlowsEnabled: d,
                    onMonthlyLimitChange: c,
                    onRequestMoreCreditsClick: u,
                    onClose: e.close
                }, t.monthlyLimit), [t.alertLevel, t.monthlyLimit, t.monthlyLimitByWorkspaceAdmin, l, s, d, c, u]);
                return (0, i.jsx)(r(656252).A, {
                    popupType: r(656252).z.Popup,
                    placementToOrigin: "right",
                    alignmentToOrigin: "start",
                    originGap: 4,
                    style: a.submenuPopup,
                    trapFocus: !1,
                    content: b,
                    children: e => (0, i.jsx)(r(988022).p, { ...e,
                        "aria-label": f,
                        style: a.rowDisclosureValue,
                        hoveredStyle: a.rowDisclosureValueHovered,
                        children: (0, i.jsxs)(r(4458).fI, {
                            alignItems: "center",
                            style: a.monthlyLimitValueContent,
                            children: [void 0 !== p ? (0, i.jsx)(r(16275).I, { ...p
                            }) : void 0, void 0 === t.monthlyLimit ? (0, i.jsx)(r(111010).D, {
                                styleKey: "bodyRegular",
                                colorPalette: "blue",
                                colorVariant: "accentPrimary",
                                children: h
                            }) : (0, i.jsx)(r(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: h
                            }), (0, i.jsx)(r(16275).I, {
                                icon: r(491469).arrowChevronSingleRightSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            })]
                        })
                    })
                })
            }

            function m(e) {
                let {
                    alertLevel: t,
                    monthlyLimit: o,
                    monthlyLimitByWorkspaceAdmin: l,
                    isWorkspaceAdmin: s,
                    isCreditEnforcementEnabled: d,
                    isCreditRequestFlowsEnabled: c,
                    onMonthlyLimitChange: u,
                    onRequestMoreCreditsClick: g,
                    onClose: p
                } = e, m = (0, r(109939).tz)(), h = function(e) {
                    let {
                        intl: t,
                        alertLevel: o,
                        isCreditEnforcementEnabled: i
                    } = e;
                    if (i) return t.formatMessage(n.previewDescription);
                    switch (o) {
                        case "approaching_limit":
                            return t.formatMessage(n.monthlyLimitApproachingLimitTooltip);
                        case "limit_reached":
                            return t.formatMessage(n.monthlyLimitReachedTooltip);
                        case "default":
                            return t.formatMessage(n.previewDescription);
                        default:
                            return (0, r(722371).HB)(o)
                    }
                }({
                    intl: m,
                    alertLevel: t,
                    isCreditEnforcementEnabled: d
                }), f = void 0 !== l && !s;
                return (0, i.jsxs)(r(4458).VP, {
                    children: [(0, i.jsxs)(r(4458).fI, {
                        alignItems: "center",
                        gap: 2,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 4,
                        paddingTop: 6,
                        children: [(0, i.jsx)(r(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: (0, i.jsx)(r(109939).sA, { ...n.monthlyLimitLabel
                            })
                        }), (0, i.jsx)(r(51831).m, {
                            content: () => h,
                            style: a.monthlyLimitTooltip,
                            textWrap: !0,
                            children: e => (0, i.jsx)("div", { ...e,
                                style: a.monthlyLimitInfoIconWrapper,
                                children: (0, i.jsx)(r(16275).I, {
                                    icon: r(372181).infoCircleSmallIcon,
                                    size: "xs",
                                    colorVariant: "secondary",
                                    label: m.formatMessage(n.monthlyLimitInfoAriaLabel)
                                })
                            })
                        })]
                    }), (0, i.jsx)(r(4458).VP, {
                        style: { ...a.submenuInputSection,
                            ...!c && a.submenuInputSectionRequestFlowDisabled
                        },
                        children: (0, i.jsx)(r(701433).I, {
                            ariaLabel: m.formatMessage(n.monthlyLimitLabel),
                            initialValue: o,
                            creditLimitByWorkspaceAdmin: l,
                            isWorkspaceAdmin: s,
                            onSave: u,
                            onSaveSuccess: p
                        })
                    }), c ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: a.submenuDivider
                        }), (0, i.jsx)(r(988022).p, {
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            onClick: g,
                            style: a.requestCreditsButton,
                            children: (0, i.jsxs)(r(4458).fI, {
                                alignItems: "center",
                                width: "100%",
                                children: [(0, i.jsx)("div", {
                                    style: a.requestCreditsIconContainer,
                                    children: (0, i.jsx)(r(16275).I, {
                                        icon: r(225206).y,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    })
                                }), (0, i.jsxs)(r(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    flexGrow: 1,
                                    children: [(0, i.jsx)(r(111010).D, {
                                        styleKey: "bodyRegular",
                                        colorVariant: "primary",
                                        children: (0, i.jsx)(r(109939).sA, { ...n.requestMoreCredits
                                        })
                                    }), (0, i.jsx)(r(4458).fI, {
                                        justifyContent: "flex-end",
                                        flexGrow: 1,
                                        children: (0, i.jsx)(r(16275).I, {
                                            icon: r(759706).arrowDiagonalUpRightSmallIcon,
                                            size: "sm",
                                            colorVariant: "primary",
                                            style: a.submenuTrailingIcon
                                        })
                                    })]
                                })]
                            })
                        })]
                    }) : void 0, f ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: a.submenuDivider
                        }), (0, i.jsx)("div", {
                            style: a.submenuFooter,
                            children: (0, i.jsx)(r(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                children: (0, i.jsx)(r(109939).sA, { ...n.adminSetLimitFooter,
                                    values: {
                                        limit: m.formatNumber(l)
                                    }
                                })
                            })
                        })]
                    }) : void 0]
                })
            }
        },
        58195: (e, t, r) => {
            r.d(t, {
                g: () => i
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3.75 3.125c.345 0 .625.28.625.625v6.595l3.017-2.64.097-.07a.626.626 0 0 1 .756.098l3.035 3.037 4.442-4.442.098-.08a.626.626 0 0 1 .866.866l-.08.099-4.883 4.883a.626.626 0 0 1-.884 0L7.774 9.03l-3.399 2.975v2.745c0 .483.392.875.875.875h11l.126.013a.625.625 0 0 1 0 1.224l-.126.013h-11a2.125 2.125 0 0 1-2.125-2.125v-11c0-.345.28-.625.625-.625"
                    })
                },
                i = (0, r(104509).wt)("chartLine", o, "default")
        },
        178718: (e, t, r) => {
            r.d(t, {
                R: () => o
            });
            async function o(e) {
                return e.environment.api.callApi({
                    eventName: "refreshMcpServer",
                    environment: e.environment,
                    data: {
                        moduleId: e.moduleId,
                        spaceId: e.spaceId,
                        workflowId: e.workflowId
                    }
                })
            }
        },
        192883: (e, t, r) => {
            function o(e) {
                let {
                    environment: t,
                    inMemoryRecordCache: o,
                    pointer: i,
                    userId: n,
                    recordWithRole: a,
                    debugSource: l
                } = e;
                (0, r(11266).P)({
                    currentUserId: t.currentUser.id,
                    defaultRecordCache: t.defaultRecordCache,
                    inMemoryRecordCache: o,
                    pointer: i,
                    userId: n,
                    model: r(993189).Bj6.fromValue(i.table, a.value),
                    role: a.role,
                    updatePaths: [
                        []
                    ],
                    debugSource: l
                })
            }
            async function i(e) {
                let t, i, {
                        inMemoryRecordCache: n,
                        pointer: a,
                        userId: l,
                        environment: s,
                        minimumVersion: d,
                        isPendingTransactionForRecord: c
                    } = e,
                    u = r(218744).default.checkGate({
                        gateName: "record_cache_backfill_space_id"
                    }),
                    g = c(a),
                    p = s.defaultRecordCache.persistedRecordCache;
                if (void 0 === l && s.currentUser.id) {
                    var m;
                    let e = null == (m = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : m.pointer;
                    (0, r(104310).u)({
                        event: {
                            eventName: "refresh_and_return_record_on_undefined_userid_while_logged_in",
                            eventProperties: {
                                table: a.table,
                                is_main_editor_current_block_store: void 0 !== e && a.id === e.id && a.table === e.table
                            }
                        }
                    });
                    return
                }
                if (g && p && (0, r(16903).u)(a)) return await p.get({
                    pointer: a,
                    userId: l
                });
                let h = p && (0, r(16903).u)(a) ? p.get({
                    pointer: a,
                    userId: l
                }) : void 0;
                if (h) {
                    let e = await (0, r(975162).nQ)(function(e) {
                        switch (e.device.platform) {
                            case "browser":
                                switch (e.device.os) {
                                    case "mac":
                                        return 172;
                                    case "windows":
                                        return 250;
                                    case "android":
                                        return 0;
                                    case "ios":
                                        return 360;
                                    case "chrome":
                                        return 238;
                                    case "linux":
                                        return 220
                                }
                                return 200;
                            case "electron":
                                return 1 / 0;
                            case "react-native":
                                switch (e.device.os) {
                                    case "android":
                                        return 270;
                                    case "ios":
                                        return 64
                                }
                                return 102
                        }
                    }(s), h);
                    e.timeout || (t = e.result), e.timeout && !r(205885).A.state.online && (t = await h), t && o({
                        environment: s,
                        inMemoryRecordCache: n,
                        pointer: a,
                        userId: l,
                        recordWithRole: t,
                        debugSource: "refreshAndReturnRecord (localResult)"
                    })
                }
                if (!r(205885).A.state.online) return t && r(218744).default.checkGate({
                    gateName: "record_map_logging"
                }) && (0, r(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_local",
                        eventProperties: {}
                    }
                }), t;
                try {
                    let e = n.getEntryWithBackfilledSpaceId({
                            pointer: a,
                            userId: l
                        }, {
                            ignoreAllCaches: !0
                        }),
                        c = e ? e.value : void 0,
                        g = e ? e.pointer : void 0;
                    if (d && null != c && c.value && (null == c ? void 0 : c.value.version) >= d) return r(218744).default.checkGate({
                        gateName: "record_map_logging"
                    }) && (0, r(104310).u)({
                        event: {
                            eventName: "refresh_and_return_record.use_local",
                            eventProperties: {}
                        }
                    }), c;
                    let p = (0, r(722371).O9)(g) ? { ...g
                        } : { ...a
                        },
                        m = null == c ? void 0 : c.value;
                    u && void 0 === p.spaceId && g && ((0, r(433261).RP)(g) || (0, r(433261).kW)(g.table)) && m && "space_id" in m && "string" == typeof m.space_id && (p.spaceId = m.space_id);
                    let f = !1;
                    try {
                        i = await (0, r(130925).e)(s, {
                            userId: l,
                            version: c && c.value && c.value.version ? c.value.version : -1,
                            pointer: p,
                            shouldThrowError: !0
                        })
                    } catch (e) {
                        f = !0
                    }
                    if (i) {
                        (0, r(929984).s)({
                            environment: s,
                            userId: l
                        });
                        let e = r(993189).Bj6.fromValue(a.table, i.value);
                        e && r(209401).t.broadcastRemoteRecordRefresh(a, e), o({
                            environment: s,
                            inMemoryRecordCache: n,
                            pointer: a,
                            userId: l,
                            recordWithRole: i,
                            debugSource: "refreshAndReturnRecord (remoteResult)"
                        })
                    }
                    f && !t && (t = await h) && o({
                        environment: s,
                        inMemoryRecordCache: n,
                        pointer: a,
                        userId: l,
                        recordWithRole: t,
                        debugSource: "refreshAndReturnRecord (localResult)"
                    })
                } catch (e) {
                    console.error(e)
                }
                return r(218744).default.checkGate({
                    gateName: "record_map_logging"
                }) && (i ? (0, r(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_remote",
                        eventProperties: {}
                    }
                }) : t && (0, r(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_local",
                        eventProperties: {}
                    }
                })), i || t
            }
            r.d(t, {
                s: () => i
            })
        },
        193294: (e, t, r) => {
            r.d(t, {
                V0: () => l,
                Zh: () => a,
                lC: () => s
            }), r(16280);
            var o = r(296540),
                i = r(474848);
            let n = o.createContext(void 0);

            function a(e) {
                return (0, i.jsx)(n.Provider, {
                    value: e.value,
                    children: e.children
                })
            }

            function l() {
                let e = o.useContext(n);
                if (!e) throw Error("useChartStore must be used within a ChartContextProvider");
                return e
            }

            function s() {
                return o.useContext(n)
            }
            n.displayName = "ChartContext"
        },
        209401: (e, t, r) => {
            function o(e) {
                return e === r(832375).evP || e === r(832375).SNf
            }
            r.d(t, {
                t: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            class i {
                static containers = new(r(277637)).G(() => new WeakMap);
                static observers = new Set;
                observer;
                renderedPointers = new(r(227318)).d;
                refreshedPointers = new(r(227318)).d;
                isRecording = !1;
                startTime;
                lastChunkTimeoutId;
                abortTimeoutId;
                chunkSource;
                chunkLocalSource;
                static forRootStore(e, t) {
                    let r = this.containers.get(e).get(t);
                    return r || (r = new i(t.pointer, e), this.containers.get(e).set(t, r), this.observers.add(new WeakRef(r))), r
                }
                static broadcastRemoteRecordRefresh(e, t) {
                    for (let r of this.observers) {
                        let o = r.deref();
                        o ? o.onRemoteRecordRefresh(e, t) : this.observers.delete(r)
                    }
                }
                constructor(e, t) {
                    this.rootPointer = e, this.container = t, this.observer = (0, r(137182).j)(`RenderedRecordObserver(${t} ${e.table}:${e.id})`, this)
                }
                didUnregister() {
                    for (let e of (this.isRecording = !1, this.clearTimeouts(), this.renderedPointers = new(r(227318)).d, this.refreshedPointers = new(r(227318)).d, i.observers)) {
                        let t = e.deref();
                        t && t === this && i.observers.delete(e)
                    }
                }
                startRecording({
                    chunkSource: e,
                    chunkLocalSource: t
                }) {
                    this.chunkSource = e, this.chunkLocalSource = t, this.startTime = Date.now(), this.isRecording = !0, this.abortTimeoutId = setTimeout(() => this.observer.unregister(), 6e4)
                }
                onRemoteRecordRefresh(e, t) {
                    this.isRecording && this.startTime && o(e.table) && !r(496282).L3.isEqualIdTable(e, this.rootPointer) && t.getLastEditedTime() < this.startTime && this.refreshedPointers.add(e)
                }
                onLastChunkLoaded() {
                    this.isRecording && (this.clearTimeouts(), this.lastChunkTimeoutId = setTimeout(() => this.stopRecordingAndFlush(), 1e4))
                }
                stopRecordingAndFlush() {
                    this.lastChunkTimeoutId = void 0, this.isRecording = !1;
                    let e = new(r(227318)).d;
                    for (let t of this.refreshedPointers) this.renderedPointers.has(t) && e.add(t);
                    if (this.chunkSource) {
                        let t = {
                            eventName: "page_load_record_stats",
                            eventProperties: {
                                container: this.container,
                                root_table: this.rootPointer.table,
                                root_id: this.rootPointer.id,
                                chunk_source: this.chunkSource,
                                chunk_local_source: this.chunkLocalSource,
                                record_stats: {
                                    rendered_and_refreshed: e.size(),
                                    refreshed: this.refreshedPointers.size(),
                                    rendered: this.renderedPointers.size()
                                }
                            }
                        };
                        (0, r(104310).u)({
                            event: t
                        })
                    }
                    this.observer.unregister()
                }
                clearTimeouts() {
                    this.abortTimeoutId && clearTimeout(this.abortTimeoutId), this.lastChunkTimeoutId && clearTimeout(this.lastChunkTimeoutId)
                }
                maybeAddStore(e) {
                    if (!this.isRecording || !(e && e instanceof r(569574).yZ)) return;
                    let t = e.pointer;
                    o(t.table) && this.renderedPointers.add(t)
                }
                onAutoListenerAdded = (e, t) => {
                    this.maybeAddStore(t)
                };
                onAutoListenerRemoved = () => {}
            }
        },
        214328: (e, t, r) => {
            r.d(t, {
                n: () => o
            }), r(898992), r(354520);

            function o(e, t) {
                return (0, r(682985).K8)(() => {
                    if (!e || e.table === r(581654).U6) return !1;
                    let o = e.getDraftData(),
                        i = e.getPublishedArtifactStore(),
                        n = null == i ? void 0 : i.getData();
                    if (!o || i && !i.isReady() || !n) return !1;
                    let a = (0, r(886883).ap)(o.instructions) ? r(970831).B.createChildStore(e, o.instructions) : void 0;
                    if ((0, r(604789).x)({
                            oldWorkflow: n,
                            newWorkflow: o,
                            oldWorkflowLastEditedTime: null == n ? void 0 : n.publishTime,
                            newWorkflowLastEditedTime: null == a ? void 0 : a.getLastEditedTime()
                        }).edits.filter(e => {
                            switch (t) {
                                case "instructions":
                                    return "instructions_updated" === e.type;
                                case "harness":
                                    return "externalAgentHarness_updated" === e.type;
                                case "model":
                                    return "model_updated" === e.type;
                                case "integrations":
                                    return e.type.startsWith("module_") || "module_permission_added" === e.type || "module_permission_removed" === e.type;
                                case "triggers":
                                    return e.type.startsWith("trigger_");
                                case "scripts":
                                    return e.type.startsWith("script_");
                                case "name":
                                    return "name_updated" === e.type;
                                case "description":
                                    return "description_updated" === e.type;
                                case "conversationStarters":
                                    return "conversationStarters_updated" === e.type;
                                case "experimental":
                                    return "config_overrides_updated" === e.type;
                                case "permissionMode":
                                    return "permissionMode_updated" === e.type;
                                case "safety":
                                    return "trustedUrlGlobs_updated" === e.type;
                                default:
                                    return !1
                            }
                        }).length > 0) return !0;
                    if ("instructions" === t && e.table === r(43296).C && (0, r(886883).ap)(null == o ? void 0 : o.instructions) && (0, r(886883).ap)(null == n ? void 0 : n.instructions) && null != n && n.publishTime) {
                        let t = o.instructions;
                        if (!t.spaceId) return !1;
                        let i = r(970831).B.createChildStore(e, t);
                        if (!i.isDefined()) return !1;
                        let a = i.getModel(),
                            l = null == a ? void 0 : a.getLastEditedTime();
                        if ("number" == typeof l && l > n.publishTime) return !0
                    }
                    return !1
                }, [e, t])
            }
        },
        272109: (e, t, r) => {
            r.d(t, {
                a: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    userSettingsStore: o,
                    dismissed: i
                } = e;
                (0, r(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setDismissCustomAgentsPricingBanner",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                dismissed_custom_agents_pricing_banner: i
                            }
                        })
                    }
                })
            }
        },
        346582: (e, t, r) => {
            r.d(t, {
                b: () => i
            });
            var o = () => r(642157);

            function i(e) {
                let t = (0, r(345776).T)();
                return (0, r(682985).K8)(() => {
                    if (!e) return !1;
                    for (let r of e.getPermissionItems() || [])
                        if ((0, o().Lg)(r) && "none" !== r.role || (0, o().Ds)(r) && "none" !== r.role || (0, o().B2)(r) && "none" !== r.role && (!t || r.user_id !== t)) return !0;
                    return !1
                }, [e, t])
            }
        },
        466113: (e, t, r) => {
            r.d(t, {
                G: () => i
            }), r(296540);
            var o = r(474848);

            function i(e) {
                let {
                    workflowStore: t
                } = e, i = (0, r(682985).K8)(() => t.getRawIcon(), [t]);
                return (0, o.jsx)(r(651790).AgentIcon, {
                    agentIcon: i,
                    workflowStore: t,
                    size: 42
                })
            }
        },
        523288: (e, t, r) => {
            r.d(t, {
                Q: () => o
            });

            function o(e) {
                let {
                    collectionStore: t,
                    blockStore: o
                } = e, i = t ? (0, r(986629).by)(t.getFormat(), t.getSchema(), t.id) : void 0, n = null == i ? void 0 : i.property;
                if (!i || !n) return !1;
                let a = o.getSchema();
                if (!a) return !1;
                let l = a[n];
                return !!l && "relation" === l.type && (0, r(149267).r)({
                    store: o,
                    subitemFormat: i,
                    propertySchema: l,
                    includeNoAccess: !0
                }).length > 0
            }
        },
        674788: (e, t, r) => {
            r.d(t, {
                A: () => i
            }), r(296540);
            var o = r(474848);

            function i(e) {
                return (0, o.jsx)(r(746434).E, {
                    style: e.style,
                    content: (0, o.jsx)(r(109939).sA, {
                        id: "AlphaBadgeComponent.label",
                        defaultMessage: "Alpha"
                    })
                })
            }
        },
        681008: (e, t, r) => {
            r.d(t, {
                f: () => n
            }), r(296540);
            var o = r(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.64 1.23 16.72 17.53",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8.833 7.26a2.522 2.522 0 0 1 4.34.022.551.551 0 0 1-.95.555 1.422 1.422 0 0 0-2.446-.012L6.676 13l2.255.366a.55.55 0 0 1-.176 1.085L5.7 13.956a.55.55 0 0 1-.384-.825z"
                        }), (0, o.jsx)("path", {
                            d: "M10.518 8.605a.705.705 0 1 1-.225 1.393.705.705 0 0 1 .225-1.393m-3.719-.602a.706.706 0 1 1-.227 1.393.706.706 0 0 1 .227-1.393M5.146 5.999a2.524 2.524 0 0 1 3.586.23.55.55 0 0 1-.83.72 1.426 1.426 0 0 0-2.023-.13.55.55 0 1 1-.733-.82"
                        }), (0, o.jsx)("path", {
                            d: "M11.258 1.236c4.03 0 7.097 4.047 7.098 8.764s-3.069 8.762-7.098 8.763H8.743l-.375-.012C4.524 18.509 1.645 14.569 1.645 10c0-4.717 3.068-8.763 7.097-8.764zm-2.516 1.1c-3.202 0-5.998 3.31-5.998 7.664 0 4.355 2.796 7.663 5.998 7.663S14.74 14.355 14.74 10s-2.795-7.664-5.998-7.664m6.846 5.354c.164.74.253 1.516.253 2.31 0 3.134-1.356 5.97-3.446 7.522 2.699-.674 4.86-3.693 4.86-7.522a9.7 9.7 0 0 0-.275-2.31zm-.979-2.622q.396.718.672 1.523h1.35a8 8 0 0 0-.784-1.523zm-2.215-2.591a7.6 7.6 0 0 1 1.499 1.492h1.054c-.74-.738-1.614-1.258-2.553-1.492"
                        })]
                    })
                },
                n = (0, r(104509).wt)("aiCoin", i, "default")
        },
        744160: (e, t, r) => {
            r.d(t, {
                a: () => a
            }), r(16280), r(898992), r(354520), r(581454);
            let o = "Only the user who connected this integration can view or edit trigger settings",
                i = "Only the user who connected this integration can edit its settings",
                n = "Connector modules must run as the current user";
            async function a(e) {
                let {
                    environment: t,
                    workflowStore: a,
                    workflowArtifactStore: l,
                    publish: s = !0
                } = e;
                if (!l.getData()) throw new(r(548161)).nc("Cannot restore workflow version without artifact data", []);
                let d = l.getSpaceId();
                if (!d) throw Error("Cannot restore workflow version without space ID");
                let c = await t.api.callApi({
                    eventName: "restoreCustomAgentVersion",
                    environment: t,
                    data: {
                        workflowId: a.id,
                        spaceId: d,
                        workflowArtifactId: l.id,
                        publish: s
                    }
                });
                if ("failed" === c.type) {
                    let e = c.body && "object" == typeof c.body && "debugMessage" in c.body ? c.body.debugMessage : void 0;
                    if (e === o || e === i || e === n || (null == e ? void 0 : e.includes("Unsaved transactions:")) && (e.includes(o) || e.includes(i) || e.includes(n))) throw new(r(548161)).nc("Integration not owned by user", [e === n ? {
                        type: "connector_run_as_user_required"
                    } : {
                        type: "integration_not_owned_by_user"
                    }]);
                    throw new(r(548161)).nc("Failed to restore workflow version", [])
                }
                await (0, r(192883).s)({
                    environment: t,
                    inMemoryRecordCache: a.inMemoryRecordCache,
                    pointer: a.pointer,
                    userId: void 0,
                    isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                });
                let u = a.getDraftData() ? ? a.getData(),
                    g = ((null == u ? void 0 : u.modules) ? ? []).filter(r(315126).fz);
                g.length > 0 && Promise.allSettled(g.map(e => r(178718).R({
                    environment: t,
                    moduleId: e.id,
                    spaceId: d,
                    workflowId: a.id
                })));
                let {
                    restoredInstructionsPointer: p,
                    workflowArtifactId: m
                } = c.data;
                if (s && !m) throw new(r(548161)).nc("Failed to publish restored version", []);
                return p
            }
        },
        746998: (e, t, r) => {
            r.d(t, {
                ZN: () => a,
                mN: () => i,
                qo: () => d
            });
            let o = (0, r(109939).YK)({
                default: {
                    defaultMessage: "Default",
                    id: "colors.select.lightGray"
                },
                gray: {
                    defaultMessage: "Gray",
                    id: "colors.select.gray"
                },
                brown: {
                    defaultMessage: "Brown",
                    id: "colors.select.brown"
                },
                orange: {
                    defaultMessage: "Orange",
                    id: "colors.select.orange"
                },
                yellow: {
                    defaultMessage: "Yellow",
                    id: "colors.select.yellow"
                },
                green: {
                    defaultMessage: "Green",
                    id: "colors.select.green"
                },
                blue: {
                    defaultMessage: "Blue",
                    id: "colors.select.blue"
                },
                purple: {
                    defaultMessage: "Purple",
                    id: "colors.select.purple"
                },
                pink: {
                    defaultMessage: "Pink",
                    id: "colors.select.pink"
                },
                red: {
                    defaultMessage: "Red",
                    id: "colors.select.red"
                }
            });

            function i(e) {
                let t = o[e] || o.gray;
                return r(962299).A.formatMessage(t)
            }
            let n = (0, r(109939).YK)({
                default_background: {
                    defaultMessage: "Default",
                    id: "colors.blockColor.lightGray"
                },
                gray_background: {
                    defaultMessage: "Gray",
                    id: "colors.blockColor.gray"
                },
                brown_background: {
                    defaultMessage: "Brown",
                    id: "colors.blockColor.brown"
                },
                orange_background: {
                    defaultMessage: "Orange",
                    id: "colors.blockColor.orange"
                },
                yellow_background: {
                    defaultMessage: "Yellow",
                    id: "colors.blockColor.yellow"
                },
                teal_background: {
                    defaultMessage: "Green",
                    id: "colors.blockColor.green"
                },
                blue_background: {
                    defaultMessage: "Blue",
                    id: "colors.blockColor.blue"
                },
                purple_background: {
                    defaultMessage: "Purple",
                    id: "colors.blockColor.purple"
                },
                pink_background: {
                    defaultMessage: "Pink",
                    id: "colors.blockColor.pink"
                },
                red_background: {
                    defaultMessage: "Red",
                    id: "colors.blockColor.red"
                }
            });

            function a(e) {
                let t = n[e];
                return r(962299).A.formatMessage(t)
            }
            let l = (0, r(109939).YK)({
                    foregroundColorDefault: {
                        id: "action.foregroundColor.default.name",
                        defaultMessage: "Default text"
                    },
                    foregroundColorGray: {
                        id: "action.foregroundColor.gray.name",
                        defaultMessage: "Gray text"
                    },
                    foregroundColorBrown: {
                        id: "action.foregroundColor.brown.name",
                        defaultMessage: "Brown text"
                    },
                    foregroundColorOrange: {
                        id: "action.foregroundColor.orange.name",
                        defaultMessage: "Orange text"
                    },
                    foregroundColorYellow: {
                        id: "action.foregroundColor.yellow.name",
                        defaultMessage: "Yellow text"
                    },
                    foregroundColorGreen: {
                        id: "action.foregroundColor.green.name",
                        defaultMessage: "Green text"
                    },
                    foregroundColorBlue: {
                        id: "action.foregroundColor.blue.name",
                        defaultMessage: "Blue text"
                    },
                    foregroundColorPurple: {
                        id: "action.foregroundColor.purple.name",
                        defaultMessage: "Purple text"
                    },
                    foregroundColorPink: {
                        id: "action.foregroundColor.pink.name",
                        defaultMessage: "Pink text"
                    },
                    foregroundColorRed: {
                        id: "action.foregroundColor.red.name",
                        defaultMessage: "Red text"
                    },
                    backgroundColorGray: {
                        id: "action.backgroundColor.gray.name",
                        defaultMessage: "Gray background"
                    },
                    backgroundColorBrown: {
                        id: "action.backgroundColor.brown.name",
                        defaultMessage: "Brown background"
                    },
                    backgroundColorOrange: {
                        id: "action.backgroundColor.orange.name",
                        defaultMessage: "Orange background"
                    },
                    backgroundColorYellow: {
                        id: "action.backgroundColor.yellow.name",
                        defaultMessage: "Yellow background"
                    },
                    backgroundColorGreen: {
                        id: "action.backgroundColor.green.name",
                        defaultMessage: "Green background"
                    },
                    backgroundColorBlue: {
                        id: "action.backgroundColor.blue.name",
                        defaultMessage: "Blue background"
                    },
                    backgroundColorPurple: {
                        id: "action.backgroundColor.purple.name",
                        defaultMessage: "Purple background"
                    },
                    backgroundColorPink: {
                        id: "action.backgroundColor.pink.name",
                        defaultMessage: "Pink background"
                    },
                    backgroundColorRed: {
                        id: "action.backgroundColor.red.name",
                        defaultMessage: "Red background"
                    },
                    backgroundColorDefault: {
                        id: "action.backgroundColor.default.name",
                        defaultMessage: "Default background"
                    }
                }),
                s = {
                    default: { ...l.foregroundColorDefault
                    },
                    gray: { ...l.foregroundColorGray
                    },
                    brown: { ...l.foregroundColorBrown
                    },
                    orange: { ...l.foregroundColorOrange
                    },
                    yellow: { ...l.foregroundColorYellow
                    },
                    teal: { ...l.foregroundColorGreen
                    },
                    blue: { ...l.foregroundColorBlue
                    },
                    purple: { ...l.foregroundColorPurple
                    },
                    pink: { ...l.foregroundColorPink
                    },
                    red: { ...l.foregroundColorRed
                    },
                    default_background: { ...l.backgroundColorDefault
                    },
                    gray_background: { ...l.backgroundColorGray
                    },
                    brown_background: { ...l.backgroundColorBrown
                    },
                    orange_background: { ...l.backgroundColorOrange
                    },
                    yellow_background: { ...l.backgroundColorYellow
                    },
                    teal_background: { ...l.backgroundColorGreen
                    },
                    blue_background: { ...l.backgroundColorBlue
                    },
                    purple_background: { ...l.backgroundColorPurple
                    },
                    pink_background: { ...l.backgroundColorPink
                    },
                    red_background: { ...l.backgroundColorRed
                    }
                };

            function d(e) {
                return s[e]
            }
        },
        810132: (e, t, r) => {
            r.d(t, {
                m: () => n
            }), r(296540);
            var o = r(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.64 1.23 18.25 18.71",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M13.439 11.043a1.313 1.313 0 0 1 2.273 0l3.998 6.926a1.313 1.313 0 0 1-1.137 1.968h-7.997A1.313 1.313 0 0 1 9.44 17.97zm1.136 6.06a.686.686 0 1 0 0 1.371.686.686 0 0 0 0-1.372m0-3.964a.55.55 0 0 0-.55.55v2.056a.55.55 0 1 0 1.1 0V13.69a.55.55 0 0 0-.55-.55"
                        }), (0, o.jsx)("path", {
                            d: "M11.258 1.236c4.03 0 7.097 4.047 7.098 8.764 0 .846-.102 1.67-.287 2.452l-1.199-2.078-.1-.16a2.62 2.62 0 0 0-2.077-1.161c-.37-3.879-2.985-6.717-5.95-6.717-3.203 0-5.999 3.31-5.999 7.664 0 4.071 2.444 7.227 5.379 7.621-.148.357-.21.725-.198 1.083-3.62-.504-6.28-4.312-6.28-8.704 0-4.717 3.068-8.763 7.097-8.764z"
                        }), (0, o.jsx)("path", {
                            d: "M8.833 7.26a2.522 2.522 0 0 1 4.34.022.551.551 0 0 1-.95.555 1.422 1.422 0 0 0-2.446-.012L6.676 13l2.255.366a.55.55 0 0 1-.176 1.085L5.7 13.956a.55.55 0 0 1-.384-.825z"
                        }), (0, o.jsx)("path", {
                            d: "M10.518 8.604A.706.706 0 1 1 10.29 10a.706.706 0 0 1 .227-1.395m-3.718-.602a.706.706 0 1 1-.227 1.393.706.706 0 0 1 .227-1.393M5.146 5.999a2.524 2.524 0 0 1 3.586.23.55.55 0 0 1-.83.72 1.426 1.426 0 0 0-2.023-.13.55.55 0 1 1-.733-.82"
                        })]
                    })
                },
                n = (0, r(104509).wt)("aiCoinAlertFill", i, "fill")
        },
        859592: (e, t, r) => {
            r.d(t, {
                h: () => i
            });
            var o = r(296540);

            function i(e) {
                let {
                    workflowStore: t,
                    spaceId: i
                } = e, n = (0, r(533992).v3)(), a = (0, r(682985).K8)(() => r(218744).default.getConfig({
                    configName: "custom_agent_sub_features"
                }).agent_credit_usage_display ? ? !1, []), l = (0, r(682985).K8)(() => (0, r(909212).Ks)(), []), s = (0, r(184444).on)(i) ? ? !1, d = (0, r(682985).K8)(() => {
                    var e;
                    return (null == t || null == (e = t.getSpaceStore()) ? void 0 : e.canAdmin()) ? ? !1
                }, [t]), c = (0, r(83208).X)("notion_ai_settings_tab_v2"), {
                    creditUsage: u,
                    isLoading: g,
                    refetch: p
                } = function(e) {
                    var t;
                    let {
                        workflowId: o,
                        spaceId: i
                    } = e, n = (0, r(533992).v3)(), [a, l] = (0, r(97668).Yb)(async () => {
                        if (o && i) try {
                            return await (0, r(82861).YM)({
                                environment: n,
                                spaceId: i,
                                workflowId: o
                            })
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "useWorkflowCreditUsage",
                                type: "fetchWorkflowCreditUsageFailed",
                                data: {
                                    miscDataToConvertToString: {
                                        error: e,
                                        workflowId: o,
                                        spaceId: i,
                                        userId: n.currentUser.id
                                    }
                                }
                            });
                            return
                        }
                    }, [n, o, i], {
                        debugName: "useWorkflowCreditUsage"
                    });
                    return {
                        creditUsage: null == (t = a.value) ? void 0 : t.creditUsage,
                        isLoading: "pending" === a.status || "idle" === a.status,
                        refetch: l
                    }
                }({
                    workflowId: null == t ? void 0 : t.id,
                    spaceId: i
                }), m = (0, r(682985).K8)(() => {
                    var e;
                    let o = (null == t ? void 0 : t.getDraftData()) ? ? (null == t ? void 0 : t.getData()),
                        i = null == o ? void 0 : o.usage_limit_by_workspace_admin,
                        n = null != o && o.status && "paused" !== o.status || null == o || null == (e = o.paused_reason) ? void 0 : e.reason;
                    return {
                        monthlyLimit: (0, r(609686).l)({
                            workflowData: o
                        }),
                        monthlyLimitByWorkspaceAdmin: (null == i ? void 0 : i.type) === "creditLimit" ? i.maximum : void 0,
                        pausedReason: n
                    }
                }, [t]), h = (0, o.useMemo)(() => {
                    let {
                        monthlyLimit: e,
                        monthlyLimitByWorkspaceAdmin: t,
                        pausedReason: r
                    } = m, o = "creditLimit" === r || void 0 !== u && void 0 !== e && u >= e, i = !o && void 0 !== u && void 0 !== e && u >= .8 * e, n = "default";
                    return o ? n = "limit_reached" : i && (n = "approaching_limit"), {
                        alertLevel: n,
                        hasPendingRequest: !1,
                        currentUsage: u,
                        isLoading: g,
                        monthlyLimit: e,
                        monthlyLimitByWorkspaceAdmin: t
                    }
                }, [m, u, g]), f = (0, o.useCallback)(() => {
                    c && r(599754).Ow({
                        currentPage: "ai",
                        tab: "credit_utilization",
                        openedFrom: "topbar"
                    })
                }, [c]), b = (0, o.useCallback)(e => !!t && (0, r(777206).b)({
                    creditLimit: e,
                    currentCreditUsage: h.currentUsage,
                    environment: n,
                    workflowStore: t
                }), [h.currentUsage, n, t]);
                return {
                    isCreditUsageDisplayEnabled: a,
                    isCreditRequestFlowsEnabled: l,
                    isCreditEnforcementEnabled: s,
                    isWorkspaceAdmin: d,
                    agentCreditState: h,
                    refetchCreditUsage: p,
                    handleMonthlyLimitChange: b,
                    openAICreditsDashboard: f
                }
            }
        },
        905859: (e, t, r) => {
            r.d(t, {
                g: () => n
            });
            var o = r(296540),
                i = r(474848);

            function n(e) {
                let {
                    workflowStore: t,
                    buttonPopupParent: n,
                    isPhone: a,
                    showModelCardPopover: l
                } = e, s = (0, r(533992).v3)(), d = (0, r(83208).X)("ai_model_card_popover"), {
                    threadStore: c,
                    workflowValue: u
                } = (0, r(867587).N)(t, !0), g = (0, r(682985).K8)(() => t.getSpaceStore(), [t]), p = (0, r(973567).N)({
                    threadStore: c,
                    spaceId: null == g ? void 0 : g.id
                }), m = (0, o.useMemo)(() => {
                    var e;
                    return {
                        type: "workflow",
                        model: null == (e = u.model) ? void 0 : e.type,
                        modelFromUser: void 0 !== u.model
                    }
                }, [u.model]), h = (0, r(682985).uB)(void 0, r(57168).ClientAIChatStore), f = (0, r(758360).K7)("custom_agent"), b = (0, o.useCallback)(e => {
                    if (n.close(), "reset" === e || t.table === r(832375).U6v) return;
                    let o = "workflow" === e.type && e.model ? {
                        type: e.model
                    } : void 0;
                    (0, r(599231).FY)({
                        model: (null == o ? void 0 : o.type) ? ? "auto",
                        workflowId: t.id,
                        isDatabaseAgent: (0, r(445568).isWorkflowDataDatabaseAgent)(u)
                    }),
                    function(e) {
                        let {
                            model: t,
                            workflowStore: o
                        } = e;
                        (0, r(377796).createAndCommit)({
                            userAction: "WorkflowActions.saveModel",
                            environment: e.environment,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: o.pointer.spaceId
                            },
                            perform: e => {
                                (0, r(421439).y4)({
                                    store: o,
                                    operation: r(861988).iS({
                                        pointer: o.pointer,
                                        model: t
                                    }),
                                    transaction: e
                                })
                            }
                        })
                    }({
                        environment: s,
                        workflowStore: t,
                        threadStore: c,
                        model: o
                    })
                }, [n, s, c, t, u]), y = (0, r(445568).isWorkflowDataDatabaseAgent)(u), v = (0, r(573271).w)({
                    aiChatFeatureController: f,
                    buttonPopupParent: n,
                    clientStore: h,
                    config: m,
                    environment: s,
                    inputMode: "ready",
                    threadMode: "existingThread",
                    onChangeNextConfig: b,
                    spaceStore: g,
                    inferenceInfo: p,
                    showModelCardPopover: l && !a && d,
                    isDatabaseAgent: y
                });
                return (0, i.jsx)(r(813152).J, {
                    buttonPopupParent: n,
                    extensionPopupButtonEvents: {},
                    sections: v,
                    menuType: a ? r(649476).gu.Modal : r(649476).gu.Popup
                })
            }
        },
        910839: (e, t, r) => {
            let o;
            r.d(t, {
                O: () => l
            });
            var i = r(296540),
                n = r(474848);
            let a = "body";

            function l({
                onSearchQueryChange: e,
                debounceMs: t = 500,
                onSearchInputOpened: s,
                placeholderText: d,
                buttonSize: c = "md",
                isDisabled: u
            }) {
                let g = (0, r(533992).v3)(),
                    p = (0, r(109939).tz)(),
                    [m, h] = (0, i.useState)(!1),
                    [f, b] = (0, i.useState)(""),
                    y = d || p.formatMessage({
                        id: "searchPlaceholder",
                        defaultMessage: "Type to search..."
                    }),
                    v = (0, i.useMemo)(() => ({
                        fontSize: `${r(649316).U[a].fontSize}px`,
                        fontFamily: r(699422).Tf.sans
                    }), []),
                    w = (0, i.useMemo)(() => Math.max(function(e, t = {}) {
                        let r, i, n, a, l, s = o || ("u" > typeof document ? o = document.createElement("canvas").getContext("2d") ? ? void 0 : void 0);
                        if (!s) return;
                        r = t.fontStyle ? ? "normal", i = t.fontVariant ? ? "normal", n = t.fontWeight ? ? "normal", a = t.fontSize ? ? "16px", l = t.fontFamily ? ? "sans-serif", s.font = `${r} ${i} ${n} ${a} ${l}`;
                        let d = s.measureText(e).width;
                        if (t.letterSpacing) {
                            let r = "number" == typeof t.letterSpacing ? t.letterSpacing : parseFloat(t.letterSpacing);
                            !Number.isNaN(r) && e.length > 1 && (d += r * (e.length - 1))
                        }
                        return d
                    }(y, v) ? ? 0, 120), [y, v]),
                    k = (0, i.useMemo)(() => (0, r(381453).sg)(e, t), [t, e]),
                    C = (0, i.useCallback)(e => {
                        b(e.currentTarget.value), k(e.currentTarget.value)
                    }, [k]);
                (0, i.useEffect)(() => () => k.cancel(), [k]);
                let x = (0, i.useCallback)(() => {
                    k.cancel(), h(!1), b(""), e("")
                }, [k, e]);
                return (0, n.jsxs)(r(4458).fI, {
                    gap: 2,
                    alignItems: "center",
                    children: [(0, n.jsx)(r(374533).A, {
                        ariaLabel: y,
                        icon: r(330274).magnifyingGlassIcon,
                        size: c,
                        colorVariant: "accentPrimary",
                        onClick: () => {
                            h(!0), null == s || s()
                        },
                        disabled: m || u,
                        disabledFeedback: u
                    }), (0, n.jsx)(r(654979).A, {
                        visible: m,
                        animate: {
                            width: w,
                            opacity: 1
                        },
                        initial: {
                            width: 0,
                            opacity: 0
                        },
                        exit: {
                            width: 0,
                            opacity: 0
                        },
                        children: (0, n.jsx)(r(111010).D, {
                            styleKey: a,
                            children: (0, n.jsx)(r(36481).p, {
                                format: "transparent",
                                value: f,
                                onChange: C,
                                placeholder: y,
                                focusInitial: m,
                                showClearButton: !0,
                                onCancel: x,
                                onClearButtonClick: x,
                                onKeyDown: t => {
                                    (0, r(745308).A)(g, t, "esc") && (t.stopPropagation(), x()), (0, r(745308).A)(g, t, "enter") && (k.cancel(), b(t.currentTarget.value), e(t.currentTarget.value))
                                },
                                onBlur: e => {
                                    e.currentTarget.value || x()
                                }
                            })
                        })
                    })]
                })
            }
        }
    }
]);