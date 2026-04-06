"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [11235, 44539, 71677], {
        2009: (e, t, n) => {
            n.d(t, {
                w: () => r
            });
            var i = () => n(546605);
            class l extends i().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let r = new l
        },
        69496: (e, t, n) => {
            n.d(t, {
                n: () => d
            }), n(296540), n(581454);
            var i = n(474848);
            let l = {
                display: "inline"
            };

            function r({
                onAccept: e,
                trialPlan: t,
                previewMode: a,
                openedFrom: d
            }) {
                let c = (0, n(109939).tz)(),
                    u = (0, n(533992).v3)(),
                    p = (0, n(493011).A)();
                (0, n(383953).w)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "timed_trial_cancel_modal_viewed",
                            eventProperties: {
                                from: d
                            }
                        }
                    })
                });
                let h = (0, n(682985).K8)(() => {
                    let e = (0, n(72017).j)({
                        highlightStyle: {
                            color: n(632079).Tj.red.text.accentPrimary
                        },
                        intl: c
                    })[t].free;
                    return null == e ? void 0 : e.map(e => ({
                        icon: e.icon,
                        beforeMessage: e.beforeDowngrade,
                        message: e.afterDowngrade ? (0, i.jsx)(n(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "primary",
                            style: l,
                            children: e.afterDowngrade
                        }) : null
                    }))
                }, [c, t]);
                return a ? (0, i.jsx)(s, {
                    onAccept: e,
                    trialPlan: t,
                    children: (0, i.jsx)(o, {
                        restrictionList: h
                    })
                }) : (0, i.jsx)(n(314084).t, {
                    header: (0, i.jsx)(n(582471).Y, {
                        iconAndTitle: (0, i.jsx)(n(209590).Z, {
                            iconGroup: n(276160)._,
                            iconColorPalette: "red",
                            iconColorVariant: "accentPrimary",
                            title: (0, i.jsx)(n(109939).sA, {
                                id: "cancelTrialModal.title",
                                defaultMessage: "Cancel free Plus trial?"
                            })
                        })
                    }),
                    footer: (0, i.jsx)(n(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "destructive",
                            label: (0, i.jsx)(n(109939).sA, {
                                id: "cancelTrialModal.primaryAction",
                                defaultMessage: "Yes, cancel trial"
                            }),
                            onClick: () => {
                                (0, n(104310).u)({
                                    event: {
                                        eventName: "timed_trial_cancel_modal_submit",
                                        eventProperties: {}
                                    }
                                }), (0, n(760213).V)(u, p), e()
                            }
                        }],
                        secondaryButtons: [{
                            buttonType: "dismiss"
                        }]
                    }),
                    children: (0, i.jsx)(o, {
                        restrictionList: h
                    })
                })
            }

            function o({
                restrictionList: e
            }) {
                return e && (0, n(722371).EI)(e) ? (0, i.jsx)(n(800020).h, {
                    title: (0, i.jsx)(n(109939).sA, {
                        id: "cancelTrialModal.featureList.title",
                        defaultMessage: "The free plan has limited use of Notion"
                    }),
                    tint: "red",
                    features: e
                }) : null
            }
            let a = {
                maxWidth: 250
            };

            function s({
                onAccept: e,
                trialPlan: t,
                children: l
            }) {
                let r = (0, n(109939).tz)();
                return (0, i.jsx)(n(314084).t, {
                    header: (0, i.jsx)(n(582471).Y, {
                        iconAndTitle: (0, i.jsx)("div", {
                            style: a,
                            children: (0, i.jsx)(n(209590).Z, {
                                iconGroup: n(687245).r,
                                iconColorPalette: "red",
                                iconColorVariant: "accentPrimary",
                                title: (0, i.jsx)(n(109939).sA, {
                                    id: "previewMode.title",
                                    defaultMessage: "Here’s what you lose at the end of your free {trialPlan} trial",
                                    values: {
                                        trialPlan: (0, n(262166).u2)({
                                            product: t,
                                            intl: r
                                        })
                                    }
                                })
                            })
                        })
                    }),
                    footer: (0, i.jsx)(n(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "destructive",
                            label: (0, i.jsx)(n(109939).sA, {
                                id: "previewMode.primaryAction",
                                defaultMessage: "Got it"
                            }),
                            onClick: e
                        }],
                        secondaryButtons: [{
                            buttonType: "dismiss",
                            label: (0, i.jsx)(n(109939).sA, {
                                id: "previewMode.secondaryAction",
                                defaultMessage: "Go back"
                            })
                        }]
                    }),
                    children: l
                })
            }
            async function d(e) {
                return await n(280996).T.showAsyncModal(t => (0, i.jsx)(n(833503).s, {
                    isOpen: t.isOpen,
                    onDismiss: () => {
                        (0, n(104310).u)({
                            event: {
                                eventName: "timed_trial_cancel_modal_dismissed",
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
                    children: () => (0, i.jsx)(r, {
                        onAccept: () => t.resolve("accepted"),
                        ...e
                    })
                }))
            }
        },
        92915: (e, t, n) => {
            n.r(t), n.d(t, {
                figmaIcon: () => r,
                iconDefinition: () => l
            }), n(296540);
            var i = n(474848);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4 1 12 18",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("g", {
                            clipPath: "url(#clip0_16020_305)",
                            children: [(0, i.jsx)("path", {
                                fill: "#1ABCFE",
                                d: "M10 10a2.97 2.97 0 1 1 5.94 0A2.97 2.97 0 0 1 10 10"
                            }), (0, i.jsx)("path", {
                                fill: "#0ACF83",
                                d: "M4.061 15.939a2.97 2.97 0 0 1 2.97-2.97H10v2.97a2.97 2.97 0 1 1-5.94 0"
                            }), (0, i.jsx)("path", {
                                fill: "#FF7262",
                                d: "M10 1.092V7.03h2.97a2.97 2.97 0 1 0 0-5.94z"
                            }), (0, i.jsx)("path", {
                                fill: "#F24E1E",
                                d: "M4.061 4.061a2.97 2.97 0 0 0 2.97 2.97H10V1.09H7.03a2.97 2.97 0 0 0-2.97 2.97"
                            }), (0, i.jsx)("path", {
                                fill: "#A259FF",
                                d: "M4.061 10a2.97 2.97 0 0 0 2.97 2.97H10V7.03H7.03A2.97 2.97 0 0 0 4.06 10"
                            })]
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_16020_305",
                                children: (0, i.jsx)("path", {
                                    fill: "#fff",
                                    d: "M4 1h12v18H4z"
                                })
                            })
                        })]
                    })
                },
                r = (0, n(104509).wt)("figma", l, "default")
        },
        124108: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            var i = n(296540),
                l = n(474848);
            let r = {
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
                    destructiveButtonDefault: { ...r,
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
                    primaryButtonDefault: { ...r,
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
                    secondaryButtonDefault: { ...r,
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...r,
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
                    outlineButtonDefault: { ...r,
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
                    blackButtonDefault: { ...r,
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

            function a(e) {
                let {
                    buttonInfo: t,
                    ...r
                } = e, a = (0, i.useContext)(n(19187).e), s = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, i.useMemo)(() => ({
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
                    let e = t.label ? ? (0, l.jsx)(n(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        i = t.combinedStyles ? ? d.dismiss;
                    return (0, l.jsx)(n(64960).Ay, {
                        style: null == i ? void 0 : i.default,
                        hoveredStyle: null == i ? void 0 : i.hovered,
                        pressedStyle: null == i ? void 0 : i.pressed,
                        onClick: a,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        i = t.combinedStyles ? ? d[e];
                    return (0, l.jsxs)(n(64960).Ay, {
                        style: { ...null == i ? void 0 : i.default,
                            ...s
                        },
                        hoveredStyle: null == i ? void 0 : i.hovered,
                        pressedStyle: null == i ? void 0 : i.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...r,
                        children: [t.isLoading ? (0, l.jsx)(n(517334).k, {
                            style: o.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        139449: (e, t, n) => {
            n.d(t, {
                v: () => i
            });
            let i = n(546605).Store.createValue({
                open: !1
            }, {
                name: "TrialInfoModalStore"
            })
        },
        209590: (e, t, n) => {
            n.d(t, {
                Z: () => o
            }), n(296540);
            var i = n(474848);
            let l = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                r = {
                    position: "relative"
                };

            function o(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: o,
                    iconColorVariant: a = "secondary",
                    title: s,
                    variantName: d = "default"
                } = e;
                return t || s ? (0, i.jsxs)(n(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...r
                    },
                    children: [t ? (0, i.jsx)(n(708966).Q, {
                        iconGroup: t,
                        colorPalette: o,
                        colorVariant: a,
                        variantName: d,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, s ? (0, i.jsx)(n(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: l,
                        children: s
                    }) : null]
                }) : null
            }
        },
        280996: (e, t, n) => {
            n.d(t, {
                b: () => r,
                T: () => o()
            }), n(581454);
            var i = n(296540),
                l = n(474848);
            let r = i.memo(function(e) {
                let {
                    store: t = n(2009).w
                } = e, r = (0, n(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, l.jsx)(l.Fragment, {
                    children: r.map(e => {
                        let {
                            id: t,
                            internalRenderModal: n,
                            isOpen: r
                        } = e, o = n(r);
                        return (0, l.jsx)(i.Fragment, {
                            children: o
                        }, t)
                    })
                })
            });
            var o = () => n(796123)
        },
        314084: (e, t, n) => {
            n.d(t, {
                t: () => r
            }), n(296540);
            var i = n(474848);
            let l = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function r(e) {
                let {
                    children: t,
                    footer: r,
                    header: o,
                    showDismissButton: a = !0,
                    sizeRange: s,
                    gap: d = 24
                } = e;
                return (0, i.jsxs)(n(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == s ? void 0 : s.minHeight,
                    maxHeight: null == s ? void 0 : s.maxHeight,
                    minWidth: null == s ? void 0 : s.minWidth,
                    maxWidth: null == s ? void 0 : s.maxWidth,
                    gap: d,
                    style: l,
                    className: "autolayout-fill-width",
                    children: [(0, i.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: o
                    }), t ? (0, i.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, i.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, r ? (0, i.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: r
                    }) : null, a ? (0, i.jsx)(n(226512).R, {}) : null]
                })
            }
        },
        349993: (e, t, n) => {
            n.r(t), n.d(t, {
                openBusinessTrialExplorePlanModal: () => i().iG,
                openBusinessTrialLossAversionModal: () => i().Ky,
                showTimedTrialCancelModal: () => r().n,
                showTimedTrialInfoModal: () => l().fR
            });
            var i = () => n(821587),
                l = () => n(396076),
                r = () => n(69496)
        },
        396076: (e, t, n) => {
            function i(e) {
                n(139449).v.setState({
                    open: !0,
                    ...e
                })
            }

            function l() {
                n(139449).v.setState({
                    open: !1
                })
            }

            function r(e) {
                n(629108).E.setState({
                    open: !0,
                    ...e
                })
            }
            n.d(t, {
                W$: () => r,
                fR: () => i,
                iv: () => l
            })
        },
        527427: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => l,
                zendeskIcon: () => r
            }), n(296540);
            var i = n(474848);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 3.14 18.01 13.71",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("g", {
                            className: "logo-light-mode",
                            children: (0, i.jsx)("path", {
                                fill: "#000",
                                d: "M9.298 6.778v10.073H1zm0-3.633a4.16 4.16 0 0 1-4.17 4.17C2.817 7.315 1 5.457 1 3.145zm1.363 13.665a4.16 4.16 0 0 1 4.17-4.17A4.16 4.16 0 0 1 19 16.81zm0-3.592V3.145H19z"
                            })
                        }), (0, i.jsx)("g", {
                            className: "logo-dark-mode",
                            children: (0, i.jsx)("path", {
                                fill: "#fff",
                                d: "M9.298 6.778v10.073H1zm0-3.633a4.16 4.16 0 0 1-4.17 4.17C2.817 7.315 1 5.457 1 3.145zm1.363 13.665a4.16 4.16 0 0 1 4.17-4.17A4.16 4.16 0 0 1 19 16.81zm0-3.592V3.145H19z"
                            })
                        })]
                    })
                },
                r = (0, n(104509).wt)("zendesk", l, "default")
        },
        582471: (e, t, n) => {
            n.d(t, {
                Y: () => o
            }), n(296540);
            var i = n(474848);
            let l = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                r = {
                    position: "relative"
                };

            function o(e) {
                let {
                    iconAndTitle: t,
                    description: o
                } = e;
                return t || o ? (0, i.jsxs)(n(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: r,
                    children: [t, o ? (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: l,
                        children: o
                    }) : null]
                }) : null
            }
        },
        591637: (e, t, n) => {
            n.d(t, {
                a: () => r
            }), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);
            let l = {
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

            function r(e) {
                var t;
                let {
                    caption: r,
                    layout: o,
                    sectionGap: a,
                    secondaryButtonTooltip: s
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !r) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === o ? (0, i.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: a ? ? 8,
                        ...l.positionRelative
                    },
                    children: [(0, i.jsxs)(n(4458).VP, {
                        style: {
                            gap: 7,
                            ...l.positionRelative
                        },
                        children: [d.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t)), r ? (0, i.jsx)("div", {
                            style: l.caption,
                            children: r
                        }) : null]
                    }), u ? s ? (0, i.jsx)(n(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: l.style0,
                        placement: "bottom",
                        children: e => (0, i.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, i.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, i.jsx)("div", {
                        children: c.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === o ? (0, i.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: a ? ? 8,
                        ...l.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, i.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, i.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === o ? (0, i.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? s ? (0, i.jsx)(n(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: l.style1,
                        placement: "bottom",
                        children: e => (0, i.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, i.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, i.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, i.jsx)("div", {
                        children: d.map((e, t) => (0, i.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, n(722371).HB)(o)
            }
        },
        603651: (e, t, n) => {
            n.d(t, {
                W: () => l
            }), n(296540);
            var i = n(474848);

            function l({
                tooltipTitle: e,
                tooltipDescription: t,
                buttonProps: a,
                iconSize: s = "small",
                iconColorVariant: d = "tertiary",
                tooltipWidth: c,
                forceVisibleState: u = !1
            }) {
                return (0, i.jsx)(n(51831).m, {
                    placement: "top",
                    forceVisibleState: u,
                    style: c ? {
                        width: c
                    } : void 0,
                    content: () => (0, i.jsxs)(n(4458).VP, {
                        gap: 2,
                        className: "autolayout-fill-width",
                        style: r.positionRelative,
                        children: [e ? (0, i.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "inversePrimary",
                            children: e
                        }) : null, t ? (0, i.jsx)(n(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "inverseSecondary",
                            children: t
                        }) : null]
                    }),
                    textWrap: !!c,
                    children: e => (0, i.jsx)(o, {
                        buttonProps: a,
                        ...e,
                        children: (0, i.jsx)(n(708966).Q, {
                            iconGroup: n(799472).u,
                            colorVariant: d,
                            variantName: s
                        })
                    })
                })
            }
            let r = {
                button: {
                    borderRadius: 2
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function o({
                children: e,
                buttonProps: t,
                ...l
            }) {
                return t ? (0, i.jsx)(n(64960).Ay, {
                    style: r.button,
                    ...t,
                    ...l,
                    children: e
                }) : (0, i.jsx)("span", { ...l,
                    children: e
                })
            }
        },
        629108: (e, t, n) => {
            n.d(t, {
                E: () => i
            });
            let i = n(546605).Store.createValue({
                open: !1
            }, {
                name: "TrialEndModalStore"
            })
        },
        687245: (e, t, n) => {
            n.d(t, {
                r: () => i
            });
            let i = (0, n(104509).xh)("arrowInCircleDown", {
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
        796123: (e, t, n) => {
            n.r(t), n.d(t, {
                showAsyncModal: () => l,
                showAsyncModalComponent: () => r,
                testOnly: () => h
            }), n(898992), n(354520), n(672577), n(581454);
            var i = n(296540);

            function l(e, t = n(2009).w) {
                return new Promise((n, i) => {
                    try {
                        let l = c({
                            renderModal: e,
                            promiseResolve: n,
                            promiseReject: i,
                            store: t
                        });
                        o({
                            asyncModal: l,
                            store: t
                        })
                    } catch (e) {
                        i(e)
                    }
                })
            }

            function r(e, t = n(2009).w) {
                return l(t => i.createElement(e, t), t)
            }

            function o(e) {
                let {
                    asyncModal: t,
                    store: i = n(2009).w
                } = e;
                i.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function a(e) {
                let {
                    id: t,
                    promiseResolve: i,
                    store: l = n(2009).w
                } = e;
                return e => {
                    let n = u({
                        id: t,
                        store: l
                    });
                    null != n && n.isOpen && (p({
                        id: t,
                        store: l,
                        update: {
                            isOpen: !1
                        }
                    }), i(e))
                }
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: i,
                    store: l = n(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: l
                    });
                    null != e && e.isOpen && (p({
                        id: t,
                        store: l,
                        update: {
                            isOpen: !1
                        }
                    }), i())
                }
            }

            function d(e) {
                let {
                    id: t,
                    store: i = n(2009).w
                } = e;
                return () => {
                    i.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function c(e) {
                let {
                    renderModal: t,
                    promiseResolve: i,
                    promiseReject: l,
                    store: r = n(2009).w
                } = e, o = n(92513).JW(), c = d({
                    id: o,
                    store: r
                }), u = s({
                    id: o,
                    promiseResolve: i,
                    store: r
                }), p = a({
                    id: o,
                    promiseResolve: i,
                    store: r
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
                            throw l(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: i = n(2009).w
                } = e;
                return i.state.asyncModals.find(e => e.id === t)
            }

            function p(e) {
                let {
                    id: t,
                    update: i,
                    store: l = n(2009).w
                } = e;
                l.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...i
                    })
                }))
            }
            let h = {
                addAsyncModal: o,
                createAsyncModal: c,
                createOnClosed: d,
                createOnDismiss: s,
                createResolve: a,
                getAsyncModal: u,
                updateAsyncModal: p
            }
        },
        799472: (e, t, n) => {
            n.d(t, {
                u: () => i
            });
            let i = (0, n(104509).xh)("questionMarkCircle", {
                default: {
                    loader: () => n.e(82106).then(n.bind(n, 80094))
                },
                small: {
                    loader: () => n.e(82106).then(n.bind(n, 211052))
                },
                fill: {
                    loader: () => n.e(82106).then(n.bind(n, 769980))
                },
                fillSmall: {
                    loader: () => n.e(82106).then(n.bind(n, 479491))
                }
            }, ["question", "query", "inquiry", "uncertain", "unknown", "help", "circle"])
        },
        800020: (e, t, n) => {
            n.d(t, {
                h: () => o
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                l = n(474848);
            let r = {
                messageIcon: {
                    display: "flex",
                    height: n(104509).Ev.sm,
                    width: n(104509).Ev.sm
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function o({
                title: e,
                tint: t,
                features: s,
                strikeThroughBeforeItems: d = !0,
                reverseOrder: u = !1
            }) {
                let p = c(t),
                    [h, f] = (0, i.useMemo)(() => {
                        switch (t) {
                            case "blue":
                            case "gray":
                                return ["blue", "accentPrimary"];
                            default:
                                return [void 0, "primary"]
                        }
                    }, [t]);
                return (0, l.jsxs)(n(4458).VP, {
                    gap: 12,
                    padding: 16,
                    style: p.container,
                    className: "autolayout-fill-width",
                    children: [e ? (0, l.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        colorPalette: h,
                        colorVariant: f,
                        children: e
                    }) : null, (0, l.jsx)(n(4458).VP, {
                        gap: 12,
                        style: r.positionRelative,
                        children: s.map((e, n) => (0, l.jsx)(a, {
                            feature: e,
                            tint: t,
                            strikeThroughBeforeItems: d,
                            reverseOrder: u
                        }, `feature-${n}`))
                    })]
                })
            }

            function a({
                feature: e,
                tint: t,
                strikeThroughBeforeItems: i = !0,
                reverseOrder: r = !1
            }) {
                let o = c(t),
                    u = (0, n(722371).Vq)(e.beforeMessage) && (0, n(722371).Vq)(e.message);
                return (0, l.jsxs)(n(4458).fI, {
                    gap: 8,
                    alignItems: "center",
                    reverse: r || void 0,
                    alignSelf: "flex-start",
                    children: [(0, l.jsx)(s, {
                        feature: e,
                        tint: t,
                        strikeThroughBeforeItems: i
                    }), u ? (0, l.jsx)(n(16275).I, {
                        icon: n(969278).arrowStraightRightSmallIcon,
                        size: "sm",
                        style: o.arrowIcon
                    }) : null, (0, l.jsx)(d, {
                        feature: e,
                        tint: t
                    })]
                })
            }

            function s({
                feature: e,
                tint: t,
                strikeThroughBeforeItems: r
            }) {
                let o = c(t),
                    a = Array.isArray(e.icon) ? e.icon : [e.icon];
                return (0, l.jsxs)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    flexShrink: 0,
                    children: [(0, l.jsx)(n(4458).fI, {
                        gap: 4,
                        children: a.filter(n(722371).Vq).map((t, n) => (0, l.jsx)(i.Fragment, {
                            children: t({ ...o.icon,
                                ...e.iconStyle ? ? {}
                            })
                        }, n))
                    }), e.beforeMessage ? (0, l.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "gray" === t || "red" === t ? "tertiary" : "secondary",
                        style: "gray" !== t ? {
                            textDecoration: r ? "line-through" : void 0
                        } : {},
                        children: e.beforeMessage
                    }) : null]
                })
            }

            function d({
                feature: e,
                tint: t
            }) {
                let [o, a] = {
                    red: ["red", "accentPrimary"],
                    blue: ["blue", "accentPrimary"],
                    gray: [void 0, "primary"],
                    white: [void 0, "primary"]
                }[t], s = e.messageIcons ? (0, l.jsxs)(n(4458).fI, {
                    gap: 2,
                    paddingInlineStart: 2,
                    paddingInlineEnd: 2,
                    children: [e.messageIcons.icons.map((e, t) => (0, l.jsx)(i.Fragment, {
                        children: e({ ...r.messageIcon
                        })
                    }, `icon${t}`)), e.messageIcons.extraCount ? (0, l.jsxs)(n(111010).D, {
                        styleKey: "captionMedium",
                        colorPalette: "gray",
                        colorVariant: "secondary",
                        children: ["+", e.messageIcons.extraCount]
                    }) : null]
                }) : null, c = e.tooltip ? (0, l.jsx)(n(603651).W, {
                    tooltipWidth: 240,
                    tooltipTitle: e.tooltip.title,
                    tooltipDescription: e.tooltip.description,
                    iconColorPalette: "red" === t ? "red" : void 0,
                    iconColorVariant: "tertiary",
                    buttonProps: {
                        href: e.tooltip.link
                    }
                }) : null, u = e.message ? (0, l.jsx)(n(111010).D, {
                    styleKey: "bodyRegular",
                    colorPalette: o,
                    colorVariant: a,
                    children: e.message
                }) : null;
                return s || c ? (0, l.jsxs)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    flex: "1 1 0",
                    style: r.positionRelative,
                    children: [s, u, c]
                }) : u
            }

            function c(e) {
                let t = (0, n(960253).e)();
                return (0, n(960253).I)(() => {
                    let i = "gray" === e || "red" === e ? n(632079).Tj.icon.tertiary : "white" === e ? n(632079).Tj.icon.primary : n(632079).Tj.icon.secondary;
                    return {
                        container: {
                            position: "relative",
                            background: "red" === e ? "dark" === t ? n(632079).Tj.background.tertiary : n(632079).Tj.background.secondary : "white" === e ? n(632079).Tj.background.elevated : n(632079).Tj.blue.background.secondaryTranslucent,
                            borderRadius: 6
                        },
                        icon: {
                            display: "flex",
                            height: n(104509).Ev.sm,
                            width: n(104509).Ev.sm,
                            color: i
                        },
                        arrowIcon: {
                            color: i
                        }
                    }
                }, [e, t])
            }
        },
        958059: (e, t, n) => {
            function i(e) {
                return (0, n(192159).Fq)({
                    subscription: e
                })
            }

            function l(e) {
                return (0, n(192159).Ry)({
                    clock: void 0,
                    subscription: e,
                    trial: void 0
                })
            }

            function r({
                subscriptionState: e,
                logFunction: t,
                spaceId: i
            }) {
                let l = h(e);
                return (0, n(192159).yB)({
                    billingData: {
                        clock: void 0,
                        subscription: l,
                        trial: void 0
                    },
                    logFunction: t,
                    spaceId: i
                })
            }

            function o(e) {
                return (0, n(192159).q8)({
                    subscription: e
                })
            }

            function a(e) {
                return (0, n(192159).k4)({
                    subscription: e
                })
            }

            function s(e) {
                return (0, n(192159).V9)({
                    clock: void 0,
                    subscription: h(e),
                    trial: void 0
                })
            }

            function d(e) {
                return (0, n(192159).d$)({
                    clock: void 0,
                    subscription: h(e),
                    trial: void 0
                })
            }

            function c(e) {
                return (0, n(192159).ji)({
                    clock: void 0,
                    subscription: h(e),
                    trial: void 0
                })
            }

            function u(e) {
                return (0, n(192159).AI)({
                    clock: void 0,
                    subscription: h(e),
                    trial: void 0
                })
            }

            function p(e, t) {
                return (0, n(192159).KH)({
                    clock: void 0,
                    subscription: h(e),
                    trial: void 0
                }, t)
            }

            function h(e) {
                return e ? { ...e,
                    trialEnd: void 0
                } : void 0
            }
            n.d(t, {
                DS: () => i,
                Fe: () => d,
                GB: () => r,
                Gf: () => u,
                SX: () => a,
                V_: () => c,
                j1: () => s,
                j8: () => l,
                yp: () => p,
                yw: () => o
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454)
        },
        969278: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightRightSmallIcon: () => l,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.372 3.238a.625.625 0 1 0-.884.884l3.253 3.253H2.75a.625.625 0 0 0 0 1.25h8.991l-3.253 3.253a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                    })
                },
                l = (0, n(104509).wt)("arrowStraightRightSmall", i, "small")
        }
    }
]);