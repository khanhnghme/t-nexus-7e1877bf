"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [67281], {
        25745: (e, t, i) => {
            i.d(t, {
                T: () => C
            }), i(296540);
            var n = i(474848);

            function l(e) {
                let {
                    heroMedia: t,
                    heroElement: l
                } = e, o = (0, i(960253).I)(() => ({
                    heroContainer: {
                        width: 480,
                        aspectRatio: 1,
                        flexShrink: 0,
                        borderRadius: 6,
                        overflow: "hidden",
                        ...t ? {
                            position: "relative"
                        } : {}
                    }
                }), [t]);
                return (0, n.jsx)("div", {
                    style: o.heroContainer,
                    children: t ? (0, n.jsx)(s, {
                        src: t.src,
                        alt: t.alt,
                        type: t.type
                    }) : l
                })
            }
            let o = {
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                objectPosition: "top center"
            };

            function s(e) {
                let {
                    alt: t,
                    src: i,
                    type: l
                } = e;
                return "image" === l ? (0, n.jsx)("img", {
                    src: i,
                    style: o,
                    alt: t
                }) : (0, n.jsx)("video", {
                    title: t,
                    src: i,
                    style: o,
                    autoPlay: !0,
                    playsInline: !0,
                    muted: !0,
                    loop: !0,
                    controls: !1
                })
            }
            let a = {
                    textWrap: "pretty"
                },
                r = {
                    margin: 0,
                    alignSelf: "start"
                },
                d = {
                    display: "inline-flex",
                    verticalAlign: "middle",
                    marginTop: -4,
                    marginInlineEnd: 0,
                    marginBottom: 0,
                    marginInlineStart: 8
                };

            function c(e) {
                let {
                    title: t,
                    subtitle: l,
                    eyebrow: o,
                    badge: s
                } = e;
                return (0, n.jsxs)(i(4458).VP, {
                    gap: 4,
                    flexGrow: 1,
                    children: [null != o && o.text ? (0, n.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        children: [o.icon ? (0, n.jsx)(i(16275).I, {
                            icon: o.icon,
                            colorPalette: null == o ? void 0 : o.colorPalette,
                            colorVariant: null == o ? void 0 : o.iconColorVariant
                        }) : void 0, (0, n.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            colorPalette: null == o ? void 0 : o.colorPalette,
                            colorVariant: (null == o ? void 0 : o.colorVariant) ? ? "primary",
                            children: o.text
                        })]
                    }) : null != s && s.text ? (0, n.jsx)(i(746434).E, {
                        content: s.text,
                        color: s.color,
                        style: r
                    }) : void 0, (0, n.jsxs)(i(111010).D, {
                        styleKey: "titleXlBold",
                        colorVariant: "primary",
                        style: a,
                        children: [t, null != o && o.text && null != s && s.text ? (0, n.jsx)(i(746434).E, {
                            content: s.text,
                            color: s.color,
                            style: d
                        }) : void 0]
                    }), l ? (0, n.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: l
                    }) : void 0]
                })
            }

            function p(e) {
                let {
                    title: t,
                    subtitle: l,
                    body: o,
                    badge: s,
                    eyebrow: a
                } = e;
                return (0, n.jsxs)(i(4458).VP, {
                    gap: 20,
                    children: [(0, n.jsx)(c, {
                        title: t,
                        subtitle: l,
                        eyebrow: a,
                        badge: s
                    }), o]
                })
            }
            let u = {
                justifyContent: "center",
                whiteSpace: "wrap",
                height: "auto",
                gap: 4,
                paddingBlock: 6
            };

            function m(e) {
                let {
                    link: t,
                    secondary: l,
                    primary: o
                } = e;
                return (0, n.jsxs)(i(4458).VP, {
                    gap: 8,
                    children: [o ? (0, n.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        size: "xl",
                        onClick: o.onClick,
                        autoFocus: !0,
                        iconLeading: o.icon ? ? void 0,
                        children: o.text
                    }) : void 0, l ? (0, n.jsx)(i(548436).A, {
                        size: "xl",
                        onClick: l.onClick,
                        children: l.text
                    }) : void 0, t ? (0, n.jsx)(i(988022).p, {
                        colorPalette: "gray",
                        iconTrailing: t.external ? {
                            icon: i(166568).arrowUpRightSquareSmallIcon,
                            size: "sm"
                        } : void 0,
                        onClick: t.onClick,
                        style: u,
                        children: t.text
                    }) : void 0]
                })
            }
            let f = {
                container: {
                    width: 852,
                    padding: 20,
                    background: i(632079).Tj.background.elevated
                }
            };

            function g(e) {
                let {
                    badge: t,
                    body: o,
                    eyebrow: s,
                    heroElement: a,
                    heroMedia: r,
                    link: d,
                    primary: c,
                    secondary: u,
                    subtitle: g,
                    title: h
                } = e;
                return (0, n.jsx)("div", {
                    style: f.container,
                    children: (0, n.jsxs)(i(4458).fI, {
                        gap: 24,
                        justifyContent: "space-between",
                        children: [(0, n.jsxs)(i(4458).VP, {
                            gap: 24,
                            justifyContent: "space-between",
                            flexGrow: 1,
                            children: [(0, n.jsx)(p, {
                                title: h,
                                subtitle: g,
                                body: o,
                                badge: t,
                                eyebrow: s
                            }), (0, n.jsx)(m, {
                                primary: c,
                                secondary: u,
                                link: d
                            })]
                        }), r || a ? (0, n.jsx)(l, {
                            heroMedia: r,
                            heroElement: a
                        }) : void 0]
                    })
                })
            }
            let h = 16 / 9;

            function y(e) {
                let {
                    heroMedia: t,
                    heroElement: l
                } = e, o = (0, i(960253).I)(() => ({
                    heroContainer: {
                        width: 480,
                        marginInlineStart: -20,
                        marginTop: -20,
                        ...t ? {
                            position: "relative",
                            aspectRatio: h,
                            overflow: "hidden"
                        } : {}
                    }
                }), [t]);
                return (0, n.jsx)("div", {
                    style: o.heroContainer,
                    children: t ? (0, n.jsx)(v, {
                        src: t.src,
                        alt: t.alt,
                        type: t.type
                    }) : l
                })
            }
            let b = {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    objectFit: "cover",
                    objectPosition: "top center"
                },
                x = {
                    position: "relative"
                };

            function v(e) {
                let {
                    alt: t,
                    src: i,
                    type: l
                } = e;
                return "image" === l ? (0, n.jsx)("img", {
                    src: i,
                    style: b,
                    alt: t
                }) : (0, n.jsx)("video", {
                    title: t,
                    src: i,
                    style: b,
                    autoPlay: !0,
                    playsInline: !0,
                    muted: !0,
                    loop: !0,
                    controls: !1
                })
            }
            let j = {
                    position: "relative",
                    paddingInlineEnd: 4,
                    paddingBottom: 12,
                    paddingInlineStart: 4,
                    paddingTop: 24
                },
                M = {
                    textWrap: "pretty"
                },
                w = {
                    margin: 0,
                    alignSelf: "start"
                },
                k = {
                    display: "inline-flex",
                    verticalAlign: "middle",
                    marginTop: -4,
                    marginInlineEnd: 0,
                    marginBottom: 0,
                    marginInlineStart: 8
                };

            function A(e) {
                let {
                    title: t,
                    body: l,
                    badge: o,
                    eyebrow: s
                } = e;
                return (0, n.jsxs)(i(4458).VP, {
                    style: j,
                    gap: 4,
                    className: "autolayout-fill-width",
                    children: [null != s && s.text ? (0, n.jsxs)(i(4458).fI, {
                        gap: 4,
                        alignItems: "center",
                        style: x,
                        children: [s.icon ? (0, n.jsx)(i(16275).I, {
                            icon: s.icon,
                            colorPalette: null == s ? void 0 : s.colorPalette,
                            colorVariant: null == s ? void 0 : s.iconColorVariant
                        }) : void 0, (0, n.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            colorPalette: null == s ? void 0 : s.colorPalette,
                            colorVariant: (null == s ? void 0 : s.colorVariant) ? ? "primary",
                            children: s.text
                        })]
                    }) : null != o && o.text ? (0, n.jsx)(i(746434).E, {
                        content: o.text,
                        color: o.color,
                        style: w
                    }) : void 0, (0, n.jsxs)(i(111010).D, {
                        styleKey: "titleXlBold",
                        colorVariant: "primary",
                        style: M,
                        children: [t, null != s && s.text && null != o && o.text ? (0, n.jsx)(i(746434).E, {
                            content: o.text,
                            color: o.color,
                            style: k
                        }) : void 0]
                    }), (0, n.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: l
                    })]
                })
            }
            let I = {
                container: {
                    position: "relative",
                    marginTop: 16
                },
                link: {
                    color: i(632079).Tj.text.secondary,
                    borderRadius: 6,
                    padding: "4px 8px",
                    marginInlineStart: -4
                },
                linkIcon: {
                    display: "inline-block",
                    verticalAlign: "text-bottom",
                    marginInlineStart: 4
                },
                secondary: {
                    color: i(632079).Tj.text.secondary,
                    padding: "0 12px",
                    borderRadius: 6,
                    height: 32,
                    display: "flex",
                    alignItems: "center"
                }
            };

            function T(e) {
                let {
                    link: t,
                    secondary: l,
                    primary: o
                } = e, s = (0, i(960253).I)(() => ({
                    primary: { ...null != o && o.isFullWidth ? {
                            width: "100%"
                        } : {},
                        ...null != o && o.icon ? {
                            gap: 4
                        } : {}
                    }
                }), [o]), a = o ? (0, n.jsxs)(i(912946).A, {
                    size: o.isFullWidth ? "xl" : "lg",
                    onClick: o.onClick,
                    style: s.primary,
                    autoFocus: !0,
                    children: [o.icon ? (0, n.jsx)(i(16275).I, {
                        icon: o.icon
                    }) : void 0, o.text]
                }) : void 0;
                if (null != o && o.isFullWidth) return (0, n.jsx)("div", {
                    style: I.container,
                    children: a
                });
                let r = (0, n.jsx)("div", {});
                t && (r = (0, n.jsx)(i(590422).Q, {
                    onClick: t.onClick,
                    style: I.link,
                    external: t.external,
                    children: (0, n.jsxs)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: [t.text, t.external ? (0, n.jsx)(i(16275).I, {
                            icon: i(166568).arrowUpRightSquareSmallIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: I.linkIcon
                        }) : void 0]
                    })
                }));
                let d = l ? (0, n.jsx)(i(988022).p, {
                    onClick: l.onClick,
                    style: I.secondary,
                    external: l.external,
                    children: l.text
                }) : void 0;
                return (0, n.jsxs)(i(4458).fI, {
                    style: I.container,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    justifyContent: "space-between",
                    children: [r, (0, n.jsxs)(i(4458).fI, {
                        gap: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        style: x,
                        children: [d, a]
                    })]
                })
            }
            let _ = {
                container: {
                    width: 480,
                    padding: 20,
                    position: "relative",
                    backgroundColor: i(632079).Tj.background.elevated
                }
            };

            function S(e) {
                let {
                    title: t,
                    body: l,
                    badge: o,
                    eyebrow: s,
                    heroMedia: a,
                    heroElement: r,
                    primary: d,
                    secondary: c,
                    link: p,
                    onDismiss: u,
                    hideCloseButton: m
                } = e;
                return (0, n.jsxs)(i(4458).VP, {
                    style: _.container,
                    className: "autolayout-fill-width",
                    children: [a || r ? (0, n.jsx)(y, {
                        heroMedia: a,
                        heroElement: r
                    }) : void 0, (0, n.jsx)(A, {
                        title: t,
                        body: l,
                        badge: o,
                        eyebrow: s
                    }), (0, n.jsx)(T, {
                        primary: d,
                        secondary: c,
                        link: p
                    }), m ? void 0 : (0, n.jsx)(i(855353).A, {
                        onClick: u
                    })]
                })
            }

            function C(e) {
                let {
                    layout: t,
                    ...i
                } = e;
                return "horizontal" === t ? (0, n.jsx)(g, { ...i
                }) : (0, n.jsx)(S, { ...i
                })
            }
        },
        156379: (e, t, i) => {
            i.d(t, {
                L: () => l
            }), i(296540);
            var n = i(474848);

            function l() {
                return (0, n.jsx)(i(746434).E, {
                    content: (0, n.jsx)(i(109939).sA, {
                        id: "spaceUserMembershipType.restrictedMember",
                        defaultMessage: "Restricted"
                    }),
                    color: "yellow"
                })
            }
        },
        280096: (e, t, i) => {
            i.d(t, {
                VI: () => f,
                kW: () => g,
                BL: () => v,
                T6: () => j
            }), i(898992), i(430670), i(581454);
            var n = i(296540);
            let l = (0, i(104509).xh)("personKey", {
                    default: {
                        loader: () => i.e(4099).then(i.bind(i, 567681))
                    },
                    small: {
                        loader: () => i.e(4099).then(i.bind(i, 503307))
                    },
                    fill: {
                        loader: () => i.e(4099).then(i.bind(i, 913825))
                    },
                    fillSmall: {
                        loader: () => i.e(4099).then(i.bind(i, 299496))
                    }
                }, ["user", "individual", "human", "avatar", "access", "lock", "private"]),
                o = (0, i(104509).xh)("personSlash", {
                    default: {
                        loader: () => i.e(48301).then(i.bind(i, 67207))
                    },
                    small: {
                        loader: () => i.e(48301).then(i.bind(i, 262401))
                    },
                    fill: {
                        loader: () => i.e(48301).then(i.bind(i, 13619))
                    },
                    fillSmall: {
                        loader: () => i.e(48301).then(i.bind(i, 29418))
                    }
                }, ["user", "individual", "human", "avatar", "account", "invisible", "logged out"]);
            var s = i(474848);
            let a = {
                    src: i(896221).A.images.aiForWork.airplanePng,
                    height: 67.595,
                    width: 95.357,
                    top: 124,
                    insetInlineEnd: -30
                },
                r = (0, i(109939).YK)({
                    title: {
                        id: "blockLimitOfferResponsiveModal.title",
                        defaultMessage: "Keep collaborating with 50% off"
                    },
                    body: {
                        id: "blockLimitOfferResponsiveModal.body",
                        defaultMessage: "Keep using Notion! Get half off of the Notion Plus plan for 1 month."
                    },
                    primaryButton: {
                        id: "blockLimitOfferResponsiveModal.primaryButton.text",
                        defaultMessage: "Get offer now"
                    },
                    secondaryButton: {
                        id: "blockLimitOfferResponsiveModal.secondaryButton.text",
                        defaultMessage: "No thanks"
                    },
                    link: {
                        id: "blockLimitOfferResponsiveModal.link",
                        defaultMessage: "Learn more"
                    },
                    badge: {
                        id: "blockLimitOfferResponsiveModal.badge",
                        defaultMessage: "50% off"
                    },
                    unlimitedCollaborativeBlocks: {
                        id: "blockLimitOfferResponsiveModal.unlimitedCollaborativeBlocks",
                        defaultMessage: "Unlimited collaborative blocks"
                    },
                    unlimitedCharts: {
                        id: "blockLimitOfferResponsiveModal.unlimitedCharts",
                        defaultMessage: "Unlimited charts"
                    },
                    customSitesAndForms: {
                        id: "blockLimitOfferResponsiveModal.customSitesAndForms",
                        defaultMessage: "Custom sites and forms"
                    },
                    inviteGuests: {
                        id: "blockLimitOfferResponsiveModal.inviteGuests",
                        defaultMessage: "Invite up to 100 guests"
                    },
                    andMore: {
                        id: "blockLimitOfferResponsiveModal.andMore",
                        defaultMessage: "and more…"
                    }
                }),
                d = [{
                    text: r.unlimitedCollaborativeBlocks,
                    iconGroup: i(153270).a,
                    styleType: "primary"
                }, {
                    text: r.unlimitedCharts,
                    iconGroup: i(153270).a,
                    styleType: "primary"
                }, {
                    text: r.customSitesAndForms,
                    iconGroup: i(153270).a,
                    styleType: "primary"
                }, {
                    text: r.inviteGuests,
                    iconGroup: i(153270).a,
                    styleType: "primary"
                }, {
                    text: r.andMore,
                    styleType: "secondary"
                }],
                c = {
                    maxWidth: 360
                },
                p = {
                    marginInlineStart: 0
                };

            function u({
                onClose: e,
                continueRemovingMember: t
            }) {
                let n = (0, i(109939).tz)(),
                    l = (0, i(533992).v3)(),
                    o = (0, i(972740).L)(),
                    m = (0, i(226309)._3)({
                        spaceId: null == o ? void 0 : o.id
                    });
                return (0, i(383953).w)(() => {
                    (0, i(104310).u)({
                        event: {
                            eventName: "offer_viewed",
                            eventProperties: {
                                offer_campaign: "removing_member_block_limit"
                            }
                        }
                    })
                }), (0, s.jsx)(i(25745).T, {
                    heroElement: (0, s.jsx)(i(446566).c, {
                        title: (0, s.jsx)(i(746434).E, {
                            color: "blue",
                            content: n.formatMessage(r.badge),
                            style: p
                        }),
                        features: d,
                        innerWidth: 344,
                        height: 294,
                        rightIllustration: a,
                        variant: "announcement"
                    }),
                    title: n.formatMessage(r.title),
                    body: (0, s.jsx)("div", {
                        style: c,
                        children: n.formatMessage(r.body)
                    }),
                    primary: {
                        text: n.formatMessage(r.primaryButton),
                        onClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "monetization_announcement_modal_action",
                                    eventProperties: {
                                        source: "removing_member_block_limit_offer",
                                        action: "claim_offer"
                                    }
                                }
                            }), e(), (0, i(902777).F)({
                                environment: l,
                                spaceStore: o,
                                billingData: m,
                                product: "plus",
                                from: "removing_member_block_limit_offer_modal",
                                campaign: "removing_member_block_limit"
                            })
                        }
                    },
                    secondary: {
                        text: n.formatMessage(r.secondaryButton),
                        onClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "monetization_announcement_modal_action",
                                    eventProperties: {
                                        source: "removing_member_block_limit_offer",
                                        action: "decline_offer"
                                    }
                                }
                            }), e(), t()
                        }
                    },
                    link: {
                        text: n.formatMessage(r.link),
                        external: !0,
                        onClick: () => {
                            (0, i(104310).u)({
                                event: {
                                    eventName: "monetization_announcement_modal_action",
                                    eventProperties: {
                                        source: "removing_member_block_limit_offer",
                                        action: "learn_more"
                                    }
                                }
                            }), (0, i(624621).L)({
                                environment: l,
                                url: i(168962).JZ.notionPlusRemovingMemberBlockLimitOfferTerms
                            })
                        }
                    },
                    hideCloseButton: !0
                })
            }

            function m({
                isOpen: e,
                onClose: t,
                continueRemovingMember: n
            }) {
                return (0, s.jsx)(i(833503).s, {
                    isOpen: e,
                    onDismiss: () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "monetization_announcement_modal_action",
                                eventProperties: {
                                    source: "removing_member_block_limit_offer",
                                    action: "decline_offer"
                                }
                            }
                        }), t(), n()
                    },
                    children: () => (0, s.jsx)(u, {
                        onClose: t,
                        continueRemovingMember: n
                    })
                })
            }

            function f({
                spaceUser: e,
                targetUserId: t,
                currentType: l,
                isInvite: o,
                onClick: a,
                onChange: r,
                spaceStore: d,
                buttonStyle: c,
                isMenuItem: p,
                from: u,
                upgradeFrom: h
            }) {
                var b, x, v;
                let j = (0, i(682985).uB)(void 0, i(510969).A),
                    [M, w] = n.useState(!1),
                    k = (0, i(682985).K8)(() => j.state.open, [j]),
                    A = (0, i(682985).K8)(() => e.getUserId(), [e]) === t,
                    I = (b = e, x = t, v = l, !(0, i(682985).K8)(() => !!(b.isWorkspaceOwner() || b.canEditMembership() && "owner" !== v && "membership_admin" !== v) || !!b.canEditMembership() && b.getUserId() === x || !1, [b, x, v]));
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(i(656252).A, {
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), null == a || a()
                        },
                        popupType: i(986939).A.isMobile ? i(656252).z.SlideUp : i(656252).z.Popup,
                        buttonPopupStore: j,
                        open: k,
                        placementToOrigin: "bottom",
                        content: i => (0, s.jsx)(g, {
                            spaceUser: e,
                            targetUserId: t,
                            currentType: l,
                            parent: i,
                            upgradeFrom: h,
                            from: u,
                            spaceStore: d,
                            onShowBlockLimitModal: () => {
                                w(!0)
                            },
                            ...o ? {
                                isInvite: !0,
                                onChange: r
                            } : {
                                isInvite: !1,
                                onChange: r
                            }
                        }),
                        children: e => (0, s.jsx)(y, {
                            isMenuItem: p,
                            membershipType: l,
                            events: e,
                            disabled: I,
                            buttonStyle: c,
                            isCurrentUser: A
                        })
                    }), M && !o ? (0, s.jsx)(m, {
                        isOpen: M,
                        onClose: () => {
                            w(!1)
                        },
                        continueRemovingMember: () => {
                            r("none")
                        }
                    }) : void 0]
                })
            }

            function g({
                spaceUser: e,
                targetUserId: t,
                isInvite: l,
                currentType: o,
                parent: a,
                onChange: r,
                upgradeFrom: d,
                from: c,
                spaceStore: p,
                onShowBlockLimitModal: u
            }) {
                let m, f = (0, i(533992).v3)(),
                    y = j({
                        spaceUser: e,
                        isInvite: l,
                        targetUserId: t
                    }),
                    b = n.useCallback(e => {
                        l && "none" !== e ? r(e) : l || r(e)
                    }, [l, r]),
                    v = (0, i(682985).K8)(() => e.getUserId(), [e]) === t,
                    M = {
                        key: "membership_types",
                        render: e => (0, s.jsx)(i(844565).A, { ...e,
                            title: i(986939).A.isMobile ? void 0 : (0, s.jsx)(i(109939).sA, {
                                id: "spaceMembershipTypeSelect.desktop.title",
                                defaultMessage: "Select role"
                            }),
                            topBorder: 0 !== e.index
                        }),
                        items: y.flatMap(e => ({
                            key: e.membershipType,
                            render: t => (0, s.jsx)(x, {
                                currentType: o,
                                option: e,
                                focused: t.focused,
                                props: t,
                                from: c,
                                upgradeFrom: d,
                                spaceStore: p
                            }),
                            action: () => {
                                (function(e, t, n, l, o, a, r, d, c, p) {
                                    if (t !== e)
                                        if (i(594311).Uo({
                                                newRole: (0, i(729052).ps)(e),
                                                availableRoles: o.map(e => ({
                                                    role: (0, i(729052).ps)(e)
                                                }))
                                            }), r && !i(986939).A.isAdminMode) i(907063).K(l, {
                                            from: n,
                                            upsell: r,
                                            spaceStore: c
                                        });
                                        else if (a ? "none" !== e || "none" === t : 1) {
                                        var u, m, f;
                                        if (u = a, m = e, f = t, u && i(729052).fS.indexOf(m) < i(729052).fS.indexOf(f)) i(647095).ui({
                                            showCancel: !0,
                                            keepFocus: !1,
                                            message: (0, s.jsx)(i(109939).sA, {
                                                id: "spaceMembershipTypeSelect.downgradePermissionsModal.downgradeSelfFromWorkspaceOrPage.confirmationMessage",
                                                defaultMessage: "Are you sure you want to downgrade your own access?"
                                            }),
                                            items: [{
                                                label: (0, s.jsx)(i(109939).sA, {
                                                    id: "spaceMembershipTypeSelect.downgradePermissionsModal.downgradeSelfButton.label",
                                                    defaultMessage: "Downgrade"
                                                }),
                                                color: "red",
                                                onAccept: () => d(e)
                                            }]
                                        });
                                        else if ("none" === e && !a && (0, i(729052).MN)(t) && p) {
                                            let t = null == c ? void 0 : c.id;
                                            void 0 !== (t ? i(617995).I.getData(l, {
                                                spaceId: t,
                                                offerCampaign: "removing_member_block_limit"
                                            }) : void 0) ? p() : null == d || d(e)
                                        } else null == d || d(e)
                                    } else i(647095).ui({
                                        showCancel: !0,
                                        keepFocus: !1,
                                        message: (0, s.jsx)(i(109939).sA, {
                                            id: "spaceMembershipTypeSelect.removeSelfFromWorkspace.confirmationMessage",
                                            defaultMessage: "Are you sure you want to remove your own access? You will lose access to the workspace, and any private pages will be lost."
                                        }),
                                        items: [{
                                            label: (0, s.jsx)(i(109939).sA, {
                                                id: "spaceMembershipTypeSelect.removeSelfButton.label",
                                                defaultMessage: "Remove"
                                            }),
                                            color: "red",
                                            onAccept: () => d(e)
                                        }]
                                    })
                                })(e.membershipType, o, d, f, y.map(e => e.membershipType), v, "upsell" === e.state ? e.upsell : void 0, b, p, u), a.close()
                            }
                        }))
                    },
                    w = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(i(346268).c, {
                            size: "100%"
                        }), (0, s.jsx)(i(68774).N, {
                            href: (0, i(442564).x)("guides.roles"),
                            children: (0, s.jsxs)(i(4458).fI, {
                                padding: 8,
                                gap: 8,
                                className: "autolayout-fill-width",
                                style: h.positionRelative,
                                children: [(0, s.jsx)(i(708966).Q, {
                                    iconGroup: i(799472).u,
                                    variantName: "default",
                                    colorPalette: "gray",
                                    colorVariant: "secondary"
                                }), (0, s.jsx)(i(111010).D, {
                                    colorPalette: "gray",
                                    colorVariant: "secondary",
                                    styleKey: "bodyRegular",
                                    children: (0, s.jsx)(i(109939).sA, {
                                        id: "spaceMembershipTypeSelect.desktop.infoFooter",
                                        defaultMessage: "Learn more about each role"
                                    })
                                })]
                            })
                        })]
                    });
                return m = i(986939).A.isMobile ? {
                    menuType: i(649476).gu.Modal,
                    title: (0, s.jsx)(i(109939).sA, {
                        id: "spaceMembershipTypeSelect.mobile.title",
                        defaultMessage: "Select role"
                    }),
                    right: (0, s.jsx)(i(109939).sA, {
                        id: "spaceMembershipTypeSelect.mobile.doneButton.label",
                        defaultMessage: "Done"
                    }),
                    onClickRight: a.close
                } : {
                    menuType: i(649476).gu.Popup,
                    minWidth: 264
                }, (0, s.jsx)(i(747369).A, {
                    className: i(828432).yw8,
                    footer: i(986939).A.isMobile ? void 0 : w,
                    ...m,
                    children: (0, s.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: [M]
                    })
                })
            }
            let h = {
                label: {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function y({
                isMenuItem: e,
                membershipType: t,
                events: n,
                disabled: l,
                buttonStyle: o,
                isCurrentUser: a
            }) {
                let r = (0, i(960253).I)(() => ({
                        button: { ...o
                        }
                    }), [o]),
                    d = v({
                        membershipType: t,
                        isRemovable: !1,
                        isCurrentUser: a
                    }).label;
                return e ? (0, s.jsx)(i(95582).A, { ...n,
                    title: (0, s.jsx)(i(109939).sA, { ...d
                    }),
                    focused: !1,
                    showExtensionArrow: !0
                }) : (0, s.jsx)(i(988022).p, {
                    id: void 0,
                    ...n,
                    disabled: l,
                    style: r.button,
                    iconTrailing: l ? void 0 : {
                        icon: i(469102).arrowChevronSingleDownFillSmallIcon,
                        size: "xs",
                        colorVariant: "tertiary"
                    },
                    children: (0, s.jsx)("span", {
                        className: "notranslate",
                        style: h.label,
                        children: (0, s.jsx)(i(109939).sA, { ...d
                        })
                    })
                })
            }
            let b = {
                style0: {
                    marginInlineEnd: 0
                },
                style1: {
                    color: i(632079).Tj.text.secondary
                }
            };

            function x(e) {
                let {
                    option: t,
                    currentType: n,
                    upgradeFrom: l,
                    from: o,
                    spaceStore: a
                } = e, r = (0, i(83208).X)("upgrade_system_sharing"), {
                    onClick: d,
                    key: c,
                    ...p
                } = e.props;
                return "dont_render" === t.state ? null : "disabled" === t.state ? (0, s.jsx)(i(51831).m, {
                    delayThreshold: 0,
                    content: e => (0, s.jsx)("div", { ...e,
                        children: t.info
                    }),
                    placement: "right",
                    textWrap: !0,
                    children: l => (0, s.jsx)(i(95582).A, { ...l,
                        icon: (0, s.jsx)(i(708966).Q, {
                            iconGroup: t.icon,
                            variantName: "default"
                        }),
                        focused: e.focused,
                        disabled: !0,
                        disabledFeedback: !0,
                        isChecked: n === t.membershipType,
                        title: (0, s.jsx)(i(4458).fI, {
                            alignItems: "center",
                            gap: 0,
                            children: (0, s.jsx)("div", {
                                style: b.style0,
                                children: (0, s.jsx)(i(109939).sA, { ...t.label
                                })
                            })
                        }),
                        caption: t.caption && (0, s.jsx)("span", {
                            style: b.style1,
                            children: (0, s.jsx)(i(109939).sA, { ...t.caption
                            })
                        }),
                        shouldWrapCaption: !0
                    })
                }) : r ? (0, s.jsx)(i(233305).N, {
                    upsell: "upsell" === t.state ? t.upsell : void 0,
                    source: l,
                    spaceStore: a,
                    tooltipMessage: "upsell" === t.state ? t.upsellTooltip : void 0,
                    tooltipPlacement: "left",
                    title: ({
                        upgradeLabel: e
                    }) => (0, s.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 0,
                        children: [(0, s.jsx)(i(4458).fI, {
                            alignItems: "center",
                            gap: 0,
                            marginInlineEnd: 6 * ("upsell" === t.state),
                            children: (0, s.jsx)(i(109939).sA, { ...t.label
                            })
                        }), e]
                    }),
                    buttonMenuItemProps: { ...p,
                        icon: (0, s.jsx)(i(708966).Q, {
                            iconGroup: t.icon,
                            variantName: "default"
                        }),
                        onClick: d,
                        focused: p.focused || e.focused,
                        isChecked: n === t.membershipType,
                        caption: t.caption && (0, s.jsx)("span", {
                            style: b.style1,
                            children: (0, s.jsx)(i(109939).sA, { ...t.caption
                            })
                        }),
                        shouldWrapCaption: !0,
                        disabled: !1,
                        isRedOnHover: "spaceSettings" === o && "enabled" === t.state && "none" === t.membershipType
                    }
                }) : (0, s.jsx)(i(804301).k, {
                    upsell: "upsell" === t.state ? t.upsell : void 0,
                    analyticsName: l,
                    spaceStore: a,
                    renderUpgradeTooltip: () => "upsell" === t.state ? t.upsellTooltip : void 0,
                    tooltipPlacement: "left",
                    onClick: d,
                    render: (l, a) => {
                        let {
                            focused: r,
                            ...d
                        } = (0, i(63390).A)(p, l);
                        return (0, s.jsx)(i(95582).A, { ...d,
                            icon: (0, s.jsx)(i(708966).Q, {
                                iconGroup: t.icon,
                                variantName: "default"
                            }),
                            focused: r || e.focused,
                            isChecked: n === t.membershipType,
                            title: (0, s.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                children: [(0, s.jsx)("div", {
                                    style: {
                                        marginInlineEnd: 6 * ("upsell" === t.state),
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: (0, s.jsx)(i(109939).sA, { ...t.label
                                    })
                                }), a]
                            }),
                            caption: t.caption && (0, s.jsx)("span", {
                                style: b.style1,
                                children: (0, s.jsx)(i(109939).sA, { ...t.caption
                                })
                            }),
                            shouldWrapCaption: !0,
                            disabled: !1,
                            isRedOnHover: "spaceSettings" === o && "enabled" === t.state && "none" === t.membershipType
                        })
                    }
                })
            }

            function v({
                membershipType: e,
                isRemovable: t,
                isCurrentUser: n
            }) {
                switch (e) {
                    case "owner":
                        return {
                            icon: l,
                            label: i(805186).S.workspaceOwnerLabel,
                            caption: i(805186).S.workspaceOwnerCaption
                        };
                    case "membership_admin":
                        return {
                            icon: l,
                            label: i(805186).S.membershipAdminLabel,
                            caption: i(805186).S.membershipAdminCaption
                        };
                    case "member":
                        return {
                            icon: i(348780).K,
                            label: i(805186).S.memberLabel,
                            caption: i(805186).S.memberCaption
                        };
                    case "restricted_member":
                        return {
                            icon: i(348780).K,
                            label: i(805186).S.restrictedMemberLabel,
                            caption: i(805186).S.restrictedMemberCaption
                        };
                    case "page_guest":
                    case "none":
                        if (t && n) return {
                            icon: o,
                            label: i(805186).S.leaveWorkspaceLabel
                        };
                        if (t) return {
                            icon: o,
                            label: i(805186).S.removeFromWorkspaceLabel
                        };
                        return {
                            icon: o,
                            label: i(805186).S.noAccessLabel
                        };
                    default:
                        (0, i(722371).HB)(e)
                }
            }

            function j({
                spaceUser: e,
                isInvite: t,
                targetUserId: n
            }) {
                let l = (0, i(682985).K8)(() => null == e ? void 0 : e.getSpaceId(), [e]),
                    o = (0, i(682985).K8)(() => null == e ? void 0 : e.getUserId(), [e]),
                    a = (0, i(682985).K8)(() => null == e ? void 0 : e.getMembershipType(), [e]),
                    r = (0, i(217844)._)({
                        name: "non_admin_members",
                        spaceId: l,
                        userId: o
                    }),
                    d = (0, i(217844)._)({
                        name: "membership_admins",
                        spaceId: l,
                        userId: o
                    }),
                    c = (0, i(217844)._)({
                        name: "restricted_members",
                        spaceId: l,
                        userId: o
                    });
                return (0, i(381453).oE)(["owner", "membership_admin", "member", "restricted_member", t ? void 0 : "none"]).map(e => {
                    let t = v({
                        membershipType: e,
                        isRemovable: !0,
                        isCurrentUser: o === n
                    });
                    return a && r && d && c ? {
                        membershipType: e,
                        ...t,
                        ... function({
                            membershipAdminsAvailability: e,
                            restictedMemberAvailability: t,
                            nonAdminAvailability: n,
                            currentUserType: l,
                            newType: o
                        }) {
                            let a = (0, s.jsx)(i(109939).sA, {
                                    id: "spaceMembershipTypeSelect.roleUpgradeDisabled",
                                    defaultMessage: "Cannot upgrade to a higher role than member"
                                }),
                                r = (0, s.jsx)(i(916612).A, {
                                    imageURL: i(896221).A.images.tooltips.upsells.spaceReadAndWritePng,
                                    imageWidth: 240,
                                    imageHeight: 100,
                                    caption: (0, s.jsx)(i(109939).sA, {
                                        defaultMessage: "Members cannot change workspace settings or invite new members.",
                                        id: "spaceMembershipTypeSelect.spaceReadAndWriteUpgradeTooltip.caption"
                                    }),
                                    title: (0, s.jsx)(i(109939).sA, {
                                        defaultMessage: "Upgrade to add non-admin members",
                                        id: "spaceMembershipTypeSelect.spaceReadAndWriteUpgradeTooltip.title"
                                    })
                                }),
                                d = (0, s.jsx)(i(916612).A, {
                                    imageURL: i(896221).A.images.tooltips.upsells.spaceReadAndWritePng,
                                    imageWidth: 240,
                                    imageHeight: 100,
                                    caption: (0, s.jsx)(i(109939).sA, {
                                        defaultMessage: "Restricted members can only view content they’ve been specifically invited to.",
                                        id: "spaceMembershipTypeSelect.spaceRestrictedMemberTooltip.caption"
                                    }),
                                    title: (0, s.jsx)(i(109939).sA, {
                                        defaultMessage: "Upgrade to add restricted members",
                                        id: "spaceMembershipTypeSelect.spaceRestrictedMemberTooltip.title"
                                    })
                                });
                            if ("owner" === o) {
                                if ("owner" !== l) return {
                                    state: "disabled",
                                    info: a
                                }
                            } else if ("membership_admin" === o) {
                                if (e && !(0, i(94418).e2)(e)) return {
                                    state: "dont_render"
                                };
                                else if ("owner" !== l) return {
                                    state: "disabled",
                                    info: a
                                }
                            } else if ("restricted_member" === o) {
                                if (t && !(0, i(94418).e2)(t)) return {
                                    state: "upsell",
                                    upsell: t.upsell,
                                    upsellTooltip: d
                                };
                                else if ("owner" !== l && "membership_admin" !== l) return {
                                    state: "disabled",
                                    info: a
                                }
                            } else if ("none" !== o && n && !(0, i(94418).e2)(n)) return {
                                state: "upsell",
                                upsell: n.upsell,
                                upsellTooltip: r
                            };
                            return {
                                state: "enabled"
                            }
                        }({
                            membershipAdminsAvailability: d,
                            restictedMemberAvailability: c,
                            nonAdminAvailability: r,
                            currentUserType: a,
                            newType: e
                        })
                    } : {
                        membershipType: e,
                        ...t,
                        state: "disabled",
                        info: null
                    }
                })
            }
        },
        300193: (e, t, i) => {
            i.d(t, {
                z: () => o
            }), i(296540);
            var n = i(474848);
            let l = {
                paddingBlock: 4
            };

            function o(e) {
                return (0, n.jsx)(i(844565).A, {
                    title: e.hideTitle ? void 0 : (0, n.jsx)(i(109939).sA, {
                        id: "inviteUserModal.searchDropdown.selectPersonTitle",
                        defaultMessage: "Select a person"
                    }),
                    style: l,
                    ...e
                })
            }
        },
        348780: (e, t, i) => {
            i.d(t, {
                K: () => n
            });
            let n = (0, i(104509).xh)("person", {
                default: {
                    loader: () => i.e(21262).then(i.bind(i, 623290))
                },
                small: {
                    loader: () => i.e(21262).then(i.bind(i, 125040))
                },
                fill: {
                    loader: () => i.e(21262).then(i.bind(i, 465128))
                },
                fillSmall: {
                    loader: () => i.e(21262).then(i.bind(i, 476719))
                }
            }, ["user", "individual", "human", "avatar"])
        },
        396826: (e, t, i) => {
            i.r(t), i.d(t, {
                aiFaceFillIcon: () => o,
                iconDefinition: () => l
            }), i(296540);
            var n = i(474848);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.96 2.31 13.64 15.02",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M10.401 5.452a4.118 4.118 0 0 1 7.088.036.825.825 0 0 1-1.425.832 2.468 2.468 0 0 0-4.247-.02L6.57 15.062l3.9.631a.825.825 0 1 1-.263 1.628l-5.102-.826a.827.827 0 0 1-.576-1.238z"
                        }), (0, n.jsx)("path", {
                            d: "M11.685 8.61a1.278 1.278 0 1 1 2.524.408 1.278 1.278 0 0 1-2.524-.409M5.474 7.603a1.278 1.278 0 1 1 2.524.408 1.278 1.278 0 0 1-2.524-.408M4.225 3.367a4.12 4.12 0 0 1 5.858.375.826.826 0 0 1-1.246 1.08 2.47 2.47 0 0 0-3.51-.225.826.826 0 0 1-1.102-1.23"
                        })]
                    })
                },
                o = (0, i(104509).wt)("aiFaceFill", l, "fill")
        },
        446566: (e, t, i) => {
            i.d(t, {
                c: () => s
            }), i(581454), i(296540);
            var n = i(474848);
            let l = {
                    width: "fit-content"
                },
                o = {
                    position: "relative"
                };

            function s(e) {
                let {
                    title: t,
                    features: o,
                    leftIllustration: s,
                    rightIllustration: a,
                    innerWidth: r,
                    height: c,
                    variant: p
                } = e, u = function(e) {
                    let {
                        variant: t
                    } = e;
                    return (0, i(960253).I)(() => ({
                        container: {
                            position: "relative",
                            background: "announcement" === t ? i(632079).Tj.background.secondaryTranslucent : i(632079).Tj.blue.text.accentPrimary,
                            overflow: "hidden"
                        },
                        innerContainer: {
                            position: "relative",
                            top: 16.5,
                            background: i(632079).Tj.background.elevated,
                            borderRadius: 16,
                            boxShadow: "announcement" === t ? i(632079).Tj.shadow.outline.diffuse : i(632079).Tj.shadow.outline.md
                        }
                    }), [t])
                }({
                    variant: p
                });
                return (0, n.jsx)(i(4458).VP, {
                    className: "autolayout-fill-width",
                    height: c,
                    style: u.container,
                    paddingInline: 16,
                    paddingTop: 24,
                    gap: 8,
                    alignItems: "center",
                    children: (0, n.jsxs)(i(4458).VP, {
                        gap: 16,
                        paddingTop: 32,
                        paddingInlineEnd: 24,
                        paddingBottom: 20,
                        paddingInlineStart: 32,
                        width: r ? ? 300,
                        height: 306,
                        style: u.innerContainer,
                        children: [s ? (0, n.jsx)(d, { ...s
                        }) : void 0, a ? (0, n.jsx)(d, { ...a
                        }) : void 0, (0, n.jsx)("div", {
                            style: l,
                            children: t
                        }), (0, n.jsx)(m, {
                            features: o
                        })]
                    })
                })
            }
            let a = {
                    position: "absolute",
                    zIndex: 2
                },
                r = {
                    height: "100%",
                    width: "100%"
                };

            function d(e) {
                let {
                    src: t,
                    ...i
                } = e;
                return t ? "string" == typeof t ? (0, n.jsx)("div", {
                    style: { ...a,
                        ...i
                    },
                    children: (0, n.jsx)("img", {
                        style: r,
                        src: t,
                        alt: "illustration"
                    })
                }) : (0, n.jsx)("div", {
                    style: i,
                    children: t
                }) : null
            }
            let c = {
                overflow: "hidden",
                textOverflow: "ellipsis"
            };

            function p(e) {
                let {
                    secondaryText: t,
                    text: l,
                    iconGroup: s,
                    styleType: a
                } = e, r = (0, i(109939).tz)();
                return (0, n.jsxs)(i(4458).fI, {
                    gap: 6,
                    style: o,
                    children: [s ? (0, n.jsx)(i(708966).Q, {
                        variantName: "default",
                        iconGroup: s,
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }) : void 0, (0, n.jsxs)(i(4458).VP, {
                        gap: 2,
                        style: o,
                        flex: "1 1 0",
                        children: [(0, n.jsx)(i(111010).D, {
                            colorVariant: "secondary" === a ? "tertiary" : "primary",
                            styleKey: "bodyRegular",
                            children: r.formatMessage(l)
                        }), t ? (0, n.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            style: c,
                            children: r.formatMessage(t)
                        }) : void 0]
                    })]
                })
            }
            let u = {
                position: "relative",
                listStyleType: "none",
                lineHeight: "22px",
                gap: 14,
                paddingInlineStart: 0
            };

            function m(e) {
                let {
                    features: t
                } = e;
                return (0, n.jsx)(i(4458).VP, {
                    style: u,
                    children: t.map((e, t) => (0, n.jsx)(p, { ...e
                    }, t))
                })
            }
        },
        580244: (e, t, i) => {
            i.d(t, {
                l: () => o
            }), i(296540);
            var n = i(474848);
            let l = {
                textWrap: "nowrap"
            };

            function o(e) {
                return (0, n.jsx)(i(746434).E, {
                    style: l,
                    content: "membership_admin" === e.role ? (0, n.jsx)(i(109939).sA, {
                        id: "spacePermissionsSettings.user.membershipAdmin",
                        defaultMessage: "Membership admin"
                    }) : (0, n.jsx)(i(109939).sA, {
                        id: "spacePermissionsSettings.user.workspaceOwner",
                        defaultMessage: "Workspace owner"
                    })
                })
            }
        },
        902777: (e, t, i) => {
            i.d(t, {
                F: () => r
            }), i(296540);
            var n = i(474848);
            let l = {
                    textAlign: "center"
                },
                o = {
                    position: "relative"
                };

            function s({
                onDismiss: e
            }) {
                let t = (0, i(109939).tz)(),
                    a = (0, i(533992).v3)(),
                    r = (0, i(723240).r)(),
                    d = a.currentUser.id,
                    c = (0, i(217844)._)({
                        name: "ai_usage",
                        spaceId: r,
                        userId: d,
                        amount: 1
                    }),
                    p = (0, i(682985).K8)(() => {
                        if (c && "cumulative" === c.limit.type && "unlimited" !== c.limit.total) return c.limit.total - c.limit.current
                    }, [c]),
                    u = (0, i(226309)._3)({
                        spaceId: r
                    }),
                    m = (0, i(192159).i5)(u);
                if (void 0 === p || !(0, i(722371).O9)(m)) return null;
                let f = (0, i(262166).u2)({
                    product: (0, i(192159).AI)(u),
                    intl: t
                });
                return (0, n.jsxs)(i(4458).VP, {
                    gap: 24,
                    paddingInline: 24,
                    paddingTop: 24,
                    paddingBottom: 20,
                    className: "autolayout-fill-width",
                    style: o,
                    children: [(0, n.jsx)(i(582471).Y, {
                        iconAndTitle: p > 0 ? (0, n.jsxs)(i(4458).VP, {
                            gap: 12,
                            alignItems: "center",
                            className: "autolayout-fill-width",
                            style: o,
                            children: [(0, n.jsx)(i(16275).I, {
                                icon: i(396826).aiFaceFillIcon,
                                size: "xl",
                                colorVariant: "secondary"
                            }), (0, n.jsx)(i(111010).D, {
                                styleKey: "titleSmSemibold",
                                colorVariant: "primary",
                                style: l,
                                children: (0, n.jsx)(i(109939).sA, {
                                    id: "ineligibleForAiPurchaseModal.title",
                                    defaultMessage: "You still have {responsesLeft, plural, one {{responsesLeft} free AI response} other {{responsesLeft} free AI responses}}",
                                    values: {
                                        responsesLeft: p
                                    }
                                })
                            })]
                        }) : (0, n.jsx)(i(209590).Z, {
                            iconGroup: i(92168).k,
                            iconColorVariant: "secondary",
                            title: (0, n.jsx)(i(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.title.outOfResponses",
                                defaultMessage: "You’ll be able to purchase AI in {daysLeft, plural, one {{daysLeft} day} other {{daysLeft} days}}",
                                values: {
                                    daysLeft: (0, i(875472).PZ)(m)
                                }
                            })
                        }),
                        description: (0, n.jsx)(i(111010).D, {
                            styleKey: "bodySmRegular",
                            colorVariant: "primary",
                            children: p > 0 ? (0, n.jsx)(i(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.description.responsesLeft",
                                defaultMessage: "You’ll be able to purchase Notion AI after finishing your free {planName} plan trial",
                                values: {
                                    planName: f
                                }
                            }) : (0, n.jsx)(i(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.description",
                                defaultMessage: "Since you’re on a free {planName} plan trial, you can only purchase Notion AI after the trial ends",
                                values: {
                                    planName: f
                                }
                            })
                        })
                    }), (0, n.jsx)(i(591637).a, {
                        layout: "vertical",
                        primaryButtons: [{
                            buttonType: "outline",
                            label: (0, n.jsx)(i(109939).sA, {
                                id: "ineligibleForAiPurchaseModal.primaryAction",
                                defaultMessage: "Got it"
                            }),
                            onClick: e
                        }]
                    }), (0, n.jsx)(i(226512).R, {})]
                })
            }
            async function a(e) {
                return await i(280996).T.showAsyncModal(t => (0, n.jsx)(i(833503).s, {
                    isOpen: t.isOpen,
                    onDismiss: t.onDismiss,
                    onClosed: t.onClosed,
                    areaConstraint: {
                        width: {
                            type: "min",
                            length: 354
                        },
                        height: {
                            type: "unlimited",
                            scroll: "allow"
                        }
                    },
                    animateSizeTransition: !1,
                    children: () => (0, n.jsx)(s, {
                        onDismiss: t.onDismiss,
                        ...e
                    })
                }))
            }
            async function r(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    billingData: l,
                    product: o,
                    from: s,
                    pageSection: r,
                    isTrial: d,
                    isEligibleForAgentBusinessTrial: c,
                    dismissMobilePlansModal: p,
                    postUpgradeCallback: u,
                    campaign: m
                } = e;
                if (n) {
                    if ((0, i(192159).N8)(l)) return void(0, i(613065).cz)();
                    if ("ai" === o && (0, i(192159).TB)(l)) return void a({
                        environment: t
                    });
                    if ("enterprise" === o) {
                        let o = await i(375592).T.awaitData(t, {
                                userId: t.currentUser.id || ""
                            }),
                            s = l && {
                                type: "admin",
                                ...l
                            };
                        if ((0, i(208117).q)({
                                environment: t,
                                externalOrgSummary: o,
                                spaceStore: n,
                                billingData: s
                            })) return void(0, i(613065).lK)({
                            initialQuestion: "interest_in_enterprise",
                            openedFrom: e.from
                        })
                    }
                    if (e.isTrial) return void i(821587).e_({
                        openedFrom: e.from,
                        potentialCampaigns: m && !(0, i(889089).w)(m) ? [m] : [],
                        isEligibleForAgentBusinessTrial: c
                    });
                    if (i(218744).default.checkGate({
                            gateName: "usage_based_pricing_pfa_checks_purchased_credits_enabled"
                        }) && "ai_credit_pack" === o) return void(0, i(82861).x9)();
                    if (null != l && l.subscription && null != l && l.paymentMethod)(0, i(362650).o)(t, {
                        desiredProducts: [o],
                        from: s,
                        analyticsArgs: {
                            from: s,
                            pageSection: r
                        },
                        postUpgradeCallback: u,
                        campaign: m
                    });
                    else {
                        let {
                            subscriptionTier: e,
                            addOnFeature: t
                        } = (0, i(645040).Qt)(o) ? {
                            subscriptionTier: (0, i(192159).AI)(l),
                            addOnFeature: o
                        } : {
                            subscriptionTier: o,
                            addOnFeature: void 0
                        };
                        await (0, i(371151).qI)({
                            subscriptionTier: e,
                            addOnFeature: t,
                            from: s,
                            campaign: m,
                            isTrial: d,
                            dismissMobilePlansModal: p,
                            postUpgradeCallback: u
                        })
                    }
                }
            }
        }
    }
]);