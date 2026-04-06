"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [11528, 22197, 26207, 43239, 85464], {
        11444: (e, t, a) => {
            a.r(t), a.d(t, {
                UISpacePermissionGroupToken: () => i
            });
            var r = a(296540),
                o = a(474848);
            let d = {
                avatarWrapStyle: {
                    width: "none",
                    minHeight: "none",
                    marginInlineEnd: 6
                },
                style0: { ...a(699422).RC
                },
                style1: {
                    margin: 0
                }
            };

            function i(e) {
                let {
                    parentStore: t,
                    style: i,
                    format: n
                } = e, c = e.groupPointer.id, s = e.groupPointer.spaceId, l = (0, a(659341).S4)({
                    spacePermissionGroupId: c,
                    spaceId: s
                }), u = (0, a(682985).K8)(() => e.groupModel ? e.groupModel : t ? a(398652).C.createChildStore(t, l).getModel() : void 0, [t, l, e.groupModel]), f = (0, a(533992).Y0)(), {} = (0, a(960253).I)(() => ({
                    badgeStyle: {
                        borderRadius: 4,
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        fontSize: a(986939).A.isMobile ? 11 : 9,
                        lineHeight: f.isAndroid ? 1.5 : 1,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em"
                    }
                }), [f]), p = (0, a(109939).tz)(), b = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: p,
                    permissionGroupModel: u
                }), [p, u]), m = (0, r.useCallback)(e => n === a(696654).NY.Inline ? (0, o.jsx)(a(308256).o, {
                    group: u,
                    size: e
                }) : (0, o.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    minWidth: 0,
                    children: [(0, o.jsx)("div", {
                        style: d.avatarWrapStyle,
                        children: (0, o.jsx)(a(308256).o, {
                            group: u,
                            size: e
                        })
                    }), (0, o.jsx)("div", {
                        style: d.style0,
                        children: b
                    })]
                }), [n, u, b]);
                return (0, o.jsx)(a(376921).Ay, { ...e,
                    style: { ...d.style1,
                        ...i
                    },
                    renderAvatar: m
                })
            }
        },
        31319: (e, t, a) => {
            a.d(t, {
                A: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    activeDotStyle: {
                        height: 10,
                        width: 10,
                        backgroundColor: a(632079).Tj.palette.green[400],
                        border: "2px solid white",
                        borderRadius: "50%",
                        position: "absolute",
                        insetInlineStart: 11,
                        top: 11
                    }
                },
                d = function(e) {
                    let {
                        botValue: t,
                        botStore: d,
                        showActiveDot: i,
                        style: n,
                        size: c
                    } = e, s = (0, a(109939).tz)(), l = (0, a(682985).K8)(() => {
                        if (d) {
                            let e = d.getIcon();
                            if (e) return {
                                pointer: {
                                    table: a(832375).GPl,
                                    id: d.id,
                                    spaceId: d.getSpaceId()
                                },
                                icon: e
                            }
                        } else if (null != t && t.icon) return {
                            pointer: {
                                table: a(832375).GPl,
                                id: t.id,
                                spaceId: t.space_id
                            },
                            icon: t.icon
                        }
                    }, [d, t]), u = (0, a(682985).K8)(() => (null == d ? void 0 : d.getDisplayName(s)) ? ? (0, a(697006).Hg)(t), [d, t, s]);
                    return (0, r.jsxs)("div", {
                        style: n,
                        children: [(0, r.jsx)(a(569553).B6, {
                            icon: l,
                            title: u,
                            size: c || 18,
                            disabled: !0,
                            isEmptyPage: !1,
                            useInvertedColors: !0
                        }), i ? (0, r.jsx)("div", {
                            style: o.activeDotStyle
                        }) : void 0]
                    })
                }
        },
        34824: (e, t, a) => {
            a.d(t, {
                G: () => c,
                e: () => i
            });
            var r, o = a(296540),
                d = a(474848);
            let i = ((r = {})[r.Name = 0] = "Name", r),
                n = {
                    propertyIcon: {
                        fill: a(632079).Tj.icon.primary,
                        marginInlineStart: 6,
                        marginInlineEnd: 2
                    }
                },
                c = o.forwardRef(function(e, t) {
                    let {
                        propertySchema: r,
                        format: o
                    } = e, {
                        name: c,
                        type: s,
                        icon: l
                    } = r, u = (0, a(960253).e)(), f = o === i.Name ? c : a(799514).dC[s];
                    return (0, d.jsx)(a(95582).A, {
                        title: f,
                        icon: (0, d.jsx)(a(221535).zB, {
                            icon: l,
                            type: s,
                            size: a(986939).A.isMobile ? 18 : 16,
                            theme: a(632079).Tj,
                            themeMode: u,
                            style: n.propertyIcon
                        }),
                        ...e
                    })
                })
        },
        36772: (e, t, a) => {
            a.d(t, {
                A: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    lineHeight: 1.4
                },
                d = function(e) {
                    if (a(986939).A.isMobile)
                        if (e.propertySchema) return (0, r.jsx)(a(34824).G, {
                            propertySchema: e.propertySchema,
                            onClick: e.onClick,
                            focused: !1,
                            format: a(34824).e.Name,
                            showExtensionArrow: !e.disabled
                        });
                        else return (0, r.jsx)(a(95582).A, {
                            focused: !1,
                            title: (0, r.jsx)(a(109939).sA, {
                                defaultMessage: "Property",
                                id: "database.mobileFilterAndSortMenu.property.buttonMenuItem.label"
                            })
                        }); {
                        let t = e.propertySchema && (0, r.jsx)(a(151710).mA, {
                                propertySchema: e.propertySchema,
                                showIcon: !0,
                                style: o
                            }),
                            d = (0, r.jsx)(a(109939).sA, {
                                defaultMessage: "Property",
                                id: "database.filterAndSortMenu.propertyButton.label"
                            });
                        return (0, r.jsx)(a(332082).A, {
                            title: t,
                            placeholder: d,
                            onClick: e.onClick,
                            disabled: e.disabled,
                            disableMargins: e.disableMargins,
                            desktopStyle: e.textWrapperStyle
                        })
                    }
                }
        },
        47187: (e, t, a) => {
            a.d(t, {
                E: () => r
            });

            function r(e) {
                let {
                    size: t,
                    style: r
                } = e;
                return (0, a(960253).I)(() => ({
                    icon: {
                        width: .6 * t,
                        height: .6 * t,
                        fill: a(632079).Tj.text.secondary
                    },
                    iconContainer: {
                        width: t,
                        height: t,
                        borderRadius: "100%",
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...r
                    }
                }), [t, r])
            }
        },
        59651: (e, t, a) => {
            a.d(t, {
                l: () => o
            });
            let r = {
                [a(49361).e1]: "collection_connected_property_figma",
                [a(49361).Hd]: "collection_connected_property_google_drive",
                [a(49361).ob]: "collection_connected_property_github",
                [a(49361).k0]: "collection_connected_property_zendesk",
                [a(49361).bh]: "collection_synced_database_github",
                [a(49361).MN]: "collection_synced_database_asana",
                [a(49361).Fo]: "collection_synced_database_gitlab",
                [a(49361).me]: "collection_synced_database_jira",
                [a(49361).F6]: "collection_synced_database_jira_workspace",
                [a(49361).Fv]: "collection_synced_database_jira_datacenter",
                [a(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function o(e) {
                if (e) return r[e]
            }
        },
        59724: (e, t, a) => {
            a.d(t, {
                A: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    style0: { ...a(699422).RC
                    }
                },
                d = function(e) {
                    let {
                        botStore: t,
                        avatarSize: d,
                        shouldShowBadge: i,
                        style: n,
                        inline: c
                    } = e, s = (0, a(109939).tz)(), l = (0, a(533992).Y0)(), u = (0, a(682985).K8)(() => null == t ? void 0 : t.getDisplayName(s), [t, s]), {
                        outerStyle: f,
                        avatarWrapStyle: p,
                        badgeStyle: b
                    } = (0, a(960253).I)(() => ({
                        outerStyle: {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...n
                        },
                        avatarWrapStyle: c ? {
                            width: "none",
                            minHeight: "none",
                            marginInlineEnd: 6
                        } : {
                            marginInlineEnd: 6
                        },
                        badgeStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: a(632079).Tj.text.secondary,
                            background: a(632079).Tj.background.tertiaryTranslucent,
                            fontSize: a(986939).A.isMobile ? 11 : 9,
                            lineHeight: l.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginInlineStart: 8,
                            marginTop: 1
                        }
                    }), [n, c, l]);
                    return (0, r.jsxs)("div", {
                        style: f,
                        children: [(0, r.jsx)("div", {
                            style: p,
                            children: (0, r.jsx)(a(31319).A, {
                                botStore: t,
                                size: d
                            })
                        }), (0, r.jsx)("div", {
                            style: o.style0,
                            children: u
                        }), i ? (0, r.jsx)("div", {
                            style: b,
                            children: "Bot"
                        }) : void 0]
                    })
                }
        },
        69118: (e, t, a) => {
            a.d(t, {
                H: () => r
            });
            let r = 52
        },
        72461: (e, t, a) => {
            a.d(t, {
                Ay: () => i,
                t_: () => n,
                v7: () => c
            }), a(296540);
            var r = a(474848);

            function o(e) {
                let t = (0, a(533992).v3)(),
                    {
                        actor: o,
                        format: i,
                        hasTooltip: n,
                        tooltipHeader: c,
                        hasPersonHoverCard: s,
                        spaceStore: l
                    } = e,
                    u = (0, a(682985).K8)(() => {
                        let e = o.asActor;
                        if (e) return (0, a(478418).J)(t, e)
                    }, [o, t]);
                return (0, r.jsx)(a(376921).Ay, { ...e,
                    renderAvatar: t => {
                        if (!u) return (0, r.jsx)(a(4458).fI, {
                            alignItems: "center",
                            height: t,
                            children: (0, r.jsx)("div", {
                                style: {
                                    height: t / 2,
                                    width: 100,
                                    borderRadius: t / 2,
                                    background: a(632079).Tj.background.tertiaryTranslucent
                                }
                            })
                        });
                        if (u instanceof a(447003).v)
                            if (i === a(696654).NY.Inline) return (0, r.jsx)(a(31319).A, {
                                botStore: u,
                                size: t,
                                style: d
                            });
                            else return (0, r.jsx)(a(59724).A, {
                                botStore: u,
                                avatarSize: t,
                                inline: !0,
                                style: d
                            });
                        if (u instanceof a(807825).L)
                            if (i === a(696654).NY.Inline) return (0, r.jsx)(a(321753).A, {
                                userStore: u,
                                size: t,
                                avatarShouldShowShadow: !1,
                                hasTooltip: n ? ? !0,
                                style: d,
                                tooltipHeader: c,
                                hasPersonHoverCard: s
                            });
                            else return (0, r.jsx)(a(980494).A, {
                                userStore: u,
                                avatarSize: t,
                                inline: !0,
                                hasTooltip: n,
                                hasPersonHoverCard: s,
                                style: d,
                                tooltipHeader: c,
                                spaceStore: l,
                                personHoverCardEntrypoint: s ? e.personHoverCardEntrypoint : void 0
                            });
                        (0, a(722371).HB)(u)
                    }
                })
            }
            let d = {
                minWidth: 0
            };
            o.Format = a(696654).NY;
            let i = o;

            function n(e) {
                let {
                    userValue: t,
                    ...d
                } = e, i = (0, a(197018).MR)(t);
                return (0, r.jsx)(o, {
                    actor: i,
                    ...d
                })
            }

            function c(e) {
                let {
                    botValue: t,
                    ...d
                } = e;
                return (0, r.jsx)(o, {
                    actor: (0, a(197018).oC)(t),
                    hasPersonHoverCard: !1,
                    ...d
                })
            }
            n.Format = a(376921).mI, c.Format = a(376921).mI
        },
        73888: (e, t, a) => {
            a.d(t, {
                y: () => r
            }), a(944114), a(898992), a(354520), a(803949), a(581454);

            function r(e) {
                let {
                    environment: t,
                    transaction: r,
                    spaceStore: o,
                    actors: d,
                    metadata: i
                } = e;
                if (!o.isDefined()) return !1;
                let n = o.id,
                    c = d.filter(e => "user" === e.type).map(e => ({
                        id: (0, a(729052).yO)({
                            spaceId: n,
                            userId: e.userId
                        }),
                        space_id: n,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    s = d.filter(e => "bot" === e.type).map(e => {
                        var t, r;
                        return {
                            id: (0, a(611042).YS)({
                                spaceId: o.id,
                                botId: e.botId
                            }),
                            space_id: n,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (r = e.parent) ? void 0 : r.table,
                            membership_type: e.membershipType
                        }
                    });
                return c.map(e => [e, a(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).dp)(o, e.user_id),
                    operation: t,
                    transaction: r
                })), s.map(e => [e, a(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).Ts)(o, e.bot_id),
                    operation: t,
                    transaction: r
                })), r.postSubmitCallbacks.push(async r => {
                    var n, l;
                    let u = d.map(e => (0, a(283161).z)(e));
                    a(594311).Ah({
                        status: r ? "fail" : "success",
                        location: null == i ? void 0 : i.pagePermissionChangeLocation,
                        permission_items: u
                    }), c.forEach(e => {
                        a(594311).sY({
                            spaceUser: e,
                            from: null == i ? void 0 : i.from,
                            status: r ? "fail" : "success"
                        })
                    }), s.forEach(e => {
                        a(594311).W7({
                            spaceBot: e,
                            from: null == i ? void 0 : i.from,
                            status: r ? "fail" : "success"
                        })
                    }), null != (n = e.metadata) && n.metric && a(680007).default.DO_NOT_USE_measureLegacy(null == (l = e.metadata) ? void 0 : l.metric, {}), r || await a(371151).nO({
                        environment: t,
                        spaceStore: o
                    })
                }), !0
            }
        },
        79268: (e, t, a) => {
            a.d(t, {
                C: () => o
            });
            var r = a(296540);

            function o({
                upsell: e,
                source: t,
                buttonDisplayType: d,
                onClickBeforeUpgradeAction: i,
                postUpgradeCallback: n,
                spaceStore: c
            }) {
                let s = (0, a(533992).v3)(),
                    l = (0, a(855021).q)(),
                    u = (0, a(226309)._3)({
                        spaceId: null == c ? void 0 : c.id
                    }),
                    f = (0, a(345776).T)(),
                    {
                        campaign: p,
                        loading: b
                    } = (0, a(435276).V)(t),
                    [m, I] = function(e) {
                        let {
                            upsell: t
                        } = e, o = (0, a(533992).v3)(), d = (0, a(972740).L)(), i = (0, a(993077).U2)(), n = null == d ? void 0 : d.id, c = (0, a(345776).T)(), s = (0, a(226309).lh)({
                            spaceId: n
                        }), l = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, u = (0, a(682985).K8)(() => {
                            if (n) return a(477870).L.getData(o, {
                                spaceId: n
                            })
                        }, [o, n]), f = (0, a(682985).K8)(() => (0, a(966458).Jg)({
                            product: l,
                            userId: c,
                            billingData: s,
                            spaceStore: d,
                            spaceUserStore: i,
                            existingRequests: u
                        }), [l, c, s, d, i, u]), [p, b] = (0, r.useState)(f);
                        return (0, r.useEffect)(() => {
                            b(f)
                        }, [f]), [p, b]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    v = (0, a(682985).K8)(() => e ? (0, a(96495).a)({
                        environment: s,
                        upsell: e,
                        spaceStore: c,
                        salesStatus: l,
                        campaign: p,
                        requestState: m,
                        billingData: u,
                        source: t,
                        loading: b
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [c, s, e, l, p, m, u, t, b]),
                    h = (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = "product" === e.type ? e.product : void 0,
                            o = (0, a(555676).x)();
                        if (!o) return;
                        let [, {
                            getUpgradeSystemAction: l
                        }] = await Promise.all([null == i ? void 0 : i(), o()]), b = l(v);
                        await b({
                            source: t,
                            spaceStore: c,
                            product: r,
                            billingData: u,
                            environment: s,
                            setRequestState: I,
                            userId: f,
                            buttonDisplayType: d,
                            postUpgradeCallback: n,
                            campaign: p,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, i, v, t, c, u, s, I, f, d, n, p]);
                return {
                    upgradeEligibility: v,
                    handleClick: h
                }
            }
        },
        151710: (e, t, a) => {
            a.d(t, {
                Jv: () => s,
                Rl: () => l,
                mA: () => c
            });
            var r = a(296540),
                o = a(474848);
            let d = {
                    padding: "1px 4px",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 1
                },
                i = function() {
                    return (0, o.jsx)(a(746434).E, {
                        color: "purple",
                        style: d,
                        content: (0, o.jsx)(a(109939).sA, {
                            defaultMessage: "AI",
                            id: "database.property.aiAutofillEnabledIndicator"
                        })
                    })
                },
                n = {
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 8,
                    width: 12,
                    height: 12,
                    borderRadius: 12,
                    background: "transparent",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                },
                c = r.memo(function(e) {
                    let {
                        badge: t,
                        className: r,
                        dragHandleStyle: d,
                        hideName: i,
                        iconSize: c,
                        iconStyle: s,
                        labelSizeVariant: u,
                        propertySchema: f,
                        showDragIcon: p,
                        showIcon: b,
                        style: m,
                        textRef: I
                    } = e, v = (0, a(960253).I)(() => ({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "120%",
                            minWidth: 0,
                            fontSize: a(986939).A.isMobile ? 16 : 14,
                            gap: "small" === u ? 2 : 6,
                            ...m
                        },
                        iconWrapper: {
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "center",
                            position: e.showIntegrationIconOverlay ? "relative" : void 0,
                            ...s
                        },
                        dragHandle: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!!p,
                            transition: `opacity ${a(153262).bM}`
                        },
                        itemIcon: {
                            gridColumn: 1,
                            gridRow: 1,
                            opacity: +!p,
                            transition: `opacity ${a(153262).bM}`
                        }
                    }), [s, u, p, m, e.showIntegrationIconOverlay]);
                    return (0, o.jsxs)("div", {
                        className: r,
                        style: v.container,
                        children: [b ? (0, o.jsxs)("div", {
                            style: v.iconWrapper,
                            children: [(0, o.jsx)("div", {
                                style: v.itemIcon,
                                children: (0, o.jsx)(l, {
                                    propertySchema: f,
                                    iconSize: c,
                                    iconStyle: s
                                })
                            }), e.showIntegrationIconOverlay ? (0, o.jsx)("div", {
                                style: n,
                                children: e.showIntegrationIconOverlay
                            }) : void 0, (0, o.jsx)("div", {
                                style: v.dragHandle,
                                children: (0, o.jsx)(a(544954).t, {
                                    wrapperStyle: d
                                })
                            })]
                        }) : void 0, i ? void 0 : (0, o.jsx)("div", {
                            ref: I,
                            style: a(699422).RC,
                            children: f.name
                        }), t]
                    })
                });

            function s(e) {
                let {
                    propertySchema: t
                } = e, r = a(9247).YE(t), {
                    shouldShowLegacyAutofill: d
                } = (0, a(251955).D)({
                    aiInference: r
                });
                return (0, a(682985).K8)(() => (0, a(576348).O0)() && a(9247).$M(t) && a(9247).om(t) && d, [d, t]) ? (0, o.jsx)(i, {}) : null
            }

            function l(e) {
                let {
                    propertySchema: t,
                    iconSize: r,
                    iconStyle: d
                } = e, i = (0, a(960253).e)(), n = a(986939).A.isMobile ? 18 : 16;
                return (0, o.jsx)(a(221535).zB, {
                    type: t.type,
                    icon: t.icon,
                    size: r || n,
                    theme: a(632079).Tj,
                    themeMode: i,
                    style: d
                })
            }
        },
        153262: (e, t, a) => {
            a.d(t, {
                Jg: () => o,
                bM: () => r,
                hG: () => d,
                ic: () => i
            });
            let r = "150ms ease";

            function o() {
                return {
                    borderRadius: 6
                }
            }
            let d = a(986939).A.isMobile ? {} : { ...o(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${r}`
            };

            function i() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        156379: (e, t, a) => {
            a.d(t, {
                L: () => o
            }), a(296540);
            var r = a(474848);

            function o() {
                return (0, r.jsx)(a(746434).E, {
                    content: (0, r.jsx)(a(109939).sA, {
                        id: "spaceUserMembershipType.restrictedMember",
                        defaultMessage: "Restricted"
                    }),
                    color: "yellow"
                })
            }
        },
        200261: (e, t, a) => {
            a.d(t, {
                A: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                d = function() {
                    return (0, r.jsx)(a(636518).Ay, {
                        title: (0, r.jsx)(a(517334).k, {
                            size: "default"
                        }),
                        titleStyle: o
                    })
                }
        },
        233305: (e, t, a) => {
            a.d(t, {
                N: () => d
            });
            var r = a(296540),
                o = a(474848);

            function d({
                source: e,
                upsell: t,
                isDisabled: i,
                title: n,
                onClickBeforeUpgradeAction: c,
                postUpgradeCallback: s,
                hoverRef: l,
                tooltipMessage: u,
                tooltipPlacement: f,
                buttonMenuItemProps: p,
                display: b = "icon",
                customMessages: m,
                featureName: I,
                spaceStore: v
            }) {
                var h;
                let g = (0, a(109939).tz)(),
                    {
                        onClick: y,
                        focused: w,
                        ...x
                    } = p ? ? {},
                    S = t && "none" !== t.type,
                    {
                        upgradeEligibility: R,
                        handleClick: j
                    } = (0, a(79268).C)({
                        upsell: t,
                        source: e,
                        onClickBeforeUpgradeAction: c,
                        postUpgradeCallback: s,
                        spaceStore: v
                    }),
                    A = (0, a(156139).e)(R.status),
                    T = (0, r.useMemo)(() => S ? "text" === b ? (0, o.jsx)(a(268627).c, {
                        upgradeStatus: R.status,
                        handleClick: j,
                        upsell: t,
                        hoverRef: l,
                        customMessages: m,
                        featureName: I
                    }) : (0, o.jsx)(a(740957).c, {
                        upgradeStatus: R.status,
                        handleClick: j,
                        upsell: t,
                        hoverRef: l,
                        showPlanName: !0,
                        customMessages: m,
                        featureName: I
                    }) : null, [S, b, R.status, j, t, l, m, I]),
                    M = (0, r.useCallback)(e => {
                        if (!i) {
                            if (!t || "none" === t.type) {
                                null == y || y(e);
                                return
                            }
                            j()
                        }
                    }, [i, t, j, y]);
                return (0, o.jsx)(a(551942).T, {
                    tooltipMessage: i && t ? null == (h = A.disabledTooltip) ? void 0 : h.call(A, {
                        intl: g,
                        upsell: t
                    }) : u,
                    placement: f,
                    children: (0, o.jsx)(a(95582).A, { ...x,
                        focused: !!w,
                        title: n({
                            upgradeLabel: T
                        }),
                        onClick: M
                    })
                })
            }
        },
        246467: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var r = a(296540),
                o = a(474848);
            let d = {
                    display: "inline-block",
                    width: "1.2em",
                    marginInlineStart: 5,
                    marginInlineEnd: 2,
                    paddingBottom: 3,
                    verticalAlign: "middle"
                },
                i = function(e) {
                    let t, i = (0, a(109939).tz)(),
                        c = (0, a(75272).I)(),
                        s = (0, r.useRef)(),
                        l = (0, r.useCallback)(() => {
                            let t = e.value;
                            if (!t) return;
                            let r = a(25825).q8(t, (0, a(714350).P)());
                            if (!r) return;
                            let o = r.valueOf(),
                                d = o - Date.now();
                            d < 0 || d > a(627179).nD || s.current && s.current.timestamp === o || (s.current && clearTimeout(s.current.timer), s.current = {
                                timestamp: o,
                                timer: setTimeout(() => c("DateBox", "DateBox/createReminderTimer"), d)
                            })
                        }, [c, e.value]),
                        u = (0, r.useCallback)(() => {
                            s.current && (clearTimeout(s.current.timer), s.current = void 0)
                        }, []);
                    (0, r.useEffect)(() => {
                        l()
                    }, [l]), (0, r.useEffect)(() => () => {
                        u()
                    }, [u]);
                    let {
                        value: f,
                        withComma: p
                    } = e, b = (0, a(682985).K8)(() => f ? (0, a(850640).ZF)({
                        value: f,
                        date_format: e.dateFormat,
                        time_format: e.timeFormat,
                        userTimeZone: (0, a(714350).P)(),
                        allowRelativeDates: !0,
                        intl: i,
                        shortenDateAndRange: e.shortenDateAndRange,
                        displayInUserTimezone: e.displayInUserTimezone,
                        getToday: a(132315).x1
                    }) : void 0, [i, e.dateFormat, e.displayInUserTimezone, e.shortenDateAndRange, e.timeFormat, f]);
                    if (!f) return null;
                    let m = a(25825).AA(f, (0, a(714350).P)(), a(849917).locale);
                    (0, a(943003).Lh)(f) && (t = a(25825).Zs(f, (0, a(714350).P)()) ? {
                        color: a(632079).Tj.red.text.accentPrimary
                    } : {
                        color: a(632079).Tj.blue.text.accentPrimary
                    });
                    let I = (0, o.jsxs)(o.Fragment, {
                        children: [b, (0, a(943003).Lh)(f) ? (0, o.jsx)(a(16275).I, {
                            icon: a(848194).alarmSmallIcon,
                            style: d
                        }) : void 0, p ? ", " : null]
                    });
                    return e.disableTooltip ? (0, o.jsx)("div", {
                        className: e.className,
                        style: { ...e.style,
                            ...t
                        },
                        children: I
                    }) : (0, o.jsx)(a(51831).m, {
                        content: () => (0, o.jsxs)(o.Fragment, {
                            children: [e.tooltipHeader, (0, o.jsxs)("div", {
                                style: e.tooltipHeader ? {
                                    color: a(632079).Tj.text.inverseSecondary
                                } : {},
                                children: [n(m.start), m.end ? ` → ${n(m.end)}` : ""]
                            })]
                        }),
                        placement: e.tooltipPlacement,
                        children: a => (0, o.jsx)("div", {
                            className: e.className,
                            style: { ...e.style,
                                ...t
                            },
                            ...a,
                            children: I
                        })
                    })
                };

            function n(e) {
                return (0, a(850640).eV)({
                    value: e,
                    preset: "medium"
                })
            }
        },
        251955: (e, t, a) => {
            function r(e) {
                let {
                    aiInference: t
                } = e;
                return o({
                    isDatabaseAgentsEnabled: (0, a(551408).A)(),
                    aiInference: t
                })
            }

            function o(e) {
                let {
                    isDatabaseAgentsEnabled: t,
                    aiInference: a
                } = e;
                if (!t) return {
                    shouldShowDbAgent: !1,
                    shouldShowLegacyAutofill: !0
                };
                let r = !!a && !a.is_migrated;
                return {
                    shouldShowDbAgent: !r,
                    shouldShowLegacyAutofill: r
                }
            }
            a.d(t, {
                D: () => r,
                a: () => o
            })
        },
        253092: (e, t, a) => {
            a.r(t), a.d(t, {
                alarmIcon: () => d,
                iconDefinition: () => o
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.91 0.78 16.18 16.85",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M5.791 1.886a.625.625 0 1 0-.801-.96L2.138 3.31a.625.625 0 1 0 .802.96zm4.834 3.839a.625.625 0 1 0-1.25 0v3.65H6.4a.625.625 0 0 0 0 1.25H10c.345 0 .625-.28.625-.625z"
                        }), (0, r.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0M14.13 1.006a.625.625 0 0 0 .079.88l2.851 2.383a.625.625 0 1 0 .802-.96L15.01.927a.625.625 0 0 0-.88.079"
                        })]
                    })
                },
                d = (0, a(104509).wt)("alarm", o, "default")
        },
        283161: (e, t, a) => {
            a.d(t, {
                z: () => r
            });

            function r(e) {
                return "user" === e.type ? {
                    type: "user_permission",
                    role: (0, a(729052).ps)(e.membershipType),
                    user_id: e.userId,
                    invite_id: e.inviteId
                } : "bot" === e.type ? {
                    type: "bot_permission",
                    role: (0, a(611042).rf)(e.membershipType),
                    bot_id: e.botId
                } : void(0, a(722371).HB)(e)
            }
        },
        308256: (e, t, a) => {
            a.d(t, {
                o: () => o
            }), a(296540);
            var r = a(474848);

            function o(e) {
                let {
                    group: t
                } = e, o = e.size ? ? 20, d = (0, a(109939).tz)(), i = (0, a(682985).K8)(() => {
                    if (t && t.icon) return {
                        pointer: t.pointer,
                        icon: t.icon
                    }
                }, [t]), n = (0, a(682985).K8)(() => (0, a(95384).n)({
                    intl: d,
                    permissionGroupModel: t
                }), [d, t]);
                return (0, r.jsx)("div", {
                    children: i ? (0, r.jsx)(a(569553).B6, {
                        disabled: !0,
                        size: o,
                        icon: i,
                        isEmptyPage: !1,
                        title: n
                    }) : (0, r.jsx)(a(391343).A, {
                        size: o
                    })
                })
            }
        },
        310324: (e, t, a) => {
            a.d(t, {
                Ay: () => p,
                KF: () => f,
                LG: () => n,
                Zf: () => s,
                yD: () => c
            });
            var r = a(296540),
                o = a(474848);
            let d = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                i = r.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: i,
                    preventCaptureSpacebarWhenEmpty: n,
                    ...c
                }, s) {
                    let {
                        left: l,
                        right: u,
                        inputLeft: f,
                        inputRight: p,
                        inputRightStyle: b,
                        disableInput: m,
                        inputOuterStyle: v,
                        rightMobileEditLabel: g,
                        mobileKeyboardOnDismiss: y,
                        style: w,
                        value: x,
                        onChange: S,
                        autosize: R,
                        autosizeMinHeight: j,
                        autosizeMaxHeight: A,
                        customElementAttributes: T,
                        disabled: M,
                        format: k,
                        id: E,
                        placeholder: _,
                        type: D,
                        autoFocus: z,
                        focus: Q,
                        focusInitial: C,
                        focusAfterAnimation: B,
                        forceShowClearButton: P,
                        ignoreKeyboardMode: L,
                        inputElementAttributes: N,
                        inputStyle: F,
                        isRightLastElementOfInput: H,
                        maxlength: U,
                        min: K,
                        max: V,
                        selectAll: O,
                        showClearButton: W,
                        suppressFocusRing: G,
                        textarea: Y,
                        textareaSubmitOnEnter: q,
                        onBlur: Z,
                        onCancel: $,
                        onClearButtonClick: J,
                        onClick: X,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: ea,
                        ...er
                    } = c, [eo, ed] = (0, r.useState)(() => !!(Q || C));
                    (0, r.useEffect)(() => {
                        void 0 !== Q && ed(Q)
                    }, [Q]);
                    let ei = e ? void 0 : a(763230).D_,
                        en = !t || x.length > 0 ? a(763230).D_ : void 0,
                        ec = i ? void 0 : a(763230).D_,
                        es = !n || x.length > 0 ? a(763230).D_ : void 0,
                        el = (0, a(649476).Tf)(),
                        eu = (0, r.useContext)(a(649476).xu),
                        ef = (0, r.useRef)(null),
                        ep = {
                            value: x,
                            onChange: S,
                            autosize: R,
                            autosizeMinHeight: j,
                            autosizeMaxHeight: A,
                            customElementAttributes: T,
                            disabled: M,
                            format: k,
                            id: E,
                            placeholder: _,
                            type: D,
                            autoFocus: z,
                            focus: Q,
                            focusInitial: C,
                            focusAfterAnimation: B,
                            forceShowClearButton: P,
                            ignoreKeyboardMode: L,
                            inputElementAttributes: N,
                            inputStyle: F,
                            isRightLastElementOfInput: H,
                            maxlength: U,
                            min: K,
                            max: V,
                            selectAll: O,
                            showClearButton: W,
                            suppressFocusRing: G,
                            textarea: Y,
                            textareaSubmitOnEnter: q,
                            onBlur: Z,
                            onCancel: $,
                            onClearButtonClick: J,
                            onClick: X,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: ea
                        };
                    return (0, o.jsx)(a(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: a(763230).D_,
                        onTab: a(763230).D_,
                        onSelectAll: a(763230).D_,
                        onRedo: a(763230).D_,
                        onUndo: a(763230).D_,
                        onToggleBold: a(763230).D_,
                        onToggleItalics: a(763230).D_,
                        onToggleCode: a(763230).D_,
                        onCut: ec,
                        onCopy: ec,
                        onPaste: ec,
                        onKeypress: a(763230).D_,
                        onLeft: ei,
                        onRight: ei,
                        onDelete: en,
                        onBackspace: en,
                        onSpace: es,
                        children: a(986939).A.isMobile ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(a(636518).Ay, {
                                ref: s,
                                ...er,
                                itemMarginLeft: el ? 8 : void 0,
                                style: w,
                                title: (0, o.jsx)(h, {
                                    ref: ef,
                                    left: l,
                                    right: u,
                                    inputLeft: f,
                                    inputRight: p,
                                    inputRightStyle: b,
                                    disableInput: m,
                                    inputOuterStyle: v,
                                    rightMobileEditLabel: g,
                                    isFocused: eo,
                                    setIsFocused: ed,
                                    ...ep
                                })
                            }), (0, o.jsx)(a(368678).P, {
                                show: eo && eu.menuType !== a(649476).gu.ActionSheet,
                                onDismiss: y,
                                inputRef: ef
                            })]
                        }) : (0, o.jsx)(a(636518).Ay, {
                            ref: s,
                            ...er,
                            left: l,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, o.jsx)(I, {
                                ref: ef,
                                disableInput: m,
                                inputOuterStyle: v,
                                inputRight: p,
                                inputRightStyle: b,
                                inputLeft: f,
                                ...ep
                            }),
                            style: { ...d,
                                ...w
                            }
                        })
                    })
                }),
                n = 30,
                c = 28;

            function s(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: a(632079).Tj.icon.secondary,
                    width: a(104509).Ev.sm,
                    height: a(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let l = {
                    outlineButtonHovered: {
                        background: a(632079).Tj.background.secondary
                    }
                },
                u = (0, a(64960)._S)({
                    color: a(632079).Tj.background.primary
                });

            function f(e) {
                let t = (0, a(533992).WS)(),
                    r = (0, a(960253).I)(() => ({
                        outlineButton: { ...(0, a(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: a(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${a(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? a(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, o.jsx)(a(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...r.outlineButton,
                        ...e.style,
                        height: t ? n : c,
                        width: t ? n : c
                    },
                    hoveredStyle: l.outlineButtonHovered,
                    pressedStyle: r.outlineButtonPressed
                })
            }
            let p = i,
                b = {
                    style0: {
                        color: a(632079).Tj.text.secondary
                    }
                };

            function m({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let d = (0, a(533992).v3)(),
                    i = (0, r.useCallback)(e => {
                        e.preventDefault();
                        let r = t.current;
                        r && (0, a(862215).G)(d, r)
                    }, [d, t]);
                return (0, o.jsx)(a(64960).Ay, {
                    onClick: i,
                    style: b.style0,
                    children: e
                })
            }
            let I = r.forwardRef(function(e, t) {
                    let {
                        disabled: r,
                        disableInput: d,
                        inputOuterStyle: i,
                        inputRight: n,
                        inputRightStyle: c,
                        inputLeft: s,
                        min: l,
                        textarea: u,
                        ...f
                    } = e;
                    return (0, o.jsx)(a(36481).p, { ...f,
                        ref: t,
                        disabled: r || d,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...i
                        },
                        left: s,
                        right: n,
                        rightStyle: c,
                        min: l,
                        textarea: u
                    })
                }),
                v = {
                    fontSize: 16
                },
                h = r.forwardRef(function(e, t) {
                    let {
                        left: d,
                        right: i,
                        inputLeft: n,
                        inputRight: c,
                        inputRightStyle: s,
                        disableInput: l,
                        inputOuterStyle: u,
                        rightMobileEditLabel: f,
                        isFocused: p,
                        setIsFocused: b,
                        disabled: I,
                        showClearButton: h,
                        onBlur: g,
                        onFocus: y,
                        ...w
                    } = e, x = (0, r.useCallback)(e => {
                        b(!1), g && g(e)
                    }, [g, b]), S = (0, r.useCallback)(e => {
                        b(!0), y && y(e)
                    }, [y, b]), R = (0, r.useRef)(null), j = (0, a(421573).A)(R, t), A = f && !p ? (0, o.jsx)(m, {
                        rightMobileEditLabel: f,
                        inputRef: R
                    }) : null;
                    return (0, o.jsx)(a(36481).p, { ...w,
                        ref: j,
                        format: "transparent",
                        style: { ...v,
                            ...u
                        },
                        onFocus: S,
                        onBlur: x,
                        showClearButton: !1 !== h,
                        disabled: I || l,
                        left: n || d,
                        right: A || c || i,
                        rightStyle: s
                    })
                })
        },
        322095: (e, t, a) => {
            function r(e, t) {
                return e.map(e => o(e, t))
            }

            function o(e, t) {
                var r, o;
                let d, {
                        nameMessage: i,
                        descriptionMessage: n,
                        ...c
                    } = e,
                    {
                        rootId: s,
                        previewRootId: l,
                        spaceId: u
                    } = (r = e, o = t, d = (0, a(599412).H)(o), r.sources[d] || r.sources[a(599412).q]);
                return { ...c,
                    id: i.id,
                    rootId: s,
                    spaceId: u,
                    previewRootId: l,
                    name: t.formatMessage(i),
                    description: n ? t.formatMessage(n) : void 0
                }
            }
            a.d(t, {
                B: () => o,
                o: () => r
            }), a(581454)
        },
        366318: (e, t, a) => {
            a.d(t, {
                S: () => r
            });

            function r(e) {
                return (0, a(682985).K8)(() => {
                    if (!(0, a(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === a(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        368678: (e, t, a) => {
            a.d(t, {
                P: () => i
            });
            var r = a(296540),
                o = a(474848);
            let d = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: a(632079).Tj.blue.text.accentPrimary,
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function i(e) {
                let {
                    onDismiss: t,
                    inputRef: i
                } = e, n = (0, a(533992).Y0)(), c = (0, r.useRef)(null), s = n.isMobileNative && n.isIOS, l = s && e.show;
                (0, a(336494).b)(a(651748).A, () => ({
                    getNode: () => c.current,
                    isShown: () => l
                }), [l]);
                let u = (0, a(571354).n)(),
                    f = (0, r.useCallback)(() => {
                        var e;
                        null == i || null == (e = i.current) || e.focus(), t && t();
                        let a = document.activeElement;
                        a instanceof HTMLElement && a.blur()
                    }, [i, t]);
                if (!s) return null;
                let p = l ? -(a(247800).j + u) : 0;
                return (0, o.jsx)(a(114596).O, {
                    open: !0,
                    children: (0, o.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: a(247800).j,
                            display: l ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: a(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${p}px)`,
                            transition: l ? "ease-out" : "ease-in",
                            boxShadow: l ? `
								0 -1px 0 ${a(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: c,
                        children: (0, o.jsx)(a(64960).Ay, {
                            style: d.style0,
                            onTouchEnd: () => {
                                f()
                            },
                            children: (0, o.jsx)(a(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        374241: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftSmallIcon: () => o,
                iconDefinition: () => r
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                o = (0, a(104509).wt)("arrowStraightLeftSmall", r, "small")
        },
        376921: (e, t, a) => {
            a.d(t, {
                Ay: () => c,
                mI: () => d,
                vb: () => i
            }), a(296540);
            var r = a(474848);
            let o = (0, a(109939).YK)({
                    removeTokenLabel: {
                        defaultMessage: "Remove {title}",
                        id: "uiGenericToken.removeTokenLabel"
                    },
                    removeTokenLabelGeneric: {
                        defaultMessage: "Remove Item",
                        id: "uiGenericToken.removeTokenLabelGeneric"
                    }
                }),
                d = a(696654).NY,
                i = {
                    [a(696654).NY.ExtremeSmall]: {
                        height: 12,
                        fontSize: 10,
                        margin: "0 4px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.ExtraSmall]: {
                        height: 14,
                        fontSize: 12,
                        margin: "0 6px 0 0",
                        marginEditState: "0 6px 0 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 14
                    },
                    [a(696654).NY.Small]: {
                        height: 18,
                        fontSize: 12,
                        margin: "0 6px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 16
                    },
                    [a(696654).NY.CompactEssential]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Medium]: {
                        height: 20,
                        fontSize: 14,
                        margin: "0 10px 6px 0",
                        marginEditState: "0 6px 6px 0",
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20
                    },
                    [a(696654).NY.Inline]: {
                        height: 20,
                        fontSize: 14,
                        closeIconSize: a(104509).Ev.xxs,
                        avatarSize: 20,
                        margin: "0 -5px 0 0",
                        marginEditState: "0 6px 0 0"
                    },
                    [a(696654).NY.Large]: {
                        height: 24,
                        fontSize: 16,
                        margin: "0 8px 8px 0",
                        marginEditState: "0 8px 8px 0",
                        closeIconSize: a(104509).Ev.sm,
                        avatarSize: 24
                    }
                },
                n = {
                    style0: { ...a(699422).RC
                    },
                    style1: {
                        opacity: .5
                    }
                };

            function c({
                avatarSize: e,
                format: t,
                isSingle: d,
                onClickRemove: s,
                renderAvatar: l,
                showRemoveButton: u,
                shouldShrink: f,
                style: p,
                title: b
            }) {
                let m = (0, a(109939).tz)(),
                    {
                        height: I,
                        fontSize: v,
                        margin: h,
                        marginEditState: g,
                        closeIconSize: y,
                        avatarSize: w
                    } = i[t],
                    x = (0, a(960253).I)(() => ({
                        root: {
                            display: "flex",
                            alignItems: "center",
                            flexShrink: +!!f,
                            minWidth: 0,
                            height: I,
                            borderRadius: 6,
                            fontSize: v,
                            lineHeight: "120%",
                            margin: d ? 0 : u ? g : h,
                            ...p
                        }
                    }), [v, I, d, h, g, f, u, p]);
                return (0, r.jsxs)("div", {
                    style: x.root,
                    children: [null == l ? void 0 : l(e ? ? w), (0, r.jsx)("div", {
                        className: "notranslate",
                        style: n.style0,
                        children: b
                    }), u ? (0, r.jsx)(a(64960).Ay, {
                        ariaLabel: void 0 !== b ? m.formatMessage(o.removeTokenLabel, {
                            title: b
                        }) : m.formatMessage(o.removeTokenLabelGeneric),
                        onClick: s,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: I,
                            height: I,
                            marginInlineStart: 2,
                            marginInlineEnd: 2,
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: 6
                        },
                        children: (0, r.jsx)(a(16275).I, {
                            icon: a(519529).xMarkFillSmallIcon,
                            size: y,
                            style: n.style1
                        })
                    }) : null]
                })
            }
        },
        391343: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var r = a(474848);

            function o(e) {
                let t = (0, a(47187).E)(e);
                return (0, r.jsx)("div", {
                    style: t.iconContainer,
                    children: (0, r.jsx)(a(16275).I, {
                        icon: a(407598).peopleFillIcon,
                        size: t.icon.width,
                        colorVariant: "secondary"
                    })
                })
            }
        },
        397900: (e, t, a) => {
            a.r(t), a.d(t, {
                ellipsisIcon: () => o,
                iconDefinition: () => r
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                o = (0, a(104509).wt)("ellipsis", r, "default")
        },
        425749: (e, t, a) => {
            a.d(t, {
                I$: () => i,
                R2: () => s,
                WF: () => c,
                bZ: () => n,
                cE: () => o,
                jX: () => d,
                rz: () => l
            });
            var r = () => a(381453);

            function o(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let d = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function i(e) {
                return !!(void 0 !== e && (0, a(722371).Xk)(d, e))
            }

            function n() {
                let e = (0, a(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: a(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, a(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function c(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let s = [{
                type: "everything"
            }];

            function l(e) {
                for (let t of s)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        428456: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let r = new(a(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }, a = !1) => {
                var r;
                let o = await e.api.callApi({
                    eventName: "getInternalDomains",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                return "success" === o.type ? null == (r = o.data) ? void 0 : r.internalDomainsWithInfo : void 0
            });
            a(202146).exposeDebugValue("InternalDomainsStore", r);
            let o = r
        },
        428602: (e, t, a) => {
            a.d(t, {
                Y: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.25 11.25",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M7.053 6.407a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.893 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286M5.159 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M7.053 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M8.947 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286M10.84 8.3a.643.643 0 1 0 0 1.287.643.643 0 0 0 0-1.286m-5.681 1.894a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286m1.894 0a.643.643 0 1 0 0 1.286.643.643 0 0 0 0-1.286"
                        }), (0, r.jsx)("path", {
                            d: "M4.25 2.375c-1.036 0-1.875.84-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h7.5c1.036 0 1.875-.84 1.875-1.875v-7.5c0-1.036-.84-1.875-1.875-1.875zm-.625 9.375V5.632h8.75v6.118c0 .345-.28.625-.625.625h-7.5a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                d = (0, a(104509).wt)("viewCalendarSmall", o, "small")
        },
        435276: (e, t, a) => {
            a.d(t, {
                V: () => r
            });

            function r(e) {
                let t = (0, a(533992).v3)(),
                    r = (0, a(972740).L)(),
                    {
                        spaceId: o,
                        spaceName: d
                    } = (0, a(682985).K8)(() => r ? {
                        spaceId: r.getSpaceId(),
                        spaceName: (0, a(742197).G)(t, r)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, r]),
                    [{
                        value: i,
                        status: n
                    }] = (0, a(97668).Yb)(async () => {
                        if (!o) return;
                        let r = await (0, a(124094).E)(t, o, e);
                        if (r) return d && (0, a(124094).Z)({
                            environment: t,
                            spaceName: d,
                            campaign: r,
                            entrypoint: e
                        }), r
                    }, [t, o, d, e]);
                return {
                    campaign: i,
                    loading: "pending" === n || "idle" === n
                }
            }
        },
        440605: (e, t, a) => {
            function r(e, t) {
                return e.find(e => e.presets.some(e => e.uri === t))
            }
            a.d(t, {
                B: () => r
            }), a(898992), a(672577), a(737550)
        },
        447364: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => o,
                inviteMemberIcon: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.82 17.13",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h5.845a4.6 4.6 0 0 1-.28-1.25H5.85c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54.761-1.488 2.672-2.626 5.007-2.626.83 0 1.605.144 2.294.395.269-.364.59-.688.952-.96A7.9 7.9 0 0 0 10 11.63"
                        }), (0, r.jsx)("path", {
                            d: "M16 19.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m2.594-3.469a.625.625 0 0 0-.625-.625h-1.375v-1.375a.625.625 0 0 0-1.25 0v1.375h-1.375a.625.625 0 0 0 0 1.25h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375h1.375c.345 0 .625-.28.625-.625"
                        })]
                    })
                },
                d = (0, a(104509).wt)("inviteMember", o, "default")
        },
        451034: (e, t, a) => {
            a.r(t), a.d(t, {
                globeSmallIcon: () => o,
                iconDefinition: () => r
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 1 0 12.1 6.05 6.05 0 0 1 0-12.1m-1.438 6.6c.048 1.194.25 2.247.539 3.016.167.445.353.766.532.967s.304.234.367.234.188-.033.367-.234c.179-.2.365-.522.532-.967.29-.77.491-1.822.54-3.016zm-3.481 0a4.95 4.95 0 0 0 3.326 4.137 5.4 5.4 0 0 1-.336-.734c-.343-.912-.562-2.1-.61-3.403zm7.458 0c-.048 1.303-.267 2.491-.61 3.403q-.15.396-.337.734a4.95 4.95 0 0 0 3.327-4.137zM6.407 3.312A4.95 4.95 0 0 0 3.081 7.45h2.38c.048-1.303.267-2.491.61-3.403q.149-.396.336-.734M8 3.234c-.063 0-.188.033-.367.234-.179.2-.365.523-.532.968-.29.77-.491 1.821-.54 3.015h2.877c-.048-1.194-.25-2.246-.539-3.015-.167-.445-.353-.767-.532-.968S8.063 3.233 8 3.233m1.592.08q.188.336.337.734c.343.912.562 2.1.61 3.403h2.38a4.95 4.95 0 0 0-3.327-4.137"
                    })
                },
                o = (0, a(104509).wt)("globeSmall", r, "small")
        },
        455205: (e, t, a) => {
            a.r(t), a.d(t, {
                FETCHABLE_TEAM_TYPES: () => i,
                fetchUnfetchedTeams: () => c,
                fetchUnfetchedTeamsFromLocalStorage: () => l,
                getActiveTeamsMetadataForUserInSpace: () => f,
                getAllTeamsMetadataForUserInSpace: () => p,
                getTeamMetadataFromStore: () => m,
                getTeamStore: () => b,
                refetchTeams: () => s
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520);
            var r = () => a(988752);
            async function o(e) {
                let {
                    actorUserId: t,
                    targetUserId: r,
                    spaceId: o,
                    teamTypes: d,
                    teamIds: i,
                    environment: n
                } = e;
                if (!(0, a(422280).GL)({
                        actorUserId: t,
                        targetUserId: r,
                        teamTypes: d
                    })) throw new(a(101787)).qQk("User does not have permission to fetch teams for another user.");
                let c = await n.api.callCellCompatibleApi({
                    eventName: "getTeamsV2",
                    environment: n,
                    data: {
                        spaceId: o,
                        teamTypes: Array.from(d),
                        teamIds: "all" === i ? void 0 : Array.from(i),
                        sort: e.sort,
                        canTruncateRecordMap: e.canTruncateRecordMap,
                        includeMembershipSummary: !(0, a(958692).X7)() && void 0,
                        targetUserId: r
                    },
                    userId: t,
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: o
                    }
                });
                if ("failed" === c.type) throw c.error;
                let {
                    teams: s,
                    hasUnjoinedActiveTeams: l
                } = c.data;
                return {
                    teams: s,
                    ...void 0 !== l && {
                        hasUnjoinedActiveTeams: l
                    }
                }
            }
            let d = new(a(245541)).R({
                    key: "localStorageTeams",
                    namespace: a(274919).Bq,
                    important: !1,
                    trackingType: "preference"
                }),
                i = ["Joined", "UnjoinedActive", "Archived"];
            async function n(e) {
                let {
                    userId: t,
                    spaceId: i,
                    teamTypesToUpdate: n,
                    teamIdsToUpdate: c,
                    environment: s,
                    canTruncateRecordMap: l,
                    sort: u
                } = e, f = r().E.getOrCreateUnit(t, i);
                if (0 === n.size || "all" !== c && 0 === c.size) return void await f.pendingUpdates;
                let p = o({
                    actorUserId: t,
                    targetUserId: t,
                    spaceId: i,
                    teamTypes: n,
                    teamIds: c,
                    environment: s,
                    canTruncateRecordMap: l,
                    sort: u
                });
                r().E.queueUpdateForSpaceUser({
                        userId: t,
                        spaceId: i,
                        fetchedTeamsPromise: p,
                        fetchedTeamsSource: "server",
                        teamTypesToUpdate: n,
                        teamIdsToUpdate: c
                    }), await f.pendingUpdates,
                    function(e) {
                        let {
                            userId: t,
                            spaceId: r,
                            teamsResponse: o
                        } = e;
                        if (!a(218744).default.checkGate({
                                gateName: "teams_local_storage_write"
                            })) return;
                        let {
                            teams: i
                        } = o, n = i.filter(e => "Joined" === e.type), c = i.filter(e => "UnjoinedActive" === e.type), s = i.filter(e => "Archived" === e.type), l = n.concat(c, s).slice(0, 1e3);
                        d.update(e => ({ ...e ? ? {},
                            [t] : { ...(null == e ? void 0 : e[t]) ? ? {},
                                [r] : { ...o,
                                    teams: l
                                }
                            }
                        }))
                    }({
                        userId: t,
                        spaceId: i,
                        teamsResponse: {
                            teams: Object.values(f.teams),
                            hasUnjoinedActiveTeams: f.hasUnjoinedActiveTeams
                        }
                    })
            }
            async function c(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teamTypes: o,
                    environment: d,
                    canTruncateRecordMap: i,
                    sort: c
                } = e, s = r().E.getOrCreateUnit(t, a), l = new Set(Array.from(o.values()).filter(e => "server" !== s.lastFetchSourceOfTeamType[e]));
                await n({
                    userId: t,
                    spaceId: a,
                    teamTypesToUpdate: l,
                    teamIdsToUpdate: "all",
                    environment: d,
                    canTruncateRecordMap: i,
                    sort: c
                })
            }
            async function s(e) {
                let {
                    userId: t,
                    spaceId: a,
                    teamIds: o,
                    environment: d
                } = e, c = r().E.getOrCreateUnit(t, a), s = new Set(i.filter(e => "server" === c.lastFetchSourceOfTeamType[e]));
                await n({
                    userId: t,
                    spaceId: a,
                    teamTypesToUpdate: s,
                    teamIdsToUpdate: o,
                    environment: d
                })
            }

            function l() {
                let e = d.getState();
                for (let t in e)
                    for (let a in e[t]) {
                        let o = r().E.getOrCreateUnit(t, a),
                            d = new Set(i.filter(e => "none" === o.lastFetchSourceOfTeamType[e]));
                        0 !== d.size && r().E.queueUpdateForSpaceUser({
                            userId: t,
                            spaceId: a,
                            fetchedTeamsPromise: Promise.resolve(e[t][a]),
                            fetchedTeamsSource: "local",
                            teamTypesToUpdate: d,
                            teamIdsToUpdate: "all"
                        })
                    }
            }
            async function u(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    teamTypes: o,
                    environment: d
                } = e;
                return await c({
                    userId: t,
                    spaceId: a.id,
                    teamTypes: o,
                    environment: d
                }), r().E.readTeams(t, a.id, o).teams
            }
            async function f(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    environment: r
                } = e;
                return await u({
                    userId: t,
                    spaceStore: a,
                    teamTypes: new Set(["Joined", "UnjoinedActive"]),
                    environment: r
                })
            }
            async function p(e) {
                let {
                    userId: t,
                    spaceStore: a,
                    environment: r
                } = e;
                return await u({
                    userId: t,
                    spaceStore: a,
                    teamTypes: new Set(["Joined", "UnjoinedActive", "Archived"]),
                    environment: r
                })
            }

            function b(e) {
                let {
                    teamId: t,
                    spaceStore: r
                } = e;
                return a(681735).h.createChildStore(r, {
                    table: a(832375).yKj,
                    id: t
                })
            }

            function m(e) {
                var t;
                let {
                    teamStore: o,
                    userId: d,
                    spaceStore: i
                } = e, n = r().E.readMembershipCount({
                    userId: d,
                    spaceId: i.id,
                    teamId: o.id
                }), c = o.getArchivedBy() ? "Archived" : (0, a(220530).f)({
                    userId: d,
                    teamStore: o,
                    userPermissionGroups: a(68809).f.getSpacePermissionGroupIds({
                        spaceId: i.id
                    })
                }) ? "Joined" : "UnjoinedActive", s = (0, a(228091).a)({
                    teamStore: o,
                    userId: d,
                    userPermissionGroups: a(68809).f.getSpacePermissionGroupIds({
                        spaceId: i.id
                    })
                }) ? ? "none";
                return {
                    id: o.id,
                    title: o.getName() ? ? "",
                    icon: null == (t = o.getIcon()) ? void 0 : t.icon,
                    type: c,
                    membershipSummary: n,
                    lastEditedTime: 0 === o.getLastEditedTime() ? void 0 : o.getLastEditedTime(),
                    securitySettings: {
                        disablePublicAccess: o.getDisablePublicAccess(),
                        disableGuests: o.getDisableGuests(),
                        disableExport: o.getDisableExport()
                    },
                    teamRole: s,
                    isDefaultTeam: o.isDefault(),
                    accessLevel: o.getTeamAccessLevel(),
                    description: o.getDescription()
                }
            }
        },
        478418: (e, t, a) => {
            a.d(t, {
                J: () => r
            });

            function r(e, t) {
                if (t && t.asActor) switch (t.pointer.table) {
                    case "bot":
                        return new(a(447003)).v(e, t.pointer);
                    case "notion_user":
                        return new(a(807825)).L(e, t.pointer);
                    default:
                        (0, a(722371).HB)(t.pointer)
                }
            }
        },
        480605: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                peopleFillSmallIcon: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.55 1.9 15.26 11.99",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.4 1.908c-.872 0-1.584.362-2.064.96-.469.584-.687 1.353-.687 2.145 0 .793.218 1.561.687 2.145.48.599 1.192.96 2.064.96s1.584-.361 2.065-.96c.468-.584.687-1.352.687-2.145s-.219-1.56-.687-2.144c-.48-.6-1.193-.96-2.065-.96M2.693 3.46c.445-.554 1.104-.888 1.907-.888.804 0 1.463.334 1.907.888.433.539.632 1.245.632 1.97s-.2 1.43-.632 1.97c-.444.553-1.103.887-1.907.887-.803 0-1.462-.334-1.907-.888-.433-.539-.632-1.245-.632-1.97s.2-1.43.632-1.97M.71 11.561c.68-1.42 2.175-2.389 3.89-2.389.797 0 1.547.21 2.19.576a5.6 5.6 0 0 0-.814 1.333 2.78 2.78 0 0 0 .337 2.811H2.43c-.577 0-1.132-.243-1.49-.656a1.51 1.51 0 0 1-.23-1.675M11.4 8.84c-1.917 0-3.58 1.117-4.279 2.735a1.54 1.54 0 0 0 .268 1.665c.36.41.913.652 1.49.652h5.04c.579 0 1.131-.242 1.492-.652a1.54 1.54 0 0 0 .268-1.665c-.7-1.618-2.362-2.736-4.279-2.736"
                    })
                },
                o = (0, a(104509).wt)("peopleFillSmall", r, "fillSmall")
        },
        496722: (e, t, a) => {
            a.d(t, {
                a: () => r
            });

            function r() {
                let e = a(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        497570: (e, t, a) => {
            function r(e) {
                return e.isReady() && !e.isDefined() && "none" !== e.getRole()
            }

            function o(e) {
                return (0, a(682985).K8)(() => r(e), [e])
            }
            a.d(t, {
                W: () => o,
                X: () => r
            })
        },
        503473: (e, t, a) => {
            a.d(t, {
                j: () => i
            });
            var r = a(296540),
                o = a(474848);
            let d = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function i(e) {
                let {
                    children: t,
                    style: i,
                    overlayContainerZIndex: n,
                    placement: c = "bottom",
                    tooltipStyle: s
                } = e, {
                    isSafari: l
                } = (0, a(533992).Y0)(), u = (0, r.useRef)(null), f = function(e) {
                    let [t, a] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void a(!1);
                        let r = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            a(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == r || r.observe(t), () => null == r ? void 0 : r.unobserve(t)
                    }, []), t
                }(u);
                return (0, o.jsx)(a(51831).m, {
                    delayThreshold: 500,
                    placement: c,
                    textWrap: !0,
                    style: s,
                    overlayContainerZIndex: n,
                    forceVisibleState: !!f && void 0,
                    disableTooltip: l,
                    content: () => f ? t : void 0,
                    children: e => (0, o.jsx)("div", {
                        ref: u,
                        ...a(952687).A.props(d, i),
                        ...e,
                        children: t
                    })
                })
            }
        },
        519529: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                xMarkFillSmallIcon: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                o = (0, a(104509).wt)("xMarkFillSmall", r, "fillSmall")
        },
        551408: (e, t, a) => {
            function r() {
                let e = (0, a(83208).X)("database_agents"),
                    t = (0, a(682985).K8)(() => a(886556).z.isAiEnabled(), []);
                return e && t
            }

            function o() {
                return a(218744).default.checkGate({
                    gateName: "database_agents"
                }) && a(886556).z.isAiEnabled()
            }
            a.d(t, {
                A: () => r,
                R: () => o
            })
        },
        554730: (e, t, a) => {
            a.d(t, {
                z: () => d
            });
            var r = () => a(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        isOpen: !1
                    }
                }
            }
            let d = new o
        },
        555676: (e, t, a) => {
            let r;

            function o(e) {
                r = e
            }

            function d() {
                return r
            }
            a.d(t, {
                w: () => o,
                x: () => d
            })
        },
        557620: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(581454);

            function r(e) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    var r;
                    let o = null == e ? void 0 : e.id;
                    if (o) return null == (r = a(428456).A.getData(t, {
                        spaceId: o
                    })) ? void 0 : r.map(e => e.domain)
                }, [t, e])
            }
        },
        569145: (e, t, a) => {
            function r() {
                a(554730).z.setState({
                    isOpen: !0
                })
            }

            function o() {
                a(554730).z.setState({
                    isOpen: !1
                })
            }
            a.d(t, {
                V: () => o,
                h: () => r
            })
        },
        606430: (e, t, a) => {
            a.d(t, {
                w: () => s,
                y: () => c
            });
            let r = {
                    sources: {
                        "en-US": {
                            previewRootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            rootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                o = {
                    sources: {
                        "en-US": {
                            previewRootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            rootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            rootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            rootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            rootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            rootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            rootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            rootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            rootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            rootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            rootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            rootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            rootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            rootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            rootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            rootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            rootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            rootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            rootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            rootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            previewRootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            previewRootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                d = {
                    sources: {
                        "en-US": {
                            previewRootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            rootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            rootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            rootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            rootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            rootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            rootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            rootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            rootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            rootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            rootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            rootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            rootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            rootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            rootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            rootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            rootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-812b-acae-d320272c9931",
                            rootId: "22317954-d9c2-812b-acae-d320272c9931",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            rootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            rootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            previewRootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            previewRootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                i = {
                    sources: {
                        "en-US": {
                            previewRootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            rootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            rootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            rootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            rootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            rootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            rootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            rootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            rootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            rootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            rootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            rootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            rootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            rootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            rootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            rootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            rootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            rootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            rootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            rootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            previewRootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            previewRootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                n = {
                    sources: {
                        "en-US": {
                            previewRootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            rootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            rootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            rootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            rootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            rootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            rootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            rootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            rootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            rootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            rootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            rootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            rootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            rootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            rootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            previewRootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            previewRootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPageEvernote
                },
                c = {
                    desktopPersonal: o,
                    desktopTeamCreate: d,
                    desktopTeamJoin: i,
                    mobile: {
                        sources: {
                            "en-US": {
                                previewRootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                rootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                rootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                rootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                rootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                rootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                rootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                rootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                rootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                spaceId: a(54353).rQ
                            },
                            "nb-NO": {
                                previewRootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                rootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                spaceId: a(54353).rQ
                            },
                            "nl-NL": {
                                previewRootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                rootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                spaceId: a(54353).rQ
                            },
                            "da-DK": {
                                previewRootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                rootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                spaceId: a(54353).rQ
                            },
                            "sv-SE": {
                                previewRootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                rootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                spaceId: a(54353).rQ
                            },
                            "fi-FI": {
                                previewRootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                rootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                spaceId: a(54353).rQ
                            },
                            "zh-CN": {
                                previewRootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                rootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                spaceId: a(54353).rQ
                            },
                            "zh-TW": {
                                previewRootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                rootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                spaceId: a(54353).rQ
                            },
                            "en-GB": {
                                previewRootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                rootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                spaceId: a(54353).rQ
                            },
                            "id-ID": {
                                previewRootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                rootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                spaceId: a(54353).rQ
                            },
                            "vi-VN": {
                                previewRootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                rootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                spaceId: a(54353).rQ
                            },
                            "th-TH": {
                                previewRootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                rootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                spaceId: a(54353).rQ
                            },
                            "ar-SA": {
                                rootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                previewRootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                spaceId: a(54353).rQ
                            },
                            "he-IL": {
                                rootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                previewRootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                spaceId: a(54353).rQ
                            }
                        },
                        nameMessage: a(647414).DZ.getStartedPageMobile
                    },
                    evernote: n,
                    web: r
                },
                s = {
                    teamsHomepage: {
                        emoji: "🏠",
                        nameMessage: a(647414).DZ.teamsHomepage,
                        sources: {
                            "en-US": {
                                previewRootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                rootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                rootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                rootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                rootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                rootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                rootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                rootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                rootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                spaceId: a(54353).rQ
                            }
                        }
                    }
                }
        },
        645153: (e, t, a) => {
            a.d(t, {
                A: () => i
            }), a(898992), a(354520), a(581454), a(737550);
            var r = a.n(a(844751)),
                o = a(296540),
                d = a(474848);
            let i = function({
                selectedProperty: e,
                onAccept: t,
                schema: i,
                onClose: n,
                allowProperty: c,
                isRelationProperty: s
            }) {
                let l, u = (0, a(109939).tz)(),
                    [f, p] = (0, o.useState)(""),
                    b = Object.keys(i),
                    m = b.some(a(235089).u);
                b = a(381453).Ul(b, e => {
                    let t = (0, a(561872)._g)({
                        schema: i,
                        property: e
                    });
                    return t ? t.name : ""
                });
                let I = m ? a(9247).Ho : a(439368).rn;
                if ((b = a(381453).FF(b, I)).unshift(I), c && (b = b.filter(e => {
                        let t = (0, a(561872)._g)({
                            schema: i,
                            property: e
                        });
                        return t && c(t)
                    })), f) {
                    let e = b.map(e => {
                        let t = (0, a(561872)._g)({
                            schema: i,
                            property: e
                        });
                        return t && t.name
                    });
                    e = r().filter(f, e).map(({
                        original: e
                    }) => e), b = b.filter(t => {
                        let r = (0, a(561872)._g)({
                            schema: i,
                            property: t
                        });
                        return r && r.name && e.includes(r.name)
                    })
                }
                let v = f || b.length > a(847754).R8,
                    h = a(381453).oE(b.map(r => {
                        let o = (0, a(561872)._g)({
                            schema: i,
                            property: r
                        });
                        return o ? {
                            key: r,
                            render: t => (0, d.jsx)(a(34824).G, { ...t,
                                propertySchema: o,
                                format: a(34824).e.Name,
                                isChecked: r === e
                            }),
                            action: () => t(r)
                        } : null
                    })),
                    g = [{
                        key: 0,
                        items: h
                    }],
                    y = v ? (0, d.jsx)(a(844565).A, {
                        isInput: !0,
                        children: (0, d.jsx)(a(310324).Ay, {
                            focus: !a(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            value: f,
                            onChange: e => p(e.target.value),
                            placeholder: s ? u.formatMessage({
                                defaultMessage: "Search for a relation property…",
                                id: "propertySelectMenu.searchForProperty.relation.placeholder"
                            }) : u.formatMessage({
                                defaultMessage: "Search for a property…",
                                id: "propertySelectMenu.searchForProperty.default.placeholder"
                            })
                        })
                    }) : null;
                return l = a(986939).A.isMobile ? {
                    menuType: a(649476).gu.Modal,
                    title: s ? u.formatMessage({
                        defaultMessage: "Relation property",
                        id: "propertySelectMenu.mobileMenu.relationProperty.header"
                    }) : u.formatMessage({
                        defaultMessage: "Property",
                        id: "propertySelectMenu.mobileMenu.property.header"
                    }),
                    right: (0, d.jsx)(a(109939).sA, { ...a(789722).W.cancel
                    }),
                    onClickRight: n,
                    header: y
                } : {
                    menuType: a(649476).gu.Popup,
                    width: 280,
                    maxHeight: 480,
                    header: y
                }, (0, d.jsx)(a(747369).A, { ...l,
                    children: 0 === h.length ? (0, d.jsx)(a(844565).A, {
                        children: (0, d.jsx)(a(498341).u, {
                            title: (0, d.jsx)(a(109939).sA, {
                                defaultMessage: "No results",
                                id: "propertySelectMenu.search.noResults.title"
                            })
                        })
                    }) : (0, d.jsx)(a(558045).A, {
                        type: a(558045).O.Vertical,
                        sections: g,
                        onAccept: n,
                        initialFocus: f.length > 0 ? 0 : void 0
                    })
                })
            }
        },
        646440: (e, t, a) => {
            function r(e) {
                return e.table === a(43296).C ? e : void 0
            }

            function o(e) {
                var t;
                return (null == (t = e.getModel()) ? void 0 : t.getData()) || (0, a(425749).bZ)()
            }

            function d(e) {
                let {
                    workflowPointer: t,
                    threadPointer: a
                } = e, r = t ? ? a;
                if (!r) throw Error("No workflow definition pointer found");
                return r
            }

            function i(e) {
                switch (e.table) {
                    case "workflow":
                        return e.id;
                    case "workflow_artifact":
                        return e.getParentId();
                    case "thread":
                        let t = e.getConfig();
                        return (null == t ? void 0 : t.type) === "workflow" ? t.workflowId : void 0;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function n(e) {
                var t, r;
                let o;
                switch (e.table) {
                    case a(581654).U6:
                        o = null == (t = e.getData()) ? void 0 : t.runtime_actor_pointer;
                        break;
                    case a(43296).C:
                        o = null == (r = e.getPublishedArtifactStore()) || null == (r = r.getData()) ? void 0 : r.runtime_actor_pointer;
                        break;
                    default:
                        (0, a(722371).HB)(e)
                }
                if (o && o.table === a(890920).GP) return o.id
            }
            a.r(t), a.d(t, {
                getBotIdFromStore: () => n,
                getWorkflowDefinitionPointer: () => d,
                getWorkflowIdFromStore: () => i,
                getWorkflowValue: () => o,
                maybeWorkflowStore: () => r
            }), a(16280)
        },
        650750: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => o,
                squareOnSquarePlusIcon: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.51 15.51",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M12 8.875c.345 0 .625.28.625.625v1.875H14.5a.625.625 0 1 1 0 1.25h-1.875V14.5a.625.625 0 1 1-1.25 0v-1.875H9.5a.625.625 0 1 1 0-1.25h1.875V9.5c0-.345.28-.625.625-.625"
                        }), (0, r.jsx)("path", {
                            d: "M4.5 2.375A2.125 2.125 0 0 0 2.375 4.5V12c0 1.174.951 2.125 2.125 2.125h1.625v1.625c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-7.5a2.125 2.125 0 0 0-2.125-2.125h-1.625V4.5A2.125 2.125 0 0 0 12 2.375zm8.375 3.75H8.25A2.125 2.125 0 0 0 6.125 8.25v4.625H4.5A.875.875 0 0 1 3.625 12V4.5c0-.483.392-.875.875-.875H12c.483 0 .875.392.875.875zm-5.5 2.125c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                d = (0, a(104509).wt)("squareOnSquarePlus", o, "default")
        },
        691509: (e, t, a) => {
            a.d(t, {
                A: () => d
            }), a(944114), a(898992), a(803949), a(581454);
            var r = a(296540),
                o = a(474848);
            let d = function({
                children: e,
                onClick: t,
                items: r,
                getKey: d,
                renderItem: i,
                selectedItem: c,
                onSelect: s,
                dontCloseParentOnSelect: l,
                menuTypeOverride: u,
                menuTitle: f,
                width: p,
                minWidth: b,
                disabled: m,
                originGap: I,
                originRectTransform: v,
                buttonPopupStore: h,
                sameWidthAsOrigin: g
            }) {
                let y = (0, a(682985).uB)(h, a(510969).A),
                    w = u ? ? (a(986939).A.isMobile ? a(649476).gu.Modal : a(649476).gu.Popup);
                return (0, o.jsx)(a(656252).A, {
                    popupType: function(e) {
                        switch (e) {
                            case a(649476).gu.ActionSheet:
                                return a(423291).n.SlideUp;
                            case a(649476).gu.Modal:
                                return a(423291).n.BottomSheet;
                            case a(649476).gu.Popup:
                                return a(423291).n.Popup
                        }
                    }(w),
                    bottomSheetInitialState: "half",
                    buttonPopupStore: y,
                    placementToOrigin: "bottom",
                    onClick: t,
                    content: e => (0, o.jsx)(n, {
                        parent: e,
                        items: r,
                        getKey: d,
                        renderItem: i,
                        selectedItem: c,
                        onSelect: s,
                        dontCloseParentOnSelect: l,
                        menuType: w,
                        menuTitle: f,
                        width: p,
                        minWidth: b
                    }),
                    disabled: m,
                    originGap: I,
                    originRectTransform: v,
                    sameWidthAsOrigin: g,
                    children: e
                })
            };

            function i(e, t, o, d, i, n, c, s) {
                return {
                    key: 0,
                    render: e => (0, r.createElement)(a(844565).A, { ...e,
                        key: t,
                        topBorder: t > 0
                    }),
                    items: e.map(e => ({
                        key: d(e),
                        render: t => i({ ...t,
                            value: e,
                            key: d(e),
                            selectedItem: n
                        }),
                        action: () => {
                            n !== e && c(e), s || o.close()
                        }
                    }))
                }
            }

            function n({
                parent: e,
                items: t,
                getKey: r,
                renderItem: d,
                selectedItem: c,
                onSelect: s,
                dontCloseParentOnSelect: l,
                menuType: u,
                menuTitle: f,
                width: p,
                minWidth: b
            }) {
                let m, I = [];
                if (t.length > 0 && t[0] instanceof Array) t.forEach((t, a) => {
                    let o = i(t, a, e, r, d, c, s, l);
                    I.push(o)
                });
                else {
                    let a = i(t, 0, e, r, d, c, s, l);
                    I.push(a)
                }
                let v = (0, o.jsx)(a(558045).A, {
                    type: a(558045).O.Vertical,
                    initialFocus: a(381453).SL(a(381453).Bq(t), e => a(381453).n4(e, c)),
                    sections: I
                });
                switch (u) {
                    case a(649476).gu.ActionSheet:
                        m = {
                            menuType: a(649476).gu.ActionSheet
                        };
                        break;
                    case a(649476).gu.Modal:
                        m = {
                            menuType: a(649476).gu.Modal,
                            title: f,
                            right: (0, o.jsx)(a(109939).sA, { ...a(789722).W.done
                            }),
                            onClickRight: e.close
                        };
                        break;
                    case a(649476).gu.Popup:
                        m = {
                            menuType: a(649476).gu.Popup,
                            width: p || 160,
                            minWidth: b
                        };
                        break;
                    default:
                        (0, a(722371).HB)(u)
                }
                return (0, o.jsx)(a(747369).A, { ...m,
                    children: v
                })
            }
        },
        739271: (e, t, a) => {
            a.d(t, {
                s: () => o
            });
            var r = a(296540);

            function o() {
                let [e, t] = (0, r.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [a, o] = (0, r.useState)(!1), [d, i] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    if (a) {
                        function e() {
                            i(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && i(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [a]), [(0, r.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && d,
                    onFocus: () => {
                        o(!0)
                    },
                    onBlur: () => {
                        o(!1)
                    }
                }), [e, d]), (0, r.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: d,
                    isComboboxFocused: a,
                    onItemHover: () => {
                        i(!1)
                    }
                }), [d, a])]
            }
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => r
            });
            let r = (0, a(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        803254: (e, t, a) => {
            a.d(t, {
                F: () => r
            });

            function r() {
                return a(986939).A.isMobile
            }
        },
        845001: (e, t, a) => {
            function r(e, t) {
                return a(218744).default.checkGate({
                    gateName: "collections_capabilities_refactor"
                }) ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1
            }

            function o(e, t) {
                let r = (0, a(83208).X)("collections_capabilities_refactor");
                return (0, a(682985).K8)(() => r ? (null == e ? void 0 : e.state.canConfigureView) ? ? !1 : (null == t ? void 0 : t.state.canConfigureBlock) ? ? !1, [e, t, r])
            }
            a.d(t, {
                q: () => r,
                x: () => o
            })
        },
        847754: (e, t, a) => {
            a.d(t, {
                R8: () => d,
                VL: () => o,
                xO: () => r
            });
            let r = 480,
                o = 320,
                d = 6
        },
        853160: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleIcon: () => d,
                iconDefinition: () => o
            }), a(296540);
            var r = a(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, r.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                d = (0, a(104509).wt)("checkmarkCircle", o, "default")
        },
        855021: (e, t, a) => {
            a.d(t, {
                q: () => r
            });

            function r() {
                let e = (0, a(972740).L)(),
                    t = (0, a(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    r = (0, a(533992).v3)(),
                    o = (0, a(682985).K8)(() => a(375592).T.getData(r, {
                        userId: r.currentUser.id || ""
                    }), [r]);
                return (0, a(682985).K8)(() => (0, a(407998).V)({
                    environment: r,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: o
                }), [r, e, t, o])
            }
        },
        862215: (e, t, a) => {
            a.d(t, {
                G: () => r
            });

            function r(e, t) {
                let {
                    device: a
                } = e;
                a.isAndroid && t.focus(), t.select()
            }
        },
        870143: (e, t, a) => {
            a.d(t, {
                Q: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.37 6.18 17.25 7.64",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M17.375 10c0-2.206-2.602-3.38-4.256-1.92L10.944 10l2.175 1.92c1.654 1.46 4.256.286 4.256-1.92m-14.75 0c0 2.206 2.602 3.38 4.256 1.92L9.055 10 6.88 8.08C5.227 6.62 2.625 7.794 2.625 10m16 0c0 3.282-3.873 5.03-6.333 2.857L10 10.833l-2.292 2.024c-2.46 2.172-6.333.425-6.333-2.857s3.872-5.03 6.333-2.857L10 9.166l2.292-2.023c2.46-2.172 6.333-.425 6.333 2.857"
                    })
                },
                o = (0, a(104509).wt)("infinity", r, "default")
        },
        874003: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var r = () => a(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        changePermissionsEnabled: !1,
                        privatePageStore: void 0,
                        privateWorkflowStore: void 0,
                        loading: !1,
                        error: void 0
                    }
                }
                shouldSaveTransactionWithSudoMode(e) {
                    let t = e === this.state.privatePageStore || e === this.state.privateWorkflowStore,
                        a = this.doesUserAlreadyHaveEditorAccess(e.pointer);
                    return t && this.state.changePermissionsEnabled && !a
                }
                shouldUserHaveAccessToPrivatePageBlock() {
                    var e, t;
                    let r = null == (e = (0, a(328765).S)()) ? void 0 : e.canAdmin(),
                        o = (null == (t = (0, a(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privatePageStore && r && o
                }
                shouldUserHaveAccessToPrivateWorkflow() {
                    var e, t;
                    let r = null == (e = (0, a(328765).S)()) ? void 0 : e.canAdmin(),
                        o = (null == (t = (0, a(328765).S)()) ? void 0 : t.getSubscriptionTier()) === "enterprise";
                    return this.state.privateWorkflowStore && r && o
                }
                doesUserAlreadyHaveEditorAccess(e) {
                    let t = a(728372).AppStoreSidebarSpaceStore.state;
                    return !!t && (e.table === a(832375).evP ? a(970831).B.createChildStore(t, e) : "collection" === e.table ? a(356912).m.createChildStore(t, e) : a(360851).N.createChildStore(t, e)).canAdmin()
                }
            }
            let d = o
        },
        876252: (e, t, a) => {
            a.d(t, {
                $: () => r
            });

            function r() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserStore)
            }
        },
        884877: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var r = a(474848);

            function o(e) {
                let t = {
                    display: "inline-block",
                    minWidth: e.size,
                    minHeight: e.size
                };
                return "x" === e.axis ? t.minHeight = 1 : "y" === e.axis && (t.minWidth = 1), (0, r.jsx)("div", {
                    style: t
                })
            }
        },
        895105: (e, t, a) => {
            a.r(t), a.d(t, {
                filterIcon: () => o,
                iconDefinition: () => r
            }), a(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                o = (0, a(104509).wt)("filter", r, "default")
        },
        916612: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(296540);
            var r = a(474848);
            let o = function({
                    imageURL: e,
                    imageWidth: t,
                    imageHeight: o,
                    caption: d,
                    title: n,
                    imageContainerStyle: c
                }) {
                    if (!e) return (0, r.jsx)(i, {
                        caption: d,
                        title: n,
                        style: {
                            width: t
                        }
                    }); {
                        let s = (0, a(703003).L)(e);
                        return (0, r.jsxs)("div", {
                            style: {
                                width: t || 200,
                                marginTop: 4,
                                marginBottom: 4
                            },
                            children: [(0, r.jsx)("div", {
                                style: {
                                    width: "100%",
                                    height: o || 100,
                                    borderRadius: 4,
                                    backgroundImage: `url(${s})`,
                                    backgroundSize: "cover",
                                    marginBottom: 6,
                                    ...c
                                }
                            }), (0, r.jsx)(i, {
                                caption: d,
                                title: n
                            })]
                        })
                    }
                },
                d = {
                    style0: {
                        fontWeight: a(699422).Wy.bold,
                        marginBottom: 4
                    },
                    style1: {
                        whiteSpace: "normal",
                        lineHeight: 1.4
                    }
                };

            function i({
                style: e,
                caption: t,
                title: a
            }) {
                return (0, r.jsxs)("div", {
                    style: { ...d.style1,
                        ...e
                    },
                    children: [a ? (0, r.jsx)("header", {
                        style: d.style0,
                        children: a
                    }) : void 0, t]
                })
            }
        },
        920224: (e, t, a) => {
            a.d(t, {
                A: () => u,
                S: () => s
            });
            var r = a(296540),
                o = a(474848);
            let d = "bodyRegular",
                i = "bodySemibold",
                n = "bodySmRegular",
                c = r.forwardRef((e, t) => {
                    let r, {
                            actor: d,
                            defaultUserTitle: i = "name_only",
                            useEmailAsTooltip: n,
                            tooltip: c,
                            tooltipPlacement: u,
                            hoveredStyle: f,
                            disabledFeedback: p,
                            customUserTitleStyles: b,
                            iconSizeOverride: m
                        } = e,
                        I = (0, a(682985).K8)(() => d.asActor && d.isUser() ? d.email : void 0, [d]),
                        v = n && I ? I : c,
                        h = m || (a(986939).A.isMobile ? a(636518).nd : a(636518).pg),
                        g = "name_and_email" !== i && ("name_and_email_unless_right" !== i || e.right) ? (0, o.jsx)(s, {
                            customStyles: b,
                            actor: null == d ? void 0 : d.asActor
                        }) : (0, o.jsx)(l, {
                            actor: null == d ? void 0 : d.asActor,
                            customStyles: b
                        });
                    return (0, a(197018).H3)(d) ? r = (0, o.jsx)(a(31319).A, {
                        botValue: null == d ? void 0 : d.asActor,
                        size: h
                    }) : (0, a(197018).ps)(d) ? r = (0, o.jsx)(a(321753).A, {
                        userValue: null == d ? void 0 : d.asActor,
                        size: h
                    }) : (0, a(722371).HB)(d), (0, o.jsx)(a(51831).m, {
                        placement: u ? ? "bottom",
                        alignment: "start",
                        textWrap: !0,
                        disableTooltip: !v,
                        content: () => v,
                        children: d => (0, o.jsx)(a(95582).A, { ...(0, a(63390).A)(d, e),
                            icon: r,
                            title: g,
                            disabledFeedback: p,
                            className: "notranslate",
                            ref: t,
                            hoveredStyle: f
                        })
                    })
                });

            function s(e) {
                let {
                    actor: t,
                    customStyles: r
                } = e, i = (0, a(533992).v3)(), c = (0, a(109939).tz)(), s = t && t.id === i.currentUser.id, l = (0, a(682985).K8)(() => t && t.getDisplayName(c), [t, c]), u = a(986939).A.isMobile ? n : d;
                return s ? (0, o.jsx)(a(109939).sA, {
                    id: "UserMenuItem.fullName.authorLabel",
                    defaultMessage: "<author>{fullName}</author> <you>(You)</you>",
                    values: {
                        author: e => (0, o.jsx)(a(111010).D, {
                            as: "span",
                            styleKey: u,
                            style: r,
                            children: e
                        }),
                        fullName: l,
                        you: e => (0, o.jsx)(a(111010).D, {
                            as: "span",
                            colorVariant: "secondary",
                            styleKey: u,
                            style: r,
                            children: e
                        })
                    }
                }) : l ? (0, o.jsx)(a(111010).D, {
                    lineClamp: 1,
                    styleKey: u,
                    style: r,
                    children: l
                }) : (0, o.jsx)(a(111010).D, {
                    styleKey: u,
                    style: r,
                    children: (0, o.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }

            function l(e) {
                let {
                    actor: t,
                    customStyles: r
                } = e, c = (0, a(109939).tz)(), s = (0, a(682985).K8)(() => t && t.getDisplayName(c), [t, c]), {
                    email: l,
                    showEmail: u
                } = (0, a(682985).K8)(() => {
                    let e = t && t.asActor && t.isUser() ? t.email : void 0;
                    return {
                        email: e,
                        showEmail: s !== e
                    }
                }, [t, s]), f = a(986939).A.isMobile ? "bodySmRegular" : i, p = a(986939).A.isMobile ? n : d;
                return s ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: f,
                        style: r,
                        children: s
                    }), u ? (0, o.jsx)(a(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: p,
                        style: r,
                        children: ` ${l}`
                    }) : void 0]
                }) : (0, o.jsx)(a(111010).D, {
                    styleKey: i,
                    style: r,
                    children: (0, o.jsx)(a(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }
            c.displayName = "UserMenuItem";
            let u = c
        },
        930113: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                lockFillSmallIcon: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.24 1.67 9.51 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.825 4.85a3.175 3.175 0 1 1 6.35 0v1.061a1.95 1.95 0 0 1 1.575 1.914v4.2a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95v-4.2c0-.949.677-1.74 1.575-1.914zm1.1 1.025h4.15V4.85a2.075 2.075 0 0 0-4.15 0zm2.525 4.299a1.05 1.05 0 1 0-.9 0v.976a.45.45 0 0 0 .9 0z"
                    })
                },
                o = (0, a(104509).wt)("lockFillSmall", r, "fillSmall")
        },
        931990: (e, t, a) => {
            function r(e) {
                let {
                    dateTime: t,
                    intl: r,
                    shortenDateAndRange: o
                } = e, d = a(25825).C6.toPersistedDate(t.valueOf());
                return a(850640).ZF({
                    value: d,
                    allowRelativeDates: !0,
                    intl: r,
                    shortenDateAndRange: o,
                    displayInUserTimezone: !0
                })
            }

            function o(e) {
                let {
                    dateTime: t,
                    intl: r,
                    userTimeZone: o,
                    displayInUserTimezone: d,
                    alwaysIncludeTimezone: i
                } = e, n = a(25825).C6.toPersistedDateTime(t.valueOf(), t.zoneName);
                return a(850640).ZF({
                    value: n,
                    allowRelativeDates: !0,
                    intl: r,
                    userTimeZone: o,
                    displayInUserTimezone: d,
                    alwaysIncludeTimezone: i
                })
            }

            function d(e) {
                let {
                    luxonRange: t,
                    intl: r
                } = e, o = a(25825).C6.toPersistedDateRange(t), d = a(850640).ZF({
                    value: o,
                    allowRelativeDates: !1,
                    shortenDateAndRange: !0,
                    intl: r,
                    displayInUserTimezone: !0
                }), i = t.end.setZone((0, a(714350).P)()), n = a(850640).fU({
                    start_time: i.toFormat(a(943003).GE),
                    humanReadable: !1,
                    intl: r
                });
                return r.formatMessage({
                    id: "verification.timeRange",
                    defaultMessage: "{formattedDateRange} at {formattedEndTime}"
                }, {
                    formattedDateRange: d,
                    formattedEndTime: n
                })
            }
            a.d(t, {
                OH: () => r,
                T2: () => o,
                do: () => d
            })
        },
        980494: (e, t, a) => {
            a.d(t, {
                A: () => d
            }), a(296540);
            var r = a(474848);
            let o = {
                    style0: { ...a(699422).RC
                    }
                },
                d = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        d = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        i = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: n,
                            avatarShouldShowShadow: c,
                            avatarSize: s,
                            hasTooltip: l,
                            tooltipHeader: u,
                            hasPersonHoverCard: f,
                            spaceStore: p
                        } = e,
                        b = (0, a(109939).tz)(),
                        m = (0, a(682985).K8)(() => null == n ? void 0 : n.getDisplayName(b), [n, b]),
                        I = (0, r.jsxs)("div", {
                            style: d,
                            children: [(0, r.jsx)("div", {
                                style: i,
                                children: (0, r.jsx)(a(321753).A, {
                                    userStore: n,
                                    avatarShouldShowShadow: c,
                                    size: s,
                                    hasTooltip: l && !f,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: u
                                })
                            }), (0, r.jsx)("div", {
                                className: "notranslate",
                                style: o.style0,
                                children: m
                            })]
                        });
                    return f ? (0, r.jsx)(a(532755).D, {
                        userStore: n,
                        spaceStore: p,
                        from: e.personHoverCardEntrypoint,
                        children: I
                    }) : I
                }
        },
        988890: (e, t, a) => {
            a.r(t), a.d(t, {
                PageVerificationMenuRenderer: () => o
            }), a(296540);
            var r = a(474848);

            function o() {
                let e = (0, a(533992).Y0)(),
                    t = (0, a(682985).O$)(a(554730).z),
                    o = (() => {
                        switch (!0) {
                            case e.isTablet:
                                return a(182718).nl.BottomSheet;
                            case a(986939).A.isMobile:
                                return a(182718).nl.SlideUp;
                            default:
                                return a(182718).nl.Popup
                        }
                    })(),
                    i = e.isTablet ? "half" : void 0;
                return (0, r.jsx)(a(182718).zD, {
                    popupType: o,
                    bottomSheetInitialState: i,
                    alignmentToOrigin: "center",
                    open: t.isOpen,
                    content: () => (0, r.jsx)(d, {
                        menuState: t
                    }),
                    onDismiss: () => a(569145).V()
                })
            }

            function d(e) {
                let t = (0, a(682985).O$)(a(728372).AppStoreMainEditorCurrentBlockStore);
                return e.menuState.isOpen && t ? (0, r.jsx)(a(571314).C, {
                    onClose: () => a(569145).V(),
                    blockStore: t,
                    entrypoint: "mobile_action_menu"
                }) : null
            }
        }
    }
]);